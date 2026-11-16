import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const ross: LocationServiceCopy = {
  localParagraph:
    'Detached houses make up about eight in ten homes in Ross, and the median one dates from 1972, according to Census figures. Many panels that age ran out of slots years ago. About one home in seven still heats with fuel oil, and a later switch to a heat pump belongs in the panel plan now. Newer houses usually have space or can lean on load management. We open the panel, run the load numbers, tell you if plain 120-volt charging will serve, and price the job before wiring.',
  emergencyParagraph:
    'Discoloration on the plug, an outlet that feels warm, or a whiff of scorched plastic means you end the session. A breaker tripping on every charge counts as well. Shut the circuit off only if you can stay dry. For smoke or fire, leave and call 911. Most calls get a visit that day, weekends too.',
  commonIntro:
    'Out here, these four reasons come up most often when someone calls us from Ross.',
  localFaqs: [
    {
      q: 'We heat with oil now but may switch to a heat pump. Should that affect the charger plan?',
      a: 'Yes, tell us about it. A heat pump and a charger both add real load, so we include the heat pump in the load calculation even if it’s a year away. That way the panel or load management you choose today still works when the furnace is replaced.',
    },
    {
      q: 'Who supplies power in Ross, and does it matter for a charger?',
      a: 'Depending on the address, power comes from Butler Rural Electric Cooperative or Duke Energy. For a charger on an existing circuit, it rarely matters. If the job needs a service upgrade, the utility has to be involved, so we confirm which one serves you and coordinate with it.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charging for detached houses in Ross',
    band1Heading: 'When a Home in Ross Needs an EV Charger',
    commonSituations: [
      'Miles on Hamilton Cleves Road that the trickle cord can’t replace by morning',
      'A 1970s panel with nowhere left to add a 240-volt breaker',
      'Two EVs in one family and only one slow cord between them',
      'An oil furnace due for replacement and a charger planned at the same time',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Ross',
        body: 'In a mostly rural township, a charger at home matters more than it would in town. Level 2 refills the battery at a far quicker clip than a household outlet, so each session carries you further and the car waits less. Start it after supper and you leave in the morning on a full battery, without driving off to find a public charger. Power at home usually beats public charging on price, and many utilities discount the overnight hours, so ask yours. We match breaker, wire and ground to the charger so the panel never strains. Buyers increasingly count a charger as a plus.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Ross',
        body: 'For errands close to home, plugging the portable unit that came with the car into a reliable outlet can be plenty, and we’ll tell you to stay with it. At 120 volts it restores range slowly, which leaves anyone covering serious distance behind. Long commutes or a second EV usually justify Level 2 on a circuit of its own at 240 volts. Confirm the outlet you use isn’t also running a sump pump, and never feed the portable unit through a power strip, an adapter or an aging outlet that wobbles or heats up. If the car stays out on the street, home charging is rarely practical.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Ross',
        body: 'The house’s age is a clue, and the load calculation is the verdict. Spare capacity means the charger gets a circuit nobody else uses. Too little, and two prices land in front of you, one for a controller that holds charging back while the furnace and dryer run, one for a bigger panel or service. Ross Township has no building department of its own, so we pull the permit and line up the inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Ross Choose Us for EV Charger Installation',
    whyParagraph:
      'First the panel cover comes off and our licensed electrician works out the load. Then you get a plain answer on upgrades or load management, an install that meets code, and a price that doesn’t move.',
    sharedFaqs: [
      {
        q: 'How much does it cost to install an EV charger in Ross?',
        a: 'One flat rate, quoted after we’ve inspected your panel. Which charger you pick moves it, as do the feet of wire between the panel and the charging spot and any panel work. Financing is available, and nothing starts before you approve the figure.',
      },
      {
        q: 'How long does installing a home EV charger take?',
        a: 'Several hours covers most jobs. A panel upgrade drags it out, more so when your power company has to schedule a disconnect. You get the full timeline up front, including when the power will be off and when the car can charge again.',
      },
      {
        q: 'Why shouldn’t I install the charger circuit myself?',
        a: 'A charger circuit needs the right breaker and wire size, a load calculation to confirm the panel can take it, and a permit with an inspection. That’s why it calls for a licensed electrician. A mistake can leave a circuit that runs hot every time you charge.',
      },
    ],
  },
};
