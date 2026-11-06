import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'In the West End most homes are rentals, 87.1% by Census figures, so a lost hot water call usually involves a landlord or manager. The housing ranges from Italianate rowhouses in Betts-Longworth to townhouses and apartment buildings from the 1960s, 1970s and later. Rowhouses keep the heater in a small basement with old valves; newer buildings tuck one tank per unit into a closet. Duke Energy Ohio supplies gas and power here. We diagnose the problem and give a flat price first.',
  emergencyParagraph:
    'For a leak, the cold-water valve over the tank closes first, then the gas or the breaker. Gas smell in a rowhouse basement: climb out, touch no switches, and phone the gas company from the sidewalk. Carbon monoxide alarm: out you go. Babies, older relatives and anyone ill can’t wait long. Same day on most calls, weekends included.',
  commonIntro:
    'West End water heater calls come from rowhouse basements and apartment closets alike. These come up most:',
  localFaqs: [
    {
      q: 'Who is responsible for a broken water heater in my West End rental?',
      a: 'The landlord. Under Ohio’s ORC 5321.04, an owner must keep supplied plumbing fixtures and appliances in good and safe working order and provide reasonable hot water. With most West End homes rented, send that request in writing and date it. We fix water heaters, not leases; owners and managers book the repair.',
    },
    {
      q: 'Does a water heater job in a West End historic district need city review?',
      a: 'Only if it changes the outside. In the Betts-Longworth district, exterior changes need a Certificate of Appropriateness, so a new wall vent could need one. Inside work doesn’t. Plumbing permits go through the city’s Buildings & Inspections Plumbing Section, and we pull one where it’s needed.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for West End rowhouses and apartments',
    band1Heading: 'Common Water Heater Problems in West End Homes and Apartments',
    commonSituations: [
      'A gas heater in a rowhouse basement with a valve too stiff to turn',
      'An apartment closet tank with a relief valve that keeps opening',
      'Lukewarm water from an electric heater in a 1970s townhouse',
      'A tank leaking from the bottom in a building with several units',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Sometimes the heater isn’t broken at all. After heavy hot water use, the tank has to catch up. In a rowhouse basement, the front dial gets bumped by stored boxes. On electric, a tripped breaker only needs resetting. On gas, someone may have closed the supply valve, or the pilot went out; the label explains relighting, which is fine as long as nothing smells of gas. Tenants still write to the landlord. We’re the next step for water pooling at the base, rusty or sulfur-smelling hot water, or a pilot that refuses to stay lit. Cause found, quote given, fix on approval, then a test.',
      },
      {
        title: 'Repair or Replace Your Water Heater in West End?',
        body: 'Make the call on the heater, not the building. Its label gives the year it went in. Swapping a thermocouple, gas valve, element, thermostat, relief valve, anode rod or dip tube is a repair, and on a tank that still holds water it’s usually worth doing. When the tank body leaks, the heater is replaced. Owners see both prices before deciding. In old rowhouse basements, we check the shutoff valve and the vent before a new tank goes in, because either one can hold up the job if it has failed.',
      },
    ],
    whyTitle: 'Why West End Landlords and Residents Call Us for Water Heater Repair',
    whyParagraph:
      'From 1880s rowhouse basements to apartment closets, we repair both gas and electric heaters. Our technicians are licensed and drug-tested, owners approve a flat price first, and financing covers replacements.',
    sharedFaqs: [
      {
        q: 'How much does water heater repair cost in the West End?',
        a: 'That depends on the part and the fuel. A thermocouple on a gas heater is a quicker job than electric elements, and a seized basement valve adds time. Owners get a flat rate after diagnosis and approve it first. No overtime fees.',
      },
      {
        q: 'Should a West End landlord repair or replace a water heater?',
        a: 'Repair a tank that holds water and has one failed part. Replace one leaking from its body. With several units on separate tanks, we check each heater on the same visit and price them individually so you can plan replacements.',
      },
      {
        q: 'Why does the hot water run out early, or not come at all?',
        a: 'Early run-out often comes from sediment, a broken dip tube or one dead electric element. No hot water at all is usually a tripped breaker, an out pilot, or a failed thermocouple, thermostat or gas valve. Tenants should report it rather than take panels off.',
      },
    ],
  },
};
