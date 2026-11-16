import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastWestwood: LocationServiceCopy = {
  localParagraph:
    'Roughly three in four homes in East Westwood are rented, by Census figures, and many sit in apartment buildings, so the owner or manager usually decides what gets added to the system. The median home was built in 1958, which means many basements with a little damp and ductwork that has been carrying dust for decades. Tenants can still run fans and keep vents uncovered. Owners get readings first, a flat figure per fix, and a straight answer when a new filter would do.',
  emergencyParagraph:
    'With a carbon monoxide alarm, everyone goes outside, then someone calls 911. For a gas smell, get out without touching a switch and phone Duke Energy. Turn off a furnace or AC that smells burnt at the thermostat. Spreading mold after a leak is urgent for babies, grandparents and anyone short of breath. Same-day help on most calls, weekends included.',
  commonIntro:
    'Landlords and tenants on this side of Westwood mostly call us about these four.',
  localFaqs: [
    {
      q: 'I rent in East Westwood and the apartment smells musty. What should I do?',
      a: 'Write to your landlord or manager about it, adding dates and phone photos if you can. Ohio law, ORC 5321.04 (A)(2), says a landlord keeps the rental fit and habitable. We fix air, not leases, so the owner books us. Meanwhile, run the bath fan and keep the vents clear.',
    },
    {
      q: 'Can you test every unit in my building in East Westwood?',
      a: 'Yes. We go door to door, logging dust, humidity and any moisture, then give you one report pricing each recommended fix flat. Units with tenant complaints can go first. Where a fresh filter solves a unit’s problem, the report says that instead of selling you equipment.',
    },
  ],
  overrides: {
    ctaLine: 'Unit-by-unit air testing for rental owners in East Westwood',
    band1Heading: 'Signs an Apartment or Home in East Westwood Has an Indoor Air Quality Problem',
    commonSituations: [
      'A tenant complaint about a musty lower-level unit after heavy rain',
      'Dry, crackling air in an apartment once heating season gets going',
      'A vacant unit that smells shut-in and stale before the next lease',
      'Dust pouring from the vents of a 1950s house after a filter change got skipped',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in East Westwood',
        body: 'Testing comes before any recommendation. For each house or unit we read particle and dust levels plus humidity, then look for moisture at windows, inside closets on outside walls and down in the basement. The filter, the ductwork and the furnace or air handler come next, because that system spreads whatever is floating in the air. Where several units share equipment, we note it on the report. The owner gets the findings and a flat price for each fix the test supports, and keeps the final say, since nothing is installed without approval.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'Equipment makes sense in a unit where a tenant fights asthma or allergies, where cats or dogs live, where the walls smell musty, or where dust is back within days. Heated winter air that cracks hands and sparks static is another fair reason. It doesn’t make sense if the filter is clogged; change that first and the complaint may vanish. One stuffy bedroom may need nothing more than a portable purifier. Mold growing from a leak means stopping the leak before anything else. Tenants can help by running kitchen and bath fans and leaving supply vents and returns uncovered.',
      },
      {
        title: 'Humidity and Filtration for Homes in East Westwood',
        body: 'Summers around Cincinnati are humid and winters with the heat on are dry, and an apartment feels both swings. A dehumidifier on the system dries a damp lower-level unit or basement and helps keep mold off the walls. A humidifier added to the furnace or air handler eases the dry heating-season air. A media filter or purifier at the air handler traps dust, pet dander and germs wherever the ducts run.',
      },
    ],
    whyTitle: 'Why Landlords in East Westwood Choose Us for Indoor Air Quality',
    whyParagraph:
      'Most of our air work here is for owners with several rentals, and we give them plain findings unit by unit. Technicians are licensed and insured, screened for background and drugs, and every price is flat and agreed first.',
    sharedFaqs: [
      {
        q: 'How much does indoor air quality work cost for a rental?',
        a: 'Each fix is a flat rate set after testing. The equipment and the system it attaches to decide the number, and a building with shared equipment is quoted differently from separate units. The owner approves each line, and the work can be phased in unit by unit.',
      },
      {
        q: 'How do I know if a unit has poor indoor air?',
        a: 'Tenants usually notice first. Allergy flare-ups indoors, stale or musty rooms, dust returning soon after cleaning and water beading on windows are the common signs. Static shocks and cracked skin in winter point to dry air. A test tells you which problem the unit actually has.',
      },
      {
        q: 'How often should filters be changed in rental units?',
        a: 'Change them when they look dirty. Units with pets, or systems running hard through summer and winter, clog filters sooner. A simple log of who checked which unit, and when, keeps the job from being forgotten between tenants.',
      },
    ],
  },
};
