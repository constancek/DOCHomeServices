export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Aging gas line or adding a gas appliance in a Sedamsville home? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test every job, for homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, sitting between Riverside and Sayler Park, with much of its housing dating to the late 1800s and early 1900s. Gas lines in homes that old are often the original steel, which corrodes from the inside over decades, so we inspect, repair, or replace them and pressure-test the result.',
      'Most of the housing climbs the hillside above River Road, where shifting and settling ground can stress buried lines and loosen aging connections. We locate the problem, repair or replace the run, and verify the line is leak-free before we leave. Every job is completed to code.',
    ],
    commonIntro: 'In Sedamsville’s older homes with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Are gas lines in older Sedamsville homes more likely to need replacement?', a: 'Often, yes. Many of Sedamsville’s early-1900s homes still have aging steel gas lines prone to corrosion, so our licensed plumbers inspect them and explain whether a targeted repair or a full replacement is the safer call, then pressure-test the work to code.' }],
  },
  'sayler-park': {
    intro: 'Suspected gas leak or adding a gas range in Sayler Park? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, from the riverfront streets to the homes up the hill. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before annexation in the early 1900s, and it still reads that way, with tree-lined streets and rows of Victorian and early-1900s frame houses whose original steel gas lines have been in service for a century.',
      'Two local traits matter for gas work here. The decades-old trees that shade these streets put roots and shifting soil against buried lines, and the floodplain along the river leaves ground saturated, which accelerates corrosion on aging steel. We locate the issue, repair or replace the run, and pressure-test it before we leave.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame houses with original steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Do you run new gas lines in Sayler Park’s older frame homes?', a: 'Yes. We add gas lines for ranges, water heaters, and fireplaces in Sayler Park’s older homes, sizing and routing the line to code and pressure-testing it before it goes into service.' }],
  },
  'riverside': {
    intro: 'Corroded gas line or a new appliance hookup in Riverside? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test every job for the homes along River Road. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. Together with Sedamsville it forms one of the oldest riverfront communities on the city’s west side, where original steel gas lines are common.',
      'Because so many homes here sit on low Ohio River bottomland, high groundwater keeps the soil around buried lines wet, which speeds corrosion on aging steel. We locate the weak run, repair or replace it, and pressure-test the line to confirm it is leak-free. All work is completed to code.',
    ],
    commonIntro: 'On Riverside’s low riverfront lots with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Does the low, wet ground in Riverside affect buried gas lines?', a: 'It can. Saturated bottomland soil along River Road speeds corrosion on aging steel gas lines, so our licensed plumbers inspect the buried run, repair or replace it, and pressure-test the work to code.' }],
  },
  'east-price-hill': {
    intro: 'Aging gas line in an East Price Hill two-family, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, on the hilltop streets around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing — two- and three-story frame homes and brick two-families built close together — where original steel gas lines are the norm.',
      'In two-family and multi-unit homes built that close, gas lines feed several appliances off old, corroding steel, so we trace the run, repair or replace the failing section, and pressure-test it. Adding load with a new range or water heater often means the older line should be replaced first, and we handle that to code.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Can you work on gas lines in East Price Hill’s two-family homes?', a: 'Yes. We work on the multi-unit and two-family homes around Warsaw Avenue regularly, tracing and repairing or replacing aging gas lines unit by unit, and pressure-testing every job to code.' }],
  },
  'west-price-hill': {
    intro: 'Old gas line due for replacement, or adding a gas appliance in West Price Hill? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, along Glenway Avenue and beyond. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods, with a lot of 1920s through 1950s single-family homes, but plumbing and gas lines from that era are still many decades old.',
      'In homes that age we routinely find original steel gas lines slowly corroding, along with older connections that loosen over time. Before a homeowner adds a gas range, dryer, or generator, the existing line often needs replacing to carry the load. We size and run it to code and pressure-test before it goes into service.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes with decades-old gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Should an older West Price Hill home’s gas line be replaced before adding an appliance?', a: 'Often, yes. Many of West Price Hill’s 1920s-to-1950s homes have aging steel gas lines, and adding a range or generator can exceed what the old run safely carries, so our licensed plumbers size, replace, and pressure-test the line to code.' }],
  },
  'lower-price-hill': {
    intro: 'Corroded gas line or a new appliance hookup in a Lower Price Hill rowhouse? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test every job, on the historic streets around State Avenue. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, full of original plumbing and gas piping.',
      'Those mid-1800s rowhouses were built long before modern codes, so many still run on aging steel gas lines that corrode and develop loose connections with age. The low, damp valley ground keeps the soil around buried lines wet, which speeds that corrosion. We repair or replace the run and pressure-test it without damaging original features.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses with original steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Do you work on gas lines in Lower Price Hill’s old brick rowhouses?', a: 'Yes. We work on the historic 19th-century rowhouses around State Avenue regularly, repairing or replacing aging steel gas lines without damaging original features, and pressure-testing each job to code.' }],
  },
  'over-the-rhine': {
    intro: 'Aging gas line in an Over-the-Rhine building, or adding a gas appliance to a condo? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, on the historic blocks around Findlay Market and Vine Street. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. Gas piping in buildings that old is a patchwork of original steel and later retrofits.',
      'Many of these buildings are now split into apartments and condos, with shared gas lines feeding several units off aging steel. One corroded run or loose connection can affect more than one unit, so we trace the line, repair or replace the failing section, and pressure-test it to code.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units with aging gas piping, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Can you work on gas lines in a multi-unit Over-the-Rhine building?', a: 'Yes. OTR is full of historic buildings split into apartments and condos with shared, aging gas piping. We trace and isolate the line, repair or replace the failing section, and pressure-test the work to code.' }],
  },
  'downtown': {
    intro: 'Gas line work in a downtown condo, loft, or older commercial conversion? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Gas piping here ranges from modern stacked risers in towers to original steel lines in early-1900s buildings turned residential.',
      'In older converted buildings, that original steel can corrode and connections can loosen with age, while in towers gas service is shared across floors. Either way, we trace the run, repair or replace the failing section, and pressure-test it before it returns to service, coordinating access so the rest of the building is unaffected.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Can you handle gas-line work in a downtown high-rise or converted loft?', a: 'Yes. We work in towers and converted loft buildings regularly, coordinating access and isolating the gas line to one area so a repair or replacement does not disrupt the rest of the building, then pressure-testing to code.' }],
  },
  'west-end': {
    intro: 'Corroded gas line in a West End rowhouse, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, near TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. It holds historic Italianate rowhouses and brick homes alongside mid-century housing, with newer development now mixed in, so gas piping ranges from original steel to more recent runs.',
      'The older brick homes here carry decades-old steel gas lines that corrode and loosen at the connections over time, and the low ground near the Mill Creek basin keeps the soil around buried lines damp, which speeds corrosion. We repair or replace the run and pressure-test it to code.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Are gas lines in the West End’s older brick homes prone to corrosion?', a: 'Often, yes. The West End’s older brick homes carry decades-old steel gas lines, and the damp ground near the Mill Creek basin speeds corrosion, so our licensed plumbers inspect, repair or replace the line, and pressure-test it to code.' }],
  },
  'mount-adams': {
    intro: 'Aging gas line on the Mount Adams hilltop, or adding a gas fireplace? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work on the steep, narrow streets above downtown. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Gas lines in homes that age are usually original steel that corrodes from the inside over the decades.',
      'The steep hillside setting matters for buried lines: shifting and settling ground on the grade can stress runs and loosen aging connections. Tight access on the narrow streets means it pays to use a crew that knows the hill. We trace, repair or replace the line, and pressure-test it to code.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses with original steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Does the steep terrain in Mount Adams affect buried gas lines?', a: 'It can. Shifting ground on Mount Adams’ steep grades stresses buried gas runs and loosens aging connections, so our licensed plumbers locate the problem, repair or replace the line, and pressure-test it to code.' }],
  },
  'mount-auburn': {
    intro: 'Old gas line in a Mount Auburn Victorian, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test every job in one of Cincinnati’s oldest hilltop neighborhoods. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine. It is lined with grand 19th-century homes and historic mansions, many now divided into apartments, which means some of the oldest gas piping in the city.',
      'Those Victorian-era homes carry original steel gas lines that corrode and fail with age, and in subdivided houses a single shared run feeds several units. We trace the line, repair or replace the corroded section, and pressure-test it to code so the whole building stays safe.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes with original steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Are gas lines in Mount Auburn’s subdivided Victorian homes more likely to need replacement?', a: 'Often, yes. Many of Mount Auburn’s 19th-century homes were split into apartments and still run original steel gas lines, so our licensed plumbers trace the shared run, repair or replace the corroded section, and pressure-test it to code.' }],
  },
  'clifton': {
    intro: 'Aging gas line under Clifton’s old trees, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, in the Gaslight District and around Ludlow Avenue. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Big houses that age usually still carry original steel gas lines.',
      'Two issues stand out here. The mature trees that shade these streets put roots and shifting soil against buried lines, and a fair number of the large homes are now rentals near campus where an aging gas line should be checked before a new appliance is added. We repair or replace the run and pressure-test it to code.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes under mature trees, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Can mature trees in Clifton damage a buried gas line?', a: 'Yes. Roots and shifting soil under Clifton’s old tree-lined streets can stress and damage buried gas lines, so our licensed plumbers locate the run, repair or replace it, and pressure-test the work to code.' }],
  },
  'corryville': {
    intro: 'Aging gas line in a Corryville rental near UC, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around the Short Vine corridor. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Gas piping in housing that age and that densely packed is usually aging steel.',
      'With so much older housing turned into rentals, gas lines here take heavy use and share walls and stacks between units. A corroded run or loose connection in one unit can affect the next, so we trace the line, repair or replace the failing section, and pressure-test it to code.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Do you work on gas lines in Corryville’s student rentals near UC?', a: 'Yes. We work on the older homes and rentals throughout Corryville and the university area, tracing and repairing or replacing aging gas lines unit by unit, and pressure-testing each job to code.' }],
  },
  'northside': {
    intro: 'Corroded gas line near the Mill Creek valley, or adding a gas appliance in Northside? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around Hamilton Avenue. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Homes that age commonly run original steel gas lines.',
      'The low ground near Mill Creek keeps the soil around buried lines damp, which speeds corrosion on aging steel, and older connections loosen over the decades. We locate the weak run, repair or replace it, and pressure-test the line to code before it returns to service.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Does the damp ground near Mill Creek affect Northside gas lines?', a: 'It can. The low, damp ground near the Mill Creek valley speeds corrosion on Northside’s aging steel gas lines, so our licensed plumbers inspect the buried run, repair or replace it, and pressure-test it to code.' }],
  },
  'college-hill': {
    intro: 'Old gas line due for replacement, or adding a gas appliance in College Hill? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, along Hamilton Avenue and Belmont. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. That range of older housing usually means aging steel gas lines.',
      'In homes this age, slowly corroding steel gas lines and connections that have loosened over time are the usual concerns, and an older line often needs replacing before a new range, water heater, or generator adds load. We size, repair or replace the run, and pressure-test it to code.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Should I replace the gas line in an older College Hill home before adding an appliance?', a: 'Often, yes. Many College Hill homes along Hamilton Avenue have aging steel gas lines that may not safely carry added load, so our licensed plumbers size, replace, and pressure-test the line to code before a new appliance goes in.' }],
  },
  'walnut-hills': {
    intro: 'Aging gas line in a Walnut Hills apartment building, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Gas piping in housing that age is usually original steel.',
      'Much of that century-old housing is now split into units, where a shared gas line feeds several apartments off aging, corroding steel. One failing run can affect more than one unit, so we trace the line, repair or replace the corroded section, and pressure-test it to code.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Do you work on gas lines in Walnut Hills’ older apartment buildings?', a: 'Yes. Many Walnut Hills buildings are split into units with shared, aging gas piping, and we trace and isolate the line, repair or replace the failing section, and pressure-test it to code.' }],
  },
  'east-walnut-hills': {
    intro: 'Corroded gas line in a stately East Walnut Hills home, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around Woodburn Avenue and DeSales Corner. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often still carry original steel gas lines.',
      'In homes that age, that original steel corrodes and connections loosen, while the mature trees along these streets put roots and shifting soil against buried runs. We trace the line, repair or replace the failing section, and pressure-test it to code, taking care around the original woodwork these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes with original steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Are gas lines in East Walnut Hills’ older homes likely to need replacement?', a: 'Often, yes. The large, century-old homes around Woodburn Avenue frequently still run original steel gas lines that corrode with age, so our licensed plumbers inspect, repair or replace the run, and pressure-test it to code.' }],
  },
  'avondale': {
    intro: 'Aging gas line in an Avondale home or apartment, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, near the hospitals and the zoo. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. Housing that age commonly runs original steel gas lines.',
      'A lot of Avondale’s housing is older and densely built, much of it rental, which puts aging gas lines under heavy use. Corroding steel and loose connections are the concerns we see most, and in multi-unit buildings a shared run can affect several apartments. We repair or replace the line and pressure-test it to code.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Do you work on gas lines in Avondale’s older rental buildings?', a: 'Yes. Much of Avondale’s housing near the hospitals is older and rental with aging gas piping, and we trace, repair or replace the line, and pressure-test the work to code.' }],
  },
  'hyde-park': {
    intro: 'Hidden gas-line concern in a large Hyde Park home, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around Hyde Park Square and Erie Avenue. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. Big houses that age usually still carry original steel gas lines.',
      'These are exactly the homes where a corroded line or loose connection can go unnoticed in a finished basement, and the mature trees over these streets put roots and shifting soil against buried runs. We locate the issue, repair or replace the line, and pressure-test it to code.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes with original steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Can mature trees around Hyde Park Square damage a buried gas line?', a: 'Yes. Roots and shifting soil under Hyde Park’s established, tree-shaded streets can stress and damage buried gas lines, so our licensed plumbers locate the run, repair or replace it, and pressure-test the work to code.' }],
  },
  'oakley': {
    intro: 'Corroded gas line in an Oakley bungalow, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around Oakley Square and Madison Road. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows that fill much of Oakley were built with steel gas lines now well past their prime.',
      'In housing that age, corroding steel and connections that have loosened over the decades are the usual concerns, and an older line often needs replacing before a new range or water heater is added. We size, repair or replace the run, and pressure-test it to code.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Are gas lines in Oakley’s older bungalows prone to corrosion?', a: 'Often, yes. The early-1900s bungalows around Oakley Square were built with steel gas lines now well past their prime, so our licensed plumbers inspect, repair or replace the run, and pressure-test it to code.' }],
  },
  'mount-lookout': {
    intro: 'Aging gas line on a Mount Lookout hillside, or adding a gas fireplace? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes here carry decades-old steel gas lines.',
      'The hillside grade matters for buried runs: shifting and settling ground on the slope can stress lines and loosen aging connections, and that older steel corrodes from the inside over time. We locate the problem, repair or replace the line, and pressure-test it to code.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes with decades-old steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Does the hillside grade in Mount Lookout affect buried gas lines?', a: 'It can. Shifting ground on Mount Lookout’s hilly streets stresses buried gas runs and loosens aging connections, so our licensed plumbers locate the problem, repair or replace the line, and pressure-test it to code.' }],
  },
  'columbia-tusculum': {
    intro: 'Old gas line in a Columbia-Tusculum Victorian, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, in Cincinnati’s oldest neighborhood near the river. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful Painted Ladies — restored Victorian homes — on the east side near the Ohio River. Homes that age commonly run original steel gas lines.',
      'Two things matter for gas work here. The age of those Victorian and early homes means original steel well past its service life, and the low riverside ground keeps the soil around buried lines damp, which speeds corrosion. We repair or replace the run and pressure-test it to code without damaging historic interiors.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river with original steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Do you work on gas lines in Columbia-Tusculum’s historic Victorian homes?', a: 'Yes. We work on the neighborhood’s older and Painted Lady homes regularly, repairing or replacing aging steel gas lines without damaging original features, and pressure-testing each job to code.' }],
  },
  'mount-washington': {
    intro: 'Old gas line due for replacement, or adding a gas appliance in Mount Washington? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, along Beechmont Avenue. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Housing across that range commonly runs aging steel gas lines.',
      'In homes of that era, original steel corrodes and connections loosen over the decades, and an older line often needs replacing before a new range, water heater, or generator adds load. We size, repair or replace the run, and pressure-test it to code.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Should an older Mount Washington home’s gas line be replaced before adding load?', a: 'Often, yes. Many homes along Beechmont Avenue have aging steel gas lines that may not safely carry a new appliance, so our licensed plumbers size, replace, and pressure-test the line to code before the load is added.' }],
  },
  'madisonville': {
    intro: 'Corroded gas line in a Madisonville home, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of Madisonville run on aging steel gas lines.',
      'In housing that age, corroding steel and connections that have loosened over time are the concerns we see most, and an older line often needs replacing before a homeowner adds a gas range or water heater during a remodel. We repair or replace the run and pressure-test it to code.',
    ],
    commonIntro: 'In Madisonville’s older homes with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Are gas lines in older Madisonville homes prone to corrosion?', a: 'Often, yes. The early-1900s homes along Madison Road run aging steel gas lines that corrode with age, so our licensed plumbers inspect, repair or replace the run, and pressure-test it to code.' }],
  },
  'pleasant-ridge': {
    intro: 'Aging gas line in a Pleasant Ridge two-family, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Housing that age commonly runs original steel gas lines.',
      'Those older single- and two-family homes carry decades-old steel that corrodes and loosens at the connections, and in a two-family a single shared run feeds both units. We trace the line, repair or replace the failing section, and pressure-test it to code so both units stay safe.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Can you work on gas lines in Pleasant Ridge’s two-family homes?', a: 'Yes. We work on the brick two-families throughout Pleasant Ridge, tracing and repairing or replacing the shared gas line, and pressure-testing the work to code so both units stay safe.' }],
  },
  'westwood': {
    intro: 'Old gas line due for replacement, or adding a gas appliance in Westwood? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, across Cincinnati’s largest neighborhood along Harrison Avenue. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. That range of older housing usually means aging steel gas lines.',
      'Across that span, the common thread is older steel gas lines slowly corroding and connections loosening with age. An older line often needs replacing before a new range, dryer, or generator adds load. We size, repair or replace the run, and pressure-test it to code.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Should an older Westwood home’s gas line be replaced before adding an appliance?', a: 'Often, yes. Many of Westwood’s early-1900s and mid-century homes along Harrison Avenue have aging steel gas lines that may not safely carry added load, so our licensed plumbers size, replace, and pressure-test the line to code.' }],
  },
  'norwood': {
    intro: 'Aging gas line in a Norwood two-family, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around Surrey Square and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. Housing that age and that densely packed commonly runs original steel gas lines.',
      'In that tightly built, century-old housing, corroding steel and loose connections cluster, and on small lots a two-family’s shared run feeds both units. We trace the line, repair or replace the failing section, and pressure-test it to code so a problem in one home does not reach the next.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families with aging steel gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Are gas lines in Norwood’s older two-family homes prone to corrosion?', a: 'Often, yes. Norwood’s tightly built early-1900s homes and brick two-families run aging steel gas lines that corrode with age, so our licensed plumbers inspect, repair or replace the run, and pressure-test it to code.' }],
  },
  'blue-ash': {
    intro: 'Aging gas line or adding a gas appliance to a Blue Ash home or business? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test every job across this northeast-side city. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so gas lines have had time to age.',
      'Worn steel gas lines and connections that loosen over the years are the concerns we see most across that mid-century housing, and many homes are good candidates for a new line when a range, water heater, or generator is added. We size, repair or replace the run, and pressure-test it to code, for homes and businesses alike.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions with aging gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'How fast can you get to a Blue Ash gas-line job?', a: 'Blue Ash is well within our northeast service area, and our licensed plumbers aim for same-day arrival on gas-line work for homes and businesses, repairing or replacing the line and pressure-testing it to code.' }],
  },
  'montgomery': {
    intro: 'Old gas line in a Montgomery home, or adding a gas appliance? Our licensed plumbers diagnose, repair, and replace gas lines to code and pressure-test the work, around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. That span means gas piping ranging from original steel to more recent runs.',
      'From century-old structures in the historic core to decades-old subdivisions, worn steel gas lines and loosening connections are the concerns we see most, and an older line often needs replacing before a new appliance adds load. We size, repair or replace the run, and pressure-test it to code.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes with aging gas lines, the gas-line work we handle most is:',
    localFaqs: [{ q: 'Do you work on gas lines in Montgomery’s historic district homes?', a: 'Yes. We work on the 19th-century structures in Montgomery’s historic core and the established homes around them, repairing or replacing aging gas lines and pressure-testing each job to code.' }],
  },
};
