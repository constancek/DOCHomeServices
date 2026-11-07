import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const golfManor: LocationServiceCopy = {
  localParagraph:
    'Golf Manor is a village of renters and small landlords: 50.4% of households rent, and 33.9% of units sit in three- and four-unit buildings, per Census figures. For a tune-up that often means one heater per apartment, lined up in a shared basement or set in a closet pan, with the owner signing off. Most buildings date from 1940 to 1959, so flue pipes, gas cocks and drain spigots tend to be old. The owner hears a fixed price first, and a frank word if any tank is past saving.',
  emergencyParagraph:
    'Some calls skip the tune-up queue. A tank spilling water: turn the supply valve at its top off, then cut gas or power. A gas smell in the building: everyone out, no switches, phone the gas company from the sidewalk. A carbon monoxide alarm: clear every unit first. Those get same-day repair on most calls, weekends too.',
  commonIntro:
    'Small landlords in Golf Manor usually book a round of service after one of these:',
  localFaqs: [
    {
      q: 'I’m a tenant in Golf Manor. Can I schedule a service on the water heater?',
      a: 'Not on a tank the landlord owns. Send them a written note about the problem. Ohio law, ORC 5321.04, makes landlords keep the appliances they provide safe and working, and supply reasonable hot water. We service water heaters, not leases, so your landlord sets up the visit. A building-wide heater is management’s call.',
    },
    {
      q: 'Can you service all the tanks in my four-family in Golf Manor at once?',
      a: 'Yes, that’s a routine job here. We work through the units in one trip, rinse and check each tank, and tell you which are in good shape and which need budgeting for. Every unit is priced before we start, and the tenants only need to give us access.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater tune-ups for rentals and houses in Golf Manor',
    band1Heading: 'Signs a Water Heater in Golf Manor Is Due for Maintenance',
    commonSituations: [
      'Upstairs tenants in a four-family losing hot water before the downstairs ones',
      'A row of basement tanks in a 1950s building, none with a service tag',
      'A new owner who inherited the heaters along with the leases',
      'A water stain ringing the closet pan under one unit’s tank',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Golf Manor',
        body: 'We empty each heater, rinse the silt from the bottom, and refill. The anode, a rod that sacrifices itself to rust so the steel tank doesn’t, is pulled and judged; a worn one is quoted. We work the relief valve to prove it opens and seats again, and confirm its pipe runs down toward the floor. Gas heat dominates in Golf Manor, so on most tanks we also check the burner, pilot, vent pipe and gas cock; any electric unit gets its elements and thermostats metered. Closet units get their pan and supply fittings inspected. Each repair is priced per tank, and none happens without the owner’s approval.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'The payoff is biggest for an owner with three or four tanks nobody has flushed: one visit ranks them from healthy to nearly finished, so the next failure doesn’t arrive as a tenant’s phone call. It also helps right after buying a building, or when rumbling starts in one basement. It is wasted on a heater already seeping from its jacket, which needs replacing, and on one giving rusty water or near the end of its working life; we’ll tell you to spend on the new tank instead. Between visits, an owner who’s handy can run off a pail from each spigot. One round a year is plenty.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Golf Manor',
        body: 'Tank heaters get the rinse and anode check. A tankless unit gets descaling, a cleaning solution circulated through its heat exchanger by a small pump, and its inlet screen cleared. Gas service is common in Golf Manor, so burners and vents get looked at on most units; electric ones have their elements and thermostats tested. If a tankless swap interests you at replacement time, ask; we won’t raise it twice.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Golf Manor Book Water Heater Maintenance With Us',
    whyParagraph:
      'Our schedule in Golf Manor is mostly shared basements and closet heaters in 1950s multi-unit buildings. Licensed, insured techs, each one background-checked and drug-tested, and a flat price the owner approves first.',
    sharedFaqs: [
      {
        q: 'What decides the price of water heater maintenance in Golf Manor?',
        a: 'Three things: tank or tankless, gas or electric, and access. A heater in an open basement goes faster than one squeezed into a closet behind a washer. With several units, each tank gets its own line on the quote. The owner agrees to the flat rate before we begin.',
      },
      {
        q: 'How often should the tanks in a rental be serviced?',
        a: 'Yearly works for most tanks. Dissolved minerals fall out of the water and build a bed on the tank floor, and the flame has to heat through it. If a tenant reports banging, rumbling or hot water fading early, move that unit up the list.',
      },
      {
        q: 'Can I drain my own tanks between visits?',
        a: 'A handy owner can let a pail run from each spigot. Hand us the rest: an old plastic spigot that may weep once it’s turned, any gas burner work, and testing the relief valve, which has to be replaced on the spot if it sticks.',
      },
    ],
  },
};
