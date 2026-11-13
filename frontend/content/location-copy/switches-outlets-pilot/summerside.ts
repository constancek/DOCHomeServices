import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const summerside: LocationServiceCopy = {
  localParagraph:
    'In Summerside, almost nine in ten homes were built from 1960 through 1999, and the Census median is 1981. Those houses came with grounded receptacles, so we mostly see worn devices, a bath or garage that never got a GFCI, and kitchens short on outlets for the appliances people own now. A bit over a third of homes are rented, many in apartment buildings. Our electricians test the device, the line and the panel, own up when a reset settles it, and quote before starting.',
  emergencyParagraph:
    'Heat, crackling, smoke or a scorched smell from a switch or receptacle, a shock from one, a melted plug and a breaker that flips again after a reset get us out the same day on most calls, weekends included. Switch that circuit off only from a dry spot, touching nothing hot. If there’s smoke, leave, then call 911.',
  commonIntro:
    'Across the 1960s-to-1990s houses and apartment buildings of Summerside, calls usually start with one of these:',
  localFaqs: [
    {
      q: 'Who reviews electrical work for houses in Summerside?',
      a: 'Union Township has no cities inside it, and Summerside is one of its unincorporated communities, so residential code review falls to Clermont County Building Inspection, called Permit Central, and its checklist covers electrical. When your outlet or switch job needs a permit, we apply with the county and set up the inspection.',
    },
    {
      q: 'I rent an apartment in Summerside. Can I book an outlet repair?',
      a: 'Your landlord or the management office has to book it, since they approve repairs to the building. Under Ohio’s ORC 5321.04 (A)(4), they must keep supplied electrical fixtures in good and safe working order. Tenants can reset a tripped GFCI or breaker; anything warm or sparking should be reported straight away. We fix outlets, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Switch and receptacle repair for houses and apartments in Summerside',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Summerside',
    commonSituations: [
      'A 1980s bathroom receptacle with no GFCI, or an old GFCI that no longer trips',
      'A kitchen counter where the toaster, kettle and coffee maker take turns',
      'A garage receptacle that drops out every time the GFCI by the door trips',
      'A light switch that’s loose, unresponsive or warm to the touch',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Summerside',
        body: 'Code requires ground-fault protection by the kitchen counter, in bathrooms, garages and basements, and on outdoor receptacles. Many houses in Summerside were built while those rules were still arriving one room at a time, so the hall bath may have a GFCI while the main bath doesn’t, and older units can wear out. We test each one. Inside, the GFCI balances what leaves on the hot wire against what returns on the neutral, and a shortfall, possibly current crossing a person, makes it open the circuit at once. It reads that leak, never water. USB receptacles fit desks, nightstands and counters.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Summerside',
        body: 'Before booking, do a lap of the house and push the button on each GFCI, in the baths, the garage and on exterior walls, since one that popped can darken receptacles somewhere else. After that, open the panel and look for a breaker off or resting halfway. Builders of this era liked to wire one receptacle per room to the switch by the door for a lamp, so flip that too. A USB port or smart switch is a nicety that repairs nothing. A warm plate, a buzz, a scorch mark, a spark, or a breaker that trips the moment it’s reset is our cue, not yours.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Summerside',
        body: 'We meter the panel and the circuit before any receptacle goes in. A panel with no free space, or a circuit already carrying more than its share, gets mentioned up front, and Electrical Panel Replacement or Home Rewiring is priced as a separate option beside the outlet work. You decide what goes ahead and what waits. Everything is wired and grounded to code, and it’s inspected wherever a permit is required.',
      },
    ],
    whyTitle: 'Why Homeowners and Residents in Summerside Choose Us for Switches and Outlets',
    whyParagraph:
      'Our licensed electricians check the device, the line and the panel first and say straight when a reset or replacement will do. Each one we fit is wired and grounded to code at a price agreed before work.',
    sharedFaqs: [
      {
        q: 'How do you set the price for outlet work in Summerside?',
        a: 'Testing comes before any quote, and the quote is one flat rate for you to approve. More receptacles and switches raise it, GFCI or USB types raise it a little, and wiring or panel work raises it more. Financing is available, and weekend visits never carry overtime.',
      },
      {
        q: 'What does a bathroom GFCI actually detect in Summerside?',
        a: 'It watches for a shortfall. The current sent out to a hair dryer should equal what returns, and when some never comes back, it may be passing through a person, so the GFCI cuts power at once. Water isn’t something it can detect; water is just why current so often strays near a sink or tub.',
      },
      {
        q: 'Can I install an extra outlet myself in Summerside?',
        a: 'We’d rather you didn’t. Adding an outlet means tapping a circuit that may already be loaded, keeping the ground continuous and meeting code for that room, and an apartment adds the landlord’s rules on top. A licensed electrician does all of that and tests the outlet so it’s safe from the start.',
      },
    ],
  },
};
