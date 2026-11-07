import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walton: LocationServiceCopy = {
  localParagraph:
    'Walton has two kinds of houses, and the tune-up differs between them. The old town along South Main Street has basement furnaces in houses from before 1960, often vented into an old chimney, so we spend longer on the flue and the heat exchanger. The newer streets, where Census figures place 55.3% of homes built since 2000, mostly need a filter, blower and safety-control check. Electricity heats 59.3% of homes, heat pumps included. You get a flat price before work, and we’ll say if nothing’s needed.',
  emergencyParagraph:
    'Smell gas and it’s a repair, not maintenance: get out, leave switches alone, and call the gas company once outside. Carbon monoxide alarm: clear the house. Same for no heat in a cold spell, a furnace that won’t stop cycling, or a yellow flame. A baby or older relative at home makes it urgent. Most are same day, weekends too.',
  commonIntro:
    'Old-town basements and post-2000 houses both show up on our list in Walton. The usual reasons to book:',
  localFaqs: [
    {
      q: 'Our house near South Main Street in Walton is old. What does a furnace tune-up check there?',
      a: 'Everything a newer house gets, plus more time on venting. Older homes often send the furnace exhaust into a masonry chimney, and we check the pipe between furnace and chimney and confirm the exhaust draws up and out. If the flue needs work, we show you and price it before touching it.',
    },
    {
      q: 'I rent a duplex in Walton. Who books the furnace maintenance?',
      a: 'Your landlord, since the furnace is theirs. Let them know about any noise, smell or cold room, and they can schedule us. Landlords with several rentals often book them all in one fall visit. We service furnaces, not leases, so heating terms stay between you and the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Fall furnace tune-ups for old-town and newer houses in Walton',
    band1Heading: 'Signs a Furnace in Walton Is Due for Maintenance',
    commonSituations: [
      'A basement furnace in an older house off South Main Street with no service history',
      'A builder’s furnace in a newer subdivision, never opened since move-in',
      'A duplex where the landlord can’t say when the furnaces were last checked',
      'A rattle in the flue pipe when the burners fire',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Walton',
        body: 'Filter out, new one in if it’s dirty; then we clean the blower wheel and check its motor. The thermostat and controls are tested, and we go through the wiring and safety controls: the limit switch, the flame sensor and the pressure switch. With the furnace firing we watch the igniter, burners and flame. The heat exchanger is inspected for cracks, and the venting is checked all the way out, which for older houses in Walton means a chimney in many cases. A full heating cycle ends the visit. If anything needs a repair, we price it, and nothing is replaced until you approve.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'A tune-up makes sense in Walton for an old-town furnace nobody has serviced, a newer furnace that has gone years without a look, a house you just bought, or a rental building of several units. A burning smell that won’t clear after the first days of heat, a new squeal or rattle, and short cycling are good reasons too. It doesn’t make sense for a furnace serviced in the last year that runs normally, or one that has stopped heating, which needs Furnace Repair. Heat pump homes have their own service. Book once a year and change dirty filters between visits.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Walton',
        body: 'Electric heat is more common than gas in Walton, so electric furnaces come up often: we check the heating elements and the sequencers that stage them, inspect the wiring, and confirm the blower moves enough air. On gas furnaces we check the burners, igniter, flame sensor and gas connection, then the heat exchanger and the venting. Heat pumps get a separate visit.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Walton Book Furnace Maintenance With Us',
    whyParagraph:
      'We work on furnaces in both halves of Walton, the old houses near South Main Street and the subdivisions built since 2000. Each technician is licensed and insured, background-checked and drug-tested, and quotes flat before starting.',
    sharedFaqs: [
      {
        q: 'How much does furnace maintenance cost in Walton?',
        a: 'It’s quoted as one flat rate before we start. Gas or electric, how tight the space is, and how many furnaces you’re booking set the price. Repairs we find are priced separately, and you say yes or no to each. There’s no overtime fee on weekends.',
      },
      {
        q: 'Is once a year the right schedule for a furnace in Walton?',
        a: 'Yes, every fall. Around October 25 is when the first freeze normally arrives, going by the National Weather Service, so September or early October is ideal. Older furnaces near South Main Street gain the most from going into winter with a checked flue and clean burners.',
      },
      {
        q: 'Which parts of furnace care are safe to do myself?',
        a: 'The filter, the vents and the thermostat. Swap a dirty filter, keep registers uncovered, and change thermostat batteries when they’re low. Don’t keep paint cans or boxes near the furnace. The burner compartment and gas valve should stay shut to you; call us if something there seems off.',
      },
    ],
  },
};
