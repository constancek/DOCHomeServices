import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAdams: LocationServiceCopy = {
  localParagraph:
    'In Mount Adams, half the housing predates 1940, with a median year of 1938 by Census count, so a rewire usually means a double or a little apartment building on the slope, with plaster walls. Wiring that old may be knob-and-tube or cloth-wrapped, ungrounded, feeding two-prong outlets. A few units added during the 1960s and 1970s may hold aluminum branch circuits. Our electrician meters every circuit first. When the wiring checks out, we say so, and you sign a written scope and flat rate before plaster comes down.',
  emergencyParagraph:
    'Plastic-smelling smoke from a receptacle, a cover plate gone brown, or crackling behind plaster is a same-day call. Kill that one breaker if the panel is dry and you can reach it without brushing anything warm. Flames or visible smoke mean everybody leaves and someone dials 911 outside. Most calls get an electrician out that day, Saturdays and Sundays too.',
  commonIntro:
    'On the hill, wiring in the doubles and small apartment buildings usually gives itself away in one of these ways.',
  localFaqs: [
    {
      q: 'Can old wiring give someone a shock in a double in Mount Adams?',
      a: 'It can. Circuits from before 1940 may lack a ground, so when a lamp or toaster develops a fault, the current looks for a path and sometimes finds a person. Brittle insulation adds to it. If anybody has felt a jolt from a switch or fixture, leave that breaker off until we’ve tested the run.',
    },
    {
      q: 'I rent a unit in Mount Adams and the outlets keep failing. Who books the rewire?',
      a: 'The building owner does. Put the complaint in an email or letter and save it. Section 5321.04(A)(4) of the Ohio Revised Code makes a landlord keep the electrical fixtures that came with the unit in good and safe working order. Our work is wiring, and lease questions stay between you and the owner, who schedules us.',
    },
  ],
  overrides: {
    ctaLine: 'Rewiring for older doubles and flats in Mount Adams',
    band1Heading: 'Signs an Apartment or Home in Mount Adams Needs Rewiring',
    commonSituations: [
      'Ungrounded two-prong receptacles on both floors of a pre-war double',
      'Ceiling lights upstairs that dip whenever the downstairs tenant cooks',
      'One breaker in a four-unit building that keeps snapping off',
      'A switch plate warm to the touch in a flat nobody has updated',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Mount Adams',
        body: 'New wiring takes out insulation that has dried and cracked over the decades and connections that have worked loose, both of which can overheat behind plaster. Faulty wiring sits high on the list of house fire causes, and an overloaded circuit makes it worse. A rewire brings grounded outlets, more circuits for the kitchen and for modern heating and cooling, and work that meets current code. It also helps at resale, because anyone buying a building this old will have its wiring picked over. A rewired unit is ready for smart devices, brighter lighting and the larger appliances tenants bring with them.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Mount Adams',
        body: 'Meter readings settle the size of the job, and the building’s age only hints at it. Fixing one flat, a handful of bad runs or a kitchen short on dedicated lines counts as partial, as does trading ungrounded receptacles for three-prong ones. Original cable in every unit, or knob-and-tube and aluminum turning up floor after floor, gets a whole-building quote beside the smaller one. That bigger quote covers new breakers, a balanced load and a larger panel if the present one is maxed out. Press reset on each GFCI first, since one trip can darken a whole string. A lone dead receptacle tends to be only that receptacle.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Mount Adams',
        body: 'Tenants rarely need to leave. Our crew finishes one flat or room, restores it, then moves on, and posts notice before each shutoff. Your scope sheet marks every wall and ceiling we expect to open. Inside Cincinnati, Inspection Bureau, Inc. (IBI) handles electrical permit review and inspection under contract with the city. Filing that permit and standing with the IBI inspector at the final are both on us.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Mount Adams Choose Us for Home Rewiring',
    whyParagraph:
      'Splitting a hillside house into units leaves odd circuits, and our licensed electricians sort out the grounding and spread the load evenly. They work to current code, and the price is fixed on paper first.',
    sharedFaqs: [
      {
        q: 'How much does it cost to rewire a home in Mount Adams?',
        a: 'You get one flat figure after the testing visit. It rises or falls with square footage and unit count, the number of circuits, how much plaster stands between us and the old cable, and whether the panel has room. Nobody picks up a drill until you sign off.',
      },
      {
        q: 'Can we keep living in the house during a rewire in Mount Adams?',
        a: 'In most cases, yes. We take one room or unit at a time, so the rest of the building keeps power, and residents hear from us ahead of each shutoff. Plaster dust stays in the rooms we’re working in, and we clean those up before we leave for the night.',
      },
      {
        q: 'Is it safe to rewire a double in Mount Adams without an electrician?',
        a: 'No. Old circuits can stay live in ways that surprise people, and the electrical code leaves little room for guesswork. A slip can shock you, start a fire, fail the IBI inspection or give your insurer a reason to balk. A licensed electrician grounds each run properly and keeps the panel’s load balanced.',
      },
    ],
  },
};
