import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'In Bethel, the porch is usually where we start, because roughly a quarter of the houses in the village predate 1940, per Census figures, and a porch box that old has seen decades of weather. From there the job moves to whatever sits unlit, maybe a side door, the back lot or the stairs of a small apartment building. Slightly more than half of households rent, so owners sign off on most of it. Nothing gets trenched or drilled until we have metered the circuit and handed you a price.',
  commonIntro:
    'Owners and landlords across the village tend to phone about the same handful of dark spots, listed below.',
  localFaqs: [
    {
      q: 'If I rent in Bethel, who handles a dead porch light?',
      a: 'Usually the owner. Under ORC 5321.04 (A)(4), Ohio landlords must keep electrical fixtures they provide safe and in repair, and a porch lantern that came with the apartment counts. Tenants may still screw in a fresh bulb. Anything new needs the owner’s yes. Leases aren’t our business, lighting is, so the landlord schedules us.',
    },
    {
      q: 'What’s usually behind an old porch lantern on a village house in Bethel?',
      a: 'Often an old box, tired splices and wiring nearly as old as the porch itself. We pull the fixture, judge what’s behind it, replace the worn pieces, hang a wet-rated lantern, seal its edges against driving rain and test it. The quote comes before the ladder goes up.',
    },
  ],
  overrides: {
    ctaLine: 'Porch, walk and back-lot lighting for houses and rentals in Bethel',
    band1Heading: 'Signs It’s Time for Outdoor Lighting in Bethel',
    commonSituations: [
      'A corroded porch lantern on a pre-war house that blinks when the wind picks up',
      'Stairs behind a small apartment building that tenants climb by phone flashlight',
      'A front walk out to the sidewalk swallowed by darkness right after supper',
      'A rear patio that stays empty every evening once the light fades',
    ],
    proseSections: [
      {
        title: 'Outdoor Lighting Types and Fixtures in Bethel',
        body: 'Two jobs hide inside most requests from the village. One is house-mounted, line-voltage work, meaning a porch lantern, an entry sconce or a motion-activated security light wired into the building. The other lives out in the grass and beds, where path, step and accent fixtures share a 12-volt transformer. Every piece we hang outdoors carries a wet-location label, since indoor hardware rusts out after a winter or so on a porch in Bethel. LED heads sip less power than old bulbs. When a fixture goes dark, swap the bulb, flip the wall switch and breaker, press the GFCI reset and confirm the timer or photocell is set right.',
      },
      {
        title: 'Outdoor Lighting Design and Placement in Bethel',
        body: 'Lots around the old village center are compact, so we put light on the few routes people actually use, the porch steps, the walk to the curb and the way round to a back door or rental stairway. Fixtures get spaced and shielded so each tread reads clearly while the house next door stays out of the beam. Steady light at doorways trims trip hazards, helps deter unwanted activity and turns a back patio into somewhere to sit after dusk. We begin with a stroll around the property and a sketch you approve, then mount, wire, test and fine-tune brightness after dark, and a single day covers most projects.',
      },
      {
        title: 'Outdoor Wiring and Circuits in Bethel',
        body: 'Around Bethel, NOAA counts about 100 nights each year that dip to freezing or colder, and each one works water into a weak splice. Connections get sealed, cable is outdoor-rated, GFCI protection guards the circuit and a dedicated breaker goes in when the load demands it. We match the transformer to the fixtures so the far lamp glows like the near one. Trenching and any indoor switch are priced first, and we pull a permit wherever the work requires one.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Bethel Choose Us for Outdoor Lighting',
    whyParagraph:
      'You and one of our licensed electricians pace the lot and agree where every fixture belongs. We then hang wet-rated hardware on outdoor-grade cable that shrugs off freeze-thaw, wire it to code and fix the price beforehand.',
    sharedFaqs: [
      {
        q: 'What sets the price of outdoor lights for a house in Bethel?',
        a: 'Four things set it. They are how many fixtures and which kind, whether they hang on the house at line voltage or sit in the yard at low voltage, how far power must travel, and whether buried cable or a fresh circuit is involved. One flat figure arrives first, with financing for qualifying homeowners.',
      },
      {
        q: 'Can my porch and front walk in Bethel be lit in a single day?',
        a: 'Usually, yes. Most projects are finished inside one day, and a lantern plus a short row of path lights fits comfortably. Bigger yards with long trenches, or work that needs a new circuit from the panel, run longer. You hear the expected schedule along with the price.',
      },
      {
        q: 'Why do yard lights run on low voltage instead of house power?',
        a: 'Because they sit in soil where a spade or mower can reach them. A 12-volt transformer feeds path, tree and bed fixtures, so they cost less to run and are far safer to work near. House-mounted lanterns and security lights stay on regular line voltage, wired into the building.',
      },
    ],
  },
};
