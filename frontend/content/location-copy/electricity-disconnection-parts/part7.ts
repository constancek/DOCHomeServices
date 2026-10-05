import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 7 — the Kenton, Campbell and Boone County cities, and the first
// Clermont County communities. Every Kentucky entry names Duke Energy Kentucky,
// which is a separate operating company from Duke Energy Ohio.
export const part7: Record<string, LocationServiceCopy> = {
  'lakeside-park': {
    intro:
      'Power disconnected in Lakeside Park? One of five cities in ZIP 41017, each with its own permit office. Call (513) 586-5107.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city of mid-century homes, and it shares its ZIP with Crescent Springs, Crestview Hills, Edgewood and Fort Mitchell. Five separate cities, five permit offices, one postal code — so an electrician working from the address as written on a bill has a genuine chance of filing in the wrong place, and the utility waits for the correct sign-off before reconnecting.',
      'The housing is mid-century and largely on its original services, which were sized for a house of that period. Where central air, a finished lower level and modern appliances have been added since, those connections have been carrying more than they were built for over many years. Heat damage at the meter socket is the usual finding rather than anything sudden. The utility here is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Lakeside Park's mid-century homes, in a ZIP shared with four other cities, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 41017 — is that Lakeside Park for the permit?',
        a: 'Only if your address actually falls in Lakeside Park. That code covers five separate cities — Lakeside Park, Crescent Springs, Crestview Hills, Edgewood and Fort Mitchell — each issuing its own permits. We confirm which one applies before filing rather than trusting the postal code, because a misdirected permit means waiting while it is redone.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Power disconnected in Crescent Springs? Its own city permits, and newer streets often fed underground. Call (513) 586-5107.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city of mid-century and newer homes, and it issues its own permits and inspections despite sharing a postal code with four other cities. The newer sections were frequently developed with underground supply, which changes what a disconnection means: there is no mast or weatherhead, so the causes narrow to a fault at the meter base, damage in the underground run, or a panel that will not pass.',
      'On the mid-century streets the picture is conventional — original services now carrying loads well beyond their intended range, showing heat damage at the connections rather than tripping breakers. The utility is Duke Energy Kentucky, and it schedules underground work with more lead time than overhead, so where the fault is in a buried run the reconnect can take longer even though the repair is simpler.',
    ],
    commonIntro:
      "Across Crescent Springs' mid-century and newer homes, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My Crescent Springs street is fed underground. What can even go wrong?',
        a: 'The mast and weatherhead are gone, which removes a lot of the usual causes. What remains is a fault at the meter base, damage in the buried run itself, or a panel that will not pass inspection. Worth knowing that Duke Energy Kentucky schedules underground work with more lead time, so the reconnect can be slower even where the repair is straightforward.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Power disconnected in Crestview Hills? Its own city permits, and commercial neighbours on the same circuits. Call (513) 586-5107.',
    relevance: [
      'Crestview Hills (ZIP 41017) holds Thomas More University and a substantial retail corridor alongside its residential streets, and it issues its own permits and inspections. The institutional and commercial load nearby matters in one practical way: those circuits are attended and prioritised differently from purely residential streets, so what you observe happening a few blocks away tells you little about your own supply.',
      'For a disconnection the causes are residential and familiar. Mid-century and newer homes, services frequently original on the older streets, and heat damage at the connections where a house has gained central air and modern appliances since. On the newer streets the panels are adequate and a disconnection is usually one identifiable fault. The utility throughout is Duke Energy Kentucky rather than Duke Energy Ohio.',
    ],
    commonIntro:
      "Across Crestview Hills' residential streets behind the university and retail corridor, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'Does Crestview Hills issue its own permits, or is it the county?',
        a: 'The city issues its own, despite sharing ZIP 41017 with four other cities. The filing follows your address rather than the postal code, and the utility looks for the correct sign-off before reconnecting. We confirm the right office before submitting anything, because getting it wrong means waiting rather than failing.',
      },
    ],
  },

  edgewood: {
    intro:
      'Power disconnected in Edgewood? Its own city permits, with the hospital nearby on separate circuits. Call (513) 586-5107.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city and home to St. Elizabeth Healthcare, and it issues its own permits and inspections. The hospital nearby means genuinely critical load in the city, which affects how the utility treats those circuits — but it has no bearing on a disconnection at a house, where the equipment on your side of the meter is yours regardless of what is on the same street.',
      'The residential causes are the usual ones for the housing. Mid-century and newer homes, services frequently original where the streets are older, and connections that have carried central air, finished lower levels and modern appliances for decades on equipment sized for far less. Heat damage at the meter socket is what a technician declines to re-energise. The utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Edgewood's residential streets near the hospital, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Does being near the hospital help if my Edgewood service is disconnected?',
        a: 'Not for this. Hospital circuits get restoration priority in an outage, which is a different situation entirely. A disconnection means the equipment on your side of the meter has been red-tagged or has failed, and no proximity to critical load changes that — it needs a licensed repair and an inspection before Duke Energy Kentucky will reconnect.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Power disconnected in Taylor Mill? Newer sections are fed underground; older ones are not. Call (513) 586-5107.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential city south of Covington, and a large share of it is comparatively recent development. Much of that newer building was done with underground supply, so those houses have no mast or weatherhead and a disconnection narrows to the meter base, the buried run, or a panel that will not pass. The city issues its own permits and inspections.',
      'The older mid-century sections are conventional overhead with services largely original to the houses — sized for their era and now carrying rather more. Heat damage at the connections is the finding there. It is worth telling us which arrangement you have when you call, because the likely cause and the reconnect timeline differ substantially. The utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Taylor Mill's newer underground-fed streets and older overhead sections, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'How do I tell whether my Taylor Mill house is overhead or underground?',
        a: 'Look for a mast — a metal pipe running up the wall or through the roof with cables coming into it. If there is one, you are overhead. If the meter sits on the wall with no cable arriving from above, you are almost certainly underground. It is the first thing we ask, because it changes what is likely wrong and how the reconnect is scheduled.',
      },
    ],
  },

  elsmere: {
    intro:
      'Power disconnected in Elsmere? Elsmere and Erlanger share a ZIP but not a permit office. Call (513) 586-5107.',
    relevance: [
      'Elsmere (ZIP 41018) sits along the Dixie Highway corridor beside Erlanger, and the two share a postal code while being entirely separate cities with their own permit offices. That is the trap: an electrician working from the address on a bill files with whichever city they assume, and filing with Erlanger for an Elsmere property means the paperwork comes back while the house sits without power.',
      'The housing is a mix of older and mid-century homes, so the services span two eras — original entrances on the older streets and mid-century equipment on the rest, much of it never replaced. The findings are grounding to a superseded standard, corrosion at the meter base, and heat damage where connections have carried modern loads for decades. The utility is Duke Energy Kentucky rather than Duke Energy Ohio.',
    ],
    commonIntro:
      "Across Elsmere's older and mid-century homes off the Dixie corridor, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My ZIP says 41018, the same as Erlanger. Which city issues my permit?',
        a: 'It depends on the address, because Elsmere and Erlanger are separate cities sharing one postal code. Getting it wrong means the filing comes back and is redone, which costs a day you would rather not spend. We check it before submitting anything, and it is a fair question to ask anyone else you call.',
      },
    ],
  },

  independence: {
    intro:
      'Power disconnected in Independence? The county seat, but the city issues the permit. Call (513) 586-5107.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, and being the county seat causes a specific confusion. County offices are located here, so people reasonably assume the county handles the permit — but Independence is a city and issues its own. That assumption sends paperwork to the wrong desk and costs a day.',
      'The growth means the housing spans a wide range. The historic core has older services, some original, with the usual findings once anyone examines them. The newer subdivisions have modern panels and clean documentation, so a disconnection there is usually about one identifiable thing rather than the whole assembly. The utility throughout is Duke Energy Kentucky, with its own crews and reconnect scheduling.',
    ],
    commonIntro:
      "Across Independence's historic core and newer subdivisions, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Independence is the county seat — does the county issue my permit?',
        a: 'No, the city does, and it is an understandable mix-up because the county offices are here. Independence issues its own electrical permits and inspections. Filing with the county means the paperwork comes back and gets redone, and Duke Energy Kentucky will be waiting for the correct sign-off before reconnecting.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Power disconnected in Dayton? A low riverfront city where submerged panels are replaced. Call (513) 586-5107.',
    relevance: [
      'Dayton (ZIP 41074) shares the narrow riverfront strip with Bellevue next door, in tight streets of well-preserved late-1800s houses, and it issues its own permits and inspections. Sitting low on the Ohio makes water the recurring cause of disconnection: where a panel has been submerged the utility will not re-energise it, and drying is not an option because water reaches behind the bus bars and into the breakers.',
      'The houses add the second factor. They are tall for their footprint and close together, with entrances high on the wall and frequently running through the roof, and they carry some of the oldest electrical histories in Northern Kentucky. Once an inspector is examining a service to clear a tag, that history determines the scope rather than the single fault. The utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "In Dayton's tall late-1800s houses on low riverfront ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Dayton panel was under water. Is replacement really the only option?',
        a: 'Yes. Water reaches the breakers and the bus behind the panel face, and corrosion continues long after the surface looks and feels dry, so submerged panels are replaced rather than dried and re-approved. An inspector will look for the signs before Duke Energy Kentucky reconnects. If yours sits low and this has happened before, ask about relocating it higher while we are there.',
      },
    ],
  },

  southgate: {
    intro:
      'Power disconnected in Southgate? Its own city permits, on the slope between the flats and the bluff. Call (513) 586-5107.',
    relevance: [
      'Southgate (ZIP 41071) sits between Newport below and Fort Thomas above, which puts it on the transition slope rather than on the riverfront or the bluff top, and it issues its own permits and inspections while sharing Newport’s postal code. That shared ZIP is worth noting, because Newport is a separate city with its own office and filings get confused between them.',
      'Being off the riverfront means the flooded-panel problem is much less common here than in the cities below. What we find instead is wear on mid-century services: installed with the houses, never replaced because nothing failed, and now carrying central air, finished lower levels and modern appliances. Heat damage at the connections is the usual finding. The utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Southgate's mid-century homes on the slope between the flats and the bluff, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Southgate shares Newport’s ZIP. Does Newport issue my permit?',
        a: 'No — Southgate is its own city with its own permit office, despite sharing the postal code. The filing follows the address rather than the ZIP, and Duke Energy Kentucky looks for the correct sign-off before reconnecting. We confirm the right office before submitting anything.',
      },
    ],
  },

  wilder: {
    intro:
      'Power disconnected in Wilder? Its own city permits, with industrial neighbours on the same corridor. Call (513) 586-5107.',
    relevance: [
      'Wilder (ZIP 41076) runs along the Licking River corridor with a commercial and industrial base alongside its residential neighborhoods, and it issues its own permits and inspections while sharing its ZIP with Highland Heights and Cold Spring. Three separate places in one postal code, so the filing follows the address.',
      'On the residential side the causes are the usual mid-century ones — original services now carrying loads beyond their intended range, with heat damage at the connections. The low ground along the corridor adds submerged panels as a second cause, which are replaced rather than dried out. On the commercial side we handle smaller services and say plainly when a building needs a specialist contractor. The utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Wilder's residential streets and the Licking River corridor, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you look at a small commercial service in Wilder?',
        a: 'Smaller commercial, yes — light-industrial units, offices and modest three-phase services are routine work for us, permits and inspections included. Large three-phase installations with primary metering or a utility transformer on site need a specialist contractor, and we will tell you that on the phone rather than after driving out.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Power disconnected at your Highland Heights property? On rental housing the owner authorises the work. Call (513) 586-5107.',
    relevance: [
      'Highland Heights (ZIP 41076) is home to Northern Kentucky University, and the housing around it mixes mid-century family homes with student rentals. That mix decides how quickly a disconnection gets resolved, and it has nothing to do with the wiring: a tenant cannot authorise work on a service or sign for a permit, and where an owner is slow to respond identical damage sits for days.',
      'The city issues its own permits and inspections, sharing ZIP 41076 with Wilder and Cold Spring. On the rental properties there is a second common finding — conversions and sub-panels added over the years without permits, which surface once an inspector examines the service to clear a tag. The utility throughout is Duke Energy Kentucky rather than Duke Energy Ohio.',
    ],
    commonIntro:
      "Across Highland Heights' mid-century homes and student rentals near the university, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I rent near NKU and the power has been disconnected. What can I do?',
        a: 'Report it to your landlord or management company straight away and ask them to call us rather than waiting. Repairs to the service, meter base or panel need the property owner to authorise the work and the permit, so a tenant calling directly usually adds a day rather than saving one. If the fault is inside your unit, that is a faster conversation.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Power disconnected in Cold Spring? Its own city permits, with overhead and underground on the same road. Call (513) 586-5107.',
    relevance: [
      'Cold Spring (ZIP 41076) has grown along the US-27 corridor, and the result is a city where the service arrangement changes with the age of the street rather than being uniform. Established neighborhoods are conventional overhead with services largely of their era; the newer subdivisions were frequently developed with underground supply and have no mast or weatherhead at all.',
      'That produces genuinely different disconnections a few streets apart. On the older streets it is wear — heat damage at the connections on services carrying more than they were built for. On the newer streets it is something specific: the meter base, the buried run, or a panel that will not pass. The city issues its own permits, shares ZIP 41076 with Wilder and Highland Heights, and the utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Cold Spring's established overhead streets and newer underground-fed subdivisions, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'My Cold Spring subdivision is newer. Why would the service be disconnected at all?',
        a: 'On newer underground-fed streets there is no mast or weatherhead to fail, so the causes narrow — a fault at the meter base, damage in the buried run, or a panel that will not pass an inspection, sometimes after a property has stood empty. That is usually a smaller job than on older housing nearby, and worth establishing before anyone quotes for a full service replacement.',
      },
    ],
  },

  alexandria: {
    intro:
      'Power disconnected at your Alexandria property? On a well, no power means no water. Call (513) 586-5107.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat with a historic core, newer subdivisions and a semi-rural edge, and it issues its own permits and inspections despite being the county seat — a distinction that catches people out, because the county offices being here suggests otherwise.',
      'It is the rural edge that changes the urgency of a disconnection. Properties out there sit well back on long private service runs, and a good number are on private wells — so losing power means losing water, because the pump is electric, and septic pumps stop too. A long private run also means the fault may be somewhere along the line rather than at the house. Both are worth saying on the phone. The utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Alexandria's historic core, newer subdivisions and semi-rural properties, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'I am on a well outside Alexandria and the power has been cut. Does that change anything?',
        a: 'It makes it considerably more urgent, and it is worth saying when you call. A well pump needs electricity, so no power means no water for washing, flushing or drinking, and a septic pump stops as well. Tell us on the phone — it changes how we prioritise the visit and it is not something we can tell from an address.',
      },
    ],
  },

  melbourne: {
    intro:
      'Power disconnected in Melbourne? A small river village a long way east, on low ground. Call (513) 586-5107.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village on the Ohio well east of Newport, about as far out as we go on the Kentucky side, and it issues its own permits and inspections. Being very small means the municipal queue is short when the filing is right — and being a distance out means getting the details right on the phone matters, so we arrive equipped rather than making a second trip.',
      'The riverside position is the recurring cause. Older houses on low ground put panels where water reaches them, and a submerged panel is replaced rather than dried out because water gets behind the bus bars and into the breakers. Where wear is the cause instead, these are older services frequently never brought forward, so grounding to a superseded standard is a common finding. The utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "In Melbourne's older homes on low ground beside the river, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Do you come out as far as Melbourne?',
        a: 'Yes, and it is near the eastern edge of what we cover on the Kentucky side. Because it is a distance, it helps to cover the details on the phone — whether the panel has been under water, roughly how old the service is, and whether you are on a well. That determines what we bring and avoids a second trip for something we could have anticipated.',
      },
    ],
  },

  hebron: {
    intro:
      'Power disconnected at your Hebron property? Rural properties on wells lose water with the power. Call (513) 586-5107.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the airport, mixing newer subdivisions with established semi-rural properties, and those two need different conversations. The subdivisions are frequently underground-fed with modern panels, so a disconnection narrows to the meter base, the buried run, or an inspection after a property stood empty.',
      'The rural properties are the ones to flag on the phone. They sit well back on long private service runs, so the fault may be along the line rather than at the house, and a number are on wells and septic — meaning a disconnection takes the water with it. Permits and inspections go through Boone County rather than any Ohio authority, and the utility is Duke Energy Kentucky rather than Duke Energy Ohio.',
    ],
    commonIntro:
      "Across Hebron's newer subdivisions and semi-rural properties near the airport, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'What should I tell you about a rural Hebron property when I call?',
        a: 'Whether you are on a well, and roughly how far the house sits from the road. The well matters because no power means no water, which raises the priority. The distance matters because on a long private run the fault is often out along the line rather than at the house, and knowing in advance means we arrive able to trace it.',
      },
    ],
  },

  burlington: {
    intro:
      'Power disconnected in Burlington? The Boone County seat, with an old core and newer subdivisions. Call (513) 586-5107.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions, and the contrast between the two is sharp for a disconnection. Around the courthouse the buildings are older and the services can be decades behind current requirements — grounding to a superseded standard, corrosion at the meter base, panels with nothing left.',
      'The subdivisions were largely built with underground supply and modern panels, so a disconnection there is usually one identifiable fault rather than the whole assembly. Being the county seat, permits and inspections go through Boone County. And the utility throughout is Duke Energy Kentucky, a separate operating company from Duke Energy Ohio with its own crews and scheduling.',
    ],
    commonIntro:
      "Across Burlington's historic courthouse core and its newer subdivisions, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Why does the old part of Burlington seem to have more service problems?',
        a: 'Age, mostly. The buildings around the courthouse core are far older, with services that may be original or replaced once decades ago, so grounding, panel condition and meter-base corrosion are all further behind current requirements. The newer subdivisions have modern panels and underground supply, which removes most of the usual causes.',
      },
    ],
  },

  union: {
    intro:
      'Power disconnected in Union? Newer underground-fed streets, so causes are narrow. Call (513) 586-5107.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of subdivisions built from the 1990s onward, and it is worth being straightforward about what that means. Most of this housing was developed with underground supply and modern panels, so the causes that dominate older neighborhoods — failing masts, obsolete panels, grounding to a superseded standard — simply do not apply.',
      'What remains is narrower: a fault at the meter base, damage in the buried run, an inspection required after a property stood empty, or a load problem where a car charger has been added to a service without a proper calculation. That last one is increasingly the reason we are called out here. Permits go through Boone County and the city, and the utility is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Union's newer, largely underground-fed subdivisions, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'We added a car charger to our Union house and now there is a problem. Why?',
        a: 'A Level 2 charger draws a large continuous load, and if it was fitted without a load calculation it can push the whole service past what it was sized for. Running at the ceiling shows up as heat at the connections, which is what stops a reconnection. The proper fix starts with a load calculation, then either an uprated service or a managed circuit that limits charging when the house is drawing hard.',
      },
    ],
  },

  walton: {
    intro:
      'Power disconnected in Walton? Historic core, newer subdivisions and rural wells all differ. Call (513) 586-5107.',
    relevance: [
      'Walton (ZIP 41094) sits at the southern edge of the Boone County metro, with a historic core, newer subdivisions and rural property around them, and the three need three different conversations. The core has older overhead services with the usual age-related findings. The subdivisions are frequently underground with modern panels, so causes are narrow.',
      'The rural properties bring the well question — a private well pump is electric, so a disconnection takes the water with it, and septic pumps stop too. Long private runs also mean the fault may be along the line rather than at the house. Permits go through Boone County and the city, and the utility is Duke Energy Kentucky. Tell us which of the three you have when you call and we will arrive equipped for it.',
    ],
    commonIntro:
      "Across Walton's historic core, newer subdivisions and rural properties, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I am on a well outside Walton. How urgent is a disconnection?',
        a: 'More urgent than on public water, and worth saying when you call. The well pump runs on electricity, so no power means no water for washing, flushing or drinking, and a septic pump stops as well. It changes how we prioritise the visit, and it is not something we can work out from the address.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Power disconnected in Mount Carmel? Clermont County and Union Township issue the permit. Call (513) 586-5107.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community in Clermont County near the I-275 corridor, and the county line is the first thing to establish. Permits and inspections go through Clermont County and Union Township rather than Hamilton County or the city of Cincinnati — and this ZIP also covers Newtown, Turpin Hills and Dry Run, which are in Hamilton County entirely.',
      'So one postal code spans two counties out here, which is about as clear a reason as there is to work from the address rather than the ZIP. The housing is established mid-century and newer, so the findings split between wear on original services and specific faults on modern ones. Duke Energy Ohio is the utility, and it will be waiting for the correct sign-off before reconnecting.',
    ],
    commonIntro:
      "Across Mount Carmel's mid-century and newer homes in Clermont County, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Is my Mount Carmel permit a Hamilton County one?',
        a: 'No. Mount Carmel is in Union Township, Clermont County, so the permit and inspection go through Clermont rather than Hamilton County or the city. Note that ZIP 45244 spans both counties — Newtown, Turpin Hills and Dry Run are Hamilton County — which is exactly why the filing has to follow the address.',
      },
    ],
  },

  summerside: {
    intro:
      'Power disconnected in Summerside? Clermont County permits, and wide-lot suburban services. Call (513) 586-5107.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, in suburban neighborhoods of mid-century and newer homes, and the permit and inspection go through Clermont County and Union Township rather than Hamilton County. Worth confirming before work is scheduled rather than after, because a contractor working mostly on the Cincinnati side may file with the wrong authority out of habit.',
      'The housing is on generous suburban lots, which means mid-century services installed with the houses and frequently never replaced, now carrying central air, finished lower levels and increasingly car charging. Heat damage at the connections is the usual finding. Where newer sections were developed with underground supply the causes narrow considerably, and the reconnect is scheduled with more lead time.',
    ],
    commonIntro:
      "Across Summerside's wide-lot mid-century and newer homes in Clermont County, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Should I upgrade the service while clearing a disconnection on my Summerside house?',
        a: 'On a mid-century service still at its original rating, usually yes. Labour, the permit and the inspection dominate the bill and are the same either way, so refitting the original capacity on a house that now runs central air and possibly a car charger means paying that set of costs again before long. We quote both so the difference is visible.',
      },
    ],
  },
};
