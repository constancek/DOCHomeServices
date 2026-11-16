import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'CUF is a rental neighborhood: Census figures show 84.5% of occupied homes are rented, so most tankless questions here come from owners with several units. Housing is mixed. About 42.3% predates 1940, mostly in Fairview and western Clifton Heights, where a unit needs a vent of its own and often a larger gas line. Larger 1970s buildings put heaters in tight closets, and an electric model can outrun the panel. Tenants report problems; owners decide on a switch. Every job is priced before we begin.',
  emergencyParagraph:
    'Leak at a closet unit: close its cold supply, then gas or breaker. Gas smell in the hall: everybody to the sidewalk, no light switches, the gas company phoned from there. Carbon monoxide alarm: the apartment empties first. A student flat with a sick roommate and no hot water still gets priority. Same day on most calls, weekends included.',
  commonIntro:
    'Landlords and managers in CUF usually call us about tankless units for one of these reasons:',
  localFaqs: [
    {
      q: 'I rent near UC and my tankless heater keeps going cold. What do I do?',
      a: 'Message your landlord or manager in writing; booking the repair is on them. In Ohio, ORC 5321.04 (A)(4) and (A)(6) say an owner keeps the appliances they supply safe and working and provides reasonable hot water. We install and fix tankless water heaters, not leases. A tenant can safely rinse the little inlet screen, nothing more.',
    },
    {
      q: 'Can one visit cover tankless units across a building in CUF?',
      a: 'Yes. We go door to door, descaling and testing, then leave the owner a sheet of what each heater needs. Every repair is priced alone, so the urgent ones get done today and others can wait. New installs are permitted through the City of Cincinnati Department of Buildings & Inspections.',
    },
  ],
  overrides: {
    ctaLine: 'Tankless installs and repairs for rental owners in CUF',
    band1Heading: 'Signs an Apartment or Home in CUF Needs Tankless Water Heater Service',
    commonSituations: [
      'A Fairview house split into units, each with an aging tank, and an owner pricing tankless',
      'Tenants in a 1970s building reporting a closet unit that shuts off mid-shower',
      'An electric tankless model tripping the breaker in an older apartment',
      'Error codes on several units after a summer with no service',
    ],
    proseSections: [
      {
        title: 'Switching to a Tankless Water Heater in CUF',
        body: 'Tankless heaters warm water on demand as it flows, so roommates showering one after another don’t drain them, and they hang on a wall, freeing closet floor. The question for each unit is how many fixtures run together, then whether the gas line and vent route work, or whether the panel has capacity for electric. Pre-1940 houses usually need more gas and venting work than the newer buildings. For one or two tenants with a tank still in good shape, a tank replacement is the cheaper and sensible choice, and we’ll tell the owner so. Financing is open to owners doing several units.',
      },
      {
        title: 'Tankless Water Heater Repair in CUF, and When You Don’t Need It',
        body: 'Plenty of cold-shower texts from tenants in CUF trace to something small. The gas handle may be off or the breaker tripped. Gas tankless units run on household current too, so a kicked-out plug, a GFCI in the closet or a power blip leaves them silent. The cold-inlet screen gathers grit and rinses clean. A bathroom sink turned on gently may not pass enough water to fire the burner, and a short cold stretch when the next roommate starts is normal. Owners need us for codes that return, water that won’t hold heat, units cutting out mid-shower, ignition faults, scale or leaks. We price repair against replacement.',
      },
      {
        title: 'Tankless Water Heater Maintenance in CUF',
        body: 'Owners usually book us for the whole building at once. On each unit, descaling solution is cycled through the heat exchanger from the isolation valves, since minerals the water carries leave a crust in all of them. Then the intake screen gets cleaned, gas models have the exhaust run and condensate trap checked, and a hot tap is opened to confirm it reaches temperature and holds.',
      },
    ],
    whyTitle: 'Why Landlords and Property Managers in CUF Choose Us for Tankless Water Heaters',
    whyParagraph:
      'Most of our tankless work in CUF comes from owners running several rental units, old and new. Background checks and drug tests on every employee, licensed and insured technicians, and flat prices the owner approves first.',
    sharedFaqs: [
      {
        q: 'How do you price tankless work for rentals in CUF?',
        a: 'Per unit, as a set number agreed before we start. Fuel type matters, and so does whether the gas piping, exhaust or electrical panel needs an upgrade and where the heater will hang. A closet in a 1970s block runs cheaper than a basement in an old Fairview house.',
      },
      {
        q: 'Should a landlord switch rental units to tankless?',
        a: 'It pays where tenants run several fixtures at once and the gas piping and exhaust, or the panel, can carry it. For a working tank serving one or two people, or a thin budget, another tank is the better buy. We put both prices in front of you.',
      },
      {
        q: 'How often should a tankless unit be serviced?',
        a: 'Yearly, with the heat exchanger descaled each time. Maintenance staff who are handy can wash the intake screen in between. The pumped descale and any burner, gas valve or exhaust work should stay with a licensed technician.',
      },
    ],
  },
};
