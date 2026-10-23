import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const alexandria: LocationServiceCopy = {
  localParagraph:
    'Alexandria homes split almost down the middle on heat, so our first question on the phone is gas or electric. Census figures show 49.4% heat with electricity and 44.1% with gas, which puts electric furnaces and heat pumps on the schedule as often as gas furnaces. Most houses here went up from the 1980s on, so we often meet an original furnace from a 1990s or 2000s build that is starting to wear out. We pin down the fault and quote the repair before work begins.',
  emergencyParagraph:
    'On roughly 100 nights a year the CVG station drops to freezing or lower, per NOAA normals, and a furnace that dies in Alexandria on one of those nights turns the house cold. Households with a newborn, an elderly relative or someone sick should call early. Gas or electric, we usually finish the same day, weekends too.',
  commonIntro:
    'Alexandria is mostly owner-occupied detached homes from the 1980s onward, heated about half by gas and half by electricity. These furnace calls come up most:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a furnace in Alexandria?',
      a: 'Yes. Kentucky law calls for a permit on any furnace or heat pump replacement, and for Alexandria addresses the state names Campbell County Planning, Zoning and Building Inspection as the HVAC office rather than city hall. We get that permit filed ahead of installation day, so the county paperwork never lands on your desk.',
    },
    {
      q: 'My all-electric Alexandria home is cold but the blower is running. What’s wrong?',
      a: 'Most often the heating elements have lost power or one has burned through, so the blower circulates air that never picks up any heat. Look in the breaker panel for a tripped heat circuit and put a fresh filter in. When both check out, we meter each element and its relays and show you the bad part before replacing it.',
    },
  ],
  overrides: {
    ctaLine: 'Alexandria furnace repair for gas and all-electric homes',
    band1Heading: 'Common Furnace Problems in Alexandria Homes',
    commonSituations: [
      'An electric furnace with one or more burned-out heating elements',
      'A 1990s gas furnace with a worn igniter or a noisy inducer motor',
      'A heat pump stuck on backup heat and running up the electric bill',
      'A builder-grade furnace in a newer home that shuts off after a few minutes',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Start with the thermostat: heat mode, good batteries. Then the furnace’s service switch on the cabinet or the wall next to it should be on, and the breaker set. A filter gone grey gets replaced. Push the front panel until it seats, since its door switch keeps a lot of furnaces off. If the house warms after that, cancel the visit. Phone us when the unit fires and cuts out every few minutes or the breaker refuses to stay set. With a gas odor, leave without touching anything electrical and ring the gas company from the yard. With a carbon monoxide alarm, everybody goes outside first.',
      },
      {
        title: 'Repair or Replace Your Alexandria Furnace?',
        body: 'Ignore the date on the deed and look at the furnace. Plenty of 1990s Alexandria houses have already had a second furnace put in, and when a newer unit loses an igniter, blower motor or element, fixing it is the sensible call. A cracked heat exchanger puts safety ahead of money, since carbon monoxide can escape through it, so that furnace comes out. Campbell County issues the permit for the new one, and we file it. Earlier on, the Duke Energy Kentucky or Owen Electric bill tends to flag trouble first, when a heat pump keeps leaning on its backup strips or an electric furnace runs and runs.',
      },
    ],
    whyTitle: 'Why Alexandria Homeowners Call Us',
    whyParagraph:
      'Alexandria winters keep us in gas and all-electric houses alike, so we know what to ask before we arrive. A licensed, background-checked technician shows you the fault, you sign off on the price first, and we make it right.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Alexandria?',
        a: 'Testing comes first, because the failed part sets the price. A single element or igniter in an Alexandria furnace is a modest repair, while a control board or blower motor runs higher. You get one flat figure to approve before we pick up a tool, and Saturday or Sunday visits are priced like any weekday.',
      },
      {
        q: 'Is it worth repairing an older furnace in Alexandria?',
        a: 'Usually, when a single part gave out and everything else checks sound. A cracked heat exchanger reverses that answer, because carbon monoxide can escape and the furnace shouldn’t run at all. Lots of Alexandria houses still have the furnace the builder put in, so we price the repair and a replacement on the same visit.',
      },
      {
        q: 'Why is my Alexandria furnace blowing cold air?',
        a: 'Confirm the thermostat reads heat and not fan, then swap the filter. Gas homes in Alexandria often have burners that light and drop out over a dirty flame sensor. All-electric homes more often have a tripped breaker or a dead element. We find which before quoting anything.',
      },
    ],
  },
};
