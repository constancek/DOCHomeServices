import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dryRun: LocationServiceCopy = {
  localParagraph:
    'Houses in Dry Run are young by Cincinnati standards: Census figures give a median of 1986, and 63.2% went up in 1980 or later. Almost all are detached single-family homes, so the heater usually stands in an open basement or garage with room for a hose and a bucket. A builder-installed tank left alone since closing is the classic case. Our quote comes before any wrench turns, and if yours is too far gone to bother servicing, we’ll tell you straight.',
  emergencyParagraph:
    'Leaking tank: twist the cold handle above the heater shut, then kill its gas or breaker. Gas odor: out the door, no light switches, no relighting, and phone the gas company from the driveway. Carbon monoxide alarm: household outside. A relief valve spitting repeatedly, or a cold tap, means a repair call. Most are same-day, weekends included.',
  commonIntro:
    'Even a quiet tank in Dry Run can be overdue. Here’s what tends to give it away:',
  localFaqs: [
    {
      q: 'We just closed on a house in Dry Run. Is a water heater service worth booking now?',
      a: 'If there’s no service history taped to the tank, yes. One visit shows you the state of things: how much grit flushes out, how much anode is left, and whether the relief valve moves freely. A heater that turns out to be near retirement gets an honest word before you pay for upkeep on it.',
    },
    {
      q: 'If my water heater in Dry Run needs replacing, who issues the permit?',
      a: 'Not the township. Dry Run is unincorporated Anderson Township, and plumbing permits there are handled by Hamilton County Public Health. When a maintenance call ends with a new tank, our office files that permit and books the inspector; your part is unlocking the door.',
    },
  ],
  overrides: {
    ctaLine: 'Annual water heater flushes for homes across Dry Run',
    band1Heading: 'Signs a Water Heater in Dry Run Is Due for Maintenance',
    commonSituations: [
      'The builder’s tank from a 1990s closing, never drained since',
      'A soft crackle in the garage whenever the burner lights',
      'No service date anywhere on a heater you inherited at closing',
      'Same family, same habits, yet the hot water quits sooner',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Dry Run',
        body: 'Draining comes first. Minerals ride in with the water and drop to the tank floor, so the flame has to cook through a crust before it warms anything, and that crust is the crackle. With the tank rinsed, we pull the anode, the rod sacrificed to protect the steel, and quote a fresh one if it’s eaten down. Then the relief valve: we lift it, watch it reseat and trace its discharge pipe. Gas heaters get the burner, pilot, flue and gas fitting; electric heaters, both elements and their thermostats. Basements in Dry Run leave room to check the shutoff and connectors properly. Nothing is swapped without your yes.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Book us for a tank that runs fine yet has never been drained, for a house you bought in Dry Run with no paper trail on the heater, or when a faint rumble has just started. Don’t book us for a tank seeping through its shell; that needs replacing, and no amount of flushing seals it. Brown hot water, or a heater well into its final stretch, earns the same blunt advice: bank the money for the new one. If you’re handy, opening the drain valve for a bucket or two between our visits does no harm. One full service a year is plenty for most households.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Dry Run',
        body: 'Gas service is common in Dry Run, so the typical tank visit pairs the drain-down and anode with a look at burner, pilot and flue draft. An electric tank swaps that for an element and thermostat test. Tankless units get descaled instead: we isolate the unit, pump a cleaning solution through its heat exchanger for a while, then pull and rinse the inlet filter. If tankless interests you down the road, ask; a healthy tank is still worth keeping.',
      },
    ],
    whyTitle: 'Why Homeowners in Dry Run Book Water Heater Maintenance With Us',
    whyParagraph:
      'In Dry Run we mostly see roomy basements and garages, and tanks nobody has touched since the builder left. Background-checked, drug-tested, licensed and insured technicians, a flat rate approved first, family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How is a water heater tune-up in Dry Run priced?',
        a: 'By the job, not the clock. Three things move the flat rate: whether it’s a tank or tankless unit, which fuel it burns, and how much is stacked around it. A clear garage corner is about as easy as it gets. Worn parts we find get their own quote first.',
      },
      {
        q: 'Is a yearly water heater service enough?',
        a: 'For most tanks, once a year does it. The exception is noise: if crackling or rumbling starts mid-year, don’t wait, because sediment is piling up faster than usual. A tank that has never been drained since the house was built should go first on the list.',
      },
      {
        q: 'Could I just drain the tank myself?',
        a: 'Sure, a bucket or two from the drain valve between visits is harmless if you’re comfortable with it. Stop there, though. Plastic drain valves on older tanks can weep after opening, gas burners aren’t a weekend project, and the relief valve test is ours, because a valve that won’t reseat needs pricing on the spot.',
      },
    ],
  },
};
