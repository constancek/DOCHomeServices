import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Many houses in Aurora are old: Census figures put 38.8% at 1939 or earlier, and 21.9% sit in buildings of two to four units. That often means a basement heater with old venting, a drain valve that hasn’t turned in years and gas piping worth checking, sometimes with one tank per flat and the landlord deciding. Gas service is common here. Newer houses need only a drain, rod check and valve test. We set the price before work, and if a tank isn’t worth servicing, you’ll hear it from us.',
  emergencyParagraph:
    'When the tank leaks, close the cold supply valve above it, then the gas cock or breaker. Smell gas: leave without flicking a switch or touching the pilot, and call the gas utility from the street. Carbon monoxide detector sounding: clear the house first. Endless relief valve discharge, or a tank gone cold: same-day repair on most calls, weekends included.',
  commonIntro:
    'In the older parts of Aurora, a service call usually starts with one of these:',
  localFaqs: [
    {
      q: 'Our basement near the riverfront in Aurora took on water. Can you just service the water heater?',
      a: 'No. Floodwater gets into gas valves, burners and wiring, so a heater that was submerged stays off until we’ve checked it as a repair job, not a flush. The National Weather Service puts riverfront buildings in Aurora among the places that flood when the Ohio runs high.',
    },
    {
      q: 'We own a two-family house in Aurora. Can you service both water heaters on one visit?',
      a: 'Yes, and it’s a common job here. We drain and check each tank, note which is in better shape and price any repairs unit by unit. Tenants should report problems to you in writing, and booking is your call. We service water heaters, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater maintenance for older houses and flats in Aurora',
    band1Heading: 'Signs a Water Heater in Aurora Is Due for Maintenance',
    commonSituations: [
      'Two tanks in the basement of an old two-family house, neither drained',
      'A gas heater under a pre-1940 house with a rusty flue pipe',
      'Rumbling from a heater a new owner knows nothing about',
      'A landlord with a few flats wanting every tank checked on one trip',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Aurora',
        body: 'We start at the drain. Minerals carried in with the water sink and cake on the tank bottom, which is why an older heater rumbles and hot water gives out early. Out comes the anode next, a rod that corrodes so the tank shell is spared; if it’s mostly gone, you get a quote. We work the temperature and pressure valve and see where its pipe ends. Gas service is common in Aurora, so burner, pilot, flue and gas connection checks are routine; electric tanks get elements and thermostats tested. Cellar shutoffs get a careful look. Repairs wait for your yes.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Landlords with a two-family or a four-unit building in Aurora get the most from a yearly round, since every tank gets a look on the same morning. Owners who bought an old house with no paperwork, or who just heard the first rumble, come next. A heater weeping through its steel is the exception; it needs replacing, and draining can’t fix it. Same with rusty hot water or a tank that’s plainly finished: we’d say keep the fee toward the new heater. Between visits, letting a little water off the bottom valve is a fine owner job.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Aurora',
        body: 'Gas tanks get drained, have their anode pulled and their burner and flue checked; electric tanks swap the burner checks for element and thermostat tests. Tankless heaters are descaled with cleaning fluid run through the exchanger, and the inlet screen gets a rinse. Where a cellar has room, a tank usually stays a tank; tankless rates one line in the talk at replacement time.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Aurora Book Water Heater Maintenance With Us',
    whyParagraph:
      'Two-family houses, small apartment buildings and pre-1940 cellars are the bulk of what we service in Aurora. Every technician is licensed and insured, passes a background check and drug test, and quotes one flat price before starting.',
    sharedFaqs: [
      {
        q: 'How is a water heater service priced in Aurora?',
        a: 'One flat figure, before anything starts. Tank or tankless, gas or electric, and the route to the heater set it; a cellar down steep steps takes longer than a utility closet. Two tanks in one building get one combined quote. Parts are priced separately, and only installed with your okay.',
      },
      {
        q: 'How often should I have my water heater maintained?',
        a: 'Once a year. If rumbling starts between visits, have it checked sooner; that’s sediment piling up on the bottom. In a house with two or three tanks, doing them all on the same yearly visit keeps it simple for you and the tenants.',
      },
      {
        q: 'Can I flush the water heater without a technician?',
        a: 'If you’re handy, draining some water from the bottom valve clears loose sediment and is fine to do. Stop there. An old valve might not reseal, gas burner work belongs to a technician, and the relief valve test can leave a valve dripping.',
      },
    ],
  },
};
