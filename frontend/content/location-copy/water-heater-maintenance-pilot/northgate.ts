import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northgate: LocationServiceCopy = {
  localParagraph:
    'Northgate is mostly 1960s and 1970s houses, and more of them heat with electricity than with gas: 50.3% against 45.2%, by Census figures. So we arrive expecting either kind of tank, and the visit bends to suit, with elements and thermostats on one and burner and flue on the other, plus the same flush and anode check for both. About one household in five rents, some in large complexes. You hear the price before work starts, and you hear it from us if the tank isn’t worth it.',
  emergencyParagraph:
    'The tank is leaking: close its cold-water valve up top, then gas or breaker. You smell gas: leave, no switches, no relighting, and phone the gas company once clear of the house. The carbon monoxide alarm sounds: everyone out. The relief valve keeps blowing, or the taps run cold. Each is a repair; most get a same-day visit, weekends included.',
  commonIntro:
    'Gas or electric, a tank in Northgate tends to show one of these when it’s due:',
  localFaqs: [
    {
      q: 'Our house in Northgate has an electric water heater. What do you check on it?',
      a: 'The same flush and anode check a gas tank gets, then the electrical side. Each heating element is tested, both thermostats are checked so the upper and lower halves of the tank work together, and we look at the wiring where it enters the heater. A burned-out lower element often shows up as hot water that quits early.',
    },
    {
      q: 'I rent in one of the bigger complexes in Northgate. Can I book this?',
      a: 'Not for the landlord’s tank; management books that. Ohio’s ORC 5321.04 holds landlords to safe working appliances in (A)(4) and reasonable hot water in (A)(6). Tell the office in writing if the heater pops or runs cold early. We maintain heaters, not leases, and we’re glad to schedule with the manager.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly service for gas and electric water heaters in Northgate',
    band1Heading: 'Signs a Water Heater in Northgate Is Due for Maintenance',
    commonSituations: [
      'An electric tank where the hot water gives up halfway through a shower',
      'A gas tank in a 1960s basement that crackles as the burner fires',
      'A drain valve beading water where it threads into the tank',
      'A house bought with a tank of unknown age and no service sticker',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Northgate',
        body: 'Drain and flush comes first: the tank empties through a hose until the water clears, carrying out the minerals that had settled on the bottom. We take out the anode rod, which corrodes so the tank doesn’t, and price a new one if it’s spent. The temperature and pressure relief valve is test-lifted, and its discharge pipe checked for a clear run. Because so many houses in Northgate run on electricity, elements and thermostats get as much of our time as burner, pilot, venting and gas line do on gas units. The shutoff valve and supply connections close it out. Repairs are priced before they’re done.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Book it for a tank that works and has never been flushed, a house you just bought without a service record, popping that has only just started, or a rental with more than one heater. Don’t book it when water is coming from the tank body; that heater is beyond service, and flushing won’t stop the leak. If the hot water comes out rusty or the tank is about used up, we’ll say plainly that you should keep the money for a new one. Between yearly visits, a handy owner can draw a little off the valve to see what comes out.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Northgate',
        body: 'A tank is flushed and gets its anode looked at. A tankless heater is descaled, with a cleaning solution circulated through its heat exchanger, and its inlet filter cleaned. In Northgate the split between electric and gas homes is close to even, so we carry the meter for one and the combustion checks for the other. Tankless comes up as an option if you ask, never as a pitch.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Northgate Book Water Heater Maintenance With Us',
    whyParagraph:
      'Electric and gas tanks in 1960s and 1970s houses are what we usually find in Northgate. Licensed, insured, background-checked technicians, a flat price you see first, and no overtime for a Saturday or Sunday visit.',
    sharedFaqs: [
      {
        q: 'How is a water heater service priced in Northgate?',
        a: 'As one flat rate, quoted before we begin. Tank or tankless, electric or gas, and how easy the heater is to get at set the figure. An electric tank standing in an open basement is usually a short job. Any part we recommend, such as an element or anode, is priced on its own.',
      },
      {
        q: 'How often should our tank be serviced?',
        a: 'Yearly is what we tell most homeowners in Northgate. Sooner if it starts popping or rumbling: on a gas tank that’s the burner heating through sediment, and on an electric one the lower element can end up buried in it.',
      },
      {
        q: 'Can I drain the tank myself?',
        a: 'On an electric tank, switch the breaker off first; then a handy owner can let some water out of the drain valve into a pail. Leave us the valve that might not reseal, anything on a gas burner, and the relief valve test. Draining doesn’t touch the anode either; that takes tools.',
      },
    ],
  },
};
