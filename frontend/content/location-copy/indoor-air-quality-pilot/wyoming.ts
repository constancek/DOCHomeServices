import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wyoming: LocationServiceCopy = {
  localParagraph:
    'Wyoming has mostly older houses. Census figures show nearly all of them went up before 1980, with a median of 1954. Houses like these have basements that turn damp in summer and ductwork from an earlier furnace that moves dust through every room, while the drafty upper floors dry out in winter. So dehumidifiers, humidifiers and better filtration are the usual fixes. We test before suggesting anything, price it flat before work starts, and tell you when a new filter is enough.',
  emergencyParagraph:
    'Should the carbon monoxide alarm go off, the household leaves before anyone calls 911. For a gas smell, leave the switches alone, get out and ring the gas company. Turn off a furnace or AC that smells scorched. Grandparents, infants and anyone with asthma are most at risk. A technician usually comes the same day, weekends too.',
  commonIntro:
    'In the older houses that fill most streets in Wyoming, the air problems we get called about look like this:',
  localFaqs: [
    {
      q: 'Will air quality equipment work in a Victorian house in the Village Historic District?',
      a: 'Yes, if the house has ductwork. Purifiers, media filters, humidifiers and dehumidifiers mount on the furnace or ducts inside the house, so the outside doesn’t change. The city does have extra requirements in the Village Historic District, and we check with the city first if any work would touch the exterior.',
    },
    {
      q: 'Our 1950s house in Wyoming has a damp basement. Is a dehumidifier the answer?',
      a: 'Often it is. A dehumidifier tied to the HVAC system dries the basement and the floors above, and keeping humidity in check helps stop mold and mildew. If water is seeping in through a wall or a crack, that gets fixed first, or the dehumidifier just fights it all summer.',
    },
  ],
  overrides: {
    ctaLine: 'Healthier air for older houses in Wyoming',
    band1Heading: 'Signs a Home in Wyoming Has an Indoor Air Quality Problem',
    commonSituations: [
      'A root-cellar smell rising from the basement of a 1950s house',
      'Sparks off the stair railing once the gas furnace settles in for winter',
      'Dust from old ductwork settling on wood floors',
      'Allergies that act up in the upstairs bedrooms',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in Wyoming',
        body: 'We begin with a test, measuring dust and fine particles, humidity on each floor and any moisture in the basement or on windows. Next we check the filter and the return, follow the ductwork and run the gas furnace and AC through a full cycle. In a house in Wyoming from before 1960, the basement and the old duct joints get the closest look. We recommend only what the readings actually show, each with its own flat price you approve first, and nothing goes in without your yes.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'For a family in Wyoming, the equipment earns its keep when a child coughs through the night indoors, when hay fever lingers into the bedroom, when the basement smells like a root cellar by August, or when the gas furnace dries the house until doorknobs spark. Hold off when a clogged filter is the whole story; a new one costs little. A single stuffy bedroom may only need a portable unit. Mold fed by a leak needs the leak fixed before we add anything. Smelling gas or hearing a carbon monoxide alarm means getting out, not booking us. Between visits, keep the registers clear of rugs and furniture.',
      },
      {
        title: 'Humidity and Filtration for Homes in Wyoming',
        body: 'Wyoming gets the same humid summers and dry heating seasons as the rest of the Ohio Valley, and an older house feels both more. A dehumidifier on the system handles the damp basement months; a humidifier on the gas furnace handles the dry ones. A whole-home purifier or media filter on the same ductwork removes airborne germs and dust in every room it serves.',
      },
    ],
    whyTitle: 'Why Homeowners in Wyoming Choose Us for Indoor Air Quality',
    whyParagraph:
      'In Wyoming, most of our air quality calls come from houses built before 1960, with gas heat and a basement that sweats. The company has been family owned since 1993, and if we don’t make it right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does an air quality fix cost in Wyoming?',
        a: 'Each recommendation is quoted as a single fixed figure once testing is finished. The figure follows the equipment and the gas furnace or air conditioner it attaches to, and a low, crowded basement in an older house can add time. Nothing starts until you agree, and financing is available.',
      },
      {
        q: 'How would we know our older house has an air problem?',
        a: 'The basement smells of damp, someone sneezes more at home than at work, the hall table needs dusting again within a day, water forms on the inside of the panes, and winter air shocks you at the light switch. Two or three of those together are worth testing.',
      },
      {
        q: 'How do I know when the furnace filter is due?',
        a: 'Swap it when it’s dirty, not by a date on the calendar. Pets, a full house and long heating or cooling stretches all clog it sooner. Older ductwork can pull in basement dust too, so check the filter more often in a house built before 1960.',
      },
    ],
  },
};
