import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wyoming: LocationServiceCopy = {
  localParagraph:
    'Most water heater calls in Wyoming come from a basement, not a closet. Census figures show 89.1% of homes here are detached houses, and the median one was built in 1954, so the tank usually sits beside the furnace on an older flue, next to a shutoff that may not have been touched since the last tank went in. The Victorian houses in the Village area tend to have the tightest basements to work in. We find what failed, quote the repair and start once you say yes.',
  emergencyParagraph:
    'Leaks first: close the shutoff on the cold line feeding the tank, then cut its gas or power. Gas odor: out, no switches, no relighting, call the gas company from the yard. A carbon monoxide detector sounding empties the house first. Babies and elderly parents can’t wait; most calls get a same-day visit, weekends too.',
  commonIntro:
    'Water heater calls in Wyoming are mostly gas tanks in the basements of post-war houses. These come up most:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a water heater in Wyoming?',
      a: 'For a replacement, yes. The City of Wyoming sends plumbing permits to Hamilton County Public Health, and we pull that permit as part of the job. Fixing the heater you already have, such as a new thermocouple or relief valve, is done on the visit without one.',
    },
    {
      q: 'I live in the Village Historic District. Does that change a water heater job?',
      a: 'Usually not. The city says homes in the Village Historic District have additional requirements, but a tank swapped inside the basement rarely touches the outside of the house. If a new heater needs a new vent through an exterior wall, we check with the city before we start.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for basements in Wyoming',
    band1Heading: 'Common Water Heater Problems in Wyoming Homes',
    commonSituations: [
      'A gas tank beside the furnace in a 1950s basement with a pilot that won’t stay lit',
      'A cold-water shutoff above the tank that hasn’t moved in years and won’t close',
      'Rumbling from the bottom of the tank as sediment builds up',
      'A relief valve on the side of the tank that drips onto the basement floor',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Plenty of Wyoming calls end on the phone. A morning of showers one after another drains a basement tank, and it needs time to recover. A dial bumped while someone moved boxes, a gas cock turned sideways, or a pilot snuffed by a draft can all look like a broken heater. With no gas odor, follow the lighting steps printed on the tank. Book us when water collects on the slab, the hot side runs brown or smells of sulfur, the tank pops and rumbles, or the pilot quits within a day. We test, explain, price it for your okay and run the taps after.',
      },
      {
        title: 'Repair or Replace Your Water Heater in Wyoming?',
        body: 'Look at the data label on the tank, not the house. A 1950s ranch in the Wyoming Hills can be running a heater installed last year. Thermocouples, gas valves, relief valves, anode rods and dip tubes all come out and go back in on a tank that holds water. A shell that weeps from its seams is past fixing. When either route works, you get two prices on one sheet and pick. Plumbing permits here come from Hamilton County Public Health, and we file one with every replacement. Ask about tankless and we’ll price it; we won’t push it.',
      },
    ],
    whyTitle: 'Why Wyoming Homeowners Call Us for Water Heater Repair',
    whyParagraph:
      'Owners here usually call with a gas tank acting up in the basement and work in the morning. A licensed, background-checked technician is there the same day on most calls, and the flat rate is yours to approve first.',
    sharedFaqs: [
      {
        q: 'How much does water heater repair cost in Wyoming?',
        a: 'Your heater’s fuel and the failed part set it. On gas, a thermocouple swap is short work next to replacing the control valve; on electric, elements and thermostats get their own line. You see the flat rate after diagnosis and say yes before anything comes apart. Weekend visits carry no overtime fee.',
      },
      {
        q: 'Should I repair or replace my water heater in Wyoming?',
        a: 'Fix it when a single part failed and the tank stays dry. The label on the side gives the install date; the age of your house doesn’t. Once water seeps from the tank body, a new heater is the answer. In every other case we write up both prices for you.',
      },
      {
        q: 'Why does my hot water run out fast, or not come at all?',
        a: 'A short supply usually means scale has piled up inside the tank, or the dip tube has cracked and cold water is reaching the outlet too soon. Nothing hot at all on gas points to the pilot, the thermocouple or the control valve. Before calling, make sure the gas cock is open.',
      },
    ],
  },
};
