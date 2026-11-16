import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const terracePark: LocationServiceCopy = {
  localParagraph:
    'In Terrace Park, nearly every home is an owner-occupied single house, and about a quarter of them, 25.6% by Census figures, date from 1939 or earlier. Those older houses are where we find radiators and boilers; many homes from the 1940s and 1950s, the village’s biggest building period, run forced air instead. Boiler calls here tend to be a pump, a control or pressure that won’t hold, and you approve a set price before we fix it.',
  emergencyParagraph:
    'A Terrace Park boiler that stops on a winter night, with about 100 nights a year at or below freezing at the CVG station (NOAA normals), is a risk for babies, older relatives and anyone ill. In a long cold spell, radiator pipes are at risk as well. Most no-heat calls are reached the same day, weekends included.',
  commonIntro:
    'Terrace Park boiler calls come almost entirely from homeowners with older houses. These come up most:',
  localFaqs: [
    {
      q: 'Does a Terrace Park home boiler need a state inspection?',
      a: 'No. Ohio’s boiler law, ORC 4104.04, exempts boilers in private homes from state inspection when a steam boiler runs at 15 psi or less and a hot water boiler at 160 psi or less. That leaves upkeep to you, which is why we suggest a fall service.',
    },
    {
      q: 'I rent a house in Terrace Park and the boiler quit. Who pays?',
      a: 'Your landlord, in most cases. Ohio law (ORC 5321.04) requires landlords to keep the heating equipment they supply in good and safe working order. Tell the owner in writing and let them book the repair. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair and service for Terrace Park homes',
    band1Heading: 'Common Boiler Problems in Terrace Park Homes',
    commonSituations: [
      'A pre-1940 house where the boiler has been replaced but the radiators are the originals',
      'A sunroom or addition on its own zone that stays cold when the rest of the house is warm',
      'A boiler that fires but whose circulator won’t start, so the radiators stay lukewarm',
      'A slow drip from the pressure relief valve after the expansion tank lost its air charge',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Several cold-house problems need no technician. Make sure the thermostat is on heat with good batteries, and that the boiler’s service switch is on. Bleed any radiator cool across the top, then, on a hot water system, read the pressure and refill if it’s low. If warmth returns, skip the call. You do need us when pressure won’t stay up, there’s water at the boiler, the burner flame turns yellow, the boiler locks out, or a whole zone stays cold. If you smell gas or a carbon monoxide alarm sounds, get everyone outside before calling the gas company or 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Terrace Park?',
        body: 'The boiler’s label shows its install year, and that is what to go on, not the age of the house. A worn circulator, a failed zone valve or igniter, or a dead expansion tank is a repair on a boiler with a sound vessel. When the heat exchanger or a section leaks, or each winter brings another repair, we price a new boiler next to fixing the old one, with financing available. Because owners here carry the upkeep themselves, a 60 to 90 minute fall service pays off: we check pressure, expansion tank, safety controls, burner, venting and leaks, and bleed radiators.',
      },
    ],
    whyTitle: 'Why Terrace Park Homeowners Call Us',
    whyParagraph:
      'Almost every Terrace Park call comes from the owner of the house, and they want straight answers. Our technicians are licensed and insured, background-checked and drug-tested, and you approve the flat price before work starts.',
    sharedFaqs: [
      {
        q: 'How is a Terrace Park boiler repair priced?',
        a: 'By what’s wrong. Bleeding air or resetting a lockout is minor; a new circulator is more; a leaking cast-iron section is the larger end. We find the fault, give you one flat-rate number, and do the work after you agree to it. No overtime fees apply.',
      },
      {
        q: 'Should I repair or replace the boiler in my Terrace Park home?',
        a: 'Repair it while the vessel is tight and the problem is one part, such as a pump, valve or control. If the heat exchanger leaks or the boiler needs us every heating season, we lay out both prices so you can decide, and financing is available.',
      },
      {
        q: 'Why does one room in my Terrace Park house stay cold?',
        a: 'Check that radiator first: if its top is cool, bleed out the air, and make sure its valve is open. Additions and sunrooms often sit on a separate zone, so if that area alone is cold, the zone valve or its thermostat is the likely cause.',
      },
    ],
  },
};
