import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cheviot: LocationServiceCopy = {
  localParagraph:
    'Close to half of Cheviot’s housing went up in 1939 or earlier, Census figures show, and three in five homes are single detached houses. That mix decides most charger jobs here. A prewar house still on its first small service may have almost nothing spare for a 240-volt line, while one rewired after the war often has a box crammed with breakers. Panel check and load math come first, a Level 1 cord gets our blessing when it’s enough, and the price is fixed before a wire moves.',
  emergencyParagraph:
    'If the plug is too hot to hold, or the breaker clicks off each time the car begins drawing power, charging is over for tonight. Flip that circuit off at the panel when it’s safe to reach. Any smoke or flame means everybody goes outside and somebody calls 911. Most addresses in Cheviot get a same-day visit, weekends included.',
  commonIntro:
    'Around Cheviot, from the two-families to the single houses off Harrison Avenue, charger calls tend to start one of these four ways.',
  localFaqs: [
    {
      q: 'Will Cheviot’s electric aggregation program change anything for an EV charger?',
      a: 'Not for the install. The city’s aggregation program picks who supplies your power, but Duke Energy Ohio still delivers it, so any service upgrade gets coordinated with Duke. Whether a supplier offers a cheaper overnight price is a question for them, so ask before you set the charging schedule.',
    },
    {
      q: 'Can a tenant in Cheviot get a Level 2 charger?',
      a: 'Only with the owner’s written OK, and the owner sets up the job with us, not the tenant. Close to half the households in town rent, so this question comes up a lot. We put in chargers, and lease questions stay between you and whoever owns the house.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charging installed at older houses and two-families in Cheviot',
    band1Heading: 'When a Home in Cheviot Needs an EV Charger',
    commonSituations: [
      'A first EV parked beside a 1920s house whose service never planned for one',
      'The car still half empty after a night on the slow cord, before another long workday',
      'One more evening spent hunting a free public plug instead of going home',
      'A breaker box from the 1950s with no blank slots and a trip or two already this year',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Cheviot',
        body: 'Plugged into a Level 2 unit overnight in Cheviot, a car goes from low to full long before the alarm, where the slow cord would leave it short. That means more range on each charge and fewer mornings stuck waiting. Power at home often beats the bill at a public charger, and many utilities price off-peak electricity lower, which suits plugging in after the late news. Nobody queues behind a stranger for a turn. Correct breaker sizing, wire gauge and grounding stop the circuit from cooking an older panel, and a charger already on the wall leaves a future buyer one less project.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Cheviot',
        body: 'Plenty of people in Cheviot can skip us. If the car does short hops around town and parks within reach of a sound outlet, the cord packed with it runs on ordinary 120-volt power and trickles back a few miles of range each hour, which covers light use. Long commutes, steady daily driving or a second EV are what push people to Level 2 and its own 240-volt circuit. Before calling, find out whether that outlet shares its breaker with anything else, and keep extension cords and loose, warm or cracked receptacles out of the picture. Parking on the street usually rules a home charger out.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Cheviot',
        body: 'For a house in Cheviot, a load calculation weighs the charger against the furnace, air conditioning and kitchen, and that answer beats any guess drawn from the age of the place. Spare capacity means a dedicated run, typically on a 40 to 60 amp breaker depending on the unit. Thin capacity gets two prices, a load-management box or a heavier panel and service, and you decide. The permit and inspection paperwork is ours.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Cheviot Choose Us for EV Charger Installation',
    whyParagraph:
      'Nobody quotes a charger here before a licensed electrician has opened the panel and done the load math. If the box needs an upgrade or load management, we say it plainly, wire to code, and hold the agreed price.',
    sharedFaqs: [
      {
        q: 'What decides the price of an EV charger at a house in Cheviot?',
        a: 'Your charger choice, the length of cable from the breaker box out to where the car sleeps, and whatever the box itself needs settle it. One flat number comes after we’ve seen the panel, nothing moves until you sign off on it, and financing is an option.',
      },
      {
        q: 'How long will a charger install keep the power off in Cheviot?',
        a: 'A typical install runs several hours, with the circuit off for only part of that. Add a panel or service upgrade and the job stretches out, sometimes into a second visit. You get the schedule before we begin, so dinner plans survive.',
      },
      {
        q: 'Is wiring an EV charger yourself a good idea in Cheviot?',
        a: 'Not really. Sizing the circuit to the charger, running a load calculation on the whole house, and getting the work permitted and inspected all fall to a licensed electrician. Get one of those wrong and the risk is a hot panel, not just a failed inspection.',
      },
    ],
  },
};
