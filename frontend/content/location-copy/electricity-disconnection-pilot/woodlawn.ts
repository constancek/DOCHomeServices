import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const woodlawn: LocationServiceCopy = {
  localParagraph:
    'A door hanger from Duke Energy Ohio saying it won’t reconnect a home in Woodlawn has one meaning: our licensed electrician must repair the owner’s equipment, and usually an inspector must approve that repair. Renters fill two of every three households here, roughly half the homes are in complexes of five units or more, and the median build year is 1987, by Census figures. On housing that new, a failed inspection or unpermitted work is a likelier cause than age. We diagnose; the owner approves a written price.',
  emergencyParagraph:
    'A pulled meter in a home in Woodlawn means no furnace, no air conditioning and a sump pump that won’t kick on, with the damage growing daily. Walk wide around a meter box hanging off the building. If you see a wire down, 911 and the utility hear about it first. Most calls see an electrician that day, weekends too.',
  commonIntro:
    'With apartment buildings and newer houses making up most of Woodlawn, a cut service here usually comes back to one of these:',
  localFaqs: [
    {
      q: 'The utility left a door hanger at my place in Woodlawn. Should I keep it?',
      a: 'Yes. A tag, hanger or note usually names why the service was disconnected, which saves diagnosis time and gets the right repair started sooner. Without one, we start at the service and work in. Renters should give a copy to the landlord in writing, since the owner books the repair.',
    },
    {
      q: 'Who is responsible when a rental in Woodlawn has its power cut?',
      a: 'The landlord. Under ORC 5321.04, whatever electrical equipment an Ohio landlord supplies has to be kept safe and in repair. Tell the owner, or the complex office, about the cut in writing and save a copy. We restore power, not leases, and the owner sees our price before work.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for apartments and homes in Woodlawn after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Woodlawn',
    commonSituations: [
      'Electrical work done without a permit that the utility would not energise',
      'A recent remodel that failed inspection and left the service off',
      'A burned position on the meter bank of an apartment building',
      'A mast on a 1980s house bent by a falling limb or a reversing truck',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Woodlawn',
        body: 'Sitting in the dark in Woodlawn, you need the real fault found, not a guess at one loose wire. So the whole service gets traced, from the service head, riser and entrance conductors outside to the meter socket or bank, the panel, the grounding electrode and the bonding. That points to the repair and the permit. We correct what failed, and any grounding below current code since the inspector tests it, then file the permit and ask for the inspection the day the price is approved. After the reconnect, circuits go live one at a time and the owner receives notes.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Woodlawn',
        body: 'Because so much of Woodlawn was built after 1980, tags here often trace to work that never got a permit or flunked its inspection, though unsafe panels, bare conductors and heat-damaged sockets get tagged too. The tag is meant literally, and no tidying will shift it. It comes down only after our licensed electrician puts the underlying fault right and an inspector passes that repair. Give us the tag or door hanger, since the reason on it shortens our diagnosis. A pulled or locked meter must be left alone; tampering with one is a crime in Ohio, and it would send power into a service already found unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Woodlawn',
        body: 'Between leases, a flat or rented house in Woodlawn may stand unpowered long enough to warrant a fresh look at the service before any meter is set. Equipment from the 1980s onward usually clears with a brief inspection, and occasionally the answer is a new panel. Refitting the old gear and fitting a modern service of the right size cost the owner about the same in labour and permits, so owners get two prices.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Woodlawn Choose Us for Disconnection Repair',
    whyParagraph:
      'In Woodlawn, a dark apartment means a cold or overheated household and an idle sump pump, so these jobs jump ahead. Licensed electricians make the fix the utility wants, see the permit and inspection through, and price it first.',
    sharedFaqs: [
      {
        q: 'How much will disconnection repair cost in Woodlawn?',
        a: 'It depends on the failure. Correcting one uninspected circuit is nothing like replacing a building’s meter bank. We diagnose, give the owner one flat price in writing, and begin only after approval. The utility bills any of its own charges separately. Financing is available for qualifying homeowners.',
      },
      {
        q: 'How long could a home in Woodlawn be without power?',
        a: 'Our side usually wraps up within one working day. The inspector’s schedule governs what follows, so we put the request in as soon as the owner approves, which shortens the gap more than anything else. Once the inspection passes, we contact the utility about the reconnect.',
      },
      {
        q: 'Can a tenant or owner turn the power back on themselves?',
        a: 'No. Breaking a utility lock or refitting a pulled meter is a criminal offence in Ohio, whoever does it. And the problem that got the service cut hasn’t moved, so early power simply re-energises it. Power comes back after the licensed repair and the inspector’s sign-off.',
      },
    ],
  },
};
