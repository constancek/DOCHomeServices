import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lockland: LocationServiceCopy = {
  localParagraph:
    'Lockland’s houses are mostly old, close to half built before 1940, and most heat with gas, so a heat pump here is often an add-on to a basement gas furnace. Census figures also show 33.3% of homes heating with electricity, which covers apartments and houses where a heat pump and electric air handler do all the work. We check both the heat pump and whatever backs it up, then quote the repair before we start.',
  emergencyParagraph:
    'NOAA’s CVG normals give a January low of about 23F. Lose the heat pump on a night like that in a Lockland apartment or a pre-war house, and it’s small children, grandparents and people who are already unwell who suffer first. Most heat pump and dual fuel repairs here get done the day you call, Saturdays and Sundays as well.',
  commonIntro:
    'In Lockland we mostly see gas-backed heat pumps in old basements and electric-only setups in rental buildings. Four faults lead:',
  localFaqs: [
    {
      q: 'I rent in Lockland and the heat pump won’t heat. What should I do?',
      a: 'Look at the thermostat setting and the two breakers, and if that doesn’t help, put the problem to your landlord on paper. Under ORC 5321.04, an Ohio landlord who supplies the heating has to keep it running and provide reasonable heat. Leases are their business; heat pumps are ours, so the landlord books us.',
    },
    {
      q: 'Is a permit part of a Lockland heat pump replacement?',
      a: 'Lockland is its own village, and if new equipment calls for one, we arrange it ourselves. You don’t need to contact anyone. Fixing the heat pump already in place just means we find the fault, show you a price and wait for your go-ahead.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump repair across Lockland’s houses and rentals',
    band1Heading: 'Common Heat Pump Problems in Lockland Homes',
    commonSituations: [
      'A dual fuel system in a 1930s house where the furnace runs every cycle',
      'Backup strips in a rental unit carrying the load for weeks',
      'An outdoor unit that ices up overnight and never fully defrosts',
      'A stuck reversing valve keeping the system in cooling mode',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Plenty of Lockland calls turn out to be settings. Switch a thermostat left on cool or off back to heat. Replace a gray filter. The outdoor unit has its own breaker, separate from the indoor one, and either can trip. Clear snow and leaves off the unit. In defrost, expect steam, a bit of frost and the outside fan going quiet briefly. Fix those and the heat may return without us. Ice that never melts off, an aux heat light lit all day or a fan that won’t move does need a visit. We test, tell you what broke and quote it first.',
      },
      {
        title: 'Repair or Replace Your Lockland Heat Pump?',
        body: 'The age that matters is the heat pump’s. Plenty of Lockland houses built in the 1920s got their heat pump only recently, and when a young unit loses a capacitor or its fan motor, fixing it is the sensible move. Leaking refrigerant or a burned-out compressor in an aging outdoor unit changes the math, so we write up both numbers for you. As the heat pump weakens, the gas furnace or electric strips pick up the slack, and the utility bill climbs before the house feels cold. In a rental, the tenant often sees that bill first.',
      },
    ],
    whyTitle: 'Why Lockland Homeowners and Landlords Call Us',
    whyParagraph:
      'Lockland has old gas-heated houses and all-electric apartments, and we repair the heat pumps in both. Technicians are licensed, insured and background-checked, and the company has been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Lockland?',
        a: 'We quote after we find the problem. A bad capacitor is quick, a defrost control takes a bit more, and leaks and compressors sit at the top. You see one flat-rate number and say yes or no before we touch anything. Weekend work is billed at the same rate as weekdays.',
      },
      {
        q: 'Should I repair or replace the heat pump in my Lockland home?',
        a: 'Check the date on the outdoor unit; the house’s age tells you little. When a fairly new system has lost a single part, fix it. When an old one needs a compressor or keeps losing refrigerant, compare it against new equipment with the two quotes we write. Financing can cover a replacement.',
      },
      {
        q: 'Why does my Lockland heat pump blow cool air?',
        a: 'Heat pumps run longer at a lower supply temperature than a gas furnace, so a working one can feel cool at the vent. Nothing is wrong there. Air that is plainly cold, while ice sits on the outside coil or the fan there stays still, points to a failure, and your backup may be doing the heating.',
      },
    ],
  },
};
