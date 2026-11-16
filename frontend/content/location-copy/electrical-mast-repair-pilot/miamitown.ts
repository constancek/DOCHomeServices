import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const miamitown: LocationServiceCopy = {
  localParagraph:
    'Four of every five households in Miamitown rent, and most live in apartment buildings rather than houses, by Census figures. So whoever calls us about a mast is normally a landlord or property manager, sometimes for a building where several apartments hang off one entrance. Almost a third of the housing went up before 1940, and on those older buildings the pipe, roof seal and conductors may be untouched. We walk the entire entrance first, then fix a price with the owner.',
  emergencyParagraph:
    'Treat it as urgent if a limb has ripped the mast away, the cap is sparking or apartments in one building have lost power. Back away from a fallen wire and call your utility, since it may be live. Tenants then let the landlord know. We reach most building-side calls the same day, weekends included.',
  commonIntro:
    'In Miamitown, apartment buildings and older houses tend to warn us in these ways.',
  localFaqs: [
    {
      q: 'As a tenant in Miamitown, who do I tell about flickering lights?',
      a: 'Let the landlord or manager know, in writing if possible. Under ORC 5321.04, an Ohio landlord has to keep the electrical systems they supply in good and safe working order, so it’s the owner who books and signs off on the repair. Leases aren’t our trade, masts are, and we deal straight with the owner.',
    },
    {
      q: 'Our building in Miamitown has rust around the meter. Could the mast be to blame?',
      a: 'Quite often. When the cap at the top of the mast loosens, rain can slide down inside the conductors into the meter base and on toward the panel, rotting connections out of view. On a building with several meters, we trace that run to each one before quoting.',
    },
  ],
  overrides: {
    ctaLine: 'Mast repair for rental buildings and older homes in Miamitown',
    band1Heading: 'Signs You Need Service Mast Repair in Miamitown',
    commonSituations: [
      'Tenants in two or more apartments complaining that lights dim at once',
      'Rust tracks down the brick or siding beneath the weatherhead of an older building',
      'A meter box leaning off the wall at the top',
      'Conductor jackets near the mast cap that have gone hard and split',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Miamitown',
        body: 'In Miamitown, some owners assume an old building automatically needs a full replacement, but the inspection settles it, not the date on the deed. A straight, sound pipe with a slack strap, a cap wanting fresh sealant or tired flashing gets repaired in place. Kinked, rusted or storm-battered pipe is swapped out, as is any conductor whose insulation has split or gone chalky. Our electrician studies the panel, meter socket and cable before drawing up a replacement, so it matches how the building is really wired. For the oldest structures, home rewiring may be worth a conversation.',
      },
      {
        title: 'Storm Damage to Service Masts in Miamitown',
        body: 'Most of the mast failures we’re called to start with bad weather. A limb that drops onto the drop wires drags on the building’s end, which gives long before the pole does. Persistent wind can do it too. Once that lean splits the roof seal or pries loose the hook the wires hang from, rain finds its way in, and the utility leaves the building dark until it’s corrected. Damage on the owner’s side is for the building’s insurer, not the utility. After branches fall, look back from across the street to see if the mast stands true.',
      },
      {
        title: 'The Utility’s Side and Yours in Miamitown',
        body: 'In Miamitown, the property owner holds everything from the cap down, including the mast, riser, conductors and meter box. Unincorporated Hamilton County electrical work is inspected by Inspection Bureau, Inc. (IBI). The utility pulls the service, we do our part in a single day, IBI looks it over, and power comes back once it passes. For that reason we file for the permit the day the owner books.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Miamitown Choose Us for Mast Repair',
    whyParagraph:
      'A licensed electrician inspects the whole entrance for the owner, rebuilds or repairs the mast to code and seals the roof opening. The permit goes in at booking, and the owner settles the flat price before we start.',
    sharedFaqs: [
      {
        q: 'What sets the price of mast repair on a rental building in Miamitown?',
        a: 'Scope drives it. After an inspection of the entrance, the owner gets one flat figure that reflects repair or full replacement, the length of cable and amount of flashing to replace, and the permit. Nothing starts without approval, and owners who qualify can finance.',
      },
      {
        q: 'How long will tenants be without power during the work?',
        a: 'Our own electrical work usually wraps within a single day. The utility’s disconnect, the inspection and the reconnect together decide how long the building sits dark, since power returns only after a pass. Booking the inspector alongside the job keeps tenants’ outage short.',
      },
      {
        q: 'Do storms damage masts on apartment buildings as often as on houses?',
        a: 'They do, and storms are behind most of our calls. A limb on the street wires pulls on the building’s mast, not the pole, and can loosen the roof seal so rain slides down the conductors into the meter base. Plain wind can do it over a longer stretch.',
      },
    ],
  },
};
