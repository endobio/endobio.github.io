#!/usr/bin/env python3
"""Scrape CPN Crop Lookout archive pages to reproducible raw JSON outputs."""

from __future__ import annotations

import argparse
import json
import time
from pathlib import Path
<<<<<<< ours
from typing import Any

import requests
=======
from typing import Any, Callable
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen
>>>>>>> theirs

BASE_URL = "https://cropprotectionnetwork.org/api/crop-lookout-archive"
DEFAULT_OUT_DIR = Path("cpn_crop_lookout_raw")
DEFAULT_COMBINED_PATH = Path("cpn_crop_lookout_all_raw.json")
DEFAULT_PAGE_SIZE = 100
DEFAULT_SLEEP_SECONDS = 0.5
<<<<<<< ours
=======
DEFAULT_TIMEOUT_SECONDS = 30
HEADERS = {
    "Accept": "application/json",
    "User-Agent": "EndoBio research ingestion / contact: https://www.endobio.ai",
    "Referer": "https://cropprotectionnetwork.org/crop-lookout-archive",
}

FetchPage = Callable[[str, dict[str, int], int], Any]
>>>>>>> theirs


def extract_records(payload: Any) -> list[dict[str, Any]]:
    """Return records from common Laravel/API pagination response shapes."""
    if isinstance(payload, list):
<<<<<<< ours
        return [r for r in payload if isinstance(r, dict)]
=======
        return [record for record in payload if isinstance(record, dict)]
>>>>>>> theirs

    if not isinstance(payload, dict):
        return []

    for key in ("data", "items", "results"):
        value = payload.get(key)
        if isinstance(value, list):
<<<<<<< ours
            return [r for r in value if isinstance(r, dict)]
=======
            return [record for record in value if isinstance(record, dict)]
>>>>>>> theirs

    nested = payload.get("data")
    if isinstance(nested, dict):
        for key in ("data", "items", "results"):
            value = nested.get(key)
            if isinstance(value, list):
<<<<<<< ours
                return [r for r in value if isinstance(r, dict)]
=======
                return [record for record in value if isinstance(record, dict)]
>>>>>>> theirs

    return []


def is_last_page(payload: Any) -> bool:
    """Detect stop conditions for common paginated APIs."""
    if not isinstance(payload, dict):
        return False

    current_page = payload.get("current_page")
    last_page = payload.get("last_page")
    if current_page is not None and last_page is not None:
        return int(current_page) >= int(last_page)

    if payload.get("next_page_url") is None and current_page is not None:
        return True

    return False


<<<<<<< ours
=======
def fetch_json_page(base_url: str, params: dict[str, int], timeout: int) -> Any:
    """Fetch and decode one JSON page using only the Python standard library."""
    separator = "&" if "?" in base_url else "?"
    url = f"{base_url}{separator}{urlencode(params)}"
    request = Request(url, headers=HEADERS)
    try:
        with urlopen(request, timeout=timeout) as response:
            charset = response.headers.get_content_charset() or "utf-8"
            return json.loads(response.read().decode(charset))
    except HTTPError as exc:
        raise RuntimeError(f"HTTP {exc.code} while fetching {url}") from exc
    except URLError as exc:
        raise RuntimeError(f"Network error while fetching {url}: {exc.reason}") from exc
    except json.JSONDecodeError as exc:
        raise RuntimeError(f"Invalid JSON returned by {url}: {exc}") from exc


def scrape_pages(
    *,
    base_url: str,
    out_dir: Path,
    combined_path: Path,
    page_size: int,
    sleep_seconds: float,
    timeout: int,
    max_pages: int | None = None,
    fetch_page: FetchPage = fetch_json_page,
) -> list[dict[str, Any]]:
    """Scrape API pages, persist raw page JSON, and return combined records."""
    out_dir.mkdir(parents=True, exist_ok=True)
    all_records: list[dict[str, Any]] = []
    page = 1

    while True:
        if max_pages is not None and page > max_pages:
            print(f"Reached --max-pages={max_pages}. Stopping.")
            break

        params = {"pagesize": page_size, "page": page}
        print(f"Fetching page {page}...")
        payload = fetch_page(base_url, params, timeout)

        raw_path = out_dir / f"page_{page:05d}.json"
        raw_path.write_text(
            json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8"
        )

        records = extract_records(payload)
        print(f"  records: {len(records)}")
        if not records:
            print("No records found. Stopping.")
            break

        all_records.extend(records)
        if is_last_page(payload):
            print("Reached final API page. Stopping.")
            break

        page += 1
        time.sleep(sleep_seconds)

    combined_path.write_text(
        json.dumps(all_records, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    return all_records


>>>>>>> theirs
def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Scrape CPN Crop Lookout archive JSON pages."
    )
    parser.add_argument("--base-url", default=BASE_URL, help="Archive API URL.")
    parser.add_argument(
        "--out-dir",
        type=Path,
        default=DEFAULT_OUT_DIR,
        help="Directory for page_XXXXX.json raw page files.",
    )
    parser.add_argument(
        "--combined-path",
        type=Path,
        default=DEFAULT_COMBINED_PATH,
        help="Path for combined raw record JSON.",
    )
    parser.add_argument(
        "--page-size", type=int, default=DEFAULT_PAGE_SIZE, help="API page size."
    )
    parser.add_argument(
        "--sleep-seconds",
        type=float,
        default=DEFAULT_SLEEP_SECONDS,
        help="Delay between page requests.",
    )
    parser.add_argument(
<<<<<<< ours
=======
        "--timeout",
        type=int,
        default=DEFAULT_TIMEOUT_SECONDS,
        help="HTTP timeout in seconds.",
    )
    parser.add_argument(
>>>>>>> theirs
        "--max-pages",
        type=int,
        default=None,
        help="Optional safety limit for testing partial scrapes.",
    )
    return parser


def main() -> None:
    args = build_parser().parse_args()
<<<<<<< ours
    args.out_dir.mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.headers.update(
        {
            "Accept": "application/json",
            "User-Agent": "EndoBio research ingestion / contact: https://www.endobio.ai",
            "Referer": "https://cropprotectionnetwork.org/crop-lookout-archive",
        }
    )

    all_records: list[dict[str, Any]] = []
    page = 1
    while True:
        if args.max_pages is not None and page > args.max_pages:
            print(f"Reached --max-pages={args.max_pages}. Stopping.")
            break

        params = {"pagesize": args.page_size, "page": page}
        print(f"Fetching page {page}...")
        response = session.get(args.base_url, params=params, timeout=30)
        response.raise_for_status()
        payload = response.json()

        raw_path = args.out_dir / f"page_{page:05d}.json"
        raw_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")

        records = extract_records(payload)
        print(f"  records: {len(records)}")
        if not records:
            print("No records found. Stopping.")
            break

        all_records.extend(records)
        if is_last_page(payload):
            print("Reached final API page. Stopping.")
            break

        page += 1
        time.sleep(args.sleep_seconds)

    args.combined_path.write_text(
        json.dumps(all_records, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print("\nDone.")
    print(f"Total records: {len(all_records)}")
=======
    try:
        records = scrape_pages(
            base_url=args.base_url,
            out_dir=args.out_dir,
            combined_path=args.combined_path,
            page_size=args.page_size,
            sleep_seconds=args.sleep_seconds,
            timeout=args.timeout,
            max_pages=args.max_pages,
        )
    except RuntimeError as exc:
        raise SystemExit(str(exc)) from exc

    print("\nDone.")
    print(f"Total records: {len(records)}")
>>>>>>> theirs
    print(f"Wrote: {args.combined_path}")


if __name__ == "__main__":
    main()
