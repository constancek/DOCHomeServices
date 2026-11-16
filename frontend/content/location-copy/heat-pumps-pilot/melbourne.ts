import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const melbourne: LocationServiceCopy = {
  localParagraph:
    'Melbourne is a small river city where electricity is the leading heat source. Census figures show 53.8% of homes heat with electricity and only 15.2% with gas, and a few still burn fuel oil. So in many Melbourne houses a heat pump or an electric furnace is the main heat, not a backup to gas. Nearly every home is owner-occupied, and about half went up before 1960, which means the heat pump came well after the house. We find the fault and quote it before work starts.',
  emergencyParagraph:
    'January lows at CVG settle around 23F, by NOAA normals. In Melbourne the heat pump is often a house’s only heat, so when it fails, babies, older relatives and anyone ill are exposed quickly. We repair heat pumps, air handlers and backup heat strips, most of them the same day, Saturdays and Sundays as well.',
  commonIntro:
    'Melbourne is almost all single-family houses along the river road and the streets above it. These four heat pump problems come up most:',
  localFaqs: [
    {
      q: 'Do you come out to Melbourne, along KY 8?',
      a: 'Yes. Melbourne is in our Northern Kentucky service area, and most calls are seen the same day. When you book, tell us whether the house has any backup heat, such as strips or an oil furnace, and whether the outdoor unit is iced or silent. That helps the technician bring the right parts.',
    },
    {
      q: 'Who issues the permit for a new heat pump in Melbourne?',
      a: 'Campbell County Planning, Zoning and Building Inspection is the HVAC office the state lists for Melbourne. Kentucky requires its permit when a heat pump is swapped out, and we take care of that application. A repair is a different visit: we find the fault, give you the price, and fix it once you say yes.',
    },
    {
      q: 'My Melbourne heat pump runs nonstop in January. Is something wrong?',
      a: 'Not always. In deep cold a heat pump runs long cycles, and in an all-electric house the strips switch on to help. If the house holds temperature, it’s working. If it can’t keep up, or the Duke Energy Kentucky bill jumps well past last winter’s, the backup is covering for a fault and we should test it.',
    },
  ],
  overrides: {
    ctaLine: 'Melbourne heat pump repair for all-electric homes',
    band1Heading: 'Common Heat Pump Problems in Melbourne Homes',
    commonSituations: [
      'An all-electric house where the heat pump fails and the strips alone can’t keep up',
      'An outdoor unit frozen into a solid block after a wet, cold night by the river',
      'A pre-1960 house where the heat pump was added later and some rooms never warm up',
      'A heat pump stuck in cooling, blowing cold air through the vents',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Start at the thermostat: heat, not cool or off. Hold the filter to a light; if none comes through, replace it. Check both breakers, outside unit and indoor air handler. Clear snow, ice and river-road leaves off the outside unit. Vapor, thin frost and a fan that rests a few minutes during defrost are not faults. When the rooms warm back up, skip the call. Phone us about ice that stays, a grinding noise outside or an emergency heat light that won’t go out. You get the price before we touch anything.',
      },
      {
        title: 'Repair or Replace Your Heat Pump in Melbourne?',
        body: 'Look at the date on the heat pump’s label; the house won’t tell you much. Most Melbourne homes were standing long before their heat pumps arrived. A sound system with a burnt contactor or worn fan motor gets repaired. A compressor that has quit, or refrigerant that keeps escaping after a fix, is when you see a replacement price beside the repair price. With no gas furnace behind it, a weakening heat pump in an all-electric house leaves the strips running for hours, and the power bill shows it. Kentucky requires a permit for a replacement; we file it.',
      },
    ],
    whyTitle: 'Why Melbourne Homeowners Call Us',
    whyParagraph:
      'In most Melbourne houses electricity is the heat, so fixing the heat pump often means the house is warm again. Licensed, insured technicians who pass background checks and drug tests, from a family company since 1993.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Melbourne?',
        a: 'The failed part sets the price. Replacing a contactor or capacitor goes quickly; a refrigerant leak has to be located before it can be sealed. Diagnosis comes first, then a single flat price for you to accept or turn down. Weekends add no overtime fee.',
      },
      {
        q: 'Should I repair or replace an older heat pump in Melbourne?',
        a: 'Repair it if one part has failed and the compressor runs well. Replace it if the compressor has failed or the system needs refrigerant every winter. We give you both prices to compare, financing is available, and if we don’t get it right, you don’t pay.',
      },
      {
        q: 'Why does my Melbourne heat pump blow cool air?',
        a: 'Heat pump air is gentler than furnace air and can feel cool on your hand, even while it warms the room. That’s normal. If the air is cold and the outdoor unit is iced up or not running, something has failed. Make sure the thermostat is on heat, then call us.',
      },
    ],
  },
};
