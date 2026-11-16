import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const amelia: LocationServiceCopy = {
  localParagraph:
    'Most Amelia homes are new enough that the wiring is usually sound, so people book inspections for a sale, a purchase or something big going in. Census figures put the median home at 1995, with 43.1% built since 2000. Electricity heats 60.8% of homes, which means a heat pump and its backup heat strips already lean on the panel before an EV charger or hot tub joins them. We check what your panel can carry and price any work before it starts.',
  emergencyParagraph:
    'Treat these as same-day problems: a cover plate that’s warm or charred, an outlet that sizzles, sparks, a smell like melting plastic, or a breaker that snaps off again as soon as it’s reset. Switch off that breaker. For smoke or fire, get out and call 911. Most of these we see that same day, weekend or not.',
  commonIntro:
    'Amelia is mostly newer houses, with apartment buildings and some manufactured homes in the mix. The problems we see most:',
  localFaqs: [
    {
      q: 'Amelia isn’t a village anymore. Who handles electrical permits?',
      a: 'Clermont County Building Inspection. Amelia dissolved in 2019 and is now split between Pierce and Batavia townships, both unincorporated. Our inspection is a safety check with a report you keep. When work needs a permit, we pull it with the county and its inspector signs the job off.',
    },
    {
      q: 'I rent in Amelia and an outlet is scorched. What should I do?',
      a: 'Stop using it, flip off its breaker, and send your landlord a written note. In Ohio, landlords are bound by ORC 5321.04 (A)(4) to maintain any electrical fixtures that came with the rental, so repairs are theirs to book. We’re there for the wiring; lease disputes stay with you and the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Amelia homes before you sell, buy or add load',
    band1Heading: 'Common Electrical Problems We Find in Amelia Homes',
    commonSituations: [
      'An EV charger planned for a panel already carrying a heat pump and heat strips',
      'A hot tub added with no proper disconnect or GFCI protection',
      'A 2000s house where the buyer wants a written electrical report',
      'Outdoor and garage GFCI outlets that no longer trip when tested',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'A house built after 2000 often needs nothing from us. When the buyer’s home inspector came up empty, the wiring is likely fine. Garage or bath outlets gone dead usually point to a GFCI tripped in another room, so try every reset button. A breaker that dropped once and then held is no cause for alarm. Book us before a charger, hot tub or second heat pump goes in, when lights flicker in several rooms, when cords are filling in for wiring, or when one of Amelia’s 1960s or 1970s houses is going up for sale.',
      },
      {
        title: 'Inspection, Repair or Rewire in Amelia?',
        body: 'The findings decide. In newer Amelia homes, most are repairs: a loose connection, a breaker that no longer trips, a GFCI that tests bad. If the panel can’t carry what you want to add, we quote a panel replacement and explain why. Rewiring only comes up in older houses with old wiring through most rooms, and we show that price next to spot repairs. You get the report and make the call; hiring us for the work is optional. We look after any permit the job requires.',
      },
    ],
    whyTitle: 'Why Amelia Homeowners Call Us',
    whyParagraph:
      'Most Amelia calls are about fitting new equipment onto a panel that already runs the heat. Our electricians are licensed, insured, background-checked and drug-tested, and you agree to a flat price before work starts.',
    sharedFaqs: [
      {
        q: 'What does an Amelia electrical inspection cost?',
        a: 'We quote a flat rate before starting. It’s based on the size of your home and why you need the inspection; a capacity check for a new charger is smaller than a full report for a sale. Any repair is quoted separately and waits for your approval.',
      },
      {
        q: 'What do you look at during an inspection in Amelia?',
        a: 'We work through the breaker panel, the service grounding, outlet testing including GFCI and AFCI devices, any wiring visible in the garage, basement or attic, and whether the smoke alarms get house power. For all-electric homes we also add up how much spare capacity the panel still has.',
      },
      {
        q: 'Am I locked into using you for repairs?',
        a: 'Not at all. Keep the report, pass it to any licensed electrician, or file it away for the day you sell. We’ll put a price on the work only if you ask us to, and the inspection fee doesn’t change either way.',
      },
    ],
  },
};
