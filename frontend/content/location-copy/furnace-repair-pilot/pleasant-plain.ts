import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantPlain: LocationServiceCopy = {
  localParagraph:
    'Pleasant Plain has almost no piped gas, so the furnace here is usually oil or electric. Census figures put 41.8% of homes on fuel oil and 43.3% on electricity, and nearly every house in the village dates from before 1960. An oil furnace needs its nozzle, filter and burner kept clean, and an electric furnace fails at its elements or controls. Ductwork in these older houses was added over time, so airflow problems are common. We find the fault, then you get a price before we start.',
  emergencyParagraph:
    'Pleasant Plain is a small village of older houses, and a furnace that stops overnight is hardest on babies, older relatives and anyone who is ill. NOAA normals at CVG show about 100 nights a year at or below freezing, so pipes are at risk too. We repair oil and electric furnaces, usually the same day, weekends included.',
  commonIntro:
    'Pleasant Plain houses mostly heat with oil or electricity, not gas. These are the furnace problems we see most:',
  localFaqs: [
    {
      q: 'My Pleasant Plain oil furnace ran out of fuel. Can I restart it myself?',
      a: 'Get oil delivered first. Don’t keep pressing the burner’s reset button, because each press can pump more oil into the chamber, and that can start a fire. An empty tank usually leaves air in the fuel line, and we bleed the line and restart the burner safely.',
    },
    {
      q: 'Who handles the permit for a new furnace in Pleasant Plain?',
      a: 'We do. The village handles its own zoning, and we confirm which office covers mechanical work at your address before a replacement starts. If your job needs a permit, we file it. You won’t have to sort out the paperwork or chase the inspection yourself.',
    },
  ],
  overrides: {
    ctaLine: 'Pleasant Plain furnace repair for oil and electric heat',
    band1Heading: 'Common Furnace Problems in Pleasant Plain Homes',
    commonSituations: [
      'An oil furnace that won’t fire after the tank ran dry',
      'Soot or an oily smell around an older oil burner',
      'An electric furnace where only some of the elements heat',
      'Weak airflow in rooms at the end of retrofitted ductwork',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Check the basics first: the thermostat set to heat with fresh batteries, the furnace switch on, the breaker, a clean filter and the furnace door latched. On an oil furnace, look at the tank gauge too. If one of those was the problem, you don’t need us. If a carbon monoxide alarm goes off or you see soot around the burner, get everyone outside first. In a house on gas, a gas smell means touching no switches, relighting nothing, leaving and calling the gas company from the yard. Call us when the burner keeps locking out. We inspect, get your OK on a flat price and test the heat after.',
      },
      {
        title: 'Repair or Replace Your Pleasant Plain Furnace?',
        body: 'Look at the furnace, not the age of the house. An oil furnace with a worn nozzle, a clogged fuel filter or a failed ignition transformer is a routine repair. A cracked heat exchanger is a safety problem, since it can leak carbon monoxide, so that furnace should be replaced. Electric furnaces are often worth repairing because their elements and relays can be swapped. If you rent, Ohio law requires your landlord to keep supplied heating equipment in good and safe working order, so tell them first. We fix furnaces, not leases.',
      },
    ],
    whyTitle: 'Why Pleasant Plain Homeowners Call Us',
    whyParagraph:
      'Pleasant Plain heat is mostly oil and electric furnaces in older houses, and we repair both. Our licensed, background-checked technicians price every job before starting, and an evening or weekend call costs no extra.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Pleasant Plain?',
        a: 'It depends on the furnace and the fault. Cleaning an oil burner and replacing its nozzle is routine, while a failed blower motor or control board takes more. We diagnose first, then give you one flat price to approve, and you pay nothing extra for a weekend visit.',
      },
      {
        q: 'Should I repair or replace my oil furnace in Pleasant Plain?',
        a: 'Repair it if one part failed and it has run reliably. Replace it if the heat exchanger is cracked, because of the carbon monoxide risk, or if breakdowns keep coming back. We price the repair and a replacement side by side so the choice is yours.',
      },
      {
        q: 'Why is my Pleasant Plain furnace blowing cold air?',
        a: 'See that the thermostat is on heat with the fan on auto, then replace the filter. On an oil furnace, an empty tank or a burner that has locked out leaves the blower moving cold air. On an electric furnace, failed elements or a tripped breaker are the usual causes.',
      },
    ],
  },
};
