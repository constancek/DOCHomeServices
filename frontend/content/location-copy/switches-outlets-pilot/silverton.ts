import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const silverton: LocationServiceCopy = {
  localParagraph:
    'Silverton’s narrow lots hold postwar houses next to small apartment buildings. The median home was finished in 1959, per Census Bureau figures, and roughly two of every five were put up across the 1940s and 1950s, when a room needed a lamp and a radio. Renters fill just under six in ten households, and nearly half of all homes share a building with two or more neighbors. Visits begin by testing the outlet, circuit and panel; a reset gets called a reset, and the price is set up front.',
  emergencyParagraph:
    'Heat or scorching at a receptacle, sparks or smoke from a switch, a burnt smell, a melted plug, a shock, or a breaker that flips off again once reset are urgent. An electrician comes the same day for most, weekends included. Cut that circuit only with dry hands. If there’s smoke or fire, everyone goes outside before anyone calls 911.',
  commonIntro: 'From fourplexes to single houses, these are the four we hear most in Silverton:',
  localFaqs: [
    {
      q: 'I rent a unit in a fourplex in Silverton. Can I book an outlet repair?',
      a: 'A tenant’s best move is a written note to the landlord or manager rather than a booking. Under Ohio’s ORC 5321.04 (A)(4), the electrical fixtures a landlord supplies must be kept safe and working, so the landlord arranges our visit. In the meantime, resetting a GFCI or a tripped breaker is fine. We fix outlets, not leases.',
    },
    {
      q: 'What makes a light flicker when I flip a switch in Silverton?',
      a: 'Usually it’s a worn switch or a loose connection at the switch or the fixture, which turns up often in 1950s houses after decades of use. That loose spot can heat up, so don’t ignore it. We open the box, replace or tighten what’s failing and test the circuit.',
    },
  ],
  overrides: {
    ctaLine: 'Receptacle and switch repair for postwar houses and rentals in Silverton',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Silverton',
    commonSituations: [
      'A 1950s living room switch that makes the lights flicker when it’s flipped',
      'A fourplex kitchen with counter receptacles that have no GFCI protection',
      'A bedroom with one outlet and a chain of strips under the bed',
      'A breaker that trips each time a vacuum and a window air conditioner run together',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Silverton',
        body: 'The job of a GFCI is to notice missing current. It meters what’s sent out to the toaster or hair dryer and what returns, and if any fails to come home, that current may be running through a person, so it trips and cuts power quickly. It isn’t a water detector, even if water starts most of those leaks. Code requires GFCIs in bathrooms, garages, kitchens, basements and outdoors. In Silverton, postwar kitchens and baths and the basements under them often predate those rules. In apartments, USB receptacles beside the bed or on the kitchen wall are a small upgrade tenants notice.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Silverton',
        body: 'Say the kitchen counter outlet quits in a fourplex in Silverton. The likeliest culprit is a GFCI elsewhere in the unit, maybe in the bath, the basement, a garage or near the back door, which tripped and took the counter with it, so press its button first. Next, find the panel and look for a lever stuck halfway. Then try the switch by the doorway, because postwar living rooms often put a lamp outlet on it. Fitting a smart switch or a USB charging outlet is about convenience, never about faults. Heat, buzzing, scorch marks, sparks, or a breaker that jumps again right after reset are where we come in.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Silverton',
        body: 'Before an extra receptacle goes into a house or apartment in Silverton, we check what the panel and the wiring can bear. If the panel lacks room or older wire shouldn’t take more load, we spell that out with a price next to the outlets, and the owner chooses; Electrical Panel Replacement and Home Rewiring cover that work. Each device meets code, and wherever a permit is needed, we file it and schedule the inspector.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Silverton Choose Us for Switches and Outlets',
    whyParagraph:
      'For every outlet call in Silverton, a licensed electrician starts with a meter on the device, the wiring and the panel. You’re told if a reset or new device will do, and each device is grounded to code as signed.',
    sharedFaqs: [
      {
        q: 'How do you price switch and outlet repairs in Silverton?',
        a: 'After testing, the owner sees a single flat rate and signs off before work. Device count leads, followed by GFCI or USB and any wiring or panel work the new load requires. Landlords outfitting several units in one building can finance it.',
      },
      {
        q: 'What is a GFCI outlet checking for?',
        a: 'It checks for current that goes out and doesn’t come back. The outlet compares the two continuously, and a gap means current may be flowing through a person, so it cuts the power fast. It doesn’t sense water directly; water is just the usual way current escapes.',
      },
      {
        q: 'Should a landlord in Silverton have an electrician swap outlets between tenants?',
        a: 'We’d say yes. A postwar outlet may sit on an ungrounded or overloaded circuit, and kitchens and baths need GFCI protection under code. Testing the circuit, not just changing the device, is what makes the unit safe for the next tenant.',
      },
    ],
  },
};
