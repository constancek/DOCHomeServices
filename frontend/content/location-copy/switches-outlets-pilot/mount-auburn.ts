import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAuburn: LocationServiceCopy = {
  localParagraph:
    'Mount Auburn is two neighborhoods in one. Around Prospect Hill, nineteenth-century brick houses have been cut into flats, and Census figures show more than half the homes date from 1939 or earlier. Those rooms began with one receptacle or none, and some have ungrounded ones. Newer buildings have gone up since 2010, and those calls lean toward USB receptacles and GFCI swaps. In both, we meter the device, trace its circuit and check the panel, say so if a reset is the cure, and fix a price before starting.',
  emergencyParagraph:
    'In Mount Auburn, a warm switch plate, a crackle when a light goes on, a plug fused into its receptacle, or a shock from a fixture all need an electrician today. Cut the breaker only if you can reach it with dry hands. Smoke means get out and dial 911. Same-day visits cover most calls, weekends included.',
  commonIntro: 'Between the old houses on Auburn Avenue and the newer buildings, these four come up most.',
  localFaqs: [
    {
      q: 'What does it mean when a light switch buzzes in Mount Auburn?',
      a: 'A dimmer can hum faintly and still be fine. A plain switch that buzzes, crackles or warms up usually has a loose terminal or worn contacts, and in a house split into flats decades ago, the wiring behind it may be just as old. Stop using it and report it so it can be checked.',
    },
    {
      q: 'As a tenant in Mount Auburn, what can I fix before calling the landlord?',
      a: 'Press the reset on any GFCI and look for a tripped breaker if you can reach the panel. Beyond that, report it, because Ohio’s ORC 5321.04 (A)(4) puts the landlord in charge of keeping supplied electrical fixtures in good and safe working order, and the landlord books us. We fix outlets, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Switch and receptacle repair for flats and old houses in Mount Auburn',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Mount Auburn',
    commonSituations: [
      'A switch in a converted flat that crackles when the hall light goes on',
      'Ceiling lights that flutter whenever someone touches the switch plate',
      'A bathroom squeezed into an old house with one receptacle and no GFCI',
      'One outlet per wall in a tall front room, so cords run along the baseboard',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Mount Auburn',
        body: 'Kitchens and bathrooms added when old houses in Mount Auburn were split into flats can be decades old, and many lack the GFCI protection the newer buildings have. Code requires it in kitchens, bathrooms, garages, basements and outdoors. A GFCI tracks the current on its way out and on its way back, and when some fails to return, it assumes that current is crossing through a person and cuts the circuit at once. It doesn’t sense water, which only makes that leak more likely. USB receptacles are a convenience for studies and bedrooms where tablets and phones charge.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Mount Auburn',
        body: 'Before calling about a dead outlet in Mount Auburn, find the GFCIs. In a flat that might mean the bathroom, the kitchen or a basement laundry shared with neighbors, and one tripped reset can kill outlets on another wall. Press it in. If the building’s panel is reachable, look for a tripped breaker and set it back once. Old front rooms sometimes have a receptacle switched from the door, so try that too. A USB receptacle or smart switch adds convenience, not a repair. Warmth, buzzing, scorching, sparks or a breaker that trips again immediately are the signs to stop and call.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Mount Auburn',
        body: 'We test the panel and the wiring in Mount Auburn before a single receptacle is added. Where the panel is out of room or the old wiring isn’t fit to extend, Electrical Panel Replacement or Home Rewiring goes on the quote next to the outlet price, and the owner picks. Devices are installed to code, and city electrical permits go through Inspection Bureau, Inc. (IBI), which we handle where required.',
      },
    ],
    whyTitle: 'Why Landlords and Tenants in Mount Auburn Choose Us for Switches and Outlets',
    whyParagraph:
      'Licensed electricians meter the device, its circuit and the building panel first. If a reset or a single replacement clears it, they say so, and every device we leave is wired and grounded to code at an agreed price.',
    sharedFaqs: [
      {
        q: 'How is a price worked out for switch and outlet work in Mount Auburn?',
        a: 'We test, then write one flat figure that you or the building owner approve before work. It rises with the number of devices, with GFCI or USB versions, and with any circuit or panel work. Owners updating several flats at once can use financing.',
      },
      {
        q: 'How does a GFCI keep someone from getting shocked?',
        a: 'It compares outgoing and returning current many times a second. If the two don’t match, current is leaking, maybe through the person holding the hair dryer, and the GFCI opens the circuit quickly. It isn’t a moisture detector; water just creates the leak it’s watching for.',
      },
      {
        q: 'Should a landlord replace outlets in Mount Auburn without an electrician?',
        a: 'We’d say no. Old buildings often hide ungrounded circuits and shared neutrals, and a three-prong receptacle on an ungrounded wire looks safe while offering no ground at all. A licensed electrician finds that before the plate goes back on and fits GFCI protection or a ground as code allows.',
      },
    ],
  },
};
