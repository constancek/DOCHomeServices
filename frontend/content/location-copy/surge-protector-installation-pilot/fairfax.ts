import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfax: LocationServiceCopy = {
  localParagraph:
    'Census figures put the typical house in Fairfax at 1942, and nearly half the village was built before 1940. Almost nine in ten homes stand alone on their own lot. Breaker boxes from that era tend to be small or packed tight, so only the panel can answer where a surge device gets mounted. Many of these houses have since gained central air. We open the panel before quoting, say so plainly when a few good strips would do, and fix the price ahead of the job.',
  emergencyParagraph:
    'A scorched smell from a switch after lightning, or a dryer sparking as power came back, can’t wait. If the house swings bright and dim, Duke Energy checks the line first. Shut the circuit off only if nothing near is wet or hot. If you see flames, get out and call 911. Most calls get same-day help, weekends included.',
  commonIntro:
    'Older houses in Fairfax that took on central air, newer furnaces and sump pumps over the decades usually warn their owners like this.',
  localFaqs: [
    {
      q: 'Our basement flooded in the July storm, so can a surge protector go in yet?',
      a: 'Not before the breaker box gets a proper look. When water reaches a panel or the wires feeding it, some parts may have to be swapped out first. We tell you what the flood did in there, fix what’s needed, and only then mount the surge device.',
    },
    {
      q: 'Is a basement sump pump covered by whole-house surge protection?',
      a: 'Yes, its circuit is. A sump pump has a motor and often an electronic float switch, and one that dies quietly from surge damage gets found out during the next downpour. The device at the panel guards that circuit with every other one. We also look at the outlet the pump plugs into.',
    },
  ],
  overrides: {
    ctaLine: 'Surge protection at the breaker box for older houses in Fairfax',
    band1Heading: 'Signs a Home in Fairfax Needs Surge Protection',
    commonSituations: [
      'Bulbs that sag for a second every time the central air starts in a 1940s house',
      'Breakers that pop now and then on a panel with no spare slots left',
      'A sump pump or furnace control that stopped working after a thunderstorm',
      'Central air installed in recent years on a house that was built long before it',
    ],
    proseSections: [
      {
        title: 'Benefits of Whole-Home Surge Protection in Fairfax',
        body: 'In Fairfax, most of what’s worth guarding is far younger than the walls around it. The newer air conditioner and the gas furnace’s electronic controls both hang off the same service, so one jolt from the street can hit them together. A device mounted at the panel bleeds off that excess before it can travel out to the rooms. Your cooling equipment and the fridge stay healthy longer, and a spike is less likely to start a fire in old wiring. Summer storms are easier to sleep through when the pump in the basement has power it can trust.',
      },
      {
        title: 'Whole-Home or Plug-In Surge Protection in Fairfax',
        body: 'If you rent in Fairfax, or all you’d hate to lose is a TV and a laptop, two good plug-in strips are likely all you need, and we’ll tell you so. The case for a panel unit builds as the house adds central air, a furnace run by a circuit board and kitchen appliances with their own electronics. Keep the strips on the TV and computer as a second layer. Lights that blink or breakers that keep tripping can come from a loose connection or a tired panel, so we look there before any surge talk. A strip that took a heavy hit may have nothing left.',
      },
      {
        title: 'Panel Check and Permits for a Surge Protector in Fairfax',
        body: 'A surge device needs free room in the box and a spot near where the service lands. Boxes from the 1940s often have neither, which is why we look first. When the panel is crowded or failing, Electrical Panel Replacement comes ahead of the surge work, if you want it. The install follows code and the maker’s instructions. We confirm with the village what it needs, then take out any required permit and book the inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Fairfax Choose Us for Surge Protection',
    whyParagraph:
      'Our electricians are licensed, and they look inside the breaker box before suggesting a thing. They’ll be straight about what a panel unit stops and what slips past it. The install meets code, at a price you’ve already agreed.',
    sharedFaqs: [
      {
        q: 'How do you settle the price of surge protection in Fairfax?',
        a: 'It’s one flat figure, given after we’ve looked at the box. Two things drive it, the layout of your panel and where the device can be mounted. A box with no free space makes for a bigger job. Nothing starts until you’ve said yes, and qualifying owners can finance it.',
      },
      {
        q: 'Does a panel-mounted surge protector guard every electronic thing I own?',
        a: 'Not quite. Its strength is the jolt that rides in on the utility lines, from switching or a nearby lightning strike, the kind that kills a few devices in one go. A spike that starts inside when a motor kicks on gets less help, and cable or ethernet lines get none, so keep strips on electronics.',
      },
      {
        q: 'Can I put in a whole-house surge protector without an electrician?',
        a: 'We’d say no. It wires into the box right beside the main lugs, which stay energized even with the main breaker off. A licensed electrician mounts it to code and the maker’s instructions, then proves it’s seated tight and working. A badly wired unit can look normal while guarding nothing.',
      },
    ],
  },
};
