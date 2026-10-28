import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Hyde Park furnace work is mostly gas furnaces sitting in houses far older than they are. Census figures show 51.6% of homes here predate 1940, so ducts got threaded in later through walls and floors never meant to hold them, and the upstairs rooms tend to go cold first. Roughly a third of homes run on electric heat, so electric furnaces turn up as well. We test, name the failed part and give you the price before any repair.',
  emergencyParagraph:
    'By NOAA records, the CVG station averages about 100 nights a year at or below freezing. Losing the furnace then puts a baby, an older relative or anyone ill at risk, and pipes can freeze. We work on gas and electric furnaces, and most Hyde Park calls get a same-day visit, weekends too.',
  commonIntro:
    'Hyde Park heat calls mostly involve gas furnaces in older houses and apartment buildings. The faults that turn up again and again:',
  localFaqs: [
    {
      q: 'My Hyde Park apartment is cold. What does my landlord have to do?',
      a: 'Hyde Park is a City of Cincinnati neighborhood, and the city sets a rental heat floor. If tenants don’t control the heat, the landlord must hold the unit at 70 degrees or warmer after 24 hours of outdoor temperatures below 60. Send the complaint to your landlord in writing. The owner books the repair; our job is furnaces, not leases.',
    },
    {
      q: 'Why are the upstairs rooms in my Hyde Park house so cold?',
      a: 'More often the ducts than the furnace. Houses from before 1940 got their upstairs runs added later, and those runs are long and skinny. We start with blower speed, the filter and the dampers. If the furnace turns out to be heating fine, we tell you, and you skip paying for a repair it never needed.',
    },
  ],
  overrides: {
    ctaLine: 'Furnace repair for Hyde Park’s older houses and apartments',
    band1Heading: 'Common Furnace Problems in Hyde Park Homes',
    commonSituations: [
      'A gas furnace that fires, then drops out a few minutes later',
      'Third-floor bedrooms in a pre-1940 Hyde Park house that stay cold',
      'A blower humming away but moving little air through old ducts',
      'An apartment closet furnace tripping its limit switch behind a clogged filter',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Most no-heat calls in Hyde Park start with the same short list. Thermostat on heat, batteries fresh. Breaker on, and the power switch near the furnace flipped up. A filthy filter overheats a furnace until it shuts itself off, and plenty won’t run unless the front panel sits snug. Fix one of those and you can skip us. If you smell gas, keep hands off the switches, relight nothing, get out and call the gas company from the sidewalk. A CO alarm means everyone out before anything else. Past that, our technician tests the furnace, explains what broke and gets your okay on the price first.',
      },
      {
        title: 'Repair or Replace Your Hyde Park Furnace?',
        body: 'Go by the furnace, never the house. Lots of pre-1940 Hyde Park homes have a furnace only a few years old, and a dead igniter or inducer motor on that unit gets fixed. A cracked heat exchanger is a different call: carbon monoxide can reach the rooms through it, so we shut the furnace off and talk replacement, with no patch jobs. Replacing means a permit, and we handle it. Until then, keep an eye on the Duke Energy Ohio gas bill. A furnace that short cycles, or runs nonstop on mild days, costs more each month, and that fault is often fixable.',
      },
    ],
    whyTitle: 'Why Hyde Park Homeowners and Landlords Call Us',
    whyParagraph:
      'Hyde Park’s old houses and apartment buildings tuck furnaces into odd spots, and we’ve found most of them. Every technician is licensed, insured and background-checked, and you agree to the price before anyone starts.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Hyde Park?',
        a: 'No honest price exists until the fault is found. A new flame sensor goes in fast; a blower motor in a cramped basement or apartment closet eats more time. You get one flat-rate figure to approve before work begins, with no overtime added for nights or weekends.',
      },
      {
        q: 'Should I repair or replace my Hyde Park furnace?',
        a: 'Read the label on the furnace, not the date on the house. A single bad part in an otherwise healthy furnace usually earns a repair. Cracks in the heat exchanger mean carbon monoxide risk, and we won’t patch those. If replacing is a real option, you get both prices next to each other.',
      },
      {
        q: 'Why is my Hyde Park furnace blowing cold air?',
        a: 'Thermostat on heat, fan on auto rather than on, and a fresh filter come first. When the burners catch and then go out, the flame sensor is often dirty. When they never catch, the igniter or gas valve is the likely fault, and Hyde Park homeowners should leave that to a technician.',
      },
    ],
  },
};
