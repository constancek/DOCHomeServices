import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Half the homes in Hyde Park were standing by 1939, Census figures show, and that age decides most of what we find in the air. Old windows leak cold air, basements stay damp into July, and ducts threaded through the house decades after it was built pick up basement dust and push it upstairs. In the apartment buildings, which hold about a third of units here, the owner picks the equipment. Readings come before suggestions, a quote comes before work, and sometimes the honest answer is a cleaner filter.',
  emergencyParagraph:
    'A sounding carbon monoxide detector means the household goes outside before anyone dials 911. Gas odor means leaving with lights untouched and phoning Duke Energy outside. A burning smell from a furnace or AC means switching the thermostat off. Mold spreading after a burst pipe is harder on babies, grandparents and asthma. Same-day visits cover most calls, weekends included.',
  commonIntro:
    'Owners and renters near Hyde Park Square usually describe the problem in one of these ways.',
  localFaqs: [
    {
      q: 'Will a dehumidifier fix the damp basement under our house in Hyde Park?',
      a: 'If the dampness is humid air, yes. Tied into the ductwork, it dries the whole lower floor instead of one corner, and it helps stop mildew on the old foundation walls. When water trickles in at a crack or window well, we tell you to fix that first, because no dehumidifier keeps up with a leak.',
    },
    {
      q: 'My apartment in Hyde Park has a musty smell. Can I hire you myself?',
      a: 'Go to your landlord or building manager first, and put it in writing. Under ORC 5321.04 (A)(2), Ohio landlords must keep a rental fit and habitable, and dampness and mold count. We fix air, not leases, so the owner schedules us and signs off on equipment. Until then, run the bathroom fan longer.',
    },
  ],
  overrides: {
    ctaLine: 'Cleaner, drier air for pre-war houses and apartments in Hyde Park',
    band1Heading: 'Signs an Apartment or Home in Hyde Park Has an Indoor Air Quality Problem',
    commonSituations: [
      'Basement mustiness that drifts up the stairs of a 1930s house by midsummer',
      'A film of dust back on the mantel two days after dusting',
      'Third-floor bedrooms stuffy while the ground floor feels drafty',
      'An apartment bathroom fan that rattles and moves almost nothing',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in Hyde Park',
        body: 'A typical visit here works from the top floor down. Upstairs we take particle and humidity readings in the rooms where people sleep. On the main floor we check windows and outside walls for condensation. In the basement we read the humidity again, look at the foundation for moisture, then pull the filter and open up the furnace or air handler. Ducts in a 1930s house often run bare through that basement, so we find where they leak. The readings tell us what, if anything, belongs on the system, and each item gets a written price you say yes to first.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'Adding equipment pays off for a child or adult with asthma or allergies, a basement that smells like a cellar, winter static that stings at every doorknob, a dog or cat shedding into the returns, or dust back on the furniture within days. It doesn’t pay off for a filter so packed it barely breathes; change it and wait a week. A single stuffy attic bedroom can make do with a portable machine. A dripping pipe behind mold gets fixed first, and a gas odor or CO alarm belongs in the emergency section above, not here. Between visits, swap filters and run exhaust fans.',
      },
      {
        title: 'Humidity and Filtration for Homes in Hyde Park',
        body: 'Hyde Park sits up on a plateau, but the Ohio Valley’s summer humidity reaches it just the same, and the furnace dries the house out from November on. Many houses need both, a dehumidifier for the basement and the sticky months and a humidifier for heating season, each mounted on the system. A whole-home purifier or media filter then cleans what the ducts carry, taking out pet dander and stale cooking smells.',
      },
    ],
    whyTitle: 'Why Residents and Landlords in Hyde Park Choose Us for Indoor Air Quality',
    whyParagraph:
      'Pre-war basements and apartment bath fans fill most of our air work around the Square. Every technician carries a license and insurance, has cleared a background check and drug test, and works for a family company running since 1993.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay for better indoor air in Hyde Park?',
        a: 'You get one flat price per fix, after the readings. Equipment type and the furnace or air handler it mounts to set that price, so a media filter cabinet on an open basement furnace runs less than a humidifier needing a fresh water line across old joists. Nothing starts until you agree.',
      },
      {
        q: 'How do I know the air in an old house is the problem?',
        a: 'Look for sneezing that eases when you leave, a cellar smell, dust back within days, sweating window glass on cold mornings, and dry winter air that cracks knuckles. Two of these at once in a house this old usually means a test will find something worth fixing.',
      },
      {
        q: 'How often should a furnace filter be swapped in a pre-war house?',
        a: 'Whenever it’s gray, regardless of the date written on it. Old ducts that leak in a basement pull in extra dust, and pets or a renovation make it worse. Slide it out regularly and look; your eyes are a better guide than any schedule printed on the box.',
      },
    ],
  },
};
