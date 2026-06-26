import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { DEPLOYED_LOCATION_SLUGS } from '@/content/locations';
import { part1 } from './surge-protector-installation-parts/part1';
import { part2 } from './surge-protector-installation-parts/part2';
import { part3 } from './surge-protector-installation-parts/part3';
import { part4 } from './surge-protector-installation-parts/part4';
import { part5 } from './surge-protector-installation-parts/part5';
import { part6 } from './surge-protector-installation-parts/part6';

// Per-neighborhood, surge-protector-specific copy, drafted from each
// neighborhood's real local facts in content/locations.ts.
const all: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};

// Dev shows all 170; production build ships only the DEPLOYED_LOCATION_SLUGS cohort.
export const surgeProtectorCopy: Record<string, LocationServiceCopy> =
  process.env.NODE_ENV === 'development'
    ? all
    : Object.fromEntries(DEPLOYED_LOCATION_SLUGS.filter((s) => all[s]).map((s) => [s, all[s]]));
