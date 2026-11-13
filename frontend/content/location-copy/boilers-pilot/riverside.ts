import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const riverside: LocationServiceCopy = {
  localParagraph:
    'Riverside’s homes are newer than its riverfront neighbors’. Census figures give a 1971 median build year and only 25.8% from 1939 or earlier, so most of the neighborhood is on ducted or electric heat. The boilers we do see are in pre-war houses along River Road and some of the apartment buildings. If you have floor or wall vents, our furnace repair page fits better. If you have radiators, we track down the fault and quote it up front.',
  emergencyParagraph:
    'January nights in Cincinnati average a low near 23F under NOAA normals, and a boiler that stops overnight leaves a Riverside home cold by morning. Babies, older relatives and anyone ill feel it first, and radiator piping in a cold building can freeze in a long outage. Most boiler calls are seen the same day, including weekends.',
  commonIntro:
    'Riverside boiler calls are fewer than in the older hillside neighborhoods, and they come from pre-war houses and apartment buildings. The usual ones:',
  localFaqs: [
    {
      q: 'My Riverside apartment building has one boiler and my unit is cold. Can I call you?',
      a: 'Go to the landlord or building manager first, in writing; buildings with a boiler service contract send that company. Since Riverside is a Cincinnati neighborhood, a landlord in control of the heat has to keep apartments at 70F or more in cold weather. We fix boilers, not leases, and the owner arranges the visit.',
    },
    {
      q: 'I’m not sure if my Riverside house has a boiler or a furnace. How do I tell?',
      a: 'Look at how the heat reaches the rooms. Radiators or baseboard with water pipes mean a boiler; metal vents in the floor or walls mean a furnace or heat pump. A boiler also has a pressure gauge and water piping. Tell us which you see when you call, and we send the right technician.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for older Riverside homes and apartment buildings',
    band1Heading: 'Common Boiler Problems in Riverside Homes and Apartments',
    commonSituations: [
      'A pre-1940 house on River Road with radiators that heat unevenly from room to room',
      'An apartment building boiler that leaves the top-floor units cooler than the rest',
      'Short bursts of firing, a few minutes on and a few off, all day long',
      'Water on the floor under the relief valve after the boiler heats up',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Floor vents mean a furnace, not a boiler. For radiators, crack the bleed valve on any that are cold up top and close it at the first water. On a hot water boiler, a gauge that has slipped after bleeding needs a refill to its usual mark. The thermostat needs to call for heat and the boiler switch must be on. If warmth returns, the job is done without us. Pressure that won’t stay put, a leaking valve, banging pipes, a lockout code or a yellow flame mean a visit. For a gas smell, get out with the switches untouched and call the gas company from the street.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Riverside?',
        body: 'A boiler in Riverside may be decades younger or older than the building around it, and the install date on its label is the one we trust. Parts wear: circulators, zone valves, igniters, expansion tanks, all replaceable on a boiler that holds water. A vessel or section that leaks, a failed heat exchanger, or a fresh breakdown each winter brings a replacement price onto the same page as the repair. Schedule the yearly service in early fall; it runs an hour to an hour and a half and covers pressure, tank, leaks, controls, burner and flue, with every radiator bled.',
      },
    ],
    whyTitle: 'Why Riverside Residents and Landlords Call Us',
    whyParagraph:
      'Riverside mixes older houses with apartment buildings, and most homes are rented. We tell tenants what to report, give owners a flat price to approve, and send licensed, insured technicians with background checks.',
    sharedFaqs: [
      {
        q: 'What does boiler repair cost in Riverside?',
        a: 'Riverside repairs are priced by what we find. Air in the radiators or a lockout reset is minutes of work, while a failed pump or a leaking section takes parts and time. The flat-rate quote comes after diagnosis, you approve it first, and there is no overtime fee on weekends.',
      },
      {
        q: 'Repair or replace: what makes sense for a Riverside boiler?',
        a: 'One bad part on a boiler that holds water is a repair, whether it’s the pump or a valve. A leaking vessel or heat exchanger, or repairs every winter, is when we price a new boiler beside the fix so you can weigh them. Financing is available.',
      },
      {
        q: 'Why are some radiators cold in my Riverside home or apartment?',
        a: 'Mostly air collecting at the top, which bleeding lets out. In an apartment building, the units farthest down the piping from the boiler cool first when pressure drops. When bleeding changes nothing, we look at a stuck radiator valve, the zone valve and the pump.',
      },
    ],
  },
};
