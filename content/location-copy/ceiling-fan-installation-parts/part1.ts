export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Wobbling ceiling fan or want one added in a Sedamsville home? Our licensed electricians mount fans to a fan-rated box and balance them for quiet operation, for homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with housing that dates to the late 1800s and early 1900s. In homes this old we often find fans hung on standard light boxes and plaster ceilings, which is what causes the wobble and noise — we anchor to a proper fan-rated box instead.',
      'Many of these homes never had fans in the bedrooms, and the hillside houses above River Road have covered porches that call for weather-rated models. We size the fan to the room, add a down rod where the ceiling is high, and wire it to your switch safely.',
    ],
    commonIntro: 'In Sedamsville’s century-old homes with plaster ceilings and non-fan-rated boxes, the work we do most often is:',
    localFaqs: [{ q: 'Can you safely hang a fan in an old Sedamsville home?', a: 'Yes. Older Sedamsville homes often have fans on boxes never rated for one. We install a fan-rated box, anchor it securely, and balance the blades for quiet, wobble-free operation.' }],
  },
  'sayler-park': {
    intro: 'Adding a ceiling fan or replacing a noisy one in Sayler Park? Our licensed electricians anchor fans to a fan-rated box and balance them, from the riverfront streets to the homes up the hill in Cincinnati’s westernmost neighborhood. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside, and was its own village — Home City — before annexation in the early 1900s. Its tree-lined streets are full of Victorian and early-1900s frame houses where fans often hang on old light boxes that were never built to carry the weight.',
      'Many of these century-old frame homes have wide front porches facing the river, which is where a weather-rated, damp-listed fan earns its keep. Indoors we add fans to bedrooms that never had one, fit a down rod where ceilings run high, and wire everything to the switch the right way.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame houses and porches near the river, the work we do most often is:',
    localFaqs: [{ q: 'Can you put a fan on my Sayler Park porch by the river?', a: 'Yes. Porches in Sayler Park call for a weather-rated fan listed for damp or wet locations. We mount it to a fan-rated box and wire it safely so it stands up to the river air.' }],
  },
  'riverside': {
    intro: 'Wobbling fan or want one added in a Riverside home along River Road? Our licensed electricians mount fans to a fan-rated box and balance the blades for quiet running. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. Together with Sedamsville it forms one of the oldest riverfront communities on the west side, so we routinely find fans hung on plain light boxes in older homes.',
      'Many homes here sit on low Ohio River bottomland with covered porches and screened areas where a damp-rated fan keeps air moving through humid summers. We anchor to a fan-rated box, add a down rod on higher ceilings, and balance each fan so it runs without the wobble that comes from the wrong mount.',
    ],
    commonIntro: 'In Riverside’s older riverfront homes and porches along River Road, the work we do most often is:',
    localFaqs: [{ q: 'My Riverside fan wobbles — can you fix it?', a: 'Yes. A wobble usually means the fan is on a box never rated for one. We swap in a fan-rated box, secure the mount, and balance the blades so it runs quiet.' }],
  },
  'east-price-hill': {
    intro: 'Need a ceiling fan hung or replaced in East Price Hill? Our licensed electricians anchor fans to a fan-rated box and balance them, for the dense streets around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, where the old Price Hill Incline once carried residents up. Its streets around Warsaw Avenue are packed with dense early-1900s housing — two- and three-story frame homes and brick two-families — where fans are often mounted on plaster ceilings using boxes never rated to hold them.',
      'In these tall, close-built homes we frequently add fans to upper-floor bedrooms that bake in summer and fit a down rod so the blades clear high ceilings. We anchor every fan to a fan-rated box and balance it, so a unit upstairs runs quiet over the rooms below.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, the work we do most often is:',
    localFaqs: [{ q: 'Do you install fans in the older two-family homes around Warsaw Avenue?', a: 'Yes. We work on the two- and three-story homes throughout East Price Hill, mounting fans to fan-rated boxes on plaster ceilings and balancing them for quiet operation in each unit.' }],
  },
  'west-price-hill': {
    intro: 'Replacing a dated fan or adding one in a West Price Hill home? Our licensed electricians mount fans to a fan-rated box and balance the blades, for the neighborhoods along Glenway Avenue. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. Fans in homes this age are often decades old themselves — noisy, slow, and frequently on boxes that were never fan-rated.',
      'We replace those tired fans with quieter, balanced models, add fans to bedrooms and finished rooms that never had one, and set them to run in reverse in winter to push warm air back down. Where ceilings are higher we fit a down rod and wire the fan to the wall switch the right way.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you replace the old noisy fan in my West Price Hill home?', a: 'Yes. We swap out dated, noisy fans for quieter balanced models, confirm the box is fan-rated, and wire the new unit to your existing switch. Many mid-century homes off Glenway need exactly that.' }],
  },
  'lower-price-hill': {
    intro: 'Hanging a fan or fixing a wobbling one in a Lower Price Hill rowhouse? Our licensed electricians anchor fans to a fan-rated box and balance them, for the historic streets around State Avenue. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, where high plaster ceilings and original boxes make fan mounting a job for an electrician, not a guess.',
      'In these mid-1800s rowhouses we anchor fans to a fan-rated box that can carry the load, add a down rod so the blades hang at the right height under tall ceilings, and balance each one for quiet running. We also add fans to rooms that never had one without disturbing the historic finishes.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses with tall plaster ceilings, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan from the high ceilings in a Lower Price Hill rowhouse?', a: 'Yes. The tall ceilings in these 19th-century rowhouses need a down rod and a properly anchored fan-rated box. We set the fan at the right height and balance it so it runs quiet.' }],
  },
  'over-the-rhine': {
    intro: 'Adding a ceiling fan or replacing one in an Over-the-Rhine apartment or rowhouse? Our licensed electricians mount fans to a fan-rated box and balance them, for the historic blocks around Findlay Market and Vine Street. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. The tall ceilings and original boxes in these buildings make a proper fan-rated mount essential.',
      'Many of these buildings are now split into apartments and condos where a fan is being added to a tall-ceilinged room for the first time. We fit a down rod so the blades hang at the right height, anchor to a fan-rated box, and balance the fan so it runs quiet above the rooms below.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings with tall ceilings, the work we do most often is:',
    localFaqs: [{ q: 'Can you add a fan to a tall-ceilinged OTR apartment?', a: 'Yes. OTR’s 19th-century rooms run high, so we use a down rod to set the blades at the right height and anchor the fan to a fan-rated box. We balance it for quiet operation.' }],
  },
  'downtown': {
    intro: 'Want a ceiling fan added or replaced in a downtown condo or loft? Our licensed electricians mount fans to a fan-rated box and balance them, across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. The converted lofts in particular often have tall ceilings and exposed structure where mounting a fan takes the right hardware.',
      'In a loft with high ceilings we fit a down rod to bring the blades to a useful height and anchor to a fan-rated box; in a tower condo we wire the fan to the switch and balance it so it runs quiet for the units nearby. Either way the work is done to code by a licensed electrician.',
    ],
    commonIntro: 'In downtown’s condos and converted lofts, the work we do most often is:',
    localFaqs: [{ q: 'Can you install a fan in a downtown loft or high-rise condo?', a: 'Yes. We work in towers and converted loft buildings, fitting a down rod where ceilings are high, anchoring to a fan-rated box, and balancing the fan for quiet running.' }],
  },
  'west-end': {
    intro: 'Hanging a fan or replacing a wobbling one in a West End home? Our licensed electricians anchor fans to a fan-rated box and balance them, for the neighborhood around TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer development. In the older brick homes, fans are often on plaster ceilings using boxes that were never rated to hold them.',
      'We anchor fans to a fan-rated box, add a down rod where rowhouse ceilings run tall, and balance each one so it runs quiet. In the newer construction mixed through the neighborhood we add fans to rooms that were wired for them but never fitted.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and newer homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you fix a wobbling fan in an older West End home?', a: 'Yes. A wobble usually traces to a box never rated for a fan. We install a fan-rated box, anchor the mount, and balance the blades for quiet running.' }],
  },
  'mount-adams': {
    intro: 'Adding a fan or replacing one in a Mount Adams rowhouse? Our licensed electricians mount fans to a fan-rated box and balance them, for the steep, narrow streets of the hilltop. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. The age of these homes means fans are often hung on original boxes and plaster ceilings that need a proper fan-rated mount.',
      'In these tall, narrow townhomes we add fans to upper-floor bedrooms, fit a down rod under high ceilings, and balance each fan so it runs quiet in close quarters. We come prepared for the hill’s tight access and do the wiring to code.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan in a tall Mount Adams townhome?', a: 'Yes. These 19th-century townhomes often have high ceilings, so we use a down rod and a fan-rated box to set the fan at the right height, then balance it for quiet running.' }],
  },
  'mount-auburn': {
    intro: 'Hanging a fan or replacing a dated one in a Mount Auburn home? Our licensed electricians anchor fans to a fan-rated box and balance them, in one of Cincinnati’s oldest hilltop neighborhoods. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. These Victorian-era homes have tall plaster ceilings and original boxes that need a proper fan-rated mount.',
      'In the larger homes we fit a down rod so blades clear the high ceilings, anchor to a fan-rated box, and balance the fan for quiet running. In subdivided houses we add fans to apartments that never had one and wire each to its own switch.',
    ],
    commonIntro: 'In Mount Auburn’s grand 19th-century homes with tall ceilings, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan from the high ceilings in a Mount Auburn home?', a: 'Yes. The Victorian-era homes here have tall plaster ceilings, so we use a down rod and an anchored fan-rated box to set the fan right, then balance it for quiet operation.' }],
  },
  'clifton': {
    intro: 'Adding a fan or replacing a wobbling one in a Clifton home near Ludlow Avenue? Our licensed electricians mount fans to a fan-rated box and balance them, across the Gaslight District. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. The high ceilings in these big older houses make a down rod and a fan-rated box the right approach for a stable, quiet fan.',
      'A fair number of these homes are now rentals near campus where a noisy, wobbling fan needs replacing. We swap in balanced models, anchor to a fan-rated box on plaster ceilings, fit a down rod where ceilings run high, and wire each fan to its switch.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes with high ceilings, the work we do most often is:',
    localFaqs: [{ q: 'Can you replace a fan in a Clifton home or student rental?', a: 'Yes. We work on the older homes and rentals throughout Clifton and the UC area, swapping dated fans for quieter balanced ones and anchoring them to a fan-rated box.' }],
  },
  'corryville': {
    intro: 'Replacing a noisy fan or adding one in a Corryville apartment near Short Vine? Our licensed electricians anchor fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. With so much older housing turned into rentals, fans here take heavy use and are often on aging boxes that were never fan-rated.',
      'We replace worn, wobbling fans with quieter balanced models, confirm the box is fan-rated before mounting, and wire each unit to its switch. In the denser buildings we balance fans carefully so a unit upstairs runs quiet over the rooms below.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the work we do most often is:',
    localFaqs: [{ q: 'Can you replace a worn-out fan in a Corryville rental near UC?', a: 'Yes. Rentals near Short Vine see heavy use, so we swap tired fans for quieter balanced ones, check the box is fan-rated, and wire the new fan to the existing switch.' }],
  },
  'northside': {
    intro: 'Hanging a fan or replacing a dated one in a Northside home near Hamilton Avenue? Our licensed electricians mount fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. In homes this age, fans are commonly hung on plaster ceilings using boxes never rated to carry one.',
      'We anchor fans to a fan-rated box, add a down rod where ceilings are high, and balance each one for quiet running. We also add fans to bedrooms that never had one and set them to run in reverse in winter to push warm air down.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you safely hang a fan in an older Northside home?', a: 'Yes. Older Northside homes often have fans on boxes never rated for one. We install a fan-rated box on the plaster ceiling, anchor it, and balance the blades for quiet running.' }],
  },
  'college-hill': {
    intro: 'Adding a fan or replacing a noisy one in a College Hill home along Hamilton Avenue? Our licensed electricians anchor fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. The bigger early-1900s homes here often have high ceilings where a down rod and a fan-rated box give a stable, quiet fan.',
      'In the mid-century houses we replace dated fans with quieter balanced models and add fans to rooms that never had one. We anchor every fan to a fan-rated box, wire it to the switch, and set it to run in reverse in cold months.',
    ],
    commonIntro: 'Across College Hill’s early-1900s and mid-century homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan on the high ceilings in an older College Hill home?', a: 'Yes. The larger early-1900s homes here often have high ceilings, so we use a down rod and a fan-rated box to set the fan right, then balance it for quiet running.' }],
  },
  'walnut-hills': {
    intro: 'Hanging a fan or replacing a wobbling one in a Walnut Hills home or apartment? Our licensed electricians mount fans to a fan-rated box and balance them, around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of this century-old housing is now split into units where fans hang on tall plaster ceilings using original boxes.',
      'We anchor fans to a fan-rated box, fit a down rod under high ceilings, and balance each one so it runs quiet over the rooms below. In multi-unit buildings we add fans to apartments that never had one and wire each to its own switch.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings with tall ceilings, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan in a Walnut Hills apartment building?', a: 'Yes. Many Walnut Hills buildings are split into units with tall plaster ceilings. We anchor the fan to a fan-rated box, fit a down rod where needed, and balance it for quiet running.' }],
  },
  'east-walnut-hills': {
    intro: 'Adding a fan or replacing a dated one in an East Walnut Hills home near Woodburn Avenue? Our licensed electricians anchor fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often have high plaster ceilings where a down rod and a fan-rated box give a stable fan.',
      'We anchor every fan to a fan-rated box, fit a down rod where ceilings run high, and balance each one for quiet running. We take care around the original woodwork these homes are known for and wire each fan to its switch.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes with high ceilings, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan on the high ceilings in an East Walnut Hills home?', a: 'Yes. These stately early-1900s homes have tall plaster ceilings, so we use a down rod and an anchored fan-rated box to set the fan right, then balance it for quiet operation.' }],
  },
  'avondale': {
    intro: 'Replacing a noisy fan or adding one in an Avondale home near the hospitals and the zoo? Our licensed electricians mount fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. Much of the housing is older and densely built, much of it rental, where fans take heavy use on boxes often never rated for one.',
      'We swap worn, wobbling fans for quieter balanced models, confirm the box is fan-rated before mounting, and add fans to apartments that never had one. In the denser buildings we balance carefully so a fan upstairs runs quiet over the rooms below.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, the work we do most often is:',
    localFaqs: [{ q: 'Can you replace a worn-out fan in an Avondale rental?', a: 'Yes. Avondale’s older rentals see heavy use, so we swap tired fans for quieter balanced ones, check the box is fan-rated, and wire the new fan to the existing switch.' }],
  },
  'hyde-park': {
    intro: 'Adding a fan or replacing a dated one in a Hyde Park home near the Square? Our licensed electricians anchor fans to a fan-rated box and balance them, around Hyde Park Square and Erie Avenue. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. These big older homes often have high ceilings and finished rooms where a down rod and a fan-rated box give a stable, quiet fan.',
      'We anchor every fan to a fan-rated box, fit a down rod under high ceilings, and balance each one for quiet running. We also fit weather-rated fans on the covered porches these homes are known for and wire each to its switch.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you put a weather-rated fan on my Hyde Park porch?', a: 'Yes. Covered porches need a fan listed for damp or wet locations. We mount it to a fan-rated box and wire it safely so it holds up outdoors near Hyde Park Square.' }],
  },
  'oakley': {
    intro: 'Replacing a wobbling fan or adding one in an Oakley bungalow near the Square? Our licensed electricians mount fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. In the older bungalows, fans are often on plaster ceilings using boxes that were never rated to carry one.',
      'We anchor fans to a fan-rated box, balance each one for quiet running, and add fans to bedrooms that never had one. In the newer development mixed through Oakley we install fans on vaulted ceilings with a down rod sized to the height.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and newer homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you fix a wobbling fan in an Oakley bungalow?', a: 'Yes. A wobble usually means the fan is on a box never rated for one. We install a fan-rated box on the plaster ceiling, anchor it, and balance the blades for quiet running.' }],
  },
  'mount-lookout': {
    intro: 'Adding a fan or replacing one in a Mount Lookout home near the Square? Our licensed electricians anchor fans to a fan-rated box and balance them, around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes carry decades-old fans, often on plaster ceilings using boxes never rated for one.',
      'In the larger houses we fit a down rod under high ceilings, anchor to a fan-rated box, and balance each fan for quiet running. We add weather-rated fans to the covered porches common on these hillside homes and wire everything to the switch.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan on the high ceilings in a Mount Lookout home?', a: 'Yes. Many of the larger homes here have high ceilings, so we use a down rod and an anchored fan-rated box to set the fan at the right height, then balance it for quiet running.' }],
  },
  'columbia-tusculum': {
    intro: 'Hanging a fan or replacing a dated one in a Columbia-Tusculum home near the river? Our licensed electricians anchor fans to a fan-rated box and balance them, in Cincinnati’s oldest neighborhood. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful Painted Ladies — restored Victorian homes — on the east side near the Ohio River. These Victorian and early homes have tall plaster ceilings where a down rod and a fan-rated box give a stable, quiet fan.',
      'We anchor fans to a fan-rated box, fit a down rod under high ceilings, and balance each one without disturbing the historic finishes these homes are known for. We also fit weather-rated fans on the porches that face the river and wire each to its switch.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan in a historic Painted Lady in Columbia-Tusculum?', a: 'Yes. We work on the neighborhood’s Victorian and Painted Lady homes, anchoring fans to a fan-rated box on tall ceilings and balancing them without damaging original features.' }],
  },
  'mount-washington': {
    intro: 'Replacing a noisy fan or adding one in a Mount Washington home along Beechmont Avenue? Our licensed electricians mount fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Fans in homes this age are often decades old and on boxes that were never rated to carry one.',
      'We replace dated, noisy fans with quieter balanced models, add fans to rooms that never had one, and set them to run in reverse in winter to push warm air down. We anchor every fan to a fan-rated box and wire it to the wall switch.',
    ],
    commonIntro: 'Across Mount Washington’s early-1900s and mid-century homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you replace an old noisy fan in my Mount Washington home?', a: 'Yes. We swap dated, noisy fans for quieter balanced models along Beechmont Avenue, confirm the box is fan-rated, and wire the new fan to your existing switch.' }],
  },
  'madisonville': {
    intro: 'Adding a fan or replacing a wobbling one in a Madisonville home near Madison Road? Our licensed electricians anchor fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. In the older houses, fans often hang on plaster ceilings using boxes that were never rated for one.',
      'We anchor fans to a fan-rated box, balance each one for quiet running, and add fans to bedrooms that never had one. In the newer infill we install fans on vaulted ceilings with a down rod sized to the height and wire each to its switch.',
    ],
    commonIntro: 'In Madisonville’s older homes and newer infill, the work we do most often is:',
    localFaqs: [{ q: 'Can you safely hang a fan in an older Madisonville home?', a: 'Yes. Older homes along Madison Road often have fans on boxes never rated for one. We install a fan-rated box on the plaster ceiling, anchor it, and balance the blades for quiet running.' }],
  },
  'pleasant-ridge': {
    intro: 'Hanging a fan or replacing a dated one in a Pleasant Ridge home along Montgomery Road? Our licensed electricians anchor fans to a fan-rated box and balance them. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. In these older single- and two-family homes, fans are often on plaster ceilings using boxes that were never fan-rated.',
      'We anchor fans to a fan-rated box, balance each one for quiet running, and add fans to bedrooms that never had one. In the two-families we balance fans carefully so a unit upstairs runs quiet over the rooms below and wire each to its own switch.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, the work we do most often is:',
    localFaqs: [{ q: 'Do you install fans in the two-family homes common in Pleasant Ridge?', a: 'Yes. We work on the brick two-families throughout Pleasant Ridge, mounting fans to fan-rated boxes and balancing each so a unit upstairs runs quiet over the rooms below.' }],
  },
  'westwood': {
    intro: 'Replacing a wobbling fan or adding one in a Westwood home along Harrison Avenue? Our licensed electricians anchor fans to a fan-rated box and balance them, across Cincinnati’s largest neighborhood. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, fans are often on boxes never rated to carry one.',
      'We anchor fans to a fan-rated box, balance each one for quiet running, and replace dated fans with quieter models. We add fans to rooms that never had one, fit a down rod under higher ceilings, and set fans to run in reverse in winter.',
    ],
    commonIntro: 'Across Westwood’s historic, early-1900s, and mid-century homes, the work we do most often is:',
    localFaqs: [{ q: 'Can you fix a wobbling fan in a Westwood home?', a: 'Yes. A wobble usually means the fan is on a box never rated for one. We install a fan-rated box, anchor the mount, and balance the blades for quiet running.' }],
  },
  'norwood': {
    intro: 'Adding a fan or replacing a dated one in a Norwood home near Surrey Square? Our licensed electricians anchor fans to a fan-rated box and balance them, around Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. In this tightly packed, century-old housing, fans are often on plaster ceilings using boxes that were never fan-rated.',
      'We anchor fans to a fan-rated box, balance each one for quiet running, and add fans to bedrooms that never had one. In the two-families we balance carefully so a unit upstairs runs quiet over the rooms below and wire each to its own switch.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the work we do most often is:',
    localFaqs: [{ q: 'Can you safely hang a fan in an older Norwood home?', a: 'Yes. Norwood’s century-old homes often have fans on boxes never rated for one. We install a fan-rated box on the plaster ceiling, anchor it, and balance the blades for quiet running.' }],
  },
  'blue-ash': {
    intro: 'Adding a fan on a vaulted ceiling or replacing a dated one in a Blue Ash home? Our licensed electricians anchor fans to a fan-rated box, fit a down rod, and balance them, across this northeast-side city. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions. The newer subdivisions often have vaulted and two-story ceilings where a down rod sized to the height is what brings the blades to a useful level.',
      'We fit a down rod for vaulted ceilings, anchor to a fan-rated box, and balance each fan for quiet running. In the mid-century homes we replace dated fans with quieter models and add fans to rooms that never had one, wiring each to its switch.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer vaulted-ceiling subdivisions, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan on a vaulted ceiling in a Blue Ash subdivision?', a: 'Yes. Vaulted and two-story ceilings in newer Blue Ash homes need a down rod sized to the height. We anchor the fan to a fan-rated box and balance it for quiet running.' }],
  },
  'montgomery': {
    intro: 'Adding a fan on a vaulted ceiling or replacing a dated one in a Montgomery home? Our licensed electricians anchor fans to a fan-rated box, fit a down rod, and balance them, around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The newer subdivisions often have vaulted and two-story ceilings where a properly sized down rod sets the blades at a useful height.',
      'We fit a down rod for vaulted ceilings, anchor to a fan-rated box, and balance each fan for quiet running. In the historic core we mount fans on tall plaster ceilings using a fan-rated box and take care around original finishes.',
    ],
    commonIntro: 'Across Montgomery’s historic core and newer vaulted-ceiling subdivisions, the work we do most often is:',
    localFaqs: [{ q: 'Can you hang a fan on a vaulted ceiling in a Montgomery home?', a: 'Yes. Vaulted and two-story ceilings in newer Montgomery homes need a down rod sized to the height. We anchor the fan to a fan-rated box and balance it for quiet running.' }],
  },
};
