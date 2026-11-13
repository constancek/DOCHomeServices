import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const milford: LocationServiceCopy = {
  localParagraph:
    'Milford’s housing is older than the ZIP code around it. Census figures put 19.6% of homes inside the city at 1939 or earlier, and those houses are where radiators usually turn up. About half of Milford households rent, and where an apartment building runs on a central boiler, one fault can leave every unit cold at once. We find what failed, explain it in plain terms and give you a price before any work starts.',
  emergencyParagraph:
    'NOAA normals for CVG show January lows around 23F, and Milford gets the same cold. A boiler that dies on a night like that puts babies, older relatives and anyone ill at risk first. If the outage runs long, radiator piping along outside walls can freeze too. Most no-heat calls in Milford get a technician the same day, weekends included.',
  commonIntro:
    'In Milford we’re mostly called to pre-war single houses and to apartment blocks that share one boiler. Typical trouble:',
  localFaqs: [
    {
      q: 'My Milford basement flooded. Can I run the boiler?',
      a: 'Not until it has been checked. River water in the burner, gas valve or controls can make a boiler unsafe even after it dries out. The Little Miami has put water into low parts of Milford before, and any boiler that sat in it needs an inspection before it fires again.',
    },
    {
      q: 'Does my Milford building’s boiler need a state inspection?',
      a: 'For a house or a small building, no. Under ORC 4104.04, Ohio leaves out boilers in private homes and in buildings under six units, as long as steam stays at 15 psi or below and hot water at 160 psi or below. A larger Milford apartment building isn’t covered by that, so its owner should confirm.',
    },
    {
      q: 'I rent in Milford and the heat is off. What is my landlord required to do?',
      a: 'Under ORC 5321.04, an Ohio landlord who provides the heat has to keep it in good and safe working order. Put the problem to your landlord or building manager in writing and keep a copy. Where one boiler heats the whole building, the owner books the repair. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Milford houses and apartment buildings',
    band1Heading: 'Common Boiler Problems in Milford Homes and Apartments',
    commonSituations: [
      'A central boiler in an older apartment building that leaves the top-floor units cold',
      'A boiler that needs checking after high water on the Little Miami reached the basement',
      'Radiators in a pre-1940 house that clank as they heat',
      'A pressure gauge that sinks between refills',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Several checks cost nothing. Set the thermostat to heat, above the room temperature, and confirm the boiler’s switch is on. Release air from radiators that are cold at the top, then refill a hot water boiler if its gauge has dropped. If the heat returns, there’s no need to book us. In an apartment, report a cold unit to the manager rather than touching a building boiler, especially one another company services. We should see a boiler that loses pressure again, leaks, bangs, burns a yellow flame or locks out. A carbon monoxide alarm means everyone out first, then call 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Milford?',
        body: 'Start with the install year on the boiler’s label; a 1930s house can easily have a much younger boiler. A worn pump, valve, igniter or expansion tank gets swapped, and a boiler with life left keeps running. If water is coming from a section, the vessel or the heat exchanger, or the boiler breaks down every winter, we write up a new-boiler price next to the repair. Have it serviced each year before the cold arrives. The visit runs about 60 to 90 minutes: pressure, expansion tank, safety controls, burner and venting, a look for leaks, and every radiator bled. Landlords avoid the January no-heat call that way.',
      },
    ],
    whyTitle: 'Why Milford Homeowners and Landlords Call Us',
    whyParagraph:
      'Milford splits almost evenly between renters and owners, so we answer to landlords, managers and homeowners. Every technician is licensed, insured, background-checked and drug-tested, and the price is approved first.',
    sharedFaqs: [
      {
        q: 'How much does it cost to repair a boiler in Milford?',
        a: 'The broken part sets the bill. Letting air out and bringing the pressure back up is a small job; a pump or zone valve is a bigger one; a cracked section on an old cast-iron boiler is bigger again. Once we’ve found the fault, you see one flat-rate number and say yes before we begin.',
      },
      {
        q: 'Should a Milford landlord repair or replace an old boiler?',
        a: 'Repair when the vessel is tight and a part has failed, which covers most calls. Replace when the vessel or heat exchanger leaks, or when tenants go cold every winter because something else has broken. We quote both so you can compare, and financing is available.',
      },
      {
        q: 'Why are some radiators cold in my Milford apartment or house?',
        a: 'Air, low pressure or a stuck valve, usually in that order. In a house, bleed the cold radiator and refill the boiler. In an apartment on a central boiler, tell the manager which rooms are cold, because the fix is in the boiler room, not your unit.',
      },
    ],
  },
};
