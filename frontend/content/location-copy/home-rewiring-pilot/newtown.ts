import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newtown: LocationServiceCopy = {
  localParagraph:
    'Newtown has two different wiring stories. Around one home in five is from before 1940, mostly in the old village core, and those may hide knob-and-tube or cloth cable without a ground, ending at two-slot outlets. Everything else skews newer, the Census median being 1989, and owners there tend to want a line for an addition, a finished basement or a circuit that keeps quitting. We meter it before quoting, tell you if it passes, and put scope and fixed price on paper before a wall is touched.',
  emergencyParagraph:
    'We should be there today if a wall gives off a melting-plastic smell, a switch crackles, a receptacle has gone black or an appliance tingles when touched. Only cut the circuit at the panel when nothing you’d touch is wet or warm. Smoke or flame means leaving the house first and phoning 911 from outside. Weekends work for us.',
  commonIntro:
    'From the older houses close to Main Street to the subdivisions added since the 1980s, these complaints usually start a wiring conversation in Newtown:',
  localFaqs: [
    {
      q: 'Does wiring need checking after a flood in Newtown?',
      a: 'If river water or a sewer backup reached receptacles, switches or the basement panel, yes. Keep those circuits off until they’re tested, because silt and moisture corrode connections that then fail later. The 2018 flooding on Crull Street and Turpin Lane is a reminder that basements on those streets are exposed.',
    },
    {
      q: 'I rent a house in Newtown with old outlets. Can I book you?',
      a: 'Not as a tenant. The owner hires us, so start with a dated letter describing the old outlets and keep a copy for yourself. Ohio’s ORC 5321.04 (A)(4) puts the duty of keeping supplied electrical fixtures in good and safe working order on the landlord. We rewire houses, not leases, so the landlord sets the visit.',
    },
  ],
  overrides: {
    ctaLine: 'Rewiring for old village houses and newer subdivisions in Newtown',
    band1Heading: 'Signs a Home in Newtown Needs Rewiring',
    commonSituations: [
      'Two-slot outlets and no ground in a pre-1940 house in the old village core',
      'A light switch giving off a scorched smell in a house still on its first wiring',
      'A breaker that keeps dropping since the basement was finished',
      'Lights that flutter when the AC starts in a house past the 30-year mark',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Newtown',
        body: 'For the older houses, the reason is safety. Cloth jacketing cracked by age sits hidden in the walls, and wiring faults are among the leading causes of house fires. A new run removes that, adds a ground and stops the heat that shows up as warm receptacles. For the 1980s and newer houses, the reason is capacity, with space on the panel for modern HVAC, a bigger kitchen and smart controls. Either kind ends up on current code with a steadier system, which matters to buyers when the house goes on the market.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Newtown',
        body: 'The scope comes from what testing shows. Re-running two or three bad circuits, swapping two-slot outlets for grounded ones, giving a kitchen dedicated lines or redoing one room counts as partial, and that covers most houses in Newtown. Should the original cable fill an old house, or knob-and-tube or aluminum turn up throughout, a whole-home rewire gets priced next to the partial and you choose. Before you phone, push the reset buttons on the GFCIs near sinks, in the garage and outdoors, then see whether the tripped breaker stays on. Fuses over healthy wire may only need a panel swap.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Newtown',
        body: 'Nobody moves out. The crew works through a part of the house, closes it up and moves on, warning you before the lights go out each time. The scope marks which walls and ceilings get opened. Our office handles the permit and books the final inspection, so you’re never stuck working out which office covers the village, and we don’t close the job until it passes.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Newtown Choose Us for Home Rewiring',
    whyParagraph:
      'Whether your house went up before 1940 or after 1990, licensed electricians trained in grounding and load balance do the wiring, and it’s built to current code. The scope and a fixed price are agreed before we start.',
    sharedFaqs: [
      {
        q: 'How do you price a rewiring job in Newtown?',
        a: 'After testing, we give you one fixed figure. Size, circuit count, how hard the walls are to reach into and the condition of the panel all set it. Plaster in a pre-1940 house takes more care than drywall in a 1990s one, and the quote reflects that difference.',
      },
      {
        q: 'Will my family be able to sleep at home during a rewire in Newtown?',
        a: 'Yes. Power stays on in the rest of the house while one area is open, and every shutoff comes with notice. The scope also shows which walls and ceilings are on the list and roughly when, so meals and bedtimes can be planned around us.',
      },
      {
        q: 'Why shouldn’t a homeowner rewire a house in Newtown?',
        a: 'Because energized wiring and a strict code don’t forgive guesses. A bad splice can start a fire or shock someone later, fail inspection and give your insurer a reason to push back. Licensed electricians handle grounding and load balance as routine. Trying a tripped breaker or GFCI yourself is fine.',
      },
    ],
  },
};
