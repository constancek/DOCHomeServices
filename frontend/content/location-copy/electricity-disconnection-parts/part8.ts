import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 8 — the Clermont County communities and villages, from the Milford area
// out to the eastern edge of the service area.
export const part8: Record<string, LocationServiceCopy> = {
  withamsville: {
    intro:
      'Power disconnected in Withamsville? Clermont County and Union Township issue the permit. Call (513) 586-5107.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community in western Clermont County along the Ohio Pike corridor, and the permit and inspection go through Clermont County and Union Township rather than Hamilton County or the city. It shares its ZIP with Summerside, which is the same township — so at least the answer is consistent within this postal code, which is not something we can say everywhere.',
      'The housing is suburban mid-century and newer, and the causes split accordingly. On the older streets the service is frequently original, sized for its era, and now carrying central air, a finished lower level and modern appliances — which shows as heat damage at the connections rather than as a tripped breaker. On the newer streets the panels are adequate and a disconnection is usually one identifiable fault.',
    ],
    commonIntro:
      "Across Withamsville's suburban mid-century and newer homes in Clermont County, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Do Withamsville and Summerside use the same permit office?',
        a: 'Yes — both are Union Township in Clermont County, so the filing goes to the same place. That makes this postal code more straightforward than several others we work in. It is still worth confirming the specific address, because township boundaries do not always follow the postal map exactly.',
      },
    ],
  },

  milford: {
    intro:
      'Power disconnected on your Milford property? Main Street buildings often share one service. Call (513) 586-5107.',
    relevance: [
      'Milford (ZIP 45150) straddles the Little Miami with a preserved old Main Street district around it, and those buildings change what a disconnection means. Many have a business at ground level and residential space above, running from one service entrance and a shared meter bank — so the disconnection takes a shop and one or more households off together, and the equipment belongs to the building owner rather than any occupant.',
      'Milford is a city and issues its own permits, while the surrounding communities in the same ZIP are township — so the filing follows the address. The Little Miami adds the physical cause: it rises quickly after heavy rain and the low ground near the old core is where water goes, and a submerged panel is replaced rather than dried out however it looks once the water has gone.',
    ],
    commonIntro:
      "Across Milford's Main Street buildings and older riverside homes, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I live above a shop on Milford Main Street and we have no power. Who arranges it?',
        a: 'The building owner. Where a business and residential space share one service entrance and meter bank, that equipment is the building’s, so neither tenant can authorise work on it. Report it to the owner or managing agent and mention that the business is also affected — commercial pressure usually moves these along faster than a residential-only building.',
      },
    ],
  },

  mulberry: {
    intro:
      'Power disconnected in Mulberry? Your ZIP covers four communities across city and township. Call (513) 586-5107.',
    relevance: [
      'Mulberry (ZIP 45150) is a suburban community in the Milford area of western Clermont County, and that postal code covers Milford, Mulberry, Mount Repose and Day Heights between them. Milford is a city issuing its own permits; the others are township. So whether your address is inside the city or in the surrounding township changes which office handles the filing, and a permit sent to the wrong one sits while it is redone.',
      'The housing is mid-century and newer on suburban lots. On the older streets the services are frequently original, sized for their era and now carrying rather more, with heat damage at the connections the usual finding. Where the newer sections were built with underground supply the causes narrow to the meter base, the buried run, or a panel that will not pass inspection.',
    ],
    commonIntro:
      "Across Mulberry's suburban mid-century and newer homes, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 45150, the same as Milford. Does the city issue my permit?',
        a: 'Only if your address is actually inside the city of Milford. That ZIP also covers Mulberry, Mount Repose and Day Heights, which are township rather than city, and the filing follows the jurisdiction rather than the postal code. We confirm which applies before submitting anything.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Power disconnected in Mount Repose? Higher ground than the valley, so wear rather than water. Call (513) 586-5107.',
    relevance: [
      'Mount Repose (ZIP 45150) sits on higher ground above the Little Miami valley in the Milford area, and the elevation is what separates it from its neighbours in practice. Down in the valley the recurring cause of disconnection is water reaching a basement panel. Up here it is wear: services installed with the houses, never replaced because nothing failed, and now carrying loads well beyond their intended range.',
      'That is the finding an inspector or a utility technician reaches when they finally examine one — grounding to a superseded standard, corrosion at the meter base, heat damage where connections have worked too hard for decades. Permits go through Clermont County and the township rather than the city of Milford, despite sharing Milford’s postal code, which is worth confirming before anything is filed.',
    ],
    commonIntro:
      "Across Mount Repose's suburban homes on higher ground above the valley, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Our Mount Repose service has never given trouble. Why refuse it now?',
        a: 'Because working and meeting current requirements are different tests. Grounding installed to a superseded standard, corrosion inside the meter base, or connections that have quietly degraded under load can all coexist with a service that has never tripped anything. A technician replacing a meter, or an inspector clearing a tag, applies today’s standard.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Power disconnected at your Day Heights property? On a well, no power means no water. Call (513) 586-5107.',
    relevance: [
      'Day Heights (ZIP 45150) mixes suburban streets with genuinely semi-rural property in the Milford area of Clermont County, and the rural edge is where a disconnection behaves differently. Those properties sit well back from the road on long private service runs, so the fault may be along the line rather than at the house, and a number are on private wells.',
      'That last point changes the urgency rather than the work: a well pump is electric, so losing power means losing water for washing, flushing and drinking, and a septic pump stops too. It is not something we can tell from an address, so mention it on the phone. Closer in the suburban streets are conventional, and the permit goes through Clermont County and the township rather than the city.',
    ],
    commonIntro:
      "Across Day Heights' suburban streets and semi-rural properties, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I am on a well in Day Heights and the power has been cut. How urgent is that?',
        a: 'More urgent than on public water, and worth saying when you call. The well pump runs on electricity, so no power means no water at all, and a septic pump stops as well. It changes how we prioritise the visit, and we cannot work it out from the address — so tell us on the phone.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Power disconnected in New Richmond? A 19th-century riverfront village with its own permits. Call (513) 586-5107.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with 19th-century houses lining the riverfront, and it issues its own permits and inspections. Two things follow for a disconnection. The houses are genuinely old, so services are frequently original or reworked once a long time ago, with long histories of retrofits that an inspector will examine once clearing a tag.',
      'And the village sits low on the river, so water reaching a basement panel is a recurring cause — and a submerged panel is replaced rather than dried out, because water gets behind the bus bars and into the breakers and corrosion continues after the surface dries. Being a small municipality, the inspection queue is short when the filing goes to the right office rather than to the county.',
    ],
    commonIntro:
      "In New Richmond's 19th-century riverfront houses on low ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Does New Richmond issue its own electrical permits?',
        a: 'Yes, as a village, rather than Clermont County doing it. That usually works in your favour because a small queue moves quickly — provided the filing went to the right office. An electrician who assumes a village this size defers to the county will cost you a day while it is redone.',
      },
    ],
  },

  amelia: {
    intro:
      'Power disconnected in Amelia? Clermont County permits, and mid-century services under modern loads. Call (513) 586-5107.',
    relevance: [
      'Amelia (ZIP 45102) sits along the Ohio Pike corridor in Clermont County, in established neighborhoods of mid-century and newer homes, and permits and inspections go through Clermont County rather than Hamilton County or the city. Worth confirming before work is booked, because contractors working mostly on the Cincinnati side file with the wrong authority out of habit.',
      'The housing is largely of one era on the older streets, with services installed when the houses went up and frequently never replaced. Sixty or a hundred amps suited a house of that period and does not suit central air, a finished lower level and a modern kitchen, let alone a car charger. Run near the ceiling for years, those connections degrade and heat damage at the meter socket is what stops a reconnection.',
    ],
    commonIntro:
      "Across Amelia's mid-century and newer streets in Clermont County, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Is it worth upgrading rather than repairing on my Amelia house?',
        a: 'On a mid-century service still at its original rating, usually yes. Labour, the permit and the inspection dominate the bill and are identical either way, so refitting the original capacity on a house that now runs central air and modern appliances means paying that whole set of costs again before long. We quote both so you can see the difference.',
      },
    ],
  },

  batavia: {
    intro:
      'Power disconnected in Batavia? Inside the village or outside changes who issues the permit. Call (513) 586-5107.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, with a historic village core and newer development around it, and being the county seat causes a predictable confusion. County offices are here, so people assume the county handles their permit — but if your address is inside the village, the village does. Outside it, the township and county do. That is worth settling before anything is filed.',
      'The East Fork of the Little Miami is the physical factor. It responds quickly to heavy rain and the older village housing sits low near it, so water reaches basement panels and a submerged panel is replaced rather than dried out. Where wear is the cause instead, the village housing is old enough that the findings are the usual ones — grounding to a superseded standard and corrosion at the meter base.',
    ],
    commonIntro:
      "Across Batavia's historic village core near the East Fork and the newer development around it, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'Batavia is the county seat — does the county issue my permit?',
        a: 'It depends whether your address is inside the village boundary. If it is, the village issues it. Outside, it goes through the township and Clermont County. The county offices being located here makes people assume the second applies to everyone, and it does not. We confirm which before filing.',
      },
    ],
  },

  owensville: {
    intro:
      'Power disconnected in Owensville? A small village with its own permits, rural properties around it. Call (513) 586-5107.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County with a historic core and rural and suburban property around it, and it issues its own permits and inspections. Being small means the queue is short when the filing is right, and being well east of the metro means a distance for anyone to travel — so getting the details settled on the phone matters more here than closer in.',
      'On the rural properties there is the well question: a private well pump is electric, so a disconnection takes the water with it, and long private service runs mean the fault may be along the line rather than at the house. In the village core the housing is older with services frequently never brought forward, so the findings are the usual age-related ones once anyone examines them.',
    ],
    commonIntro:
      "Across Owensville's historic core and the rural properties around it, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'What should I tell you about a rural Owensville property?',
        a: 'Whether you are on a well, and roughly how far the house sits from the road. The well matters because no power means no water, which raises the priority. The distance matters because the fault on a long private run is often out along the line rather than at the house, and knowing in advance means we arrive able to trace it rather than making a second trip.',
      },
    ],
  },

  goshen: {
    intro:
      'Power disconnected in Goshen? Township and county permits, and rural wells. Call (513) 586-5107.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County with a mix of suburban and genuinely rural property, and the first thing to settle is the paperwork: this is township and county rather than a village or city, so permits and inspections go through Goshen Township and Clermont County. A contractor used to the cities closer in can file with the wrong authority.',
      'On the rural side a disconnection is a bigger event than it sounds. Properties sit well back on long private service runs, so the fault may be somewhere along the line, and a good number are on wells — meaning no power is also no water, since the pump is electric, with septic pumps affected the same way. Both are worth saying on the phone so we arrive equipped to trace and prioritise properly.',
    ],
    commonIntro:
      "Across Goshen's suburban streets and rural properties in northern Clermont County, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Goshen property has a long drive and I am on a well. What do you need to know?',
        a: 'Both of those, on the phone. The well means no power is also no water, which changes how we prioritise. The long run means the fault may be out along the line rather than at the house, and knowing that in advance means we arrive equipped to trace it rather than coming back a second time.',
      },
    ],
  },

  moscow: {
    intro:
      'Power disconnected in Moscow? Much of the housing here is newer than the village looks. Call (513) 586-5107.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, and a meaningful share of its housing and service equipment dates from rebuilding after the tornado that struck in March 2012. That works in a homeowner’s favour for a disconnection: rebuilt properties generally have modern service equipment and properly sized panels, so the classic age-related findings are less likely.',
      'What has not changed is the river. The village sits low on the Ohio, so water reaching a basement panel remains a cause, and a submerged panel is replaced rather than dried out. Where a house is on older equipment the usual findings apply. The village issues its own permits and inspections, and being well downstream means it is a distance out — worth settling details on the phone.',
    ],
    commonIntro:
      "In Moscow's riverfront housing, much of it rebuilt since 2012, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Moscow house was rebuilt after the tornado. Is the service modern too?',
        a: 'Usually, and that helps. Rebuilt properties generally have modern service equipment and a properly sized panel, so the age-related findings that stop reconnections on older housing are less likely. What remains possible is a flooded panel if it sits low, damage at the meter base, or a fault found during other work.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Power disconnected in Newtonsville? Rural, far east, and often on a well. Call (513) 586-5107.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, about as rural as our service area gets on the Ohio side, and it issues its own permits and inspections. The properties are spread out, frequently set well back from the road on long private service runs where a fault can be anywhere along the line rather than at the house.',
      'A good number are on wells and septic, which turns a disconnection into a water problem as well as a power one, since the pump is electric. Say so when you call, because it changes the priority and we cannot tell from an address. The housing is older with services frequently never brought forward, so where wear is the cause the findings are the usual age-related ones.',
    ],
    commonIntro:
      "Across Newtonsville's rural properties and village core, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Do you cover somewhere as rural as Newtonsville?',
        a: 'Yes, and it is near the eastern limit of what we cover. Because it is a distance, it helps to settle the details on the phone — whether you are on a well, roughly how far the house is from the road, and how old the service is. That determines what we bring and avoids a second trip for something we could have anticipated.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Power disconnected in Williamsburg? A 19th-century core on the East Fork, with village permits. Call (513) 586-5107.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami with a 19th-century core and rural property around it, and it issues its own permits and inspections. The old core is the part that shapes a repair: the buildings are tall for their footprint and close together, so service entrances sit high on the wall and often run through the roof, which makes the flashing at that penetration part of the electrical work.',
      'The East Fork adds water to the low ground near it — it responds quickly to heavy rain, so flooding can coincide with the storm rather than following it — and a submerged panel is replaced rather than dried out. On the rural properties around the village there is the well question, where a disconnection also takes the water. Being well east, it is a distance out.',
    ],
    commonIntro:
      "In Williamsburg's 19th-century village core near the East Fork, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'The service on my Williamsburg house runs through the roof. Is that part of your work?',
        a: 'Yes. Where the entrance passes through the roof, the flashing and seal around it belong to the service, and replacing it without redoing them properly leaves a leak that surfaces months later. If the roof needs work beyond the penetration itself, that is a roofer’s job and we will say plainly which parts are which.',
      },
    ],
  },

  bethel: {
    intro:
      'Power disconnected in Bethel? Village permits, historic core, rural edges, and a distance out. Call (513) 586-5107.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County with a 19th-century core and rural and small-town property around it, and it issues its own permits and inspections. Distance is the practical factor — this is among the farthest points east we serve — so settling the details on the phone means we arrive equipped rather than making a second journey.',
      'The village core has older overhead services, some original and some reworked decades ago, on buildings tall enough that the entrance may pass through the roof. The rural property around it brings the well question, where a disconnection takes the water too because the pump is electric. Both are worth mentioning when you call so the visit is planned properly rather than optimistically.',
    ],
    commonIntro:
      "Across Bethel's 19th-century core and the rural property around it, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Is it worth calling you out to Bethel for a disconnection?',
        a: 'Yes, and we would rather establish what is involved on the phone first — whether you are on a well, how old the service is, and whether the panel has been under water. Because it is a distance, arriving equipped for what is actually there matters more than it does closer in. If the job needs a specialist rather than us, we will say so before setting off.',
      },
    ],
  },

  ross: {
    intro:
      'Power disconnected in Ross? Butler County and Ross Township permits, and rural wells. Call (513) 586-5107.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami, mixing small-town and rural property, and permits and inspections go through Ross Township and Butler County rather than Hamilton County. Worth settling before work is scheduled rather than after.',
      'The Great Miami drains a large area upstream, so water can reach the low ground here after your local weather has cleared — which means a flooded panel on a schedule that does not match the storm. Submerged panels are replaced rather than dried out. On the rural properties there is the well question, and long private service runs mean the fault may be along the line rather than at the house.',
    ],
    commonIntro:
      "Across Ross's small-town and rural property along the Great Miami, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Ross property flooded a day after the storm passed. Does that affect the panel decision?',
        a: 'Not the decision, only the timing. The Great Miami drains a large area upstream, so heavy rain miles away can raise the river here after your local weather has cleared. For the electrical side nothing changes: a panel that has been under water is replaced rather than dried out, whenever the water arrived.',
      },
    ],
  },

  fairfield: {
    intro:
      'Power disconnected in Fairfield? Its own city permits, with mid-century and newer services. Call (513) 586-5107.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city with established mid-century neighborhoods, newer subdivisions and a busy commercial corridor, and it issues its own permits and inspections rather than the county doing it. Being a city of this size means the office is used to volume, which helps when the filing is right.',
      'The housing gives two answers. Mid-century streets have services largely original to the houses, sized for their era and now carrying central air, finished lower levels and increasingly car charging — heat damage at the connections is the usual finding. Newer subdivisions have modern panels and adequate capacity, where a disconnection is generally one identifiable fault rather than the whole assembly.',
    ],
    commonIntro:
      "Across Fairfield's mid-century neighborhoods and newer subdivisions, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Does Fairfield issue its own permits or is it Butler County?',
        a: 'The city issues its own. That is worth confirming because plenty of Butler County addresses do go through the county, and a filing sent to the wrong office sits while it is redone. We check the correct authority for the specific address before submitting anything.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Power disconnected in Beckett Ridge? Underground-fed streets narrow the causes considerably. Call (513) 586-5107.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community built around a golf course, largely homes from the 1980s onward, and a good deal of it was laid out with underground supply. That removes the mast and weatherhead, so the causes that dominate older neighborhoods simply do not apply here — no failing mast, no weathered meter socket at the top of a wall.',
      'What remains is narrower: a fault at the meter base, damage in the buried run, a panel that will not pass inspection, or a load problem where a car charger has been added without a proper calculation. That last one is increasingly why we are called out to communities like this. Permits go through West Chester Township and Butler County rather than any city office.',
    ],
    commonIntro:
      "Across Beckett Ridge's planned, largely underground-fed streets, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'What can go wrong on an underground-fed Beckett Ridge house?',
        a: 'Fewer things than on older housing, which is genuinely good news. There is no mast or weatherhead to fail. What remains is a fault at the meter base, damage in the buried run, a panel that will not pass, or a load problem — most often a car charger fitted without a load calculation. Underground work is also scheduled with more lead time by the utility.',
      },
    ],
  },

  wetherington: {
    intro:
      'Power disconnected in Wetherington? Large homes with a great deal of equipment on the service. Call (513) 586-5107.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community built around a golf course, with larger homes from the 1980s and 90s onward, much of it underground-fed. The service arrangement removes the usual age-related causes, so what brings us out here is load rather than decay: houses of this size run multiple HVAC zones, finished lower levels, serious kitchens and increasingly car charging.',
      'Where a charger or a second cooling zone has been added without a load calculation, the whole service can sit near its ceiling, and that shows as heat at the connections rather than as a tripped breaker. The proper response is a load calculation first and then either an uprated service or a managed circuit. Permits go through West Chester Township and Butler County.',
    ],
    commonIntro:
      "Across Wetherington's larger, largely underground-fed homes, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Our Wetherington house is newer — why would the service be at its limit?',
        a: 'Because what a house draws changes faster than the service does. A property built for a 1990s household now running two or three cooling zones, a finished lower level and a car charger can be sitting close to its calculated ceiling. That shows as heat at the connections rather than tripping breakers, and the honest fix starts with a load calculation rather than replacing the damaged part.',
      },
    ],
  },

  hamilton: {
    intro:
      'Power disconnected in Hamilton? Much of the city is on its own municipal electric utility, not Duke. Call (513) 586-5107.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, and the most important local fact for a disconnection has nothing to do with the housing: much of Hamilton is served by the city’s own municipal electric utility rather than by Duke Energy. That changes who you deal with about the disconnection, who inspects, and who comes back to reconnect the meter — so checking your bill is the first step rather than an afterthought.',
      'The rest works the same way regardless of which utility it is. The mast, weatherhead, entrance cable, meter box and panel are yours, and they will not reconnect to a red-tagged or failed service until a licensed electrician has repaired it and it has been inspected. In the historic districts the houses are tall with entrances that often pass through the roof, and the Great Miami puts water into low levels where panels sit.',
    ],
    commonIntro:
      "Across Hamilton's historic districts and riverside streets, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Do I deal with Duke Energy about a Hamilton disconnection?',
        a: 'Check your bill first, because much of the city is served by Hamilton’s own municipal electric utility rather than Duke. Dealing with the wrong one wastes time. Whichever supplies you, the split is identical: they own the line and the meter, and they will not reconnect to a damaged or red-tagged service until a licensed electrician has repaired it and it has been inspected.',
      },
    ],
  },

  millville: {
    intro:
      'Power disconnected in Millville? Check which utility serves you — Hamilton’s is next door. Call (513) 586-5107.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton with older homes and rural property around it, and its position beside Hamilton raises the first question. Much of Hamilton is served by the city’s own municipal electric utility rather than Duke Energy, and being immediately next to that territory means it is genuinely worth checking your bill before you start making calls.',
      'Beyond that this is rural and small-village territory. Properties set back on long private runs mean the fault can be anywhere along the line, and a good number are on private wells — so a disconnection takes the water with it since the pump is electric. Permits go through the village or Butler County depending on the address, which we confirm before filing.',
    ],
    commonIntro:
      "Across Millville's older village homes and rural properties west of Hamilton, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Which utility serves my Millville property?',
        a: 'Check your bill, because Hamilton’s municipal electric territory is immediately next door and the boundary is not obvious from a map. Getting it wrong wastes time. Once you know, the rule is the same either way: they own the line and the meter, and will not reconnect to a damaged or red-tagged service until a licensed electrician has repaired and it has been inspected.',
      },
    ],
  },
};
