import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const saylerPark: LocationServiceCopy = {
  localParagraph:
    'Sayler Park is mostly owner-occupied single houses, and Census figures put 50.8% of its homes at 1939 or earlier, old enough to have been built around radiators. In those homes the boiler work is the usual mix of air in the radiators, failing circulators and pressure that won’t hold. Newer houses more often run a gas furnace, which is a furnace repair call, not a boiler one. Either way, we diagnose first and you see the price before we start.',
  emergencyParagraph:
    'The Cincinnati area averages about 100 nights a year at or below freezing, according to NOAA normals for the airport station. When a Sayler Park boiler quits on one of them, a baby, an older parent or someone who is ill shouldn’t sit in the cold, and radiator piping can suffer too. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Sayler Park boiler calls are mostly in older single houses, with some two-families and small apartment buildings. What we fix most often:',
  localFaqs: [
    {
      q: 'Does my Sayler Park house boiler need a state inspection?',
      a: 'Not from the state. Ohio’s boiler inspection law (ORC 4104.04) leaves out private residences and any building of five units or fewer, so long as steam pressure stays at 15 psi or lower and hot water at 160 psi or lower. A Sayler Park house is covered by that exemption, so yearly service is your choice.',
    },
    {
      q: 'My Sayler Park rental has a boiler that keeps quitting. What can I do?',
      a: 'Let your landlord know in writing. Sayler Park is a Cincinnati neighborhood, so the city’s heat rule covers it: a landlord who controls the heat owes tenants 70F indoors once it has been under 60F outside for a day straight. We fix boilers, not leases, and work for whoever books the job.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler service for older Sayler Park homes',
    band1Heading: 'Common Boiler Problems in Sayler Park Homes',
    commonSituations: [
      'An upstairs bedroom radiator that never gets more than lukewarm',
      'A gauge that drops below its normal mark a few days after you refill it',
      'The first cold night of October, and the boiler lights, stops and flashes a code',
      'A two-family where one unit’s zone valve sticks and that floor gets no heat',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Feel each radiator: warm at the base and cold across the top means air, so open the bleed screw with a key until water replaces the hiss. On a hot water boiler, the gauge should then sit at its normal reading; if it’s short, refill. Confirm the thermostat is on heat and the boiler’s power switch hasn’t been flipped. If every room warms, skip the call. Call for a needle that keeps falling, drips, banging, a lockout code or a yellow flame. A gas smell means leaving the house, touching no switches and phoning the gas company from the yard.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Sayler Park?',
        body: 'Sayler Park’s houses run from before 1940 to the postwar years, and the boiler in the basement often isn’t the one the house started with. Its label carries the install date. A tired circulator, a sticky zone valve, an igniter or a flooded expansion tank is a part swap on a sound boiler. Cast iron that has cracked, a vessel or heat exchanger that weeps, or a call every January is when you see a replacement figure next to the repair figure. Owners who book a fall service get about an hour to an hour and a half on pressure, tank, leaks, controls, burner, flue and bleeding.',
      },
    ],
    whyTitle: 'Why Sayler Park Homeowners Call Us',
    whyParagraph:
      'Most Sayler Park homes are owned by the people living in them, and they want a straight answer on repair or replace. Our licensed, insured technicians give one, with a flat price you approve first.',
    sharedFaqs: [
      {
        q: 'How is boiler repair priced in Sayler Park?',
        a: 'Sayler Park boiler work is quoted per job, not per hour. Freeing a stuck zone valve or clearing a lockout is quick; fitting a new circulator pump takes more. When the cause is clear you get one flat-rate number to approve, and weekends cost the same as weekdays.',
      },
      {
        q: 'Should I fix or replace the boiler in my Sayler Park house?',
        a: 'Keep a tight boiler with one failed component; replacing that part is the repair. Retire it when the vessel or heat exchanger leaks or the winters keep bringing repairs. We lay both prices out for you, and a new boiler can be financed.',
      },
      {
        q: 'Why is one radiator cold in my Sayler Park home?',
        a: 'Air, most of the time. Open its bleed screw until water appears, then look at the boiler gauge and refill a hot water system that has dropped. If it’s still cold an hour later, the radiator’s own valve may be stuck, or a zone valve or the pump is on its way out.',
      },
    ],
  },
};
