import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Winton Hills heating is a landlord’s job in nearly every home. Census figures show 97.0% of households rent, and most live in Winton Terrace or Findlater Gardens, both owned by the Cincinnati Metropolitan Housing Authority. Residents there report no heat to CMHA through a work order, and it isn’t a call for us. The furnaces we repair here belong to private owners of two-family houses and small buildings, and more than half the homes in the neighborhood heat with electricity. We test first, then the owner approves a price.',
  emergencyParagraph:
    'Cincinnati gets about 100 nights a year at or below freezing, per NOAA records at CVG, and a rental without heat on one of them puts babies, older tenants and anyone ill at risk. Tenants should report it to the owner or CMHA the same day. For private landlords we repair electric and gas furnaces, usually same day, weekends included.',
  commonIntro:
    'Most private rentals in Winton Hills heat with an electric furnace or a gas one. These are the faults owners call us about most:',
  localFaqs: [
    {
      q: 'My CMHA apartment in Winton Hills has no heat. Who fixes it?',
      a: 'CMHA does. Submit a work order with the housing authority or its property manager and note when you reported it. Before you do, check that the thermostat is on heat and no breaker is off. Don’t open the furnace, and if you smell gas, get outside first and call the gas company.',
    },
    {
      q: 'Does Cincinnati require my landlord to keep the heat at 70 degrees?',
      a: 'In many rentals, yes. If you don’t control your own heat, city code requires 70 degrees or warmer inside once it stays below 60 outside for a full day, and the Health Department can fine owners. Where you do control it, Ohio law still requires reasonable heat. We fix furnaces, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Furnace repair for Winton Hills rental owners',
    band1Heading: 'Common Furnace Problems in Winton Hills Rentals',
    commonSituations: [
      'An electric furnace in a two-family house losing heating elements one at a time',
      'A basement furnace that can’t keep both floors of a two-family house warm',
      'A gas furnace locking out after several failed tries to light',
      'Electric heat tripping a breaker every time the temperature drops',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Tenants can check a few things without opening anything. The thermostat should be on heat and set above room temperature, with fresh batteries if it uses them, and a reachable breaker panel is worth a look. Owners should also check the furnace switch, the filter and that the furnace door is closed tight. If heat comes back, you’re done. If not, CMHA residents file a work order, and tenants of private owners tell the landlord in writing. Owners can send us when the furnace won’t light or the blower runs cold. We explain the fault, the owner approves the price, and we test the heat afterward.',
      },
      {
        title: 'Repair or Replace Your Winton Hills Furnace?',
        body: 'For a private owner, the furnace’s own date matters more than the building’s, which in Winton Hills often goes back to the 1940s or 1950s. A sound furnace with a bad igniter, element or blower motor is worth repairing. A gas furnace with a cracked heat exchanger is not, because it can leak carbon monoxide into a tenant’s home, so we shut it off and quote a replacement. Keep carbon monoxide alarms near sleeping rooms; if one sounds, everyone gets out first. Replacement work in the city goes through Cincinnati Buildings & Inspections, and we handle the permit.',
      },
    ],
    whyTitle: 'Why Winton Hills Landlords Call Us',
    whyParagraph:
      'Private owners in Winton Hills need heat back for a tenant quickly and a price they can approve without driving over. We send licensed, background-checked technicians, quote a flat rate first and charge no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost for a Winton Hills rental?',
        a: 'We price after testing, because replacing a heating element is a far smaller job than replacing a gas valve or blower. The owner gets one flat price and approves it before work starts. Owners with more than one Winton Hills property get a separate price for each address.',
      },
      {
        q: 'Should a Winton Hills landlord repair or replace a failing furnace?',
        a: 'Repair it if one part failed and the furnace tests safe. Replace it if the heat exchanger is cracked or it breaks down every winter, since each failure leaves a tenant without heat and you with another call. We lay out both prices together so the choice is clear.',
      },
      {
        q: 'Why is the furnace in my Winton Hills rental blowing cold air?',
        a: 'Check that the thermostat is set to heat and the fan is on auto. If it still blows cold, an electric element or a gas igniter has likely failed. In a CMHA unit, that means a work order; with a private landlord, report it in writing and leave the furnace closed.',
      },
    ],
  },
};
