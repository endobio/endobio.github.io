#!/usr/bin/env python3
"""Normalize CPN Crop Lookout raw JSON records to CSV and Parquet."""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import pandas as pd

DEFAULT_INPUT = Path("cpn_crop_lookout_all_raw.json")
DEFAULT_OUTPUT_CSV = Path("cpn_crop_lookout_normalized.csv")
DEFAULT_OUTPUT_PARQUET = Path("cpn_crop_lookout_normalized.parquet")


def normalize_record(record: dict[str, Any], retrieved_at: str) -> dict[str, Any]:
    review_status = record.get("reviewstatus")
    return {
        "event_id": f"cpn-crop-lookout:{record.get('objectid')}",
        "source": "CPN Crop Lookout",
        "source_record_id": record.get("objectid"),
        "source_family": "EDDMapS / Bugwood",
        "objectid": record.get("objectid"),
        "reporter_id": record.get("reporter"),
        "reporter_name": record.get("reportername"),
        "report_ownership_id": record.get("reportownershipid"),
        "report_ownership": record.get("reportownershipname"),
        "subject_number": record.get("subjectnumber"),
        "issue_common_name": record.get("commonname"),
        "common_name": record.get("commonname"),
        "scientific_name": record.get("scientificname"),
        "name_part_1": record.get("namepart1"),
        "name_part_2": record.get("namepart2"),
        "name_part_3": record.get("namepart3"),
        "pathogen_genus": record.get("namepart1"),
        "pathogen_species": record.get("namepart2"),
        "authority": record.get("authority"),
        "division_id": record.get("divisionid"),
        "division": record.get("division"),
        "threat_category": record.get("division"),
        "crop": record.get("crop"),
        "host": record.get("host"),
        "country": record.get("country"),
        "state_province": record.get("state") or record.get("stateprovince"),
        "county": record.get("county"),
        "latitude": record.get("latitude") or record.get("lat"),
        "longitude": record.get("longitude") or record.get("lon") or record.get("lng"),
        "eradication_status_id": record.get("eradicationstatusid"),
        "eradication_status": record.get("eradicationstatus"),
        "review_status_id": record.get("reviewstatusid"),
        "review_status": review_status,
        "confidence_class": "reviewed_public" if review_status == "Reviewed & Public" else None,
        "hidden": record.get("hidden"),
        "observation_date": record.get("observationdate"),
        "published_date": record.get("created_at") or record.get("createddate"),
        "retrieved_at": retrieved_at,
        "raw_json": json.dumps(record, ensure_ascii=False, sort_keys=True),
    }


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Normalize CPN Crop Lookout raw JSON.")
    parser.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--output-csv", type=Path, default=DEFAULT_OUTPUT_CSV)
    parser.add_argument("--output-parquet", type=Path, default=DEFAULT_OUTPUT_PARQUET)
    return parser


def main() -> None:
    args = build_parser().parse_args()
    records = json.loads(args.input.read_text(encoding="utf-8"))
    if not isinstance(records, list):
        raise ValueError(f"Expected a list of records in {args.input}")

    retrieved_at = datetime.now(timezone.utc).isoformat()
    normalized = [normalize_record(r, retrieved_at) for r in records if isinstance(r, dict)]
    df = pd.DataFrame(normalized)

    if "source_record_id" in df.columns:
        df = df.drop_duplicates(subset=["source_record_id"])
    if "observation_date" in df.columns:
        df["observation_date"] = pd.to_datetime(df["observation_date"], errors="coerce")
    if "published_date" in df.columns:
        df["published_date"] = pd.to_datetime(df["published_date"], errors="coerce")

    sort_columns = [column for column in ["observation_date", "source_record_id"] if column in df.columns]
    if sort_columns:
        df = df.sort_values(
            by=sort_columns,
            ascending=[False] * len(sort_columns),
            na_position="last",
        )

    df.to_csv(args.output_csv, index=False)
    df.to_parquet(args.output_parquet, index=False)

    print(f"Rows: {len(df)}")
    print(f"Wrote: {args.output_csv}")
    print(f"Wrote: {args.output_parquet}")
    print("\nColumns:")
    for col in df.columns:
        print(f"  - {col}")


if __name__ == "__main__":
    main()
