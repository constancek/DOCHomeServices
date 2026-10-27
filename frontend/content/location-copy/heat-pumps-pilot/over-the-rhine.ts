import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const overTheRhine: LocationServiceCopy = {
  localParagraph:
    'Most heat pump calls in Over-the-Rhine come from apartments and condos in 19th-century buildings, not from detached houses. Census figures show 47.5% of homes heat with electricity and 70.0% are rented, and most units sit in buildings put up before 1940. That puts outdoor units on rooftops and in back courtyards and air handlers in the closets of converted units, so getting to the equipment is part of the job. We find the fault, tell the owner or tenant what failed and price it before any repair.',
  emergencyParagraph:
    'January in the Cincinnati area averages lows of about 23F, from NOAA normals at CVG. An Over-the-Rhine apartment without heat cools quickly in that weather, and babies, older residents and anyone ill are most at risk. We fix heat pumps, air handlers and backup heat strips, mostly the same day, weekends included.',
  commonIntro:
    'Over-the-Rhine is mostly rented apartments and condos in multi-unit buildings, split close to evenly between electric and gas heat. These four heat pump calls come up most:',
  localFaqs: [
    {
      q: 'My OTR apartment heat pump quit. Who’s responsible?',
      a: 'Your landlord, in most leases. Cincinnati’s rule requires rentals where tenants can’t control the heat to stay at 70F or warmer in cold weather, and Ohio law requires supplied heating to be kept working. Report it in writing. Owners, managers and condo associations can book us. We fix heat pumps, not leases.',
    },
    {
      q: 'Does the historic district affect replacing a heat pump in Over-the-Rhine?',
      a: 'Exterior changes in Cincinnati’s local historic districts need a Certificate of Appropriateness. If a new heat pump would sit somewhere visible from the street or change what shows above the roofline, we check with the city before work starts. Repairs to existing equipment don’t change anything you can see.',
    },
    {
      q: 'I own an OTR condo and the outdoor unit is on the roof. Can you get to it?',
      a: 'Usually, yes, but we need access. Ask the association or building manager for roof access and any contractor rules before the visit. If several units share the roof, a label or the copper lines tell us which is yours. If access falls through, we can still check the indoor air handler and thermostat.',
    },
  ],
  overrides: {
    ctaLine: 'Over-the-Rhine heat pump repair for owners, tenants and associations',
    band1Heading: 'Common Heat Pump Problems in Over-the-Rhine Apartments and Condos',
    commonSituations: [
      'A condo heat pump on a shared roof where nobody is sure which unit is whose',
      'An apartment running on backup heat strips after the outdoor unit froze',
      'A converted 19th-century building with the air handler squeezed into a closet',
      'A tenant report of cool air that turns out to be the defrost cycle',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Check these before booking, or before reporting it to the landlord. The thermostat should be set to heat. Filters in small apartment air handlers clog quickly, so replace yours. Look for a tripped breaker, the outdoor unit’s or the air handler’s; in a larger building the outdoor one may sit in a shared panel. Clear snow or debris off the outdoor unit if you can reach it safely. Steam, light frost and the fan stopping for a few minutes mean it’s defrosting. If heat returns, you don’t need us. Call when ice won’t clear, emergency heat stays on or the vents blow cold.',
      },
      {
        title: 'Repair or Replace Your Over-the-Rhine Heat Pump?',
        body: 'Base it on the heat pump, not the building’s age. Plenty of 19th-century OTR buildings were rehabbed with fairly new equipment. A failed capacitor, fan motor or defrost board on a sound unit is a repair. A compressor failure or repeated refrigerant leaks is the larger call, and we price both options for the owner. A heat pump falling behind lets the backup strips take over, and the Duke Energy bill climbs. Replacements need a City of Cincinnati mechanical permit, which we pull. Rooftop jobs need building access planned ahead, and financing is available.',
      },
    ],
    whyTitle: 'Why Over-the-Rhine Owners and Landlords Call Us',
    whyParagraph:
      'Heat pump jobs in Over-the-Rhine often involve owners, managers and associations, so we sort out access and send the price to whoever approves it. Technicians are licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Over-the-Rhine?',
        a: 'It depends on what failed and where it sits. A contactor in a ground-level unit is quick; a leak on a rooftop line set takes longer. We diagnose first, then the owner gets one flat-rate price to approve. Nights and weekends carry no overtime fee.',
      },
      {
        q: 'Should the heat pump in my OTR unit be repaired or replaced?',
        a: 'Look at the heat pump’s install date rather than the building’s. One bad part on a newer unit is a repair. A dead compressor or a leak that keeps coming back makes replacement worth pricing, and we quote both so the owner or association can decide.',
      },
      {
        q: 'Why does my Over-the-Rhine heat pump blow cool air?',
        a: 'Heat pump air feels mild next to gas furnace air, so lukewarm air from the vents is usually normal. Cold air, or an outdoor unit that’s iced over or silent, is a fault. If the apartment keeps cooling with the thermostat on heat, the reversing valve is a likely cause.',
      },
    ],
  },
};
