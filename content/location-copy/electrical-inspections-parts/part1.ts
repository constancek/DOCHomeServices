export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Buying an older Sedamsville home, or want reassurance your wiring is safe? Our licensed electricians inspect the panel, wiring, and grounding and give you a written report, for homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is one of Cincinnati’s historic riverside neighborhoods on the west side, sitting between Riverside and Sayler Park. Much of its housing climbs the hillside above River Road and dates to the late 1800s and early 1900s, which means an inspection often turns up ungrounded circuits, an old fuse panel, or knob-and-tube the owner never knew about.',
      'With home sales common in a historic neighborhood like this, a pre-purchase inspection gives buyers a clear picture before closing. We check the panel, wiring, grounding, and protective devices, then hand over a written report on the system’s condition.',
    ],
    commonIntro: 'In Sedamsville’s century-old homes wired to long-outdated codes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an electrical inspection before buying an older Sedamsville home?', a: 'Yes. Many late-1800s and early-1900s Sedamsville homes have outdated wiring and panels that are not obvious on a walkthrough. We inspect the system and give you a written report before you close.' }],
  },
  'sayler-park': {
    intro: 'Buying or selling a century-old frame house in Sayler Park, or just want your wiring checked after a storm off the river? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before Cincinnati annexed it in the early 1900s, and it still reads that way, with rows of Victorian and early-1900s frame houses on tree-lined streets. Wiring in homes that old predates grounding and modern protective devices, which is exactly what an inspection evaluates.',
      'The riverfront streets sit low and exposed, so after high water or a passing storm a post-storm inspection makes sense before you trust the panel again. We test the grounding, look for moisture intrusion at the service, and report on whether the system is safe to use as-is or needs work.',
    ],
    commonIntro: 'In Sayler Park’s century-old Victorian and early-1900s frame houses, an inspection most often turns up:',
    localFaqs: [{ q: 'Do you inspect homes in Sayler Park even though it is on the far west edge of the city?', a: 'Yes. Sayler Park is well within our service area, river streets included. We inspect the panel, wiring, and grounding in these century-old frame houses and give you a written report.' }],
  },
  'riverside': {
    intro: 'Buying a home along River Road in Riverside, or worried about wiring after water has been in the basement? Our licensed electricians inspect the panel, wiring, and grounding and give you a written report. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. Together with Sedamsville it forms one of the oldest riverfront communities on the city’s west side, and its older homes carry wiring and panels well behind current code.',
      'Because so many homes here sit on low Ohio River bottomland where high groundwater is a constant backdrop, the condition of grounding and the service entrance matters more than it would up on the hill. We inspect the panel, the grounding, and the protective devices, then document what we find in a written report.',
    ],
    commonIntro: 'In Riverside’s older homes on low riverfront lots, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I have the wiring inspected after water reaches a Riverside basement?', a: 'It is a sound idea. Homes on the low bottomland along River Road are prone to high groundwater, and moisture near a panel or grounding can be a hazard. We inspect the system and provide a written report on its condition.' }],
  },
  'east-price-hill': {
    intro: 'Buying one of the dense early-1900s homes around Warsaw Avenue in East Price Hill? Our licensed electricians inspect the panel, wiring, and grounding in single-family and two-family homes and provide a written report. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats — the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing: two- and three-story frame homes and brick two-families built close together, most wired long before grounding and modern panels were standard.',
      'In two-families and converted multi-units, an inspection clarifies which circuits and panels serve which unit and whether shared service is safe and to code. We check the panel, wiring, grounding, and protective devices and hand over a written report — useful for a buyer, a seller, or an owner verifying work after a renovation.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, an inspection most often turns up:',
    localFaqs: [{ q: 'Do you inspect the older two-family homes common in East Price Hill?', a: 'Yes. We inspect the multi-unit and two-family homes that fill the streets around Warsaw Avenue, check how the service is divided between units, and provide a written report on the wiring and panels.' }],
  },
  'west-price-hill': {
    intro: 'Buying a mid-century home along Glenway Avenue in West Price Hill, or adding central air to one? Our licensed electricians inspect the panel and wiring to confirm capacity and safety, with a written report. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but that still means panels and wiring many decades old and behind current code.',
      'Before a home this age takes on a new HVAC system or a large appliance, an inspection confirms the panel has the capacity and the circuits are sound. We evaluate the service size, the wiring, and the grounding, then document whether the system can carry the added load in a written report.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I have the panel inspected before adding central air to a West Price Hill home?', a: 'Yes. Many 1920s through 1950s homes near Glenway Avenue have panels that were never sized for central air. We inspect the service and circuits and give you a written report on whether they can carry the load.' }],
  },
  'lower-price-hill': {
    intro: 'Buying or restoring one of the 19th-century brick rowhouses around State Avenue in Lower Price Hill? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses — beautiful, and full of original wiring laid long before modern electrical codes.',
      'Homes from the mid-1800s frequently retain knob-and-tube, ungrounded circuits, or an old fuse panel, all of which an inspection identifies before a purchase or a restoration. We check the panel, wiring, grounding, and protective devices and hand over a written report on the system’s condition.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses wired to long-outdated codes, an inspection most often turns up:',
    localFaqs: [{ q: 'Do you inspect the old brick rowhouses in Lower Price Hill?', a: 'Yes. We inspect the historic 19th-century rowhouses around State Avenue and report on aging wiring, fuse panels, and grounding without disturbing original features.' }],
  },
  'over-the-rhine': {
    intro: 'Buying a condo or rowhouse in Over-the-Rhine, or verifying wiring after a renovation? Our licensed electricians inspect the panel, wiring, and grounding and give you a written report. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most of them built between the 1850s and 1880s. Buildings that old carry a patchwork of original and retrofitted wiring an inspection sorts out.',
      'Many of these buildings are now split into apartments and condos, and with so much renovation across OTR a post-renovation inspection confirms the work was permitted and done to code. We check the panel, wiring, grounding, and protective devices serving the unit and report on what we find.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an inspection after renovating an Over-the-Rhine condo?', a: 'Yes. OTR’s 19th-century buildings often hide a mix of original and retrofitted wiring, and a post-renovation inspection verifies the work is to code. We inspect the system and provide a written report.' }],
  },
  'downtown': {
    intro: 'Buying a downtown condo or loft, or checking the wiring in a converted older building? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. The wiring ranges from modern stacked systems in towers to original service in early-1900s buildings turned residential.',
      'In an older commercial conversion, an inspection confirms the unit’s wiring and the work behind it were done to code before you buy or after a renovation. We check the panel or sub-panel serving the unit, the circuits, the grounding, and the protective devices, then document the condition in a written report.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, an inspection most often turns up:',
    localFaqs: [{ q: 'Can you inspect the wiring in a downtown loft or condo?', a: 'Yes. We inspect units in towers and converted early-1900s buildings alike, check the panel or sub-panel serving the unit, and provide a written report on the wiring and grounding.' }],
  },
  'west-end': {
    intro: 'Buying a historic rowhouse or older home in the West End near TQL Stadium? Our licensed electricians inspect the panel, wiring, and grounding and give you a written report. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. It holds historic Italianate rowhouses and brick homes alongside mid-century housing, with newer development now mixed in — a range of eras that an inspection sorts through circuit by circuit.',
      'The older brick homes here carry decades-old wiring and panels behind current code, which a pre-purchase inspection brings into the open before closing. We check the panel, wiring, grounding, and protective devices and report on the system’s condition in writing.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an electrical inspection before buying an older West End home?', a: 'Yes. The West End’s historic Italianate rowhouses and brick homes often carry decades-old wiring that is not visible on a walkthrough. We inspect the system and give you a written report before closing.' }],
  },
  'mount-adams': {
    intro: 'Buying a 19th-century rowhouse on the Mount Adams hill, or checking your wiring after a storm on the exposed slope? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Housing that old was wired long before grounding and modern panels, which is exactly what an inspection evaluates.',
      'On an exposed hilltop like this, a post-storm inspection makes sense after weather hits the service entrance, and the home sales common on the hill make pre-purchase inspections useful too. We check the panel, wiring, grounding, and protective devices and document the condition in a written report.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I have my Mount Adams wiring inspected after a storm?', a: 'It is worth doing. The hill sits exposed, and weather can damage a service entrance on these century-old rowhouses. We inspect the panel and grounding after a storm and provide a written report.' }],
  },
  'mount-auburn': {
    intro: 'Buying a grand 19th-century home in Mount Auburn, or one divided into apartments? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine. It is lined with grand 19th-century homes and historic mansions, many now divided into apartments — buildings carrying some of the oldest wiring in the city.',
      'Victorian-era homes this old often retain ungrounded circuits, knob-and-tube, or an original fuse panel that an inspection brings to light before a purchase. In subdivided houses, we also confirm how the service is split between units, then report on the panel, wiring, and grounding in writing.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an inspection before buying a subdivided Mount Auburn home?', a: 'Yes. Mount Auburn’s grand 19th-century homes are often divided into apartments with some of the oldest wiring in the city. We inspect the system, confirm how the service is split, and give you a written report.' }],
  },
  'clifton': {
    intro: 'Buying a large Victorian or early-1900s home in Clifton, or running an older rental near campus? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Many of those big houses have stood for over a century with plenty of original wiring still in service.',
      'A fair number are now rentals near campus, where a landlord may want the wiring inspected for safety and code, and the home sales common in a neighborhood like this make pre-purchase inspections useful too. We check the panel, wiring, grounding, and protective devices and document it all in a written report.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Do you inspect the older homes and rentals near UC in Clifton?', a: 'Yes. We inspect the large Victorian and early-1900s homes throughout Clifton and the university area, including rentals, and provide a written report on the wiring and panel.' }],
  },
  'corryville': {
    intro: 'Buying or renting out one of the older homes near the Short Vine corridor in Corryville? Our licensed electricians inspect the panel, wiring, and grounding and give you a written report. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Housing that age was wired long before modern panels and grounding, which is what an inspection looks at.',
      'With so much of the older stock turned into rentals near campus, an inspection helps an owner confirm the wiring is safe and to code, and helps a buyer know what they are taking on. We check the panel, wiring, grounding, and protective devices and report on the condition in writing.',
    ],
    commonIntro: 'In Corryville’s dense, early-1900s housing near campus, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I have an older Corryville rental inspected for electrical safety?', a: 'Yes. Much of Corryville’s early-1900s housing near Short Vine is now rental and carries aging wiring. We inspect the panel and circuits and give you a written report on the system’s condition.' }],
  },
  'northside': {
    intro: 'Buying a late-1800s or early-1900s home along Hamilton Avenue in Northside? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Wiring in homes this old predates grounding and modern panels, which an inspection evaluates.',
      'The lower ground near Mill Creek means moisture and grounding at the service entrance deserve a closer look, especially before a purchase or after water has been around the panel. We check the wiring, grounding, and protective devices and hand over a written report.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an inspection before buying an older Northside home?', a: 'Yes. Northside’s late-1800s and early-1900s homes often carry outdated wiring and panels, and the low ground near Mill Creek can affect grounding. We inspect the system and give you a written report.' }],
  },
  'college-hill': {
    intro: 'Buying a large early-1900s or mid-century home along Hamilton Avenue in College Hill? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. That range of eras means panels and wiring of widely different ages, which an inspection sorts through.',
      'In a home over 25 or 30 years old, an inspection confirms the panel, grounding, and protective devices are still sound before a purchase or before adding a major appliance. We evaluate the service and circuits and document the condition in a written report.',
    ],
    commonIntro: 'Across College Hill’s early-1900s and mid-century homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an electrical inspection before buying a College Hill home?', a: 'Yes. College Hill’s homes range from large early-1900s houses to mid-century builds, all old enough to carry outdated wiring or panels. We inspect the system and provide a written report before you close.' }],
  },
  'walnut-hills': {
    intro: 'Buying a historic home or apartment in Walnut Hills near Peebles Corner? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of that housing is now split into units carrying aging wiring well behind current code.',
      'In a multi-unit building, an inspection clarifies how the service divides and whether each unit’s wiring is safe and grounded, useful before a purchase or after renovation work. We check the panel, wiring, grounding, and protective devices and report on the condition in writing.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, an inspection most often turns up:',
    localFaqs: [{ q: 'Do you inspect the older apartment buildings in Walnut Hills?', a: 'Yes. Many Walnut Hills buildings near Peebles Corner are split into units with aging wiring. We inspect the panels and circuits, confirm how the service is divided, and provide a written report.' }],
  },
  'east-walnut-hills': {
    intro: 'Buying a stately early-1900s home or brick apartment in East Walnut Hills near DeSales Corner? Our licensed electricians inspect the panel, wiring, and grounding and give you a written report. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often still carry original wiring laid before grounding was standard.',
      'A pre-purchase inspection of a home this size catches ungrounded circuits, an old panel, or wiring hidden behind original woodwork before closing. We check the panel, wiring, grounding, and protective devices and document the condition in a written report.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an inspection before buying a large East Walnut Hills home?', a: 'Yes. The stately early-1900s homes around Woodburn Avenue often retain original wiring behind their finished spaces. We inspect the system and give you a written report before you close.' }],
  },
  'avondale': {
    intro: 'Buying or renting out an older home near the hospitals and the zoo in Avondale? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of that housing is older and densely built, much of it rental, carrying wiring and panels behind current code.',
      'An inspection helps an owner confirm an older rental’s wiring is safe and to code, and helps a buyer understand the system before closing. We check the panel, wiring, grounding, and protective devices and report on the condition in writing.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I have an older Avondale home inspected for electrical safety?', a: 'Yes. Much of Avondale’s housing near the hospitals is older and densely built, often rental, with aging wiring. We inspect the panel and circuits and provide a written report on the system.' }],
  },
  'hyde-park': {
    intro: 'Buying a large early-1900s home around Hyde Park Square, or adding a major appliance to one? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. Houses this size and age can hide outdated wiring behind finished basements and original details that an inspection brings to light.',
      'Before buying one of these homes or adding central air or a large appliance, an inspection confirms the panel has capacity and the circuits are sound. We evaluate the service, the wiring, the grounding, and the protective devices and document the condition in a written report.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an electrical inspection before buying a home near Hyde Park Square?', a: 'Yes. The large early-1900s Tudors, colonials, and foursquares around Hyde Park Square often hide outdated wiring behind finished spaces. We inspect the system and give you a written report before closing.' }],
  },
  'oakley': {
    intro: 'Buying one of the early-1900s bungalows around Oakley Square, or adding to its electrical load? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows that fill much of Oakley were wired before grounding and modern panels were standard.',
      'With home sales steady in a neighborhood like this, a pre-purchase inspection gives buyers a clear read on the wiring before closing, and an inspection also confirms capacity before adding central air or a large appliance. We check the panel, wiring, grounding, and protective devices and report on the condition in writing.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an inspection before buying an early-1900s Oakley bungalow?', a: 'Yes. The bungalows around Oakley Square were wired long before modern panels and grounding. We inspect the system and provide a written report before you close.' }],
  },
  'mount-lookout': {
    intro: 'Buying an older hilltop home near Mount Lookout Square or Ault Park, or checking wiring after a storm? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes here carry decades-old wiring and panels that an inspection evaluates against current code.',
      'On these hilly, exposed streets a post-storm inspection makes sense after weather hits the service entrance, and a pre-purchase inspection is worthwhile in a neighborhood with steady home sales. We check the panel, wiring, grounding, and protective devices and document the condition in a written report.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an inspection before buying an older Mount Lookout home?', a: 'Yes. The early-1900s and older homes around Mount Lookout Square carry decades-old wiring and panels. We inspect the system and give you a written report before closing.' }],
  },
  'columbia-tusculum': {
    intro: 'Buying or restoring one of the Painted Ladies in Columbia-Tusculum, Cincinnati’s oldest neighborhood? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, and is known for its colorful Painted Ladies — restored Victorian homes — on the east side near the Ohio River. Homes this old carry wiring well past its service life, often ungrounded or run through an old panel.',
      'The low riverside ground means moisture and grounding at the service deserve a closer look, and a pre-purchase inspection of a Victorian home brings outdated wiring into the open before closing. We check the panel, wiring, grounding, and protective devices and report on the condition in writing.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes wired to long-outdated codes, an inspection most often turns up:',
    localFaqs: [{ q: 'Do you inspect the historic Victorian homes in Columbia-Tusculum?', a: 'Yes. We inspect the neighborhood’s older and Painted Lady homes near the river, evaluate aging wiring and grounding, and provide a written report on the system.' }],
  },
  'mount-washington': {
    intro: 'Buying an early-1900s or mid-century home along Beechmont Avenue in Mount Washington? Our licensed electricians inspect the panel, wiring, and grounding and provide a written report. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Across that range, panels and wiring are decades old and may sit behind current code, which is what an inspection evaluates.',
      'In a home over 25 or 30 years old, an inspection confirms the service, grounding, and protective devices are sound before a purchase or before adding central air or a large appliance. We check the panel and circuits and document the condition in a written report.',
    ],
    commonIntro: 'Across Mount Washington’s early-1900s and mid-century homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an electrical inspection before buying a Mount Washington home?', a: 'Yes. The homes along Beechmont Avenue range from early-1900s to mid-century, all old enough to carry outdated wiring or panels. We inspect the system and give you a written report before closing.' }],
  },
  'madisonville': {
    intro: 'Buying an early-1900s home along Madison Road in Madisonville, or verifying wiring after a renovation? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of the neighborhood carry decades-old wiring and panels behind current code.',
      'With reinvestment and renovation common here, a post-renovation inspection confirms the work was permitted and done to code, and a pre-purchase inspection clarifies what an older home is carrying. We check the panel, wiring, grounding, and protective devices and report on the condition in writing.',
    ],
    commonIntro: 'In Madisonville’s older homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an inspection after renovating an older Madisonville home?', a: 'Yes. With steady reinvestment along Madison Road, a post-renovation inspection verifies the electrical work was permitted and done to code. We inspect the system and provide a written report.' }],
  },
  'pleasant-ridge': {
    intro: 'Buying an early-1900s home or brick two-family along Montgomery Road in Pleasant Ridge? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Housing that age carries decades-old wiring and panels behind current code.',
      'In a two-family, an inspection clarifies how the service splits between units and whether each is safe and grounded, useful before a purchase or after renovation. We check the panel, wiring, grounding, and protective devices and document the condition in a written report.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, an inspection most often turns up:',
    localFaqs: [{ q: 'Do you inspect the two-family homes common in Pleasant Ridge?', a: 'Yes. We inspect the brick two-families throughout Pleasant Ridge, confirm how the service is divided between units, and provide a written report on the wiring and panels.' }],
  },
  'westwood': {
    intro: 'Buying an older or mid-century home along Harrison Avenue in Westwood, Cincinnati’s largest neighborhood? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. That range means panels and wiring of widely different ages, which an inspection sorts through.',
      'In a home over 25 or 30 years old, an inspection confirms the service, grounding, and protective devices are still sound before a purchase or before adding a major appliance. We check the panel and circuits and document the condition in a written report.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an electrical inspection before buying a Westwood home?', a: 'Yes. Westwood’s housing ranges from historic homes near the Town Hall to early-1900s and mid-century houses, all old enough to carry outdated wiring. We inspect the system and give you a written report.' }],
  },
  'norwood': {
    intro: 'Buying an early-1900s home or brick two-family in Norwood, the city surrounded by Cincinnati? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing was wired long before grounding and modern panels were standard.',
      'In a two-family on a small lot, an inspection clarifies how the service divides and whether each unit is safe and grounded, useful before a purchase or after renovation. We check the panel, wiring, grounding, and protective devices and report on the condition in writing.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an inspection before buying an early-1900s Norwood home?', a: 'Yes. Norwood’s dense grid of early-1900s homes and brick two-families carries century-old wiring. We inspect the system, confirm how the service is split in two-families, and provide a written report.' }],
  },
  'blue-ash': {
    intro: 'Buying a mid-century home in Blue Ash, or adding central air or an EV charger to one? Our licensed electricians inspect the panel and wiring to confirm capacity and safety, with a written report. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so panels and wiring are well past 25 or 30 years.',
      'Before a home this age takes on central air, a large appliance, or an EV charger, an inspection confirms the panel has the capacity and the circuits are sound. We evaluate the service, wiring, grounding, and protective devices and document whether the system can carry the added load in a written report.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and aging subdivisions, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get the panel inspected before adding an EV charger in Blue Ash?', a: 'Yes. Even Blue Ash’s newer subdivisions are now decades old, and a charger draws a heavy load. We inspect the panel and circuits and give you a written report on whether they can carry it.' }],
  },
  'montgomery': {
    intro: 'Buying a home in Montgomery’s historic district, or an established home in the surrounding neighborhoods? Our licensed electricians inspect the panel, wiring, and grounding with a written report. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The wiring here spans a wide range, from century-old structures in the historic core to decades-old subdivisions, which an inspection sorts through.',
      'In a 19th-century building or a home over 25 or 30 years old, an inspection confirms the panel, grounding, and protective devices are sound before a purchase or before adding a major appliance. We check the service and circuits and document the condition in a written report.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, an inspection most often turns up:',
    localFaqs: [{ q: 'Should I get an electrical inspection before buying a home in Montgomery’s historic district?', a: 'Yes. The 19th-century buildings in Montgomery’s historic core carry some of the oldest wiring in the city. We inspect the system and provide a written report before you close.' }],
  },
};
