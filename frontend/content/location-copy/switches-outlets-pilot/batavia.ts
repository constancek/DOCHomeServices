import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const batavia: LocationServiceCopy = {
  localParagraph:
    'Batavia, the Clermont County seat, is a village of older houses with a fair share of apartments mixed in. Census figures set the median build at 1955 and show roughly four in ten households renting. Kitchens from those years got a couple of counter receptacles and no GFCI, so we meet one strip powering the toaster, kettle and microwave, and bare outlets beside the washer. Every visit starts with testing the device, its circuit and the panel, and the quote comes before work, unless a reset already solved it.',
  emergencyParagraph:
    'Around Batavia, a receptacle gone hot or brown, a crackling switch, a plug fused in place, or a shock off a cover plate gets a call immediately. Leave the breaker alone unless the panel sits somewhere dry. Smoke in the room means everyone goes outside before anyone dials 911. Same-day visits handle most calls, Saturday and Sunday included.',
  commonIntro:
    'In the older houses and apartment buildings of Batavia, these four calls lead the pack.',
  localFaqs: [
    {
      q: 'Do I need a permit for new outlets or a circuit in Batavia?',
      a: 'Where one is required, we pull it. Clermont County Building Inspection, through Permit Central, issues permits for the village, and its fee schedule includes electrical work. We file the paperwork, schedule the inspection and meet the inspector, so the county side never lands on your desk.',
    },
    {
      q: 'Can a landlord leave a broken outlet unfixed in Batavia?',
      a: 'Ohio law doesn’t allow it. Under ORC 5321.04(A)(4), an owner must keep supplied wiring and fixtures safe and in working order. Tenants put the complaint in writing, and the owner or manager books the visit. A renter can still push a GFCI reset or a breaker back. The lease is between you two; the wiring is ours.',
    },
    {
      q: 'Should outlets be replaced after floodwater reaches a basement in Batavia?',
      a: 'Yes. A receptacle, switch or box that sat in water from the East Fork or a backed-up floor drain keeps grit inside, so we swap it rather than dry it. Keep those circuits switched off at the panel, and we’ll test the runs below the waterline before restoring power.',
    },
  ],
  overrides: {
    ctaLine: 'Switch, outlet and GFCI work for village houses and apartments in Batavia',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Batavia',
    commonSituations: [
      'A 1950s kitchen where everything runs off one counter strip',
      'Basement receptacles by the washer with no GFCI protection',
      'A light switch in an older village house that flickers or buzzes',
      'A worn apartment outlet that no longer grips a plug',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Batavia',
        body: 'Plenty of houses in Batavia were built before GFCIs existed, so basements, laundry corners and older bathrooms often lack them. A GFCI keeps checking the current leaving against the current returning. When some is missing, it assumes the gap is flowing through a person and shuts off within a moment. It doesn’t sense water at all; water is merely the most common way current wanders. Code asks for GFCI protection in basements, kitchens, bathrooms, garages and outdoors. USB receptacles fit the spots where the household charges phones, like the kitchen counter or a nightstand.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Batavia',
        body: 'Start at the GFCIs, wherever the house hides them, in a bathroom, the basement, the garage or by the back steps. One that tripped can silence receptacles two rooms away, so press its reset. Next, a peek inside the panel shows whether a breaker flipped. Work the switches by the door too; one of them may feed that outlet. Renters are welcome to try each step. USB receptacles and smart switches belong to comfort, not repair. Warmth, humming, browning, sparks, or a breaker that won’t latch after a reset all call for an electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Batavia',
        body: 'Older houses in Batavia may still run on an undersized panel or decades-old wire, so we test both before adding receptacles. If the panel can’t carry more, Electrical Panel Replacement gets its own price on the quote; if the wiring is worn out, Home Rewiring does too. You decide. The work meets code, and we file with Clermont County for any permit required.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Batavia Choose Us for Switches and Outlets',
    whyParagraph:
      'Each visit opens with a meter on the receptacle, its circuit and the panel, and you’ll hear if a reset or one new device covers it. Licensed electricians ground and connect every device to code, at a figure agreed first.',
    sharedFaqs: [
      {
        q: 'How do you work out the price of outlet work in Batavia?',
        a: 'Testing sets it. Your flat rate rises with the count of receptacles or switches, any GFCI or USB upgrades, and any circuit or panel work the job uncovers. You see that figure and say yes before a single wire is touched, and financing can cover bigger projects.',
      },
      {
        q: 'Why does a GFCI trip when nothing seems wrong in Batavia?',
        a: 'Something on the circuit is probably leaking a little current. The GFCI compares what goes out with what comes back, and even a small mismatch makes it shut off, since that missing current could be passing through a person. An old GFCI can also wear out and trip on its own.',
      },
      {
        q: 'Is replacing a switch or outlet a do-it-yourself job in Batavia?',
        a: 'Not one we’d recommend. A switch has to sit on the correct circuit, a receptacle needs a proper ground, and older village wiring can surprise you once the plate is off. A licensed electrician tests and wires it to code, which a hardware-store swap can’t promise.',
      },
    ],
  },
};
