import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newport: LocationServiceCopy = {
  localParagraph:
    'Newport’s housing is old and dense, and that shapes every electrical inspection here. Census figures put 46.5% of homes at 1939 or earlier, and more than half are rented. In the Victorian houses of East Row and the apartments carved out of them, we find ungrounded outlets, leftover knob-and-tube wiring and panels added piece by piece. Newer infill is usually in good shape. Either way, we inspect the whole system, hand you a written report and quote fixes before any work.',
  emergencyParagraph:
    'Don’t book these for next week: a burning smell, sparks, an outlet that’s hot or blackened, or lights that sag hard when the microwave starts. A breaker that trips again right after a reset should stay off. Any smoke, get out and call 911. In Newport we reach most of these calls the same day, weekends included.',
  commonIntro:
    'Newport’s Victorian homes, split-up houses and apartment buildings give us these findings most often:',
  localFaqs: [
    {
      q: 'Who issues electrical permits in Newport?',
      a: 'Electrical permit applications in Newport go to the City of Newport Building Department. That office’s inspection only covers permitted work. Ours is separate and wider: every part of the system, tested and written up. If a repair needs a permit, we apply through the city and line up the sign-off.',
    },
    {
      q: 'Does historic review in East Row cover electrical work?',
      a: 'Only work that changes the outside. In the Buena Vista, East Row and York Street districts, many exterior alterations need a Certificate of Appropriateness from the city’s Historic Preservation office before work starts. Rewiring inside or replacing a basement panel leaves the facade alone. For anything outside, we ask the city first.',
    },
    {
      q: 'I rent in Newport and the outlets keep tripping. What should I do?',
      a: 'Tell your landlord or building manager in writing, with dates and which outlets. Don’t keep resetting a breaker that trips straight away. The owner books the inspection and decides on repairs. We inspect wiring, not leases, and we work for whoever owns the building.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Newport’s older homes and apartments',
    band1Heading: 'Common Electrical Problems We Find in Newport Homes and Apartments',
    commonSituations: [
      'A Victorian in East Row with knob-and-tube wiring left in the walls after a partial rewire',
      'A house divided into apartments where each unit got a small panel and few circuits',
      'Two-prong outlets on the upper floors with a cheater plug in every socket',
      'A landlord turning over a unit with no GFCI outlets in the kitchen or bath',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before phoning, find the GFCI receptacles in the kitchen, baths, garage and outdoors and press reset; one that trips can silence outlets in other rooms. A breaker that dropped once and has stayed up since is usually fine, and a dark fixture may just want a bulb. You likely need an inspection if the building still runs on fuses, the receptacles have no ground anywhere, extension cords serve as permanent wiring, or several circuits flicker. Buying, selling or renting out an older building in Newport that was never updated is another good reason. We go through it, tell you what we found and put it in writing.',
      },
      {
        title: 'Inspection, Repair or Rewire in Newport?',
        body: 'The report settles it. A tired breaker, loose terminals or a bath with no GFCI protection get repaired. A panel too small for central air, a heat pump or a car charger gets replaced. If cloth or knob-and-tube cable still carries most of the load in an older building, you see a rewire price set against the spot repairs and pick. Duke Energy Kentucky is responsible for the meter and the line from the pole; our work starts at the meter base. Take the report to any electrician you like.',
      },
    ],
    whyTitle: 'Why Newport Homeowners and Landlords Call Us',
    whyParagraph:
      'More than half of Newport is rented, so much of our work there is for landlords and building owners checking units between tenants. Each electrician is licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How do you price an electrical inspection in Newport?',
        a: 'As a flat rate quoted before we begin. The size of the building and the reason you need it set the price: a whole multi-unit building takes longer than one house being checked for a sale. You approve it first, and there are no overtime fees.',
      },
      {
        q: 'What is included in the inspection?',
        a: 'The service panel with its breakers or fuses, the grounding and bonding, receptacles checked for a ground and for GFCI or AFCI coverage, visible wiring in basements, attics and shared hallways, and whether smoke alarms have power. Each finding is listed in a written report you keep.',
      },
      {
        q: 'Can someone else do the repairs from your report?',
        a: 'Yes. The report is yours, and any licensed electrician can quote from it. Some owners use it to plan repairs over a year or two, fixing the urgent items first. If you want us to do the work, we price each repair flat before starting.',
      },
    ],
  },
};
