import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 6 — the northern Hamilton County cities and villages, the western river
// towns, and the first of Northern Kentucky. Two things change here: Harrison
// sits on the Indiana line, and everything across the river is served by Duke
// Energy Kentucky under the Kentucky PSC, with gas piping inspected under the
// state plumbing code rather than by a city building department.
export const part6: Record<string, LocationServiceCopy> = {
  northbrook: {
    intro:
      'Gas shut off at your Northbrook home? Colerain Township issues the permit. Call (513) 586-5107.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community of mid-century and later single-family homes, and the paperwork question comes first on a shutoff: permits and inspections go through Colerain Township and Hamilton County rather than the city of Cincinnati. The utility waits on the correct sign-off, so a filing sent to the wrong office costs you days with no hot water.',
      'The housing spans enough years that the piping does too. On the older streets it is rigid black iron installed with the house, where a pressure test finds aged joints and capped stubs from appliances removed decades ago. On the later streets it is often CSST, flexible tubing with a yellow jacket, where the common inspection finding is bonding to the electrical grounding system rather than a leak at all.',
    ],
    commonIntro:
      "Across Northbrook's mid-century and later Colerain Township homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does a Northbrook gas repair need a Cincinnati permit?',
        a: 'No. Northbrook is in Colerain Township, so the permit and inspection go through the township and Hamilton County. Worth asking any plumber whether they have filed in Colerain specifically — getting it wrong is a delay while the paperwork is redone rather than a problem with the work itself.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Gas shut off in Indian Hill? Long service runs and outbuildings on the same system. Call (513) 586-5107.',
    relevance: [
      'Indian Hill (ZIP 45243) is large houses on multi-acre wooded lots, and the scale changes the job in two concrete ways. The run from the meter to the house is often long, and the system rarely stops at the house — pool heaters, guest houses, garages, barns, outdoor kitchens and standby generators are commonly on gas, each a branch with joints and a valve.',
      'A pressure test covers all of it together, so diagnosing a shutoff here takes longer than on a suburban lot simply because there is more system to isolate. Outbuilding and outdoor runs are also the ones most often added without a permit over the years, which makes them both a likely source and a likely inspection issue. Tell us what is out there when you call. The village runs its own building department and inspections rather than the county.',
    ],
    commonIntro:
      "Across Indian Hill's large properties with extensive gas systems and outbuildings, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'We have gas to a pool heater and a barn in Indian Hill. Does that affect the test?',
        a: 'Yes, and it is better raised at the start than found halfway through. Each is a branch the pressure test covers, and outbuilding runs added over the years are frequently where a failure sits — they are also the ones most likely to have gone in without a permit. Knowing they exist lets us quote the real job rather than revise it later.',
      },
    ],
  },

  evendale: {
    intro:
      'Gas shut off in Evendale? Residential and plant gas work are different trades. Call (513) 586-5107.',
    relevance: [
      'Evendale (ZIP 45241) is a village of modest residential streets alongside one of the largest industrial sites in the region, and the two need saying apart. On the houses a gas shutoff is the ordinary job — test the system, correct what fails, get it inspected, and the utility reconnects.',
      'Large industrial meter sets and process piping are a different trade with different certification, and if that is what you have we will say so on the phone rather than send someone out to look. Our work here is residential and light commercial. Evendale is its own village and issues its own permits and inspections, and ZIP 45241 also covers Sharonville, which is a separate city with its own office.',
    ],
    commonIntro:
      "Across Evendale's residential streets, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you do the gas at my Evendale commercial unit?',
        a: 'Depends on the size of the service, and we would rather settle that on the phone than waste your afternoon. Residential and light commercial systems are our work. Large industrial meter sets and process piping need a different certification, and if that is what you have we will tell you straight rather than turn up and hand it back.',
      },
    ],
  },

  glendale: {
    intro:
      'Gas shut off in Glendale? A National Historic Landmark district, so exteriors matter. Call (513) 586-5107.',
    relevance: [
      'Glendale (ZIP 45246) is a National Historic Landmark district — one of the earliest planned suburbs in the country — and that shapes what can be done outside a house. Interior gas work is a normal job: test, repair, inspect. Anything visible from the street, particularly relocating a meter or running new pipe on an exterior wall, needs establishing before it is designed rather than after a route is agreed.',
      'The houses themselves are large Victorians and early-1900s homes, which means extensive systems and, in many cases, gas lines that were capped at the wall when electric lighting arrived rather than removed. Those runs are still connected a century later, and a cap that has held for decades can begin to weep. Locating one means isolating sections rather than opening original plaster on a hunch. Glendale issues its own permits and inspections.',
    ],
    commonIntro:
      "In Glendale's large Victorian and early-1900s houses inside the historic district, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Will the historic designation stop me getting gas back in Glendale?',
        a: 'Not for interior work — testing and repairing the system inside the house is a normal job on a village permit. The designation matters for anything visible from the street, so a meter move or exterior pipe run needs checking before it is designed. We establish which applies to your address at the start rather than after a plan is agreed.',
      },
    ],
  },

  sharonville: {
    intro:
      'Gas shut off in Sharonville? Its own city permits, and mixed piping ages. Call (513) 586-5107.',
    relevance: [
      'Sharonville (ZIP 45241) is its own city, spanning older housing near the historic centre and newer subdivisions further out, and the era of your street decides the likely finding. On the older side, rigid black iron altered in stages, where a test turns up aged joints and capped stubs from appliances long gone. On the newer side, CSST, where the usual issue is bonding to the electrical grounding system.',
      'Those are not comparable pieces of work, so we test before quoting rather than after. Sharonville issues its own permits and inspections, and 45241 also covers Evendale, a separate village with its own office — so the address decides the authority rather than the postal code.',
    ],
    commonIntro:
      "Across Sharonville's older centre and its newer subdivisions, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'How do I tell whether my Sharonville piping is black iron or CSST?',
        a: 'Look at the run near the meter or the furnace. Black iron is rigid dark pipe with threaded fittings; CSST is flexible tubing with a yellow jacket. It matters because the likely finding differs — leaks and capped stubs on black iron, bonding to the electrical grounding system on CSST — and the two are different jobs.',
      },
    ],
  },

  northgate: {
    intro:
      'Gas shut off at your Northgate home? Uniform mid-century piping and township permits. Call (513) 586-5107.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township community built out largely in one mid-century push, and that uniformity is genuinely useful. The houses were piped the same way at the same time and have aged at a similar rate, so the findings on one street tend to hold for the next.',
      'It does not mean your system is failing. It means that if something does stop a reconnection, a section replacement is a more likely remedy here than a patch on a single joint, and it is worth knowing that before you are quoted. Permits and inspections go through Colerain Township and Hamilton County rather than the city.',
    ],
    commonIntro:
      "Across Northgate's uniformly mid-century homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'A neighbour on my Northgate street had gas piping replaced. Should I be worried?',
        a: 'Not worried, but it is fair to check. Houses here went in over a similar period and were piped the same way, so yours is likely the same vintage and condition. That does not mean it is failing — only that if a reconnection is ever held up, a section replacement is more likely than a patch. Worth a look when something else brings us out.',
      },
    ],
  },

  springdale: {
    intro:
      'Gas shut off in Springdale? On an apartment building the owner authorises the work. Call (513) 586-5107.',
    relevance: [
      'Springdale (ZIP 45246) is its own city, mixing mid-century single-family streets with a substantial amount of apartment housing, and on the apartments none of the gas system belongs to a resident. Where one system serves several units, a pressure test covers all of it and every household stays off until it passes — restored together on one permit and one inspection, which is cheaper than piecemeal but needs the building owner to act.',
      'What residents can usefully do is report how many units are affected and whether it is one building or several, because that tells management and us what the job actually is. On the single-family streets the picture is the ordinary one: original mid-century piping now feeding much newer appliances, with sizing worth checking alongside leaks. Springdale issues its own permits and inspections.',
    ],
    commonIntro:
      "Across Springdale's mid-century houses and apartment buildings, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Can you restore gas to just my Springdale apartment?',
        a: 'Only if the fault sits on a branch serving your unit alone. Where the building runs one system, a pressure test covers all of it and everyone comes back together — faster and cheaper than unit by unit, but it needs the owner to authorise it. We establish which arrangement the building has before quoting.',
      },
    ],
  },

  miamitown: {
    intro:
      'Gas shut off in Miamitown? Great Miami flooding reaches gas appliances here. Call (513) 586-5107.',
    relevance: [
      'Miamitown (ZIP 45041) sits on the Great Miami River in Whitewater Township, on low ground where flooding is a recurring event, and that is what most often takes the gas off. Where a furnace, boiler or water heater has been submerged, the gas control valve is replaced rather than dried out and relit — the damage is internal corrosion with nothing visible from outside, and a control that works today can fail unsafely later.',
      'Because it happens more than once here, plenty of properties are on their second or third water heater in the same spot, so the useful question during a replacement is whether the appliance can be raised. Venting is the constraint. Where a platform above the historic water line works, the cycle ends; where it does not, we will say so rather than build something that creates a different problem. Permits go through Whitewater Township and Hamilton County.',
    ],
    commonIntro:
      "On Miamitown's low ground beside the Great Miami, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'The Miamitown water heater has flooded twice. Can it be moved higher?',
        a: 'Sometimes, and it is worth asking during the replacement rather than after the next flood. The limit is the venting — a unit can only be raised so far before the flue run stops working properly. Where a platform above the historic water line is achievable it ends the cycle, and where it is not we will tell you rather than fudge it.',
      },
    ],
  },

  'forest-park': {
    intro:
      'Gas shut off in Forest Park? A planned city, so most systems share one vintage. Call (513) 586-5107.',
    relevance: [
      'Forest Park (ZIP 45240) was laid out and built as a planned community from the 1950s onward, which makes it unusually consistent. Most houses were piped in a comparable period to a comparable standard, so unlike the older neighborhoods where one street spans decades, the systems here have aged together.',
      'The practical consequence at a shutoff is that a sizing question is as worth asking as a leak question. A run adequate for the furnace, water heater and cooker of the original build may not supply a modern furnace and a tankless heater drawing at the same time — and that shows up as appliances misbehaving rather than as a failed pressure test. The two need different repairs. Forest Park is its own city with its own permits and inspections.',
    ],
    commonIntro:
      "Across Forest Park's planned mid-century housing, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Our Forest Park furnace acts up when the hot water runs. Is that a gas fault?',
        a: 'Possibly a sizing issue rather than a leak. A tankless water heater draws heavily in short bursts, and on a run sized for the original build that can pull pressure down enough for the furnace to misbehave. It has to be measured at the appliances with both drawing, and if that is the finding the fix is upsizing the run rather than hunting a fault.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Gas shut off in Pleasant Run? Springfield Township issues the permit. Call (513) 586-5107.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community of mid-century single-family homes, and the jurisdiction is worth naming because it is a separate authority from the west-side townships and from Forest Park, which shares the ZIP. Permits and inspections go through Springfield Township, and the utility waits on that sign-off before it will reconnect.',
      'The housing is consistent enough that the findings are predictable — original black iron installed with the houses, still in place, now feeding appliances replaced once or twice since. What a pressure test turns up here is the pipe rather than anything recent, and the accumulated capped stubs from appliances removed over sixty years are a frequent culprit.',
    ],
    commonIntro:
      "Across Pleasant Run's mid-century Springfield Township homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Is a Pleasant Run permit the same as a Forest Park one? We share a ZIP.',
        a: 'No. Pleasant Run is in Springfield Township and Forest Park is its own city, and both are in 45240. The ZIP is a postal boundary and has nothing to do with which office signs off. Filing in the wrong place means waiting while it is redone rather than a failed inspection.',
      },
    ],
  },

  cleves: {
    intro:
      'Gas shut off in Cleves? Ohio River flooding puts appliance controls under water. Call (513) 586-5107.',
    relevance: [
      'Cleves (ZIP 45002) is a small Ohio River village on the western edge of the county, on low ground where high water is a recurring event rather than a rarity. Where a furnace, boiler or water heater has been submerged, the gas control valve and burner controls are replaced rather than dried out — water corrodes them internally with nothing visible outside, and a control can fail closed or fail to shut when it should.',
      'Cleves issues its own permits and inspections, and being a small village the inspection queue rather than the plumbing usually decides how quickly gas comes back — which is why we file and book it when the work is scheduled rather than once it is finished. Where several neighbouring properties need the same work after the same high water, handling them together saves days.',
    ],
    commonIntro:
      "On Cleves' low river ground, where flooding reaches gas appliances, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'The Cleves furnace was under water but it lights fine. Do I need to do anything?',
        a: 'Yes, and stop lighting it. A submerged gas control valve can work today and fail unsafely later, because the damage is internal corrosion with nothing to see from outside. The control gets replaced rather than dried out. On some units that means a new appliance rather than a part, and we will tell you which before anything is ordered.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Gas shut off in North Bend? Low river ground and a very small village office. Call (513) 586-5107.',
    relevance: [
      'North Bend (ZIP 45052) is a small Ohio River village on low ground west of the city, and the two things that shape a gas shutoff here are water and scale. Submerged appliance controls are a recurring cause and they are replaced rather than dried out, because the corrosion is internal and a control that works today can fail unsafely later.',
      'The scale matters because North Bend issues its own permits and inspections with minimal capacity, and that queue rather than the plumbing usually sets the timeline. The plumbing side is frequently a single day. That is why the inspection is filed and booked when the work is scheduled, not after it is finished — and why coordinating neighbouring properties after the same high water is worth doing.',
    ],
    commonIntro:
      "On North Bend's low river ground, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'How long does a gas shutoff take to clear in North Bend?',
        a: 'The testing and repair are often one day. The variables are the village inspection, which has limited capacity here, and then the utility’s reconnect visit after the sign-off. We file and book the inspection when the work is scheduled rather than at the end, because that queue is usually what determines when you get hot water back.',
      },
    ],
  },

  loveland: {
    intro:
      'Gas shut off in Loveland? One city, three counties, and its own permit office. Call (513) 586-5107.',
    relevance: [
      'Loveland (ZIP 45140) is unusual in that the city spans three counties — mostly Clermont, partly Warren, with a small portion in Hamilton. For a gas shutoff the city of Loveland issues the permit and inspection regardless of which county your address falls in, so the county line is less of a trap than people expect. What does catch contractors out is assuming a township or county office when it is the city’s.',
      'The housing runs from old properties near the historic centre and the Little Miami through to newer subdivisions, so the piping spans eras. Older systems mean aged joints and capped stubs from appliances long removed; newer ones mean CSST, where the common inspection finding is bonding to the electrical grounding system rather than a leak.',
    ],
    commonIntro:
      "Across Loveland's older centre and its newer subdivisions, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'My Loveland address is in Warren County. Does that change the gas permit?',
        a: 'Not if you are inside the city limits — the city of Loveland issues the permit and inspection whether the address falls in Clermont, Warren or Hamilton County. It is worth confirming you are actually inside the city rather than in a neighbouring township, because that is where the authority genuinely changes.',
      },
    ],
  },

  harrison: {
    intro:
      'Gas shut off in Harrison? The Indiana line runs through this area. Call (513) 586-5107.',
    relevance: [
      'Harrison (ZIP 45030) sits right on the Indiana state line, and that matters more for gas than for most trades. On the Ohio side you are served by Duke Energy Ohio under the Public Utilities Commission of Ohio, on Ohio code, with the city of Harrison issuing the permit and inspection. A few minutes west across the line is a different state, a different utility company, a different regulator in the Indiana Utility Regulatory Commission, and different inspecting authorities.',
      'A plumber who has only worked one side can get the filing wrong, and that is a delay rather than a failed inspection — the paperwork comes back and is redone while the house sits without hot water. Otherwise the housing here spans older properties near the centre and newer subdivisions, so a pressure test finds either aged black iron and capped stubs or a CSST bonding issue.',
    ],
    commonIntro:
      "Across Harrison's older centre and newer subdivisions on the Ohio side of the state line, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does being next to Indiana affect getting my Harrison gas back on?',
        a: 'Not if your address is on the Ohio side — it is Duke Energy Ohio, Ohio code, and a city of Harrison permit. It matters because a contractor unfamiliar with the area can file on the wrong side of the line, and that means waiting while it is redone. Worth asking whoever you call whether they work both sides.',
      },
    ],
  },

  ludlow: {
    intro:
      'Gas shut off in Ludlow? Kentucky inspects gas piping under the state plumbing code. Call (513) 586-5107.',
    relevance: [
      'Ludlow (ZIP 41016) is a dense old river town in Kenton County, and two things differ from the Ohio side. Your gas comes from Duke Energy Kentucky, a separate operating company regulated by the Kentucky Public Service Commission rather than PUCO. And gas piping in Kentucky falls under the state plumbing code, with inspection running through the Kentucky Division of Plumbing rather than a city building department — a different process, and one a plumber who works mostly across the river can get wrong.',
      'The housing is genuinely old and closely spaced, much of it from an era when houses were lit by gas. Those lighting lines were usually capped at the wall rather than removed, so they are still on the system a pressure test covers, and a cap that has held for a century can begin to weep.',
    ],
    commonIntro:
      "In Ludlow's dense old river housing, on gas systems with a century of alterations, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Who inspects gas piping in Ludlow?',
        a: 'Kentucky handles it differently from Ohio. Gas piping falls under the state plumbing code and inspection runs through the Kentucky Division of Plumbing rather than a city building department. It is one of the practical reasons to use someone licensed and working on this side of the river regularly rather than assuming the Ohio process applies.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Gas shut off in Park Hills? Large hillside homes with extensive gas systems. Call (513) 586-5107.',
    relevance: [
      'Park Hills (ZIP 41011) is a small Kenton County city of substantial older homes on the hillsides around Devou Park, and houses of that scale and age carry more gas system than a modest house does — a furnace, sometimes two zones, a water heater, a range, and fireplaces added at various points. A pressure test covers every branch together, so isolating a fault takes longer here.',
      'The age brings the other issue: houses from this era were often lit by gas, and those lines were capped at the wall rather than removed when electric arrived. They are still connected behind original plaster. Your gas comes from Duke Energy Kentucky under the Kentucky Public Service Commission, and piping inspection runs through the state plumbing code rather than a city building department.',
    ],
    commonIntro:
      "In Park Hills' large older hillside homes, where abandoned gas-lighting lines often remain, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Will finding a leak in my Park Hills house mean opening plaster?',
        a: 'Sometimes, and we would rather tell you where before starting. We isolate and test in sections to narrow it down rather than opening walls speculatively, and existing chases and basement runs are used wherever they work. Where a wall genuinely has to come open we say so at the estimate, and we will discuss a longer route through unfinished space if it saves the original plaster.',
      },
    ],
  },

  bromley: {
    intro:
      'Gas shut off in Bromley? A tiny river city on ground that floods. Call (513) 586-5107.',
    relevance: [
      'Bromley (ZIP 41016) is a very small Kenton County river city on low ground, and high water is the recurring reason gas goes off. Where a furnace or water heater has been submerged, the gas control valve is replaced rather than dried out and relit — the corrosion is internal, nothing shows from outside, and a control that works today can fail unsafely later.',
      'Being this small means limited local capacity, and Kentucky adds its own process: gas piping is inspected under the state plumbing code through the Kentucky Division of Plumbing rather than a city building department, and the gas itself comes from Duke Energy Kentucky. Where several neighbouring properties need the same work after the same high water, handling them together saves days rather than each waiting separately.',
    ],
    commonIntro:
      "On Bromley's low river ground, where flooding reaches gas appliances, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Several Bromley houses lost gas in the same flooding. Is it worth coordinating?',
        a: 'It generally is. One plumber handling neighbouring properties together means shared setup, filings made as a batch, and the inspector covering several addresses in one visit. It does not change what each owner pays for their own appliances and piping, and in a small city it can save several days.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Gas shut off in Fort Wright? Duke Energy Kentucky, and mid-century piping. Call (513) 586-5107.',
    relevance: [
      'Fort Wright (ZIP 41011) is a Kenton County city of largely mid-century homes on the hillsides above the river, and the systems are consistent enough that the findings are predictable — original black iron sized for its era, now feeding appliances replaced once or twice since. Your gas comes from Duke Energy Kentucky rather than the Ohio company, under the Kentucky Public Service Commission.',
      'That vintage makes a sizing question worth asking alongside a leak question. A pressure test says whether the system holds. A measurement at the appliances with several drawing at once says whether the run can deliver what the house now demands, and a system can pass the test and still be too small. They need different repairs. Piping inspection here runs under the Kentucky state plumbing code.',
    ],
    commonIntro:
      "Across Fort Wright's mid-century hillside homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is my Fort Wright gas problem a leak or piping that is too small?',
        a: 'The pressure test settles the leak question — the system holds or it does not. Sizing is a separate measurement taken at the appliances with several running together. Plenty of houses of this era pass the test and still cannot supply everything they have been asked to run, and that fix is upsizing the run rather than chasing a fault.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Gas shut off in Fort Mitchell? Piping here is black iron or CSST, not both. Call (513) 586-5107.',
    relevance: [
      'Fort Mitchell (ZIP 41017) spans older housing near the Dixie Highway corridor and much newer subdivision streets, and which era your house belongs to decides the likely finding. On the older side, rigid black iron altered in stages, where a pressure test turns up aged joints and capped stubs from appliances removed decades ago. On the newer side, CSST — flexible tubing with a yellow jacket — where the usual issue is bonding to the electrical grounding system rather than a leak.',
      'Those are not comparable pieces of work, so we test before quoting. Your gas comes from Duke Energy Kentucky under the Kentucky Public Service Commission, and gas piping is inspected under the state plumbing code through the Kentucky Division of Plumbing rather than a city building department.',
    ],
    commonIntro:
      "Across Fort Mitchell's older streets and newer subdivisions, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'What is CSST bonding and why would it hold up my Fort Mitchell reconnection?',
        a: 'CSST is the flexible yellow-jacketed gas tubing used in newer houses, and it has to be bonded to the electrical grounding system so a nearby lightning strike cannot arc through the tubing wall. It is a common finding on inspection, it is usually a straightforward correction, and it has to be right before the sign-off the utility waits on.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Gas shut off in Villa Hills? Newer subdivisions mean CSST and bonding. Call (513) 586-5107.',
    relevance: [
      'Villa Hills (ZIP 41017) is largely newer subdivision housing on the Kenton County bluffs above the Ohio, and the piping reflects that. Rather than the rigid black iron of the older river towns, these houses are commonly run in CSST — flexible tubing with a yellow jacket — where the issue that most often shows up on inspection is bonding to the electrical grounding system rather than a leak.',
      'That bond exists so a nearby lightning strike cannot arc through the tubing wall, and where it is missing or has been disturbed by later work it has to be corrected before a sign-off. It is a smaller job than repiping, which is worth knowing before assuming the worst. Your gas comes from Duke Energy Kentucky under the Kentucky Public Service Commission, and piping inspection runs under the state plumbing code.',
    ],
    commonIntro:
      "Across Villa Hills' newer subdivisions, mostly piped in CSST, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Our Villa Hills house is fairly new. Why is there a gas problem at all?',
        a: 'Age is not the only cause. On houses of this era the finding is usually a CSST bonding issue, an appliance connector disturbed by later work, or an addition piped in without a permit. None of those are worn-out pipe, and most are a smaller correction than people fear when the gas goes off.',
      },
    ],
  },
};
