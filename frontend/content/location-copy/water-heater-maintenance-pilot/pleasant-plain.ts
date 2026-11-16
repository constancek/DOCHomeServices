import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantPlain: LocationServiceCopy = {
  localParagraph:
    'Pleasant Plain has some of the oldest houses we serve. Census figures put 76.1% of its 67 homes at 1939 or earlier, so every water heater here was fitted long after the house went up, usually in a basement or back room with a stiff drain valve, aged shutoffs and supply piping worth a close look. Piped gas is rare in the village, which makes most of our visits electric. The price is fixed before work, and we’ll say plainly if a tank isn’t worth it.',
  emergencyParagraph:
    'If the tank leaks, the valve on the cold pipe into its top closes first, then the breaker, or the gas if any. Gas smell: get out, hands off every switch, no relighting, ring the gas company. Carbon monoxide alarm: everyone outdoors first. Repeated relief valve discharge, or no hot water: book a repair, usually same day, weekends included.',
  commonIntro:
    'In a village of old houses like Pleasant Plain, these usually prompt a service:',
  localFaqs: [
    {
      q: 'Our house in Pleasant Plain predates 1940. How old is the plumbing around the heater likely to be?',
      a: 'Older than the tank, quite often: a gate valve doing duty as the shutoff, a mix of pipe materials, a drain valve that has never been turned. We look over all of it during the visit and price anything worth changing before we lay a wrench on it.',
    },
    {
      q: 'I rent in Pleasant Plain. Who arranges maintenance on the heater?',
      a: 'The owner of the house does, since the heater is theirs. In Ohio, ORC 5321.04 says a landlord keeps the appliances they supply in good and safe working order, (A)(4), and provides reasonable hot water, (A)(6). Tell them about problems in writing. We service water heaters, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Careful water heater service for old houses in Pleasant Plain',
    band1Heading: 'Signs a Water Heater in Pleasant Plain Is Due for Maintenance',
    commonSituations: [
      'An electric heater added to a pre-1940 house, drain valve never opened',
      'A gate valve on the cold line nobody has turned in memory',
      'Hot water turning lukewarm sooner than it used to',
      'A rented house whose owner wants the heater looked over',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Pleasant Plain',
        body: 'We drain and flush the tank, clearing the scale that settles on its bottom and slows heating. The anode, a rod that wastes away so the tank doesn’t, is pulled and checked; a worn one gets a quote. We test the temperature and pressure valve and look at where its pipe ends. Electric heaters, the usual kind in Pleasant Plain, get both elements and thermostats tested; a gas unit gets burner, pilot, venting and connection checks. Because shutoffs and supply lines in these houses are often older than the heater, we go over them closely. Nothing is replaced unless you agree.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'In a village this small, it’s often one landlord with a rental or two, or an owner who has never had the heater drained, and both are good reasons to book. So is a house you’ve just taken on with no history, or popping that’s new this year. A tank weeping through its steel isn’t; it needs replacing, and no flush seals it. Nor is one putting rusty water into the taps, or one plainly at the end; we’d say keep the fee for the replacement. Draining a bucket from the bottom valve between visits is fine if you’re handy.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Pleasant Plain',
        body: 'With so little piped gas in Pleasant Plain, most visits are on electric tanks: drain, anode check, element and thermostat tests. Any gas tank gets burner and venting checks in their place. A tankless heater is descaled, with a cleaning solution run through its heat exchanger, and its inlet filter cleaned. We’d raise tankless only if a tank needed replacing, and only once.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Pleasant Plain Book Water Heater Maintenance With Us',
    whyParagraph:
      'Old houses with plumbing added decades after they were built make up most of Pleasant Plain, and we take our time with them. Licensed and insured, background checks and drug tests on everyone, and a flat price first.',
    sharedFaqs: [
      {
        q: 'How much is water heater maintenance in Pleasant Plain?',
        a: 'A flat price, given before we begin. It turns on tank or tankless, which fuel, and how hard the heater is to reach; one behind a narrow basement door takes longer than one in a utility room. Any repair is quoted separately, and you decide on it.',
      },
      {
        q: 'How often should the water heater be serviced?',
        a: 'Once a year, as a rule. If popping or rumbling turns up before then, have it checked sooner, since that’s scale building on the bottom. In an old house, the yearly visit is also when a shutoff or fitting starting to fail gets noticed.',
      },
      {
        q: 'Should I try flushing the water heater myself?',
        a: 'If you’re handy, letting some water out of the drain valve is fine and clears some grit. Stop if the valve is old and stiff, because once opened it may not seal again. The relief valve test and any gas work are ours to do.',
      },
    ],
  },
};
