import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const taylorMill: LocationServiceCopy = {
  localParagraph:
    'Taylor Mill heats almost as often with electricity as with gas. Census figures put gas at about 42% of homes and electricity at about 41%, so we see electric furnaces and heat pumps here nearly as often as gas furnaces. Around 7% of homes still burn fuel oil, which is rare in this area, so tell us your fuel when you call. Houses run from 1940s and 1950s builds to 1980s and 1990s subdivisions. We track down the fault and price it before anything gets taken apart.',
  emergencyParagraph:
    'NOAA normals for CVG have the January low near 23F, and a Taylor Mill house without heat at that point is rough on a newborn, a grandparent or someone getting over an illness. A long cold spell also puts plumbing at risk. Gas and electric furnace calls here are mostly fixed the same day, weekends too.',
  commonIntro:
    'Taylor Mill homes split between gas and electric heat, with a few oil systems still running. These calls come up most:',
  localFaqs: [
    {
      q: 'Will my Taylor Mill furnace replacement need a permit?',
      a: 'It will. Kentucky makes furnace replacement permitted work, and for Taylor Mill the building and HVAC permits come from Planning and Development Services of Kenton County. We apply before installing the new unit. A repair on your current furnace, say a new igniter or blower motor, goes ahead without one.',
    },
    {
      q: 'My Taylor Mill house has electric heat. Is it a furnace or a heat pump?',
      a: 'Step outside and listen. An outdoor unit humming along in January means a heat pump, normally with electric backup strips inside. No outdoor unit running in winter means an electric furnace. Taylor Mill has plenty of each and we fix both, so let us know which you have when you phone.',
    },
  ],
  overrides: {
    ctaLine: 'Taylor Mill heat back on, gas, electric or oil',
    band1Heading: 'Common Furnace Problems in Taylor Mill Homes',
    commonSituations: [
      'Electric furnace elements that have burned through',
      'A heat pump leaning on backup heat through a January cold snap',
      'A worn inducer motor on a gas furnace in a 1950s basement',
      'A 1990s furnace whose igniter cracked on the first cold morning',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Several no-heat problems are yours to solve. Put the thermostat on heat with new batteries, then check the furnace’s service switch and its breaker. On a gas furnace, a choked filter trips the high-limit safety and shuts things down, so change it. The blower compartment door has to sit tight or the furnace won’t start. If warm air comes back, save the service fee. If there’s a gas smell, walk out without touching a switch and phone the gas company once you’re clear of the house. Anything beyond that, we diagnose, give you a price to approve and stay until the vents blow warm.',
      },
      {
        title: 'Repair or Replace Your Taylor Mill Furnace?',
        body: 'Look at the furnace itself; a Taylor Mill house from 1975 might already be running its second one. When a sound unit loses a single part, a blower motor or control board say, repairing is usually the right spend. Gas furnaces are different if the heat exchanger cracks, because carbon monoxide can work into the rooms, and safety comes before cost there. We file the county permit for any replacement. In electric homes, watch the winter power bill: if it jumps without a change in weather, elements may have failed, or the heat pump is living on backup heat.',
      },
    ],
    whyTitle: 'Why Taylor Mill Homeowners Call Us',
    whyParagraph:
      'Most Taylor Mill homes are owner-occupied houses with gas or electric heat, and our technicians work on both. Each one is licensed and insured, and we’ve been a family-owned company since 1993.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Taylor Mill?',
        a: 'We find the fault before naming a price. A dead element in an electric furnace and a failed pressure switch on a gas unit are separate jobs with separate costs. Whichever it turns out to be, you sign off on one flat figure first, and nights and weekends don’t add overtime.',
      },
      {
        q: 'Should I fix or replace the furnace in my Taylor Mill home?',
        a: 'A solid furnace with one worn part is worth fixing. A cracked heat exchanger on a gas unit, or a pile of major repairs in a short span, points to replacing it. On the same visit you get a price for each, so the comparison is in front of you before you commit.',
      },
      {
        q: 'Why is my Taylor Mill furnace blowing cold air?',
        a: 'Check that the thermostat reads heat and the fan switch is on auto. Change a clogged filter, since an overheated gas furnace kills its burners and keeps the blower turning. Heat pumps push cool air briefly while defrosting, and that’s fine. If cold air keeps coming past that, give us a call.',
      },
    ],
  },
};
