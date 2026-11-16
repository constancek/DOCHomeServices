import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westwood: LocationServiceCopy = {
  localParagraph:
    'Westwood is the city’s largest neighborhood, and most of it was built after 1940, so boilers aren’t the norm here. Census figures put 20.1% of homes at 1939 or earlier, and 48.4% heat with electricity. Where we do find boilers is in those older houses and in apartment buildings that run one boiler for the whole building. Homes with ducts belong with our furnace repair team. For radiator systems, we diagnose the fault and quote it before work starts.',
  emergencyParagraph:
    'When Westwood drops toward a normal January low of about 23F (NOAA, CVG), a building with a dead boiler can leave dozens of households cold, and babies, older residents and anyone sick feel it first. Radiator pipes can also be at risk if a cold snap drags on. Most calls get a technician the same day, weekends included.',
  commonIntro:
    'In Westwood, boiler calls come from older single houses and from apartment buildings heated by one central boiler. These come up most:',
  localFaqs: [
    {
      q: 'My Westwood apartment radiators are cold. Can I call you myself?',
      a: 'Tell the landlord or the building manager in writing before anything else, since the boiler is theirs and so is the booking. Because Westwood sits inside Cincinnati city limits, an owner who supplies the heat has to hold each unit at 70F or warmer after a full day of outdoor temperatures below 60F. We fix boilers, not leases.',
    },
    {
      q: 'I own a Westwood apartment building on one boiler. Does it need a state inspection?',
      a: 'If it has six or more units, it isn’t exempt. Ohio’s exemption under ORC 4104.04 covers only private homes and buildings under six units with low-pressure boilers. Many Westwood buildings are larger, so keep the state inspection current. Our yearly service is separate and keeps the boiler running between inspections.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Westwood houses and apartment buildings',
    band1Heading: 'Common Boiler Problems in Westwood Homes and Apartments',
    commonSituations: [
      'A central boiler in a 10- to 19-unit building that leaves the end apartments cold',
      'Radiators in one of Westwood’s pre-1940 houses that warm only at the bottom',
      'A building boiler that trips into lockout on the coldest mornings',
      'Banging pipes in an older building as the steam or hot water comes up',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Owners and residents can rule out the simple causes. Bleed any radiator whose top stays cool until water runs from the valve. A hot water boiler with a low gauge after bleeding may only need refilling. The thermostat should be calling for heat and the boiler’s switch on. If the building’s boiler is under another company’s service contract, call that company first. If the heat returns, there’s nothing for us to do. Call us when pressure keeps dropping, water appears at the boiler, a zone stays cold, or the flame burns yellow. If you smell gas, leave, don’t flip switches, and phone the gas company from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Westwood?',
        body: 'Whether a Westwood boiler needs repair or replacing depends on the boiler, and its label tells you when it was installed. Pumps, zone valves, igniters and expansion tanks are repairs. A leaking vessel, heat exchanger or section, or a boiler that breaks down every winter, is where we quote a replacement beside the repair. In apartment buildings that rely on one boiler, the yearly service before heating season matters most: about 60 to 90 minutes to check pressure, the expansion tank, leaks, safety controls, burner and venting, and to bleed radiators across the building.',
      },
    ],
    whyTitle: 'Why Westwood Landlords and Residents Call Us',
    whyParagraph:
      'In Westwood 65.7% of homes are rented, so building owners book much of our boiler work here. Each tech is licensed, insured, background-checked and drug-tested, and nothing starts until the owner signs off on a flat rate.',
    sharedFaqs: [
      {
        q: 'What does boiler repair in Westwood cost?',
        a: 'It depends on the fault. A bled radiator or a reset is short; a new circulator pump on a building boiler is more. We find the cause, quote a flat rate and wait for the owner’s approval. There’s no overtime charge for a weekend visit.',
      },
      {
        q: 'Is it time to replace my Westwood boiler?',
        a: 'Not if one part failed on an otherwise sound boiler; pumps, valves and controls are made to be swapped. It is worth pricing replacement when the heat exchanger or vessel leaks or repairs come every winter. You get both numbers, and financing is available.',
      },
      {
        q: 'Why are some radiators in my Westwood building cold?',
        a: 'In a building, the radiators farthest from the boiler go cold first when there’s air in the lines or the pressure is low. Bleeding and refilling often fixes it. If not, a stuck radiator valve, a failed zone valve or a tired pump is the likely culprit.',
      },
    ],
  },
};
