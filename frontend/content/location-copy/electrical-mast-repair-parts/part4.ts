export const part4: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'reading': {
    intro: 'Rust at the roofline is where most mast repair in Reading begins. Many older and mid-century homes here still have their original galvanized mast, and once the flashing fails, water runs into the meter base. Storms funneling through the Mill Creek valley pull loose masts out of plumb.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, with a settled mix of older and mid-century homes. Many of those houses still wear the original overhead service entrance — a galvanized mast pipe through the roof, a weatherhead, and a meter base that have weathered decades of sun and storms. Once the flashing around the mast fails or the pipe rusts at the roofline, water tracks down into the meter base and the connections start to corrode.',
      'The low valley ground adds to the wear. Damp stretches and the storms that funnel through the valley put extra strain on overhead drops, and a mast that has loosened at its straps can be pulled out of plumb by a heavy wind or an ice load. Because the service cable above the meter is energized until the utility pulls the meter or drops the line, we schedule that disconnect with the power company before we touch the mast, then rebuild it to current code so it passes inspection.',
    ],
    commonIntro: "Across Reading's older and mid-century homes, the mast problems we see most often trace back to weathered overhead service entrances in the valley:",
    localFaqs: [{ q: 'Who shuts the power off to replace a mast in Reading?', a: 'We coordinate the disconnect with the utility before any mast work in Reading, since the service cable above the meter stays energized otherwise. Mast and service-entrance repairs are licensed, permitted work, and we line up the power-company step so the job is done safely.' }],
  },
  'dent': {
    intro: 'Forty or fifty years of weather dry out the flashing on Dent’s mid-century homes, and mast repair there often starts with water at the meter base. Left alone, that can get the service red-tagged. West-side wind and ice also loosen roof straps, so masts shift or shear at a coupling.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, built out with established neighborhoods of mid-century and newer homes. The mid-century houses here often still run the overhead service they were built with — a mast through the roof feeding a meter base on the wall — and after forty or fifty years the flashing dries out and the pipe corrodes where it exits the roof. Water intrusion at that point is the quiet failure that eventually red-tags a service.',
      'West-side weather does the rest. Wind-driven storms and the occasional ice load tug on the overhead drop, and a mast whose roof straps have worked loose can shift out of plumb or shear at a coupling. We reset and re-anchor the mast, replace the weatherhead and any cracked service cable, and reseal the roof penetration. Because everything above the meter is live until the utility disconnects it, we schedule that step first and bring the rebuilt service up to code.',
    ],
    commonIntro: "Across Dent's mid-century and newer homes, the mast problems we handle most often come from weathered roof seals and storm-loosened pipe:",
    localFaqs: [{ q: 'My Dent mast is rusted where it goes through the roof — is that urgent?', a: 'Yes. Rust at the roof penetration usually means the flashing has failed and water is reaching the connections, which can red-tag the service. We handle this as licensed mast repair in Green Township and coordinate the utility disconnect before we open it up.' }],
  },
  'deer-park': {
    intro: 'Deer Park’s mid-century homes were almost all built with overhead service, and mast repair there usually means galvanizing worn through and a brittle roof seal. A mast corroded at the roofline loses its grip on the straps. Then a storm or falling limb leaves it leaning.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets. Homes of that era were almost all built with overhead service, and the original mast, weatherhead, and meter base are now at the age where the galvanizing has worn through and the roof seal has gone brittle. That is exactly when water starts finding its way into the riser and the meter connections.',
      'A mid-century mast that has corroded at the roofline also loses its grip on the straps that hold it plumb, so a storm or a falling limb off one of the older street trees can leave it leaning or sheared. We straighten or replace the mast, swap the weatherhead and any damaged service-entrance cable, and reseal the penetration. The cable above the meter stays energized until the utility pulls it, so we schedule that disconnect and rebuild the service to current code.',
    ],
    commonIntro: "Across Deer Park's mid-century homes, the mast problems we see most often come from aging galvanized risers and failed roof seals:",
    localFaqs: [{ q: 'How fast can you get to a leaning mast in Deer Park?', a: 'Deer Park is well within our east-side service area, and we treat a leaning or damaged mast as priority service-entrance work. We coordinate the utility disconnect and handle the repair as licensed, permitted work.' }],
  },
  'terrace-park': {
    intro: 'Mature trees give Terrace Park its character, and they cause most of the mast repair we do there. A limb in a storm can hit the drop, bend the mast or tear the weatherhead loose. On early-1900s homes, a mast already rusted at the seal fails first.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets. Those mature canopies are the village character, but they are also the main threat to an overhead service: a limb coming down in a storm can hit the drop, bend the mast, or tear the weatherhead loose. On the older homes, the original mast and cable were never sized for a century of that kind of stress.',
      'The low ground near the Little Miami brings the storms and the wind that bring the branches down, and a mast already weakened by rust at the roof seal is the one that fails first. We replace bent or sheared masts, install a new weatherhead and service-entrance cable, and reseal the roof so water stops tracking into the meter base. Everything above the meter is live until the utility disconnects it, so we coordinate that step and rebuild to code, protecting the finished interiors these homes are known for.',
    ],
    commonIntro: "In Terrace Park's established homes under mature trees, the mast problems we handle most often start with storm and limb damage:",
    localFaqs: [{ q: 'A limb hit the service mast on my Terrace Park home — what now?', a: 'Keep clear of any downed line and call us. We coordinate with the utility to disconnect the service, then rebuild the mast, weatherhead, and cable as licensed work near the Little Miami so it passes inspection and is safe to re-energize.' }],
  },
  'dry-run': {
    intro: 'Rolling, wooded ground in Anderson Township brings storms that load the overhead drops, and mast repair in Dry Run often follows. Mid-century homes run original service, and even newer subdivisions now have roof seals drying out. A leaning mast stops shedding water and leaks into the meter base.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes. The mid-century houses here typically run the overhead service they were built with, and even the newer subdivisions are old enough now that roof seals around the mast have begun to dry out and the meter riser has taken on weather. A failed seal is the usual reason water shows up at the meter base.',
      'Anderson Township sits on rolling, wooded ground, and the storms that move across it put a real load on overhead drops. A mast whose straps have loosened can be pushed out of plumb by wind or a heavy ice glaze, and once it is leaning the weatherhead no longer sheds water the way it should. We re-anchor or replace the mast, fit a new weatherhead and any cracked cable, and reseal the roof. The service above the meter stays energized until the utility drops it, so we schedule that first and bring the work to code.',
    ],
    commonIntro: "Across Dry Run's mid-century and newer homes, the mast problems we see most often come from weathered seals and storm-loosened pipe:",
    localFaqs: [{ q: 'Do you handle mast repair in the Anderson Township part of Dry Run?', a: 'Yes. Dry Run is well within our east-side service area, and we handle mast, weatherhead, and meter-riser work there as licensed, permitted jobs with the utility disconnect coordinated up front.' }],
  },
  'white-oak': {
    intro: 'White Oak homes in Green Township are mostly mid-century and newer, and mast repair there usually begins with hard, leaking flashing. Water reaching the meter base corrodes the connections over time. Northwest-side wind and ice also loosen the roof straps until a mast tips or cracks at a coupling.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes. Those mid-century houses were built with overhead service, and after decades the original mast and weatherhead have weathered while the flashing around the roof penetration has gone hard and started to leak. Water reaching the meter base is the failure that quietly corrodes the connections over time.',
      'Northwest-side storms add the mechanical stress. Wind and ice pull on the overhead drop, and a mast whose roof straps have loosened can be knocked out of plumb or cracked at a coupling. We straighten or replace the mast, install a new weatherhead and any damaged service-entrance cable, and reseal the roof so the meter base stays dry. Because the cable above the meter is energized until the utility pulls it, we schedule that disconnect first and rebuild the service to current code.',
    ],
    commonIntro: "Across White Oak's mid-century and newer homes, the mast problems we handle most often trace to failed roof seals and storm-loosened pipe:",
    localFaqs: [{ q: 'How fast can you reach a damaged mast in White Oak?', a: 'White Oak is well within our northwest-side service area in Green Township, and we prioritize damaged or leaning masts. We coordinate the utility disconnect and complete the repair as licensed, code-compliant work.' }],
  },
  'forestville': {
    intro: 'After a bad storm in wooded Anderson Township, a mast already loose at its straps is the one that ends up leaning or sheared, and that is typical mast repair in Forestville. The mid-century homes here have worn galvanizing and cracked roof seals that let water down the riser.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. The mid-century homes here reach the age where the original overhead mast and weatherhead have worn through their galvanizing and the roof seal has cracked. When that seal lets go, water runs down the riser into the meter base and the trouble starts at the connections.',
      'Anderson Township is wooded and storm-prone, and overhead drops here take a beating from wind and the limbs that come down with it. A mast already loosened at the straps is the one that ends up leaning or sheared after a bad night. We re-anchor or replace the mast, fit a fresh weatherhead and any failed cable, and reseal the roof penetration. The service above the meter is live until the utility drops it, so we set that step first and bring everything up to code.',
    ],
    commonIntro: "Across Forestville's mid-century and newer homes, the mast problems we see most often come from weathered risers and storm-loosened pipe:",
    localFaqs: [{ q: 'Is mast work in Forestville something I can do myself?', a: 'No. Everything above the meter stays energized until the utility disconnects it, so mast and service-entrance repair in Forestville is licensed work. We coordinate the power-company disconnect and handle the rebuild to code.' }],
  },
  'cherry-grove': {
    intro: 'Cherry Grove’s mid-century homes have original masts with thin galvanizing and dried-out flashing, so mast repair there often starts with corroded meter connections. Storms on the tree-lined ground of Anderson Township add wind and falling limbs. A mast loose at its straps gets pushed out of plumb.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes. The mid-century houses were built with overhead service, and the original mast, weatherhead, and meter riser are now old enough that the roof flashing has dried out and the galvanizing has worn thin. Water intrusion at the mast penetration is the usual cause of corroded meter connections here.',
      'The rolling, tree-lined ground of Anderson Township brings storms that load up the overhead drop, and a mast loosened at its straps can be pushed out of plumb by wind or a falling limb. We straighten or replace the mast, install a new weatherhead and any cracked service-entrance cable, and reseal the roof so the meter base stays dry. The cable above the meter is energized until the utility pulls it, so we coordinate that disconnect and rebuild to current code.',
    ],
    commonIntro: "Across Cherry Grove's mid-century and newer homes, the mast problems we handle most often come from failed roof seals and storm damage:",
    localFaqs: [{ q: 'How fast can you reach a storm-damaged mast in Cherry Grove?', a: 'Cherry Grove is well within our east-side Anderson Township service area, and we treat storm-damaged masts as priority work. We coordinate the utility disconnect and complete the repair as licensed, permitted service-entrance work.' }],
  },
  'kenwood': {
    intro: 'Larger homes near Kenwood Towne Centre carry heavier services with bigger masts and cable, and mast repair in Kenwood has to be sized to match. The mid-century homes mixed in still run original masts with cracked roof seals. On a big service, a weak pipe carries more load.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses. The mid-century homes often still run their original overhead mast, where decades of weather have worn the riser and cracked the roof seal. The larger newer homes carry heftier services with bigger masts and cable, but the same failure points apply once the flashing lets water reach the meter base.',
      'A mast that has loosened at its straps or rusted at the roofline can be pulled out of plumb by a storm, and on a larger service the mechanical load on a compromised pipe is higher. We replace or re-anchor the mast, fit a new weatherhead and properly sized service-entrance cable, and reseal the penetration. Because everything above the meter stays energized until the utility disconnects it, we schedule that step first and bring the rebuilt service up to current code.',
    ],
    commonIntro: "Across Kenwood's mid-century and larger homes, the mast problems we see most often trace to weathered risers and failed roof seals:",
    localFaqs: [{ q: 'Do you handle the larger services on bigger Kenwood homes?', a: 'Yes. We size the mast, weatherhead, and service-entrance cable to the actual service on larger Kenwood homes and coordinate the utility disconnect, completing the work as licensed, code-compliant repairs.' }],
  },
  'lincoln-heights': {
    intro: 'Lincoln Heights’ older, modest homes still carry original masts and weatherheads, and mast repair there usually follows a failed roof seal. The low Mill Creek valley ground and the storms funneling through it are hard on overhead drops. A leaning mast stops shedding water.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes. Those homes were built with overhead service, and the original mast, weatherhead, and meter riser have now weathered decades. When the flashing around the mast fails, water tracks down into the meter base and corrodes the connections.',
      'The low valley ground and the storms that funnel through it are hard on overhead drops. A mast that has loosened at its straps can be pushed out of plumb by wind or an ice load, and a leaning mast no longer sheds water the way it should. We re-anchor or replace the mast, install a new weatherhead and any failed service-entrance cable, and reseal the roof. Everything above the meter stays energized until the utility drops it, so we coordinate that disconnect and rebuild to code.',
    ],
    commonIntro: "In Lincoln Heights' older valley homes, the mast problems we handle most often come from weathered seals and storm-loosened pipe:",
    localFaqs: [{ q: 'Who turns off the power for mast repair in Lincoln Heights?', a: 'The utility does. The service cable above the meter stays energized until they disconnect it, so we coordinate that step before any mast work in this Mill Creek valley community and complete the rebuild as licensed, code-compliant work.' }],
  },
  'dillonvale': {
    intro: 'Brittle roof seals on the mid-century homes in Dillonvale let water reach the meter connections, which drives most mast repair in this Sycamore Township community near Kenwood. Masts corroded at the roofline loosen on their straps. A storm or falling limb can then leave one leaning or sheared.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes. Those mid-century houses were built with overhead service, and the original mast, weatherhead, and meter base are now at the age where the galvanizing has worn through and the roof seal has gone brittle. That is when water starts reaching the meter connections and the trouble begins.',
      'A mid-century mast that has corroded at the roofline also loosens on its straps, so a storm or a falling limb can leave it leaning or sheared. We straighten or replace the mast, swap the weatherhead and any cracked service-entrance cable, and reseal the penetration so the meter base stays dry. Because the cable above the meter is energized until the utility pulls it, we schedule that disconnect first and rebuild the service to current code.',
    ],
    commonIntro: "Across Dillonvale's mid-century homes, the mast problems we see most often trace to aging risers and failed roof seals:",
    localFaqs: [{ q: 'How fast can you reach a damaged mast in Dillonvale?', a: 'Dillonvale sits in our east-side service area near Kenwood, and we prioritize damaged or leaning masts. We coordinate the utility disconnect and complete the repair as licensed, permitted service-entrance work.' }],
  },
  'woodlawn': {
    intro: 'Woodlawn mixes residential streets with industrial corridors in the Mill Creek valley, and mast repair there covers homes and small commercial buildings alike. Older masts have weathered decades in the valley. Once the flashing fails, water corrodes the meter base, and wind or ice can push loose masts over.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors. The older homes here run overhead service, and the original mast, weatherhead, and meter base have weathered decades in the valley. Once the flashing around the mast fails, water runs down the riser into the meter base and starts corroding the connections.',
      'The low valley ground and the storms that move through it strain overhead drops, and a mast loosened at its straps can be pushed out of plumb by wind or ice. We re-anchor or replace the mast, fit a new weatherhead and any damaged service-entrance cable, and reseal the roof so the meter base stays dry. The service above the meter is energized until the utility drops it, so we coordinate that step first and bring the work to code.',
    ],
    commonIntro: "Across Woodlawn's older valley homes, the mast problems we handle most often come from weathered seals and storm-loosened pipe:",
    localFaqs: [{ q: 'Do you handle both homes and small commercial masts in Woodlawn?', a: 'Yes. Woodlawn mixes residential streets with industrial corridors, and we repair overhead masts and service entrances on both as licensed work, coordinating the utility disconnect before we start.' }],
  },
  'addyston': {
    intro: 'On Addyston’s closely spaced worker homes, a leaning mast is easy to miss until the utility red-tags it, and that is a common start to mast repair in this old mill town. Damp river air is hard on galvanized pipe. Wind and storms off the Ohio load the overhead drops.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes. Those century-old houses were built with overhead service, and the original mast, weatherhead, and meter riser have weathered a long time. When the roof seal around the mast fails, water reaches the meter base, and on closely spaced homes a leaning or damaged mast is easy to overlook until it red-tags.',
      'Its riverside position brings the wind and storms that load up overhead drops, and the damp river air is hard on galvanized pipe and connections. A mast loosened at its straps can be pushed out of plumb by a storm or a falling limb. We straighten or replace the mast, fit a new weatherhead and any failed cable, and reseal the penetration. Everything above the meter stays energized until the utility disconnects it, so we coordinate that step and rebuild to current code.',
    ],
    commonIntro: "In Addyston's older riverside homes, the mast problems we see most often come from corroded risers and failed roof seals:",
    localFaqs: [{ q: 'My Addyston mast got red-tagged by the utility — can you fix it?', a: 'Yes. A red-tagged mast means the service entrance has to be repaired before the utility will reconnect. We rebuild the mast, weatherhead, and cable as licensed work in this far-west river village and coordinate the disconnect and reconnection.' }],
  },
  'greenhills': {
    intro: 'Many 1930s cottages and townhomes in Greenhills still have masts close to a century old, so mast repair there often means brittle roof seals leaking into the meter base. Masts that age have loosened on their straps. We rebuild them without disturbing the historic Greenbelt-era character.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use. Many of those 1930s homes still run an overhead service whose mast and weatherhead are close to a century old, with roof seals that have long since gone brittle. Water tracking down a failed seal into the meter base is the quiet failure we see most here.',
      'A mast that age has usually loosened on its straps and rusted at the roofline, so a storm or an ice load can push it out of plumb. We re-anchor or replace the mast, fit a new weatherhead and any cracked service-entrance cable, and reseal the penetration, taking care not to disturb the historic character of the cottages. Because the cable above the meter stays energized until the utility drops it, we coordinate that disconnect first and rebuild to current code.',
    ],
    commonIntro: "In Greenhills' 1930s planned-community homes, the mast problems we handle most often trace to near-century-old risers and failed roof seals:",
    localFaqs: [{ q: 'Will mast work damage the look of my historic Greenhills home?', a: 'No. We rebuild the mast and service entrance with care for the original Greenbelt-era character, and we coordinate the utility disconnect so the licensed, permitted work passes inspection.' }],
  },
  'northbrook': {
    intro: 'Worn galvanizing and cracked roof flashing on mid-century homes lead most mast repair in Northbrook. A failed seal lets water reach the meter base, and the connections corrode from there. Northwest-side storms in Colerain Township keep loading overhead drops until loose masts tip.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. Those houses were built with overhead service, and the original mast, weatherhead, and meter base are now old enough that the galvanizing has worn and the roof flashing has cracked. A failed seal lets water reach the meter base, and the connections start to corrode from there.',
      'Northwest-side storms put a steady load on overhead drops, and a mast loosened at its straps can be pushed out of plumb by wind or ice. We re-anchor or replace the mast, install a new weatherhead and any damaged service-entrance cable, and reseal the roof so the meter base stays dry. Because everything above the meter is energized until the utility pulls it, we schedule that disconnect first and rebuild the service to current code.',
    ],
    commonIntro: "Across Northbrook's mid-century homes, the mast problems we see most often come from aging risers and failed roof seals:",
    localFaqs: [{ q: 'How fast can you reach a leaning mast in Northbrook?', a: 'Northbrook is well within our northwest service area in Colerain Township, and we prioritize leaning or damaged masts. We coordinate the utility disconnect and complete the repair as licensed, permitted work.' }],
  },
  'indian-hill': {
    intro: 'Multi-acre wooded lots put big trees over the overhead service, so mast repair in Indian Hill usually follows a falling limb. A storm can bend the mast, tear the weatherhead loose or take down the drop. Estate services use heavier cable and longer runs.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road. Those mature canopies are the real threat to an overhead service here: a limb coming down in a storm can bend the mast, tear the weatherhead loose, or take down the drop entirely. On homes set far back, the service run is long and the mast often carries a substantial load.',
      'Large properties also mean bigger services, so a damaged mast on an Indian Hill estate involves heavier cable and a meter riser sized to match. We replace bent or sheared masts, fit a new weatherhead and properly sized service-entrance cable, reseal the roof penetration, and check the grounding. Because everything above the meter stays energized until the utility disconnects it, we coordinate that step first and rebuild the service to current code.',
    ],
    commonIntro: "On Indian Hill's wooded estates, the mast problems we handle most often start with storm and falling-limb damage:",
    localFaqs: [{ q: 'A tree limb tore the service mast off my Indian Hill home — what do I do?', a: 'Stay clear of any downed line and call us. We coordinate with the utility to disconnect the service, then rebuild the mast, weatherhead, and cable on your wooded lot as licensed work so it passes inspection and is safe to re-energize.' }],
  },
  'evendale': {
    intro: 'Evendale has mid-century homes beside a large industrial base that includes GE Aerospace, and mast repair there covers both. Homes show corroded weatherheads and failed roof seals. Commercial buildings carry heavier masts and risers that weather on their own. North-side storms push loose masts out of plumb.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods. The residential mast work here is the familiar story — mid-century homes with original overhead service where the weatherhead has corroded and the roof seal has failed. The commercial and industrial buildings add heavier services with larger masts and risers that take their own weather.',
      'North-side storms load up overhead drops across the village, and a mast loosened at its straps can be knocked out of plumb by wind or ice. We re-anchor or replace the mast, fit a new weatherhead and properly sized service-entrance cable, and reseal the penetration so the meter base stays dry. Because the cable above the meter is energized until the utility pulls it, we coordinate that disconnect first and bring the rebuilt service up to current code.',
    ],
    commonIntro: "Across Evendale's homes and buildings, the mast problems we see most often trace to weathered risers and failed roof seals:",
    localFaqs: [{ q: 'Do you handle larger commercial masts in Evendale?', a: 'Yes. Evendale mixes homes with a large industrial base, and we repair the heavier masts and service entrances on commercial buildings as licensed work, coordinating the utility disconnect before we start.' }],
  },
  'glendale': {
    intro: 'Glendale’s winding, tree-lined streets bring limbs down on old overhead service, and mast repair on its 19th-century Victorians also deals with masts that have weathered over a century. Failed seals let water reach the meter base. We work with care for the historic character of these homes.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets. Many of those 19th-century homes still run an overhead service whose mast and weatherhead have weathered well over a century, with roof seals long past their service life. Water reaching the meter base through a failed seal is the quiet failure we see most.',
      'The mature trees along those winding streets are the other threat: a limb down in a storm can bend a mast or tear the weatherhead loose. We replace or re-anchor the mast, fit a new weatherhead and any cracked service-entrance cable, and reseal the penetration, taking care for the historic character of the home. Because everything above the meter stays energized until the utility disconnects it, we coordinate that step first and rebuild to current code.',
    ],
    commonIntro: "In Glendale's preserved Victorian homes under mature trees, the mast problems we handle most often come from age and falling limbs:",
    localFaqs: [{ q: 'Do you work on the service masts of historic Glendale homes?', a: 'Yes. We rebuild masts and service entrances on Glendale’s Victorian homes with care for the original details, and we coordinate the utility disconnect so the licensed, permitted work passes inspection.' }],
  },
  'sharonville': {
    intro: 'Sharonville mixes mid-century homes with the convention center and industrial corridors, so mast repair there ranges from corroded residential weatherheads to heavier commercial masts. Storms near Sharon Woods load the overhead drops. A mast loose at its straps gets pushed out of plumb by wind or ice.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention center, and industrial corridors. The mid-century homes here run the overhead service they were built with, where the original mast and weatherhead have corroded and the roof seal has cracked. The commercial and industrial buildings carry heavier services with larger masts that weather on their own schedule.',
      'North-side storms near Sharon Woods put a load on overhead drops, and a mast loosened at its straps can be pushed out of plumb by wind or ice. We re-anchor or replace the mast, fit a new weatherhead and properly sized service-entrance cable, and reseal the roof so the meter base stays dry. Because the cable above the meter stays energized until the utility pulls it, we coordinate that disconnect first and rebuild to current code.',
    ],
    commonIntro: "Across Sharonville's homes and businesses, the mast problems we see most often trace to weathered risers and failed roof seals:",
    localFaqs: [{ q: 'How fast can you reach a damaged mast in Sharonville?', a: 'Sharonville is well within our north-side service area, and we prioritize damaged or leaning masts on both homes and businesses. We coordinate the utility disconnect and complete the repair as licensed, permitted work.' }],
  },
  'northgate': {
    intro: 'Around the Northgate Mall corridor, mast repair usually means a mid-century home whose galvanizing has worn and whose roof flashing has cracked. Water gets past the failed seal into the meter base. Northwest-side storms across Colerain Township load overhead drops until loose masts lean.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes. The mid-century houses run overhead service, and the original mast, weatherhead, and meter base are now old enough that the galvanizing has worn and the roof flashing has cracked. When that seal fails, water reaches the meter base and the connections begin to corrode.',
      'Northwest-side storms load up overhead drops across the township, and a mast loosened at its straps can be pushed out of plumb by wind or ice. We re-anchor or replace the mast, install a new weatherhead and any damaged service-entrance cable, and reseal the roof so the meter base stays dry. Because everything above the meter is energized until the utility disconnects it, we schedule that step first and rebuild the service to current code.',
    ],
    commonIntro: "Across Northgate's mid-century and newer homes, the mast problems we handle most often come from aging risers and failed roof seals:",
    localFaqs: [{ q: 'Do you cover mast repair in the Colerain Township part of Northgate?', a: 'Yes. Northgate is within our northwest service area in Colerain Township, and we handle mast, weatherhead, and meter-riser work there as licensed jobs with the utility disconnect coordinated up front.' }],
  },
  'springdale': {
    intro: 'Springdale’s mid-century neighborhoods and its commercial base along the Tri-County corridor both need mast repair at times. Homes show corroded masts and brittle roof seals. Commercial buildings carry heavier services with larger masts. North-side storms knock loose masts out of plumb with wind or ice.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base. The mid-century homes here run the overhead service they were built with, where the original mast and weatherhead have corroded and the roof seal has gone brittle. The commercial buildings along the corridor add heavier services with larger masts that take their own weather.',
      'North-side storms put a steady load on overhead drops, and a mast loosened at its straps can be knocked out of plumb by wind or ice. We re-anchor or replace the mast, fit a new weatherhead and properly sized service-entrance cable, and reseal the penetration so the meter base stays dry. Because the cable above the meter stays energized until the utility pulls it, we coordinate that disconnect first and bring the work to current code.',
    ],
    commonIntro: "Across Springdale's homes and businesses, the mast problems we see most often trace to weathered risers and failed roof seals:",
    localFaqs: [{ q: 'Can you handle commercial mast work along the Springdale corridor?', a: 'Yes. Springdale has a large commercial and retail base, and we repair the heavier masts and service entrances on those buildings as licensed work, coordinating the utility disconnect before we begin.' }],
  },
  'miamitown': {
    intro: 'Damp air off the Great Miami River speeds corrosion on galvanized masts, which keeps mast repair steady in Miamitown. The older homes on low river-bottom ground have masts and weatherheads that have weathered a long time. Storms and falling limbs push loose masts over.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground. Those older houses were built with overhead service, and the original mast, weatherhead, and meter riser have weathered a long time in the damp river air. When the roof seal around the mast fails, water reaches the meter base and the connections start to corrode.',
      'The low river-bottom location brings the storms and wind that load up overhead drops, and the damp air is hard on galvanized pipe. A mast loosened at its straps can be pushed out of plumb by a storm or a falling limb. We straighten or replace the mast, fit a new weatherhead and any failed service-entrance cable, and reseal the penetration. Because everything above the meter stays energized until the utility disconnects it, we coordinate that step first and rebuild to current code.',
    ],
    commonIntro: "In Miamitown's older riverside homes, the mast problems we handle most often come from corroded risers and failed roof seals:",
    localFaqs: [{ q: 'Is the damp river air in Miamitown hard on a service mast?', a: 'It is. Damp air near the Great Miami accelerates corrosion on a galvanized mast and meter connections, which is why a failing one needs a licensed rebuild. We coordinate the utility disconnect and bring the service entrance to code.' }],
  },
  'forest-park': {
    intro: 'Forest Park was built out as a planned community from the 1960s, so mast repair there means masts from that same era aging out together. Galvanizing has worn and roof seals have cracked, letting water into the meter base. North-side wind and ice tip masts loose at their straps.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes. Those homes were built out with overhead service in the same era, so the original mast, weatherhead, and meter base across the city are all reaching the age where the galvanizing has worn and the roof seal has cracked. A failed seal lets water into the meter base, and the connections corrode from there.',
      'North-side storms load up overhead drops across Forest Park, and a mast loosened at its straps can be pushed out of plumb by wind or ice. We re-anchor or replace the mast, install a new weatherhead and any damaged service-entrance cable, and reseal the roof so the meter base stays dry. Because everything above the meter is energized until the utility pulls it, we schedule that disconnect first and rebuild the service to current code.',
    ],
    commonIntro: "Across Forest Park's planned-era homes, the mast problems we see most often come from aging risers and failed roof seals:",
    localFaqs: [{ q: 'My Forest Park home still has its 1960s service mast — should it be replaced?', a: 'If it is rusted, leaning, or leaking at the roof seal, yes. Masts from the planned-community era are now well past their prime, and we rebuild them as licensed work with the utility disconnect coordinated up front.' }],
  },
  'pleasant-run': {
    intro: 'Mid-century homes in Pleasant Run still run the overhead service they were built with, and mast repair there usually follows a roof seal that has failed. Water tracks into the meter base and corrodes the connections. North-side storms in Springfield Township push loose masts out of plumb.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes. The mid-century houses run the overhead service they were built with, and the original mast, weatherhead, and meter base have weathered decades. Once the roof seal around the mast fails, water tracks down into the meter base and the connections begin to corrode.',
      'North-side storms put a load on overhead drops across the township, and a mast loosened at its straps can be pushed out of plumb by wind or ice. We re-anchor or replace the mast, fit a new weatherhead and any damaged service-entrance cable, and reseal the penetration so the meter base stays dry. Because the cable above the meter stays energized until the utility pulls it, we coordinate that disconnect first and bring the work to current code.',
    ],
    commonIntro: "Across Pleasant Run's mid-century and newer homes, the mast problems we handle most often trace to weathered risers and failed roof seals:",
    localFaqs: [{ q: 'How fast can you reach a damaged mast in Pleasant Run?', a: 'Pleasant Run is well within our north-side service area in Springfield Township, and we prioritize damaged or leaning masts. We coordinate the utility disconnect and complete the repair as licensed, permitted work.' }],
  },
  'cleves': {
    intro: 'Near where the Great Miami meets the Ohio, Cleves homes sit on low ground in damp river air, and mast repair there often deals with corroded risers. Failed roof seals let water reach the meter base. Recurring storms and falling limbs push loose masts out of plumb.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding. Those older houses were built with overhead service, and the original mast, weatherhead, and meter riser have weathered a long time in the damp river air. When the roof seal around the mast fails, water reaches the meter base and corrodes the connections.',
      'The riverside position brings recurring storms and wind that load up overhead drops, and the damp air is hard on galvanized pipe and connections. A mast loosened at its straps can be pushed out of plumb by a storm or a falling limb. We straighten or replace the mast, fit a new weatherhead and any failed service-entrance cable, and reseal the penetration. Because everything above the meter stays energized until the utility disconnects it, we coordinate that step first and rebuild to current code.',
    ],
    commonIntro: "In Cleves' older riverside homes, the mast problems we see most often come from corroded risers and failed roof seals:",
    localFaqs: [{ q: 'Do you handle mast repair on older homes in Cleves?', a: 'Yes. Cleves is part of our far-west river service area, and we rebuild weathered masts and service entrances on its older homes as licensed work, coordinating the utility disconnect before we start.' }],
  },
  'north-bend': {
    intro: 'Old masts on low riverside ground make up most mast repair in North Bend, the Ohio River village where President William Henry Harrison is buried. Damp air speeds rust on galvanized pipe, and a failed roof seal leaks into the meter base. Storms load the overhead drops.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground. Those older houses were built with overhead service, and the original mast, weatherhead, and meter base have weathered a long time in the damp river air. A failed roof seal lets water into the meter base, and the connections corrode from there.',
      'The riverfront position brings storms and wind that load up overhead drops, and the damp air accelerates rust on galvanized pipe. A mast loosened at its straps can be pushed out of plumb by a storm or a falling limb. We straighten or replace the mast, fit a new weatherhead and any failed service-entrance cable, and reseal the penetration. Because everything above the meter stays energized until the utility disconnects it, we coordinate that step first and rebuild to current code.',
    ],
    commonIntro: "In North Bend's older riverside homes, the mast problems we handle most often come from corroded risers and failed roof seals:",
    localFaqs: [{ q: 'How fast can you reach a damaged mast in North Bend?', a: 'North Bend is part of our far-west river service area, and we prioritize damaged or leaning masts on its older riverside homes. We coordinate the utility disconnect and complete the repair as licensed work.' }],
  },
  'loveland': {
    intro: 'Older homes near the Little Miami River and the bike trail make up most mast repair in Loveland. Their masts and weatherheads have weathered decades, with roof seals long past their prime. Riverside storms and mature trees threaten overhead drops, so wind, ice or limbs can push loose masts over.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes. The older homes near the river run overhead service whose mast and weatherhead have weathered decades, with roof seals long past their prime. When that seal fails, water reaches the meter base and the connections corrode.',
      'The low riverside ground brings the storms and the mature trees that threaten overhead drops, and a mast loosened at its straps can be pushed out of plumb by wind, ice, or a falling limb. We re-anchor or replace the mast, fit a new weatherhead and any damaged service-entrance cable, and reseal the penetration. Because everything above the meter stays energized until the utility disconnects it, we coordinate that step first and rebuild to current code.',
    ],
    commonIntro: "Across Loveland's historic and riverside homes, the mast problems we see most often come from weathered risers and falling limbs:",
    localFaqs: [{ q: 'Do you work on the masts of older homes near the Loveland riverfront?', a: 'Yes. We rebuild weathered masts and service entrances on Loveland’s older riverside homes as licensed work, and we coordinate the utility disconnect before opening up the service.' }],
  },
  'harrison': {
    intro: 'Low ground along the Whitewater River brings storms that load overhead drops, and mast repair in Harrison often follows. The older homes near downtown have masts and weatherheads that have weathered decades, with brittle roof seals. Water gets into the meter base, and loose masts tip in wind or ice.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes. The older homes run overhead service whose mast, weatherhead, and meter riser have weathered decades, with roof seals that have gone brittle. A failed seal lets water into the meter base, and the connections corrode from there.',
      'The low ground near the Whitewater brings storms and wind that load up overhead drops, and a mast loosened at its straps can be pushed out of plumb by wind or ice. We re-anchor or replace the mast, fit a new weatherhead and any damaged service-entrance cable, and reseal the penetration so the meter base stays dry. Because everything above the meter stays energized until the utility disconnects it, we coordinate that step first and rebuild to current code.',
    ],
    commonIntro: "Across Harrison's older and newer homes, the mast problems we handle most often trace to weathered risers and failed roof seals:",
    localFaqs: [{ q: 'How fast can you reach a damaged mast in Harrison?', a: 'Harrison is part of our far-west service area near the Indiana line, and we prioritize damaged or leaning masts. We coordinate the utility disconnect and complete the repair as licensed, code-compliant work.' }],
  },
};
