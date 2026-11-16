import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const elmwoodPlace: LocationServiceCopy = {
  localParagraph:
    'Elmwood Place is a small, tightly built village, and its housing is mostly pre-war. Census figures put 62.3% of homes before 1940 and count 62.9% as rented, so a typical maintenance call is a landlord’s heater in the cellar of an old house or double, with a drain valve gone brittle, a vent pipe into an aging chimney and gas fittings that deserve a close look. Owner-occupied houses get the same visit. We price it before starting, and tell you if a tank is beyond servicing.',
  emergencyParagraph:
    'Repair, not tune-up: a tank dribbling from its jacket. Twist the cold-water handle above it shut, then kill gas or breaker. Any whiff of gas: walk out touching no switch or pilot, and phone the gas company outside. Carbon monoxide alarm: nobody stays inside. Same for a relief valve stuck open or a cold tap. Usually same day, weekends included.',
  commonIntro:
    'Landlords and homeowners in Elmwood Place usually book a service on a working heater for one of these:',
  localFaqs: [
    {
      q: 'I own a few rentals in Elmwood Place. Can you service all the water heaters in one trip?',
      a: 'Yes. Elmwood Place is compact enough that several rentals a couple of blocks apart can be done back to back. We work through each heater in turn, quote any repair house by house, and nothing gets fixed until you’ve approved that house’s price.',
    },
    {
      q: 'I rent a house in Elmwood Place. Who should book the water heater service?',
      a: 'The owner. Ohio’s landlord statute, ORC 5321.04, covers this twice: (A)(4) on keeping supplied appliances in good and safe working order, (A)(6) on reasonable hot water. Popping or short showers are worth a written note to your landlord. We service heaters; the lease is between you and the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Annual water heater service for rentals and houses in Elmwood Place',
    band1Heading: 'Signs a Water Heater in Elmwood Place Is Due for Maintenance',
    commonSituations: [
      'A cellar tank in a pre-war rental that the last owner never drained',
      'Popping from a gas tank that tenants have started to mention',
      'A double where one side runs out of hot water much sooner than the other',
      'A drain valve so old nobody wants to be the first to open it',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Elmwood Place',
        body: 'Minerals ride in with the water, sink, and form a crust the burner or elements must heat through, so the tank pops and the showers shorten. We drain it and flush the crust out, coaxing a pre-war cellar drain valve open and shut without forcing it. The anode, a rod that corrodes instead of the tank, is pulled; if it’s down to the wire we quote a new one. A lift of the relief valve shows whether it opens and reseats, and its pipe gets a look. Gas models get burner, pilot, flue and gas joint checked; electric models, elements and thermostats. Nothing changes until you okay a price.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Most homes in Elmwood Place are rented, and a landlord with tanks in two or three houses gets the most from a yearly round. A heater that runs fine but has never been drained, a house that came with no paperwork, and early popping are good reasons too. Water seeping through the shell is not. That tank is finished, and flushing it only wastes your money. Rusty hot water or a heater plainly worn out gets the same verdict: put the fee toward its replacement. If you’re handy, letting a few gallons run out between our visits does no harm. We suggest booking yearly.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Elmwood Place',
        body: 'Gas service is common in Elmwood Place. On a gas tank we pair the flush and anode check with a burner, pilot and draft check; on electric, a meter on the elements and thermostats. Tankless heaters need descaling instead, a cleaning solution looped through the heat exchanger for a set time, then a rinse of the inlet filter. Tankless gets a mention at replacement only if the house suits it.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Elmwood Place Book Water Heater Maintenance With Us',
    whyParagraph:
      'Pre-war cellars and doubles a short walk from Vine Street are nearly all of our maintenance work in Elmwood Place. Every technician is licensed, insured, background-checked and drug-tested, and prices are approved first.',
    sharedFaqs: [
      {
        q: 'What does water heater maintenance cost in Elmwood Place?',
        a: 'Every heater has one flat price, quoted before the drain valve is touched. Tankless takes longer than a tank, gas has more parts to check than electric, and a cellar reached by a steep, narrow stair adds time. You see the figure, you say yes or no, and no overtime is ever added.',
      },
      {
        q: 'How often should a water heater in an old house in Elmwood Place be serviced?',
        a: 'We tell people yearly. Popping or rumbling between visits means sediment is piling up faster, so call before the date. On a pre-war cellar setup the drain valve and the flue also get a fresh look each time, since both have aged with the house.',
      },
      {
        q: 'Can a homeowner or landlord flush the water heater?',
        a: 'An owner who’s comfortable with tools can let a few gallons out of the drain valve now and then. Stop if the valve is so old it won’t turn freely. We handle the gas burner and the relief valve test. Tenants should tell the owner instead of opening anything.',
      },
    ],
  },
};
