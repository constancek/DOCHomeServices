import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountWashington: LocationServiceCopy = {
  localParagraph:
    'Most furnaces we tune in Mount Washington sit in post-war houses. Only 11.4% of homes predate 1940 by Census figures, and the bulk went up between 1940 and 1979, so the usual job is a basement or utility-room furnace that has been swapped since the house was new: filter, blower, burner and safety controls. Gas heats 60.8% of homes. The apartment buildings put furnaces in closets that landlords book in batches. The price is set before work, and we’ll say if nothing’s needed.',
  emergencyParagraph:
    'A tune-up isn’t the answer here. Gas smell: everyone into the yard, light switches untouched, the gas company phoned from outside. Carbon monoxide alarm: out first, questions later. No heat during a cold snap, a furnace short-cycling all evening, a yellow flame: book a repair. Infants and elderly relatives are hit hardest. Same day on most calls, weekends too.',
  commonIntro:
    'From the 1950s houses near Beechmont Avenue to the apartment buildings, these are the usual reasons for a booking in Mount Washington:',
  localFaqs: [
    {
      q: 'I rent an apartment in Mount Washington. Can I book a furnace tune-up myself?',
      a: 'The furnace belongs to your landlord, so ask them to book it; we work for whoever owns the equipment. Inside the city, Cincinnati’s 70F rental heat rule applies. We service furnaces, not leases. If heat is short right now, report it to the landlord or manager in writing.',
    },
    {
      q: 'Our house in Mount Washington is from the 1950s. Is the furnace original?',
      a: 'Almost never. A house that age has usually had two or three furnaces, so the one in your basement is probably from the last few decades. We read the data plate, check how it vents, and tell you plainly whether it’s worth servicing or the money belongs toward its replacement.',
    },
  ],
  overrides: {
    ctaLine: 'Fall furnace maintenance for houses and apartments in Mount Washington',
    band1Heading: 'Signs a Furnace in Mount Washington Is Due for Maintenance',
    commonSituations: [
      'A 1950s house whose furnace paperwork left with the last owner',
      'Several apartment furnaces in one building with no shared service schedule',
      'A thermostat calling for heat while the blower takes its time starting',
      'A faint burning smell that lingers well into the second week of heat',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Mount Washington',
        body: 'We go through each furnace in the same order. The filter comes out and a dirty one gets replaced. The blower motor is checked and the wheel cleaned, since a caked wheel moves less air through mid-century ducts. A heat call at the thermostat lets us watch the start-up from inducer to flame. Loose terminals are tightened; the flame sensor, high limit and pressure switch each have to trip. The burners and igniter get a look, the heat exchanger a crack inspection, and the vent connector a check for rust and slope. One full heating cycle proves it all. Repairs are quoted before we touch them.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'Booking pays off on a furnace whose history is a blank, in the first fall after you move in, when a squeal or rattle is new, when cycles keep getting shorter, or in an apartment building where every unit should go on one schedule. A dusty odor still hanging in the rooms after the heat has run a few days counts too. It doesn’t pay off on a furnace we tuned in the past year that runs normally, or one already found cracked inside; that money should go to replacing it. No heat at all means Furnace Repair. Heat pumps and boilers have their own services.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Mount Washington',
        body: 'In Mount Washington, gas leads, so a typical visit means brushing the burners, testing the igniter and flame sensor, leak-checking the gas fitting and inspecting the heat exchanger and vent. Plenty of homes heat with electricity too, a figure that takes in heat pumps along with furnaces. An electric furnace gets its elements and sequencers metered, its wiring inspected and its airflow checked. The quote works the same either way.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Mount Washington Book Furnace Maintenance With Us',
    whyParagraph:
      'We handle single houses and whole apartment buildings the same way in Mount Washington: a flat price first, then the work. The people we send hold licenses and insurance and have passed background checks and drug tests.',
    sharedFaqs: [
      {
        q: 'What will a furnace tune-up cost me in Mount Washington?',
        a: 'A flat rate, named before work begins. It moves with the fuel type, the climb to the furnace, and for landlords the number of units on the trip. Repairs we turn up are priced one by one, and each waits for your answer. A Sunday visit costs what a Wednesday one does.',
      },
      {
        q: 'How often does a furnace really need maintenance?',
        a: 'Once a year, booked in the fall. Getting in before the normal first freeze, which the National Weather Service dates around October 25, means a tired part shows itself on a mild day. Wait for the first cold night and you’re in line with everyone else.',
      },
      {
        q: 'What furnace care can I handle myself?',
        a: 'Swap a gray filter, keep registers and returns free of furniture, put new batteries in the thermostat and keep the furnace area clear. Landlords can ask tenants to report noises or smells early. The burner compartment and gas valve stay closed; they’re for a technician.',
      },
    ],
  },
};
