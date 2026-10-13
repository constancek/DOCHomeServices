export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  sedamsville: {
    intro:
      'Flooded in Sedamsville? Before you turn the water back on, we go through the plumbing the flood left behind — water heater, sewer lateral, and shutoffs — for the homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) sits low along River Road where the Ohio River and a hard rain both find the basements first, and the housing climbing the hill above dates to the late 1800s and early 1900s. When water gets into a lower level here it reaches original cast-iron drains and galvanized supply lines that were already thin, and usually the water heater and gas controls sitting on the floor beside them.',
      'We inspect what the water actually touched rather than everything at once. If the burner assembly and gas valve went under, that heater is a replacement and we will say so; if the base stayed dry, it is fine and we will say that too. We camera the cast-iron main for the silt a flood packs into it, and we test the shutoff valves that sat in dirty water and now refuse to turn.',
    ],
    commonIntro:
      "In Sedamsville's low riverside homes on century-old drain lines, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'The river backed into my Sedamsville basement. What do you check first?',
        a: 'The water heater base and gas controls, then the shutoff valves, then the cast-iron main. Those three are the ones that fail quietly and cost you later. If the drain is slow at all we camera it, because a lateral that took on river silt looks fine until the first full load of laundry backs it up.',
      },
    ],
  },
  'sayler-park': {
    intro:
      'Flooded in Sayler Park? We inspect and repair the plumbing the water left behind before you resume normal use, from the riverfront streets to the homes up the hill. Call (513) 586-5107.',
    relevance: [
      "Sayler Park (ZIP 45233) is Cincinnati's westernmost neighborhood, strung along the Ohio River in the floodplain, and its frame houses were built when it was still the village of Home City before annexation in the early 1900s. Those century-old homes sit in the path of high water, and the plumbing inside them — old galvanized supply and original drains — is exactly what a flood finds.",
      'After the water drops we go through the system the flood ran through: the water heater if it went under, the supply lines and shutoffs that soaked in dirty water, and the sump pump that worked hardest during the event and often dies right after it. Where the main shows any sign of backing up, we camera it instead of snaking blind.',
    ],
    commonIntro:
      "Across Sayler Park's floodplain frame houses, the post-flood plumbing failures we see most are:",
    localFaqs: [
      {
        q: 'My Sayler Park house floods most years. Is there anything permanent you can do after?',
        a: 'The inspection is the same each time, but we also check the sump pump and its check valve, because in a floodplain home those are the parts standing between you and the next event. A pump that survived one flood is not guaranteed to survive the next, and the check valve is what stops water coming back down the discharge line.',
      },
    ],
  },
  riverside: {
    intro:
      'Flooded in Riverside? Before you turn the water back on, we go through the plumbing the Ohio River left behind — water heater, main, shutoffs, and sump pump — for the homes along River Road. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of low Ohio River bottomland running along River Road and US-50, where flooding and high groundwater are a constant backdrop rather than a rare event. Homes here already lean on backwater valves, sump pumps, and basement drains, and a flood puts every one of those to the test at once.',
      'Our post-flood work here starts with the parts that carried the water: the sump pump and check valve, the backwater valve that either held or did not, and the water heater if the base went under. We camera the main for silt, because a Riverside lateral that took on flood mud is the one that backs the lower level up again a week later.',
    ],
    commonIntro:
      "On Riverside's low riverfront lots, the post-flood plumbing failures we handle most are:",
    localFaqs: [
      {
        q: 'My Riverside sump pump ran all through the flood. Does it need replacing?',
        a: 'It needs testing, not assuming. A pump that ran continuously through a flood may have burned out its motor or its float, and you find out during the next storm if nobody checks. We test the pump and the check valve while the ground is still wet, which is when a weak one shows itself.',
      },
    ],
  },
  'east-price-hill': {
    intro:
      'Flooded in East Price Hill? We inspect and repair the plumbing a flood left behind before you resume normal water use, for the dense homes around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) is packed with two- and three-story frame homes and brick two-families built close together in the early 1900s on the bluff above the river flats. When a storm or a backup floods a lower level here, the shared walls and tight lots mean the water in one basement is often sitting against the same original cast-iron and galvanized plumbing next door.',
      'In a two-family we inspect each side separately, because the flood may have reached one unit’s water heater and gas controls and not the other’s. We camera the main for flood silt, check the shutoffs that soaked in dirty water, and isolate a repair to the affected unit rather than shutting the whole building down.',
    ],
    commonIntro:
      "In East Price Hill's dense early-1900s two-families, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'One unit of my East Price Hill two-family flooded and the other did not. Do you check both?',
        a: 'We check the flooded unit in full and inspect the shared lines that serve both. The water heater and gas controls are per-unit, so the dry side is usually fine. The sewer lateral is often shared, though, so if that is where the flood pushed silt, both sides have a problem even if only one saw water.',
      },
    ],
  },
  'west-price-hill': {
    intro:
      'Flooded in West Price Hill? Before you go back to normal water use, we check the plumbing the flood left behind — water heater, shutoffs, drains, and sump pump — for the homes along Glenway Avenue. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side out along Glenway Avenue toward Covedale, built mostly with 1920s through 1950s single-family homes. That housing puts the water heater, the shutoffs, and the appliance connections down in a basement, which is exactly where storm water and backups collect.',
      'After a flood we go through those basement components in order: the water heater burner and gas controls if the base went under, the supply lines and shutoff valves that sat in dirty water and seize, and the floor drains and traps packed with debris. Where the main is slow we camera it rather than snake it twice.',
    ],
    commonIntro:
      "Across West Price Hill's mid-century single-family basements, the post-flood plumbing failures we see most are:",
    localFaqs: [
      {
        q: 'The flood in my West Price Hill basement only reached a couple of inches. Do I need you?',
        a: 'Probably not. If the water never touched the water heater base, the gas connections, or the shutoffs, and the drains run at normal speed, there may be nothing here worth paying for. The one part we would still check is the sump pump. Tell us how high the water got when you call and we will say on the phone whether a visit is warranted.',
      },
    ],
  },
  'lower-price-hill': {
    intro:
      'Flooded in Lower Price Hill? We inspect and repair the plumbing the flood left behind before you turn the water back on, for the historic rowhouses around State Avenue. Call (513) 586-5107.',
    relevance: [
      "Lower Price Hill (ZIP 45204) sits down in the Mill Creek valley near the river and the industrial bottoms around State Avenue, where high water on the creek and the river both raise the risk of sewer and storm backups. Its 19th-century Italianate brick rowhouses were built long before modern codes and still run on old galvanized and cast-iron systems the flood water sits against.",
      'Our post-flood work in these rowhouses is careful because the finishes are original. We camera the cast-iron main for the silt a valley flood packs in, check the water heater and gas controls if the base went under, and test the shutoffs that soaked in dirty water, repairing what failed without tearing into original woodwork to do it.',
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century valley rowhouses, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'Do you camera the main in an old Lower Price Hill rowhouse, or just snake it?',
        a: 'We camera it. After a valley flood the cast-iron main is usually carrying silt and mud, and a camera tells us whether that clears with a snake or whether a section of century-old pipe has cracked or collapsed. Guessing on a house this old is how people pay to snake the same line three times.',
      },
    ],
  },
  'over-the-rhine': {
    intro:
      'Flooded in Over-the-Rhine? We inspect and repair the plumbing a flood left behind before you resume normal use, for the historic buildings around Vine Street and Findlay Market. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds block after block of Italianate brick buildings from the 1850s to the 1880s, most now split into apartments and condos running on a patchwork of brittle cast-iron stacks, galvanized risers, and shared lines. When a lower level or a shared basement floods here, the water reaches mechanical equipment and shared plumbing that serves several units at once.',
      'We inspect per unit and per shared line. The water heater and gas controls are checked where the base went under, the shared sewer stack is cameraed for flood silt, and the shutoffs that soaked in dirty water are tested before anyone turns the building back on. A repair gets isolated to the affected unit rather than shutting water to the whole building.',
    ],
    commonIntro:
      "In Over-the-Rhine's 19th-century converted multi-units, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'A basement flood in my OTR building reached the shared water heaters. Whose problem is it?',
        a: 'Each unit’s heater is inspected on its own merits — the ones whose burners and gas controls went under need replacing, the ones that stayed above the water line do not. The shared sewer stack is a building matter, and if the flood pushed silt into it we hand over the camera footage so owners can sort the repair between them.',
      },
    ],
  },
  downtown: {
    intro:
      'Flooded in a downtown condo or loft? We inspect and repair the plumbing a flood left behind before you resume normal use, across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures turned residential. A flood here is usually a burst line or a backed-up stack rather than river water, and in a building this tall the water travels — a failure several floors up lands in the units and mechanical spaces below it.',
      'We trace what the water reached: the water heater and gas or electric controls if the unit went under, the supply lines and shutoffs that soaked, and the stack the water backed up through. In a tower we coordinate access and the building shutoff so the inspection and repair on one floor do not disrupt the rest of the building.',
    ],
    commonIntro:
      "In downtown's condos, lofts, and older conversions, the post-flood plumbing failures we handle most are:",
    localFaqs: [
      {
        q: 'Water came down from a unit above mine in a downtown tower. What do you inspect?',
        a: 'The path the water took, top to bottom — the failed line or fixture on the upper floor, and then everything below it the water reached: your ceiling, your walls, and any plumbing or shutoffs that got wet. We document the source and the route, which is what your building and your insurer will both want on record.',
      },
    ],
  },
  'west-end': {
    intro:
      'Flooded in the West End? Before you turn the water back on, we go through the plumbing the flood left behind — water heater, main, and shutoffs — for the homes around TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, near TQL Stadium and Linn Street, with historic Italianate rowhouses and brick homes on low ground near the Mill Creek basin. That low ground raises the risk of drain and sewer backups in heavy rain, and the older homes carry decades-old galvanized and cast-iron plumbing the flood water reaches.',
      'After the water drops we camera the main for the silt a basin flood pushes in, check the water heater and gas controls if the base went under, and test the shutoffs and supply lines that sat in dirty water. Where a rowhouse shares a lateral, we locate the actual blockage before anyone starts digging.',
    ],
    commonIntro:
      "Across the West End's historic rowhouses on low ground, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'My West End basement backed up during the flood, not just filled with rain. Does that change what you check?',
        a: 'Yes. A sewer backup means the main itself is the suspect, so we camera it first to find whether the flood pushed silt in or a section of old lateral has failed. Rainwater alone points us at the sump pump and the floor drains instead. Which one it was tells us where to start.',
      },
    ],
  },
  'mount-adams': {
    intro:
      'Flooded in Mount Adams? We inspect and repair the plumbing a flood left behind before you resume normal use, on the steep, narrow streets of the hilltop. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is a dense hilltop of 19th-century rowhouses and townhomes above downtown and Eden Park, where the steep grade sends storm water straight downhill into the lowest basements and puts real pressure on sewer laterals during heavy rain. When one of those lower levels floods, it reaches century-old plumbing and whatever mechanical equipment lives down there.',
      'Our post-flood work here handles the tight, steep access the hill is known for and goes through the components the water touched: the water heater and gas controls if the base went under, the shutoffs that soaked, and the lateral, which we camera for flood silt because a hillside line under that much pressure fails at the worst time.',
    ],
    commonIntro:
      "In Mount Adams' steep, century-old rowhouses, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'Storm water ran downhill into my Mount Adams basement. Is the sewer lateral part of the check?',
        a: 'On the hill it is one of the first things we look at. The grade that pushes water into your basement also drives silt and debris into the lateral, and a line already stressed by that slope is the one that backs up next. We camera it to see whether it clears or whether a section has given way.',
      },
    ],
  },
  'mount-auburn': {
    intro:
      'Flooded in Mount Auburn? We inspect and repair the plumbing a flood left behind before you resume normal use, in one of Cincinnati’s oldest hilltop neighborhoods. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) rises just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and mansions, many now divided into apartments. Those Victorian-era houses carry some of the oldest plumbing in the city — original cast-iron drains and galvanized supply — and when a subdivided home floods, the water reaches shared lines that serve several units.',
      'We inspect per unit and per shared line, checking the water heaters whose bases went under, cameraing the shared stack for flood silt, and testing the shutoffs that soaked in dirty water. A repair gets isolated to the affected apartment rather than shutting off water to the whole house.',
    ],
    commonIntro:
      "In Mount Auburn's grand, subdivided 19th-century homes, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'My Mount Auburn house is split into apartments and one flooded. Do you shut the whole building down?',
        a: 'No. We isolate the affected unit and inspect the shared lines separately. The water heater and gas controls are per unit, so only the flooded one is likely a replacement. The shared sewer stack is inspected on its own, and if the flood packed silt into it that is a building repair, not a single tenant’s.',
      },
    ],
  },
  clifton: {
    intro:
      'Flooded in Clifton? We inspect and repair the plumbing a flood left behind before you turn the water back on, for the homes around Ludlow Avenue and the Gaslight District. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop near the University of Cincinnati, with large Victorian and early-1900s homes on tree-lined streets, plenty of them now rentals. The mature trees are the tell: root systems sit over sewer laterals laid a century ago, and a lateral already narrowed by roots is the one that packs solid when a flood pushes silt into it.',
      'After a flood we camera the lateral, because in Clifton the drain that runs slow for a week is the one that backs up the first time somebody runs a full load of laundry. We also check the water heater and gas controls if the base went under, and the shutoffs that soaked in dirty water and now will not turn.',
    ],
    commonIntro:
      "In Clifton's large tree-shaded Victorians, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'The drains in my Clifton house are slow since the flood but not blocked. Worth cameraing?',
        a: 'Yes. Clifton laterals are old and sit under mature trees, so they usually carry some root intrusion before a flood ever arrives. Silt collects against those roots and turns a partial restriction into a blockage. A camera shows whether it is debris that clears or a section that has failed, which is the difference between an hour of work and a dig.',
      },
    ],
  },
  corryville: {
    intro:
      'Flooded in Corryville? We inspect and repair the plumbing a flood left behind before you resume normal use, in the Short Vine area near UC. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals that share walls and stacks. When a lower level floods here, the water reaches aging plumbing under heavy year-round use and the shared lines running between units.',
      'We inspect the water heater and gas controls of any unit whose base went under, camera the shared stack for flood silt, and test the shutoffs that soaked in dirty water. In a rental packed with tenants, we isolate the repair to the affected unit so the rest of the building keeps its water.',
    ],
    commonIntro:
      "In Corryville's dense student rentals near campus, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'I manage a Corryville rental that flooded between tenants. What has to happen before I re-let it?',
        a: 'Get the water heater checked before anyone relies on hot water — if the burner and gas controls went under it is a replacement, not a relight. Have the shutoffs tested and the main cameraed if the drains are slow. A unit that floods and gets rented on a hopeful relight is the one that floods again from the inside.',
      },
    ],
  },
  northside: {
    intro:
      'Flooded in Northside? We inspect and repair the plumbing a flood left behind before you turn the water back on, for the homes near Hamilton Avenue and the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) runs along Hamilton Avenue down toward the Mill Creek valley, where the low ground raises a real risk of drain and sewer backups in heavy rain. The late-1800s and early-1900s homes here carry original galvanized and cast-iron plumbing, so a flood reaches lines that were already near the end of their service life.',
      'Our post-flood work starts at the main, which we camera for the silt a valley flood packs in, then moves to the water heater and gas controls if the base went under and the shutoffs that soaked in dirty water. Where the water came up through the drains rather than in from the rain, the sump pump and its check valve get tested too.',
    ],
    commonIntro:
      "In Northside's older homes near the Mill Creek valley, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'My Northside basement backs up whenever Mill Creek runs high. What do you check after?',
        a: 'The main first, cameraed, because a valley backup leaves silt in the lateral that sets up the next one. Then the sump pump and check valve, since those are what stand between you and the following storm. If the water heater base went under, that unit is a replacement, and we will tell you plainly if it did not.',
      },
    ],
  },
  'college-hill': {
    intro:
      'Flooded in College Hill? We inspect and repair the plumbing a flood left behind before you resume normal use, for the homes along Hamilton Avenue and Belmont. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with large early-1900s homes, mid-century houses, and older clay or cast-iron sewer laterals prone to root intrusion. A lateral already carrying roots is the one that packs solid when a flood pushes silt into it, so a slow drain after the water drops is worth taking seriously here.',
      'After a flood we camera the lateral to see whether the flood silt clears or a section has failed, check the water heater and gas controls if the base went under, and test the shutoffs and supply lines that soaked in dirty water. What failed gets a flat-rate repair; what merely got wet we leave alone.',
    ],
    commonIntro:
      "Across College Hill's older and mid-century homes, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'Do old clay sewer laterals in College Hill get worse after a flood?',
        a: 'They can. A clay lateral already taking on roots has restrictions the flood fills with silt, and the two together turn a partial blockage into a full one. We camera it rather than guess, because the fix for flood debris is a clearing and the fix for a collapsed clay section is a dig, and you should not pay for one thinking it is the other.',
      },
    ],
  },
  'walnut-hills': {
    intro:
      'Flooded in Walnut Hills? We inspect and repair the plumbing a flood left behind before you resume normal use, for the homes and apartment buildings around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop just northeast of downtown, with grand 19th-century homes and apartment buildings around Peebles Corner, much of it now split into units on aging cast-iron and galvanized plumbing. When a lower level or a shared basement floods, the water reaches shared lines that serve several apartments at once.',
      'We inspect per unit and per shared line: the water heaters whose bases went under, the shared stack cameraed for flood silt, and the shutoffs that soaked in dirty water. A repair is isolated to the affected apartment so the rest of the building keeps its water on.',
    ],
    commonIntro:
      "In Walnut Hills' historic subdivided homes and apartment buildings, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'A shared basement in my Walnut Hills building flooded. Which water heater has to go?',
        a: 'Only the ones whose burner and gas controls actually went under. In a shared basement the units sit at slightly different heights, so the flood line often catches some heaters and spares others. We check each on its own, so you replace the ones that are unsafe and keep the ones that are fine.',
      },
    ],
  },
  'east-walnut-hills': {
    intro:
      'Flooded in East Walnut Hills? We inspect and repair the plumbing a flood left behind before you resume normal use, for the stately homes around Woodburn Avenue and DeSales Corner. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes and brick apartment buildings with original woodwork and finished lower levels. When one of those lower levels floods, the water reaches original plumbing and lands in finishes that cost real money to redo.',
      'We inspect carefully to protect those interiors: the water heater and gas controls if the base went under, the corroded galvanized lines and shutoffs the water soaked, and the main, which we camera for flood silt rather than tear open a finished wall to reach. What actually failed gets repaired, and we say plainly what only got wet.',
    ],
    commonIntro:
      "In East Walnut Hills' stately early-1900s homes, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'My East Walnut Hills lower level is finished and it flooded. How do you inspect without tearing it up?',
        a: 'We camera the main through an existing cleanout instead of opening walls, and we test the water heater, gas controls, and shutoffs at the points where they are already accessible. Opening finished space is a last resort, done only where the camera or the readings point at a failure we cannot confirm any other way.',
      },
    ],
  },
  avondale: {
    intro:
      'Flooded in Avondale? We inspect and repair the plumbing a flood left behind before you resume normal use, near the hospitals and the Cincinnati Zoo. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the zoo, with older, densely built early-1900s homes and apartment buildings, much of it rental on aging plumbing under heavy use. When a lower level floods here, the water reaches lines that were already worn and, in the multi-units, the shared stacks between apartments.',
      'Our post-flood work checks the water heater and gas controls if the base went under, cameras the main or shared stack for flood silt, and tests the shutoffs that soaked in dirty water. In a rental we isolate the repair to the affected unit so the rest of the building keeps running.',
    ],
    commonIntro:
      "In Avondale's older, densely built homes and apartments, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'How fast can you get to a flooded Avondale property near the hospitals?',
        a: 'Avondale is central to our routes in the uptown area, so it is a fast reach and we aim for same-day. On the phone, tell us how high the water got and whether it reached the water heater or the shutoffs, and we will know before we arrive whether this is a full post-flood inspection or a quick check.',
      },
    ],
  },
  'hyde-park': {
    intro:
      'Flooded in Hyde Park? We go through the plumbing a flood left behind — water heater, sewer main, shutoffs, sump pump — before you turn the water back on. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is large early-1900s houses — Tudors, colonials, brick foursquares — and most of them keep the mechanical room in a lower level that is now finished. When water gets down there it reaches the water heater base, the gas controls, and the main shutoff at the same time, which is three separate problems arriving on one visit.',
      'The other thing about Hyde Park is the trees. Mature root systems sit over sewer laterals that were laid a century ago, and a lateral already narrowed by roots is the one that packs solid when a flood pushes silt into it. The drain runs slowly for a week, then backs up the first time somebody runs a full load of laundry.',
    ],
    commonIntro:
      "In Hyde Park's large early-1900s homes with finished lower levels, what we are called back for after a flood is:",
    localFaqs: [
      {
        q: 'The water heater in my Hyde Park basement got wet. Does it have to go?',
        a: 'If the water reached the burner assembly and the gas control valve, yes. Manufacturers direct replacement rather than repair on a flooded gas unit, and they are right to — the controls corrode inside the housing where nobody can see it, and a gas valve that fails after a flood fails unsafely. If the water stayed below the base and never touched the burner, the unit is usually fine and we will tell you that.',
      },
      {
        q: 'Should I have the sewer lateral cameraed after a Hyde Park flood?',
        a: 'If the drains are at all slow, yes. Hyde Park laterals are old and sit under mature trees, so they are usually carrying some root intrusion before the flood ever happens. Silt collects against roots and turns a partial restriction into a blockage. A camera shows whether it is debris that clears or a section that has failed, which is the difference between an hour of work and a dig.',
      },
    ],
  },
  oakley: {
    intro:
      'Flooded in Oakley? We inspect and repair the plumbing a flood left behind before you resume normal use, for the homes around Oakley Square and Madison Road. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is an east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The bungalows were built with galvanized supply and cast-iron drains now well past their prime, so a flood reaches lines that were already narrowing from the inside.',
      'After a flood we check the components the water touched: the water heater and gas controls if the base went under, the corroded shutoffs that soaked in dirty water and now will not turn, and the main, which we camera for flood silt where the bungalow drains run slow. What failed gets a flat-rate repair; what merely got wet we leave.',
    ],
    commonIntro:
      "Across Oakley's early-1900s bungalows, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'My Oakley bungalow still has galvanized supply lines. Did the flood ruin them?',
        a: 'The flood did not corrode them — that has been happening for decades from the inside. What it does is seize the shutoff valves that sat underwater, so the valve you would reach for in the next emergency is the one that will not turn. We test the shutoffs first and give you a straight answer on whether the supply is worth repairing in place or is due for replacement.',
      },
    ],
  },
  'mount-lookout': {
    intro:
      'Flooded in Mount Lookout? We inspect and repair the plumbing a flood left behind before you resume normal use, for the homes around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop around Mount Lookout Square near Ault Park, with older homes and larger houses on quiet, hilly streets. The hillside grade puts extra demand on basement drains and sewer laterals in heavy rain, so storm water tends to find the lowest basements and drive silt into lines already under pressure.',
      'Our post-flood work here cameras the lateral for the flood silt the grade pushes in, checks the water heater and gas controls if the base went under, and tests the shutoffs that soaked in dirty water. Where the water came up through the drains, the sump pump and check valve get tested before the next storm.',
    ],
    commonIntro:
      "In Mount Lookout's older hilltop homes, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'Storm water pooled in my Mount Lookout basement off the hill. Is the sump pump part of the check?',
        a: 'Yes, and it is one of the first things we test. A pump on a hillside home works hard during a storm flood and often dies right after, and you find that out during the next one. We test the pump and its check valve while the ground is still saturated, which is when a failing one gives itself away.',
      },
    ],
  },
  'columbia-tusculum': {
    intro:
      'Flooded in Columbia-Tusculum? We inspect and repair the plumbing a flood left behind before you turn the water back on, in Cincinnati’s oldest neighborhood near the river. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its restored Victorian Painted Ladies on low riverside ground near the Ohio River. That low ground raises the risk of basement and sewer backups when the river runs high, and the Victorian homes still carry original plumbing well past its service life.',
      'We inspect carefully to protect those historic interiors: the water heater and gas controls if the base went under, the aging supply lines and shutoffs the river water soaked, and the main, which we camera for flood silt rather than tear into original finishes. What failed gets repaired; what only got wet we say so.',
    ],
    commonIntro:
      "In Columbia-Tusculum's historic Painted Ladies near the river, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'My Columbia-Tusculum home is a restored Painted Lady that took on river water. How do you avoid damaging it?',
        a: 'We work through existing access points — cleanouts for the camera, accessible fittings for the shutoffs and water heater — so the inspection does not mean opening restored walls. Repairs are planned around the original detailing, and we open finished areas only where a reading or the camera confirms a failure we cannot reach otherwise.',
      },
    ],
  },
  'mount-washington': {
    intro:
      'Flooded in Mount Washington? Before the water goes back on, we go through what the flood left in the basement, starting with a water heater whose burner and gas controls may have gone under, for homes along Beechmont Avenue. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) built out from the early 1900s into the mid-century as single-family homes on the far east side, and almost every one of them keeps the gas water heater on the basement floor. When storm water or a backed-up drain rises even a foot down there, the burner assembly and the gas control valve are the first things it reaches.',
      'A heater that took water into its burner and controls is a replacement, not a relight, because the controls corrode inside the housing and a gas valve that fails after a soaking fails unsafely. We say so when the base went under, and we say the opposite when the water stayed below it and the unit is fine. The older sewer laterals along Beechmont Avenue can crack or fill with roots, so if the drains run slow afterward we camera the line rather than guess.',
    ],
    commonIntro:
      "Across Mount Washington's early-1900s and mid-century single-family homes, the plumbing a flood tends to leave behind is:",
    localFaqs: [
      {
        q: 'The flood barely wet the floor of my Mount Washington basement. Do I still need you?',
        a: 'Maybe not. If the water never reached the water heater base, the gas connections, or the shutoffs, and the drains still run at their normal speed, there may be nothing here worth paying for. The one part we would still test is the sump pump. Tell us how high the water came when you call and we will say on the phone whether a visit is warranted.',
      },
    ],
  },
  madisonville: {
    intro:
      'Flooded in Madisonville? We check the water heater, the sewer main, the shutoffs, and the sump pump before you go back to normal water use, for homes around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) has two kinds of plumbing sitting side by side, and floods find both. The older stock along Madison Road and Whetsel Avenue still runs on galvanized supply and cast-iron drain lines, which corrode from the inside and are already narrowed before a flood adds silt to them. Newer infill fails somewhere else entirely, usually at appliance connections and shutoff valves that sat in dirty water and then seized.',
      'The renovated houses are the ones that catch people out. Years of steady reinvestment here mean a lot of homes have a new kitchen and a finished lower level sitting on original plumbing nobody replaced. After a flood the old cast-iron main is the component that fails, and the water it puts back into the house lands in finishes installed recently rather than in a bare cellar.',
    ],
    commonIntro:
      "Across Madisonville's mix of early-1900s homes and newer infill, the post-flood plumbing failures we see most are:",
    localFaqs: [
      {
        q: 'My Madisonville house still has galvanized pipe. Did the flood damage it?',
        a: 'The flood did not corrode it — that has been happening for decades from the inside. What a flood does is finish the job on the parts already thin, and seize the shutoff valves that sat underwater. The valve you would reach for in the next emergency is the one most likely not to turn. We check the shutoffs first and give you a plain answer on whether the supply lines are worth repairing in place or whether you are now spending money on a system that should be replaced.',
      },
      {
        q: 'The flood only reached an inch or two in my Madisonville basement. Do I need you?',
        a: 'Probably not. If the water never touched the water heater base, the gas connections, or the shutoffs, and the drains run at normal speed, there may be nothing here worth paying us for. The one component we would still want checked is the sump pump, because that is the part that worked hardest during the flood and the part you find out about during the next storm. Tell us how high the water got when you call and we will say on the phone whether a visit is warranted.',
      },
    ],
  },
  'pleasant-ridge': {
    intro:
      'Flooded in Pleasant Ridge? We inspect and repair the plumbing a flood left behind before you resume normal use, for the homes along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those two-families carry decades-old plumbing and often share or closely space their sewer laterals, so when one basement floods the fault is frequently downstream of both units.',
      'We inspect each side of a two-family on its own, since the flood may have reached one unit’s water heater and gas controls and not the other’s. We camera the lateral for flood silt to find where the blockage actually sits, and we test the shutoffs that soaked in dirty water before anyone turns the water back on.',
    ],
    commonIntro:
      "In Pleasant Ridge's early-1900s homes and brick two-families, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'My side of a Pleasant Ridge two-family backed up after the flood. Is it my line?',
        a: 'Not necessarily. On these lots the laterals run close together and are sometimes shared, so a blockage below the point where the two sides join affects both units even though only one noticed. We camera from a cleanout and locate the restriction. If it is on the shared run, that is a conversation between owners, and we hand you the footage rather than start digging in your yard.',
      },
    ],
  },
  westwood: {
    intro:
      'Flooded in Westwood? Before you turn the water back on, we check what the flood left behind, the shutoffs and supply lines that sat in dirty water and seized, across Cincinnati’s largest neighborhood along Harrison Avenue. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue from the historic blocks near the Westwood Town Hall out to streets of early-1900s and mid-century houses. Spread that wide, the one thing the homes share is a basement where the shutoff valves, supply lines, and water heater sit low enough for a flood to reach.',
      'A shutoff that spent a day underwater is the part people miss. The valve turns fine now, then seizes solid weeks later, and the one you reach for in the next emergency is the one that will not move. We work the main and fixture shutoffs, test the supply lines the dirty water soaked, and check the water heater and gas controls where the base went under. Where the drains run slow we camera the cast-iron main for flood silt rather than snake it twice.',
    ],
    commonIntro:
      "Across Westwood's older and mid-century homes on the west side, the plumbing a flood tends to leave behind is:",
    localFaqs: [
      {
        q: 'Does post-flood plumbing work in Westwood need a Cincinnati or MSD permit?',
        a: 'Inspection does not. The repair that follows often does, because a sewer lateral or supply line replacement in Westwood is permitted through the City of Cincinnati, with the sewer side under MSD, since Westwood is a city neighborhood rather than its own municipality. We pull what the work calls for before we start.',
      },
    ],
  },
  norwood: {
    intro:
      'Flooded in Norwood? We inspect and repair the plumbing the water left behind before you resume normal use. Norwood sits in the middle of our service area, so we reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, entirely surrounded by Cincinnati, and that matters more after a flood than at any other time. Water and sewer service and the permits for anything that touches them run through Norwood, not Cincinnati. Homeowners here regularly get a contractor who pulls a Cincinnati permit for a lateral repair, or pulls nothing at all, and the problem surfaces at resale.',
      'The housing is a dense grid of early-1900s homes and brick two-families from the streetcar and factory years — small lots, shared walls, and in a lot of cases shared or closely spaced sewer laterals. A blockage after a flood is often not confined to the house that noticed it. When one side of a two-family backs up, the fault is frequently downstream of both.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and brick two-families, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'Does post-flood plumbing work in Norwood need a Norwood permit?',
        a: 'Yes, where permitted work is involved. Norwood is a separate city with its own water, sewer, and building authority, so a lateral repair or a supply line replacement there goes through Norwood rather than through Cincinnati or MSD the way it would one street over. Inspection alone does not require a permit. The repair that follows often does, and we pull it before we start.',
      },
      {
        q: 'My side of a Norwood two-family backed up after the flood. Is it my line?',
        a: 'Not necessarily, and this is worth establishing before anybody pays for a repair. On these lots the laterals run close together and are sometimes shared, so a blockage below the point where the two sides join affects both units even though only one noticed. We camera from a cleanout and locate where the restriction actually is. If it turns out to be on the shared run, that is a conversation between owners, and we will hand you the footage rather than start digging in your yard.',
      },
    ],
  },
  'blue-ash': {
    intro:
      'Flooded in Blue Ash? Before you go back to normal water use, we check the plumbing the flood left behind — water heater, shutoffs, drains, and sump pump — for homes and businesses across the northeast side. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions. Even the newer housing here is now decades old, and its finished basements rely on a sump pump to stay dry, so a storm flood tends to reach the water heater, the shutoffs, and the pump all at once.',
      'Our post-flood work starts with the sump pump and check valve, since that is the component that carried the flood and the one you find out about in the next storm. We check the water heater and gas controls if the base went under, test the shutoffs that soaked in dirty water, and camera the main where the drains run slow.',
    ],
    commonIntro:
      "Across Blue Ash's mid-century homes and newer subdivisions, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'My Blue Ash finished basement flooded when the sump pump could not keep up. What do you check?',
        a: 'The sump pump and check valve first — a pump that ran flat out through a flood may have burned out its motor or its float, and the check valve is what stops water running back down the discharge line. If the water reached the water heater base or the shutoffs, those get checked too. If it stayed below them, we will tell you the pump is the whole job.',
      },
    ],
  },
  montgomery: {
    intro:
      'Flooded in Montgomery? We inspect and repair the plumbing a flood left behind before you resume normal use, for homes around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The plumbing spans a wide range — original lines in the historic core, decades-old systems in the subdivisions — and a flood finds whichever is weakest in a given house.',
      'After a flood we check the water heater and gas controls if the base went under, test the shutoffs and supply lines that soaked in dirty water, and camera the main for silt where the drains run slow. In the finished basements common here, the sump pump and check valve get tested before the next storm.',
    ],
    commonIntro:
      "Across Montgomery's historic and established homes, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'The flood in my Montgomery basement barely covered the floor. Do I need a full inspection?',
        a: 'Probably not. If the water never reached the water heater base, the gas connections, or the shutoffs, and the drains run normally, there may be nothing here worth paying for. The sump pump is the one part we would still check, since it worked hardest during the flood. Tell us how high the water got when you call and we will say whether a visit is warranted.',
      },
    ],
  },
};
