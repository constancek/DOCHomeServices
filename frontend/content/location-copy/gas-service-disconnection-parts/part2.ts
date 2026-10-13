import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 2 — the east-side hilltops, the surrounded municipalities, and the first
// Northern Kentucky cities. Introduces abandoned and capped gas lines, and CSST
// bonding in newer homes. NKY is served by Duke Energy Kentucky.
export const part2: Record<string, LocationServiceCopy> = {
  'mount-lookout': {
    intro:
      'Gas shut off at your Mount Lookout home? Additions add gas branches, and every branch gets tested. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is early-1900s houses and larger homes around Mount Lookout Square, and a great many have been extended — kitchens rebuilt, lower levels finished, second heating zones added. Each of those projects that touched gas added a branch to the system, and a pressure test does not check the newest work in isolation. It tests everything at once.',
      'That is why a shutoff on an extended house here frequently traces to a branch nobody thinks about — a capped line where an old appliance was removed, a run to a converted space, a connector fitted during a remodel by whoever was on site. None of it caused trouble while gas was flowing. It shows up the moment someone puts a gauge on the system, and it is better established by testing than by assuming the newest work is the problem.',
    ],
    commonIntro:
      "In Mount Lookout's extended and improved older homes, where each project added a gas branch, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'We remodelled our Mount Lookout kitchen years ago. Could that be why the gas failed a test?',
        a: 'It could, and not necessarily because the work was bad. A remodel often caps an old line rather than removing it, or adds a connector that was fine at the time. A capped line that was not properly sealed leaks slowly without anyone noticing while gas is flowing, and a pressure test finds it immediately. That is a contained repair once located.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Gas shut off at your Columbia-Tusculum home? Re-running pipe through restored interiors needs care. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, known for its restored Painted Ladies, and the restoration is what shapes a gas repair here. Where a run of piping has to be replaced rather than repaired at a joint, it has to go somewhere — and the obvious route frequently crosses restored plaster, original woodwork or a finished ceiling that cost someone a great deal to bring back.',
      'So we plan the route before opening anything, use existing chases and basement runs where they exist, and tell you honestly where a wall has to be opened rather than discovering it mid-job. The houses also carry the longest gas histories in the city, from an era when they were lit by it, so a pressure test on one of these systems is testing decades of accumulated alterations rather than a single installation.',
    ],
    commonIntro:
      "In Columbia-Tusculum's restored Victorian houses, where a new pipe run has to be routed carefully, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Will replacing gas pipe in my restored house mean opening up finished rooms?',
        a: 'Sometimes, and we would rather tell you where before starting than find out together. Existing chases and basement runs are used wherever they work, which avoids finished rooms entirely on many houses. Where a wall genuinely has to be opened we say so at the estimate, and we will discuss whether a longer route through unfinished space is worth it to leave the restored work alone.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Gas shut off at your Mount Washington home? A decades-old furnace or water heater is the usual trigger. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is settled single-family housing from the early 1900s through the mid-century along Beechmont Avenue, and a great many of these homes have been in the same hands a long time. That produces a particular kind of gas shutoff: an appliance that has run reliably for twenty-five or thirty years finally develops a fault that gets it red-tagged, and the gas comes off until it is dealt with.',
      'A furnace of that age with a cracked heat exchanger is not repairable in any meaningful sense — the exchanger is the appliance. What matters for the shutoff is that replacing it is only half the job: the piping feeding it still has to hold a pressure test, and on a system of the same vintage that is not a formality. We test before quoting so the number covers both rather than one.',
    ],
    commonIntro:
      "Across Mount Washington's long-held early-1900s and mid-century homes, where an aging appliance usually triggers the shutoff, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My thirty-year-old Mount Washington furnace was red-tagged. Can it be repaired?',
        a: 'If the heat exchanger is cracked, no — the exchanger is effectively the appliance, and a cracked one is why the tag was issued. Replacement is the answer. What matters for getting gas back is that the piping feeding it still has to pass a pressure test, and on a system of similar age that is worth testing before anyone quotes a number.',
      },
    ],
  },

  madisonville: {
    intro:
      'Gas shut off at your Madisonville home? Capped lines from removed appliances are a common finding. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) has seen steady reinvestment along Madison Road, and a lot of that work has involved changing what runs on gas. A gas range swapped for electric, a gas dryer removed, an old space heater taken out when central heating went in — each of those leaves a line that was capped rather than removed, because removing it properly means opening walls.',
      'A cap that was done well holds indefinitely. A cap that was a fitting screwed on quickly does not, and it leaks slowly enough that nobody notices while gas is flowing through the rest of the system. A pressure test finds every one of them at once, which is why a shutoff on a renovated house here often traces to an appliance that has not existed for fifteen years. Once located it is a contained repair rather than a re-pipe.',
    ],
    commonIntro:
      "In Madisonville's renovated houses, where removed appliances left capped lines behind, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'We took out our gas dryer years ago. Could that still cause a gas shutoff in Madisonville?',
        a: 'Yes, and it is one of the more common findings on renovated houses. A line capped quickly rather than properly leaks slowly, and nobody notices while gas is flowing normally elsewhere. A pressure test finds it immediately. The repair is capping it properly or removing the run back to a tee — contained work once we know where it is.',
      },
    ],
  },

  'pleasant-ridge': {
    intro:
      'Gas shut off on your Pleasant Ridge two-family? The meters are usually at the rear, off the alley. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) has a large stock of classic Cincinnati brick two-families, and on that form the gas meters are commonly at the rear off the alley rather than at the front. That matters twice. Access has to be arranged rather than assumed, and the arrangement — one meter for the building or a bank with separate house lines — decides whose shutoff it is and who authorises the repair.',
      'The winter urgency is worth stating plainly on these buildings. With no gas there is no hot water and no heat, and on a two-family that affects two households rather than one. Where the building runs on a single meter and one house line, both units are out until the system passes a test, which is a strong argument for the owner acting the same day rather than waiting to see.',
    ],
    commonIntro:
      "In Pleasant Ridge's brick two-families, where meters sit at the rear off the alley, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Both units in my Pleasant Ridge two-family have no heat. How fast can this move?',
        a: 'Testing and repair are often the same day where the fault is accessible; the variable is the inspection and the utility’s reconnect visit. What speeds it up most is the owner authorising work on the first call rather than the second. With two households and no heat, that is worth pushing for — and we will give the owner a straight answer on scope and timing so the decision is easy.',
      },
    ],
  },

  westwood: {
    intro:
      'Gas shut off at your Westwood home? Piping vintage varies street to street here. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread right across the west side, and it runs from historic homes near the Town Hall out to street after street of early-1900s and mid-century houses. There is no single Westwood answer to a gas shutoff, because the piping vintage genuinely changes from one street to the next.',
      'On the older streets it is black iron installed when the houses were built, altered in stages, and a pressure test finds the accumulated result. On the mid-century streets the systems are simpler but the piping is still original and now feeding appliances several generations newer. What is consistent is the sequence: test first to find out what is actually wrong, then quote, rather than quoting on the visible fault and revising when the gauge disagrees.',
    ],
    commonIntro:
      "Across Westwood's historic and mid-century homes, on gas systems of very different vintages, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'How can you quote a Westwood gas repair without seeing it?',
        a: 'We do not, and that is deliberate. On a neighborhood this varied the piping could be original black iron altered over a century or a straightforward mid-century run, and the difference matters. We test and locate first, then give you one flat-rate number that covers the actual repair — rather than a low figure that gets revised once the gauge tells the truth.',
      },
    ],
  },

  norwood: {
    intro:
      'Gas shut off in Norwood? Norwood is its own city with its own permits and inspector. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, and for a gas shutoff that is the first practical fact. Permits and inspections go through Norwood rather than Cincinnati, on Norwood’s own schedule, and the utility will be waiting for that sign-off before restoring service. An electrician or plumber who files with the city out of habit costs you a day with no hot water.',
      'The housing is dense early-1900s homes and brick two-families on small lots from the streetcar and factory era. Small lots mean the meter sits in a narrow gap with barely room to work, and two-families mean establishing whether one meter serves the building or a bank serves separate house lines. Conversion work done without permits over the decades is common, and a pressure test finds it.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and two-families, on the city's own permit schedule, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does Norwood being its own city slow down getting gas back?',
        a: 'It can help, provided the paperwork goes to the right office. Permits and inspections are Norwood’s rather than Cincinnati’s, and a smaller municipal queue often moves faster than the city’s. The risk is a contractor filing with Cincinnati by habit, which does not fail the inspection but means waiting while it is refiled. Ask whoever you call whether they have pulled Norwood permits.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Gas shut off at your Blue Ash home? Newer houses often use CSST, which needs proper bonding. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is established mid-century neighborhoods alongside newer subdivisions, and the two are piped in genuinely different materials. The mid-century houses are black iron, original, now feeding appliances several generations newer. The newer subdivisions frequently use corrugated stainless steel tubing — CSST — the flexible yellow-jacketed pipe used widely since the 1990s.',
      'CSST is a good product installed correctly, and installed correctly includes being properly bonded to the electrical grounding system. That bonding is what an inspector looks for, and it is the thing most often missing or incomplete on installations from the earlier years of its use. On a newer Blue Ash house a gas shutoff cleared by inspection frequently comes down to bonding rather than a leak. The city issues its own permits.',
    ],
    commonIntro:
      "Across Blue Ash's mid-century black iron and newer CSST systems, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'What is the yellow flexible gas pipe in my Blue Ash house, and is it a problem?',
        a: 'That is CSST — corrugated stainless steel tubing — used widely since the 1990s, and it is a sound product when installed correctly. Correctly includes being properly bonded to the electrical grounding system, and incomplete bonding is the most common issue we find on earlier installations. It is a straightforward thing to put right, and it is what an inspector will be looking for.',
      },
    ],
  },

  montgomery: {
    intro:
      'Gas shut off at your Montgomery home? In the historic district the meter position is regulated. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) has a preserved historic district of 19th-century buildings at its core, and in a designated district the visible exterior is regulated — which includes the gas meter, its riser and any exterior piping. Rebuilding in the same position is normally straightforward. Relocating a meter, or running new exterior pipe where none was visible before, can involve more than a plumbing permit.',
      'Inside, the buildings in the core are old enough to carry long gas histories, so a pressure test checks decades of alterations rather than one installation. Outside the core the housing is newer and the systems are simpler, with some sections likely piped in CSST rather than black iron. Permits and inspections are Montgomery’s own rather than the county’s, which is worth confirming before anything is filed.',
    ],
    commonIntro:
      "Across Montgomery's historic core and the established streets around it, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My house is in the Montgomery historic district. Does that affect a gas repair?',
        a: 'Only where the exterior changes. Repairing or replacing piping inside is a normal job. Relocating the meter, or running new pipe on an elevation where none was visible, is exterior work in a regulated district and may involve more than a plumbing permit. We flag it at the estimate rather than discovering it partway through.',
      },
    ],
  },

  madeira: {
    intro:
      'Gas shut off at your Madeira home? The inspection queue is the constraint, not the repair. Call (513) 586-5107.',
    relevance: [
      'Madeira (ZIP 45243) is largely mid-century single-family housing, and it is a small city with a correspondingly small building department. That is what actually determines how long a gas shutoff lasts here. Finding a leak and repairing it is frequently a single day. Getting the inspection scheduled has to fit a compact municipal department’s diary, and that is where the time goes.',
      'So we pull the Madeira permit and book the inspection alongside scheduling the work rather than once it is finished — the single thing that most shortens the wait. The systems themselves are what you would expect of the era: black iron installed with the houses, feeding appliances that have been replaced once or twice since, with the piping itself frequently untouched throughout.',
    ],
    commonIntro:
      "Across Madeira's mid-century homes, where the inspection queue is small, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'How long will I be without gas in Madeira?',
        a: 'The testing and repair are frequently a single day. What varies is the inspection, because Madeira is a small city with a compact building department, and then the utility’s reconnect visit. That is why we book the inspection alongside the work rather than after it. If someone quotes you a day start to finish without mentioning the inspection, ask how they plan to handle it.',
      },
    ],
  },

  wyoming: {
    intro:
      'Gas shut off at your Wyoming home? Victorian houses often still have gas-lighting pipe in the walls. Call (513) 586-5107.',
    relevance: [
      'Wyoming (ZIP 45215) is grand Victorian and early-1900s houses on established streets, and houses of that age were originally lit by gas. When electric lighting arrived those gas-light lines were not usually removed — they were capped at the wall and left in place, because taking them out meant opening plaster throughout the house.',
      'A century later those abandoned runs are still connected to the system, and a pressure test tests them along with everything else. A cap that has held for decades can start weeping, and because the pipe is behind finished plaster in a house people have invested in preserving, locating it takes patience rather than force. It is one of the more genuinely interesting problems we deal with, and it is specific to houses of this era and this quality. Wyoming issues its own permits.',
    ],
    commonIntro:
      "In Wyoming's grand Victorian houses, where abandoned gas-lighting lines often remain in the walls, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Could old gas-lighting pipe be why my Wyoming house failed a pressure test?',
        a: 'It genuinely could. Houses of this era were lit by gas, and when electric arrived the lines were usually capped at the wall rather than removed. Those runs are still part of the system a century later, and a cap that held for decades can begin to weep. Locating one behind original plaster takes patience — we isolate sections rather than opening walls speculatively.',
      },
    ],
  },

  mariemont: {
    intro:
      'Gas shut off at your Mariemont home? A National Historic Landmark village, and the meter is exterior. Call (513) 586-5107.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned 1920s garden community and a National Historic Landmark, with the designation covering the village rather than one block. For a gas repair that matters where the exterior is affected: the meter, its riser and any exterior piping are visible, and the village regulates appearance. Repairing in place is straightforward; relocating a meter or adding an exterior run is not simply a plumbing permit.',
      'Inside, these are 1920s and 30s houses piped in black iron, with a century of alterations behind them, and Tudor Revival construction means solid walls and finished plaster rather than easy chases. Where a run has to be replaced the routing needs planning so it does not cross rooms nobody wants opened. We work that out before starting rather than discovering it with the gas already off.',
    ],
    commonIntro:
      "In Mariemont's 1920s houses, inside a National Historic Landmark village, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Does Mariemont’s landmark status affect a gas repair inside the house?',
        a: 'Not the interior work itself — repairing or replacing piping inside is a normal job with a plumbing permit. Where it matters is the exterior: the meter, its riser and any visible pipe are regulated, so relocating a meter or adding an exterior run needs more than a plumbing permit. We raise it at the estimate rather than mid-job.',
      },
    ],
  },

  cheviot: {
    intro:
      'Gas shut off in Cheviot? Its own city permits, and the meter sits in a narrow gap. Call (513) 586-5107.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city surrounded by Cincinnati, in a grid of early-1900s homes and brick two-families along Harrison Avenue. Space is the practical constraint: the gap between one house and the next is often barely wide enough to stand in, and that is where the gas meter and riser sit. Working on a meter set in a gap that narrow is slower rather than harder.',
      'Being its own city means the permit and inspection go through Cheviot rather than Cincinnati, on Cheviot’s own schedule. On the two-families, establishing whether one meter serves the building or a bank serves separate house lines comes first, because it decides whose shutoff it is. Conversion work done without permits over the decades is common here and a pressure test finds it.',
    ],
    commonIntro:
      "In Cheviot's tightly packed early-1900s homes and brick two-families, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'The gas meter for my Cheviot house is in the gap between buildings. Is that a problem?',
        a: 'It makes the work slower rather than harder — there is often not enough room to set up as we would like, and occasionally we need access from the neighbouring property. Worth mentioning when you call so the visit is scheduled with enough time. It does not change the quality of the repair or what the inspector will be looking at.',
      },
    ],
  },

  covedale: {
    intro:
      'Gas shut off at your Covedale home? The city and township line runs through here. Call (513) 586-5107.',
    relevance: [
      'Covedale (ZIP 45238) sits where Cincinnati meets Green Township along Glenway and Cleves Warsaw, and that boundary runs through the neighborhood rather than around it. For a gas shutoff the permit and inspection follow the address, so two houses a few hundred feet apart on the same road can answer to different authorities — and the utility waits for the correct sign-off before restoring service.',
      'The housing is early-1900s through mid-century single-family, so the piping ranges from original black iron altered over a century to simpler mid-century runs now feeding much newer appliances. Neither is unusual. What is specific to Covedale is checking which side of the line you are on before anything is submitted, because a misfiled permit means waiting with no hot water.',
    ],
    commonIntro:
      "Across Covedale's older and mid-century homes, on either side of the city and township line, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'How do I know whether my Covedale address is city or township for the gas permit?',
        a: 'We check it before filing, and it genuinely needs checking here. The boundary with Green Township runs through this area rather than neatly around it, so neighbouring streets can answer to different authorities. Getting it wrong means the permit goes back and you wait while it is refiled — a day with no hot water you would rather not spend.',
      },
    ],
  },

  covington: {
    intro:
      'Gas shut off in Covington? Northern Kentucky is Duke Energy Kentucky, not Ohio. Call (513) 586-5107.',
    relevance: [
      'Covington (ZIP 41011) sits across the Ohio from downtown Cincinnati, and the first thing to know has nothing to do with the piping: Northern Kentucky is served by Duke Energy Kentucky, a separate operating company from Duke Energy Ohio, with its own crews and its own scheduling, regulated by the Kentucky Public Service Commission rather than Ohio’s PUCO.',
      'The process is the same either side of the river. On the 19th-century rowhouses in MainStrasse and Licking Riverside the meters are frequently banked on a party wall or in a shared basement, so establishing which house line is yours comes first. Sitting low near two rivers adds the other common cause: gas appliances that have been under water, where the control valves are replaced rather than dried out and relit.',
    ],
    commonIntro:
      "In Covington's 19th-century rowhouses on low ground near two rivers, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Is my Covington gas handled by the same Duke as Cincinnati?',
        a: 'Not quite. Northern Kentucky is served by Duke Energy Kentucky, a separate entity from Duke Energy Ohio with its own crews and scheduling, and complaints go to the Kentucky Public Service Commission rather than Ohio’s PUCO. The rule affecting you is the same either side of the river: they stop at the meter, and will not restore gas until the house piping has been repaired and passes a pressure test.',
      },
    ],
  },

  newport: {
    intro:
      'Gas shut off in your Newport home? East Row party walls mean shared meter banks. Call (513) 586-5107.',
    relevance: [
      'Newport (ZIP 41071) holds the East Row Historic District, hundreds of 19th-century houses standing shoulder to shoulder, and that form shapes every gas repair here. Where houses share party walls the meters are commonly banked together or in shared basement areas, with house lines running off in different directions — so the first job is establishing which line is yours before testing anything.',
      'These are also among the oldest gas installations in Northern Kentucky, from an era when the houses were lit by gas, extended for cooking and again for central heating. A pressure test finds what those stages left behind, including capped lighting runs still connected in the walls. The utility is Duke Energy Kentucky rather than Duke Energy Ohio, and the historic district means exterior meter work is regulated.',
    ],
    commonIntro:
      "In Newport's East Row Victorians, where meters are banked on shared walls, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'The gas meters for my East Row house and next door are together. Whose repair is it?',
        a: 'It depends which house line the fault is on. Banked meters often serve separate piping beyond them, in which case the fault belongs to whichever line failed. Where one meter feeds both houses the system is shared and so is the cost. We establish that before quoting, because it determines who authorises the work as well as who pays.',
      },
    ],
  },

  bellevue: {
    intro:
      'Gas shut off in Bellevue after high water? Submerged gas controls are replaced, not dried. Call (513) 586-5107.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact river city of well-preserved late-1800s houses on narrow lots, sitting low against the Ohio, and that position produces the least negotiable kind of gas shutoff. Where a furnace, water heater or boiler has been under water, the gas control valve and burner controls are replaced rather than dried out and relit. Water damages those components internally with no outward sign.',
      'That is settled before any argument starts, and it is where homeowners here lose the most time hoping otherwise. The houses add the second factor: tall for their footprint, close together, with piping installed when they were lit by gas and altered ever since. Duke Energy Kentucky is the utility, and it will not restore service until the piping passes a pressure test regardless of which appliances were replaced.',
    ],
    commonIntro:
      "In Bellevue's close-set late-1800s homes on low ground, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Bellevue furnace was under water but seems to work. Does it need replacing?',
        a: 'Yes. The concern is the gas control valve and the burner controls, not whether it fires — water damages those internally with no outward sign, and they can work for a while before failing in a way you do not want a gas appliance failing. Manufacturers are explicit that submerged gas controls are replaced rather than dried. Anyone saying otherwise is gambling with your house.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Gas shut off at your Fort Thomas home? Large houses mean extensive systems and more joints. Call (513) 586-5107.',
    relevance: [
      'Fort Thomas (ZIP 41075) is stately early-1900s houses on tree-lined streets above the river, and the houses are large enough that the gas systems in them are genuinely extensive. A furnace, a water heater, a range, frequently a second heating zone and gas fireplaces added at some point — each is a branch, and every branch is joints that a pressure test checks together.',
      'That is why diagnosing a shutoff on a large house here takes longer than on a modest one: there are simply more places for it to be. We isolate and test in sections rather than looking for one obvious fault. Gas fireplaces are worth mentioning when you call, because they are the branch most often added without a permit. The utility is Duke Energy Kentucky rather than Duke Energy Ohio.',
    ],
    commonIntro:
      "In Fort Thomas' large early-1900s homes with extensive gas systems, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Why is finding the leak taking longer in my Fort Thomas house than my neighbour’s?',
        a: 'Almost certainly because there is more system to test. A house with a furnace, water heater, range, second zone and two gas fireplaces has several times the joints of a modest house with two appliances. We isolate and test in sections, which is the only reliable method — and it means a larger house genuinely takes longer to diagnose, not that anything worse is wrong.',
      },
    ],
  },

  florence: {
    intro:
      'Gas shut off in Florence? Boone County permits, and newer homes often use CSST. Call (513) 586-5107.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and has grown fast, which means the gas systems here span a wider range than almost anywhere we work. Mid-century neighborhoods are black iron, original, now feeding much newer appliances. Subdivisions built since the 1990s frequently use corrugated stainless steel tubing — CSST — the flexible yellow-jacketed pipe.',
      'CSST is sound installed correctly, and correctly includes proper bonding to the electrical grounding system. Incomplete bonding is the most common issue we find on earlier installations, and it is what an inspector looks for. Permits and inspections go through Boone County and the city rather than any Ohio authority, and the utility is Duke Energy Kentucky with its own reconnect scheduling.',
    ],
    commonIntro:
      "Across Florence's mid-century black iron and newer CSST systems in Boone County, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Florence house has yellow flexible gas pipe. Should I be worried?',
        a: 'Not inherently. That is CSST, used widely since the 1990s and a sound product when installed correctly — which includes being properly bonded to the electrical grounding system. Incomplete bonding is the common issue on earlier installations, it is what an inspector checks, and it is straightforward to put right.',
      },
    ],
  },

  erlanger: {
    intro:
      'Gas shut off in Erlanger? Erlanger and Elsmere share a ZIP but not a permit office. Call (513) 586-5107.',
    relevance: [
      'Erlanger (ZIP 41018) is settled mid-century housing in Kenton County near the airport, and it shares its ZIP with Elsmere — a separate city with its own permit office. The filing follows the address rather than the postal code, and the utility waits for the correct sign-off before restoring gas, so getting that wrong means a day without hot water.',
      'The systems here are largely of one era: black iron installed with the houses and, in a great many cases, never replaced. The appliances have been replaced once or twice since, so what fails a pressure test is usually the piping rather than anything new. Duke Energy Kentucky is the utility, with its own crews and reconnect scheduling.',
    ],
    commonIntro:
      "Across Erlanger's mid-century homes on largely original piping, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 41018 — is that Erlanger for the gas permit?',
        a: 'Not necessarily. ZIP 41018 covers both Erlanger and Elsmere, separate cities with separate permit offices, so the filing follows your actual address. We confirm it before submitting anything, because a misdirected permit means waiting while it is refiled and Duke Energy Kentucky will not restore service without the correct sign-off.',
      },
    ],
  },
};
