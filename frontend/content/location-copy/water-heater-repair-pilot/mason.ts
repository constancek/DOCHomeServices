import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'Most water heater calls in Mason come from subdivision houses built in the 1990s and 2000s, where the heater stands in the basement and the trouble is one worn part or a tank that has done its run. Census figures put the median home here at 1996, and 80.1% are owner-occupied, so you usually make the call yourself. Gas service is common in town. We find what failed, explain it plainly and give you the price before any wrench turns.',
  emergencyParagraph:
    'If water is pouring from a Mason tank, turn off the cold supply at the valve above the heater, then its gas shutoff or breaker. Smell gas: everyone out, no switches, call the utility outside. A sounding CO alarm means outdoors first. We’re usually there that day, Saturdays and Sundays too, which matters with a baby at home.',
  commonIntro:
    'Mason water heaters are mostly builder-installed tanks in 1990s and 2000s houses, now reaching the age when parts give out. These are the calls we see most:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a water heater in Mason?',
      a: 'The City of Mason Engineering & Building Department administers most permits for work in the city, and we pull the permit where one is needed. You don’t have to call anyone. A repair to the heater you already have, like a new thermocouple or element, is quoted and done on the same visit.',
    },
    {
      q: 'Our Mason house still has the water heater the builder put in. Should we worry?',
      a: 'Not unless it shows trouble. Look at the label on the tank for the install date, then watch the floor around it. A dry floor and steady hot water mean leave it alone. Rust-colored water, a damp base or rumbling at every heat cycle mean it’s time for us to look.',
    },
  ],
  overrides: {
    ctaLine: 'Mason water heater repair for subdivision homes',
    band1Heading: 'Common Water Heater Problems in Mason Homes',
    commonSituations: [
      'A builder-grade gas tank from the late 1990s with a pilot that keeps dropping out',
      'Rumbling and popping from a tank full of sediment after years of no flushing',
      'A finished basement where a slow leak under the heater soaked the carpet',
      'An electric heater in a townhome closet giving lukewarm showers',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Three showers in a row can drain a tank; give it an hour and the water usually comes back. A temperature knob knocked down while storing boxes, an electric heater on a tripped breaker or a gas handle turned off during other work will all mimic a failure. When a gas pilot has gone out and the basement smells normal, follow the relight steps printed on the tank. Bring us in for a damp floor at the base, hot water that smells of rotten eggs, a relief valve that discharges again and again or a pilot that drops out minutes after lighting. Diagnosis and a quote come first.',
      },
      {
        title: 'Repair or Replace Your Mason Water Heater?',
        body: 'Start with the date on the heater’s label, since a Mason house from 1998 may already be on its second tank. Most failures we see on these builder-grade units are small parts: the thermocouple that proves the pilot, the gas control, an electric element or its thermostat, the pressure relief valve, a sacrificial anode worn to wire, or a cracked cold-inlet dip tube. Those get fixed. Once rust eats through the steel shell and water seeps from the body, no part will help, and the heater gets replaced. You see a price for each path and pick. We pull the permit where one is needed.',
      },
    ],
    whyTitle: 'Why Mason Homeowners Call Us',
    whyParagraph:
      'We fix gas and electric tanks in Mason subdivisions every week. Technicians are licensed, insured and drug-tested, the flat-rate price is set before work starts, and family ownership since 1993 keeps us accountable.',
    sharedFaqs: [
      {
        q: 'How much does water heater repair cost in Mason?',
        a: 'We can’t say until we find the fault. A thermocouple on a gas tank is a quick job, while a failed gas valve or a pair of burned elements takes longer. You get one flat rate, set by the part and whether the heater runs on gas or electric, before work begins.',
      },
      {
        q: 'Is it worth repairing an older water heater in Mason?',
        a: 'Usually, if the tank itself is sound and one part failed. If the tank is leaking from the body, or repairs keep stacking up, replacement makes more sense. Read the install date on the label and we’ll give you a price for each route so you can decide.',
      },
      {
        q: 'Why does my Mason water heater run out of hot water so fast?',
        a: 'Sediment is the usual cause in older tanks, since it takes up room and insulates the water from the burner. A broken dip tube mixes cold water in at the top. On electric heaters, one dead element halves the output. If there’s no hot water at all, check the pilot or breaker first.',
      },
    ],
  },
};
