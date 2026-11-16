import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'Around Mount Lookout Square, Census figures show about half the houses were built in 1939 or earlier, and most are owner-occupied. Wiring from then was planned for a lamp and a radio per room, so a home office or a remodeled kitchen soon runs short of places to plug in. Some rooms keep ungrounded two-slot receptacles, and many basements still lack GFCI protection. We meter the outlet, check the circuit and the panel, tell you if a reset was all it needed, and agree a price before work.',
  emergencyParagraph:
    'If a receptacle in Mount Lookout is hot or browned, a switch sparks, or someone takes a shock, call us today. Basements that took water in the July 2026 flooding need outlets tested before use. Turn the circuit off only if you can stay dry. If there’s smoke, get out and call 911. Most calls are same day, weekends included.',
  commonIntro: 'Owners around the Square and along Delta Avenue call us for these four more than anything else.',
  localFaqs: [
    {
      q: 'Can you add outlets for a home office in an older house in Mount Lookout?',
      a: 'Yes. First we find out what that bedroom circuit already feeds, because a computer, two screens and a printer can overload a circuit wired in the 1930s. Then we extend it or run a new one, depending on what the panel and the old wiring allow. You approve the price before a wall is opened.',
    },
    {
      q: 'Are basement outlets safe to use after the July 2026 flooding in Mount Lookout?',
      a: 'Not until someone tests them. Water gets into the device and the box, and corrosion can start even where the plate looks clean. Keep anything that was under water switched off at the panel. We test each receptacle and the circuit, replace damaged ones, and fit GFCI protection, which code expects in basements.',
    },
  ],
  overrides: {
    ctaLine: 'Switch and receptacle upgrades for older houses in Mount Lookout',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Mount Lookout',
    commonSituations: [
      'A pre-war bedroom turned home office, powered by one receptacle and a cord',
      'Basement outlets by the washer and sump pump with no GFCI',
      'A kitchen remodel that left the counters short of receptacles',
      'A dimmer that hums or warms up, or lights that flicker when it’s touched',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Mount Lookout',
        body: 'Plenty of houses near the Square were finished decades before GFCI receptacles existed, and the kitchens, baths and basements in them show it. Code now asks for GFCI protection in kitchens, bathrooms, garages, basements and outdoors. The device reads two currents, what leaves and what comes back. A short return means current is escaping, sometimes through a person, and the GFCI opens the circuit almost instantly. It has no water sensor; water simply causes most of those leaks. USB receptacles earn their place in Mount Lookout at the kitchen desk, the nightstand or a home office, where chargers pile up.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Mount Lookout',
        body: 'Plenty of dead receptacles in this neighborhood are really a GFCI that tripped in another room, on a bathroom wall, in the basement, the garage or out on the porch. Press each reset. Then find the breaker whose handle sits out of line, and push it hard to off, then on. The switch beside the door may control the receptacle, so try it. Swapping in a USB receptacle or smart switch is an upgrade, not a repair. If you feel warmth, hear a buzz, see scorching or sparks, or the breaker trips again at once, leave it to us.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Mount Lookout',
        body: 'A kitchen remodel in Mount Lookout can ask more of an older panel than it was built to give. Panel and wiring are metered before we add receptacles, and if either can’t keep up, Electrical Panel Replacement or Home Rewiring is quoted on its own line so you can weigh it against the outlet job. Code covers every device. Inspection Bureau, Inc. (IBI) handles city electrical permits and inspections, and we file where needed.',
      },
    ],
    whyTitle: 'Why Homeowners in Mount Lookout Choose Us for Switches and Outlets',
    whyParagraph:
      'Licensed electricians meter your receptacle, its circuit and the panel before we name a figure. If the fix is a reset or one new device, we tell you so, and everything we install is grounded, wired and tested to code.',
    sharedFaqs: [
      {
        q: 'What does switch and outlet work cost in Mount Lookout?',
        a: 'You get a flat price after testing, and you approve it before anyone starts. More devices, GFCI or USB versions, and circuit or panel work raise it, while a single worn receptacle sits at the low end. Remodel-sized jobs can be financed.',
      },
      {
        q: 'How does a GFCI outlet stop a shock?',
        a: 'It reads two currents, the one heading out and the one returning. A gap between them means current is escaping, possibly through you, and the GFCI shuts off fast. Because it reacts to the leak and not to moisture, a faulty appliance can trip one in a bone-dry room.',
      },
      {
        q: 'Should an electrician add outlets to my house in Mount Lookout?',
        a: 'For anything past changing a cover plate, yes. New receptacles need the right circuit, a real ground and code-correct connections, and in a 1930s house the old wiring you’d tap into can be the weak link. A licensed electrician tests all of it before anything is added.',
      },
    ],
  },
};
