import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const greendale: LocationServiceCopy = {
  localParagraph:
    'In Greendale, most central air was added to a house built for a furnace. Census figures put the median home at 1958, so the ducts were sized for heat and the cooling came later. With 87.4% of homes on gas heat, the usual setup is a gas furnace with the AC coil on top, sharing the furnace blower. That means a weak blower motor can look like an AC problem. We find the actual fault and price it before starting.',
  emergencyParagraph:
    'Heat is hardest on older residents who live alone and on families with infants, especially in the upstairs rooms of mid-century houses. The weather station at CVG, which the National Weather Service uses for this area, averages about 22 days a year at 90 degrees or more. We repair central air and heat pumps, usually the same day, weekends included.',
  commonIntro:
    'Most Greendale cooling runs through a gas furnace in a house from the 1940s to the 1970s. These problems come up most:',
  localFaqs: [
    {
      q: 'Does the Greendale Historic District change anything for AC repair?',
      a: 'Not for a repair. Greendale’s district is a National Register listing, and a listing by itself doesn’t put routine work on your house under city review. If a replacement would move the condenser to a new spot, we check with the city first. Either way, we handle the permit.',
    },
    {
      q: 'Is the AC problem in my Greendale home really the furnace?',
      a: 'Sometimes. When central air shares a gas furnace, the furnace blower moves the cold air. If the outdoor unit runs but almost nothing comes out of the vents, a failed blower motor or a clogged filter is often the cause, not the AC itself. We test both before quoting.',
    },
  ],
  overrides: {
    ctaLine: 'Greendale AC repair for mid-century homes',
    band1Heading: 'Common AC Problems in Greendale Homes',
    commonSituations: [
      'A furnace blower that quits and stops the cooling with it',
      'Upstairs bedrooms in a 1950s house that never catch up',
      'A coil on top of the furnace that drips into the basement',
      'Undersized return ducts that leave the AC short of air',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Start at the furnace, because in most Greendale homes that’s where the filter lives, and a clogged one can ice the coil sitting above it. Then look at the thermostat and the breaker. When a fresh filter or a breaker reset brings the cooling back, skip the service call. Phone us if the breaker flips again or a puddle forms by the furnace. A technician checks the condenser outside and the blower inside, then hands you a flat price to approve. Once the repair is done, we read the vent temperature to prove it works.',
      },
      {
        title: 'Repair or Replace Your Greendale AC?',
        body: 'Go by the condenser’s age, not the house’s. A 1950s Greendale home may have an AC that’s only a few years old, and a contactor or fan motor repair on that unit makes sense. An old system with a failed compressor usually doesn’t, and if the furnace is about as old, replacing both together is often cleaner. We handle the permit for a replacement. Before it fails outright, your bill from the City of Greendale Electric Department can warn you: when it rises and the weather hasn’t, a slow leak or a dirty outdoor coil is making the compressor run longer.',
      },
    ],
    whyTitle: 'Why Greendale Homeowners Call Us',
    whyParagraph:
      'We know the Greendale setup, where the AC shares a gas furnace and ducts that predate it. You approve a flat price before work starts, and if the repair isn’t right, we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Greendale?',
        a: 'The fault sets the price, and we find it by testing. Swapping a condenser capacitor takes little time, while a leaking coil sitting on the furnace is more work. One flat price comes to you before anything starts, and evenings or weekends add no overtime charge.',
      },
      {
        q: 'Should I repair or replace my Greendale AC?',
        a: 'Repair it if the unit is fairly young and one part failed. If the compressor is gone on an older system, replacement usually costs less over time, and it’s worth asking whether the furnace should go at the same time. We price both on one visit.',
      },
      {
        q: 'Why is my Greendale AC blowing warm air?',
        a: 'Make sure the thermostat is on cool and the furnace switch is on, since the furnace blower moves the cold air. Then check the filter. If the outdoor fan isn’t running, a capacitor is the likely fault. Low refrigerant causes it too, and that takes a technician to confirm.',
      },
    ],
  },
};
