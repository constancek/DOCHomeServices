import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walnutHills: LocationServiceCopy = {
  localParagraph:
    'Most Walnut Hills AC work is in apartments, not houses. Census figures put 61.4% of homes in buildings of five units or more, and most households rent, so the owner or manager usually books the repair. Electricity heats 63.2% of homes, so the cooling tends to come from a heat pump or an electric air handler in a closet rather than a coil on a gas furnace. Much of the housing predates 1940.Whoever pays learns what broke and what it costs before we start.',
  emergencyParagraph:
    'Many Walnut Hills homes are in large apartment towers, where upper floors heat up fast. A typical year brings 21 days at 90 degrees, by National Weather Service records, and a dead unit up high is hard on older residents. We fix air handlers and heat pumps, mostly the day you contact us, weekends too.',
  commonIntro:
    'In Walnut Hills, most AC trouble starts in a closet, where an electric air handler handles both the heating and the cooling for an apartment or condo:',
  localFaqs: [
    {
      q: 'I rent an apartment in Walnut Hills. Can I book an AC repair myself?',
      a: 'You can, but check with whoever manages the building before you do. Most Walnut Hills homes are rented, and it’s normally the owner who chooses the contractor and covers the bill. When an owner books us, you get the explanation at the door and the owner gets one flat price to sign off on.',
    },
    {
      q: 'Are AC systems in Walnut Hills apartment buildings different?',
      a: 'Often, yes. Most apartments here heat with electricity, so they have a heat pump or an electric air handler instead of a cooling coil mounted over a gas furnace. The outdoor unit can sit well away from the apartment it serves, so we confirm which condenser is yours before testing anything.',
    },
  ],
  overrides: {
    ctaLine: 'Walnut Hills AC repair for renters and owners alike',
    band1Heading: 'Common AC Problems in Walnut Hills Apartments and Homes',
    commonSituations: [
      'Condensate from a closet air handler soaking into the apartment underneath',
      'A heat pump running for hours without ever bringing the room down to the setting',
      'A frozen indoor coil in a rental where nobody changed the filter',
      'Warm upstairs rooms in one of the neighborhood’s pre-1940 houses',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Renters should go to the landlord or building manager first, because the owner usually controls the equipment. Two checks are still yours to make: the filter and the thermostat mode. A dusty, clogged filter or a heat pump still set to heat can make a healthy system seem dead, and correcting either one saves you the visit. Book us once the closet floor gets wet or the breaker trips for the second time. We look over the indoor and outdoor equipment, say plainly what went wrong, and give one flat price to the person who approves it. Before leaving, we confirm the cooling works.',
      },
      {
        title: 'Repair or Replace the AC in Your Walnut Hills Unit?',
        body: 'Check the install date first. Some Walnut Hills buildings went up in the last few years, and their systems may be new enough that a manufacturer’s parts warranty still covers the failed part. On older equipment, 12 years is the dividing line: below it, fix the one part that broke; above it, a compressor failure is the time to price new equipment. Condo owners should check association rules on outdoor units before replacing. Any replacement needs a mechanical permit from Buildings & Inspections. Before then, a heat pump low on refrigerant leans on backup electric heat in cold weather, and the Duke Energy Ohio bill shows it.',
      },
    ],
    whyTitle: 'Why Walnut Hills Renters and Landlords Call Us',
    whyParagraph:
      'Walnut Hills repairs often involve a tenant at home and an owner somewhere else. The person living there hears what went wrong, the person paying gets the quote, and work waits until that price is approved.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in a Walnut Hills apartment?',
        a: 'That depends on what we find. Clearing a blocked condensate line in a closet unit is fast, while tracking down a heat pump refrigerant leak needs more time and parts. Either you or the landlord signs off on one flat-rate figure before anything begins, and a Saturday or Sunday visit costs no overtime.',
      },
      {
        q: 'Should a Walnut Hills landlord repair or replace an aging AC?',
        a: 'A single failed part on equipment short of about 12 years is worth fixing. Once an older compressor quits, or the refrigerant leaks return again and again, replacement makes more sense. In a building with several matching units of the same age, it can make sense to plan replacements together rather than one breakdown at a time.',
      },
      {
        q: 'Why does the AC in my Walnut Hills unit blow warm air?',
        a: 'Confirm the thermostat says cool and the filter is clean before anything else. Many units here heat with a heat pump, which can stick in heating mode when its reversing valve fails. Beyond that, the likely suspects are a weak capacitor or a refrigerant shortage. Tell your landlord if the basic checks don’t fix it.',
      },
    ],
  },
};
