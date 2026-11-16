import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'In CUF, the outlet trouble we see starts with age and crowding. Census figures date about four in ten units to before 1940, when a bedroom might get one receptacle for a lamp. Put laptops, a mini fridge and a game console in that room and strips end up stacked on strips, sometimes off an ungrounded two-slot outlet. More than eight in ten homes here are rented. We meter the outlet, the circuit and the panel, say when a reset or breaker cured it, and quote before work.',
  emergencyParagraph:
    'In CUF, stop using any receptacle that pops, smokes or smells of hot plastic, then message the landlord. A jolt from a light switch or a breaker that refuses to stay up belongs in that message. Flip the breaker off with dry hands. With smoke, get out and dial 911. Owners can usually book us that same day, weekends too.',
  commonIntro: 'Owners and tenants in CUF tend to call about one of these four:',
  localFaqs: [
    {
      q: 'I rent an apartment in CUF. Can I hire you to fix a dead outlet?',
      a: 'Ask the landlord or the building manager; they schedule it, not the tenant. Under ORC 5321.04 (A)(4), an Ohio landlord has to keep the electrical fixtures they supplied in good and safe working order. Before you write, push the GFCI button in the bathroom or kitchen and look at the breaker, which tenants may do. We fix outlets, not leases.',
    },
    {
      q: 'Do older houses in CUF still have two-prong outlets?',
      a: 'Some do, mostly in the pre-1940 blocks of Fairview and Clifton Heights. A two-prong outlet has no ground, so swapping in a three-prong one without fixing that is a code problem, not an upgrade. We test what’s behind it and give the landlord or owner the options, including GFCI protection where code allows it.',
    },
  ],
  overrides: {
    ctaLine: 'Receptacle and switch fixes for rentals and old houses in CUF',
    band1Heading: 'Common Outlet and Switch Problems We Fix in CUF',
    commonSituations: [
      'Strips plugged into strips in a bedroom with one outlet',
      'Two-slot receptacles in a Fairview house that a three-prong plug won’t fit',
      'A worn hallway outlet that won’t hold a plug',
      'A bedroom breaker that gives up each January when the space heater starts',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in CUF',
        body: 'In the older houses and walk-ups in CUF, the kitchen and bath can predate GFCI outlets entirely. A GFCI measures what flows out to a device and what returns. If the two stop matching, current is escaping, and a person can be the path, so it shuts the outlet off quickly. Water doesn’t trip it directly; water is simply how that escape usually starts. Code wants this protection in bathrooms, kitchens, basements, garages and on outdoor receptacles. For a landlord, USB outlets by the beds and desks cut down on the chargers and cube adapters that wear outlets loose.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in CUF',
        body: 'Tenants in CUF can rule out the easy causes without anyone visiting. One tripped GFCI near a tub or sink can cut power to receptacles in the next room, so push its reset button. Walk to the breaker box and look for one handle out of line with the rest. Older rooms sometimes put a receptacle on the switch by the door, so flick that. Getting power back that way means no repair was needed. A USB receptacle or a smart switch is a nicety, nothing more. Warmth, humming, brown marks or sparks, or a breaker that won’t latch, go to the landlord, who calls a licensed electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in CUF',
        body: 'Old buildings in CUF may lack spare capacity, so before an owner adds receptacles we meter the panel and trace the existing cable. A panel with no free slots or cable too old to carry more gets written up as Electrical Panel Replacement or Home Rewiring on the same estimate, and the owner chooses. Work meets code. Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits for the city, and when one applies, our office files it.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in CUF Choose Us for Switches and Outlets',
    whyParagraph:
      'Before any owner sees a price, our licensed electrician meters the receptacle, its circuit and the panel. A reset button or one fresh device gets named honestly when that’s all it takes. Each device we fit is grounded and code-compliant.',
    sharedFaqs: [
      {
        q: 'What does outlet or switch work cost for a rental in CUF?',
        a: 'Landlords get one flat number after we’ve metered everything, and approve it before we lift a faceplate. Device count drives it, then GFCI or USB units, then any panel or cable work the test uncovers. Owners updating several apartments in one go can spread the cost with financing.',
      },
      {
        q: 'Why did the bathroom outlet cut out in my apartment in CUF?',
        a: 'It’s probably a GFCI doing its job. It sums the current leaving and the current returning, and if part goes missing, perhaps through a wet hand, it kills power quickly. It doesn’t react to water, only to the leak. Push its reset; if it trips again at once, report it.',
      },
      {
        q: 'Why shouldn’t a tenant or owner swap an outlet themselves?',
        a: 'The device is the easy part. The risk sits in the circuit, such as an ungrounded box in an old building, the wrong wire for the load, or a shared neutral nobody labeled. A licensed electrician tests all of it and installs to code, which protects the building and everyone in it.',
      },
    ],
  },
};
