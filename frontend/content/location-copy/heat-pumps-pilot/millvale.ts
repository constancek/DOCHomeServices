import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Most homes in Millvale are rented, and Census figures show electricity heats about two in three of them, so a heat pump or electric air handler is often the only heat in the unit. About a third of residents live in Cincinnati Metropolitan Housing Authority townhomes, built in the 1950s and many renovated recently. Those tenants report heat problems to the housing authority, not to us. For private landlords and owners along Beekman Street and Moosewood Avenue, we find the fault and quote it before any work.',
  emergencyParagraph:
    'The Cincinnati area gets roughly 100 freezing nights each year, going by NOAA normals at CVG. When a Millvale townhome goes cold on a night like that, babies, older relatives and anyone who’s ill feel it first. Owners and landlords can book us for heat pump and electric air handler repairs, usually fixed the same day, Saturdays and Sundays included.',
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
        body: 'Start with what a tenant or owner can check without tools. Set the thermostat to heat; on cool or off, the system sits idle and looks broken. Swap a filter that’s grey and clogged. Look at the panel for a flipped breaker on the outdoor unit or the air handler. Whoever maintains the building should shovel snow and ice off the outdoor unit. During defrost the unit puffs steam, frosts lightly and the fan rests for a few minutes, which is normal. Heat that returns on its own means no visit. Owners should book us when the coil stays a block of ice or the backup light never goes out.',
      },
      {
        title: 'Repair or Replace Your Heat Pump in Millvale?',
        body: 'Go by the heat pump itself. A 1950s townhome can hold a unit installed a few years ago, so check the date on the outdoor cabinet. When a contactor or fan motor fails on equipment that’s otherwise healthy, we swap the part and you’re done. A dead compressor, or refrigerant that leaks out again after we top it up, changes the math, and we put a replacement quote next to the repair quote so the owner can weigh them. Big winter bills in an all-electric Millvale rental usually point to the backup strips carrying the load. If the unit gets replaced, we pull the permit from the city.',
      },
    ],
    whyTitle: 'Why Millvale Landlords and Owners Call Us',
    whyParagraph:
      'Our Millvale calls mostly come from owners of all-electric rentals who need tenants warm again. You get licensed, drug-tested technicians, a flat price you approve before we start, and no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost for a Millvale rental?',
        a: 'That comes down to which part quit. Swapping a capacitor takes little time; a refrigerant leak takes longer because we have to find it first. After diagnosis the owner or landlord sees a single flat price and okays it before any work, and a Saturday or Sunday visit costs no more.',
      },
      {
        q: 'Should a Millvale landlord repair or replace an older heat pump?',
        a: 'If a single part broke and the compressor is healthy, fix it. Once the compressor dies or the leak keeps coming back, we quote replacement alongside the repair so you can compare. Financing is an option, useful for an owner facing several rentals with heat trouble in one winter.',
      },
      {
        q: 'Why does the heat pump in my Millvale home blow cool air?',
        a: 'A heat pump puts out air that’s warm but gentler than a gas furnace’s, so it can feel cool on your hand. That part is normal. Air that’s truly cold points to an outdoor unit that’s frozen over or not running. Tenants should tell their landlord or the housing authority; owners can book us.',
      },
    ],
  },
};
