import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAiry: LocationServiceCopy = {
  localParagraph:
    'Mount Airy splits into two kinds of tank job. By Census figures, 39.1% of homes are in buildings of five or more units and 62.3% are rented, so many heaters stand in apartment closets over drain pans and get serviced when the owner schedules it. The houses, where the median home dates from 1964, keep the tank in the basement, and those visits run simpler. You’ll have the price before any work, and we’d rather tell you a tank is done than charge you to flush it.',
  emergencyParagraph:
    'These skip the tune-up. Leak from the tank: cold supply on top closed, then gas or breaker off. Gas smell: out of the unit, nothing switched, nothing relit, gas company called from outside. Carbon monoxide alarm: clear the building. A relief valve that runs constantly or zero hot water: repair. Most get seen same day, weekends included.',
  commonIntro:
    'Closet heaters and basement tanks in Mount Airy give the same few signs when they’re due:',
  localFaqs: [
    {
      q: 'I manage an apartment building in Mount Airy. How does a water heater service day work?',
      a: 'You give tenants notice and we go unit to unit. Each closet heater is drained and flushed, the drain pan and its outlet checked, the anode inspected and the relief valve tested. You get a note on every unit and a price for any repair before it happens.',
    },
    {
      q: 'Is the landlord responsible for the water heater in my apartment in Mount Airy?',
      a: 'Yes, in Ohio it’s on the owner. ORC 5321.04 (A)(4) covers keeping supplied appliances working and safe, and (A)(6) covers a reasonable supply of hot water. Report popping or showers running cold to your manager in writing. If the building runs one big shared heater, that’s management’s decision. We look after heaters, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly water heater service for apartments and houses in Mount Airy',
    band1Heading: 'Signs a Water Heater in Mount Airy Is Due for Maintenance',
    commonSituations: [
      'Closet heaters in a 1970s building, each over a drain pan gone rusty',
      'A basement tank in a house off Colerain Avenue that has started to pop',
      'One unit’s hot water quitting well before its neighbors’',
      'A house bought this spring with a heater and no paperwork',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Mount Airy',
        body: 'The visit centers on sediment. Water carries minerals that settle on the tank bottom, and heating through that layer is what makes the popping and shortens the hot water. We drain and flush, and in a closet we check that the drain pan and its outlet are clear so a drip won’t reach the unit below. The anode, which takes the corrosion so the tank wall doesn’t, is inspected and quoted if finished. We work the relief valve and trace its pipe. Gas tanks get burner, pilot, vent and gas connection checks; electric, elements and thermostats. Shutoff and supply lines too. Nothing is replaced without your approval.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'A building in Mount Airy with a tank in every unit gains the most, because one day covers them all. A working tank never flushed, a house bought with no records, or a heater that just started to pop are good reasons too. A tank with water seeping from the shell isn’t; that’s a replacement job, and a flush won’t fix the steel. Neither is a heater giving rust-tinted water or one close to retirement, where we’ll tell you to bank that money for the new one. A handy homeowner can let some water out between visits. For most, one visit a year is plenty.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Mount Airy',
        body: 'Both gas and electric tanks turn up in Mount Airy. Every tank is flushed and has its anode inspected; on gas, the burner and flue get attention, and on electric, each element and thermostat is tested. A tankless heater is descaled by pumping cleaning solution through the heat exchanger, and the small inlet filter gets cleaned. House owners who want to weigh tankless at replacement time can ask.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Mount Airy Book Water Heater Maintenance With Us',
    whyParagraph:
      'Apartment closets and 1960s basements are the two setups we see most in Mount Airy, and each visit is planned around which one it is. Licensed, insured, background-checked technicians, and a price you approve first.',
    sharedFaqs: [
      {
        q: 'How much does a water heater service cost in Mount Airy?',
        a: 'It’s a flat rate set before any work. Tankless units, gas burners and cramped closets each add time, so the figure follows the heater type, fuel and access. Apartment buildings are priced unit by unit, you approve first, and weekend appointments carry no overtime.',
      },
      {
        q: 'How often should water heaters in an apartment building be maintained?',
        a: 'Once a year is the usual advice, for apartments and houses alike. If a unit’s tank starts popping or rumbling before its date, book it sooner, because that tank is collecting sediment faster than the rest.',
      },
      {
        q: 'Can I flush the water heater in my house myself?',
        a: 'In a house, yes, up to a point: a pail of water from the drain valve now and then is fine if you’re handy. Old valves that may not reseal, anything on a gas burner and the relief valve test are for us. In an apartment, leave the tank alone and tell the landlord.',
      },
    ],
  },
};
