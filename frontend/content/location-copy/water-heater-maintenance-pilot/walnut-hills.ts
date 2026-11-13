import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walnutHills: LocationServiceCopy = {
  localParagraph:
    'Owners, not occupants, book most tune-ups in Walnut Hills. By Census figures 78.6% of homes are rented, and a big share sit in buildings of five or more units, so a typical job is a row of closet tanks standing in pans, one per apartment, worked through on a landlord’s timetable. Nearly half the housing, 48.3%, predates 1940; those basements come with tired venting and an old bottom drain we treat carefully. The flat price is settled first, with a frank word if a tank isn’t worth the visit.',
  emergencyParagraph:
    'Around Peebles’ Corner, some calls jump the tune-up line. Tank dribbling water: close the cold valve and shut off its gas or power. Gas odor: leave, flip nothing, relight nothing, and reach the gas company. Carbon monoxide alarm: everyone out of the unit. A stuck-open relief valve or no hot water counts too. Most get a same-day visit, weekends included.',
  commonIntro:
    'Around Peebles’ Corner and in the bigger buildings, these usually prompt an owner in Walnut Hills to book:',
  localFaqs: [
    {
      q: 'I rent in Walnut Hills and the hot water runs out quickly. Can I book a flush?',
      a: 'Write to your landlord instead; the tank is theirs. In Ohio, ORC 5321.04 puts working supplied appliances, (A)(4), and reasonable hot water, (A)(6), on the landlord’s list. We service water heaters, not leases. If your building runs every unit off one large heater, that one is management’s to schedule.',
    },
    {
      q: 'Do older houses in Walnut Hills need anything extra at a tune-up?',
      a: 'Sometimes. A house from before 1940 may have a bottom drain nobody has turned in decades, so we confirm it will close again before opening it. Flue pipe and gas fitting get a harder look, since in old basements in Walnut Hills they can be original. Anything worn is priced before we touch it.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly water heater service for apartment owners and householders in Walnut Hills',
    band1Heading: 'Signs a Water Heater in Walnut Hills Is Due for Maintenance',
    commonSituations: [
      'A building where nobody can say when any closet tank was last drained',
      'A tenant reporting a rumbling heater closet late at night',
      'Standing water in the pan under a tank that still heats',
      'A pre-1940 basement tank with a flue pipe flaking rust at the joints',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Walnut Hills',
        body: 'Each tank in Walnut Hills is emptied through the drain cock at its base until the hose stops running cloudy. All water drops minerals as it warms, and they bury the burner or lower element; that’s the popping, and the short showers. The anode, a rod hung from the top that corrodes so the walls last, gets pulled and quoted if it’s down to the core. The T&P relief valve is lifted to see it reseats, and its pipe followed, which matters in a closet above someone’s ceiling. Gas tanks: flame, pilot, draft hood and gas fitting. Electric: upper and lower elements and their thermostats, metered. Parts are priced first.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'In Walnut Hills a tune-up round earns its place on working tanks nobody has ever emptied, a building just bought with no maintenance log, or a closet that has begun to rumble at night. Landlords get the most from it with every unit booked on one visit. It earns nothing on a tank whose shell is already weeping; no flush closes steel, and that unit wants replacing. Brown hot water, or a heater that’s plainly done, is the same: we’ll tell you to keep the money for the new one. Once a year is what we advise.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Walnut Hills',
        body: 'Tanks get the drain-out and an anode look. A tankless heater has no tank to silt up, but scale lines its heat exchanger, so a small pump runs descaler through it and we rinse the strainer on the cold intake. Electric models get both elements and thermostats metered; gas ones get flame and venting checked. Gas service is widespread in Walnut Hills. Tankless can come up when an owner replaces tanks later, never as a pitch.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Walnut Hills Book Water Heater Maintenance With Us',
    whyParagraph:
      'In Walnut Hills our maintenance days are spent in apartment closets and old basements. Every technician holds a license and insurance and has passed a background check and drug test, and owners approve flat rates before we start.',
    sharedFaqs: [
      {
        q: 'How do you price water heater maintenance in Walnut Hills?',
        a: 'Per heater, flat, and quoted before work. Storage tank or tankless, the fuel it burns and the route to it set the number, and a building’s worth of units goes on one quote. Worn parts carry separate prices; nothing changes without a yes from the owner.',
      },
      {
        q: 'How often should the water heaters in my building get serviced?',
        a: 'Annually. Any unit where tenants report popping or rumbling should be seen before the next round, since that sound means silt is collecting. Servicing every unit in the same month makes the records easy to follow for owner and manager alike.',
      },
      {
        q: 'Can our building’s handyman drain the tanks between visits?',
        a: 'Yes, letting a bucket or two out of the drain cock is fine for a handy person. Old drain cocks that won’t reseal, gas burners and lifting the T&P valve are where we come in. A drain that keeps dripping inside a closet above another unit is trouble you don’t want.',
      },
    ],
  },
};
