export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro:
      'An electrical inspection in Villages of Roll Hill is usually one apartment in a multi-unit building on shared service. Each unit’s panel was sized for lighter loads than people run now. A double-tapped breaker or missing ground in one unit often means the same gap next door.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings. In housing built around shared electrical service, each unit’s panel was often sized and protected for the modest loads of an earlier era, so an inspection here usually starts with whether the existing service still matches how the unit is actually used.',
      'Because units sit side by side and share feeders, a problem we document in one apartment — a double-tapped breaker, a missing ground, an outlet near the kitchen sink with no GFCI — often points to the same gap next door. A written inspection report gives an owner or buyer a clear, unit-by-unit record of what meets current code and what should be corrected before it is signed off.',
    ],
    commonIntro:
      'In the multi-unit buildings of Roll Hill, the inspection findings we see most often trace back to service and protection sized for an earlier era now carrying modern apartment loads.',
    localFaqs: [
      {
        q: 'Can you inspect the wiring in an apartment building at Roll Hill before I buy a unit?',
        a: 'Yes. We perform licensed electrical inspections in multi-unit buildings and provide a written report covering the panel, grounding, and GFCI and AFCI protection for the unit you are buying.',
      },
    ],
  },
  'east-westwood': {
    intro:
      'Two-prong receptacles and panels added to over the decades are typical finds in an East Westwood electrical inspection. The early- and mid-1900s homes on the slopes toward the Mill Creek valley also have damp lower levels, so we look closely at grounding and GFCI protection there.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes. Houses of that age were wired to codes long since revised, so an inspection commonly turns up two-prong receptacles, ungrounded circuits, and panels that have been added to over the decades rather than rebuilt.',
      'The hillside grade also matters: basements and lower levels take on moisture, and damp conditions make grounding, bonding, and GFCI protection on those circuits worth a close look. We document what we find — panel condition, wiring type, and where modern protection is missing — in a written report you can use for a sale, a permit, or simply your own peace of mind.',
    ],
    commonIntro:
      'In East Westwood’s early- and mid-1900s homes, the inspection items we flag most often come from wiring installed under older codes.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home in East Westwood?',
        a: 'East Westwood is within our west-side service area. We schedule licensed inspections promptly and provide a written report on the panel, wiring, and grounding.',
      },
    ],
  },
  'western-hills': {
    intro:
      'Knob-and-tube remnants in the oldest houses and mid-century panels past their design life both turn up during an electrical inspection in Western Hills. Around the Plaza and Glenway Avenue, additions were not always permitted. We check kitchen, bath and exterior protection and note which work looks unpermitted.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes. That span means we inspect everything from knob-and-tube remnants in the oldest houses to mid-century panels that are now decades past their design life.',
      'Homes built before grounding and GFCI requirements were standard often have receptacles and panels that no longer meet code, and additions made over the years are not always permitted or properly tied in. Our inspection checks the panel, grounding, and protection on kitchen, bath, and exterior circuits, and the written report notes which work appears permitted and which should be reviewed.',
    ],
    commonIntro:
      'Across Western Hills’ older and mid-century homes, the findings we document most often involve aging panels and circuits wired before modern protection was required.',
    localFaqs: [
      {
        q: 'Can you verify whether past electrical work in my Western Hills home was done to code?',
        a: 'Yes. We inspect the existing wiring and panel near Glenway and note in the written report what meets current code and what looks like unpermitted or substandard work.',
      },
    ],
  },
  'california': {
    intro:
      'Flood exposure drives most electrical inspection work in California, the riverfront neighborhood along Kellogg Avenue near Riverbend. Breakers and receptacles that sat underwater can corrode and fail even when they still seem to work. We check the affected circuits and the service and write up what needs correcting.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River. That riverside position means flooding and high water are recurring concerns, and water reaching outlets, panels, or wiring in a lower level is exactly the kind of damage a post-storm inspection is meant to catch.',
      'After flooding, breakers, receptacles, and panel components that have been submerged can corrode and fail even if they still appear to work, so grounding and GFCI protection deserve close attention here. We inspect the affected circuits and the service, then put the condition and any recommended corrections in a written report you can use for insurance, a sale, or repairs.',
    ],
    commonIntro:
      'Along California’s riverfront homes, the inspection concerns we focus on most are tied to moisture and flood exposure on the electrical system.',
    localFaqs: [
      {
        q: 'My California home took on water near the panel — should I have it inspected?',
        a: 'Yes. Flooding can damage breakers and wiring that still look fine. We provide a licensed inspection of the affected circuits and panel and a written report on what needs correcting.',
      },
    ],
  },
  'carthage': {
    intro:
      'Carthage homes near the Fairgrounds date to the early 1900s, and an electrical inspection there tends to find original service too small for a modern kitchen or new HVAC. Two-prong outlets and patched panels are common along Vine Street. The report spells out what the panel can safely handle.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes. Housing from that era was wired well before today’s grounding, GFCI, and AFCI requirements, so an inspection routinely finds two-prong outlets, ungrounded runs, and panels patched together over the years.',
      'Many of these century-old homes still carry their original service, which can be undersized for a modern kitchen, a new HVAC system, or an added circuit. Before you load more onto that panel, our inspection documents its capacity and condition along with the wiring and grounding, so the written report tells you what the system can safely handle.',
    ],
    commonIntro:
      'In Carthage’s older homes, the inspection items we flag most often are the ungrounded circuits and aging panels typical of early-1900s wiring.',
    localFaqs: [
      {
        q: 'Can my older Carthage home handle a new appliance circuit?',
        a: 'We inspect the panel and existing wiring near Vine Street and note in the written report whether the service has capacity for the new load or needs an upgrade first.',
      },
    ],
  },
  'winton-hills': {
    intro:
      'Multi-unit buildings near Winton Road make up a large share of electrical inspection work in Winton Hills. Heavy shared use wears out older panels and wiring that predate modern grounding. We go unit by unit through the service, panels and kitchen and bath protection, then hand over a written report.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing. In densely built multi-unit buildings, an inspection looks at how each unit’s circuits and protection tie into shared service, since a fault in one unit can reflect the same wear next door.',
      'Older buildings here run on aging panels and wiring that predate modern grounding and GFCI standards, and heavier shared use accelerates the wear. We inspect the service, panels, and protection on kitchen and bath circuits unit by unit and lay it out in a written report an owner or buyer can act on.',
    ],
    commonIntro:
      'In Winton Hills’ homes and multi-unit buildings, the findings we document most often involve aging shared service and missing modern protection.',
    localFaqs: [
      {
        q: 'Do you inspect multi-unit buildings in Winton Hills?',
        a: 'Yes. We perform licensed inspections of multi-unit buildings near Winton Road and provide a written report covering each unit’s panel, grounding, and protection.',
      },
    ],
  },
  'roselawn': {
    intro:
      'Adding central air is a common reason for an electrical inspection in Roselawn. The mid-century homes and apartment buildings along Reading Road carry original panels that were never sized for it. In apartments, shared service ties one unit’s condition to the next, so we check grounding and protection across them.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings. Homes from the mid-1900s are now well past the age where original panels and wiring were sized and protected for modern living, which makes an inspection of capacity and grounding worthwhile before adding load.',
      'The older apartment buildings here see heavier electrical wear, and shared service ties the condition of one unit to the next. We inspect the panel, grounding, and GFCI and AFCI protection — whether on a single-family home or an apartment — and the written report flags what meets current code and what should be corrected.',
    ],
    commonIntro:
      'Across Roselawn’s mid-century homes and apartments, the inspection items we flag most often involve aging panels and circuits that predate modern protection.',
    localFaqs: [
      {
        q: 'Should I have my mid-century Roselawn home inspected before adding central air?',
        a: 'Yes. We inspect the panel and wiring along Reading Road and note in the written report whether the service can carry an added HVAC load safely.',
      },
    ],
  },
  'mount-airy': {
    intro:
      'Damp basements and crawlspaces get special attention in a Mount Airy electrical inspection. The mid-century homes on wooded, hilly streets beside Mount Airy Forest often have undersized service and circuits installed before grounding was standard. We check the main panel and lower-level circuits and put corrections in writing.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets. Homes of that era carry panels and wiring now well past their original design life, so an inspection commonly documents undersized service and circuits installed before grounding was standard.',
      'The hilltop, wooded setting also means damp basements and crawlspaces, where grounding, bonding, and GFCI protection matter more. We inspect those lower-level circuits along with the main panel and put the condition and any recommended corrections in a written report you can use for a sale or a planned upgrade.',
    ],
    commonIntro:
      'Across Mount Airy’s mid-century homes, the findings we see most often are aging panels and circuits wired before modern grounding requirements.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home near Mount Airy Forest?',
        a: 'Mount Airy is within our northwest-side service area. We schedule licensed inspections promptly and provide a written report on the panel, wiring, and grounding.',
      },
    ],
  },
  'hartwell': {
    intro:
      'Hartwell grew as a streetcar suburb, and an electrical inspection on one of its Victorian or early-1900s homes often finds knob-and-tube remnants behind plaster and trim. Panels have been added to over the decades. We check grounding and protection without disturbing period details and note any unpermitted work.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets. Those century-old houses often still carry original wiring — knob-and-tube remnants, ungrounded circuits, and panels added to over the decades — which is exactly what a pre-purchase or post-renovation inspection is meant to surface.',
      'In a historic home, electrical work done over the years is not always permitted or properly tied in, and original wiring can hide behind plaster and trim. Our inspection checks the panel, grounding, and protection without disturbing the period details, and the written report notes what meets current code and what should be reviewed before a sale.',
    ],
    commonIntro:
      'In Hartwell’s Victorian and early-1900s homes, the inspection items we flag most often are the ungrounded circuits and original wiring typical of streetcar-era houses.',
    localFaqs: [
      {
        q: 'Can you inspect the original wiring in a historic Hartwell home before I buy it?',
        a: 'Yes. We perform licensed pre-purchase inspections of Hartwell’s older homes and provide a written report on the panel, wiring type, and grounding.',
      },
    ],
  },
  'kennedy-heights': {
    intro:
      'The large early-1900s homes in Kennedy Heights give an electrical inspection more ground to cover. Original wiring is common, and finished attics and basement workshops added circuits that were not always done to code. We document panel capacity, grounding and outlet protection across the whole house before a sale.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes. The age and size of those houses mean original wiring is common, and a larger home means more circuits and more places for ungrounded runs or an overloaded panel to hide.',
      'Big older homes also tend to accumulate added circuits — extra outlets, a finished attic, a basement workshop — that were not always done to code. Our inspection documents the panel capacity, grounding, and GFCI and AFCI protection across the home, and the written report flags what should be corrected before a sale or before more load is added.',
    ],
    commonIntro:
      'In Kennedy Heights’ historic homes, the findings we document most often involve original wiring and panels stretched by added circuits.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home in Kennedy Heights?',
        a: 'Kennedy Heights is within our east-side service area. We schedule licensed inspections promptly and provide a written report on the panel, wiring, and grounding.',
      },
    ],
  },
  'st-bernard': {
    intro:
      'St. Bernard is its own city around the Ivorydale plant, and an electrical inspection there usually means a dense early-1900s home with two-prong outlets and a patched panel. Permits run through the city’s own channels, and renovations are not always documented, so we note which work appears permitted.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes. That tightly packed, century-old housing was wired well before grounding and GFCI requirements, so an inspection here routinely documents two-prong outlets, ungrounded circuits, and panels patched over the decades.',
      'Because St. Bernard is an independent city, electrical permits and inspections run through its own channels, and renovation work is not always properly documented. Our inspection checks the panel, grounding, and protection and notes in the written report which work appears permitted and code-compliant and which should be reviewed before a sale or sign-off.',
    ],
    commonIntro:
      'In St. Bernard’s dense, early-1900s homes, the inspection items we flag most often are the ungrounded circuits and aging panels typical of century-old wiring.',
    localFaqs: [
      {
        q: 'Can you verify renovation wiring in St. Bernard for a permit sign-off?',
        a: 'Yes. We inspect the work, check the panel and grounding, and provide a written report noting what meets current code in this independent city.',
      },
    ],
  },
  'elmwood-place': {
    intro:
      'Small lots and early-1900s houses define Elmwood Place, a tiny village in the Mill Creek valley, and an electrical inspection there commonly finds ungrounded circuits and original panels. Low ground brings moisture into basements, so grounding and GFCI protection on lower-level circuits get a close look.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes. Housing that old, packed onto small lots, was wired under codes long since revised, so an inspection commonly finds ungrounded circuits and original panels never sized for modern living.',
      'The low valley ground also brings moisture into basements, which makes grounding, bonding, and GFCI protection on lower-level circuits worth a close look. We inspect the panel, the wiring, and those damp-prone circuits and document the condition in a written report you can use for a sale or your own records.',
    ],
    commonIntro:
      'In Elmwood Place’s dense valley homes, the findings we see most often are aging panels and ungrounded circuits, with moisture adding risk in the basement.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home in Elmwood Place?',
        a: 'Elmwood Place is a compact village within our service area in the Mill Creek valley. We schedule licensed inspections promptly and provide a written report.',
      },
    ],
  },
  'delhi-hills': {
    intro:
      'Delhi Hills has mid-century homes on hilly streets above the Ohio River, and an electrical inspection there often comes before adding central air. Panels and wiring are past their original design life. Hillside basements take on moisture, which makes grounding and GFCI protection on those circuits a priority.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River, an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets. Homes of that era carry panels and wiring now past their original design life, so an inspection of service capacity and grounding is worthwhile before adding a major appliance or HVAC.',
      'The hillside grade means basements take on moisture, which makes grounding and GFCI protection on those lower-level circuits a priority. We inspect the panel, wiring, and protection across the home and provide a written report that flags what meets current code and what should be corrected.',
    ],
    commonIntro:
      'Across Delhi Hills’ mid-century homes, the inspection items we flag most often are aging panels and circuits that predate modern grounding requirements.',
    localFaqs: [
      {
        q: 'Should I have my Delhi Hills home inspected before adding central air?',
        a: 'Yes. We inspect the panel and wiring and note in the written report whether the service can safely carry an added HVAC load.',
      },
    ],
  },
  'golf-manor': {
    intro:
      'Modest mid-century homes in Golf Manor often still run on their original small panels, so an electrical inspection there asks whether the service has any room left. The village handles its own permits, and past work is not always documented. We note what appears permitted before a sale.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes. Homes of that size and era often still run on their original modestly sized panels, so an inspection here commonly looks at whether the service has any room left for a modern kitchen, a new appliance, or an added circuit.',
      'Because Golf Manor is its own village, permits and electrical inspections run through its own channels, and past work is not always documented. We inspect the panel capacity, grounding, and GFCI and AFCI protection and note in the written report which work appears permitted and what should be reviewed before a sale.',
    ],
    commonIntro:
      'In Golf Manor’s mid-century homes, the findings we see most often involve modestly sized original panels and circuits that predate modern protection.',
    localFaqs: [
      {
        q: 'Can my modest Golf Manor home handle a new appliance circuit?',
        a: 'We inspect the panel and existing wiring and note in the written report whether the service has capacity or needs an upgrade first.',
      },
    ],
  },
  'fairfax': {
    intro:
      'Fairfax homes along Wooster Pike are early- and mid-1900s builds, and an electrical inspection there routinely turns up two-prong outlets and panels added to over the years. As an independent village, Fairfax runs its own sign-offs. We flag what meets code before a sale or permit close-out.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. Housing of that age was wired before grounding and GFCI requirements were standard, so an inspection routinely turns up two-prong outlets, ungrounded runs, and panels added to over the years.',
      'As an independent village, Fairfax handles its own permits and sign-offs, and renovation work is not always properly documented. Our inspection checks the panel, grounding, and protection on kitchen, bath, and exterior circuits, and the written report flags what meets current code and what should be reviewed before a sale or permit close-out.',
    ],
    commonIntro:
      'In Fairfax’s older homes, the inspection items we flag most often are the ungrounded circuits and aging panels typical of early- and mid-1900s wiring.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home in Fairfax?',
        a: 'Fairfax is within our east-side service area near Mariemont. We schedule licensed inspections promptly and provide a written report on the panel, wiring, and grounding.',
      },
    ],
  },
  'mack': {
    intro:
      'Mack has mid-century and newer homes in Green Township, and an electrical inspection there checks whether the service fits how the house is used today. Older houses carry ungrounded circuits. Newer ones are old enough to need a capacity check before a workshop or appliance circuit goes in.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes. Even the newer homes here are now old enough that panels and circuits deserve a check before more load is added, while the older houses carry the ungrounded circuits typical of earlier wiring.',
      'A pre-purchase inspection in Mack documents whether the service is sized for how the home is used today and whether grounding and GFCI and AFCI protection meet current code. We inspect the panel and circuits across the home and put the condition and any recommended corrections in a written report.',
    ],
    commonIntro:
      'Across Mack’s mid-century and newer homes, the findings we see most often involve panel capacity and protection that should be verified before adding load.',
    localFaqs: [
      {
        q: 'Can my Mack home handle an added circuit for a workshop or appliance?',
        a: 'We inspect the panel and wiring in Green Township and note in the written report whether the service has capacity or needs an upgrade first.',
      },
    ],
  },
  'monfort-heights': {
    intro:
      'Finished basements, garage outlets and added baths are where an electrical inspection in Monfort Heights finds most problems. The mid-century homes in this Green Township suburb have panels sized for an earlier era, and later circuits were not always grounded or done to code. The report lists what to correct.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes. Homes from the mid-1900s are now well into the age where original panels and wiring were sized and protected for an earlier era, so an inspection of capacity and grounding is worthwhile before adding HVAC or a large appliance.',
      'Circuits added to these homes over the decades — finished basements, garage outlets, added baths — were not always done to code or grounded properly. Our inspection documents the panel, grounding, and GFCI and AFCI protection across the home, and the written report flags what should be corrected before a sale or upgrade.',
    ],
    commonIntro:
      'Across Monfort Heights’ mid-century homes, the inspection items we flag most often are aging panels and added circuits that predate modern protection.',
    localFaqs: [
      {
        q: 'Should I have my Monfort Heights home inspected before adding a large appliance?',
        a: 'Yes. We inspect the panel and wiring and note in the written report whether the service can safely carry the added load.',
      },
    ],
  },
  'bridgetown': {
    intro:
      'Bridgetown mixes mid-century and newer homes, so an electrical inspection there might find a panel well past its design life or a newer one that needs a capacity check. Before a sale, we confirm grounding and GFCI and AFCI protection on kitchen, bath and exterior circuits and note unpermitted work.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes. That range means we inspect both older panels well past their design life and newer ones that should still be checked for capacity before more load is added.',
      'A pre-purchase or pre-sale inspection here documents whether the service is sized for current use and whether grounding and GFCI and AFCI protection meet code, especially on kitchen, bath, and exterior circuits. We inspect the panel and wiring across the home and put the findings in a written report you can act on.',
    ],
    commonIntro:
      'Across Bridgetown’s homes, the findings we document most often involve panel capacity and protection that should be verified before a sale or upgrade.',
    localFaqs: [
      {
        q: 'Can you verify past electrical work in my Bridgetown home was done to code?',
        a: 'Yes. We inspect the wiring and panel in Green Township and note in the written report what meets current code and what looks like unpermitted work.',
      },
    ],
  },
  'finneytown': {
    intro:
      'Undersized service is the usual finding when we do an electrical inspection in Finneytown. These mid-century Springfield Township homes were wired before grounding and GFCI protection were required. Before central air or an EV charger goes in, we check what the panel can carry and list what to fix first.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes. Homes of that era carry panels and wiring now past their original design life, so an inspection commonly documents undersized service and circuits installed before grounding and GFCI protection were required.',
      'Before adding central air, an EV charger, or a major appliance, it is worth knowing what the existing service can carry. Our inspection checks the panel capacity, grounding, and protection across the home, and the written report flags what meets current code and what should be corrected first.',
    ],
    commonIntro:
      'Across Finneytown’s mid-century homes, the inspection items we flag most often are aging panels and circuits that predate modern protection requirements.',
    localFaqs: [
      {
        q: 'Should I have my Finneytown home inspected before adding HVAC or an EV charger?',
        a: 'Yes. We inspect the panel and wiring in Springfield Township and note in the written report whether the service can carry the new load safely.',
      },
    ],
  },
  'amberley': {
    intro:
      'Large homes on wooded lots in Amberley Village mean an electrical inspection covers subpanels, outdoor runs and wiring to detached structures, not just the main panel. More circuits give an overloaded subpanel or hidden fault more places to sit. The village runs its own permits, so we note documented work.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets. Larger homes mean larger electrical systems — more circuits, subpanels, and outdoor runs — and more places for an ungrounded circuit, an overloaded subpanel, or a hidden fault to go unnoticed without a thorough inspection.',
      'Big properties on wooded lots also carry significant outdoor and detached-structure wiring, where grounding, bonding, and GFCI protection deserve close attention. As an independent village, Amberley runs its own permits, so we also note which work appears documented. The written report lays out the panel, subpanels, grounding, and protection across the whole system.',
    ],
    commonIntro:
      'In Amberley’s large homes, the findings we see most often involve extensive circuits and subpanels where grounding and protection should be verified.',
    localFaqs: [
      {
        q: 'Do you inspect the subpanels and outdoor wiring on large Amberley homes?',
        a: 'Yes. We inspect the full system, including subpanels and exterior and detached-structure wiring, and provide a written report on grounding and protection throughout.',
      },
    ],
  },
  'arlington-heights': {
    intro:
      'Arlington Heights is a small village in the Mill Creek valley, and an electrical inspection there usually finds older-home wiring: ungrounded circuits, two-prong outlets and panels added to over the years. Low ground puts moisture in basements, so grounding and GFCI protection on those circuits get a careful check.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes. Housing that age was wired under codes long since revised, so an inspection routinely documents ungrounded circuits, two-prong outlets, and panels added to over the years.',
      'The low valley ground brings moisture into basements, which makes grounding, bonding, and GFCI protection on lower-level circuits worth a close look. We inspect the panel and those damp-prone circuits and lay out the condition and any recommended corrections in a written report for a sale or your own records.',
    ],
    commonIntro:
      'In Arlington Heights’ older valley homes, the findings we see most often are aging panels and ungrounded circuits, with moisture adding risk in the basement.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home in Arlington Heights?',
        a: 'Arlington Heights is within our service area in the Mill Creek valley. We schedule licensed inspections promptly and provide a written report.',
      },
    ],
  },
  'north-college-hill': {
    intro:
      'Tightly packed early- and mid-1900s homes fill North College Hill, and an electrical inspection there commonly finds two-prong outlets and aging panels. The city handles its own permits and past work is not always documented. We check kitchen, bath and exterior protection and note what appears permitted.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes. That older, tightly packed housing was wired well before grounding and GFCI requirements, so an inspection commonly finds two-prong outlets, ungrounded runs, and aging panels.',
      'As an independent city, North College Hill handles its own permits and sign-offs, and past electrical work is not always documented. Our inspection checks the panel, grounding, and protection on kitchen, bath, and exterior circuits, and the written report notes which work appears permitted and what should be reviewed before a sale or permit close-out.',
    ],
    commonIntro:
      'In North College Hill’s older homes, the inspection items we flag most often are the ungrounded circuits and aging panels typical of early- and mid-1900s wiring.',
    localFaqs: [
      {
        q: 'Can you verify renovation wiring in North College Hill for a sign-off?',
        a: 'Yes. We inspect the work, panel, and grounding in this independent city and provide a written report noting what meets current code.',
      },
    ],
  },
  'newtown': {
    intro:
      'After heavy rain near the Little Miami River, an electrical inspection in Newtown checks whether water reached outlets, panels or basement wiring. The older homes here sit on low river-bottom ground. Submerged breakers can corrode and fail while still looking fine, so grounding and GFCI protection get close attention.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground. That low ground brings a real risk of flooding in heavy rain, and water reaching outlets, panels, or basement wiring is exactly what a post-storm inspection is meant to catch.',
      'After high water, breakers, receptacles, and panel components that have been submerged can corrode and fail even when they still appear to work, so grounding and GFCI protection deserve close attention. We inspect the affected circuits along with the service and put the condition and any recommended corrections in a written report you can use for insurance or a sale.',
    ],
    commonIntro:
      'In Newtown’s older homes near the Little Miami, the inspection concerns we focus on most are tied to flood and moisture exposure on the electrical system.',
    localFaqs: [
      {
        q: 'My Newtown home flooded near the panel — should I have it inspected?',
        a: 'Yes. Flooding can damage breakers and wiring that still look fine. We provide a licensed inspection of the affected circuits and a written report on what needs correcting.',
      },
    ],
  },
  'turpin-hills': {
    intro:
      'Turpin Hills homes in Anderson Township are mid-century and newer, and an electrical inspection before purchase confirms the service still fits how the house is used. Older homes have circuits installed before grounding was standard. We also check protection on sump pump and lower-level circuits.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. Even newer homes here are now old enough that panels and circuits deserve a check before more load is added, while the older houses carry circuits installed before grounding was standard.',
      'A pre-purchase inspection documents whether the service is sized for current use and whether grounding and GFCI and AFCI protection meet code, including on any sump pump and lower-level circuits. We inspect the panel and wiring across the home and provide a written report you can act on.',
    ],
    commonIntro:
      'Across Turpin Hills’ homes, the findings we see most often involve panel capacity and protection that should be verified before a sale or upgrade.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home in Turpin Hills?',
        a: 'Turpin Hills is within our east-side service area in Anderson Township. We schedule licensed inspections promptly and provide a written report.',
      },
    ],
  },
  'silverton': {
    intro:
      'Silverton is a small city along Montgomery Road, and an electrical inspection there usually covers an early- or mid-1900s home with two-prong outlets and a panel added to over time. The city runs its own permits and sign-offs. We flag undocumented renovation work and missing protection before a sale.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes. Housing of that age was wired before grounding and GFCI requirements were standard, so an inspection routinely turns up two-prong outlets, ungrounded runs, and panels added to over the years.',
      'As an independent city, Silverton handles its own permits and sign-offs, and renovation work is not always properly documented. Our inspection checks the panel, grounding, and protection on kitchen, bath, and exterior circuits, and the written report flags what meets current code and what should be reviewed before a sale.',
    ],
    commonIntro:
      'In Silverton’s older homes, the inspection items we flag most often are the ungrounded circuits and aging panels typical of early- and mid-1900s wiring.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home in Silverton?',
        a: 'Silverton is within our east-side service area along Montgomery Road. We schedule licensed inspections promptly and provide a written report.',
      },
    ],
  },
  'lockland': {
    intro:
      'Lockland grew around the mills, and an electrical inspection on its closely spaced worker housing commonly finds ungrounded circuits and panels patched over the decades. Basements on the low Mill Creek valley ground take on moisture. Grounding and GFCI protection on lower-level circuits get a close look in the report.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing. That tightly packed, century-old housing was wired well before modern codes, so an inspection commonly finds ungrounded circuits, two-prong outlets, and panels patched over the decades.',
      'The low valley ground also brings moisture into basements, which makes grounding, bonding, and GFCI protection on lower-level circuits worth a close look. We inspect the panel and those damp-prone circuits and document the condition in a written report you can use for a sale or your own records.',
    ],
    commonIntro:
      'In Lockland’s older valley homes, the findings we see most often are aging panels and ungrounded circuits, with moisture adding risk in the basement.',
    localFaqs: [
      {
        q: 'How soon can you inspect a home in Lockland?',
        a: 'Lockland is within our service area in the Mill Creek valley. We schedule licensed inspections promptly and provide a written report.',
      },
    ],
  },
  'groesbeck': {
    intro:
      'Mid-century homes in Groesbeck are past their panels’ original design life, so an electrical inspection there often comes before central air or a large appliance. In this Colerain Township community, later basement, garage and bath circuits were not always grounded or done to code, and we flag them.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. Homes of that era carry panels and wiring now past their original design life, so an inspection of capacity and grounding is worthwhile before adding HVAC or a large appliance.',
      'Circuits added to these homes over the years — finished basements, garage outlets, added baths — were not always grounded or done to code. Our inspection documents the panel, grounding, and GFCI and AFCI protection across the home, and the written report flags what should be corrected before a sale or upgrade.',
    ],
    commonIntro:
      'Across Groesbeck’s mid-century homes, the inspection items we flag most often are aging panels and added circuits that predate modern protection.',
    localFaqs: [
      {
        q: 'Should I have my Groesbeck home inspected before adding central air?',
        a: 'Yes. We inspect the panel and wiring in Colerain Township and note in the written report whether the service can carry an added HVAC load safely.',
      },
    ],
  },
  'mount-healthy': {
    intro:
      'Mount Healthy runs from an old town center to mid-century streets, so an electrical inspection there could find ungrounded original wiring or a panel past its design life. As an independent city, it handles its own permits. We note which work appears permitted before a sale or sign-off.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes. That span means we inspect everything from original wiring in the oldest houses — ungrounded circuits and two-prong outlets — to mid-century panels now past their design life.',
      'As an independent city, Mount Healthy handles its own permits and sign-offs, and past electrical work is not always documented. Our inspection checks the panel capacity, grounding, and GFCI and AFCI protection across the home, and the written report notes which work appears permitted and what should be reviewed before a sale or permit close-out.',
    ],
    commonIntro:
      'In Mount Healthy’s older homes, the inspection items we flag most often are the ungrounded circuits and aging panels typical of early-1900s and mid-century wiring.',
    localFaqs: [
      {
        q: 'Can you verify renovation wiring in Mount Healthy for a sign-off?',
        a: 'Yes. We inspect the work, panel, and grounding in this independent city and provide a written report noting what meets current code.',
      },
    ],
  },
};
