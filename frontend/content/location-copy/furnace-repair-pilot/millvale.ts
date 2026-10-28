import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Heating repair in Millvale is mostly electric and mostly for rental owners. Census figures for the neighborhood’s main blocks show about 65% of homes heat with electricity and 91% are rented. About a third of residents live in CMHA public housing, and those residents should report heat problems to CMHA management rather than hire anyone. Our Millvale work is for private landlords, managers and the few owner-occupants, often on electric furnaces in townhomes and small apartment buildings. We find the fault and price it for the owner first.',
  emergencyParagraph:
    'NOAA normals for CVG count about 100 nights a year at or below freezing, and an electric furnace that quits on one of them leaves a Millvale townhome cold fast. Babies, older family members and anyone sick are most at risk, and pipes can freeze. Owners and managers can book same-day repair on most calls, on weekends as well.',
  commonIntro:
    'Most Millvale heat is electric, in rented townhomes and apartment buildings. These are the furnace faults owners and managers call us about most:',
  localFaqs: [
    {
      q: 'My Millvale apartment is cold. What does the landlord have to do?',
      a: 'In the City of Cincinnati, a rental where the tenant doesn’t control the heat must stay at 70 degrees or warmer inside once outdoor temperatures have held under 60 for a full day. Ohio law also requires reasonable heat. Report it to the landlord or CMHA in writing. The furnace is our job; the lease isn’t.',
    },
    {
      q: 'I live in CMHA housing in Millvale. Can I call you directly?',
      a: 'No. In CMHA homes the heating equipment belongs to CMHA, so report a heat problem to its management office and let them send their own crew or contractor. Calling us first would only slow your repair down. Private landlords and property managers in Millvale can book us directly.',
    },
  ],
  overrides: {
    ctaLine: 'Millvale furnace repair for landlords and property managers',
    band1Heading: 'Common Furnace Problems in Millvale Rentals',
    commonSituations: [
      'A townhome electric furnace running but putting out room-temperature air',
      'A heating breaker that trips again within minutes of a reset',
      'Upstairs bedrooms cold in a two-story townhome while downstairs is fine',
      'A thermostat switched to cool or fan, reported as a dead furnace',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Tenants can save everyone a wait with a few checks. The thermostat should be on heat with a lit screen, and new batteries solve a lot of calls. The furnace breaker in the panel should be on, and the filter shouldn’t be packed with dust. On a gas unit, the switch beside the furnace should be up and the panel door seated tight. If that brings heat back, no repair is needed. For a gas smell, leave without touching switches and call the gas company once you’re outside. If a CO alarm sounds, get everyone out first. Real faults get diagnosed, explained to the owner, priced for approval and tested.',
      },
      {
        title: 'Repair or Replace Your Millvale Furnace?',
        body: 'The furnace decides this, not the building. Millvale housing runs from the 1950s to the 1980s and later, and the heating inside may be far newer than the walls. A newer electric furnace with a failed element, sequencer or blower motor is worth repairing. On gas units, a cracked heat exchanger is a carbon monoxide hazard before it’s a cost question, and we shut the furnace off until it’s replaced. For landlords with several units, a furnace that fails the same way every winter is the one to replace first. We handle the permit when a replacement is needed.',
      },
    ],
    whyTitle: 'Why Millvale Landlords and Property Managers Call Us for Heating',
    whyParagraph:
      'Owners get the fault explained in plain words and one flat price to approve before work. Tenants open the door to a licensed technician who has passed a background check and a drug test.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost for a Millvale rental?',
        a: 'The failed part sets the price, and we find it first. A burned element or a bad sequencer in an electric furnace is usually a quick fix, while a failed blower motor takes longer. The owner or manager approves one flat price before work starts, and night or weekend visits carry no overtime fee.',
      },
      {
        q: 'Is an older furnace in a Millvale rental worth repairing?',
        a: 'Most often, yes, if the heat exchanger is sound and only one part failed. An old townhome can hold a furnace installed a few years ago, so we judge the unit, not the address. When a furnace keeps breaking or a heat exchanger is cracked, we quote repair and replacement together for the owner.',
      },
      {
        q: 'Why is my Millvale furnace blowing cold air?',
        a: 'Most Millvale heat is electric, so a tripped breaker or a burned heating element is the usual cause. Check that the thermostat is set to heat, not fan. A heat pump can blow cool for a few minutes while it defrosts. If cold air keeps coming, tell your landlord or manager what you checked.',
      },
    ],
  },
};
