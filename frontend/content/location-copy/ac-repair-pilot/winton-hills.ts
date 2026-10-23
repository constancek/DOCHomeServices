import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Nearly every Winton Hills home is rented, and most belong to the Cincinnati Metropolitan Housing Authority at Winton Terrace and Findlater Gardens. Census figures put 97.0% of occupied homes here as rented. CMHA residents get AC repairs through a work order to the authority or its property manager, not by hiring a contractor. The rest are two-family houses and modest buildings with private owners, and for those we pin down the fault and quote the landlord before any work starts.',
  emergencyParagraph:
    'Cincinnati sees about 21 days a year at 90 degrees or more, per the National Weather Service, and two-story townhomes trap that heat upstairs. Older residents and babies feel an outage first, so tenants should report it the day it happens. For private landlords, we fix condensers, heat pumps and air handlers, same day on most calls, weekends included.',
  commonIntro:
    'Winton Hills is almost entirely rented, and the private rentals we work on tend to show these AC faults:',
  localFaqs: [
    {
      q: 'I live in Winton Terrace or Findlater Gardens. Can I book my own AC repair?',
      a: 'No. CMHA owns and maintains both communities, so cooling problems go through a work order with the housing authority or its property manager. Before submitting one, confirm the thermostat reads cool and no breaker has tripped. Write down the date you reported it, and leave the equipment closed.',
    },
    {
      q: 'I rent a Winton Hills two-family house from a private owner. Who fixes the AC?',
      a: 'The owner, when cooling was part of the rental. Ohio’s landlord statute, ORC 5321.04, makes the owner responsible for keeping appliances they provide working safely. Tell them about the outage in writing and save that record. Our job is the repair, not legal advice. If the owner sends us, you learn the cause and the owner approves the cost.',
    },
  ],
  overrides: {
    ctaLine: 'Winton Hills AC repair for private rental owners',
    band1Heading: 'Common AC Problems in Winton Hills Rentals',
    commonSituations: [
      'One side of a privately owned two-family house losing cooling while the other holds',
      'An electrically heated rental’s heat pump worn thin by year-round use',
      'Upstairs bedrooms in a two-story attached home running far warmer than downstairs',
      'An air handler drain backing up inside a modest privately owned building',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'A few checks can save every Winton Hills renter a wait. The thermostat should read cool with a target below room temperature, no breaker should be tripped, and the filter can be changed only where the lease allows. Cold air coming back ends it there. Otherwise, CMHA residents should file a work order, and tenants of private owners should notify the landlord in writing. Neither should open the equipment. Private owners can send for us once the condenser fan refuses to turn, the copper line grows frost, or a pool of water spreads under the air handler. Tenants hear the fault, and owners get the price.',
      },
      {
        title: 'Repair or Replace a Winton Hills Rental AC?',
        body: 'For a private owner, the date stamped on the nameplate settles most of it. A younger system that lost a single capacitor or fan motor is a fair repair. When an aging one needs a compressor, or refrigerant has to be topped up every summer, new equipment is usually the cheaper path. Electric heat sharpens this here: most homes in Winton Hills heat with electricity, so many rentals rely on one heat pump for both seasons, and a weak one raises Duke Energy Ohio bills in each. New systems in the city require a Cincinnati Buildings & Inspections mechanical permit, which we take care of.',
      },
    ],
    whyTitle: 'Why Winton Hills Landlords Call Us',
    whyParagraph:
      'Private landlords in Winton Hills need a tenant’s cooling back quickly and a clear figure before work starts. Every technician we send is licensed and has passed a background check, and flat-rate pricing means no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost for a Winton Hills rental?',
        a: 'Our quote follows the diagnosis, since unclogging a condensate line and swapping a compressor cost very different amounts. The owner sees a single flat-rate number and says yes before we begin. An owner with several Winton Hills rentals gets each address priced on its own, and weekends carry no surcharge.',
      },
      {
        q: 'Should a Winton Hills landlord repair or replace an old heat pump?',
        a: 'Repair a newer heat pump with a single bad part. Replace an older one that has lost its compressor or needs refrigerant every summer. Because that heat pump usually heats the rental too, a winter failure leaves a tenant without heat, which is worth weighing before paying for another patch.',
      },
      {
        q: 'Why is the AC in my Winton Hills rental blowing warm air?',
        a: 'First make sure a heat pump hasn’t been switched to heat. Then check the breaker and the filter. If those look fine, a failed capacitor or a refrigerant leak is likely. CMHA residents should submit a work order, and other tenants should tell their landlord rather than open any panels.',
      },
    ],
  },
};
