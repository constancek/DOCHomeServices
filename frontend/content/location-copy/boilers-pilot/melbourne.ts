import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const melbourne: LocationServiceCopy = {
  localParagraph:
    'Melbourne is small and older than most of Campbell County’s newer suburbs. Census figures put 30.5% of its homes at 1939 or earlier, and half were built before 1958. Those older riverside houses are where radiators still turn up, and they are most of our boiler work here. Repairs tend to be the slow kind: a pump that has weakened, a valve that sticks, pressure that leaks away. We find the cause and agree the price with you before any work starts.',
  emergencyParagraph:
    'A Melbourne boiler that quits in January faces nights near the normal low of 23F, according to NOAA records at CVG. Babies, older relatives and anyone recovering from illness shouldn’t sit in a cooling house, and pipes running to radiators on outside walls are at risk if the cold lasts. Most no-heat calls get a same-day visit, weekends included.',
  commonIntro:
    'Melbourne has only a couple of hundred homes, and the boiler calls come from its older houses. What we usually find:',
  localFaqs: [
    {
      q: 'Does it matter what fuel my Melbourne boiler burns?',
      a: 'It helps the technician come prepared. Only 15.2% of Melbourne homes heat with utility gas, going by Census figures, and some use fuel oil, so not every boiler here is gas-fired. Mention the fuel when you book. The checks you can make yourself, from the thermostat to the radiators, are the same either way.',
    },
    {
      q: 'Water got into my Melbourne basement. Can I switch the boiler back on?',
      a: 'Hold off. Water that reached the burner, gas or oil controls, or wiring can leave a boiler unsafe to fire, even once everything looks dry. Turn the power off at the boiler switch if you can do it without standing in water, and have the controls and burner inspected before it runs again.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Melbourne’s older riverside homes',
    band1Heading: 'Common Boiler Problems in Melbourne Homes',
    commonSituations: [
      'A 1930s house where the radiators heat slowly on the coldest mornings',
      'A boiler that lights, then shuts down with a flashing fault light',
      'Water weeping from a radiator valve onto the floor',
      'Pressure that slips a little more each morning after a top-up',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Before booking, make sure the thermostat is set to heat and turned above room temperature, and that the boiler’s switch hasn’t been knocked off. Bleed radiators that are warm low and cold high. On a hot water boiler, read the gauge after bleeding and refill if it is low. Heat back on means no visit needed. We should look when the gauge keeps dropping, the flame is yellow instead of blue, the boiler bangs or kettles, or it locks out and won’t reset. If a carbon monoxide alarm goes off, get everyone out of the house, then call 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Melbourne?',
        body: 'Read the label on the boiler itself; an old house can have a much newer boiler, and that date is the one that counts. Worn pumps, sticking valves, failed igniters and waterlogged expansion tanks are all repairs. A leak from the vessel, a section or the heat exchanger, or a boiler that has needed fixing every winter, is when we add a replacement price to the quote. A yearly service before October, about 60 to 90 minutes, checks pressure, controls, the burner, the vent and the expansion tank, and looks for leaks.',
      },
    ],
    whyTitle: 'Why Melbourne Homeowners Call Us',
    whyParagraph:
      'Almost every Melbourne home is owner-occupied, so the person who calls is usually the one living with the cold. Our technicians are licensed, insured and background-checked, and the flat price comes before the work.',
    sharedFaqs: [
      {
        q: 'How much is boiler repair in Melbourne?',
        a: 'The price follows the problem. Restoring pressure or clearing air is a short visit, a new circulator takes more time, and a cracked section is a major repair. You get a flat-rate quote after the diagnosis, the work waits for your approval, and there are no overtime charges.',
      },
      {
        q: 'Can my Melbourne boiler be repaired, or does it need replacing?',
        a: 'Most failed boilers can be repaired, because the vessel outlasts the parts around it. When the vessel or heat exchanger leaks, or you have paid for repairs several winters in a row, replacement is worth pricing. We show you both figures, and financing is available.',
      },
      {
        q: 'Why are some radiators cold in my Melbourne house?',
        a: 'In most cases there is air in them or the system pressure is low. Bleed the cold ones and refill the boiler to its normal reading. A radiator that stays cold after that usually has a stuck valve, and if a whole floor stays cold, a zone valve or pump has likely failed.',
      },
    ],
  },
};
