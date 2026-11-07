import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const norwood: LocationServiceCopy = {
  localParagraph:
    'Norwood’s houses are old. Census figures put 66.5% of them at 1939 or earlier, so most furnaces live in a basement, vent into a chimney that predates them and have been replaced at least once. Flue and heat exchanger get our longest look for that reason. Two-families and small rentals are common, with 52.5% of households renting, so a visit often means a furnace per unit, booked by the owner. You hear the price before anything is opened, and if a furnace needs nothing, we tell you.',
  emergencyParagraph:
    'Book a repair, not maintenance, for these. Gas odor: leave, don’t touch switches or relight anything, call the gas company from the street. Carbon monoxide alarm: clear the house. A cold furnace in a cold spell, a yellow flame, or short starts and stops. Babies and older people chill fastest. Most calls are same day, weekends included.',
  commonIntro:
    'In the prewar houses and two-families of Norwood, a fall visit usually starts with one of these:',
  localFaqs: [
    {
      q: 'I rent out half of a two-family in Norwood. Am I responsible for the furnace?',
      a: 'Under Ohio law, ORC 5321.04, landlords keep supplied appliances in good working order and provide reasonable heat, so the tenant’s furnace is yours to maintain. We service furnaces, not leases. A fall tune-up on both units, each priced flat before we start, is the simple way to stay ahead.',
    },
    {
      q: 'If my furnace in Norwood needs replacing after the tune-up, who handles the permit?',
      a: 'The City of Norwood Building Department issues the permit for a furnace replacement, and we take care of the application. A tune-up itself doesn’t change the equipment. If we find a furnace isn’t worth more repairs, we explain why and give you a replacement price to think over.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly furnace service for prewar homes and two-families in Norwood',
    band1Heading: 'Signs a Furnace in Norwood Is Due for Maintenance',
    commonSituations: [
      'A basement furnace in a prewar house with a service tag nobody can read',
      'Two furnaces in a two-family, one serviced last year and one forgotten',
      'A furnace cabinet furred with lint beside the basement laundry',
      'A first winter in a house bought near Montgomery Road',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Norwood',
        body: 'Old basements set the pace. We pull the filter and fit a fresh one if it’s choked, then open the blower section, check the motor and brush the wheel clean, because dryer lint finds its way into furnaces that share a basement with the laundry. The thermostat is tested against the furnace. Every safety switch has to prove it shuts down the burners: high limit, flame sensor, pressure switch. We watch ignition, judge the flame, inspect the heat exchanger for cracks and follow the flue to a chimney older than the furnace. A complete heating cycle finishes the visit. Repairs are quoted first; you decide.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'A visit pays for itself on a furnace no one has records for, after you buy, when a squeal or rattle turns up, or when the furnace starts cutting off early. It’s also the right call for a two-family that has to be warm upstairs and down before the tenant reaches for the thermostat. A dusty burning smell that hangs on is another. It’s wasted on a furnace we serviced within the year that runs fine. A dead furnace is Furnace Repair, and one we’ve found cracked deserves replacement money, not a tune-up. Boiler and heat pump homes need those services.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Norwood',
        body: 'On a gas furnace we go over the burners, igniter and flame sensor, test the gas fitting for leaks, and inspect the heat exchanger and the venting into the chimney. Electric furnaces need a shorter list: elements and sequencers metered, wiring checked for heat damage, airflow confirmed. A two-family with one of each gets both on the same trip, each priced separately.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Norwood Book Furnace Maintenance With Us',
    whyParagraph:
      'Prewar basements and side-by-side units are most of our furnace work in Norwood. We’ve been family owned since 1993, our technicians hold licenses and insurance, and our guarantee is plain: we make it right, or there’s no charge.',
    sharedFaqs: [
      {
        q: 'What does furnace maintenance cost in Norwood?',
        a: 'A flat figure, which you approve before we open anything. Fuel and access set it; a narrow basement stair under an old house adds time. Anything worn we find is priced on its own line, and you choose whether it gets done. Saturday visits cost the same as Tuesday ones.',
      },
      {
        q: 'When should I get my furnace tuned up?',
        a: 'Every fall, once a year, ideally before the first freeze, which the National Weather Service puts near October 25 for the Cincinnati area. Early booking gives a little slack to order a part if we find one failing, before the house needs steady heat.',
      },
      {
        q: 'Which furnace jobs are safe for a homeowner to do in Norwood?',
        a: 'The easy ones: a clean filter when the old one looks gray, nothing blocking the registers, new thermostat batteries, and the laundry pile kept off the furnace. Leave the burner compartment and the gas valve closed. Past that point, call us and we’ll take a look.',
      },
    ],
  },
};
