import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { DEPLOYED_LOCATION_SLUGS } from '@/content/locations';
import { part1 } from './boilers-parts/part1';
import { part2 } from './boilers-parts/part2';
import { part3 } from './boilers-parts/part3';
import { part4 } from './boilers-parts/part4';
import { part5 } from './boilers-parts/part5';
import { part6 } from './boilers-parts/part6';

// Per-neighborhood, boiler-specific copy, drafted from each neighborhood's
// real local facts in content/locations.ts.
const all: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};

// Not published: areas whose housing in content/locations.ts is mid-century or
// newer, where homes almost all run forced-air furnaces. A boiler page there has
// nothing local to offer and reads as a doorway page. The copy stays above so a
// page can be restored if the area turns out to have real boiler demand.
const NOT_PUBLISHED = new Set([
  'amberley', 'amelia', 'beckett-ridge', 'blue-ash', 'bridgetown', 'cherry-grove', 'cold-spring',
  'crescent-springs', 'crestview-hills', 'day-heights', 'deer-park', 'delhi-hills', 'dent', 'dillonvale',
  'dry-run', 'edgewood', 'erlanger', 'evendale', 'fairfield', 'finneytown', 'florence', 'forest-park',
  'forestville', 'fort-wright', 'goshen', 'golf-manor', 'groesbeck', 'hebron', 'highland-heights',
  'indian-hill', 'kenwood', 'lakeside-park', 'landen', 'loveland-park', 'mack', 'madeira', 'maineville',
  'mason', 'monfort-heights', 'mount-airy', 'mount-carmel', 'mount-repose', 'mulberry', 'northbrook',
  'northgate', 'pleasant-run', 'sharonville', 'southgate', 'springdale', 'summerside', 'taylor-mill',
  'turpin-hills', 'union', 'villa-hills', 'villages-of-roll-hill', 'west-chester', 'wetherington',
  'white-oak', 'wilder', 'withamsville',
]);

const published = Object.fromEntries(Object.entries(all).filter(([s]) => !NOT_PUBLISHED.has(s)));

// Interim deploy: ship only the DEPLOYED_LOCATION_SLUGS cohort.
export const boilersCopy: Record<string, LocationServiceCopy> = process.env.NODE_ENV === 'development' ? published : Object.fromEntries(
  DEPLOYED_LOCATION_SLUGS.filter((s) => published[s]).map((s) => [s, published[s]]),
);
