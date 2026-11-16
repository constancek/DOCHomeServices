import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountWashington: LocationServiceCopy = {
  localParagraph:
    'A locked meter in Mount Washington stays locked until a licensed electrician repairs the homeowner’s equipment and, nearly always, an inspector approves. Only about one house in nine here predates 1940, per Census figures, and roughly four in ten homes are rented. On a service from the 1950s or 1960s, the culprit is usually a tired panel, an overheated socket or a mast levered over by a limb. The inspection is often the longest stretch, so we book it early and quote in writing first.',
  emergencyParagraph:
    'A dead service shuts down heat, cooling and the basement pump. Stay back from a meter box that has come loose from the wall. After the 2018 Beechmont Hill slide, Duke crews had to replace a pole, so treat any fallen wire as energised and phone 911 and Duke Energy Ohio. We reach most calls that day, weekends included.',
  commonIntro:
    'From Beechmont Avenue to Corbly Road, the post-war houses and apartment buildings of Mount Washington usually lose service for one of these reasons:',
  localFaqs: [
    {
      q: 'Why is the inspection the longest part of getting power back in Mount Washington?',
      a: 'Because the inspector keeps a calendar we don’t control. Electrical permit review and inspection inside city limits belong to Inspection Bureau, Inc. (IBI), and the utility won’t reconnect without their approval. So we file and ask for that visit the same day you book the repair, which saves more waiting than any other step.',
    },
    {
      q: 'What should a tenant in Mount Washington do when the power is cut?',
      a: 'Send the landlord a dated note and a photo of whatever the utility left on the door, and save any reply. Ohio’s landlord law, ORC 5321.04, puts wiring the landlord supplied on the owner, which means the owner hires and pays for this repair. We get the lights back on, and anything about the lease stays between you.',
    },
  ],
  overrides: {
    ctaLine: 'Locked meters and tagged services sorted for houses in Mount Washington',
    band1Heading: 'Common Causes of Electricity Disconnection in Mount Washington',
    commonSituations: [
      'A 1950s panel tagged unsafe during a sale, with the meter locked behind it',
      'A mast levered over by a limb that slid down a wooded slope',
      'A meter socket on a post-war ranch that cooked and scorched its cover',
      'Wiring in a finished basement that never passed inspection',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Mount Washington',
        body: 'If the meter is locked and the house is going cold, a full look beats a quick patch. Everything from the roof bracket to the ground rod gets checked, and the fault we find settles which repair you need and how far the permit runs. That repair takes in grounding and bonding brought to current code, because the inspector checks both on any service job. The inspection request goes in with the booking, since it’s usually the long wait. Once the utility pulls its lock and sets the meter, circuits are powered one at a time and you get written notes on anything worth watching, an overloaded subpanel for example.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Mount Washington',
        body: 'Tags around here tend to follow a worn-out panel, grounding that was never there, exposed conductors or a scorched socket, and now and then unpermitted work that surfaced during a sale. Read the tag as an order to keep the service off. Only a licensed electrician’s correction and an inspector’s approval cancel it, and tidying up the worst damage doesn’t. The line and the meter are the utility’s. The meter box, mast and panel are the homeowner’s, and so is the repair. Keep whatever tag or hanger was left, since the reason is usually written there. The utility removes its own lock, and Ohio law makes tampering an offence.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Mount Washington',
        body: 'A unit between tenants or a house that sat unsold for a while gets tested before we energise it, particularly where the panel is original. Some clear after a short inspection. Others need a new panel, which you hear about once we’ve looked. With labour, permit and inspection about equal either way, a straight refit and a correctly sized new service are priced side by side.',
      },
    ],
    whyTitle: 'Why Residents and Property Owners in Mount Washington Choose Us for Disconnection Repair',
    whyParagraph:
      'Our licensed electricians drop other work for a house with no power. They make the repair the utility is holding the meter for, file the permit, meet the inspector at the door and give you a flat price up front.',
    sharedFaqs: [
      {
        q: 'What does it cost to get a locked meter reconnected in Mount Washington?',
        a: 'The cost follows whatever failed. Replacing one meter socket and installing an entire new service sit far apart. We diagnose first, then hand over a flat written rate before work starts, and the utility’s own fees stay theirs, never folded into our total. Financing is open to qualifying homeowners.',
      },
      {
        q: 'How long will the house in Mount Washington be without power?',
        a: 'Our repair is often finished within a day. The rest hangs on when the inspector can come, which is why that request goes in as soon as you book. Of everything we do, that one step shortens an outage most.',
      },
      {
        q: 'Can I take the lock off the meter myself in Mount Washington?',
        a: 'No. That lock belongs to the utility, and Ohio law makes tampering with metering equipment illegal. The service was cut because something on it was unsafe, so taking the lock off energises the very fault the utility found. We fix it and arrange the reconnect.',
      },
    ],
  },
};
