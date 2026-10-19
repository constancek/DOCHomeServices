export const part2: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'madeira': {
    intro: 'Most mid-century Madeira houses have the kind of backyard a hot tub wants. Because a spa is an outdoor appliance sitting in water, we wire it differently from anything indoors. Call (513) 586-5107.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city built largely of mid-century single-family homes on quiet, tree-lined streets, and most of those houses have the kind of backyard a hot tub wants. The catch is the panel. A mid-1900s service was sized for a furnace, a range, and a couple of window units, not a 50-amp GFCI spa circuit pulling 240 volts on a winter evening, so the first thing we check is whether the existing board has room.',
      'A spa is an outdoor appliance sitting in water, which changes how the wiring has to be done compared with anything indoors. We install the GFCI-protected disconnect within sight of the tub, run weather-rated conduit out to the pad, and bond the metal around the spa so there is no voltage difference for anyone stepping in. In a settled neighborhood like Madeira, where many panels are original, that often means a panel evaluation before we energize a single wire.',
    ],
    commonIntro:
      'Across Madeira’s mid-century homes, a hot tub circuit usually comes down to whether the original panel can carry a new 240V GFCI load or needs an upgrade first:',
    localFaqs: [
      {
        q: 'Can my older Madeira home handle a hot tub circuit?',
        a: 'Often yes, but a mid-century service was not built with a 50-amp spa load in mind, so we start with a panel evaluation. If there is capacity we add the dedicated 240V GFCI circuit; if not, we lay out the upgrade as licensed, code-compliant work.',
      },
    ],
  },
  'wyoming': {
    intro: 'Wyoming homes often sit well back on deep lots, which can mean a long spa circuit. We run the hot tub wiring in weather-rated conduit and bond carefully around old masonry patios and decks. Call (513) 586-5107.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets. Those big houses have the lots for a backyard spa, but they also tend to carry electrical service that has been patched rather than replaced — original panels, undersized feeders, and circuits added over decades. A hot tub draws more sustained current than almost anything else outdoors, so the panel is the first thing we look at.',
      'Many Wyoming homes sit well back on deep lots, which means the spa circuit may need a longer weather-rated run, and the bonding has to be done carefully around old masonry patios and decks. We size the conductors for that distance, set a GFCI-protected disconnect within sight of the tub, and recommend a panel or service upgrade when a turn-of-the-century board cannot safely carry the load. Getting the supply side right up front matters more than the spa brand.',
    ],
    commonIntro:
      'In Wyoming’s grand, century-old homes, a hot tub install usually starts with whether a long-serving panel can carry a dedicated 240V circuit out to the yard:',
    localFaqs: [
      {
        q: 'Our Wyoming home has an older panel — can it support a hot tub?',
        a: 'It can, but a spa adds real load, so we run an evaluation on your existing service first. In many of Wyoming’s century-old homes a panel or service upgrade comes before the spa circuit, and we handle that as licensed, code-compliant work.',
      },
    ],
  },
  'mariemont': {
    intro: 'Mariemont is a National Historic Landmark, so we keep the outdoor run tidy when we wire a hot tub behind a Tudor Revival home. The spa circuit still meets code in weather-rated conduit. Call (513) 586-5107.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned garden community laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square. Homes built in the 1920s and 30s were wired for a fraction of today’s electrical demand, and a 240V hot tub is one of the largest loads you can add, so a panel evaluation is the starting point here, not an afterthought.',
      'Because the village is a designated landmark, we keep the outdoor run tidy and route weather-rated conduit to respect the home’s character while still meeting code. The GFCI-protected disconnect goes within sight of the tub, and the metal around the spa gets bonded the way water-adjacent equipment requires. Where a nearly century-old panel cannot carry the new circuit, we plan the upgrade as licensed work rather than overloading the existing service.',
    ],
    commonIntro:
      'In Mariemont’s 1920s-era homes, a hot tub circuit comes down to whether a near-century-old panel can take a 240V GFCI load and how to route the run discreetly:',
    localFaqs: [
      {
        q: 'Do you wire hot tubs at the historic homes in Mariemont?',
        a: 'Yes. We work throughout Mariemont and start with a panel evaluation, since 1920s service often needs an upgrade before a 240V spa circuit. We keep the conduit run tidy and bring everything to code without disturbing the home’s historic character.',
      },
    ],
  },
  'cheviot': {
    intro: 'The first question on an early-1900s Cheviot service is whether there’s room for a 50-amp 240V spa breaker. Sometimes the honest answer is a panel upgrade before any hot tub wiring. Call (513) 586-5107.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue. The lots are tight and the houses are old, which shapes a spa job two ways: backyards are compact, and the panels are often original and already full of breakers from decades of added circuits.',
      'On an early-1900s service, finding room for a 50-amp 240V spa breaker is the first real question, and the answer is sometimes a panel upgrade. Out in the yard, the wiring still has to be done to code regardless of lot size — weather-rated conduit to the pad, a GFCI disconnect within sight of the tub, and bonding of the metal around the spa. On the close-set lots Cheviot is known for, we route the run so it stays clear of the neighbor’s line and any shared drive.',
    ],
    commonIntro:
      'In Cheviot’s dense, early-1900s homes, a hot tub circuit usually hinges on whether a full older panel can take a new 240V GFCI breaker or needs an upgrade:',
    localFaqs: [
      {
        q: 'My Cheviot home has a small panel — can I still add a hot tub?',
        a: 'Possibly. Many early-1900s panels in Cheviot are already near capacity, so we evaluate the service before quoting. If there is no room for the 240V GFCI circuit, we lay out a panel upgrade as licensed, code-compliant work.',
      },
    ],
  },
  'covedale': {
    intro: 'Covedale houses run from early-1900s to mid-century, and the panels vary just as much. A hot tub pulls a steady, heavy load, so we evaluate yours before sizing the spa circuit. Call (513) 586-5107.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes. The mid-century houses here tend to have usable backyards and decks, which is where most Covedale spas end up, but the electrical service ranges from genuinely old to merely dated.',
      'A 240V hot tub pulls a steady, heavy load, so we run a panel evaluation across that age range before sizing anything. Older homes near the township line may need an upgrade to carry the circuit; on the newer end there is often headroom. Either way the outdoor work is the same to code: weather-rated conduit to the pad, a GFCI-protected disconnect within sight of the tub, and bonding of the surrounding metal so the spa is safe to step into.',
    ],
    commonIntro:
      'Across Covedale’s older and mid-century homes, a hot tub install comes down to a panel evaluation and a properly bonded 240V GFCI circuit out to the yard:',
    localFaqs: [
      {
        q: 'How do you decide if my Covedale panel can handle a hot tub?',
        a: 'We run a load evaluation on your existing service, since Covedale homes range from early-1900s to mid-century. If the panel has room we add the dedicated 240V GFCI circuit; if not, we plan an upgrade as licensed, code-compliant work.',
      },
    ],
  },
  'covington': {
    intro: 'In MainStrasse and Licking Riverside, Covington courtyards are tight and the spa pad sits close to the house. The hot tub wiring still needs a GFCI-protected disconnect within sight and bonding of nearby metal. Call (513) 586-5107.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes. Those century-old riverfront houses carry original electrical service, often patched over many decades, so the panel is the first thing we evaluate before adding a heavy 240V spa load.',
      'The tight courtyards and small rear lots common in MainStrasse mean a spa pad is usually close to the house, but the wiring still has to meet code for an outdoor, water-adjacent appliance: weather-rated conduit, a GFCI-protected disconnect within sight of the tub, and bonding of the metal around it. The low ground near the Ohio and Licking Rivers also makes a clean, weather-tight install matter, since outdoor equipment here sees real moisture. Where an old panel cannot carry the circuit, we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'In Covington’s historic riverfront homes, a hot tub circuit starts with a panel evaluation and a weather-tight, properly bonded 240V GFCI run:',
    localFaqs: [
      {
        q: 'Do you cross the river to wire hot tubs in Covington?',
        a: 'Yes. Covington is a core part of our service area, just across the river from downtown. We evaluate the panel first, since many 19th-century homes need an upgrade before a 240V spa circuit, and we do the work to code.',
      },
    ],
  },
  'newport': {
    intro: 'East Row backyards in Newport are often narrow and deep with a detached garage, which decides where the spa pad lands. We plan the hot tub wiring around that, with the conduit run sized to the distance. Call (513) 586-5107.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront. The hundreds of 19th-century homes in the East Row run on electrical service well past its original design, so a panel evaluation comes before any 240V spa load.',
      'East Row backyards are often narrow and deep with detached garages, which shapes where the spa pad lands and how far the weather-rated conduit has to run. The install still meets code regardless: a GFCI-protected disconnect within sight of the tub and bonding of the metal around it, since the spa sits outdoors in water. Where a Victorian-era panel cannot carry the circuit, we plan the upgrade as licensed work and keep the run unobtrusive in a historic district.',
    ],
    commonIntro:
      'In Newport’s Victorian East Row homes, a hot tub install hinges on a panel evaluation and a code-compliant 240V GFCI run to a deep rear lot:',
    localFaqs: [
      {
        q: 'Do you wire hot tubs at the historic East Row homes in Newport?',
        a: 'Yes. We work throughout the East Row and start with a panel evaluation, since these Victorian homes often need an upgrade before a 240V spa circuit. We route the conduit cleanly and bring everything to code.',
      },
    ],
  },
  'bellevue': {
    intro: 'Backyards along Bellevue’s late-1800s streets are small and close-set. When we wire a hot tub there, we route the conduit to reach the pad while keeping it clear of the neighbor’s property. Call (513) 586-5107.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes. Those late-1800s houses sit on small lots with original electrical service, so the two questions on every spa job here are whether the panel can take a 50-amp 240V circuit and where a tub even fits behind the house.',
      'Backyards are small and close-set, which means we route weather-rated conduit carefully to keep the run clear of the neighbor’s property while still reaching the pad. The code requirements do not change with lot size: a GFCI-protected disconnect within sight of the tub and proper bonding of the metal around the spa. The riverfront location adds real moisture exposure, so a weather-tight install matters, and where a 19th-century panel falls short we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'In Bellevue’s historic riverfront homes, a hot tub circuit comes down to a panel evaluation and a tidy, weather-tight 240V GFCI run on a small lot:',
    localFaqs: [
      {
        q: 'Can a small Bellevue lot and an old panel still support a hot tub?',
        a: 'Often yes. We evaluate the late-1800s service first, since many need an upgrade before a 240V spa load, and we route the weather-rated conduit to fit a compact riverfront lot. All of it is licensed, code-compliant work.',
      },
    ],
  },
  'fort-thomas': {
    intro: 'Wooded, sloping lots above the river often put a Fort Thomas spa pad a good distance from the house. That longer hot tub wiring run goes in weather-rated conduit, and we bond any metal railings or decking. Call (513) 586-5107.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river. Those large, established houses have the yards for a backyard spa, but many still carry original electrical service that was never meant for a sustained 240V load, so the panel is where we start.',
      'The wooded, sloping lots above the river often mean a longer weather-rated conduit run from the house to the spa pad, and the bonding has to account for any metal railings or decking around the tub. We set a GFCI-protected disconnect within sight of the spa, size the conductors for the distance, and recommend a panel or service upgrade where an early-1900s board cannot safely carry the circuit. The aim is wiring built to last on a home that has stood a century.',
    ],
    commonIntro:
      'In Fort Thomas’ stately early-1900s homes, a hot tub install starts with a panel evaluation and a properly sized, bonded 240V GFCI run to the yard:',
    localFaqs: [
      {
        q: 'How fast can you wire a hot tub in Fort Thomas?',
        a: 'Fort Thomas is well within our Northern Kentucky service area. We begin with a panel evaluation, since these early-1900s homes often need an upgrade before a 240V spa circuit, and we complete the work to code.',
      },
    ],
  },
  'florence': {
    intro: 'Florence’s mid-century panels are often full already, so adding a 50-amp hot tub circuit starts with an evaluation. We check yours, then wire the spa to code. Call (513) 586-5107.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area. The newer subdivisions tend to have big backyards and decks where a hot tub is a natural addition, and their panels usually have headroom for a dedicated 240V circuit.',
      'In the mid-century neighborhoods the question is different — those older panels may already be full, so we run an evaluation before adding a 50-amp spa load. Across both, the outdoor work is the same to code: weather-rated conduit to the pad, a GFCI-protected disconnect within sight of the tub, and bonding of the metal around the spa. Where the service falls short, we plan the upgrade as licensed work rather than overload the panel.',
    ],
    commonIntro:
      'Across Florence’s mid-century and newer homes, a hot tub circuit comes down to a panel evaluation and a code-compliant 240V GFCI run to the backyard:',
    localFaqs: [
      {
        q: 'My newer Florence subdivision home — can it take a hot tub circuit?',
        a: 'Usually yes; newer Boone County homes often have panel headroom for a dedicated 240V GFCI spa circuit. We confirm with an evaluation first, and for older Florence panels we plan an upgrade if needed, all as licensed work.',
      },
    ],
  },
  'erlanger': {
    intro: 'Near the airport, Erlanger has a mix of older and newer homes, and the panels follow suit. We check whether yours can carry a 50-amp spa circuit before any hot tub wiring starts. Call (513) 586-5107.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes. Those mid-1900s houses generally have the yard space for a spa, but their panels are now at the age where adding a heavy 240V load means checking capacity first.',
      'We run a panel evaluation across that mix of older and newer service to see whether the existing board can carry a 50-amp spa circuit. The outdoor wiring is done to code either way: weather-rated conduit out to the pad, a GFCI-protected disconnect within sight of the tub, and bonding of the metal around the spa so there is no shock risk stepping in. Where a mid-century panel is full, we lay out the upgrade as licensed, code-compliant work.',
    ],
    commonIntro:
      'Across Erlanger’s mid-century homes, a hot tub install usually starts with whether an aging panel can carry a new 240V GFCI circuit or needs an upgrade:',
    localFaqs: [
      {
        q: 'How do you check whether my Erlanger home can support a hot tub?',
        a: 'We run a panel evaluation on your existing service, since Erlanger’s mid-century homes vary in capacity. If there is room we add the dedicated 240V GFCI circuit; if not, we plan an upgrade as licensed work.',
      },
    ],
  },
  'mason': {
    intro: 'Mason’s subdivisions mostly date from the 1990s onward, so panels tend to be newer. A hot tub is still a heavy continuous load, and we confirm capacity before sizing the spa breaker and wiring the tub. Call (513) 586-5107.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati, near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town center. The subdivision homes are tailor-made for a spa — big backyards, large decks and patios, and panels modern enough to often have room for a dedicated 240V circuit.',
      'Even so, a hot tub is a heavy continuous load, so we confirm capacity with a panel evaluation before sizing the breaker. Out in those spacious yards the run to the spa pad can be long, so we size the weather-rated conduit and conductors for the distance, set a GFCI-protected disconnect within sight of the tub, and bond the metal and decking around it. In the older town center, where service is dated, an upgrade sometimes comes first.',
    ],
    commonIntro:
      'Across Mason’s newer subdivisions and older town center, a hot tub circuit comes down to a panel check and a properly bonded 240V GFCI run across a big backyard:',
    localFaqs: [
      {
        q: 'We have a large deck in a Mason subdivision — can you wire a hot tub for it?',
        a: 'Yes. Newer Mason homes often have panel room for a dedicated 240V GFCI spa circuit, and we size the weather-rated run for a long yard or deck. We confirm capacity with an evaluation and bond everything to code.',
      },
    ],
  },
  'west-chester': {
    intro: 'Newer panels are common in West Chester’s 1990s-onward subdivisions along I-75. Even so, a spa draws a sustained 240V load, so we verify capacity before we wire the hot tub. Call (513) 586-5107.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor. These newer homes typically come with the deep lots and large decks a hot tub suits, and their panels are usually modern enough to carry a dedicated 240V circuit.',
      'A spa still draws a sustained 240V load, so we verify capacity with a panel evaluation before adding the breaker. The big yards common here often mean a longer run, so we size the weather-rated conduit and conductors for the distance, place a GFCI-protected disconnect within sight of the tub, and bond the surrounding metal and decking. Where a panel is already loaded by other circuits, we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'Across West Chester’s newer subdivisions, a hot tub install comes down to confirming panel capacity and running a properly bonded 240V GFCI circuit to the yard:',
    localFaqs: [
      {
        q: 'Can a newer West Chester home handle a hot tub circuit?',
        a: 'Usually yes; subdivisions along the I-75 corridor often have panel headroom for a dedicated 240V GFCI spa circuit. We confirm with an evaluation and size the weather-rated run for a deep lot, all to code.',
      },
    ],
  },
  'pendleton': {
    intro: 'Pendleton’s mid-1800s Italianate buildings have tight rear yards and shared walls. Wiring a hot tub there means planning the conduit run carefully and bonding any metal deck railings. Call (513) 586-5107.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condos. A spa here usually goes on a rear patio or a rooftop deck, and the buildings run on a mix of original and retrofitted service, so the panel is the first thing we evaluate.',
      'These mid-1800s buildings have tight rear yards and shared walls, which means the weather-rated conduit run has to be planned carefully and the bonding done thoroughly around metal railings on a deck. We set a GFCI-protected disconnect within sight of the tub and confirm the panel can carry a 240V spa load. In a converted multi-unit, where one electrical service feeds several units, an upgrade or a properly fed circuit may be needed first, and we handle that as licensed work.',
    ],
    commonIntro:
      'In Pendleton’s 19th-century buildings and converted lofts, a hot tub circuit starts with a panel evaluation and a carefully routed, bonded 240V GFCI run:',
    localFaqs: [
      {
        q: 'Can you wire a hot tub for a Pendleton loft or rooftop deck?',
        a: 'Yes. We work throughout Pendleton’s converted 19th-century buildings and start with a panel evaluation, since older shared service often needs attention before a 240V spa circuit. We route the conduit carefully and bond the deck to code.',
      },
    ],
  },
  'queensgate': {
    intro: 'Queensgate is mostly warehouses and light-industrial buildings, and older industrial service needs a close look before a spa goes in. We check capacity, then run the 240V GFCI hot tub circuit. Call (513) 586-5107.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown, near the rail yards and the Mill Creek, with warehouses, offices, and light-industrial buildings. Spa and hot tub wiring here tends to be for a commercial setting — a fitness facility, an office amenity, or a converted space — rather than a backyard, which means a larger service and more complex panel layout to evaluate.',
      'In an older industrial building, finding capacity for a 240V GFCI spa circuit means looking closely at the existing service before anything is added. The code requirements still apply: a GFCI-protected disconnect within sight of the tub, weather-rated conduit, and bonding of the metal around it. The low ground near the Mill Creek is prone to flooding, so a weather-tight, well-bonded install matters even more, and where the panel falls short we plan an upgrade as licensed work.',
    ],
    commonIntro:
      'In Queensgate’s commercial and industrial buildings, a hot tub or spa circuit comes down to evaluating a larger service and running a bonded, weather-tight 240V GFCI feed:',
    localFaqs: [
      {
        q: 'Do you wire spas in commercial buildings in Queensgate?',
        a: 'Yes. Queensgate is mostly commercial and industrial, and we evaluate the building’s service before adding a 240V GFCI spa circuit. We handle the disconnect, weather-rated conduit, and bonding to code, and plan a panel upgrade if needed.',
      },
    ],
  },
  'cuf': {
    intro: 'Steep, small lots in Clifton Heights, University Heights and Fairview decide where a spa pad fits in CUF. We work the hot tub wiring around that, running weather-rated conduit to wherever the tub can go. Call (513) 586-5107.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights, and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals. Those older houses carry heavily used, often subdivided electrical service, so a panel evaluation is essential before adding a 50-amp 240V spa load.',
      'The lots here are small and steep, and yards are tight, which shapes where a spa pad fits and how the weather-rated conduit runs to it. The code requirements hold regardless: a GFCI-protected disconnect within sight of the tub and bonding of the metal around it. In subdivided houses where one panel feeds several units, capacity is often already stretched, so an upgrade or a dedicated feed may come first, and we handle that as licensed, code-compliant work.',
    ],
    commonIntro:
      'In CUF’s dense, older housing near UC, a hot tub circuit hinges on a panel evaluation and a properly bonded 240V GFCI run on a tight, sloping lot:',
    localFaqs: [
      {
        q: 'Can an older CUF home near UC support a hot tub circuit?',
        a: 'Sometimes. Many homes in Clifton Heights, University Heights, and Fairview run on subdivided, heavily used panels, so we evaluate the service first. If there is no room for the 240V GFCI circuit, we plan an upgrade as licensed work.',
      },
    ],
  },
  'camp-washington': {
    intro: 'Low Mill Creek valley ground in Camp Washington backs up in heavy rain. A spa pad sitting on grade there needs weather-tight hot tub wiring from the panel to the disconnect. Call (513) 586-5107.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories. The older homes here run on aging electrical service that was never sized for a sustained 240V load, so a panel evaluation comes before any spa circuit.',
      'The low valley ground is prone to drain and sewer backups in heavy rain, and that same moisture makes a weather-tight outdoor install matter for a spa pad sitting on grade. We run weather-rated conduit out to the tub, set a GFCI-protected disconnect within sight of it, and bond the surrounding metal so the spa is safe to step into. Where an older panel in this working housing cannot carry the circuit, we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'In Camp Washington’s older valley homes, a hot tub install comes down to a panel evaluation and a weather-tight, bonded 240V GFCI run on low ground:',
    localFaqs: [
      {
        q: 'How do you check if my Camp Washington home can take a hot tub?',
        a: 'We start with a panel evaluation, since the older homes here run on aging service. If there is capacity we add the dedicated 240V GFCI circuit; if not, we plan an upgrade, and we keep the outdoor run weather-tight given the valley’s moisture.',
      },
    ],
  },
  'south-fairmount': {
    intro: 'South Fairmount’s older housing along Queen City Avenue runs on aging electrical service. Before we add a 50-amp 240V hot tub circuit, we evaluate the panel, and the valley’s flood history shapes how we protect the outdoor run. Call (513) 586-5107.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding. That flood history is the key fact for a spa here: a hot tub is an outdoor, water-adjacent appliance, and a low-lying valley site demands a clean, weather-tight, properly bonded install.',
      'The neighborhood’s older housing also runs on aging electrical service, so a panel evaluation comes before adding a 50-amp 240V load. We run weather-rated conduit out to the pad, set a GFCI-protected disconnect within sight of the tub, and bond the metal around the spa so there is no shock risk in a setting where ground moisture is a constant. Where an older panel cannot carry the circuit, we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'In South Fairmount’s older valley homes, a hot tub circuit comes down to a panel evaluation and a weather-tight, bonded 240V GFCI run on low Lick Run ground:',
    localFaqs: [
      {
        q: 'Is a hot tub safe to wire on the low ground in South Fairmount?',
        a: 'Yes, when it is done right. We evaluate the older panel first, then run weather-rated conduit and a GFCI disconnect within sight of the tub and bond it thoroughly — important on the Lick Run valley’s damp, low-lying lots. All of it is licensed, code-compliant work.',
      },
    ],
  },
  'east-end': {
    intro: 'Along Eastern Avenue, East End river cottages carry decades-old service while the newer condos may have modern panels. Either way, we evaluate capacity before wiring a 240V hot tub. Call (513) 586-5107.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue, below Columbia Parkway, with historic river cottages and newer condos squeezed between the hillside and the Ohio River. A spa on a riverfront deck here sits in a high-moisture, sometimes flood-prone setting, so a weather-tight, well-bonded install is the priority.',
      'The older cottages carry decades-old electrical service, while the newer condos may have more modern panels, so we evaluate capacity before adding a 240V spa load. We run weather-rated conduit to the pad or deck, set a GFCI-protected disconnect within sight of the tub, and bond the surrounding metal — work that matters more, not less, this close to the river. Where an older cottage panel is full, we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'Along the East End’s riverfront homes, a hot tub install comes down to a panel evaluation and a weather-tight, bonded 240V GFCI run near the river:',
    localFaqs: [
      {
        q: 'My East End deck is right by the river — can you wire a hot tub safely?',
        a: 'Yes. We evaluate the panel first, then run weather-rated conduit, a GFCI disconnect within sight of the tub, and thorough bonding — all of which matter on riverfront lots along Eastern Avenue. It is licensed, code-compliant work.',
      },
    ],
  },
  'north-fairmount': {
    intro: 'North Fairmount’s hillside grade decides where a spa pad can sit. Our hot tub wiring follows the slope in weather-rated conduit, and we bond any metal railings or retaining walls near the tub. Call (513) 586-5107.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes. Those early-1900s houses run on aging electrical service, so the first step on any spa job is a panel evaluation to see whether the board can carry a 50-amp 240V load.',
      'The hillside grade shapes where a spa pad sits and how the weather-rated conduit runs to it, and the bonding has to account for any metal railings or retaining walls around the tub. We set a GFCI-protected disconnect within sight of the spa and confirm the panel before energizing it. Where an early-1900s service cannot take the circuit, we plan the upgrade as licensed, code-compliant work.',
    ],
    commonIntro:
      'In North Fairmount’s older hillside homes, a hot tub circuit starts with a panel evaluation and a properly bonded 240V GFCI run on sloping ground:',
    localFaqs: [
      {
        q: 'Can my older North Fairmount home support a hot tub circuit?',
        a: 'Possibly. The early-1900s homes here run on aging panels, so we evaluate the service first. If there is room we add the dedicated 240V GFCI circuit; if not, we plan an upgrade as licensed work.',
      },
    ],
  },
  'evanston': {
    intro: 'Yards near Xavier University in Evanston tend to be modest, which limits where a hot tub fits. We route the spa wiring to suit the lot and run it in weather-rated conduit. Call (513) 586-5107.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing. The older homes here carry aging electrical service, often heavily used in rental properties, so a panel evaluation comes before adding a 240V spa load.',
      'Yards on these early-1900s lots tend to be modest, which shapes where a spa pad fits and how the weather-rated conduit runs to it. The code work holds regardless: a GFCI-protected disconnect within sight of the tub and bonding of the metal around it. In a subdivided house or apartment building, where capacity may already be stretched, we confirm the service can carry the circuit and plan an upgrade as licensed work if it cannot.',
    ],
    commonIntro:
      'In Evanston’s early-1900s homes near Xavier, a hot tub circuit comes down to a panel evaluation and a bonded 240V GFCI run on a modest lot:',
    localFaqs: [
      {
        q: 'How do you check whether my Evanston home can take a hot tub?',
        a: 'We run a panel evaluation first, since the early-1900s homes near Xavier often carry aging, heavily used service. If there is capacity we add the dedicated 240V GFCI circuit; if not, we plan an upgrade as licensed, code-compliant work.',
      },
    ],
  },
  'south-cumminsville': {
    intro: 'South Cumminsville homes sit among industrial corridors in the Mill Creek valley, and most run on aging service. A 50-amp hot tub circuit only goes in after we evaluate the panel. Call (513) 586-5107.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors. The low valley ground is prone to drain and sewer backups in heavy rain, and that moisture is exactly why a spa here needs a clean, weather-tight, well-bonded install.',
      'The older housing runs on aging electrical service, so we evaluate the panel before adding a 50-amp 240V load. We run weather-rated conduit to the pad, set a GFCI-protected disconnect within sight of the tub, and bond the metal around the spa so it is safe to step into on damp, low-lying ground. Where an older panel cannot carry the circuit, we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'In South Cumminsville’s older valley homes, a hot tub install comes down to a panel evaluation and a weather-tight, bonded 240V GFCI run on low ground:',
    localFaqs: [
      {
        q: 'Is it safe to wire a hot tub on the low ground in South Cumminsville?',
        a: 'Yes, when it is done to code. We evaluate the older panel first, then run weather-rated conduit, a GFCI disconnect within sight of the tub, and thorough bonding — important on the Mill Creek valley’s damp lots. It is licensed work throughout.',
      },
    ],
  },
  'english-woods': {
    intro: 'From a hilltop over the Mill Creek valley, English Woods yards slope in ways that shape where a spa can go. We run the hot tub wiring in weather-rated conduit and bond railings or decking around it. Call (513) 586-5107.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years. The older homes here run on aging electrical service, so a panel evaluation is the first step before adding a 240V spa load, while any newer redeveloped homes may have more headroom.',
      'The hilltop setting shapes where a spa pad sits and how the weather-rated conduit runs to it, and the bonding has to take in any metal railings or decking around the tub. We set a GFCI-protected disconnect within sight of the spa and confirm the panel can carry the circuit before energizing it. Where an older service falls short, we plan the upgrade as licensed, code-compliant work.',
    ],
    commonIntro:
      'In English Woods’ older hilltop homes, a hot tub circuit comes down to a panel evaluation and a properly bonded 240V GFCI run on sloping ground:',
    localFaqs: [
      {
        q: 'Can my English Woods home handle a hot tub circuit?',
        a: 'It depends on the panel, so we evaluate the service first; older homes here may need an upgrade while newer redeveloped ones often have room. Either way we add the dedicated 240V GFCI circuit and bonding as licensed work.',
      },
    ],
  },
  'north-avondale': {
    intro: 'Big, tree-shaded lots near Rockdale Avenue can put a North Avondale spa well away from the house. We size the hot tub wiring for that longer conduit run and bond the metal around the tub. Call (513) 586-5107.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue. Those large lots are ideal for a backyard spa, but the big, century-old houses often still carry original electrical service that was never meant for a sustained 240V load.',
      'The deep, tree-shaded lots can mean a longer weather-rated conduit run from the house to the spa pad, and the bonding has to account for the metal around the tub. We set a GFCI-protected disconnect within sight of the spa, size the conductors for the distance, and start with a panel evaluation. Where an early-1900s service cannot carry the circuit, we plan a panel or service upgrade as licensed, code-compliant work.',
    ],
    commonIntro:
      'In North Avondale’s grand early-1900s homes, a hot tub install starts with a panel evaluation and a properly sized, bonded 240V GFCI run across a deep lot:',
    localFaqs: [
      {
        q: 'Our North Avondale home is old with a large yard — can you wire a hot tub?',
        a: 'Yes. We size the weather-rated run for a deep, shaded lot and start with a panel evaluation, since these early-1900s homes often need an upgrade before a 240V spa circuit. All of it is licensed, code-compliant work.',
      },
    ],
  },
  'millvale': {
    intro: 'Millvale is a compact valley neighborhood, and its older homes run on aging electrical service. We check the panel first, then wire the hot tub on a 50-amp 240V circuit if it can carry it. Call (513) 586-5107.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community. The low-lying ground brings real moisture and a risk of backups in heavy rain, which is why a spa here needs a clean, weather-tight, well-bonded install on its pad.',
      'The older housing in Millvale runs on aging electrical service, so we evaluate the panel before adding a 50-amp 240V load. We run weather-rated conduit to the tub, set a GFCI-protected disconnect within sight of it, and bond the metal around the spa so it is safe to step into on damp valley ground. Where an older panel cannot carry the circuit, we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'In Millvale’s valley homes, a hot tub circuit comes down to a panel evaluation and a weather-tight, bonded 240V GFCI run on low ground:',
    localFaqs: [
      {
        q: 'How do you check if my Millvale home can support a hot tub?',
        a: 'We evaluate the older panel first, since the homes here run on aging service. If there is room we add the dedicated 240V GFCI circuit and keep the outdoor run weather-tight for the valley’s moisture; if not, we plan an upgrade as licensed work.',
      },
    ],
  },
  'paddock-hills': {
    intro: 'Paddock Hills homes near the Norwood Lateral mostly date from the early and mid-1900s. That service gets an evaluation before we size the breaker for your hot tub wiring. Call (513) 586-5107.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes. Those homes generally have the yard space for a spa, but their panels are at the age where adding a sustained 240V load means checking capacity first.',
      'We run a panel evaluation on the early- and mid-1900s service before sizing the breaker. The outdoor work is done to code regardless: weather-rated conduit out to the pad, a GFCI-protected disconnect within sight of the tub, and bonding of the metal around the spa so there is no shock risk stepping in. Where a panel is already loaded, we lay out the upgrade as licensed, code-compliant work.',
    ],
    commonIntro:
      'In Paddock Hills’ early- and mid-1900s homes, a hot tub install usually starts with whether an aging panel can carry a 240V GFCI circuit or needs an upgrade:',
    localFaqs: [
      {
        q: 'Can my Paddock Hills home handle a hot tub circuit?',
        a: 'Often yes, but the early- and mid-1900s panels here vary, so we run an evaluation first. If there is capacity we add the dedicated 240V GFCI circuit; if not, we plan an upgrade as licensed work.',
      },
    ],
  },
  'spring-grove-village': {
    intro: 'Around Spring Grove Cemetery, Spring Grove Village mixes older homes with industry, and older homes mean aging service. A panel evaluation comes before any 50-amp spa circuit for a hot tub. Call (513) 586-5107.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest cemeteries in the country, with a mix of older homes and industry. The low valley ground brings moisture and a risk of backups in heavy rain, which is why a spa here needs a clean, weather-tight, well-bonded install.',
      'The neighborhood’s older housing runs on aging electrical service, so a panel evaluation comes before adding a 50-amp 240V load. We run weather-rated conduit to the spa pad, set a GFCI-protected disconnect within sight of the tub, and bond the metal around it so it is safe to step into on damp valley ground. Where an older panel cannot carry the circuit, we plan the upgrade as licensed work.',
    ],
    commonIntro:
      'In Spring Grove Village’s older valley homes, a hot tub circuit comes down to a panel evaluation and a weather-tight, bonded 240V GFCI run on low ground:',
    localFaqs: [
      {
        q: 'Is it safe to wire a hot tub on the low valley ground in Spring Grove Village?',
        a: 'Yes, when done to code. We evaluate the older panel first, then run weather-rated conduit, a GFCI disconnect within sight of the tub, and thorough bonding — important on the Mill Creek valley’s damp lots. It is licensed work throughout.',
      },
    ],
  },
  'linwood': {
    intro: 'Down by Lunken Airport and the river bottoms, Linwood’s older homes run on aging service. We evaluate that panel before adding a 240V hot tub circuit. Call (513) 586-5107.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms. That low riverside position means moisture and a risk of high water, so a spa here needs a weather-tight, well-bonded install on its pad.',
      'The older homes in Linwood carry aging electrical service, so we evaluate the panel before adding a 240V spa load. We run weather-rated conduit to the tub, set a GFCI-protected disconnect within sight of it, and bond the surrounding metal so the spa is safe to step into this close to the river bottoms. Where an older panel cannot carry the circuit, we plan the upgrade as licensed, code-compliant work.',
    ],
    commonIntro:
      'In Linwood’s older riverside homes, a hot tub install comes down to a panel evaluation and a weather-tight, bonded 240V GFCI run near the river bottoms:',
    localFaqs: [
      {
        q: 'My Linwood home is near the river bottoms — can you wire a hot tub safely?',
        a: 'Yes. We evaluate the older panel first, then run weather-rated conduit, a GFCI disconnect within sight of the tub, and thorough bonding — all of which matter near Lunken and the river bottoms. It is licensed, code-compliant work.',
      },
    ],
  },
  'bond-hill': {
    intro: 'Bond Hill’s early-1900s and mid-century houses along Reading Road vary in panel age. We evaluate yours before we size the breaker and start the hot tub wiring. Call (513) 586-5107.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes. Those homes generally have the backyard space for a spa, but their panels are now at the age where adding a sustained 240V load means evaluating capacity first.',
      'We run a panel evaluation across that early-1900s and mid-century service before sizing the breaker. The outdoor work is done to code either way: weather-rated conduit out to the pad, a GFCI-protected disconnect within sight of the tub, and bonding of the metal around the spa so there is no shock risk stepping in. Where a panel is already loaded by other circuits, we plan the upgrade as licensed, code-compliant work.',
    ],
    commonIntro:
      'Across Bond Hill’s older and mid-century homes, a hot tub circuit usually starts with whether an aging panel can carry a 240V GFCI load or needs an upgrade:',
    localFaqs: [
      {
        q: 'How do you decide if my Bond Hill home can take a hot tub?',
        a: 'We run a panel evaluation on your existing service, since Bond Hill homes range from early-1900s to mid-century. If there is room we add the dedicated 240V GFCI circuit; if not, we plan an upgrade as licensed work.',
      },
    ],
  },
};
