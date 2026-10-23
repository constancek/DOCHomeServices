import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const melbourne: LocationServiceCopy = {
  localParagraph:
    'Most Melbourne AC repairs are on a heat pump or on central air added to an older house, not a coil on a gas furnace. Census figures show 53.8% of homes heat with electricity and far fewer with gas, and many houses went up before 1940, so the ducts came later and the top floor often runs warm. Nearly every home is owner-occupied, so you make the call. We diagnose first, and you approve the price.',
  emergencyParagraph:
    'Plaster walls and attic bedrooms in older Melbourne houses soak up summer heat, which is rough on anyone elderly or unwell once the AC fails. CVG logs about 21 days of 90 degrees or hotter in a typical year, National Weather Service figures show. Heat pump and central air repairs here usually happen the day you call, including weekends.',
  commonIntro:
    'Cooling in Melbourne was mostly added to houses built long before it, and few homes here heat with gas. Here is what fails most:',
  localFaqs: [
    {
      q: 'My Melbourne house is heated by fuel oil. Can you still fix the AC?',
      a: 'Yes. When central air was added to an oil furnace, it usually shares that furnace’s blower and ducts, so we check the blower along with the outdoor unit. We repair the cooling side. If the oil burner itself needs service, that’s a job for an oil heat specialist, and we’ll tell you so.',
    },
    {
      q: 'My older Melbourne house stays hot upstairs. Is that a repair problem?',
      a: 'Often it isn’t a fault at all. In houses built before 1940, ductwork was usually added later and may never have reached the top floor properly. If the system tests fine and it’s simply working as designed, we’ll tell you plainly, so you don’t pay for a repair it doesn’t need.',
    },
  ],
  overrides: {
    ctaLine: 'Melbourne cooling and heat pump repair, with the price agreed first',
    band1Heading: 'Common AC Problems in Melbourne Homes',
    commonSituations: [
      'Central air added to a house from before 1940, with ducts too small upstairs',
      'An all-electric Melbourne home whose heat pump loses ground on a 90 degree afternoon',
      'A shared blower in an oil-heated house failing and taking the cooling with it',
      'An aging condenser in a narrow side yard choked by vines and leaves',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Some cooling problems in a Melbourne house are settled in a few minutes. Put in a new filter, make sure the thermostat is on cool, and reset a tripped breaker once; older houses often share circuits, so note what else went dark. Pull back leaves or vines crowding the outdoor unit. If cool air comes back, don’t pay for a visit. Call when that breaker won’t stay on or the condenser hums but its fan sits still. We inspect the indoor blower and the outdoor unit, then explain the fault with a flat price attached. Once you agree, we repair it and test it through a full cycle.',
      },
      {
        title: 'Repair or Replace Your Melbourne AC?',
        body: 'Trust the date on the equipment label. A prewar Melbourne house says nothing about a condenser that may have gone in last year. When a newer unit loses one part, fix it. When an older unit’s compressor is worn out, it usually isn’t worth the money, especially if the ducts never suited the house, and a replacement is the moment to correct them. State law requires a permit for that swap, and we submit it to the county. In an electrically heated house, a heat pump on its way out raises the Duke Energy Kentucky bill summer and winter.',
      },
    ],
    whyTitle: 'Why Melbourne Homeowners Call Us',
    whyParagraph:
      'Melbourne homeowners get a flat price before any work and a straight answer when the house, not the equipment, is the problem. And if our repair falls short, we make it right or you owe nothing.',
    sharedFaqs: [
      {
        q: 'How much will Melbourne AC repair cost?',
        a: 'The fault sets the price, so testing comes before quoting. Swapping a capacitor on a newer outdoor unit is quick, but a leak in lines threaded through a prewar house’s walls is slower to trace. You see a single flat price either way, and weekend calls carry no overtime.',
      },
      {
        q: 'Is it worth fixing an old AC in Melbourne?',
        a: 'Sometimes. If one part failed on a system that otherwise runs well, fix it. If an aging compressor is going, and especially if the house has always cooled unevenly, replacement is the better spend. In all-electric homes we price a heat pump, since it also handles winter heating.',
      },
      {
        q: 'Why is my Melbourne AC blowing warm air?',
        a: 'Look at the filter and thermostat first. In an all-electric Melbourne home, a heat pump whose reversing valve sticks will send heat in July. On an oil-heated house with add-on air, a dead outdoor unit leaves the shared blower moving warm air. We pin down which before giving you a price.',
      },
    ],
  },
};
