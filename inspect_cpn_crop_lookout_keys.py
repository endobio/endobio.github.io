#!/usr/bin/env python3
"""Count field coverage across combined CPN Crop Lookout raw records."""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path

DEFAULT_INPUT = Path("cpn_crop_lookout_all_raw.json")


def main() -> None:
    parser = argparse.ArgumentParser(description="Inspect keys in CPN Crop Lookout raw records.")
    parser.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    args = parser.parse_args()

    records = json.loads(args.input.read_text(encoding="utf-8"))
    if not isinstance(records, list):
        raise ValueError(f"Expected a list of records in {args.input}")

    keys: Counter[str] = Counter()
    for record in records:
        if isinstance(record, dict):
            keys.update(record.keys())

    for key, count in keys.most_common():
        print(f"{key}: {count}")


if __name__ == "__main__":
    main()
