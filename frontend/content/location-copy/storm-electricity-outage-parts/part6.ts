import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 6 — the north-side neighborhoods, the small surrounded villages and
// cities, and the Green and Springfield township communities on the west and
// north sides.
export const part6: Record<string, LocationServiceCopy> = {
  'western-hills': {
    intro:
      'Storm damage at the mast or meter base in Western Hills? Duke restores the line and stops there. We repair the rest around Glenway Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Western Hills (ZIP 45211) is the established area around Western Hills Plaza and Glenway Avenue, and it is spread across the ridge and shoulders of the west-side hills rather than laid out on one flat grid. That is the thing that decides your storm exposure here, street by street. Houses along the ridge lines take wind that has crossed the valley with nothing to break it. Houses tucked into the shoulders a few streets away are genuinely sheltered, and can come through the same storm untouched.',
      'The housing runs early-1900s through mid-century, so services span two eras — original entrances on the older streets, and mid-century equipment on the rest, much of it still in place and sized for the loads of its time. Where a storm damages something already marginal, the decision worth making is whether to rebuild it as it was or bring it up to what the house now draws, since the labour, the permit, and the inspection cost the same either way.',
    ],
    commonIntro:
      "Across Western Hills' ridge and shoulder streets, where exposure changes within a few blocks, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Western Hills street lost power and the next one over did not. Is that normal?',
        a: 'On this terrain, yes. Ridge streets catch wind that has come across the valley unbroken, while streets in the shoulders behind them are sheltered from the same gusts. It means damage clusters oddly here. What matters for you is narrower: if the houses either side of yours have lights and you do not, the fault is on your own equipment and Duke will not reconnect to it until it is repaired and inspected.',
      },
    ],
  },

  california: {
    intro:
      'Storm damage or a flooded panel in California? This is the city’s lowest riverfront ground. We repair masts, meter bases, and panels along Kellogg. Call (513) 586-5107.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, sitting on some of the lowest ground in the city right beside the Ohio. Two consequences follow from that, and they compound each other. Flooding here is not a rare event, so panels in low levels have often been under water more than once. And being at the far eastern edge means that in a regional storm this is commonly among the later areas reached, so the wait is longer before anyone even looks at it.',
      'The rule on submerged equipment does not bend for how often it happens. A panel that has stood in water is replaced rather than dried and re-energised, because water gets behind the bus bars and into the breakers and corrosion continues long after the surface looks fine. An inspector will check for that before Duke reconnects. If your panel has been replaced once already for the same reason, it is worth asking whether it can be relocated higher while we are there.',
    ],
    commonIntro:
      "On California's low riverfront ground along Kellogg Avenue, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My California panel has flooded before. Can it be moved somewhere higher?',
        a: 'Sometimes, and it is the right question to ask during a repair rather than after the next flood. The service entrance position and the run to the meter constrain where a panel can go, so it is not always practical — but where it is, moving it higher up the wall or to a different room turns a recurring replacement into a one-off. We will tell you honestly whether your layout allows it.',
      },
    ],
  },

  carthage: {
    intro:
      'Storm-damaged service on your Carthage home? We repair masts and meter bases along Vine Street and handle the inspection Duke needs. Call (513) 586-5107.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village that now holds the Hamilton County Fairgrounds. That combination — a tight old village grid with a large open site beside it — is what shapes storm damage here. The fairgrounds is a substantial clear area, and open ground gives wind a run-up before it reaches the closely built streets on the other side. Houses on the blocks facing that opening take more than their position in a sheltered north-side neighborhood would suggest.',
      'The housing is older early-1900s stock on a village grid, which means houses close together, short overhead spans, and service entrances that are frequently original or reworked once decades ago. Short spans are an advantage — less line for a limb to catch — but an old entrance in a strong gust can still be pulled out of true or have its fixings worked loose, and that is enough to stop a reconnect.',
    ],
    commonIntro:
      "In Carthage's tight village grid beside the fairgrounds, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The houses on my Carthage street are close together. Does that help or hurt in a storm?',
        a: 'It helps with one thing and not another. Close spacing means short overhead spans, so there is less line for a falling limb to catch than on a wide suburban lot. What it does not protect against is wind working directly on an old service entrance, which is the more common failure here, and it does mean one tree can reach several roofs at once.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Storm damage to the electrical service in Winton Hills? On multi-unit property the equipment belongs to the owner, not the resident. Call (513) 586-5107.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road with a mix of residential and industrial areas, including a good deal of multi-unit housing. The residential and industrial boundary runs through the neighborhood, and that has a real effect on how quickly the lines come back: circuits serving industrial premises are sometimes restored on a different schedule from purely residential streets, so which side of that boundary you sit on can matter more than how far you are from the substation.',
      'On the multi-unit housing the ownership question comes first regardless. Service entrances, meter banks, and the distribution feeding each building belong to the property rather than to any resident, so the repair is authorised and paid for by the owner or management, and a resident cannot get it started by calling an electrician directly. What residents can do is report accurately — how many buildings are dark, and whether the street lights are on — because that is what separates a utility outage from damage to the property’s own equipment.',
    ],
    commonIntro:
      "Across Winton Hills' multi-unit housing and the streets along the industrial boundary, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Winton Hills building is dark but the industrial units nearby have power. Why?',
        a: 'Two possibilities, and they need different responses. Circuits serving industrial premises are sometimes on a different restoration schedule, so the lines feeding you may simply not be back yet. Or the lines are back and the fault is on your building’s own equipment, which the property owner has to arrange. Telling the property office whether the street lights are on is the quickest way to distinguish them.',
      },
    ],
  },

  roselawn: {
    intro:
      'Storm damage to a service or meter bank in Roselawn? We repair both, along Reading Road, and handle the permit and inspection. Call (513) 586-5107.',
    relevance: [
      'Roselawn (ZIP 45237) runs along Reading Road in settled streets of mid-century single-family homes mixed with apartment buildings from the same era. Those apartment buildings are the thing worth understanding here, because a meter bank is a different proposition from a single service. Where a mid-century building still has its original bank — and many do — storm damage frequently means replacing the whole assembly rather than one meter socket, because the parts are long obsolete and the enclosure itself is sixty years old.',
      'That changes both the cost and the timeline, and it changes who has to act. A bank serving eight units comes off as one piece and goes back as one piece, so all eight households are out together and back together, on one permit and one inspection. It is faster and cheaper than eight separate jobs, but it needs the building owner to authorise it. On the single-family streets the picture is simpler: mid-century services, many original, sized for mid-century loads.',
    ],
    commonIntro:
      "Across Roselawn's mid-century houses and apartment buildings along Reading Road, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'The meter bank on my Roselawn building is original. Can you just replace the damaged part?',
        a: 'Rarely, and it is better to know that up front. Parts for a sixty-year-old bank are generally obsolete, and the enclosure is as old as the parts, so the practical repair is replacing the assembly. That means all the units it serves come off and go back together on one permit and one inspection — more expensive than a single socket, considerably cheaper than doing it piecemeal over the next few years.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Storm damage at the service on your Mount Airy home? Beside one of the country’s largest city forests, limb damage is the norm here. Call (513) 586-5107.',
    relevance: [
      'Mount Airy (ZIP 45239) sits beside Mount Airy Forest, one of the largest city parks in the country, in mid-century single-family homes on hilly, wooded streets. This is not a neighborhood with a tree-lined street or two — the woodland is the setting, and it continues through the residential streets rather than stopping at a park boundary. Overhead service drops here run under genuine forest canopy, and the trees are full-grown hardwoods rather than the ornamental planting on a suburban verge.',
      'That means limb damage is the routine call in Mount Airy rather than the unusual one, and the limbs are bigger than the equivalent elsewhere. Combined with hilly terrain that puts drops across a grade, the load on a mast when something lands is substantial. The mid-century housing adds the second half: services from that era, many still original, sized for the loads of the 1950s and not for what these houses now run.',
    ],
    commonIntro:
      "On Mount Airy's wooded, hilly streets beside the forest, where drops run under full-grown hardwoods, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Mount Airy house loses power most storms. Is there anything to do besides repair it?',
        a: 'Two things help. Keeping limbs off the drop is the direct one, and worth arranging with a tree service before storm season rather than after — Duke will clear vegetation from their lines but not from the span across your own property in every case. The second is whole-home surge protection at the panel, which does nothing about the outage but protects the equipment inside from what a nearby strike sends through the wiring.',
      },
    ],
  },

  hartwell: {
    intro:
      'Storm damage to the service on your Hartwell home? We repair masts, weatherheads, and meter bases on the old streetcar streets the same day. Call (513) 586-5107.',
    relevance: [
      'Hartwell (ZIP 45215) grew as a streetcar suburb, and the lot pattern that produced still shapes the neighborhood: narrow, deep lots laid out along the old line, with Victorian and early-1900s houses set close to the street and long gardens behind. That has a specific effect on storm damage. The overhead span from the pole to the house is short, which is an advantage — but the houses are tall, close together, and the street trees planted with the suburb are now full-grown directly over both the line and the roofs.',
      'On a tall Victorian the service entrance sits high on the wall, and often runs up through the roof rather than stopping at the eaves. When a limb bends a mast at a roof penetration you have an electrical problem and a hole in the roof at the same time, which is why we treat the flashing and the seal there as part of the repair rather than a roofer’s follow-up. Doing the wiring and leaving the penetration is how a storm repair becomes a ceiling stain by January.',
    ],
    commonIntro:
      "In Hartwell's tall Victorian and early-1900s houses on narrow streetcar-era lots, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The mast on my Hartwell house goes through the roof. Who deals with the roof part?',
        a: 'We do, as part of the job. Where the mast passes through the roof, the flashing and the seal around it belong to the service entrance, and replacing the mast without redoing them properly leaves you with a leak that shows up months later. If the limb damaged the roof more widely — decking or a broad area of shingles — that is a roofer’s work and we will tell you plainly which parts are which.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Storm-damaged mast or meter base in Kennedy Heights? We repair it, handle the permit and inspection, and coordinate the reconnect on the hilltop. Call (513) 586-5107.',
    relevance: [
      'Kennedy Heights (ZIP 45213) began as a Victorian-era resort community on the east-side hilltop, and that origin left a particular kind of housing behind: large early-1900s houses on generous lots, with mature ornamental planting that was chosen for a resort rather than a subdivision. Those trees are now a century old and standing over the service drops, and they are specimen planting rather than street trees — bigger, heavier limbs than the same species would grow on a verge.',
      'Being on a hilltop puts the wind behind them. The houses are also large and tall enough that the service entrance sits high on the wall, so a repair here is a proper job with a proper setup rather than an hour off a ladder. Inside, houses of this size commonly run multiple heating zones, finished lower levels, and a lot of equipment on control boards — all of which a surge from a nearby strike goes through at once, frequently costing more than the mast that got the power back on.',
    ],
    commonIntro:
      "In Kennedy Heights' large resort-era houses under century-old specimen trees, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Power came back to my Kennedy Heights house but the furnace and some appliances did not. Why?',
        a: 'That pattern usually means a surge rather than a service fault. A spike came through the line and took out control boards while leaving the wiring itself sound. Furnace and heat pump boards, oven controls, and anything with a processor are the usual casualties. It is worth having the panel checked too, because a surge strong enough to kill several boards has sometimes damaged breakers on the way through.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Storm damage to your service in St. Bernard? St. Bernard is its own city with its own permits. We handle that and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex in a dense grid of early-1900s homes on small valley lots. Sitting alongside a major industrial site has an effect on outages that is worth understanding: the circuits through this area serve substantial industrial load as well as houses, and industrial restoration priorities do not always line up with residential streets. Sometimes that works in your favour and sometimes it does not.',
      'What is entirely in your favour is that the permit and the inspection go through St. Bernard rather than Cincinnati, on a much smaller municipal schedule. After a storm that hit the whole region, a small queue can move considerably faster than the city’s — provided the paperwork went to the right office first time. Electricians who work mostly downtown sometimes file with Cincinnati out of habit and lose a day finding out, so it is a fair question to ask before booking.',
    ],
    commonIntro:
      "In St. Bernard's dense early-1900s grid beside Ivorydale, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Does St. Bernard being its own city help or hurt after a storm?',
        a: 'Generally it helps, as long as the paperwork goes to the right place. The permit and inspection are St. Bernard’s rather than Cincinnati’s, and a small municipal queue often moves faster than the city’s when a storm has damaged property across the whole region. The risk is an electrician filing with Cincinnati by habit, which does not fail the inspection but does mean waiting while it is refiled.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Storm damage or a flooded panel in Elmwood Place? Closely spaced houses on low valley ground get both. We repair both. Call (513) 586-5107.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley, with early-1900s houses spaced about as closely as anywhere in the county. That density is the storm factor. When a tree comes down here it does not affect one property — it reaches across two or three narrow lots, taking multiple service drops with it, and in a village this small that can be a meaningful share of the whole place at once.',
      'The valley underneath supplies the second problem. Low ground means basements take water in the same storms, and the panel is nearly always in the basement, and submerged electrical equipment gets replaced rather than dried out. So the common Elmwood Place pattern is several neighbouring houses each needing a mast rebuilt and a panel replaced at the same time. Calling early genuinely matters here, because a small village competing for the same inspection slots is a real constraint.',
    ],
    commonIntro:
      "In Elmwood Place's closely spaced early-1900s houses on low valley ground, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Several houses on my Elmwood Place street are damaged. Is it worth coordinating?',
        a: 'Very much so. Where neighbouring houses each need work on their own service, having one electrician handle them together is faster for everyone — the setup is shared, the permits go in as a batch, and the inspector sees several properties in one visit rather than several trips. It does not change what each homeowner pays for their own equipment, and it can save days in the queue.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Storm damage at the service on your Delhi Hills home? We repair masts and meter bases on the hilly streets above the river. Call (513) 586-5107.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio, an area with deep ties to greenhouse and floral growing, in established mid-century homes on hilly streets. That growing heritage leaves a practical wrinkle on some properties: outbuildings, former greenhouse structures, and detached garages that were given their own supply, sometimes decades ago and sometimes not to any standard you would recognise now. After a storm those secondary supplies are frequently what fails, and they are frequently what an inspector takes an interest in.',
      'The main service is more straightforward — mid-century equipment, plenty of it original, on streets hilly enough that drops run across a grade rather than level. Being in Delhi Township means the permit and inspection go through the township rather than the city, which is worth confirming before work is scheduled. If you have an outbuilding on its own supply, mention it when you call, because it changes what we need to look at.',
    ],
    commonIntro:
      "Across Delhi Hills' mid-century homes on hilly township streets, some with outbuildings on their own supply, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Delhi Hills property has an old outbuilding with its own power. Does that complicate a storm repair?',
        a: 'It can, and it is better mentioned at the start. Secondary supplies to greenhouses, barns, and detached garages were often installed a long time ago to a standard that would not pass now, and once an inspector is on site looking at your main service they may well look at that too. It does not have to derail the job, but discovering it midway is worse than planning for it.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Storm-damaged service on your Golf Manor home? Duke will not reconnect until it is repaired and inspected. Golf Manor runs its own permits. Call (513) 586-5107.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village entirely surrounded by Cincinnati, laid out as a compact grid of modest mid-century houses. Modest is the operative word for a storm repair. These homes were built with genuinely small electrical services — adequate for a house with a few lights, a stove, and not much else — and a great many are still on that original equipment. That matters because when a storm damages an already-minimal service, rebuilding it exactly as it was puts you back on something that was inadequate before the storm arrived.',
      'The houses being modest also means the entrances are low and accessible, so the physical repair is usually straightforward compared with a tall Victorian. The permit and inspection go through Golf Manor rather than Cincinnati, on a village schedule, which after a regional storm can be quicker than the city — as long as the filing goes to the right office. Worth asking any electrician whether they have worked in the village before.',
    ],
    commonIntro:
      "Across Golf Manor's compact grid of modest mid-century homes, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Golf Manor house has a small original service. Is a storm repair the time to change that?',
        a: 'It usually is. The costs that dominate this job are the labour, the permit, and the inspection, and they are the same whether we refit what was there or install a properly sized service. On a modest mid-century house that now runs central air, a modern kitchen, and possibly an EV charger, putting the original service back means paying that whole set of costs again before long.',
      },
    ],
  },

  fairfax: {
    intro:
      'Storm damage to the mast or meter base on your Fairfax home? Straightforward repair, village permit, and we coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike, immediately next to Mariemont, in established early- and mid-1900s homes. The contrast with its neighbour is genuinely useful to know. Mariemont is a National Historic Landmark where the visible exterior is regulated village-wide, so a service mast there involves more than an electrical permit. Fairfax has no such designation, which means a storm repair here is exactly what it looks like: rebuild the entrance properly, get it inspected, get the meter back in.',
      'That makes Fairfax one of the more straightforward places we work, and it is worth saying so plainly rather than implying every job is complicated. What does apply is that Fairfax is its own village, so the permit and inspection go through Fairfax rather than Hamilton County or Cincinnati. The housing is early- and mid-1900s, with services of both eras, and street trees now well above roof height.',
    ],
    commonIntro:
      "Across Fairfax's early- and mid-1900s homes along Wooster Pike, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Fairfax house is next to Mariemont. Do the historic rules apply to me?',
        a: 'No. Mariemont’s National Historic Landmark status covers Mariemont, not Fairfax, so a service repair here is a normal electrical job with a village permit and an inspection. It is a fair question, because the two are close enough that people assume the restrictions carry across, and they do not. If your address is genuinely on the boundary we will confirm which side before filing anything.',
      },
    ],
  },

  mack: {
    intro:
      'Storm damage at the service on your Mack home? We repair masts, meter bases, and panels across Green Township and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with mid-century and newer single-family homes. Green Township is large — large enough that Duke restores it in sections after a major storm, which means the question "is Mack back on?" tells you very little. One part of the community can be lit while another waits, and the useful comparison is always the two houses immediately either side of yours rather than anything a few streets over.',
      'The housing spans enough years that the answer varies too. Mid-century streets are overhead with masts to lose and services sized for their era. Newer sections were frequently developed with underground supply, so those houses have no mast or weatherhead at all and only lose power when the utility does, or when there is a fault at the meter or in the panel. Permits and inspections go through the township rather than the city, which is worth establishing before scheduling.',
    ],
    commonIntro:
      "Across Mack's mid-century and newer homes in Green Township, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Some of Green Township has power back and some does not. What does that tell me about my house?',
        a: 'Not much on its own — the township is large enough that restoration happens in sections, so another area being lit says nothing about your street. Judge it by your immediate neighbours. Lights either side of you and none in your house means the fault is on your own equipment and Duke cannot reconnect to it. A whole dark block means your section has not been reached yet.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Storm-damaged mast or meter base in Monfort Heights? We repair it, file with the township, and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb made up almost entirely of mid-century single-family homes, and that uniformity is unusual enough to matter. In most neighborhoods we work in, the services on one street span decades. Here they largely do not — the houses went up in a comparable period, were given comparable electrical services, and those services have aged at the same rate. When a storm comes through, the equipment across the neighborhood is at a similar point in its life.',
      'The practical effect is that damage here tends to be less about which house was unlucky and more about which drops had a limb over them. The trees planted with those subdivisions are now full-grown and standing over the lines. It also means that if your neighbour has recently had to rebuild a service after a storm, yours is likely to be the same vintage and the same condition, which is useful information rather than a sales pitch.',
    ],
    commonIntro:
      "Across Monfort Heights' uniformly mid-century homes under full-grown subdivision trees, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My neighbour in Monfort Heights had to replace their whole service after a storm. Will mine need it too?',
        a: 'Not necessarily, but it is a reasonable thing to check. Houses here went up in a similar period with similar services, so yours is likely the same vintage and has aged the same way. That does not mean it is damaged — it means if a storm does damage it, the sensible repair is more likely to be a rebuild than a patch. Worth having it looked at when something else brings us out rather than paying for a visit on its own.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Storm damage to the service on your Bridgetown home? We repair masts and meter bases across Green Township the same day. Call (513) 586-5107.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community of mid-century and newer homes on the wide suburban lots typical of that side of the county. Wide lots and long driveways mean the overhead service drop often crosses open ground between the pole at the road and the house set back from it — a longer span than anything in the city grid, and a longer span is simply more line for a falling limb to catch. It is the single clearest reason houses out here lose their own equipment while the street stays lit.',
      'The mixed housing ages give two different answers on the same road. Mid-century streets are overhead with services from their era, plenty of them original. Newer building was frequently done with underground supply, and those houses have no mast to lose at all. We establish which you have before quoting, because the likely repair and the reconnect timeline are genuinely different — Duke schedules underground work with more lead time than overhead.',
    ],
    commonIntro:
      "Across Bridgetown's wide-lot mid-century and newer homes, where drops cross long open spans, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Why does my Bridgetown house seem to lose power when the street does not?',
        a: 'Long drops are usually the reason. Where the pole is at the road and the house is set well back, there is far more overhead line on your property than on a city lot, and that is the part a falling limb catches. It is why suburban houses lose masts while the street lights stay on. Keeping limbs clear of that span is the practical prevention, and surge protection at the panel handles what a near strike sends inside.',
      },
    ],
  },

  finneytown: {
    intro:
      'Storm damage at the mast or meter base in Finneytown? We repair it, file with Springfield Township, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, largely mid-century single-family homes on wooded streets. The township is the first thing to establish for the paperwork: Springfield Township is a different authority from Green Township on the west side and from the city, and permits and inspections go through it. An electrician who works across the county needs to file in the right place, and getting it wrong costs a day at exactly the point you cannot afford one.',
      'The setting is well-treed and the housing is uniformly of an era, so the storm pattern is limb damage to services that are mostly original and sized for mid-century loads. Where a limb has damaged an already-marginal service, the choice is between rebuilding it as it was and bringing it up to what the house now draws. The labour, the permit, and the inspection are the same either way, which is what makes the second option worth pricing.',
    ],
    commonIntro:
      "Across Finneytown's mid-century homes on wooded Springfield Township streets, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Is the permit for a Finneytown repair the same as for a Cincinnati one?',
        a: 'No. Finneytown is in Springfield Township, so the permit and inspection go through the township rather than the city, and it is a separate authority from the townships on the west side as well. It is a fair question to ask any electrician before booking, because filing in the wrong place means the paperwork comes back and you wait while it is redone.',
      },
    ],
  },

  amberley: {
    intro:
      'Storm damage at the service on your Amberley Village home? Long drops through woodland make this a limb-damage neighborhood. We repair it. Call (513) 586-5107.',
    relevance: [
      'Amberley Village (ZIP 45237) is known for large homes on big, wooded lots along winding streets, and that description is close to a worst case for overhead electrical service. Big lots mean the house sits well back from the road, so the drop from the pole runs a long way. Wooded lots mean that run passes under mature trees rather than open sky. And winding streets mean the poles and the spans do not follow a straight predictable line, so the exposure varies property to property in ways that are hard to eyeball.',
      'Put together, it is why Amberley houses lose their own equipment in storms that leave the street lit. The houses are also large, frequently with multiple heating and cooling zones, finished lower levels, and a great deal of equipment running on control boards. A surge from a nearby strike goes through all of it at once, and on a house this size that bill routinely exceeds the cost of the mast repair that restored the power.',
    ],
    commonIntro:
      "In Amberley Village's large homes on wooded lots, where long drops run under mature trees, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Is whole-home surge protection worth it on an Amberley house?',
        a: 'On a house with multiple HVAC zones, a finished lower level, and a lot of equipment on control boards, the arithmetic is straightforward. Surge protection at the panel costs a fraction of one furnace board, and a single nearby strike can take out several boards, an inverter, and assorted appliances at once. If we are already there rebuilding a service, that is the cheapest moment to add it — the panel is open and the labour is committed.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Storm damage or a flooded panel in Arlington Heights? One of the smallest villages we work in, on low valley ground. We repair both. Call (513) 586-5107.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley with a compact grid of older homes — one of the smallest municipalities we work in anywhere around Cincinnati. Being this small changes two things after a storm. A single damaged pole line can affect a large share of the village at once, so utility restoration here is usually quick because there is not much of it. And the village’s own permit and inspection capacity is minimal, which becomes the constraint on how fast individual repairs actually finish.',
      'The valley supplies the water. Low ground means basements take it in the same storms that bring wind, and panels are usually in basements, and a panel that has stood in water gets replaced rather than dried out. On these streets the pattern is often several neighbouring houses needing the same two repairs at once, which is exactly when calling early rather than after clearing the yard makes a measurable difference.',
    ],
    commonIntro:
      "In Arlington Heights' compact grid of older homes on low valley ground, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The village got power back quickly but my Arlington Heights house is still off. Why?',
        a: 'Because the utility restored the lines it owns and stopped at your meter. In a village this small the line work finishes quickly, which makes it obvious sooner that one house has a separate problem — and that problem is on equipment you own. It needs a licensed repair and an inspection before Duke will reconnect, and with a small village inspection schedule, getting into that queue early is the main thing within your control.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Storm damage to your service in North College Hill? Despite the name, this is its own city with its own permits — not College Hill. Call (513) 586-5107.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city immediately north of Cincinnati’s College Hill neighborhood, and the name causes a genuine practical problem after a storm. People assume the two are the same place administratively. They are not: College Hill is a Cincinnati neighborhood and permits go through the city, while North College Hill is a separate municipality that issues its own. An electrician filing for the wrong one does not fail an inspection — the paperwork comes back and you wait while it is refiled.',
      'The housing is a tight grid of early- and mid-1900s homes, closely spaced, with short overhead spans and services of both eras. Close spacing means one tree reaches several roofs, so damage tends to cluster on a block rather than scatter across the city. Being a small municipality, the inspection queue is short when the paperwork is right, which after a regional storm is a real advantage over waiting on the city.',
    ],
    commonIntro:
      "In North College Hill's tight grid of early- and mid-1900s homes, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Is North College Hill part of College Hill for permits?',
        a: 'No, and it is the most common mix-up we see out here. College Hill is a Cincinnati neighborhood and its permits go through the city. North College Hill is a separate city that issues its own. The consequence of getting it wrong is a delay rather than a failure — the filing comes back and has to be redone — so it is worth asking whoever you call whether they have pulled permits in North College Hill specifically.',
      },
    ],
  },
};
