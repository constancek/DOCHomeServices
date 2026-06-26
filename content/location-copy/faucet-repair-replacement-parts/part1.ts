export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Faucet dripping or barely trickling in Sedamsville? We repair and replace kitchen and bathroom faucets for homes along River Road and the hillside above it, most the same day. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, where much of the housing climbs the hillside above River Road and dates to the late 1800s and early 1900s. The faucets in these homes are often original or long overdue for replacement, and the corroded galvanized lines feeding them show up as weak pressure at the tap.',
      'The region’s hard water is rough on fixtures here, leaving mineral buildup that clogs aerators, stiffens handles, and wears out cartridges well before their time. We clear the buildup, swap worn parts, or replace the fixture, and can point you toward a softener when the problem keeps returning.',
    ],
    commonIntro: 'In Sedamsville’s century-old homes with hard water and aging fixtures, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in older Sedamsville homes wear out so fast?', a: 'Hard water and the corroded old supply lines common in Sedamsville’s century-old homes clog aerators and wear cartridges quickly. We clear the buildup or replace the fixture, usually the same day.' }],
  },
  'sayler-park': {
    intro: 'A kitchen faucet that drips all night or barely fills the sink in Sayler Park? We repair and replace faucets from the riverfront streets to the homes up the hill, most the same day. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, a former village called Home City annexed in the early 1900s and still lined with Victorian and early-1900s frame houses. The faucets in those century-old homes are frequently original, and the worn galvanized supply lines behind the wall drag the pressure down at the tap.',
      'Hard water across the west side leaves a steady crust of mineral buildup on aerators and cartridges here, which is why a faucet starts spraying sideways or sticking in place. Upgrading a tired old fixture for a modern one also cuts the water it wastes, and we can handle the swap or repair in a single visit.',
    ],
    commonIntro: 'In Sayler Park’s Victorian and early-1900s frame homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can low pressure at a Sayler Park faucet be fixed?', a: 'Often yes. In Sayler Park’s century-old frame homes, low pressure usually traces to a clogged aerator or corroded supply line, both of which we can clear or replace the same day.' }],
  },
  'riverside': {
    intro: 'Faucet dripping or running weak in Riverside? We repair and replace kitchen and bath faucets for the homes strung along River Road, most the same day. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road between Sedamsville and Sayler Park, one of the oldest riverfront communities on the west side. Its older homes still carry original supply lines, and corrosion in those lines is a common reason a faucet here trickles instead of flows.',
      'Hard water leaves mineral buildup that clogs aerators and chews through cartridges faster than most homeowners expect, so a faucet that worked fine last year starts dripping or sticking. We clear the scale, replace worn internals, or swap in a new fixture, and can recommend a softener when the buildup keeps coming back.',
    ],
    commonIntro: 'In Riverside’s older River Road homes with hard water and aging supply lines, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why does my Riverside faucet keep clogging up?', a: 'Hard water leaves mineral buildup that blocks the aerator and wears the cartridge in Riverside’s older River Road homes. We clean or replace the parts, and can fit a new fixture the same day.' }],
  },
  'east-price-hill': {
    intro: 'Stiff old faucet or a drip that will not quit in East Price Hill? We repair and replace kitchen and bath faucets in the homes around Warsaw Avenue and the Incline District, most the same day. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the river flats, packed with dense early-1900s housing — two- and three-story frame homes and brick two-families built close together. The faucets in these century-old homes and two-families are often original or outdated, and the aging galvanized lines feeding them leave the pressure low at the tap.',
      'Much of this housing is rental, so the fixtures take heavy daily use and the hard water common across the west side wears cartridges and clogs aerators fast. We repair worn faucets in a single unit or replace dated ones with modern fixtures that use less water, and we can do it without disturbing the rest of the building.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Do you replace faucets in the older two-family homes around Warsaw Avenue?', a: 'Yes. We repair and replace faucets in the two-family and multi-unit homes that fill East Price Hill, and can work on one unit’s fixture without shutting the building down. Same-day in most cases.' }],
  },
  'west-price-hill': {
    intro: 'Dripping faucet or a tired fixture you want upgraded in West Price Hill? We repair and replace kitchen and bath faucets along Glenway Avenue, most the same day. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. The faucets in mid-century houses like these are often well past their prime, and the original galvanized supply lines slowly closing up with corrosion show up as weak pressure at the sink.',
      'Hard water across the area leaves mineral buildup that clogs aerators and wears out cartridges faster than the fixtures were built to last. Swapping a worn mid-century faucet for a modern one improves both the look and the water it uses, and we can handle the repair or replacement in one visit.',
    ],
    commonIntro: 'In West Price Hill’s mid-century single-family homes with hard water and aging supply lines, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Is it worth replacing an old faucet in a West Price Hill home?', a: 'Usually yes. The mid-century faucets common in West Price Hill homes wear out from hard water and a new fixture uses less water and runs cleaner. We can do the swap the same day.' }],
  },
  'lower-price-hill': {
    intro: 'Faucet dripping or barely flowing in Lower Price Hill? We repair and replace kitchen and bath faucets in the historic homes around State Avenue, most the same day. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses. The faucets in these mid-1800s rowhouses are often original, fed by old galvanized lines that corrode and leave the pressure thin at the tap.',
      'Hard water is rough on those aging fixtures, leaving mineral buildup that clogs aerators and wears cartridges well before their time. We clear the buildup, replace worn parts, or fit a new faucet, taking care not to disturb the original features these historic homes are known for.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses with hard water and original supply lines, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can you replace a faucet in an old Lower Price Hill rowhouse without damaging the original fittings?', a: 'Yes. We work on the 19th-century rowhouses around State Avenue regularly and repair or replace faucets carefully around aging galvanized lines and original features. Same-day in most cases.' }],
  },
  'over-the-rhine': {
    intro: 'A faucet that drips through the night or sticks when you turn it in Over-the-Rhine? We repair and replace kitchen and bath faucets in the historic buildings around Findlay Market and Vine Street, most the same day. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick rowhouses and tenements built between the 1850s and 1880s, many now split into apartments and condos. The faucets in these old buildings run on a patchwork of original and retrofitted lines, where corroded galvanized risers leave the pressure low at the tap.',
      'With so much dense, historic housing turned into rentals, worn fixtures are common and the hard water clogs aerators and wears cartridges fast. We can repair or replace a faucet in one unit without shutting water to the rest of the building, and swap a dated fixture for a modern one that uses less water.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can you replace a faucet in one OTR apartment without affecting the rest of the building?', a: 'Yes. OTR’s historic buildings are full of shared lines, but we can isolate one unit, repair or replace the faucet, and leave the rest of the building’s water on. Usually the same day.' }],
  },
  'downtown': {
    intro: 'Faucet dripping in your downtown condo or loft? We repair and replace kitchen and bath faucets across the central business district, most the same day. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures turned residential between the river and Over-the-Rhine. The faucets here range from modern fixtures in the towers to original or retrofitted ones in early-1900s buildings, where old lines leave the pressure uneven at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges in fixtures of every age, so a faucet starts dripping or spraying off to one side. We coordinate access and shutoffs in towers and loft conversions so a faucet repair or replacement on one floor does not disrupt the rest of the building.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older conversions with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can you replace a faucet in a downtown high-rise condo?', a: 'Yes. We work in downtown towers and loft conversions regularly and coordinate access and shutoffs so a faucet swap on one floor does not disturb the rest of the building. Same-day in most cases.' }],
  },
  'west-end': {
    intro: 'Dripping faucet or a worn fixture you want replaced in the West End? We repair and replace kitchen and bath faucets near TQL Stadium and Linn Street, most the same day. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing. The faucets in those older brick homes are often original, fed by decades-old galvanized lines that corrode and leave the pressure low at the tap.',
      'Hard water across the area leaves mineral buildup that clogs aerators and wears out cartridges faster than the fixtures were built to last. We clear the buildup, replace worn parts, or swap in a modern faucet that uses less water, and being right next to downtown we can usually get there the same day.',
    ],
    commonIntro: 'In the West End’s historic rowhouses and older brick homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in older West End homes lose pressure?', a: 'In the West End’s historic brick homes, low pressure usually comes from a clogged aerator or a corroded old galvanized supply line. We can clear or replace either, often the same day.' }],
  },
  'mount-adams': {
    intro: 'A faucet that drips or sticks in Mount Adams? We repair and replace kitchen and bath faucets in the rowhouses and townhomes on the hill, most the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. The faucets in those century-old rowhouses are often original, and the old supply lines behind the wall corrode and leave the pressure thin at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges fast on the hill, so a faucet starts dripping or stiffening. We come prepared for the narrow streets and tight parking that make Mount Adams unique, and can repair a worn fixture or replace it with a modern one in a single visit.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can you replace a faucet in a Mount Adams rowhouse on the steep streets?', a: 'Yes. We work the hill regularly and come ready for the narrow, steep streets, repairing or replacing faucets in the century-old rowhouses. Same-day in most cases.' }],
  },
  'mount-auburn': {
    intro: 'Faucet dripping or barely flowing in Mount Auburn? We repair and replace kitchen and bath faucets in one of Cincinnati’s oldest hilltop neighborhoods, most the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. The faucets in those Victorian-era homes carry some of the oldest plumbing in the city, where corroded galvanized lines leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges fast, and in subdivided houses the fixtures take heavy use. We can repair or replace a faucet in one unit without shutting water to the rest, and swap a dated fixture for a modern one that uses less water.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in Mount Auburn’s old homes wear out so fast?', a: 'Hard water and the original supply lines common in Mount Auburn’s Victorian-era homes clog aerators and wear cartridges quickly. We clear the buildup or replace the fixture, usually the same day.' }],
  },
  'clifton': {
    intro: 'A faucet dripping all night or a tired fixture you want upgraded in Clifton? We repair and replace kitchen and bath faucets in the Gaslight District and around Ludlow Avenue, most the same day. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. The faucets in those big older houses are frequently original, and the aging supply lines feeding them corrode and leave the pressure low at the tap.',
      'A fair number of these homes are now rentals near campus, where worn fixtures take heavy use and hard water clogs aerators and wears cartridges fast. We repair the worn parts or replace the faucet, and can swap a dated fixture for a modern one that uses less water in a single visit.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Do you replace faucets in student rentals near UC in Clifton?', a: 'Yes. We repair and replace faucets in the older homes and rentals throughout Clifton and the university area, and the hard water and aging lines there mean we see a lot of them. Same-day in most cases.' }],
  },
  'corryville': {
    intro: 'Faucet dripping or running weak in Corryville? We repair and replace kitchen and bath faucets in the Short Vine area near UC, most the same day. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. The faucets in this older, densely packed housing take heavy use, and the aging supply lines behind them corrode and leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges fast, so worn and dripping fixtures are common in these rentals. We can repair or replace a faucet in one unit without affecting the others, and being central to our routes we usually get there the same day.',
    ],
    commonIntro: 'In Corryville’s dense, older rental housing near campus with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in Corryville rentals near UC wear out so fast?', a: 'The older fixtures in Corryville’s densely used rentals take a beating, and hard water clogs aerators and wears cartridges quickly. We repair or replace them, usually the same day.' }],
  },
  'northside': {
    intro: 'A drip that will not stop or a faucet you want replaced in Northside? We repair and replace kitchen and bath faucets around Hamilton Avenue, most the same day. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. The faucets in these older homes often run on original galvanized lines that corrode with age, which shows up as weak pressure at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears out cartridges faster than the fixtures were built to last. We clear the buildup, replace worn parts, or fit a new faucet, and can recommend a softener when the buildup keeps coming back.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes with hard water and original supply lines, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can low pressure at a Northside faucet be fixed?', a: 'Often yes. In Northside’s older homes, low pressure usually comes from a clogged aerator or a corroded galvanized supply line, both of which we can clear or replace the same day.' }],
  },
  'college-hill': {
    intro: 'Faucet dripping or a worn fixture you want upgraded in College Hill? We repair and replace kitchen and bath faucets along Hamilton Avenue and Belmont, most the same day. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes and mid-century houses. The faucets in homes this age are often original or well past their prime, and the slowly corroding galvanized supply lines feeding them leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears out cartridges faster than expected, so a faucet starts dripping or sticking. We repair the worn parts or swap a dated mid-century fixture for a modern one that uses less water, usually in a single visit.',
    ],
    commonIntro: 'In College Hill’s early-1900s and mid-century homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Is it worth replacing an old faucet in a College Hill home?', a: 'Usually yes. The older and mid-century faucets common in College Hill wear out from hard water and corroded lines, and a new fixture runs cleaner and uses less water. We can do the swap the same day.' }],
  },
  'walnut-hills': {
    intro: 'A faucet dripping through the night or sticking when you turn it in Walnut Hills? We repair and replace kitchen and bath faucets around Peebles Corner and McMillan Street, most the same day. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district, much of it now split into units. The faucets in this century-old housing often run on aging galvanized lines that corrode and leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges fast, and in multi-unit buildings the fixtures take heavy use. We can repair or replace a faucet in one apartment without shutting water to the whole building, and swap a dated fixture for a modern one.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can you replace a faucet in one Walnut Hills apartment without affecting the others?', a: 'Yes. Many Walnut Hills buildings are split into units, and we can isolate one apartment, repair or replace the faucet, and keep water on for the rest. Usually the same day.' }],
  },
  'east-walnut-hills': {
    intro: 'Faucet dripping or barely flowing in East Walnut Hills? We repair and replace kitchen and bath faucets around Woodburn Avenue and DeSales Corner, most the same day. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often still carry original plumbing, where corroded galvanized lines leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges well before their time, so a faucet starts dripping or spraying off to one side. We clear the buildup, replace worn parts, or fit a new fixture, taking care to protect the original woodwork and finishes these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes with hard water and original supply lines, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in East Walnut Hills’ older homes wear out so fast?', a: 'Hard water and the original supply lines in East Walnut Hills’ century-old homes clog aerators and wear cartridges quickly. We clear the buildup or replace the fixture, usually the same day.' }],
  },
  'avondale': {
    intro: 'A drip that will not stop or a worn faucet in Avondale? We repair and replace kitchen and bath faucets near the hospitals and the zoo, most the same day. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of that housing is older, densely built, and rental, so the faucets take heavy daily use on aging supply lines that corrode and leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears out cartridges faster than the fixtures were built to last. We repair worn faucets or replace dated ones with modern fixtures, and being central to the uptown area we usually get there the same day.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in Avondale apartments wear out so fast?', a: 'The fixtures in Avondale’s densely used older rentals take heavy use, and hard water clogs aerators and wears cartridges quickly. We repair or replace them, usually the same day.' }],
  },
  'hyde-park': {
    intro: 'Faucet dripping or a dated fixture you want upgraded in Hyde Park? We repair and replace kitchen and bath faucets around Hyde Park Square and Erie Avenue, most the same day. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. The faucets in these big older homes are often original, and the aging supply lines behind them corrode and leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges well before their time, and a slow hidden drip can damage finished spaces before it is noticed. We catch and repair the leak or replace the fixture, and can upgrade a dated faucet to a modern one that uses less water in a single visit.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Is it worth upgrading an old faucet in a Hyde Park home?', a: 'Usually yes. The original faucets in Hyde Park’s century-old homes wear out from hard water, and a modern fixture runs cleaner and uses less water. We can do the swap the same day.' }],
  },
  'oakley': {
    intro: 'A faucet dripping all night or a worn fixture in Oakley? We repair and replace kitchen and bath faucets around Oakley Square and Madison Road, most the same day. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The faucets in those older bungalows were fitted with galvanized supply lines now well past their prime, so corrosion leaves the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears out cartridges faster than the fixtures were built to last, so a faucet starts dripping or sticking. We repair the worn parts or swap a dated bungalow fixture for a modern one that uses less water, usually in one visit.',
    ],
    commonIntro: 'In Oakley’s early-1900s bungalows and brick homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in Oakley bungalows wear out so fast?', a: 'Hard water and the aging galvanized lines in Oakley’s early-1900s bungalows clog aerators and wear cartridges quickly. We clear the buildup or replace the fixture, usually the same day.' }],
  },
  'mount-lookout': {
    intro: 'Faucet dripping or barely flowing in Mount Lookout? We repair and replace kitchen and bath faucets around Mount Lookout Square and Ault Park, most the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The faucets in these older homes carry decades-old plumbing, where corroded supply lines leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears out cartridges well before their time, so a faucet starts dripping or spraying off to one side. We clear the buildup, replace worn parts, or fit a new fixture, and can recommend a softener when the buildup keeps returning.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes with hard water and aging supply lines, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can low pressure at a Mount Lookout faucet be fixed?', a: 'Often yes. In Mount Lookout’s older hilltop homes, low pressure usually traces to a clogged aerator or a corroded supply line, both of which we can clear or replace the same day.' }],
  },
  'columbia-tusculum': {
    intro: 'A drip that will not stop or a worn faucet in Columbia-Tusculum? We repair and replace kitchen and bath faucets in Cincinnati’s oldest neighborhood near the river, most the same day. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful Painted Ladies — restored Victorian homes on the east side near the Ohio River. The faucets in these Victorian and early homes are often original, well past their service life, and the aging supply lines feeding them corrode and leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges fast, so a faucet starts dripping or stiffening. We clear the buildup, replace worn parts, or fit a new fixture, taking care not to disturb the original features these historic homes are known for.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes with hard water and original supply lines, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can you replace a faucet in a historic Columbia-Tusculum home without damaging original features?', a: 'Yes. We work on the neighborhood’s Victorian and Painted Lady homes regularly and repair or replace faucets carefully around aging plumbing and original details. Same-day in most cases.' }],
  },
  'mount-washington': {
    intro: 'Faucet dripping or a tired fixture you want upgraded in Mount Washington? We repair and replace kitchen and bath faucets along Beechmont Avenue, most the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. The faucets in homes of that era are often original or well past their prime, and the aging galvanized supply lines feeding them leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears out cartridges faster than the fixtures were built to last. We repair the worn parts or swap a dated mid-century fixture for a modern one that uses less water, usually in a single visit.',
    ],
    commonIntro: 'In Mount Washington’s early-1900s and mid-century homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Is it worth replacing an old faucet in a Mount Washington home?', a: 'Usually yes. The mid-century faucets common along Beechmont Avenue wear out from hard water and corroded lines, and a new fixture runs cleaner and uses less water. We can do the swap the same day.' }],
  },
  'madisonville': {
    intro: 'A drip that will not quit or a worn faucet in Madisonville? We repair and replace kitchen and bath faucets around Madison Road and Whetsel Avenue, most the same day. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The faucets in those older houses run on aging galvanized supply lines that corrode with age, which shows up as weak pressure at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears out cartridges well before their time, so a faucet starts dripping or sticking. We clear the buildup, replace worn parts, or fit a new fixture that uses less water, and can recommend a softener when the buildup keeps returning.',
    ],
    commonIntro: 'In Madisonville’s early-1900s homes with hard water and aging supply lines, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in older Madisonville homes wear out so fast?', a: 'Hard water and the aging galvanized lines in Madisonville’s early-1900s homes clog aerators and wear cartridges quickly. We clear the buildup or replace the fixture, usually the same day.' }],
  },
  'pleasant-ridge': {
    intro: 'Faucet dripping or a stiff old fixture in Pleasant Ridge? We repair and replace kitchen and bath faucets along Montgomery Road, most the same day. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. The faucets in those older single- and two-family homes carry decades-old plumbing, where corroded supply lines leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges fast, and in two-families the fixtures take heavy use. We can repair or replace a faucet in one unit without affecting the other, and swap a dated fixture for a modern one that uses less water.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Do you replace faucets in the two-family homes common in Pleasant Ridge?', a: 'Yes. We repair and replace faucets in the brick two-families throughout Pleasant Ridge and can work on one unit’s fixture without affecting the other. Same-day in most cases.' }],
  },
  'westwood': {
    intro: 'A drip that will not stop or a worn fixture you want replaced in Westwood? We repair and replace kitchen and bath faucets along Harrison Avenue, most the same day. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, the faucets often run on galvanized supply lines slowly closing up with corrosion, which leaves the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears out cartridges faster than the fixtures were built to last, so a faucet starts dripping or sticking. We repair the worn parts or swap a dated fixture for a modern one that uses less water, usually in a single visit.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Can low pressure at a Westwood faucet be fixed?', a: 'Often yes. In Westwood’s older homes, low pressure usually comes from a clogged aerator or a corroded galvanized supply line, both of which we can clear or replace the same day.' }],
  },
  'norwood': {
    intro: 'Faucet dripping or barely flowing in Norwood? We repair and replace kitchen and bath faucets around Surrey Square and Montgomery Road, most the same day. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. The faucets in that tightly packed, century-old housing often run on corroded galvanized lines that leave the pressure low at the tap.',
      'Hard water leaves mineral buildup that clogs aerators and wears cartridges fast, and in two-families the fixtures take heavy use. We can repair or replace a faucet in one unit without affecting the other, and being right in the middle of our service area we usually get there the same day.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in Norwood’s older homes wear out so fast?', a: 'Hard water and the corroded galvanized lines in Norwood’s century-old homes clog aerators and wear cartridges quickly. We clear the buildup or replace the fixture, usually the same day.' }],
  },
  'blue-ash': {
    intro: 'A drip that will not quit or a tired faucet you want upgraded in Blue Ash? We repair and replace kitchen and bath faucets for homes and businesses across this northeast-side city, most the same day. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so the mid-century faucets are past their prime and the worn supply lines feeding them leave the pressure low at the tap.',
      'Hard water across the area leaves mineral buildup that clogs aerators and wears out cartridges faster than expected, so a faucet starts dripping or sticking. We repair the worn parts or swap a dated fixture for a modern one that uses less water, for homes and businesses alike.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Is it worth replacing an old faucet in a Blue Ash home?', a: 'Usually yes. The mid-century faucets common in Blue Ash are past their prime, and hard water clogs them up, so a new fixture runs cleaner and uses less water. We can do the swap the same day.' }],
  },
  'montgomery': {
    intro: 'Faucet dripping or a dated fixture you want upgraded in Montgomery? We repair and replace kitchen and bath faucets around the historic district and Montgomery Road, most the same day. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The faucets here span a wide range — from original fixtures in the century-old core to mid-century ones in the older subdivisions — but the aging supply lines behind many of them leave the pressure low at the tap.',
      'Hard water across the area leaves mineral buildup that clogs aerators and wears out cartridges faster than the fixtures were built to last, so a faucet starts dripping or sticking. We repair the worn parts or swap a dated fixture for a modern one that uses less water, usually in a single visit.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes with hard water, the faucet problems we see most often are:',
    localFaqs: [{ q: 'Why do faucets in Montgomery homes wear out so fast?', a: 'Hard water and the aging supply lines common in Montgomery’s historic and established homes clog aerators and wear cartridges quickly. We clear the buildup or replace the fixture, usually the same day.' }],
  },
};
