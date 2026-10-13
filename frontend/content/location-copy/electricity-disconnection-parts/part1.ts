import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 1 — the west-side river neighborhoods, the basin, and the first of the
// hilltops. Angles here are about panel age, red tags, unpermitted work,
// vacancy and who can authorise a repair — not weather.
export const part1: Record<string, LocationServiceCopy> = {
  sedamsville: {
    intro:
      'Power disconnected at your Sedamsville home? Duke will not reconnect until the equipment you own is repaired and inspected. Same-day work above River Road. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is frame housing from the late 1800s and early 1900s climbing the hillside above River Road, and the electrical services in those houses are the reason disconnections here are rarely a surprise once someone looks properly. A house built before the war was given a service sized for a few lights and an iron. Many have been reworked once, decades ago, and plenty still run a fuse panel or a service well under what the house now draws.',
      'Equipment like that is what gets red-tagged. Not because anything dramatic happened, but because an inspector or a utility technician looked at exposed conductors, a corroded meter socket, or grounding that was never brought up to standard, and declined to energise it. The tag does not lift when the immediate hazard is tidied away. It lifts when the cause is corrected and an inspector signs it off, and on a house this age that usually means the service rather than one component.',
    ],
    commonIntro:
      "In Sedamsville's pre-war frame houses, many still on original or once-replaced services, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Sedamsville house still has a fuse panel and the power has been cut. Can you just fix the one fault?',
        a: 'Sometimes, but on a fuse panel it is worth knowing what you are buying. Parts are obsolete, the enclosure is as old as the parts, and an inspector looking at the service to clear a red tag will assess the whole assembly rather than the single fault. We price both a targeted repair and a properly sized replacement, because on a house of this age the second is frequently the cheaper answer over any span of years.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Power off at your Sayler Park home after high water? A submerged panel is replaced, not dried out. We handle the repair and the inspection. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) has low riverfront streets sitting in the Ohio River floodplain, and that produces a specific kind of disconnection that catches people out. Where water has reached a basement panel, the utility will not re-energise it, and no amount of drying changes that. Water gets behind the bus bars and into the breakers, and corrosion carries on invisibly long after the surface looks and feels dry.',
      'So the answer on a flooded service is replacement rather than restoration, and an inspector will be looking specifically for signs of submersion before the meter goes back in. That is worth understanding early, because homeowners frequently spend a week trying to get a panel dried and re-approved when the outcome was never in doubt. If yours has been under before, it is also the moment to ask whether it can be relocated higher rather than replaced in the same spot.',
    ],
    commonIntro:
      "On Sayler Park's floodplain streets, where water reaches basement panels, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Sayler Park panel was under water. Can it be dried out and re-approved?',
        a: 'No, and anyone offering to try is doing you a disservice. Water reaches the breakers and the bus behind the panel face, and corrosion continues after everything appears dry. Submerged panels get replaced, and an inspector will look for the signs before the utility reconnects. If yours sits low and has flooded before, ask us whether relocating it higher is practical while we are there.',
      },
    ],
  },

  riverside: {
    intro:
      'Electricity disconnected at your Riverside home? We repair the meter base, mast or panel, handle the inspection, and get you reconnected. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) sits on low Ohio River bottomland along River Road, and the recurring pattern here is a panel that has been under water more than once. Each time, the service is disconnected, the equipment is replaced, and the position it sits in stays exactly the same — so the next high water produces the same outcome. That cycle is expensive, and it is worth breaking rather than repeating.',
      'When we are called out for a disconnection on these streets, the first question is whether the panel can be moved rather than simply renewed. It is not always possible, because the service entrance position and the run to the meter constrain where a panel can go. Where it is possible, relocating it higher up the wall or into a different room turns a recurring replacement into a one-off. Where it is not, we say so plainly rather than quoting for something that will not work.',
    ],
    commonIntro:
      "On Riverside's low bottomland lots, where panels have often been replaced more than once, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'This is the second time my Riverside panel has been condemned. Can it be moved?',
        a: 'Sometimes, and it is the right question to ask during a replacement rather than after the next flood. What constrains it is the position of the service entrance and the length of the run to the meter — those cannot always be reworked economically. Where they can, moving the panel higher or into a different room ends the cycle. We will tell you honestly whether your layout allows it.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Power disconnected on your East Price Hill two-family? One entrance often feeds both units. We repair, permit and get you reconnected. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) is dense early-1900s housing around Warsaw Avenue and the Incline District, with a great many two- and three-family buildings among the single homes. On those buildings the electrical service is usually one entrance feeding a bank of meters, and that has two consequences when the power is cut. Every household in the building goes off together, and the equipment that failed belongs to whoever owns the building rather than to any of the occupants.',
      'The other thing we find in converted two-families here is work that was done at some point without a permit — a unit split, a sub-panel added, a circuit run to a converted attic. None of it was inspected, and it surfaces when a utility technician or an inspector finally looks at the service. That is the most common reason a disconnection here turns out to be larger than the homeowner expected, and it is better established at the estimate than discovered mid-job.',
    ],
    commonIntro:
      "In East Price Hill's two- and three-family buildings, where one entrance feeds a meter bank, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Both units in my East Price Hill two-family lost power. Is that one repair?',
        a: 'Almost certainly. Where both units go off together and the neighbouring houses are fine, it points at the shared service entrance or the meter bank rather than anything inside either unit. That is a single job with one permit and one inspection, which is faster and cheaper than two owners arranging separately. It also means the building owner has to authorise it, even where tenants are the ones without power.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Electricity disconnected at your West Price Hill home? We repair the service, handle the permit and inspection, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is largely single-family housing from the 1920s through the 1950s out along Glenway Avenue, and the services in those homes were sized for the loads of their era. Sixty or a hundred amps was generous for a house with a stove and a radio. It is not generous for a house with central air, a heat pump, a modern kitchen and possibly a car charging in the garage, and a service running permanently near its limit is how heat damage starts at the meter socket.',
      'That is the disconnection we see most here: not storm damage, but a socket or a panel showing signs of running hot for years, which a utility technician will not reconnect to. When that happens the decision worth making is whether to refit the same capacity or bring the service up to what the house actually draws. The labour, the permit and the inspection cost the same either way, which is what makes the second option worth pricing rather than assuming.',
    ],
    commonIntro:
      "Across West Price Hill's 1920s to 1950s homes, where services were sized for their era, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'The meter socket on my West Price Hill house was scorched. Why does that mean disconnection?',
        a: 'Because heat damage at the socket means the connection has been running hot, and re-energising it risks the same thing continuing behind a face that looks repaired. The utility will not reconnect to it. The repair is the socket and often the panel behind it, and it is worth checking whether the service capacity was the underlying cause rather than only replacing what burned.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Power disconnected on your Lower Price Hill rowhouse? Party-wall entrances and meter banks make this a shared repair. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, down in the Mill Creek valley around State Avenue. On rowhouses the service entrance is frequently mounted on a party wall or run up shared masonry, with several meters together in a bank — so a disconnection is rarely one household’s problem, and the equipment belongs to whoever owns that wall.',
      'Buildings of this age also carry a long history of retrofitted electrical work, much of it never permitted. When a utility technician or an inspector finally examines the service, that history is what determines the scope: not simply the fault that caused the disconnection, but whatever else is visible once the cover is off. We establish ownership and scope before quoting, because on a rowhouse both answers involve more than one party.',
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century rowhouses, where meters sit in banks on shared walls, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'The meters for several Lower Price Hill units are on one bank and ours has been cut. What happens?',
        a: 'Generally the bank is treated as one piece of equipment, so the affected units come off and go back together. It is worth one electrician handling it rather than each owner calling separately — one permit, one inspection, one utility visit instead of three of each. Agreeing how the cost splits before the work starts saves the argument afterwards.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Power disconnected in your Over-the-Rhine building? The service entrance is almost always a common element. Start with your association. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) is block after block of 1850s to 1880s Italianate buildings, most of them now split into apartments and condominiums, and almost none of the electrical service belongs to an individual unit owner. The entrance is typically high on a four-storey masonry wall or fed from the alley behind, with a stack of meters serving the building, and all of that is a common element belonging to the building or the association.',
      'The neighborhood has also seen an enormous amount of renovation, which cuts both ways. Buildings brought up to standard properly have modern services and clean paperwork. Buildings where work was done piecemeal over decades, some of it unpermitted, are where a disconnection turns into a larger conversation — because once an inspector is looking at the service to clear it, they are looking at what the retrofits left behind.',
    ],
    commonIntro:
      "In Over-the-Rhine's converted 19th-century buildings, where the service is a common element, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My OTR condo has no power. Who arranges the repair?',
        a: 'Start with your association or building manager rather than us. In a converted building the service entrance and meter stack are nearly always common elements, so the repair is the building’s to authorise and pay for, and an individual owner commissioning work on shared equipment creates problems later. Once they are ready we handle the repair, the permit and the reconnect. If the fault is inside your own unit, that part is yours and we can deal with it directly.',
      },
    ],
  },

  downtown: {
    intro:
      'Power off in your downtown condo or loft? The building owns the service, so start with management. We handle what is yours. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) is high-rise condominiums and converted loft buildings, and the electrical service to a building like that is infrastructure — one large entrance, switchgear, and a stack of meters. A resident essentially never owns the equipment that gets disconnected. What a resident experiences is a dark unit while the building next door is lit, and the useful first call is to management rather than to an electrician.',
      'Where we are genuinely needed downtown is inside the unit, and on the smaller converted buildings where the service is still an original arrangement on a roof or up a light well. Those were not designed as residential services, and a disconnection there frequently surfaces problems that have been marginal for years. We repair the entrance, bring the grounding to current code, and get it inspected so the meter can go back in.',
    ],
    commonIntro:
      "In downtown's condominiums, lofts and older commercial conversions, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My downtown loft has no power but the building does. Is that an electrician job?',
        a: 'Often not, and we would rather say so than send someone. If the building has power and your unit does not, the fault is usually in the unit panel or in the feed from the building’s equipment, which is a maintenance call to management first — they may already have a contractor engaged. If they confirm the problem sits inside your unit, that part is yours and we can take it from there.',
      },
    ],
  },

  'west-end': {
    intro:
      'Electricity disconnected at your West End home? We repair the service, handle the permit and inspection, and get you reconnected. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) runs from historic Italianate rowhouses through mid-century blocks to recent development, and that spread means two houses on the same street can present completely different problems. One may be a 19th-century building on a party-wall service with decades of retrofits behind it. The other may be a new build with a modern panel and clean documentation. The disconnection reason, the scope and the paperwork differ accordingly.',
      'The other factor here is turnover. Where a property has stood vacant for a long stretch — and parts of this neighborhood have seen plenty of that alongside the redevelopment — the utility treats reconnection with more caution, because nobody can vouch for what has happened to the service in the meantime. Sometimes a short inspection clears it. Sometimes it turns into a panel replacement, and that is better established before the work than during it.',
    ],
    commonIntro:
      "Across the West End's historic rowhouses, mid-century blocks and newer development, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I have bought a West End house that has been empty for years. What should I expect?',
        a: 'Expect the service to be looked at properly rather than simply switched on. A long-dead service on older housing gets treated with caution, because nobody can vouch for what has happened to it. Often a short inspection clears it. Where the panel or the grounding is well behind current code, it becomes a replacement — and knowing that before you exchange is worth more than finding out afterwards.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Power disconnected on your Mount Adams rowhouse? Steep access and party walls shape the job. We handle both. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is dense 19th-century rowhouses and townhomes on steep, narrow streets above downtown, and both features shape a disconnection repair. The service entrances are frequently on party walls or reached through a shared stair rather than from an open side yard, so establishing who owns the damaged equipment comes before establishing what is wrong with it.',
      'Access is the other constraint, and it is a genuine one rather than an excuse. On the tightest lanes there is often nowhere to place a ladder at the angle we would want, and nowhere to leave a vehicle without blocking the street. We look at how we will reach the work before scheduling it, because a crew that arrives and cannot get to the service has cost you a day. Mention your street when you call and we will plan the visit around it.',
    ],
    commonIntro:
      "On Mount Adams' steep lanes and packed rowhouse blocks, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'The service on my Mount Adams rowhouse is on a shared wall. Whose repair is it?',
        a: 'It depends on the deed and on how the service is arranged, which is why we establish it before quoting. Where one entrance and one meter bank feed more than one house, the equipment is generally shared and so is the cost, and it is one repair rather than two. Worth agreeing the split with your neighbour early — the delay on these is usually the conversation rather than the work.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Power disconnected in your Mount Auburn building? One original entrance often feeds a bank of meters. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is grand 19th-century houses and mansions on the hilltop above downtown, a great many of them divided into apartments decades ago. When a house is subdivided the electrical service is subdivided with it, and what that usually means in practice is one original entrance now feeding a bank of meters — equipment that was never designed for the number of households now hanging off it.',
      'That is the disconnection we see most here. Not a single dramatic fault, but a service running well beyond what it was built for, showing heat damage at the socket or failing an inspection on grounding that predates modern standards. Where the subdivision was done without permits — and on conversions of this age that is common — clearing the disconnection means addressing what those retrofits left behind rather than only the fault that stopped the meter.',
    ],
    commonIntro:
      "In Mount Auburn's subdivided 19th-century houses, where one entrance serves several households, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Mount Auburn building has several apartments and the whole place is off. Who arranges it?',
        a: 'The building owner, because the entrance and the meter bank feeding all the units are the building’s equipment rather than any tenant’s. If you rent, the useful call is to your landlord or managing agent, and we are happy to speak to them directly. Where a house has been split into separately owned units it is generally a shared cost, and that is better agreed before the work than after.',
      },
    ],
  },

  clifton: {
    intro:
      'Power disconnected at a Clifton property? On rental housing the owner has to authorise the repair. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is large Victorian and early-1900s houses on the hilltop by the University of Cincinnati, and a substantial share of them are rentals. That is the single biggest factor in how quickly a disconnection here gets resolved, and it has nothing to do with the wiring. A tenant cannot authorise work on a service or sign for a permit. The owner can, and the owner may not be in the city.',
      'The housing itself contributes too. Houses this size converted to multiple tenancies frequently run more load than the original service was built for, and conversions done over the years were not always permitted. When a utility technician declines to reconnect, or an inspector red-tags the service, what surfaces is often that history rather than a single failure. The fastest version of this is a property manager calling with the address and authorisation in one conversation.',
    ],
    commonIntro:
      "Across Clifton's large converted houses near the university, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'I rent in Clifton and the power has been disconnected. What can I actually do?',
        a: 'Report it to your landlord or management company immediately and ask them to call us rather than waiting. Repairs to the service, the meter base or the panel need the property owner to authorise the work and the permit, so a tenant calling an electrician directly usually adds a day rather than saving one. If the fault turns out to be inside your own unit, that is a faster conversation.',
      },
    ],
  },

  corryville: {
    intro:
      'Power disconnected in your Corryville building? Several units usually share one entrance. We deal with the owner. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) is about as densely built as Cincinnati gets, packed against the university along Short Vine, and almost all of it is tenanted. Electrically that means multiple meters per building, service entrances squeezed into narrow side gaps and rear alleys, and shared stacks — so when the power goes off it rarely affects one household and the equipment is rarely the occupant’s.',
      'Heavy, continuous use on old services is the other half. Buildings converted to student tenancies decades ago run more load than they were built for, year after year, and heat damage at a meter socket is the usual result. That is what stops a reconnection. Where the conversion work itself was never permitted, clearing the disconnection means dealing with what the inspector finds rather than only the socket that failed.',
    ],
    commonIntro:
      "In Corryville's densely tenanted buildings, where several meters share one entrance, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Several units in my Corryville building have been cut off. Is that one problem?',
        a: 'Almost certainly one. Where several units go off together and the neighbours have power, it points at the shared service entrance or the meter bank rather than anything inside individual apartments. That is a single repair — one permit, one inspection, one utility visit — and it needs the building owner to authorise it rather than each tenant chasing separately.',
      },
    ],
  },

  northside: {
    intro:
      'Electricity disconnected at your Northside home? We repair the service, handle the inspection, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is late-1800s and early-1900s housing along Hamilton Avenue with streets running down toward the Mill Creek valley, and it has seen a great deal of renovation over the last couple of decades. That renovation is the thing worth knowing about here, because a rehab almost always replaces the panel inside and frequently leaves the service entrance outside exactly as it was.',
      'The homeowner reasonably believes the electrical system is modern, because the part they can see is. When a disconnection happens it is the hundred-year-old entrance above the new panel that failed, or grounding that the rehab never addressed, and the utility will not reconnect to it. On the lower streets there is a second cause: a panel that has been under water, which is replaced rather than dried out however good it looks.',
    ],
    commonIntro:
      "In Northside's renovated older housing and its lower valley streets, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'My Northside house was renovated and has a new panel. Why has the power been cut?',
        a: 'Because a rehab usually replaces the panel inside and leaves the service entrance outside untouched. The mast, weatherhead, cable and meter box may well be the originals sitting above a panel from a few years ago, and the utility will not reconnect to those regardless of how new the panel is. Grounding is the other thing rehabs commonly skip.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Power disconnected at your College Hill home? We repair the service, pull the permit, and get you reconnected. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) mixes large early-1900s houses with mid-century homes along Hamilton Avenue and Belmont, and the two eras fail for different reasons. The older houses are where original wiring survives in places — knob and tube in an attic corner, a service that predates any modern standard — and that is what an inspector finds when they examine a service to clear a disconnection.',
      'The mid-century houses are simpler but not exempt: services sized for their era, many still original, now running loads nobody anticipated. Either way the useful question after a disconnection is not only what failed but what the inspector will look at once they are there, because that determines the scope and the cost. We assess the whole service rather than the single fault, and tell you which parts are genuinely worn rather than merely broken.',
    ],
    commonIntro:
      "Across College Hill's early-1900s and mid-century homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'The inspector mentioned knob and tube in my College Hill house. Does all of it have to go?',
        a: 'Not necessarily, and it is worth getting a straight answer rather than a scare. Knob and tube that is intact, not overloaded, and not buried in insulation is often left in place, while the service and panel are brought up to standard. What forces a rewire is damaged insulation, extensions spliced into it, or circuits that have been loaded well past what it was designed for. We will tell you which you have.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Power disconnected in your Walnut Hills building? Masonry walls and shared meter banks shape the repair. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is grand 19th-century houses and apartment buildings around Peebles Corner, much of it long since divided into units. As elsewhere on the hilltops, that means one original service entrance feeding a bank of meters, and equipment that belongs to the building rather than to the households without power.',
      'What is particular here is the masonry. These are brick buildings, and a service entrance anchored into brick is a different repair from one lagged to a frame wall — masonry fixings, proper sealing where the conduit enters, flashing suited to the wall. Done carelessly it becomes the reason water starts tracking inside a wall that has stood for a century, and an inspector will look at it. If you are comparing quotes and one is notably cheaper, ask how they intend to anchor and seal it.',
    ],
    commonIntro:
      "In Walnut Hills' historic masonry buildings and subdivided houses, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Does it matter that my Walnut Hills building is brick rather than frame?',
        a: 'For this repair it matters a good deal. A service entrance anchored into brick needs masonry fixings, proper sealing where the conduit enters, and flashing suited to the wall — done carelessly, the repair becomes the reason water tracks inside the wall. It is also slower work than the equivalent on frame, which is worth knowing when a quote comes in unusually low.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Electricity disconnected at your East Walnut Hills home? We repair the service, handle the inspection, and get the meter back in. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is stately early-1900s houses and brick apartment buildings around Woodburn Avenue and DeSales Corner, and the houses are large enough that load is the recurring theme. Multiple heating and cooling zones, finished lower levels, a modern kitchen and often a car charger, all hanging off a service that was generous in 1915 and is marginal now.',
      'A service running near its limit for years shows it at the connections, and heat damage at a meter socket is what stops a reconnection. The fix is rarely just the socket. On a house this size the sensible question is what the property actually draws, because refitting the same capacity means the same problem returns. On the apartment buildings the equipment is the building’s, on masonry walls, and the repair needs the owner to authorise it.',
    ],
    commonIntro:
      "In East Walnut Hills' large houses and brick apartment buildings, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Why would my East Walnut Hills service be disconnected when nothing broke?',
        a: 'Heat damage is the usual answer. A service running close to its limit for years degrades at the connections, and a utility technician who finds a scorched or discoloured meter socket will not re-energise it. Nothing dramatic happened — it wore out under load. That is why the repair should look at capacity rather than only replacing the damaged part.',
      },
    ],
  },

  avondale: {
    intro:
      'Power disconnected at your Avondale property? On rental housing the owner authorises the repair. We handle the rest. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) is densely built early-1900s houses and apartment buildings in the uptown core near the hospitals, and a large share of it is tenanted. That shapes the timeline more than the electrical work does: a tenant cannot authorise a repair to a service or sign for a permit, and where an owner is slow to respond identical damage can sit for days.',
      'The housing adds the technical half. Buildings of this age carrying multiple households run services that were never intended for the load, and where units were added over the years without permits, an inspector examining the service to clear a disconnection is looking at all of it rather than the single fault. We establish ownership and scope before quoting, because on a tenanted building both answers involve someone who is not on site.',
    ],
    commonIntro:
      "Across Avondale's densely built older houses and apartment buildings, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I rent in Avondale and the building has been disconnected. Who do I chase?',
        a: 'Your landlord or managing agent, and it is worth being persistent. The service entrance and meter bank are the building’s equipment, so only the owner can authorise the repair and the permit. We are happy to deal with them directly once they call. If only your unit is affected and the rest of the building has power, that points at something inside the unit, which is a different and usually faster fix.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Electricity disconnected at your Hyde Park home? We repair the service, handle the permit and inspection, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is large early-1900s houses around Hyde Park Square — Tudors, colonials and brick foursquares — and what these homes now draw is the story behind most disconnections here. Multiple HVAC zones, a finished lower level, a serious kitchen, and often car charging, all on a service that was sized when a house had far fewer demands on it.',
      'A service run near capacity for years fails at the connections rather than dramatically, and heat damage at the meter socket is what a utility technician refuses to reconnect to. The other common trigger in this neighborhood is a sale: a point-of-sale inspection or an insurer’s survey turns up a service or panel that will not pass, and the transaction stalls until it is corrected. Both are better addressed with capacity in mind rather than by refitting what was already inadequate.',
    ],
    commonIntro:
      "In Hyde Park's large established houses, where modern loads sit on older services, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'An inspection before selling my Hyde Park house flagged the panel. Does that stop the sale?',
        a: 'It stops it until the work is done or the parties agree who is doing it. A panel with known defects, an undersized service, or unpermitted work will show up on a survey and insurers take a view on it too. The practical route is getting it corrected and inspected properly rather than negotiating around it, because the next buyer’s surveyor will find the same thing.',
      },
    ],
  },

  oakley: {
    intro:
      'Power disconnected at your Oakley home? Bungalow services were small when new. We repair, permit and reconnect. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is streets of early-1900s bungalows and brick homes around Oakley Square, with newer development mixed in. The bungalows are the ones we are usually called to, and the reason is capacity: a bungalow built in 1915 was given a genuinely small service, and a great many are still running on something close to it after a century of added kitchens, air conditioning and appliances.',
      'That produces a slow failure rather than a sudden one — a meter socket that has been running warm for years, a panel with no room left, grounding that predates any modern standard — and eventually a utility technician or an inspector who declines to energise it. The newer infill houses on the same streets are a different conversation entirely: modern panels, clean documentation, and disconnections that are usually about something specific rather than the whole service.',
    ],
    commonIntro:
      "Across Oakley's early-1900s bungalows and newer infill, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Oakley bungalow has a small original service. Is a disconnection the time to upgrade?',
        a: 'Usually, yes. The costs that dominate this job are the labour, the permit and the inspection, and they are the same whether we refit the original capacity or install a properly sized service. On a century-old bungalow now running central air and a modern kitchen, putting the small service back means paying that same set of costs again before long. We quote both so you can see the difference.',
      },
    ],
  },
};
