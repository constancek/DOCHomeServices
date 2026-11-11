import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const erlanger: LocationServiceCopy = {
  localParagraph:
    'Detached houses from the postwar decades fill most of Erlanger, and Census figures give a median year built of 1976, plus some apartment buildings. Breaker boxes of that era are often jammed by now, so the house’s total demand matters more than which charger you pick. Anything from the 1990s onward usually has headroom, or can split it via load management. Renters first need a landlord’s signature. We read the panel, add up the load, tell you if the factory cord will do, and lock in a price.',
  emergencyParagraph:
    'Plastic at the charger or its receptacle that’s hot, browned or softening, or a burning odor mid-session, means stopping and unplugging if that’s safe. Repeated trips and a damaged cable end charging too. Shut the circuit down only if you can. Smoke or fire means leaving and dialing 911. Most calls get a visit that day, weekends included.',
  commonIntro:
    'Postwar detached houses and apartment complexes make up much of the city, and charger calls from there usually involve one of these.',
  localFaqs: [
    {
      q: 'Will my charger placement be restricted by the National Register district in Erlanger?',
      a: 'Probably not by itself. A National Register listing, like the one covering the Erlanger Proper Subdivision area near Dixie and Graves, doesn’t limit what private owners do. Nobody has confirmed a separate city review there, so before mounting a charger on an outside wall in that area, we check with the city first.',
    },
    {
      q: 'I rent an apartment in Erlanger, so can I get a home charger?',
      a: 'Yes, but your landlord has to say so in writing first, and then the owner or manager arranges our visit. Parking in a shared lot is entirely their decision. We install chargers, not lease terms. If permission is refused, the slow cord on a safe receptacle serving nothing else may still get you by.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 chargers for postwar houses and newer builds across Kenton County',
    band1Heading: 'When a Home in Erlanger Needs an EV Charger',
    commonSituations: [
      'A long daily drive the trickle cord never quite replaces by morning',
      'A 1960s or 1970s panel already full from top to bottom',
      'Switching to cheaper off-peak power rather than paying at stations',
      'Trips at the panel whenever charging and electric heat overlap',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Erlanger',
        body: 'Charging turns into a background chore done overnight. Level 2 delivers energy at a rate an ordinary receptacle can’t approach, so a commute’s worth of range is back by breakfast and the car is out of action less. Utilities often bill off-peak use at lower rates, and charging at home usually undercuts public stations. You also avoid busy stations and the queue that forms at them. A professional install picks the breaker, conductor size and grounding to suit the unit, which stops overheating and keeps strain off the house. Buyers in Erlanger, as elsewhere, increasingly hope to find one.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Erlanger',
        body: 'Light drivers can usually skip the electrician. Kept beside a working receptacle, a car driven modest distances can get by on the cord included with it, even though household 120-volt current puts back only a sliver of range per hour, and if that fits you, we’ll admit it. Heavy commuting, regular highway trips or an extra EV usually mean Level 2 with its own 240-volt line. See first whether the receptacle you rely on has a breaker to itself. Keep extension cords out of the setup, along with outlets that are loose, warm or worn. A car that parks on the street rarely suits a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Erlanger',
        body: 'Capacity is a calculation, whatever year the house was framed. With room available, the panel gains one breaker feeding only the charger. Without it, you’ll see a load-management price and a panel or service upgrade price side by side, and Duke Energy Kentucky handles the utility end of any service change. You choose. Our office pulls the permit and arranges the final inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Erlanger Choose Us for EV Charger Installation',
    whyParagraph:
      'A licensed electrician opens your panel and works the demand numbers before we quote. You learn outright if more capacity or simple load control is required, and the charger goes in to code at a price fixed first.',
    sharedFaqs: [
      {
        q: 'What should a charger installation cost me in Erlanger?',
        a: 'That’s a single flat number given once we’ve inspected the panel. It rises or falls with your chosen charger, the cable distance between panel and parking spot, and any panel work. Financing is available, and the figure is settled before anything starts.',
      },
      {
        q: 'How many hours does charger work take at a house in Erlanger?',
        a: 'Several, for most. Upgrading the panel or service lengthens the job, partly because the utility must be scheduled for its part. You get the day’s plan beforehand, including roughly when the power goes out and comes back.',
      },
      {
        q: 'Why should a licensed electrician handle charger wiring in Erlanger?',
        a: 'Because circuit sizing must suit the unit, the house needs a demand calculation covering heating, cooling and appliances, and an inspector has to sign off the permit. Level 2 equipment pulls steady current for long periods, so a small wiring error quietly becomes heat inside a wall.',
      },
    ],
  },
};
