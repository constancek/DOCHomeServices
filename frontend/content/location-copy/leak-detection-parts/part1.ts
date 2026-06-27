export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Higher water bill or a stain spreading in a Sedamsville home? Our licensed plumbers find hidden leaks with acoustic, thermal, and camera tools — no tearing up the house — for homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with late-1800s and early-1900s homes climbing the hillside above River Road. Supply lines in housing this old are often aging galvanized or early copper that develops pinhole leaks behind plaster, which we trace before they rot framing or drywall.',
      'On the hillside above the river, ground movement and steady moisture can mask where a leak actually starts, so we use moisture meters and thermal imaging to separate a pipe leak from damp soil and pinpoint the source. We open up only the spot we need to and explain the fix before starting.',
    ],
    commonIntro: 'In Sedamsville’s older homes with aging supply lines, the leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a slab leak in a Sedamsville home without tearing up the floor?', a: 'Yes. We use acoustic sensors and thermal imaging to pinpoint slab and supply-line leaks in Sedamsville homes before opening anything, so the repair is targeted and the mess stays minimal.' }],
  },
  'sayler-park': {
    intro: 'Water bill creeping up or a damp spot you can’t explain in Sayler Park? Our licensed plumbers pinpoint hidden leaks with moisture meters, thermal imaging, and acoustic sensors — from the riverfront streets to the homes up the hill. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village before annexation in the early 1900s, and its streets are still lined with Victorian and early-1900s frame houses — the kind where century-old galvanized supply lines quietly leak inside walls and crawl spaces.',
      'The riverfront sits in the Ohio River floodplain, so saturated ground and high water keep low-lying basements damp, and a slow leak can hide in that moisture for a long time. We use moisture readings and acoustic detection to tell a true pipe leak from groundwater, then mark the exact spot.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame homes near the floodplain, the leaks we track down most often show up as:',
    localFaqs: [{ q: 'How do you tell a pipe leak from flood-zone dampness in a Sayler Park basement?', a: 'In Sayler Park’s riverfront homes we use moisture meters and acoustic listening to separate a leaking supply line from groundwater coming through the floodplain, then pinpoint the actual source the same day.' }],
  },
  'riverside': {
    intro: 'Unexplained wet spot or a water bill that won’t settle down in Riverside? Our licensed plumbers locate the hidden leak with acoustic and thermal tools — no guesswork, no needless digging — for the homes along River Road. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati running along River Road and US-50, wedged between Sedamsville and Sayler Park with the hillside on one side and the Ohio River on the other. Many homes sit on low river bottomland, where high groundwater keeps basements and crawl spaces damp and makes a slow supply-line leak easy to miss.',
      'The neighborhood shares the oldest riverfront housing on the west side with Sedamsville, so original galvanized supply lines and aging drain joints are common and develop pinhole and seam leaks as they corrode. We pinpoint the source with moisture meters and acoustic sensors rather than guessing, which keeps low-lying lower levels from soaking longer than they have to.',
    ],
    commonIntro: 'On Riverside’s low riverfront lots with older plumbing, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'My Riverside basement stays damp — how do you know if it’s a leak or the river?', a: 'On Riverside’s low river bottomland we use moisture readings and acoustic detection to separate a leaking pipe from high groundwater, so we only repair what is actually leaking.' }],
  },
  'east-price-hill': {
    intro: 'Hearing water run with every tap off, or watching a stain grow in an East Price Hill home? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, with dense early-1900s housing around Warsaw Avenue and the Incline District — two- and three-story frame homes and brick two-families built close together. That century-old plumbing, much of it original galvanized and cast iron, develops pinhole leaks inside shared walls.',
      'In tightly packed homes and two-families, a leak in one unit can soak into the next, so finding the exact source matters. We use acoustic sensors and thermal imaging to trace the leak to one wall cavity or floor rather than opening several, and the hillside grade means a slow leak can track downhill before it shows.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak shared between units in an East Price Hill two-family?', a: 'Yes. In the two-families around Warsaw Avenue we use acoustic and thermal tools to pinpoint which unit and which line the leak is in, so we open only the right wall rather than guessing across the building.' }],
  },
  'west-price-hill': {
    intro: 'Water bill higher than it should be in West Price Hill, with no leak you can see? Our licensed plumbers find hidden leaks with moisture meters, thermal imaging, and pipe cameras along Glenway Avenue. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. The plumbing in those mid-century houses is many decades old, and original galvanized supply lines closing up with corrosion are a steady source of hidden pinhole leaks.',
      'Homes from that era often sit on slabs or over basements where a supply-line leak can run unseen, so we use acoustic sensors to listen along the line and thermal imaging to spot the warm or wet track of a leak. We pinpoint it before opening a wall or floor.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you locate a slab leak in a West Price Hill home without breaking the floor first?', a: 'Yes. In the 1920s-to-1950s homes off Glenway Avenue we use acoustic sensors and thermal imaging to pinpoint a slab or supply-line leak, so we open only the spot over the leak.' }],
  },
  'lower-price-hill': {
    intro: 'Musty smell or a creeping stain in a Lower Price Hill rowhouse? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools through the historic streets around State Avenue. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, most still running on original galvanized and cast-iron plumbing that leaks at corroded joints behind thick masonry.',
      'The low-lying valley stays damp when Mill Creek and the river run high, which can mask a slow leak in a basement or wall. We use moisture meters and acoustic detection to tell a leaking pipe from valley dampness and find the source without tearing into historic brick.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses down in the valley, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak in a Lower Price Hill brick rowhouse without damaging the masonry?', a: 'Yes. In the historic rowhouses around State Avenue we pinpoint leaks with acoustic and moisture tools first, so we open only the small area over the source and protect the original brick and plaster.' }],
  },
  'over-the-rhine': {
    intro: 'Water staining a ceiling or running where it shouldn’t in an Over-the-Rhine building? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools around Findlay Market and Vine Street. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate buildings in the country — brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. Buildings that old run on a patchwork of brittle cast-iron stacks and galvanized risers that leak at aging joints.',
      'Many are now split into apartments and condos on shared lines, so a leak above can show up two floors down, and finding the true source is half the job. We use acoustic sensors, thermal imaging, and pipe cameras to trace the leak to one stack or unit before opening any wall.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'A leak is showing in a lower unit in my OTR building — how do you find where it starts?', a: 'In Over-the-Rhine’s converted multi-units we use thermal imaging and acoustic detection to trace a leak up through shared stacks to its actual source, so we open the right wall and not several.' }],
  },
  'downtown': {
    intro: 'Leak showing up in a downtown condo or loft and no obvious source? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures between the river and Over-the-Rhine. The plumbing ranges from modern stacked risers in towers to original lines in early-1900s buildings turned residential — and in both, a leak several floors up travels fast and far before it shows.',
      'Finding where the water actually starts is the priority in a stacked building, so we use thermal imaging and acoustic sensors to trace the leak through floors and shared lines to one source. That lets us coordinate a clean shutoff and a targeted repair rather than opening multiple units.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak in a downtown high-rise without opening every floor?', a: 'Yes. In downtown towers and loft conversions we use thermal imaging and acoustic detection to trace a leak through the stack to its source, then coordinate access and shutoff for a single targeted repair.' }],
  },
  'west-end': {
    intro: 'Unexplained damp spot or a rising water bill in the West End? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools around TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing. The older brick homes carry decades-old galvanized and cast-iron plumbing that leaks at corroded joints hidden behind walls.',
      'The low ground near the Mill Creek basin keeps basements damp, which can hide a slow supply-line leak, so we use moisture meters and acoustic detection to separate a leak from groundwater and pinpoint the source. We open only what we need to reach it.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'How do you find a leak in an older West End brick home near Mill Creek?', a: 'In the West End’s older brick homes we use acoustic and moisture tools to tell a leaking pipe from Mill Creek-basin dampness, then pinpoint the source so the repair stays small.' }],
  },
  'mount-adams': {
    intro: 'Hearing water run or seeing a stain spread in a Mount Adams rowhouse? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools across the steep hilltop streets. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. That century-old housing carries old supply and drain lines that develop hidden leaks behind plaster and inside shared walls.',
      'The steep terrain means a slow leak can track downhill through a wall or foundation before it surfaces, so finding the true origin matters. We use acoustic sensors and thermal imaging to pinpoint the source in tightly built rowhouses and open only the spot over it.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a hidden leak in a Mount Adams rowhouse without opening several walls?', a: 'Yes. In the hill’s packed 19th-century rowhouses we use acoustic and thermal tools to pinpoint the leak to one wall cavity before opening anything, even on the steep, tight streets.' }],
  },
  'mount-auburn': {
    intro: 'Stain on the ceiling or a water bill that won’t add up in a Mount Auburn home? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools just north of downtown. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. Those Victorian-era houses carry some of the oldest plumbing in the city — original cast-iron drains and galvanized supply lines that leak as they corrode.',
      'In subdivided houses, a leak can travel between units before anyone spots it, so pinpointing the source is the first step. We use acoustic sensors and thermal imaging to trace a leak to one line in these large old homes and open only what we must.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you locate a leak in a subdivided Mount Auburn mansion without tearing into it?', a: 'Yes. In Mount Auburn’s divided Victorian homes we use acoustic and thermal tools to trace a leak to the exact unit and line, so we open the right spot rather than several.' }],
  },
  'clifton': {
    intro: 'Musty smell or an unexplained damp patch in a Clifton home? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools around Ludlow Avenue and the Gaslight District. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Those big older houses have plenty of original plumbing still in service, where aging supply lines develop pinhole leaks behind plaster and trim.',
      'A fair number are now rentals near campus, where a slow leak can go unreported until it stains a ceiling, so finding it early matters. We use moisture meters, acoustic sensors, and thermal imaging to pinpoint the source without opening the original woodwork these homes are known for.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak in a large older Clifton home without damaging the woodwork?', a: 'Yes. In Clifton’s Victorian and early-1900s homes we pinpoint the leak with acoustic and moisture tools first, so we open only the spot over the source and protect original trim and plaster.' }],
  },
  'corryville': {
    intro: 'Water bill higher than usual in a Corryville rental or home, with no leak in sight? Our licensed plumbers find hidden leaks with acoustic, thermal, and camera tools around the Short Vine corridor near UC. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. With so much older housing under heavy rental use, aging supply lines develop hidden leaks inside walls that often go unnoticed until they stain a ceiling below.',
      'Because units share walls and stacks here, a leak in one can surface in another, so tracing the true source is essential. We use acoustic sensors and thermal imaging to pinpoint the leak to one line before opening any wall.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'A leak is showing in a downstairs Corryville unit — can you find where it starts?', a: 'Yes. Near the Short Vine corridor we use acoustic and thermal tools to trace a leak through shared walls and stacks to its source, so the right unit and line get opened.' }],
  },
  'northside': {
    intro: 'Damp spot or a running-water sound you can’t place in a Northside home? Our licensed plumbers pinpoint hidden leaks with moisture meters, thermal imaging, and acoustic sensors around Hamilton Avenue. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Original galvanized and cast-iron plumbing is common in housing this old, and it leaks at corroded joints hidden behind walls and under floors.',
      'The low ground near Mill Creek keeps lower-lying basements damp, which can mask a slow supply-line leak, so we use moisture meters and acoustic detection to separate a leak from groundwater and find the source. We open only what we need to reach it.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'How do you tell a pipe leak from Mill Creek dampness in a Northside basement?', a: 'In Northside’s lower-lying homes near Mill Creek we use moisture readings and acoustic detection to separate a leaking supply line from groundwater, then pinpoint the actual source.' }],
  },
  'college-hill': {
    intro: 'Water bill climbing or a stain forming in a College Hill home? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools along Hamilton Avenue and Belmont. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes and mid-century houses. In homes this age, slowly corroding galvanized supply lines develop pinhole leaks that hide inside walls and under floors for weeks.',
      'The mix of housing eras means leaks turn up in basements, slabs, and crawl spaces alike, so we adapt the tools to the home — acoustic sensors to listen along supply lines, thermal imaging to spot a wet track, and a camera for the drains. We pinpoint the source before opening anything.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a hidden supply-line leak in a College Hill home without guesswork?', a: 'Yes. In College Hill’s older and mid-century homes we use acoustic and thermal tools to pinpoint a corroded supply-line leak, so we open only the spot over the source.' }],
  },
  'walnut-hills': {
    intro: 'Leak surfacing in a Walnut Hills home or apartment with no clear source? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Its century-old housing — much of it now split into units — runs on aging cast-iron and galvanized plumbing that leaks at corroded joints inside walls.',
      'In multi-unit buildings a leak can surface in an apartment below the one it started in, so finding the true source is the first step. We use acoustic sensors and thermal imaging to trace the leak to one line and open only the right wall.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'A leak is showing in one Walnut Hills apartment — can you find where it starts?', a: 'Yes. In Walnut Hills’ subdivided buildings we use acoustic and thermal tools to trace a leak through shared walls to its source, so we open the right unit and line.' }],
  },
  'east-walnut-hills': {
    intro: 'Stain spreading or a musty smell in an East Walnut Hills home? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools around Woodburn Avenue and DeSales Corner. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses often still carry original plumbing, where corroded galvanized lines and aging drains leak quietly behind plaster.',
      'In homes with original woodwork and finished spaces, a hidden leak can do real damage before it shows, so pinpointing it early matters. We use moisture meters and thermal imaging to find the source without opening the original details these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak in a stately East Walnut Hills home without damaging the woodwork?', a: 'Yes. Around Woodburn Avenue we pinpoint leaks with moisture and thermal tools before opening anything, so we protect the original trim and plaster these homes are known for.' }],
  },
  'avondale': {
    intro: 'Water bill higher than it should be in an Avondale home or apartment? Our licensed plumbers find hidden leaks with acoustic, thermal, and camera tools near the hospitals and the zoo. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. Much of the housing is older, densely built, and under heavy rental use, so aging supply lines develop hidden leaks inside walls that go unnoticed.',
      'Because the housing is dense and often shared, a leak in one wall can soak the next, so finding the true source is the priority. We use acoustic sensors and thermal imaging to pinpoint the leak to one line before opening any wall.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you locate a hidden leak in an older Avondale apartment building?', a: 'Yes. In Avondale’s dense, older buildings near the hospitals we use acoustic and thermal tools to trace a leak to its source, so the right wall and line get opened rather than several.' }],
  },
  'hyde-park': {
    intro: 'Damp spot in a finished basement or a water bill that won’t settle in Hyde Park? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools around Hyde Park Square and Erie Avenue. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. These big older homes are exactly where a hidden leak or a failing supply line can do expensive damage to finished basements and original details before it is noticed.',
      'With mature trees over old sewer laterals and aging supply lines inside the walls, the source is rarely where the stain shows, so we use acoustic sensors, thermal imaging, and a pipe camera to pinpoint it. We open only what we need to reach the leak.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak in a Hyde Park home with a finished basement without tearing it up?', a: 'Yes. Around Hyde Park Square we use acoustic and thermal tools to pinpoint the leak before opening anything, so a finished basement and original details stay intact.' }],
  },
  'oakley': {
    intro: 'Unexplained wet spot or a rising water bill in an Oakley bungalow? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools around Oakley Square and Madison Road. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows were built with galvanized supply lines and cast-iron drains now well past their prime, so corrosion leaks hide inside walls and under floors.',
      'Bungalows often put plumbing in tight crawl spaces and slab areas where a slow leak runs unseen, so we use acoustic sensors to listen along the line and thermal imaging to spot the wet track. We pinpoint the source before opening a wall or floor.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak under an Oakley bungalow’s slab or crawl space without digging blind?', a: 'Yes. In Oakley’s early-1900s bungalows we use acoustic sensors and thermal imaging to pinpoint a slab or crawl-space leak, so we open only the spot over the source.' }],
  },
  'mount-lookout': {
    intro: 'Hearing water run or seeing a stain in a Mount Lookout home? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes carry decades-old plumbing where aging supply lines develop pinhole leaks behind walls and under floors.',
      'The hillside grade means a slow leak can track downhill through a wall or basement before it surfaces, so finding the true origin matters. We use acoustic sensors and thermal imaging to pinpoint the source rather than guessing from where the water appears.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find where a leak starts in a hilly Mount Lookout home?', a: 'Yes. On Mount Lookout’s hilly streets we use acoustic and thermal tools to trace a leak back to its source rather than the spot it surfaces, so the repair stays targeted.' }],
  },
  'columbia-tusculum': {
    intro: 'Musty smell or a damp patch in a Columbia-Tusculum home near the river? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools in Cincinnati’s oldest neighborhood. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful Painted Ladies — restored Victorian homes — on the east side near the Ohio River. The age of those Victorian and early homes means original plumbing well past its service life, leaking at corroded joints behind plaster.',
      'The low riverside ground keeps basements damp when the river runs high, which can mask a slow supply-line leak, so we use moisture meters and acoustic detection to separate a leak from groundwater. We pinpoint the source without damaging historic interiors.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'How do you tell a pipe leak from river dampness in a Columbia-Tusculum basement?', a: 'In this riverside neighborhood we use moisture readings and acoustic detection to separate a leaking supply line from high groundwater, then pinpoint the source without harming the home’s historic interior.' }],
  },
  'mount-washington': {
    intro: 'Water bill creeping up or a stain forming in a Mount Washington home? Our licensed plumbers find hidden leaks with acoustic, thermal, and camera tools along Beechmont Avenue. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. In homes of that era, original galvanized supply lines corrode and develop pinhole leaks hidden inside walls and under floors.',
      'The range of housing means leaks turn up in basements, slabs, and crawl spaces, so we match the tools to the home — acoustic sensors along supply lines, thermal imaging for a wet track, and a camera for the drains. We pinpoint the source before opening anything.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you locate a hidden leak in a Mount Washington home without opening walls blind?', a: 'Yes. Along Beechmont Avenue we use acoustic and thermal tools to pinpoint the leak first, so we open only the spot over the source.' }],
  },
  'madisonville': {
    intro: 'Unexplained damp spot or a water bill that won’t add up in Madisonville? Our licensed plumbers pinpoint hidden leaks with acoustic, thermal, and camera tools around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses run on aging galvanized and cast-iron plumbing that leaks at corroded joints hidden behind walls and under floors.',
      'In a neighborhood mixing century-old homes with newer infill, a leak can hide in a slab, a crawl space, or an old wall, so we adapt the tools to the home. Acoustic sensors and thermal imaging let us pinpoint the source before opening anything.',
    ],
    commonIntro: 'In Madisonville’s older homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a hidden leak in an older Madisonville home without guesswork?', a: 'Yes. Around Madison Road we use acoustic and thermal tools to pinpoint a leak in aging galvanized or cast-iron plumbing, so we open only the spot over the source.' }],
  },
  'pleasant-ridge': {
    intro: 'Stain spreading or a running-water sound in a Pleasant Ridge home? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those older single- and two-family homes carry decades-old plumbing, where corroded galvanized lines and aging drains leak inside shared walls.',
      'In a two-family, a leak in one unit can soak the other, so finding the exact source matters. We use acoustic sensors and thermal imaging to trace the leak to one line and open only the right wall.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak shared between units in a Pleasant Ridge two-family?', a: 'Yes. In the brick two-families along Montgomery Road we use acoustic and thermal tools to pinpoint which unit and line the leak is in, so we open only the right wall.' }],
  },
  'westwood': {
    intro: 'Water bill higher than it should be across a Westwood home? Our licensed plumbers find hidden leaks with acoustic, thermal, and camera tools along Harrison Avenue and beyond. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, the common thread is aging plumbing — galvanized supply lines closing up with corrosion and developing hidden pinhole leaks.',
      'Such a wide range of housing eras means leaks turn up in slabs, basements, and crawl spaces alike, so we match the tools to the home. Acoustic sensors and thermal imaging let us pinpoint the source before opening a wall or floor.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a hidden leak in a Westwood home without tearing into the walls?', a: 'Yes. Across Westwood’s older and mid-century homes we use acoustic and thermal tools to pinpoint the leak first, so we open only the spot over the source.' }],
  },
  'norwood': {
    intro: 'Damp spot or a water bill that won’t settle in a Norwood home? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools around Surrey Square and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing runs on corroded galvanized lines and aging cast-iron drains that leak inside shared walls on small lots.',
      'With homes built close together, a leak in one wall can soak the next, so pinpointing the true source matters. We use acoustic sensors and thermal imaging to trace the leak to one line before opening any wall.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a leak in a closely built Norwood two-family without opening several walls?', a: 'Yes. In Norwood’s dense early-1900s homes we use acoustic and thermal tools to pinpoint the leak to one line and wall, so the repair stays targeted.' }],
  },
  'blue-ash': {
    intro: 'Higher water bill or a damp spot you can’t explain in a Blue Ash home? Our licensed plumbers find hidden leaks with acoustic, thermal, and camera tools across this northeast-side city. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so worn supply lines and aging fittings develop hidden leaks behind walls and under slabs.',
      'Many homes sit on slabs or over basements where a supply-line leak can run unseen, so we use acoustic sensors to listen along the line and thermal imaging to spot the wet track. We pinpoint the source at homes and businesses alike before opening a wall or floor.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a slab leak in a Blue Ash home without breaking up the floor first?', a: 'Yes. In Blue Ash’s mid-century homes and subdivisions we use acoustic sensors and thermal imaging to pinpoint a slab or supply-line leak, so we open only the spot over the source.' }],
  },
  'montgomery': {
    intro: 'Stain spreading or a water bill that won’t add up in a Montgomery home? Our licensed plumbers locate hidden leaks with acoustic, thermal, and camera tools around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The plumbing spans a wide range — century-old lines in the historic core and decades-old supply lines in the subdivisions — and both develop hidden leaks as they age.',
      'Because the housing ranges from 19th-century structures to slab-built subdivisions, a leak can hide in an old wall, a finished basement, or under a slab, so we match the tools to the home. Acoustic sensors and thermal imaging let us pinpoint the source before opening anything.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, the hidden leaks we trace most often show up as:',
    localFaqs: [{ q: 'Can you find a hidden leak in an older Montgomery home without damaging it?', a: 'Yes. From the historic district to the subdivisions, we use acoustic and thermal tools to pinpoint the leak first, so we open only the spot over the source.' }],
  },
};
