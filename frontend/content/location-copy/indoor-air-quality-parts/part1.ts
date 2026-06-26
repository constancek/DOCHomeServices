export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Dust you cannot keep up with, allergy flare-ups indoors, or bone-dry air every winter in Sedamsville? We test your indoor air and install whole-home filtration and humidifiers for homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with housing that climbs the hillside above River Road and dates to the late 1800s and early 1900s. Homes this old often run on aging ductwork and uneven ventilation that lets dust and allergens build up, which is why we start with an air quality test rather than guessing.',
      'Down by the Ohio River, the humid summers here feed dust mites and mold while the closed-up winters dry the air out. A whole-home filter clears the allergens, and an HVAC-integrated humidifier or dehumidifier holds a steady, comfortable level through both seasons.',
    ],
    commonIntro: 'In Sedamsville’s century-old riverside homes with old ductwork and humid summers, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why is the air in my old Sedamsville home so dusty?', a: 'Century-old Sedamsville homes often have aging ductwork and weak ventilation that let dust and allergens circulate. We test the air first, then fit a whole-home filter or purifier that actually targets what we find.' }],
  },
  'sayler-park': {
    intro: 'Stuffy summers, musty smells, or dry winter air in your Sayler Park home? We test the air and install whole-home filtration, humidifiers, and dehumidifiers for the riverfront streets and the homes up the hill. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside, with tree-lined streets and rows of Victorian and early-1900s frame houses from its days as the village of Home City. Those century-old frame homes were never built with modern ventilation, so we test the air before recommending anything.',
      'Sitting in the Ohio River floodplain, Sayler Park draws long stretches of heavy summer humidity that feed mold and dust mites in lower levels, while the same homes close up tight and turn dry in winter. A dehumidifier paired with a whole-home humidifier keeps the indoor air at a steady, comfortable level year-round.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame homes near the floodplain, the air quality issues we address most often are:',
    localFaqs: [{ q: 'My Sayler Park basement smells musty in summer — what causes that?', a: 'Sayler Park sits in the Ohio River floodplain, where high summer humidity feeds mold and mustiness in lower levels. We test humidity and air quality first, then size a dehumidifier and filtration to the home.' }],
  },
  'riverside': {
    intro: 'Damp, musty air in summer or dry air in winter in your Riverside home? We test indoor air and install whole-home filtration, dehumidifiers, and humidifiers for the homes along River Road. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati along River Road and US-50, tucked between Sedamsville and Sayler Park, with the hillside on one side and the Ohio River on the other. Many homes here sit on low Ohio River bottomland, where high groundwater and humidity keep basements and lower levels damp, so we start with an air and humidity test.',
      'Older housing along this strip means original ductwork and little built-in ventilation, which lets dust and allergens linger. A whole-home dehumidifier controls the river-valley moisture that feeds mold and dust mites, and added filtration keeps the air cleaner for homes close to a busy road and the river.',
    ],
    commonIntro: 'On Riverside’s low riverfront lots with older ductwork and high humidity, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why does my Riverside home feel so humid and musty?', a: 'Riverside sits on low Ohio River bottomland where groundwater and humidity stay high, especially in summer. We test the moisture level first, then size a dehumidifier and filtration to keep the air dry and clean.' }],
  },
  'east-price-hill': {
    intro: 'Dust, allergy symptoms, or dry winter air in your East Price Hill home? We test the air and install whole-home filtration and humidifiers for the dense streets around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, with streets around Warsaw Avenue and the Incline District packed with dense early-1900s housing — two- and three-story frame homes and brick two-families built close together. That age and density mean old ductwork and shared walls, so we test the air before recommending filtration.',
      'In tightly built two-families, dust and allergens move easily between rooms and units, and the closed-up winters dry the air out across the hilltop. A whole-home filter cuts the dust and allergens, while an HVAC-integrated humidifier holds comfortable moisture through the cold months.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Can you improve the air in an older two-family home in East Price Hill?', a: 'Yes. We work on the multi-unit and two-family homes around Warsaw Avenue often. We test the air, then fit filtration and humidity control that suits a shared, century-old building.' }],
  },
  'west-price-hill': {
    intro: 'Allergies acting up indoors or dry air every winter in your West Price Hill home? We test the air and install whole-home filtration and humidifiers for the neighborhoods along Glenway Avenue. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. The forced-air systems in these mid-century houses are decades old, and the ductwork collects dust over time, so we test the air before adding filtration.',
      'Homes from that era usually have basic furnace filters that miss fine dust and allergens, and they dry out fast in winter once the heat runs. A higher-grade whole-home filter or purifier handles the allergens, and an integrated humidifier keeps the air from getting uncomfortably dry across the cold season.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why does my West Price Hill home get so dry in winter?', a: 'The mid-century forced-air systems common around Glenway Avenue dry the air out once the heat runs all season. We test the humidity first, then fit a whole-home humidifier sized to your home.' }],
  },
  'lower-price-hill': {
    intro: 'Dust, musty air, or dry winter air in your Lower Price Hill home? We test indoor air and install whole-home filtration, dehumidifiers, and humidifiers for the historic streets around State Avenue. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, built long before modern ventilation, so we always test the air first.',
      'Sitting low in the valley near the creek and the river, these rowhouses see high humidity that feeds mold and mustiness in summer, while families near the industrial bottoms often want cleaner indoor air year-round. A dehumidifier controls the valley moisture and a whole-home filter keeps the air cleaner without disturbing the historic interiors.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century valley rowhouses with old ventilation, the air quality issues we address most often are:',
    localFaqs: [{ q: 'How do you improve air quality in a historic Lower Price Hill rowhouse?', a: 'These 19th-century rowhouses around State Avenue were built before modern ventilation, so we test the air first, then fit filtration and humidity control that respects original features.' }],
  },
  'over-the-rhine': {
    intro: 'Dust, allergens, or dry winter air in your Over-the-Rhine home or condo? We test the air and install whole-home filtration and humidifiers for the historic blocks around Findlay Market and Vine Street. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. Many are now split into apartments and condos with retrofitted HVAC, so we test the air before recommending anything.',
      'Buildings this old run on a patchwork of ductwork and shared systems, where dust and allergens move between units and ventilation is uneven. A whole-home filter or purifier cleans the air per unit, and an integrated humidifier holds comfortable moisture through the dry, closed-up winters in these brick buildings.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted units, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Can you improve the air in an OTR condo or converted apartment?', a: 'Yes. Over-the-Rhine is full of historic buildings split into units with retrofitted HVAC. We test the air in your unit, then fit filtration or humidity control sized to the space.' }],
  },
  'downtown': {
    intro: 'Stuffy air, dust, or dry winter air in your downtown condo or loft? We test indoor air and install filtration and humidifiers for the central business district’s condos and converted buildings. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Air quality here ranges from sealed towers with recirculated air to older buildings turned residential, so we test before recommending a fix.',
      'In sealed condos and lofts, recirculated air can build up dust, odors, and VOCs, while older converted buildings often have uneven ventilation. A whole-home filter or purifier cleans the air, and an integrated humidifier offsets the dry air that comes with running heat in a closed-up downtown unit all winter.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older conversions with recirculated air, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why does the air in my downtown condo feel stale?', a: 'Sealed downtown condos and lofts recirculate air, which lets dust, odors, and VOCs build up. We test the air first, then fit filtration or a purifier suited to a high-rise or converted building.' }],
  },
  'west-end': {
    intro: 'Dust, allergens, or dry winter air in your West End home? We test the air and install whole-home filtration and humidifiers for the neighborhood around TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer development. The older brick homes carry decades-old ductwork and little built-in ventilation, so we test the air before recommending filtration.',
      'The low ground near the Mill Creek basin keeps summer humidity high, feeding mold and dust mites in lower levels, while the same homes dry out once the heat runs in winter. A dehumidifier handles the summer moisture and a whole-home humidifier balances the dry season, with filtration in between for the dust.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes near Mill Creek, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why does my West End basement get humid in summer?', a: 'The West End sits on low ground near the Mill Creek basin, where summer humidity stays high and feeds mold in lower levels. We test the moisture first, then size a dehumidifier and filtration to the home.' }],
  },
  'mount-adams': {
    intro: 'Dust, allergens, or dry winter air in your Mount Adams home? We test indoor air and install whole-home filtration and humidifiers for the steep, narrow streets of the hilltop. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. The age and density mean old ductwork and shared walls, so we test the air before recommending filtration.',
      'In century-old rowhouses built close together, dust and allergens move easily and ventilation is limited, and the closed-up hilltop winters dry the air out. A whole-home filter or purifier cuts the dust, and an integrated humidifier keeps comfortable moisture through the cold months.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses with old ductwork, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Can you install air filtration in a tight Mount Adams rowhouse?', a: 'Yes. We work the hill regularly and fit filtration and humidity control to tight, century-old rowhouses. We test the air first, then recommend a system that suits the space.' }],
  },
  'mount-auburn': {
    intro: 'Dust, allergy flare-ups, or dry winter air in your Mount Auburn home? We test the air and install whole-home filtration and humidifiers for one of Cincinnati’s oldest hilltop neighborhoods. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. These Victorian-era homes carry some of the oldest ductwork in the city, so we test the air before recommending anything.',
      'In large houses split into units, dust and allergens circulate through aging shared systems, and the closed-up winters leave the air dry. A whole-home filter or purifier cleans the air per unit, and an integrated humidifier holds comfortable moisture through the cold season.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the air quality issues we address most often are:',
    localFaqs: [{ q: 'How do you improve air in a subdivided Mount Auburn home?', a: 'Many Mount Auburn homes are grand Victorian houses split into apartments with aging shared HVAC. We test the air in your unit, then fit filtration or humidity control sized to it.' }],
  },
  'clifton': {
    intro: 'Allergies acting up indoors or dry winter air in your Clifton home? We test the air and install whole-home filtration and humidifiers for the Gaslight District and the homes around Ludlow Avenue. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Those big, century-old houses run on aging ductwork, and many are now rentals near campus, so we test the air before recommending filtration.',
      'The mature trees that shade Clifton’s streets drive heavy pollen indoors, which builds up in older systems and aggravates allergies, and the same homes dry out once the heat runs all winter. A whole-home filter or purifier handles the pollen and dust, and an integrated humidifier balances the dry season.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes under mature trees, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why do my allergies act up indoors in Clifton?', a: 'Clifton’s mature tree canopy drives heavy pollen that older ductwork pulls indoors and recirculates. We test the air first, then fit a whole-home filter or purifier that targets the allergens.' }],
  },
  'corryville': {
    intro: 'Dust, stale air, or dry winter air in your Corryville home or rental? We test indoor air and install filtration and humidifiers for the Short Vine area near UC. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. With so much older, densely packed housing turned into rentals, ductwork takes heavy use and ventilation is uneven, so we test the air before recommending a fix.',
      'In tightly built homes and apartments that share walls and systems, dust, odors, and allergens move easily between units, and the closed-up winters dry the air out. A whole-home filter or purifier cleans the air, and an integrated humidifier keeps comfortable moisture through the cold months.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Can you improve the air in a Corryville rental near UC?', a: 'Yes. We work on the older homes and rentals around Short Vine often. We test the air, then fit filtration or humidity control that suits a dense, shared building.' }],
  },
  'northside': {
    intro: 'Dust, musty air, or dry winter air in your Northside home? We test indoor air and install whole-home filtration, dehumidifiers, and humidifiers for the homes around Hamilton Avenue and the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. The age of the housing means original ductwork and limited ventilation, so we test the air before recommending filtration.',
      'The low ground near Mill Creek keeps summer humidity high, feeding mold and dust mites in lower levels, while the same homes dry out once winter heat runs. A dehumidifier controls the valley moisture, a whole-home humidifier balances the dry season, and filtration handles the dust in between.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why does my Northside basement feel damp in summer?', a: 'Northside’s lower streets sit near the Mill Creek valley, where summer humidity stays high and feeds mold in basements. We test the moisture first, then size a dehumidifier and filtration to the home.' }],
  },
  'college-hill': {
    intro: 'Dust, allergy symptoms, or dry winter air in your College Hill home? We test the air and install whole-home filtration and humidifiers for the homes along Hamilton Avenue and Belmont. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. The forced-air systems in homes this age are decades old and the ductwork collects dust over time, so we test the air before adding filtration.',
      'Homes from that range usually have basic furnace filters that miss fine dust and allergens, and they dry out fast once winter heat runs. A higher-grade whole-home filter or purifier handles the dust and allergens, and an integrated humidifier keeps the air comfortable through the cold season.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Will a better filter help with dust in my College Hill home?', a: 'Often, yes. Older and mid-century homes around Hamilton Avenue usually run basic filters that miss fine dust. We test the air first, then fit a higher-grade whole-home filter to match.' }],
  },
  'walnut-hills': {
    intro: 'Dust, allergens, or dry winter air in your Walnut Hills home or apartment? We test the air and install whole-home filtration and humidifiers for the homes around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of it is now split into units running on aging ductwork, so we test the air before recommending filtration.',
      'In century-old buildings divided into apartments, dust and allergens move through shared systems and ventilation is uneven, and the closed-up winters dry the air out. A whole-home filter or purifier cleans the air per unit, and an integrated humidifier holds comfortable moisture through the cold months.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Can you improve the air in a Walnut Hills apartment building?', a: 'Yes. Many Walnut Hills buildings are century-old homes split into units with shared HVAC. We test the air in your unit, then fit filtration or humidity control sized to it.' }],
  },
  'east-walnut-hills': {
    intro: 'Dust, allergy flare-ups, or dry winter air in your East Walnut Hills home? We test the air and install whole-home filtration and humidifiers for the homes around Woodburn Avenue and DeSales Corner. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often still carry original ductwork, so we test the air before recommending filtration.',
      'In big older homes shaded by mature trees, pollen and dust build up through aging systems, and the closed-up winters leave the air dry. A whole-home filter or purifier handles the dust and allergens, and an integrated humidifier keeps comfortable moisture without disturbing the original woodwork these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes under mature trees, the air quality issues we address most often are:',
    localFaqs: [{ q: 'How do you improve air quality in a large older East Walnut Hills home?', a: 'These stately early-1900s homes around Woodburn Avenue often run on original ductwork that recirculates dust and pollen. We test the air first, then fit filtration and humidity control to match.' }],
  },
  'avondale': {
    intro: 'Dust, stale air, or dry winter air in your Avondale home? We test indoor air and install whole-home filtration and humidifiers for the neighborhood around the hospitals and the zoo. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of the housing is older and densely built, much of it rental running on aging ductwork, so we test the air before recommending a fix.',
      'In densely built older homes and apartments, dust and allergens move through aging shared systems and ventilation is uneven, and the closed-up winters dry the air out. A whole-home filter or purifier cleans the air, and an integrated humidifier holds comfortable moisture through the cold months.',
    ],
    commonIntro: 'In Avondale’s older, densely built homes and apartments, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Can you improve the air in an older Avondale rental?', a: 'Yes. Much of Avondale’s housing is older and rental, running on aging HVAC. We test the air first, then fit filtration or humidity control that suits a dense, older building.' }],
  },
  'hyde-park': {
    intro: 'Dust, allergy symptoms, or dry winter air in your Hyde Park home? We test the air and install whole-home filtration and humidifiers for the homes around Hyde Park Square and Erie Avenue. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. These big older homes run on aging ductwork that collects dust over decades, so we test the air before recommending filtration.',
      'The mature trees that shade Hyde Park’s streets drive heavy pollen indoors through older systems, and the same large homes dry out once the heat runs all winter. A whole-home filter or purifier handles the pollen and dust, and an integrated humidifier keeps the air comfortable across the cold season.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes under mature trees, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why is there so much dust in my Hyde Park home?', a: 'Hyde Park’s large early-1900s homes run on aging ductwork that collects and recirculates dust, with mature-tree pollen adding to it. We test the air first, then fit whole-home filtration to match.' }],
  },
  'oakley': {
    intro: 'Dust, allergens, or dry winter air in your Oakley home? We test the air and install whole-home filtration and humidifiers for the homes around Oakley Square and Madison Road. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows that fill much of Oakley run on decades-old ductwork, so we test the air before recommending filtration.',
      'In century-old bungalows with limited built-in ventilation, dust and allergens build up over time, and the closed-up winters dry the air out. A whole-home filter or purifier cleans the air, and an integrated humidifier keeps comfortable moisture through the cold months.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the air quality issues we address most often are:',
    localFaqs: [{ q: 'How do you improve air quality in an Oakley bungalow?', a: 'Oakley’s early-1900s bungalows often have aging ductwork and limited ventilation that let dust build up. We test the air first, then fit a whole-home filter or humidity control to suit the home.' }],
  },
  'mount-lookout': {
    intro: 'Dust, allergy flare-ups, or dry winter air in your Mount Lookout home? We test the air and install whole-home filtration and humidifiers for the homes around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes carry decades-old ductwork that collects dust over time, so we test the air before recommending filtration.',
      'Sitting near the green of Ault Park, these homes draw heavy seasonal pollen indoors through aging systems, and the closed-up winters leave the air dry. A whole-home filter or purifier handles the pollen and dust, and an integrated humidifier holds comfortable moisture through the cold season.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes near Ault Park, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Why does pollen get into my Mount Lookout home?', a: 'Mount Lookout sits near the green of Ault Park, so seasonal pollen runs high and aging ductwork pulls it indoors. We test the air first, then fit a whole-home filter or purifier that targets it.' }],
  },
  'columbia-tusculum': {
    intro: 'Dust, musty air, or dry winter air in your Columbia-Tusculum home? We test indoor air and install whole-home filtration, dehumidifiers, and humidifiers near the river. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. The age of those Victorian and early homes means original ductwork and little built-in ventilation, so we test the air before recommending anything.',
      'The low riverside ground keeps summer humidity high, feeding mold and dust mites in lower levels, while the same homes dry out once winter heat runs. A dehumidifier controls the river-valley moisture and a whole-home humidifier balances the dry season, with filtration in between for the dust — all without disturbing historic interiors.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the air quality issues we address most often are:',
    localFaqs: [{ q: 'How do you control humidity in a historic Columbia-Tusculum home?', a: 'These Victorian homes sit on low riverside ground where summer humidity stays high. We test the moisture first, then fit a dehumidifier and filtration that respect the home’s historic interiors.' }],
  },
  'mount-washington': {
    intro: 'Dust, allergens, or dry winter air in your Mount Washington home? We test the air and install whole-home filtration and humidifiers for the homes along Beechmont Avenue. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. The forced-air systems in homes that age are decades old and the ductwork collects dust over time, so we test the air before adding filtration.',
      'Homes from that range usually run basic furnace filters that miss fine dust and allergens, and they dry out fast once winter heat runs. A higher-grade whole-home filter or purifier handles the dust, and an integrated humidifier keeps the air comfortable across the cold season.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Will better filtration help the dust in my Mount Washington home?', a: 'Often, yes. The older and mid-century homes along Beechmont Avenue usually run basic filters that miss fine dust. We test the air first, then fit a higher-grade whole-home filter.' }],
  },
  'madisonville': {
    intro: 'Dust, allergy symptoms, or dry winter air in your Madisonville home? We test the air and install whole-home filtration and humidifiers for the homes around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of Madisonville run on aging ductwork that collects dust over time, so we test the air before recommending filtration.',
      'In century-old homes with limited built-in ventilation, dust and allergens build up, and the closed-up winters dry the air out. A whole-home filter or purifier cleans the air, and an integrated humidifier keeps comfortable moisture through the cold months.',
    ],
    commonIntro: 'In Madisonville’s older homes along Madison Road, the air quality issues we address most often are:',
    localFaqs: [{ q: 'How do you improve air quality in an older Madisonville home?', a: 'Madisonville’s older homes along Madison Road often run on aging ductwork and limited ventilation that let dust build up. We test the air first, then fit filtration or humidity control to suit it.' }],
  },
  'pleasant-ridge': {
    intro: 'Dust, allergens, or dry winter air in your Pleasant Ridge home? We test the air and install whole-home filtration and humidifiers for the homes along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those older single- and two-family homes carry decades-old ductwork, so we test the air before recommending filtration.',
      'In tightly built two-families, dust and allergens move easily between units, and the mature trees that line the streets drive pollen indoors, while the closed-up winters leave the air dry. A whole-home filter or purifier handles the dust and pollen, and an integrated humidifier balances the dry season.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families under mature trees, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Can you improve the air in a Pleasant Ridge two-family home?', a: 'Yes. We work on the brick two-families throughout Pleasant Ridge. We test the air, then fit filtration or humidity control that suits a shared, century-old building.' }],
  },
  'westwood': {
    intro: 'Dust, allergy symptoms, or dry winter air in your Westwood home? We test the air and install whole-home filtration and humidifiers across Cincinnati’s largest neighborhood along Harrison Avenue. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, the common thread is aging ductwork that collects dust, so we test the air before recommending filtration.',
      'Whether a century-old home or a mid-century house, most run basic furnace filters that miss fine dust and allergens, and they dry out once winter heat runs. A higher-grade whole-home filter or purifier handles the dust, and an integrated humidifier keeps the air comfortable across the cold season.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Will a better filter help with dust in my Westwood home?', a: 'Often, yes. Westwood’s older and mid-century homes along Harrison Avenue usually run basic filters that miss fine dust. We test the air first, then fit a higher-grade whole-home filter.' }],
  },
  'norwood': {
    intro: 'Dust, allergens, or dry winter air in your Norwood home? We test the air and install whole-home filtration and humidifiers for the homes around Surrey Square and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing runs on aging ductwork and limited ventilation, so we test the air before recommending filtration.',
      'In closely built homes and two-families on small lots, dust and allergens move easily and families often want cleaner indoor air, while the closed-up winters dry the air out. A whole-home filter or purifier cleans the air, and an integrated humidifier holds comfortable moisture through the cold months.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the air quality issues we address most often are:',
    localFaqs: [{ q: 'How do you improve air quality in a dense Norwood neighborhood?', a: 'Norwood’s tightly packed early-1900s homes run on aging ductwork and limited ventilation that let dust build up. We test the air first, then fit filtration or humidity control to suit the home.' }],
  },
  'blue-ash': {
    intro: 'Dust, stale air, or dry winter air in your Blue Ash home? We test indoor air and install whole-home filtration, humidifiers, and dehumidifiers across this northeast-side city. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, and the ductwork collects dust over time, so we test the air before recommending filtration.',
      'Homes across that range usually run basic furnace filters that miss fine dust and allergens, and they dry out once winter heat runs. A higher-grade whole-home filter or purifier handles the dust, and an integrated humidifier keeps the air comfortable across the cold season.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, the air quality issues we address most often are:',
    localFaqs: [{ q: 'Will better filtration help the dust in my Blue Ash home?', a: 'Often, yes. Even Blue Ash’s newer homes are now decades old and usually run basic filters that miss fine dust. We test the air first, then fit a higher-grade whole-home filter.' }],
  },
  'montgomery': {
    intro: 'Dust, allergens, or dry winter air in your Montgomery home? We test the air and install whole-home filtration and humidifiers for homes around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The housing spans from century-old structures in the historic core to decades-old subdivisions, all running on ductwork that collects dust over time, so we test the air before recommending filtration.',
      'Whether a 19th-century building or a newer subdivision home, most run basic furnace filters that miss fine dust and allergens, and they dry out once winter heat runs. A higher-grade whole-home filter or purifier handles the dust, and an integrated humidifier keeps the air comfortable across the cold season.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, the air quality issues we address most often are:',
    localFaqs: [{ q: 'How do you improve air quality across Montgomery’s range of homes?', a: 'Montgomery spans 19th-century buildings in the historic core to newer subdivisions, all running ductwork that collects dust. We test the air first, then fit filtration or humidity control to suit the home.' }],
  },
};
