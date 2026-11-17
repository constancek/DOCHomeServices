import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evanston: LocationServiceCopy = {
  localParagraph:
    'A storm can leave half a house dark in Evanston, or keep the whole place dark after the rest of the block is lit, and either way the fault usually sits in the mast, meter box, entrance cable or panel. Census figures put roughly seven of every ten homes here before 1940, and plenty sit on narrow lots with a mast poking up through an old roof, so one snapped limb can do more harm than you’d guess. Photos come first, then a price you sign off.',
  emergencyParagraph:
    'Heat, cooling and the sump pump all die with the power, often while rain is still coming down. A wire on the ground in Evanston is a job for 911 and Duke Energy Ohio, so keep back. By the next morning every electrician in town is fielding calls, but most homes here see one of ours before dark, weekends included.',
  commonIntro:
    'On narrow lots full of prewar singles and two-families, we keep running into these:',
  localFaqs: [
    {
      q: 'My house in Evanston is half dark after the storm. Should I keep resetting breakers?',
      a: 'Leave the breakers alone. One half working and the other dead, with nothing odd outside, generally means the house has lost one leg of its service or the panel has trouble inside. Each reset shoves fault current through parts that could already be hurt. We trace it properly and quote before fixing anything.',
    },
    {
      q: 'I rent out a two-family in Evanston. What do my tenants need to do after a storm?',
      a: 'Have them write to you and attach photos of whatever they can see. Ohio’s landlord duty under ORC 5321.04 means an owner keeps the electrical systems they provided in good and safe working order. Anything in the lease stays between you and your tenants, and we just get the lights back on for you.',
    },
  ],
  overrides: {
    ctaLine: 'Storm damage repaired for older houses in Evanston',
    band1Heading: 'Storm Damage We Repair in Evanston',
    commonSituations: [
      'A mast through a prewar roof snapped where a limb fell across the drop',
      'A meter box on a two-family torn from the wall, with conduit hanging off the siding',
      'Old entrance cable frayed where the storm pulled on it, replaced rather than taped',
      'Half the house out because the storm took one leg of the service',
    ],
    proseSections: [
      {
        title: 'When Your House Stays Dark After a Storm in Evanston',
        body: 'Next door someone’s kitchen light is on, and you’re still feeling around for a flashlight. A lone dark house on a lit block tells you the storm got at equipment on your side. Duke Energy Ohio looks after its poles, the wire running to the house and the meter itself. After that point the owner has the box, the mast and weatherhead up top, and the panel indoors, and that box is the part nobody sees coming. Crews refuse to energise a damaged box. Our electrician photographs it, does the repair, gets the permit from Inspections Bureau, Inc. (IBI), stands with the inspector and sorts out the reconnect.',
      },
      {
        title: 'Storm Safety Before the Repair in Evanston',
        body: 'Treat every fallen wire in Evanston as though current is running through it. Shut the dog and the kids indoors, and if a branch has it pinned, the branch stays. Phone 911 and the utility ahead of everyone else. Run a generator out in the yard, well clear of every window and door, and the fridge plugs into the generator itself. Tie one into a wall outlet, or into the panel with no transfer switch fitted, and it can electrocute the crew up the pole on your street. Once the main breaker snaps off twice, it stays off. Ring us about the mast or meter before the branches.',
      },
      {
        title: 'Surge Damage After a Storm in Evanston',
        body: 'Sometimes the blackout turns out to be the cheap part. A strike close by forces a jolt into the wiring, and in houses this old it tends to hit the TV and the range first, then the furnace’s control board and any heat pump inverter. Of everything we fit, a whole-home surge protector at the panel protects for the least money, and while we’re rebuilding the storm-damaged service it can go in on the same trip.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Evanston Call Us After a Storm',
    whyParagraph:
      'Houses left dark by a storm jump our queue. Our licensed electricians photograph what broke for your insurer, set the mast, meter base or entrance cable right, handle the inspection and agree the cost with you first.',
    sharedFaqs: [
      {
        q: 'Why is my house in Evanston still dark when the street has its lights back?',
        a: 'Duke Energy Ohio puts its own wire right and quits at your meter. Beyond that, a box wrenched off the brick or a mast folded over belongs to the owner, and the crew leaves it unhooked. The lights return after a licensed electrician has rebuilt it and an inspector has passed the work.',
      },
      {
        q: 'What will my insurer need after storm damage in Evanston?',
        a: 'An adjuster normally wants pictures showing the damage before anyone fixed it and an invoice split item by item. With the damage on the homeowner’s side, the claim sits with your insurer, not the utility. We hand over both, and qualifying homeowners have financing available.',
      },
      {
        q: 'How soon can an electrician come to Evanston after a storm?',
        a: 'Ring the minute it’s safe. Every household with damage calls on the same morning and inspectors fill their diaries too, so early callers go first. We still get to most homes that day, weekends included, and a repair like this rarely takes more than a single day.',
      },
    ],
  },
};
