import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const riverside: LocationServiceCopy = {
  localParagraph:
    'Riverside is a riverfront strip of apartment buildings and older houses along River Road. Census counts give a median build of 1971, yet about a quarter of the homes date from 1939 or before, wired back when a room needed a lamp and a radio. Roughly six in ten households rent, many in buildings of ten or more units, so owners and managers schedule most of our visits. We test the receptacle, its circuit and the panel, say plainly if a reset did it, and settle the price up front.',
  emergencyParagraph:
    'Down on River Road or up the hill, a scorched, smoking or hot receptacle, a switch smelling of burning, a melted plug, any shock, or a breaker that won’t hold after a reset should be seen that day, and most are, weekends included. Throw the breaker only if it’s dry and safe. Smoke or flame means calling 911 from outside.',
  commonIntro: 'Here are the four calls we get most from buildings and houses in Riverside:',
  localFaqs: [
    {
      q: 'Whose job is fixing a dead outlet in an apartment in Riverside?',
      a: 'It belongs to the landlord or the building manager, so report it in writing. Under ORC 5321.04 (A)(4), electrical fixtures an Ohio landlord supplies have to be kept safe and working, and arranging that falls to the owner. Tenants may still reset a GFCI or a tripped breaker. We handle the wiring, not the lease.',
    },
    {
      q: 'Can outlets that sat under Ohio River water in Riverside be saved?',
      a: 'They can’t. At the river’s top flood stages, the National Weather Service expects most land between Route 50 and the river below downtown to go under. A receptacle, switch or box that was submerged keeps silt and damp inside, so we replace it and test the circuit before power goes back on.',
    },
  ],
  overrides: {
    ctaLine: 'Switch and receptacle repair for apartments and houses in Riverside',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Riverside',
    commonSituations: [
      'An apartment kitchen where the microwave and toaster take down one breaker',
      'An older building’s bathroom receptacle that has never had GFCI protection',
      'A stairwell switch that flickers the light or does nothing at all',
      'Receptacles in a pre-war house along River Road that won’t grip a plug',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Riverside',
        body: 'Every GFCI tallies current leaving for the appliance and current coming back from it. A short tally means some current is going to ground another way, perhaps through a tenant’s hand, and the receptacle trips at once. People call it a water sensor because damp causes most leaks, but water itself isn’t what it detects. Code requires GFCIs in kitchens, basements, bathrooms, garages and outdoors. Around Riverside, we find them missing from older bathrooms, basement laundries and outdoor receptacles facing the river. In apartments, a USB receptacle by the bed or counter saves a tenant a drawer full of adapters.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Riverside',
        body: 'Before calling about a dead receptacle in Riverside, a tenant can try three things. Find any GFCI in the bath, the basement, a garage or outdoors and press reset, because one trip can shut off outlets elsewhere in the unit. If your panel is reachable, look for a tripped breaker. Then flip the wall switches, as some outlets are switched for lamps. A USB receptacle or a smart switch is an upgrade, not a fix. Warmth, buzzing, scorch marks or sparks call for an electrician, and so does a breaker that pops again straight after a reset.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Riverside',
        body: 'For any building in Riverside, the panel and the feeding wiring get tested before new receptacles go in. When capacity is short or the wiring can’t be extended safely, the owner hears it straight, with that work priced on the same quote; Electrical Panel Replacement and Home Rewiring explain it. The owner picks. Work meets code, and Inspection Bureau, Inc. (IBI), the city’s electrical inspector, checks it wherever a permit is required.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Riverside Choose Us for Switches and Outlets',
    whyParagraph:
      'Licensed electricians test each receptacle, its circuit and the panel first, tell owners plainly when a reset or a single device will do, and wire and ground all of it to code at the price agreed beforehand.',
    sharedFaqs: [
      {
        q: 'How do you price outlet work for an apartment building in Riverside?',
        a: 'We test, then the owner approves one flat rate before work begins. Number of devices comes first, then whether they’re GFCI or USB, then any circuit or panel work needed to carry the load. Financing is available for owners tackling several units.',
      },
      {
        q: 'Why would a GFCI trip when everything around it is dry?',
        a: 'Because it watches current, not water. It compares what flows out with what flows back, and any difference means current is escaping, possibly through a person. A frayed appliance cord or moisture inside a box can create that difference without a drop on the floor.',
      },
      {
        q: 'Can a tenant or owner change a receptacle without an electrician?',
        a: 'We’d advise against it. A receptacle needs the right ground, tight connections and the protection code asks for in that room, and in an apartment building one circuit can serve more than one space. A licensed electrician confirms all of that before anyone plugs back in.',
      },
    ],
  },
};
