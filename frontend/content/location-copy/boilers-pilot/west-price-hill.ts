import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westPriceHill: LocationServiceCopy = {
  localParagraph:
    'Census figures put 36.6% of West Price Hill homes at 1939 or earlier, and another 48.1% between 1940 and 1969. The older group is where most of our boiler work is, in houses and two-families still heated by radiators. Many of the postwar houses were built with ducts and a furnace instead, and those are furnace calls. On a boiler, the jobs we see are air-bound radiators, failing pumps and zone valves, and pressure loss. You get a diagnosis and a price before any repair.',
  emergencyParagraph:
    'A West Price Hill house can cool off quickly once the boiler stops, and NOAA normals put the typical January low near 23F. Get babies, older relatives and anyone ill somewhere warm first. In a long outage the radiator pipes are at risk too, so don’t wait it out. Most calls get a technician the same day, weekends included.',
  commonIntro:
    'West Price Hill boiler work is mostly in pre-war single houses and two-families, plus some older apartment buildings. These come up most:',
  localFaqs: [
    {
      q: 'Does a boiler in a West Price Hill two-family need a state inspection?',
      a: 'No. ORC 4104.04 leaves out boilers in private homes and in buildings with fewer than six units, provided a steam boiler runs at no more than 15 psi and a hot water boiler at no more than 160 psi. A two-family fits that easily. The state skipping it is no reason to skip a yearly service, though.',
    },
    {
      q: 'I rent half of a West Price Hill double and the radiators are cold. Who handles the repair?',
      a: 'The landlord does. West Price Hill is inside Cincinnati, so where the landlord controls the heat, the city expects the unit kept at 70F or more in cold weather, and Ohio law requires supplied heating to be kept working. Report it in writing. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for West Price Hill houses and doubles',
    band1Heading: 'Common Boiler Problems in West Price Hill Homes',
    commonSituations: [
      'A double where both units share one boiler and only one gets enough heat',
      'A boiler that ran fine all last winter and locks out on its first start in October',
      'A slow drip from a radiator valve that leaves a stain on the ceiling below',
      'Pipes that knock and hiss on an older steam system',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Plenty of cold-house problems here end with a radiator key and no visit. Open the bleed screw on any radiator cool up top until water comes out. On a hot water system, add water if the gauge has fallen below its usual mark. Confirm the thermostat is asking for heat and the boiler’s switch is on. Warm rooms within the hour mean you can skip the call. Ring us if pressure sinks again, water drips at the boiler, the flame burns yellow, an error code locks it out or a whole floor stays cold. With a gas smell, get out, flip no switches, and phone the gas company outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in West Price Hill?',
        body: 'West Price Hill has houses from the 1920s through the 1960s, and the boiler in any of them could be newer than the house. Check its label, not the deed. A worn circulator, zone valve, igniter or expansion tank gets swapped and the boiler carries on. Leaks from the vessel, a section or the heat exchanger, or a boiler that runs up a bill every winter, are when a replacement quote sits beside the repair quote. Book the yearly visit before the cold arrives; it takes 60 to 90 minutes, and we check pressure, the expansion tank, safety controls, burner and flue, look for leaks and bleed the radiators.',
      },
    ],
    whyTitle: 'Why West Price Hill Homeowners and Landlords Call Us',
    whyParagraph:
      'West Price Hill splits close to evenly between owners and renters. Both get the same visit: a licensed, insured, drug-tested technician, the fault explained in plain words, and a flat price agreed before work.',
    sharedFaqs: [
      {
        q: 'How much does it cost to repair a boiler in West Price Hill?',
        a: 'The repair decides it. Air in the lines or a tripped lockout is a short visit; a failed pump or zone valve costs more, and a leaking section more again. We find the fault, quote a flat rate, and wait for your yes. Weekend calls carry no overtime fee.',
      },
      {
        q: 'When should a West Price Hill boiler be replaced instead of repaired?',
        a: 'When the boiler itself is failing: a leaking vessel or heat exchanger, or a run of repairs every winter. One bad pump, valve or control on an otherwise tight boiler is a repair. We give you both prices to compare, and financing is available.',
      },
      {
        q: 'Why are some radiators cold in my West Price Hill house?',
        a: 'Check for air first: a radiator that is cold at the top needs bleeding. Low boiler pressure then shows up in the radiators farthest away, often upstairs. If bleeding and refilling don’t bring them back, look at a stuck radiator valve, a zone valve or the circulator pump.',
      },
    ],
  },
};
