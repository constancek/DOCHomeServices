import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAdams: LocationServiceCopy = {
  localParagraph:
    'Mount Adams mixes older homes, two-family houses and little apartment buildings. Half the housing, 50.2% by Census figures, predates 1940, and 66.1% of homes are rented. In the older ones we usually find the heater at the bottom of a narrow stair, vented through an old flue, with a drain spigot that may fight back, plus a gas line. A double often has two heaters and one owner. Condos built later are quick work. You see the price first, and we’ll tell you if a heater is past saving.',
  emergencyParagraph:
    'Heater leaking: turn the cold supply valve above it, then cut gas or power. Gas in the air: walk out, leave every switch and the pilot alone, and phone the gas company from outdoors. Carbon monoxide alarm: people out first. A relief valve running nonstop, or nothing hot at the tap, needs repair. Same day on most, weekends too.',
  commonIntro:
    'Plenty of tanks around Mount Adams keep working long after anyone last looked at them. A few signs say it’s time:',
  localFaqs: [
    {
      q: 'My double in Mount Adams has a heater on each side. Can you do both in one trip?',
      a: 'Yes. Both heaters get drained, both anodes pulled for a look, both pressure valves lifted, and the vents checked, with one flat quote agreed beforehand. Under Ohio’s ORC 5321.04, divisions (A)(4) and (A)(6), a landlord owes tenants working appliances and reasonable hot water. We keep the heaters right; the lease stays with you.',
    },
    {
      q: 'We just closed on an older house in Mount Adams. Does the heater need service?',
      a: 'If it isn’t leaking and nobody left records, yes. The label gives us a rough age. Then comes a drain and flush, a look at the anode, a lift of the pressure valve, and a check of flue and gas piping. Should it turn out to be close to finished, you’ll hear that, and you can budget a replacement.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater upkeep for homes and doubles in Mount Adams',
    band1Heading: 'Signs a Water Heater in Mount Adams Is Due for Maintenance',
    commonSituations: [
      'A heater at the foot of the stairs in a pre-1940 house, history unknown',
      'Two heaters in a two-family, both overdue',
      'Popping after a long shower',
      'A closet heater in a newer condo building that nobody has drained',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Mount Adams',
        body: 'Each visit on the hill starts the same way: drain the tank, then flush until the hose runs clean. Minerals carried by the water sink to the floor of the tank, where the burner or elements have to heat through them; popping and early cold water are the symptoms. The anode comes out next. It’s a rod that sacrifices itself to rust so the tank shell won’t, and when it’s down to its core we price a replacement. We lift the T&P lever and trace where its pipe discharges. Gas: flame, pilot, vent, gas cock. Electric: every element and thermostat. Old shutoffs get tried gently. Repairs get priced first.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'In Mount Adams, book it if the heater runs but no one has ever drained it, if the seller left nothing on paper, if popping started this season, or if you own a double or small building with several heaters. We’d call it wasted on a tank seeping through its own wall, since flushing won’t close a hole; that tank needs replacing. Brown water from the hot tap, or a heater on its last legs, means the money should go toward a new one. Between visits, a handy owner can let a pail run from the spigot. Yearly is our advice.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Mount Adams',
        body: 'Gas units on the hill get flame, pilot and flue checks after the flush and the anode look. Electric heaters swap that for a test of each element and its thermostat. Tankless models need descaling instead, a cleaning solution pumped around the heat exchanger, and a rinse of the screen at the inlet. In a cramped condo closet, tankless frees space once the old tank is replaced.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Mount Adams Book Water Heater Maintenance With Us',
    whyParagraph:
      'Narrow basement stairs, two-heater doubles and condo closets make up most of what we do in Mount Adams. Our technicians are licensed and insured, cleared by background checks and drug tests, and they quote one flat price before starting.',
    sharedFaqs: [
      {
        q: 'How do you price a water heater service in Mount Adams?',
        a: 'With one flat figure that you see before we begin. Tankless costs differently from a tank, gas differently from electric, and the climb matters: hauling a hose and tools down a tight stair under an old house takes longer than opening a condo closet. Nothing starts until you say go.',
      },
      {
        q: 'How often does a water heater on the hill need servicing?',
        a: 'Book it yearly. Popping or rumbling that shows up sooner is grit on the tank floor, and it’s worth a call then instead of waiting. Owners of a double can put both heaters on the same date each year and be done with it.',
      },
      {
        q: 'Can I drain the tank myself between visits?',
        a: 'A handy owner can, within limits. Attach a hose, open the spigot, let a pail or two out, close it. An original spigot in an old house may refuse to seal again, so be gentle. Lifting the pressure valve and anything on the gas side should wait for us.',
      },
    ],
  },
};
