import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newRichmond: LocationServiceCopy = {
  localParagraph:
    'If the utility has pulled your power in New Richmond, it returns only after an electrician holding a license fixes the gear on your side of the meter, and usually after an inspector has looked that fix over. The village is younger than its river history suggests. Census figures give 1986 as the median build year, a third of houses date from 2000 on, and our calls here lean toward storm-bent masts and newer work that flunked inspection. Expect a diagnosis and a written figure before any tool comes out.',
  emergencyParagraph:
    'More than half the houses in New Richmond heat with electricity, so a dead meter means a house cooling off fast, and a silent sump pump. Give any meter box sagging off its siding a wide berth. Wires lying on the ground call for 911 first, then the utility. Our electricians usually reach the village that same day, weekends too.',
  commonIntro:
    'Here’s what usually sits behind a dead service along the river and up the hill in New Richmond:',
  localFaqs: [
    {
      q: 'Can a panel that sat in floodwater in New Richmond be switched back on?',
      a: 'Not as it stands. Once river water has been inside a panel or meter socket, silt and corrosion settle into places nobody can clean, and energising it invites arcing. We open up the whole service, quote a replacement on paper and line up the county inspection alongside the job.',
    },
    {
      q: 'Which office signs off electrical work in New Richmond?',
      a: 'Clermont County Building Inspection handles permits for the village, electrical included. We put the application in for the mast, meter socket or panel, then ask the county for an inspection date the moment you approve the work, because Duke Energy Ohio holds the reconnect until that approval exists.',
    },
    {
      q: 'I rent in New Richmond and my power was cut, so what do I do?',
      a: 'Write your landlord a dated note, photograph any tag and keep both. ORC 5321.04 obliges Ohio landlords to keep the wiring and electrical equipment they provide safe and in repair, so the owner hires the electrician. We put the service right; anything about the lease stays between you two.',
    },
  ],
  overrides: {
    ctaLine: 'Getting power back to houses along the river and up the hill in New Richmond',
    band1Heading: 'Common Causes of Electricity Disconnection in New Richmond',
    commonSituations: [
      'A meter socket below Market Street that river water reached during a high crest',
      'A mast folded over by a falling limb on a house built after 2000',
      'A garage subpanel wired without a permit, caught once the service was looked at',
      'Scorched jaws inside the meter socket of a manufactured home',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in New Richmond',
        body: 'With the house already dark, we start where the drop lands and work downward through the weatherhead, mast pipe, entrance conductors, meter socket, panel, ground rod and bonding jumper. That survey sorts the job into a mast fix, a socket swap or a panel change, and the type sets which permit gets filed. Whatever failed is replaced, and grounding and bonding are corrected to present code, since the county inspector opens those up regardless. We request the inspection the day you approve the job. After the meter goes back, breakers come on singly, the directory gets rewritten and you receive a note listing anything worth monitoring.',
      },
      {
        title: 'Red Tags and Utility Disconnects in New Richmond',
        body: 'The utility owns the wires overhead and the meter itself. Everything else, including the metal box that meter plugs into, the mast, the weatherhead, the entrance conductors and the panel, belongs to the owner, which is news to most people we meet in the village. That ownership is why a red tag for a hazardous panel, absent grounding or exposed live parts lands on you. The tag forbids energising until a qualified fix is made and inspected; sweeping away the visible damage changes nothing. Save the hanger, since it often states the cause. A locked meter is off limits, and in Ohio meddling with it is criminal.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in New Richmond',
        body: 'A house that stood empty while an estate was sorted out, or a flat waiting for its next renter, gets a slower walk-through before anything is energised, particularly the older homes near Front Street. Some clear with a brief check; others need a new panel, and we say so once we’ve seen it. Rebuilding the old service and putting in a correctly sized new one involve identical labour, permit and inspection, so you see both prices.',
      },
    ],
    whyTitle: 'Why Residents in New Richmond Choose Us for Disconnection Repair',
    whyParagraph:
      'Losing power in a house heated by electricity is an emergency, and we handle it like one. Our licensed crew fixes the fault the utility cited, files with the county, meets the inspector and settles a price before starting.',
    sharedFaqs: [
      {
        q: 'How is the price set for disconnection repair in New Richmond?',
        a: 'By the failure itself. Swapping one burned meter socket and rebuilding an entire service sit far apart. We diagnose, then hand you a single flat number on paper before work begins, separate from whatever the utility bills you. Homeowners who qualify can finance the job.',
      },
      {
        q: 'How many days until the lights are back in New Richmond?',
        a: 'Our repair usually wraps up within a single day. What stretches things is the county inspector’s calendar, which we can’t control. We ask for that slot as soon as you say yes, and that habit trims more waiting than anything else in the process.',
      },
      {
        q: 'Is it legal to pull the meter lock off myself in New Richmond?',
        a: 'No. The lock and meter are utility property, and Ohio treats tampering with them as a crime. There’s a practical problem too, because the cut happened over a fault, and forcing power back would feed a service already found unsafe.',
      },
    ],
  },
};
