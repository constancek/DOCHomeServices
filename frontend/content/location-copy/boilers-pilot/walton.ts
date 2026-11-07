import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walton: LocationServiceCopy = {
  localParagraph:
    'Walton has two kinds of housing: the old town along Main Street and the subdivisions built since 2000, which Census figures put at 55.3% of homes. Boilers belong to the first group. About one home in five went up before 1960, and those are the houses most likely to have radiators. Newer homes run forced air, so for ducts and vents see our furnace repair page. On a boiler, we find the fault and quote it before work begins.',
  emergencyParagraph:
    'With about 100 nights a year at or below freezing in NOAA’s CVG normals, a Walton boiler gets a long season of work. When it stops, babies, older relatives and anyone ill are the first to suffer, and radiator lines in unheated rooms can freeze if the cold holds. Most no-heat calls get a technician the same day, weekends included.',
  commonIntro:
    'Walton boiler calls come almost entirely from the older homes in and around the original town. The problems we see most:',
  localFaqs: [
    {
      q: 'I rent half of an older Walton duplex and the heat is out. What should I do?',
      a: 'Let your landlord know in writing straight away; the boiler is theirs and so is the repair. Kentucky has no state rental heat standard of the kind Ohio has, so check your lease too. We fix boilers, not leases, and once the owner books, we can usually come the same day.',
    },
    {
      q: 'Does living on South Main Street in Walton limit boiler work?',
      a: 'The South Main Street Historic District is a National Register listing, and we found no local design review tied to it, so a boiler swap inside the house is ordinary work. If a new boiler needs a vent through an outside wall, we check with the city first.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Walton’s older homes and duplexes',
    band1Heading: 'Common Boiler Problems in Walton Homes',
    commonSituations: [
      'A duplex where the upstairs unit runs colder than the downstairs one',
      'A boiler that went quiet after a power outage and won’t restart',
      'Knocking in the pipes each time the heat comes on',
      'A gauge reading that won’t stay up after a refill',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Rule out the simple causes first. Put the thermostat in heat mode, turned up past the room’s reading, and make sure the boiler’s power switch is on. A radiator cold up top has trapped air, so bleed it. On a hot water boiler, read the gauge afterward and top it up if it has dropped. Heat back means no need for us. Book us when the pressure falls again, water pools under the boiler, the pipes bang or kettle, a code locks it out, or the burner burns yellow. A gas smell means leaving the house, touching no switches, and calling the gas company or 911 once outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Walton?',
        body: 'Read the install date on the boiler’s label; an old Walton house can hold a fairly new boiler, and the reverse. Worn circulator pumps, valves, igniters and expansion tanks are routine repairs. When the vessel or heat exchanger leaks, a cast-iron section cracks, or the same boiler has needed fixing each of the last few winters, we price a new one too and put the two figures side by side. A yearly service runs about 60 to 90 minutes, best booked in early fall: we test pressure and the expansion tank, hunt for small leaks, check safety controls, burner and flue, and bleed every radiator.',
      },
    ],
    whyTitle: 'Why Walton Homeowners and Landlords Call Us',
    whyParagraph:
      'Census figures show 26.8% of Walton homes are rented, so landlords book us here as well as owners. Our technicians are licensed and insured, pass background checks and drug tests, and you approve a flat-rate price before any work.',
    sharedFaqs: [
      {
        q: 'What does boiler repair in Walton cost?',
        a: 'The cause decides it. Clearing an airlock is quick, replacing a circulator pump is a bigger visit, and repairing a leaking cast-iron section is a serious job. Once we have found the fault, we give you a flat-rate price, and work starts only after you approve it, with no overtime fees.',
      },
      {
        q: 'Is my Walton boiler worth fixing?',
        a: 'If the vessel is sound, usually yes, since the parts that fail are designed to be replaced. If the vessel or heat exchanger leaks, or the boiler needs work every winter, we quote replacement too and let you compare. Financing is available on a new boiler.',
      },
      {
        q: 'Why do the radiators in one part of my Walton house stay cold?',
        a: 'If only one or two are cold, bleed them and check the boiler pressure. If a whole section of the house is cold, that part may be its own zone, and a stuck zone valve or a failed thermostat for that zone is the likely cause. That one needs a technician.',
      },
    ],
  },
};
