import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'Two housing eras sit side by side in the East End. Along Eastern Avenue, Census figures put the core’s median year built at 1938, and a cottage that old may still be on its first small service, leaving scant room for a 240-volt line. Riverside Drive is newer, its median 1992, and those panels usually have space or can lean on load management. We size up the panel and total the household load first, admits it when the Level 1 cord will cope, and prices everything before wire gets pulled.',
  emergencyParagraph:
    'Unplug and quit charging when the charger housing, plug or outlet turns hot, browns or melts, or a scorched smell drifts from it. Repeated breaker trips during charging count too. Kill that circuit at the panel only if that’s safe. If there’s smoke, get everyone outside and dial 911. We reach most calls the same day, weekends included.',
  commonIntro:
    'Cottage owners near Eastern Avenue and newer households along Riverside Drive tend to reach us for one of these four reasons.',
  localFaqs: [
    {
      q: 'Will a Level 2 charger work on my 1930s cottage in the East End?',
      a: 'Possibly. Pre-1940 cottages sometimes still carry their first, modest service, so we add up the furnace, cooling, kitchen and charger on paper before saying yes. Where the total runs over, two prices land on your table, one for a load-management device and one for a service upgrade, and the decision stays yours.',
    },
    {
      q: 'Is an outside-wall charger sensible this close to the river in the East End?',
      a: 'It can be. Outdoor-rated chargers cope with rain once they’re mounted firmly and the connections are shielded. Because the National Weather Service lists parts of the East End as flooding when the Ohio crests high, we choose the spot with you during the panel visit.',
    },
  ],
  overrides: {
    ctaLine: 'Charger wiring for Eastern Avenue cottages and Riverside Drive houses',
    band1Heading: 'When a Home in the East End Needs an EV Charger',
    commonSituations: [
      'A household expecting its second EV with a single outlet between them',
      'Weekday mileage that leaves the trickle cord behind by Thursday',
      'A cottage panel off Eastern Avenue with every slot spoken for',
      'Switching from station visits to cheaper late-night charging at home',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in the East End',
        body: 'Speed is the first gain. Level 2 puts charge back far quicker than a wall receptacle, so one evening on the charger covers more driving and the car sits idle less. Overnight, it fills while you sleep, and mornings start without circling for an open public plug. Paying for power at home usually beats station prices, and plenty of utilities discount electricity used off-peak, so put the question to yours. Proper sizing of breaker, conductors and ground keeps the circuit cool under load. Buyers shopping for a riverside house or a restored cottage increasingly expect a charger, too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in the East End',
        body: 'Light drivers can skip us. Covering short hops and parking within reach of a sound receptacle, you may never outgrow the portable cord shipped with the car, which draws ordinary 120-volt power and restores range slowly, a handful of miles each hour. Commuters, or homes running two EVs, generally need Level 2 fed by a dedicated 240-volt line. Two quick checks help first. Confirm nothing else shares that receptacle’s circuit, and never feed the cord through an extension cord or a receptacle that wobbles or warms. Cars kept curbside rarely suit a home charger, and we’ll say so.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in the East End',
        body: 'House age doesn’t decide capacity, because the load calculation does. Spare room means one dedicated circuit and a short job. Tight capacity gets two quotes, a load-management device that throttles charging while the house is busy and a panel or service upgrade, with you picking. For addresses in the East End, Inspection Bureau, Inc. (IBI) handles electrical permit review and the closing inspection on the city’s behalf.',
      },
    ],
    whyTitle: 'Why Homeowners in the East End Choose Us for EV Charger Installation',
    whyParagraph:
      'Before quoting, licensed electricians from our crew read your panel and total the load, then give a straight answer on upgrade, load management or neither. Work follows code, and the flat price is yours to approve beforehand.',
    sharedFaqs: [
      {
        q: 'What drives the flat price for charger work in the East End?',
        a: 'Three things set it. One is the charger you buy, another is the distance between the panel and your parking spot, and the third is any panel work. After seeing the panel, we give a single flat figure, offer financing, and start no wiring until you sign off.',
      },
      {
        q: 'How many hours should I set aside for a charger install in the East End?',
        a: 'Plan on several hours for most jobs. Service or panel upgrades stretch that, and cottages sometimes need a longer, twistier wire path to the car. You’ll hear the schedule, power shutoff included, before any tools come out of the van.',
      },
      {
        q: 'Could I wire my own Level 2 charger in the East End?',
        a: 'Please don’t. Correct conductor and breaker sizing, a whole-house load calculation and a permit closed by inspection are all part of it, and mistakes show up as heat during long charging sessions. In the city, contractors pull most electrical permits, so a licensed electrician belongs on this.',
      },
    ],
  },
};
