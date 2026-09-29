export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Radiators on the hillside above River Road running cold again? Sedamsville’s late-1800s and early-1900s homes are the kind that often still heat with an original boiler, and we repair, maintain, and replace boilers across the neighborhood, from small fixes to full swaps. We also answer 24/7 no-heat calls when the house goes cold overnight. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, sitting between Riverside and Sayler Park, with much of its housing climbing the hillside above River Road. Homes built in the late 1800s and early 1900s often still heat with radiators fed by a hot water or steam boiler, and many of those boilers are older cast-iron units. Cast iron is tough, but after decades of heating and cooling, sections can crack, gaskets weep, and the controls wired onto it are often a mix of original and replacement parts.',
      'On a hillside house, radiators on the top floor are the first to go lukewarm when air collects in the system or the pressure drops, so bleeding radiators and checking the fill pressure is usually where a Sedamsville call starts. When an old boiler is past saving, we replace it with a high-efficiency boiler sized to the house, not to whatever was in the basement before. Those run around 90% efficient, and with yearly service a well-maintained boiler lasts 15 to 25 years.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes, most boiler calls come back to age and air in the lines, and the problems we fix most are:',
    localFaqs: [
      { q: 'My upstairs radiators are cold but the downstairs ones are hot in my Sedamsville house. What’s wrong?', a: 'Most often it’s trapped air or low system pressure, and in a hillside home the top floor feels it first. Bleeding the upper radiators and bringing the pressure back up fixes many cases; if it keeps coming back, we check for a leak or a failing valve.' },
      { q: 'Rain off the hill backed water into my Sedamsville basement and it reached the boiler. Can I turn it back on?', a: 'No, leave it off. A flooded boiler must be inspected by a technician before it is restarted, because water can damage the burner, gas valve, and controls in ways you can’t see. In Sedamsville’s older hillside homes we check those parts, replace what got wet, and take 24/7 no-heat calls at (513) 586-5107.' },
    ],
  },
  'sayler-park': {
    intro: 'Is the old boiler in your Sayler Park frame house worth fixing for another winter? We give a straight answer on that, and we repair, maintain, and replace boilers from the riverfront streets up the hill in Cincinnati’s westernmost neighborhood, with 24/7 no-heat service when one quits. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It started as its own village, Home City, before Cincinnati annexed it in the early 1900s, and its tree-lined streets still hold rows of Victorian and early-1900s frame houses. Homes of that age often heat with radiators fed by a hot water or steam boiler, and the boiler in the basement is frequently an older cast-iron unit that has been patched over the years rather than replaced.',
      'The riverfront sits in the Ohio River floodplain, and that matters for a boiler. A basement that takes on water can soak the burner, gas valve, controls, and circulator pump, and a boiler that has been underwater needs a full inspection before anyone fires it again. Up the hill, the usual issues are age-related: sagging pressure, radiators that need bleeding, and cast-iron sections starting to leak. When replacement makes more sense, we fit a high-efficiency boiler sized to the house and mount it clear of the floor where the space allows.',
    ],
    commonIntro: 'Between the floodplain and the age of Sayler Park’s frame houses, the boiler problems we see most are:',
    localFaqs: [
      { q: 'My basement flooded in Sayler Park. Can I turn my boiler back on?', a: 'Not until it has been checked. Water can damage the burner, gas valve, and controls, so have a technician inspect the boiler before it is fired again; we handle those checks and any repairs that follow.' },
      { q: 'I’m replacing the old boiler in my Sayler Park Victorian. Can the new one use the existing chimney?', a: 'Sometimes, but not always as it is. A high-efficiency boiler, around 90% efficient, usually vents through a pipe out the side wall and doesn’t use the chimney at all, while a standard boiler venting into an older masonry chimney often needs a liner. In Sayler Park’s Victorian and early-1900s frame houses, we inspect the chimney before recommending either.' },
    ],
  },
  'riverside': {
    intro: 'Did high water reach the boiler in your Riverside basement? On the low lots along River Road and US-50, that is a real question every wet season. We repair, maintain, and replace boilers here, including checking units after a flood before they are fired again, and we take 24/7 no-heat calls. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati running along River Road and US-50, between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. Many homes sit on low Ohio River bottomland, where flooding and high groundwater are part of life. Older homes along this stretch often heat with a hot water or steam boiler feeding radiators, and a boiler sitting in a damp basement wears differently from one in a dry one.',
      'Moisture corrodes burner parts, rusts the jacket and controls, and can shorten the life of a circulator pump. After any water in the basement, a boiler should be inspected before it runs. Annual service matters more down here than up the hill: in 60 to 90 minutes we check the burner, pressure, relief valve, and controls, and flag rust before it turns into a no-heat call. If a boiler is past its life, we replace it with a high-efficiency unit sized to the house and raise it off the floor where the room allows.',
    ],
    commonIntro: 'On Riverside’s low riverfront lots, damp basements add to the usual boiler wear, and the problems we see most are:',
    localFaqs: [
      { q: 'Should a boiler in a Riverside basement be raised off the floor?', a: 'Where the space allows, yes. A stand or a wall-hung high-efficiency boiler keeps the burner and controls clear of the water that low Riverside basements can take on.' },
      { q: 'How can I tell if my Riverside house has a steam boiler or a hot water boiler?', a: 'Look at the boiler and the radiators. A steam boiler has a glass sight tube showing the water level, and its radiators have a small air vent on the side; a hot water boiler has a pressure and temperature gauge, and its radiators have bleed valves near the top. Older Riverside homes along River Road have both kinds, and each is serviced differently.' },
    ],
  },
  'east-price-hill': {
    intro: 'No heat in one unit of your East Price Hill two-family, or in both? Dense early-1900s blocks around Warsaw Avenue and the Incline District often run on old boilers and radiators, sometimes one boiler for the whole building. We repair, maintain, and replace boilers across the neighborhood, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, the neighborhood the old Price Hill Incline once carried residents up to. The streets around Warsaw Avenue and the Incline District are packed with two- and three-story frame homes and brick two-families built close together in the early 1900s. Housing of that age often still heats with radiators fed by a hot water or steam boiler, and in a two-family, one boiler sometimes serves both floors.',
      'When a shared boiler goes down, it is a no-heat call for two households at once, and the landlord hears from both tenants. That is why we treat those calls as urgent and work around the clock. Common causes are low pressure, a failed circulator, a worn thermocouple or igniter, or a cast-iron section that has started to leak after decades of use. For owners planning ahead, service in the fall catches most of this, and a high-efficiency replacement sized to the building can cut fuel use in a big old house.',
    ],
    commonIntro: 'In East Price Hill’s dense early-1900s homes and two-families, where one boiler may heat more than one unit, the problems we see most are:',
    localFaqs: [
      { q: 'I own a two-family in East Price Hill with one boiler. Can each unit control its own heat?', a: 'Often, yes. Depending on the piping, we can split the system into zones with separate thermostats, and we will tell you plainly if the layout makes that impractical.' },
      { q: 'Is it normal for the boiler in my East Price Hill two-family to run almost nonstop on cold days?', a: 'On the coldest days, long run times are normal for one boiler heating both floors of an East Price Hill two-family. What isn’t normal is a boiler that fires and shuts off every few minutes, or one that runs constantly while rooms stay cold. Either one points to a control, sizing, or circulation problem worth a service visit.' },
    ],
  },
  'west-price-hill': {
    intro: 'Not sure if your West Price Hill house has a boiler or a furnace? Look for radiators or baseboard heat. Many homes out along Glenway Avenue run furnaces, but some of the 1920s houses still heat with a boiler, and we repair, maintain, and replace those. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans newer than the river neighborhoods, with a lot of single-family homes built from the 1920s through the 1950s. That spread matters for heating. Most homes here run forced-air furnaces, especially the post-war houses, so a boiler is not the default. If your home has ductwork and vents, our furnace team is the call instead of us.',
      'The homes that do have boilers tend to be the older ones from the 1920s and 1930s, where radiators were original equipment, plus the occasional house with hot water baseboard. Those systems often run on a cast-iron boiler that has outlived its original parts. We handle low pressure, cold radiators, noisy pipes, and leaks, and we do yearly service that takes 60 to 90 minutes. When a boiler reaches the end, we quote a high-efficiency replacement sized to the house, and if a furnace makes more sense, we say so.',
    ],
    commonIntro: 'In the West Price Hill homes that still heat with radiators or baseboard, the boiler problems we see most are:',
    localFaqs: [
      { q: 'Is it worth keeping the boiler in my 1920s West Price Hill house?', a: 'Usually, if it is in good shape. Radiator heat is even and quiet, a well-maintained boiler lasts 15 to 25 years, and switching to a furnace means adding ductwork the house was never built for.' },
      { q: 'Can I shut my boiler off while I’m away from my West Price Hill house for part of the winter?', a: 'Turn the thermostat down, but don’t shut the boiler off. An empty house still needs enough heat to keep radiators and pipes on outside walls from freezing, and a frozen radiator can crack. In West Price Hill’s 1920s and 1930s radiator homes, it also helps to have someone check the house while you’re gone.' },
    ],
  },
  'lower-price-hill': {
    intro: 'Steam or hot water, which one heats your Lower Price Hill rowhouse? Plenty of the 19th-century Italianate brick rowhouses around State Avenue run on one or the other, and we repair, maintain, and replace both, down in the Mill Creek valley where basements sit low. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses. Homes that age often still heat with radiators, fed by a steam or hot water boiler that may have been swapped out once or twice since the house was built but still runs through the original piping.',
      'Steam systems in old rowhouses have their own habits: banging pipes when condensate pools in a sagging line, a low-water cutoff that shuts the boiler off, or radiator vents that stick closed. Hot water systems tend to lose pressure or trap air. The low valley location adds another risk, because when Mill Creek and the river run high, water in the basement can reach the boiler. We inspect a boiler that has sat in water before it is fired, and when replacement makes sense, we size a high-efficiency unit to the rowhouse.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses down in the valley, the steam and hot water boiler problems we see most are:',
    localFaqs: [
      { q: 'Why do the pipes bang when the heat comes on in my Lower Price Hill rowhouse?', a: 'On a steam system, banging usually means water is sitting where steam should flow, often from a pipe that has lost its pitch or a boiler with the water level set too high. We find the low spot and fix it, which is usually a repair, not a replacement.' },
      { q: 'Water came into my Lower Price Hill rowhouse basement during heavy rain. Is my boiler safe to run?', a: 'Not until it has been looked at. A flooded boiler must be inspected by a technician before it is restarted, since water can ruin the gas valve, burner, and wiring without showing on the outside. Lower Price Hill sits on low ground in the Mill Creek valley, so we check boilers there after high water often and take 24/7 no-heat calls.' },
    ],
  },
  'over-the-rhine': {
    intro: 'Is the whole building cold, or just your apartment? In Over-the-Rhine’s 19th-century buildings around Vine Street and Findlay Market, one central boiler often heats every unit, so a single failure hits everyone. We repair, maintain, and replace boilers in OTR homes, condos, and apartment buildings, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, with block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. Buildings that old were often heated by boilers and radiators, and many that have been split into apartments and condos still run on a central boiler that serves several units through shared piping.',
      'That setup works well until it does not. A failed circulator, a tripped low-water cutoff, or a leak in shared piping can leave every unit without heat at once, and the landlord or condo association gets the calls. Some renovations have paired an old boiler with new zone valves and thermostats, and mismatched parts cause their own problems. We trace the fault, get heat back, and for buildings planning ahead, we size a high-efficiency replacement to the actual load of the building today, not the one from 1880.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, where one boiler often serves several apartments, the problems we see most are:',
    localFaqs: [
      { q: 'Our OTR building has one boiler for all the condos. Who should call when it stops?', a: 'Usually the association or building manager, since the boiler is shared equipment. We work with whoever is responsible, and we take no-heat calls 24/7.' },
      { q: 'Can I replace or move a radiator in my Over-the-Rhine condo if the building shares one boiler?', a: 'Talk to the association first. On a shared boiler, every radiator is part of one system, and a change in one unit can throw off heat in the others. In Over-the-Rhine buildings from the 1850s to 1880s, we look at the whole piping layout before swapping or moving a radiator, and we coordinate the work with the building manager.' },
    ],
  },
  'downtown': {
    intro: 'Radiators cold in your downtown loft? It depends who owns the boiler. In high-rise condos, building maintenance usually handles the central plant, but in smaller early-1900s conversions and lofts with their own equipment, we repair, maintain, and replace boilers across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Heating varies building to building. Many towers run on a central system looked after by the building’s own staff or a commercial contractor, and if that is your setup, your first call is the building manager, not us. We would rather say that up front than send someone out to a system we do not control.',
      'Where we help is in the smaller early-1900s buildings turned residential, where a boiler in the basement may still feed radiators on every floor, and in units with their own equipment, such as a gas-fired combi boiler that handles both heat and hot water. Leaks several floors up travel fast, so a weeping radiator valve or a dripping relief valve is worth a call early. We handle repairs, annual service, and replacement with a high-efficiency boiler sized to the space.',
    ],
    commonIntro: 'In downtown’s lofts and older commercial conversions that run their own boilers, the problems we see most are:',
    localFaqs: [
      { q: 'Can a downtown condo have its own boiler?', a: 'Some do, often a compact combi boiler that supplies both heat and hot water. If yours is on a shared building system, the building manager handles it; if it is your own equipment, we service, repair, and replace it.' },
      { q: 'I smell gas near the boiler in my Downtown condo. What should I do?', a: 'Leave right away, don’t flip switches or use anything that could spark, and call 911 or the gas utility from outside. Once the gas company says it’s safe, we can inspect and repair a boiler that belongs to your Downtown condo or loft; if it’s building equipment, the building manager will need to be part of that.' },
    ],
  },
  'west-end': {
    intro: 'Clanking radiators in a West End rowhouse near TQL Stadium or Linn Street? The old Italianate and brick homes here often still heat with a boiler, while newer development usually does not. We repair, maintain, and replace boilers in the older homes that have them, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. It mixes historic Italianate rowhouses and brick homes with mid-century housing and newer development. Heating follows the age of the building. The historic rowhouses often heat with radiators fed by a steam or hot water boiler, while mid-century and newer homes are far more likely to run forced-air furnaces or heat pumps, and if that is your house, a boiler tech is the wrong call.',
      'For the older homes that do have boilers, the equipment is often a cast-iron unit that has run for decades, with valves and controls replaced piece by piece. The low ground near the Mill Creek basin brings damp basements, which rust burner parts and controls faster. We handle pressure problems, cold radiators, noisy pipes, and leaks, and yearly service catches most of them early. When the boiler is done, we replace it with a high-efficiency model sized to the house rather than to the old one.',
    ],
    commonIntro: 'In the West End’s historic rowhouses and older brick homes that still heat with radiators, the boiler problems we see most are:',
    localFaqs: [
      { q: 'My West End rowhouse boiler is old but still runs. Should I replace it now?', a: 'Not just because of age. If it heats evenly, holds pressure, and passes a yearly service, keep it running; we recommend replacement when repairs start stacking up or a cast-iron section cracks.' },
      { q: 'My West End basement takes on water in heavy rain. How do I protect the boiler?', a: 'Keep the floor drain clear, keep stored items away from the boiler, and if water comes in often, ask about raising the boiler on a stand. If water ever reaches the burner or controls, it must be inspected by a technician before it is restarted. On the West End’s low ground near the Mill Creek basin, that check is worth the call.' },
    ],
  },
  'mount-adams': {
    intro: 'Worried a new boiler won’t make it down the stairs of your Mount Adams rowhouse? It usually will. We repair, maintain, and replace boilers in the tightly packed 19th-century rowhouses and townhomes above downtown and Eden Park, steep narrow streets included, and we answer 24/7 no-heat calls on the hill. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Homes built in that era often still heat with radiators fed by a hot water or steam boiler, usually tucked into a small basement or utility space that was never designed with modern equipment in mind. With several floors stacked above one boiler, the upper rooms are the first to feel any drop in pressure.',
      'That tight access shapes the job. An old cast-iron boiler is heavy and sometimes has to come out in sections, and a replacement has to fit through narrow doors and down steep stairs. A wall-hung high-efficiency boiler is often a good fit for these spaces because it takes up far less room and runs around 90% efficient. For boilers with life left, annual service keeps the pressure steady and catches leaks early. In a three-story rowhouse, the top-floor radiators are where trouble shows first.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, where boilers sit in tight spaces and heat several floors, the problems we see most are:',
    localFaqs: [
      { q: 'Will a new boiler fit in my Mount Adams rowhouse basement?', a: 'Almost always. Modern high-efficiency boilers are much smaller than old cast-iron units, and wall-hung models free up floor space; we measure the room and the path in before we recommend one.' },
      { q: 'The boiler in my Mount Adams rowhouse vents into the old brick chimney. Is that a problem?', a: 'It can be. Older masonry chimneys were built for hotter exhaust, and a newer boiler’s cooler flue gas can condense inside and wear down the brick and mortar, so many need a liner. On a Mount Adams rowhouse we check the chimney when we service or replace the boiler, and a high-efficiency unit may be able to vent through the wall instead.' },
    ],
  },
  'mount-auburn': {
    intro: 'Heat uneven between apartments in a subdivided Mount Auburn mansion? Many of the grand 19th-century homes on this hilltop north of downtown were split into units but kept their original boiler and radiators. We repair, maintain, and replace those boilers, and we take 24/7 no-heat calls from owners and landlords. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine. It is lined with grand 19th-century homes and historic mansions, many now divided into apartments. Houses of that size and age were often built for boiler heat, with large radiators in high-ceilinged rooms, and plenty of them still run on a steam or hot water boiler in the basement. The radiators are often original, and many are worth keeping.',
      'Splitting a mansion into apartments does not split the boiler. One system often heats every unit, so the top-floor tenant may be cold while the first floor is too warm, and a single failure means a no-heat call for the whole house. We balance radiators, add zoning where the piping allows, and fix the usual age-related faults: low pressure, air in the lines, and leaking valves. When the old cast-iron boiler is done, we size a high-efficiency replacement to the building’s real heat load.',
    ],
    commonIntro: 'In Mount Auburn’s grand 19th-century homes, many now apartments sharing one boiler, the problems we see most are:',
    localFaqs: [
      { q: 'Why is my top-floor Mount Auburn apartment cold when downstairs is warm?', a: 'Usually the radiators are out of balance or air is trapped at the top of the system. Bleeding the upper radiators and adjusting the valves fixes most cases, and zoning can help if the building’s piping allows it.' },
      { q: 'I’m a Mount Auburn landlord with one boiler heating several apartments. What should tenants do when the heat goes out?', a: 'Give every tenant one number to call and post it by the entry. On a shared boiler, one outage leaves every unit cold at once, so a fast report matters. We take 24/7 no-heat calls at (513) 586-5107 and work with the owner or manager on basement access in Mount Auburn’s divided 19th-century houses.' },
    ],
  },
  'clifton': {
    intro: 'Renting out a big Clifton house near UC with an old boiler? Many Victorian and early-1900s homes around Ludlow Avenue and the Gaslight District still heat with radiators, and we repair, maintain, and replace boilers for owners and landlords, with 24/7 no-heat service when a tenant calls. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Houses of that age and size often still heat with a hot water or steam boiler feeding radiators, and many have been heated the same way for over a century, even if the boiler itself has been replaced along the way.',
      'A fair number of these big houses are now rentals near campus, which changes how the boiler gets used. Tenants do not always know to bleed a radiator or read the pressure gauge, so a small problem can run until the heat quits. Annual service before the heating season takes 60 to 90 minutes and catches most of what leads to a January no-heat call. For owner-occupied homes, a high-efficiency boiler sized to the house is worth weighing when the old cast-iron unit needs major repairs.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, owner-occupied or rented, the boiler problems we see most are:',
    localFaqs: [
      { q: 'How often should a Clifton landlord have a rental’s boiler serviced?', a: 'Once a year, before the heating season. The visit takes 60 to 90 minutes and covers the burner, pressure, relief valve, and controls, which catches the faults behind most mid-winter no-heat calls.' },
      { q: 'Can a big Clifton Victorian with one boiler be split into heating zones?', a: 'Often, yes, on a hot water system. We add zone valves or circulators and separate thermostats so the rooms you use most, or separate rental floors, run on their own schedule; steam systems are much harder to zone. In Clifton’s large older houses we look at the piping first and tell you plainly if zoning isn’t practical.' },
    ],
  },
  'corryville': {
    intro: 'Tenant texting that the radiators are cold off Short Vine? Corryville’s early-1900s homes and apartments near UC take hard use, and some still run on boilers. We repair, maintain, and replace boilers across the neighborhood for landlords and owners, and we answer 24/7 no-heat calls. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Older buildings in that mix often heat with radiators fed by a hot water or steam boiler, and in a converted house or small apartment building, one boiler may heat every unit. Newer apartment buildings are more likely to run furnaces or heat pumps, and those need our HVAC team rather than a boiler visit.',
      'With units sharing walls and piping, a boiler failure here is rarely one tenant’s problem. Low pressure, a stuck zone valve, or a failed circulator can leave a whole building cold, and with leases turning over, nobody is watching the gauge in between. We work with landlords on repairs and yearly service, and when an older cast-iron boiler is nearing the end, we size a high-efficiency replacement to the building so it is not oversized for the load.',
    ],
    commonIntro: 'In Corryville’s dense, older rentals near campus, where one boiler often heats several units, the problems we see most are:',
    localFaqs: [
      { q: 'Can you fix a Corryville rental’s boiler while tenants are home?', a: 'Yes. Most boiler repairs happen in the basement or utility room, and we coordinate access with the landlord; on a no-heat call we come out 24/7.' },
      { q: 'Tenants in my Corryville rental keep reporting one cold room. What should I check?', a: 'Start with the simple things: a radiator valve turned off, furniture or a cover blocking the radiator, or air trapped inside it. If the room is still cold after bleeding the radiator, the problem is likely circulation or piping and needs a service visit. In Corryville’s older rentals near UC, we see all of these, and most are quick fixes.' },
    ],
  },
  'northside': {
    intro: 'Should the boiler in your Northside house be making that noise? Streets of late-1800s and early-1900s homes off Hamilton Avenue often still heat with radiators, and banging, gurgling, or hissing usually means something needs attention. We repair, maintain, and replace boilers across the neighborhood. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Homes from that period often still heat with a hot water or steam boiler feeding radiators, and many of those boilers are older cast-iron units that have been kept running with replacement parts. That works for a while, but each patch adds another part that can fail on a cold night.',
      'Noise is one of the most common reasons we get called here. On a hot water system, gurgling usually means air in the lines and a round of bleeding; on steam, banging points to water pooling in a pipe or a water level set wrong. Homes on the low ground near Mill Creek also deal with damp basements, which rust controls and burner parts faster. Annual service catches both kinds of trouble. When an old boiler is beyond repair, we replace it with a high-efficiency model sized to the house.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes near the Mill Creek valley, the boiler problems we see most are:',
    localFaqs: [
      { q: 'My radiators gurgle every morning in my Northside house. Is that serious?', a: 'Usually not, but it should be fixed. Gurgling typically means air in a hot water system, and bleeding the radiators and checking the pressure solves most cases; if air keeps coming back, there may be a small leak we need to find.' },
      { q: 'The pressure gauge on my Northside boiler climbs high when it heats and drops when it cools. Why?', a: 'That usually points to the expansion tank, which gives heated water room to grow. When the tank fails or fills with water, pressure swings with every cycle and the relief valve may start to drip. In Northside’s late-1800s and early-1900s radiator homes it’s a common repair, and we check the tank on every annual service.' },
    ],
  },
  'college-hill': {
    intro: 'Radiators in the big early-1900s house, ductwork in the mid-century one? College Hill has both along Hamilton Avenue and Belmont, and only some homes here heat with a boiler. For the ones that do, we repair, maintain, and replace boilers, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. The heating follows that split. The larger early-1900s homes often heat with radiators fed by a hot water or steam boiler, while most mid-century houses were built with forced-air furnaces. If your home has floor or ceiling vents, a furnace tech is the right call, not a boiler visit.',
      'In the older homes that do have boilers, we see cast-iron units that have been running a long time, radiators that need bleeding each fall, and pressure that drifts low. A well-maintained boiler lasts 15 to 25 years, so if yours is older than that, it is worth planning a replacement before it fails in January. We size a high-efficiency boiler to the house, which often means a smaller unit than the one coming out, since older boilers were often oversized.',
    ],
    commonIntro: 'In College Hill’s large early-1900s homes that still heat with radiators, the boiler problems we see most are:',
    localFaqs: [
      { q: 'How do I know if my College Hill house has a boiler or a furnace?', a: 'Look at how heat reaches the rooms. Radiators or baseboard heaters fed by pipes mean a boiler; floor or wall vents mean a furnace.' },
      { q: 'Should I convert my College Hill steam boiler to a hot water system?', a: 'Usually not. Converting a steam house to hot water means checking or replacing radiators and piping that were built for steam, which is a large job. In College Hill’s early-1900s homes, a new steam boiler matched to the existing radiators is often the simpler path, and we lay out both options if you want to compare them.' },
    ],
  },
  'walnut-hills': {
    intro: 'Whole apartment building cold near Peebles Corner? In Walnut Hills’ 19th-century homes and apartment buildings, a single boiler often heats every unit, so when it stops, everyone knows. We repair, maintain, and replace boilers across the neighborhood and along McMillan Street, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of that century-old housing is now split into units. Buildings of that age often still heat with a central steam or hot water boiler and radiators in every room, and in a converted house, one boiler usually carries the whole building. Many of those boilers are older cast-iron units.',
      'That is where most of our Walnut Hills boiler calls come from: one failure, several apartments without heat. The usual causes are a tripped low-water cutoff, a failed circulator or zone valve, low pressure, or a leak in old piping. Landlords also call us to plan ahead, and yearly service in the fall is the simplest way to avoid a mid-winter outage. When a building’s old cast-iron boiler is done, we size a high-efficiency replacement to the building’s heat load and keep the existing radiators where they are in good shape.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, where one boiler often heats every unit, the problems we see most are:',
    localFaqs: [
      { q: 'Can a new boiler work with the old radiators in my Walnut Hills building?', a: 'Yes, in most cases. Cast-iron radiators in good condition can stay, and we match the new boiler and its controls to the existing piping.' },
      { q: 'When should I schedule boiler service for my Walnut Hills apartment building?', a: 'Early fall, before tenants start calling for heat. The visit takes 60 to 90 minutes and catches worn parts while a short shutdown is still easy to arrange. In a Walnut Hills building where one boiler heats every unit, finding the problem in early fall beats finding it on the first cold night with the whole building waiting.' },
    ],
  },
  'east-walnut-hills': {
    intro: 'Thinking about replacing the old boiler in your East Walnut Hills home but keeping the radiators? That is often the right call. We repair, maintain, and replace boilers in the stately early-1900s homes and brick apartment buildings around Woodburn Avenue and DeSales Corner, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. Large houses from that era were often built for boiler heat, and many still run radiators fed by a hot water or steam boiler. The radiators themselves, usually cast iron, can outlast several boilers, which is why a replacement here rarely touches the rooms upstairs.',
      'That makes replacement here mostly a basement job. We take out the old boiler, size a high-efficiency unit to the house, and connect it to the existing radiators, leaving original woodwork and plaster alone. High-efficiency boilers run around 90% efficient. In the brick apartment buildings, the calls lean more toward repairs: a boiler serving several units that has lost pressure or shut down overnight. Either way, annual service takes 60 to 90 minutes and is the simplest way to catch problems before a cold morning.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes and brick apartment buildings, the boiler problems we see most are:',
    localFaqs: [
      { q: 'Will replacing my boiler mean opening walls in my East Walnut Hills house?', a: 'Usually not. When the radiators and piping are sound, the work stays in the basement, and we connect the new boiler to the existing system.' },
      { q: 'My East Walnut Hills boiler keeps losing pressure. Can I just keep topping it up?', a: 'You can top it up to stay warm, but a boiler that keeps losing pressure has a leak somewhere: a radiator valve, a pipe joint, the relief valve, or inside the boiler. Constant fresh water also brings in oxygen that corrodes the system from inside. In East Walnut Hills’ older homes, we trace the leak before it stains woodwork or ceilings.' },
    ],
  },
  'avondale': {
    intro: 'Who do you call when the boiler in your Avondale rental quits on a cold night? Us, at any hour. Older homes and apartment buildings near the hospitals and the Cincinnati Zoo often run on boilers, and we repair, maintain, and replace them for owners and landlords across the neighborhood. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of the housing is older and densely built, and much of it is rental. Buildings of that age often heat with a steam or hot water boiler feeding radiators, and in an apartment building, one boiler may serve every unit. Newer buildings are more likely to run furnaces.',
      'Heavy use and older equipment are a hard combination. A boiler that runs all winter in a full building wears out its circulator, burner parts, and valves faster, and a single failure can leave several households without heat. We handle 24/7 no-heat calls, repairs, and the annual service that keeps most of those calls from happening. When a cast-iron boiler reaches the end, we replace it with a high-efficiency unit sized to the building, and we tell landlords straight when a repair is not worth the money.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, where boilers carry heavy loads, the problems we see most are:',
    localFaqs: [
      { q: 'The heat in my Avondale apartment building is out. What should I do first?', a: 'Tell your landlord or building manager right away, since the boiler usually serves the whole building. If you own the building, call us at (513) 586-5107; we take no-heat calls 24/7.' },
      { q: 'Why does the steam boiler in my Avondale building keep shutting itself off?', a: 'A common reason is the low-water cutoff, a safety switch that stops the burner when the water level drops too low. It’s doing its job, so never bypass it; the real question is why the water keeps dropping, often a leak or a failed automatic feeder. In Avondale’s older apartment buildings, we find and fix that cause.' },
    ],
  },
  'hyde-park': {
    intro: 'Does a big Hyde Park Tudor or foursquare still need its old boiler? Many large early-1900s homes around Hyde Park Square and Erie Avenue heat with radiators, and replacing just the boiler usually keeps that even heat. We repair, maintain, and replace boilers here, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes, including Tudors, colonials, and brick foursquares, on established, tree-shaded streets. Homes of that size and age often heat with a hot water or steam boiler and radiators, and some renovated houses have added radiant floor heat in kitchens, baths, or finished basements, which also runs off a boiler. In the original houses, the boiler is often an older cast-iron unit.',
      'In a big house, a boiler that is losing ground shows up as cold rooms at the far end, a pressure gauge that keeps dropping, or a slow leak at a radiator valve that stains a finished ceiling below. We handle those repairs and the annual service that heads them off. When the old cast-iron boiler needs replacing, we size a high-efficiency unit to the house and its zones, including any radiant loops, rather than matching the size of the old one.',
    ],
    commonIntro: 'In Hyde Park’s large early-1900s homes, with radiators and sometimes radiant floors, the boiler problems we see most are:',
    localFaqs: [
      { q: 'Can one boiler run both radiators and radiant floor heat in my Hyde Park home?', a: 'Yes, with the right controls. Radiant floors need cooler water than radiators, so we set up a mixing valve and separate zones to run both from the same boiler.' },
      { q: 'Can the boiler in my Hyde Park home heat my hot water too?', a: 'Yes, with an indirect water heater, a storage tank the boiler heats through its own zone. In Hyde Park’s larger early-1900s homes it can replace a separate gas water heater and keep up with heavy hot water use. It works best with a hot water boiler in good shape, so we check yours before recommending it.' },
    ],
  },
  'oakley': {
    intro: 'Radiators in your Oakley bungalow, or vents? Some early-1900s bungalows and brick homes around Oakley Square and Madison Road still heat with boilers, while the newer development mostly runs forced air. If yours has a boiler, we repair, maintain, and replace it, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is an east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. Heating splits along those lines. Some older bungalows and brick homes still heat with a hot water or steam boiler and radiators, while many were converted to forced air over the years, and most newer builds run furnaces or heat pumps. Checking for radiators or vents tells you which you have.',
      'If your Oakley home has vents, our furnace team is the one to call. If it has radiators, the boiler is likely an older cast-iron unit or a mid-life replacement, and the usual problems are low pressure, air in the lines, a failing circulator, or a pilot or igniter that will not stay lit. Yearly service takes 60 to 90 minutes and catches most of these. When it is time to replace, a high-efficiency boiler sized to a bungalow is usually smaller than what came out.',
    ],
    commonIntro: 'In the Oakley bungalows and brick homes that still heat with radiators, the boiler problems we see most are:',
    localFaqs: [
      { q: 'Should I convert my Oakley bungalow from a boiler to forced air?', a: 'Only if you also want central air and have room for ductwork. If the boiler and radiators work, keeping them and replacing the boiler when it wears out is usually simpler, and a ductless mini-split can add cooling without ducts.' },
      { q: 'My Oakley bungalow was converted to forced air, but the old radiators are still there. Can I go back to boiler heat?', a: 'Sometimes. If the radiators and their piping are still in place and sound, a new boiler can be connected to them, though we pressure-test the old lines first. In Oakley’s early-1900s bungalows that were converted years ago, pieces are often missing or cut, and we tell you plainly if putting it back isn’t worth it.' },
    ],
  },
  'mount-lookout': {
    intro: 'Top-floor rooms cold in your Mount Lookout house on the hill? In older homes near Mount Lookout Square and Ault Park that heat with radiators, that usually points to trapped air or low pressure. We repair, maintain, and replace boilers here, and we take 24/7 no-heat calls. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. Many of the early-1900s homes were built with boiler heat and radiators, and some still have them. Larger and newer houses are more likely to run forced-air furnaces, and a few custom homes use radiant floor heat, which is also boiler-fed.',
      'For radiator homes, the problems are familiar: air collects at the high points, pressure drifts down, and the rooms farthest from the boiler go cool first. Bleeding radiators and restoring pressure fixes a lot of it. Beyond that, we look at the circulator, expansion tank, and relief valve during yearly service. In homes with radiant floors, the boiler sends cooler water through tubing under the floor and needs its controls set right. When replacement comes up, we size a high-efficiency boiler to the house.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes with radiators or radiant floors, the boiler problems we see most are:',
    localFaqs: [
      { q: 'Does my Mount Lookout home with radiant floor heat need a boiler tech or a furnace tech?', a: 'A boiler tech. Radiant floor systems run on heated water from a boiler, so service, repairs, and replacement are all boiler work.' },
      { q: 'How often does a radiant floor system in a Mount Lookout home need service?', a: 'Once a year, like any boiler. The 60 to 90 minute visit covers the boiler, pressure, and controls, plus the mixing valve and circulators that keep floor water cooler than the roughly 140°F a boiler usually makes. In Mount Lookout homes with radiant floors, those parts are where most problems start, so we check them every time.' },
    ],
  },
  'columbia-tusculum': {
    intro: 'How old is the boiler under your Painted Lady? In Columbia-Tusculum, Cincinnati’s oldest neighborhood, restored Victorian homes near the river often still heat with radiators and an aging boiler. We repair, maintain, and replace boilers here, including in basements that take on water, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, and is known for its colorful Painted Ladies, the restored Victorian homes on the east side near the Ohio River. Homes of that era often heat with radiators fed by a steam or hot water boiler, and even well-restored houses sometimes keep an older cast-iron unit running because the radiators work well and nobody wants to disturb them. That is often the right instinct, as long as the boiler is serviced every year.',
      'Two things shape boiler work here. The age of the homes means original piping, radiator valves that stick, and boilers with decades of wear. The low riverside ground means high water can reach the basement, and a boiler that has been wet needs an inspection before it is fired again. We handle both, plus yearly service. When it is time, we replace the old boiler with a high-efficiency model sized to the house and connect it to the existing radiators, so the restored rooms upstairs stay untouched.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the boiler problems we see most are:',
    localFaqs: [
      { q: 'Can I keep the original radiators in my Columbia-Tusculum Victorian if I replace the boiler?', a: 'Yes. Old cast-iron radiators in good shape can stay, and we connect the new boiler to them and the existing piping.' },
      { q: 'The old boiler in my Columbia-Tusculum Victorian is huge. How do you get it out without damaging the house?', a: 'Old cast-iron boilers are usually taken apart in the basement and carried out in sections, which keeps the weight off narrow stairs and original trim. The high-efficiency replacement is much smaller and comes in the same way. In Columbia-Tusculum’s restored Victorians, we cover floors and woodwork along the path before any of that starts.' },
    ],
  },
  'mount-washington': {
    intro: 'Is a boiler even your problem in Mount Washington? Most homes along Beechmont Avenue heat with a furnace, but if yours has radiators or hot water baseboard, it is. We repair, maintain, and replace boilers in the neighborhood’s early-1900s homes and any others running on hot water heat. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Most of those homes, especially the mid-century ones, heat with forced-air furnaces, and if that is your setup, our furnace team is the right call rather than a boiler visit. Boilers show up mainly in the older early-1900s houses, where radiators were original, and in homes with hot water baseboard heat.',
      'In those homes, the boiler is often a long-running cast-iron unit or a replacement that has been in place a while. Common calls are pressure that keeps dropping, a baseboard loop that will not heat, a circulator that hums but does not move water, and a relief valve dripping onto the basement floor. Yearly service takes 60 to 90 minutes and catches most of these early. When a boiler is done, we replace it with a high-efficiency model sized to the house.',
    ],
    commonIntro: 'In the Mount Washington homes that heat with radiators or hot water baseboard, the boiler problems we see most are:',
    localFaqs: [
      { q: 'The relief valve on my Mount Washington boiler is dripping. Is that dangerous?', a: 'It is a warning sign, not usually an emergency. A dripping relief valve often means system pressure is running high or the valve is worn, so have it checked soon rather than capping it or ignoring it.' },
      { q: 'Does turning the thermostat down at night make sense with the boiler in my Mount Washington house?', a: 'A modest setback works, but a house with cast-iron radiators warms back up more slowly than one with a furnace, so start the heat earlier in the morning. Big overnight drops can leave rooms cold at breakfast. In Mount Washington’s early-1900s radiator homes, a smaller setback usually feels better and still cuts run time.' },
    ],
  },
  'madisonville': {
    intro: 'Pilot keeps going out on the old boiler in your Madisonville house? Many early-1900s homes along Madison Road and Whetsel Avenue still heat with radiators, and a pilot or igniter fault is one of the more common reasons they go cold. We repair, maintain, and replace boilers here. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses often heat with a hot water or steam boiler and radiators, sometimes still on a standing-pilot cast-iron unit. The newer infill homes are far more likely to run forced-air furnaces or heat pumps, and for those, a furnace or heat pump tech is the better call.',
      'In the older homes, a boiler that shuts down usually does so for a short list of reasons: a worn thermocouple or igniter, low water pressure, a failed circulator, or a lockout after repeated failed starts. Most of those are repairs, not replacements. Owners renovating an older house often ask about swapping the boiler for a high-efficiency one while the work is underway, which is a good time to size the new unit to the house as it will be once the renovation is done.',
    ],
    commonIntro: 'In Madisonville’s early-1900s homes that still heat with radiators, the boiler problems we see most are:',
    localFaqs: [
      { q: 'I’m renovating an older Madisonville house. Should I replace the boiler now?', a: 'If it is near the end of its life, yes. Replacing it during the renovation lets us size a high-efficiency boiler to the finished house and route any new piping before walls are closed.' },
      { q: 'Should I have a carbon monoxide alarm with the gas boiler in my older Madisonville house?', a: 'Yes. Any gas boiler can put out carbon monoxide if the burner or venting has a problem, and you can’t smell it. Put alarms near the bedrooms and the basement, and if you ever smell gas, leave and call 911 or the gas utility from outside. Our annual service in Madisonville includes checking the venting.' },
    ],
  },
  'pleasant-ridge': {
    intro: 'One boiler, two units, and both tenants calling? Pleasant Ridge’s classic brick two-families along Montgomery Road often run on boilers, and early-1900s single-family homes here often heat with radiators too. We repair, maintain, and replace boilers across the neighborhood, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Housing of that age often heats with radiators fed by a hot water or steam boiler. In a two-family, the upstairs and downstairs may each have their own boiler, or one boiler may heat both, and which one you have changes how a breakdown plays out. Either way, the equipment is often an aging cast-iron boiler.',
      'With a shared boiler, one failure leaves both units cold, and the owner hears about it twice. Separate boilers mean twice the equipment to service. Either way, the common faults are the same: low pressure, air in the radiators, a failed circulator, and aging cast-iron sections that start to leak. We handle repairs, annual service for both units, and replacement with high-efficiency boilers sized to each unit or to the whole building, depending on how it is piped.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and brick two-families, the boiler problems we see most are:',
    localFaqs: [
      { q: 'Should each unit in my Pleasant Ridge two-family have its own boiler?', a: 'Not necessarily. One right-sized boiler with separate zones can heat both units well; separate boilers make sense when you want each unit fully independent, and we will lay out both options.' },
      { q: 'My Pleasant Ridge tenant upstairs has no heat, but my downstairs unit is fine. How, with one boiler?', a: 'If the building is zoned, each floor has its own thermostat and zone valve or circulator, and one of those can fail while the boiler keeps running. Check that the upstairs thermostat is calling for heat and has working batteries, then call us. In Pleasant Ridge two-families, a failed zone valve is a common, fixable no-heat call.' },
    ],
  },
  'westwood': {
    intro: 'Radiators, baseboard, or vents in your Westwood home? Cincinnati’s largest neighborhood has all three, from historic homes near Westwood Town Hall to mid-century streets off Harrison Avenue. For the homes heated by a boiler, we repair, maintain, and replace it, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. That range means heating varies house to house. The historic and early-1900s homes often heat with a hot water or steam boiler and radiators, while most mid-century houses run forced-air furnaces. Radiators or baseboard mean a boiler; vents mean a furnace.',
      'If your home has vents, a furnace tech is the right call. If it has radiators or hot water baseboard, the boiler behind them is often an older cast-iron unit, and the problems we see are the age-related ones: pressure that will not hold, radiators that need bleeding, circulators wearing out, and slow leaks at old valves. A well-maintained boiler lasts 15 to 25 years, and annual service is what gets it there. When replacement comes, we size a high-efficiency boiler to the house.',
    ],
    commonIntro: 'In Westwood’s historic and early-1900s homes that heat with radiators or baseboard, the boiler problems we see most are:',
    localFaqs: [
      { q: 'My Westwood home’s boiler is over 25 years old. Should I replace it before winter?', a: 'If it is showing problems, plan it now. A well-maintained boiler lasts 15 to 25 years, so an older one that is losing pressure, leaking, or locking out is better replaced on your schedule than on a cold night.' },
      { q: 'My Westwood radiators get hot at the top but stay cold at the bottom. What causes that?', a: 'Usually sludge, the rust and sediment that settles in the bottom of radiators in older hot water systems. Bleeding won’t fix it, but flushing the system or the affected radiators will. In Westwood’s early-1900s homes, where the piping has been running for decades, we check the water condition during annual service.' },
    ],
  },
  'norwood': {
    intro: 'Upstairs flat warm, downstairs cold? In Norwood’s dense grid of early-1900s homes and brick two-families around Surrey Square and Montgomery Road, uneven heat from an old boiler is a common complaint. We repair, maintain, and replace boilers across Norwood, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. Homes from that era were often heated with radiators fed by a hot water or steam boiler, and while many have since been converted to forced-air furnaces, some older homes and two-families still run on a boiler in the basement.',
      'In a two-family, one boiler heating both floors is common, and heat tends to rise, so the upstairs unit runs warm while the downstairs lags, or the reverse when air is trapped up top. Balancing radiators, bleeding air, and adding zones where the piping allows fixes most of it. On small, tightly packed lots, the boiler room is often cramped, which makes a compact high-efficiency replacement a good fit when an old cast-iron unit is done. Yearly service keeps a shared boiler from becoming a no-heat call for two households.',
    ],
    commonIntro: 'In Norwood’s dense early-1900s homes and two-families that still heat with radiators, the boiler problems we see most are:',
    localFaqs: [
      { q: 'Is it worth converting my Norwood two-family from a boiler to furnaces?', a: 'Usually not, unless you also want central air. Adding ductwork to two floors of an early-1900s house is a big job, and a new high-efficiency boiler connected to the existing radiators is often the simpler path.' },
      { q: 'How often should I check the water level on the steam boiler in my Norwood house?', a: 'Glance at the sight glass regularly through the heating season, since a steam boiler loses some water as it runs. The level should sit around the middle of the glass; if it drops fast or needs frequent refilling, there’s likely a leak in the piping or a vent. In Norwood’s early-1900s homes and two-families, we track those leaks down.' },
    ],
  },
  'blue-ash': {
    intro: 'Looking for a boiler tech in Blue Ash? Check first, because most homes here heat with forced-air furnaces. If your mid-century house or newer build does run on a boiler, for radiant floors or hot water baseboard, we repair, maintain, and replace it, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Most homes here were built with forced-air furnaces and central air, so boilers are less common than in the older city neighborhoods. If your house has floor or ceiling vents, you need a furnace tech, and our HVAC team can help, but a boiler visit will not fix it.',
      'Boilers do turn up in Blue Ash, mostly in homes with hot water baseboard heat and in some custom or newer builds with radiant floor heat, often in a basement slab, kitchen, or bathroom. Those systems run cooler water than radiators and need the right controls. Some newer homes also use a combi boiler for both heat and hot water. We service all of them, fix leaks, pressure faults, and lockouts, and replace older units with high-efficiency boilers sized to the house.',
    ],
    commonIntro: 'In the Blue Ash homes that do heat with a boiler, through baseboard or radiant floors, the problems we see most are:',
    localFaqs: [
      { q: 'My Blue Ash home has heated floors. Does that mean I have a boiler?', a: 'If the floors are heated by water tubing, a boiler usually supplies that heat; if they are electric mats, there is no boiler involved. We can tell which you have in one visit.' },
    ],
  },
  'montgomery': {
    intro: 'Old boiler in a historic Montgomery building, or radiant heat in a newer home? Both turn up here, even though most houses around Montgomery Road run forced-air furnaces. We repair, maintain, and replace boilers in the historic district and the neighborhoods around it, with 24/7 no-heat service. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is a northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. Heating follows that split. Most of the established and newer houses run forced-air furnaces, and if yours has vents, a furnace tech is the call. Boilers are more likely in the 19th-century structures of the historic core, where radiators fed by a steam or hot water boiler may still be in service.',
      'The other place we find boilers in Montgomery is in custom homes with radiant floor heat or hot water baseboard, where a modern high-efficiency or combi boiler does the work. Old or new, the faults are familiar: low pressure, air in the lines, a failed circulator, and lockouts after repeated failed ignition. We handle repairs and annual service, which takes 60 to 90 minutes. When a historic building’s boiler reaches the end, we replace it with a high-efficiency unit sized to the building and keep the existing radiators where they are sound.',
    ],
    commonIntro: 'In Montgomery’s historic buildings and custom homes that heat with a boiler, the problems we see most are:',
    localFaqs: [
      { q: 'Can a historic Montgomery building keep radiator heat with a new boiler?', a: 'Yes. We size a high-efficiency boiler to the building and connect it to the existing radiators and piping, so the historic interior stays as it is.' },
      { q: 'The boiler in my 19th-century Montgomery building seems huge for the space. Is it oversized?', a: 'It may be. Old boilers were often sized generously, and the building may have had insulation or window upgrades since. A properly sized high-efficiency boiler, around 90% efficient, cycles less and wastes less fuel. Before replacing one in Montgomery’s historic district, we work out the building’s actual heat loss rather than matching the old unit’s size.' },
    ],
  },
};
