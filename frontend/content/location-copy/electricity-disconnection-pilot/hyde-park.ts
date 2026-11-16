import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'A burned meter socket is one of the likelier reasons for a cut in Hyde Park, and the meter stays out until a licensed electrician rebuilds the owner’s equipment and, nearly always, an inspector approves it. Census figures place about half the homes here before 1940. Those prewar houses tend to hide sockets that have cooked slowly for generations, original panels and grounding nobody has touched since it went in. Our electrician pins down the cause, and you okay a written number before work.',
  emergencyParagraph:
    'Lose the service and the furnace or air conditioner quits, the sump pump with it, and costs grow by the day. Keep clear of a meter box hanging loose. Ring 911 and Duke Energy Ohio about a wire lying down. Most calls in Hyde Park get an electrician the same day, weekends included.',
  commonIntro:
    'Most disconnections we see in Hyde Park, in old houses and apartment buildings alike, come down to one of these:',
  localFaqs: [
    {
      q: 'Can a condo building in Hyde Park with a shared meter bank be reconnected?',
      a: 'It can, after repair and inspection. Many condo buildings mount every owner’s meter in a row on one exterior wall, and altering that row or the facade may require the board to agree first. Owners bring it to the board or manager. With approval in hand we rebuild the scorched position or feeder and arrange inspection.',
    },
    {
      q: 'Who inspects the repair before power is restored in Hyde Park?',
      a: 'Because the neighborhood belongs to the City of Cincinnati, Inspection Bureau, Inc. (IBI) checks electrical permits and the finished work on the city’s behalf. We submit for whichever piece we are replacing and ask IBI to come out on the same call that books your repair, which trims the days spent dark.',
    },
    {
      q: 'What should I do if my rental in Hyde Park has a disconnection notice?',
      a: 'Send your landlord a dated note describing the notice and hold a copy. ORC 5321.04 places responsibility for provided wiring and fixtures on Ohio landlords, and they schedule us. In a managed building, take it to the office. We bring the service back; questions about rent or lease terms belong with the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for houses and apartments in Hyde Park after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Hyde Park',
    commonSituations: [
      'A prewar meter socket with scorch marks and plastic melted around the meter',
      'An original panel tagged once the crew spotted live parts showing',
      'A mast torn loose when a falling limb caught the service drop',
      'Half the rooms dead because the service dropped a leg inside an aging panel',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Hyde Park',
        body: 'In a dark house, what helps is an exact diagnosis, so we go over the service from the roof bracket and weatherhead to the ground rod, with the riser, conductors, socket and panel in between. The result says plainly what we are fixing and which permit covers it. Prewar houses here often fail more than one item at once, and quoting the whole picture beats a second outage. Bonding and grounding are corrected to present code as part of the work. Our inspection request goes in at booking. When the meter is set, breakers are closed one after another, and you keep a short written list of weak spots.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Hyde Park',
        body: 'On older houses here, crews usually tag a service over a failing panel, a ground that has corroded away, exposed live parts or heat damage at the socket. Treat that tag as a stop sign rather than a suggestion. Cleaning up what looks bad leaves it in force, and only a licensed correction plus an inspector’s approval removes it. Paper hung on your door by the crew usually states the fault, so put it somewhere safe for us. A pulled or locked meter stays untouched. Ohio law makes tampering with utility meters a crime, and on a tagged service it would also bring the original danger straight back.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Hyde Park',
        body: 'Inherited prewar houses, and ones that sat through a long sale, get extra time before they go live, because the panel may predate anything a modern inspector expects. Occasionally a brief inspection is all it needs; sometimes the old panel must come out. Our time and paperwork barely move between rebuilding the original setup and fitting a correctly sized new service, so you see both quotes together.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hyde Park Choose Us for Disconnection Repair',
    whyParagraph:
      'A dark house loses heat and its sump pump together, so a dead service jumps our queue. Licensed electricians complete the repair the utility asks for, look after permits, meet the inspector and settle the price on paper beforehand.',
    sharedFaqs: [
      {
        q: 'How much does disconnection repair cost in Hyde Park?',
        a: 'Expect the number to follow the damage. Rebuilding one scorched socket on a prewar house is a modest job; replacing a full service is a big one. Once we have traced it, you receive one flat figure on paper and sign before anything starts. Utility charges come separately from them. Qualifying homeowners can finance.',
      },
      {
        q: 'How long until the power comes back on in Hyde Park?',
        a: 'Our electricians usually finish within a single day. After that, the date depends on when the inspector can visit, which is out of our hands, so the request is lodged at the moment you book. With approval logged, the utility gets our paperwork and schedules the meter.',
      },
      {
        q: 'Can I turn the power back on myself in Hyde Park?',
        a: 'Please don’t. A meter that was pulled or locked is utility property, and Ohio makes tampering with it a crime. On top of that, the fault behind the cut is still live in your equipment, and restoring power early sends current right into it. Repair and inspection first, then reconnection.',
      },
    ],
  },
};
