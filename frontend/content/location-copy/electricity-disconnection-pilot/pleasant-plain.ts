import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantPlain: LocationServiceCopy = {
  localParagraph:
    'A cut service in Pleasant Plain stays dark until our licensed electrician has repaired whatever the owner answers for and, usually, an inspector has approved it; the utility reconnects after that. Census figures for this Harlan Township village date roughly three in four homes before 1940, almost every one a detached house. Original panels, grounding that predates today’s rules and meter sockets cooked by decades of load are all more likely in houses that old. Diagnosis comes first, and the price follows in writing.',
  emergencyParagraph:
    'Most homes in Pleasant Plain run on electric heat or fuel oil, and an oil burner won’t fire without power, so losing the service leaves the rooms cold, the air conditioning off and the sump pump idle. Avoid a loose meter box. Downed wires go to 911 before the utility. We get to most calls that same day, weekends too.',
  commonIntro:
    'Among the old detached houses of Pleasant Plain, a service usually gets cut for one of these reasons:',
  localFaqs: [
    {
      q: 'Who handles the permit for disconnection repair in Pleasant Plain?',
      a: 'We take care of it. The repair needs a permit and an inspection, and the utility looks for that approval before it will reconnect. Our office files the paperwork and requests the inspection as soon as you say yes, then our electrician meets the inspector at the house, so nobody has to chase offices from a house with no power.',
    },
    {
      q: 'Who sorts out the repair when power is cut at a rental in Pleasant Plain?',
      a: 'The landlord does. A tenant’s side is a dated note to the owner, a copy kept, and a phone picture of any tag. Ohio law, ORC 5321.04, makes the landlord answer for supplied electrical fixtures and systems being in good and safe working order. We handle the service; anything about the tenancy is yours and the owner’s.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnecting older village houses in Pleasant Plain after a utility cut',
    band1Heading: 'Common Causes of Electricity Disconnection in Pleasant Plain',
    commonSituations: [
      'A first-generation panel in a pre-1940 house that the utility judged unsafe',
      'A socket cooked by decades of load until the plastic charred',
      'Storm damage that wrenched the weatherhead and mast off an old house',
      'A family house left vacant so long the service must be checked before power returns',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Pleasant Plain',
        body: 'Nothing in the house is running, which gives us a clear run at the diagnosis, starting at the weatherhead and finishing at the ground rod. From that we know which piece has to go, mast, meter base or panel, and the scope of the permit. Our inspection request goes in with the booking, not at the end. Whatever failed is replaced, and grounding and bonding come into line with today’s code, because the inspector checks both. Once it passes and the utility reconnects, breakers come on in sequence, and any concern, wiring old enough to need a rewire for instance, is written up for you.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Pleasant Plain',
        body: 'In Pleasant Plain, the tags we see on old houses usually cite an unsafe panel, absent grounding or bare conductors. The utility issues one on purpose, and tidying up the obvious damage leaves it in force. Removal follows our licensed electrician fixing the root fault and an inspector approving that fix. Save whatever hung on the door, as it usually explains the cut. Pulled and locked meters are strictly off limits; Ohio law calls interfering with them criminal tampering, and on a faulted service it brings the danger right back.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Pleasant Plain',
        body: 'An empty old house in Pleasant Plain gets a cautious restart, because a panel or ground from generations back may be far outside today’s code. Sometimes a brief inspection is enough, sometimes the panel must be replaced, and you’ll know which after our first look. On a house still on its original equipment, putting the same back means paying labour, permit and inspection again before long, so we price a rebuild against a right-sized upgrade.',
      },
    ],
    whyTitle: 'Why Homeowners in Pleasant Plain Choose Us for Disconnection Repair',
    whyParagraph:
      'Without its service, a village house loses heat and its sump pump, so we answer as we would any emergency. Licensed electricians put right whatever the utility found, take on the permit and inspector, and price the job first.',
    sharedFaqs: [
      {
        q: 'How much will disconnection repair cost in Pleasant Plain?',
        a: 'The failure sets the price. A scorched meter socket is one kind of job and a full new service on an old house is quite another, so we diagnose first and then put a flat figure in writing for you to approve. Utility charges stay separate, and qualifying homeowners can finance it.',
      },
      {
        q: 'How long until the power comes back in Pleasant Plain?',
        a: 'The repair is frequently a single day. The inspection is where the time goes, because it follows the inspector’s schedule, and that’s why we book it with the repair instead of waiting until we’re done. Nothing else we do shortens the outage as much.',
      },
      {
        q: 'Is it legal to turn the power back on myself in Pleasant Plain?',
        a: 'No. You own the panel, the meter box and the mast, but the utility alone disconnects and reconnects, and only it removes a meter lock. In Ohio, tampering with metering equipment is a crime, and switching a faulted service back on would put power into equipment already judged unsafe.',
      },
    ],
  },
};
