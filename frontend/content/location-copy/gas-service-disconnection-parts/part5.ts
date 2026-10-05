import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 5 — the villages and cities ringing Cincinnati plus the Anderson,
// Sycamore, Colerain and Green township communities. Themes: river-bottom
// flooding, shared systems in mixed-use and attached housing, historic-district
// exterior rules, and which of several authorities in one ZIP issues the permit.
export const part5: Record<string, LocationServiceCopy> = {
  newtown: {
    intro:
      'Gas shut off in Newtown? Little Miami flooding puts appliance controls under water. Call (513) 586-5107.',
    relevance: [
      'Newtown (ZIP 45244) is a village on the Little Miami River east of the city, and the river is the recurring reason gas goes off here. Where a furnace, boiler or water heater has been submerged, the gas control valve and burner controls are replaced rather than dried out and relit — water damages them internally and they can fail closed or, worse, fail to shut when they should.',
      'Because this is not a once-a-decade event on the low ground, plenty of properties are on their second or third water heater in the same spot. The question worth asking during a replacement is whether the appliance can be raised. Venting is the constraint — a unit can only go so high before the flue run stops working properly — but where a platform above the historic water line is achievable, the cycle ends. Newtown is its own village, so permits and inspections go through Newtown rather than the county.',
    ],
    commonIntro:
      "In Newtown's riverside streets along the Little Miami, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Newtown furnace was under water but it still lit. Is it safe?',
        a: 'No, and lighting it is the part to stop doing. A submerged gas control valve can work today and fail unsafely later, because the damage is internal corrosion with nothing visible outside. The control is replaced rather than dried out. On some units that means a new appliance rather than a part, and we will tell you which before ordering anything.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Gas shut off in Turpin Hills? Anderson Township issues the permit, not the city. Call (513) 586-5107.',
    relevance: [
      'Turpin Hills (ZIP 45244) is an established Anderson Township community of mid-century single-family homes, and the first thing to settle on a shutoff is where the paperwork goes: permits and inspections are Anderson Township’s and Hamilton County’s rather than the city of Cincinnati’s. ZIP 45244 also covers Newtown, which is a separate village with its own office — so the ZIP does not tell you the authority, the address does.',
      'The housing is largely of one era, which makes the findings predictable. Original black iron installed with the houses, now feeding a furnace, water heater and range that have all been replaced once or twice since. That makes the sizing question worth checking alongside the leak question, because a run adequate for the appliances of 1960 may not supply a modern furnace and a tankless heater drawing together.',
    ],
    commonIntro:
      "Across Turpin Hills' mid-century homes in Anderson Township, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is a Turpin Hills gas permit the same as a Newtown one? We share a ZIP.',
        a: 'No. Turpin Hills is unincorporated Anderson Township, and Newtown is a separate village issuing its own permits, even though both are in 45244. The ZIP is a postal boundary and has nothing to do with which office signs off. Filing in the wrong place means a delay while it is redone, not a failed inspection.',
      },
    ],
  },

  silverton: {
    intro:
      'Gas shut off in Silverton? Older housing means capped lines from appliances long gone. Call (513) 586-5107.',
    relevance: [
      'Silverton (ZIP 45236) is its own city along Montgomery Road, built out in older early- and mid-1900s housing, and the systems here carry a century of alterations. Every time an appliance was removed — a space heater, a dryer moved to electric, a decommissioned boiler — the line was usually capped where it was rather than taken back to the source, and those stubs are still connected.',
      'A pressure test tests all of them at once, which is why a test can fail with every appliance in the house working perfectly. Finding the one that has begun to weep means isolating sections rather than opening walls speculatively. Silverton issues its own permits and inspections, on a small municipal schedule that is often quicker than the city’s.',
    ],
    commonIntro:
      "Across Silverton's early- and mid-1900s housing along Montgomery Road, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Every appliance in my Silverton house works. How did the gas test fail?',
        a: 'Because the test covers the pipe, not the appliances. Older houses accumulate capped stubs wherever something was removed over the decades, and those are still part of the system. A cap that held for years can start to weep without anything in the house behaving differently. We isolate sections to locate it rather than opening plaster on a guess.',
      },
    ],
  },

  lockland: {
    intro:
      'Gas shut off in Lockland? A very small village on low Mill Creek ground. Call (513) 586-5107.',
    relevance: [
      'Lockland (ZIP 45215) is a small, densely built village on the low ground of the Mill Creek valley beside the rail and industrial corridor, with housing that is old and closely spaced. Water reaches gas appliances here more often than in most of the county, and where a furnace or water heater has been submerged, the control valve is replaced rather than dried out.',
      'Lockland issues its own permits and inspections, and being this small means minimal capacity — which is what usually determines how quickly gas comes back, not the plumbing. Because the housing is uniformly low and packed together, several neighbouring properties tend to need the same work after the same flooding, and handling them together saves days in a queue with very little slack in it.',
    ],
    commonIntro:
      "In Lockland's closely spaced older housing on low Mill Creek ground, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'How long will it take to get gas back in Lockland?',
        a: 'The testing and repair are often a single day. The variable is the inspection, because Lockland is a very small village with limited capacity, and then the utility’s reconnect visit after the sign-off. That is why we file and book the inspection when the work is scheduled rather than once it is finished.',
      },
    ],
  },

  groesbeck: {
    intro:
      'Gas shut off at your Groesbeck home? Colerain Township issues the permit. Call (513) 586-5107.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community of largely mid-century single-family homes, and the jurisdiction is worth stating because it catches out contractors who work mostly in town: permits and inspections go through Colerain Township and Hamilton County, not the city. The utility waits on the correct sign-off, so a filing sent to the wrong office costs you days.',
      'The housing went up over a comparable period and was piped the same way, so the systems have aged at a similar rate. That is useful information rather than a warning: it does not mean yours is failing, only that if something does stop a reconnection, a section replacement is a more likely remedy here than a patch on one joint.',
    ],
    commonIntro:
      "Across Groesbeck's mid-century homes in Colerain Township, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Does a Groesbeck job need a Cincinnati permit?',
        a: 'No. Groesbeck is in Colerain Township, so the permit and inspection go through the township and Hamilton County. It is a common mix-up, and it is worth asking any plumber whether they have pulled permits in Colerain specifically, because the cost of getting it wrong is a delay rather than anything wrong with the work.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Gas shut off in Mount Healthy? Historic-district streets add exterior rules. Call (513) 586-5107.',
    relevance: [
      'Mount Healthy (ZIP 45231) is one of the oldest settlements in the county, founded in the 1810s, and its core along Hamilton Avenue carries historic-district designation. For most gas work that changes nothing — testing, repairing and inspecting an interior system is the same job here as anywhere. Where it does matter is anything visible from the street, particularly relocating a meter or running new pipe on an exterior wall.',
      'That is worth establishing before work is planned rather than after a design has been agreed, because a route that is fine on one street may need a different approach a few doors down. Mount Healthy is its own city and issues its own permits and inspections. The housing runs from genuinely old to mid-century, so the piping varies street to street and a pressure test is what tells us what we actually have.',
    ],
    commonIntro:
      "Across Mount Healthy's historic core and its mid-century streets, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Will historic-district rules hold up my Mount Healthy gas repair?',
        a: 'Not for interior work — testing, repairing and inspecting the system inside the house is a normal job. The designation matters for anything visible from the street, so a meter relocation or an exterior pipe run needs checking before it is designed. We establish which applies to your address at the start rather than after a route is agreed.',
      },
    ],
  },

  reading: {
    intro:
      'Gas shut off in Reading? Apartments above storefronts often share one system. Call (513) 586-5107.',
    relevance: [
      'Reading (ZIP 45215) is its own city, and alongside its residential streets it has a genuine main-street building stock — the Benson Street bridal shops and the older commercial blocks around them, with apartments above the storefronts. Where one gas system serves both the business below and the flats above, a shutoff takes out all of it and the pressure test covers the whole building.',
      'That makes the job the building owner’s to authorise rather than any one tenant’s, and it usually means restoring everything together on one permit and one inspection — cheaper and faster than doing it unit by unit, but slower to start. On the residential streets the picture is the ordinary one for older housing: original piping altered in stages, with capped stubs left from appliances long removed.',
    ],
    commonIntro:
      "Across Reading's older houses and its mixed-use blocks with flats above the shops, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'The shop below my Reading apartment lost gas too. Are those separate jobs?',
        a: 'Usually not. In these mixed-use buildings one gas system commonly serves the whole building, so a pressure test covers all of it and everything comes back together. That is cheaper than separate jobs, but it needs the building owner to authorise the work, which is normally what holds things up rather than the plumbing.',
      },
    ],
  },

  dent: {
    intro:
      'Gas shut off at your Dent home? Piping here is black iron or CSST, not both. Call (513) 586-5107.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community spanning mid-century housing and much newer subdivisions, and which era your house belongs to changes the likely finding. On the older streets the piping is rigid black iron installed with the house, and what a pressure test turns up is leaks at aged joints and capped stubs from appliances removed decades ago.',
      'On the newer streets the piping is often CSST — flexible tubing with a yellow jacket — where the usual inspection issue is bonding to the electrical grounding system rather than a leak at all. Those are not comparable pieces of work, so we establish which you have before quoting. Permits and inspections go through Green Township and Hamilton County rather than the city.',
    ],
    commonIntro:
      "Across Dent's mid-century and newer homes in Green Township, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'What is CSST bonding and why would it stop my Dent gas coming back on?',
        a: 'CSST is the flexible yellow-jacketed gas tubing used in newer houses, and it has to be bonded to the electrical grounding system so a nearby lightning strike cannot arc through the tubing wall. It is one of the more common findings on a gas inspection here, it is usually a straightforward correction, and it has to be right before the sign-off.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Gas shut off in Deer Park? Modest homes on genuinely small original piping. Call (513) 586-5107.',
    relevance: [
      'Deer Park (ZIP 45236) is a small city of compact mid-century homes, and modest describes the gas system as much as the houses. These were piped for a heater and a cooker, and a great many runs are close to what was originally installed — which was adequate then and is a real question now.',
      'Where a house has since gained a modern furnace, a water heater and a gas range, a shutoff raises two separate diagnoses: whether there is a leak, and whether the run can deliver what everything drawing at once demands. A system can hold pressure perfectly and still be too small. They need different repairs, and telling them apart means measuring at the appliances rather than assuming. Deer Park issues its own permits and inspections.',
    ],
    commonIntro:
      "Across Deer Park's compact mid-century homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is my Deer Park problem a leak or piping that is too small?',
        a: 'The pressure test answers the leak question — the system either holds or it does not. Sizing is a separate measurement taken at the appliances with several running at once. Plenty of houses here pass the test and still cannot supply everything they have been asked to run, and the fix for that is upsizing the run rather than chasing a fault.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Gas shut off in Terrace Park? Large older homes with extensive gas systems. Call (513) 586-5107.',
    relevance: [
      'Terrace Park (ZIP 45174) is a village of large older homes on wooded lots between Wooster Pike and the Little Miami, and houses of this scale carry more gas system than a modest house does — two heating zones in some, a water heater, a range, fireplaces added at various points, sometimes a supply to a garage or outbuilding. A pressure test covers every branch together, so diagnosing a shutoff here takes longer simply because there is more to isolate.',
      'The river bottoms are the other factor. On the low ground toward the Little Miami, submerged appliance controls are a recurring cause and they are replaced rather than dried out. Terrace Park is its own village with its own permits and inspections, and it has one ZIP to itself, which at least removes the jurisdiction guesswork.',
    ],
    commonIntro:
      "In Terrace Park's large older homes, some on the low ground toward the Little Miami, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Why does testing my Terrace Park house take longer than my old place did?',
        a: 'There is more system to test. Houses this size often have two heating zones, several fireplaces added over the years and sometimes a run out to a garage, and each is a branch with joints and a valve. Finding which one is failing means isolating and testing in sections rather than looking at one obvious suspect.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Gas shut off in Dry Run? Newer subdivisions here mean CSST and bonding. Call (513) 586-5107.',
    relevance: [
      'Dry Run (ZIP 45244) is one of Anderson Township’s newer areas, largely subdivision housing from the 1990s onward, and the gas piping reflects that. Rather than the rigid black iron of the older neighborhoods, these houses are commonly run in CSST — flexible tubing with a yellow jacket — and the issue that most often shows up on inspection is bonding to the electrical grounding system rather than a leak.',
      'That bond exists so a nearby lightning strike cannot arc through the tubing wall, and where it is missing or has been disturbed by later work, it has to be corrected before a sign-off. It is a smaller job than repiping, which is worth knowing before you assume the worst. Permits and inspections go through Anderson Township and Hamilton County, not the city.',
    ],
    commonIntro:
      "Across Dry Run's newer Anderson Township subdivisions, mostly piped in CSST, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Our Dry Run house is barely thirty years old. Why is there a gas problem at all?',
        a: 'Age is not the only cause. On houses of this era the finding is usually a CSST bonding issue, an appliance connector that has been disturbed by later work, or an addition piped in without a permit. None of those are about worn-out pipe, and most are a smaller correction than people expect when the gas goes off.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Gas shut off at your White Oak home? A red-tagged furnace can widen the job. Call (513) 586-5107.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community of largely mid-century single-family homes, and the most common route to a shutoff here is an appliance rather than the pipe. A furnace with a cracked heat exchanger or a water heater with a failed control gets red-tagged, and the gas stays off until it is corrected.',
      'Where the piping is sound, that is a contained job — replace the appliance, pass the test, get it inspected. Where an original system had been quietly masked by the appliance failure, the pressure test finds it and the scope grows. That is why we test before quoting rather than after: one number is more useful than a revision partway through. Permits go through Green Township and Hamilton County.',
    ],
    commonIntro:
      "Across White Oak's mid-century Green Township homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My White Oak furnace was red-tagged. Is that the whole problem?',
        a: 'Usually, and the pressure test confirms it. Where the piping holds, replacing the appliance and passing the test clears the shutoff. Occasionally the test finds a piping fault the appliance failure had been masking, which grows the job — so we test first and quote once rather than starting work and coming back with a revised figure.',
      },
    ],
  },

  forestville: {
    intro:
      'Gas shut off in Forestville? Water heater age drives most shutoffs here. Call (513) 586-5107.',
    relevance: [
      'Forestville (ZIP 45230) is an established Anderson Township community of mid-century and newer single-family homes, and what most often takes the gas off is a water heater that has reached the end of its life. A failed gas control or a leaking tank gets the appliance condemned, and service stays off until it is replaced and the system passes a test.',
      'On a house where the piping is sound that is a contained day’s work. Worth knowing is that a water heater rarely fails alone in a house of one build era — the furnace was often installed at the same time, and if it is the same age it is worth looking at while we are there rather than paying for a second visit in six months. Permits and inspections go through Anderson Township and Hamilton County.',
    ],
    commonIntro:
      "Across Forestville's mid-century and newer Anderson Township homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Should I replace the Forestville furnace at the same time as the water heater?',
        a: 'Only if it is genuinely near the end, and we will tell you honestly which. In houses built in one go the two were often installed together, so if the heater has failed at twenty years the furnace is the same age. If the furnace has years left, replacing it now buys you nothing and we would rather say so than sell it.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Gas shut off in Cherry Grove? Capped lines from removed appliances fail tests. Call (513) 586-5107.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a mid-century Anderson Township community of single-family homes, and the systems have been altered enough over sixty years to accumulate loose ends. A gas dryer swapped for electric, a decommissioned space heater, a fireplace log set removed during a remodel — each usually left a capped stub rather than a line taken back to the source.',
      'Those stubs are still on the system a pressure test covers, so a house where nothing has changed in years can fail a test on a cap installed in 1978. Locating one means isolating sections in sequence rather than opening walls on a hunch, and it is often the whole job on a house where the appliances are all fine. Permits go through Anderson Township and Hamilton County.',
    ],
    commonIntro:
      "Across Cherry Grove's mid-century Anderson Township homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'We took the gas dryer out of our Cherry Grove house years ago. Could that be it?',
        a: 'It is one of the first places we look. A removed appliance usually leaves a capped stub rather than a line taken back to the source, and a cap that held for decades can start to weep. Nothing in the house behaves differently, which is why it surprises people when the test fails — and it is generally a small repair once located.',
      },
    ],
  },

  kenwood: {
    intro:
      'Gas shut off in Kenwood? On a condo the association authorises the work. Call (513) 586-5107.',
    relevance: [
      'Kenwood (ZIP 45236) mixes mid-century single-family homes with a good deal of condominium and multi-unit housing around the retail core, and on the condos the ownership question comes before the plumbing question. Piping inside your unit is generally yours; the risers and common runs feeding several units are the association’s, and a resident cannot start work on those by calling a plumber.',
      'Where one system serves several units, a pressure test covers all of it and every household is off until it passes — restored together on one permit and one inspection, which is cheaper than piecemeal but needs the association to act. Kenwood is unincorporated Sycamore Township, so permits and inspections go through the township and Hamilton County. ZIP 45236 also covers Silverton and Deer Park, which are separate cities with their own offices.',
    ],
    commonIntro:
      "Across Kenwood's mid-century homes and its condominium buildings, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Who pays for gas repairs in my Kenwood condo?',
        a: 'It depends where the fault is, and the declaration governs it rather than we do. Piping inside your unit is normally yours; risers and shared runs are usually the association’s. We can tell you which side of that line the fault falls on after testing, which is generally what the association needs before it will authorise anything.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Gas shut off in Lincoln Heights? Older appliances, and honest repair-or-replace advice. Call (513) 586-5107.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a small village in the Mill Creek corridor, incorporated in 1946 as one of the first self-governing Black communities north of the Ohio River, with modest older housing on a compact grid. The gas shutoffs we are called for here are mostly appliance-driven: a furnace or water heater well past its expected life gets red-tagged, and service stays off until it is corrected.',
      'On a house with sound piping that is a contained job, and the conversation worth having is repair against replacement with real numbers rather than a default to the bigger sale. Sometimes a control valve genuinely fixes it. Sometimes it is money spent on an appliance with a year left, and we will say so. Lincoln Heights issues its own permits and inspections, and being a small village the inspection queue is often what sets the timeline.',
    ],
    commonIntro:
      "Across Lincoln Heights' modest older housing, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Can you just repair the Lincoln Heights water heater instead of replacing it?',
        a: 'Sometimes, and we will give you both numbers rather than only the bigger one. If the tank is sound and the gas control has failed, a control replacement is a real option. If the tank itself is leaking or corroded through, a repair is money spent on something with very little life left, and we would rather tell you that than take the work.',
      },
    ],
  },

  dillonvale: {
    intro:
      'Gas shut off in Dillonvale? Sycamore Township permits, and small original runs. Call (513) 586-5107.',
    relevance: [
      'Dillonvale (ZIP 45236) is a compact mid-century subdivision area in Sycamore Township, and the housing is consistent enough that the gas findings are too. Original black iron sized for the appliances of the day, still in place, now feeding equipment that has been replaced once or twice since.',
      'That makes two diagnoses worth separating at a shutoff. A pressure test says whether the system leaks. A measurement at the appliances with several drawing at once says whether the run can actually deliver — and a system can hold pressure perfectly while still being too small for a modern furnace and a tankless heater together. Permits and inspections go through Sycamore Township and Hamilton County, not the city.',
    ],
    commonIntro:
      "Across Dillonvale's mid-century Sycamore Township homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Our Dillonvale appliances seem to interfere with each other. Is that the gas?',
        a: 'Possibly a sizing issue rather than a leak. A tankless water heater draws heavily for short bursts, and on a run sized for a 1960s house that can pull pressure down far enough for the furnace to misbehave. It has to be measured at the appliances with both drawing, and where that is the finding the fix is upsizing the run.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Gas shut off in Woodlawn? Residential and commercial gas work are different jobs. Call (513) 586-5107.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village of modest mid-century housing alongside a substantial warehouse and light-industrial corridor, and the two need saying apart. On the houses a gas shutoff is the ordinary job: test the system, fix what fails, get it inspected, and the utility reconnects.',
      'On the commercial side the meter sets are larger, the pressures and pipe sizes are different, and the inspection expectations are not the same — so it is worth being clear that our work here is residential and light commercial rather than plant systems. Woodlawn issues its own permits and inspections, and 45215 covers several separate municipalities, so the address rather than the postal code decides the office.',
    ],
    commonIntro:
      "Across Woodlawn's mid-century housing beside the industrial corridor, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Can you handle the gas at my Woodlawn warehouse unit?',
        a: 'It depends on the size of the service, and we would rather establish that on the phone than waste your afternoon. Residential and light commercial systems are our work. Large industrial meter sets and process piping are a different trade with different certification, and if that is what you have we will tell you straight away rather than send someone out.',
      },
    ],
  },

  addyston: {
    intro:
      'Gas shut off in Addyston? Ohio River flooding reaches gas appliances here. Call (513) 586-5107.',
    relevance: [
      'Addyston (ZIP 45001) is a small Ohio River village on the western edge of the county, on low ground where flooding is a recurring event rather than a rarity, and that is what most often takes gas off here. Submerged furnaces, boilers and water heaters have their gas control valves replaced rather than dried out — the damage is internal, with nothing visible from outside, and a control that works today can fail unsafely later.',
      'Addyston is its own incorporated village rather than part of a township, so permits and inspections go through the village rather than Hamilton County — worth confirming, because contractors covering the far west side often default to the county out of habit. Being a small village, the inspection queue rather than the plumbing usually sets how quickly the gas comes back, which is why we file and book it when the work is scheduled rather than once it is finished.',
    ],
    commonIntro:
      "On Addyston's low river ground, where flooding reaches gas appliances, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does Hamilton County issue the gas permit for my Addyston house?',
        a: 'No. Addyston is its own incorporated village and issues its own permits and inspections, which catches out contractors who cover the far west side and default to the county. Getting it wrong is a delay rather than a failed inspection — the filing comes back and is redone — so it is worth asking which office a plumber intends to file with.',
      },
    ],
  },

  greenhills: {
    intro:
      'Gas shut off in Greenhills? Attached original units can share gas piping. Call (513) 586-5107.',
    relevance: [
      'Greenhills (ZIP 45218) was built in 1938 as one of three New Deal greenbelt towns, and its original core is a designated historic district of houses and attached row-style units around a central green. Two things follow for gas work. Where units are attached and were built together, piping arrangements can be shared, so a shutoff and a pressure test can involve more than one household and needs the owner or owners to authorise it.',
      'The other is the designation. Interior testing and repair is a normal job here, but anything visible from the street — relocating a meter, running new pipe on an exterior wall — needs checking before it is designed rather than after. Greenhills issues its own permits and inspections. The piping is genuinely old in the original units, so a test finds accumulated alterations rather than anything recent.',
    ],
    commonIntro:
      "Across Greenhills' original 1938 houses and attached units, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'My Greenhills unit is attached to my neighbour’s. Does their gas affect mine?',
        a: 'It can, on the original units. Where they were built together the piping arrangement is sometimes shared, which means a pressure test covers more than your household and everyone comes back together. We establish which arrangement your building has before quoting, because it changes both who authorises the work and what it costs.',
      },
    ],
  },
};
