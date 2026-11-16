import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'Census figures count 2,724 of 3,129 occupied homes in the West End as rented, and close to two in five homes were standing by 1939, many of them brick Italianate rowhouses. A rowhouse parlor wired in that era has one or two receptacles, so cords snake along the baseboard and older outlets go loose or lack a ground. Newer buildings call us about GFCIs or an extra kitchen circuit. We trace the fault first, tell the owner if a reset cured it, and set the price before work starts.',
  emergencyParagraph:
    'A tenant in the West End who finds a receptacle hot or browned, a switch smelling of burning, or a melted plug should phone the landlord at once. Flip that breaker only if it’s dry and easy to reach. With smoke or flame, leave the building and dial 911. Landlords get us the same day on most calls, weekends included.',
  commonIntro: 'These four come up most in the West End, in rowhouses and newer buildings alike.',
  localFaqs: [
    {
      q: 'Who books an outlet repair when I rent in the West End?',
      a: 'The landlord or property manager books it, not you. Under ORC 5321.04 (A)(4), an Ohio landlord owes tenants supplied electrical fixtures kept in good and safe working order, so write down which outlet is dead, warm or sparking and send it in. A GFCI or breaker reset is still fine to try. We fix outlets, not leases.',
    },
    {
      q: 'Can a landlord in the West End have outlets upgraded across several units?',
      a: 'Yes, and it’s usually the tidier way to do it. We test each unit’s outlets, circuits and panel, list what needs a new device, a GFCI or more capacity, and give a flat price per unit for the owner to approve. Tenants hear from us before we arrive.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch repair for rowhouses and apartments in the West End',
    band1Heading: 'Common Outlet and Switch Problems We Fix in the West End',
    commonSituations: [
      'A rowhouse bedroom with a single outlet and a cord run along the baseboard',
      'Old outlets loose enough that plugs fall out, some with no ground',
      'A switch by the stairs that flickers the light or feels warm',
      'A kitchen with no GFCI by the sink, or one that won’t reset',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in the West End',
        body: 'The GFCI is the outlet with two buttons on its face, and code wants that protection beside kitchen sinks, in bathrooms, basements and garages, and outside. It keeps measuring current going out and current coming back, and the moment the two disagree, it assumes the gap is passing through somebody and shuts the power off. It can’t sense water; water just causes most of those gaps. In the West End, older kitchens, rowhouse basements and back-yard outlets are where we find it missing. In studios and one-bedroom units, USB outlets by the bed earn their keep.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in the West End',
        body: 'A tenant in the West End can often save a visit before filing a repair request for a dead outlet. Push reset on every GFCI in the unit, since the one in the bathroom or by the kitchen sink may feed a bedroom. If the unit has a breaker panel, look for a handle out of line and set it back once. Flip the wall switches too, because one may run that receptacle. USB ports or a smart switch are comforts, not cures. Heat, buzzing, a scorch mark or sparks, or a breaker that won’t latch, goes to the landlord and then to us.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in the West End',
        body: 'Brick rowhouses in the West End were wired generations ago, and their breaker boxes may have no free spaces or cable too old to carry more, so both get metered before outlets go in. When either falls short, the owner sees Electrical Panel Replacement or Home Rewiring as a separate line under the outlet price and makes the call. Work is to code, and Inspection Bureau, Inc. (IBI) inspects the electrical permit for the city.',
      },
    ],
    whyTitle: 'Why Landlords and Tenants in the West End Choose Us for Switches and Outlets',
    whyParagraph:
      'Landlords in the West End get licensed electricians who track down each fault before quoting, admit when a reset or a single receptacle swap will do, and ground every device to code at the agreed price.',
    sharedFaqs: [
      {
        q: 'What does an owner pay for outlet work in the West End?',
        a: 'After testing, the owner receives one flat figure to approve before anything starts. The number of devices, GFCI or USB versions, and any rowhouse wiring or panel work make up the total. Financing helps with bigger jobs, and overtime never shows up on the bill.',
      },
      {
        q: 'What is a GFCI outlet protecting tenants from in the West End?',
        a: 'Shock is the danger it guards against. The outlet checks that current going out equals current coming back, and when some is missing, possibly flowing through a person, it trips fast. A wet counter or bathroom floor is the usual reason for that missing current, though the GFCI is sensing current, not water.',
      },
      {
        q: 'Can a handyman replace outlets in a rental in the West End?',
        a: 'An outlet in an old rowhouse may sit on a circuit with no ground, brittle wire or a neighbor’s load on it, and code decides what can go there. A licensed electrician works that out and tests every device, which protects both the tenant and the owner.',
      },
    ],
  },
};
