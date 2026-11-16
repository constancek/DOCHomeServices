export const part2: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'madeira': {
    intro:
      'Madeira’s mid-century homes mostly run on original galvanized and copper supply lines, and after fifty or sixty years those develop pinhole leaks. Leak detection there often starts with a damp joist or musty smell in the basement, traced back with meters and a pipe camera.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city of mostly mid-century single-family homes on quiet, tree-lined streets. Houses that age commonly run on original galvanized and copper supply lines, and after fifty or sixty years those lines develop pinhole leaks behind drywall and under cabinets that drip for weeks before a stain ever shows.',
      'Many of these homes sit over full basements, which is a help in Madeira: a slow supply leak in the floor above often reveals itself first as a damp joist or a musty smell downstairs. We trace that moisture back to its source with meters and a pipe camera rather than guessing, so the repair stays small and the finished basement stays dry.',
    ],
    commonIntro:
      'Across Madeira’s mid-century homes with aging supply lines, the leak signs we trace most often start small and hide well:',
    localFaqs: [
      {
        q: 'Can you find a leak in my Madeira home without tearing into the walls?',
        a: 'Yes. We use acoustic listening gear, thermal imaging, and moisture meters to pinpoint the spot first, so on most Madeira homes we open only the small section that needs the repair.',
      },
    ],
  },
  'wyoming': {
    intro:
      'Wyoming’s Victorian and early-1900s homes have original galvanized risers and early copper joints that corrode quietly, and a supply leak can follow a joist and stain a ceiling rooms away. Leak detection there uses thermal cameras and moisture mapping to mark the one spot to open, sparing plaster and built-ins.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for grand Victorian and early-1900s homes on established, tree-shaded streets. In houses well over a century old, original galvanized risers and early copper joints corrode quietly, and a supply leak can travel along a joist and emerge as a stain rooms away from where it started.',
      'These large homes are full of finished, detailed spaces — plaster walls, hardwood, and built-ins — that make exploratory demolition expensive and slow. That is exactly why non-invasive detection matters in Wyoming: thermal cameras and moisture mapping let us follow the water through wall cavities and ceilings and mark the one spot to open, protecting the historic interiors.',
    ],
    commonIntro:
      'In Wyoming’s grand, century-old homes with original plumbing, the leak signs we chase most often hide behind plaster and trim:',
    localFaqs: [
      {
        q: 'I have a ceiling stain in an older Wyoming home but no idea where it is coming from. Can you help?',
        a: 'Yes. A stain often sits far from the actual leak. Our licensed plumbers use thermal imaging and moisture meters to trace the water back to its source in Wyoming’s older homes before any plaster comes down.',
      },
    ],
  },
  'mariemont': {
    intro:
      'Mariemont’s 1920s and 30s Tudor homes carry nearly a century of plumbing wear, with original galvanized lines buried in masonry and thick walls leaking slowly. Leak detection in this National Historic Landmark village uses acoustic sensors and moisture readings through the wall, so we open only what the fix requires.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned garden community laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square. Homes built in the 1920s and 30s carry close to a century of plumbing wear, and original galvanized lines buried in masonry and thick walls leak slowly and invisibly.',
      'Because the district is a Historic Landmark, owners here want repairs that disturb as little of the original fabric as possible. Non-invasive detection fits that priority: we run acoustic sensors along pressurized lines and read moisture through the wall surface to find the leak, then open only what the fix requires rather than chasing water through historic plaster and brick.',
    ],
    commonIntro:
      'In Mariemont’s 1920s-era Tudors with aging concealed lines, the leak signs we see most often show up as smell and damp before anything visible:',
    localFaqs: [
      {
        q: 'Will finding a leak damage the historic features of my Mariemont home?',
        a: 'No. We locate the leak with non-invasive acoustic and moisture tools first, so in Mariemont’s historic Tudor homes we open only the small area needed and respect the original details.',
      },
    ],
  },
  'cheviot': {
    intro:
      'Cheviot’s early-1900s homes and brick two-families along Harrison Avenue run on aging galvanized and copper lines, and a leak in a shared wall can show up next door. Leak detection there uses acoustic correlation and moisture mapping to pin the failure to the right unit and wall cavity.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue. That older housing runs on aging galvanized and copper lines, and in a brick two-family a supply leak inside a shared wall can show up in the neighboring unit instead of the one with the bad pipe.',
      'Tight lots and shared walls make it hard to know which home a leak even belongs to, which is where pinpoint detection earns its keep. We use acoustic correlation along the pressurized lines and moisture mapping to isolate the failure to the right unit and the right wall cavity, so the opening and the repair stay contained in densely built Cheviot.',
    ],
    commonIntro:
      'In Cheviot’s dense early-1900s homes and brick two-families, the leak signs we trace most often involve shared walls and aging pipe:',
    localFaqs: [
      {
        q: 'A leak in my Cheviot two-family seems to come from the other unit. Can you tell which side it is?',
        a: 'Yes. In Cheviot’s brick two-families we use acoustic gear and moisture readings to isolate a leak to the correct unit and wall before any drywall is opened.',
      },
    ],
  },
  'covedale': {
    intro:
      'Covedale homes from the early 1900s through mid-century have corroding galvanized lines and aging copper joints that leak unseen. Leak detection there also covers slab homes, where the first clue is a warm floor or rising hot-water bill. Thermal and acoustic tools let us cut only over the line.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes. Across that range, corroding galvanized supply lines and aging copper joints are common, and a pinhole leak in a wall or under a floor can run for weeks before a stain or a damp carpet gives it away.',
      'The newer end of Covedale’s housing sometimes sits on slabs, where a supply leak under the concrete is nearly impossible to spot by eye — the first clue is often a warm patch on the floor or a hot-water bill that keeps rising. We use thermal cameras and acoustic equipment to pinpoint a slab leak through the floor, so the only concrete we cut is directly over the line.',
    ],
    commonIntro:
      'Across Covedale’s older and mid-century homes, the leak signs we see most often range from wall pinholes to hidden slab leaks:',
    localFaqs: [
      {
        q: 'I think I have a slab leak in my Covedale home. How do you find it?',
        a: 'We use thermal imaging and acoustic listening equipment to locate a slab leak through the floor in Covedale homes, then cut only the small section of concrete directly over the line.',
      },
    ],
  },
  'covington': {
    intro:
      'Covington’s 19th-century rowhouses in MainStrasse Village and Licking Riverside carry original cast-iron and galvanized plumbing that can leak inside thick masonry without showing. Leak detection there also has to rule out river moisture, so we use moisture meters and acoustic tools to tell a pipe leak from groundwater.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes. Those century-old houses carry original cast-iron and galvanized plumbing, and a corroded supply line inside a thick masonry wall can leak steadily without ever showing on the surface.',
      'The low ground near the Ohio and Licking Rivers keeps basements damp here, which makes a real supply leak easy to miss against ordinary riverfront moisture. We separate the two with moisture meters and acoustic detection — reading whether a wet wall traces to a pressurized line or to groundwater — so a genuine pipe leak in Covington gets found and not blamed on the river.',
    ],
    commonIntro:
      'In Covington’s historic riverfront homes, the leak signs we sort through most often blend pipe leaks with river-driven dampness:',
    localFaqs: [
      {
        q: 'My Covington basement is damp — is it the river or a leak?',
        a: 'We use moisture meters and acoustic detection to tell whether a damp Covington wall traces to a pressurized supply line or to groundwater near the river, so the right problem gets fixed.',
      },
    ],
  },
  'newport': {
    intro:
      'Newport’s East Row Historic District has hundreds of Victorian homes with original plumbing well past its service life, and slow leaks hide behind lath-and-plaster and ornate trim. Leak detection there follows the water with thermal cameras and acoustic gear to the exact cavity, so restorers keep their original plaster.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state. The hundreds of 19th-century homes in the East Row run on original plumbing well past its service life, where a slow supply leak hides easily behind lath-and-plaster walls and ornate trim.',
      'Owners restoring these Victorians do not want exploratory holes punched through original plaster and woodwork to chase a stain. Non-invasive detection answers that: we follow the water with thermal cameras and acoustic listening gear to the exact cavity, then open only what the repair needs, so a leak gets fixed without sacrificing the East Row’s historic detail.',
    ],
    commonIntro:
      'In Newport’s Victorian East Row homes and riverfront streets, the leak signs we trace most often hide behind original plaster:',
    localFaqs: [
      {
        q: 'Can you find a leak in my East Row home without wrecking the original plaster?',
        a: 'Yes. In Newport’s East Row Victorians we locate the leak with thermal imaging and acoustic tools first, so only the small area over the repair is opened and the original plaster and trim are protected.',
      },
    ],
  },
  'bellevue': {
    intro:
      'Bellevue’s late-1800s homes near Fairfield Avenue carry original galvanized and cast-iron plumbing, and on tight lots a leak inside a party wall is hard to place by eye. The riverfront water table keeps basements damp, so leak detection there separates a supply leak from seepage with moisture and acoustic tools.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes. That century-old housing carries original galvanized and cast-iron plumbing, and on small lots where homes sit close together a leak inside a party wall is hard to place by eye alone.',
      'The riverfront location keeps the water table high here, so basements pick up dampness that can mask a true supply leak. We use moisture meters and acoustic equipment to tell a pressurized-line leak apart from river-driven seepage and to mark the exact spot, keeping the opening small in Bellevue’s tightly built historic homes.',
    ],
    commonIntro:
      'In Bellevue’s well-preserved late-1800s riverfront homes, the leak signs we see most often mix old-pipe failures with a high water table:',
    localFaqs: [
      {
        q: 'How do you find a hidden leak in a small older Bellevue home?',
        a: 'We use acoustic listening gear and moisture meters to pinpoint the leak in Bellevue’s late-1800s homes, then open only the small section needed — even on tight lots and shared walls.',
      },
    ],
  },
  'fort-thomas': {
    intro:
      'Many stately early-1900s homes in Fort Thomas still carry original supply lines, and leak detection there often starts in a finished lower level built into the bluff, where a leak reads like hillside moisture. We confirm the source with thermal cameras and acoustic gear, often the same day.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river. Many of these large, established homes still carry original supply lines, and in a big house a slow leak can do real damage to finished spaces well before anyone spots it.',
      'Sitting on the bluff above the river, Fort Thomas homes are often built into the grade, so a supply leak on a lower level can wick into a foundation wall or a finished basement and read like ordinary hillside moisture. We use thermal cameras and acoustic detection to confirm whether the source is a pressurized line and to pinpoint it, so the repair is precise rather than a guess.',
    ],
    commonIntro:
      'In Fort Thomas’ stately early-1900s homes above the river, the leak signs we trace most often surface in finished lower levels:',
    localFaqs: [
      {
        q: 'How fast can you locate a hidden leak in my Fort Thomas home?',
        a: 'Fort Thomas is well within our Northern Kentucky service area, and we often arrive the same day. We use thermal imaging and acoustic gear to pinpoint the leak before opening anything.',
      },
    ],
  },
  'florence': {
    intro:
      'Florence has two kinds of leak detection jobs: slab leaks in newer subdivision homes, which stay hidden until the bill jumps or the floor warms, and pinhole leaks in older galvanized and copper lines in mid-century homes. We pick acoustic, thermal or camera tools to suit.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area. Many of those newer subdivision homes sit on concrete slabs, where a supply leak under the floor stays completely out of sight until the bill jumps or a section of floor turns warm.',
      'The mid-century neighborhoods, by contrast, run on older galvanized and copper lines that develop pinhole leaks inside walls. We match the tool to the home in Florence: acoustic listening and thermal imaging through the slab on newer houses, moisture mapping and pipe cameras on the older ones, so the leak is found precisely whichever side of the city it is on.',
    ],
    commonIntro:
      'Across Florence’s slab-built newer homes and older mid-century streets, the leak signs we see most often split between hidden slab leaks and wall pinholes:',
    localFaqs: [
      {
        q: 'How do you find a slab leak in a newer Florence subdivision home?',
        a: 'We use acoustic listening equipment and thermal imaging to locate a slab leak through the concrete in Florence homes, so we cut only the small area directly over the line.',
      },
    ],
  },
  'erlanger': {
    intro:
      'Erlanger’s mid-century homes are at the age where original copper and galvanized supply lines corrode, and a pinhole leak can run quietly behind drywall. Leak detection there often starts in the basement, with a damp joist or musty smell we trace back with meters and a camera.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes. Homes from the mid-1900s are now at the age where original copper and galvanized supply lines corrode, and a pinhole leak behind drywall can run quietly until a stain appears or the meter keeps spinning with the taps off.',
      'Many Erlanger homes have full basements, which gives a hidden upstairs leak a place to show itself first — a damp band on a joist, peeling paint, or a musty smell below. We follow that evidence up to its source with moisture meters and a pipe camera rather than opening walls blindly, keeping the repair small in this Kenton County city.',
    ],
    commonIntro:
      'Across Erlanger’s mid-century homes with aging supply lines, the leak signs we trace most often surface first down in the basement:',
    localFaqs: [
      {
        q: 'My Erlanger water bill jumped but I see no leak. What now?',
        a: 'A rising bill with nothing visible usually means a hidden leak. Our licensed plumbers use acoustic gear and moisture meters to pinpoint it in Erlanger homes before any wall is opened.',
      },
    ],
  },
  'mason': {
    intro:
      'Most leak detection in Mason means slab homes in subdivisions built from the 1990s onward, where a supply leak under the concrete shows up as a warm patch or a rising hot-water bill. Acoustic and thermal tools fix its position, so we cut only a small section.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati, near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town center. The subdivision homes are typically built on concrete slabs, and a supply leak beneath that slab is invisible from above — the early signs are a warm patch underfoot, a faint running-water sound, or a creeping hot-water bill.',
      'Detecting a slab leak takes the right tools, not demolition. We use acoustic correlation along the pressurized lines and thermal imaging across the floor to fix the leak’s position, then cut only the small section of slab directly above it. In Mason’s older town center, where homes have basements and aging pipe, we switch to moisture mapping and a pipe camera instead.',
    ],
    commonIntro:
      'Across Mason’s slab-built subdivisions and older town center, the leak signs we see most often start under the floor:',
    localFaqs: [
      {
        q: 'Do newer Mason homes get slab leaks too?',
        a: 'Yes. Mason’s slab-built subdivision homes can develop supply leaks under the concrete as they age. We locate them with acoustic and thermal tools, so only a small section of slab is opened.',
      },
    ],
  },
  'west-chester': {
    intro:
      'West Chester’s subdivisions along I-75 sit mostly on slabs, and as supply lines reach twenty-five to thirty years old, leak detection there often means a leak under the concrete. Acoustic gear and thermal cameras pinpoint it through the floor first. Finished basements get moisture mapping.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor. Those newer homes sit mostly on slab foundations, and as their original supply lines reach twenty-five and thirty years old, a leak under the slab can run undetected until the floor warms or the bill spikes.',
      'Because the slab hides the line completely, guesswork means jackhammering concrete blind. We avoid that in West Chester by using acoustic listening gear and thermal cameras to pinpoint the leak through the floor first, so the cut is precise. Where a home has a finished basement, moisture mapping locates a supply leak in the floor above before it ruins the ceiling below.',
    ],
    commonIntro:
      'Across West Chester’s slab-built subdivisions, the leak signs we trace most often hide beneath the floor:',
    localFaqs: [
      {
        q: 'Can you find a slab leak in my West Chester home without breaking up the whole floor?',
        a: 'Yes. We use acoustic equipment and thermal imaging to pinpoint a slab leak in West Chester homes, so we open only the small section of concrete directly over the line.',
      },
    ],
  },
  'pendleton': {
    intro:
      'In Pendleton’s restored 19th-century buildings and converted lofts, a supply leak in a wall cavity can travel down through masonry and show up a floor or two below. Leak detection there uses acoustic listening and thermal imaging to find the source unit, keeping demolition and disruption to neighbors small.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condos. Those mid-1800s buildings run on a mix of original and retrofitted plumbing, where a supply leak in a wall cavity can travel down through masonry and show up in a unit a floor or two below.',
      'In a converted multi-unit building, a leak rarely belongs to the unit where it appears, so chasing it by opening walls is both costly and disruptive to neighbors. We use acoustic listening along the pressurized lines and thermal imaging to trace the water across floors and pinpoint the source unit, keeping demolition to a minimum in Pendleton’s tightly built historic blocks.',
    ],
    commonIntro:
      'In Pendleton’s 19th-century buildings and converted lofts, the leak signs we trace most often cross between units and floors:',
    localFaqs: [
      {
        q: 'Water is showing in my Pendleton loft but the leak seems to be from upstairs. Can you trace it?',
        a: 'Yes. In Pendleton’s converted multi-unit buildings we use acoustic gear and thermal imaging to trace a leak across floors and find the source unit before opening any wall.',
      },
    ],
  },
  'queensgate': {
    intro:
      'Queensgate is mostly commercial and industrial buildings, and leak detection there usually means long supply runs in slab-on-grade buildings, where a slow line loss adds up on a large meter. Acoustic correlation, thermal imaging and a pipe camera confirm the leak so one slab cut reaches it.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown, near the rail yards and the Mill Creek, with warehouses, offices, and light-industrial buildings. Long horizontal supply runs in slab-on-grade commercial buildings are a classic spot for a hidden leak, and on a large meter a slow line loss can add up well before anyone notices a wet floor.',
      'The low ground near the Mill Creek keeps these buildings prone to moisture, which makes a real pressurized leak easy to confuse with ordinary dampness on a concrete floor. We use acoustic correlation across long pipe runs, thermal imaging, and a pipe camera to confirm and pinpoint a supply leak in Queensgate, so a single cut in the slab reaches it instead of a wide excavation.',
    ],
    commonIntro:
      'In Queensgate’s commercial and slab-built industrial buildings, the leak signs we trace most often hide in long supply runs:',
    localFaqs: [
      {
        q: 'Can you find a leak in a Queensgate commercial building?',
        a: 'Yes. We pinpoint hidden supply leaks in Queensgate’s commercial and industrial buildings using acoustic correlation, thermal imaging, and pipe cameras, so the slab is cut in one spot rather than dug up.',
      },
    ],
  },
  'cuf': {
    intro:
      'In CUF’s Clifton Heights, University Heights and Fairview, leak detection mostly involves 19th- and early-1900s houses split into student rentals, where heavy use wears old galvanized lines. A leak in a shared stack wall can surface in another apartment, so we isolate it with acoustic listening and moisture mapping.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights, and Fairview — dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals. Heavy use on old galvanized lines in subdivided houses means pinhole leaks are common, and in a building split into units a leak inside a shared stack wall can surface in a different apartment than the one with the bad pipe.',
      'Landlords here want a leak found fast and with minimal disruption to occupied units. We use acoustic listening along the pressurized lines and moisture mapping to isolate the leak to the right unit and wall cavity, so the opening stays small and only one apartment is affected in CUF’s densely built rental housing near campus.',
    ],
    commonIntro:
      'In CUF’s dense, older student-rental housing near UC, the leak signs we trace most often cross between units on aging shared lines:',
    localFaqs: [
      {
        q: 'A leak in my CUF rental seems to come from another unit. Can you pinpoint it?',
        a: 'Yes. In the subdivided older homes around UC we use acoustic gear and moisture meters to isolate a leak to the correct unit and wall before any drywall is opened.',
      },
    ],
  },
  'camp-washington': {
    intro:
      'Camp Washington’s old worker housing and buildings in the Mill Creek valley run on aging galvanized and cast-iron plumbing, and leak detection there has to separate a slow supply leak from ordinary valley dampness. Moisture meters and acoustic detection tell us whether a wet wall traces to a pressurized line.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories. The older homes and buildings here run on aging galvanized and cast-iron plumbing, where a corroded supply line can leak slowly inside a wall for a long time before it is found.',
      'The low valley ground keeps basements and lower walls damp, which makes a genuine supply leak easy to write off as ordinary Mill Creek moisture. We use moisture meters and acoustic detection to tell the two apart — reading whether a wet spot traces to a pressurized line or to groundwater — so a real leak in Camp Washington gets pinpointed and fixed, not mistaken for the water table.',
    ],
    commonIntro:
      'In Camp Washington’s older valley homes and buildings, the leak signs we sort through most often blend pipe leaks with valley dampness:',
    localFaqs: [
      {
        q: 'Is my damp Camp Washington wall a leak or just the valley?',
        a: 'We use moisture meters and acoustic detection to determine whether a damp wall in Camp Washington traces to a pressurized supply line or to groundwater in the Mill Creek valley, so the right problem is addressed.',
      },
    ],
  },
  'south-fairmount': {
    intro:
      'South Fairmount was rebuilt around the Lick Run Greenway and leak detection in its older homes is mostly about telling a pinhole leak from valley dampness. Moisture meters and acoustic gear confirm whether a wet wall comes from a pressurized line.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side, an area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding. The neighborhood’s older homes run on aging supply lines, and in this low setting a slow pinhole leak inside a wall can stay hidden among the ordinary dampness the valley produces.',
      'With the water table close to the surface here, distinguishing a true supply leak from groundwater is the whole challenge. We use moisture meters and acoustic listening gear to confirm whether a wet wall or damp floor traces to a pressurized line, then pinpoint that line, so the repair in South Fairmount targets the actual leak rather than the surrounding moisture.',
    ],
    commonIntro:
      'In South Fairmount’s older Lick Run valley homes, the leak signs we sort through most often hide inside everyday valley dampness:',
    localFaqs: [
      {
        q: 'How do you tell a real leak from valley moisture in South Fairmount?',
        a: 'Our licensed plumbers use moisture meters and acoustic gear to confirm whether damp walls in South Fairmount trace to a pressurized supply line or to groundwater in the Lick Run valley.',
      },
    ],
  },
  'east-end': {
    intro:
      'In the East End along Eastern Avenue, river cottages carry decades-old supply lines that develop pinhole leaks, and the high water table keeps floors and walls damp. Leak detection there separates a pressurized-line leak from river seepage with moisture meters and acoustic tools, keeping openings small on tight lots.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue, below Columbia Parkway, with historic river cottages and newer condos squeezed between the hillside and the Ohio River. The older cottages carry decades-old supply lines that develop pinhole leaks, and a slow drip behind a wall is easy to overlook in a home that already sees river-driven moisture.',
      'Sitting right on the river, these homes get damp floors and walls from the high water table, so a genuine supply leak can hide in plain sight. We use moisture meters and acoustic detection to separate a pressurized-line leak from river seepage and to mark the exact source, keeping any opening small along the East End’s tight riverfront lots.',
    ],
    commonIntro:
      'Along the East End’s riverfront homes, the leak signs we sort through most often blend old-pipe failures with river dampness:',
    localFaqs: [
      {
        q: 'My East End floor stays damp — is it the river or a pipe?',
        a: 'We use moisture meters and acoustic detection to tell whether a damp floor in an East End home traces to a pressurized supply line or to the high river water table, so the right issue gets fixed.',
      },
    ],
  },
  'north-fairmount': {
    intro:
      'Older early-1900s homes on North Fairmount’s hillside above the Mill Creek valley have aging galvanized and copper supply lines, and leak detection there often finds a lower-level leak wicking into a foundation wall that looks like hillside seepage. Thermal imaging and moisture meters confirm the source.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes. That age means aging galvanized and copper supply lines are common, and a pinhole leak inside a wall can run for weeks before a stain or peeling paint gives it away.',
      'On the hillside grade, homes are often built into the slope, so a supply leak on a lower level can wick into a foundation wall and read like ordinary hillside seepage. We use thermal imaging and moisture meters to confirm whether the source is a pressurized line and to pinpoint it, so a real leak in North Fairmount gets traced rather than blamed on the grade.',
    ],
    commonIntro:
      'In North Fairmount’s older hillside homes, the leak signs we trace most often hide behind walls or in lower levels:',
    localFaqs: [
      {
        q: 'How do you find a hidden leak in a North Fairmount hillside home?',
        a: 'We use thermal imaging, acoustic gear, and moisture meters to pinpoint the leak in North Fairmount homes, separating a pressurized-line leak from ordinary hillside moisture before opening anything.',
      },
    ],
  },
  'evanston': {
    intro:
      'Next to Xavier University, Evanston’s early-1900s homes and apartment buildings put heavy use on aging supply lines, so leak detection there is routine work behind drywall. In split buildings, a leak in a shared wall often surfaces next door, and acoustic listening and moisture mapping find the unit.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing. The older homes carry aging supply lines prone to corrosion leaks, and densely built rentals put heavy use on that plumbing, so a slow leak behind drywall is a routine find here.',
      'In a building split into apartments, a supply leak inside a shared wall often surfaces in a neighboring unit rather than its own. We use acoustic listening along the pressurized lines and moisture mapping to isolate the leak to the right unit and wall cavity, keeping the opening small and only one apartment disrupted in Evanston’s older rental housing near campus.',
    ],
    commonIntro:
      'In Evanston’s early-1900s homes and rentals near Xavier, the leak signs we trace most often run on aging, heavily used lines:',
    localFaqs: [
      {
        q: 'Can you find a leak in an Evanston apartment without opening every wall?',
        a: 'Yes. In Evanston’s older multi-unit buildings we use acoustic gear and moisture meters to isolate the leak to the right unit and wall, so only the small area over the repair is opened.',
      },
    ],
  },
  'south-cumminsville': {
    intro:
      'South Cumminsville’s older homes sit among industrial corridors in the Mill Creek valley, and their aging supply lines can leak slowly inside a wall long before it shows. Leak detection there separates a real leak from valley moisture with moisture meters and acoustic tools, then pinpoints the line.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors. The older housing runs on aging supply lines that fail without warning, and a corroded pipe can leak slowly inside a wall long before it shows.',
      'The low valley ground keeps lower walls and basements damp, which makes a real supply leak easy to confuse with ordinary Mill Creek moisture. We use moisture meters and acoustic detection to determine whether a wet area traces to a pressurized line or to groundwater, then pinpoint the line, so the repair in South Cumminsville targets the actual leak.',
    ],
    commonIntro:
      'In South Cumminsville’s older valley homes, the leak signs we sort through most often blend pipe failures with valley dampness:',
    localFaqs: [
      {
        q: 'Is the dampness in my South Cumminsville home a leak or the valley?',
        a: 'We use moisture meters and acoustic detection to tell whether dampness in a South Cumminsville home traces to a pressurized supply line or to groundwater in the Mill Creek valley.',
      },
    ],
  },
  'english-woods': {
    intro:
      'Leak detection on the English Woods hilltop usually means older homes with aging supply lines that drip unnoticed until a stain appears or the meter moves with taps closed. Lower-level leaks often wick into foundation walls, and thermal imaging and moisture meters separate them from hillside moisture.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years. The older homes here run on aging supply lines, where a pinhole leak inside a wall can drip unnoticed until a stain appears or the meter keeps moving with the taps closed.',
      'On the hilltop grade, a supply leak on a lower level can wick into a foundation wall and pass for ordinary hillside moisture. We use thermal imaging and moisture meters to confirm whether a wet area is fed by a pressurized line and to pinpoint it, so a genuine leak in English Woods gets traced precisely rather than mistaken for the slope.',
    ],
    commonIntro:
      'In English Woods’ older hilltop homes, the leak signs we trace most often hide behind walls or in lower levels:',
    localFaqs: [
      {
        q: 'How do you locate a hidden leak in an English Woods home?',
        a: 'We use thermal imaging, acoustic gear, and moisture meters to pinpoint the leak in English Woods homes before opening anything, separating a pipe leak from hillside moisture.',
      },
    ],
  },
  'north-avondale': {
    intro:
      'Leak detection in North Avondale’s grand early-1900s homes near Rockdale Avenue often means original supply lines, where a hidden leak can follow a joist and damage finished rooms before anyone notices. Thermal cameras and moisture mapping trace it through wall and ceiling cavities to one spot, sparing plaster and hardwood.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue. Those big, century-old houses often still carry original supply lines, and in a large home a hidden leak can travel along a joist and do expensive damage to finished spaces before anyone notices.',
      'With plaster walls, hardwood, and detailed interiors, exploratory demolition is the last thing an owner here wants. Non-invasive detection fits North Avondale’s homes: thermal cameras and moisture mapping let us follow a leak through wall and ceiling cavities and mark the single spot to open, protecting the finished rooms while the repair stays small.',
    ],
    commonIntro:
      'In North Avondale’s grand early-1900s homes, the leak signs we trace most often hide behind plaster and finished ceilings:',
    localFaqs: [
      {
        q: 'I have a stain in my North Avondale home but cannot find the source. Can you?',
        a: 'Yes. A stain often sits far from the leak. In North Avondale’s large older homes we use thermal imaging and moisture meters to trace the water to its source before opening any plaster.',
      },
    ],
  },
  'millvale': {
    intro:
      'Millvale is a compact residential neighborhood in the Mill Creek valley, and leak detection there usually means aging supply lines with pinhole leaks inside walls. Valley ground keeps lower walls damp, so moisture meters and acoustic tools tell us whether a wet area comes from a pressurized line.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community. The older housing here runs on aging supply lines prone to pinhole leaks, and a corroded pipe can drip inside a wall for some time before any sign reaches the surface.',
      'The low-lying valley ground keeps lower walls and floors damp, which makes a real supply leak easy to mistake for ordinary Mill Creek moisture. We use moisture meters and acoustic detection to determine whether a wet area is fed by a pressurized line or by groundwater, then pinpoint the line, so the repair in Millvale lands on the actual leak.',
    ],
    commonIntro:
      'In Millvale’s older valley homes, the leak signs we sort through most often blend pipe failures with valley dampness:',
    localFaqs: [
      {
        q: 'Is the moisture in my Millvale home a leak or groundwater?',
        a: 'We use moisture meters and acoustic detection to tell whether dampness in a Millvale home traces to a pressurized supply line or to groundwater in the Mill Creek valley.',
      },
    ],
  },
  'paddock-hills': {
    intro:
      'Corroding galvanized supply lines in Paddock Hills’ early- and mid-1900s homes near Paddock Road leak quietly behind drywall, and leak detection there often starts in a full basement. A damp joist, peeling paint or musty smell below gets traced back to the source with moisture meters and a pipe camera.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes. Houses of that era commonly run on corroding galvanized supply lines, where a pinhole leak behind drywall can run quietly until a stain shows or the meter keeps spinning with the taps off.',
      'Many of these homes have full basements, which gives a hidden upstairs leak a place to reveal itself first — a damp joist, peeling paint, or a musty smell below. We trace that evidence back to its source with moisture meters and a pipe camera rather than opening walls blindly, keeping the repair small in Paddock Hills’ older homes.',
    ],
    commonIntro:
      'In Paddock Hills’ early- and mid-1900s homes, the leak signs we trace most often show up first down in the basement:',
    localFaqs: [
      {
        q: 'My Paddock Hills water bill climbed but I see no leak. Can you find it?',
        a: 'Yes. A rising bill with nothing visible usually means a hidden leak. We use acoustic gear and moisture meters to pinpoint it in Paddock Hills homes before any wall is opened.',
      },
    ],
  },
  'spring-grove-village': {
    intro:
      'Spring Grove Village surrounds the historic cemetery and arboretum in the Mill Creek valley, and leak detection in its older homes means aging supply lines leaking slowly inside walls. Basements stay damp in the valley, so moisture meters and acoustic tools separate a pressurized-line leak from groundwater.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest cemeteries in the country, with a mix of older homes and industry. The older housing here runs on aging supply lines, and a corroded pipe can leak slowly inside a wall well before it becomes visible.',
      'The low valley ground keeps basements and lower walls damp, so a genuine supply leak is easy to confuse with ordinary Mill Creek moisture. We use moisture meters and acoustic detection to determine whether a wet area is fed by a pressurized line or by groundwater, then pinpoint the line, so the repair in Spring Grove Village targets the real leak.',
    ],
    commonIntro:
      'In Spring Grove Village’s older valley homes, the leak signs we sort through most often blend pipe failures with valley dampness:',
    localFaqs: [
      {
        q: 'Is the dampness in my Spring Grove Village home a leak or the valley?',
        a: 'We use moisture meters and acoustic detection to tell whether dampness in a Spring Grove Village home traces to a pressurized supply line or to groundwater in the Mill Creek valley.',
      },
    ],
  },
  'linwood': {
    intro:
      'Leak detection in Linwood, along Eastern Avenue near Lunken Airport and the river bottoms, has to work around a high water table that keeps floors and lower walls damp. In its older homes, we separate aging supply-line leaks from river seepage with moisture meters and acoustic tools.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms. The older homes here carry aging supply lines prone to pinhole leaks, and a slow drip behind a wall is easy to miss in a home that already sees moisture from its low position.',
      'Down in the river bottoms, the high water table keeps floors and lower walls damp, so a real supply leak can hide in plain sight. We use moisture meters and acoustic detection to separate a pressurized-line leak from river seepage and to mark the exact source, keeping any opening small in Linwood’s low-lying riverside homes.',
    ],
    commonIntro:
      'In Linwood’s older riverside homes near the bottoms, the leak signs we sort through most often blend pipe failures with river dampness:',
    localFaqs: [
      {
        q: 'My Linwood home stays damp in the river bottoms — is it a leak?',
        a: 'We use moisture meters and acoustic detection to tell whether dampness in a Linwood home traces to a pressurized supply line or to the high water table near the river bottoms.',
      },
    ],
  },
  'bond-hill': {
    intro:
      'Bond Hill’s early-1900s and mid-century houses along Reading Road carry decades-old galvanized and copper supply lines, and leak detection there often starts with a damp band on a basement joist or a musty smell downstairs. We follow that back to the source with moisture meters and a pipe camera.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes. Houses of that age carry decades-old galvanized and copper supply lines, where a pinhole leak inside a wall can run for weeks before a stain or peeling paint gives it away.',
      'Many Bond Hill homes have full basements, which gives a hidden upstairs leak somewhere to surface first — a damp band on a joist or a musty smell downstairs. We follow that evidence back to its source with moisture meters and a pipe camera rather than opening walls at random, keeping the repair small in Bond Hill’s older and mid-century homes.',
    ],
    commonIntro:
      'Across Bond Hill’s older and mid-century homes with aging supply lines, the leak signs we trace most often surface first in the basement:',
    localFaqs: [
      {
        q: 'How do you find a hidden leak in my Bond Hill home?',
        a: 'We use acoustic gear, thermal imaging, and moisture meters to pinpoint the leak in Bond Hill homes before any wall is opened, so the repair stays small.',
      },
    ],
  },
};
