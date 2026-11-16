import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const roselawn: LocationServiceCopy = {
  localParagraph:
    'Most Roselawn homes run forced air, since the typical house here went up around 1961, after boilers stopped being the default. The boilers we see are mostly in older houses and small apartment buildings: Census figures count 20.3% of Roselawn homes as pre-1940. Homes with floor vents need furnace repair, not us. Where there are radiators, we track down the fault and put a flat price in front of you first.',
  emergencyParagraph:
    'A Roselawn apartment cools off fast when its boiler quits, and NOAA’s normals for CVG put a typical January low near 23F. Babies, older relatives and sick family members are most exposed. Leave a building cold for days and the radiator piping can freeze. Most no-heat calls are reached the same day, Saturday and Sunday included.',
  commonIntro:
    'In Roselawn the boiler calls come from pre-war houses and apartment buildings with one boiler in the basement. What we see most:',
  localFaqs: [
    {
      q: 'The heat is out in my Roselawn apartment building. Who fixes it?',
      a: 'The owner or manager, if they supply the heat. Roselawn lies inside Cincinnati, and city code says a landlord-controlled heating system has to hold units at 70F once outdoor temperatures sit under 60F for a full day. Send your complaint in writing. We fix boilers, not leases, and we bill the building owner.',
    },
    {
      q: 'Does a Roselawn apartment boiler need a state inspection?',
      a: 'That depends on its size. Under ORC 4104.04, Ohio skips state inspection for boilers in houses and in buildings of five units or fewer, if a steam boiler stays at or below 15 psi and a hot water boiler at or below 160 psi. Bigger Roselawn complexes need the inspection, and keeping it current is the owner’s job.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Roselawn houses and apartment buildings',
    band1Heading: 'Common Boiler Problems in Roselawn Homes and Apartments',
    commonSituations: [
      'An apartment building boiler where the units at the end of the loop never get warm',
      'A circulator pump that hums but doesn’t move water, so the boiler gets hot and the radiators don’t',
      'A 1920s house with an older boiler that kettles and rumbles when it fires',
      'A pressure relief valve dripping onto the basement floor',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'In a Roselawn apartment, start with the radiator itself: cool across the top means air, and a radiator key opened until water appears lets it out. Whoever has the boiler room key can then read the dial and refill a hot water system that dropped. The thermostat needs to be on heat, and the boiler’s switch up. Buildings with a service contract through another firm should call that firm before us. Pressure that sinks again, drips at the boiler or a valve, one cold zone or a lockout code all mean a repair visit. Smell gas? Go outside without touching switches and phone the gas company or 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Roselawn?',
        body: 'Check the install year on the boiler’s plate and decide from that. When a circulator, zone valve, igniter or expansion tank gives out on a younger boiler in an older Roselawn building, we repair it. A weeping cast-iron section or heat exchanger, or a boiler that breaks down every winter, gets a replacement quote written up next to the repair quote. Yearly service before heating season takes about 60 to 90 minutes: pressure, expansion tank, leaks, safety controls, burner and venting, then bleeding the radiators. Building owners with tenants on one boiler save the most from it.',
      },
    ],
    whyTitle: 'Why Roselawn Residents and Landlords Call Us',
    whyParagraph:
      'About two in three Roselawn homes are rented, so we deal with owners, managers and tenants alike. Each technician is licensed, insured, background-checked and drug-tested, and the price is agreed before anything is replaced.',
    sharedFaqs: [
      {
        q: 'What does boiler repair cost in Roselawn?',
        a: 'It comes down to what broke. Clearing a lockout or letting air out takes little time, swapping a circulator or zone valve runs higher, and a cast-iron section that leaks is real work. You get a flat-rate figure after we find the fault, and nothing starts until you say yes.',
      },
      {
        q: 'Should I replace my Roselawn boiler or keep repairing it?',
        a: 'Keep it if the vessel is sound and the failure is one part. When the boiler leaks from the heat exchanger or a section, or you’re paying for a repair every winter, we quote replacement next to the repair. Financing is available on a new boiler.',
      },
      {
        q: 'Why are some radiators cold in my Roselawn home?',
        a: 'Most often it’s air, and bleeding fixes it. Low pressure starves the radiators farthest from the boiler first. In an apartment building, a stuck zone valve can leave one unit cold while others are fine. If bleeding and topping up don’t work, we find which valve or pump is at fault.',
      },
    ],
  },
};
