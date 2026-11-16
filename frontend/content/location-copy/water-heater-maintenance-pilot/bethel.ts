import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'Bethel rents more than it owns: 51.7% of homes are renter-occupied by Census figures, and plenty are in fourplexes and small apartment blocks where each unit has a closet heater standing in a pan. Those are the landlord’s to schedule. The houses run older, median 1958, so a basement tank often has a crusty drain spigot, aging flue and a gas hookup worth inspecting. Before anything starts you get a fixed price, and if the tank isn’t worth the service, we tell you so.',
  emergencyParagraph:
    'Leaks call for a repair: turn off the water valve feeding the tank, then its gas or breaker. Gas in the air: get out, don’t touch switches or relight, and contact the gas company outside. Carbon monoxide alarm: everyone leaves first. Relief valve won’t stop, or no hot water: same. Usually that’s a same-day visit, weekends included.',
  commonIntro:
    'Landlords and owners in Bethel usually get in touch over one of these:',
  localFaqs: [
    {
      q: 'I manage a handful of apartments in Bethel. How does a yearly service work?',
      a: 'Apartment by apartment. Each closet heater is drained and flushed, its anode and relief valve inspected, and the pan underneath checked for rust or standing water. You receive a sheet listing every unit, and any part is priced before it’s fitted. Booking the whole building for one morning keeps disruption down.',
    },
    {
      q: 'Hot water is weak in the apartment I rent in Bethel. Can I hire you directly?',
      a: 'Let the landlord know in writing first; it’s their equipment and their booking. Under ORC 5321.04, Ohio puts safe, working supplied appliances, (A)(4), and reasonable hot water, (A)(6), on the owner. We service water heaters, not leases. A heater shared by the whole building is management’s call.',
    },
  ],
  overrides: {
    ctaLine: 'Annual heater service for apartments and houses in Bethel',
    band1Heading: 'Signs a Water Heater in Bethel Is Due for Maintenance',
    commonSituations: [
      'Fourplex closet heaters that no one has flushed since move-in',
      'A 1950s basement gas tank grumbling through every burn',
      'Tenants mentioning that hot water gives out sooner than it used to',
      'Rust spots in the pan beneath an apartment heater',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Bethel',
        body: 'We open the drain, empty the heater and flush the sediment until it stops coming. That sediment is minerals the water gives up when heated; it gathers underneath, the flame or elements have to drive heat through it, and the result is grumbling and a shorter run of hot water. Then the anode rod is drawn out, the part made to wear thin ahead of the steel, and if it’s spent you get a quote. The relief valve is test-lifted and its discharge tube checked, along with the shutoff and supply hookups. Closet pans get a look too. Nothing new goes in without approval.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'A yearly visit makes sense for a heater that still works but has never been drained, a property bought with no history on its tank, grumbling that’s just started, or a building where several heaters need tracking. It makes no sense for a tank seeping from its body; that’s replacement, and a flush won’t help. Rusty water from the hot side, or a heater visibly at the end, gets the same answer: hold the money for its replacement. A handy owner can drain a bucket through the spigot between visits. Once a year is what we advise.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Bethel',
        body: 'Storage heaters get flushed and their anodes checked. Tankless heaters get descaled: a cleaning solution circulates through the heat exchanger, then the inlet filter is cleaned out. Gas service is common in Bethel, so burner, pilot and venting checks are routine on many calls; electric tanks get element and thermostat tests. When a closet heater is due for replacing, tankless can be mentioned once and left there.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Bethel Book Water Heater Maintenance With Us',
    whyParagraph:
      'Small apartment buildings mean one visit in Bethel often covers several closet heaters at once. Background checks and drug tests on every technician, no overtime fees, and a flat price you agree to first.',
    sharedFaqs: [
      {
        q: 'How is a water heater service priced in Bethel?',
        a: 'Per heater, at a flat price shown before we begin. The type, the fuel and the access all count, and a closet unit behind a door with inches to spare is slower than an open basement tank. Additional parts get their own quote, and you decide on each one.',
      },
      {
        q: 'How often should each heater be serviced?',
        a: 'Yearly. If one begins grumbling or popping between visits, have it seen earlier, since sediment is gathering on its floor. Landlords find one annual round across every unit far easier to keep records on than visits scattered through the year.',
      },
      {
        q: 'Can I flush the heater myself?',
        a: 'If you own it and you’re handy, draining a bucket through the spigot between visits does help. An old spigot that may not seal again, the gas burner and the relief valve test are better left to us. Tenants should leave the landlord’s heater alone.',
      },
    ],
  },
};
