import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'Half the houses in Mount Lookout, 50.9% by Census figures, were standing by 1939, and the median dates to 1938. For a yearly service that means a trip down cellar stairs to a tank parked near an old flue, a brass drain spigot gone stiff, and a gas line we look over while the sediment drains. Owners hold 74.1% of homes here, so you’ll be the one down there with us. You hear the flat price first, and if the tank is past saving, we say it.',
  emergencyParagraph:
    'Wet floor under the heater? That’s a repair: shut the cold handle on top, then gas cock or breaker. Same for a spitting relief valve or cold taps. Gas in the air: out the door, no switches, call the gas company from the sidewalk. A carbon monoxide alarm empties the house first. Same-day visits on most calls, weekends too.',
  commonIntro:
    'Around Mount Lookout Square and up the hillside streets, these are what usually prompt the booking:',
  localFaqs: [
    {
      q: 'Floodwater reached our basement in Mount Lookout this July. Is the water heater still okay to run?',
      a: 'Not until someone checks it, if the water climbed as high as the burner, the gas control or the electric thermostats. Fox19 listed Mount Lookout with Hyde Park and Oakley as the East Side areas hit hardest by the July 2026 flooding and sewer backups. A heater the water never touched just gets its normal yearly service.',
    },
    {
      q: 'We closed on an old house near the Observatory in Mount Lookout. Where do we start with the water heater?',
      a: 'Start with the label on the tank, which gives the year it went in. Then book a first service: we drain whatever sediment the last owners left, pull the anode rod to see how much is left, and lift the relief valve lever. After that you’ll know whether to keep servicing it or start setting money aside.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater flushes and checkups for cellar tanks in Mount Lookout',
    band1Heading: 'Signs a Water Heater in Mount Lookout Is Due for Maintenance',
    commonSituations: [
      'A 1930s cellar with a tank that carries no service tag',
      'Ticking and popping from the burner since the weather turned',
      'A brass drain spigot frozen in place under layers of paint',
      'The last of three morning showers coming out lukewarm',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Mount Lookout',
        body: 'Whatever minerals ride in with the water drop to the floor of the tank, and the flame under a gas heater, or the lower element in an electric one, ends up cooking through that crust. We open the drain and flush until the bucket runs clear. The anode rod, a sacrificial stick that rusts first so the steel shell is spared, comes out and gets a price if it’s down to the core wire. We lift the relief valve’s lever and trace its pipe. Gas units: burner, pilot, flue draft, gas fitting. Electric: elements, thermostats. On 1930s cellar plumbing we test the shutoff. Repairs wait for your approval.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Book the visit if the heater works but nobody can remember it ever being drained, if you bought the house without a single receipt for it, or if the popping is brand new. Don’t book it for a tank weeping from its own shell. That tank is finished, and a flush won’t buy it time. We say the same about brown hot water or a heater deep into its last stretch: put the money toward the replacement. Between our visits, a handy owner can bleed a bucket or two off the drain valve. Yearly is what we advise for a heater worth keeping.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Mount Lookout',
        body: 'Gas service is common in Mount Lookout, so expect a tank with a burner and a flue to check alongside the flush and the anode. If yours is electric, the elements and thermostats get a meter on them instead. Tankless heaters skip the flush; we descale the heat exchanger by pumping cleaning solution through it, then rinse the inlet screen filter. Swapping an old tank for tankless later is worth one conversation, and only one.',
      },
    ],
    whyTitle: 'Why Homeowners in Mount Lookout Book Water Heater Maintenance With Us',
    whyParagraph:
      'We spend a lot of time on cellar stairs in Mount Lookout, and we price the job before we touch the tank. Every technician is licensed, insured, background-checked and drug-tested, and the work is guaranteed: right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does water heater maintenance cost in Mount Lookout?',
        a: 'There’s one flat figure, and you hear it before any wrench turns. Tank versus tankless, gas versus electric, and the route to the heater shape it; a tank behind the furnace at the foot of cellar steps takes more time than one in an open garage. A worn anode rod or valve is quoted on its own line.',
      },
      {
        q: 'How often should a water heater be serviced?',
        a: 'We advise a yearly visit. Popping or rumbling that shows up sooner is the sediment talking, and it’s worth a look before the date comes around. A tank in Mount Lookout that has sat untouched since the previous owners usually needs the longest first flush.',
      },
      {
        q: 'Can I flush my water heater myself?',
        a: 'Opening the drain valve and letting a bucket or two run out is a fair weekend job for a handy owner. We’d keep you away from three things: a decades-old drain valve that may never seal again once cracked open, the gas burner and pilot, and the relief valve test, which can leave an old valve dribbling.',
      },
    ],
  },
};
