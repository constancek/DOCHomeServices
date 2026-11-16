import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'In Mason, plenty of reconnect calls trace back to a recent project, a finished basement, a sunroom, a hot tub circuit, that an inspector turned down or that never had a permit at all. Until our licensed electrician sorts out the owner’s wiring and the inspector approves it, the utility leaves the meter out. Census figures put the median house at 1996, and the city is mostly detached homes plus a good number of townhomes. We trace the fault, then hand you a written number.',
  emergencyParagraph:
    'Lose the service in Mason and the furnace or air conditioner stops along with the sump pump, and the damage compounds daily. Stay back from a meter box peeling off the siding. A downed wire is live; ring 911 and Duke Energy Ohio before anyone goes near it. We send an electrician that day on most calls, weekends too.',
  commonIntro:
    'Across the subdivisions and townhome rows of Mason, the meter usually comes out for one of these reasons:',
  localFaqs: [
    {
      q: 'Who approves repairs to a shared meter bank on a townhome in Mason?',
      a: 'A meter bank feeding several townhomes is usually common property, so the association, or every owner on it, may have to agree before work starts. We pin down which socket or connection failed, send the association a written figure, and once they say yes we carry the permit and inspection through.',
    },
    {
      q: 'Can a failed basement inspection really cut our power in Mason?',
      a: 'It can, if the inspector finds wiring too unsafe to leave live or the work was never permitted. We open the walls where needed, correct the circuits and the grounding behind them, and schedule the inspector alongside the fix. The meter goes back once that approval is on file.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection help for houses and townhomes in Mason',
    band1Heading: 'Common Causes of Electricity Disconnection in Mason',
    commonSituations: [
      'A basement finish or sunroom whose wiring an inspector turned down',
      'A mast folded back by a falling limb in a summer storm',
      'A townhome meter bank the utility refuses to re-energise',
      'A meter socket that has run warm since the 1990s and finally scorched',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Mason',
        body: 'With the meter already gone, we walk your service top to bottom, weatherhead, mast, entrance cable, socket and panel, then the ground and bond. On a 1990s or 2000s house in Mason, that walk usually lands on one culprit, a failed addition circuit or a bent mast, and the culprit decides the permit. We fix it and bring the grounding up to today’s rules, since the inspector checks there regardless. Permit and inspection get requested together with the repair. When the utility sets the meter, we switch breakers on singly, label the panel and leave you notes on anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Mason',
        body: 'In Mason, newer services pick up red tags mostly after a failed inspection, a half-done project with live conductors showing, or a remodel that disturbed the ground. The tag tells the utility to keep the power off, and a quick clean-up of what looks wrong won’t change its mind. It comes off when the cause is corrected by a licensed electrician and the inspector agrees. Stick the tag or hanger in a drawer for us, since its wording points at the fault. A pulled or sealed meter is not yours to touch. Ohio treats prying at it as a crime, and it would push power into equipment already refused.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Mason',
        body: 'Most houses in Mason are young, so a service that sat dead between owners often clears with a short inspection. The older houses near Main Street, some from before 1940, are a different job if the panel or ground is far behind today’s rules, and we say which after looking. When equipment must go, labour, permit and inspection run about the same for a like-for-like refit or a correctly sized new service, so you see both numbers.',
      },
    ],
    whyTitle: 'Why Homeowners in Mason Choose Us for Disconnection Repair',
    whyParagraph:
      'In Mason, a dead service takes the sump pump and the furnace with it, so we move quickly. Licensed electricians repair what the utility is waiting for, handle the permit and inspector, and price it first.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay for disconnection repair in Mason?',
        a: 'That rides on what broke. Straightening a mast on a 1990s house is a short day; rebuilding the whole service is a long one. After the diagnosis you get one fixed figure on paper before work, and the utility’s charges, if any, never land on our invoice. Financing is open to homeowners who qualify.',
      },
      {
        q: 'How long does a house in Mason stay dark after a disconnection?',
        a: 'The repair often wraps up in a single day. The inspection is what drags, since the inspector runs their own calendar, so we ask for that visit the moment the repair goes on our schedule. Doing it in that order trims more off the outage than any other step.',
      },
      {
        q: 'Can we switch the power back on ourselves in Mason?',
        a: 'No. The meter, and any seal on it, is the utility’s, and tampering with it is a criminal matter in Ohio. The fault that got the service cut is still there too, so forcing power back would feed equipment the crew judged unsafe. Repair and inspection go first.',
      },
    ],
  },
};
