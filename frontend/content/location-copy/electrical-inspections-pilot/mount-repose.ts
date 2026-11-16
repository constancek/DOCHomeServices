import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountRepose: LocationServiceCopy = {
  localParagraph:
    'In Mount Repose most inspections are for houses built in the 1960s and 1970s, which Census figures put at 40.4% of homes here. Wiring from that era is usually sound, but the panels were sized for fewer appliances, with only a circuit or two per room. Add a second freezer, a heat pump or an EV charger and those panels run short. Nearly every home is an owner-occupied single house. We test the whole system, note what’s tight or worn, and quote any work before it begins.',
  emergencyParagraph:
    'Skip the routine booking for these: a smell of burning, a switch plate too hot to touch, an outlet that crackles or has black streaks, sparks, or a breaker that won’t hold after one reset. Shut that breaker. Smoke or fire: leave first, call 911 second. Most such calls get a visit that day, weekends included.',
  commonIntro:
    'Mount Repose is mostly single homes from the 1960s onward, nearly all owner-occupied. The problems we find most:',
  localFaqs: [
    {
      q: 'My Mount Repose house is from the 1970s. Is the panel big enough?',
      a: 'It may not be if you’re adding a charger or a heat pump. Panels from that decade were sized for fewer appliances. We look at what’s on yours now and what you plan to add, then tell you whether a new circuit fits or the panel needs replacing first.',
    },
    {
      q: 'Who issues electrical permits in Mount Repose?',
      a: 'Clermont County Permit Central, since Mount Repose is unincorporated Miami Township, not part of Milford. Miami Township zoning sometimes has to approve a project first. Our inspection is a separate safety check with a written report. When repairs need a permit, we pull it and the county’s inspector signs off.',
    },
    {
      q: 'I rent out a Mount Repose house. Should I have the wiring checked?',
      a: 'Between tenants is a good time. Ohio’s landlord law, ORC 5321.04 (A)(4), requires you to keep the electrical fixtures you supply in safe, working condition, and a written report shows exactly where the house stands. Ask tenants to flag problems to you in writing. Our part is the wiring, not the lease.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mount Repose houses',
    band1Heading: 'Common Electrical Problems We Find in Mount Repose Homes',
    commonSituations: [
      'A 1970s panel with every slot used and tandem breakers squeezed in',
      'Two bedrooms and a hallway running on a single circuit',
      'A finished basement wired by a past owner with no permit on file',
      'A heat pump added to a panel that was already close to full',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before booking, check the simple things. A dead bathroom or garage outlet usually means a GFCI tripped somewhere on that run; reset each one. One breaker that trips and then holds is not a warning sign, and a lamp outlet controlled by a wall switch can look dead when it isn’t. Book an inspection for flickering in several rooms, two-prong outlets left over from older work, cords stapled along baseboards, or a sale coming on a house that hasn’t had electrical work in decades. A newer Mount Repose house that passed the buyer’s inspection likely doesn’t need us.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mount Repose?',
        body: 'Let the findings drive it, not the age of the house. In Mount Repose most of them are repairs: a scorched receptacle, a breaker that no longer trips cleanly, a kitchen counter with no GFCI. A panel that’s full or failing gets replaced, which tends to come up when owners plan a heat pump or charger. Rewiring only lands on the quote if old wiring shows up across much of the house, and then it’s set beside the spot-repair price. You read the report and decide who does the work. We pull permits when needed.',
      },
    ],
    whyTitle: 'Why Mount Repose Homeowners Call Us',
    whyParagraph:
      'Most people here own their house and plan to stay, so we tell you what needs doing now and what can wait. Technicians are licensed, insured, background-checked and drug-tested, and prices are agreed first.',
    sharedFaqs: [
      {
        q: 'How much does a Mount Repose electrical inspection cost?',
        a: 'Flat, quoted before we start. How big the house is and why you want the inspection set the figure; checking capacity for a heat pump is narrower than a full report for a sale. Each repair we find has its own price and waits for your go-ahead.',
      },
      {
        q: 'What gets checked in a Mount Repose inspection?',
        a: 'The main panel and its breakers or fuses, how the system is grounded and bonded, each outlet we can get to and whether its GFCI or AFCI device works, exposed wiring in the basement, garage and attic, and whether the smoke alarms run on house power. Findings are listed room by room.',
      },
      {
        q: 'Must I hire you to fix what the report finds?',
        a: 'No. The report belongs to you. Use it to get other quotes, to plan work over a few years, or to answer a buyer. If a buyer, lender or insurer asks for a written report, you’ll have one. We quote repairs only when you ask.',
      },
    ],
  },
};
