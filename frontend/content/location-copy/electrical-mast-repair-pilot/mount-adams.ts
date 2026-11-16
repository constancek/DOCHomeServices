import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAdams: LocationServiceCopy = {
  localParagraph:
    'Mount Adams has half its housing dating to 1939 or earlier, by the Census count, and much of it is doubles and small walk-up buildings clinging to the hill above downtown. On those tall, narrow roofs the service pipe usually climbs right through the shingles, and the conductors inside may be whatever an electrician pulled generations ago. Steep lots make the ladder work slow. Every piece from cap to panel gets looked at, and you approve a fixed figure before anything comes apart.',
  emergencyParagraph:
    'A pipe wrenched sideways by a falling limb, arcing at the cap, or one floor of the building suddenly dark needs us quickly. If a wire ends up across a stairway or sidewalk, keep people back and get Duke Energy Ohio on the phone, because it may be carrying current. House-side repairs usually start that same day, weekends no different.',
  commonIntro:
    'Hillside doubles and walk-ups in Mount Adams tend to show mast trouble in these four ways.',
  localFaqs: [
    {
      q: 'Who pays for a bent mast on a rented double in Mount Adams?',
      a: 'The building owner. About two of every three homes on the hill are rentals, so this comes up constantly. Under ORC 5321.04, an Ohio landlord keeps the electrical fixtures and systems they supplied safe and working. Tenants should write to the owner with a photo, and the owner calls us. Leases are their business, wiring is ours.',
    },
    {
      q: 'Can your crew reach a mast on a steep lot in Mount Adams?',
      a: 'Yes. Hillside lots just take more setup, so on the first visit we work out where ladders can stand safely and how materials come up from the street. That setup is priced into the flat quote, and the utility shutoff gets scheduled around it so the power isn’t off longer than needed.',
    },
  ],
  overrides: {
    ctaLine: 'Service pipe and weatherhead repair for doubles and walk-ups in Mount Adams',
    band1Heading: 'Signs You Need Service Mast Repair in Mount Adams',
    commonSituations: [
      'A roof pipe on a tall double cocked toward the street after a gale',
      'Rust trails staining the brick beneath the riser straps',
      'A weatherhead cap that has worked free of a narrow gable',
      'Lights in the top-floor unit wavering every time the wind rises',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Mount Adams',
        body: 'Whether the pipe stays or goes depends on its condition, not the building’s age. Straight pipe with a single weak point, like a strap that has let go, a cap needing new sealant or a split roof boot, gets that one fix. Bent, pitted or limb-crushed pipe is swapped out whole. Conductor jackets that crack or powder when flexed are never salvaged. In a two-family or a small walk-up we open every meter socket and the panels before pricing, so the new run suits that building. Where those panels are worn out, we’ll mention home rewiring and leave the call with you.',
      },
      {
        title: 'Storm Damage to Service Masts in Mount Adams',
        body: 'Up on the hill, a gusty week rocks a roof pipe back and forth until the seal around it lets go. A falling limb on the overhead wires does that same job in an instant. The pole barely moves, because it’s built to; the pipe on your roof is the part that bends. Once the shingle seal cracks or the wire clamp slips, water heads down into the meter base and the utility keeps the power off until it’s repaired. Claims for that belong with your home insurer. After any storm, check from the sidewalk that the pipe stands plumb, the cap is tight and the meter box sits flat.',
      },
      {
        title: 'The Utility’s Side and Yours in Mount Adams',
        body: 'Duke’s part ends where the overhead wires clamp to your wall, and the meter is theirs too. The cap, pipe, riser, conductors and meter box belong to the building owner. The utility kills the feed, we finish the electrical work in a single day as a rule, Inspection Bureau, Inc. (IBI) checks it for the city, and the feed returns. Filing at booking stops that chain from stalling.',
      },
    ],
    whyTitle: 'Why Owners and Landlords in Mount Adams Choose Us for Mast Repair',
    whyParagraph:
      'A licensed electrician walks your service entrance from cap to panel before quoting. We bring the pipe up to code, reflash where it leaves the roof and start the permit the day you book, at a price you agreed.',
    sharedFaqs: [
      {
        q: 'How much should a mast repair cost in Mount Adams?',
        a: 'It depends on what we find once the service entrance is opened up. Swapping a strap or resealing a cap is the small end, and a new pipe with fresh conductors and flashing is the large end, permit included. We quote one flat number before starting, and qualifying homeowners can finance it.',
      },
      {
        q: 'How long will a building in Mount Adams be without power?',
        a: 'The electrical work itself is normally a single day. What sets the calendar is the order of visits, with the utility shutting off, the inspector signing and the utility turning things back on. Because we request the inspection the same day you book, those gaps stay small.',
      },
      {
        q: 'Do storms really bend masts on buildings this old?',
        a: 'More than anything else does. A branch landing across the overhead wires levers the roof pipe out of line, and wind on the hill keeps working at it. Once water can get past the loosened seal or clamp, the utility won’t restore service until the repair is done and signed off.',
      },
    ],
  },
};
