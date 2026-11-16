import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'Old housing sets the pattern for indoor air work in Hamilton. By Census count, more than a quarter of homes date from 1939 or earlier and close to half are rented. Around German Village and Dayton Lane, many of those older houses leak air, sit over damp basements and push decades of dust through their duct runs. The newer ones seal tight and keep stale air in. Every job starts with a test and a price you see first, and a filter-only fix gets called a filter-only fix.',
  emergencyParagraph:
    'On a carbon monoxide alarm, the household goes outside and dials 911. Gas odor means walking out, switches untouched, and phoning the city’s gas utility. Smoke-smelling furnace or AC units get shut off at the thermostat. Mold creeping out after a basement flood is worst for babies and asthma. Expect a same-day visit on most calls, weekends included.',
  commonIntro:
    'In old houses and rentals across Hamilton, poor air tends to show up like this:',
  localFaqs: [
    {
      q: 'I rent a house in Hamilton with a musty basement. What should I do?',
      a: 'Tell the landlord in writing, with a note on where the smell is worst. Under Ohio’s ORC 5321.04 (A)(2), an owner has to keep a rental fit and habitable, and moisture or mold that won’t go away is covered. When the owner books us, we test and price a fix. We fix air, not leases.',
    },
    {
      q: 'Do the historic district rules apply to air quality equipment in Hamilton?',
      a: 'Purifiers, filters, humidifiers and dehumidifiers mount inside on the duct system, so they don’t change the outside of the house. A ventilation upgrade that adds a vent through an exterior wall in German Village, Dayton Lane or Rossville may need review, and we check with the city before planning it.',
    },
  ],
  overrides: {
    ctaLine: 'Air testing for old houses and rentals in Hamilton',
    band1Heading: 'Signs an Apartment or Home in Hamilton Has an Indoor Air Quality Problem',
    commonSituations: [
      'A basement under a house from the 1920s that smells damp all summer',
      'Dust drifting from old floor registers in a house near Dayton Lane',
      'A tenant’s child with asthma who coughs more at night',
      'Stale, stuffy air in a newer house that rarely gets its windows opened',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in Hamilton',
        body: 'We open with an air test that tracks particles and dust, reads humidity and checks for moisture on basement walls, sills and the underside of floors. Then comes a look at the filter, the duct runs and the furnace or air handler. In a pre-war house, those ducts may have been added to by several owners, and joints near a damp basement pull that air in. In a tighter newer house, the issue is more often air that never gets replaced. We recommend what the readings justify, price each piece, and install nothing until you agree.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'The money is well spent when allergies or asthma live in the house, when the basement’s mustiness drifts upstairs, when pets shed, or when heating-season air snaps with static. Dust that resettles within days is one more sign. It’s money wasted on a filter that just needs replacing, or on one stuffy room that a portable unit could look after. Where a leak is feeding mold, the leak is the first repair. A gas smell or carbon monoxide alarm belongs in the emergency column, not on an air quality schedule. Between visits, run the bath fan and leave the returns uncovered.',
      },
      {
        title: 'Humidity and Filtration for Homes in Hamilton',
        body: 'Along the Great Miami, summers are humid and basements soak up that moisture, then winter heat dries the house. A dehumidifier on the HVAC system handles the wet months, and a humidifier on the same system eases dry rooms once the furnace starts. A whole-home purifier or media filter reaches every room on the ducts, clearing germs, mold spores and the lingering odors older houses tend to hold.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hamilton Choose Us for Indoor Air Quality',
    whyParagraph:
      'Across Hamilton, owners of old houses and rentals hear what the air test found before they hear a price. We’re family owned since 1993, every technician is licensed and insured, and we never charge overtime fees.',
    sharedFaqs: [
      {
        q: 'What does indoor air quality service cost in Hamilton?',
        a: 'You get one flat rate per fix after the air test. Pricing follows the readings and the furnace or air handler the equipment ties into, so a dehumidifier squeezed beside an old furnace in a tight cellar costs differently from one hung in an open, newer basement.',
      },
      {
        q: 'How do I know the air in my older house is unhealthy?',
        a: 'Common signs include allergies flaring indoors, stale air, dust coming back fast, water droplets on window glass and dry air that cracks your lips in winter. In a pre-war house, a damp smell from the basement is usually where it starts.',
      },
      {
        q: 'How often do furnace filters need replacing in old houses?',
        a: 'Replace it when it is dirty, whatever the date. Old ducts shed more dust, and pets or long heating and cooling runs fill a filter faster, so older houses usually need a look more often. Keep a spare on the shelf by the furnace.',
      },
    ],
  },
};
