import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'An East End no-heat call usually means a gas furnace far younger than the house around it. Census figures show 79.6% of homes here heating with gas from Duke Energy Ohio and 54.4% built before 1940, so the typical job is a later-model furnace squeezed into an old basement and venting up an old flue. Roughly 44.6% of homes are rented, which means the landlord often has the final word on a repair. You see the fault yourself and get the price before work begins.',
  emergencyParagraph:
    'If an East End furnace quits overnight, look in on whoever is most at risk, whether that’s an infant, a grandparent or a sick housemate. NOAA averages at CVG show roughly 100 nights each year at freezing or below, and pipes in an unheated riverside house can freeze. Gas and electric furnaces get same-day repair on most calls, weekends included.',
  commonIntro:
    'Gas furnaces in pre-war East End houses, plus basements that took on river water, account for most of our heating calls. The ones we see again and again:',
  localFaqs: [
    {
      q: 'Can I run my furnace after my East End basement flooded?',
      a: 'No. Leave it off until a technician has looked at it. The National Weather Service notes basement flooding in the East End once the Ohio River reaches 55.5 feet, and a furnace that sat in water can fail in unsafe ways. We inspect it, tell you which parts got wet, and price the repair or a replacement.',
    },
    {
      q: 'My East End landlord won’t fix the heat. What are my rights?',
      a: 'Within Cincinnati city limits, a landlord who controls the heat must keep the rental at 70F or above whenever it stays below 60F outside for 24 hours. Ohio law separately requires supplied heating equipment to be safe and working. Put your complaint in writing. Leases sit between you and the owner; we just repair furnaces for whoever owns them.',
    },
  ],
  overrides: {
    ctaLine: 'East End furnace repair for riverside houses and apartments',
    band1Heading: 'Common Furnace Problems in East End Homes',
    commonSituations: [
      'A pre-1940 East End gas furnace that lights, then quits on its own',
      'A furnace that sat in floodwater after the Ohio River came up',
      'Rusted burners in a damp riverside basement',
      'An upstairs apartment that stays cold while the furnace below keeps running',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Begin at the East End thermostat: heat mode, new batteries. Next come the breaker, the power switch on or by the furnace, and the filter. Shove the front panel snugly into place, since most furnaces sit idle with it ajar. Warm air again means you can cancel the visit. We’re worth calling when the burner lights and dies or the breaker trips a second time. Gas smell? Hands off every switch, no relighting, out the door, then call the gas company. A carbon monoxide alarm means everybody outside before anything else. Our technician inspects, explains the fault, prices it for your OK and checks the heat after.',
      },
      {
        title: 'Repair or Replace Your East End Furnace?',
        body: 'Decide by the equipment, not the age of the walls. Plenty of pre-war East End homes got their current furnace just a few winters ago, and when that unit’s igniter or blower motor gives out, repair it. A cracked heat exchanger is where repair ends: the crack lets carbon monoxide reach the bedrooms upstairs, so that furnace gets shut down and we price a new one instead of a patch. Swapping a furnace within city limits takes a permit from the City of Cincinnati Department of Buildings & Inspections, and we pull it. Meanwhile, watch the gas bill: rising run times in steady weather mean the furnace is falling behind.',
      },
    ],
    whyTitle: 'Why East End Homeowners and Landlords Call Us',
    whyParagraph:
      'Pre-war houses or newer riverside homes, East End furnaces are routine work for us. Every technician carries a license and insurance and has cleared a background check and drug test, and nothing starts until you approve the flat-rate price.',
    sharedFaqs: [
      {
        q: 'What will an East End furnace repair cost?',
        a: 'Nobody can price an East End furnace sight unseen, because the part that failed decides it. A flame sensor that needs cleaning means a brief visit. A worn blower motor or control board in a damp riverside basement is a longer, pricier job. You okay one flat number first, and nights and weekends cost the same as weekdays.',
      },
      {
        q: 'Is my East End furnace worth repairing?',
        a: 'Usually, when one part failed and the heat exchanger is intact. Go by the date on the furnace label rather than the house, because plenty of East End homes are on their third or fourth furnace. When an older unit suffers a major failure, you’ll see repair and replacement prices together.',
      },
      {
        q: 'Why is my East End furnace blowing cold air?',
        a: 'Confirm the thermostat is on heat, not cool, with the fan setting on auto, then pull the filter and look. A gas burner that won’t stay lit usually points to a dirty flame sensor or a failing igniter. A burner that never lights at all is the point to call us.',
      },
    ],
  },
};
