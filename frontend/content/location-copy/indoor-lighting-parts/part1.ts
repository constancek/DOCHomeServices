export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Indoor lighting in Sedamsville usually means brightening small, low-ceilinged rooms in houses from the late 1800s and early 1900s on the hillside above River Road. Many still have one ceiling fixture per room and dated wiring, so we check the circuits before adding recessed or LED lighting.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with housing that climbs the hillside above River Road and dates to the late 1800s and early 1900s. Homes that old often have small rooms, low ceilings, and a single ceiling fixture per room, so recessed and layered lighting goes a long way toward making the space feel brighter.',
      'Sitting between Riverside and Sayler Park on the oldest stretch of the west side, many houses here still carry dated wiring, which we check before adding new circuits or fixtures. We update connections to code and install efficient LED lighting that cuts energy use without overloading an older panel.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes with smaller, darker rooms, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in an older Sedamsville home?', a: 'Yes. We routinely add recessed and LED lighting in Sedamsville’s early-1900s homes along and above River Road, checking the existing wiring first and bringing every connection up to code so the new lighting runs safely.' }],
  },
  'sayler-park': {
    intro: 'Sayler Park’s Victorian and early-1900s frame houses sit under a thick tree canopy, so most indoor lighting jobs here start with rooms that stay dim all day. We inspect the old wiring, then add recessed cans or layered LED fixtures where one ceiling light used to do everything.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before annexation in the early 1900s, and its tree-lined streets are still lined with Victorian and early-1900s frame houses that tend to have small, shaded rooms and one fixture per ceiling.',
      'Those century-old frame homes often run on wiring well past its prime, so we inspect existing circuits before adding recessed cans or replacing dated fixtures. The mature tree canopy that shades the streets also keeps interiors dim during the day, which makes good layered LED lighting worth the upgrade.',
    ],
    commonIntro: 'In Sayler Park’s tree-shaded Victorian and early-1900s frame homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you brighten the dark rooms in a Sayler Park frame house?', a: 'Yes. We add recessed and LED lighting throughout Sayler Park’s older frame homes, checking the original wiring first and bringing every connection up to code so the new fixtures run safely in Cincinnati’s westernmost neighborhood.' }],
  },
  'riverside': {
    intro: 'Lower levels are where most indoor lighting work in Riverside happens. Homes along River Road sit on low river bottomland, so basements and back rooms get little daylight. The wiring is often original, and we test it before adding LED fixtures that will not strain an older panel.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. Many homes sit on low river bottomland, where lower levels get little daylight and benefit most from recessed and added lighting.',
      'Together with Sedamsville it forms one of the oldest riverfront communities on the city’s west side, so original wiring is common in these houses. We check those circuits before adding fixtures and install efficient LED lighting that brightens basements and back rooms without straining an older panel.',
    ],
    commonIntro: 'In Riverside’s older River Road homes with dim, low-lying lower levels, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you light up a dim basement in a Riverside home?', a: 'Yes. We add recessed and LED lighting in the lower levels of Riverside’s River Road homes, checking the existing wiring first and bringing the work up to code so a dark basement becomes genuinely usable.' }],
  },
  'east-price-hill': {
    intro: 'East Price Hill’s two- and three-story frame homes and brick two-families around Warsaw Avenue have tall, narrow rooms that lean dark, which is where indoor lighting upgrades help most. The original wiring is brittle with age, so we inspect it first and wire each level separately.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, on streets around Warsaw Avenue and the Incline District packed with dense early-1900s housing: two- and three-story frame homes and brick two-families built close together. Tall, narrow rooms in these houses often lean dark, which is where recessed and layered lighting helps most.',
      'The original wiring in these century-old two-families is brittle with age, so we inspect circuits before adding fixtures or new lighting circuits. In a multi-unit building we can wire and switch each level cleanly, bringing every connection up to code as we go.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s two-families with tall, narrow rooms, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting to an East Price Hill two-family?', a: 'Yes. We work on the two- and three-story homes around Warsaw Avenue regularly, adding recessed and LED lighting one level at a time, checking the older wiring and bringing each connection up to code.' }],
  },
  'west-price-hill': {
    intro: 'A typical indoor lighting job in West Price Hill swaps original fixtures for recessed and LED lighting in a 1920s to 1950s single-family home along Glenway Avenue. Those houses often have closed-off rooms and dated panels, so we check the existing service before adding any new circuits.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. Houses from that era often have closed-off rooms and original fixtures, so recessed lighting and modern LED fixtures make a real difference.',
      'Even the "newer" housing here is decades old, which means the wiring and panels may be dated. We check the existing service before adding lighting circuits and install efficient LED fixtures that brighten a room without overloading an older system.',
    ],
    commonIntro: 'In West Price Hill’s 1920s-to-1950s single-family homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you replace old fixtures with recessed LED lighting near Glenway Avenue?', a: 'Yes. We swap dated fixtures for recessed and LED lighting throughout West Price Hill’s mid-century homes, checking the panel and wiring first and keeping every connection code-compliant.' }],
  },
  'lower-price-hill': {
    intro: 'Lower Price Hill has one of Cincinnati’s most intact runs of 19th-century Italianate rowhouses, and indoor lighting there means working in narrow, deep rooms that get little daylight. The wiring predates modern systems, so we inspect it and add recessed or LED fixtures around the original brick and trim.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, which tend to be narrow and deep with rooms that get little daylight.',
      'Those mid-1800s rowhouses were built long before modern wiring, so many still carry old electrical systems we inspect before adding any lighting. We work carefully around original brick and trim, adding recessed and LED fixtures and bringing the connections up to code without damaging historic features.',
    ],
    commonIntro: 'In Lower Price Hill’s narrow 19th-century rowhouses down in the valley, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add lighting to a historic Lower Price Hill rowhouse without damaging it?', a: 'Yes. We add recessed and LED lighting in the 19th-century rowhouses around State Avenue regularly, working carefully around original brick and trim and bringing the older wiring up to code.' }],
  },
  'over-the-rhine': {
    intro: 'In Over-the-Rhine, indoor lighting work usually happens in brick buildings from the 1850s to 1880s that are now apartments and condos. High ceilings and deep floor plans leave the middle of a room dim, and the wiring is a mix of original and retrofitted circuits we check first.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. The high ceilings and deep floor plans in these buildings often leave the middle of a room dim without added lighting.',
      'Many of these buildings are now split into apartments and condos running on a patchwork of original and retrofitted wiring. We inspect the circuits before adding fixtures and install recessed and LED lighting that fits the historic look while meeting current code.',
    ],
    commonIntro: 'In Over-the-Rhine’s tall-ceilinged 19th-century buildings and converted units, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in an OTR condo conversion?', a: 'Yes. We add recessed and LED lighting in OTR’s converted lofts and condos around Vine Street and Findlay Market, checking the building’s mix of original and retrofitted wiring and keeping every connection code-compliant.' }],
  },
  'downtown': {
    intro: 'Downtown indoor lighting jobs split between high-rise condos with modern circuits and converted loft buildings with original early-1900s wiring. Lofts tend to have deep floor plans that need added light toward the interior. We check what is behind the walls and sort out building access before we start.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Loft conversions in particular tend to have deep floor plans where the interior needs added lighting to feel bright.',
      'The wiring downtown ranges from modern circuits in newer towers to original lines in early-1900s buildings turned residential. We check what is behind the walls before adding fixtures and install recessed and LED lighting that meets code, coordinating building access where needed.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you install recessed lighting in a downtown loft?', a: 'Yes. We add recessed and LED lighting in downtown condos and converted lofts, checking whether the wiring is modern or original, coordinating building access, and bringing every connection up to code.' }],
  },
  'west-end': {
    intro: 'Recessed and LED indoor lighting in the West End most often goes into historic Italianate rowhouses and older brick homes near TQL Stadium and Linn Street. Those rooms tend to be closed off and shaded, and the wiring is usually original, so we inspect each circuit before adding fixtures.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer development. The older brick homes here often have closed-off, shaded rooms that benefit from recessed and layered lighting.',
      'Those decades-old brick houses tend to carry original wiring, so we inspect the circuits before adding fixtures or lighting. We then install efficient LED lighting and bring each connection up to code, whether the home is a historic rowhouse or a mid-century build.',
    ],
    commonIntro: 'In the West End’s historic rowhouses and older brick homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you brighten a dim older home in the West End?', a: 'Yes. We add recessed and LED lighting in the West End’s historic rowhouses and brick homes near Linn Street, checking the older wiring first and keeping every connection code-compliant.' }],
  },
  'mount-adams': {
    intro: 'Mount Adams rowhouses are narrow, multi-level and packed tight on steep streets, so indoor lighting there gets planned one floor at a time. The small rooms in these 19th-century homes lean dark, and the wiring is often original, which we check before adding recessed cans.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Those narrow, multi-level homes tend to have small rooms that lean dark, which is exactly where recessed lighting helps.',
      'The age of the housing means original wiring is common, so we check the circuits before adding fixtures or lighting circuits. We install recessed and LED lighting level by level in these tall, narrow homes and bring every connection up to code.',
    ],
    commonIntro: 'In Mount Adams’ narrow, multi-level 19th-century rowhouses, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in a narrow Mount Adams rowhouse?', a: 'Yes. We work on the hill regularly, adding recessed and LED lighting through the tight, multi-level rooms of Mount Adams’ 19th-century rowhouses and bringing the older wiring up to code.' }],
  },
  'mount-auburn': {
    intro: 'Indoor lighting work in Mount Auburn often means a grand 19th-century home with high ceilings and deep rooms, many now divided into apartments. These houses carry some of the oldest wiring in the city, so we inspect it first, then light and switch each unit separately.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. The high ceilings and deep rooms in these houses often need added lighting to feel bright.',
      'Those Victorian-era homes carry some of the oldest wiring in the city, so we inspect the circuits before adding fixtures. In subdivided houses we can light and switch each unit cleanly, installing recessed and LED fixtures that meet code while fitting the period interiors.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add lighting to a Victorian-era Mount Auburn home?', a: 'Yes. We add recessed and LED lighting in Mount Auburn’s 19th-century homes and subdivided houses, checking some of the oldest wiring in the city first and bringing every connection up to code.' }],
  },
  'clifton': {
    intro: 'Big Victorian and early-1900s homes on Clifton’s tree-lined streets near Ludlow Avenue tend to have dim interiors, which is why recessed and layered indoor lighting is a common job here. Plenty are rentals near UC. We check the original wiring before adding LED fixtures to a large room.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. The big rooms and tree-shaded windows in these houses often leave interiors dim, which is where recessed and layered lighting helps.',
      'Many of these century-old homes still carry original wiring, and a fair number are now rentals near campus where good lighting matters. We inspect the circuits before adding fixtures and install efficient LED lighting that brightens a large room without straining an older panel.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in a large Clifton Victorian?', a: 'Yes. We add recessed and LED lighting throughout Clifton’s big Victorian and early-1900s homes near Ludlow Avenue, checking the original wiring first and bringing every connection up to code.' }],
  },
  'corryville': {
    intro: 'Corryville’s early-1900s homes and student rentals around Short Vine have small, dim rooms and wiring that takes heavy use, so an indoor lighting job usually starts with a circuit check. Then we add recessed or LED fixtures, whether it is a single house or one unit in a shared building.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Densely built older housing here often has small, dim rooms where recessed and added lighting makes the space far more usable.',
      'With so much of the housing aging and now rented, the wiring takes heavy use, so we check circuits before adding fixtures or lighting. We install efficient LED lighting and bring each connection up to code, whether it is a single home or a unit in a shared building.',
    ],
    commonIntro: 'In Corryville’s dense, older homes and rentals near campus, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add lighting to an older rental near UC in Corryville?', a: 'Yes. We add recessed and LED lighting in Corryville’s early-1900s homes and rentals around Short Vine, checking the heavily used older wiring first and keeping every connection code-compliant.' }],
  },
  'northside': {
    intro: 'Northside indoor lighting jobs mostly involve late-1800s and early-1900s homes along Hamilton Avenue and the streets running down toward the Mill Creek valley. Many have closed-off rooms with a single ceiling fixture. We test the original wiring, then add recessed and LED lighting, including in darker lower levels.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Houses of that age often have closed-off rooms and a single ceiling fixture, so recessed and layered lighting helps a lot.',
      'The age of the housing means original wiring is common, so we inspect the circuits before adding fixtures. We install efficient LED lighting throughout — including lower levels near the valley that get little daylight — and bring each connection up to code.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you brighten a dim older Northside home?', a: 'Yes. We add recessed and LED lighting in Northside’s late-1800s and early-1900s homes along Hamilton Avenue, checking the original wiring first and bringing every connection up to code.' }],
  },
  'college-hill': {
    intro: 'College Hill’s large early-1900s and mid-century homes along Hamilton Avenue have deep rooms that need more light than one fixture gives, so indoor lighting work there means more fixtures on proper circuits. We start by checking a dated panel, then add recessed and LED lighting.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. The bigger older homes here often have deep rooms that need added lighting to feel bright.',
      'In homes this age the wiring and panels may be dated, so we check the existing service before adding lighting circuits. We then install recessed and efficient LED fixtures and bring each connection up to code, whether the home is early-1900s or mid-century.',
    ],
    commonIntro: 'In College Hill’s large early-1900s and mid-century homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in a College Hill home?', a: 'Yes. We add recessed and LED lighting throughout College Hill’s early-1900s and mid-century homes along Hamilton Avenue, checking the panel and wiring first and keeping the work code-compliant.' }],
  },
  'walnut-hills': {
    intro: 'Much of the indoor lighting work in Walnut Hills is in 19th-century homes and apartment buildings around Peebles Corner with tall ceilings and deep rooms. A lot of them are split into units on aging wiring, so we inspect the circuits and light each apartment on its own.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. The tall ceilings and deep rooms in these buildings often leave the middle dim without added lighting.',
      'Its century-old housing — much of it now split into units — runs on aging wiring, so we inspect the circuits before adding fixtures. In a multi-unit building we can light and switch each apartment cleanly, installing recessed and LED fixtures that meet current code.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and high-ceilinged apartment buildings, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in a Walnut Hills apartment?', a: 'Yes. Many Walnut Hills buildings are split into units, and we add recessed and LED lighting to one apartment at a time, checking the aging wiring first and bringing every connection up to code.' }],
  },
  'east-walnut-hills': {
    intro: 'Stately early-1900s homes around Woodburn Avenue and DeSales Corner account for most indoor lighting jobs in East Walnut Hills. Large rooms and tree-shaded windows keep them dim. The wiring is often original, and we work around the woodwork these houses are known for when adding recessed fixtures.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large rooms and tree-shaded windows in these houses often need added lighting to feel bright.',
      'The big century-old houses here often still carry original wiring, so we inspect the circuits before adding fixtures and work carefully around the original woodwork these homes are known for. We install recessed and LED lighting and bring each connection up to code.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add lighting to a stately East Walnut Hills home without harming the woodwork?', a: 'Yes. We add recessed and LED lighting in the early-1900s homes around Woodburn Avenue, working carefully around original woodwork and bringing the older wiring up to code.' }],
  },
  'avondale': {
    intro: 'Indoor lighting in Avondale usually means early-1900s homes and apartment buildings near the hospitals and the Cincinnati Zoo, with small, dim rooms. Much of the housing is rental, so the wiring takes heavy use. We check those circuits before adding recessed or LED fixtures to a home or unit.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. Densely built older housing here often has small, dim rooms where recessed and added lighting makes a real difference.',
      'A lot of Avondale’s housing is older and much of it is rental, so the wiring takes heavy use; we check circuits before adding fixtures. We install efficient LED lighting and bring each connection up to code, whether it is a single home or a unit in an older building.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you brighten a dim older Avondale home?', a: 'Yes. We add recessed and LED lighting in Avondale’s early-1900s homes and apartments near the hospitals and zoo, checking the older wiring first and keeping every connection code-compliant.' }],
  },
  'hyde-park': {
    intro: 'Hyde Park’s Tudors, colonials and brick foursquares around Hyde Park Square have big rooms and finished basements that often need more light, so recessed and layered indoor lighting is a common request. Decades-old wiring is usually still behind the walls, and we inspect it before adding fixtures.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. The big rooms and finished basements in these houses often need recessed and layered lighting to feel bright.',
      'These older homes frequently still carry decades-old wiring behind the walls, so we inspect the circuits before adding fixtures. We install recessed and efficient LED lighting that suits the period detail of a Tudor or foursquare and bring each connection up to code.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in a large Hyde Park home?', a: 'Yes. We add recessed and LED lighting throughout Hyde Park’s Tudors, colonials, and foursquares around Hyde Park Square, checking the older wiring first and keeping every connection code-compliant.' }],
  },
  'oakley': {
    intro: 'Oakley bungalows from the early 1900s have compact, low-ceilinged rooms, which is exactly where recessed indoor lighting makes the biggest difference. Homes around Oakley Square and Madison Road often run on dated wiring, so we check the circuits and choose LED fixtures that will not overload an older panel.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The compact rooms and low ceilings of a classic bungalow are exactly where recessed lighting makes a space feel open.',
      'The older bungalows that fill much of Oakley were built with dated wiring that is now well past its prime, so we check the circuits before adding fixtures. We install efficient LED lighting that brightens a small room without overloading an older panel and bring each connection up to code.',
    ],
    commonIntro: 'In Oakley’s early-1900s bungalows with smaller, low-ceilinged rooms, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in an Oakley bungalow?', a: 'Yes. We add recessed and LED lighting in Oakley’s early-1900s bungalows and brick homes around Oakley Square, checking the older wiring first and bringing every connection up to code.' }],
  },
  'mount-lookout': {
    intro: 'Walk-out lower levels and shaded rooms are typical in Mount Lookout homes built into the hills near Mount Lookout Square and Ault Park, and they are where indoor lighting work usually starts. The wiring is decades old, so we inspect it before adding recessed and LED fixtures.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. Homes built into the grade often have walk-out lower levels and shaded rooms that benefit from recessed and added lighting.',
      'The older homes here carry decades-old wiring, so we inspect the circuits before adding fixtures or lighting. We install efficient LED lighting throughout — including dim lower levels — and bring each connection up to code.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes with shaded rooms and lower levels, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you light a dim lower level in a Mount Lookout home?', a: 'Yes. We add recessed and LED lighting in the rooms and lower levels of Mount Lookout’s older hilltop homes near Mount Lookout Square, checking the existing wiring first and keeping the work code-compliant.' }],
  },
  'columbia-tusculum': {
    intro: 'Columbia-Tusculum is Cincinnati’s oldest neighborhood, and indoor lighting here mostly means its restored Victorian Painted Ladies near the river. Tall, deep rooms need more light without drowning out the period detail. The original wiring is past its service life, so we inspect it before adding recessed fixtures.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. The tall, deep rooms in these Victorians often need added lighting to feel bright without overpowering the period detail.',
      'Those Victorian and early homes carry original wiring well past its service life, so we inspect the circuits before adding fixtures. We work carefully around restored interiors, installing recessed and LED lighting and bringing each connection up to code.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add lighting to a Painted Lady in Columbia-Tusculum without harming the detail?', a: 'Yes. We add recessed and LED lighting in the neighborhood’s Victorian and Painted Lady homes, working carefully around restored interiors and bringing the original wiring up to code.' }],
  },
  'mount-washington': {
    intro: 'Most homes in Mount Washington along Beechmont Avenue date from the early 1900s to mid-century, so an indoor lighting job often replaces original fixtures in closed-off rooms. Panels and wiring from that era can be dated, which we check before adding recessed or LED circuits.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Houses from that range often have closed-off rooms and original fixtures, so recessed lighting and modern LED fixtures make a real difference.',
      'In homes of that era the wiring and panels may be dated, so we check the existing service before adding lighting circuits. We then install recessed and efficient LED fixtures and bring each connection up to code.',
    ],
    commonIntro: 'In Mount Washington’s early-1900s and mid-century single-family homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you replace dated fixtures with recessed LED lighting in Mount Washington?', a: 'Yes. We swap dated fixtures for recessed and LED lighting throughout Mount Washington’s older and mid-century homes along Beechmont Avenue, checking the panel and wiring first and keeping the work code-compliant.' }],
  },
  'madisonville': {
    intro: 'Recessed lighting is the usual indoor lighting request in Madisonville’s early-1900s homes along Madison Road, where small, closed-off rooms feel darker than they should. Much of the older housing runs on aging wiring. We inspect the circuits first and pick LED fixtures that will not strain an older panel.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses here often have small, closed-off rooms where recessed and layered lighting makes the space feel open.',
      'Much of Madisonville’s older housing runs on aging wiring, so we inspect the circuits before adding fixtures. We install efficient LED lighting that brightens a room without straining an older panel and bring each connection up to code.',
    ],
    commonIntro: 'In Madisonville’s early-1900s homes with smaller, darker rooms, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in an older Madisonville home?', a: 'Yes. We add recessed and LED lighting in Madisonville’s early-1900s homes along Madison Road, checking the aging wiring first and bringing every connection up to code.' }],
  },
  'pleasant-ridge': {
    intro: 'Pleasant Ridge has tree-lined streets of early-1900s homes and brick two-families along Montgomery Road, and indoor lighting there usually means compact rooms with shaded windows. The wiring is decades old, so we check it first. In a two-family, we light and switch each unit separately.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. The compact rooms and tree-shaded windows in these homes often leave interiors dim, which is where recessed lighting helps.',
      'Those older single- and two-family homes carry decades-old wiring, so we check the circuits before adding fixtures. In a two-family we can light and switch each unit cleanly, installing recessed and LED fixtures that meet current code.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and brick two-families, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting to a Pleasant Ridge two-family?', a: 'Yes. We add recessed and LED lighting to the brick two-families throughout Pleasant Ridge one unit at a time, checking the older wiring first and bringing each connection up to code.' }],
  },
  'westwood': {
    intro: 'Westwood is Cincinnati’s largest neighborhood by population, and indoor lighting jobs there range from historic homes near the Westwood Town Hall to early-1900s and mid-century houses along Harrison Avenue. Most share dated wiring and panels, so we check the service before adding recessed or LED circuits.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, older rooms tend to be dim and benefit from recessed and layered lighting.',
      'The common thread across this older housing is dated wiring and panels, so we check the existing service before adding lighting circuits. We then install recessed and efficient LED fixtures and bring each connection up to code, whether the home is historic or mid-century.',
    ],
    commonIntro: 'Across Westwood’s historic, early-1900s, and mid-century homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in a Westwood home?', a: 'Yes. We add recessed and LED lighting throughout Westwood’s historic and mid-century homes along Harrison Avenue, checking the panel and wiring first and keeping every connection code-compliant.' }],
  },
  'norwood': {
    intro: 'Norwood is its own city inside Cincinnati, and indoor lighting there usually means compact, dark rooms in the early-1900s homes and brick two-families from its streetcar and factory days. The wiring is aging, so we check the circuits, then add recessed or LED fixtures one unit at a time.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. The compact rooms of these closely built homes often lean dark, which is where recessed and added lighting helps most.',
      'That tightly packed, century-old housing runs on aging wiring, so we check the circuits before adding fixtures. In a two-family we can light and switch each unit cleanly, installing recessed and LED fixtures and bringing each connection up to code.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and brick two-families, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in a Norwood two-family?', a: 'Yes. We add recessed and LED lighting in the early-1900s homes and brick two-families throughout Norwood, checking the aging wiring first and bringing every connection up to code.' }],
  },
  'blue-ash': {
    intro: 'For Blue Ash homes, indoor lighting usually means swapping dated fixtures in closed-off mid-century rooms for recessed and LED lighting. Even the newer subdivision houses are decades old now, so panels and wiring can be dated. We check the existing service before adding circuits, in homes and businesses alike.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Mid-century homes here often have closed-off rooms and dated fixtures, so recessed lighting and modern LED fixtures open the space up.',
      'Even the newer housing here is now decades old, which means panels and wiring can be dated, so we check the existing service before adding lighting circuits. We install recessed and efficient LED fixtures and bring each connection up to code, in homes and businesses alike.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed LED lighting in a Blue Ash home?', a: 'Yes. We add recessed and LED lighting throughout Blue Ash’s mid-century and newer homes, checking the panel and wiring first and keeping every connection code-compliant.' }],
  },
  'montgomery': {
    intro: 'Montgomery’s housing runs from 19th-century buildings in the historic district to decades-old subdivisions around Montgomery Road, and indoor lighting work changes with the age of the house. Older interiors often need added light. Wiring varies just as widely, so we inspect the circuits before adding recessed or LED fixtures.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The plumbing-era housing here spans a wide range, from century-old structures in the historic core to decades-old subdivisions, and the older interiors often need added lighting to feel bright.',
      'Because the wiring varies from 19th-century systems to dated subdivision panels, we inspect the circuits before adding any fixtures. We install recessed and efficient LED lighting and bring each connection up to code, matching the work to the age of the home.',
    ],
    commonIntro: 'Across Montgomery’s historic-district and established homes, an indoor lighting upgrade usually starts with:',
    localFaqs: [{ q: 'Can you add recessed lighting in a historic-district Montgomery home?', a: 'Yes. We add recessed and LED lighting in Montgomery’s historic-core and established homes around Montgomery Road, checking the wiring first — whether 19th-century or a dated subdivision panel — and bringing every connection up to code.' }],
  },
};
