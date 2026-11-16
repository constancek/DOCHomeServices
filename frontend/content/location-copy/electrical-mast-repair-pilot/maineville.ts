import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const maineville: LocationServiceCopy = {
  localParagraph:
    'Housing in Maineville is mostly recent. Census figures put the median home at 2004, and more than half were built in 2000 or later. Masts and cable that new rarely wear out on their own, so most calls start with a branch landing on the overhead service line and dragging the mast or meter housing out of line. Around one household in four rents, some in newer apartment buildings. Our electrician still checks the entire service entrance and quotes a flat price before any work.',
  emergencyParagraph:
    'If a limb has knocked the mast loose, the weatherhead is throwing sparks or half the outlets have quit, call straight away. Any wire lying in the yard should be treated as live, so keep people and pets back and phone your utility. On the homeowner’s side, we can usually be there the same day, weekends included.',
  commonIntro:
    'Recent houses in the village still show mast damage, usually in one of these ways:',
  localFaqs: [
    {
      q: 'Can a newer house in Maineville need a whole new mast?',
      a: 'It can. Damage decides it here, not age. If a limb has bent the mast or torn the wire attachment, the pipe gets replaced even if it’s only a few years old. A mast that stayed straight, with a loose strap or a weatherhead in need of a new seal, gets a smaller repair.',
    },
    {
      q: 'Which office issues the permit for mast work in Maineville?',
      a: 'The village points residents to the Warren County Building Department, which enforces the electrical code. We file the permit there when you book and arrange the inspection, which has to pass before your utility restores the power.',
    },
  ],
  overrides: {
    ctaLine: 'Mast repair for newer houses in Maineville',
    band1Heading: 'Signs You Need Service Mast Repair in Maineville',
    commonSituations: [
      'A 2000s meter housing tipped off the siding after a branch hit the overhead service line',
      'A mast bent back toward the roof by a windstorm',
      'Lights flickering through the house during gusts',
      'A weatherhead knocked crooked and lifting away from the wall',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Maineville',
        body: 'Masts in Maineville are mostly young, so what the storm did decides repair or replacement. A plumb pipe with a slipped strap, a weatherhead due for a fresh bead of sealant or flashing just beginning to lift is fixed in place. Crushed, bent or corroded masts come down, and any cable with cracked or chalky insulation goes with them. Before ordering a new one, the electrician reads the panel, meter socket and cable, so the mast fits this house instead of a stock kit. Rewiring rarely comes up on houses built in the 2000s, though we’ll say so if it should.',
      },
      {
        title: 'Storm Damage to Service Masts in Maineville',
        body: 'Being newer doesn’t spare a house from storm damage, the cause of most mast calls in the village. The roofline is the weak spot, not the pole, so a limb resting on the overhead service line bends the pipe while the pole holds. Strong gusts lean it gradually. A bent mast can split the seal around the roof opening or loosen the wire anchor, and with rain getting in, the utility won’t reconnect. Your insurer, not the utility, handles questions about storm damage on the homeowner’s side. When the wind drops, glance up from the driveway to check the mast stands straight.',
      },
      {
        title: 'The Utility’s Side and Yours in Maineville',
        body: 'Your house owns everything from the weatherhead down, which means the mast, riser, cable and meter housing. In a repair the utility’s part is simple. It disconnects the power ahead of us and reconnects afterward. Between those visits, our electrical work usually fills a single day and an inspector has to approve it, because the house won’t be re-energized before that. That’s why the permit goes in when you book.',
      },
    ],
    whyTitle: 'Why Homeowners in Maineville Choose Us for Mast Repair',
    whyParagraph:
      'A newer house gets the full check from our licensed electricians, weatherhead to panel. They repair or replace the mast to code and reflash the roof opening, the permit goes in at booking, and you approve the price first.',
    sharedFaqs: [
      {
        q: 'How much does mast repair cost in Maineville?',
        a: 'Whether the mast is repaired or swapped out moves the price most. After that come the amount of cable and flashing involved and the permit. Our electrician inspects the service entrance, then gives one flat figure that you approve before work begins. Qualifying homeowners in Maineville can finance it.',
      },
      {
        q: 'How long does mast replacement take in Maineville?',
        a: 'Electrically, it’s usually done in a single day. The wait around that day belongs to the utility, which disconnects before we arrive and reconnects after the inspector signs off. Because the inspection is requested along with the job, that wait is as short as we can get it.',
      },
      {
        q: 'Can wind damage a service mast without a tree falling?',
        a: 'Yes. Wind can lever a mast out of line slowly, though a limb on the overhead service line is the more common cause. Either way, a bent mast can loosen the roof seal and let water run down the cable into the meter. Storm damage to your side goes to your insurer, not the utility.',
      },
    ],
  },
};
