import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 4 — the remaining Cincinnati neighborhoods and the surrounded villages,
// cities and townships in Hamilton County. Themes: insurance-driven upgrades,
// obsolete panel models, meter bank scale, and which office issues the permit.
export const part4: Record<string, LocationServiceCopy> = {
  'western-hills': {
    intro:
      'Power disconnected at your Western Hills home? We repair the service, handle the permit and inspection, and get the meter back in. Call (513) 586-5107.',
    relevance: [
      'Western Hills (ZIP 45211) covers a broad stretch of established housing around Western Hills Plaza and Glenway Avenue, running from early-1900s homes through to mid-century, and the disconnections we attend here are usually the result of accumulated wear rather than any single event. Corrosion inside a meter base, connections that have run warm for years, grounding installed to a standard that no longer applies.',
      'What brings it to a head is almost always someone external looking at the service — a technician swapping a meter, a survey before a sale, or an insurer asking questions at renewal. That last one has become more common. Insurers increasingly ask about panel age and type, and a policy declined or non-renewed over an electrical service is a growing reason homeowners here call us before anything has actually failed.',
    ],
    commonIntro:
      "Across Western Hills' early-1900s and mid-century homes, on services of several vintages, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My insurer is asking about the panel in my Western Hills house. Is that connected to disconnections?',
        a: 'It is the same underlying issue seen from a different direction. Insurers ask about panel age and type because certain older assemblies have a poor record, and the same equipment is what a utility technician or inspector will not sign off. Getting it replaced properly and inspected satisfies both, and it is a great deal easier to arrange before you have no power than after.',
      },
    ],
  },

  california: {
    intro:
      'Power disconnected in California? The city’s lowest riverfront ground puts panels where water reaches. Call (513) 586-5107.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, on some of the lowest ground in the city, and the recurring cause of disconnections here is water rather than wear. Where a panel has been submerged the utility will not re-energise it, and drying is not an option — water reaches behind the bus bars and into the breakers and corrosion continues long after the surface looks dry.',
      'Because flooding here is not a rare event, plenty of properties are on their second or third panel in the same position, which is an expensive cycle to keep repeating. When we are out for a replacement the more useful question is whether the panel can be relocated higher rather than simply renewed. It is not always possible — the entrance position and the run to the meter constrain it — but where it is, the cycle ends.',
    ],
    commonIntro:
      "On California's low riverfront ground along Kellogg Avenue, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'This is the third time my California panel has been condemned. Can we stop repeating it?',
        a: 'Sometimes, and it is worth asking during the replacement rather than after the next flood. Where the service entrance position and the run to the meter allow it, moving the panel higher up the wall or into a different room turns a recurring expense into a one-off. Where the layout does not allow it we will tell you plainly rather than quoting for something that will not work.',
      },
    ],
  },

  carthage: {
    intro:
      'Power disconnected at your Carthage home? Old village housing on services that were never brought forward. Call (513) 586-5107.',
    relevance: [
      'Carthage (ZIP 45215) is a former village along Vine Street, now a north-side neighborhood, built out in older early-1900s housing on a tight grid. Houses on small village lots sit close together and the service commonly occupies a narrow gap between buildings, which makes assessment and repair slower than the same work on an open lot — worth knowing when a quote seems higher than expected.',
      'The services themselves are the usual story for housing of this age: original or replaced once decades ago, grounding installed to a standard long superseded, and corrosion where the meter base has been exposed to weather for a century. None of that stops a house working. It stops a reconnection, because the technician or inspector clearing it applies today’s requirements rather than the ones in force when it went in.',
    ],
    commonIntro:
      "In Carthage's tight village grid of older housing, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'The service on my Carthage house is in the gap between buildings. Does that cost more?',
        a: 'It usually takes longer rather than costing more in materials. There is often not enough room for a ladder at the angle we want, so the setup is slower, and occasionally we need access from next door. Worth mentioning when you call so the visit is scheduled with enough time. It should not affect the quality of the anchoring and sealing, which the inspector will be looking at.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Power disconnected in Winton Hills? On multi-unit property the owner authorises the repair. Call (513) 586-5107.',
    relevance: [
      'Winton Hills (ZIP 45232) mixes residential and industrial areas near Winton Road, including a good deal of multi-unit housing, and on that housing essentially none of the service equipment belongs to a resident. Entrances, meter banks and the distribution feeding each building are the property’s, so the repair is authorised and paid for by the owner and a resident cannot start it by calling an electrician.',
      'Where a building runs a bank serving several units, the scale changes too. Parts for an older bank are frequently obsolete and the enclosure is as old as the parts, so clearing a disconnection means replacing the assembly rather than a component — every household on it comes off and goes back together, on one permit and one inspection. That is a bigger job than a single service and much cheaper handled as one than piecemeal.',
    ],
    commonIntro:
      "Across Winton Hills' multi-unit housing and the streets along the industrial boundary, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Several units in my Winton Hills building are off. Will they be reconnected separately?',
        a: 'Generally not — where one bank feeds them, the assembly is treated as a single piece of equipment, so they come off and go back together on one permit and one inspection. That is faster and cheaper than separate jobs, but it needs the building owner to authorise it, which is the usual delay rather than the work itself.',
      },
    ],
  },

  roselawn: {
    intro:
      'Power disconnected in Roselawn? Original mid-century meter banks are usually replaced whole. Call (513) 586-5107.',
    relevance: [
      'Roselawn (ZIP 45237) runs along Reading Road in mid-century single-family homes mixed with apartment buildings of the same era, and those apartment buildings raise a specific problem. Where a building still has its original meter bank — and many do — a disconnection frequently means replacing the whole assembly rather than one socket, because the parts are long obsolete and the enclosure is as old as the parts.',
      'That changes the cost, the timeline and who has to act. A bank serving eight units comes off and goes back as one piece, so all eight households are affected together, on one permit and one inspection. It is considerably cheaper than eight separate jobs and it needs the building owner to authorise it. On the single-family streets the picture is simpler: mid-century services, many original, now carrying loads nobody planned for.',
    ],
    commonIntro:
      "Across Roselawn's mid-century houses and apartment buildings, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you replace just the damaged meter socket on my Roselawn building?',
        a: 'Rarely, and it is better to know up front. Parts for a sixty-year-old bank are generally obsolete and the enclosure is as old as the parts, so the practical repair is replacing the assembly. That means all the units it serves come off and go back together on one permit and one inspection — more than a socket, and considerably less than doing it piecemeal over the next few years.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Power disconnected at your Mount Airy home? Mid-century services carrying modern loads. Call (513) 586-5107.',
    relevance: [
      'Mount Airy (ZIP 45239) is mid-century single-family housing on hilly, wooded streets beside Mount Airy Forest, and the services here are largely of one era — installed with the houses and, in a great many cases, never replaced. Sixty or a hundred amps suited a house of that period. It does not suit central air, a finished basement, a modern kitchen and increasingly a car charging in the driveway.',
      'A service carrying that for decades degrades at the connections rather than tripping, and heat damage at the meter socket is what a technician will not re-energise. Houses from this period are also the ones where aluminium branch wiring can appear, particularly if they were built or rewired between roughly 1965 and 1973 — worth checking, because it affects what an inspector looks at and what an insurer asks about.',
    ],
    commonIntro:
      "Across Mount Airy's mid-century homes on largely original services, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'How do I know whether my Mount Airy house has aluminium branch wiring?',
        a: 'The build date is the first clue — roughly 1965 to 1973 is the period. Beyond that it needs looking at: the conductors are visible at the panel and at devices, and aluminium is distinguishable from copper by colour. If it is present, the recognised remedy is properly rated connectors at the terminations rather than a full rewire, and we will tell you which of your terminations actually need attention.',
      },
    ],
  },

  hartwell: {
    intro:
      'Power disconnected at your Hartwell home? Tall Victorians often run the mast through the roof. Call (513) 586-5107.',
    relevance: [
      'Hartwell (ZIP 45215) grew as a streetcar suburb, and the Victorian and early-1900s houses that came with it are tall and set close to the street on narrow, deep lots. On houses that tall the service entrance frequently runs up through the roof rather than stopping at the eaves, which changes what clearing a disconnection involves: replacing the mast means opening and resealing a roof penetration, and that flashing is part of the electrical work.',
      'The services are also among the oldest in the north-side neighborhoods, with long histories of retrofitting behind them. Once an inspector is examining one to clear a tag, that history is what determines the scope — not simply the fault that stopped the meter but whatever else is visible with the cover off. We assess the whole entrance and panel rather than the single component, and say which parts are genuinely worn.',
    ],
    commonIntro:
      "In Hartwell's tall Victorian and early-1900s houses on streetcar-era lots, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'The mast on my Hartwell house goes through the roof. Is the roof part of the job?',
        a: 'Yes, as part of the service repair. Where the mast passes through the roof, the flashing and seal around it belong to the entrance, and replacing the mast without redoing them properly leaves a leak that surfaces months later. If the roof needs work beyond the penetration itself, that is a roofer’s job and we will tell you plainly which parts are which.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Power disconnected at your Kennedy Heights home? Large resort-era houses on century-old services. Call (513) 586-5107.',
    relevance: [
      'Kennedy Heights (ZIP 45213) began as a Victorian-era resort community, and the housing it left behind is large early-1900s homes on generous hilltop lots. Houses of that scale now run multiple heating and cooling zones, finished lower levels and serious kitchens, all on services that were ample when installed and are marginal today.',
      'Run near the ceiling for years, a service degrades at the connections, and heat damage at the meter socket is the finding that stops a reconnection. On houses like these the repair also has to suit the building — a properly sized modern entrance still has to be routed and mounted on a house people have invested in preserving — so we plan the route and fixings before starting rather than improvising on the day.',
    ],
    commonIntro:
      "In Kennedy Heights' large resort-era houses, where modern loads sit on century-old services, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Will a bigger service look wrong on my Kennedy Heights house?',
        a: 'It does not have to, and it is fair to insist on it looking right. A properly sized service needs a larger entrance and a modern meter base, but the route, the fixings and the position are choices. We plan them in advance, reuse sound existing penetrations where they exist, and will say honestly if the sympathetic option is not achievable on your particular wall.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Power disconnected in St. Bernard? St. Bernard is its own city with its own permits and inspector. Call (513) 586-5107.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, entirely surrounded by Cincinnati, built up around the Ivorydale complex in a dense grid of early-1900s homes on small valley lots. For a disconnection the jurisdiction comes first: permits and inspections go through St. Bernard rather than Cincinnati, on a much smaller municipal schedule, and the utility will be waiting for that sign-off before reconnecting.',
      'That is usually to your advantage — a small queue moves faster than the city’s — provided the paperwork went to the right office first time. Electricians who work mostly downtown sometimes file with Cincinnati out of habit and lose a day. The housing is the usual pattern for the era and the lot sizes are small, so services sit in narrow gaps where the setup takes longer than the repair.',
    ],
    commonIntro:
      "In St. Bernard's dense early-1900s grid beside Ivorydale, on the city's own permit schedule, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Does St. Bernard being a separate city help or hurt after a disconnection?',
        a: 'Generally it helps, provided the filing goes to the right place. The permit and inspection are St. Bernard’s rather than Cincinnati’s, and a small municipal queue often moves faster than the city’s. The risk is an electrician filing with Cincinnati by habit, which does not fail the inspection but does mean waiting while it is refiled.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Power disconnected in Elmwood Place? A tiny village on low valley ground. We repair, permit and reconnect. Call (513) 586-5107.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley, with early-1900s houses spaced about as closely as anywhere in the county. Two things follow for a disconnection. The village is small enough that its permit and inspection capacity is minimal, which becomes the constraint on how fast a repair actually finishes rather than the electrical work.',
      'And the valley puts panels where water reaches them. Where a panel has been submerged it is replaced rather than dried out, and an inspector will look for the signs before the meter goes back in. Because the housing is uniformly low and closely packed, that tends to affect several neighbouring houses at once — which is exactly when having one electrician handle them together saves everyone days in the queue.',
    ],
    commonIntro:
      "In Elmwood Place's closely spaced early-1900s houses on low valley ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Several houses on my Elmwood Place street need work. Is it worth coordinating?',
        a: 'Very much so. Where neighbouring houses each need their own service or panel dealt with, one electrician handling them together means shared setup, permits filed as a batch, and the inspector seeing several properties in one visit. It does not change what each owner pays for their own equipment, and in a village with a small inspection schedule it can save several days.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Power disconnected at your Delhi Hills property? Outbuildings on their own old supply are a common finding. Call (513) 586-5107.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township above the Ohio, an area with deep ties to greenhouse and floral growing, and that heritage leaves a practical wrinkle. A fair number of properties have outbuildings — former greenhouse structures, barns, detached garages — that were given their own supply, sometimes decades ago and often not to any standard you would recognise now.',
      'Those secondary supplies are what an inspector takes an interest in once they are on site examining the main service to clear a tag. It does not have to derail the job, but discovering it midway is worse than planning for it, so mention any outbuilding on its own power when you call. The main services are otherwise the usual mid-century picture, and permits go through Delhi Township rather than the city.',
    ],
    commonIntro:
      "Across Delhi Hills' mid-century homes, some with outbuildings on their own supply, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Delhi Hills property has an old greenhouse with its own power. Will that be a problem?',
        a: 'It can be, which is why it is better raised at the start. Secondary supplies to greenhouses, barns and detached garages were often installed long ago to a standard that would not pass now, and once an inspector is on site looking at your main service they may look at that too. Planning for it beats discovering it with the job half done.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Power disconnected in Golf Manor? Modest mid-century houses on genuinely small services. Call (513) 586-5107.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village entirely surrounded by Cincinnati, laid out as a compact grid of modest mid-century houses, and modest is the operative word for a service repair. These homes were given genuinely small services — adequate for a house with a stove and a few lights — and a great many are still running close to that.',
      'So when a technician declines to re-energise one, refitting the same capacity puts you back on something that was already inadequate. The costs that dominate this job are the labour, the permit and the inspection, and they do not change with the size of the service, which is what makes a properly sized replacement worth pricing. Permits go through Golf Manor rather than Cincinnati, on a village schedule that is often quicker than the city’s.',
    ],
    commonIntro:
      "Across Golf Manor's compact grid of modest mid-century homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Golf Manor house is small with a small original service. Is upgrading overkill?',
        a: 'Usually not, and the reason is the cost structure rather than ambition. Labour, the permit and the inspection dominate the bill and are identical either way. On a modest house that now runs central air, a modern kitchen and possibly a car charger, putting the original capacity back means paying that whole set of costs again before long.',
      },
    ],
  },

  fairfax: {
    intro:
      'Power disconnected in Fairfax? Unlike Mariemont next door, no historic designation applies here. Call (513) 586-5107.',
    relevance: [
      'Fairfax (ZIP 45227) is a small village along Wooster Pike immediately next to Mariemont, and the contrast with its neighbour is genuinely useful. Mariemont is a National Historic Landmark where the visible exterior is regulated village-wide, so a service there involves more than an electrical permit. Fairfax has no such designation, which means clearing a disconnection here is exactly what it looks like: repair the service properly, get it inspected, get the meter back in.',
      'That makes Fairfax one of the more straightforward places we work, and it is worth saying rather than implying every job is complicated. What does apply is that Fairfax is its own village, so the permit and inspection go through Fairfax rather than Hamilton County or Cincinnati. The housing is early- and mid-1900s with services of both eras, and the usual wear findings for each.',
    ],
    commonIntro:
      "Across Fairfax's early- and mid-1900s homes along Wooster Pike, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Fairfax house is next to Mariemont. Do their historic rules apply to me?',
        a: 'No. Mariemont’s National Historic Landmark status covers Mariemont, not Fairfax, so a service repair here is a normal electrical job with a village permit and an inspection. It is a fair question because the two are close enough that people assume the restrictions carry across. If your address is genuinely on the boundary we will confirm which side before filing.',
      },
    ],
  },

  mack: {
    intro:
      'Power disconnected at your Mack home? Green Township issues the permit, not the city. Call (513) 586-5107.',
    relevance: [
      'Mack (ZIP 45248) is an established Green Township community of mid-century and newer single-family homes, and the first thing to settle is where the paperwork goes: permits and inspections are the township’s and Hamilton County’s rather than the city of Cincinnati’s. A contractor who works mostly in town can file with the wrong authority, and the utility looks for the correct sign-off before reconnecting.',
      'The housing spans enough years that the answer varies street to street. Mid-century services, many still original, sized for their era and now carrying central air and modern kitchens — those show heat damage at the connections. Newer sections have modern panels and clean documentation, where a disconnection is usually about one identifiable thing rather than the whole assembly.',
    ],
    commonIntro:
      "Across Mack's mid-century and newer homes in Green Township, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Is a Mack permit a Cincinnati one?',
        a: 'No. Mack is in Green Township, so the permit and inspection go through the township and Hamilton County rather than the city. It is a common mix-up for contractors who work mostly inside the city, and the cost of getting it wrong is a delay while the filing is redone rather than any problem with the work itself.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Power disconnected at your Monfort Heights home? Almost every service here is the same age. Call (513) 586-5107.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a Green Township suburb made up almost entirely of mid-century single-family homes, and that uniformity is genuinely unusual. In most neighborhoods the services on one street span decades. Here they largely do not — the houses went up in a comparable period, were given comparable services, and those services have aged at the same rate.',
      'The practical consequence is that if a neighbour has recently had to replace a service to clear a disconnection, yours is likely the same vintage and the same condition. That is useful information rather than a sales pitch: it does not mean yours is failing, it means that if something does stop a reconnection the sensible repair is more likely to be a replacement than a patch. Permits go through the township.',
    ],
    commonIntro:
      "Across Monfort Heights' uniformly mid-century homes, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Monfort Heights neighbour just had their whole service replaced. Will mine need it?',
        a: 'Not necessarily, but it is a reasonable thing to check. Houses here went up in a similar period with similar services and have aged the same way, so yours is likely the same vintage. That does not mean it is failing. It means that if something does stop a reconnection, a replacement is more likely than a patch — and it is worth having looked at when something else brings us out rather than paying for a visit on its own.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Power disconnected at your Bridgetown home? Green Township permits, and mixed service ages street to street. Call (513) 586-5107.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community of mid-century and newer homes on wide suburban lots, and the mixed ages mean two different conversations. On the mid-century streets the service is frequently original, sized for its era, and now carrying a good deal more — which shows as heat damage at the connections rather than as a tripped breaker.',
      'On the newer streets the panels are modern and adequately sized, so a disconnection is usually something specific: a damaged meter base, a fault found during other work, or an inspection required because a property stood empty. We establish which you have before quoting, because the scope is not comparable. Permits and inspections go through Green Township and Hamilton County rather than the city.',
    ],
    commonIntro:
      "Across Bridgetown's mid-century and newer homes in Green Township, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'How can I tell whether my Bridgetown service needs replacing or just repairing?',
        a: 'It depends whether the rest of the assembly is sound once the obvious fault is addressed. On a mid-century entrance with corrosion at the meter base, or a panel with no capacity left, a targeted repair puts you back in the same position before long. We price both and explain which parts are genuinely worn rather than only broken.',
      },
    ],
  },

  finneytown: {
    intro:
      'Power disconnected at your Finneytown home? Springfield Township issues the permit — a different authority again. Call (513) 586-5107.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community of largely mid-century single-family homes, and the jurisdiction is worth stating plainly because it catches contractors out: Springfield Township is a different authority from the townships on the west side and from the city, and permits and inspections go through it. Filing in the wrong place means the paperwork comes back while you wait without power.',
      'The housing is uniformly of an era, so the findings are consistent: services installed with the houses and frequently never replaced, sized for mid-century loads, now carrying whatever has been added since. Houses built or rewired between roughly 1965 and 1973 may also have aluminium branch circuits, which an inspector will look at closely at the terminations and which insurers increasingly ask about.',
    ],
    commonIntro:
      "Across Finneytown's mid-century homes in Springfield Township, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Is a Finneytown permit the same as a Cincinnati one?',
        a: 'No. Finneytown is in Springfield Township, so the permit and inspection go through the township rather than the city — and it is a separate authority from the west-side townships as well. It is a fair question to ask any electrician before booking, because filing in the wrong place means waiting while it is redone.',
      },
    ],
  },

  amberley: {
    intro:
      'Power disconnected at your Amberley Village home? Large houses, long runs, and a great deal of equipment inside. Call (513) 586-5107.',
    relevance: [
      'Amberley Village (ZIP 45237) is large homes on big, wooded lots along winding streets, and the scale of the houses is what drives disconnections here. Multiple heating and cooling zones, finished lower levels, serious kitchens, pool and outbuilding supplies in places, and increasingly car charging — all on services that were generous when installed and are working hard now.',
      'Houses set well back also have long service runs, and where those are underground the fault can be somewhere along the run rather than at either end, which changes how the repair starts. The village issues its own permits and inspections rather than the county. On a property of this size the sensible starting point is a load calculation, because refitting the same capacity on a house that has outgrown it repeats the problem.',
    ],
    commonIntro:
      "In Amberley Village's large homes on wooded lots, where heavy loads sit on older services, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Amberley house has a long underground run to the road. Does that complicate a disconnection?',
        a: 'It can, because the fault may be along the run rather than at the house or the meter, and locating it is the first job rather than an afterthought. Tell us the approximate distance when you call so we arrive equipped to trace it. Underground work is also scheduled differently by the utility, with more lead time than overhead, so the reconnect timeline is not the same.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Power disconnected in Arlington Heights? One of the smallest villages we work in, on low valley ground. Call (513) 586-5107.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley with a compact grid of older homes — one of the smallest municipalities we work in anywhere around Cincinnati. Being this small has a direct consequence: the village’s own permit and inspection capacity is minimal, and that is what determines how quickly a repair finishes rather than the electrical work itself.',
      'The valley supplies the usual cause. Low ground means basements take water, panels are almost always in basements, and a submerged panel is replaced rather than dried out. Where several neighbouring houses need the same work after the same flooding — which happens here because the housing is uniformly low — coordinating them through one electrician saves days in a queue that has very little slack in it.',
    ],
    commonIntro:
      "In Arlington Heights' compact grid of older homes on low valley ground, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'How long does a disconnection take to clear in Arlington Heights?',
        a: 'The electrical work is usually a day. The variable is the inspection, because this is a very small village with correspondingly small capacity, and after any event that affects several properties everyone is competing for the same slots. That is why we book the inspection alongside scheduling the work rather than after it is finished.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Power disconnected in North College Hill? Despite the name, this is not College Hill for permits. Call (513) 586-5107.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city immediately north of Cincinnati’s College Hill neighborhood, and the name causes a genuine practical problem. People assume the two are the same place administratively. They are not: College Hill is a Cincinnati neighborhood and its permits go through the city, while North College Hill is a separate municipality issuing its own.',
      'An electrician filing for the wrong one does not fail an inspection — the paperwork comes back and is refiled while the house sits without power. It is the most common mix-up we see out here and it is worth asking about directly. The housing is a tight grid of early- and mid-1900s homes on small lots, so services sit in narrow gaps, and the findings are the usual ones for those eras.',
    ],
    commonIntro:
      "In North College Hill's tight grid of early- and mid-1900s homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Is North College Hill part of College Hill for the permit?',
        a: 'No, and it is the most common mix-up out here. College Hill is a Cincinnati neighborhood and its permits go through the city. North College Hill is a separate city issuing its own. The consequence of getting it wrong is a delay rather than a failure — the filing comes back and has to be redone — so ask whoever you call whether they have pulled permits in North College Hill specifically.',
      },
    ],
  },
};
