export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  sedamsville: {
    intro:
      'Standing water in a Sedamsville home? We bring pumps and extractors to the hillside streets above River Road, shut the source down, and pull the water out the same day. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) climbs the hillside above River Road in frame houses that date to the late 1800s and early 1900s. The supply lines in those homes are old galvanized, and when one splits it does not announce itself — it runs behind a wall or under a first floor for hours before the water shows at the base of the stairs, so the volume standing in the lower level is well past a mop by the time anyone calls.',
      'Our work here is the first hours only: pump the standing water off the floor, then pull what has soaked into carpet, pad, and the old plank subfloor before it wicks up into the plaster. Century-old woodwork survives water but does not survive water left sitting. We get it out and set air movers so drying can start, then hand that part off.',
    ],
    commonIntro:
      "In Sedamsville's century-old hillside homes above River Road, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'A pipe let go while we were out and our Sedamsville basement is full. What do we do before you arrive?',
        a: 'Shut the water off at the main first, because with old galvanized the failure rarely stops on its own. Then kill power to the flooded level at the panel, and never stand in water to reach a breaker — if the panel is in the wet area, leave it and tell us when we arrive. Lift anything with fabric or paper off the floor. We handle the pumping and extraction from there.',
      },
    ],
  },
  'sayler-park': {
    intro:
      "Water rising in a Sayler Park basement after a storm? We reach Cincinnati's westernmost neighborhood the same day with pumps and extraction gear and get the standing water out. Call (513) 586-5107.",
    relevance: [
      'Sayler Park (ZIP 45233), the old village of Home City strung along the river past Riverside, sits partly in the Ohio River floodplain. When the river is high and the ground is saturated, the low riverfront streets take on water through the basement floor and walls, and a storm can put several inches across a lower level before it crests.',
      'Storm water in a basement is often the contaminated kind, so our extraction here is more than pumping. We pump the standing water, then lift the saturated pad and porous material that cannot be dried back to clean, and extract what soaked into the subfloor. We photograph the source and take readings for the claim, get drying equipment running, and hand off.',
    ],
    commonIntro:
      "In Sayler Park's low-lying riverfront homes, the storm-driven extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'The river came up and our Sayler Park basement flooded. Is that an extraction job or something else?',
        a: 'The first hours are extraction: getting the standing water out fast so it stops soaking into everything below the waterline. Because river and storm water is treated as contaminated, the saturated pad and soft material come out rather than get dried in place. Once the water is out and the wet material is removed, drying takes over as a separate step.',
      },
    ],
  },
  riverside: {
    intro:
      'Sewage or drain water coming up a floor drain in Riverside? We arrive the same day with pumps and extractors for the low homes along River Road and get the contaminated water out. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of bottomland between the hillside and the Ohio River along River Road. On ground that low, heavy rain overwhelms the drains and pushes water back up through basement floor drains — and once it comes up that way it is contaminated, not clean.',
      'A backup changes the job. We pump the standing water, but the porous material it touched — pad, the bottom of the drywall, anything soft on the floor — comes up and out rather than getting dried in place, because contaminated water in those materials is a health problem, not a drying one. We extract the hard surfaces, set drying, and document the source for your claim.',
    ],
    commonIntro:
      "On Riverside's low River Road lots, the backup and standing-water calls we get most often are:",
    localFaqs: [
      {
        q: 'Water backed up through the floor drain in my Riverside basement. Can you just dry it out?',
        a: 'No, and that matters. Drain and sewer backup is contaminated, so the porous material it reached cannot simply be dried — it has to be extracted and the soft material removed. We pump the standing water, take out the pad and anything else that soaked it up, extract the hard surfaces, and only then set drying on what is left.',
      },
    ],
  },
  'east-price-hill': {
    intro:
      'A leak upstairs flooding the unit below in East Price Hill? We reach the two-families around Warsaw Avenue and the Incline District the same day and pull the water out of both levels. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) is packed with dense early-1900s two- and three-family frame homes on tight lots around Warsaw Avenue and the Incline District. In a stacked building, water from a failure on an upper floor does not stay upstairs — it finds the ceiling below, runs down the wall cavity, and stands on the floor of the unit underneath, so one failure becomes two flooded levels.',
      'We pump and extract on every level the water reached, not just where it started, because a dry-looking lower unit with a soaked ceiling above it is still a wet building. Extraction from the ceiling cavity and the floor below in the first hours is what saves the drywall and the framing between the units. Then drying equipment goes in.',
    ],
    commonIntro:
      "In East Price Hill's stacked early-1900s two- and three-families, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'The leak was in the upstairs unit but it is my ceiling and floor that flooded in East Price Hill. Will you extract my side?',
        a: 'Yes. In these stacked homes the water travels down, so the lower unit often takes the worst of it. We extract wherever the water reached, including the cavity between the two units, provided we have access and authorisation for each side. We also document where it started and which way it ran, which is useful when two households and two insurers are involved.',
      },
    ],
  },
  'west-price-hill': {
    intro:
      'Water heater let go and emptied across a West Price Hill basement? We reach homes along Glenway Avenue the same day with pumps and extractors. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) runs out along Glenway Avenue toward Covedale in 1920s-through-1950s single-family homes, and in houses that age the water heater usually sits in a finished or half-finished basement. When a tank fails it does not drip — it dumps forty or more gallons at once and keeps feeding from the supply until someone shuts the valve, so the floor is covered before anyone hears it.',
      'A tank failure is clean water, which means the flooring and drywall are savable if we move fast. We pump the standing water, extract it back out of the carpet and pad, and pull it from the subfloor before it wicks into the base of the walls. The first hours decide whether that finished basement dries or gets torn out.',
    ],
    commonIntro:
      "Across West Price Hill's mid-century homes along Glenway Avenue, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'Our water heater flooded the West Price Hill basement. What should we do before you get here?',
        a: 'Shut the supply valve on top of the heater, or the main if you cannot reach it, so the tank stops refilling and dumping. Kill power to the basement at the panel, and do not stand in water to reach a breaker. Lift anything soft off the floor. Then leave the water for us — a household vacuum cannot pull it back out of the pad and subfloor, which is where most of it has gone.',
      },
    ],
  },
  'lower-price-hill': {
    intro:
      'Standing water in a Lower Price Hill rowhouse after heavy rain? We reach the historic blocks around State Avenue the same day and pump the water out. Call (513) 586-5107.',
    relevance: [
      "Lower Price Hill (ZIP 45204) sits down in the Mill Creek valley near the industrial bottoms around State Avenue, in one of Cincinnati's most intact stretches of 19th-century Italianate brick rowhouses. That low valley ground is the problem: when Mill Creek and the river run high, water pushes into the rowhouse basements, and the historic lower levels take it first.",
      'These are old buildings with original features worth protecting, so we pump fast and extract from the floor and any porous material before the water climbs the brick and the plaster. Valley storm water can be contaminated, so saturated pad and soft material come out rather than dry in place. We extract, document, and set drying.',
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century valley rowhouses, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'There is an inch of water in our Lower Price Hill basement. Is that a shop-vac job or do we need you?',
        a: 'If it is a small amount of clean water on a sealed floor and you catch it within the hour, a shop vac and a fan will finish it and you do not need us. What a shop vac cannot do is pull water back out of pad, subfloor, or the base of a brick wall, which is where valley storm water goes. If it spread past one spot, reached porous material, or came up through a drain, it needs extraction equipment.',
      },
    ],
  },
  'over-the-rhine': {
    intro:
      'A pipe failed upstairs and flooded the unit below in Over-the-Rhine? We reach the converted buildings around Vine Street and Findlay Market the same day and extract every level the water reached. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) is block after block of 1850s-through-1880s Italianate buildings, most now split into apartments and condos on shared stacks. When a line lets go two floors up, the water travels down through the old floors and stands in units that had nothing to do with the failure, so a single break can wet three units in one column.',
      'Extraction in a converted OTR building means working the whole vertical path, not one apartment. We pump and extract where the water is standing and pull it from the ceiling and floor cavities between units before it soaks the century-old joists. Coordinating access across units in the first hours is the difference between drying and rebuilding.',
    ],
    commonIntro:
      "In Over-the-Rhine's converted 19th-century multi-units, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'A unit two floors up failed and it is running into mine near Findlay Market. Can you extract without shutting down the whole building?',
        a: 'Yes. We isolate the source and extract on each floor the water reached, and we do not need to shut water to the entire building to do it — only to the affected line. Getting access to each unit in the column is the main variable, so tell us on the phone how many floors are involved and we will bring the pumps and hose length to match.',
      },
    ],
  },
  downtown: {
    intro:
      'Standing water in a downtown condo or loft? We reach the central business district the same day, shut the source, and extract before the water travels further down the building. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos with converted early-1900s loft buildings between the river and Over-the-Rhine. In a tower, a burst supply line on a vacant floor or an unoccupied unit can run unnoticed for hours, and the water works down through the stack, so by the time it is found several floors are involved.',
      'We coordinate building access and shutoffs, pump the standing water, and extract from carpet, pad, and subfloor on each affected floor before it reaches the ceiling below. Speed here is about stopping the vertical spread — the sooner the water is out of one floor, the fewer floors join the job. Then drying equipment goes in.',
    ],
    commonIntro:
      "In downtown's towers and converted lofts, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'Can you work in a downtown high-rise where the water started several floors up?',
        a: 'Yes. We work in towers and loft conversions regularly and coordinate access and shutoffs with building staff so we can reach each affected floor. The priority is extracting the upper floors fast so the water stops feeding the ones below. We document the path and the readings for the association and the insurers.',
      },
    ],
  },
  'west-end': {
    intro:
      'Drain water backing up into a West End basement? We reach the neighborhood around TQL Stadium and Linn Street the same day with a submersible pump and extractors and get the contaminated water out. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) sits on low ground near the Mill Creek basin just west of downtown, near TQL Stadium and Linn Street, in historic Italianate rowhouses and brick homes. On ground this low a heavy rain overwhelms the sewers and pushes water back up through the basement floor drains, and that backup is contaminated from the moment it arrives.',
      'Because it is contaminated, the job is pump-and-remove rather than dry-in-place. We drop a submersible pump for the standing water, then lift the pad and the porous material the water reached, extract the hard surfaces back to clean, and take the soft material out. We document the source and the readings for the claim and set drying on what remains.',
    ],
    commonIntro:
      "In the West End's low-lying historic homes near Mill Creek, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'Water came up the floor drain in my West End basement — can it just be dried?',
        a: 'No. Drain and sewer backup is contaminated, so the pad and porous material it reached have to be extracted and removed, not dried in place. We pump the standing water, take out the soft material that soaked it, extract the hard surfaces back to clean, and only then set drying on what is left.',
      },
    ],
  },
  'mount-adams': {
    intro:
      'Overflowed tub or toilet flooding a Mount Adams rowhouse? We bring pumps and extractors up the steep streets the same day and get the water out. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is dense hilltop rowhouses and townhomes on steep, narrow streets above Eden Park. An overflowing tub or toilet on an upper floor of a tall, skinny rowhouse sends water down through every level below it, so a fixture that ran over upstairs becomes standing water two or three floors down.',
      'The steep streets and tight parking are the local wrinkle — we ask about access on the phone so the right hose length comes off the truck the first time rather than the second. Once on site we pump and extract on every floor the water reached, pulling it from the stair treads, the floors, and the subfloor before it soaks the framing. Then drying goes in.',
    ],
    commonIntro:
      "In Mount Adams' steep, multi-level rowhouses, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'Can you get extraction equipment to a home on the steep Mount Adams streets?',
        a: 'Yes. We work the hill regularly and come prepared for the narrow, steep streets and tight parking. The one thing that helps is telling us on the phone how the house is accessed and how many floors the water reached, so the pump and the hose length are right on the first trip up.',
      },
    ],
  },
  'mount-auburn': {
    intro:
      'A burst line flooding a subdivided Mount Auburn house? We reach the hilltop just north of downtown the same day and extract every unit the water reached. Call (513) 586-5107.',
    relevance: [
      "Mount Auburn (ZIP 45219) is one of Cincinnati's oldest hilltop neighborhoods, full of grand 19th-century homes and mansions now divided into apartments. In a subdivided house, one burst supply line on an upper floor runs down through the old grand staircase and ceilings, so a single failure can put standing water in several units at once.",
      'We pump and extract across every unit the water touched, not just the one that failed, because a wet ceiling over a dry-looking apartment is still a wet building. Pulling the water from the old plaster and the wide-plank subfloor in the first hours is what keeps the original detail these homes are known for. Then we set drying.',
    ],
    commonIntro:
      "In Mount Auburn's grand, subdivided 19th-century homes, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'A pipe burst in the upstairs apartment and now several units in our Mount Auburn house are wet. Do you extract all of them?',
        a: 'Yes, where we have access and authorisation for each unit. In these subdivided houses the water runs down the old stairwells and ceilings, so pumping only the top unit leaves the ones below still holding water. We extract every level the water reached and document the path for whoever manages the building.',
      },
    ],
  },
  clifton: {
    intro:
      'Water heater emptied into a Clifton basement? We reach the homes around Ludlow Avenue and the Gaslight District the same day with pumps and extractors. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is large Victorian and early-1900s houses on tree-lined streets near UC, many of them now rentals around the Ludlow Avenue Gaslight District. The water heaters in these big old houses sit in deep basements, and when a tank fails over a weekend in a rental it can empty and keep feeding for hours with no one home, covering a large finished floor before it is found.',
      'Tank water is clean, so the flooring and anything stored down there is savable if we move quickly. We pump the standing water, extract it from carpet, pad, and subfloor, and pull it back from the base of the walls before it wicks. The first hours decide how much of that big basement dries rather than comes out. Then drying goes in.',
    ],
    commonIntro:
      "In Clifton's large Victorian homes and campus rentals, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'A water heater flooded a Clifton rental while it was empty. Is it too late to save the basement?',
        a: 'It depends entirely on how long it sat. Clean tank water that is found and extracted within the first hours usually leaves the flooring and drywall savable. The same water sitting through a full weekend has been in the pad and subfloor for days, which is a removal conversation rather than a drying one. Call while it is still standing, not after it has gone quiet.',
      },
    ],
  },
  corryville: {
    intro:
      'Overflowed toilet or appliance line in a Corryville rental? We reach the Short Vine area near UC the same day and extract before it spreads to the unit below. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) is dense early-1900s housing and student rentals packed around the Short Vine corridor at the edge of UC. Overflowing toilets, washing-machine lines, and dishwasher connections are constant in heavily used rentals, and in buildings that share walls and stacks the overflow from one unit runs into the next before anyone reports it.',
      'We pump and extract fast in the unit that flooded and check the one below and beside it, because in this dense housing the water rarely stops at one apartment. Pulling it from carpet, pad, and subfloor in the first hours is what keeps a small overflow from becoming a multi-unit tear-out. Then drying goes in.',
    ],
    commonIntro:
      "In Corryville's dense student rentals near campus, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'How quickly can you reach a rental near Short Vine in Corryville?',
        a: 'Corryville is central and close to our usual routes, so it is one of the faster areas for us to reach, often within a couple of hours. Tell us whether the water has already reached the unit below, because in these shared-stack rentals that decides how many apartments we are extracting and what we bring.',
      },
    ],
  },
  northside: {
    intro:
      'Storm water standing in a Northside basement? We reach the homes around Hamilton Avenue and the Mill Creek valley the same day and pump it out. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) runs along Hamilton Avenue down toward the low ground of the Mill Creek valley. On the streets nearest the creek, a heavy rain saturates the ground and pushes water into the basements, and a hard storm can put several inches across a lower level before it drains.',
      'Storm water is often contaminated, so our extraction is pump-then-remove: we pump the standing water, lift the saturated pad and soft material rather than dry it in place, and extract the hard surfaces back to clean. We take photos and readings for the claim, get air movers running, and hand off to drying.',
    ],
    commonIntro:
      "In Northside's low-lying homes near the Mill Creek valley, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'My Northside basement floods every hard rain near Mill Creek. Is extraction the whole fix?',
        a: 'Extraction is the emergency part — getting the standing water out fast so it stops damaging the floor and walls. It is not the long-term fix for why the water gets in, which is a separate drainage and plumbing question. On the day of the flood, though, the priority is pumping and extracting before the pad and subfloor are soaked through.',
      },
    ],
  },
  'college-hill': {
    intro:
      'A corroded supply line let go in a College Hill basement? We reach homes along Hamilton Avenue and Belmont the same day with pumps and extractors and pull the water out. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a mix of large early-1900s houses and mid-century homes on the northwest hilltop along Hamilton Avenue and Belmont, and the galvanized supply lines in the older ones have been closing up with corrosion for decades. When one finally splits behind a wall or under a first floor, clean water runs unseen for hours and spreads across the lower level before anyone finds it.',
      'Our work here is the first hours only. We pump the standing water, extract it from the carpet, pad, and subfloor, and pull it back from the base of the walls before it wicks up the drywall. Once the water is out we set air movers and hand the drying off — the extraction is what decides whether that lower level dries or gets torn out.',
    ],
    commonIntro:
      "Across College Hill's older and mid-century homes, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'After you extract the water from my College Hill basement, do you handle the drying too?',
        a: 'We get the standing water out, extract the flooring and subfloor, and set the air movers before we leave, so drying starts the same visit. The days of drying and any repairs after are a separate stage we hand off — our part is the fast extraction in the first hours that keeps the flooring and drywall savable.',
      },
    ],
  },
  'walnut-hills': {
    intro:
      'A burst line flooding a Walnut Hills apartment building? We reach the homes around Peebles Corner and McMillan Street the same day and extract every unit the water reached. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is grand 19th-century homes and apartment buildings around the Peebles Corner district and McMillan Street, much of it split into units on shared stacks. One burst line on an upper floor runs down through the old ceilings and stands in the apartments below, so a single failure often means several wet units.',
      'We work the whole vertical path — pumping and extracting on each floor the water reached, and pulling it from the ceiling and floor cavities between units before it soaks the century-old framing. Coordinating access across apartments in the first hours is what keeps the damage contained. Then drying equipment goes in.',
    ],
    commonIntro:
      "In Walnut Hills' historic homes and apartment buildings, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'Do you extract in the older apartment buildings around Peebles Corner without shutting off the whole building?',
        a: 'Yes. We isolate the failed line and extract on each floor the water reached, and we do not need to shut water to the entire building — only to the affected line. The main variable is getting access to each unit in the column, so tell us how many floors are wet when you call.',
      },
    ],
  },
  'east-walnut-hills': {
    intro:
      'A supply line let go unnoticed in an East Walnut Hills home? We reach the streets around Woodburn Avenue and DeSales Corner the same day, shut it off, and extract. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is stately early-1900s houses on tree-lined streets around Woodburn Avenue and DeSales Corner, most with finished lower levels and original woodwork. A corroded supply line in a wall or under a first floor can run for hours behind the finish before the water shows, so the volume standing in the lower level is well past a mop by the time it is found.',
      'The original oak and plaster in these homes survive water but not standing water, so our first hours are about getting it off the floor and out of the pad and subfloor before it wicks into the walls. We pump, extract from the porous material, and pull what we can from below, then set drying and hand off.',
    ],
    commonIntro:
      "In East Walnut Hills' stately early-1900s homes, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'Water is sitting on the original floors in my East Walnut Hills home. Does extraction actually save them?',
        a: 'Yes, and it is the single thing that decides whether they survive. Wood of this era fails from staying wet, not from getting wet, and most of the water is not on top of the boards but in the seams and the subfloor beneath. We extract through the surface and pull what we can from below before drying equipment goes in. Do not put a household heater on it — fast drying on one side cups the boards worse than the water did.',
      },
    ],
  },
  avondale: {
    intro:
      'Overflowed appliance line or fixture flooding an Avondale apartment? We reach the neighborhood near the hospitals and the zoo the same day and extract before it spreads. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) is dense, older housing near the uptown hospitals and the Cincinnati Zoo, much of it rental apartments under heavy use. Washing-machine lines, dishwashers, and overflowing fixtures fail often in buildings that busy, and in shared-wall housing the overflow from one unit runs into the next before it is reported.',
      'We pump and extract fast in the flooded unit and check the ones below and beside it, because the water rarely stays put in this kind of housing. Pulling it from carpet, pad, and subfloor in the first hours is what keeps one overflow from becoming a several-unit job. Then drying goes in.',
    ],
    commonIntro:
      "In Avondale's dense apartment buildings near the hospitals, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Avondale near the hospitals?',
        a: 'Avondale is in the central uptown area, so it is a fast reach for us, often within a couple of hours. Tell us on the phone whether the overflow has already reached the unit below, because in this shared-wall housing that decides how many apartments we are extracting and what we bring.',
      },
    ],
  },
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
  oakley: {
    intro:
      'Water heater emptied into an Oakley basement? We reach the homes around Oakley Square and Madison Road the same day with pumps and a truck-mount extractor. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is streets of early-1900s bungalows and brick homes around Oakley Square and Madison Road, most with the water heater in a basement that has been at least partly finished over the years. An aging tank fails all at once — it splits, empties forty or more gallons, and keeps feeding from the supply until the valve is shut, covering the floor before anyone hears it.',
      'Tank water is clean, so a fast response saves the flooring and whatever is stored down there. We pump the standing water, run the truck-mount extractor through the carpet and pad, and pull it back from the wall base before it wicks up the drywall. The first hours decide whether the basement dries or comes out.',
    ],
    commonIntro:
      "Across Oakley's early-1900s bungalows and brick homes, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'The water heater let go in my Oakley basement — can I handle it with a shop vac?',
        a: 'If it stayed on sealed floor and you catch it within the hour, a shop vac and a fan will finish it, and we will tell you so. But a full tank usually covers carpet and reaches the pad and subfloor, and a household vacuum cannot pull it back out of those — that is where most of the forty-plus gallons has gone by the time you find it.',
      },
    ],
  },
  'mount-lookout': {
    intro:
      'Storm water in a Mount Lookout basement? We reach the homes around Mount Lookout Square and Ault Park the same day and pump the standing water out. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is older hilltop homes on hilly streets around Mount Lookout Square and near Ault Park. The grade is the local factor: heavy rain runs downhill toward the lower homes and overwhelms basement drains, so a hard storm can push water up through the floor and stand it across a lower level.',
      'Storm water can be contaminated, so we pump the standing water and lift the saturated pad and soft material rather than dry it in place, then extract the hard surfaces back to clean. We document the source and readings for the claim, set air movers, and hand off to drying.',
    ],
    commonIntro:
      "In Mount Lookout's older hilltop homes, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'The hill sends water into my Mount Lookout basement in heavy rain. Can you get it out same day?',
        a: 'Yes. Mount Lookout is well within our east-side area and we aim for same-day arrival. Because storm water that comes up through a basement is treated as contaminated, the saturated pad and soft material come out rather than get dried in place. We pump, extract, remove what cannot be saved, and set drying on the rest.',
      },
    ],
  },
  'columbia-tusculum': {
    intro:
      "Drain water backing up into a Columbia-Tusculum basement when the river is high? We reach Cincinnati's oldest neighborhood near the river the same day and extract the standing water. Call (513) 586-5107.",
    relevance: [
      "Columbia-Tusculum (ZIP 45226) is Cincinnati's oldest neighborhood, its Painted Lady Victorians standing on low ground near the Ohio. When the river runs high and a heavy rain overwhelms the sewers, water pushes back up through the basement floor drains, and that backup is contaminated the moment it arrives.",
      'A backup is a removal job, not just a pump job, and these homes have original features worth protecting. We pump the standing water, lift the pad and porous material it reached rather than dry it, and extract the hard surfaces back to clean while working carefully around the historic woodwork and trim. We document the source and set drying on what remains.',
    ],
    commonIntro:
      "In Columbia-Tusculum's historic riverside Victorians, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'Will you extract carefully around the original features in a Columbia-Tusculum Painted Lady?',
        a: 'Yes. We work these older and Painted Lady homes regularly and pull the standing water out without tearing at original woodwork or trim any more than the water already has. Where the source is a contaminated backup the soft material it soaked has to come out, but the structure and the historic detail get dried, not demolished, wherever that is possible.',
      },
    ],
  },
  'mount-washington': {
    intro:
      'Water heater let go in a Mount Washington basement? We reach the homes along Beechmont Avenue the same day with pumps and extractors. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a settled mix of early-1900s through mid-century single-family homes strung along Beechmont Avenue. The water heaters in these houses are often at the end of their service life, and when a tank fails it dumps its full contents at once and keeps feeding from the supply until the valve is shut.',
      'Tank water is clean, so the flooring and drywall are savable with a fast response. We pump the standing water, extract it out of the carpet, pad, and subfloor, and pull it back from the wall base before it climbs. What decides whether that lower level dries rather than gets replaced is the first few hours, not the water itself. Then we set drying and hand off.',
    ],
    commonIntro:
      "Across Mount Washington's older and mid-century homes, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'The water heater flooded my Mount Washington basement — is it too late to save the floor?',
        a: 'It depends on how long it sat, not on how much came out. Clean tank water extracted from the carpet, pad, and subfloor within the first hours usually leaves the flooring and drywall savable; the same water left a day or two has wicked into the walls and becomes a tear-out. Call while it is still standing, not after it has gone quiet.',
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
  'pleasant-ridge': {
    intro:
      'A leak spreading between the halves of a Pleasant Ridge two-family? We reach the homes along Montgomery Road the same day and extract both units. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is tree-lined streets of early-1900s homes and classic Cincinnati brick two-families along Montgomery Road. In a two-family, water from a failure on one side runs along the shared wall cavity into the other half, so by the time it is noticed there are two units holding water instead of one.',
      'We pump and extract on both sides where the water travelled, not just where it started, because pumping one half while the other still holds water lets it come back through the shared wall. Pulling it from carpet, pad, and subfloor on both sides in the first hours is what keeps it a drying job. Then drying equipment goes in.',
    ],
    commonIntro:
      "In Pleasant Ridge's early-1900s homes and brick two-families, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'The water started on one side of our Pleasant Ridge two-family and ended up in the other. Will you pump both?',
        a: 'We will, if we have access and authorisation for each side, and it is usually the right call. Pumping one half while the other still holds water means it comes back through the shared wall. We photograph where it started, which way it ran, and take readings on both sides so the record exists for whoever controls each unit and their insurers.',
      },
    ],
  },
  westwood: {
    intro:
      "Drain water backing up into a Westwood basement? We reach Cincinnati's largest neighborhood along Harrison Avenue the same day and extract the standing water. Call (513) 586-5107.",
    relevance: [
      "Westwood (ZIP 45211) is the city's largest neighborhood by population, spread along Harrison Avenue near the Westwood Town Hall, with a lot of older housing on aging cast-iron drains. When a heavy rain overwhelms those old lines, water backs up through basement floor drains — and once it comes up that way it is contaminated, not clean.",
      'A backup is a removal job. We pump the standing water, lift the pad and porous material it reached rather than dry it, and extract the hard surfaces back to clean. We document the source and readings for the claim and set drying on what remains. The porous material has to go; the structure gets dried.',
    ],
    commonIntro:
      "Across Westwood's older homes along Harrison Avenue, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Westwood when a drain backs up?',
        a: 'Westwood is a large west-side neighborhood well within our service area, and we aim for same-day arrival along Harrison Avenue and beyond. Tell us it came up through a floor drain when you call, because a backup is contaminated and changes what we bring and how much of the soft material has to come out rather than dry.',
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
  'blue-ash': {
    intro:
      'Sump pump failed and the basement is filling in Blue Ash? We reach homes across the northeast-side city the same day and pump the standing water out. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is mid-century neighborhoods and newer subdivisions across the northeast side, and in a lot of these homes a sump pump is what keeps the finished basement dry. When that pump fails during a storm — a dead motor, a stuck float, a power cut — the water it should have moved rises through the pit and floods the lower level fast.',
      'We pump the standing water, then extract it from carpet, pad, and subfloor before it wicks up the finished walls, because a sump failure usually hits a basement that is fully finished. The first hours decide how much of that flooring and drywall survives. We set drying equipment and hand off.',
    ],
    commonIntro:
      "Across Blue Ash's mid-century homes and newer subdivisions, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'My sump pump died and there is water across the Blue Ash basement. Can I just run a shop vac?',
        a: 'On a small amount of clean water on a sealed floor caught within the hour, a shop vac and a fan will do it. But a failed sump usually leaves standing water across a finished basement, and a shop vac cannot pull it back out of carpet pad, subfloor, or the base of the drywall, which is where the volume goes. Once it spread past bare floor, it needs extraction equipment.',
      },
    ],
  },
  montgomery: {
    intro:
      'A burst supply line running through a Montgomery home? We reach homes around the historic district and Montgomery Road the same day with pumps and extractors and shut the source down. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city, from 19th-century buildings in the preserved historic district to decades-old subdivisions along Montgomery Road. The worn supply lines across that range give way without warning, and a burst line behind a wall or on an upper floor can put water down across a finished level before anyone is home to hear it.',
      'We pump the standing water, extract it from the carpet, pad, and subfloor, and pull it back from the wall base before it wicks. A licensed plumber is on the truck, so the burst line is shut off and capped at the source rather than left feeding the flood while we work. The first hours are what decide whether the finished level dries or gets torn out.',
    ],
    commonIntro:
      "Across Montgomery's historic and established homes, the extraction calls we get most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Montgomery, and what should I do first?',
        a: 'Montgomery is well within our northeast service area and we aim for same-day arrival around the historic district and Montgomery Road. Shut the water off at the main if you can reach it safely, kill power to the flooded level at the panel without standing in water, and lift anything soft off the floor. We bring the pumps and extractors.',
      },
    ],
  },
};
