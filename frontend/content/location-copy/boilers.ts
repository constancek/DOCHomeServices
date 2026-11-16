import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { DEPLOYED_LOCATION_SLUGS } from '@/content/locations';
import { part1 } from './boilers-parts/part1';
import { part2 } from './boilers-parts/part2';
import { part3 } from './boilers-parts/part3';
import { part4 } from './boilers-parts/part4';
import { part5 } from './boilers-parts/part5';
import { part6 } from './boilers-parts/part6';
// Fully localized towns (one format), wired in by boilers-pilot/build-index.mjs.
import { boilersPilot } from './boilers-pilot';

// Per-neighborhood, boiler-specific copy. Boiler pages exist only for the 108
// towns with older housing where boilers are a real part of the job; the 60
// newer forced-air suburbs (and Queensgate, English Woods) were deleted on
// 2026-11-04 rather than kept unpublished.
const all: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
  ...boilersPilot,
};

// Interim deploy: ship only the DEPLOYED_LOCATION_SLUGS cohort.
export const boilersCopy: Record<string, LocationServiceCopy> = process.env.NODE_ENV === 'development' ? all : Object.fromEntries(
  DEPLOYED_LOCATION_SLUGS.filter((s) => all[s]).map((s) => [s, all[s]]),
);
