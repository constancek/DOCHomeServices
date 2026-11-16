import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'In Reading, most houses went up after the war. The Census Bureau’s median year is 1956, and roughly six in ten were finished before 1960, back when a bedroom got one receptacle or two. Lamps and chargers now hang off daisy-chained strips, and a few boxes still hold ungrounded outlets. With about four in ten homes rented, landlords phone us regularly. Nothing gets quoted before the device, its wiring and the panel are tested; when a flipped breaker is the fix, we say so, and you approve the price first.',
  emergencyParagraph:
    'A jolt from a switch plate, heat at a receptacle, smoke or a scorched smell, a plug fused in place, or a breaker that snaps off again after reset warrant a call. A technician reaches Reading that same day on most, weekends too. Kill that circuit only from a dry panel. Smoke or flame means you leave, then dial 911.',
  commonIntro: 'These are the four outlet calls we take most often in Reading:',
  localFaqs: [
    {
      q: 'What should I do with basement outlets after Mill Creek floods in Reading?',
      a: 'Treat any receptacle, switch or box that went under water as finished, even once it dries, because silt stays inside. Revised FEMA maps, the city says, placed many households in Reading inside the 100-year floodplain. Leave those circuits off until we’ve tested them and replaced what was soaked.',
    },
    {
      q: 'My landlord owns the house I rent in Reading. Who arranges an outlet repair?',
      a: 'Your landlord does, so send the details in writing. Ohio’s ORC 5321.04 (A)(4) puts the duty to keep supplied electrical fixtures safe and working on the owner. A tenant may still press reset on a GFCI or push a tripped breaker back on. We repair the receptacle; the lease is between you and the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Receptacle and switch repair for postwar houses in Reading',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Reading',
    commonSituations: [
      'A back bedroom in a postwar house with a single receptacle behind the dresser',
      'A washer outlet in the basement with no GFCI anywhere on the circuit',
      'A hallway switch plate that turns warm once the light’s been on a while',
      'Rental-unit receptacles so worn a phone charger falls out on its own',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Reading',
        body: 'A GFCI does its work by bookkeeping. Current leaving on one conductor should equal current returning on the other; when the return comes up short, the shortfall may be running through somebody, and the device shuts off quickly. It doesn’t sense moisture. Water just happens to be the most common way current escapes. Code expects GFCIs in bathrooms, kitchens, basements, garages and outside. Lots of houses in Reading still have a 1950s kitchen or a basement laundry from before those rules. USB receptacles are a comfort item, handy on a nightstand or beside the counter where chargers pile up.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Reading',
        body: 'Three quick tests settle a lot of dead-outlet calls in Reading before we ever drive over. First, any GFCI in a bath, by the basement washer, in the garage or out back gets its reset pressed, because a tripped one shuts down plain outlets further along its run. Second, the breaker panel gets a look for one lever pointing the wrong way. Third, the wall switch nearest the door gets flipped, since postwar builders liked to wire a lamp outlet to it. Swapping in a smart switch or USB charging outlet adds convenience and fixes nothing. Warmth, humming, scorching, sparks or a breaker that won’t hold are our department.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Reading',
        body: 'Before a new receptacle goes into a house in Reading, the panel and the wire behind it get tested. A maxed-out panel or old wire that can’t safely be extended goes on paper with its own price, next to the outlet quote, and the call is yours; Home Rewiring and Electrical Panel Replacement say more. Installs follow code, and we take out the permit and book the inspection wherever one is needed.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Reading Choose Us for Switches and Outlets',
    whyParagraph:
      'In Reading, a licensed electrician meters the receptacle, the wiring feeding it and your panel before naming a figure, admits it when a reset or fresh device is the whole job, and grounds every device to code as approved.',
    sharedFaqs: [
      {
        q: 'What drives the price of switch or outlet work in Reading?',
        a: 'We won’t quote until we’ve tested. After that you get one flat rate to approve. The count of devices matters most, then GFCI or USB, then any wiring or panel work required to support them. Landlords with several units can spread a bigger job with financing.',
      },
      {
        q: 'What exactly is a GFCI receptacle measuring?',
        a: 'It measures the gap, if any, between current going out and current coming back. Normally there’s none. A gap means some current is leaking, possibly through a person, so the receptacle cuts off. Moisture causes most of those leaks, but the device responds to the current, never to water.',
      },
      {
        q: 'Why not swap an old receptacle yourself in a house in Reading?',
        a: 'Postwar boxes often hold surprises. There may be no ground, the circuit may already be overloaded, and the new device must match the wiring and meet code. A licensed electrician finds those problems before the plate is screwed back on, not after something warms up.',
      },
    ],
  },
};
