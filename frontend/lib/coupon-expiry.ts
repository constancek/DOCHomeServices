// Rolling coupon expiry dates.
//
// Both schedules are pure functions of the current time, so the date baked into
// the static HTML at build time and the date the browser works out on load agree
// unless a roll happened in between — which is exactly when we want them to differ.
//
// Everything is computed against Cincinnati wall-clock time, so a visitor in
// Denver sees the same deadline as a visitor in Norwood.

export type ExpiryKind = 'rolling' | 'furnace';

export type ExpiryDate = { year: number; month: number; day: number };

const ZONE = 'America/New_York';

// How long before the end of the final valid day the date rolls forward.
const LEAD_HOURS = 3;

// The furnace offer only runs in heating season: October through March.
const SEASON_START_MONTH = 10;
const SEASON_END_MONTH = 3;

// Where each schedule starts counting. Both match what is on the site today.
const ROLLING_ANCHOR = { year: 2026, month: 9 };
const FURNACE_ANCHOR = { year: 2026, month: 10 };

// Stops a wildly wrong device clock from spinning the loop.
const MAX_ROLLS = 600;

type Wall = { year: number; month: number; day: number; hour: number };

function wallClock(now: Date): Wall {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: ZONE,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(now);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  // Some engines report midnight as hour 24.
  return { year: get('year'), month: get('month'), day: get('day'), hour: get('hour') % 24 };
}

function lastDayOfMonth(year: number, month: number) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

// Coupons run through the end of their stated day, so the roll point sits
// LEAD_HOURS before midnight on that day.
function isPastRollPoint(now: Wall, year: number, month: number) {
  if (now.year !== year) return now.year > year;
  if (now.month !== month) return now.month > month;
  const lastDay = lastDayOfMonth(year, month);
  if (now.day !== lastDay) return now.day > lastDay;
  return now.hour >= 24 - LEAD_HOURS;
}

function inHeatingSeason(month: number) {
  return month >= SEASON_START_MONTH || month <= SEASON_END_MONTH;
}

// Last day of the month, one month at a time: 9/30 -> 10/31 -> 11/30 -> 12/31 ...
export function rollingExpiry(now: Date = new Date()): ExpiryDate {
  const wall = wallClock(now);
  let { year, month } = ROLLING_ANCHOR;

  for (let i = 0; i < MAX_ROLLS && isPastRollPoint(wall, year, month); i += 1) {
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }

  return { year, month, day: lastDayOfMonth(year, month) };
}

// Same monthly roll, but it skips the warm months rather than advertising a
// furnace tune-up that expires in June: ... 2/28 -> 3/31 -> 10/31 -> 11/30 ...
export function furnaceExpiry(now: Date = new Date()): ExpiryDate {
  const wall = wallClock(now);
  let { year, month } = FURNACE_ANCHOR;

  for (let i = 0; i < MAX_ROLLS && isPastRollPoint(wall, year, month); i += 1) {
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
    if (!inHeatingSeason(month)) month = SEASON_START_MONTH;
  }

  return { year, month, day: lastDayOfMonth(year, month) };
}

export function expiryFor(kind: ExpiryKind, now?: Date): ExpiryDate {
  return kind === 'furnace' ? furnaceExpiry(now) : rollingExpiry(now);
}

// 9/30/26
export function formatExpiry(d: ExpiryDate) {
  return `${d.month}/${d.day}/${String(d.year).slice(-2)}`;
}

// 9/30
export function formatExpiryShort(d: ExpiryDate) {
  return `${d.month}/${d.day}`;
}
