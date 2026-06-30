import json
import tempfile
import threading
import unittest
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from scrape_cpn_crop_lookout import extract_records, fetch_json_page, is_last_page, scrape_pages


class ExtractRecordsTest(unittest.TestCase):
    def test_extracts_top_level_list(self):
        self.assertEqual(extract_records([{"objectid": 1}, "skip"]), [{"objectid": 1}])

    def test_extracts_laravel_data_list(self):
        self.assertEqual(extract_records({"data": [{"objectid": 2}]}), [{"objectid": 2}])

    def test_extracts_nested_data_list(self):
        payload = {"data": {"data": [{"objectid": 3}], "current_page": 1}}
        self.assertEqual(extract_records(payload), [{"objectid": 3}])

    def test_returns_empty_for_unknown_shape(self):
        self.assertEqual(extract_records({"meta": {"total": 0}}), [])


class PaginationTest(unittest.TestCase):
    def test_detects_current_page_at_last_page(self):
        self.assertTrue(is_last_page({"current_page": "2", "last_page": "2"}))

    def test_detects_no_next_page_url_when_current_page_present(self):
        self.assertTrue(is_last_page({"current_page": 1, "next_page_url": None}))

    def test_does_not_stop_without_pagination_metadata(self):
        self.assertFalse(is_last_page({"data": [{"objectid": 1}]}))


class ScrapePagesTest(unittest.TestCase):
    def test_scrape_pages_writes_raw_pages_and_combined_records(self):
        payloads = {
            1: {"current_page": 1, "last_page": 2, "data": [{"objectid": 1}]},
            2: {"current_page": 2, "last_page": 2, "data": [{"objectid": 2}]},
        }
        calls = []

        def fake_fetch(base_url, params, timeout):
            calls.append((base_url, params, timeout))
            return payloads[params["page"]]

        with tempfile.TemporaryDirectory() as tmpdir:
            out_dir = Path(tmpdir) / "raw"
            combined_path = Path(tmpdir) / "all.json"
            records = scrape_pages(
                base_url="https://example.test/archive",
                out_dir=out_dir,
                combined_path=combined_path,
                page_size=100,
                sleep_seconds=0,
                timeout=10,
                fetch_page=fake_fetch,
            )

            self.assertEqual(records, [{"objectid": 1}, {"objectid": 2}])
            self.assertEqual(len(calls), 2)
            self.assertTrue((out_dir / "page_00001.json").exists())
            self.assertTrue((out_dir / "page_00002.json").exists())
            self.assertEqual(json.loads(combined_path.read_text()), records)

    def test_scrape_pages_honors_max_pages(self):
        def fake_fetch(base_url, params, timeout):
            return {"data": [{"objectid": params["page"]}]}

        with tempfile.TemporaryDirectory() as tmpdir:
            records = scrape_pages(
                base_url="https://example.test/archive",
                out_dir=Path(tmpdir) / "raw",
                combined_path=Path(tmpdir) / "all.json",
                page_size=50,
                sleep_seconds=0,
                timeout=10,
                max_pages=1,
                fetch_page=fake_fetch,
            )

            self.assertEqual(records, [{"objectid": 1}])


class FetchJsonPageTest(unittest.TestCase):
    def test_fetch_json_page_from_local_http_server(self):
        seen_paths = []

        class Handler(BaseHTTPRequestHandler):
            def do_GET(self):
                seen_paths.append(self.path)
                body = b'{"data": [{"objectid": 7}]}'
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)

            def log_message(self, format, *args):
                return

        server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            base_url = f"http://127.0.0.1:{server.server_port}/payload"
            payload = fetch_json_page(base_url, {"pagesize": 1, "page": 1}, 10)
        finally:
            server.shutdown()
            server.server_close()
            thread.join(timeout=5)

        self.assertEqual(payload, {"data": [{"objectid": 7}]})
        self.assertEqual(seen_paths, ["/payload?pagesize=1&page=1"])


if __name__ == "__main__":
    unittest.main()
