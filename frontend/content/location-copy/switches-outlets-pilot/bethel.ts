import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'Bethel has two kinds of outlet calls. One is the house from the 1950s or earlier, and Census figures put the median home here at 1958, when a bedroom got one receptacle by the bed and maybe another by the dresser. The other is the small apartment building, since renters slightly outnumber owners in the village. We put a tester on the outlet, trace the circuit and open the panel before quoting, tell you if a reset sorts it out, and fix the price before touching a wire.',
  emergencyParagraph:
    'Stop using an outlet whose plug comes out browned at the prongs or whose plate feels warm, and phone us. A breaker that drops again after one reset is equally pressing. Flip it off only while standing on a dry floor. Should smoke appear, get everyone outside and dial 911. Expect us the same day on most calls, weekends included.',
  commonIntro: 'Between the older streets off Main Street and the apartment buildings, Bethel keeps sending us these four.',
  localFaqs: [
    {
      q: 'My rental in Bethel has a dead outlet. Should I call you or the landlord?',
      a: 'Write to the landlord first. Ohio puts this on the owner, since ORC 5321.04 (A)(4) requires landlords to keep supplied electrical fixtures in good and safe working order. Before you write, push the GFCI reset in the bathroom or kitchen and look for a tripped breaker, because either can bring the outlet back. We fix outlets, not leases.',
    },
    {
      q: 'Is it possible to put more receptacles in a 1950s bedroom in Bethel?',
      a: 'Usually, and it’s one of the better upgrades for a house that age. We see which circuit already serves the room and whether it has spare capacity, cut in boxes on the walls where the bed and desk really sit, then ground each new receptacle and load-test it. Cords stop snaking under the rug.',
    },
  ],
  overrides: {
    ctaLine: 'Receptacle, switch and GFCI repair for houses and rentals in Bethel',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Bethel',
    commonSituations: [
      'A 1950s bedroom where one receptacle feeds the lamp, the clock and a phone charger',
      'An apartment light switch that hums and makes the overhead fixture blink',
      'A rental bathroom sink with an ordinary outlet beside it and no GFCI',
      'A space heater that knocks out the breaker each time the hair dryer starts',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Bethel',
        body: 'Picture two meters inside a GFCI, one on the wire carrying power out and one on the wire bringing it home. As long as they agree, nothing happens. Once they disagree, current is leaking somewhere, and a person’s body is the leak that worries us, so the device opens the circuit in a blink. Wet hands and damp floors are simply how leaks usually begin. Code wants this protection at kitchen counters, in bathrooms, basements and garages, and on outdoor receptacles. In Bethel, older houses predate most of those rules, so we add it room by room. A USB receptacle by a bed saves hunting for a charging brick.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Bethel',
        body: 'Bring a lamp you know works and walk the house before calling. If the lamp stays dark, find the GFCIs, in the bathroom, kitchen, basement, garage and outdoors, and press each reset button, since one tripped unit in Bethel can kill receptacles two rooms away. Then look at the panel for a handle resting between on and off. Then flip the light switches by the doorway, because a lamp outlet may be switched. A USB receptacle or smart switch adds comfort but fixes nothing. A warm plate, a buzz, scorch marks, sparks, or a breaker that trips again straight away means it’s time for us.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Bethel',
        body: 'In Bethel, an extra receptacle draws on a panel and wiring that may date to 1958 or earlier. So before wiring anything new, we check the panel’s open spaces and how the existing runs hold up under a meter. If they fall short, Home Rewiring or Electrical Panel Replacement shows on the estimate as its own figure, and you decide. Every device meets code, and when a permit applies, our office files it and books the inspector.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Bethel Choose Us for Switches and Outlets',
    whyParagraph:
      'Our electricians carry a license and a tester, and use it before quoting. If a reset or one replacement receptacle is honest, that’s the answer. Each device is grounded and wired to code at a price you okayed.',
    sharedFaqs: [
      {
        q: 'What will outlet or switch work run me in Bethel?',
        a: 'There’s no phone guess. After testing, you get one flat rate and approve it before work. The total moves with the count of receptacles and switches, any GFCI or USB models you choose, and whether wiring or the panel behind them needs help. Financing exists, and overtime fees don’t.',
      },
      {
        q: 'How does a GFCI keep someone in Bethel from getting shocked?',
        a: 'It weighs outgoing current against returning current, nonstop. A gap between them says some electricity has wandered off, perhaps through a hand on a faulty toaster, and the GFCI trips before that does real harm. Water doesn’t register with it. Water only makes that wandering likelier.',
      },
      {
        q: 'Why is replacing an outlet a job for a licensed electrician in Bethel?',
        a: 'The plastic device is small and simple. What it’s connected to is not, and in a village where half the homes are pre-1960, that can mean no ground wire, a shared circuit or worn insulation. A licensed electrician finds those, installs to code and tests the result.',
      },
    ],
  },
};
