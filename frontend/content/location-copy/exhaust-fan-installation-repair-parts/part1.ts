export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Exhaust fan work in Sedamsville usually starts with a bathroom that was built without a fan, or with a small one that cannot clear the steam. These homes date to the late 1800s and early 1900s, and the river air runs humid. We size the fan and vent it outdoors.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with housing that dates to the late 1800s and early 1900s. Bathrooms in homes this old were often built without an exhaust fan, or with a small undersized one that cannot clear the steam, so moisture lingers on the walls and ceilings.',
      'Down by the Ohio River the air already runs humid, which makes proper ventilation matter even more here. We size a fan to the room, wire it to code, and confirm the duct vents all the way outdoors instead of into the attic where moisture would breed mold.',
    ],
    commonIntro: 'In Sedamsville’s century-old riverside homes with small baths and undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'Why does my Sedamsville bathroom stay humid after showers?', a: 'Usually the fan is undersized, clogged, or vents into the attic instead of outside — common in century-old Sedamsville homes near the river. We size it right and run the duct outdoors so the moisture actually leaves.' }],
  },
  'sayler-park': {
    intro: 'Many Victorian and early-1900s frame houses in Sayler Park were built with no bathroom fan at all, so exhaust fan installation is the job we do most there. The riverfront sits in the Ohio River floodplain, where humidity runs high. We run the duct fully outdoors, never into the attic.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before annexation in the early 1900s, and its tree-lined streets are full of Victorian and early-1900s frame houses where bathrooms were often built with no fan at all.',
      'The riverfront sits in the Ohio River floodplain, where saturated ground and high humidity make moisture control a real concern. We size a fan to each bathroom, wire it to code, and run the duct fully outdoors rather than dumping warm wet air into the attic of a century-old frame home.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame houses near the floodplain, where humidity runs high and baths often have no fan, the work we do most often is:',
    localFaqs: [{ q: 'Do older Sayler Park homes near the river need a stronger fan?', a: 'Often yes. The floodplain air stays humid here, so an undersized or missing fan lets steam linger. We size the fan to the room and vent it outdoors so moisture leaves instead of settling into the framing.' }],
  },
  'riverside': {
    intro: 'Riverside homes on low Ohio River bottomland need a bathroom exhaust fan that actually moves moist air out, and the older ones often have undersized or missing fans. High groundwater keeps humidity up along River Road. We size the fan to the room and make sure the duct exits outdoors.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. It forms one of the oldest riverfront communities on the city’s west side, and its older bathrooms often run undersized or missing fans.',
      'Because so many homes here sit on low Ohio River bottomland, high groundwater and humidity are a constant backdrop, so moving moist air out matters more than it does up on the hill. We size the fan to the room, wire it to code, and make sure the duct exits outdoors instead of venting into the attic.',
    ],
    commonIntro: 'In Riverside’s low riverfront homes where humidity stays high and old fans are undersized, the work we do most often is:',
    localFaqs: [{ q: 'My Riverside bathroom stays damp because we are right by the river — what helps?', a: 'Low riverfront ground keeps the air humid, so a properly sized, outdoor-vented fan does the heavy lifting. We size it to your bathroom and route the duct fully outside so moisture leaves the house.' }],
  },
  'east-price-hill': {
    intro: 'In East Price Hill, a bathroom fan job often means adding one to an early-1900s two-family that never had it. Moisture from a fanless bath works into shared walls, and old motors turn loud and weak. We size each fan to the bath and vent it outdoors.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue are packed with dense early-1900s housing — two- and three-story frame homes and brick two-families built close together, many with small original baths and no proper ventilation.',
      'In tightly built two-families, moisture from a fanless bathroom can work into shared walls and ceilings, and worn-out motors in century-old homes turn loud and weak before they quit. We size a fan to each bath, wire it to code, and run the duct outdoors instead of into the attic.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s two-families with small baths and aging fans, the work we do most often is:',
    localFaqs: [{ q: 'Can you add a bathroom fan to my East Price Hill two-family?', a: 'Yes. Many of the early-1900s two-families around Warsaw Avenue were built with no bath fan. We add a correctly sized one, wire it to code, and vent the duct outdoors so steam does not soak into shared walls.' }],
  },
  'west-price-hill': {
    intro: 'West Price Hill homes from the 1920s through the 1950s often still have their original bathroom exhaust fan, and by now it is loud, weak or undersized. Many ducts off Glenway Avenue stop at the attic. We fit a correctly sized fan that vents outdoors.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but those decades-old baths often have original fans that have worn out or were undersized from the start.',
      'In mid-century homes like these, the fan motor gets louder and weaker with age, and many ducts were run only as far as the attic. We replace tired units with a correctly sized fan, wire it to code, and confirm the duct carries moist air all the way outdoors.',
    ],
    commonIntro: 'In West Price Hill’s mid-century single-family homes with worn or undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'Why is my West Price Hill bathroom fan so loud now?', a: 'In 1920s-through-1950s homes off Glenway Avenue, the original motor wears out and rattles while moving less air. We replace it with a quieter, properly sized fan and make sure the duct vents outdoors.' }],
  },
  'lower-price-hill': {
    intro: 'The 19th-century rowhouses of Lower Price Hill were built long before bathroom fans were standard, so exhaust fan work here usually means adding one. Down in the Mill Creek valley the air stays humid. We size the fan and vent it outdoors to protect old brick and plaster.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses — beautiful, and built long before bathroom fans were standard.',
      'The low-lying valley location keeps humidity high, and many of these mid-1800s rowhouses still have small baths with no fan or an undersized one. We add a correctly sized fan, wire it to code, and route the duct fully outdoors so moisture does not breed mold in old brick and plaster.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses down in the damp valley, the work we do most often is:',
    localFaqs: [{ q: 'Do the old rowhouses in Lower Price Hill need a bathroom fan added?', a: 'Often, yes. The 19th-century rowhouses around State Avenue were built without one, and the valley air stays humid. We add a properly sized fan and vent it outdoors to keep moisture off old brick and plaster.' }],
  },
  'over-the-rhine': {
    intro: 'Bathrooms carved into Over-the-Rhine’s 1850s to 1880s buildings are often small and windowless, so the exhaust fan is the only way steam leaves. Many units have retrofitted fans that vent poorly or not at all. We size the fan and duct it to a proper exterior path.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. Bathrooms carved into these old buildings are frequently small, interior, and short on ventilation.',
      'Many units now run on retrofitted fans that vent poorly or not at all, which traps moisture in tight interior baths. We size the fan to the room, wire it to code, and route the duct through the proper exterior path rather than into a wall cavity or attic.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings with small interior baths and weak ventilation, the work we do most often is:',
    localFaqs: [{ q: 'My Over-the-Rhine bathroom has no window — how do I clear the steam?', a: 'A windowless interior bath in these 19th-century buildings depends entirely on the fan. We install a properly sized exhaust fan and duct it through to the exterior so the steam actually leaves the unit.' }],
  },
  'downtown': {
    intro: 'Downtown condos and lofts often have windowless baths where the bathroom fan is the only way moisture leaves. In older commercial buildings turned residential, exhaust runs were sometimes an afterthought ending in a chase. We size the fan and confirm the duct reaches a proper exterior termination.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Many of these residential conversions have interior baths with no window, where the fan is the only way moisture leaves.',
      'In older commercial buildings turned residential, exhaust runs were sometimes added as an afterthought, so air gets pushed into a chase rather than fully outdoors. We size the fan to the room, wire it to code, and confirm the duct routes to a proper exterior termination.',
    ],
    commonIntro: 'In downtown’s condos and loft conversions with windowless interior baths, the work we do most often is:',
    localFaqs: [{ q: 'Can you improve ventilation in a downtown loft bathroom with no window?', a: 'Yes. Windowless baths in these converted buildings rely on the exhaust fan alone. We fit a correctly sized fan and verify the duct carries moisture to a proper exterior outlet, not just into a wall chase.' }],
  },
  'west-end': {
    intro: 'Bathroom fan work in the West End usually involves historic rowhouses and brick homes near TQL Stadium, where older baths have no fan or a long-undersized one. Low ground near the Mill Creek basin keeps humidity in play. We size the fan and vent it outdoors, not into the attic.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. It holds historic Italianate rowhouses and brick homes alongside mid-century housing, and the older baths in those rowhouses often have no fan or a long-undersized one.',
      'The low ground near the Mill Creek basin keeps humidity in play, so moving moist air out matters here. We size the fan to the bathroom, wire it to code, and route the duct outdoors instead of into the attic of a century-old brick home.',
    ],
    commonIntro: 'In the West End’s historic rowhouses and older brick homes near Mill Creek, the work we do most often is:',
    localFaqs: [{ q: 'Should I add a fan to my older West End bathroom?', a: 'If your bathroom has no fan or a weak one, yes — the low ground near Mill Creek keeps humidity up. We add a properly sized fan and vent the duct outdoors so moisture does not linger in old brick.' }],
  },
  'mount-adams': {
    intro: 'Mount Adams rowhouses often have an exhaust fan that is missing, undersized or vented only into the attic, which invites mold in tight, multi-level homes. Bathrooms on the hilltop tend to be small. We size a fan to each bath and run the duct all the way outdoors.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Bathrooms in these century-old homes are often small, and the fans are either missing, undersized, or vented only into the attic.',
      'Pushing warm moist air into the attic of an old rowhouse invites mold, especially in tight, multi-level homes. We size a fan to each bath, wire it to code, and run the duct all the way outdoors through the proper path despite the tight construction.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses with small baths and attic-vented fans, the work we do most often is:',
    localFaqs: [{ q: 'My Mount Adams fan vents into the attic — is that a problem?', a: 'Yes. Pushing shower steam into the attic of a century-old rowhouse can breed mold in the framing. We re-route the duct to a proper exterior termination so the moisture leaves the house entirely.' }],
  },
  'mount-auburn': {
    intro: 'Mount Auburn’s grand 19th-century homes are now often divided into apartments, and the bathroom fans added during those conversions tend to be undersized or vented into the attic. That leaves moisture in the walls. We size the fan to each bathroom and confirm the duct carries air fully outdoors.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine. It is lined with grand 19th-century homes and historic mansions, many now divided into apartments where baths were carved in with little thought to ventilation.',
      'In these subdivided Victorian-era homes, fans are frequently undersized for the room or vent into the attic, leaving moisture in the walls. We size the fan to each bathroom, wire it to code, and confirm the duct carries air fully outdoors.',
    ],
    commonIntro: 'In Mount Auburn’s grand 19th-century homes divided into apartments, with undersized or attic-vented fans, the work we do most often is:',
    localFaqs: [{ q: 'Why does my Mount Auburn apartment bathroom stay so humid?', a: 'In these subdivided 19th-century homes the fan is often undersized or vented into the attic. We fit a fan matched to the room and route the duct outdoors so steam clears instead of settling into the walls.' }],
  },
  'clifton': {
    intro: 'Large Victorian and early-1900s homes around Ludlow Avenue make bathroom fan sizing the main issue in Clifton. Big baths often run on a small original fan, and rentals near campus get ignored until mold shows up. We fit the right size and vent it outdoors.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Bathrooms in these big older houses often have undersized fans, or none at all in the older spaces.',
      'A fair number of these homes are now rentals near campus, where a worn-out fan and a fogged mirror get ignored until mold shows up. We size the fan to the room, wire it to code, and run the duct outdoors rather than into the attic of a century-old home.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes with undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'Can you add a stronger fan to a big Clifton Victorian bathroom?', a: 'Yes. Larger bathrooms in these Victorian and early-1900s homes need a fan sized to the room, not the small original unit. We fit the right size and vent the duct outdoors so the mirror clears.' }],
  },
  'corryville': {
    intro: 'Corryville rentals near Short Vine run showers all day, and the tired, undersized bathroom fans in these early-1900s units move little air. A weak or attic-vented fan lets moisture build in walls and ceilings. We size the fan to the bathroom and route the duct fully outdoors.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. The heavy-use baths in these older rentals often run on tired, undersized fans that move little air.',
      'With showers running all day in densely packed units, a weak or attic-vented fan lets moisture build in walls and ceilings. We size the fan to the bathroom, wire it to code, and route the duct fully outdoors to keep moisture out of the framing.',
    ],
    commonIntro: 'In Corryville’s dense, older rentals near campus with worn, undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'Why is my Corryville rental bathroom always damp?', a: 'Heavy daily use in these older units overwhelms a worn, undersized fan. We fit one sized to the bathroom and vent the duct outdoors so the moisture leaves instead of soaking into the ceiling.' }],
  },
  'northside': {
    intro: 'Late-1800s and early-1900s homes in Northside were often built with no bathroom fan or an undersized one, and the low ground near Mill Creek keeps humidity high. Trapped shower moisture has nowhere to go in a poorly vented bath. We add a correctly sized fan and run the duct outdoors.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Baths in these older homes were frequently built without a fan or with an undersized one.',
      'The low ground near Mill Creek keeps humidity high, so trapped shower moisture has nowhere to go in a poorly vented bath. We size the fan to the room, wire it to code, and run the duct outdoors instead of dumping warm wet air into the attic.',
    ],
    commonIntro: 'In Northside’s late-1800s and early-1900s homes near the damp Mill Creek valley, the work we do most often is:',
    localFaqs: [{ q: 'My Northside bathroom stays damp near Mill Creek — what helps?', a: 'The low ground by Mill Creek keeps the air humid, so a weak or missing fan lets steam linger. We add a properly sized fan and vent the duct outdoors so moisture clears the room.' }],
  },
  'college-hill': {
    intro: 'A loud, weak bathroom fan is the usual exhaust fan job in College Hill’s early-1900s and mid-century homes along Hamilton Avenue. Motors wear out over the decades, and the original duct often stops in the attic. We fit a quieter, correctly sized fan that vents outdoors.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. The fans in these older and mid-century baths tend to wear out, grow loud, and move less air over the decades.',
      'In homes this age, the original duct was often run only into the attic, where moisture collects. We replace tired motors with a quieter, correctly sized fan, wire it to code, and confirm the duct vents all the way outdoors.',
    ],
    commonIntro: 'In College Hill’s early-1900s and mid-century homes with worn fans and attic ducts, the work we do most often is:',
    localFaqs: [{ q: 'Why is my College Hill bathroom fan so loud?', a: 'In these older and mid-century homes along Hamilton Avenue, the original motor wears out, gets loud, and moves less air. We swap it for a quieter, properly sized fan and vent the duct outdoors.' }],
  },
  'walnut-hills': {
    intro: 'Walnut Hills buildings near Peebles Corner are largely split into units, and their baths often have an undersized exhaust fan or none. Moisture from a poorly vented bath works into shared walls and ceilings. We size a fan to each bathroom and route the duct fully outdoors.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of it is now split into units, and the baths in those divided homes often have undersized fans or none at all.',
      'In multi-unit buildings, moisture from a poorly vented bath can work into shared walls and ceilings. We size the fan to each bathroom, wire it to code, and route the duct fully outdoors rather than into the attic of a century-old building.',
    ],
    commonIntro: 'In Walnut Hills’ 19th-century homes and apartment buildings with undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'Can you add a bath fan in a Walnut Hills apartment?', a: 'Yes. Many of these 19th-century buildings split into units have no bath fan or a weak one. We add a correctly sized fan and vent it outdoors so moisture does not spread into shared walls.' }],
  },
  'east-walnut-hills': {
    intro: 'The large baths in East Walnut Hills’ early-1900s homes often run on a small original bathroom fan that cannot clear the steam. Venting moist air into the attic of a home with original woodwork invites mold. We size the fan to the room and route the duct outdoors.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large baths in these century-old houses often run on small original fans that cannot clear the steam.',
      'Pushing moist air into the attic of a home with original woodwork and plaster invites mold and damage. We size the fan to the room, wire it to code, and confirm the duct routes all the way outdoors.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes with undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'My East Walnut Hills bathroom mirror stays fogged — what fixes it?', a: 'Large baths in these early-1900s homes need a fan sized to the room, not the small original one. We fit the right size and vent the duct outdoors so the mirror clears and moisture leaves.' }],
  },
  'avondale': {
    intro: 'Heavy daily use wears out bathroom fans fast in Avondale’s older homes and apartments near the hospitals and the zoo. Tired, undersized units leave moisture in walls and ceilings. We replace them with a fan sized to each bathroom and route the duct fully outdoors.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. Much of the housing is older and densely built, and the baths in these units often have tired, undersized fans.',
      'Heavy daily use in rentals wears fans out and overwhelms small ones, leaving moisture in walls and ceilings. We size the fan to each bathroom, wire it to code, and route the duct fully outdoors so steam does not linger.',
    ],
    commonIntro: 'In Avondale’s older, densely built homes and apartments with worn or undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'Why does my Avondale apartment bathroom stay damp?', a: 'In these older, heavily used units the fan is often worn out or undersized. We replace it with one sized to the room and vent the duct outdoors so the moisture actually leaves.' }],
  },
  'hyde-park': {
    intro: 'Spacious baths in Hyde Park’s Tudors, colonials and brick foursquares often run on a small original exhaust fan that cannot keep up. Trapped moisture and an attic-vented duct can do quiet, expensive damage. We size the fan to the square footage and vent it outdoors.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. The spacious baths in these houses often run on small original fans that cannot keep up with the room.',
      'In homes with finished spaces and original details, trapped moisture and an attic-vented duct can do quiet, expensive damage. We size the fan to the room, wire it to code, and confirm the duct vents all the way outdoors.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes with undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'My large Hyde Park bathroom stays steamy — is my fan too small?', a: 'Likely yes. The spacious baths in these early-1900s homes need a fan sized to the square footage, not the small original unit. We fit the right size and vent it outdoors so the steam clears.' }],
  },
  'oakley': {
    intro: 'The small baths in Oakley’s early-1900s bungalows often have an undersized bathroom fan or none at all, which leaves the mirror fogged and moisture in the ceiling. Attic-vented ducts are common too. We size the fan to the room and run the duct fully outdoors.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The small baths in those older bungalows often have undersized fans or none at all.',
      'In a compact bungalow bath, a weak or attic-vented fan leaves the mirror fogged and moisture in the ceiling. We size the fan to the room, wire it to code, and run the duct fully outdoors.',
    ],
    commonIntro: 'In Oakley’s early-1900s bungalows with small baths and undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'Why does my Oakley bungalow bathroom stay foggy?', a: 'Small bungalow baths around Oakley Square often have a weak or attic-vented fan. We fit one sized to the room and vent the duct outdoors so the mirror clears and moisture leaves.' }],
  },
  'mount-lookout': {
    intro: 'Older homes around Mount Lookout Square often have a small original exhaust fan or one that vents only into the attic. Pushing moist air into the attic of an older hilltop home invites mold in the framing. We size the fan to the room and re-route the duct outdoors.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The baths in these older homes frequently run on small original fans or vent only into the attic.',
      'On the hilltop, pushing moist air into the attic of an older home invites mold in the framing. We size the fan to the room, wire it to code, and confirm the duct routes all the way outdoors.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes with undersized or attic-vented fans, the work we do most often is:',
    localFaqs: [{ q: 'Is it bad that my Mount Lookout fan vents into the attic?', a: 'Yes. Pushing shower steam into the attic of an older home can grow mold in the framing. We re-route the duct to a proper exterior termination so the moisture leaves the house.' }],
  },
  'columbia-tusculum': {
    intro: 'Bathrooms in Columbia-Tusculum’s Painted Ladies were built long before exhaust fans were standard, so many are undersized or missing. Cincinnati’s oldest neighborhood sits on low riverside ground that keeps humidity up. We add a correctly sized fan and vent it outdoors without harming original interiors.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. Bathrooms in these historic homes were built long before fans were standard, so many are undersized or absent.',
      'The low riverside ground keeps humidity in play, so trapped shower moisture lingers in a poorly vented bath. We size the fan to the room, wire it to code, and route the duct fully outdoors to protect original interiors from moisture.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river with small or missing fans, the work we do most often is:',
    localFaqs: [{ q: 'Can you add a bath fan to a Painted Lady in Columbia-Tusculum without harming the details?', a: 'Yes. We add a correctly sized fan to these historic Victorian baths and route the duct outdoors carefully, protecting original woodwork and plaster while clearing the moisture.' }],
  },
  'mount-washington': {
    intro: 'Bathroom fans in Mount Washington’s early-1900s through mid-century homes along Beechmont Avenue grow loud and weak with age. Many ducts were run only into the attic. We replace tired units with a quieter, correctly sized fan that vents all the way outdoors.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. The fans in those decades-old baths tend to grow loud and weak, and many ducts were run only into the attic.',
      'In homes of this era, a worn motor moves less air every year, leaving steam on the walls. We replace tired units with a quieter, correctly sized fan, wire it to code, and confirm the duct vents all the way outdoors.',
    ],
    commonIntro: 'In Mount Washington’s early-1900s through mid-century homes with worn fans and attic ducts, the work we do most often is:',
    localFaqs: [{ q: 'Why is my Mount Washington bathroom fan loud and weak?', a: 'In these older and mid-century homes along Beechmont Avenue, the original motor wears down, gets noisy, and moves less air. We replace it with a quieter, properly sized fan vented outdoors.' }],
  },
  'madisonville': {
    intro: 'Madisonville’s early-1900s homes along Madison Road often have an undersized exhaust fan or one that vents only into the attic, where trapped moisture invites mold. Newer infill is mixed in, but the older baths are where the work is. We size the fan and vent it outdoors.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The baths in those older homes often run on undersized fans or vent only into the attic.',
      'In a century-old home, trapped shower moisture and an attic-vented duct invite mold. We size the fan to the room, wire it to code, and route the duct fully outdoors so moisture leaves the house.',
    ],
    commonIntro: 'In Madisonville’s early-1900s homes with undersized or attic-vented fans, the work we do most often is:',
    localFaqs: [{ q: 'My Madisonville bathroom stays damp — what is wrong?', a: 'Often the fan is undersized or vents into the attic in these early-1900s homes. We fit one sized to the room and vent the duct outdoors so the moisture clears.' }],
  },
  'pleasant-ridge': {
    intro: 'Small original bathroom fans have worn out in many Pleasant Ridge homes and brick two-families along Montgomery Road. In a two-family, moisture from a poorly vented bath can reach shared walls and the unit next door. We fit a quieter, correctly sized fan and vent it outdoors.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. The baths in those older single- and two-family homes often have small original fans that have worn out.',
      'In a two-family, moisture from a poorly vented bath can work into shared walls and the unit next door. We size the fan to each bathroom, wire it to code, and run the duct outdoors instead of into the attic.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and brick two-families with worn fans, the work we do most often is:',
    localFaqs: [{ q: 'Can you replace the fan in my Pleasant Ridge two-family bathroom?', a: 'Yes. The brick two-families along Montgomery Road often have worn or undersized fans. We fit a quieter, correctly sized one and vent the duct outdoors so steam does not reach shared walls.' }],
  },
  'westwood': {
    intro: 'Across Westwood, older baths often run on an undersized or worn exhaust fan whose original duct ends in the attic. That holds from the historic homes near Westwood Town Hall to mid-century houses along Harrison Avenue. We size each fan and carry the air all the way outdoors.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, the older baths often run on undersized or worn fans.',
      'In homes this age, the original duct frequently ends in the attic, where moisture collects. We size the fan to the room, wire it to code, and confirm the duct carries air all the way outdoors.',
    ],
    commonIntro: 'In Westwood’s early-1900s and mid-century homes with undersized or worn fans, the work we do most often is:',
    localFaqs: [{ q: 'How do I clear the steam in my Westwood bathroom?', a: 'Across Westwood’s older homes the fan is often undersized or vented into the attic. We fit one sized to the room and vent the duct outdoors so the steam leaves and the mirror clears.' }],
  },
  'norwood': {
    intro: 'Norwood’s dense grid of early-1900s homes and brick two-families has small baths with no bathroom fan or a long-worn one. On small lots, moisture from a fanless bath works into shared walls. We add a fan sized to each bathroom and route the duct outdoors, not into the attic.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. The small baths in that tightly packed, century-old housing often have no fan or a long-worn one.',
      'On small lots with closely built homes, moisture from a fanless bath works into shared walls and ceilings. We size a fan to each bathroom, wire it to code, and route the duct outdoors instead of into the attic.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and brick two-families with small baths and worn fans, the work we do most often is:',
    localFaqs: [{ q: 'Can you add a bathroom fan to my Norwood two-family?', a: 'Yes. Many of Norwood’s century-old two-families were built with no bath fan. We add a correctly sized one and vent the duct outdoors so moisture does not soak into shared walls.' }],
  },
  'blue-ash': {
    intro: 'Even the newer Blue Ash subdivisions are decades old, so original bathroom fans have often worn out or were undersized from the start. Motors grow louder and weaker, and many ducts stop in the attic. We fit a quieter, correctly sized fan vented all the way outdoors.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so the original bath fans have often worn out or were undersized for the room.',
      'In mid-century and subdivision homes, the motor grows louder and weaker with age, and many ducts run only into the attic. We replace tired units with a quieter, correctly sized fan, wire it to code, and confirm the duct vents all the way outdoors.',
    ],
    commonIntro: 'In Blue Ash’s mid-century homes and newer subdivisions with worn or undersized fans, the work we do most often is:',
    localFaqs: [{ q: 'Why is my Blue Ash bathroom fan so loud now?', a: 'In these mid-century and subdivision homes the original motor wears out, gets loud, and moves less air. We replace it with a quieter, properly sized fan and vent the duct outdoors.' }],
  },
  'montgomery': {
    intro: 'From 19th-century buildings in Montgomery’s historic district to decades-old subdivisions, many bathroom exhaust fans are undersized or vent only into the attic. Either way, moisture stays in the walls. We check the duct, size the fan to the room and route it to a proper exterior termination.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. From century-old structures in the core to decades-old subdivisions, the bath fans here span a wide range, and many are undersized or vent only into the attic.',
      'Whether a 19th-century building or a decades-old subdivision home, a poorly vented fan leaves moisture in the walls and attic. We size the fan to the room, wire it to code, and route the duct fully outdoors.',
    ],
    commonIntro: 'In Montgomery’s historic and established homes with undersized or attic-vented fans, the work we do most often is:',
    localFaqs: [{ q: 'Is my Montgomery bathroom fan venting into the attic?', a: 'In many homes here, from the historic core to the subdivisions, it is. We check the duct and re-route it to a proper exterior termination so shower moisture leaves the house instead of collecting in the attic.' }],
  },
};
