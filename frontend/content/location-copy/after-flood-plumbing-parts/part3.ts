export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro:
      'Villages of Roll Hill is mostly multi-unit apartment buildings, so after-flood plumbing here is shared. A flooded utility room submerges a bank of water heaters and their gas valves at once. We replace those units, camera the shared building drain for silt, and test every unit shutoff.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community of multi-unit apartment buildings, and the plumbing that matters most after a flood is shared. When a ground-floor utility room takes on water, the burners and gas control valves on a bank of water heaters sit submerged at once, and the building drain that serves every unit fills with silt at the same time.',
      'We do not relight a flooded water heater — we replace it, because a gas valve that sat underwater fails unsafely no matter how dry it looks. In these buildings we camera the shared main for the silt a flood packs in, test each unit shutoff for corrosion, and check every gas connection the water touched before a single tap is turned on.',
    ],
    commonIntro: 'In the multi-unit buildings of Roll Hill, the flood-left plumbing we inspect most often is:',
    localFaqs: [{ q: 'The utility room in my Roll Hill building flooded — do all the water heaters need replacing?', a: 'Any unit whose burner assembly and gas controls went underwater does, yes. We check each one at its base, condemn the ones that were submerged, and pressure-test the gas connections before the building water goes back on.' }],
  },
  'east-westwood': {
    intro:
      'In East Westwood’s hillside basements, floodwater follows the slope and pools deepest where the water heater and main shutoff sit, so post-flood plumbing starts at that low corner. A submerged heater gets replaced, galvanized lines and shutoffs get tested, and the floor drain gets cleared of silt.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the grade between Westwood and the Mill Creek valley, in early- and mid-1900s homes where the water heater and main shutoff sit at the low end of a hillside basement. Floodwater follows that slope and pools deepest exactly where those components live, so the burner and gas valve on an older heater are often the first things underwater.',
      'We start at the low corner where the flood settled. If the water heater base went under, it gets replaced rather than relit; the galvanized supply lines and shutoff valves that sat in dirty water get tested for the corrosion that seizes them, and the floor drain the flood drained through gets cleared of silt before it backs up on the next heavy rain.',
    ],
    commonIntro: "In East Westwood's hillside basements, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'The flood pooled at the downhill end of my East Westwood basement — is that where the plumbing risk is?', a: 'Usually, yes. On these slopes the water heater and shutoffs often sit at the low end where the water is deepest, so that is the first place we check for a submerged burner and seized valves before turning anything back on.' }],
  },
  'western-hills': {
    intro:
      'Flood silt in old clay laterals is the main job for after-flood plumbing in Western Hills, where early-1900s and mid-century homes around Glenway Avenue still run original lines. We camera the lateral rather than snake it blind, replace water heaters whose controls went under, and free seized shutoffs.',
    relevance: [
      'Western Hills (ZIP 45211) runs from early-1900s through mid-century homes around Western Hills Plaza and Glenway, many still on original galvanized supply lines and clay or cast-iron sewer laterals. Those old laterals are what a flood packs with silt, and a partially blocked line will pass a sink but back up the first time a washing machine drains.',
      'We camera the lateral rather than guess at it, because snaking a silted clay line blind is how people pay to clear the same pipe three times. We also replace any water heater whose controls sat underwater, free or replace the shutoff valves the dirty water seized, and check the fixture traps the flood filled before you run the house at full load.',
    ],
    commonIntro: "Across Western Hills' older and mid-century homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'My Western Hills drains ran slow after the flood — do I need the sewer camera?', a: 'If a flood reached your floor drains, yes. Silt settles in the old clay and cast-iron laterals out here and a slow drain is the warning. The camera tells us whether it is a blockage we can clear or a section that collapsed.' }],
  },
  'california': {
    intro:
      'California sits on low riverfront ground along Kellogg Avenue, so after-flood plumbing here treats every line the Ohio touched as contaminated. The water heater the river reached is replaced, traps and floor drains are flushed of silt, well water is tested for bacteria, and the sump pump is checked last.',
    relevance: [
      'California (ZIP 45230) sits on low riverfront ground along Kellogg Avenue near Riverbend, at the far-east edge of the city where high water comes off the Ohio River rather than out of a broken pipe. River water carries sewage and whatever it crossed on the way in, so a flooded lower level here is a contamination problem first and a plumbing problem second.',
      'We treat every fixture and line the river touched as contaminated until it is cleared and checked. The water heater the river reached is replaced rather than relit, the traps and floor drains packed with river silt are flushed, and on a home drawing from a well the water is tested for bacteria before anyone fills a glass. The sump pump and its check valve, the parts that worked hardest against the river, are the last things we confirm.',
    ],
    commonIntro: "Along California's riverfront homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'The river drained out of my California basement — can I drink the tap water now?', a: 'Not on the assumption that draining made it clean. On city water, follow any boil advisory the utility posts; on a well the river reached, wait for a bacteria test to come back clear. Either way the submerged water heater is replaced, not relit.' }],
  },
  'carthage': {
    intro:
      'Carthage homes along Vine Street run aging galvanized supply and cast-iron drains, and after-flood plumbing there usually starts with the silt a flood drives into that cast iron. We camera the main, replace any water heater whose gas controls went under, and test the shutoffs that seized.',
    relevance: [
      'Carthage (ZIP 45215) is a former village along Vine Street built up in the early 1900s, and its homes run on aging galvanized supply and cast-iron drains. Cast iron is exactly what a flood silts up, and the older gas water heaters here sit low enough that a basement flood submerges the burner and control valve.',
      'We camera the cast-iron main for the silt a flood drives into it, replace any water heater whose gas controls went underwater, and test the corroded shutoff valves that seize after sitting in dirty water. Nothing gets turned back on until the sewer line is confirmed clear, because a blocked main is a second flood waiting on the first load of laundry.',
    ],
    commonIntro: "In Carthage's older homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'How soon after a Carthage flood should the plumbing be checked?', a: 'Before you resume normal water use. Running a full household load through a silted main or a flooded water heater turns a fixable situation into a backup inside the house.' }],
  },
  'winton-hills': {
    intro:
      'Winton Hills post-flood plumbing is mostly the shared kind. In the multi-unit housing near Winton Road, a flooded utility room submerges several water heaters and gas valves together, so we replace those units, camera the shared main for silt, and pressure-test every gas connection the water touched.',
    relevance: [
      'Winton Hills (ZIP 45232) mixes multi-unit housing with industrial ground near Winton Road, and the plumbing hit hardest by a flood is the shared kind. A flooded utility room submerges several water heaters and their gas valves together, and the building drain that carries every unit silts up in one event.',
      'We replace the water heaters whose burners and controls sat underwater rather than relight a bank of unsafe units, camera the shared main for flood silt, and pressure-test the gas connections the water touched. In stacked housing that keeps one flooded utility room from becoming a gas problem across the building.',
    ],
    commonIntro: "In the homes and multi-unit buildings of Winton Hills, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'A shared utility room in Winton Hills flooded — is the gas safe?', a: 'Not until it is checked. Water heaters and appliance connections whose gas controls were submerged are not safe to relight. We replace the submerged units and pressure-test every gas connection the flood reached before the water goes back on.' }],
  },
  'roselawn': {
    intro:
      'Roselawn’s mid-century homes and apartments along Reading Road keep the water heater and main shutoff at basement grade, so after-flood plumbing here starts with the heater’s burner or elements. If the controls went under, it is replaced. Then we test soaked shutoffs, clear floor drains, and camera shared drains.',
    relevance: [
      'Roselawn (ZIP 45237) runs mid-century single-family homes and older apartment buildings along Reading Road. In both, the water heater and main shutoff sit at basement grade, and a flood that reaches that floor submerges the burner assembly on a gas unit or the elements on an electric one.',
      'We check the water heater at its base and replace it if the controls went under, because a flooded unit corrodes internally where nobody can see it. Then we test the supply lines and shutoff valves that sat in dirty water, clear the floor drains the flood packed with debris, and, in the apartments, camera the shared drain for silt before the units go back into use.',
    ],
    commonIntro: "Across Roselawn's mid-century homes and apartments, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'My Roselawn water heater still lights after the flood — do I still need it looked at?', a: 'Yes. A gas unit whose burner and control valve were underwater can still light and still be unsafe, because the corrosion is internal. Manufacturers direct replacement, not a relight, and we follow that.' }],
  },
  'mount-airy': {
    intro:
      'Storm runoff from Mount Airy’s wooded hills backs up through basement floor drains, carrying leaf debris and silt, so post-flood plumbing here begins at the drain and trap. We clear them, camera the line below, test the sump pump and check valve, and check any water heater the water reached.',
    relevance: [
      'Mount Airy (ZIP 45239) sits beside Mount Airy Forest on hilly, wooded streets, in mid-century homes where a hilltop storm drives runoff toward basement floor drains. When that water backs up through a drain instead of down it, it carries leaf debris and silt into the trap and the line below.',
      'We clear the floor drains and traps the flood packed with debris, camera the drain line for the silt a backup leaves behind, and check the sump pump and check valve that fought the storm. Any water heater the flood reached is replaced rather than relit, and the shutoff valves that sat in dirty water get tested for the corrosion that seizes them.',
    ],
    commonIntro: "Across Mount Airy's mid-century homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Storm water backed up through my Mount Airy floor drain — what needs checking?', a: 'The drain and trap it came through get cleared of the leaf debris and silt a backup carries, and we camera the line below to confirm it runs. We also test the sump pump, since that is the part that worked hardest during the storm.' }],
  },
  'hartwell': {
    intro:
      'Hartwell’s Victorian and early-1900s homes still run many original shutoffs, so after-flood plumbing there centers on valves that sat in dirty water and seized. We test every shutoff and supply line the flood touched, free or replace the stuck ones, replace a submerged water heater, and camera the drains.',
    relevance: [
      'Hartwell (ZIP 45215) is a streetcar suburb of Victorian and early-1900s homes, and many still run their original supply lines, shutoffs, and drains. Century-old valves are already stiff; a flood that leaves them sitting in dirty water finishes the job, and the main shutoff you need next time is the one that will not turn.',
      'We test every shutoff and supply line the flood touched and free or replace the ones that seized, because on original plumbing that is the difference in the next emergency. We also replace any water heater whose controls went under, and camera the old drains for the silt a flood packs into them before the house goes back to full use.',
    ],
    commonIntro: "In Hartwell's Victorian and early-1900s homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'My Hartwell home still has its original shutoff valves — did the flood ruin them?', a: 'It can. Old valves that sat in dirty floodwater seize, and you find out when you need one in an emergency. We test them after a flood and free or replace the ones that will not turn.' }],
  },
  'kennedy-heights': {
    intro:
      'Kennedy Heights homes are large, and post-flood plumbing in them covers long runs and often more than one water heater. We work the whole system, not just the heater you noticed: every submerged heater is replaced, soaked shutoffs and supply lines are tested, and the drains get a camera.',
    relevance: [
      'Kennedy Heights (ZIP 45213) began as a Victorian-era resort community on the east-side hilltop and keeps its large early-1900s homes, known now for the neighborhood arts center. A big old house means long plumbing runs and often more than one water heater, so a flood in a lower level touches far more of the system than it would in a small house, and most of that damage is out of sight.',
      'We work the whole system rather than the one heater you noticed. Every water heater the flood submerged is replaced instead of relit, the long runs of shutoff and supply line that sat in dirty water are tested for corrosion, and the drains are cameraed for silt so a large house does not back up the first time every fixture runs together.',
    ],
    commonIntro: "In Kennedy Heights' historic homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'How soon can you get to a Kennedy Heights home after a flood?', a: 'Kennedy Heights is well inside our east-side area and we aim for same-day arrival. A house you cannot safely run water in is an emergency, and the sooner the plumbing is checked the less a silted drain or a flooded heater turns into a second problem.' }],
  },
  'st-bernard': {
    intro:
      'St. Bernard is its own city around the Ivorydale complex, so after-flood plumbing repairs there go through its own building department. The dense early-1900s homes run galvanized supply and cast-iron drains, so we camera the drains for silt, replace submerged water heaters, and test seized shutoffs.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes on small valley lots. That tightly packed, century-old housing runs on galvanized supply and cast-iron drains, and cast iron is what a flood silts up while the burner on an old water heater sits underwater.',
      'We camera the cast-iron drains for flood silt, replace any water heater whose gas controls were submerged, and test the shutoffs the dirty water seized. Because St. Bernard is its own municipality, we pull work through the city’s own building department and confirm any permit its code requires before the water goes back on.',
    ],
    commonIntro: "In St. Bernard's dense, early-1900s homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Does after-flood plumbing work in St. Bernard go through the city or through Cincinnati?', a: 'Through St. Bernard. It is its own city with its own building department, water, and sewer, so gas and drain work carries a St. Bernard permit where the code calls for one. We handle that filing as part of the job.' }],
  },
  'elmwood-place': {
    intro:
      'In Elmwood Place, heavy rain pushes the sewer backward into these early-1900s homes, so after-flood plumbing starts at the floor drains and traps the backup packed with silt. We clear them and confirm the trap seals, camera the line, and replace any water heater the water submerged.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village on low Mill Creek valley ground north of the city, close enough to the water table that a hard rain pushes the sewer backward into the house. In its tightly spaced early-1900s homes, that backup fills the floor drains and traps with silt and debris before it ever reaches the fixtures upstairs.',
      'We start at the floor drains and traps the backup packed, clearing them out and confirming the trap seals before anything else runs. Then we camera the line for what a valley backup leaves behind and replace any water heater the water submerged, since a gas control valve that sat in dirty water is not safe to relight no matter how dry it looks.',
    ],
    commonIntro: "In Elmwood Place's dense valley homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Does the gas and drain work after an Elmwood Place flood get permitted through the village?', a: 'Yes. Elmwood Place is its own village with its own code, so the work carries a village permit where that code requires one. We confirm it with the village and file it as part of the job, not something left to you.' }],
  },
  'delhi-hills': {
    intro:
      'Delhi Hills sits above the Ohio River so after-flood plumbing in its mid-century homes starts at the low end of a walkout or hillside basement, where the water heater and shutoffs sit. A submerged heater is replaced, seized shutoffs get tested, drains get cleared, and wells get tested.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township above the Ohio River on hilly streets of established mid-century homes, an area with deep ties to greenhouse and floral growing. On that grade, a flood settles in the low end of a walkout or hillside basement, right where the water heater and shutoffs tend to sit.',
      'We check the water heater at its base and replace it if the burner and controls went under, because a flooded gas unit is not safe to relight. We test the supply lines and shutoffs the dirty water seized, clear the floor drains of silt, and, on a property drawing from a well rather than city water, have the well tested before anyone drinks from it.',
    ],
    commonIntro: "Across Delhi Hills' mid-century homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'My Delhi Hills property is on a well — do I need it tested after a flood?', a: 'Yes. Floodwater around a wellhead carries bacteria and whatever was in the ground, so the water needs testing before anyone drinks it. We coordinate that before the water goes back into use.' }],
  },
  'golf-manor': {
    intro:
      'Golf Manor is a small village surrounded by Cincinnati, and after-flood plumbing in its mid-century homes usually means a water heater and main shutoff that went under together. We replace a heater whose controls were submerged, test seized shutoffs and supply lines, clear floor drains, and confirm the village permit.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati, a compact grid of modest mid-century homes. Those houses keep the water heater and main shutoff at basement grade, so a flood that reaches the floor submerges the burner and the valves at once.',
      'We replace any water heater whose controls went underwater rather than relight an unsafe unit, test the shutoffs and supply lines the dirty water seized, and clear the floor drains of debris. As Golf Manor is its own municipality, we confirm any permit the village code requires before the gas and drain work goes back into service.',
    ],
    commonIntro: "In Golf Manor's mid-century homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Does Golf Manor handle its own permits for after-flood plumbing?', a: 'It does. Golf Manor is its own village surrounded by Cincinnati, so gas and drain work carries a Golf Manor permit where its code requires one, not a Cincinnati one. We file it as part of the job.' }],
  },
  'fairfax': {
    intro:
      'Post-flood plumbing in Fairfax, the small village along Wooster Pike near Mariemont, usually involves aging supply lines, shutoffs, and water heaters at basement grade. We replace a heater the flood submerged, test soaked shutoffs for corrosion, clear floor drains of silt, and confirm any permit the village requires.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. That older housing keeps aging supply lines, shutoffs, and water heaters at basement grade, all of it in reach of a flood that gets to the floor.',
      'We replace any water heater the flood submerged, test the shutoffs and supply lines that sat in dirty water for the corrosion that seizes them, and clear the floor drains of silt. Because Fairfax is its own village, we confirm any permit its code requires before the gas and drain work returns to service.',
    ],
    commonIntro: "In Fairfax's older homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Is after-flood plumbing in Fairfax permitted through the village?', a: 'Yes. Fairfax is its own municipality, so gas and drain repairs carry a Fairfax permit where the village code calls for one. We handle that filing rather than leaving it to you.' }],
  },
  'mack': {
    intro:
      'Mack homes in Green Township mostly have finished or utility basements protected by a sump system, so after-flood plumbing here starts with the sump pump and check valve. The pump that ran through the flood often died in it. Then we check the water heater, seized shutoffs, and floor drains.',
    relevance: [
      'Mack (ZIP 45248) is an established Green Township community of mid-century and newer single-family homes, most with a finished or utility basement. Even the newer houses are old enough that a flooded water heater is not worth relighting, and a basement full of finished space means a flood reaches the sump system and the drains that protect it.',
      'We check the sump pump and check valve first, because in these basements that is the part that ran through the flood and often died in it. Then we replace any water heater whose controls went under, test the shutoffs the dirty water seized, and clear the floor drains before the house goes back to full use.',
    ],
    commonIntro: "Across Mack's mid-century and newer homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'My Mack sump pump ran all through the flood — is it still good?', a: 'Often not. The pump that ran hardest during a flood is frequently the one that burned out doing it, and you find out during the next storm. We test it and the check valve before you rely on it again.' }],
  },
  'monfort-heights': {
    intro:
      'Monfort Heights’ mid-century homes are at the age where sewer laterals back up, and post-flood plumbing there mostly deals with the silt a flood packs into them. We camera the lateral rather than snake it blind, replace a submerged water heater, and test the shutoffs and supply lines that soaked.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb of mid-century single-family homes now well into the age where sewer laterals back up. A flood packs those laterals with silt, and a partially blocked line will pass a sink but back the house up on the first full laundry load.',
      'We camera the lateral rather than snake it blind, replace any water heater the flood submerged, and test the shutoffs and supply lines that sat in dirty water. Confirming the main runs clear is what keeps a recovery from becoming a second flood the first time every fixture runs at once.',
    ],
    commonIntro: "Across Monfort Heights' mid-century homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Why camera the sewer line after a Monfort Heights flood instead of just snaking it?', a: 'Because a flood packs silt into the whole lateral, and a camera shows whether it is a blockage we can clear or a collapsed section. Snaking a silted line blind is how people pay to clear the same pipe three times.' }],
  },
  'bridgetown': {
    intro:
      'When a Bridgetown basement floods, the sump pump and check valve are usually the first to fail, so our post-flood plumbing check starts there. A pump that ran flat out through the storm often burns out. Then we replace a submerged water heater, test seized shutoffs, and clear the drains.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community of mid-century and newer homes, most with a basement that leans on a sump pump to stay dry. A pump that runs flat out through a flood is the part most likely to burn out doing it, and a check valve that lets water fall back down the pipe keeps the pump cycling until it quits.',
      'We test the sump pump and check valve first, because a pump that died in the flood leaves the next storm with nothing holding it back. From there we replace any water heater whose burner and gas valve went underwater, test the shutoffs the dirty water seized, and clear the floor drains before the house returns to full use.',
    ],
    commonIntro: "Across Bridgetown's homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'The flood in my Bridgetown basement barely covered the floor — do I need any of this?', a: 'Maybe not, and we will tell you so on the phone. If the water never reached the water heater base, the shutoffs, or a floor drain, there may be nothing here worth paying for. The one thing we would still test is the sump pump, since it worked hardest during the flood.' }],
  },
  'finneytown': {
    intro:
      'In Finneytown’s mid-century homes, the shutoff you reach for in the next emergency is the one a flood most likely seized, so after-flood plumbing here starts with the valves. We work every shutoff and supply line the water reached, replace a submerged water heater, and clear floor drains of silt.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community of mid-century single-family homes, each with the water heater and a set of shutoff and supply-line valves sitting at basement grade. Those valves are already stiff with age, and a flood that leaves them standing in dirty water is what finally seizes them.',
      'We work every shutoff and supply line the flood reached and free or replace the ones that will not turn, because a frozen main shutoff is the difference in the next burst pipe. From there we replace any water heater whose burner and controls went under and clear the floor drains of silt before normal use resumes.',
    ],
    commonIntro: "Across Finneytown's mid-century homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'How quickly can you reach a Finneytown home after a flood?', a: 'Finneytown is well within our north-side area and we aim for same-day arrival. A house you cannot safely run water in should not wait, and an early check keeps a seized shutoff or a flooded heater from becoming the next problem.' }],
  },
  'amberley': {
    intro:
      'Amberley homes run large, often with two water heaters across a lower level, so after-flood plumbing here goes heater by heater. A unit whose controls went under is replaced and a dry one is left alone. Then we test soaked shutoffs and supply lines and camera the drains for silt.',
    relevance: [
      'Amberley Village (ZIP 45237) is built of large homes on big, wooded lots along winding streets, which means long plumbing runs and, in many houses, two water heaters spread across a lower level. When a flood gets into that level it reaches more of the system than a small house has, and one heater can go under while another a room away stays dry.',
      'We go heater by heater rather than assume. Each unit the flood reached is checked at its base and replaced if the controls were submerged, while a dry one is left alone. From there the shutoffs and supply lines that sat in dirty water are tested for corrosion and the drains are cameraed for silt before the full house runs again.',
    ],
    commonIntro: "In Amberley's large homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'My Amberley home has two water heaters — does a flood mean both are done?', a: 'Only the ones the water actually reached. On a system spread across a lower level, one heater can sit in floodwater while another stays clear, so we check each at its base and replace only the units whose burner and controls went under.' }],
  },
  'arlington-heights': {
    intro:
      'Arlington Heights floods from the drains up on low Mill Creek valley ground, and after-flood plumbing in its older homes centers on gas. The water heater, furnace, and every floor-level gas connection go under together, so we check each control, replace the heater, clear silted drains, and test shutoffs.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village packed onto low Mill Creek valley ground, where heavy rain floods the compact grid of older homes from the drains up. When that water fills a basement, it reaches the water heater, the furnace, and every gas connection at floor level at the same time, and a submerged gas control does not announce that it has failed.',
      'We check every gas connection and appliance control the flood touched and condemn the ones that went under, because a valve that sat in dirty water can still light and still leak. The water heater is replaced rather than relit, the silted floor drains and traps are cleared, and the shutoffs the dirty water seized are tested before the gas and water come back.',
    ],
    commonIntro: "In Arlington Heights' older valley homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Who permits the after-flood plumbing work in Arlington Heights?', a: 'The village does. Arlington Heights is its own municipality, so gas and drain repairs carry a village permit where the local code calls for one. We pull it through the village rather than assume a Cincinnati permit covers it.' }],
  },
  'north-college-hill': {
    intro:
      'North College Hill’s early- and mid-1900s homes still run cast-iron drains, and that is what a flood silts up, so post-flood plumbing here begins with a camera down the main. Then we replace any water heater whose burner and controls went under and free the shutoffs that seized.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, a tight grid of early- and mid-1900s homes still running on galvanized supply and cast-iron drains. Cast iron is precisely what a flood silts up, and a line that only half-clears will carry a slow sink for weeks before it backs the whole house up.',
      'We camera the cast-iron main for the silt the flood drove into it rather than snake it blind, then replace any water heater whose burner and controls went under and free or replace the shutoffs that seized in the dirty water. Nothing is turned back on until the drain is confirmed to run.',
    ],
    commonIntro: "In North College Hill's older homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Does North College Hill issue its own permits for this work?', a: 'It does. North College Hill is its own city with its own building department, so gas and drain repairs after a flood carry a city permit where the code requires one, not a Cincinnati one. We file it as part of the job.' }],
  },
  'newtown': {
    intro:
      'Newtown sits on low ground near the Little Miami, and after-flood plumbing there usually means river silt in the sewer lateral long after the water recedes. We camera the lateral instead of guessing, replace any water heater the river submerged, clear the traps and floor drains, and test wells.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village on the low river-bottom ground near the Little Miami, where a flood arrives up through the ground and the drains rather than from a burst line. The lateral that carries the house to the sewer is exactly what fills with river silt, and a half-blocked line will pass a running sink while it backs up the moment a washing machine drains.',
      'We put a camera down the lateral instead of guessing, because snaking a silted line blind is how a homeowner pays to clear the same pipe twice. From there we replace any water heater the river submerged, clear the traps and floor drains it packed, and, on a property drawing from a well, hold off on the water until a bacteria test clears it.',
    ],
    commonIntro: "In Newtown's homes near the Little Miami, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'My Newtown drains ran slow after the river went down — camera or snake?', a: 'Camera first. River silt settles along the whole lateral, and the camera shows whether it is a soft blockage we can clear or a section that cracked or collapsed. Snaking blind punches a hole through the silt that closes again within weeks.' }],
  },
  'turpin-hills': {
    intro:
      'Nearly all Turpin Hills homes depend on a basement sump system, so flood plumbing repair in this Anderson Township community starts with the pump that carried the load. We test the sump pump and check valve first, then replace a submerged water heater, test seized shutoffs, and clear floor drains.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community of mid-century and newer homes, nearly all of them depending on a basement sump system in heavy rain. That pump carries the whole load during a flood, and the harder it works the more likely it is the component that gave out.',
      'We test the sump pump and its check valve before anything else, because a pump that quit mid-flood leaves the basement unguarded for the next storm. Then we replace any water heater the flood submerged rather than relight it, test the shutoffs that seized in the dirty water, and clear the floor drains before the house goes back to full use.',
    ],
    commonIntro: "Across Turpin Hills' homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'My Turpin Hills sump pump survived the flood — is it fine to leave it?', a: 'Test it first. A pump that ran through a flood is the one most likely to fail on the next storm, and a stuck check valve makes it cycle itself to death. We check both, and if they hold, we leave them.' }],
  },
  'silverton': {
    intro:
      'Silverton’s early- and mid-1900s homes along Montgomery Road keep older water heaters and shutoffs at basement grade, and after-flood plumbing there deals with damage inside the controls that does not show. We replace a heater whose controls went under, test soaked shutoffs and supply lines, and clear floor drains.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road with established early- and mid-1900s homes on aging plumbing. Those older water heaters and shutoffs sit at basement grade, in reach of any flood that gets to the floor, and the damage is mostly inside the controls where it does not show.',
      'We replace any water heater whose burner and controls went underwater, test the shutoffs and supply lines that sat in dirty water, and clear the floor drains of silt. As Silverton is its own city, gas and drain work carries a city permit where its code requires one, which we handle before the water returns to service.',
    ],
    commonIntro: "In Silverton's older homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Does after-flood plumbing in Silverton go through the city for permits?', a: 'Yes. Silverton is its own municipality, so gas and drain repairs carry a Silverton permit where the code calls for one. We confirm and file it as part of the job.' }],
  },
  'lockland': {
    intro:
      'Lockland sits low in the Mill Creek valley, and a flood in its old mill-era worker housing is usually fouled sewage, which shapes the after-flood plumbing. We treat the level as contaminated, replace the water heater the backup reached, clear and flush traps and drains, and test the check valve.',
    relevance: [
      'Lockland (ZIP 45215) grew up around its mills on low valley ground, and its closely spaced worker housing dates to an era when basements were never meant to take on water. When the valley backs up into one of these homes, the water is fouled sewage, and it settles into floor drains, traps, and the base of a water heater that sits right at grade.',
      'We treat the flooded level as contaminated and work from there. The water heater the backup reached is replaced instead of relit, the traps and drains are cleared and flushed, and the check valve meant to keep the sewer out — the part that failed if the backup got in — is tested before the water goes back on.',
    ],
    commonIntro: "In Lockland's older valley homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Does after-flood plumbing in Lockland need a Lockland permit?', a: 'Where the work touches gas or the drain system, yes. Lockland is its own historic village with its own building department, so the permit comes from the village, not from Cincinnati. We handle that filing as part of the repair.' }],
  },
  'groesbeck': {
    intro:
      'A basement flood in Groesbeck reaches the gas water heater burner in the first inch, so post-flood plumbing in these mid-century Colerain Township homes starts at the heater. If the controls went under, we replace it rather than relight it. Then we test seized shutoffs and camera the drain line.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community of mid-century single-family homes, each keeping the water heater and main shutoff at basement grade. A flood that reaches the floor puts the burner assembly and gas control valve of a gas heater underwater in the first inch, where the real damage happens out of sight.',
      'We check the water heater at its base and replace it, not relight it, if the controls went under, because the corrosion is internal and a gas valve that fails after a flood fails unsafely. From there we test the shutoffs and supply lines the dirty water seized and camera the drain line for silt where a flood may have packed it before the house returns to normal use.',
    ],
    commonIntro: "Across Groesbeck's mid-century homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Why replace the Groesbeck water heater instead of just relighting it after the flood?', a: 'Because a burner and gas control valve that sat in floodwater corrode from the inside, where you cannot see it, and a gas valve that fails later fails unsafely. Manufacturers direct replacement of a submerged unit rather than a relight, and we follow that.' }],
  },
  'mount-healthy': {
    intro:
      'Mount Healthy homes keep the gas water heater low in the basement, so after-flood plumbing in this historic small city usually starts with a burner and control valve that went under. We replace that heater rather than relight it, test the seized shutoffs, and camera the cast-iron drains for silt.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city built around an old town center, its early-1900s and mid-century homes carrying galvanized supply and cast-iron drains. In those homes the gas water heater sits low in the basement, so a flood that reaches the floor puts the burner assembly and control valve underwater in the first inch.',
      'We replace any water heater the flood submerged rather than relight it, because the burner and gas valve corrode internally where no inspection can see the damage. From there we test the shutoffs the dirty water seized and camera the cast-iron drains for the silt a flood drives into them before the house returns to normal use.',
    ],
    commonIntro: "In Mount Healthy's older homes, the flood-left plumbing we inspect most often is:",
    localFaqs: [{ q: 'Is the after-flood plumbing work in Mount Healthy permitted through the city?', a: 'Yes. Mount Healthy is its own city, so gas and drain repairs go through its building department and carry a Mount Healthy permit where the code calls for one. We confirm and file it rather than leave it to you.' }],
  },
};
