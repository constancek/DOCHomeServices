import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 7 — the rest of Kenton County, Campbell County, Boone County, and the
// first two Clermont County communities. New themes here: the rural edges where
// properties are on a propane tank rather than a gas main, student and rental
// housing where the owner authorises the work, and 45244 spanning two counties.
export const part7: Record<string, LocationServiceCopy> = {
  'lakeside-park': {
    intro:
      'Gas shut off in Lakeside Park? Kentucky inspects gas piping at state level. Call (513) 586-5107.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small residential Kenton County city of largely mid-century homes, and it shares its ZIP with Crescent Springs, Crestview Hills and Edgewood — four separate cities in one postal boundary. On the Ohio side that would mean four different permit offices and a genuine risk of filing with the wrong one. Here it matters less, because gas piping in Kentucky falls under the state plumbing code and inspection runs through the Kentucky Division of Plumbing rather than a city building department.',
      'What that does not remove is the vintage question. These systems are original black iron sized for the appliances of their day, now feeding equipment replaced once or twice since — so a pressure test tells you whether the system leaks, and a separate measurement at the appliances tells you whether the run can actually deliver what the house now demands. Your gas comes from Duke Energy Kentucky rather than the Ohio company.',
    ],
    commonIntro:
      "Across Lakeside Park's mid-century homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Four cities share my Lakeside Park ZIP. Does the permit go to the right one?',
        a: 'For gas piping it is less of a trap here than in Ohio, because Kentucky inspects plumbing and gas piping under the state code through the Division of Plumbing rather than through each city’s building department. Where city involvement does come in is anything structural or exterior, and we confirm that against your actual address rather than the ZIP.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Gas shut off in Crescent Springs? Piping is black iron or CSST, not both. Call (513) 586-5107.',
    relevance: [
      'Crescent Springs (ZIP 41017) spans older housing near its original centre and newer subdivision streets, and the era of your house decides the likely finding. On the older side, rigid black iron altered in stages, where a pressure test turns up aged joints and capped stubs from appliances removed decades ago. On the newer side, CSST — flexible tubing with a yellow jacket — where the usual issue is bonding to the electrical grounding system rather than a leak at all.',
      'Those are not comparable pieces of work, which is why we test before quoting rather than after. Your gas comes from Duke Energy Kentucky under the Kentucky Public Service Commission, and gas piping inspection runs under the state plumbing code rather than through a city building department.',
    ],
    commonIntro:
      "Across Crescent Springs' older centre and newer subdivisions, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'How do I tell whether my Crescent Springs piping is black iron or CSST?',
        a: 'Look at the run near the meter or the furnace. Black iron is rigid dark pipe with threaded fittings; CSST is flexible tubing in a yellow jacket. It matters because the likely fault differs — leaks and capped stubs on black iron, bonding to the electrical grounding system on CSST — and the two are different repairs at different costs.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Gas shut off in Crestview Hills? A red-tagged appliance is the usual cause. Call (513) 586-5107.',
    relevance: [
      'Crestview Hills (ZIP 41017) is largely post-1960s Kenton County subdivision housing, and the most common route to a shutoff here is an appliance rather than the pipe. A furnace with a cracked heat exchanger or a water heater with a failed gas control gets red-tagged, and service stays off until it is corrected and the system passes a test.',
      'Where the piping is sound that is a contained job — replace the appliance, pass the test, get it signed off, and Duke Energy Kentucky reconnects. Occasionally the test finds something the appliance failure had been masking, which grows the scope, and that is why we test before quoting rather than starting work and coming back with a revised figure.',
    ],
    commonIntro:
      "Across Crestview Hills' post-1960s subdivisions, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'My Crestview Hills furnace was red-tagged. Is that the whole problem?',
        a: 'Usually, and the pressure test confirms it. Where the piping holds, replacing the appliance and passing the test clears the shutoff. Occasionally the test finds a piping fault the failing appliance had been masking, which grows the job — so we test first and give you one number rather than a revision partway through.',
      },
    ],
  },

  edgewood: {
    intro:
      'Gas shut off in Edgewood? Larger newer homes carry more system to test. Call (513) 586-5107.',
    relevance: [
      'Edgewood (ZIP 41017) is one of the larger Kenton County cities, mostly post-1960 subdivision housing with a good deal of it built to a generous size. Houses like that tend to carry more gas system than an older modest home — a furnace, a water heater, a range, gas fireplaces, sometimes a standby generator or an outdoor kitchen added later — and a pressure test covers every branch together.',
      'That makes diagnosing a shutoff slower here, simply because there is more to isolate. Outdoor and later-added branches are also the ones most often installed without a permit, so they are worth mentioning when you call. Your gas comes from Duke Energy Kentucky, and piping inspection runs under the Kentucky state plumbing code rather than a city building department.',
    ],
    commonIntro:
      "Across Edgewood's larger post-1960 homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'We added a gas fire pit at our Edgewood house. Does that affect the test?',
        a: 'Yes, and it is better mentioned at the start. Every branch with joints and a valve is part of what the pressure test covers, and outdoor runs added later are frequently both where a fault sits and where an inspection issue turns up, because they often went in without a permit. Knowing it exists lets us quote the real job.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Gas shut off in Taylor Mill? Most systems here share one vintage. Call (513) 586-5107.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a Kenton County city built out largely across the mid-century decades, with newer pockets added since, and the older streets are consistent enough that findings on one hold for the next. The houses were piped the same way at the same time and have aged at a similar rate.',
      'That does not mean your system is failing. It means that if something does stop a reconnection, a section replacement is a more likely remedy here than a patch on one joint — worth knowing before you are quoted. Your gas comes from Duke Energy Kentucky under the Kentucky Public Service Commission, and gas piping is inspected under the state plumbing code.',
    ],
    commonIntro:
      "Across Taylor Mill's mid-century streets, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'A neighbour needed gas piping replaced. Will my Taylor Mill house too?',
        a: 'Not necessarily, but it is reasonable to check. Houses on these streets went up over a similar period and were piped the same way, so yours is likely the same vintage. That is not a prediction of failure — only that if a reconnection is ever held up, a section replacement is more likely than a patch on a single joint.',
      },
    ],
  },

  elsmere: {
    intro:
      'Gas shut off in Elsmere? Honest repair-or-replace numbers on older appliances. Call (513) 586-5107.',
    relevance: [
      'Elsmere (ZIP 41018) is a modest Kenton County city along the Dixie Highway corridor with older housing, and the shutoffs we are called for here are mostly appliance-driven: a furnace or water heater well past its expected life gets red-tagged, and service stays off until it is corrected.',
      'On a house with sound piping that is a contained job, and the conversation worth having is repair against replacement with real numbers rather than a default to the bigger sale. Sometimes a gas control valve genuinely fixes it. Sometimes it is money spent on an appliance with a year left, and we will say so. Your gas comes from Duke Energy Kentucky, and gas piping inspection runs under the Kentucky state plumbing code.',
    ],
    commonIntro:
      "Across Elsmere's older housing along the Dixie Highway corridor, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Can the Elsmere water heater be repaired rather than replaced?',
        a: 'Sometimes, and we will give you both numbers rather than only the bigger one. If the tank is sound and the gas control has failed, a control replacement is a real option. If the tank itself is leaking or corroded through, a repair is money spent on something with very little life left, and we would rather tell you that than take the work.',
      },
    ],
  },

  independence: {
    intro:
      'Gas shut off in Independence? On the rural edges it may be propane, not mains. Call (513) 586-5107.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and has grown fast, so it spans dense newer subdivisions and genuinely rural land on its outer edges — and that distinction matters before anything else. In the subdivisions your gas comes from Duke Energy Kentucky through a meter, and a shutoff is a utility disconnection resolved by testing, repairing and getting the system inspected.',
      'On the rural edges some properties are on a propane tank instead, with no gas main involved. If that is you, a loss of gas is a supply or tank issue for your propane company rather than a utility disconnection, and we will say so on the phone rather than send someone out to tell you. Where it is a genuine gas system, the subdivision housing here is mostly CSST, where the common finding is bonding to the electrical grounding system.',
    ],
    commonIntro:
      "Across Independence's newer subdivisions and its rural edges, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'We have a tank in the yard, not a meter. Is this the same problem?',
        a: 'No, and it is worth establishing on the phone. A tank means propane, which is a supply arrangement with your propane company rather than a utility service that gets disconnected and reconnected. We would rather tell you that than charge you for a visit to say it. If the piping downstream of the tank is at fault, that is different, and we can look at it.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Gas shut off in Dayton? Low river ground puts appliance controls under water. Call (513) 586-5107.',
    relevance: [
      'Dayton (ZIP 41074) is a dense Campbell County river city on low ground behind the floodwall, with old, closely spaced housing, and water is the recurring reason gas goes off here. Where a furnace, boiler or water heater has been submerged, the gas control valve and burner controls are replaced rather than dried out and relit — the corrosion is internal, nothing shows from outside, and a control that works today can fail unsafely later.',
      'Because the housing is genuinely old, the piping carries a century of alterations, including lines capped at the wall when electric lighting arrived rather than removed. Those are still on the system a pressure test covers. Your gas comes from Duke Energy Kentucky, and gas piping is inspected under the Kentucky state plumbing code rather than by a city building department.',
    ],
    commonIntro:
      "In Dayton's old, closely spaced housing on low river ground, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'The Dayton furnace was under water and still lights. Is that fine?',
        a: 'No, and stop lighting it. A submerged gas control valve can work today and fail unsafely later, because the damage is internal corrosion with nothing visible outside. The control gets replaced rather than dried out. On some units that means a new appliance rather than a part, and we will tell you which before ordering anything.',
      },
    ],
  },

  southgate: {
    intro:
      'Gas shut off in Southgate? Older houses often still have gas-lighting pipe. Call (513) 586-5107.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city on the hillsides above Newport, with a good deal of older housing from an era when houses were lit by gas. Those lighting lines were usually capped at the wall rather than removed when electric arrived, because taking them out meant opening plaster throughout — so a century later they are still part of the system.',
      'A pressure test tests them along with everything else, which is why a test can fail with every appliance in the house working perfectly. Locating one takes patience: we isolate sections rather than opening original plaster on a hunch. Your gas comes from Duke Energy Kentucky, and gas piping inspection runs under the state plumbing code.',
    ],
    commonIntro:
      "In Southgate's older hillside housing, where abandoned gas-lighting lines often remain, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Nothing in my Southgate house has changed. How did the gas test fail?',
        a: 'Because the test covers the pipe rather than the appliances. Houses of this era were lit by gas, and those lines were capped at the wall rather than removed, so they are still connected. A cap that held for decades can begin to weep with nothing in the house behaving differently. We isolate sections to find it rather than opening plaster speculatively.',
      },
    ],
  },

  wilder: {
    intro:
      'Gas shut off in Wilder? Residential and plant gas work are different trades. Call (513) 586-5107.',
    relevance: [
      'Wilder (ZIP 41076) is a small Campbell County city on low ground along the Licking River, with residential streets sitting alongside industrial and warehouse property, and the two need saying apart. On the houses a gas shutoff is the ordinary job: test the system, correct what fails, get it inspected, and Duke Energy Kentucky reconnects.',
      'Large industrial meter sets and process piping are a different trade with different certification, and if that is what you have we will tell you on the phone rather than send someone out. The low ground brings the other recurring cause — where an appliance has been submerged, the gas control valve is replaced rather than dried out, because the damage is internal with nothing visible outside.',
    ],
    commonIntro:
      "Across Wilder's residential streets on low Licking River ground, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Can you handle the gas at my Wilder warehouse unit?',
        a: 'Depends on the size of the service, and we would rather settle it on the phone than waste your afternoon. Residential and light commercial systems are our work. Large industrial meter sets and process piping need different certification, and if that is what you have we will say so straight away rather than turn up and hand it back.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Gas shut off in Highland Heights? On a rental the owner authorises the work. Call (513) 586-5107.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city built around the university, which means a large share of the housing is rented rather than owner-occupied — and on a rental the gas system is the owner’s. A tenant cannot start the work by calling a plumber, and where one system serves several units in a building, a pressure test covers all of it and every household stays off until it passes.',
      'What tenants can usefully do is tell the landlord how many units are affected and whether it is one building or several, because that is what determines the scope. Restoring several units together on one permit and one inspection is cheaper and faster than piecemeal, but it needs the owner to act. Your gas comes from Duke Energy Kentucky, and gas piping is inspected under the Kentucky state plumbing code.',
    ],
    commonIntro:
      "Across Highland Heights' rental and owner-occupied housing near the university, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'I rent in Highland Heights and the gas is off. Can I just book you myself?',
        a: 'You can call us and we will explain what is likely involved, but the gas system belongs to the property owner, so they have to authorise and pay for the work. What helps is telling them how many units are affected and whether other buildings are too — that is what decides the scope, and it is usually the authorisation rather than the plumbing that holds things up.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Gas shut off in Cold Spring? Newer subdivisions mean CSST and bonding. Call (513) 586-5107.',
    relevance: [
      'Cold Spring (ZIP 41076) has grown substantially, so a good share of the housing is newer subdivision stock, and the piping reflects that. Rather than the rigid black iron of the older river cities, these houses are commonly run in CSST — flexible tubing with a yellow jacket — where the issue that most often turns up on inspection is bonding to the electrical grounding system rather than a leak.',
      'That bond exists so a nearby lightning strike cannot arc through the tubing wall, and where it is missing or has been disturbed by later work it has to be corrected before a sign-off. It is a smaller job than repiping, which is worth knowing before assuming the worst. Your gas comes from Duke Energy Kentucky under the Kentucky Public Service Commission.',
    ],
    commonIntro:
      "Across Cold Spring's newer subdivisions, mostly piped in CSST, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Our Cold Spring house is not old. Why is the gas off?',
        a: 'Age is not the only cause. On houses of this era the finding is usually a CSST bonding issue, an appliance connector disturbed by later work, or an addition piped in without a permit. None of those are worn-out pipe, and most are a smaller correction than people expect when the gas goes off.',
      },
    ],
  },

  alexandria: {
    intro:
      'Gas shut off in Alexandria? Outside town some properties run on propane. Call (513) 586-5107.',
    relevance: [
      'Alexandria (ZIP 41001) sits in southern Campbell County, where a compact town core gives way to genuinely rural land, and the first question is which of the two you are on. In town your gas comes from Duke Energy Kentucky through a meter, and a shutoff is a utility disconnection cleared by testing, repairing and getting the system inspected.',
      'Further out some properties are on a propane tank with no gas main involved, and a loss of gas there is a supply or tank matter for your propane company rather than something we reconnect. We will say so on the phone rather than send someone out to tell you. Rural properties here also tend to have outbuildings — barns, workshops, garages — on their own gas runs, and those are part of what a pressure test covers.',
    ],
    commonIntro:
      "Across Alexandria's town core and the rural land around it, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Our Alexandria property has gas out to the barn. Does that matter?',
        a: 'It does, and it is better raised at the start. Secondary runs to barns, workshops and garages are part of the system a pressure test covers, and on rural properties they were often installed long ago to a standard that would not pass now — which makes them a likely place for a failure to sit. Planning for it beats finding it with the job half done.',
      },
    ],
  },

  melbourne: {
    intro:
      'Gas shut off in Melbourne? A tiny river village on ground that floods. Call (513) 586-5107.',
    relevance: [
      'Melbourne (ZIP 41059) is a very small Campbell County village directly on the Ohio River, on some of the lowest ground on the Kentucky side, and high water is the recurring reason gas goes off. Where a furnace, boiler or water heater has been submerged, the gas control valve is replaced rather than dried out and relit, because the corrosion is internal and a control that works today can fail unsafely later.',
      'Because it is not a rare event here, plenty of properties are on their second or third water heater in the same position, so the useful question during a replacement is whether the appliance can be raised. Venting is the limit. Where a platform above the historic water line works, the cycle ends; where it does not, we will say so rather than build something that creates a different problem. Your gas comes from Duke Energy Kentucky, which reconnects on the strength of the inspection sign-off.',
    ],
    commonIntro:
      "On Melbourne's low riverfront ground, where flooding reaches gas appliances, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Several Melbourne properties lost gas in the same high water. Worth coordinating?',
        a: 'It generally is. One plumber handling neighbouring properties together means shared setup, filings made as a batch, and an inspector covering several addresses in one visit rather than three. It does not change what each owner pays for their own appliances and piping, and it commonly saves days.',
      },
    ],
  },

  hebron: {
    intro:
      'Gas shut off in Hebron? Newer subdivisions, and warehouses we do not cover. Call (513) 586-5107.',
    relevance: [
      'Hebron (ZIP 41048) is Boone County land around the airport, mixing newer residential subdivisions with a substantial amount of warehouse and distribution property, and the two are different pieces of work. On the houses a gas shutoff is the ordinary job — test, repair, inspect, and Duke Energy Kentucky reconnects.',
      'Large industrial meter sets and process piping need different certification, and if that is what you have we will say so on the phone rather than send someone out. On the residential side the piping is mostly CSST, flexible tubing in a yellow jacket, where the common finding on inspection is bonding to the electrical grounding system rather than a leak — a smaller correction than most people fear.',
    ],
    commonIntro:
      "Across Hebron's newer residential subdivisions, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Do you cover gas work at Hebron commercial buildings?',
        a: 'Light commercial, yes. Large distribution and industrial meter sets with process piping are a different trade with different certification, and we will tell you that on the phone rather than turn up and hand it back. For houses and small commercial units in the area it is the same job as anywhere.',
      },
    ],
  },

  burlington: {
    intro:
      'Gas shut off in Burlington? An old core, newer subdivisions, rural edges. Call (513) 586-5107.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, and it covers three quite different housing situations. The historic core has genuinely old properties where the piping carries a century of alterations, including lines capped at the wall when electric lighting arrived. The newer subdivisions around it are mostly CSST, where the common inspection finding is bonding to the electrical grounding system.',
      'The rural edges are the third case, where some properties are on a propane tank rather than a gas main — and a loss of gas there is a supply matter for your propane company rather than a utility disconnection we can clear. We establish which of the three you are before quoting, because the work and the cost are not comparable. Your gas, where it is mains gas, comes from Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Burlington's historic core, its newer subdivisions and its rural edges, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'How do I know which kind of Burlington gas problem I have?',
        a: 'Start with what is outside. A meter means mains gas from Duke Energy Kentucky and a shutoff we can work on. A tank means propane, which is your propane supplier’s arrangement rather than a utility service. From there the age of the house decides whether we are likely looking at aged black iron and capped stubs or a CSST bonding issue.',
      },
    ],
  },

  union: {
    intro:
      'Gas shut off in Union? Large newer homes carry more system to test. Call (513) 586-5107.',
    relevance: [
      'Union (ZIP 41091) is one of the faster-growing parts of Boone County, with a great deal of large, newer housing, and houses like that carry more gas system than most — a furnace, sometimes two zones, a water heater or a tankless unit, a range, gas fireplaces, and often a standby generator or an outdoor kitchen added after the build.',
      'A pressure test covers every branch together, so diagnosing a shutoff takes longer simply because there is more to isolate. The piping is mostly CSST, where the common inspection finding is bonding to the electrical grounding system, and later-added branches are the ones most likely to have gone in without a permit — so mention what is out there when you call. Your gas comes from Duke Energy Kentucky, which reconnects once the work is signed off.',
    ],
    commonIntro:
      "Across Union's large newer homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'We had an outdoor kitchen plumbed in at our Union house. Does that affect the test?',
        a: 'Yes, and it is worth mentioning at the start. Every branch with joints and a valve is part of what a pressure test covers, and later-added outdoor runs are frequently both where a fault sits and where an inspection issue turns up, because they often went in without a permit. Knowing about it lets us quote the actual job.',
      },
    ],
  },

  walton: {
    intro:
      'Gas shut off in Walton? An old town core with rural land beyond it. Call (513) 586-5107.',
    relevance: [
      'Walton (ZIP 41094) sits at the southern end of Boone County, with an old small-town core and rural land around it, and the two need separating. In the core the housing is genuinely old, with piping altered in stages over a century and capped stubs left wherever an appliance was removed — so a pressure test can fail with every appliance in the house working fine.',
      'Beyond the town some properties are on a propane tank rather than a gas main, and a loss of gas there is a supply or tank matter for your propane company rather than a utility disconnection we can clear. We would rather tell you that on the phone than charge you for a visit to say it. Where it is mains gas, your supply is Duke Energy Kentucky and the piping is inspected under the state plumbing code.',
    ],
    commonIntro:
      "Across Walton's old town core and the rural land beyond it, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Every appliance works in my Walton house. Why did the gas test fail?',
        a: 'Because the test covers the pipe, not the appliances. Older houses accumulate capped stubs wherever something was removed over the decades, and those are still connected. A cap that held for years can start to weep with nothing in the house behaving differently, and we isolate sections in sequence to find it rather than opening walls on a guess.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Gas shut off in Mount Carmel? Your ZIP spans two counties. Call (513) 586-5107.',
    relevance: [
      'Mount Carmel (ZIP 45244) is in Union Township, Clermont County, and the ZIP is a genuine trap because 45244 also covers Newtown and Turpin Hills, which are in Hamilton County. That means the same postal code sits across a county line, with different building departments on either side — and the address rather than the ZIP decides who inspects your gas work.',
      'For Mount Carmel that is Clermont County. A contractor going off the postal code can file with Hamilton County, which is a delay rather than a failure — the paperwork comes back and is redone while the house sits without hot water. Your gas comes from Duke Energy Ohio under the Public Utilities Commission of Ohio, and the housing is mid-century and later, so both leaks and CSST bonding turn up depending on the street.',
    ],
    commonIntro:
      "Across Mount Carmel's mid-century and later homes in Union Township, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Mount Carmel ZIP is the same as Newtown’s. Which county inspects my gas work?',
        a: 'Clermont County, because Mount Carmel is in Union Township, Clermont County. Newtown and Turpin Hills share 45244 but sit in Hamilton County. The ZIP is a postal boundary and crosses the county line, so the address decides it. Filing off the ZIP is a real source of delay here, and worth asking about before you book.',
      },
    ],
  },

  summerside: {
    intro:
      'Gas shut off in Summerside? Clermont County inspects, not Hamilton. Call (513) 586-5107.',
    relevance: [
      'Summerside (ZIP 45245) is a mid-century and later community in Union Township, Clermont County, and the jurisdiction is worth stating plainly: permits and inspections go through Clermont County rather than Hamilton County or the city of Cincinnati. Plenty of contractors working the east side default to Hamilton, and the utility waits on the correct sign-off before it will reconnect.',
      'The housing spans enough years that the piping does too. On the older streets it is rigid black iron installed with the house, where a pressure test finds aged joints and capped stubs from appliances removed decades ago. On the newer streets it is often CSST, where the common finding is bonding to the electrical grounding system rather than a leak.',
    ],
    commonIntro:
      "Across Summerside's mid-century and later homes in Union Township, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Does Hamilton County handle permits for my Summerside house?',
        a: 'No. Summerside is in Union Township, Clermont County, so the permit and inspection go through Clermont County. It is a common default for contractors who work mostly on the Hamilton County side, and getting it wrong means waiting while the filing is redone rather than anything wrong with the work.',
      },
    ],
  },
};
