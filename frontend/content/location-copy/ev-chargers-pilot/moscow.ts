import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'Census figures show that most of the housing in Moscow was built before 1940, and almost every house is detached and lived in by whoever owns it. A good share still run on a modest original service with little margin for a 240-volt circuit, and over half of households heat electrically off that supply. We study the panel and tally the load first, mention it if the cord from the car covers your driving, and agree on a price before a tool comes out.',
  emergencyParagraph:
    'Anything the Ohio touched, charger or outlet, stays unplugged until we’ve tested it. A hot plug, a scorch mark or a burning whiff means the same. Kill the circuit only from somewhere dry with clear access to the panel. With smoke or flames, leave, then ring 911. Most calls get a visit that same day, Saturdays and Sundays too.',
  commonIntro:
    'In a small river village of mostly pre-war houses, these four reasons account for most charger calls in Moscow.',
  localFaqs: [
    {
      q: 'Can a pre-1940 house take a Level 2 charger in Moscow?',
      a: 'Many can, though the service sometimes needs help first. We stack the charger on top of the electric heat and every other load in a written calculation. A fit earns it a dedicated circuit. A miss gets you a load-management device priced against a service upgrade, and the device frequently wins on cost.',
    },
    {
      q: 'Should a charger in Moscow be mounted higher because of river flooding?',
      a: 'Where the Ohio has come onto a property before, mounting the charger and its connections as high as the wall sensibly allows is worth doing. Some equipment jobs in the village have needed a floodplain permit, so we check whether yours does before work starts.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charging for pre-war houses along the river in Moscow',
    band1Heading: 'When a Home in Moscow Needs an EV Charger',
    commonSituations: [
      'A small original service with no room to spare and a first EV arriving',
      'Long drives toward Cincinnati that a plug-in cord can’t refill overnight',
      'Electric heat and a charger both leaning on the same modest service',
      'Charging off-peak at home rather than driving out to a public station',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Moscow',
        body: 'Living this far up the river, a Level 2 unit at home means every drive out starts on a full battery. It replenishes a pack far faster than an ordinary outlet, adding more range per session and wasting less of your evening. Connect at night and it’s topped up by morning, no public station or line involved. Power from your own meter usually undercuts public stations, and many utilities price off-peak hours lower. A licensed install sizes breaker and wire and grounds the circuit, sparing an older house the strain, and buyers increasingly want a charger already in place.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Moscow',
        body: 'When trips seldom go past the village limits and a sound outlet sits near where you park, the cord that came with the car can probably manage on 120 volts at its own unhurried pace. You’ll hear that from us first. Commuting into the city, or keeping two EVs, usually justifies Level 2 on a dedicated 240-volt line. Pre-war wiring makes the checks matter more. Confirm the cord’s outlet sits alone on its circuit, and never lean on an extension cord or a receptacle that’s loose, tired or warm. A car parked on the street usually can’t use a home charger, which is better learned before spending.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Moscow',
        body: 'House age alone proves nothing, because the load calculation is what rules. Room on the service means a circuit set aside for the charger. A shortfall means two written figures, load management against a panel or service upgrade, and your choice of the two. Clermont County Building Inspection issues permits in the village, so we pull ours there, book the inspection and walk the inspector through it.',
      },
    ],
    whyTitle: 'Why Homeowners in Moscow Choose Us for EV Charger Installation',
    whyParagraph:
      'A licensed electrician opens the panel and works the load out before quoting, tells you without hedging whether an upgrade or load management is due, and installs to code for the price you accepted first.',
    sharedFaqs: [
      {
        q: 'How do you set the price for an EV charger in Moscow?',
        a: 'A single flat price, set after the panel visit. The unit, the length of wire from the panel to where you park, and the state of the old service all feed into it. Financing is available, so a needed service upgrade doesn’t have to stall the charger.',
      },
      {
        q: 'How long does an EV charger installation take in Moscow?',
        a: 'Most houses take several hours. An older service that needs upgrading first adds time, because the utility has its part to do. The timeline reaches you before we begin, along with when the lights will be out.',
      },
      {
        q: 'Can I wire a charger into my older house myself in Moscow?',
        a: 'Please don’t, particularly on an old service. Sizing the circuit, proving the fit with a load calculation and getting a permit and county inspection belong to a licensed electrician, and a mistake inside a pre-war wall can stay hidden until it overheats.',
      },
    ],
  },
};
