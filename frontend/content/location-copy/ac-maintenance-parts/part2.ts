export const part2: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'madeira': {
    intro:
      'Madeira AC maintenance usually means a condenser that is a couple of decades old beside a mid-century house that got central air later. Leaf litter, seed fluff and grass clippings settle into the fins, so a spring tune-up clears that buildup, checks the charge and tests the capacitor.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city built largely of mid-century single-family homes on quiet, tree-lined streets. Most of those houses had central air added years after they were built, so the condensers sitting beside them are often a couple of decades old — exactly the kind of equipment that runs longer and stays reliable when its coils and contacts get cleaned and tested once a year.',
      'Those same tree-lined streets are part of the maintenance picture. Leaf litter, seed fluff, and grass clippings settle into a condenser’s fins all summer, and a coil that can’t shed heat makes the compressor work harder and burn more power. A spring tune-up clears that buildup, checks the refrigerant charge, and catches a weak capacitor before it strands a mid-century system on the hottest afternoon of the year.',
    ],
    commonIntro:
      'Across Madeira’s mid-century homes, the tune-up signs we see most often trace back to central air that was retrofitted in and now needs yearly attention to stay efficient:',
    localFaqs: [
      {
        q: 'When should I schedule an AC tune-up in Madeira?',
        a: 'Aim for spring, before the first real heat wave. Booking a tune-up in April or May on a Madeira mid-century system means the coils are clean and the refrigerant is checked before the unit has to run hard, which keeps it efficient through summer.',
      },
    ],
  },
  'wyoming': {
    intro:
      'Wyoming AC maintenance usually involves one retrofitted condenser cooling two or three floors of a grand Victorian or early-1900s home. The tree canopy drops leaves, pollen and seed pods into the coil all season, so a yearly tune-up clears the fins, swaps the filter and checks the charge.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets. Houses that old were never built for central air, so the cooling in them is a retrofit — a single condenser often asked to cool two or three floors. Keeping that retrofitted system efficient depends on yearly cleaning and testing far more than a newer home does.',
      'Wyoming’s mature tree canopy is the other half of the story. The same shade that keeps the streets cool drops leaves, pollen, and seed pods into condenser coils all season, and a clogged coil quietly drives up the electric bill on a large house that already takes a lot to cool. An annual tune-up clears the fins, swaps a loaded filter, and checks the charge so the system holds temperature through the summer instead of running flat out.',
    ],
    commonIntro:
      'In Wyoming’s grand, century-old homes, the tune-up signs we see most often come from cooling equipment retrofitted into houses that predate central air:',
    localFaqs: [
      {
        q: 'Does the tree cover in Wyoming affect how often my AC needs servicing?',
        a: 'It does. Wyoming’s heavy canopy drops debris into condenser coils all summer, so an annual spring tune-up to clean the fins and filter keeps an older home’s system running efficiently rather than choking on leaf litter.',
      },
    ],
  },
  'mariemont': {
    intro:
      'A Mariemont AC tune-up usually covers cooling added to a 1920s or 1930s Tudor with tight ductwork. Masonry walls hold heat and humid summers mean long cycles, so we clean the evaporator coil and filter, check the condensate drain and confirm the charge each spring.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned garden community laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side. Homes that date to the 1920s and 30s were built long before central air, so cooling here is almost always a later addition working through tight ductwork — and that kind of retrofitted system stays reliable longest when it gets cleaned and inspected every year.',
      'In a 1920s Tudor, the cooling load is unforgiving: masonry walls hold the day’s heat, and Cincinnati’s humid summers mean the system runs long cycles to pull moisture out of the air. A dirty evaporator coil or a clogged filter cripples that dehumidifying just when you need it most. A spring tune-up cleans both, checks the condensate drain, and confirms the charge so a near-century-old home stays comfortable without the equipment straining.',
    ],
    commonIntro:
      'In Mariemont’s 1920s-era homes, the tune-up signs we see most often come from cooling retrofitted into houses that predate central air:',
    localFaqs: [
      {
        q: 'Why does AC maintenance matter for keeping a Mariemont Tudor comfortable in humid weather?',
        a: 'Mariemont’s masonry Tudors hold heat and the air gets muggy, so the system runs long cycles to remove moisture. A spring tune-up that cleans the evaporator coil and clears the condensate drain keeps that dehumidifying efficient through a humid summer.',
      },
    ],
  },
  'cheviot': {
    intro:
      'In Cheviot, AC maintenance often starts in a narrow side yard. Condensers on these tight lots sit near fences, mowers and dryer vents that load the coil with dust and lint, so a yearly tune-up pulls out the debris, replaces the filter and tests the electrical parts.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue. Cooling in those century-old homes is retrofitted, and the condensers are usually wedged into narrow side yards on tight lots — close to fences, mowers, and dryer vents that load their coils with dust and lint.',
      'On a packed grid like Cheviot’s, a condenser jammed against a property line struggles to breathe, and a coil starved for airflow runs hotter and costs more to run. An annual tune-up pulls the debris out of those tight-set coils, replaces a loaded filter, and tests the electrical parts so an older system keeps cooling efficiently through the summer instead of laboring against its own grime.',
    ],
    commonIntro:
      'In Cheviot’s dense, early-1900s homes, the tune-up signs we see most often come from condensers squeezed onto tight lots that need yearly cleaning:',
    localFaqs: [
      {
        q: 'My Cheviot condenser sits in a tight side yard — does that change maintenance?',
        a: 'Yes. A condenser wedged near a fence or dryer vent loads its coil with dust and lint faster, so an annual spring tune-up to clean the fins and clear the area around it keeps an older Cheviot system running efficiently.',
      },
    ],
  },
  'covedale': {
    intro:
      'Covedale AC maintenance covers condensers of all ages in early-1900s through mid-century homes. Mature trees and open grass shed seed fluff and clippings into outdoor units all summer, so a spring tune-up clears the fins, checks the refrigerant charge and swaps a clogged filter.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes. Cooling across that older housing was added over the years, so the condensers vary in age but share one trait — they last longer and run more cheaply when the coils and contacts are cleaned and tested annually.',
      'Covedale sits on the higher west-side ground, and the established lots carry mature trees and open grass that shed debris straight into outdoor units all summer. A condenser coil packed with seed fluff and clippings can’t reject heat, so the system runs longer and the bill climbs. A spring tune-up clears the fins, checks the refrigerant charge, and swaps a clogged filter so a mid-century system stays efficient through the cooling season.',
    ],
    commonIntro:
      'Across Covedale’s older and mid-century homes, the tune-up signs we see most often come from aging systems that need a yearly cleaning to stay efficient:',
    localFaqs: [
      {
        q: 'When is the best time for an AC tune-up in Covedale?',
        a: 'Spring is ideal. Servicing a Covedale system in April or May clears the coil of the prior season’s leaf and grass debris and checks the charge before the unit has to run hard, keeping it efficient through summer.',
      },
    ],
  },
  'covington': {
    intro:
      'AC maintenance in Covington mostly means a retrofitted system in a narrow 19th-century rowhouse in MainStrasse Village or Licking Riverside. Humid river valley summers make these systems work hard, so a spring tune-up cleans the coils, clears the condensate line and confirms the charge.',
    relevance: [
      'Covington, KY (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes. Cooling in those century-old homes is always a retrofit, and a system squeezed into a narrow rowhouse stays reliable longest when its coils, charge, and drain are checked once a year.',
      'Sitting in the river valley between the Ohio and Licking, Covington’s summers run hot and humid, so a retrofitted AC works hard to pull moisture out of tight, masonry rowhouses. A dirty evaporator coil or a backed-up condensate line undercuts that dehumidifying and can leave water where you don’t want it in an old home. A spring tune-up cleans both and confirms the charge so the system handles the humidity efficiently.',
    ],
    commonIntro:
      'In Covington’s historic riverfront homes, the tune-up signs we see most often come from cooling retrofitted into century-old rowhouses:',
    localFaqs: [
      {
        q: 'Why does AC maintenance matter in Covington’s humid river-valley summers?',
        a: 'Covington sits in the Ohio and Licking river valley where summers turn muggy, so the system runs long to remove moisture. A spring tune-up that cleans the evaporator coil and clears the condensate drain keeps that dehumidifying efficient in a historic riverfront home.',
      },
    ],
  },
  'newport': {
    intro:
      'Newport AC maintenance usually involves cooling retrofitted into a 19th-century home in the East Row Historic District. Low riverfront ground holds humidity, and a caked evaporator coil and filter lose their grip on moisture, so a spring tune-up cleans the coils, checks the charge and clears the drain.',
    relevance: [
      'Newport, KY (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront. The hundreds of 19th-century homes in the East Row run on cooling that was retrofitted in long after they were built, and that kind of system depends on a yearly cleaning to stay efficient.',
      'Newport’s low riverfront ground holds the summer humidity, and a Victorian home in the East Row asks its AC to run long cycles just to keep the air dry. When the evaporator coil and filter are caked, the system loses its grip on that moisture and uses more power doing it. A spring tune-up cleans the coils, checks the charge, and clears the condensate drain so an older home stays comfortable through a muggy Ohio Valley summer.',
    ],
    commonIntro:
      'In Newport’s Victorian East Row homes, the tune-up signs we see most often come from cooling retrofitted into 19th-century houses:',
    localFaqs: [
      {
        q: 'How does an AC tune-up help an older East Row home in Newport?',
        a: 'East Row Victorians rely on retrofitted cooling, and Newport’s riverfront summers are humid. A spring tune-up that cleans the coils and clears the condensate drain keeps that older system removing moisture efficiently before the heat sets in.',
      },
    ],
  },
  'bellevue': {
    intro:
      'Most AC tune-ups in Bellevue are on retrofitted systems in late-1800s homes with condensers in narrow side and rear yards. Airflow is limited and river humidity is high, so we clean both coils, swap the filter and check the charge to keep the house from feeling muggy.',
    relevance: [
      'Bellevue, KY (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes. Cooling in those century-old houses is a retrofit, and the condensers usually sit in narrow side and rear yards on Bellevue’s tight lots, where airflow is limited and yearly cleaning matters most.',
      'Bellevue’s riverfront setting brings humid summers, and a retrofitted system in a close-built 1800s home has to run long to keep the air dry. A condenser hemmed into a tight yard fills its coil with debris and loses efficiency, while a clogged evaporator coil leaves the house muggy. A spring tune-up cleans both coils, swaps the filter, and checks the charge so the system holds up through the season without straining.',
    ],
    commonIntro:
      'In Bellevue’s historic riverfront homes, the tune-up signs we see most often come from cooling retrofitted into tightly built 1800s houses:',
    localFaqs: [
      {
        q: 'When should I book AC maintenance in Bellevue?',
        a: 'Spring, before the river-valley humidity sets in. Servicing a Bellevue system in April or May cleans the coils on a tight-lot condenser and checks the charge so it cools and dehumidifies efficiently all summer.',
      },
    ],
  },
  'fort-thomas': {
    intro:
      'For AC maintenance in Fort Thomas, the job is usually cooling added to a large early-1900s home under a heavy tree canopy on the bluff. Leaves, pollen and seed pods fall into the condenser coil all summer, so a yearly tune-up clears the fins and checks the charge.',
    relevance: [
      'Fort Thomas, KY (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river. Those large, established homes run on cooling that was added later, and a system asked to cool a big older house stays reliable and efficient only with a yearly cleaning and inspection.',
      'Fort Thomas sits up on the bluff with a heavy tree canopy over its streets, and that shade drops leaves, pollen, and seed pods into condenser coils through the summer. On a large home that already takes plenty to cool, a debris-choked coil pushes the electric bill higher and shortens the equipment’s life. A spring tune-up clears the fins, checks the refrigerant charge, and replaces a loaded filter so the system carries a big home through the season efficiently.',
    ],
    commonIntro:
      'In Fort Thomas’ stately early-1900s homes, the tune-up signs we see most often come from cooling added to large older houses on shaded lots:',
    localFaqs: [
      {
        q: 'Do the trees on Fort Thomas streets affect AC maintenance?',
        a: 'Yes. The canopy above Fort Thomas’ streets drops leaves and seed pods into condenser coils all summer, so an annual spring tune-up to clean the fins and filter keeps a large older home’s system running efficiently.',
      },
    ],
  },
  'florence': {
    intro:
      'Florence AC maintenance covers older equipment in mid-century neighborhoods and newer subdivision systems near the Florence Mall. Newer homes sit on sunny lots with little shade and grass clippings in the coils, and many warranties require documented annual service, which a spring tune-up keeps current.',
    relevance: [
      'Florence, KY (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area. Even a newer subdivision condenser benefits from a yearly cleaning, while the mid-century neighborhoods carry older equipment that depends on it to stay efficient.',
      'In Florence’s newer subdivisions, the homes sit on open, sunlit lots with young landscaping and little shade, so condensers take direct afternoon sun and the systems run hard on hot days. Grass clippings from large lawns load the coils, and a manufacturer warranty often requires documented annual service to stay valid. A spring tune-up cleans the coil, checks the charge, and keeps the maintenance record current so a newer system stays efficient and covered.',
    ],
    commonIntro:
      'Across Florence’s mid-century and newer homes, the tune-up signs we see most often come from systems working sunlit lots that need yearly cleaning:',
    localFaqs: [
      {
        q: 'Does my newer Florence home’s AC still need a yearly tune-up?',
        a: 'Yes. Even newer subdivision systems in Florence collect grass clippings on the coil and often carry a warranty that requires documented annual service. A spring tune-up keeps it efficient and the coverage valid.',
      },
    ],
  },
  'erlanger': {
    intro:
      'AC maintenance in Erlanger mostly involves well-worn equipment in mid-century homes near the airport. Mature trees and grass on these settled lots load the coils each summer, so a spring tune-up clears the fins, checks the capacitor and charge and swaps a clogged filter.',
    relevance: [
      'Erlanger, KY (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes. Homes from the mid-1900s are now at the age where their cooling equipment is well-worn, and a yearly cleaning and test is what keeps that older system efficient instead of failing in the first heat wave.',
      'In Erlanger’s settled neighborhoods, those decades-old condensers sit on lots that have filled in with mature trees and grass over the years, and the falling debris loads the coils each summer. A coil that can’t shed heat makes a tired compressor work harder and run up the bill. A spring tune-up clears the fins, checks the capacitor and charge, and swaps a clogged filter so a mid-century system stays reliable through the season.',
    ],
    commonIntro:
      'Across Erlanger’s mid-century homes, the tune-up signs we see most often come from aging equipment that needs yearly cleaning to stay efficient:',
    localFaqs: [
      {
        q: 'When is the best time to service AC in Erlanger?',
        a: 'Spring is best. Tuning up an Erlanger mid-century system in April or May clears the coil of debris and checks the worn electrical parts before the unit has to run hard through summer.',
      },
    ],
  },
  'mason': {
    intro:
      'Mason’s subdivisions were built mostly from the 1990s onward, and AC maintenance there now means systems that are decades old. Open, sunny lots with broad lawns put clippings and dust in the coils, so a spring tune-up cleans the coil, checks the charge and keeps warranty records current.',
    relevance: [
      'Mason, KY (ZIP 45040) is a fast-growing Warren County city north of Cincinnati, near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town center. Even those 1990s-and-newer systems are now decades old, and a yearly cleaning and test is what keeps them running on the efficient side rather than drifting toward an early failure.',
      'Mason’s large subdivisions sit on open, sunny lots with broad lawns and limited shade, so condensers take the full afternoon sun and the systems run hard on hot days. Mower clippings and dust settle into the coils, and the warranties on newer equipment frequently require documented annual service. A spring tune-up cleans the coil, checks the charge, and keeps that service record current so the system stays efficient and covered.',
    ],
    commonIntro:
      'Across Mason’s newer subdivisions and older town center, the tune-up signs we see most often come from systems working sunlit lots:',
    localFaqs: [
      {
        q: 'Does a 1990s-era home in a Mason subdivision need annual AC service?',
        a: 'Yes. Those systems are now decades old, take full sun on open subdivision lots, and often carry a warranty requiring documented service. A spring tune-up keeps the coil clean and the unit efficient before summer.',
      },
    ],
  },
  'west-chester': {
    intro:
      'West Chester AC maintenance mostly covers subdivision systems built from the 1990s onward along I-75. Condensers on open lots run in direct sun, lawn debris loads the coils, and many warranties require documented annual service. A spring tune-up cleans the coil, checks the charge and keeps that record.',
    relevance: [
      'West Chester, KY (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor. Those subdivision systems are now old enough that a yearly cleaning and inspection keeps them efficient and heads off the wear that otherwise builds up unnoticed.',
      'West Chester’s subdivisions sit on open, exposed lots with little mature shade, so condensers run in direct sun and work hard through the afternoon heat. Lawn debris and dust load the coils each season, and most newer systems carry a warranty that requires documented annual service. A spring tune-up cleans the coil, checks the refrigerant charge, and keeps that record current so the equipment stays efficient and the coverage holds.',
    ],
    commonIntro:
      'Across West Chester’s newer subdivisions, the tune-up signs we see most often come from systems running sunlit, exposed lots:',
    localFaqs: [
      {
        q: 'When should I schedule AC maintenance in West Chester?',
        a: 'Spring, before the heat arrives. Servicing a West Chester subdivision system in April or May cleans the sun-exposed condenser coil and keeps the warranty record current so the unit stays efficient all summer.',
      },
    ],
  },
  'pendleton': {
    intro:
      'Pendleton AC maintenance covers retrofitted systems, often shared or stacked, in restored 19th-century Italianate buildings and lofts. Masonry holds summer heat, and a backed-up condensate line can spill water into a finished historic space, so a spring tune-up cleans the coils, clears the drain and checks the charge.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condos. Cooling in those mid-1800s buildings is retrofitted, often shared or stacked across units, and that kind of system stays efficient only when its coils and condensate handling get checked every year.',
      'A 19th-century masonry building holds the summer heat, and a retrofitted system has to run long to keep an Italianate loft comfortable through Cincinnati’s humid stretch. A dirty evaporator coil or a backed-up condensate line undercuts that and can spill water into a finished historic space. A spring tune-up cleans the coils, clears the drain, and confirms the charge so cooling stays efficient in tightly built blocks.',
    ],
    commonIntro:
      'In Pendleton’s 19th-century buildings and converted lofts, the tune-up signs we see most often come from cooling retrofitted into masonry that holds heat:',
    localFaqs: [
      {
        q: 'Why does AC maintenance matter in a converted Pendleton loft?',
        a: 'Pendleton’s 19th-century masonry holds heat and the summers are humid, so a retrofitted system runs long. A spring tune-up that cleans the coil and clears the condensate drain keeps it efficient and protects the finished historic space from drain backups.',
      },
    ],
  },
  'queensgate': {
    intro:
      'Queensgate is mostly commercial, so AC maintenance there means rooftop and packaged units running long hours. Dust, soot and grit from the rail yards settle into the condenser coils, and a pre-season tune-up cleans them and checks the charge and electrical parts to keep operating costs down.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown, near the rail yards and the Mill Creek, with warehouses, offices, and light-industrial buildings. The cooling here is mostly commercial rooftop and packaged units, and those systems run long hours that make a documented annual tune-up essential to keeping them efficient.',
      'Sitting in the Mill Creek valley beside the rail yards, Queensgate’s air carries dust, soot, and industrial grit that settle straight into rooftop condenser coils. A coil caked with that grime can’t shed heat, so the unit runs longer and the energy cost climbs on a building that already cools a lot of square footage. A pre-season tune-up cleans the coils, checks the charge and electrical parts, and keeps a commercial system efficient through the cooling months.',
    ],
    commonIntro:
      'In Queensgate’s commercial and industrial buildings, the tune-up signs we see most often come from rooftop units fouled by valley dust and grit:',
    localFaqs: [
      {
        q: 'Do you maintain commercial AC units in Queensgate?',
        a: 'Yes. Queensgate is mostly commercial and industrial, and the valley dust near the rail yards loads rooftop coils fast. A pre-season tune-up cleans those coils and checks the charge to keep a commercial system running efficiently.',
      },
    ],
  },
  'cuf': {
    intro:
      'AC maintenance in CUF is mostly hard-used retrofitted systems in student rentals across Clifton Heights, University Heights and Fairview. Condensers squeezed into side yards collect dust, and tenants rarely change filters, so a spring tune-up clears the coils, swaps the filter and checks the charge.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights, and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals. Cooling in those subdivided houses is retrofitted and runs under heavy use, so a yearly cleaning and inspection is what keeps an older system efficient through a hard-used summer.',
      'In CUF’s tightly packed houses, condensers are squeezed into narrow side yards and shared spaces, and the dust and traffic of a dense student neighborhood load their coils and filters fast. A retrofitted system fighting a fouled coil on a hot hilltop runs longer and costs more, and a tenant rarely changes the filter. A spring tune-up clears the coils, swaps the filter, and checks the charge so the cooling holds up through a heavily occupied summer.',
    ],
    commonIntro:
      'In CUF’s dense, older student-rental housing near UC, the tune-up signs we see most often come from hard-used systems with neglected filters:',
    localFaqs: [
      {
        q: 'Should a CUF rental near UC get an annual AC tune-up?',
        a: 'Yes. CUF rentals run hard and tenants rarely change the filter, so coils foul quickly. A spring tune-up that cleans the coil and swaps the filter keeps an older system efficient through a full summer of heavy use.',
      },
    ],
  },
  'camp-washington': {
    intro:
      'In Camp Washington, AC tune-ups deal with industrial dust. The Mill Creek valley air carries grit that settles into condenser coils on old worker homes and buildings, and low ground holds humidity, so we clean the coils, swap a loaded filter and check the charge.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories. Cooling in those older homes and buildings is retrofitted, and a yearly cleaning keeps that equipment efficient against the dust and heat of an industrial valley.',
      'Down in the Mill Creek valley, the air carries industrial dust and grit that settle into condenser coils, while the low ground holds the summer humidity. A coil packed with that grime can’t reject heat, so a retrofitted system runs long and uses more power to keep an old worker’s home comfortable. A spring tune-up cleans the coils, swaps a loaded filter, and checks the charge so the system stays efficient through the season.',
    ],
    commonIntro:
      'In Camp Washington’s older homes and buildings down in the valley, the tune-up signs we see most often come from coils fouled by industrial dust:',
    localFaqs: [
      {
        q: 'Does the valley dust in Camp Washington affect AC maintenance?',
        a: 'It does. The industrial dust and grit in the Mill Creek valley settle into condenser coils, so an annual spring tune-up to clean the fins and filter keeps an older home’s system running efficiently through summer.',
      },
    ],
  },
  'south-fairmount': {
    intro:
      'South Fairmount AC maintenance means aging retrofitted systems in older homes down in the low, humid Lick Run valley. When the evaporator coil and filter clog, a system loses its grip on that moisture, so a spring tune-up cleans the coils, clears the condensate drain and checks the charge.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding. Cooling in its older homes is retrofitted, and that aging equipment depends on a yearly cleaning to stay efficient in a low, humid valley.',
      'The Lick Run valley setting means South Fairmount holds the summer humidity, so a retrofitted system runs long cycles to keep an older home’s air dry. When the evaporator coil and filter clog, the system loses its grip on that moisture and burns more power. A spring tune-up cleans the coils, clears the condensate drain, and checks the charge so the cooling stays efficient through a muggy valley summer.',
    ],
    commonIntro:
      'In South Fairmount’s older valley homes, the tune-up signs we see most often come from systems working a low, humid valley:',
    localFaqs: [
      {
        q: 'Why does AC maintenance matter in the Lick Run valley in South Fairmount?',
        a: 'The valley holds summer humidity, so an older home’s system runs long to remove moisture. A spring tune-up that cleans the evaporator coil and clears the condensate drain keeps that dehumidifying efficient through the season.',
      },
    ],
  },
  'east-end': {
    intro:
      'The East End sits on the river below Columbia Parkway, and AC maintenance here is a fight against humidity. Retrofitted systems in older cottages run long cycles, so a spring tune-up cleans the coils, clears the condensate drain and checks the charge to keep water where it belongs.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue, below Columbia Parkway, with historic river cottages and newer condos squeezed between the hillside and the Ohio River. Cooling in the older cottages is retrofitted, and the riverside humidity makes a yearly cleaning and inspection key to keeping any system efficient here.',
      'Pinned right on the river below the hill, the East End sits in some of the most humid air in the area, and an AC works long cycles to keep a riverfront cottage dry. A clogged evaporator coil or a backed-up condensate line undercuts that dehumidifying and leaves water where it shouldn’t be. A spring tune-up cleans the coils, clears the drain, and checks the charge so the system handles the riverside humidity efficiently.',
    ],
    commonIntro:
      'Along the East End’s riverfront homes, the tune-up signs we see most often come from systems fighting heavy riverside humidity:',
    localFaqs: [
      {
        q: 'Does the riverfront humidity in the East End affect AC maintenance?',
        a: 'Yes. The East End sits right on the river in very humid air, so the system runs long to dehumidify. A spring tune-up that cleans the evaporator coil and clears the condensate drain keeps a riverfront home’s cooling efficient.',
      },
    ],
  },
  'north-fairmount': {
    intro:
      'AC maintenance in North Fairmount usually covers aging retrofitted equipment in early-1900s homes on west-facing slopes above the Mill Creek valley. Afternoon sun raises the load, and leaf and grass debris makes the condenser run hotter, so a spring tune-up clears the coil and checks the charge.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes. Cooling in those century-old houses is retrofitted, and that aging equipment stays efficient longest when its coils and contacts are cleaned and tested every year.',
      'Up on the hillside above the valley, North Fairmount’s homes get strong afternoon sun on their west-facing slopes, which pushes the cooling load on a hot day. A condenser already loaded with leaf and grass debris runs hotter still and uses more power. A spring tune-up clears the coil, checks the charge and capacitor, and swaps a clogged filter so an early-1900s system carries the extra sun load efficiently.',
    ],
    commonIntro:
      'In North Fairmount’s older hillside homes, the tune-up signs we see most often come from aging systems carrying a hillside sun load:',
    localFaqs: [
      {
        q: 'When should I service my AC in North Fairmount?',
        a: 'Spring is best. North Fairmount’s hillside homes take strong afternoon sun, so a tune-up in April or May that cleans the coil and checks the charge keeps an older system efficient before the heat sets in.',
      },
    ],
  },
  'evanston': {
    intro:
      'Evanston AC maintenance near Xavier mostly involves retrofitted systems in early-1900s homes and rentals under heavy use. Condensers sit close to neighbors and student-housing filters rarely get changed, so a spring tune-up clears the coils, replaces the filter and checks the charge.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing. Cooling in those older homes is retrofitted, and the rentals among them run under heavy use, so a yearly cleaning and inspection is what keeps a system efficient through a hard-used summer.',
      'In Evanston’s densely built blocks near Xavier, condensers sit close to neighbors and the filters in student housing rarely get changed, so coils and filters foul fast. A retrofitted system fighting a clogged coil on a hot day runs long and costs more. A spring tune-up clears the coils, replaces the filter, and checks the charge so an early-1900s home stays efficient through the cooling season.',
    ],
    commonIntro:
      'In Evanston’s early-1900s homes near Xavier, the tune-up signs we see most often come from hard-used systems with neglected filters:',
    localFaqs: [
      {
        q: 'Should an Evanston rental near Xavier get a yearly AC tune-up?',
        a: 'Yes. Rentals near Xavier run hard and the filters rarely get changed, so coils foul quickly. A spring tune-up that cleans the coil and swaps the filter keeps an older system efficient through a full summer.',
      },
    ],
  },
  'south-cumminsville': {
    intro:
      'South Cumminsville AC maintenance deals with dust and humidity in the Mill Creek valley. Grit from nearby industrial corridors settles into condenser coils on older homes, and the low ground holds summer moisture, so a spring tune-up cleans the coils, swaps the filter and checks the charge.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors. Cooling in those older houses is retrofitted, and a yearly cleaning keeps that aging equipment efficient against the dust and humidity of an industrial valley.',
      'Down in the Mill Creek valley among the industrial corridors, the air carries dust and grit that settle into condenser coils, and the low ground holds the summer humidity. A fouled coil can’t shed heat, so a retrofitted system runs long and uses more power. A spring tune-up cleans the coils, swaps a loaded filter, and checks the charge so an older home’s cooling stays efficient through the season.',
    ],
    commonIntro:
      'In South Cumminsville’s older valley homes, the tune-up signs we see most often come from coils fouled by valley dust and humidity:',
    localFaqs: [
      {
        q: 'Does the Mill Creek valley setting in South Cumminsville affect AC maintenance?',
        a: 'Yes. The industrial dust and valley humidity load condenser coils and make systems run long, so an annual spring tune-up to clean the fins and filter keeps an older home’s cooling efficient.',
      },
    ],
  },
  'english-woods': {
    intro:
      'On the English Woods hilltop, AC maintenance mostly covers aging retrofitted systems in older homes that catch strong afternoon sun. Leaf and grass debris makes a condenser run hotter on top of that, so a spring tune-up clears the coil, swaps a clogged filter and checks the charge.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years. Cooling in the older homes here is retrofitted, and a yearly cleaning and inspection keeps that aging equipment efficient on an exposed hilltop.',
      'Sitting up on the hilltop above the valley, English Woods homes catch strong afternoon sun and open exposure, which raises the cooling load on a hot day. A condenser loaded with leaf and grass debris runs hotter still and drives up the bill. A spring tune-up clears the coil, checks the charge, and swaps a clogged filter so an older system carries the hilltop sun load efficiently through summer.',
    ],
    commonIntro:
      'In English Woods’ older hilltop homes, the tune-up signs we see most often come from systems carrying an exposed hilltop sun load:',
    localFaqs: [
      {
        q: 'When is the best time for an AC tune-up in English Woods?',
        a: 'Spring is ideal. English Woods’ exposed hilltop homes take strong afternoon sun, so a tune-up in April or May that cleans the coil and checks the charge keeps an older system efficient before the heat.',
      },
    ],
  },
  'north-avondale': {
    intro:
      'Each North Avondale AC tune-up we do tends to involve a large system cooling a grand early-1900s home on a tree-shaded lot near Rockdale Avenue. Leaves, pollen and seed pods pack the condenser fins all summer, so a spring tune-up clears them, checks the charge and swaps the filter.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue. Those big century-old houses run on cooling that was added later, and a system asked to cool a large older home stays efficient only with a yearly cleaning and inspection.',
      'North Avondale’s defining feature — its mature tree canopy over large lots — is also what loads its condenser coils. Falling leaves, pollen, and seed pods pack the fins all summer, and on a grand home that already takes a lot to cool, a choked coil pushes the electric bill higher. A spring tune-up clears the fins, checks the refrigerant charge, and swaps a loaded filter so the system carries a big home through the season efficiently.',
    ],
    commonIntro:
      'In North Avondale’s grand early-1900s homes, the tune-up signs we see most often come from large systems on shaded, leafy lots:',
    localFaqs: [
      {
        q: 'Do the trees in North Avondale affect how often my AC needs servicing?',
        a: 'Yes. North Avondale’s mature canopy drops leaves and seed pods into condenser coils all summer, so an annual spring tune-up to clean the fins and filter keeps a large older home’s system running efficiently.',
      },
    ],
  },
  'millvale': {
    intro:
      'Millvale sits on low ground in the Mill Creek valley, and AC maintenance here means retrofitted systems running long cycles to keep older homes dry. A clogged evaporator coil and filter cost moisture control, so a spring tune-up cleans the coils, clears the condensate drain and checks the charge.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community. Cooling in the older homes here is retrofitted, and a yearly cleaning keeps that aging equipment efficient in a low, humid valley setting.',
      'Down on the low valley ground, Millvale holds the summer humidity, so a retrofitted system runs long cycles to keep an older home’s air dry. When the evaporator coil and filter clog, the system loses its grip on the moisture and burns more power. A spring tune-up cleans the coils, clears the condensate drain, and checks the charge so the cooling stays efficient through a muggy valley summer.',
    ],
    commonIntro:
      'In Millvale’s valley homes, the tune-up signs we see most often come from systems working a low, humid valley:',
    localFaqs: [
      {
        q: 'Why does AC maintenance matter in Millvale’s valley setting?',
        a: 'The low Mill Creek valley ground holds summer humidity, so an older home’s system runs long to remove moisture. A spring tune-up that cleans the evaporator coil and clears the condensate drain keeps that dehumidifying efficient.',
      },
    ],
  },
  'paddock-hills': {
    intro:
      'Paddock Hills homes beside the Norwood Lateral take road dust and traffic grit, and that shapes AC maintenance here. Retrofitted systems in early- and mid-1900s houses also collect grass and leaves, so a spring tune-up clears the coil, checks the capacitor and charge and swaps the filter.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes. Cooling across that older housing was retrofitted in, and a yearly cleaning and test keeps that aging equipment efficient instead of failing in a heat wave.',
      'Sitting beside the Norwood Lateral, Paddock Hills homes take road dust and traffic grit that settle into condenser coils, while the well-kept lots shed grass and leaves into the fins each summer. A coil that can’t shed heat makes an older system run long and cost more. A spring tune-up clears the coil, checks the charge and capacitor, and swaps a clogged filter so an early- or mid-1900s system stays efficient through the season.',
    ],
    commonIntro:
      'In Paddock Hills’ early- and mid-1900s homes, the tune-up signs we see most often come from aging systems that need yearly cleaning to stay efficient:',
    localFaqs: [
      {
        q: 'When should I schedule an AC tune-up in Paddock Hills?',
        a: 'Spring, before the heat arrives. Servicing a Paddock Hills system in April or May clears road and lawn debris from the coil and checks the charge so an older unit stays efficient through summer.',
      },
    ],
  },
  'spring-grove-village': {
    intro:
      'AC maintenance in Spring Grove Village deals with heavy tree cover. The wooded arboretum grounds drop leaves, pollen and seed fluff into condenser coils on older homes all summer, and valley ground holds humidity, so a spring tune-up clears the fins, swaps the filter and checks the charge.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest cemeteries in the country, with a mix of older homes and industry. Cooling in the older homes is retrofitted, and a yearly cleaning keeps that aging equipment efficient against valley humidity and the heavy tree cover of the arboretum.',
      'The vast wooded grounds of the Spring Grove Arboretum mean homes here sit under heavy tree cover that drops leaves, pollen, and seed fluff into condenser coils all summer, while the valley ground holds the humidity. A choked coil makes a retrofitted system run long and use more power. A spring tune-up clears the fins, swaps a loaded filter, and checks the charge so an older home’s cooling stays efficient through the season.',
    ],
    commonIntro:
      'In Spring Grove Village’s older valley homes, the tune-up signs we see most often come from coils fouled by heavy tree cover and valley humidity:',
    localFaqs: [
      {
        q: 'Does the tree cover near Spring Grove affect AC maintenance?',
        a: 'Yes. The arboretum’s heavy canopy drops leaves and seed fluff into condenser coils all summer, so an annual spring tune-up to clean the fins and filter keeps an older home’s system running efficiently.',
      },
    ],
  },
  'linwood': {
    intro:
      'Linwood AC maintenance mostly involves retrofitted systems in older homes in the humid river bottoms near Lunken Airport. Air conditioners run long cycles here, and a clogged coil and filter cost moisture control, so a spring tune-up cleans the coils, clears the drain and checks the charge.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms. Cooling in the older homes here is retrofitted, and the low, humid riverside setting makes a yearly cleaning and inspection key to keeping any system efficient.',
      'Down in the river bottoms near Lunken, Linwood sits in humid riverside air, so an AC runs long cycles to keep an older home dry. When the evaporator coil and filter clog, the system loses its grip on the moisture and burns more power. A spring tune-up cleans the coils, clears the condensate drain, and checks the charge so the cooling handles the riverside humidity efficiently.',
    ],
    commonIntro:
      'In Linwood’s older riverside homes, the tune-up signs we see most often come from systems fighting low, humid river-bottom air:',
    localFaqs: [
      {
        q: 'Does the river-bottom setting near Lunken affect AC maintenance in Linwood?',
        a: 'Yes. Linwood’s low riverside air is humid, so the system runs long to dehumidify. A spring tune-up that cleans the evaporator coil and clears the condensate drain keeps an older home’s cooling efficient.',
      },
    ],
  },
  'bond-hill': {
    intro:
      'In Bond Hill, an AC tune-up usually covers aging retrofitted equipment in early-1900s and mid-century homes along Reading Road. Mature trees and broad lawns load condenser coils with leaves, pollen and clippings, so we clear the fins, check the charge and capacitor and swap the filter.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes. Cooling across that older housing was retrofitted in over the years, and a yearly cleaning and test keeps that aging equipment efficient rather than failing in the first heat wave.',
      'Bond Hill’s established streets have filled in with mature trees and broad lawns over the decades, and the falling leaves, pollen, and grass clippings load condenser coils each summer. A coil that can’t shed heat makes a tired system run long and cost more. A spring tune-up clears the fins, checks the charge and capacitor, and swaps a clogged filter so an early-1900s or mid-century system stays efficient through the season.',
    ],
    commonIntro:
      'Across Bond Hill’s older and mid-century homes, the tune-up signs we see most often come from aging systems on established, leafy lots:',
    localFaqs: [
      {
        q: 'When is the best time for an AC tune-up in Bond Hill?',
        a: 'Spring is best. Servicing a Bond Hill system in April or May clears the prior season’s leaf and grass debris from the coil and checks the charge so an older unit stays efficient through summer.',
      },
    ],
  },
};
