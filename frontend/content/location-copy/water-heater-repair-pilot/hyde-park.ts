import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Hyde Park homes are mostly owner-occupied, and Census figures show just over half of them went up in 1939 or earlier. In practice many heaters sit in early-1900s basements, plumbed to flue connectors and shutoff valves that haven’t moved in years. Gas service is common. About a third of units are in apartment buildings, with heaters tucked into closets. We diagnose the heater, say plainly what failed and quote a flat price before starting.',
  emergencyParagraph:
    'A leaking Hyde Park tank: twist the cold supply valve on top shut, then cut its gas or breaker. Gas odor: get out first, leave the light switches alone, and reach Duke Energy from the sidewalk. Carbon monoxide alarm: same drill, everyone out. Babies and older relatives feel a cold tap most. Most calls are same day, weekends included.',
  commonIntro:
    'Hyde Park water heater calls are mostly tanks in older basements, plus closet units in apartment buildings. These come up most:',
  localFaqs: [
    {
      q: 'My Hyde Park house is from the 1920s. Is the old venting a problem for a new water heater?',
      a: 'Sometimes. A new gas heater has to vent correctly, and an old flue connector or chimney liner may not suit it. We inspect the venting as part of any replacement quote and include what’s needed in the price, so nothing gets added later. Electric heaters don’t vent at all.',
    },
    {
      q: 'Do you repair water heaters in Hyde Park apartments?',
      a: 'Yes, when the owner or property manager books us. Tenants should put a cold tap or leak in writing to the landlord; Ohio’s ORC 5321.04 makes reasonable amounts of hot water part of the landlord’s duty. We fix water heaters, not leases, so approval comes from the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Hyde Park water heater repair for older houses',
    band1Heading: 'Common Water Heater Problems in Hyde Park Homes',
    commonSituations: [
      'A gas tank in an early-1900s basement with a corroded flue connector',
      'A shutoff valve that won’t close once the tank starts leaking',
      'Popping and rumbling from sediment in an older gas tank',
      'A relief valve discharging onto the basement floor',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'A few checks first. Houseguests, a long bath and a load of whites can empty a tank, and the fix is patience. See that nobody turned the temperature dial down. A tripped breaker knocks out an electric heater completely. On gas, the supply valve should be open and the pilot burning; relight following the label, never with gas in the air. Once those check out, book us for water on the floor, rusty or sulfur-smelling hot water, a pilot that dies again, or black scorch marks near the burner. We find the cause and quote it before any repair.',
      },
      {
        title: 'Repair or Replace Your Water Heater in Hyde Park?',
        body: 'Go by the date on the heater. Plenty of Hyde Park houses went up before 1940, and the tank in the basement has usually been changed more than once since. On a tank that holds water, a new thermocouple, gas valve, element, thermostat, dip tube or relief valve is money well spent. A tank weeping from its body is done, and replacement is the fix. We quote both, and you choose. On a replacement we check that the shutoff valve and gas line suit the new heater, and we pull the permit where one is needed.',
      },
    ],
    whyTitle: 'Why Hyde Park Homeowners Call Us for Water Heater Repair',
    whyParagraph:
      'We work in a lot of early-1900s basements here, where the heater is the easy part and the old connections need care. Technicians are licensed and drug-tested, and we’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does water heater repair cost in Hyde Park?',
        a: 'The fault and the fuel decide the price. Swapping a thermocouple on a gas tank is quick; replacing an electric heater’s element and thermostat is longer. We give you a flat rate after the diagnosis, and work starts only when you approve. Financing is available on replacements.',
      },
      {
        q: 'Should I repair or replace my Hyde Park water heater?',
        a: 'One failed part on a dry tank is a repair. A leak from the body is a replacement. The install date on the label says more than the year the house was built. If it’s a new heater, we also check the vent so it goes in right.',
      },
      {
        q: 'Why is my Hyde Park hot water running out or missing?',
        a: 'Running short is often sediment filling the bottom of a gas tank, or a burned-out lower element in an electric one. No hot water at all usually means the pilot went out or the breaker tripped. Check those two, and call us if the hot water stays away.',
      },
    ],
  },
};
