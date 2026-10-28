import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'Most heating calls in CUF come from rentals. Census figures show 84.5% of homes here are rented, so the landlord or property manager usually approves the repair. Heat is split: 54.0% of homes burn gas and nearly all the rest use electricity, so we see gas furnaces in old two-family houses and electric heat in apartment buildings. In Fairview and the west side of Clifton Heights, most houses predate 1940, and their furnaces sit in old basements. We diagnose first and price the repair before anyone starts.',
  emergencyParagraph:
    'Tenants in CUF who have an infant, an aging parent or a sick roommate at home should tell the landlord about lost heat right away. NOAA puts average January lows at CVG near 23F, and an unheated building can split a pipe. Owners and managers can book gas or electric furnace repair, same day on most calls, weekends too.',
  commonIntro:
    'CUF heat runs from gas furnaces in prewar houses to electric systems in apartment buildings. These problems come up most:',
  localFaqs: [
    {
      q: 'I rent in CUF and the heat quit. What now?',
      a: 'Put it in writing to the landlord or management company, and if the thermostat is yours to adjust, make sure it’s on heat. City of Cincinnati rules say a rental where tenants can’t control the heat must hold at least 70F indoors once outdoor temperatures sit under 60F for 24 hours. Leases are the landlord’s business; furnaces are ours.',
    },
    {
      q: 'Which office permits a furnace replacement in a CUF building?',
      a: 'The City of Cincinnati Department of Buildings & Inspections handles mechanical permits for CUF, and we pull one for every furnace we replace there. Putting a new part on the furnace already in the basement counts as a repair instead. Owners see both prices together before choosing.',
    },
  ],
  overrides: {
    ctaLine: 'CUF furnace repair for landlords, managers and homeowners',
    band1Heading: 'Common Furnace Problems in CUF Rentals and Homes',
    commonSituations: [
      'One floor of a two-family house cold while the other stays warm',
      'A prewar basement furnace that cycles on and off on the coldest nights',
      'An apartment electric furnace blowing lukewarm air',
      'A furnace choking on a filter nobody changed between tenants',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'In a CUF rental, tenant or owner can run through a short list before anyone books a visit. Is the thermostat on heat, with fresh batteries? Is the switch beside the furnace flipped on, and has the breaker held? Is the filter clean, or did it sit through the last two tenants? Is the front panel pushed fully closed? Fix one of those and the heat returns, no technician required. Ring us when nothing changes, the furnace keeps starting and quitting, or one apartment stays cold. Smell gas? Leave switches alone, get out of the building and phone the gas company once outside. Owners approve our price before work.',
      },
      {
        title: 'Repair or Replace Your CUF Furnace?',
        body: 'Look at the furnace itself, not the age of the house. Plenty of 1920s CUF two-families got a newer furnace from the landlord a few years ago, and when its igniter or blower motor quits, repair makes sense. A tired original unit needing a big part is harder to call. A cracked heat exchanger is different: that crack can feed carbon monoxide into a tenant’s rooms, so cost stops being the question. Whenever a CO alarm goes off, clear the building before anything else. On electric heat, the Duke Energy Ohio bill gives trouble away, climbing as the system runs without a break to keep a drafty apartment warm.',
      },
    ],
    whyTitle: 'Why CUF Landlords and Residents Call Us',
    whyParagraph:
      'We explain every CUF repair to the landlord in plain terms and quote a flat rate up front, never with overtime added. Our licensed, insured, background-checked technicians know they’re working inside someone’s home.',
    sharedFaqs: [
      {
        q: 'What does a CUF furnace repair usually cost?',
        a: 'Nothing honest can be quoted until we’ve tested it. Cleaning a gas burner’s flame sensor goes fast, while swapping a blower motor in an old CUF basement furnace takes real time. The owner or manager signs off on a single flat price first, and our guarantee holds: we make it right, or you don’t pay.',
      },
      {
        q: 'Is it worth repairing an old furnace in a CUF rental?',
        a: 'Often, yes, if the furnace is sound apart from the part that failed. With a cracked heat exchanger, no: carbon monoxide can reach the apartment, so we’ll advise replacing it. Landlords see both prices at once and decide on real figures instead of guesses.',
      },
      {
        q: 'Why does my CUF apartment furnace blow cold air?',
        a: 'Start with the thermostat, which should read heat rather than fan, and the filter, which shouldn’t be packed with dust. A gas furnace pushing cold air has often lit and then dropped its flame, usually a flame sensor or vent fault. In an electric furnace, an element or relay has likely failed. Either way, let your landlord know.',
      },
    ],
  },
};
