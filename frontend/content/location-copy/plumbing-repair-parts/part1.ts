export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Plumbing repair in Sedamsville usually traces back to original galvanized supply lines in old hillside homes, which corrode inside and cause weak pressure and small leaks at old joints and valves. Cast-iron drains slow and clog too. We check whether it is one fixture or the whole line.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, where much of the housing climbs the hillside above River Road and dates to the late 1800s and early 1900s. Homes that old usually still run original galvanized supply lines that corrode from the inside, which shows up as weak water pressure and a string of small leaks at aging joints and shut-off valves.',
      'The original cast-iron drains in these houses slow and clog as they age, and worn faucet cartridges and toilet parts are common after decades of use. We diagnose whether a problem is one fixture or a failing line feeding the whole house, so the repair actually holds.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes with original galvanized lines, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does an older Sedamsville home need so many plumbing repairs?', a: 'Sedamsville’s century-old homes run aging galvanized supply lines and cast-iron drains that corrode, drop pressure, and develop leaks over time. We fix the root cause and reach most homes the same day.' }],
  },
  'sayler-park': {
    intro: 'Low pressure in Sayler Park’s Victorian and early-1900s frame houses usually comes from original galvanized supply lines closing up with corrosion. In the floodplain, damp basements also wear on old drain joints and shut-off valves. Our plumbing repair traces each problem to its source rather than swapping parts blind.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before annexation by Cincinnati in the early 1900s, and its streets are still lined with Victorian and early-1900s frame houses whose original galvanized supply lines have slowly closed up with corrosion, dropping pressure at the fixtures.',
      'The riverfront sits in the Ohio River floodplain, so saturated ground and damp basements wear on old drain joints and shut-off valves, and a slow drain in a low-lying home tends to get worse over time. We trace each problem to its source rather than swapping parts blind, so the fix lasts.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame homes near the floodplain, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why is the water pressure so low in my older Sayler Park home?', a: 'In Sayler Park’s century-old frame houses, the original galvanized supply lines corrode shut from the inside and choke off pressure. We find which lines are restricted and repair the root cause, usually the same day.' }],
  },
  'riverside': {
    intro: 'Riverside plumbing repair often involves a slow drain on low river bottomland, where high groundwater keeps basements damp and wears on old joints and shut-off valves. Original galvanized supply lines are the norm along River Road. We work out whether it is one fixture or the line feeding the house.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati running along River Road and US-50, wedged between Sedamsville and Sayler Park with the hillside on one side and the Ohio River on the other. Together with Sedamsville it holds some of the oldest riverfront housing on the west side, so original galvanized supply lines and aging drains are the norm here.',
      'Many homes sit on low river bottomland where high groundwater keeps basements and crawl spaces damp, which is hard on old drain joints and shut-off valves and lets a slow drain quietly turn into a stubborn clog. We diagnose whether it is one fixture or an aging line feeding the house, then fix the source.',
    ],
    commonIntro: 'On Riverside’s low river-bottom lots with aging lines, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does my Riverside home keep having the same drain problem?', a: 'On Riverside’s low river-bottom lots, the original cast-iron drains slow and clog as they corrode, so clearing the symptom alone does not last. We find the failing section and repair the root cause the same day.' }],
  },
  'east-price-hill': {
    intro: 'East Price Hill plumbing repairs often start in one apartment of a two-family and end at a shared line. The dense early-1900s homes around Warsaw Avenue still run original galvanized and cast-iron plumbing. We figure out whether a repair belongs to one unit or the whole building before opening anything.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats — the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing: two- and three-story frame homes and brick two-families built close together, most still running original galvanized and cast-iron plumbing.',
      'In subdivided two-families, units share aging supply and drain lines, so a worn fixture or a partial clog in one apartment often traces back to a shared line that needs attention. We figure out whether a repair belongs to one unit or the whole building before we open anything up.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Can you fix plumbing in one unit of an East Price Hill two-family without disrupting the other?', a: 'Yes. The two-families around Warsaw Avenue share aging lines, so we isolate and repair the problem in one unit without shutting down the whole building, usually the same day.' }],
  },
  'west-price-hill': {
    intro: 'In West Price Hill’s 1920s to 1950s homes along Glenway Avenue, plumbing repair usually means galvanized supply lines closing up and dropping pressure, or mid-century fixtures, valves and shut-offs that have simply worn out. We diagnose which one is failing and repair the source so the fix holds.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but that still means plumbing several decades old.',
      'In homes from that era we routinely find original galvanized supply lines slowly closing up with corrosion and dropping pressure, along with mid-century fixtures, valves, and shut-offs that have simply worn out. We diagnose which is failing and repair the source so the fix holds.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why is my West Price Hill home losing water pressure?', a: 'Many homes near Glenway Avenue date to the 1920s through 1950s and still run galvanized supply lines that corrode shut from the inside. We pinpoint the restricted lines and fix the root cause, usually the same day.' }],
  },
  'lower-price-hill': {
    intro: 'Lower Price Hill rowhouses from the mid-1800s run original galvanized and cast-iron plumbing, so plumbing repair there means corroded supply lines dropping pressure and old drains that slow and clog. The damp valley location is hard on shut-off valves. We repair the source without damaging original features.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, most of them still on original galvanized and cast-iron plumbing.',
      'Those mid-1800s rowhouses were built long before modern plumbing codes, so corroded supply lines drop pressure and aging cast-iron drains slow and clog. The low valley location keeps basements damp, which is hard on old shut-off valves and joints. We repair the source while taking care not to damage original features.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses down in the valley, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Can you repair plumbing in an old Lower Price Hill brick rowhouse without damaging it?', a: 'Yes. We work on the historic 19th-century rowhouses around State Avenue regularly and repair aging galvanized and cast-iron plumbing at the source with care for original features, usually the same day.' }],
  },
  'over-the-rhine': {
    intro: 'Over-the-Rhine plumbing repair often means a worn fixture or partial clog in one unit that traces back to a brittle cast-iron stack or galvanized riser several units share. Most of these brick buildings date from the 1850s to 1880s. We find where the problem really sits before opening anything.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s.',
      'Many of those buildings are now split into apartments and condos running a patchwork of original and retrofitted plumbing: brittle cast-iron stacks, galvanized risers, and shared lines where a worn fixture or partial clog in one unit traces back to a line several units depend on. We diagnose where the problem really sits before opening anything.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Can you handle plumbing repairs in a multi-unit OTR building?', a: 'Yes. OTR is full of historic buildings split into apartments and condos on shared lines. We isolate and repair the problem in one unit without shutting down water to the whole building, usually the same day.' }],
  },
  'downtown': {
    intro: 'Downtown plumbing repairs range from a simple cartridge swap in a high-rise condo to a tired line in an early-1900s building that several units share. We diagnose which it is first, then repair the source and coordinate access so one floor’s repair does not disrupt the rest of the building.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'Plumbing here ranges from modern stacked risers in towers to original lines in early-1900s buildings turned residential, so a worn fixture or a slow drain can mean anything from a simple cartridge swap to a tired line shared by several units. We diagnose which it is and repair the source, coordinating access so one floor’s repair does not disrupt the rest.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Can you do plumbing repairs in a downtown high-rise or condo?', a: 'Yes. We work in towers and converted loft buildings regularly and coordinate access and water shutoffs so a repair on one floor does not disrupt the rest of the building, usually the same day.' }],
  },
  'west-end': {
    intro: 'West End plumbing repair mostly covers older brick homes near TQL Stadium with decades-old galvanized and cast-iron plumbing, where corroded supply lines drop pressure and drains slow and clog. Low ground near the Mill Creek basin keeps basements damp. We trace each problem to its source.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and some newer development mixed in.',
      'The older brick homes here carry decades-old galvanized and cast-iron plumbing, so corroded supply lines drop pressure and aging drains slow and clog. The low ground near the Mill Creek basin keeps basements damp, which wears on old joints and shut-off valves. We trace each problem to its source so the repair lasts.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does my older West End home have so many plumbing issues?', a: 'The West End’s historic brick homes run aging galvanized and cast-iron plumbing that corrodes, drops pressure, and clogs over time. We fix the root cause and reach the neighborhood quickly, often the same day.' }],
  },
  'mount-adams': {
    intro: 'Plumbing repair on the Mount Adams hill often starts with a small leak in a basement or crawl space that has tracked along the foundation before anyone noticed. The tightly packed 19th-century rowhouses still carry old supply and drain lines. We pinpoint the source rather than guess.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes.',
      'Those century-old rowhouses still carry old supply and drain lines, so corrosion drops pressure and aging drains slow and clog. On the steep grade, a small leak in a basement or crawl space can track along the foundation before anyone spots it, which is why we pinpoint the source rather than guess.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why are leaks hard to spot in a Mount Adams hillside home?', a: 'On Mount Adams’ steep grades, a slow leak can track along the foundation before it shows, so we use detection tools to find the source in these century-old rowhouses and fix it the same day.' }],
  },
  'mount-auburn': {
    intro: 'Mount Auburn has some of the oldest plumbing in the city, and plumbing repair in its Victorian homes usually means corroded galvanized lines dropping pressure and leaking. Many houses are now apartments, so a worn fixture or clog often traces to a shared line. We diagnose where it sits first.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Those Victorian-era homes carry some of the oldest plumbing in the city — original cast-iron drains and galvanized supply lines that corrode, drop pressure, and develop leaks. In subdivided houses, a worn fixture or partial clog often traces to a line several units share, so we diagnose where the problem really sits before repairing.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does an older Mount Auburn home need so many plumbing repairs?', a: 'Mount Auburn’s 19th-century homes run some of the oldest cast-iron and galvanized plumbing in the city, which corrodes, drops pressure, and leaks over time. We fix the root cause and reach the neighborhood the same day.' }],
  },
  'clifton': {
    intro: 'Clifton plumbing repair often involves aging galvanized supply lines dropping pressure in big Victorian and early-1900s homes, and fixtures wearing out faster in houses rented near campus. We diagnose whether the problem is one fixture or an aging line feeding the house, then repair the source.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Many of those big older houses still run plenty of original plumbing, so aging galvanized supply lines drop pressure and worn fixtures wear out faster in the houses now used as rentals near campus. We diagnose whether a problem is one fixture or an aging line feeding the house and repair the source.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Do you handle plumbing repairs in student rentals near UC in Clifton?', a: 'Yes. We work on the older homes and rentals throughout Clifton and the university area, fixing worn fixtures and aging supply lines at the source, usually the same day.' }],
  },
  'corryville': {
    intro: 'Worn faucet cartridges, tired shut-off valves and slow drains are the usual plumbing repair calls in Corryville, where early-1900s homes near Short Vine take heavy daily use as student rentals. Units share walls and stacks, so we diagnose where a clog sits before repairing it.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals.',
      'With so much older, densely packed housing turned into rentals, the aging lines take heavy daily use, so worn faucet cartridges, tired shut-off valves, and slow drains are common. Because units share walls and stacks, a clog in one can point back to a shared line, so we diagnose where the problem sits before repairing.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why do plumbing fixtures wear out fast in Corryville rentals?', a: 'Corryville’s older homes near UC see heavy daily use as rentals, so faucet cartridges, valves, and drains wear out faster than usual. We replace and repair them at the source and reach the area the same day.' }],
  },
  'northside': {
    intro: 'Northside plumbing repair usually involves original galvanized supply lines that corrode and drop pressure, and cast-iron drains that slow and clog, in late-1800s and early-1900s homes along Hamilton Avenue. Damp basements near Mill Creek wear on old joints. We trace each problem to its source.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'The age of the housing means original galvanized supply lines that corrode and drop pressure are common, along with cast-iron drains that slow and clog. The low ground near Mill Creek keeps basements damp, which wears on old joints and shut-off valves. We trace each problem to its source so the repair holds.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does my Northside home keep getting the same slow drain?', a: 'Northside’s late-1800s and early-1900s homes run aging cast-iron drains that corrode and narrow, so clearing the symptom alone does not last. We find the failing section and fix the root cause the same day.' }],
  },
  'college-hill': {
    intro: 'Low water pressure in a College Hill home is often a slowly corroding galvanized supply line, while worn original fixtures and slow clay or cast-iron drains account for most other plumbing repair along Hamilton Avenue. We diagnose the real cause before swapping parts, so the fix lasts.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district.',
      'In homes this age, slowly corroding galvanized supply lines drop pressure and the original fixtures and shut-offs are wearing out, while older clay or cast-iron drains slow and clog. We diagnose which is the real cause before swapping parts, so the fix lasts.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why is my College Hill home losing water pressure?', a: 'Many College Hill homes date to the early 1900s and still run galvanized supply lines that corrode shut from the inside. We pinpoint the restricted lines and fix the root cause, usually the same day.' }],
  },
  'walnut-hills': {
    intro: 'Walnut Hills plumbing repair often happens in 19th-century homes now split into units, where aging cast-iron and galvanized plumbing corrodes, drops pressure and clogs. A worn fixture or partial clog in one apartment can trace to a shared line, so we diagnose where it sits before repairing.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Its century-old housing — much of it now split into units — runs aging cast-iron and galvanized plumbing that corrodes, drops pressure, and clogs. In multi-unit buildings, a worn fixture or partial clog often traces back to a shared line, so we diagnose where the problem really sits before repairing.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Can you fix plumbing in one Walnut Hills apartment without affecting the others?', a: 'Yes. Many Walnut Hills buildings are split into units on shared lines, so we isolate and repair the problem in one apartment without shutting off water to the whole building, usually the same day.' }],
  },
  'east-walnut-hills': {
    intro: 'East Walnut Hills homes near Woodburn Avenue often keep their original plumbing, and slow drain leaks can track quietly behind the woodwork. Plumbing repair there means pinpointing the source so we open only what we have to, protecting the finished spaces these early-1900s homes are known for.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets.',
      'The large, century-old houses here often still carry original plumbing, so corroded galvanized supply lines drop pressure and aging drains develop slow leaks that can quietly track behind original woodwork. We pinpoint the source so we open up only what we have to and protect the finished spaces these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does an older East Walnut Hills home develop hidden leaks?', a: 'East Walnut Hills’ stately early-1900s homes run aging galvanized lines that corrode and seep behind plaster and woodwork before anyone notices. We pinpoint the source and fix the root cause the same day.' }],
  },
  'avondale': {
    intro: 'Avondale’s older, densely built housing near the hospitals and zoo is largely rental, and plumbing repair there usually means worn faucet cartridges, tired shut-off valves and slow drains from heavy daily use. In multi-unit buildings, we check whether a problem traces to a shared line before repairing.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'A lot of Avondale’s housing is older and densely built, much of it rental, so the aging lines take heavy daily use — worn faucet cartridges, tired shut-off valves, and slow drains are common. In multi-unit buildings, a problem in one unit can trace to a shared line, so we diagnose where it sits before repairing.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why do Avondale rentals near the hospitals have frequent plumbing issues?', a: 'Avondale’s older, densely built homes see heavy daily use as rentals, so fixtures, valves, and drains wear out faster. We repair them at the source and reach the uptown area quickly, often the same day.' }],
  },
  'hyde-park': {
    intro: 'Hidden leaks are the plumbing repair that worries Hyde Park owners most, since a slow leak can damage finished basements and original details in large early-1900s homes before anyone notices. Aging galvanized lines also drop pressure. We pinpoint the source and open only what we have to.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets.',
      'These big older homes are exactly where an aging galvanized supply line can drop pressure and a slow leak can do expensive damage to finished basements and original details before it is noticed. We pinpoint the source so we open up only what we have to and fix the root cause.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does a large Hyde Park home develop hidden leaks?', a: 'Hyde Park’s big early-1900s homes run aging supply lines that corrode and seep into finished spaces before anyone notices. We pinpoint the source and fix the root cause, usually the same day.' }],
  },
  'oakley': {
    intro: 'Oakley bungalows were built with galvanized supply lines and cast-iron drains now well past their prime, so plumbing repair there usually means low pressure, worn fixtures or drains that slow and clog. We diagnose whether a problem is one fixture or an aging line, then repair the source.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'The older bungalows that fill much of Oakley were built with galvanized supply lines and cast-iron drains that are now well past their prime, so corrosion drops pressure, fixtures wear out, and drains slow and clog. We diagnose whether a problem is one fixture or an aging line and repair the source.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does my older Oakley bungalow keep needing plumbing repairs?', a: 'Oakley’s early-1900s bungalows run galvanized supply lines and cast-iron drains that corrode, drop pressure, and clog over time. We fix the root cause and reach the east side quickly, often the same day.' }],
  },
  'mount-lookout': {
    intro: 'Mount Lookout plumbing repair often involves corroded supply lines dropping pressure and aging drains in early-1900s homes near Ault Park. On the hillside grade, a slow leak in a basement or crawl space can track along the foundation before it shows, so we pinpoint the source rather than guess.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets.',
      'The older homes here carry decades-old plumbing, so corroded supply lines drop pressure and aging drains slow and clog. On the hillside grade, a slow leak in a basement or crawl space can track along the foundation before it shows, so we pinpoint the source rather than guess.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why is a leak hard to find in a Mount Lookout hillside home?', a: 'On Mount Lookout’s hilly streets, a slow leak can track along the foundation before it surfaces, so we use detection tools to find the source in these older homes and fix it the same day.' }],
  },
  'columbia-tusculum': {
    intro: 'Columbia-Tusculum’s Painted Ladies carry original plumbing well past its service life, so plumbing repair there is usually corroded supply lines dropping pressure and aging drains that slow and clog. The low riverside ground keeps basements damp. We repair the source without disturbing original features.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, and is known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'Those Victorian and early homes carry original plumbing well past its service life, so corroded supply lines drop pressure and aging drains slow and clog. The low riverside ground keeps basements damp, which wears on old joints and valves. We repair the source while taking care not to disturb original features.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Can you repair plumbing in a Columbia-Tusculum Victorian without damaging it?', a: 'Yes. We work on the neighborhood’s Painted Lady and older homes regularly and repair aging plumbing at the source with care for original features, usually the same day.' }],
  },
  'mount-washington': {
    intro: 'Mount Washington plumbing repair along Beechmont Avenue mostly involves original galvanized supply lines that corrode and drop pressure, mid-century fixtures and shut-offs that are wearing out, and older drains that clog. We diagnose which is the real cause before swapping parts so the repair holds.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'In homes of that era, original galvanized supply lines corrode and drop pressure, the mid-century fixtures and shut-offs are wearing out, and older drains slow and clog. We diagnose which is the real cause before swapping parts so the repair holds.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does my Mount Washington home have low water pressure?', a: 'Many homes along Beechmont Avenue date to the early-1900s through mid-century era and still run galvanized supply lines that corrode shut from the inside. We pinpoint the restricted lines and fix the root cause the same day.' }],
  },
  'madisonville': {
    intro: 'Older homes along Madison Road make up much of Madisonville, and their aging galvanized and cast-iron plumbing drives most plumbing repair there: corroded supply lines dropping pressure, worn fixtures and drains that clog. We diagnose whether it is one fixture or an aging line, then fix the source.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'The older houses that make up much of Madisonville run aging galvanized and cast-iron plumbing, so corroded supply lines drop pressure, fixtures wear out, and drains slow and clog. We diagnose whether a problem is one fixture or an aging line feeding the house and repair the source.',
    ],
    commonIntro: 'In Madisonville’s older homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does my older Madisonville home need so many plumbing repairs?', a: 'Madisonville’s early-1900s homes run aging galvanized and cast-iron plumbing that corrodes, drops pressure, and clogs over time. We fix the root cause and reach the east side quickly, often the same day.' }],
  },
  'pleasant-ridge': {
    intro: 'Pleasant Ridge plumbing repair often involves a brick two-family along Montgomery Road, where a worn fixture or partial clog can trace to a line both units share. Decades-old plumbing in these early-1900s homes drops pressure and clogs. We diagnose where the problem sits before repairing.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'Those older single- and two-family homes carry decades-old plumbing, so corroded supply lines drop pressure and aging drains slow and clog. In two-families, a worn fixture or partial clog can trace to a line both units share, so we diagnose where the problem sits before repairing.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Can you fix plumbing in one unit of a Pleasant Ridge two-family without disrupting the other?', a: 'Yes. The brick two-families along Montgomery Road share aging lines, so we isolate and repair the problem in one unit without shutting down water to the other, usually the same day.' }],
  },
  'westwood': {
    intro: 'Across Westwood, plumbing repair keeps coming back to galvanized supply lines closing up with corrosion, worn fixtures and shut-offs, and cast-iron drains that slow and clog. That holds from historic homes near the Town Hall to mid-century streets. We find the real cause before swapping parts.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Across that range of older housing, the common thread is aging plumbing — galvanized supply lines closing up with corrosion and dropping pressure, fixtures and shut-offs that have worn out, and cast-iron drains that slow and clog. We diagnose which is the real cause before swapping parts so the fix holds.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why is my Westwood home losing water pressure?', a: 'Across Westwood’s older and mid-century homes, galvanized supply lines corrode shut from the inside and choke off pressure. We pinpoint the restricted lines and fix the root cause along Harrison Avenue and beyond, usually the same day.' }],
  },
  'norwood': {
    intro: 'Norwood plumbing repairs in its dense grid of early-1900s homes and brick two-families often involve galvanized lines dropping pressure and cast-iron drains that clog. Two-families on small lots often share laterals, so we check whether a clog traces to a shared line before repairing.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'That tightly packed, century-old housing runs aging galvanized supply lines that drop pressure and cast-iron drains that slow and clog, and on small lots two-families often share laterals where a worn fixture or partial clog traces back to a shared line. We diagnose where the problem really sits before repairing the source.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does an older Norwood home need so many plumbing repairs?', a: 'Norwood’s century-old homes run aging galvanized supply lines and cast-iron drains that corrode, drop pressure, and clog over time. We fix the root cause and reach this surrounded-by-Cincinnati city quickly, often the same day.' }],
  },
  'blue-ash': {
    intro: 'Blue Ash plumbing repair covers homes and businesses where original mid-century fixtures, shut-off valves and supply lines are wearing out. Hard water takes a steady toll on faucets and valves here. We diagnose whether the problem is one fixture or an aging line and repair the source.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'Even the "newer" housing here is now decades old, so the original mid-century fixtures, shut-off valves, and supply lines are wearing out, and the area’s hard water takes a steady toll on faucets and valves. We diagnose whether a problem is one fixture or an aging line and repair the source so the fix lasts.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why do faucets and valves wear out in Blue Ash homes?', a: 'Blue Ash’s established homes are now decades old, and the area’s hard water steadily wears on faucets, cartridges, and shut-off valves. We replace and repair them at the source and reach the northeast side the same day.' }],
  },
  'montgomery': {
    intro: 'Montgomery plumbing repairs range from century-old supply lines in the historic district that corrode and drop pressure to worn fixtures and valves in decades-old subdivisions. Hard water takes a toll on both. We diagnose the real cause before swapping parts so the repair holds.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'The plumbing here spans a wide range — from century-old supply lines in the historic core that corrode and drop pressure to decades-old subdivision fixtures and valves that are wearing out, with the area’s hard water taking a toll on both. We diagnose which is the real cause before swapping parts so the repair holds.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, the plumbing repairs we handle most often are:',
    localFaqs: [{ q: 'Why does plumbing wear out in both old and newer Montgomery homes?', a: 'In Montgomery’s historic core, century-old supply lines corrode and drop pressure, while in the newer subdivisions hard water wears on fixtures and valves. We fix the root cause in either case and reach the northeast side the same day.' }],
  },
};
