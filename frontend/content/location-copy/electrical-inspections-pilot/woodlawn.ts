import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const woodlawn: LocationServiceCopy = {
  localParagraph:
    'Woodlawn is mostly newer housing, with a median build year of 1987 in Census figures, so the wiring itself is usually in good shape. Inspections here are about load and upkeep. Electricity heats 56.4% of homes, more than gas does, and 66.6% of households rent, many in large apartment buildings. Landlords book us between tenants or before a sale; owners book before adding a charger or a heat pump. We check everything, write it up, and price fixes before starting.',
  emergencyParagraph:
    'Some Woodlawn problems need us now, not an inspection next week: a burning smell, a cover plate that’s hot or discolored, sparks, or a breaker that trips the moment it’s reset. Turn that breaker off. If there’s smoke or fire, get out and call 911. Tenants should alert their landlord. Most calls are same day, weekends included.',
  commonIntro:
    'In Woodlawn’s apartments and newer houses, the findings are mostly about wear and heavy electric loads:',
  localFaqs: [
    {
      q: 'I rent in Woodlawn and the lights flicker. What should I do?',
      a: 'If it’s one lamp, try a new bulb. If it’s several rooms, write to your landlord; Ohio law (ORC 5321.04) requires landlords to keep supplied electrical fixtures in good and safe working order. We inspect wiring, not leases, so your landlord or manager books the visit.',
    },
    {
      q: 'Does a newer Woodlawn house need an electrical inspection?',
      a: 'Often not. If your buyer’s home inspector found nothing and you aren’t adding anything big, you can skip us. Book one before an EV charger or heat pump goes in, since electric heat already uses much of many panels in the village. If a permit is needed, we pull it and arrange the inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Woodlawn homes and apartment buildings',
    band1Heading: 'Common Electrical Problems We Find in Woodlawn Homes and Apartments',
    commonSituations: [
      'An electric furnace and water heater pushing an apartment panel close to its limit',
      'Worn outlets that no longer grip a plug after many tenant moves',
      'A GFCI in one bathroom that kills power to outlets in another',
      'Smoke alarms missing or dead where hard-wired ones belong',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Most newer Woodlawn homes need less from us than people expect. A dead bath, kitchen, garage or outdoor outlet usually means a GFCI tripped; reset each one, since one can control several. A breaker that trips once and holds after reset is fine. A dark light may be a bulb, or a switch for a lamp outlet. Call us if lights flicker on several circuits, outlets feel warm, cords have become permanent wiring, or you own one of the village’s older houses with no electrical work on record and a sale coming up.',
      },
      {
        title: 'Inspection, Repair or Rewire in Woodlawn?',
        body: 'We judge by the findings. In Woodlawn’s newer buildings that usually means repairs: a loose connection, a worn breaker, a receptacle that’s lost its grip, an outlet near water with no GFCI. A panel that can’t carry electric heat plus a new charger may need replacing, and we’ll explain why in the report. Rewiring comes up only in the village’s older houses, and even there we price it beside spot repairs. The report is yours, and you choose who does the work. We take care of any permit and inspection the repairs call for.',
      },
    ],
    whyTitle: 'Why Woodlawn Landlords and Homeowners Call Us',
    whyParagraph:
      'In Woodlawn we work mostly for property owners and managers, plus homeowners planning a project. Every electrician we send is licensed, insured, background-checked and drug-tested, and quotes a flat price before any work.',
    sharedFaqs: [
      {
        q: 'How much does a Woodlawn electrical inspection cost?',
        a: 'You’re quoted a flat rate before we start. An apartment unit is quicker than a house, and the purpose counts too: a tenant turnover check is lighter than a pre-sale report. Whatever repairs we list are priced separately, and you approve each one.',
      },
      {
        q: 'What do you look at during the inspection?',
        a: 'The panel and breakers, grounding and bonding, outlets with their GFCI and AFCI protection, any wiring that’s exposed, and whether smoke alarms are getting power. In apartment buildings we also confirm which panel feeds which unit. You receive a written report afterward.',
      },
      {
        q: 'Can a landlord use the report with a different electrician?',
        a: 'Yes. The report belongs to whoever booked it, and any licensed electrician can work from it. If you’d rather we handle the repairs, we price each one at a flat rate and wait for your approval.',
      },
    ],
  },
};
