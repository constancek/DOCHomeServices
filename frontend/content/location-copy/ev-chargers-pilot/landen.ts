import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const landen: LocationServiceCopy = {
  localParagraph:
    'Nearly every house in Landen was built between the 1960s and the 1990s, and Census figures put the median at 1985. The catch here is heat. Close to nine in ten homes heat with electricity, so winter heating already leans hard on the service, and a charger stacks on top of it. Load management often solves it. We look at the panel and run the load calculation first, say so if plain Level 1 charging fits your driving, and quote a fixed price before work starts.',
  emergencyParagraph:
    'If the charging cable is cracked or flattened, a plug has softened, or something smells like it’s burning, take the car off charge. Shut off that circuit if you can reach the panel dry and safely. Get out and dial 911 at the first hint of smoke or fire. In Landen, most calls are seen the same day, weekends included.',
  commonIntro:
    'Most houses in Landen heat with electricity, which shapes these four common reasons for a charger call.',
  localFaqs: [
    {
      q: 'My house in Landen has electric heat. Will a charger overload it?',
      a: 'Not if it’s planned properly. The load calculation counts the heat pump or electric furnace at its winter peak alongside the charger. If the total is too high, a load-management device can slow charging while the heat runs, and that is usually cheaper than upgrading the service through Duke Energy Ohio.',
    },
    {
      q: 'Can I add an EV charger to a townhome or condo in Landen?',
      a: 'Yes, once the association signs off. Townhomes often have their own panel, which makes the job simpler, but placement on a shared wall or common area is the association’s decision. Bring us their approval, and we’ll check the panel and price the run.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 chargers for all-electric houses and townhomes in Landen',
    band1Heading: 'When a Home in Landen Needs an EV Charger',
    commonSituations: [
      'An all-electric house where the heat pump and a new charger have to share the service',
      'Wanting the car to charge late at night when demand is lower',
      'A second EV joining the household',
      'Breakers that trip on cold mornings before a charger has even been added',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Landen',
        body: 'Compared with a standard receptacle, Level 2 is quick, which means the car spends less time tethered and each session yields more driving. In Landen, you can plug in after the day’s errands and find the battery topped up by morning, skipping the public charger entirely. Home charging tends to undercut public stations on price, and many utilities set cheaper off-peak rates, which suits a charger told to wait until late. Getting the breaker size, the wire and the ground right protects a service that already carries electric heat. Buyers notice a charger, too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Landen',
        body: 'Running off an ordinary 120-volt receptacle, the Level 1 cord is slow, yet a driver who stays close to Landen and leaves the car by a working outlet may find it plenty, and we’ll say as much. Long commutes, heavy daily mileage or a second EV usually point to Level 2, which means pulling a new 240-volt circuit. It’s worth learning whether that receptacle shares its breaker with appliances. Never use an extension with the cord, and get any outlet that feels warm or loose looked at before charging from it again. A car kept at the curb is a poor fit for a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Landen',
        body: 'Electric heat doesn’t automatically mean there’s no room. We count the heating at full winter draw in the load calculation and go from there. With headroom, it gets a circuit to itself. Without it, load management and a panel or service upgrade get priced side by side, and you choose. Warren County Building Department enforces electrical codes in Deerfield Township, and we take care of the permit and inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Landen Choose Us for EV Charger Installation',
    whyParagraph:
      'In an all-electric house the load calculation matters more, and our licensed electricians do it before quoting. We tell you straight if load management or an upgrade is needed, then wire it to code for the price you approved.',
    sharedFaqs: [
      {
        q: 'What does it cost to have an EV charger installed in Landen?',
        a: 'Once the panel is checked, you get one flat rate, built from the charger you choose, the amount of wire it takes to reach the car and any panel work, which an all-electric house is likelier to need. Financing is possible, and you approve before we begin.',
      },
      {
        q: 'How long will it take to install an EV charger in Landen?',
        a: 'A normal install runs several hours. Work on the panel or service adds to that, and we go through the schedule with you beforehand so you can plan for the stretch when the power, and in an all-electric house the heat, is off.',
      },
      {
        q: 'Is an EV charger a safe do-it-yourself project in Landen?',
        a: 'No. Sizing the wire and breaker for the charger, working out whether your electric heat leaves room, and getting a permit and inspection are jobs for a licensed electrician. A mistake shows up later as heat in the wiring.',
      },
    ],
  },
};
