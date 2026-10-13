import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 4 — the northern and western suburbs, and the first of the Northern
// Kentucky river cities. NKY is served by Duke Energy Kentucky, a separate
// entity from Duke Energy Ohio, regulated by the Kentucky PSC rather than PUCO.
export const part4: Record<string, LocationServiceCopy> = {
  wyoming: {
    intro:
      'Storm damage to the service on your Wyoming home? Duke restores the line and stops at the meter. We repair the mast, weatherhead, and meter base the same day. Call (513) 586-5107.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic suburb north of the city, built out in grand Victorian and early-1900s houses on established, tree-shaded streets. Those houses are tall, and on a three-storey Victorian the service mast frequently runs up through the roof rather than stopping at a wall — which changes what storm damage costs you. When a limb bends a mast at the roof penetration, you do not just have an electrical problem. You have a hole in the roof with a bent pipe in it, and water will find it before anyone gets to the wiring.',
      'That is why we treat the roof penetration as part of the electrical repair rather than someone else’s problem. The mast gets replaced, the flashing and the seal at the roof get done properly, and the whole thing gets inspected. Doing the electrical half and leaving the roof to a second trade is how a storm repair turns into a ceiling stain in the winter. Wyoming is also its own city, so the permit and inspection go through Wyoming rather than the county.',
    ],
    commonIntro:
      "In Wyoming's tall Victorian and early-1900s houses, where the mast often passes through the roof, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'A limb bent the mast where it goes through my Wyoming roof. Is the roof my problem or yours?',
        a: 'Ours, as part of the job. Where the mast passes through the roof, the flashing and the seal around it are part of the service entrance, and replacing the mast without redoing them properly leaves you with a leak. We handle the penetration and reseal it. If the limb also damaged the roof itself beyond the penetration — broken decking or a wide area of shingles — that is a roofer’s work, and we will tell you plainly which parts are which.',
      },
    ],
  },

  mariemont: {
    intro:
      'Storm damage at the service on your Mariemont home? We repair masts and meter bases with the village’s historic requirements in mind, then handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned garden community laid out in the 1920s and now a National Historic Landmark, and that designation covers the village rather than a single downtown block. It is the strictest setting we work in around Cincinnati. A service mast, its conduit, and the meter box are all visible exterior, so on a Tudor Revival house in Mariemont the question is not only whether the repair is safe and code-compliant but whether it looks the way the village requires.',
      'The architecture adds its own difficulty. Tudor Revival means steep roof pitches, half-timbering, and stucco or brick walls — none of which take a service mast the way a flat clapboard wall does. Anchoring into that properly, and sealing where the conduit meets it, is slower and needs more care than the same job on a post-war house. We plan the fixings and the route before starting, and we would rather raise a design constraint at the estimate than discover it with the wall open.',
    ],
    commonIntro:
      "In Mariemont's 1920s Tudor Revival homes, inside a National Historic Landmark village, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Mariemont is a National Historic Landmark. Will that hold up my storm repair?',
        a: 'It can add a step, so it is worth knowing at the start rather than mid-job. Putting the service back in the same position and the same form is normally the cleanest route, because the exterior appearance does not change. Where the old arrangement is gone entirely, or where a properly sized modern service would look different from the street, there may be more to agree than an electrical permit. We flag that at the estimate.',
      },
    ],
  },

  cheviot: {
    intro:
      'Storm damage to your service in Cheviot? Cheviot is its own city with its own permits and inspector. We handle that and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side along Harrison Avenue, completely surrounded by Cincinnati, in a grid of early-1900s homes and brick two-families. The practical constraint here is space. On these lots the gap between one house and the next is often barely wide enough to stand in, and that is exactly where the meter bank and the service entrance sit on a brick two-family. Storm damage in a gap that narrow is awkward to assess and awkward to repair, and it is one reason we look at access before quoting a date.',
      'Being its own city also means the permit and the inspection go through Cheviot rather than Cincinnati, on Cheviot’s own schedule. Electricians who work mostly in the city sometimes file with the wrong authority out of habit and lose a day finding out. After a storm that hit the whole region, a smaller municipal queue can also work in your favour, provided the paperwork went to the right place first time.',
    ],
    commonIntro:
      "In Cheviot's tightly packed early-1900s homes and brick two-families, where the service sits in a narrow side gap, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The meter on my Cheviot two-family is in the gap between houses. Does that make the repair harder?',
        a: 'It makes it slower rather than harder. There is often not enough room for a ladder at the angle we would want, so the setup takes longer and occasionally we need access from the neighbouring property. Worth mentioning when you call so we can plan it. What it should not change is the quality of the repair — the anchoring and sealing still have to be right, and the inspector will still be looking at them.',
      },
    ],
  },

  covedale: {
    intro:
      'Storm-damaged mast or meter base in Covedale? We repair it, file with the right authority for your address, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Covedale (ZIP 45238) sits on the western edge of the city along Glenway and Cleves Warsaw, right where Cincinnati meets Green Township — and that boundary runs through the neighborhood rather than around it. For a storm repair it is the first thing we establish, because the permit and the inspection follow the address. Two houses a few hundred feet apart on the same road can answer to different authorities, and filing with the wrong one does not fail the inspection so much as delay it entirely while the paperwork is redone.',
      'The housing itself is early-1900s through mid-century single-family, so the services range from original entrances well past their intended life to mid-century equipment sized for mid-century loads. The trees planted with those streets are now over the drops. None of that is unusual for the west side; what is specific to Covedale is checking which side of the line you are on before anything is filed.',
    ],
    commonIntro:
      "Across Covedale's older and mid-century homes, on either side of the city and township line, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'How do I know whether my Covedale address is city or township for the permit?',
        a: 'We check it before filing, and it is worth asking any electrician whether they have. The boundary with Green Township runs through this area rather than neatly around it, so neighbouring streets can answer to different authorities. Getting it wrong does not usually mean a failed inspection — it means the permit goes back and you wait while it is refiled with the right office, which after a storm is a day you cannot spare.',
      },
    ],
  },

  covington: {
    intro:
      'Storm damage to your service in Covington? Northern Kentucky is Duke Energy Kentucky, not Ohio. We repair the mast or meter base and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes. The first thing worth knowing here has nothing to do with the houses: Northern Kentucky is served by Duke Energy Kentucky, a separate entity from Duke Energy Ohio, with its own crews and its own scheduling, and the regulator is the Kentucky Public Service Commission rather than Ohio’s PUCO. If you have read Ohio-focused advice about outages, some of the process details do not carry across the river.',
      'What does carry across is the ownership split, which works the same way: Duke owns the line and the meter, you own the mast, the weatherhead, the cable, and the meter box. Covington adds two rivers to the problem. Sitting low near both the Ohio and the Licking, storms that bring high water as well as wind put water into basements where panels live, and submerged electrical equipment is replaced rather than dried out. On a rowhouse the entrance is often on a party wall, so one repair frequently covers more than one household.',
    ],
    commonIntro:
      "In Covington's 19th-century rowhouses on low ground near two rivers, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Is my Covington outage handled by the same Duke as Cincinnati?',
        a: 'Not quite. Northern Kentucky is served by Duke Energy Kentucky, which is a separate entity from Duke Energy Ohio with its own crews and scheduling, and utility complaints go to the Kentucky Public Service Commission rather than Ohio’s PUCO. The rule that matters to you is the same on both sides of the river: they restore the line to the meter, and they will not reconnect to a damaged mast or meter box until a licensed electrician has repaired it.',
      },
    ],
  },

  newport: {
    intro:
      'Storm damage to the service on your Newport home? We repair masts and meter banks in the East Row and along the riverfront, and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Newport (ZIP 41071) holds the East Row Historic District, one of the largest Victorian historic districts in Kentucky — hundreds of 19th-century houses standing shoulder to shoulder. That form decides how storm damage behaves. Where houses share party walls, service entrances are commonly mounted on those shared walls or fed from the rear, several meters sit together, and there is no side yard to work from. One damaged entrance takes more than one household dark, and the repair belongs to whoever owns that wall rather than to whoever noticed first.',
      'A district of that size also means a lot of protected exterior. The mast, its conduit, and the meter box are all visible, so a repair that would pass anywhere else can still be the wrong answer on an East Row street. We plan the route and the fixings with that in mind. And as everywhere in Northern Kentucky, the utility here is Duke Energy Kentucky rather than Duke Energy Ohio, with its own crews and its own restoration schedule.',
    ],
    commonIntro:
      "In Newport's East Row Victorians and riverfront streets, where party walls carry the service, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My East Row house shares a wall with the neighbours and the service is on it. Whose repair is it?',
        a: 'It depends on the deed and on how the service is arranged, which is why we establish it before quoting. Where one entrance and one meter bank feed both houses, the equipment is generally shared and so is the cost, and it is one repair with one permit and one inspection rather than two of each. Worth agreeing the split with your neighbour early — after a storm, the delay is usually the conversation rather than the work.',
      },
    ],
  },

  bellevue: {
    intro:
      'Street back on but your Bellevue home still dark? That is your own mast or meter base. We work the streets off Fairfield Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s houses. Compact is the operative word. The lots are narrow, the houses are close, and the whole city sits low against the Ohio — which produces a particular combination after a storm. The overhead spans between poles and houses are short, so outright mast destruction is less common here than in the wide-lot suburbs, but water in low basements is far more common, and that is where the panel usually is.',
      'The two problems have different rules and it is worth knowing which you have. A bent mast is rebuilt and inspected. A panel that has stood in water is replaced, because water gets behind the bus and into the breakers and keeps corroding long after the surface dries. An inspector will check for exactly that before Duke Energy Kentucky reconnects, so on the low streets we look at both ends of the system in one visit rather than repairing above and discovering below.',
    ],
    commonIntro:
      "In Bellevue's close-set late-1800s homes on low ground by the river, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The storm flooded my Bellevue basement and the power is off. Can the panel be dried out?',
        a: 'No, and anyone offering to is doing you a disservice. Water gets into the breakers and behind the bus bars, and corrosion continues long after everything looks dry, so submerged panels are replaced rather than reused. The inspector will be looking for it before the meter goes back in. Expect the panel to be the substantial part of that repair, and expect us to say so at the estimate rather than partway through.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Storm damage to the mast or meter base on your Fort Thomas home? We repair it, handle the inspection, and coordinate the reconnect above the river. Call (513) 586-5107.',
    relevance: [
      'Fort Thomas (ZIP 41075) grew up around a former U.S. Army post, and the trees planted on and around that reservation more than a century ago are now some of the largest in Northern Kentucky. Combine that canopy with the city’s position on the bluff above the Ohio, where the wind comes across the valley unbroken, and you have the two conditions that produce storm damage to service equipment: big limbs directly overhead and enough wind to bring them down.',
      'The houses are stately early-1900s homes on tree-lined streets, tall enough that the service entrance sits high on the wall and sometimes through the roof. That makes the repair a proper job rather than a ladder-and-an-hour, and it makes the roof penetration part of the electrical work — flashing and sealing included, because a mast replaced without them is a leak waiting for the winter. As throughout Northern Kentucky, the utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "In Fort Thomas' stately homes on the bluff, under some of the oldest trees in Northern Kentucky, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why does Fort Thomas seem to get hit harder than the river cities below it?',
        a: 'Elevation and trees. Sitting on the bluff means the wind arrives across the valley with little to break it, while the river cities below have more shelter. And the canopy around the old reservation is unusually mature, so there are larger limbs directly over the service drops than in most neighborhoods. Those two together are why damage here tends to be masts and weatherheads rather than the flooded panels we see down by the water.',
      },
    ],
  },

  florence: {
    intro:
      'Storm-damaged service on your Florence home? Duke Energy Kentucky restores the line, then a licensed electrician repairs your equipment before they reconnect. Call (513) 586-5107.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and among the fastest-growing in Northern Kentucky, which means the housing spans a wider range of service ages than almost anywhere we work — mid-century neighborhoods with original overhead entrances alongside subdivisions built recently enough to be fed underground. Two houses a mile apart can have entirely different storm outcomes: one loses a mast to a limb, the other has no mast at all and only ever loses power when the utility does.',
      'Florence being in Boone County matters for the paperwork. Permits and inspections here do not go through Kenton County or through any Ohio authority, and the utility is Duke Energy Kentucky rather than Duke Energy Ohio. Growth also means the city is large enough that restoration happens in sections after a big storm, so the neighborhood being back on tells you less than the two houses either side of you do.',
    ],
    commonIntro:
      "Across Florence's mid-century streets and newer subdivisions in Boone County, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Part of Florence has power back and part does not. Which problem do I have?',
        a: 'Judge it by your immediate neighbours rather than the city. Florence is large enough that Duke Energy Kentucky restores it in sections, so another area being lit tells you nothing about your street. Houses either side with lights and yours without means the fault is on your own mast, meter box, or panel. A whole dark block means your section has not been reached yet, and the right move is to report it and wait.',
      },
    ],
  },

  erlanger: {
    intro:
      'Storm damage at the service on your Erlanger home? We repair masts, meter bases, and panels across Kenton County and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Erlanger (ZIP 41018) sits near the airport in Kenton County, in settled mid-century neighborhoods, and the terrain here is noticeably flatter and more open than the river cities to the north. That changes the damage we see. In the wooded bluff neighborhoods the usual culprit is a limb landing on a drop. Out on this open ground it is more often the wind itself — sustained gusts working on a mast that has been in place sixty years, loosening fixings and pulling a weatherhead out of true rather than snapping anything outright.',
      'That kind of damage is easy to miss, which is the practical point. There is no dramatic broken pipe to photograph; there is a mast standing slightly wrong and a weatherhead no longer shedding water the way it should. It still means Duke Energy Kentucky will not reconnect, and it still needs a licensed repair and an inspection. If your power is out and nothing looks obviously destroyed, that is worth a proper look rather than an assumption that the utility will sort it.',
    ],
    commonIntro:
      "Across Erlanger's mid-century homes on open ground near the airport, where wind rather than limbs does the damage, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My power is out in Erlanger but nothing looks broken outside. What now?',
        a: 'On open ground like this, wind damage is often undramatic — fixings worked loose, a mast pulled slightly out of plumb, a weatherhead no longer sitting right so water can track into the entrance cable. None of that looks like storm damage from the ground, and all of it will stop Duke Energy Kentucky reconnecting. If the neighbours have lights and you do not, it is worth having someone look properly rather than waiting on a utility crew who cannot touch your equipment anyway.',
      },
    ],
  },
};
