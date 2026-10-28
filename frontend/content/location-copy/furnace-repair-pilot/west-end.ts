import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'Most West End heating calls come from landlords and property managers, because Census figures show 87.1% of homes here are rented. The heat itself is split almost evenly, 47.9% gas and 44.3% electric, so on one street we can be fixing a gas furnace in an Italianate rowhouse and an electric furnace in an apartment building. Many buildings went up before 1940, so the furnace is far younger than the walls around it. We find what failed and price it before anyone starts work.',
  emergencyParagraph:
    'NOAA records put the average January low at CVG near 23 degrees, and a West End unit loses its warmth within hours of the furnace quitting. Infants, elderly tenants and people who are sick feel it first, and a unit left cold can freeze its plumbing. Gas and electric furnace repairs are same day on most calls, weekends included.',
  commonIntro:
    'Most West End heat runs through older rowhouses and apartment buildings, about half on gas and half on electric. These are the calls we get most:',
  localFaqs: [
    {
      q: 'Is my West End landlord required to restore the heat?',
      a: 'Yes. City of Cincinnati code says a rental where tenants can’t control the heat has to hold 70 degrees or warmer indoors after 24 hours of outdoor temperatures under 60. Ohio law separately calls for reasonable heat. Send the landlord or manager a written report. We fix furnaces, not leases.',
    },
    {
      q: 'Does a West End historic district change anything for furnace work?',
      a: 'Not for a repair, since the furnace is indoors. In a locally designated district such as Betts-Longworth, exterior changes need a Certificate of Appropriateness, so if a replacement means a new wall vent or outdoor unit, we check with the city first. The replacement itself needs a city mechanical permit, which we pull.',
    },
  ],
  overrides: {
    ctaLine: 'West End furnace repair for rental owners and managers',
    band1Heading: 'Common Furnace Problems in West End Homes and Apartments',
    commonSituations: [
      'A single cold unit in an otherwise warm West End apartment building',
      'An electric furnace running but blowing cool air',
      'A rowhouse basement gas furnace with no flame',
      'A tenant’s thermostat with dead batteries reported as a broken furnace',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Before a West End tenant reports a dead furnace, a short check can save the owner a visit. Set the thermostat to heat and replace weak batteries. Make sure the furnace’s power switch and its breaker are both on. A packed filter or an unlatched furnace door shuts down plenty of units by itself. If warmth returns, no technician is needed. Smell gas? Leave the switches alone, don’t relight anything, and call Duke Energy after you’re out of the building. With a carbon monoxide alarm, clear everyone out first. On genuine breakdowns, we find the fault, explain it to the owner, get the price approved and confirm heat before leaving.',
      },
      {
        title: 'Repair or Replace Your West End Furnace?',
        body: 'Let the furnace decide, not the building’s age. A late-1800s rowhouse can easily hold a furnace only a few winters old, and when its igniter or blower motor fails, fixing it is the sensible move. A cracked heat exchanger is the exception: carbon monoxide can reach the apartment through it, so we turn that furnace off and handle it as a safety matter first. Owners running several units should look at which furnace keeps eating the same part, since that one usually goes first. Where repair and replacement come out close, we show the owner both numbers on one page.',
      },
    ],
    whyTitle: 'Why West End Landlords and Property Managers Call Us',
    whyParagraph:
      'West End owners hear in plain words what failed and see a flat price before any work. Tenants open the door to a technician who has cleared a background check and drug test. A fix that doesn’t hold costs nothing.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in the West End?',
        a: 'Diagnosis comes first, then the price. Cleaning a flame sensor takes little time, while swapping a blower motor in a tight apartment closet takes more. The owner approves a single flat rate before we start, and there’s no overtime added for a night or weekend call.',
      },
      {
        q: 'Is it worth repairing an older furnace in a West End rental?',
        a: 'Usually, if the heat exchanger is sound and one part failed. Owners sometimes assume an old building needs a new furnace, but the building’s age doesn’t matter here; the furnace’s condition does. If a cracked heat exchanger or repeat failures make replacement the better call, we price both on the same visit.',
      },
      {
        q: 'Why is the furnace in my West End apartment blowing cold air?',
        a: 'Look at the thermostat and make sure it says heat, not fan. A gas furnace blowing cold has often failed to ignite and may lock out after a few attempts. With an electric furnace, the usual suspects are a burned element or a tripped breaker. Pass whatever you find along to your landlord.',
      },
    ],
  },
};
