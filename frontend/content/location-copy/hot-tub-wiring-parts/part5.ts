export const part5: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'ludlow': {
    intro: 'Victorian and early-1900s Ludlow homes near Elm Street often still run the service they were born with, a 60-amp fuse box or an early breaker panel, never meant to carry a hot tub. We run a load calculation first and upgrade if needed before adding the 240V GFCI circuit.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Kenton County river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes. Houses that old often still run on the service they were born with — a 60-amp fuse box or an early breaker panel that was never meant to carry a spa pulling 40 or 50 amps on its own circuit.',
      'Before any wire goes in, we run a load calculation on the panel to confirm it can take a dedicated 240V hot-tub circuit with GFCI protection. In a century-old Ludlow home the honest answer is sometimes a panel upgrade first. We also bond the tub and its surrounding metal, set the required disconnect within sight of the spa, and run weather-rated conduit outdoors so the install holds up next to the river.',
    ],
    commonIntro: 'In Ludlow’s century-old riverfront homes, hot-tub wiring usually starts with whether an aging panel can carry a new 240V GFCI circuit:',
    localFaqs: [{ q: 'Can an older Ludlow home handle a hot tub circuit?', a: 'Often, but not always. We evaluate the panel and run a load calculation first, and if a historic Ludlow home’s service is undersized we upgrade it before adding the dedicated 240V GFCI circuit, bonded and permitted to code.' }],
  },
  'park-hills': {
    intro: 'Many early-1900s Park Hills homes beside Devou Park run panels 40 to 60 years old and already short on breaker space, so a hot tub there often means a service upgrade first. We run the load calculation, then add the dedicated 240V GFCI circuit and bonding under a permit.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Kenton County city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington. Many of those houses still run on a panel 40 to 60 years old and already short on breaker space, which leaves little room for the dedicated circuit a hot tub needs.',
      'When a Park Hills panel is full, the load calculation usually points to a service upgrade before the spa circuit goes in. We size the service with headroom, install the GFCI-protected 240V run, bond the tub and nearby metal, and set the disconnect within sight — work that matters on these steep lots where the spa often lands on a deck below the main floor and the conduit has to be weather-rated for the run outdoors.',
    ],
    commonIntro: 'In Park Hills’ older hillside homes, hot-tub wiring tends to hinge on whether a decades-old panel has room for another 240V circuit:',
    localFaqs: [{ q: 'My Park Hills panel is already full — can I still wire a hot tub?', a: 'Yes. When an older Park Hills panel has no room left, we evaluate the service, upgrade it where the load calculation calls for it, then add the dedicated 240V GFCI circuit and bonding under a permit.' }],
  },
  'bromley': {
    intro: 'Bromley sits on low ground by the Ohio River, and damp soil and high water are why a hot tub there needs GFCI protection, careful grounding and weather-rated conduit, not a quick extension off an existing circuit. Many homes have small services, so the panel gets checked first.',
    relevance: [
      'Bromley (ZIP 41016) is a small Kenton County river village next to Ludlow, with older homes on low ground beside the Ohio River. Its riverside position means damp ground and high water, which is exactly why a spa here needs proper GFCI protection, careful grounding, and weather-rated conduit rather than a quick extension off an existing circuit.',
      'We start with the panel — many Bromley homes carry older, smaller services that need a load calculation before a 240V hot-tub circuit is added. From there we bond the tub and its metal components, set the disconnect within sight of the spa, and route the wiring in weather-rated conduit so the low, riverside setting does not put anyone at risk.',
    ],
    commonIntro: 'In Bromley’s older riverside homes, hot-tub wiring centers on safe GFCI protection and a panel that can carry the load:',
    localFaqs: [{ q: 'Is GFCI protection a must for a Bromley hot tub near the river?', a: 'Yes. A spa needs GFCI protection by code anywhere, and on Bromley’s low riverside ground it matters even more. We evaluate the panel, then install the dedicated 240V circuit with GFCI and bonding, permitted to code.' }],
  },
  'fort-wright': {
    intro: 'Mid-century homes in Fort Wright have reached the age where the original panel is short on space, so a hot tub circuit needs a careful look at the service before anything is connected. We run a load calculation, then install the 240V GFCI circuit with bonding, licensed and permitted.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes. Mid-century houses here have reached the age where the original panel is short on space, so a new 240V hot-tub circuit often needs a careful look at the service before anything is connected.',
      'We run a load calculation, then install the GFCI-protected spa circuit, bond the tub and surrounding metal, and set the disconnect within sight as the code requires. On Fort Wright’s sloped lots, where the tub frequently sits on a raised deck, we route the run in weather-rated conduit so the outdoor portion stands up to the elements.',
    ],
    commonIntro: 'Across Fort Wright’s mid-century homes, hot-tub wiring usually comes down to whether the panel can carry another 240V circuit:',
    localFaqs: [{ q: 'How fast can you wire a hot tub in Fort Wright?', a: 'Fort Wright is well within our Northern Kentucky service area. We evaluate the panel, confirm it can carry the dedicated 240V GFCI circuit, and schedule the licensed, permitted install promptly.' }],
  },
  'fort-mitchell': {
    intro: 'Fort Mitchell homes along Dixie Highway, historic and mid-century alike, often have panels added to over the decades, so hot tub wiring starts with confirming there is room. After a load calculation we install the 240V GFCI circuit, bond the metal parts and pull the permit.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets. The older and mid-century houses here often carry panels that have been added to over the decades, so confirming there is capacity for a 240V spa circuit is the first step.',
      'After a load calculation, we install the GFCI-protected circuit, bond the tub and its metal parts, and place the disconnect within sight of the spa. For the outdoor run we use weather-rated conduit, which keeps the install safe on the deck and patio setups common across Fort Mitchell’s settled neighborhoods.',
    ],
    commonIntro: 'Across Fort Mitchell’s older and mid-century homes, hot-tub wiring depends on whether an added-to panel still has room for a 240V circuit:',
    localFaqs: [{ q: 'Do I need a permit to wire a hot tub in Fort Mitchell?', a: 'Yes. Hot-tub wiring is permitted electrical work. We pull the permit, evaluate the panel, and install the dedicated 240V GFCI circuit with bonding to code in Fort Mitchell.' }],
  },
  'villa-hills': {
    intro: 'Larger backyards in Villa Hills suit a hot tub, but even newer panels in this hilltop city can run short on breaker space once a 240V circuit is added. We run a load calculation first, then install the GFCI-protected circuit and bond the tub and nearby metal to code.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes with the kind of larger backyards that suit a spa. Even newer panels here can run short on breaker space once a 240V hot-tub circuit is added, so we check capacity before committing.',
      'We run the load calculation, install the GFCI-protected circuit, and bond the tub and nearby metal so stray current has nowhere to go. The disconnect goes within sight of the spa, and on Villa Hills’ sloped lots we route the outdoor portion in weather-rated conduit to the deck or patio where the tub sits.',
    ],
    commonIntro: 'Across Villa Hills’ hilltop homes with room for a spa, hot-tub wiring starts with confirming panel capacity for a 240V circuit:',
    localFaqs: [{ q: 'Can my Villa Hills panel handle a hot tub circuit?', a: 'Usually, but we verify it. We run a load calculation on your Villa Hills panel first, and if it is short on capacity we address that before adding the dedicated 240V GFCI circuit, bonded and to code.' }],
  },
  'lakeside-park': {
    intro: 'Lakeside Park is mostly mid-century homes on quiet streets, and their decades-old panels are often near capacity, so a hot tub calls for a load calculation before the work begins. Once we confirm the panel can carry it, we wire the GFCI circuit with a disconnect in sight.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city made up largely of mid-century single-family homes on quiet streets. Panels of that era are now decades old and often near capacity, so a 240V hot-tub circuit calls for a load calculation before the work begins.',
      'Once we confirm the panel can carry it, we install the GFCI-protected circuit, bond the tub and its metal components, and set the disconnect within sight of the spa. For the backyard run we use weather-rated conduit, keeping the outdoor wiring safe on the patio installs common across Lakeside Park.',
    ],
    commonIntro: 'Across Lakeside Park’s mid-century homes, hot-tub wiring usually hinges on whether an aging panel has room for a 240V circuit:',
    localFaqs: [{ q: 'How fast can you wire a hot tub in Lakeside Park?', a: 'Lakeside Park is well within our Northern Kentucky service area. We evaluate the panel, confirm capacity for the dedicated 240V GFCI circuit, and schedule the licensed, permitted install promptly.' }],
  },
  'crescent-springs': {
    intro: 'Plenty of Crescent Springs homes have the backyard space a hot tub needs. Older panel or fairly recent, adding the 240V circuit means confirming capacity, so the job starts with a load calculation and ends with the GFCI circuit installed and the tub and surrounding metal bonded.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city with established neighborhoods of mid-century and newer homes and the backyard space many spas need. Whether the panel is older or fairly recent, adding a 240V hot-tub circuit means confirming there is capacity for the new load.',
      'We run the load calculation, install the GFCI-protected circuit, and bond the tub and surrounding metal as the code requires. The disconnect is set within sight of the spa, and the outdoor portion runs in weather-rated conduit so the deck or patio install in a Crescent Springs backyard stays safe through every season.',
    ],
    commonIntro: 'Across Crescent Springs’ suburban homes, hot-tub wiring comes down to confirming the panel can carry a new 240V circuit:',
    localFaqs: [{ q: 'Do you handle the whole hot tub wiring job in Crescent Springs?', a: 'Yes. In Crescent Springs we evaluate the panel, run the dedicated 240V GFCI circuit, bond the tub, and set the within-sight disconnect — all licensed and permitted to code.' }],
  },
  'crestview-hills': {
    intro: 'Crestview Hills, home to Thomas More University, has residential streets where a hot tub fits and properties near the commercial corridor. Either way, the 240V spa circuit has to be sized against the existing panel, so we run a load calculation before installing and bonding it.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor. Whether the spa is going in behind a home or at a property near the commercial district, the 240V hot-tub circuit has to be sized against the existing panel first.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and its metal so the system is grounded properly. The disconnect is placed within sight of the spa, and the outdoor run uses weather-rated conduit — work we handle the same way on Crestview Hills’ residential streets and at its mixed-use properties.',
    ],
    commonIntro: 'Across Crestview Hills’ homes and properties, hot-tub wiring starts with sizing a 240V GFCI circuit against the panel:',
    localFaqs: [{ q: 'Can you wire a hot tub at a Crestview Hills property with limited panel space?', a: 'Yes. We run a load calculation in Crestview Hills, and where the panel is short on space we address it before adding the dedicated 240V GFCI circuit, bonded and permitted to code.' }],
  },
  'edgewood': {
    intro: 'Edgewood yards near St. Elizabeth Healthcare comfortably hold a hot tub, but panels here range from decades-old to fairly recent. A load calculation comes first. Then we install the GFCI-protected 240V circuit, bond the tub and set the disconnect within sight, licensed and permitted.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes and yards that comfortably hold a spa. Panels here range from decades-old to fairly recent, so confirming capacity for a 240V hot-tub circuit is always the starting point.',
      'After a load calculation, we install the GFCI-protected circuit, bond the tub and nearby metal, and set the disconnect within sight of the spa. The outdoor run goes in weather-rated conduit, keeping the deck and patio installs common across Edgewood’s settled neighborhoods safe and code-compliant.',
    ],
    commonIntro: 'Across Edgewood’s residential homes, hot-tub wiring depends on whether the panel can carry another 240V circuit:',
    localFaqs: [{ q: 'How fast can you wire a hot tub in Edgewood?', a: 'Edgewood is well within our Northern Kentucky service area. We evaluate the panel, confirm capacity for the dedicated 240V GFCI circuit, and schedule the licensed, permitted install promptly.' }],
  },
  'taylor-mill': {
    intro: 'Taylor Mill is a hilltop city south of Covington, and even its newer panels can run short once a hot tub circuit is added. We check capacity with a load calculation, address any shortfall, then install the 240V GFCI circuit and bond the tub and surrounding metal.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes. Even newer panels here can run short once a 240V hot-tub circuit is added, so we check capacity before connecting anything.',
      'We run the load calculation, install the GFCI-protected spa circuit, and bond the tub and surrounding metal. The disconnect goes within sight of the spa, and on Taylor Mill’s sloped lots — where the tub often sits on a raised deck — we route the outdoor portion in weather-rated conduit so the run holds up to the weather.',
    ],
    commonIntro: 'Across Taylor Mill’s hilltop homes, hot-tub wiring usually hinges on whether the panel has room for a 240V circuit:',
    localFaqs: [{ q: 'My Taylor Mill panel may be full — can I still add a hot tub?', a: 'Often yes. We run a load calculation on your Taylor Mill panel, and where it is short on space we address that before adding the dedicated 240V GFCI circuit, bonded and to code.' }],
  },
  'elsmere': {
    intro: 'Elsmere’s older and mid-century homes near Erlanger tend to have older panels that are tight on space, so a hot tub needs a load calculation before the work begins. We upgrade where the panel is undersized, then install the 240V GFCI circuit and ground the spa correctly.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes. The age of the housing means many panels here are older and tighter on space, so a 240V hot-tub circuit needs a load calculation before the work begins.',
      'We confirm capacity, install the GFCI-protected circuit, and bond the tub and its metal so the spa is grounded correctly. The disconnect is set within sight, and the outdoor run uses weather-rated conduit — important in Elsmere’s older neighborhoods where the existing wiring was never planned around a spa.',
    ],
    commonIntro: 'Across Elsmere’s older and mid-century homes, hot-tub wiring depends on whether an aging panel can take a 240V circuit:',
    localFaqs: [{ q: 'Can an older Elsmere home support a hot tub circuit?', a: 'Often, but we verify it first. We run a load calculation on your Elsmere panel, upgrade where it is undersized, and then install the dedicated 240V GFCI circuit, bonded and permitted to code.' }],
  },
  'independence': {
    intro: 'Independence has a historic core with newer subdivisions around it, and hot tub wiring differs between them. Subdivisions tend to have big backyards built for a spa, while older core homes have panels that need a closer look. Either way, a load calculation comes first.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions. The newer subdivisions tend to have big backyards built for a spa, while the older core carries panels that may need a closer look before a 240V hot-tub circuit is added.',
      'In either case we run a load calculation, install the GFCI-protected circuit, and bond the tub and surrounding metal. The disconnect goes within sight of the spa, and the outdoor portion runs in weather-rated conduit — whether the tub sits on a new deck in a subdivision or behind one of the older homes near the historic core of Independence.',
    ],
    commonIntro: 'Across Independence’s newer subdivisions and older core, hot-tub wiring starts with sizing a 240V GFCI circuit to the panel:',
    localFaqs: [{ q: 'Do new Independence subdivision homes have room for a hot tub circuit?', a: 'Usually, but we confirm it. We run a load calculation on the panel in your Independence home, then install the dedicated 240V GFCI circuit with bonding and a within-sight disconnect, permitted to code.' }],
  },
  'dayton-ky': {
    intro: 'Dayton’s late-1800s and early-1900s homes next to Bellevue often run small original services, so a hot tub circuit starts with a hard look at the panel. On the low riverside ground, proper GFCI protection and grounding matter most. We upgrade the panel if the load calculation calls for it.',
    relevance: [
      'Dayton (ZIP 41074) is a Campbell County river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River. Houses that old often run on small, original services, so a 240V hot-tub circuit usually starts with a hard look at whether the panel can carry it.',
      'On Dayton’s low riverside ground, proper GFCI protection and grounding are not optional, and a damp setting is exactly where bonding the tub matters most. We run the load calculation, install the GFCI-protected circuit, bond the tub and its metal, set the disconnect within sight, and route the outdoor run in weather-rated conduit on these compact riverfront lots.',
    ],
    commonIntro: 'In Dayton’s historic riverfront homes, hot-tub wiring centers on a small old panel and proper GFCI protection:',
    localFaqs: [{ q: 'Can a historic Dayton, KY home handle a hot tub circuit?', a: 'Sometimes the original service is too small. We run a load calculation on your Dayton home first, upgrade the panel if needed, then add the dedicated 240V GFCI circuit with bonding, permitted to code.' }],
  },
  'southgate': {
    intro: 'Southgate sits between Newport and Fort Thomas, and a hot tub there usually means a mid-century panel that is decades old and often near capacity. A load calculation comes first. Once we confirm the panel can carry it, we install the GFCI circuit and bond the tub.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes. Panels of that era are now decades old and often near capacity, so a 240V hot-tub circuit calls for a load calculation before the work starts.',
      'We confirm the panel can carry it, install the GFCI-protected circuit, and bond the tub and surrounding metal. The disconnect is set within sight of the spa, and the outdoor run uses weather-rated conduit, keeping the backyard install safe across Southgate’s settled mid-century streets.',
    ],
    commonIntro: 'Across Southgate’s mid-century homes, hot-tub wiring depends on whether an aging panel can take a 240V circuit:',
    localFaqs: [{ q: 'How fast can you wire a hot tub in Southgate?', a: 'Southgate is well within our Northern Kentucky service area near Newport. We evaluate the panel, confirm capacity for the dedicated 240V GFCI circuit, and schedule the licensed, permitted install promptly.' }],
  },
  'wilder': {
    intro: 'Wilder’s homes along the Licking River corridor sit beside a commercial and industrial base, so a hot tub here might go behind a house or at a business. Either way, the 240V circuit is sized against the panel with a load calculation before we install and bond it.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods. Whether the spa is behind a home or at a commercial property, the 240V hot-tub circuit has to be sized against the existing panel first.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and its metal so it is grounded properly. The disconnect goes within sight of the spa, and the outdoor run uses weather-rated conduit — the same code-driven approach we follow on Wilder’s residential streets and at its mixed commercial properties.',
    ],
    commonIntro: 'Across Wilder’s homes and businesses, hot-tub wiring starts with sizing a 240V GFCI circuit to the panel:',
    localFaqs: [{ q: 'Can you wire a hot tub at a Wilder property with a heavy existing load?', a: 'Yes. We run a load calculation in Wilder to see what the panel can carry, and where capacity is tight we address it before adding the dedicated 240V GFCI circuit, bonded and permitted to code.' }],
  },
  'highland-heights': {
    intro: 'Highland Heights is home to Northern Kentucky University, and hot tub wiring in its mid-century homes starts with panels that are now decades old. Each circuit needs a capacity check first. We run the load calculation, then install the GFCI circuit and bond the tub and nearby metal.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing. The mid-century homes here carry panels that are now decades old, so a 240V hot-tub circuit needs a capacity check before it is connected.',
      'We run the load calculation, install the GFCI-protected circuit, and bond the tub and nearby metal as the code requires. The disconnect goes within sight of the spa, and the outdoor portion runs in weather-rated conduit, keeping the install safe on the backyard and deck setups common across Highland Heights.',
    ],
    commonIntro: 'Across Highland Heights’ homes near NKU, hot-tub wiring depends on whether the panel can carry a 240V circuit:',
    localFaqs: [{ q: 'How fast can you wire a hot tub in Highland Heights?', a: 'Highland Heights is well within our Northern Kentucky service area near NKU. We evaluate the panel, confirm capacity for the dedicated 240V GFCI circuit, and schedule the licensed, permitted install promptly.' }],
  },
  'cold-spring': {
    intro: 'Along US-27, Cold Spring’s newer subdivisions tend to have the larger backyards a hot tub needs, while older homes have panels that may need a closer look. We run a load calculation either way, then install the 240V GFCI circuit with bonding and a disconnect within sight.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions. The newer subdivisions tend to have the larger backyards a spa needs, while older homes carry panels that may need a closer look before a 240V hot-tub circuit is added.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and surrounding metal. The disconnect is set within sight of the spa, and the outdoor run uses weather-rated conduit — whether the tub goes on a new deck in a Cold Spring subdivision or behind one of the city’s established homes.',
    ],
    commonIntro: 'Across Cold Spring’s newer and older homes, hot-tub wiring starts with confirming the panel can carry a 240V circuit:',
    localFaqs: [{ q: 'Do new Cold Spring homes have room for a hot tub circuit?', a: 'Usually, but we confirm it. We run a load calculation on the panel in your Cold Spring home, then add the dedicated 240V GFCI circuit with bonding and a within-sight disconnect, permitted to code.' }],
  },
  'alexandria': {
    intro: 'Alexandria, the Campbell County seat, has newer subdivisions and semi-rural lots with room for a hot tub, but panels range widely. We start with a load calculation. On larger lots we size the circuit for the distance, run weather-rated conduit and set a disconnect within sight.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes. The newer subdivisions and rural lots both offer the kind of backyard space a spa needs, but the panels range widely, so a 240V hot-tub circuit always starts with a capacity check.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and its metal so the spa is grounded correctly. The disconnect goes within sight, and the outdoor run uses weather-rated conduit — which matters on Alexandria’s larger and semi-rural lots where the tub can sit well away from the house.',
    ],
    commonIntro: 'Across Alexandria’s newer and rural homes, hot-tub wiring depends on confirming the panel can carry a 240V circuit:',
    localFaqs: [{ q: 'Can you wire a hot tub set well away from the house in Alexandria?', a: 'Yes. On Alexandria’s larger and semi-rural lots we size the dedicated 240V GFCI circuit for the distance, bond the tub, set a within-sight disconnect, and run weather-rated conduit, all permitted to code.' }],
  },
  'melbourne': {
    intro: 'Melbourne is a small river village east of Newport, and hot tub wiring for its older homes on low ground starts with a load calculation, since many have small services. The damp setting makes GFCI protection, careful grounding and weather-rated conduit matter more than a makeshift hookup would allow.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground. That damp, low setting is exactly why a spa here needs proper GFCI protection, careful grounding, and weather-rated conduit rather than a makeshift hookup.',
      'We start with the panel, since many Melbourne homes carry older, smaller services that need a load calculation before a 240V hot-tub circuit is added. From there we bond the tub and its metal, set the disconnect within sight of the spa, and route the wiring in weather-rated conduit so the riverside location does not become a hazard.',
    ],
    commonIntro: 'In Melbourne’s older riverside homes, hot-tub wiring centers on safe GFCI protection and a panel that can carry the load:',
    localFaqs: [{ q: 'Is a special setup needed for a Melbourne hot tub near the river?', a: 'The setup is the same code-required one — a dedicated 240V GFCI circuit with bonding — but Melbourne’s low riverside ground makes the grounding and weather-rated conduit especially important. We evaluate the panel first, then install it permitted to code.' }],
  },
  'hebron': {
    intro: 'Near the Cincinnati/Northern Kentucky airport, Hebron’s newer subdivisions have big backyards and decks built for a hot tub, while semi-rural lots let the tub sit well away from the house. We run a load calculation, then size the GFCI circuit for the run and bond the spa.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes. The newer subdivisions tend to have big backyards and decks built for a spa, while rural properties give the tub room to sit well away from the house.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and surrounding metal as the code requires. The disconnect is set within sight of the spa, and the outdoor run uses weather-rated conduit — sized for the distance on Hebron’s larger lots and for the deck setups common in its subdivisions.',
    ],
    commonIntro: 'Across Hebron’s newer and rural homes, hot-tub wiring starts with sizing a 240V GFCI circuit to the panel and the run:',
    localFaqs: [{ q: 'Can you wire a hot tub on a large Hebron lot away from the house?', a: 'Yes. On Hebron’s semi-rural lots we size the dedicated 240V GFCI circuit for the distance, bond the tub, set a within-sight disconnect, and run weather-rated conduit, all permitted to code.' }],
  },
  'burlington': {
    intro: 'Burlington’s historic courthouse core is ringed by fast-growing subdivisions with backyards and decks that suit a hot tub. The older core and rural homes carry panels that need a look first. In either, we run a load calculation, then install the GFCI-protected circuit with the tub bonded.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions. The subdivisions tend to come with the larger backyards and decks a spa suits, while the historic core and rural homes carry older panels that need a look before a 240V circuit is added.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and its metal. The disconnect goes within sight of the spa, and the outdoor portion runs in weather-rated conduit — the same approach whether the tub lands on a new deck in a Burlington subdivision or behind one of the older homes near the courthouse.',
    ],
    commonIntro: 'Across Burlington’s newer subdivisions and historic core, hot-tub wiring starts with sizing a 240V GFCI circuit to the panel:',
    localFaqs: [{ q: 'Do new Burlington subdivision homes have room for a hot tub circuit?', a: 'Usually, but we confirm it. We run a load calculation on the panel in your Burlington home, then add the dedicated 240V GFCI circuit with bonding and a within-sight disconnect, permitted to code.' }],
  },
  'union': {
    intro: 'Union subdivisions built from the 1990s onward often have the big backyards and decks a hot tub is built around. Even a newer panel can get pushed toward its limit by a 240V circuit, so we confirm capacity with a load calculation before installing the GFCI circuit.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward, many with the big backyards and decks a spa is built around. Even in a newer home, a 240V hot-tub circuit can push a panel toward its limit, so we confirm capacity before connecting.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and surrounding metal. The disconnect goes within sight of the spa, and the outdoor run uses weather-rated conduit, keeping the deck install common across Union’s subdivisions safe and code-compliant.',
    ],
    commonIntro: 'Across Union’s newer subdivisions, hot-tub wiring starts with confirming a newer panel can carry a 240V circuit:',
    localFaqs: [{ q: 'Will my newer Union home handle a hot tub circuit?', a: 'Usually, but we verify it. We run a load calculation on your Union panel first, and if it is near its limit we address that before adding the dedicated 240V GFCI circuit, bonded and to code.' }],
  },
  'walton': {
    intro: 'Walton is a small, growing town at the south edge of the Boone County metro, with rural lots and subdivision backyards that give a hot tub plenty of room. Panels range from older to recent, so we start with a load calculation, then size the GFCI circuit for the run.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes. The rural lots and subdivision backyards both give a spa plenty of room, but the panels range from older to recent, so a 240V hot-tub circuit always starts with a capacity check.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and its metal so it is grounded correctly. The disconnect is set within sight, and the outdoor run uses weather-rated conduit — sized for the distance on Walton’s rural properties and for the deck setups in its newer subdivisions.',
    ],
    commonIntro: 'Across Walton’s newer and rural homes, hot-tub wiring depends on confirming the panel can carry a 240V circuit:',
    localFaqs: [{ q: 'Can you wire a hot tub on a rural Walton property?', a: 'Yes. On Walton’s rural lots we size the dedicated 240V GFCI circuit for the run, bond the tub, set a within-sight disconnect, and use weather-rated conduit, all permitted to code.' }],
  },
  'mount-carmel': {
    intro: 'Mount Carmel homes near I-275 in Union Township have panels that range from decades-old to fairly recent, so adding a hot tub circuit always begins with confirming capacity. After the load calculation, we install the GFCI-protected circuit and bond the spa and surrounding metal to code.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community in Clermont County, on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes. Panels here range from decades-old to fairly recent, so adding a 240V hot-tub circuit always begins with confirming capacity.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and surrounding metal as the code requires. The disconnect goes within sight of the spa, and the outdoor run uses weather-rated conduit, keeping the deck and patio installs common across Mount Carmel safe and code-compliant.',
    ],
    commonIntro: 'Across Mount Carmel’s mid-century and newer homes, hot-tub wiring depends on whether the panel can take a 240V circuit:',
    localFaqs: [{ q: 'How fast can you wire a hot tub in Mount Carmel, OH?', a: 'Mount Carmel is well within our east-side service area in Union Township. We evaluate the panel, confirm capacity for the dedicated 240V GFCI circuit, and schedule the licensed, permitted install promptly.' }],
  },
  'summerside': {
    intro: 'Summerside’s suburban lots in western Clermont County have the backyard space a hot tub needs, but mid-century and newer panels both need a capacity check first. We handle the wiring from the load calculation to the GFCI circuit, bond the nearby metal and set the disconnect within sight.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes and the backyard space a spa needs. Panels of that range need a capacity check before a 240V hot-tub circuit is added.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and nearby metal. The disconnect goes within sight of the spa, and the outdoor portion runs in weather-rated conduit, keeping the patio and deck installs common across Summerside safe through every season.',
    ],
    commonIntro: 'Across Summerside’s suburban homes, hot-tub wiring starts with confirming the panel can carry a 240V circuit:',
    localFaqs: [{ q: 'Do you handle the full hot tub wiring job in Summerside, OH?', a: 'Yes. In Summerside we evaluate the panel, run the dedicated 240V GFCI circuit, bond the tub, and set the within-sight disconnect — all licensed and permitted to code.' }],
  },
  'withamsville': {
    intro: 'Withamsville homes and businesses along the Ohio Pike corridor can take a hot tub once the 240V circuit is sized against the existing panel. We run a load calculation, address any shortfall, then install the GFCI-protected spa circuit and bond the tub and its metal parts.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips. Whether the spa is behind a home or at a property near the corridor, the 240V hot-tub circuit has to be sized against the existing panel first.',
      'We run a load calculation, install the GFCI-protected circuit, and bond the tub and its metal so the spa is grounded correctly. The disconnect is set within sight, and the outdoor run uses weather-rated conduit — the same code-driven approach on Withamsville’s residential streets and at its mixed-use properties.',
    ],
    commonIntro: 'Across Withamsville’s homes and businesses, hot-tub wiring starts with sizing a 240V GFCI circuit to the panel:',
    localFaqs: [{ q: 'Can you wire a hot tub at a Withamsville property with limited panel space?', a: 'Yes. We run a load calculation in Withamsville, and where the panel is short on space we address it before adding the dedicated 240V GFCI circuit, bonded and permitted to code.' }],
  },
  'milford': {
    intro: 'Milford’s old Main Street district and older homes near the Little Miami often carry small original services, so hot tub wiring starts with a hard look at the panel. The low ground near the river raises flood and damp-soil concerns, so GFCI protection and bonding carry extra weight.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes. Those century-old buildings often carry small, original electrical services, so a 240V hot-tub circuit usually starts with a hard look at whether the panel can carry it.',
      'The low ground near the Little Miami adds a flood and damp-soil concern, which makes proper GFCI protection, grounding, and bonding all the more important here. We run the load calculation, install the GFCI-protected circuit, bond the tub and its metal, set the disconnect within sight, and route the outdoor run in weather-rated conduit so the riverside setting stays safe.',
    ],
    commonIntro: 'In Milford’s historic downtown and older homes near the river, hot-tub wiring centers on a small old panel and proper GFCI protection:',
    localFaqs: [{ q: 'Can a historic Milford, OH home handle a hot tub circuit?', a: 'Sometimes the original service is too small. We run a load calculation on your Milford home first, upgrade the panel if needed, then add the dedicated 240V GFCI circuit with bonding, permitted to code.' }],
  },
};
