import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lovelandPark: LocationServiceCopy = {
  localParagraph:
    'Loveland Park heats differently from most of the area. Census figures show only about a quarter of homes burn gas, while 45.5% use electricity and about one in ten run on fuel oil, so a no-heat call here is as likely to be an electric furnace, a heat pump or an oil burner as a gas furnace. Houses range from older homes on the original river lots to ones built since 1980, nearly all detached. We pin down the fault and price it before any work begins.',
  emergencyParagraph:
    'January is the hard month for a Loveland Park furnace: NOAA normals at CVG put the average low around 23 degrees. Babies and older relatives feel a cold house first, and someone who is sick shouldn’t sit in one. We repair furnaces of every fuel used here, and most calls get a technician the same day.',
  commonIntro:
    'Loveland Park homes run on more kinds of heat than most nearby towns. These are the furnace problems we see most:',
  localFaqs: [
    {
      q: 'Does the City of Loveland handle furnace permits for Loveland Park?',
      a: 'No. Loveland Park isn’t part of the city. It sits partly in Deerfield Township in Warren County and partly in Symmes Township in Hamilton County, so the office for a replacement permit depends on which side of the county line your house is on. We check that and handle the permit.',
    },
    {
      q: 'My Loveland Park house heats with oil. Do you repair oil furnaces?',
      a: 'Yes. About one home in ten here burns fuel oil, so we see them often. Check the tank gauge first, because an empty tank needs a delivery, not a technician. Press the burner’s reset button once at most. If it locks out again, call us rather than pressing it again.',
    },
  ],
  overrides: {
    ctaLine: 'Loveland Park furnace repair for oil, electric and gas heat',
    band1Heading: 'Common Furnace Problems in Loveland Park Homes',
    commonSituations: [
      'An oil burner that locks out and won’t restart',
      'An electric furnace with a heating element burned out',
      'A heat pump running all day in January and never catching up',
      'A gas furnace in an older river-lot house that won’t light',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Set the thermostat to heat and swap its batteries, then look at the breaker and the switch on or near the furnace. A packed filter or a furnace door left loose can stop the system too, since many units won’t run until the door is seated. Any of those fixes means you don’t need us. Call when a breaker trips twice, or the furnace runs without warming the rooms. If you smell gas, don’t flip switches or relight anything; leave and call the gas company from outside. A carbon monoxide alarm means everyone out first. We find the cause, price it for your approval and test the heat.',
      },
      {
        title: 'Repair or Replace Your Loveland Park Furnace?',
        body: 'Go by the furnace’s condition, not the year the house went up. An older lot home may hold a recent furnace, and a newer house can have a worn one. One failed part on a sound unit is normally worth repairing. A cracked heat exchanger on a gas or oil furnace can leak carbon monoxide, so that’s a safety decision and we won’t patch it. On the Warren County side, replacement goes through the Warren County Building Department; on the Hamilton County side, we handle the permit. In all-electric homes, a Duke Energy Ohio bill that jumps in a normal winter often means backup heat is doing the work.',
      },
    ],
    whyTitle: 'Why Loveland Park Homeowners Call Us',
    whyParagraph:
      'Most Loveland Park homes are owner-occupied houses, and the heat varies from one to the next. Our licensed, background-checked technicians repair the oil and electric systems common here as well as gas, at a flat rate you approve first.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Loveland Park?',
        a: 'We can’t give an honest figure until we know what failed. A clogged oil nozzle or a tripped limit switch is a smaller job than a dead blower motor. After testing, you get one flat price to approve, and calls outside normal hours carry no overtime charge.',
      },
      {
        q: 'Is my Loveland Park furnace worth repairing?',
        a: 'Usually, if the unit is in good shape and only one part has failed. The age of the house doesn’t decide it, since furnaces here range widely. When a repair is large or the heat exchanger is cracked, we price a replacement next to it so you can compare.',
      },
      {
        q: 'Why is my Loveland Park heat blowing cold air?',
        a: 'Confirm the thermostat is on heat and the fan isn’t set to on. A heat pump blows cool air for a few minutes during a defrost cycle, which is normal. Steady cold air from an electric furnace often means failed heating elements, and on oil or gas, a burner that didn’t fire.',
      },
    ],
  },
};
