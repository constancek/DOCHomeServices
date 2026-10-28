export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Water quality problems in Sedamsville usually come from two places: old galvanized supply lines in the hillside homes above River Road, which leave a rusty, metallic taste, and hard water that scales fixtures and the water heater. We test first, then match a softener or carbon filter to the result.',
    relevance: [
      'Sedamsville (ZIP 45204) is one of Cincinnati’s historic riverside neighborhoods on the west side, between Riverside and Sayler Park, with much of its housing climbing the hillside above River Road and dating to the late 1800s and early 1900s. The old galvanized supply lines still feeding many of these homes can leave a rusty, metallic taste and sediment at the tap, which is why we test the water before recommending anything.',
      'The region’s hard water is the other half of the story here, leaving calcium and magnesium scale that crusts on fixtures and builds up inside pipes and the water heater. A softener stops that buildup, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why does my Sedamsville tap water taste metallic?', a: 'In century-old Sedamsville homes it is usually the aging galvanized pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that actually addresses the cause.' }],
  },
  'sayler-park': {
    intro: 'In Sayler Park, water quality work starts with the original galvanized lines in Victorian and early-1900s frame houses, which can shed sediment and a metallic taste. Hard water adds scale on fixtures and inside the water heater. A test tells us whether a softener, a carbon filter or both fits.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside, and once its own village before annexation in the early 1900s. The rows of Victorian and early-1900s frame houses here still carry original galvanized supply lines, which can shed a metallic taste and sediment that a water test will pinpoint.',
      'On top of that, the region’s hard water leaves mineral scale on fixtures and inside the water heater across the neighborhood’s older homes. A softener protects that plumbing, and a carbon filter takes out the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across Sayler Park’s century-old frame homes with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why is the water so hard in Sayler Park?', a: 'Greater Cincinnati’s supply runs hard across the west side, so the calcium and magnesium leaving scale on your Sayler Park fixtures is normal for the area. We test to measure exactly how hard, then size a softener to match.' }],
  },
  'riverside': {
    intro: 'Riverside water quality complaints along River Road are usually white crust on faucets or a metallic, discolored tap. The first is hard-water scale; the second is often original galvanized pipe in the older homes. We test before any work, then size a softener or carbon filter.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati running along River Road and US-50, tucked between Sedamsville and Sayler Park with the hillside on one side and the Ohio River on the other. Many of its older homes still carry original galvanized supply lines that can discolor the water and add a metallic taste, something a water test will confirm before any work.',
      'The region’s hard water compounds the problem, leaving calcium and magnesium scale on faucets and inside the water heater. A softener stops that buildup and protects the plumbing, while a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'On Riverside’s older riverfront homes with old pipe and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why does my Riverside water leave white crust on the faucets?', a: 'That crust is hard-water scale, calcium and magnesium left behind as the water dries, and it is common across the River Road homes here. We test the hardness first, then size a softener that stops it at the source.' }],
  },
  'east-price-hill': {
    intro: 'East Price Hill water treatment often has to sort out two tastes at once: chlorine from the city supply and a metallic note from galvanized pipe in early-1900s homes near Warsaw Avenue. Hard water scales fixtures too. In a two-family, one softener can protect both halves.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, with streets around Warsaw Avenue and the Incline District packed with dense early-1900s frame homes and brick two-families. The original galvanized and cast-iron plumbing in that century-old housing can leave a metallic taste and sediment, so we test the water before recommending a fix.',
      'The region’s hard water is the steadier issue, scaling fixtures and the water heater across these tightly built homes. A softener protects the plumbing in both halves of a two-family, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why is my East Price Hill tap water tasting off?', a: 'In the early-1900s homes around Warsaw Avenue it is usually a mix of chlorine from the city supply and old galvanized pipe adding a metallic note. We test first to tell which, then match filtration to the cause.' }],
  },
  'west-price-hill': {
    intro: 'Dry skin after a shower is the water quality complaint we hear most in West Price Hill, and hard water is usually the cause. The 1920s to 1950s homes along Glenway Avenue may also have galvanized lines adding a metallic taste. We test, then size a softener.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. Those decades-old houses often still run on original galvanized supply lines slowly closing up with corrosion, which can color the water and add a metallic taste a test will catch.',
      'The region’s hard water is what most homeowners here notice first, leaving scale on faucets, spots on glassware, and a dry feel after a shower. A softener handles that across the home, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes with aging pipe and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why does my skin feel dry after showering in West Price Hill?', a: 'Hard water is the usual reason, since the minerals make soap harder to rinse and leave a film on skin, and it is common across these Glenway Avenue homes. We test the hardness, then size a softener to fix it.' }],
  },
  'lower-price-hill': {
    intro: 'Water quality in Lower Price Hill’s 19th-century Italianate rowhouses is shaped by plumbing older than modern standards. Galvanized and cast-iron lines near State Avenue can leave a rusty, metallic taste, and hard water crusts fixtures and the water heater. A test shows whether to filter or fix the pipe.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river around State Avenue, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses. Those mid-1800s rowhouses were built long before modern plumbing, so many still run on old galvanized and cast-iron lines that can leave a rusty, metallic taste and sediment we confirm with a test.',
      'The region’s hard water adds calcium and magnesium scale on top of that, crusting fixtures and building up inside the water heater. A softener protects the plumbing in these historic homes, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why does my Lower Price Hill water taste metallic?', a: 'In the 19th-century rowhouses around State Avenue it is usually the original galvanized and cast-iron pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that addresses the real cause.' }],
  },
  'over-the-rhine': {
    intro: 'Over-the-Rhine water quality issues trace to the buildings: 1850s to 1880s brick blocks around Vine Street and Findlay Market with galvanized risers and cast-iron stacks. Chlorine taste lingers in these older buildings, and hard water scales the heaters. A carbon filter or under-sink reverse-osmosis unit helps.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, block after block of brick buildings around Vine Street and Findlay Market built between the 1850s and 1880s. Many now split into apartments and condos, they run on a patchwork of brittle cast-iron stacks and galvanized risers that can add a metallic taste and sediment, which a water test pinpoints.',
      'The region’s hard water layers scale on fixtures and inside water heaters throughout these old buildings. A softener protects that plumbing, and a carbon filter or under-sink reverse-osmosis unit clears the chlorine taste from the city supply for better drinking water.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why does my OTR tap water taste like chlorine?', a: 'City water carries chlorine for treatment, and it is often more noticeable in OTR’s older buildings where the taste lingers. We test first, then a carbon filter or reverse-osmosis unit clears it for drinking and cooking.' }],
  },
  'downtown': {
    intro: 'For downtown water quality, the simplest fix is often a compact under-sink reverse-osmosis unit that clears chlorine taste in a condo or loft. Older early-1900s buildings turned residential can also add a metallic taste from original lines. We test first so the system matches the water.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Plumbing here ranges from modern stacked risers in towers to original lines in early-1900s buildings turned residential, and the older lines can add a metallic taste that a water test will catch.',
      'The region’s hard water leaves scale on fixtures and inside water heaters in either kind of building. A softener protects the plumbing, and an under-sink reverse-osmosis unit clears the chlorine taste from the city supply, which is often the simplest fix in a downtown condo or loft.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older conversions with city water and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Can I get better-tasting drinking water in a downtown condo?', a: 'Yes. A compact under-sink reverse-osmosis unit fits most downtown condos and lofts and clears the chlorine taste from the city supply. We test the water first so the system matches what is actually in it.' }],
  },
  'west-end': {
    intro: 'The West End’s older brick homes and Italianate rowhouses near TQL Stadium carry decades-old galvanized and cast-iron plumbing, so water quality testing here often finds a metallic taste or discoloration. Hard water adds steady scale. We test before recommending a filter, softener or pipe-side fix.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer development. The older brick homes here carry decades-old galvanized and cast-iron plumbing that can color the water and add a metallic taste, so we test before recommending anything.',
      'The region’s hard water adds the steady problem of scale on fixtures and inside the water heater across these homes. A softener stops that buildup, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes with old pipe and hard water, the water-quality issues we are called for most often are:',
    localFaqs: [{ q: 'Why does my West End water taste metallic?', a: 'In the older brick homes near Linn Street it is usually the decades-old galvanized and cast-iron pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that addresses the cause.' }],
  },
  'mount-adams': {
    intro: 'Hard water is the steady water quality issue in Mount Adams, scaling fixtures and water heaters in the 19th-century rowhouses and townhomes above Eden Park. Original galvanized pipe can also leave a metallic taste. We measure the hardness with a test, then size a softener to match.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. The age of that housing means old supply and drain lines, where original galvanized pipe can leave a metallic taste and sediment a water test will identify.',
      'The region’s hard water is the more constant issue here, scaling fixtures and the water heater in these century-old rowhouses. A softener protects that plumbing, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why is the water so hard in Mount Adams?', a: 'The city supply runs hard across Cincinnati, so the scale on your Mount Adams fixtures is normal for the area, not a fault in your home. We test to measure exactly how hard, then size a softener to match.' }],
  },
  'mount-auburn': {
    intro: 'Mount Auburn has some of the oldest plumbing in Cincinnati, and water quality in its Victorian homes reflects it. Original cast-iron and galvanized lines can shed a metallic taste, and hard water scales heaters in houses split into apartments. One softener can protect several units.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. Those Victorian-era homes carry some of the oldest plumbing in the city, original cast-iron and galvanized lines that can shed a metallic taste and sediment, which a water test pinpoints.',
      'The region’s hard water adds scale on fixtures and inside water heaters throughout these subdivided houses. A softener protects the plumbing across multiple units, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes with old pipe and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why does my Mount Auburn tap water taste metallic?', a: 'In these Victorian-era homes it is usually the original galvanized and cast-iron pipe, some of the oldest in the city, shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix.' }],
  },
  'clifton': {
    intro: 'Clifton water quality testing usually turns up hard-water scale in the large Victorian and early-1900s homes near the Ludlow Avenue Gaslight District, plus a metallic taste where old galvanized supply lines remain. That holds for the rentals near UC too. A softener and carbon filter cover most cases.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Many of those big older houses have plenty of original plumbing still in service, where aging galvanized supply lines can color the water and add a metallic taste a test will catch.',
      'The region’s hard water leaves scale on fixtures and inside water heaters across these century-old homes, including the rentals near campus. A softener protects the plumbing, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes with old pipe and hard water, the water-quality issues we are called for most often are:',
    localFaqs: [{ q: 'Why is the water so hard in Clifton?', a: 'Greater Cincinnati’s supply runs hard, so the scale on fixtures in these Ludlow Avenue homes is normal for the area. We test the hardness first, then size a softener that stops the buildup.' }],
  },
  'corryville': {
    intro: 'Chlorine taste is a common water quality complaint in Corryville’s older Short Vine buildings, and heavy use on aging galvanized pipe can add metallic taste and sediment. Hard water scales fixtures across the dense student rentals. A carbon filter or reverse-osmosis unit clears the drinking water.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. So much of that older housing runs on aging supply lines under heavy use, where original galvanized pipe can add a metallic taste and sediment that a water test will confirm.',
      'The region’s hard water layers scale on fixtures and inside water heaters across these densely packed buildings. A softener protects the plumbing, and a carbon filter or reverse-osmosis unit clears the chlorine taste from the city supply for better drinking water.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why does my Corryville tap water taste like chlorine?', a: 'City water carries chlorine for treatment, and it is often noticeable in these older Short Vine buildings. We test first, then a carbon filter or reverse-osmosis unit clears it for drinking and cooking.' }],
  },
  'northside': {
    intro: 'Scale on everything is the usual water quality complaint in Northside, where late-1800s and early-1900s homes along Hamilton Avenue run down toward the Mill Creek valley. Old galvanized and cast-iron pipe makes it more noticeable and can add a metallic taste. Testing comes before any softener.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. The age of that housing means original galvanized and cast-iron plumbing is common, and it can leave a metallic taste and sediment, which a water test will pinpoint.',
      'The region’s hard water is the steadier concern, scaling fixtures and the water heater across these older homes. A softener stops the buildup and protects the plumbing, while a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes near Mill Creek with old pipe and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why does my Northside water leave scale on everything?', a: 'That scale is hard-water minerals, common across the Hamilton Avenue homes here, made more noticeable by old pipe. We test the hardness first, then size a softener to stop it at the source.' }],
  },
  'college-hill': {
    intro: 'College Hill water quality depends on the house. Early-1900s homes along Hamilton Avenue may have corroding galvanized lines that color the water, while hard water scales fixtures in both the older and mid-century homes. We test to confirm the cause before suggesting filtration or a softener.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. In homes that age, slowly corroding galvanized supply lines can color the water and add a metallic taste that a water test will catch.',
      'The region’s hard water leaves the more familiar scale on fixtures and inside water heaters across both the older and mid-century homes here. A softener handles that across the home, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes with aging pipe and hard water, the water-quality issues we are called for most often are:',
    localFaqs: [{ q: 'Why is my College Hill tap water tasting metallic?', a: 'In the early-1900s homes along Hamilton Avenue it is usually corroding galvanized pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that addresses the cause.' }],
  },
  'walnut-hills': {
    intro: 'Water treatment in Walnut Hills often serves several apartments at once, since many 19th-century buildings near Peebles Corner are split into units. Aging cast-iron and galvanized plumbing can add a metallic taste, and hard water scales the heaters. A test confirms the cause first.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of that century-old housing is now split into units and runs on aging cast-iron and galvanized plumbing, which can add a metallic taste and sediment a water test will identify.',
      'The region’s hard water adds scale on fixtures and inside water heaters throughout these multi-unit buildings. A softener protects the plumbing across several apartments at once, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why does my Walnut Hills tap water taste metallic?', a: 'In these 19th-century buildings it is usually the aging galvanized and cast-iron pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that addresses the real cause.' }],
  },
  'east-walnut-hills': {
    intro: 'East Walnut Hills water quality calls are mostly about hard-water scale in the stately early-1900s homes around Woodburn Avenue and DeSales Corner, where original galvanized lines can also color the water. A softener protects the plumbing and the original details. Testing tells us how hard the water is.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often still carry original plumbing, where corroded galvanized lines can color the water and add a metallic taste a test will catch.',
      'The region’s hard water leaves scale on fixtures and inside water heaters across these older homes. A softener protects the plumbing and the original details these houses are known for, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes with old pipe and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why is the water so hard in East Walnut Hills?', a: 'The city supply runs hard across Cincinnati, so the scale on fixtures in these Woodburn Avenue homes is normal for the area. We test to measure how hard it is, then size a softener to match.' }],
  },
  'avondale': {
    intro: 'Avondale water quality complaints, near the hospitals and the zoo, usually mix chlorine from the city supply with a metallic note from old galvanized pipe in early-1900s homes and apartments. Hard water scales fixtures too. We test first to tell which, then match filtration to the cause.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of that housing is older and densely built, much of it rental, so the aging galvanized plumbing under heavy use can add a metallic taste and sediment that a water test will pinpoint.',
      'The region’s hard water layers scale on fixtures and inside water heaters across these older buildings. A softener protects the plumbing, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings with old pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why does my Avondale tap water taste off?', a: 'In these early-1900s homes near the hospitals it is usually a mix of chlorine from the city supply and old galvanized pipe adding a metallic note. We test first to tell which, then match filtration to the cause.' }],
  },
  'hyde-park': {
    intro: 'Spotted glassware is the water quality sign most Hyde Park homeowners notice, along with scale on fixtures and dry skin after a shower. The large early-1900s homes around Hyde Park Square may also have aging supply lines that color the water. We test before sizing a softener.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes, Tudors, colonials, and brick foursquares, on established tree-shaded streets. These big older houses are exactly where aging supply lines can color the water or add a metallic taste before anyone notices, which is why we test first.',
      'The region’s hard water is what most homeowners here see day to day, leaving scale on fixtures, spots on glassware, and a dry feel after a shower. A softener handles that across the home and protects the water heater, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes with aging pipe and hard water, the water-quality issues we are called for most often are:',
    localFaqs: [{ q: 'Why does my Hyde Park water spot the glassware?', a: 'Those spots are hard-water minerals left as the water dries, common across the homes near Hyde Park Square. We test the hardness first, then size a softener that clears the spotting and protects the plumbing.' }],
  },
  'oakley': {
    intro: 'Oakley’s early-1900s bungalows were built with galvanized supply lines now well past their prime, so water quality testing near Oakley Square often finds a metallic taste or color. Hard water scales fixtures and the water heater. We test first, then suggest filtration or a pipe-side fix.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows that fill much of Oakley were built with galvanized supply lines now well past their prime, so they can color the water and add a metallic taste a test will catch.',
      'The region’s hard water adds scale on fixtures and inside water heaters across these older homes. A softener stops the buildup, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes with old pipe and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why does my Oakley water taste metallic?', a: 'In the early-1900s bungalows around Oakley Square it is usually the aging galvanized pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that addresses the cause.' }],
  },
  'mount-lookout': {
    intro: 'Mount Lookout water quality comes down mostly to hard water, which scales fixtures and water heaters in the early-1900s homes and larger houses near Ault Park. Original supply lines in older homes can also add a metallic taste. We test to measure hardness, then size a softener.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes here carry decades-old plumbing, where original supply lines can color the water and add a metallic taste a test will confirm.',
      'The region’s hard water is the more constant issue, leaving scale on fixtures and inside the water heater across these older homes. A softener protects the plumbing, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes with aging pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why is the water so hard in Mount Lookout?', a: 'Greater Cincinnati’s supply runs hard, so the scale on fixtures in these Mount Lookout Square homes is normal for the area. We test to measure how hard, then size a softener to match.' }],
  },
  'columbia-tusculum': {
    intro: 'Water quality in Columbia-Tusculum, Cincinnati’s oldest neighborhood, depends on plumbing in Victorian Painted Ladies well past its service life. Galvanized pipe can color the water and add a metallic taste, and hard water scales fixtures. A softener protects the plumbing without disturbing period details.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful Painted Ladies, restored Victorian homes, on the east side near the Ohio River. The age of those Victorian and early homes means original plumbing well past its service life, where galvanized pipe can color the water and add a metallic taste a test will catch.',
      'The region’s hard water adds scale on fixtures and inside the water heater across these historic homes. A softener protects the plumbing without disturbing the period details, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river with old pipe and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why does my Columbia-Tusculum tap water taste metallic?', a: 'In these Painted Lady and Victorian homes it is usually the original galvanized pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that respects the home’s historic features.' }],
  },
  'mount-washington': {
    intro: 'Mount Washington water treatment along Beechmont Avenue usually addresses hard water scaling fixtures and water heaters in early-1900s and mid-century homes. Original galvanized lines in the older houses can add a metallic taste and sediment. We test first, then fit a softener or carbon filter.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. In homes of that era, the original galvanized supply lines can corrode and add a metallic taste and sediment, which a water test will pinpoint.',
      'The region’s hard water leaves scale on fixtures and inside the water heater across both the older and mid-century homes here. A softener stops the buildup, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across Mount Washington’s early-1900s and mid-century homes with aging pipe and hard water, the water-quality issues we are called for most often are:',
    localFaqs: [{ q: 'Why does my Mount Washington water taste metallic?', a: 'In the older homes along Beechmont Avenue it is usually the original galvanized pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that addresses the cause.' }],
  },
  'madisonville': {
    intro: 'Madisonville water quality issues mostly come from the older early-1900s homes along Madison Road, where aging galvanized and cast-iron plumbing can color the water and add a metallic taste. Hard water adds scale. Newer infill homes tend to see only the scale. Testing comes first.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of Madisonville run on aging galvanized and cast-iron plumbing, which can color the water and add a metallic taste a test will catch.',
      'The region’s hard water adds scale on fixtures and inside the water heater across these older homes. A softener stops the buildup, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Madisonville’s older homes with aging pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why does my Madisonville tap water taste metallic?', a: 'In the early-1900s homes along Madison Road it is usually the aging galvanized and cast-iron pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that addresses the cause.' }],
  },
  'pleasant-ridge': {
    intro: 'Faucet crust is the water quality issue we see most along Montgomery Road in Pleasant Ridge, and it comes from hard water. Older single-family homes and brick two-families can also have corroded galvanized lines. One softener can protect both halves of a two-family.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those older single- and two-family homes carry decades-old plumbing, where corroded galvanized lines can color the water and add a metallic taste a test will pinpoint.',
      'The region’s hard water leaves scale on fixtures and inside water heaters across these homes. A softener protects the plumbing in both halves of a two-family, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families with old pipe and hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why does my Pleasant Ridge water leave scale on the faucets?', a: 'That crust is hard-water minerals, common across the Montgomery Road homes here, made more noticeable in older pipe. We test the hardness first, then size a softener to stop it at the source.' }],
  },
  'westwood': {
    intro: 'Hard water is the common thread in Westwood water quality, scaling fixtures and water heaters from historic homes near Westwood Town Hall to mid-century houses off Harrison Avenue. Galvanized lines closing up with corrosion can add a metallic taste in older homes. We test, then size a softener.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range of older housing, galvanized supply lines closing up with corrosion can color the water and add a metallic taste a test will catch.',
      'The region’s hard water is the common thread, leaving scale on fixtures and inside water heaters in homes old and newer alike. A softener stops the buildup, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes with aging pipe and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why is the water so hard in Westwood?', a: 'Greater Cincinnati’s supply runs hard across the west side, so the scale on fixtures in these Harrison Avenue homes is normal for the area. We test to measure how hard, then size a softener to match.' }],
  },
  'norwood': {
    intro: 'Norwood water quality testing often finds corroded galvanized lines in the dense early-1900s homes and brick two-families around Surrey Square, which color the water and add a metallic taste. Hard water scales the fixtures. A softener can serve both halves of a two-family.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing often runs on corroded galvanized lines, which can color the water and add a metallic taste a test will pinpoint.',
      'The region’s hard water adds scale on fixtures and inside water heaters across these closely built homes. A softener protects the plumbing in both halves of a two-family, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families with old pipe and hard water, the water-quality issues we are called for most often are:',
    localFaqs: [{ q: 'Why does my Norwood tap water taste metallic?', a: 'In these early-1900s homes around Surrey Square it is usually the corroded galvanized pipe shedding into the water. We test first to confirm, then recommend filtration or a pipe-side fix that addresses the cause.' }],
  },
  'blue-ash': {
    intro: 'Most Blue Ash homeowners notice hard water first: scale on fixtures, spotted glassware and buildup inside the water heater. That is the core of water quality work in these mid-century neighborhoods and newer subdivisions. Worn supply lines can add a metallic taste in some homes, which a test confirms.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so worn supply lines can add a metallic taste in some homes, which a water test will confirm.',
      'The region’s hard water is the issue most Blue Ash homeowners notice first, leaving scale on fixtures, spots on glassware, and buildup inside the water heater. A softener handles that across the home, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions with hard water, the water-quality issues we handle most often are:',
    localFaqs: [{ q: 'Why is the water so hard in Blue Ash?', a: 'The regional supply runs hard across the northeast side, so the scale on fixtures in Blue Ash homes is normal for the area. We test to measure how hard it is, then size a softener to match.' }],
  },
  'montgomery': {
    intro: 'Montgomery water quality varies from the 19th-century buildings in the historic district, where original pipe can add a metallic taste, to decades-old subdivisions. Hard water scales fixtures and water heaters everywhere. A test tells us which problem a house has before we suggest a softener or filter.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The plumbing here spans a wide range, from century-old structures in the historic core, where original pipe can add a metallic taste, to decades-old subdivisions, and a water test tells us which is which.',
      'The region’s hard water is the steady concern across all of it, leaving scale on fixtures and inside water heaters. A softener stops the buildup and protects the plumbing, and a carbon filter clears the chlorine taste from the city supply.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes with a range of pipe ages and hard water, the water-quality issues we see most often are:',
    localFaqs: [{ q: 'Why is the water so hard in Montgomery?', a: 'The regional supply runs hard across the northeast side, so the scale on fixtures in Montgomery homes is normal for the area. We test the hardness first, then size a softener to match.' }],
  },
};
