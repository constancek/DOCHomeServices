import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const alexandria: LocationServiceCopy = {
  localParagraph:
    'Alexandria is one of the younger places we work. Census figures date the median house to 1994, with over a third built after 2000, nearly all detached and owner-occupied. Panels that young usually have slots to spare. Electric heat, in roughly half of homes, is what eats the margin, since a heat pump on a frosty night plus a charger adds up. We size that up at the panel with a load calculation, own up when a Level 1 cord will do, and fix the price first.',
  emergencyParagraph:
    'Stop charging when the wall unit or connector feels hot, the cord has been flattened by a tire, or a burnt smell lingers. A breaker that won’t hold means leave it off. If it’s dry, flip that circuit off, and for smoke or flames, get out and phone 911. We come the same day on most calls, weekends included.',
  commonIntro:
    'Owners in this Campbell County city tend to call us about a charger for one of these reasons:',
  localFaqs: [
    {
      q: 'Can one panel handle two chargers at our house in Alexandria?',
      a: 'Often, in houses this new, though we prove it with numbers rather than guess. Two cars can share a single circuit through a charger that splits power between them, or each can have its own breaker. If the margin is thin, a load-management device usually beats a bigger service on price, and you see both figures.',
    },
    {
      q: 'Which utility do I deal with for a service upgrade in Alexandria?',
      a: 'That depends on your street. Duke Energy Kentucky serves much of Alexandria, and Owen Electric Cooperative holds territory in and around the city too. Most charger jobs never touch the service. When yours does, we confirm which utility feeds the house and line up the work with them.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charger installs for owner-occupied houses in Alexandria',
    band1Heading: 'When a Home in Alexandria Needs an EV Charger',
    commonSituations: [
      'A second EV on order and a single slow cord that two cars would have to take turns on',
      'A round trip into Cincinnati most weekdays that a 120-volt outlet can’t replace overnight',
      'A heat pump that already claims a hefty slice of the panel each winter',
      'Owners who would rather charge at night on cheaper power than stop at a public plug',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Alexandria',
        body: 'Because nine in ten households own the house they live in, a charger in Alexandria is usually a long-term fixture, and one that future buyers are starting to look for on a listing. On a Level 2 unit the battery fills dramatically faster than on a wall outlet, so a single evening adds a lot more driving and the car is free sooner. Nobody needs to find an open public plug or wait behind another driver. Home charging often undercuts public charging on cost, and many utilities discount power used late at night, so ask yours. Getting the breaker, wire and ground right keeps the circuit cool.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Alexandria',
        body: 'A low-mileage driver in Alexandria who parks beside a healthy outlet may never need us, and we’ll say that up front. The cord packed with most EVs plugs into ordinary 120-volt power and restores only a few miles of range for each hour, which suits a short trip to the store and back. Anyone heading toward Cincinnati most days, or juggling two EVs, generally wants Level 2 wired on a separate 240-volt line. Test two things yourself first. Make sure that outlet isn’t sharing a breaker, and never route the cord through an extension cord or a socket that’s loose or warm. Street parking rarely suits a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Alexandria',
        body: 'Even a house from the 2000s in Alexandria gets a load calculation, because electric heat counts against the panel. Room left over means a circuit just for the charger, typically on a 40 to 60 amp breaker depending on the unit. No room means two quotes, load management and a panel or service upgrade, for you to pick from. The city takes electrical permit applications, and we file yours and book the inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Alexandria Choose Us for EV Charger Installation',
    whyParagraph:
      'Licensed electricians add up your heat pump, appliances and charger against the panel before we price anything. If that points to an upgrade or load management, we say so, then wire it to code for the agreed figure.',
    sharedFaqs: [
      {
        q: 'What goes into the cost of a charger in Alexandria?',
        a: 'We quote a flat rate after seeing the panel, built from the charger you choose, the length of wire between that panel and your parking spot, and any panel work. In a newer house the panel side is often simple, so the wire run tends to decide it. You approve first, and financing is available.',
      },
      {
        q: 'How much time does a home charger install take in Alexandria?',
        a: 'Several hours for the usual job, start to finish, including testing the charger with your car. Should the panel need an upgrade, plan on longer. We hand you the timeline before any work begins, along with when the power will be down.',
      },
      {
        q: 'Why can’t I wire a Level 2 charger myself in Alexandria?',
        a: 'The wire and breaker must suit the charger, the panel needs a load calculation that counts your electric heat, and the city expects a permit followed by an inspection. That is licensed electrician territory. A shortcut tends to show up later as tripping breakers, a hot connection or a problem when you sell.',
      },
    ],
  },
};
