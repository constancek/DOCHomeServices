import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountHealthy: LocationServiceCopy = {
  localParagraph:
    'Half of Mount Healthy rents, 50.3% of homes by Census figures, so landlords arrange much of this work, often for apartment closets where each tank stands in a drain pan. The houses skew older, with a median of 1956 and 29.3% predating 1940. In those, the heater usually lives in the basement next to an aging flue and gas piping we check while it drains. We fix the price before starting, and we’ll be honest if a tank isn’t worth servicing.',
  emergencyParagraph:
    'These aren’t maintenance jobs. A leak: close the cold valve at the top, then gas or breaker. Gas smell: get out without flipping lights or relighting, phone the gas company outside. A carbon monoxide alarm: everyone out. A relief valve that won’t quit, or no hot water, is repair work. Same-day on most, weekends included.',
  commonIntro:
    'Mount Healthy splits between owners of apartment buildings and families in older houses. Either way, these are the usual signals:',
  localFaqs: [
    {
      q: 'I’m a tenant in Mount Healthy. Who books water heater upkeep?',
      a: 'The property owner, since the heater is theirs. Under ORC 5321.04, Ohio landlords must keep supplied plumbing fixtures and appliances in good, safe working order, (A)(4), and supply reasonable hot water, (A)(6). Raise problems with them in writing. We service water heaters, not leases; one shared building heater is for management to decide.',
    },
    {
      q: 'I own several rentals in Mount Healthy. Can all the tanks be serviced in one trip?',
      a: 'They can. Send us the addresses and unit numbers and we’ll sequence the stops so tenants are without hot water as briefly as possible. One flat quote covers the batch, approved by you first, and any part an individual tank needs gets its own price.',
    },
  ],
  overrides: {
    ctaLine: 'Upkeep for rental and family water heaters in Mount Healthy',
    band1Heading: 'Signs a Water Heater in Mount Healthy Is Due for Maintenance',
    commonSituations: [
      'A row of closet heaters in a building off Harrison Avenue, none drained since install',
      'Crackling from a basement tank under a pre-1940 house near Perry Street',
      'A buyer with new keys and nothing on file about the heater',
      'Showers going tepid noticeably earlier than they did last year',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Mount Healthy',
        body: 'We shut it down, drain it and rinse the bottom clear of the minerals that collect there and make the burner or elements labor through a crusty layer. Then the anode: it’s a metal rod built to corrode first, and when there’s little left, you see a price for a fresh one. Next we work the relief valve lever and inspect the discharge pipe for damage. For gas, that’s burner, pilot assembly, flue and fitting; for electric, the elements and their thermostats. In apartment closets the drain pan and supply lines get a close look too. Any part we recommend is priced first and only fitted on your say-so.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Owners with tanks in several units get the most out of a yearly round: one appointment, each heater drained, and anything worn caught before a tenant texts at midnight. It’s also sensible for a working tank that’s never been emptied, a newly purchased house, or a heater that’s begun to growl. It’s pointless for a tank weeping from its own body, which needs replacing rather than flushing. Where hot water runs rusty or the unit is plainly spent, we’ll say to keep the money for its replacement. Handy owners may let water out of the bottom spigot between visits.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Mount Healthy',
        body: 'Storage tanks get drained, rinsed and anode-checked. Tankless units get descaled, which means a pump circulates cleaning solution through the heat exchanger, and then the inlet filter, which catches grit before it enters, gets cleaned. Gas heaters get burner and venting checks; electric ones get element and thermostat tests. Gas service is common across Mount Healthy. Ask about tankless and you’ll get a straight answer, never a sales pitch.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Mount Healthy Book Water Heater Maintenance With Us',
    whyParagraph:
      'Closet heaters in rental buildings and basement tanks in pre-1960 houses are what we see most in Mount Healthy. Our technicians are licensed, insured, background-checked and drug-tested, and the flat price is agreed before work begins.',
    sharedFaqs: [
      {
        q: 'What’s the price of servicing a water heater in Mount Healthy?',
        a: 'A flat rate, stated before we start. Storage or tankless, fuel type and access set it; a closet unit tucked behind a stacked laundry pair takes longer than one standing free in a basement. A spent anode or tired valve is an extra line, installed only after you say yes.',
      },
      {
        q: 'How often should rental water heaters in Mount Healthy be flushed?',
        a: 'Once yearly, as a rule. Popping or rumbling before then is reason to book early, because it means sediment is piling up under the heat source. Landlords can set every unit to the same month so tracking the visits stays easy.',
      },
      {
        q: 'Is it fine to drain sediment out on my own?',
        a: 'An owner who’s handy can let water run from the bottom spigot into a pail and loose sediment comes with it. Tenants should leave the landlord’s heater alone. If the spigot is old and won’t close tight, quit there. Gas burner checks and the relief valve test are ours.',
      },
    ],
  },
};
