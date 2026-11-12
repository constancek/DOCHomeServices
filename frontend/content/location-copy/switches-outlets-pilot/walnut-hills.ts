import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walnutHills: LocationServiceCopy = {
  localParagraph:
    'Nearly half the homes in Walnut Hills were standing by 1939, Census figures show, and most are flats, with close to four in five rented. A parlor wired before the war might have one receptacle per wall, so a lamp, a TV and a router hang off an extension cord, and a few old outlets still refuse a three-prong plug. Rehabbed units ask for a GFCI beside the new sink. We trace the fault, say so if a breaker reset fixed it, and the owner approves a price first.',
  emergencyParagraph:
    'In Walnut Hills, a crackling or smoking outlet, a plug welded to the wall, or a breaker that snaps off again on reset can’t wait. Turn the circuit off only if the panel is dry to reach, and tell the landlord. With smoke or fire, leave and call 911. Most calls are seen the same day, weekends included.',
  commonIntro: 'In pre-war flats and rehabbed buildings of Walnut Hills, these four account for most work orders.',
  localFaqs: [
    {
      q: 'I rent in Walnut Hills. Who fixes a dead or sparking outlet?',
      a: 'The owner of the building does. ORC 5321.04 (A)(4) holds an Ohio landlord to keeping supplied electrical fixtures in good and safe working order, so send the request in writing and the manager books us. Pressing a GFCI reset or flipping a tripped breaker back is still yours to try. We fix outlets, not leases.',
    },
    {
      q: 'Can you add outlets to an old apartment in Walnut Hills without tearing up the plaster?',
      a: 'Most of the time, yes. We fish wire inside the wall cavity through a few small holes, and plaster, brick and old blocking decide the route. Before that we check what the circuit already carries and whether the panel has room, since a building wired before 1940 may not. The owner sees a fixed price first.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch repair for pre-war flats and houses in Walnut Hills',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Walnut Hills',
    commonSituations: [
      'A parlor or bedroom with one receptacle and an orange cord under the rug',
      'Two-prong outlets that won’t take a grounded plug',
      'A breaker that trips whenever a space heater and a microwave run at once',
      'A rehabbed kitchen whose sink-side outlet has no GFCI',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Walnut Hills',
        body: 'Old buildings in Walnut Hills were wired long before anyone thought about ground faults, so kitchens and baths in the older flats are where GFCI protection goes missing most. Code wants it there, plus in basements, garages and on outdoor outlets. The device compares current out with current back. A mismatch suggests current is escaping, maybe through a person at the sink, and the GFCI shuts off. Water alone doesn’t trip it. On a two-prong outlet with no ground wire, a GFCI is one fix code allows. USB outlets are worth adding by the bed in a studio.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Walnut Hills',
        body: 'Before you report a dead outlet in Walnut Hills, hunt for its GFCI. In older flats, the one by the bathroom sink sometimes protects outlets in the next room, so press its reset. If the flat has a breaker panel of its own, look for a handle out of line. The switch by the door in a pre-war room sometimes feeds a receptacle instead of a ceiling fixture, so flip it. A USB outlet or smart switch is a nicety, and it won’t cure a fault. Heat, buzzing, scorch marks or sparks, or a breaker that won’t hold after a reset, belong on a repair request, not under a screwdriver.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Walnut Hills',
        body: 'Walnut Hills has pre-war buildings where the panel has no spare spaces and the original wire is brittle, so we test both before adding outlets. If either can’t take more, we tell the owner and price Electrical Panel Replacement or Home Rewiring as its own line beside the outlet job, and the owner chooses. Work follows code, and Inspection Bureau, Inc. (IBI) handles the electrical permit and inspection for the city.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Walnut Hills Choose Us for Switches and Outlets',
    whyParagraph:
      'Building owners in Walnut Hills get licensed electricians who find the fault before pricing it, say so when a GFCI reset was the answer, and ground each device to code at the price the owner signed.',
    sharedFaqs: [
      {
        q: 'How do you price outlet and switch jobs in Walnut Hills?',
        a: 'We test, then quote a flat figure that the owner approves before work starts. More devices, GFCI or USB outlets, and any brittle wiring or a full panel all raise it. Owners can finance a whole-building job, and we never bill overtime.',
      },
      {
        q: 'Why does a GFCI cut the power in Walnut Hills?',
        a: 'It cuts the power when the current leaving and the current returning stop matching, because the difference could be flowing through a person. Nothing in it detects water. A splashed counter or a wet bathroom floor simply gives current an easier way out, and that’s why code wants one beside each sink.',
      },
      {
        q: 'Can a tenant or handyman safely replace an outlet in Walnut Hills?',
        a: 'It looks like two screws, but old buildings hide problems behind the plate. The box may have no ground, the insulation may crumble when touched, and one circuit may cross into the next flat. A licensed electrician sorts that out to code and tests the outlet. Tenants should leave it to the landlord.',
      },
    ],
  },
};
