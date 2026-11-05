import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const carthage: LocationServiceCopy = {
  localParagraph:
    'Most Carthage boiler calls are hot water or steam systems in houses that have heated with radiators since before the Second World War. Going by Census figures, 68.5% of the neighborhood’s houses predate 1940 and the typical one went up in 1938, when a basement boiler was how a house got warm. Most homes here burn gas. We trace whether it’s air, pressure or a tired pump, then quote a flat price for you to approve first.',
  emergencyParagraph:
    'Carthage homes lose heat quickly once a boiler stops, and NOAA normals for CVG put the typical January low around 23F. Babies, older relatives and sick family members feel that first. Radiator piping near outside walls can freeze if the outage drags into a cold snap. Most no-heat calls get our technician the same day, Saturdays and Sundays too.',
  commonIntro:
    'Carthage has a lot of pre-war houses, plus two-families and a few bigger buildings that share one boiler. The calls we get most:',
  localFaqs: [
    {
      q: 'My Carthage landlord controls the heat and the radiators are cold. What are the rules?',
      a: 'Carthage sits inside Cincinnati city limits. Under the city’s rule, a rental whose heat the landlord controls has to reach 70F indoors whenever it has been under 60F outdoors for a full day. Write to your landlord about it and keep a copy. We repair the boiler for whoever owns it; we fix boilers, not leases.',
    },
    {
      q: 'Can you work on the boiler in my Carthage two-family?',
      a: 'Yes. Census figures count about 119 two-family buildings in Carthage. Some run one boiler for both units, others have one each. Where one boiler serves both floors, a fault on one side often shows up on the other, so we test the whole system and the owner approves the price.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair and service for Carthage homes',
    band1Heading: 'Common Boiler Problems in Carthage Homes',
    commonSituations: [
      'A 1930s steam boiler that knocks in the pipes for the first few minutes of each cycle',
      'Radiators in a second-floor bedroom that stay cold while the downstairs ones are hot',
      'A two-family on one boiler where the upstairs tenant has heat and the downstairs doesn’t',
      'A gauge that reads low again a few days after the system was topped up',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'On hot water radiators, a cool band along the top means air: open the bleed screw with a radiator key and close it when water follows the hiss. Steam radiators have an air vent instead, and one stuck shut leaves that radiator cold. After bleeding, a hot water boiler’s dial may sit low; add water at the fill valve. Make sure the thermostat calls for heat. Book us when the dial keeps sliding, water collects by the boiler, it locks out, or the flame turns yellow. If you smell gas, get out, touch no switches and call the gas company from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Carthage?',
        body: 'Carthage’s 1930s houses have mostly been through a boiler or two, so the nameplate date matters more than the house’s own date. A circulator, igniter, zone valve or expansion tank that quits on a tight boiler gets replaced and that’s the end of it. If the cast iron or the heat exchanger has started to seep, or you’re calling us every winter, we put a new-boiler price next to the repair price. Owners of two-families especially should book the yearly tune-up before October: 60 to 90 minutes to test pressure, check the expansion tank and relief valve, inspect burner and venting, find seeps and bleed both floors.',
      },
    ],
    whyTitle: 'Why Carthage Homeowners and Landlords Call Us',
    whyParagraph:
      'A little over half of Carthage homes are owner-occupied, and the rest are rentals, many in two-families. Our technicians are licensed, insured, background-checked and drug-tested, and you sign off on the flat-rate price before work begins.',
    sharedFaqs: [
      {
        q: 'What does a boiler repair cost in Carthage?',
        a: 'That depends on what failed. Bleeding air or clearing a lockout takes little time; replacing a circulator pump takes more, and a cracked section is the biggest job. We find the fault first, then give you a flat-rate price, and nothing starts until you approve it.',
      },
      {
        q: 'Is it worth repairing an old Carthage boiler?',
        a: 'Often, yes. If the cast iron is sound and one part has worn out, a repair makes sense even on an older boiler. When the vessel or a section leaks, or you’re calling us back every heating season, we quote replacement beside the repair, and financing is available.',
      },
      {
        q: 'Why are only some radiators cold in my Carthage house?',
        a: 'Trapped air is most common, so bleed the cold ones and check the pressure. In a steam system, a stuck air vent on the radiator does the same thing. If the same rooms stay cold after that, a stuck valve or a weak pump is next, and that’s our job.',
      },
    ],
  },
};
