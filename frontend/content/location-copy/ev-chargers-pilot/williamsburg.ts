import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const williamsburg: LocationServiceCopy = {
  localParagraph:
    'Census figures date nearly three of every ten homes in Williamsburg to 1939 or before, in a village founded in 1796 beside the East Fork. Some of those houses still lean on a small original service with little spare for a 240-volt line, while post-war and newer houses fare better. Most stand detached, and close to four in ten households rent. Our electrician reads the panel and the load first, says so when the Level 1 cord will cope, and agrees a price before any wiring.',
  emergencyParagraph:
    'A hot, scorched or melting plug or outlet is urgent, as is a burning smell mid-charge or a cable someone drove over. If the breaker trips whenever the car charges, quit using it. Shut it off only when the panel can be reached dry-handed. For smoke or flames, get outside and dial 911. Same-day visits are normal, weekends too.',
  commonIntro:
    'From the oldest houses in the village to the newest, these are the situations that come up most in Williamsburg.',
  localFaqs: [
    {
      q: 'Will an older house in Williamsburg have enough service for a Level 2 charger?',
      a: 'Many will, but some pre-war houses still carry a small original service. We count every heavy appliance on paper and see whether a 240-volt line fits beside them. When it won’t, a load-management device frequently costs less than enlarging the service, and you get both prices to compare.',
    },
    {
      q: 'I rent my home in Williamsburg. How do I get a charger installed?',
      a: 'Start with your landlord, and get the yes in writing. The landlord or property manager then books us, because the charger becomes part of the property. We install chargers, not lease terms, so who pays for it and who keeps it when you move is settled between you and the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 chargers for old and new houses in Williamsburg',
    band1Heading: 'When a Home in Williamsburg Needs an EV Charger',
    commonSituations: [
      'A pre-war house whose original service has no headroom for a 240-volt line',
      'Driving out of the village most days, further than a Level 1 cord can refill overnight',
      'A crowded panel with no open spaces and breakers that already trip',
      'Planning ahead for a second EV when the next car gets replaced',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Williamsburg',
        body: 'Charging at home counts for more when public stations aren’t on your usual route out of the village. Level 2 gives back range in far less time than a household outlet, so each session restores more and the car is out of service less. Plug in at night and it’s ready by breakfast, with no detour and nothing to wait for. Electricity at home usually beats public station prices, and many utilities knock something off for off-peak use, so ask yours. Matching breaker, wire and grounding to the charger keeps an older house from overheating a circuit. In Williamsburg, buyers increasingly count a charger as a plus.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Williamsburg',
        body: 'Plenty of light drivers in the village get by on the portable cord that shipped with the car. Plugged into 120 volts it restores little range per hour, yet that covers short trips when the car sits overnight. If that’s your pattern, you may not need us. Longer commutes and two-EV households usually step up to Level 2 on a 240-volt circuit of its own. First confirm nothing in another room shares the cord’s outlet. In older houses especially, keep it out of extension cords and away from a receptacle that’s loose or warm.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Williamsburg',
        body: 'In Williamsburg, a house from before 1940 might have capacity to spare and one from the 1970s might not, which is why we calculate rather than guess. Spare capacity means a dedicated circuit, typically on a 40 to 60 amp breaker depending on the unit. A shortfall means a load controller priced beside a bigger panel or service. Clermont County Building Inspection acts as the village’s building department, and we file there and book the inspection.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Williamsburg Choose Us for EV Charger Installation',
    whyParagraph:
      'Old houses keep surprises in the panel, so our licensed electricians look there first and run the load calculation. You get a straight answer about what the house needs, a code-compliant install, and a price fixed before work starts.',
    sharedFaqs: [
      {
        q: 'What will an EV charger installation cost me in Williamsburg?',
        a: 'Price follows three things, the charger, the run of wire between panel and car, and any attention an older panel needs. We look at the panel, then put one flat rate in front of you to approve. Financing covers the charger and any panel work alike.',
      },
      {
        q: 'How much time does a home charger install take in Williamsburg?',
        a: 'Expect several hours for most jobs. A pre-war house needing load management or a panel upgrade first runs longer, and you’ll hear that at the panel check. The timeline, including any stretch without power, is set before we begin.',
      },
      {
        q: 'Can I safely install a Level 2 charger on my own in Williamsburg?',
        a: 'We wouldn’t. Sizing the circuit means a load calculation against the whole house, and the work needs a permit and an inspection. Older houses add questions about grounding and existing wiring too. A licensed electrician should handle the lot.',
      },
    ],
  },
};
