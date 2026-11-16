import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Tenants in Winton Hills don’t book tank service; the owner does. Census figures count 97.0% of homes as rented, most of them CMHA units at Winton Terrace and Findlater Gardens, where the housing authority handles heaters through its own work orders. Our maintenance customers are the private owners: two-family houses and small buildings, typically one tank per unit in a basement or closet, plus a handful of owner-occupied homes. Each heater is quoted before work, and a tank not worth servicing is called that.',
  emergencyParagraph:
    'A scheduled tune-up can wait; these can’t. Tank leaking: close the cold valve over it, then gas or breaker. Smell of gas: everyone outside, no switches or relighting, gas company called from the sidewalk. Carbon monoxide alarm: out first. A relief valve that keeps spitting, or no hot water, means repair. Owners get same day on most calls, weekends included.',
  commonIntro:
    'Private landlords in Winton Hills usually schedule a tank service after one of these:',
  localFaqs: [
    {
      q: 'I’m a CMHA tenant in Winton Hills. Can I schedule water heater maintenance?',
      a: 'Not with us. CMHA or its property manager is responsible for heaters in its units, so submit a work order describing the noise, the smell or the leak. If there’s water on the floor, say that clearly so it’s handled first. Please don’t open the burner cover or the breaker panel yourself.',
    },
    {
      q: 'I own a two-family in Winton Hills. What are my tenants entitled to?',
      a: 'Under ORC 5321.04, division (A)(4) requires you to keep appliances you supply safe and working, and (A)(6) requires running water and reasonable hot water. A yearly round on both tanks is an easy way to avoid a cold-shower complaint. We look after water heaters; the lease terms are yours.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly tank checks for privately owned rentals in Winton Hills',
    band1Heading: 'Signs a Water Heater in Winton Hills Is Due for Maintenance',
    commonSituations: [
      'A two-family with a tank on each floor and no dated service record',
      'A tenant’s note about popping noises from the basement',
      'Hot water that runs out before the kids are through the bath',
      'A rental just bought from another owner, heater age unknown',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Winton Hills',
        body: 'Sediment is what the visit is built around. The water brings minerals in, they settle under the tank’s contents, and the burner or elements heat through them, which tenants report as popping or hot water that won’t last. We drain and flush, making sure the drain valve in that basement or closet closes cleanly after. The anode rod, a rod whose job is to corrode in the tank’s place, gets inspected and priced if it’s gone. We test the relief valve and its discharge line. Gas tanks: burner, pilot, vent, gas line. Electric: elements, thermostats. Shutoff and supply lines on both. The owner approves any repair before we do it.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'For a landlord in Winton Hills with tanks in several units, a yearly round is the plainest case for maintenance. It also makes sense on a working tank never flushed, a rental bought without records, and a heater that’s just started popping. It makes no sense on a tank with water seeping from its body; that’s replacement territory, and flushing won’t change it. A tank giving rusty hot water or nearing its end gets the same call from us: keep the money for its replacement. Owners comfortable with tools can drain a few buckets between visits. Once a year is enough.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Winton Hills',
        body: 'Most private rentals we see here have tanks, and those get the flush and anode check. Gas units get burner and vent attention, electric units an element and thermostat test. Should you own a tankless unit, it gets descaled by circulating cleaning solution through the heat exchanger, and its inlet filter cleaned. At replacement time we can compare tankless with you, without any push.',
      },
    ],
    whyTitle: 'Why Landlords in Winton Hills Book Water Heater Maintenance With Us',
    whyParagraph:
      'Owners of doubles and small buildings in Winton Hills keep every unit’s heater on a yearly list with us. Licensed and insured technicians, background checks and drug tests on all staff, and every price approved first.',
    sharedFaqs: [
      {
        q: 'How is water heater service priced for rentals in Winton Hills?',
        a: 'Per heater, at a flat rate set before work begins. The type of unit, the fuel and how cramped the space is decide the figure. A basement tank is quicker than one packed into a hall closet. Several units on one trip are each priced separately, and there’s no overtime charge.',
      },
      {
        q: 'How often should I have the tanks in my rental serviced?',
        a: 'Yearly is the usual advice. A tenant reporting popping or rumbling is your cue to move one up, because sediment is building faster in that tank. Keeping each unit on the same date also gives you a tidy record if a hot water complaint ever comes up.',
      },
      {
        q: 'Can I flush my rental’s water heaters myself?',
        a: 'If you’re handy, letting some water out of each drain valve between visits is fine. Old valves that might not reseal, gas burners and the relief valve test are where we take over. Tenants should report problems to you instead of touching the tank.',
      },
    ],
  },
};
