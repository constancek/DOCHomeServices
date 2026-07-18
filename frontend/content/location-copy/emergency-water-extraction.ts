import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Per-neighborhood emergency water extraction copy, written from each
// neighborhood's real local facts in content/locations.ts.
// Focus is the first hours: pumps and extractors on site, standing water out
// fast. Drying is a separate service; restoration is the umbrella.
// Currently Hyde Park, Norwood, and Madisonville — add further neighborhoods
// here as their copy is written.
export const emergencyWaterExtractionCopy: Record<string, LocationServiceCopy> = {
  'hyde-park': {
    intro:
      'Standing water in a Hyde Park home? We bring pumps and extractors, shut the source down, and pull the water out the same day — usually within hours of the call around Hyde Park Square. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) homes are large, and the lower levels are almost always finished. Carpet with pad under it, drywall down to the slab, built-in cabinetry along the walls. All of it holds water, and all of it holds it out of reach of anything you own. The volume that ends up inside those materials is routinely more than what is visible on the floor, which is why the pump is only half the visit.',
      'The reason speed matters more here than the square footage suggests is the original detail. Solid oak flooring and century-old plaster in these Tudors, colonials, and brick foursquares can usually be saved — but the window is measured in hours, not days. Get the standing water off the boards and out of the pad early and you are drying. Leave it over a weekend and you are replacing.',
    ],
    commonIntro:
      "In Hyde Park's big early-1900s homes with finished lower levels, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'Water is sitting on the original oak floor in my Hyde Park home. Does extraction help?',
        a: 'Yes, and it is the single thing that decides whether that floor survives. Solid oak of this era does not fail from getting wet, it fails from staying wet, and most of the water is not on top of the boards but in the seams and the subfloor beneath. We extract through the surface and pull what we can from below before any drying equipment goes in. Do not sand, do not cover it, and do not put a household heater on it — fast drying on one side cups the boards worse than the water did.',
      },
      {
        q: 'How fast can you reach Hyde Park with equipment?',
        a: 'Same day for the homes around Hyde Park Square and Erie Avenue, and often within a couple of hours. Tell us on the phone how much water there is, whether it is still coming in, and whether it reached a finished lower level, because that decides which truck and how many pumps we send.',
      },
    ],
  },
  norwood: {
    intro:
      'Flooded in Norwood? We arrive with pumps and extraction equipment, stop the source, and get the standing water out the same day. Norwood sits in the middle of our service area. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, entirely surrounded by Cincinnati, laid out as a streetcar and factory town on a tight grid of early-1900s homes and brick two-families. Small lots and shared walls change extraction in a specific way: water does not stay where it started. It runs along a shared wall cavity into the other half of a two-family, or into the house four feet away, and by the time anyone notices there are two floors to pump instead of one.',
      'Tight access is the other Norwood reality. Narrow drives, back-of-lot entrances, and basement stairs that will not take a wide hose run all add minutes, and minutes are the whole point of this job. We ask about access on the phone so the right pump and hose length come off the truck the first time rather than the second.',
    ],
    commonIntro:
      "In Norwood's densely built early-1900s homes and brick two-families, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'The water started next door and ended up in my Norwood basement. Will you pump both sides?',
        a: 'We will, if we have access and authorisation from whoever controls each side, and it is usually the right call. Pumping one half of a two-family while the other half is still holding water means the water comes back through the shared wall. Whose insurer pays is a question for the two insurers, not for us — what we do is photograph where it originated, which way it travelled, and take readings on both sides so the record exists.',
      },
      {
        q: 'Do I need to speak to the city of Norwood before you start?',
        a: 'Not for extraction. Pumping and extracting standing water is not permitted work, so we can start the moment we arrive. What does go through Norwood rather than Cincinnati is the pipe or lateral repair that sometimes follows, because Norwood is a separate municipality with its own building and utility authority. We handle that part separately and after the water is out.',
      },
    ],
  },
  madisonville: {
    intro:
      'Standing water in Madisonville? Same-day pumps and extractors for homes around Madison Road and Whetsel Avenue, with the failed line shut off and repaired on the same visit. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) has had years of steady reinvestment, which means two very different kinds of flood on the same street. In the renovated and newly built houses it is almost always a modern failure — a refrigerator supply line, a laundry connection, a water heater that emptied its tank into a finished room. Those run at full pressure and unattended, so the volume on the floor when you find it is large.',
      'In the homes that have not been touched, it is aging galvanized letting go, and it tends to be found later. Either way the extraction problem is the same and it is about hours. A renovated Madisonville basement flooded on a Friday is mostly salvageable if we pump it Friday. The same water found Monday has been in the pad, the bottom of the drywall, and the subfloor for three days, and that is a demolition conversation rather than an extraction one.',
    ],
    commonIntro:
      "Across Madisonville's mix of early-1900s homes and newer infill, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'A supply line failed in my renovated Madisonville home. Is extraction worth it if the finish is new?',
        a: 'It is worth it precisely because the finish is new. New engineered flooring, new drywall, and new cabinetry all survive a soaking far better than people assume, but only if the standing water comes off them quickly and the pad underneath is extracted rather than left to sit. What loses those materials is days, not the water itself. Call while it is still wet on the surface, not after it has gone quiet.',
      },
      {
        q: 'My Madisonville house still has the original galvanized plumbing. What should I do while I wait?',
        a: 'Shut the water off at the main first — with old galvanized the failure often does not stop on its own. Then kill power to the affected level at the panel, and never stand in water to reach a breaker; if the panel is in the wet area, leave it and tell us when we arrive. Lift anything with fabric or paper off the floor. Do not run a household vacuum on standing water.',
      },
    ],
  },
};
