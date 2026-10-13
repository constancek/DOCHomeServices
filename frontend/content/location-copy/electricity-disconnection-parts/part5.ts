import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 5 — the Anderson and Sycamore township communities, the Mill Creek
// valley villages and cities, and the west-side township pockets. ZIP 45215
// alone covers five separate municipalities, which is the recurring trap here.
export const part5: Record<string, LocationServiceCopy> = {
  newtown: {
    intro:
      'Power disconnected at your Newtown home? A village with its own permit office, on low ground by the Little Miami. Call (513) 586-5107.',
    relevance: [
      'Newtown (ZIP 45244) is an east-side village near the Little Miami, and being a village rather than part of a township or the city decides where the paperwork goes. Permits and inspections are Newtown’s own, and the utility will be waiting for that sign-off before it reconnects — so an electrician who files with Hamilton County or Cincinnati out of habit costs you a day.',
      'The Little Miami is the physical factor. It has a steep catchment and rises quickly after heavy rain, so on the low ground here water can reach a basement panel during the storm rather than a day later. A panel that has been submerged is replaced rather than dried out, because water gets behind the bus bars and into the breakers and corrosion continues after the surface dries. An inspector checks for that before the meter goes back.',
    ],
    commonIntro:
      "In Newtown's older housing on low ground near the Little Miami, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Does Newtown handle its own electrical permits?',
        a: 'Yes — Newtown is a village and issues its own, rather than the county or the city doing it. That matters because the utility looks for the correct sign-off before reconnecting, and a permit filed with the wrong authority does not fail an inspection so much as sit there while it is refiled. We confirm the right office before submitting anything.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Power disconnected at your Turpin Hills home? Anderson Township issues the permit, not the city. Call (513) 586-5107.',
    relevance: [
      'Turpin Hills (ZIP 45244) is an Anderson Township community on the east side, and the jurisdiction is the first thing to settle: permits and inspections go through Anderson Township and Hamilton County rather than the city of Cincinnati. Several communities out here share that arrangement and share ZIP codes with each other, so working from a postal address is not reliable.',
      'The housing is largely post-war single-family on generous lots, which means services installed with the houses and in many cases never replaced. Sized for their era, they now carry central air, finished lower levels and increasingly car charging. That combination degrades at the connections rather than tripping breakers, and heat damage at the meter socket is what a technician declines to re-energise.',
    ],
    commonIntro:
      "Across Turpin Hills' post-war homes in Anderson Township, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Who issues the permit for a Turpin Hills repair?',
        a: 'Anderson Township and Hamilton County rather than the city of Cincinnati. It is worth asking any electrician whether they have filed in the township before, because getting it wrong means the paperwork comes back and you wait without power while it is redone. We confirm the authority for the specific address before anything goes in.',
      },
    ],
  },

  silverton: {
    intro:
      'Power disconnected in Silverton? Its own city, sharing a ZIP with three other places. Call (513) 586-5107.',
    relevance: [
      'Silverton (ZIP 45236) is its own small city along Montgomery Road, and it shares that ZIP with Deer Park, Kenwood and Dillonvale — four separate places, only two of which are cities issuing their own permits. That makes the postal code useless for working out which office handles your filing, and it is the single most common way a repair here loses a day.',
      'The housing is a settled mix of older and mid-century homes, so the findings run the usual range: services installed with the houses and never replaced, grounding predating current requirements, corrosion at the meter base. Where the house dates from the late 1960s or early 70s, aluminium branch wiring may also be present, which an inspector will examine closely at the terminations.',
    ],
    commonIntro:
      "Across Silverton's older and mid-century homes, in a ZIP shared with three other communities, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 45236 — is that Silverton for the permit?',
        a: 'Not necessarily. ZIP 45236 also covers Deer Park, Kenwood and Dillonvale, and those are not all the same kind of jurisdiction — two are cities issuing their own permits and the others fall to a township and the county. We confirm which applies to your actual address before filing rather than working from the postal code.',
      },
    ],
  },

  lockland: {
    intro:
      'Power disconnected in Lockland? A small mill village with its own permits, on low valley ground. Call (513) 586-5107.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley built up around mills and industry, with closely spaced older worker housing. Two constraints shape a repair here. It is a small municipality issuing its own permits and inspections, so the queue is short when the filing is right and the whole job stalls when it is not — and ZIP 45215 covers Lockland, Reading, Woodlawn, Lincoln Heights and Arlington Heights between them.',
      'The valley supplies the recurring cause. Panels sit in low basements, water reaches them, and a submerged panel is replaced rather than dried out. The housing adds the other half: worker homes were given small services to begin with, and a great many are close to what was installed, so where wear rather than water is the problem it is usually heat damage at connections that have been working too hard for decades.',
    ],
    commonIntro:
      "In Lockland's closely spaced mill-era housing on low valley ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'ZIP 45215 covers several places. How do I know who issues my Lockland permit?',
        a: 'By the address rather than the ZIP. That code covers Lockland, Reading, Woodlawn, Lincoln Heights and Arlington Heights, each with its own arrangement — Lockland issues its own permits as a village. We confirm the correct office before filing, because the utility looks for that sign-off and a misdirected permit just means waiting.',
      },
    ],
  },

  groesbeck: {
    intro:
      'Power disconnected at your Groesbeck home? Colerain Township issues the permit. Call (513) 586-5107.',
    relevance: [
      'Groesbeck (ZIP 45239) is a Colerain Township community on the northwest side, and Colerain is one of the largest townships in Ohio — large enough that the township, rather than the city or any village, handles permits and inspections, and large enough that nothing about your street tells you much about anyone else’s.',
      'The housing is mid-century single-family, largely on services installed when the houses went up. Sixty or a hundred amps suited a house of that period and does not suit central air, a finished basement and a modern kitchen, let alone a car charger. Run near the ceiling for years, a service fails at the connections rather than at the breakers, and heat damage at the meter socket is what stops a reconnection.',
    ],
    commonIntro:
      "Across Groesbeck's mid-century homes in Colerain Township, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Is my Groesbeck permit a Cincinnati one?',
        a: 'No. Groesbeck is in Colerain Township, so permits and inspections go through the township and Hamilton County rather than the city. It is a common mix-up for contractors who work mostly inside the city, and the cost of getting it wrong is a delay while the filing is redone rather than anything wrong with the work.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Power disconnected in Mount Healthy? A historic city with its own permit office. Call (513) 586-5107.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic north-side city, and being a city rather than a township community means the permit and inspection go through Mount Healthy itself. That is usually to your advantage after a disconnection — a small municipal queue moves faster than the city of Cincinnati’s — provided the filing went to the right office rather than being sent to the county out of habit.',
      'The housing is older, and the services reflect it: original or replaced once decades ago, grounding installed to a standard long superseded, corrosion where a meter base has weathered a century. None of that prevents a house working, which is exactly why it goes unnoticed until a technician replacing a meter or an inspector clearing a tag applies today’s requirements.',
    ],
    commonIntro:
      "Across Mount Healthy's older housing, on the city's own permit schedule, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'Our Mount Healthy service has worked for decades. Why refuse it now?',
        a: 'Because working and meeting current requirements are different tests. Grounding that predates modern standards, a fuse panel, or corrosion inside the meter base can all sit alongside a service that has never tripped anything. A technician replacing a meter, or an inspector clearing a tag, applies the standard in force today rather than the one from when it was installed.',
      },
    ],
  },

  reading: {
    intro:
      'Power disconnected in Reading? Its own city, on low valley ground, sharing a ZIP with four others. Call (513) 586-5107.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley with a settled mix of older and mid-century homes, and it shares its ZIP with Lockland, Woodlawn, Lincoln Heights and Arlington Heights. Reading issues its own permits and inspections, but the neighbours in that ZIP do not all work the same way, so the filing follows the address rather than the postal code.',
      'The valley position is the recurring physical cause. Low ground means water reaches basement panels, and a submerged panel is replaced rather than dried out — an inspector will look for the signs before the meter goes back in. Where wear rather than water is the issue, the findings are the usual ones for the housing: original or once-replaced services now carrying loads nobody planned for.',
    ],
    commonIntro:
      "Across Reading's older and mid-century homes on low valley ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Reading basement floods and the panel has been replaced before. Can it be moved higher?',
        a: 'Sometimes, and it is worth asking during a replacement rather than after the next flood. What constrains it is where the service entrance sits and how far the run to the meter is. Where those allow it, moving the panel higher or into another room ends a cycle that otherwise repeats. Where they do not, we will say so rather than quoting for something unworkable.',
      },
    ],
  },

  dent: {
    intro:
      'Power disconnected at your Dent home? Green Township permits, and a ZIP shared with two other communities. Call (513) 586-5107.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, sharing its ZIP with White Oak and Monfort Heights. All three fall to Green Township and Hamilton County for permits rather than the city, which at least makes the answer consistent here — but it is still worth confirming rather than assuming, because contractors who work mostly in the city file with the city.',
      'The housing is mid-century and newer single-family. On the mid-century streets the service is frequently original, sized for its era, and now carrying central air, a finished lower level and modern appliances — which shows as heat damage at the connections rather than as a tripped breaker. Newer sections have modern panels and adequate capacity, where a disconnection is usually one identifiable fault.',
    ],
    commonIntro:
      "Across Dent's mid-century and newer homes in Green Township, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Do Dent, White Oak and Monfort Heights all use the same permit office?',
        a: 'Broadly yes — all three are Green Township, so permits and inspections go through the township and Hamilton County rather than the city. That makes it more consistent out here than in some ZIPs. It is still worth confirming the specific address, because township boundaries do not always follow the postal map.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Power disconnected in Deer Park? A small city with its own permits, sharing a ZIP with three others. Call (513) 586-5107.',
    relevance: [
      'Deer Park (ZIP 45236) is a small east-side city, and it shares its ZIP with Silverton, Kenwood and Dillonvale — a mix of cities, a township community and an unincorporated area. Deer Park issues its own permits and inspections. Working from the postal code alone will send a filing to the wrong desk about as often as the right one, and the utility waits for the correct sign-off before reconnecting.',
      'The housing is largely modest post-war single-family, which means services that were small when installed and in many cases have never been replaced. Where a house has since gained central air and a modern kitchen, the original service has been working beyond its intended range for years, and heat damage at the connections is the finding that stops a reconnection.',
    ],
    commonIntro:
      "Across Deer Park's modest post-war homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Is Deer Park the same as Silverton for permits, since we share a ZIP?',
        a: 'No — both are their own cities with their own permit offices, and the same ZIP also covers Kenwood and Dillonvale, which are different again. The filing follows your actual address. We confirm it before submitting, because a permit sent to the wrong municipality means waiting while it is refiled.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Power disconnected in Terrace Park? A village with its own permits, near the Little Miami. Call (513) 586-5107.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village of established early-1900s homes on tree-lined streets near the Little Miami, and it issues its own permits and inspections as a village rather than going through the township or county. The houses are large and long-held, which produces a particular kind of disconnection: a service that was generous when installed, never replaced because it never failed, and now carrying multiple zones, a finished lower level and often car charging.',
      'The Little Miami adds the second cause. It rises quickly after heavy rain, and on the low ground here water can reach a basement panel during the same storm. A submerged panel is replaced rather than dried out, and an inspector checks for it before the meter goes back in. On houses of this character the replacement also has to be routed and mounted sympathetically, which we plan rather than improvise.',
    ],
    commonIntro:
      "In Terrace Park's established early-1900s homes near the Little Miami, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Can a bigger service be fitted to my Terrace Park house without it looking wrong?',
        a: 'Usually, and it is fair to insist on it. A properly sized service needs a larger entrance and a modern meter base, but the route, the fixings and the position are choices rather than givens. We plan them in advance and reuse sound existing penetrations where they exist. If the sympathetic option is not achievable on your wall we will say so before starting.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Power disconnected at your Dry Run home? Anderson Township permits, and a ZIP shared with three communities. Call (513) 586-5107.',
    relevance: [
      'Dry Run (ZIP 45244) is an Anderson Township community on the east side, sharing its ZIP with Newtown, Turpin Hills and Mount Carmel — and those are not all the same jurisdiction. Newtown is a village issuing its own permits, Mount Carmel is in Clermont County, and Dry Run falls to Anderson Township and Hamilton County. The postal code genuinely tells you nothing useful here.',
      'The housing is post-war and newer single-family on generous lots. On the older streets the services are frequently original and sized for their period, so heat damage at the connections under modern load is the usual finding. On the newer streets the panels are modern and the disconnection is more often something specific — a damaged meter base, or an inspection required after a property stood empty.',
    ],
    commonIntro:
      "Across Dry Run's post-war and newer homes in Anderson Township, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'ZIP 45244 covers several communities. Which one am I for the permit?',
        a: 'It depends on the address, and the differences are real: Newtown is a village with its own permits, Mount Carmel is in Clermont County entirely, and Dry Run and Turpin Hills fall to Anderson Township and Hamilton County. We establish which applies before filing rather than trusting the postal code.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Power disconnected at your White Oak home? Green Township permits, mid-century services. Call (513) 586-5107.',
    relevance: [
      'White Oak (ZIP 45247) is a Green Township community on the northwest side, largely mid-century single-family housing, and the services here are mostly of one era — installed with the houses and, in a great many cases, never replaced since. That uniformity means the findings are consistent rather than varied: capacity sized for the 1950s or 60s, grounding to the standard of the day, and connections that have been working hard for decades.',
      'Houses built or rewired between roughly 1965 and 1973 may also carry aluminium branch circuits, which loosen and overheat at the terminations in a way copper does not. Where that is present an inspector will look closely at every termination, and insurers ask about it. The recognised remedy is properly rated connectors rather than a full rewire, which is worth knowing before anyone quotes you for the latter.',
    ],
    commonIntro:
      "Across White Oak's mid-century homes in Green Township, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'I have been told my White Oak house needs a full rewire because of aluminium wiring. Is that right?',
        a: 'Usually not. Aluminium branch wiring from roughly 1965 to 1973 is a termination problem rather than a wire problem — the metal moves more than copper, so connections loosen and overheat. The recognised remedy is properly rated connectors at the terminations. A full rewire is occasionally justified where circuits have been badly altered, but it should be the exception rather than the opening quote.',
      },
    ],
  },

  forestville: {
    intro:
      'Power disconnected at your Forestville home? Anderson Township permits, and post-war services under modern loads. Call (513) 586-5107.',
    relevance: [
      'Forestville (ZIP 45230) is an Anderson Township community on the east side, sharing its ZIP with Cherry Grove, Mount Washington and California — the first two in the township, the others Cincinnati neighborhoods. So the permit authority differs within one postal code, and the filing follows the address rather than the ZIP.',
      'The housing is post-war single-family, and the services are largely original to the houses. Sized for their era and now carrying central air, finished lower levels and increasingly car charging, they degrade at the connections rather than tripping. Heat damage at the meter socket is what a technician will not re-energise, and the useful decision at that point is whether to refit the same capacity or bring the service up to what the house draws.',
    ],
    commonIntro:
      "Across Forestville's post-war homes in Anderson Township, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 45230, the same as Mount Washington. Same permit office?',
        a: 'No. Mount Washington and California are Cincinnati neighborhoods, so their permits go through the city, while Forestville and Cherry Grove are in Anderson Township and go through the township and Hamilton County. One ZIP, two different authorities — which is exactly the sort of thing that costs a day when nobody checks.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Power disconnected at your Cherry Grove home? Anderson Township permits. Newer streets are often fed underground. Call (513) 586-5107.',
    relevance: [
      'Cherry Grove (ZIP 45230) is an Anderson Township community of post-war and newer housing, and it is worth being straightforward about what that means. A good deal of the newer building here was done with underground supply, so there is no mast or weatherhead — and disconnections on those streets are usually about something specific rather than the whole service: a damaged meter base, a fault found during other work, or an inspection after a property stood empty.',
      'On the older post-war streets the picture is conventional: services installed with the houses, sized for their period, and now carrying loads nobody planned for. Heat damage at the connections is the usual finding there. Permits and inspections go through Anderson Township and Hamilton County rather than the city, despite the shared ZIP with two Cincinnati neighborhoods.',
    ],
    commonIntro:
      "Across Cherry Grove's post-war and newer homes in Anderson Township, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My Cherry Grove street is fed underground. Does that make a disconnection less likely?',
        a: 'It removes the mast and weatherhead, which is where a lot of service damage happens, so yes for those causes. What remains is a fault at the meter base, damage in the underground run itself, or a panel that will not pass inspection. Underground work is also scheduled with more lead time by the utility, so the reconnect can take longer even where the repair is simpler.',
      },
    ],
  },

  kenwood: {
    intro:
      'Power disconnected at your Kenwood home? Unincorporated, so the township and county issue the permit. Call (513) 586-5107.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale unincorporated community around Kenwood Towne Centre, and unincorporated is the operative word for a repair. There is no city hall here to issue a permit — it goes through the township and Hamilton County. People reasonably assume a place this well known has its own offices, and it does not, which is a small distinction that costs a day when a filing goes to the wrong desk.',
      'The housing is mid-century homes alongside newer, larger houses, so the findings split. The mid-century services are frequently original and now working well beyond their intended range. The larger newer houses have adequate capacity but a great deal of equipment on it — multiple zones, finished lower levels, car charging — which makes a load calculation the sensible starting point rather than refitting whatever was there.',
    ],
    commonIntro:
      "Across Kenwood's mid-century and newer larger homes, in unincorporated Hamilton County, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Which office issues a permit for Kenwood?',
        a: 'The township and Hamilton County, because Kenwood is unincorporated — there is no Kenwood city hall despite how well known the name is. It is a common assumption and an easy one to get wrong. We confirm the authority for the specific address before filing, since the utility looks for the correct sign-off before reconnecting.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Power disconnected in Lincoln Heights? Its own village permits, on low valley ground. Call (513) 586-5107.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic Mill Creek valley community — one of the first self-governed Black municipalities in the northern United States — with older, modest homes. It issues its own permits and inspections as a municipality, and it shares that ZIP with Lockland, Reading, Woodlawn and Arlington Heights, so the filing follows the address rather than the postal code.',
      'The housing and the valley between them account for most disconnections here. Modest older homes were given small services, many still close to the original, and where a house has gained central air and a modern kitchen those connections have been working beyond their range for years. The low ground adds the other cause: panels in basements that water reaches, which are replaced rather than dried out.',
    ],
    commonIntro:
      "In Lincoln Heights' modest older homes on low valley ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Does Lincoln Heights issue its own electrical permits?',
        a: 'Yes, as its own municipality, rather than the county or the city doing it. That matters because ZIP 45215 covers several separate places and a filing sent to the wrong one sits while it is refiled. We confirm the correct office for the address before submitting, since the utility waits for that sign-off before reconnecting.',
      },
    ],
  },

  dillonvale: {
    intro:
      'Power disconnected at your Dillonvale home? Sycamore Township permits, in a ZIP shared with three others. Call (513) 586-5107.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side, and it shares its ZIP with Silverton, Deer Park and Kenwood — two of which are cities with their own permit offices, while Dillonvale falls to Sycamore Township and Hamilton County. Four places, three different arrangements, one postal code. It is the clearest example we deal with of why an address matters and a ZIP does not.',
      'The housing is largely modest post-war single-family, so the services were small when installed and a great many have never been replaced. Where the house has since gained central air, a finished basement and modern appliances, those connections have been working past their intended range for decades — and heat damage at the meter socket is what stops the reconnection rather than anything sudden.',
    ],
    commonIntro:
      "Across Dillonvale's modest post-war homes in Sycamore Township, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Is Dillonvale a city with its own permit office?',
        a: 'No — it is a Sycamore Township community, so permits and inspections go through the township and Hamilton County. Silverton and Deer Park in the same ZIP are cities and issue their own, which is exactly why the filing has to follow the address. We check it before submitting anything.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Power disconnected in Woodlawn? Village permits, industrial neighbours, and low valley ground. Call (513) 586-5107.',
    relevance: [
      'Woodlawn (ZIP 45215) is a Mill Creek valley village with residential streets alongside industrial corridors, and it issues its own permits and inspections. The industrial presence matters in one practical way: circuits through parts of the village carry commercial and industrial load as well as houses, so the technicians who attend and the priorities they work to are not always the residential ones.',
      'The valley accounts for the rest. Low ground means water reaches basement panels, and a submerged panel is replaced rather than dried out, whatever it looks like once dry. Where wear rather than water is the cause, the housing is older and the services are frequently original — grounding to a superseded standard, corrosion at the meter base, connections that have been working too hard for decades.',
    ],
    commonIntro:
      "Across Woodlawn's residential streets and industrial corridors on low valley ground, the disconnections we see most often are:",
    localFaqs: [
      {
        q: 'Can you handle a small commercial service in Woodlawn as well as houses?',
        a: 'Smaller commercial, yes — light-industrial units, offices and modest three-phase services are routine work. Large three-phase installations with primary metering or a utility transformer on site need a specialist contractor, and we will say so on the phone rather than after driving out. Describe the building and the service when you call.',
      },
    ],
  },

  addyston: {
    intro:
      'Power disconnected in Addyston? A small river village with its own permits, on low ground. Call (513) 586-5107.',
    relevance: [
      'Addyston (ZIP 45001) is a small far-west village along the Ohio, an old mill town of closely spaced older worker homes, and it issues its own permits and inspections. Being a very small municipality means the inspection queue is short when the filing is right — and that the whole job stalls if the paperwork goes to Hamilton County or the city instead.',
      'The village sits low on the river, so water reaching a basement panel is a recurring cause of disconnection, and a submerged panel is replaced rather than dried out. The housing supplies the other half: worker homes given small services to begin with, most still close to the original, now carrying central air and modern appliances. Heat damage at connections that have worked too hard is the usual finding.',
    ],
    commonIntro:
      "In Addyston's closely spaced mill-era homes on low river ground, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Does a village as small as Addyston really issue its own permits?',
        a: 'Yes, and it works in your favour when the filing is right — a very small queue moves faster than the city or the county. The risk is an electrician assuming a village this size defers to Hamilton County, filing there, and losing you a day while it is redone. We confirm before submitting anything.',
      },
    ],
  },

  greenhills: {
    intro:
      'Power disconnected in Greenhills? A National Historic Landmark district — the exterior is regulated. Call (513) 586-5107.',
    relevance: [
      'Greenhills (ZIP 45218) is a planned Greenbelt town built in the 1930s as a New Deal project and now a National Historic Landmark district, with its original cottages and townhomes still in use. That designation is the thing to raise before work starts, because a service entrance, its conduit and the meter box are all visible exterior in a district where appearance is regulated.',
      'The buildings add their own constraint. These are 1930s cottages and townhomes, modest in scale, with services sized accordingly — and where units share walls the entrance may serve more than one household. Rebuilding in the same position and form is normally the cleanest route, since the exterior does not change. Where a properly sized modern service would look different from the street, there may be more to agree than an electrical permit.',
    ],
    commonIntro:
      "In Greenhills' 1930s Greenbelt cottages and townhomes, inside a National Historic Landmark district, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Greenhills is a National Historic Landmark district. Will that delay getting my power back?',
        a: 'It can add a step, so it is better known at the start than discovered mid-job. Putting the service back in the same position and form is normally straightforward because the exterior appearance does not change. Where the old arrangement has to change, or a properly sized modern service would look different from the street, there may be more to agree than the electrical permit alone.',
      },
    ],
  },
};
