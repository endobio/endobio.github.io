# EndoBio

EndoBio's public website and supporting Crop Protection Network data-ingestion utilities.

## Web application

The site is built with React, TypeScript, Vite, Tailwind CSS, React Router, and PostHog.

### Prerequisites

- Node.js 18 or newer
- npm

### Setup

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

Run the code-quality checks:

```bash
npm run lint
```

## CPN Crop Lookout ingestion

The repository includes a reproducible pipeline for the Crop Protection Network Crop Lookout archive API.

1. Fetch paginated API responses into `cpn_crop_lookout_raw/page_XXXXX.json`.
2. Combine extracted records into `cpn_crop_lookout_all_raw.json`.
3. Normalize records into `cpn_crop_lookout_normalized.csv` and `cpn_crop_lookout_normalized.parquet`.
4. Inspect raw-key coverage before locking a downstream schema.

Install the normalization dependencies. The scraper itself uses only the Python standard library.

```bash
python3 -m pip install -r requirements.txt
```

Optionally test one page without cookies:

```bash
curl -L --compressed \
  'https://cropprotectionnetwork.org/api/crop-lookout-archive?pagesize=25&page=1' \
  -H 'Accept: application/json' \
  -o page_1.json
python3 -m json.tool page_1.json | less
```

Run a short scraper test:

```bash
python3 scrape_cpn_crop_lookout.py --max-pages 1 --sleep-seconds 0
```

Run the full scrape:

```bash
python3 scrape_cpn_crop_lookout.py
```

Normalize outputs:

```bash
python3 normalize_cpn_crop_lookout.py
```

Inspect fields across raw records:

```bash
python3 inspect_cpn_crop_lookout_keys.py
```

Run the scraper unit tests without third-party dependencies:

```bash
python3 -m unittest discover -s tests -v
```

### Suggested DuckDB checks

```sql
SELECT
  common_name,
  scientific_name,
  division,
  review_status,
  COUNT(*) AS n,
  MIN(observation_date) AS first_seen,
  MAX(observation_date) AS last_seen
FROM 'cpn_crop_lookout_normalized.parquet'
GROUP BY 1,2,3,4
ORDER BY last_seen DESC, n DESC;
```

```sql
SELECT
  observation_date,
  common_name,
  scientific_name,
  reporter_name,
  review_status
FROM 'cpn_crop_lookout_normalized.parquet'
WHERE observation_date >= CURRENT_DATE - INTERVAL 30 DAY
ORDER BY observation_date DESC;
```

## Analytics

The site includes Microsoft Clarity, Google Analytics, and PostHog integrations.

## License

MIT
