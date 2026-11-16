import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'In Mount Lookout, some of the worst July 2026 flash flooding left basement panels standing in water, and one of those stays off until a licensed electrician swaps the soaked parts and an inspector passes them. Census figures date the median house here to 1938, and roughly three in four homes are lived in by their owners, mostly detached, with the panel kept downstairs. Grounding in houses of that age seldom meets present code either. You get a written price once we’ve inspected.',
  emergencyParagraph:
    'Without the service, the furnace, any air conditioning and the sump pump all fall silent, and every dark day costs more. A meter box torn off the house is one to keep back from. A downed wire is a 911 call first, then Duke Energy Ohio. Most disconnection calls get our electricians out the same day, weekends too.',
  commonIntro:
    'In the older detached houses that fill Mount Lookout, a cut service usually comes down to one of these:',
  localFaqs: [
    {
      q: 'Can a panel that flooded in my basement in Mount Lookout be turned back on?',
      a: 'Not as it stands. Breakers and connections that sat in water can fail later even once they look dry, so the wet parts are replaced and the grounding checked before anything is energised. Electrical permits in the city go through Inspection Bureau, Inc. (IBI) for review and inspection.',
    },
    {
      q: 'Is it safe to run a generator while my house in Mount Lookout is disconnected?',
      a: 'Yes, as long as it runs outside, well clear of doors and windows, with your appliances corded straight into it. Hooking it to an outlet or the panel without a transfer switch backfeeds the line, which can hurt a lineworker or a neighbour. Treat it as a stopgap while we repair the service.',
    },
  ],
  overrides: {
    ctaLine: 'Flooded panels and cut services repaired for houses in Mount Lookout',
    band1Heading: 'Common Causes of Electricity Disconnection in Mount Lookout',
    commonSituations: [
      'A basement panel that took on water and can’t be re-energised',
      'A meter socket on a 1930s house browned by decades of heat',
      'A red tag for grounding that never met modern code',
      'A limb from a backyard tree that yanked the mast sideways',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Mount Lookout',
        body: 'Basement panels are the rule in this neighbourhood, so we read the service from outside inward. Up top come the weatherhead, the mast and the cable dropping to the meter, then the meter base, then downstairs to the panel, the ground and any damp corner. Those findings tell us which repair this is and how wide the permit has to be. Anything failed or wet gets replaced, and bonding and grounding are brought into line with today’s code. We ask for the inspection the moment you say go. After the meter is back, breakers go on one at a time so a weak circuit gives itself away.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Mount Lookout',
        body: 'Water inside a panel gets a service tagged as surely as cooked socket jaws or bare conductors. That tag is a standing order to keep the power off, and a mopped floor doesn’t cancel it. Correction by a licensed electrician, then an inspector’s approval, is what does. Ownership catches people out. The utility’s property is the overhead line and the meter, while the enclosure the meter sits in, the mast and the panel are the homeowner’s, so water or storm damage there is an insurance claim, not a utility problem. Hang on to any tag. Never break a meter lock, since Ohio law forbids tampering.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Mount Lookout',
        body: 'When a house here has stood empty for a while, say through a slow sale or a gut renovation, we test it carefully before energising, because a 1930s service may still be the original. A brief inspection clears a few. Others need the panel replaced, which we confirm once we’ve looked. Rebuilding old gear costs nearly the same in labour and paperwork as fitting a modern service sized to the house, so you’ll get a figure for each.',
      },
    ],
    whyTitle: 'Why Homeowners in Mount Lookout Choose Us for Disconnection Repair',
    whyParagraph:
      'Whether a basement panel failed or a service got tagged, our licensed electricians respond as to any emergency. They make the repair the utility needs, pull the permit, see the inspector through and agree your price first.',
    sharedFaqs: [
      {
        q: 'How much does reconnection work cost in Mount Lookout?',
        a: 'That depends on what failed. A meter base repair is a modest day, and a water-damaged panel plus service is a much bigger one. Once we’ve diagnosed it, one flat written price comes to you before work, and the utility’s own charges never get mixed into it. Qualifying homeowners can finance.',
      },
      {
        q: 'How long until the power is back in Mount Lookout?',
        a: 'The repair is often done within a day. The inspection usually sets the wait, because it runs on the inspector’s calendar, so the request goes in as the job is booked. If the inspector asks for more, you hear it from us that day.',
      },
      {
        q: 'Can I turn the meter back on myself in Mount Lookout?',
        a: 'No. Removing the utility’s lock is against the law in Ohio, and the power was cut because something, possibly water, made the service unsafe. Forcing it back on risks a fire or a shock. We repair the damage and handle the reconnect with the utility.',
      },
    ],
  },
};
