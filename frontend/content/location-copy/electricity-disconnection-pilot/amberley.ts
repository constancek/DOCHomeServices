import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const amberley: LocationServiceCopy = {
  localParagraph:
    'In Amberley, most calls start with half the lights dead or a notice that the utility won’t restore service, and both end the same way, with a licensed electrician fixing the homeowner’s equipment and, typically, an inspector approving it. Census figures put the median home in the village at 1959, and nearly every one is a detached, owner-occupied house, so an early panel, grounding that misses today’s code or a tired meter socket gives the inspector a long checklist. We name the fault and quote a fixed price before starting.',
  emergencyParagraph:
    'Lose the service in Amberley and the blower stops, the condenser sits idle and nothing empties the sump pit, so costs climb daily. If the meter box pulls free of the wall, keep the family back. Report downed wires to 911 ahead of the utility. Most calls get a visit the same day, weekends included.',
  commonIntro:
    'Mid-century ranches and split-levels fill the village, and in Amberley a dead or half-dead service tends to trace to one of these.',
  localFaqs: [
    {
      q: 'In Amberley, why would some rooms lose power while others still work?',
      a: 'Usually one of the two hot legs feeding the house has dropped, up where the overhead wires connect or at a loose lug in the panel. Get it seen quickly, since a house limping along on a single leg sends odd voltages through anything with a motor or circuit board, the furnace and the refrigerator included.',
    },
    {
      q: 'Will a 1950s panel in Amberley need replacing before the power comes back?',
      a: 'Not always. We measure the panel, grounding and bonding against current code, since the inspector does the same. A repair with corrected grounding passes in some houses; in others the panel is too far gone, and you see that price next to the repair before choosing.',
    },
  ],
  overrides: {
    ctaLine: 'Getting the lights back on in the ranch houses and split-levels of Amberley',
    band1Heading: 'Common Causes of Electricity Disconnection in Amberley',
    commonSituations: [
      'A 1950s meter socket that has carried load for decades and now shows heat damage',
      'The kitchen working while the bedrooms are dead, from a hot leg dropping inside an original panel',
      'A falling limb after a storm that bent the mast on the part of the service the homeowner owns',
      'A house closed up through probate until the utility wanted the wiring looked over first',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Amberley',
        body: 'With the house already dark, our electrician sizes up the service in order, roof bracket and riser, cable, meter enclosure, breakers and ground clamp, because a house of this age in Amberley may hide more than one fault. Those findings define the job, whether a mast, a meter base or a panel, and the permit that goes with it. Grounding and bonding come up to current code while we’re in there. The inspection request goes in when the job is scheduled. Once the meter is back, circuits go live one by one, and a written list of anything worth watching stays with you.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Amberley',
        body: 'In Amberley, a red tag usually follows an unsafe panel, grounding that’s missing, conductors left exposed, or electrical work that failed inspection or never had a permit. It is a plain instruction not to energise, and it outlasts a cleanup of the visible hazard. What removes it is a licensed electrician correcting the cause and an inspector signing off on the repair. Keep any tag or note the utility left, as it typically states the reason. Don’t touch the socket if the meter is locked or missing. Interfering with utility metering is a criminal offence in Ohio, and it re-energises equipment someone has already found unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Amberley',
        body: 'A ranch in Amberley that waited out probate or a slow listing gets a harder look before we ask for power, because breakers from the Eisenhower years and the ground wiring behind them can lag well behind current code. A brief inspection settles some houses. Others end with a new panel, and we tell you which after looking. Refitting what’s there and fitting a modern, properly sized service share the same labour, permit and inspection, so we quote both.',
      },
    ],
    whyTitle: 'Why Homeowners in Amberley Choose Us for Disconnection Repair',
    whyParagraph:
      'With the service gone, the furnace goes quiet and the sump pit fills, so it’s an emergency to us. Licensed electricians make the repair the utility wants, pull the permit, meet the inspector and agree the price first.',
    sharedFaqs: [
      {
        q: 'What sets the bill for a reconnect in Amberley?',
        a: 'Whatever broke. Swapping a heat-damaged meter socket takes a fraction of the time a complete new service does. Once the diagnosis is done, a fixed price reaches you in writing before any work, with our cost shown separately from anything the utility charges. Qualifying homeowners can finance it.',
      },
      {
        q: 'How many days could the power stay off at a house in Amberley?',
        a: 'Usually the repair takes a single day. What decides the rest is the inspection, and that follows the inspector’s schedule. We put the request in with the work instead of waiting until we finish, which keeps the outage as short as it can be.',
      },
      {
        q: 'May I restore the power myself once the repair is done?',
        a: 'No. Utility crews own the meter and whatever seal or ring holds it, and Ohio makes tampering with them a criminal offence. They also want the inspection passed first, since the service was cut over a fault, so the reconnect is theirs to make.',
      },
    ],
  },
};
