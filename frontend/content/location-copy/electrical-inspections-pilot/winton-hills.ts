import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Electrical inspections in Winton Hills are booked by owners and property managers, because 97.0% of homes here are rented, per Census figures. Most units are in CMHA’s Winton Terrace and Findlater Gardens, where the housing authority handles repairs through work orders. The rest are privately owned doubles, townhouses and small buildings, and the median home went up in 1955. More than half the homes heat with electricity, which puts heavy, steady load on old panels in winter. We quote a flat price before the visit.',
  emergencyParagraph:
    'Some things can’t wait for a work order or a scheduled visit: a burning smell, an outlet or switch plate that’s hot, buzzing or blackened, sparks, or a breaker that trips again right after reset. Turn that breaker off. If there’s smoke or fire, get everyone out and call 911. Owners get same-day service on most calls, weekends included.',
  commonIntro:
    'In the privately owned rentals of Winton Hills, these are the problems owners and managers ask us about most:',
  localFaqs: [
    {
      q: 'I live in Winton Terrace or Findlater Gardens. Can I book you?',
      a: 'No. CMHA units are repaired through the housing authority’s own work order system, so put in a work order and keep a copy. If an outlet is hot or sparking, turn off its breaker first. If there’s smoke, leave and call 911.',
    },
    {
      q: 'I rent from a private landlord in Winton Hills. What are they required to fix?',
      a: 'Under ORC 5321.04 (A)(4), Ohio landlords have to keep the electrical fixtures they supply in good and safe working order. Tell your landlord in writing and keep the date. The owner books and approves the inspection; we inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Winton Hills rental owners and managers',
    band1Heading: 'Common Electrical Problems We Find in Winton Hills Homes and Apartments',
    commonSituations: [
      'Electric heat and a dryer sharing a 1950s panel that was never upgraded',
      'Breakers that trip on cold nights when electric heat runs in every room',
      'A double with tenant-run extension cords feeding space heaters and window units',
      'Missing or dead smoke alarms found at a turnover between tenants',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Owners in Winton Hills often get calls that aren’t electrical faults at all. A dead bathroom or kitchen outlet is usually a GFCI that tripped; the reset button may be on another outlet in the unit, or in the basement or outside. One breaker that trips and then holds is normal. Plan an inspection when tenants report breakers tripping every winter night, lights dimming hard as heaters cycle, or several circuits flickering, or when you buy a building with no recent electrical records. We inspect, write it up and price fixes before any work.',
      },
      {
        title: 'Inspection, Repair or Rewire in Winton Hills?',
        body: 'Let the report guide the spend, not the building’s age. A loose connection, a breaker that won’t latch or a missing GFCI by a sink is a repair. Heat that pulls more than the panel can supply, or a panel that’s failing, calls for a panel replacement. Where original wiring is worn through several units, we price rewiring next to spot repairs. Our inspection is a safety check with a written report; when the work needs a permit, we pull the permit and arrange the official inspection. You can hire anyone for the repairs.',
      },
    ],
    whyTitle: 'Why Winton Hills Landlords Call Us',
    whyParagraph:
      'Winton Hills is a renter neighborhood, so our customers here are owners and managers who need clear reports. Our technicians are licensed and insured, and pass background checks and drug tests before entering anyone’s unit.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Winton Hills?',
        a: 'It’s a flat rate set before we start, based on the number of units and what you need: a single double before purchase costs less than a small building with several panels. The price doesn’t change once we’re there, and there are no overtime fees.',
      },
      {
        q: 'What does an inspection of a Winton Hills rental cover?',
        a: 'Each panel and its breakers, grounding and bonding, outlets and their GFCI and AFCI protection, the visible wiring in basements and common areas, and whether the smoke alarms have power. For heated units we note any circuit running near its limit. The findings come in a written report, unit by unit.',
      },
      {
        q: 'Do I have to use you for the repairs on my rental?',
        a: 'No. The report is yours, and any licensed electrician can quote from it. If we do the work, every item is priced on its own and approved by you first, so you can fix the safety items now and budget for the rest.',
      },
    ],
  },
};
