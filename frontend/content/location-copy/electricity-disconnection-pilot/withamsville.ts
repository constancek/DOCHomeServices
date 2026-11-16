import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const withamsville: LocationServiceCopy = {
  localParagraph:
    'Withamsville sits in unincorporated Union Township, so a cut service here answers to Clermont County as well as the utility: Duke Energy Ohio won’t set the meter again until a licensed electrician repairs the owner’s equipment and, in most cases, the county’s inspector passes it. Just over half of homes here are rented, by Census figures, and the median dates to 1980, so outages often start at a shared meter bank in an apartment complex rather than in a single house. We diagnose, then the owner signs a written price.',
  emergencyParagraph:
    'In Withamsville, a pulled meter leaves an apartment or house with neither heating nor cooling and a sump pump that can’t start, and the costs build daily. Don’t go near a meter box leaning away from the siding. Report a fallen wire to 911 and the utility first. Owners and managers usually get an electrician the same day, weekends included.',
  commonIntro:
    'Across the apartment complexes and houses of Withamsville, these are the usual reasons a service gets cut:',
  localFaqs: [
    {
      q: 'Why do only some rooms in my apartment in Withamsville have power?',
      a: 'Probably because the service has dropped one of its two legs, overhead or in the panel, leaving half the breakers live. Let the landlord or manager know in writing, since the owner books the repair. Don’t sit on it; one leg feeds uneven voltage to the fridge, the furnace blower and anything else with a motor or circuit board.',
    },
    {
      q: 'Who handles the permit for disconnection repairs in Withamsville?',
      a: 'Clermont County Building Inspection, which enforces the building codes across unincorporated Union Township and lists electrical permits on its fee schedule. We file and line up the county inspection with the repair, since the utility wants that approval before reconnecting. Urgent work can usually start before the paperwork is in, but it is still filed and inspected.',
    },
    {
      q: 'I rent in Withamsville and the utility says it won’t reconnect over a fault. What should I do?',
      a: 'Photograph the utility’s notice, then send the landlord a dated note with the photo and hang on to the original. ORC 5321.04 obliges an Ohio landlord to maintain the electrical equipment provided with the unit, so arranging and paying for this repair falls to the owner. We restore power, not leases, and quote the owner directly.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repairs for apartments and houses in Withamsville',
    band1Heading: 'Common Causes of Electricity Disconnection in Withamsville',
    commonSituations: [
      'One burned position on an apartment meter bank that cut power to several units',
      'Half an apartment dark after one leg of the service failed',
      'A 1950s house with its meter pulled over grounding the utility crew wouldn’t accept',
      'A unit that sat vacant between leases long enough to need the service rechecked before reconnection',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Withamsville',
        body: 'A manager in Withamsville with several dark units wants everything settled in one push, so the survey covers the whole service on the owner’s side. Our electrician checks the service head and riser, the conductors into the meter bank, each position’s jaws and lugs, the panels and the grounding electrode and bonding, which tells us whether the job is a riser, meter position or panel, and which county permit applies. Grounding short of code is corrected while we are there. The inspection request goes in the day the quote is signed, and after the meter is reset we restore units a breaker at a time with notes.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Withamsville',
        body: 'In Withamsville, crews tag a service for the same handful of hazards: a cooked meter position, a panel they consider unsafe, a ground they can’t find or conductors left bare. A tag means do not energise, and it stays on through any clean-up. It comes off after our licensed electrician corrects the fault and the county inspector signs the repair. Whatever was hung on the door or meter tells us where to look, so keep it. Locked or empty meter sockets are for the utility alone to deal with; Ohio makes meter tampering a criminal offence, and energising a faulted service would put tenants back in harm’s way.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Withamsville',
        body: 'Withamsville has plenty of rentals, and units that sat empty between leases are regular work. After a long spell without power, the service gets a closer look before the meter returns, because the panel or grounding may trail current code; that can end with a short inspection or a new panel. Whether we refit the old gear or install a modern service sized for the building, labour and permit come out close, so owners compare both prices.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Withamsville Choose Us for Disconnection Repair',
    whyParagraph:
      'A cut service leaves tenants and owners without heat or a sump pump, and we answer those calls fast. Licensed electricians fix what the utility flagged, handle the county permit and inspection, and agree a price in writing before work.',
    sharedFaqs: [
      {
        q: 'What does it cost to repair a disconnected service in Withamsville?',
        a: 'The cost follows the failure. A single meter position is a lighter job than a new service and panel for a building. We diagnose, put one flat price in writing, and start only once it’s approved. Anything the utility charges comes from the utility, apart from our bill. Qualifying homeowners can use financing.',
      },
      {
        q: 'How long before the power comes back in Withamsville?',
        a: 'Our repair often takes a single day. The county inspector’s schedule sets most of the wait, and we can’t speed that up, but booking the inspection along with the repair is what shortens it most. Once the inspection passes, we set up the reconnect with the utility.',
      },
      {
        q: 'Can I reconnect the meter myself to get power back?',
        a: 'No. Refitting the meter or cutting the utility’s lock is a criminal offence in Ohio, and the lock was put there because of a fault. That fault is still sitting in the service, so early power goes straight back into it. Reconnection comes after a licensed repair and the county inspector’s approval.',
      },
    ],
  },
};
