import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lincolnHeights: LocationServiceCopy = {
  localParagraph:
    'Heat in Lincoln Heights divides almost down the middle: Census figures count 52.6% of homes using gas and 47.4% using electricity. A burned-out element is about as common a call here as a gas burner refusing to light. Most households rent, many in apartment buildings, so the person approving our work is usually an owner or manager. The bulk of the village went up in the 1960s and 1970s. You hear the diagnosis and the cost before a single part comes off.',
  emergencyParagraph:
    'NOAA normals for CVG log close to 100 nights a year at 32F or colder. When a Lincoln Heights apartment furnace quits on one of them, an infant, a grandparent or a tenant who is ill is most at risk, and pipes can split in a cold unit. We usually arrive the day you call, Saturday and Sunday too.',
  commonIntro:
    'Lincoln Heights is mostly rented, with gas and electric heat in nearly equal shares. These furnace calls come up most:',
  localFaqs: [
    {
      q: 'I rent in Lincoln Heights and the heat is out. Can I book you myself?',
      a: 'Tell the landlord or office in writing, and keep a copy. Ohio’s ORC 5321.04 makes the landlord responsible for keeping the heating equipment they provide safe and working, and for reasonable heat. At a managed complex, maintenance books outside repairs, so we arrive once the owner or manager sends us. We fix furnaces, not leases.',
    },
    {
      q: 'Do Lincoln Heights furnace replacements need a permit?',
      a: 'Usually, yes, and the paperwork is ours to sort out; you won’t need to chase down which office covers your street. Fixing the furnace that’s already there rarely needs one. Owners swapping furnaces in several apartments at once get a separate price for each unit before any work.',
    },
  ],
  overrides: {
    ctaLine: 'Lincoln Heights furnace repair for gas and electric heat',
    band1Heading: 'Common Furnace Problems in Lincoln Heights Homes and Apartments',
    commonSituations: [
      'An apartment electric furnace with one heating element burned out',
      'A gas furnace in a 1960s or 1970s house that lights, then shuts off',
      'One unit in a building gone cold while the neighbors stay warm',
      'A breaker that trips each time the electric heat kicks on',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'The thermostat should read heat and have live batteries, the furnace’s on/off switch should be up, no breaker should be flipped, the filter shouldn’t be grey and matted, and the blower panel should be pushed fully home, since many furnaces sit dead with it ajar. Sort any of those and the job is done without us. Tenants should hand anything further to management. A gas odor means walking out without touching a light, then ringing the gas utility from outside. A breaker that flips twice or air that never warms means a visit: we diagnose, explain, wait for your yes on price, then confirm the heat.',
      },
      {
        title: 'Repair or Replace Your Lincoln Heights Furnace?',
        body: 'Judge the unit in the closet, not the year the building went up. Lots of 1970s apartments in the village have had furnaces swapped since, and a younger one with a dead element or igniter earns a repair. A split heat exchanger on a gas unit is the hard stop. It lets combustion gases, carbon monoxide included, reach the bedrooms, so we treat it as a safety failure ahead of any talk about cost. When a CO detector sounds, move people out to fresh air before phoning anyone. For electric heat, a winter bill rising through a mild week hints at an element relay stuck closed.',
      },
    ],
    whyTitle: 'Why Lincoln Heights Residents and Landlords Call Us',
    whyParagraph:
      'This village runs on gas and electric heat in almost equal measure, and we carry parts for both. Managers approve a flat price before we start, and each technician entering a tenant’s home has passed background and drug screening.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Lincoln Heights?',
        a: 'Price follows the part. An electric element swap tends to be a lighter job than a new gas valve or blower motor, and we only quote once the meter readings point to it. The owner or manager signs off on one flat figure first, and a Sunday call isn’t billed at an overtime rate.',
      },
      {
        q: 'Should a Lincoln Heights landlord repair or replace an old furnace?',
        a: 'Fix it when one component quit and the cabinet and heat exchanger check out. Replace it once the exchanger is cracked or the same unit keeps eating repair money. Landlords get both numbers on one sheet, which helps when deciding which apartments’ furnaces to budget for this year.',
      },
      {
        q: 'Why is my Lincoln Heights furnace blowing cold air?',
        a: 'Thermostat on heat, filter clean: start there. In electric units, lukewarm air usually means a burned element or the sequencer that should switch it in. In gas units, the burners might not be catching, which points to a fouled flame sensor or cracked igniter. Past that point it’s technician work, not a job for a tenant with a screwdriver.',
      },
    ],
  },
};
