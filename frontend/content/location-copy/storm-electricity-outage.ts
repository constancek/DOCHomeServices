import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { DEPLOYED_LOCATION_SLUGS } from '@/content/locations';
import { part1 } from './storm-electricity-outage-parts/part1';
import { part2 } from './storm-electricity-outage-parts/part2';
import { part3 } from './storm-electricity-outage-parts/part3';

// Per-neighborhood storm outage copy, drafted from each neighborhood's real
// local facts in content/locations.ts. Further parts are added a batch at a
// time; only neighborhoods present here generate a page.
const all: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
};

// Dev shows everything written so far; production ships the DEPLOYED_LOCATION_SLUGS cohort.
export const stormElectricityOutageCopy: Record<string, LocationServiceCopy> =
  process.env.NODE_ENV === 'development'
    ? all
    : Object.fromEntries(DEPLOYED_LOCATION_SLUGS.filter((s) => all[s]).map((s) => [s, all[s]]));
