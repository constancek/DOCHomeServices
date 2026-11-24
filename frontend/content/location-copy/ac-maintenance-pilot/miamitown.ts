import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const miamitown: LocationServiceCopy = {
  localParagraph:
    'Apartments make up most of the housing in Miamitown, so tune-ups here are booked by owners and managers rather than tenants. By Census figures, about four in five households rent and most units sit in buildings of five or more. We work through closet air handlers one by one and a line of condensers behind the building, all on a single visit. Older houses near Front Street had central air added later. Every unit is priced before we begin, and a unit needing nothing gets left alone.',
  commonIntro:
    'These reports usually lead owners and managers to book a round of tune-ups in Miamitown:',
  localFaqs: [
    {
      q: 'I rent an apartment in Miamitown. Can I book an AC tune-up myself?',
      a: 'No, the owner books service on equipment that came with your apartment. Put the problem in a short written note to your landlord or the manager’s office. Ohio’s ORC 5321.04 (A)(4) leaves supplied air conditioning in the landlord’s hands, to be kept in good and safe working order. Our part is the machine, not the lease.',
    },
    {
      q: 'Should an AC be checked after the Great Miami River floods in Miamitown?',
      a: 'Yes, before it runs again, if water reached the outdoor unit or a ground-floor air handler. Don’t switch it on until we’ve looked at the wiring and controls. That’s a repair visit, not a tune-up, and we price it before any work. Units on higher ground can keep their spring schedule.',
    },
  ],
  overrides: {
    ctaLine: 'Spring AC tune-ups for apartment buildings in Miamitown',
    band1Heading: 'Signs an AC in Miamitown Is Due for Maintenance',
    commonSituations: [
      'A row of condensers behind one building with no service dates on any of them',
      'Tenant reports of water on the floor of an air handler closet',
      'One apartment that cools far worse than the units next to it',
      'An older house near Front Street, now rented, with central air added years later',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in Miamitown',
        body: 'In Miamitown, we go apartment by apartment. Each closet air handler gets its filter pulled and replaced if it’s dirty, its drain line flushed and its pan looked over, because a closet unit that overflows drips into the apartment underneath. The indoor coil, blower and thermostat get their turn next. Out back, every condenser in the row is hosed down, cleared of trash and weeds, and has its capacitor, contactor and wiring metered. We read refrigerant pressures on each one; a low reading points to a leak and its own repair price. No unit is signed off until it finishes a cooling cycle, and the owner gets a priced list.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'In Miamitown, a full building round makes sense when nobody can find the last service date for the row of condensers, when the property just changed hands, when tenants report puddles or rattles, or when one apartment can’t keep up with its neighbors. Any unit we serviced last year that still behaves can sit this one out. A unit that quit cooling or froze up needs AC Repair, and one we’ve already marked for replacement should have that money put toward AC Installation & Replacement. Between rounds, building staff can change filters, pick up trash around the condensers and keep vents clear. A yearly round is our advice.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in Miamitown',
        body: 'About two in three homes in Miamitown are heated with electricity, according to the Census, which makes heat pumps a regular find in these buildings. Heat pumps run in both seasons, so they get serviced twice, a spring visit for cooling and a fall visit for heating with the reversing valve and defrost controls tested. Buildings with central air and gas heat only need the spring round. Where there are ductless mini-splits, the indoor heads and filters are cleaned.',
      },
    ],
    whyTitle: 'Why Landlords and Property Managers in Miamitown Book AC Maintenance With Us',
    whyParagraph:
      'Our work in Miamitown is mostly for owners keeping a whole building of apartments cool. Our technicians are licensed, insured, background-checked and drug-tested, and the owner approves each unit’s price before we begin.',
    sharedFaqs: [
      {
        q: 'How is AC maintenance priced for a building in Miamitown?',
        a: 'Each system carries a flat rate quoted before we start, and the building is priced together as one job. The rate turns on central air or heat pump and on how easily we reach the closets and condensers. Any extra work a unit needs is quoted separately for the owner to approve.',
      },
      {
        q: 'How often should rental AC units get a tune-up?',
        a: 'Book once a year, in spring before the hot stretch, when a full building can be done without waiting. Heat pumps are seen again in fall. A unit with a tenant complaint about water or noise shouldn’t wait for the next round.',
      },
      {
        q: 'What can maintenance staff handle between visits?',
        a: 'Staff can change filters, keep weeds and trash away from the outdoor units, keep vents and returns clear and swap thermostat batteries. They shouldn’t open the condenser panels, touch refrigerant lines or straighten coil fins; those belong to a licensed technician.',
      },
    ],
  },
};
