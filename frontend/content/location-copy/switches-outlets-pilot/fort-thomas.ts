import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fortThomas: LocationServiceCopy = {
  localParagraph:
    'In Fort Thomas, about a third of houses went up before 1940, and Census figures put the median at 1955. Houses that age were wired when a family owned a radio and a toaster, so bedrooms and kitchens now run on cords and strips, receptacles wear loose, and some are still the two-slot ungrounded kind. Each visit starts with testing at the outlet, the circuit and the panel; if the breaker just needed resetting, we’ll say it, and no work starts before you’ve agreed the price.',
  emergencyParagraph:
    'In Fort Thomas, a receptacle or switch that’s scorched, throwing sparks, smoking or hot brings an electrician the same day on most calls, weekends too; so do a jolt from a plate, a soft plug and a breaker that won’t latch. Kill the circuit only if nothing nearby is wet or hot. With fire or smoke, leave and dial 911.',
  commonIntro: 'In Fort Thomas, the calls we take most look like this:',
  localFaqs: [
    {
      q: 'Why does my space heater keep tripping the breaker in Fort Thomas?',
      a: 'A space heater pulls a lot of power, and in an older house it often shares a circuit with a bedroom or two. The breaker trips to protect that wiring. We test the circuit and can add a receptacle on a new circuit, so the heater isn’t competing with the lamps and chargers.',
    },
    {
      q: 'Do houses built before 1940 in Fort Thomas need rewiring for new outlets?',
      a: 'Not always. We test the wiring and the panel first. Sometimes we can add receptacles to sound circuits; other times the old wiring can’t carry more, and Home Rewiring makes more sense. You get both options priced, and you decide.',
    },
  ],
  overrides: {
    ctaLine: 'Receptacle and switch repair for older houses in Fort Thomas',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Fort Thomas',
    commonSituations: [
      'A receptacle in a 1930s house so worn that plugs sag and drop out',
      'A space heater that kills the back bedroom’s breaker every January',
      'A scorched outlet behind a dresser where one strip was feeding another',
      'A 1950s bathroom with no GFCI anywhere near the sink',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Fort Thomas',
        body: 'In Fort Thomas, the older bathrooms and basements are where GFCIs are usually missing, though code also wants them at kitchen counters, in garages and outdoors. A GFCI tallies the current sent out against the current that comes back. A mismatch tells it current is leaving by some other path, maybe through a person at the sink, and it shuts the power off fast. It can’t detect water, which simply makes that kind of leak more likely. We add GFCIs in those rooms and can fit receptacles with USB ports by the bed, the kitchen counter or a desk where phones spend the night.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Fort Thomas',
        body: 'Begin with whatever GFCI the dead receptacle hangs off. It could be in a bathroom, the basement, the garage or on the porch, and once tripped it can silence plugs rooms away, so push reset till it clicks. Then open the panel and hunt for a breaker resting off. In a lot of the prewar houses in Fort Thomas, a wall switch controls a receptacle, so flick those as well. Power back means nothing to book. A USB receptacle or smart switch adds ease but doesn’t repair anything. Warmth, buzzing, scorching or sparks, or a breaker that won’t hold after a reset, call for an electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Fort Thomas',
        body: 'A prewar house in Fort Thomas may have a panel with every slot taken or wiring that shouldn’t carry another load, so both get metered before receptacles are added. If either falls short, Electrical Panel Replacement or Home Rewiring is priced on its own line next to the receptacle work, and you choose. Work meets code. Here, the city’s General Services Department issues electrical permits and a state electrical inspector inspects, and we arrange both where required.',
      },
    ],
    whyTitle: 'Why Homeowners in Fort Thomas Choose Us for Switches and Outlets',
    whyParagraph:
      'A licensed electrician tests your receptacle, its circuit and the panel before you see a price. If resetting a breaker or swapping one device fixes it, we say so. Everything else is wired and grounded to code once you approve.',
    sharedFaqs: [
      {
        q: 'How do you charge for switch and outlet work in Fort Thomas?',
        a: 'You see a flat rate once we’ve tested, and you sign off before a screwdriver comes out. Device count, your pick of GFCI or USB receptacles, and any circuit or panel work shape the figure. Financing is on offer for bigger jobs.',
      },
      {
        q: 'How does a GFCI tell when someone is getting shocked?',
        a: 'It doesn’t feel the person; it notices a gap. Current going out should equal current coming back, and when some is missing, it may be travelling through someone’s body. The GFCI then cuts the power fast. Water is only the most common reason the gap appears.',
      },
      {
        q: 'Can a handy homeowner replace their own outlets?',
        a: 'The swap looks simple, but the risk is in what you can’t see. A licensed electrician confirms the circuit, the grounding and the wire connections, and makes sure the work meets code. In a house from the 1930s, that check often turns up things a quick swap would miss.',
      },
    ],
  },
};
