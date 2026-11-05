import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const overTheRhine: LocationServiceCopy = {
  localParagraph:
    'Over-the-Rhine water heaters mostly live in apartments carved out of 19th-century buildings. Census figures show 70.1% of homes here were built in 1939 or earlier, and 85.7% sit in buildings of two or more units, so the tank is usually in a hall closet or a shared basement, sometimes one per unit, sometimes one for the building. Newer condos from the 2000s have their own setups. Gas and electric service are both common. We diagnose the fault and give a flat price before work starts.',
  emergencyParagraph:
    'Leak in an upstairs closet: close the cold inlet valve on the tank, kill its gas or breaker, and warn downstairs. Gas smell in the hall: everyone out, no switches, call the gas company from the street. A carbon monoxide alarm clears the building first. Babies, older relatives and the sick suffer most. Same day on most calls, weekends included.',
  commonIntro:
    'In Over-the-Rhine the heater is often in a closet or a basement shared by several apartments. These calls come up most:',
  localFaqs: [
    {
      q: 'Does the Over-the-Rhine historic district limit what water heater I can install?',
      a: 'The heater itself, no. The city reviews exterior changes in the historic district, so a new vent through a front wall or roof can need approval first. Most replacements reuse the existing vent. If a new one is needed, we check with the city before planning where it goes.',
    },
    {
      q: 'My Over-the-Rhine apartment has no hot water. Who do I call?',
      a: 'Your landlord or property manager, in writing. In Ohio, ORC 5321.04 requires an owner to keep the appliances it supplies in good and safe working order and to deliver reasonable hot water. Over-the-Rhine buildings often share one basement heater, so say whether neighbors are out too. We fix water heaters, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for Over-the-Rhine apartments and condos',
    band1Heading: 'Common Water Heater Problems in Over-the-Rhine Homes and Apartments',
    commonSituations: [
      'A leaking tank in a third-floor closet dripping into the unit below',
      'One shared basement heater leaving a whole building without hot water',
      'An electric heater in a rehabbed condo giving only lukewarm water',
      'A gas heater in an old basement venting into a brick chimney',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Closet heaters in apartments are small, so two showers back to back can empty one. Wait and it recovers. The temperature dial gets turned when people store things around the tank. Electric heaters can lose their breaker, and gas heaters can have the gas valve shut or the pilot out; relight by the label only when there’s no gas smell. Renters report anything past that to the landlord. We come for a leak at the base, popping or rumbling, rusty water, a pilot that won’t stay lit or scorch marks near the burner. We explain the fault and price it before the repair, then test it.',
      },
      {
        title: 'Repair or Replace Your Over-the-Rhine Water Heater?',
        body: 'A building from the 1870s can have a heater installed five years ago, so read the tank’s label, not the cornerstone. Elements, thermostats, thermocouples, gas valves, relief valves, anode rods and dip tubes are repairs. A tank leaking from its body is a replacement, and in an upstairs closet that leak can damage the ceiling below, so don’t wait on it. We quote both and you decide. The Department of Buildings & Inspections covers permits in the city, and we pull one where needed. Tankless can work in a tight closet, though it’s rarely the only answer.',
      },
    ],
    whyTitle: 'Why Over-the-Rhine Residents and Owners Call Us for Water Heater Repair',
    whyParagraph:
      'We work in the closets, basements and stairwells of the oldest apartment buildings in the city. Technicians are licensed and drug-tested, owners approve a flat price first, and weekend visits carry no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does water heater repair cost in Over-the-Rhine?',
        a: 'It comes down to the part and whether the heater is gas or electric. A failed element in a closet unit is one price, a gas valve on a basement heater another. You get a flat rate after we diagnose, and we wait for approval before starting.',
      },
      {
        q: 'Is my Over-the-Rhine water heater worth repairing?',
        a: 'Most of the time, if the tank is dry and one part failed. A leak from the tank shell ends the debate, especially above another apartment. We check the install date and the condition and give you a repair price and a replacement price.',
      },
      {
        q: 'Why does my hot water run out quickly, or not come on at all?',
        a: 'Small closet tanks run out quickly by design, but faster than usual points to sediment, a broken dip tube or a dead element. If nothing comes, check the breaker or the pilot first. When those are fine, a part such as a thermostat or thermocouple has failed.',
      },
    ],
  },
};
