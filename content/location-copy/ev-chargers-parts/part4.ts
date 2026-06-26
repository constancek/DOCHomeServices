export const part4: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'reading': {
    intro: 'Bringing home an EV in Reading and want to stop relying on public chargers? We install Level 2 240V home chargers on a dedicated circuit in this Mill Creek valley city, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, with a settled mix of older and mid-century homes. A lot of those houses still run the panel they were built with, sized for a 1950s or 1960s load that never imagined a car drawing 40 to 48 amps for hours overnight. Before we mount a charger, we run a load calculation on the existing service to confirm there is room for a dedicated 240V circuit, and where there is not, we lay out the panel upgrade that makes the charger safe.',
      'Many Reading homes have a detached or tuck-under garage where the panel and the parking spot are not far apart, which keeps the home run short and the install clean. For owners who park in the driveway, we mount a weatherproof outdoor-rated unit instead. Either way the work is permitted and inspected, and we set the charger up to run on off-peak hours so the car fills overnight without straining the rest of the house.',
    ],
    commonIntro: "Across Reading's older and mid-century homes, the EV-charger questions we field most often come down to whether the original service can carry a 240V circuit:",
    localFaqs: [{ q: 'Will my older Reading home need a panel upgrade for an EV charger?', a: 'It depends on what your current service can spare. We do a load evaluation on Reading homes first, and if a 1950s or 1960s panel is already near capacity we size and install the upgrade under permit so the Level 2 circuit is code-compliant.' }],
  },
  'dent': {
    intro: 'Adding a Level 2 charger to your garage in Dent so the EV is full every morning? We install home chargers on a dedicated 240V circuit across this west-side Green Township community, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, built out with established neighborhoods of mid-century and newer homes. The mid-century ranches here almost all came with an attached garage, which is close to ideal for an EV charger — the parking spot, the wall space, and often the panel are all within a short run, so the install stays tidy and the wire run stays affordable.',
      'The catch is the panel behind that garage wall. A mid-century house on its original 100-amp service may not have room for a 48-amp charger circuit once the central air and electric range are accounted for, so we run a load calculation before quoting. Newer Dent subdivisions usually have 200-amp service with capacity to spare, but we still verify it and pull a permit either way so the finished circuit is inspected and labeled.',
    ],
    commonIntro: "Across Dent's mid-century and newer homes, the EV-charger work usually comes down to matching the charger to what the garage panel can carry:",
    localFaqs: [{ q: 'Can you mount an EV charger in my attached garage in Dent?', a: 'Yes, attached garages are the most common install we do in Dent. We confirm the panel has capacity for a dedicated 240V circuit, then mount and wire the charger under permit by a licensed electrician.' }],
  },
  'deer-park': {
    intro: 'Charging an EV at home in Deer Park instead of hunting for a public station? We install Level 2 240V chargers on a dedicated circuit across this small east-side city, with permitted, code-compliant work. Call (513) 586-5107.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets. Those houses are now at the age where the original electrical service was sized for the appliances of the time, not for a car that pulls 40-plus amps overnight, so the first thing we do is a load calculation to see whether a dedicated 240V circuit will fit.',
      'Most of these mid-century homes have a garage close to the panel, which keeps the home run short and makes the charger a straightforward add when the service has room. Where the panel is already full, we size the upgrade that clears the way. Every Deer Park charger install is permitted and inspected, and we set it for off-peak charging so the car tops off overnight without competing with the rest of the house.',
    ],
    commonIntro: "Across Deer Park's mid-century homes, the EV-charger question is usually whether the original service can spare a dedicated 240V circuit:",
    localFaqs: [{ q: 'Do I need to upgrade my panel for an EV charger in Deer Park?', a: 'Only if your existing service is near capacity. We run a load evaluation on Deer Park homes first, and where a mid-century panel cannot spare the amps we install the upgrade under permit by a licensed electrician.' }],
  },
  'terrace-park': {
    intro: 'Adding home charging for an EV in Terrace Park? We install Level 2 240V chargers on a dedicated circuit in this east-side village near the Little Miami, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets. Larger, older homes here often mean longer wire runs from the panel out to a detached garage or a driveway parking spot, and the original service in a century-old house may be undersized for a modern charger, so we evaluate the panel and plan the route before any wire goes in.',
      'These are also households that often run two vehicles, and a second EV can push an older panel past what it can safely carry. Where that is the case we size a 200-amp upgrade or a dedicated sub-panel so both cars can charge without nuisance trips. The low ground near the river is a factor for any outdoor-mounted unit, so we use weatherproof, properly grounded equipment, and we permit and inspect the work to protect the home.',
    ],
    commonIntro: "In Terrace Park's established older homes, EV charging usually turns on the age of the service and the run out to the garage or drive:",
    localFaqs: [{ q: 'We want to charge two EVs at our Terrace Park home — is that possible?', a: 'Usually yes, but two chargers add real load. We evaluate the panel on your Terrace Park home and, if the older service cannot carry both, size a 200-amp upgrade or sub-panel under permit so both cars charge safely.' }],
  },
  'dry-run': {
    intro: 'Charging your EV overnight at home in Dry Run beats waiting at a public station. We install Level 2 240V chargers on a dedicated circuit across this east-side Anderson Township community, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes. EVs are increasingly common in subdivisions like these, where most homes have an attached garage and a driveway, so a Level 2 charger on the garage wall is the natural fit — short run, clean mount, and the car ready every morning.',
      'Newer Dry Run homes usually carry 200-amp service with capacity for a dedicated charger circuit, while the older mid-century houses may be tighter. We run a load calculation either way before committing to the charger amperage, then pull the permit and have the finished circuit inspected. We also set the charger to run on off-peak hours so the overnight charge does not collide with morning loads.',
    ],
    commonIntro: "Across Dry Run's mid-century and newer homes, the EV-charger work comes down to confirming the panel can carry a dedicated 240V circuit:",
    localFaqs: [{ q: 'How fast can you install an EV charger at my Dry Run home?', a: 'For a garage close to the panel with capacity to spare, most Dry Run installs are a single visit. We evaluate the panel first, then mount and wire the charger under permit by a licensed electrician.' }],
  },
  'white-oak': {
    intro: 'Want to charge your EV at home in White Oak instead of relying on public stations? We install Level 2 240V chargers on a dedicated circuit across this northwest-side Green Township community, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes. The mid-century ranches here typically have an attached garage near the panel, which makes a Level 2 charger an easy add when the service has room — the wire run is short and the mount is straightforward.',
      'Whether the existing panel can carry the charger is the open question. Older White Oak homes on 100-amp service may need an upgrade once a 40- or 48-amp circuit is added to central air and an electric range, while newer subdivisions usually have headroom on 200-amp service. We run the load calculation up front, size the charger to the panel, and permit and inspect the work so the circuit is safe and documented.',
    ],
    commonIntro: "Across White Oak's mid-century and newer homes, the EV-charger work hinges on what the garage panel can spare:",
    localFaqs: [{ q: 'Will my White Oak home need a panel upgrade for an EV charger?', a: 'Only if the existing service is near its limit. We evaluate the panel on your White Oak home first, and where a mid-century service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'forestville': {
    intro: 'Setting up home charging for an EV in Forestville? We install Level 2 240V chargers on a dedicated circuit across this east-side Anderson Township community, with permitted, code-compliant work. Call (513) 586-5107.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. Homes like these are well suited to a garage-mounted Level 2 charger — most have an attached garage and a driveway, so the parking spot and the panel are usually within a manageable run.',
      'The deciding factor is the panel. Mid-century Forestville homes reach the age where the original service is tight once modern appliances are accounted for, so we run a load calculation before settling on charger amperage. Newer homes generally have 200-amp service with room to spare. Either way we pull a permit, have the circuit inspected, and set the charger to draw on off-peak hours so the car fills overnight cleanly.',
    ],
    commonIntro: "Across Forestville's mid-century and newer homes, the EV-charger work depends on whether the service can carry a dedicated 240V circuit:",
    localFaqs: [{ q: 'Can you install a Level 2 charger in my Forestville garage?', a: 'Yes, garage installs are common here. We confirm the panel has capacity for a dedicated 240V circuit on your Forestville home, then mount and wire the charger under permit by a licensed electrician.' }],
  },
  'cherry-grove': {
    intro: 'Charging an EV at home in Cherry Grove instead of stopping at public stations? We install Level 2 240V chargers on a dedicated circuit across this east-side Anderson Township community, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes. The attached garages common in these subdivisions are close to ideal for an EV charger, since the panel, the wall space, and the parked car tend to sit within a short home run.',
      'What we always check first is whether the panel can take the load. An older Cherry Grove home still on 100-amp service may need an upgrade before a 48-amp charger circuit is safe, while newer homes usually have 200-amp service with headroom. We run a load calculation, size the charger to match, and permit and inspect the work — and for driveway parking we mount a weatherproof outdoor-rated unit instead of a garage model.',
    ],
    commonIntro: "Across Cherry Grove's mid-century and newer homes, the EV-charger question is whether the panel can spare a dedicated 240V circuit:",
    localFaqs: [{ q: 'Do I need a bigger panel for an EV charger in Cherry Grove?', a: 'Only if your current service is near capacity. We evaluate the panel on your Cherry Grove home first, and where an older service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'kenwood': {
    intro: 'Adding home charging for an EV in Kenwood, or a second charger for a second car? We install Level 2 240V chargers on a dedicated circuit in this upscale east-side community, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses. The larger homes here are exactly the households that add a second EV, and a second 48-amp charger is a meaningful load — enough that we frequently recommend confirming 200-amp or larger service before two chargers go in.',
      'We start every Kenwood install with a load calculation against the existing panel. Larger newer homes often already have the capacity; older mid-century houses may need a panel upgrade or a dedicated sub-panel to carry the charger without nuisance trips. We pull a permit and have the work inspected, and we set the chargers to run on off-peak hours so both cars fill overnight without spiking the home load.',
    ],
    commonIntro: "Across Kenwood's mid-century and larger homes, EV charging usually turns on whether the service can carry one charger or two:",
    localFaqs: [{ q: 'Can my Kenwood home support charging two EVs at once?', a: 'Often it can, but two chargers need real capacity. We evaluate the panel on your Kenwood home and, where the service falls short, size a 200-amp upgrade or sub-panel under permit so both cars charge safely.' }],
  },
  'lincoln-heights': {
    intro: 'Want to charge your EV at home in Lincoln Heights rather than at public stations? We install Level 2 240V chargers on a dedicated circuit in this historic Mill Creek valley community, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes. Houses of that age and size often run a smaller original service, so the first step before any charger goes in is a load calculation to see whether a dedicated 240V circuit will fit.',
      'Where the existing panel cannot spare the amps for a 40- or 48-amp charger, we size and install the upgrade that makes it safe, rather than overloading an aging service. Many of these homes have a detached garage or driveway parking, so we match the mount to the spot — a garage unit or a weatherproof outdoor model. The work is permitted and inspected, and we set the charger for off-peak hours so it fills the car overnight.',
    ],
    commonIntro: "In Lincoln Heights' older valley homes, the EV-charger question is usually whether the smaller original service can carry a 240V circuit:",
    localFaqs: [{ q: 'My Lincoln Heights home has an older panel — can I still add an EV charger?', a: 'In most cases yes. We evaluate the existing service on your Lincoln Heights home, and where the older panel cannot carry the charger we install a properly sized upgrade under permit by a licensed electrician.' }],
  },
  'dillonvale': {
    intro: 'Charging an EV overnight at home in Dillonvale beats waiting at a public station. We install Level 2 240V chargers on a dedicated circuit in this east-side Sycamore Township community, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes. Those mid-century houses typically have an attached garage close to the panel, which keeps the charger install short and clean once we confirm the service can carry it.',
      'Homes of this era are now at the age where the original panel may be tight on capacity, so we run a load calculation before settling on charger amperage and, where needed, lay out the upgrade. We pull a permit for every Dillonvale charger install, have the circuit inspected, and configure off-peak charging so the car fills overnight without competing with the morning load.',
    ],
    commonIntro: "Across Dillonvale's mid-century homes, the EV-charger work comes down to whether the original service can spare a 240V circuit:",
    localFaqs: [{ q: 'How do I know if my Dillonvale home can handle an EV charger?', a: 'A load evaluation tells you. We check the existing service on your Dillonvale home for capacity, and if a mid-century panel cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'woodlawn': {
    intro: 'Setting up home charging for an EV in Woodlawn? We install Level 2 240V chargers on a dedicated circuit in this Mill Creek valley village, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors. The older homes on its residential streets often run a service sized for an earlier era, so we begin with a load calculation to confirm there is room for a dedicated 240V charger circuit before any work starts.',
      'Where the panel is already near capacity, we size the upgrade that clears the way rather than overloading an aging service. We match the charger mount to where the car parks — a garage-mounted unit or a weatherproof outdoor-rated model for driveway charging — and we permit and inspect the work. The charger is set for off-peak hours so the car tops off overnight.',
    ],
    commonIntro: "Across Woodlawn's older homes, the EV-charger question is usually whether the existing service can carry a 240V circuit:",
    localFaqs: [{ q: 'Will my Woodlawn home need electrical work before an EV charger?', a: 'Sometimes. We run a load evaluation on Woodlawn homes first, and where the older service cannot spare the amps for a Level 2 charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'addyston': {
    intro: 'Want to charge your EV at home in Addyston instead of driving to a public station? We install Level 2 240V chargers on a dedicated circuit in this far-west river village, with permitted, code-compliant work. Call (513) 586-5107.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes. Houses this old usually carry a small original service and limited panel space, so the first step before a charger goes in is a load calculation to see whether a dedicated 240V circuit will fit at all.',
      'Where the existing panel cannot carry a 40- or 48-amp charger, we size the upgrade that makes it safe. The riverside position also matters for any outdoor-mounted unit — high water and damp ground mean we use weatherproof, properly grounded equipment for driveway charging. Every Addyston charger install is permitted and inspected so the circuit holds up.',
    ],
    commonIntro: "In Addyston's older riverside homes, the EV-charger question starts with whether the small original service can carry a 240V circuit:",
    localFaqs: [{ q: 'Can an older Addyston home support an EV charger?', a: 'Often yes, but the small original service is the limiting factor. We evaluate the panel on your Addyston home, and where it cannot carry the charger we install a properly sized upgrade under permit by a licensed electrician.' }],
  },
  'greenhills': {
    intro: 'Adding home charging for an EV in Greenhills? We install Level 2 240V chargers on a dedicated circuit in this historic planned village, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned Greenbelt town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use. Homes built that long ago carry close to a century of electrical wear and a service that was never meant to power a car charging overnight, so a load calculation comes first on every install here.',
      'Where a 1930s-era panel cannot carry a 240V charger circuit, we size and install the upgrade rather than push an aging service past its limit. We also take care with the routing and the mount so the work does not disturb the historic character of these cottages and townhomes — a discreet garage or driveway-side install — and we permit and inspect the circuit throughout.',
    ],
    commonIntro: "In Greenhills' 1930s planned-community homes, the EV-charger question is whether the original service can carry a 240V circuit:",
    localFaqs: [{ q: 'Can you add an EV charger to a historic Greenhills home?', a: 'Yes. We evaluate the original service on Greenhills homes, install any needed upgrade under permit, and route and mount the charger with care for the historic Greenbelt character.' }],
  },
  'northbrook': {
    intro: 'Charging your EV at home in Northbrook beats relying on public stations. We install Level 2 240V chargers on a dedicated circuit in this northwest Colerain Township community, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. Those mid-century ranches usually have an attached garage near the panel, which makes a Level 2 charger a clean add once we confirm the service has room for a dedicated circuit.',
      'The original panel is the variable. A Northbrook home still on 100-amp service may need an upgrade before a 48-amp charger circuit is safe alongside central air and an electric range, so we run a load calculation up front. We size the charger to match, pull a permit, and have the work inspected, then set it for off-peak charging so the car fills overnight.',
    ],
    commonIntro: "Across Northbrook's mid-century homes, the EV-charger work depends on whether the garage panel can carry a 240V circuit:",
    localFaqs: [{ q: 'Will my Northbrook home need a panel upgrade for an EV charger?', a: 'Only if the existing service is near capacity. We evaluate the panel on your Northbrook home first, and where a mid-century service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'indian-hill': {
    intro: 'Adding home charging for an EV in Indian Hill, or a second charger for the estate? We install Level 2 240V chargers on a dedicated circuit across this east-side village, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road. Those big properties often mean a long run from the panel out to a detached garage or carriage house where the EVs park, so we plan the route and the conductor sizing carefully before any wire goes in.',
      'These are also households adding a second or even third EV, and multiple 48-amp chargers add up fast — frequently enough to call for 200-amp or larger service or a dedicated sub-panel near the garage. We run a load calculation against the existing service, size the upgrade where it is needed, and permit and inspect the work. We also set the chargers for off-peak hours so several cars can fill overnight without spiking the load.',
    ],
    commonIntro: "On Indian Hill's large estates, EV charging usually turns on long service runs and the load of one or more chargers:",
    localFaqs: [{ q: 'Can you wire two or three EV chargers at an Indian Hill estate?', a: 'Yes, but multiple chargers need real capacity. We evaluate the service on your Indian Hill property and, where it falls short, size a 200-amp-or-larger upgrade or a garage sub-panel under permit so every car charges safely.' }],
  },
  'evendale': {
    intro: 'Want to charge your EV at home in Evendale instead of at public stations? We install Level 2 240V chargers on a dedicated circuit in this north-side village, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods. The residential mid-century homes here generally have an attached garage near the panel, which keeps a Level 2 charger install short and clean once we confirm the service can carry the circuit.',
      'The deciding factor is the panel capacity. An older Evendale home may be tight on amps once a 48-amp charger is added to the existing load, so we run a load calculation before settling on charger size. We pull a permit and have the work inspected, and we set the charger to draw on off-peak hours so the car fills overnight without straining the rest of the house.',
    ],
    commonIntro: "Across Evendale's residential homes, the EV-charger work comes down to whether the service can spare a dedicated 240V circuit:",
    localFaqs: [{ q: 'How do I know if my Evendale home can handle an EV charger?', a: 'A load evaluation answers that. We check the existing service on your Evendale home for capacity, and where it cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'glendale': {
    intro: 'Adding home charging for an EV in Glendale? We install Level 2 240V chargers on a dedicated circuit in this historic railroad-suburb village, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets. Those 19th-century homes often still carry an undersized original service and a detached carriage house or garage set away from the house, so we plan the run and evaluate the panel before any charger goes in.',
      'Where a Victorian-era service cannot carry a 240V charger circuit, we size and install the upgrade rather than overload an aging panel. We route the wire and mount the charger with care for the historic character of these homes, and we permit and inspect the work so the finished circuit is safe and documented for the long term.',
    ],
    commonIntro: "In Glendale's preserved Victorian homes, the EV-charger question is whether the original service can carry a 240V circuit:",
    localFaqs: [{ q: 'Can you add an EV charger to a historic Glendale home?', a: 'Yes. We evaluate the original service on Glendale homes, install any needed upgrade under permit, and route the charger to a garage or carriage house with care for the historic details.' }],
  },
  'sharonville': {
    intro: 'Setting up home charging for an EV in Sharonville? We install Level 2 240V chargers on a dedicated circuit for homes across this north-side city, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention center, and industrial corridors. The residential mid-century homes here usually have an attached garage near the panel, which makes a Level 2 charger a clean add once the service is confirmed to have room for a dedicated circuit.',
      'Mid-century Sharonville homes reach the age where the original panel can be tight, so we run a load calculation before settling on charger amperage and size an upgrade where one is needed. We pull a permit and have the circuit inspected, and we set the charger for off-peak hours so the overnight charge does not collide with the morning load.',
    ],
    commonIntro: "Across Sharonville's mid-century homes, the EV-charger work depends on whether the service can carry a dedicated 240V circuit:",
    localFaqs: [{ q: 'Can you install an EV charger in my Sharonville garage?', a: 'Yes, garage installs are common here. We confirm the panel on your Sharonville home has capacity for a dedicated 240V circuit, then mount and wire the charger under permit by a licensed electrician.' }],
  },
  'northgate': {
    intro: 'Charging your EV at home in Northgate beats waiting at a public station. We install Level 2 240V chargers on a dedicated circuit in this northwest Colerain Township area, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes. The attached garages common in these subdivisions sit close to the panel, which keeps the charger run short and the install clean when the service has room.',
      'Whether the panel can carry the charger is what we check first. Older Northgate homes on 100-amp service may need an upgrade before a 48-amp circuit is safe, while newer homes generally have 200-amp service with capacity to spare. We run a load calculation, size the charger to match, and permit and inspect the work, then set it for off-peak charging.',
    ],
    commonIntro: "Across Northgate's mid-century and newer homes, the EV-charger work hinges on what the garage panel can spare:",
    localFaqs: [{ q: 'Do I need a panel upgrade for an EV charger in Northgate?', a: 'Only if the existing service is near capacity. We evaluate the panel on your Northgate home first, and where an older service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'springdale': {
    intro: 'Want to charge your EV at home in Springdale instead of at public stations? We install Level 2 240V chargers on a dedicated circuit for homes across this north-side city, with permitted, code-compliant work. Call (513) 586-5107.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base. The mid-century homes here typically have an attached garage near the panel, which makes a Level 2 charger a straightforward add once we confirm the service can carry a dedicated circuit.',
      'Those mid-century homes are now at the age where the original panel may be tight on capacity, so we run a load calculation before settling on charger amperage and lay out an upgrade where the service falls short. We pull a permit and have the circuit inspected, and we configure off-peak charging so the car fills overnight without competing with the morning load.',
    ],
    commonIntro: "Across Springdale's mid-century homes, the EV-charger work comes down to whether the service can carry a dedicated 240V circuit:",
    localFaqs: [{ q: 'Will my Springdale home need a panel upgrade for an EV charger?', a: 'Only if the existing service is near its limit. We evaluate the panel on your Springdale home first, and where a mid-century service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'miamitown': {
    intro: 'Charging an EV at home in Miamitown instead of driving to a public station? We install Level 2 240V chargers on a dedicated circuit in this far-west community on the Great Miami River, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground. Houses this old usually carry a smaller original service, so the first step before a charger goes in is a load calculation to confirm there is room for a dedicated 240V circuit.',
      'The low riverside ground matters for the install too. For driveway charging we use weatherproof, properly grounded outdoor-rated equipment that holds up to damp ground and high water, and where the older panel cannot carry a 40- or 48-amp charger we size the upgrade that makes it safe. The work is permitted and inspected throughout.',
    ],
    commonIntro: "In Miamitown's older riverside homes, the EV-charger question starts with whether the original service can carry a 240V circuit:",
    localFaqs: [{ q: 'Can I put an EV charger outdoors at my Miamitown home near the river?', a: 'Yes. We use weatherproof, properly grounded equipment for outdoor charging on low-lying Miamitown lots, evaluate the panel for capacity, and install the circuit under permit by a licensed electrician.' }],
  },
  'forest-park': {
    intro: 'Setting up home charging for an EV in Forest Park? We install Level 2 240V chargers on a dedicated circuit across this planned north-side city, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes. Those 1960s-era houses almost all have an attached garage near the panel, which makes a garage-mounted Level 2 charger a clean add once we confirm the service has room for a dedicated circuit.',
      'The original 1960s panel is the variable. A Forest Park home still on its first 100-amp service may need an upgrade before a 48-amp charger circuit is safe alongside the central air and electric range, so we run a load calculation up front. We size the charger to match, permit and inspect the work, and set it for off-peak hours so the car fills overnight.',
    ],
    commonIntro: "Across Forest Park's planned-era homes, the EV-charger work depends on whether the original service can carry a 240V circuit:",
    localFaqs: [{ q: 'My Forest Park home is from the 1960s — can it handle an EV charger?', a: 'Often yes, but the original service is the limiting factor. We evaluate the panel on your Forest Park home, and where the 1960s service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'pleasant-run': {
    intro: 'Charging your EV at home in Pleasant Run beats relying on public stations. We install Level 2 240V chargers on a dedicated circuit in this north-side Springfield Township community, with permitted, licensed work. Call (513) 586-5107.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes. The attached garages common across these subdivisions sit close to the panel, which keeps a Level 2 charger install short and clean when the service has capacity for a dedicated circuit.',
      'Whether the panel can carry the charger is the open question. Older Pleasant Run homes may be tight on a 100-amp service once a 48-amp circuit is added, while newer homes usually have 200-amp service with headroom. We run a load calculation, size the charger to the panel, permit and inspect the work, and set off-peak charging so the car fills overnight.',
    ],
    commonIntro: "Across Pleasant Run's mid-century and newer homes, the EV-charger work hinges on what the panel can spare:",
    localFaqs: [{ q: 'Will my Pleasant Run home need a panel upgrade for an EV charger?', a: 'Only if the existing service is near capacity. We evaluate the panel on your Pleasant Run home first, and where an older service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'cleves': {
    intro: 'Want to charge your EV at home in Cleves instead of at a public station? We install Level 2 240V chargers on a dedicated circuit in this far-west river village, with permitted, code-compliant work. Call (513) 586-5107.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding. Houses this age usually carry a smaller original service, so we begin every charger install with a load calculation to confirm there is room for a dedicated 240V circuit.',
      'The low riverside ground shapes the install. For driveway charging we use weatherproof, properly grounded outdoor-rated equipment suited to damp ground and high water, and where the older panel cannot carry a 40- or 48-amp charger we size the upgrade that makes it safe. The work is permitted and inspected so the finished circuit holds up.',
    ],
    commonIntro: "In Cleves' older riverside homes, the EV-charger question starts with whether the original service can carry a 240V circuit:",
    localFaqs: [{ q: 'Can an older Cleves home near the rivers support an EV charger?', a: 'Often yes. We evaluate the panel on your Cleves home, use weatherproof equipment for outdoor charging on low-lying lots, and install the circuit under permit by a licensed electrician.' }],
  },
  'north-bend': {
    intro: 'Adding home charging for an EV in North Bend? We install Level 2 240V chargers on a dedicated circuit in this historic far-west river village, with permitted, code-compliant work by licensed electricians. Call (513) 586-5107.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground. Those older homes often carry a smaller original service, so a load calculation comes first to confirm a dedicated 240V charger circuit will fit.',
      'The riverfront position matters for the install. We use weatherproof, properly grounded outdoor-rated equipment for driveway charging where the ground is damp or prone to high water, and where an older panel cannot carry the charger we size the upgrade that makes it safe. Every North Bend charger install is permitted and inspected.',
    ],
    commonIntro: "In North Bend's older riverside homes, the EV-charger question is whether the original service can carry a 240V circuit:",
    localFaqs: [{ q: 'Can you install an EV charger at my North Bend home near the river?', a: 'Yes. We evaluate the panel on your North Bend home, use weatherproof equipment for outdoor charging on low riverside lots, and install the circuit under permit by a licensed electrician.' }],
  },
  'loveland': {
    intro: 'Charging your EV at home in Loveland beats waiting at a public station. We install Level 2 240V chargers on a dedicated circuit in this historic city on the Little Miami River, with permitted, code-compliant work. Call (513) 586-5107.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes. The older homes near the river often carry an undersized original service, so we run a load calculation before any charger goes in, while newer Loveland subdivisions usually have 200-amp service with room for a dedicated circuit.',
      'The low riverside ground shapes the outdoor work. For driveway charging near the river we use weatherproof, properly grounded equipment, and where an older downtown home cannot carry a 240V charger circuit we size the upgrade that makes it safe. We permit and inspect every install, and set the charger for off-peak hours so the car fills overnight.',
    ],
    commonIntro: "Across Loveland's historic and newer homes, the EV-charger work depends on whether the service can carry a dedicated 240V circuit:",
    localFaqs: [{ q: 'Will my older Loveland home need a panel upgrade for an EV charger?', a: 'It depends on the existing service. We evaluate the panel on your Loveland home first, and where an older downtown service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
  'harrison': {
    intro: 'Want to charge your EV at home in Harrison rather than at public stations? We install Level 2 240V chargers on a dedicated circuit in this far-west city on the Indiana line, with permitted, code-compliant work. Call (513) 586-5107.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes. Older downtown homes here often carry an undersized original service, so we run a load calculation before any charger goes in, while the newer subdivisions usually have 200-amp service with capacity for a dedicated circuit.',
      'The low ground near the Whitewater matters for outdoor installs. For driveway charging we use weatherproof, properly grounded equipment suited to damp ground, and where an older home cannot carry a 40- or 48-amp charger we size the upgrade that makes it safe. We permit and inspect the work, then set the charger for off-peak hours so the car fills overnight.',
    ],
    commonIntro: "Across Harrison's older and newer homes, the EV-charger work comes down to whether the service can carry a dedicated 240V circuit:",
    localFaqs: [{ q: 'Do I need a panel upgrade for an EV charger in Harrison?', a: 'It depends on what your service can spare. We evaluate the panel on your Harrison home first, and where an older downtown service cannot carry the charger we install the upgrade under permit by a licensed electrician.' }],
  },
};
