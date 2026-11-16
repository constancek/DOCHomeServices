import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfax: LocationServiceCopy = {
  localParagraph:
    'Plenty of houses in Fairfax still run a living room off a single receptacle. By Census figures, nearly half the village was standing before 1940 and the middle house dates to 1942, back when an electrician might give a bedroom one plug beside the bed. Now those rooms run on extension cords, and a few still have two-slot ungrounded receptacles. Our electrician checks the device, its circuit and your breaker box before quoting, admits it when a tripped GFCI was the whole story, and locks the price in before work.',
  emergencyParagraph:
    'A hot or crackling receptacle, one that smokes or smells burnt, a jolt off a switch, a fused plug, or a breaker that snaps off again is urgent in Fairfax. Flip that breaker off only if you’re standing dry. With flames or smoke, leave and phone 911. Most of these get an electrician out the same day, weekends too.',
  commonIntro: 'Four jobs fill most of our calendar in Fairfax:',
  localFaqs: [
    {
      q: 'Is a flooded basement outlet safe to use again in Fairfax?',
      a: 'Treat it as damaged until it’s tested. Muddy water leaves grit and rust inside the box, and a receptacle that dried out can still overheat weeks later. Keep that breaker off if you can get to it without wading, and we’ll check the run and fit new GFCI-protected devices before anything is plugged in.',
    },
    {
      q: 'Why are there so few outlets in my 1940s house in Fairfax?',
      a: 'An electrician wiring a bedroom around 1940 expected a lamp and a clock, so one receptacle per wall was generous. We can put new receptacles on an existing run or a fresh circuit after testing what’s behind the plaster, which gets the extension cords off the rugs.',
    },
  ],
  overrides: {
    ctaLine: 'Receptacle, switch and GFCI repair for older houses in Fairfax',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Fairfax',
    commonSituations: [
      'A basement receptacle that sat under Little Duck Creek’s floodwater and now trips or stays dead',
      'A 1940s living room fed by one receptacle and a daisy chain of strips',
      'A toggle by the back door that hums, or makes the hall light stutter',
      'Two-slot receptacles so worn that a lamp plug droops out on its own',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Fairfax',
        body: 'Think of a GFCI as a bookkeeper for current. Every bit that leaves on the hot side should return on the neutral, and when the books don’t balance, the difference may have gone through a person, so it shuts that receptacle down quickly. Water isn’t what it detects; wet hands and floors are simply how that imbalance usually starts. Code asks for the protection outdoors, in garages, at kitchen counters, in bathrooms and in basements, and in a 1940s house in Fairfax, the basement stairs and back stoop are where it’s most often missing. USB receptacles earn their spot on a nightstand or by the coffee maker.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Fairfax',
        body: 'Plenty of dead receptacles in Fairfax need nothing from us. Go hunting for a GFCI first, in a bathroom, down the basement or on an exterior wall, because one tripped unit can black out plugs two rooms away; press its reset until it clicks. Next, open the breaker box and look for a handle that isn’t lined up with its neighbors. Then flick the wall switches, since older rooms often wire a switch to half a receptacle. Fitting USB ports or a smart switch is a comfort, never a cure. Heat, a hum, black marks, sparks, or a breaker that won’t hold after resetting are jobs for a licensed electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Fairfax',
        body: 'Before a receptacle is added in an older house in Fairfax, we load-test the circuit and look over the breaker box. Sometimes the box is out of spaces, or the wires behind the plaster shouldn’t be asked for more. When that happens, Home Rewiring or Electrical Panel Replacement goes on the quote as its own line, and the decision is yours. Everything is done to code, and we take care of any permit and inspection the job calls for.',
      },
    ],
    whyTitle: 'Why Homeowners in Fairfax Choose Us for Switches and Outlets',
    whyParagraph:
      'A licensed electrician meters the receptacle, traces its circuit back to the breaker box, and tells you straight when a reset or one fresh device settles it. Anything bigger is grounded, wired to code and priced before we start.',
    sharedFaqs: [
      {
        q: 'What decides the price of an outlet or switch job in Fairfax?',
        a: 'After testing, we write one flat figure and wait for your yes before touching a screw. The count of receptacles and switches, any GFCI or USB models you pick, and whether the circuit or breaker box needs upgrading move that figure. Financing exists for the larger jobs.',
      },
      {
        q: 'How can a GFCI tell that I’m getting a shock?',
        a: 'It can’t feel you, but it can do arithmetic. Current out on the hot wire should equal current back on the neutral, and a shortfall means some is escaping, maybe through your body. The GFCI then opens the circuit quickly. Water doesn’t trip it; the escaping current does.',
      },
      {
        q: 'Is swapping a receptacle in an old house a job for me or an electrician?',
        a: 'For an electrician. The hardware store part is simple, but in houses from the 1940s the box may hold brittle insulation, no ground and some past owner’s splices. A licensed electrician sorts out the grounding, the circuit and the code before closing it up, so nothing behind the plate can shock anyone.',
      },
    ],
  },
};
