import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountCarmel: LocationServiceCopy = {
  localParagraph:
    'In Mount Carmel, gas and electricity heat homes in close to equal shares: 49.0% gas and 40.9% electricity in Census figures. The electric number includes electric furnaces and baseboard, so it overstates heat pumps. Houses here went up mostly from the 1940s through the 1970s, and roughly a quarter of homes sit in apartment buildings. In practice that means a heat pump paired with a gas furnace in many houses and heat pumps with electric strips in the apartments. Every repair is priced before we start.',
  emergencyParagraph:
    'By NOAA’s normals for the Cincinnati airport, about 100 nights a year fall to freezing or below. A Mount Carmel house or apartment that loses heat on one of those nights is a danger to infants, grandparents and anyone sick. Our technicians repair heat pumps and dual fuel systems, typically the same day, Saturdays and Sundays too.',
  commonIntro:
    'In Mount Carmel, our heat pump time splits between houses with a gas furnace backup and apartment buildings heated only by electricity. Most of what we fix there falls into four problems:',
  localFaqs: [
    {
      q: 'Does Mount Carmel have its own building department?',
      a: 'No. Mount Carmel is unincorporated, part of Union Township, and Clermont County Building Inspection oversees the residential code in the township’s unincorporated areas. Any permit a replacement needs, we arrange. Repairs to the heat pump you already own are diagnosed, priced and done on the visit.',
    },
    {
      q: 'I rent an apartment in Mount Carmel. Should I call you or the landlord?',
      a: 'Go to the landlord or leasing office first, in writing. Ohio’s ORC 5321.04 holds landlords to keeping the heating equipment they supply repaired and safe, which means the owner hires and pays the contractor. We fix heat pumps, not leases. Once management books us, we report what we found to them.',
    },
    {
      q: 'Why does the gas furnace in our Mount Carmel house seem to run nonstop?',
      a: 'If you have a heat pump too, the furnace is built to step in when the heat pump falls behind or stops. A furnace firing on mild afternoons usually means the outdoor unit has quit. Look at its breaker before calling. Any smell of gas means everyone out and a call to the gas company from outside.',
    },
  ],
  overrides: {
    ctaLine: 'Mount Carmel repair for heat pumps and dual fuel systems',
    band1Heading: 'Common Heat Pump Problems in Mount Carmel Homes',
    commonSituations: [
      'A gas furnace covering every hour because the heat pump outside has died',
      'An apartment air handler running emergency heat strips for days on end',
      'A 1970s house with an outdoor unit that freezes over and won’t defrost',
      'A reversing valve that leaves the house cooling in January',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Several Mount Carmel calls end with a phone conversation. Set the thermostat to heat, since cool or off stops both halves of a dual fuel system. Look at the filter and replace it if it’s clogged. The outdoor unit and the indoor unit each have a breaker; reset a tripped one only once. Clear leaves or snow off the outdoor cabinet. Steam, light frost and a short fan pause are the defrost cycle. If heat comes back, you don’t need us. Book a visit when the coil stays iced, the auxiliary heat light stays on or the unit grinds. We inspect, explain and quote first.',
      },
      {
        title: 'Repair or Replace Your Mount Carmel Heat Pump?',
        body: 'Base the call on the heat pump, not on when the house went up. Many mid-century Mount Carmel houses have outdoor units far younger than the walls, and a worn fan motor or bad defrost board on one of those is a repair. A seized compressor, or refrigerant that drains away again after a recharge, is the point to see a replacement price beside the repair. In the apartments, a Duke Energy bill that leaps in a mild month means the strips are carrying the heat. In a dual fuel house, rising gas use tells the same story. We arrange any permit.',
      },
    ],
    whyTitle: 'Why Mount Carmel Homeowners and Landlords Call Us',
    whyParagraph:
      'Mount Carmel has houses on dual fuel and apartments on all-electric heat, and our technicians work on both. They are licensed and insured, and every price is flat-rate and approved before work.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Mount Carmel?',
        a: 'Price follows the fault. A burned contactor or tired fan motor is a short visit; a reversing valve or a hidden leak takes longer. We show you a single flat-rate price, and work begins only once you approve it. Weekend calls carry no overtime fee.',
      },
      {
        q: 'Should I repair or replace my Mount Carmel heat pump?',
        a: 'Repair it if one part has failed and the compressor is in good shape. If the compressor has died or refrigerant keeps leaking, compare that repair with a new heat pump. A sound gas furnace can stay in a dual fuel setup. We price both, with financing available.',
      },
      {
        q: 'Why does my Mount Carmel heat pump blow cool air in winter?',
        a: 'Heat pump air runs milder than the blast from a gas furnace, so a hand over the register may call it cool. That is normal. Cold air, along with an outdoor unit caked in ice or standing still, is a fault, and that’s when to call us.',
      },
    ],
  },
};
