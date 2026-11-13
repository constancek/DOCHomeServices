import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { DEPLOYED_LOCATION_SLUGS } from '@/content/locations';
import { part1 } from './electricity-disconnection-parts/part1';
import { part2 } from './electricity-disconnection-parts/part2';
import { part3 } from './electricity-disconnection-parts/part3';
import { part4 } from './electricity-disconnection-parts/part4';
import { part5 } from './electricity-disconnection-parts/part5';
import { part6 } from './electricity-disconnection-parts/part6';
import { part7 } from './electricity-disconnection-parts/part7';
import { part8 } from './electricity-disconnection-parts/part8';
import { part9 } from './electricity-disconnection-parts/part9';

// Per-neighborhood electricity disconnection copy, drafted from each
// neighborhood's real local facts in content/locations.ts. Further parts are
// added a batch at a time; only neighborhoods present here generate a page.
const all: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
  ...part7,
  ...part8,
  ...part9,
};

// Dev shows everything written so far; production ships the DEPLOYED_LOCATION_SLUGS cohort.
export const electricityDisconnectionCopy: Record<string, LocationServiceCopy> =
  process.env.NODE_ENV === 'development'
    ? all
    : Object.fromEntries(DEPLOYED_LOCATION_SLUGS.filter((s) => all[s]).map((s) => [s, all[s]]));
