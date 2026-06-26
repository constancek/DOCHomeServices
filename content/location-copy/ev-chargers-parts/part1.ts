export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Want to charge your EV at home in Sedamsville instead of hunting for a public station? Our licensed electricians install Level 2 chargers — with a panel check first — for homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, sitting between Riverside and Sayler Park, with housing that dates to the late 1800s and early 1900s. Homes this old often run older, smaller panels, so the first step in an EV charger install here is confirming the service can handle a Level 2 charger’s load.',
      'Parking varies on the hillside streets above River Road — some homes have a garage, others a driveway or pad — so we plan the mounting and circuit run to fit. We size a dedicated 240-volt circuit, evaluate whether the panel needs an upgrade, and install to code.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes with older panels, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older Sedamsville home support a Level 2 EV charger?', a: 'Often yes, but many century-old Sedamsville homes have smaller panels, so we evaluate the service and load first. If an upgrade is needed we explain it up front, then install the charger to code.' }],
  },
  'sayler-park': {
    intro: 'Charging your EV overnight in Sayler Park beats driving back toward the city for a public station. Our licensed electricians install Level 2 chargers across Cincinnati’s westernmost neighborhood, starting with a look at your panel. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before being annexed in the early 1900s, and rows of Victorian and early-1900s frame houses still line its streets. Houses that age usually have older electrical service, so we confirm the panel can carry a Level 2 charger before anything else.',
      'Many of these frame homes have detached garages or driveway parking, which shapes where the charger mounts and how far the circuit runs. We size a dedicated 240-volt circuit, plan an indoor or weather-rated outdoor mount, and check whether a panel upgrade is the smarter first move.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame homes with detached garages, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Do you install EV chargers in Sayler Park even though it is on the far west edge of the city?', a: 'Yes. Sayler Park is well within our service area, river streets included. We evaluate the panel, run a dedicated circuit, and install your Level 2 charger to code.' }],
  },
  'riverside': {
    intro: 'A Level 2 charger at home in Riverside means a full battery every morning without leaving River Road. Our licensed electricians size the circuit and check your panel before installing. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west. Together with Sedamsville it forms one of the oldest riverfront communities on the city’s west side, and that older housing often comes with older, smaller electrical panels that need review before a Level 2 charger goes in.',
      'Because many homes here sit on low Ohio River bottomland, we pay attention to where equipment lives — a charger and its circuit are planned around the home’s parking, whether that is a garage or an exterior wall. We size a dedicated 240-volt circuit, confirm panel capacity, and install with the right weather-rated hardware to code.',
    ],
    commonIntro: 'In Riverside’s older riverfront homes along River Road, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a home along River Road in Riverside handle a Level 2 EV charger?', a: 'Usually yes, but older Riverside homes can have smaller panels, so we evaluate the service and load first. We then run a dedicated circuit and install the charger to code, with weather-rated hardware where the mount is outdoors.' }],
  },
  'east-price-hill': {
    intro: 'Charging your EV at home in East Price Hill saves the trip down the hill to a public station. Our licensed electricians install Level 2 chargers around Warsaw Avenue and the Incline District, starting with a panel check. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing — two- and three-story frame homes and brick two-families built close together — which usually means older, undersized panels that need evaluation before a Level 2 charger.',
      'On tight lots with shared walls, panel space and parking are both at a premium, so we plan the circuit run and the charger location carefully. We size a dedicated 240-volt circuit, check whether the older service needs an upgrade, and install to code in single-family and two-family homes alike.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families with tight panel space, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older two-family home in East Price Hill support a Level 2 EV charger?', a: 'Often yes, but the early-1900s homes around Warsaw Avenue can have smaller panels and limited space, so we evaluate the service first. If an upgrade is needed we explain it, then install the charger to code.' }],
  },
  'west-price-hill': {
    intro: 'Want to charge your EV in your own driveway in West Price Hill instead of a public station along Glenway? Our licensed electricians install Level 2 chargers after checking your panel. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but a panel that age still warrants a look before a Level 2 charger draws its full load.',
      'Most homes here have a garage or driveway, which gives us flexible options for mounting the charger and routing a clean circuit run. We size a dedicated 240-volt circuit, perform a load evaluation, and recommend a panel upgrade only when the existing service genuinely needs it.',
    ],
    commonIntro: 'Across West Price Hill’s 1920s-to-1950s single-family homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'How do I get a Level 2 EV charger installed at a West Price Hill home off Glenway Avenue?', a: 'West Price Hill is squarely in our service area. We start with a panel and load evaluation, size a dedicated 240-volt circuit, and install your Level 2 charger to code in the garage or driveway.' }],
  },
  'lower-price-hill': {
    intro: 'Home charging in Lower Price Hill means skipping the public-station hunt down in the valley. Our licensed electricians install Level 2 chargers around State Avenue, with a panel check built into every job. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, built long before modern electrical demand existed — so the service in these homes almost always gets evaluated before a Level 2 charger.',
      'On tightly built rowhouses, off-street parking and panel space are both tight, which shapes where the charger can mount and how the circuit routes. We size a dedicated 240-volt circuit, confirm whether the older panel needs an upgrade, and install to code without disturbing original features.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses with limited panel space, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a historic brick rowhouse in Lower Price Hill support a Level 2 EV charger?', a: 'Often, but these mid-1800s rowhouses around State Avenue predate modern electrical loads, so we evaluate the panel and parking first. If an upgrade is needed we explain it, then install the charger to code.' }],
  },
  'over-the-rhine': {
    intro: 'Adding home EV charging in Over-the-Rhine is tricky in a 19th-century building — but doable with the right panel work. Our licensed electricians evaluate the service and install Level 2 chargers around Vine Street and Findlay Market. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses built between the 1850s and 1880s. Buildings that old, many now split into condos and apartments, run on a patchwork of original and retrofitted wiring, so a careful panel and load evaluation comes before any Level 2 charger.',
      'Off-street parking and panel space are both scarce in OTR, which makes circuit routing and charger placement the central planning question. We size a dedicated 240-volt circuit, work out the mounting for a garage spot or an assigned space, and install to code, isolating the work to your unit where the building is divided.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted units with tight panel space, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can I install a Level 2 EV charger in a converted Over-the-Rhine building?', a: 'Often yes, but OTR’s 19th-century buildings have older, shared electrical systems and limited parking, so we evaluate the panel and the space first. We then size a dedicated circuit and install to code, keeping the work to your unit where the building is split.' }],
  },
  'downtown': {
    intro: 'Charging an EV at a downtown condo or loft starts with what your building’s electrical can carry. Our licensed electricians evaluate the service and install Level 2 chargers across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. The electrical ranges from modern stacked risers in towers to original lines in early-1900s buildings turned residential, so an EV charger install here always begins with what the building and your unit can support.',
      'Parking downtown means a garage stall or assigned space rather than a private driveway, so circuit routing and panel access drive the plan. We size a dedicated 240-volt circuit, coordinate the run from the panel to the parking spot, and install to code.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can I install a Level 2 EV charger in a downtown condo or loft?', a: 'Often yes, but it depends on the building’s electrical and the run to your parking spot, which range from modern towers to early-1900s conversions. We evaluate the service, coordinate access, and install a dedicated circuit to code.' }],
  },
  'west-end': {
    intro: 'Home EV charging in the West End means a full battery near TQL Stadium without a public-station stop. Our licensed electricians check your panel and install Level 2 chargers around Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. It holds historic Italianate rowhouses and brick homes alongside mid-century housing, with newer development now mixed in — a range wide enough that the panel evaluation matters before any Level 2 charger.',
      'In the older brick homes, decades-old service often needs review or an upgrade to carry a charger’s load, while newer infill may be ready to go. We size a dedicated 240-volt circuit, evaluate the panel, and plan the mount around each home’s parking before installing to code.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and newer infill, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older West End home support a Level 2 EV charger?', a: 'Often, but the historic rowhouses and brick homes near Linn Street can have older panels, so we evaluate the service first. Newer infill homes may need less work. Either way we run a dedicated circuit and install to code.' }],
  },
  'mount-adams': {
    intro: 'Charging your EV at home on Mount Adams beats parallel-parking near a public station on the hill. Our licensed electricians check the panel and install Level 2 chargers across the hilltop. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. That century-old housing usually means older electrical service, so we confirm the panel can handle a Level 2 charger before installing.',
      'Parking and panel space are both tight on the hill — many homes rely on a small garage or street parking — so charger placement and the circuit run take careful planning. We size a dedicated 240-volt circuit, evaluate whether the service needs an upgrade, and install to code.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses with tight parking, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a century-old Mount Adams rowhouse support a Level 2 EV charger?', a: 'Often yes, but these 19th-century homes can have smaller panels and limited parking, so we evaluate the service and the space first. If an upgrade is needed we explain it, then install the charger to code.' }],
  },
  'mount-auburn': {
    intro: 'Adding home EV charging in Mount Auburn often starts with the panel in a grand old house. Our licensed electricians evaluate the service and install Level 2 chargers just north of downtown and OTR. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine. It is lined with grand 19th-century homes and historic mansions, many now divided into apartments — and those Victorian-era houses carry some of the oldest electrical service in the city, which we evaluate before any Level 2 charger.',
      'In subdivided houses, panel space and parking both need sorting out before a charger goes in, so we plan the circuit run and mount around how the home is used today. We size a dedicated 240-volt circuit, check whether the panel needs an upgrade, and install to code, keeping the work to your portion of the house where it is split.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an old Mount Auburn home support a Level 2 EV charger?', a: 'Often, but the neighborhood’s 19th-century homes have some of the oldest electrical service around, so we evaluate the panel and load first. If an upgrade is needed we explain it, then install the charger to code.' }],
  },
  'clifton': {
    intro: 'Charging your EV at home in Clifton means a full battery without a stop near campus. Our licensed electricians check the panel in those big Victorian homes and install Level 2 chargers around Ludlow Avenue. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Houses that have stood for over a century often run older electrical service, so the panel gets evaluated before a Level 2 charger draws its load.',
      'Many of these big homes have a garage or driveway that gives us room to mount the charger and route a clean circuit, though a fair number are now rentals where the install needs to be straightforward and durable. We size a dedicated 240-volt circuit, evaluate the panel, and install to code.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a large Victorian home in Clifton support a Level 2 EV charger?', a: 'Often yes, but homes over a century old can have older panels, so we evaluate the service first. We then size a dedicated circuit and install your Level 2 charger to code in the garage or driveway.' }],
  },
  'corryville': {
    intro: 'Home EV charging in Corryville beats fighting for a spot near a public station by campus. Our licensed electricians evaluate the panel and install Level 2 chargers around Short Vine. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. With so much older, densely packed housing, panels here tend to be older and circuit space limited, so the service gets evaluated before any Level 2 charger.',
      'Tight lots and shared parking shape where a charger can go and how its circuit routes, especially in homes split into units. We size a dedicated 240-volt circuit, confirm whether the panel needs an upgrade, and install to code.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older home near campus in Corryville support a Level 2 EV charger?', a: 'Often, but the early-1900s homes around Short Vine can have older panels and tight circuit space, so we evaluate the service and parking first. We then run a dedicated circuit and install to code.' }],
  },
  'northside': {
    intro: 'Want to charge your EV at home in Northside instead of along Hamilton Avenue? Our licensed electricians check the panel and install Level 2 chargers across the neighborhood. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. The age of that housing means older electrical service is common, so we evaluate the panel before a Level 2 charger goes in.',
      'Most homes here have a garage or driveway off the side streets, giving us room to mount the charger and route a tidy circuit run. We size a dedicated 240-volt circuit, perform a load evaluation, and recommend a panel upgrade only when the older service truly needs it.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older Northside home support a Level 2 EV charger?', a: 'Often yes, but the neighborhood’s older homes can have smaller panels, so we evaluate the service and load first. If an upgrade is needed we explain it up front, then install the charger to code.' }],
  },
  'college-hill': {
    intro: 'Charging your EV in your own driveway in College Hill saves a trip down Hamilton Avenue. Our licensed electricians evaluate the panel and install Level 2 chargers around Belmont. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. Across that range of ages, the panel evaluation matters — the early-1900s homes in particular often need a look before a Level 2 charger draws its full load.',
      'Most of these homes have a garage or driveway, which gives us flexible options for mounting the charger and routing the circuit. We size a dedicated 240-volt circuit, evaluate the panel, and recommend an upgrade only when the existing service genuinely calls for it.',
    ],
    commonIntro: 'Across College Hill’s early-1900s and mid-century homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older College Hill home support a Level 2 EV charger?', a: 'Often, but the larger early-1900s homes along Hamilton Avenue can have older panels, so we evaluate the service first. Mid-century homes may need less work. Either way we run a dedicated circuit and install to code.' }],
  },
  'walnut-hills': {
    intro: 'Adding home EV charging in Walnut Hills often begins with the panel in a historic home or apartment. Our licensed electricians evaluate the service and install Level 2 chargers around Peebles Corner. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of that century-old housing is now split into units running on aging electrical service, so a panel and load evaluation comes before any Level 2 charger.',
      'In multi-unit buildings, panel space and parking both need to be sorted before a charger can go in, so we plan the circuit run and mount around how the building is used. We size a dedicated 240-volt circuit, check whether the panel needs an upgrade, and install to code, keeping the work to your unit where the building is divided.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can I install a Level 2 EV charger at an older Walnut Hills home or apartment?', a: 'Often yes, but many buildings around Peebles Corner are century-old and split into units with aging panels, so we evaluate the service first. We then run a dedicated circuit and install to code, isolating the work to your unit where the building is split.' }],
  },
  'east-walnut-hills': {
    intro: 'Charging your EV at home in East Walnut Hills beats a public-station stop near Woodburn Avenue. Our licensed electricians check the panel in those stately old homes and install Level 2 chargers. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often still carry original electrical service, so the panel gets evaluated before a Level 2 charger.',
      'Many of these homes have a garage or driveway with room to mount a charger and route a clean circuit, while the brick apartment buildings need the work planned around shared panels and parking. We size a dedicated 240-volt circuit, evaluate the panel, and install to code.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a stately early-1900s home in East Walnut Hills support a Level 2 EV charger?', a: 'Often yes, but homes this age around Woodburn Avenue can have older panels, so we evaluate the service first. We then size a dedicated circuit and install your Level 2 charger to code.' }],
  },
  'avondale': {
    intro: 'Home EV charging in Avondale means a full battery near the hospitals and the zoo without a public-station stop. Our licensed electricians evaluate the panel and install Level 2 chargers across the neighborhood. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of that housing is older and densely built, much of it rental, so older panels are common and the service gets evaluated before any Level 2 charger.',
      'On densely built lots, panel space and parking both shape the install, especially in homes and buildings split into units. We size a dedicated 240-volt circuit, confirm whether the panel needs an upgrade, and install to code.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older Avondale home support a Level 2 EV charger?', a: 'Often, but the neighborhood’s early-1900s homes near the hospitals can have older panels and tight parking, so we evaluate the service and space first. We then run a dedicated circuit and install to code.' }],
  },
  'hyde-park': {
    intro: 'Adding a second EV in Hyde Park usually means a second Level 2 charger — and a fresh look at the panel. Our licensed electricians install around Hyde Park Square after evaluating your service. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. These big older homes often need a panel and load evaluation before a Level 2 charger, especially when a household is adding a second EV.',
      'Most homes here have a garage or driveway with room to mount one or two chargers and route clean circuit runs. We size a dedicated 240-volt circuit per charger, evaluate whether the older panel has the capacity, and recommend an upgrade only when the load truly calls for it.',
    ],
    commonIntro: 'In Hyde Park’s large early-1900s homes, often adding a second EV, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a Hyde Park home handle a second Level 2 EV charger for a two-EV household?', a: 'Often yes, but two chargers draw real load, and these early-1900s homes around Hyde Park Square can have older panels, so we run a load evaluation first. If the panel needs more capacity we explain it, then install to code.' }],
  },
  'oakley': {
    intro: 'Charging your EV at home in Oakley saves a stop near a public station off Madison Road. Our licensed electricians check the panel in those older bungalows and install Level 2 chargers. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows that fill much of Oakley were built with electrical service well behind today’s demand, so the panel gets evaluated before a Level 2 charger.',
      'Most of these homes have a garage or driveway that gives us room to mount the charger and route the circuit, while newer development may already have capacity to spare. We size a dedicated 240-volt circuit, evaluate the panel, and install to code.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an early-1900s bungalow in Oakley support a Level 2 EV charger?', a: 'Often, but bungalows around Oakley Square can have older, smaller panels, so we evaluate the service first. Newer homes may need less work. Either way we run a dedicated circuit and install to code.' }],
  },
  'mount-lookout': {
    intro: 'Home EV charging on Mount Lookout means a full battery without a stop near the Square. Our licensed electricians evaluate the panel and install Level 2 chargers around Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes here carry decades-old electrical service, so the panel gets evaluated before a Level 2 charger draws its load.',
      'Most homes have a garage or driveway with room for the charger and a clean circuit run, though the hilly lots can lengthen that run. We size a dedicated 240-volt circuit, evaluate the panel, and recommend an upgrade only when the older service genuinely needs it.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older Mount Lookout home support a Level 2 EV charger?', a: 'Often yes, but homes around Mount Lookout Square can have older panels, so we evaluate the service and load first. We then run a dedicated circuit and install to code in the garage or driveway.' }],
  },
  'columbia-tusculum': {
    intro: 'Adding home EV charging in Columbia-Tusculum often starts with the panel in a restored Victorian. Our licensed electricians evaluate the service and install Level 2 chargers in Cincinnati’s oldest neighborhood near the river. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. Houses that old carry original electrical service well behind modern demand, so a panel and load evaluation comes before any Level 2 charger.',
      'Many of these restored homes have a garage or driveway, but the work has to respect original features and the home’s riverside setting. We size a dedicated 240-volt circuit, evaluate whether the panel needs an upgrade, and install to code with weather-rated hardware where the mount is outdoors.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a historic Victorian home in Columbia-Tusculum support a Level 2 EV charger?', a: 'Often, but the neighborhood’s Painted Lady and early homes have original electrical service well behind modern demand, so we evaluate the panel first. If an upgrade is needed we explain it, then install to code without disturbing original features.' }],
  },
  'mount-washington': {
    intro: 'Charging your EV in your own driveway in Mount Washington beats a public-station stop along Beechmont. Our licensed electricians evaluate the panel and install Level 2 chargers. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. A panel that age warrants a look before a Level 2 charger draws its full load, especially in the older homes.',
      'Most of these single-family homes have a garage or driveway, giving us flexible options for the charger mount and a clean circuit run. We size a dedicated 240-volt circuit, perform a load evaluation, and recommend a panel upgrade only when the existing service genuinely needs it.',
    ],
    commonIntro: 'Across Mount Washington’s early-1900s and mid-century single-family homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a home in Mount Washington support a Level 2 EV charger?', a: 'Usually yes, but the older homes along Beechmont Avenue can have older panels, so we evaluate the service and load first. We then run a dedicated circuit and install your Level 2 charger to code.' }],
  },
  'madisonville': {
    intro: 'Home EV charging in Madisonville saves the trip to a public station off Madison Road. Our licensed electricians check the panel and install Level 2 chargers around Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of Madisonville run on aging electrical service, so the panel gets evaluated before a Level 2 charger draws its load.',
      'Most homes here have a garage or driveway with room to mount a charger and route the circuit, while newer infill may already have the capacity. We size a dedicated 240-volt circuit, evaluate the panel, and install to code.',
    ],
    commonIntro: 'In Madisonville’s early-1900s homes and newer infill, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older Madisonville home support a Level 2 EV charger?', a: 'Often yes, but the neighborhood’s early-1900s homes can have older panels, so we evaluate the service first. Newer infill may need less work. Either way we run a dedicated circuit and install to code.' }],
  },
  'pleasant-ridge': {
    intro: 'Charging your EV at home in Pleasant Ridge means a full battery without a stop along Montgomery Road. Our licensed electricians evaluate the panel and install Level 2 chargers in single-family homes and two-families alike. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those older single- and two-family homes carry decades-old electrical service, so the panel gets evaluated before a Level 2 charger.',
      'In two-families, panel space and parking both need sorting out before a charger goes in, while single-family homes usually have a garage or driveway to work with. We size a dedicated 240-volt circuit, check whether the panel needs an upgrade, and install to code.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and brick two-families, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a brick two-family in Pleasant Ridge support a Level 2 EV charger?', a: 'Often, but two-families along Montgomery Road can have older panels and shared circuit space, so we evaluate the service and parking first. We then run a dedicated circuit and install to code.' }],
  },
  'westwood': {
    intro: 'Home EV charging in Westwood saves a trip to a public station along Harrison Avenue. Our licensed electricians check the panel and install Level 2 chargers across Cincinnati’s largest neighborhood. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range of ages, the panel evaluation matters — older homes in particular need a look before a Level 2 charger draws its full load.',
      'Most of these homes have a garage or driveway that gives us flexible options for the charger mount and circuit run. We size a dedicated 240-volt circuit, evaluate the panel, and recommend an upgrade only when the existing service genuinely calls for it.',
    ],
    commonIntro: 'Across Westwood’s historic, early-1900s, and mid-century homes, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an older Westwood home support a Level 2 EV charger?', a: 'Often yes, but homes range widely in age across Westwood, and the older ones near Harrison Avenue can have older panels, so we evaluate the service first. We then run a dedicated circuit and install to code.' }],
  },
  'norwood': {
    intro: 'Charging your EV at home in Norwood beats a public-station stop near Surrey Square. Our licensed electricians evaluate the panel in those older homes and install Level 2 chargers. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing usually means older, smaller panels, so the service gets evaluated before a Level 2 charger.',
      'On small lots with closely built homes, panel space and parking both shape the install, especially in two-families. We size a dedicated 240-volt circuit, confirm whether the panel needs an upgrade, and install to code in single-family and two-family homes alike.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can an early-1900s Norwood home support a Level 2 EV charger?', a: 'Often, but the city’s century-old homes and two-families around Montgomery Road can have older, smaller panels, so we evaluate the service first. If an upgrade is needed we explain it, then install to code.' }],
  },
  'blue-ash': {
    intro: 'Charging an EV at home in Blue Ash? Our licensed electricians install Level 2 chargers — after a panel check — for homes across this northeast-side city, with code-compliant wiring. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city with established mid-century neighborhoods alongside newer subdivisions. Even the newer housing here is decades old now, so before a Level 2 charger goes in we confirm the panel has the capacity to add that load safely.',
      'Most homes in Blue Ash have an attached garage or a driveway with room to mount a charger and route a clean circuit. We size a dedicated 240-volt circuit, evaluate the service, and recommend a panel upgrade only when the numbers call for it.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a Blue Ash home support a Level 2 EV charger?', a: 'Usually yes. Most Blue Ash homes have the garage or driveway space and a panel with room, but we run a load evaluation first and explain any upgrade before installing to code.' }],
  },
  'montgomery': {
    intro: 'Adding a second EV in Montgomery often means a second Level 2 charger and a look at the panel. Our licensed electricians evaluate the service and install around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The electrical spans a wide range — from century-old structures in the historic core to decades-old subdivisions — so the panel evaluation matters before a Level 2 charger, especially for households adding a second EV.',
      'Most homes here have a garage or driveway with room to mount one or two chargers and route clean circuit runs. We size a dedicated 240-volt circuit per charger, evaluate whether the panel has the capacity, and recommend an upgrade only when the load truly calls for it.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, often adding a second EV, an EV charger install usually starts with:',
    localFaqs: [{ q: 'Can a Montgomery home handle a second Level 2 EV charger for a two-EV household?', a: 'Often yes, but two chargers draw real load, and homes here range from 19th-century structures to newer subdivisions, so we run a load evaluation first. If the panel needs more capacity we explain it, then install to code.' }],
  },
};
