import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'Most CUF inspections are booked by landlords, since Census figures show about 85% of homes here are rented. The housing splits two ways. Older houses in Fairview and western Clifton Heights, most from before 1940, can still have cloth or knob-and-tube wiring and ungrounded outlets. Larger buildings from the 1970s tend to have small unit panels feeding electric heat. We inspect one unit or a whole building, write up what we find, and price the fixes before work starts.',
  emergencyParagraph:
    'Book these for today, not next week: a plug face that’s warm or melting, a switch that hisses or throws sparks, a hot-plastic smell, or a breaker that pops the moment it’s flipped back. Turn that circuit off. Smoke or fire: get out, then call 911. We reach most calls the same day, Saturdays and Sundays included.',
  commonIntro:
    'Between CUF’s old houses split into flats and its larger apartment buildings, these are the faults we find most:',
  localFaqs: [
    {
      q: 'My CUF apartment keeps losing power in one room. Who fixes it?',
      a: 'The landlord does. Under Ohio’s ORC 5321.04 (A)(4), whoever rents you the apartment has to keep the electrical fixtures they supplied in good and safe working order. Email or text them with the date and the room, and mention any heat or smell. We inspect wiring, not leases; your owner or property manager calls us in.',
    },
    {
      q: 'Should I inspect a CUF rental between tenants?',
      a: 'Summer turnover is a good time, with the unit empty and the furniture out. We check outlets, GFCI protection, the panel and smoke alarm power in every unit, and you get one report per unit to keep with your records. Repairs can be done before the next lease starts.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for CUF landlords and rental buildings',
    band1Heading: 'Common Electrical Problems We Find in CUF Homes and Apartments',
    commonSituations: [
      'A pre-1940 Fairview house split into three flats, all fed from one old panel',
      'Two-prong outlets fitted with cheater plugs in student bedrooms',
      'A 1970s apartment building with small unit panels carrying electric heat',
      'Space heaters and power strips loaded onto one bedroom circuit in winter',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Tenants and owners can often sort the small stuff. A bathroom or kitchen outlet that dies may sit downstream of a tripped GFCI, sometimes in another room, so press reset on each one you can find. A single breaker that trips once and resets is normal. A lamp that won’t light may be plugged into a switched outlet. Bring us in for fuses, two-prong outlets across a unit, extension cords serving as permanent wiring, flicker on more than one circuit, or before you buy or sell a CUF rental property.',
      },
      {
        title: 'Inspection, Repair or Rewire in CUF?',
        body: 'The inspection, not the address, sets the plan. A 1925 Clifton Heights house might have been rewired in the 1990s, while a 1970s building can still have every original unit panel. Burnt terminals, a dead breaker and bathrooms without GFCI protection go on the spot-fix list. Unit panels too small for electric heat plus a laptop-and-microwave household need replacing. Where cloth or knob-and-tube cable still runs through a house, you see a rewire price next to the spot-fix price. If the work needs a permit, we file it and schedule the official inspection. The report is yours, and so is the call.',
      },
    ],
    whyTitle: 'Why CUF Landlords and Residents Call Us',
    whyParagraph:
      'In CUF the person calling is usually a landlord with several units and tight turnover dates. We work to that schedule, report unit by unit, and quote a flat price first. Licensed and insured technicians.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost for a CUF rental?',
        a: 'A flat price, given before the visit. Unit count, floor space and the reason all feed into it: one studio at turnover is quick, while a house cut into five flats before a sale takes much longer. No overtime fees on top.',
      },
      {
        q: 'What does your CUF inspection include?',
        a: 'For each unit: the panel and its breakers or fuses, how the system is grounded and bonded, a test of every outlet and switch, and a trip test on each GFCI and AFCI. We also look at visible wiring in basements, attics and utility closets, and check that smoke alarms have power. Each unit gets its own report section.',
      },
      {
        q: 'Do I have to hire you to make the repairs?',
        a: 'No. Give the report to any licensed electrician you like. Our flat price sits beside each fix, so you have a number to hold other quotes against, and we only start on items you approve.',
      },
    ],
  },
};
