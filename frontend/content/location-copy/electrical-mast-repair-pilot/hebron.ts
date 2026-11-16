import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hebron: LocationServiceCopy = {
  localParagraph:
    'Hebron is a young town for housing. Half the houses went up in 2002 or later, Census figures say, newer than Boone County overall, and better than four in five date from 1990 on. Nearly every one is a detached house, and a mast that young seldom wears out. When we’re called, it’s usually because a branch came down on the wires from the street and bent the pipe or yanked the weatherhead. Every visit starts at the full entrance, and you sign off on a price first.',
  emergencyParagraph:
    'Ring us at once if a branch has knocked the mast loose, the weatherhead is spitting sparks or one half of the house is dark. Treat a wire in the yard as energized, keep kids and pets indoors and tell your utility about it. We fix the house side the same day on most calls, weekends too.',
  commonIntro:
    'On houses this new, the signs below almost always trace back to a storm rather than age.',
  localFaqs: [
    {
      q: 'Which utility handles the disconnect for a mast repair in Hebron?',
      a: 'It comes down to the address. In Boone County, some streets get power from Duke Energy Kentucky and others from Owen Electric Cooperative, and the name on your bill settles it. Whichever one it is, we set up its shutoff and turn-on visits and slot the inspection in between.',
    },
    {
      q: 'After a storm, who pays for mast damage on my house in Hebron?',
      a: 'That claim belongs with your own homeowner’s policy rather than the utility, since everything from the weatherhead and pipe down to the meter box is your property. We can’t predict what an insurer pays, but we’ll explain plainly what broke and what we did.',
    },
  ],
  overrides: {
    ctaLine: 'Service mast repair after storms for houses in Hebron',
    band1Heading: 'Signs You Need Service Mast Repair in Hebron',
    commonSituations: [
      'A mast on a 2000s two-story bent backward after a limb came down across the drop',
      'A weatherhead pulled off the siding, with the drop sagging toward the yard',
      'A meter box tilted off the wall where the mast dragged on it',
      'Power flickering in half the house after a night of high wind',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Hebron',
        body: 'Young masts usually get fixed rather than replaced. If a strap has popped, the weatherhead seal has dried out or the flashing has lifted at the shingles, we deal with that part and leave the pipe. If the pipe is kinked, rusting or folded by a limb, it gets swapped, and cracked or chalky entrance cable is always replaced, never wrapped. A replacement in Hebron is sized to the panel, meter socket and cable already in the house, and if home rewiring or another upgrade would help, we’ll lay it out.',
      },
      {
        title: 'Storm Damage to Service Masts in Hebron',
        body: 'Weather causes most mast calls in Hebron. The overhead wires are tied off at the pole and at your house, and a branch landing on them pulls your end over first. Gusty nights loosen it too. A tilt that cracks the roof boot or pulls the wire bracket out is what turns it into a real problem. Rain finds the gap, and the utility keeps the service off until it’s closed. Your side of storm damage is a matter for homeowner’s insurance, not the utility. Afterward, walk out front and look for a plumb pipe, a weatherhead hugging the wall and a meter box sitting square.',
      },
      {
        title: 'The Utility’s Side and Yours in Hebron',
        body: 'Who serves your street in Boone County depends on the address, since the county is split between electric providers. What sits on the house belongs to you either way, from the weatherhead and pipe through the riser and cable to the meter box. Your utility cuts the service before we arrive, our part normally takes a single day, and power returns once the inspection is passed. We put in the permit and book that inspection the day you call.',
      },
    ],
    whyTitle: 'Why Homeowners in Hebron Choose Us for Mast Repair',
    whyParagraph:
      'A licensed electrician checks each part from the meter base to the roof, restores the mast to code and flashes the roof opening. We file the permit the day you book, at a price agreed first.',
    sharedFaqs: [
      {
        q: 'What does a mast repair cost in Hebron?',
        a: 'Every job here is a flat rate set after we’ve seen the service entrance. Strapping and resealing a young mast costs less than putting in a new one with fresh cable and flashing, and the permit is built in. You okay the figure first, and qualifying homeowners can finance it.',
      },
      {
        q: 'How long does mast repair in Hebron keep the power off?',
        a: 'Our wiring work is normally done in a single day. Most of the wait sits with the utility, which cuts the service first and won’t restore it until the inspection passes. Because we book that inspection when you schedule, the gap between those visits stays short.',
      },
      {
        q: 'Can a windy night damage a service mast?',
        a: 'It can. Gusts working on the overhead wires loosen a mast bit by bit, the way one falling limb does in a second. Once the roof seal or wire bracket lets go, rain gets in, and the utility waits to reconnect until we’ve made it right.',
      },
    ],
  },
};
