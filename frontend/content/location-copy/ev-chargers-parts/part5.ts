export const part5: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'ludlow': {
    intro: 'Many Ludlow homes still run a 60-amp fuse box or early breaker panel that was never sized for a 40-amp EV charger pulling for hours. In these Victorian and early-1900s houses near Elm Street, Level 2 charger installation starts with whether that aging panel can carry the circuit.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Kenton County river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes. Houses built that long ago often still run on the electrical service they were born with — a 60-amp fuse box or an early breaker panel that was never sized to carry a 40-amp EV charger pulling for hours every night.',
      'Before we mount anything, we run a load calculation on the existing panel to see whether it can take a dedicated 240V circuit. In a century-old Ludlow home the answer is often a panel upgrade first, then the charger — and because many of these homes sit close to the river with detached or basement-level service, we route the circuit cleanly and complete the work under the proper permit.',
    ],
    commonIntro: 'In Ludlow’s century-old riverfront homes, the EV-charger question almost always starts with whether an aging panel can carry a new 240V circuit:',
    localFaqs: [{ q: 'Can an older Ludlow home handle a Level 2 EV charger?', a: 'Often, but not always. We evaluate the panel and run a load calculation first, and if a historic Ludlow home’s service is undersized we upgrade it before adding the dedicated 240V circuit, all permitted and to code.' }],
  },
  'park-hills': {
    intro: 'Park Hills panels are often 40 to 60 years old and already short on breaker space, which leaves no easy room for an EV charger’s dedicated circuit. In these early-1900s hillside homes near Devou Park, we evaluate the panel up front and find room before installing a Level 2 charger.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Kenton County city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington. Many of those houses still run on a panel that is 40 to 60 years old and already short on breaker space, which leaves no easy room for the dedicated circuit an EV charger needs.',
      'When a Park Hills panel is full, the load calculation usually points to a service upgrade before the charger goes in. We size the new service with headroom, then mount the charger in the garage or on an exterior wall to suit the home — useful here, where the steep grade and detached garages common on these streets shape where the circuit can run.',
    ],
    commonIntro: 'In Park Hills’ older hillside homes, home charging tends to hinge on whether a decades-old panel has room for another 240V circuit:',
    localFaqs: [{ q: 'My Park Hills panel is already full — can I still add an EV charger?', a: 'Yes. When an older Park Hills panel has no room left, we evaluate the service, upgrade it where the load calculation calls for it, and then add the dedicated circuit for your charger under a permit.' }],
  },
  'bromley': {
    intro: 'Original fuse boxes and early panels are common in Bromley’s older homes on low ground beside the Ohio. Before a Level 2 EV charger goes in, we check whether that service can take a dedicated 240V circuit, and whether a damp basement panel needs attention first.',
    relevance: [
      'Bromley (ZIP 41016) is a small Kenton County river village next to Ludlow, with older homes on low ground beside the Ohio River. Houses of that vintage frequently still hold their original electrical service — a fuse box or early panel that predates modern appliance loads, never mind a 40-amp charging circuit.',
      'In a low-lying Bromley home, the panel often sits in a damp basement, so a load calculation and a look at the enclosure come first. If the service is undersized or corroded, we upgrade it, then run the dedicated 240V circuit to a garage or driveway mount and complete the work under the proper permit.',
    ],
    commonIntro: 'In Bromley’s older riverside homes, a home charger usually starts with checking whether the original service can take a dedicated 240V circuit:',
    localFaqs: [{ q: 'My Bromley panel is old and in a damp basement — can you add a charger?', a: 'We assess the panel’s condition and capacity first. If a Bromley home’s service is too small or corroded, we upgrade it before running the dedicated EV circuit, all permitted and to code.' }],
  },
  'fort-wright': {
    intro: 'Mid-century panels in Fort Wright may already be near capacity, and a 240V EV charger circuit is exactly the load that pushes one over. So Level 2 charger installation in these hilltop homes starts with a load calculation. Then we install the dedicated circuit.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes. Mid-century houses here have reached the age where the original panel may already be near capacity, and a 240V charging circuit is exactly the kind of load that pushes it over.',
      'We run a load calculation before quoting the job, so a Fort Wright homeowner knows whether the existing service carries the charger or needs an upgrade first. Most of these homes have an attached garage, which makes a clean, code-compliant mount straightforward once the dedicated circuit is in.',
    ],
    commonIntro: 'In Fort Wright’s mid-century homes, the EV-charger conversation centers on whether the existing panel has the capacity for a new 240V circuit:',
    localFaqs: [{ q: 'Will my Fort Wright home’s panel support a Level 2 charger?', a: 'We find out with a load calculation. Many mid-century Fort Wright panels can take the charger, and where the service is undersized we upgrade it before adding the dedicated circuit, permitted and to code.' }],
  },
  'fort-mitchell': {
    intro: 'Older Fort Mitchell houses along the Dixie Highway corridor often run a panel that predates EVs entirely. Adding a Level 2 EV charger means confirming the service can carry a sustained 240V load before we install, in the historic and mid-century homes alike.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets. Those older houses often run on a panel that predates EVs entirely, and adding a charger means confirming the service can carry a sustained 240V load.',
      'We start with a panel evaluation and load calculation, then run the dedicated circuit to a garage or exterior mount that fits the home. For a Fort Mitchell commuter, that turns the Dixie Highway run into an overnight top-up at home rather than a stop at a public station.',
    ],
    commonIntro: 'Across Fort Mitchell’s historic and mid-century homes, home charging depends on whether an older panel can support a dedicated 240V circuit:',
    localFaqs: [{ q: 'Is home charging in Fort Mitchell better than using public stations?', a: 'For most commuters, yes. We evaluate your panel and install a Level 2 charger on a dedicated circuit so a Fort Mitchell home charges overnight, with any needed service upgrade handled under a permit.' }],
  },
  'villa-hills': {
    intro: 'Even the newer houses in Villa Hills were wired before home charging was common, so a 40-amp EV charger circuit gets checked against the panel’s rated capacity. Most mid-century and newer homes in this hilltop city have a garage that makes the Level 2 mount simple.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes. Even the newer houses here were wired before home charging was common, so a 40-amp EV circuit needs to be checked against the panel’s rated capacity.',
      'We run a load calculation on the existing service before installing, so a Villa Hills homeowner knows whether the panel carries the charger or needs more headroom first. Most homes here have an attached garage, which keeps the dedicated circuit short and the mount tidy.',
    ],
    commonIntro: 'In Villa Hills’ mid-century and newer homes, adding a charger comes down to whether the panel has capacity for another 240V circuit:',
    localFaqs: [{ q: 'Does my Villa Hills garage make EV charger installation easier?', a: 'Usually. An attached garage keeps the dedicated circuit short and the mount clean, and we confirm the panel can carry the load before installing your Level 2 charger to code.' }],
  },
  'lakeside-park': {
    intro: 'A sustained 240V charging load is what tends to expose a mid-century panel near its limit, and that is the main question for a Level 2 EV charger in Lakeside Park. We check the original panel in these settled homes, then install the dedicated circuit.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city made up largely of mid-century single-family homes on quiet streets. Homes of that era are now at the age where the original panel may be near its limit, and a sustained 240V charging load is what tends to expose it.',
      'We evaluate the panel and run a load calculation before quoting, so a Lakeside Park homeowner is not surprised by a service upgrade halfway through. Where the capacity is there, the attached garage common on these streets makes for a short, clean dedicated circuit.',
    ],
    commonIntro: 'Across Lakeside Park’s mid-century homes, home charging hinges on whether an older panel can carry a new 240V circuit:',
    localFaqs: [{ q: 'Will a mid-century Lakeside Park home support a Level 2 charger?', a: 'Often it will, but we confirm with a load calculation first. If a Lakeside Park panel is undersized, we upgrade the service before adding the dedicated EV circuit, permitted and to code.' }],
  },
  'crescent-springs': {
    intro: 'Across Crescent Springs, in mid-century and newer homes alike, the EV charger question is the same: can the existing panel carry a dedicated 40-amp circuit running for hours overnight. We run a load calculation first, then install the Level 2 charger on that circuit.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city with established neighborhoods of mid-century and newer homes. Across that range, the question for an EV charger is the same: can the existing panel carry a dedicated 40-amp circuit running for hours overnight.',
      'We run a load calculation before the job so a Crescent Springs homeowner knows the answer up front, then mount the charger in the garage or on an exterior wall to suit the home. Where the service is short on capacity, we size an upgrade with room for the charger and future loads.',
    ],
    commonIntro: 'In Crescent Springs’ suburban homes, a home charger depends on whether the panel has the capacity for another 240V circuit:',
    localFaqs: [{ q: 'How do I know if my Crescent Springs panel can handle an EV charger?', a: 'A load calculation tells us. We evaluate your Crescent Springs panel before installing, and where the capacity is short we upgrade the service first, all permitted and to code.' }],
  },
  'crestview-hills': {
    intro: 'Homes in Crestview Hills near Thomas More University and the mall were mostly wired before EVs were common. So a Level 2 EV charger circuit needs to be sized against the panel’s rated load before installation. We check that, then mount the charger.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor. The mid-century and newer homes here were wired before EVs were common, so a charging circuit needs to be sized against the panel’s rated load.',
      'We run a panel evaluation and load calculation before installing, so a Crestview Hills homeowner knows whether the service carries the charger or needs more capacity. With an attached garage on most of these homes, the dedicated 240V circuit stays short and the mount is clean.',
    ],
    commonIntro: 'Across Crestview Hills’ homes, home charging comes down to whether the panel can support a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you install an EV charger at a Crestview Hills home?', a: 'Yes. We evaluate the panel, run a load calculation, and install a Level 2 charger on a dedicated circuit, upgrading the service first if a Crestview Hills home needs the capacity. All work is permitted and to code.' }],
  },
  'edgewood': {
    intro: 'Whether the panel has room for another 240V circuit decides most Level 2 EV charger installations in Edgewood. The mid-century and newer homes near St. Elizabeth Healthcare vary, so we evaluate the panel up front before installing on a dedicated circuit.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes. Homes of that era have reached the age where the original panel may be near capacity, and a 240V charging circuit is the load that tends to expose it.',
      'We run a load calculation before quoting, so an Edgewood homeowner knows whether the service takes the charger or needs an upgrade first. Most homes here have an attached garage, which makes for a short, code-compliant dedicated circuit once capacity is confirmed.',
    ],
    commonIntro: 'In Edgewood’s mid-century and newer homes, a charger install hinges on whether the panel has room for another 240V circuit:',
    localFaqs: [{ q: 'Will my Edgewood panel support a Level 2 EV charger?', a: 'We confirm with a load calculation. Many Edgewood panels can carry the charger, and where the service is undersized we upgrade it before adding the dedicated circuit, permitted and to code.' }],
  },
  'taylor-mill': {
    intro: 'Taylor Mill homes south of Covington were mostly wired before home charging was common, newer houses included. A 40-amp EV charger circuit gets checked against the panel’s rated capacity first. Most have a garage that suits a Level 2 charger well.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes. Even the newer houses here were wired before home charging was common, so a 40-amp EV circuit needs to be checked against the panel’s rated capacity.',
      'We run a load calculation on the existing service before installing, so a Taylor Mill homeowner knows whether the panel carries the charger or needs more headroom. The attached garages common on these hilltop streets keep the dedicated circuit short and the mount tidy.',
    ],
    commonIntro: 'Across Taylor Mill’s mid-century and newer homes, home charging depends on whether the panel can carry a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you add an EV charger to my Taylor Mill garage?', a: 'Yes. We confirm the panel can carry the load with a load calculation, then run a dedicated 240V circuit to your Taylor Mill garage and mount the charger to code, with any service upgrade handled under a permit.' }],
  },
  'elsmere': {
    intro: 'Panels in Elsmere’s older and mid-century homes along the Dixie Highway corridor often predate EVs. Adding a Level 2 charger means confirming the service can carry a sustained 240V load. For a commuter, home charging makes sense once the panel checks out.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes. The age of the housing means the panel often predates EVs, so adding a charger means confirming the service can carry a sustained 240V load.',
      'We start with a panel evaluation and load calculation, then run the dedicated circuit to a garage or exterior mount. For an Elsmere commuter near Dixie Highway, that turns the daily drive into an overnight charge at home instead of a public-station stop.',
    ],
    commonIntro: 'In Elsmere’s older and mid-century homes, home charging starts with whether an aging panel can support a new 240V circuit:',
    localFaqs: [{ q: 'Is home charging worth it for an Elsmere commuter?', a: 'For most, yes. We evaluate your panel and install a Level 2 charger on a dedicated circuit so an Elsmere home charges overnight, with any needed service upgrade done under a permit.' }],
  },
  'independence': {
    intro: 'Newer subdivision homes in Independence are good candidates for a Level 2 EV charger, but even recent construction was often wired before a 40-amp EV circuit was standard. Around the historic core of the Kenton County seat, we check the panel more closely before installing.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions. The newer homes are good candidates for home charging, but even recent construction was often wired before a 40-amp EV circuit was a standard expectation.',
      'We run a load calculation on the panel before installing, whether the home is in a newer Independence subdivision or the older core, so capacity is confirmed up front. Subdivision homes here typically have an attached garage, which keeps the dedicated 240V circuit short and the install clean.',
    ],
    commonIntro: 'Across Independence’s newer subdivisions and older core, a charger install comes down to whether the panel can take a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you install an EV charger in a newer Independence subdivision home?', a: 'Yes. Newer Independence homes are well suited to home charging. We run a load calculation, then add the dedicated 240V circuit and mount the charger in the garage to code.' }],
  },
  'dayton-ky': {
    intro: 'Late-1800s and early-1900s homes on Dayton’s tight streets near Bellevue often still carry their original electrical service. That was never sized for a charger drawing 40 amps for hours, so Level 2 EV charger installation here starts with the panel.',
    relevance: [
      'Dayton (ZIP 41074) is a Campbell County river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River. Houses that old often still carry their original electrical service, which was never sized for a charger drawing 40 amps for hours overnight.',
      'In a century-old Dayton home, a load calculation usually points to a panel upgrade before the charger goes in. The tight lots and limited off-street parking on these riverfront streets also shape the install, so we plan the dedicated circuit and the mount — garage, exterior wall, or driveway-side — to fit the home, all under the proper permit.',
    ],
    commonIntro: 'In Dayton’s historic riverfront homes, the EV-charger question starts with whether an original panel can carry a new 240V circuit:',
    localFaqs: [{ q: 'Can a historic Dayton, KY home support a Level 2 EV charger?', a: 'Often only after a panel upgrade. We evaluate the original service with a load calculation, upgrade it where needed, and then add the dedicated 240V circuit, all permitted and to code.' }],
  },
  'southgate': {
    intro: 'Mid-century panels in Southgate are now at the age where they may be near capacity, and a sustained charging load tends to reveal it. Before a Level 2 EV charger goes into a home between Newport and Fort Thomas, we evaluate the panel up front.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes. Homes of that era are now at the age where the original panel may be near capacity, and a sustained 240V charging load is what tends to reveal it.',
      'We run a load calculation before quoting, so a Southgate homeowner knows whether the existing service carries the charger or needs an upgrade. Where the capacity is there, the attached garages common on these streets make for a short, code-compliant dedicated circuit.',
    ],
    commonIntro: 'Across Southgate’s mid-century homes, home charging depends on whether an older panel has room for another 240V circuit:',
    localFaqs: [{ q: 'Will my mid-century Southgate home handle an EV charger?', a: 'Often it will, but we confirm with a load calculation first. If a Southgate panel is undersized, we upgrade the service before adding the dedicated EV circuit, permitted and to code.' }],
  },
  'wilder': {
    intro: 'Mid-century homes in Wilder along the Licking River corridor were wired before EVs were common. So a 40-amp EV charger circuit needs to be sized against the panel’s rated load. We run that check, then install the Level 2 charger on its own circuit.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods. The mid-century homes here were wired before EVs were common, so a 40-amp charging circuit needs to be sized against the panel’s rated load.',
      'We run a panel evaluation and load calculation before installing, so a Wilder homeowner knows whether the service carries the charger or needs more capacity. The attached garages common on these streets keep the dedicated 240V circuit short and the mount clean.',
    ],
    commonIntro: 'In Wilder’s mid-century homes, a charger install comes down to whether the panel can take a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you install an EV charger at a Wilder home?', a: 'Yes. We evaluate the panel, run a load calculation, and add a Level 2 charger on a dedicated circuit, upgrading the service first if a Wilder home needs the capacity. All work is permitted and to code.' }],
  },
  'highland-heights': {
    intro: 'Most homes near Northern Kentucky University in Highland Heights are mid-century, wired long before home charging. A 240V EV charger circuit gets checked against the panel’s capacity first. Then we install the Level 2 charger, whether at a family home or a rental.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing. The mid-century homes here were wired long before home charging, so a 240V EV circuit needs to be checked against the panel’s capacity.',
      'We run a load calculation before installing, so a Highland Heights homeowner knows whether the service takes the charger or needs an upgrade. For owner-occupied homes near NKU with an attached garage, the dedicated circuit stays short and the install straightforward once capacity is confirmed.',
    ],
    commonIntro: 'Across Highland Heights’ homes near NKU, home charging hinges on whether the panel can carry a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can a Highland Heights home near NKU get a Level 2 charger?', a: 'Yes. We evaluate the panel with a load calculation and install a Level 2 charger on a dedicated circuit, upgrading the service first where a Highland Heights home needs it. All work is permitted and to code.' }],
  },
  'cold-spring': {
    intro: 'Newer subdivisions along US-27 make strong candidates for a Level 2 EV charger in Cold Spring, while the older established homes may need a closer look at panel capacity first. We check which applies, then install on a dedicated 240V circuit.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions. The newer subdivision homes are strong candidates for home charging, while older houses may need a closer look at panel capacity first.',
      'We run a load calculation before installing, so a Cold Spring homeowner knows whether the service carries the charger or needs more headroom. For a commuter on the US-27 run, the attached garage common in these subdivisions makes a clean, code-compliant charger mount straightforward once the dedicated circuit is in.',
    ],
    commonIntro: 'Across Cold Spring’s newer subdivisions and older homes, a charger install depends on whether the panel can take a dedicated 240V circuit:',
    localFaqs: [{ q: 'Is home charging in Cold Spring better than a public station?', a: 'For most US-27 commuters, yes. We evaluate your panel and install a Level 2 charger on a dedicated circuit so a Cold Spring home charges overnight, with any service upgrade handled under a permit.' }],
  },
  'alexandria': {
    intro: 'Around the Campbell County seat, newer Alexandria subdivisions suit a Level 2 EV charger well, while the older core and semi-rural properties may need a panel upgrade to carry a 40-amp circuit. Rural lots can also mean a run to a detached garage.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes. The newer subdivision homes are well suited to home charging, while the older core and rural properties may need a panel upgrade to carry a 40-amp circuit.',
      'We run a load calculation before installing, so an Alexandria homeowner knows up front whether the panel takes the charger or needs more capacity. On semi-rural lots with detached garages, we plan the dedicated 240V circuit run carefully and complete the work under the proper permit.',
    ],
    commonIntro: 'Across Alexandria’s newer subdivisions, older core, and rural homes, home charging comes down to whether the panel can support a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you run an EV circuit to a detached garage on an Alexandria property?', a: 'Yes. We plan the run, confirm the panel can carry the load, and install the dedicated 240V circuit and charger to code, upgrading the service first if an Alexandria home needs it. All work is permitted.' }],
  },
  'melbourne': {
    intro: 'Older riverside homes in Melbourne, east of Newport, often run aging electrical service never sized for a charger drawing 40 amps for hours. Level 2 EV charger installation in this small village starts with whether that panel can carry a dedicated 240V circuit.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground. Houses of that vintage often run on aging electrical service that was never sized for a charger drawing 40 amps for hours overnight.',
      'In a low-lying Melbourne home, a load calculation and a look at the panel’s condition come first. If the service is undersized, we upgrade it, then run the dedicated 240V circuit to a garage or driveway mount and complete the work under the proper permit.',
    ],
    commonIntro: 'In Melbourne’s older riverside homes, a home charger starts with whether the aging panel can carry a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can an older riverside home in Melbourne support an EV charger?', a: 'Often after a panel upgrade. We evaluate the service with a load calculation, upgrade it where needed, and then add the dedicated 240V circuit, all permitted and to code.' }],
  },
  'hebron': {
    intro: 'Newer subdivision homes near the airport are strong candidates for a Level 2 EV charger in Hebron, and EVs are increasingly common across Boone County. The semi-rural homes vary more. We check whether the panel can take a dedicated 240V circuit first.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport (CVG), with a mix of newer subdivisions and established semi-rural homes. The newer subdivision homes are strong candidates for home charging, and EVs are increasingly common across fast-growing Boone County.',
      'We run a load calculation before installing, so a Hebron homeowner knows whether the panel carries the charger or needs more headroom. Subdivision homes here typically have an attached garage for a short, clean dedicated circuit, while on a semi-rural lot we plan the run to a detached garage and complete it under permit.',
    ],
    commonIntro: 'Across Hebron’s newer subdivisions and rural homes, a charger install depends on whether the panel can take a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you install an EV charger in a newer Hebron subdivision?', a: 'Yes. Newer Hebron homes are well suited to home charging. We run a load calculation, then add the dedicated 240V circuit and mount the charger in the garage to code.' }],
  },
  'burlington': {
    intro: 'Burlington’s newer subdivisions are common spots for a Level 2 EV charger, in a county where EV ownership keeps rising. Homes around the old courthouse in the historic core may need a closer look at panel capacity before we install.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions. The newer subdivision homes are common candidates for home charging in a county where EV ownership keeps rising, while the historic core may need a closer look at panel capacity.',
      'We run a load calculation before installing, so a Burlington homeowner knows whether the service takes the charger or needs an upgrade. Subdivision homes here typically have an attached garage, keeping the dedicated 240V circuit short and the mount clean.',
    ],
    commonIntro: 'Across Burlington’s newer subdivisions and historic core, home charging comes down to whether the panel can support a dedicated 240V circuit:',
    localFaqs: [{ q: 'Are EV chargers common in newer Burlington homes?', a: 'Increasingly, yes. We evaluate the panel with a load calculation and install a Level 2 charger on a dedicated circuit for Burlington homes, upgrading the service first where the capacity is short. All work is permitted and to code.' }],
  },
  'union': {
    intro: 'Union’s 1990s-onward subdivisions suit home EV charging, and EVs are common here. Even recent construction was often wired before a 40-amp charger circuit was standard, so Level 2 installation starts with checking the panel has room. Then we install it.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward. These newer homes are well suited to home charging, and EVs are common in subdivisions like these, but even recent construction was often wired before a 40-amp EV circuit was standard.',
      'We run a load calculation on the panel before installing, so a Union homeowner knows the service has the capacity. With an attached garage on nearly all of these subdivision homes, the dedicated 240V circuit stays short and the charger mount is clean.',
    ],
    commonIntro: 'Across Union’s newer subdivisions, a charger install depends on whether the panel has room for a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you add a Level 2 charger to a newer Union subdivision home?', a: 'Yes. Newer Union homes are good candidates for home charging. We run a load calculation to confirm capacity, then add the dedicated 240V circuit and mount the charger in the garage to code.' }],
  },
  'walton': {
    intro: 'At the southern edge of the Boone County metro, Walton’s newer subdivisions suit a Level 2 EV charger well. Older homes in the historic core and rural properties may need a panel upgrade to carry a 40-amp circuit, and sometimes a longer run.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes. The newer subdivision homes are strong candidates for home charging, while older and rural properties may need a panel upgrade to carry a 40-amp circuit.',
      'We run a load calculation before installing, so a Walton homeowner knows whether the panel takes the charger or needs more capacity. On a rural lot with a detached garage, we plan the dedicated 240V circuit run carefully and complete the work under the proper permit.',
    ],
    commonIntro: 'Across Walton’s newer subdivisions and older rural homes, home charging comes down to whether the panel can support a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you run an EV charger circuit to a rural Walton property?', a: 'Yes. We plan the run, confirm the panel can carry the load, and install the dedicated 240V circuit and charger to code, upgrading the service first if a Walton home needs it. All work is permitted.' }],
  },
  'mount-carmel': {
    intro: 'Mid-century and newer homes in Mount Carmel near I-275 were mostly wired before EVs were common. So a 240V EV charger circuit needs sizing against the panel’s rated load before installation in this Union Township community. Then we install the Level 2 charger.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community in Clermont County on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes. Homes of that range were wired before EVs were common, so a 240V charging circuit needs to be sized against the panel’s rated load.',
      'We run a panel evaluation and load calculation before installing, so a Mount Carmel homeowner knows whether the service carries the charger or needs more capacity. For a commuter near I-275, the attached garage common here makes a clean, code-compliant mount straightforward once the dedicated circuit is in.',
    ],
    commonIntro: 'In Mount Carmel’s mid-century and newer homes, a charger install depends on whether the panel can take a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you install an EV charger at a Mount Carmel home?', a: 'Yes. We evaluate the panel, run a load calculation, and add a Level 2 charger on a dedicated circuit, upgrading the service first if a Mount Carmel home needs it. All work is permitted and to code.' }],
  },
  'summerside': {
    intro: 'For a Level 2 EV charger in Summerside, the panel is the first question. These mid-century and newer Union Township homes in western Clermont County were wired before home charging, so a 40-amp circuit needs checking against capacity before we install.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes. Homes of that era were wired before home charging, so a 40-amp EV circuit needs to be checked against the panel’s capacity.',
      'We run a load calculation before installing, so a Summerside homeowner knows whether the service takes the charger or needs an upgrade. With an attached garage on most of these suburban homes, the dedicated 240V circuit stays short and the mount is clean.',
    ],
    commonIntro: 'Across Summerside’s mid-century and newer homes, home charging hinges on whether the panel can carry a dedicated 240V circuit:',
    localFaqs: [{ q: 'Will my Summerside home’s panel support a Level 2 charger?', a: 'We confirm with a load calculation. Many Summerside panels can carry the charger, and where the service is undersized we upgrade it before adding the dedicated circuit, permitted and to code.' }],
  },
  'withamsville': {
    intro: 'Homes along the Ohio Pike corridor in Withamsville, mid-century and newer, were wired before EVs were common. Before a Level 2 EV charger goes in, we size the circuit against the panel’s rated load, then install it on a dedicated 240V circuit.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips. The mid-century and newer homes here were wired before EVs were common, so a charging circuit needs to be sized against the panel’s rated load.',
      'We run a panel evaluation and load calculation before installing, so a Withamsville homeowner knows whether the service carries the charger or needs more capacity. The attached garages common on these streets keep the dedicated 240V circuit short and the install clean.',
    ],
    commonIntro: 'Across Withamsville’s suburban homes, a charger install comes down to whether the panel can take a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can you install a home EV charger in Withamsville?', a: 'Yes. We evaluate the panel, run a load calculation, and add a Level 2 charger on a dedicated circuit, upgrading the service first if a Withamsville home needs it. All work is permitted and to code.' }],
  },
  'milford': {
    intro: 'Older homes and 19th-century buildings around Milford’s Main Street often run on aging electrical service never sized for a charger drawing 40 amps for hours. So Level 2 EV charger installation here starts with whether the panel can carry a dedicated circuit.',
    relevance: [
      'Milford (ZIP 45150) is a historic Clermont County city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes. Houses that old often run on aging electrical service that was never sized for a charger drawing 40 amps for hours overnight.',
      'In an older Milford home, a load calculation usually comes before anything else, and an undersized panel near the low river ground may need an upgrade first. Once the service is sound, we run the dedicated 240V circuit to a garage or exterior mount and complete the work under the proper permit.',
    ],
    commonIntro: 'In Milford’s historic downtown and older homes, the EV-charger question starts with whether an aging panel can carry a dedicated 240V circuit:',
    localFaqs: [{ q: 'Can an older Milford home support a Level 2 EV charger?', a: 'Often after a panel upgrade. We evaluate the service with a load calculation, upgrade it where an older Milford home needs it, and then add the dedicated 240V circuit, all permitted and to code.' }],
  },
};
