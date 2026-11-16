import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'Two kinds of building hold most homes in the West End: Italianate rowhouses from the late 1800s around Betts-Longworth, and townhouses and apartments from the decades since. By Census figures, renters occupy 87.1% of homes, and 38.4% are older than 1940. The rowhouses hide their heaters in cellars with old flues, worn drain spigots and gas lines to inspect. Newer units tuck one into a closet over a pan. Either way, the landlord books it, the price comes first, and we’ll say if a tank isn’t worth it.',
  emergencyParagraph:
    'Tank gushing or dripping: close the cold-water valve on top, then shut off gas or electricity. Gas odor: leave with the lights as they are, don’t relight anything, and phone the gas company from the sidewalk. Carbon monoxide alarm: everyone outside first. A relief valve that won’t stop, or no hot water, means repair. Same day on most, weekends included.',
  commonIntro:
    'Landlords own most of the heaters we maintain in the West End, and most are still working when we arrive. Watch for these:',
  localFaqs: [
    {
      q: 'I own rowhouses in the West End. Is a yearly water heater visit worth it?',
      a: 'Yes, for the cellar tanks under older rowhouses. A visit covers the flush, an anode inspection, a lift of the pressure valve, and a look at flue and gas piping, and anything needing work gets quoted. Ohio’s ORC 5321.04, at (A)(4) and (A)(6), makes the owner keep appliances safe and hot water reasonable. Heaters are our side; leases are yours.',
    },
    {
      q: 'My rented townhouse in the West End has a rumbling heater. Who calls you?',
      a: 'The landlord or property manager does. Write down when the rumbling happens and send it to them. That sound is usually grit packed on the bottom of the tank, and flushing clears it. If the complex shares one big heater, servicing it is management’s job. Leaks or a gas smell are urgent: report those immediately.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly water heater upkeep for rowhouses and rentals in the West End',
    band1Heading: 'Signs a Water Heater in the West End Is Due for Maintenance',
    commonSituations: [
      'A cellar tank in a late-1800s rowhouse with an original drain spigot',
      'A closet heater in a 1990s townhouse nobody has ever drained',
      'Banging from a heater in a rental between tenants',
      'A landlord with several rowhouses and not one service date on file',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in the West End',
        body: 'Cellar or closet, the visit starts by emptying the tank and flushing until the grit stops coming. That grit is minerals from the city water, settled into a layer the burner or elements have to heat through, which makes a tank bang and shortens the hot water. Then the anode gets pulled and judged; it’s the rod that rusts on the tank’s behalf, and a spent one gets a price. The pressure-relief valve is opened and its pipe traced. On gas, we check the flame, pilot, flue and gas cock; on electric, each element and its thermostat. Old rowhouse shutoffs get tried, closet pans inspected. You approve repairs first.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'In the West End the visit pays off for landlords most of all: a row of rentals whose heaters nobody has drained, a building bought with no paperwork, a tenant reporting new popping. It also suits an owner-occupied rowhouse with a working tank and no service history. It doesn’t suit a tank with water coming through the shell; no flush stops that, and the heater needs replacing. Rust-colored hot water, or a heater plainly near its end, gets the same advice: save the money for a new one. A handy owner can drain off a bucket between our visits. We suggest servicing yearly.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in the West End',
        body: 'Heat in the West End splits nearly evenly between gas and electric, so both kinds of tank come up. Gas tanks get the burner, pilot and venting looked at after the flush and anode check; electric tanks get their elements and thermostats tested. A tankless heater is descaled, meaning a cleaning solution is pumped through the heat exchanger, and its inlet screen rinsed. When a cellar tank finally gives out, tankless is one choice among several.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in the West End Book Water Heater Maintenance With Us',
    whyParagraph:
      'Rowhouse cellars near Betts-Longworth and closet heaters in newer townhouses are most of what we service in the West End. Licensed, insured technicians, all background-checked and drug-tested, and a flat price you agree to first.',
    sharedFaqs: [
      {
        q: 'What will a water heater service cost in the West End?',
        a: 'A flat figure, given once we’ve seen the heater and before work starts. The heater’s style and fuel, and the path to it, decide the number. Getting down a narrow rowhouse cellar stair takes longer than opening a ground-floor closet. Landlords can put a whole row of units on one quote.',
      },
      {
        q: 'How often should a landlord service rental water heaters?',
        a: 'Yearly for each tank. If a tenant reports popping or rumbling before then, have it seen sooner, since that’s grit settling in. Servicing a whole row of rentals on one date each year makes tenant notices simpler.',
      },
      {
        q: 'Can I flush my own water heater safely?',
        a: 'If you’re handy, draining a bucket from the spigot is fine. Rowhouse spigots are often original and may not close tight again, so open them gently. Lifting the pressure valve and working on a gas burner are where we take over.',
      },
    ],
  },
};
