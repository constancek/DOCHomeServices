import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northgate: LocationServiceCopy = {
  localParagraph:
    'Half of Northgate’s homes heat with electricity, more than heat with gas, according to Census figures. That shapes most electrical inspections here: a 1960s or 1970s panel carrying an electric furnace or heat pump, a water heater and a range has little room for anything new. Before you add an EV charger, finish a basement or sell, we check whether the panel and circuits can take it, then write up the findings and price any work for your approval.',
  emergencyParagraph:
    'Some electrical trouble needs us today rather than on a booked date. That includes a burning smell, a hot or discolored outlet cover, sparking, or a breaker that pops again the moment it’s reset. Switch that breaker off. If anything is smoking or burning, everyone leaves and someone calls 911. Most Northgate calls get a same-day visit, weekends too.',
  commonIntro:
    'In Northgate the findings usually come back to load: how much the house now asks of a panel that was sized decades ago. Most often:',
  localFaqs: [
    {
      q: 'Does my Northgate house need a panel upgrade to add an EV charger?',
      a: 'Not always. Some panels have the capacity and space; homes with electric heat often run short. We run a load calculation using what the house already draws, including electric heat, and tell you whether the charger fits, fits with a smaller circuit, or needs a new panel first.',
    },
    {
      q: 'Who approves permitted electrical work in Northgate?',
      a: 'Northgate is unincorporated Colerain Township, so electrical permits and the official inspection go through the Inspection Bureau, Inc. (IBI). Duke Energy owns the meter and the line to the house; we work from the meter base in. Our own inspection is the whole-house safety check, with a written report.',
    },
    {
      q: 'I rent in Northgate and the lights flicker. Who do I tell?',
      a: 'Your landlord, in writing. Ohio law (ORC 5321.04(A)(4)) requires landlords to keep the electrical fixtures they provide in good and safe working order, and the owner or manager books the inspection or repair. We inspect wiring, not leases. If anything smells hot, switch off that breaker meanwhile.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Northgate homes',
    band1Heading: 'Common Electrical Problems We Find in Northgate Homes',
    commonSituations: [
      'An electric furnace or heat pump taking most of a 1960s panel’s capacity',
      'Double-tapped breakers where two circuits were put on one to save space',
      'A basement finished with new outlets but no permit, all fed from one shared circuit',
      'Original outlets worn loose so plugs fall out, in bedrooms and the living room',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'You may not need us. If a bathroom or kitchen outlet is dead, check every GFCI in the house, including the garage and outside ones, and press reset; one can shut off several. A breaker that trips once and stays on after resetting just had a passing overload. A single dark fixture is usually the bulb. Book an inspection when lights flicker on several circuits, a breaker keeps tripping when the electric heat runs, or extension cords are doing a circuit’s job. Selling or buying a Northgate home with no recent electrical work is another good reason.',
      },
      {
        title: 'Inspection, Repair or Rewire in Northgate?',
        body: 'Few Northgate houses are old enough for cloth or knob-and-tube wiring to be the issue, so rewiring rarely comes up. The usual outcome is a short list of repairs, such as loose terminals, a breaker that has stopped protecting its circuit, or a missing GFCI by the sink, plus a hard look at the panel. When electric heat already takes most of its capacity, or the panel shows corrosion or heat marks, we quote a replacement and handle the permit. You read the report, decide, and hire whoever you like.',
      },
    ],
    whyTitle: 'Why Northgate Homeowners Call Us',
    whyParagraph:
      'Most Northgate homes are owner-occupied houses from the 1960s and 1970s, half of them heated electrically. Our technicians hold licenses and insurance, pass background checks and drug tests, and give you a flat price before starting.',
    sharedFaqs: [
      {
        q: 'What will an electrical inspection cost for my Northgate home?',
        a: 'A flat rate, quoted up front and based on the house’s size and the purpose of the visit. A pre-sale inspection covers everything; a load check for a new charger or heat pump focuses on the panel. Repairs get their own prices, and you approve them before anything happens.',
      },
      {
        q: 'What’s covered when you inspect a house?',
        a: 'The panel and its breakers or fuses, grounding and bonding, outlets and switches, GFCI and AFCI protection, the wiring you can see without opening walls, and the power feeding your smoke alarms. Each item gets a line in the written report, with anything urgent marked first.',
      },
      {
        q: 'Will I have to use you for the repair work?',
        a: 'No. Whatever we find, the report is yours, and you’re free to get other quotes or do nothing yet. If you hire us, each repair has its own flat-rate price, and we only do what you sign off on after reading it.',
      },
    ],
  },
};
