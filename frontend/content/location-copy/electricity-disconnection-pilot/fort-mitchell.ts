import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fortMitchell: LocationServiceCopy = {
  localParagraph:
    'A scorched meter socket is enough to keep the power off at a house in Fort Mitchell, because the utility won’t reconnect until a licensed electrician replaces it and, usually, an inspector passes the job. Housing runs from Beechwood and Fort Mitchell Heights, where homes date from roughly 1890 to the 1930s, to 1970s apartment blocks, with a 1971 median by Census figures. Older services mean a longer inspection list. The written price follows our diagnosis.',
  emergencyParagraph:
    'In Fort Mitchell, losing the service takes out the heat, any cooling and the sump pump at a stroke. If the meter box has torn off the house, stay clear of it. A wire on the ground is a 911 call first and a Duke Energy Kentucky call second. Most calls get an electrician that day, weekends too.',
  commonIntro:
    'Along Dixie Highway and the streets off it, from early 1900s homes to apartment buildings, disconnections in Fort Mitchell tend to come from one of these:',
  localFaqs: [
    {
      q: 'Can a burned meter socket in Fort Mitchell be repaired?',
      a: 'Not in place. Once a socket shows scorching, melted plastic or heat damage, it can’t return to service, so we fit a new meter base, look at the entrance cable and the panel connections it supplies, bring the grounding up to code and get the inspection booked so the utility can reinstall the meter.',
    },
    {
      q: 'Is service work restricted in the historic districts of Fort Mitchell?',
      a: 'Not by itself. Beechwood, Fort Mitchell Heights and Old Fort Mitchell are on the National Register, and that listing alone doesn’t restrict private work on your home. We file the permit and book the inspection as usual, and on an older house in those districts we expect the inspector to look closely at grounding.',
    },
    {
      q: 'Who should a renter in Fort Mitchell call about a disconnection?',
      a: 'Your landlord, in writing, with a copy kept for yourself, because the owner is the one who books the repair. Small apartment buildings often share a meter bank, and exterior work there may need the association’s or manager’s approval. We restore power, not leases, and deal with whoever owns the service.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection repairs for older homes and apartments in Fort Mitchell',
    band1Heading: 'Common Causes of Electricity Disconnection in Fort Mitchell',
    commonSituations: [
      'An older home near Beechwood Road with a meter socket browned by years of heat',
      'Grounding on an early 1900s service that blocks the inspector’s sign-off',
      'A small apartment building where one slot in the shared meter bank burned',
      'A limb that dragged the drop down and bent the mast',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Fort Mitchell',
        body: 'We start a dark house in Fort Mitchell by tracing the whole service. That means the weatherhead, the mast pipe, the wires down to the meter base, then the panel and its grounding electrode and bonding. From there we can say which repair this is and which permit goes with it. While we repair the fault, we correct any grounding or bonding below current code, because the inspector reviews both. We ask for the inspection when the permit goes in. Once the meter is refitted, breakers come on one by one, and we put in writing anything to watch, such as an overloaded subpanel.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Fort Mitchell',
        body: 'Plenty of owners take the box holding the meter for utility property. The utility’s share is small, just the overhead line and the meter. The socket box, mast, weatherhead, service wires and panel are the owner’s, so storm damage to them is an insurance matter, not something the utility fixes. When the utility red-tags that equipment, it won’t energise it, and wiping away the visible damage changes nothing. The tag lifts after a licensed electrician corrects the cause and an inspector signs the work. Hand us whatever tag or hanger was left. Never touch a pulled or locked meter, because Kentucky makes tampering with one a criminal offence.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Fort Mitchell',
        body: 'Some houses near Dixie Highway come to new owners through an estate, and some apartments sit empty between tenants long enough for the utility to want the service checked. On the oldest homes, panel and grounding can trail current code by decades. A short look clears some. Others need a new panel, and we say which after inspecting. Your quote shows a like-for-like refit next to a modern, properly sized service, because labour and permit cost the same.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Fort Mitchell Choose Us for Disconnection Repair',
    whyParagraph:
      'A dead service shuts off heat and the sump pump, so it goes to the top of our list. Licensed electricians make the repair, take care of the permit, are there for the inspector and confirm the price first.',
    sharedFaqs: [
      {
        q: 'How much does a reconnection repair cost in Fort Mitchell?',
        a: 'What failed decides it. Fitting a new meter base is a much lighter day than rebuilding an entire service, so we diagnose before giving any number. Then you sign off one flat price in writing, and the utility’s own fees stay separate. Qualifying homeowners can use financing.',
      },
      {
        q: 'How long before the power is back in Fort Mitchell?',
        a: 'A single day covers most repairs, and then there’s the inspection. When the inspector can come is what really decides the wait, which is why we request a slot the moment you book. No other step shortens the outage as much.',
      },
      {
        q: 'Can I break the meter lock to get power back in Fort Mitchell?',
        a: 'No. The lock belongs to the utility, and Kentucky law makes meddling with metering equipment a crime. On a service shut off for a fault, cutting the lock would also feed power into equipment already found unsafe. We repair, the inspector passes it, then the utility reconnects.',
      },
    ],
  },
};
