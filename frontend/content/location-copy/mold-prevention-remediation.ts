import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Per-neighborhood mold prevention and remediation copy, written from each
// neighborhood's real local facts in content/locations.ts.
// Currently Hyde Park, Norwood, and Madisonville — add further neighborhoods
// here as their copy is written.
export const moldPreventionRemediationCopy: Record<string, LocationServiceCopy> = {
  'hyde-park': {
    intro:
      'Mold in a Hyde Park home is a water problem before it is a mold problem. We find and repair the leak feeding it, contain and remove what cannot be cleaned, and dry the space to measured readings — usually reaching homes around Hyde Park Square the same day. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is built around large early-1900s homes — Tudors, colonials, and brick foursquares — and most of them have a below-grade lower level that runs humid for months at a time. When those lower levels were finished with drywall, carpet, and built-in cabinetry, the house gained a room and lost the ability to notice a slow leak. Growth starts behind the finish and the first sign is a smell.',
      'The second Hyde Park factor is plaster and original millwork. Plaster hides moisture well and gives very little warning, so by the time staining shows at a baseboard the framing behind it has often been damp for a long while. That is worth knowing because it changes what we open up: on these houses we take readings through the wall before we cut anything, rather than stripping trim that took a craftsman a week to install.',
    ],
    commonIntro:
      "In Hyde Park's large early-1900s homes with finished, below-grade lower levels, the mold situations we are called for most often are:",
    localFaqs: [
      {
        q: 'My Hyde Park basement smells musty but I cannot see anything. Where is it?',
        a: 'Usually behind the finish rather than on it. In a finished lower level the common spots are the back of drywall along an exterior wall, carpet pad, and the underside of stored material sitting on a slab. We start with moisture readings and the plumbing — a weeping supply line, a slow drain joint, or a failed sump can feed growth for a year without ever making a puddle you would notice. If we cannot locate a source and you need the extent established behind walls, we will point you to an independent testing company rather than test our own work.',
      },
      {
        q: 'Will you have to tear out my original plaster and millwork?',
        a: 'Not if we can avoid it, and often we can. Plaster is not the problem — the framing and any drywall or insulation behind it is. We take readings first and open the smallest area that lets us reach the wet material and the leak. Trim comes off carefully and goes back where the wood itself is sound, because on a century-old Hyde Park house the millwork is frequently worth more than the repair.',
      },
    ],
  },
  norwood: {
    intro:
      'Mold in a Norwood home comes back unless the water feeding it is fixed. We are plumbers first, so we repair the source, contain and remove the affected material, and dry it properly. Norwood sits in the middle of our service area. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, and it is built dense — early-1900s homes and brick two-families packed onto small lots with shared walls. That layout is the whole story for mold here. A leak on one side of a party wall wets framing that belongs to both units, and the household that smells it first is often not the household with the failed pipe.',
      'The other Norwood pattern is ventilation. Tightly packed housing of this era was not built with much airflow, and a lot of it still has no bathroom exhaust fan or one venting into an attic. Add a kitchen and a bathroom stacked in a narrow floor plan and you get a house that stays humid, which turns a small plumbing leak into visible growth far faster than the same leak would in a larger, drier home.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and brick two-families, the mold situations we handle most often are:",
    localFaqs: [
      {
        q: 'The mold is on my wall but I think the leak is in the other half of the two-family. What now?',
        a: 'We can only work where we have access and authorisation from whoever controls each side, so the practical first step is usually a conversation with the neighbour or the owner. What we can do immediately is take readings on your side and document which direction the moisture is travelling, which is normally what settles the question of where it originated. Remediating only your side while the source sits behind a shared wall is work that will not hold, and we will tell you that rather than take the job twice.',
      },
      {
        q: 'Do I need a permit for mold work in Norwood?',
        a: 'Not for remediation and drying on their own. Norwood is a separate municipality with its own building and utility authority, so where the job turns into pipe or lateral repair the permit goes through Norwood rather than Cincinnati or MSD. It matters more often here than people expect, because on these houses the moisture source is frequently original supply or drain pipe rather than a fixture.',
      },
    ],
  },
  madisonville: {
    intro:
      'Mold in a Madisonville home almost always traces back to a moisture source that was never fixed. We repair the plumbing behind it, remove what cannot be cleaned, and dry to measured readings, for homes around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) mixes early-1900s housing with newer infill, and the mold work here has one dominant cause: renovation over an unresolved leak. New drywall, new flooring, and a finished basement go in over original plumbing and an old damp spot that was painted rather than repaired. The finishes look new, so nobody suspects them, and the growth is discovered a year or two later by smell.',
      'That history changes how we approach the first visit. We are less interested in the visible patch than in what was done to the house and when, because the date of the renovation and the age of the pipe behind it usually tell us where the water is coming in. Fixing that is the difference between remediation that holds and remediation you pay for twice.',
    ],
    commonIntro:
      "Across Madisonville's mix of early-1900s homes and newer infill, the mold situations we see most often are:",
    localFaqs: [
      {
        q: 'My Madisonville house was renovated before I bought it and now there is mold. Was it covered up?',
        a: 'Sometimes, though more often it was simply not looked for. The common version here is old staining that was primed and painted over while the leak behind it was left alone, or a basement finished without the water source being addressed. We do not guess at intent. We find where the water is entering, document it with photos and readings, and repair it. If you need that record for a dispute with a seller or an insurer, an independent testing company is the right party to establish the extent rather than us.',
      },
      {
        q: 'How fast can you reach Madisonville, and is mold an emergency?',
        a: 'Madisonville is centrally located on the east side and quick for us to reach. Established mold is generally not an emergency — it took months to get there and a few days will not change it much, so booking a proper look is better than a rushed one. Active water is different. If something is leaking right now, call today, because mold can begin establishing in damp material within roughly 24 to 48 hours and drying it properly costs a fraction of remediating it later.',
      },
    ],
  },
};
