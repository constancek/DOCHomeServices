import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { DEPLOYED_LOCATION_SLUGS } from '@/content/locations';
import { part1 } from './sewer-repair-replacement-parts/part1';
import { part2 } from './sewer-repair-replacement-parts/part2';
import { part3 } from './sewer-repair-replacement-parts/part3';
import { part4 } from './sewer-repair-replacement-parts/part4';
import { part5 } from './sewer-repair-replacement-parts/part5';
import { part6 } from './sewer-repair-replacement-parts/part6';

// Per-neighborhood, sewer-repair-&-replacement-specific copy, drafted from each
// neighborhood's real local facts in content/locations.ts.
const all: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};

// Interim deploy: ship only the DEPLOYED_LOCATION_SLUGS cohort. Export 'all' for all 170.
export const sewerRepairCopy: Record<string, LocationServiceCopy> = process.env.NODE_ENV === 'development' ? all : Object.fromEntries(
  DEPLOYED_LOCATION_SLUGS.filter((s) => all[s]).map((s) => [s, all[s]]),
);
