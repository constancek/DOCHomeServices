export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  sedamsville: {
    intro:
      "Water in a Sedamsville basement is more often a split supply line than the river — the hillside homes above River Road run on galvanized risers a century past their prime. Turn the power to that level off, then find which pipe let go. Call (513) 586-5107.",
    relevance: [
      "Sedamsville (ZIP 45204) climbs the hillside above River Road on housing built in the late 1800s and early 1900s, and the original galvanized supply lines inside those homes are the weak point. Galvanized corrodes from the inside until a riser or a horizontal run behind a wall gives way, and it tends to do that all at once rather than dripping first. The water lands on the basement floor looking exactly like a groundwater problem, which is how the wrong repair gets ordered.",
      "We do not guess. Power off, we trace the flood back to the pipe that failed — a burst riser, a split feed to the water heater, a pinhole that finally opened — and repair that run rather than the first thing we see. If the water turns out to be coming up the drain instead, that is a different job, and we will tell you before anyone quotes it.",
    ],
    commonIntro:
      "In Sedamsville's century-old hillside homes above River Road, the basement flooding we are called for most often is:",
    localFaqs: [
      {
        q: "My Sedamsville basement is above River Road, so it cannot be the river — where is the water from?",
        a: "On the hillside streets it rarely is the river. In homes this age the usual answer is a corroded galvanized supply line that split behind a wall or under the first floor, and the give-away is clean water arriving fast rather than seeping in slowly at the walls. We trace the line, shut it at the point of failure, and repair that run.",
      },
    ],
  },
  'sayler-park': {
    intro:
      "A flooded basement in Sayler Park near the river is often a sewer or storm backup, not clean water — and backed-up water is contaminated. Keep everyone off the flooded level until the power is off. Call (513) 586-5107.",
    relevance: [
      "Sayler Park (ZIP 45233) is Cincinnati's westernmost neighborhood, strung along the Ohio River past Riverside, and its riverfront streets sit in the floodplain. When the river runs high and the ground saturates, the sewer and storm system backs up, and the first place it shows is the basement floor drain. That water is not the same as a burst pipe — it comes up dirty, and it is a health problem as much as a plumbing one.",
      "We start by working out whether the water rose from the drain or came from somewhere clean, because the two need opposite responses. If it is a backup, we camera the line to find where it blocked, clear it, and talk to you about a backwater valve so the next high-river week does not put the sewer back in your basement. If your home is up the hill away from the floodplain, the cause is usually different, and we look there instead.",
    ],
    commonIntro:
      "Between the river floodplain and the age of Sayler Park's frame homes, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "The water in my Sayler Park basement smells and it came up the floor drain. What now?",
        a: "Stay off it — sewer water is contaminated and, if the panel is down there, it can be dangerous around live circuits. Once the power to that level is off, we camera the line to find the blockage, clear it, and check whether a backwater valve is worth fitting for the floodplain streets. Then the drying can start.",
      },
    ],
  },
  riverside: {
    intro:
      "A flooded basement in Riverside usually comes down to the sump pump — on this low river bottomland the pump is the one thing standing between the water table and your floor. Turn the power to that level off first. Call (513) 586-5107.",
    relevance: [
      "Riverside (ZIP 45204) is the narrow strip along River Road and US-50, and many of its homes sit on low Ohio River bottomland where the water table is close to the surface. Basements here depend on a sump pump running correctly, and a flood is most often the pump failing at the worst moment — a stuck float switch, a check valve that lets the pit refill, or a pump that simply wore out and quit mid-storm. Everything looks fine until the power flickers or the float sticks, and then the pit overflows.",
      "We test the pump under real flow rather than tipping a bucket in and calling it good. If the float, the check valve, or the pump itself is the failure, we replace the part that quit and talk to you about a battery backup, because on this ground a power cut during a storm is when most Riverside pits overflow. If the water is instead coming up the drain, that is a backup and a different fix, and we will say so.",
    ],
    commonIntro:
      "On Riverside's low River Road lots, the basement flooding we are called for most often is:",
    localFaqs: [
      {
        q: "My Riverside sump pump ran all storm and the basement still flooded. Why?",
        a: "Usually the pit took on more water than the pump could move, or the discharge was blocked so the water it pushed out came straight back, or it failed partway through without you knowing. On this bottomland we load-test the pump, camera the discharge, and fit a backup for the power-loss case that catches most people here.",
      },
    ],
  },
  'east-price-hill': {
    intro:
      "In an East Price Hill two-family, a flooded basement is often a burst supply line in a shared wall — and the split can be feeding water into the unit next door too. Cut the power to the flooded level first. Call (513) 586-5107.",
    relevance: [
      "East Price Hill (ZIP 45205) sits on the bluff above the west-side flats, the neighborhood the old Price Hill Incline once served, and its streets around Warsaw Avenue are packed with dense two- and three-story frame and brick two-families built close together in the early 1900s. Those buildings share walls and stacks, and the plumbing inside them is original — brittle galvanized and cast-iron that splits with age. When a supply line lets go inside a shared wall, the water does not stay in one unit; it runs down the framing into whichever basement is lowest.",
      "We find the exact run that failed and isolate it, so one burst line does not mean shutting water off to the whole building. On a two-family that means tracing which unit's line split before opening a wall, then repairing that section. If the flooding turns out to be coming up a shared floor drain rather than down from a pipe, that points to the lateral, and we camera it before quoting.",
    ],
    commonIntro:
      "In East Price Hill's dense early-1900s two-families around Warsaw Avenue, the basement flooding we see most often is:",
    localFaqs: [
      {
        q: "The basement of my Warsaw Avenue two-family flooded but the leak seems to be from upstairs. Can you fix it without shutting off both units?",
        a: "Usually, yes. We isolate the line that failed to the unit it feeds, so the other side keeps its water while we repair the split. That matters in these buildings, where the supply and drain runs are shared and a single failure can otherwise take the whole house offline.",
      },
    ],
  },
  'west-price-hill': {
    intro:
      "A flooded West Price Hill basement is frequently a water heater that let go at the base — the tanks in these Glenway Avenue homes are often as old as the plumbing around them. Power to that level off first. Call (513) 586-5107.",
    relevance: [
      "West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side running out Glenway Avenue toward Covedale, built mostly with single-family homes from the 1920s through the 1950s. A tank water heater lasts perhaps a decade or so, which means the one in a house like this has usually been replaced once and is due again — and when a tank corrodes through at the base, it does not drip, it empties its full contents onto the basement floor and keeps refilling and dumping until someone shuts the supply.",
      "We confirm the heater is the source before touching anything else, close the supply, and drain it down safely. If the tank is done, we tell you plainly and replace it; if it was a fitting or the relief line rather than the tank body, that is a smaller repair, and we will not upsell you a new unit you do not need. Where the water instead traces to a supply line or a drain, we follow it there.",
    ],
    commonIntro:
      "Across West Price Hill's mid-century single-family homes along Glenway Avenue, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "How can I tell if my water heater caused the flood or just got wet from it?",
        a: "The tell is where the water is worst and whether it keeps coming. A heater that failed at the base leaves the floor wettest right under the tank and refills as fast as you mop, because the supply is still feeding it. We close the supply, drain it, and check the tank body against the fittings so you are only paying to replace what actually failed.",
      },
    ],
  },
  'lower-price-hill': {
    intro:
      "Down in the Mill Creek valley, a flooded Lower Price Hill basement is often a sewer backup coming up the floor drain — dirty water, not clean. Keep off the flooded level until the power is off. Call (513) 586-5107.",
    relevance: [
      "Lower Price Hill (ZIP 45204) sits at the foot of Price Hill in the Mill Creek valley near the river, holding one of the city's most intact stretches of 19th-century Italianate brick rowhouses around State Avenue. The low valley ground is the problem: when Mill Creek and the river run high, the sewer system surcharges, and the water backs up into the lowest basements through the floor drains. It arrives contaminated, which makes it a health issue on top of a wet floor.",
      "We establish first whether the water rose from the drain or came from a failed pipe, because a backup and a burst line need opposite work. For a backup we camera the line to find where it blocked, clear it, and discuss a backwater valve suited to these valley rowhouses so a high creek does not put the sewer back inside. We repair these homes without tearing up original features to reach the pipe.",
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century valley rowhouses around State Avenue, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "Do you work on the old brick rowhouses in Lower Price Hill without wrecking them?",
        a: "Yes. We camera and access the lines through cleanouts and existing openings wherever possible rather than opening historic brick and plaster, and we only cut where the pipe genuinely cannot be reached another way. On these valley homes the backwater valve conversation is usually worth having, given how often the sewer surcharges when Mill Creek is high.",
      },
    ],
  },
  'over-the-rhine': {
    intro:
      "In an Over-the-Rhine building split into apartments, a flooded basement often starts as a burst riser several floors up around Vine Street or Findlay Market. Cut the power to the flooded level first. Call (513) 586-5107.",
    relevance: [
      "Over-the-Rhine (ZIP 45202) holds one of the country's largest collections of 19th-century Italianate buildings — brick tenements and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s and now split into apartments and condos. The plumbing is a patchwork of original cast-iron stacks and retrofitted risers, often shared between units. When a supply line splits high in the building, the water travels down through the framing and ends up pooling in the basement, floors away from where it actually failed.",
      "The diagnosis here is figuring out which line let go and where, because the flood shows up far from the break. We trace it up from the basement, isolate the failed run so the rest of the building keeps water, and repair that section. If the water is instead rising from a shared floor drain, that is the cast-iron stack or the lateral, and we camera it rather than assume.",
    ],
    commonIntro:
      "In Over-the-Rhine's 19th-century buildings split into apartments, the basement flooding we see most often is:",
    localFaqs: [
      {
        q: "Our OTR building's basement flooded but every apartment looks dry. Where is it coming from?",
        a: "A basement that floods while the units read dry usually means a line failed inside a wall or a chase and the water tracked straight down to the lowest point. We trace the flood up through the building to the split, isolate that run, and repair it without shutting off the whole building's water.",
      },
    ],
  },
  downtown: {
    intro:
      "In a downtown condo or loft, a flooded lower level often traces to a water heater that let go — and in a stacked building the water can travel down several floors before you see it. Turn the power off first. Call (513) 586-5107.",
    relevance: [
      "Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district. Many units run on their own tank or compact water heater tucked in a closet or utility space, and when one corrodes through at the base it empties onto the floor and keeps refilling. In a stacked building that water does not stay put — it finds the floor slab and travels, so the unit that floods is often not the one where the heater failed.",
      "We locate the actual source rather than starting where the water pooled, close the supply, and drain the unit down safely. In a tower that means coordinating access and shutoffs so a repair on one floor does not disrupt the building, and telling you plainly whether the tank is finished or a fitting failed. If the water came from a supply line or a stack instead, we trace it there.",
    ],
    commonIntro:
      "In downtown's condos, lofts, and older commercial conversions, the basement and lower-level flooding we handle most often is:",
    localFaqs: [
      {
        q: "Can you work in a downtown high-rise where the flooding may have started on another floor?",
        a: "Yes. We trace the water back to its source floor rather than assuming it began where it pooled, and we coordinate access and shutoffs with the building so the repair does not take everyone's water offline. In stacked buildings the source is often a level or two above the flooding.",
      },
    ],
  },
  'west-end': {
    intro:
      "A flooded West End basement near TQL Stadium is often a drain backing up on the low Mill Creek ground, not clean water. Stay off the flooded level until the power is off. Call (513) 586-5107.",
    relevance: [
      "The West End (ZIP 45203) is one of Cincinnati's oldest neighborhoods, just west of downtown near TQL Stadium and Linn Street, with historic Italianate rowhouses and brick homes on ground that sits low toward the Mill Creek basin. That low ground drives backups: when heavy rain surcharges the system, the sewer comes up through basement floor drains before it goes anywhere else. The water is contaminated, which changes how the cleanup has to be handled.",
      "We check first whether the flood rose from the drain or fell from a failed pipe, then match the repair to the actual cause. For a backup we camera the line to find the blockage, clear it, and raise a backwater valve for the lower streets near the basin. The old brick homes here also carry aging galvanized and cast-iron that can burst, and if that is the source we trace it to the run that failed instead.",
    ],
    commonIntro:
      "Across the West End's historic rowhouses on low ground near TQL Stadium, the basement flooding we are called for most often is:",
    localFaqs: [
      {
        q: "How fast can you reach the West End when a basement is filling?",
        a: "The West End sits right next to downtown and is one of the quickest areas for us to reach, and we are on call 24/7. Get the power to that level off before anyone goes down, and we will trace whether it is a backup or a burst line as soon as we arrive.",
      },
    ],
  },
  'mount-adams': {
    intro:
      "On Mount Adams' steep streets, a flooded basement can be a drain line that has cracked or pulled apart under the slab as the hillside settles. Cut the power to that level, then call (513) 586-5107.",
    relevance: [
      "Mount Adams (ZIP 45202) is the dense hilltop above downtown and Eden Park, known for steep grades, narrow streets, and tightly packed 19th-century rowhouses. The terrain is the hidden factor: on a hillside this steep the ground shifts over decades, and the old cast-iron or clay drain lines buried under the slab crack or separate at the joints. Water and waste then escape below the floor and surface inside the basement, which looks like groundwater but is not.",
      "A drain line broken under the slab is one of the hardest sources to read from the puddle, so we camera the line to find exactly where it cracked or pulled apart before anyone breaks concrete. That way, if a section has to be opened, we open only over the failure rather than chasing it blind. We come prepared for the narrow, steep access these streets are known for, and if the water is instead from a supply line above the slab, we trace it there.",
    ],
    commonIntro:
      "In Mount Adams' steep, century-old hillside rowhouses, the basement flooding we see most often is:",
    localFaqs: [
      {
        q: "Can you even get equipment to my house on the steep Mount Adams streets?",
        a: "Yes. We work the hill regularly and come prepared for the narrow streets and tight parking. For a suspected break under the slab we bring a camera to pinpoint the crack first, so we only cut concrete where the line actually failed.",
      },
    ],
  },
  'mount-auburn': {
    intro:
      "In a subdivided Mount Auburn mansion, a flooded basement is often a burst line in one of the oldest plumbing systems in the city. Turn the power to the flooded level off first. Call (513) 586-5107.",
    relevance: [
      "Mount Auburn (ZIP 45219) is one of Cincinnati's oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and mansions, many now divided into apartments. Those Victorian houses carry some of the oldest plumbing anywhere in the city — original cast-iron drains and galvanized supply lines that corrode until a run bursts. In a subdivided house those lines are shared, so a single break can send water down through several units into the basement.",
      "We trace the flood back to the line that failed rather than the floor it landed on, and isolate that run so the whole house does not lose water while we work. On plumbing this old the temptation is to replace everything at once; we repair the failure first and tell you honestly what else is close behind. If the water rose from a drain instead, that points to the lateral and we camera it.",
    ],
    commonIntro:
      "In Mount Auburn's grand but subdivided 19th-century homes, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "The plumbing in my Mount Auburn house is ancient — will you just tell me to replace all of it?",
        a: "No. We fix the line that actually failed and get your water back, then give you a straight read on what else is aging and worth planning for. On original cast-iron and galvanized there is usually more coming, but you should replace on your schedule, not in a panic during a flood.",
      },
    ],
  },
  clifton: {
    intro:
      "A flooded Clifton basement that comes up the floor drain is usually roots in the sewer lateral — the big trees along these streets have been working into century-old pipe for decades. Turn the power to that level off. Call (513) 586-5107.",
    relevance: [
      "Clifton (ZIP 45220) is the leafy hilltop near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on mature, tree-lined streets. Those trees are the issue underground: their roots find the joints in old clay sewer laterals, the line slows and then blocks, and the first sign is water rising at the basement floor drain during a heavy rain. It reads as a flood but it is a sewer problem, and it comes up contaminated.",
      "We camera the lateral before quoting, because the difference between a clearing and a lateral replacement is decided by what the camera shows, not by how bad the flood looked. If roots are the cause we clear them and tell you honestly whether the pipe has years left or needs lining. Many of these homes are now rentals near campus, and we work around tenants to get water and drains back the same day.",
    ],
    commonIntro:
      "In Clifton's large Victorian homes on tree-lined streets near UC, the basement flooding we are called for most often is:",
    localFaqs: [
      {
        q: "Water backed up in my Clifton basement drain again — is it the trees?",
        a: "On these streets, very often yes. Roots work into the joints of old clay laterals and re-block them a season or two after a clearing. We camera the line to see how far the roots have got and whether the pipe is sound enough to keep clearing or has reached the point where lining or replacement is the cheaper long-run answer.",
      },
    ],
  },
  corryville: {
    intro:
      "In Corryville's student rentals off Short Vine, a flooded basement is often a water heater run into the ground by heavy use. Cut the power to that level first. Call (513) 586-5107.",
    relevance: [
      "Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes and apartments, much of it student rental. Heavy, constant use is hard on tank water heaters — full households running them flat out shorten a tank's life, and when one corrodes through at the base it dumps its contents on the basement floor and keeps refilling. In a packed rental it can run for hours before anyone notices.",
      "We confirm the heater is the source, close the supply, and drain it safely before deciding anything. If the tank is spent we replace it; if a fitting or the relief line failed, that is a smaller fix, and we will not sell a landlord a new unit that is not needed. Because these are shared buildings, we isolate the work so one failure does not take water from every unit while we repair it.",
    ],
    commonIntro:
      "In Corryville's dense student rentals near campus, the basement flooding we see most often is:",
    localFaqs: [
      {
        q: "I manage a Corryville rental — the tenants said the basement flooded from the water heater. Can you handle it same-day?",
        a: "Yes, and we are on call 24/7 for exactly this. We confirm whether it is the tank or a fitting, close the supply, and either repair or replace so you are only paying for what failed. In a shared building we keep the other units in water while we work.",
      },
    ],
  },
  northside: {
    intro:
      "A flooded Northside basement near the Mill Creek valley usually means the sump pump quit — on this low ground it is doing constant work. Turn the power to that level off first. Call (513) 586-5107.",
    relevance: [
      "Northside (ZIP 45223) runs along Hamilton Avenue with streets of late-1800s and early-1900s homes dropping toward the Mill Creek valley. The lower-lying streets keep their sump pumps busy, and the pump is what fails when the basement floods — a float switch that sticks, a check valve that lets the pit refill, or a worn pump that quits mid-storm. When the pit is working this hard, one failed part is all it takes for the water to rise over the top.",
      "We load-test the pump under real flow, check the float and the check valve, and camera the discharge to be sure the water it moves is actually leaving the property. If the pump is the failure we replace what quit and fit a battery backup for the power cuts that catch most people. If the water is instead rising up the drain, that is a Mill Creek backup and a different fix, and we camera the line to confirm.",
    ],
    commonIntro:
      "In Northside's homes on the low ground toward Mill Creek, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "My Northside basement backs up in heavy rain even with a sump pump. What is happening?",
        a: "Two different things get blamed on the pump here. Either the pump or its discharge failed and the pit overflowed, or the water is a sewer backup coming up the floor drain rather than through the pit at all. We test the pump and camera both the discharge and the line so we fix the one that is actually letting you down, not the one that looks guilty.",
      },
    ],
  },
  'college-hill': {
    intro:
      "A flooded College Hill basement can be a cast-iron drain line that has cracked under the slab, letting water surface inside rather than drain away. Cut the power to that level, then call (513) 586-5107.",
    relevance: [
      "College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue and Belmont, with large early-1900s homes and mid-century houses. The cast-iron drain lines buried under those older basements rust from the inside over the decades, and a section eventually cracks or separates at a joint below the slab. Waste water then escapes under the floor and works its way up into the basement, which looks like seepage but is a broken drain.",
      "Because a break under the slab cannot be read from the puddle, we camera the drain to find exactly where it failed before breaking any concrete. If a section has to come up, we open only over the crack rather than chasing it across the floor. On these hilltop lots the laterals also take root intrusion, and if the water is rising from a blockage rather than a break, we clear and camera that instead.",
    ],
    commonIntro:
      "Across College Hill's early-1900s and mid-century homes, the basement flooding we are called for most often is:",
    localFaqs: [
      {
        q: "The water in my College Hill basement seeps up through the floor, not the walls. Is that groundwater?",
        a: "Not always. Water coming up through the floor rather than in at the walls often means a drain line cracked under the slab, especially in these older cast-iron systems. We camera the line to tell a broken drain from true groundwater, because the two need completely different work and only one of them is a plumbing job.",
      },
    ],
  },
  'walnut-hills': {
    intro:
      "In a Walnut Hills building split into apartments, a flooded basement is often a burst line up in the building around Peebles Corner. Turn the power to the flooded level off first. Call (513) 586-5107.",
    relevance: [
      "Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner and McMillan Street business district. Much of that housing is split into units running on aging cast-iron and galvanized, and the lines are shared. When a supply run splits inside a wall on an upper floor, the water tracks down through the framing to the basement, so the flood appears well away from the break.",
      "We trace the water up to the run that actually failed and isolate it, so one burst line does not shut water to every apartment while we repair it. On buildings this old we fix the failure first and give you a straight read on what else is near the end. If the flood rose from a shared drain rather than a pipe, that points to the stack or lateral, and we camera it before quoting.",
    ],
    commonIntro:
      "In Walnut Hills' historic homes and apartment buildings around Peebles Corner, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "Do you work on the older apartment buildings around Peebles Corner?",
        a: "Yes. These buildings are usually split into units with shared lines, and we can isolate and repair the run that failed without shutting water off to the whole building. We trace the flood back to its source floor rather than starting where it pooled in the basement.",
      },
    ],
  },
  'east-walnut-hills': {
    intro:
      "In East Walnut Hills, a flooded basement in one of these stately homes often traces to a sump pump that failed and let the finished space below take water. Turn the power off first. Call (513) 586-5107.",
    relevance: [
      "East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and finished lower levels holding original woodwork and living space. Where a basement like that has been finished, a sump pump is often what keeps it dry — and when the float sticks, the check valve fails, or the pump quits, the water rises into finished space rather than onto bare concrete. That makes the cost of a missed pump failure much higher here.",
      "We load-test the pump under real flow and check the float and check valve rather than assuming the pump is fine because it hums. If it failed, we replace the part that quit and fit a battery backup, because in a finished basement a power-loss overflow is the expensive one. We handle the plumbing failure; our drying crews handle what the water reached, and we do not run driers over a source that is still live.",
    ],
    commonIntro:
      "In East Walnut Hills' stately early-1900s homes with finished lower levels, the basement flooding we see most often is:",
    localFaqs: [
      {
        q: "My East Walnut Hills basement is finished — do you handle the woodwork and drywall too?",
        a: "We fix the plumbing failure, and our water damage and drying crews handle what it soaked into; most finished basements here need both. What we will not do is dry around a source that is still active — the pump or the pipe gets fixed first, then the drying starts on the woodwork and walls.",
      },
    ],
  },
  avondale: {
    intro:
      "In Avondale, a flooded basement is often a burst pipe in an older building near the hospitals or the zoo, run hard as a rental. Cut the power to the flooded level, then call (513) 586-5107.",
    relevance: [
      "Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout, much of it densely built rental. Heavy use on original galvanized and cast-iron is hard on the lines, and a corroded supply run eventually splits. In a shared building the water from that split does not stay in one unit — it runs down through the framing and pools in the basement, floors from where the pipe actually failed.",
      "We trace the flood up to the run that gave way and isolate it, so the rest of the building keeps water while we repair the split. In a busy rental that means getting service back fast without taking the whole property offline. If the water rose from a shared drain instead of a burst pipe, that is the lateral, and we camera it rather than guess.",
    ],
    commonIntro:
      "In Avondale's dense early-1900s homes and apartment buildings near the hospitals, the basement flooding we are called for most often is:",
    localFaqs: [
      {
        q: "How fast can you reach Avondale when a building's basement is flooding?",
        a: "Avondale is in the central uptown area near the hospitals, so it is a fast reach, and we are on call 24/7. Get the power to that level off before anyone goes down, and we will trace the split and isolate it so only the affected line loses water.",
      },
    ],
  },
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
  oakley: {
    intro:
      "In Oakley's older bungalows, a flooded basement is frequently a galvanized supply line that finally corroded through and split. Turn the power to that level off first. Call (513) 586-5107.",
    relevance: [
      "Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes. Those bungalows were plumbed with galvanized supply lines that corrode from the inside over a century until the wall thins and a run splits. It goes without warning and all at once — clean water fast onto the basement floor — and because the break is usually behind a wall or under the first floor, the puddle gives no clue where it started.",
      "We trace the flood back to the line that failed, shut it at the break, and repair that run rather than the first fitting we reach. On galvanized this old there is often more of it close behind, and we will tell you plainly what is aging so you can plan a re-pipe on your terms instead of one emergency at a time. If the water rose from a drain instead, we camera the line and treat it as the different problem it is.",
    ],
    commonIntro:
      "Across Oakley's early-1900s bungalows around Oakley Square, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "My Oakley bungalow flooded from a pipe in the wall — is the rest of my plumbing about to go too?",
        a: "Possibly. Galvanized corrodes on a similar timeline throughout a house, so a split in one run often means others are thinning. We repair the failure to get you dry, then give you a straight assessment of the rest so you can decide whether to re-pipe on your schedule rather than wait for the next burst.",
      },
    ],
  },
  'mount-lookout': {
    intro:
      "If your Mount Lookout basement takes water at the wall base every heavy rain, that is usually groundwater, not a plumbing failure — and the fix is outside the house. We will tell you which one you have before quoting. Call (513) 586-5107.",
    relevance: [
      "Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, with older homes on quiet, hilly streets. On this kind of grade, heavy rain sheets downhill and soaks the ground against foundations, and water pushes in at the base of the basement walls or the floor-to-wall joint. That is not a burst pipe or a failed pump — it is surface water and groundwater finding its way through the foundation, and no plumbing repair inside the house will stop it.",
      "This is the honest part of the job: if the drains and the pump test sound and the water only shows at the wall base after hard rain, we tell you it is a drainage and grading problem for a waterproofing contractor, not us. We would rather give you that answer than sell you a pump you do not need. Where the water is instead coming from a pipe, a pump, or the drain, that is our work, and we trace it to the failure.",
    ],
    commonIntro:
      "On Mount Lookout's hilly streets near Ault Park, the basement water we are asked about most often falls into two camps:",
    localFaqs: [
      {
        q: "Water comes in at the bottom of my Mount Lookout basement wall after every big storm. Can you fix it?",
        a: "If the plumbing tests sound, that pattern — water at the wall base only after heavy rain, on a graded lot like these — is exterior groundwater, and the fix is drainage and grading work outside, which a waterproofing contractor handles rather than us. We can confirm it is not a hidden pipe or drain first, and that answer is worth more to you than a pump you did not need.",
      },
    ],
  },
  'columbia-tusculum': {
    intro:
      "In Columbia-Tusculum near the river, a flooded basement is often the sewer backing up when the water is high — not clean water. Keep off the flooded level until the power is off. Call (513) 586-5107.",
    relevance: [
      "Columbia-Tusculum (ZIP 45226) is Cincinnati's oldest neighborhood, settled in 1788, known for its restored Victorian Painted Ladies on the east side near the Ohio River. The low riverside ground is the driver: when the river and the water table run high, the sewer system surcharges and backs up into the lowest basements through the floor drains. It comes up contaminated, and in these historic homes it threatens original interiors as well as making a mess.",
      "We establish whether the water rose from the drain or fell from a failed pipe before quoting, since the two need opposite work. For a backup we camera the line to find the blockage, clear it, and discuss a backwater valve for the riverside streets so high water does not put the sewer back inside. We work these Victorian homes carefully, reaching the lines through cleanouts rather than opening original features wherever we can.",
    ],
    commonIntro:
      "In Columbia-Tusculum's historic riverside homes, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "Do you work on the Painted Ladies in Columbia-Tusculum without damaging the original features?",
        a: "Yes. We reach the drain lines through cleanouts and existing access wherever possible and only cut where a pipe truly cannot be reached another way. On these low riverside lots the backwater valve conversation is usually worth having, because the sewer surcharges here whenever the river runs high.",
      },
    ],
  },
  'mount-washington': {
    intro:
      "A flooded Mount Washington basement along Beechmont Avenue is frequently a water heater that gave out at the base. Turn the power to that level off first. Call (513) 586-5107.",
    relevance: [
      "Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. The tank water heaters in houses of this age have usually been replaced once already and are due again, and when a tank corrodes through at the base it does not warn you — it empties onto the basement floor and keeps refilling from the supply until someone shuts it off. Left running overnight, that is a fully flooded basement from a single tank.",
      "We confirm the heater is the source, close the supply, and drain it down safely before anything else. If the tank body is gone we replace it and tell you so plainly; if it was a fitting or the relief line, that is a smaller repair, and we will not push a new unit you do not need. Where the water traces instead to a supply line or a cracked drain, we follow it to the real failure.",
    ],
    commonIntro:
      "Across Mount Washington's older and mid-century homes along Beechmont Avenue, the basement flooding we see most often is:",
    localFaqs: [
      {
        q: "How can I tell overnight whether my water heater flooded the basement or something else did?",
        a: "A heater that failed at the base leaves the floor wettest right under the tank and keeps refilling as fast as you mop, because the supply is still feeding it. Shut the supply to the heater; if the water slows, that was the source. Then get the power to that level off and we will confirm the tank against the fittings so you replace only what failed.",
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
  'pleasant-ridge': {
    intro:
      "In a Pleasant Ridge two-family, a flooded basement is often a burst supply line that ran down through the framing from the other unit. Cut the power to the flooded level first. Call (513) 586-5107.",
    relevance: [
      "Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those two-families share walls, stacks, and supply runs, all of it decades-old galvanized. When a line splits inside a shared wall, the water does not respect the unit line — it tracks down the framing and pools in whichever basement is lowest, so one tenant's burst pipe becomes the other's flood.",
      "We trace the water back to the run that failed and isolate it to the unit it feeds, so one split does not take water from both halves of the house while we repair it. That matters in a two-family, where a blind shutoff means two households without water. If the flood rose from a shared drain instead, that is the lateral, and we camera it before quoting rather than assume.",
    ],
    commonIntro:
      "In Pleasant Ridge's early-1900s homes and brick two-families along Montgomery Road, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "My side of a Pleasant Ridge two-family flooded but the leak seems to be the neighbour's. How does that work?",
        a: "In these two-families the supply and drain runs are shared, so a line that splits on one side often floods the lower basement on the other. We trace the flood to the run that actually failed and, where it is a shared drain, camera from the cleanout to show where the blockage sits relative to the property line before anyone starts digging or paying.",
      },
    ],
  },
  westwood: {
    intro:
      "In Westwood, a flooded basement is commonly a water heater that let go at the base — across this many older homes, tanks reaching the end of their life are the steady cause. Power to that level off first. Call (513) 586-5107.",
    relevance: [
      "Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range the common thread is aging equipment, and the tank water heater is the piece that fails wettest: when one corrodes through at the base it empties onto the floor and keeps refilling from the supply. In a big neighborhood of older homes, that is the flood we get called for again and again.",
      "We confirm the heater is the source, close the supply, and drain it down before deciding anything. A spent tank gets replaced; a failed fitting or relief line is a smaller repair, and we will not sell a new unit you do not need. Because Westwood's housing ranges so widely, we do not assume — if the water traces to a supply line, a pump, or a drain instead, we follow it to the actual failure.",
    ],
    commonIntro:
      "Across Westwood's older and mid-century homes along Harrison Avenue, the basement flooding we are called for most often is:",
    localFaqs: [
      {
        q: "How fast can you reach Westwood, and what should I do first?",
        a: "Westwood is a large west-side neighborhood well within our service area, and we are on call 24/7. First, get the power to the flooded level off — do not stand in water to reach a panel. If you can see the water heater is the source, shut its supply, and we will confirm the tank against the fittings when we arrive.",
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
  'blue-ash': {
    intro:
      "In Blue Ash, a flooded basement often traces to a water heater that let go in a finished lower level. Turn the power to that level off first. Call (513) 586-5107.",
    relevance: [
      "Blue Ash (ZIP 45242) is a thriving northeast-side city of established mid-century neighborhoods and newer subdivisions, and even the newer housing here is now decades old. The tank water heaters in these homes are on borrowed time, and many sit in or beside finished basements. When a tank corrodes through at the base it empties onto the floor and keeps refilling from the supply, so a slow overnight failure can soak a finished lower level before anyone is awake to catch it.",
      "We confirm the heater is the source, close the supply, and drain it safely before touching the rest. A finished Blue Ash basement usually needs two things — the plumbing failure fixed and the soaked materials dried — and we handle the plumbing while our drying crews handle what the water reached. We will not run driers over a source that is still live, and if the water came from a pump, a supply line, or a drain instead, we trace it there first.",
    ],
    commonIntro:
      "Across Blue Ash's mid-century homes and newer subdivisions, the basement flooding we handle most often is:",
    localFaqs: [
      {
        q: "Our Blue Ash basement is finished — how do we keep a small heater leak from becoming a big repair?",
        a: "The catch with a finished basement is that a slow water heater failure hides behind the wall until the flooring lifts. If your tank is more than about a decade old, have it looked at before it fails; once it has flooded, we fix the plumbing and our drying crews handle the finished materials, in that order, so nothing dries over a source that is still leaking.",
      },
    ],
  },
  montgomery: {
    intro:
      "If your Montgomery basement takes water at the wall base after heavy rain and the plumbing tests sound, that is groundwater, not a pipe — and the fix is outside the house. We will tell you which you have before quoting. Call (513) 586-5107.",
    relevance: [
      "Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes, many with finished basements. On established, well-treed lots like these, heavy rain saturates the ground and pushes water in at the base of the basement walls or the floor-to-wall joint. That is surface and groundwater working through the foundation — not a burst pipe, not a failed pump — and no plumbing repair inside will stop it.",
      "Here is where we tell people not to hire us: if the drains and the pump test sound and the water only appears at the wall base after hard rain, the problem is exterior drainage and grading, and the right call is a waterproofing contractor rather than a plumber. We would rather confirm that for you than sell a pump you do not need. When the water does come from a pipe, a water heater, a pump, or the drain, that is our work, and we trace it to the failure before quoting.",
    ],
    commonIntro:
      "Across Montgomery's historic and established homes, the basement water we are asked about most often splits into two very different problems:",
    localFaqs: [
      {
        q: "Water shows up along the basement wall of my Montgomery home after big storms. Is that a plumbing repair?",
        a: "If the plumbing tests sound, that pattern is almost always exterior groundwater on a graded lot, and the fix is drainage and grading work outside the house, handled by a waterproofing contractor rather than us. We can confirm first that it is not a hidden supply line, drain, or pump — and if it is one of those, that part is ours to fix.",
      },
    ],
  },
};
