import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Homes in Downtown Cincinnati are mostly apartments and condos in large buildings, and Census figures show close to nine in ten are rented. The stock splits two ways. Units in buildings from before 1940 may still have original wiring, two-prong outlets or circuits too small for a modern kitchen, while units finished since 2010 rarely need more than one circuit added. Risers and the main service belong to the building. We test the unit, say when its wiring is sound, and set the scope and flat price before work begins.',
  emergencyParagraph:
    'Residents should tell building management if an outlet gives off a scorched odor, a plate darkens, something sparks, a breaker drops after reset, or a fixture delivers a shock. When the breaker box is safe to reach, flip that circuit off. For smoke or fire, take the stairs and call 911. Owners get same-day visits on most calls, weekends included.',
  commonIntro:
    'In the prewar buildings and the newer towers of Downtown Cincinnati, these are the signs that bring owners and managers to us:',
  localFaqs: [
    {
      q: 'I rent in Downtown Cincinnati and an outlet sparked. Who should I call?',
      a: 'Call your building’s management. Stop using the outlet, flip its breaker off if you can safely reach it, and put the report in writing. Ohio’s ORC 5321.04 makes landlords responsible for keeping the electrical fixtures they supply in good and safe working order. Management arranges the repair; we handle wiring, not leases.',
    },
    {
      q: 'Can you rewire a condo unit in Downtown Cincinnati?',
      a: 'Yes, inside the unit. We test the circuits, price what the results support, and coordinate access, work hours and any shared wiring with the association before starting. Feeders and risers that serve the whole building belong to the association, so it approves any work there.',
    },
  ],
  overrides: {
    ctaLine: 'Rewiring for condos and older apartments in Downtown Cincinnati',
    band1Heading: 'Signs an Apartment or Home in Downtown Cincinnati Needs Rewiring',
    commonSituations: [
      'Two-prong outlets in a unit inside a building from before 1940',
      'A condo kitchen whose breaker trips when the oven and microwave run together',
      'Flickering in a prewar apartment each time its electric heat cycles on',
      'A tenant report of a warm, discolored outlet cover near a bed',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Downtown Cincinnati',
        body: 'In a building with dozens of units, one unit’s bad wiring becomes everyone’s problem. Worn insulation and overloaded circuits push the fire risk up, and faulty wiring is high on the list of what starts house fires. Rewiring an older unit removes damaged wire, adds circuits sized for electric heat and a modern kitchen, and keeps runs from overheating. Grounded receptacles take the place of two-prong ones. The unit meets current code, handles smart devices, new lighting and bigger appliances, and lists better whenever the owner sells or re-lets it. Managers field fewer emergency calls from tenants.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Downtown Cincinnati',
        body: 'The test sets the job. Most units downtown need only partial work, such as separate kitchen circuits, grounded receptacles where two-prong ones sit, or a few bad runs replaced. When an older unit still runs on original wire everywhere, we price a full unit rewire beside the partial option, with breakers updated, circuits balanced, and a new panel in the unit only if the existing one can’t carry the added circuits. The owner decides. Before calling management, tenants can check for a tripped GFCI in the kitchen or bath, since one can knock out others, and see whether the breaker resets and holds.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Downtown Cincinnati',
        body: 'Residents normally remain in their units during the job. We schedule one area at a time, give management advance notice to pass on before a unit loses power, and the signed scope shows each wall or ceiling that gets opened. For the City of Cincinnati, Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits; we handle the filing and the final inspection.',
      },
    ],
    whyTitle: 'Why Owners and Residents in Downtown Cincinnati Choose Us for Home Rewiring',
    whyParagraph:
      'We work around tenants, elevators and building rules. Our licensed electricians handle grounding and load balance in multi-unit buildings, follow current code, and give the owner a written scope and flat price before starting.',
    sharedFaqs: [
      {
        q: 'How is rewiring a unit priced in Downtown Cincinnati?',
        a: 'Owners and managers get one flat rate once testing is done. Unit size, circuit count, how hard walls and ceilings are to open in a large building and whether the unit’s panel needs updating all move the price. Several units can go on one quote. Financing is available.',
      },
      {
        q: 'Can residents stay in a unit while it’s rewired in Downtown Cincinnati?',
        a: 'Usually, yes. We work through the unit room by room and give management notice before any shutoff so residents can plan. Where walls and ceilings will be opened is in the written scope, and we keep hallways and shared spaces clear.',
      },
      {
        q: 'Why can’t a building handyman rewire units in Downtown Cincinnati?',
        a: 'These are energized circuits under exacting code, often close to shared feeders. A mistake can mean shocks, fire hazards, a failed inspection and insurance trouble for the whole building. A licensed electrician grounds every circuit, balances the load and has the permit inspected.',
      },
    ],
  },
};
