<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
# endobio-ai

A modern React + TypeScript web application built with Vite, TailwindCSS, and PostHog analytics.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Build

Build the application for production:

```bash
npm run build
```

This runs TypeScript checks and builds the project with Vite.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS
- **React Router** - Client-side routing
- **Headless UI** - Unstyled, accessible components
- **Hero Icons** - Icon set

## Analytics

- **Microsoft Clarity** - Session recording and heatmaps
- **Google Analytics** - Traffic and user behavior tracking
- **PostHog** - Product analytics and feature tracking

## License

MIT
=======
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
# CPN Crop Lookout ingestion

This repository contains a reproducible scraping pipeline for the Crop Protection Network Crop Lookout archive API.

## Pipeline

1. Fetch raw paginated API responses into `cpn_crop_lookout_raw/page_XXXXX.json`.
2. Combine extracted raw records into `cpn_crop_lookout_all_raw.json`.
3. Normalize records into `cpn_crop_lookout_normalized.csv` and `cpn_crop_lookout_normalized.parquet`.
4. Inspect raw-key coverage before locking any downstream schema.

## Usage

<<<<<<< ours
Install dependencies:
=======
Install normalization dependencies (the scraper itself uses only the Python standard library):
>>>>>>> theirs

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
<<<<<<< ours
python3 scrape_cpn_crop_lookout.py --max-pages 1
=======
python3 scrape_cpn_crop_lookout.py --max-pages 1 --sleep-seconds 0
>>>>>>> theirs
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

<<<<<<< ours
=======
## Tests

Run the scraper unit tests without third-party dependencies:

```bash
python3 -m unittest discover -s tests -v
```

>>>>>>> theirs
## Suggested DuckDB checks

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
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
