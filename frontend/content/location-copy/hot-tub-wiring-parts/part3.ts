export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro: 'Hot tub wiring at Villages of Roll Hill is less about the tub and more about the building. These are mostly multi-unit apartment buildings on shared service, so we run a load calculation on the building and your unit’s panel before adding a dedicated 240V GFCI circuit.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings. In that kind of housing, the first question is rarely the tub itself and more about whether the building’s service and the unit’s panel can carry a dedicated 50- or 60-amp spa circuit without an upgrade.',
      'Because the buildings here are densely built and often share electrical infrastructure, a load calculation comes before anything gets wired. A spa also needs GFCI protection and bonding around the water, and on a hilltop site with a shared patio or deck the disconnect has to sit within sight of the tub and the outdoor run has to use weather-rated conduit.',
    ],
    commonIntro: 'In the multi-unit buildings of Roll Hill, hot-tub wiring starts with whether the shared service and your unit’s panel can carry a dedicated 240V GFCI-protected circuit.',
    localFaqs: [{ q: 'Can I put a hot tub at a Roll Hill apartment?', a: 'It depends on the building’s service and your unit’s panel capacity, which we evaluate first. If there is room, we install a dedicated 240V circuit with GFCI protection, bonding, and a code-compliant disconnect.' }],
  },
  'east-westwood': {
    intro: 'Backyards in East Westwood often step down the slope behind the house, so hot tub wiring to a deck or patio runs farther in weather-rated conduit. The early- and mid-1900s homes often have older or smaller panels, so we check the service before adding the dedicated circuit.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes. Houses of that era often run on older or undersized panels, so before any spa goes in we check whether the existing service can carry a dedicated 50-amp circuit or whether the panel needs work first.',
      'The hillside grade here means many backyards step down behind the house, so the outdoor run to a deck or patio spa has to use weather-rated conduit and a disconnect mounted within sight of the tub. Bonding and grounding around the water are not optional on a sloped lot where the spa sits away from the panel.',
    ],
    commonIntro: 'In East Westwood’s older hillside homes, hot-tub wiring usually starts with a panel check and a weather-rated run out to the backyard.',
    localFaqs: [{ q: 'Will my older East Westwood home’s panel handle a hot tub?', a: 'Many homes here have older or smaller panels, so we evaluate the service first. If it can carry the load, we add a dedicated 240V GFCI circuit; if not, we lay out the panel work needed.' }],
  },
  'western-hills': {
    intro: 'Around Western Hills Plaza and Glenway Avenue, single-family lots have real backyards, and that is where a hot tub goes. Panels across the early-1900s and mid-century homes vary widely, so we start with a capacity check, then run a GFCI-protected circuit in weather-rated conduit.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes. Panels in that range of housing vary widely, so a spa install begins with a capacity check to confirm the service can carry a dedicated 50- or 60-amp circuit.',
      'These are classic single-family lots with real backyards, which is exactly where a spa tends to go — and that means an outdoor run in weather-rated conduit, GFCI protection, bonding around the water, and a disconnect mounted within sight of the tub. On the older homes here, an undersized panel is the most common reason a spa cannot simply plug into existing capacity.',
    ],
    commonIntro: 'Across Western Hills’ older and mid-century homes, hot-tub wiring comes down to panel capacity and a weather-rated, GFCI-protected run to the backyard.',
    localFaqs: [{ q: 'How do I get a hot tub wired in Western Hills?', a: 'We start with a panel evaluation at your home near Glenway, then install a dedicated 240V circuit with GFCI protection, bonding, and a disconnect within sight of the tub, all to NEC.' }],
  },
  'california': {
    intro: 'California sits on low, often damp ground beside the Ohio River along Kellogg Avenue, so hot tub wiring there has to be weather-rated and properly bonded. The older homes carry aging electrical systems, so we confirm the panel can take a dedicated 240V GFCI circuit first.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River. That riverside, often damp setting is exactly why weather-rated conduit, proper bonding, and a GFCI-protected circuit matter when a spa goes on a deck or patio close to the water.',
      'The older homes here carry aging electrical systems, so a panel evaluation comes first to confirm the service can carry a dedicated spa circuit. With the disconnect required within sight of the tub and the run exposed to riverfront weather, the outdoor wiring has to be done to code rather than improvised.',
    ],
    commonIntro: 'Along California’s riverfront homes, hot-tub wiring means weather-rated outdoor conduit, solid bonding, and a panel that can carry the load.',
    localFaqs: [{ q: 'Is hot-tub wiring different for a riverfront home in California?', a: 'The outdoor run has to be weather-rated and properly bonded for the damp riverside conditions along Kellogg Avenue, and we evaluate the panel first to confirm it can carry a dedicated 240V GFCI circuit.' }],
  },
  'carthage': {
    intro: 'On Carthage’s older lots near the Hamilton County Fairgrounds, a hot tub usually sits out back, away from the panel. Many of these early-1900s homes run older or undersized panels, so we check capacity first, then run the outdoor circuit with GFCI protection and bonding at the water.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes. Houses that age frequently run on older or undersized panels, so a spa install starts by confirming the service can carry a dedicated 50-amp circuit.',
      'On these older lots, the spa often sits out back away from the panel, which means a weather-rated outdoor run, GFCI protection, a disconnect within sight of the tub, and bonding around the water. We do that wiring to code so an early-1900s home can safely support a modern spa.',
    ],
    commonIntro: 'In Carthage’s older homes, hot-tub wiring usually begins with a panel check before a weather-rated circuit goes out back.',
    localFaqs: [{ q: 'Can an older Carthage home support a hot tub?', a: 'Usually yes, once we evaluate the panel. If the existing service can carry the load we install a dedicated 240V GFCI circuit with bonding and a code-compliant disconnect; if not, we lay out the needed panel work.' }],
  },
  'winton-hills': {
    intro: 'In Winton Hills homes and multi-unit buildings near Winton Road, panel capacity decides whether a hot tub can go in, so a load calculation comes first. Even on a shared patio, the spa gets its own 240V GFCI circuit in weather-rated conduit with a disconnect within sight.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road with a mix of residential and industrial areas, including multi-unit housing. In multi-unit and older buildings, panel capacity is the deciding factor, so a load calculation comes before any spa circuit is run.',
      'A hot tub needs its own dedicated 240V circuit with GFCI protection and bonding around the water, and where the tub sits on a shared patio the disconnect still has to be within sight and the run in weather-rated conduit. We confirm the service can carry the load before mounting anything.',
    ],
    commonIntro: 'In Winton Hills’ homes and multi-unit buildings, hot-tub wiring starts with whether the service can carry a dedicated 240V GFCI circuit.',
    localFaqs: [{ q: 'How fast can you scope hot-tub wiring in Winton Hills?', a: 'We are on call across the north side near Winton Road. We come out to evaluate the panel, then install a dedicated 240V GFCI circuit with bonding and a code-compliant disconnect.' }],
  },
  'roselawn': {
    intro: 'Roselawn’s mid-century single-family lots along Reading Road give a backyard hot tub room, but mid-1900s panels are often undersized for a modern spa. We check capacity first, then handle the outdoor wiring, from GFCI protection and the disconnect to bonding around the water.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings. Mid-1900s homes are now at the age where panels are often undersized for a modern spa, so a capacity check comes first.',
      'On the single-family lots here, a backyard spa needs a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. In the older apartment buildings, panel and service capacity is the first thing we confirm before any spa circuit is planned.',
    ],
    commonIntro: 'Across Roselawn’s mid-century homes and apartments, hot-tub wiring depends on a panel check and a GFCI-protected outdoor circuit.',
    localFaqs: [{ q: 'Will a mid-century Roselawn home handle a hot tub circuit?', a: 'Often the panel needs a look first, since homes along Reading Road can be undersized for a modern spa. We evaluate the service, then install a dedicated 240V GFCI circuit with bonding to NEC.' }],
  },
  'mount-airy': {
    intro: 'Next to Mount Airy Forest, hilly wooded lots mean a Mount Airy hot tub often sits well off the back of the house. Mid-century panels here often need a capacity check before a dedicated circuit is added. Then the run goes out in weather-rated conduit with a disconnect in sight.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets. Those wooded lots and big backyards are natural spots for a spa, but the panels in mid-century homes here often need a capacity check before a dedicated 50-amp circuit can be added.',
      'The hilltop terrain means the tub often sits well off the back of the house, so the outdoor run uses weather-rated conduit and the disconnect goes within sight of the spa. GFCI protection and bonding around the water are required regardless of how far the run travels across a sloped, wooded lot.',
    ],
    commonIntro: 'Across Mount Airy’s mid-century homes, hot-tub wiring means a panel check and a weather-rated run out across a wooded, sloped backyard.',
    localFaqs: [{ q: 'Can you run hot-tub wiring across a wooded Mount Airy lot?', a: 'Yes. We use weather-rated conduit for the outdoor run, set the disconnect within sight of the tub, and confirm the panel can carry a dedicated 240V GFCI circuit before we start.' }],
  },
  'hartwell': {
    intro: 'Hartwell grew as a streetcar suburb, and its Victorian lots have backyards that take a hot tub well. The century-old homes often run older or undersized panels, so the evaluation comes first, then an outdoor GFCI-protected circuit in weather-rated conduit with a disconnect in sight.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets. Those century-old homes often still run on older or undersized panels, so the panel evaluation is the real first step before a spa circuit.',
      'On these older lots, a backyard spa needs a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We do the upgrade and wiring to code so a Victorian-era home can safely carry a modern 240V spa.',
    ],
    commonIntro: 'In Hartwell’s Victorian and early-1900s homes, hot-tub wiring usually starts with a panel evaluation before a GFCI-protected circuit goes out back.',
    localFaqs: [{ q: 'Will a historic Hartwell home’s panel support a hot tub?', a: 'Many homes here have older panels, so we evaluate the service first. If it can carry a dedicated 240V circuit we install it with GFCI protection and bonding; if not, we lay out the panel work needed.' }],
  },
  'kennedy-heights': {
    intro: 'Kennedy Heights began as a Victorian-era resort on a hilltop, and its large early-1900s homes have lots that suit a hot tub, often well off the back of the house. Century-old panels need evaluation before a dedicated circuit, and the run goes out in weather-rated conduit.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes. Big older homes mean larger lots and the kind of backyards that suit a spa, but the panels in century-old houses often need evaluation before a dedicated 50- or 60-amp circuit is added.',
      'The hilltop setting puts the spa well off the back of many of these homes, so the outdoor run uses weather-rated conduit and the disconnect sits within sight of the tub. GFCI protection and bonding around the water are required on every install, regardless of the home’s age or size.',
    ],
    commonIntro: 'In Kennedy Heights’ large historic homes, hot-tub wiring means a panel check and a code-compliant outdoor circuit to the backyard.',
    localFaqs: [{ q: 'Can you wire a hot tub for a large older home in Kennedy Heights?', a: 'Yes. We evaluate the panel first, since century-old homes here often need a capacity check, then install a dedicated 240V GFCI circuit with bonding and a disconnect within sight of the tub.' }],
  },
  'st-bernard': {
    intro: 'St. Bernard grew up around the Ivorydale complex, and its century-old homes often run on older panels, so hot tub wiring starts with confirming the service can carry a dedicated 50-amp circuit. Valley lots are small, so the spa sits close to the house. We handle the permit and inspection.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes. That tightly packed, century-old housing often runs on older panels, so a spa install starts with confirming the service can carry a dedicated 50-amp circuit.',
      'On small valley lots, the spa sits close to the property line, so the outdoor run, the disconnect within sight of the tub, and the bonding around the water all have to be done carefully and to code. We handle the permit work as an independent municipality requires before we run a single foot of conduit.',
    ],
    commonIntro: 'In St. Bernard’s dense, early-1900s homes, hot-tub wiring starts with a panel check on a small valley lot.',
    localFaqs: [{ q: 'Do you handle permits for hot-tub wiring in St. Bernard?', a: 'Yes. St. Bernard is its own city, and we handle the permit and inspection process there. We also evaluate the panel first to confirm it can carry a dedicated 240V GFCI circuit.' }],
  },
  'elmwood-place': {
    intro: 'Elmwood Place lots are small and the homes close together, so a hot tub sits near the house and the property line. The early-1900s homes in this Mill Creek valley village usually run older panels, so we check capacity first, then use weather-rated conduit and careful bonding.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes. The old, tightly packed housing usually runs on older or undersized panels, so a capacity check is the real first step before a spa circuit.',
      'The low valley ground and small lots mean the spa sits close to the house and the property line, so the outdoor run uses weather-rated conduit, the disconnect goes within sight of the tub, and bonding around the water is done with care. We handle the village permit work before the wiring goes in.',
    ],
    commonIntro: 'In Elmwood Place’s dense valley homes, hot-tub wiring starts with a panel evaluation on a small, closely built lot.',
    localFaqs: [{ q: 'Will a small Elmwood Place home support a hot tub circuit?', a: 'Often the older panel needs a look first. We evaluate the service in this Mill Creek valley village, then install a dedicated 240V GFCI circuit with bonding and a code-compliant disconnect.' }],
  },
  'delhi-hills': {
    intro: 'Delhi Hills has deep greenhouse roots and hilly streets of mid-century homes, so a hot tub often sits well off the back of the house on a slope. The mid-century panels need a capacity check first. Then the longer run goes out in weather-rated conduit with a disconnect in sight.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River, an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets. Mid-1900s homes here often have panels that need a capacity check before a dedicated 50-amp spa circuit can be added.',
      'These hilly lots have real backyards that suit a spa, but the grade often puts the tub well off the back of the house, so the outdoor run uses weather-rated conduit and the disconnect sits within sight of the tub. GFCI protection and bonding around the water are required on every install here.',
    ],
    commonIntro: 'Across Delhi Hills’ mid-century homes, hot-tub wiring means a panel check and a weather-rated run across a sloped backyard.',
    localFaqs: [{ q: 'Can you wire a hot tub on a hilly Delhi Hills lot?', a: 'Yes. We run weather-rated conduit out to the spa, set the disconnect within sight of the tub, and confirm the mid-century panel can carry a dedicated 240V GFCI circuit first.' }],
  },
  'golf-manor': {
    intro: 'Golf Manor’s compact mid-century lots keep a hot tub close to the house. These modest homes were not built for a modern spa load, so the panel evaluation decides it. Small footprint or not, the wiring needs a disconnect within sight and careful bonding around the water.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes. Those modest mid-1900s homes were not built for a modern spa load, so a panel evaluation is the deciding factor before any circuit goes in.',
      'On the compact lots here, the spa sits close to the house, so the outdoor run, the disconnect within sight of the tub, and the bonding around the water all matter on a small footprint. We handle the village permit and run the dedicated 240V GFCI circuit to code.',
    ],
    commonIntro: 'In Golf Manor’s modest mid-century homes, hot-tub wiring usually starts with a panel check on a compact lot.',
    localFaqs: [{ q: 'Will a small Golf Manor home’s panel handle a hot tub?', a: 'Modest mid-century panels here often need a capacity check first. If the service can carry the load we install a dedicated 240V GFCI circuit with bonding; if not, we lay out the panel work needed.' }],
  },
  'fairfax': {
    intro: 'Fairfax is a small village on Wooster Pike near Mariemont, with settled lots where a backyard hot tub fits well. Its early- and mid-1900s homes often run older panels, so we confirm capacity, then install a GFCI-protected circuit with bonding, handling the village permit and inspection.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. Homes of that range often run on older panels, so a spa install begins with confirming the service can carry a dedicated 50-amp circuit.',
      'On these settled village lots, a backyard spa needs a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the village permit work and run the circuit to code.',
    ],
    commonIntro: 'In Fairfax’s older homes, hot-tub wiring starts with a panel check before a GFCI-protected circuit goes out to the yard.',
    localFaqs: [{ q: 'Do you handle hot-tub wiring permits in Fairfax?', a: 'Yes. Fairfax is its own village along Wooster Pike, and we handle the permit and inspection there. We evaluate the panel first, then install a dedicated 240V GFCI circuit with bonding.' }],
  },
  'mack': {
    intro: 'Mack is a Green Township community of mid-century and newer homes, with backyards built for a hot tub. Newer panels often have room, but we still run a load calculation first, then install an outdoor GFCI-protected circuit with bonding and a disconnect within sight of the tub.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes. The newer homes often have enough panel capacity for a spa, but even those need a load calculation to confirm a dedicated 50- or 60-amp circuit fits before anything is wired.',
      'These are classic single-family lots with backyards built for a spa, which means a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the Green Township permit and run the circuit to code.',
    ],
    commonIntro: 'Across Mack’s mid-century and newer homes, hot-tub wiring comes down to a load calculation and a GFCI-protected backyard circuit.',
    localFaqs: [{ q: 'How do I get a hot tub wired in Mack?', a: 'We do a panel load calculation first, even on newer Green Township homes, then install a dedicated 240V GFCI circuit with bonding and a disconnect within sight of the tub.' }],
  },
  'monfort-heights': {
    intro: 'Most Monfort Heights homes are mid-century single-family houses with room out back for a hot tub. The original panels may not have room for a dedicated 50-amp circuit, so we check first, then wire the spa with a weather-rated outdoor run and bonding around the water.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes. Mid-1900s panels here are now at the age where a capacity check often comes first, since a modern spa wants a dedicated 50-amp circuit the original service may not have room for.',
      'The single-family lots here have the kind of backyards a spa fits into, so the install means a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the Green Township permit before the conduit goes in.',
    ],
    commonIntro: 'Across Monfort Heights’ mid-century homes, hot-tub wiring usually starts with a panel check before a GFCI-protected backyard circuit.',
    localFaqs: [{ q: 'Will a mid-century Monfort Heights home handle a hot tub?', a: 'Often the panel needs evaluating first. If the service can carry the load we install a dedicated 240V GFCI circuit with bonding; if not, we lay out the panel work needed.' }],
  },
  'bridgetown': {
    intro: 'Suburban Bridgetown lots in Green Township usually have the backyard for a hot tub, but panel capacity varies across the mid-century and newer homes. We start with a load calculation, then run a dedicated GFCI-protected circuit in weather-rated conduit with the disconnect within sight.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes. Across that mix, panel capacity varies, so a load calculation is the first step to confirm the service can carry a dedicated 50- or 60-amp spa circuit.',
      'These suburban lots have backyards suited to a spa, which means a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the Green Township permit and do the wiring to code.',
    ],
    commonIntro: 'Across Bridgetown’s homes, hot-tub wiring comes down to a panel check and a GFCI-protected run to the backyard.',
    localFaqs: [{ q: 'How do I get a hot tub wired in Bridgetown?', a: 'We start with a panel evaluation, since capacity varies across Green Township homes here, then install a dedicated 240V GFCI circuit with bonding and a code-compliant disconnect.' }],
  },
  'finneytown': {
    intro: 'Finneytown’s mid-century single-family lots in Springfield Township have backyards a hot tub fits into, but the panels are often undersized for a modern spa. We check capacity first. Then we take care of the weather-rated outdoor run, the GFCI circuit and bonding at the tub.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes. Panels in mid-1900s homes here are often undersized for a modern spa, so a capacity check is the real first step before any circuit.',
      'The single-family lots here have backyards a spa fits into, so the install means a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the Springfield Township permit before the conduit goes in.',
    ],
    commonIntro: 'Across Finneytown’s mid-century homes, hot-tub wiring usually begins with a panel check before a GFCI-protected backyard circuit.',
    localFaqs: [{ q: 'Will a mid-century Finneytown home’s panel support a hot tub?', a: 'Often it needs evaluating first, since Springfield Township homes here can be undersized. If the service can carry the load we install a dedicated 240V GFCI circuit with bonding to NEC.' }],
  },
  'amberley': {
    intro: 'Big wooded lots in Amberley Village often put a hot tub well off the back of the house, so the run can be long and needs weather-rated conduit. Larger homes carry larger electrical systems, but we still run a load calculation to confirm the panel can carry the spa circuit.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets. Those big lots are made for a spa, but they also mean the tub often sits well off the back of the house, so the outdoor run can be long and has to use weather-rated conduit with a disconnect within sight of the tub.',
      'Larger homes carry larger electrical systems, and we still run a load calculation to confirm the panel can carry a dedicated 50- or 60-amp spa circuit. GFCI protection and bonding around the water are required on every install, and we handle the village permit before the wiring goes in.',
    ],
    commonIntro: 'In Amberley’s large homes on wooded lots, hot-tub wiring often means a longer weather-rated run and a panel load check.',
    localFaqs: [{ q: 'Can you run hot-tub wiring across a large Amberley lot?', a: 'Yes. We use weather-rated conduit for the longer run a big wooded lot needs, set the disconnect within sight of the tub, and confirm the panel can carry a dedicated 240V GFCI circuit first.' }],
  },
  'arlington-heights': {
    intro: 'Arlington Heights is a small Mill Creek valley village with a compact grid of older homes, so a hot tub there sits close to the house. The panels are usually older or undersized, so capacity decides it. The outdoor run and disconnect then need careful bonding.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes. The older housing here usually runs on older or undersized panels, so a capacity check is the deciding factor before a spa circuit.',
      'On small valley lots, the spa sits close to the house, so the outdoor run, the disconnect within sight of the tub, and the bonding around the water all matter on a tight footprint. We handle the village permit and run the dedicated 240V GFCI circuit to code.',
    ],
    commonIntro: 'In Arlington Heights’ older valley homes, hot-tub wiring starts with a panel check on a small, compact lot.',
    localFaqs: [{ q: 'Will an older Arlington Heights home support a hot tub circuit?', a: 'Often the panel needs a look first. We evaluate the service in this Mill Creek valley village, then install a dedicated 240V GFCI circuit with bonding and a code-compliant disconnect.' }],
  },
  'north-college-hill': {
    intro: 'Dense lots in North College Hill put a hot tub close to both the house and the neighbors. Its early- and mid-1900s homes often run older panels, so we confirm the service can carry a dedicated 50-amp circuit, then wire it to code and handle the city permit and inspection.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes. That older, tightly packed housing often runs on older or undersized panels, so a spa install begins with confirming the service can carry a dedicated 50-amp circuit.',
      'On these dense lots, the spa sits close to the house and the neighbors, so the outdoor run, the disconnect within sight of the tub, and the bonding around the water are done carefully and to code. We handle the city permit before any conduit goes in.',
    ],
    commonIntro: 'In North College Hill’s older homes, hot-tub wiring usually starts with a panel check on a tightly built lot.',
    localFaqs: [{ q: 'Do you handle permits for hot-tub wiring in North College Hill?', a: 'Yes. North College Hill is its own city, and we handle the permit and inspection there. We also evaluate the panel first to confirm it can carry a dedicated 240V GFCI circuit.' }],
  },
  'newtown': {
    intro: 'Newtown’s older homes sit on low river-bottom ground near the Little Miami River, and that damp setting is why hot tub wiring there needs weather-rated conduit, proper bonding and GFCI protection. The aging electrical systems also need a panel evaluation before the spa circuit.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground. That low, often damp setting is exactly why weather-rated conduit, proper bonding, and a GFCI-protected circuit matter when a spa goes on a deck or patio close to the water.',
      'The older homes here carry aging electrical systems, so a panel evaluation comes first to confirm the service can carry a dedicated spa circuit. The disconnect still has to sit within sight of the tub, and we handle the village permit before the outdoor run goes in.',
    ],
    commonIntro: 'In Newtown’s older homes near the Little Miami, hot-tub wiring means weather-rated outdoor conduit, solid bonding, and a panel that can carry the load.',
    localFaqs: [{ q: 'Is hot-tub wiring different for a low-lying Newtown home?', a: 'The outdoor run has to be weather-rated and properly bonded for the damp river-bottom conditions near the Little Miami, and we evaluate the panel first to confirm it can carry a dedicated 240V GFCI circuit.' }],
  },
  'turpin-hills': {
    intro: 'Turpin Hills, in Anderson Township, has suburban lots with backyards built for a hot tub. Newer homes often have the panel capacity, but every job gets a load calculation first. Then we handle the weather-rated outdoor run, GFCI protection and bonding at the water.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. The newer homes often have enough panel capacity for a spa, but even those get a load calculation to confirm a dedicated 50- or 60-amp circuit fits before wiring.',
      'These suburban lots have backyards built for a spa, so the install means a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the Anderson Township permit and do the wiring to code.',
    ],
    commonIntro: 'Across Turpin Hills’ homes, hot-tub wiring comes down to a load calculation and a GFCI-protected backyard circuit.',
    localFaqs: [{ q: 'How do I get a hot tub wired in Turpin Hills?', a: 'We do a panel load calculation first, even on newer Anderson Township homes, then install a dedicated 240V GFCI circuit with bonding and a disconnect within sight of the tub.' }],
  },
  'silverton': {
    intro: 'Silverton’s early- and mid-1900s homes along Montgomery Road sit on settled lots with room for a backyard hot tub. Many run older panels, so we confirm the service can carry a dedicated 50-amp circuit, then wire it in weather-rated conduit with a disconnect in sight.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes. Homes of that range often run on older panels, so a spa install starts with confirming the service can carry a dedicated 50-amp circuit.',
      'On these settled lots, a backyard spa needs a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the city permit work and run the circuit to code.',
    ],
    commonIntro: 'In Silverton’s older homes, hot-tub wiring usually begins with a panel check before a GFCI-protected backyard circuit.',
    localFaqs: [{ q: 'Will an older Silverton home’s panel support a hot tub?', a: 'Often it needs evaluating first, since early- and mid-1900s homes along Montgomery Road can be undersized. If the service can carry the load we install a dedicated 240V GFCI circuit with bonding.' }],
  },
  'lockland': {
    intro: 'Lockland’s old mill-worker housing sits close together in the Mill Creek valley, so a hot tub ends up near the house and property line. The older panels usually need a capacity check first. The wiring then goes in weather-rated conduit with careful bonding.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing. That old, tightly packed housing usually runs on older or undersized panels, so a capacity check is the real first step before a spa circuit.',
      'On these small valley lots, the spa sits close to the house and the property line, so the outdoor run uses weather-rated conduit, the disconnect goes within sight of the tub, and bonding around the water is done with care. We handle the village permit before the wiring goes in.',
    ],
    commonIntro: 'In Lockland’s older valley homes, hot-tub wiring starts with a panel check on a closely built lot.',
    localFaqs: [{ q: 'Will an older Lockland home support a hot tub circuit?', a: 'Often the older panel needs a look first. We evaluate the service in this Mill Creek valley village, then install a dedicated 240V GFCI circuit with bonding and a code-compliant disconnect.' }],
  },
  'groesbeck': {
    intro: 'Groesbeck, in Colerain Township, is mostly mid-century single-family homes with backyards that fit a hot tub. The original panels may lack room for a dedicated 50-amp circuit, so we check first, then run the spa wiring outside with GFCI protection and a disconnect within sight.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. Mid-1900s panels here are often at the age where a capacity check comes first, since a modern spa wants a dedicated 50-amp circuit the original service may not have room for.',
      'The single-family lots here have backyards a spa fits into, so the install means a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the Colerain Township permit before the conduit goes in.',
    ],
    commonIntro: 'Across Groesbeck’s mid-century homes, hot-tub wiring usually starts with a panel check before a GFCI-protected backyard circuit.',
    localFaqs: [{ q: 'Will a mid-century Groesbeck home handle a hot tub?', a: 'Often the panel needs evaluating first. If the service can carry the load we install a dedicated 240V GFCI circuit with bonding; if not, we lay out the panel work needed in Colerain Township.' }],
  },
  'mount-healthy': {
    intro: 'Putting a hot tub behind one of Mount Healthy’s early-1900s or mid-century homes starts with a capacity check, since many around the old town center have older or undersized panels. Then comes a weather-rated, bonded run on the settled lot. We handle the city permit and inspection.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes. That older housing often runs on older or undersized panels, so a spa install begins with confirming the service can carry a dedicated 50-amp circuit.',
      'On these settled lots, a backyard spa needs a weather-rated outdoor run, a disconnect within sight of the tub, GFCI protection, and bonding around the water. We handle the city permit work and run the dedicated 240V circuit to code.',
    ],
    commonIntro: 'In Mount Healthy’s older homes, hot-tub wiring usually starts with a panel check before a GFCI-protected backyard circuit.',
    localFaqs: [{ q: 'Do you handle permits for hot-tub wiring in Mount Healthy?', a: 'Yes. Mount Healthy is its own city, and we handle the permit and inspection there. We also evaluate the panel first to confirm it can carry a dedicated 240V GFCI circuit.' }],
  },
};
