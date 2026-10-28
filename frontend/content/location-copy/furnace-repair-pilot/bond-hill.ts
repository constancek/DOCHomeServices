import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bondHill: LocationServiceCopy = {
  localParagraph:
    'Bond Hill heat is mostly gas. Census figures show 70.7% of homes on utility gas, which Duke Energy supplies across the city. About 44.5% of the houses went up before 1940, and a lot of them are doubles or small multi-family buildings, so one Bond Hill address can hold two or more furnaces and a landlord who owns several units. Ductwork in those older houses was often added after the fact. We find what failed and quote the repair before anything is taken apart.',
  emergencyParagraph:
    'A dead furnace matters most in a Bond Hill household with an infant or an aging parent. The CVG weather station logs close to 100 freezing nights in a normal year, by NOAA’s count, and an unheated double can split its pipes. Our technicians usually get gas and electric furnaces running on the day you phone, weekends included.',
  commonIntro:
    'Bond Hill runs mostly on gas furnaces in prewar houses, doubles and small apartment buildings. These problems come up most:',
  localFaqs: [
    {
      q: 'My Bond Hill landlord hasn’t fixed the heat. What are the rules?',
      a: 'Put the complaint to your landlord in writing first. In Bond Hill units where tenants can’t set their own heat, the Cincinnati Health Department wants at least 70 degrees inside once it has been under 60 outdoors for 24 hours, and Ohio law adds that supplied heating must be kept safe and working. We fix furnaces, not leases.',
    },
    {
      q: 'Who issues the permit to replace a furnace in Bond Hill?',
      a: 'Bond Hill is part of the City of Cincinnati, so the city’s Department of Buildings & Inspections handles the mechanical permit for a replacement. Work done in the city without a permit can draw an investigation fee equal to the permit fee, so we file it before installation day and you never touch the paperwork.',
    },
  ],
  overrides: {
    ctaLine: 'Bond Hill furnace repair for houses, doubles and small buildings',
    band1Heading: 'Common Furnace Problems in Bond Hill Homes',
    commonSituations: [
      'Two furnaces in a Bond Hill double, one heating and one not',
      'A worn igniter on a gas furnace in a pre-1940 basement',
      'Upstairs rooms in a 1920s house staying cold while downstairs is warm',
      'A rental unit slipping under 70 degrees during a cold snap',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Go down the list before calling. The thermostat needs heat mode and good batteries. Somebody may have flipped the furnace’s power switch off, so check it along with the breaker and the filter. Seat the blower door firmly, because a loose panel stops many furnaces from firing. Any one of those can bring the heat back on its own. Phone us when burners light and die, the blower stays silent, or one half of a Bond Hill double runs cold. A gas smell means walking out without touching a switch or a pilot and calling the gas company from the sidewalk. We inspect, explain, price for approval and test.',
      },
      {
        title: 'Repair or Replace Your Bond Hill Furnace?',
        body: 'Plenty of 1920s Bond Hill doubles have a basement furnace that’s only a few winters old, so the age of the building tells you little. Igniters, flame sensors, inducer motors and limit switches wear out on schedule, and replacing them on a healthy furnace makes sense. A cracked heat exchanger is where we stop talking money, because carbon monoxide can work its way upstairs through the crack, and we’ll point it out to you before leaving. Should your carbon monoxide alarm sound, empty the house, then phone. Replacement means a city permit, and that’s our job. Months earlier, a gas bill rising in mild weather usually hints at trouble.',
      },
    ],
    whyTitle: 'Why Bond Hill Homeowners and Landlords Call Us',
    whyParagraph:
      'Bond Hill owners and landlords get a licensed, insured technician who names the fault and prices it up front. Family owned since 1993, we bill no overtime, and a Bond Hill repair that isn’t right costs you nothing.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Bond Hill?',
        a: 'We diagnose before giving a number, because the fault sets the price. Replacing an igniter on a Bond Hill basement gas furnace is a modest job, and an inducer motor or control board is bigger. In a double, each furnace gets its own price. You approve one flat rate before work, with no overtime charge.',
      },
      {
        q: 'Is it worth fixing an old furnace in a Bond Hill house?',
        a: 'Usually, if the heat exchanger is intact and only one part has failed. The house may be a century old while the furnace is far younger, so its own condition decides. A cracked exchanger or a furnace that keeps needing major parts is the point where we lay out replacement as well.',
      },
      {
        q: 'Why is my Bond Hill furnace running but blowing cold air?',
        a: 'A thermostat parked on fan, or a filter caked with dust, explains plenty of these calls. When both look right, the burners are probably catching and then shutting down, usually over a coated flame sensor or a limit switch that trips because old Bond Hill ductwork can’t move enough air. We pin it down before quoting.',
      },
    ],
  },
};
