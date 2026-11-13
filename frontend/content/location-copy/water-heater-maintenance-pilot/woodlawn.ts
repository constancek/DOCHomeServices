import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const woodlawn: LocationServiceCopy = {
  localParagraph:
    'Woodlawn’s housing is fairly new, with a Census median of 1987, and 66.6% of households rent, many in apartment buildings where a closet tank sits over a drain pan in each unit. Those heaters are the landlord’s to service, and a yearly round across several apartments is the usual job. Owner-occupied houses, mostly built in recent decades, need a straight flush, an anode check and a valve test. Each price is set before we begin, and we’ll say when a tank isn’t worth servicing.',
  emergencyParagraph:
    'Repairs, not tune-ups. A closet tank leaking into its pan: shut the cold-water inlet, then breaker or gas. Gas smell: leave with switches and pilot untouched, and ring the gas company outdoors. Carbon monoxide alarm: out first. A relief valve that keeps running, or no hot water. Tenants tell the landlord; most get a visit that day, weekends included.',
  commonIntro:
    'Here’s how a tank in Woodlawn, in an apartment closet or a newer house, lets you know it’s due:',
  localFaqs: [
    {
      q: 'I rent an apartment in Woodlawn. Who arranges water heater maintenance?',
      a: 'It’s the landlord’s or manager’s job; the heater is their property. Write to them if it pops, drips into its pan or quits halfway through a shower. Ohio’s ORC 5321.04 makes the landlord answerable for supplied appliances being safe and working, and for reasonable hot water. We service water heaters, not leases.',
    },
    {
      q: 'My house in Woodlawn is only a few years old. Does the water heater need maintenance yet?',
      a: 'Yes, and a young tank is a good time to start. Sediment collects from the first week, and the anode rod starts wearing straight away. A first flush and anode check on a newer heater go quickly, and they give us a baseline to compare against at later visits.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater maintenance for apartments and houses in Woodlawn',
    band1Heading: 'Signs a Water Heater in Woodlawn Is Due for Maintenance',
    commonSituations: [
      'A closet tank in an apartment where the drain pan has never been checked',
      'Several units on one owner’s books, all due for their yearly flush',
      'An electric tank whose hot water now gives out mid-shower',
      'A house from the 2000s with the original tank and no service on record',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Woodlawn',
        body: 'Everything starts at the drain valve: we empty the tank and rinse it. Heated water sheds minerals onto the tank floor, and in an electric tank that crust can bury the lower element, which is why showers go cold early; on gas, it’s the popping. The anode rod, which sacrifices itself so the steel doesn’t corrode, gets pulled and, if worn, priced. We lift the relief valve and check its discharge pipe. Elements and thermostats get metered on electric; burner, pilot, venting and gas line on gas. Closet units add the pan, shutoff and connectors. Nothing is replaced until the owner agrees.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'In Woodlawn we’d book one for a 1990s or 2000s tank nobody has drained, a house you’ve just bought, the first popping, and a landlord whose closet heaters across several units need one yearly round. We wouldn’t for a tank that has started leaking through the steel; that’s a replacement, and flushing won’t hold it off. Rust in the hot water, or a heater near its last year, gets the advice to save for the replacement. Owners who like to do their own upkeep can fill a pail from the drain valve now and then. Plan on the full service every twelve months.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Woodlawn',
        body: 'In Woodlawn, electric heat is common, and an electric tank gets drained, its anode pulled and each element and thermostat put on a meter. A gas tank gets burner, pilot and flue checked once it’s drained. Tankless units are descaled: cleaning solution circulates through the heat exchanger, then the inlet filter is cleaned. In a newer house with the right supply, tankless can make sense; we raise it once.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Woodlawn Book Water Heater Maintenance With Us',
    whyParagraph:
      'In Woodlawn we mostly service closet tanks in apartment buildings and tanks in newer houses. Every technician is licensed and insured, everyone we employ passes a background check, and weekend visits carry no overtime fee.',
    sharedFaqs: [
      {
        q: 'How do you price water heater maintenance in Woodlawn?',
        a: 'One flat rate per heater, given before we start. It turns on the heater type, the fuel and the reach; a closet tank squeezed behind a door takes longer than one in a garage. A landlord with several units gets a price for each, approved first.',
      },
      {
        q: 'How often should my water heater be serviced in Woodlawn?',
        a: 'Yearly. Popping or rumbling before then is worth a look sooner, because that’s sediment collecting on the bottom. Landlords who service every unit in the same month each year keep simpler records and see fewer surprises.',
      },
      {
        q: 'Is flushing a water heater a do-it-yourself job?',
        a: 'Partly. A handy owner can bleed a little water from the drain valve between visits. The relief valve test, an older drain valve that may not shut tight, and anything on a gas burner are for us. In a rental, the landlord decides who does it.',
      },
    ],
  },
};
