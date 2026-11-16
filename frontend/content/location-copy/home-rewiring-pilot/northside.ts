import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'By Census count, more than half of Northside’s houses predate 1940, and roughly one in three came along between 1940 and 1979. The oldest may hide knob-and-tube or cloth-jacketed wire with no ground conductor, which is why so many bedrooms here still have two-slot outlets. Postwar houses toward upper Hamilton Avenue were wired when a kitchen meant a toaster and a fridge. Our first visit is a test, and if your wiring checks out, you’ll hear that. Nothing gets opened until the scope and flat-rate price are signed.',
  emergencyParagraph:
    'An outlet with a hot plastic smell, a browned cover plate, crackling or sparks, a breaker that snaps off as you reset it, or any shock means we should come today. Kill that circuit if the panel is dry and safe to reach. Smoke means leave and phone 911 from outside. Most calls are seen same day, Sundays too.',
  commonIntro:
    'Around Hamilton and Spring Grove Avenues, tired wiring in Northside tends to announce itself in one of four ways.',
  localFaqs: [
    {
      q: 'Is it possible to get shocked by old wiring in Northside?',
      a: 'Yes. Without a ground wire, a fault inside a lamp or a toaster has no safe path, so the metal you touch can become the path. Cloth insulation that has gone brittle makes those faults likelier. Any shock from a switch, a fixture or an appliance deserves a visit that same day.',
    },
    {
      q: 'What should a renter in Northside do about sparking outlets?',
      a: 'Unplug whatever is in that outlet, leave it unused, and send your landlord a dated note while keeping your own copy. Ohio’s landlord statute, ORC 5321.04(A)(4), makes owners responsible for keeping supplied electrical fixtures safe and working. Our job is wire, not lease disputes, so the property owner is who books us.',
    },
  ],
  overrides: {
    ctaLine: 'Testing and rewiring for older houses in Northside',
    band1Heading: 'Signs a Home in Northside Needs Rewiring',
    commonSituations: [
      'Two-slot outlets in every upstairs bedroom of a pre-1940 house',
      'Kitchen lights that sag whenever the microwave and the toaster share a run',
      'One half of a two-family flipping breakers over and over',
      'A house past 30 years old with no wiring update on record, worth a full system review',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Northside',
        body: 'Rewiring pulls out the brittle insulation, loose splices and overworked circuits that make old wire run hot, and wiring faults rank among the leading causes of house fires. In Northside, that often means replacing runs that predate grounding altogether. You end up with a ground at each receptacle, circuits sized for a new furnace or heat pump, and space in the panel for a bigger range or a second bathroom. The new work meets current code, which buyers’ inspectors look for at sale time, and smart switches or new light fixtures become an easy add instead of a project.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Northside',
        body: 'Plenty of calls here end smaller than people expect. Once testing shows where the trouble lives, a few bad runs, a single room or a set of two-slot receptacles getting grounded replacements counts as partial work. If original cable or knob-and-tube shows up across most of the house, a full rewire gets priced next to that partial option, and the choice stays yours. GFCI receptacles in a bathroom, kitchen, garage or on the porch can trip and take other outlets down with them. A lone dead receptacle is normally the device, and a fuse box sitting on healthy wire may only call for swapping the panel.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Northside',
        body: 'Nobody has to move out. We take the house in sections, and you know in advance which part loses power and when. Exactly which plaster gets cut is listed in your signed scope, and owners with an upstairs tenant get a schedule they can share. Cincinnati contracts electrical plan review and inspection to Inspection Bureau, Inc. (IBI). We file the permit and stand with the inspector at the final walk-through.',
      },
    ],
    whyTitle: 'Why Families and Landlords in Northside Choose Us for Home Rewiring',
    whyParagraph:
      'You get licensed electricians who think about grounding paths and how load splits across a panel, wire that meets current code, and a signed scope with a fixed price before any tool comes out.',
    sharedFaqs: [
      {
        q: 'What decides the price of rewiring in Northside?',
        a: 'The quote is one flat number, given once testing is done. Square footage moves it, and so do the circuit count, how stubborn the plaster and lath are, and whether your panel needs updating. Once you sign, that figure is the bill, with nothing added later.',
      },
      {
        q: 'Will we need to move out for a rewire in Northside?',
        a: 'Almost never. Power goes off one section at a time, with warning, and we keep the kitchen and at least one bathroom running whenever we can manage it. If a tenant lives in the other half of a two-family, the owner gets a schedule to hand them.',
      },
      {
        q: 'Is rewiring a house a job I can tackle myself in Northside?',
        a: 'It isn’t. You would be working around energized conductors under strict code, and mistakes turn into shocks, fire hazards, failed inspections and arguments with an insurer after a claim. Licensed electricians are trained on grounding and load balance, and an inspector has to sign off before walls are closed.',
      },
    ],
  },
};
