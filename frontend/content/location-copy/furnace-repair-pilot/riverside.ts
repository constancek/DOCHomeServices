import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const riverside: LocationServiceCopy = {
  localParagraph:
    'Riverside heats with a real mix. Census figures put gas at 47.8% of homes and electricity at 42.0%, and a small number still run on fuel oil or propane, so the truck that answers a call here has to handle any of them. About six in ten homes are rented, many in apartment buildings rather than houses, so a no-heat call often starts with the owner or building manager. Whatever the fuel, we track down the fault and give the price before work starts.',
  emergencyParagraph:
    'On about 100 nights a year the CVG weather station records temperatures at or below freezing, NOAA figures show, and a cold apartment gets dangerous for babies, older neighbors and anyone sick. Long outages can freeze pipes. We repair gas and electric heat across Riverside, same day on most calls, weekends included.',
  commonIntro:
    'Riverside heating calls split between gas furnaces and electric heat, much of it in rented apartments. These are the problems we see most:',
  localFaqs: [
    {
      q: 'My Riverside apartment is cold. What does the landlord have to do?',
      a: 'Riverside is in the City of Cincinnati. If you don’t control your own heat, the landlord must keep the unit at 70F or warmer once it has stayed below 60F outside for 24 hours, and the Health Department can fine them. Report it in writing. We fix furnaces, not leases, and work for the owner or manager.',
    },
    {
      q: 'The river came up near my Riverside home. Is my furnace safe to run?',
      a: 'If water reached the furnace, no. Flood water ruins gas valves and controls, and running a soaked furnace risks fire or carbon monoxide. The National Weather Service says a 70-foot Ohio River crest floods most property between Route 50 and the river downstream of Cincinnati. Keep it off and have it inspected first.',
    },
  ],
  overrides: {
    ctaLine: 'Riverside furnace repair for apartments and houses',
    band1Heading: 'Common Furnace Problems in Riverside Homes and Apartments',
    commonSituations: [
      'An apartment electric furnace running with no warm air at the vents',
      'A gas furnace that went quiet after river water reached the basement',
      'An older oil furnace that won’t fire on the first cold night',
      'A heat pump blowing lukewarm air once temperatures drop below freezing',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Some cold apartments come back without us. Put the thermostat in heat mode and swap in new batteries. Next to most furnaces sits a switch like a light switch; it should be on, and so should the breaker. Replace a dusty filter. A furnace panel that isn’t latched stops many models cold. Warmth returning means you can skip the call. Gas smell: leave the switches alone, walk out and call the gas company from the street. If the carbon monoxide alarm sounds, get out before anything else. Renters, tell management. For the rest, we find the fault, give the price before work and run the heat with you.',
      },
      {
        title: 'Repair or Replace Your Riverside Furnace?',
        body: 'Go by the furnace in the closet or basement, not the age of the building. A 1970s Riverside apartment may have a furnace only a few years in, and replacing its blower motor or circuit board is money well spent. A cracked heat exchanger can leak carbon monoxide, so that furnace stays off and we price a new one. New furnaces here are permitted through the City of Cincinnati Department of Buildings & Inspections, and we take care of that. In all-electric units, a Duke Energy Ohio bill that spikes in an ordinary winter often means a heat pump leaning on its backup elements, worth fixing early.',
      },
    ],
    whyTitle: 'Why Riverside Landlords and Residents Call Us',
    whyParagraph:
      'Riverside mixes gas and electric heat, rented apartments and owned houses. Owners get the fault explained and a flat price before work, and tenants get a technician who has passed a background check and a drug test.',
    sharedFaqs: [
      {
        q: 'What will furnace repair cost in my Riverside home?',
        a: 'We price it once we know what broke. Cleaning a dirty flame sensor takes minutes, and an electric furnace with failed elements takes longer. Owners and managers get a flat-rate price to approve before work, and a Sunday call is billed the same as a Tuesday.',
      },
      {
        q: 'Should a Riverside landlord repair or replace an old furnace?',
        a: 'Repair if the heat exchanger is sound and the failure is one part, such as an igniter or inducer motor. Replace if the heat exchanger is cracked, because that furnace can leak carbon monoxide into the apartment. We quote both together so the owner can decide quickly while tenants wait for heat.',
      },
      {
        q: 'Why is the heat blowing cold in my Riverside apartment?',
        a: 'Set the thermostat fan to auto, since on keeps air moving between cycles. If the air stays cold, a gas furnace may be lighting and then shutting off on a dirty flame sensor, or an electric unit may have a burned element. Renters should report it to management rather than open the furnace.',
      },
    ],
  },
};
