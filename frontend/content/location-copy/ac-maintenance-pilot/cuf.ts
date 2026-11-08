import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'Landlords book most of the AC maintenance we do in CUF, since 84.5% of homes here are rented, by Census figures. And 42.3% of the housing predates 1940, which means central air arrived as a retrofit; we find air handlers jammed under attic rafters or in a cellar corner, with duct runs snaking between plaster walls. The 1970s apartment buildings are tidier jobs. Each unit gets a fixed price before we open a panel, and units that need nothing are left as they are.',
  emergencyParagraph:
    'An apartment with no cooling in a heat wave, or water coming through a ceiling, needs a repair visit instead of a tune-up. With ice on the lines, switch the thermostat off until it melts. Tenants should tell the landlord in writing; elderly or sick tenants shouldn’t wait. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'In CUF, property owners usually put a spring service on the books for one of these reasons.',
  localFaqs: [
    {
      q: 'As a tenant, am I allowed to book an AC tune-up in CUF?',
      a: 'Not on equipment your landlord owns. Write to the landlord or manager describing the drip, noise or weak cooling. Ohio’s ORC 5321.04 (A)(4) puts supplied air conditioning on the landlord to keep in good and safe working order. We service air conditioners, not leases, so the owner sets up the visit.',
    },
    {
      q: 'Will you do a whole building of apartments on one trip to CUF?',
      a: 'That’s how most owners here do it. We work through the building one apartment at a time, then send the owner a written sheet listing each unit and what we found. Each repair has its own price, so you can approve some this spring and hold others for later.',
    },
  ],
  overrides: {
    ctaLine: 'Spring AC service for rental buildings in CUF',
    band1Heading: 'Signs an AC in CUF Is Due for Maintenance',
    commonSituations: [
      'An air handler under the attic rafters of a pre-war two-family house',
      'A condenser jammed into a side yard that falls away down the hill',
      'A tenant text about water in a hallway closet',
      'A newly bought building with no dates written on any unit',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in CUF',
        body: 'Every apartment gets the same run-through. The filter comes out and a clean one goes in if needed, the indoor coil is examined, and the drain line is flushed so the pan stays dry, which matters when that pan sits above someone else’s bedroom ceiling. Outdoors, the condenser’s fins are rinsed and the leaves and grit that pile up on a sloped lot are cleared. Gauges go on the refrigerant ports, a meter goes on the capacitor, contactor and terminals, airflow and the thermostat are checked, and the system cools for a full cycle. A low charge means a leak, quoted as a repair the owner approves.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'A building with no service records, a rental you bought this year, complaints about drips or new noises, and floors that cool unevenly all justify a spring round. A system someone serviced last year that’s still cooling well does not. If a unit has quit or iced over, call for AC Repair, and if we’ve already marked it for replacement, AC Installation & Replacement is where that money should go. Window units are outside what we’d book. In between, maintenance staff can keep fresh filters in, keep returns free of furniture and keep weeds off the condensers.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in CUF',
        body: 'Gas edges out electricity as a heating fuel here, by Census figures, but the electric share is big, and in an apartment building it can mean a heat pump; the figure also covers baseboard and electric furnaces. A heat pump has no off-season, so it is seen twice a year, spring for cooling and fall for heating, with the reversing valve and defrost control tested. A cooling-only system is seen each spring.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in CUF Book AC Maintenance With Us',
    whyParagraph:
      'We get called by owners in CUF for buildings, from pre-war two-family houses to 1970s apartment blocks. Every technician is licensed and insured, each employee has cleared a background check and drug test, and owners approve the flat price.',
    sharedFaqs: [
      {
        q: 'How do you price AC maintenance for rental units in CUF?',
        a: 'Every unit carries a flat rate, given before any work, and a building is quoted as a single job. What changes the figure is the system type and how hard the indoor and outdoor parts are to reach; climbing to an attic air handler takes longer than opening a closet. Repairs get their own quotes.',
      },
      {
        q: 'What is the right time for a landlord to schedule AC maintenance in CUF?',
        a: 'Spring, once a year, before the hot weeks and before tenants start texting about warm bedrooms. Putting the whole building on one week keeps the paperwork simple. Any unit on a heat pump also needs a fall visit for heating.',
      },
      {
        q: 'What AC upkeep is safe for tenants or building staff to handle?',
        a: 'Fresh filters, open returns and supply vents, weed-free ground around the condensers and new thermostat batteries are all fair game. Only a technician should take a panel off an outdoor unit, handle the copper lines or comb bent fins straight. Tenants pass everything else to the landlord.',
      },
    ],
  },
};
