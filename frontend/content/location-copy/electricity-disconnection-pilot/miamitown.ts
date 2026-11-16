import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const miamitown: LocationServiceCopy = {
  localParagraph:
    'In Miamitown, roughly four of every five households are tenants and most units are in apartment buildings, so a pulled meter here is mostly a landlord’s problem to solve. The service stays cold until our electrician has corrected the owner’s equipment and the inspector is satisfied. Census figures give a 1973 median, but close to a third of the homes are pre-war, and those services hand the inspector a longer checklist. Every owner gets a diagnosis and a figure on paper before we start.',
  emergencyParagraph:
    'Electric heat is the norm in Miamitown, so a building without service is a building without heat, and a basement sump pump stops as well. Don’t stand beside a meter box hanging off the wall. A downed wire is live, so call 911 and then the utility. For owners, we’re usually there the same day, weekends as well.',
  commonIntro:
    'Across the apartment buildings and the old riverfront houses of Miamitown, service gets cut for one of these reasons:',
  localFaqs: [
    {
      q: 'The building I rent in Miamitown has no power. What should I do?',
      a: 'Send the landlord or manager a dated message about it and photograph whatever tag is on the meter. ORC 5321.04 puts Ohio landlords on the hook for keeping the electrical fixtures and systems they supply in good and safe working order, so the repair is theirs to arrange. We restore power, not leases.',
    },
    {
      q: 'After the Great Miami floods Front Street, can the power go straight back on in Miamitown?',
      a: 'No. A panel the river reached can’t be re-energised as it is, even once it looks dry. We go through the panel, meter base and wiring in the flooded building, give the owner a written price for what must be replaced, and handle the permit and the inspection with Inspection Bureau, Inc. (IBI).',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for apartment owners and landlords in Miamitown',
    band1Heading: 'Common Causes of Electricity Disconnection in Miamitown',
    commonSituations: [
      'An apartment building service tagged for conductors left bare',
      'A basement panel the Great Miami reached during high water',
      'A unit that sat empty between leases until its service needed a check',
      'Turnover work done without a permit and found at inspection',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Miamitown',
        body: 'An owner with a dark building in Miamitown needs the whole service read, not a guess aimed at the meter. We follow it from mast and weatherhead through the entrance cable and meter base into the panel, then check the ground and bond, and sort out whether a single apartment or the building’s own gear tripped the cut. The failed piece gets repaired and the grounding brought to today’s standard, which the inspector looks at anyway. Inspection goes on the calendar with the job. Once the utility re-sets the meter, breakers come up singly, every one labelled, and the owner gets a written heads-up on anything worrying.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Miamitown',
        body: 'In Miamitown, apartment services draw red tags for the faults houses get, usually a panel nobody trusts, an absent ground or conductors worn bare. That tag keeps the utility from energising, and a patch over the visible damage leaves it hanging. It comes down once the real cause is corrected by a licensed electrician and passed by the inspector. Tenants hand any tag or hanger to the landlord; owners pass it to us, because the reason is usually printed on it. A sealed or pulled meter is off limits to everyone. Ohio law makes meddling with it a crime, and it would energise wiring already turned down.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Miamitown',
        body: 'Units in Miamitown that sat vacant between leases, particularly in the pre-war buildings, get a closer check before power returns, because their panels or grounds can trail well behind today’s rules. Some checks finish quickly; some end with a new panel, and the owner hears which once we’ve looked. A refit and a correctly sized new service carry about the same labour, permit and inspection, so the owner sees both prices on one page.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Miamitown Choose Us for Disconnection Repair',
    whyParagraph:
      'In Miamitown, tenants go cold when a building loses its service, so the call gets emergency treatment. Licensed electricians repair what the utility is waiting on, see the permit and inspection through, and give the owner a price before starting.',
    sharedFaqs: [
      {
        q: 'What will an owner pay to fix a disconnected building in Miamitown?',
        a: 'Price tracks the failure. Swapping one scorched socket is small next to rebuilding a whole building’s service. After the diagnosis the owner receives a single fixed figure in writing, and whatever the utility charges stays on the utility’s own bill. Qualifying homeowners can use financing.',
      },
      {
        q: 'How long are tenants in Miamitown without power after a disconnection?',
        a: 'The repair often finishes in one day. The inspection sets most of the rest, because the inspector’s calendar isn’t ours, so we request it while the repair is being scheduled rather than after. That order of doing things shortens the outage more than anything else.',
      },
      {
        q: 'Can a landlord or tenant reinstall the meter in Miamitown?',
        a: 'Neither of them should. Only the utility handles its meter and seal, and tampering with either is a criminal offence in Ohio. The cut was made over a fault, so restoring power early would push current into wiring the crew wouldn’t energise. Repair and inspection happen first.',
      },
    ],
  },
};
