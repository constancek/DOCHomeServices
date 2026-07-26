export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro:
      "Basement filling in a Villages of Roll Hill building, on the hilltop above the Mill Creek valley? Cut the power to the flooded level first, then our licensed plumbers trace which failure let the water in. Call (513) 586-5107.",
    relevance: [
      "Villages of Roll Hill (ZIP 45225) is a west-side hilltop community of multi-unit apartment buildings, and up here above the valley a flooded lower level is rarely groundwater. It is far more often a supply line that split behind a wall or in a ceiling and ran unseen, because one riser feeds several stacked units and a single burst can drop water through all of them.",
      "We find the actual source before we quote, since water on a shared floor tells you nothing about where it came from. We isolate the burst riser or branch, replace the split section, and pressure-test it before the building water goes back on. If the water turns out to be coming in at the foundation instead of down a pipe, that is a drainage job for the building, not a plumbing repair, and we will tell you so rather than sell you one.",
    ],
    commonIntro: "In the multi-unit buildings of Roll Hill, the failure behind a flooded lower level is most often:",
    localFaqs: [{ q: "One unit flooded in my Roll Hill building — how do you find which pipe failed without opening every wall?", a: "We start at the unit above the water and work the riser it shares, reading where the line is wet and where it is dry. That narrows a split to one section before anything is opened, so we are not guessing across the whole stack." }],
  },
  'east-westwood': {
    intro:
      "Water across your East Westwood basement, on the slope down toward the Mill Creek valley? Kill the power to that level before you step in, then our licensed plumbers find what let it flood. Call (513) 586-5107.",
    relevance: [
      "East Westwood (ZIP 45211) sits on the grade between Westwood and the valley, in early- and mid-1900s homes where the water heater stands at the low corner of a hillside basement. When one of those older tanks rusts through at the base, it empties across the floor and pools deepest right where it stands, which is why a failed heater can read at first like the whole basement flooded from outside.",
      "We diagnose before we quote: a tank that let go at the seam leaves a clean puddle radiating from its base, and that is a different repair from a drain or a supply line. We replace the failed heater, check the shutoff and connections the water reached, and clear the floor drain the flood ran toward. If instead the water is seeping in at the wall base every heavy rain, the tank is fine and the problem is drainage outside the house, which is not our call to make and not our repair to sell.",
    ],
    commonIntro: "In East Westwood's hillside basements, the failure behind a flooded floor is most often:",
    localFaqs: [{ q: "The water in my East Westwood basement pooled around the heater — does that mean the heater flooded it?", a: "Often, yes. A tank that rusts through at the base empties from the bottom and pools around itself. We confirm it by finding a dry supply line and drain before we replace the heater, so you are not paying to fix a tank that was only a victim of the flood." }],
  },
  'western-hills': {
    intro:
      "Basement flooding at a Western Hills home near Western Hills Plaza or off Glenway Avenue? Our licensed plumbers trace which line failed before anyone quotes a repair. Call (513) 586-5107.",
    relevance: [
      "Western Hills (ZIP 45211) runs from early-1900s through mid-century homes around the Plaza and Glenway, many still on the original clay or cast-iron drain lines buried under the slab. When one of those old lines cracks or pulls apart at a joint, waste and groundwater push up through the floor around the drain rather than down it, and the basement floods from below with no burst pipe in sight.",
      "We camera the under-slab drain rather than guess, because water coming up through the floor is a different failure from water coming down a wall, and only one of them is a broken pipe. We locate the crack or separated joint, open the slab at that point, and repair the line instead of clearing it over and over. If the camera shows the drain intact and the water is groundwater pushing up through the slab, that is a waterproofing and drainage problem, and we will say so.",
    ],
    commonIntro: "Across Western Hills' older homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "Water came up through the floor in my Western Hills basement, not down a wall — what does that mean?", a: "Usually a cracked or separated drain line under the slab, or groundwater finding the same path. The sewer camera tells us which. If it is the pipe, we open the slab at the break and repair it; if it is groundwater, the fix is outside the house." }],
  },
  'california': {
    intro:
      "The Ohio River or the sewer has backed into your California basement along Kellogg Avenue near Riverbend? That water is contaminated, so cut the power to the flooded level and call before you touch it. Call (513) 586-5107.",
    relevance: [
      "California (ZIP 45230) sits on low riverfront ground along Kellogg Avenue, at the far-east edge of the city near Riverbend and the old Coney Island grounds. Down this low a basement rarely floods from a burst pipe; it floods when the rising Ohio River pushes back up the sewer main and out through the floor drain, bringing sewage with it.",
      "How the water got in decides everything, so we trace that before anything else: a backup through the drain is a contamination job first and a plumbing repair second. We camera the silted main, run water to watch the floor drain under real flow, and fit a backwater valve sized for a riverfront lot so the next high water stays in the sewer where it belongs. What we cannot do is hold back the river. If it came over the ground and through the walls rather than up the drain, that is flood mitigation, and we will say so instead of selling you a pump.",
    ],
    commonIntro: "Along California's riverfront homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "My California basement backs up through the floor drain when the river is high — can a valve stop it?", a: "A backwater valve sized for a riverfront lot stops the sewer from pushing back up the drain, which is how these basements flood most often. It cannot hold back river water coming over the ground, so we check which one you are actually facing before fitting anything." }],
  },
  'carthage': {
    intro:
      "Flooded basement at a Carthage home off Vine Street near the Hamilton County Fairgrounds? Our licensed plumbers trace the failure that let the water in before quoting the fix. Call (513) 586-5107.",
    relevance: [
      "Carthage (ZIP 45215) is a former village built up along Vine Street in the early 1900s, and its homes run on aging galvanized supply and old gas water heaters set low in the basement. A tank of that age rusts through at the base, and because it sits on the floor it empties across the whole slab, which reads as a flood until you find the source.",
      "We diagnose first, because a failed heater, a burst supply line, and a backed-up drain leave the same puddle and need three different repairs. We replace the heater that let go at the base, check the corroded shutoffs the water reached, and confirm the floor drain is clear before turning anything back on. If the water is coming in at the wall base after rain and the plumbing is dry, that is drainage outside the house and not a job we will bill you for.",
    ],
    commonIntro: "In Carthage's older homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "How soon after finding water in my Carthage basement should I call?", a: "Before you run any more water through the house. If the source is a split line or a backing-up drain, every load of laundry adds to the flood, so tracing it early is what keeps a fixable problem small." }],
  },
  'winton-hills': {
    intro:
      "Water in a lower level in Winton Hills, near Winton Road? Cut the power to the flooded floor, then our licensed plumbers find which line failed. Call (513) 586-5107.",
    relevance: [
      "Winton Hills (ZIP 45232) mixes multi-unit housing with industrial ground near Winton Road, and in stacked buildings a flooded floor is most often a supply line that split behind a wall and ran unseen. One riser feeds several units, so a single burst upstairs can drop clean water through the floors below long before anyone notices the source.",
      "We trace the burst before we quote, reading where the riser is wet and where it is dry so we are not opening every wall. We replace the split section and pressure-test it, then check the shutoffs on the units the water reached. If the lower level is instead taking water in at the foundation, that is a drainage problem for the building rather than a pipe repair, and we will not dress it up as one.",
    ],
    commonIntro: "In the buildings of Winton Hills, the failure behind a flooded floor is most often:",
    localFaqs: [{ q: "Clean water came through a ceiling into a lower unit in Winton Hills — is that plumbing?", a: "Clean water from above is almost always a split supply line in the wall or ceiling, not groundwater. We follow the riser to the break and replace that section rather than guess at the whole stack." }],
  },
  'roselawn': {
    intro:
      "Flooded basement at a Roselawn home along Reading Road? Our licensed plumbers find the failure behind the water before pricing the repair. Call (513) 586-5107.",
    relevance: [
      "Roselawn (ZIP 45237) is a north-side neighborhood of mid-century single-family homes and older apartments along Reading Road. Homes of that era are now at the age where a water heater rusts through at the base, and a tank standing on the basement floor empties across the whole slab when it goes.",
      "We diagnose the source first, because the puddle from a failed heater looks identical to one from a burst line or a backed-up drain. We replace the heater that let go, check the connections and shutoff the water reached, and clear the floor drain the flood ran toward. If the basement takes water at the wall base every heavy rain and the plumbing is sound, that is a drainage and grading problem outside, and a waterproofing contractor is the right call rather than us.",
    ],
    commonIntro: "Across Roselawn's mid-century homes and apartments, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "How fast can you get to a flooded basement in Roselawn?", a: "Roselawn is well within our north-side area along Reading Road, and we are on call 24/7 with same-day service. Cut the power to the flooded level before you go down, and leave the diagnosis to us." }],
  },
  'mount-airy': {
    intro:
      "Basement taking water at a Mount Airy home near Mount Airy Forest? Before you pay a plumber, our team confirms whether it is even a plumbing failure. Call (513) 586-5107.",
    relevance: [
      "Up beside Mount Airy Forest (ZIP 45239), one of the largest city parks in the country, the wooded streets run over high, hilly ground where a hard rain sheets off the slopes and presses against the foundations below. A basement that floods here after a storm, with water weeping in at the wall base or rising through the slab, is usually groundwater rather than a broken pipe.",
      "We diagnose before we sell anything, and on this terrain the honest answer is often that the failure is not plumbing at all. If the supply lines and the water heater are dry and the water is coming through the foundation, the fix lives outside the house — grading, gutters, and footer drainage — and a waterproofing contractor is the right call, not us. Where we do find a plumbing source, a split line or a backed-up drain, we repair it; where we do not, we say so plainly and save you a pump you did not need.",
    ],
    commonIntro: "Across Mount Airy's hilltop homes near the forest, the water in a basement is most often:",
    localFaqs: [{ q: "My Mount Airy basement floods at the walls every big storm — is that a plumbing job?", a: "Usually not. Water in at the wall base after rain, with the pipes dry, is groundwater running off the high ground, which is a drainage and waterproofing problem outside the house. We confirm the plumbing is sound so you are not paying us to fix the wrong thing." }],
  },
  'hartwell': {
    intro:
      "Basement flooding at a Hartwell home on one of its tree-lined streetcar-era streets? Our licensed plumbers trace the failure before anyone quotes a repair. Call (513) 586-5107.",
    relevance: [
      "Hartwell (ZIP 45215) grew as a streetcar suburb, and its Victorian and early-1900s homes still drain through the original clay and cast-iron laterals out to the main. Those old lines fill with roots and silt, and when one chokes, the next load of water has nowhere to go but back up the basement floor drain and out across the floor.",
      "We camera the lateral rather than snake it blind, because a drain that backs up over and over is telling you the line is broken or root-bound, not merely dirty. We locate the blockage, clear or repair it, and test the drain under real flow before we call it done. If the water is coming in at the wall instead of up the drain, that is groundwater and a drainage question, and we point you to the right trade rather than take the job.",
    ],
    commonIntro: "In Hartwell's Victorian and early-1900s homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "The floor drain in my Hartwell basement backed up and flooded it — is that the sewer?", a: "Water coming up out of the floor drain, often with a smell, is a blocked or broken sewer lateral, not a leak inside the house. We camera the line to see whether it is roots we can clear or a collapsed section that needs repair." }],
  },
  'kennedy-heights': {
    intro:
      "Water in the basement at a Kennedy Heights home up on the hilltop near the arts center? Cut the power to that level, then our licensed plumbers find the line that failed. Call (513) 586-5107.",
    relevance: [
      "Kennedy Heights (ZIP 45213) began as a Victorian-era resort community and keeps large early-1900s homes on its east-side hilltop. A century of original supply lines means a corroded pipe can split behind a wall or under the first floor and run clean water down into the basement for hours before it is found.",
      "We trace the split before we quote, following the wet line back to the break so we open one wall instead of several. We replace the failed section, pressure-test it, and check the shutoffs the water reached. Because the ground here sits high, a flooded basement is rarely groundwater — but if the water is coming through the foundation rather than down a pipe, we will tell you it is a drainage job and not bill it as plumbing.",
    ],
    commonIntro: "In Kennedy Heights' historic hilltop homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "Clean water is running down into my Kennedy Heights basement — where is it coming from?", a: "Clean water from above is almost always a split supply line in a wall or ceiling. We follow it to the break rather than open the whole run, replace that section, and pressure-test before the water goes back on." }],
  },
  'st-bernard': {
    intro:
      "Flooded basement in St. Bernard, near the Ivorydale complex? Our licensed plumbers trace which line failed before anyone prices the fix. Call (513) 586-5107.",
    relevance: [
      "St. Bernard (ZIP 45217) is its own city, surrounded on every side by Cincinnati and built up around the Procter & Gamble Ivorydale works, with a dense grid of early-1900s homes on small valley lots. Those homes sit over original cast-iron drains under the slab, and on low ground a line that cracks or pulls apart at a joint lets water push up through the floor instead of draining away.",
      "We camera the under-slab drain to find the break rather than clearing the same pipe every few months. We open the slab at the crack, repair the line, and test it under flow. Because St. Bernard runs its own sewer system, separate from Cincinnati's, a repair that ties into the main is permitted through the city itself, which is worth knowing before anyone opens a slab. If the camera shows the drain sound and the water is groundwater rising through it, that is waterproofing, not a pipe we can fix.",
    ],
    commonIntro: "In St. Bernard's dense, early-1900s homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "Does a sewer repair in St. Bernard need a permit from the city, not Cincinnati?", a: "Yes. St. Bernard is its own municipality with its own sewer system, so a repair that ties into the main is permitted through St. Bernard rather than Cincinnati. We handle that permit as part of the job." }],
  },
  'elmwood-place': {
    intro:
      "Basement backing up in Elmwood Place, down on the Mill Creek valley floor? That water is contaminated, so cut the power to the level and call before you wade in. Call (513) 586-5107.",
    relevance: [
      "Down on the low valley floor north of the city, Elmwood Place (ZIP 45216) packs its early-1900s homes close together with little fall to the sewer. A hard rain overloads that sewer and drives it back up through the basement floor drain, so the water that floods a basement here has almost always come up the drain, not down a pipe.",
      "A sewer backup is a health problem before it is a plumbing one, so we confirm the water came up the drain first, then clear the silted main and test it under real flow. We fit a backwater valve sized for this low ground, permitted through the village, since Elmwood Place runs its own sewer and permitting. If the water is groundwater coming through the walls instead, that is a drainage job, and we will name it rather than paper over it.",
    ],
    commonIntro: "In Elmwood Place's dense valley homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "The water that came up in my Elmwood Place basement is sewage — is it safe to be down there?", a: "No. A sewer backup carries bacteria, so stay off the flooded level once the power is cut and leave the standing water to us and a remediation crew. We stop the source and clear the line; cleaning contaminated water is its own trade, and we will point you to it." }],
  },
  'delhi-hills': {
    intro:
      "Flooded basement at a Delhi Hills home on the hillside above the Ohio River? Our licensed plumbers find why the water beat the sump pump before anyone quotes. Call (513) 586-5107.",
    relevance: [
      "Delhi Hills (ZIP 45233) climbs the west-side slopes in Delhi Township above the Ohio River, an area with deep roots in greenhouse growing, its mid-century homes set on hilly streets. Houses on this grade lean on a sump pump to move the groundwater the hillside drives at the foundation, and when the pump, its float, or its check valve gives out, the pit overflows and the basement floods in the next heavy rain.",
      "We diagnose the pump before we replace it, because a seized motor, a stuck float, and a check valve that lets pumped water fall straight back each flood a basement the same way and each needs a different fix. We load-test the pump, camera the discharge line for a block, and add a battery backup where a power cut was what let you down. Where the water comes through the foundation faster than any pump could move it, that is exterior drainage, and we will say so rather than sell you a bigger pump.",
    ],
    commonIntro: "Across Delhi Hills' hillside homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "My Delhi Hills sump pump ran through the storm and the basement still flooded — why?", a: "Usually the pump could not keep up, the discharge was blocked so the water came straight back, or the float or check valve failed partway through. A load test on the pump and a camera on the discharge tell us which it was." }],
  },
  'golf-manor': {
    intro:
      "Water across the basement at a Golf Manor home? Our licensed plumbers trace the failure that let it in before pricing a repair. Call (513) 586-5107.",
    relevance: [
      "Golf Manor (ZIP 45237) is a small village surrounded by Cincinnati on the north side, a compact grid of modest mid-century homes. Those homes are now at the age where a basement water heater rusts through at the base, and a tank on the floor empties across the whole slab when it finally goes.",
      "We diagnose the source before we quote, since a failed heater leaves the same puddle as a burst line or a backed-up drain. We replace the heater that let go and check the shutoff and connections the water reached. Golf Manor is its own municipality, so where a repair ties into the sewer we permit it through the village rather than Cincinnati. If the water is seeping in at the walls after rain, though, that is drainage outside the house and not a plumbing repair.",
    ],
    commonIntro: "In Golf Manor's mid-century homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "Is a sewer or drain permit in Golf Manor issued by the village or by Cincinnati?", a: "By the village. Golf Manor is its own municipality surrounded by Cincinnati, so a repair that ties into the main is permitted through Golf Manor. We take care of that permit." }],
  },
  'fairfax': {
    intro:
      "Flooded basement at a Fairfax home along Wooster Pike near Mariemont? Cut the power to that level, then our licensed plumbers find the line that failed. Call (513) 586-5107.",
    relevance: [
      "Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. In houses of that age a corroded supply line can split behind a wall and run clean water down into the basement for hours, flooding it with no storm and no backed-up drain in sight.",
      "We trace the split before we quote, following the wet line to the break so one wall comes open instead of the whole run. We replace the failed section, pressure-test it, and check the shutoffs the water reached. Fairfax is its own village, so any repair that ties into the sewer is permitted through Fairfax rather than Cincinnati, which we handle. Clean water with dry ground outside is a pipe; water in at the walls after rain is drainage, and we will tell you which you have.",
    ],
    commonIntro: "In Fairfax's older homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "Does a plumbing repair that ties into the sewer in Fairfax need a village permit?", a: "Yes. Fairfax is its own municipality, so a repair that connects to the main is permitted through the village rather than Cincinnati. We pull that permit as part of the job." }],
  },
  'mack': {
    intro:
      "Basement flooding at a Mack home in Green Township with no storm to blame? Our licensed plumbers trace the line that split before anyone quotes the fix. Call (513) 586-5107.",
    relevance: [
      "Mack (ZIP 45248) is an established Green Township community of mid-century and newer single-family homes on the west side. Even the newer houses here are old enough for a supply line or a fitting to corrode from the inside and split, and a pressurized line stays under pressure rain or shine, so it can run water across a basement floor for hours on a dry day.",
      "We follow the water back to the split before we quote, reading where the run is wet and where it is dry so one wall comes open instead of the whole ceiling. We shut and isolate the line, replace the failed section, and pressure-test the run before the water goes back on. If instead the basement is taking water at the walls after heavy rain and the plumbing holds pressure, that is exterior drainage, and a waterproofing contractor is the right call, not us.",
    ],
    commonIntro: "Across Mack's homes in Green Township, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "My Mack basement flooded but it had not rained — where is the water from?", a: "A flood with dry ground outside almost always rules out groundwater and points at plumbing, most often a split supply line, a failed water heater, or a backed-up drain. We trace which one before quoting rather than guessing." }],
  },
  'monfort-heights': {
    intro:
      "Flooded basement at a Monfort Heights home in Green Township? Our licensed plumbers trace the failure before pricing a repair. Call (513) 586-5107.",
    relevance: [
      "Monfort Heights (ZIP 45247) is a settled Green Township suburb of mid-century single-family homes. Homes from that era drain through sewer laterals now decades old, and when roots or a sag block one, the next load of water backs up through the basement floor drain and out across the floor.",
      "We camera the lateral instead of snaking it blind, because a drain that floods the basement again and again is telling you the line is broken or root-bound, not simply dirty. We clear or repair the blockage and test the drain under real flow. If the water is coming in at the wall base rather than up the drain, that is groundwater and a drainage job, and a waterproofing contractor is the right call, not us.",
    ],
    commonIntro: "Across Monfort Heights' mid-century homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "The same floor drain keeps backing up and flooding my Monfort Heights basement — why does clearing it not hold?", a: "A drain that backs up repeatedly is usually a lateral broken or full of roots, not just dirty. Clearing buys a few weeks; the camera shows whether it needs a spot repair or a lining to actually stop." }],
  },
  'bridgetown': {
    intro:
      "Water spreading across a Bridgetown basement floor in Green Township? Our licensed plumbers find the failure that let it in before anyone quotes. Call (513) 586-5107.",
    relevance: [
      "The water on a Bridgetown basement floor is often clean and pooling deepest in one corner, not storm-brown at the walls. Bridgetown (ZIP 45248) is a Green Township community of mid-century and newer homes, and in that range the basement water heater is usually the oldest thing down there; a tank that rusts through at the base empties across the slab with no storm involved.",
      "We read the puddle before we quote, because a failed heater, a split supply line, and a backed-up drain all leave water on the floor and need three different repairs. A tank that let go at the seam pools around its own base, so we confirm the supply line and drain are dry, then replace the heater and the shutoff the water reached. If the basement takes water at the walls every heavy rain instead, that is drainage outside, and we will point you to the right trade rather than sell you a pump.",
    ],
    commonIntro: "Across Bridgetown's homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "The water on my Bridgetown basement floor is clean and near the heater — what is it?", a: "Clean water pooling around the base of the tank is usually the heater rusting through at the bottom. We confirm the supply line and drain are dry before replacing it, so you are not paying to fix a heater that only caught the flood." }],
  },
  'finneytown': {
    intro:
      "Flooded basement at a Finneytown home in Springfield Township? Our licensed plumbers find why the water beat the sump pump before anyone prices the fix. Call (513) 586-5107.",
    relevance: [
      "Finneytown (ZIP 45231) is a settled Springfield Township community of mid-century single-family homes on the north side. Basements of that age keep groundwater out with a sump pump, and after a few decades the pump, its float, or its check valve wears through; when one lets go, the pit overflows and the basement floods on the next hard rain.",
      "We diagnose the pump before we replace it, because a seized motor, a stuck float, and a check valve that lets water fall back each flood a basement the same way. We pour a bucket into the pit to watch it kick on, load-test it under real flow, camera the discharge for a block, and fit a battery backup where a power cut was what let you down. Where the foundation takes on more water than any pump could move, the answer is exterior drainage, and we will say so.",
    ],
    commonIntro: "Across Finneytown's mid-century homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "How do I know if my Finneytown sump pump is about to fail before it floods the basement?", a: "Listen for a pump that short-cycles or runs long, and pour a bucket into the pit to see it kick on. If it hesitates, hums, or the water falls back after it stops, the pump or check valve is near the end. We can test it before a storm proves the point." }],
  },
  'amberley': {
    intro:
      "Water in a lower level at an Amberley Village home on one of its wooded lots? Cut the power to that level, then our licensed plumbers trace the line that failed. Call (513) 586-5107.",
    relevance: [
      "Amberley Village (ZIP 45237) is an affluent north-side village of large homes on big, wooded lots along winding streets. Larger houses carry longer runs of supply pipe through more walls and ceilings, and a line that splits in a far corner can flood a lower level for hours before anyone in a house that size notices.",
      "We trace the split before we quote, reading the wet run back to the break so we open one section rather than chase it across the house. We replace the failed line, pressure-test it, and check the shutoffs the water reached. If the water is coming in through the foundation rather than down a pipe, that is a drainage question for a lot this size, and we will name it rather than bill it as plumbing.",
    ],
    commonIntro: "In Amberley's large homes, the failure behind a flooded lower level is most often:",
    localFaqs: [{ q: "A lower level flooded in my Amberley home and I cannot find the source — can you?", a: "Yes. In a large house the split is often far from the water, so we read where the lines are wet and dry to trace it back to one section instead of opening walls at random." }],
  },
  'arlington-heights': {
    intro:
      "Basement backing up in Arlington Heights, down on the Mill Creek valley floor? That water is contaminated, so cut the power to the level and call before you step in. Call (513) 586-5107.",
    relevance: [
      "Arlington Heights (ZIP 45215) is its own small village on the low valley floor north of the city, a compact grid of older homes. On ground this low a hard rain overloads the sewer, which surcharges back up through the basement floor drain, so a flooded basement here has usually come up the drain rather than down a pipe.",
      "We work out whether the surcharge is the street's or a blockage of your own before quoting, testing your lateral against the main so the repair matches the fault. We clear the silted line, test the drain under real flow, and fit a backwater valve sized for this low ground, permitted through the village, since Arlington Heights runs its own municipality. If the water is groundwater through the walls instead, that is a drainage problem we will name rather than cover over.",
    ],
    commonIntro: "In Arlington Heights' older valley homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "When my Arlington Heights basement backs up, is it my lateral or the city main?", a: "Either can do it, so we camera your lateral and check it against the main under flow. If the blockage is yours, we clear or repair it; if the main is surcharging in heavy rain, a backwater valve keeps it from pushing back into your basement." }],
  },
  'north-college-hill': {
    intro:
      "Flooded basement in North College Hill, just north of College Hill? Our licensed plumbers trace which line failed before anyone prices the repair. Call (513) 586-5107.",
    relevance: [
      "North College Hill (ZIP 45239) fills a dense grid of early- and mid-1900s homes just north of College Hill. Those homes sit over original cast-iron drains under the slab, and after decades a line cracks or separates at a joint, letting water push up through the floor around the drain rather than run away down it.",
      "We camera the under-slab drain to find the exact break instead of clearing the same pipe over and over, then open only the concrete over it and repair the line. North College Hill is its own city, so a repair that ties into the sewer is permitted through the city rather than Cincinnati, and we handle that. If the camera shows the drain sound and the water is groundwater rising through the slab, the fix is waterproofing, not plumbing.",
    ],
    commonIntro: "In North College Hill's older homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "Do you have to break up my whole North College Hill basement floor to fix a drain under the slab?", a: "No. We camera the line first to pin the break to one spot, then cut only the concrete over it. Opening the whole floor is the guesswork route, and the camera is there to avoid it." }],
  },
  'newtown': {
    intro:
      "Basement flooding at a Newtown home on the low ground near the Little Miami River? The water may be contaminated, so cut the power to the level and call before you wade in. Call (513) 586-5107.",
    relevance: [
      "Newtown (ZIP 45244) sits on the river-bottom flats near the Little Miami, its older homes set low to the water. When the river rises or a hard rain overloads the sewer, the drain surcharges and pushes back up through the basement floor, so a flooded basement here has usually come up the drain rather than down a pipe.",
      "We follow the water to the lowest drain and check whether the surcharge is the sewer's or a blockage of your own, because a backup through the drain is a contamination job first and a plumbing repair second. We clear the silted main, test the drain under real flow, and fit a backwater valve suited to this low ground. What we cannot do is hold back the river; if the water came over the ground rather than up the drain, that is flood mitigation, not a plumbing fix.",
    ],
    commonIntro: "In Newtown's homes near the Little Miami, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "My Newtown basement floods in heavy rain even when the river is not high — is that the sewer?", a: "Often, yes. On this low ground a hard rain overloads the sewer and it backs up the floor drain, separate from the river. A backwater valve sized for the lot stops that, and we check which source you have before fitting one." }],
  },
  'turpin-hills': {
    intro:
      "When a Turpin Hills basement floods in Anderson Township, our licensed plumbers find why the water got past the sump pump before anyone quotes. Call (513) 586-5107.",
    relevance: [
      "A Turpin Hills basement usually floods on the storm the sump pump was meant to cover. Turpin Hills (ZIP 45244) is a suburban Anderson Township community of mid-century and newer homes, and those basements lean on a single pump to keep groundwater down; when the pump, its float, or its check valve fails, the pit overflows on the next heavy rain.",
      "We diagnose the pump before we replace it, because a seized motor, a stuck float, and a check valve that lets pumped water fall back each flood a basement the same way. We load-test the pump, camera the discharge for a block, and check whether the storm simply took the power out with it. If the foundation is taking water faster than any pump could move it, that is exterior drainage, and we will name it rather than sell you a bigger pump.",
    ],
    commonIntro: "Across Turpin Hills' homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "My Turpin Hills basement floods only when the power goes out in a storm — what fixes that?", a: "That is the sump pump losing power at the worst moment, and a battery backup covers exactly that case. We test the main pump first to be sure it is otherwise sound before adding the backup." }],
  },
  'silverton': {
    intro:
      "Water across a Silverton basement floor along Montgomery Road, with no storm behind it? Our licensed plumbers trace the failure that let it in before anyone prices the repair. Call (513) 586-5107.",
    relevance: [
      "Water on a Silverton basement floor with dry ground outside points indoors, not at the weather. Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with early- and mid-1900s homes where the basement water heater is often the oldest fixture standing; a tank that rusts through at the base empties across the slab with no storm to blame.",
      "We diagnose before we quote, because a failed heater, a burst line, and a backed-up drain leave the same water on the floor and call for three different repairs. We confirm which one by finding the dry lines and the wet tank, then replace the heater and the shutoff the water reached. If the basement instead takes water at the wall base every heavy rain, that is drainage outside, and a waterproofing contractor is the right call, not us.",
    ],
    commonIntro: "In Silverton's older homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "My Silverton water heater is old and in the basement — could it flood the place when it finally goes?", a: "Yes. An old tank tends to fail at the base and empty across the floor, and a slow rust weep often shows first. If yours is near the end, replacing it on your terms beats replacing it after it has flooded the basement." }],
  },
  'lockland': {
    intro:
      "Basement backing up in Lockland, down on the Mill Creek valley floor? That water is contaminated, so cut the power to the level and call before you wade in. Call (513) 586-5107.",
    relevance: [
      "Lockland (ZIP 45215) is a mill village of closely spaced older worker housing, built up around industry on the low valley floor north of the city. On ground this low a hard rain overloads the sewer, which pushes back up through the basement floor drain, so a flooded basement here has usually come up the drain rather than down a pipe.",
      "We confirm the backup came up the drain first, since sewer water is a contamination job before it is a plumbing repair, then clear the silted main and test it under real flow. We size a backwater valve to this low ground and permit it through the village, since Lockland runs its own sewer and permitting. If the water is groundwater through the walls instead, that is a drainage problem we will name rather than paper over.",
    ],
    commonIntro: "In Lockland's older valley homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "Will a backwater valve keep my Lockland basement from flooding again?", a: "For a sewer that surcharges in heavy rain, yes, a valve sized to this low ground closes when the main pushes back and keeps it out of your basement. It does not stop groundwater through the walls, so we confirm the drain is the source before fitting one." }],
  },
  'groesbeck': {
    intro:
      "Flooded basement at a Groesbeck home in Colerain Township? Our licensed plumbers find the failure that let the water in before quoting. Call (513) 586-5107.",
    relevance: [
      "Groesbeck (ZIP 45239) is a settled Colerain Township community of mid-century single-family homes on the northwest side. Homes of that era have basement water heaters now well past their prime, and a tank that rusts through at the base empties across the whole slab when it finally lets go.",
      "We diagnose the source before we quote, since the puddle from a failed heater looks the same as one from a split line or a backed-up drain. We replace the heater that let go and check the shutoff and connections the water reached. If the basement takes water at the walls after every heavy rain and the plumbing is dry, that is drainage outside the house, and we will point you to a waterproofing contractor rather than sell you a repair you do not need.",
    ],
    commonIntro: "Across Groesbeck's mid-century homes, the failure behind a flooded basement is most often:",
    localFaqs: [{ q: "The water in my Groesbeck basement is clean and around the water heater — is the heater the cause?", a: "Clean water pooling at the base of the tank is usually the heater rusting through at the bottom. We check that the supply line and drain are dry before replacing it, so you are not paying to fix a heater that only caught the flood." }],
  },
  'mount-healthy': {
    intro:
      "Water showing up in a Mount Healthy basement near the old town center? Our team confirms whether it is even a plumbing failure before you pay a plumber. Call (513) 586-5107.",
    relevance: [
      "Mount Healthy (ZIP 45231) is a historic small city on the north-side high ground, with an old town center and streets of early-1900s and mid-century homes. Up on this rise a basement that floods after a storm, with water seeping in at the wall base or up through the slab, is usually groundwater working against the foundation rather than a broken pipe.",
      "We diagnose before we sell anything, and on this ground the honest answer is often that the failure is not plumbing at all. If the lines and the water heater are dry and the water comes through the foundation, the fix is outside — grading, gutters, and footer drainage — and a waterproofing contractor is the right call, not us. Where we do find a plumbing source and the repair ties into the sewer, Mount Healthy is its own city, so we permit that work through the city rather than Cincinnati.",
    ],
    commonIntro: "In Mount Healthy's older homes, the water in a basement is most often:",
    localFaqs: [{ q: "How do you tell groundwater from a slow pipe leak in my Mount Healthy basement?", a: "We shut the water and watch: if the seepage keeps coming with the supply off, it is groundwater through the foundation and a drainage fix; if it stops, we have a pipe to trace. On this high ground it is usually groundwater, which we will not bill as a plumbing repair." }],
  },
};
