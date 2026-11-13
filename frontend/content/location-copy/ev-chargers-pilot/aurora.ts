import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Aurora was platted in 1819, and Census figures count nearly two in five homes as pre-1940, with a median of 1952. About one home in five sits in a two- to four-unit building, which brings landlords into many charger decisions. The oldest river-town houses may carry a small original service, while the post-war ones often have every panel slot taken. We open the panel and work the load out first, say if Level 1 suits you, and price it before wiring.',
  emergencyParagraph:
    'Any charger, outlet or panel the Ohio touched in Aurora stays off until it’s been checked. A hot plug, a burning smell or a breaker that drops each session calls for the same caution. Switch the circuit off only if you’re dry, and for smoke or fire, call 911 from outside. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Between the downtown houses, the small rental buildings and the post-war streets of this Dearborn County city, these four reasons bring most of the calls:',
  localFaqs: [
    {
      q: 'Can I mount a charger outside a house in the downtown historic district in Aurora?',
      a: 'Possibly, but ask first. Inside the local Aurora Downtown Historic District, most exterior work beyond painting and routine upkeep needs a Certificate of Appropriateness from the Aurora Historic Preservation Commission, and an outside charger may qualify. We check with the city before picking a spot, and an inside wall sidesteps the issue.',
    },
    {
      q: 'What are my options when tenants want to charge EVs at my rental in Aurora?',
      a: 'As the owner, you approve the project and book it. The panel feeding each unit and the building’s service decide how many chargers fit, and load management can let several share what’s there. Tenants need your written approval before anything goes in. We install chargers, not lease terms.',
    },
  ],
  overrides: {
    ctaLine: 'Home charging stations for houses and small rentals in Aurora',
    band1Heading: 'When a Home in Aurora Needs an EV Charger',
    commonSituations: [
      'An owner of a two- to four-unit building fielding tenant requests for charging',
      'A post-war panel in a river-town house with every breaker space spoken for',
      'A daily commute that outpaces what a 120-volt cord can put back overnight',
      'A household that would rather charge on cheap overnight power than drive to a public plug',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Aurora',
        body: 'At home in Aurora, charging becomes something that happens while you sleep. Level 2 fills the battery a great deal faster than a household socket, so one evening plugged in covers a lot more driving and the car is out of commission for less time. You leave each morning without detouring to a public charger or queuing behind another car. Home charging usually comes in cheaper than public charging, and many utilities price overnight power lower, so check with yours. We size the breaker and wire and ground the circuit properly, which keeps it from overheating. For owners, a charger can also win over the next buyer or tenant.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Aurora',
        body: 'Some owners in this old river city do not need us at all. A car that mostly stays local and parks beside a reliable outlet may be fine on its Level 1 cord at 120 volts, even though it recovers only a few miles each hour, and we will say so. Daily commuting, heavy mileage or a pair of EVs usually means Level 2 on a 240-volt circuit with nothing else on it. See whether the cord’s outlet shares its breaker, and never feed the cord from an extension cord or from an outlet that’s worn, loose or warm. On-street parking makes a home charger impractical.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Aurora',
        body: 'Two houses on the same block in Aurora can wire very differently, so the load calculation rules. If the panel has headroom, the charger is wired alone, typically on a 40 to 60 amp breaker depending on the unit. If it does not, we price load management beside a panel or service upgrade. The Dearborn County Building Department issues building permits here, and we handle what the job needs, inspection included.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Aurora Choose Us for EV Charger Installation',
    whyParagraph:
      'Old river-town panels get a careful look from our licensed electricians, who total the load before quoting. You hear without spin if it needs an upgrade or load management, and the to-code install keeps the price you approved.',
    sharedFaqs: [
      {
        q: 'How is the cost of a home charger worked out in Aurora?',
        a: 'We inspect the panel, then quote a flat rate that does not move. It follows the charger you choose, the distance the wire travels between panel and parking spot, and any panel work the house needs. Older houses here sometimes need the most panel work. You approve first, and financing is available.',
      },
      {
        q: 'Is a charger installation usually finished the same day in Aurora?',
        a: 'Usually, yes. Most installs wrap up in several hours. A panel upgrade, or threading wire through an older house, pushes that out, and we share the timeline before starting, including when the power will be off.',
      },
      {
        q: 'Is it okay to install a home EV charger myself in Aurora?',
        a: 'We advise against it. Correct circuit sizing, a load calculation on the panel, and Dearborn County’s permit and inspection all call for a licensed electrician. On wiring that may date from before 1940, a wrong guess can end in a scorched connection or a failed inspection.',
      },
    ],
  },
};
