import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const norwood: LocationServiceCopy = {
  localParagraph:
    'Norwood is a city of old basements. By Census figures, 66.5% of homes went up in 1939 or earlier and 26.5% sit in two- to four-unit buildings, so the stairs off Montgomery Road often lead to one heater per unit lined against a wall. Plan on flue pipe to inspect, drain spigots nobody has turned and gas piping worth a look. With 52.5% of households renting, owners tend to book every tank at once. The flat price is settled first, and a tank past helping gets an honest verdict.',
  emergencyParagraph:
    'Leaking tank: close the cold supply over it, then shut the gas or its circuit, and book a repair. Do the same for a relief valve that keeps blowing, or taps that run cold. Gas in the air: leave, no switches, phone the gas company. Carbon monoxide alarm: everybody outside. Same-day visits on most calls, weekends too.',
  commonIntro:
    'In the old basements and two-families of Norwood, these are the usual triggers:',
  localFaqs: [
    {
      q: 'Our building in Norwood has three water heaters in one basement. Can you do them all on one visit?',
      a: 'Yes. If nobody has marked which tank feeds which unit, we tag them first. Then each one is drained, its anode rod pulled and its relief valve tripped, and each gets its own price on the quote. You’ll come away knowing which tanks are worth servicing next year and which to budget for.',
    },
    {
      q: 'I rent half of a two-family in Norwood. Can I have the water heater serviced?',
      a: 'Ask the owner, in writing. Norwood is its own city, but Ohio’s landlord law still applies: under ORC 5321.04, the owner keeps supplied appliances in good and safe working order and provides reasonable amounts of hot water. We service water heaters, not leases, so the owner books us and can add your side’s tank to the others.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater maintenance for old basements and two-families in Norwood',
    band1Heading: 'Signs a Water Heater in Norwood Is Due for Maintenance',
    commonSituations: [
      'Three tanks in one basement and nobody sure when any was drained',
      'A pre-1940 gas tank that rumbles once the burner lights',
      'A drain spigot crusted white at the base of an old tank',
      'A two-family just bought with no paperwork on either heater',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Norwood',
        body: 'Sediment first. Minerals carried in by the water harden into a crust on the tank floor; the burner or elements have to drive heat through that crust, so you hear rumbling and run short of hot water. A drain and flush takes it out. Next comes the anode rod, which rusts so the tank wall can stay sound; once used up, it gets priced for replacement. The relief valve gets tripped and its discharge pipe checked. Gas tanks: burner, pilot, flue, gas connection. Electric: elements and thermostats. In basements this old we test the shutoff valve too. Work beyond that is quoted first.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'A yearly visit earns its cost in Norwood when the tank heats fine but has never once been drained, when you bought a two-family without records, when a rumble has just appeared, or when one basement holds several tanks to keep straight. It earns nothing on a tank leaking from its body. That tank is done, and a new one is the fix. Rusty hot water, or a heater nearly worn out, gets the same plain answer: put the money toward the replacement. Owners who are handy can drain a little from the spigot between visits. We advise one service a year.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Norwood',
        body: 'Gas or electric, every tank in Norwood gets drained and has its anode looked at. A gas tank adds the burner, pilot and flue to that list; an electric one, a meter test on its elements and thermostats. Tankless heaters are descaled instead, with cleaning solution run through the heat exchanger, and the inlet filter cleaned. Tankless may not suit a cramped old basement, and we won’t try to sell you one.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Norwood Book Water Heater Maintenance With Us',
    whyParagraph:
      'Basements holding one heater per unit are routine for us in Norwood. Licensed and insured technicians who have passed background checks and drug tests, a price you approve before work, and no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does water heater maintenance cost in Norwood?',
        a: 'You get a flat rate per heater before we begin. Tank or tankless, which fuel, and the squeeze to reach it set the figure; three tanks crowded into one old basement take more time than a single heater with open floor around it. Parts beyond the service are quoted on their own, and you pick.',
      },
      {
        q: 'How often should a water heater get maintenance?',
        a: 'We advise a yearly visit. Rumbling or popping that starts earlier means grit is building on the tank floor, so it’s worth a look sooner. With one tank per unit, servicing the whole basement on one visit keeps every date the same.',
      },
      {
        q: 'Is flushing a water heater a do-it-yourself job?',
        a: 'Partly. A handy owner can let a little water out through the drain spigot between visits. A spigot frozen for years may never close again once forced, so leave that one for us, along with the gas burner and the relief valve test.',
      },
    ],
  },
};
