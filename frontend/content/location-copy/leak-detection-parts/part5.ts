export const part5: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'ludlow': {
    intro: 'A hidden water leak in a Ludlow home rarely announces itself — you notice the water bill first, or a stain on a plaster wall. Our licensed plumbers pinpoint leaks behind walls and under floors with acoustic sensors and thermal imaging, no demolition guesswork. Call (513) 586-5107.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town off Elm Street, full of well-preserved Victorian and early-1900s homes. Houses that old still run on original galvanized and cast-iron lines, and those metals fail from the inside out — a pinhole weep behind plaster can run for months before the drywall stains or the floor cups. That is exactly the kind of slow leak our moisture meters and acoustic equipment are built to find.',
      'The riverfront setting adds a second layer. When the Ohio runs high, ground stays saturated and basements stay damp, which masks a genuine supply-line or slab leak as ordinary moisture. We use thermal imaging and pipe cameras to separate a real plumbing leak from groundwater so you are not tearing out a wall on a guess.',
    ],
    commonIntro: "In Ludlow's century-old riverfront homes, the leak signs we trace most often line up with the age of the pipe:",
    localFaqs: [{ q: 'Can you find a leak in an old Ludlow home without tearing into the plaster?', a: 'Yes. In Ludlow’s Victorian and early-1900s homes we use acoustic listening, thermal cameras, and moisture meters to pinpoint the leak first, so any opening is small and deliberate. All work is done by licensed plumbers.' }],
  },
  'park-hills': {
    intro: 'If your Park Hills water bill climbed without explanation, a hidden leak is the usual cause. Our licensed plumbers use non-invasive acoustic sensors and thermal imaging to locate leaks behind walls and under slabs before any cutting begins. Call (513) 586-5107.',
    relevance: [
      'Park Hills (ZIP 41011) sits on steep, tree-lined streets above Covington beside Devou Park, with early-1900s homes that carry aging supply lines. On a hillside lot, a leak does not stay put — water follows the grade, so the wet spot you see in a finished basement may be feet away from the pipe that is actually failing. Tracing it by eye wastes time and drywall.',
      'That is why we map a Park Hills leak with thermal imaging and moisture readings before opening anything, following the water back to its source through the slope. The hillside grade also stresses lower-level walls and floors, so catching a slow supply-line leak early keeps it from soaking into finished space below.',
    ],
    commonIntro: "In Park Hills' older hillside homes, the leak signs we see most often trace back to aging pipe and the grade:",
    localFaqs: [{ q: 'Water shows up in my Park Hills basement but I can’t find the source — can you?', a: 'On a hillside lot like Park Hills, water travels down-grade from the actual leak. Our licensed plumbers use thermal imaging and acoustic tracing to follow it back to the failing pipe without opening every wall.' }],
  },
  'bromley': {
    intro: 'A musty smell or a damp basement wall in Bromley often points to a hidden water leak, not just river humidity. Our licensed plumbers tell the two apart with thermal imaging and moisture meters, then pinpoint the source. Call (513) 586-5107.',
    relevance: [
      'Bromley (ZIP 41016) is a small river village beside Ludlow, with older homes sitting on low ground right by the Ohio River. Constant riverside moisture makes leak detection genuinely harder here: a damp wall could be groundwater, or it could be a supply line weeping behind it, and the two look identical to the eye.',
      'We resolve that with non-invasive tools. Moisture meters quantify how wet a wall actually is, thermal imaging shows the temperature signature of running water inside it, and a pipe camera confirms a failing line before any repair. In low-lying Bromley homes that separation keeps you from chasing the wrong problem.',
    ],
    commonIntro: "In Bromley's low riverside homes, the leak signs we investigate most often blur with ordinary river dampness:",
    localFaqs: [{ q: 'Is my wet Bromley basement wall a leak or just the river?', a: 'Both are common this close to the Ohio. Our licensed plumbers use moisture meters and thermal imaging to tell a supply-line leak from groundwater so you fix the right thing.' }],
  },
  'fort-wright': {
    intro: 'Running-water sounds when every tap is off usually mean a hidden leak somewhere in a Fort Wright home. Our licensed plumbers locate it with acoustic sensors and thermal imaging, no exploratory demolition. Call (513) 586-5107.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes. Mid-century houses are now at the age where copper develops pinholes and galvanized closes up and weeps, and those leaks often hide inside finished basement walls that were added decades after the home was built.',
      'On the hillside terrain here, a small supply-line leak migrates down-grade and shows up far from its source. We use acoustic listening to hear pressurized water escaping inside a wall and thermal imaging to map the wet path, so the repair is targeted rather than a series of holes.',
    ],
    commonIntro: "Across Fort Wright's mid-century hilltop homes, the leak signs we trace most often come from aging supply lines:",
    localFaqs: [{ q: 'How do you find a hidden pipe leak in a Fort Wright home?', a: 'Our licensed plumbers start with acoustic sensors and thermal imaging to pinpoint the leak inside the wall or floor, then open only that spot. It suits Fort Wright’s finished mid-century basements well.' }],
  },
  'fort-mitchell': {
    intro: 'A stain spreading on a Fort Mitchell ceiling or wall is the visible end of a leak that started elsewhere. Our licensed plumbers find the true source with moisture meters and thermal imaging before opening anything. Call (513) 586-5107.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets. That range matters for leak work: historic houses carry corroded galvanized lines that weep at threaded joints, while mid-century homes are at the age where copper supply lines develop pinholes.',
      'Either way, the stain you can see rarely sits over the leak — water travels along framing and pools at a low point. We pinpoint the actual source with thermal imaging and moisture mapping, then a pipe camera confirms it, so a repair on a Dixie Highway-area home stays small and accurate.',
    ],
    commonIntro: "Across Fort Mitchell's historic and mid-century homes, the leak signs we chase most often are the misleading kind:",
    localFaqs: [{ q: 'A ceiling stain in my Fort Mitchell home keeps growing — where’s the leak?', a: 'It is usually upstream of where the stain shows. Our licensed plumbers use thermal imaging and moisture meters to trace it to the real source, common in Fort Mitchell’s older and mid-century homes.' }],
  },
  'villa-hills': {
    intro: 'An unexplained jump in your Villa Hills water bill is the most reliable sign of a hidden leak. Our licensed plumbers pinpoint it with acoustic sensors and thermal imaging, leaving finished space intact. Call (513) 586-5107.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes. Even newer homes reach the age where supply lines and connections begin to weep, and on these hilltop lots a slow leak rides the grade into a finished basement before anyone notices a problem upstairs.',
      'We work that backwards. Acoustic equipment listens for pressurized water escaping inside walls and floors, thermal imaging shows the wet trail down-grade, and moisture meters confirm where it ends. That keeps a Villa Hills leak hunt from turning into open walls across a finished lower level.',
    ],
    commonIntro: "Across Villa Hills' hilltop homes, the leak signs we see most often start small and travel down-grade:",
    localFaqs: [{ q: 'My Villa Hills water bill spiked — can you find the leak without a mess?', a: 'Yes. Our licensed plumbers use acoustic sensors, thermal imaging, and moisture meters to locate the leak first, so the opening is small — a good fit for Villa Hills’ finished hillside basements.' }],
  },
  'lakeside-park': {
    intro: 'Damp spots, a musty smell, or water you can hear running point to a hidden leak in a Lakeside Park home. Our licensed plumbers locate it non-invasively with thermal imaging and acoustic tools. Call (513) 586-5107.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city of mid-century single-family homes on quiet streets. Homes of that era are now at the age where copper supply lines develop pinhole leaks and galvanized lines weep at the joints, often inside walls or under slab floors where nothing shows until a stain or smell appears.',
      'Because the leak is hidden, the fix starts with finding it precisely. We use acoustic sensors to hear escaping water, thermal imaging to read the temperature difference of a wet area, and moisture meters to confirm the extent, so a Lakeside Park repair is one targeted opening rather than several.',
    ],
    commonIntro: "Across Lakeside Park's mid-century homes, the leak signs we investigate most often are the quiet, hidden ones:",
    localFaqs: [{ q: 'How do you find a slab or wall leak in a Lakeside Park home?', a: 'Our licensed plumbers combine acoustic listening, thermal imaging, and moisture meters to pinpoint the leak in the wall or slab before any cutting — well suited to Lakeside Park’s mid-century homes.' }],
  },
  'crescent-springs': {
    intro: 'A hidden leak in a Crescent Springs home often shows up as a higher water bill long before a visible stain. Our licensed plumbers find it with acoustic sensors and thermal imaging, no guesswork demolition. Call (513) 586-5107.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city with established neighborhoods of mid-century and newer homes. As supply lines and fittings in these homes reach the age where they begin to weep, the leak is frequently behind finished drywall or beneath a slab where it can run unseen for weeks.',
      'We pinpoint those leaks without opening walls on a hunch. Thermal imaging reveals the cool or warm signature of a wet area, acoustic equipment isolates the sound of pressurized water escaping, and a pipe camera verifies the failing line before repair. In a Crescent Springs home that means a small, accurate fix.',
    ],
    commonIntro: "Across Crescent Springs' mid-century and newer homes, the leak signs we see most often are the slow, hidden ones:",
    localFaqs: [{ q: 'Can you locate a hidden leak in a Crescent Springs home before repairs?', a: 'Yes. Our licensed plumbers use thermal imaging, acoustic sensors, and pipe cameras to pinpoint the leak first, so any opening in your Crescent Springs home is small and deliberate.' }],
  },
  'crestview-hills': {
    intro: 'Whether it is a home near Thomas More or a building by the mall, a hidden leak in Crestview Hills drives up water use and damages finishes. Our licensed plumbers pinpoint it with thermal imaging and acoustic sensors. Call (513) 586-5107.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor. Mid-century and newer homes here reach the age where supply lines fail, while commercial buildings have longer concealed runs where a leak can hide above ceilings or under slab for a long time.',
      'Both call for non-invasive detection. We use thermal imaging and moisture meters to map a wet area, acoustic equipment to trace the pressurized line, and pipe cameras inside drains, so we can find a leak in a Crestview Hills home or a commercial space without shutting everything down to look.',
    ],
    commonIntro: "Across Crestview Hills' homes and commercial buildings, the leak signs we trace most often are:",
    localFaqs: [{ q: 'Do you do leak detection for commercial buildings in Crestview Hills?', a: 'Yes. Along the Crestview Hills commercial corridor our licensed plumbers use thermal imaging, acoustic tools, and pipe cameras to locate leaks in long concealed runs without disrupting the whole building.' }],
  },
  'edgewood': {
    intro: 'Near St. Elizabeth or out in the neighborhoods, a hidden leak in an Edgewood home shows first as a rising water bill or a musty smell. Our licensed plumbers locate it with acoustic sensors and thermal imaging. Call (513) 586-5107.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes. Supply lines and fittings in homes of that age begin to weep at connections, and because the leak is often inside a wall or under a slab, the only early clue may be a damp smell or a meter that keeps creeping.',
      'We find those leaks without exploratory holes. Acoustic sensors pick up the sound of water escaping a pressurized line, thermal imaging maps the wet area behind drywall, and moisture meters confirm its edges, so an Edgewood repair is targeted to the exact spot.',
    ],
    commonIntro: "Across Edgewood's mid-century and newer homes, the leak signs we see most often are the quiet, early ones:",
    localFaqs: [{ q: 'How do you pinpoint a hidden leak in an Edgewood home?', a: 'Our licensed plumbers use acoustic sensors, thermal imaging, and moisture meters to find the leak inside the wall or slab before any cutting — a method well suited to Edgewood’s mid-century and newer homes.' }],
  },
  'taylor-mill': {
    intro: 'A leak you cannot see in a Taylor Mill home often reveals itself on the water bill before anywhere else. Our licensed plumbers trace it with thermal imaging and acoustic sensors, no demolition guesswork. Call (513) 586-5107.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes. As supply lines in these homes reach the age where they weep, the hillside grade carries the escaped water down into finished basements, so the damp spot you find is rarely over the actual leak.',
      'We trace it back uphill with the right tools. Thermal imaging follows the wet path, acoustic equipment locates the pressurized line by sound, and moisture meters mark the boundaries, so a Taylor Mill leak is repaired at its source instead of where it happens to pool.',
    ],
    commonIntro: "Across Taylor Mill's hilltop homes, the leak signs we trace most often travel down-grade from the source:",
    localFaqs: [{ q: 'Why does water show up far from the leak in my Taylor Mill home?', a: 'On Taylor Mill’s hillside lots, water runs down-grade before it surfaces. Our licensed plumbers use thermal imaging and acoustic tracing to follow it back to the failing pipe.' }],
  },
  'elsmere': {
    intro: 'A growing wall stain or running-water sound usually means a concealed leak in an Elsmere home. Our licensed plumbers pinpoint it with moisture meters and acoustic sensors before any cutting. Call (513) 586-5107.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes. That age range means corrosion: older galvanized lines weep at threaded joints and mid-century copper develops pinholes, both typically hidden behind plaster or drywall where they go unnoticed.',
      'We find those leaks non-invasively. Acoustic sensors isolate the sound of escaping water inside a wall, thermal imaging reveals the wet area, and a pipe camera confirms the failing line, so an Elsmere repair opens only the exact spot rather than chasing the damage across a room.',
    ],
    commonIntro: "Across Elsmere's older and mid-century homes, the leak signs we see most often come from corroding pipe:",
    localFaqs: [{ q: 'Can you locate a corroded-pipe leak in an Elsmere home without opening walls?', a: 'Yes. Our licensed plumbers use acoustic sensors, thermal imaging, and pipe cameras to pinpoint the leak first — common in Elsmere’s older and mid-century homes — so the opening stays small.' }],
  },
  'independence': {
    intro: 'Whether your home is in Independence’s historic core or a newer subdivision, a hidden leak shows up first as higher water use. Our licensed plumbers find it with thermal imaging and acoustic sensors, no guesswork. Call (513) 586-5107.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions. Those subdivisions are largely slab-on-grade, where a supply line runs under the concrete and a slab leak can soak the floor for weeks with nothing to see — just a warm spot, a higher bill, or the faint sound of running water.',
      'Slab leaks are exactly where non-invasive detection earns its keep. We use acoustic sensors tuned to listen through concrete, thermal imaging to find the warm path of a hot-line leak, and moisture meters to confirm it, so an Independence repair targets one spot instead of breaking up an entire floor. The older core, by contrast, sees the aging-pipe leaks typical of its age.',
    ],
    commonIntro: "Across Independence's slab-foundation subdivisions and older core, the leak signs we see most often are:",
    localFaqs: [{ q: 'How do you find a slab leak under a newer Independence home?', a: 'Our licensed plumbers use acoustic sensors that listen through concrete plus thermal imaging to pinpoint a slab leak in Independence’s newer subdivisions, so we open only the spot over the failing line.' }],
  },
  'dayton-ky': {
    intro: 'In a Dayton, KY river home, a damp wall could be the Ohio or a hidden pipe leak. Our licensed plumbers tell them apart with moisture meters and thermal imaging, then pinpoint the source. Call (513) 586-5107.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River. Those century-old houses still carry original galvanized and cast-iron plumbing, where corrosion produces slow weeps behind plaster long before anything bursts.',
      'The riverfront location complicates the picture, because high water keeps basements damp and disguises a real supply-line leak as ordinary moisture. We separate the two with moisture meters and thermal imaging, then use acoustic tools and a pipe camera to pinpoint the failing line, so a Dayton repair is precise and the original interior stays intact.',
    ],
    commonIntro: "In Dayton's century-old riverfront homes, the leak signs we investigate most often hide behind river dampness:",
    localFaqs: [{ q: 'Is my damp Dayton, KY basement a pipe leak or the river?', a: 'Both are common this close to the Ohio. Our licensed plumbers use moisture meters and thermal imaging to distinguish a supply-line leak from groundwater before any repair.' }],
  },
  'southgate': {
    intro: 'A creeping water bill is often the only early sign of a hidden leak in a Southgate home. Our licensed plumbers locate it with acoustic sensors and thermal imaging, no exploratory holes. Call (513) 586-5107.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes. Supply lines and fittings in homes of that age begin to weep, and the leak is usually concealed behind finished walls or under a basement slab where it runs unseen until a stain or smell appears.',
      'We pinpoint it without guesswork. Acoustic sensors pick up the sound of pressurized water escaping, thermal imaging maps the wet area, and moisture meters confirm its extent, so a Southgate repair opens only the spot that needs it.',
    ],
    commonIntro: "Across Southgate's mid-century homes, the leak signs we see most often are slow and hidden:",
    localFaqs: [{ q: 'How do you find a hidden leak in a Southgate home?', a: 'Our licensed plumbers use acoustic sensors, thermal imaging, and moisture meters to pinpoint the leak inside the wall or slab before cutting — well suited to Southgate’s mid-century homes.' }],
  },
  'wilder': {
    intro: 'In a Wilder home or business, a hidden leak quietly inflates the water bill and damages finishes. Our licensed plumbers pinpoint it with thermal imaging, acoustic sensors, and pipe cameras. Call (513) 586-5107.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods. Commercial buildings here have long concealed pipe runs above ceilings and under slabs where a leak can hide for a long time, while mid-century homes reach the age where supply lines weep.',
      'Both need non-invasive detection. We use thermal imaging to map wet areas, acoustic equipment to trace pressurized lines, and pipe cameras inside drains, so a leak in a Wilder commercial space or home is located precisely without opening every ceiling tile or shutting the place down.',
    ],
    commonIntro: "Across Wilder's homes and commercial buildings, the leak signs we trace most often are:",
    localFaqs: [{ q: 'Do you handle leak detection for businesses in Wilder?', a: 'Yes. In Wilder’s commercial and industrial buildings our licensed plumbers use thermal imaging, acoustic sensors, and pipe cameras to find leaks in long concealed runs without disrupting operations.' }],
  },
  'highland-heights': {
    intro: 'In a Highland Heights home or rental near NKU, a hidden leak runs up the water bill fast. Our licensed plumbers locate it with acoustic sensors and thermal imaging, no demolition guesswork. Call (513) 586-5107.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and densely used student housing. Heavy use on rental plumbing accelerates wear, so supply-line weeps and fixture leaks turn up more often here, frequently hidden behind walls in occupied units where they go unreported until a bill spikes.',
      'We find those leaks without tearing into shared walls. Acoustic sensors isolate the sound of escaping water, thermal imaging maps the wet area, and moisture meters confirm the extent, so a leak in a Highland Heights rental or home is repaired at one targeted spot.',
    ],
    commonIntro: "Across Highland Heights' homes and student rentals near NKU, the leak signs we see most often are:",
    localFaqs: [{ q: 'Can you find a hidden leak in a student rental near NKU in Highland Heights?', a: 'Yes. Our licensed plumbers use acoustic sensors, thermal imaging, and moisture meters to pinpoint leaks in Highland Heights rentals and homes without opening shared walls on a guess.' }],
  },
  'cold-spring': {
    intro: 'A higher water bill or a warm spot on the floor can point to a hidden or slab leak in a Cold Spring home. Our licensed plumbers find it with thermal imaging and acoustic sensors. Call (513) 586-5107.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with established neighborhoods and newer subdivisions. The newer subdivisions sit on slab foundations, where a supply line runs under the concrete and a leak can warm a patch of floor or raise the bill long before anything is visible.',
      'Slab leaks are where non-invasive tools matter most. We use acoustic sensors that listen through concrete, thermal imaging to find the warm trail of a hot-line leak, and moisture meters to confirm it, so a Cold Spring slab repair targets one spot rather than breaking up the floor. Older homes here see the aging-pipe leaks typical of their age.',
    ],
    commonIntro: "Across Cold Spring's slab-foundation subdivisions and older homes, the leak signs we see most often are:",
    localFaqs: [{ q: 'How do you find a slab leak in a newer Cold Spring home?', a: 'Our licensed plumbers use acoustic sensors that listen through concrete plus thermal imaging to pinpoint slab leaks in Cold Spring’s newer subdivisions, opening only the spot over the failing line.' }],
  },
  'alexandria': {
    intro: 'From a new subdivision to a rural home, a hidden leak in Alexandria shows on the water bill before anywhere else. Our licensed plumbers pinpoint it with thermal imaging and acoustic sensors. Call (513) 586-5107.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core, newer subdivisions, and some semi-rural homes. The newer subdivisions are largely slab-built, where an under-slab supply leak hides under concrete, while the older core runs on aging pipe that weeps behind plaster.',
      'Each calls for the same precise approach. We use acoustic sensors that listen through slab and wall, thermal imaging to map the wet or warm path, and moisture meters to confirm it, so an Alexandria repair is one targeted opening whether the leak is under a new slab or inside an old wall.',
    ],
    commonIntro: "Across Alexandria's newer subdivisions and older core, the leak signs we see most often are:",
    localFaqs: [{ q: 'Can you find a leak under a slab-foundation home in Alexandria?', a: 'Yes. In Alexandria’s newer subdivisions our licensed plumbers use acoustic sensors and thermal imaging to pinpoint slab leaks through the concrete, so we open only the spot that needs it.' }],
  },
  'melbourne': {
    intro: 'A damp basement wall in Melbourne might be the river or a hidden pipe leak. Our licensed plumbers tell them apart with moisture meters and thermal imaging, then pinpoint the source. Call (513) 586-5107.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground. The constant moisture here makes leak detection tricky: a wet wall could be groundwater following high water, or a supply line weeping behind it, and they look the same to the eye.',
      'We separate the two with the right instruments. Moisture meters measure how saturated a surface really is, thermal imaging reveals the temperature signature of running water inside a wall, and a pipe camera confirms a failing line, so a Melbourne repair addresses the real plumbing problem and not the river.',
    ],
    commonIntro: "In Melbourne's low riverside homes, the leak signs we investigate most often blur with river dampness:",
    localFaqs: [{ q: 'Is my wet Melbourne basement a pipe leak or the river?', a: 'Both are common this close to the Ohio. Our licensed plumbers use moisture meters and thermal imaging to tell a supply-line leak from groundwater before any repair.' }],
  },
  'hebron': {
    intro: 'In a Hebron home, a slab or supply leak often shows on the water bill before a stain appears. Our licensed plumbers find it with acoustic sensors and thermal imaging, no demolition guesswork. Call (513) 586-5107.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the CVG airport, with a mix of newer subdivisions and established semi-rural homes. The newer subdivisions sit on slab foundations, where a supply line under the concrete can leak unseen, while rural properties run on well systems where a hidden line leak quietly drives up pump cycling and pressure loss.',
      'We pinpoint either without guesswork. Acoustic sensors listen through slab and walls, thermal imaging maps the warm path of a hot-line leak, and moisture meters confirm the area, so a Hebron repair targets one spot rather than breaking up a new floor or digging blind on a rural lot.',
    ],
    commonIntro: "Across Hebron's slab-foundation subdivisions and rural homes, the leak signs we see most often are:",
    localFaqs: [{ q: 'How do you find a slab leak in a newer Hebron subdivision home?', a: 'Our licensed plumbers use acoustic sensors that listen through concrete plus thermal imaging to pinpoint slab leaks in Hebron’s newer subdivisions, opening only the spot over the failing line.' }],
  },
  'burlington': {
    intro: 'Whether your home is in Burlington’s historic core or a newer subdivision, a hidden leak runs up the water bill quietly. Our licensed plumbers locate it with thermal imaging and acoustic sensors. Call (513) 586-5107.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions. The subdivisions are largely slab-on-grade, where a supply line under the concrete can leak with no visible sign except a warm patch or a creeping bill, while the historic core and rural homes run on older pipe.',
      'We use non-invasive detection in both. Acoustic sensors listen through slab and wall, thermal imaging finds the wet or warm trail, and moisture meters confirm it, so a Burlington repair is precise whether the leak is under a new slab or inside an older wall near the courthouse.',
    ],
    commonIntro: "Across Burlington's slab-foundation subdivisions and historic core, the leak signs we see most often are:",
    localFaqs: [{ q: 'Can you locate a slab leak under a Burlington subdivision home?', a: 'Yes. In Burlington’s fast-growing subdivisions our licensed plumbers use acoustic sensors and thermal imaging to pinpoint slab leaks through the concrete, so the opening stays small.' }],
  },
  'union': {
    intro: 'In Union’s newer subdivisions, a slab leak can soak the floor for weeks with nothing to see but a warm spot and a higher bill. Our licensed plumbers pinpoint it with acoustic sensors and thermal imaging. Call (513) 586-5107.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward. Most sit on slab foundations, and that is exactly where slab leaks happen: a supply line cast into or run under the concrete weeps quietly, warming a patch of floor and raising the water bill long before any moisture surfaces.',
      'Finding it without jackhammering the whole floor takes the right tools. We use acoustic sensors tuned to listen through concrete, thermal imaging to follow the warm trail of a hot-water-line leak, and moisture meters to confirm the spot, so a Union repair breaks open just the area over the failing line.',
    ],
    commonIntro: "Across Union's slab-foundation subdivisions, the leak signs we see most often point under the floor:",
    localFaqs: [{ q: 'How do you find a slab leak under a Union home without breaking up the floor?', a: 'Our licensed plumbers use acoustic sensors that listen through concrete and thermal imaging to pinpoint the slab leak in Union’s subdivisions, so we open only the spot over the failing line.' }],
  },
  'walton': {
    intro: 'From a new subdivision to a rural home, a hidden leak in Walton shows on the water bill first. Our licensed plumbers pinpoint it with thermal imaging and acoustic sensors, no guesswork. Call (513) 586-5107.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core, newer subdivisions, and surrounding rural homes. The newer subdivisions are slab-built, where an under-slab leak hides under concrete, while rural properties on wells can lose pressure to a buried line leak that is hard to spot by eye.',
      'We locate either precisely. Acoustic sensors listen through slab and along buried lines, thermal imaging maps warm or wet trails, and moisture meters confirm the area, so a Walton repair is targeted whether the leak is under a new slab or out on a rural lot.',
    ],
    commonIntro: "Across Walton's slab-foundation subdivisions and rural homes, the leak signs we see most often are:",
    localFaqs: [{ q: 'Can you find a buried line leak on a rural Walton property?', a: 'Yes. On Walton’s rural lots our licensed plumbers use acoustic sensors and thermal imaging to trace buried line leaks, so any digging is targeted rather than blind.' }],
  },
  'mount-carmel': {
    intro: 'A hidden leak in a Mount Carmel home often shows as a rising water bill before a visible stain. Our licensed plumbers find it with acoustic sensors and thermal imaging, no exploratory demolition. Call (513) 586-5107.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes. Supply lines and fittings in these homes reach the age where they weep, and many newer ones sit on slab foundations where an under-slab leak runs unseen.',
      'We pinpoint both without guesswork. Acoustic sensors listen for escaping water through wall or slab, thermal imaging maps the wet or warm area, and moisture meters confirm its edges, so a Mount Carmel repair opens only the spot over the leak.',
    ],
    commonIntro: "Across Mount Carmel's mid-century and newer homes, the leak signs we see most often are:",
    localFaqs: [{ q: 'How do you pinpoint a hidden leak in a Mount Carmel home?', a: 'Our licensed plumbers use acoustic sensors, thermal imaging, and moisture meters to locate the leak in the wall or slab before any cutting — well suited to Mount Carmel’s mid-century and newer homes.' }],
  },
  'summerside': {
    intro: 'An unexplained jump in your Summerside water bill usually means a hidden leak. Our licensed plumbers locate it with thermal imaging and acoustic sensors, leaving finished space intact. Call (513) 586-5107.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes. As supply lines, fittings, and slab plumbing in these homes reach the age where they begin to weep, the leak is often concealed behind drywall or under a slab where nothing shows until a bill climbs or a smell sets in.',
      'We find it non-invasively. Thermal imaging reveals the temperature signature of a wet area, acoustic equipment isolates the sound of escaping water, and a pipe camera verifies the failing line, so a Summerside repair is one accurate opening.',
    ],
    commonIntro: "Across Summerside's mid-century and newer homes, the leak signs we see most often are:",
    localFaqs: [{ q: 'Can you find a hidden leak in a Summerside home before repairs?', a: 'Yes. Our licensed plumbers use thermal imaging, acoustic sensors, and pipe cameras to pinpoint the leak first, so any opening in your Summerside home is small and deliberate.' }],
  },
  'withamsville': {
    intro: 'In a Withamsville home or storefront, a hidden leak quietly raises water use and damages finishes. Our licensed plumbers pinpoint it with thermal imaging, acoustic sensors, and pipe cameras. Call (513) 586-5107.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips. The commercial buildings have long concealed pipe runs above ceilings and under slab where a leak can hide for weeks, while mid-century and newer homes reach the age where supply lines weep.',
      'Both need non-invasive detection. We use thermal imaging to map wet areas, acoustic equipment to trace pressurized lines, and pipe cameras inside drains, so a leak in a Withamsville home or Ohio Pike storefront is located precisely without opening every ceiling or shutting the business down.',
    ],
    commonIntro: "Across Withamsville's homes and commercial strips, the leak signs we trace most often are:",
    localFaqs: [{ q: 'Do you do leak detection for businesses along Ohio Pike in Withamsville?', a: 'Yes. In Withamsville’s commercial strips our licensed plumbers use thermal imaging, acoustic sensors, and pipe cameras to find leaks in long concealed runs without disrupting the business.' }],
  },
  'milford': {
    intro: 'In a historic Milford home near the river, a damp wall could be flooding or a hidden pipe leak. Our licensed plumbers tell them apart with moisture meters and thermal imaging, then pinpoint the source. Call (513) 586-5107.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes. Those century-old buildings carry aging plumbing that weeps behind plaster, and the low ground near the river keeps basements damp enough to mask a real supply-line leak.',
      'We separate the two with non-invasive tools. Moisture meters quantify how wet a surface is, thermal imaging shows the temperature signature of running water inside a wall, and a pipe camera confirms a failing line, so a repair in Milford’s historic core addresses the plumbing without disturbing original features unnecessarily.',
    ],
    commonIntro: "In Milford's historic downtown and older homes, the leak signs we investigate most often hide behind river dampness:",
    localFaqs: [{ q: 'Is my damp Milford basement a leak or river flooding?', a: 'Both are common near the Little Miami River. Our licensed plumbers use moisture meters and thermal imaging to tell a supply-line leak from groundwater before any repair in Milford’s older homes.' }],
  },
};
