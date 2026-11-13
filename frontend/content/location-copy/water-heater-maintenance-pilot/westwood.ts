import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westwood: LocationServiceCopy = {
  localParagraph:
    'Westwood is mostly renters, so landlords book much of our water heater maintenance. Census figures show 65.7% of households rent and 44.5% of homes sit in complexes of five units or more; along Harrison and Montana Avenues that means rows of closet heaters over drain pans, one per apartment, all done on one trip. The houses lean mid-century, and the 20.1% from before 1940 get a basement drain, a vent check and a valve test. Each price is fixed before work, and we’ll flag any tank not worth the money.',
  emergencyParagraph:
    'Water in the drain pan turns maintenance into a repair. Shut the cold feed at the top, then its gas knob or breaker. Same for a venting relief valve or cold taps. Smelling gas? Out of the apartment first, no switches, phone the gas company. A carbon monoxide alarm clears the building. Most calls are same day, weekends too.',
  commonIntro:
    'Apartment closets off Harrison Avenue and mid-century basements across Westwood tend to show these:',
  localFaqs: [
    {
      q: 'We own a ten-unit building in Westwood. Can you service every water heater in one trip?',
      a: 'Yes. We work through the building one apartment at a time: drain, anode rod, relief valve, then the pan and supply lines under each heater. Every tank has its own price on the quote before anything starts, and you get a list of which are sound and which are close to replacement.',
    },
    {
      q: 'The hot water in my apartment in Westwood keeps running short. Can I call you?',
      a: 'Write to your landlord about it before anything else. Under Ohio law, ORC 5321.04, the owner has to keep supplied appliances in good and safe working order and supply reasonable amounts of hot water. We service water heaters, not leases, so the booking comes from the owner or manager, and a shared building heater is their decision.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater maintenance for apartment buildings and houses in Westwood',
    band1Heading: 'Signs a Water Heater in Westwood Is Due for Maintenance',
    commonSituations: [
      'A row of closet tanks in a ten-unit building with no service dates',
      'A drain pan with rust rings under an upstairs heater',
      'Tenants reporting hot water that runs out between showers',
      'A mid-century basement tank that knocks while the burner runs',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Westwood',
        body: 'A closet tank off Harrison Avenue gathers minerals out of the water over the months. They pile up on its floor as sludge the burner or elements must heat through, and tenants hear knocking and lose shower time. Each tank is drained and flushed clear. Next the anode rod, a sacrificial rod that keeps the tank lining from rusting, comes out; an eaten-away rod gets a price for a new one. We trip the relief valve and trace its pipe to where it ends. Gas heaters: burner, pilot, vent, gas line. Electric: elements, thermostats. Each apartment’s pan and supply lines get checked. Nothing changes without a yes.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Owning a multi-unit building is the strongest reason to book: one yearly round covers every closet tank. Mid-century houses in Westwood with a heater nobody has drained qualify too, along with any home bought without a service record and any tank that just started knocking. Seepage from the body of a tank rules it out; that tank is due for replacement, and flushing won’t stop it. Brown hot water, or a heater close to worn out, gets the same advice: the money belongs toward a new one. Handy owners can bleed a bucket off between rounds. We advise once a year.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Westwood',
        body: 'Gas and electric are both common in Westwood, so the first look tells us which checklist applies. Electric: elements and thermostats tested. Gas: burner, pilot and vent. Every tank still gets drained and its anode checked. A tankless model is descaled instead, with a cleaning solution circulated through the heat exchanger, and its inlet filter cleaned. We’ll talk about tankless if you ask, and not otherwise.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Westwood Book Water Heater Maintenance With Us',
    whyParagraph:
      'Buildings with a closet heater in every apartment are a big part of our work in Westwood. Our technicians are licensed, insured, background-checked and drug-tested; each unit is priced for approval first, with no overtime fees.',
    sharedFaqs: [
      {
        q: 'How is water heater maintenance priced in Westwood?',
        a: 'Each heater is priced flat, up front, before a tool comes out. The number moves with tank or tankless, fuel, and how cramped the closet is. For a ten-unit building, the quote lists every apartment separately. A spent anode rod or other worn part has its own price, and you choose which to fix.',
      },
      {
        q: 'How often should water heaters be serviced?',
        a: 'Once a year is what we advise, and it’s easiest to run every unit in one visit. A tank that starts knocking sooner is telling you grit is piling up on its floor, so have that one seen early.',
      },
      {
        q: 'Can I flush the water heater without a technician?',
        a: 'A handy owner can crack the drain valve and fill a bucket between visits. Older valves deserve caution, because some never reseal, and the gas burner and relief valve check are technician jobs. Tenants: the tank belongs to your landlord, so leave it to them.',
      },
    ],
  },
};
