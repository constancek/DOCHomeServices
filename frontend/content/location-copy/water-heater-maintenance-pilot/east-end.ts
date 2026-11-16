import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'Two housing types make up the East End, and the visit follows them. Census figures put 54.4% of homes before 1940, so the river cottages on Eastern Avenue keep their heaters in low basements with older venting, gas lines and drain valves. Condos and townhouses toward Riverside Drive, mostly built from the 1990s on, are a straight rinse, anode look and valve test. Gas service is the norm here. Either way, you agree to the price first, and we’ll tell you if a tank isn’t worth servicing.',
  emergencyParagraph:
    'Book repair, not this service. A leaking tank: the cold supply on top goes off first, gas valve or breaker second. A gas odor: leave, fingers off switches and pilot, phone the gas company once you’re on the street. A carbon monoxide alarm: everyone outside. Constant relief valve discharge, or cold taps. Same day on most calls, weekends included.',
  commonIntro:
    'Along the river, these are the usual signs a tank is ready for a service:',
  localFaqs: [
    {
      q: 'The river put water in my basement in the East End. Can a flush fix the water heater?',
      a: 'Not by itself. The National Weather Service notes basement flooding in the East End once the Ohio River at Cincinnati reaches 55.5 feet. If water reached the burner or controls, keep the heater off and book a repair first. A routine flush comes afterward, once it’s safe.',
    },
    {
      q: 'I rent out a house in the East End. Is the yearly water heater service on me?',
      a: 'Yes. Ohio’s ORC 5321.04 (A)(4) expects a landlord to keep the appliances they supply sound and working, and (A)(6) expects reasonable hot water. Your tenant reports problems in writing, and you arrange the visit. We service water heaters, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly water heater service for river cottages and condos in the East End',
    band1Heading: 'Signs a Water Heater in the East End Is Due for Maintenance',
    commonSituations: [
      'A basement tank in an older cottage on Eastern Avenue with no service tag',
      'A heater in a 1990s condo that has started to rumble',
      'A house just bought near Riverside Drive with no record for the heater',
      'Hot water running short sooner than it used to',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in the East End',
        body: 'A riverside visit starts with a hose on the drain valve. We empty the heater and keep flushing until no grit shows in the bucket. Heating water makes its minerals drop out, and they pile up under the burner, so the tank pops and hot water quits early. Next comes the anode: a rod built to rust away instead of the tank wall, quoted for replacement only if it’s nearly gone. We work the relief valve and follow its discharge line. On gas, the flame, pilot assembly, vent pipe and gas fitting; on electric, elements and thermostats. Cottage basements also get the old shutoff tested. You approve every repair.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Along the river, there are four good reasons to book: a working heater that has never been flushed, a house you closed on this year without paperwork, fresh popping, or a cottage you rent out. There’s one bad reason: a shell already leaking, because nothing but a new heater solves that. Rusty-looking hot water, or a heater plainly near its finish, gets the same honest note before any flush is billed. Between visits, an owner who’s comfortable with a hose can let a bucket out at the drain valve. Book us once every year.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in the East End',
        body: 'A tank heater gets the sediment flush and anode check. A tankless unit gets descaled: we run a cleaning solution through the heat exchanger, then clean the inlet filter. Since gas is common in the East End, burners and venting are the main checks on most units, with elements and thermostats tested on electric ones. Tankless can be talked through when a tank is due for replacing, not as a sales pitch.',
      },
    ],
    whyTitle: 'Why Homeowners in the East End Book Water Heater Maintenance With Us',
    whyParagraph:
      'Since 1993 the company has stayed in one family. Technicians arrive licensed, insured and background-checked; the flat rate is yours to approve first; Sundays cost the same as Mondays; and if we miss, you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much is water heater maintenance in the East End?',
        a: 'One flat rate, quoted after we’ve seen the heater and before work. It moves with tank or tankless, gas or electric, and reach: a cottage basement with a low ceiling and tight steps takes longer than a condo utility closet. You agree to it first, and weekend visits carry no overtime.',
      },
      {
        q: 'How often should a water heater get serviced?',
        a: 'Once a year suits most houses along the river. If popping or rumbling starts before that, book a look sooner. The noise means sediment has built up at the bottom of the tank, and clearing it earlier is easier than waiting.',
      },
      {
        q: 'Can I flush my water heater without a technician?',
        a: 'A handy owner can drain some water from the drain valve, and that’s worth doing. Leave the rest to us: older drain valves that won’t seal again, the gas burner and pilot, and the relief valve test.',
      },
    ],
  },
};
