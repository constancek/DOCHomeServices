import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'In Millvale, a water heater repair is usually booked by whoever manages the building, not the person in the shower. Census figures show about 91% of homes in the Beekman Street and Moosewood Avenue area are rented, and about a third of residents live in public housing, much of it 1950s townhomes that CMHA has renovated. Tanks sit in utility closets, usually one per unit. For owners and managers, we find the failed part and agree the price before work starts.',
  emergencyParagraph:
    'Wet closet floor under the heater: close the cold-line valve on top and kill its breaker or gas. Any gas odor: exit, skip the light switches, call the gas company from outdoors. Carbon monoxide alarm: empty the unit first. Then tell management. Infants and elderly tenants get priority, usually the same day, weekends included.',
  commonIntro:
    'Most Millvale water heaters sit in townhome and apartment closets, one per unit. These are the calls we see:',
  localFaqs: [
    {
      q: 'I live in CMHA housing in Millvale. Can I call you about my water heater?',
      a: 'Report it to CMHA or your property manager, in writing if you can, and they arrange the repair. Residents can’t book us directly for a building they don’t own. Meanwhile, check the breaker and whether the water is just slow to reheat, and close the cold-water valve if the tank is leaking.',
    },
    {
      q: 'Does my landlord have to fix the hot water in Ohio?',
      a: 'Yes. Under Ohio Revised Code 5321.04, the owner must keep the appliances they supply working safely, keep running water on, and provide reasonable hot water. Send the request in writing, the way management asks for it, and keep a copy. We repair heaters, not leases, so the owner or manager books the work.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for Millvale owners and property managers',
    band1Heading: 'Common Water Heater Problems in Millvale Homes and Apartments',
    commonSituations: [
      'A closet water heater in a townhome leaking onto the floor',
      'An electric tank giving only lukewarm water after an element failed',
      'A relief valve on the side of the tank dripping again and again',
      'One unit without hot water while the neighbours have plenty',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'A few causes need no repair. In a Millvale townhome, back-to-back baths can drain a small tank, and it needs time to come back. A dial turned low during a move-in is common. Electric units stop on a tripped breaker in the unit panel. Gas units stop if the supply handle is shut or the pilot is out, and relighting from the printed steps is fine only with no gas odor. Tenants should report the rest instead of opening covers. Owners call us for water at the closet floor, brown or sulfur water, or popping. We test, quote, fix and check.',
      },
      {
        title: 'Repair or Replace Your Millvale Water Heater?',
        body: 'Each heater carries a sticker with its install year, and the age of the building won’t tell you that date. Pilot sensors, gas controls, elements, thermostats, pressure valves, anodes and inlet tubes all get swapped individually. A tank whose steel shell leaks is finished, so that one gets a new heater. Managers with many units receive a repair price and a replacement price for each, and decide unit by unit. Millvale is in the City of Cincinnati, where Buildings & Inspections permits replacement plumbing, and we file it.',
      },
    ],
    whyTitle: 'Why Millvale Property Managers Call Us for Water Heater Repair',
    whyParagraph:
      'Millvale is mostly rented townhomes and apartments, and we work with the people who run them. Licensed, background-checked technicians come the same day on most calls, and the flat-rate price is approved before work.',
    sharedFaqs: [
      {
        q: 'What does water heater repair cost for a Millvale rental?',
        a: 'Each repair is priced by the failed part and the fuel. An electric element or thermostat is a different job from a gas valve. Owners and managers get a flat-rate quote after diagnosis and approve it before we start. No overtime fees apply on weekends.',
      },
      {
        q: 'Is it better to repair or replace a rental unit’s water heater?',
        a: 'Repair it when the tank is dry and one part has gone. Replace it when the tank leaks from the body. The install date on the label helps with the decision. We give owners both numbers so they can weigh one unit against the rest of the building.',
      },
      {
        q: 'Why does the hot water run out fast or not come at all?',
        a: 'On an electric tank, a burned-out lower element leaves a small amount of hot water that runs out fast. A broken dip tube or heavy sediment does the same. No hot water at all is often a tripped breaker, an unlit pilot or a failed upper element.',
      },
    ],
  },
};
