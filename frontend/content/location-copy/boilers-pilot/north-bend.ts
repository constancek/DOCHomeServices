import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northBend: LocationServiceCopy = {
  localParagraph:
    'Most North Bend homes are newer than people expect: half were built in 1991 or later, per Census figures, and most of those run forced air. The boilers we work on are in the older homes, the 28.8% built in 1939 or earlier, where radiators were the original heat. If your house has ducts and vents, book furnace repair instead. If it has radiators, we find the fault, explain it, and price it before any work.',
  emergencyParagraph:
    'Roughly 100 nights a year in North Bend reach freezing or colder (NOAA normals, CVG). When the boiler stops on one of them, infants, elderly parents and anyone sick feel it first, and a long freeze can put radiator pipes on outside walls at risk. Most no-heat calls here get a technician the same day, Saturday and Sunday too.',
  commonIntro:
    'North Bend boiler calls come from the village’s older houses, a minority of the homes but a steady share of winter work. Typical ones:',
  localFaqs: [
    {
      q: 'Should I run my North Bend boiler after river water got into the basement?',
      a: 'No. Wet controls, a soaked burner or a flooded gas valve can make a boiler unsafe to fire. The National Weather Service says that downstream of Cincinnati, most property between Route 50 and the river floods once the Ohio reaches 70 feet. After any high water, leave the boiler off until we have checked it.',
    },
    {
      q: 'Is a home boiler in North Bend inspected by the state?',
      a: 'No. Ohio’s boiler inspection law, ORC 4104.04, leaves out private homes and buildings with fewer than six units, provided steam boilers run at 15 psi or less and hot water boilers at 160 psi or less. That makes upkeep your call, and a fall service visit is the simplest way to cover it.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for North Bend’s older homes',
    band1Heading: 'Common Boiler Problems in North Bend Homes',
    commonSituations: [
      'An older village house where the boiler fires but the second floor stays cool',
      'A boiler that needs checking after Ohio River high water reached the basement',
      'Banging or kettling from a boiler that has not been serviced in years',
      'A zone valve stuck shut, leaving one part of the house without heat',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'In an older village house, cold rooms often come down to air. Where a radiator’s top stays cool, crack its bleed valve with a key, let the air hiss out until water follows, and shut it. Next, read the gauge; a hot water boiler showing low pressure needs topping up. Confirm the thermostat says heat and nobody flipped the boiler switch. Heat back means no visit needed. Call us if the needle sinks again within a few days, an error code shuts the boiler down, or a valve is wet. A carbon monoxide alarm means everyone out of the house first, then 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in North Bend?',
        body: 'Read the date on the boiler’s label, not the house’s deed; it shows the year the unit went in. A failed pump, zone valve, igniter or expansion tank gets swapped, and that alone rarely calls for a new boiler. Once water seeps from a section or the heat exchanger, or we’re back at the same boiler every winter, you get a replacement quote alongside the repair quote and decide. Book a yearly service of about 60 to 90 minutes in early fall: we check pressure and the expansion tank, test safety controls, clean the burner, inspect the venting, hunt for leaks and bleed every radiator.',
      },
    ],
    whyTitle: 'Why North Bend Homeowners Call Us',
    whyParagraph:
      'Four in five North Bend homes are owner-occupied, and an older house with radiators needs someone who works on boilers often. Ours are licensed, insured, background-checked, drug-tested technicians who price the job first.',
    sharedFaqs: [
      {
        q: 'How is boiler repair priced in North Bend?',
        a: 'By the fault, not by the hour. Clearing an airlock or replacing a pressure relief valve is small work; a cracked section on an older boiler is a big one. We diagnose, give you a flat-rate price, and start only when you approve. No overtime fees on weekend calls, and financing is available.',
      },
      {
        q: 'Repair or replace: what is right for my North Bend boiler?',
        a: 'Most boiler faults are parts: a pump, a valve, an igniter, a control. Those are repairs. A leak in the vessel or heat exchanger is different, and so is a boiler that has needed us every winter. Then we quote both options side by side so you can decide with real numbers.',
      },
      {
        q: 'Why are a few radiators cold in my North Bend house?',
        a: 'Most often it is air at the top of the radiator, which a radiator key lets out. After bleeding, check the pressure on the boiler. If the cold radiators are all on one zone, the zone valve may be stuck. A radiator that stays cold after all that needs us to check its valve.',
      },
    ],
  },
};
