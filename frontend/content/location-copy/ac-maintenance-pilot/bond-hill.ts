import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bondHill: LocationServiceCopy = {
  localParagraph:
    'Bond Hill is mostly pre-war and 1940s houses, many of them doubles, and that decides how a spring tune-up goes. Census figures show 44.5% of homes here were built in 1939 or earlier, decades before central air, so ducts were threaded in afterward and the blower often lives in the attic or a cramped basement corner. Close to half the homes are rented, and on a double the owner usually books both sides at once. We name a flat price before starting, and say so when a system needs nothing.',
  emergencyParagraph:
    'Call in a repair crew, not a tune-up, when a house won’t cool in a heat wave. Refrigerant lines furred with frost also count; set the thermostat to off. Water through plaster, or a breaker that trips after a reset, means keep the AC off. Infants and older relatives are most at risk. Most calls get same-day visits, weekends too.',
  commonIntro:
    'These are what usually bring owners of pre-war singles and doubles to call us in Bond Hill:',
  localFaqs: [
    {
      q: 'Can you do both sides of a double in Bond Hill on the same visit?',
      a: 'Yes, and most owners here ask for exactly that. Each side gets its own quote before we begin. Tenants should send AC complaints to the landlord in writing; under Ohio’s ORC 5321.04 (A)(4), supplied air conditioning has to be kept in good and safe working order. We service air conditioners, not leases.',
    },
    {
      q: 'Does AC work need historic review in the Bella Vista district of Bond Hill?',
      a: 'A tune-up leaves the outside of the house as it was, so design review doesn’t come into it. Bella Vista is a local historic district, though, so if a check ever leads to moving or replacing a condenser on one of those streets, we check with the city before touching the exterior.',
    },
  ],
  overrides: {
    ctaLine: 'Spring AC checkups for pre-war singles and doubles in Bond Hill',
    band1Heading: 'Signs an AC in Bond Hill Is Due for Maintenance',
    commonSituations: [
      'Two condensers side by side behind a double, neither with a service date',
      'A 1930s attic where the drain line from the blower hasn’t been flushed in memory',
      'Upstairs rooms in an older house sitting warm while the first floor feels fine',
      'A tenant texting about a squeal when the outdoor unit starts',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in Bond Hill',
        body: 'On a pre-war house here, the attic takes longest. A clean filter goes in first. With a flashlight on the evaporator coil, we look for dust mats, then flush the drain line and peer into its pan, since a spill above a bedroom ends as a brown ring on old plaster. Outside, the condenser gets a hose rinse, and we pull leaves and grass from its feet. Gauge readings show the charge; a short charge means a leak somewhere, quoted apart as a repair. We meter the capacitor, contactor and wiring, watch blower airflow, try the thermostat, and let one complete cooling cycle play out before we pack up.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'Pay for the visit when nobody kept receipts for the AC, the deed is fresh, the drain has spilled, some new noise has turned up, or the top floor stays stuffy. Owners of a double get both systems looked at on one trip. Pass on it if last year’s check went fine and nothing has changed since. An AC that won’t cool, or one with ice on the copper, belongs with AC Repair instead. If we’ve told you a system is worn out, bank the money for its replacement. Window units aren’t ours to service. Between visits, swap dirty filters and pull vines away from the yard unit.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in Bond Hill',
        body: 'Gas heats most homes in Bond Hill, so the usual arrangement is a gas furnace and a central air conditioner sharing one set of ducts. That AC works summers only and needs its one spring check. Where a house has a heat pump, it heats and cools, so it needs a spring check plus a fall one that covers the defrost controls and reversing valve.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Bond Hill Book AC Maintenance With Us',
    whyParagraph:
      'Spring here means attic blowers over plaster ceilings and doubles running two condensers. Our technicians carry licenses and insurance, each one passed a background screen and drug test, and nothing starts until you sign off on the flat price.',
    sharedFaqs: [
      {
        q: 'What sets the price of an AC tune-up in Bond Hill?',
        a: 'We charge a flat rate, named before we start. The kind of system and how hard it is to get at the blower and condenser set it, and a 1930s attic takes more effort than a basement. If we find a problem, that repair is quoted on its own.',
      },
      {
        q: 'How many AC tune-ups does a house need each year?',
        a: 'One, in spring, before the hot stretch arrives and the calendar fills. A heat pump is the exception and needs a second check in the fall, because it heats too. On a double, servicing both sides together keeps the dates lined up.',
      },
      {
        q: 'Which parts of AC care can I take on myself?',
        a: 'Keep a fresh filter in, keep leaves and vines off the condenser, leave the registers and returns clear and replace the thermostat batteries. Opening the outdoor cabinet or touching refrigerant lines should wait for a technician.',
      },
    ],
  },
};
