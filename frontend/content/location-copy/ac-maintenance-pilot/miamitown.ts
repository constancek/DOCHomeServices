import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const miamitown: LocationServiceCopy = {
  localParagraph:
    'Apartments make up most of the housing in Miamitown, so tune-ups here are booked by owners and managers rather than tenants. By Census figures, about four in five households rent and most units sit in buildings of five or more. We work through closet air handlers one by one and a line of condensers behind the building, all on a single visit. Older houses near Front Street had central air added later. Every unit is priced before we begin, and a unit needing nothing gets left alone.',
  emergencyParagraph:
    'When an apartment loses its cooling, frost shows on the lines, water creeps out of the air handler closet or a breaker won’t stay set, that unit needs a repair. Set its thermostat to off and tell management. Many residents here are older and live alone, and heat hits them hardest. Most calls are same day, weekends included.',
  commonIntro:
    'These reports usually lead owners and managers to book a round of tune-ups in Miamitown:',
  localFaqs: [
    {
      q: 'I rent an apartment in Miamitown. Can I book an AC tune-up myself?',
      a: 'Not on the landlord’s equipment. Send your landlord or manager a written note describing the problem. Where the landlord supplies air conditioning, Ohio’s ORC 5321.04 (A)(4) says it must be kept in good and safe working order. We service air conditioners, not leases, so the visit is the owner’s to book.',
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
        body: 'Unit by unit, the filter is checked and changed, the condensate line flushed and the pan inspected, since an overflowing closet unit can leak through to the apartment below. We look at the indoor coil, then test the blower and thermostat. Behind the building, each condenser has its coil washed and the trash and weeds around it cleared, and its capacitor, contactor and wiring are metered. Refrigerant pressures are read on every system, and a low one means a leak, which gets its own repair quote. Each unit cools through a full cycle before we move to the next, and the owner receives a priced list to approve.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'A building-wide round pays when no one knows when the units were last serviced, when you’ve just taken over the property, when tenants mention water or odd noises, or when some apartments run warmer than others. A unit serviced in the past year that behaves normally can sit this round out. Units that have stopped cooling or iced over need AC Repair, and a unit we’ve already marked for replacement is better off with that money going to AC Installation & Replacement. Staff can change filters, pick up trash around the condensers and keep vents clear in between. One round a year is what we advise.',
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
