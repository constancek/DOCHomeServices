import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evanston: LocationServiceCopy = {
  localParagraph:
    'Evanston is mostly houses built before 1940, with two-family homes and apartments mixed in. Census figures put 70.9% of homes in that era, so a service often starts in a basement with older venting, a gas line to check and a drain valve that may need coaxing. Two-family houses usually have a tank per unit. Flats above the shops on Montgomery Road keep the heater in a small closet over a pan, a landlord’s call. The flat rate comes first, and we’ll tell you if the tank isn’t worth servicing.',
  emergencyParagraph:
    'Some calls aren’t maintenance. Carbon monoxide alarm: everybody outside first. Gas odor: out of the house, lights and pilot left alone, gas company called from the sidewalk. A tank wetting the floor: close the cold inlet on top, then gas off or breaker off. A relief valve venting repeatedly, or no hot water: repair. Most are same-day, weekends included.',
  commonIntro:
    'In older houses and two-family homes, these are what usually prompt a booking:',
  localFaqs: [
    {
      q: 'I own a two-family house in Evanston. Do both water heaters need service?',
      a: 'Yes, each tank collects its own sediment and wears its own anode. We service both in one visit, with a flat rate for the pair approved first. Ohio’s ORC 5321.04 (A)(4) and (A)(6) make working appliances and reasonable hot water your job on the tenant’s side. We service water heaters, not leases.',
    },
    {
      q: 'I rent an apartment over a shop in Evanston. Who books water heater maintenance?',
      a: 'Your landlord or the building manager. Put any problem, like short hot water or a noisy tank, to them in writing. Some buildings share one larger heater across the apartments, and that’s management’s decision. We book with owners and managers, not tenants.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly water heater service for older houses and two-family homes in Evanston',
    band1Heading: 'Signs a Water Heater in Evanston Is Due for Maintenance',
    commonSituations: [
      'A pre-war basement heater whose last flush nobody remembers',
      'Two tanks in a two-family house, both rumbling when the burners fire',
      'A closet heater in an apartment over a shop on Montgomery Road',
      'A house bought recently near Xavier with no paperwork on the heater',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Evanston',
        body: 'In the older basements of Evanston, we test the bottom valve before trusting it, then drain the heater and rinse until the grit stops. Heated water sheds minerals, which settle where the flame or elements must heat through them; the rumble is that layer. The anode, a rod made to corrode ahead of the steel, gets unscrewed, and a spent one earns a quote. We lift the relief valve lever and trace its discharge pipe to the end. Gas: burner, pilot, flue, gas fitting. Electric: elements, thermostats. Shutoff and supply lines on every visit, and the pan on closet units. Each fix waits on you.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Three situations in Evanston make a service worthwhile. One, the tank works and its last flush is a mystery, as in many basements on these narrow lots. Two, you’ve just moved in near Xavier and the sellers left no records. Three, rumbling has started, or you’re a landlord with a tank on each floor of a two-family. Where it’s wasted: a shell already seeping, which needs replacing outright, or rusty water at the hot tap, or a heater at its end. We’ll steer that money toward the new one. Between visits, anyone with a garden hose can drain a bucket. Once yearly is our advice.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Evanston',
        body: 'Most houses in Evanston run a tank, so the visit is the rinse plus an anode inspection. Tankless owners get a descale instead: cleaning solution cycled through the heat exchanger for a while, followed by a cleaned inlet screen. Because gas service is common here, burners and venting take most of the attention; electric heaters get element and thermostat tests. We raise tankless only when a tank is near replacement.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Evanston Book Water Heater Maintenance With Us',
    whyParagraph:
      'A family company since 1993. Technicians hold licenses and insurance and clear background checks, owners and landlords sign off on one flat rate before work, and if the job falls short, you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much is water heater maintenance in Evanston?',
        a: 'One flat figure, approved by you before anyone starts. Three things shape it: tank or tankless, gas or electric, and how hard the heater is to reach. Narrow basement stairs add time compared with a ground-floor utility room. A two-family house gets a single quote covering both tanks.',
      },
      {
        q: 'How often should a water heater be serviced in Evanston?',
        a: 'Yearly works for most houses here. Popping or rumbling between visits is sediment collecting at the bottom, so call sooner rather than waiting for the next service date. A tank that has gone years without a flush may need a second rinse to run clear.',
      },
      {
        q: 'Can I flush a water heater myself?',
        a: 'Yes, partly. Letting a bucket of water out at the drain valve between our visits is fine for a homeowner who’s handy. Valves in houses this old sometimes drip once they’ve moved, so keep a hose cap nearby. Leave gas burner work and relief valve testing to us.',
      },
    ],
  },
};
