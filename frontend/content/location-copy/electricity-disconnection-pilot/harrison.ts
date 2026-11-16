import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const harrison: LocationServiceCopy = {
  localParagraph:
    'After the Whitewater River flooded in August 2026, some houses in Harrison were left with panels that had been under water, and those stay dead until a licensed electrician replaces what the water reached and an inspector signs it off. The housing here is young, and by Census figures half the homes went up in 1992 or later, so on most streets a cut service follows storm or impact damage, or recent work that failed inspection. The price is set in writing after we find the fault.',
  emergencyParagraph:
    'Floodwater or not, a house with its meter pulled loses the heat pump or furnace, the cooling and the sump pump, which turns expensive quickly. Don’t let anyone near a meter box wrenched off its wall. A downed line is for 911 and Duke Energy Ohio before anything else. We reach most of these the same day, weekends too.',
  commonIntro:
    'In the subdivisions, apartment buildings and older streets of Harrison, these are the causes we run into most:',
  localFaqs: [
    {
      q: 'My panel was in the flood in Harrison. Can it be turned back on?',
      a: 'Not as it is, even if it looks dry now. Water works into breakers and bus bars in ways nobody can see from outside. We replace the panel and anything else the flood reached, file with Inspection Bureau, Inc. (IBI), get the inspection booked and arrange the reconnect.',
    },
    {
      q: 'If my apartment in Harrison has no power, who arranges the repair?',
      a: 'Your landlord or the management company handles it, so put the problem to them in writing. Under ORC 5321.04, an Ohio landlord has to keep the wiring they provide safe and usable. We restore power, not leases. If the failed part sits on a shared meter bank, the condo or apartment association may need to approve the work.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored after flood, storm or tag disconnections for homes in Harrison',
    band1Heading: 'Common Causes of Electricity Disconnection in Harrison',
    commonSituations: [
      'A basement panel that sat in Whitewater River floodwater',
      'A mast or meter box shoved loose by a falling limb or a reversing car',
      'An addition or finished basement that failed its electrical inspection',
      'Wiring done without a permit that surfaced during a sale',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Harrison',
        body: 'In Harrison, you want the cause found rather than guessed, so we follow the service in from the weatherhead, past the mast and meter base, into the panel, and check every ground and bond along the way. That tells us which part failed and what permit it needs. We ask for the inspection on the day your repair is booked, because that visit sets the wait. The line and the meter are the utility’s, but the box holding the meter is yours. Once the meter is back, the house comes up a circuit at a time, with a short list of anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Harrison',
        body: 'In Harrison, newer houses mostly get tagged after a failed inspection or work that skipped the permit, older ones for an unsafe panel, absent grounding or bare conductors. Either way the message is to keep the power off, and a tidy-up won’t change it. The tag goes once a licensed electrician has put the cause right and an inspector has passed the job. Keep the tag or door hanger, since the reason is usually on it. Never take a lock off a meter yourself. In Ohio that is a crime, and it would put current into equipment already condemned.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Harrison',
        body: 'A rental waiting for its next tenant, or a house left empty after the August flood, gets checked with extra care before the service goes live again. Sometimes a quick inspection covers it, sometimes it ends with a replacement panel, and you hear which once we’ve looked. On an older house still running its original gear, rebuilding the same setup costs about as much in labour, permit and inspection as a correctly sized modern service, so both get priced.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Harrison Choose Us for Disconnection Repair',
    whyParagraph:
      'Pull the meter on a house in Harrison and the heat, cooling and sump pump go with it, so it’s an emergency to us. Licensed electricians make the repair, sort out permit and inspection, and you get the price first.',
    sharedFaqs: [
      {
        q: 'What will it cost to get my service reconnected in Harrison?',
        a: 'Whatever failed sets it. A meter base repair is a small day next to replacing a flood-damaged service, so the diagnosis always comes ahead of the quote. The flat price is written down for your yes before we start, and the utility’s bill stays its own. Qualifying homeowners can finance.',
      },
      {
        q: 'How long will I be without power in Harrison?',
        a: 'Most of our repairs here wrap up before the day is out. The inspector’s calendar governs what follows, and we have no say over it, so the inspection request goes in with your booking. Of everything we can do, that brings the lights back soonest.',
      },
      {
        q: 'Is it legal to plug the meter back in myself in Harrison?',
        a: 'No. Ohio makes it a criminal offence to tamper with the utility’s lock or meter. There was also a fault behind the cut, and power that comes back before the repair and inspection lands straight in equipment that already failed.',
      },
    ],
  },
};
