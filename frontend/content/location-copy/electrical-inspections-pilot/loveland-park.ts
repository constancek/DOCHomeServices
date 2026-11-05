import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lovelandPark: LocationServiceCopy = {
  localParagraph:
    'Loveland Park has two kinds of houses, and the inspection depends on which you own. Census figures put 37.1% of homes before 1960, some on the small riverside lots the Cincinnati Enquirer gave away in the 1920s, where two-prong outlets and undersized panels still turn up. The rest, mostly from 1980 on, usually have sound wiring and get inspected for a sale or a new load. Electric heat in nearly half the homes adds to that load. We test it all and price fixes before work.',
  emergencyParagraph:
    'Call right away in Loveland Park if you smell burning, see sparks, find a switch plate or outlet that’s hot, buzzing or scorched, or a breaker trips the second you reset it. Flip that breaker off. If there’s smoke or flame, get outside and dial 911. Most calls get a same-day technician, weekends too.',
  commonIntro:
    'Loveland Park findings split between the 1920s to 1950s houses near the river and the newer homes built since 1980. The ones we see most:',
  localFaqs: [
    {
      q: 'Which office inspects permitted electrical work in Loveland Park?',
      a: 'It depends on the county line. On the Warren County side, in Deerfield Township, the Warren County Building Department enforces electrical code. On the Hamilton County side, in Symmes Township, Inspection Bureau, Inc. (IBI) handles electrical inspections. We pull the right permit and arrange it.',
    },
    {
      q: 'My Loveland Park home heats with oil. Does that change the inspection?',
      a: 'A little. An oil furnace still runs on electricity for its burner, controls and blower, so we check that it has its own circuit and a working service switch. In an older house we also look harder at the panel and the grounding.',
    },
    {
      q: 'I rent in Loveland Park. Who is responsible for faulty wiring?',
      a: 'Under Ohio law, ORC 5321.04 (A)(4), your landlord must keep supplied electrical fixtures in good and safe working order. Put the problem in writing to the landlord, who books the inspection or repair. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections on both sides of Loveland Park',
    band1Heading: 'Common Electrical Problems We Find in Loveland Park Homes',
    commonSituations: [
      'A small 1940s cottage on a river lot still running two-prong outlets and a fuse box',
      'Additions built onto an original lot home and wired off the old panel',
      'An oil furnace with no proper shutoff switch at the burner',
      'A 1990s panel near capacity because electric heat and a new EV charger share it',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Start with the simple checks. A bathroom or outdoor outlet that’s dead usually means a GFCI tripped somewhere on that circuit; find it and reset it. One breaker that trips and then holds is often just too much on that circuit at once, and a lamp outlet may simply be switched. Book an inspection for a fuse box, ungrounded outlets all over the house, cords used as permanent wiring, or flickering on several circuits. Buying one of the older river-lot homes is the classic reason. A newer house with a clean home inspection can skip us.',
      },
      {
        title: 'Inspection, Repair or Rewire in Loveland Park?',
        body: 'Let the findings decide. Loose connections, a breaker that’s failing and missing GFCI outlets are ordinary repairs on any house in Loveland Park. An old fuse box or a full, overheating panel means a panel replacement. Rewiring gets priced only when cloth-covered or knob-and-tube wiring runs through most of an older home, and you see that number beside the cost of spot repairs. In the post-1980 homes, rewiring almost never comes up. The report is yours, and you can hire any licensed electrician to do the work.',
      },
    ],
    whyTitle: 'Why Loveland Park Homeowners Call Us',
    whyParagraph:
      'Most Loveland Park homes are owner-occupied, and many owners call us when buying or selling a house that’s had decades of additions. A licensed, insured electrician inspects it, and the flat rate is agreed before we start.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Loveland Park?',
        a: 'You get one flat price before we start, based on the size of the house and why you want the inspection. A small river-lot cottage and a large newer home won’t cost the same. Any repair we find comes with its own quote for you to approve or not.',
      },
      {
        q: 'What gets checked in a Loveland Park electrical inspection?',
        a: 'Panel, breakers or fuses, the grounding and bonding, every outlet we can reach, GFCI and AFCI protection, wiring visible in the basement, attic and crawlspace, and whether smoke alarms are powered. In older homes we pay extra attention to ungrounded circuits and add-on wiring.',
      },
      {
        q: 'Do I need to hire you for the repairs?',
        a: 'No. Once you’ve paid for the inspection, the written report is yours. Take it to another electrician, use it in a home sale, or have us quote the fixes. If a buyer, lender or insurer asks for a written report, you’ll have one to send.',
      },
    ],
  },
};
