import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const parkHills: LocationServiceCopy = {
  localParagraph:
    'Park Hills was built out between the late 1920s and the 1950s; by Census figures the median home dates from 1953, and gas heats 69.2% of them. In the houses along those curving streets beside Devou Park, the furnace sits downstairs, rarely the first one installed, often vented through a masonry chimney, so the venting and heat exchanger come under the closest look. Apartment buildings, 30.1% of homes, are booked by their owners. We price the visit up front and tell you plainly when nothing needs doing.',
  emergencyParagraph:
    'These are repairs. Smell gas: walk out, don’t flick a light, don’t relight a pilot, ring the gas company from the curb. Carbon monoxide alarm: nobody stays inside. No heat once nights go below freezing, nonstop restarts, a yellow flame: same. Babies, older neighbors and the sick are most exposed. Mostly same day, weekends too.',
  commonIntro:
    'Basement furnaces under houses from the 1920s to the 1950s, and unit furnaces in the apartment buildings, make up most visits in Park Hills. What usually prompts one:',
  localFaqs: [
    {
      q: 'I rent in Park Hills and my furnace is noisy. Can I book a tune-up?',
      a: 'Tell your landlord or building manager instead; maintaining that furnace is their job, and they book the visit. If the noise comes with a gas smell, a carbon monoxide alarm or no heat, report it as urgent and leave if you smell gas. Owners can have every unit serviced on one trip, each priced up front.',
    },
    {
      q: 'Does the historic district affect furnace maintenance in Park Hills?',
      a: 'No. The Park Hills Historic District is a National Register listing, and that alone doesn’t restrict work on a private home. A tune-up happens indoors at the furnace anyway. If a replacement ever calls for a new vent through an outside wall, we check with the city first.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly furnace maintenance for houses and apartment buildings in Park Hills',
    band1Heading: 'Signs a Furnace in Park Hills Is Due for Maintenance',
    commonSituations: [
      'A 1950s basement furnace with no service record left by the last owner',
      'An apartment building where nobody can say when the unit furnaces were cleaned',
      'A high squeal from the blower that started with this fall’s first cold nights',
      'Short, choppy cycling from a furnace that ran steady last winter',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Park Hills',
        body: 'About an hour per furnace. A loaded filter is swapped out first. The blower wheel comes out for cleaning when it’s caked, and we listen to the motor for bearing noise. Your thermostat is asked for heat while we watch the controls respond, and the wiring, limit switch, flame sensor and pressure switch are tested. We check ignition and the flame pattern across the burners, look over the heat exchanger for cracks, and trace the flue to the chimney, where houses from the 1920s and 1930s here can hide gaps. One complete heating cycle closes the visit. Repairs are quoted and wait for your yes.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'Pay for the visit when the furnace came with no paperwork, when you just bought the house, when a scorched-dust smell keeps coming back after the first heating days, when a rattle or squeal appears, when the burners begin short cycling, or when you own an apartment building full of furnaces. Save your money if it was serviced within the year and runs well. A furnace putting out no heat at all wants Furnace Repair. Once we’ve found a cracked heat exchanger, that money belongs to a replacement. Boilers and heat pumps have their own services. Swap dirty filters and keep vents open yourself. We suggest yearly.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Park Hills',
        body: 'Gas runs most furnaces in Park Hills, so a visit usually means watching the burners light, checking the igniter and flame sensor, testing the gas connection for leaks, then the heat exchanger and the vent run to the chimney. Some apartments and newer houses heat with electricity, which may be a heat pump. For an electric furnace we check the heating elements and sequencers, look over the wiring and measure airflow at the registers.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Park Hills Book Furnace Maintenance With Us',
    whyParagraph:
      'From houses beside Devou Park to the apartment blocks, our fall furnace work covers both in Park Hills. Technicians are licensed, insured, background-checked and drug-tested, and every flat price is agreed before work.',
    sharedFaqs: [
      {
        q: 'How is furnace maintenance priced in Park Hills?',
        a: 'Flat, per furnace, and quoted before we start. The fuel and the route to the furnace set it; a basement down a steep stair takes more than a utility closet. Landlords get one quote for several units. Anything we find is priced on its own and waits for your approval.',
      },
      {
        q: 'How often should my furnace be tuned up, and when?',
        a: 'Yearly, and fall is when. Freezing nights normally start around October 25, per the National Weather Service, and a furnace looked at in September or early October gets a weak igniter or grimy flame sensor sorted before the hillside houses need heat nightly. Late bookings still help.',
      },
      {
        q: 'What furnace care can I handle between visits?',
        a: 'Plenty, as long as it stops at the filter. Slide out a dirty one and fit a new one, keep rugs and furniture off registers and returns, and replace thermostat batteries. Keep boxes away from the furnace. The burner compartment and gas valve are ours to open.',
      },
    ],
  },
};
