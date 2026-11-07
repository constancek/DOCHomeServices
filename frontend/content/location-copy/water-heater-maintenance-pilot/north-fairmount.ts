import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northFairmount: LocationServiceCopy = {
  localParagraph:
    'North Fairmount is nearly all single-family houses. Census figures put 63.9% at 1939 or earlier, so on these hillside lots the tank usually sits in a basement with older venting, a gas line we’ll inspect and a drain valve that hasn’t budged in a while. Half the houses are rented, and owners of one or two houses book many of our visits. Rinse, anode and relief valve are the core of it. You’ll know the flat rate first, and if the tank isn’t worth it, we’ll tell you.',
  emergencyParagraph:
    'Some trouble skips maintenance entirely. Tank dripping: close the cold inlet handle above it, then cut gas or power. Any odor of gas: walk everyone out with switches and pilot left alone, and phone the gas company outside. Carbon monoxide alarm: same, out first. Repeated relief valve discharge or cold taps also count. Most we reach same day, weekends included.',
  commonIntro:
    'On these older hillside streets, a request for service usually starts with one of these:',
  localFaqs: [
    {
      q: 'I own one rental house in North Fairmount. Is yearly water heater service worth it?',
      a: 'For a working tank with no service record, yes. One visit a year catches a worn anode or a sticking relief valve before your tenant calls about cold water. Ohio’s ORC 5321.04 puts working appliances, (A)(4), and reasonable hot water, (A)(6), on the landlord. We service water heaters, not leases.',
    },
    {
      q: 'I rent a house in North Fairmount. Can I book the water heater service?',
      a: 'Tell your landlord in writing first. The heater is theirs, and so is the decision to book. If they ask us, we’ll schedule around you. If the tank is leaking or there’s no hot water at all, say so in that note; that’s a repair visit, not a service.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater tune-ups for older houses in North Fairmount',
    band1Heading: 'Signs a Water Heater in North Fairmount Is Due for Maintenance',
    commonSituations: [
      'A hillside house whose basement tank has never had a drain hose on it',
      'A heater that pops and knocks when the burner comes on',
      'A single-family rental where the landlord has no service record for the tank',
      'The last shower of the evening running lukewarm',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in North Fairmount',
        body: 'Our technician runs a hose from the base of the tank to the floor drain, drains it and rinses until the water clears. The reason: water leaves minerals behind when it’s heated, they gather under the burner, and a crusted bottom knocks and shortens showers. The anode, a sacrificial rod that corrodes ahead of the tank steel, gets pulled and judged; a spent one is quoted before anything is swapped. The relief valve is opened by hand and its discharge line followed to its end. Gas units: burner, pilot, flue and gas connection. Electric: elements and thermostats. Shutoff and supply lines on every visit. Approval comes before any repair.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'On these hillside streets, a service makes sense for a working tank that’s never had its sediment drained, which is typical in basements this old. Add a purchase with no paperwork, the first knocking, and each rental you own. It makes no sense for a tank leaking through its steel, because only a new heater fixes that. When hot water turns rusty or the heater is near the end of its run, we’ll tell you to save toward replacing it. Between visits, an owner with a hose can empty a bucket from the drain. We suggest annual service.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in North Fairmount',
        body: 'Tank heaters on the hill get drained, rinsed and an anode check. Tankless heaters need a different routine: descaling, where a cleaning solution is pumped through the heat exchanger, and a cleaned inlet filter. With gas service common in North Fairmount, burner and vent checks fill most visits, and electric models get their elements and thermostats tested. We only bring up tankless if the tank is ready to be replaced.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in North Fairmount Book Water Heater Maintenance With Us',
    whyParagraph:
      'Every technician we send is licensed, insured, background-checked and drug-tested. The flat rate gets your sign-off up front, Saturday and Sunday cost the same as Tuesday, and the family has run the company since 1993.',
    sharedFaqs: [
      {
        q: 'How is a water heater service priced in North Fairmount?',
        a: 'One flat price, quoted at the house and agreed before work. It turns on tank or tankless, the fuel, and access. A basement you reach by a steep outside stair takes more time than a utility room off the kitchen. Weekend visits carry no extra charge.',
      },
      {
        q: 'How often should I have a water heater serviced?',
        a: 'Yearly is what we recommend on the hill. Knocking or popping before the year is out means sediment, so have it looked at early; a thin layer usually rinses out more easily than a thick one.',
      },
      {
        q: 'Can I drain the water heater myself to clear sediment?',
        a: 'Yes, within limits. Opening the drain valve and letting a bucket run out is fine for a handy owner. In houses from before 1940, though, the old valve may refuse to close tight afterward. The gas burner and relief valve test we’d rather do ourselves.',
      },
    ],
  },
};
