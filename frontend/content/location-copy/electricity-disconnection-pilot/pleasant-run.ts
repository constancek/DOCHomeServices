import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantRun: LocationServiceCopy = {
  localParagraph:
    'Out in Pleasant Run, off Pippin Road, a dead service gets its power back only after our licensed electrician has fixed the parts you own and, nearly every time, the electrical inspector has passed them. Then the utility reconnects. Census figures put the median home here at 1974, and close to nine in ten are detached houses, so we find fewer original panels and more trouble from storms, a car meeting the service, or newer work that never passed. We look, then price it on paper.',
  emergencyParagraph:
    'A house in Pleasant Run that sits without power loses its furnace or AC and its sump pump, and that bill grows by the day. Give a meter box dangling from the siding a wide gap. Downed wire means phoning 911 and then Duke Energy Ohio. We usually have someone there the day you call, Saturdays and Sundays too.',
  commonIntro:
    'Detached houses from the 1960s on make up most of Pleasant Run, and they tend to lose service in one of these four ways:',
  localFaqs: [
    {
      q: 'Why does half my house in Pleasant Run have power and half not?',
      a: 'Almost always one leg of the incoming service has dropped, out at the drop or somewhere in the panel. The working half can see odd voltages, which is rough on anything with a motor or a control board, such as the furnace blower or a fridge. Unplug what you can and get it looked at soon.',
    },
    {
      q: 'Who issues the electrical permit in Pleasant Run?',
      a: 'Pleasant Run has no city hall of its own; it is part of Colerain Township, and electrical permits for unincorporated Hamilton County go through Inspection Bureau, Inc. (IBI). Any meter base, mast or panel job needs one. We do the filing and put the inspection request in on the day we schedule your repair.',
    },
    {
      q: 'If I rent in Pleasant Run and the power is cut, what should I do?',
      a: 'Renting is uncommon in Pleasant Run, but if you do, put the problem to the owner in a dated message and save a picture of any notice. ORC 5321.04 makes Ohio landlords responsible for the electrical fixtures they supplied, so the owner calls us. Our part is the service; the lease is theirs and yours.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection repairs for houses across Pleasant Run',
    band1Heading: 'Common Causes of Electricity Disconnection in Pleasant Run',
    commonSituations: [
      'A storm-felled limb that ripped down the drop and kinked the mast',
      'One leg of the service gone at the panel, leaving the kitchen working and the bedrooms dark',
      'A basement finished by a previous owner whose wiring failed the electrical inspection',
      'A meter base cracked off its mounting after a trailer was backed into the wall',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Pleasant Run',
        body: 'Your lights are already off, so the useful question is what holds up the reconnect, and in Pleasant Run that is usually the inspection date. We put the request in once you approve the work. The first visit is a slow walk of the service, weatherhead, mast, entrance cable, meter base, panel, then the ground rod and bonding clamps, and it tells us the fix and the paperwork. Grounding is brought to today’s code along the way. With the meter reset, the house wakes one breaker at a time, every circuit gets labeled, and you keep our notes on anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Pleasant Run',
        body: 'Here in Pleasant Run, most tags follow storm damage nobody fixed, bare conductors left after a vehicle hit, or a garage or basement wired with no permit. Read the tag as the utility forbidding anyone to energize that service. Tidying the damage won’t lift it. What lifts it is the cause put right by our licensed electrician, then an inspector’s approval. Hand us the tag or hanger, because its written reason saves time. If the meter is pulled or wearing a lock, let it be. Ohio criminal law covers meter tampering, and a forced reconnect would push current into parts already condemned.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Pleasant Run',
        body: 'Houses change hands in Pleasant Run, and one that stood empty through an estate or a long listing gets a slower start-up, since a dead service can hide a wet meter base or corrosion. A brief check may clear it; a new panel may be the honest answer, and we say which once we have looked. Since refitting the old gear and installing a right-sized modern service carry the same permit and inspection, you get both prices.',
      },
    ],
    whyTitle: 'Why Homeowners in Pleasant Run Choose Us for Disconnection Repair',
    whyParagraph:
      'Around Pippin Road, a house that loses service loses the furnace and sump pump, and we answer those calls ahead of other work. Licensed electricians repair what the utility flagged, handle the permit and inspection, and fix a price beforehand.',
    sharedFaqs: [
      {
        q: 'How much does it cost to get power restored in Pleasant Run?',
        a: 'In Pleasant Run, the bill is set by what the storm or the car actually broke. A kinked mast with one new meter socket costs far less than a whole service rebuilt after a tree came through it. After diagnosis you approve one fixed sum; any utility charge comes from them, separately. Homeowners who qualify can spread it with financing.',
      },
      {
        q: 'How many days will my house in Pleasant Run be without power?',
        a: 'Count on our work taking a single day on most of these jobs. The slow part is the inspection, which runs to the inspector’s calendar, so the request goes in as you approve the work, and we chase it rather than wait until we’ve packed up.',
      },
      {
        q: 'Can I put the meter back in myself in Pleasant Run?',
        a: 'Please don’t. That meter is the utility’s property, and Ohio treats breaking its seal or lock as a crime. Beyond the law, the power was cut because something on your side failed, so forcing it back on feeds electricity into the very fault that got it shut off.',
      },
    ],
  },
};
