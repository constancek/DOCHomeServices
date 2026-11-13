import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Census figures show nearly nine in ten homes in Downtown Cincinnati are rented, most of them apartments in large buildings, so a manager or owner usually makes the equipment call. The stock splits between prewar buildings and towers finished since 2010. The old ones can be drafty, and the new ones are sealed tight enough that stale air stays put. Electric heat is the norm, which dries winter air. We test first, quote a fixed price before work, and say so when a filter change will do.',
  emergencyParagraph:
    'If the carbon monoxide alarm sounds, clear the unit and ring 911. Smelling gas means leaving with every switch untouched and phoning the gas company outdoors. A burnt odor from the vents means turning the thermostat off. Mold spreading after an upstairs leak is urgent for babies, older relatives and asthmatics. Same-day visits cover most calls, weekends too.',
  commonIntro:
    'Residents, condo owners and managers bring us these problems most in Downtown Cincinnati:',
  localFaqs: [
    {
      q: 'I rent an apartment in Downtown Cincinnati. Can I hire you to fix the air?',
      a: 'Not for the building’s equipment. Tell your landlord or manager in writing about the musty smell, damp or broken bath fan. In Ohio, ORC 5321.04 (A)(2) requires landlords to keep the premises fit and habitable. We fix air, not leases, and management books the visit.',
    },
    {
      q: 'I own a condo in Downtown Cincinnati. Can air quality equipment go in my unit?',
      a: 'If your unit has its own air handler or heat pump, usually yes, with the association’s approval where its rules require it. We check the equipment closet for space first. If the building runs a central system, changes are the association’s decision, and we’re happy to talk with them.',
    },
  ],
  overrides: {
    ctaLine: 'Cleaner air for apartments and condos in Downtown Cincinnati',
    band1Heading: 'Signs an Apartment or Home in Downtown Cincinnati Has an Indoor Air Quality Problem',
    commonSituations: [
      'Stale air in a sealed high-rise unit where the windows barely open',
      'Dry, staticky winter air in a unit on electric heat',
      'Cooking smells from the hallway drifting in under the door',
      'A musty smell in an older building after a leak from the unit above',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in Downtown Cincinnati',
        body: 'Inside the unit, our meters log fine dust and humidity, and we check around windows, ceilings and the bathroom for water stains or mildew. The filter, the in-unit air handler or heat pump, and any duct we can reach come next. Prewar buildings tend to show drafts and tired ventilation. Towers finished since 2010 seal each unit tight, so stale air and trapped humidity are the usual finding. The recommendation is built from those readings only, and nothing gets installed until the owner or manager signs off on the price.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'Spending makes sense where a resident lives with allergies or asthma, where a dog or cat shares a small apartment, where a sealed unit feels close, or where dust keeps coming back. Electric heat that leaves the air parched is another reason. Spending makes no sense when a clogged filter is the fault and a new one clears it. A countertop air cleaner may handle one stuffy bedroom. If water is still coming through the ceiling from the unit above, building maintenance stops it before anyone treats mold. Residents help by running the kitchen and bath fans and keeping supply vents clear.',
      },
      {
        title: 'Humidity and Filtration for Homes in Downtown Cincinnati',
        body: 'River-city summers are muggy and heated winters are dry, and a sealed apartment keeps both. A dehumidifier tied into the unit’s air handler eases summer dampness and keeps mold and mildew from taking hold. A humidifier on the same equipment restores moisture once the heat runs. A media cabinet or purifier on the air handler cleans every room on the unit’s ducts and strips out lingering odors.',
      },
    ],
    whyTitle: 'Why Residents and Building Owners in Downtown Cincinnati Choose Us for Indoor Air Quality',
    whyParagraph:
      'Apartments and condos in large buildings, old and new, make up most of our air quality work in Downtown Cincinnati. Technicians are licensed, insured, background-checked and drug-tested, and owners approve every price before work starts.',
    sharedFaqs: [
      {
        q: 'How is indoor air quality work priced in Downtown Cincinnati?',
        a: 'After the test, each fix gets a flat rate. The equipment and the air handler or heat pump it connects to decide the price, and access in the building can matter too. The owner or manager approves it before work starts, and there are no overtime fees.',
      },
      {
        q: 'What are the signs of poor air in a city apartment?',
        a: 'Allergies or asthma that get worse at home, stale or musty air, dust that settles again quickly, condensation on windows, and winter air dry enough for static and sore throats. Renters should note these and report them to management in writing.',
      },
      {
        q: 'How often should the filter in an apartment unit be changed?',
        a: 'Change it when it looks dirty. In many buildings maintenance staff handle it, so ask your manager who’s responsible. Pets, a full household and long stretches of heating or cooling clog it faster. A filter that’s gone grey is overdue.',
      },
    ],
  },
};
