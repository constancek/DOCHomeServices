import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Winton Hills is almost entirely rentals, 97.0% by Census figures, and most of them are CMHA public housing at Winton Terrace and Findlater Gardens. Tenants there report a cold tap through a housing authority work order, not to us. Our Winton Hills calls come from private landlords and managers: doubles and small buildings away from the public housing grounds, usually with one tank per unit in a basement or closet. For those owners, we diagnose the heater and quote before any repair.',
  emergencyParagraph:
    'Leaking tank: shut the water feeding it at the cold-side valve, then the gas or the breaker. A gas odor means leaving, flipping nothing, and calling the gas company outside. A carbon monoxide alarm means clearing everyone out first. For owners, most Winton Hills calls get a same-day visit, weekends included; infants and sick residents can’t wait long.',
  commonIntro:
    'Owners and managers in Winton Hills mostly call about tanks in rental basements and utility closets. The usual ones:',
  localFaqs: [
    {
      q: 'I live in Winton Terrace or Findlater Gardens. Can I call you directly?',
      a: 'No. CMHA handles repairs in its housing through work orders, so put one in and mention any leak. If water is spreading, you can close the cold-side valve on top of the tank while you wait. Leave the burner cover and electrical panels shut.',
    },
    {
      q: 'I own a Winton Hills rental. What does Ohio expect of me on hot water?',
      a: 'ORC 5321.04 says an Ohio landlord supplies running water and hot water in reasonable amounts, and keeps supplied appliances in good and safe working order. Ask tenants to report trouble in writing. We fix water heaters, not leases, and you see our quote before work begins.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for Winton Hills owners and managers',
    band1Heading: 'Common Water Heater Problems in Winton Hills Homes and Apartments',
    commonSituations: [
      'A basement tank under a rental double leaking at the base',
      'A pilot out on one unit’s gas heater and nobody sure how to relight it',
      'Lukewarm water from an electric heater in a rental closet',
      'Several tenants in one building reporting sulfur-smelling hot water',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Before a tenant reports it, a couple of checks help. A tank emptied by a run of showers refills with heat on its own. A tripped breaker stops an electric unit; a gas knob turned crosswise stops a gas one. Owners can also look for a dial someone nudged down and, if the room smells normal, relight a pilot using the sticker. Genuine faults: water collecting under the tank, rotten-egg odor on the hot side, the relief valve discharging repeatedly, or an electric heater that never gets past lukewarm. We diagnose, give the owner a number, repair on approval and test.',
      },
      {
        title: 'Repair or Replace Your Winton Hills Water Heater?',
        body: 'Judge each water heater by its sticker, not by how old the building is. In Winton Hills rentals, tanks are often far younger than the brick around them. Elements, thermostats, gas controls, thermocouples, anode rods, relief valves and dip tubes are all replaceable parts. A shell leaking through is a new-heater job. When a building has several tanks failing in the same season, we price each separately so an owner can budget. Inside the City of Cincinnati, a replacement needs a Buildings & Inspections permit, and we file it.',
      },
    ],
    whyTitle: 'Why Winton Hills Landlords and Property Managers Call Us',
    whyParagraph:
      'Private landlords and managers in Winton Hills get a licensed, background-checked technician, a per-unit flat price before work, and no overtime charge on weekends. Family owned since 1993; we make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How do you price water heater work on a Winton Hills rental?',
        a: 'One heater at a time, after testing. A gas unit with a failed thermocouple and an electric unit with a burned element are separate jobs with separate prices. The owner or manager approves each flat rate first, so what’s billed is what was quoted.',
      },
      {
        q: 'As a landlord, should I repair or replace a Winton Hills water heater?',
        a: 'With a dry shell and a single failed part, repairing is usually the smarter spend. With water coming through the tank, replace it. Read each heater’s sticker, because tanks in the same building rarely went in the same year.',
      },
      {
        q: 'Why does a tenant get one shower of hot water, or none?',
        a: 'One short shower usually means sediment, a snapped dip tube or, on electric heaters, a dead lower element. Nothing hot at all tends to be the pilot, thermocouple or gas control on gas, and a tripped breaker or failed upper element on electric.',
      },
    ],
  },
};
