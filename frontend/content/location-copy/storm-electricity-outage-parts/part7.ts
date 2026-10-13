import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 7 — the east-side villages and Anderson Township, the Colerain and
// Sycamore township communities, and the Mill Creek valley villages north of
// the city.
export const part7: Record<string, LocationServiceCopy> = {
  newtown: {
    intro:
      'Storm damage or a flooded panel in Newtown? Little Miami bottomland brings water as fast as the wind. We repair masts, meter bases, and panels. Call (513) 586-5107.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village on low bottomland beside the Little Miami River, and the Little Miami behaves differently from the Ohio. It is a smaller river with a steeper catchment, so it responds to heavy rain faster and falls again faster — which means the water can arrive during the same few hours as the wind rather than a day later as the Ohio crests. For a homeowner that removes the gap you would otherwise have to move things or make a decision.',
      'The practical consequence is that we frequently find both problems here from one storm: a service entrance damaged above and a panel that has been in water below. They have different remedies. A mast is rebuilt and inspected. A submerged panel is replaced, because water gets behind the bus bars and into the breakers and corrosion continues long after everything looks dry. An inspector checks for that before Duke reconnects, so we look at both in one visit as standard.',
    ],
    commonIntro:
      "In Newtown's older homes on Little Miami bottomland, where water can arrive with the wind rather than after it, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The Little Miami rose and fell before I could do anything. Is the panel salvageable?',
        a: 'If it went under, no — and that is the honest answer rather than a sales one. Water reaches the breakers and the bus behind the panel face, and corrosion carries on invisibly after the surface dries. An inspector will look for signs of submersion before Duke reconnects, so a panel that has been in water gets replaced. If yours is low and this has happened before, ask us whether relocating it higher is practical while we are there.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Storm damage at the service on your Turpin Hills home? We repair masts and meter bases across Anderson Township and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Turpin Hills (ZIP 45244) is an Anderson Township community on genuinely rolling east-side terrain, in established mid-century and newer neighborhoods. The name is accurate: these are hills rather than a flat suburban plat, and that changes the geometry of the overhead service. Where the pole sits uphill or downhill of the house, the drop runs across a grade rather than level, which puts it under more tension and gives a falling limb more leverage on the mast when it lands.',
      'The terrain also affects how we work. On the steeper lots the ladder position we would want is often not available, and the setup takes longer than the repair itself — worth mentioning when you call so the visit is scheduled with enough time. Anderson Township handles the permit and inspection rather than the city or any of the small east-side municipalities nearby, and it is a large township, so restoration after a big storm proceeds in sections.',
    ],
    commonIntro:
      "Across Turpin Hills' rolling mid-century and newer streets, where drops run across grades, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Turpin Hills lot slopes and the pole is above the house. Does that matter?',
        a: 'It does, in two ways. A drop running down a grade sits under more tension than a level span, so there is more load on the mast when something lands on the line. And the slope often means the ladder cannot go where we would want it, which makes the setup the slow part of the job. Neither changes the repair itself — it changes how long to allow for it.',
      },
    ],
  },

  silverton: {
    intro:
      'Storm-damaged mast or meter base in Silverton? Silverton is its own city, with its own permits — not Deer Park or Kenwood. Call (513) 586-5107.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road, and it sits in the middle of what is genuinely a patchwork of authorities. Within a few miles of here you have Silverton, Deer Park, Kenwood, Dillonvale and Sycamore Township, and every one of them handles permits and inspections differently — some as cities, one as unincorporated county, others as township. Addresses on adjacent roads can answer to different offices, and after a storm that difference is measured in days rather than principle.',
      'So the first thing we do on an east-side job is confirm which authority the address falls under before anything is filed. The housing itself is early- and mid-1900s along established streets, with services of both eras and street trees now well above roof height. Straightforward work — the complication here is administrative rather than electrical, and it is entirely avoidable if it is checked at the start.',
    ],
    commonIntro:
      "Across Silverton's early- and mid-1900s streets off Montgomery Road, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'How do I know whether my address is Silverton or somewhere else for the permit?',
        a: 'We check it before filing, and on this part of the east side it genuinely needs checking. Silverton, Deer Park, Kenwood, Dillonvale and Sycamore Township are all within a few miles and all handle permits differently. Getting it wrong does not usually fail an inspection — it means the paperwork comes back and you wait while it is refiled with the right office.',
      },
    ],
  },

  lockland: {
    intro:
      'Storm damage or water at the panel in Lockland? Narrow lots and low valley ground bring both. We repair both, on the village’s own permit. Call (513) 586-5107.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley that grew up around mills and industry, with worker housing spaced about as tightly as anywhere in the county. Those narrow lots mean the gap between one house and the next is barely wide enough to work in — and that is where the service entrance and meter usually sit. It also means one falling tree reaches several properties, so damage here comes in clusters along a block rather than as isolated incidents.',
      'The valley adds water to the same storm, and the panel is nearly always in a low basement. Submerged equipment gets replaced rather than dried out, which on a street of closely spaced houses often means several neighbours needing the same two repairs at once. Lockland issues its own permits rather than going through Cincinnati or the county, and a small village queue moves quickly when the filing is right and slowly when it is not.',
    ],
    commonIntro:
      "In Lockland's tightly spaced worker housing on low valley ground, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Several houses on my Lockland street are damaged. Should we call separately?',
        a: 'One electrician handling them together is faster for everyone. The setup is shared, the permits go in as a batch, and the inspector sees several properties in one visit rather than making several trips. Each homeowner still pays for their own equipment — nothing is pooled — but in a village with a small inspection schedule, going in as a group can save days.',
      },
    ],
  },

  groesbeck: {
    intro:
      'Storm damage to the service on your Groesbeck home? We repair it, file with Colerain Township, and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, largely mid-century single-family homes. Colerain is one of the largest townships in Ohio, and size is the thing that matters after a storm: Duke restores an area this big in sections, so hearing that "Colerain has power back" tells you essentially nothing about your street. The only comparison that helps is the two houses immediately either side of yours.',
      'Permits and inspections go through Colerain Township, which is a different authority again from Green Township on the west side, Springfield to the north, and any of the small cities nearby. The housing is uniformly of an era, so services here are mostly mid-century, many still original, sized for the loads of their time — and the trees planted with those subdivisions are now standing over the drops.',
    ],
    commonIntro:
      "Across Groesbeck's mid-century homes in Colerain Township, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'I heard Colerain Township has power back but my Groesbeck street does not. What now?',
        a: 'Colerain is large enough that restoration happens in sections, so another part being lit says nothing about yours. Check the two houses either side of you. If they have lights and you do not, the fault is on your own mast, meter box, or panel, and Duke cannot reconnect to it until a licensed electrician has repaired it. If your whole block is dark, your section has not been reached yet.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Storm-damaged service on your Mount Healthy home? We repair masts and meter bases around the old town center and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side with a genuine old town center and streets of early-1900s and mid-century homes around it. That produces two distinct sets of conditions within a short walk. In the old core the buildings are close together and tall for their footprint, with service entrances that are frequently original or reworked once decades ago, and short overhead spans between them. On the newer streets around it the lots are wider, the drops longer, and the services mid-century.',
      'Both fail in storms, but not in the same way. The old core loses entrances to wind working on aged fixings; the newer streets lose drops and masts to limbs off full-grown subdivision trees. Mount Healthy issues its own permits rather than going through Hamilton County, and being a small city, the inspection queue is short when the paperwork is right.',
    ],
    commonIntro:
      "Across Mount Healthy's old town center and the mid-century streets around it, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Mount Healthy house is in the old part of town. Is the repair different there?',
        a: 'Somewhat. In the old core the buildings are close together with little room to work, and the service entrance is often original, so the repair involves more assessment of what is genuinely sound versus merely still standing. On the newer streets it is usually a more straightforward rebuild. Either way the permit is Mount Healthy’s own rather than the county’s.',
      },
    ],
  },

  reading: {
    intro:
      'Storm damage to the service on your Reading home or shop? We handle residential and smaller commercial services in the valley. Call (513) 586-5107.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley known for its bridal-shop district, and that commercial main street mixed into a residential city changes the kind of call we get here. Along the shopping streets the buildings frequently have a shop at ground level and flats above, which means one service entrance and a meter bank serving both a business and residential tenants. Storm damage there takes a shop and several homes off together, and the repair belongs to the building owner rather than to any of the occupants.',
      'It also means the timing pressure is different. A closed shop is losing money by the day in a way a dark house is not, and owners of mixed-use buildings are usually the fastest to authorise work — which is worth knowing if you rent a flat above one. The valley supplies the other half of the problem: low ground, water in basements, and panels that get replaced rather than dried out once they have been under.',
    ],
    commonIntro:
      "Across Reading's mixed-use main street and its valley residential streets, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'I rent a flat above a Reading shop and we have no power. Who arranges the repair?',
        a: 'The building owner. Where a shop and flats share one service entrance and meter bank, that equipment is the building’s, so neither you nor the shop tenant can authorise work on it. Report it to the owner or managing agent and mention that the business below is also out — commercial pressure tends to move these along faster than a residential-only building.',
      },
    ],
  },

  dent: {
    intro:
      'Storm damage at the mast or meter base in Dent? We repair it, file with Green Township, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community towards the western edge of the built-up area, in established mid-century and newer neighborhoods. Being near that edge matters for wind. Further in, the suburbs shelter each other — street after street of houses and mature trees breaks up a gust before it travels far. Out here the open ground to the west gives wind a longer run before it reaches the first houses, and the properties on that side take more of it than their neighbours a mile further in.',
      'The housing gives two answers. Mid-century streets are overhead, with services of that era and plenty still original. Newer building was frequently done with underground supply, and those houses have no mast or weatherhead to lose at all. We establish which arrangement your address has before quoting, since Duke schedules underground work with more lead time than overhead and the timelines are not comparable.',
    ],
    commonIntro:
      "Across Dent's mid-century and newer homes near the township's western edge, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why does the west side of Dent seem to get hit harder?',
        a: 'Open ground. Wind coming from the west reaches the first houses having crossed farmland and open land rather than street after street of buildings and trees, so it arrives with more force. Further into the township the suburbs shelter each other. It is why the same storm can strip a service entrance on one side and leave the other untouched.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Storm damage to the service on your Deer Park home? Deer Park is its own city with its own permits. We handle that and the reconnect. Call (513) 586-5107.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, entirely residential city on the east side, made up largely of mid-century single-family homes on quiet streets. Two things follow from being small and residential. The trees planted when those streets were laid out are now full-grown and standing directly over the service drops, so limb damage to individual houses is the routine storm call rather than widespread failure. And the city has no commercial base to support a large municipal department, so the permit and inspection capacity is modest.',
      'That second point is what actually determines how long you are without power. The electrical repair is usually a day. After a storm that hit the whole region, every damaged property in the city is competing for a small number of inspection slots, which is why we book the inspection alongside scheduling the work rather than once it is finished. Deer Park also issues its own permits rather than going through the county — worth confirming before anything is filed.',
    ],
    commonIntro:
      "Across Deer Park's mid-century homes on quiet, fully treed streets, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'How long does a Deer Park storm repair take start to finish?',
        a: 'The electrical work is usually a single day. The variable is the inspection, because Deer Park is a small city with a modest building department and after a regional storm every damaged property is chasing the same slots. That is why we book it alongside the work rather than after. If someone quotes you a day start to finish without mentioning the inspection, ask how they plan to handle it.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Storm damage at the service on your Terrace Park home? Village-wide mature canopy and the Little Miami make this a two-hazard address. Call (513) 586-5107.',
    relevance: [
      'Terrace Park (ZIP 45174) is an east-side village near the Little Miami, known for established early-1900s homes and a tree canopy that covers the village rather than lining a street or two. That canopy is the reason storm damage here is so consistently limb-related. Overhead drops run under mature hardwoods on nearly every street, and the trees are old enough that what comes down is heavy — not the twig fall that clears itself, but limbs with enough mass to take a mast off a wall.',
      'The river adds the second hazard to the low-lying parts of the village. The Little Miami has a steep catchment and responds quickly to heavy rain, so water can arrive during the same storm rather than a day later. Where a panel sits low and has been under, it is replaced rather than dried out. On the older houses the entrance also frequently sits high or passes through the roof, which makes the flashing and the seal part of the electrical repair.',
    ],
    commonIntro:
      "In Terrace Park's early-1900s homes under village-wide mature canopy near the Little Miami, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Can anything be done about the trees over my Terrace Park service drop?',
        a: 'Some, and it is worth doing before storm season rather than after. Duke clears vegetation from their own lines, but the span crossing your property is often yours to manage, and a tree service can take weight off limbs directly above it. It will not make you storm-proof under canopy this mature. What it does is reduce the number of times you are the one house on the street in the dark.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Storm damage or water at the panel in Dry Run? The low pockets along the creek flood while the rest stays fine. We repair both. Call (513) 586-5107.',
    relevance: [
      'Dry Run (ZIP 45244) takes its name from the creek that runs through this part of Anderson Township, and the creek is the thing that decides your storm exposure here. The community is mostly mid-century and newer housing on ordinary suburban lots, but the ground is not uniform — properties in the low pockets along the run behave completely differently in heavy rain from those on the higher ground a few streets away. Two houses in the same neighborhood can have entirely different problems from the same storm.',
      'On the higher ground the failure mode is overhead: limbs onto drops, masts pulled out of true, weatherheads no longer shedding water. In the low pockets it is the panel, because water reaches basements and submerged electrical equipment gets replaced rather than dried out. Anderson Township handles the permit and inspection, and it is a large township, so restoration proceeds in sections after a major event.',
    ],
    commonIntro:
      "Across Dry Run's mid-century and newer homes, where the low pockets along the creek flood and the higher streets do not, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Dry Run neighbour flooded and I did not, but we are both without power. Same problem?',
        a: 'Probably not, and it is worth saying so on the phone. If your neighbour’s panel has been under water, theirs is being replaced regardless of the utility. If your house stayed dry, your fault is more likely overhead — a mast or weatherhead — or the utility line itself. Different repairs, different costs, and it is quicker if we know which we are coming to look at.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Storm-damaged mast or meter base in White Oak? Mature oaks over the drops are the usual cause. We repair it and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, largely mid-century and newer single-family homes, and the name reflects what is actually growing here. Oaks are the heaviest common shade tree in this region — dense, hard wood that does not shed small branches the way a maple or an ash does. When an oak gives up a limb it gives up something substantial, and a substantial limb landing on a service drop takes the mast rather than just pulling the cable.',
      'That is why the repairs here tend to be full entrance rebuilds rather than adjustments. The mid-century housing means many of those entrances were original and already at the end of their useful life before anything landed on them. Green Township handles the permit and inspection, and where the newer sections were built with underground supply there is no mast to lose in the first place — worth establishing which you have before we quote.',
    ],
    commonIntro:
      "Across White Oak's mid-century and newer homes under heavy oak canopy, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Are oaks worse than other trees for my White Oak service drop?',
        a: 'For this specific problem, yes. Oak is dense and hard, so when a limb comes down it carries more weight than the equivalent length of softer wood, and it tends to fail in large pieces rather than shedding small ones. That is the difference between a cable pulled loose and a mast torn off a wall. If you have oak limbs directly over the span, taking weight off them before storm season is worthwhile.',
      },
    ],
  },

  forestville: {
    intro:
      'Storm damage to the service on your Forestville home? We repair masts and meter bases across Anderson Township and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Forestville (ZIP 45230) is one of the older parts of Anderson Township, with a genuine village core rather than being purely post-war subdivision, and that gives it a wider spread of service ages than the newer communities around it. On the older streets near the core the entrances can be decades older than anything in the surrounding developments, sometimes original and sometimes reworked once a long time ago. A few streets away the housing is straightforwardly mid-century or newer.',
      'For a storm repair that means the assessment matters more here than the labour does. An entrance that is genuinely original needs judging on whether the whole assembly is sound rather than only fixing what visibly broke, because Duke inspects what they reconnect to and a patch on tired equipment fails the same way in the next storm. Anderson Township handles permits and inspections, and it is large enough that restoration runs in sections.',
    ],
    commonIntro:
      "Across Forestville's older village core and the newer streets around it, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Forestville house is older than the subdivisions nearby. Does that change the repair?',
        a: 'It changes what needs assessing. On an older entrance the question is not only what broke but whether the rest of the assembly is genuinely sound, because Duke inspects what they are reconnecting to and a patch on tired equipment tends to fail again in the next storm. On the newer streets it is usually a more straightforward rebuild of a known arrangement.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Storm damage at the service on your Cherry Grove home? Duke restores the line and stops at the meter. We repair the rest. Call (513) 586-5107.',
    relevance: [
      'Cherry Grove (ZIP 45230) is an Anderson Township community of mid-century and newer single-family homes, and the newer sections are the part worth understanding. A good deal of the recent building here was done with underground supply, which removes the mast and weatherhead entirely — the two things that account for most storm damage to residential service. Those houses lose power when the utility does, or to a fault at the meter base, in the underground run, or from surge damage inside the panel.',
      'The mid-century streets are conventional overhead, with services of their era and subdivision trees now standing over the drops. So on the same road you can have one house needing a full entrance rebuild and another that was never going to lose one. We ask which you have on the phone, because it changes what we bring and how the reconnect is scheduled — Duke handles underground work with more lead time than overhead.',
    ],
    commonIntro:
      "Across Cherry Grove's mid-century overhead streets and its newer underground-fed sections, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Cherry Grove house is fed underground. What can even go wrong in a storm?',
        a: 'Less than on an overhead service, which is the point of it — no mast or weatherhead to lose. What remains is a fault at the meter base, damage in the underground run itself, or surge damage in the panel from a nearby strike. And the line feeding your street from the main road is often still overhead, so a tree can take out the whole neighborhood even where individual houses are underground.',
      },
    ],
  },

  kenwood: {
    intro:
      'Storm damage to the service on your Kenwood home? Kenwood is unincorporated, so permits are not a city’s. We handle the right filing. Call (513) 586-5107.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale unincorporated community around Kenwood Towne Centre, and the unincorporated part surprises people. There is no city of Kenwood — the area is governed at township and county level, so permits and inspections do not go through a municipal office the way they do in Deer Park or Silverton a couple of miles away. An electrician who assumes Kenwood works like the small cities around it files in the wrong place and costs you a day.',
      'The housing is mid-century homes alongside newer, larger houses, and the larger ones carry the usual exposure of a big house on a treed lot: long overhead drops, high service entrances, and a great deal of equipment inside on control boards. Being next to a major retail centre also means the circuits through parts of Kenwood serve substantial commercial load, and commercial restoration priorities do not always match residential streets.',
    ],
    commonIntro:
      "Across Kenwood's mid-century and newer larger homes near the Towne Centre, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Which office issues the permit for a Kenwood repair?',
        a: 'Not a city one, because Kenwood is unincorporated — it is handled at township and county level rather than by a municipality. That trips people up, because Deer Park, Silverton and Madeira are all nearby and all do issue their own. We confirm the correct authority for your specific address before filing, since getting it wrong means the paperwork comes back and you wait.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Storm damage or a flooded panel in Lincoln Heights? We repair masts, meter bases, and panels, and file on the village’s own permit. Call (513) 586-5107.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic Mill Creek valley community and one of the first self-governed Black municipalities in the northern United States. Being its own village matters practically as well as historically: permits and inspections go through Lincoln Heights rather than Cincinnati or Hamilton County, and an electrician filing out of habit with the county will cost you time you do not have after a storm.',
      'The housing is older and modest, which means the original electrical services were small — sized for a house with a few lights and little else — and many are still in place. When a storm damages an already-minimal service, rebuilding it exactly as it was puts you back on something that was inadequate before the storm. The valley adds water: low ground, basements that take it, and panels that get replaced rather than dried out once submerged. We look at both ends of the system in one visit.',
    ],
    commonIntro:
      "In Lincoln Heights' older, modest homes on low valley ground, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Lincoln Heights service is small and original. What are my options after storm damage?',
        a: 'Two, and we will price both. Rebuilding what was there is the cheaper line on the quote and puts you back on a service that was small for a modern house before the storm touched it. Fitting a properly sized service costs more in materials and almost nothing more in labour, permit, or inspection — and those are the parts that dominate the bill. On a house running central air and a modern kitchen, the second usually makes better sense.',
      },
    ],
  },

  dillonvale: {
    intro:
      'Storm-damaged mast or meter base in Dillonvale? We repair it, file with Sycamore Township, and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side just beyond Kenwood, in settled mid-century neighborhoods. The permit goes through Sycamore Township — not through Kenwood, which is unincorporated and handled differently, and not through Deer Park or Silverton, which are their own cities. On this part of the east side four or five authorities meet inside a couple of miles, and confirming which one your address falls under is the first thing that should happen.',
      'Being adjacent to the commercial density around Kenwood has a second effect. Circuits through this area carry retail and office load as well as houses, and commercial restoration is not always sequenced the same way as residential streets — so the lines near you may come back sooner or later than the pattern you would expect. What does not change is that once they are back, a damaged mast or meter box on your house still stops the reconnect until it is repaired and inspected.',
    ],
    commonIntro:
      "Across Dillonvale's mid-century streets in Sycamore Township, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Is Dillonvale the same as Kenwood for permits?',
        a: 'No. Dillonvale is in Sycamore Township, while Kenwood next door is unincorporated and handled at county level, and Deer Park and Silverton nearby are their own cities. Four or five different answers inside a couple of miles. We confirm which applies to your address before filing, because the cost of getting it wrong is a delay at exactly the wrong moment.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Storm damage to the service on your Woodlawn home? We repair masts, meter bases, and panels, and file on the village’s permit. Call (513) 586-5107.',
    relevance: [
      'Woodlawn (ZIP 45215) is a Mill Creek valley village with residential streets alongside substantial industrial corridors — a lot of industry relative to the size of the village. That ratio affects restoration. Circuits serving significant industrial load are often prioritised, which can mean the lines near you come back sooner than a purely residential village would expect. It is genuinely good news, and it is also why homeowners here get caught waiting.',
      'When the lines come back quickly and one house stays dark, the remaining fault is on that homeowner’s own equipment, and Duke cannot reconnect to a damaged mast or meter box no matter how fast they restored the line. The valley supplies the other half: low ground, water in basements, and a panel that has been submerged gets replaced rather than dried out. Woodlawn issues its own permits rather than going through the county.',
    ],
    commonIntro:
      "Across Woodlawn's residential streets among the valley's industrial corridors, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The industrial units near me have power but my Woodlawn house does not. Why?',
        a: 'Two possible reasons. Circuits carrying significant industrial load are sometimes restored earlier, so the line to you may still be out. Or the lines are back and the fault is on your own equipment — mast, weatherhead, meter box or panel — which Duke will not reconnect to until an electrician has repaired it. If the street lights near you are on, it is the second.',
      },
    ],
  },

  addyston: {
    intro:
      'Storm damage or a flooded panel in Addyston? The farthest west we go, on the river. We repair both and file on the village’s permit. Call (513) 586-5107.',
    relevance: [
      'Addyston (ZIP 45001) is a small village at the far western end of our service area, an old mill town on the Ohio River with closely spaced worker homes. Two things about that position matter after a storm. Being at the edge means that in a regional event this is among the later areas reached — restoration works outward, and there is not much out here to work outward to. And being on the river means water, in basements where the panels are.',
      'The housing is century-old worker homes on narrow lots, so the services are old and small, the spans between houses are short, and one falling tree reaches several properties at once. Submerged panels are replaced rather than dried out, and on a street where several neighbours have the same two problems, calling early makes a real difference. Addyston issues its own permits rather than going through the county.',
    ],
    commonIntro:
      "In Addyston's closely spaced century-old worker homes on the river, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Do you actually come out to Addyston?',
        a: 'Yes. It is the farthest west we go, and we treat it like anywhere else in the service area. Worth being realistic about timing in a regional storm — restoration works outward from the core, so the lines here are often later coming back. That is also the argument for calling as soon as you can see damage on your own equipment, because that repair does not have to wait for the utility to reach you.',
      },
    ],
  },

  greenhills: {
    intro:
      'Storm damage at the service on your Greenhills home? A New Deal Greenbelt town and a National Historic Landmark — the exterior matters. Call (513) 586-5107.',
    relevance: [
      'Greenhills (ZIP 45218) is one of only a handful of Greenbelt towns built as New Deal projects in the 1930s, and the original village is a National Historic Landmark district with its cottages and townhomes still in use. That designation puts it in the same category as Mariemont for a service repair: the mast, its conduit, and the meter box are all visible exterior, so what a repair looks like from the outside is a real constraint rather than an afterthought.',
      'The 1930s townhomes add a second complication. Where houses share walls, the service entrance is frequently on a party wall or a shared elevation, and several units may run from one arrangement — so one storm can take out more than one household and the repair belongs to whoever owns that wall. The original services were also small, built for a 1930s cottage, and many are still in place. We establish the designation constraints and the ownership before quoting anything.',
    ],
    commonIntro:
      "In Greenhills' 1930s Greenbelt cottages and townhomes inside a National Historic Landmark district, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Greenhills is a National Historic Landmark. Will that delay my storm repair?',
        a: 'It can add a step, so it is better raised at the estimate. Putting the service back in the same position and the same form is normally the cleanest route, because the exterior appearance does not change. Where the original arrangement is destroyed, or where a properly sized modern service would look different from the street, there may be more to agree than an electrical permit. On a townhome we also need to establish who owns the wall the service is on.',
      },
    ],
  },
};
