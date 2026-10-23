export const part2: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'madeira': {
    intro:
      'Before a heat pump or EV charger goes into a Madeira home, an electrical inspection tells you whether the panel can carry it. Many of these mid-century houses started with 60- or 100-amp service and a fuse box. We also flag ungrounded circuits and missing GFCI and AFCI protection.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city built largely of mid-century single-family homes on quiet, tree-lined streets. Houses from the mid-1900s usually started life with 60- or 100-amp service and a fuse box or early breaker panel, so before you add a heat pump, an EV charger, or a kitchen full of modern appliances, it is worth confirming the panel and branch circuits can actually carry the load. That capacity check is one of the more common reasons people in Madeira book an inspection.',
      'The other driver here is simple age. A house that has been standing since the 1950s or 60s may still run on original wiring with two-prong outlets and no grounding in parts of the home, and renovations done over the decades are not always permitted or up to current code. A licensed inspection documents what is there, flags ungrounded circuits or missing GFCI and AFCI protection, and the written report becomes a record for a sale or a permit file.',
    ],
    commonIntro:
      'Across Madeira’s mid-century homes, the inspection findings we see most often trace back to original panels and wiring that predate today’s appliance and code demands:',
    localFaqs: [
      {
        q: 'I want to add a heat pump to my Madeira home — do I need an inspection first?',
        a: 'It is a good idea. A licensed inspection in Madeira confirms whether your panel and service have the capacity for a heat pump and gives you a written report listing any upgrades the addition will require before the work goes in.',
      },
    ],
  },
  'wyoming': {
    intro:
      'Grand Victorian and early-1900s homes make an electrical inspection in Wyoming a matter of sorting old from new. Most have been through rounds of additions, knob-and-tube replacement and panel swaps. We check grounding and bonding, over-fused circuits and outlet protection, then give you a written baseline before closing.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets. Houses that old were wired generations before modern codes, and many have been through several rounds of additions, knob-and-tube replacement, and panel swaps over the years. A pre-purchase or pre-sale inspection sorts out what is original, what has been updated, and what still needs attention.',
      'Because these are large homes with finished rooms worth protecting, the stakes of unseen wiring problems are higher. A licensed inspection checks grounding and bonding, looks for over-fused circuits and ungrounded outlets, and verifies that GFCI and AFCI protection is in place where code now calls for it. The written report gives an owner a documented baseline and gives a buyer the facts before closing on a century-old Wyoming house.',
    ],
    commonIntro:
      'In Wyoming’s grand, century-old homes, the inspection issues we find most often come from wiring installed long before current codes and patched across decades of additions:',
    localFaqs: [
      {
        q: 'We’re buying a historic home in Wyoming — what does an inspection cover?',
        a: 'A licensed inspection of a Wyoming home reviews the panel, service capacity, grounding, and outlet protection, notes any outdated or unpermitted work, and delivers a written report you can use during the purchase.',
      },
    ],
  },
  'mariemont': {
    intro:
      'Nearly a hundred years of wear shows up in an electrical inspection in Mariemont. The Tudor Revival homes in this 1920s garden village often keep early wiring, undersized service and ungrounded outlets. It is the sensible first step before a renovation, and the written report flags what needs attention first.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned garden community laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side. Homes built in the 1920s and 30s carry close to a hundred years of electrical wear, and many still have stretches of early wiring, undersized service, and outlets with no ground. An inspection lays out what is original and what has been updated.',
      'Because Mariemont’s historic character matters to owners here, an inspection is also the sensible first step before any renovation or addition. A licensed review verifies whether past work was permitted and to code, checks grounding and GFCI and AFCI protection, and produces a written report that respects the home while flagging what needs attention before you open up walls or add load.',
    ],
    commonIntro:
      'In Mariemont’s 1920s-era homes, the inspection findings we see most often reflect wiring and panels that date to the village’s earliest years:',
    localFaqs: [
      {
        q: 'Do you inspect the historic Tudor homes in Mariemont?',
        a: 'Yes. We perform licensed electrical inspections throughout Mariemont, documenting the panel, grounding, and circuit protection in these 1920s-era homes and delivering a written report you can keep on file.',
      },
    ],
  },
  'cheviot': {
    intro:
      'Brick two-families along Harrison Avenue are typical of electrical inspection work in Cheviot. These early-1900s homes were wired for far less than a modern household draws, often with shared or subdivided setups. We find original ungrounded wiring, unchanged fuse boxes and unpermitted additions, and list them in writing.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue. Houses that age were wired for far less than a modern household draws, and the brick two-families often have shared or subdivided electrical setups that are worth sorting out with a documented inspection before a purchase or a rental turnover.',
      'In tightly packed early-1900s housing, problems in one home are common across the block: original ungrounded wiring, fuse boxes never updated to breakers, and additions wired without a permit. A licensed inspection identifies over-fused or ungrounded circuits, checks grounding and bonding, and the written report gives a Cheviot owner or buyer a clear list of what to address.',
    ],
    commonIntro:
      'In Cheviot’s dense, early-1900s homes and two-families, the inspection issues we find most often come from original wiring carrying loads it was never sized for:',
    localFaqs: [
      {
        q: 'Should I get an inspection on a Cheviot two-family before buying?',
        a: 'Yes. A licensed inspection of a Cheviot two-family confirms how the electrical is divided, checks each panel and the grounding, and gives you a written report on any ungrounded or over-fused circuits before you close.',
      },
    ],
  },
  'covedale': {
    intro:
      'Covedale homes run from the early 1900s through mid-century, and an electrical inspection there usually starts with capacity. Many were built before central air, electric ranges and EV chargers. In the older houses we also find original wiring and two-prong outlets, and the written report covers both.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes. That range means a lot of variety in panels and service sizes, and many of these homes were built before central air, electric ranges, and EV chargers were common, so a capacity check before adding any of them is one of the main reasons people here call for an inspection.',
      'For the older homes in Covedale, age is the bigger concern: original wiring, two-prong outlets, and panels that have not been touched in decades. A licensed inspection reviews the service and panel, checks grounding and GFCI and AFCI coverage, and notes any renovation work that may not have been permitted. The written report gives owners a clear baseline whether they are upgrading or selling.',
    ],
    commonIntro:
      'Across Covedale’s older and mid-century homes, the inspection findings we see most often involve panels and wiring sized for an earlier era of appliances:',
    localFaqs: [
      {
        q: 'Can you check whether my Covedale panel can handle a new electric range?',
        a: 'Yes. A licensed inspection in Covedale measures your existing service and panel capacity, confirms whether it supports a new electric range or other large appliance, and gives you a written report listing anything that needs upgrading first.',
      },
    ],
  },
  'covington': {
    intro:
      'Covington’s MainStrasse Village and Licking Riverside rowhouses were wired long after they were built, often more than once, so an electrical inspection sorts out original and retrofitted circuits. Homes near the Ohio and Licking Rivers that have taken on water can also have corroded panels and damaged grounding.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes. Homes that old were wired long after they were built and often more than once, so a pre-purchase inspection in these districts sorts out a tangle of original, retrofitted, and sometimes unpermitted wiring before money changes hands.',
      'The riverfront setting near the Ohio and Licking Rivers adds a second reason to look closely: homes that have taken on water over the years can have corroded panels, damaged grounding, and circuits that need verification after a flood. A licensed inspection checks the service, grounding, and GFCI and AFCI protection and produces a written report that holds up for a sale, a renovation permit, or a post-storm review.',
    ],
    commonIntro:
      'In Covington’s historic riverfront homes, the inspection issues we find most often come from layered old wiring and the effects of decades near the river:',
    localFaqs: [
      {
        q: 'Do you inspect the historic homes in MainStrasse Village?',
        a: 'Yes. We perform licensed electrical inspections throughout Covington, including MainStrasse Village and Licking Riverside, documenting the panel, wiring, and grounding in a written report for these 19th-century homes.',
      },
    ],
  },
  'newport': {
    intro:
      'Newport’s East Row is one of the largest Victorian historic districts in Kentucky, and an electrical inspection there is how buyers learn what they are getting. Many of these 19th-century homes run on original or early systems. We flag ungrounded outlets, over-fused circuits and unpermitted past work in writing.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront. The hundreds of 19th-century homes in the East Row were wired well after they were built, and many still run on original or early systems, so a pre-purchase inspection is the standard way to learn what you are actually buying.',
      'These Victorian homes are valued for their original detail, which makes hidden electrical problems both more likely and more costly. A licensed inspection reviews service capacity, grounding and bonding, and GFCI and AFCI protection, and flags ungrounded outlets, over-fused circuits, and any unpermitted past work. The written report gives an East Row owner or buyer a documented picture before a sale or renovation.',
    ],
    commonIntro:
      'In Newport’s Victorian East Row homes and riverfront streets, the inspection findings we see most often reflect old wiring layered into century-old houses:',
    localFaqs: [
      {
        q: 'We’re buying in Newport’s East Row — what does an electrical inspection include?',
        a: 'A licensed inspection of an East Row home reviews the panel and service, grounding, and outlet protection, notes any outdated or unpermitted wiring, and delivers a written report you can use during the purchase.',
      },
    ],
  },
  'bellevue': {
    intro:
      'Late-1800s homes off Fairfield Avenue carry more than a century of patched wiring, which is why an electrical inspection in Bellevue comes before most purchases and remodels. High water is part of life on this stretch of river, so after flooding we also check for corroded panels and grounding.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes. Homes that age carry wiring installed and patched across more than a century, often with original ungrounded circuits and panels that were never modernized, so a documented inspection is the clearest way to understand a home before buying or remodeling it.',
      'Bellevue’s riverfront location means high water is part of the picture, and homes that have seen flooding can have corroded panels and compromised grounding that need verification afterward. A licensed inspection checks the service, grounding, and GFCI and AFCI protection and produces a written report suited to a pre-purchase review, a permit file, or a post-storm assessment.',
    ],
    commonIntro:
      'In Bellevue’s historic riverfront homes, the inspection issues we find most often come from century-old wiring and the effects of life close to the river:',
    localFaqs: [
      {
        q: 'How quickly can you inspect a home in Bellevue?',
        a: 'Bellevue is a core part of our Northern Kentucky service area along the river. We schedule licensed inspections promptly and deliver a written report on the panel, wiring, and grounding of these late-1800s homes.',
      },
    ],
  },
  'fort-thomas': {
    intro:
      'Capacity is usually the question behind an electrical inspection in Fort Thomas. The stately early-1900s homes above the river often mix original wiring with decades of additions, and owners want central air or a finished basement. We confirm the service can carry it and check earlier work was permitted.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river. Large homes from that era often still carry original wiring alongside decades of additions, and the size of the houses means a fault can sit hidden in a finished room for years. A pre-purchase or pre-renovation inspection brings that to light.',
      'For owners who want to add central air, a finished basement, or modern appliances, the question is usually capacity. A licensed inspection confirms whether the existing service and panel can carry the new load, checks grounding and GFCI and AFCI protection, and verifies that earlier work was permitted. The written report gives a Fort Thomas homeowner a documented basis for the next project or a sale.',
    ],
    commonIntro:
      'In Fort Thomas’ stately early-1900s homes, the inspection findings we see most often involve original wiring and panels carrying more than they were designed for:',
    localFaqs: [
      {
        q: 'Can you confirm my Fort Thomas home can handle a finished basement?',
        a: 'Yes. A licensed inspection in Fort Thomas checks your service and panel capacity, reviews grounding and circuit protection, and gives you a written report on what the electrical needs before a basement build-out.',
      },
    ],
  },
  'florence': {
    intro:
      'Florence has mid-century neighborhoods and newer subdivisions around the mall, and an electrical inspection covers both. Older homes need their original panels, grounding and outlets reviewed before a sale or an EV charger. In newer homes, breaker condition and AFCI coverage vary by build year, so we document those too.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area. The mid-century homes are now old enough that original panels, grounding, and outlets are worth a documented review, especially before a purchase or before adding central air or an EV charger.',
      'Even the newer subdivision homes here have reached an age where a panel inspection makes sense, particularly when buying or selling, since AFCI requirements and breaker condition vary by build year. A licensed inspection checks service capacity, grounding, and GFCI and AFCI coverage across either type of home, and the written report gives a Florence owner a clear list of anything that needs attention.',
    ],
    commonIntro:
      'Across Florence’s mid-century and newer homes, the inspection findings we see most often range from aging panels to capacity limits for modern loads:',
    localFaqs: [
      {
        q: 'How fast can you schedule an inspection in Florence?',
        a: 'Florence is a key part of our Boone County service area. We schedule licensed electrical inspections promptly and deliver a written report covering the panel, grounding, and circuit protection.',
      },
    ],
  },
  'erlanger': {
    intro:
      'Original 100-amp service and ungrounded outlets are common finds in an Erlanger electrical inspection. The mid-century homes near the airport are reaching the end of their panels’ service life, and owners want to add heat pumps or EV chargers. We confirm what era the wiring really belongs to.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes. Homes from the mid-1900s are at the age where original 100-amp service, aging panels, and ungrounded outlets are common, so a documented inspection is a sensible step before a sale or before adding modern loads like a heat pump or EV charger.',
      'Because Erlanger has both older and newer housing, an inspection here often comes down to confirming what era a home’s electrical actually belongs to. A licensed review checks the service and panel, grounding and bonding, and GFCI and AFCI protection, and flags any renovation work that may not have been permitted. The written report gives an owner or buyer a clear baseline.',
    ],
    commonIntro:
      'Across Erlanger’s mid-century homes, the inspection issues we find most often trace back to original panels and wiring nearing the end of their service life:',
    localFaqs: [
      {
        q: 'Do I need an inspection before adding an EV charger in Erlanger?',
        a: 'It is worth it. A licensed inspection in Erlanger confirms whether your panel and service can support an EV charger and gives you a written report listing any upgrades needed before the circuit goes in.',
      },
    ],
  },
  'mason': {
    intro:
      'Finished basements, pools and EV chargers drive most requests for an electrical inspection in Mason. In the 1990s-and-later subdivisions we confirm that work was wired and permitted correctly and the panel can take new load. Homes in the older town center get a closer look at grounding and outlet protection.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati, near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town center. In newer homes the most common inspection reasons are forward-looking: verifying that a finished basement, pool, or EV charger was wired and permitted correctly, or confirming the panel can carry a new large appliance.',
      'The older town center is a different story, with homes old enough to warrant a closer look at the panel, grounding, and outlet protection before a purchase. Across both, a licensed inspection reviews service capacity, GFCI and AFCI coverage, and whether prior work matches permits, and the written report gives a Mason owner documentation for a sale or a permit file.',
    ],
    commonIntro:
      'Across Mason’s newer subdivisions and older town center, the inspection needs we see most often center on verifying renovation work and confirming capacity for added loads:',
    localFaqs: [
      {
        q: 'Can you verify the electrical on a finished basement in my Mason home?',
        a: 'Yes. A licensed inspection in Mason reviews whether a finished basement was wired to code and properly protected, and gives you a written report you can keep for resale or a permit record.',
      },
    ],
  },
  'west-chester': {
    intro:
      'Much of West Chester went up from the 1990s onward, so an electrical inspection there often verifies finished basements and additions were permitted and wired to code. Buyers want breakers and AFCI coverage confirmed, and owners adding a hot tub or EV charger want to know the panel has room.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor. Homes from that era are now old enough that buyers and sellers want the panel, breakers, and AFCI coverage confirmed, and a capacity check is common before adding a hot tub, EV charger, or expanded HVAC.',
      'Because so much of West Chester is newer construction, inspections here often focus on verifying that finished basements, additions, and other improvements were permitted and wired to code. A licensed inspection reviews service capacity, grounding, and GFCI and AFCI protection, and the written report gives a homeowner documentation for a sale or a permit file across the township.',
    ],
    commonIntro:
      'Across West Chester’s newer subdivisions, the inspection needs we see most often involve verifying past renovation work and confirming capacity for new loads:',
    localFaqs: [
      {
        q: 'Should I get an inspection before adding a hot tub in West Chester?',
        a: 'Yes. A licensed inspection in West Chester confirms whether your panel and service can support a hot tub’s circuit and GFCI protection and gives you a written report on any upgrades required first.',
      },
    ],
  },
  'pendleton': {
    intro:
      'Converted lofts and restored Italianate buildings fill Pendleton, and an electrical inspection there untangles original and retrofitted wiring from the mid-1800s on. Shared services and stacked units make it hard to read without a documented check. We verify that conversion work was permitted and write up the panel and grounding.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condos. Those mid-1800s buildings run on a mix of original and retrofitted wiring, and in a converted or subdivided structure the electrical can be hard to read without a documented inspection — exactly what a buyer or owner needs before committing.',
      'In tightly built historic blocks, shared services and stacked units mean one building’s wiring problems can be involved and layered. A licensed inspection reviews the panel and service, grounding and bonding, and GFCI and AFCI protection, and verifies whether past conversion work was permitted. The written report gives a Pendleton owner or buyer a clear record for a sale or a renovation.',
    ],
    commonIntro:
      'In Pendleton’s 19th-century buildings and converted lofts, the inspection findings we see most often come from old wiring layered into restored and subdivided structures:',
    localFaqs: [
      {
        q: 'Do you inspect converted lofts in Pendleton?',
        a: 'Yes. We perform licensed electrical inspections on Pendleton’s converted lofts and historic buildings, documenting the panel, wiring, and grounding in a written report for a purchase or renovation.',
      },
    ],
  },
  'queensgate': {
    intro:
      'Three-phase service and subpanels make an electrical inspection in Queensgate a bigger job than a house. This is mostly warehouses, offices and light industry near the rail yards and Mill Creek, and some buildings have a flooding history. We check the service, panels, grounding and past work against permits.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown, near the rail yards and the Mill Creek, with warehouses, offices, and light-industrial buildings. Electrical here tends to be larger and more involved than a typical home, with three-phase service and subpanels, so a documented inspection is the standard way to understand a building’s capacity and condition before a purchase or a new tenant build-out.',
      'The low ground near the Mill Creek means some of these older industrial buildings have a flooding history, which can affect panels, grounding, and conduit. A licensed inspection reviews the service, panels, grounding and bonding, and circuit protection, and verifies past work against permits. The written report gives a Queensgate owner or tenant a clear basis for a transaction or an improvement project.',
    ],
    commonIntro:
      'In Queensgate’s commercial and industrial buildings, the inspection findings we see most often involve aging service equipment and the effects of low, flood-prone ground:',
    localFaqs: [
      {
        q: 'Do you inspect commercial buildings in Queensgate?',
        a: 'Yes. Queensgate is mostly commercial and industrial, and we perform licensed electrical inspections of the service, panels, and grounding in those buildings, delivering a written report for a purchase or a tenant build-out.',
      },
    ],
  },
  'cuf': {
    intro:
      'In CUF (Clifton Heights, University Heights & Fairview), an electrical inspection usually means a 19th- or early-1900s house cut into student rentals. Old wiring there feeds more people than it was built for. Ungrounded outlets, over-fused circuits and unpermitted conversion work are the usual findings.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights, and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals. In subdivided rental houses, the electrical is often a patchwork of original wiring and added circuits feeding more occupants than the system was built for, so a documented inspection is the clearest way to assess a property before buying or leasing it.',
      'Heavy use on old wiring is the recurring theme here: aging galvanized-era panels, ungrounded outlets, and over-fused circuits in houses chopped into units. A licensed inspection reviews each panel and the service, checks grounding and GFCI and AFCI protection, and notes any unpermitted conversion work. The written report gives a CUF owner or buyer a clear list of what to address.',
    ],
    commonIntro:
      'In CUF’s dense, older student-rental housing near UC, the inspection issues we find most often come from old wiring carrying far more load than it was sized for:',
    localFaqs: [
      {
        q: 'Should I inspect a student rental in Clifton Heights before buying?',
        a: 'Yes. A licensed inspection of a CUF rental in Clifton Heights, University Heights, or Fairview reviews the panel, grounding, and circuit protection in these subdivided older homes and gives you a written report before you close.',
      },
    ],
  },
  'camp-washington': {
    intro:
      'Old worker housing in Camp Washington was wired modestly and long ago, so an electrical inspection often finds original panels and ungrounded outlets. The Mill Creek valley floor has a flooding history too. After high water we check basements and lower levels for corroded panels and damaged grounding.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories. The older worker homes here were wired modestly and decades ago, often with original panels and ungrounded outlets, so a documented inspection is a sound first step before a purchase, a rehab, or a change of use.',
      'The low valley ground means flooding is part of Camp Washington’s history, and water exposure can corrode panels and compromise grounding in basements and lower levels. A licensed inspection reviews the service, grounding, and GFCI and AFCI protection, and verifies any renovation work against permits. The written report gives an owner or buyer a clear baseline, including a post-storm check after high water.',
    ],
    commonIntro:
      'In Camp Washington’s older homes and buildings down in the valley, the inspection findings we see most often involve aging wiring and the effects of low, flood-prone ground:',
    localFaqs: [
      {
        q: 'Can you check a Camp Washington home’s electrical after flooding?',
        a: 'Yes. A licensed inspection in Camp Washington reviews the panel, grounding, and circuits for water damage after high water in the Mill Creek valley and gives you a written report on what needs attention.',
      },
    ],
  },
  'south-fairmount': {
    intro:
      'Years of Lick Run valley flooding are the main reason for an electrical inspection in South Fairmount. Water exposure corrodes panels and damages grounding, and the older homes along Queen City Avenue also carry original wiring and ungrounded outlets. We note any unpermitted work and give you a written record.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding. That flooding history is a direct reason to inspect: water exposure over the years can corrode panels and damage grounding, so a documented review of a home’s electrical is worthwhile before buying or after a storm.',
      'The neighborhood’s older housing adds the usual age-related concerns, with original wiring, ungrounded outlets, and panels that were never updated. A licensed inspection reviews the service and panel, grounding and bonding, and GFCI and AFCI protection, and notes any unpermitted work. The written report gives a South Fairmount owner or buyer a clear record for a sale or a renovation.',
    ],
    commonIntro:
      'In South Fairmount’s older valley homes, the inspection findings we see most often come from aging wiring and a long history of water in the Lick Run valley:',
    localFaqs: [
      {
        q: 'How fast can you inspect a home in South Fairmount?',
        a: 'South Fairmount is well within our west-side service area along Queen City Avenue. We schedule licensed inspections promptly and deliver a written report on the panel, grounding, and circuit protection.',
      },
    ],
  },
  'east-end': {
    intro:
      'River cottages along Eastern Avenue make up most East End electrical inspection work, with newer condos mixed in. The cottages carry decades-old wiring, and homes this close to the Ohio can flood. After high water we look for corroded panels and damaged grounding before you rely on the system.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue, below Columbia Parkway, with historic river cottages and newer condos squeezed between the hillside and the Ohio River. The older cottages carry decades-old wiring, and in homes this close to the river a documented inspection sorts out what is original and what has been updated before a purchase.',
      'The low position right on the river means high water is a real risk, and homes that have flooded can have corroded panels and damaged grounding that need verifying afterward. A licensed inspection reviews the service, grounding, and GFCI and AFCI protection and produces a written report suited to a pre-purchase review or a post-storm check along Eastern Avenue.',
    ],
    commonIntro:
      'Along the East End’s riverfront homes, the inspection findings we see most often involve aging wiring and the effects of high water close to the river:',
    localFaqs: [
      {
        q: 'Can you inspect my East End home’s electrical after the river floods?',
        a: 'Yes. A licensed inspection of an East End home along Eastern Avenue checks the panel, grounding, and circuits for water damage after high water and gives you a written report on what needs attention.',
      },
    ],
  },
  'north-fairmount': {
    intro:
      'Two-prong outlets and early panels are standard finds during an electrical inspection in North Fairmount. The hillside homes above the Mill Creek valley date to the early 1900s, wired generations before modern codes. We review the service, grounding and outlet protection, and flag any renovation that was never permitted.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes. Houses that age were wired generations before modern codes, so original ungrounded circuits, early panels, and two-prong outlets are common — all worth documenting with an inspection before a purchase or a renovation.',
      'A licensed inspection in North Fairmount reviews the service and panel, grounding and bonding, and GFCI and AFCI protection, and flags any renovation work that may not have been permitted. The written report gives an owner or buyer of one of these early-1900s hillside homes a clear baseline and a list of anything that needs attention.',
    ],
    commonIntro:
      'In North Fairmount’s older hillside homes, the inspection findings we see most often come from original wiring and panels that predate today’s codes:',
    localFaqs: [
      {
        q: 'How fast can you inspect a home in North Fairmount?',
        a: 'North Fairmount is within our west-side service area. We schedule licensed inspections promptly and deliver a written report on the panel, grounding, and circuit protection of these early-1900s homes.',
      },
    ],
  },
  'evanston': {
    intro:
      'Homes near Xavier that have been turned into rentals are a big share of electrical inspection work in Evanston. Added circuits and subdivided panels sit on top of early-1900s wiring. We flag ungrounded outlets, over-fused circuits and unpermitted conversion work before a purchase or lease turnover.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing. The early-1900s homes carry aging wiring, and the ones converted to rentals near campus often have added circuits and subdivided panels that benefit from a documented inspection before a purchase or a lease turnover.',
      'A licensed inspection in Evanston reviews the service and panel, grounding and bonding, and GFCI and AFCI protection, and flags ungrounded outlets, over-fused circuits, or unpermitted conversion work. The written report gives an owner or buyer of one of these older homes or rental buildings near Xavier a clear record of what is there and what needs attention.',
    ],
    commonIntro:
      'In Evanston’s early-1900s homes near Xavier, the inspection findings we see most often involve aging wiring and added circuits in converted rentals:',
    localFaqs: [
      {
        q: 'Should I inspect a rental property in Evanston before buying?',
        a: 'Yes. A licensed inspection of an Evanston home or rental near Xavier reviews the panel, grounding, and circuit protection and gives you a written report on any ungrounded or over-fused circuits before you close.',
      },
    ],
  },
  'south-cumminsville': {
    intro:
      'Older homes among the industrial corridors make up South Cumminsville, and an electrical inspection there deals with decades-old wiring and low valley ground. Original panels and ungrounded outlets are common. After high water in the Mill Creek valley, we check for corroded panels and compromised grounding too.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors. The older housing here runs on decades-old wiring with original panels and ungrounded outlets, so a documented inspection is a sensible first step before a purchase or a renovation.',
      'The low valley ground means flooding is part of the area’s history, and water exposure can corrode panels and compromise grounding. A licensed inspection reviews the service, grounding, and GFCI and AFCI protection, and verifies any renovation work against permits. The written report gives a South Cumminsville owner or buyer a clear baseline, including a post-storm check after high water.',
    ],
    commonIntro:
      'In South Cumminsville’s older valley homes, the inspection findings we see most often come from aging wiring and the effects of low, flood-prone ground:',
    localFaqs: [
      {
        q: 'How fast can you inspect a home in South Cumminsville?',
        a: 'South Cumminsville is within our service area in the Mill Creek valley. We schedule licensed inspections promptly and deliver a written report on the panel, grounding, and circuit protection.',
      },
    ],
  },
  'english-woods': {
    intro:
      'Recent redevelopment means an electrical inspection in English Woods often checks whether new work was permitted and done to code. The older hilltop homes above the Mill Creek valley still carry original panels and ungrounded outlets. You get a written list of what needs attention before a sale.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years. The older homes here run on aging wiring with original panels and ungrounded outlets, and with redevelopment ongoing it is worth verifying whether recent work was permitted and to code — both reasons to book a documented inspection.',
      'A licensed inspection in English Woods reviews the service and panel, grounding and bonding, and GFCI and AFCI protection, and flags any renovation work that does not match permits. The written report gives an owner or buyer of one of these hilltop homes a clear baseline and a list of anything that needs attention before a sale or further work.',
    ],
    commonIntro:
      'In English Woods’ older hilltop homes, the inspection findings we see most often involve aging wiring and verifying recent redevelopment work:',
    localFaqs: [
      {
        q: 'Can you verify renovation work on an English Woods home?',
        a: 'Yes. A licensed inspection in English Woods reviews whether recent work was wired to code and properly permitted and gives you a written report you can keep for resale or a permit record.',
      },
    ],
  },
  'north-avondale': {
    intro:
      'Big century-old houses near Rockdale Avenue can hide a fault for years, which is the case for an electrical inspection in North Avondale. Original wiring sits alongside layers of additions. We review service capacity and grounding and confirm earlier work was permitted before a sale or project.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue. Big, century-old houses like these often still carry original wiring alongside layers of additions, and a hidden fault can sit unseen in a finished room for years, so a pre-purchase or pre-renovation inspection is the sensible way to learn what is there.',
      'Because these homes are large and worth protecting, the stakes of unseen wiring problems are higher. A licensed inspection reviews service capacity, grounding and bonding, and GFCI and AFCI protection, and verifies whether earlier work was permitted. The written report gives a North Avondale owner or buyer a documented baseline before a sale or a major project.',
    ],
    commonIntro:
      'In North Avondale’s grand early-1900s homes, the inspection findings we see most often involve original wiring and panels carrying more than they were designed for:',
    localFaqs: [
      {
        q: 'We’re buying a large home in North Avondale — what does an inspection cover?',
        a: 'A licensed inspection of a North Avondale home reviews the panel, service capacity, grounding, and circuit protection, notes any outdated or unpermitted work, and delivers a written report you can use during the purchase.',
      },
    ],
  },
  'millvale': {
    intro:
      'Millvale is a compact, mostly residential pocket in the Mill Creek valley, and an electrical inspection there covers decades-old wiring and flood risk. Original panels and ungrounded outlets are common. Low ground means water can reach lower levels, so we also check for corroded panels after high water.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community. The older housing here runs on decades-old wiring with original panels and ungrounded outlets, so a documented inspection is a sound first step before a purchase or a renovation.',
      'The low-lying valley ground means flooding is part of the picture, and water exposure can corrode panels and compromise grounding in lower levels. A licensed inspection reviews the service, grounding, and GFCI and AFCI protection, and verifies any renovation work against permits. The written report gives a Millvale owner or buyer a clear baseline, including a post-storm check after high water.',
    ],
    commonIntro:
      'In Millvale’s valley homes, the inspection findings we see most often come from aging wiring and the effects of low, flood-prone ground:',
    localFaqs: [
      {
        q: 'How fast can you inspect a home in Millvale?',
        a: 'Millvale is within our service area in the Mill Creek valley. We schedule licensed inspections promptly and deliver a written report on the panel, grounding, and circuit protection.',
      },
    ],
  },
  'paddock-hills': {
    intro:
      'Central air, an EV charger or a new kitchen is usually what prompts an electrical inspection in Paddock Hills. The early- and mid-1900s homes near Paddock Road often have original panels and service sized for an earlier era. We confirm capacity and flag ungrounded outlets in a written report.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes. Homes of that era commonly have original panels, ungrounded outlets, and service sized for an earlier age of appliances, so a capacity check is one of the more common reasons people here book an inspection before adding central air, an EV charger, or a modern kitchen.',
      'Age is the other concern, with early- and mid-1900s wiring that may never have been updated. A licensed inspection reviews the service and panel, grounding and bonding, and GFCI and AFCI protection, and notes any renovation work that does not match permits. The written report gives a Paddock Hills owner or buyer a clear baseline for a sale or an upgrade.',
    ],
    commonIntro:
      'In Paddock Hills’ early- and mid-1900s homes, the inspection findings we see most often involve aging panels and service sized for an earlier era of appliances:',
    localFaqs: [
      {
        q: 'Can you check whether my Paddock Hills panel can handle central air?',
        a: 'Yes. A licensed inspection in Paddock Hills measures your service and panel capacity, confirms whether it supports central air or another large appliance, and gives you a written report listing anything that needs upgrading first.',
      },
    ],
  },
  'spring-grove-village': {
    intro:
      'Homes around Spring Grove Cemetery sit on low Mill Creek valley ground, so an electrical inspection in Spring Grove Village looks at flood exposure as well as age. Aging wiring, original panels and ungrounded outlets are common here. Water can corrode panels and compromise grounding, which we check after storms.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest cemeteries in the country, with a mix of older homes and industry. The older housing here runs on aging wiring with original panels and ungrounded outlets, so a documented inspection is a sensible first step before a purchase or a renovation.',
      'The low valley ground brings a real flooding risk, and water exposure can corrode panels and compromise grounding. A licensed inspection reviews the service, grounding, and GFCI and AFCI protection, and verifies any renovation work against permits. The written report gives a Spring Grove Village owner or buyer a clear baseline, including a post-storm check after high water.',
    ],
    commonIntro:
      'In Spring Grove Village’s older valley homes, the inspection findings we see most often come from aging wiring and the effects of low, flood-prone ground:',
    localFaqs: [
      {
        q: 'How fast can you inspect a home in Spring Grove Village?',
        a: 'Spring Grove Village is within our service area in the Mill Creek valley. We schedule licensed inspections promptly and deliver a written report on the panel, grounding, and circuit protection.',
      },
    ],
  },
  'linwood': {
    intro:
      'Near Lunken Airport and the river bottoms, an electrical inspection in Linwood weighs high-water risk alongside age. The older homes along Eastern Avenue carry original panels and ungrounded outlets. If water has come in, we check for corroded panels and damaged grounding and put the findings in writing.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms. The older homes here carry aging wiring with original panels and ungrounded outlets, and in homes this close to the river bottoms a documented inspection sorts out what is original and what has been updated before a purchase.',
      'The low riverside position raises the risk of high water, and homes that have flooded can have corroded panels and damaged grounding that need verifying afterward. A licensed inspection reviews the service, grounding, and GFCI and AFCI protection and produces a written report suited to a pre-purchase review or a post-storm check near Lunken.',
    ],
    commonIntro:
      'In Linwood’s older riverside homes, the inspection findings we see most often involve aging wiring and the effects of high water near the river bottoms:',
    localFaqs: [
      {
        q: 'Can you inspect my Linwood home’s electrical after high water?',
        a: 'Yes. A licensed inspection of a Linwood home near Lunken and the river bottoms checks the panel, grounding, and circuits for water damage after high water and gives you a written report on what needs attention.',
      },
    ],
  },
  'bond-hill': {
    intro:
      'Service sized before central air is a common find in a Bond Hill electrical inspection. The early-1900s and mid-century homes along Reading Road often still have original panels and ungrounded outlets. Before a sale or new load, we check the panel, grounding and protection and flag unpermitted work.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes. Homes of that age carry decades-old wiring, often with original panels, ungrounded outlets, and service sized before central air and modern appliances, so a documented inspection is a sound step before a sale or before adding new load.',
      'A licensed inspection in Bond Hill reviews the service and panel, grounding and bonding, and GFCI and AFCI protection, and flags any renovation work that may not have been permitted. The written report gives an owner or buyer of one of these early-1900s or mid-century homes along Reading Road a clear baseline and a list of anything that needs attention.',
    ],
    commonIntro:
      'Across Bond Hill’s older and mid-century homes, the inspection findings we see most often involve aging panels and wiring sized for an earlier era of appliances:',
    localFaqs: [
      {
        q: 'How fast can you inspect a home in Bond Hill?',
        a: 'Bond Hill is well within our north-side service area along Reading Road. We schedule licensed inspections promptly and deliver a written report on the panel, grounding, and circuit protection.',
      },
    ],
  },
};
