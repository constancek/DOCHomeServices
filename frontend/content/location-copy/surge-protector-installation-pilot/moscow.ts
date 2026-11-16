import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'In Moscow, most of the hundred or so houses went up before 1940, by Census figures, and nearly every one stands on its own lot. Electric heat is the norm in the village, with some fuel oil still around. A house that old may have had its panel swapped decades ago or never at all, and that decides where a surge device fits. River water that reached a basement changes things too. We open the panel before quoting, admit when strips will cover you, and fix the price up front.',
  emergencyParagraph:
    'An outlet or panel that’s blackened or smells hot after a storm gets a same-day visit on most calls, weekends included. So does a breaker that won’t hold after a reset, or a heater that sparked when power returned. Flip the breaker only if you’re dry and nothing near it is hot. Smoke or flames mean leaving and dialing 911.',
  commonIntro:
    'Along Water Street and up the hill from the Ohio, older houses tell us they need surge protection like this.',
  localFaqs: [
    {
      q: 'High water reached our house in Moscow. Can we still add a surge protector?',
      a: 'Wait until an electrician has opened the panel. Breakers, bus bars and wiring that the Ohio River soaked tend to corrode and give out months later, so they come out first. Leave anything that was submerged switched off. Once the panel is sound again, a surge device can go on it.',
    },
    {
      q: 'Our house in Moscow heats with electricity. Is that worth protecting?',
      a: 'It’s the first thing we’d guard. Baseboard thermostats, an electric furnace or a heat pump all rely on controls that little spikes chip away at, one after another, and no heat in January in a drafty pre-war house is miserable. The panel device catches those spikes on the way in.',
    },
  ],
  overrides: {
    ctaLine: 'Panel surge protection for pre-war houses in Moscow',
    band1Heading: 'Signs a Home in Moscow Needs Surge Protection',
    commonSituations: [
      'Baseboard or furnace heat on electricity in a house older than 1940',
      'Bulbs that sag every time the furnace blower or a big motor kicks in',
      'Window units traded for a central air conditioner out back',
      'A tripped breaker after thunder that nobody can explain',
    ],
    proseSections: [
      {
        title: 'Benefits of Whole-Home Surge Protection in Moscow',
        body: 'Lightning off the river gets noticed, yet the steady trouble comes from ordinary utility switching and from motors in the house starting and stopping. Those pulses are tiny and constant. Each one nicks the boards in a thermostat, a refrigerator or a TV, and eventually a part gives up. Because electricity carries the heat in so many houses here, the heating controls lead our list. A device mounted at the panel also keeps over-voltage away from the air conditioner, trims the chance that a spike starts a fire, and lets gear plugged in around the house run for more years. Thunderstorms feel less nerve-racking.',
      },
      {
        title: 'Whole-Home or Plug-In Surge Protection in Moscow',
        body: 'Renting a room, or owning nothing fancier than a television and a laptop, means quality strips will probably do, and a panel device would be money you didn’t need to spend. The case for one grows with central cooling, electric heat, a newer fridge or washer full of electronics, and a pile of chargers and smart plugs. Even then, the TV and computer stay on their strips. Two quick checks help. Constant tripping or dimming in a house this age often traces to tired wiring, and we chase that down first. A strip that has soaked up one bad hit may be finished.',
      },
      {
        title: 'Panel Check and Permits for a Surge Protector in Moscow',
        body: 'Space in the box and the correct slot matter, so an overloaded or corroded panel is handled before anything new is added, with Electrical Panel Replacement as an option you decide on. The device is mounted following code and the maker’s instructions and proven to work before we go. Clermont County Building Inspection covers permits for the village, and the paperwork and inspection are ours to arrange.',
      },
    ],
    whyTitle: 'Why Homeowners in Moscow Choose Us for Surge Protection',
    whyParagraph:
      'People here get a licensed electrician who reads the old panel first, says honestly where a surge device helps and where it can’t, and wires it in to code for one agreed flat price.',
    sharedFaqs: [
      {
        q: 'How much does a surge protector cost for a house in Moscow?',
        a: 'One flat figure, given once we’ve seen the panel. An older box that needs a breaker moved or a repair costs more than a roomy one, and the mounting spot plays in too. Nothing starts until you say yes, and qualifying owners can finance it.',
      },
      {
        q: 'Will a panel surge protector keep all my electronics safe?',
        a: 'It does its best work on surges riding in over the utility lines, which is how a storm kills several things at once. Spikes born inside the house, say from the fridge compressor, slip past more easily, and a satellite or internet cable has no protection from it. Strips handle the rest.',
      },
      {
        q: 'Can a handy homeowner install a whole-home surge protector?',
        a: 'We’d say no. It goes inside the panel beside live conductors, often in a box older than you are, and with a weak ground it protects nothing while looking normal. A licensed electrician fits it to code and the maker’s instructions and confirms it’s working.',
      },
    ],
  },
};
