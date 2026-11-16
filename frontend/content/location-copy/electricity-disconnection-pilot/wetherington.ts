import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wetherington: LocationServiceCopy = {
  localParagraph:
    'Duke Energy Ohio keeps a pulled meter out of a house in Wetherington until our licensed electrician fixes the parts the owner is answerable for and, nearly always, an inspector signs that work. Half the houses here were built by 1998, by Census figures, and none before 1980, so tired original panels are seldom the cause. Cuts here more often follow a storm limb ripping the weatherhead loose, a tree bending the mast, or an addition wired without inspection. Diagnosis comes first, then a written price before work.',
  emergencyParagraph:
    'Once the meter is out in Wetherington, furnace, AC and sump pump all stop, and losses pile up the longer it waits. Give a meter box peeling off the siding plenty of room. Assume a fallen line is live and ring 911 and the utility first. We reach most of these calls the same day, weekends too.',
  commonIntro:
    'Houses in Wetherington are young, so a cut service here traces back to one of these more often than to equipment that simply wore out:',
  localFaqs: [
    {
      q: 'Why does only half my house in Wetherington have power?',
      a: 'Usually the house has lost one of its two legs, either where the drop connects overhead or in the panel. Expect some rooms live and others dead, plus a range or dryer that half works. Don’t leave it, because uneven voltage on a single leg is hard on motors and control boards.',
    },
    {
      q: 'Does a condo owner in Wetherington need association approval for meter work?',
      a: 'Sometimes. Where several units share one meter bank or the work touches the building’s exterior, the association may have to sign off before we start. Bring us the tag or notice, and we will talk to the manager, diagnose the bank and hand the owners a written price.',
    },
  ],
  overrides: {
    ctaLine: 'Power back on for newer homes in Wetherington after a cut service',
    band1Heading: 'Common Causes of Electricity Disconnection in Wetherington',
    commonSituations: [
      'A limb from a mature tree that tore the weatherhead off a 1990s house',
      'Wiring for a finished basement or addition that was never inspected, found when the utility came out',
      'A garage-corner meter box that a reversing car pushed off the wall',
      'A burned spot on one position of a condo building’s meter bank',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Wetherington',
        body: 'Your meter is already out, so the aim is one visit that finds everything an inspector would. Our electrician starts up at the roofline, where storm damage usually shows first, and works down past the entrance cable and socket into the panel and its grounding. What turns up decides whether it is a mast, meter base or panel job, and which permit applies. We repair the failed part, correct any bonding or grounding the code now asks for, and book the inspector the day you sign the price. When the meter is reset, breakers go back on singly, and you get notes on anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Wetherington',
        body: 'On a house this new, the red tag mostly points back to recent work, a basement circuit nobody had inspected, or to storm damage that left conductors bare. Crews hang the tag as a do-not-energise order. Patching the visible damage changes nothing; only correction of the cause by a licensed electrician, then an inspector’s approval, releases it. Any paper taped to your door is worth saving for us, since it tends to name the problem. Should the meter be gone or locked, keep your hands off. Ohio counts meter tampering as a crime, and on a faulted service it re-energises equipment found unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Wetherington',
        body: 'Houses in Wetherington that stood empty through a sale or an estate settlement sometimes need the service looked over before a meter goes back in. With 1990s equipment that is usually a quick check. If the panel turns out to need replacing, our labour and the permit and inspection run about level whether we put back the original setup or a modern service sized for the house, so we quote it both ways.',
      },
    ],
    whyTitle: 'Why Homeowners in Wetherington Choose Us for Disconnection Repair',
    whyParagraph:
      'Without its service a house loses heat and sump pump together, so a cut here is urgent work for us. Licensed electricians complete the repair the utility asked for, file the permit, meet the inspector and price it first.',
    sharedFaqs: [
      {
        q: 'How is the price set for disconnection repair in Wetherington?',
        a: 'Price follows the failure. Swapping one meter base after a storm costs far less than rebuilding the service from weatherhead to panel. When the diagnosis is done, a single flat figure goes on paper, and nothing proceeds until you accept it. Fees the utility may charge are its own business, kept off our invoice. Qualifying homeowners can finance.',
      },
      {
        q: 'How soon can power be restored to a house in Wetherington?',
        a: 'Our part is often wrapped up in a single day. The inspector’s schedule, run by the building department and not by us, decides most of the wait. Booking that inspection the moment you approve the work cuts the delay more than anything else, and we arrange the reconnect right after.',
      },
      {
        q: 'Am I allowed to reinstall the meter or restore power myself?',
        a: 'No. The meter and any lock on it are the utility’s, and Ohio law makes interfering with them a criminal offence. Whatever fault caused the cut is waiting behind that meter too, so restoring power early only energises the problem. Repair and inspection have to happen before anything is switched on.',
      },
    ],
  },
};
