import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 3 — the northern suburbs, the Mill Creek valley neighborhoods, and the
// smaller west-side pockets. Themes: sizing versus leaking, flooded gas
// controls, shared house lines, and who authorises the work.
export const part3: Record<string, LocationServiceCopy> = {
  mason: {
    intro:
      'Gas shut off at your Mason home? Warren County issues the permit, and newer houses use CSST. Call (513) 586-5107.',
    relevance: [
      'Mason (ZIP 45040) is mostly subdivisions from the 1990s onward around an older town center, and the two are piped differently. The newer housing frequently uses corrugated stainless steel tubing — CSST, the flexible yellow-jacketed pipe — while the older core is black iron installed generations earlier. Permits and inspections go through Warren County rather than Hamilton County or the city.',
      'On CSST the issue an inspector most often finds is bonding rather than leaking: the tubing has to be properly bonded to the electrical grounding system, and incomplete bonding is common on earlier installations. On the older core the findings are the familiar ones — threaded joints that have been in place for decades, and capped lines left behind when appliances were removed. Different materials, different failure modes, same pressure test.',
    ],
    commonIntro:
      "Across Mason's 1990s CSST subdivisions and its older black iron town center, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'My Mason house is from the 1990s. What would fail an inspection?',
        a: 'On a house of that age the usual finding is CSST bonding rather than a leak — the flexible yellow-jacketed tubing has to be bonded to the electrical grounding system, and incomplete bonding is common on earlier installations. It is straightforward to put right and it is exactly what an inspector checks. Permits go through Warren County rather than the city.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Gas shut off at your West Chester home? CSST bonding is the usual inspection finding. Call (513) 586-5107.',
    relevance: [
      'West Chester (ZIP 45069) is largely subdivisions built from the 1990s onward, which means most of the gas piping here is CSST rather than black iron. It is a sound product and easier to route than rigid pipe, which is why builders adopted it — and it carries one requirement that gets missed: it must be properly bonded to the electrical grounding system.',
      'That bonding is what an inspector looks for when clearing a gas shutoff, and incomplete bonding is the most common finding on installations from the earlier years of its use. It is not a leak and it is not dangerous in normal operation; it is a code requirement with a real safety basis, and putting it right is straightforward. Permits and inspections go through West Chester Township and Butler County rather than any city office.',
    ],
    commonIntro:
      "Across West Chester's newer CSST-piped subdivisions, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'The inspector mentioned bonding on my West Chester gas piping. What does that mean?',
        a: 'CSST — the flexible yellow-jacketed gas tubing used in most houses of this era — has to be bonded to the electrical grounding system. It is a code requirement with a genuine safety basis, and incomplete bonding is common on earlier installations. It is not a leak and it is straightforward to correct, but it does have to be right before the inspection passes.',
      },
    ],
  },

  pendleton: {
    intro:
      'Gas shut off in your Pendleton building? Converted buildings often share one house line. Call (513) 586-5107.',
    relevance: [
      'Pendleton (ZIP 45202) is a small arts district of restored 19th-century buildings converted into lofts and condominiums, and the gas arrangements follow the conversions rather than the original buildings. A building that was a workshop or a storefront had gas for one purpose; turning it into residential units meant branching that supply for kitchens and heating, usually without rebuilding what was already there.',
      'A pressure test on a system like that tests every one of those branches at once. Because the meter arrangement and any shared risers are common elements belonging to the building rather than to a unit owner, the first thing to establish is what failed and whose it is — a fault on a shared riser is the association’s to authorise, and a fault on the branch inside your unit is yours.',
    ],
    commonIntro:
      "In Pendleton's converted 19th-century buildings, where a workshop supply now feeds homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'My Pendleton loft has no gas. Who arranges the repair?',
        a: 'It depends what failed. If only your unit is affected, the fault is more likely on the branch serving you, which is yours. Where several units are off together it points at the meter arrangement or a shared riser — common elements the building or association has to authorise. Report it either way; the single-unit case is usually faster and cheaper.',
      },
    ],
  },

  queensgate: {
    intro:
      'Gas shut off on a Queensgate property? We handle smaller commercial and say when yours needs more. Call (513) 586-5107.',
    relevance: [
      'Queensgate (ZIP 45203) is largely commercial and industrial — warehouses, offices and light-industrial buildings near the rail yards and the Mill Creek — and gas shutoffs here are a different proposition from residential ones. Commercial buildings often run larger meters, higher pressure, and process or heating equipment with requirements that do not apply to a house.',
      'We are straightforward about where our line is. Smaller commercial gas systems — a light-industrial unit, an office, a small warehouse with unit heaters — are work we do, permits and pressure testing included. A large industrial installation with elevated pressure, process equipment or its own regulator station is a specialist contractor’s job. Describe the building and what runs on gas when you call and we will tell you honestly whether we are the right people.',
    ],
    commonIntro:
      "Across Queensgate's warehouses and light-industrial buildings, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you get gas restored to a Queensgate warehouse?',
        a: 'It depends on the size and pressure of the system, and we would rather establish that on the phone than after driving out. Smaller commercial systems with unit heaters or modest process load are routine for us. A large installation with elevated pressure, process equipment or its own regulator station needs a specialist, and we will say so rather than charge you for the visit to find out.',
      },
    ],
  },

  cuf: {
    intro:
      'Gas shut off in your CUF building? One house line often serves many tenancies. Call (513) 586-5107.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview, packed against the University of Cincinnati, and the housing has been subdivided about as far as it can go. It is common for one original house line to have been branched repeatedly to serve kitchens and heating in units that did not exist when the piping was installed.',
      'A pressure test checks all of that at once, which is why a gas shutoff here is frequently larger than the trigger suggests — and why it goes off to every tenancy in the building at the same time. The equipment belongs to the owner rather than the tenants without hot water, and owners here are frequently not local. On the steeper Fairview streets, access to the meter needs planning before the visit is scheduled.',
    ],
    commonIntro:
      "Across CUF's heavily subdivided houses near the university, where one house line was branched for each conversion, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Our whole CUF building has no gas. Is that one repair?',
        a: 'Usually one system and one test, so one repair — but a larger one than a single unit. Where the original house line was branched to serve every tenancy, it all comes off together and goes back together on one permit and one inspection. That is cheaper handled as one job than piecemeal, and only the building owner can authorise it.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Gas shut off at your Camp Washington home? Small worker-cottage piping and a low valley basement. Call (513) 586-5107.',
    relevance: [
      'Camp Washington (ZIP 45225) is a tight mix of old worker housing and factories down in the Mill Creek valley, and the houses are small — compact cottages built for factory workers, piped for a cooker and perhaps a heater. Where a modern furnace, a water heater and a range now run off that original piping, the issue is frequently sizing rather than a leak: the run cannot deliver what everything drawing at once demands.',
      'The valley adds the second cause, and it is the more common one. Panels and gas appliances alike sit in low basements here, and where a furnace or water heater has been under water the gas control valve is replaced rather than dried out and relit. We look at both the piping and the appliances rather than assuming the shutoff has a single explanation.',
    ],
    commonIntro:
      "In Camp Washington's compact worker housing on low valley ground, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Our Camp Washington appliances never run properly. Is that a leak?',
        a: 'Often it is not. On a cottage piped in the 1930s for a cooker, the run may simply be too small to supply a modern furnace, a water heater and a range at once — pressure drops when several draw together and appliances behave badly with nothing leaking. That needs measuring rather than guessing, and the fix is upsizing the run.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Gas shut off in South Fairmount? Some systems are newer since the Lick Run rebuild. Call (513) 586-5107.',
    relevance: [
      'South Fairmount (ZIP 45205) was substantially rebuilt around the Lick Run Greenway, the stormwater project undertaken because this valley flooded for generations, and that leaves an unusually mixed picture. Properties affected by the work frequently have newer gas systems and appliances. Houses that were not still have piping as old as anything on the west side, and the two sit on the same streets.',
      'So the answer to a shutoff here genuinely depends on which category your house falls into, and it is worth establishing before quoting rather than assuming. Where the house still sits low, gas appliances that have been under water are the recurring cause, and their control valves are replaced rather than dried out. Where the piping is original, a pressure test finds what decades of alterations left behind.',
    ],
    commonIntro:
      "In South Fairmount, where the Lick Run rebuild left new and old gas systems on the same streets, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does the Lick Run project mean my South Fairmount gas system was replaced?',
        a: 'Only if your property was part of the work. The Greenway changed how the valley handles surface water and brought newer infrastructure to some properties, but plenty of houses here were untouched and still have original piping and older appliances. We check what you actually have rather than assuming the rebuild covered it.',
      },
    ],
  },

  'east-end': {
    intro:
      'Gas shut off in the East End? Cottages and condos give completely different answers. Call (513) 586-5107.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront strip along Eastern Avenue with historic river cottages and newer condominiums wedged between the hillside and the Ohio, and the two produce opposite conversations. On a cottage the gas system is the homeowner’s, frequently original, and low enough that appliances have been under water more than once.',
      'On a condominium the meter arrangement and any shared risers are building infrastructure, so a resident owns none of it and the useful first call is to management. The distinction decides who can authorise work before anything else can happen, and it is worth settling on the phone. Where appliances have been submerged, the control valves are replaced rather than dried out regardless of which housing type it is.',
    ],
    commonIntro:
      "In the East End's mix of river cottages and newer condominiums, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'I own an East End condo with a gas range and no gas. Where do I start?',
        a: 'With your association or building manager, because the meter arrangement and any shared risers are common elements. If the rest of the building has gas and only your unit does not, the fault is more likely on the branch serving you — still worth reporting to management first, since they may already have someone engaged, but that case is usually yours and faster to resolve.',
      },
    ],
  },

  'north-fairmount': {
    intro:
      'Gas shut off at your North Fairmount home? Piping that was never touched is furthest behind. Call (513) 586-5107.',
    relevance: [
      'North Fairmount (ZIP 45225) is a small hillside neighborhood of older early-1900s houses above the Mill Creek valley, and a good number have been in the same hands a long time. A gas system that has never needed attention is also a system that has never been brought forward, and it can be decades behind current requirements while working perfectly well.',
      'The trigger for a shutoff is usually external rather than a failure — a utility technician replacing a meter, an appliance finally red-tagged, a survey before a sale. What they find is original black iron altered in stages, capped lines from appliances long gone, and joints that have been through decades of basement damp. None of that is a judgement on the house; it is the gap between the standard when it went in and the standard applied today.',
    ],
    commonIntro:
      "In North Fairmount's long-held early-1900s houses, where piping has often never been touched, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Our North Fairmount gas has been fine for forty years. Why is it a problem now?',
        a: 'Because "fine" and "passes a pressure test" are different things. A system can supply appliances reliably for decades while a capped line weeps slowly or a joint has thinned, and neither shows up until someone puts a gauge on it. A technician replacing a meter or an inspector clearing a tag applies today’s test rather than the one in force when it was installed.',
      },
    ],
  },

  evanston: {
    intro:
      'Gas shut off at your Evanston property? Divided houses have branched house lines. Call (513) 586-5107.',
    relevance: [
      'Evanston (ZIP 45207) sits next to Xavier University in early-1900s houses and apartment buildings, and a great many of the houses were divided into units over the decades. Each division usually meant branching the gas to serve a new kitchen, and a good deal of that work was never permitted or tested — it worked, so nobody looked at it.',
      'A pressure test looks at all of it. That is why an Evanston shutoff often turns out larger than the fault that triggered it. The other local factor is ownership: on the owner-occupied houses the decision to proceed is made by whoever is standing in the driveway, while on the rental next door a tenant cannot authorise anything and the same problem can sit for days.',
    ],
    commonIntro:
      "Across Evanston's divided early-1900s houses near Xavier, where the gas was branched for each conversion, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'I own my Evanston house. Can I get seen sooner than the rentals nearby?',
        a: 'Realistically yes, though not because we prioritise owners. You can authorise the work and the permit on the first call and a tenant cannot, so the delay on rental property is usually waiting for an owner to respond rather than anything about the repair. If you own the house, calling early is the thing most within your control.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Gas shut off at your South Cumminsville home? Valley basements put appliances where water reaches. Call (513) 586-5107.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small neighborhood of older homes set among industrial corridors in the Mill Creek valley, and the valley is the recurring cause of gas shutoffs. Furnaces and water heaters sit in low basements, water reaches them, and where a gas appliance has been submerged the control valve and burner controls are replaced rather than dried out and relit.',
      'The piping still has to pass a pressure test regardless of which appliances were replaced, and on housing of this age that is not a formality — original black iron altered in stages, with capped lines from appliances long removed. We look at both the appliances and the piping in one visit rather than dealing with the obvious problem and returning for the other.',
    ],
    commonIntro:
      "In South Cumminsville's older homes among the valley's industrial corridors, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My South Cumminsville water heater has flooded before. Can it be raised?',
        a: 'Sometimes, and it is worth asking during a replacement rather than after the next flood. The constraint is venting — a unit can only go so high before the flue run stops working properly. Where a proper platform above the historic water line is achievable it ends a recurring expense. Where it is not, we will say so rather than build something that creates a different problem.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Gas shut off at your English Woods home? Redevelopment left new and old systems together. Call (513) 586-5107.',
    relevance: [
      'English Woods (ZIP 45225) is a hilltop neighborhood above the Mill Creek valley that has seen substantial redevelopment, and that produces two very different gas shutoffs on the same streets. Newer construction has modern piping — frequently CSST — modern appliances and clean documentation, so a shutoff there is usually about one identifiable thing.',
      'What remains of the older housing is the opposite: original black iron altered over decades, capped lines from removed appliances, and joints that have been through years of basement damp. The same pressure test reaches a different conclusion on the two. We establish which you have before quoting, because the scope and the cost are not comparable and it would be unhelpful to imply otherwise.',
    ],
    commonIntro:
      "Across English Woods' redeveloped and older housing on the hilltop, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'My English Woods home is newly built. Why would the gas be shut off?',
        a: 'On new construction it is usually something specific rather than the whole system — a fault at one connection, an appliance issue, or CSST bonding that was not completed. That is a smaller job than on the older housing nearby, and worth establishing before anyone quotes you for work on a system that is largely fine.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Gas shut off at your North Avondale home? Large houses mean extensive systems. Call (513) 586-5107.',
    relevance: [
      'North Avondale (ZIP 45229) is grand early-1900s houses on large, tree-shaded lots near Rockdale Avenue, and the gas systems in houses of that scale are genuinely extensive. A furnace, sometimes two zones, a water heater, a range, and frequently gas fireplaces added at some point — every one is a branch, and a pressure test checks all of them together.',
      'These houses also date from an era when they were lit by gas, so there may be capped lighting runs still connected behind original plaster. Diagnosing a shutoff means isolating and testing in sections rather than looking for one obvious fault, and it takes longer on a house this size than on a modest one. Where a run has to be replaced, the routing needs planning so it does not cross rooms nobody wants opened.',
    ],
    commonIntro:
      "In North Avondale's grand houses with extensive gas systems, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Why does diagnosing our North Avondale gas problem take longer than our neighbour’s smaller house?',
        a: 'Because there is more system to test. A house with two heating zones, a water heater, a range and gas fireplaces has several times the joints of a modest house with two appliances — and on a house of this age there may be capped gas-lighting runs still in the walls. We isolate and test in sections, which is the only reliable method and genuinely takes longer.',
      },
    ],
  },

  millvale: {
    intro:
      'Gas shut off at your Millvale home? Low valley ground puts appliances where water reaches. Call (513) 586-5107.',
    relevance: [
      'Millvale (ZIP 45225) is a small, compact residential neighborhood on low ground in the Mill Creek valley, and the recurring cause of gas shutoffs here is water rather than wear. Furnaces and water heaters sit in low basements, and where a gas appliance has been submerged the control valve is replaced rather than dried out — water damages it internally with no outward sign.',
      'Because the neighborhood is compact and uniformly low, that tends to affect several houses at once rather than one unlucky property. Where neighbouring houses each need an appliance replaced and a system tested, having one plumber handle them together means shared setup and permits filed as a batch, which in a small inspection queue can save several days without changing what anyone pays.',
    ],
    commonIntro:
      "In Millvale's compact housing on low valley ground, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Several Millvale houses on my street lost gas after the same flooding. Can that be coordinated?',
        a: 'Very much so, and it helps everyone. Where neighbouring houses each need an appliance replaced and the piping tested, one plumber handling them together means shared setup, permits filed as a batch, and the inspector seeing several properties in one visit. It does not change what each owner pays for their own work and it can save days.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Gas shut off at your Paddock Hills home? Mid-century piping feeding much newer appliances. Call (513) 586-5107.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small pocket of early- and mid-1900s homes near Paddock Road, and the gas systems split by era. The older houses carry black iron installed in stages, with the usual accumulated history. The mid-century houses have simpler runs, sized for the appliances of their day, now feeding equipment several generations newer.',
      'That sizing point matters more than people expect. A run adequate for a 1955 furnace and a water heater may not deliver enough for a modern furnace, a tankless heater and a range drawing at once — which shows up as appliances behaving badly rather than as a leak. It needs measuring rather than guessing, and where it applies the repair is upsizing the run rather than chasing a fault that is not there.',
    ],
    commonIntro:
      "Across Paddock Hills' early- and mid-1900s homes, on piping sized for a different era, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Could my Paddock Hills gas problem be the pipe size rather than a leak?',
        a: 'It could, and it is worth measuring rather than assuming. A run sized for a 1950s furnace and water heater may not supply a modern furnace, a tankless heater and a range at the same time — pressure drops when several draw together and appliances misbehave with nothing leaking. Where that is the finding, the fix is upsizing the run.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Gas shut off at your Spring Grove Village home? Valley basements and older piping both feature. Call (513) 586-5107.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic cemetery and arboretum, with older homes mixed among industry. The valley is the recurring factor: gas appliances in low basements, water reaching them, and control valves replaced rather than dried out where they have been submerged.',
      'The industrial mix means some properties sit on infrastructure shared with commercial premises, though that changes nothing about the ownership split — the house piping beyond the meter is yours, and the utility will not restore gas until it passes a pressure test. On housing of this age that test finds original black iron altered over decades, and frequently capped lines from appliances removed long ago.',
    ],
    commonIntro:
      "In Spring Grove Village's older homes among valley industry, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'My Spring Grove Village furnace was under water. Is replacement certain?',
        a: 'For the gas controls, yes. The control valve and burner controls are damaged internally by water with no outward sign, and manufacturers are explicit that submerged gas controls are replaced rather than dried. Whether the whole appliance goes depends on its age and condition, and we will give you a straight answer on that rather than defaulting to the bigger job.',
      },
    ],
  },

  linwood: {
    intro:
      'Gas shut off at your Linwood home? River bottomland puts appliances where water reaches. Call (513) 586-5107.',
    relevance: [
      'Linwood (ZIP 45226) is a small east-side neighborhood along Eastern Avenue near Lunken Airport, on the river bottoms, and the two causes of a gas shutoff here both follow from that. Low, flat ground next to the river means water reaches the lowest part of the house, which is where the furnace and water heater sit — and submerged gas controls are replaced rather than dried out.',
      'The second is age. These are older houses, many long-held, with piping that has not been touched because nothing ever went wrong. That is exactly the system that turns out to be furthest behind when someone finally tests it: original black iron, capped lines from appliances long gone, and joints that have been through decades of damp. Neither cause is a judgement on the house.',
    ],
    commonIntro:
      "In Linwood's older homes on the river bottomland near Lunken, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'The water only came up a few inches in my Linwood basement. Does the furnace still need work?',
        a: 'It depends whether the water reached the gas controls, and that is worth checking rather than assuming either way. Controls mounted low on the appliance can be affected by surprisingly little water. If they were reached, they are replaced. If the water stayed below them, the appliance may be fine — and we would rather tell you that than replace something unnecessarily.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Gas shut off at your Bond Hill home? Piping replaced in the 1960s is now the old part. Call (513) 586-5107.',
    relevance: [
      'Bond Hill (ZIP 45237) is established housing along Reading Road, and there is a pattern worth naming. A good deal of the gas piping here is not original — it was reworked once, in the 1960s or 70s, when the houses were modernised and central heating went in. That felt like a permanent fix at the time.',
      'Fifty years on, that second-generation work is itself the aging part of the system, and it is what a pressure test now finds. The era also means capped lines are common, because modernising a house meant removing space heaters and old cooking connections — and those were capped rather than taken out. Once located, that is a contained repair rather than a re-pipe, which is worth knowing before anyone quotes for the latter.',
    ],
    commonIntro:
      "Across Bond Hill's homes on second-generation 1960s piping, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Our Bond Hill gas piping was redone decades ago. Does that not count as modern?',
        a: 'Not any more. Work done in the 1960s or 70s is now fifty years old itself, and the modernisation that put central heating in usually capped old space-heater and cooking lines rather than removing them. Those caps are the common finding on a pressure test here. Once located it is a contained repair, not a re-pipe.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Gas shut off at Villages of Roll Hill? The system belongs to the property, not any resident. Call (513) 586-5107.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a hilltop community made up largely of multi-unit apartment buildings, and essentially none of the gas system belongs to a resident. The meter arrangements, the house lines and the distribution serving each building are the property’s, so a shutoff is authorised and paid for by the owner or management and a resident cannot start the process by calling a plumber.',
      'The scale is the other factor. Where one system serves many units, a pressure test covers all of it and every household is off until it passes — so the repair is larger than a single house but considerably cheaper handled as one job than piecemeal. What residents can usefully do is report accurately: how many units are affected, and whether it is one building or several.',
    ],
    commonIntro:
      "Across Villages of Roll Hill's apartment buildings, where one system serves many units, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'I rent at Roll Hill and there is no hot water. What can I do?',
        a: 'Report it to the property office rather than calling a plumber, and tell them how many units are affected and whether other buildings are out too. The meter arrangements and house lines belong to the property, so only management can authorise the repair and the permit. We are happy to deal with them directly once they call.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Gas shut off at your East Westwood home? Modest houses on small original piping. Call (513) 586-5107.',
    relevance: [
      'East Westwood (ZIP 45211) is early- and mid-1900s housing on the slopes between Westwood and the Mill Creek valley, and the houses are modest. The gas piping they were given was modest too — sized for a cooker and a heater — and a great many runs are still close to the original.',
      'Where a house has since gained a modern furnace, a water heater and a range, the question at a shutoff is whether the problem is a leak or simply a run that cannot deliver what everything drawing at once demands. Those need different answers, and telling them apart requires measuring rather than assuming. We test and measure before quoting so the number covers the actual problem rather than the one that was easiest to guess at.',
    ],
    commonIntro:
      "Across East Westwood's modest early- and mid-1900s homes on largely original piping, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'How do you tell a leak from undersized pipe in an East Westwood house?',
        a: 'A pressure test tells you whether the system holds — that answers the leak question. Sizing is a separate measurement: we check the pressure at appliances with several drawing at once and compare it against what they need. A system can hold pressure perfectly and still be too small, and the two problems need different repairs.',
      },
    ],
  },
};
