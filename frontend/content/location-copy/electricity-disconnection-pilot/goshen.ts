import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const goshen: LocationServiceCopy = {
  localParagraph:
    'Goshen’s reconnects hinge on two things the utility insists on, a licensed electrician’s repair to the part of the service you own and, usually, an inspector’s nod. Which problems we meet depends on the address. Around the old crossroads on State Route 28, roughly a third of houses predate 1940 by Census figures, so original panels and skimpy grounding are routine there. Out across the township the median house is from 1983, and about one home in seven is a mobile home. Our written price follows the diagnosis.',
  emergencyParagraph:
    'Out on the township roads, a house with its meter pulled goes cold or stifling and the sump pump falls behind. Keep back from a meter box torn loose from the wall. A wire lying in the yard gets reported to 911 and Duke Energy Ohio first. Most of these homes see an electrician from us that day, weekends included.',
  commonIntro:
    'From the old houses in the village core to the newer homes out on the township roads, a cut service in Goshen tends to come from one of these:',
  localFaqs: [
    {
      q: 'Why can’t I get power turned on at an inherited house in Goshen?',
      a: 'Because a service that has sat dead a long time gets treated carefully, and the older houses in the village core often carry a panel or ground far short of current code. Some need nothing more than a short inspection. Some need a new panel. We tell you which after the look, before any work begins.',
    },
    {
      q: 'Are the reconnect steps any different for a mobile home in Goshen Township?',
      a: 'Not really. The line and the meter are the utility’s, and the meter base, the feeder to the home and the panel inside are the owner’s. A licensed electrician repairs that side, an inspector normally approves it, and we line up the reconnect afterwards.',
    },
    {
      q: 'The house I rent in Goshen has no power. Who sorts it out?',
      a: 'Your landlord, so tell them in a dated note and snap a photo of any notice. Ohio’s ORC 5321.04 puts the upkeep of landlord-supplied wiring on the owner, who must keep it safe. We restore power, not leases, so the owner books the visit and okays the price.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection repairs for village houses and township homes in Goshen',
    band1Heading: 'Common Causes of Electricity Disconnection in Goshen',
    commonSituations: [
      'A house near State Route 28 inherited after a long vacancy, with a service nobody has checked in years',
      'A riser bent back off the wall by a falling limb that caught the overhead drop',
      'A decades-old meter socket with browned plastic and heat marks around the jaws',
      'Unpermitted wiring from years back that surfaced when the house was sold',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Goshen',
        body: 'With the house already dark, a wrong guess only adds days, so the whole service gets walked first. That covers the weatherhead and riser, the conductors dropping to the socket, the socket itself, the panel and each ground and bond, and it settles whether the mast, the base or the panel is at fault. The permit is filed and the inspection asked for when your repair date is set. Grounding comes up to current code during the work, complaint or not, since inspectors always check it. Once the meter is reseated, circuits return one at a time, and you get a short written list of anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Goshen',
        body: 'Somebody tags a service around Goshen when they find a reason it isn’t safe, such as a panel on its last legs, a missing ground or bare wire near the meter. It isn’t a formality, and patching the ugliest part won’t get it pulled. Only a licensed electrician’s correction, followed by an inspector’s sign-off, takes it down. Whatever reason is written on the tag or hanger shortens our search, so keep it. Walk away from a locked or pulled meter. Breaking that lock is a criminal offence in Ohio, and it sends current into equipment that already failed a safety call.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Goshen',
        body: 'Plenty of older village houses still run on their first panel and grounding. After a long empty spell, we take extra care before asking for the meter back. Rebuilding exactly what was there eats up nearly the labour, permit and inspection of a fresh service sized for how people live now, and with gear that old you’d likely end up paying twice. Both options get priced.',
      },
    ],
    whyTitle: 'Why Homeowners in Goshen Choose Us for Disconnection Repair',
    whyParagraph:
      'No electricity means no furnace and no sump pump, so a disconnection gets our emergency response. Licensed electricians take on the utility’s required repair, the permit and the inspector, and the price is settled before we start.',
    sharedFaqs: [
      {
        q: 'How much should I expect to pay for reconnection work in Goshen?',
        a: 'It hinges on what gave out. A single meter base is a far lighter job than building a new service from the roof down. After diagnosing, we write a flat rate for your approval, and the utility’s charges never land on our invoice. Qualifying homeowners can finance.',
      },
      {
        q: 'How quickly can power be restored to a house in Goshen?',
        a: 'Our repair usually takes no more than a day. The rest rides on the inspection, which moves on the building department’s timetable. Asking for the inspector when we schedule you, instead of afterwards, is what pulls your date in the most.',
      },
      {
        q: 'Is there any harm in reconnecting the meter myself in Goshen?',
        a: 'Yes, real harm. Ohio law makes fiddling with a utility lock or meter a criminal offence. A fault caused the cut as well, so forcing the meter back before the repair and inspection energises a system already found unsafe.',
      },
    ],
  },
};
