export const part2: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  madeira: {
    intro:
      'After a flood in Madeira, we inspect and repair the plumbing the water left behind before you turn anything back on, from the homes around Miami and Euclid Avenues out to the quieter side streets. Call (513) 586-5107.',
    relevance: [
      'Madeira is an established east-side city of mid-century single-family homes, most with finished basements holding the water heater, the main shutoff, and the sewer cleanout. When storm water or a backed-up drain reaches that level, those are exactly the components that sit submerged.',
      'We do not dry the basement out. We check whether the water heater burners and gas valve went under, camera the sewer lateral for silt that will back up a week later, and test the shutoff valves and sump pump before you resume normal water use.',
    ],
    commonIntro:
      "Across Madeira's mid-century basements, the plumbing a flood tends to leave damaged is:",
    localFaqs: [
      {
        q: 'Do I need a full inspection if the water only covered the basement floor?',
        a: 'Maybe not. If the water stayed below the water heater base and the floor drains still run, there may be little to fix. Tell us how high it got and we will say whether a truck is worth it.',
      },
    ],
  },
  wyoming: {
    intro:
      'When a flood hits a Wyoming home, we go through the plumbing it left behind before the water goes back on, protecting the finished lower levels these grand houses are known for. Call (513) 586-5107.',
    relevance: [
      'Wyoming is a historic suburb of large Victorian and early-1900s homes on deep, tree-shaded lots. Many have their mechanicals in a finished basement, so a flood can put a century-old water heater and original cast-iron drains underwater at once.',
      'Our work is the inspection and repair afterward, not the dry-out. We check whether submerged gas controls make the water heater unsafe to relight, camera the old sewer line for packed silt, and free the shutoffs and traps that corrode after sitting in dirty water.',
    ],
    commonIntro:
      "In Wyoming's grand, century-old homes, the plumbing a flood leaves behind to fix is:",
    localFaqs: [
      {
        q: 'Can you repair flood-damaged plumbing without disturbing an old finished basement?',
        a: 'Yes. We work around original woodwork and finishes, replacing only the components a flood actually compromised and showing you the camera and gas-valve readings behind each call.',
      },
    ],
  },
  mariemont: {
    intro:
      'After a flood in Mariemont, we inspect and repair the plumbing the water left behind, from the homes around the village square out to the streets below it. Call (513) 586-5107.',
    relevance: [
      'Mariemont is a planned village laid out in the 1920s, and its Tudor homes carry nearly a century of plumbing. A flood in one of these basements soaks original galvanized supply lines, aging shutoffs, and cast-iron drains all at the same time.',
      'We handle the plumbing side of the recovery: confirming whether the water heater controls went under, running a camera down the old lateral for flood silt, and testing every shutoff and floor drain the water reached before you use the system again.',
    ],
    commonIntro:
      "In Mariemont's 1920s-era homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Will you match the care these historic homes need?',
        a: 'Yes. We repair flood-damaged plumbing in Mariemont without disturbing original features, and we replace only what the water actually ruined rather than upselling a gut.',
      },
    ],
  },
  cheviot: {
    intro:
      'After a flood in Cheviot, we inspect and repair the plumbing the water left behind before it goes back into service, from the two-families along Harrison Avenue out to the side streets. Call (513) 586-5107.',
    relevance: [
      'Cheviot is a dense west-side city of early-1900s homes and brick two-families, tightly packed with aging galvanized and cast-iron plumbing. In a two-family, one flooded basement often holds the water heater and shutoffs for both units.',
      'We check whether the shared water heater sat in the water, camera the old lateral for silt that would back up into either unit, and free the shutoff valves that seize after sitting submerged, so the recovery does not turn into a second backup.',
    ],
    commonIntro:
      "In Cheviot's dense early-1900s homes and two-families, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'My two-family shares one flooded basement — do both units need checking?',
        a: 'Usually yes, because the water heater, main shutoff, and lateral serving both sides often sit in the same low basement the flood reached. We inspect what the water actually touched.',
      },
    ],
  },
  covedale: {
    intro:
      'After a flood in Covedale, we inspect and repair the plumbing the water left behind, from the homes along Glenway and Cleves Warsaw out toward the Green Township edge. Call (513) 586-5107.',
    relevance: [
      'Covedale runs from early-1900s homes to mid-century houses near Green Township, many with clay or cast-iron sewer laterals already prone to roots. A flood packs those lines with silt on top of the root intrusion they already fight.',
      'We camera the lateral to tell silt from a collapse, check whether the water heater burners went under, and test the sump pump and shutoffs the water reached. If your home sits on a well out toward the township edge, floodwater in it needs testing before anyone drinks it.',
    ],
    commonIntro:
      "Across Covedale's older and mid-century homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'The flood came up through the sewer — how do you know if the line collapsed?',
        a: 'We camera the lateral. Flood silt that packs a line can be cleared, while a section crushed by the same water shows up on the camera as a break that needs digging, and we show you which one you have.',
      },
    ],
  },
  covington: {
    intro:
      'After a flood in Covington, we inspect and repair the plumbing the water left behind before it goes back on, from MainStrasse Village to the low ground of Licking Riverside. Call (513) 586-5107.',
    relevance: [
      'Covington sits across the Ohio from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside built on low ground where the Ohio and Licking Rivers meet. When the rivers come up, those 19th-century basements take river water, not clean water.',
      'River flooding contaminates whatever it touches, so we treat the water heater with submerged gas controls as a replacement, camera the old lateral for river silt, and test the sump pump and check valve before the next crest. Corroded shutoffs that sat in river mud get freed or replaced.',
    ],
    commonIntro:
      "In Covington's historic riverfront homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Does my Covington water and sewer permitting go through Cincinnati?',
        a: 'No. Covington is in Kentucky, so your water and sanitary service and any repair permits run through the city of Covington and Northern Kentucky’s own utilities, not Cincinnati or MSD. We work to those local requirements.',
      },
      {
        q: 'Is the tap water safe after the river floods my basement?',
        a: 'Follow any boil advisory your Northern Kentucky utility issues first. River water that reached the water heater or an open line inside the home means that equipment needs inspection before you rely on it again.',
      },
    ],
  },
  newport: {
    intro:
      'After a flood in Newport, we inspect and repair the plumbing the water left behind, from the Victorian streets of the East Row down to the Levee riverfront. Call (513) 586-5107.',
    relevance: [
      'Newport is a Northern Kentucky river city, and the East Row Historic District holds hundreds of 19th-century homes on original plumbing near low riverfront ground. When the Ohio rises, those basements fill with river water that soaks the water heater, the shutoffs, and the old drains together.',
      'We repair what the river left, not the mess it made. Submerged gas controls make the water heater unsafe to relight, so it gets replaced; the old lateral gets a camera for river silt; and the sump pump and seized shutoffs get tested and freed before you turn the water back on.',
    ],
    commonIntro:
      "In Newport's Victorian East Row homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Is Newport served by Cincinnati water and sewer?',
        a: 'No. Newport is in Kentucky, and its water, sanitary sewer, and repair permitting run through the city and Northern Kentucky’s own utilities rather than Cincinnati or MSD. We handle the work to those local rules.',
      },
    ],
  },
  bellevue: {
    intro:
      'After a flood in Bellevue, we inspect and repair the plumbing the river left behind before it goes back on, from the homes near Fairfield Avenue down to the riverbank streets. Call (513) 586-5107.',
    relevance: [
      'Bellevue is a compact Northern Kentucky river city of well-preserved late-1800s homes on tight streets near the water. High river water pushes into basements here through drains and low walls, soaking century-old galvanized and cast-iron plumbing.',
      'Our part is the plumbing left behind: a water heater whose burners sat in river water gets replaced, the old lateral gets cameraed for silt, and the check valve and sump pump get tested so the next crest does not come straight back up the drain.',
    ],
    commonIntro:
      "In Bellevue's historic riverfront homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Do Bellevue repairs get permitted through Cincinnati?',
        a: 'No. Bellevue is a Kentucky city, so water and sewer service and any plumbing permits run through the city and Northern Kentucky’s own authorities, not Cincinnati or MSD. We work to those requirements.',
      },
    ],
  },
  'fort-thomas': {
    intro:
      'After a flood in Fort Thomas, we inspect and repair the plumbing the water left behind before it goes back on, from the homes around the old military reservation to the streets along Fort Thomas Avenue. Call (513) 586-5107.',
    relevance: [
      'Fort Thomas is a Kentucky city built on high ground around a former Army post, so its trouble is rarely the river; it is heavy rain overwhelming the basement drains and the sump pump meant to keep up. When one of those stately early-1900s basements fills, the pump is the part that carried the whole storm.',
      'We start at the sump pump and its check valve, because a pump that ran flat out through a flood can burn out its motor or its float and give no sign until the next storm, and a failed check valve lets the water it just moved run straight back down the discharge line. From there we check the water heater burners and gas valve, and the shutoffs and traps that corrode after sitting in dirty water. Where the water stayed shallow and clean, we will tell you there is little here to repair.',
    ],
    commonIntro:
      "In Fort Thomas' stately early-1900s homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Is Fort Thomas on Cincinnati water and sewer?',
        a: 'No. Fort Thomas is a Kentucky city, and its water, sewer, and plumbing permitting run through the city and Northern Kentucky’s own utilities rather than Cincinnati or MSD. We handle repairs to those local codes.',
      },
    ],
  },
  florence: {
    intro:
      'After a flood in Florence, we inspect and repair the plumbing the water left behind before it goes back into service, across neighborhoods around the Florence Mall area and beyond. Call (513) 586-5107.',
    relevance: [
      'Florence is the largest city in Boone County, a fast-growing mix of mid-century neighborhoods and newer subdivisions. Even in the newer homes, a flooded basement or crawlspace puts the water heater, the sump pump, and the main shutoff underwater at the same time.',
      'We inspect and repair that plumbing: a water heater with submerged gas controls gets replaced, the sump pump and check valve get tested before the next storm, and if your home runs on a well, floodwater in it needs testing before anyone drinks from the tap.',
    ],
    commonIntro:
      "Across Florence's mid-century and newer homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Does Florence plumbing permitting go through Cincinnati or MSD?',
        a: 'No. Florence is in Boone County, Kentucky, so water and sewer service and any repair permits run through the city and Northern Kentucky’s own utilities, not Cincinnati or MSD. We work to those local requirements.',
      },
    ],
  },
  erlanger: {
    intro:
      'After a flood in Erlanger, we inspect and repair the plumbing the water left behind, across the mid-century neighborhoods of this Kenton County city near the airport. Call (513) 586-5107.',
    relevance: [
      'Erlanger is an established Kenton County city of mid-century homes, most with the water heater and sewer cleanout down in a basement that a flash flood or a backed-up main can fill. Original supply lines and sewer laterals here are already at the age where they fail.',
      'We camera the lateral for the silt a flood drives into it, check whether the water heater burners went under, and free the shutoffs that seize after sitting in dirty water. If your home is on a well, floodwater in it needs testing before you drink it.',
    ],
    commonIntro:
      "Across Erlanger's mid-century homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Is Erlanger served by Cincinnati water and sewer?',
        a: 'No. Erlanger is in Kenton County, Kentucky, and its water, sewer, and plumbing permitting run through the city and Northern Kentucky’s own authorities, not Cincinnati or MSD. We handle the work to those codes.',
      },
    ],
  },
  mason: {
    intro:
      'After a flood in Mason, we inspect and repair the plumbing the water left behind before it goes back on, across the subdivisions near Kings Island and the older town center. Call (513) 586-5107.',
    relevance: [
      'Mason is a fast-growing Warren County city, mostly subdivisions built from the 1990s onward with the water heater, furnace, and sump pump in the basement. A flooded basement here puts newer equipment underwater just as thoroughly as old.',
      'We check what the water reached: submerged gas controls that make a water heater unsafe to relight, a sump pump and check valve that need testing before the next storm, and shutoffs corroding in dirty water. If your home is on a well, floodwater in it needs testing before you drink it.',
    ],
    commonIntro:
      "Across Mason's newer subdivisions and older town center, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Does Mason use Cincinnati MSD for sewer and permits?',
        a: 'No. Mason runs its own water and sewer utilities, and plumbing permits go through the city of Mason and Warren County, not Cincinnati or MSD. We work to those local requirements.',
      },
    ],
  },
  'west-chester': {
    intro:
      'After a flood in West Chester, we inspect and repair the plumbing the water left behind, across the subdivisions along the I-75 corridor. Call (513) 586-5107.',
    relevance: [
      'West Chester is a large Butler County community of subdivisions built from the 1990s onward, most with the mechanicals in a basement that storm water or a failed sump can fill. These homes are now old enough that water heaters and sump pumps are already near the end of their run.',
      'We inspect and repair what the flood left: a water heater whose burners sat underwater gets replaced rather than relit, the sump pump and check valve get tested before the next storm, and the shutoffs that sat in dirty water get freed or swapped.',
    ],
    commonIntro:
      "Across West Chester's newer subdivisions, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Is West Chester plumbing permitted through Cincinnati or MSD?',
        a: 'No. West Chester is a Butler County township with its own water and sewer utilities, and permits run through the township and county rather than Cincinnati or MSD. We handle repairs to those local codes.',
      },
    ],
  },
  pendleton: {
    intro:
      'After a flood in Pendleton, we inspect and repair the plumbing the water left behind in these 19th-century buildings and converted lofts before it goes back on. Call (513) 586-5107.',
    relevance: [
      'Pendleton is a small historic arts district against the eastern edge of Over-the-Rhine, full of restored 1800s Italianate buildings and converted condos sharing brittle cast-iron stacks and old risers. A flooded lower level here reaches shared water heaters and the base of stacks that serve several units.',
      'We check whether shared water heaters and gas controls went under, camera the old lateral for flood silt before one blockage backs up into multiple units, and free the shutoffs that seize in dirty water. In tightly built blocks, that inspection is what keeps one unit’s flood from becoming the neighbor’s.',
    ],
    commonIntro:
      "In Pendleton's 19th-century buildings and converted lofts, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'A shared building flooded — whose plumbing do you check?',
        a: 'We check the components the water actually reached, which in these buildings often means a shared water heater and the base of a common stack. We tell you plainly what belongs to the unit and what belongs to the whole building.',
      },
    ],
  },
  queensgate: {
    intro:
      'After a flood in Queensgate, we inspect and repair the plumbing the water left behind in these commercial and industrial buildings near the rail yards and the Mill Creek. Call (513) 586-5107.',
    relevance: [
      'Queensgate is the largely commercial and industrial district west of downtown, on low ground near the Mill Creek where flooding is a real risk. The buildings here run larger water heaters, bigger supply lines, and floor drains that a flood packs with silt and debris.',
      'We inspect and repair the plumbing side before the building reopens: commercial water heaters whose controls went under, floor drains and traps clogged with flood debris, and the backflow protection and shutoffs that sat in dirty water. This is not the dry-out; it is making the plumbing safe to use again.',
    ],
    commonIntro:
      "In Queensgate's commercial and industrial buildings, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Do you handle post-flood plumbing for commercial buildings?',
        a: 'Yes. Queensgate is mostly commercial and industrial, and we inspect and repair flood-damaged water heaters, floor drains, and shutoffs in those buildings as well as homes.',
      },
    ],
  },
  cuf: {
    intro:
      'After a flood in CUF, we inspect and repair the plumbing the water left behind in the older homes and student rentals packed against UC. Call (513) 586-5107.',
    relevance: [
      'CUF covers Clifton Heights, University Heights, and Fairview, dense hilltop streets of 19th- and early-1900s homes now largely subdivided into student rentals. A flooded basement here soaks a single water heater and shared stack that a whole subdivided house depends on.',
      'We check whether the shared water heater sat in the water, camera the old lateral for the silt that would back up into several units at once, and free the shutoffs that seize in dirty water, so a full house of tenants does not turn the water on into a second flood.',
    ],
    commonIntro:
      "In CUF's older student-rental housing near UC, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'A rental basement flooded before tenants move in — what should be checked?',
        a: 'The water heater the whole house shares, the main shutoff, and the lateral that serves every unit. We inspect what the water reached and camera the line so a full move-in does not back it up.',
      },
    ],
  },
  'camp-washington': {
    intro:
      'After a flood in Camp Washington, we inspect and repair the plumbing the water left behind, across the old worker housing and buildings down in the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Camp Washington sits low in the Mill Creek valley, and a flood here is usually not clean rain coming down but sewer backup pushing up through the floor drains. That dirty water carries silt, and it leaves the silt in the lateral on its way back out.',
      'So the first thing we do is camera the main, because a lateral packed with flood silt keeps passing a trickle and looks fine until the first full load of laundry backs the basement up again. We check whether the water heater burners went under, free the shutoffs that corroded in the backup water, and look at whether a backwater valve and sump setup would keep the next storm out of the floor drains.',
    ],
    commonIntro:
      "In Camp Washington's older valley homes and buildings, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'My Camp Washington basement backs up through the floor drain every heavy rain. What actually fixes that?',
        a: 'After we clear and camera the silted lateral to confirm it is not collapsed, a backwater valve on the line and a properly sized sump setup are what keep the low valley ground from sending the next backup up your floor drain. We size both to the house rather than fit the biggest one on the shelf.',
      },
    ],
  },
  'south-fairmount': {
    intro:
      'After a flood in South Fairmount, we inspect and repair the plumbing the water left behind, along Queen City Avenue in the Lick Run valley. Call (513) 586-5107.',
    relevance: [
      'South Fairmount sits in the Lick Run valley, an area rebuilt around a stormwater greenway after a long history of valley flooding. When water still gets into these older homes, it comes up through drains and packs the sewer lateral with silt.',
      'We camera that lateral to separate a clearable blockage from a collapsed section, check whether the water heater controls went under, and test the shutoffs and floor drains the water reached. This is the plumbing repair before you use the system, not the dry-out.',
    ],
    commonIntro:
      "In South Fairmount's older valley homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Why does my drain still run slow after the flood water went down?',
        a: 'Floods push silt into the lateral, which keeps passing a little water so it seems fine, then backs up the first time you run a washer. A camera shows whether it is silt to clear or a broken section.',
      },
    ],
  },
  'east-end': {
    intro:
      'After a flood in the East End, we inspect and repair the plumbing the river left behind, along the riverfront homes on Eastern Avenue below Columbia Parkway. Call (513) 586-5107.',
    relevance: [
      'When the Ohio rises into the East End, the water that fills these riverfront basements is river water, not a burst clean line; it comes in below Columbia Parkway through the drains and low walls of cottages and condos squeezed between the hillside and the river. That distinction changes what has to be replaced rather than dried.',
      'River water contaminates what it touches, so a water heater whose burners and gas controls went under is a replacement on those grounds alone, and we camera the lateral for the river silt that packs it on the way out. The sump pump and check valve get tested before the next crest, and the shutoffs that sat in river mud get freed or swapped.',
    ],
    commonIntro:
      "Along the East End's riverfront homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Is river water in my East End basement different from a clean-water flood?',
        a: 'Yes, and it changes the job. A clean supply line that bursts leaves water you can often dry out around; river water is contaminated, so anything porous it soaked and any gas control it reached gets replaced rather than salvaged. We inspect on that basis and tell you which of your components crossed that line.',
      },
    ],
  },
  'north-fairmount': {
    intro:
      'After a flood in North Fairmount, we inspect and repair the plumbing the water left behind, across the older hillside homes above the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'North Fairmount sits on the hillside above the Mill Creek valley, so its floods come down the grade as heavy rain rather than up from the river, pooling in the lowest basements. What the water finds down there is every gas connection in the house at floor level: the water heater, and often the furnace and dryer beside it.',
      'Submerged gas controls are the reason we do not just dry the room and relight. A control that sat in dirty water corrodes inside the housing where nobody can see it, so we check each appliance the flood reached and replace the ones whose controls went under. We also test the sump pump that carried the storm and free the shutoffs corroding in the leftover water.',
    ],
    commonIntro:
      "In North Fairmount's older hillside homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Water ran down the hill into my North Fairmount basement. Is the sump pump still good?',
        a: 'The pump that ran through the flood is often the one that quietly burned out doing it, and a hillside home leans on it hard. We test the pump and the check valve while the ground is still saturated, which is when a weak one shows itself, rather than letting the next storm be the test.',
      },
    ],
  },
  evanston: {
    intro:
      'After a flood in Evanston, we inspect and repair the plumbing the water left behind, across the early-1900s homes and apartments near Xavier. Call (513) 586-5107.',
    relevance: [
      'Evanston is an east-side neighborhood of early-1900s homes and apartment buildings near Xavier, some now student housing. A flooded basement in a subdivided house or apartment building soaks a shared water heater and the base of a stack that several units rely on.',
      'We check whether the shared water heater went under, camera the old lateral for the silt that would back up into more than one unit, and free the shutoffs that seize in dirty water before the building is back in normal use.',
    ],
    commonIntro:
      "In Evanston's early-1900s homes and apartments near Xavier, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'An apartment building basement flooded — what needs checking before reoccupying?',
        a: 'The shared water heater, the main shutoff, and the lateral that serves every unit. We inspect what the water reached and camera the line so a full building of tenants does not back it up.',
      },
    ],
  },
  'south-cumminsville': {
    intro:
      'After a flood in South Cumminsville, we inspect and repair the plumbing the water left behind, across the older homes among the Mill Creek valley industrial corridors. Call (513) 586-5107.',
    relevance: [
      'South Cumminsville is a small pocket of older homes set low among the industrial corridors of the Mill Creek valley, where a heavy rain drives sewer and drain backups up into basements. The water comes in through the floor drains and traps, and it brings debris with it.',
      'Those floor drains and traps end up packed with the grit the backup carried, so we clear them and then camera the lateral behind them, because the same silt that clogged the trap is sitting in the main. We check whether the water heater burners went under and free the shutoffs that seized in the dirty water before you run anything through the system.',
    ],
    commonIntro:
      "In South Cumminsville's older valley homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Why camera the sewer line instead of just running a snake through it?',
        a: 'A snake punches a hole through flood silt and moves on, so the line drains for a day and packs up again. A camera shows whether the lateral is merely silted, which a full clearing fixes, or whether a section cracked or collapsed under the same water, which needs a dig. You should know which one you are paying for before the work starts.',
      },
    ],
  },
  'english-woods': {
    intro:
      'After a flood in English Woods, we inspect and repair the plumbing the water left behind, across the older homes on the hilltop above the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'English Woods looks down on the Mill Creek valley from a quiet hilltop, so the water that floods a basement here has run down the grade as storm runoff rather than up from a sewer. It sheets in and pools at the low point, dropping the grit it picked up on the way into the floor drains.',
      'We clear the floor drains and traps the runoff loaded with debris, then check the water heater and gas controls if the base went under and the shutoffs that sat in the dirty water. Where the flood stayed shallow and never reached the heater or the valves, we will tell you there is little worth a repair bill and leave it there.',
    ],
    commonIntro:
      "In English Woods' older hilltop homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'How fast can you reach English Woods after a flood?',
        a: 'English Woods is within our west-side service area and we aim for same-day. When you call, tell us how high the water came and whether it reached the water heater or the shutoffs, so we arrive set up for a full inspection or a quick look, whichever the house actually needs.',
      },
    ],
  },
  'north-avondale': {
    intro:
      'After a flood in North Avondale, we inspect and repair the plumbing the water left behind, from the grand homes around Rockdale Avenue to the streets off Reading Road. Call (513) 586-5107.',
    relevance: [
      'North Avondale is a leafy neighborhood of grand early-1900s homes on large lots, most with their mechanicals in a finished basement. A flood there puts an original water heater, aging supply lines, and old cast-iron drains underwater in a space with expensive finishes above.',
      'We repair the plumbing the flood left, not the dry-out: a water heater with submerged gas controls gets replaced, the old lateral gets a camera for silt, and the shutoffs and traps that corrode in dirty water get freed before you use the system again.',
    ],
    commonIntro:
      "In North Avondale's grand early-1900s homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'Can you repair flood-damaged plumbing without tearing up a finished basement?',
        a: 'Yes. We replace only the components the water actually compromised and show you the camera and gas-valve readings behind each recommendation, rather than pushing a full tear-out.',
      },
    ],
  },
  millvale: {
    intro:
      'After a flood in Millvale, we inspect and repair the plumbing the water left behind, across this compact neighborhood down in the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Millvale is a small, compact neighborhood sitting low in the Mill Creek valley, where heavy rain drives the backup up through the basement drains. In the older homes here that backup water is dirty, and it leaves silt in the sewer lateral as it recedes.',
      'That silted lateral is the trap: it keeps passing enough water to seem clear, then backs the basement up the first time somebody runs a washer full of clothes. We camera the main to find it before that happens, check the water heater and gas controls where the base went under, and test the shutoffs the dirty water reached.',
    ],
    commonIntro:
      "In Millvale's valley homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'The water reached my Millvale water heater in the flood. Can it just be relit?',
        a: 'Not if the water covered the burner assembly and the gas control valve. Those corrode inside the housing where you cannot see it, and the manufacturers direct replacement rather than a relight, because a gas valve that fails after a soaking fails unsafely. If the water stayed below the base and never touched the burner, the unit is usually fine and we will say so.',
      },
    ],
  },
  'paddock-hills': {
    intro:
      'After a flood in Paddock Hills, we inspect and repair the plumbing the water left behind, across the homes near Paddock Road and the Norwood Lateral. Call (513) 586-5107.',
    relevance: [
      'Paddock Hills is a small, well-kept north-side pocket of early- and mid-1900s homes tucked between Paddock Road and the Norwood Lateral, and nearly all of them run the gas water heater off the basement floor. A flash flood or a backed-up drain puts that heater underwater before it reaches anything else.',
      'A heater whose burner and gas valve went under is a replacement, since the controls corrode inside the housing and cannot be trusted once dried. We confirm the water line on the tank before we call it either way, then move to the original galvanized supply lines and the shutoffs the dirty water reached. Where the water stayed shallow, we will tell you there is little to repair.',
    ],
    commonIntro:
      "In Paddock Hills' early- and mid-1900s homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'The water sat in my Paddock Hills basement overnight. Which shutoffs should you check?',
        a: 'The main shutoff first, then the fixture and appliance stops on the old galvanized supply. A valve that soaked in dirty water turns fine today and seizes solid a few weeks later, so the one you would grab in the next emergency is the one that will not move. We work each one now and free or replace what has stiffened.',
      },
    ],
  },
  'spring-grove-village': {
    intro:
      'After a flood in Spring Grove Village, we inspect and repair the plumbing the water left behind, across the older homes near Spring Grove Cemetery in the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Spring Grove Village wraps around the historic Spring Grove Cemetery and Arboretum on low Mill Creek valley ground, where a heavy rain brings a real risk of backup. In the older homes here the flood tends to push dirty water up through the drains, and that water carries silt into the sewer lateral.',
      'We camera the main before you use it, because a lateral this old can take on flood silt and it can also crack under the same water, and the two look nothing alike on the screen even though both back the basement up. We check whether the water heater burners went under and test the shutoffs the backup soaked before anything runs through the line.',
    ],
    commonIntro:
      "In Spring Grove Village's older valley homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'The flood backed up through my drains. Is the sewer line actually damaged or just dirty?',
        a: 'We camera the lateral to answer that. Silt packed in by the backup can be cleared, while a section crushed or cracked by the same event shows on the camera as a break that needs digging. We show you the footage so the difference is not a matter of taking our word for it.',
      },
    ],
  },
  linwood: {
    intro:
      'After a flood in Linwood, we inspect and repair the plumbing the water left behind, across the older riverside homes along Eastern Avenue near Lunken. Call (513) 586-5107.',
    relevance: [
      'Linwood is a small east-side neighborhood pressed against the river bottoms along Eastern Avenue near Lunken Airport, low enough that high water pushes into basements and crawlspaces. When it does, it is river water that comes in, not a clean line letting go.',
      'That water is contaminated, so we camera the lateral for the river silt it drives in and treat any water heater whose burners went under as a replacement rather than a relight. The sump pump and check valve get tested before the next high water, and the shutoffs that sat in river mud get freed or swapped.',
    ],
    commonIntro:
      "In Linwood's older riverside homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'The river bottoms flooded my Linwood home. Is the tap water safe, and can the next one be kept out?',
        a: 'Follow any boil advisory your utility issues first; river water that reached the water heater or an open line inside the house means that equipment needs inspection before you rely on it. For the next high water, we can fit a backwater valve suited to riverside homes near Lunken so the crest does not push straight back up the drain.',
      },
    ],
  },
  'bond-hill': {
    intro:
      'After a flood in Bond Hill, we inspect and repair the plumbing the water left behind, across the older and mid-century homes along Reading Road. Call (513) 586-5107.',
    relevance: [
      'Bond Hill is a north-side neighborhood of early-1900s and mid-century homes along Reading Road, most with the water heater, main shutoff, and sewer cleanout in a basement that storm water or a backed-up drain can fill.',
      'We check what the water reached: burners and gas controls that make a heater unsafe to relight, the old lateral that a flood silts, and the shutoffs that corrode in dirty water. Where the water stayed shallow and clean, we will say so rather than send a truck.',
    ],
    commonIntro:
      "Across Bond Hill's older and mid-century homes, the plumbing a flood leaves behind is:",
    localFaqs: [
      {
        q: 'How soon after a flood should I have the plumbing checked?',
        a: 'Before you resume normal water use. Running a full household load through a system with a silted main or a submerged water heater turns a repairable problem into a second flood, this time from the inside.',
      },
    ],
  },
};
