import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Per-neighborhood basement flood plumbing copy, written from each
// neighborhood's real local facts in content/locations.ts.
// Currently Hyde Park, Norwood, and Madisonville — add further neighborhoods
// here as their copy is written.
export const basementFloodPlumbingCopy: Record<string, LocationServiceCopy> = {
  'hyde-park': {
    intro:
      'Water in a Hyde Park basement? Turn the power to that level off, then call (513) 586-5107. We trace which failure let the water in — pump, drain, supply line, or sewer lateral — and repair that one rather than guessing.',
    relevance: [
      'Hyde Park (ZIP 45208) runs on large early-1900s homes — Tudors, colonials, and brick foursquares — and a great many of them have finished lower levels holding carpet, drywall, and cabinetry. A flooded basement here is not a wet concrete floor you sweep out. It is finished space, which is why finding the actual source in the first hour matters more in Hyde Park than almost anywhere we work.',
      'The other Hyde Park factor is above ground: mature trees standing over century-old sewer laterals. Roots find the joints in old clay pipe, the lateral slows, and the first sign is water coming up at the basement floor drain during a heavy rain. That is a sewer problem wearing a groundwater costume, and the repair is nothing like a sump pump.',
    ],
    commonIntro:
      "In Hyde Park's large early-1900s homes with finished lower levels, the basement flooding we are called for most often is:",
    localFaqs: [
      {
        q: 'Water came up through the floor drain in my Hyde Park basement. Is that the sewer?',
        a: 'Usually, yes. Water rising at the floor drain rather than seeping in at the walls points to the main line or the lateral, and in Hyde Park the common cause is tree roots in a century-old clay lateral. We camera the line before quoting anything, because the difference between a clearing and a lateral replacement is decided by what the camera shows, not by how bad the flood looked.',
      },
      {
        q: 'My finished lower level flooded. Do you handle the drywall and carpet too?',
        a: 'We handle the plumbing failure, and our water damage and structural drying crews handle what it soaked into. Most finished Hyde Park basements need both. What we will not do is run drying equipment for a week over a source that is still active — the pipe or the pump gets fixed first, then the drying starts.',
      },
    ],
  },
  norwood: {
    intro:
      'Flooded basement in Norwood? Power to that level off first, then call (513) 586-5107. We find which failure let the water in and repair it, and we pull Norwood permits through Norwood — it is its own city, not part of Cincinnati.',
    relevance: [
      'Norwood (ZIP 45212) is a separate city entirely surrounded by Cincinnati, with its own sewer and permitting authority. That is not trivia when your basement floods. A lateral repair or a new discharge line goes through Norwood, and contractors who work mostly in Cincinnati regularly pull the wrong permit here or skip it altogether.',
      'The housing is a dense grid of early-1900s homes and brick two-families from the streetcar and factory years, on small lots. Small lots are the practical problem: there is often very little room to route a sump discharge far enough from the foundation, so the water gets pumped out and walks straight back in. Shared laterals between neighbouring properties are common too, and water leaving one basement frequently ends up heading toward the next.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and brick two-families on small lots, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: 'My Norwood lot is too small to run the sump discharge anywhere useful. What are my options?',
        a: 'This is the most common Norwood problem we solve. If the discharge ends a few feet from the foundation, the pump is recycling the same water and will run itself to death doing it. The usual fixes are a buried line carried out to the street or an approved storm connection, both of which go through the city of Norwood for permitting. We will tell you on site which of those your lot actually allows before you commit to anything.',
      },
      {
        q: 'Water came from the neighbouring property into my basement. Whose plumbing is it?',
        a: 'Often a shared lateral, which is why it is worth establishing before anyone starts digging. We camera from your cleanout and document where the blockage sits relative to the property line. If it turns out to be on the neighbouring side or in the city portion, we will say so — you should not be paying to repair someone else’s pipe, and Norwood handles its own mains rather than Cincinnati.',
      },
    ],
  },
  madisonville: {
    intro:
      'Basement flooding in Madisonville? Cut the power to that level, then call (513) 586-5107. We trace the source — pump, drain, supply line, or lateral — before we quote, for homes around Madison Road and Whetsel Avenue.',
    relevance: [
      'Madisonville (ZIP 45227) has seen steady reinvestment, and the classic failure here comes straight out of that: a newly finished basement sitting on original, untouched plumbing. The framing, the flooring, and the drywall are two years old. The cast-iron drain line and the sump setup underneath them are a hundred. When the old work finally goes, it goes into the new work.',
      'The mix runs both directions on Madison Road and Whetsel Avenue — early-1900s homes next to newer infill — and they fail differently. Older houses lose a drain line or a corroded supply. Newer builds tend to fail at the pump: a stuck float, a check valve that lets the pit refill, or a discharge that was never carried far enough from the house.',
    ],
    commonIntro:
      "Across Madisonville's early-1900s homes and newer infill, the basement flooding we see most often is:",
    localFaqs: [
      {
        q: 'We just finished our Madisonville basement and it flooded. Should we have replaced the plumbing first?',
        a: 'In an early-1900s house, generally yes — and this is the single most common regret we hear in Madisonville. A camera on the drain line and a load test on the sump before the framing goes up costs a fraction of what it costs to open a finished wall afterwards. If you are still in the planning stage, have someone look at the old pipe first. If you are already past that, we can usually work through access panels rather than tearing out whole runs.',
      },
      {
        q: 'The water only shows up at the bottom of the walls after heavy rain. Is that a plumbing job?',
        a: 'Probably not, and we would rather tell you now than after a truck visit. Water entering at the wall base or the floor-to-wall joint every time it rains hard, with the drains and the pump testing sound, is an exterior drainage and grading problem. That is a waterproofing contractor, not us. We can confirm which of the two you have — that answer is worth more to you than a pump you did not need.',
      },
    ],
  },
};
