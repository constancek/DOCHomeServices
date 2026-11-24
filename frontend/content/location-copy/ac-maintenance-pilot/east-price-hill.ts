import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastPriceHill: LocationServiceCopy = {
  localParagraph:
    'Landlords book most of the AC tune-ups we do in East Price Hill, since Census figures show 63.2% of homes here are rented. The older streets are full of pre-1940 houses and two-families that got central air long after the plaster dried, so the air handler usually ends up in a basement corner or up in the attic. The 1960s apartment blocks are booked by their owner or manager. Each unit gets its price before we lift a panel, and a system that needs nothing gets marked that way.',
  commonIntro:
    'Landlords and owners in East Price Hill tend to book a tune-up after one of these:',
  localFaqs: [
    {
      q: 'I rent an apartment in East Price Hill. Can I book AC maintenance for it?',
      a: 'Not when it’s the landlord’s equipment. Text or write the owner or manager about the drip, rattle or weak cooling so a dated record exists. Ohio’s ORC 5321.04 (A)(4) holds a landlord who furnishes air conditioning to keeping it in good and safe working order. We look after the machine, not the lease, so the owner books us.',
    },
    {
      q: 'Can you service the AC in every unit of a two-family or small building?',
      a: 'Yes, and that’s a common job on these streets. We work through each unit on one trip, write down what we found in each, and price any repair separately so you can approve the urgent ones now. Units that need nothing are marked that way.',
    },
  ],
  overrides: {
    ctaLine: 'Unit-by-unit AC tune-ups for rental owners in East Price Hill',
    band1Heading: 'Signs an AC in East Price Hill Is Due for Maintenance',
    commonSituations: [
      'A two-family off Warsaw Avenue where neither unit has a service record',
      'Tenant texts about water around an air handler in the basement',
      'A condenser behind the house buried in weeds by midsummer',
      'Top-floor rooms in an older house that never cool like the ground floor',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in East Price Hill',
        body: 'On a rental here we pull each filter and swap the dirty ones. Outside, the condenser coil gets hosed and the weeds hacked back from the cabinet. Inside, a light on the indoor coil, a flush of the condensate drain and a look in the pan cover the spot where most tenant water complaints begin. Our gauges read the refrigerant; a low charge means a leak, and finding it is priced separately instead of being refilled. We test capacitor, contactor and wiring, check blower and airflow, try the thermostat, then let each system cool through one complete cycle. The owner says yes before any part goes in.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'For landlords in East Price Hill, a spring round pays back most on a unit nobody kept records for, a building bought in the last few months, a system tenants say drips or rattles, or apartments where the top floor cooks while the ground floor stays fine. An AC we looked at last year that still behaves gains little. If a system has quit cooling or iced its lines, that’s AC Repair. Where we’ve already called time on a system, AC Installation & Replacement is the better spend. Window units can do without us. Between visits, owners and tenants can keep filters fresh and registers unblocked.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in East Price Hill',
        body: 'Electricity heats 36.6% of homes in East Price Hill, and heat pumps show up there, mainly in the 1960s apartment buildings, though gas furnaces paired with central air still outnumber them. A straight air conditioner gets one visit before summer. A heat pump never gets an off season, so it’s seen in spring and again in fall, when the reversing valve and defrost board get tested. Mini-split heads get their filters rinsed.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in East Price Hill Book AC Maintenance With Us',
    whyParagraph:
      'Our spring calls here mostly come from rental owners, whether it’s an old two-family off Warsaw Avenue or a block of apartments. Technicians are licensed, insured, background-checked and drug-tested, and every unit’s flat price is agreed first.',
    sharedFaqs: [
      {
        q: 'What does an AC tune-up cost in East Price Hill?',
        a: 'Each unit gets its own flat rate before we touch it. Central air or heat pump sets part of it, and access sets the rest, since an attic air handler in an old two-family takes longer than a hall-closet unit in a 1960s block. Repairs are listed unit by unit for the owner’s approval.',
      },
      {
        q: 'How often do rental air conditioners need a tune-up?',
        a: 'Once a year, and spring is the time, before tenants start calling about the heat. Scheduling every unit in the same week keeps the records simple. Heat pumps are the exception; they heat in winter too, so they should be looked at again each fall.',
      },
      {
        q: 'What can tenants or owners do between AC visits?',
        a: 'Change a filter that looks dusty, keep weeds and trash away from the outside unit, don’t block registers with furniture, and keep thermostat batteries fresh. Opening the condenser cabinet, handling refrigerant lines or bending fins back should be left to a technician.',
      },
    ],
  },
};
