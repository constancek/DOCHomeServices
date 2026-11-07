import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'In Mount Lookout, boiler work means single-family houses, most of them lived in by their owners. Census figures show half the homes here date from 1939 or earlier, and gas heats about 73% of them, so a gas boiler with cast-iron radiators is a familiar setup. Most repairs are radiators full of air, slow pressure leaks and controls at the end of their life. We test the system, tell you what failed and quote the repair before touching it.',
  emergencyParagraph:
    'January lows near 23F (NOAA normals, CVG) make a dead boiler serious in a Mount Lookout house, especially for a baby, an older relative or someone who is unwell. Radiator pipes in an unheated sunroom or along outside walls can be at risk in a long cold spell. We get to most no-heat calls the same day, weekends included.',
  commonIntro:
    'Mount Lookout boiler calls are almost all single houses from the 1920s and 1930s. These come up most:',
  localFaqs: [
    {
      q: 'Our Mount Lookout basement took water in the July 2026 storms. Should we have the boiler checked?',
      a: 'Yes, if water touched the burner, gas valve, controls or wiring. Fox19 named Mount Lookout among the East Side areas hit hardest. Don’t restart a boiler that sat in water; we inspect it and replace soaked controls before it runs again.',
    },
    {
      q: 'Can you keep our original radiators when replacing the boiler?',
      a: 'In most cases, yes. Cast-iron radiators in good order work with a new boiler; we flush the system, check for leaking valves and size the boiler to the radiators you have. Keeping them avoids opening walls in a finished Mount Lookout house.',
    },
    {
      q: 'I rent a house in Mount Lookout. Who fixes the boiler?',
      a: 'Your landlord, if the lease puts heat in their hands. Cincinnati’s rule says landlord-controlled heat must hold 70F indoors once it has stayed below 60F outside for 24 hours. Send the request in writing so there is a record. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Mount Lookout homes',
    band1Heading: 'Common Boiler Problems in Mount Lookout Homes',
    commonSituations: [
      'A 1930s house where the radiators heat unevenly from room to room',
      'A basement boiler that sat in water during the July 2026 flooding',
      'Pressure that drops a little more each week from a slow leak at a radiator valve',
      'A boiler that cycles on and off rapidly after a thermostat swap',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'A cold room is often something you can sort out. Bleed the radiator if it is cold at the top, check the gauge and top up a hot water system that reads low, and make sure the thermostat is calling for heat and the boiler switch is on. If that works, you don’t need to book us. You do need a technician when the pressure keeps dropping, there is water under the boiler, it bangs or kettles, or it shows a yellow flame or an error code. If the carbon monoxide alarm goes off, get everyone outside first and call 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Mount Lookout?',
        body: 'The boiler label, not the house, shows what you are working with. A 1938 Mount Lookout house might have a fairly new boiler, and a failed circulator, zone valve, igniter or expansion tank on it is repaired. Replacement gets priced beside the repair when the heat exchanger or a section leaks, when flooding reached the controls, or when it needs fixing every winter. Financing is available. Annual service, about 60 to 90 minutes before cold weather, covers pressure, the expansion tank, safety controls, burner and venting, leak checks and bleeding the radiators.',
      },
    ],
    whyTitle: 'Why Mount Lookout Homeowners Call Us',
    whyParagraph:
      'Three in four Mount Lookout homes are owner-occupied, and owners tend to keep their radiators. Our technicians are licensed and insured, pass background checks and drug tests, and quote a flat price before work.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost in Mount Lookout?',
        a: 'The failed part decides it. A thermocouple or a lockout reset is a brief visit; flood-soaked controls or a leaking section cost more. We find the problem, give you a flat-rate quote and start only after you say yes. No overtime fees apply.',
      },
      {
        q: 'Repair or replace the boiler in a Mount Lookout house?',
        a: 'Repair when the vessel is sound and one part is worn. Replace when it leaks from the heat exchanger or sections, or when you are calling for help every winter. We give you both prices together so the choice is clear.',
      },
      {
        q: 'Why won’t some radiators in my Mount Lookout house heat?',
        a: 'Usually trapped air, so bleed them first and top up the pressure if it is low. Check that each radiator valve is open. If one area stays cold, a zone valve or a circulator pump that has lost strength is the probable cause.',
      },
    ],
  },
};
