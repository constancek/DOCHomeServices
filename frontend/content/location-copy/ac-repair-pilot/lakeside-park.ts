import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lakesidePark: LocationServiceCopy = {
  localParagraph:
    'Lakeside Park has some of the oldest housing in ZIP 41017, and that shapes most AC repairs here. Census figures show 17.5% of homes went up before 1940, and central air came to those as a retrofit, with ducts snaking through attics and closets. Most homes are owner-occupied, so you usually make the call yourself. Swapping a condenser takes a permit from Planning and Development Services of Kenton County, which we file. We pinpoint the fault, and you approve a price before repairs.',
  emergencyParagraph:
    'Second floors of the older houses, and upper apartments, get hot fastest when the cooling stops, which is hardest on elderly residents. By National Weather Service normals, CVG sees 21 days a year at 90 degrees or warmer, on average. Most Lakeside Park repairs on central systems and heat pumps get done the day you call, weekends included.',
  commonIntro:
    'Lakeside Park homes run from prewar houses to apartment buildings, most of them built before 1980. What shows up on our tickets most:',
  localFaqs: [
    {
      q: 'Is AC work restricted in the Lakeside Park Dixie Highway Historic District?',
      a: 'No, not by the listing itself. The district is five large post-World War I houses on Dixie Highway, on the National Register, and a Register listing alone puts no limits on a private owner. A repair leaves the outside as it was, and if a replacement would move the condenser, we check with the city first.',
    },
    {
      q: 'Can central air work well in a pre-1940 Lakeside Park house?',
      a: 'Usually, but the ductwork decides it more than the equipment. Retrofitted systems in old houses tend to have undersized returns or supply runs crossing hot attics, so upstairs rooms stay warm even with a healthy unit. We check airflow before condemning anything, and if ducts are the issue, we say so.',
    },
  ],
  overrides: {
    ctaLine: 'AC repair for Lakeside Park homes, most calls same day',
    band1Heading: 'Common AC Problems in Lakeside Park Homes',
    commonSituations: [
      'Upstairs rooms in a 1930s house that stay warm because the ducts were an afterthought',
      'An attic unit’s plugged drain line staining the original plaster below',
      'An add-on cooling coil above an older gas furnace that has begun leaking refrigerant',
      'One apartment in a small building running warm while its neighbors stay cool',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Try a new filter, and give a tripped breaker one reset. Cold air coming back means you can skip the visit and keep your money. In Lakeside Park’s prewar homes, a warm upstairs on a scorching afternoon can be a duct limit rather than a failure. Book us when the system runs but the vents push air that’s barely cool, or when water pools by the indoor unit. A breaker that won’t stay reset is another reason. We test the equipment and walk you through what we found, then quote a flat price for your approval. The system runs a full cycle before we leave.',
      },
      {
        title: 'Repair or Replace Your Lakeside Park AC?',
        body: 'Go by what’s installed, not when the house went up. A 1930s home with a condenser that’s a few summers old should get a repair when its fan motor quits. A unit well into its second decade with a dead compressor shouldn’t, and we lay out both costs for comparison. Older houses also make replacement the right moment to inspect the ducts, since new equipment can’t fix a run that was undersized from day one. Swapping the outdoor unit requires a county permit, which we file. Until then, a Duke Energy Kentucky bill that rises while your routine stays the same usually signals a leak or a grimy coil.',
      },
    ],
    whyTitle: 'Why Lakeside Park Homeowners Call Us',
    whyParagraph:
      'Most Lakeside Park homes are owner-occupied, so the caller usually decides, and we explain what older ductwork can handle. Each technician clears a background check and drug screen, and the business has stayed in one family since 1993.',
    sharedFaqs: [
      {
        q: 'How much will an AC repair run in Lakeside Park?',
        a: 'Until we find the fault, any number would be a guess. A worn contactor is a short job. Hunting down a refrigerant leak in a coil wedged above an old furnace takes a good while longer. Either way, a single flat-rate price goes to you for approval first, and weekends carry no overtime.',
      },
      {
        q: 'Does it make sense to fix the AC in an older Lakeside Park house?',
        a: 'Often it does. The house may be decades old, yet the cooling system inside is usually much younger. A sound unit with one broken part deserves the repair. When an old system’s compressor dies, a replacement paired with a duct check is the better spend.',
      },
      {
        q: 'Why is warm air coming from my Lakeside Park AC vents?',
        a: 'Confirm the thermostat is calling for cooling and the breaker hasn’t tripped. Then check the filter. Past that, the outdoor unit may not be starting, usually a bad capacitor, or refrigerant has leaked out. About a third of homes here heat with electricity, and a heat pump can get stuck heating.',
      },
    ],
  },
};
