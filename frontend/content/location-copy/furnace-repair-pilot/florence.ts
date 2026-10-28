import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const florence: LocationServiceCopy = {
  localParagraph:
    'Florence heating is close to an even split. Census figures show 48.9% of homes on gas and 48.5% on electricity, so a no-heat call here is as likely to be an electric furnace or heat pump as a gas burner. Just over half of households rent, many in apartments and condos, so the owner or manager usually approves the work. Most of the city was built before 1980, and many furnaces have been swapped at least once since. We pin down the fault and quote it before work begins.',
  emergencyParagraph:
    'NOAA normals for CVG, right here in Boone County, put January lows around 23 degrees. A Florence home without heat at that temperature is hard on babies, older family members and anyone who’s ill, and very cold rooms can freeze pipes. We repair gas furnaces, electric furnaces and heat pumps, usually the same day, weekends included.',
  commonIntro:
    'Florence calls split between gas and electric heat, in houses, condos and apartment buildings. These problems lead the list:',
  localFaqs: [
    {
      q: 'Who issues the permit to replace a furnace in Florence?',
      a: 'The Boone County Building Department in Burlington issues building and HVAC permits for Florence, according to the state’s listing, not a city office. We pull that permit before a replacement goes in. If you hire anyone else for a furnace swap, ask them whether they’ve pulled it.',
    },
    {
      q: 'I rent in Florence. Should I call you or my landlord?',
      a: 'Your landlord or property manager first. In most Florence rentals the heating equipment belongs to the owner, and they decide who repairs it. If you smell gas, don’t wait for anyone: leave without touching switches or relighting anything, and call the gas company from outside. Owners and managers can book us directly.',
    },
  ],
  overrides: {
    ctaLine: 'Florence furnace and heat pump repair for houses, condos and apartments',
    band1Heading: 'Common Furnace Problems in Florence Homes and Apartments',
    commonSituations: [
      'A heat pump iced over and stuck on backup heat in January',
      'An electric furnace in a condo closet with one element out',
      'A 1970s gas furnace whose igniter has finally cracked',
      'An apartment where the heat runs but the air at the vent is barely warm',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'On a heat pump, light frost on the outdoor unit in cold weather is normal, and it should clear itself every so often. Ice that never clears is a service call. Before calling, check the thermostat is on heat with good batteries, the filter, the switch at the furnace and every breaker that feeds it, and make sure the front panel is latched. If that solves it, you don’t need us. If a carbon monoxide alarm goes off, get everyone out first, then call. When we arrive, we explain what we found and price it before starting.',
      },
      {
        title: 'Repair or Replace Your Florence Furnace?',
        body: 'Base it on the furnace, not the building. Florence has plenty of 1960s and 1970s homes running much newer equipment, and a failed blower motor or control board in a younger unit is a fair repair. A cracked heat exchanger on a gas furnace ends the debate, since it can push carbon monoxide into the living space. On electric heat, watch the bill from Duke Energy Kentucky or Owen Electric, depending on your street: a heat pump leaning on its backup strips can raise it sharply before anything stops working. We handle the replacement permit.',
      },
    ],
    whyTitle: 'Why Florence Homeowners and Landlords Call Us for Heating Repair',
    whyParagraph:
      'We fix gas and electric heat in Florence houses, condos and apartments, and we tell renters plainly when the call belongs to the landlord. You approve a flat price first, with no overtime fees for nights or weekends.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Florence?',
        a: 'Nobody can give an honest number before testing. A frozen heat pump that needs a defrost control is a different job from a gas furnace with a dead inducer. We find the fault, give you one flat-rate price and start only when you approve it. If a breaker reset fixes it, we say so.',
      },
      {
        q: 'Should I repair or replace my Florence furnace?',
        a: 'Repair it when one component failed on a unit that’s otherwise sound. Replace a gas furnace with a cracked heat exchanger, because that’s a carbon monoxide hazard. Many Florence homes are decades older than their heating, so check the furnace’s label, not the house. We price both choices on the same visit.',
      },
      {
        q: 'Why is my Florence heat blowing cold air?',
        a: 'On a heat pump, a few minutes of cool air during defrost is normal. Longer than that, check the thermostat mode and the filter. An electric furnace with a burned element or tripped breaker blows lukewarm air. On gas, burners that won’t stay lit usually point to the flame sensor or igniter.',
      },
    ],
  },
};
