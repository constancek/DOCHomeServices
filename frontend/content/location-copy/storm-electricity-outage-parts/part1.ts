import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Per-neighborhood storm outage copy, drafted from each neighborhood's real
// local facts in content/locations.ts — terrain, tree cover, housing age, and
// how the electric service is actually run to those homes.
export const part1: Record<string, LocationServiceCopy> = {
  sedamsville: {
    intro:
      'Street back on but your Sedamsville home still dark? That means the damage is on equipment you own, and Duke will not reconnect until a licensed electrician repairs it. We work the hillside above River Road the same day. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) climbs the hillside above River Road in frame houses built in the late 1800s and early 1900s, and the way power reaches them is the reason storms hit this neighborhood harder than the flat parts of the west side. Service drops here run long spans up the slope, often past mature trees standing above the houses rather than beside them. When a limb comes off that hillside it does not brush the line, it falls onto it with the weight of the grade behind it, and the mast bolted to a century-old frame wall is what gives way first.',
      'That age matters for what we find once we are on a ladder. Service entrances on houses this old were installed for a fraction of the load a modern home draws, and many have been reworked more than once, so the mast, the weatherhead, and the cable behind them are rarely the same vintage or in the same condition. We repair the whole entrance rather than the one obviously broken part, because Duke inspects what they are reconnecting to, and a patched mast on a rotted board fails the same way again in the next storm.',
    ],
    commonIntro:
      "On Sedamsville's hillside streets, where long service drops run up the slope past mature trees, the storm damage we are called out for most often is:",
    localFaqs: [
      {
        q: 'A branch took the wires off the side of my Sedamsville house. Who fixes what?',
        a: 'Duke owns the line coming to the house and the meter. You own the mast it is attached to, the weatherhead on top, the cable running down, and the meter box. On these hillside homes it is almost always the mast and its mounting that fail, because the wall behind it is century-old frame. We rebuild the entrance, get it inspected, and coordinate the reconnect. If the line itself is down across your yard, call 911 and Duke first and stay well away from it.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Storm damage at the meter or mast in Sayler Park? Duke restores the line, but not your equipment — a licensed electrician has to repair that first. We cover Cincinnati’s westernmost neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) was the village of Home City before Cincinnati annexed it, and it still reads that way: tree-lined streets running between rows of Victorian and early-1900s frame houses. Those trees are the whole story during a storm. A canopy that mature, planted along streets laid out more than a century ago, sits directly over the overhead drops, and the limbs that come down in a summer squall land on service equipment rather than in open yards. This is a neighborhood where the outage map can show the area restored while a dozen individual houses stay dark.',
      'The second factor is the riverfront. The low streets sit in the Ohio River floodplain, and when a storm brings both wind and high water, we get called for damage above and below at once — a mast pulled off upstairs and a panel that has been standing in water downstairs. Those are different repairs with different rules: equipment that has been submerged does not get dried out and re-energised, it gets replaced, and an inspector will look for exactly that before Duke puts the meter back.',
    ],
    commonIntro:
      "Under Sayler Park's mature street canopy and along its floodplain streets, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Sayler Park basement took water in the same storm that knocked the power out. Does that change the repair?',
        a: 'Yes, and it is worth saying plainly: electrical equipment that has been submerged is replaced, not dried and reused. Water gets into the breakers and the bus behind the panel face, and corrosion carries on long after the surface looks fine. If your panel or meter base went under, expect that to be part of the job rather than a simple mast repair, and expect an inspector to check it before Duke reconnects.',
      },
    ],
  },

  riverside: {
    intro:
      'Power out at your Riverside home while the rest of River Road is lit? The fault is on your side of the meter. We repair storm-damaged masts, meter bases, and panels along the river the same day. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip running along River Road and US-50 with the hillside on one side and the Ohio River on the other, and that geography concentrates storm damage in a way few Cincinnati neighborhoods match. Wind comes up the river valley with nothing to slow it, and what it brings down comes off the slope directly above the houses. Because the neighborhood is one street deep in places, a single fallen tree can take out the drops to several homes at once, and the queue for repairs afterwards is long.',
      'The other Riverside factor is what sits low. So many homes here are on Ohio River bottomland that panels and service equipment are frequently in basements that flood, and a storm that brings water as well as wind produces both problems in the same house. We would rather look at both together, because there is no sense rebuilding a mast on a house whose panel is going to be condemned by the inspector an hour later.',
    ],
    commonIntro:
      "On Riverside's narrow strip between the hillside and the river, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'How quickly can you get to Riverside after a bad storm?',
        a: 'We staff up when severe weather is forecast, but so does every electrician in the region, and everyone calls the same afternoon. On a street like Riverside, where one tree can take out several drops, the homes that get their power back first are the ones that called first. If you can see damage at the meter or the mast, get in the queue before you finish clearing the yard.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Storm-damaged mast or meter box in East Price Hill? Duke will not reconnect until a licensed electrician repairs it and an inspector signs off. We cover the streets around Warsaw Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, around Warsaw Avenue and the Incline District, and being on the edge of that bluff is what makes storms here different. There is nothing between these streets and the weather coming across the valley, so the wind arrives at full strength rather than broken up by the blocks in front. Service masts on the exposed side of a street take that load directly, and after a hard line of storms we usually find damage clustered along the bluff-facing rows.',
      'The housing compounds it. This is dense early-1900s stock — two- and three-story frame homes and brick two-families built close together on tight lots. Close spacing means a tree in one yard reaches three roofs, and two-family buildings often carry a meter bank rather than a single meter, so one damaged service entrance can leave two households without power and two sets of paperwork to sort out. We establish who owns what before we start, because on a two-family that answer decides who is paying.',
    ],
    commonIntro:
      "Along East Price Hill's exposed bluff streets and its two-family blocks, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'I own half a two-family in East Price Hill and the storm took out the service. Who is responsible?',
        a: 'It depends on how the building is metered and how the deed or condo documents split the common elements. Where there is one service entrance feeding a meter bank, the mast and the bank are usually shared, which means the cost is shared too. Where each unit has its own separate entrance, it falls to whichever one was damaged. We will tell you which arrangement you have before any work starts, so you are not discovering it on the invoice.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Only your West Price Hill house is dark after the storm? That points at your own service equipment, not Duke’s line. We repair masts, weatherheads, and meter bases along Glenway the same day. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) runs out along Glenway Avenue toward Covedale in mostly single-family homes built between the 1920s and the 1950s, and the trees planted when those subdivisions went in are now full-grown and standing directly over the service drops. That is the pattern we see after every serious storm here: not catastrophic damage across the neighborhood, but individual houses losing a mast or a weatherhead to one limb, on streets where everything else is fine. Those are the outages people assume Duke will fix and then wait days for.',
      'The age of the service is the other half. Homes from that era were built with electrical services sized for the loads of the time, and plenty in this neighborhood are still running on their original or first-replacement equipment. When a storm damages a mast on a service that was already undersized and past its life, the sensible repair is often a service upgrade rather than a like-for-like rebuild — you are paying for the labour and the inspection either way, and doing it twice costs far more than doing it once.',
    ],
    commonIntro:
      "Across West Price Hill's mid-century streets, under trees now taller than the houses, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The storm damaged my West Price Hill service and it is still the original panel. Should I upgrade while it is off?',
        a: 'Usually yes, and it is worth being clear about why. The expensive parts of this job are the labour, the permit, and the inspection, and you pay those whether we rebuild what was there or install a properly sized modern service. On a 1950s home still on its original equipment, replacing like for like means paying that same set of costs again in a few years. We will quote both so you can see the difference rather than take our word for it.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Storm damage to the service on your Lower Price Hill rowhouse? We repair masts, entrance cables, and meter banks in the historic blocks around State Avenue, and handle the inspection Duke needs. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) sits at the foot of the hill in the Mill Creek valley near the industrial bottoms around State Avenue, and it holds one of the most intact stretches of 19th-century Italianate brick rowhouses in Cincinnati. Rowhouses change what storm repair looks like. Service entrances are frequently mounted on party walls or run up shared masonry, several meters sit together in a bank, and there is no side yard to work from — so a repair that takes an afternoon on a detached house needs planning, access agreements, and sometimes a conversation with the building next door.',
      'The valley location adds a second problem. When Mill Creek and the river run high after the same storm that brought the wind, water reaches the low basements where panels and meter equipment sit. Anything submerged is replaced rather than dried out, and an inspector will be looking for that. We would rather assess both the entrance above and the panel below in one visit, because on these buildings they are commonly damaged together.',
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century rowhouses down in the valley, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'The meters for several Lower Price Hill units are on one bank and the storm damaged it. What happens?',
        a: 'The whole bank generally has to be repaired or replaced as one piece of equipment, which means the affected units come off together and go back on together. It is worth calling one electrician rather than each owner calling their own — you get one permit, one inspection, and one Duke visit instead of three of each, which is both faster and cheaper. We are happy to deal with a single point of contact for the building.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Storm damage to the electric service on your Over-the-Rhine building? We repair masts, entrance cables, and meter stacks in the historic blocks around Vine Street and Findlay Market. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds block after block of Italianate brick buildings put up between the 1850s and 1880s, most of them now split into apartments and condos. Two things follow from that after a storm. First, service equipment is usually mounted high on a four-storey masonry wall or fed from the alley behind, which means storm damage here is rarely something a homeowner can even see from the street, let alone assess. Second, one building typically carries a stack of meters, so a single damaged service entrance takes several households dark at once.',
      'Ownership is the practical complication in OTR, more than the electrical work. In a converted building, the service entrance and the meter stack are almost always common elements belonging to the building or the association, not to the unit owner whose lights are off. Before we quote anything we establish who actually owns the damaged equipment, because the person who calls us is frequently not the person responsible for the repair, and finding that out after the work is the wrong order.',
    ],
    commonIntro:
      "In Over-the-Rhine's 19th-century buildings and converted multi-units, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'I own a condo in an OTR building and the power is out to my unit only. Who do I call?',
        a: 'Start with your association or building manager rather than us. In a converted building the service entrance and meter stack are nearly always common elements, so the repair is the building’s to authorise and pay for, and an individual owner commissioning work on shared equipment creates problems later. Once the building is ready to proceed we will handle the repair, the permit, and the reconnect. If the fault turns out to be inside your own unit, that part is yours and we can deal with it directly.',
      },
    ],
  },

  downtown: {
    intro:
      'Storm-related power loss in a downtown condo or loft? Most service equipment in these buildings is building-owned, so start with your management — then we handle the repair and the inspection. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) is high-rise condos and converted loft buildings alongside century-old commercial structures, and storm outages behave differently here than anywhere else in the city. The service feeding a tower or a converted warehouse is building infrastructure — a single large service entrance, switchgear, and a stack of meters — so an individual resident essentially never owns the damaged equipment. What a resident notices is that their unit is dark while the building next door is lit, and the useful first call is to management, not to an electrician.',
      'Where we are genuinely needed downtown is on the smaller converted buildings: the early-1900s commercial structures turned residential, where the service entrance is still an original mast on the roof or a cable run up a light well. Those carry the same storm exposure as any older building, and because they were never designed as residential services, storm damage often surfaces problems that have been marginal for years. We repair the entrance, bring the grounding to current code, and get it inspected so Duke can reconnect.',
    ],
    commonIntro:
      "In downtown's condos, lofts, and older commercial conversions, the storm-related electrical problems we are called for most often are:",
    localFaqs: [
      {
        q: 'My downtown loft has no power after a storm but the building does. Is that an electrician job?',
        a: 'Often not, and we would rather tell you that on the phone than send someone. If the building has power and your unit does not, the fault is usually in the unit panel or in the feed from the building’s equipment, which is a maintenance call to your management first — they may have a contractor already engaged for the building. If they confirm the problem sits inside your unit, that part is yours and we can take it from there.',
      },
    ],
  },

  'west-end': {
    intro:
      'Storm damage to the service on your West End home? Duke restores the line, then a licensed electrician has to repair your mast or meter base before they reconnect. Same-day work near Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown around TQL Stadium and Linn Street, and its housing runs the whole range — historic Italianate rowhouses, brick homes, mid-century blocks, and newer development mixed in. That variety is the practical point after a storm. Two houses on the same street can have completely different service arrangements, one a shared entrance on a party wall and the other a modern underground feed, and they need different repairs and different conversations with Duke.',
      'The low ground near the Mill Creek basin is the second factor. Storms that bring heavy rain as well as wind put water into basements here, and where the panel sits low that becomes an electrical problem rather than just a cleanup. Submerged equipment is replaced rather than dried and re-energised, and the inspector will check for it before the meter goes back in, so it is worth having both looked at in one visit rather than discovering the second problem after the first repair is done.',
    ],
    commonIntro:
      "Across the West End's mix of historic rowhouses and later homes, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Do West End homes have overhead or underground service, and does it change the repair?',
        a: 'Both exist here, sometimes on the same block, and it changes the job considerably. Overhead service means a mast, a weatherhead, and a drop, and storm damage is usually visible from the ground. Underground service has no mast to break, but Duke schedules underground work differently and there is generally more lead time, so the repair itself may be simpler while the reconnect takes longer. We will tell you which you have and what that means for timing before we start.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Storm damage at the service on your Mount Adams rowhouse? We work the steep, narrow streets above Eden Park, repair the mast or meter base, and handle the inspection Duke requires. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop above downtown and Eden Park — steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Two features of the hill drive the storm calls. Eden Park’s mature canopy runs right up against the residential streets, so there is heavy tree cover directly over the service drops on the park side of the neighborhood. And the streets are narrow and steep enough that access is genuinely difficult, which slows down every crew working here, Duke’s included.',
      'That access problem is worth planning around rather than discovering. On the tightest lanes there is often nowhere to put a bucket truck without blocking the street entirely, and the service entrances on these rowhouses are commonly on party walls or reached from a shared stair rather than from an open side yard. We look at how we are going to reach the work before we schedule it, because a crew that turns up and cannot get to the mast has cost you a day in a week where days matter.',
    ],
    commonIntro:
      "On Mount Adams' steep lanes and packed rowhouse blocks, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why does it take longer to get power back in Mount Adams after a storm?',
        a: 'Access, mostly. The streets are narrow and steep, there is frequently nowhere to set up a bucket truck without closing the lane, and the hillside tree cover means there is simply more damage per block than on a flat street. That applies to Duke’s crews as much as ours. It is another reason to call as soon as you can see damage rather than waiting — on the hill, the scheduling constraint is often physical rather than a matter of how busy anyone is.',
      },
    ],
  },
};
