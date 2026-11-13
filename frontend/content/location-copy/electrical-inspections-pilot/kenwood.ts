import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const kenwood: LocationServiceCopy = {
  localParagraph:
    'Kenwood inspections mostly happen in houses and condos built from the 1950s through the 1970s; Census figures give a median of 1967. Those homes were wired before central air and large kitchens were normal, so the panel and the number of circuits per room are where we look first. With 38.3% of households renting, landlords book us as often as owners do. You get a written report, and any repair is priced before we start.',
  emergencyParagraph:
    'Some Kenwood calls can’t sit on the calendar. A scorched or buzzing outlet, a burning smell with no obvious source, or a breaker that won’t hold after one reset all mean turning that breaker off now. If there’s smoke or fire, everyone out, then call 911. We’re there the same day on most calls, weekends included.',
  commonIntro:
    'Kenwood’s split-levels, ranches and condo buildings each have their habits. The findings we write up most often:',
  localFaqs: [
    {
      q: 'I rent a condo in Kenwood. Who pays to fix an electrical problem?',
      a: 'Your landlord. Under ORC 5321.04, an Ohio landlord has to keep the electrical fixtures that came with the unit in good and safe working order. Email the owner what failed and when it started. We inspect wiring, not leases, so the condo’s owner or property manager is who schedules us.',
    },
    {
      q: 'Who inspects permitted electrical work in Kenwood?',
      a: 'Kenwood sits in unincorporated Sycamore Township, and permitted electrical work there is inspected by Inspection Bureau, Inc. (IBI). That’s the official sign-off on a job. Our visit is a separate safety check of the whole house with a written report. If a repair needs a permit, we handle the paperwork.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Kenwood houses and condos',
    band1Heading: 'Common Electrical Problems We Find in Kenwood Homes and Apartments',
    commonSituations: [
      'A split-level still on its original panel with a kitchen remodel tied into it',
      'Two-prong outlets in the bedrooms of a 1950s ranch',
      'Condo outlets along one wall that stop working when a bathroom GFCI trips',
      'A home office running computers off power strips plugged end to end',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Rule out the quick fixes before you book. When a Kenwood bathroom, kitchen, garage or porch receptacle quits, there is often a tripped GFCI somewhere upstream of it, maybe two rooms away. Push in every reset. A breaker that tripped, got switched back and is now staying put needs nothing from us. Sometimes it really is just the bulb, or a switch that controls a lamp plug. Call when the house is still mostly two-prong, when cords snake under rugs to do the work of outlets, or when lights dip in more than one room. A 1960s purchase with no wiring updates on record deserves a look too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Kenwood?',
        body: 'The report decides, not the age of the house. Most findings in Kenwood homes are repairs: a loose wire at a breaker, a breaker that’s worn out, an outlet by a sink with no GFCI. An original panel that’s full or failing, or too small for central air and a modern kitchen, calls for panel replacement. Rewiring only comes up where we find old wiring through most of the house, and then we price it beside spot repairs. You read the report and decide, and you’re free to hire another electrician. Permits we pull ourselves, then arrange the inspection.',
      },
    ],
    whyTitle: 'Why Kenwood Homeowners and Landlords Call Us',
    whyParagraph:
      'Kenwood has owners in single homes and landlords with condos and apartments. Both get the same visit from a licensed, insured electrician who has passed a background check and drug test, with prices set before work.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Kenwood?',
        a: 'It’s a flat price that you hear before we book the time. A condo costs less to inspect than a large house, and the reason for the report matters too, say a sale versus a new hot tub. Repairs from the report are priced one by one.',
      },
      {
        q: 'What gets checked in an electrical inspection?',
        a: 'From the meter base in, since Duke Energy owns the meter: the panel, each breaker or fuse, grounding and bonding, the outlets and their GFCI and AFCI protection, whatever wiring is visible, and the power supply to the smoke alarms. It all ends up in your written report.',
      },
      {
        q: 'Do I need to hire you to fix what the inspection finds?',
        a: 'No. You own the report and can share it with any licensed electrician you trust. Should you want us for the repairs, we price each item at a flat rate and wait for your go-ahead before starting.',
      },
    ],
  },
};
