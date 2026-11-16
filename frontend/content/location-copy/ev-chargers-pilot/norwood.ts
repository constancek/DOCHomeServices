import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const norwood: LocationServiceCopy = {
  localParagraph:
    'Norwood runs its own city hall, and Census figures show about two in three of its homes were built by 1939. Houses wired then were planned around lights and a radio, not a car, so the incoming service can be thin for a 240-volt run. Two-families line many streets, and over half of households rent, so the owner decides. Our visit starts at the panel with a tally of the loads. If the wall outlet covers your miles, we’ll say so, and the number is agreed before cable goes in.',
  emergencyParagraph:
    'A charging cable flattened by a tire or nicked open shouldn’t go back in use. Neither should a warm outlet or a breaker that drops every time charging begins. Kill that circuit at the panel if it’s dry and easy to reach. If smoke shows, leave and dial 911. We can usually get to you the same day, weekends included.',
  commonIntro:
    'Between the single houses and the two-families in Norwood, these are what usually prompt the call.',
  localFaqs: [
    {
      q: 'Can both halves of a two-family in Norwood get their own charger?',
      a: 'Often they can, though each charger lands on whichever panel feeds that side. We tally each side separately, then make sure the service into the building can carry the pair. Each half gets its own price for a circuit, load management or an upgrade, and you approve them one at a time.',
    },
    {
      q: 'My landlord agreed to a charger at my place in Norwood. What comes next?',
      a: 'Ask for the yes in writing, then let the landlord or manager book us, since changes to the wiring are the owner’s to sign. We look at the panel, quote whoever is paying, and start once they accept. The lease side of it, including who keeps the charger, stays between the two of you.',
    },
  ],
  overrides: {
    ctaLine: 'Chargers wired for two-families and century-old houses in Norwood',
    band1Heading: 'When a Home in Norwood Needs an EV Charger',
    commonSituations: [
      'Both households in a two-family wanting a charger of their own',
      'A panel full to the last slot, with no room for a 240-volt breaker',
      'Breakers dropping when the dryer and the air conditioner overlap',
      'Daily trips on Montgomery Road and the Lateral that a wall outlet can’t keep pace with',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Norwood',
        body: 'Plugged into Level 2, a car regains range at a pace a household outlet can’t touch, so a night’s charge stretches further and the car is tied up for less of the day. Back home in Norwood, you plug in and find the battery full at sunrise, with no public station to track down and no line. Power bought at home generally undercuts public charging, and plenty of utilities price the overnight hours lower. An electrician-sized breaker, the right gauge of wire and proper grounding keep heat out of the circuit. When a two-family or a house sells, buyers increasingly notice a charger.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Norwood',
        body: 'Short trips and a sound outlet nearby may be all a driver in Norwood needs, using the cord that came in the trunk. On 120 volts it trickles in only a few miles per hour, and if that covers your week we’ll leave it there. Long commutes or two EVs push most households to Level 2, wired on a 240-volt circuit with nothing else on it. Before booking, find out whether the cord’s outlet feeds other rooms too, and keep it off extension cords and away from tired, warm or wobbly outlets. Parking at the curb usually rules out a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Norwood',
        body: 'In Norwood, the year a house went up is a clue, not a verdict. The verdict comes from the load calculation, which sets the charger beside the heating, cooling and kitchen already on the panel. Room means its own circuit. No room means two prices on one sheet, a load-management device or a panel or service upgrade, and your choice. Norwood is its own city, outside Cincinnati, and we pull the permit and arrange the inspection there.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Norwood Choose Us for EV Charger Installation',
    whyParagraph:
      'Our electricians are licensed, and they read the panel and run the load numbers before saying a word about price. Upgrade or load management, you get the honest answer, a code-compliant job and the price you signed off on.',
    sharedFaqs: [
      {
        q: 'How do you work out the price of an EV charger in Norwood?',
        a: 'We see the panel first, then give a flat rate. That figure rises or falls with the charger model, the length of wire between the panel and the parking spot, and any panel work. Approve it and it holds. Financing is offered if you’d like to spread the cost.',
      },
      {
        q: 'How much of the day does an EV charger install take in Norwood?',
        a: 'On most jobs it’s several hours. An upgraded panel adds to that, and you’ll have the schedule before work starts, not halfway in. At a two-family we time the shutoff so both households know when to expect it.',
      },
      {
        q: 'Why not run the charger circuit myself at a house in Norwood?',
        a: 'Because the job is more than wire. The circuit needs sizing to the charger, the panel needs its loads totalled, and there’s a permit and inspection at the end. A small error can cook wiring out of sight, so it belongs with a licensed electrician.',
      },
    ],
  },
};
