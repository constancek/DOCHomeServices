import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Most homes in Millvale are rented, and Census figures show electricity heats about two in three of them, so a heat pump or electric air handler is often the only heat in the unit. About a third of residents live in Cincinnati Metropolitan Housing Authority townhomes, built in the 1950s and many renovated recently. Those tenants report heat problems to the housing authority, not to us. For private landlords and owners along Beekman Street and Moosewood Avenue, we find the fault and quote it before any work.',
  emergencyParagraph:
    'Expect about 100 nights a year at or below freezing, from NOAA normals at CVG. A Millvale townhome or apartment that loses heat on one of them is hard on babies, older relatives and anyone who is sick. We repair heat pumps and electric air handlers for owners and landlords, most of them the same day, weekends too.',
  commonIntro:
    'Millvale is mostly rented townhomes and small apartment buildings, many all-electric. These four heat pump problems come up most:',
  localFaqs: [
    {
      q: 'I live in CMHA housing in Millvale. Can I call you about my heat?',
      a: 'No, report it to the housing authority. The equipment and the repair decision belong to them, and we can’t work on it without their request. Before you call, check that the thermostat is on heat and nothing is blocking the vents, so you can tell them what you’ve already ruled out.',
    },
    {
      q: 'My Millvale landlord hasn’t fixed the heat. What does the city require?',
      a: 'In Cincinnati, a rental where the tenant can’t control the heat has to be kept at 70F or warmer indoors once it has stayed under 60F outside for 24 hours. The Cincinnati Health Department enforces it. Put your complaint to the landlord in writing first. We fix heat pumps, not leases.',
    },
    {
      q: 'Do you work for private landlords with rentals in Millvale?',
      a: 'Yes. Owners of townhomes and small apartment buildings along Beekman Street can book us directly. We diagnose the heat pump, give a flat price for approval, and repair it the same day on most calls. A full replacement needs a mechanical permit from the City of Cincinnati Department of Buildings & Inspections, which we file.',
    },
  ],
  overrides: {
    ctaLine: 'Millvale heat pump repair for landlords and private owners',
    band1Heading: 'Common Heat Pump Problems in Millvale Homes',
    commonSituations: [
      'A rented townhome air handler stuck on backup heat while the outdoor unit sits iced',
      'A small apartment building where two or three units lose heat on the same night',
      'An all-electric unit with a tenant asking why the winter Duke Energy Ohio bill doubled',
      'A heat pump that runs but blows cold air because it’s stuck in cooling',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Tenants and owners can rule out the easy causes. The thermostat should be on heat, because a switch left on cool or off looks like a breakdown. A filter that’s packed with dust needs replacing. Check for a tripped breaker in the unit’s panel. Snow and ice around the outdoor unit should be cleared by whoever maintains it. Steam, a bit of frost and a fan that stops briefly all come from defrost, and none of it is a fault. If the heat comes back, nobody needs to book a visit. Owners should call for a coil that stays frozen or a backup light that won’t clear.',
      },
      {
        title: 'Repair or Replace Your Millvale Heat Pump?',
        body: 'Decide by the heat pump, not the age of the building. Many Millvale rentals have had their equipment changed since they were built, so read the date on the outdoor unit. A failed contactor or fan motor on a sound system is a routine repair. A compressor that won’t start, or a leak that returns after a recharge, is when we price replacement beside the repair for the owner to compare. In all-electric rentals, high winter bills often mean the backup strips are doing the work. We handle the city permit when a heat pump is replaced.',
      },
    ],
    whyTitle: 'Why Millvale Landlords and Owners Call Us',
    whyParagraph:
      'Most Millvale homes are rented and many run on electric heat, so our calls here come from owners keeping tenants warm. Licensed, drug-tested technicians, a flat price approved first, and no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost for a Millvale rental?',
        a: 'It depends on the part that failed. A bad capacitor is a short job, while a refrigerant leak has to be traced before it can be fixed. The owner or landlord gets one flat price after diagnosis and approves it before we start, and weekend calls carry no overtime.',
      },
      {
        q: 'Should a Millvale landlord repair or replace an older heat pump?',
        a: 'Repair it if one part has failed and the compressor still runs well. A failed compressor or a recurring leak is when replacement belongs in the conversation, and we give both prices. Financing is available, which helps when several rentals need work in the same winter.',
      },
      {
        q: 'Why does the heat pump in my Millvale home blow cool air?',
        a: 'Heat pump air comes out warm but mild, so it can feel cool compared with a gas furnace, and that’s normal. Cold air that stays cold usually means the outdoor unit is iced or stopped. Tenants should tell their landlord or the housing authority; owners can book us.',
      },
    ],
  },
};
