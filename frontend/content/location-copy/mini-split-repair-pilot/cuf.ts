import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'Rentals make up 84.5% of homes in CUF, by Census figures, so the person booking us is usually a landlord or manager rather than the tenant with the hot bedroom. Much of the housing predates 1940, and in those houses a ductless head was hung later in a third-floor room or finished attic that no duct ever reached, its line set strapped down an outside wall to a unit squeezed between houses. The owner hears what broke and what it costs before we unscrew a panel.',
  emergencyParagraph:
    'Third-floor bedrooms collect the heat, and the National Weather Service puts 90F-plus days at about 21 a year. An older tenant, an infant or someone with asthma shouldn’t ride that out under a dead head. If water seeps through plaster from the floor above, or the breaker won’t hold, leave that circuit off. Same-day visits are the norm, weekends too.',
  commonIntro:
    'Tenants report, owners decide, and the buildings range from pre-1940 houses to 1970s blocks. What lands on our schedule most:',
  localFaqs: [
    {
      q: 'Does a landlord in CUF have to repair a mini-split they supplied?',
      a: 'Ohio says yes, if the landlord put it in. Section 5321.04 (A)(4) of the Revised Code covers supplied air conditioning, which has to be kept in good and safe working order, and when a head is the apartment’s only heat, the city’s 70F rental heat rule also applies. Send your landlord a written note. We fix mini-splits, not leases.',
    },
    {
      q: 'Does swapping out a mini-split in CUF need a city permit?',
      a: 'Yes. Because CUF is part of the City of Cincinnati, a replacement goes through the Department of Buildings & Inspections, which permits any air conditioner put in or swapped out. We file before the old unit is unbolted. Fixing the current system, a fan or drain pump for instance, needs no permit.',
    },
  ],
  overrides: {
    ctaLine: 'Ductless repair for rentals and older houses in CUF',
    band1Heading: 'Common Mini-Split Problems in CUF Homes and Apartments',
    commonSituations: [
      'A finished-attic head humming along while the bedroom stays stuffy',
      'Drips from a second-floor head showing up on the ceiling below',
      'An outdoor unit wedged into a gap between houses with a dead fan',
      'One bedroom on a multi-zone system flashing a code while the others cool',
    ],
    proseSections: [
      {
        title: 'Signs Your Mini-Split Needs Repair, and When It Doesn’t',
        body: 'Dead batteries in the remote are common, and so is a remote left on fan, which moves air without cooling or heating, so set cool, heat or dry. Look at the panel for a tripped breaker, then at the disconnect box near the condenser. The front cover of the head lifts to reveal filters that rinse clean in a sink. If the building lost power, give the system a breaker reset. Renters should stop there and tell the landlord. Leaks from the head, frost on the copper, a recurring code or air that never cools are ours to fix. We price the fix before work and test every head after.',
      },
      {
        title: 'Repairing or Replacing a Mini-Split in CUF',
        body: 'Building age says little here, since a head bolted into a pre-1940 attic may be only a few seasons old. Fan motors, sensors, a weeping flare nut, a plugged condensate pump and a dirty coil are fixes. So is a control board that’s still being made. A burned-out compressor, a coil that has sprung a leak, the same failure coming back, or a board out of production puts replacement on the table. With a multi-zone outdoor unit near the end of its run and one dead head, the owner sees two numbers. Landlords with several apartments get each unit priced separately.',
      },
    ],
    whyTitle: 'Why Landlords and Tenants in CUF Choose Us for Mini-Split Repair',
    whyParagraph:
      'From attic bedrooms to two-family houses to bigger 1970s buildings, we know the access problems in CUF. Technicians are licensed and background-checked, owners approve one flat price, and weekend work adds no overtime fees.',
    sharedFaqs: [
      {
        q: 'What decides the price of a mini-split repair in CUF?',
        a: 'The failed part and the access decide it. Clearing a drain behind a bedroom head is quick work, and replacing the fan motor on a condenser jammed into a side yard is slower. The code gets read first, and the owner approves a flat figure before any work starts.',
      },
      {
        q: 'Should a landlord fix an aging mini-split in CUF or replace it?',
        a: 'Usually repair, when one part let go on a system that’s otherwise healthy, and plenty of heads here are decades younger than the houses holding them. The outdoor label shows the install year. A burned-out compressor or a leaking coil gets both a repair price and a replacement price, and the owner picks.',
      },
      {
        q: 'Why does a mini-split leak water or run without cooling?',
        a: 'Most leaks come from a condensate line that has clogged, or from a coil that iced behind a filthy filter and then melted. If it runs without cooling, check the remote mode and the filter, and beyond that suspect a slow refrigerant leak or a part that gave out. Ice on the outdoor copper means shut it down and call.',
      },
    ],
  },
};
