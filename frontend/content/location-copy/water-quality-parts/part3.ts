export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro: 'Water quality at Villages of Roll Hill is mostly a building question, since the community is largely multi-unit apartments sharing supply lines and water heaters. Hard water scales the same valves and tank elements across many units. One fix can cover several homes, after a test.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings. In buildings that share supply lines and water heaters, Greater Cincinnati hard water tends to scale up the same fixtures, valves, and tank elements across many units, which shortens the life of shared equipment.',
      'Because the housing here is so densely built, a single water-quality fix can cover several homes at once. We start with a test for hardness and chlorine taste, then recommend whether a point-of-use drinking filter, a building-side softener, or both make sense for the way these apartments are plumbed.',
    ],
    commonIntro: 'In the shared plumbing of Roll Hill’s multi-unit buildings, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Can you improve the water in an apartment building at Roll Hill?', a: 'Yes. We test the water at Roll Hill first, then advise whether a point-of-use filter for individual units or a building-side softener fits how the apartments are plumbed. We never recommend equipment before we have the test numbers.' }],
  },
  'east-westwood': {
    intro: 'Rusty water in the morning is a common water quality complaint in East Westwood, where early- and mid-1900s homes on the slopes still carry older galvanized supply lines. Hard water adds scale on aerators and inside heaters. We check the home’s own pipe before suggesting a filter.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes. Houses that age often still carry older galvanized supply lines, and as those lines corrode they can leave a metallic taste and discolor water at the tap.',
      'On top of the older pipe, the regional water here runs hard, so scale builds on aerators, shower heads, and inside water heaters. We test for hardness and check whether discoloration traces to the home’s own lines before deciding between a softener, a filter, or a pipe repair.',
    ],
    commonIntro: 'In East Westwood’s early- and mid-1900s homes, aging galvanized pipe plus hard-water scale is the combination we test for most.',
    localFaqs: [{ q: 'My East Westwood tap water looks rusty in the morning — what causes it?', a: 'In older East Westwood homes it often traces to corroding galvanized supply lines rather than the city supply. We test the water and check the pipe before recommending a filter or a line repair, so you fix the real cause.' }],
  },
  'western-hills': {
    intro: 'White crust near Glenway Avenue is the most common water quality sign in Western Hills. Decades of hard water scale faucets, shower doors and dishwasher elements in the early-1900s and mid-century homes, and wear down older water heaters. We test, then size a softener.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes. Across that older housing, decades of hard water leave scale on faucets, shower doors, and dishwasher elements.',
      'Mid-century homes here also tend to have water heaters and supply lines old enough that mineral buildup speeds their wear. We test for hardness and chlorine taste from the city supply, then recommend whether a whole-house softener, a drinking-water filter, or both make the most sense.',
    ],
    commonIntro: 'Across Western Hills’ older and mid-century homes, hard-water scale on fixtures and inside water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Is the white crust on my Western Hills fixtures hard water?', a: 'Usually yes — that chalky buildup near Glenway is classic mineral scale from hard water. We test your hardness level first, then size a softener to the reading so it actually clears the problem.' }],
  },
  'california': {
    intro: 'California water quality along Kellogg Avenue is mostly about hardness and chlorine taste from the treated city supply. Scale collects on fixtures and in water heaters in these riverfront homes near Riverbend. A carbon filter or reverse-osmosis drinking system handles the taste.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River. Homes here are on city water that carries regional hardness, so scale collects on fixtures and inside water heaters over time.',
      'Some residents also notice a chlorine taste or odor from the treated supply. We start with a test for hardness, chlorine, and taste, then recommend whether a reverse-osmosis drinking system, a whole-house filter, or a softener fits the home best.',
    ],
    commonIntro: 'Along California’s riverfront homes, hard-water scale and chlorine taste from the city supply are the issues we test for most.',
    localFaqs: [{ q: 'Why does my California tap water taste like chlorine?', a: 'A chlorine taste along Kellogg Avenue usually comes from the treated city supply. We test the water first, then a carbon filter or a reverse-osmosis drinking system can take the taste and odor out.' }],
  },
  'carthage': {
    intro: 'Carthage water treatment, in the century-old homes along Vine Street near the Hamilton County Fairgrounds, often starts with tinted water from corroding galvanized lines. Hard water adds scale on fixtures and in heaters. We test and inspect the pipe before choosing a softener, filter or line repair.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes. Houses that age often still run on galvanized supply lines, and as those corrode they can tint and flavor the water at the tap.',
      'The regional supply also runs hard, so scale builds on fixtures and inside water heaters in these century-old homes. We test for hardness and check whether discoloration comes from the home’s own pipe before recommending a softener, filter, or line repair.',
    ],
    commonIntro: 'In Carthage’s early-1900s homes, aging galvanized pipe and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'Is the discoloration in my Carthage water from the old pipes?', a: 'In Carthage’s century-old homes it often is — corroding galvanized lines can tint the water. We test the water and inspect the pipe before recommending a filter or a repair, so the fix addresses the real source.' }],
  },
  'winton-hills': {
    intro: 'Water quality in Winton Hills often involves multi-unit buildings near Winton Road, where shared supply lines and water heaters let hard water scale the same fixtures across several units. Older plumbing wears faster with that buildup. A point-of-use filter or building softener follows a test.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing. In buildings that share supply lines and water heaters, regional hard water tends to scale up the same fixtures and tank elements across several units.',
      'Older buildings here also run on aging plumbing where mineral buildup speeds wear. We test for hardness and chlorine taste first, then recommend whether a point-of-use filter, a building-side softener, or both fit how the housing is plumbed.',
    ],
    commonIntro: 'In Winton Hills’ homes and multi-unit buildings, hard-water scale on shared fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Can you address hard water in a Winton Hills apartment building?', a: 'Yes. Near Winton Road we test the water first, then advise whether individual point-of-use filters or a building-side softener fits the shared plumbing. Equipment comes after the test, not before.' }],
  },
  'roselawn': {
    intro: 'Roselawn water quality issues along Reading Road center on hard-water scale on faucets, shower heads and inside water heaters in mid-century homes and older apartment buildings. Scale makes a water heater work harder. We test hardness and chlorine taste before recommending a softener or filter.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings. Across that mid-1900s housing, decades of hard water leave scale on faucets, shower heads, and inside water heaters.',
      'The older apartment buildings here put extra wear on plumbing, and mineral buildup adds to it. We test for hardness and chlorine taste from the city supply first, then recommend whether a whole-house softener, a drinking-water filter, or both make sense.',
    ],
    commonIntro: 'Across Roselawn’s mid-century homes and apartments, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Does hard water shorten the life of my Roselawn water heater?', a: 'Yes — along Reading Road, mineral scale collects inside the tank and makes it work harder. We test your hardness first, then a softener sized to the reading helps protect the heater and the rest of your plumbing.' }],
  },
  'mount-airy': {
    intro: 'Near Mount Airy Forest, Mount Airy water quality work mostly involves hard-water scale on fixtures and inside water heaters in mid-century homes on hilly, wooded streets. That plumbing is now old enough for buildup to speed its wear. A test sets the softener size.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets. Homes of that era are on city water that carries regional hardness, so scale collects on fixtures and inside water heaters.',
      'Mid-century plumbing here is also old enough that mineral buildup speeds its wear. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both fit the home.',
    ],
    commonIntro: 'Across Mount Airy’s mid-century homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Will a softener help the hard water in my Mount Airy home?', a: 'Often yes — the mid-century homes near Mount Airy Forest see steady mineral scale from hard water. We test your hardness level first, then size a softener to that reading so it clears the buildup.' }],
  },
  'hartwell': {
    intro: 'Hartwell water quality complaints in the Victorian and early-1900s streetcar-era homes often start with tinted or off-tasting water from corroding original galvanized lines. Hard water adds scale. We test and check the home’s own pipe before recommending a filter, softener or line repair.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets. Those century-old houses often still carry original galvanized supply lines, and as they corrode they can tint and flavor the water.',
      'Regional hard water adds scale on fixtures and inside water heaters in these older homes. We test for hardness and check whether discoloration comes from the home’s own pipe before recommending a filter, a softener, or a line repair.',
    ],
    commonIntro: 'In Hartwell’s Victorian and early-1900s homes, aging galvanized pipe and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'My old Hartwell home has discolored water — is it the pipes?', a: 'In Hartwell’s century-old homes it often traces to corroding galvanized supply lines. We test the water and check the pipe before recommending a filter or a repair, so you treat the real cause.' }],
  },
  'kennedy-heights': {
    intro: 'An off taste in Kennedy Heights water can come from corroding galvanized pipe or from chlorine in the city supply, and water quality testing tells which. The large early-1900s homes here also have long pipe runs and many fixtures where hard-water scale collects.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes. The age of the housing means original plumbing is common, and as galvanized lines corrode they can discolor and flavor the water.',
      'Larger early-1900s homes also have more fixtures and longer runs of pipe where hard-water scale collects. We test for hardness and taste first, then recommend whether a whole-house softener, a drinking-water filter, or a pipe repair fits the home.',
    ],
    commonIntro: 'In Kennedy Heights’ large early-1900s homes, aging plumbing and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'Why does the water in my older Kennedy Heights home taste off?', a: 'In these early-1900s homes an off taste can come from corroding galvanized pipe or from chlorine in the city supply. We test the water first to tell which, then recommend a filter or a line repair to match.' }],
  },
  'st-bernard': {
    intro: 'St. Bernard water treatment, in the dense early-1900s grid around Ivorydale, usually covers two things: aging galvanized and cast-iron plumbing that can tint the water, and hard regional water that scales fixtures and heaters. We test and check the home’s lines before recommending anything.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes. That tightly packed, century-old housing often runs on aging galvanized and cast-iron plumbing, where corrosion can tint and flavor the water.',
      'Regional hard water adds mineral scale on fixtures and inside water heaters across these small valley lots. We test for hardness and check the home’s own lines before recommending a softener, a filter, or a pipe repair.',
    ],
    commonIntro: 'In St. Bernard’s dense, early-1900s homes, aging galvanized pipe and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'Is my St. Bernard water hard, and can you fix it?', a: 'St. Bernard is on regional water that runs hard, so scale on fixtures is common. We test your hardness level first, then size a softener to the reading so it actually clears the buildup.' }],
  },
  'elmwood-place': {
    intro: 'Elmwood Place water quality problems come from either the regional supply or the home’s own pipe. In this small Mill Creek valley village of closely spaced early-1900s homes, corroding galvanized lines can tint water, while hard water scales fixtures. A test sorts out which.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes. Houses that age often still carry galvanized supply lines, and as they corrode they can discolor and flavor the water at the tap.',
      'The regional supply also runs hard, so scale builds on fixtures and inside water heaters in these compact older homes. We test for hardness and check whether discoloration comes from the home’s own pipe before recommending a filter, softener, or repair.',
    ],
    commonIntro: 'In Elmwood Place’s dense, early-1900s valley homes, aging galvanized pipe and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'How do I know if my Elmwood Place water problem is the pipes or the supply?', a: 'In this village’s century-old homes it can be either corroding galvanized pipe or the regional supply. We test the water first and check the lines, so the fix matches the real source.' }],
  },
  'delhi-hills': {
    intro: 'Above the Ohio River in Delhi Township, Delhi Hills water quality is mostly about hard water scaling fixtures and water heaters in established mid-century homes. That plumbing is old enough for buildup to speed its wear. We test hardness and chlorine taste, then size a softener.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River, an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets. Homes of that era are on city water that carries regional hardness, so scale collects on fixtures and inside water heaters.',
      'Mid-century plumbing here is also old enough that mineral buildup speeds its wear. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both fit the home.',
    ],
    commonIntro: 'Across Delhi Hills’ mid-century homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Will a water softener help my Delhi Hills home?', a: 'Often yes — the mid-century homes above the river in Delhi Township see steady mineral scale from hard water. We test your hardness level first, then size a softener to that reading.' }],
  },
  'golf-manor': {
    intro: 'Chalky buildup on fixtures is the usual water quality complaint in Golf Manor’s modest mid-century homes. Hard water scales faucets, shower heads and water heaters in this small village surrounded by Cincinnati. A test of hardness and chlorine taste sets the softener size.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes. Those mid-1900s houses are on city water that carries regional hardness, so scale collects on faucets, shower heads, and inside water heaters.',
      'Plumbing in homes of that era is old enough that mineral buildup adds to its wear. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both fit the home.',
    ],
    commonIntro: 'In Golf Manor’s mid-century homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Is the chalky buildup on my Golf Manor fixtures from hard water?', a: 'Usually yes — that crust on the mid-century fixtures here is mineral scale from hard water. We test your hardness first, then size a softener to the reading so it clears.' }],
  },
  'fairfax': {
    intro: 'Fairfax water quality, along Wooster Pike near Mariemont, mostly means scale. Decades of hard water build up on faucets, shower doors and inside water heaters in early- and mid-1900s homes, and some older supply lines wear faster with it. Testing comes before any softener or filter.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. Across that older housing, decades of regional hard water leave scale on faucets, shower doors, and inside water heaters.',
      'Some of the older homes here also carry aging supply lines where mineral buildup speeds wear. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both make sense.',
    ],
    commonIntro: 'In Fairfax’s early- and mid-1900s homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Can you test the water at my Fairfax home before suggesting a system?', a: 'Yes, and we always do. Along Wooster Pike we test hardness and taste first, then recommend a softener or filter sized to the actual results rather than a guess.' }],
  },
  'mack': {
    intro: 'Newer homes in Mack get hard water too, so water quality work in this Green Township community covers houses of every age. Scale collects on fixtures and in water heaters, and older homes add aging supply lines. We test hardness first, then size a softener if needed.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes. Even the newer homes here are on city water that carries regional hardness, so scale collects on fixtures and inside water heaters.',
      'Older houses in Mack see the same hard water on top of aging supply lines, where buildup speeds wear. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both fit the home.',
    ],
    commonIntro: 'Across Mack’s mid-century and newer homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'My Mack home is newer — could it still have hard water?', a: 'Yes. Green Township homes of any age are on regional water that runs hard, so scale still builds up. We test your hardness first, then size a softener if the reading calls for one.' }],
  },
  'monfort-heights': {
    intro: 'Monfort Heights water treatment is mostly about protecting appliances in mid-century Green Township homes. Hard water scales faucets, shower heads, water heaters and dishwashers, shortening their life. We test hardness and chlorine taste, then recommend a softener, a drinking-water filter or both.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes. Homes from the mid-1900s are on city water that carries regional hardness, so scale builds on faucets, shower heads, and inside water heaters.',
      'Plumbing and water heaters of that era wear faster with mineral buildup adding to the load. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both fit the home.',
    ],
    commonIntro: 'Across Monfort Heights’ mid-century homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Does hard water hurt the appliances in my Monfort Heights home?', a: 'It can — in these Green Township homes, scale builds inside water heaters and dishwashers and shortens their life. We test your hardness first, then a softener sized to the reading helps protect them.' }],
  },
  'bridgetown': {
    intro: 'Hard water reaches every Bridgetown home regardless of age, so water quality work here centers on scale on fixtures and inside water heaters. In older Green Township houses, aging heaters and worn supply lines wear faster with that buildup. A test sets the softener size.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes. Across that housing, regional hard water leaves scale on fixtures and inside water heaters regardless of the home’s age.',
      'Aging water heaters and worn supply lines in the older homes here wear faster with mineral buildup. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both make sense.',
    ],
    commonIntro: 'Across Bridgetown’s mid-century and newer homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Is the scale on my Bridgetown fixtures worth treating?', a: 'Often yes — in Green Township the hard-water scale builds steadily on fixtures and inside appliances. We test your hardness first, then size a softener to the reading so the treatment fits the problem.' }],
  },
  'finneytown': {
    intro: 'Steady mineral scale is the main water quality issue in Finneytown’s mid-century Springfield Township homes. Hard water coats faucets, shower heads and water heaters, and the plumbing is old enough that buildup speeds its wear. We test first, then size a softener to the reading.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes. Homes of that era are on city water that carries regional hardness, so scale collects on faucets, shower heads, and inside water heaters.',
      'Plumbing in these mid-1900s homes is also old enough that mineral buildup speeds its wear. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both fit the home.',
    ],
    commonIntro: 'Across Finneytown’s mid-century homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Will a softener help the hard water in my Finneytown home?', a: 'Often yes — these Springfield Township mid-century homes see steady mineral scale from hard water. We test your hardness level first, then size a softener to that reading.' }],
  },
  'amberley': {
    intro: 'Amberley Village homes are large, so water quality work here means sizing treatment for more taps, showers and appliances. Hard-water scale can affect a lot of plumbing in a big house before anyone notices. We test hardness and chlorine taste, then size a softener to demand.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets. Larger homes mean larger plumbing systems and more fixtures, so regional hard water leaves scale across more taps, showers, and appliances.',
      'In a big house, a hidden buildup can affect a lot of plumbing before it is noticed. We test for hardness and chlorine taste first, then size a whole-house softener and any drinking-water filtration to the home’s actual demand.',
    ],
    commonIntro: 'In Amberley’s large homes, hard-water scale across many fixtures and appliances is the issue we test for most.',
    localFaqs: [{ q: 'Can you size a softener for a large Amberley Village home?', a: 'Yes. Larger homes here put more demand on a softener. We test your hardness and assess the home’s size first, then size the system to keep up across all the fixtures.' }],
  },
  'arlington-heights': {
    intro: 'Tinted water in Arlington Heights usually traces to corroding galvanized pipe in the village’s compact grid of older homes, not the supply. That makes water quality testing the first step. Hard water adds scale on fixtures and heaters in these Mill Creek valley houses.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes. Houses that age often still carry galvanized supply lines, and as they corrode they can tint and flavor the water at the tap.',
      'Regional hard water adds scale on fixtures and inside water heaters across these older valley homes. We test for hardness and check whether discoloration comes from the home’s own pipe before recommending a filter, softener, or repair.',
    ],
    commonIntro: 'In Arlington Heights’ older valley homes, aging galvanized pipe and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'My Arlington Heights water looks tinted — is it the supply or my pipes?', a: 'In this village’s older homes it often traces to corroding galvanized pipe rather than the supply. We test the water and check the lines first, so the fix matches the real cause.' }],
  },
  'north-college-hill': {
    intro: 'North College Hill water quality problems in the dense early- and mid-1900s homes often come from aging galvanized and cast-iron plumbing that tints and flavors the water. Hard water adds scale on fixtures and inside heaters. We test and inspect the pipe before recommending a fix.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes. That older, tightly packed housing often runs on aging galvanized and cast-iron plumbing, where corrosion can tint and flavor the water.',
      'Regional hard water adds mineral scale on fixtures and inside water heaters in these homes. We test for hardness and check the home’s own lines before recommending a softener, a filter, or a pipe repair.',
    ],
    commonIntro: 'In North College Hill’s early- and mid-1900s homes, aging galvanized pipe and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'Why is the water discolored in my older North College Hill home?', a: 'In these early-1900s homes it often comes from corroding galvanized supply lines rather than the city supply. We test the water and inspect the pipe first, then recommend a filter or a repair to match.' }],
  },
  'newtown': {
    intro: 'Newtown water quality testing, in older homes on low ground near the Little Miami River, checks two things: aging supply lines that can tint and flavor the water, and regional hardness that scales fixtures and water heaters. Recommendations follow the results, not a guess.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground. The older housing here often carries aging supply lines where corrosion can tint and flavor the water at the tap.',
      'Homes on city water here also see regional hardness leave scale on fixtures and inside water heaters. We test for hardness and taste first, and check the home’s own lines, before recommending a softener, a filter, or a pipe repair.',
    ],
    commonIntro: 'In Newtown’s older homes near the Little Miami, aging plumbing and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'Can you test my Newtown water before recommending a filter?', a: 'Yes, and we always do. Near the Little Miami we test hardness and taste first, then recommend a softener or filter sized to the actual results rather than a guess.' }],
  },
  'turpin-hills': {
    intro: 'Turpin Hills water treatment applies to newer and mid-century Anderson Township homes alike, since regional hard water scales fixtures and water heaters regardless of age. Older heaters and worn supply lines wear faster with buildup. We test first, then decide on a softener or filter.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. Across that housing, regional hard water leaves scale on fixtures and inside water heaters regardless of the home’s age.',
      'Aging water heaters and worn supply lines in the older homes here wear faster with mineral buildup adding to the load. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both fit the home.',
    ],
    commonIntro: 'Across Turpin Hills’ mid-century and newer homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Will a softener help my newer Turpin Hills home?', a: 'It can. Anderson Township homes of any age are on regional water that runs hard, so scale still collects. We test your hardness first, then size a softener if the reading calls for one.' }],
  },
  'silverton': {
    intro: 'Silverton water quality issues along Montgomery Road come mostly from hard water, which leaves chalky scale on faucets, shower doors and water heaters in early- and mid-1900s homes. Some older supply lines wear faster under that buildup. A test sets the softener size.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes. Across that older housing, decades of regional hard water leave scale on faucets, shower doors, and inside water heaters.',
      'Some of the older homes here also carry aging supply lines where mineral buildup speeds wear. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both make sense.',
    ],
    commonIntro: 'In Silverton’s early- and mid-1900s homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Is the buildup on my Silverton fixtures hard water?', a: 'Usually yes — that chalky crust along Montgomery Road is mineral scale from hard water. We test your hardness first, then size a softener to the reading so it clears the problem.' }],
  },
  'lockland': {
    intro: 'Lockland’s closely spaced worker housing, built around the old mills, often has galvanized lines that tint the water as they corrode. That is the starting point for water quality work here, along with hard water scaling fixtures and heaters. We check the home’s pipe first.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing. Those older homes often still carry galvanized supply lines, and as they corrode they can tint and flavor the water at the tap.',
      'Regional hard water adds scale on fixtures and inside water heaters across these tightly packed valley homes. We test for hardness and check whether discoloration comes from the home’s own pipe before recommending a filter, softener, or repair.',
    ],
    commonIntro: 'In Lockland’s older valley worker homes, aging galvanized pipe and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'My old Lockland home has discolored water — what causes it?', a: 'In this village’s older worker housing it often traces to corroding galvanized pipe. We test the water and check the lines first, so the fix addresses the real source.' }],
  },
  'groesbeck': {
    intro: 'Groesbeck water quality work in Colerain Township mostly addresses hard-water scale in mid-century homes. It coats faucets, shower heads and water heaters, and the plumbing is now old enough for that buildup to speed its wear. We test hardness first, then size a softener.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. Homes of that era are on city water that carries regional hardness, so scale collects on faucets, shower heads, and inside water heaters.',
      'Plumbing in these mid-1900s homes is also old enough that mineral buildup speeds its wear. We test for hardness and chlorine taste first, then recommend whether a whole-house softener, a drinking-water filter, or both fit the home.',
    ],
    commonIntro: 'Across Groesbeck’s mid-century homes, hard-water scale on fixtures and water heaters is the issue we test for most.',
    localFaqs: [{ q: 'Will a softener help the hard water in my Groesbeck home?', a: 'Often yes — these Colerain Township mid-century homes see steady mineral scale from hard water. We test your hardness level first, then size a softener to that reading.' }],
  },
  'mount-healthy': {
    intro: 'Water quality problems in Mount Healthy’s older homes can come from the regional supply or from aging galvanized and cast-iron plumbing near the old town center. Corrosion tints and flavors the water, and hardness scales fixtures. We test and check the lines first.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes. The age of the housing means aging galvanized and cast-iron plumbing is common, where corrosion can tint and flavor the water at the tap.',
      'Regional hard water adds mineral scale on fixtures and inside water heaters across these older homes. We test for hardness and check whether discoloration comes from the home’s own pipe before recommending a softener, filter, or repair.',
    ],
    commonIntro: 'In Mount Healthy’s early-1900s and mid-century homes, aging galvanized pipe and hard-water scale are the issues we test for most.',
    localFaqs: [{ q: 'Is my Mount Healthy water problem the city supply or the old pipes?', a: 'In this historic city’s older homes it can be either corroding galvanized pipe or the regional supply. We test the water first and check the lines, so the fix matches the real cause.' }],
  },
};
