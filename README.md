# sprout-clock

Automates clocking in and out on [Sprout HR](https://xlr8.app.sprout.ph) using Playwright. Takes a timestamped screenshot after each action as confirmation.

## Requirements

- Node.js
- Playwright (Chromium)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install chromium
   ```

3. Create a `.env` file in the project root with your Sprout HR credentials:

   ```env
   APP_USERNAME=your_username
   APP_PASSWORD=your_password
   ```

## Usage

### Clock In

```bash
npm run clockin
```

Logs in and clicks the **Clock In** button. Saves a screenshot to `screenshots/clock-in-<timestamp>.png`.

### Clock Out

```bash
npm run clockout
```

Logs in and clicks the **Clock Out** button. Saves a screenshot to `screenshots/clock-out-<timestamp>.png`.

## Screenshots

Screenshots are saved in the `screenshots/` folder with ISO timestamps in the filename (e.g. `clock-in-2026-03-07T08-00-00.png`).
