import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 5 — the northern suburbs in Warren and Butler counties, the Mill Creek
// valley neighborhoods, and the smaller pockets on the west-side slopes.
export const part5: Record<string, LocationServiceCopy> = {
  mason: {
    intro:
      'Storm damage at the service on your Mason home? Duke restores the line and stops at the meter. We repair the rest across Warren County the same day. Call (513) 586-5107.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city near Kings Island, built mostly of subdivisions from the 1990s onward around an older town center. That split decides what a storm does to you here. The subdivision streets were largely developed with underground service, so there is no mast or weatherhead to lose — when those houses go dark it is either a genuine utility outage or a fault at the meter or in the panel. The older town center is overhead, with masts and drops that behave like any century-old service.',
      'Mason being in Warren County is the paperwork half. Permits and inspections do not go through Hamilton County or the city of Cincinnati, and an electrician who works mostly in town can file with the wrong authority out of habit and cost you a day. We establish which service arrangement your address has and which office the permit goes to before quoting a start date, because in Mason both answers vary within a few miles.',
    ],
    commonIntro:
      "Across Mason's newer underground-fed subdivisions and its older overhead town center, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Mason subdivision has underground power. Why did the storm still knock us out?',
        a: 'Underground service removes the mast and weatherhead, which is where most storm damage happens — but not the rest. You can still lose power to a fault at the meter base, to damage in the underground run itself, or to a surge from a nearby strike taking out breakers in the panel. And the line feeding your subdivision from the road is often still overhead, so a tree can take out the whole street even where individual houses are fed underground.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Storm-damaged mast or meter base in West Chester? We repair it, file with the township, and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'West Chester (ZIP 45069) is a large Butler County community along the I-75 corridor, made up largely of subdivisions built from the 1990s onward. Two things follow. Being a township rather than a city changes where the permit goes — Butler County and the township rather than any Cincinnati or Hamilton County office — and that is worth confirming before work is scheduled rather than after. And being newer means most of these houses have modern services, frequently underground, sized for the loads a 1990s house was built to draw.',
      'The corridor itself is the other factor. This is open, largely flat ground either side of I-75, without the hillsides and mature canopy that shelter the older neighborhoods closer in. That produces wind-driven damage rather than limb strikes: fixings worked loose, a mast pulled out of plumb, a weatherhead no longer shedding water properly. None of it looks dramatic from the ground, and all of it will stop Duke reconnecting.',
    ],
    commonIntro:
      "Across West Chester's newer subdivisions on the open I-75 corridor, where wind rather than limbs does the damage, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Does West Chester being a township rather than a city change anything?',
        a: 'It changes where the permit and inspection go, which matters because Duke will be looking for the sign-off before reconnecting. Filing with a Cincinnati or Hamilton County office by mistake does not fail the inspection — it means the paperwork comes back and you wait while it is refiled. Worth asking any electrician whether they have pulled permits in the township before.',
      },
    ],
  },

  pendleton: {
    intro:
      'Storm damage to the service on your Pendleton building? We repair masts and meter stacks in the arts district, and deal with the association or owner. Call (513) 586-5107.',
    relevance: [
      'Pendleton (ZIP 45202) is a small historic arts district against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condos. It is compact enough that almost nothing here has usable street frontage to work from. Service equipment is fed from narrow alleys and rear courts, mounted high on masonry, and reached through a shared passage rather than from a driveway — which means a storm repair in Pendleton begins with working out how we physically get to the equipment.',
      'The ownership question is the other half, and it comes first. In a converted building the service entrance and the meter stack are common elements belonging to the building or the association rather than to the unit owner whose lights are off. We establish who owns the damaged equipment before quoting, because in a district of small converted buildings the person who calls is very often not the person who can authorise the work or sign for the permit.',
    ],
    commonIntro:
      "In Pendleton's converted 19th-century buildings, where the service is reached from a narrow alley or rear court, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Pendleton loft has no power. Who should I be calling first?',
        a: 'Your association or building manager, before us. In a converted building the service entrance and meter stack are almost always common elements, so the repair is the building’s to authorise and to pay for, and an individual owner commissioning work on shared equipment creates problems later. Once they are ready to proceed we will handle the repair, the permit, and the reconnect. If the fault turns out to be inside your own unit, that part is yours and we can deal with it directly.',
      },
    ],
  },

  queensgate: {
    intro:
      'Storm damage to electrical service on a Queensgate property? We handle smaller commercial services and will tell you plainly when yours needs a larger contractor. Call (513) 586-5107.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district west of downtown, near the rail yards and the Mill Creek — warehouses, offices, and light-industrial buildings rather than housing. That changes the nature of a storm outage here. Commercial and industrial buildings commonly run three-phase service with switchgear rather than the single-phase mast, meter, and panel arrangement on a house, and the equipment is bigger, the disconnect procedure is different, and the inspection requirements are heavier.',
      'We are straightforward about the line. Smaller commercial services — a light-industrial unit, an office, a small warehouse — are work we do. A large three-phase service with a utility transformer, primary metering, or a substation-scale disconnect is a different trade, and sending us to look at it wastes your time in a week when time is what you do not have. Tell us what the building is on the phone and we will tell you honestly whether we are the right call.',
    ],
    commonIntro:
      "Across Queensgate's warehouses and light-industrial buildings on low ground by the Mill Creek, the storm-related electrical problems we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you handle a commercial service on a Queensgate warehouse?',
        a: 'It depends on the size, and we would rather establish that on the phone than after driving out. Single-phase and smaller three-phase services on light-industrial units and offices are work we do routinely. Large three-phase installations with primary metering or utility transformers on site are a specialist contractor’s job, and if that is what you have we will say so and not charge you for the visit to find out.',
      },
    ],
  },

  cuf: {
    intro:
      'Storm damage to the service on your CUF building? We work Clifton Heights, University Heights, and Fairview, and deal with the owner on rental property. Call (513) 586-5107.',
    relevance: [
      'CUF (ZIP 45219) covers three distinct hilltop neighborhoods packed against the University of Cincinnati — Clifton Heights, University Heights, and Fairview — and Fairview in particular is steep enough that some streets are connected by public stairways rather than roads. That terrain decides access. On the steepest blocks there may be nowhere to place a ladder at the angle we need, and the service entrance on a tall subdivided house sits high on the wall, so the setup takes longer than the repair.',
      'Almost all of this housing is 19th- and early-1900s homes long since converted to student rentals, which means multiple meters per building and, more importantly, owners who are frequently not on site. The fastest version of a storm repair here is a property manager calling with the address and authorisation in one conversation. A tenant calling gets the same look and the same honest assessment, but the permit and the reconnect both need the owner.',
    ],
    commonIntro:
      "Across CUF's steep, subdivided hilltop houses near the university, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Fairview street is on a hill with steps rather than a road. Can you still do the repair?',
        a: 'Yes, but plan for it taking longer to set up than the work itself. On the steepest CUF blocks there is often nowhere to place a ladder where we would want it, and equipment has to be carried in. Tell us the access situation when you call so we schedule the right amount of time — a crew that arrives and cannot reach the mast has cost you a day in a week where days are what count.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Storm damage at the meter or a flooded panel in Camp Washington? We repair both in the Mill Creek valley and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood down in the Mill Creek valley, a tight mix of old worker housing and factories. The housing is small — compact cottages and modest frame homes built for factory workers — and that means the original electrical services were small too, sized for a house with a few lights and little else. Many are still running on services that were marginal decades ago, and a storm that damages one is the moment that becomes unavoidable.',
      'The valley is the other factor, and it works against you twice. Low ground means water in basements during the same storms that bring the wind, and the panel is usually in the basement. Submerged electrical equipment is replaced rather than dried out, because water gets behind the bus and into the breakers and keeps corroding after the surface looks fine. We look at the entrance above and the panel below together rather than fixing one and finding the other.',
    ],
    commonIntro:
      "In Camp Washington's compact worker housing on low valley ground, where services were small to begin with, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Camp Washington house is small and the service is original. Is it worth upgrading during a storm repair?',
        a: 'Usually, because the original service on a house like this was sized for a fraction of what you now run. The costs that make this job expensive are the labour, the permit, and the inspection, and they are the same whether we rebuild what was there or fit something properly sized. Putting a 1930s service back on a house with central air and a modern kitchen means paying that set of costs again before long.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Storm damage or a flooded panel in South Fairmount? We repair masts, meter bases, and panels along the Lick Run valley. Call (513) 586-5107.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue, and the neighborhood was substantially rebuilt around the Lick Run Greenway — a stormwater project undertaken precisely because this valley had flooded for generations. That history is the useful context for a storm here. The Greenway handles surface water far better than what came before it, but the housing that remains still sits low, and a panel in a low basement is still a panel in a low basement when a serious storm arrives.',
      'So the two failure modes both apply, and they need different answers. Wind damage to a mast or weatherhead is rebuilt and inspected. A panel that has stood in water is replaced, not dried and re-energised, and an inspector will look for that before Duke puts the meter back. On these streets we assess both in one visit as a matter of course rather than treating the flooded basement as a separate call from the dark house.',
    ],
    commonIntro:
      "In South Fairmount's low-lying housing along the Lick Run valley, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Does the Lick Run Greenway mean my South Fairmount basement will not flood any more?',
        a: 'It means the valley handles surface water far better than it used to, which is a real improvement — but it is not a guarantee for any individual basement in an extreme storm. If yours has taken water before, it is worth knowing that a submerged panel gets replaced rather than dried out, and worth asking us about moving or protecting the panel while we are there if the location is part of the problem.',
      },
    ],
  },

  'east-end': {
    intro:
      'Storm damage at the service on your East End home? Squeezed between the hillside and the river, you can get both wind and water. We repair both. Call (513) 586-5107.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront strip running east of downtown along Eastern Avenue, below Columbia Parkway, with historic river cottages and newer condos wedged between the hillside and the Ohio. There is barely any neighborhood between those two hazards, and that is exactly the point: the wooded hillside directly above drops limbs onto service equipment, while the river directly below puts water into low levels. A single storm can deliver both to the same address on the same night.',
      'The housing splits how that plays out. The older river cottages are low, with short overhead spans and services often original, and their vulnerability is water. The newer condos are taller, frequently with the service arrangement of a modern building and sometimes fed underground, and their vulnerability is what a surge does to everything inside. We ask which you have before quoting, because the likely repair is genuinely different.',
    ],
    commonIntro:
      "In the East End's narrow strip between the wooded hillside and the river, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'A limb came off the hillside above my East End house and took the wires down. Whose is the hillside?',
        a: 'Often it is not yours, and it is worth finding out — the slope below Columbia Parkway includes public land in places. Report the tree to the city and to Duke, and photograph everything before it is cleared for the insurance claim. What none of it changes is the repair: if your mast or meter box is damaged, Duke will not reconnect until a licensed electrician has fixed it and it has been inspected, whoever owned the tree.',
      },
    ],
  },

  'north-fairmount': {
    intro:
      'Only your North Fairmount house is dark after the storm? That is your own equipment. We work the hillside above the Mill Creek valley the same day. Call (513) 586-5107.',
    relevance: [
      'North Fairmount (ZIP 45225) is a small west-side hillside neighborhood on the slope above the Mill Creek valley, with streets of older early-1900s homes. Being both small and on a hillside has a specific consequence after a storm. A single damaged pole line can take out a large share of the neighborhood at once, which means the utility restoration here is often quick — there is not much of it to restore. That is good news, and it is also why homeowners here get caught out.',
      'When the lines come back fast and one house stays dark, the remaining fault is on that homeowner’s own equipment, and no further waiting will change it. On early-1900s houses that usually means the mast, the weatherhead, or the meter box, all of which Duke will not reconnect to once damaged. The window test is the whole diagnosis: if the neighbours have lights and you do not, stop waiting and call someone.',
    ],
    commonIntro:
      "On North Fairmount's hillside streets of early-1900s homes, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The rest of North Fairmount came back on quickly but my house did not. Why?',
        a: 'Because the utility restored the lines it owns and stopped at your meter. In a small neighborhood the line work is often finished quickly, which makes it obvious sooner that one house has a separate problem — and that problem is on equipment you own. A licensed electrician has to repair it and an inspector generally has to approve it before Duke will reconnect, so waiting longer accomplishes nothing.',
      },
    ],
  },

  evanston: {
    intro:
      'Storm damage to the service on your Evanston home? We repair masts and meter banks near Xavier and handle the inspection Duke needs. Call (513) 586-5107.',
    relevance: [
      'Evanston (ZIP 45207) sits next to Xavier University in streets of early-1900s houses and apartment buildings, with a good deal of it now student housing mixed in among long-term owner-occupied homes. That mix is the practical thing here, because it decides how fast a storm repair actually moves. On an owner-occupied house the decision is made by whoever is standing in the driveway. On the rental next door the tenant has no authority, the owner may be elsewhere, and the same damage can sit for days.',
      'If you own your Evanston home, that works in your favour and it is worth using. Call the morning it happens rather than waiting, because the queue after a regional storm is first come and a large share of the housing around you will be slower to act for reasons that have nothing to do with the damage. The equipment itself is what you would expect from early-1900s stock: original or reworked entrances, and meter banks on the buildings that have been divided.',
    ],
    commonIntro:
      "Across Evanston's early-1900s homes and divided apartment buildings near Xavier, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'I own my Evanston house and the rentals nearby are still dark. Can I get seen sooner?',
        a: 'Realistically, yes — not because we prioritise owners, but because you can authorise the work the moment you call and a tenant cannot. After a storm the queue is first come, and the delay on rental property is usually the wait for an owner to respond rather than the repair. If you own the house, calling early is the single thing most within your control.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Storm damage or a flooded panel in South Cumminsville? We repair both in the Mill Creek valley and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood down in the Mill Creek valley, with older homes set among industrial corridors. Being surrounded by industry rather than more housing has an odd effect on storm outages: the circuits through here often serve commercial and industrial premises as well as homes, and the poles run along corridors rather than tree-lined residential streets. Less canopy means fewer limb strikes than the hillside neighborhoods above, but the valley brings its own problem.',
      'That problem is water. Low ground means basements take water in the same storms that bring wind, and the panel is nearly always in the basement. Submerged electrical equipment is replaced rather than dried out — water gets behind the bus bars and into the breakers and keeps corroding long after the surface dries — and an inspector will check for exactly that before Duke reconnects. On these streets we look at the panel as a matter of course, not only the entrance outside.',
    ],
    commonIntro:
      "In South Cumminsville's older homes among the valley's industrial corridors, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My South Cumminsville basement floods most heavy storms. Should the panel be moved?',
        a: 'It is worth asking about while we are there. If the panel has been replaced once because of water, replacing it again in the same position is a predictable expense, and relocating it higher up the wall or to a different room is sometimes practical. It is not always — the service entrance position and the run to the meter constrain it — but it is a better conversation to have during a repair than after the next flood.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Storm damage at the service on your English Woods home? We repair masts, meter bases, and panels on the hilltop above the valley. Call (513) 586-5107.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, and it has seen substantial redevelopment in recent years. That redevelopment is what makes the storm answer here different from house to house. Newer construction is typically fed underground with a modern panel, and those homes have no mast or weatherhead to lose — when they go dark it is either a genuine utility outage or a fault at the meter or in the panel. What remains of the older housing is overhead, with entrances that may be original.',
      'Being on the hilltop means wind exposure without the shelter the valley gets, so the older overhead services here take the load. The practical advice is the same either way and starts at the window: if the neighbours have lights and you do not, the fault is on your side of the meter and Duke will not reconnect to it until a licensed electrician has repaired it and it has been inspected.',
    ],
    commonIntro:
      "Across English Woods' redeveloped and older housing on the hilltop, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My English Woods home is newly built. Do I still need an electrician after a storm?',
        a: 'Possibly not, and we would rather tell you that than send someone. Newer construction here is usually fed underground, so there is no mast or weatherhead to be damaged. If your whole street is dark it is a utility outage and you wait. If only your house is out, the likely causes are the meter base, the underground run, or surge damage in the panel — worth a look, but a different and usually smaller job than a service rebuild.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Storm damage to the mast or meter base on your North Avondale home? We repair it, handle the permit and inspection, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'North Avondale (ZIP 45229) is a leafy historic neighborhood of grand early-1900s houses on large, tree-shaded lots near Rockdale Avenue, and the size of those lots is the storm factor people underestimate. Houses set well back from the street mean long overhead service drops running across the front garden — and in this neighborhood that garden is full of mature specimen trees. A longer span under heavy canopy is the highest-risk arrangement there is, and it is why damage here tends to be the drop and the mast rather than anything at the pole.',
      'The houses are also tall enough that the entrance sits high on the wall or passes through the roof, which makes the flashing and the seal at the penetration part of the electrical repair rather than a roofer’s afterthought. And what is inside these homes matters: multiple HVAC zones, finished lower levels, and a great deal of equipment on control boards, all of which a surge from a nearby strike goes through at once.',
    ],
    commonIntro:
      "In North Avondale's grand houses on large, tree-shaded lots, where drops run long spans under mature canopy, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My North Avondale house is set well back from the road. Does that make outages more likely?',
        a: 'It makes damage to your own equipment more likely, yes. A long overhead drop crossing a garden full of mature trees gives a falling limb far more line to catch than a short span on a small lot. That is why houses like these lose masts and drops while the street lights stay on. Keeping limbs off the drop helps, and whole-home surge protection is worth having on a house with this much equipment inside it.',
      },
    ],
  },

  millvale: {
    intro:
      'Storm damage or water at the panel in Millvale? We repair masts, meter bases, and panels in the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Millvale (ZIP 45225) is a small, compact residential neighborhood on low ground in the Mill Creek valley. Compact and low together mean that when weather affects Millvale it tends to affect the whole of it at once rather than picking off individual houses — the same rain reaches the same basements on the same streets. That is worth knowing because it changes what your neighbours tell you. On a street where everyone has water in the basement, the fact that everyone is also dark does not mean the utility is the problem.',
      'The two have to be separated. If the lines are restored and your house alone stays off, the fault is on your equipment. If your panel stood in water, it is being replaced regardless of what the mast looks like, because water gets behind the bus and into the breakers and corrosion continues after everything appears dry. An inspector checks for that before the meter goes back, so we assess the panel here as standard rather than only what is visible outside.',
    ],
    commonIntro:
      "In Millvale's compact housing on low valley ground, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Everyone on my Millvale street is dark and flooded. Is it worth calling an electrician yet?',
        a: 'Call and describe it rather than guessing. If the whole street is out because the utility has not restored the lines, an electrician cannot help with that part — but if your panel has been under water it is being replaced whatever the utility does, and knowing that early means the work and the inspection can be lined up for the moment power is available. On a flooded street those two things are usually both true at once.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Storm-damaged service on your Paddock Hills home? Duke will not reconnect until it is repaired and inspected. Same-day work near Paddock Road. Call (513) 586-5107.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept residential pocket on the north side near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes. Sitting against a major highway corridor changes the wind picture: the Lateral is an open cut through what is otherwise a sheltered part of the city, and open corridors channel wind rather than breaking it up. Houses on the streets nearest it take more of that than the neighborhood’s size would suggest.',
      'The housing is a mix of early- and mid-1900s, which means services of two different vintages on the same streets — original entrances on the older houses, and mid-century equipment on the rest, much of it still in place and sized for the loads of the time. When a storm damages an already-marginal service, the decision worth making is whether to rebuild it as it was or bring it up to what the house now draws, since the labour, permit, and inspection cost the same either way.',
    ],
    commonIntro:
      "In Paddock Hills' early- and mid-1900s homes near the Norwood Lateral, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Is it worth upgrading the service while you are repairing storm damage in Paddock Hills?',
        a: 'On a house still running mid-century equipment, usually yes. The expensive parts of this job are the labour, the permit, and the inspection, and you pay them whichever you choose. Putting original equipment back on a house that now runs central air, a heat pump, or an EV charger means paying that same set of costs again in a few years. We will quote both so the difference is visible rather than asserted.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Storm damage at the service on your Spring Grove Village home? We repair masts and meter bases beside the Arboretum and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around Spring Grove Cemetery and Arboretum — one of the largest cemeteries in the country and a genuine arboretum, holding specimen trees far bigger and older than anything on an ordinary residential street. Living beside a collection like that is pleasant for eleven months of the year and a specific hazard in a storm. Mature specimen trees drop limbs on a scale that street trees do not, and the properties along the boundary carry that exposure.',
      'The valley adds the second problem underneath. Low ground means basements take water in the same storms, and panels are usually in basements, and submerged electrical equipment gets replaced rather than dried out. So on the streets nearest the Arboretum we expect to look at two things: what a large limb did to the service entrance above, and what the water did to the panel below.',
    ],
    commonIntro:
      "In Spring Grove Village's homes beside the Arboretum on low valley ground, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'A limb from the Arboretum side took my power out. Does that change who pays?',
        a: 'It is worth reporting to the cemetery and to Duke, and photographing everything before it is cleared, because it matters for an insurance claim. What it does not change is the repair itself: damage to your mast, weatherhead, or meter box is yours to have repaired before Duke will reconnect, regardless of whose tree caused it. Your homeowner policy is usually the route to recovering it rather than the tree’s owner.',
      },
    ],
  },

  linwood: {
    intro:
      'Storm damage at the service on your Linwood home? Open river bottomland brings wind and water together. We repair both. Call (513) 586-5107.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, along Eastern Avenue near Lunken Airport and the river bottoms. That setting is unusual for the city — flat, open bottomland rather than hillside or dense grid — and it produces a different kind of storm damage. There is little canopy and little shelter, so wind arrives across open ground and works on the equipment itself: fixings loosened, a mast pulled out of plumb, a weatherhead no longer sitting square. Nothing dramatic to photograph, and enough to stop Duke reconnecting.',
      'The bottomland is the other half. Low, flat ground next to the river means water, and the panel is usually in the lowest part of the house. Those two failure modes have different remedies — a mast is rebuilt and inspected, a submerged panel is replaced — and on these streets it is common to have one of each from the same storm. We look at both rather than fixing the visible problem and returning for the other.',
    ],
    commonIntro:
      "In Linwood's homes on the open river bottomland near Lunken, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Nothing looks broken outside my Linwood house but the power is off. What should I expect?',
        a: 'On open ground like this the damage is often undramatic — a mast worked slightly out of plumb, fixings loosened, a weatherhead no longer shedding water into the cable properly. It does not look like storm damage and it will still stop Duke reconnecting. If the neighbours have lights and you do not, have it looked at properly rather than waiting on a utility crew who are not permitted to touch your equipment.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Storm-damaged mast or meter base in Bond Hill? We repair it, pull the permit, and coordinate the Duke reconnect along Reading Road. Call (513) 586-5107.',
    relevance: [
      'Bond Hill (ZIP 45237) is an established north-side neighborhood along Reading Road, with streets of early-1900s and mid-century single-family homes. There is a pattern here worth naming, because it catches people out. A great many services in Bond Hill are not original — they were upgraded once, in the 1960s or 70s, when the houses were modernised. That felt like a permanent fix at the time. Fifty years on, those replacement services are themselves at the end of their life, and they are what storms are now damaging.',
      'It matters because homeowners reasonably believe the service has already been dealt with. What is actually on the wall is second-generation equipment, decades old, sized for the loads of its own era rather than the original one or today’s. When a limb damages it, rebuilding it exactly as it is means fitting equipment that was already near the end of its useful life. We will price both options and explain which parts are genuinely worn rather than only broken.',
    ],
    commonIntro:
      "Across Bond Hill's established homes, many on second-generation services fitted decades ago, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Bond Hill service was replaced years ago. Does that mean it is fine?',
        a: 'Not necessarily. A service fitted in the 1960s or 70s is now fifty years old itself, and sized for the loads of that era rather than a house with central air, a heat pump, or an EV charger. It is better than the original would have been, and it is not modern. If a storm has damaged it, that is the moment to look at what the house actually draws rather than putting the same thing back.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Storm damage to the electrical service at Villages of Roll Hill? The service equipment is the property’s, not any resident’s. We deal with management. Call (513) 586-5107.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings. That is the whole of the practical picture after a storm: essentially none of the electrical service equipment here belongs to a resident. The service entrances, the meter banks, and the distribution feeding each building are the property’s, so the repair is authorised and paid for by management, and a resident calling an electrician directly cannot get it started.',
      'What residents can usefully do is report it accurately and quickly. Whether one building is out or several, and whether the street lights are on, are the details that tell management and us whether this is a utility restoration or damage to the property’s own equipment. Where it is the latter, a single point of contact for the whole site is far faster than several separate calls — one permit, one inspection, one Duke visit rather than three of each.',
    ],
    commonIntro:
      "Across Villages of Roll Hill's apartment buildings on the hilltop above the valley, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'I rent at Roll Hill and my building has no power. What can I do?',
        a: 'Report it to the property office rather than calling an electrician, and tell them whether other buildings and the street lights are also out — that is the detail that separates a utility outage from damage to the site’s own equipment. The service entrances and meter banks belong to the property, so only management can authorise the repair. We are happy to deal with them directly once they call.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Only your East Westwood house is dark after the storm? That points at your own mast or meter base. Same-day repair on the slopes. Call (513) 586-5107.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the slopes between Westwood above and the Mill Creek valley below, in streets of early- and mid-1900s homes. Being mid-slope rather than on a hilltop or a valley floor is its own condition. Service drops here frequently run across the grade rather than along it, so the span between pole and house is at an angle and under more tension than the same length on flat ground — which puts extra load on the mast whenever anything lands on the line.',
      'The slope also means the neighborhood does not share one restoration fate. Streets higher up can come back at a different time from streets lower down, so what the house at the top of the hill tells you may not apply to you. Judge it by the two houses either side: if they have lights and you do not, the remaining fault is on your own equipment and Duke will not reconnect to it until a licensed electrician has repaired it and it has been inspected.',
    ],
    commonIntro:
      "On East Westwood's mid-slope streets, where drops run across the grade under tension, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The top of my East Westwood street has power and the bottom does not. What does that mean?',
        a: 'On a slope like this it usually means the restoration has reached one part and not the other, so it is worth judging by your immediate neighbours rather than the street as a whole. If the houses either side of you are lit and yours is not, the fault is on your own mast, meter box, or panel and waiting will not fix it. If everything below a certain point is dark, that is more likely still utility work in progress.',
      },
    ],
  },
};
