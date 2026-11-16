import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'Reading’s median home went up in 1956, Census figures show, but roughly a quarter predate 1940, and a few of those still have a fuse board in the basement. The postwar houses mostly have breakers, just not enough of them for air conditioning, an electric dryer and a full kitchen. About four in ten homes are rented. We begin at the panel and work back to the meter base. If one tightened lug fixes it, we say so, and the price is agreed before anything is removed.',
  emergencyParagraph:
    'Mill Creek floods are why we ask whether water got near the panel; if it did, don’t touch it. A hum, a hot smell, sparks, scorch marks or a breaker that snaps back off means a same-day call, weekends included. If the panel is dry and cool, shut that breaker off. For smoke or fire, get out and call 911.',
  commonIntro:
    'In the postwar houses and older basements around Reading, these are the panel problems that bring us out:',
  localFaqs: [
    {
      q: 'Is my panel safe after a basement flood in Reading?',
      a: 'Assume it isn’t until it’s been checked. Mill Creek flooding puts many homes in Reading in the FEMA 100-year floodplain, and a basement panel is often the first thing the water reaches. Stay away from one that was submerged or is still damp. We inspect it, replace soaked parts, and quote before starting.',
    },
    {
      q: 'Who pays for a new panel in a rental house in Reading?',
      a: 'The owner books and pays. Under ORC 5321.04, an Ohio landlord keeps supplied electrical fixtures in good and safe working order, so flickering or tripping a tenant reports in writing is the owner’s to fix. We replace panels, not leases. We schedule around the tenant and give the owner the flat price first.',
    },
  ],
  overrides: {
    ctaLine: 'New electrical panels for postwar and older houses in Reading',
    band1Heading: 'Signs a Home in Reading Needs a New Electrical Panel',
    commonSituations: [
      'Screw-in fuses on a basement board in a house from the 1930s',
      'Breakers dropping out when a window air conditioner and the microwave run together',
      'Every slot in the panel filled, with nowhere to put a new laundry circuit',
      'Rust streaks running down the face of the panel',
    ],
    proseSections: [
      {
        title: 'Benefits of a New Electrical Panel for Homes in Reading',
        body: 'A postwar panel in Reading was installed for a household that owned far fewer appliances. Replacing it lets air conditioning, an electric dryer and a modern kitchen run side by side without trips, and frees spaces for an EV charger or heat pump later on. Where fuses are still in use, breakers take over, so a trip is a flip of a switch instead of a hunt for the right fuse. Each circuit is labeled. And a buyer’s inspector who finds a new, permitted panel has nothing to flag there.',
      },
      {
        title: 'Electrical Panel Repair or Replacement in Reading',
        body: 'Age tells us little until the cover is off. One weak breaker, a lug gone brown with heat, or one circuit with a fault gets a repair, and the rest of the panel keeps working. We price a replacement when the house still runs on fuses, when there isn’t a free space for the circuit you need, when the bus bars show burn marks, or when parts are no longer made. Both quotes come together. First, though, see if the tripped breaker holds after you reset it, and check for a popped GFCI in the kitchen, a bathroom, the garage or outdoors, because one can take others down with it.',
      },
      {
        title: 'Sizing and Permits for a New Electrical Panel in Reading',
        body: 'We count the load the house carries now and add what’s planned, and that count sets the panel size, not the old label. When the meter base or service line is worn, the job gets bigger, and you’ll see why before approving. Duke Energy Ohio cuts and restores the service around the swap. The permit and inspection are ours to handle, so there’s no office for you to call.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Reading Choose Us for Electrical Panel Replacement',
    whyParagraph:
      'We see a lot of basement fuse boards and overloaded postwar panels in Reading. Every electrician on our crew is licensed, insured and background-checked, and you approve the flat price before work starts.',
    sharedFaqs: [
      {
        q: 'What does replacing an electrical panel cost in Reading?',
        a: 'A look at the panel comes first. Then you get one flat price built from what we found, the service size the house ought to have, any meter base work and the permit. Nothing begins until you sign off, and a Saturday job costs what a Tuesday one does.',
      },
      {
        q: 'How do I know my electrical panel in Reading needs replacing?',
        a: 'Frequent trips, lights that flicker when the furnace blower starts, a burning smell and a panel that buzzes or feels warm are the usual signs. A basement fuse box, or big appliances that seem underpowered, points the same way, and either one is worth a visit.',
      },
      {
        q: 'Can a handy homeowner replace a panel without an electrician?',
        a: 'No. Even with the main off, the service wires from the meter carry full voltage until the utility cuts them, and one slip can be fatal. A permit and a final inspection are part of the work as well. We line up the disconnect, the permit and the inspection as one job.',
      },
    ],
  },
};
