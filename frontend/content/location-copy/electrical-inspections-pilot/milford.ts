import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const milford: LocationServiceCopy = {
  localParagraph:
    'In Milford the age of the house usually sets the inspection. Census figures show 69.7% of homes in the city went up before 1980, and nearly one in five before 1940. In those prewar houses near the river, cloth-covered or knob-and-tube wiring can still be in the walls, along with two-prong outlets and fuse boxes nobody upgraded. About half of Milford households rent, so landlords book us as often as owners. We test the whole system and put every finding in writing before quoting a fix.',
  emergencyParagraph:
    'Phone the same day if a Milford outlet is hot or humming, a switch plate shows scorch marks, something smells like burning insulation, sparks jump, or a breaker refuses to stay on. Shut off that circuit at the panel. If smoke or flame shows up, everyone outside, then 911. We usually get there that day, Saturdays and Sundays included.',
  commonIntro:
    'Milford calls split between prewar houses near Main Street and the city’s larger apartment buildings. What we find most:',
  localFaqs: [
    {
      q: 'Our Milford basement flooded. Is the wiring safe to use?',
      a: 'Leave any circuit that was under water switched off until it’s checked. The Little Miami crested near 21 feet at Milford in March 2008, enough to flood low ground between Main Street and the river, according to the National Weather Service. We inspect the outlets, boxes and panel and tell you what must be replaced.',
    },
    {
      q: 'Who issues electrical permits in Milford?',
      a: 'The City of Milford, which uses National Inspection Corporation to run building and electrical permits. Our inspection is a safety check with a written report for you. When a repair needs a permit, we apply through the city and the NIC inspector signs the work off.',
    },
    {
      q: 'I rent in Milford. Can I book an inspection myself?',
      a: 'Write to your landlord first. Ohio Revised Code 5321.04 (A)(4) puts landlords on the hook for keeping the electrical fixtures they supply safe and working, and owners or managers do the booking. If you smell burning, flip that breaker off meanwhile. Wiring is our work; leases belong to you and the landlord.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for older Milford homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Milford Homes and Apartments',
    commonSituations: [
      'A fuse box still in service in a house built before 1940',
      'Cloth-covered wiring feeding a kitchen that has been remodeled around it',
      'Outlets and a panel in a basement that took river water',
      'A 1970s apartment unit with too few circuits for the appliances it now runs',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some dead outlets fix themselves with a button. Kitchens, baths, garages and outdoor outlets often hang off one GFCI, so find the tripped one and reset it. A single breaker that trips, resets and stays on is not an inspection job either, and neither is a dead bulb or a lamp outlet run off a wall switch. Book one if the house has two-prong outlets in most rooms, an old fuse box, or extension cords running as permanent wiring. A sale or purchase of a prewar Milford house with no recent electrical work is reason enough too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Milford?',
        body: 'We decide from what the walls and panel show, not the year the house went up. A loose neutral, a breaker that won’t hold or a bathroom without GFCI protection is fixed by itself. When a panel is undersized or cooking itself, we price a new one. Rewiring is on the table only where cloth or knob-and-tube runs reach most rooms, and then it sits next to the patch-by-patch quote so you can compare. Hire us or hand the report to someone else; that choice stays with you.',
      },
    ],
    whyTitle: 'Why Milford Homeowners and Landlords Call Us',
    whyParagraph:
      'Milford mixes century-old houses with large apartment buildings, and we work in both. Technicians are licensed, insured, background-checked and drug-tested. Family owned since 1993, we give you the flat-rate price before any work starts.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Milford?',
        a: 'One flat price, named before we begin. It turns on how big the house or unit is and what the report is for, say a closing or a rental turnover. Repairs from the report come as their own quote, each needing your OK. Urgent visits never carry overtime fees.',
      },
      {
        q: 'What do you check during a Milford inspection?',
        a: 'Each breaker or fuse in the panel, the ground and bond connections back to the service, outlets and their shock or arc-fault protection, wiring we can reach in the basement and attic, and power to hard-wired smoke detectors. In older houses we record any cloth or knob-and-tube runs we spot.',
      },
      {
        q: 'If you find problems, do I have to use you to fix them?',
        a: 'No. The report stays with you, and any licensed electrician can work from it. We’re glad to price the repairs, but booking the inspection doesn’t tie you to us for anything after. Many owners get a second quote.',
      },
    ],
  },
};
