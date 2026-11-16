import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const southLebanon: LocationServiceCopy = {
  localParagraph:
    'Half the house dark, or the whole thing cut off by the utility, gets fixed the same way in South Lebanon: a licensed electrician repairs the owner’s equipment and, usually, an inspector approves it before power is restored. About two in three homes here date from 2000 or later, per Census figures, so storm hits and failed checks on newer work are common causes. Older houses near the river carry original gear that gives an inspector more to look at. We price the fix in writing after diagnosis.',
  emergencyParagraph:
    'Power loss here stops the heating or cooling and leaves the sump pump idle, a worry for basements on low ground near the Little Miami. Don’t go near a meter box dangling from the siding. If a line has come down, ring 911 and your utility first. Most calls in South Lebanon get an electrician that same day, weekends too.',
  commonIntro:
    'Newer subdivisions and the old streets near the river in South Lebanon see these four causes most:',
  localFaqs: [
    {
      q: 'Why does only half my house in South Lebanon have power?',
      a: 'Homes take power on two legs, and when one fails, whether at the overhead drop or a lug inside the breaker box, roughly half the circuits die. Book it quickly. Anything with a motor or electronic board, the furnace blower and washer included, can be harmed by the uneven supply.',
    },
    {
      q: 'Can a panel that flooded in South Lebanon be turned back on?',
      a: 'Not as it stands. When the river backs into basements along South Main, South High or King Avenue, a breaker box that sat in water is finished as far as energising goes. We replace what the water touched, see it through permit and inspection, then the utility restores the service.',
    },
  ],
  overrides: {
    ctaLine: 'Getting power back to subdivision homes and older houses in South Lebanon',
    band1Heading: 'Common Causes of Electricity Disconnection in South Lebanon',
    commonSituations: [
      'A falling limb that ripped the overhead drop and kinked the riser on a newer house',
      'A breaker box in a riverside basement that sat in floodwater',
      'A finished basement wired without a permit, found when the house changed hands',
      'An original panel in an older home off High Street with grounding that never met code',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in South Lebanon',
        body: 'A reconnect here runs in a fixed order. First comes diagnosis of everything from the service head down, meaning the riser, entrance conductors, meter enclosure, breaker box, ground rod and bonding. What we find there sets the scope and the permit. Next we repair the failed part, plus any grounding or bonding below current code, because no inspector will skip it. We file the permit and book the inspection at the time you approve the job, not after. When the utility reinstalls the meter, we switch breakers on one at a time, mark every circuit, and leave you a written note about anything that deserves watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in South Lebanon',
        body: 'Tags go on for concrete reasons, usually a breaker box that isn’t safe, a missing ground or conductors left bare. Whoever placed it meant that the service stays dead until a licensed electrician has fixed the cause and an inspector agrees. A quick tidy-up of the obvious hazard won’t change that. Any tag, note or hanger left at the house is worth keeping, because it normally names the problem. The meter box, riser and panel are the homeowner’s to repair, but the meter lock is not yours to touch. Breaking it is a crime in Ohio, and it would feed a known fault.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in South Lebanon',
        body: 'An older place near the town centre that went unoccupied after a sale needs a more careful look than a newer house before anyone turns it on, since its panel and grounding may be well short of current code. A short inspection settles some, a new panel others, and you hear which once we’ve looked. A like-for-like refit carries the same labour and permit cost as a properly sized modern service, so both go on the quote.',
      },
    ],
    whyTitle: 'Why Homeowners in South Lebanon Choose Us for Disconnection Repair',
    whyParagraph:
      'We drop other work for a house with no power. Licensed electricians make the repair your utility is waiting on, file the paperwork, walk the inspector through it and hand you a price before starting.',
    sharedFaqs: [
      {
        q: 'What does disconnection repair cost in South Lebanon?',
        a: 'The number depends entirely on what broke. A storm-bent riser, a burned meter enclosure and a whole new service are very different jobs. After diagnosis we write down one flat rate, separate from any utility charges, and you approve it before work. Financing is open to qualifying homeowners.',
      },
      {
        q: 'How quickly can the power come back on in South Lebanon?',
        a: 'Most of our repairs need a single day. What stretches the outage is waiting for an inspector, so the request goes in the moment you approve the job. Getting that date early is the best tool we have for shortening your time without power.',
      },
      {
        q: 'Am I allowed to reconnect the meter myself in South Lebanon?',
        a: 'No. The lock belongs to the utility, and tampering with it is a crime in Ohio. If a fault caused the shutoff, refitting the meter would also send power straight into the failed equipment. The utility puts it back once the inspection passes.',
      },
    ],
  },
};
