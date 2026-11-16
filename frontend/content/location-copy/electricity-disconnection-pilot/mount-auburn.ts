import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAuburn: LocationServiceCopy = {
  localParagraph:
    'Power on a red-tagged service in Mount Auburn stays off until a licensed electrician has corrected the hazard and the inspector has come back to approve it. Census figures show more than half the homes on this hill were built by 1939, and two of three are rented, many of them Italianate or Second Empire houses carved into flats. Services of that vintage can still carry a first-generation panel, untouched grounding and a meter socket browned by heat. The diagnosis and a written price come first.',
  emergencyParagraph:
    'With the power cut, an old brick house loses its heat, its cooling and its sump pump together, and the damage adds up daily. Stand well back from a meter box sagging off the wall. Wire lying on the ground means ringing 911 and Duke Energy Ohio first. An electrician usually reaches these calls the same day, weekends too.',
  commonIntro:
    'The cuts we see on this hill, in old houses turned into flats and in newer apartment blocks, mostly come from these:',
  localFaqs: [
    {
      q: 'Does moving a meter on a historic house in Mount Auburn need city approval?',
      a: 'Possibly. Inside the Prospect Hill local district, exterior alterations go before the Historic Conservation Board, and a meter or mast shifted on a street-facing wall could need a certificate of appropriateness. We raise it with the city before drawing up the job. Inspection Bureau, Inc. (IBI) handles the electrical permit and its inspection.',
    },
    {
      q: 'My flat in Mount Auburn has no power after a notice went up. What should I do?',
      a: 'Write to the landlord, name the notice and keep a copy. Under ORC 5321.04 the owner of an Ohio rental has to keep the wiring and service they furnish safe and in working order, so booking the electrician is their job. Then we take over the repair, and rent or lease disputes stay between you and the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnected services repaired for old houses and flats in Mount Auburn',
    band1Heading: 'Common Causes of Electricity Disconnection in Mount Auburn',
    commonSituations: [
      'A red tag on the original panel of a house divided into three flats',
      'A meter bank where one socket has charred and taken the building off',
      'Rehab wiring in a Victorian that was finished without a permit',
      'A house left dark through a long renovation that now needs its service checked',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Mount Auburn',
        body: 'In a house divided into flats, a cut often darkens every unit, so the whole service gets checked before we choose a fix. We test from the weatherhead and mast through the entrance cable, the meter sockets, each panel and the grounding, which tells us whether the job is a mast, a meter bank or a panel, and how far the permit reaches. The repair includes bringing grounding and bonding to current code, since inspectors look at them on any service job. We book the inspection alongside the work. When the meter is reset, power returns one flat at a time, and anything worth watching goes in writing.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Mount Auburn',
        body: 'Red tags here usually follow an unsafe panel, missing grounding, exposed conductors or a socket that burned, often found during other work on an old house. The tag is a formal instruction, and patching the worst of it doesn’t lift it. Correction by a licensed electrician and approval by an inspector do. The utility owns the drop and the meter, but the meter box is the owner’s, which catches nearly everybody out. Keep any tag or note, because it usually names the reason. A meter that has been locked stays as found, since Ohio law makes tampering a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Mount Auburn',
        body: 'Rehabs on this hill can drag on, and a house that stood dark through one, or through a slow sale, gets extra care before we energise, because its panel and grounding may trail code badly. Sometimes a brief check clears it. Sometimes the panel must go, which you hear after we look. Old gear put back carries the same labour and inspection as a new service sized for the house, so the owner sees two figures.',
      },
    ],
    whyTitle: 'Why Building Owners and Residents in Mount Auburn Choose Us for Disconnection Repair',
    whyParagraph:
      'Old buildings sitting dark get our licensed electricians fast. They do whichever repair the utility demands, handle the permit, show the inspector around and agree one flat figure with the owner up front.',
    sharedFaqs: [
      {
        q: 'What will it cost to restore a disconnected service in Mount Auburn?',
        a: 'A three-flat with a meter bank costs differently from a house with one panel, and either way the figure depends on what failed. The owner gets a flat written rate after we diagnose and before any work, and utility charges are never folded into ours. Financing is open to qualifying homeowners.',
      },
      {
        q: 'How long before power returns to my building in Mount Auburn?',
        a: 'Our work is often finished in a single day. What drags is the inspection, which keeps the inspector’s own calendar, so it gets requested at booking. Old buildings sometimes reveal more to correct, which can stretch things, and you hear about that before we begin.',
      },
      {
        q: 'Can a tenant or owner switch the meter back on in Mount Auburn?',
        a: 'Neither should touch it. The lock is utility property, and Ohio treats tampering with metering as a criminal matter. That service went dead over a fault, so throwing power back at it by hand feeds the same unsafe equipment. Our job is repairing the fault and coordinating the reconnect.',
      },
    ],
  },
};
