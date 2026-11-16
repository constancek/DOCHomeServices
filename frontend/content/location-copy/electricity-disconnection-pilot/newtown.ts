import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newtown: LocationServiceCopy = {
  localParagraph:
    'In Newtown, a cut service comes back in a fixed order. An electrician with a license repairs the equipment the homeowner is answerable for, and in most cases an inspector then approves it before the utility will reconnect. Census figures give the village a median build year of 1989, yet roughly one home in five predates 1940. The older ones bring first-generation panels and weak grounding; newer ones tend to go dark after storm damage or a job that missed inspection. Diagnosis and a written price come first.',
  emergencyParagraph:
    'When the meter goes dead, so do the furnace, the air conditioning and the sump pump, which matters on the low streets by the Little Miami. Keep away from a meter box hanging off a wall. For a line down in Newtown, phone 911 before the utility. On most calls an electrician comes out that same day, weekend or not.',
  commonIntro:
    'Between the pre-war houses, newer streets and townhouse rows of Newtown, these causes turn up most:',
  localFaqs: [
    {
      q: 'Can a panel in Newtown that flooded be turned back on?',
      a: 'Not as it is. In 2018 river water reached homes along the north side of Crull Street and on Turpin Lane, and gear that sits in water like that keeps silt and corrosion inside. We open the whole service, price the replacement on paper and request the inspection with it.',
    },
    {
      q: 'Does my townhouse association in Newtown have to approve the repair?',
      a: 'Sometimes. When several units share one meter bank, or the meters hang on a common outside wall, the board may have to say yes before anyone starts. Usually the association or the owner hires us. We send a written price the board can sign off on without a long back-and-forth.',
    },
    {
      q: 'What steps should a renter in Newtown take after the power is cut?',
      a: 'Put it in writing to the landlord, explain what happened and keep copies along with any tag. ORC 5321.04 holds Ohio landlords to keeping the electrical wiring and fixtures they provide safe and in repair. The owner hires the electrician; our concern is the service, not the lease.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnecting houses and townhouses in Newtown after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Newtown',
    commonSituations: [
      'A storm-felled branch that ripped down the drop and kinked the mast',
      'A basement remodel wired without a permit, discovered when the service was opened',
      'A first-generation panel in a pre-1940 house, tagged for having no real ground',
      'Scorch marks on one position of a meter bank serving a townhouse row',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Newtown',
        body: 'For a house already sitting dark, we look over the whole service in one pass, starting with the mast and weatherhead and moving through the entrance cable, meter socket, panel and ground. That shows whether you’re facing a socket, mast or panel repair, and the repair type determines the permit. We file and ask for the inspection in the same breath as booking you, since the inspector’s date is what governs how long you go without. What failed gets replaced and bonding is brought to present code. After the utility reconnects, breakers come on one by one, the panel gets a fresh directory and anything worth watching is written down.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Newtown',
        body: 'The meter enclosure, mast, weatherhead, entrance cable and panel all belong to the person who owns the house, while the utility does the disconnecting and reconnecting. That is why a tag for a dangerous panel, absent grounding or bare conductors makes the repair your responsibility. Treat that tag as a formal instruction to leave the service dead, issued for cause. Hiding the visible damage won’t clear it; a licensed correction followed by an inspector’s approval will. Hold on to the tag, since its wording usually explains the reason. Leave a removed or locked meter untouched, because Ohio makes tampering a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Newtown',
        body: 'An older house that sat unoccupied for a stretch, or a rental waiting between tenants, gets a slower going-over before power returns, because the panel or ground may be far out of date. A brief inspection handles some; others turn into a panel replacement, and you’ll hear which once we’ve looked. With labour, permit and inspection unchanged either way, we price a rebuild of the old service next to a correctly sized new one.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Newtown Choose Us for Disconnection Repair',
    whyParagraph:
      'Heat and the sump pump both die with the service, which is reason enough for us to drop other work. Our licensed people correct the cited defect, file, meet the inspector and agree a figure with you beforehand.',
    sharedFaqs: [
      {
        q: 'How do you price disconnection repair in Newtown?',
        a: 'By whatever failed. A meter socket repair is a modest job, and a full service replacement is a much larger one. After diagnosing, you receive one flat written price before we start, and our charges are listed apart from anything the utility bills. Qualifying homeowners may use financing.',
      },
      {
        q: 'When can I expect my power back in Newtown?',
        a: 'Most of our repairs take a single working day. After that the wait depends on when an inspector can come, and the building department sets that date. Because we book the inspection along with the repair, that one step shaves more off the outage than anything else.',
      },
      {
        q: 'Is it safe to put the meter back myself in Newtown?',
        a: 'No. Whoever fitted that lock owns it, and so does the meter, and Ohio makes interfering with either a criminal matter. The cut also had a cause, and energising the house early would push current into gear the utility has already condemned.',
      },
    ],
  },
};
