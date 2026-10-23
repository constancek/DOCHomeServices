export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Sump pump work in Sedamsville is mostly about low ground and old stone. Homes along River Road and the hillside above it date to the late 1800s, with stone-and-block basements that seep, so we size the pump to the water, route the discharge away and add a battery backup.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, sitting between Riverside and Sayler Park, with much of its housing on low ground near River Road and the Ohio River. That position puts basements at real risk when the river runs high or a storm dumps fast, and a working sump pump is the first line of defense.',
      'The homes here date to the late 1800s and early 1900s, with stone-and-block basements that seep through the walls and floor. We size a pump to the water you actually get, route the discharge well away from the foundation, and add a battery backup so the pit stays clear when a storm takes the power out.',
    ],
    commonIntro: 'In Sedamsville’s low-lying riverside homes with old stone basements, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'Does my Sedamsville home need a battery backup pump?', a: 'If you are near the river or have flooded before, yes — the storms that flood Sedamsville basements often cut the power at the same time, and a backup keeps the pit clear through the outage. We can add one the same day.' }],
  },
  'sayler-park': {
    intro: 'Floodplain groundwater keeps sump pumps busy in Sayler Park. In the Victorian and early-1900s frame houses along the river, an undersized pump or a discharge dumped too close to the foundation lets water circle back, so we match the pump to the flow and add a battery backup.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. The riverfront sits in the Ohio River floodplain, so high water and saturated ground push groundwater up under basements in the low-lying homes, and the sump pump is what keeps that water out of the finished space.',
      'It was its own village — originally Home City — before annexation in the early 1900s, and it still reads that way, with rows of Victorian and early-1900s frame houses. Those century-old basements seep through old walls, so we set a pump matched to the flow, check the float and the discharge line, and add a battery backup for the floodplain streets.',
    ],
    commonIntro: 'Between the Ohio River floodplain and the age of Sayler Park’s frame homes, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'Why does my Sayler Park basement still take on water with a pump running?', a: 'Usually the pump is undersized for floodplain groundwater, or the discharge dumps too close to the foundation and the water circles back. We can resize the pump and reroute the line the same day.' }],
  },
  'riverside': {
    intro: 'On the Ohio River bottomland in Riverside, a sump pump matters more than it does up the hill. For the homes along River Road and US-50 we fit a properly sized pump, a backwater valve where it makes sense and a battery backup, usually the same day.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. So many homes sit on low Ohio River bottomland that flooding and high groundwater are a constant backdrop, and the sump pump matters more here than it does up on the hill.',
      'Combine that low ground with older housing and original drain lines, and a single heavy rain can fill a basement fast. We pair a properly sized sump pump with a backwater valve where it makes sense, route the discharge away from the foundation, and add a battery backup so a failed pump during high water does not become a flooded lower level.',
    ],
    commonIntro: 'On Riverside’s low Ohio River bottomland lots, the sump pump problems we are called out for most often are:',
    localFaqs: [{ q: 'My Riverside basement floods when the river is high — will a sump pump fix it?', a: 'A correctly sized pump with a battery backup handles most of it, and pairing it with a backwater valve helps on the lowest River Road lots. We can assess and install the same day.' }],
  },
  'east-price-hill': {
    intro: 'Runoff coming off the bluff is what East Price Hill sump pumps fight. Around Warsaw Avenue and the Incline District, dense early-1900s frame homes and brick two-families have old block walls that seep, so we size the pump to the runoff and route the discharge clear of the next house.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats — the neighborhood the old Price Hill Incline once carried residents up to. The hillside grade means runoff collects against foundations during heavy rain, so basements here rely on a sump pump that can keep up with the water coming off the slope.',
      'The streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing — frame homes and brick two-families built close together. In century-old basements with old block walls, water seeps through fast, and on tight lots a shared problem spreads. We size the pump to the runoff, route the discharge clear of the next house, and add a backup for the finished basements.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes on the bluff, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'Does my East Price Hill home need a sump pump for hillside runoff?', a: 'If your basement takes on water after hard rain, yes — the grade off the bluff sends runoff toward the foundation, and a sump pump in a proper pit moves it out before it reaches the floor. We can install one the same day.' }],
  },
  'west-price-hill': {
    intro: 'Many sump pumps in West Price Hill’s 1920s-to-1950s homes are past the ten years most pumps last. Along Glenway Avenue we find worn pumps, sticking floats and discharge lines that freeze or dump too close to the foundation, and we replace and fix them with a battery backup.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but "newer" here still means a basement that has seen many decades of groundwater.',
      'In homes from that era we often find an original or long-neglected sump pump that has worn out, a float switch that sticks, or a discharge line that freezes or dumps too close to the foundation. We replace the pump with one sized to the home, fix the float and the line, and add a battery backup so a storm outage does not leave the pit full.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, the sump pump problems we are called for most often are:',
    localFaqs: [{ q: 'How old is too old for a sump pump in West Price Hill?', a: 'Most pumps last about ten years, and many in West Price Hill’s 1920s-to-1950s homes are well past that. If yours is over a decade old or cycling oddly, we can test and replace it the same day.' }],
  },
  'lower-price-hill': {
    intro: 'A sump pump in Lower Price Hill has to keep up when Mill Creek and the river run high. The 19th-century Italianate rowhouses around State Avenue have stone-and-brick lower levels that seep, so we set a higher-capacity pump in a proper pit with a battery backup.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. That low valley location means high groundwater and a real risk of basement flooding when Mill Creek and the river run high, so a dependable sump pump is essential here.',
      'It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, built long before modern basements were sealed against water. Those old stone-and-brick lower levels seep, so we set the pump in a proper pit, route the discharge away from the foundation, and add a battery backup so a storm outage in the valley does not ruin a historic lower level.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses down in the Mill Creek valley, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'Why does my Lower Price Hill basement flood even with a sump pump?', a: 'The valley near Mill Creek sits low, so when the creek and river rise the groundwater can outpace an undersized pump. We can fit a higher-capacity pump with a battery backup the same day so it keeps up during high water.' }],
  },
  'over-the-rhine': {
    intro: 'One shared basement under an Over-the-Rhine building often protects several units, so its sump pump matters. Around Findlay Market and Vine Street, 1850s-to-1880s stone and brick basements seep, and we size a pump and battery backup for the whole lower level.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. Basements that old were dug in stone and brick and seep through the walls, so a sump pump is what keeps a lower level dry.',
      'Many of these buildings are now split into apartments and condos, where a single flooded basement or storage level can affect several units at once. We set a pump sized to the building, route the discharge to a proper outlet, and add a battery backup so a storm outage does not leave a shared lower level under water.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'Do you install sump pumps in multi-unit OTR buildings?', a: 'Yes. Many OTR buildings are split into apartments and condos with one shared basement, and we can size a pump and battery backup for the whole lower level, usually the same day.' }],
  },
  'downtown': {
    intro: 'Downtown sump pumps keep below-grade storage, mechanical rooms and parking dry, and a failure can travel fast through a shared building. For condos, lofts and older conversions near the river, we size the pump to the lower level, tie the discharge into building drainage and add a backup.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Below-grade levels here — storage, mechanical rooms, parking — depend on sump pumps to stay dry, and a failure can travel fast through a shared building.',
      'The plumbing ranges from modern systems in towers to original lines in early-1900s buildings turned residential, and the low ground near the river keeps groundwater high. We size the pump to the lower level, route the discharge to the building’s drainage, and add a battery backup so an outage does not flood a finished or occupied space below grade.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'Can you service a sump pump in a downtown high-rise or loft building?', a: 'Yes. We work in towers and converted loft buildings regularly and coordinate access so a pump replacement in a below-grade level does not disrupt the rest of the building. Same-day in most cases.' }],
  },
  'west-end': {
    intro: 'Low ground near the Mill Creek basin pushes groundwater under West End basements, so a working sump pump is what keeps the floor dry. Around TQL Stadium and Linn Street, older brick homes seep, and we set the pump in a proper pit with a battery backup.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. The low ground near the Mill Creek basin raises the risk of basement flooding during heavy rain, so a working sump pump is what keeps water off the lower-level floor here.',
      'It holds historic Italianate rowhouses and brick homes alongside mid-century housing, with newer development now mixed in. The older brick homes have aging basements that seep, so we set the pump in a proper pit, route the discharge clear of the foundation, and add a battery backup so a storm that floods the basin does not also leave the pump dead.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses near the Mill Creek basin, the sump pump problems we are called for most often are:',
    localFaqs: [{ q: 'My West End basement floods in heavy rain — will a sump pump help?', a: 'Yes. The low ground near the Mill Creek basin pushes groundwater up under West End basements, and a properly sized pump with a battery backup moves it out before it reaches the floor. We can install the same day.' }],
  },
  'mount-adams': {
    intro: 'Steep Mount Adams streets send runoff toward foundations, so sump pumps in the 19th-century rowhouses work hard in heavy rain. We size the pump to the runoff, route the discharge so it does not feed the next house downhill and add a backup for finished lower levels.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. The steep terrain sends runoff down toward foundations during heavy rain, so basements here rely on a sump pump to keep the water moving out.',
      'Those century-old rowhouses have old stone-and-block basements that seep, and tight access means it pays to call a crew that knows the hill. We size the pump to the runoff, route the discharge so it does not feed the next house downhill, and add a battery backup for the finished lower levels these homes often have.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'Can you get sump pump equipment to a home on the steep Mount Adams streets?', a: 'Yes. We work the hill regularly and come prepared for the narrow, steep streets and tight parking. We can replace or install a pump and backup the same day.' }],
  },
  'mount-auburn': {
    intro: 'In a grand Mount Auburn home divided into apartments, one sump pump sized to the whole basement protects every unit above it. Those Victorian-era stone basements seep and the hilltop grade sends runoff at them, so we route the discharge well clear and add a battery backup.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions. Those Victorian-era basements were dug in stone and seep through the walls, and the hilltop grade sends runoff toward foundations in heavy rain, so a dependable sump pump matters here.',
      'Many of these large homes are now divided into apartments, where one flooded basement affects several units. We set a pump sized to the lower level, route the discharge well clear of the foundation, and add a battery backup so a storm outage does not leave a shared basement under water.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'Does my divided Mount Auburn home need a sump pump for the shared basement?', a: 'If the lower level takes on water, yes — one pump sized to the whole basement protects every unit above it. We can assess and install for these older subdivided homes the same day.' }],
  },
  'clifton': {
    intro: 'Original sump pumps in Clifton’s large Victorian and early-1900s homes have often worn out, with sticking floats and discharge lines too close to the house. Around Ludlow Avenue and the Gaslight District, many are rentals; we replace the pump and add a battery backup, usually the same day.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Those big, century-old houses have deep old basements that seep, and many are now rentals near campus where a flooded lower level needs a fast fix.',
      'In homes that age, the original sump pump has often worn out, the float sticks, or the discharge line dumps too close to the foundation. We replace the pump with one sized to the home, fix the line and float, and add a battery backup so a storm outage does not leave the pit full in a finished or rented basement.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, the sump pump problems we are called for most often are:',
    localFaqs: [{ q: 'Do you service sump pumps in Clifton student rentals near UC?', a: 'Yes. We work on the older homes and rentals throughout Clifton and the university area, and we are available 7 days a week for failed pumps in finished or rented basements. Same-day in most cases.' }],
  },
  'corryville': {
    intro: 'In Corryville rentals near Short Vine, a failed sump pump often goes unnoticed until the basement floods. These dense early-1900s homes have aging basements that seep, so we fit a pump sized to the basement, route the discharge clear of the next property and add a battery backup.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. The older, densely packed housing has aging basements that seep, and many are now rentals where a failed sump pump goes unnoticed until the lower level floods.',
      'Because units share walls and lower levels, one flooded basement can spread between homes built close together. We set a pump sized to the basement, route the discharge clear of the foundation and the next property, and add a battery backup so a storm outage near campus does not leave a shared pit full.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'Why does my Corryville rental basement keep flooding?', a: 'Often the sump pump is old or undersized and no one has tested it in years. We can replace it with a properly sized pump and add a battery backup the same day so the lower level stays dry.' }],
  },
  'northside': {
    intro: 'On the lower Northside streets near the Mill Creek valley, high groundwater in heavy rain decides whether a sump pump is up to the job. Along Hamilton Avenue we size the pump to the water those century-old basements actually get and add a battery backup.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. The low ground near Mill Creek raises the risk of basement flooding during heavy rain, so a dependable sump pump is the difference between a dry and a flooded lower level here.',
      'Those century-old homes have old basements that seep through the walls and floor. We size the pump to the groundwater you actually get on the lower streets, route the discharge away from the foundation, and add a battery backup so a storm that swells the Mill Creek valley does not also knock out the pump.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'My Northside basement backs up in heavy rain — will a sump pump help?', a: 'Yes. The lower streets near Mill Creek see high groundwater in heavy rain, and a properly sized pump with a battery backup keeps it out of the basement. We can recommend and install a setup the same day.' }],
  },
  'college-hill': {
    intro: 'Hilltop runoff and deep old basements keep sump pumps working in College Hill. Along Hamilton Avenue and Belmont, aged pumps, sticking float switches and short discharge lines are common, so we replace the pump, fix the line and add a backup, usually the same day.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes and mid-century houses. The hilltop grade sends runoff down toward foundations in heavy rain, and the older homes have deep basements that seep, so a working sump pump matters on these streets.',
      'In homes this age, the sump pump has often aged out, the float switch sticks, or the discharge line dumps too close to the house. We replace the pump with one sized to the home, fix the float and line, and add a battery backup so a storm outage does not leave the pit full in a finished lower level.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes, the sump pump problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you replace a sump pump in College Hill?', a: 'College Hill is well within our service area along Hamilton Avenue. We keep plumbers on call 7 days a week and aim to replace or install a pump and backup the same day.' }],
  },
  'walnut-hills': {
    intro: 'Sump pumps in Walnut Hills often protect a basement shared by several apartments. Around Peebles Corner and McMillan Street, century-old stone basements seep and hilltop runoff reaches the foundation, so we size one pump and a battery backup to the whole lower level.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Those century-old basements were dug in stone and seep through the walls, and the hilltop grade sends runoff toward foundations in heavy rain, so a dependable sump pump is what keeps the lower level dry.',
      'Much of the housing is now split into units, where one flooded basement affects several apartments. We set a pump sized to the lower level, route the discharge well clear of the foundation, and add a battery backup so a storm outage does not leave a shared basement under water.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'Do you install sump pumps in the older apartment buildings in Walnut Hills?', a: 'Yes. Many Walnut Hills buildings are split into units over one basement, and we can size a single pump and battery backup to protect the whole lower level. Same-day in most cases.' }],
  },
  'east-walnut-hills': {
    intro: 'Finished lower levels and original woodwork are what an East Walnut Hills sump pump protects. Around Woodburn Avenue and DeSales Corner, pumps in these stately early-1900s homes are often past their service life, so we replace them and add a battery backup for storm outages.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses have deep old basements that seep, and many have finished lower levels and original woodwork worth protecting from water.',
      'In homes that age the sump pump has often aged past its service life, the float sticks, or the discharge line dumps too near the foundation. We replace the pump with one sized to the home, fix the line, and add a battery backup so a storm outage does not flood a finished basement these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'Should I add a battery backup to my East Walnut Hills basement pump?', a: 'If the basement is finished, yes — a storm outage is exactly when the pump is needed, and a backup keeps the pit clear and protects the woodwork and finished space. We can add one the same day.' }],
  },
  'avondale': {
    intro: 'Older Avondale homes and apartment buildings near the hospitals often have a sump pump nobody has checked until the basement floods. We fit a pump sized to the basement, route the discharge clear of the foundation and add a battery backup, usually the same day.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. The older, densely built housing has aging basements that seep, and much of it is rental where a failed sump pump goes unnoticed until the lower level takes on water.',
      'In closely built homes and multi-unit buildings, one flooded basement spreads between properties. We set a pump sized to the basement, route the discharge clear of the foundation, and add a battery backup so a storm outage does not leave a shared lower level full.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'How fast can you replace a failed sump pump in Avondale?', a: 'Avondale is in the central uptown area near the hospitals, so it is a fast reach for us. We are on call 7 days a week and aim to replace or install a pump and backup the same day.' }],
  },
  'hyde-park': {
    intro: 'A sump pump failure can ruin a finished lower level in a large Hyde Park home before anyone notices. Around Hyde Park Square and Erie Avenue, the original pumps in these early-1900s Tudors and foursquares have often worn out, so we replace them and add a battery backup.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. These big older homes have deep basements that seep, and the finished lower levels and original details are exactly what a sump pump failure can ruin before anyone notices.',
      'In homes this age the original pump has often worn out, the float sticks, or the discharge line dumps too close to the foundation. We replace the pump with one sized to the home, fix the line and float, and add a battery backup so a storm outage does not flood a finished basement.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the sump pump problems we are called for most often are:',
    localFaqs: [{ q: 'Does my Hyde Park home need a battery backup for the sump pump?', a: 'If the basement is finished, yes — Hyde Park’s storms are exactly when the power and the pump can both fail, and a backup keeps the pit clear. We can add one the same day.' }],
  },
  'oakley': {
    intro: 'Most sump pumps last about ten years, and many in Oakley’s early-1900s bungalows are older than that. Around Oakley Square and Madison Road we replace worn pumps, fix sticking floats and freezing discharge lines and add a battery backup, usually the same day.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows that fill much of Oakley have aging basements that seep, so a working sump pump is what keeps the lower level dry.',
      'In homes that age the sump pump has often aged past its service life, the float sticks, or the discharge line freezes or dumps too close to the house. We replace the pump with one sized to the home, fix the line, and add a battery backup so a storm outage does not leave the pit full.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'How old is too old for a sump pump in my Oakley bungalow?', a: 'Most pumps last about ten years, and many in Oakley’s early-1900s bungalows are older than that. If yours is over a decade old or cycling oddly, we can test and replace it the same day.' }],
  },
  'mount-lookout': {
    intro: 'Hillside grade puts extra runoff against Mount Lookout foundations, so sump pumps here earn their keep. Around Mount Lookout Square and Ault Park, we size the pump to the runoff, route the discharge so it does not feed back down the slope and add a battery backup.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The hillside grade puts extra runoff against foundations during heavy rain, so basements here rely on a sump pump to move the water out.',
      'Those older homes carry decades-old basements that seep, and a finished lower level is at real risk if the pump quits. We size the pump to the runoff, route the discharge so it does not feed the slope back toward the house, and add a battery backup so a storm outage does not leave the pit full.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'Does my Mount Lookout home need a sump pump for hillside runoff?', a: 'If the basement takes on water after hard rain, yes — the grade around Mount Lookout sends runoff toward foundations, and a pump in a proper pit moves it out. We can install one the same day.' }],
  },
  'columbia-tusculum': {
    intro: 'Near the river in Columbia-Tusculum, groundwater climbs with the Ohio and a sump pump guards the lower levels of Cincinnati’s oldest neighborhood. In the Painted Ladies and older homes we fit a pump and battery backup without disturbing original features, usually the same day.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. The low riverside ground keeps groundwater high, so when the river runs high the risk of basement flooding climbs, and a working sump pump protects the historic lower levels.',
      'Those Victorian and early homes have old basements that seep through stone and brick. We set a pump sized to the water you get near the river, route the discharge away from the foundation, and add a battery backup so a storm that raises the river does not also leave the pit full in a historic home.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'Do you install sump pumps in the historic Victorian homes in Columbia-Tusculum?', a: 'Yes. We work on the neighborhood’s older and Painted Lady homes regularly and set a pump and battery backup that protects the historic lower level without disturbing original features. Same-day in most cases.' }],
  },
  'mount-washington': {
    intro: 'Settled Mount Washington homes along Beechmont Avenue often run a sump pump that has worn out, with a sticking float or a discharge line too close to the foundation. We replace it with a properly sized pump, fix the line and add a battery backup, usually the same day.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Basements of that era seep over time, so a working sump pump is what keeps the lower level dry through heavy rain.',
      'In homes this age the sump pump has often worn out, the float sticks, or the discharge line dumps too close to the foundation. We replace the pump with one sized to the home, fix the line and float, and add a battery backup so a storm outage does not leave the pit full.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes, the sump pump problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you replace a sump pump in Mount Washington?', a: 'Mount Washington is squarely in our service area along Beechmont Avenue. We are on call 7 days a week and aim to replace or install a pump and backup the same day.' }],
  },
  'madisonville': {
    intro: 'Renovated lower levels in older Madisonville homes are what a sump pump failure ruins. Around Madison Road and Whetsel Avenue, pumps in these early-1900s basements have often aged out, so we replace them, fix the discharge line and add a battery backup.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of Madisonville have aging basements that seep, so a dependable sump pump keeps the lower level dry through heavy rain.',
      'In homes that age the sump pump has often aged out, the float sticks, or the discharge line dumps too near the house. We replace the pump with one sized to the home, fix the line, and add a battery backup so a storm outage does not leave the pit full, especially in the renovated lower levels common here.',
    ],
    commonIntro: 'In Madisonville’s older homes, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'I renovated my Madisonville basement — does it need a battery backup?', a: 'A finished lower level is worth protecting, so yes — a storm outage is when the pump is needed most, and a backup keeps the pit clear. We can add one the same day.' }],
  },
  'pleasant-ridge': {
    intro: 'In a Pleasant Ridge brick two-family, one sump pump sized to the shared basement protects both units. Along Montgomery Road, many pumps in these early-1900s homes have worn out or dump too close to the foundation, so we replace the pump, fix the line and add a backup.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those older single- and two-family homes have aging basements that seep, so a working sump pump is what keeps the shared lower level dry.',
      'In two-families, one flooded basement affects both units, and in homes this age the pump has often worn out or the discharge line dumps too close to the foundation. We replace the pump with one sized to the building, fix the line, and add a battery backup so a storm outage does not leave the shared pit full.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'Does my Pleasant Ridge two-family need its own sump pump?', a: 'If the shared basement takes on water, one pump sized to the whole lower level protects both units. We can assess and install a pump and battery backup the same day.' }],
  },
  'westwood': {
    intro: 'Across Westwood, from historic homes near Westwood Town Hall to mid-century streets off Harrison Avenue, the common thread is an aging basement that seeps and a sump pump that has worn out. We replace it, fix the float and discharge line, and add a battery backup.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, the common thread is an aging basement that seeps, so a dependable sump pump keeps the lower level dry.',
      'In homes from these eras the sump pump has often worn out, the float sticks, or the discharge line dumps too close to the foundation. We replace the pump with one sized to the home, fix the line and float, and add a battery backup so a storm outage does not leave the pit full.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'How fast can you replace a sump pump in Westwood?', a: 'Westwood is a large west-side neighborhood well within our service area. We are on call 7 days a week and aim to replace or install a pump and backup the same day along Harrison Avenue and beyond.' }],
  },
  'norwood': {
    intro: 'Norwood’s dense early-1900s homes and brick two-families sit close enough that one flooded basement spreads toward the next, so sump pump discharge matters here. We replace aged-out pumps, route the water clear of the neighboring house and add a battery backup.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing has aging basements that seep, so a working sump pump keeps the lower level dry on these small lots.',
      'On closely built lots, one flooded basement spreads toward the next home, and in homes this age the pump has often aged out or the discharge dumps too near the foundation. We replace the pump with one sized to the home, route the discharge clear of the neighboring house, and add a battery backup so a storm outage does not leave the pit full.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the sump pump problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach Norwood to replace a sump pump?', a: 'Norwood sits right in the middle of our service area, surrounded by Cincinnati, so it is a fast reach. We are on call 7 days a week and aim to replace or install a pump and backup the same day.' }],
  },
  'blue-ash': {
    intro: 'Even the newer Blue Ash homes are decades old now, so many original sump pumps are worn out. With heavy clay soil and high groundwater pushing water under basements, we replace the pump for the home or business, fix the float and discharge line and add a battery backup.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the "newer" housing here is now decades old, so the original sump pumps in many basements are worn out and overdue for replacement.',
      'High groundwater and heavy clay soil are common across the region, and both push water up under basements that an aging pump cannot keep clear. We replace the pump with one sized to the home or business, fix the float and discharge line, and add a battery backup so a storm outage does not leave the pit full.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, the sump pump problems we handle most often are:',
    localFaqs: [{ q: 'How old is too old for a sump pump in my Blue Ash home?', a: 'Most pumps last about ten years, and many in Blue Ash’s mid-century homes and older subdivisions are past that. If yours is over a decade old or cycling oddly, we can test and replace it the same day.' }],
  },
  'montgomery': {
    intro: 'Montgomery basements range from century-old structures in the historic district to decades-old subdivisions, and most rely on a sump pump now past its service life. With clay soil and high groundwater, we replace the pump, fix the float and discharge line and add a backup.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. From century-old structures in the historic core to decades-old subdivisions, the basements here span a wide range — but most rely on a sump pump to stay dry, and many of those pumps are now past their service life.',
      'High groundwater and heavy clay soil are common across the region, pushing water up under basements an aging pump cannot keep clear. We replace the pump with one sized to the home, fix the float and discharge line, and add a battery backup so a storm outage does not leave the pit full in a finished lower level.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, the sump pump problems we see most often are:',
    localFaqs: [{ q: 'Does my Montgomery home need a battery backup for the sump pump?', a: 'If the basement is finished or you have flooded before, yes — a storm outage is when the pump is needed most, and a backup keeps the pit clear. We can add one the same day.' }],
  },
};
