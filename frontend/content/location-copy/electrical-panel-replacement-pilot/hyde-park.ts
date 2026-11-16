import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Hyde Park’s housing is old, and its panels show it. Census figures put a little over half the homes here before 1940. Under those older houses we often open a basement fuse box, or a breaker panel added decades back and since outgrown by central air and a range. Postwar houses tend to run out of slots instead. Before quoting, we test each breaker and trace the feed from the meter. If one tired breaker is the whole story, we say so, and the price is settled first.',
  emergencyParagraph:
    'Same-day help is warranted for a smell like hot wiring, a cover too hot to touch comfortably, crackling, charred spots, sparks, or a breaker that won’t hold. A wet panel should be left alone. That breaker can be switched off only by someone standing dry with nothing hot nearby. Smoke or flame means everyone out and a call to 911.',
  commonIntro:
    'Under the old houses and in the apartment buildings around Hyde Park Square, these are the warnings owners mention first:',
  localFaqs: [
    {
      q: 'Who inspects a new electrical panel in Hyde Park?',
      a: 'Because Hyde Park lies within Cincinnati city limits, Inspection Bureau, Inc. (IBI) reviews electrical permits here and sends the inspector for the final. We submit the application before the swap and stay for that visit, so the paperwork never lands on your kitchen table.',
    },
    {
      q: 'Breakers keep tripping in my rented flat in Hyde Park. Who should arrange the repair?',
      a: 'Your landlord does. Send the owner a dated note listing each trip and what was running. Ohio law, ORC 5321.04 (A)(4), makes landlords keep the electrical fixtures they provide in good and safe working order. We swap panels, not leases, so the owner schedules us.',
    },
  ],
  overrides: {
    ctaLine: 'Fuse box and breaker panel upgrades for older houses in Hyde Park',
    band1Heading: 'Signs a Home in Hyde Park Needs a New Electrical Panel',
    commonSituations: [
      'A basement fuse box that pops whenever the dryer and the microwave overlap',
      'Upstairs bedroom lights sagging each time the condenser starts',
      'A kitchen remodel stalled because the panel has no empty spaces',
      'A faint hot smell near an old panel tucked under the basement stairs',
    ],
    proseSections: [
      {
        title: 'Benefits of a New Electrical Panel for Homes in Hyde Park',
        body: 'A modern panel lets a house from the 1920s keep up with the household living in it. The range, the air conditioning, a heat pump and a car charger can each run on a dedicated line, so starting one no longer knocks out another. Screw-in fuses are gone for good, replaced by breakers you flip back. Each circuit gets written on the door, which ends the trial-and-error hunt during a remodel. Sellers gain too, because a buyer’s inspector will photograph that panel, and a fresh one with a neat directory rarely draws a note. Later repairs tend to be fewer.',
      },
      {
        title: 'Electrical Panel Repair or Replacement in Hyde Park',
        body: 'Plenty of old houses here have had their panels updated, so test results decide. A breaker worn past use, a terminal scorched from a loose wire, or one circuit acting strangely is a repair, and the panel stays. A fuse box, a box crowded to the last space with circuits still needed, a bus bar with burn or heat marks, or a discontinued model is the case for replacing. Our quote lists both routes, and you choose. Flick the tripped breaker off, then on, and watch. Outlets dead near a sink, in the garage or outside come back when you press the GFCI reset, since one GFCI protects several.',
      },
      {
        title: 'Sizing and Permits for a New Electrical Panel in Hyde Park',
        body: 'Sizing follows the load you have now plus the one you’re planning, say a charger or a finished third floor, and ignores the label on the old box. Older services sometimes need a new meter base or a heavier service drop before more capacity is possible, which widens the job, and you’ll know before the price is set. Duke Energy Ohio handles the disconnect and reconnect. The permit and its inspection are ours to arrange.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hyde Park Choose Us for Electrical Panel Replacement',
    whyParagraph:
      'Cramped old basements and crowded apartment meter rooms are normal territory for us. Each of our electricians holds a license and insurance and has passed a background check and drug test. The flat price is yours to approve beforehand.',
    sharedFaqs: [
      {
        q: 'What will it cost to replace a panel in Hyde Park?',
        a: 'After we’ve looked, you get one flat number. Four things drive it, namely the panel itself, how much service the house needs, whether the meter base must be replaced, and the permit. Swapping a basement fuse box costs differently than adding room to a newer panel. Weekend work carries no overtime charge.',
      },
      {
        q: 'How do I know my panel in Hyde Park is due for replacement?',
        a: 'Repeated trips, lights that waver when the air or the range kicks in, a hot or burnt odor, darkened breakers, a hum and a warm door all point that way. So does an original fuse box, or a panel that can’t accept the circuit a new appliance needs.',
      },
      {
        q: 'Could I put in a new panel myself?',
        a: 'We’d strongly advise against it. Power from the street stays live above the main breaker until the utility pulls the meter, and the voltage there can kill. The job also requires a permit and a passed inspection. Hire a licensed electrician, even if you wire your own light fixtures.',
      },
    ],
  },
};
