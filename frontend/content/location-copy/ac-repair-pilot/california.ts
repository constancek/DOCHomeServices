import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const california: LocationServiceCopy = {
  localParagraph:
    'Most California AC calls are at owner-occupied houses built in the middle of the last century, where the Little Miami meets the Ohio. Census figures show half of them date from 1968 or earlier, and gas heats most homes, so the usual setup is a condenser out back feeding a coil on a gas furnace. When the furnace blower fails, the cooling stops with it. Low yards near the river also flood at high water. We find the fault and quote it before any work.',
  emergencyParagraph:
    'Weather Service records from Wilmington show Cincinnati averaging 21 days a year that hit 90 degrees. Older residents and anyone living alone suffer first once cooling stops. Split systems over gas or propane furnaces, and the occasional heat pump, all get fixed by our crews, typically that day, Saturday or Sunday included.',
  commonIntro:
    'California’s homes are mostly mid-century single-family houses with gas heat, and no multi-unit buildings at all. These AC faults show up most:',
  localFaqs: [
    {
      q: 'Is my California AC safe to run after the river comes up?',
      a: 'Not if water reached it. At 47 feet on the Cincinnati river gauge, high water starts getting into some California yards, and higher crests reach basements. A condenser or furnace that sat in water needs its wiring, motors and controls tested, so leave the breaker off until we’ve looked at it.',
    },
    {
      q: 'Do I need a permit to replace my AC in California?',
      a: 'Not for a repair. Replacing an air conditioner inside Cincinnati city limits takes a mechanical permit from the city’s Department of Buildings & Inspections, and California sits inside those limits. We pull the permit as part of the job, so the paperwork isn’t yours to chase.',
    },
  ],
  overrides: {
    ctaLine: 'AC repair for California homeowners along Kellogg Avenue',
    band1Heading: 'Common AC Problems in California Homes',
    commonSituations: [
      'A condenser in a low yard needing its coil cleared of silt and its wiring tested after high water',
      'A coil on a 1960s gas furnace frosting over behind a neglected filter',
      'Ductwork from the 1950s leaving the far bedrooms warmer than the living room',
      'A heat pump in a 2000s house switching on and off every few minutes',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'With so few renters here, nobody else needs to sign off before you troubleshoot. Start by changing the filter, putting the thermostat in cool mode and resetting a tripped breaker one time. If cold air returns, you don’t need us. Kill the power at the outdoor disconnect, then rinse grass clippings and leaves out of the condenser fins with a garden hose. Bring us in if that outside fan stays frozen while the compressor hums, or white frost forms along the thicker refrigerant pipe. Electrical parts and refrigerant levels get tested, you hear what failed, and a flat price arrives before any wrench turns.',
      },
      {
        title: 'Repair or Replace Your California AC?',
        body: 'Judge the machine, not the house. A condenser younger than about 12 years with one dead capacitor or motor is a sensible fix. Older units with a locked compressor or a weeping evaporator coil generally make replacement the cheaper path. Many homes here went up between 1940 and 1969, so central air was often bolted onto ductwork meant only for furnace heat. Measure those runs before anybody picks a tonnage, or the new unit will short-cycle. Until something changes, grime on the outdoor fins or a slow leak keeps the compressor running longer, and Duke Energy Ohio meters every added minute.',
      },
    ],
    whyTitle: 'Why California Homeowners Call Us',
    whyParagraph:
      'Almost nine in ten California homes are lived in by their owners, so you talk with the technician directly. Everyone we send is licensed and background-checked, the flat rate needs your approval first, and overtime never applies.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in Cincinnati’s California neighborhood?',
        a: 'Nobody can give a fair figure before the fault is found. A capacitor on a recent condenser is a modest job, and a compressor for an older unit is not. Once we’ve tested it, you get one flat rate to accept or decline, and a weekend visit costs what a weekday one does.',
      },
      {
        q: 'Should I repair or replace the AC in my California house?',
        a: 'Repair it when the unit still has life and one part quit. Replace it once the compressor fails or the breakdowns come back every July. In a house from the 1950s or 1960s, have the ducts checked before sizing a new system, because an oversized one cools in short bursts and leaves the rooms damp.',
      },
      {
        q: 'Why is my California AC blowing warm air?',
        a: 'Check the breaker and the filter first. If the outdoor unit hums but its fan sits idle, the capacitor has probably failed. If the fan turns and the vents still blow warm, suspect a refrigerant leak. With a gas or propane furnace, a blower that won’t start stops all the airflow, which is a different fault.',
      },
    ],
  },
};
