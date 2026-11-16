import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Most homes in Downtown Cincinnati are apartments and condos; 71.6% of units sit in buildings of 50 or more, by Census figures. Many rely on a building system that management services, so the landlord or manager books the visit. Where a unit has its own air handler in a closet and an outdoor section on the roof or a balcony, we service it, and in the pre-war buildings those closets are often tight. The price is set before we start, and we say so if the system needs nothing.',
  emergencyParagraph:
    'If a unit stops cooling in a heat wave, water drips into the apartment below, or a breaker trips again after a reset, that calls for a repair visit, not a tune-up. Leave that breaker off. Tenants should tell management in writing, sooner if an older or ill resident is home. Same day on most calls, weekends included.',
  commonIntro:
    'For condo owners, landlords and managers in Downtown Cincinnati, these usually prompt a spring service.',
  localFaqs: [
    {
      q: 'I rent an apartment in Downtown Cincinnati. Can I book AC maintenance myself?',
      a: 'Not on equipment your landlord supplied. Describe the leak, noise or warm air to the landlord or building office in writing and keep a copy. Ohio law, ORC 5321.04 (A)(4), requires a landlord who supplies air conditioning to keep it in good and safe working order. We service air conditioners, not leases.',
    },
    {
      q: 'Do you service the AC in condo towers in Downtown Cincinnati?',
      a: 'We service the equipment that belongs to your unit, usually an air handler or heat pump in a closet and its outdoor section. Chillers and cooling towers that serve a whole building are for the building’s own contractor. If you’re not sure which you have, the manager will know.',
    },
  ],
  overrides: {
    ctaLine: 'Spring AC service for condos and apartments in Downtown Cincinnati',
    band1Heading: 'Signs an AC in Downtown Cincinnati Is Due for Maintenance',
    commonSituations: [
      'A closet air handler in a condo with no service record from the last owner',
      'A drip into the unit below traced to a clogged condensate line',
      'A rooftop or balcony condenser nobody has cleaned since the unit was sold',
      'A manager lining up every unit on a floor for the same week',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in Downtown Cincinnati',
        body: 'Inside a condo, the visit mostly happens at the closet door. A dusty filter is replaced, the coil is inspected with a light, and the condensate line is flushed while we watch the pan, because an overflow on the twelfth floor becomes a stain on the eleventh. Wherever the building hides the outdoor section, roof or balcony, its coil gets washed and cleared. The capacitor, contactor and wiring are metered, the blower and airflow checked, and the thermostat proved. Gauges show the charge; when it’s short, that means a leak we quote as a repair. A full cooling run finishes up. The owner approves any part first.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'In a condo or rental Downtown, the visit pays off when nobody can say when the unit was last serviced, when you’ve just closed on the place, when the drain has spilled before, or when the closet has started to rattle. A landlord with several units in one tower can book them together. Skip it if a technician serviced the unit last year and it runs quietly, and skip it entirely if the building’s central plant cools your home, since management covers that. Warm air or iced lines need AC Repair, and a unit we’ve condemned belongs with AC Installation & Replacement. Keep the return grille clear between visits.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in Downtown Cincinnati',
        body: 'Electric heat is the norm Downtown, by Census figures, and in an apartment tower that can mean a closet heat pump that heats and cools, although baseboard and other electric heat are counted in the same share. Since a heat pump never really rests, it gets a spring visit for cooling and a fall visit for heating, including the reversing valve and defrost controls. A cooling-only system needs spring alone.',
      },
    ],
    whyTitle: 'Why Condo Owners and Landlords in Downtown Cincinnati Book AC Maintenance With Us',
    whyParagraph:
      'We get called by condo owners and landlords in Downtown Cincinnati for closet systems in towers and older buildings alike. Our technicians are licensed and insured, every employee is background-checked and drug-tested, and the flat price is approved first.',
    sharedFaqs: [
      {
        q: 'How is AC maintenance priced in Downtown Cincinnati?',
        a: 'Each unit has a flat rate, quoted before we begin. The system type and how hard it is to reach the indoor and outdoor sections set it; a rooftop condenser that needs building access takes longer than one on a balcony. Anything that needs repair is priced separately for the owner to approve.',
      },
      {
        q: 'When should a condo or apartment AC be serviced?',
        a: 'Once a year, in spring, before the hot stretch, when scheduling is easy and building managers aren’t juggling breakdown calls. About 21 days a year hit 90F or more, according to the National Weather Service. A heat pump gets a fall visit too, for the heating side.',
      },
      {
        q: 'What can I do myself for the AC in my unit?',
        a: 'Change the filter when it’s dirty, keep the return grille and supply vents free of furniture and curtains, and replace the thermostat batteries. Leave panels, refrigerant lines and coil fins to a technician, and check with management before touching anything that belongs to the building.',
      },
    ],
  },
};
