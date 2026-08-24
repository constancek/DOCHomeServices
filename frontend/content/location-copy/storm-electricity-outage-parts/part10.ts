import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 10 — Clermont County, the eastern villages, and Butler County. Note
// that much of Hamilton is served by the city's own municipal electric utility
// rather than Duke, which changes who reconnects the meter.
export const part10: Record<string, LocationServiceCopy> = {
  withamsville: {
    intro:
      'Storm damage at the mast or meter base in Withamsville? Ohio Pike commercial circuits come back first. Clermont County issues the permit. Call (513) 586-5107.',
    relevance: [
      'Withamsville (ZIP 45245) runs along the Ohio Pike corridor in Union Township, western Clermont County, mixing suburban housing with commercial strips. Those strips carry enough load that their circuits are restored as a priority, so the practical experience of a storm here is watching the shops along the Pike come back while residential streets behind them are still dark. That is normal sequencing rather than an oversight, and it says nothing about your own street.',
      'Once the lines near you are live the test is narrow: neighbours either side with lights and none in your house means the fault is on equipment you own. Permits and inspections go through Clermont County and Union Township rather than Hamilton County or the city, which is worth confirming before work is booked — a contractor who works mostly on the Cincinnati side can file with the wrong authority out of habit.',
    ],
    commonIntro:
      "Across Withamsville's suburban streets behind the Ohio Pike commercial strips, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'The shops on Ohio Pike have power but my Withamsville street does not. Is that my equipment?',
        a: 'Not necessarily. Commercial circuits along a corridor like that are restored as a priority, so the strips coming back first is expected. The useful comparison is the two houses either side of yours — if they are lit and you are not, the remaining fault is on your own mast, meter box or panel, and that needs an electrician rather than more waiting.',
      },
    ],
  },

  milford: {
    intro:
      'Storm damage at the service on your Milford property? Old Main Street buildings often share one service. Clermont handles the permit. Call (513) 586-5107.',
    relevance: [
      'Milford (ZIP 45150) straddles the Little Miami with a preserved old Main Street district of 19th-century buildings around it, and those buildings change the shape of a storm repair. Many have a business at ground level and residential space above, running from one service entrance and a shared meter bank — so damage there takes a shop and one or more households off together, and the repair belongs to the building owner rather than any occupant.',
      'The Little Miami supplies the physical risk. It has a steep catchment and responds quickly to heavy rain, so water can arrive during the same storm rather than a day later, and the low ground near the river and the old core is where it goes. A panel that has stood in water gets replaced rather than dried out, which an inspector will check before the meter goes back in. Permits go through Clermont County.',
    ],
    commonIntro:
      "Across Milford's Main Street buildings and older riverside homes, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'I live above a shop on Milford Main Street and we have no power. Who arranges the repair?',
        a: 'The building owner. Where a business and residential space share one service entrance and meter bank, that equipment is the building’s, so neither tenant can authorise work on it. Report it to the owner or managing agent and mention that the business is also out — commercial pressure usually moves these along faster than a residential-only building.',
      },
    ],
  },

  mulberry: {
    intro:
      'Storm-damaged mast or meter base in Mulberry? Your ZIP covers several communities, so we confirm the right authority. Call (513) 586-5107.',
    relevance: [
      'Mulberry (ZIP 45150) is a suburban community in the Milford area of western Clermont County, and that ZIP covers Milford, Mulberry, Mount Repose and Day Heights between them. A postal code is not a jurisdiction, and out here that matters: whether your address is inside the city of Milford or in the surrounding township changes which office issues the permit and books the inspection. We check it before filing rather than working from the ZIP.',
      'The housing is mid-century and newer on suburban lots wider than the city grid, so the overhead drops run longer spans from pole to house — more line for a falling limb to catch, and the clearest reason houses out here lose their own equipment while the street stays lit. Where the newer sections were built with underground supply there is no mast or weatherhead to lose at all.',
    ],
    commonIntro:
      "Across Mulberry's suburban mid-century and newer homes, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My ZIP is 45150, the same as Milford. Does the city handle my permit?',
        a: 'Only if your address is actually inside the city. ZIP 45150 also covers Mulberry, Mount Repose and Day Heights, which are township rather than city, and the filing follows the jurisdiction rather than the postal code. We confirm it before submitting anything, because a misfiled permit means waiting while it is redone.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Storm damage at the service on your Mount Repose home? Elevated ground above the valley, so wind rather than water. Call (513) 586-5107.',
    relevance: [
      'Mount Repose (ZIP 45150) sits on higher ground above the Little Miami valley in the Milford area, and the elevation is the thing that separates it from its neighbours in practice. Down in the valley the recurring storm problem is water reaching panels in low basements. Up here it is wind — arriving with less to break it than the sheltered river streets get, working on masts and weatherheads rather than flooding anything.',
      'That kind of damage is easy to miss, which is the useful warning. There is often no dramatic broken pipe to point at, just a mast standing slightly out of plumb, fixings worked loose, or a weatherhead no longer shedding water into the entrance cable properly. It does not look like storm damage from the ground and it will still stop a reconnect. Permits go through Clermont County and the township rather than the city of Milford.',
    ],
    commonIntro:
      "Across Mount Repose's suburban homes on higher ground above the valley, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The power is out at my Mount Repose house but nothing looks broken. What now?',
        a: 'On exposed higher ground the damage is often undramatic — a mast worked out of plumb, loosened fixings, a weatherhead no longer sitting square so water can track into the cable. None of it looks like storm damage and all of it will stop a reconnect. If the neighbours have lights and you do not, it is worth a proper look rather than waiting on a crew who cannot touch your equipment.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Storm damage at the service on your Day Heights property? On a well, an outage means no water either. Call (513) 586-5107.',
    relevance: [
      'Day Heights (ZIP 45150) mixes suburban streets with genuinely semi-rural property in the Milford area of Clermont County, and the rural edge is where storm calls behave differently. Those properties frequently sit well back from the road on long private service runs, and a number are on private wells — which means an outage takes your water with it, because a well pump is electric. A septic system with a pump is affected the same way.',
      'That is worth saying on the phone, because we cannot tell it from an address, and it changes how we prioritise the visit. A long private run also means the damage may be somewhere out along the line rather than at the house, so locating it is the first job and we would rather arrive equipped for that. Closer in, the suburban streets are conventional, some overhead and some newer sections underground.',
    ],
    commonIntro:
      "Across Day Heights' suburban streets and semi-rural properties, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'I am on a well in Day Heights and the power is out. How urgent is it?',
        a: 'More urgent than an outage on public water, and worth saying when you call. A well pump runs on electricity, so no power means no water for washing, flushing or drinking, and a septic pump stops too. Mention it on the phone — it changes how we prioritise the visit, and it is not something we can work out from the address.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Storm damage or a flooded panel in New Richmond? A 19th-century riverfront village a long way downstream. We repair both. Call (513) 586-5107.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County, with deep roots in the abolitionist movement and 19th-century houses lining the riverfront. Two practical facts follow from that. The houses are genuinely old, so services are frequently original or reworked once a long time ago, and the entrances on the taller ones sit high or pass through the roof. And the village sits low on the river, so water reaches the levels where panels live.',
      'Being well downstream from the metro core is the third factor. Restoration works outward, so the lines here are commonly among the later ones reached in a regional storm — which makes the window test more valuable, not less. If the neighbours have lights and you do not, the remaining fault is on your own equipment, and that repair does not have to wait for a utility crew to arrive in the village.',
    ],
    commonIntro:
      "In New Richmond's 19th-century riverfront houses on low ground, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Is it worth calling before the utility has even reached New Richmond?',
        a: 'Yes, if you can see damage on your own equipment. The utility side genuinely can be later out here because restoration works outward from the core. Our part does not depend on that — if the mast or meter box is damaged we can repair and inspect it so you are ready the moment the line goes live, rather than starting the process then.',
      },
    ],
  },

  amelia: {
    intro:
      'Storm damage at the mast or meter base in Amelia? We repair it, file with Clermont County, and coordinate the reconnect. Call (513) 586-5107.',
    relevance: [
      'Amelia (ZIP 45102) sits along the Ohio Pike corridor in Clermont County, in established neighborhoods of mid-century and newer homes. The trees planted when those mid-century streets were laid out are now full-grown and standing directly over the service drops, which produces the pattern we see here after every serious storm: not widespread failure across the community, but individual houses losing a mast or a weatherhead while everything around them is fine.',
      'Those are precisely the outages homeowners assume the utility will handle, and then wait days on. The corridor’s commercial load is restored as a priority, so the businesses along the Pike will often be lit while a single house behind them stays dark — which is a reliable signal rather than a frustration. Permits and inspections go through Clermont County rather than Hamilton, worth confirming before anything is filed.',
    ],
    commonIntro:
      "Across Amelia's mid-century and newer streets under full-grown trees, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Amelia house is the only dark one on the street. Will Duke fix it?',
        a: 'No — that pattern means the fault is on equipment you own, and Duke is not permitted to work on your mast, weatherhead, meter box or panel. They restore the line to the meter and stop. It needs a licensed electrician and, in most cases, an inspection before they will reconnect, so waiting longer accomplishes nothing.',
      },
    ],
  },

  batavia: {
    intro:
      'Storm damage at the service on your Batavia home? The county seat, but the village issues its own permit. Call (513) 586-5107.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami, with a historic village core and newer development around it. Being the county seat causes a predictable confusion: county offices are here, so people assume the county handles their permit — but if your address is inside the village, the village does. Outside it, the township and county do. That distinction is worth settling before anything is filed, because a misdirected permit costs a day.',
      'The East Fork is the physical risk. It responds quickly to heavy rain, and the older village housing sits low near it, so water reaches the levels where panels live. Submerged equipment is replaced rather than dried out — water gets behind the bus bars and into the breakers and corrosion continues after the surface dries — and an inspector checks for it before the meter goes back in.',
    ],
    commonIntro:
      "Across Batavia's historic village core near the East Fork and the newer development around it, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Batavia is the county seat — does the county issue my permit?',
        a: 'It depends whether your address is inside the village. If it is, the village issues it. If you are outside the village boundary, it goes through the township and county. The county offices being located here makes people assume the second answer applies to everyone, and it does not. We confirm which before filing.',
      },
    ],
  },

  owensville: {
    intro:
      'Storm damage at the service on your Owensville property? A small eastern village with rural properties around it. Call (513) 586-5107.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County with a historic core and rural and suburban property around it. Being both small and well east of the metro shapes the storm experience twice over. Restoration works outward from the denser areas, so the lines here are commonly late in the sequence. And the village itself is small enough that a single damaged pole line can affect much of it at once, so when the utility does arrive the work is often quick.',
      'It is that combination — late but then fast — that catches people. Once the lines are live and one house is still dark, the fault is on that homeowner’s own equipment and no further waiting helps. On the rural properties around the village there is the additional point that many are on wells, and a well pump is electric, so an outage there takes the water with it. Tell us on the phone if that applies to you.',
    ],
    commonIntro:
      "Across Owensville's historic core and the rural properties around it, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'The village came back on but my Owensville house did not. Why?',
        a: 'Because the utility restored the lines it owns and stopped at your meter. In a village this small the line work finishes quickly once a crew arrives, which makes it obvious sooner that one property has a separate problem — and that problem is on equipment you own. It needs a licensed repair and an inspection before the meter goes back in.',
      },
    ],
  },

  goshen: {
    intro:
      'Storm damage at the service on your Goshen property? Township permits, and rural properties on wells lose water too. Call (513) 586-5107.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County with a mix of suburban and genuinely rural property, and the first thing to settle is the paperwork: this is township and county rather than a village or city, so permits and inspections go through Goshen Township and Clermont County. A contractor used to working in the cities closer in can file with the wrong authority out of habit and cost you a day.',
      'On the rural side, an outage is a bigger event than it sounds. Properties out here are frequently set well back on long private service runs, and a good number are on wells — meaning no power is also no water, since the pump is electric, with septic pumps affected the same way. A long private run also means the damage may be out along the line rather than at the house, so locating it is the first task.',
    ],
    commonIntro:
      "Across Goshen's suburban streets and rural properties in northern Clermont County, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Goshen property has a long drive and I am on a well. What should you know before coming out?',
        a: 'Both of those, on the phone. The well means no power is also no water, which changes how we prioritise the visit. The long run means the damage may be somewhere out along the line rather than at the house, and knowing in advance means we arrive equipped to trace it rather than making a second trip.',
      },
    ],
  },

  moscow: {
    intro:
      'Storm damage at the service on your Moscow home? A village that has rebuilt from a tornado knows this drill. We repair masts and panels. Call (513) 586-5107.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, and it is one of the few places we work where severe storm damage is living memory for most residents — the village was struck by a tornado in March 2012 that destroyed or damaged much of it. A consequence for electrical work is that a meaningful share of the housing and service equipment here dates from the rebuilding rather than from the 19th century, so services are frequently newer and better than the age of the village would suggest.',
      'What has not changed is the river. The village sits low on the Ohio, so water still reaches the levels where panels live, and submerged equipment gets replaced rather than dried out. And being well downstream means restoration is commonly later here in a regional event. Where houses are on older services, the usual pattern applies: if the neighbours are lit and you are not, the remaining fault is your own equipment.',
    ],
    commonIntro:
      "In Moscow's riverfront housing, much of it rebuilt since 2012, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Moscow house was rebuilt after the tornado. Is the electrical service newer too?',
        a: 'Usually, yes, and that works in your favour. Rebuilt properties generally have modern service equipment and a properly sized panel, so the classic storm failures — a torn-off mast on a fifty-year-old entrance — are less likely. What remains possible is damage at the meter base, a flooded panel if it sits low, or surge damage from a nearby strike.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Storm damage at the service on your Newtonsville property? Rural, far east, and often on a well. We repair both ends. Call (513) 586-5107.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, and it is about as rural as our service area gets on the Ohio side. That has two consistent effects after a storm. Restoration reaches out here late, because it works outward from the denser areas and there is a long way to come. And the properties themselves are spread out, frequently set well back from the road on long private service runs where damage can be anywhere along the line rather than at the house.',
      'A good number are on wells and septic, which turns an outage into a water problem as well as a lighting one — the pump is electric. Say so when you call, because it changes the priority and it is not something we can tell from an address. The upside of rural property is that your own repair does not wait on the utility: we can rebuild and inspect the entrance so you are live the moment the line is.',
    ],
    commonIntro:
      "Across Newtonsville's rural properties and village core, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Do you cover somewhere as rural as Newtonsville?',
        a: 'Yes, and it is near the eastern limit of what we cover. Be realistic about the utility timeline — restoration works outward and this is a long way out. Our part does not have to wait for it. If your mast, meter base or panel is damaged, we can repair and inspect it while the line is still down so you are ready when it comes back.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Storm damage or a flooded panel in Williamsburg? A 19th-century core on the East Fork. We repair both and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami with a 19th-century core and rural property around it. The old core is the part that shapes storm repairs: the buildings are tall for their footprint and close together, so service entrances sit high on the wall and often run through the roof rather than stopping at the eaves. A limb bending a mast at a roof penetration leaves you with a wiring problem and an opening in the roof at once.',
      'That makes the flashing and the seal there part of the electrical repair rather than a roofer’s follow-up. The East Fork adds water to the low ground near it — it responds quickly to heavy rain, so flooding can coincide with the wind rather than following it — and a panel that has been submerged is replaced rather than dried out. Being well east also means restoration is commonly later here.',
    ],
    commonIntro:
      "In Williamsburg's 19th-century village core near the East Fork, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The mast on my Williamsburg house goes through the roof. Does that complicate the repair?',
        a: 'It makes the roof part of the job. Where the mast passes through, the flashing and seal belong to the service entrance, and replacing the mast without redoing them properly leaves a leak that surfaces months later. We handle the penetration. If the limb damaged the roof beyond it, that is a roofer’s work and we will say so plainly.',
      },
    ],
  },

  bethel: {
    intro:
      'Storm damage at the service on your Bethel property? Historic core, rural edges, and a long way from the core of the metro. Call (513) 586-5107.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County with a 19th-century core and rural and small-town property around it. Distance is the dominant practical factor: this is among the farthest points east we serve, restoration works outward from the metro, and the lines here are consistently late in a regional storm. Planning around that beats waiting on it.',
      'The village core has older overhead services, some original and some reworked decades ago, on buildings tall enough that the entrance sits high or passes through the roof. The rural property around it brings the well question — a good number are on private wells, where an outage takes the water too because the pump is electric. Both are worth mentioning when you call so we arrive with the right expectations and the right kit.',
    ],
    commonIntro:
      "Across Bethel's 19th-century core and the rural property around it, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'How long will I be waiting for power in Bethel after a big storm?',
        a: 'The utility side is honestly likely to be later than closer in, because restoration works outward from the metro and this is a long way out. Our part is separate. If the damage is on your own mast, meter base or panel, we can repair and inspect it while the line is still down, so you are live the moment the utility reaches the village rather than starting then.',
      },
    ],
  },

  ross: {
    intro:
      'Storm damage at the service on your Ross property? Great Miami floodplain, Butler County permits, and rural wells. Call (513) 586-5107.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami, mixing small-town and rural property. The Great Miami drains a large area upstream, which means water can reach the low ground here from rainfall well away from the storm you actually experienced — the wind passes, the sky clears, and the river rises afterwards. Panels in low levels get submerged, and submerged equipment is replaced rather than dried out.',
      'Permits and inspections go through Ross Township and Butler County rather than Hamilton County, which is worth settling before work is scheduled. On the rural properties there is also the well question: many are on private wells, and a well pump is electric, so an outage means no water as well as no lights. Long private service runs mean the damage may be out along the line rather than at the house.',
    ],
    commonIntro:
      "Across Ross's small-town and rural property along the Great Miami, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Ross property flooded a day after the storm passed. How?',
        a: 'The Great Miami drains a large area upstream, so heavy rain miles away can raise the river here after your local weather has cleared. It is why this floodplain floods on a different schedule from the storm itself. For the electrical side nothing changes: a panel that has been under water is replaced rather than dried out, whenever the water arrived.',
      },
    ],
  },

  fairfield: {
    intro:
      'Storm damage at the mast or meter base in Fairfield? A large city restored in sections, so judge by your neighbours. Call (513) 586-5107.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city with established mid-century neighborhoods, newer subdivisions, and a busy commercial corridor. Its size is the thing that changes how you should read an outage. A city this large is restored in sections, so "Fairfield has power back" is close to meaningless — one part can be fully restored while another waits, and the commercial corridor will usually be lit before either, because commercial circuits are prioritised.',
      'The window test still works, applied narrowly. Judge it by the two houses immediately either side of yours rather than the city or even the neighborhood. If they have lights and you do not, the remaining fault is on your own equipment and Duke will not reconnect to it. The housing gives two answers: mid-century streets overhead with masts to lose, newer subdivisions frequently underground with none. Permits go through Fairfield rather than the county.',
    ],
    commonIntro:
      "Across Fairfield's mid-century neighborhoods and newer subdivisions, in a city large enough to be restored in sections, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Part of Fairfield has power and part does not. How do I tell which problem I have?',
        a: 'By your immediate neighbours, not the city. Fairfield is large enough that restoration happens in sections, so another area being lit tells you nothing about your street. Lights either side of you and none in your house means the fault is on your own equipment. A whole dark block means your section has not been reached yet.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Power out in Beckett Ridge after a storm? On these planned streets it is usually the utility, not your equipment. Call (513) 586-5107.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community built around a golf course, made up largely of homes from the 1980s onward, and it is worth being straightforward about what that means for storm outages. A development planned in that era was frequently laid out with underground supply, which removes the mast and the weatherhead — the two components responsible for most storm damage to residential service. If your power is out here, a genuine utility outage is the most likely explanation.',
      'So this is a community where we regularly tell people they do not need us. What remains possible is a fault at the meter base, damage in the underground run, or surge damage in the panel from a nearby strike. And the feed into the development from the main road is often still overhead, so a tree can take out whole streets even where individual houses are underground. The mature landscaping planted with the golf course is what brings those limbs down.',
    ],
    commonIntro:
      "Across Beckett Ridge's planned streets, largely fed underground, the storm-related electrical problems we are called for most often are:",
    localFaqs: [
      {
        q: 'My whole Beckett Ridge street is dark. Do I need an electrician?',
        a: 'Almost certainly not. On streets fed underground there is no mast or weatherhead to lose, and a whole dark street points at the utility feed rather than at anyone’s own equipment. Report it and wait. Call us if your house alone is out while the neighbours have lights — that points at the meter base or the panel and is worth looking at.',
      },
    ],
  },

  wetherington: {
    intro:
      'Storm damage at the service on your Wetherington home? The surge usually costs more than the outage. Call (513) 586-5107.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community built around a golf course, with larger homes from the 1980s and 90s onward. Much of it was developed with underground supply, so the classic storm failure — a mast torn off a wall — is comparatively rare. The exposure here is different and it is inside the house rather than on it: homes this size commonly run multiple HVAC zones, finished lower levels, and a great deal of equipment on control boards.',
      'A surge from a nearby strike goes through all of it at once, and on a house of this scale that bill routinely runs to several thousand — furnace and heat pump boards, an inverter, oven controls, and assorted electronics. Whole-home surge protection at the panel is the cheapest thing we install and the one most likely to pay for itself here. It does nothing about the outage itself; it protects what the outage takes with it.',
    ],
    commonIntro:
      "Across Wetherington's larger, largely underground-fed homes, the storm-related electrical problems we handle most often are:",
    localFaqs: [
      {
        q: 'Power came back to my Wetherington house but several things did not work. What happened?',
        a: 'That is the signature of a surge rather than a service fault. A spike came through the line and took out control boards while leaving the wiring sound — furnace and heat pump boards, oven controls, and anything with a processor are the usual casualties. Worth having the panel checked too, because a surge strong enough to kill several boards sometimes damages breakers on the way through.',
      },
    ],
  },

  hamilton: {
    intro:
      'Storm damage at the service on your Hamilton home? Much of Hamilton is served by the city’s own electric utility, not Duke. Call (513) 586-5107.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s houses. The most important local fact for a storm outage has nothing to do with the housing: much of Hamilton is served by the city’s own municipal electric utility rather than by Duke Energy. That changes who you report an outage to, who restores the line, and who comes back to reconnect the meter once your repair is done.',
      'The rest works the same way regardless of which utility it is. They restore the line and the meter; the mast, weatherhead, entrance cable, meter box and panel are yours, and they will not reconnect to damaged customer-owned equipment. On the historic districts’ tall houses the entrance frequently passes through the roof, making the flashing part of our job, and the Great Miami puts water into low levels where panels sit.',
    ],
    commonIntro:
      "Across Hamilton's historic districts and its riverside streets, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Do I report a Hamilton outage to Duke Energy?',
        a: 'Check your bill first, because much of the city is served by Hamilton’s own municipal electric utility rather than Duke. Reporting to the wrong one wastes time you do not have. Whichever it is, the split is the same: they restore the line and the meter, and they will not reconnect to a damaged mast, meter box or panel until a licensed electrician has repaired it.',
      },
    ],
  },

  millville: {
    intro:
      'Storm damage at the service on your Millville property? Check which utility serves you — Hamilton’s is next door. Call (513) 586-5107.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton with older homes and rural property around it, and its position beside Hamilton raises a question worth settling before anything else. Much of Hamilton is served by the city’s own municipal electric utility rather than Duke Energy, and being immediately next to that territory means it is genuinely worth checking your bill to see who supplies you. Reporting an outage to the wrong utility costs time at the worst possible moment.',
      'Beyond that, this is rural and small-village territory. Properties set back on long private service runs mean damage can be anywhere along the line rather than at the house, and a good number are on private wells — so an outage takes the water with it, since the pump is electric. Permits and inspections go through the village or Butler County depending on the address, which we confirm before filing.',
    ],
    commonIntro:
      "Across Millville's older village homes and rural properties west of Hamilton, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Which utility do I report a Millville outage to?',
        a: 'Check your bill, because Hamilton’s municipal electric territory is immediately next door and the boundary is not obvious from a map. Reporting to the wrong utility wastes time. Once you know, the rule is unchanged: they restore the line to the meter and will not reconnect to a damaged mast, meter box or panel until a licensed electrician has repaired it and it has been inspected.',
      },
    ],
  },
};
