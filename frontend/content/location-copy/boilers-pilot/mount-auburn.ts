import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAuburn: LocationServiceCopy = {
  localParagraph:
    'Most boiler work in Mount Auburn is on 19th-century and early 1900s houses, many now split into two to four apartments. Census figures show 56.6% of the homes here went up in 1939 or earlier, back when a cellar boiler and cast-iron radiators were how a house got heat. The apartment blocks built since 2010 lean on electric heat, so our boiler calls cluster on the older streets. We trace the fault first and tell you the price before a single part comes off.',
  emergencyParagraph:
    'Cincinnati averages about 100 nights a year at or below freezing (NOAA normals, CVG), and a Mount Auburn flat with a dead boiler cools fast. That is hard on a newborn, an older relative or anyone sick. An outage in a cold snap can put radiator piping at risk. Most calls get a technician the same day, weekends too.',
  commonIntro:
    'Mount Auburn boiler calls come mostly from old houses cut into flats, where one boiler often heats every unit. What we find most:',
  localFaqs: [
    {
      q: 'My Mount Auburn apartment has cold radiators. What must the landlord do?',
      a: 'Mount Auburn is a Cincinnati neighborhood, so the city’s heat rule applies: when the landlord controls the boiler, units must reach 70F once it has stayed under 60F outside for a full day. Put the complaint in writing. We fix boilers, not leases, and the owner schedules us.',
    },
    {
      q: 'Can I change the boiler vent on a house in Prospect Hill?',
      a: 'The boiler itself is indoor work, but Prospect Hill is a city historic district, so a new vent or flue on the outside of the house can need a certificate of appropriateness from the Historic Conservation Board. We check with the city before we touch the exterior.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler service for Mount Auburn houses and flats',
    band1Heading: 'Common Boiler Problems in Mount Auburn Homes and Apartments',
    commonSituations: [
      'One boiler in a split Victorian that heats the first-floor flat and leaves the top one cold',
      'Steam pipes that hammer inside the walls of an 1880s house when the burner fires',
      'A pressure gauge in a two-family that falls back toward zero within a week of refilling',
      'A boiler locked out on an error code after decades of patched wiring and controls',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Three checks first. A radiator that is cold along its top usually holds air, so bleed it until water spits out. On a hot water system, read the gauge after bleeding and add water if it sits low. Then confirm the thermostat is asking for heat and the switch at the boiler is on. If the flat warms up, you didn’t need a technician. Call us when pressure keeps sliding, a radiator valve weeps, the pipes knock or the burner shows a lazy yellow flame. If you smell gas, get out, leave switches alone and call the gas company from the street.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Mount Auburn?',
        body: 'The boiler’s data plate tells you more than the age of the building. Plenty of 1870s Mount Auburn houses have had their boiler swapped since, and on a sound one a worn circulator, zone valve or igniter is an ordinary repair. We put a replacement price beside the repair when a cast-iron section leaks, the heat exchanger has failed, or the same boiler needs us each winter. Yearly service takes about 60 to 90 minutes, best done before the first cold week: we test the safety controls, check the expansion tank and venting, look for leaks and bleed the radiators.',
      },
    ],
    whyTitle: 'Why Mount Auburn Landlords and Residents Call Us',
    whyParagraph:
      'Two in three Mount Auburn homes are rented, so we often deal with both the owner and the tenant. Our licensed, insured technicians pass background checks and drug tests, and the price is approved before work starts.',
    sharedFaqs: [
      {
        q: 'What does boiler repair cost in Mount Auburn?',
        a: 'The fault decides it. Bleeding air or swapping a thermocouple is a short visit; rebuilding a leaking steam boiler section takes far longer. We diagnose first, quote a flat rate and wait for your yes. There are no overtime charges for evenings or weekends.',
      },
      {
        q: 'Is it worth repairing an old boiler in Mount Auburn?',
        a: 'Usually, if the vessel holds water and only a part has failed. Pumps, controls and valves are replaceable on their own. If the heat exchanger leaks or you are calling us every winter, we show you a replacement quote next to the repair, and financing is available.',
      },
      {
        q: 'Why do only some radiators get warm in my Mount Auburn flat?',
        a: 'In a building split into flats, the farthest radiators lose out first to air in the lines or low pressure. Bleed them and check the gauge. If the same rooms stay cold, a zone valve, stuck radiator valve or tired circulator pump is the next suspect.',
      },
    ],
  },
};
