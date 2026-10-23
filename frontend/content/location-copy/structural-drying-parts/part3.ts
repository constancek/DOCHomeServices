export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro: 'Shared framing between apartments is what structural drying in Villages of Roll Hill usually involves. In these closely packed multi-unit buildings, water travels inside a party wall into the unit next door, so we meter both sides and dry until each unit reads down to a dry standard.',
    relevance: [
      'Villages of Roll Hill is built as multi-unit apartment buildings packed close together, which means the wall between two units is often a shared, party wall carrying the framing for both. When a line lets go, water does not respect that boundary — it travels inside the cavity from the unit where it started into the studs and drywall of the one next door, so a unit that never saw standing water can still be holding moisture inside its walls.',
      'We meter the shared framing on both sides of the wall, not just the unit that flooded, and set air movers and dehumidifiers until the studs and drywall in each affected unit read down to a dry standard taken from an untouched wall in the same building. A household fan in one unit does nothing for the water sitting in the shared cavity, which is why these calls run on real drying equipment and daily readings rather than a guess.',
    ],
    commonIntro: 'In the multi-unit buildings of Roll Hill, the drying work we do most often is:',
    localFaqs: [
      { q: 'The neighboring unit flooded but mine looks fine — could my wall still be wet?', a: 'Yes. Water moves through a shared wall cavity well past the surface it started on, so a wall that looks dry can still be holding moisture in the studs. We meter both sides before deciding anything is dry.' },
    ],
  },
  'east-westwood': {
    intro: 'Plaster walls that feel dry but still smell are a common structural drying job in East Westwood. On the slopes between Westwood and the Mill Creek valley, we meter the lath and framing behind early- and mid-1900s plaster and run dehumidifiers until the same spots reach the dry standard.',
    relevance: [
      'East Westwood runs down the hillside grade between Westwood and the Mill Creek valley, with streets of early- and mid-1900s houses built with plaster over wood lath. Plaster is dense, and it holds water deep behind a surface that dries first and fastest — you can put a hand on the wall and feel nothing while the lath and the framing behind it are still saturated.',
      'We meter behind the plaster, not just the face of it, and run dehumidifiers long enough to pull the moisture back out of the lath and studs, taking the same readings in the same spots each day until they hit the dry standard. That is the whole difference from opening a window and hoping: plaster that feels dry on the surface will still cup trim and grow mold behind the wall if the framing was never brought down to a real reading. If the water was clean and sat only on a sealed floor you wiped up inside the hour, none of this applies — nothing porous took it on.',
    ],
    commonIntro: 'In East Westwood’s older plaster homes, the drying work we handle most often is:',
    localFaqs: [
      { q: 'My plaster wall feels dry now — why do you still need equipment?', a: 'Plaster dries at the surface long before the lath and framing behind it do. We meter behind the wall, and if those readings are still high the equipment stays until they come down, because that hidden moisture is what causes the smell and the mold later.' },
    ],
  },
  'western-hills': {
    intro: 'When a water heater empties across a finished basement in Western Hills, structural drying usually saves the drywall and loses the carpet pad. In the homes off Glenway Avenue we meter the bottom edge of the drywall and the slab daily until both match a dry standard.',
    relevance: [
      'Western Hills, the established west-side area around Western Hills Plaza and Glenway Avenue, is built of early-1900s through mid-century homes, and many of those basements were later finished with drywall over the walls and carpet over the slab. When a tank splits down there, the water wicks up into the bottom of the drywall and soaks straight through the carpet into the pad beneath it, where it is held against the concrete.',
      'The carpet pad usually cannot be dried in place and comes up, but drywall that was wet with clean water and not contaminated can very often be dried where it stands. We meter the bottom edge of the drywall and the slab, set air movers and dehumidifiers, and read the same points daily until they match a dry standard from elsewhere in the basement. A small amount of clean water on a sealed slab that you wiped up within the hour does not need any of this.',
    ],
    commonIntro: 'In Western Hills’ finished basements, the drying work we see most often is:',
    localFaqs: [
      { q: 'Do you have to tear out all my basement drywall?', a: 'Less often than people expect. Drywall wet with clean water can usually be dried in place if we start soon enough. The carpet pad is what typically comes up, because it holds water against the slab and cannot be dried where it lies.' },
    ],
  },
  'california': {
    intro: 'Engineered flooring over a wet slab is the usual structural drying problem in California. On this low riverfront ground along Kellogg Avenue near Riverbend, sealed plank traps water against the concrete, so we meter through the seams, lift planks where needed and remove anything river water contaminated.',
    relevance: [
      'California is Cincinnati’s far-east riverfront neighborhood on low ground beside the Ohio River near Riverbend, and lower levels here are often finished with engineered or laminate flooring laid over a concrete slab. That flooring traps water against the slab — moisture cannot rise back up through a sealed plank, so it sits underneath, and the surface can look perfectly dry while the slab below reads soaked.',
      'We meter the slab through the seams and, where the flooring cannot let moisture escape, lift the affected planks so the concrete can actually dry, then run dehumidifiers and read the slab daily until it holds a dry standard. Guessing here is expensive: a slab left wet under new flooring pushes the moisture right back into it. If storm water came in from the river, that is contaminated and porous material is removed rather than dried — a separate call from a clean-water leak.',
    ],
    commonIntro: 'Along California’s riverfront homes, the drying work we handle most often is:',
    localFaqs: [
      { q: 'The floor looks dry on top — is the slab underneath really still wet?', a: 'It can be. Engineered and laminate planks seal the water against the concrete, so the surface dries while the slab holds moisture. We meter the slab itself, and if it reads high the flooring often has to come up so the concrete can dry.' },
    ],
  },
  'carthage': {
    intro: 'Plaster hides water behind a face that dries first, which is why structural drying in Carthage reads the lath, not the surface. In the early-1900s houses off Vine Street, a desiccant dehumidifier draws water out of the dense coat until a pin meter matches an untouched wall.',
    relevance: [
      "Carthage sits along Vine Street, a former village of early-1900s houses finished in plaster over wood lath. Plaster is dense and porous at once: it draws water deep into the coat and the lath behind it, then releases it slowly, so a wall can read bone-dry under your hand while the material two inches in is still soaked.",
      "For plaster that dense we bring a desiccant dehumidifier, which drops the air well below what a standard unit manages and keeps drawing water out of the coat, with air movers across the wall face to move it along. We read the lath with a pin meter, not the surface, and compare it to an untouched wall in the same house until the two match. A box fan only skins the face.",
    ],
    commonIntro: 'In Carthage’s older plaster homes, the drying work we see most often is:',
    localFaqs: [
      { q: "Can I just point a box fan at the wall to dry it out?", a: "A box fan dries the face of the plaster and leaves the coat and lath behind it wet, which is where the smell comes from. Pulling water out of dense plaster takes a dehumidifier drying the air enough to draw it from the material, and a pin meter into the lath to prove it is gone rather than just gone from the surface." },
    ],
  },
  'winton-hills': {
    intro: 'Water that crosses a shared wall is what makes structural drying in Winton Hills a multi-unit job. In the buildings near Winton Road, water from one unit runs inside the party-wall cavity into the studs next door, so we meter both sides and set equipment in every unit it reached.',
    relevance: [
      'Winton Hills, near Winton Road on the north side, includes densely built multi-unit housing where units share party walls and, often, the framing behind them. Water from a failed line in one unit does not stop at the paint — it runs inside the shared cavity into the studs and drywall of the unit next door, so a neighbor who never saw a drop can still have wet framing behind a dry-looking wall.',
      'We meter the shared framing on both sides of the wall and set air movers and dehumidifiers in every unit the moisture reached, reading the same points each day until the studs and drywall hold a dry standard. Fans in one unit do nothing for the water sitting in the shared cavity next door. If a small spill of clean water stayed on a sealed floor and was wiped up within the hour, there is nothing porous left to dry and no call is needed.',
    ],
    commonIntro: 'In Winton Hills’ multi-unit buildings, the drying work we handle most often is:',
    localFaqs: [
      { q: 'Do you dry more than one unit when the water crossed a shared wall?', a: 'Yes. We meter the framing on both sides of a shared wall and dry every unit the moisture reached, not only the one where the leak started, because the studs inside a party wall carry water from one unit into the next.' },
    ],
  },
  'roselawn': {
    intro: 'An overflowing washer or dishwasher line is a common start to structural drying in Roselawn. Along Reading Road, the carpet dries in a day while the pad and the bottom foot of drywall keep holding water, so we float the carpet, dry clean pad in place and meter daily.',
    relevance: [
      "Roselawn runs along Reading Road with mid-century houses and older apartments, most laid with carpet over pad and drywall carried down to the floor. When an appliance line overflows, the carpet on top dries in a day while the pad under it and the bottom foot of the drywall keep holding water out of sight.",
      "Where the pad stayed clean we float the carpet back and run air movers underneath it, drying the pad in place rather than tearing it out, with a dehumidifier holding the room. The decision to stop is not a guess: we read the same points on the pad and drywall every day and compare them to a reading from an untouched part of the house, and the equipment comes out only when the two hold level.",
    ],
    commonIntro: 'Across Roselawn’s mid-century homes and apartments, the drying work we see most often is:',
    localFaqs: [
      { q: "How do you decide the carpet and drywall are finally dry?", a: "We take a reading from an unaffected part of the house first, that is the target, then read the same spots on the pad and drywall every day. When the affected material holds at that target across a full day it is dry. A single low reading does not settle it, and neither does the carpet feeling dry underfoot." },
    ],
  },
  'mount-airy': {
    intro: 'Laminate over a wet slab is a regular structural drying job in Mount Airy. On the wooded streets around Mount Airy Forest, sealed plank traps moisture against the concrete, so we scan through the seams, lift planks over the wet area and dry the slab with air movers set low.',
    relevance: [
      "Homes on the wooded streets around Mount Airy Forest often carry laminate or engineered plank over a concrete slab on the lower level. Those planks seal the slab: moisture cannot rise back through them, so it spreads sideways underneath and the top can feel dry the whole time the concrete is saturated.",
      "We scan the slab through the seams first, and where the reading is high we lift the planks over the wet area so the concrete has somewhere to send its moisture, then set a refrigerant dehumidifier and air movers low across the slab. We read the slab daily against a reading elsewhere in the house. Clean water wiped off a sealed floor inside the hour never reaches the slab and needs none of this.",
    ],
    commonIntro: 'Across Mount Airy’s mid-century homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "The laminate feels dry on top — is the slab underneath really still wet?", a: "It can be, for days. Laminate and engineered plank trap moisture against the concrete instead of letting it rise, so the surface dries while the slab holds water. We meter the slab itself, and if it reads high the planks over that area come up so the concrete can dry to a real number." },
    ],
  },
  'hartwell': {
    intro: 'The first day or two decides whether original hardwood survives, so structural drying in Hartwell starts with drying mats. In these Victorian and early-1900s streetcar-suburb houses, mats draw water up through the boards while a dehumidifier holds the room, and a pin meter tracks progress daily.',
    relevance: [
      "Hartwell grew up as a streetcar suburb and kept its Victorian and early-1900s houses, many still on their original solid hardwood. Solid wood takes water in and moves as it dries: left to go slowly, the boards cup, crown, and pull at the seams, and once the wood has moved that shape is permanent.",
      "Reached early, we lay drying mats over the boards that draw the water up through the wood from above while a dehumidifier holds the room, which is a very different thing from waiting for a floor to dry on its own. We track wood moisture content with a pin meter each day against an unaffected floor in the same house and keep the mats down until the two read the same.",
    ],
    commonIntro: 'In Hartwell’s Victorian and early-1900s homes, the drying work we see most often is:',
    localFaqs: [
      { q: "Can my old hardwood be saved, or does it have to come out?", a: "The sooner the mats go down, the more of it stays. Drawing the water up through the boards before they cup for good is what saves a floor, and we read the wood moisture daily to watch it happen. The floors that are lost are almost always the ones left to dry slowly on their own." },
    ],
  },
  'kennedy-heights': {
    intro: 'When water from an upper floor reaches the rooms below, structural drying in Kennedy Heights has to cover the whole path at once. In these big two- and three-storey early-1900s homes, we size equipment to every affected room and read each one daily.',
    relevance: [
      "The big early-1900s homes of Kennedy Heights, a hilltop that began as a Victorian resort and still centers on its arts center, run two and three stories. Water that starts high does not stay put: it follows ceilings and wall lines down into the rooms below, wetting drywall, framing, and flooring in several places at once.",
      "A spread that wide needs air movers and dehumidifiers in every affected room at the same time, sized to each room rather than shuffled from one to the next, so we stage the equipment across all of them together and read each room daily against a reference elsewhere in the house. Drying rooms one at a time lets the ones still waiting keep wicking. Any room where clean water only touched a sealed floor and was wiped up within the hour stays off the list.",
    ],
    commonIntro: 'In Kennedy Heights’ large historic homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "Water reached several rooms — can you dry all of them at once?", a: "Yes. We bring enough air movers and dehumidifiers to run every affected room together, each sized to its room, and meter each one daily. Drying a big spread room by room only lets the rooms that are waiting hold their water longer, so we cover the whole path from the start." },
    ],
  },
  'st-bernard': {
    intro: 'Plaster that still reads wet days after a leak is common structural drying work in St. Bernard. In the dense early-1900s grid around Ivorydale, a low-grain dehumidifier and air movers keep pulling water from the coat until a pin meter in the lath matches an untouched wall.',
    relevance: [
      "Built up around the Procter and Gamble Ivorydale works, St. Bernard is a dense grid of early-1900s houses finished in plaster over wood lath. That plaster holds water well behind its face, and the lath behind it is the last thing in the wall to give the moisture up.",
      "We run a low-grain-refrigerant dehumidifier here, which keeps the room air dry enough to keep pulling water out of the coat, and hold it with air movers until a pin meter into the lath comes down to a reading from an untouched wall. Being its own city does not change the work: St. Bernard sits in the middle of our area and the equipment goes in the visit we arrive.",
    ],
    commonIntro: 'In St. Bernard’s dense, early-1900s homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "St. Bernard is its own city — do you still bring drying equipment here?", a: "Yes. St. Bernard sits right in the middle of our service area, ringed by Cincinnati, so it is a short run, and we bring the same dehumidifiers, air movers, and meters, reading the lath behind the plaster the way we would anywhere else." },
    ],
  },
  'elmwood-place': {
    intro: 'Finished basements on the valley floor are where most structural drying in Elmwood Place happens. In these close-set early-1900s houses, water soaks the pad and wicks into drywall behind the trim, so we pull the base trim, lift pad that will not dry and meter daily.',
    relevance: [
      "Down on the valley floor, Elmwood Place packs its early-1900s houses close together, and many basements were later finished with drywall and carpet. Water reaches that lowest level easily here, soaking the pad against the slab and wicking up into the bottom edge of the drywall where it hides behind the trim.",
      "We pull the shoe and base trim off the wet sections so air can reach the back of the drywall and the sill behind it, take the pad up where it will not dry in place, and read the drywall and slab daily until they hold a reference reading. The equipment does run continuously and it is not silent, but stopping it to quiet the house overnight only lets the moisture even back out and adds days.",
    ],
    commonIntro: 'In Elmwood Place’s finished valley basements, the drying work we see most often is:',
    localFaqs: [
      { q: "How long will the equipment be in my basement, and is it loud?", a: "Most basements run three to five days, and yes, air movers and a dehumidifier make steady noise while they work. It is worth leaving them be: they only dry while they are running, so cutting them off for quiet costs more days than it saves. We pull them the moment the readings hold, not on a set schedule." },
    ],
  },
  'delhi-hills': {
    intro: 'Structural drying in Delhi Hills often reaches a wet slab under engineered plank without pulling the whole floor. In the mid-century homes of this Delhi Township community above the Ohio, we dry through the seams where they pass air and lift only boards over sections that will not clear.',
    relevance: [
      "Delhi Hills climbs the hills of Delhi Township above the Ohio, an old greenhouse and floral-growing area of mid-century homes, and lower levels here often run engineered plank over a slab. The plank caps the concrete, so water sits between the two and the surface reads dry while the slab stays wet.",
      "Engineered plank can sometimes be saved: where the seams will pass air we dry the slab through them under the floating floor rather than tearing it all out, and only lift the boards over the section that will not clear. We read the slab the same way each day and confirm it against an untouched area before anything closes back up. A slab left wet under intact flooring just feeds the moisture back into the boards.",
    ],
    commonIntro: 'Across Delhi Hills’ mid-century homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "Does the whole floor have to come up to dry the slab?", a: "Usually not. We lift only the planks over the section that will not dry through the seams and leave the rest down, then meter the slab to confirm it is dry before the boards go back. Pulling a whole floor when a few boards would do is how a small job turns into a big one." },
    ],
  },
  'golf-manor': {
    intro: 'A wall-drying system lets structural drying in Golf Manor reach a wet cavity without opening the wall. In this village’s modest mid-century houses, the drywall face dries first while insulation and framing stay wet, so we feed dry air in through small ports and read inside daily.',
    relevance: [
      "Golf Manor is a small village ringed by Cincinnati, a compact grid of modest mid-century houses with insulated exterior walls. The trouble sits inside the cavity: the drywall face dries first while the batt and framing behind it hold water against the studs, so the wall reads dry to the hand with enough moisture behind it to grow mold.",
      "Rather than open the whole wall, we feed dry air straight into the cavity through small ports with a wall-drying system, reaching the wet insulation and framing directly, while a dehumidifier takes the moisture out of the room. We read inside the cavity daily and stop when it holds a reference reading. Clean water wiped off a sealed floor within the hour never reaches a cavity and needs none of this.",
    ],
    commonIntro: 'In Golf Manor’s mid-century homes, the drying work we see most often is:',
    localFaqs: [
      { q: "The wall looks dry — could the insulation inside still be wet?", a: "Yes. Drywall dries at the face while the insulation and framing in the cavity stay wet, and a meter reads the difference. We feed dry air into the cavity through small ports so the equipment reaches the insulation rather than leaving it to hold moisture behind a dry-looking wall." },
    ],
  },
  'fairfax': {
    intro: 'Original hardwood is a race in Fairfax, and structural drying wins it only if the mats go down in the first day or two. Along Wooster Pike near Mariemont, we draw water up through the boards with mats and a dehumidifier and meter the wood daily.',
    relevance: [
      "Fairfax lines Wooster Pike near Mariemont, a small village of early- and mid-1900s houses that mostly kept their original solid hardwood. Solid wood soaks water up and warps as it dries, so boards left to dry slowly cup and crown and hold that shape for good.",
      "When we reach the floor in the first day or two, drying mats draw the water up through the boards while a dehumidifier keeps the room from feeding it back, and we read wood moisture against an unaffected floor each day until it comes down. What decides whether the floor lives is how early the mats go on, not how much equipment ends up in the room.",
    ],
    commonIntro: 'In Fairfax’s older homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "How fast do you have to start to save hardwood?", a: "The first day or two is what matters. Boards that get mats and a dehumidifier before they have finished cupping usually come back; boards left wet for a week rarely do. Fairfax is a short run for us near Mariemont, and hardwood is the job we push to reach the same day." },
    ],
  },
  'mack': {
    intro: 'Water under laminate in a Mack home stays trapped against the slab, which is where structural drying has to reach. In these Green Township houses we meter through the seams, run a low-grain dehumidifier and air movers, and say straight which boards can be kept.',
    relevance: [
      "Mack is a Green Township community of mid-century and newer houses, many with laminate or engineered plank over a slab downstairs. Laminate seals the slab tight, so water pools underneath while the top feels dry, and the longer it sits the more the plank core swells at the joints.",
      "We meter the slab through the seams and set a low-grain dehumidifier sized to the room with air movers along the floor. Laminate that has swollen at the joints has to come up; engineered plank caught early over a slab we dry often does not. We read the slab daily and do not close it up until the concrete holds a reference reading.",
    ],
    commonIntro: 'Across Mack’s mid-century and newer homes, the drying work we see most often is:',
    localFaqs: [
      { q: "Does the laminate have to be replaced, or can it be dried?", a: "It depends on the plank and the timing. Laminate that has already swollen and lifted at the joints does not go back and comes up; engineered plank caught early, over a slab we dry properly, often stays. We meter the slab before deciding, so the call is made on readings rather than a look." },
    ],
  },
  'monfort-heights': {
    intro: 'Monfort Heights walls often dry on the face while the cavity stays wet, so structural drying here opens only what the meter shows. In these Green Township mid-century homes we cut small low openings, aim air movers at the insulation and framing and close up at a reference reading.',
    relevance: [
      "Monfort Heights is a settled Green Township suburb of mid-century houses with insulated exterior walls. When water gets into one, the drywall face dries first and the insulation and framing inside the cavity stay wet, so the wall reads dry to the hand and still carries enough moisture to grow mold out of sight.",
      "We meter behind the face, and where a closed cavity will not dry we cut small inspection openings low on the wall so air movers can reach the insulation and framing directly, with a dehumidifier taking the released moisture out of the air. We read those points daily and close the wall only once they hold a reference reading. A fan on the surface never touches the water inside.",
    ],
    commonIntro: 'Across Monfort Heights’ mid-century homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "Why open the wall instead of just running a fan on it?", a: "A fan dries the drywall face and leaves the insulation and framing behind it wet, and a sealed cavity will not clear on its own. A small opening lets the air movers reach the water where it actually is. We cut only what the meter says needs it and read inside the cavity before closing it back up." },
    ],
  },
  'bridgetown': {
    intro: 'Finished basements take most of the structural drying in Bridgetown. In these Green Township homes, pad and the bottom of the drywall hold water long after the floor looks dry, so we lift the pad, set a low-grain dehumidifier and run air movers day and night.',
    relevance: [
      "Bridgetown is a Green Township community of mid-century and newer houses, plenty of them with a finished basement of drywall and carpet. Water down there soaks the pad against the slab and climbs into the bottom of the drywall, both of which hold it long after the floor looks dry.",
      "We take up the pad where it will not dry, set a low-grain dehumidifier at the center and space air movers around the perimeter to push air along the wet walls, and read the bottom of the drywall and the slab daily against a reference reading. The equipment earns its keep by running without breaks.",
    ],
    commonIntro: 'Across Bridgetown’s finished basements, the drying work we see most often is:',
    localFaqs: [
      { q: "Does the equipment really have to run overnight?", a: "Yes, without stopping. Drying only happens while it runs, and switch it off for the night and the moisture spreads back through the pad and drywall by morning. Turning it off to sleep is the most common reason a basement takes twice as long to dry." },
    ],
  },
  'finneytown': {
    intro: 'A wet slab under engineered plank is common structural drying work in Finneytown. In this Springfield Township community of mid-century houses, we meter through the seams, lift plank over the wet area and dry the concrete, pulling equipment on the reading rather than a fixed number of days.',
    relevance: [
      "Finneytown is a settled Springfield Township community of mid-century houses, many with engineered or laminate plank over a slab downstairs. The plank keeps moisture from rising, so the slab holds water under a surface that looks and feels dry.",
      "We meter the slab through the seams, lift the plank over the wet area, and dry the concrete with air movers set low to sweep the surface and a dehumidifier pulling the room down. A slab gives its water up slowly, so we read the same points each day and pull the equipment on the number, not on a fixed count of days.",
    ],
    commonIntro: 'Across Finneytown’s mid-century homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "How many days does drying a wet slab take?", a: "Most run three to five days, but a slab under sealed plank can take longer because the moisture has fewer ways out. We do not work to a fixed number: we meter the slab daily and pull the equipment when it reaches a reference reading, whether that is sooner or later than the average." },
    ],
  },
  'amberley': {
    intro: 'A slow leak in a large Amberley Village home can travel well past the room it started in, so structural drying here begins by metering out to find the real edge. We then stage air movers and dehumidifiers across every room inside it and remove them as each reads dry.',
    relevance: [
      "Amberley Village is large homes on big wooded lots, and square footage is exactly why a slow leak here can run unseen and travel: water follows framing and subfloor well past the room it started in, and the visible wet patch is usually the smallest part of it.",
      "Before we set anything we meter out from the wet area to find where the moisture actually stops, because that line sits well beyond what you can see. Then we stage air movers and dehumidifiers across every room inside it and read each one daily against a reference, pulling equipment room by room as each reaches it. Any room where clean water only touched a sealed floor and was wiped up within the hour stays off the map.",
    ],
    commonIntro: 'In Amberley’s large homes, the drying work we see most often is:',
    localFaqs: [
      { q: "How do you know how far the water actually spread?", a: "We meter outward from the wet area until the readings drop to a dry reference, which marks the real edge. Water travels further along a subfloor and inside a wall than the stain on the surface shows, so drying only what looks wet leaves damp material behind the line to grow mold." },
    ],
  },
  'arlington-heights': {
    intro: 'Structural drying in Arlington Heights usually starts in a finished basement on the valley floor. In this compact Mill Creek village, we drill small vent holes behind the base trim so air reaches the back of the drywall, lift wet pad and meter drywall and slab daily.',
    relevance: [
      "Arlington Heights sits low in the Mill Creek valley, a compact grid of older houses whose basements are often finished with drywall and carpet. On this ground water finds the lowest level fast, soaking the pad against the slab and wicking into the bottom of the drywall where the trim hides it.",
      "We drill small vent holes behind the base trim so air movers can dry the back of the drywall and the cavity without cutting the wall open, and take up the pad where it holds water against the slab. We read the drywall and slab daily against a reference and pull the equipment when both hold.",
    ],
    commonIntro: 'In Arlington Heights’ finished valley basements, the drying work we handle most often is:',
    localFaqs: [
      { q: "Does the carpet pad always have to come out?", a: "Not always, but often. Pad that stayed clean can sometimes be dried in place; pad that held dirty water or sat wet against the slab too long comes up, because it holds moisture where nothing can reach it. The drywall above it, wet with clean water, can usually be dried and kept." },
    ],
  },
  'north-college-hill': {
    intro: 'Water from an upstairs line runs down wall cavities on its way to the lowest level, so structural drying in North College Hill reads behind the surface. In these early- and mid-1900s homes we open sealed cavities small and dry insulation and framing to a dry standard.',
    relevance: [
      'North College Hill is a small, densely built city of early- and mid-1900s homes running on decades-old plumbing. When a line lets go on an upper floor, the water runs down inside the wall cavities on its way to the lowest level, wetting the insulation and framing behind a surface that dries first — the drywall can read dry to the hand while the cavity behind it is still saturated.',
      'We meter behind the surface, not just the face, and where a sealed cavity cannot dry on its own we make small controlled openings so air movers and dehumidifiers can reach the insulation and framing, reading those points daily until they hold a dry standard. North College Hill being its own city does not change our reach. Clean water wiped off a sealed floor within the hour is the one case with nothing porous left to dry.',
    ],
    commonIntro: 'In North College Hill’s older homes, the drying work we see most often is:',
    localFaqs: [
      { q: 'The wall the water ran down looks dry now — is it?', a: 'Not necessarily. Water from an upstairs line runs inside the wall cavity, wetting the insulation and framing behind a surface that dries first. We meter behind the wall, and a sealed cavity usually needs a small opening so the equipment can dry it properly.' },
    ],
  },
  'newtown': {
    intro: 'Whether the water was clean decides structural drying in Newtown. On this low ground near the Little Miami, clean water from a burst line dries in place, while storm water means the pad and soaked lower drywall come out before we dry the framing and slab.',
    relevance: [
      "Newtown sits on low river-bottom ground near the Little Miami, its older homes often finished downstairs with drywall and carpet. Clean water from a burst line is one job; storm water pushed in from outside is another, because that water is contaminated and cannot be dried clean.",
      "Where the water was clean we dry the drywall and slab in place, reading them daily against a reference. Where storm water came in, the pad and the soaked bottom of the drywall come out first and we dry the framing and slab that remain rather than seal contamination behind a dry-looking wall. We tell you which case you have before any equipment goes in.",
    ],
    commonIntro: 'In Newtown’s river-bottom homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "The water came in from the storm — can you just dry the drywall in place?", a: "Not if it was storm water. That water is contaminated, so the pad and the soaked lower drywall come out rather than get dried, and we dry the framing and slab left behind. Clean water from an indoor line is different: that drywall can usually be dried and kept. We tell you which you have first." },
    ],
  },
  'turpin-hills': {
    intro: 'A non-invasive scan finds the wet patch before structural drying starts in Turpin Hills. Under the engineered plank in these Anderson Township homes, we confirm with a probe, lift plank only where it reads high and pull equipment the day the slab holds a reference.',
    relevance: [
      "Turpin Hills is an Anderson Township community of mid-century and newer houses, many with engineered or laminate plank over a slab downstairs. The plank seals the concrete, so the slab can read wet on a meter while the surface feels dry.",
      "We start with a non-invasive scan across the slab to find the wet area without drilling, confirm it with a probe, and lift plank only where the reading is high, then run a dehumidifier and air movers on that section. We read the slab daily and pull the equipment the day it holds a reference, which keeps the run as short as the concrete allows.",
    ],
    commonIntro: 'Across Turpin Hills’ homes, the drying work we see most often is:',
    localFaqs: [
      { q: "What does it cost to run the equipment for days on end?", a: "Air movers and a dehumidifier do add to the power bill while they run, which is one more reason we size the equipment to the wet area rather than flood the room with machines, and pull it the day the slab reads dry. Running longer than the readings call for wastes power without drying anything further." },
    ],
  },
  'silverton': {
    intro: 'Plaster gives its water up slowly, so structural drying in Silverton takes longer than a drywall job. In the early- and mid-1900s houses along Montgomery Road, we angle air movers across the wall, run a dehumidifier without breaks and read the lath against an untouched wall.',
    relevance: [
      "Silverton runs along Montgomery Road, a small city of early- and mid-1900s houses finished in plaster over lath. Plaster carries water deep and releases it at its own pace, far slower than drywall, so the face dries early while the coat and lath stay wet well after.",
      "We angle air movers across the wall face and run a dehumidifier without breaks, because plaster does not answer to a quick pass, and we read the lath with a pin meter against an untouched wall until it comes down. The number decides when we stop, not the calendar.",
    ],
    commonIntro: 'In Silverton’s older plaster homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "Why does plaster take so much longer than drywall to dry?", a: "Plaster is denser and holds water deeper, and it lets that water go slowly, so the equipment often runs several days past the point the surface feels dry. That is why we meter the lath rather than trust the face, and keep the dehumidifier on it until the reading, not the feel, says it is dry." },
    ],
  },
  'lockland': {
    intro: 'Structural drying in Lockland works to a measured standard, not a hunch. In this mill village’s closely spaced worker houses, finished basements on the valley floor soak pad and drywall, so we lift the pad and dry until readings match part of the house the water never reached.',
    relevance: [
      "Lockland grew up around mills on the valley floor, and its closely spaced worker houses often have basements finished later with drywall and carpet. Low ground sends water to that lowest level readily, into the pad against the slab and the bottom edge of the drywall.",
      "We take up the pad where it holds water, set a refrigerant dehumidifier and space air movers around the perimeter to sweep the wet walls, and read the drywall and slab against a dry standard each day. That standard is a reading from part of the house the water never reached, and the equipment stays until the wet material matches it.",
    ],
    commonIntro: 'In Lockland’s finished valley basements, the drying work we see most often is:',
    localFaqs: [
      { q: "What does a 'dry standard' actually mean?", a: "It is a moisture reading taken from part of the house the water never touched, used as the target for the wet material. Drywall and framing are never bone-dry, they carry a little moisture normally, so we dry the affected area down until it matches that untouched reference rather than to some fixed number." },
    ],
  },
  'groesbeck': {
    intro: 'Wet insulation in a closed wall is the usual structural drying problem in Groesbeck. In these Colerain Township mid-century homes, damp batts dry through small openings, while saturated, matted insulation comes out so the framing behind it can dry to a reference reading.',
    relevance: [
      "Groesbeck spreads across Colerain Township, mostly mid-century houses with insulated exterior walls. Wet insulation in a closed cavity is the problem here: the drywall face dries and looks fine while the batt behind it holds water against the framing.",
      "We meter inside the cavity to see what we are dealing with. Insulation that is damp but intact we dry through small openings with air movers and a dehumidifier; insulation that is saturated and packed down does not recover and comes out so the framing behind it can dry. We read the framing daily and close the wall only once it holds a reference reading.",
    ],
    commonIntro: 'Across Groesbeck’s mid-century homes, the drying work we handle most often is:',
    localFaqs: [
      { q: "Does wet insulation get dried, or does it have to be replaced?", a: "It depends on how wet it is. Insulation that is only damp can be dried in place through a small opening; insulation that is soaked and matted down loses its loft and holds water against the framing, so it comes out and gets replaced. We meter the cavity before deciding either way." },
    ],
  },
  'mount-healthy': {
    intro: 'Cupping hardwood is a race against time for structural drying in Mount Healthy. In the early-1900s and mid-century houses around the old town center, drying mats draw water up through the boards and much of the cupping relaxes as a pin meter shows the wood coming down.',
    relevance: [
      "Mount Healthy keeps an old town center and streets of early-1900s and mid-century houses, many on their original solid hardwood. Solid wood takes water in and cups as it dries, the edges lifting above the center, and past a point that shape sets and the floor is lost.",
      "Reached early, drying mats draw the water up through the boards while a dehumidifier holds the room, and much of the cupping relaxes as the wood moisture comes down. We read the boards with a pin meter each day against an unaffected floor and keep the mats on until they match. Left to dry slowly, the boards keep their water and warp instead.",
    ],
    commonIntro: 'In Mount Healthy’s older homes, the drying work we see most often is:',
    localFaqs: [
      { q: "My boards are already cupping — will they flatten back out as they dry?", a: "Often, yes, if we start soon enough. Cupping is the wet underside swelling, and as drying mats bring the moisture down evenly much of that lift relaxes. Boards left wet for weeks stay cupped and have to be sanded flat or replaced, which is why the early days matter most." },
    ],
  },
};
