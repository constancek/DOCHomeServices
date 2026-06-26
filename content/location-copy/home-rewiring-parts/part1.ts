export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Sedamsville home? Our licensed electricians handle partial and whole-home rewiring — code-compliant and permitted — for homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, sitting between Riverside and Sayler Park, with housing that climbs the hillside above River Road and dates to the late 1800s and early 1900s. Homes that old were frequently wired with knob-and-tube that has no ground and cannot safely carry a modern load, which is why rewiring is common here.',
      'As families add central air, electronics, and larger appliances to these century-old homes, that original wiring overloads and the breakers trip. We replace it with grounded copper, update the panel where needed, pull the permit, and bring the system up to current code.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes with original knob-and-tube wiring, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Does my century-old Sedamsville home still have knob-and-tube wiring?', a: 'Many late-1800s and early-1900s Sedamsville homes do, and it has no ground for modern appliances. We evaluate the system and replace it with code-compliant grounded copper, partially or whole-home.' }],
  },
  'sayler-park': {
    intro: 'Two-prong outlets or knob-and-tube wiring in a Sayler Park home? Our licensed electricians rewire partial and whole-home — permitted and to code — from the riverfront streets to the homes up the hill. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before Cincinnati annexed it in the early 1900s, and it still reads that way, with rows of Victorian and early-1900s frame houses on tree-lined streets.',
      'The original wiring in those century-old frame houses was run for a few lights and outlets, not central air, electronics, and electric appliances. We pull out knob-and-tube and ungrounded two-prong circuits, replace them with grounded copper, pull the permit, and bring the whole system up to code.',
    ],
    commonIntro: 'In Sayler Park’s century-old Victorian and early-1900s frame houses, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire homes in Sayler Park even though it is on the far west edge of the city?', a: 'Yes. Sayler Park is well within our service area, river streets included. We replace knob-and-tube and ungrounded wiring with code-compliant grounded copper and complete every job permitted.' }],
  },
  'riverside': {
    intro: 'Knob-and-tube wiring or an old fuse panel in a Riverside home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — for the homes along River Road. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. Together with Sedamsville it forms one of the oldest riverfront communities on the city’s west side.',
      'Housing this old often still runs on knob-and-tube or early ungrounded wiring that has no place for the grounded, three-prong outlets modern appliances need. We replace those circuits with grounded copper, update the panel where the wiring ties in, and bring everything up to current code under permit.',
    ],
    commonIntro: 'In Riverside’s old riverfront homes along River Road, the rewiring work we do most often is:',
    localFaqs: [{ q: 'My Riverside home has no grounded outlets — can you fix that?', a: 'Yes. Older homes along River Road frequently have ungrounded two-prong outlets fed by knob-and-tube. We rewire the circuits with grounded copper and bring the system up to code, partially or whole-home.' }],
  },
  'east-price-hill': {
    intro: 'Knob-and-tube wiring or two-prong outlets in an East Price Hill home? Our licensed electricians rewire partial and whole-home — permitted and to code — for the hilltop streets around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats — the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing: two- and three-story frame homes and brick two-families built close together.',
      'That dense, century-old housing stock is exactly where old wiring becomes a safety problem. Original knob-and-tube and ungrounded circuits sit behind shared walls in the two-families, and the loads from modern appliances overwhelm wiring never built for them. We rewire with grounded copper, isolating units where needed, and complete the work to code under permit.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire the older two-family homes common in East Price Hill?', a: 'Yes. We rewire the multi-unit and two-family homes around Warsaw Avenue regularly, replacing knob-and-tube and ungrounded circuits with code-compliant grounded copper, and we can work one unit without disrupting the whole building.' }],
  },
  'west-price-hill': {
    intro: 'Aluminum wiring or an old fuse panel in a West Price Hill home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — for the neighborhoods along Glenway Avenue. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but "newer" here still means wiring that is many decades old.',
      'In homes from that era we routinely find early ungrounded circuits, two-prong outlets, and undersized service that struggles with central air and modern electronics. We replace aging wiring with grounded copper, upgrade the panel where the circuits land, and bring the system up to current code under permit.',
    ],
    commonIntro: 'In West Price Hill’s 1920s-through-1950s single-family homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'My mid-century West Price Hill home still has two-prong outlets — should I rewire?', a: 'Often yes. Homes from the 1920s through 1950s near Glenway Avenue frequently have ungrounded circuits that modern appliances have outgrown. We rewire with grounded copper and complete the work to code, partial or whole-home.' }],
  },
  'lower-price-hill': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Lower Price Hill rowhouse? Our licensed electricians rewire partial and whole-home — permitted and to code — for the historic streets around State Avenue. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses — beautiful, and full of original wiring.',
      'Those mid-1800s rowhouses were built long before modern electrical codes, so many still run on knob-and-tube with no ground and circuits never sized for today’s appliances. We replace that wiring with grounded copper, working carefully around original brick and woodwork, and bring it up to code under permit.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses around State Avenue, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire the old brick rowhouses in Lower Price Hill?', a: 'Yes. We rewire the historic 19th-century rowhouses around State Avenue regularly, replacing knob-and-tube with code-compliant grounded copper while protecting original features.' }],
  },
  'over-the-rhine': {
    intro: 'Knob-and-tube wiring or two-prong outlets in an Over-the-Rhine building? Our licensed electricians rewire partial and whole-home — permitted and to code — for the historic blocks around Findlay Market and Vine Street. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s.',
      'Buildings that old, many now split into apartments and condos, run on a patchwork of original and retrofitted wiring: knob-and-tube, ungrounded circuits, and shared lines where one overloaded run can affect several units. We rewire with grounded copper, isolating units as needed, and complete the work to code under permit.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire multi-unit buildings in Over-the-Rhine?', a: 'Yes. OTR is full of historic buildings split into apartments and condos with original knob-and-tube wiring. We rewire with code-compliant grounded copper and can work one unit without shutting power to the whole building.' }],
  },
  'downtown': {
    intro: 'Old ungrounded wiring or an aging panel in a downtown loft or condo? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'In the early-1900s buildings turned residential, original wiring was never run for the electronics and appliances a modern unit uses, and ungrounded circuits are common. We rewire those units with grounded copper, coordinate access and shutoffs in the building, and complete the work to current code under permit.',
    ],
    commonIntro: 'In downtown’s lofts, condos, and older commercial conversions, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Can you rewire a unit in a downtown loft or older converted building?', a: 'Yes. We rewire units in converted early-1900s buildings regularly, replacing ungrounded circuits with code-compliant grounded copper, and we coordinate access so the rest of the building is not disrupted.' }],
  },
  'west-end': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a West End home? Our licensed electricians rewire partial and whole-home — permitted and to code — around TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. It holds historic Italianate rowhouses and brick homes alongside mid-century housing, with newer development now mixed in.',
      'The older brick homes here carry decades-old wiring — knob-and-tube and ungrounded circuits that have no ground for modern appliances. We replace it with grounded copper, update the panel where the circuits tie in, and bring the system up to code under permit.',
    ],
    commonIntro: 'In the West End’s historic rowhouses and older brick homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'How do I know if my West End home needs rewiring?', a: 'Two-prong outlets, frequent tripping, and knob-and-tube wiring are the usual signs in the older homes near Linn Street. We evaluate the system and replace what is needed with code-compliant grounded copper.' }],
  },
  'mount-adams': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Mount Adams rowhouse? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — across the steep, narrow streets of the hilltop. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes.',
      'The age of that housing is what drives rewiring here: century-old rowhouses still carry knob-and-tube and ungrounded circuits never built for today’s loads. We replace them with grounded copper, work around the tight access the hill is known for, and complete the job to code under permit.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Can you rewire a Mount Adams rowhouse on the steep, narrow streets?', a: 'Yes. We rewire on the hill regularly and come prepared for the tight access. We replace knob-and-tube and ungrounded circuits with code-compliant grounded copper, partial or whole-home.' }],
  },
  'mount-auburn': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Mount Auburn home? Our licensed electricians rewire partial and whole-home — permitted and to code — across one of Cincinnati’s oldest hilltop neighborhoods. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine. It is lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Those Victorian-era homes carry some of the oldest wiring in the city — original knob-and-tube and ungrounded circuits that fail to ground modern appliances and overload under today’s use. In subdivided houses, one overloaded run can affect several units. We rewire with grounded copper and complete the work to code under permit.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Does my grand old Mount Auburn home still have knob-and-tube wiring?', a: 'Many of the neighborhood’s 19th-century homes and subdivided mansions do, and it has no ground for modern appliances. We evaluate the system and rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'clifton': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Clifton home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — for the Gaslight District and the homes around Ludlow Avenue. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Many of those big, older houses have been here for over a century with plenty of original wiring still in service, and a fair number are now rentals near campus where overloaded knob-and-tube and ungrounded outlets become a real safety concern. We rewire with grounded copper and bring the system up to code under permit.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire student rentals and older homes near UC in Clifton?', a: 'Yes. We rewire the older homes and rentals throughout Clifton and the university area, replacing knob-and-tube and ungrounded circuits with code-compliant grounded copper, partial or whole-home.' }],
  },
  'corryville': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Corryville home? Our licensed electricians rewire partial and whole-home — permitted and to code — across the Short Vine area near UC. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals.',
      'With so much older, densely packed housing turned into rentals, the original wiring takes heavy use on circuits never sized for modern electronics and appliances. Knob-and-tube and ungrounded outlets are common, and shared walls mean one overloaded run can affect a neighbor. We rewire with grounded copper and complete the work to code under permit.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Should an older Corryville rental near UC be rewired?', a: 'Often yes. The early-1900s homes and rentals around Short Vine frequently run on knob-and-tube or ungrounded circuits that heavy modern use has outgrown. We rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'northside': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Northside home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — for the homes around Hamilton Avenue. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'The age of the housing means original knob-and-tube and ungrounded wiring is common, with circuits never built for central air, electronics, and modern appliances. We replace that wiring with grounded copper, update the panel where the circuits land, and bring the system up to code under permit.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes near Hamilton Avenue, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Does my late-1800s Northside home still have knob-and-tube wiring?', a: 'Many of the older homes along Hamilton Avenue do, and it has no ground for modern appliances. We evaluate the system and rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'college-hill': {
    intro: 'Aluminum wiring or two-prong outlets in a College Hill home? Our licensed electricians rewire partial and whole-home — permitted and to code — for the homes along Hamilton Avenue and Belmont. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district.',
      'That spread of housing means a spread of wiring problems — knob-and-tube and ungrounded circuits in the early-1900s homes, and aluminum branch wiring with loose, heat-prone connections in the mid-century houses. We replace both with grounded copper and bring the system up to current code under permit.',
    ],
    commonIntro: 'Across College Hill’s early-1900s and mid-century homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Could my mid-century College Hill home have aluminum wiring?', a: 'It is possible. Houses built in the 1960s and 1970s sometimes have aluminum branch wiring, which can loosen and overheat at connections. We evaluate it and rewire with code-compliant copper where needed.' }],
  },
  'walnut-hills': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Walnut Hills home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Its century-old housing — much of it now split into units — runs on aging knob-and-tube and ungrounded wiring that fails to ground modern appliances. In multi-unit buildings, one overloaded circuit can affect several apartments. We rewire with grounded copper, isolating units where needed, and complete the work to code under permit.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire the older apartment buildings in Walnut Hills?', a: 'Yes. Many Walnut Hills buildings are split into units with original knob-and-tube wiring. We rewire with code-compliant grounded copper and can work one apartment without cutting power to the whole building.' }],
  },
  'east-walnut-hills': {
    intro: 'Knob-and-tube wiring or two-prong outlets in an East Walnut Hills home? Our licensed electricians rewire partial and whole-home — permitted and to code — around Woodburn Avenue and DeSales Corner. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets.',
      'The large, century-old houses here often still carry original wiring, where ungrounded knob-and-tube circuits cannot serve modern electronics and appliances. We rewire with grounded copper, working carefully around the original woodwork these homes are known for, and bring everything up to code under permit.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Can you rewire a stately old East Walnut Hills home without tearing up the woodwork?', a: 'Yes. We rewire the neighborhood’s early-1900s homes regularly and route grounded copper carefully to protect original details. The work is permitted and brought up to code.' }],
  },
  'avondale': {
    intro: 'Knob-and-tube wiring or two-prong outlets in an Avondale home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — near the hospitals and the zoo. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'A lot of Avondale’s housing is older and densely built, much of it rental, which means original wiring under heavy use. Knob-and-tube and ungrounded circuits are common, and they overload under modern appliances. We rewire with grounded copper, update panels where the circuits tie in, and complete the work to code under permit.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings near the hospitals, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Should an older Avondale rental be rewired?', a: 'Often yes. Much of Avondale’s early-1900s housing is rental running on knob-and-tube or ungrounded circuits under heavy use. We rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'hyde-park': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Hyde Park home? Our licensed electricians rewire partial and whole-home — permitted and to code — around Hyde Park Square and Erie Avenue. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets.',
      'These big older homes are exactly the kind where original knob-and-tube and ungrounded wiring hides behind finished walls, with circuits never sized for today’s electronics and appliances. We rewire with grounded copper, update the panel where the wiring lands, and bring the system up to current code under permit.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Does my early-1900s Hyde Park home still have knob-and-tube wiring?', a: 'Many of the large homes around Hyde Park Square do, often hidden behind finished walls. We evaluate the system and rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'oakley': {
    intro: 'Knob-and-tube wiring or two-prong outlets in an Oakley bungalow? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — around Oakley Square and Madison Road. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'The older bungalows that fill much of Oakley were wired with early ungrounded circuits and, in the oldest, knob-and-tube — neither built for central air, electronics, and modern appliances. We replace that wiring with grounded copper, update the panel where it ties in, and bring the system up to code under permit.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'My Oakley bungalow has two-prong outlets — should I rewire?', a: 'Often yes. The early-1900s bungalows around Oakley Square frequently have ungrounded circuits modern appliances have outgrown. We rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'mount-lookout': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Mount Lookout home? Our licensed electricians rewire partial and whole-home — permitted and to code — around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets.',
      'The older homes here carry decades-old wiring — ungrounded circuits and, in the oldest, knob-and-tube that has no ground for today’s appliances and electronics. We replace it with grounded copper, update the panel where needed, and bring the system up to current code under permit.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'How do I know if my Mount Lookout home needs rewiring?', a: 'Two-prong outlets, breakers that trip, and knob-and-tube wiring are the usual signs in the older homes near Mount Lookout Square. We evaluate the system and rewire with code-compliant grounded copper as needed.' }],
  },
  'columbia-tusculum': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Columbia-Tusculum home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — across Cincinnati’s oldest neighborhood near the river. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, and is known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'The age of those Victorian and early homes is what drives rewiring here: original knob-and-tube and ungrounded circuits well past their service life, with no ground for modern appliances. We replace that wiring with grounded copper, working carefully around historic interiors, and bring it up to code under permit.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire the historic Victorian Painted Ladies in Columbia-Tusculum?', a: 'Yes. We rewire the neighborhood’s older and Painted Lady homes regularly, replacing knob-and-tube with code-compliant grounded copper while protecting original features.' }],
  },
  'mount-washington': {
    intro: 'Aluminum wiring or two-prong outlets in a Mount Washington home? Our licensed electricians rewire partial and whole-home — permitted and to code — for the homes along Beechmont Avenue. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'That span of housing brings a span of wiring problems — ungrounded circuits and knob-and-tube in the early-1900s homes, and aluminum branch wiring with loose, heat-prone connections in the mid-century houses. We replace both with grounded copper and bring the system up to current code under permit.',
    ],
    commonIntro: 'Across Mount Washington’s early-1900s through mid-century homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Could my mid-century Mount Washington home have aluminum wiring?', a: 'It is possible. Homes built in the 1960s and 1970s along Beechmont Avenue sometimes have aluminum branch wiring, which can loosen and overheat. We evaluate it and rewire with code-compliant copper where needed.' }],
  },
  'madisonville': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Madisonville home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'The older houses that make up much of Madisonville run on aging wiring — ungrounded circuits and, in the oldest, knob-and-tube never built for modern appliances and electronics. We replace it with grounded copper, update the panel where it ties in, and bring the system up to code under permit.',
    ],
    commonIntro: 'In Madisonville’s early-1900s homes along Madison Road, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Does my early-1900s Madisonville home still have knob-and-tube wiring?', a: 'Some of the older homes along Madison Road do, and it has no ground for modern appliances. We evaluate the system and rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'pleasant-ridge': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Pleasant Ridge home? Our licensed electricians rewire partial and whole-home — permitted and to code — for the homes along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'Those older single- and two-family homes carry decades-old wiring — ungrounded circuits and knob-and-tube that has no ground for modern appliances. In the two-families, one overloaded circuit can affect both units. We rewire with grounded copper, isolating units where needed, and complete the work to code under permit.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and brick two-families, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire the two-family homes common in Pleasant Ridge?', a: 'Yes. We rewire the brick two-families throughout Pleasant Ridge, replacing knob-and-tube and ungrounded circuits with code-compliant grounded copper, and we can work one unit without cutting power to the other.' }],
  },
  'westwood': {
    intro: 'Knob-and-tube or aluminum wiring in a Westwood home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — across Cincinnati’s largest neighborhood along Harrison Avenue. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Across that range of older housing, the common thread is aging wiring — knob-and-tube and ungrounded circuits in the historic and early-1900s homes, and aluminum branch wiring in some mid-century houses. We replace both with grounded copper and bring the system up to current code under permit.',
    ],
    commonIntro: 'Across Westwood’s historic, early-1900s, and mid-century homes, the rewiring work we do most often is:',
    localFaqs: [{ q: 'My older Westwood home near the Town Hall has two-prong outlets — should I rewire?', a: 'Often yes. The historic and early-1900s homes along Harrison Avenue frequently run on ungrounded circuits or knob-and-tube. We rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'norwood': {
    intro: 'Knob-and-tube wiring or two-prong outlets in a Norwood home? Our licensed electricians rewire partial and whole-home — permitted and to code — around Surrey Square and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'That tightly packed, century-old housing is exactly where old wiring becomes a fire and shock concern: knob-and-tube and ungrounded circuits on small lots, with shared walls in the two-families. We rewire with grounded copper, isolating units where needed, and complete the work to code under permit.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and brick two-families, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Does my early-1900s Norwood home still have knob-and-tube wiring?', a: 'Many of Norwood’s century-old homes and two-families do, and it has no ground for modern appliances. We evaluate the system and rewire with code-compliant grounded copper, partial or whole-home.' }],
  },
  'blue-ash': {
    intro: 'Aluminum wiring or an aging panel in a Blue Ash home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — for homes across this northeast-side city. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'Even the "newer" housing here is now decades old, and the mid-century homes built in the 1960s and 1970s sometimes carry aluminum branch wiring that loosens and overheats at connections. We rewire affected circuits with copper, update the panel where the wiring lands, and bring the system up to current code under permit.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and older subdivisions, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Could my 1960s or 1970s Blue Ash home have aluminum wiring?', a: 'It is possible. Mid-century homes from that era sometimes have aluminum branch wiring, which can loosen and overheat at connections. We evaluate it and rewire with code-compliant copper where needed.' }],
  },
  'montgomery': {
    intro: 'Knob-and-tube or aluminum wiring in a Montgomery home? Our licensed electricians handle partial and whole-home rewiring — permitted and to code — around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'That range spans a range of wiring problems — knob-and-tube and ungrounded circuits in the 19th-century structures of the historic core, and aluminum branch wiring in some of the decades-old subdivisions. We replace both with grounded copper and bring the system up to current code under permit.',
    ],
    commonIntro: 'Across Montgomery’s 19th-century historic homes and established subdivisions, the rewiring work we do most often is:',
    localFaqs: [{ q: 'Do you rewire the 19th-century homes in Montgomery’s historic district?', a: 'Yes. We rewire the older structures in the historic core regularly, replacing knob-and-tube with code-compliant grounded copper while protecting original features.' }],
  },
};
