import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const daytonKy: LocationServiceCopy = {
  localParagraph:
    'Old and new sit side by side in Dayton. Close to half of homes were standing by 1939, per Census figures, and one of those may still be feeding off a modest original service with scant room for a 240-volt line. Nearly one in five arrived after 2000 and generally has space, or can lean on load management. Two in five households rent. We look inside the panel, work the load calculation, tell you if the Level 1 cord is enough, and agree on a price before pulling wire.',
  emergencyParagraph:
    'A charger or outlet that’s scorched, melting or too warm to touch, a burning smell, or a Level 1 cord fed by an extension cord means you stop charging now. Switch off the breaker feeding it if the panel is dry and safe to reach. For smoke or flames, call 911 from outside. Same-day help is the norm, weekends included.',
  commonIntro:
    'Houses from before 1940 and after 2000 bring different charger calls, and these are the usual ones in Dayton:',
  localFaqs: [
    {
      q: 'Can a charger go on the outside of a house in Dayton’s Sixth Avenue historic district?',
      a: 'Possibly, but not without a check. Dayton’s local historic district along Sixth Avenue sends exterior alterations to the Board of Architectural Review for a Certificate of Appropriateness, and an exterior wall charger may qualify as one. We ask the city before mounting anything outside there. Inside work is exempt.',
    },
    {
      q: 'I rent in Dayton. Who arranges a charger installation?',
      a: 'Your landlord does, after giving you written approval. The landlord or property manager calls us, and in an apartment building any charger in a shared lot is the owner’s decision. We price the job for them after checking the panel. We install chargers, not lease terms.',
    },
  ],
  overrides: {
    ctaLine: 'Charger installs for prewar and post-2000 houses in Dayton',
    band1Heading: 'When a Home in Dayton Needs an EV Charger',
    commonSituations: [
      'A 1920s house getting its first EV while still on its original service',
      'A house built after 2000 with spare breaker slots and two cars to keep charged',
      'A landlord agreeing to a tenant’s request and calling us to wire it',
      'A dryer and a Level 1 cord tripping the same old breaker',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Dayton',
        body: 'Dayton sits across the Ohio River from Cincinnati, and a Level 2 charger at home means starting each morning with a full battery, no hunting for a public station, no waiting for a turn. It refills far faster than a household receptacle, and you control the timing. Electricity at home tends to cost less than public charging, and many utilities discount power after dark, so ask yours. On an older service, right-sized breakers, conductors and grounding keep things cool through a long session. If you sell later, buyers increasingly expect a charger on the wall.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Dayton',
        body: 'Level 1 means the cord in the cargo bin and any healthy 120-volt receptacle. It’s slow, a few miles of range an hour, but someone making short hops around Dayton who parks beside a working outlet can live with it, and we won’t argue. Confirm first that the receptacle isn’t sharing a circuit with other rooms, and keep extension cords and loose or warm outlets out of it. Commuters and two-EV households typically need Level 2 on a separate 240-volt line. Curbside parking usually makes a home charger impractical, and we’ll tell you straight.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Dayton',
        body: 'Every house in Dayton, old or new, gets the same test, a load calculation, and the result decides. Enough capacity means a dedicated circuit for the charger. Not enough means a load-management device and a panel or service upgrade, each priced, and you choose. We pull the permit and arrange inspection, and on Sixth Avenue an outside-wall charger waits until we’ve checked with the city.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Dayton Choose Us for EV Charger Installation',
    whyParagraph:
      'Our licensed electricians size up the panel and work out the numbers ahead of any quote, say without spin whether an upgrade or a load manager is called for, and wire the charger to code at the approved price.',
    sharedFaqs: [
      {
        q: 'What does a home charger installation cost in Dayton?',
        a: 'We set one flat rate after seeing the panel. The figure depends on the charger, the distance the cable has to run between panel and parking spot, and whether an older service needs work first. Financing is offered, and nothing happens until you say yes.',
      },
      {
        q: 'How long does it take to install a charger in Dayton?',
        a: 'Several hours covers most jobs. A prewar house that needs a panel or service upgrade first takes longer. We share the timeline up front, including when the power goes off, so the day can be planned around it.',
      },
      {
        q: 'Is it a bad idea to wire my own charger in Dayton?',
        a: 'Yes. A charger circuit must be sized to the unit, tested against the rest of the house through a load calculation, then permitted and inspected. In a house from before 1940, a mistake on an old service leaves little margin. Call a licensed electrician.',
      },
    ],
  },
};
