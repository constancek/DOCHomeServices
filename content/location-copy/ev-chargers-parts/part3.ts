export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro: 'Charging an EV at a Villages of Roll Hill apartment means working with shared electrical and limited parking, and we install Level 2 chargers and dedicated 240V circuits to code. Our licensed electricians handle the panel evaluation and permit work for this west-side hilltop community. Call (513) 586-5107.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings. In that kind of housing, the question is rarely whether a Level 2 charger is worth it and more about whether the building’s service and the unit’s panel can carry a dedicated 40- or 50-amp circuit without an upgrade.',
      'Because the buildings here are densely built and often share electrical infrastructure, a load calculation is the first step before anything gets mounted — it tells us whether the existing capacity supports a charger or whether a subpanel or service change is needed. Parking is assigned and tight, so the charger location and cable routing have to be planned around where the car actually sits.',
    ],
    commonIntro: 'In the multi-unit buildings of Roll Hill, EV-charger planning starts with whether the shared service and your unit’s panel can carry a dedicated 240V circuit.',
    localFaqs: [{ q: 'Can I get an EV charger installed at a Roll Hill apartment?', a: 'Often yes, but it depends on your building’s electrical service and your unit’s panel capacity, so we start with a load evaluation. We handle the licensed, permitted install once the capacity and a suitable parking spot are confirmed.' }],
  },
  'east-westwood': {
    intro: 'Adding a home EV charger in East Westwood usually comes down to your panel’s spare capacity and a clean run to the garage or driveway. Our licensed electricians size the dedicated 240V circuit and pull the permit. Call (513) 586-5107.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes. Houses from that era often have 100-amp service or an older panel that was never sized for a 40-amp EV circuit, so a load calculation tells us whether a charger fits or whether a panel upgrade comes first.',
      'The hillside grade here means garages and parking pads sit at different levels than the main living space, which affects where the charger mounts and how far the circuit has to run. We plan the conduit route and breaker placement so the install is tidy and the charger lands close to where the car parks.',
    ],
    commonIntro: 'In East Westwood’s older homes, an EV charger hinges on whether the existing panel has room for a dedicated circuit or needs an upgrade first.',
    localFaqs: [{ q: 'My East Westwood home has an older panel — can it handle an EV charger?', a: 'Some can and some need an upgrade, which is why we run a load calculation on the existing panel before quoting. If the capacity is short, we size and install a panel upgrade and the dedicated 240V circuit together, fully permitted.' }],
  },
  'western-hills': {
    intro: 'Most Western Hills homes have a garage that suits a Level 2 charger well, provided the panel has room for the dedicated circuit. Our licensed electricians handle the capacity evaluation, the 240V install, and the permit. Call (513) 586-5107.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes. The attached and detached garages common here are good places to mount a charger, but the older panels behind them often need a look before a 40- or 50-amp circuit goes in.',
      'For a detached garage, the dedicated circuit may need a subpanel or a longer feeder run, which we size during the load calculation. Mid-century homes around Glenway frequently still run on the original service, so confirming capacity up front avoids surprises once the charger is selected.',
    ],
    commonIntro: 'Across Western Hills’ older and mid-century homes, the garage is usually charger-ready but the panel may need evaluating for a dedicated 240V circuit.',
    localFaqs: [{ q: 'Can you install an EV charger in a detached garage in Western Hills?', a: 'Yes. Detached garages often need a subpanel or a longer feeder, which we size during the panel evaluation. We handle the licensed, permitted run from the service to the charger location.' }],
  },
  'california': {
    intro: 'Home EV charging beats the public stations for California-neighborhood residents along Kellogg Avenue, and we install Level 2 chargers on a dedicated 240V circuit. Our licensed electricians evaluate the panel and pull the permit. Call (513) 586-5107.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River. Out here on the edge of the city, public charging is sparse, so a home charger is the practical way to keep an EV topped up overnight.',
      'Because the homes sit on low riverside ground, we mount equipment and route the dedicated circuit with the local moisture and flood risk in mind, keeping the charger and its disconnect off the floor where it makes sense. The older homes here carry aging electrical service, so a panel evaluation confirms there is room for a 40-amp circuit before the charger is mounted.',
    ],
    commonIntro: 'Along California’s riverfront homes, a home charger fills the gap left by sparse public stations, with the panel and mounting planned around the low ground.',
    localFaqs: [{ q: 'Is a home EV charger worth it in the California neighborhood?', a: 'For most residents along Kellogg Avenue, yes — public charging is limited this far east, so overnight home charging is more convenient. We evaluate your panel and install a dedicated 240V circuit, with the equipment placed sensibly given the riverside setting.' }],
  },
  'carthage': {
    intro: 'Putting a Level 2 EV charger in a Carthage home along Vine Street starts with a look at the older panel and a dedicated 240V circuit. Our licensed electricians size the work to code and handle the permit. Call (513) 586-5107.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes. Houses that age frequently still run on undersized or fused electrical service, so a load calculation is the first step toward a charger that can pull 40 amps continuously.',
      'When the panel is short on capacity, we size a service or panel upgrade alongside the dedicated circuit so the charger runs without tripping. The older garages and rear parking common in Carthage give a clean place to mount the charger once the supply side is sorted.',
    ],
    commonIntro: 'In Carthage’s older homes, an EV charger depends on whether the early-1900s panel can carry a dedicated 240V circuit or needs upgrading first.',
    localFaqs: [{ q: 'Do older Carthage homes need a panel upgrade for an EV charger?', a: 'Some do. Early-1900s homes along Vine Street often have undersized service, so we run a load calculation before quoting. If an upgrade is needed, we install it with the dedicated 240V circuit, fully permitted.' }],
  },
  'winton-hills': {
    intro: 'EV charging in Winton Hills depends on whether your building’s service can carry a dedicated 240V circuit, and we evaluate that before mounting a Level 2 charger. Our licensed electricians handle the load calc and permit near Winton Road. Call (513) 586-5107.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing. In the multi-unit buildings, a charger means checking the shared service and the unit panel before committing to a 40-amp circuit.',
      'Densely built multi-unit homes often have limited spare capacity, so a load calculation tells us whether a dedicated circuit fits or whether a subpanel is needed. We plan the charger location around assigned parking so the cable reaches the car without a tripping hazard.',
    ],
    commonIntro: 'In Winton Hills’ homes and multi-unit buildings, an EV charger starts with confirming the service and panel can carry a dedicated 240V circuit.',
    localFaqs: [{ q: 'Can a Winton Hills multi-unit building support an EV charger?', a: 'It depends on the shared service and your unit’s panel capacity, which we check with a load evaluation first. Once capacity is confirmed near Winton Road, we install the dedicated 240V circuit and charger to code.' }],
  },
  'roselawn': {
    intro: 'A home EV charger suits Roselawn’s mid-century houses along Reading Road, provided the panel has room for a dedicated 240V circuit. Our licensed electricians run the evaluation and the permitted install. Call (513) 586-5107.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings. The single-family homes from the mid-1900s usually have a garage or driveway that suits a charger, but their panels are now old enough that capacity has to be confirmed before a 40-amp circuit goes in.',
      'For the apartment buildings, the picture changes to shared service and assigned parking, which we evaluate separately. In either case the load calculation determines whether the existing panel carries the charger or whether an upgrade is the better path.',
    ],
    commonIntro: 'Across Roselawn’s mid-century homes and apartments, an EV charger comes down to whether the panel can take a dedicated 240V circuit.',
    localFaqs: [{ q: 'Will my mid-century Roselawn home need an upgrade for an EV charger?', a: 'Not always — many mid-century panels have room, but some are at capacity, so we run a load calculation first. If an upgrade is needed along Reading Road, we install it with the dedicated circuit, permitted and to code.' }],
  },
  'mount-airy': {
    intro: 'Mount Airy’s mid-century homes near the forest usually have a garage that suits a Level 2 charger, once the panel is evaluated for a dedicated circuit. Our licensed electricians handle the load calc and the permit. Call (513) 586-5107.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets. The garages here mount a charger well, but the hilltop terrain often puts the garage at a different grade than the panel, lengthening the circuit run.',
      'Homes of that era carry aging service, so a load calculation confirms whether the panel takes a 40-amp circuit or needs an upgrade. We plan the conduit route across the grade so the charger lands close to where the car parks without exposed cable.',
    ],
    commonIntro: 'Across Mount Airy’s mid-century homes, the garage suits a charger but the hilly grade and aging panel shape how the dedicated circuit runs.',
    localFaqs: [{ q: 'How do you handle the hilly lots in Mount Airy for an EV charger?', a: 'We plan the conduit run across the grade so the dedicated circuit reaches the garage cleanly, and we check the panel’s capacity first. The licensed, permitted install keeps the charger close to where the car parks.' }],
  },
  'hartwell': {
    intro: 'Installing a Level 2 EV charger in a Hartwell home means matching it to a Victorian-era panel that often needs an upgrade. Our licensed electricians evaluate the service and handle the permitted dedicated circuit. Call (513) 586-5107.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets. Those century-old houses frequently still run on undersized or older electrical service that was never meant to carry a continuous 40-amp EV load.',
      'A load calculation tells us whether the existing panel supports a charger or whether a service upgrade comes first. The older detached garages and carriage-style outbuildings here often need a subpanel and feeder run, which we size as part of the same job.',
    ],
    commonIntro: 'In Hartwell’s Victorian and early-1900s homes, an EV charger usually hinges on whether the aging panel needs an upgrade before the dedicated circuit.',
    localFaqs: [{ q: 'Can my historic Hartwell home support an EV charger?', a: 'Often yes, but the older service may need upgrading first, so we run a load calculation before quoting. We then install the panel upgrade, if needed, and the dedicated 240V circuit together, fully permitted.' }],
  },
  'kennedy-heights': {
    intro: 'A home EV charger fits Kennedy Heights’ large early-1900s houses once the original panel is checked for capacity. Our licensed electricians handle the load calculation, the dedicated 240V circuit, and the permit. Call (513) 586-5107.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes. The size of these houses helps, since there is often room in or near a garage to mount a charger, but the original service may be undersized for a 40-amp circuit.',
      'A load calculation confirms whether the existing panel carries the charger or whether an upgrade is the better path. On the hilltop lots, the distance from the panel to the garage or parking pad factors into how the dedicated circuit is routed.',
    ],
    commonIntro: 'In Kennedy Heights’ large historic homes, an EV charger comes down to whether the original panel has room for a dedicated 240V circuit.',
    localFaqs: [{ q: 'Will an EV charger work in an older Kennedy Heights home?', a: 'Usually yes, though the original panel may need evaluating or upgrading first. We run a load calculation, then install the dedicated 240V circuit — and a panel upgrade if it is needed — to code and permitted.' }],
  },
  'st-bernard': {
    intro: 'EV charging in St. Bernard’s dense early-1900s homes starts with a look at the older panel and a dedicated 240V circuit. Our licensed electricians size the work to code and pull the permit. Call (513) 586-5107.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes. The tightly packed houses here often have small lots and older service, so a load calculation comes before any charger goes in.',
      'On these small valley lots, the garage or rear parking is usually close to the panel, which keeps the dedicated circuit run short. Where the early-1900s service is undersized, we size a panel upgrade alongside the charger circuit so it carries 40 amps without tripping.',
    ],
    commonIntro: 'In St. Bernard’s dense, early-1900s homes, an EV charger depends on whether the older panel can take a dedicated 240V circuit or needs an upgrade.',
    localFaqs: [{ q: 'Do older St. Bernard homes need a panel upgrade for an EV charger?', a: 'Some do, given the age of the housing around Ivorydale, so we run a load calculation first. If the service is short, we install an upgrade with the dedicated 240V circuit, permitted and to code.' }],
  },
  'elmwood-place': {
    intro: 'Adding a Level 2 EV charger in tightly built Elmwood Place means evaluating an older panel and planning a clean dedicated circuit. Our licensed electricians handle the load calc and the permit in this Mill Creek valley village. Call (513) 586-5107.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes. The small lots and old service mean a load calculation is the starting point before a charger gets specified.',
      'Because the homes sit on low valley ground, we keep the charger and its disconnect mounted sensibly off the floor and route the circuit with moisture in mind. Where the early-1900s panel is undersized, an upgrade goes in alongside the dedicated 240V circuit.',
    ],
    commonIntro: 'In Elmwood Place’s dense valley homes, an EV charger starts with the older panel’s capacity and a clean dedicated circuit.',
    localFaqs: [{ q: 'Can you fit an EV charger in a small Elmwood Place home?', a: 'Usually yes, once we confirm the older panel can carry a dedicated 240V circuit with a load calculation. We mount the charger sensibly given the valley setting and handle the permitted, code-compliant install.' }],
  },
  'delhi-hills': {
    intro: 'Delhi Hills’ mid-century homes generally suit a Level 2 charger, with the garage close at hand and the panel evaluated for a dedicated circuit. Our licensed electricians handle the load calc and permit above the river. Call (513) 586-5107.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets. The attached garages common here are good charger locations, but the hillside grade often means a longer run from the panel.',
      'Homes of that era carry aging service, so a load calculation confirms whether the panel supports a 40-amp circuit or needs an upgrade. We size the conduit run across the grade so the charger mounts close to where the car parks.',
    ],
    commonIntro: 'Across Delhi Hills’ mid-century homes, the garage suits a charger while the hilly grade and aging panel shape the dedicated circuit run.',
    localFaqs: [{ q: 'Can you install an EV charger in a hilly Delhi Hills lot?', a: 'Yes. We plan the dedicated circuit run across the grade to reach the garage cleanly, after checking the panel’s capacity with a load calculation. The install is licensed and permitted.' }],
  },
  'golf-manor': {
    intro: 'A home EV charger fits Golf Manor’s modest mid-century houses, provided the compact panel has room for a dedicated circuit. Our licensed electricians run the evaluation and the permitted 240V install. Call (513) 586-5107.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes. The smaller houses here often have correspondingly modest electrical service, so a load calculation matters before adding a 40-amp EV circuit.',
      'On these compact lots, the garage or driveway sits close to the panel, which keeps the dedicated circuit run short and tidy. Where the mid-century panel is near capacity, we size an upgrade alongside the charger circuit.',
    ],
    commonIntro: 'In Golf Manor’s modest mid-century homes, an EV charger depends on whether the compact panel can carry a dedicated 240V circuit.',
    localFaqs: [{ q: 'Will my small Golf Manor home need a panel upgrade for an EV charger?', a: 'Maybe — modest mid-century panels are sometimes near capacity, so we run a load calculation first. If an upgrade is needed, we install it with the dedicated circuit, fully permitted and to code.' }],
  },
  'fairfax': {
    intro: 'Installing a Level 2 EV charger in Fairfax along Wooster Pike starts with evaluating the panel for a dedicated 240V circuit. Our licensed electricians handle the load calc and the permit in this small east-side village. Call (513) 586-5107.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. The age of the housing means the panel’s capacity has to be confirmed before a charger that pulls 40 amps continuously goes in.',
      'The garages and driveways common in this small village give a clean place to mount the charger once the supply side is sorted. A load calculation tells us whether the existing panel carries the circuit or whether an upgrade comes first.',
    ],
    commonIntro: 'In Fairfax’s older homes, an EV charger comes down to whether the panel can take a dedicated 240V circuit or needs upgrading.',
    localFaqs: [{ q: 'How fast can you install an EV charger in Fairfax?', a: 'Once a load calculation confirms the panel’s capacity, most Fairfax installs are quick to schedule along Wooster Pike. We handle the dedicated 240V circuit and any needed upgrade, permitted and to code.' }],
  },
  'mack': {
    intro: 'Mack’s mid-century and newer homes in Green Township usually have a garage well suited to a Level 2 charger. Our licensed electricians evaluate the panel and install the dedicated 240V circuit to code. Call (513) 586-5107.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes. The newer houses often have larger panels with room to spare for a 40- or 50-amp EV circuit, while the mid-century homes may need a closer look.',
      'A load calculation confirms which case applies before the charger is selected. The attached garages common across Mack keep the dedicated circuit run short, and a 50-amp circuit leaves headroom for faster charging where the panel supports it.',
    ],
    commonIntro: 'Across Mack’s mid-century and newer homes, an EV charger fits readily where the panel has room for a dedicated 240V circuit.',
    localFaqs: [{ q: 'Can my newer Mack home handle a faster Level 2 charger?', a: 'Often yes — newer panels in Green Township frequently have room for a 50-amp circuit, which we confirm with a load calculation. We size and install the dedicated circuit and charger to code, permitted.' }],
  },
  'monfort-heights': {
    intro: 'A home EV charger suits Monfort Heights’ mid-century houses, with the garage close by and the panel evaluated for a dedicated circuit. Our licensed electricians handle the load calc and the permit in Green Township. Call (513) 586-5107.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes. The attached garages common here are good charger locations, but the mid-1900s panels behind them are now old enough that capacity should be confirmed.',
      'A load calculation tells us whether the existing panel carries a 40-amp circuit or whether an upgrade is the better path. The garage’s proximity to the panel in most of these homes keeps the dedicated circuit run short and clean.',
    ],
    commonIntro: 'Across Monfort Heights’ mid-century homes, an EV charger comes down to whether the aging panel can take a dedicated 240V circuit.',
    localFaqs: [{ q: 'Will my Monfort Heights home need a panel upgrade for an EV charger?', a: 'Some mid-century panels are at capacity and some are not, so we run a load calculation before quoting. If an upgrade is needed in Green Township, we install it with the dedicated circuit, permitted and to code.' }],
  },
  'bridgetown': {
    intro: 'Bridgetown’s mid-century and newer homes in Green Township generally suit a Level 2 charger, with the garage at hand and the panel evaluated. Our licensed electricians install the dedicated 240V circuit to code. Call (513) 586-5107.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes. The newer houses often have larger panels with room for a 40- or 50-amp EV circuit, while the mid-century homes may need a closer look at capacity.',
      'A load calculation confirms which applies before the charger is selected. The attached garages common across Bridgetown keep the dedicated circuit run short, and we plan the breaker placement and conduit route for a tidy install.',
    ],
    commonIntro: 'Across Bridgetown’s homes, an EV charger fits readily where the panel has room for a dedicated 240V circuit.',
    localFaqs: [{ q: 'Can you install a Level 2 EV charger in a Bridgetown garage?', a: 'Yes. Most Bridgetown garages suit a charger, and we confirm the panel’s capacity with a load calculation first. We then run the dedicated 240V circuit and mount the charger, permitted and to code.' }],
  },
  'finneytown': {
    intro: 'A home EV charger suits Finneytown’s mid-century houses in Springfield Township once the panel is checked for capacity. Our licensed electricians handle the load calc, dedicated 240V circuit, and permit. Call (513) 586-5107.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes. The garages common here mount a charger well, but the mid-1900s panels are now old enough that a load calculation is worthwhile before adding a 40-amp circuit.',
      'That evaluation tells us whether the existing panel carries the charger or whether an upgrade comes first. With the garage usually close to the panel, the dedicated circuit run stays short and the install is straightforward.',
    ],
    commonIntro: 'Across Finneytown’s mid-century homes, an EV charger comes down to whether the panel can take a dedicated 240V circuit.',
    localFaqs: [{ q: 'Will my Finneytown home need an upgrade for an EV charger?', a: 'Not always — many mid-century panels in Springfield Township have room, but some do not, so we run a load calculation first. If an upgrade is needed, we install it with the dedicated circuit, permitted.' }],
  },
  'amberley': {
    intro: 'Amberley Village’s large homes on wooded lots suit a Level 2 charger, often with a longer circuit run from the panel to the garage. Our licensed electricians handle the load calc and the permit. Call (513) 586-5107.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets. Larger homes usually have larger electrical service, which often leaves room for a 40- or 50-amp EV circuit, though we still confirm it with a load calculation.',
      'The big lots mean the garage or parking area can sit some distance from the panel, so the dedicated circuit may need a longer feeder or a subpanel, which we size as part of the job. A 50-amp circuit leaves headroom for faster charging where the service supports it.',
    ],
    commonIntro: 'In Amberley’s large homes, an EV charger usually fits the service well, with the dedicated circuit run sized for the distance to the garage.',
    localFaqs: [{ q: 'Can you run an EV circuit to a far garage in Amberley?', a: 'Yes. On the larger Amberley lots we size a longer feeder or a subpanel during the load calculation so the dedicated 240V circuit reaches the garage. The install is licensed and permitted.' }],
  },
  'arlington-heights': {
    intro: 'Adding a Level 2 EV charger in Arlington Heights means evaluating an older panel and planning a clean dedicated circuit. Our licensed electricians handle the load calc and the permit in this Mill Creek valley village. Call (513) 586-5107.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes. The older service common here means a load calculation is the starting point before a charger that pulls 40 amps continuously goes in.',
      'Because the homes sit on low valley ground, we mount the charger and its disconnect sensibly and route the circuit with moisture in mind. The small lots keep the garage or parking close to the panel, so the dedicated circuit run stays short where an upgrade is not needed.',
    ],
    commonIntro: 'In Arlington Heights’ older valley homes, an EV charger starts with the panel’s capacity and a clean dedicated circuit.',
    localFaqs: [{ q: 'Can you install an EV charger in an older Arlington Heights home?', a: 'Usually yes, once a load calculation confirms the older panel can carry a dedicated 240V circuit. We mount the charger sensibly given the valley setting and handle the permitted, code-compliant work.' }],
  },
  'north-college-hill': {
    intro: 'EV charging in North College Hill’s older homes starts with a look at the early- and mid-1900s panel and a dedicated 240V circuit. Our licensed electricians size the work to code and pull the permit. Call (513) 586-5107.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes. The older, tightly packed housing often runs on undersized service, so a load calculation comes before any charger is specified.',
      'On these small lots, the garage or rear parking is usually close to the panel, keeping the dedicated circuit run short. Where the older panel is near capacity, we size an upgrade alongside the charger circuit so it carries 40 amps without tripping.',
    ],
    commonIntro: 'In North College Hill’s older homes, an EV charger depends on whether the early- or mid-1900s panel can take a dedicated 240V circuit.',
    localFaqs: [{ q: 'Do older North College Hill homes need an upgrade for an EV charger?', a: 'Some do, given the age of the housing, so we run a load calculation first. If the service is short, we install an upgrade with the dedicated 240V circuit, permitted and to code.' }],
  },
  'newtown': {
    intro: 'A home EV charger suits Newtown’s older houses near the Little Miami once the panel is evaluated and the equipment placed for the low ground. Our licensed electricians handle the load calc and the permit. Call (513) 586-5107.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground. That low ground means we mount the charger and its disconnect sensibly off the floor and route the dedicated circuit with moisture in mind.',
      'The older homes carry aging electrical service, so a load calculation confirms whether the panel takes a 40-amp circuit or needs an upgrade. With most garages and parking close to the house, the dedicated circuit run stays short once capacity is sorted.',
    ],
    commonIntro: 'In Newtown’s older homes near the Little Miami, an EV charger comes down to panel capacity and sensible placement for the low ground.',
    localFaqs: [{ q: 'How do you install an EV charger in a low-lying Newtown home?', a: 'We mount the charger and disconnect off the floor and route the dedicated circuit with the river-bottom setting in mind, after checking the panel’s capacity. The install is licensed and permitted.' }],
  },
  'turpin-hills': {
    intro: 'Turpin Hills’ mid-century and newer homes in Anderson Township usually have a garage that suits a Level 2 charger. Our licensed electricians evaluate the panel and install the dedicated 240V circuit to code. Call (513) 586-5107.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. The newer houses often have larger panels with room for a 40- or 50-amp EV circuit, while the mid-century homes may need a closer look at capacity.',
      'A load calculation confirms which applies before the charger is selected. The attached garages common across Turpin Hills keep the dedicated circuit run short, and a 50-amp circuit leaves headroom for faster charging where the panel supports it.',
    ],
    commonIntro: 'Across Turpin Hills’ homes, an EV charger fits readily where the panel has room for a dedicated 240V circuit.',
    localFaqs: [{ q: 'Can my Turpin Hills home support a faster Level 2 charger?', a: 'Often yes — newer panels in Anderson Township frequently have room for a 50-amp circuit, which we confirm with a load calculation. We size and install the dedicated circuit and charger to code, permitted.' }],
  },
  'silverton': {
    intro: 'Installing a Level 2 EV charger in Silverton along Montgomery Road starts with evaluating the panel for a dedicated 240V circuit. Our licensed electricians handle the load calc and the permit. Call (513) 586-5107.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes. The age of the housing means the panel’s capacity has to be confirmed before a charger that pulls 40 amps continuously goes in.',
      'The garages and driveways common across Silverton give a clean place to mount the charger once the supply side is sorted. A load calculation tells us whether the existing panel carries the circuit or whether an upgrade comes first.',
    ],
    commonIntro: 'In Silverton’s older homes, an EV charger comes down to whether the panel can take a dedicated 240V circuit or needs upgrading.',
    localFaqs: [{ q: 'Will my Silverton home need a panel upgrade for an EV charger?', a: 'It depends on the age and capacity of your panel along Montgomery Road, which we check with a load calculation first. If an upgrade is needed, we install it with the dedicated circuit, permitted and to code.' }],
  },
  'lockland': {
    intro: 'Adding a Level 2 EV charger in Lockland’s older worker housing means evaluating an aging panel and planning a clean dedicated circuit. Our licensed electricians handle the load calc and the permit in this Mill Creek valley village. Call (513) 586-5107.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing. The small lots and old service mean a load calculation is the starting point before a charger gets specified.',
      'Because the homes sit on low valley ground, we mount the charger and its disconnect sensibly and route the dedicated circuit with moisture in mind. Where the aging panel is undersized, an upgrade goes in alongside the 240V circuit so it carries the EV load without tripping.',
    ],
    commonIntro: 'In Lockland’s older valley homes, an EV charger starts with the aging panel’s capacity and a clean dedicated circuit.',
    localFaqs: [{ q: 'Can you fit an EV charger in older Lockland worker housing?', a: 'Usually yes, once a load calculation confirms the aging panel can carry a dedicated 240V circuit, or once an upgrade is in place. We mount the charger sensibly given the valley setting, permitted and to code.' }],
  },
  'groesbeck': {
    intro: 'A home EV charger suits Groesbeck’s mid-century houses in Colerain Township once the panel is checked for capacity. Our licensed electricians handle the load calc, dedicated 240V circuit, and permit. Call (513) 586-5107.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. The garages common here mount a charger well, but the mid-1900s panels are now old enough that a load calculation is worthwhile before adding a 40-amp circuit.',
      'That evaluation tells us whether the existing panel carries the charger or whether an upgrade comes first. With the garage usually close to the panel, the dedicated circuit run stays short and the install is straightforward.',
    ],
    commonIntro: 'Across Groesbeck’s mid-century homes, an EV charger comes down to whether the panel can take a dedicated 240V circuit.',
    localFaqs: [{ q: 'Will my Groesbeck home need an upgrade for an EV charger?', a: 'Not always — many mid-century panels in Colerain Township have room, but some do not, so we run a load calculation first. If an upgrade is needed, we install it with the dedicated circuit, permitted.' }],
  },
  'mount-healthy': {
    intro: 'EV charging in Mount Healthy spans an old town center and mid-century streets, so the panel evaluation comes first before a dedicated 240V circuit. Our licensed electricians size the work to code and pull the permit. Call (513) 586-5107.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes. The early-1900s houses around the center often run on undersized service, while the mid-century homes may have more room — a load calculation tells the two apart.',
      'Where the older panel is short, we size an upgrade alongside the dedicated 240V circuit so the charger carries 40 amps without tripping. The garages and driveways common across Mount Healthy give a clean place to mount the charger once the supply side is sorted.',
    ],
    commonIntro: 'In Mount Healthy’s mix of older and mid-century homes, an EV charger depends on whether the panel can take a dedicated 240V circuit or needs an upgrade.',
    localFaqs: [{ q: 'Do older Mount Healthy homes need a panel upgrade for an EV charger?', a: 'The early-1900s homes near the town center often do, while mid-century homes may not, so we run a load calculation first. If an upgrade is needed, we install it with the dedicated 240V circuit, permitted and to code.' }],
  },
};
