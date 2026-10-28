import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Most Hyde Park AC calls come from owners whose cooling coil sits on a gas furnace in the basement. Census figures show 51.6% of homes here were built in 1939 or earlier, so central air came decades later, through ducts that were never sized for it, and you feel that on the top floor first. Hyde Park also has plenty of apartment buildings, where renters report the fault to the landlord rather than hiring us. We find the fault and give you the price before any work starts.',
  emergencyParagraph:
    'On average, NWS Wilmington records 21 days of 90-degree heat a year, and prewar Hyde Park houses trap it in top floors and attic rooms. Babies and older residents in upstairs bedrooms feel it first. Both central air and heat pumps are in our line, and most calls get a technician the day you phone, weekends included.',
  commonIntro:
    'Most Hyde Park houses went up before central air existed, so the cooling runs through ducts and a basement furnace added later. These calls come up most:',
  localFaqs: [
    {
      q: 'My Hyde Park upstairs stays hot with the AC running. Is it broken?',
      a: 'Not always. In a prewar Hyde Park house the ducts were added later and often run long and narrow to the top floor, so upstairs rooms lag even when the equipment works. We check airflow along with the equipment. Sometimes the fix is a duct or a return, not a new part.',
    },
    {
      q: 'I rent an apartment in Hyde Park. Who do I call about the AC?',
      a: 'Your landlord or building manager first. They normally approve the repair and pick who does it. Tell them what you’re seeing, like no cold air or water near the air handler. If they send us, we explain the fault to you and the price to them, and nothing starts until they agree.',
    },
  ],
  overrides: {
    ctaLine: 'Hyde Park AC repair, prewar houses to newer homes',
    band1Heading: 'Common AC Problems in Hyde Park Homes',
    commonSituations: [
      'Humid afternoons freezing the cooling coil that sits on a basement gas furnace',
      'Prewar top-floor bedrooms still warm well into the evening',
      'A condensate pump in a finished basement that quits and floods the carpet',
      'An upper-floor attic air handler dripping through a plaster ceiling',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Plenty of warm afternoons need no technician. Slide in a clean filter, double-check that the thermostat says cool, and if the vents go cold again you’re done. In a finished basement, also make sure the condensate pump by the furnace is plugged in and draining. Book a repair once the outdoor fan won’t spin up or the coil ices again with a fresh filter. Downstairs and outside, our technician works through the equipment, names the failed part, and puts a flat price in front of you before touching anything. Afterward we read the supply air temperature at the registers so you know it worked.',
      },
      {
        title: 'Repair or Replace Your Hyde Park AC?',
        body: 'Most Hyde Park houses are far older than their air conditioners, so the outdoor unit’s label matters more than the deed. Under roughly 12 years with one bad part, fix it. Past that, with a burned-out compressor or a leaking coil on the furnace, price new equipment sized to what your existing ductwork can carry. Prewar ducts were rarely sized for cooling, so a bigger unit isn’t automatically better. Whatever permit the job calls for, we pull it. Before you decide, a refrigerant leak or a dirty outdoor coil keeps the compressor running long, and Duke Energy Ohio bills you for every extra minute.',
      },
    ],
    whyTitle: 'Why Hyde Park Homeowners Call Us',
    whyParagraph:
      'Hyde Park owners often ask straight out whether an older system deserves the money, and we answer honestly, even when it doesn’t. Our technicians are licensed and pass background checks, and you approve every price ahead of any work.',
    sharedFaqs: [
      {
        q: 'How much is AC repair in Hyde Park?',
        a: 'It depends on the part, so we test before we price. Clearing a blocked condensate line beside a basement furnace is quick. Replacing a leaking indoor coil is a big job. The technician tells you what failed and gives you one flat price, and no work begins until you say yes.',
      },
      {
        q: 'Should I repair or replace an older AC in Hyde Park?',
        a: 'Look at the unit’s age and what broke. If it’s under 12 years old and one part failed, repair it. If an older compressor quit or the coil on the furnace leaks, replace it, and size the new unit to what your old ducts can carry, not to the old tonnage.',
      },
      {
        q: 'Why is my Hyde Park AC blowing warm air?',
        a: 'Change the filter and check the breaker first. If the air is still warm, look at the coil above the furnace. Ice on it blocks the airflow, and it has to thaw before anything else. Otherwise a dead capacitor or a slow leak is likely, and we test before we quote.',
      },
    ],
  },
};
