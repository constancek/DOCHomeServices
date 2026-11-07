// Location data for programmatic service × location pages.
//
// Built per local-service-page-playbook.md: each entry must carry ≥3 verifiable
// local specifics so sections 2 (intro), 4 (local relevance) and 9 (local proof)
// are genuinely UNIQUE per neighborhood — not boilerplate. Only add a location
// here if you can write that much real local detail for it.
//
// Phase 1 cohort: the west-side riverside + Price Hill cluster, where the
// "older housing stock → more plumbing emergencies" thesis is genuinely true.

export type Adjacent = { name: string; slug: string };

export type Location = {
  slug: string;
  neighborhood: string;
  // Parent city for a neighborhood (e.g. "Cincinnati"). Omit for standalone
  // municipalities so the H1 reads "Florence, KY" not "Florence, Florence, KY".
  city?: string;
  state: string;
  // ZIP only when confident — never fabricated. Used for PostalAddress schema.
  zip?: string;
  // County / group (matches content/areas.ts groups). Drives auto-adjacency.
  county?: string;
  // Section 2 — unique intro (primary keyword + same-day + phone in first 100 words)
  intro: string;
  // Section 4 — THE MOAT: 1–2 unique paragraphs, ≥3 verifiable local specifics
  relevance: string[];
  // Section 6 — one sentence tying common emergencies to local housing traits
  commonIntro: string;
  // Section 10 — at least one localized FAQ (in addition to shared ones)
  localFaqs: { q: string; a: string }[];
  // Section 12 — sideways links in the mesh. Optional: auto-computed from
  // same-county locations when not hand-curated.
  adjacent?: Adjacent[];
};

// DEPLOYED_LOCATION_SLUGS (every neighborhood we have copy for — no cohort cap)
// is defined right after the `locations` array below, derived from it.

export const locations: Location[] = [
  {
    slug: 'sedamsville',
    neighborhood: 'Sedamsville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    intro:
      'Emergency plumbing in Sedamsville usually starts with century-old pipe in the hillside homes above River Road. Many still carry galvanized risers and cast-iron drains from the late 1800s, where a pinhole leak can become a burst line overnight. We reach most homes on the hill the same day.',
    relevance: [
      "Sedamsville (ZIP 45204) is one of Cincinnati's historic riverside neighborhoods, sitting on the west side just east of Riverside, with Sayler Park farther west. Much of its housing climbs the hillside above River Road and dates to the late 1800s and early 1900s, which means aging galvanized supply lines, original cast-iron drains, and water lines that were never built to last a century.",
      'In homes that old, plumbing tends to fail suddenly and all at once — a pinhole leak in a galvanized riser becomes a burst line overnight, or a root-clogged cast-iron lateral backs a whole basement up after heavy rain off the hill. That is why a fast, local response matters here: the sooner the water is shut off, the less damage to original woodwork and finished lower levels.',
    ],
    commonIntro:
      "In Sedamsville's century-old hillside homes, the emergencies we see most often trace straight back to the age of the plumbing:",
    localFaqs: [
      {
        q: 'How fast can you reach Sedamsville?',
        a: 'We are based in the Cincinnati area and keep plumbers on call most days, so we reach most Sedamsville homes — including the hillside streets above River Road — the same day, often within hours.',
      },
    ],
    adjacent: [
      { name: 'Riverside', slug: 'riverside' },
      { name: 'East Price Hill', slug: 'east-price-hill' },
    ],
  },
  {
    slug: 'sayler-park',
    neighborhood: 'Sayler Park',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45233',
    intro:
      'Sayler Park sits along the Ohio River at the city’s west edge, and emergency plumbing here often starts with old pipe. The Victorian and early-1900s frame houses carry plumbing well past its service life, and those leaks arrive without warning. Most visits happen the same day.',
    relevance: [
      "Sayler Park (ZIP 45233) is Cincinnati's westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before it was annexed by Cincinnati in 1911, and it still reads that way: tree-lined streets and rows of Victorian and early-1900s frame houses.",
      'Two local factors drive emergency plumbing calls here. The riverfront streets sit beside the Ohio River, so heavy rain can push water toward basements in low-lying homes. And the original plumbing in those century-old frame houses is well past its service life, so leaks and pipe failures arrive without warning.',
    ],
    commonIntro:
      "Between the riverfront setting and the age of Sayler Park's frame homes, the emergencies we handle most often here are:",
    localFaqs: [
      {
        q: 'Do you cover Sayler Park even though it is on the far west edge of the city?',
        a: 'Yes. Sayler Park is well within our service area. We treat it like any other Cincinnati neighborhood and aim for same-day arrival, river streets included.',
      },
    ],
    adjacent: [
      { name: 'Riverside', slug: 'riverside' },
    ],
  },
  {
    slug: 'riverside',
    neighborhood: 'Riverside',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    intro:
      'For emergency plumbing, Riverside’s riverfront setting along River Road is the main factor. Heavy rain puts pressure on sump pumps, backwater valves and basement drains, and older drain lines make it worse. One heavy rain can turn a slow drain into a flooded lower level fast.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. It was its own village from 1867 until Cincinnati annexed it in 1896.',
      'Because the homes here sit between the hillside and the Ohio River, backwater valves, sump pumps, and basement drains all matter more in Riverside than they do up on the hill. Combine that with older housing and original drain lines, and a single heavy rain can turn a slow drain into a flooded lower level fast.',
    ],
    commonIntro:
      "On Riverside's low riverfront lots, the emergencies we are called out for most often are the water-intrusion kind:",
    localFaqs: [
      {
        q: 'My Riverside basement floods when the river is high — can you help?',
        a: 'Yes. We handle emergency backups and failed sump pumps, and we can recommend a backwater valve or pump setup suited to low-lying River Road homes so it is less likely to happen again.',
      },
    ],
    adjacent: [
      { name: 'Sedamsville', slug: 'sedamsville' },
      { name: 'Sayler Park', slug: 'sayler-park' },
    ],
  },
  {
    slug: 'east-price-hill',
    neighborhood: 'East Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45205',
    intro:
      'A burst line in one East Price Hill two-family can soak the unit next door, and that shapes most emergency plumbing here. Dense early-1900s frame homes around Warsaw Avenue run on brittle cast iron and galvanized pipe that fails without much warning.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats — the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing: two- and three-story frame homes and brick two-families built close together.',
      'That dense, century-old housing stock is exactly what keeps emergency plumbers busy. Shared walls and tight lots mean a burst line or sewer backup in one unit can affect the next, and original cast-iron and galvanized plumbing is brittle with age.',
    ],
    commonIntro:
      "In East Price Hill's dense, early-1900s homes and two-families, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Do you work on the older two-family homes common in East Price Hill?',
        a: 'Absolutely. We work on the multi-unit and two-family homes that fill the streets around Warsaw Avenue regularly, and we can isolate and repair a problem in one unit without shutting down the whole building.',
      },
    ],
    adjacent: [
      { name: 'West Price Hill', slug: 'west-price-hill' },
      { name: 'Lower Price Hill', slug: 'lower-price-hill' },
      { name: 'Sedamsville', slug: 'sedamsville' },
    ],
  },
  {
    slug: 'west-price-hill',
    neighborhood: 'West Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45238',
    intro:
      'Most emergency plumbing in West Price Hill comes from homes built between the 1920s and the 1950s along Glenway Avenue. Their original galvanized lines are closing up with corrosion, water heaters are near the end, and clay or cast-iron sewer laterals crack or fill with roots.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but "newer" here still means plumbing that is many decades old.',
      'In homes from that era we routinely find the original galvanized supply lines slowly closing up with corrosion, aging water heaters reaching the end of their life, and clay or cast-iron sewer laterals that crack or fill with roots. Any of those can go from a minor annoyance to an emergency overnight, which is why same-day service matters even in a quieter neighborhood like this one.',
    ],
    commonIntro:
      "Across West Price Hill's mid-century single-family homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How quickly can you get to West Price Hill off Glenway Avenue?',
        a: 'West Price Hill is squarely in our service area. We keep plumbers on call most days and aim to reach homes near Glenway Avenue the same day you call.',
      },
    ],
    adjacent: [
      { name: 'East Price Hill', slug: 'east-price-hill' },
      { name: 'Westwood', slug: 'westwood' },
    ],
  },
  {
    slug: 'lower-price-hill',
    neighborhood: 'Lower Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    intro:
      'Lower Price Hill’s 19th-century homes near State Avenue still run on old galvanized and cast-iron pipe, and emergency plumbing here often means one of those lines letting go. Many of these houses date from the 1850s, long before modern plumbing codes.',
    relevance: [
      "Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. Its National Register historic district holds Italianate, Classical Revival and Queen Anne homes, many from the 1850s and full of original plumbing.",
      'Those 19th-century homes were built long before modern plumbing codes, so many still run on old galvanized and cast-iron systems that fail without warning. Fast shutoff and cleanup are what keep a burst line from ruining a historic lower level.',
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century homes down in the valley, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the old 19th-century homes in Lower Price Hill?',
        a: 'Yes. We work on the historic 19th-century homes around State Avenue regularly and take care to repair aging galvanized and cast-iron plumbing without damaging original features.',
      },
    ],
    adjacent: [
      { name: 'East Price Hill', slug: 'east-price-hill' },
    ],
  },

  // ── Phase 2: central & uptown Cincinnati ──────────────────────────────
  {
    slug: 'over-the-rhine',
    neighborhood: 'Over-the-Rhine',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    intro:
      'One cracked cast-iron stack can reach several apartments in Over-the-Rhine, so emergency plumbing here starts with a fast shutoff. Buildings around Vine Street and Findlay Market went up in the 19th century, and their patchwork of galvanized risers and shared lines fails without much notice.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) is one of the best surviving examples of a 19th-century urban neighborhood in the country, with block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market. About 70% of its homes predate 1940.',
      'Buildings that old, many now split into apartments and condos, run on a patchwork of original and retrofitted plumbing: brittle cast-iron stacks, galvanized risers, and shared lines where a single failure can affect several units at once. That makes fast shutoff and an experienced hand essential when a pipe lets go in OTR.',
    ],
    commonIntro:
      "In Over-the-Rhine's 19th-century buildings and converted multi-units, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Do you handle multi-unit buildings in Over-the-Rhine?',
        a: 'Yes. OTR is full of historic buildings split into apartments and condos. We can isolate and repair a leak or backup affecting one unit without shutting down water to the whole building.',
      },
    ],
    adjacent: [
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'West End', slug: 'west-end' },
      { name: 'Downtown', slug: 'downtown' },
    ],
  },
  {
    slug: 'downtown',
    neighborhood: 'Downtown',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    intro:
      'Downtown emergency plumbing is mostly about leaks several floors up, where water travels fast through condos, lofts and converted commercial buildings. Modern stacked risers and original early-1900s lines both fail, so a clean shutoff matters as much as the repair. We usually reach the central business district the same day.',
    relevance: [
      "Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.",
      'Plumbing here ranges from modern stacked risers in towers to original lines in early-1900s buildings turned residential. In either case, a leak several floors up can travel fast, so a quick response and a clean shutoff matter as much as the repair itself.',
    ],
    commonIntro:
      "In downtown's condos, lofts, and older commercial conversions, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Can you work in a downtown high-rise or condo?',
        a: 'Yes. We work in towers and converted loft buildings regularly, and we coordinate access and water shutoffs so a repair on one floor does not disrupt the rest of the building.',
      },
    ],
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'West End', slug: 'west-end' },
      { name: 'Pendleton', slug: 'pendleton' },
      { name: 'Queensgate', slug: 'queensgate' },
      { name: 'Mount Adams', slug: 'mount-adams' },
    ],
  },
  {
    slug: 'west-end',
    neighborhood: 'West End',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45203',
    intro:
      'Old pipe is the usual trigger for emergency plumbing in the West End. The historic brick rowhouses near TQL Stadium carry decades-old supply and drain lines that fail without much warning, and heavy rain can push a backup into an older basement.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. It holds historic Italianate rowhouses and brick homes alongside mid-century housing, with newer development now mixed in.',
      'The older brick homes here carry decades-old plumbing that fails without much warning, and older drain lines can back up during heavy rain.',
    ],
    commonIntro:
      "Across the West End's historic rowhouses and older homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach the West End?',
        a: 'The West End sits right next to downtown and is one of the quickest areas for us to reach. We keep plumbers on call most days and aim for same-day, often within hours.',
      },
    ],
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Downtown', slug: 'downtown' },
    ],
  },
  {
    slug: 'mount-adams',
    neighborhood: 'Mount Adams',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    intro:
      'Emergency plumbing on Mount Adams means working on steep, narrow streets around older homes, doubles and small apartment buildings. Old supply and drain lines are the usual failure, and tight parking slows down crews who do not know the area. We know the hill and come prepared.',
    relevance: [
      "Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed older homes, doubles and small apartment buildings.",
      'That hillside setting and the age of the housing both drive plumbing emergencies: old supply and drain lines in century-old homes, plus steep streets and tight parking. That access problem also means it pays to call a crew that knows the hill.',
    ],
    commonIntro:
      "In Mount Adams' steep, century-old homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Can you get equipment to homes on the steep Mount Adams streets?',
        a: 'Yes. We work on the hill regularly and come prepared for the narrow, steep streets and tight parking that make Mount Adams unique.',
      },
    ],
    adjacent: [
      { name: 'Walnut Hills', slug: 'walnut-hills' },
      { name: 'Downtown', slug: 'downtown' },
      { name: 'East End', slug: 'east-end' },
    ],
  },
  {
    slug: 'mount-auburn',
    neighborhood: 'Mount Auburn',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45219',
    intro:
      'Emergency plumbing in Mount Auburn often involves some of the oldest pipe in Cincinnati, inside Victorian homes now split into apartments. Original cast-iron drains and galvanized supply lines corrode and burst, and in a subdivided house one failure can reach several units. Visits here usually happen the same day.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine. It is lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Those Victorian-era homes carry some of the oldest plumbing in the city — original cast-iron drains and galvanized supply lines that corrode and fail with age. In subdivided houses, one burst line can affect several units, so a quick, knowledgeable response keeps the damage contained.',
    ],
    commonIntro:
      "In Mount Auburn's grand but aging 19th-century homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Mount Auburn?',
        a: 'Mount Auburn sits right above downtown, so it is one of the faster neighborhoods for us to reach. We are on call most days and aim for same-day service.',
      },
    ],
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Corryville', slug: 'corryville' },
      { name: 'Walnut Hills', slug: 'walnut-hills' },
    ],
  },
  {
    slug: 'clifton',
    neighborhood: 'Clifton',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45220',
    intro:
      'In Clifton, emergency plumbing tends to trace back to two things: century-old supply lines and old sewer laterals. Large Victorian homes around Ludlow Avenue and the Gaslight District still use original pipe, and many are rentals near UC that need a fast fix.',
    relevance: [
      'Clifton (ZIP 45220) is the neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Many of those big, older houses have been here for over a century, with plenty of original plumbing still in service — and a fair number are now rentals near campus, where a burst pipe or failed water heater needs a fast fix. Aging supply lines and old sewer laterals are the two issues we see most.',
    ],
    commonIntro:
      "In Clifton's large Victorian and early-1900s homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'Do you handle student rentals near UC in Clifton?',
        a: 'Yes. We work on the older homes and rentals throughout Clifton and the university area, and we are available most days for the burst pipes and water heater failures that tend to hit older houses.',
      },
    ],
    adjacent: [
      { name: 'Corryville', slug: 'corryville' },
      { name: 'CUF', slug: 'cuf' },
      { name: 'Avondale', slug: 'avondale' },
      { name: 'Northside', slug: 'northside' },
    ],
  },
  {
    slug: 'corryville',
    neighborhood: 'Corryville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45219',
    intro:
      'Emergency plumbing in Corryville is shaped by student rentals around Short Vine, which put heavy use on old pipes. Burst lines, failed water heaters and clogged drains are common, and because units share walls and stacks, the job is stopping one problem before it spreads. Most visits are same day.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of older houses, large newer apartment blocks, and student rentals.',
      'With so much older, densely packed housing turned into rentals, plumbing here takes heavy use on aging lines. Burst pipes, failed water heaters, and clogged drains are common, and because units share walls and stacks, a fast response keeps one problem from spreading.',
    ],
    commonIntro:
      "In Corryville's dense, older housing near campus, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How quickly can you reach Corryville near UC?',
        a: 'Corryville is central and close to our usual routes, so it is one of the faster areas for us to reach. We are on call most days with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Clifton', slug: 'clifton' },
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'Avondale', slug: 'avondale' },
    ],
  },
  {
    slug: 'northside',
    neighborhood: 'Northside',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45223',
    intro:
      'Sewer backups in older basements are the classic emergency plumbing job in Northside, especially after heavy rain. The late-1800s and early-1900s homes also carry original galvanized and cast-iron pipe. In both cases, shutting things down quickly is what limits the damage.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'The age of the housing means original galvanized and cast-iron plumbing is common, and older drain lines add a real risk of sewer backups during heavy rain. Both are emergencies where shutting things down quickly limits the damage.',
    ],
    commonIntro:
      "In Northside's older homes near the Mill Creek valley, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'My Northside basement backs up in heavy rain — can you help?',
        a: 'Yes. We clear emergency backups and can recommend a backwater valve or sump setup suited to your home so it is less likely to recur.',
      },
    ],
    adjacent: [
      { name: 'Clifton', slug: 'clifton' },
      { name: 'College Hill', slug: 'college-hill' },
    ],
  },
  {
    slug: 'college-hill',
    neighborhood: 'College Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45224',
    intro:
      'A failed water heater or a root-filled clay lateral is the usual emergency plumbing job in College Hill. Large early-1900s homes and mid-century houses along Hamilton Avenue have slowly corroding galvanized lines and old sewer laterals prone to roots. We handle both, often the same day.',
    relevance: [
      'College Hill (ZIP 45224) is a neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district.',
      'In homes this age, slowly corroding galvanized supply lines and aging water heaters are the usual culprits behind a sudden emergency, and older clay or cast-iron sewer laterals are prone to root intrusion. We handle both regularly.',
    ],
    commonIntro:
      "Across College Hill's older and mid-century homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach College Hill?',
        a: 'College Hill is well within our service area along Hamilton Avenue. We keep plumbers on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Northside', slug: 'northside' },
      { name: 'North College Hill', slug: 'north-college-hill' },
    ],
  },
  {
    slug: 'walnut-hills',
    neighborhood: 'Walnut Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45206',
    intro:
      'Walnut Hills emergency plumbing often starts in apartment buildings near Peebles Corner, where units share old cast-iron and galvanized lines. A single burst pipe can affect several apartments, so we isolate the leak first, then repair it without shutting water off to the whole building.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Its century-old housing — much of it in multi-unit buildings — runs on aging cast-iron and galvanized plumbing that fails with little warning. In multi-unit buildings, one burst line can affect several apartments, so quick shutoff and an experienced repair matter.',
    ],
    commonIntro:
      "In Walnut Hills' historic homes and apartment buildings, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Do you work on the older apartment buildings in Walnut Hills?',
        a: 'Yes. Many Walnut Hills buildings are split into units, and we can isolate and repair a problem in one apartment without shutting off water to the whole building.',
      },
    ],
    adjacent: [
      { name: 'East Walnut Hills', slug: 'east-walnut-hills' },
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'Avondale', slug: 'avondale' },
    ],
  },
  {
    slug: 'east-walnut-hills',
    neighborhood: 'East Walnut Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45206',
    intro:
      'Stately early-1900s homes around Woodburn Avenue and DeSales Corner often still have their original pipes, and that is where East Walnut Hills emergency plumbing begins. Corroded galvanized lines and aging drains cause sudden leaks, and a quick response protects the original woodwork and finished spaces.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets.',
      'The large, century-old houses here often still carry original plumbing, where corroded galvanized lines and aging drains lead to sudden leaks. We respond fast to protect the original woodwork and finished spaces these homes are known for.',
    ],
    commonIntro:
      "In East Walnut Hills' stately early-1900s homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach East Walnut Hills?',
        a: 'East Walnut Hills is close to our central routes, so it is a quick reach. We are on call most days with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Walnut Hills', slug: 'walnut-hills' },
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Evanston', slug: 'evanston' },
    ],
  },
  {
    slug: 'avondale',
    neighborhood: 'Avondale',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45229',
    intro:
      'Burst pipes, dead water heaters and drain backups make up most emergency plumbing in Avondale. Much of the housing near the hospitals and the Cincinnati Zoo is older and rental, so aging pipe gets heavy daily use. We reach Avondale fast and usually the same day.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with a mix of pre-1940 and mid-century homes and apartment buildings.',
      'A lot of Avondale’s housing is older and densely built, much of it rental, which means aging plumbing under heavy use. Burst pipes, water heater failures, and drain backups are the emergencies we are called for most, and we respond fast.',
    ],
    commonIntro:
      "In Avondale's older homes and apartment buildings, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Avondale?',
        a: 'Avondale is in the central uptown area near the hospitals, so it is a fast reach for us. We are on call most days with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Corryville', slug: 'corryville' },
      { name: 'Walnut Hills', slug: 'walnut-hills' },
      { name: 'North Avondale', slug: 'north-avondale' },
      { name: 'Evanston', slug: 'evanston' },
      { name: 'Clifton', slug: 'clifton' },
    ],
  },

  // ── Phase 2: east-side Cincinnati ─────────────────────────────────────
  {
    slug: 'hyde-park',
    neighborhood: 'Hyde Park',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45208',
    intro:
      'Emergency plumbing in Hyde Park often means a hidden leak that has reached a finished basement in a big older home before anyone noticed. Around Hyde Park Square and Erie Avenue, aging supply lines and old sewer laterals in early-1900s homes cause most of it.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes on established, tree-shaded streets.',
      'These big older homes are exactly the kind where a hidden leak or a failing supply line can do expensive damage to finished basements and original details before it is noticed. Aging plumbing and old sewer laterals are the issues we handle most here.',
    ],
    commonIntro:
      "In Hyde Park's large, established early-1900s homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Hyde Park?',
        a: 'Hyde Park is well within our service area. We keep plumbers on call most days and reach the homes around Hyde Park Square the same day, often within hours.',
      },
    ],
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Mount Lookout', slug: 'mount-lookout' },
      { name: 'East Walnut Hills', slug: 'east-walnut-hills' },
      { name: 'Evanston', slug: 'evanston' },
      { name: 'Norwood', slug: 'norwood' },
    ],
  },
  {
    slug: 'oakley',
    neighborhood: 'Oakley',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45209',
    intro:
      'Oakley’s older bungalows account for most emergency plumbing around Oakley Square and Madison Road. Their original supply lines and drains are now past their prime, so corrosion leaks and water heaters at the end of their life come up a lot. Most are handled same day.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of pre-1940 bungalows and brick homes alongside newer apartments.',
      'The older bungalows that fill much of Oakley have original supply lines and drains that are now well past their prime, so corrosion leaks and aging water heaters are the emergencies we see most. We are on call to handle them most days.',
    ],
    commonIntro:
      "Across Oakley's older bungalows and brick homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Oakley?',
        a: 'Oakley is centrally located on the east side and quick for us to reach. We are on call most days and aim for same-day service.',
      },
    ],
    adjacent: [
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Pleasant Ridge', slug: 'pleasant-ridge' },
    ],
  },
  {
    slug: 'mount-lookout',
    neighborhood: 'Mount Lookout',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45226',
    intro:
      'Hilly streets near Ault Park put extra load on Mount Lookout basement drains and sewer laterals, and heavy rain is a common trigger for emergency plumbing there. Add decades-old pipe in the early-1900s homes around Mount Lookout Square, and failures happen quickly, so same-day response matters.',
    relevance: [
      'Mount Lookout (ZIP 45226) is a hilly east-side neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets.',
      'The older homes here carry decades-old plumbing, and the hillside grade puts extra demand on basement drains and sewer laterals during heavy rain. Both can turn into emergencies fast, which is why same-day response matters.',
    ],
    commonIntro:
      "In Mount Lookout's older hillside homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Mount Lookout?',
        a: 'Mount Lookout is well within our east-side service area. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Columbia-Tusculum', slug: 'columbia-tusculum' },
      { name: 'Mount Washington', slug: 'mount-washington' },
    ],
  },
  {
    slug: 'columbia-tusculum',
    neighborhood: 'Columbia-Tusculum',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45226',
    intro:
      'Emergency plumbing in Columbia-Tusculum, Cincinnati’s oldest neighborhood, usually involves Painted Ladies on the hills and flats where the Little Miami meets the Ohio. Settled in 1788, it has old pipe and, on its lowest streets, basement backups during high water. A fast shutoff protects the historic interiors.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, and is known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'Two things drive emergency calls here: the age of those Victorian and early homes, with old plumbing, and the lowest riverside streets, where high water raises the risk of basement and sewer backups. Fast shutoff protects historic interiors.',
    ],
    commonIntro:
      "In Columbia-Tusculum's historic Victorian homes near the river, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the historic Victorian homes in Columbia-Tusculum?',
        a: 'Yes. We work on the neighborhood’s older and Painted Lady homes regularly and take care to repair aging plumbing without damaging original features.',
      },
    ],
    adjacent: [
      { name: 'Mount Lookout', slug: 'mount-lookout' },
      { name: 'Mount Washington', slug: 'mount-washington' },
    ],
  },
  {
    slug: 'mount-washington',
    neighborhood: 'Mount Washington',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45230',
    intro:
      'Original galvanized lines and tired water heaters cause most emergency plumbing jobs in Mount Washington homes along Beechmont Avenue. Houses here are mostly post-war, and older sewer laterals crack or fill with roots too. We usually come out the same day, to keep the damage contained.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with settled streets of mostly post-war single-family homes.',
      'In homes of that era, the original galvanized supply lines and aging water heaters are the usual sources of a sudden emergency, and older sewer laterals can crack or fill with roots. We respond fast to keep the damage contained.',
    ],
    commonIntro:
      "Across Mount Washington's older and mid-century homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Mount Washington?',
        a: 'Mount Washington is squarely in our service area along Beechmont Avenue. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'California', slug: 'california' },
      { name: 'Linwood', slug: 'linwood' },
    ],
  },
  {
    slug: 'madisonville',
    neighborhood: 'Madisonville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45227',
    intro:
      'Madisonville’s older homes along Madison Road run on aging galvanized and cast-iron pipe, and that is where most emergency plumbing jobs start. Corrosion leaks, failing water heaters and clogged drains top the list, even as newer infill goes up nearby. We usually get there the same day.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'The older houses that make up much of Madisonville run on aging galvanized and cast-iron plumbing, so corrosion leaks, failing water heaters, and clogged drains are the emergencies we are called for most. We handle them quickly.',
    ],
    commonIntro:
      "In Madisonville's older homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Madisonville?',
        a: 'Madisonville is centrally located on the east side and quick for us to reach. We are on call most days with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Pleasant Ridge', slug: 'pleasant-ridge' },
      { name: 'Kennedy Heights', slug: 'kennedy-heights' },
      { name: 'Fairfax', slug: 'fairfax' },
      { name: 'Madeira', slug: 'madeira' },
    ],
  },
  {
    slug: 'pleasant-ridge',
    neighborhood: 'Pleasant Ridge',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45213',
    intro:
      'In a Pleasant Ridge two-family, one failed line can flood both units, which makes emergency plumbing here a two-household problem. Along Montgomery Road it usually means corroded galvanized pipe or aging drains in early-1900s homes, and we can repair one unit without shutting off water to the other.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati two-families.',
      'Those older single- and two-family homes carry decades-old plumbing, where corroded galvanized lines and aging drains lead to sudden leaks and backups. In two-families, one failure can affect both units, so a quick response keeps it contained.',
    ],
    commonIntro:
      "In Pleasant Ridge's early-1900s homes and two-families, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the two-family homes common in Pleasant Ridge?',
        a: 'Yes. We work on the two-families throughout Pleasant Ridge and can repair a problem in one unit without shutting down water to the other.',
      },
    ],
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Norwood', slug: 'norwood' },
      { name: 'Kennedy Heights', slug: 'kennedy-heights' },
      { name: 'Golf Manor', slug: 'golf-manor' },
      { name: 'Amberley', slug: 'amberley' },
    ],
  },
  {
    slug: 'westwood',
    neighborhood: 'Westwood',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45211',
    intro:
      'Westwood is Cincinnati’s largest neighborhood, and the same emergency plumbing failures repeat across its older homes along Harrison Avenue. Galvanized supply lines close up with corrosion, water heaters reach the end of their life and cast-iron drains back up. Most visits happen the same day.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with streets of mostly mid-century houses and some older homes from before 1940.',
      'Across that range of older housing, the common thread is aging plumbing — galvanized supply lines closing up with corrosion, water heaters at the end of their life, and cast-iron drains prone to backups. Those are the emergencies we are called for most.',
    ],
    commonIntro:
      "Across Westwood's older and mid-century homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Westwood?',
        a: 'Westwood is a large west-side neighborhood well within our service area. We are on call most days and aim for same-day arrival along Harrison Avenue and beyond.',
      },
    ],
    adjacent: [
      { name: 'Cheviot', slug: 'cheviot' },
      { name: 'Covedale', slug: 'covedale' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
      { name: 'East Westwood', slug: 'east-westwood' },
      { name: 'Mount Airy', slug: 'mount-airy' },
      { name: 'South Fairmount', slug: 'south-fairmount' },
    ],
  },

  // ── Phase 2: Hamilton County suburbs ──────────────────────────────────
  {
    slug: 'norwood',
    neighborhood: 'Norwood',
    state: 'OH',
    zip: '45212',
    intro:
      'Emergency plumbing in Norwood rarely stays in one house. This city surrounded by Cincinnati is a dense grid of early-1900s homes and brick two-families, with corroded galvanized lines, aging cast-iron drains and shared laterals on small lots. We move fast to stop a backup from spreading.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a railroad and factory town.',
      'That tightly packed, century-old housing is exactly where plumbing emergencies cluster: corroded galvanized lines, aging cast-iron drains, and shared laterals on small lots. We respond fast to keep a burst pipe or backup from spreading between closely built homes.',
    ],
    commonIntro:
      "In Norwood's dense, early-1900s homes and two-families, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Norwood?',
        a: 'Norwood sits right in the middle of our service area, surrounded by Cincinnati, so it is a fast reach. We are on call most days with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Pleasant Ridge', slug: 'pleasant-ridge' },
      { name: 'Evanston', slug: 'evanston' },
      { name: 'Avondale', slug: 'avondale' },
    ],
  },
  {
    slug: 'blue-ash',
    neighborhood: 'Blue Ash',
    state: 'OH',
    zip: '45242',
    intro:
      'Even the newer Blue Ash subdivisions are decades old now, so worn-out water heaters, worn supply lines and failing sump pumps lead the emergency plumbing list. Older neighborhoods and the commercial corridor see the same problems. Homes and businesses usually get a same-day visit.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with neighborhoods built mostly in the 1970s and 1980s alongside newer subdivisions and a large commercial corridor.',
      'Even the "newer" housing here is now decades old, so aging water heaters, worn supply lines, and failing sump pumps are the emergencies we see most. We respond fast to homes and businesses alike.',
    ],
    commonIntro:
      "Across Blue Ash's 1970s and 1980s homes and newer subdivisions, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Blue Ash?',
        a: 'Blue Ash is well within our northeast service area. We keep plumbers on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Montgomery', slug: 'montgomery' },
            { name: 'Sharonville', slug: 'sharonville' },
      { name: 'Evendale', slug: 'evendale' },
      { name: 'Reading', slug: 'reading' },
    ],
  },
  {
    slug: 'montgomery',
    neighborhood: 'Montgomery',
    state: 'OH',
    zip: '45242',
    intro:
      'Emergency plumbing in Montgomery covers everything from older buildings along Montgomery Road to decades-old subdivisions, but the failures look alike. Aging water heaters, worn supply lines and the occasional burst pipe are what we see most. Visits near Montgomery Road usually happen the same day.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a Heritage District of shops and restaurants along Montgomery Road and neighborhoods built mostly in the 1970s and 1980s.',
      'From older buildings in the Heritage District to decades-old subdivisions, the plumbing here spans a wide range — but aging water heaters, worn supply lines, and the occasional burst pipe are the emergencies we respond to most. We are available most days.',
    ],
    commonIntro:
      "Across Montgomery's established homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Montgomery?',
        a: 'Montgomery is well within our northeast service area. We are on call most days and aim for same-day service.',
      },
    ],
    adjacent: [
      { name: 'Blue Ash', slug: 'blue-ash' },
      { name: 'Indian Hill', slug: 'indian-hill' },
    ],
  },
  {
    slug: 'madeira',
    neighborhood: 'Madeira',
    state: 'OH',
    zip: '45243',
    intro:
      'Mid-century homes in Madeira are at the age where emergency plumbing becomes routine: original galvanized pipe corrodes and cast-iron drains back up. Water heaters giving out make up the rest of our work on its quiet, tree-lined streets. We usually reach Madeira the same day.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'Homes from the mid-1900s are now well into the age where original galvanized supply lines corrode, water heaters fail, and cast-iron drains back up. Those are the emergencies we are called for most in Madeira, and we handle them most days.',
    ],
    commonIntro:
      "Across Madeira's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Madeira?',
        a: 'Madeira is well within our east-side service area. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Indian Hill', slug: 'indian-hill' },
      { name: 'Silverton', slug: 'silverton' },
    ],
  },
  {
    slug: 'wyoming',
    neighborhood: 'Wyoming',
    state: 'OH',
    zip: '45215',
    intro:
      'A corroded supply line in one of Wyoming’s older homes can damage finished rooms before anyone catches it, and that is the typical emergency plumbing job here. Victorian houses cluster in the Village Historic District and most of the rest date from the mid-1900s, so we move fast to protect the interiors.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, with Victorian homes in its Village Historic District and mostly mid-century houses beyond it, on established, tree-shaded streets.',
      'Those older houses run on aging plumbing, where a corroded supply line or aging drain can cause expensive damage to finished spaces before it is caught. We respond fast to protect the historic interiors these homes are known for.',
    ],
    commonIntro:
      "In Wyoming's older homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Wyoming?',
        a: 'Wyoming is well within our northern service area. We keep plumbers on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Lockland', slug: 'lockland' },
    ],
  },
  {
    slug: 'mariemont',
    neighborhood: 'Mariemont',
    state: 'OH',
    zip: '45227',
    intro:
      'Emergency plumbing in Mariemont deals with close to a century of wear, since the village was laid out in the 1920s. Its older homes have aging supply lines and drains that fail with little warning, and we repair them with the historic character in mind.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival, Colonial and Greek Revival homes on the east side.',
      'Because 36.8% of Mariemont’s homes predate 1940 and another 26.3% date from the 1940s, its plumbing carries decades of wear, with aging supply lines and drains that fail with little warning. We take care to make repairs that respect the village’s historic character.',
    ],
    commonIntro:
      "In Mariemont's older homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the historic homes in Mariemont?',
        a: 'Yes. We work throughout Mariemont and take care to repair aging plumbing in its historic homes without disturbing original features.',
      },
    ],
    adjacent: [
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Fairfax', slug: 'fairfax' },
    ],
  },
  {
    slug: 'cheviot',
    neighborhood: 'Cheviot',
    state: 'OH',
    zip: '45211',
    intro:
      'Cheviot is packed tight along Harrison Avenue, so emergency plumbing in one early-1900s home or two-family can quickly involve the next. Most of it is corrosion leaks, burst lines and drain backups in aging galvanized and cast-iron systems. Same-day visits are typical.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, bordering Cincinnati’s Westwood, with a grid of early-1900s homes and two-families along Harrison Avenue.',
      'That older, tightly packed housing runs on aging galvanized and cast-iron plumbing, so corrosion leaks, burst pipes, and drain backups are the emergencies we are called for most. We respond fast to keep one home’s problem from reaching the next.',
    ],
    commonIntro:
      "In Cheviot's dense, early-1900s homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Cheviot?',
        a: 'Cheviot is a compact west-side city well within our service area. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Westwood', slug: 'westwood' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
    ],
  },
  {
    slug: 'covedale',
    neighborhood: 'Covedale',
    state: 'OH',
    zip: '45238',
    intro:
      'Clay sewer laterals full of roots and aging water heaters are the emergency plumbing jobs we see most in Covedale. Its mid-century and older homes near Glenway and Cleves Warsaw also carry corroding galvanized lines that can fail overnight. Most of these are handled the same day.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community split between the City of Cincinnati and unincorporated Green Township, with mostly mid-century single-family homes and older ones on the city side.',
      'Homes of that age commonly have corroding galvanized supply lines, aging water heaters, and clay or cast-iron sewer laterals prone to roots — all of which can become emergencies overnight. We handle them quickly.',
    ],
    commonIntro:
      "Across Covedale's older and mid-century homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Covedale?',
        a: 'Covedale is well within our west-side service area. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Westwood', slug: 'westwood' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
      { name: 'Bridgetown', slug: 'bridgetown' },
      { name: 'Mack', slug: 'mack' },
    ],
  },

  // ── Phase 2: Northern Kentucky river cities ───────────────────────────
  {
    slug: 'covington',
    neighborhood: 'Covington',
    state: 'KY',
    zip: '41011',
    intro:
      'Covington emergency plumbing often comes down to location: 19th-century rowhouses in MainStrasse Village and Licking Riverside sit on low ground near two rivers. High water on the Ohio or Licking can push sewer backups into basements, and original cast-iron and galvanized pipe fails too. We usually arrive the same day.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'Those century-old riverfront homes carry original cast-iron and galvanized plumbing, and the low ground near the Ohio and Licking Rivers adds a real risk of sewer and basement backups during high water. Both make a fast local response essential.',
    ],
    commonIntro:
      "In Covington's historic riverfront homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Do you cross the river to serve Covington?',
        a: 'Yes. Covington is a core part of our service area, just across the river from downtown. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Newport', slug: 'newport' },
    ],
  },
  {
    slug: 'newport',
    neighborhood: 'Newport',
    state: 'KY',
    zip: '41071',
    intro:
      'In Newport, emergency plumbing centers on the East Row Historic District, where block after block of 19th-century homes run on aging pipe. Backups on the low riverfront ground near the Levee add to it when the river is high. We repair with care for the historic details.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District and the Levee riverfront.',
      'The 19th-century homes in the East Row run on aging plumbing, and the low riverfront ground raises the risk of backups when the river is high. We respond fast and repair with care for the historic details.',
    ],
    commonIntro:
      "In Newport's Victorian East Row homes and riverfront streets, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the historic East Row homes in Newport?',
        a: 'Yes. We work throughout the East Row and the rest of Newport and take care to repair aging plumbing in these Victorian homes without damaging original features.',
      },
    ],
    adjacent: [
      { name: 'Covington', slug: 'covington' },
      { name: 'Bellevue', slug: 'bellevue' },
      { name: 'Fort Thomas', slug: 'fort-thomas' },
    ],
  },
  {
    slug: 'bellevue',
    neighborhood: 'Bellevue',
    state: 'KY',
    zip: '41073',
    intro:
      'Emergency plumbing in Bellevue mostly involves late-1800s homes near Fairfield Avenue that still run on galvanized and cast-iron pipe. The riverfront adds a second problem, since a high Ohio can push water into basements and sewer lines. Same-day help is the norm in this compact river city.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'Its century-old housing carries original galvanized and cast-iron plumbing, and the riverfront location means high water can drive basement and sewer backups. We respond fast to keep the damage contained.',
    ],
    commonIntro:
      "In Bellevue's historic riverfront homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Bellevue?',
        a: 'Bellevue is a core part of our Northern Kentucky service area along the river. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Newport', slug: 'newport' },
      { name: 'Fort Thomas', slug: 'fort-thomas' },
      { name: 'Dayton', slug: 'dayton-ky' },
    ],
  },
  {
    slug: 'fort-thomas',
    neighborhood: 'Fort Thomas',
    state: 'KY',
    zip: '41075',
    intro:
      'Emergency plumbing in Fort Thomas, a city that grew up around a former U.S. Army post, usually involves aging pipe in mid-century and older homes above the river. A corroded supply line or aging drain often does damage before anyone notices it. We respond fast and make repairs built to last.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately mid-century and older homes on tree-lined streets above the river.',
      'Many of these large, established homes carry aging plumbing, where corroded supply lines and aging drains can do real damage before they are noticed. We respond fast and make repairs built to last.',
    ],
    commonIntro:
      "In Fort Thomas' stately older homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Fort Thomas?',
        a: 'Fort Thomas is well within our Northern Kentucky service area. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Newport', slug: 'newport' },
      { name: 'Bellevue', slug: 'bellevue' },
    ],
  },
  {
    slug: 'florence',
    neighborhood: 'Florence',
    state: 'KY',
    zip: '41042',
    intro:
      'Florence is a Boone County city about 12 miles from downtown Cincinnati, and emergency plumbing here splits two ways. Newer subdivisions around the Florence Mall area see water heaters and supply lines starting to fail, while mid-century streets get the corrosion leaks and drain backups of older plumbing. Most visits are same day.',
    relevance: [
      'Florence (ZIP 41042) is a Boone County city of 31,946 people (2020 census), with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'Even the newer homes here are now old enough for water heaters and supply lines to start failing, while the mid-century neighborhoods see the corrosion leaks and drain backups typical of older plumbing. We respond fast to both.',
    ],
    commonIntro:
      "Across Florence's mid-century and newer homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Florence?',
        a: 'Florence is a key part of our Boone County service area. We keep plumbers on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [{ name: 'Erlanger', slug: 'erlanger' }],
  },
  {
    slug: 'erlanger',
    neighborhood: 'Erlanger',
    state: 'KY',
    zip: '41018',
    intro:
      'Near the airport, Erlanger’s mid-century neighborhoods are at the age where emergency plumbing picks up: supply lines corrode, water heaters fail and sewer laterals back up. That covers most of what we handle in this Kenton County city, across both its older and newer homes. Same-day service is typical.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'Homes from the mid-1900s are now at the age where original supply lines corrode, water heaters fail, and sewer laterals back up. Those are the emergencies we are called for most in Erlanger, and we handle them most days.',
    ],
    commonIntro:
      "Across Erlanger's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Erlanger?',
        a: 'Erlanger is well within our Northern Kentucky service area. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Elsmere', slug: 'elsmere' },
      { name: 'Crescent Springs', slug: 'crescent-springs' },
      { name: 'Lakeside Park', slug: 'lakeside-park' },
      { name: 'Villa Hills', slug: 'villa-hills' },
      { name: 'Edgewood', slug: 'edgewood' },
      { name: 'Florence', slug: 'florence' },
    ],
  },

  // ── Phase 2: outer Ohio suburbs ───────────────────────────────────────
  {
    slug: 'mason',
    neighborhood: 'Mason',
    state: 'OH',
    zip: '45040',
    intro:
      'Emergency plumbing in Mason mostly follows the age of its subdivisions, built from the 1990s onward near Kings Island and now old enough for water heaters, sump pumps and supply lines to quit. The older town center adds the usual decades-old pipe problems. Visits usually happen the same day.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati, near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town center.',
      'Even in newer subdivisions, water heaters, sump pumps, and supply lines reach the end of their life on a predictable schedule, and the older town center sees the issues typical of decades-old plumbing. We respond fast across the city.',
    ],
    commonIntro:
      "Across Mason's newer subdivisions and older town center, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Mason?',
        a: 'Mason is part of our northern service area. We keep plumbers on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [{ name: 'West Chester', slug: 'west-chester' }],
  },
  {
    slug: 'west-chester',
    neighborhood: 'West Chester',
    state: 'OH',
    zip: '45069',
    intro:
      'Most of West Chester went up between the 1970s and 1990s along I-75, and emergency plumbing there now follows that age. Water heaters fail, sump pumps wear out and supply lines spring leaks across the township’s subdivisions. We usually reach homes here the same day.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up mostly of 1970s to 1990s subdivisions along the I-75 corridor, with the 1990s the biggest building decade.',
      'These newer homes are now old enough that water heaters fail, sump pumps wear out, and supply lines spring leaks — the emergencies we are called for most here. We respond fast across the township.',
    ],
    commonIntro:
      "Across West Chester's newer subdivisions, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach West Chester?',
        a: 'West Chester is part of our northern service area along I-75. We are on call most days and aim for same-day arrival.',
      },
    ],
    adjacent: [{ name: 'Mason', slug: 'mason' }],
  },

  // ── All remaining Cincinnati neighborhoods ────────────────────────────
  {
    slug: 'pendleton', neighborhood: 'Pendleton', city: 'Cincinnati', state: 'OH', zip: '45202',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Pendleton’s restored Italianate buildings and loft condos share brittle cast-iron stacks, so emergency plumbing here often involves several units at once. In this arts district beside Over-the-Rhine, old risers and retrofitted lines fail without much notice, and a fast shutoff matters most. We are usually there the same day.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condos.',
      'Those 19th-century buildings run on a mix of original and retrofitted plumbing — brittle cast-iron stacks and old risers — where one failure can reach several units. Fast shutoff is key in such tightly built historic blocks.',
    ],
    commonIntro: "In Pendleton's 19th-century buildings and converted lofts, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Pendleton?', a: 'Pendleton sits right beside downtown and OTR, so it is a quick reach for us. We are on call most days with same-day service.' }],
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Downtown', slug: 'downtown' },
      { name: 'Mount Auburn', slug: 'mount-auburn' },
    ],
  },
  {
    slug: 'queensgate', neighborhood: 'Queensgate', city: 'Cincinnati', state: 'OH', zip: '45203',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Most emergency plumbing in Queensgate is commercial: a burst supply line in a warehouse, a failed water heater or a backup in an older building near the rail yards. We handle those buildings as well as homes, usually the same day.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown, near the rail yards and the Mill Creek, with warehouses, offices, and light-industrial buildings.',
      'Plumbing emergencies here tend to be commercial: burst supply lines, failed water heaters, and backups in older industrial buildings. Very few people live here, so most calls come from businesses.',
    ],
    commonIntro: "In Queensgate's commercial and industrial buildings, the emergencies we handle most often are:",
    localFaqs: [{ q: 'Do you handle commercial buildings in Queensgate?', a: 'Yes. Queensgate is mostly commercial and industrial, and we handle emergency repairs for those buildings as well as homes, most days.' }],
  },
  {
    slug: 'cuf', neighborhood: 'CUF (Clifton Heights, University Heights & Fairview)', city: 'Cincinnati', state: 'OH', zip: '45219',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Emergency plumbing in CUF, the student rentals of Clifton Heights, University Heights and Fairview, often starts in a multi-unit house. One burst pipe can hit several units, and overworked water heaters and aging pipe in these older houses adds to it. Most visits are same day.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights, and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, with older homes and 1970s apartment buildings, most of them rentals.',
      'Heavy use on old plumbing is the story here: aging supply lines, overworked water heaters, and shared drain lines in multi-unit houses, where a burst pipe can hit several units at once. We respond fast.',
    ],
    commonIntro: "In CUF's dense, older student-rental housing near UC, the emergencies we see most often are:",
    localFaqs: [{ q: 'Do you handle student rentals in the CUF area?', a: 'Yes. We work on the older homes and rentals throughout Clifton Heights, University Heights, and Fairview, and we are available most days for burst pipes and water heater failures.' }],
  },
  {
    slug: 'camp-washington', neighborhood: 'Camp Washington', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Camp Washington sits in the Mill Creek valley, and most emergency plumbing there comes from older homes and buildings. Near the American Sign Museum, aging pipe in old worker housing leaks without warning. Same-day visits are normal.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'The older homes and buildings here run on aging plumbing prone to sudden leaks and drain backups. We respond fast to limit the damage.',
    ],
    commonIntro: "In Camp Washington's older homes and buildings down in the valley, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My Camp Washington building backs up in heavy rain. Can you help?', a: 'Yes. We clear emergency backups and can advise on backwater valves and sump setups suited to your building.' }],
  },
  {
    slug: 'south-fairmount', neighborhood: 'South Fairmount', city: 'Cincinnati', state: 'OH', zip: '45214',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Older homes along Queen City Avenue drive most emergency plumbing in South Fairmount, where the Lick Run Greenway was built to cut sewer overflows into Mill Creek. Sewer backups hit older homes after heavy rain, and burst pipes from aging plumbing round out most jobs. We usually come the same day.',
    relevance: [
      'South Fairmount (ZIP 45214) sits in the Lick Run valley along Queen City Avenue on the west side, home to the Lick Run Greenway, built to cut combined sewer overflows into Mill Creek.',
      'The neighborhood’s older housing makes sewer and drain backups a recurring emergency, alongside the burst pipes typical of aging plumbing. We respond fast to limit the damage.',
    ],
    commonIntro: "In South Fairmount's older valley homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach South Fairmount?', a: 'South Fairmount is well within our west-side service area along Queen City Avenue. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'east-end', neighborhood: 'East End', city: 'Cincinnati', state: 'OH', zip: '45226',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Between Columbia Parkway and the Ohio River, emergency plumbing in the East End usually means high water. River cottages and condos along Eastern Avenue sit low enough for backups, and the older cottages also carry decades-old pipe and sump pumps that fail. Same-day visits are typical.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue, below Columbia Parkway, with historic river cottages and newer condos squeezed between the hillside and the Ohio River.',
      'Its low position right on the river means high water and backups are a real risk, and the older cottages carry decades-old plumbing. Both make a quick local response important.',
    ],
    commonIntro: "Along the East End's riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My East End home floods when the river is high — can you help?', a: 'Yes. We handle emergency backups and failed sump pumps and can recommend a backwater valve suited to riverfront homes along Eastern Avenue.' }],
    adjacent: [
      { name: 'Mount Adams', slug: 'mount-adams' },
    ],
  },
  {
    slug: 'north-fairmount', neighborhood: 'North Fairmount', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro:
      'On North Fairmount’s hillside above the Mill Creek valley, emergency plumbing usually traces back to aging pipe in pre-1940 homes. Old supply and drain lines on these west-side streets can fail quickly. We usually arrive the same day.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older homes, most built before 1940.',
      'The age of the housing means aging plumbing is common, and old supply and drain lines are frequent sources of emergencies.',
    ],
    commonIntro: "In North Fairmount's older hillside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach North Fairmount?', a: 'North Fairmount is within our west-side service area. We are on call most days and aim for same-day arrival.' }],
    adjacent: [
      { name: 'East Westwood', slug: 'east-westwood' },
      { name: 'Millvale', slug: 'millvale' },
      { name: 'South Fairmount', slug: 'south-fairmount' },
      { name: 'English Woods', slug: 'english-woods' },
    ],
  },
  {
    slug: 'evanston', neighborhood: 'Evanston', city: 'Cincinnati', state: 'OH', zip: '45207',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Evanston emergency plumbing is shaped by older homes and rentals around Xavier University, where pipes see heavy wear. Corrosion leaks and drain backups in pre-1940 houses and densely built rentals make up most jobs. Evanston is quick for us to reach, usually the same day.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood that is home to Xavier University, with streets of pre-1940 homes and apartment buildings.',
      'The older homes here carry aging plumbing prone to corrosion leaks and drain backups, and densely built rentals add heavy wear. We respond fast.',
    ],
    commonIntro: "In Evanston's pre-1940 homes near Xavier, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Evanston?', a: 'Evanston is centrally located on the east side near Xavier and quick for us to reach. We are on call most days with same-day service.' }],
  },
  {
    slug: 'south-cumminsville', neighborhood: 'South Cumminsville', city: 'Cincinnati', state: 'OH', zip: '45223',
    county: 'Cincinnati Neighborhoods',
    intro:
      'South Cumminsville sits in the Mill Creek valley among industrial corridors, and emergency plumbing here often means a backed-up sewer. Many of its homes predate 1940 and run on aging plumbing that fails without warning. We move fast to contain the damage, usually the same day.',
    relevance: [
      'South Cumminsville (ZIP 45223) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'About 45.5% of homes here predate 1940, and that older housing runs on aging plumbing that fails without warning. We respond fast to contain the damage.',
    ],
    commonIntro: "In South Cumminsville's older valley homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach South Cumminsville?', a: 'South Cumminsville is within our service area in the Mill Creek valley. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'english-woods', neighborhood: 'English Woods', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Up on the hilltop above the Mill Creek valley, most of the housing left in English Woods is CMHA rental property, so emergency plumbing here usually means a multi-unit building. A leak in one unit can reach the next. We reach the area the same day.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, Most of it has been vacant land since the 2005 demolition, and the remaining housing is CMHA rental property, including Marquette Manor, where renovation started in January 2025.',
      'In multi-unit rental buildings, one failed line can affect several units, so fast shutoff and repair matter. We respond fast.',
    ],
    commonIntro: "In English Woods' rental buildings, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach English Woods?', a: 'English Woods is within our west-side service area. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'north-avondale', neighborhood: 'North Avondale', city: 'Cincinnati', state: 'OH', zip: '45229',
    county: 'Cincinnati Neighborhoods',
    intro:
      'A hidden leak in one of North Avondale’s grand early-1900s homes gets expensive fast, and that is the emergency plumbing job we see most near Reading Road. Those century-old houses on big, tree-shaded lots often still have original plumbing and failing supply lines. Same-day service is normal here.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Reading Road.',
      'Those big, century-old houses often still carry original plumbing, where a hidden leak or failing supply line can do expensive damage before it is noticed. We respond fast to protect the finished spaces these homes are known for.',
    ],
    commonIntro: "In North Avondale's grand early-1900s homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach North Avondale?', a: 'North Avondale is centrally located and quick for us to reach. We are on call most days with same-day service.' }],
    adjacent: [
      { name: 'Avondale', slug: 'avondale' },
      { name: 'Evanston', slug: 'evanston' },
      { name: 'Paddock Hills', slug: 'paddock-hills' },
    ],
  },
  {
    slug: 'millvale', neighborhood: 'Millvale', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Millvale’s compact, largely residential streets sit on the western slope of the Mill Creek valley, and much of the housing is 1950s public-housing townhomes. Leaks and drain backups top the emergency plumbing list. We usually get there the same day.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood on the western slope of the Mill Creek valley, a compact, largely residential community.',
      'Much of the housing dates from the 1950s onward, many units recently renovated, and plumbing that age still leaks and backs up. We respond fast.',
    ],
    commonIntro: "In Millvale's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Millvale?', a: 'Millvale is within our service area in the Mill Creek valley. We are on call most days and aim for same-day arrival.' }],
    adjacent: [
      { name: 'South Cumminsville', slug: 'south-cumminsville' },
      { name: 'North Fairmount', slug: 'north-fairmount' },
    ],
  },
  {
    slug: 'paddock-hills', neighborhood: 'Paddock Hills', city: 'Cincinnati', state: 'OH', zip: '45229',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Corroding supply lines and aging water heaters drive most emergency plumbing in Paddock Hills. The mostly mid-1900s homes near Paddock Road are at the age where both fail with little warning. Paddock Hills is central, so we reach it quickly.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road, with streets of mostly mid-1900s homes.',
      'Homes of that era commonly have corroding supply lines and aging water heaters that fail without much warning — the emergencies we are called for most here.',
    ],
    commonIntro: "In Paddock Hills' mid-1900s homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Paddock Hills?', a: 'Paddock Hills is centrally located near Paddock Road and quick for us to reach. We are on call most days with same-day service.' }],
  },
  {
    slug: 'spring-grove-village', neighborhood: 'Spring Grove Village', city: 'Cincinnati', state: 'OH', zip: '45232',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Beside Spring Grove Cemetery, emergency plumbing in Spring Grove Village tends to mean a drain backup or a sudden leak in older housing. Heavy rain can push water into old drain lines, and aging pipe does the rest. Same-day visits are the usual pattern.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley beside the historic Spring Grove Cemetery and Arboretum, with a mix of older homes and industry.',
      'The neighborhood’s older housing runs on aging plumbing prone to sudden leaks. We respond fast.',
    ],
    commonIntro: "In Spring Grove Village's older valley homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Spring Grove Village?', a: 'Spring Grove Village is within our service area in the Mill Creek valley. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'linwood', neighborhood: 'Linwood', city: 'Cincinnati', state: 'OH', zip: '45226',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Linwood is small and sits on the river bottoms near Lunken Airport, and about 82% of its homes predate 1940, so emergency plumbing here usually means old pipe that leaks or backs up. We reach Linwood the same day on most jobs.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'About 82% of the homes here predate 1940 and carry aging plumbing prone to leaks. Both make a fast local response worthwhile.',
    ],
    commonIntro: "In Linwood's older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Linwood?', a: 'Linwood is within our east-side service area near Lunken. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'bond-hill', neighborhood: 'Bond Hill', city: 'Cincinnati', state: 'OH', zip: '45237',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Corroded supply lines and worn-out water heaters account for most emergency plumbing in Bond Hill’s early-1900s and mid-century homes along Reading Road. Clogged drains come up too, and all three tend to fail without warning. We usually handle them the same day.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century homes, two-families and small apartment buildings.',
      'Homes of that age carry decades-old plumbing, where corroded supply lines, aging water heaters, and clogged drains turn into emergencies without warning. We handle them fast.',
    ],
    commonIntro: "Across Bond Hill's older and mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Bond Hill?', a: 'Bond Hill is well within our north-side service area along Reading Road. We are on call most days with same-day service.' }],
  },
  {
    slug: 'villages-of-roll-hill', neighborhood: 'Villages of Roll Hill', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Villages of Roll Hill is mostly multi-unit apartment buildings, so emergency plumbing there often involves a burst pipe or backup reaching several units quickly. In this hilltop community above the Mill Creek valley, we isolate the problem to one unit and keep water running for the rest.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'In densely built multi-unit housing, a single burst pipe or backup can affect several units quickly, so fast shutoff and repair matter. We respond fast.',
    ],
    commonIntro: "In the multi-unit buildings of Roll Hill, the emergencies we see most often are:",
    localFaqs: [{ q: 'Do you handle apartment buildings at Roll Hill?', a: 'Yes. We work on multi-unit buildings and can isolate a problem to one unit without shutting down water for the whole building.' }],
  },
  {
    slug: 'east-westwood', neighborhood: 'East Westwood', city: 'Cincinnati', state: 'OH', zip: '45211',
    county: 'Cincinnati Neighborhoods',
    intro:
      'East Westwood sits beside Westwood, North Fairmount and English Woods, and its emergency plumbing mostly comes from aging pipe. Early- and mid-1900s homes here see corrosion leaks and worn drains. Same-day help is typical.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood next to Westwood, North Fairmount and English Woods, with streets of early- and mid-1900s homes.',
      'The older homes carry aging plumbing prone to corrosion leaks, and older drains back up. We respond fast.',
    ],
    commonIntro: "In East Westwood's older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach East Westwood?', a: 'East Westwood is within our west-side service area. We are on call most days and aim for same-day arrival.' }],
    adjacent: [
      { name: 'Westwood', slug: 'westwood' },
      { name: 'North Fairmount', slug: 'north-fairmount' },
      { name: 'English Woods', slug: 'english-woods' },
      { name: 'Villages of Roll Hill', slug: 'villages-of-roll-hill' },
    ],
  },
  {
    slug: 'western-hills', neighborhood: 'Western Hills', city: 'Cincinnati', state: 'OH', zip: '45211',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Around Western Hills Plaza and Glenway Avenue, emergency plumbing in Western Hills mostly means corroding galvanized lines, aging water heaters and root-prone sewer laterals. The mid-century and older homes here are at the age where all three show up. Most visits happen the same day.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with mostly mid-century homes and some older ones.',
      'Across that older housing, corroding galvanized lines, aging water heaters, and clay or cast-iron sewer laterals are the common sources of an emergency. We handle them fast.',
    ],
    commonIntro: "Across Western Hills' older and mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Western Hills?', a: 'Western Hills is well within our west-side service area along Glenway. We are on call most days with same-day service.' }],
  },
  {
    slug: 'california', neighborhood: 'California', city: 'Cincinnati', state: 'OH', zip: '45230',
    county: 'Cincinnati Neighborhoods',
    intro:
      'California is Cincinnati’s far-east riverfront neighborhood on Kellogg Avenue, and its riverfront streets can see basement flooding when the Ohio runs high, a common emergency plumbing problem. Its mostly mid-century homes carry aging plumbing too. A fast response keeps a backup from ruining a lower level, and we usually arrive the same day.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, next to Riverbend and the old Coney Island grounds in Anderson Township, set on low ground beside the Ohio River.',
      'That riverside position makes high water and backups a recurring risk, and the mostly mid-century homes here carry aging plumbing. A fast local response keeps a backup from ruining a lower level.',
    ],
    commonIntro: "Along California's riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My California home backs up when the river is high — can you help?', a: 'Yes. We handle emergency backups and failed sump pumps and can recommend a backwater valve suited to riverfront homes along Kellogg Avenue.' }],
    adjacent: [
      { name: 'Mount Washington', slug: 'mount-washington' },
      { name: 'East End', slug: 'east-end' },
    ],
  },
  {
    slug: 'carthage', neighborhood: 'Carthage', city: 'Cincinnati', state: 'OH', zip: '45216',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Carthage, home to the Hamilton County Fairgrounds, has pre-1940 homes whose aging pipe drives most emergency plumbing along Vine Street. Leaks and drain backups in those old lines can start without warning in this former village. We usually respond the same day.',
    relevance: [
      'Carthage (ZIP 45216) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older homes, most built before 1940.',
      'The age of the housing means aging plumbing is common, and leaks and drain backups follow. We respond fast.',
    ],
    commonIntro: "In Carthage's older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Carthage?', a: 'Carthage is within our north-side service area along Vine Street. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'winton-hills', neighborhood: 'Winton Hills', city: 'Cincinnati', state: 'OH', zip: '45232',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Multi-unit housing near Winton Road means a burst pipe in Winton Hills can spread to the neighbors quickly, so emergency plumbing here is about containment. Most homes here are CMHA public housing, such as Winton Terrace and Findlater Gardens, and almost every household rents. We send someone the same day to keep it contained.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, where most homes are CMHA public housing in Winton Terrace and Findlater Gardens, alongside industrial areas.',
      'Densely built multi-unit homes mean a burst pipe or backup can affect several units, so we respond fast to keep problems contained.',
    ],
    commonIntro: "In Winton Hills' homes and multi-unit buildings, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Winton Hills?', a: 'Winton Hills is within our north-side service area near Winton Road. We are on call most days with same-day service.' }],
  },
  {
    slug: 'roselawn', neighborhood: 'Roselawn', city: 'Cincinnati', state: 'OH', zip: '45237',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Roselawn’s mid-century homes and apartment buildings along Reading Road are at the age where supply lines corrode and water heaters quit, which covers most emergency plumbing there. Older apartments add heavy wear on top. Help usually arrives the same day.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mostly mid-century homes and apartment buildings, plus some from before 1940.',
      'Homes from the mid-1900s are now well into the age where supply lines corrode and water heaters fail, while older apartments add heavy plumbing wear. We respond fast.',
    ],
    commonIntro: "Across Roselawn's mid-century homes and apartments, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Roselawn?', a: 'Roselawn is well within our north-side service area along Reading Road. We are on call most days with same-day service.' }],
  },
  {
    slug: 'mount-airy', neighborhood: 'Mount Airy', city: 'Cincinnati', state: 'OH', zip: '45239',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Mount Airy sits next to Mount Airy Forest, and its mid-century homes and rentals account for most emergency plumbing here. Aging pipe prone to corrosion leaks and failing water heaters top the list. We fix most of these the same day.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, the largest park in Cincinnati’s system, with mid-century homes and apartment buildings on hilly, wooded streets.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters. We respond fast.',
    ],
    commonIntro: "Across Mount Airy's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Mount Airy?', a: 'Mount Airy is within our northwest-side service area near the forest. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'hartwell', neighborhood: 'Hartwell', city: 'Cincinnati', state: 'OH', zip: '45216',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Hartwell grew as a railroad suburb, and emergency plumbing in its older homes, many from the 1940s and before, usually involves aging supply lines and drains. Corrosion leads to sudden leaks on these streets. We respond fast to protect historic details and can usually be there the same day.',
    relevance: [
      'Hartwell (ZIP 45216) is a historic north-side neighborhood platted in 1868 as a railroad suburb, with a mix of pre-1940 and mid-century homes.',
      'Those older homes carry aging plumbing, where corroded supply lines and aging drains lead to sudden leaks. We respond fast to protect their historic details.',
    ],
    commonIntro: "In Hartwell's older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Hartwell?', a: 'Hartwell is well within our north-side service area. We are on call most days with same-day service.' }],
  },
  {
    slug: 'kennedy-heights', neighborhood: 'Kennedy Heights', city: 'Cincinnati', state: 'OH', zip: '45213',
    county: 'Cincinnati Neighborhoods',
    intro:
      'Kennedy Heights started as a Victorian-era resort community, and emergency plumbing in its large early-1900s homes on the hilltop mostly comes from original pipe. Corrosion leaks and aging drains are the usual problems. We handle them the same day to keep the damage contained.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes.',
      'The age of the housing means original plumbing is common, with corrosion leaks and aging drains the usual emergencies. We respond every day to keep the damage contained.',
    ],
    commonIntro: "In Kennedy Heights' historic homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Kennedy Heights?', a: 'Kennedy Heights is well within our east-side service area. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },

  // ── Hamilton County, OH suburbs ───────────────────────────────────────
  {
    slug: 'st-bernard', neighborhood: 'St. Bernard', state: 'OH', zip: '45217', county: 'Hamilton County, OH',
    intro:
      'St. Bernard’s emergency plumbing traces back to the dense grid of early-1900s homes built around the Procter & Gamble Ivorydale complex. Corroded galvanized lines and aging cast-iron drains on small valley lots fail often, and we move fast to keep one home’s problem from reaching the next.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'That tightly packed, century-old housing is where plumbing emergencies cluster — corroded galvanized lines and aging cast-iron drains on small valley lots. We respond fast to keep one home’s problem from reaching the next.',
    ],
    commonIntro: "In St. Bernard's dense, early-1900s homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach St. Bernard?', a: 'St. Bernard sits right in the middle of our service area, surrounded by Cincinnati, so it is a quick reach. We are on call every day, on weekdays and weekends alike with same-day service.' }],
  },
  {
    slug: 'elmwood-place', neighborhood: 'Elmwood Place', state: 'OH', zip: '45216', county: 'Hamilton County, OH',
    intro:
      'Elmwood Place is a tiny village of closely spaced early-1900s homes on low Mill Creek valley ground, and emergency plumbing here usually follows heavy rain. Backups are the main risk, with aging pipe in the old, tightly packed housing close behind. We usually get there the same day.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'The low valley ground brings a real risk of backups in heavy rain, and the old, tightly packed housing runs on aging plumbing. We respond every day, weekends included.',
    ],
    commonIntro: "In Elmwood Place's dense valley homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Elmwood Place?', a: 'Elmwood Place is a compact village within our service area in the Mill Creek valley. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'delhi-hills', neighborhood: 'Delhi Hills', state: 'OH', zip: '45233', county: 'Hamilton County, OH',
    intro:
      'Delhi Hills, with its greenhouse and floral growing roots, has mid-century homes on hilly streets above the Ohio River, and failing water heaters and corrosion leaks make up most emergency plumbing there. The hillside grade also adds demand on drains in heavy rain. Most jobs are same day.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters, and the hillside grade adds demand on drains during heavy rain. We respond every day.',
    ],
    commonIntro: "Across Delhi Hills' mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Delhi Hills?', a: 'Delhi Hills is well within our west-side service area. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'golf-manor', neighborhood: 'Golf Manor', state: 'OH', zip: '45237', county: 'Hamilton County, OH',
    intro:
      'Golf Manor is a small village of modest mid-century homes, and emergency plumbing there mostly means supply lines that have corroded and water heaters that have failed. The compact grid sits completely surrounded by Cincinnati, so it is a fast reach for us, usually same day.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond every day, Sundays too.',
    ],
    commonIntro: "In Golf Manor's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Golf Manor?', a: 'Golf Manor is centrally located, surrounded by Cincinnati, so it is a fast reach. We are on call every day with same-day service.' }],
  },
  {
    slug: 'fairfax', neighborhood: 'Fairfax', state: 'OH', zip: '45227', county: 'Hamilton County, OH',
    intro:
      'Fairfax’s early- and mid-1900s homes along Wooster Pike near Mariemont see corrosion leaks and failing water heaters more than any other emergency plumbing problem. Aging plumbing is common across this small east-side village. We usually handle it the same day, weekends included.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'The age of the housing means aging plumbing is common, with corrosion leaks and failing water heaters the usual emergencies. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "In Fairfax's older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Fairfax?', a: 'Fairfax is well within our east-side service area near Mariemont. We are on call every day, weekends included, with same-day service.' }],
  },
  {
    slug: 'mack', neighborhood: 'Mack', state: 'OH', zip: '45248', county: 'Hamilton County, OH',
    intro:
      'In Mack, emergency plumbing splits by house age. The newer Green Township homes now have water heaters and supply lines old enough to fail, while the mid-century houses get the corrosion leaks typical of aging pipe. We respond any day of the week, usually the same day.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'Even newer homes here are now old enough for water heaters and supply lines to fail, while older houses see the corrosion leaks typical of aging plumbing. We respond any day of the week.',
    ],
    commonIntro: "Across Mack's mid-century and newer homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Mack?', a: 'Mack is well within our west-side service area in Green Township. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'monfort-heights', neighborhood: 'Monfort Heights', state: 'OH', zip: '45247', county: 'Hamilton County, OH',
    intro:
      'Sewer laterals backing up and corroded supply lines are typical emergency plumbing jobs in Monfort Heights, where most homes date to the mid-1900s. Water heaters in this Green Township suburb are failing at the same age. We handle all three, weekends included, usually the same day.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'Homes from the mid-1900s are now well into the age where supply lines corrode, water heaters fail, and sewer laterals back up. We handle those emergencies every day, weekends included.',
    ],
    commonIntro: "Across Monfort Heights' mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Monfort Heights?', a: 'Monfort Heights is well within our west-side service area. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'bridgetown', neighborhood: 'Bridgetown', state: 'OH', zip: '45248', county: 'Hamilton County, OH',
    intro:
      'When a water heater dies or a pipe bursts in Bridgetown, that is emergency plumbing we can usually handle the same day. Aging water heaters, worn supply lines and the occasional burst pipe are most of what we see in this Green Township community of mid-century and newer homes.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and the occasional burst pipe are the emergencies we are called for most here. We respond every day.',
    ],
    commonIntro: "Across Bridgetown's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Bridgetown?', a: 'Bridgetown is well within our west-side service area in Green Township. We are on call every day, including Saturdays and Sundays, with same-day service.' }],
  },
  {
    slug: 'finneytown', neighborhood: 'Finneytown', state: 'OH', zip: '45231', county: 'Hamilton County, OH',
    intro:
      'Finneytown’s mid-century homes in Springfield Township are prone to corrosion leaks and water heaters that give out, the two emergency plumbing jobs we handle most there. Homes of that era carry decades-old pipe. We respond the same day on most jobs, Sundays too.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters, the emergencies we handle most. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Finneytown's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Finneytown?', a: 'Finneytown is well within our north-side service area. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'amberley', neighborhood: 'Amberley', state: 'OH', zip: '45237', county: 'Hamilton County, OH',
    intro:
      'On Amberley Village’s big wooded lots, larger homes mean larger plumbing systems, and emergency plumbing there often starts with a leak that has been hiding for a while. A failing line can do real damage before anyone notices. We respond fast to limit it, usually the same day.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'Larger homes mean larger plumbing systems, where a hidden leak or failing line can do real damage before it is noticed. We respond fast to limit it.',
    ],
    commonIntro: "In Amberley's large homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Amberley?', a: 'Amberley Village is well within our north-side service area. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'arlington-heights', neighborhood: 'Arlington Heights', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro:
      'Arlington Heights is a small Mill Creek valley village with a compact grid of older homes, so emergency plumbing there often follows heavy rain and a sewer backup. Aging plumbing in the older housing adds leaks to the mix. Help usually arrives the same day.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'The low valley ground raises the risk of backups in heavy rain, and the older housing runs on aging plumbing. We respond every day.',
    ],
    commonIntro: "In Arlington Heights' older valley homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Arlington Heights?', a: 'Arlington Heights is within our service area in the Mill Creek valley. We are on call every day, including Saturdays and Sundays, with same-day service.' }],
  },
  {
    slug: 'north-college-hill', neighborhood: 'North College Hill', state: 'OH', zip: '45239', county: 'Hamilton County, OH',
    intro:
      'Tightly packed early- and mid-1900s homes in North College Hill run on aging galvanized and cast-iron plumbing, and corrosion leaks and drain backups drive most emergency plumbing there. This small city just north of College Hill is a quick reach, usually same day.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'That older, tightly packed housing runs on aging galvanized and cast-iron plumbing, so corrosion leaks and drain backups are the emergencies we are called for most. We respond every day, Sundays too.',
    ],
    commonIntro: "In North College Hill's older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach North College Hill?', a: 'North College Hill is well within our north-side service area. We are on call every day with same-day service.' }],
  },
  {
    slug: 'newtown', neighborhood: 'Newtown', state: 'OH', zip: '45244', county: 'Hamilton County, OH',
    intro:
      'Newtown’s older homes sit on low river-bottom ground near the Little Miami River, so emergency plumbing here often means flooding and backups after heavy rain. Aging pipe in those older houses adds leaks to it. We clear backups and failed sump pumps, usually the same day.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'That low ground brings a real risk of flooding and backups in heavy rain, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Newtown's older homes near the Little Miami, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My Newtown home backs up in heavy rain — can you help?', a: 'Yes. We clear emergency backups and failed sump pumps and can advise on a backwater valve suited to low-lying homes near the river.' }],
  },
  {
    slug: 'turpin-hills', neighborhood: 'Turpin Hills', state: 'OH', zip: '45244', county: 'Hamilton County, OH',
    intro:
      'Worn supply lines and failing sump pumps account for most emergency plumbing in Turpin Hills, along with aging water heaters. This Anderson Township community has mid-century and newer homes, and both are at the age where those parts give out. We usually reach it the same day.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Turpin Hills' homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Turpin Hills?', a: 'Turpin Hills is well within our east-side service area in Anderson Township. We are on call every day, weekends included, with same-day service.' }],
  },
  {
    slug: 'silverton', neighborhood: 'Silverton', state: 'OH', zip: '45236', county: 'Hamilton County, OH',
    intro:
      'Silverton is a small city on Montgomery Road with early- and mid-1900s homes, where corrosion leaks and failing water heaters are routine emergency plumbing jobs. The age of the housing makes aging plumbing common across its established streets. Same-day service is typical.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'The age of the housing means aging plumbing is common, with corrosion leaks and failing water heaters the usual emergencies. We respond any day of the week.',
    ],
    commonIntro: "In Silverton's older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Silverton?', a: 'Silverton is well within our east-side service area along Montgomery Road. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'lockland', neighborhood: 'Lockland', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro:
      'Lockland was built around mills, and emergency plumbing in its closely spaced worker housing usually follows heavy rain on low Mill Creek valley ground. Backups are the big risk, and the old, tightly packed homes also have aging pipe prone to leaks. We usually come the same day.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'The low valley ground brings a real risk of backups in heavy rain, and the old, tightly packed homes run on aging plumbing prone to leaks. We respond every day, weekends included.',
    ],
    commonIntro: "In Lockland's older valley homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Lockland?', a: 'Lockland is within our service area in the Mill Creek valley. We are on call any day of the week with same-day service.' }],
  },
  {
    slug: 'groesbeck', neighborhood: 'Groesbeck', state: 'OH', zip: '45239', county: 'Hamilton County, OH',
    intro:
      'Groesbeck is mostly mid-century houses in Colerain Township, and emergency plumbing there shows up as corrosion leaks and dead water heaters. Homes of that era carry aging plumbing, and those two failures are what we handle most. We usually reach Groesbeck the same day.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters — the emergencies we handle most. We respond every day.',
    ],
    commonIntro: "Across Groesbeck's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Groesbeck?', a: 'Groesbeck is well within our northwest service area in Colerain Township. We are on call every day, including Saturdays and Sundays, with same-day service.' }],
  },
  {
    slug: 'mount-healthy', neighborhood: 'Mount Healthy', state: 'OH', zip: '45231', county: 'Hamilton County, OH',
    intro:
      'Mount Healthy’s old town center and early-1900s streets carry plenty of galvanized and cast-iron pipe, the source of most emergency plumbing here. Corrosion leaks and drain backups are the usual problems, in mid-century homes too. Our plumbers usually come the same day.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes.',
      'The age of the housing means aging galvanized and cast-iron plumbing is common, with corrosion leaks and drain backups the usual emergencies. We respond every day, Sundays too.',
    ],
    commonIntro: "In Mount Healthy's older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Mount Healthy?', a: 'Mount Healthy is well within our north-side service area. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'reading', neighborhood: 'Reading', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro:
      'Reading, known for its bridal-shop district, sits in the Mill Creek valley, where heavy rain can back up sewers in older homes and set off emergency plumbing jobs. The older housing also runs on aging plumbing prone to leaks. We usually answer the same day.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'The low valley ground raises the risk of backups in heavy rain, and the older housing runs on aging plumbing prone to leaks. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Reading's older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Reading?', a: 'Reading is well within our service area in the Mill Creek valley. We are on call every day, weekends included, with same-day service.' }],
  },
  {
    slug: 'dent', neighborhood: 'Dent', state: 'OH', zip: '45247', county: 'Hamilton County, OH',
    intro:
      'Dent homes range from mid-century to newer, and the emergency plumbing we see most there is aging water heaters, worn supply lines and the occasional burst pipe. This Green Township community is well within our west-side area. We usually reach it the same day.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and the occasional burst pipe are the emergencies we are called for most here. We respond any day of the week.',
    ],
    commonIntro: "Across Dent's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Dent?', a: 'Dent is well within our west-side service area in Green Township. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'deer-park', neighborhood: 'Deer Park', state: 'OH', zip: '45236', county: 'Hamilton County, OH',
    intro:
      'Quiet streets of mid-century homes make up most of Deer Park, and emergency plumbing there follows their age: supply lines corrode and water heaters fail. This small, settled city on the east side is well within our area. Same-day visits are typical, weekends included.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond every day, weekends included.',
    ],
    commonIntro: "Across Deer Park's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Deer Park?', a: 'Deer Park is well within our east-side service area. We are on call any day of the week with same-day service.' }],
  },
  {
    slug: 'terrace-park', neighborhood: 'Terrace Park', state: 'OH', zip: '45174', county: 'Hamilton County, OH',
    intro:
      'Terrace Park’s early-1900s homes near the Little Miami River face two kinds of emergency plumbing: aging pipe and flood risk in heavy rain. Low ground near the river adds backups to the mix on its tree-lined streets. We respond fast to protect finished spaces, usually the same day.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'The older homes here carry aging plumbing, and the low ground near the river adds a flood and backup risk in heavy rain. We respond fast to protect finished spaces.',
    ],
    commonIntro: "In Terrace Park's established older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Terrace Park?', a: 'Terrace Park is well within our east-side service area near the Little Miami. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },
  {
    slug: 'dry-run', neighborhood: 'Dry Run', state: 'OH', zip: '45244', county: 'Hamilton County, OH',
    intro:
      'Even the newer homes in Dry Run are old enough for water heaters and sump pumps to fail, and those make up most emergency plumbing there. Older houses in this Anderson Township community see corrosion leaks as well. We usually cover it the same day.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Even newer homes here are old enough for water heaters and sump pumps to fail, while older houses see corrosion leaks. We respond any day of the week.',
    ],
    commonIntro: "Across Dry Run's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Dry Run?', a: 'Dry Run is well within our east-side service area in Anderson Township. We are on call every day, on weekdays and weekends alike with same-day service.' }],
  },
  {
    slug: 'white-oak', neighborhood: 'White Oak', state: 'OH', zip: '45247', county: 'Hamilton County, OH',
    intro:
      'Failing sump pumps and worn supply lines are the emergency plumbing problems we see most from White Oak, along with aging water heaters. This Green Township community is largely mid-century and newer single-family homes. We reach it the same day on most jobs, weekends included.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond 7 days a week.',
    ],
    commonIntro: "Across White Oak's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach White Oak?', a: 'White Oak is well within our northwest-side service area in Green Township. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'forestville', neighborhood: 'Forestville', state: 'OH', zip: '45230', county: 'Hamilton County, OH',
    intro:
      'Forestville homes from the mid-century on have reached the age where water heaters, supply lines and sump pumps give out, and that is most emergency plumbing there. This Anderson Township community sits well within our east-side area. We usually come the same day.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Homes of that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Forestville's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Forestville?', a: 'Forestville is well within our east-side service area in Anderson Township. We are on call every day, weekends included, with same-day service.' }],
  },
  {
    slug: 'cherry-grove', neighborhood: 'Cherry Grove', state: 'OH', zip: '45230', county: 'Hamilton County, OH',
    intro:
      'A burst pipe or a dead water heater in Cherry Grove is the typical emergency plumbing job, along with worn supply lines. This Anderson Township community has mid-century and newer single-family homes, all at an age where those parts fail. We usually get there the same day.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Aging water heaters, worn supply lines, and the occasional burst pipe are the emergencies we are called for most here. We respond any day of the week.',
    ],
    commonIntro: "Across Cherry Grove's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Cherry Grove?', a: 'Cherry Grove is well within our east-side service area in Anderson Township. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'kenwood', neighborhood: 'Kenwood', state: 'OH', zip: '45236', county: 'Hamilton County, OH',
    intro:
      'Around Kenwood Towne Centre, emergency plumbing in Kenwood usually means a hidden leak or a water heater that quit without warning. Mid-century homes and newer, larger houses both have aging supply lines that can fail. We respond every day, weekends included, usually the same day.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'Larger and older homes both have plumbing that can fail without warning — aging supply lines, water heaters, and hidden leaks. We respond every day, weekends included.',
    ],
    commonIntro: "Across Kenwood's mid-century and larger homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Kenwood?', a: 'Kenwood is well within our east-side service area. We are on call any day of the week with same-day service.' }],
  },
  {
    slug: 'lincoln-heights', neighborhood: 'Lincoln Heights', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro:
      'Lincoln Heights, one of the first self-governed Black municipalities in the northern United States, sits on low Mill Creek valley ground, so emergency plumbing there often follows heavy rain. Its older, modest homes see drain backups and aging pipe that leaks. We usually come the same day.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'The low valley ground brings a real risk of backups in heavy rain, and the older housing runs on aging plumbing prone to leaks. We respond every day.',
    ],
    commonIntro: "In Lincoln Heights' older valley homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Lincoln Heights?', a: 'Lincoln Heights is within our service area in the Mill Creek valley. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'dillonvale', neighborhood: 'Dillonvale', state: 'OH', zip: '45236', county: 'Hamilton County, OH',
    intro:
      'Dillonvale, near Kenwood in Sycamore Township, is mostly mid-century homes now at the age where supply lines corrode and water heaters fail, which covers most emergency plumbing there. The settled neighborhoods see the same problems street to street. Same-day service is typical.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Dillonvale's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Dillonvale?', a: 'Dillonvale is well within our east-side service area near Kenwood. We are on call every day with same-day service.' }],
  },
  {
    slug: 'woodlawn', neighborhood: 'Woodlawn', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro:
      'Woodlawn mixes homes with industrial corridors on low Mill Creek valley ground, so emergency plumbing in the village often means a sewer backup in heavy rain. Older homes here also run on aging plumbing prone to leaks. We usually get there the same day.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'The low valley ground raises the risk of backups in heavy rain, and the older homes run on aging plumbing prone to leaks. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Woodlawn's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Woodlawn?', a: 'Woodlawn is within our service area in the Mill Creek valley. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },
  {
    slug: 'addyston', neighborhood: 'Addyston', state: 'OH', zip: '45001', county: 'Hamilton County, OH',
    intro:
      'Addyston is an old mill town on the Ohio River, and emergency plumbing in its century-old worker homes often means high water pushing backups into basements. The closely spaced older homes also carry aging pipe. A fast response keeps the damage contained, usually same day.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'Its riverside position makes high water and backups a real risk, and the century-old homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Addyston's older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Addyston?', a: 'Addyston is part of our far-west river service area. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'greenhills', neighborhood: 'Greenhills', state: 'OH', zip: '45218', county: 'Hamilton County, OH',
    intro:
      'Greenhills was built in the 1930s as a New Deal Greenbelt town, and emergency plumbing in its original cottages and townhomes deals with close to a century of wear. Original supply lines and drains fail with little warning. We repair without disturbing the historic character, usually the same day.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Those 1930s-era homes carry close to a century of plumbing wear — original supply lines and drains that fail with little warning. We take care to repair them without disturbing the historic character.',
    ],
    commonIntro: "In Greenhills' 1930s planned-community homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'Do you work on the historic Greenhills homes?', a: 'Yes. We work throughout Greenhills and take care to repair aging plumbing in its original Greenbelt-era homes without disturbing historic features.' }],
  },
  {
    slug: 'northbrook', neighborhood: 'Northbrook', state: 'OH', zip: '45251', county: 'Hamilton County, OH',
    intro:
      'Northbrook’s Colerain Township streets are mostly mid-century houses, and emergency plumbing there usually means a corrosion leak or a water heater that has given out. Homes of that era carry aging plumbing, so those two failures repeat across the neighborhood. We usually reach Northbrook the same day.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters — the emergencies we handle most. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Northbrook's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Northbrook?', a: 'Northbrook is well within our northwest service area in Colerain Township. We are on call every day with same-day service.' }],
  },
  {
    slug: 'indian-hill', neighborhood: 'Indian Hill', state: 'OH', zip: '45243', county: 'Hamilton County, OH',
    intro:
      'Indian Hill estates sit on multi-acre lots with long water and sewer runs, so emergency plumbing there often starts with a leak that has done damage before anyone found it. Some homes also rely on private wells and septic. We handle those larger systems, usually the same day.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Big properties mean long water and sewer runs and large plumbing systems, where a leak or line failure can do real damage before it is found — and some homes rely on private wells and septic. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "On Indian Hill's large estates, the emergencies we handle most often are:",
    localFaqs: [{ q: 'Do you work on the large estate properties in Indian Hill?', a: 'Yes. We handle the larger plumbing systems and long service runs common on Indian Hill properties, and we are on call every day for emergencies.' }],
  },
  {
    slug: 'evendale', neighborhood: 'Evendale', state: 'OH', zip: '45241', county: 'Hamilton County, OH',
    intro:
      'Evendale has GE Aerospace and other industry alongside its mid-century neighborhoods, and emergency plumbing in both comes down to burst pipes, worn supply lines and aging water heaters. We handle homes and commercial buildings in this north-side village, usually the same day.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'From mid-century homes to commercial and industrial buildings, the plumbing here spans a wide range, but aging water heaters, worn supply lines, and burst pipes are the emergencies we respond to most. We are available any day of the week.',
    ],
    commonIntro: "Across Evendale's homes and buildings, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Evendale?', a: 'Evendale is well within our north-side service area. We are on call every day, on weekdays and weekends alike with same-day service.' }],
  },
  {
    slug: 'glendale', neighborhood: 'Glendale', state: 'OH', zip: '45246', county: 'Hamilton County, OH',
    intro:
      'Glendale was one of the country’s earliest planned railroad suburbs, and emergency plumbing in its preserved Victorian homes usually involves original pipe. Corroded supply lines and aging drains lead to sudden leaks along the winding, tree-lined streets. We repair with care for the historic details, usually same day.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'Those 19th-century homes often still carry original plumbing, where corroded supply lines and aging drains lead to sudden leaks. We repair with care for the historic details.',
    ],
    commonIntro: "In Glendale's preserved Victorian homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'Do you work on the historic homes in Glendale?', a: 'Yes. We work throughout Glendale and take care to repair aging plumbing in its Victorian homes without disturbing original features.' }],
  },
  {
    slug: 'sharonville', neighborhood: 'Sharonville', state: 'OH', zip: '45241', county: 'Hamilton County, OH',
    intro:
      'Sharonville emergency plumbing covers two kinds of property: mid-century homes near Sharon Woods where supply lines corrode and water heaters fail, and commercial buildings along the industrial corridors with problems of their own. We handle both, usually the same day, Sundays included.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention center, and industrial corridors.',
      'Mid-century homes here reach the age where supply lines corrode and water heaters fail, and commercial buildings add their own emergencies. We respond every day, Sundays too to both.',
    ],
    commonIntro: "Across Sharonville's homes and businesses, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Sharonville?', a: 'Sharonville is well within our north-side service area. We are on call any day of the week with same-day service.' }],
  },
  {
    slug: 'northgate', neighborhood: 'Northgate', state: 'OH', zip: '45251', county: 'Hamilton County, OH',
    intro:
      'Around the Northgate Mall corridor, emergency plumbing in Northgate mostly involves water heaters and sump pumps that are wearing out. The mid-century and newer homes in this Colerain Township area also see worn supply lines. We usually reach Northgate the same day.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond every day.',
    ],
    commonIntro: "Across Northgate's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Northgate?', a: 'Northgate is well within our northwest service area in Colerain Township. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'springdale', neighborhood: 'Springdale', state: 'OH', zip: '45246', county: 'Hamilton County, OH',
    intro:
      'Springdale’s mid-century neighborhoods along the Tri-County corridor are at the age where supply lines corrode and water heaters fail, and most emergency plumbing there follows from that. Its commercial and retail buildings have emergencies of their own. Help usually arrives the same day.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'Mid-century homes here are now at the age where supply lines corrode and water heaters fail, and commercial buildings add their own emergencies. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Springdale's homes and businesses, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Springdale?', a: 'Springdale is well within our north-side service area. We are on call every day with same-day service.' }],
  },
  {
    slug: 'miamitown', neighborhood: 'Miamitown', state: 'OH', zip: '45041', county: 'Hamilton County, OH',
    intro:
      'Low river-bottom ground along the Great Miami River puts Miamitown’s older homes at risk of flooding and backups, which drives most emergency plumbing in this far-west community. Aging plumbing in those homes adds leaks to the list. We clear backups and failed sump pumps, usually the same day.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'That low ground brings a real risk of flooding and backups in heavy rain, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Miamitown's older riverside homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My Miamitown home backs up in heavy rain — can you help?', a: 'Yes. We clear emergency backups and failed sump pumps and can advise on a backwater valve suited to low-lying homes near the Great Miami River.' }],
  },
  {
    slug: 'forest-park', neighborhood: 'Forest Park', state: 'OH', zip: '45240', county: 'Hamilton County, OH',
    intro:
      'Forest Park was planned from the 1960s, and emergency plumbing in its mid-century homes now means corroded supply lines, failing water heaters and worn-out sump pumps. Homes from that era are well into the age where all three give out. We usually handle them the same day, weekends included.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'Homes built in that era are now well into the age where supply lines corrode, water heaters fail, and sump pumps wear out. We handle those emergencies every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Forest Park's planned-era homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Forest Park?', a: 'Forest Park is well within our north-side service area. We are on call every day, weekends included, with same-day service.' }],
  },
  {
    slug: 'pleasant-run', neighborhood: 'Pleasant Run', state: 'OH', zip: '45240', county: 'Hamilton County, OH',
    intro:
      'Failing sump pumps and aging water heaters top the emergency plumbing list in Pleasant Run, with worn supply lines close behind. This Springfield Township community of mid-century and newer homes is well within our north-side area. We usually get there the same day.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond any day of the week.',
    ],
    commonIntro: "Across Pleasant Run's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Pleasant Run?', a: 'Pleasant Run is well within our north-side service area. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'cleves', neighborhood: 'Cleves', state: 'OH', zip: '45002', county: 'Hamilton County, OH',
    intro:
      'Cleves sits near where the Great Miami River meets the Ohio, and emergency plumbing in its older homes on low ground usually follows high water. Backups are the recurring risk, and aging plumbing adds leaks. We aim to arrive the same day, before a backup ruins a lower level.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'That riverside position makes high water and backups a recurring risk, and the older housing carries aging plumbing. A fast local response keeps a backup from ruining a lower level.',
    ],
    commonIntro: "In Cleves' older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'My Cleves home floods in heavy rain — can you help?', a: 'Yes. We handle emergency backups and failed sump pumps and can recommend a backwater valve suited to low-lying homes near the rivers.' }],
  },
  {
    slug: 'north-bend', neighborhood: 'North Bend', state: 'OH', zip: '45052', county: 'Hamilton County, OH',
    intro:
      'North Bend, the burial place of President William Henry Harrison, has older homes on low ground beside the Ohio River, and emergency plumbing there usually follows high water. Backups are the main risk, with aging plumbing in those older houses close behind. We usually come the same day.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'Its riverfront position makes high water and backups a real risk, and the older homes carry aging plumbing. We respond fast to keep the damage contained.',
    ],
    commonIntro: "In North Bend's older riverside homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach North Bend?', a: 'North Bend is part of our far-west river service area. We are on call every day and aim for same-day arrival.' }],
  },
  {
    // Loveland spans three counties — primarily Clermont, part Warren, and a
    // small portion Hamilton. Grouped under Clermont, the largest share.
    slug: 'loveland', neighborhood: 'Loveland', state: 'OH', zip: '45140', county: 'Clermont County, OH',
    intro:
      'Loveland straddles the Little Miami River and the bike trail, and emergency plumbing in its older homes near the water deals with both aging pipe and flood risk. Low riverside ground adds backups in heavy rain, while the historic downtown has its own old plumbing. Same-day help is typical.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'The older homes near the river carry aging plumbing, and the low riverside ground adds a flood and backup risk in heavy rain. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Loveland's historic and riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Loveland?', a: 'Loveland is within our service area along the Little Miami River. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },
  {
    slug: 'harrison', neighborhood: 'Harrison', state: 'OH', zip: '45030', county: 'Hamilton County, OH',
    intro:
      'Out on the Indiana line, emergency plumbing in Harrison usually involves older homes near the Whitewater River. Their aging plumbing is prone to leaks, and the low ground near the river adds a backup risk in heavy rain. Newer homes see their own wear. We usually come the same day.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'The older homes carry aging plumbing prone to leaks, and the low ground near the Whitewater adds a backup risk in heavy rain. We respond any day of the week.',
    ],
    commonIntro: "Across Harrison's older and newer homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Harrison?', a: 'Harrison is part of our far-west service area near the Indiana line. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },

  // ── Kenton County, KY ─────────────────────────────────────────────────
  {
    slug: 'ludlow', neighborhood: 'Ludlow', state: 'KY', zip: '41016', county: 'Kenton County, KY',
    intro:
      'Ludlow’s Victorian and early-1900s homes near Elm Street still carry galvanized and cast-iron pipe, the root of most emergency plumbing in this river town. The riverfront also adds backup risk when the Ohio runs high. We usually reach Ludlow the same day, weekends included.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'Those century-old homes carry original galvanized and cast-iron plumbing, and the riverfront location adds a backup risk when the Ohio runs high. We respond every day, weekends included.',
    ],
    commonIntro: "In Ludlow's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Ludlow?', a: 'Ludlow is a core part of our Northern Kentucky service area along the river. We are on call any day of the week with same-day service.' }],
  },
  {
    slug: 'park-hills', neighborhood: 'Park Hills', state: 'KY', zip: '41011', county: 'Kenton County, KY',
    intro:
      'Park Hills’ early-1900s homes sit on steep streets beside Devou Park, and emergency plumbing there often follows heavy rain hitting basement drains hard. Aging pipe in those older homes adds leaks to the list. This hillside city above Covington is well within our area, usually same day.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'The older homes carry aging plumbing prone to leaks, and the hillside grade adds demand on basement drains in heavy rain. We respond every day.',
    ],
    commonIntro: "In Park Hills' older hillside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Park Hills?', a: 'Park Hills is well within our Northern Kentucky service area near Covington. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'bromley', neighborhood: 'Bromley', state: 'KY', zip: '41016', county: 'Kenton County, KY',
    intro:
      'Bromley is a small river village next to Ludlow, and emergency plumbing in its older homes usually starts when high water pushes a backup in. Those homes sit on low ground beside the Ohio and carry aging plumbing too. A fast response keeps the damage contained, usually same day.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'Its riverside position makes high water and backups a real risk, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Bromley's older riverside homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Bromley?', a: 'Bromley is within our Northern Kentucky river service area. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'fort-wright', neighborhood: 'Fort Wright', state: 'KY', zip: '41011', county: 'Kenton County, KY',
    intro:
      'On the hilltop above the river, Fort Wright’s mid-century homes are hitting the age where corroded supply lines and failing water heaters turn into emergency plumbing jobs. The hillside terrain also adds demand on drains in heavy rain. Service is usually same day, weekends included.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'Mid-century homes here reach the age where supply lines corrode and water heaters fail, and the hillside terrain adds demand on drains in heavy rain. We respond every day, weekends included.',
    ],
    commonIntro: "Across Fort Wright's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Fort Wright?', a: 'Fort Wright is well within our Northern Kentucky service area. We are on call any day of the week with same-day service.' }],
  },
  {
    slug: 'fort-mitchell', neighborhood: 'Fort Mitchell', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro:
      'Historic and mid-century homes along the Dixie Highway in Fort Mitchell see corrosion leaks and water heater failures more than any other emergency plumbing problem. Aging plumbing is common on these settled streets. We usually reach Fort Mitchell the same day, Saturdays and Sundays included.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'The older and mid-century homes here carry aging plumbing, with corrosion leaks and failing water heaters the usual emergencies. We respond every day.',
    ],
    commonIntro: "Across Fort Mitchell's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Fort Mitchell?', a: 'Fort Mitchell is well within our Northern Kentucky service area along Dixie Highway. We are on call every day, including Saturdays and Sundays, with same-day service.' }],
  },
  {
    slug: 'villa-hills', neighborhood: 'Villa Hills', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro:
      'Villa Hills’ hilltop grade puts extra demand on sump pumps and drains, which drives a good share of emergency plumbing in this Kenton County city. Even its newer homes are now old enough for water heaters and supply lines to fail. We usually arrive the same day.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'Even newer homes here reach the age where water heaters and supply lines fail, and the hillside grade adds demand on sump pumps and drains. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Villa Hills' homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Villa Hills?', a: 'Villa Hills is well within our Northern Kentucky service area. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'lakeside-park', neighborhood: 'Lakeside Park', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro:
      'Supply lines corrode and water heaters fail in Lakeside Park’s mid-century homes, and those are the emergency plumbing jobs we take most there. This small, settled Kenton County city has quiet streets of homes all reaching the same age. Same-day visits are typical, weekends included.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Lakeside Park's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Lakeside Park?', a: 'Lakeside Park is well within our Northern Kentucky service area. We are on call every day, weekends included, with same-day service.' }],
  },
  {
    slug: 'crescent-springs', neighborhood: 'Crescent Springs', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro:
      'Emergency plumbing in Crescent Springs mostly comes down to a failing sump pump, a leaking supply line or an aging water heater. This suburban Kenton County city has mid-century and newer homes, all at an age where those parts wear out. We usually get there the same day.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond any day of the week.',
    ],
    commonIntro: "Across Crescent Springs' homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Crescent Springs?', a: 'Crescent Springs is well within our Northern Kentucky service area. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'crestview-hills', neighborhood: 'Crestview Hills', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro:
      'Crestview Hills, home to Thomas More University, needs emergency plumbing for homes and for the commercial corridor by the mall. Mid-century and newer houses here are at the age where water heaters and supply lines fail, and businesses add their own problems. We usually handle both the same day.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'Mid-century and newer homes here reach the age where water heaters and supply lines fail, and commercial buildings add their own emergencies. We respond every day, weekends included.',
    ],
    commonIntro: "Across Crestview Hills' homes and businesses, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Crestview Hills?', a: 'Crestview Hills is well within our Northern Kentucky service area. We are on call any day of the week with same-day service.' }],
  },
  {
    slug: 'edgewood', neighborhood: 'Edgewood', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro:
      'Edgewood, home of St. Elizabeth Healthcare, has neighborhoods where emergency plumbing usually means failing water heaters, worn-out sump pumps or corroded supply lines. Its mid-century and newer homes have reached the age where all three show up. We usually come the same day.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'Homes of that era are now at the age where supply lines corrode, water heaters fail, and sump pumps wear out. We handle those emergencies every day.',
    ],
    commonIntro: "Across Edgewood's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Edgewood?', a: 'Edgewood is well within our Northern Kentucky service area. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'taylor-mill', neighborhood: 'Taylor Mill', state: 'KY', zip: '41015', county: 'Kenton County, KY',
    intro:
      'South of Covington, Taylor Mill’s hilltop homes put extra demand on sump pumps and drains when it rains hard, a regular source of emergency plumbing there. Even the newer houses now have water heaters and supply lines old enough to fail. We usually send someone the same day.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'Even newer homes here reach the age where water heaters and supply lines fail, and the hillside grade adds demand on sump pumps and drains. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Taylor Mill's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Taylor Mill?', a: 'Taylor Mill is well within our Northern Kentucky service area. We are on call every day with same-day service.' }],
  },
  {
    slug: 'elsmere', neighborhood: 'Elsmere', state: 'KY', zip: '41018', county: 'Kenton County, KY',
    intro:
      'Elsmere’s older and mid-century homes along Dixie Highway near Erlanger see corrosion leaks and failing water heaters, and those make up most emergency plumbing there. Aging plumbing is common across this established Kenton County city. Same-day service is typical, weekends included.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'The age of the housing means aging plumbing is common, with corrosion leaks and failing water heaters the usual emergencies. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Elsmere's older and mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Elsmere?', a: 'Elsmere is well within our Northern Kentucky service area along Dixie Highway. We are on call every day, weekends included, with same-day service.' }],
  },
  {
    slug: 'independence', neighborhood: 'Independence', state: 'KY', zip: '41051', county: 'Kenton County, KY',
    intro:
      'As Kenton County’s seat, Independence has two kinds of emergency plumbing: aging pipe in the historic core and worn-out water heaters and sump pumps in the newer subdivisions. Both reach the end of their life on a predictable timeline. We usually handle either the same day.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'Even in newer subdivisions, water heaters, sump pumps, and supply lines reach the end of their life on a predictable schedule, while the older core sees the issues typical of aging plumbing. We respond any day of the week.',
    ],
    commonIntro: "Across Independence's newer subdivisions and older core, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Independence?', a: 'Independence is part of our Northern Kentucky service area. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },

  // ── Campbell County, KY ───────────────────────────────────────────────
  {
    slug: 'dayton-ky', neighborhood: 'Dayton', city: 'Dayton', state: 'KY', zip: '41074', county: 'Campbell County, KY',
    intro:
      'Dayton sits beside Bellevue on the Ohio River, and emergency plumbing there usually involves late-1800s and early-1900s homes on original galvanized and cast-iron pipe. High water adds a backup risk on these tight streets. We usually reach this Northern Kentucky river city the same day.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'Those century-old homes carry original galvanized and cast-iron plumbing, and the riverfront location adds a backup risk when the river runs high. We respond every day, weekends included.',
    ],
    commonIntro: "In Dayton's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Dayton, KY?', a: 'Dayton is a core part of our Northern Kentucky service area along the river. We are on call any day of the week with same-day service.' }],
  },
  {
    slug: 'southgate', neighborhood: 'Southgate', state: 'KY', zip: '41071', county: 'Campbell County, KY',
    intro:
      'Between Newport and Fort Thomas, Southgate’s mid-century homes have reached the age where supply lines corrode and water heaters give out, and that is most emergency plumbing there. This small Campbell County city is well within our area. Help usually arrives the same day.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond every day.',
    ],
    commonIntro: "Across Southgate's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Southgate?', a: 'Southgate is well within our Northern Kentucky service area near Newport. We are on call every day, including Saturdays and Sundays, with same-day service.' }],
  },
  {
    slug: 'wilder', neighborhood: 'Wilder', state: 'KY', zip: '41076', county: 'Campbell County, KY',
    intro:
      'Along the Licking River corridor, emergency plumbing in Wilder covers homes and commercial buildings alike. Burst pipes, worn supply lines and aging water heaters are the problems we see most, from mid-century houses to industrial sites. We usually get there the same day, Sundays included.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'From mid-century homes to commercial buildings, aging water heaters, worn supply lines, and burst pipes are the emergencies we respond to most. We are available every day, Sundays too.',
    ],
    commonIntro: "Across Wilder's homes and businesses, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Wilder?', a: 'Wilder is well within our Northern Kentucky service area. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'highland-heights', neighborhood: 'Highland Heights', state: 'KY', zip: '41076', county: 'Campbell County, KY',
    intro:
      'Student rentals near Northern Kentucky University take hard use, and in Highland Heights that makes burst pipes and clogged drains the most common emergency plumbing jobs. Water heater failures in mid-century homes come up too. We work on homes and rentals around NKU, usually the same day.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'Densely used student rentals and mid-century homes both run on plumbing that fails under wear — burst pipes, water heater failures, and clogged drains. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Highland Heights' homes and rentals near NKU, the emergencies we see most often are:",
    localFaqs: [{ q: 'Do you handle student rentals near NKU in Highland Heights?', a: 'Yes. We work on the homes and rentals around the university and are available every day, weekends included for burst pipes and water heater failures.' }],
  },
  {
    slug: 'cold-spring', neighborhood: 'Cold Spring', state: 'KY', zip: '41076', county: 'Campbell County, KY',
    intro:
      'Cold Spring keeps growing along US-27, and emergency plumbing there splits by age: older houses get corrosion leaks while newer ones lose water heaters and supply lines. This Campbell County city mixes established neighborhoods and new subdivisions. We usually reach it the same day.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'Even newer homes here reach the age where water heaters and supply lines fail, while older houses see corrosion leaks. We respond any day of the week.',
    ],
    commonIntro: "Across Cold Spring's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Cold Spring?', a: 'Cold Spring is within our Northern Kentucky service area along US-27. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'alexandria', neighborhood: 'Alexandria', state: 'KY', zip: '41001', county: 'Campbell County, KY',
    intro:
      'Alexandria’s emergency plumbing ranges from well and septic fixes on semi-rural homes to water heaters and sump pumps failing in newer subdivisions. The historic core of the Campbell County seat adds aging plumbing. We usually handle all of it the same day, weekends included.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'Newer subdivisions reach the age where water heaters and sump pumps fail, while the older core and rural homes see aging plumbing and the occasional well or septic issue. We respond every day, weekends included.',
    ],
    commonIntro: "Across Alexandria's newer and older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Alexandria?', a: 'Alexandria is part of our southern Campbell County service area. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'melbourne', neighborhood: 'Melbourne', state: 'KY', zip: '41059', county: 'Campbell County, KY',
    intro:
      'Melbourne’s older homes sit on low ground along the Ohio east of Newport, so high water brings a real backup risk and most of the emergency plumbing in this small village. Aging plumbing in those homes adds leaks. A fast response keeps the damage contained, usually same day.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'Its riverside position makes high water and backups a real risk, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Melbourne's older riverside homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Melbourne?', a: 'Melbourne is within our Northern Kentucky river service area. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },

  // ── Boone County, KY ──────────────────────────────────────────────────
  {
    slug: 'hebron', neighborhood: 'Hebron', state: 'KY', zip: '41048', county: 'Boone County, KY',
    intro:
      'Near CVG airport, emergency plumbing in Hebron covers newer subdivisions with aging water heaters and sump pumps, and older homes where supply lines and drains wear out. This Boone County community is well within our area. We usually come the same day.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport (CVG), with a mix of newer subdivisions and some older homes.',
      'Newer homes reach the age where water heaters and sump pumps fail, while older properties see supply lines and drains wear out. We respond fast.',
    ],
    commonIntro: "Across Hebron's newer and older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Hebron?', a: 'Hebron is part of our Boone County service area near the airport. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'burlington', neighborhood: 'Burlington', state: 'KY', zip: '41005', county: 'Boone County, KY',
    intro:
      'Burlington’s historic core around the old courthouse has aging pipes, while the fast-growing subdivisions around it are wearing out water heaters and sump pumps, and both lead to emergency plumbing jobs. Rural homes in the Boone County seat add their own. Service is usually same day.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'Newer subdivisions reach the age where water heaters and sump pumps fail, while the historic core and rural homes see aging plumbing. We respond every day, weekends included.',
    ],
    commonIntro: "Across Burlington's newer and historic homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Burlington?', a: 'Burlington is part of our Boone County service area. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'union', neighborhood: 'Union', state: 'KY', zip: '41091', county: 'Boone County, KY',
    intro:
      'Union grew fast from the 1990s on, and emergency plumbing in those subdivision homes now follows a predictable pattern. Water heaters, sump pumps and supply lines are reaching the end of their life across this Boone County city. When one fails, we can usually be there the same day.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'Even in newer homes, water heaters, sump pumps, and supply lines reach the end of their life on a predictable schedule — the emergencies we are called for most here. We respond every day.',
    ],
    commonIntro: "Across Union's newer subdivisions, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Union?', a: 'Union is part of our Boone County service area. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'walton', neighborhood: 'Walton', state: 'KY', zip: '41094', county: 'Boone County, KY',
    intro:
      'At the southern edge of Boone County, emergency plumbing in Walton can mean a well or septic fix on a rural property or a failed sump pump in a newer home. The historic core adds aging plumbing. We usually reach this small, growing town the same day.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'Newer homes reach the age where water heaters and sump pumps fail, while older and rural properties see aging plumbing and the occasional well or septic issue. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Walton's newer and older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Walton?', a: 'Walton is at the southern edge of our Boone County service area. We are on call every day and aim for same-day arrival.' }],
  },

  // ── Clermont County, OH ───────────────────────────────────────────────
  {
    slug: 'mount-carmel', neighborhood: 'Mount Carmel', state: 'OH', zip: '45244', county: 'Clermont County, OH',
    intro:
      'Off the I-275 corridor, Mount Carmel’s mid-century and newer homes see failing sump pumps and worn supply lines more than any other emergency plumbing problem. Aging water heaters round out the list in this Union Township community. We usually reach it the same day, weekends included.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Mount Carmel's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Mount Carmel?', a: 'Mount Carmel is well within our east-side service area in Union Township. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },
  {
    slug: 'summerside', neighborhood: 'Summerside', state: 'OH', zip: '45245', county: 'Clermont County, OH',
    intro:
      'Summerside’s suburban homes in western Clermont County are at the age where water heaters, supply lines and sump pumps fail, which accounts for most emergency plumbing there. This Union Township community has mid-century and newer neighborhoods. Same-day service is typical.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Homes of that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond any day of the week.',
    ],
    commonIntro: "Across Summerside's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Summerside?', a: 'Summerside is within our east-side service area in Union Township. We are on call every day, on weekdays and weekends alike with same-day service.' }],
  },
  {
    slug: 'withamsville', neighborhood: 'Withamsville', state: 'OH', zip: '45245', county: 'Clermont County, OH',
    intro:
      'Along Ohio Pike, emergency plumbing in Withamsville covers both suburban homes and commercial strips. Water heaters and supply lines fail as mid-century and newer houses age, and businesses add their own emergencies. We usually come to this Union Township community the same day.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Mid-century and newer homes here reach the age where water heaters and supply lines fail, and commercial buildings add their own emergencies. We respond every day, weekends included.',
    ],
    commonIntro: "Across Withamsville's homes and businesses, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Withamsville?', a: 'Withamsville is within our east-side service area along Ohio Pike. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'milford', neighborhood: 'Milford', state: 'OH', zip: '45150', county: 'Clermont County, OH',
    intro:
      'Milford’s old Main Street has 19th-century buildings on aging plumbing, and the Little Miami River adds flood risk, so emergency plumbing here has two sources. Older homes around downtown see leaks, and low ground near the river backs up in heavy rain. Help usually arrives the same day.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with an old Main Street of 19th-century buildings and surrounding older homes.',
      'Those century-old buildings carry aging plumbing, and the low ground near the river adds a flood and backup risk in heavy rain. We respond fast to limit the damage.',
    ],
    commonIntro: "In Milford's historic downtown and older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Milford?', a: 'Milford is within our east-side service area along the Little Miami River. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'mulberry', neighborhood: 'Mulberry', state: 'OH', zip: '45150', county: 'Clermont County, OH',
    intro:
      'Sump pump failures and worn supply lines are the usual emergency plumbing jobs in Mulberry, near Milford, along with aging water heaters. This western Clermont County community has suburban neighborhoods of mid-century and newer homes. We usually come the same day.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond any day of the week.',
    ],
    commonIntro: "Across Mulberry's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Mulberry?', a: 'Mulberry is within our east-side service area near Milford. We are on call every day, on weekdays and weekends alike with same-day service.' }],
  },
  {
    slug: 'mount-repose', neighborhood: 'Mount Repose', state: 'OH', zip: '45150', county: 'Clermont County, OH',
    intro:
      'Mount Repose homes near Milford are reaching the age where water heaters, supply lines and sump pumps fail, and that is the emergency plumbing we handle most there. Its suburban neighborhoods of mid-century and newer homes all wear on a similar timeline. We usually arrive the same day.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Homes of that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond every day, weekends included.',
    ],
    commonIntro: "Across Mount Repose's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Mount Repose?', a: 'Mount Repose is within our east-side service area near Milford. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'day-heights', neighborhood: 'Day Heights', state: 'OH', zip: '45150', county: 'Clermont County, OH',
    intro:
      'Some Day Heights properties run on wells and septic, so emergency plumbing there can mean a rural system as often as a water heater or sump pump failing in a suburban home. This Milford-area community has both. We usually handle either the same day.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'Mid-century and newer homes reach the age where water heaters and sump pumps fail, while rural properties may run on wells and septic. We respond every day.',
    ],
    commonIntro: "Across Day Heights' homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Day Heights?', a: 'Day Heights is within our east-side service area near Milford. We are on call every day, including Saturdays and Sundays, with same-day service.' }],
  },
  {
    slug: 'new-richmond', neighborhood: 'New Richmond', state: 'OH', zip: '45157', county: 'Clermont County, OH',
    intro:
      'New Richmond has deep roots in the abolitionist movement and a riverfront of 19th-century homes still on original plumbing, and emergency plumbing there often follows high water. Backups are the recurring risk on that low ground. We usually come the same day to keep the damage contained.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'Those century-old homes carry original plumbing, and the riverside location makes high water and backups a recurring risk. We respond fast to keep the damage contained.',
    ],
    commonIntro: "In New Richmond's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My New Richmond home floods when the river is high — can you help?', a: 'Yes. We handle emergency backups and failed sump pumps and can recommend a backwater valve suited to riverfront homes.' }],
  },
  {
    slug: 'amelia', neighborhood: 'Amelia', state: 'OH', zip: '45102', county: 'Clermont County, OH',
    intro:
      'Amelia homes along Ohio Pike are at the age where water heaters, supply lines and sump pumps give out, which covers most emergency plumbing in this Clermont County community. Mid-century and newer neighborhoods see the same wear. When one fails, we can usually be there the same day.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'Homes of that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond 7 days a week.',
    ],
    commonIntro: "Across Amelia's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Amelia?', a: 'Amelia is within our east-side service area along Ohio Pike. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'batavia', neighborhood: 'Batavia', state: 'OH', zip: '45103', county: 'Clermont County, OH',
    intro:
      'Batavia, the Clermont County seat, sits on the East Fork of the Little Miami River, and emergency plumbing in its older village homes often follows heavy rain. Low ground near the river brings backups, and aging pipe in the historic core adds leaks. We usually come the same day.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'The older village homes carry aging plumbing, and the low ground near the river adds a backup risk in heavy rain. We respond every day, weekends included.',
    ],
    commonIntro: "Across Batavia's historic and newer homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Batavia?', a: 'Batavia is within our east-side service area on the East Fork. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'owensville', neighborhood: 'Owensville', state: 'OH', zip: '45160', county: 'Clermont County, OH',
    intro:
      'Rural properties around Owensville may run on wells and septic, and emergency plumbing there often means getting one of those systems working again fast. Older homes in the village core carry aging plumbing too. We usually reach Owensville and its rural homes the same day.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Older homes carry aging plumbing, and rural properties may run on wells and septic that need fast attention when they fail. We respond every day.',
    ],
    commonIntro: "Across Owensville's older and rural homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Owensville?', a: 'Owensville is part of our eastern Clermont County service area. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'goshen', neighborhood: 'Goshen', state: 'OH', zip: '45122', county: 'Clermont County, OH',
    intro:
      'Goshen’s suburban homes lose water heaters and sump pumps with age, and its rural properties may rely on wells and septic, so emergency plumbing in this township covers both. Northern Clermont County is well within our area. We usually handle either kind the same day.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'Suburban homes reach the age where water heaters and sump pumps fail, while rural properties may rely on wells and septic. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Goshen's suburban and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Goshen?', a: 'Goshen is part of our northern Clermont County service area. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'moscow', neighborhood: 'Moscow', state: 'OH', zip: '45153', county: 'Clermont County, OH',
    intro:
      'Low riverside ground in Moscow means high water can push a backup into older homes, which is the main emergency plumbing risk in this small Clermont County village. Aging plumbing in those homes adds leaks. A fast response keeps the damage contained, usually same day.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'Its riverside position makes high water and backups a real risk, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Moscow's older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Moscow?', a: 'Moscow is part of our river service area in southeastern Clermont County. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'newtonsville', neighborhood: 'Newtonsville', state: 'OH', zip: '45158', county: 'Clermont County, OH',
    intro:
      'Many rural properties near Newtonsville run on wells and septic, and emergency plumbing there usually means one of those systems failing. Older homes in this small village carry aging plumbing as well. We usually reach northeastern Clermont County the same day, weekends included.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'Older homes carry aging plumbing, and many rural properties run on wells and septic that need fast attention when they fail. We respond every day.',
    ],
    commonIntro: "Across Newtonsville's older and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Newtonsville?', a: 'Newtonsville is part of our eastern Clermont County service area. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'williamsburg', neighborhood: 'Williamsburg', state: 'OH', zip: '45176', county: 'Clermont County, OH',
    intro:
      'Williamsburg’s 19th-century village core sits near the East Fork of the Little Miami River, where heavy rain brings backups and most emergency plumbing jobs. Aging pipe in those older village homes adds leaks, and rural homes nearby have their own needs. We usually come the same day.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'The older village homes carry aging plumbing, and the low ground near the river adds a backup risk in heavy rain. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Williamsburg's historic and rural homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Williamsburg?', a: 'Williamsburg is part of our eastern Clermont County service area. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'bethel', neighborhood: 'Bethel', state: 'OH', zip: '45106', county: 'Clermont County, OH',
    intro:
      'Bethel’s 19th-century core has aging pipes, and rural homes nearby may run on wells and septic, so emergency plumbing in this village covers both. Older small-town homes see leaks, and rural systems need fast attention when they fail. We usually handle either the same day.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'Older homes carry aging plumbing, and rural properties may run on wells and septic that need fast attention when they fail. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Bethel's older and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Bethel?', a: 'Bethel is part of our southeastern Clermont County service area. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },

  // ── Butler County, OH ─────────────────────────────────────────────────
  {
    slug: 'ross', neighborhood: 'Ross', state: 'OH', zip: '45061', county: 'Butler County, OH',
    intro:
      'Ross sits along the Great Miami River, so emergency plumbing there often means older homes backing up in heavy rain. Rural properties in this Butler County township may rely on wells and septic, and aging plumbing adds leaks. We usually come the same day.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Older homes carry aging plumbing, rural properties may run on wells and septic, and the low ground near the river adds a backup risk in heavy rain. We respond any day of the week.',
    ],
    commonIntro: "Across Ross's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Ross?', a: 'Ross is part of our Butler County service area along the Great Miami. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'fairfield', neighborhood: 'Fairfield', state: 'OH', zip: '45014', county: 'Butler County, OH',
    intro:
      'Fairfield’s mid-century neighborhoods are at the age where supply lines corrode and water heaters fail, and that drives most emergency plumbing in this large Butler County city. Newer subdivisions see their own wear. Help usually arrives the same day, weekends included.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'Mid-century homes here reach the age where supply lines corrode and water heaters fail, while newer homes see their own wear. We respond every day, weekends included.',
    ],
    commonIntro: "Across Fairfield's mid-century and newer homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Fairfield?', a: 'Fairfield is part of our Butler County service area. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'beckett-ridge', neighborhood: 'Beckett Ridge', state: 'OH', zip: '45069', county: 'Butler County, OH',
    intro:
      'Built around a golf course from the 1980s on, Beckett Ridge has homes now old enough for water heaters, supply lines and sump pumps to fail, the usual emergency plumbing jobs there. This planned West Chester community is well within our Butler County area. We usually come the same day.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'Homes from that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond every day.',
    ],
    commonIntro: "Across Beckett Ridge's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Beckett Ridge?', a: 'Beckett Ridge is part of our Butler County service area in West Chester. We are on call every day, including Saturdays and Sundays, with same-day service.' }],
  },
  {
    slug: 'wetherington', neighborhood: 'Wetherington', state: 'OH', zip: '45069', county: 'Butler County, OH',
    intro:
      'Wetherington’s larger homes mean larger plumbing systems, and emergency plumbing in this West Chester golf community often starts with a hidden leak that did damage before anyone noticed. Water heaters and sump pumps from the 1980s and 90s are also reaching the end. We usually arrive the same day.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'Larger homes mean larger plumbing systems, where a hidden leak or failing line can do real damage before it is noticed, and water heaters and sump pumps reach the end of their life. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Wetherington's larger homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Wetherington?', a: 'Wetherington is part of our Butler County service area in West Chester. We are on call every day with same-day service.' }],
  },
  {
    slug: 'hamilton', neighborhood: 'Hamilton', state: 'OH', zip: '45011', county: 'Butler County, OH',
    intro:
      'Hamilton’s German Village and Dayton Lane districts are full of 19th-century homes on original galvanized and cast-iron pipe, the source of most emergency plumbing in the Butler County seat. Low ground near the Great Miami River adds flood and backup risk. We respond fast, usually the same day.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'Those century-old homes carry original galvanized and cast-iron plumbing, and the low ground near the river adds a flood and backup risk in heavy rain. We respond fast to limit the damage.',
    ],
    commonIntro: "In Hamilton's historic riverfront homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Hamilton?', a: 'Hamilton is part of our Butler County service area on the Great Miami River. We are on call most days and aim for same-day arrival.' }],
  },
  {
    slug: 'millville', neighborhood: 'Millville', state: 'OH', zip: '45013', county: 'Butler County, OH',
    intro:
      'West of Hamilton, emergency plumbing in Millville means aging pipe in older homes or a well or septic system failing on a rural property. Both need fast attention in this small Butler County village. We usually come the same day, Saturdays and Sundays included.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'Older homes carry aging plumbing, and rural properties may run on wells and septic that need fast attention when they fail. We respond every day.',
    ],
    commonIntro: "Across Millville's older and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Millville?', a: 'Millville is part of our Butler County service area near Hamilton. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'new-miami', neighborhood: 'New Miami', state: 'OH', zip: '45011', county: 'Butler County, OH',
    intro:
      'Just north of Hamilton, New Miami’s closely spaced mill homes sit on low riverside ground that backs up in heavy rain, the most common emergency plumbing job there. Older homes in this Great Miami River village also have aging pipe prone to leaks. We usually reach it the same day.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'The low riverside ground brings a real backup risk in heavy rain, and the older homes run on aging plumbing prone to leaks. We respond every day, Sundays too.',
    ],
    commonIntro: "In New Miami's older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach New Miami?', a: 'New Miami is part of our Butler County service area on the Great Miami River. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'monroe', neighborhood: 'Monroe', state: 'OH', zip: '45050', county: 'Butler County, OH',
    intro:
      'Monroe straddles Butler and Warren Counties on I-75, and emergency plumbing there splits between newer subdivisions losing water heaters and sump pumps and an older core on aging plumbing. This fast-growing city is part of our I-75 corridor area. We usually come the same day.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'Newer subdivisions reach the age where water heaters and sump pumps fail, while the older core sees aging plumbing. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across Monroe's newer and older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Monroe?', a: 'Monroe is part of our service area along the I-75 corridor. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },

  // ── Warren County, OH ─────────────────────────────────────────────────
  {
    slug: 'landen', neighborhood: 'Landen', state: 'OH', zip: '45040', county: 'Warren County, OH',
    intro:
      'Landen’s homes around the lake date from the 1970s and 80s on, the age when water heaters, supply lines and sump pumps fail, and those cover most emergency plumbing there. This planned Warren County community near Mason is well within our area. We usually come the same day.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Homes from that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond any day of the week.',
    ],
    commonIntro: "Across Landen's planned-community homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Landen?', a: 'Landen is part of our Warren County service area near Mason. We are on call every day, on weekdays and weekends alike with same-day service.' }],
  },
  {
    slug: 'loveland-park', neighborhood: 'Loveland Park', state: 'OH', zip: '45140', county: 'Warren County, OH',
    intro:
      'Just north of Loveland, Loveland Park’s mid-century homes have corroding supply lines and aging water heaters, the main emergency plumbing problems there. Low ground near the Little Miami River adds a backup risk in heavy rain. We usually reach this Warren County community the same day.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'Homes of that era reach the age where supply lines corrode and water heaters fail, and the low ground near the river adds a backup risk in heavy rain. We respond every day, weekends included.',
    ],
    commonIntro: "Across Loveland Park's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Loveland Park?', a: 'Loveland Park is within our service area near Loveland and the Little Miami. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'maineville', neighborhood: 'Maineville', state: 'OH', zip: '45039', county: 'Warren County, OH',
    intro:
      'Newer Maineville subdivisions lose water heaters and sump pumps, while rural homes around the town have the odd well or septic problem, and both end up as emergency plumbing jobs. The small historic core adds aging plumbing. We usually reach southern Warren County the same day.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'Newer homes reach the age where water heaters and sump pumps fail, while older and rural properties see aging plumbing and the occasional well or septic issue. We respond every day.',
    ],
    commonIntro: "Across Maineville's newer and older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Maineville?', a: 'Maineville is part of our southern Warren County service area. We are on call every day, including Saturdays and Sundays, and aim for same-day arrival.' }],
  },
  {
    slug: 'pleasant-plain', neighborhood: 'Pleasant Plain', state: 'OH', zip: '45162', county: 'Warren County, OH',
    intro:
      'Wells and septic serve many rural properties around Pleasant Plain, and emergency plumbing there usually means one of those systems needing fast attention. Older homes in this small Warren County village carry aging plumbing too. We usually come the same day, Sundays included.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'Older homes carry aging plumbing, and many rural properties run on wells and septic that need fast attention when they fail. We respond every day, Sundays too.',
    ],
    commonIntro: "Across Pleasant Plain's older and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Pleasant Plain?', a: 'Pleasant Plain is part of our southeastern Warren County service area. We are on call every day and aim for same-day arrival.' }],
  },
  {
    slug: 'south-lebanon', neighborhood: 'South Lebanon', state: 'OH', zip: '45065', county: 'Warren County, OH',
    intro:
      'South Lebanon sits on the Little Miami River with an older core and fast-expanding subdivisions, so emergency plumbing there ranges from backups on low riverside ground to failed sump pumps and water heaters in newer homes. We usually handle either the same day, weekends included.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'Newer subdivisions reach the age where water heaters and sump pumps fail, while the older core and low riverside ground add aging plumbing and backup risks. We respond every day, including Saturdays and Sundays.',
    ],
    commonIntro: "Across South Lebanon's newer and older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach South Lebanon?', a: 'South Lebanon is part of our Warren County service area along the Little Miami. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },

  // ── Dearborn County, IN ───────────────────────────────────────────────
  {
    slug: 'lawrenceburg', neighborhood: 'Lawrenceburg', state: 'IN', zip: '47025', county: 'Dearborn County, IN',
    intro:
      'Lawrenceburg’s 19th-century downtown sits behind a riverfront levee, and emergency plumbing there usually involves old buildings on aging plumbing that can back up in high water. This Indiana river city, known for its distilling heritage, is part of our far-west area. We usually cross over the same day.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'Those century-old buildings carry aging plumbing, and the low riverside setting makes backups a real risk in high water. We respond any day of the week.',
    ],
    commonIntro: "In Lawrenceburg's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Lawrenceburg?', a: 'Lawrenceburg is part of our far-west river service area in Dearborn County. We are on call every day, on weekdays and weekends alike and aim for same-day arrival.' }],
  },
  {
    slug: 'greendale', neighborhood: 'Greendale', state: 'IN', zip: '47025', county: 'Dearborn County, IN',
    intro:
      'Greendale climbs the hillside above the Ohio next to Lawrenceburg, and emergency plumbing in its older homes often follows heavy rain that puts real demand on basement drains. Aging pipe in older and mid-century houses adds leaks. We usually reach this Dearborn County city the same day.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Older homes carry aging plumbing, and the hillside grade adds demand on basement drains in heavy rain. We respond every day, weekends included.',
    ],
    commonIntro: "Across Greendale's older and mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Greendale?', a: 'Greendale is part of our far-west river service area next to Lawrenceburg. We are on call any day of the week and aim for same-day arrival.' }],
  },
  {
    slug: 'aurora', neighborhood: 'Aurora', state: 'IN', zip: '47001', county: 'Dearborn County, IN',
    intro:
      'Aurora, home to the Hillforest Victorian mansion, has a riverfront downtown of 19th-century homes still on original plumbing, and emergency plumbing there usually follows high water. Backups are the recurring risk on that low ground. We respond fast to keep the damage contained, usually the same day.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'Those century-old homes carry original plumbing, and the riverside location makes high water and backups a recurring risk. We respond fast to keep the damage contained.',
    ],
    commonIntro: "In Aurora's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Aurora?', a: 'Aurora is part of our far-west river service area in Dearborn County. We are on call every day, weekends included, and aim for same-day arrival.' }],
  },
];

// Every neighborhood ships per service — the full slug list, no cohort cap.
export const DEPLOYED_LOCATION_SLUGS = locations.map((l) => l.slug);

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

// Nearby places for the internal-link mesh. Uses hand-curated `adjacent` when
// present, otherwise falls back to other locations in the same county (or state),
// so every "nearby" link always points to a real, generated page.
export function getNearby(loc: Location, max = 3): Adjacent[] {
  if (loc.adjacent && loc.adjacent.length) return loc.adjacent.slice(0, max);
  const sameCounty = locations.filter(
    (l) => l.slug !== loc.slug && l.county && l.county === loc.county,
  );
  const pool = sameCounty.length
    ? sameCounty
    : locations.filter((l) => l.slug !== loc.slug && l.state === loc.state);
  return pool.slice(0, max).map((l) => ({ name: l.neighborhood, slug: l.slug }));
}

// County labels for the earlier (Phase 1/2) entries that predate the `county`
// field, so the hub can group every location consistently.
const LEGACY_COUNTY: Record<string, string> = {
  norwood: 'Hamilton County, OH', 'blue-ash': 'Hamilton County, OH', montgomery: 'Hamilton County, OH',
  madeira: 'Hamilton County, OH', wyoming: 'Hamilton County, OH', mariemont: 'Hamilton County, OH',
  cheviot: 'Hamilton County, OH', covedale: 'Hamilton County, OH',
  covington: 'Kenton County, KY', erlanger: 'Kenton County, KY',
  newport: 'Campbell County, KY', bellevue: 'Campbell County, KY', 'fort-thomas': 'Campbell County, KY',
  florence: 'Boone County, KY', mason: 'Warren County, OH', 'west-chester': 'Butler County, OH',
};

// The group heading a location belongs under (for the hub's neighborhood index).
export function groupOf(loc: Location): string {
  return (
    loc.county ??
    LEGACY_COUNTY[loc.slug] ??
    (loc.city ? 'Cincinnati Neighborhoods' : 'Greater Cincinnati')
  );
}

// Group order for display on the hub.
export const COUNTY_ORDER = [
  'Cincinnati Neighborhoods',
  'Hamilton County, OH',
  'Kenton County, KY',
  'Campbell County, KY',
  'Boone County, KY',
  'Clermont County, OH',
  'Butler County, OH',
  'Warren County, OH',
  'Dearborn County, IN',
];

// Locations grouped and ordered for the hub's neighborhood index.
export function locationsByGroup(): { group: string; items: Location[] }[] {
  const map = new Map<string, Location[]>();
  for (const loc of locations) {
    const g = groupOf(loc);
    if (!map.has(g)) map.set(g, []);
    map.get(g)!.push(loc);
  }
  const ordered = COUNTY_ORDER.filter((g) => map.has(g));
  const extras = [...map.keys()].filter((g) => !COUNTY_ORDER.includes(g));
  return [...ordered, ...extras].map((group) => ({ group, items: map.get(group)! }));
}
