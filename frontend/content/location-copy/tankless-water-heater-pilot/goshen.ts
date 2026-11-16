import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const goshen: LocationServiceCopy = {
  localParagraph:
    'The old center of Goshen, around SR 28, is older than people expect: Census figures show 35.1% of homes there predate 1940, and nearly a quarter heat with fuel oil, so not every house has a gas line to tap. Without gas, the choice is an electric tankless unit, which often needs panel work in an older house. With gas, plan on a new vent and usually a bigger supply line. Out in the wider township, newer houses are simpler. The quote is fixed before work begins.',
  emergencyParagraph:
    'Unit leaking: shut the cold valve under it, then fuel or breaker. A gas smell sends everyone outside, no switch touched, nothing relit; call the utility from the yard. Carbon monoxide alarm: clear the house. No hot water is hardest on infants, grandparents and the sick. We usually arrive the same day, weekends too.',
  commonIntro:
    'Tankless calls around Goshen usually come from one of these:',
  localFaqs: [
    {
      q: 'Our house in Goshen has oil heat and no gas. Can we still go tankless?',
      a: 'Yes, with an electric unit, but the panel has to carry it, and older panels often can’t without an upgrade. We check the panel and service first. If the upgrade costs more than the change is worth to you, we’ll recommend a new tank instead.',
    },
    {
      q: 'Who issues permits for tankless water heaters in Goshen?',
      a: 'Goshen sits in unincorporated Goshen Township, so Clermont County Public Health handles plumbing permits, and Clermont County Permit Central handles the building and electrical side. Township zoning is separate. We pull the permits the job needs and schedule the inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Tankless water heater installs and repairs for houses in Goshen',
    band1Heading: 'Signs a Home in Goshen Needs Tankless Water Heater Service',
    commonSituations: [
      'A pre-war house near SR 28 with oil heat and no gas service',
      'An older panel that may not carry an electric tankless unit',
      'A township house from the 2000s with a tank near its end',
      'A tankless heater that cuts out when the washer and a shower run together',
    ],
    proseSections: [
      {
        title: 'Switching to a Tankless Water Heater in Goshen',
        body: 'In the old center of Goshen, a house heated by oil may have no gas service at all, which narrows the choice to an electric tankless model and puts the breaker box in charge. Where gas is there, the job is a dedicated flue through the wall and, often, a heavier fuel line. Either way the unit heats water as it’s drawn and mounts on a wall. Size follows how many taps and appliances run together. Clermont County Public Health issues the plumbing permit; we file it. One or two people with a working tank should keep it.',
      },
      {
        title: 'Tankless Water Heater Repair in Goshen, and When You Don’t Need It',
        body: 'Look at the fuel valve and the breaker first. A gas model still draws house current for its board and igniter, so a GFCI trip or a power flicker leaves it dark. Cold water enters through a little screen that clogs with grit; rinse it. A tap opened a sliver may not register as demand, and a cold few seconds when one shower follows another is normal. Fault codes that return, temperature that won’t settle, a unit quitting partway through a shower, ignition or flame sensor faults, scale, or a drip at the unit are ours. We quote both a fix and a replacement.',
      },
      {
        title: 'Tankless Water Heater Maintenance in Goshen',
        body: 'Electric units are common where a house has no gas, so the yearly visit here checks panel connections as well as the descale. Cleaner circulates in one service valve and out the other until the scale every heater grows has dissolved. Then the inlet strainer is washed, gas models have the flue and condensate tube looked over, and a hot tap tells us flow and temperature are right.',
      },
    ],
    whyTitle: 'Why Homeowners in Goshen Choose Us for Tankless Water Heaters',
    whyParagraph:
      'Older houses on oil or electric heat, plus newer homes across the township, make up our tankless work in Goshen. Flat-rate pricing approved first, licensed and insured technicians, and we make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does a tankless water heater cost in Goshen?',
        a: 'Expect one fixed quote to sign off before work. Fuel type, any change to the gas line, flue or breaker box, and where it hangs make the number. With no gas in an older house, panel work is usually the big line. Financing is available, with an instant credit decision on approval.',
      },
      {
        q: 'Would a tankless water heater make sense for my home in Goshen?',
        a: 'Yes, if several fixtures often run together and your gas line and vent, or your panel, can handle it. If the tank still works and the household is small, or reaching the house with gas or more amps would be a big job, a tank swap is the better choice.',
      },
      {
        q: 'Is maintenance needed on a tankless water heater?',
        a: 'Yes, yearly descaling clears out the minerals every unit builds up. If you’re handy, rinsing the inlet filter between visits is easy. We handle the flush through the service valves and anything on the gas side.',
      },
    ],
  },
};
