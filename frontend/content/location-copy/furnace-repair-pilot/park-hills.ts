import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const parkHills: LocationServiceCopy = {
  localParagraph:
    'Most Park Hills heat comes from a gas furnace. Census figures put 69.2% of homes on gas and the rest on electricity, with no oil or propane to speak of. The houses went up mostly between the 1920s and the 1950s, so many furnaces sit in older basements where the ducts have been rerouted over the years. Another 30.1% of homes are in buildings of five or more units, with their own systems. The fault gets found first, and you see the price before the repair starts.',
  emergencyParagraph:
    'In a Park Hills house with no heat, babies, older relatives and anyone ill are hit first. NOAA records at CVG average about 100 nights a year at or below freezing, and one is enough to split a pipe. Gas or electric, Park Hills furnaces usually get fixed the day you call, Saturdays and Sundays too.',
  commonIntro:
    'Park Hills runs mostly on gas, in houses from the 1920s through the 1950s plus a share of apartment buildings. The furnace calls we see most:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a furnace in Park Hills?',
      a: 'Yes. Kentucky requires one for a furnace replacement, and for Park Hills it comes from Planning and Development Services of Kenton County. We get that permit before the old furnace leaves the house. Fixing the furnace you already have doesn’t require one.',
    },
    {
      q: 'Does the historic district limit furnace work in Park Hills?',
      a: 'Not that we’ve found. A large part of Park Hills is in a National Register historic district, but that listing by itself doesn’t restrict work on a private home, and we haven’t found a local design review. The furnace is indoors in any case, so repairs proceed as usual.',
    },
  ],
  overrides: {
    ctaLine: 'Park Hills furnace repair for gas and electric homes',
    band1Heading: 'Common Furnace Problems in Park Hills Homes',
    commonSituations: [
      'A 1950s Park Hills basement furnace that clicks but never catches',
      'Cold upstairs bedrooms in a hillside house',
      'An apartment electric furnace running all night on lukewarm air',
      'A furnace that cuts out after a few minutes, then starts over',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Some Park Hills no-heat calls get cancelled before the van leaves. Look at the thermostat for heat mode and live batteries, then the furnace switch, the breaker, the filter and the furnace door, which has to sit fully closed. Any one of those can stop the heat, and fixing it yourself is free. A gas smell skips the list entirely: get out, leave the switches alone, and call the gas company from outside. Otherwise call us for short cycling that keeps repeating, burners that won’t light or banging in the ducts. We diagnose, quote a flat price, repair once you agree, and test.',
      },
      {
        title: 'Repair or Replace Your Park Hills Furnace?',
        body: 'Look at the furnace itself. Plenty of 1930s Park Hills houses have had their furnace replaced since, and a newer unit with a bad igniter, inducer motor or pressure switch is a sensible repair. Repeat breakdowns on an old unit change the math, and a cracked heat exchanger ends the debate, since carbon monoxide can get through it into the living space. If replacement wins, the Kenton County permit is ours to handle. A gas bill that rises while the house stays cold often means a dirty burner or a failing part worth catching early.',
      },
    ],
    whyTitle: 'Why Park Hills Homeowners Call Us',
    whyParagraph:
      'Gas-heated houses from the 1920s to the 1950s make up most of Park Hills, and we spend the winter inside those basements. Our technicians are licensed, background-checked and drug-tested, and the price is agreed before work begins.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Park Hills?',
        a: 'It hangs on the fault, so the diagnosis comes before the quote. A clogged condensate line or a bad pressure switch in a Park Hills furnace is a modest repair; a failed inducer motor costs more. One flat-rate price gets your approval first, and evening or weekend visits carry no overtime.',
      },
      {
        q: 'Is my Park Hills furnace worth repairing?',
        a: 'Usually, if a single part failed on a furnace that has been reliable. Plenty of older Park Hills houses hold furnaces much newer than the house suggests. A cracked heat exchanger makes replacement the safe choice because of the carbon monoxide risk. Repair and replacement get quoted together.',
      },
      {
        q: 'Why is my Park Hills furnace blowing cold air?',
        a: 'Start at the thermostat: heat mode, fan on auto. A clogged filter can overheat the furnace until a safety switch shuts the burners off and leaves the blower going. A failed igniter or dirty flame sensor does the same thing, and those take a technician.',
      },
    ],
  },
};
