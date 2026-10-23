import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const covington: LocationServiceCopy = {
  localParagraph:
    'Covington cooling is mostly retrofitted, and that drives the repair. Census figures put 44.0% of homes at 1939 or earlier, so the ducts and line sets were squeezed in later and the top floors fall behind first. Nearly half of households rent, so the landlord usually signs off. Gas furnaces with a coil on top are the usual setup, though heat pumps are common too. We trace the fault, then quote it before anyone picks up a tool.',
  emergencyParagraph:
    'A dead AC hits hardest in Covington’s larger apartment buildings, where heat collects on the upper floors, and in the top rooms of older rowhouses. CVG weather records put the yearly average at 22 days of 90 degrees and up. Central air and heat pump repairs here usually happen on the day you call, Saturdays and Sundays included.',
  commonIntro:
    'Most Covington cooling was retrofitted into older brick rowhouses and apartment buildings. These repairs come up most:',
  localFaqs: [
    {
      q: 'Do historic overlay rules affect AC work in Covington?',
      a: 'They can. Covington has seven Historic Preservation Overlay zones, and inside one, any change to the exterior first needs a Certificate of Appropriateness. Repairing your current unit leaves the outside untouched, so it doesn’t apply. When a replacement would move the condenser or add a second one, we clear it with Covington’s Historic Preservation Office first.',
    },
    {
      q: 'Who issues the permit to replace an AC in Covington?',
      a: 'Planning and Development Services of Kenton County issues it. Kentucky requires a permit any time an outdoor condenser or heat pump is replaced, and the state lists that office as Covington’s building and HVAC inspector. We file the permit before installation day. A repair to your existing unit doesn’t need one.',
    },
  ],
  overrides: {
    ctaLine: 'Covington AC repair for rowhouses, brick homes and apartments',
    band1Heading: 'Common AC Problems in Covington Homes',
    commonSituations: [
      'Third-floor rooms in a prewar brick rowhouse that never cool down',
      'A line set leaking where it runs through old brick walls',
      'One apartment cooling while the unit upstairs runs warm',
      'An attic air handler’s drain line backing up into a plaster ceiling',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Look at two things first: the filter and the breaker. A filter packed with dust can ice over the coil, and a breaker that tripped once and stays on after a reset may be fine. Renters should go to the landlord first, because in Covington repair decisions normally sit with the owner. Call for a visit if the breaker keeps tripping, an attic unit drips through the ceiling, or the compressor hums with the outdoor fan standing still. The technician tests the indoor and outdoor sides, explains the cause, gives you a flat-rate price to approve, and runs the AC afterward.',
      },
      {
        title: 'Repair or Replace AC in a Pre-1940 Covington Home?',
        body: 'Base the decision on the equipment, not the house. A Covington rowhouse from the 1800s can have a condenser installed a few summers ago, and that one deserves a repair when its fan motor or capacitor goes. A system past its twelfth year with a failed compressor usually doesn’t. Replacing it needs a county permit, and in the city’s historic overlay zones any exterior change requires a Certificate of Appropriateness, so we talk to the Historic Preservation Office before outdoor equipment moves. Short of replacement, watch your Duke Energy Kentucky bill: a refrigerant leak or a dirty, matted outdoor coil adds compressor hours, and the bill climbs first.',
      },
    ],
    whyTitle: 'Why Covington Homeowners and Landlords Call Us',
    whyParagraph:
      'Whoever pays, owner or landlord, gets each Covington repair explained, and the price is settled before anyone starts. All our technicians have cleared a background check and a drug test, and if the fix isn’t right, you pay nothing.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in Covington?',
        a: 'No one can give an honest figure before diagnosis. Changing a bad capacitor in a rowhouse condenser goes quickly, but finding and fixing a line set leak inside brick walls takes more time. We find the fault, hand you a flat-rate price for approval, and never charge overtime fees.',
      },
      {
        q: 'Is it worth repairing an older AC in Covington?',
        a: 'Most of the time, yes, provided the unit is under roughly a dozen years old and just one component failed. Most Covington houses are older than central air, but the air conditioner in them is often far newer. If an older unit’s compressor has died, we quote repair and replacement next to each other.',
      },
      {
        q: 'Why is the AC in my Covington home blowing warm air?',
        a: 'Check the breaker and the filter before anything else. When those are fine, the usual suspects are a burned-out capacitor or leaking refrigerant. In homes on electric heat, a heat pump can also hang in heat mode and blow warm all afternoon. We confirm the exact fault before giving a price.',
      },
    ],
  },
};
