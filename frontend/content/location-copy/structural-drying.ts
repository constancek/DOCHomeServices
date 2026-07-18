import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Per-neighborhood structural drying copy. The angle here is the days AFTER
// the water is out — equipment, daily meter readings, and a dry standard taken
// from an unaffected part of the same house. Each neighborhood is written from
// its real housing stock, because those materials dry at different rates.
export const structuralDryingCopy: Record<string, LocationServiceCopy> = {
  'hyde-park': {
    intro:
      'Structural drying in Hyde Park takes longer than in a modern house, and the reason is the materials. Plaster and solid oak hold water and give it up slowly, so we meter them daily against a dry standard from an unaffected room and pull the equipment when the numbers match. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is built around large early-1900s homes — Tudors, colonials, brick foursquares — and most of them still have their original plaster walls and solid oak flooring. Neither behaves like drywall and engineered plank. Plaster is dense and sits over wood lath, so water travels sideways inside the wall and comes back out over days rather than hours. Oak releases moisture slowly through its face, which is why a floor here can read fine on top and still be wet three-quarters of the way down.',
      'The finished lower levels common around Hyde Park Square add the second problem. A finished basement has carpet, pad, drywall, insulation and cabinet bases all in one space, and each of those dries at a different rate. Reading one and assuming the rest have followed is how a room gets called dry while the wall cavity behind the built-ins is still holding water.',
      'Practically, that means equipment stays in a Hyde Park house at the longer end of the usual three to five days, sometimes past it. We would rather tell you that at the start than move the meter goalposts on day four.',
    ],
    commonIntro:
      'In Hyde Park homes with plaster walls, oak floors, and finished lower levels, the drying work usually involves:',
    localFaqs: [
      {
        q: 'How do you dry plaster walls in a Hyde Park home without wrecking them?',
        a: 'Slowly, and with as few openings as we can get away with. Plaster over wood lath is dense, so it does not release moisture the way drywall does, and it also does not tolerate being pushed hard with heat. We set air movers to keep the surface moving and dehumidifiers to hold the room dry, then meter the same points daily and let it come out at its own rate. Where a wall cavity is holding water we would rather make a few small controlled openings low on the wall, out of sight, than take out a plaster wall that has been there a century. It usually adds a day or two compared with drywall. That is normal, not a problem.',
      },
      {
        q: 'My oak floor feels dry. Do you still need to leave equipment running?',
        a: 'Probably yes, and that gap is the whole point of the service. Solid oak of this era gives up surface moisture first, so a floor can feel dry underfoot while the boards and the subfloor beneath are still well above where they should be. We meter the boards and the subfloor separately and compare both against oak in an unaffected part of your house. If those numbers have not met, pulling the equipment now is what produces a cupped floor in three months.',
      },
    ],
  },
  norwood: {
    intro:
      'Structural drying in Norwood has to account for where the water went, not just where it landed. In these early-1900s houses and brick two-families, wall cavities carry water further than the visible damage suggests, so we map it with meters before setting equipment. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, entirely surrounded by Cincinnati, and it was built dense — early-1900s homes and brick two-families on small lots, many of them balloon-framed. In balloon framing the wall cavities run uninterrupted for a full storey or more, which means water that enters a wall upstairs can end up sitting on the sill plate in the basement. The wet drywall you can see is often the smallest part of what we have to dry.',
      'Shared walls are the other Norwood factor. In a two-family, moisture does not respect the property line. We regularly meter one unit and find the readings on the other side of a shared wall are just as high, which means drying only the unit that called us leaves half the wall wet and the problem intact. Where we have access and authorisation from whoever controls each side, we set equipment on both.',
      'None of that changes the method. It changes how many points we meter and how far from the obvious damage we start looking.',
    ],
    commonIntro:
      'In Norwood’s dense early-1900s homes and brick two-families, the drying work usually involves:',
    localFaqs: [
      {
        q: 'The wet spot is upstairs. Why are you metering my Norwood basement?',
        a: 'Because in a balloon-framed house of this era the wall cavity may run straight from the upper floor down to the sill plate with nothing blocking it. Water gets into that cavity, runs the full height, and pools at the bottom on framing you cannot see. If we dry only the room where the water appeared, the structure stays wet at the base of the wall and you get the smell, and eventually the mold, months later. Metering low is quick and it either rules the cavity out or tells us where the equipment actually needs to go.',
      },
      {
        q: 'Do you have to dry the neighbouring unit in a two-family as well?',
        a: 'If the readings say the shared wall is wet on both sides, then drying one side alone does not finish the job — the wall keeps feeding moisture back through. We cannot set equipment in a unit we do not have permission to enter, so what we do is meter what we can access, document it, and give you the readings to take to the other owner or to the insurers. Most of the time that record is what gets the second side opened up. Where both sides authorise us, we run it as one drying job with one reading log.',
      },
    ],
  },
  madisonville: {
    intro:
      'Structural drying in Madisonville depends on what your house is made of, and along Madison Road and Whetsel Avenue that varies house to house. Original plaster and old framing dry at one rate, modern drywall and engineered flooring at another. We meter both and dry to the slower one. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is a mix — early-1900s homes alongside newer infill, and plenty of older houses that have been renovated in part. That mix is the drying problem here in one sentence. Original plaster and old-growth framing hold moisture and release it slowly. Modern drywall and engineered flooring take water on fast and can often be dried faster, but engineered plank delaminates if it stays wet, so speed matters more with it, not less.',
      'The renovated houses are the awkward ones. A finished lower level installed a few years ago sitting on 1920s framing means two materials in the same room on completely different clocks. If we ran equipment until the drywall hit target we would be pulling out with the joists behind it still wet.',
      'So we meter each material against its own dry standard, taken from the same material elsewhere in your house, and the equipment stays until the slowest one is finished. That is usually what decides whether a Madisonville job runs three days or five.',
    ],
    commonIntro:
      'Across Madisonville’s mix of early-1900s homes and newer infill, the drying work usually involves:',
    localFaqs: [
      {
        q: 'My Madisonville house is old but the basement was finished recently. Does that change the drying?',
        a: 'It changes what we measure. New drywall, new insulation, and engineered flooring sit directly against original framing and subfloor that are decades older, and those two dry at different rates. Drywall can hit its target while the joists behind it are still well above theirs. We take a separate dry standard for each material from an unaffected part of your house, meter both daily, and the equipment comes out when the slower one reaches target. Reading only the new finishes is the fastest way to end up drying the same room twice.',
      },
      {
        q: 'How long will the equipment be in my house, and how loud is it?',
        a: 'Three to five days is typical, longer where there is plaster or solid wood involved. It is genuinely loud — air movers and dehumidifiers together sit somewhere around the noise of a running vacuum, and they run continuously, including overnight. They will also add to your electricity bill for those days. We are telling you this upfront because turning the equipment off to sleep is the single most common reason a drying job takes twice as long. Moisture redistributes back through the material the moment it stops.',
      },
    ],
  },
};
