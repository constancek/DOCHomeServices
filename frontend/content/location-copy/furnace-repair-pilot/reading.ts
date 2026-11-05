import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'Most Reading furnaces burn gas, 70.8% of homes by Census figures, and in houses from the 1940s and 1950s the furnace is usually down in the basement. That location matters here. The city says Mill Creek flooding has troubled Reading since its founding, and revised FEMA maps put many homes in the 100-year floodplain, so a basement furnace can end up sitting in water. Plenty of homes are rented, too, which brings the landlord into the decision. We locate the problem, explain it and price it before touching a part.',
  emergencyParagraph:
    'January nights at the CVG weather station average a low of about 23F, according to NOAA, and a house without heat cools fast. Babies, older relatives and anyone ill feel it first, and long cold spells can freeze pipes. We repair gas furnaces and electric heat in Reading, usually the same day you call, weekends included.',
  commonIntro:
    'Reading’s furnaces are mostly gas, in the basements of 1940s and 1950s houses and in older apartment buildings. These problems come up most:',
  localFaqs: [
    {
      q: 'My Reading basement flooded. Can I turn the furnace back on?',
      a: 'Not until it has been checked. Flood water can soak the gas valve, the controls and the wiring, and a furnace running with water-damaged parts is a fire and carbon monoxide risk. Leave it off and have it inspected. We’ll tell you plainly whether it can be repaired or has to be replaced.',
    },
    {
      q: 'Who issues furnace permits in Reading?',
      a: 'The City of Reading runs its building department through a contractor, XPEX, and the city lists HVAC units among the work that needs a permit. The city’s zoning official reviews a project before the building department does. If your furnace needs replacing, we file the permit before installation day.',
    },
  ],
  overrides: {
    ctaLine: 'Reading furnace repair for houses and apartments',
    band1Heading: 'Common Furnace Problems in Reading Homes',
    commonSituations: [
      'A basement gas furnace that won’t light after water got near it',
      'An igniter that glows while the burners never catch',
      'One apartment cold while the rest of the building heats',
      'A 1950s duct run that leaves the upstairs bedrooms cold',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Rule out the simple stuff first. The thermostat should read heat, with fresh batteries in it. The furnace’s wall switch should be up and its breaker on. A filter you can’t see light through needs changing, and the front panel must be latched, because many furnaces won’t fire with it loose. Warm air again means no technician. A gas smell is never a check: leave the switches alone, don’t relight anything, and call the gas company once you’re outside. If the carbon monoxide alarm goes off, everyone gets out first. For short cycling or cool air, we find the cause, price it for your approval and test the heat afterward.',
      },
      {
        title: 'Repair or Replace Your Reading Furnace?',
        body: 'Judge it by what’s in the basement, not when the house was built. Plenty of 1950s Reading houses have a recent furnace, and when the inducer motor or control board fails on a newer unit, fixing it is the sensible call. A cracked heat exchanger is different. It can leak carbon monoxide into the rooms you live in, so we leave that furnace shut down and price a replacement. A new furnace goes through the city’s building department, and we pull that permit. Short of a failure, a gas bill that keeps rising through a normal winter usually means the furnace is slipping, worth a look before it quits.',
      },
    ],
    whyTitle: 'Why Reading Homeowners and Landlords Call Us',
    whyParagraph:
      'Reading has many rentals. Tenants should report no heat to the landlord, since Ohio law (ORC 5321.04) puts working heat on the owner. We fix furnaces, not leases, and owners get a flat price first.',
    sharedFaqs: [
      {
        q: 'How much is furnace repair in Reading?',
        a: 'We can’t give a fair number until the furnace is tested. A cracked igniter on a basement gas furnace is a short visit, and a failed control board takes longer. You approve one flat-rate price before anything starts, and nights and weekends are priced the same as weekdays.',
      },
      {
        q: 'Is my old Reading furnace worth repairing?',
        a: 'Often, if the heat exchanger is sound and only one part failed. Many Reading houses are far older than the furnace in them. When the heat exchanger is cracked, or the furnace keeps failing, we price a replacement next to the repair and let you choose with both numbers in hand.',
      },
      {
        q: 'Why does my Reading furnace blow cold air?',
        a: 'Check the thermostat fan setting first; on means it blows between heating cycles. Then look at the filter, because a clogged one can overheat the furnace until a safety switch shuts the burners off while the blower keeps going. If neither is it, a failed igniter or flame sensor is common.',
      },
    ],
  },
};
