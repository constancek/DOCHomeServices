import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 1 — the west-side river neighborhoods, the basin, and the first
// hilltops. Angles here are piping vintage and material, appliance red tags,
// flood-damaged gas controls, meter position, and who authorises the work.
export const part1: Record<string, LocationServiceCopy> = {
  sedamsville: {
    intro:
      'Gas shut off at your Sedamsville home? It will not be restored until the fault is repaired and the piping holds pressure. Same-day work above River Road. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is frame housing from the late 1800s and early 1900s climbing the hillside above River Road, and the gas piping inside those houses is the reason shutoffs here are rarely quick to clear. Houses of that age were piped in black iron, run through basements and up through floors, and joined with threaded fittings that have been in place for a century. Nothing about that is unsafe in principle. What matters is that a hundred years of settling, damp and alteration leaves a system that frequently will not hold a pressure test the first time it is checked.',
      'So the honest expectation on a house like this is that finding the leak takes longer than fixing it. We isolate sections and work through the system rather than guessing, because a house piped in stages over decades has joints in places nobody would put them now. Where a run is corroded rather than simply leaking at one fitting, replacing that section is the repair — patching a threaded joint on pipe that has thinned is a false economy the test will find again.',
    ],
    commonIntro:
      "In Sedamsville's century-old frame houses, piped in black iron and altered over decades, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Why is the leak taking so long to find in my Sedamsville house?',
        a: 'Because a house piped over a century has joints where nobody would put them today, often behind finished walls or under floors added later. We isolate sections and pressure-test them in turn rather than guessing, which is slower to start with and far quicker than opening the wrong wall. If a run turns out to be corroded rather than leaking at one fitting, replacing that section is the repair — a patch on thinned pipe fails the next test.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Gas off in Sayler Park after high water? Submerged furnaces and water heaters are replaced, not relit. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) has low riverfront streets sitting in the Ohio River floodplain, and that produces the clearest and least negotiable kind of gas shutoff. Where a furnace, water heater or boiler has been under water, the gas control valve and the burner controls are replaced rather than dried out and relit. Water damages those components internally in ways that are not visible from the outside, and manufacturers are unambiguous about it.',
      'That is worth understanding early, because it is where homeowners here lose the most time. A submerged water heater that looks fine, fires up and appears to work is not evidence that it is safe — the control valve is the part in question, not the tank. We will tell you plainly which appliances have to be replaced and which can stay, and the piping still has to hold a pressure test before the utility restores service either way.',
    ],
    commonIntro:
      "On Sayler Park's floodplain streets, where gas appliances have been under water, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Sayler Park water heater was under water but it still lights. Does it really need replacing?',
        a: 'Yes. The part in question is the gas control valve, not the tank, and water damages it internally without any outward sign — it can work for a while and then fail in a way you do not want a gas appliance failing. Manufacturers are explicit that submerged gas controls are replaced rather than dried. Anyone telling you otherwise is taking a risk with your house rather than saving you money.',
      },
    ],
  },

  riverside: {
    intro:
      'Gas shut off at your Riverside home? We repair the piping, pass the pressure test, and get service restored. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) sits on low Ohio River bottomland along River Road, and the pattern here is repetition. Where water reaches a basement more than once, the same gas appliances get condemned more than once — the furnace and water heater sit at the lowest point in the house, and their controls are the first thing water ruins. Plenty of properties on these streets are on their second or third water heater for exactly that reason.',
      'When we are out for a shutoff here, the more useful question than "can this be saved" is whether the appliance can be raised. A water heater set on a properly built platform above the historic water line survives events that would condemn one sitting on the floor. It is not always practical, because venting and connections constrain how high a unit can go, but where it is possible it turns a recurring replacement into a one-off.',
    ],
    commonIntro:
      "On Riverside's low bottomland lots, where gas appliances have been condemned more than once, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'This is the third water heater we have lost to flooding in Riverside. Can it be raised?',
        a: 'Sometimes, and it is the right question to ask during a replacement rather than after the next flood. What constrains it is the venting and the connections — a unit can only go so high before the flue run stops working properly. Where the layout allows a proper platform above the historic water line, it ends the cycle. Where it does not, we will say so rather than build something that creates a different problem.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Gas shut off in your East Price Hill two-family? One meter bank often serves both units. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) is dense early-1900s housing around Warsaw Avenue and the Incline District, with a great many two- and three-family buildings. On those buildings the gas arrangement matters more than the plumbing does: there may be one meter serving the whole building, or a bank of meters with separate house lines, and which you have decides whose shutoff it is and who has to authorise the repair.',
      'The other thing we find in converted two-families here is gas work done when units were split — a line run to a new kitchen, an appliance added, a connector fitted by whoever was cheapest. None of it was permitted or tested, and it surfaces the moment a pressure test is run on the whole system. That is the usual reason a shutoff here turns out to involve more than the fault that caused it, and it is better established at the estimate than discovered with the gas already off.',
    ],
    commonIntro:
      "In East Price Hill's two- and three-family buildings, where gas arrangements vary and conversions were often untested, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Both units in my East Price Hill two-family have no gas. Is that one repair?',
        a: 'It depends whether the building has one meter or a bank of them. On a single meter serving the whole building it is one system, one test and one repair, and the building owner authorises it. On separate meters each unit has its own house line and the answer can differ between them. We establish which arrangement you have before quoting, because it changes both the scope and who pays.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Gas shut off at your West Price Hill home? An aging furnace or water heater is the usual cause. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is largely single-family housing from the 1920s through the 1950s out along Glenway Avenue, and in homes of that era the gas shutoff usually starts with an appliance rather than the piping. A furnace with a cracked heat exchanger, a water heater with a failed control, or a flue that is no longer drawing properly gets red-tagged, and the gas comes off until it is corrected.',
      'That distinction matters for what the repair costs. Where the piping is sound and one appliance is the problem, replacing that appliance and passing a pressure test is a contained job. Where the appliance failure has been masking a piping problem — and on original systems that is common — the test finds it and the scope grows. We test first and quote after, rather than the other way round.',
    ],
    commonIntro:
      "Across West Price Hill's 1920s to 1950s homes, where an aging appliance usually triggers the shutoff, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'The utility red-tagged my West Price Hill furnace. Does the whole system need work?',
        a: 'Not necessarily, and the pressure test tells us. Where the piping is sound and the furnace is the only problem, replacing it and passing the test is a contained job. On an original system the test sometimes finds a piping fault the appliance was masking, which grows the scope. We test before quoting so you get one number rather than a revision halfway through.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Gas shut off on your Lower Price Hill rowhouse? Party-wall meters and shared house lines shape the job. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) holds one of the most intact stretches of 19th-century Italianate brick rowhouses in Cincinnati, down in the Mill Creek valley around State Avenue. On rowhouses the gas meters are frequently banked on a party wall or in a shared basement area, with house lines running off in different directions — and there is no side yard to work from, so access is arranged rather than assumed.',
      'Buildings of this age also carry the longest gas histories we deal with: piping installed when the houses were lit by it, extended for cooking, extended again for central heating, and altered whenever a unit changed. A pressure test on a system like that finds what a century of alterations left behind, which is why the scope on these jobs is established after testing rather than promised before it.',
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century rowhouses, where meters are banked on shared walls, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'The gas meters for several Lower Price Hill units are together. Whose repair is it?',
        a: 'It depends which house line the fault is on. The meters may be banked together while each unit has its own piping beyond them, in which case the fault belongs to whichever house line failed. Where one meter feeds the whole building the system is shared and so is the cost. We establish that before quoting, because on a rowhouse the answer determines who authorises the work.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Gas shut off in your Over-the-Rhine building? The riser is usually a common element. Start with your association. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) is block after block of 1850s to 1880s Italianate buildings, most now split into apartments and condominiums, and the gas arrangement follows the conversion rather than the original building. Typically a bank of meters in a basement or rear area feeds risers up through the building, and those risers are common elements belonging to the building or the association rather than to the unit whose gas is off.',
      'So the first question here is what failed and whose it is. A fault on a riser is the building’s to repair and authorise; a fault on the branch inside your unit is yours. The neighborhood has also seen enormous renovation, some of it excellent and some done piecemeal over decades, and a pressure test on a shared system finds whatever the piecemeal work left behind.',
    ],
    commonIntro:
      "In Over-the-Rhine's converted 19th-century buildings, where risers serve several units, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My OTR condo has no gas but the neighbours do. Whose problem is that?',
        a: 'Probably yours, and that is the useful news — if only your unit is affected, the fault is more likely on the branch serving you than on the shared riser. Where several units are off together it points at the riser or the meter bank, which are common elements and the building’s to authorise. Report it either way, but the single-unit case is usually the faster and cheaper one.',
      },
    ],
  },

  downtown: {
    intro:
      'Gas shut off in a downtown building? Much of the residential stock here has no gas at all. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) is high-rise condominiums and converted loft buildings, and it is worth saying plainly that a good deal of this housing is all-electric — no gas appliances, no house line, nothing for us to test. Where gas is present it is usually building infrastructure: a meter bank and risers serving the building, with cooking gas branched off to units.',
      'That means a resident essentially never owns the equipment that gets shut off, and the useful first call is to building management rather than to a plumber. Where we are genuinely needed is on the smaller converted buildings whose gas systems were installed for a different use entirely, and inside units where a range connection or a branch line has failed. Tell us on the phone what appliances you actually run on gas and we will tell you whether this is ours.',
    ],
    commonIntro:
      "In downtown's condominiums, lofts and older conversions, the gas-related problems we are called for most often are:",
    localFaqs: [
      {
        q: 'My downtown unit has no gas. Do I need a plumber?',
        a: 'Possibly not, and we would rather establish that on the phone than send someone. Plenty of downtown residential is all-electric, in which case there is nothing to test. Where gas is present the meter bank and risers are building infrastructure, so it is a management call first. If the fault is on the branch inside your unit — a range connector, for instance — that part is yours and we can deal with it.',
      },
    ],
  },

  'west-end': {
    intro:
      'Gas shut off at your West End home? A house that stood empty needs testing, not just switching on. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) runs from historic Italianate rowhouses through mid-century blocks to recent development, and it has seen considerable vacancy alongside the redevelopment. That combination produces the most common gas shutoff we attend here: a property that has been off for a long stretch, where the utility will not simply restore service because nobody can vouch for what has happened to the piping in the meantime.',
      'The answer is a pressure test, and on older housing that has sat unused it frequently does not pass first time. Piping that was holding perfectly well when the house was occupied can fail once nothing has been through it for years, particularly where damp has been working on threaded joints in a basement. It is a formality when the system is sound and a genuine repair when it is not — and it is the standard surprise for anyone buying a long-empty house here.',
    ],
    commonIntro:
      "Across the West End's historic rowhouses, mid-century blocks and newer development, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'I have bought a West End house that was empty for years. What should I expect with the gas?',
        a: 'Expect a pressure test rather than a switch-on, and budget for the possibility that it does not pass first time. Piping that was fine while the house was lived in can fail after years unused, particularly where damp has been working on threaded joints. On a sound system it is a formality. On an old one it is worth knowing before you exchange rather than after.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Gas shut off on your Mount Adams rowhouse? Steep access and party-wall meters shape the visit. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is dense 19th-century rowhouses and townhomes on steep, narrow streets, and both features affect a gas shutoff. The meters are frequently on party walls or in shared basement areas rather than in an accessible side yard, so establishing which house line is yours comes before establishing what is wrong with it.',
      'Access is a real constraint here rather than an excuse. On the tightest lanes there is nowhere to leave a vehicle without blocking the street, and equipment has to be carried in. We plan that before scheduling, because a crew that arrives and cannot get to the meter has cost you a day with no hot water. Mention your street when you call and we will allow for it.',
    ],
    commonIntro:
      "On Mount Adams' steep lanes and packed rowhouse blocks, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'The gas meter for my Mount Adams rowhouse is in a shared basement. Does that complicate things?',
        a: 'It means access has to be arranged rather than assumed, and it means we confirm which house line belongs to your unit before testing anything. Neither is difficult, but both take time we would rather plan for than discover. Tell us the arrangement when you call and mention your street, because parking on the tightest lanes needs allowing for.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Gas shut off in your Mount Auburn building? One original house line often serves several units. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is grand 19th-century houses and mansions on the hilltop above downtown, a great many divided into apartments decades ago. When a house that size is subdivided the gas rarely gets rebuilt properly — more often the original house line is extended and branched to serve kitchens and heating in the new units, on piping that was installed when the building was one home.',
      'A pressure test on a system like that tests every one of those extensions at once, which is why a shutoff in a subdivided Mount Auburn house frequently involves more than the fault that triggered it. The equipment also belongs to the building rather than to the households without gas, so the repair needs the owner to authorise it even where tenants are the ones with no hot water.',
    ],
    commonIntro:
      "In Mount Auburn's subdivided 19th-century houses, where an original house line serves several units, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Mount Auburn building has several apartments and the gas is off to all of them. Who arranges it?',
        a: 'The building owner, because the house line and meter arrangement serving all the units are the building’s rather than any tenant’s. If you rent, the useful call is to your landlord or managing agent, and we will speak to them directly. Where a house has been split into separately owned units it is generally a shared cost, which is better agreed before the work than after.',
      },
    ],
  },

  clifton: {
    intro:
      'Gas shut off at a Clifton property? On rental housing the owner has to authorise the repair. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is large Victorian and early-1900s houses on the hilltop by the University of Cincinnati, and a substantial share are rentals. That decides how quickly a gas shutoff gets cleared, and it has nothing to do with the piping: a tenant cannot authorise work on a house line or sign for a permit, and the owner may not be in the city.',
      'The housing contributes too. Houses this size converted to multiple tenancies have gas piping that was extended for each conversion, frequently without permits or testing, and a pressure test finds all of it at once. Where a house has been off for the summer between tenancies, the test is required before restoration anyway. The fastest version here is a property manager calling with the address and authorisation in one conversation.',
    ],
    commonIntro:
      "Across Clifton's large converted houses near the university, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'I rent in Clifton and the gas has been shut off. What can I do?',
        a: 'Report it to your landlord or management company immediately and ask them to call us rather than waiting. Repairs to the house line and the pressure test need the property owner to authorise the work and the permit, so a tenant calling directly usually adds a day rather than saving one. If the problem is a single appliance rather than the piping, that is a faster conversation.',
      },
    ],
  },

  corryville: {
    intro:
      'Gas shut off in your Corryville building? Several units usually share one system. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) is about as densely built as Cincinnati gets, packed against the university along Short Vine, and almost all of it is tenanted. The gas arrangements reflect decades of conversion: meters banked in basements or rear areas, house lines extended to serve kitchens in units that did not exist when the piping went in, and connectors fitted at various points by various people.',
      'A pressure test on that finds the accumulated history rather than one fault, which is why a Corryville shutoff is often larger than the trigger suggests. The equipment belongs to the building owner, not the tenants without hot water, so authorisation is the usual delay. Where the building has been empty over a summer, testing before restoration is required regardless of whether anything is wrong.',
    ],
    commonIntro:
      "In Corryville's densely tenanted buildings near campus, where house lines were extended for each conversion, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Several units in my Corryville building have no gas. Is that one repair?',
        a: 'Usually one system and one test, which means one repair rather than several — but a bigger one than a single unit. Where the meter bank and house lines serve the whole building, that is the building owner’s equipment and only they can authorise the work. It also means one permit and one inspection rather than several, which is faster and cheaper handled together.',
      },
    ],
  },

  northside: {
    intro:
      'Gas shut off at your Northside home? New appliances above original piping is the usual cause. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is late-1800s and early-1900s housing along Hamilton Avenue that has seen a great deal of renovation, and that produces a specific and very common gas situation. A rehab replaces the furnace and the water heater, because those are visible and quotable. It rarely replaces the house piping running to them, because that is buried in a basement and nobody asks about it.',
      'So the homeowner reasonably believes the gas system is modern. What is actually there is a modern appliance connected to piping installed when the house was lit by gas, and when a pressure test is run it is the old piping that fails. On the lower streets running toward the Mill Creek valley there is a second cause — appliances that have been under water, where the gas controls are replaced rather than dried out.',
    ],
    commonIntro:
      "In Northside's renovated older housing and its lower valley streets, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'My Northside house was rehabbed with a new furnace. Why did the gas fail a test?',
        a: 'Because a rehab usually replaces the appliances and leaves the house piping alone. The furnace may be five years old and the black iron feeding it a hundred, and a pressure test checks the piping rather than the appliance. It is the most common surprise on renovated houses here, and it is not a reflection on the rehab — the piping simply was not part of the scope.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Gas shut off at your College Hill home? We find the fault, pass the test, and relight everything. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) mixes large early-1900s houses with mid-century homes along Hamilton Avenue and Belmont, and the two eras fail differently. The older houses have the longest gas histories — piping installed for lighting, extended for cooking, extended again for central heating — and a pressure test finds whatever those stages left behind.',
      'The mid-century houses are simpler systems but not exempt: original piping, now feeding appliances several generations newer than it was designed for, with threaded joints that have been through decades of basement humidity. Either way the useful sequence is the same. Test first to establish what is actually wrong, then quote, rather than quoting on the visible fault and revising once the gauge tells the truth.',
    ],
    commonIntro:
      "Across College Hill's early-1900s and mid-century homes, on gas systems of two very different vintages, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'How long does it take to find a gas leak in an older College Hill house?',
        a: 'Longer than fixing it, usually. We isolate sections and pressure-test them in turn rather than guessing, which is the only reliable way on a system that was extended in stages. On a house with a straightforward basement run it can be an afternoon. Where piping disappears into finished walls or under floors added later, it takes longer — and we would rather tell you that than promise an hour.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Gas shut off in your Walnut Hills building? Banked meters and extended house lines shape the repair. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is grand 19th-century houses and apartment buildings around Peebles Corner, much of it divided into units, and the gas systems follow those divisions rather than the original buildings. Meters banked in a basement, house lines extended and branched for each conversion, and connectors added at various points over a century.',
      'A pressure test checks all of it at once, which is why a shutoff in a subdivided building here frequently involves more than the fault that triggered it. These are also masonry buildings, so where piping has to be re-run it means working through or along brick rather than through frame — slower work, and worth knowing when a quote comes in unusually low.',
    ],
    commonIntro:
      "In Walnut Hills' historic masonry buildings and subdivided houses, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does it matter that my Walnut Hills building is masonry for a gas repair?',
        a: 'It matters for the work rather than the outcome. Re-running piping through or along brick is slower than through frame, and penetrations have to be made and sealed properly. It is one reason quotes vary on these buildings, and if one comes in notably cheaper it is worth asking how they intend to route and support the new run.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Gas shut off at your East Walnut Hills home? More gas appliances means more joints to test. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is stately early-1900s houses around Woodburn Avenue and DeSales Corner, and the houses are large enough that the gas system is genuinely extensive. A furnace, a water heater, a range, sometimes a second heating zone, and frequently gas fireplaces added at some point — every one of those is a branch, and every branch is joints.',
      'A pressure test does not care how new the appliances are; it tests the whole system, and a house with eight branches has more places to leak than one with two. That is why shutoffs on large houses here take longer to diagnose than on a modest one, and why we isolate and test in sections rather than looking for one obvious fault. Gas fireplaces are worth mentioning when you call, because they are the branch most often added without a permit.',
    ],
    commonIntro:
      "In East Walnut Hills' large houses with extensive gas systems, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'We have gas fireplaces in our East Walnut Hills house. Do they affect the test?',
        a: 'Yes, and they are worth mentioning when you call. Each one is a branch with joints and a valve, and they are the addition most often made without a permit — so they are also the branch most likely to be the source. It does not mean they are a problem, only that they are part of the system a pressure test checks and we need to know they are there.',
      },
    ],
  },

  avondale: {
    intro:
      'Gas shut off at your Avondale property? On rental housing the owner authorises the repair. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) is densely built early-1900s houses and apartment buildings in the uptown core near the hospitals, with a large share tenanted. That shapes the timeline more than the gas work does: a tenant cannot authorise a repair to a house line or sign for a permit, and where an owner is slow to respond a house sits without hot water.',
      'The buildings add the technical half. Houses of this age carrying multiple households have gas piping that was extended for each conversion, and a pressure test finds the accumulated result. Where a property has been vacant between tenancies, testing is required before restoration regardless of whether anything is wrong. We establish ownership and scope before quoting, because on tenanted buildings both involve someone not on site.',
    ],
    commonIntro:
      "Across Avondale's densely built older houses and apartment buildings, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'I rent in Avondale and there has been no gas for days. Who do I chase?',
        a: 'Your landlord or managing agent, and it is worth being persistent — with no gas there is no hot water and, in winter, no heat. The house line and meter arrangement are the building’s equipment, so only the owner can authorise the repair and the permit. We will deal with them directly once they call, and we can give them a straight answer on scope and timing.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Gas shut off at your Hyde Park home? Extensive systems take longer to test. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is large early-1900s houses around Hyde Park Square — Tudors, colonials and brick foursquares — and the gas systems in them have grown considerably since they were installed. A furnace and water heater, a range, gas fireplaces, sometimes an outdoor kitchen or a pool heater added in recent years. Each is a branch, and a pressure test checks all of them together.',
      'The other common trigger in this neighborhood is a sale. A point-of-sale inspection or an insurer’s survey turns up unpermitted gas work — an outdoor line, a fireplace, a range connection — and the transaction stalls until it is corrected and tested. Both situations are better handled by testing the whole system properly than by fixing the one item that was flagged, because the next survey will find the rest.',
    ],
    commonIntro:
      "In Hyde Park's large houses with extended gas systems, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'An inspection before selling my Hyde Park house flagged unpermitted gas work. What now?',
        a: 'It has to be corrected, permitted and tested, and the practical route is testing the whole system rather than only the item flagged. Outdoor lines, gas fireplaces and range connections are the additions most often made without permits, and if a survey found one it will usually find the others. Doing it once properly is cheaper than negotiating item by item through a sale.',
      },
    ],
  },

  oakley: {
    intro:
      'Gas shut off at your Oakley home? Bungalow piping was sized for far less. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is streets of early-1900s bungalows and brick homes around Oakley Square, with newer development mixed in. The bungalows are the ones we are usually called to, and the issue is often sizing rather than leaking. A house piped in 1915 for a cooker and perhaps a heater has piping sized accordingly, and a modern furnace, a tankless water heater and a range all drawing at once can exceed what that piping can actually deliver.',
      'That shows up as appliances that will not run properly rather than as a leak, and it is a common finding once someone tests and measures rather than assuming. Where it applies, the repair is upsizing the run rather than chasing a fault that is not there. On the newer infill houses on the same streets the systems are modern and adequately sized, and a shutoff is usually about one specific thing.',
    ],
    commonIntro:
      "Across Oakley's early-1900s bungalows and newer infill, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Our Oakley appliances never seem to run properly. Is that a leak?',
        a: 'Often it is not. On a bungalow piped in the 1910s the run may simply be too small to supply a modern furnace, a tankless heater and a range at the same time — the pressure drops when several draw at once, and appliances behave badly without anything leaking. That needs measuring rather than guessing, and the fix is upsizing the run rather than chasing a fault.',
      },
    ],
  },
};
