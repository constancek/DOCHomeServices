import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { locations, DEPLOYED_LOCATION_SLUGS } from '@/content/locations';

// Emergency Plumbing is the original service whose per-neighborhood copy lives
// directly in content/locations.ts (it is the source every other service mines
// from). We map it into the shared LocationServiceCopy shape so Emergency
// Plumbing uses the same LocationServicePage engine as every other service.
const all: Record<string, LocationServiceCopy> = Object.fromEntries(
  locations.map((l) => [
    l.slug,
    {
      intro: l.intro,
      relevance: l.relevance,
      commonIntro: l.commonIntro,
      localFaqs: l.localFaqs,
    },
  ]),
);

// Dev shows all 170; production build ships only the DEPLOYED_LOCATION_SLUGS cohort.
export const emergencyPlumbingCopy: Record<string, LocationServiceCopy> =
  process.env.NODE_ENV === 'development'
    ? all
    : Object.fromEntries(DEPLOYED_LOCATION_SLUGS.filter((s) => all[s]).map((s) => [s, all[s]]));
