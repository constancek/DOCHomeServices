import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 2 — the east-side hilltops, the surrounded municipalities, and the
// first of the Northern Kentucky cities. NKY is served by Duke Energy Kentucky.
export const part2: Record<string, LocationServiceCopy> = {
  'mount-lookout': {
    intro:
      'Extensions, finished lower levels and added cooling all hang off a Mount Lookout service that predates every one of them. When it overheats and the electricity is disconnected, we repair the service, handle the permit and inspection, and coordinate the reconnect. Sometimes the right fix is a larger service.',
    relevance: [
      'Mount Lookout (ZIP 45226) is early-1900s houses and larger homes on the hilltop around Mount Lookout Square, and the disconnections we are called to here are usually about what the houses have become rather than what they were. A great many have been extended, had lower levels finished, and had kitchens and cooling added over the decades, all hanging off a service that predates every one of those additions.',
      'A service run near its ceiling for years does not fail suddenly. It degrades at the connections, and a utility technician who finds a discoloured or scorched meter socket will not re-energise it. That is the moment the underlying capacity question becomes unavoidable. Refitting the same rating puts you back where you started, which is why we price the properly sized service alongside the straight repair rather than presenting one option.',
    ],
    commonIntro:
      "In Mount Lookout's extended and improved older homes, where additions have outgrown the original service, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'We finished the lower level of our Mount Lookout house years ago. Could that be why the power was cut?',
        a: 'It can be part of it. Finishing a lower level adds circuits, lighting and often a second heating or cooling zone, and if the service was never uprated the whole house has been running closer to its limit ever since. That shows up as heat damage at the connections rather than as a tripped breaker, and heat damage is what stops a reconnection.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Clearing a power disconnection on a restored Columbia-Tusculum Painted Lady means rebuilding the service without running conduit straight across the paintwork. Owners here have spent serious money on those exteriors. We anchor the mast, seal the penetrations and place the meter base with the facade in mind.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood and is known for its restored Painted Ladies, where owners have put serious money into the exteriors. That changes what a service repair has to achieve. Clearing a disconnection means anchoring a mast, sealing where conduit passes through, and mounting a meter base — and the quick version of that job leaves fixings and conduit run straight across restored clapboard and decorative trim.',
      'So we plan the route and the fixings before starting, reuse sound existing penetrations where they exist, and seal in a way that will not lift paint in a year. The other local factor is age: these houses carry the oldest electrical histories in the city, frequently with decades of retrofits behind them. Once an inspector is examining the service to clear a tag, that history is what determines the scope rather than the single fault.',
    ],
    commonIntro:
      "In Columbia-Tusculum's restored Victorian houses, where the exterior matters as much as the wiring, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'Will clearing the disconnection on my Painted Lady damage the restored exterior?',
        a: 'It does not have to, and it is worth asking any electrician how they intend to handle it. We reuse sound existing penetrations where possible, plan the conduit so it does not cross decorative trim, and seal and flash properly rather than relying on a bead of caulk. On a restored house the finished repair should be unobtrusive from the street, and if we think that is not achievable on your wall we will say so first.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'The Mount Washington services that get disconnected are often the ones nobody touched for decades because nothing went wrong. Houses along Beechmont Avenue tend to stay with one owner a long time, so the service falls well behind current standards. We repair it and get the meter back in.',
    relevance: [
      'Mount Washington (ZIP 45230) is single-family housing running from the early 1900s through the mid-century along Beechmont Avenue, and it is settled enough that a lot of these houses have been in the same hands for a long time. That matters for disconnections in an unglamorous way: a service that has never been touched because nothing ever went wrong is exactly the service that is furthest behind current standards when someone finally looks at it.',
      'The trigger is usually external — a sale, an insurer’s survey, a utility technician replacing a meter and declining to reconnect to what they find. Grounding that predates modern requirements, a panel with known defects, or an entrance that has quietly corroded are the common findings. None of it is an emergency until it is, and then it is a red tag and a house without power.',
    ],
    commonIntro:
      "Across Mount Washington's long-held early-1900s and mid-century homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Nothing has ever gone wrong with my Mount Washington electrics. Why was the service refused?',
        a: 'Because "nothing has gone wrong" and "meets current standards" are different tests. A service can run for decades without tripping anything while having grounding that predates modern requirements, a panel model with known defects, or corrosion inside the meter base. A technician replacing a meter or an inspector clearing a tag applies the current test, not the historical one.',
      },
    ],
  },

  madisonville: {
    intro:
      'New panel, old entrance. That is the usual Madisonville power disconnection along Madison Road: a renovation replaced what was inside and left the mast and meter base outside as they were. We repair the part that was skipped and get the service past the inspector.',
    relevance: [
      'Madisonville (ZIP 45227) has seen steady reinvestment along Madison Road, and that produces a specific and very common situation. A great many of these early-1900s houses have been renovated in the last decade or two, and a renovation almost always replaces the panel inside while leaving the service entrance outside exactly as it was. The homeowner reasonably believes the electrical system is modern, because the visible part is.',
      'When the power is disconnected it is the hundred-year-old entrance above that new panel that failed, or grounding the rehab never addressed, and the utility will not reconnect to it regardless of how recent the panel is. On the newer infill houses mixed into these streets the picture is the opposite — modern service, clean documentation, and a disconnection that is usually about one specific thing rather than the whole assembly.',
    ],
    commonIntro:
      "In Madisonville's renovated older houses, where modern panels sit under original entrances, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Madisonville house was rehabbed and the panel is new. Why is the service the problem?',
        a: 'Because a rehab typically replaces the panel and leaves the entrance alone. The mast, weatherhead, cable and meter box may still be the originals from the 1910s sitting above a panel from a few years ago, and the utility will not reconnect to those. Grounding is the other thing renovations commonly skip, because it is invisible and nobody asks about it.',
      },
    ],
  },

  'pleasant-ridge': {
    intro:
      'Pleasant Ridge brick two-families usually take their service at the rear, off the alley. So the damage behind a power disconnection is invisible from the street, and both households lose power together. We repair the rear entrance and meter bank, then coordinate the reconnect with the owner and Duke.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) has a large stock of classic Cincinnati brick two-families along its tree-lined streets, and on that form the electrical service commonly comes in at the rear off the alley with a meter bank rather than at the front. Two things follow. Both households go off together when the service fails, and the damage is invisible from the street — so homeowners frequently spend a day assuming the outage is the utility’s.',
      'The other thing we find on two-families of this age is conversion work that was never permitted: a unit split, a sub-panel, circuits run to a finished attic. It passed unnoticed for years and surfaces the moment an inspector examines the service to clear a tag. That is the usual reason a Pleasant Ridge disconnection turns out to be a larger job than expected, and it is better established at the estimate.',
    ],
    commonIntro:
      "In Pleasant Ridge's brick two-families, where the service is fed from the rear alley, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'Both halves of my Pleasant Ridge two-family are off. Is that one repair?',
        a: 'Almost always. Where both units go off together and the neighbouring houses are fine, it points at the shared entrance or meter bank at the rear rather than anything inside either unit. That is one job with one permit and one inspection, which is cheaper than two owners arranging separately — and worth agreeing the cost split before the work rather than after.',
      },
    ],
  },

  westwood: {
    intro:
      'No single repair fits every Westwood power disconnection. Near the Town Hall the service may be a century-old entrance, while a few streets over off Harrison Avenue it is a mid-century assembly that was adequate in 1955. We look at the service before we quote replacement or repair.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, and the housing ranges from historic homes near the Town Hall out to street after street of early-1900s and mid-century houses. That range means there is no single Westwood answer to a disconnection — the service on one street may be a century-old entrance, and a few streets over a mid-century assembly that was adequate in 1955.',
      'What is consistent is the reason we are usually called: not sudden failure but accumulated wear on equipment nobody had reason to look at. Corrosion inside a meter base, heat damage from years near capacity, grounding that predates modern requirements. A technician replacing a meter or an inspector clearing a tag applies today’s standard, and that is where a long-serviceable installation stops being acceptable.',
    ],
    commonIntro:
      "Across Westwood's historic and mid-century homes, on services of very different vintages, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'How do I know whether my Westwood service needs replacing or just repairing?',
        a: 'It comes down to whether the rest of the assembly is sound once the obvious fault is dealt with. On an entrance with corrosion inside the meter base, or a panel with no capacity left, a targeted repair puts you back in the same position before long. We price both and explain which parts are genuinely worn rather than only broken, so the choice is yours rather than ours.',
      },
    ],
  },

  norwood: {
    intro:
      'Norwood is its own city, so clearing an electricity disconnection here needs a Norwood permit and Norwood’s inspector, not Cincinnati’s. Filing in the wrong place costs a day without power. We file with Norwood the first time and repair the service in its dense early-1900s homes and two-families.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, and for a disconnection that is the first practical fact. Electrical permits and inspections go through Norwood rather than Cincinnati, on Norwood’s own schedule with Norwood’s own inspector. An electrician who works mostly downtown and files out of habit will cost you a day, and the utility will be waiting for that sign-off before reconnecting.',
      'The housing is dense early-1900s homes and brick two-families on small lots from the streetcar and factory era. Small lots mean the service sits in a narrow gap where there is barely room to work, and two-families mean a meter bank serving more than one household. Conversion work done over the decades without permits is common here too, and it surfaces once an inspector is examining the service rather than before.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and two-families, on the city's own permit schedule, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Does it matter that Norwood is a separate city from Cincinnati?',
        a: 'For this repair it matters quite a bit. The permit and inspection go through Norwood rather than Cincinnati, on Norwood’s own schedule with its own inspector, and the utility will look for that sign-off before reconnecting. Ask any electrician whether they have pulled Norwood permits before. The upside is that a smaller municipal queue often moves faster than the city’s.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'On Blue Ash’s mid-century streets, a power disconnection usually means an original 1960s service now carrying central air and a finished basement. Heat damage at the connections is the usual reason a technician will not reconnect. The newer subdivisions in Blue Ash fail for different reasons, so we check first.',
    relevance: [
      'Blue Ash (ZIP 45242) is established mid-century neighborhoods alongside newer subdivisions, and the two behave differently when the power is cut. On the mid-century streets the service is frequently original — sized for a 1960s house and now carrying central air, a finished basement and possibly a car charger — and heat damage at the connections is the usual reason a technician declines to reconnect.',
      'The newer subdivisions are a different case. Those houses have modern panels, adequate capacity and clean documentation, so a disconnection there is usually about something specific rather than the whole service: a damaged meter base, a fault found during work, or an inspection on a property that has stood empty. Permits and inspections go through Blue Ash rather than the county, which is worth confirming before anything is filed.',
    ],
    commonIntro:
      "Across Blue Ash's mid-century streets and newer subdivisions, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Blue Ash house is from the 1960s and still on its original service. Should I upgrade while it is off?',
        a: 'Usually, yes. The expensive parts of this job are the labour, the permit and the inspection, and you pay those whether we refit the original capacity or install a properly sized service. On a house that now runs central air, a heat pump or an EV charger, putting 1960s capacity back means paying that set of costs again in a few years. We quote both.',
      },
    ],
  },

  montgomery: {
    intro:
      'Inside Montgomery’s historic district, the service mast, conduit and meter box count as regulated exterior. Rebuilding them in the same position after a power disconnection is normally straightforward. Moving them takes more approval, so we raise that before the work starts on any home in the district.',
    relevance: [
      'Montgomery (ZIP 45242) has a preserved historic district of 19th-century buildings at its core, with established and newer neighborhoods around it, and that designation is worth raising before work starts. In a designated district the visible exterior is regulated — and a service mast, its conduit and the meter box are all visible exterior. Rebuilding in the same position and form is normally straightforward; changing how the service looks from the street can involve more than an electrical permit.',
      'Outside the core the answer varies with the age of the street: older overhead services with decades of accumulated wear, and newer sections with modern panels and clean paperwork. Permits and inspections are Montgomery’s own rather than the county’s. We establish which situation your address is in, and whether the historic district applies, before quoting.',
    ],
    commonIntro:
      "Across Montgomery's historic core and the established streets around it, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My house is in the Montgomery historic district. Will that delay getting the power back?',
        a: 'It can add a step, so it is better known at the start. Putting the service back in the same position and form is normally the simplest route, since the exterior does not change. Where the old arrangement has to change, or a properly sized modern service would look different from the street, there may be more to agree than an electrical permit. We flag it at the estimate rather than mid-job.',
      },
    ],
  },

  madeira: {
    intro:
      'The repair after a power disconnection in Madeira usually takes a day. What decides how long the power stays off is the small city building department’s inspection queue, so we pull the Madeira permit and line up the inspector at the same time as we line up the work.',
    relevance: [
      'Madeira (ZIP 45243) is largely mid-century single-family housing, and it is a small city with a correspondingly small building department. That is the local factor that actually decides how long a disconnection lasts here. The electrical work on a service is usually a day. The inspection has to fit into the schedule of a compact municipal department, and that is where the time goes.',
      'So we pull the Madeira permit and book the inspection alongside scheduling the work rather than once it is finished — the single thing that most shortens the wait. The services themselves are what you would expect of the era: many still original, sized for mid-century loads, now carrying whatever has been added since. Where that has been running near the limit for years, heat damage at the connections is the usual finding.',
    ],
    commonIntro:
      "Across Madeira's mid-century homes, where the inspection queue is small, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'How long will it take to get my Madeira power back on?',
        a: 'The electrical work is usually a single day. What varies is the inspection, because Madeira is a small city with a compact building department. That is why we book it alongside the work rather than after. If someone quotes you a day start to finish without mentioning the inspection, ask how they plan to handle it.',
      },
    ],
  },

  wyoming: {
    intro:
      'Replacing the service mast on a tall Wyoming Victorian after a power disconnection often means opening the roof, because the mast runs up through it. We do the flashing as part of the electrical work, not as a roofer’s follow-up, and reseal the penetration before the inspector arrives.',
    relevance: [
      'Wyoming (ZIP 45215) is grand Victorian and early-1900s houses on established streets, and they are tall enough that the service mast frequently runs up through the roof rather than stopping at a wall. That changes the repair when a disconnection has to be cleared: replacing the mast means opening and resealing a roof penetration, and the flashing there is part of the electrical work rather than a roofer’s follow-up.',
      'The other Wyoming factor is what these houses draw. Large old homes with multiple heating zones, finished lower levels and modern kitchens sit on services that were generous a century ago. Run near the limit for years, they degrade at the connections, and heat damage at a meter socket is what a technician refuses to re-energise. Wyoming is its own city, so the permit and inspection go through Wyoming rather than the county.',
    ],
    commonIntro:
      "In Wyoming's tall Victorian and early-1900s houses, where the mast often passes through the roof, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'The mast on my Wyoming house goes through the roof. Who deals with that part?',
        a: 'We do, as part of the job. Where the mast passes through the roof, the flashing and seal belong to the service entrance, and replacing the mast without redoing them properly leaves a leak that appears months later. If the roof is damaged more widely than the penetration, that is a roofer’s work and we will say so plainly.',
      },
    ],
  },

  mariemont: {
    intro:
      'Mariemont is a National Historic Landmark village, the strictest setting we work in around Cincinnati. Clearing an electricity disconnection on one of its 1920s Tudor Revival homes means satisfying the inspector on safety and the village on how the mast and meter box look. We plan for both.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned 1920s garden community and a National Historic Landmark, and the designation covers the village rather than one district. It is the strictest setting we work in around Cincinnati. A service mast, its conduit and the meter box are all visible exterior, so clearing a disconnection here means satisfying the inspector on safety and the village on appearance.',
      'The architecture makes it harder. Tudor Revival means steep pitches, half-timbering, stucco and brick — none of which takes a service mast the way a flat clapboard wall does. Anchoring properly and sealing where conduit meets it is slower and needs more care. The houses are also close to a century old, so the services carry a long history of retrofits, and once an inspector is examining one to clear a tag that history determines the scope.',
    ],
    commonIntro:
      "In Mariemont's 1920s Tudor Revival homes, inside a National Historic Landmark village, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Mariemont is a National Historic Landmark. Will that hold up getting my power back?',
        a: 'It can add a step, so it is worth knowing at the start rather than mid-job. Putting the service back in the same position and form is normally the cleanest route because the exterior does not change. Where the old arrangement is gone, or a properly sized modern service would look different from the street, there may be more to agree than an electrical permit.',
      },
    ],
  },

  cheviot: {
    intro:
      'Some Cheviot meters sit in a gap between houses barely wide enough to stand in. That makes a power disconnection repair slower than on an open lot, and the permit is filed with Cheviot, which is its own city. We quote the work with both of those in mind.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city surrounded by Cincinnati, in a grid of early-1900s homes and brick two-families along Harrison Avenue. The constraint here is space: the gap between one house and the next is often barely wide enough to stand in, and that is exactly where the meter and service entrance sit. Assessing and repairing a service in a gap that narrow takes longer than the same job on an open lot.',
      'Being its own city means the permit and inspection go through Cheviot rather than Cincinnati, on Cheviot’s own schedule. Filing with the wrong authority does not fail an inspection — it means waiting while the paperwork is redone, and the utility will not reconnect without the sign-off. On the two-families, one entrance commonly feeds a meter bank, so both households go off together and the building owner has to authorise the work.',
    ],
    commonIntro:
      "In Cheviot's tightly packed early-1900s homes and brick two-families, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'The meter on my Cheviot two-family is in the gap between houses. Does that slow the repair?',
        a: 'It makes it slower rather than harder. There is often not enough room for a ladder at the angle we want, so the setup takes longer, and occasionally we need access from the neighbouring property. Worth mentioning when you call so it is scheduled with enough time. It should not change the quality of the repair — the inspector will still be looking at the anchoring and sealing.',
      },
    ],
  },

  covedale: {
    intro:
      'The Cincinnati and Green Township line runs through Covedale, and the permit to clear a power disconnection follows the address. So the first step on any Covedale job is confirming which side your house sits on. Then we repair the service on its older or mid-century assembly.',
    relevance: [
      'Covedale (ZIP 45238) sits where Cincinnati meets Green Township along Glenway and Cleves Warsaw, and that boundary runs through the neighborhood rather than around it. For a disconnection it is the first thing to establish, because the permit and inspection follow the address. Two houses a few hundred feet apart on the same road can answer to different authorities, and filing with the wrong one means waiting while it is redone.',
      'The housing is early-1900s through mid-century single-family, so the services range from original entrances well past their intended life to mid-century equipment sized for mid-century loads. Neither is unusual for the west side. What is specific to Covedale is checking which side of the line you are on before anything is submitted, because the utility will not reconnect until the correct authority has signed off.',
    ],
    commonIntro:
      "Across Covedale's older and mid-century homes, on either side of the city and township line, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'How do I know whether my Covedale address is city or township for the permit?',
        a: 'We check it before filing, and it genuinely needs checking here. The boundary with Green Township runs through this area rather than neatly around it, so neighbouring streets can answer to different authorities. Getting it wrong usually means the permit goes back and you wait while it is refiled — a day you cannot spare when the house has no power.',
      },
    ],
  },

  covington: {
    intro:
      'Covington runs on Duke Energy Kentucky, a separate company from Duke Energy Ohio, regulated by the Kentucky Public Service Commission. Ohio advice about a power disconnection does not all carry across the river. We repair the service on its 19th-century rowhouses and work with the Kentucky side on reconnection.',
    relevance: [
      'Covington (ZIP 41011) sits across the Ohio from downtown Cincinnati, and the first thing to know has nothing to do with the housing: Northern Kentucky is served by Duke Energy Kentucky, a separate operating company from Duke Energy Ohio, with its own crews and its own scheduling, and the regulator is the Kentucky Public Service Commission rather than Ohio’s PUCO. Ohio-focused advice about disconnections does not all carry across the river.',
      'What does carry across is the ownership split and the process. On the 19th-century rowhouses in MainStrasse and Licking Riverside the service entrance is frequently on a party wall with a meter bank, so a disconnection affects more than one household and the equipment belongs to whoever owns that wall. Sitting low near two rivers adds the other common cause: a panel that has been under water is replaced rather than dried out.',
    ],
    commonIntro:
      "In Covington's 19th-century rowhouses on low ground near two rivers, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Is my Covington disconnection handled by the same Duke as Cincinnati?',
        a: 'Not quite. Northern Kentucky is served by Duke Energy Kentucky, a separate entity from Duke Energy Ohio with its own crews and scheduling, and complaints go to the Kentucky Public Service Commission rather than Ohio’s PUCO. The rule that affects you is the same either side of the river: they will not reconnect to a damaged or red-tagged service until a licensed electrician has repaired it and it has been inspected.',
      },
    ],
  },

  newport: {
    intro:
      'Houses in Newport’s East Row Historic District stand shoulder to shoulder, and many share a service on a party wall or at the rear. After a power disconnection, the equipment belongs to whoever owns that wall. We repair it, and Duke Energy Kentucky reconnects once the inspector signs off.',
    relevance: [
      'Newport (ZIP 41071) holds the East Row Historic District, hundreds of 19th-century houses standing shoulder to shoulder, and that form shapes every service repair here. Where houses share party walls the entrance is commonly mounted on the shared wall or fed from the rear, several meters sit together, and the equipment belongs to whoever owns that wall rather than to whoever noticed the power was off.',
      'A district of that size also means a great deal of protected exterior, so what the repair looks like from the street is a real constraint. And these are among the oldest electrical installations in Northern Kentucky, carrying decades of retrofits — which is what an inspector examines once they are clearing a tag. The utility throughout is Duke Energy Kentucky rather than Duke Energy Ohio.',
    ],
    commonIntro:
      "In Newport's East Row Victorians, where party walls carry the service, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My East Row house shares a wall and a meter bank with next door. Whose repair is it?',
        a: 'It depends on the deed and how the service is arranged, which is why we establish it before quoting. Where one entrance and one bank feed both houses the equipment is generally shared and so is the cost — one repair, one permit, one inspection rather than two of each. Agreeing the split with your neighbour early is worth more than it sounds, because the delay is usually that conversation.',
      },
    ],
  },

  bellevue: {
    intro:
      'Drying out a flooded Bellevue panel does not work. Water gets behind the bus bars and corrosion continues after it looks dry, so after a power disconnection the panel is replaced before Duke Energy Kentucky reconnects. We handle the replacement and inspection on these close-set late-1800s homes.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact river city of well-preserved late-1800s houses on narrow lots, sitting low against the Ohio. That low position is the recurring cause of disconnections here. Where water has reached a basement panel the utility will not re-energise it, and drying it out is not an option — water gets behind the bus bars and into the breakers, and corrosion continues long after everything looks dry.',
      'An inspector will be looking specifically for signs of submersion before the meter goes back in, so the outcome on a flooded panel is settled before the argument starts. The houses themselves add the second factor: tall for their footprint, close together, with entrances high on the wall and long electrical histories behind them. The utility is Duke Energy Kentucky, with its own crews and scheduling.',
    ],
    commonIntro:
      "In Bellevue's close-set late-1800s homes on low ground, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Bellevue panel was under water. Can it be dried and re-approved?',
        a: 'No, and anyone offering to try is doing you a disservice. Water reaches the breakers and the bus behind the panel face, and corrosion continues after the surface dries. Submerged panels are replaced, and an inspector will look for the signs before Duke Energy Kentucky reconnects. If yours sits low and this has happened before, ask whether relocating it higher is practical while we are there.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Fort Thomas houses above the river are large, and their services were sized when a house asked far less of them. Years near the limit wear the connections until the electricity is disconnected, even when nothing obviously broke. We repair the service and handle the inspection and reconnect.',
    relevance: [
      'Fort Thomas (ZIP 41075) is stately early-1900s houses on tree-lined streets above the river, built around a former Army post, and the houses are large. Multiple heating zones, finished lower levels, modern kitchens and often car charging, all on services that were sized when a house asked far less. That is the recurring cause of disconnections here, and it fails gradually rather than suddenly.',
      'A service run near its ceiling for years degrades at the connections, and a utility technician who finds a scorched meter socket will not reconnect to it. On these houses the entrance also sits high on the wall or passes through the roof, which makes the flashing part of the electrical repair. The utility is Duke Energy Kentucky rather than Duke Energy Ohio, with its own scheduling for the reconnect.',
    ],
    commonIntro:
      "In Fort Thomas' large early-1900s homes, where modern loads sit on older services, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Why would my Fort Thomas service be refused when nothing actually broke?',
        a: 'Heat damage is the usual answer. A service running near its limit for years degrades at the connections, and a technician who finds a discoloured or scorched meter socket will not re-energise it. Nothing dramatic happened; it wore out under load. That is why the repair should address capacity rather than only replacing the damaged part.',
      },
    ],
  },

  florence: {
    intro:
      'Two Florence houses a mile apart can have completely different power disconnections. On the mid-century streets it is usually an original entrance, while the newer Boone County subdivisions tend to have one specific fault. We find which you have, and Duke Energy Kentucky reconnects once it is fixed.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and has grown fast, which means the housing spans a wider range of service ages than almost anywhere we work — mid-century neighborhoods with original entrances alongside subdivisions built recently enough to have modern panels and clean paperwork. Two houses a mile apart present entirely different disconnections.',
      'On the mid-century streets the cause is usually accumulated wear: heat damage at the connections, grounding that predates current requirements, a panel with nothing left in it. On the newer streets a disconnection is more often something specific — a damaged meter base, a fault found during other work, or an inspection on a property that has stood empty. Permits go through Boone County and the city rather than any Ohio authority, and the utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Florence's mid-century streets and newer subdivisions in Boone County, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Does it matter that Florence is in Boone County for the permit?',
        a: 'Yes. Permits and inspections go through Boone County and the city rather than any Hamilton County or Cincinnati office, and the utility is Duke Energy Kentucky rather than Duke Energy Ohio. Both are worth confirming before work is booked, because the utility looks for the correct sign-off before reconnecting and a misfiled permit just means waiting.',
      },
    ],
  },

  erlanger: {
    intro:
      'Most Erlanger services near the airport went in with the house and were never replaced. Sixty or a hundred amps does not carry central air and a modern kitchen for decades without heat damage at the meter socket, the most common cause of a power disconnection we see here.',
    relevance: [
      'Erlanger (ZIP 41018) is settled mid-century housing in Kenton County near the airport, and the services here are largely of one era — installed when the houses went up and, in a great many cases, never replaced since. Sixty or a hundred amps was ample then. It is not ample for central air, a finished lower level and a modern kitchen, and a service carrying that for decades shows it at the connections rather than at the breakers.',
      'Heat damage at the meter socket is what stops a reconnection, and it is the most common finding we deal with in this city. Erlanger also shares its ZIP with Elsmere, which is a separate city with its own permit office — so the filing follows the address rather than the postal code. The utility is Duke Energy Kentucky, with its own crews and reconnect scheduling.',
    ],
    commonIntro:
      "Across Erlanger's mid-century homes on largely original services, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 41018 — is that Erlanger for the permit?',
        a: 'Not necessarily. ZIP 41018 covers both Erlanger and Elsmere, and they are separate cities with separate permit offices, so the filing follows your actual address rather than the postal code. We confirm it before submitting anything. Getting it wrong means the paperwork comes back and you wait while it is refiled.',
      },
    ],
  },
};
