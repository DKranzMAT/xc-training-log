# 🏃 XC Training Log

An interactive cross country training log — track runs, visualize mileage trends, and chase PRs.

Built with React + TypeScript + Vite + Tailwind CSS. Currently running on mock data; designed to scale to real athlete data via CSV upload.

## Features

- **Dashboard stats** — total miles, weekly mileage, avg pace, PRs set
- **Mileage chart** — weekly volume trend over the season
- **Personal Records board** — 1 mile, 3K, 5K, 8K
- **Run log** — date, distance, pace, effort level, course, conditions, notes
- **Light/dark mode** — toggle between dark and DGS navy light theme
- **CSV import (coming soon)** — drop in your own run data via a structured CSV template

## CSV Data Format

A template CSV is included for athletes to log their own runs. Columns:

| Field | Format | Example |
|---|---|---|
| id | number | 1 |
| date | YYYY-MM-DD | 2026-09-01 |
| distance | miles (decimal) | 5.2 |
| duration | seconds | 2340 |
| pace | seconds/mile | 450 |
| effort | easy / moderate / hard / race | moderate |
| notes | text | Felt strong at mile 2 |
| course | text | River Trail |
| conditions | text | Sunny, 65°F |
| isPR | true / false | false |

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v3
- Recharts
- Lucide React
- GitHub Pages (static hosting)
- GitHub Actions (auto deploy)

## Getting Started

```bash
git clone https://github.com/DKranzMAT/xc-training-log.git
cd xc-training-log
npm install
npm run dev
```

## Live Demo

https://dkranzmat.github.io/xc-training-log/

## Author

David Kranz — [GitHub](https://github.com/DKranzMAT)