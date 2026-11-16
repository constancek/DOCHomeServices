import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestPark: LocationServiceCopy = {
  localParagraph:
    'Forest Park’s first houses opened in 1956, and most of the city went up through the 1960s and 1970s, so electrical inspections here usually deal with panels and circuits from that era. Census figures show almost half the homes heat with electricity, which leaves many panels with little spare capacity for an EV charger, a hot tub or a bigger kitchen. Landlords also book us; over four in ten households rent. We test the system and price any repair before work starts.',
  emergencyParagraph:
    'If an outlet or switch plate is hot, buzzing or charred, you see sparks, or the lights dim sharply whenever something starts up, switch off that circuit’s breaker. A breaker that trips again straight after a reset stays off too. Smoke or fire: everyone out, then 911. Most Forest Park calls are reached the same day, weekends included.',
  commonIntro:
    'Forest Park inspections cover the city’s single houses from the 1960s and 1970s as well as its apartment buildings. What we write up most:',
  localFaqs: [
    {
      q: 'Who signs off permitted electrical work in Forest Park?',
      a: 'Electrical permits in Forest Park go through the Inspection Bureau, Inc. (IBI), whose inspector checks the finished job. Building and HVAC permits are the city’s job. Our inspection is a separate whole-house safety check with a written report, and if a repair needs a permit, we pull it.',
    },
    {
      q: 'I own a rental in Forest Park. Why get an electrical inspection?',
      a: 'Forest Park runs a rental registration program, and Ohio law (ORC 5321.04(A)(4)) requires landlords to keep supplied electrical fixtures in good and safe working order. A written report between tenants shows the condition and what you fixed. We inspect wiring, not leases.',
    },
    {
      q: 'I rent in Forest Park and a breaker keeps tripping. What should I do?',
      a: 'Unplug space heaters and other big loads on that circuit, then reset it once. If it trips again straight away, leave it off and tell your landlord or manager in writing. The owner arranges the inspection or repair.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Forest Park homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Forest Park Homes and Apartments',
    commonSituations: [
      'A 1960s panel with electric heat, a range and a dryer leaving no room for new circuits',
      'Bathrooms and kitchens from the original build with no GFCI outlets',
      'Apartment units where tenants run space heaters off overloaded bedroom circuits',
      'Garage subpanels and workshop circuits added without a permit',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some dead outlets come back with a button press. Check the GFCI outlets in the kitchen, baths, garage and outside, because a single tripped one can shut off others. A breaker that trips once and then holds after resetting points to a brief overload, and a lamp that won’t light is usually the bulb or its switch. Book an inspection for flicker on several circuits, outlets that are all two-prong, extension cords used as wiring, or a Forest Park house going up for sale with little electrical work since it was built.',
      },
      {
        title: 'Inspection, Repair or Rewire in Forest Park?',
        body: 'A 1960s house isn’t automatically due for rewiring; the inspection shows what’s really there. Loose terminals, a failed breaker and missing GFCI protection are everyday repairs. What Forest Park homes run into more often is the panel: electric heat plus modern appliances can leave an original panel overloaded or worn, and then replacement makes sense. If older wiring turns up throughout the house, we price rewiring beside the spot repairs so you can compare. You decide from the report, and you’re free to use another electrician.',
      },
    ],
    whyTitle: 'Why Forest Park Homeowners and Landlords Call Us',
    whyParagraph:
      'Forest Park is close to an even split of owners and renters, so we work for both. Each technician is licensed, insured, background-checked and drug-tested, and each repair has a flat price you approve before we start.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Forest Park?',
        a: 'We quote a flat rate first, based on the size of the home and what you need from the visit. A full pre-sale inspection takes longer than checking whether a panel can handle a heat pump. Any repairs are quoted on their own, and they wait until you say yes.',
      },
      {
        q: 'What does your electrical inspection check?',
        a: 'It covers the panel and breakers or fuses, grounding and bonding, outlets and switches throughout, GFCI and AFCI protection in the places that need it, wiring we can see in the basement, garage or attic, and how smoke alarms are powered. Findings go into a written report.',
      },
      {
        q: 'If the report finds problems, must I hire you?',
        a: 'No. You own the report and can take it to any licensed electrician you trust. Landlords often give it to their regular contractor. Should you want us to do the work, we give a flat-rate price for each repair and do only the ones you approve.',
      },
    ],
  },
};
