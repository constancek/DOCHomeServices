export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro:
      'Villages of Roll Hill plumbing repair happens mostly in multi-unit apartment buildings, where heavy daily use wears out washers, faucets and toilets that will not stop running. In stacked buildings a slow leak can spread to a neighboring unit, so we trace it to the actual cause.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings. In housing like that, the fixtures and shut-off valves get years of heavy daily use, so worn washers, dripping faucets, and toilets that won’t stop running are the repairs we see again and again.',
      'When buildings are stacked and densely built, a single slow leak or a failing supply line can spread to a neighboring unit before anyone notices. We trace a leak or low-pressure complaint back to its actual cause — a corroded line, a bad valve, a partial clog — and repair that, so the same unit isn’t calling again next month.',
    ],
    commonIntro: "In Roll Hill's multi-unit buildings, the heavy-use fixtures and shared supply lines drive most of the repairs we handle:",
    localFaqs: [{ q: 'Can you repair a leaking fixture in one Roll Hill apartment without affecting the others?', a: 'Yes. We isolate the line to a single unit, fix the leak or worn fixture at its source, and restore water to the rest of the building the same day.' }],
  },
  'east-westwood': {
    intro:
      'Lost water pressure in a kitchen or bathroom is one of the most common plumbing repairs in East Westwood, where early and mid-1900s homes run galvanized lines closing up with corrosion. On the slopes, aging cast-iron basement drains back up first in heavy rain. We clear and inspect the line.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes. Homes that age tend to run on galvanized supply lines that slowly close up with corrosion, which is why a kitchen or bathroom that has lost its water pressure is one of the most common calls we get here.',
      'The hillside grade adds a second issue: basement drains and floor drains take on extra load during heavy rain, and an aging cast-iron line that already drains slowly will back up first. We clear the clog and inspect the line so we can tell you whether it was a one-off blockage or a pipe that needs attention before next spring.',
    ],
    commonIntro: "In East Westwood's older hillside homes, the corroding supply lines and aging drains explain most of what we repair:",
    localFaqs: [{ q: 'Why is the water pressure so low in my older East Westwood home?', a: 'In early-1900s homes here it is usually galvanized supply lines corroding shut. We pinpoint the restricted section the same day and repair it at the root rather than masking it.' }],
  },
  'western-hills': {
    intro:
      'Tired faucet cartridges, leaking shut-off valves and toilets that ghost-flush are the everyday plumbing repairs around Western Hills Plaza. In the older homes, a sudden pressure drop or recurring backup usually traces to galvanized lines or clay and cast-iron laterals. We diagnose which it is first.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes. Across that span of housing, the worn-out fixtures — tired faucet cartridges, leaking shut-off valves, toilets that ghost-flush — are the bread-and-butter repairs we make week to week.',
      'The older end of that housing also runs on galvanized supply lines and clay or cast-iron sewer laterals, so a sudden pressure drop or a recurring drain backup usually traces to the pipe itself rather than the fixture. We diagnose which it is and repair the actual cause so the problem doesn’t simply come back.',
    ],
    commonIntro: "Across Western Hills' older and mid-century homes, the worn fixtures and aging lines drive the repairs we make most:",
    localFaqs: [{ q: 'My Western Hills toilet keeps running — is that worth a service call?', a: 'Yes. A running toilet wastes water daily and points to a worn flapper or fill valve. We fix it same-day and check the shut-off while we’re there.' }],
  },
  'california': {
    intro:
      'California’s riverfront homes along Kellogg Avenue sit on low ground, so basement floor and laundry drains see extra moisture and sediment, and slow drains are a common plumbing repair there. A slow leak can also sit unnoticed in a damp lower level. We track it to the exact joint.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River. That low-lying position means basement floor drains and laundry drains see more moisture and more sediment, so the slow-draining and partially clogged lines we clear here often trace back to the ground conditions, not just the fixture.',
      'The older homes along the river carry aging supply and drain plumbing, where a slow leak under a sink or a drip behind a wall can sit unnoticed in a damp lower level. We track a leak to the exact joint or fitting and repair it there, so you aren’t chasing water stains around a riverside basement.',
    ],
    commonIntro: "Along California's riverfront homes, the damp lower levels and aging lines shape most of the repairs we make:",
    localFaqs: [{ q: 'My California basement drain is slow — is it the river or the pipe?', a: 'It can be either. We camera and clear the line the same day to find whether it’s sediment from the low riverfront ground or an aging pipe, then repair the root cause.' }],
  },
  'carthage': {
    intro:
      'Low pressure and slow drains in Carthage’s early-1900s homes along Vine Street are usually a pipe problem, not a fixture problem. Galvanized supply lines corrode, and cast-iron drains build scale and take in roots. Our plumbing repair clears the line and checks whether cleaning is enough.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes. Housing that old usually still carries galvanized supply lines and cast-iron drains, so the low pressure and recurring slow drains we see here are typically a pipe problem rather than a fixture problem.',
      'Those original cast-iron drain lines are prone to scale buildup and root intrusion as they age, which turns into the repeat clogs and gurgling drains homeowners call about. We clear the line, look inside it, and tell you plainly whether a simple cleaning solved it or the pipe itself needs repair.',
    ],
    commonIntro: "In Carthage's early-1900s homes, the aging galvanized and cast-iron lines drive most of what we repair:",
    localFaqs: [{ q: 'My Carthage drains keep clogging — why does it keep happening?', a: 'In century-old homes here it’s usually scale or roots in original cast-iron lines. We clear it same-day and inspect the pipe so we can fix the actual cause, not just the latest clog.' }],
  },
  'winton-hills': {
    intro:
      'Winton Hills plumbing repair often happens in multi-unit buildings near Winton Road, where heavy use wears out faucets, valves and toilets. In densely built housing, a leaking supply line or backed-up drain can reach the next unit fast. We find the failed valve, washer or blockage and fix it there.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road with a mix of residential and industrial areas, including multi-unit housing. In multi-unit buildings the fixtures take heavy daily use, so worn faucets, leaking valves, and toilets that won’t stop running are the everyday repairs we make here.',
      'Because the buildings are densely built, a single leaking supply line or backed-up drain can reach a neighboring unit fast. We find the actual source — a failed valve, a worn washer, a partial blockage — and repair it there, so one unit’s problem doesn’t become the whole hallway’s.',
    ],
    commonIntro: "In Winton Hills' homes and multi-unit buildings, the heavy-use fixtures and shared lines drive most repairs:",
    localFaqs: [{ q: 'Can you fix a leak in one Winton Hills apartment unit the same day?', a: 'Yes. We isolate the affected unit, repair the leaking line or fixture at its source, and keep water on for the rest of the building.' }],
  },
  'roselawn': {
    intro:
      'Roselawn homes along Reading Road are mid-century, which means seized shut-off valves, worn faucet cartridges and corroding supply lines make up most plumbing repair there. Older apartment buildings add heavy wear. We check whether the trouble is the fixture or the line behind it, then fix the real cause.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings. Mid-1900s homes are now at the age where the original shut-off valves seize, faucet cartridges wear out, and supply lines start to corrode — the routine fixture repairs that make up most of our visits here.',
      'The older apartment buildings add heavy plumbing wear, where a leaking fixture or a partially clogged drain gets used hard every day. We diagnose whether the trouble is the fixture or the line behind it and repair the real cause, so the fix actually holds.',
    ],
    commonIntro: "Across Roselawn's mid-century homes and apartments, worn fixtures and aging shut-offs drive the repairs we make most:",
    localFaqs: [{ q: 'The shut-off valve under my Roselawn sink is stuck — can you replace it?', a: 'Yes. Seized shut-offs are common in mid-century homes here. We replace the valve same-day so you can isolate that fixture without shutting off the whole house.' }],
  },
  'mount-airy': {
    intro:
      'Mid-century homes beside Mount Airy Forest are old enough for supply lines to corrode and faucet parts to wear out, so leaks and pressure complaints are steady plumbing repair work there. Tree roots also find older sewer laterals. We look at a recurring backup rather than rod it every spring.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, with mid-century single-family homes on hilly, wooded streets. Homes from that era are now old enough that supply lines corrode and faucet and toilet parts wear out, which is why fixture leaks and pressure complaints are steady work here.',
      'The hilltop terrain puts extra strain on drains during heavy rain, and the mature trees in this wooded area send roots toward older sewer laterals. When a drain backs up repeatedly, we clear it and look at the line so we can repair the real cause rather than rod the same clog every spring.',
    ],
    commonIntro: "Across Mount Airy's mid-century homes, the aging fixtures and root-prone laterals drive most of what we repair:",
    localFaqs: [{ q: 'Could the trees near Mount Airy Forest be clogging my sewer line?', a: 'In wooded streets here, roots do get into older laterals. We camera the line the same day, clear it, and repair the cracked section so the roots can’t keep returning.' }],
  },
  'hartwell': {
    intro:
      'A faucet that trickles in a Hartwell home usually traces to an original galvanized supply line corroding shut, not the fixture. The Victorian and early-1900s houses also have cast-iron drains that scale up over decades. Our plumbing repair pinpoints which one it is and fixes that specific cause.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets. Those century-old houses often still carry their original galvanized supply lines, so a faucet that trickles or a whole-house pressure drop usually traces back to a pipe that’s corroding shut, not the fixture.',
      'The same age shows in the drains — original cast-iron lines that scale up and slow down over the decades. We pinpoint whether your problem is a worn fixture, a restricted supply line, or an aging drain, and repair that specific cause so the historic interior isn’t put at risk by a leak you can’t see.',
    ],
    commonIntro: "In Hartwell's Victorian and early-1900s homes, the original galvanized lines and aging drains drive most repairs:",
    localFaqs: [{ q: 'My Hartwell faucet barely trickles — is it the fixture?', a: 'Often it’s the galvanized supply line corroding shut, common in these century-old homes. We find the restricted section same-day and repair it at the source.' }],
  },
  'kennedy-heights': {
    intro:
      'Kennedy Heights plumbing repairs in large early-1900s homes usually point to aging original lines. A slow leak behind a wall or under a finished floor can do quiet damage before anyone spots it, so we trace it to its exact origin and repair it there.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes. Houses that age commonly run on original supply and drain plumbing, so the leaks and low-pressure complaints we handle here usually point to an aging line rather than a quick fixture swap.',
      'In larger older homes, a slow leak behind a wall or under a finished floor can do quiet damage before anyone spots it. We trace the leak to its exact origin and repair it there, so you fix the cause once instead of repainting around a recurring stain.',
    ],
    commonIntro: "In Kennedy Heights' historic homes, the original plumbing and hidden leaks drive most of what we repair:",
    localFaqs: [{ q: 'I see a water stain in my older Kennedy Heights home — can you find the source?', a: 'Yes. We locate the exact leak behind the wall or under the floor the same day and repair it at the source, not just patch the surface.' }],
  },
  'st-bernard': {
    intro:
      'St. Bernard’s century-old homes near Ivorydale sit close together, and galvanized supply lines with low pressure are routine plumbing repair there. Original cast-iron drains and shared laterals scale up and clog, and a backup in one home can reach the next. We clear and inspect the line first.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own small city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes. In a small incorporated village like this, the housing is tightly packed and century-old, so aging galvanized supply lines and the low pressure that comes with them are routine repairs.',
      'On small valley lots, the original cast-iron drains and shared laterals scale up and clog, and a backup in one closely built home can reach the next. We clear and inspect the line, then repair the actual cause — a corroded pipe, a failed joint, a root intrusion — rather than just clearing the symptom.',
    ],
    commonIntro: "In St. Bernard's dense, early-1900s homes, the aging galvanized and cast-iron lines drive most of what we repair:",
    localFaqs: [{ q: 'Do you service St. Bernard even though it’s a separate city?', a: 'Yes. St. Bernard sits in the middle of our service area, surrounded by Cincinnati. We reach it the same day and repair leaks or clogs at the root in its century-old homes.' }],
  },
  'elmwood-place': {
    intro:
      'Corrosion leaks and slow drains are the everyday plumbing repair in Elmwood Place, where closely spaced early-1900s homes run aging galvanized lines and original drains. On low Mill Creek valley ground, basement drains back up first in heavy rain. We inspect the pipe to see if cleaning fixed it.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes. As a small incorporated village with century-old housing, its plumbing leans heavily on aging galvanized supply lines and original drains, so corrosion leaks and slow drains are the everyday repairs here.',
      'The low valley ground means floor and basement drains take on extra water in heavy rain, and an old line that already drains slowly backs up first. We clear the blockage and inspect the pipe so we can tell whether a cleaning fixed it or the aging drain needs a root-cause repair.',
    ],
    commonIntro: "In Elmwood Place's dense valley homes, the aging lines and damp lower levels drive most of what we repair:",
    localFaqs: [{ q: 'My Elmwood Place basement drains slowly after rain — what’s wrong?', a: 'In this valley village it’s usually an aging drain line struggling with extra water. We clear it same-day and inspect the pipe so we fix the actual cause.' }],
  },
  'delhi-hills': {
    intro:
      'Delhi Hills plumbing repair mostly covers mid-century homes above the Ohio where shut-off valves seize, faucet cartridges wear out and supply lines begin to corrode. The hillside grade adds demand on drains in heavy rain. We diagnose whether it is a tired fixture or the line behind it.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River, an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets. Homes built mid-century are now at the age where shut-off valves seize, faucet cartridges wear out, and supply lines begin to corrode — the routine fixture repairs that fill our days here.',
      'The hillside grade puts added demand on drains during heavy rain, so a line that already drains slowly will back up first. We diagnose whether your trouble is a tired fixture or the line behind it and repair the real cause, so the fix lasts longer than the next storm.',
    ],
    commonIntro: "Across Delhi Hills' mid-century homes, the worn fixtures and aging shut-offs drive the repairs we make most:",
    localFaqs: [{ q: 'How fast can you repair a leaking fixture in Delhi Hills?', a: 'Delhi Hills is well within our west-side service area. We reach it the same day and repair the leak at its source, whether it’s the fixture or the line behind it.' }],
  },
  'golf-manor': {
    intro:
      'Golf Manor’s modest mid-century homes are at the age where shut-off valves stick, faucet parts wear out and supply lines corrode, which makes up most plumbing repair there. A small leak or running toilet can waste water for months before anyone notices. We trace each issue to its actual cause.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes. As a small incorporated village with mid-1900s housing, its plumbing is now at the age where shut-off valves stick, faucet parts wear out, and supply lines corrode — the everyday fixture repairs we handle here.',
      'In modest homes of that era, a small leak or a constantly running toilet quietly wastes water for months before it’s noticed. We trace each issue to its actual cause and repair it there, so a quick visit settles the problem rather than postponing it.',
    ],
    commonIntro: "In Golf Manor's mid-century homes, the worn fixtures and corroding supply lines drive most of what we repair:",
    localFaqs: [{ q: 'Do you cover Golf Manor even though it’s a separate village?', a: 'Yes. Golf Manor is surrounded by Cincinnati and sits right in our service area. We reach it the same day and repair leaks or worn fixtures at the source.' }],
  },
  'fairfax': {
    intro:
      'Fairfax plumbing repair along Wooster Pike usually means corrosion leaks and tired faucets in early and mid-1900s homes. Many have a mix of original and replaced plumbing, so we find exactly where a leak or pressure drop starts and repair that section instead of guessing which line is at fault.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. As a small incorporated village with older housing, its plumbing leans on aging supply lines and worn fixtures, so corrosion leaks and tired faucets are the routine repairs we make here.',
      'Homes that span early- to mid-century often have a mix of original and replaced plumbing, which makes it worth finding exactly where a leak or pressure drop starts. We pinpoint the cause and repair that section so you aren’t guessing which fixture or which line is the real culprit.',
    ],
    commonIntro: "In Fairfax's early- and mid-1900s homes, the aging supply lines and worn fixtures drive most of what we repair:",
    localFaqs: [{ q: 'How fast can you repair a leak in Fairfax?', a: 'Fairfax is well within our east-side service area near Mariemont. We arrive the same day and repair the leak at its source in these older village homes.' }],
  },
  'mack': {
    intro:
      'Mack plumbing repair covers newer homes where faucet cartridges fail and shut-off valves seize, and mid-century houses with corrosion leaks in aging supply lines. A slow drain or weak faucet can be a fixture or a line, and the two get treated differently, so we diagnose which first.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes. Even the newer homes here are now old enough for faucet cartridges to fail and shut-off valves to seize, while the mid-century houses see the corrosion leaks typical of aging supply lines — both keep us busy with fixture repairs.',
      'When a drain runs slow or a faucet loses pressure, the cause can be a simple fixture or a line that needs attention, and the two get treated very differently. We diagnose which it is before we start and repair the actual cause, so you don’t pay for the wrong fix.',
    ],
    commonIntro: "Across Mack's mid-century and newer homes, the worn fixtures and aging supply lines drive the repairs we make most:",
    localFaqs: [{ q: 'My newer Mack home has a dripping faucet — already?', a: 'Faucet cartridges wear out even in newer homes. We replace the worn part the same day and check the shut-off so the repair holds at the source.' }],
  },
  'monfort-heights': {
    intro:
      'Monfort Heights is a mid-century ranch and split-level suburb, so plumbing repair there usually means original shut-off valves, faucet cartridges and toilet parts well past their service life. Supply lines are corroding and sewer laterals start backing up too. We check whether the fixture or the line is at fault.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes. This is a classic mid-century ranch and split-level suburb, where the original shut-off valves, faucet cartridges, and toilet parts are now well past their service life — the routine fixture repairs that make up most of our visits here.',
      'Homes of that era are also at the point where supply lines corrode and sewer laterals begin to back up. We diagnose whether the trouble is a worn fixture or the line behind it and repair the real cause, so a single visit settles it rather than starting a cycle of repeat calls.',
    ],
    commonIntro: "Across Monfort Heights' mid-century homes, the worn fixtures and aging shut-offs drive most of what we repair:",
    localFaqs: [{ q: 'The fixtures in my mid-century Monfort Heights home all seem worn — where do I start?', a: 'Start with the leaks and the seized shut-offs. We repair the worst at the root the same day and tell you plainly which others can wait.' }],
  },
  'bridgetown': {
    intro:
      'Worn supply lines, tired faucet parts and the occasional leaking pipe are the plumbing repairs we see most in Bridgetown’s mid-century homes. Newer homes here are still old enough for shut-off valves to fail. We find the actual source of a leak or slow drain and repair that.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes. In a mid-century suburb like this, worn supply lines, tired faucet parts, and the occasional burst or leaking pipe are the repairs we’re called for most often.',
      'Newer homes here are still old enough for shut-off valves and water heaters to start failing, so the issue is rarely the home being “too new” to need plumbing work. We find the actual source of a leak or a slow drain and repair that, rather than treating the symptom and waiting for it to return.',
    ],
    commonIntro: "Across Bridgetown's mid-century and newer homes, the worn fixtures and aging supply lines drive the repairs we make most:",
    localFaqs: [{ q: 'How fast can you repair a leaking pipe in Bridgetown?', a: 'Bridgetown is well within our west-side service area in Green Township. We reach it the same day and repair the leak at its source.' }],
  },
  'finneytown': {
    intro:
      'Finneytown homes are mostly mid-century ranches, so plumbing repair there usually means worn original shut-off valves, faucet cartridges and toilet fill valves, plus supply lines that corrode and let pressure drop. We check whether a complaint is the fixture or the line and repair the actual cause.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes. This is a mid-century ranch suburb, so the original shut-off valves, faucet cartridges, and toilet fill valves are now worn out — the routine fixture repairs that fill most of our days here.',
      'Homes of that era are also at the age where supply lines corrode and pressure drops creep in. We diagnose whether a pressure or leak complaint is a fixture problem or a line problem and repair the actual cause, so the fix holds rather than reappearing in a few months.',
    ],
    commonIntro: "Across Finneytown's mid-century homes, the worn fixtures and corroding supply lines drive most of what we repair:",
    localFaqs: [{ q: 'Why is my mid-century Finneytown home losing water pressure?', a: 'In ranch homes this age it’s often the supply lines corroding or a worn fixture restricting flow. We find the cause same-day and repair it at the source.' }],
  },
  'amberley': {
    intro:
      'Amberley’s large homes have more fixtures and longer supply runs, which gives a slow leak more places to hide, so hidden leaks lead our plumbing repair work there. A drip behind one wall can do real damage before it surfaces. We locate the exact origin and repair that.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets. Larger homes mean larger plumbing systems — more fixtures, longer supply runs, and more places for a slow leak to hide before anyone notices it.',
      'When a single home has multiple bathrooms and a long run of pipe, a drip behind one wall can do real damage before it surfaces. We locate the exact origin of a leak or a pressure problem and repair that, so a big house doesn’t turn a small fault into a large repair bill.',
    ],
    commonIntro: "In Amberley's large homes, the long supply runs and many fixtures shape most of the repairs we make:",
    localFaqs: [{ q: 'I suspect a hidden leak in my large Amberley home — can you find it?', a: 'Yes. Larger homes here have long pipe runs where leaks hide. We locate the exact source the same day and repair it there, not just where the stain shows.' }],
  },
  'arlington-heights': {
    intro:
      'Arlington Heights plumbing repair mostly involves corrosion leaks and slow drains in older homes on its compact grid. On low Mill Creek valley ground, basement and floor drains take on extra water in heavy rain and back up first. We clear and inspect the pipe.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes. As a small incorporated village with aging housing, its plumbing relies on older supply lines and original drains, so corrosion leaks and slow drains are the routine repairs here.',
      'The low valley ground means basement and floor drains take on extra water in heavy rain, and an older line that already drains slowly backs up first. We clear the blockage and inspect the pipe so we can repair the actual cause instead of clearing the same clog after every storm.',
    ],
    commonIntro: "In Arlington Heights' older valley homes, the aging lines and damp lower levels drive most of what we repair:",
    localFaqs: [{ q: 'Do you service the small village of Arlington Heights?', a: 'Yes. Arlington Heights is within our service area in the Mill Creek valley. We reach it the same day and repair clogs or leaks at the root in its older homes.' }],
  },
  'north-college-hill': {
    intro:
      'Low pressure from corroded galvanized supply lines and slow drains from scaled cast iron are the plumbing repairs we make most in North College Hill’s tightly packed early and mid-1900s homes. On close lots a backup can reach the next home, so we inspect the line before repairing.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes. That older, tightly packed housing runs on aging galvanized and cast-iron plumbing, so low pressure from corroded supply lines and slow drains from scaled-up cast iron are the repairs we make most often.',
      'On small, closely spaced lots, a leak or a backup in one home can reach the next, so the source matters as much as the symptom. We clear and inspect the line, then repair the real cause — a corroded pipe, a failed joint, a root intrusion — so the problem doesn’t simply recur.',
    ],
    commonIntro: "In North College Hill's older homes, the aging galvanized and cast-iron lines drive most of what we repair:",
    localFaqs: [{ q: 'My North College Hill drains are slow throughout the house — why?', a: 'In these older homes it’s usually scale building up in original cast-iron lines. We clear them same-day and inspect the pipe so we fix the underlying cause.' }],
  },
  'newtown': {
    intro:
      'Newtown’s older homes near the Little Miami sit on low ground, so drains and basement plumbing take on extra water and sediment, and recurring backups are a common plumbing repair there. A slow leak can also sit unnoticed in a damp lower level. We trace it to its exact origin.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground. As a small incorporated village on low ground, its drains and basement plumbing take on more water and sediment, so the slow drains and recurring backups we clear here often trace back to those conditions, not just the fixture.',
      'The older homes carry aging supply and drain plumbing, where a slow leak or a partially clogged line can sit in a damp lower level unnoticed. We trace the trouble to its exact origin and repair it there, so a low-lying home isn’t fighting the same backup after every heavy rain.',
    ],
    commonIntro: "In Newtown's older riverside homes, the low ground and aging lines shape most of the repairs we make:",
    localFaqs: [{ q: 'My Newtown drain backs up after heavy rain — can you fix it for good?', a: 'Yes. We clear the line same-day, camera it to find whether it’s sediment from the low river ground or a failing pipe, and repair the actual cause.' }],
  },
  'turpin-hills': {
    intro:
      'Turpin Hills plumbing repair is mostly fixture work: worn faucet cartridges, seized shut-off valves and toilet parts past their prime in mid-century homes, with newer houses now reaching the same point. We check whether a leak or pressure complaint is the fixture or the line before fixing it.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. In a mid-century suburb like this, worn faucet cartridges, seized shut-off valves, and toilet parts past their prime are the routine fixture repairs we make week to week.',
      'Newer homes here are now old enough for those same parts to start failing, so the issue is rarely the home being too new for plumbing work. We diagnose whether a leak or pressure complaint is a fixture or a line problem and repair the real cause, so the fix actually holds.',
    ],
    commonIntro: "Across Turpin Hills' mid-century and newer homes, the worn fixtures and aging shut-offs drive most of what we repair:",
    localFaqs: [{ q: 'How fast can you repair a worn fixture in Turpin Hills?', a: 'Turpin Hills is well within our east-side service area in Anderson Township. We reach it the same day and repair the fixture or the line behind it at the source.' }],
  },
  'silverton': {
    intro:
      'Silverton plumbing repair along Montgomery Road usually means corrosion leaks, low pressure and tired faucets in early and mid-1900s homes. Many have a mix of original and replaced plumbing, so we pinpoint where a leak or pressure drop begins rather than replacing fixtures that were never the problem.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes. As a small incorporated city with older housing, its plumbing leans on aging supply lines and worn fixtures, so corrosion leaks, low pressure, and tired faucets are the routine repairs here.',
      'Homes spanning early- to mid-century often carry a mix of original and replaced plumbing, which makes finding exactly where a leak or pressure drop begins worthwhile. We pinpoint the cause and repair that section, so you aren’t replacing fixtures that were never the problem.',
    ],
    commonIntro: "In Silverton's early- and mid-1900s homes, the aging supply lines and worn fixtures drive most of what we repair:",
    localFaqs: [{ q: 'How fast can you repair a leak in Silverton?', a: 'Silverton is well within our east-side service area along Montgomery Road. We arrive the same day and repair the leak at its source.' }],
  },
  'lockland': {
    intro:
      'Lockland’s century-old worker homes run aging galvanized and cast-iron lines, so corrosion leaks and slow drains are routine plumbing repair there. On low Mill Creek valley ground, a slow basement drain backs up first in heavy rain. We clear and inspect the pipe to find the actual cause.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing. As a small incorporated village with century-old worker homes, its plumbing relies on aging galvanized and cast-iron lines, so corrosion leaks and slow drains are the routine repairs here.',
      'The low valley ground means basement and floor drains take on extra water in heavy rain, and a tightly built older home with an already slow line backs up first. We clear the blockage and inspect the pipe so we can repair the actual cause rather than rodding the same clog every spring.',
    ],
    commonIntro: "In Lockland's older valley homes, the aging lines and damp lower levels drive most of what we repair:",
    localFaqs: [{ q: 'Do you service the village of Lockland?', a: 'Yes. Lockland is within our service area in the Mill Creek valley. We reach it the same day and repair clogs or leaks at the root in its century-old homes.' }],
  },
  'groesbeck': {
    intro:
      'Groesbeck is a mid-century ranch suburb in Colerain Township, so worn original shut-off valves, faucet cartridges and toilet parts account for most plumbing repair there. Supply lines are corroding and pressure quietly drops. We work out whether it is a fixture or a line problem before repairing.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. This is a mid-century ranch suburb, so the original shut-off valves, faucet cartridges, and toilet parts are now worn out — the routine fixture repairs that fill most of our days here.',
      'Homes of that era are also at the age where supply lines corrode and pressure quietly drops. We diagnose whether a leak or low-pressure complaint is a fixture problem or a line problem and repair the actual cause, so the fix holds rather than returning in a few months.',
    ],
    commonIntro: "Across Groesbeck's mid-century homes, the worn fixtures and corroding supply lines drive most of what we repair:",
    localFaqs: [{ q: 'My mid-century Groesbeck home has weak water pressure — why?', a: 'In ranch homes this age it’s often corroding supply lines or a worn fixture restricting flow. We find the cause same-day and repair it at the source.' }],
  },
  'mount-healthy': {
    intro:
      'Mount Healthy plumbing repair near the old town center usually means low pressure from corroded galvanized supply lines and slow drains from scaled cast iron. Homes mix original and replaced plumbing, so we find exactly where a leak or backup begins, then repair that pipe, joint or fixture.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes. As a small incorporated city with older housing, its plumbing leans on aging galvanized and cast-iron lines, so low pressure from corroded supply lines and slow drains from scaled cast iron are the repairs we make most.',
      'Homes spanning early- to mid-century often carry a mix of original and replaced plumbing, so it’s worth finding exactly where a leak or backup begins. We clear and inspect the line, then repair the real cause — a corroded pipe, a failed joint, a worn fixture — so the problem doesn’t simply come back.',
    ],
    commonIntro: "In Mount Healthy's older homes, the aging galvanized and cast-iron lines drive most of what we repair:",
    localFaqs: [{ q: 'My Mount Healthy home has low pressure and slow drains — related?', a: 'They often share a cause: aging galvanized and cast-iron lines. We diagnose both same-day and repair the actual cause rather than treating each symptom alone.' }],
  },
};
