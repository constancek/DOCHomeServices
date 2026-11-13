import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAdams: LocationServiceCopy = {
  localParagraph:
    'Mount Adams is a hill of older houses, doubles and small apartment buildings, and Census figures date 50.2% of its homes to 1939 or earlier, when radiators were how a house got heat. Calls here are mostly air trapped in top-floor radiators, tired circulators and a pressure gauge that won’t hold. Newer buildings on the hill tend to heat with electricity or ducted air, which isn’t boiler work. We pin down the fault and give you the price before touching it.',
  emergencyParagraph:
    'On a January night near the 23F normal low (NOAA, CVG station), a Mount Adams home without heat cools quickly. A newborn, a grandparent or someone recovering from illness shouldn’t ride that out, and hours without heat can put radiator pipes at risk. We get to most calls the same day, Saturday and Sunday included.',
  commonIntro:
    'On the hill, boiler calls tend to come from older houses, two-unit doubles and small apartment blocks. Here is what they usually turn out to be:',
  localFaqs: [
    {
      q: 'I rent in Mount Adams and the radiators are cold. What is the landlord required to do?',
      a: 'Put it in writing to the landlord, with the temperature you measured and the date. Because Mount Adams is a Cincinnati neighborhood, a landlord in charge of the heat owes you 70F or better whenever the outdoor temperature has sat under 60F for a full day. We fix boilers, not leases; the owner schedules us.',
    },
    {
      q: 'Does a Mount Adams double need a state boiler inspection?',
      a: 'No, for a house or a double. Boilers in private homes and in buildings under six units are exempt from state inspection under ORC 4104.04, on condition that steam boilers run no higher than 15 psi and hot water boilers no higher than 160 psi. Annual service is the owner’s decision.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Mount Adams homes and doubles',
    band1Heading: 'Common Boiler Problems in Mount Adams Homes',
    commonSituations: [
      'A tall older house where the highest radiators are the last to warm, if they warm at all',
      'A double sharing one boiler, with a sticking zone valve that leaves one unit cold',
      'An expansion tank full of water, so the relief valve drips every time the boiler heats',
      'A burner that fires, quits and fires again within minutes',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'On a Mount Adams double, start on the top floor: open the bleed screw on each cool radiator with a key and close it once it spits water. Down at the boiler, a hot water gauge sitting under its normal mark after that wants a refill. Thermostat on heat, fresh batteries, boiler switch flipped on. Warm again inside the hour means no technician needed. Ring us if the needle keeps sinking, something drips, the pipes bang, a code shuts the burner off, the flame burns yellow or a whole floor stays cold. Gas odor: everybody out first, no light switches, and phone the gas company from the sidewalk.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Mount Adams?',
        body: 'Mount Adams has pre-1940 houses and 1960s and 1970s buildings, and either can hold a boiler younger or older than its walls. The install date is on the boiler’s label, and that age is what counts. Swapping a bad circulator, igniter, zone valve or waterlogged expansion tank keeps a sound boiler going. A cracked section, a weeping vessel or heat exchanger, or a repair each January puts a replacement quote on the table next to the fix. Before the first cold snap, an hour to an hour and a half of service covers pressure, tank, leaks, controls, burner and flue, and every radiator bled.',
      },
    ],
    whyTitle: 'Why Mount Adams Residents and Landlords Call Us',
    whyParagraph:
      'Most Mount Adams homes are rented, and many sit in doubles or small buildings on one boiler. We price the repair flat before work, charge no overtime, and send licensed, insured, background-checked technicians.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost in Mount Adams?',
        a: 'Mount Adams boiler repair is priced by what broke. A reset after a lockout or bleeding air out is a short visit; a new circulator or a cracked section means parts and hours. You hear the flat-rate number after diagnosis, and no wrench turns until you agree.',
      },
      {
        q: 'Should I repair or replace my Mount Adams boiler?',
        a: 'If the boiler is watertight and one piece quit, such as a pump, valve or igniter, fix that piece. Leaks from the vessel or heat exchanger, or a repair bill every winter, are when we write up a replacement price too, and financing can spread that cost.',
      },
      {
        q: 'Why are the upstairs radiators cold in my Mount Adams home?',
        a: 'Upstairs radiators sit farthest from the boiler, so air or low pressure shows up there first. Bleed them, refill a hot water system whose gauge has dropped, and give it an hour. Radiators that stay cold after that usually point to a stuck valve or a weak pump.',
      },
    ],
  },
};
