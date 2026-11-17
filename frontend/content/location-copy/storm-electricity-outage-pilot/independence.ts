import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const independence: LocationServiceCopy = {
  localParagraph:
    'Independence has grown fast, and by the Census count about half its homes went up in 2000 or later. Youth doesn’t protect a service from a falling limb, though. A branch landing on the drop can still rip a meter box off new siding or kink the mast, and with nearly half the homes on electric heat, a nearby strike often fries heat pump circuit boards too. Before any part is swapped, you get photos and a price to approve.',
  emergencyParagraph:
    'In Independence, a house without power after a storm has no heat pump or furnace running and a sump pump sitting idle. Leave any fallen wire to 911 and your utility, which in most of Kenton County means Duke Energy Kentucky. Requests pile up overnight, yet most get one of our electricians the same day, weekends included.',
  commonIntro:
    'Independence is mostly detached houses built in the last few decades, and these are the storm repairs they need most often:',
  localFaqs: [
    {
      q: 'Does a newer house in Independence take the same storm damage as an older one?',
      a: 'Mostly the same parts fail, for different reasons. A young house still has a mast or service entrance that a falling limb can tear loose, and its furnace boards and heat pump electronics don’t tolerate surges well. An older house adds tired entrance cable and an older panel, so the damage tends to spread further.',
    },
    {
      q: 'Can I use a generator in Independence while I wait for the repair?',
      a: 'Yes, with two conditions. It has to sit outdoors, far enough from the house that exhaust can’t drift in, with appliances plugged into it on cords. And it must never be tied into a wall socket or the panel unless a transfer switch is fitted, because that energises the utility line. We can quote a transfer switch while we’re there.',
    },
    {
      q: 'I rent a house in Independence and the storm left it dark, so what should I do?',
      a: 'Message the owner about it, ideally in a form that leaves a date on it, and attach a shot of whatever looks broken at the meter, mast or weatherhead. Kentucky has no statute that spells out a landlord’s electrical duties the way Ohio does, so the lease governs who pays. Your landlord then books our visit and approves the price.',
    },
  ],
  overrides: {
    ctaLine: 'Storm-damaged masts and meter bases rebuilt for houses in Independence',
    band1Heading: 'Storm Damage We Repair in Independence',
    commonSituations: [
      'A meter box on a newer house yanked off the siding, conduit and all, when a limb hit the service drop',
      'A snapped weatherhead on one of the older houses near Madison Pike, letting rain run into the entrance cable',
      'Entrance cable crushed against the side of a subdivision house where the drop pulled tight',
      'Burned breakers and a damaged panel bus after a nearby strike, while the outside looks untouched',
    ],
    proseSections: [
      {
        title: 'When Your House Stays Dark After a Storm in Independence',
        body: 'Your neighbours’ garage doors are rumbling open and their kitchens are bright, and you’re in a drawer looking for batteries. When the outage is yours alone, the storm has almost certainly hurt something the homeowner owns. Utility crews fix the poles and wires, and their responsibility runs out at your meter. They will not energise a meter base hauled off the siding or a mast bent out of line, so your power waits on a licensed repair and a passed inspection. We look after the lot, from photos and the repair to the permit, the inspection slot and the reconnect paperwork.',
      },
      {
        title: 'Storm Safety Before the Repair in Independence',
        body: 'A generator is useful during the wait, provided it sits outside, well clear of the house, with the fridge or freezer on cords run straight to it. Feeding it into the panel or a wall socket with no transfer switch sends power out along the street wires, where it can electrocute a lineworker. Any wire lying on the ground should be assumed live, so the kids and pets stay inside, nobody tugs on the limb holding it down, and 911 and the utility hear about it first. If the main breaker trips again, give up on it. Call us about the mast or meter before the yard gets tidied.',
      },
      {
        title: 'Surge Damage After a Storm in Independence',
        body: 'Heat pump homes feel a nearby strike hardest. The spike enters over the service and goes looking for electronics, so we tend to find a dead inverter, a ruined air handler or furnace board, a range that won’t heat or a blank TV. Fitting surge protection for the whole house at the panel is the least costly safeguard we offer, and doing it during the storm rebuild avoids a second trip.',
      },
    ],
    whyTitle: 'Why Homeowners in Independence Call Us After a Storm',
    whyParagraph:
      'In Independence, storm-dark houses go to the top of our list. A licensed electrician photographs the damage for your adjuster, rebuilds what failed between weatherhead and meter, meets the inspector and gives you a price before starting.',
    sharedFaqs: [
      {
        q: 'Why is my house in Independence still dark when the rest of the street has power?',
        a: 'Your utility only restores its own equipment and won’t switch damaged customer equipment back on. Customer equipment means the weatherhead, the mast, the entrance cable, the meter box and the panel, all of which belong to the homeowner. After a storm damages any of them, the power stays off until they’re repaired and an inspector has passed the work.',
      },
      {
        q: 'What does my insurance company need after storm damage in Independence?',
        a: 'An adjuster wants proof, meaning photos of the damage taken before anything was cleared and a bill that breaks out each part and task. We give you both. Storm harm on the homeowner’s side of the service is a question for your own insurer, not the utility, and your policy settles the outcome. Qualifying homeowners can finance.',
      },
      {
        q: 'How fast can you get out to Independence after a big storm?',
        a: 'That mostly depends on how early you ring. Storm damage brings everyone to the phone together, and both electricians and inspectors get booked in the order they’re asked. We still reach the majority of homes that same day, and once started, a repair is normally finished in a single day.',
      },
    ],
  },
};
