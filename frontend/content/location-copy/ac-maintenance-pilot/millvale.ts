import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Most homes in Millvale are rented, and about a third of residents live in public housing, so AC maintenance here is a job for the landlord or the housing manager, not the tenant. Many units are 1950s townhomes that have since been renovated, and the rest is small apartment buildings and houses. A tune-up on a townhome means a closet or attic air handler and a condenser out back. Owners get a flat price per unit first, and we say so when a unit needs nothing.',
  emergencyParagraph:
    'If an apartment stops cooling, ices up, drips water from a ceiling or closet, or won’t keep a breaker on, that’s a repair. Turn the system off at the thermostat. Public housing residents should call management, and other tenants their landlord. Heat is hardest on babies, older neighbors and anyone ill. Most repair calls are same day, weekends included.',
  commonIntro:
    'After reports like these, owners and managers book a round of tune-ups in Millvale:',
  localFaqs: [
    {
      q: 'I live in public housing in Millvale. How do I get my AC looked at?',
      a: 'Report it to the housing manager’s office, in writing if you can, and say what you’re noticing, whether that’s no cooling, water, noise or a smell. Management schedules work on its own equipment, so we can’t book it for a tenant directly. In the meantime, keep furniture off the vents and returns.',
    },
    {
      q: 'We own a few rental townhomes in Millvale. Can you service them in one visit?',
      a: 'Yes. We go unit by unit, cleaning coils, clearing drains and testing the electrical parts, and you get a list with any repairs priced separately. Ohio’s ORC 5321.04 (A)(4) requires air conditioning you supply to be kept in good and safe working order. We service air conditioners, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Spring AC tune-ups for rental units in Millvale',
    band1Heading: 'Signs an AC in Millvale Is Due for Maintenance',
    commonSituations: [
      'A townhome air handler closet with a damp floor and a musty smell',
      'Condensers out back with grass and trash packed around them',
      'Tenant complaints that upstairs bedrooms stay warm',
      'A unit turned over between tenants with no record of the last service',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in Millvale',
        body: 'Each unit gets a new filter if the old one is dirty and a look at the evaporator coil. We clear the condensate drain line and check the pan, since a blocked drain in a townhome closet soaks the floor before anyone sees it. Out back, the condenser coil is cleaned and the space around it cleared of grass and litter. We test the capacitor, contactor and wiring, check refrigerant pressures, measure blower airflow and confirm the thermostat works. Low pressure means a leak, which is priced as a repair. Every unit runs a full cooling cycle, and nothing is replaced without the owner’s yes.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'Owners get the most from a round when no one has paperwork for the units, the property has just changed hands, tenants keep mentioning drips, a fresh buzz or bedrooms that won’t cool, or an apartment sits empty between leases. A system we serviced within twelve months that still behaves can skip the round. Units blowing warm or frozen up go to AC Repair, and a unit we’ve already marked as finished shouldn’t soak up tune-up money. Window units never need us. Between rounds, staff can handle filters, litter around the condensers, blocked vents and thermostat batteries. Most rentals here want us once a year.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in Millvale',
        body: 'Around Beekman Street, Census figures show 65% of homes are heated with electricity, so heat pumps are likely in many units. A heat pump cools and heats, so it needs a spring visit and a fall visit, and the reversing valve and defrost controls get checked too. Central air with gas heat only runs in summer and gets one visit. Ductless heads, where a unit has them, get their filters cleaned.',
      },
    ],
    whyTitle: 'Why Landlords and Property Managers in Millvale Book AC Maintenance With Us',
    whyParagraph:
      'Most of our work in Millvale is for owners and managers with several townhomes or apartments to keep cool. Licensed and insured technicians, background checks and drug tests on everyone, and a flat price approved before any work.',
    sharedFaqs: [
      {
        q: 'How do you price AC maintenance for rentals in Millvale?',
        a: 'Each system gets a flat rate before we start, and several units are quoted together. Central air or heat pump, and how easy the closet and condenser are to reach, set it. Repairs we find are quoted on their own so the owner can decide which go ahead.',
      },
      {
        q: 'When should rental units get their AC tune-up?',
        a: 'Once a year, in spring before the hot stretch, so a whole group of units can be done without waiting. Heat pumps get a second visit in the fall. A unit with a tenant report of water or noise should be seen sooner than that.',
      },
      {
        q: 'Can tenants or staff do any AC upkeep themselves?',
        a: 'Tenants can keep furniture off vents and report problems to management. Staff can change filters, keep the ground around condensers clear and swap thermostat batteries. Nobody but a technician should open panels, touch refrigerant lines or work on coil fins.',
      },
    ],
  },
};
