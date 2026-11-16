import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const madisonville: LocationServiceCopy = {
  localParagraph:
    'Madisonville is really two neighborhoods for charger purposes. In the older half, Census figures show about two-thirds of homes went up in 1939 or earlier and most are owner-occupied, so the question is whether an original service can spare a 240-volt line. The newer half is mostly rented, with large apartment buildings and houses built since 2000, and there the owner or manager decides. Either way we open the panel, do the load calculation, say if a Level 1 cord will do, and fix the price first.',
  emergencyParagraph:
    'Stop charging if a plug, outlet or charger is hot or blackened, or if there’s a burning smell. If the panel is safe to reach and nothing near it is wet or warm, turn the circuit off. Smoke or flames mean leaving the building and calling 911. Renters should alert management right away. A same-day visit is usual, weekends included.',
  commonIntro:
    'From pre-war houses to large newer apartment buildings, these four situations cover most charger calls we get in Madisonville:',
  localFaqs: [
    {
      q: 'I live in an apartment building in Madisonville. Can I get a charger?',
      a: 'Only through management. In a managed building, residents ask the office, and chargers in a shared lot or garage are the owner’s or manager’s decision. If management wants chargers, we look at the building’s panel and load and give them a price. We install chargers; lease terms are between you and the owner.',
    },
    {
      q: 'Does my older house in Madisonville have room for a Level 2 charger?',
      a: 'It might. A house built before 1940 sometimes still has its first small service, though many were upgraded along the way. The load calculation tells us which you have. If room is short, load management gets priced next to a service upgrade, and you choose.',
    },
  ],
  overrides: {
    ctaLine: 'EV chargers for pre-war houses and apartment buildings in Madisonville',
    band1Heading: 'When an Apartment or Home in Madisonville Needs an EV Charger',
    commonSituations: [
      'A pre-war house whose original service has nothing left for a 240-volt line',
      'A building owner getting tenant requests for somewhere to charge',
      'A daily commute that a Level 1 cord can’t make up overnight',
      'A homeowner done with waiting in line at public stations',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Madisonville',
        body: 'For owners in Madisonville, a charger moves fueling up from a public lot to your own wall. Level 2 is much quicker than a regular outlet, so the car picks up more range per session and sits on the plug for less time. You head out in the morning with a full battery instead of waiting at a public station. Charging at home is usually less expensive, and many utilities cut the rate during off-peak hours. A correctly sized breaker, wire and ground keeps the circuit cool, which counts in older houses. For a landlord, a charging station also adds appeal for future buyers and renters.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Madisonville',
        body: 'Not every driver here needs a 240-volt circuit. When the car does short hops around the neighborhood and parks beside a sound outlet, the 120-volt cord from the dealer may be all the charging it needs, slow as it is. Daily commuting or a second EV in the household is where a Level 2 line just for the charger makes sense. Learn what else draws from the cord’s receptacle, don’t add an extension cord, and replace any outlet that’s loose or warm to the touch. Parking on the street usually rules a home charger out.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Madisonville',
        body: 'Whether it’s a pre-war house or a newer building, the load calculation decides more than the age. If the numbers leave capacity, the charger gets a breaker reserved for it. If they don’t, load control gets priced next to more service capacity, and the owner decides. City of Cincinnati addresses have electrical permits reviewed and inspected by Inspection Bureau, Inc., and we file and handle the inspection visit.',
      },
    ],
    whyTitle: 'Why Residents and Owners in Madisonville Choose Us for EV Charger Installation',
    whyParagraph:
      'Our licensed electricians open the panel and add up the building’s demand before recommending a thing. Owners get a plain verdict on load control or an upgrade, and the code-compliant job comes in at the approved price.',
    sharedFaqs: [
      {
        q: 'What does it cost to add a home charger in Madisonville?',
        a: 'After a look in the panel, we name one flat price. The charger, the stretch of wire out to where the car sits, and whether the panel or service needs work. Nothing starts until the price is approved, and financing is on offer.',
      },
      {
        q: 'How long does a Level 2 install take in Madisonville?',
        a: 'Several hours on a typical job, and longer when the panel has to be upgraded. A long wire run through a pre-war house adds a bit too. We share the timeline before starting and tell you when the power goes off.',
      },
      {
        q: 'Is it safe to install my own EV charger in Madisonville?',
        a: 'Not really. A Level 2 unit needs a circuit sized for it, a load calculation on the panel, a permit and an inspection, which is licensed electrician work. A wrong breaker or wire gauge can overheat, especially on an original pre-war service.',
      },
    ],
  },
};
