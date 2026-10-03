import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 6 — the northern Hamilton County villages and cities, the far west
// river communities, and the first of the Kenton County river cities. NKY is
// served by Duke Energy Kentucky, regulated by the Kentucky PSC.
export const part6: Record<string, LocationServiceCopy> = {
  northbrook: {
    intro:
      'Power disconnected at your Northbrook home? Colerain Township permits, mid-century services. Call (513) 586-5107.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, largely mid-century single-family homes, and it shares its ZIP with Northgate. Permits and inspections go through Colerain Township and Hamilton County rather than the city, which is worth confirming rather than assuming — a contractor who works mostly in town files with the city out of habit.',
      'The services here are mostly of one era, installed with the houses and in a great many cases never replaced. Sized for a mid-century household, they now carry central air, a finished lower level, modern appliances and increasingly a car charger. Run near their ceiling for years they degrade at the connections rather than tripping breakers, and heat damage at the meter socket is what a technician declines to re-energise.',
    ],
    commonIntro:
      "Across Northbrook's mid-century homes in Colerain Township, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Why would a service that has never tripped anything be refused in Northbrook?',
        a: 'Because the two are different tests. A service can run for decades without tripping while its connections slowly degrade under load — that shows up as discolouration or scorching at the meter socket, not as a breaker going. A technician who finds heat damage will not re-energise it regardless of how reliable the house has been.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Power disconnected on your Indian Hill property? Long private runs and outbuildings change the job. Call (513) 586-5107.',
    relevance: [
      'Indian Hill (ZIP 45243) is estates and large homes on multi-acre wooded lots, many set well back from the road, and that geometry changes a disconnection repair fundamentally. The service run from the road to the house can be several hundred feet, frequently underground, and where the fault lies along that run rather than at either end, locating it is the first job rather than an afterthought.',
      'Properties of this size also carry more than one supply. Guest houses, barns, pool equipment, gates and outbuildings often have their own feeds, some installed decades ago to standards that would not pass now — and once an inspector is on site examining the main service they may take an interest in those too. A number of homes here are also on private wells, which means a disconnection takes the water with it, since the pump is electric.',
    ],
    commonIntro:
      "Across Indian Hill's estates on multi-acre lots, with long private runs and secondary supplies, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'What should I tell you when I call about an Indian Hill property?',
        a: 'How far the house sits from the road, whether the run is underground, whether there are outbuildings on their own supply, and whether you are on a well. The distance and routing determine how we trace a fault. The outbuildings matter because an inspector on site may look at them. And the well matters because no power means no water, which raises the priority.',
      },
    ],
  },

  evendale: {
    intro:
      'Power disconnected in Evendale? Village permits, and industrial neighbours on the same circuits. Call (513) 586-5107.',
    relevance: [
      'Evendale (ZIP 45241) is a village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods, and it issues its own permits and inspections. The industrial presence has one practical effect worth knowing: circuits through parts of the village carry very substantial commercial load, and the technicians attending and the priorities they work to are not always the residential ones.',
      'On the residential side the picture is conventional — mid-century homes with services largely of that era, many never replaced, now carrying loads nobody planned for. On the commercial side we are straightforward about our limits: smaller commercial services are work we do, and a large three-phase installation with primary metering or a site transformer is a specialist contractor’s job. Describe what you have on the phone and we will tell you honestly.',
    ],
    commonIntro:
      "Across Evendale's residential streets and its commercial premises, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you handle a commercial service in Evendale?',
        a: 'Smaller commercial, yes — light-industrial units, offices and modest three-phase services are routine for us, permits and inspections included. Large three-phase installations with primary metering or a utility transformer on site need a specialist, and we will say so on the phone rather than after driving out. It saves you a day in a week where days matter.',
      },
    ],
  },

  glendale: {
    intro:
      'Power disconnected in Glendale? A National Historic Landmark village — the exterior is regulated. Call (513) 586-5107.',
    relevance: [
      'Glendale (ZIP 45246) is one of the country’s earliest planned railroad suburbs and a National Historic Landmark, known for preserved Victorian houses on winding, tree-lined streets. The designation is the first thing to raise, because a service entrance, its conduit and the meter box are all visible exterior in a village where appearance is regulated — and it issues its own permits and inspections as well.',
      'The houses themselves are among the oldest we work on, with long histories of retrofitted electrical work behind them. Once an inspector is examining a service to clear a tag, that history determines the scope rather than the single fault that stopped the meter. Rebuilding in the same position and form is normally the cleanest route; where a properly sized modern service would look different from the street, there is more to agree than the electrical permit.',
    ],
    commonIntro:
      "In Glendale's preserved Victorian houses, inside a National Historic Landmark village, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Glendale is a National Historic Landmark. Does that make a service replacement harder?',
        a: 'It can add a step, and it is better known at the start. Putting the service back in the same position and form is normally straightforward because the exterior does not change. Where the old arrangement has gone, or a properly sized modern service would look different from the street, there may be more to agree than the electrical permit alone. We flag it at the estimate.',
      },
    ],
  },

  sharonville: {
    intro:
      'Power disconnected in Sharonville? Its own city permits, sharing a ZIP with Evendale. Call (513) 586-5107.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city with residential neighborhoods, the convention centre and industrial corridors, and it issues its own permits and inspections. It shares that ZIP with Evendale, which is a separate village with its own office — so the filing follows the address rather than the postal code, and getting that wrong means waiting while it is refiled.',
      'The housing is mid-century, with services largely installed when the houses went up and frequently never replaced. Where a house has since gained central air, a finished lower level and modern appliances, the original service has been working beyond its intended range for years. Heat damage at the connections is the usual finding, and it stops a reconnection without anything dramatic having happened.',
    ],
    commonIntro:
      "Across Sharonville's mid-century homes and commercial corridors, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'Sharonville and Evendale share a ZIP. Same permit office?',
        a: 'No — both are separate municipalities with their own permit offices, so the filing follows your actual address rather than the postal code. It is an easy one to get wrong and the cost is a delay while the paperwork is redone. We confirm the correct authority before submitting anything.',
      },
    ],
  },

  northgate: {
    intro:
      'Power disconnected at your Northgate home? Colerain Township permits, mid-century and newer services. Call (513) 586-5107.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area around the Northgate Mall corridor, sharing its ZIP with Northbrook, and permits go through Colerain Township and Hamilton County rather than the city. Colerain is one of the largest townships in Ohio, which means the township office rather than any village or city handles the filing and the inspection.',
      'The housing runs mid-century through newer, so the answer varies by street. Mid-century services are frequently original and now working past their intended range, showing heat damage at the connections. Newer sections have modern panels and adequate capacity, where a disconnection is usually one identifiable thing. The retail corridor also means commercial circuits nearby, restored and attended on a different basis from residential streets.',
    ],
    commonIntro:
      "Across Northgate's mid-century and newer homes in Colerain Township, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Is a Northgate permit handled by the city?',
        a: 'No. Northgate is in Colerain Township, so permits and inspections go through the township and Hamilton County. It is a common mix-up for contractors who work mostly inside the city, and getting it wrong means the filing comes back and you wait without power while it is redone.',
      },
    ],
  },

  springdale: {
    intro:
      'Power disconnected in Springdale? Its own city permits, sharing a ZIP with Glendale. Call (513) 586-5107.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor with established mid-century neighborhoods and a large commercial base, and it issues its own permits and inspections. It shares that ZIP with Glendale — a National Historic Landmark village with its own office and its own exterior requirements — so the two could not be more different administratively despite the same postal code.',
      'The residential picture in Springdale is mid-century: services installed with the houses, many still original, sized for their era and now carrying central air, finished lower levels and modern appliances. Heat damage at the connections is the usual finding. The commercial base means larger services nearby, and we are straightforward about which of those we handle and which need a specialist contractor.',
    ],
    commonIntro:
      "Across Springdale's mid-century homes and its commercial corridor, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 45246, the same as Glendale. Do Glendale’s historic rules apply to me?',
        a: 'No. Glendale is a separate village and a National Historic Landmark; Springdale is its own city with no such designation. Same postal code, entirely different requirements and different permit offices. If your address is genuinely near the boundary we will confirm which side before filing anything.',
      },
    ],
  },

  miamitown: {
    intro:
      'Power disconnected in Miamitown? Low river-bottom ground and a small community. Call (513) 586-5107.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami, with older homes set on low river-bottom ground. The river is the recurring cause of disconnections here, and it works on a delay worth understanding: the Great Miami drains a large area upstream, so water can arrive after your local weather has cleared and reach a basement panel a day later than you would expect.',
      'A submerged panel is replaced rather than dried out, whenever the water arrived, and an inspector will look for the signs before the meter goes back in. The housing supplies the other half — older homes with services that are frequently original and have never been brought forward, so grounding to a superseded standard and corrosion at the meter base are common findings once anyone examines them properly.',
    ],
    commonIntro:
      "In Miamitown's older homes on the Great Miami's low bottomland, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Miamitown basement flooded a day after the rain stopped. How does that happen?',
        a: 'The Great Miami drains a large area upstream, so heavy rain well away from here can raise the river after your local weather has cleared. It is why this bottomland floods on a different schedule from the storm itself. For the electrical side nothing changes — a panel that has been under water is replaced rather than dried out, whenever the water arrived.',
      },
    ],
  },

  'forest-park': {
    intro:
      'Power disconnected in Forest Park? A 1960s planned city, so services and wiring are of one era. Call (513) 586-5107.',
    relevance: [
      'Forest Park (ZIP 45240) was developed as a planned community from the 1960s, and that gives it an unusual uniformity: the housing went up in a comparable period, was given comparable services, and those have aged at the same rate. It also puts a great deal of this city squarely in the window where aluminium branch circuit wiring was commonly used — roughly 1965 to 1973.',
      'That matters for disconnections and for insurance. Aluminium expands and contracts more than copper, so terminations loosen and overheat over time, and an inspector clearing a tag will look closely at every one. The recognised remedy is properly rated connectors at the terminations rather than a full rewire, which is worth knowing before anyone quotes you for the latter. The city issues its own permits and inspections, and it shares its ZIP with Pleasant Run.',
    ],
    commonIntro:
      "Across Forest Park's 1960s planned housing, much of it from the aluminium wiring era, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Forest Park house is from the late 1960s. Should I assume it has aluminium wiring?',
        a: 'It is worth checking rather than assuming either way — roughly 1965 to 1973 is the period, and a lot of building here falls in it. The conductors are visible at the panel and at devices, and aluminium is distinguishable from copper by colour. If it is present, the recognised remedy is properly rated connectors at the terminations, not a full rewire.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Power disconnected at your Pleasant Run home? Springfield Township permits, sharing a ZIP with Forest Park. Call (513) 586-5107.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, sharing its ZIP with Forest Park — which is a city issuing its own permits, while Pleasant Run falls to Springfield Township and Hamilton County. Same postal code, two different authorities, and that is the most common way a repair here loses a day.',
      'The housing is mid-century and newer. On the older streets the services are frequently original and now carrying loads well beyond their intended range, which shows as heat damage at the connections rather than as a tripped breaker. Houses from the late 1960s and early 70s may also have aluminium branch circuits, which an inspector will examine at the terminations and which insurers ask about at renewal.',
    ],
    commonIntro:
      "Across Pleasant Run's mid-century and newer homes in Springfield Township, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Forest Park and Pleasant Run share a ZIP. Is the permit the same?',
        a: 'No. Forest Park is a city with its own permit office; Pleasant Run is a Springfield Township community, so the filing goes through the township and Hamilton County. Same postal code, different authorities — and the utility looks for the correct sign-off before reconnecting, so a misfiled permit just means waiting.',
      },
    ],
  },

  cleves: {
    intro:
      'Power disconnected in Cleves? Village permits, and low ground near the confluence. Call (513) 586-5107.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami meets the Ohio, and it issues its own permits and inspections. That confluence position is the physical factor: water can back up from either river, so the low ground here floods on a schedule that does not always match the storm you actually experienced, and basement panels are what it reaches.',
      'A submerged panel is replaced rather than dried out — water gets behind the bus bars and into the breakers and corrosion continues after everything looks dry — and an inspector checks for that before the meter goes back in. The housing is older, with services frequently original and never brought forward, so where water is not the cause the findings are grounding to a superseded standard and corrosion at the meter base.',
    ],
    commonIntro:
      "In Cleves' older homes on low ground near the confluence, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Does Cleves issue its own electrical permits?',
        a: 'Yes, as a village, rather than Hamilton County doing it. That is usually to your advantage because a small queue moves quickly — provided the filing went to the right office. An electrician who assumes a village this size defers to the county will lose you a day while the paperwork is redone. We confirm before submitting.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Power disconnected in North Bend? A small river village with its own permits. Call (513) 586-5107.',
    relevance: [
      'North Bend (ZIP 45052) is a small village on the Ohio at the far west end of our area, and it issues its own permits and inspections. Being both very small and a long way out has a consistent effect: the municipal queue is short when the filing is right, and there is a real distance for anyone to travel, so getting the paperwork correct first time matters more here than closer in.',
      'The village sits low on the river, so water reaching a basement panel is a recurring cause, and a submerged panel is replaced rather than dried out. The housing is older with services that are frequently original — never brought forward because nothing ever failed — which is exactly the service that turns out to be furthest behind current requirements when a technician finally examines it.',
    ],
    commonIntro:
      "In North Bend's older riverside homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Do you cover somewhere as far out as North Bend?',
        a: 'Yes, and it is near the western edge of what we cover. Because it is a distance, it is worth getting the details right on the phone — whether the panel has been under water, roughly how old the service is, and whether you are on a well. That determines what we bring and means we are not making a second trip for something we could have anticipated.',
      },
    ],
  },

  loveland: {
    intro:
      'Power disconnected in Loveland? The city spans three counties, so the permit follows the address. Call (513) 586-5107.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city on the Little Miami, and it is one of very few places where the city itself spans three counties — primarily Clermont, part Warren, and a small portion Hamilton. For a disconnection that is not a technicality: it determines which county is involved alongside the city, and an electrician assuming Hamilton because Cincinnati is nearby has a good chance of being wrong.',
      'The Little Miami is the physical factor. It has a steep catchment and rises quickly, so on the low ground near the river water can reach a basement panel during the same storm rather than a day later. A submerged panel is replaced rather than dried out. In the older downtown the housing is genuinely old, with services carrying long histories of retrofits that an inspector will examine once clearing a tag.',
    ],
    commonIntro:
      "Across Loveland's historic downtown and riverside streets, in a city spanning three counties, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Which county is my Loveland address in for the permit?',
        a: 'It genuinely depends on the address — the city spans Clermont, Warren and Hamilton, with most of it in Clermont. Assuming Hamilton because Cincinnati is close is the common mistake. We confirm the county and the city office before filing, because the utility looks for the correct sign-off before reconnecting.',
      },
    ],
  },

  harrison: {
    intro:
      'Power disconnected in Harrison? On the Indiana line, so check which utility serves you. Call (513) 586-5107.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line, and that position raises the question that matters most here before anything else: which utility actually serves your address. Ohio is Duke Energy Ohio; across the line is Duke Energy Indiana, a separate operating company with its own crews and its own scheduling, regulated by the Indiana Utility Regulatory Commission rather than Ohio’s PUCO.',
      'On a boundary like this the answer is not obvious from a map, and telling the wrong utility about a disconnection wastes time you do not have. Harrison itself is in Ohio and issues its own city permits. The housing is a mix of older and newer, so the findings range from original services never brought forward to modern panels where a disconnection is about one identifiable fault.',
    ],
    commonIntro:
      "Across Harrison's older and newer homes on the Ohio side of the state line, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I am near the Indiana line in Harrison. Which utility and which permit office?',
        a: 'Check your bill for the utility, because Duke Energy Ohio and Duke Energy Indiana are separate operating companies and the boundary is not obvious from a map. Harrison itself is in Ohio and issues its own city permits. We confirm both before filing, since the wrong utility and the wrong permit office each cost a day.',
      },
    ],
  },

  ludlow: {
    intro:
      'Power disconnected in Ludlow? Kentucky means Duke Energy Kentucky, and Ludlow issues its own permits. Call (513) 586-5107.',
    relevance: [
      'Ludlow (ZIP 41016) is a Northern Kentucky river city, and two jurisdictional facts come first. The utility is Duke Energy Kentucky — a separate operating company from Duke Energy Ohio with its own crews and scheduling, regulated by the Kentucky Public Service Commission rather than PUCO. And Ludlow issues its own permits and inspections, sharing its ZIP with Bromley next door.',
      'The housing is older river-city stock on narrow lots, close together, with services that are frequently original or replaced once a long time ago. Sitting low near the Ohio means water reaching basement panels is a recurring cause, and a submerged panel is replaced rather than dried out. Where wear is the issue instead, the findings are grounding to a superseded standard and connections that have worked too hard for decades.',
    ],
    commonIntro:
      "In Ludlow's older river-city housing on narrow lots, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Is my Ludlow disconnection handled by the same Duke as Cincinnati?',
        a: 'Not quite. Northern Kentucky is served by Duke Energy Kentucky, a separate entity from Duke Energy Ohio with its own crews and scheduling, and complaints go to the Kentucky Public Service Commission rather than Ohio’s PUCO. The rule affecting you is the same either side of the river: they will not reconnect to a red-tagged or damaged service until a licensed electrician has repaired it and it has been inspected.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Power disconnected in Park Hills? Its own city permits, sharing a ZIP with Covington. Call (513) 586-5107.',
    relevance: [
      'Park Hills (ZIP 41011) is a small Kenton County city on the hillside above Covington, and it shares Covington’s ZIP while issuing its own permits and inspections. That is the trap here — an electrician working from the postal address will assume Covington, file there, and the paperwork comes back while the house sits without power. The utility is Duke Energy Kentucky rather than Duke Energy Ohio.',
      'Being up the hillside rather than down on the riverfront changes the failure pattern too. The flooded-panel problem that dominates the river cities below is much less common here; what we find instead is wear — services installed with the houses and never brought forward, grounding to a superseded standard, and connections that have carried modern loads for decades on equipment sized for far less.',
    ],
    commonIntro:
      "Across Park Hills' hillside homes above Covington, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 41011, the same as Covington. Does Covington issue my permit?',
        a: 'No — Park Hills is its own city with its own permit office, despite sharing Covington’s postal code. The filing follows the address rather than the ZIP, and getting it wrong means waiting while it is refiled. We confirm the correct office before submitting anything.',
      },
    ],
  },

  bromley: {
    intro:
      'Power disconnected in Bromley? A small river city with its own permits, on low ground. Call (513) 586-5107.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river city sharing its ZIP with Ludlow, and both issue their own permits and inspections — so the filing follows the address. The utility is Duke Energy Kentucky, with its own crews and scheduling and the Kentucky Public Service Commission as regulator.',
      'The village sits low on the Ohio, and that is the recurring cause of disconnections: water reaching basement panels, which are then replaced rather than dried out because water gets behind the bus bars and into the breakers. Being a very small municipality, the inspection queue is short when the filing is right, which after a flooding event affecting several properties is worth having on your side.',
    ],
    commonIntro:
      "In Bromley's older riverside housing on low ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Several houses on my Bromley street flooded. Does that slow the reconnections?',
        a: 'It can, because everyone needs the same inspection slots in a very small municipality. It also creates an opportunity: where neighbouring houses each need a panel replaced, one electrician handling them together means shared setup, permits filed as a batch, and the inspector seeing several properties in one visit. It can save days without changing what anyone pays for their own equipment.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Power disconnected in Fort Wright? Its own city permits, sharing a ZIP with Covington and Park Hills. Call (513) 586-5107.',
    relevance: [
      'Fort Wright (ZIP 41011) is a Kenton County city on the hillside, sharing its ZIP with Covington and Park Hills — three separate municipalities in one postal code, each issuing its own permits and inspections. Working from the ZIP will send a filing to the wrong office more often than not, and the utility waits for the correct sign-off before reconnecting.',
      'Being up on the hillside rather than on the riverfront means the flooded-panel problem is far less common than in the cities below. What we find instead is accumulated wear on mid-century services: installed with the houses, never replaced because nothing failed, and now carrying central air, finished lower levels and increasingly car charging. Heat damage at the connections is the usual finding. The utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Fort Wright's hillside mid-century homes, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Three cities share ZIP 41011. How do I know which issues my permit?',
        a: 'By the address rather than the ZIP. Covington, Park Hills and Fort Wright are three separate municipalities in that postal code, each with its own permit office. We confirm which applies before filing, because the utility looks for the correct sign-off and a misdirected permit means waiting while it is redone.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Power disconnected in Fort Mitchell? One of five cities in ZIP 41017. We confirm the right office. Call (513) 586-5107.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is a Kenton County city sharing its ZIP with Lakeside Park, Crescent Springs, Crestview Hills and Edgewood — five separate cities in one postal code, each issuing its own permits and inspections. It is the clearest example in our whole service area of why a ZIP tells you nothing about jurisdiction, and it is where filings most often go astray.',
      'The housing is a settled mix of older and mid-century homes on the hillside above the river cities, so flooded panels are much less common here than below. The findings are wear-based: services installed with the houses and never brought forward, grounding to the standard of the day, and connections carrying modern loads on equipment sized for far less. The utility throughout is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Fort Mitchell's older and mid-century hillside homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'ZIP 41017 covers five cities. Which one issues my permit?',
        a: 'Whichever your address actually falls in — Fort Mitchell, Lakeside Park, Crescent Springs, Crestview Hills and Edgewood are five separate cities with five permit offices in that one postal code. We confirm it before filing rather than working from the ZIP. It is a small detail that reliably costs a day when it is wrong.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Power disconnected in Villa Hills? Its own city permits, and no commercial load nearby to ride on. Call (513) 586-5107.',
    relevance: [
      'Villa Hills (ZIP 41017) is a residential Kenton County city on the hillside above the river, and it is almost entirely residential — there is very little commercial or institutional load in the city. That matters for one specific reason: circuits carrying hospitals, retail or industry get restoration priority, and a purely residential city has none of that to sit alongside.',
      'For a disconnection the practical consequence is that the utility side is unlikely to be quick, which makes getting your own repair done and inspected while you wait more valuable rather than less. The housing is mid-century and newer, so services are frequently original and now carrying loads beyond their intended range. Villa Hills shares ZIP 41017 with four other cities, and issues its own permits.',
    ],
    commonIntro:
      "Across Villa Hills' residential mid-century and newer homes, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Why does Villa Hills seem to be low priority with the utility?',
        a: 'It is not a judgement on the city — it is that restoration priorities follow critical and commercial load, and Villa Hills is almost entirely residential with none of that nearby. The practical response is to control what you can: if the disconnection is on your own service, get it repaired and inspected so you are ready the moment Duke Energy Kentucky can act rather than starting then.',
      },
    ],
  },
};
