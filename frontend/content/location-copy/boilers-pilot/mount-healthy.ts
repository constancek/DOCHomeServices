import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountHealthy: LocationServiceCopy = {
  localParagraph:
    'Most of our Mount Healthy boiler work is on the city’s older streets. Census figures put 29.3% of homes at 1939 or earlier, and those are the houses most likely to run radiators; the median home dates from 1956, and many of the newer ones heat with forced air. Half the households rent, so a lot of our calls come from landlords. The job is usually a pump, a valve or pressure loss, and we price it before touching anything.',
  emergencyParagraph:
    'A boiler failure in Mount Healthy on one of the roughly 100 nights a year at or below freezing (NOAA normals, CVG) puts babies, older relatives and sick family members at risk first. Left long enough, radiator pipes in a cold house can freeze too. Most no-heat calls get a same-day visit, Saturdays and Sundays included.',
  commonIntro:
    'Mount Healthy calls split between older single houses and rental buildings on a shared boiler. The ones we see most:',
  localFaqs: [
    {
      q: 'I rent in Mount Healthy and my radiators are barely warm. What should I do?',
      a: 'Check that the radiator valve is open, then tell your landlord in writing. Ohio’s landlord law, ORC 5321.04, requires supplied heating equipment to be kept in good and safe working order with reasonable heat. We fix boilers, not leases, and the owner schedules the repair.',
    },
    {
      q: 'Do you work on both steam and hot water boilers in Mount Healthy?',
      a: 'Yes, both. A steam system has a sight glass on the boiler and often one pipe to each radiator; a hot water system has a pressure gauge and a circulator pump. Tell us which you have if you know. If you don’t, the technician will tell you on arrival.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Mount Healthy homes and rentals',
    band1Heading: 'Common Boiler Problems in Mount Healthy Homes and Apartments',
    commonSituations: [
      'A duplex or fourplex boiler that heats one unit well and leaves another cold',
      'An expansion tank that has filled with water, sending the pressure up and the relief valve dripping',
      'An older steam boiler that bangs in the pipes as each heating cycle starts',
      'A lockout code on a newer boiler after a short power cut',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'If the house is cold, check a few things before booking. Make sure the thermostat is in heat mode and set above room temperature, and that nobody has switched the boiler off. A radiator cold along its top needs bleeding; after that, a hot water system reading low on the gauge can be refilled. Should the heat return, you’re done and owe us nothing. Send for us if the boiler keeps losing pressure, leaks at a valve or the base, kettles, shows a yellow flame or stops on an error. With a gas smell or a carbon monoxide alarm, everybody leaves first; call the gas company or 911 from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Mount Healthy?',
        body: 'What decides this is the boiler itself: its label gives the year it went in, which can be decades after the house. New circulators, zone valves, igniters and expansion tanks are repairs on a boiler that’s otherwise sound. Leaks from the vessel, a section or the heat exchanger, or a repair needed winter after winter, mean we quote replacement alongside the repair, with financing on offer. For landlords especially, a 60 to 90 minute service before the season catches small faults early: pressure, expansion tank, safety controls, burner and venting, leaks, and bled radiators.',
      },
    ],
    whyTitle: 'Why Mount Healthy Homeowners and Landlords Call Us',
    whyParagraph:
      'Mount Healthy is about half owners and half renters, so we answer to both. Each technician is licensed, insured, background-checked and drug-tested, and the repair waits until the person paying approves the flat price.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay for boiler repair in Mount Healthy?',
        a: 'A price set by the problem we find. Bleeding radiators or clearing a lockout costs less than a new pump, and a leaking cast-iron section costs more again. You get a flat-rate quote after the diagnosis and approve it before work begins, with no overtime fees.',
      },
      {
        q: 'When does a Mount Healthy boiler need replacing instead of repair?',
        a: 'When the vessel or heat exchanger leaks, or the repairs come every heating season. A single failed pump, valve or control on a dry, sound boiler is worth fixing. Where replacement is on the table, we price it next to the repair and financing is available.',
      },
      {
        q: 'Why are some radiators in my Mount Healthy home cold?',
        a: 'Most often trapped air, which leaves the top of the radiator cool. Bleed it and recheck the boiler pressure. A closed radiator valve is the next thing to look at. If a whole zone stays cold, the zone valve or circulator is the likely fault, and that is our job.',
      },
    ],
  },
};
