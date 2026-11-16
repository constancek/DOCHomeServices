import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northbrook: LocationServiceCopy = {
  localParagraph:
    'In Northbrook, the slow part of getting a cut service back is rarely the wiring. It’s the inspection. Duke Energy won’t reinstall the meter until a licensed electrician corrects the owner’s side and, typically, an inspector approves it. Census figures put about half the houses off Colerain Avenue and Pippin Road in the 1960s and 1970s, mostly detached, with a handful of apartment buildings. Panels from those decades are often the originals, and grounding can trail code. We locate the fault and write the number down before work starts.',
  emergencyParagraph:
    'Better than one home in three heats with electricity, so a dead meter in Northbrook can stop the furnace or heat pump along with the air conditioning and sump pump. Step back from a meter box dangling loose. A fallen wire means 911, then the utility. An electrician usually arrives that same day, weekends too.',
  commonIntro:
    'Behind most dead services on the 1960s and 1970s streets of Northbrook, we find one of these:',
  localFaqs: [
    {
      q: 'Who inspects electrical repairs in Northbrook?',
      a: 'Northbrook sits in unincorporated Colerain Township, where Inspection Bureau, Inc. (IBI) takes electrical permits. We submit for the riser, meter socket or panel work and put in for the inspection when you sign, since the utility wants that approval on file before the meter goes back.',
    },
    {
      q: 'What if wiring with no permit turns up on a house in Northbrook?',
      a: 'Then it was never inspected, and the utility may keep the power off until it has been. We go through that work, correct whatever misses code, file the permit after the fact and get it inspected, so the approval the utility asks for exists on paper.',
    },
    {
      q: 'What should renters in Northbrook do if the service is cut?',
      a: 'Contact the landlord or management office in writing and keep whatever notice or tag was posted. Ohio’s ORC 5321.04 requires owners to keep the electrical fixtures and systems they supply in decent, safe repair, which is why the owner calls us. We get the service running; lease questions stay with them.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for 1960s and 1970s homes in Northbrook',
    band1Heading: 'Common Causes of Electricity Disconnection in Northbrook',
    commonSituations: [
      'A finished basement on a 1970s house whose new circuits never had a permit',
      'An original 1960s panel with a ground the inspector refuses to pass',
      'One burned position on the meter bank of a small apartment building',
      'Half the rooms dead, heat pump included, after one leg dropped at the connection',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Northbrook',
        body: 'Because the power is already gone, the diagnosis covers everything from the weatherhead and riser down to the ground rod, entrance cable, socket and breaker panel included. That tells us whether you’re looking at a mast, socket or panel job and what permit to file. The inspection request goes in alongside your booking, since in Colerain Township that appointment, not the repair, usually sets the timeline. Whatever failed is replaced, and grounding plus bonding are corrected to present code even if they played no part. Once the meter is back, breakers return singly, the directory is rewritten and you get written notes on anything to keep watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Northbrook',
        body: 'People are often surprised by where the utility’s ownership stops. It owns its line and the meter, but not the box that meter clips into. That box, the riser, weatherhead, entrance cable and breakers are the homeowner’s, so the repair falls to you. Tags around these streets mostly cite an unsafe panel, a missing ground, exposed conductors or a failed inspection, and each one says the service stays dead. Only a licensed fix of the cause plus an inspector’s sign-off clears it. Hold on to the hanger. Leave a locked meter alone; in Ohio, tampering with metering equipment is a criminal offence.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Northbrook',
        body: 'Houses sold after sitting empty, and apartments between leases, get extra caution here before power is restored, since a 1960s or 1970s panel may have drifted well out of code. A brief look sometimes does it; other times the panel must go, and you’ll know which once we’ve seen it. Putting the old equipment back and fitting a correctly sized new service cost the same labour, permit and inspection, so we quote each.',
      },
    ],
    whyTitle: 'Why Homeowners in Northbrook Choose Us for Disconnection Repair',
    whyParagraph:
      'When the service dies, the sump pump and often the heat die with it, so we answer quickly. Our licensed electricians fix what the utility flagged, handle the permit, meet the inspector on site and quote first.',
    sharedFaqs: [
      {
        q: 'What will reconnecting my service cost in Northbrook?',
        a: 'It follows the failure. A single meter socket is a fraction of the work of a full service replacement. Following the diagnosis, you get one flat written figure before anything starts, and the utility bills its own charges separately. Qualifying homeowners may finance.',
      },
      {
        q: 'How long will a disconnection repair take in Northbrook?',
        a: 'Our repair typically fits within a single day. The inspection runs on a separate calendar and usually decides when the lights return, which is exactly why we request it at booking rather than at the end. Nothing else we do saves as much time.',
      },
      {
        q: 'Can I bypass the meter to get power back in Northbrook?',
        a: 'No. A meter jumper or a broken lock is tampering with utility equipment, which is a crime in Ohio. It’s also dangerous, because the service was shut off over a fault and bypassing it would energise wiring already judged unsafe.',
      },
    ],
  },
};
