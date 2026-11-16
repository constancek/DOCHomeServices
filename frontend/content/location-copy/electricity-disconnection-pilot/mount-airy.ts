import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAiry: LocationServiceCopy = {
  localParagraph:
    'In Mount Airy, a door hanger saying the power stays off pending repairs is the utility asking for a licensed electrician’s fix on equipment the owner holds, usually followed by an inspector’s sign-off. Census figures put the median home at 1964, and around six in ten are rented, a good share in larger apartment buildings. Services from that era tend to fail at loosened lugs and tired meter jaws. You’ll have our diagnosis and a written price first.',
  emergencyParagraph:
    'With the service cut, the furnace, the fridge and the sump pump all stop, and the bill keeps growing. A meter box hanging by its conduit is something to walk around, not touch. A downed line comes first, with calls to 911 and Duke Energy Ohio. We usually get an electrician out the same day, weekend calls included.',
  commonIntro:
    'Between the mid-century houses and the bigger apartment buildings in Mount Airy, cut services tend to trace back to these:',
  localFaqs: [
    {
      q: 'Management left a notice on my apartment door in Mount Airy. Can I hire you?',
      a: 'Not directly. Residents of a managed building report it to the office, and the owner arranges and pays for the work. Photograph the notice, then send your report in writing. Ohio’s landlord statute, ORC 5321.04, puts upkeep of the wiring an owner supplies on that owner. We get the building back on, and rent questions stay with management.',
    },
    {
      q: 'What does the door hanger tell you about my house in Mount Airy?',
      a: 'Often the reason for the cut, whether a scorched socket, a damaged mast or an unsafe panel, so bring it out when we arrive. It points us at the right spot and saves diagnosis time. If nothing was left, we start where the line meets the house and work inward.',
    },
  ],
  overrides: {
    ctaLine: 'Cut services back on for houses and apartment buildings in Mount Airy',
    band1Heading: 'Common Causes of Electricity Disconnection in Mount Airy',
    commonSituations: [
      'Meter jaws in a 1960s socket that ran hot until the plastic browned',
      'A door hanger naming an unsafe panel in a rented ranch house',
      'Exposed conductors found during a turnover in an apartment building',
      'A mast pulled sideways when a limb from the wooded hillside came down',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Mount Airy',
        body: 'Here is the order things happen in. First we inspect the service end to end, from the weatherhead and mast down to the meter base, the panel and the ground rod, which shows whether this is a mast job, a new meter base or a new panel. The repair follows, and grounding and bonding get fixed to current code too, failing item or not. Electrical permits inside the city go to Inspection Bureau, Inc. (IBI), and we ask for their inspector when we set the repair date. Once the meter returns, breakers come on in turn and we write up anything you should watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Mount Airy',
        body: 'Tags tend to go up here over unsafe panels, missing grounding, bare conductors and, now and then, a job someone did without a permit. Any tag is an instruction to leave the service dead, and sweeping up the char beneath a burned socket changes nothing. Two things remove it, a licensed electrician’s correction and the inspector’s approval. The utility’s side ends with the overhead drop and the meter itself. The enclosure that meter plugs into, the mast and the panel fall on the owner, as does the repair bill. Should the meter be locked, walk away from it, since Ohio law treats tampering as a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Mount Airy',
        body: 'An apartment that stood empty between tenants, or a house that sat on the market for a while, gets extra scrutiny before anything is energised. Some need only a short look. Others reveal a panel that has to be replaced, and we tell you which after the inspection, not mid-job. Refitting what was there costs nearly the same in labour and permits as a new service sized for today’s loads, so we write up both.',
      },
    ],
    whyTitle: 'Why Residents and Landlords in Mount Airy Choose Us for Disconnection Repair',
    whyParagraph:
      'A dead service jumps up our list, because there’s no heat without it. Our licensed electricians make the fix the utility has called for, file the permit, walk the inspector through and settle your price before starting.',
    sharedFaqs: [
      {
        q: 'What should I budget to get a cut service back in Mount Airy?',
        a: 'It hinges on what broke. Swapping a meter base takes far less than rebuilding the whole service, so we look before quoting. The quote is one flat figure on paper, signed off before work, and whatever the utility bills stays off ours. Financing is there for qualifying homeowners.',
      },
      {
        q: 'When will the lights come back on in Mount Airy?',
        a: 'Most of our repairs wrap up in a single day. The inspector’s availability decides the rest of the wait, which is why the inspection gets requested along with the job rather than after it. That habit cuts more off an outage than anything else we do.',
      },
      {
        q: 'Is reconnecting the meter myself an option in Mount Airy?',
        a: 'No, it isn’t. The utility put the lock there, and Ohio counts tampering with metering equipment as a crime. The service was cut over a fault, too, so power forced back in lands on equipment already called unsafe. We fix it properly and line up the reconnect.',
      },
    ],
  },
};
