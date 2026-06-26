export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Storm bend your service mast or tear the entrance cable loose in Sedamsville? Our licensed electricians repair and replace masts, risers, and weatherheads for homes along River Road and the hillside above it, and coordinate the utility shutoff. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with housing that dates to the late 1800s and early 1900s. Most of these homes run overhead service, so the mast and weatherhead take the full force of the wind and falling limbs that come off the hillside above River Road.',
      'On homes this old, the entrance cable and roof flashing are often original, which leads to fraying wire and water intrusion at the seal. We replace the mast with weather-rated materials, reflash the roof, and ground it to code so the connection is safe again.',
    ],
    commonIntro: 'In Sedamsville’s century-old homes with overhead service below a wooded hillside, the mast problems we see most often are:',
    localFaqs: [{ q: 'A storm bent the mast on my Sedamsville home — can you fix it fast?', a: 'Yes. Storm-bent masts are common in Sedamsville with the wooded hillside above River Road. We coordinate the utility disconnect, replace the mast and reseal the roof, and most jobs are done in a day.' }],
  },
  'sayler-park': {
    intro: 'Leaning weatherhead or a mast pulled loose from the roof in Sayler Park? Our licensed electricians repair and replace service masts, risers, and entrance cables from the riverfront streets to the homes up the hill, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside, with tree-lined streets and rows of Victorian and early-1900s frame houses from its days as the village of Home City. Those mature trees and the open river exposure mean masts here take a beating from high wind and falling limbs.',
      'On century-old frame homes the overhead service is usually original or long overdue for attention, so we find aging weatherheads, frayed entrance cable, and flashing that has let water down the riser. We replace the mast in weather-rated materials, reseal the roof penetration, and reground the service to code.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame homes with overhead service on tree-lined river streets, the mast problems we see most often are:',
    localFaqs: [{ q: 'A falling limb damaged the mast on my Sayler Park home — can you help?', a: 'Yes. With the mature trees lining the streets out here, limb damage to masts is common. We coordinate the utility shutoff, replace the mast and weatherhead, and reflash the roof, even on the far-west river streets.' }],
  },
  'riverside': {
    intro: 'Wind bend your service mast or pull the entrance cable loose in Riverside? Our licensed electricians repair and replace masts, risers, and weatherheads for the homes along River Road, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati running along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. That hillside drops limbs onto overhead service lines, and the open river side leaves masts exposed to high wind.',
      'Together with Sedamsville this is one of the oldest riverfront communities on the west side, so the overhead service and weatherheads on many homes are well past their service life. We replace bent or corroded masts, reseal the roof flashing where water has worked in, and ground the service entrance to code.',
    ],
    commonIntro: 'On Riverside’s older River Road homes with overhead service between the hillside and the river, the mast problems we see most often are:',
    localFaqs: [{ q: 'The utility flagged the service mast on my Riverside home — what now?', a: 'When the utility red-tags a damaged service entrance, the mast work has to be done by a licensed electrician. We coordinate the disconnect, replace the mast and entrance cable on your River Road home, and get the service cleared for reconnection.' }],
  },
  'east-price-hill': {
    intro: 'Storm-bent mast or frayed entrance cable on your East Price Hill home? Our licensed electricians repair and replace service masts, risers, and weatherheads on the hilltop streets around Warsaw Avenue and the Incline District, and coordinate the utility shutoff. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing — two- and three-story frame homes and brick two-families built close together, most on overhead service.',
      'On the exposed bluff, masts take the brunt of high wind, and on those tall frame homes the weatherhead and entrance cable are often original and brittle with age. We replace the mast and riser, reflash the roof seal, and ground the service to code, working carefully around the tight lots and shared walls.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s frame homes and two-families on the exposed bluff, the mast problems we see most often are:',
    localFaqs: [{ q: 'Do you replace service masts on the older two-family homes in East Price Hill?', a: 'Yes. We work on the two- and three-story frame homes and brick two-families around Warsaw Avenue regularly. We coordinate the utility disconnect, replace the mast and entrance cable, and reseal the roof penetration.' }],
  },
  'west-price-hill': {
    intro: 'Leaning mast or water working down the riser on your West Price Hill home? Our licensed electricians repair and replace service masts, weatherheads, and entrance cables along Glenway Avenue, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. Most still run the overhead service they were built with, and on a home this age the mast, weatherhead, and flashing are decades old.',
      'On those mid-century homes we routinely find corroded weatherheads, entrance cable with cracked insulation, and roof seals that have let water down the riser. We replace the mast in weather-rated materials, reflash the penetration, and reground the service entrance to code.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes with decades-old overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach West Price Hill off Glenway Avenue for mast work?', a: 'West Price Hill is squarely in our service area along Glenway Avenue. Mast work is licensed, utility-coordinated overhead service repair, so we schedule the disconnect and turn most replacements around in a day.' }],
  },
  'lower-price-hill': {
    intro: 'Mast pulled loose or a weatherhead leaning on your Lower Price Hill rowhouse? Our licensed electricians repair and replace service masts, risers, and entrance cables on the historic streets around State Avenue, and coordinate the utility shutoff. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, most on overhead service entrances.',
      'Those mid-1800s rowhouses have masts and weatherheads that are often original, and decades of settling can pull a mast loose where it ties into old brick. We refasten or replace the mast, run new weather-rated entrance cable, reflash the roof seal, and ground the service to code.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century brick rowhouses with original overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'Do you do mast work on the old brick rowhouses in Lower Price Hill?', a: 'Yes. We work on the historic 19th-century rowhouses around State Avenue and take care anchoring a new mast into old brick. We coordinate the utility disconnect and reseal the roof so water stays out.' }],
  },
  'over-the-rhine': {
    intro: 'Storm damage to the mast or a frayed entrance cable on your Over-the-Rhine building? Our licensed electricians repair and replace service masts, risers, and weatherheads on the historic blocks around Findlay Market and Vine Street, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. Many carry overhead service entrances original to the building.',
      'On buildings this old, masts and weatherheads have weathered well over a century, and many are now split into apartments and condos where a damaged service entrance affects several units. We replace the mast, run new entrance cable, reflash the roof seal, and ground the service to code.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century brick buildings and converted multi-units on overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'Can you replace the service mast on a multi-unit building in Over-the-Rhine?', a: 'Yes. OTR is full of historic buildings split into apartments and condos. We coordinate the utility disconnect, replace the mast and entrance cable, and reseal the roof so one damaged service entrance does not put the whole building at risk.' }],
  },
  'downtown': {
    intro: 'Damaged service mast or a weatherhead pulling loose on your downtown building? Our licensed electricians repair and replace masts, risers, and entrance cables across the central business district, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. The older low- and mid-rise buildings turned residential often still run overhead service entrances original to the structure.',
      'On those early-1900s buildings the mast, weatherhead, and entrance cable are decades old, and a damaged service entrance can affect a whole converted building. We coordinate the utility disconnect and access, replace the mast and cable, reflash the roof penetration, and ground the service to code.',
    ],
    commonIntro: 'In downtown’s older converted buildings on overhead service, the mast problems we handle most often are:',
    localFaqs: [{ q: 'Can you handle mast work on a converted downtown building?', a: 'Yes. We work in the central business district’s older loft and commercial conversions regularly. Mast work is licensed, utility-coordinated overhead service repair, and we schedule the disconnect and building access so the rest of the building is not disrupted.' }],
  },
  'west-end': {
    intro: 'Storm-bent mast or frayed entrance cable on your West End home? Our licensed electricians repair and replace service masts, risers, and weatherheads near TQL Stadium and Linn Street, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing. The older brick homes here largely run overhead service entrances that are decades old.',
      'On those century-old rowhouses, the mast and weatherhead have weathered a long time, and aging entrance cable can fray where it enters the head. We replace the mast in weather-rated materials, run new entrance cable, reflash the roof seal, and reground the service to code.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes on overhead service, the mast problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach the West End for mast work?', a: 'The West End sits right next to downtown and is one of the quickest areas for us to reach. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof, usually within a day.' }],
  },
  'mount-adams': {
    intro: 'Mast pulled loose or a weatherhead leaning on your Mount Adams rowhouse? Our licensed electricians repair and replace service masts, risers, and entrance cables on the steep, narrow streets of the hilltop, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. The hilltop exposure puts overhead service masts squarely in the path of high wind.',
      'On century-old rowhouses the mast and weatherhead are often original, and the tight, steep access makes overhead service work a job for a crew that knows the hill. We replace the mast, run new entrance cable, reflash the roof penetration, and ground the service to code.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses with exposed overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'Can you get to a mast on the steep Mount Adams streets?', a: 'Yes. We work the hill regularly and come prepared for the narrow, steep streets and tight parking. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof.' }],
  },
  'mount-auburn': {
    intro: 'Storm-bent mast or water working down the riser on your Mount Auburn home? Our licensed electricians repair and replace service masts, risers, and weatherheads in one of Cincinnati’s oldest hilltop neighborhoods, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. The hilltop exposure leaves overhead service masts open to high wind.',
      'Those Victorian-era homes carry some of the oldest service entrances in the city, where weatherheads and entrance cable have weathered well over a century and flashing has often failed. We replace the mast, run new cable, reflash the roof seal, and ground the service to code, isolating the work so a subdivided house keeps power where possible.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes on hilltop overhead service, the mast problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Auburn for mast repair?', a: 'Mount Auburn sits right above downtown, so it is one of the faster neighborhoods for us to reach. We coordinate the utility disconnect, replace the mast and weatherhead on these older hilltop homes, and reseal the roof.' }],
  },
  'clifton': {
    intro: 'Falling limb bend the mast or tear the entrance cable on your Clifton home? Our licensed electricians repair and replace service masts, risers, and weatherheads in the Gaslight District and around Ludlow Avenue, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Those mature trees over overhead service lines are the biggest threat to masts here, dropping limbs in every storm.',
      'Many of those big older houses have stood over a century with original overhead service, and a fair number are now rentals near campus where a damaged mast needs a quick, licensed fix. We replace the mast in weather-rated materials, reseal the roof flashing, and ground the service entrance to code.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes on tree-lined streets with overhead service, the mast problems we are called for most often are:',
    localFaqs: [{ q: 'A storm dropped a limb on the service mast at my Clifton rental — can you fix it?', a: 'Yes. With the mature trees on Clifton’s streets, limb-damaged masts are common around the university area. We coordinate the utility disconnect, replace the mast and entrance cable, and reseal the roof, day or night.' }],
  },
  'corryville': {
    intro: 'Storm-bent mast or frayed entrance cable on your Corryville home near UC? Our licensed electricians repair and replace service masts, risers, and weatherheads around the Short Vine corridor, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Most of that older housing runs overhead service that is decades or more old.',
      'With so much densely packed housing turned into rentals, masts and weatherheads here take long, hard use and are often original to the home. We replace the mast, run new entrance cable, reflash the roof penetration, and ground the service to code, isolating the work so neighboring units stay powered where possible.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus on overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'How quickly can you reach Corryville near UC for mast work?', a: 'Corryville is central and close to our usual routes, so it is one of the faster areas for us to reach. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof.' }],
  },
  'northside': {
    intro: 'Leaning weatherhead or a mast pulled loose on your Northside home? Our licensed electricians repair and replace service masts, risers, and entrance cables around Hamilton Avenue and the Mill Creek valley, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. The age of that housing means overhead service masts and weatherheads are often original and long overdue for attention.',
      'On homes this old, entrance cable frays and roof flashing fails, letting water down the riser. We replace the mast in weather-rated materials, run new cable, reflash the roof seal, and ground the service entrance to code.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes with original overhead service, the mast problems we handle most often are:',
    localFaqs: [{ q: 'Water is getting in around the mast on my Northside home — can you fix it?', a: 'Yes. On Northside’s older homes the roof flashing around the mast often fails with age. We coordinate the utility disconnect, replace the mast and reseal the roof penetration, and reground the service to code.' }],
  },
  'college-hill': {
    intro: 'Storm-bent mast or corroded weatherhead on your College Hill home? Our licensed electricians repair and replace service masts, risers, and entrance cables along Hamilton Avenue and Belmont, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. The hilltop setting leaves overhead service masts exposed to high wind.',
      'In homes this age the mast, weatherhead, and entrance cable are decades old, and corroded heads and failed flashing are common. We replace the mast in weather-rated materials, reflash the roof seal, and ground the service entrance to code.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century hilltop homes on overhead service, the mast problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach College Hill for mast repair?', a: 'College Hill is well within our service area along Hamilton Avenue. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof, usually within a day.' }],
  },
  'walnut-hills': {
    intro: 'Mast pulled loose or a frayed entrance cable on your Walnut Hills home? Our licensed electricians repair and replace service masts, risers, and weatherheads around Peebles Corner and McMillan Street, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. The hilltop exposure leaves overhead service masts open to high wind, and much of the housing is now split into units.',
      'Its century-old buildings carry aging service entrances where the weatherhead and cable are often original. We replace the mast, run new entrance cable, reflash the roof penetration, and ground the service to code, isolating the work so a multi-unit building keeps power where possible.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings on hilltop overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'Do you do mast work on the older apartment buildings in Walnut Hills?', a: 'Yes. Many Walnut Hills buildings are split into units. We coordinate the utility disconnect, replace the mast and entrance cable, and reseal the roof so a damaged service entrance does not put the whole building at risk.' }],
  },
  'east-walnut-hills': {
    intro: 'Falling limb bend the mast or tear the entrance cable on your East Walnut Hills home? Our licensed electricians repair and replace service masts, risers, and weatherheads around Woodburn Avenue and DeSales Corner, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. Those mature trees over overhead service lines are the biggest threat to masts here.',
      'The large, century-old houses often still carry original service entrances, where the weatherhead and entrance cable are well past their service life. We replace the mast in weather-rated materials, reseal the roof flashing, and ground the service to code, working to protect the original detailing these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes on tree-lined streets with overhead service, the mast problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach East Walnut Hills after storm damage to a mast?', a: 'East Walnut Hills is close to our central routes, so it is a quick reach. With the mature trees along these streets, limb-damaged masts are common, and we coordinate the utility disconnect, replace the mast, and reseal the roof.' }],
  },
  'avondale': {
    intro: 'Storm-bent mast or a weatherhead pulling loose on your Avondale home? Our licensed electricians repair and replace service masts, risers, and entrance cables near the hospitals and the zoo, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. Much of that housing is older and densely built, with overhead service entrances that are decades or more old.',
      'A lot of Avondale’s housing is rental and under heavy use, so masts and weatherheads here are often original and overdue for attention, and a damaged service entrance on a multi-unit building affects several units. We replace the mast, run new cable, reflash the roof seal, and ground the service to code.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings on overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Avondale for mast repair?', a: 'Avondale is in the central uptown area near the hospitals, so it is a fast reach for us. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof penetration.' }],
  },
  'hyde-park': {
    intro: 'Falling limb bend the mast or water working down the riser on your Hyde Park home? Our licensed electricians repair and replace service masts, risers, and weatherheads around Hyde Park Square and Erie Avenue, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. Those mature trees over overhead service lines are the biggest threat to masts here, dropping limbs in storms.',
      'On these big older homes the mast, weatherhead, and flashing are decades old, and a failed roof seal can let water down the riser before anyone notices. We replace the mast in weather-rated materials, reflash the penetration, and ground the service entrance to code.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes on tree-shaded streets with overhead service, the mast problems we are called for most often are:',
    localFaqs: [{ q: 'A storm damaged the service mast on my Hyde Park home — can you fix it fast?', a: 'Yes. With the mature trees around Hyde Park Square, storm and limb damage to masts is common. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof, usually within a day.' }],
  },
  'oakley': {
    intro: 'Corroded weatherhead or a mast pulled loose on your Oakley home? Our licensed electricians repair and replace service masts, risers, and entrance cables around Oakley Square and Madison Road, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. Most of those older bungalows run overhead service that is decades old.',
      'On homes built this way the weatherhead and entrance cable are often original, and corroded heads and failed flashing are the issues we find most. We replace the mast in weather-rated materials, reflash the roof seal, and ground the service entrance to code.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes on overhead service, the mast problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Oakley for mast work?', a: 'Oakley is centrally located on the east side and quick for us to reach. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof penetration.' }],
  },
  'mount-lookout': {
    intro: 'Storm-bent mast or a weatherhead leaning on your Mount Lookout home? Our licensed electricians repair and replace service masts, risers, and entrance cables around Mount Lookout Square and Ault Park, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The hilltop setting and the trees along those streets leave overhead service masts exposed to high wind and falling limbs.',
      'The older homes here carry decades-old service entrances, where the weatherhead and entrance cable are often original and flashing has aged. We replace the mast in weather-rated materials, reflash the roof seal, and ground the service entrance to code.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes on tree-lined streets with overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Lookout for mast repair?', a: 'Mount Lookout is well within our east-side service area. We coordinate the utility disconnect, replace the mast and weatherhead on these older hilltop homes, and reseal the roof.' }],
  },
  'columbia-tusculum': {
    intro: 'Mast pulled loose or a frayed entrance cable on your Columbia-Tusculum home? Our licensed electricians repair and replace service masts, risers, and weatherheads in Cincinnati’s oldest neighborhood near the river, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. Most of those Victorian and early homes run overhead service entrances that are well past their service life.',
      'On homes this old the mast and weatherhead are often original, and decades of settling can pull a mast loose from the roofline while failed flashing lets water down the riser. We replace the mast in weather-rated materials, reseal the roof penetration, and ground the service to code, protecting the historic exteriors.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river with original overhead service, the mast problems we handle most often are:',
    localFaqs: [{ q: 'Do you do mast work on the historic Painted Lady homes in Columbia-Tusculum?', a: 'Yes. We work on the neighborhood’s older and Painted Lady homes and take care with the historic exteriors. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof.' }],
  },
  'mount-washington': {
    intro: 'Storm-bent mast or corroded weatherhead on your Mount Washington home? Our licensed electricians repair and replace service masts, risers, and entrance cables along Beechmont Avenue, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Most still run the overhead service they were built with, so the mast, weatherhead, and flashing are decades old.',
      'In homes of that era we find corroded weatherheads, cracked entrance cable insulation, and roof seals that have let water down the riser. We replace the mast in weather-rated materials, reflash the penetration, and reground the service entrance to code.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century single-family homes on overhead service, the mast problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Washington for mast work?', a: 'Mount Washington is squarely in our service area along Beechmont Avenue. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof, usually within a day.' }],
  },
  'madisonville': {
    intro: 'Leaning mast or a frayed entrance cable on your Madisonville home? Our licensed electricians repair and replace service masts, risers, and weatherheads around Madison Road and Whetsel Avenue, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of the neighborhood run overhead service entrances that are decades old.',
      'On those early-1900s homes the weatherhead and entrance cable are often original, and corroded heads and failed flashing are the issues we find most. We replace the mast in weather-rated materials, reflash the roof seal, and ground the service entrance to code.',
    ],
    commonIntro: 'In Madisonville’s older homes along Madison Road on overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Madisonville for mast repair?', a: 'Madisonville is centrally located on the east side and quick for us to reach. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof penetration.' }],
  },
  'pleasant-ridge': {
    intro: 'Storm-bent mast or a weatherhead pulling loose on your Pleasant Ridge home? Our licensed electricians repair and replace service masts, risers, and entrance cables along Montgomery Road, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those mature trees over overhead service lines are the biggest threat to masts here, dropping limbs in storms.',
      'The older single- and two-family homes carry decades-old service entrances, and on a two-family a damaged mast can affect both units. We replace the mast in weather-rated materials, reflash the roof seal, and ground the service entrance to code.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and brick two-families on tree-lined streets with overhead service, the mast problems we handle most often are:',
    localFaqs: [{ q: 'Do you do mast work on the two-family homes common in Pleasant Ridge?', a: 'Yes. We work on the brick two-families throughout Pleasant Ridge. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof so a damaged service entrance does not put both units at risk.' }],
  },
  'westwood': {
    intro: 'Corroded weatherhead or a mast pulled loose on your Westwood home? Our licensed electricians repair and replace service masts, risers, and entrance cables along Harrison Avenue, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Most of that older housing runs overhead service that is decades old.',
      'Across that range of homes the common thread is an aging service entrance — corroded weatherheads, frayed entrance cable, and roof flashing that has let water down the riser. We replace the mast in weather-rated materials, reflash the penetration, and ground the service to code.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes on overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Westwood for mast work?', a: 'Westwood is a large west-side neighborhood well within our service area along Harrison Avenue. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof, usually within a day.' }],
  },
  'norwood': {
    intro: 'Storm-bent mast or a frayed entrance cable on your Norwood home? Our licensed electricians repair and replace service masts, risers, and weatherheads around Surrey Square and Montgomery Road, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing runs overhead service entrances that are largely original.',
      'On small lots with homes built close together, a damaged mast can affect a neighbor, and the weatherheads and entrance cable here are decades old. We replace the mast in weather-rated materials, reflash the roof seal, and ground the service entrance to code.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and brick two-families on overhead service, the mast problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach Norwood for mast repair?', a: 'Norwood sits right in the middle of our service area, surrounded by Cincinnati, so it is a fast reach. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof.' }],
  },
  'blue-ash': {
    intro: 'Storm-bent mast or a weatherhead leaning on your Blue Ash home? Our licensed electricians repair and replace service masts, risers, and entrance cables for homes and businesses across this northeast-side city, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. The mid-century homes here still run overhead service that is now decades old.',
      'Even the newer housing has weatherheads and entrance cable old enough to corrode, and high wind and storms bend masts and tear cable loose. We replace the mast in weather-rated materials, reflash the roof seal, and ground the service entrance to code, for homes and businesses alike.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions on overhead service, the mast problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Blue Ash for mast work?', a: 'Blue Ash is well within our northeast service area. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof for homes and businesses alike.' }],
  },
  'montgomery': {
    intro: 'Storm-bent mast or a frayed entrance cable on your Montgomery home? Our licensed electricians repair and replace service masts, risers, and weatherheads around the historic district and Montgomery Road, and coordinate the utility disconnect. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The older structures in the historic core run overhead service entrances that are well past their service life.',
      'From century-old buildings in the core to decades-old subdivisions, the service entrances here span a wide range, and corroded weatherheads, frayed cable, and storm-bent masts are the issues we find most. We replace the mast in weather-rated materials, reflash the roof seal, and ground the service entrance to code.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes on overhead service, the mast problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Montgomery for mast repair?', a: 'Montgomery is well within our northeast service area. We coordinate the utility disconnect, replace the mast and weatherhead, and reseal the roof, usually within a day.' }],
  },
};
