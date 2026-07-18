import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Per-neighborhood water damage restoration copy, written from each
// neighborhood's real local facts in content/locations.ts.
// Currently Hyde Park, Norwood, and Madisonville — add further neighborhoods
// here as their copy is written.
export const waterDamageRestorationCopy: Record<string, LocationServiceCopy> = {
  'hyde-park': {
    intro:
      'Water damage in a Hyde Park home? We extract the water, dry the structure, and repair the plumbing that caused it — usually reaching homes around Hyde Park Square the same day. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is built around large early-1900s homes — Tudors, colonials, and brick foursquares — and a great many of them have finished lower levels holding carpet, drywall, and cabinetry. That is the worst possible material mix to leave wet, and it is why water damage here gets expensive faster than the square footage suggests.',
      'The other Hyde Park factor is original detail. Oak flooring, plaster, and century-old millwork can often be dried and saved, but only if the water comes out quickly and the drying is measured rather than guessed at. Left a few days, the same materials cup, split, and turn into replacement work costing many times what the drying would have.',
    ],
    commonIntro:
      "In Hyde Park's large early-1900s homes with finished lower levels, the water damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Can you save the original hardwood in my Hyde Park home?',
        a: 'Often yes, if we reach it early. Solid oak flooring of the era can usually be dried in place when extraction happens in the first day or so, sometimes with mats that pull moisture up through the boards. Once it has cupped badly or the subfloor beneath has stayed saturated for several days, replacement becomes the honest answer, and we will tell you which one you are looking at rather than run equipment for a week on a floor that will not come back.',
      },
      {
        q: 'How fast can you reach Hyde Park?',
        a: 'Hyde Park is well within our service area and we reach the homes around Hyde Park Square and Erie Avenue the same day, often within hours. With water damage that speed is the whole job — the difference between drying materials and replacing them is usually decided in the first 24 hours.',
      },
    ],
  },
  norwood: {
    intro:
      'Water damage in Norwood? We pull the water out, dry the structure, and fix the plumbing behind it. Norwood sits in the middle of our service area, so we reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, built as a streetcar and factory town on a dense grid of early-1900s homes and brick two-families. Those small lots and shared walls mean water rarely stays a one-household problem — a burst line in one half of a two-family regularly turns up as a wet ceiling next door.',
      'Because Norwood is a separate municipality, its water and sewer connections and its permitting run through the city of Norwood rather than Cincinnati. It matters when a restoration job turns into pipe or lateral work, and it is a common reason homeowners here get a contractor who pulls the wrong permit or none at all.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and brick two-families, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'Water came through from the other half of my Norwood two-family. Who is responsible?',
        a: 'That depends on where the failure was and how the property is owned and insured, which is a question for the two insurers rather than for us. What we can do is document it properly — where the water originated, which direction it travelled, and moisture readings on both sides — because that record is usually what settles the question. We will dry both affected areas if we have access and authorisation from whoever controls each side.',
      },
      {
        q: 'Do Norwood jobs need a different permit than Cincinnati?',
        a: 'Yes, where permitted work is involved. Norwood is its own city with its own building and utility authority, so a sewer lateral or supply line repair there goes through Norwood rather than through Cincinnati or MSD in the way an adjacent neighborhood would. Drying and extraction on their own do not require it — the pipe repair that follows can.',
      },
    ],
  },
  madisonville: {
    intro:
      'Water damage in Madisonville? Same-day extraction, structural drying, and repair of the plumbing that caused it, for homes around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) mixes early-1900s housing with newer infill from years of steady reinvestment, and the two fail in completely different ways. The older homes run on aging galvanized supply lines and cast-iron drains that let go with age; the renovated and newly built houses tend to fail at appliance connections, supply lines to refrigerators and laundry, and water heaters.',
      'Renovated older homes are the ones that catch owners out. New finished basements and updated kitchens sit on top of original plumbing that was never replaced, so when a century-old line finally goes, the water lands in materials installed last year rather than in an unfinished cellar.',
    ],
    commonIntro:
      "Across Madisonville's mix of early-1900s homes and newer infill, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'My Madisonville basement was just finished and it flooded. What can be saved?',
        a: 'Usually more than you would expect, if we get there fast. Carpet pad and saturated insulation generally come out regardless. Drywall that was wet but not contaminated can often be dried in place rather than cut out, and modern engineered flooring sometimes survives where the subfloor beneath it is dried properly. The variable is almost always hours, not materials.',
      },
      {
        q: 'How fast can you reach Madisonville?',
        a: 'Madisonville is centrally located on the east side and quick for us to reach, with same-day service on water damage calls. Tell us how much water there is and whether it is still coming in when you call, because that changes how we dispatch.',
      },
    ],
  },
};
