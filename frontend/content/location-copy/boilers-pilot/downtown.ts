import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Downtown boiler work is mostly for building owners and managers, not individual tenants. Census figures show 71.6% of Downtown homes are in buildings of 50 or more units, and 69.6% heat with electricity, so many apartments have no boiler of their own. The boilers we work on are in the older buildings: 43.3% of Downtown homes were built in 1939 or earlier. We diagnose the fault, report it to whoever manages the building, and price it before work.',
  emergencyParagraph:
    'January’s normal low is about 23F at CVG, by National Weather Service records, and when a central boiler fails Downtown on a night like that, every unit it serves goes cold together. Older residents, infants and anyone sick are most exposed, and a long outage can threaten radiator piping. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Downtown boiler calls come from owners and managers of older apartment and mixed buildings. The faults we see most:',
  localFaqs: [
    {
      q: 'The heat is out in my Downtown apartment. Should I call you?',
      a: 'Call building management first. Large Downtown buildings often have their own maintenance staff or a service company under contract, and they handle the boiler. Cincinnati requires landlords who control the heat to keep units at 70F or more in cold weather. We fix boilers, not leases, and work for the owner.',
    },
    {
      q: 'Does a Downtown building boiler need a state inspection?',
      a: 'It depends on the building. Ohio law (ORC 4104.04) exempts boilers in private homes and buildings under six units, within set pressure limits. Most Downtown apartment buildings are far larger than that, so their boilers fall under state inspection, and the owner keeps those current. Our yearly service is separate from that inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Downtown building owners and managers',
    band1Heading: 'Common Boiler Problems in Downtown Homes and Apartments',
    commonSituations: [
      'An older apartment building where the boiler can’t keep the upper floors warm',
      'A central boiler that trips on a safety lockout and leaves every unit without heat',
      'A leaking radiator valve in a unit, reported by a tenant to the building office',
      'Pressure loss in a large hot water system from a leak somewhere in the risers',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Downtown renters: tell building management, and leave the boiler room to them. For owners and maintenance staff, the quick checks come first. Bleed radiators that are cool along the top; on a hot water system, bring a low gauge back to its usual reading; make sure the controls are calling for heat and the boiler has power. Heat restored means no contractor needed. We come in for falling pressure, leaks at the boiler or valves, banging, a yellow flame, a lockout code or a zone stuck cold. If there’s a gas smell, clear the area, don’t touch switches, and call the gas company from outside the building.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Downtown?',
        body: 'Downtown buildings date from before 1940 through the last few years, and a boiler gets changed out on its own schedule, so we read the date off its label rather than the cornerstone. On a sound boiler, a dead pump, a stuck zone valve, an igniter or a flooded expansion tank is ordinary repair work. A leaking vessel, cracked section or failed heat exchanger, or a boiler that needs work every winter, is when owners get a replacement quote next to the repair. A residential-size boiler’s fall service takes an hour to an hour and a half: pressure, tank, leaks, controls, burner, flue and bleeding.',
      },
    ],
    whyTitle: 'Why Downtown Building Owners Call Us',
    whyParagraph:
      'Downtown is 87.3% rentals, so we work for owners and managers. They get a licensed, insured technician with a background check and drug test, a flat price approved first, and no overtime fees.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost Downtown?',
        a: 'Price follows the fault, not the address. A lockout reset or air in the radiators is quick; a circulator, a zone valve or a cracked section is more work. After diagnosis the owner or manager gets a flat-rate quote, and we start when it is approved.',
      },
      {
        q: 'Should a Downtown building owner repair or replace an old boiler?',
        a: 'One failed part on a sound boiler is a repair. When the vessel, a section or the heat exchanger leaks, or the boiler needs work each winter, the owner gets two prices, repair and replacement, to weigh side by side. Financing is available on a new boiler.',
      },
      {
        q: 'Why are some radiators cold in my Downtown apartment?',
        a: 'Usually air at the top of the radiator, or low pressure that leaves the units at the far end of the piping short. Let building management know which rooms are cold. If bleeding and refilling don’t sort it, we test the radiator valves, zone valves and pump.',
      },
    ],
  },
};
