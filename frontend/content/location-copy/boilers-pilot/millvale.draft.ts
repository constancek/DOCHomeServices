// DRAFT, not for publishing. Millvale's facts file shows a median build year of 1982 in its block group,
// 91% of units rented, about a third of residents in CMHA public-housing townhomes (1950s, recently renovated),
// and 65% of households heating with electricity. No older radiator housing is verified in Millvale itself,
// and CMHA tenants can't hire us directly, so an honest boiler page has little to say.
import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Most Millvale homes don’t have a boiler. Census figures put the median home here at 1982, and about two in three households heat with electricity. Much of the housing is townhomes managed by the Cincinnati Metropolitan Housing Authority, and tenants there report heating problems to management, not to us. If you own an older house with radiators, we find the fault and price it first. If your home has ducts, see our furnace repair page.',
  emergencyParagraph:
    'January lows near 23F (NOAA normals) make a cold home a real risk for babies, older relatives and anyone ill. Owners of radiator-heated houses get same-day boiler service on most calls, weekends included.',
  commonIntro: 'Boiler calls in Millvale are rare. When they come, they are from older owner-occupied houses:',
  localFaqs: [],
  overrides: {
    ctaLine: 'Boiler repair for older Millvale houses',
    band1Heading: 'Common Boiler Problems in Millvale Homes',
    commonSituations: [],
    proseSections: [],
    whyTitle: 'Why Millvale Homeowners Call Us',
    whyParagraph: '',
    sharedFaqs: [],
  },
};
