import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const williamsburg: LocationServiceCopy = {
  localParagraph:
    'Williamsburg splits almost evenly between gas and electric heat, so we come ready for either. Census figures put 52.4% of homes on gas and 44.8% on electricity. Nearly three in ten houses here went up before 1940, so a modern furnace often sits in an old basement or vents through an older chimney, and we check the venting along with the furnace. Clermont County Building Inspection handles replacement permits for the village. We diagnose first and quote the repair before starting.',
  emergencyParagraph:
    'January lows average around 23 degrees, per NOAA normals at CVG, and a drafty Williamsburg house loses heat quickly at that temperature. Get infants, elderly family and anyone who’s sick somewhere warm, and remember a cold house can freeze pipes. We repair gas and electric furnaces, same day on most calls, weekends included.',
  commonIntro:
    'Williamsburg mixes pre-war houses with newer homes, on gas and electric heat in nearly equal numbers. These problems come up most:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a furnace in Williamsburg?',
      a: 'Yes. In Williamsburg the permit comes from the county, not the village office, and the county logs HVAC replacements at village addresses every year. We apply for it before installation day, so you don’t deal with the paperwork. Repairs to the furnace you already have are a different matter.',
    },
    {
      q: 'I rent in Williamsburg and the heat is out. What should I do?',
      a: 'Tell your landlord in writing right away and keep a copy. Ohio’s landlord law, ORC 5321.04, says landlords must keep heating equipment they supply safe and working and provide reasonable heat. We fix furnaces, not leases, so the owner arranges and approves the repair with us.',
    },
  ],
  overrides: {
    ctaLine: 'Williamsburg furnace repair for old and newer homes',
    band1Heading: 'Common Furnace Problems in Williamsburg Homes',
    commonSituations: [
      'A newer gas furnace venting into a chimney built for an older one',
      'An electric furnace running all day in a cold snap with one element out',
      'A gas furnace that won’t light after sitting idle all summer',
      'Cold rooms in a pre-1940 house where ducts were added long after it was built',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Some no-heat calls end before we arrive. Put the thermostat on heat and raise it a few degrees, then change the batteries if the display is dim. Look at the switch beside the furnace, which can pass for a light switch, and at the breaker. Fit a clean filter and press the furnace door firmly shut. If the heat returns, there’s no need for a visit. If you smell gas, leave the house without touching switches and call the gas company from outside. Otherwise, call us. We test the furnace, tell you the price, fix it once you agree and confirm warm air at the vents.',
      },
      {
        title: 'Repair or Replace Your Williamsburg Furnace?',
        body: 'The house’s age won’t settle it, because a pre-war Williamsburg home may hold a furnace only a few years old. Read the date on the rating plate and think about the repair history. A bad igniter, inducer motor or limit switch is worth fixing on a sound furnace. A cracked heat exchanger can leak carbon monoxide, so we shut that furnace down and quote a replacement. Old venting matters here too: a new high-efficiency furnace usually vents through plastic pipe instead of the chimney, and we plan that route before the install. If a carbon monoxide alarm sounds, get everyone outside first.',
      },
    ],
    whyTitle: 'Why Williamsburg Homeowners and Landlords Call Us',
    whyParagraph:
      'Williamsburg owners and landlords get a technician who explains the fault in plain words and a flat price before work. Every technician is licensed, insured and background-checked, and financing is available for a replacement.',
    sharedFaqs: [
      {
        q: 'How much will my Williamsburg furnace repair cost?',
        a: 'The answer comes after testing, since a flame sensor and a control board are very different jobs. We show you one flat-rate price, you decide, and nothing starts until you approve it. A Saturday call costs the same as a Tuesday one.',
      },
      {
        q: 'Repair or replace an old furnace in Williamsburg?',
        a: 'Repair a furnace with one failed part and a sound heat exchanger. Replace one with a cracked heat exchanger, because of the carbon monoxide risk, or one that fails every winter. In older Williamsburg houses we also look at the venting, since that can change what a replacement costs.',
      },
      {
        q: 'Why is my furnace in Williamsburg blowing cold air?',
        a: 'Check the thermostat first: heat mode, fan on auto. A furnace that hasn’t run since spring may just need a fresh filter and a door that’s shut properly. On gas heat, a dirty flame sensor often shuts the burners off within seconds. On electric heat, a burned-out element is common.',
      },
    ],
  },
};
