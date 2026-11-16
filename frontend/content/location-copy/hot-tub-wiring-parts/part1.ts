export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Hot tub wiring in Sedamsville usually starts at the panel, because late-1800s and early-1900s homes tend to have small ones that are already full. Once we confirm the service can carry it, we run a dedicated 240V GFCI circuit to the deck or patio above River Road.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with housing that dates to the late 1800s and early 1900s. Panels in homes this old are often small and full, so the first step before a spa goes in is confirming the service can carry a new 240V circuit.',
      'Many of the hillside homes above River Road have patios and decks where a hot tub fits, and outdoor wiring there needs weather-rated conduit and proper grounding. We size the circuit to the spa, add the disconnect within sight, and bond everything to code.',
    ],
    commonIntro: 'In Sedamsville’s century-old homes with smaller panels, a spa install usually starts with:',
    localFaqs: [{ q: 'Can an older Sedamsville home handle a hot tub circuit?', a: 'Often, but many century-old Sedamsville homes have small, full panels, so we evaluate the service first. If there is no room we explain an upgrade, then run a dedicated 240V GFCI circuit to code.' }],
  },
  'sayler-park': {
    intro: 'Sayler Park’s frame houses go back to its years as the village of Home City, and their small original panels rarely have room for a hot tub circuit without an evaluation. After that check, we run a dedicated 240V GFCI line with weather-rated outdoor wiring, river streets included.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside, with tree-lined streets of Victorian and early-1900s frame houses dating to its years as the village of Home City before annexation. The original wiring and small panels in homes that old rarely have room for a spa circuit without an evaluation.',
      'The riverfront sits in the Ohio River floodplain, so outdoor spa wiring near saturated ground needs weather-rated conduit, a disconnect within sight, and careful grounding. We bond the tub and all nearby metal to NEC standards so the water stays safe year-round.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame houses with older panels, a spa install usually starts with:',
    localFaqs: [{ q: 'Do you wire hot tubs in Sayler Park even on the far west edge of the city?', a: 'Yes. Sayler Park is well within our service area, river streets included. We evaluate the panel, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'riverside': {
    intro: 'Riverside sits on low Ohio River bottomland along River Road, so hot tub wiring here has to hold up in damp ground with high groundwater. We confirm the older panel can carry the load, then use weather-rated conduit, GFCI protection and proper bonding and grounding, all to NEC code.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati along River Road and US-50, tucked between Sedamsville and Sayler Park with the hillside on one side and the Ohio River on the other. Its older homes and original wiring mean a spa circuit usually needs a panel evaluation before anything else.',
      'Because so many homes sit on low Ohio River bottomland with high groundwater, outdoor spa wiring here has to handle damp conditions — weather-rated conduit, proper grounding, and GFCI protection are not optional. We bond the tub and run the circuit so it holds up to the riverfront setting.',
    ],
    commonIntro: 'On Riverside’s low riverfront lots with older wiring, a spa install usually starts with:',
    localFaqs: [{ q: 'Is outdoor hot tub wiring safe on a low-lying Riverside lot?', a: 'Yes, when it is done right. On Riverside’s damp riverfront lots we use weather-rated conduit, GFCI protection, and proper bonding and grounding, all to NEC code, after confirming the panel can carry the circuit.' }],
  },
  'east-price-hill': {
    intro: 'A hot tub in East Price Hill usually goes on a deck or a small backyard, since the lots around Warsaw Avenue and the Incline District are tight. The early-1900s frame homes and two-families often have undersized panels, so we evaluate the service before running a dedicated 240V GFCI circuit.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, packed with dense early-1900s housing — two- and three-story frame homes and brick two-families built close together around Warsaw Avenue and the Incline District. Panels in homes this old are frequently undersized, so a spa circuit often follows a service evaluation.',
      'On the tight lots here, a backyard or deck spa needs outdoor wiring run cleanly through weather-rated conduit with a disconnect within sight. We size the dedicated 240V circuit to the tub, add GFCI protection, and bond everything to code so a spa does not overload an already full panel.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes with smaller panels, a spa install usually starts with:',
    localFaqs: [{ q: 'My spa keeps tripping the breaker in my East Price Hill two-family — why?', a: 'In older East Price Hill two-families the cause is often a shared or undersized circuit, a missing dedicated line, or a GFCI fault. We evaluate the panel and wiring, then correct it with a code-compliant 240V GFCI circuit sized to the spa.' }],
  },
  'west-price-hill': {
    intro: 'West Price Hill’s 1920s to 1950s single-family homes along Glenway Avenue usually have the yard for a hot tub. Their panels are decades old and sometimes full, so we check capacity first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring, or recommend an upgrade.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. The panels in mid-century homes like these are decades old, so confirming there is capacity for a 240V spa circuit comes first.',
      'These single-family homes usually have the yard space for a backyard or patio spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and proper grounding for the four-season climate. We bond the tub and size the circuit to the unit, all to NEC code.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a 1950s West Price Hill home off Glenway handle a hot tub circuit?', a: 'Many can, but mid-century panels are decades old and sometimes full. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring, or recommend an upgrade if there is no room.' }],
  },
  'lower-price-hill': {
    intro: 'Spa wiring in Lower Price Hill means working with 19th-century Italianate rowhouses near State Avenue that predate modern codes and often have small panels. The ground in the Mill Creek valley stays damp, so after the panel check we add GFCI protection and careful grounding on the 240V circuit.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river around State Avenue, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses. Those mid-1800s rowhouses were built long before modern electrical codes, so their panels rarely have room for a spa circuit without an upgrade.',
      'The low-lying valley setting means outdoor spa wiring here has to stand up to damp conditions — weather-rated conduit, GFCI protection, and careful grounding. We bond the tub and all nearby metal and run the dedicated circuit to NEC code without disturbing original brickwork.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses with older panels, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a historic Lower Price Hill rowhouse support a hot tub circuit?', a: 'Sometimes, but these 19th-century rowhouses predate modern codes and often have small panels. We evaluate the service first, then run a dedicated 240V GFCI circuit to code, recommending an upgrade if the panel is full.' }],
  },
  'over-the-rhine': {
    intro: 'Most Over-the-Rhine hot tubs go on a roof deck or rear courtyard. The brick buildings from the 1850s to 1880s run on a mix of original and retrofitted wiring with panels that can be shared or full, so we evaluate first, then wire in weather-rated conduit and bond the metal.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. Many are now split into apartments and condos running on a patchwork of original and retrofitted wiring, so a spa circuit starts with a careful look at the panel and service.',
      'A spa on an OTR roof deck or rear courtyard needs outdoor wiring in weather-rated conduit, a disconnect within sight, and full bonding around the water. We size the dedicated 240V circuit and add GFCI protection so a new spa does not overload shared or aging electrical in these converted buildings.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, a spa install usually starts with:',
    localFaqs: [{ q: 'Can I add a hot tub circuit in a converted Over-the-Rhine building?', a: 'Often, but OTR’s historic buildings run on a mix of original and retrofitted wiring, and panels can be shared or full. We evaluate the service first, then run a dedicated 240V GFCI circuit to code for your unit.' }],
  },
  'downtown': {
    intro: 'Hot tub wiring downtown means a terrace or loft deck, not a backyard pad. Electrical ranges from modern risers in towers to original lines in early-1900s buildings turned residential, so we confirm what the panel can carry, then run a 240V GFCI circuit in weather-rated conduit with proper bonding.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures between the river and Over-the-Rhine. Electrical here ranges from modern stacked risers in towers to original lines in early-1900s buildings turned residential, so a spa circuit starts with confirming what the panel and service can carry.',
      'A spa on a terrace or loft deck needs outdoor wiring in weather-rated conduit, a disconnect within sight, and full bonding around the water. We size the dedicated 240V circuit, add GFCI protection, and coordinate the install to NEC code in both towers and older conversions.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, a spa install usually starts with:',
    localFaqs: [{ q: 'Can you wire a hot tub on a downtown high-rise or loft terrace?', a: 'Yes. We work in towers and converted loft buildings regularly. We confirm the panel can carry the load, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring and proper bonding to code.' }],
  },
  'west-end': {
    intro: 'West End homes near TQL Stadium range from historic Italianate rowhouses to mid-century houses, so hot tub wiring starts with an evaluation of that home’s panel. The older brick homes often have full ones. On the low Mill Creek ground we take care grounding the outdoor run.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer development. That range means panels vary widely, so a spa circuit starts with an evaluation of the specific home’s service.',
      'The older brick homes here carry decades-old wiring and panels that may be full, while the low ground near the Mill Creek basin makes weather-rated outdoor conduit and solid grounding important for any backyard or patio spa. We bond the tub and run the dedicated 240V GFCI circuit to NEC code.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can an older West End brick home handle a hot tub circuit?', a: 'It depends on the panel, since West End homes range from historic rowhouses to mid-century houses. We evaluate the service first, then run a dedicated 240V GFCI circuit to code, recommending an upgrade if the panel is full.' }],
  },
  'mount-adams': {
    intro: 'Steep grades push most Mount Adams hot tubs onto decks and terraces instead of yards. The 19th-century rowhouse panels are often small, so we evaluate the service first, then run a dedicated 240V GFCI circuit up to the deck in weather-rated conduit and bond everything at the tub.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Panels in century-old rowhouses are often small, so a spa circuit usually follows a service evaluation.',
      'Decks and terraces are common here given the hillside setting, and a spa on one needs outdoor wiring in weather-rated conduit, a disconnect within sight, and full bonding. We size the dedicated 240V circuit and add GFCI protection, working around the tight access the hill is known for.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, a spa install usually starts with:',
    localFaqs: [{ q: 'Can you wire a hot tub on a Mount Adams deck on the steep streets?', a: 'Yes. We work the hill regularly and come prepared for the narrow streets and tight access. We evaluate the rowhouse panel first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'mount-auburn': {
    intro: 'Many of Mount Auburn’s 19th-century homes and mansions are now apartments with old, shared or full panels, so hot tub wiring there starts with a hard look at the service. When there is capacity, we run a dedicated 240V GFCI circuit to code.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. Those Victorian-era homes carry some of the oldest electrical in the city, so a spa circuit starts with a hard look at the panel.',
      'In subdivided houses, a new spa can overload a shared or undersized panel, so we evaluate the service before adding load. For a backyard or terrace tub we run weather-rated conduit, add a disconnect within sight, and bond everything around the water to NEC code.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a subdivided Mount Auburn home handle a hot tub circuit?', a: 'Sometimes, but these grand 19th-century homes often have old, shared, or full panels. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if needed.' }],
  },
  'clifton': {
    intro: 'Clifton’s large Victorian and early-1900s homes near the Ludlow Avenue Gaslight District usually have room for a backyard hot tub. Many still run on wiring and panels over a century in service, so we evaluate first, then run a 240V GFCI circuit in weather-rated conduit under the mature trees.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Many of those big older houses still run on original wiring with panels over a century in service, so a spa circuit starts with an evaluation.',
      'The generous yards behind these homes are natural spots for a backyard spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and proper grounding under the mature trees. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a large older Clifton home handle a hot tub circuit?', a: 'Often, but many Clifton homes still run on century-old wiring and panels that may be full. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'corryville': {
    intro: 'Near UC, Corryville lots are tight, so a hot tub often sits on a deck close to the house. Much of the housing is older and heavily used, with aging panels, so we check the service before wiring a 240V GFCI circuit in weather-rated conduit with full bonding.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. With so much older, densely packed housing, panels here are frequently aging and full, so a spa circuit starts with a service evaluation.',
      'On the tight lots common near campus, a backyard or deck spa needs outdoor wiring in weather-rated conduit and a disconnect within sight, with full bonding around the water. We size the dedicated 240V circuit and add GFCI protection so the new load does not strain aging electrical.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, a spa install usually starts with:',
    localFaqs: [{ q: 'Can an older Corryville home near UC handle a hot tub circuit?', a: 'It depends on the panel, since much of Corryville’s housing is older and heavily used. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if the panel is full.' }],
  },
  'northside': {
    intro: 'Late-1800s and early-1900s homes off Hamilton Avenue usually have small panels, so Northside hot tub wiring starts with confirming there is room. The streets run down toward the Mill Creek valley, where the ground stays damp, which means weather-rated conduit and solid grounding on the spa circuit.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Panels in homes that old are often small, so confirming there is room for a 240V spa circuit comes first.',
      'The low ground near Mill Creek means a backyard or patio spa needs weather-rated conduit and solid grounding to handle damp conditions. We add a disconnect within sight, bond the tub and nearby metal, and size the dedicated GFCI circuit to NEC code.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, a spa install usually starts with:',
    localFaqs: [{ q: 'Can an older Northside home handle a hot tub circuit?', a: 'Often, but late-1800s and early-1900s Northside homes have small panels that may be full. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'college-hill': {
    intro: 'College Hill’s larger lots along Hamilton Avenue suit a backyard hot tub. The early-1900s and mid-century homes have decades-old panels, so we confirm capacity first, then wire a dedicated 240V GFCI circuit in weather-rated conduit with a disconnect in sight of the water, or recommend an upgrade.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. Across that range, panels are decades old, so a spa circuit starts with confirming the service can carry the new load.',
      'The larger lots common here suit a backyard spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and proper grounding for the four-season climate. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a College Hill home handle a hot tub circuit?', a: 'Many can, but panels in the area’s early-1900s and mid-century homes are decades old. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if it is full.' }],
  },
  'walnut-hills': {
    intro: 'In Walnut Hills, many 19th-century homes and buildings near Peebles Corner are split into units with old or shared panels, and a hot tub can overload one. We evaluate the service first, then wire the spa on its own dedicated 240V GFCI circuit, or recommend an upgrade.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of that century-old housing is now split into units running on aging electrical, so a spa circuit starts with a careful evaluation of the panel.',
      'In multi-unit buildings, a new spa can overload a shared or undersized panel, so we confirm capacity before adding load. For a backyard or terrace tub we run weather-rated conduit, add a disconnect within sight, and bond everything around the water to NEC code.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a Walnut Hills building support a hot tub circuit?', a: 'Sometimes, but many Walnut Hills buildings are split into units with old or shared panels. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if there is no room.' }],
  },
  'east-walnut-hills': {
    intro: 'Deep lots behind the stately homes around Woodburn Avenue and DeSales Corner give East Walnut Hills plenty of room for a hot tub. Those century-old houses often still run original wiring, so we check the panel first, then run a 240V GFCI circuit in weather-rated conduit.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often still carry original wiring, so a spa circuit starts with confirming the panel can take it.',
      'The deep lots behind these stately homes suit a backyard spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and grounding that holds up to the four-season climate. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a stately older East Walnut Hills home handle a hot tub circuit?', a: 'Often, but these century-old homes frequently run on original wiring and panels that may be full. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'avondale': {
    intro: 'Tight early-1900s lots near the hospitals and the zoo mean an Avondale hot tub usually goes on a deck. Much of the housing is older rental with panels under heavy use, so we evaluate the service before running a 240V GFCI circuit in weather-rated conduit with bonding around the water.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of that housing is older and densely built, much of it rental, so panels are often aging and under heavy use — which makes a service evaluation the first step before a spa circuit.',
      'On the tight lots common here, a backyard or deck spa needs outdoor wiring in weather-rated conduit and a disconnect within sight, with full bonding around the water. We size the dedicated 240V circuit and add GFCI protection so the new load does not strain an already busy panel.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, a spa install usually starts with:',
    localFaqs: [{ q: 'Can an older Avondale home handle a hot tub circuit?', a: 'It depends on the panel, since much of Avondale’s housing is older and heavily used. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if it is full.' }],
  },
  'hyde-park': {
    intro: 'Tudors, colonials and brick foursquares around Hyde Park Square usually have generous backyards, and that is where most hot tubs go. The panels in these early-1900s homes are often decades old, so we confirm capacity first, then run a 240V GFCI circuit in weather-rated conduit.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. The panels in these big older homes are often decades old, so a spa circuit starts with confirming the service has capacity.',
      'The generous lots behind these homes are ideal for a backyard spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and proper grounding under the mature trees. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a large Hyde Park home near the Square handle a hot tub circuit?', a: 'Many can, but the panels in these early-1900s homes are often decades old and sometimes full. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'oakley': {
    intro: 'An Oakley bungalow’s backyard or patio is usually the right spot for a hot tub, but the early-1900s bungalows around Oakley Square were built with small panels. We evaluate the service, then run a dedicated 240V GFCI circuit in weather-rated conduit with a disconnect you can see from the tub.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows that fill much of Oakley were built with small panels, so a spa circuit usually starts with a service evaluation.',
      'These bungalows typically have a backyard or patio that suits a spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and proper grounding for the four-season climate. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can an Oakley bungalow handle a hot tub circuit?', a: 'Often, but the early-1900s bungalows around Oakley Square frequently have small panels. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if there is no room.' }],
  },
  'mount-lookout': {
    intro: 'Hilly lots near Ault Park mean a Mount Lookout hot tub often sits on a deck or a graded backyard. The older homes carry decades-old wiring, so we confirm the panel can take a 240V spa circuit, then run it in weather-rated conduit, grounded to suit the slope.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes here carry decades-old wiring, so a spa circuit starts with confirming the panel can carry the load.',
      'On the hilly lots near Ault Park, a deck or backyard spa needs outdoor wiring in weather-rated conduit, a disconnect within sight, and grounding suited to the grade and four-season climate. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can an older Mount Lookout home handle a hot tub circuit?', a: 'Many can, but the area’s older homes carry decades-old wiring and panels that may be full. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'columbia-tusculum': {
    intro: 'Columbia-Tusculum was settled in 1788, and hot tub wiring behind its Painted Ladies starts with a panel check, since many still run aging wiring. The low riverside ground matters too. We run a dedicated 240V GFCI circuit in weather-rated conduit with solid grounding, without disturbing restored interiors.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful Painted Ladies — restored Victorian homes — on the east side near the Ohio River. The age of those Victorian and early homes means original wiring well past its service life, so a spa circuit starts with a panel evaluation.',
      'The low riverside ground here makes weather-rated conduit and solid grounding important for any backyard or patio spa. We add a disconnect within sight, bond the tub and nearby metal around the water, and size the dedicated 240V GFCI circuit to NEC code without disturbing restored details.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a historic Columbia-Tusculum Victorian handle a hot tub circuit?', a: 'Sometimes, but these Painted Lady and early homes often run on aging wiring with small panels. We evaluate the service first, then run a dedicated 240V GFCI circuit to code, careful not to disturb restored features.' }],
  },
  'mount-washington': {
    intro: 'Mount Washington houses along Beechmont Avenue range from early-1900s to mid-century, and most have a yard that fits a hot tub. Their panels are decades old, so we confirm there is capacity, then handle the dedicated 240V GFCI circuit through to a disconnect within sight of the tub.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Panels across that range are decades old, so confirming there is capacity for a 240V spa circuit comes first.',
      'These single-family homes generally have the yard for a backyard or patio spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and proper grounding for the four-season climate. We size the dedicated circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a Mount Washington home off Beechmont handle a hot tub circuit?', a: 'Many can, but the area’s early-1900s and mid-century homes have decades-old panels. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code, or recommend an upgrade if it is full.' }],
  },
  'madisonville': {
    intro: 'Plenty of early-1900s Madisonville homes along Madison Road have a backyard ready for a hot tub. What they need is a panel check, since many run on aging ones, then a dedicated 240V GFCI circuit in weather-rated conduit, grounded to hold up through winter.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of Madisonville run on aging panels, so a spa circuit starts with a service evaluation.',
      'The yards behind these older homes suit a backyard or patio spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and proper grounding for the four-season climate. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'In Madisonville’s older homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can an older Madisonville home handle a hot tub circuit?', a: 'Often, but the area’s early-1900s homes run on aging panels that may be full. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if there is no room.' }],
  },
  'pleasant-ridge': {
    intro: 'Pleasant Ridge has a lot of classic brick two-families, and adding a hot tub to one can overload a shared or undersized panel. So we check capacity on the decades-old service first, then run a dedicated 240V GFCI circuit to code, or explain the upgrade if there is no room.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those older single- and two-family homes carry decades-old panels, so a spa circuit starts with confirming the service can carry the load.',
      'In a two-family, a new spa can overload an undersized or shared panel, so we evaluate capacity before adding load. For a backyard or patio tub we run weather-rated conduit, add a disconnect within sight, and bond everything around the water to NEC code.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a Pleasant Ridge two-family handle a hot tub circuit?', a: 'Sometimes, but the brick two-families here often have older, shared, or full panels. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if there is no room.' }],
  },
  'westwood': {
    intro: 'Westwood is Cincinnati’s most populous neighborhood, and plenty of its single-family yards along Harrison Avenue suit a hot tub. Early-1900s and mid-century panels there are decades old and sometimes full, so we evaluate first, then run the spa circuit in weather-rated conduit with a disconnect within sight.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. Across that range, panels are decades old, so a spa circuit starts with a service evaluation.',
      'The yards behind Westwood’s single-family homes suit a backyard or patio spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and grounding for the four-season climate. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a Westwood home off Harrison Avenue handle a hot tub circuit?', a: 'Many can, but Westwood’s early-1900s and mid-century homes have decades-old panels that may be full. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'norwood': {
    intro: 'Norwood’s streetcar-era lots are small, so a hot tub ends up close to the house. The early-1900s homes and two-families often have small, full panels, so we confirm the service can take the load. Short run or not, the wiring goes in weather-rated conduit with full bonding.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing usually has small panels, so a spa circuit starts with confirming the service can take the new load.',
      'On the small lots common here, a backyard or patio spa needs outdoor wiring in weather-rated conduit and a disconnect within sight, with full bonding around the water. We size the dedicated 240V circuit and add GFCI protection so a spa does not overload an already full panel.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a century-old Norwood home handle a hot tub circuit?', a: 'Sometimes, but Norwood’s early-1900s homes and two-families often have small, full panels. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if there is no room.' }],
  },
  'blue-ash': {
    intro: 'Blue Ash yards, in mid-century neighborhoods and newer subdivisions alike, usually have space for a patio hot tub. Even the newer houses are decades old now, so we check the panel has capacity, then wire a dedicated 240V GFCI circuit and ground it for the four-season climate.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions. Even the newer housing here is now decades old, so a spa circuit starts with confirming the panel has capacity before adding the load.',
      'The yards behind Blue Ash’s homes suit a backyard or patio spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and grounding for the four-season climate. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a Blue Ash home handle a hot tub circuit?', a: 'Often, but even Blue Ash’s newer subdivisions are now decades old, and panels can be full. We evaluate the service first, then run a dedicated 240V GFCI circuit with weather-rated outdoor wiring to code.' }],
  },
  'montgomery': {
    intro: 'Montgomery homes range from 19th-century buildings in the historic district to decades-old subdivisions, so hot tub wiring starts with that home’s panel. The subdivisions tend to have larger lots, so the spa can sit farther out. We plan for that run and keep it in weather-rated conduit.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. With electrical that spans century-old structures to decades-old subdivisions, a spa circuit starts with an evaluation of the specific home’s panel.',
      'The larger lots common in Montgomery’s subdivisions suit a backyard or patio spa, which means outdoor wiring in weather-rated conduit, a disconnect within sight, and grounding for the four-season climate. We size the dedicated 240V circuit, add GFCI protection, and bond the tub to NEC code.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, a spa install usually starts with:',
    localFaqs: [{ q: 'Can a Montgomery home handle a hot tub circuit?', a: 'It depends on the home, since Montgomery’s panels range from century-old structures to decades-old subdivisions. We evaluate the service first, then run a dedicated 240V GFCI circuit to code or recommend an upgrade if it is full.' }],
  },
};
