import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const madeira: LocationServiceCopy = {
  localParagraph:
    'In Madeira, a broken furnace is nearly always a gas furnace. Census figures show 88.1% of homes heat with utility gas, and about half the houses were built before 1960, many of them in the 1950s. So the furnace in your basement is usually much younger than the flue pipe and ductwork it connects to, and we check those connections on every visit. Electric heat is rare here. We track down the fault, tell you what it is, and price it before we start.',
  emergencyParagraph:
    'Losing heat is hardest on babies, older relatives and anyone recovering from an illness. NOAA counts about 100 nights a year at or below freezing at CVG, and an unheated house can freeze a pipe against an outside wall. We repair gas and electric furnaces in Madeira, same day on most calls, weekends included.',
  commonIntro:
    'Madeira is mostly owner-occupied single-family houses, with the 1950s as the biggest building decade. Here are the furnace calls we get from them most:',
  localFaqs: [
    {
      q: 'Does Madeira require a permit to replace a furnace?',
      a: 'Yes. The City of Madeira Building Department issues a combined building and zoning permit, and its form has a box for a furnace replacement. Madeira handles this itself, not through the county. A repair to the furnace you already have is a different job. We file the permit before a replacement goes in.',
    },
    {
      q: 'My Madeira furnace runs but the back bedrooms stay cold. Is it broken?',
      a: 'Not always. Check that the supply registers in those rooms are open and nothing is sitting on them, and that the filter is clean. If the furnace itself is short-cycling or the blower is weak, that’s a repair. In older Madeira houses we also look for a duct that has come loose in the basement.',
    },
  ],
  overrides: {
    ctaLine: 'Furnace repair for Madeira homes, same day on most calls',
    band1Heading: 'Common Furnace Problems in Madeira Homes',
    commonSituations: [
      'A basement gas furnace in a 1950s house that won’t light after summer',
      'An igniter that cracks on the first cold night in October',
      'A rusted flue connection where a newer furnace meets the old chimney',
      'A blower motor squealing under a ranch house floor',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Run through a few checks first. The thermostat should be on heat with good batteries, and the switch near the furnace, often on a basement ceiling joist, should be on. Check the breaker, swap in a clean filter and close the furnace door properly, since a loose door stops many furnaces. If that restores heat, you don’t need us. Any smell of gas changes the plan: don’t flip a switch or relight, just leave and call the gas company once you’re outdoors. Call us when the burners light and quit, the furnace smells hot, or it cycles on and off. We inspect, price it for approval, and test after.',
      },
      {
        title: 'Repair or Replace Your Madeira Furnace?',
        body: 'The house’s age doesn’t decide this. A 1955 Madeira house may hold a furnace installed recently, and a worn inducer motor or a bad pressure switch on that one is a straightforward repair. A cracked heat exchanger changes everything, because it can put carbon monoxide into the rooms you live in. We shut the furnace off and explain your options before money comes up. A replacement goes on a City of Madeira permit, and we file it. Meanwhile, compare this winter’s gas use with last winter’s. A furnace burning more gas in similar weather is losing ground.',
      },
    ],
    whyTitle: 'Why Madeira Homeowners Call Us',
    whyParagraph:
      'Madeira homeowners hear exactly what broke and agree a flat price before any work starts. We have been a family business since 1993, our technicians are licensed and background-checked, and financing is available on replacements.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Madeira?',
        a: 'Nobody can quote honestly before testing the furnace. A new igniter is a quick job, while a failed blower motor or a cracked heat exchanger is a bigger one. We diagnose it, give you a flat price to approve, and charge no overtime for evenings or weekends.',
      },
      {
        q: 'Is it worth repairing an older furnace in Madeira?',
        a: 'Often yes, if a single part has failed and the heat exchanger is sound. The furnace in a 1950s house is rarely the original, so look at its own label for the age. If a cracked heat exchanger turns up, we recommend replacement for safety and quote it next to the repair.',
      },
      {
        q: 'Why is my Madeira furnace blowing cold air?',
        a: 'First, make sure the thermostat is on heat and the fan setting is on auto. A blocked filter can overheat the furnace so it shuts the burners down and keeps the blower going. If that isn’t it, a dirty flame sensor or a failed igniter is the usual reason, and we can test both.',
      },
    ],
  },
};
