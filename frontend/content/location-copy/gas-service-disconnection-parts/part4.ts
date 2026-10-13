import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 4 — the remaining Cincinnati neighborhoods and the surrounded villages,
// cities and townships in Hamilton County. Themes: appliance age, capped lines,
// outbuilding supplies, meter access, and which office issues the permit.
export const part4: Record<string, LocationServiceCopy> = {
  'western-hills': {
    intro:
      'Gas shut off at your Western Hills home? Piping vintage changes street to street here. Call (513) 586-5107.',
    relevance: [
      'Western Hills (ZIP 45211) covers a broad stretch of established housing around Western Hills Plaza and Glenway Avenue, from early-1900s homes through to mid-century, and the gas systems vary accordingly. On the older streets the piping is black iron installed in stages over a century; on the mid-century streets it is a simpler original run now feeding appliances several generations newer.',
      'What brings a shutoff to a head is usually an appliance rather than the pipe. A furnace with a cracked heat exchanger or a water heater with a failed control gets red-tagged, and the gas comes off until it is corrected. Where the piping is sound that is a contained job. Where the appliance failure has been masking a piping problem, the pressure test finds it — which is why we test before quoting rather than after.',
    ],
    commonIntro:
      "Across Western Hills' early-1900s and mid-century homes, on gas systems of several vintages, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'The utility red-tagged my Western Hills water heater. Does that mean the piping is bad too?',
        a: 'Not necessarily, and the pressure test settles it. Where the piping is sound, replacing the appliance and passing the test is a contained job. On an original system the test occasionally finds a piping fault the appliance was masking, which grows the scope — so we test before quoting to give you one number rather than a revision partway through.',
      },
    ],
  },

  california: {
    intro:
      'Gas shut off in California? The city’s lowest riverfront ground, so appliances flood. Call (513) 586-5107.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, on some of the lowest ground in the city, and the recurring cause of gas shutoffs here is water. Where a furnace, water heater or boiler has been under water, the gas control valve and burner controls are replaced rather than dried out and relit — water damages them internally with no outward sign.',
      'Because flooding here is not a rare event, plenty of properties are on their second or third water heater in the same position. When we are out for a replacement the more useful question is whether the appliance can be raised. It is not always possible, because the venting run constrains how high a unit can go, but where it is the cycle ends rather than repeating.',
    ],
    commonIntro:
      "On California's low riverfront ground along Kellogg Avenue, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'This is the third water heater we have lost to flooding in California. Can it go higher?',
        a: 'Sometimes, and it is worth asking during the replacement rather than after the next flood. The constraint is the venting — a unit can only be raised so far before the flue run stops working properly. Where a proper platform above the historic water line is achievable it ends the cycle. Where it is not, we will say so rather than build something that creates a different problem.',
      },
    ],
  },

  carthage: {
    intro:
      'Gas shut off at your Carthage home? Village-grid lots put the meter in a narrow gap. Call (513) 586-5107.',
    relevance: [
      'Carthage (ZIP 45215) is a former village along Vine Street, built out in older early-1900s housing on a tight grid, and the lot sizes are the practical constraint. Houses sit close together and the gas meter and riser commonly occupy a narrow gap between buildings, which makes assessment and repair slower than the same work on an open lot.',
      'The systems themselves are the usual story for the era: black iron installed when the houses were built and altered in stages since, with capped lines left behind wherever an appliance was removed. A pressure test finds all of that at once. Carthage shares ZIP 45215 with Hartwell, Wyoming, Lockland, Reading and others, so the permit follows the address rather than the postal code.',
    ],
    commonIntro:
      "In Carthage's tight village grid of older housing, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'The gas meter for my Carthage house is in the gap between buildings. Does that cost more?',
        a: 'It takes longer rather than costing more in materials. There is often not enough room to set up as we would like, and occasionally we need access from the neighbouring property. Worth mentioning when you call so the visit is scheduled with enough time — it does not change the quality of the repair or what the inspector looks at.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Gas shut off in Winton Hills? On multi-unit property the owner authorises the work. Call (513) 586-5107.',
    relevance: [
      'Winton Hills (ZIP 45232) mixes residential and industrial areas near Winton Road, including a good deal of multi-unit housing, and on that housing none of the gas system belongs to a resident. The meter arrangements and house lines serving each building are the property’s, so the repair is authorised and paid for by the owner and a resident cannot start it by calling a plumber.',
      'Where one system serves several units, a pressure test covers all of it and every household is off until it passes — a larger job than a single house but much cheaper handled as one than piecemeal, on one permit and one inspection. What residents can usefully do is report how many units are affected and whether it is one building or several, because that tells management and us what we are dealing with.',
    ],
    commonIntro:
      "Across Winton Hills' multi-unit housing and the streets along the industrial boundary, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Several units in my Winton Hills building have no gas. Will they be dealt with separately?',
        a: 'Usually not — where one system serves them, a pressure test covers the whole thing and they come back together on one permit and one inspection. That is faster and cheaper than separate jobs, but it needs the building owner to authorise it, which is normally the delay rather than the work itself.',
      },
    ],
  },

  roselawn: {
    intro:
      'Gas shut off in Roselawn? Mid-century apartment buildings often run one shared system. Call (513) 586-5107.',
    relevance: [
      'Roselawn (ZIP 45237) runs along Reading Road in mid-century single-family homes mixed with apartment buildings of the same era, and those apartment buildings raise a specific issue. Where a building still runs its original gas arrangement, a shutoff affects every unit on the system at once and the pressure test covers all of it — including branches added to kitchens over the decades.',
      'That changes the cost, the timeline and who has to act: the building owner rather than the households without hot water. On the single-family streets the picture is simpler — mid-century piping now feeding much newer appliances, with the sizing question worth checking as well as the leak question, because a run adequate in 1960 may not supply a modern furnace and a tankless heater together.',
    ],
    commonIntro:
      "Across Roselawn's mid-century houses and apartment buildings, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you restore gas to just my Roselawn apartment rather than the whole building?',
        a: 'Only if the fault is on a branch serving your unit alone. Where the building runs one shared system, a pressure test covers all of it and everyone comes back together — which is faster and cheaper than doing it unit by unit, but needs the owner to authorise it. We establish which arrangement the building has before quoting.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Gas shut off at your Mount Airy home? Mid-century piping under modern appliances. Call (513) 586-5107.',
    relevance: [
      'Mount Airy (ZIP 45239) is mid-century single-family housing on hilly, wooded streets beside Mount Airy Forest, and the gas systems here are largely of one era — installed with the houses and, in a great many cases, never replaced. The appliances have been replaced once or twice since, so what a pressure test finds is the piping rather than anything new.',
      'The sizing question is worth raising alongside the leak question on houses of this vintage. A run adequate for a 1955 furnace and water heater may not deliver enough for a modern furnace, a tankless heater and a range drawing at once, which presents as appliances behaving badly rather than as a leak. Both need checking, and they need different repairs.',
    ],
    commonIntro:
      "Across Mount Airy's mid-century homes on largely original piping, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Our Mount Airy furnace and tankless heater seem to fight each other. Is that a gas problem?',
        a: 'Very possibly a sizing one rather than a leak. A tankless water heater draws heavily and briefly, and on a run sized for a 1950s house that can pull pressure down enough for the furnace to misbehave. It needs measuring at the appliances with both drawing, and where that is the finding the fix is upsizing the run rather than chasing a fault.',
      },
    ],
  },

  hartwell: {
    intro:
      'Gas shut off at your Hartwell home? Victorian houses often still have gas-lighting pipe. Call (513) 586-5107.',
    relevance: [
      'Hartwell (ZIP 45215) grew as a streetcar suburb, and the Victorian and early-1900s houses that came with it were originally lit by gas. When electric lighting arrived those lines were capped at the wall rather than removed, because taking them out meant opening plaster throughout — so a century later they are still part of the system.',
      'A pressure test tests them along with everything else, and a cap that has held for decades can begin to weep. Because the pipe runs behind original plaster, locating one takes patience: we isolate sections rather than opening walls speculatively. Hartwell shares ZIP 45215 with several separate municipalities, so the permit follows the address rather than the postal code.',
    ],
    commonIntro:
      "In Hartwell's tall Victorian and early-1900s houses, where abandoned gas-lighting lines often remain, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Could old gas-lighting pipe be behind my Hartwell pressure test failure?',
        a: 'It genuinely could. Houses of this era were lit by gas, and the lines were usually capped at the wall rather than removed when electric arrived. Those runs are still connected a century later, and a cap that held for decades can start to weep. We isolate sections to find it rather than opening plaster speculatively.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Gas shut off at your Kennedy Heights home? Large resort-era houses with extensive systems. Call (513) 586-5107.',
    relevance: [
      'Kennedy Heights (ZIP 45213) began as a Victorian-era resort community, and the housing it left is large early-1900s homes on generous hilltop lots. Houses of that scale have extensive gas systems — a furnace, sometimes two zones, a water heater, a range, frequently fireplaces added later — and a pressure test checks every branch together.',
      'They also date from an era when houses were lit by gas, so there may be capped lighting runs still connected behind original plaster. Diagnosing a shutoff means isolating and testing in sections rather than hunting one obvious fault, and it takes longer on a house this size. Where a run has to be replaced, the routing needs planning so it does not cross rooms nobody wants opened.',
    ],
    commonIntro:
      "In Kennedy Heights' large resort-era houses with extensive gas systems, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Will replacing gas pipe in my Kennedy Heights house mean opening finished rooms?',
        a: 'Sometimes, and we would rather tell you where before starting. Existing chases and basement runs are used wherever they work, which avoids finished rooms on many houses. Where a wall genuinely has to be opened we say so at the estimate, and we will discuss whether a longer route through unfinished space is worth it to leave the original plaster alone.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Gas shut off in St. Bernard? Its own city permits and its own inspector. Call (513) 586-5107.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, entirely surrounded by Cincinnati, built up around the Ivorydale complex in a dense grid of early-1900s homes on small valley lots. For a gas shutoff the jurisdiction comes first: permits and inspections go through St. Bernard rather than Cincinnati, on a much smaller municipal schedule, and the utility waits for that sign-off before restoring service.',
      'That usually works in your favour, provided the paperwork went to the right office rather than to the city out of habit. The housing is the usual era and the lots are small, so the meter often sits in a narrow gap where the setup takes longer than the repair. A pressure test on piping of this vintage finds the accumulated history — altered runs and capped lines from appliances long gone.',
    ],
    commonIntro:
      "In St. Bernard's dense early-1900s grid beside Ivorydale, on the city's own permit schedule, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Does St. Bernard being a separate city slow down getting gas back?',
        a: 'Generally it speeds it up, provided the filing goes to the right place. Permits and inspections are St. Bernard’s rather than Cincinnati’s, and a small municipal queue often moves faster than the city’s. The risk is a contractor filing with Cincinnati by habit, which means waiting while it is refiled — worth asking before you book.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Gas shut off in Elmwood Place? A tiny village on low valley ground. Call (513) 586-5107.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley with early-1900s houses spaced about as closely as anywhere in the county, and it issues its own permits and inspections. Being that small means the inspection capacity is minimal, which is what determines how quickly a shutoff clears rather than the plumbing work.',
      'The valley puts gas appliances where water reaches them. Where a furnace or water heater has been submerged, the control valve is replaced rather than dried out. Because the housing is uniformly low and closely packed, that tends to affect several neighbouring houses at once — which is exactly when having one plumber handle them together saves days in a queue with very little slack.',
    ],
    commonIntro:
      "In Elmwood Place's closely spaced early-1900s houses on low valley ground, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Several Elmwood Place houses lost gas in the same flooding. Is coordinating worth it?',
        a: 'Very much so in a village this small. One plumber handling neighbouring houses together means shared setup, permits filed as a batch, and the inspector seeing several properties in one visit. It does not change what each owner pays for their own appliances and piping, and with minimal municipal capacity it can save several days.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Gas shut off at your Delhi Hills property? Outbuildings on their own gas supply are common. Call (513) 586-5107.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township above the Ohio, an area with deep ties to greenhouse and floral growing, and that heritage leaves something specific behind. A fair number of properties have outbuildings — former greenhouse structures, barns, workshops — that were given their own gas supply, sometimes decades ago and often to a standard that would not pass now.',
      'Those secondary runs are still part of the system a pressure test checks, and they are frequently where a failure is found. It does not derail the job, but discovering it midway is worse than planning for it — so mention any outbuilding with gas when you call. Permits and inspections go through Delhi Township rather than the city, which is worth confirming before anything is filed.',
    ],
    commonIntro:
      "Across Delhi Hills' mid-century homes, some with outbuildings on their own gas supply, the shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'My Delhi Hills property has an old greenhouse with a gas line. Does that matter?',
        a: 'It does, and it is better raised at the start. Secondary gas runs to greenhouses, barns and workshops were often installed long ago to a standard that would not pass now, and they are still part of the system a pressure test checks — frequently they are where the failure is. Planning for it beats discovering it with the job half done.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Gas shut off in Golf Manor? Modest houses on genuinely small original piping. Call (513) 586-5107.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village entirely surrounded by Cincinnati, a compact grid of modest mid-century houses, and modest is the operative word for the gas system. These homes were piped for a cooker and a heater, and a great many runs are still close to what was installed.',
      'Where a house has since gained a modern furnace, a water heater and a range, the question at a shutoff is whether the fault is a leak or a run that simply cannot deliver what everything drawing at once demands. They need different repairs, and telling them apart means measuring rather than assuming. Golf Manor issues its own permits and inspections, on a village schedule that is often quicker than the city’s.',
    ],
    commonIntro:
      "Across Golf Manor's compact grid of modest mid-century homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is my Golf Manor gas problem a leak or the pipe being too small?',
        a: 'A pressure test answers the leak question — either the system holds or it does not. Sizing is a separate measurement taken at the appliances with several drawing at once. A system can hold pressure perfectly and still be too small for what the house now runs, and the two problems have different repairs.',
      },
    ],
  },

  fairfax: {
    intro:
      'Gas shut off in Fairfax? Unlike Mariemont next door, no historic designation applies. Call (513) 586-5107.',
    relevance: [
      'Fairfax (ZIP 45227) is a small village along Wooster Pike immediately next to Mariemont, and the contrast is useful. Mariemont is a National Historic Landmark where the exterior is regulated village-wide, so a meter relocation there involves more than a plumbing permit. Fairfax has no such designation, which makes a gas repair here exactly what it looks like: fix the fault, pass the test, get it inspected.',
      'That makes Fairfax one of the more straightforward places we work, and it is worth saying rather than implying every job is complicated. What does apply is that Fairfax is its own village, so the permit and inspection go through Fairfax rather than the county or the city. The housing is early- and mid-1900s with piping of both eras and the usual findings for each.',
    ],
    commonIntro:
      "Across Fairfax's early- and mid-1900s homes along Wooster Pike, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Fairfax house is next to Mariemont. Do their historic rules apply to my gas meter?',
        a: 'No. Mariemont’s National Historic Landmark status covers Mariemont, not Fairfax, so meter and exterior work here is a normal job with a village permit and an inspection. It is a fair question because the two are close enough that people assume the restrictions carry across. If your address is on the boundary we will confirm which side before filing.',
      },
    ],
  },

  mack: {
    intro:
      'Gas shut off at your Mack home? Green Township issues the permit, not the city. Call (513) 586-5107.',
    relevance: [
      'Mack (ZIP 45248) is an established Green Township community of mid-century and newer single-family homes, and the first thing to settle is where the paperwork goes: permits and inspections are the township’s and Hamilton County’s rather than the city of Cincinnati’s. A contractor who works mostly in town can file with the wrong authority, and the utility waits for the correct sign-off.',
      'The housing spans enough years that the piping does too. Mid-century streets are black iron, original, now feeding much newer appliances — with the sizing question worth checking alongside the leak question. Newer sections may be piped in CSST, where the common inspection finding is bonding to the electrical grounding system rather than a leak at all.',
    ],
    commonIntro:
      "Across Mack's mid-century and newer homes in Green Township, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is a Mack gas permit a Cincinnati one?',
        a: 'No. Mack is in Green Township, so the permit and inspection go through the township and Hamilton County rather than the city. It is a common mix-up for contractors who work mostly inside the city, and the cost of getting it wrong is a delay while the filing is redone rather than anything wrong with the work.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Gas shut off at your Monfort Heights home? Almost every system here is the same age. Call (513) 586-5107.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a Green Township suburb made up almost entirely of mid-century single-family homes, and that uniformity is unusual. In most neighborhoods the gas piping on one street spans decades. Here it largely does not — the houses went up in a comparable period, were piped the same way, and have aged at the same rate.',
      'The practical consequence is that if a neighbour has recently needed piping work to clear a shutoff, yours is likely the same vintage and condition. That is information rather than a sales pitch: it does not mean yours is failing, only that if something does stop a reconnection the sensible repair is more likely to be a section replacement than a patch. Permits go through the township.',
    ],
    commonIntro:
      "Across Monfort Heights' uniformly mid-century homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Monfort Heights neighbour needed gas piping replaced. Will mine?',
        a: 'Not necessarily, but it is reasonable to check. Houses here were built and piped in a similar period and have aged the same way, so yours is likely the same vintage. That does not mean it is failing — only that if something does stop a reconnection, a section replacement is more likely than a patch. Worth looking at when something else brings us out.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Gas shut off at your Bridgetown home? Green Township permits, and mixed piping ages. Call (513) 586-5107.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community of mid-century and newer homes on wide suburban lots, and the mixed ages mean two conversations. On the mid-century streets the piping is original black iron, sized for its era, now feeding appliances several generations newer — so both the leak question and the sizing question are worth checking.',
      'On the newer streets the piping is frequently CSST, where the usual inspection finding is bonding to the electrical grounding system rather than a leak. We establish which you have before quoting because the scope is not comparable. Permits and inspections go through Green Township and Hamilton County rather than the city, which is worth confirming before work is scheduled.',
    ],
    commonIntro:
      "Across Bridgetown's mid-century and newer homes in Green Township, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'How do I know whether my Bridgetown gas piping is black iron or CSST?',
        a: 'Look at the run near the meter or the furnace. Black iron is rigid dark pipe with threaded fittings; CSST is flexible tubing with a yellow jacket. It matters because the likely finding differs — on black iron it is leaks and capped lines, on CSST it is usually bonding to the electrical grounding system. Both are fixable, and the work is different.',
      },
    ],
  },

  finneytown: {
    intro:
      'Gas shut off at your Finneytown home? Springfield Township issues the permit. Call (513) 586-5107.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community of largely mid-century single-family homes, and the jurisdiction is worth stating because it catches contractors out: Springfield Township is a different authority from the west-side townships and from the city, and permits and inspections go through it.',
      'The housing is uniformly of an era, so the findings are consistent — original black iron installed with the houses, now feeding appliances that have been replaced once or twice since. That makes the sizing question as worth asking as the leak question, because a run adequate for the appliances of 1960 may not supply a modern furnace and a tankless heater together.',
    ],
    commonIntro:
      "Across Finneytown's mid-century homes in Springfield Township, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is a Finneytown gas permit the same as a Cincinnati one?',
        a: 'No. Finneytown is in Springfield Township, so the permit and inspection go through the township rather than the city — and it is a separate authority from the west-side townships too. Worth asking any plumber before booking, because filing in the wrong place means waiting while it is redone.',
      },
    ],
  },

  amberley: {
    intro:
      'Gas shut off at your Amberley Village home? Large properties often have several gas supplies. Call (513) 586-5107.',
    relevance: [
      'Amberley Village (ZIP 45237) is large homes on big, wooded lots along winding streets, and properties of this size frequently have more gas system than a single house needs. Two heating zones, a water heater, a range, gas fireplaces, and often supplies running to a pool heater, an outbuilding or an outdoor kitchen added at some point.',
      'Every one of those is a branch, and a pressure test checks all of them together — so diagnosing a shutoff here takes longer than on a modest house because there is simply more system. Outdoor and outbuilding runs are the branches most often added without a permit, and they are worth mentioning when you call. The village issues its own permits and inspections rather than the county.',
    ],
    commonIntro:
      "In Amberley Village's large homes with extensive gas systems, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'We have an outdoor kitchen and a pool heater on gas in Amberley. Do those affect the test?',
        a: 'Yes, and they are worth mentioning when you call. Each is a branch with joints and a valve, and outdoor runs are the additions most often made without a permit — which makes them both a likely source and a likely inspection issue. It does not mean they are a problem, only that they are part of the system being tested and we need to know they exist.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Gas shut off in Arlington Heights? A very small village on low valley ground. Call (513) 586-5107.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley with a compact grid of older homes — one of the smallest municipalities we work in. Its own permit and inspection capacity is minimal, and that is what determines how quickly a gas shutoff clears rather than the plumbing work itself.',
      'The valley puts gas appliances where water reaches them, so submerged controls are a recurring cause and they are replaced rather than dried out. Where several neighbouring houses need the same work after the same flooding — which happens because the housing is uniformly low — coordinating through one plumber saves days in a queue with very little slack in it.',
    ],
    commonIntro:
      "In Arlington Heights' compact grid of older homes on low valley ground, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'How long does a gas shutoff take to clear in Arlington Heights?',
        a: 'The testing and repair are frequently a day. The variable is the inspection, because this is a very small village with minimal capacity, and then the utility’s reconnect visit. That is why we book the inspection alongside scheduling the work rather than after it is finished.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Gas shut off in North College Hill? Despite the name, this is not College Hill for permits. Call (513) 586-5107.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city immediately north of Cincinnati’s College Hill neighborhood, and the name causes a genuine problem. People assume the two are the same administratively. They are not: College Hill is a Cincinnati neighborhood whose permits go through the city, while North College Hill is a separate municipality issuing its own.',
      'A plumber filing for the wrong one does not fail an inspection — the paperwork comes back and is refiled while the house sits without hot water. It is the most common mix-up out here. The housing is a tight grid of early- and mid-1900s homes on small lots, so the meter often sits in a narrow gap, and the piping findings are the usual ones for those eras.',
    ],
    commonIntro:
      "In North College Hill's tight grid of early- and mid-1900s homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is North College Hill part of College Hill for the gas permit?',
        a: 'No, and it is the most common mix-up out here. College Hill is a Cincinnati neighborhood and its permits go through the city; North College Hill is a separate city issuing its own. Getting it wrong means a delay rather than a failure — the filing comes back and is redone — so ask whoever you call whether they have pulled permits in North College Hill specifically.',
      },
    ],
  },
};
