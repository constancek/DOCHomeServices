import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'East End AC work splits in two, since a prewar cottage and a 1990s townhouse can sit a block apart and fail differently. Census figures put more than half the homes before 1940 and most of the rest after 1990, with almost nothing in between. Gas heats most houses, so the older ones usually cool through a coil on the furnace. Many are rented, so tenants should tell the landlord first. Replacing equipment takes a City of Cincinnati mechanical permit, which we handle. We diagnose, then price it.',
  emergencyParagraph:
    'Rowhouses and riverfront apartments trap warmth upstairs, and the National Weather Service tallies around 21 days per year at 90 degrees or hotter near Cincinnati. Infants and elderly neighbors suffer earliest once the cooling dies. Our technicians fix furnace coils and heat pumps alike, and most urgent East End calls get a visit that day, Saturday or Sunday too.',
  commonIntro:
    'East End homes are either prewar or built since 1990, with little in between, and their cooling faults fall into the same two groups:',
  localFaqs: [
    {
      q: 'Is it safe to run my East End AC after the Ohio River floods?',
      a: 'Not if water reached it. Leave the breaker off for any furnace, air handler or condenser that got wet until a technician has tested the wiring and controls. East End basements start taking water near a 55.5-foot stage on the Cincinnati river gauge, so check yours whenever the Ohio climbs that high.',
    },
    {
      q: 'Does a 1990s East End home still have its first AC?',
      a: 'Possibly, if nobody has replaced it, and an original condenser from the 1990s would be past 25 years old. Many units that age run on R-22, so a refrigerant leak on one is usually the point to start pricing a replacement. Check the outdoor unit’s label for its date and refrigerant type.',
    },
  ],
  overrides: {
    ctaLine: 'East End AC repair from Riverside Drive to Eastern Avenue',
    band1Heading: 'Common AC Problems in East End Homes',
    commonSituations: [
      'A coil over a prewar gas furnace icing because the original returns are undersized',
      'A 1990s condenser on R-22 slowly losing its charge',
      'A condenser or basement furnace left standing in Ohio River floodwater',
      'An upstairs air handler in a townhouse dripping through the ceiling',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Some warm days need no visit at all. Fit a clean filter, make sure the thermostat calls for cooling and flip a tripped breaker back on one time. Cold air afterward means you can stop there. In an older East End basement, also see whether the condensate hose still reaches the floor drain. Send for a technician when the outdoor fan stalls while the compressor hums. Ice on the fatter copper pipe, or a breaker that won’t hold, means the same. We inspect both halves of the system, explain the failure and give one flat figure. Work begins once you approve, and we measure supply air when finished.',
      },
      {
        title: 'Repair or Replace Your East End AC?',
        body: 'Ignore the building’s age and read the condenser’s. A unit younger than roughly 12 that lost one component deserves a repair. Older than that, a dead compressor or leaking coil tips the math toward new equipment. In a prewar cottage, the ducts limit how big a system can go, and an oversized condenser short-cycles and leaves the rooms clammy. In the newer Riverside Drive homes, a 1990s system often needs its indoor coil replaced along with the condenser, since both share the same age and refrigerant. Until you decide, refrigerant loss or grimy outdoor fins stretch each run, which Duke Energy Ohio charges for.',
      },
    ],
    whyTitle: 'Why East End Homeowners Call Us',
    whyParagraph:
      'East End homes range from prewar cottages on gas heat to 1990s townhouses, and our licensed technicians work on both. Every repair has a flat price you accept beforehand, and Saturday work costs the same as Tuesday.',
    sharedFaqs: [
      {
        q: 'How much should East End AC repair cost?',
        a: 'The fault sets it, so we find that before quoting. Clearing a blocked drain under a townhouse air handler is quick, and replacing the coil above a 1930s furnace is a bigger job. One flat-rate figure comes first for your approval, and no visit carries overtime, weekends included.',
      },
      {
        q: 'When is an East End AC worth replacing?',
        a: 'Rarely while it is fairly young and only one part has failed. After that, a compressor failure or coil leak favors new equipment. In a prewar house, match the replacement to the existing ducts. In a 1990s home, check whether the indoor coil is as old as the condenser before replacing only half the system.',
      },
      {
        q: 'Why is my East End AC blowing warm air?',
        a: 'Check the panel and the filter first. When the outdoor unit sits silent, a failed capacitor or contactor is the usual suspect. If it runs but the vents stay warm, refrigerant has probably leaked out. In older East End basements, a coil iced over from weak airflow can also block cooling until it thaws.',
      },
    ],
  },
};
