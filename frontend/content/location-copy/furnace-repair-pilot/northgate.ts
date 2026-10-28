import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northgate: LocationServiceCopy = {
  localParagraph:
    'In Northgate, electric heat is more common than gas. Census figures show 50.3% of homes heat with electricity and 45.2% with gas, so our technicians come ready for electric furnaces and heat pumps as well as gas burners. Most houses date from the 1960s and 1970s, which means the furnace is often much newer than the house. Northgate also has large apartment complexes, where management handles repairs. We locate the fault and quote a set price before the work starts.',
  emergencyParagraph:
    'Cincinnati averages about 100 nights a year at or below freezing, going by NOAA normals at CVG, and a Northgate house cools quickly once the heat stops. Babies, older people and anyone ill are most at risk, and a long outage can freeze plumbing. We repair electric furnaces, heat pumps and gas furnaces, usually same day, weekends included.',
  commonIntro:
    'Half of Northgate’s homes heat with electricity, so these calls are a mix of electric and gas problems:',
  localFaqs: [
    {
      q: 'I rent in one of Northgate’s apartment complexes. Can I book a furnace repair?',
      a: 'Report it to the management office instead. In a managed complex, the owner maintains the heating and picks the contractor, and Ohio’s ORC 5321.04 requires landlords to keep supplied heating equipment safe and working and to provide reasonable heat. We fix furnaces, not leases. Owners and property managers can call us directly.',
    },
    {
      q: 'My Northgate electric furnace failed. Should I switch to a heat pump?',
      a: 'Not in a hurry. If the electric furnace is sound and one part failed, such as an element or sequencer, fix it and get your heat back tonight. A heat pump is a replacement decision, best made without a cold house pushing you. We price the repair now and can talk through a heat pump later.',
    },
  ],
  overrides: {
    ctaLine: 'Northgate furnace and heat pump repair, electric or gas',
    band1Heading: 'Common Furnace Problems in Northgate Homes',
    commonSituations: [
      'An electric furnace running nonstop with only one element working',
      'A heat pump in a 1970s house living on emergency heat all winter',
      'A gas furnace that lights, then shuts down a few seconds later',
      'A breaker that trips each time the electric furnace starts',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Rule out the simple causes first. Check that the thermostat is on heat and the batteries are good, then look at the furnace switch and the breaker panel; electric furnaces often have two breakers, and both have to be on. Replace a dirty filter and make sure the furnace door is fully closed, because a loose door holds most furnaces off. If heat returns, no visit is needed. Call when a breaker trips again, the air stays lukewarm, or a gas furnace won’t stay lit. If you smell gas, leave without touching switches and call the gas company once you’re outside. We inspect, explain, price and test.',
      },
      {
        title: 'Repair or Replace Your Northgate Furnace?',
        body: 'Go by the equipment. A Northgate house from 1969 can have a furnace or heat pump that went in a few years ago, and a new element or capacitor on it is money well spent. A gas furnace with a cracked heat exchanger is another matter: it can leak carbon monoxide, so we turn it off and show you the crack. If the carbon monoxide alarm sounds, get everyone outside first. On electric heat, a Duke Energy bill that jumps in an ordinary month often means a failing element or a heat pump running on backup. For a replacement, we handle the permit.',
      },
    ],
    whyTitle: 'Why Northgate Homeowners and Landlords Call Us About Heating',
    whyParagraph:
      'We work on Northgate’s electric furnaces and heat pumps as often as its gas furnaces. You get a licensed, insured, background-checked technician, a flat price you approve first, and a repair we make right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does it cost to repair a furnace in Northgate?',
        a: 'We price it after diagnosis, because a loose wire and a dead blower motor are very different jobs. An electric furnace element or sequencer sits somewhere between the two. You approve a single flat price before anything is done, and calls on nights or weekends cost nothing extra.',
      },
      {
        q: 'Should I repair or replace my Northgate heating system?',
        a: 'Repair it if it’s otherwise sound and one part has failed. Replace it if a gas furnace has a cracked heat exchanger, or an electric system keeps needing major parts. Because so many homes here are electric, we often price a repair alongside a heat pump replacement so you can compare both.',
      },
      {
        q: 'Why is my Northgate furnace blowing cool air?',
        a: 'Check the thermostat is set to heat and the filter is clean. On electric heat, one failed element leaves the air lukewarm, and a heat pump in defrost blows cool for a few minutes, which is normal. On gas, a burner that won’t light usually means the igniter or flame sensor, which needs a technician.',
      },
    ],
  },
};
