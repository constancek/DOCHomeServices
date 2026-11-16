export const part6: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'mulberry': {
    intro: 'Many mid-century houses in Mulberry still run on 100-amp service, which leaves little headroom for an EV charger circuit of 40 amps or more. So we start every Level 2 installation here with a load calculation before quoting. Newer homes usually have more room.',
    relevance: [
      'Mulberry (ZIP 45150) sits in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes. The mid-century houses here often still run on 100-amp service, which leaves little headroom once you add a 40- or 48-amp EV circuit, so we start with a load calculation before quoting anything.',
      'Most Mulberry homes have an attached garage, which keeps the wiring run short and the install straightforward. Where the panel turns out to be undersized, a service or subpanel upgrade is the cleaner fix than trying to squeeze a charger onto a full box, and it leaves room for off-peak overnight charging without tripping breakers.',
    ],
    commonIntro: "In Mulberry's mid-century and newer homes, the EV-charger questions we get most often come down to panel capacity:",
    localFaqs: [{ q: 'Can my older Mulberry home handle a Level 2 charger?', a: 'Often yes, but a mid-century home on 100-amp service may need a load calculation first. We evaluate your panel before installing and recommend an upgrade only if the numbers call for one.' }],
  },
  'mount-repose': {
    intro: 'Newer homes in Mount Repose usually have 200-amp service with room for a Level 2 EV charger. The older mid-century houses may need a closer look before the charger circuit goes in. We evaluate the panel and tell you whether an upgrade is needed.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, made up of suburban neighborhoods of mid-century and newer homes. The newer homes usually have 200-amp service with room to spare, while the older ones may need a closer look before a charger circuit goes in.',
      'Where homes here reach the age that water heaters and electrical panels start to fail, an EV charger install is a good moment to check overall panel condition. We size the circuit to your charger, mount the unit in the garage where the run is shortest, and confirm there is capacity for charging overnight on an off-peak schedule.',
    ],
    commonIntro: "Across Mount Repose's mid-century and newer homes, the EV-charger considerations come down to panel age and capacity:",
    localFaqs: [{ q: 'Do you need to upgrade my panel to add a charger in Mount Repose?', a: 'Not always. Many newer Mount Repose homes on 200-amp service have the capacity already. We run a load calculation and only recommend a panel upgrade if your existing service cannot support the charger safely.' }],
  },
  'day-heights': {
    intro: 'In Day Heights, EV charger installation depends on where the garage sits relative to the panel. Suburban homes are mostly simple garage installs, while semi-rural properties often have detached garages or outbuildings that need a longer circuit run and a weather-rated outdoor charger.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County with a mix of suburban and semi-rural homes. The suburban homes are mostly straightforward garage installs, while the semi-rural properties often have detached garages or outbuildings that call for a longer circuit run and a weather-rated outdoor charger.',
      'On the larger semi-rural lots, getting power to a detached structure means trenching or running conduit, and the panel has to have capacity for the added load. We do a load calculation up front so you know whether your existing service covers the charger or whether a subpanel near the garage makes more sense.',
    ],
    commonIntro: "Across Day Heights' suburban and semi-rural homes, EV-charger planning depends on where the garage sits relative to the panel:",
    localFaqs: [{ q: 'My Day Heights garage is detached — can you still install a charger?', a: 'Yes. We run circuits to detached garages and outbuildings regularly, using weather-rated equipment and conduit suited to the longer run. We evaluate your panel first to confirm it can carry the added load.' }],
  },
  'new-richmond': {
    intro: 'Many 19th-century riverfront homes in New Richmond still run small panels with no room for a 40-amp EV charger circuit. So a service upgrade is often the first step before a Level 2 charger in this historic Ohio River village. We evaluate the panel first.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County, lined with 19th-century homes along the riverfront. Houses that old were never wired for a modern electrical load, and many still run on small panels with no room for a 40-amp EV circuit, so a service upgrade is often the first step.',
      'These century-old riverfront homes also tend to have older wiring and limited off-street parking, which shapes where a charger can go. We evaluate the existing panel, upgrade the service when the numbers call for it, and place the charger so the circuit run from the box stays as short and clean as the house allows.',
    ],
    commonIntro: "In New Richmond's 19th-century riverfront homes, the EV-charger conversation usually starts with the panel:",
    localFaqs: [{ q: 'Can a historic New Richmond home support an EV charger?', a: 'Usually, but a 19th-century home often needs a service or panel upgrade first since the original electrical was never sized for an EV circuit. We evaluate your panel and handle any upgrade as permitted, code-compliant work.' }],
  },
  'amelia': {
    intro: 'Mid-century houses along Ohio Pike in Amelia are the ones most likely to be on 100-amp service. Adding a Level 2 EV charger there means checking the load before anything else. Newer homes usually have more headroom, and for a commuter the charger earns its keep.',
    relevance: [
      'Amelia (ZIP 45102) sits along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes. The mid-century houses are the ones most likely to be on 100-amp service, where adding an EV circuit means checking the load before anything else.',
      'The commuter location along Ohio Pike is exactly where home charging pays off — drivers who cover real daily mileage would rather plug in overnight than chase down public stations. We size the charger circuit to your panel, mount the unit in the garage, and confirm there is headroom for off-peak charging.',
    ],
    commonIntro: "Across Amelia's mid-century and newer homes along Ohio Pike, EV-charger planning comes down to panel capacity:",
    localFaqs: [{ q: 'Is home charging worth it for an Amelia commuter?', a: 'For most drivers along the Ohio Pike corridor, yes — charging overnight at home on a Level 2 circuit beats relying on public stations. We evaluate your panel and install a dedicated circuit sized to your charger.' }],
  },
  'batavia': {
    intro: 'Older homes in Batavia’s village core often carry aging panels with little spare capacity for an EV charger. The newer subdivisions around the Clermont County seat usually have 200-amp service ready for one. We check which you have, then install the Level 2 charger.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development. The older homes in the village core often carry aging panels with little spare capacity, while the newer subdivisions usually have 200-amp service ready for a charger.',
      'That split is the main thing we sort out on a Batavia charger install. In the village core we run a load calculation and upgrade the panel if needed before adding the circuit; in the newer homes the work is typically a clean garage install with capacity to spare for overnight charging.',
    ],
    commonIntro: "Across Batavia's historic core and newer subdivisions, the right EV-charger approach depends on the panel:",
    localFaqs: [{ q: 'Will an older home in the Batavia village core need a panel upgrade for a charger?', a: 'Sometimes. Older homes near the historic core may run on undersized panels with no room for an EV circuit. We evaluate the panel and upgrade the service only when the load calculation requires it.' }],
  },
  'owensville': {
    intro: 'For a Level 2 EV charger in Owensville, the panel and the garage location decide the job. Older homes near the historic village core may have undersized panels, while rural properties often have detached garages or outbuildings that need a longer circuit run.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes. The older homes near the core may have undersized panels, while the rural properties often have detached garages or outbuildings that need a longer circuit run.',
      'On the rural lots, getting power to a detached garage means conduit or trenching and a weather-rated charger, and the panel has to carry the added load. We run a load calculation first, then either add the circuit to the existing service or set a subpanel near the garage so charging overnight stays trouble-free.',
    ],
    commonIntro: "Across Owensville's older and rural homes, EV-charger planning depends on panel capacity and where the garage sits:",
    localFaqs: [{ q: 'Can you run a charger to a rural Owensville property with a detached garage?', a: 'Yes. We run circuits to detached garages and outbuildings using weather-rated equipment and proper conduit. We evaluate your panel first to confirm it can carry the charger load.' }],
  },
  'goshen': {
    intro: 'Suburban homes in Goshen are mostly simple garage installs for a Level 2 EV charger. Rural properties in the township often sit on larger lots with detached garages and long driveways, which changes how the circuit gets run. We check the panel and plan the distance.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County with a mix of suburban and rural homes. The suburban houses are mostly straightforward garage installs, while the rural properties often sit on larger lots with detached garages and longer driveways that change how a charger circuit gets run.',
      'On those rural lots, distance from the panel to the garage is the main planning factor, since a longer run affects wire sizing and cost. We do a load calculation up front to confirm capacity, then either extend the existing service or set a subpanel closer to the charger for clean overnight charging.',
    ],
    commonIntro: "Across Goshen's suburban and rural homes, the EV-charger setup depends on panel capacity and the distance to the garage:",
    localFaqs: [{ q: 'My Goshen home is on a large rural lot — does the distance to the garage matter for a charger?', a: 'It does. A longer run from the panel to a detached garage affects wire sizing and may favor a subpanel near the charger. We evaluate the layout and your panel before quoting the work.' }],
  },
  'moscow': {
    intro: 'Older homes on the low riverside ground in Moscow often run small, dated panels never sized for an EV charger circuit. So a service evaluation comes first before a Level 2 charger in this Ohio River village. If an upgrade is needed, we do that first.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground. Homes this old often run on small, dated panels that were never sized for an EV circuit, so a service evaluation comes first.',
      'The low riverside setting also means we mount equipment with the local conditions in mind, keeping the charger and any subpanel up off the lowest ground where it makes sense. We run a load calculation, upgrade the panel if it is undersized, and add a dedicated circuit so the home can charge overnight without strain.',
    ],
    commonIntro: "In Moscow's older riverside homes, EV-charger planning starts with the age and size of the panel:",
    localFaqs: [{ q: 'Can an older home in Moscow handle an EV charger?', a: 'Often it can once we confirm the panel has capacity. Older riverside homes sometimes need a service upgrade before adding an EV circuit. We evaluate the panel first and handle any upgrade as permitted, code-compliant work.' }],
  },
  'newtonsville': {
    intro: 'Rural properties around Newtonsville often have detached garages or barns set well back from the house, so a Level 2 EV charger may need a longer circuit run. Older homes in this small village may also carry undersized panels. We check both.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties. The older homes may carry undersized panels, and the rural properties often have detached garages or barns set well back from the house.',
      'Those longer runs to a detached structure are the main thing we plan around here, since wire sizing and the choice between extending the service or setting a subpanel both hinge on distance. We start with a load calculation, then build the charger circuit so it carries the load cleanly for overnight charging.',
    ],
    commonIntro: "Across Newtonsville's older and rural homes, EV-charger planning depends on panel capacity and the run to the garage:",
    localFaqs: [{ q: 'Can you install a charger at a rural Newtonsville property with outbuildings?', a: 'Yes. We run circuits to detached garages and outbuildings with weather-rated equipment and proper conduit. We evaluate your panel first to confirm it can carry the charger load.' }],
  },
  'williamsburg': {
    intro: 'Older homes in Williamsburg’s 19th-century village core often run dated panels with no room for an EV charger circuit, while rural properties may have detached garages that need longer runs. We evaluate the panel and the distance before installing a Level 2 charger.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes. The older village homes often run on dated panels with no room for an EV circuit, while the rural properties may have detached garages requiring longer runs.',
      'We sort those two cases out separately. In the 19th-century core we run a load calculation and upgrade the panel where the numbers call for it before adding the charger; on the rural lots we plan the run to the garage and confirm capacity so the home charges overnight without tripping breakers.',
    ],
    commonIntro: "Across Williamsburg's historic core and rural homes, EV-charger planning depends on panel age and garage distance:",
    localFaqs: [{ q: 'Will a historic Williamsburg home need a panel upgrade for a charger?', a: 'It may. Older homes near the village core sometimes run on undersized panels that cannot carry an EV circuit. We evaluate the panel and upgrade the service only when the load calculation requires it.' }],
  },
  'bethel': {
    intro: 'Near Bethel’s 19th-century core, older homes may carry undersized panels, while rural properties often have detached garages set back from the house. Level 2 EV charger installation here depends on both, so we check the panel and plan the run first.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes. The older homes near the core may carry undersized panels, while the rural properties often have detached garages set back from the house.',
      'For the in-town homes we run a load calculation and upgrade an undersized panel before adding the charger circuit. On rural lots we plan the run to a detached garage and confirm the service can carry the load, so overnight charging is reliable whether the charger mounts in a garage or under cover outside.',
    ],
    commonIntro: "Across Bethel's older village and rural homes, EV-charger planning depends on panel capacity and the run to the garage:",
    localFaqs: [{ q: 'Can you install an EV charger at a rural property near Bethel?', a: 'Yes. We run circuits to detached garages and outbuildings with weather-rated equipment, and evaluate your panel first to confirm it can carry the added charger load.' }],
  },
  'ross': {
    intro: 'Small-town homes in Ross along the Great Miami are mostly simple garage installs for a Level 2 EV charger. Rural properties in the township often have detached garages or outbuildings that need a longer circuit run. We check panel capacity first.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes. The small-town homes are mostly straightforward garage installs, while the rural properties often have detached garages or outbuildings that call for a longer circuit run.',
      'On the larger rural lots, getting power out to a detached garage means trenching or conduit and a weather-rated charger, and the panel needs capacity for the added load. We run a load calculation first, then either extend the existing service or set a subpanel near the garage for clean overnight charging.',
    ],
    commonIntro: "Across Ross's small-town and rural homes, EV-charger planning depends on panel capacity and where the garage sits:",
    localFaqs: [{ q: 'Can you run a charger to a detached garage on a rural Ross property?', a: 'Yes. We run circuits to detached garages and outbuildings using weather-rated equipment and proper conduit. We evaluate your panel first to confirm it can carry the charger load.' }],
  },
  'fairfield': {
    intro: 'Mid-century homes in Fairfield are the ones most likely to be on 100-amp service that needs a closer look before an EV charger. Newer subdivisions in this Butler County city usually have 200-amp service with room for a Level 2 charger. We check which you have.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions. The mid-century homes are the ones most likely to be on 100-amp service that needs a closer look, while the newer subdivisions usually have 200-amp service with room for a charger.',
      'As a commuter suburb, Fairfield is exactly the kind of place where home charging beats hunting for public stations. We run a load calculation, size the circuit to your charger, and mount the unit in the garage where the run from the panel is shortest, with capacity confirmed for off-peak overnight charging.',
    ],
    commonIntro: "Across Fairfield's mid-century and newer homes, EV-charger planning comes down to panel capacity:",
    localFaqs: [{ q: 'Do Fairfield commuters need a panel upgrade for a home charger?', a: 'Not always. Newer Fairfield subdivisions on 200-amp service often have the capacity already, while older mid-century homes may need an evaluation. We run a load calculation before installing and recommend an upgrade only if needed.' }],
  },
  'beckett-ridge': {
    intro: 'Most Beckett Ridge homes date from the 1980s onward and typically have 150- or 200-amp service. That usually leaves room for a Level 2 EV charger circuit once we confirm the load, so installation in this West Chester golf-course community is mostly straightforward.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward. Homes from that era typically have 150- or 200-amp service, which usually leaves room for an EV circuit once we confirm the load.',
      'EVs are common in a newer, affluent subdivision like this, and most installs are clean garage jobs with the charger close to the panel. We run a load calculation, size the dedicated circuit to your charger, and confirm there is capacity for charging overnight on an off-peak schedule.',
    ],
    commonIntro: "Across Beckett Ridge's 1980s-onward homes, EV-charger planning is mostly about confirming panel headroom:",
    localFaqs: [{ q: 'Can a Beckett Ridge home from the 1980s handle a Level 2 charger?', a: 'Usually yes. Homes from that era often have 150- or 200-amp service with room for an EV circuit. We run a load calculation to confirm before installing the dedicated circuit.' }],
  },
  'wetherington': {
    intro: 'Larger Wetherington homes often already have 200-amp service, but they also run several major loads at once. So Level 2 EV charger installation here hinges on the load calculation, not just the panel size, especially when two EVs need chargers.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward. Those larger homes carry larger electrical systems, and many already have 200-amp service, but they also tend to run a lot of major loads at once.',
      'In a big home with a heavy existing load, the load calculation matters even more, since the panel may be closer to capacity than its amperage suggests. We evaluate the service, size the charger circuit accordingly, and where two EVs are in the picture, plan for the added demand so overnight charging stays reliable.',
    ],
    commonIntro: "Across Wetherington's larger homes, EV-charger planning hinges on the load calculation, not just the panel size:",
    localFaqs: [{ q: 'Can you install chargers for two EVs at a Wetherington home?', a: 'Yes. Larger homes here can often support two chargers, but it depends on the existing load, not just the panel amperage. We run a load calculation to confirm capacity and size the circuits accordingly.' }],
  },
  'hamilton': {
    intro: 'Many 19th-century and early-1900s homes in Hamilton’s German Village and Dayton Lane districts still run small panels with no spare capacity for an EV charger circuit. So Level 2 charger installation usually starts with the panel, and sometimes a service upgrade.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes. Those century-old homes were wired long before modern loads existed, and many still run on small panels with no spare capacity for an EV circuit.',
      'In the historic districts a service upgrade is often the first step before a charger can go in, and we handle that as permitted, code-compliant work. Where parking is on-street or in a detached garage off an alley, we plan the circuit run and equipment placement around the layout these older blocks were built with.',
    ],
    commonIntro: "In Hamilton's historic German Village and Dayton Lane homes, the EV-charger conversation usually starts with the panel:",
    localFaqs: [{ q: 'Can a historic German Village home in Hamilton support an EV charger?', a: 'Often, but a 19th-century home may need a service or panel upgrade first since the original wiring was never sized for an EV circuit. We evaluate the panel and handle any upgrade to code.' }],
  },
  'millville': {
    intro: 'West of Hamilton, Millville’s older homes may carry undersized panels, and rural properties often have detached garages or outbuildings set back from the house. A Level 2 EV charger here depends on both the panel and the run, so we check them first.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties. The older homes may carry undersized panels, and the rural properties often have detached garages or outbuildings set back from the house.',
      'On the rural lots, the distance from the panel to a detached garage drives wire sizing and the decision between extending the service or setting a subpanel. We run a load calculation first to confirm capacity, then build the charger circuit so it carries the load cleanly for overnight charging.',
    ],
    commonIntro: "Across Millville's older and rural homes, EV-charger planning depends on panel capacity and the run to the garage:",
    localFaqs: [{ q: 'Can you install a charger at a rural Millville property with a detached garage?', a: 'Yes. We run circuits to detached garages and outbuildings with weather-rated equipment and proper conduit. We evaluate your panel first to confirm it can carry the charger load.' }],
  },
  'new-miami': {
    intro: 'Closely spaced older homes in New Miami often run small, dated panels, and tight lots mean garages are sometimes detached or close to the property line. Level 2 EV charger installation in this old mill village starts with the panel and the layout.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes. Houses this age often run on small, dated panels, and the tight lots mean garages are sometimes detached or set close to the property line.',
      'The closely built layout shapes where a charger and any conduit run can go, and the older panels frequently need an evaluation before adding a 40-amp EV circuit. We run a load calculation, upgrade the service when it is undersized, and place the charger so the run stays as short as the lot allows for clean overnight charging.',
    ],
    commonIntro: "In New Miami's closely spaced older homes, EV-charger planning starts with the panel and the tight lot layout:",
    localFaqs: [{ q: 'Can an older home in New Miami handle an EV charger?', a: 'Often once we confirm capacity. Older mill-town homes here sometimes need a service upgrade before adding an EV circuit. We evaluate the panel first and handle any upgrade as code-compliant work.' }],
  },
  'monroe': {
    intro: 'Newer subdivisions in Monroe along I-75 usually have 200-amp service ready for a Level 2 EV charger. The older town core may need a closer look at the panel first. For commuters on I-75, home charging is the practical setup once capacity is confirmed.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core. The newer subdivisions usually have 200-amp service ready for a charger, while the older core may need a closer look at the panel first.',
      'Sitting right on the I-75 commuter corridor, Monroe is exactly where home charging makes sense — drivers covering daily Cincinnati or Dayton mileage would rather plug in overnight than rely on public stations. We run a load calculation, size the circuit to your charger, and confirm capacity for off-peak charging.',
    ],
    commonIntro: "Across Monroe's newer subdivisions and older core, EV-charger planning comes down to panel capacity:",
    localFaqs: [{ q: 'Is home charging worth it for a Monroe commuter on I-75?', a: 'For most drivers covering daily Cincinnati or Dayton mileage, yes — charging overnight at home beats relying on public stations. We evaluate your panel and install a dedicated circuit sized to your charger.' }],
  },
  'landen': {
    intro: 'Service size varies across Landen’s 1970s and 80s homes. Some are on 100-amp panels that need an evaluation before an EV charger, while others have 150 or 200 amps with room to spare. We confirm headroom first, then install the Level 2 charger.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas. Homes from that era vary in service size, with some on 100-amp panels that need an evaluation and others on 150 or 200 amps with room for a charger.',
      'EVs are common in a planned suburban community like this, and most installs are clean garage jobs close to the panel. We run a load calculation to confirm headroom, size the dedicated circuit to your charger, and verify capacity for charging overnight on an off-peak schedule.',
    ],
    commonIntro: "Across Landen's 1970s-onward homes, EV-charger planning is mostly about confirming panel headroom:",
    localFaqs: [{ q: 'Can a 1970s or 80s home in Landen handle a Level 2 charger?', a: 'Often yes, though homes from that era vary in panel size. We run a load calculation first and recommend a service upgrade only if your existing panel cannot carry the charger circuit.' }],
  },
  'loveland-park': {
    intro: 'Mid-century houses in Loveland Park often still run on 100-amp service, which leaves limited headroom once a 40-amp EV charger circuit is added. So a load calculation comes first for any Level 2 installation here. Then we run the dedicated circuit.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes. Those mid-century houses often still run on 100-amp service, which leaves limited headroom once you add a 40-amp EV circuit, so a load calculation comes first.',
      'Most homes here have an attached garage that keeps the charger run short and the install clean. Where the panel turns out to be undersized, a service upgrade is the better fix than overloading the box, and it leaves room for reliable overnight charging.',
    ],
    commonIntro: "Across Loveland Park's mid-century homes, EV-charger planning comes down to panel capacity:",
    localFaqs: [{ q: 'Can a mid-century Loveland Park home support an EV charger?', a: 'Often yes, but a home on 100-amp service may need a load calculation first. We evaluate the panel before installing and recommend an upgrade only if the numbers call for one.' }],
  },
  'maineville': {
    intro: 'Newer subdivision homes in Maineville usually have 200-amp service ready for a Level 2 EV charger. The small historic core and rural properties may need an evaluation, and sometimes a longer run to a detached garage. We check the panel and layout first.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes. The newer subdivision homes usually have 200-amp service ready for a charger, while the older core and rural properties may need an evaluation and sometimes a longer run to a detached garage.',
      'That range is the main thing we plan around. In the newer subdivisions the work is typically a clean garage install with capacity to spare; in the older or rural homes we run a load calculation, upgrade an undersized panel where needed, and plan the run so overnight charging is reliable.',
    ],
    commonIntro: "Across Maineville's newer subdivisions and older homes, EV-charger planning depends on the panel and garage layout:",
    localFaqs: [{ q: 'Do newer Maineville subdivision homes need a panel upgrade for a charger?', a: 'Usually not. Newer Maineville homes on 200-amp service often have the capacity already, while older or rural homes may need an evaluation. We run a load calculation before installing.' }],
  },
  'pleasant-plain': {
    intro: 'Rural properties around Pleasant Plain often have detached garages or outbuildings set well back from the house, so a Level 2 EV charger may need a longer circuit. Older homes in this small Warren County village may also have undersized panels. We check both.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties. The older homes may carry undersized panels, and the rural properties often have detached garages or outbuildings set well back from the house.',
      'On those rural lots, the distance to a detached garage drives wire sizing and the choice between extending the service or setting a subpanel. We run a load calculation first to confirm capacity, then build the charger circuit so it carries the load cleanly for overnight charging.',
    ],
    commonIntro: "Across Pleasant Plain's older and rural homes, EV-charger planning depends on panel capacity and the run to the garage:",
    localFaqs: [{ q: 'Can you install a charger at a rural Pleasant Plain property?', a: 'Yes. We run circuits to detached garages and outbuildings with weather-rated equipment and proper conduit. We evaluate your panel first to confirm it can carry the charger load.' }],
  },
  'south-lebanon': {
    intro: 'Newer subdivisions in South Lebanon usually have 200-amp service ready for a Level 2 EV charger. Older homes in the historic core along the Little Miami may need a panel evaluation first. We check which you have before installing on a dedicated circuit.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions. The newer subdivisions usually have 200-amp service ready for a charger, while the older core homes may need a panel evaluation first.',
      'EVs are increasingly common in the new subdivisions going up here, and most installs are clean garage jobs close to the panel. We run a load calculation, size the dedicated circuit to your charger, and confirm there is capacity for charging overnight on an off-peak schedule.',
    ],
    commonIntro: "Across South Lebanon's newer subdivisions and historic core, EV-charger planning comes down to panel capacity:",
    localFaqs: [{ q: 'Can a new South Lebanon subdivision home handle a Level 2 charger?', a: 'Usually yes. Newer homes here on 200-amp service often have room for an EV circuit. We run a load calculation to confirm before installing the dedicated circuit.' }],
  },
  'lawrenceburg': {
    intro: 'Many of the 19th-century buildings in downtown Lawrenceburg still run small panels with no spare capacity for an EV charger circuit. So Level 2 charger installation in this Indiana river city usually starts with the panel, and sometimes a service upgrade.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, with a downtown of 19th-century buildings protected by a riverfront levee. Those century-old buildings were wired long before modern electrical loads, and many still run on small panels with no spare capacity for an EV circuit.',
      'In the historic downtown a service upgrade is often the first step before a charger can go in, and we handle that as permitted, code-compliant work. Where parking is on-street or behind the building, we plan the circuit run and equipment placement around the layout these older blocks were built with.',
    ],
    commonIntro: "In Lawrenceburg's 19th-century downtown homes, the EV-charger conversation usually starts with the panel:",
    localFaqs: [{ q: 'Can a historic Lawrenceburg home support an EV charger?', a: 'Often, but a 19th-century building may need a service or panel upgrade first since the original wiring was never sized for an EV circuit. We evaluate the panel and handle any upgrade to code.' }],
  },
  'greendale': {
    intro: 'Older homes in Greendale may carry undersized panels, and mid-century houses on the hillside above Lawrenceburg are often on 100-amp service. Either way, a Level 2 EV charger installation here starts with a closer look at the panel and where the garage sits.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes. The older homes may carry undersized panels, while the mid-century houses are often on 100-amp service that needs a closer look before adding a charger.',
      'The hillside layout shapes some installs here, with garages set at street grade or partway down the slope, which affects where the charger mounts and how the circuit runs. We start with a load calculation, upgrade an undersized panel where needed, and place the charger so overnight charging is clean and reliable.',
    ],
    commonIntro: "Across Greendale's older and mid-century hillside homes, EV-charger planning depends on panel capacity and the garage location:",
    localFaqs: [{ q: 'Can a mid-century Greendale home handle a Level 2 charger?', a: 'Often yes, though a home on 100-amp service may need an evaluation first. We run a load calculation before installing and recommend a service upgrade only if the numbers call for one.' }],
  },
  'aurora': {
    intro: 'Many 19th-century homes in Aurora’s riverfront downtown, near the Hillforest mansion, still run small panels with no room for a 40-amp EV charger circuit. So Level 2 charger installation in this Indiana river town usually starts with a panel evaluation and often an upgrade.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, with a riverfront downtown of 19th-century homes and buildings near the Hillforest Victorian mansion. Houses this old were never wired for a modern electrical load, and many still run on small panels with no room for a 40-amp EV circuit.',
      'In the historic downtown a service upgrade is often the first step before a charger can go in, and we handle that as permitted, code-compliant work. We evaluate the existing panel, upgrade the service when the numbers call for it, and place the charger so the circuit run from the box stays as short and clean as the older home allows.',
    ],
    commonIntro: "In Aurora's 19th-century riverfront homes, the EV-charger conversation usually starts with the panel:",
    localFaqs: [{ q: 'Can a historic Aurora home support an EV charger?', a: 'Usually, but a 19th-century home often needs a service or panel upgrade first since the original electrical was never sized for an EV circuit. We evaluate the panel and handle any upgrade to code.' }],
  },
};
