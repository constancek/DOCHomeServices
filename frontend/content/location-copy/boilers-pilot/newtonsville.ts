import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newtonsville: LocationServiceCopy = {
  localParagraph:
    'Boilers are not the main heat in Newtonsville. Census figures for the area put the typical home in the 1970s, and only 7.6% went up before 1940, so most houses run forced air or electric heat. Natural gas is rare out here, and 16.2% of homes burn fuel oil, which is where most of our boiler work comes in: older homes in and around the old village with oil-fired hot water heat. Ducted homes should see our furnace repair page. For radiators, we find the fault and price it first.',
  emergencyParagraph:
    'Newtonsville nights in January bottom out around 23F on NOAA normals for the CVG station, so a boiler that dies after bedtime can leave the house cold by breakfast. That is hardest on infants, elderly parents and anyone sick, and a long freeze can endanger radiator piping. Most no-heat calls get a technician the same day, Saturday and Sunday too.',
  commonIntro:
    'Boiler calls around Newtonsville are mostly older homes on oil or electric heat. The usual problems:',
  localFaqs: [
    {
      q: 'Newtonsville isn’t a village anymore. Do you still come out?',
      a: 'Yes. The village dissolved in 2019 and is now part of Wayne Township, but the homes and roads are the same and so is our service area. For renters, Ohio law (ORC 5321.04) still makes the landlord responsible for working heat. We fix boilers, not leases.',
    },
    {
      q: 'My Newtonsville boiler burns oil. Can you work on it?',
      a: 'Yes. Oil boilers need a little more care than gas: the nozzle and filter wear, and soot builds up faster when the burner is out of adjustment. A smoky smell or a boiler that keeps tripping its reset is a reason to call. Don’t keep pressing reset; it can flood the burner with oil.',
    },
  ],
  overrides: {
    ctaLine: 'Oil and gas boiler repair around Newtonsville',
    band1Heading: 'Common Boiler Problems in Newtonsville Homes',
    commonSituations: [
      'An oil-fired boiler that trips its reset button on cold mornings',
      'Hot water baseboard that heats the near rooms and leaves the far bedroom cold',
      'A pressure gauge that reads low again a few days after refilling',
      'A circulator pump that hums but no longer moves water through the radiators',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'If a radiator or a run of baseboard feels cool along its top, bleed it. With the air gone, look at the gauge, and add water if the needle has fallen low. Confirm the thermostat says heat and the boiler’s own switch hasn’t been knocked off. Heat back on means you can save the call. Book us if the gauge falls again over a few days, a valve drips, the pipes bang or kettle, or a single zone won’t warm. If you smell gas or a carbon monoxide alarm sounds, get everyone out and call for help from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Newtonsville?',
        body: 'The rating plate on the boiler matters more than the year the house was built, since it shows when the boiler went in. Pumps, zone valves, igniters, oil burner parts and expansion tanks are all repairs. Replacement becomes worth pricing when water seeps from the vessel or a heat exchanger, or when the same boiler needs work each winter, and we show you both prices. On oil, yearly service matters more than on gas. Plan about 60 to 90 minutes before heating season: pressure, the expansion tank, leaks, safety controls, burner, flue and venting, then bleeding the radiators.',
      },
    ],
    whyTitle: 'Why Newtonsville Homeowners Call Us',
    whyParagraph:
      'Most homes around Newtonsville are owner-occupied single houses, many on oil or electric heat. Our technicians are licensed, insured, background-checked and drug-tested, and you approve a flat-rate price before any work starts.',
    sharedFaqs: [
      {
        q: 'What will a boiler repair cost me in Newtonsville?',
        a: 'The part that failed sets the price. A new oil nozzle and filter is a short visit; a leaking boiler section is a bigger job. You get a flat-rate price once we know the cause, and the work starts only when you approve it. Financing is available on larger jobs.',
      },
      {
        q: 'When does replacing a Newtonsville boiler make more sense than repairing it?',
        a: 'When the vessel or heat exchanger leaks, or you keep paying for repairs every heating season. A single failed pump, valve or control is a repair, even on an older boiler. In the replacement case we quote both so you can weigh them yourself.',
      },
      {
        q: 'Why does one room in my Newtonsville house stay cold?',
        a: 'If the radiator or baseboard there is cold at the top, it has air in it; bleed it. If it is the last room on the loop, low pressure or a weak circulator pump can starve it. A room on its own zone that stays cold often means a zone valve stuck shut, which we can replace.',
      },
    ],
  },
};
