import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const union: LocationServiceCopy = {
  localParagraph:
    'Most Union furnaces are the ones the builder installed. Census figures date 80.1% of homes here to 2000 or later, so plenty of original equipment has reached the stage where igniters, inducer motors and flame sensors wear out. A little over half of Union heats with gas and most of the remainder with electricity, so our days are split between gas furnaces and electric air handlers. We test the system, name the failed part and quote it before picking up a tool.',
  emergencyParagraph:
    'A Union house that loses heat becomes urgent fast if someone inside is a baby, an aging parent or unwell. NOAA’s normal January low at CVG sits around 23F, and a few cold days can threaten the water lines. Gas and electric furnaces get a technician the same day on most calls, Saturdays and Sundays as well.',
  commonIntro:
    'Union furnaces are mostly builder-installed systems in subdivisions that went up after 2000, gas and all-electric alike. These are the calls we get most:',
  localFaqs: [
    {
      q: 'Who issues furnace permits for Union homes?',
      a: 'The Boone County Building Department, not city hall, issues the HVAC permit for a furnace replacement in the City of Union. Repairs to your existing furnace don’t require one. If the visit ends with a new furnace, we have the county permit in hand before the old one is disconnected.',
    },
    {
      q: 'My Union house is all electric. What usually fails when the heat stops?',
      a: 'Census figures show 41.8% of Union homes heat with electricity. In an electric furnace the common faults are a burned-out heating element or the relay that switches it on, and a blower motor that won’t start comes next. On a heat pump, the backup heat strips tend to fail on the coldest nights.',
    },
  ],
  overrides: {
    ctaLine: 'Builder furnaces and electric air handlers repaired in Union',
    band1Heading: 'Common Furnace Problems in Union Homes',
    commonSituations: [
      'A builder-installed gas furnace that clicks, tries to light and shuts down',
      'An electric furnace pushing room-temperature air on a freezing night',
      'Water backed up in a Union high-efficiency furnace’s condensate line, so it locks out',
      'A furnace in a newer townhouse or apartment that short-cycles all evening',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Begin with the thermostat, set to heat with new batteries. Then check four things at the furnace: its service switch is on, the breaker is up, the filter is clean and the access door is latched tight, since a loose door keeps most models off. Heat restored? No visit needed. Book us when the burners light and fade, the blower moves cold air, or the breaker won’t stay set. With a gas smell, leave every switch alone, get out and call the gas company from the street. Our technician tests, explains what broke, waits for your okay on price and runs a complete heat cycle afterward.',
      },
      {
        title: 'Repair or Replace Your Union Furnace?',
        body: 'Look at the furnace, not how new the house is. Lots of Union homes still rely on the furnace fitted when the house was framed, and a bad igniter, flame sensor or inducer motor on it is usually fixable. A heat exchanger with a crack is another story: carbon monoxide can pass into the house, so we turn the furnace off, show you the damage and advise a replacement, with the permit handled. Before things get there, read the gas bill. A climbing bill with the same thermostat setting and similar weather usually comes from short cycling or a worn blower.',
      },
    ],
    whyTitle: 'Why Union Homeowners Call Us for Furnace Repair',
    whyParagraph:
      'Union is mostly young subdivisions, so we meet the same builder furnaces street after street and know where they fail. Our technicians are licensed and background-checked, and you approve the price before work starts.',
    sharedFaqs: [
      {
        q: 'What will a Union furnace repair cost me?',
        a: 'Testing comes before any number we give you. A builder-grade gas furnace with a dirty flame sensor is a quick cleaning, while an inducer motor or control board is a bigger bill. Either way there’s one flat price for you to approve up front, and evening or weekend calls cost the same as daytime.',
      },
      {
        q: 'Should I repair or replace my Union furnace?',
        a: 'Read the label on the furnace, not the date on the deed. Most Union furnaces are original to houses from the 2000s, so one failed part is usually worth fixing. A cracked heat exchanger is a safety problem rather than a budget one, and that furnace should go. You get both prices on one page.',
      },
      {
        q: 'Why is my Union furnace blowing cold air?',
        a: 'Confirm the thermostat is set to heat rather than fan, and swap the filter if it’s dirty. With gas, cold air often means the burners fired and then cut off, a sign of a fouled flame sensor or a plugged condensate drain. With an electric furnace, a burned-out element is the likely fault.',
      },
    ],
  },
};
