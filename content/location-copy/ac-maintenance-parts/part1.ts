export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Want your AC ready before the Sedamsville summer heat hits? Our annual tune-ups keep cooling efficient and reliable for homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, where much of the housing climbs the hillside above River Road and dates to the late 1800s and early 1900s. The central air in these homes is usually a retrofit, and an aging or undersized system depends on regular maintenance to keep up through a humid river-valley summer.',
      'The mature trees along the hillside streets are hard on the outdoor unit, dropping pollen and leaves that clog the condenser coil and choke airflow. A yearly tune-up clears that buildup, checks refrigerant and electrical connections, and keeps an older Sedamsville system from quitting on the hottest day.',
    ],
    commonIntro: 'In Sedamsville’s older homes with retrofitted central air, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Sedamsville?', a: 'Spring is ideal, before the river-valley humidity sets in. We service Sedamsville and the hillside streets above River Road and can get your system cleaned and tested before the first heat wave.' }],
  },
  'sayler-park': {
    intro: 'Getting your AC ready for another Sayler Park summer? An annual tune-up keeps cooling efficient for the riverfront streets and the homes up the hill, in Cincinnati’s westernmost neighborhood. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside, with tree-lined streets and rows of Victorian and early-1900s frame houses dating back to its days as the village of Home City. The central air added to these century-old frame homes is almost always a retrofit, and an aging system leans on regular maintenance to cool an older house well.',
      'Sitting in the Ohio River floodplain, Sayler Park draws long stretches of heavy summer humidity that make a system work harder to pull moisture out of the air. The mature trees lining those streets drop pollen and leaves onto the outdoor unit, and a yearly tune-up clears the condenser coil, checks the refrigerant charge, and keeps efficiency from slipping as the heat builds.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame homes with retrofitted central air, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Do you cover Sayler Park even though it is on the far west edge of the city?', a: 'Yes. Sayler Park is well within our service area, river streets included. We schedule spring tune-ups out here before the river-valley humidity sets in so your system is ready for summer.' }],
  },
  'riverside': {
    intro: 'Want your AC tuned up before another Riverside summer? Annual maintenance keeps cooling efficient for the homes along River Road, where the heat and humidity off the Ohio River make a reliable system matter. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville and Sayler Park with the hillside on one side and the Ohio River on the other. The older homes here mostly run on retrofitted central air, and an aging system needs regular tune-ups to keep cooling an older house efficiently.',
      'Because so many homes sit on low Ohio River bottomland, summers here come with steady, heavy humidity that strains an air conditioner and drives up runtime. A yearly tune-up cleans the coils, checks the refrigerant charge, and tests the system so it holds its efficiency through the muggiest stretch of a Riverside July.',
    ],
    commonIntro: 'In Riverside’s older riverfront homes with retrofitted central air, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Riverside?', a: 'Spring is best, before the river humidity peaks. We service the River Road homes and can clean and test your system before the first stretch of muggy summer weather.' }],
  },
  'east-price-hill': {
    intro: 'Getting your AC ready for the East Price Hill summer? An annual tune-up keeps cooling efficient for the dense early-1900s homes around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, with streets around Warsaw Avenue and the Incline District packed with early-1900s housing — two- and three-story frame homes and brick two-families built close together. Central air in these century-old homes is a retrofit, and the systems are often undersized for the space, so a yearly tune-up matters to keep them cooling through summer.',
      'In tightly packed two-families, a single system frequently carries more load than it was sized for, and the dense layout traps heat as the day goes on. Regular maintenance — cleaning the coils and filter, checking the refrigerant and electrical connections — keeps an undersized East Price Hill unit limping through the hottest weeks instead of giving out.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Do you tune up the AC in the older two-family homes common in East Price Hill?', a: 'Yes. We service the multi-unit and two-family homes around Warsaw Avenue regularly, and a spring tune-up keeps an undersized system in one of these older buildings cooling efficiently through summer.' }],
  },
  'west-price-hill': {
    intro: 'Want your AC ready before another West Price Hill summer? Annual tune-ups keep cooling efficient for the mid-century homes along Glenway Avenue toward Covedale. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. The central air in these mid-century houses is decades old, and a system that age depends on regular maintenance to hold its efficiency.',
      'In homes from that era, an aging condenser and worn components lose capacity over time, and a unit that has not been serviced runs longer and works harder through a Cincinnati summer. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and catches a failing part before it leaves the house warm on the worst day.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'How often should I tune up my AC in West Price Hill?', a: 'Once a year, ideally in spring. The mid-century homes near Glenway Avenue tend to have older systems, and annual maintenance keeps them running efficiently and helps them last longer.' }],
  },
  'lower-price-hill': {
    intro: 'Getting your AC ready for the Lower Price Hill summer? An annual tune-up keeps cooling efficient in the historic rowhouses around State Avenue, down in the valley where the heat settles. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river around State Avenue, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses. Central air in these mid-1800s rowhouses is always a retrofit, and the systems are often small for the space, so they rely on regular maintenance to keep up.',
      'Down in the valley, the heat and humidity settle in and linger, putting steady load on an air conditioner through a Lower Price Hill summer. A yearly tune-up cleans the coils and filter and tests the system so an undersized retrofit keeps cooling a historic brick rowhouse instead of struggling through the worst of it.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses with retrofitted central air, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Lower Price Hill?', a: 'Spring, before the valley heat and humidity build. We service the historic rowhouses around State Avenue and can clean and test a retrofitted system before summer settles in.' }],
  },
  'over-the-rhine': {
    intro: 'Want your AC ready before another Over-the-Rhine summer? Annual maintenance keeps cooling efficient in the historic buildings around Vine Street and Findlay Market. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses built between the 1850s and 1880s, many now split into apartments and condos. Central air in these buildings is a retrofit, often added unit by unit, and an aging or undersized system depends on regular tune-ups to cool a dense historic space.',
      'In the tightly packed blocks around Findlay Market, masonry holds heat and a small retrofitted system can struggle to keep an upper-floor unit comfortable through summer. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and keeps an undersized OTR system running efficiently rather than failing on a hot afternoon.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Over-the-Rhine?', a: 'Spring is best. The historic buildings around Vine Street and Findlay Market often run on retrofitted systems, and a tune-up before summer keeps an undersized unit cooling efficiently through the heat.' }],
  },
  'downtown': {
    intro: 'Getting your AC ready for the downtown summer? An annual tune-up keeps cooling efficient in the condos, lofts, and older conversions across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Cooling here ranges from modern systems in towers to retrofitted units in early-1900s buildings turned residential, and both benefit from regular maintenance to hold their efficiency.',
      'In converted loft buildings, large windows and masonry can load a unit with heat through a downtown summer, and a system that has not been serviced runs longer to keep up. A yearly tune-up cleans the coils and filter and checks the refrigerant charge so a condo or loft system cools efficiently without driving the cooling bill up.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Can you tune up the AC in a downtown high-rise or condo?', a: 'Yes. We service cooling systems in towers and converted loft buildings regularly, and an annual tune-up keeps an older or retrofitted downtown system running efficiently through summer.' }],
  },
  'west-end': {
    intro: 'Want your AC ready before another West End summer? Annual tune-ups keep cooling efficient for the historic homes near TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer development. The central air in the older brick homes is a retrofit, and a decades-old system leans on regular maintenance to keep cooling an older house through summer.',
      'On the low ground near the Mill Creek basin, summer humidity runs heavy and makes a system work harder to pull moisture from the air. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and keeps an aging West End system holding its efficiency through the muggiest stretch of the season.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in the West End?', a: 'Spring is ideal, before the Mill Creek basin humidity builds. We service the historic and older homes near TQL Stadium and can clean and test your system ahead of summer.' }],
  },
  'mount-adams': {
    intro: 'Getting your AC ready for the Mount Adams summer? An annual tune-up keeps cooling efficient in the hilltop rowhouses on the steep, narrow streets above downtown. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Central air in these century-old rowhouses is a retrofit, frequently squeezed into a tight footprint, so regular maintenance matters to keep an undersized system cooling well.',
      'Exposed up on the hilltop, many Mount Adams homes take direct sun that loads them with heat through a long summer afternoon, and the tight, packed-in layout traps that warmth. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and keeps a small retrofitted system running efficiently rather than struggling against the cooling load.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses with retrofitted central air, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Mount Adams?', a: 'Spring is best, before the summer sun starts loading these hilltop homes with heat. We work the steep, narrow streets regularly and can clean and test your system before the heat builds.' }],
  },
  'mount-auburn': {
    intro: 'Want your AC ready before another Mount Auburn summer? Annual maintenance keeps cooling efficient in the grand 19th-century homes on one of Cincinnati’s oldest hilltops. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. Central air in these Victorian-era houses is a retrofit, and in subdivided homes a single system often carries a large, awkward space, so regular tune-ups keep it cooling efficiently.',
      'Cooling a tall, century-old home with high ceilings and large rooms is a heavy load, and a retrofitted system has to work hard to reach the upper floors through a Mount Auburn summer. A yearly tune-up cleans the coils and filter, checks the refrigerant and electrical connections, and keeps an older system from losing capacity when the heat peaks.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Does maintenance help an older Mount Auburn AC last longer?', a: 'Yes. The grand 19th-century homes here put a heavy load on retrofitted systems, and an annual spring tune-up keeps the unit cooling efficiently and helps it last longer.' }],
  },
  'clifton': {
    intro: 'Getting your AC ready for the Clifton summer? An annual tune-up keeps cooling efficient in the large Victorian and early-1900s homes on the tree-lined streets near the Gaslight District. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Central air in these big older houses is a retrofit, and a number are now rentals near campus, so a yearly tune-up keeps an aging system cooling efficiently and reliably.',
      'Those mature trees that shade Clifton’s streets are hard on the outdoor unit, dropping pollen and leaves that pack the condenser coil and choke airflow. A yearly tune-up clears that buildup, checks the refrigerant charge, and keeps a system in one of these large homes from losing efficiency as summer wears on.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes with retrofitted central air, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Clifton?', a: 'Spring is best, before pollen and falling debris from the tree-lined streets clog the outdoor unit. We service the older homes and rentals throughout Clifton and the university area.' }],
  },
  'corryville': {
    intro: 'Want your AC ready before another Corryville summer? Annual tune-ups keep cooling efficient in the older homes and rentals around the Short Vine corridor near UC. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Central air in this older, densely packed housing is a retrofit that takes heavy use, so regular maintenance keeps an aging system cooling efficiently through summer.',
      'In tightly packed rentals near campus, filters load up fast and a hard-used system loses efficiency without regular attention. A yearly tune-up cleans the coils and replaces or clears the filter, checks the refrigerant charge, and keeps an older Corryville unit cooling well through the hottest weeks.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'How often should I tune up the AC in a Corryville rental near UC?', a: 'Once a year, in spring. The dense, hard-used housing around Short Vine loads filters and wears systems quickly, so annual maintenance keeps an older unit cooling efficiently.' }],
  },
  'northside': {
    intro: 'Getting your AC ready for the Northside summer? An annual tune-up keeps cooling efficient in the older homes along Hamilton Avenue toward the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Central air in these older homes is a retrofit, and a decades-old system depends on regular maintenance to keep cooling an older house efficiently.',
      'On the lower ground near Mill Creek, summer humidity runs heavy and makes a system work harder to pull moisture from the air through the season. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and keeps an aging Northside system holding its efficiency through the muggiest weeks.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Northside?', a: 'Spring is ideal, before the humidity off the Mill Creek valley builds. We service the older homes along Hamilton Avenue and can clean and test your system ahead of summer.' }],
  },
  'college-hill': {
    intro: 'Want your AC ready before another College Hill summer? Annual maintenance keeps cooling efficient in the large early-1900s and mid-century homes along Hamilton Avenue. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. Central air in these older homes is a retrofit, and a system that age depends on regular tune-ups to hold its efficiency through summer.',
      'The large early-1900s homes here take a heavy cooling load, and an aging retrofitted system loses capacity over the years if it is not serviced. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and catches a worn part before it leaves a College Hill home warm on the hottest day.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Does maintenance help an older College Hill AC last longer?', a: 'Yes. The large early-1900s and mid-century homes here put real load on retrofitted systems, and an annual spring tune-up keeps a unit running efficiently and helps it last longer.' }],
  },
  'walnut-hills': {
    intro: 'Getting your AC ready for the Walnut Hills summer? An annual tune-up keeps cooling efficient in the historic homes and apartment buildings around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district, much of it now split into units. Central air here is a retrofit, and in subdivided buildings a single system often cools a large, awkward space, so regular maintenance keeps it efficient.',
      'Cooling a tall, century-old building with high ceilings is a heavy load, and a retrofitted system has to work hard to reach the upper units through a Walnut Hills summer. A yearly tune-up cleans the coils and filter, checks the refrigerant and electrical connections, and keeps an aging system from losing capacity when the heat peaks.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Do you tune up the AC in the older apartment buildings in Walnut Hills?', a: 'Yes. Many Walnut Hills buildings are split into units with retrofitted cooling, and a spring tune-up keeps an aging system cooling efficiently through summer.' }],
  },
  'east-walnut-hills': {
    intro: 'Want your AC ready before another East Walnut Hills summer? Annual tune-ups keep cooling efficient in the stately early-1900s homes around Woodburn Avenue and DeSales Corner. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The central air in these large, century-old houses is a retrofit, and an aging system depends on regular maintenance to cool a big older home efficiently.',
      'The mature trees that line these streets drop pollen and leaves onto the outdoor unit, packing the condenser coil and cutting airflow over summer. A yearly tune-up clears that buildup, checks the refrigerant charge, and keeps a system in one of these stately homes holding its efficiency through the season.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in East Walnut Hills?', a: 'Spring is best, before pollen and debris from the tree-lined streets clog the outdoor unit. We service the stately older homes around Woodburn Avenue ahead of summer.' }],
  },
  'avondale': {
    intro: 'Getting your AC ready for the Avondale summer? An annual tune-up keeps cooling efficient in the older homes and apartment buildings near the hospitals and the zoo. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout, much of it rental. Central air in this older, densely built housing is a retrofit that takes heavy use, so regular maintenance keeps an aging system cooling efficiently.',
      'In hard-used rental housing, filters load up fast and a system loses efficiency without regular attention through an Avondale summer. A yearly tune-up cleans the coils and clears or replaces the filter, checks the refrigerant charge, and keeps an older unit cooling well when the heat is at its worst.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'How often should I tune up my AC in Avondale?', a: 'Once a year, in spring. The older, densely built housing near the hospitals loads filters and wears retrofitted systems quickly, so annual maintenance keeps a unit cooling efficiently.' }],
  },
  'hyde-park': {
    intro: 'Want your AC ready before another Hyde Park summer? Annual maintenance keeps cooling efficient in the large early-1900s homes around Hyde Park Square and Erie Avenue. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an established east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on shaded streets. Central air in these big older houses is a retrofit, and an aging system depends on regular tune-ups to cool a large home efficiently through summer.',
      'The mature trees that shade these streets drop pollen and leaves onto the outdoor unit, packing the condenser coil and choking airflow, while the size of these homes puts a heavy load on the system. A yearly tune-up clears that buildup, checks the refrigerant charge, and keeps a Hyde Park system holding its efficiency as the season wears on.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Hyde Park?', a: 'Spring is ideal, before pollen and falling debris from the shaded streets clog the outdoor unit. We service the large older homes around Hyde Park Square ahead of summer.' }],
  },
  'oakley': {
    intro: 'Getting your AC ready for the Oakley summer? An annual tune-up keeps cooling efficient in the early-1900s bungalows and brick homes around Oakley Square and Madison Road. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. Central air in the older bungalows is a retrofit, and a system that age depends on regular maintenance to hold its efficiency through a Cincinnati summer.',
      'In compact older bungalows, an aging retrofitted system loses capacity over the years and runs longer to keep up if it is not serviced. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and catches a worn part before it leaves an Oakley home warm on the hottest day.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Does maintenance help an older Oakley AC last longer?', a: 'Yes. The early-1900s bungalows here often run on retrofitted systems, and an annual spring tune-up keeps a unit cooling efficiently and helps it last longer.' }],
  },
  'mount-lookout': {
    intro: 'Want your AC ready before another Mount Lookout summer? Annual tune-ups keep cooling efficient in the older hilltop homes around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. Central air in these older homes is a retrofit, and a decades-old system depends on regular maintenance to cool an older house efficiently.',
      'The larger homes on these hilly streets take a heavy cooling load, and an aging retrofitted system loses capacity over the years if it is not serviced. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and keeps a Mount Lookout system holding its efficiency through the hottest weeks.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Mount Lookout?', a: 'Spring is best, before the summer heat builds. We service the older hilltop homes around Mount Lookout Square and Ault Park and can clean and test your system ahead of the season.' }],
  },
  'columbia-tusculum': {
    intro: 'Getting your AC ready for the Columbia-Tusculum summer? An annual tune-up keeps cooling efficient in the historic Victorian homes near the river in Cincinnati’s oldest neighborhood. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. Central air in these Victorian and early homes is a retrofit, and an aging system depends on regular maintenance to cool a tall older house efficiently.',
      'Down on the low riverside ground, summer humidity runs heavy and makes a system work harder to pull moisture from the air through the season. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and keeps an older Columbia-Tusculum system holding its efficiency through the muggiest stretch of summer.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Do you tune up the AC in the historic Victorian homes in Columbia-Tusculum?', a: 'Yes. We service the neighborhood’s older and Painted Lady homes regularly, and a spring tune-up keeps a retrofitted system cooling efficiently before the river humidity sets in.' }],
  },
  'mount-washington': {
    intro: 'Want your AC ready before another Mount Washington summer? Annual maintenance keeps cooling efficient in the early-1900s through mid-century homes along Beechmont Avenue. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Central air in these older homes is a retrofit, and a system that age depends on regular tune-ups to hold its efficiency through a Cincinnati summer.',
      'In homes of that era, an aging condenser and worn components lose capacity over time, and a unit that has not been serviced runs longer to keep up. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and catches a failing part before it leaves a Mount Washington home warm on the worst day.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'How often should I tune up my AC in Mount Washington?', a: 'Once a year, ideally in spring. The older and mid-century homes along Beechmont Avenue tend to have aging systems, and annual maintenance keeps them cooling efficiently.' }],
  },
  'madisonville': {
    intro: 'Getting your AC ready for the Madisonville summer? An annual tune-up keeps cooling efficient in the early-1900s homes along Madison Road. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. Central air in the older houses is a retrofit, and a decades-old system depends on regular maintenance to cool an older home efficiently through summer.',
      'In homes that age, an aging retrofitted system loses capacity over the years and runs longer to keep up if it is not serviced. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and catches a worn part before it leaves a Madisonville home warm on the hottest day.',
    ],
    commonIntro: 'In Madisonville’s older homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Does maintenance help an older Madisonville AC last longer?', a: 'Yes. The early-1900s homes along Madison Road often run on retrofitted systems, and an annual spring tune-up keeps a unit cooling efficiently and helps it last longer.' }],
  },
  'pleasant-ridge': {
    intro: 'Want your AC ready before another Pleasant Ridge summer? Annual tune-ups keep cooling efficient in the early-1900s homes and brick two-families along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Central air here is a retrofit, and in two-families a single system often carries more space than it was sized for, so regular maintenance keeps it cooling efficiently.',
      'The mature trees that line these streets drop pollen and leaves onto the outdoor unit, packing the condenser coil and cutting airflow over summer. A yearly tune-up clears that buildup, checks the refrigerant charge, and keeps an aging Pleasant Ridge system holding its efficiency through the season.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'When should I schedule an AC tune-up in Pleasant Ridge?', a: 'Spring is ideal, before pollen and debris from the tree-lined streets clog the outdoor unit. We service the older homes and brick two-families along Montgomery Road ahead of summer.' }],
  },
  'westwood': {
    intro: 'Getting your AC ready for the Westwood summer? An annual tune-up keeps cooling efficient in the older and mid-century homes across Cincinnati’s largest neighborhood along Harrison Avenue. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, the central air is mostly a retrofit and the systems are decades old, so regular maintenance keeps them cooling efficiently.',
      'In homes of that era, an aging condenser and worn components lose capacity over time, and a unit that has not been serviced runs longer to keep up through a Cincinnati summer. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and catches a failing part before it leaves a Westwood home warm on the worst day.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'How often should I tune up my AC in Westwood?', a: 'Once a year, in spring. The older and mid-century homes along Harrison Avenue tend to have aging systems, and annual maintenance keeps them cooling efficiently and helps them last longer.' }],
  },
  'norwood': {
    intro: 'Want your AC ready before another Norwood summer? Annual maintenance keeps cooling efficient in the dense early-1900s homes and brick two-families around Surrey Square and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. Central air in this century-old housing is a retrofit, and in two-families a single system often carries more space than it was sized for, so regular maintenance keeps it cooling efficiently.',
      'On Norwood’s small, tightly packed lots, the dense layout traps heat and an undersized retrofitted system can struggle to keep up through a long summer afternoon. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and keeps an older system running efficiently rather than falling behind on the hottest days.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'Does maintenance help an older Norwood AC last longer?', a: 'Yes. The dense, century-old homes and two-families here often run on undersized retrofitted systems, and an annual spring tune-up keeps a unit cooling efficiently and helps it last longer.' }],
  },
  'blue-ash': {
    intro: 'Want your AC ready before another Blue Ash summer? Annual maintenance keeps cooling efficient in the mid-century neighborhoods and newer subdivisions across this northeast-side city. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so the cooling systems have aged into the range where regular maintenance keeps them efficient and reliable.',
      'In homes of that age, an aging condenser and worn components lose capacity over time, and a unit that has not been serviced runs longer to keep up through summer. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and catches a failing part before it leaves a Blue Ash home warm on the worst day.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'How often should I tune up my AC in Blue Ash?', a: 'Once a year, in spring. Even the newer subdivisions here have systems that are now decades old, and annual maintenance keeps them cooling efficiently and helps them last longer.' }],
  },
  'montgomery': {
    intro: 'Getting your AC ready for the Montgomery summer? An annual tune-up keeps cooling efficient in the historic and established homes around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. Cooling here ranges from retrofitted systems in the century-old structures to decades-old units in the established subdivisions, and both depend on regular maintenance to hold their efficiency.',
      'Across that range of housing, an aging system loses capacity over the years and runs longer to keep up if it is not serviced through a summer. A yearly tune-up cleans the coils and filter, checks the refrigerant charge, and catches a worn part before it leaves a Montgomery home warm on the hottest day.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, the signs your AC is overdue for a tune-up are:',
    localFaqs: [{ q: 'How often should I tune up my AC in Montgomery?', a: 'Once a year, ideally in spring. Whether your home is in the historic district or an established subdivision, annual maintenance keeps the system cooling efficiently and helps it last longer.' }],
  },
};
