import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const harrison: LocationServiceCopy = {
  localParagraph:
    'Electric heat leads in Harrison, so many of our furnace calls here involve elements, not burners. Census figures show 64.5% of homes heating with electricity, by an electric furnace or a heat pump backed by heat strips, and 34.0% on gas. Harrison’s houses are young for the area, the typical one built in 1992, so many systems run on circuit boards and newer blower motors. We identify your setup, trace the fault and price the repair before starting.',
  emergencyParagraph:
    'Newer Harrison houses hold heat better, but not for long once a furnace dies and NOAA normals at CVG put January lows near 23 degrees. A newborn, a grandparent or anyone ill feels it first, and long outages can freeze plumbing. Electric furnaces, gas furnaces and heat pump backup heat get fixed, usually the day you call, weekends included.',
  commonIntro:
    'Harrison is mostly electric heat in houses built since 1980, with some gas furnaces and apartments in the mix. These are our usual Harrison calls:',
  localFaqs: [
    {
      q: 'My Harrison home flooded. Can I turn the furnace back on?',
      a: 'No. After the August 2026 Whitewater River flooding, any furnace that sat in water should stay off until it’s inspected. Water can ruin gas valves, electric heating elements and control boards even when they look dry. Leave it off and call us, and we’ll tell you plainly what can be saved.',
    },
    {
      q: 'Does Harrison require a permit for a new furnace?',
      a: 'Yes. The City of Harrison’s Department of Buildings and Inspections requires a permit for replacement heating units and duct rework, then inspects the work. We file it and schedule the inspection. A repair on your existing furnace is a smaller job, and we let you know if it needs paperwork.',
    },
  ],
  overrides: {
    ctaLine: 'Harrison electric and gas furnace repair',
    band1Heading: 'Common Furnace Problems in Harrison Homes',
    commonSituations: [
      'Burned-out elements or a failed sequencer in an electric furnace',
      'A heat pump stuck on backup strips while the electric bill climbs',
      'A worn igniter on a gas furnace in a 1990s house',
      'A furnace that stood in Whitewater River floodwater',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'A few checks can spare you a call. The thermostat should be on heat, set above the room temperature, with fresh batteries. An electric furnace usually has its own breaker, so look at the panel and reset a tripped one once. Confirm the furnace’s power switch is up, the filter isn’t matted with dust and the access door sits tight, since a loose door shuts many units down. Warm air again means no visit. Tenants report to the landlord, who owes reasonable heat under ORC 5321.04; leases aren’t our department. In a gas home, smelling gas means no switches, no relighting, out the door, then call the gas company.',
      },
      {
        title: 'Repair or Replace Your Harrison Furnace?',
        body: 'Judge by the unit. Lots of Harrison homes went up after 2000, so their furnaces are fairly young, and a failed element, relay or blower motor in one of them is a fair repair. In a gas furnace, a cracked heat exchanger flips the decision, since carbon monoxide can escape through it. If a CO alarm sounds, everyone gets out before making a call. A replacement takes a city permit, and we file it. Keep watch on the electric bill as well: a failing electric furnace or heat pump runs longer, so the bill rises before rooms turn cold.',
      },
    ],
    whyTitle: 'Why Harrison Homeowners Call Us',
    whyParagraph:
      'Harrison homeowners get a technician who works on electric and gas furnaces alike, with a flat-rate price approved before work. We’ve been family owned since 1993, and if a repair isn’t right, we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Harrison?',
        a: 'That depends on what failed, so we test before pricing. A heating element or sequencer on an electric furnace is usually a contained repair, while a blower motor or control board takes more. You approve one flat price before work begins, with no overtime charge for evenings or weekends.',
      },
      {
        q: 'Should I repair or replace my Harrison furnace?',
        a: 'If a single part has failed and the rest is sound, repair it. If a gas furnace’s heat exchanger has cracked, or the unit needs work every winter, replacement makes more sense. Many Harrison furnaces are in houses built since the 1990s, so check the unit’s date. We price both side by side.',
      },
      {
        q: 'Why is my Harrison furnace blowing cold air?',
        a: 'On electric heat, a tripped breaker or burned-out element leaves the fan moving unheated air, so check the panel first. Make sure the thermostat is on heat, not fan, and change the filter. On a gas furnace, a dirty flame sensor or failed igniter keeps the burners from lighting. Those need us.',
      },
    ],
  },
};
