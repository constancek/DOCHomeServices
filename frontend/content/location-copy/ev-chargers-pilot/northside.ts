import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'In Northside, the panel answers the charger question before the car does. More than half the homes were standing by 1939, Census figures show, and a house from that era may run on a modest service with little headroom for a 240-volt line. Roughly half are detached houses, the straightforward jobs when the car sleeps beside the house. Our first visit is a look inside that panel and a load calculation. If the dealer cord is enough, you’ll hear it, and the price is settled before we drill anything.',
  emergencyParagraph:
    'Heat is the warning sign. A plug too warm to hold, a browning outlet or a hot-plastic smell mid-charge ends the session. Flip that breaker only if you can reach it dry-handed and clear of anything hot. Smoke or flame means everyone outside and a call to 911. Most calls get us out the same day, weekends included.',
  commonIntro:
    'Four situations tend to put a charger on the list for a house in Northside.',
  localFaqs: [
    {
      q: 'Will a pre-war house in Northside have panel space for Level 2?',
      a: 'Plenty do and plenty don’t, which is why age tells us little on its own. One house off Hamilton Avenue may have had its service replaced long ago while the one beside it never did. We open the panel, add up the loads and tell you whether a new circuit fits.',
    },
    {
      q: 'As a renter in Northside, how would I go about getting a charger?',
      a: 'Get the owner’s yes on paper first. After that the landlord or the property manager calls us, since the building and its panel are theirs, and we quote them directly. Who pays, and who keeps the unit at move-out, is for your lease to settle. Our part is the wiring.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 home charging, sized to the panel, for houses in Northside',
    band1Heading: 'When a Home in Northside Needs an EV Charger',
    commonSituations: [
      'An EV due soon and nothing at the house but an ordinary wall outlet',
      'A cross-town commute the dealer cord can’t make up for overnight',
      'Plans to charge after midnight, when power is often priced lower',
      'A pre-war panel where every slot already holds a breaker',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Northside',
        body: 'Level 2 changes the routine. The car fills far quicker than it does on a wall outlet, so each night on the charger buys more driving and the car spends fewer hours tethered. Come home to Northside, plug in, and the battery is topped up by breakfast without an evening run to a public station or a wait while a stranger finishes. Paying for power at home usually beats public pricing, and off-peak rates are common enough among utilities that yours is worth a call. Breaker, wire and grounding sized by an electrician mean nothing in the wall runs hot. Buyers are starting to ask about chargers, too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Northside',
        body: 'Not every driver in Northside needs us. If your car covers a short hop most days and parks by an outlet that works properly, the cord packed with it can keep up, slow as it is on 120 volts, adding a handful of miles each hour. Commuters and two-EV households are a different story and usually end up on Level 2 with a 240-volt circuit of its own. It’s worth checking that nothing else shares the cord’s outlet, and that the cord never runs through an extension or into an outlet that’s loose, old or warm. Street parking usually means a home charger won’t work, and we’ll say so.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Northside',
        body: 'A 1920s house in Northside can pass and a 1960s one can fail, so the load calculation is what we trust. Your furnace, cooling, dryer and range all go into the sum with the charger. Spare capacity earns a dedicated circuit. A shortfall gets two quotes, one for a load-management device and one for a panel or service upgrade, and the pick is yours. Inspection Bureau, Inc. (IBI) handles electrical permit review and inspection here, and we file it.',
      },
    ],
    whyTitle: 'Why Homeowners in Northside Choose Us for EV Charger Installation',
    whyParagraph:
      'Nobody quotes before the panel cover comes off and the loads are added up. A licensed electrician tells you whether it’s an upgrade or load management, wires the charger to code and holds the agreed number.',
    sharedFaqs: [
      {
        q: 'What sets the price of a charger install at a house in Northside?',
        a: 'It moves with the charger you pick, the distance from the panel to where the car sits, and whatever the panel itself needs. Once we’ve looked, you get a single flat rate to approve, and financing can spread it out if that helps.',
      },
      {
        q: 'Can an EV charger install in Northside be done in one day?',
        a: 'Usually, yes. Most take several hours, and a panel upgrade stretches that. You’ll know the plan, including when the power drops, before anyone picks up a tool. If the inspection needs its own visit, we set that up as well.',
      },
      {
        q: 'What makes a Level 2 charger more than a weekend project in Northside?',
        a: 'The sizing is the hard part. The wire and breaker have to suit the charger, and the panel’s total load has to be worked out first. Then the permit and the inspection follow. An undersized run heats up inside a wall where you can’t see it, so a licensed electrician should handle it.',
      },
    ],
  },
};
