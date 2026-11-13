import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const madisonville: LocationServiceCopy = {
  localParagraph:
    'Madisonville is two very different jobs. Around Whetsel and Bramble Avenues, 65.9% of homes predate 1940, so an inspection there often turns up ungrounded outlets, fuse panels and cloth-insulated runs. Along Madison and Red Bank Roads, much of the housing is newer, including large apartment buildings, where the wiring is usually fine and the question is whether a unit is safe to rent or sell. We inspect both, hand you a written report and price any fix in advance.',
  emergencyParagraph:
    'Hot plastic smells near an outlet, a spark when something plugs in, a switch plate gone brown, or a breaker that trips a second time right after reset: kill that breaker and call. If there is smoke or fire, get out first, then call 911. Most of these calls are same day in Madisonville, weekends included.',
  commonIntro:
    'Older Madisonville houses and newer apartment buildings each have their own problems. These come up most:',
  localFaqs: [
    {
      q: 'I rent an apartment in Madisonville and the outlets keep losing power. What do I do?',
      a: 'Write to your landlord or building manager. Under Ohio law, ORC 5321.04 (A)(4), landlords must keep the electrical fixtures they supply in good and safe working order. Check that no GFCI outlet has tripped first. We inspect wiring, not leases; the owner or manager books us, and we report to them.',
    },
    {
      q: 'Who signs off on electrical work in Madisonville?',
      a: 'Madisonville is inside Cincinnati, so the City of Cincinnati Department of Buildings & Inspections issues the electrical permit and sends its inspector. Our inspection is different: a safety check with a written report. If our report leads to permit work, we pull the permit. Addresses in the Fairfax or Columbia Township parts of 45227 go elsewhere.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Madisonville houses and apartments',
    band1Heading: 'Common Electrical Problems We Find in Madisonville Homes and Apartments',
    commonSituations: [
      'A fuse panel in a house off Whetsel Avenue that has never had its service upgraded',
      'Three-prong outlets in an old house that test with no ground at all',
      'Apartment units where a tripped GFCI in one bathroom kills the other bathroom too',
      'Electric heat loading up the circuits in a rental nobody has checked in years',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Lots of no-power calls end with a reset button. Find the GFCI outlets in kitchens, baths, garages and outside, because one tripped GFCI can shut down others in another room. A breaker that trips once and holds after you reset it is doing its job. A dead light may be the bulb or a wall switch tied to a lamp outlet. Book us when an older Madisonville house is changing hands, when outlets are mostly two-prong, when there is a fuse box, or when extension cords have gone permanent. Lights flickering in more than one room point to a real fault.',
      },
      {
        title: 'Inspection, Repair or Rewire in Madisonville?',
        body: 'The age of the house tells us where to look, but the findings decide the job. Loose terminals, a breaker that runs hot or missing GFCI protection are repair items. A fuse panel, or a breaker panel that has run out of capacity, means a panel replacement. Where cloth or knob-and-tube wiring runs through most of an older house, we quote a full rewire alongside fixing the worst runs first, and you pick. Landlords with several units can do the same unit by unit. You can take our report to any licensed electrician.',
      },
    ],
    whyTitle: 'Why Madisonville Homeowners and Landlords Call Us',
    whyParagraph:
      'Census figures count 49.7% of Madisonville homes as rented, and the owned ones lean old. Our licensed, insured electricians pass background checks and drug tests, and every price is agreed before work begins.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Madisonville?',
        a: 'You get a flat rate before we arrive. It depends on the size of the place and what the inspection is for, so one apartment checked for a lease costs less than a large pre-war house checked before a sale. Repairs found along the way are quoted separately.',
      },
      {
        q: 'What does your inspection include?',
        a: 'We start at the panel: breakers or fuses, the main, and grounding and bonding. Then we test outlets, including GFCI and AFCI protection, look over visible wiring and connections, and confirm the smoke alarms are powered. The written report lists each item and how urgent it is.',
      },
      {
        q: 'Do we have to hire you to make the repairs?',
        a: 'No. The report is yours, whether you hand it to a buyer, your own electrician or a property manager. If you want us, we price each repair at a flat rate and you approve only the ones you want. Financing is available for bigger items.',
      },
    ],
  },
};
