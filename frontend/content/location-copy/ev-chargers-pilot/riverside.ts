import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const riverside: LocationServiceCopy = {
  localParagraph:
    'Six in ten households in Riverside rent, and roughly a third of the homes are in buildings with ten or more units, Census figures show. If that’s you, a charger starts with a talk with the building’s owner. The detached houses strung along River Road range from prewar houses to 1970s builds, and either can hide a crowded or undersized panel. We open it and work out the load before quoting, tell you plainly when the Level 1 cord will do, and set the price before any wiring begins.',
  emergencyParagraph:
    'Unplug and stop if the charging handle, the outlet or the charger box runs hot, darkens or smells like something melting. A flattened cable or a breaker that trips on each charge also needs us. Turn that circuit off only from somewhere dry. If smoke appears, leave and call 911. Most calls are seen the same day, weekends included.',
  commonIntro:
    'In a neighborhood where most people rent, these are the four charging situations that bring owners and residents to us.',
  localFaqs: [
    {
      q: 'I rent an apartment in Riverside. Can I ask for a charger?',
      a: 'You can ask, and the building owner or manager decides. In a larger building, the charger and its circuit belong to the property, so management books the work and we quote them. If they say yes, we size it to the building’s panel. We install chargers, not lease terms.',
    },
    {
      q: 'Is it worth charging overnight at home to use off-peak rates?',
      a: 'For many drivers, yes. Plenty of utilities price late-night power lower, and a Level 2 charger can be set to start after you go to bed and finish before breakfast. Ask your utility which rates it offers, then we can install a charger that schedules itself to match.',
    },
  ],
  overrides: {
    ctaLine: 'Chargers for owners, landlords and buildings in Riverside',
    band1Heading: 'When an Apartment or Home in Riverside Needs an EV Charger',
    commonSituations: [
      'A tenant’s new EV and a landlord deciding whether to add a charging circuit',
      'Wanting the car to charge late at night when power is often priced lower',
      'An older house along River Road whose panel has no free spaces',
      'A driver tired of waiting for public chargers after a long shift',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Riverside',
        body: 'With Level 2, charging stops being an errand. The battery fills much faster than on a wall outlet, so you get more driving per session and less time tethered to a plug. The car is ready when you head out in the morning, and nobody waits behind strangers at a public station. Power at home usually comes cheaper than those stations, and a charger can be scheduled for the overnight discounts many utilities offer. Installed by a licensed electrician, with the breaker, conductors and ground matched to it, the circuit won’t run hot. Owners can count it as a selling point later, too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Riverside',
        body: 'A driver who only goes a short way each week, with a sound outlet beside the car, may never outgrow the Level 1 cord the car came with, and we’d point that out before selling anything. On a regular 120-volt receptacle it restores range slowly, a few miles for each hour. Long drives to work and households with two EVs are the cases that usually need Level 2 on its own 240-volt circuit. Look at whether that outlet powers anything else, and never feed the cord from an extension cord or a cracked, loose or warm receptacle. For residents who park on the street, home charging generally isn’t realistic.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Riverside',
        body: 'What the panel can spare is a matter of the load calculation, not the date on the deed. If there’s capacity, the charger is wired on its own circuit. If it’s tight, you see two figures, a controller that holds charging back while the house draws heavily and a panel or service upgrade, and you decide. For a building, that decision belongs to the owner. We file the permit, and Inspection Bureau, Inc. inspects the work.',
      },
    ],
    whyTitle: 'Why Residents and Landlords in Riverside Choose Us for EV Charger Installation',
    whyParagraph:
      'Before any price is named, a licensed electrician opens the panel and adds up the load. Upgrade, load management or neither, you hear it plainly, and the charger is wired to code for the figure agreed first.',
    sharedFaqs: [
      {
        q: 'How do you price an EV charger installation in Riverside?',
        a: 'You get one flat price once the panel’s been seen. The charger, the stretch of wire needed between the panel and the place you’ll charge, and any panel work shape it. Financing is available, and the number doesn’t move once you’ve approved it.',
      },
      {
        q: 'How much time does a charger install usually take?',
        a: 'On most jobs, several hours from arrival to a tested charger. When the panel has to be upgraded too, the work stretches out, and we explain the extra steps. Either way, the timeline is laid out before we start, so a landlord can tell tenants what to expect.',
      },
      {
        q: 'Could a handy owner install a Level 2 charger without an electrician?',
        a: 'We wouldn’t recommend it. Sizing the circuit, running the load calculation and getting the work permitted and inspected all need a licensed electrician. A circuit that’s undersized or badly connected can overheat behind the wall, which is the exact problem a proper install prevents.',
      },
    ],
  },
};
