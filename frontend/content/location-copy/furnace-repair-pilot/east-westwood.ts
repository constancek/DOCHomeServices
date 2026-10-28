import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastWestwood: LocationServiceCopy = {
  localParagraph:
    'East Westwood is one of the few neighborhoods where we fix more electric furnaces than gas ones. Census figures put 61.9% of homes on electric heat, and about three in four homes are rented, many in buildings of five units or more. So a typical call is a failed element or sequencer in an apartment furnace, arranged by the owner or manager. The single houses, mostly from the 1950s, usually run gas. We find the fault and agree the price before starting.',
  emergencyParagraph:
    'Normal January lows at CVG sit around 23F, cold enough that an apartment without heat gets uncomfortable within hours. That matters most for infants, older tenants and anyone recovering from illness, and a building left cold can freeze pipes. We repair electric and gas furnaces across East Westwood, with most calls handled the same day, weekends included.',
  commonIntro:
    'Most East Westwood heating calls involve electric furnaces in rented apartments and gas furnaces in 1950s houses. These are the usual ones:',
  localFaqs: [
    {
      q: 'I rent in East Westwood and the heat is out. Can I call you?',
      a: 'Report it to your landlord or property manager first, in writing, because they arrange and pay for the repair. Cincinnati requires landlords who control the heat to keep units at 70F or above once it stays under 60F outside for 24 hours. We fix furnaces, not leases, and we’re glad to work with your landlord.',
    },
    {
      q: 'Why is my electric heat bill so high in East Westwood?',
      a: 'An electric furnace heats with resistance elements, and anything that makes it run longer shows up on the bill. A clogged filter, a weak blower or one dead element out of several are the usual causes. Change the filter first. If the bill stays high, we test each element and the controls.',
    },
  ],
  overrides: {
    ctaLine: 'East Westwood furnace repair for apartments and single houses',
    band1Heading: 'Common Furnace Problems in East Westwood Homes',
    commonSituations: [
      'An apartment electric furnace with a burned-out heating element',
      'A blower that runs but the air from the vents is barely warm',
      'A 1950s house with a gas furnace that won’t light',
      'A tripped breaker that shuts off the electric heat on the coldest night',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Before you report a broken furnace, try the easy fixes. Put the thermostat on heat and change its batteries. Look for a tripped breaker, and on electric heat there may be two. Check that the switch beside the furnace is on, the filter is clean and the access panel is snapped shut. If the heat returns, you don’t need us. If a breaker trips again or the furnace hums and blows cold, it’s a repair. On gas heat, a gas smell means getting out and calling the gas company from outdoors, with no switches touched. We test, explain, and price before work.',
      },
      {
        title: 'Repair or Replace Your East Westwood Furnace?',
        body: 'Go by the furnace itself. An electric furnace with a failed element, sequencer or blower motor is normally a sensible repair, because the cabinet and wiring last well. A gas furnace in a 1950s house is a different check: if the heat exchanger is cracked, it can put carbon monoxide in the rooms, and replacement is the safe answer. The City of Cincinnati Department of Buildings & Inspections issues the permit for a replacement, and we take care of it. For owners, a climbing Duke Energy Ohio bill across several units is often the first sign one furnace is struggling.',
      },
    ],
    whyTitle: 'Why East Westwood Landlords and Residents Call Us',
    whyParagraph:
      'Property owners in East Westwood get a clear report on what failed and a flat-rate price before we start. Every technician is licensed, insured, background-checked and drug-tested, and our work comes with a satisfaction guarantee.',
    sharedFaqs: [
      {
        q: 'What does it cost to repair a furnace in East Westwood?',
        a: 'It depends on the fault we find. Replacing one heating element in an electric furnace is a common, contained repair; a blower motor or control board runs higher. We diagnose first, then give a flat price for the owner to approve. Evening and weekend visits have no overtime fees.',
      },
      {
        q: 'Should an East Westwood landlord repair or replace a furnace?',
        a: 'Repair when one part has failed on a sound unit, which covers most electric furnace calls. Replace when a gas furnace has a cracked heat exchanger or the same unit keeps failing. We price both on the visit, so you can plan across a building rather than one emergency at a time.',
      },
      {
        q: 'Why is my East Westwood furnace blowing cold air?',
        a: 'Confirm the thermostat is set to heat and the fan to auto. In an electric furnace, the blower can keep running while the elements are dead, which feels like cold air. In a gas furnace, the burner may not be lighting. Check both breakers too; if nothing changes, call.',
      },
    ],
  },
};
