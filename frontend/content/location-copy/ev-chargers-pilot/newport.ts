import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newport: LocationServiceCopy = {
  localParagraph:
    'Newport’s housing sets the terms. Census figures count barely half of it as single detached, and close to half dates from 1939 or earlier. A house of that vintage may still lean on a meager original service with nowhere to land a 240-volt breaker, and a car parked curbside can’t safely reach a wall unit. So we gauge the panel’s load first, own up when the factory cord is adequate, and lock a fixed figure before anyone picks up a drill.',
  emergencyParagraph:
    'End the session if the charger shell runs hot, the connector shows brown or black marks, or a receptacle has begun to sag. A burnt smell counts too. Kill that circuit only from dry footing, clear of heat. With smoke or flames, get out of the building and ring 911. Same-day help is routine on most calls, weekends too.',
  commonIntro:
    'Older houses, two-families and apartment buildings frame most charger requests reaching us from Newport.',
  localFaqs: [
    {
      q: 'I rent my apartment in Newport. Is a charger even possible?',
      a: 'Yes, provided your landlord signs off in writing, after which the owner or building manager schedules us. A space in a shared lot is likewise the owner’s to decide. We install chargers, not lease terms, so bring the owner into it early and we’ll walk them through their panel.',
    },
    {
      q: 'Does a charger on a house in the East Row need city approval?',
      a: 'Possibly. East Row, Buena Vista and York Street are local historic districts, and the city’s Historic Preservation office wants a Certificate of Appropriateness before many exterior alterations there. A charger bolted to an outside wall might be one, so we check with the city first and shape the plan to its answer.',
    },
  ],
  overrides: {
    ctaLine: 'Home EV charging for older houses and two-families in Newport',
    band1Heading: 'When an Apartment or Home in Newport Needs an EV Charger',
    commonSituations: [
      'A pre-1940 house whose original service can’t fit one more 240-volt breaker',
      'A landlord answering a tenant’s written request for a charger',
      'A commuter fed up with circling for a free public plug after work',
      'A two-family panel that already trips with both dryers spinning',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Newport',
        body: 'Owning the charger means owning the schedule. Your car rests plugged in overnight and sits full by morning, so nobody circles blocks looking for a public plug. Level 2 refills dramatically quicker than a household receptacle, giving more range per session and less downtime. Public stations usually cost more, and many utilities bill off-peak power at lower rates, which yours can confirm. Houses of this age make a professional install worth it, because a matched breaker, conductor and ground keep elderly wiring from overheating. Increasingly, buyers treat a charger as a plus, here in Newport as anywhere.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Newport',
        body: 'In Newport, some drivers never outgrow the Level 1 cord packed with the car, which sips ordinary 120-volt current and charges slowly. Drive little, park beside a working receptacle, and try that first, and we’ll confirm whether it suffices. Learn whether that receptacle has a breaker to itself. Keep extension cords out of the arrangement entirely, plus any aged receptacle that wiggles or warms. A daily commute or second EV generally points to Level 2 on a dedicated 240-volt circuit. Street parking usually makes a home charger impractical, and we’ll say that up front.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Newport',
        body: 'The load calculation, rather than the house’s age, tells us what this panel tolerates. Capacity means a circuit of its own for the charger. Shortfall means side-by-side quotes for load management and for a panel or service upgrade, coordinated with Duke Energy Kentucky if the service itself changes, and you decide. The City of Newport Building Department issues electrical permits, and we apply and arrange the final inspection.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Newport Choose Us for EV Charger Installation',
    whyParagraph:
      'Our licensed electricians read your panel and work out the load before naming a price, say plainly whether an upgrade or load management is called for, and install to code at the agreed figure.',
    sharedFaqs: [
      {
        q: 'How is the price set for an EV charger in Newport?',
        a: 'A flat rate arrives once we’ve examined the panel. The charger model, the run’s length from panel to parking, and any panel repair all feed it, and older houses here need that repair more often. Financing exists, and nothing proceeds until you approve.',
      },
      {
        q: 'How much of the day does a charger install take in Newport?',
        a: 'Most installs fill several hours. Panel or service upgrades lengthen things, and so can a wait for historic district review. We hand over the schedule beforehand and warn you well before the power drops for the swap.',
      },
      {
        q: 'Is a charger something I can install on my own in Newport?',
        a: 'We’d steer you away. Circuit size must suit both charger and panel, the load math must hold up, and the city expects a permit plus inspection. Older wiring forgives very little. A licensed electrician performs each step and answers for it.',
      },
    ],
  },
};
