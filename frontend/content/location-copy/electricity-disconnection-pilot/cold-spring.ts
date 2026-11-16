import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const coldSpring: LocationServiceCopy = {
  localParagraph:
    'Duke Energy Kentucky won’t restore a house it has cut off in Cold Spring until a licensed electrician fixes whatever on the owner’s side caused it and, most of the time, an inspector approves the fix. Homes here are young, the typical one dating from 1999 by Census figures, so a panel worn out by age is unusual. More of our calls start with a fallen limb or a bumper meeting the meter, or a basement finish that flunked inspection. The diagnosis comes first, the written price second.',
  emergencyParagraph:
    'When a house in Cold Spring is cut off, its furnace or air conditioner stops, and so does the pump keeping a finished basement dry. A meter box ripped off the siding is a hazard, so give it room. With a wire down, ring 911, then the utility. We reach most of these calls the same day, weekends too.',
  commonIntro:
    'In a newer town like Cold Spring, these four account for most of the dead services we see.',
  localFaqs: [
    {
      q: 'Who approves repairs to a shared meter bank on a townhouse in Cold Spring?',
      a: 'Close to a quarter of homes in Cold Spring are attached, and many share a meter bank on an outside wall. Work on that bank or the building’s exterior may need the association’s approval, so we talk to the board or manager early and price the repair for every unit it affects.',
    },
    {
      q: 'Can a failed inspection get the power cut at a newer house in Cold Spring?',
      a: 'Yes. When recent work never got a permit, or failed the inspection it did get, the utility can refuse to keep the service on until it is corrected. We find what the inspector objected to, fix it, file the permit and book the inspection so the utility will reconnect.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection repairs for newer homes and townhouses in Cold Spring',
    band1Heading: 'Common Causes of Electricity Disconnection in Cold Spring',
    commonSituations: [
      'A storm limb pulling the service drop and bending the mast',
      'A meter box knocked loose when a vehicle backed into it',
      'A basement finish or addition wired without a permit and caught later',
      'A townhouse meter bank with one socket that has run hot',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Cold Spring',
        body: 'In Cold Spring, the clock starts with our diagnosis. The electrician checks from the mast head to the grounding electrode, taking in the meter base and panel along the way, and the result says whether this is mast, socket or panel work and which permit fits. Even on a young house, grounding and bonding are corrected to current code during the repair, because the inspector reviews them. The permit and inspection request are lodged at booking. Once the utility resets the meter, circuits return one by one, the panel picks up labels and you receive a short written list of anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Cold Spring',
        body: 'On a newer house in Cold Spring, a tag usually follows damage, such as a socket cracked by an impact, conductors left bare after a storm, or a panel or grounding fault the utility refuses to power. Read the tag as an order. No amount of tidying lifts it, but a licensed electrician’s correction followed by an inspector’s approval does. Keep what was hung on the door, as it usually spells out why. Line and meter belong to the utility, while box, mast and panel belong to the homeowner. Leave a locked meter locked, because Kentucky treats tampering with one as a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Cold Spring',
        body: 'Most homes in Cold Spring are owner-occupied, but one that sat empty through a sale still gets a careful check before it is energised. Often a short inspection is enough; now and then it becomes a panel replacement, and we say which after looking. Renters report a dead service to the landlord. Rebuilding the old setup and fitting a properly sized new one cost similar labour and permits, so we quote both.',
      },
    ],
    whyTitle: 'Why Homeowners in Cold Spring Choose Us for Disconnection Repair',
    whyParagraph:
      'Without its service a house loses heat and the basement pump, so these calls never sit in a queue. Licensed electricians repair what the utility requires, file the permit, meet the inspector and price it first.',
    sharedFaqs: [
      {
        q: 'What will disconnection repair cost in Cold Spring?',
        a: 'What failed decides it. Straightening a storm-bent mast is a lighter day than replacing a meter base and the panel behind it. Following the diagnosis you approve a fixed written figure before work begins, with the utility’s charges, if any, kept off our bill. Homeowners who qualify can finance.',
      },
      {
        q: 'How long is the power off in Cold Spring for these repairs?',
        a: 'Our side usually wraps up within a single day, and from there the inspector’s schedule sets the pace instead of ours. Lodging the permit and asking for the inspection at booking is the surest way to cut the outage short.',
      },
      {
        q: 'Can I turn my own power back on in Cold Spring?',
        a: 'No. Kentucky makes it a crime to break the utility’s meter lock, and the shutoff was made because the service is unsafe. Power restored without a repair runs straight into that fault. When the work passes inspection, the utility reconnects the house.',
      },
    ],
  },
};
