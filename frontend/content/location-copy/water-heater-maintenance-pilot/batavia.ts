import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const batavia: LocationServiceCopy = {
  localParagraph:
    'The village of Batavia skews old: by Census figures a third of its houses date to 1939 or earlier, and the median one to 1955. Expect the heater tucked in a cellar corner, a flaky flue connector overhead, gas pipe we follow back to its cock and a drain spigot nobody has cranked since it was fitted. Around a quarter of addresses are apartment buildings with a closet heater per unit, looked after by the owner. Our quote comes before tools come out, and a hopeless tank gets called hopeless.',
  emergencyParagraph:
    'Seeping tank: turn its cold supply off overhead, then fuel or breaker. A whiff of gas means walk out, no switches, no relighting, and phone the gas company outdoors. A carbon monoxide alarm empties the house. A relief valve stuck open, or not a drop of hot water, is repair work too. Normally same day, weekends included.',
  commonIntro:
    'Around the courthouse and out toward the edges of the village, these tell us a heater in Batavia needs its yearly visit:',
  localFaqs: [
    {
      q: 'Is a water heater in an old basement in Batavia harder to service?',
      a: 'It can take longer. Old basements often hide a drain spigot that’s seized or leaks once opened, a flue connector rusted thin and a gas cock that’s hard to turn. We check those before draining anything, and anything that needs replacing is priced so you decide first.',
    },
    {
      q: 'I rent in Batavia and the hot water runs out quickly. Should I book a flush?',
      a: 'Pass it along to whoever owns the place. Ohio’s landlord statute, ORC 5321.04, has a hot water clause at (A)(6) and an appliance upkeep clause at (A)(4), and both point at them. Rental contracts aren’t our department; heaters are. We take bookings from owners and property managers.',
    },
  ],
  overrides: {
    ctaLine: 'Once-a-year tank care for older houses and apartments in Batavia',
    band1Heading: 'Signs a Water Heater in Batavia Is Due for Maintenance',
    commonSituations: [
      'A cellar heater under a pre-1940 house, never drained by its present owner',
      'A flue connector with flaking rust where it meets the chimney',
      'Popping that starts a minute after the burner lights',
      'Closet heaters in a small apartment building, serviced on no schedule',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Batavia',
        body: 'Job one is emptying the heater and chasing the grit out with fresh water. Every tap water supply carries minerals that drop and harden into a bed below the water; the flame or elements then fight through that bed, and the tank pops, or showers fade early. Job two is the anode, a rod that rusts on purpose to spare the shell; if it’s nearly gone, you get a price. Then we yank the relief valve lever and follow its pipe down. Gas units: burner, pilot, flue, gas cock. Electric units: elements and thermostats. A brittle cellar spigot gets eased, never forced. Repairs happen only with your nod.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Here’s when it pays: a heater that works yet has sat undrained for years, keys to a home that came with no service history, or the first pops of sediment. Owners of apartment buildings in the village gain most, getting each closet done on one trip. Here’s when it doesn’t: steel already leaking, which no rinse can seal, so a new heater is next. Brown hot water, or a heater limping toward its end, gets the same answer from us, which is to keep your money for the swap. Owners comfortable with a hose can run a little off the spigot between visits. We usually recommend yearly.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Batavia',
        body: 'Storage models get emptied and their anode inspected. Tankless models get descaled: we circulate cleaning solution through the heat exchanger and pick debris off the inlet screen. Gas is the leading heat source in Batavia, so lots of village heaters have a burner and flue for us to examine; electric ones get element readings. Tankless could make sense when a storage tank finally goes.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Batavia Book Water Heater Maintenance With Us',
    whyParagraph:
      'Cellars beneath pre-war houses and closets in apartment buildings are where we spend our time in Batavia. Each technician is licensed, insured, screened and drug tested, and you okay the flat rate up front.',
    sharedFaqs: [
      {
        q: 'How is water heater maintenance priced in Batavia?',
        a: 'Flat, and stated before work. We weigh storage against tankless, gas against electric, and how tricky the route in is. Squeezing past a furnace down a steep cellar stair to reach a seized spigot takes longer than a laundry room job. Saturdays and Sundays carry no overtime.',
      },
      {
        q: 'How often does a water heater need maintenance in Batavia?',
        a: 'Once every year suits most homes. If popping or a rumble shows up before the year is out, book sooner, because sediment is collecting. Landlords can line up all their closets for the same week so nothing gets missed.',
      },
      {
        q: 'Can I flush the water heater on my own?',
        a: 'Bleeding a bucket off the spigot now and then is a fair job for a capable owner. Skip it if that spigot is ancient and might weep once closed, which happens a lot in cellars here. Anything involving the gas burner, and the relief valve test, belongs on our list.',
      },
    ],
  },
};
