import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestPark: LocationServiceCopy = {
  localParagraph:
    'Forest Park’s first houses went up in 1956, and the city grew fast; Census figures date most of it to the 1960s and 70s, with 1969 as the median. Builders then pictured one TV and a hi-fi in the family room, and plenty of those baths and garages never got GFCIs. Close to half of households rent, so landlords book plenty of our work. A meter goes on the device, the circuit and the panel first, you hear if a reset did it, and the price is set up front.',
  emergencyParagraph:
    'A switch that hums in Forest Park can wait. One that’s hot, browned, throwing sparks or smoking needs us the same day, weekends included, and so does a tingle from a cover plate, a melted plug or a breaker that won’t stay pushed back. Stand somewhere dry before shutting that circuit off. With flames or smoke, leave and ring 911.',
  commonIntro: 'In Forest Park, four calls come up again and again:',
  localFaqs: [
    {
      q: 'Who should book the repair for a sparking outlet in a rental in Forest Park?',
      a: 'The owner or the property manager should. Under Ohio’s ORC 5321.04 (A)(4), a landlord has to keep the electrical fixtures that came with the unit in good and safe working order. Report a receptacle that’s dead, warm or sparking, and they call us. Tenants are still free to reset a tripped GFCI or breaker. We fix outlets, not leases.',
    },
    {
      q: 'Why does a light switch buzz in my 1960s house in Forest Park?',
      a: 'It’s usually a loose terminal, a worn-out switch or a dimmer that doesn’t match the bulbs. Loose terminals run warm, so a warm plate makes it more urgent. We open the box, tighten or replace what’s failing, and make sure the switch sits on the correct circuit.',
    },
  ],
  overrides: {
    ctaLine: 'Switch and receptacle repair for houses and rentals in Forest Park',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Forest Park',
    commonSituations: [
      'A bedroom switch in a 1960s ranch that buzzes and makes the ceiling light flutter',
      'A split-level bathroom from the 70s with a plain receptacle by the sink',
      'A family room where one strip feeds another behind the TV stand',
      'An apartment receptacle with a brown scorch mark around one slot',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Forest Park',
        body: 'In Forest Park, most GFCI requests come from 60s and 70s kitchens and baths that were never given one. Each GFCI keeps a running tally of current flowing out and current flowing back. When the tally slips, current is escaping, sometimes through a person, so the receptacle shuts off in a hurry. It’s blind to water itself; water is just the commonest cause of that escape. Code lists outdoor spots, garages, basements, bathrooms and kitchen counters for this protection. A USB receptacle suits the kitchen counter or a kid’s room where tablets charge overnight.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Forest Park',
        body: 'Some dead receptacles in Forest Park need only a finger. Go round to every GFCI, beginning with the bathrooms, garage, basement and outside walls, and push its reset hard; one tripped unit can cut power to a receptacle three rooms over. Scan the panel for a breaker sitting off or stuck halfway. Then work the wall switches, since plenty of 1960s family rooms have a switch feeding a lamp receptacle instead of a ceiling fixture. If power comes back, you owe nothing. USB ports or a smart switch add handiness, not a repair. Heat, a buzz, scorching, sparks, or a breaker that won’t stay reset need a licensed electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Forest Park',
        body: 'A panel from 1969 may have no empty slots left, and the original runs may already be working hard. Both get tested before any new receptacle is wired. If either can’t take more, the quote shows Electrical Panel Replacement or Home Rewiring beside the receptacle work, and you decide. All of it meets code. In Forest Park, electrical permits go to Inspection Bureau, Inc. (IBI) for review and inspection, and we pull one wherever it’s required.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Forest Park Choose Us for Switches and Outlets',
    whyParagraph:
      'Every visit puts a licensed electrician’s tester on the receptacle, circuit and panel. Sometimes a reset or one replacement is all it needs, and we’ll say so. Owners approve a flat price before anything is wired and grounded to code.',
    sharedFaqs: [
      {
        q: 'What goes into the price of switch and outlet work in Forest Park?',
        a: 'We quote a single flat rate once the tester’s been round the circuit, and nothing proceeds until you approve it. Receptacle and switch count, GFCI or USB choices, and any wiring or panel work set the figure. Owners and landlords can both finance it.',
      },
      {
        q: 'Does a GFCI outlet sense water?',
        a: 'No, and that surprises people. It senses current that leaves and never returns, which is what happens when current passes through a person instead of back along the circuit. Then it cuts power fast. Water just makes that kind of leak far more likely, which is why code puts GFCIs near sinks and outdoors.',
      },
      {
        q: 'Why not just replace a worn outlet myself?',
        a: 'Because the work you can’t see is the hard part. A licensed electrician checks that the receptacle is grounded, wired to the right terminals and on a circuit that can carry the load, all to code. A reversed hot and neutral can power a lamp fine and still shock someone.',
      },
    ],
  },
};
