import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const southFairmount: LocationServiceCopy = {
  localParagraph:
    'Duke Energy Ohio won’t restore a cut service in South Fairmount until a licensed electrician has fixed what the homeowner owns and an inspector, in most cases, has approved the job. On these streets the trouble is often a meter socket that has cooked itself. The typical house here dates from 1938 by Census figures, and nearly three in four from 1939 or earlier, so sockets have carried load for generations and the ground behind them seldom meets present rules. You okay a written price after diagnosis.',
  emergencyParagraph:
    'No current means the furnace or AC sits idle and nothing empties the sump pit, which makes each day dearer. Children and pets should stay back from a meter box sagging off the brick. Downed wires go to 911 and the utility before anyone else. On most calls we reach homes in South Fairmount that day, Saturday or Sunday included.',
  commonIntro:
    'Brick houses and two-families in South Fairmount tend to go dark for one of four reasons:',
  localFaqs: [
    {
      q: 'My landlord in South Fairmount got a disconnection notice. What should I do as a tenant?',
      a: 'Take it up with the landlord in writing, keep a copy, and photograph whatever notice is hanging on the meter. Ohio’s ORC 5321.04 makes the owner keep the electrical fixtures they supplied safe and in good repair, so the booking is theirs to make. We sort out wiring, not lease disputes.',
    },
    {
      q: 'Who signs off disconnection repairs in South Fairmount?',
      a: 'Like every Cincinnati neighborhood, this one has its electrical permits reviewed and inspected by Inspection Bureau, Inc. (IBI). The permit goes in from our office as soon as you approve the work, and we ask IBI for a date in the same breath so the inspector doesn’t turn into the hold-up.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection work for brick houses and two-families in South Fairmount',
    band1Heading: 'Common Causes of Electricity Disconnection in South Fairmount',
    commonSituations: [
      'A meter socket on a pre-war house with scorched jaws and plastic melted from years of heat',
      'A tag on a fuse-era panel feeding cloth-insulated wiring with nothing bonding it to earth',
      'One half of a two-family left unlit between tenants until its service had to be rechecked',
      'Basement wiring done years ago without a permit, discovered on a utility visit',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in South Fairmount',
        body: 'With the house dark, the first visit isn’t about getting a breaker to hold. It’s about tracing the route the electricity takes, from the service head and riser through the meter socket to the panel and the ground. The point where that route fails decides whether you’re looking at a socket, a riser or a whole panel, and which permit gets filed. Any ground that wouldn’t satisfy current code gets fixed in the same repair, because an inspector will look. We set the inspection date the day the job is booked. With the meter refitted, breakers come on singly, each gets labelled, and you get written notes on anything doubtful.',
      },
      {
        title: 'Red Tags and Utility Disconnects in South Fairmount',
        body: 'A tag on the meter here usually points to a failing panel, a missing ground or live parts left open, and it means one thing, that no one switches the service on. Hiding the visible problem gets you nowhere. Only a genuine correction by a licensed electrician, then an inspector’s approval, takes it off. Save the tag, plus any door hanger, for our electrician; the reason is usually printed right on it. If someone has pulled or padlocked the meter, leave it as found. Ohio law makes interfering with a utility meter a crime, and where the cut was for a fault, forcing it would drive current into condemned equipment.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in South Fairmount',
        body: 'An old house or two-family in South Fairmount that has stood unlit for a long spell needs more caution than one switched off last week, since equipment this age can trail current code badly. A quick look clears some. Other times the panel is finished, and you’ll know which once we’ve seen it. Labour, permit and inspection are one bill whether we restore the old setup or fit a right-sized modern service, so both prices are on paper.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in South Fairmount Choose Us for Disconnection Repair',
    whyParagraph:
      'In a house this old, a dead service can’t wait, and we don’t make it. Our licensed electricians carry out the repair the utility asked for, deal with the paperwork, show the inspector round and agree the written price first.',
    sharedFaqs: [
      {
        q: 'What will getting the power back cost at my house in South Fairmount?',
        a: 'Every job is priced from what we find. A burned socket on a 1930s house costs far less than rebuilding the service from the riser down. After diagnosis you approve one flat figure on paper, and anything the utility bills stays off it. Qualifying homeowners can spread the cost with financing.',
      },
      {
        q: 'How long will my house in South Fairmount be without power?',
        a: 'The electrical work is often wrapped up in a single day. What drags is waiting for the inspector, whose diary we don’t run, so we book that visit when we book the job rather than afterwards. That order of things shortens the dark stretch more than anything.',
      },
      {
        q: 'Can I turn the power back on myself after a disconnection?',
        a: 'No. The meter and any lock on it belong to the utility, and meddling with them breaks Ohio law. If the cut was for a fault, the current would also run straight into gear that has already failed. Power returns once the repair clears inspection.',
      },
    ],
  },
};
