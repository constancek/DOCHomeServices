import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const collegeHill: LocationServiceCopy = {
  localParagraph:
    'Housing in College Hill is split between big prewar houses and postwar ones. By Census figures, 1,659 of 4,692 homes in the core of the neighborhood predate 1940, and another 1,708 went up in those three decades after. The oldest leak air at every window frame and hold damp in the basement; postwar ones often keep original ducts that shed dust. About half the households rent, so landlords decide in many buildings. We test before quoting, fix the price upfront, and recommend a cheap filter swap when that’s enough.',
  emergencyParagraph:
    'A carbon monoxide alarm means everyone goes outside before anyone calls 911. A gas smell means leaving without touching switches and calling the gas company outdoors. Turn off a furnace or AC that smells of burning at the thermostat. Spreading mold after a leak endangers asthma sufferers, babies and older parents. Most calls get same-day service, weekends included.',
  commonIntro:
    'Along Hamilton Avenue and the side streets off it, these four problems account for most of our calls.',
  localFaqs: [
    {
      q: 'My postwar house in College Hill still has its original ductwork. Is that a problem for air quality?',
      a: 'It can be. Old ducts often have open seams that pull basement air and dust into the system and push it into bedrooms. We look at what’s reachable during the test. Sealing joints and adding a media filter at the furnace usually helps; if the ducts need more than that, we’ll say so.',
    },
    {
      q: 'I rent in one of the large buildings in College Hill. Who handles mold or a broken bath fan?',
      a: 'Your landlord or property manager. Put it in writing, since Ohio’s ORC 5321.04 (A)(2) requires landlords to keep the unit fit and habitable. In bigger buildings, management schedules any work on shared systems. We fix air, not leases, and we can quote the owner once they call.',
    },
  ],
  overrides: {
    ctaLine: 'Air testing and cleaner rooms for prewar and postwar houses in College Hill',
    band1Heading: 'Signs a Home in College Hill Has an Indoor Air Quality Problem',
    commonSituations: [
      'A large prewar house where the third floor feels close and the basement smells of damp stone',
      'A 1950s ranch with the original ducts puffing dust from every register',
      'An apartment where a broken bathroom fan has left mildew on the ceiling',
      'A family member whose asthma flares each time the furnace kicks on in fall',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in College Hill',
        body: 'Readings come before recommendations. We measure fine dust in the main rooms, check humidity upstairs and in the basement, and look for the marks moisture leaves, like peeling paint near the floor, rusty duct joints and sweating pipes. We pull and inspect the filter, check reachable ductwork for open seams and buildup, and run the furnace and AC to see how air moves. Prewar houses here mostly need moisture control; postwar ones with original ducts often need sealing and better filtration. Everything gets a flat price first, and nothing is installed without your agreement.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'Equipment is money well spent when there’s asthma or allergies in the family, a basement that smells musty year-round, pets, winter air that cracks lips, or dust coming back as fast as you clear it. It’s money wasted if the filter has gone months unchanged, because a new one might be all it needs. One stuffy room is often a job for a portable cleaner. Mold above a dripping pipe means the plumbing comes first. A gas smell or carbon monoxide alarm calls for emergency help, not a quote. Changing filters, running fans and clearing vents help in between.',
      },
      {
        title: 'Humidity and Filtration for Homes in College Hill',
        body: 'Humid Cincinnati summers soak old basements, and the furnace in January dries the air until floors creak and throats get scratchy. A dehumidifier on the duct system handles summer damp. A humidifier on the furnace restores moisture in winter. A whole-home purifier or media filter cleans the air in every room on the ducts, removing mold spores and germs, which matters for anyone with asthma.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in College Hill Choose Us for Indoor Air Quality',
    whyParagraph:
      'We know the prewar houses, postwar ranches and apartment buildings in College Hill. Licensed and insured technicians do the work, every employee passes a background check and drug test, and you approve the price first.',
    sharedFaqs: [
      {
        q: 'How is air quality equipment priced in College Hill?',
        a: 'Each fix gets one flat rate after testing. What it costs depends on the equipment and the furnace or ductwork it attaches to; an older system with awkward basement access can take more labor. The price is approved before work begins, and evenings and weekends carry no overtime fees.',
      },
      {
        q: 'What are common signs of poor air in a house?',
        a: 'Look for allergies that are worse at home, a stale or musty smell, dust settling again soon after cleaning, moisture beading on windows in cold weather, and very dry, staticky air in winter. A couple of these together usually means a test will find something worth fixing.',
      },
      {
        q: 'How often should I swap out my furnace filter?',
        a: 'When it looks dirty, swap it. Pets, allergies and heavy heating or cooling mean checking more often. In older houses with leaky ducts, a clogged filter pulls more dust from the basement into the system, so a quick check at the start of each season is a good routine.',
      },
    ],
  },
};
