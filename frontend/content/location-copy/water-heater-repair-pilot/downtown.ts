import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Downtown water heater calls mostly come from inside large buildings. Census figures show 71.6% of homes here are in buildings of 50 or more units and 87.3% are rented, so the heater is either a tank in your unit’s closet or part of a central system the building runs. That decides who we talk to. Condo owners usually hire us directly; renters go through management. The housing splits between pre-war conversions and towers built since 2010. We find the fault and quote it before starting.',
  emergencyParagraph:
    'A closet tank leak can soak the unit below. Close the cold-water valve, switch off the breaker or gas valve and alert building staff. Gas smell: leave, touch no switches, call the gas company from outside. Carbon monoxide alarm: everyone out first. Babies, older residents and anyone ill feel it soonest. Same day on most calls, weekends included.',
  commonIntro:
    'Downtown heaters sit in unit closets or in a building’s mechanical room, and the problems differ. These come up most:',
  localFaqs: [
    {
      q: 'I rent a Downtown apartment with no hot water. Can I hire you?',
      a: 'Report it to your property manager in writing first. Ohio’s ORC 5321.04 requires landlords to keep supplied appliances in good and safe working order and to supply reasonable amounts of hot water. If one system serves the building, it’s management’s call. We fix water heaters, not leases.',
    },
    {
      q: 'I own a Downtown condo. What do you need before coming out?',
      a: 'Let your building manager know we’re coming, since we may need loading dock or elevator access and help finding the unit’s water shutoff. Tell us whether the heater is in your unit or serves the whole floor. If it’s yours, we diagnose it and price the repair before we start.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for Downtown condos and apartments',
    band1Heading: 'Common Water Heater Problems in Downtown Apartments and Condos',
    commonSituations: [
      'A closet tank in a condo leaking toward the unit below',
      'An electric heater in a newer tower giving only lukewarm water',
      'A relief valve discharging into a drain pan in a utility closet',
      'A heater in a converted pre-war building with an awkward vent route',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Unit heaters in apartments and condos are compact, and a couple of long showers can drain one. Give it time. Check whether the dial got nudged, and look at your unit’s panel for a tripped breaker. Gas units are less common in towers, but where you have one, make sure the valve is open and the pilot lit, relighting by the label only with no gas smell. If the whole building lost hot water, call management, not us. We’re needed for a leaking tank, rusty or smelly hot water, a relief valve that keeps opening or lukewarm water from an electric unit. Diagnosis, quote, repair, test.',
      },
      {
        title: 'Repair or Replace Your Water Heater in Downtown?',
        body: 'Base the decision on the heater in your closet, not the age of the tower. The label shows its install date. Elements, thermostats, relief valves, anode rods and dip tubes on an electric unit are repairs, and gas units add thermocouples and gas valves. A tank leaking from its body is a replacement, and in a high-rise that means planning the delivery with building staff. We price the repair and the replacement and you choose. Downtown is in the City of Cincinnati, where the Department of Buildings & Inspections covers permits, and we pull one where it’s needed.',
      },
    ],
    whyTitle: 'Why Downtown Condo Owners and Managers Call Us for Water Heater Repair',
    whyParagraph:
      'We work around building rules, elevators and shared shutoffs without fuss. Licensed, insured, background-checked technicians give a flat price before any repair, and you pay nothing if we don’t make it right.',
    sharedFaqs: [
      {
        q: 'How much does water heater repair cost Downtown?',
        a: 'The failed part and the fuel type decide the flat rate. An electric thermostat in a closet unit is a short repair, while a replacement in a tower takes planning with the building. We quote after diagnosis and start only once you approve.',
      },
      {
        q: 'Should I repair or replace my Downtown condo’s water heater?',
        a: 'If the tank holds water and one part failed, a repair is usually the better choice. If the tank body leaks, replace it before it damages the unit below. We check the label date, find the fault and give you both prices to compare.',
      },
      {
        q: 'Why does my hot water run out fast, or not come at all?',
        a: 'Compact unit heaters hold less, so they run out sooner. A sudden drop usually means a dead element or a broken dip tube. No hot water at all often means a tripped breaker or failed thermostat, or, in a building system, a fault that management has to fix.',
      },
    ],
  },
};
