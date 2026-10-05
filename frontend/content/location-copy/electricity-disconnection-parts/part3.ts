import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 3 — the northern suburbs, the Mill Creek valley, and the smaller
// west-side pockets. Introduces the aluminium branch wiring problem, which
// affects houses wired roughly 1965 to 1973.
export const part3: Record<string, LocationServiceCopy> = {
  mason: {
    intro:
      'Power disconnected at your Mason home? Warren County issues the permit, not Hamilton. We repair, inspect and reconnect. Call (513) 586-5107.',
    relevance: [
      'Mason (ZIP 45040) is mostly subdivisions from the 1990s onward around an older town center, and the first practical point is jurisdictional: permits and inspections go through Warren County rather than Hamilton County or the city of Cincinnati. An electrician who works mostly in town can file out of habit with the wrong authority, and the utility will be waiting for the correct sign-off before reconnecting.',
      'The housing itself is now old enough to matter. A subdivision built in 1995 has a panel that is thirty years old, and thirty years is when breakers start to behave inconsistently and when the load a family puts on a house has changed beyond what anyone planned for. Disconnections on these streets are less about decayed old equipment and more about capacity and specific faults — which is a cheaper conversation, but still one that needs a permit and an inspection.',
    ],
    commonIntro:
      "Across Mason's 1990s subdivisions and its older town center, in Warren County, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Mason house is only from the 1990s. Why would the service be refused?',
        a: 'Age is not the only test. A thirty-year-old panel can have breakers that no longer trip reliably, corrosion at the meter base, or a load that has grown well past what the original service was calculated for — particularly where air conditioning has been upgraded or a car charger added. Any of those can stop a technician re-energising it, and it is usually a smaller repair than on a century-old house.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Power disconnected at your West Chester home? Adding a car charger to a 1990s service is a common cause. Call (513) 586-5107.',
    relevance: [
      'West Chester (ZIP 45069) is largely subdivisions built from the 1990s onward, and the most common reason we are called here has arrived only in the last few years: electric vehicle charging. A Level 2 charger is a substantial continuous load, and on a service that was calculated for a 1990s household it can push the total past what the panel and the service were sized to carry.',
      'Where a charger has been fitted without a proper load calculation — and plenty have — the result is a service running at its ceiling, heat at the connections, and eventually a technician or an inspector who will not sign it off. That is the disconnection. The fix is a load calculation first and then either a service upgrade or a managed circuit, rather than replacing the damaged part and repeating the problem. Permits go through the township and Butler County.',
    ],
    commonIntro:
      "Across West Chester's newer subdivisions, where modern loads have been added to 1990s services, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'We added a car charger to our West Chester house and now the service has been condemned. Why?',
        a: 'A Level 2 charger draws a large continuous load, and if it was fitted without a load calculation it may have pushed the whole service past what it was sized for. Running at the ceiling for months shows up as heat at the connections, which is what stops a reconnection. The proper fix starts with a load calculation, then either an uprated service or a managed circuit that limits charging when the rest of the house is drawing hard.',
      },
    ],
  },

  pendleton: {
    intro:
      'Power disconnected in your Pendleton building? Converted commercial services were never sized for homes. Call (513) 586-5107.',
    relevance: [
      'Pendleton (ZIP 45202) is a small arts district of restored 19th-century buildings converted into lofts and condominiums, and the conversions are the point. A building that was a workshop, a warehouse or a storefront was given a service to suit that use, and turning it into residential units multiplies the number of separate supplies hanging off it without necessarily uprating the entrance.',
      'That is what surfaces when a disconnection happens here. Not a single fault but a service doing a job it was never designed for, with a meter stack added at some point and distribution that grew piecemeal. Because the entrance and the stack are common elements belonging to the building rather than to any unit owner, the repair needs the association or owner to authorise it — which is the first thing to establish rather than the last.',
    ],
    commonIntro:
      "In Pendleton's converted commercial buildings, where a workshop service now feeds homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Pendleton loft is in a converted building and the power is off. Who arranges the repair?',
        a: 'Your association or building manager, before us. The service entrance and meter stack are almost always common elements, so the repair is the building’s to authorise and pay for. Once they are ready we handle the repair, the permit and the reconnect. If the fault is inside your own unit, that part is yours and we can deal with it directly.',
      },
    ],
  },

  queensgate: {
    intro:
      'Electrical service disconnected on a Queensgate property? We handle smaller commercial and say so plainly when yours needs more. Call (513) 586-5107.',
    relevance: [
      'Queensgate (ZIP 45203) is largely commercial and industrial — warehouses, offices and light-industrial buildings near the rail yards and the Mill Creek. Disconnections here are a different animal from residential ones. Commercial buildings commonly run three-phase service with switchgear rather than a mast, meter and panel, and the inspection requirements, the disconnect procedure and the equipment are all heavier.',
      'We are straightforward about where our line is. Smaller commercial services — a light-industrial unit, an office, a small warehouse — are work we do, permits and inspections included. A large three-phase installation with primary metering or a utility transformer on site is a specialist contractor’s job, and sending us to look at it wastes your time. Describe the building and the service on the phone and we will tell you honestly whether we are the right call.',
    ],
    commonIntro:
      "Across Queensgate's warehouses and light-industrial buildings, the electrical disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you get a Queensgate warehouse reconnected?',
        a: 'It depends on the size of the service, and we would rather establish that on the phone than after driving out. Single-phase and smaller three-phase services on light-industrial units and offices are routine work for us. Large three-phase installations with primary metering or a transformer on site need a specialist contractor, and we will say so rather than charge you for the visit to find out.',
      },
    ],
  },

  cuf: {
    intro:
      'Power disconnected in your CUF building? One entrance often feeds a dozen meters. The owner authorises it. Call (513) 586-5107.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview, packed against the University of Cincinnati, and the housing has been subdivided about as far as it can go. It is common here for one original service entrance to feed ten or more separate meters on a house that was built for a single family — and every one of those tenancies goes dark together when the service fails.',
      'A service carrying that many households, continuously, for decades, is the most reliably overloaded equipment we deal with anywhere in the city. Heat damage at the bank is the usual finding, and replacing a bank of that size is a substantial job rather than a socket swap. It also needs the building owner, who is frequently not local, and on the steeper Fairview streets it needs planning for access before anything is scheduled.',
    ],
    commonIntro:
      "Across CUF's heavily subdivided houses near the university, where one entrance can feed a dozen meters, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Our whole CUF building lost power. Is that one repair for all the units?',
        a: 'Usually one repair, and often a large one. Where a single entrance and meter bank feed all the tenancies, that assembly is treated as one piece of equipment — so every unit comes off and goes back together on one permit and one inspection. On a bank serving ten or more meters the parts are frequently obsolete, which means replacing the assembly rather than a component. Only the building owner can authorise it.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Power disconnected at your Camp Washington home? Worker-cottage services were small when new. Call (513) 586-5107.',
    relevance: [
      'Camp Washington (ZIP 45225) is a working neighborhood in the Mill Creek valley, a tight mix of old worker housing and factories, and the houses are small — compact cottages and modest frame homes built for factory workers. The electrical services they were given were correspondingly small, and a great many are still close to what was installed.',
      'That produces a specific disconnection: a service that was adequate for a house with a few lights and is now carrying a modern kitchen, window units or central air, and heating controls. It fails at the connections rather than at the breakers, and a technician who finds heat damage will not re-energise it. The valley adds a second cause — panels in low basements that have been under water, which are replaced rather than dried out.',
    ],
    commonIntro:
      "In Camp Washington's compact worker housing on low valley ground, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'My Camp Washington house is small — surely it does not need a big service?',
        a: 'Size of house and size of load are different things. A small cottage with central air, a modern kitchen and a couple of window units draws far more than the same house did in 1930, and the original service was sized for 1930. That is why these houses show heat damage at the connections. What matters is what you actually run, not the square footage.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Power disconnected in South Fairmount? Some services here are new since the Lick Run rebuild, others are not. Call (513) 586-5107.',
    relevance: [
      'South Fairmount (ZIP 45205) was substantially rebuilt around the Lick Run Greenway, the stormwater project undertaken because this valley flooded for generations, and that leaves an unusually mixed picture. Properties affected by the rebuild frequently have newer services and clean documentation. Houses that were not have services as old as anything on the west side, and the two sit on the same streets.',
      'So the answer to a disconnection here genuinely depends on which category your house is in, and it is worth establishing before quoting rather than assuming. Where the service is older the usual findings apply: heat damage, grounding that predates current requirements, a panel with nothing left. Where the house still sits low, a panel that has been under water is replaced rather than dried out, whatever the Greenway has done for surface water.',
    ],
    commonIntro:
      "In South Fairmount, where the Lick Run rebuild left new and old services on the same streets, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Does the Lick Run project mean my South Fairmount service was upgraded?',
        a: 'Only if your property was part of the work. The Greenway changed how the valley handles surface water and brought newer infrastructure to some properties, but plenty of houses here were untouched and still have their original services. We check what you actually have rather than assuming the rebuild covered it.',
      },
    ],
  },

  'east-end': {
    intro:
      'Power disconnected in the East End? Cottages and condos have completely different answers. Call (513) 586-5107.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront strip along Eastern Avenue with historic river cottages and newer condominiums wedged between the hillside and the Ohio, and those two housing types produce opposite conversations. On a cottage the service is the homeowner’s, frequently original, small, and low enough that water has reached the panel more than once. On a condominium the service is building infrastructure and the resident owns none of it.',
      'That means the first question here is not what failed but who owns it. A cottage owner can authorise work on the phone. A condominium resident needs to go to their association, and an individual owner commissioning work on shared equipment creates problems later. We establish which situation applies before quoting, because getting that wrong wastes a day at the point where days matter.',
    ],
    commonIntro:
      "In the East End's mix of river cottages and newer condominiums, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'I own an East End condo and my unit has no power. Where do I start?',
        a: 'With your association or building manager. In a condominium the service entrance and meter equipment are common elements, so the repair is the building’s to authorise. If the building has power and only your unit does not, the fault is more likely inside your unit or in the feed to it — still worth reporting to management first, because they may already have a contractor engaged.',
      },
    ],
  },

  'north-fairmount': {
    intro:
      'Power disconnected at your North Fairmount home? Services that were never touched are the ones furthest behind. Call (513) 586-5107.',
    relevance: [
      'North Fairmount (ZIP 45225) is a small hillside neighborhood of older early-1900s houses above the Mill Creek valley, and a good number have been in the same hands for a very long time. That sounds like a good thing and is, until someone examines the electrical service. A service that has never needed attention is also a service that has never been brought forward, and it can be decades behind current requirements while working perfectly.',
      'The trigger is external rather than a failure: a utility technician replacing a meter, a survey before a sale, an insurer asking questions. What they find is grounding that predates modern standards, a fuse panel, or corrosion inside the meter base — and the reconnection stops there. It is worth knowing that this is not a judgement on the house. It is the difference between the standard when it was installed and the standard applied today.',
    ],
    commonIntro:
      "In North Fairmount's long-held early-1900s houses, where services have often never been touched, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Our North Fairmount service has worked fine for forty years. Why refuse it now?',
        a: 'Because working and meeting current requirements are different tests. Grounding that predates modern standards, a fuse panel, or corrosion inside the meter base can all coexist with a service that has never tripped anything. When a technician replaces a meter or an inspector clears a tag, they apply today’s standard rather than the one in force when it was installed.',
      },
    ],
  },

  evanston: {
    intro:
      'Power disconnected at your Evanston property? Sub-panels added for converted units are a common finding. Call (513) 586-5107.',
    relevance: [
      'Evanston (ZIP 45207) sits next to Xavier University in early-1900s houses and apartment buildings, and a great many of the houses were divided into units over the decades. Each division usually meant a sub-panel and a set of circuits added to serve the new tenancy, and a good deal of that work was never permitted or inspected — it simply worked, so nobody looked.',
      'It gets looked at when a disconnection has to be cleared. An inspector examining the service finds sub-panels without proper bonding, circuits shared between what are now separate households, or a service feeding more units than it was ever calculated for. That is why an Evanston disconnection frequently turns out to be a larger job than the original fault suggested, and why establishing the scope at the estimate matters more here than in a single-family neighborhood.',
    ],
    commonIntro:
      "Across Evanston's divided early-1900s houses near Xavier, where sub-panels were added as units were created, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'The inspector found sub-panels in my Evanston house that I did not know about. What now?',
        a: 'It is a common finding on divided houses, and it does not automatically mean tearing everything out. What matters is whether the sub-panels are properly fed and bonded, whether circuits are shared between separate households, and whether the main service was ever calculated for the number of units. We will tell you which of those apply and what genuinely has to change to clear the tag.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Power disconnected at your South Cumminsville home? Valley panels and industrial neighbours shape the job. Call (513) 586-5107.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small neighborhood of older homes set among industrial corridors in the Mill Creek valley, and both halves of that description matter. The circuits through here carry industrial as well as residential load, so restoration priorities and the technicians who attend are not always the same as on a purely residential street.',
      'The valley supplies the more common cause. Low ground means basements take water, panels are nearly always in basements, and a panel that has stood in water is replaced rather than dried out — water reaches behind the bus bars and into the breakers and corrosion continues after everything looks dry. An inspector checks for exactly that before the meter goes back in, so on these streets we assess the panel as a matter of course rather than only the entrance.',
    ],
    commonIntro:
      "In South Cumminsville's older homes among the valley's industrial corridors, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My South Cumminsville basement floods and the panel has been replaced before. Can it be moved?',
        a: 'Sometimes, and it is worth asking during a replacement rather than after the next flood. What constrains it is the position of the service entrance and the length of the run to the meter. Where those allow it, moving the panel higher or into another room ends the cycle. Where they do not, we will say so rather than quoting for something that will not work.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Power disconnected at your English Woods home? Redevelopment means new and old services side by side. Call (513) 586-5107.',
    relevance: [
      'English Woods (ZIP 45225) is a hilltop neighborhood above the Mill Creek valley that has seen substantial redevelopment, and that produces two very different disconnections on the same streets. Newer construction has a modern panel, adequate capacity and clean documentation, so a disconnection there is usually about one identifiable thing — a damaged meter base, a fault found during other work, or an inspection on a property that has been empty.',
      'What remains of the older housing is the opposite: services that may be original, grounding that predates current requirements, and panels with nothing left in them. The same utility technician applying the same standard reaches a different conclusion on the two. We establish which you have before quoting, because the scope and the cost are not comparable and it is unhelpful to imply otherwise.',
    ],
    commonIntro:
      "Across English Woods' redeveloped and older housing on the hilltop, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My English Woods home is newly built. Why has the power been disconnected?',
        a: 'On new construction it is usually something specific rather than the whole service — a damaged meter base, a fault found during other work, or an inspection required because the property stood empty for a period. That is a smaller job than on older housing nearby, and worth establishing before anyone quotes you for a service replacement you may not need.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Power disconnected at your North Avondale home? Large houses, long runs, and a service sized a century ago. Call (513) 586-5107.',
    relevance: [
      'North Avondale (ZIP 45229) is grand early-1900s houses on large, tree-shaded lots near Rockdale Avenue, and the size of both the houses and the lots matters. A house set well back from the street has a long service run to it, and a house of this scale now carries multiple heating and cooling zones, a finished lower level, a serious kitchen and often car charging — on a service that was generous when it was installed and is marginal now.',
      'Run near its ceiling for years, it degrades at the connections rather than failing outright, and heat damage at the meter socket is what a technician refuses to re-energise. On houses of this character the repair also has to be sympathetic: a properly sized modern service still has to be routed and mounted on a building people have spent money preserving. We plan that before starting rather than improvising on the day.',
    ],
    commonIntro:
      "In North Avondale's grand houses on large lots, where modern loads sit on century-old services, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Can my North Avondale service be uprated without it looking wrong on the house?',
        a: 'Usually, and it is a fair thing to insist on. A properly sized service needs a bigger entrance and a modern meter base, but the route, the fixings and the position are choices rather than givens. We plan them before starting, reuse sound existing penetrations where they exist, and will tell you if the sympathetic option is not achievable on your wall.',
      },
    ],
  },

  millvale: {
    intro:
      'Power disconnected at your Millvale home? Low valley ground puts panels where water reaches them. Call (513) 586-5107.',
    relevance: [
      'Millvale (ZIP 45225) is a small, compact residential neighborhood on low ground in the Mill Creek valley, and the recurring cause of disconnections here is water rather than wear. Panels sit in low basements, water reaches them, and the utility will not re-energise a panel that has been submerged. That is settled before the argument starts: water gets behind the bus bars and into the breakers, and corrosion continues long after the surface dries.',
      'Because the neighborhood is compact and uniformly low, this tends to affect several houses at once rather than one unlucky property — which means neighbours competing for the same inspection slots. Calling early genuinely helps. Where a panel has been replaced once for the same reason, the more useful question is whether it can be relocated higher rather than renewed in the same position.',
    ],
    commonIntro:
      "In Millvale's compact housing on low valley ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Several houses on my Millvale street were disconnected after the same flooding. Does that slow things down?',
        a: 'It can, because everyone needs the same inspection slots. It also creates an opportunity: where neighbouring houses each need a panel replaced, one electrician handling them together means shared setup, permits filed as a batch, and the inspector seeing several properties in one visit. It does not change what each owner pays for their own equipment, and it can save days.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Power disconnected at your Paddock Hills home? Houses wired in the late 1960s may have aluminium branch circuits. Call (513) 586-5107.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small pocket of early- and mid-1900s homes near Paddock Road, and the later houses fall into a period worth knowing about. Homes wired roughly between 1965 and 1973 were often given aluminium branch circuit wiring, which behaves differently from copper at the terminations — it expands and contracts more, and connections can loosen and overheat over time.',
      'That matters for disconnections and for insurance. An inspector or a technician who identifies aluminium branch wiring will look closely at the terminations, and insurers frequently ask about it. The remedy is not usually a whole rewire: properly rated connectors at the terminations, done thoroughly, is the recognised approach. What causes trouble is aluminium terminated into devices never rated for it, which is common where circuits have been altered over the years.',
    ],
    commonIntro:
      "Across Paddock Hills' early- and mid-1900s homes, including houses from the aluminium wiring era, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I have been told my Paddock Hills house has aluminium wiring. Does it all have to come out?',
        a: 'Usually not. Aluminium branch wiring from roughly 1965 to 1973 is a termination problem rather than a wire problem — the metal moves more than copper, so connections can loosen and overheat. The recognised remedy is properly rated connectors at every termination rather than a full rewire. What genuinely needs attention is aluminium terminated into devices not rated for it, which turns up wherever circuits have been altered.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Power disconnected at your Spring Grove Village home? Valley panels and industrial neighbours both feature. Call (513) 586-5107.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic cemetery and arboretum, with older homes mixed among industry. The valley is the recurring factor: low ground, panels in low basements, and water reaching equipment that then has to be replaced rather than dried out. An inspector will look specifically for signs of submersion before the meter goes back in.',
      'The industrial mix adds a second thread. Circuits here carry commercial and industrial load alongside houses, and where a residential property sits on the same infrastructure the technicians who attend and the priorities they work to are not always the residential ones. None of that changes the ownership split — the mast, meter box and panel are yours, and the utility will not reconnect to them until a licensed repair has been inspected.',
    ],
    commonIntro:
      "In Spring Grove Village's older homes among valley industry, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'My Spring Grove Village panel was under water. Is replacement really necessary?',
        a: 'Yes. Water reaches the breakers and the bus behind the panel face, and corrosion continues after everything looks and feels dry — which is why submerged panels are replaced rather than dried and re-approved. An inspector will look for the signs before the utility reconnects. If your panel sits low and this has happened before, ask about relocating it while we are there.',
      },
    ],
  },

  linwood: {
    intro:
      'Power disconnected at your Linwood home? River bottomland means panels where water reaches them. Call (513) 586-5107.',
    relevance: [
      'Linwood (ZIP 45226) is a small east-side neighborhood along Eastern Avenue near Lunken Airport, on the river bottoms, and the two causes of disconnection here both follow from that position. Low, flat ground next to the river means water reaches the lowest part of the house, which is where the panel usually is — and a submerged panel is replaced rather than dried out, whatever it looks like once the water has gone.',
      'The second is age. These are older houses, many long-held, with services that have not been touched because nothing ever went wrong. That is exactly the service that turns out to be furthest behind current requirements when a technician replacing a meter finally examines it. Grounding that predates modern standards and corrosion inside the meter base are the usual findings, and neither is a judgement on the house.',
    ],
    commonIntro:
      "In Linwood's older homes on the river bottomland near Lunken, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Can I get my Linwood panel back on if it only got damp rather than submerged?',
        a: 'It depends what "damp" means and an inspector will make that call rather than us. Condensation on the outside of an enclosure is different from water inside it. If water reached the breakers or the bus, it is a replacement. We would rather look at it and tell you honestly than encourage you to hope, because a panel that gets re-energised when it should not be is a fire risk rather than a saving.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Power disconnected at your Bond Hill home? Services replaced in the 1960s are now the problem. Call (513) 586-5107.',
    relevance: [
      'Bond Hill (ZIP 45237) is established housing along Reading Road, and there is a pattern here that catches people out. A great many services in this neighborhood are not original — they were replaced once, in the 1960s or 70s, when the houses were modernised. That felt like a permanent fix. Fifty years on, that replacement equipment is itself obsolete, and it is what disconnections now turn on.',
      'The era matters for a second reason. Houses wired or rewired roughly between 1965 and 1973 frequently have aluminium branch circuits, which loosen and overheat at the terminations in a way copper does not. Where a 1960s panel and aluminium branch wiring appear together — and in this neighborhood they often do — an inspector clearing a tag will look at both. The remedy for the wiring is usually properly rated connectors rather than a full rewire.',
    ],
    commonIntro:
      "Across Bond Hill's homes on second-generation 1960s services, some with aluminium branch wiring, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Bond Hill service was replaced decades ago. Does that not count as modern?',
        a: 'Not any more. A service fitted in the 1960s or 70s is now fifty years old itself and was sized for the loads of that era, not for central air, a heat pump or a car charger. It is better than the original would have been, and it is not modern. If the house was also wired in that period, aluminium branch circuits may be part of the picture, and an inspector will look at the terminations.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Power disconnected at Villages of Roll Hill? The service equipment belongs to the property, not any resident. Call (513) 586-5107.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a hilltop community made up largely of multi-unit apartment buildings, and essentially none of the electrical service equipment belongs to a resident. The entrances, the meter banks and the distribution feeding each building are the property’s, so a disconnection is authorised and paid for by the owner or management, and a resident cannot start the process by calling an electrician.',
      'The scale is the other factor. Where a building runs a bank serving many units, the parts are frequently obsolete and the enclosure is as old as the parts — so clearing a disconnection means replacing the assembly rather than a component, and every household on that bank comes off and goes back together. That is a bigger job than a single service, and it is considerably cheaper handled as one than piecemeal.',
    ],
    commonIntro:
      "Across Villages of Roll Hill's apartment buildings, where meter banks serve many units, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I rent at Roll Hill and my building has no power. What can I actually do?',
        a: 'Report it to the property office rather than calling an electrician, and tell them whether other buildings are also affected. The entrances and meter banks belong to the property, so only management can authorise the repair and sign for the permit. We are happy to deal with them directly once they call, and a single point of contact for the site is much faster than several separate ones.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Power disconnected at your East Westwood home? Modest houses on small original services. Call (513) 586-5107.',
    relevance: [
      'East Westwood (ZIP 45211) is early- and mid-1900s housing on the slopes between Westwood and the Mill Creek valley, and the houses are modest. That matters because the services they were given were modest too, and a great many are still close to the original — adequate for the house as built, and carrying rather more than that now.',
      'When a technician or an inspector declines to re-energise one, the underlying question is whether to refit the same capacity or bring the service up to what the house actually draws. The costs that dominate this job are the labour, the permit and the inspection, and those are the same either way, which is what makes the second option worth pricing rather than assuming it is out of reach. We quote both and explain which parts are genuinely worn.',
    ],
    commonIntro:
      "Across East Westwood's modest early- and mid-1900s homes on largely original services, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'Is upgrading the service on a modest East Westwood house worth the money?',
        a: 'Frequently yes, and the reason is the cost structure rather than the equipment. Labour, the permit and the inspection dominate the bill, and they are identical whether we refit the original capacity or install something properly sized. Putting a small original service back on a house that now runs central air and a modern kitchen means paying that same set of costs again before long.',
      },
    ],
  },
};
