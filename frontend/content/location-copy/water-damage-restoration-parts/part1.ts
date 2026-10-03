export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  sedamsville: {
    intro:
      'Water damage in a Sedamsville home? We extract the water, dry the structure, and repair the line that failed, reaching most homes along River Road and the hillside above it the same day. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) climbs the hillside above River Road, and most of its houses date to the late 1800s and early 1900s. Two things make water damage here worse than the square footage suggests. The century-old galvanized risers and cast-iron drains fail all at once rather than slowly, and the hillside grade drives runoff and root-clogged laterals into lower levels after heavy rain. Either way the water lands in original woodwork and framing that has been in place for a hundred years.',
      'We do both halves of the job. We shut off and repair the failed line first, because drying a room that is still filling is wasted work, then extract the standing water and dry the structure to measured moisture readings rather than to the day of the week. Because we are licensed plumbers, the burst pipe or backed-up lateral gets fixed on the same visit, and we document the readings and photos so your insurer has the record they will ask for.',
    ],
    commonIntro:
      "In Sedamsville's century-old hillside homes, the water damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Rain off the hill backed water up into my Sedamsville basement. Is that different from a burst pipe?',
        a: 'Yes, and it changes the whole cleanup. Water that comes up through a floor drain during heavy rain has usually been through the sewer, so it is contaminated rather than clean, and the porous materials it touched — carpet pad, drywall bottoms, saturated insulation — generally come out rather than get dried in place. We handle that removal, dry the framing behind it, and can look at whether the lateral or a backwater valve is the reason it happened.',
      },
      {
        q: 'Can you save the old woodwork in a Sedamsville home?',
        a: 'Often, if we reach it in the first day or so. Original trim and flooring of that era can usually be dried when extraction happens fast and the drying is measured. Once the same material has sat wet for several days it cups, splits, and turns into replacement work, and we will tell you honestly which one you are looking at.',
      },
    ],
  },
  'sayler-park': {
    intro:
      'Water damage in Sayler Park? We pull the water out, dry the structure, and repair the plumbing behind it, from the riverfront streets to the homes up the hill. Call (513) 586-5107.',
    relevance: [
      "Sayler Park (ZIP 45233) is Cincinnati's westernmost neighborhood, strung along the Ohio River past Riverside, with tree-lined streets of Victorian and early-1900s frame houses. The riverfront sits in the Ohio River floodplain, so saturated ground and high water push storm and sewer backups into low-lying basements, while the original galvanized supply lines in those century-old frame homes let go without warning. Both leave water sitting in wood-framed floors and finished lower levels that hold it.",
      'When the water is a supply-line break it is clean and the drying leans on saving materials; when it backed up from the floodplain it is contaminated and the wet porous material has to come out. We sort out which one you have, extract, then dry to moisture readings taken over several days. Mold can start in damp material within roughly 24 to 48 hours, so the same-day arrival is not a nicety here, it is the difference between drying and replacing.',
    ],
    commonIntro:
      "Between the floodplain along the river and the age of Sayler Park's frame homes, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Sayler Park basement floods when the river is high. Can drying even help?',
        a: 'Drying helps, but only as one part of the job. Floodwater from the river is contaminated, so saturated carpet, pad, and the lower edges of drywall generally have to be removed rather than dried, and then we bring the framing and subfloor back to normal moisture before anything is closed back up. We can also look at whether a backwater valve or a better sump setup would keep the next high-water event out of the finished space.',
      },
    ],
  },
  riverside: {
    intro:
      'Water damage in Riverside? We extract the water, dry the structure, and fix the line or backup behind it, for the homes along River Road. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50, with the hillside on one side and the Ohio River on the other. So many homes here sit on low river bottomland that high groundwater and flooding are a constant backdrop, and a single heavy rain can push water up through a basement drain in minutes. Add older housing with original drain lines, and the water that arrives tends to be the contaminated backup kind rather than a clean supply break.',
      'That distinction drives how we work a Riverside job. Contaminated water means the saturated porous materials come out and the surfaces get treated, not just dried, before we bring framing and subfloor back to measured moisture readings. We are licensed plumbers, so once the space is dry we can address the failed sump, the backed-up lateral, or the backwater valve that would keep it from happening again, and hand you the documentation for the claim.',
    ],
    commonIntro:
      "On Riverside's low riverfront lots, the water damage we are called out for most often is the water-intrusion kind:",
    localFaqs: [
      {
        q: 'The water in my Riverside basement came up through the floor, not down from a pipe. Does that change anything?',
        a: 'It changes almost everything. Water coming up usually means a drain or sewer backup, so it is treated as contaminated: saturated carpet and pad come out, hard surfaces are cleaned and disinfected, and only then do we dry the structure. It also points at a cause we can fix rather than just clean up — a failed sump, a root-clogged lateral, or a missing backwater valve on low River Road ground.',
      },
    ],
  },
  'east-price-hill': {
    intro:
      'Water damage in East Price Hill? We pull the water, dry the structure, and repair the failed line, for the dense homes around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff the old Price Hill Incline once served, packed with early-1900s two- and three-story frame homes and brick two-families built close together. Shared walls and tight lots mean water rarely stays one household’s problem: a burst line in one unit turns up as a wet ceiling in the next, and the brittle century-old cast-iron and galvanized plumbing lets go without much warning. The hillside grade adds pressure on basement drains during heavy rain.',
      'In a building this tight the first job is isolating the source, and because we are plumbers we can shut off and repair the failed line in one unit without leaving the whole building dry for days. Then we extract, dry both affected sides to measured readings, and document where the water started and which way it travelled. That record is usually what settles the question of who pays when the water crossed a shared wall.',
    ],
    commonIntro:
      "In East Price Hill's dense, early-1900s homes and two-families, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'Water from the other unit in my East Price Hill two-family soaked through. What do you do about the shared wall?',
        a: 'We dry both sides we can get access to and we document the whole path — where the water originated, which direction it travelled, and moisture readings on each side of the shared wall. Who ultimately pays is a question for the two insurers, but that record is usually what settles it. If the failure was a pipe, we can repair it as part of the same visit rather than leaving it for a second contractor.',
      },
    ],
  },
  'west-price-hill': {
    intro:
      'Water damage in West Price Hill? We extract the water, dry the structure, and repair the plumbing behind it, for the homes along Glenway Avenue. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. Newer than the river neighborhoods, but still decades past when the plumbing was new. The failures we see here are aging water heaters that let go and flood a utility room, galvanized supply lines that finally corrode through, and cracked cast-iron laterals that back up a lower level after rain.',
      'A water heater that fails overnight can put dozens of gallons into a finished basement before anyone notices, which is exactly the finished-material mix that gets expensive fast. We stop the source, extract, and dry framing and subfloor to measured moisture content rather than guessing from the surface, then repair or replace the failed unit as part of the same job. Everything is documented for the insurer.',
    ],
    commonIntro:
      "Across West Price Hill's mid-century single-family homes, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'My West Price Hill water heater let go and flooded the basement overnight. Is the drying urgent?',
        a: 'It is. A tank holds a lot of water and it keeps moving into subfloor and framing for as long as it sits, and damp material can start growing mold within roughly 24 to 48 hours. We reach most homes off Glenway the same day, extract, dry to readings, and replace the failed heater on the same visit so you are dealing with one crew instead of two.',
      },
    ],
  },
  'lower-price-hill': {
    intro:
      'Water damage in Lower Price Hill? We pull the water out, dry the structure, and repair the plumbing behind it, for the historic streets around State Avenue. Call (513) 586-5107.',
    relevance: [
      "Lower Price Hill (ZIP 45204) sits down in the Mill Creek valley near the river and the industrial bottoms around State Avenue, and it holds one of Cincinnati's most intact stretches of 19th-century Italianate brick rowhouses. Those mid-1800s houses run on old galvanized and cast-iron systems that fail without warning, and the low valley location means that when Mill Creek and the river run high, sewer and storm backups climb sharply. The water that arrives is often contaminated, and it lands in historic lower levels.",
      'Contaminated backup water gets handled differently from a clean pipe break: saturated porous materials come out, surfaces are cleaned and disinfected, and then the structure is dried to measured readings. We take care doing it in these rowhouses because the original brick, plaster, and woodwork can often be saved when the water comes out fast. Because we are plumbers, the aging line or lateral behind the failure gets repaired without tearing up more of the historic interior than the job needs.',
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century rowhouses down in the valley, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'Do you work water damage in the old brick rowhouses around State Avenue?',
        a: 'Yes, regularly. The care in a 19th-century rowhouse is drying the original brick, plaster, and woodwork rather than defaulting to demolition, which is possible when extraction happens in the first day and the drying is measured. When the cause is a valley backup the porous materials still have to come out, but we protect what can be saved and repair the aging plumbing behind it without needless damage to the historic features.',
      },
    ],
  },
  'over-the-rhine': {
    intro:
      'Water damage in Over-the-Rhine? We extract the water, dry the structure, and repair the line behind it, for the historic buildings around Findlay Market and Vine Street. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate buildings in the country, block after block of brick tenements and rowhouses around Vine Street and Findlay Market, most now split into apartments and condos. They run on a patchwork of brittle cast-iron stacks, galvanized risers, and shared lines, so a single failure several floors up can travel down through multiple units before anyone finds it. By then the water is in plaster, old framing, and whatever was finished below.',
      'The move in a stacked historic building is a fast, clean shutoff and isolating which units the water reached, and being plumbers we can do that without killing water to the whole building for days. Then we extract and dry each affected floor to measured readings, watching cavities that feel dry on the surface but hold water inside. All of it is written up so the building and each owner have the documentation their insurers ask for.',
    ],
    commonIntro:
      "In Over-the-Rhine's 19th-century buildings and converted multi-units, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'A leak upstairs came through into my OTR condo. How do you handle a building split into units?',
        a: 'We isolate and shut off the failed line without cutting water to the whole building, then extract and dry every unit the water reached, top to bottom, to measured moisture readings. In these old stacked buildings the water often travels further inside walls than it looks, so we chase the cavities rather than trusting the surface, and we document the path for each owner’s insurer.',
      },
    ],
  },
  downtown: {
    intro:
      'Water damage downtown? We extract the water, dry the structure, and repair the plumbing behind it, in high-rise condos, lofts, and older conversions. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures turned residential. The plumbing ranges from modern stacked risers in the towers to original lines in early-1900s buildings, but the common problem is the same: a leak several floors up travels fast and shows up as water damage in units well below where it started. In a tower that can mean multiple owners affected by one failed fitting.',
      'Speed and a clean shutoff matter as much as the repair here, so we coordinate building access and water shutoffs to stop the source without disrupting the rest of the floors. Then we extract, dry to measured readings, and follow the water through wall and ceiling cavities where it hides. Because we are plumbers, the failed riser or fitting is repaired as part of the job, and everything is documented for the association and the individual owners.',
    ],
    commonIntro:
      "In downtown's condos, lofts, and older commercial conversions, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'Can you work water damage in a downtown high-rise without shutting the whole building down?',
        a: 'Yes. We coordinate access and water shutoffs with building management so the repair on one floor does not disrupt the rest, then extract and dry every unit the water reached. Leaks in a tower travel down through several floors, so we trace the path and take readings at each level, and we write it up for both the association and each affected owner.',
      },
    ],
  },
  'west-end': {
    intro:
      'Water damage in the West End? We pull the water out, dry the structure, and repair the plumbing behind it, for the homes around TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      "The West End (ZIP 45203) is one of Cincinnati's oldest neighborhoods, just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer infill. The older brick homes carry decades-old galvanized and cast-iron plumbing that fails without much warning, and the low ground near the Mill Creek basin raises the risk of drain and sewer backups during heavy rain. So the water is sometimes a clean pipe break and sometimes a contaminated backup.",
      'We sort out which it is, because the two are cleaned differently: a supply break is dried with the goal of saving materials, while a basin backup means the saturated porous material comes out and surfaces get disinfected first. Either way we extract fast, dry framing and subfloor to measured readings, and repair the failed line or address the backup as part of the same visit. The West End sits right next to downtown, so it is one of the quicker areas for us to reach.',
    ],
    commonIntro:
      "Across the West End's historic rowhouses and older homes, the water damage we are called for most often is:",
    localFaqs: [
      {
        q: 'How fast can you reach the West End when water is spreading?',
        a: 'The West End sits right next to downtown, so it is one of the fastest areas for us to reach, often within hours of your call. That speed is the whole job with water damage: the difference between drying materials and replacing them is usually decided in the first 24 hours, and mold can start in damp material within 24 to 48.',
      },
    ],
  },
  'mount-adams': {
    intro:
      'Water damage in Mount Adams? We extract the water, dry the structure, and repair the failed line, on the steep, narrow streets of the hilltop. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. The age of the housing means old supply and drain lines that fail without warning, and the steep terrain puts real pressure on sewer laterals and basement drains during heavy rain, so backups are common. In rowhouses built this close together, water from one can reach the next.',
      'Tight access is part of the job here, and we come prepared for the narrow, steep streets and limited parking that make getting equipment in slower than on a flat lot. Once we are in we stop the source, extract, and dry to measured readings, chasing the water down the grade through lower levels where it collects. As plumbers we repair the failed line or lateral on the same visit and document everything for the insurer.',
    ],
    commonIntro:
      "In Mount Adams' steep, century-old rowhouses, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'Can you get drying equipment to a home on the steep Mount Adams streets?',
        a: 'Yes. We work the hill regularly and come prepared for the narrow, steep streets and tight parking, so getting extractors, air movers, and dehumidifiers in place is not the holdup. Once we are set up we dry to moisture readings taken over several days rather than pulling equipment on a fixed schedule, because the grade tends to move water into lower levels that stay wet longer.',
      },
    ],
  },
  'mount-auburn': {
    intro:
      "Water damage in Mount Auburn? We pull the water out, dry the structure, and repair the plumbing behind it, in one of Cincinnati's oldest hilltop neighborhoods. Call (513) 586-5107.",
    relevance: [
      "Mount Auburn (ZIP 45219) is one of Cincinnati's oldest hilltop neighborhoods, rising just north of downtown, lined with grand 19th-century homes and historic mansions, many now divided into apartments. Those Victorian-era houses carry some of the oldest plumbing in the city, original cast-iron drains and galvanized supply lines that corrode and fail with age. In a subdivided mansion, one burst line can send water through several units and into original plaster and millwork.",
      'The value in these homes is in the detail, so the goal is drying the plaster, woodwork, and old flooring rather than defaulting to demolition, which is realistic when the water comes out in the first day. We isolate the failure, extract, and dry each affected unit to measured readings, then repair the aging line as part of the job because we are plumbers, not a drying crew that hands the pipe off to someone else. It all gets documented for the owners’ claims.',
    ],
    commonIntro:
      "In Mount Auburn's grand but aging 19th-century homes, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'Can the plaster and woodwork in my Mount Auburn home be dried rather than torn out?',
        a: 'Often, if we reach it early. Original plaster and millwork can usually be dried in place when extraction happens in the first day or so and the drying is measured, and we watch cavities that feel dry on the surface but hold water inside. Once material has been saturated for several days it may not come back, and we will tell you which one you are looking at rather than run equipment on something that is already lost.',
      },
    ],
  },
  clifton: {
    intro:
      'Water damage in Clifton? We extract the water, dry the structure, and repair the line behind it, for the homes around Ludlow Avenue and the Gaslight District. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Many of those big houses still run on original plumbing, and a fair number are now rentals near campus where a burst pipe or a failed water heater can flood a finished lower level before anyone is home to catch it. Mature trees over old sewer laterals add root intrusion and backups to the mix.',
      'A large home with plenty of finished square footage is exactly where water gets expensive fast, so we reach it the same day, stop the source, and extract before the water spreads further into framing and subfloor. Then we dry to measured readings and, being plumbers, repair the failed line or clear the root-choked lateral on the same visit. In a rental we document the whole job so the owner and their insurer have the record.',
    ],
    commonIntro:
      "In Clifton's large Victorian and early-1900s homes, the water damage we are called for most often is:",
    localFaqs: [
      {
        q: 'A student rental in Clifton flooded while nobody was home. Does the delay change what can be saved?',
        a: 'It does, which is why we move fast once you call. Water that sat unnoticed for a day or more has moved deep into subfloor and framing and may have started mold, so some porous materials that would have been dried are instead removed. We extract, dry the rest to readings, repair the line that failed, and document everything for the owner’s claim.',
      },
    ],
  },
  corryville: {
    intro:
      'Water damage in Corryville? We pull the water out, dry the structure, and repair the plumbing behind it, in the Short Vine area near UC. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. All that older housing turned into rentals takes heavy use on aging lines, so burst pipes and failed water heaters are common, and because units share walls and stacks, water from one apartment reaches the next fast. A failure on an upper floor becomes a wet ceiling below before it is noticed.',
      'In a shared building the first job is isolating the source and shutting it off without leaving every unit dry for days, which we can do because we are plumbers rather than a drying-only crew. Then we extract and dry each affected unit to measured readings, following the water through shared walls and stacks where it hides. Everything is written up so each owner or landlord has the documentation their insurer needs.',
    ],
    commonIntro:
      "In Corryville's dense, older housing near campus, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'A pipe upstairs leaked into my Corryville apartment. Who dries what?',
        a: 'We dry every unit the water reached that we can get access and authorisation for, and we document the path so the responsible party is clear for the insurers. Because units here share walls and stacks, the water usually travelled further than it looks, so we take readings above and below the leak rather than trusting the surface, and we repair the failed line as part of the same visit.',
      },
    ],
  },
  northside: {
    intro:
      'Water damage in Northside? We extract the water, dry the structure, and repair the line or backup behind it, for the homes near Hamilton Avenue and the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) runs along Hamilton Avenue with streets of late-1800s and early-1900s homes dropping down toward the Mill Creek valley. The age of the housing means original galvanized and cast-iron plumbing that fails without warning, and the low ground near Mill Creek brings a real risk of drain and sewer backups during heavy rain. So a Northside basement takes water two ways: a clean break upstairs, or a contaminated backup coming up through the floor.',
      'Those get handled differently, and telling them apart is the first thing we do. A supply break is dried to save materials; a Mill Creek backup means the saturated porous material comes out and surfaces are disinfected before drying. Either way we extract fast and dry to measured readings, and because we are plumbers we can address the failed line, or the sump and backwater valve that would keep the next storm out, on the same visit.',
    ],
    commonIntro:
      "In Northside's older homes near the Mill Creek valley, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Northside basement backs up in heavy rain. Can you stop it happening again?',
        a: 'We can look at it. A backup coming up through the floor near Mill Creek is contaminated water, so we remove the saturated porous materials, disinfect, and dry the structure to readings first. Then, as plumbers, we can recommend a backwater valve or sump setup suited to the lower-lying streets so the next heavy rain is less likely to end up in the finished space.',
      },
    ],
  },
  'college-hill': {
    intro:
      "A water heater or a supply line that fails in a College Hill home puts water into the floor before the tank finishes draining. We extract it, dry the structure, and repair the line behind it, reaching homes along Hamilton Avenue and Belmont the same day. Call (513) 586-5107.",
    relevance: [
      "A failed water heater is the water-damage call we answer most on College Hill (ZIP 45224). The large early-1900s houses and mid-century homes off Hamilton Avenue and Belmont run on tanks and galvanized supply lines that are decades past their rated life, and when a heater lets go in a utility room or a line splits behind a wall, the water heads for the finished lower levels these bigger homes tend to have. The hilltop grade on the northwest side keeps it moving toward the lowest point in the house, so a leak that starts small does not stay in one room.",
      "Because we are licensed plumbers, one visit covers the cause and the damage. We shut off and replace the failed heater or repair the split line, pull the standing water, then dry the framing and subfloor to moisture readings taken over several days rather than to a fixed schedule, since a wall that reads dry on the surface can still hold water inside. Caught early, clean supply-line water lets us save more drywall and framing than owners expect, while carpet pad and saturated insulation come out either way. Every reading and photo is written up for the claim.",
    ],
    commonIntro:
      "Across College Hill's older and mid-century homes, the water damage we handle most often starts with a failed heater or supply line:",
    localFaqs: [
      {
        q: "Do you replace the water heater as well as dry the College Hill basement?",
        a: "Yes, and that is the reason to use one crew. Most restoration companies are not plumbers and arrive after someone else has stopped the water, which means two trips and a gap where the damage spreads. We shut off and replace the failed heater or repair the line, then extract and dry the structure on the same visit, so you deal with one company rather than two.",
      },
    ],
  },
  'walnut-hills': {
    intro:
      'Water damage in Walnut Hills? We extract the water, dry the structure, and repair the line behind it, for the homes around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district, much of it now split into units. That century-old housing runs on aging cast-iron and galvanized plumbing that fails with little warning, and in a multi-unit building one burst line sends water through several apartments before it is found. It lands in original plaster, woodwork, and whatever was finished below.',
      'The job here is isolating and shutting off the failure without leaving the whole building dry for days, which we can do as plumbers, then extracting and drying each affected unit to measured readings. In these old buildings water travels further inside walls than it looks, so we chase the cavities rather than trusting the surface. All of it is documented so the building and each owner have the record their insurers ask for.',
    ],
    commonIntro:
      "In Walnut Hills' historic homes and apartment buildings, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'A leak hit several apartments in my Walnut Hills building. Can you dry them without shutting off the whole building?',
        a: 'Yes. We isolate and repair the failed line without cutting water to the whole building, then extract and dry every unit the water reached to measured readings. Because these buildings share stacks and walls, the water usually spread further than it looks, so we take readings across the affected units and write up the path for each owner’s insurer.',
      },
    ],
  },
  'east-walnut-hills': {
    intro:
      'Water damage in East Walnut Hills? We pull the water out, dry the structure, and repair the plumbing behind it, for the homes around Woodburn Avenue and DeSales Corner. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses often still carry original plumbing, where corroded galvanized lines and aging drains lead to sudden leaks that soak the original woodwork and finished spaces these homes are known for. A hidden leak in a house this size can do real damage before it is noticed.',
      'Getting to it early is how the original detail gets saved, so we reach East Walnut Hills fast, stop the source, and extract before the water works deeper. Then we dry to measured moisture readings rather than by the calendar, watching cavities that feel dry on the surface but hold water inside. As plumbers, we repair the failed line on the same visit and hand you the documentation your insurer will want.',
    ],
    commonIntro:
      "In East Walnut Hills' stately early-1900s homes, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'A hidden leak damaged the original detail in my East Walnut Hills home. Can it be saved?',
        a: 'Often, when we catch it early. Original hardwood, plaster, and millwork can usually be dried in place if extraction happens in the first day or so and the drying is measured, sometimes with mats that pull moisture up through the boards. Once material has been saturated for several days it cups and splits and becomes replacement work, and we will tell you honestly which one you are dealing with.',
      },
    ],
  },
  avondale: {
    intro:
      'Water damage in Avondale? We extract the water, dry the structure, and repair the plumbing behind it, near the hospitals and the zoo. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout, much of it densely built and rental. That older housing under heavy use runs on aging plumbing, so burst pipes, water heater failures, and drain backups are the emergencies that leave water sitting in framing and finished units. In a shared building one failure reaches several apartments quickly.',
      'Being central near the hospitals, Avondale is a fast reach for us, which matters because the first 24 hours decide how much is saved. We stop the source, extract, and dry to measured readings, and in a multi-unit building we isolate the failure so the whole place is not left without water for days. As plumbers we repair the failed line on the same visit and document the job for each owner or landlord’s claim.',
    ],
    commonIntro:
      "In Avondale's older homes and apartment buildings, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'How fast can you reach Avondale when a pipe bursts?',
        a: 'Avondale is in the central uptown area near the hospitals, so it is a fast reach, often within hours. With water damage that speed is the whole job — mold can start in damp material within roughly 24 to 48 hours, and the difference between drying materials and replacing them is usually decided in the first day.',
      },
    ],
  },
  'hyde-park': {
    intro:
      'Water damage in a Hyde Park home? We extract the water, dry the structure, and repair the plumbing that caused it — usually reaching homes around Hyde Park Square the same day. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is built around large early-1900s homes — Tudors, colonials, and brick foursquares — and a great many of them have finished lower levels holding carpet, drywall, and cabinetry. That is the worst possible material mix to leave wet, and it is why water damage here gets expensive faster than the square footage suggests.',
      'The other Hyde Park factor is original detail. Oak flooring, plaster, and century-old millwork can often be dried and saved, but only if the water comes out quickly and the drying is measured rather than guessed at. Left a few days, the same materials cup, split, and turn into replacement work costing many times what the drying would have.',
    ],
    commonIntro:
      "In Hyde Park's large early-1900s homes with finished lower levels, the water damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Can you save the original hardwood in my Hyde Park home?',
        a: 'Often yes, if we reach it early. Solid oak flooring of the era can usually be dried in place when extraction happens in the first day or so, sometimes with mats that pull moisture up through the boards. Once it has cupped badly or the subfloor beneath has stayed saturated for several days, replacement becomes the honest answer, and we will tell you which one you are looking at rather than run equipment for a week on a floor that will not come back.',
      },
      {
        q: 'How fast can you reach Hyde Park?',
        a: 'Hyde Park is well within our service area and we reach the homes around Hyde Park Square and Erie Avenue the same day, often within hours. With water damage that speed is the whole job — the difference between drying materials and replacing them is usually decided in the first 24 hours.',
      },
    ],
  },
  oakley: {
    intro:
      'Water damage in Oakley? We pull the water out, dry the structure, and repair the failed line behind it, for the homes around Oakley Square and Madison Road. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows were built with galvanized supply lines and cast-iron drains now well past their prime, so corrosion leaks and aging water heaters are the usual sources of sudden water damage. Many have finished basements the water soaks before anyone notices.',
      'We reach Oakley the same day, stop the source, and extract before the water spreads into subfloor and framing, then dry to measured readings taken over several days rather than by the calendar. Because we are plumbers, the corroded line or failed water heater behind the damage gets repaired on the same visit, and the readings and photos are documented so your insurance claim is not held over a missing record.',
    ],
    commonIntro:
      "Across Oakley's early-1900s bungalows and brick homes, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'A corroded pipe in my old Oakley bungalow leaked into the finished basement. What comes out and what stays?',
        a: 'It depends on how long it sat. Caught in the first day, clean supply-line water often lets us dry drywall and framing in place and save more than owners expect. Carpet pad and saturated insulation generally come out regardless. If it sat longer and reached mold territory, more porous material goes, and we will be straight with you about the line rather than run equipment on something already lost.',
      },
    ],
  },
  'mount-lookout': {
    intro:
      'Water damage in Mount Lookout? We extract the water, dry the structure, and repair the plumbing behind it, for the homes around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes carry decades-old plumbing that fails with age, and the hillside grade puts extra demand on basement drains and sewer laterals during heavy rain, so backups into lower levels are common. A larger home on the hill usually has finished space the water ruins fast.',
      'We tell apart a clean pipe break from a hillside backup, because the two are cleaned differently, then extract and dry to measured readings. A supply break is dried to save materials; a backup means the saturated porous material comes out and surfaces are disinfected first. Being plumbers, we repair the failed line, or address the lateral and drains behind a recurring backup, on the same visit and document it all for your insurer.',
    ],
    commonIntro:
      "In Mount Lookout's older hilltop homes, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'Heavy rain pushed water into my Mount Lookout basement off the hill. Is that a drying job or a plumbing job?',
        a: 'Usually both, which is why one crew helps. Water backing up during rain on the grade here is treated as contaminated, so the saturated porous materials come out and surfaces are disinfected before we dry the structure to readings. Then, as plumbers, we can look at the lateral or drains that let it in so the next storm is less likely to end up in the finished space.',
      },
    ],
  },
  'columbia-tusculum': {
    intro:
      "Water damage in Columbia-Tusculum? We pull the water out, dry the structure, and repair the plumbing behind it, in Cincinnati's oldest neighborhood near the river. Call (513) 586-5107.",
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. Two things drive water damage here: the age of those Victorian and early homes, with original plumbing well past its service life, and the low riverside ground, where high water raises the risk of basement and sewer backups. The water lands in restored historic interiors that took years to bring back.',
      'In a restored Victorian the whole point is protecting what has been saved, so a clean pipe break is dried to keep original woodwork and plaster in place, while a riverside backup means the contaminated porous material comes out and surfaces are disinfected before drying to measured readings. We take care doing it, and being plumbers we repair the aging line without tearing up more of the historic interior than the job needs, all documented for the claim.',
    ],
    commonIntro:
      "In Columbia-Tusculum's historic Victorian homes near the river, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'Do you work water damage in the Painted Lady homes near the river?',
        a: 'Yes, regularly, and the care is in drying the original woodwork and plaster rather than defaulting to demolition, which is realistic when extraction happens fast. Near the river the cause is sometimes a backup rather than a clean break, and that contaminated water means the saturated porous material has to come out, but we protect the restored features and repair the aging plumbing behind it without needless damage.',
      },
    ],
  },
  'mount-washington': {
    intro:
      "When a corroded supply line lets go inside a Mount Washington wall, it can wet the framing for hours before a stain reaches the surface. We find it, dry the structure, and repair the pipe, reaching homes along Beechmont Avenue the same day. Call (513) 586-5107.",
    relevance: [
      "The single-family homes along Beechmont Avenue in Mount Washington (ZIP 45230) run from the early 1900s through the mid-century, and most of them still carry lengths of the original galvanized supply line. Pipe that old corrodes from the inside until a seam or a joint gives way, often inside a wall cavity where nobody sees it, and the water can soak drywall and framing for a full day before it shows. The same aging affects the cast-iron sewer laterals here, which crack or fill with roots and back a lower level up in heavy rain.",
      "Finding the water is half the job in a hidden leak like that, so we trace it to the failed line, open only what we must, and repair it. Then we extract and dry the cavity, drywall, and subfloor to metered readings rather than closing a wall back up while it is still wet, because a surface that feels dry is what turns into a musty smell and a buckled floor months later. As plumbers we handle the pipe and the drying on one visit, and we keep the readings and photos for your insurer.",
    ],
    commonIntro:
      "Across Mount Washington's older and mid-century single-family homes, the water damage we see most often is:",
    localFaqs: [
      {
        q: "The spill in my Mount Washington basement was small. Can I just dry it with household fans?",
        a: "Sometimes, and we will tell you when. A small clean spill on a sealed floor, wiped up within the hour, is a shop vac and a box fan. What household fans cannot do is pull water back out of carpet, drywall, subfloor, and framing, which is what causes the smell and the warped floor later on. If the water reached those materials or sat for more than a day, it needs real extraction and metered drying.",
      },
    ],
  },
  madisonville: {
    intro:
      'Water damage in Madisonville? Same-day extraction, structural drying, and repair of the plumbing that caused it, for homes around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) mixes early-1900s housing with newer infill from years of steady reinvestment, and the two fail in completely different ways. The older homes run on aging galvanized supply lines and cast-iron drains that let go with age; the renovated and newly built houses tend to fail at appliance connections, supply lines to refrigerators and laundry, and water heaters.',
      'Renovated older homes are the ones that catch owners out. New finished basements and updated kitchens sit on top of original plumbing that was never replaced, so when a century-old line finally goes, the water lands in materials installed last year rather than in an unfinished cellar.',
    ],
    commonIntro:
      "Across Madisonville's mix of early-1900s homes and newer infill, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'My Madisonville basement was just finished and it flooded. What can be saved?',
        a: 'Usually more than you would expect, if we get there fast. Carpet pad and saturated insulation generally come out regardless. Drywall that was wet but not contaminated can often be dried in place rather than cut out, and modern engineered flooring sometimes survives where the subfloor beneath it is dried properly. The variable is almost always hours, not materials.',
      },
      {
        q: 'How fast can you reach Madisonville?',
        a: 'Madisonville is centrally located on the east side and quick for us to reach, with same-day service on water damage calls. Tell us how much water there is and whether it is still coming in when you call, because that changes how we dispatch.',
      },
    ],
  },
  'pleasant-ridge': {
    intro:
      'Water damage in Pleasant Ridge? We pull the water out, dry the structure, and repair the plumbing behind it, for the homes along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those older single- and two-family homes carry decades-old plumbing, where corroded galvanized lines and aging drains lead to sudden leaks and backups. In a two-family, one failure sends water through both units and into whatever is finished below.',
      'In a two-family the first job is isolating the source and shutting it off without leaving both households dry for days, which we can do as plumbers rather than a drying-only crew. Then we extract and dry both affected sides to measured readings and document where the water started and which way it travelled. That record is usually what settles who pays when the water crossed between units, and we repair the failed line on the same visit.',
    ],
    commonIntro:
      "In Pleasant Ridge's early-1900s homes and two-families, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'Water from the other unit in my Pleasant Ridge two-family came through. What do you do?',
        a: 'We dry both sides we can get access to and we document the whole path — where the water originated, which way it travelled, and moisture readings on each side. Who ultimately pays is a question for the two insurers, but that record usually settles it. If the cause was a pipe, we repair it as part of the same visit instead of leaving it for a second contractor.',
      },
    ],
  },
  westwood: {
    intro:
      "Water damage in Westwood? We extract the water, dry the structure, and repair the plumbing behind it, across Cincinnati's largest neighborhood along Harrison Avenue. Call (513) 586-5107.",
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range the common thread is aging plumbing: galvanized supply lines closing up with corrosion, water heaters at the end of their life, and cast-iron drains prone to backups. Any of them can flood a finished lower level overnight.',
      'We reach Westwood the same day, stop the source, and extract before the water works deeper into subfloor and framing, then dry to measured readings taken over several days rather than by the calendar. Because we are plumbers, the corroded line, failed water heater, or backed-up drain behind the damage is repaired on the same visit, and the readings and photos are documented so your insurer has the record they ask for.',
    ],
    commonIntro:
      "Across Westwood's older and mid-century homes, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'Will my homeowners insurance cover the water damage in my Westwood home?',
        a: 'Sudden and accidental damage, like a burst pipe or a failed water heater, is commonly covered. Damage from long-term seepage or a maintenance issue you knew about often is not. We document moisture readings and photograph the source so you have the record your adjuster will ask for, but the coverage decision is your insurer’s.',
      },
    ],
  },
  norwood: {
    intro:
      'Water damage in Norwood? We pull the water out, dry the structure, and fix the plumbing behind it. Norwood sits in the middle of our service area, so we reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, built as a streetcar and factory town on a dense grid of early-1900s homes and brick two-families. Those small lots and shared walls mean water rarely stays a one-household problem — a burst line in one half of a two-family regularly turns up as a wet ceiling next door.',
      'Because Norwood is a separate municipality, its water and sewer connections and its permitting run through the city of Norwood rather than Cincinnati. It matters when a restoration job turns into pipe or lateral work, and it is a common reason homeowners here get a contractor who pulls the wrong permit or none at all.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and brick two-families, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'Water came through from the other half of my Norwood two-family. Who is responsible?',
        a: 'That depends on where the failure was and how the property is owned and insured, which is a question for the two insurers rather than for us. What we can do is document it properly — where the water originated, which direction it travelled, and moisture readings on both sides — because that record is usually what settles the question. We will dry both affected areas if we have access and authorisation from whoever controls each side.',
      },
      {
        q: 'Do Norwood jobs need a different permit than Cincinnati?',
        a: 'Yes, where permitted work is involved. Norwood is its own city with its own building and utility authority, so a sewer lateral or supply line repair there goes through Norwood rather than through Cincinnati or MSD in the way an adjacent neighborhood would. Drying and extraction on their own do not require it — the pipe repair that follows can.',
      },
    ],
  },
  'blue-ash': {
    intro:
      'Water damage in Blue Ash? We extract the water, dry the structure, and repair the plumbing behind it, for homes and businesses across the northeast side. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so the water damage we see comes from aging water heaters that let go, worn supply lines, and failing sump pumps that let a storm fill a finished basement. Those finished lower levels are exactly the material mix that gets expensive fast.',
      'We reach Blue Ash the same day, stop the source, and extract before the water spreads further into subfloor and framing, then dry to measured readings taken over several days. Because we are plumbers, the failed water heater, worn line, or dead sump pump behind the damage is repaired or replaced on the same visit rather than handed to a second contractor, and the job is documented for the insurer at a home or a business.',
    ],
    commonIntro:
      "Across Blue Ash's mid-century homes and newer subdivisions, the water damage we handle most often is:",
    localFaqs: [
      {
        q: 'My sump pump failed in a storm and flooded the Blue Ash basement. Can you do both the drying and the pump?',
        a: 'Yes, and that is the advantage of one crew. We extract the standing water and dry the structure to readings, and because we are plumbers we replace the failed pump as part of the same visit rather than sending you to a second contractor. Storm water that backed up can be contaminated, so some saturated porous material may come out before we dry what remains.',
      },
    ],
  },
  montgomery: {
    intro:
      'Water damage in Montgomery? We pull the water out, dry the structure, and repair the plumbing behind it, near the historic district and along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The plumbing spans a wide range, from century-old lines in the historic core to decades-old systems in the subdivisions, but the water damage we respond to most comes from aging water heaters, worn supply lines, and the occasional burst pipe. In both the historic and the larger established homes, the water tends to reach finished space that is costly to replace.',
      'We reach Montgomery the same day, stop the source, and extract before the water works deeper into subfloor and framing, then dry to measured readings rather than by the calendar. Being plumbers, we repair the failed line or water heater on the same visit, and in the older historic homes we work to dry original materials in place where the water came out fast enough. Everything is documented for your insurer.',
    ],
    commonIntro:
      "Across Montgomery's historic and established homes, the water damage we see most often is:",
    localFaqs: [
      {
        q: 'How long does drying take in a larger Montgomery home?',
        a: 'Most homes take three to five days of active drying, depending on how much water there was, what materials it soaked into, and the humidity outside. A larger home with more finished space can run toward the longer end. We take readings daily and pull the equipment when the numbers say the structure is dry, not on a fixed schedule, because a wall that feels dry on the surface can still be wet inside.',
      },
    ],
  },
};
