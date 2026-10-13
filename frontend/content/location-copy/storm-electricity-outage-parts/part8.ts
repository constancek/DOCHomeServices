import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 8 — the north-side cities and villages, the far-west river communities,
// and the Kenton County hilltop and river cities in Northern Kentucky.
export const part8: Record<string, LocationServiceCopy> = {
  northbrook: {
    intro:
      'Storm damage at the mast or meter base in Northbrook? We repair it, file with Colerain Township, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community towards the northern reach of the township, made up largely of mid-century single-family homes. Colerain is one of the largest townships in Ohio and Duke restores it in sections after a major storm, which means position within the township matters: the outer reaches are commonly worked later than the areas closer in. That is not a complaint, it is how a large restoration is sequenced, and it means a Northbrook homeowner can lose an extra day assuming the utility is still coming when the remaining fault is their own.',
      'The housing is uniformly mid-century, so the services here are mostly of one era and have aged at one rate — many still original and sized for the loads of the time. The trees planted with those subdivisions are now full-grown over the drops. Where a limb damages a service that was already marginal, the sensible question is whether to rebuild it as it was or bring it up to what the house now draws, since the labour, permit and inspection are the same either way.',
    ],
    commonIntro:
      "Across Northbrook's mid-century homes in the outer reaches of Colerain Township, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Should I keep waiting for Duke in Northbrook, or call an electrician?',
        a: 'Check the two houses either side of you. If they have lights and yours does not, waiting achieves nothing — the fault is on equipment you own and Duke cannot reconnect to it until a licensed electrician has repaired it and it has been inspected. If your whole block is dark, it is still utility work and out here that can genuinely be later in the sequence.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Storm damage at the service on your Indian Hill home? On a well, an outage means no water either. We repair masts, meter bases, and panels. Call (513) 586-5107.',
    relevance: [
      'Indian Hill (ZIP 45243) is a village of large estates on multi-acre wooded lots, with many houses set a long way back from the road. That produces the longest overhead service runs anywhere in our area — hundreds of feet of line crossing woodland to reach a house, sometimes on private poles. Every additional span is more line for a falling limb to catch, and on lots this size the damage is frequently somewhere out along the run rather than at the house, which makes finding it the first job.',
      'The more urgent point is what an outage means here. A good number of these properties are on private wells, and a well pump needs electricity — so losing power means losing water, not just lighting. Septic systems with pumps are affected the same way. That changes the priority of a repair considerably compared with a house on city water, and it is worth saying so when you call rather than assuming we know.',
    ],
    commonIntro:
      "In Indian Hill's estates on multi-acre wooded lots, where service runs cross woodland and many homes are on wells, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'I am on a well in Indian Hill and the power is out. How urgent is that?',
        a: 'More urgent than an outage on city water, and worth saying when you call. A well pump runs on electricity, so no power means no water for washing, flushing, or drinking, and a septic system with a pump is affected too. Tell us on the phone that you are on a well — it changes how we prioritise the visit, and it is not something we can tell from the address.',
      },
    ],
  },

  evendale: {
    intro:
      'Storm damage to the service on your Evendale home? We repair masts and meter bases, and file on the village’s own permit. Call (513) 586-5107.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with an industrial base large enough to include GE Aerospace, sitting alongside established residential neighborhoods. Living next to industrial load on that scale has a real effect on outages. Circuits carrying major industrial customers are restored as a priority, so the lines near you frequently come back sooner than a purely residential village would expect — which is genuinely good, and is also exactly how homeowners here get caught out.',
      'When the lines are back quickly and one house stays dark, the remaining fault is on that homeowner’s own equipment. Duke cannot reconnect to a damaged mast, weatherhead or meter box no matter how fast they restored the line to the pole. Evendale issues its own permits rather than going through the county, and being a small village the inspection queue is short when the filing is right and slow when it goes to the wrong office.',
    ],
    commonIntro:
      "Across Evendale's residential streets beside its industrial corridor, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The industrial side of Evendale had power back fast but my house did not. Why?',
        a: 'Circuits serving major industrial customers are restored as a priority, so the lines near you were probably back early. If your house is still dark once the neighbours are lit, the remaining fault is on your own equipment — the mast, weatherhead, meter box or panel — and that needs a licensed repair and an inspection before Duke will reconnect. Fast line restoration makes that obvious sooner rather than fixing it.',
      },
    ],
  },

  glendale: {
    intro:
      'Storm damage at the service on your Glendale home? A National Historic Landmark village of preserved Victorians — the exterior matters. Call (513) 586-5107.',
    relevance: [
      'Glendale (ZIP 45246) is one of the country’s earliest planned railroad suburbs and a National Historic Landmark, laid out in winding, tree-lined streets around preserved Victorian houses. That layout is the storm story. The streets were designed to curve through planted grounds rather than run on a grid, so poles and spans follow irregular lines and the trees are specimen planting from the 1850s onward — considerably older and heavier than anything on a modern verge. Limb damage here is the routine call, and the limbs are large.',
      'The landmark designation puts constraints on the repair itself. A mast, its conduit, and the meter box are visible exterior, so on a preserved Victorian the question is not only whether the work is sound and to code but whether it is acceptable in a protected village. Rebuilding in the same position and form is usually the cleanest route. These houses are also tall, so the entrance often passes through the roof, which makes the flashing and seal part of our job rather than a roofer’s.',
    ],
    commonIntro:
      "In Glendale's preserved Victorians on winding, heavily planted streets, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Glendale is a National Historic Landmark. Does that restrict how you repair my service?',
        a: 'It can, and it is better raised at the estimate than mid-job. Putting the service back in the same position and the same form is normally straightforward, because the exterior appearance does not change. Where the original arrangement has been destroyed, or where a properly sized modern service would look different from the street, there may be more to agree than an electrical permit.',
      },
    ],
  },

  sharonville: {
    intro:
      'Storm damage to a service in Sharonville? We handle residential and smaller commercial, near Sharon Woods and the corridors. Call (513) 586-5107.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city with three quite different kinds of area inside it: established residential neighborhoods, the convention centre and its commercial surroundings, and industrial corridors. That mix determines how restoration reaches you. Circuits carrying convention, retail and industrial load are prioritised differently from purely residential streets, so which of those three your house sits nearest genuinely affects when the lines come back.',
      'Sharon Woods on the city’s edge supplies the other half. It is mature parkland rather than street planting, so properties along that boundary carry heavier canopy over their service drops than the subdivision streets further in. The housing is largely mid-century, with services of that era and many still original. Sharonville issues its own permits rather than going through Hamilton County — worth confirming before anything is filed.',
    ],
    commonIntro:
      "Across Sharonville's residential streets, commercial areas and the blocks along Sharon Woods, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Can you handle a commercial service on a Sharonville property?',
        a: 'Smaller commercial, yes — offices, light-industrial units, retail units on a single-phase or modest three-phase service. Large three-phase installations with primary metering or a utility transformer on site are a specialist contractor’s work, and we will tell you that on the phone rather than after driving out. Describe the building and the service when you call and we will be straight about whether we are the right people.',
      },
    ],
  },

  northgate: {
    intro:
      'Storm-damaged mast or meter base near Northgate? We repair it, file with Colerain Township, and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'Northgate (ZIP 45251) is the Colerain Township area around the Northgate Mall corridor, in neighborhoods of mid-century and newer homes. Sitting beside a major retail corridor changes restoration order: circuits carrying substantial commercial load are prioritised over purely residential streets, so the lines close to the corridor frequently come back before the streets further back from it. If you are a few streets away and watching the shops light up, that is why.',
      'The housing splits the answer once the lines are back. Mid-century streets are conventional overhead with masts and drops to lose, and services largely of their era. The newer sections were often built with underground supply, so there is no mast or weatherhead at all — those houses lose power when the utility does, or to a fault at the meter or in the panel. Colerain Township handles permits and inspections either way.',
    ],
    commonIntro:
      "Across Northgate's mid-century and newer streets beside the retail corridor, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The shops at Northgate have power and my street does not. Is that my equipment?',
        a: 'Not necessarily. Circuits carrying large retail load are restored as a priority, so the corridor coming back first is normal and tells you little. The test is your immediate neighbours: lights either side of you and none in your house means the fault is on your own equipment. A whole dark street means the residential lines are still being worked.',
      },
    ],
  },

  springdale: {
    intro:
      'Storm damage at the service on your Springdale home? We repair masts and meter bases along the Tri-County corridor and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Springdale (ZIP 45246) sits along the Tri-County corridor, one of the largest concentrations of retail and commercial property in the region, with established mid-century residential neighborhoods behind it. That is a lot of commercial load on the circuits through this city, and commercial restoration is prioritised — so the corridor is typically lit well before the residential streets behind it are finished. Watching that happen from a dark house is frustrating and it is not an indication that anyone has forgotten you.',
      'Once the lines are back the ordinary rule applies: if your house alone is dark, the fault is on your own equipment and no further waiting helps. The housing is mid-century, with services largely of that era and plenty still original, sized for the loads of the time. Springdale issues its own permits rather than going through Hamilton County, and a city queue of this size generally moves reasonably after a storm.',
    ],
    commonIntro:
      "Across Springdale's mid-century neighborhoods behind the Tri-County corridor, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Why is the Tri-County area lit while my Springdale street is still dark?',
        a: 'Because circuits carrying that much retail and commercial load are restored as a priority. It is normal and it says nothing about your street. What tells you something is your immediate neighbours — if they have lights and you do not, the remaining fault is on your own mast, meter box or panel, and that needs an electrician rather than more patience.',
      },
    ],
  },

  miamitown: {
    intro:
      'Storm damage or a flooded panel in Miamitown? Great Miami bottomland brings water fast. We repair masts, meter bases, and panels. Call (513) 586-5107.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on low river-bottom ground beside the Great Miami. The Great Miami is a substantial river with a large catchment upstream, so heavy rain well away from here can put water into these bottoms — which means flooding is not always tied to the storm you actually experienced. That catches people out: the wind passes, the sky clears, and the water arrives afterwards from rainfall upstream.',
      'For electrical purposes the consequence is straightforward. Panels in low levels get submerged, and submerged equipment is replaced rather than dried out, because water reaches the breakers and the bus behind the panel face and corrosion continues after everything appears dry. An inspector checks for it before Duke reconnects. Where a service entrance was also damaged by wind, both need doing, and we would rather assess them together than fix one and return for the other.',
    ],
    commonIntro:
      "In Miamitown's older homes on Great Miami bottomland, where water can arrive after the storm has passed, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The storm passed and my Miamitown basement flooded the next day. How?',
        a: 'The Great Miami drains a large area upstream, so heavy rain miles away can raise the river here after your local weather has cleared. It is one of the reasons this community floods on a different schedule from the storm itself. For the electrical side it changes nothing: a panel that has been under water gets replaced rather than dried out, whenever the water arrived.',
      },
    ],
  },

  'forest-park': {
    intro:
      'Storm damage at the mast or meter base in Forest Park? A planned city where every service is the same age. We repair it. Call (513) 586-5107.',
    relevance: [
      'Forest Park (ZIP 45240) was developed as a planned community from the 1960s, and the result is an unusually uniform city: streets laid out together, houses built together, and electrical services installed together to the same specification. Sixty years on, that uniformity cuts both ways. It means the equipment across the city is at a comparable point in its life — so when a storm damages one service, the neighbours are frequently running something of identical age and condition.',
      'It also means the trees planted as part of that original design are all mature at once, standing over the drops on street after street. Storm damage here tends to arrive in clusters rather than isolated incidents. Where a limb has damaged a service that was fitted in the 1960s and never touched since, rebuilding it exactly as it was means refitting equipment that was already at the end of its useful life, which is worth pricing against a proper upgrade.',
    ],
    commonIntro:
      "Across Forest Park's uniformly 1960s planned streets, where services and trees matured together, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Everyone on my Forest Park street seems to need the same repair. Is that normal here?',
        a: 'It is, and it is a consequence of how the city was built. The houses went up together with the same electrical specification, and the trees were planted at the same time, so the equipment and the canopy over it have aged in step. That is why damage arrives in clusters. It also means coordinating with neighbours can save everyone time in the inspection queue.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Storm damage or water at the panel in Pleasant Run? The creek corridor floods and wooded banks drop limbs. We repair both. Call (513) 586-5107.',
    relevance: [
      'Pleasant Run (ZIP 45240) takes its name from the creek running through this part of Springfield Township, and the creek corridor is what makes exposure uneven here. Properties along it sit lower and carry wooded banks, so they get both problems from one storm — limbs off the trees following the watercourse, and water reaching low basements. Streets on the higher ground a short distance away can come through the same night untouched.',
      'The two failure modes need different work. A mast is rebuilt and inspected. A panel that has stood in water is replaced, because water gets behind the bus bars and into the breakers and keeps corroding after the surface dries — and an inspector looks for exactly that before Duke reconnects. Springfield Township handles the permit and inspection, which is a different authority from the Green and Colerain townships on the west side.',
    ],
    commonIntro:
      "Across Pleasant Run's mid-century and newer homes, where the wooded creek corridor concentrates both wind and water damage, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Pleasant Run house backs onto the creek. Does that make things worse?',
        a: 'It gives you two exposures instead of one. The wooded banks along the watercourse put limbs over service drops, and the lower ground takes water into basements where panels usually sit. Neither is inevitable, but it does mean that when we come out to a creek-side property we look at both the entrance outside and the panel below rather than only the obvious problem.',
      },
    ],
  },

  cleves: {
    intro:
      'Storm damage or a flooded panel in Cleves? At the confluence, water can back up from either river. We repair both. Call (513) 586-5107.',
    relevance: [
      'Cleves (ZIP 45002) sits near where the Great Miami meets the Ohio, and a confluence behaves differently from a single river. When the Ohio runs high it can hold back the Great Miami’s flow, so water backs up rather than draining away — which means the flooding here does not depend only on how much rain fell locally or upstream on one river, but on what both are doing at once. Two moderate events can combine into something worse than either alone.',
      'That is why panels in low levels here have often been under water more than once. Submerged equipment gets replaced rather than dried out, because water reaches the breakers and behind the bus and keeps corroding invisibly. If yours has been replaced before for the same reason, ask us whether relocating it higher is practical while we are on site — the service entrance position constrains it, but where it can be done it turns a recurring cost into a one-off.',
    ],
    commonIntro:
      "In Cleves' older homes on low ground near the confluence, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why does Cleves flood when it has not rained much here?',
        a: 'Because you are near where the Great Miami meets the Ohio. A high Ohio can hold back the Great Miami rather than letting it drain, so water backs up into the low ground — and that depends on rainfall well upstream on either river rather than on your local weather. For the electrical side the rule does not change: a submerged panel is replaced, not dried and reused.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Storm damage at the service on your North Bend home? Wide floodplain, far west, small village. We repair masts, meter bases, and panels. Call (513) 586-5107.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio, sitting where the river takes a broad bend and the floodplain widens accordingly. A wide floodplain behaves differently from a narrow one: water spreads out rather than rising fast in a confined channel, which usually means more warning than the flashier tributaries give but a larger area affected once it comes. For homeowners that is the difference between minutes and hours to move things out of a basement.',
      'Being at the far western end of the service area is the other factor. Restoration works outward from the core, so the lines out here are commonly among the later ones reached in a regional storm. That makes the window test more valuable, not less: if the neighbours have lights and you do not, the remaining fault is your own equipment, and that repair does not have to wait on a utility crew reaching the village. North Bend issues its own permits rather than going through the county.',
    ],
    commonIntro:
      "In North Bend's older homes on the wide floodplain at the bend, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'How long should I expect to wait for a storm repair out in North Bend?',
        a: 'The utility side can genuinely be later here, because restoration works outward from the core and this is near the western edge. Our side does not have to wait for that — if the damage is on your mast or meter box, we can repair and inspect it so you are ready the moment the line is live. Calling early is worth more out here than almost anywhere.',
      },
    ],
  },

  loveland: {
    intro:
      'Storm damage at the service on your Loveland home? Loveland spans more than one county, so the permit depends on your address. Call (513) 586-5107.',
    relevance: [
      'Loveland (ZIP 45140) straddles the Little Miami and extends across more than one county, which makes it one of the few places where the permit authority genuinely depends on which part of the same city you live in. That is not a technicality after a storm — filing with the wrong county office does not fail an inspection, it means the paperwork comes back and you wait while it is redone, at the point when a day matters most. We confirm the authority for your specific address before anything is filed.',
      'The Little Miami supplies the physical hazard. It has a steep catchment and responds quickly to heavy rain, so water can arrive during the same storm rather than a day later, and the older housing near the river and the downtown sits low. Away from the river the housing runs from historic to recently built, so services span a wide range of ages and arrangements — some overhead with masts to lose, some newer and fed underground.',
    ],
    commonIntro:
      "Across Loveland's historic riverside downtown and its newer streets, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Which county handles the permit for my Loveland repair?',
        a: 'It depends on your address, because the city extends across more than one. That is unusual and it is worth checking rather than assuming — we confirm it before filing. Getting it wrong means the paperwork comes back and is refiled, which after a storm costs you a day you would rather not lose.',
      },
    ],
  },

  harrison: {
    intro:
      'Storm damage at the service on your Harrison home? Right on the Indiana line, where the utility and the rules can change across the road. Call (513) 586-5107.',
    relevance: [
      'Harrison (ZIP 45030) sits on the Indiana state line along the Whitewater River, and that position produces a genuinely unusual situation: houses a short distance apart can be in different states, served by different Duke Energy entities, under different state rules and different inspection regimes. Duke Energy Ohio and Duke Energy Indiana are separate operating companies with separate crews and separate regulators. A neighbour across the line being restored on a different timetable is not favouritism, it is a different utility.',
      'For your own repair what matters is establishing which side you are on before anything is filed, because the permit and inspection follow the state and locality rather than the postal address alone. The Whitewater adds the physical risk to the low ground near it, and the older downtown housing carries services of considerable age. Away from the river the newer development is a mix of overhead and underground.',
    ],
    commonIntro:
      "In Harrison's older downtown and newer streets along the Whitewater near the state line, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My neighbour across the line got power back before me. How is that possible?',
        a: 'Because they may be served by a different utility. Duke Energy Ohio and Duke Energy Indiana are separate operating companies with their own crews, their own restoration sequencing and their own regulators, and the state line runs through this area. It is not a queue you are behind — it is a different queue. Your own equipment repair is the part you control either way.',
      },
    ],
  },

  ludlow: {
    intro:
      'Storm damage at the service on your Ludlow home? Northern Kentucky is Duke Energy Kentucky. We repair the mast or meter base and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street district and streets of well-preserved Victorian and early-1900s houses. Those houses are tall for their footprint, close together, and set on narrow lots, which means the service entrance sits high on the wall and frequently runs up through the roof rather than stopping at the eaves. When a limb bends a mast at a roof penetration you have a wiring problem and a hole in the roof at the same time, and the flashing is part of the electrical repair rather than a roofer’s follow-up.',
      'The utility here is Duke Energy Kentucky rather than Duke Energy Ohio — separate crews, separate scheduling, and the Kentucky Public Service Commission rather than PUCO as the regulator. The riverfront position adds water to the low streets, and a panel that has been submerged is replaced rather than dried out, which an inspector will check before the meter goes back in.',
    ],
    commonIntro:
      "In Ludlow's tall Victorian and early-1900s houses on narrow riverfront lots, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The mast on my Ludlow house goes up through the roof. Who fixes the roof part?',
        a: 'We do, as part of the job. Where the mast passes through the roof, the flashing and seal around it belong to the service entrance, and replacing the mast without redoing them properly leaves you a leak that appears months later. If the limb damaged the roof more widely than the penetration, that part is a roofer’s and we will say so plainly.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Storm damage at the service on your Park Hills home? Devou Park canopy over steep streets is the usual cause. We repair it. Call (513) 586-5107.',
    relevance: [
      'Park Hills (ZIP 41011) climbs the hillside beside Devou Park above Covington, in early-1900s houses on steep, tree-lined streets. Devou is a large park with genuinely mature woodland, and the residential streets run right against it, so the canopy over the service drops on the park side is forest rather than street planting. What comes down from trees that size takes a mast off a wall rather than pulling a cable loose.',
      'The steepness compounds it in two ways. Drops run across a grade rather than level, which puts them under more tension and gives a limb more leverage. And access is genuinely difficult on the steepest lanes — there may be nowhere to place a ladder at the angle we want, so the setup takes longer than the repair. Worth mentioning your street when you call. The utility is Duke Energy Kentucky, with its own crews and scheduling.',
    ],
    commonIntro:
      "On Park Hills' steep streets against Devou Park, where forest canopy sits over the drops, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why does Park Hills seem to lose power more than Covington below it?',
        a: 'Trees and grade. The streets here run against Devou Park’s mature woodland, so there is far heavier canopy over the drops than down in the town, and the hillside puts spans under tension rather than level. Both make damage to your own equipment more likely. Down in Covington the more common problem is water at the panel rather than a mast off the wall.',
      },
    ],
  },

  bromley: {
    intro:
      'Storm damage or a flooded panel in Bromley? A small river village on low ground. We repair both and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older houses on low ground beside the Ohio. Being both very small and very low is the whole of the picture. Small means a single damaged pole line can affect a large share of the village at once, so the utility restoration is often quick — there is not much of it — and that speed is precisely what exposes the house whose own equipment is the remaining problem.',
      'Low means water. Panels sit in the lowest part of these houses, and a panel that has stood in water is replaced rather than dried out, because water gets behind the bus bars and into the breakers and corrosion continues after the surface looks fine. An inspector checks for it before Duke Energy Kentucky reconnects. On a village street where several neighbours have the same two problems, going in as a group saves everyone time in the queue.',
    ],
    commonIntro:
      "In Bromley's older homes on low ground beside the river, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Bromley got power back quickly but my house is still dark. What now?',
        a: 'The utility restored the lines it owns and stopped at your meter. In a village this small the line work finishes fast, which makes it obvious sooner that one house has a separate problem — and that problem is on equipment you own. A licensed repair and an inspection are needed before Duke Energy Kentucky will reconnect, so waiting longer will not change it.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Storm-damaged mast or meter base in Fort Wright? Hilltop above the river valley, so wind arrives unbroken. We repair it. Call (513) 586-5107.',
    relevance: [
      'Fort Wright (ZIP 41011) sits on the hilltop above the river in established mid-century and newer neighborhoods, and the elevation is what shapes storm damage here. Wind coming up the Ohio valley arrives at the top of the hill having had nothing to slow it, so the gusts reaching these streets are stronger than what the river cities below experience from the same storm. Service masts on the exposed side of a street take that load directly.',
      'The housing is largely mid-century, with services of that era and many still original — equipment that was sized for the loads of its time and has now been on the wall for decades. Sustained wind on an old mast works fixings loose and pulls a weatherhead out of true without necessarily snapping anything, which is damage that looks like nothing from the ground and still stops Duke Energy Kentucky reconnecting.',
    ],
    commonIntro:
      "Across Fort Wright's mid-century hilltop streets, where wind arrives off the valley unbroken, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Nothing looks broken outside my Fort Wright house but the power is off. What should I expect?',
        a: 'On an exposed hilltop the damage is often undramatic — fixings worked loose, a mast pulled slightly out of plumb, a weatherhead no longer shedding water into the entrance cable properly. None of it looks like storm damage and all of it will stop a reconnect. If the neighbours have lights and you do not, have it looked at properly rather than waiting on a crew who cannot touch your equipment.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Storm damage at the service on your Fort Mitchell home? We repair masts and meter bases along the Dixie Highway corridor. Call (513) 586-5107.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with historic houses and mid-century homes on settled streets. The corridor carries substantial commercial load, and commercial circuits are restored as a priority — so the businesses along Dixie are frequently lit while residential streets a few blocks back are still waiting. That ordering is normal and tells you nothing about your own street.',
      'The housing gives two different repairs. The historic houses are tall, with entrances high on the wall or through the roof, and services that may be original or reworked once decades ago — those need judging as a whole assembly rather than patched. The mid-century streets are more straightforward: known arrangements, equipment of one era, many still original. The utility throughout is Duke Energy Kentucky rather than Duke Energy Ohio.',
    ],
    commonIntro:
      "Across Fort Mitchell's historic and mid-century homes off the Dixie Highway corridor, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The businesses on Dixie Highway have power but my Fort Mitchell street does not. Why?',
        a: 'Circuits carrying commercial load are restored as a priority, so the corridor coming back first is expected and says nothing about your street. The useful comparison is the two houses either side of you. If they are lit and you are not, the remaining fault is on your own equipment and needs an electrician rather than more waiting.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Storm damage at the mast or meter base in Villa Hills? Entirely residential and on the hilltop — no commercial circuits to ride on. Call (513) 586-5107.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential city above the river, made up almost entirely of mid-century and newer single-family homes with essentially no commercial base. That is worth understanding because commercial load is what pulls a circuit up the restoration priority list. With none of it here, Villa Hills is restored purely as residential, which after a regional storm generally means later rather than sooner — and there is nothing a homeowner can do to change that part.',
      'What you can control is your own equipment. The hilltop position means wind arrives off the valley with little to break it, working on masts that in many cases have been in place since the house was built. And the newer sections were frequently developed with underground supply, so those houses have no mast to lose at all — worth establishing which arrangement you have, since it changes both the likely repair and how Duke Energy Kentucky schedules the reconnect.',
    ],
    commonIntro:
      "Across Villa Hills' mid-century and newer hilltop homes, restored purely as residential, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Why does Villa Hills seem to be restored later than places nearer the highway?',
        a: 'Commercial and industrial load raises a circuit’s restoration priority, and Villa Hills has almost none — it is residential throughout. So the lines here are worked as residential restoration, which in a regional storm usually means later. It is not something you can influence. What you can influence is having your own mast or meter box repaired and inspected so you are ready the moment the line is live.',
      },
    ],
  },
};
