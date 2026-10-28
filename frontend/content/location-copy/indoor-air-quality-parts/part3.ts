export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro: 'Air quality at Villages of Roll Hill is mostly an apartment problem: shared ductwork and tight floor plans move dust, cooking odors and allergens between units, and a single return recirculates the same air. We test your unit first, then add filtration or a purifier at the apartment level.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings. In densely built multi-unit housing, shared ductwork and tight floor plans can move dust, cooking odors, and allergens from one unit toward the next, and apartments often rely on a single return that recirculates the same air without much fresh-air exchange.',
      'Its perch above the Mill Creek valley also means humid summer air settling into lower-level units, which can feed dust mites and a musty smell if ventilation is weak. We test each unit first for particulates and humidity so any filter upgrade, purifier, or dehumidifier we recommend fits the building rather than a guess.',
    ],
    commonIntro: 'In the multi-unit buildings of Roll Hill, the air-quality issues we see most often trace back to shared returns and limited fresh-air exchange:',
    localFaqs: [
      { q: 'Can you improve air quality in a Roll Hill apartment without redoing the whole building system?', a: 'Yes. We test the unit first, then add filtration or a portable purifier and address humidity at the apartment level, so you get cleaner air without touching the shared building system.' },
    ],
  },
  'east-westwood': {
    intro: 'Damp lower levels and old ductwork are the usual air quality problems in East Westwood, where homes on the slopes above the Mill Creek valley keep original ducts that circulate settled dust. We test first. Then we size filtration, a dehumidifier or ventilation to the readings.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes. Houses of that age often keep their original ductwork, where decades of settled dust and undersized returns let particulates circulate instead of getting filtered out.',
      'The hillside grade also tends to leave lower levels damp, and humid summer air rolling up from the Mill Creek valley can push basement humidity high enough to feed mold and dust mites. We test for both particulates and moisture so a filter upgrade or whole-home dehumidifier addresses what is actually happening, not a hunch.',
    ],
    commonIntro: 'In East Westwood’s older homes, the air-quality issues we handle most often come from aging ductwork and damp lower levels:',
    localFaqs: [
      { q: 'My East Westwood basement smells musty in summer — what helps?', a: 'A musty basement near the Mill Creek valley usually points to high humidity. We test the moisture level first, then size a dehumidifier or ventilation fix to the readings rather than guessing.' },
    ],
  },
  'western-hills': {
    intro: 'Dust that keeps coming back is the air quality complaint we hear most from longtime Western Hills owners near Glenway Avenue. Original ductwork and basic return filters let fine dust recirculate. We test the air and check the ducts, then fit a higher-grade filter, sealed returns or both.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes. In houses that span that range, the original ductwork and basic return-air filters tend to let fine dust recirculate, which is the complaint we hear most from longtime owners here.',
      'Greater Cincinnati’s humid summers and dry, furnace-heated winters mean the same Western Hills home can swing from sticky and dust-mite-prone in July to dry and staticky in January. We test for both particulates and humidity so any filtration upgrade or HVAC-integrated humidifier we suggest fits the season-to-season swing instead of one problem at a time.',
    ],
    commonIntro: 'Across Western Hills’ older and mid-century homes, the air-quality issues we see most often are recirculated dust and seasonal humidity swings:',
    localFaqs: [
      { q: 'Will a better filter fix the dust in my Western Hills home?', a: 'Sometimes, but not always. We test the air and check the ductwork first, because in older Glenway-area homes the fix can be a higher-grade filter, sealed returns, or both — the test tells us which.' },
    ],
  },
  'california': {
    intro: 'River humidity is the air quality issue in California, where homes along Kellogg Avenue sit on low ground beside the Ohio and damp air pushes basement humidity high enough to feed mold and dust mites. We start with a moisture test, then fit a whole-home dehumidifier or ventilation fix.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River. That low riverside position keeps the ground and lower levels damp, and humid air settling off the river can push basement humidity high enough to feed mold growth and dust mites.',
      'The older homes here add aging ductwork to the picture, which spreads that damp, dusty air through the house instead of filtering it. We test humidity and particulate levels first so a whole-home dehumidifier, filtration upgrade, or ventilation fix is sized to a riverfront home along Kellogg Avenue rather than a standard suburban house.',
    ],
    commonIntro: 'Along California’s riverfront homes, the air-quality issues we handle most often are river-fed humidity and the musty, dusty air it creates:',
    localFaqs: [
      { q: 'My California home near the river stays humid — can you help the air feel less heavy?', a: 'Yes. Riverfront homes off Kellogg Avenue often hold extra moisture. We test the humidity level first, then size a whole-home dehumidifier or ventilation fix to bring it into a healthy range.' },
    ],
  },
  'carthage': {
    intro: 'Carthage’s early-1900s homes near the Hamilton County Fairgrounds tend to have air quality problems from original ductwork, where a century of dust keeps circulating, and tight construction with little fresh-air exchange. We test the air and inspect the ducts first, then fit filtration or sealing.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes. Houses that old usually still run their original ductwork, where a century of settled dust and undersized returns let particulates keep circulating rather than getting trapped.',
      'Those early-1900s homes also tend to be tightly built with limited fresh-air exchange, so cooking odors, dust, and dry winter air linger longer than they should. We test for particulates and humidity first so any filter upgrade, purifier, or HVAC-integrated humidifier fits an older Vine Street home rather than a one-size recommendation.',
    ],
    commonIntro: 'In Carthage’s older homes, the air-quality issues we see most often come from aging ductwork and weak fresh-air exchange:',
    localFaqs: [
      { q: 'Can old ductwork be the reason my Carthage home is always dusty?', a: 'Often, yes. Original ductwork in early-1900s homes near Vine Street collects and recirculates dust. We test the air and inspect the ducts first, then recommend filtration or sealing based on what we find.' },
    ],
  },
  'winton-hills': {
    intro: 'Shared ductwork shapes air quality in Winton Hills multi-unit buildings near Winton Road, where a single return can pass dust, cooking odors and allergens between units, with industrial areas close by. We test your unit first, then fit filtration, a purifier or better fresh-air exchange.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing. In densely built multi-unit buildings, shared ductwork and a single return can recirculate dust, cooking odors, and allergens between units instead of filtering and exchanging the air.',
      'The mix of older buildings near industrial areas means weak fresh-air exchange and aging filters are common complaints here. We test each space for particulates and humidity first so a filter upgrade, purifier, or ventilation improvement fits the building rather than a guess about the whole area.',
    ],
    commonIntro: 'In Winton Hills’ homes and multi-unit buildings, the air-quality issues we handle most often are recirculated dust and limited ventilation:',
    localFaqs: [
      { q: 'How do you improve air quality in a Winton Hills apartment near Winton Road?', a: 'We test the unit first for dust and humidity, then add filtration or a purifier and improve fresh-air exchange where the readings call for it, so the fix matches your actual air rather than the whole building.' },
    ],
  },
  'roselawn': {
    intro: 'Recirculated dust and dry winter air are the usual air quality complaints in Roselawn’s mid-century homes and apartments along Reading Road, which keep original ductwork and basic filters. We test the air first. Then we size filtration or an HVAC-integrated humidifier to the readings.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings. Mid-1900s homes typically keep their original ductwork and basic filters, which lets fine dust recirculate, while older apartment buildings often share returns that move odors and allergens between units.',
      'Greater Cincinnati’s dry, furnace-heated winters leave many of these Reading Road homes feeling parched and staticky by January, while humid summers can push indoor moisture the other way. We test for particulates and humidity first so a filter upgrade or HVAC-integrated humidifier matches the home’s real season-to-season swing.',
    ],
    commonIntro: 'Across Roselawn’s mid-century homes and apartments, the air-quality issues we see most often are recirculated dust and dry winter air:',
    localFaqs: [
      { q: 'Why is the air in my Roselawn home so dry in winter?', a: 'Furnace heat strips moisture out of mid-century homes along Reading Road. We test the humidity level first, then size an HVAC-integrated humidifier so the air stays comfortable without overcorrecting.' },
    ],
  },
  'mount-airy': {
    intro: 'Homes beside Mount Airy Forest have an air quality challenge most neighborhoods do not: more pollen and outdoor allergens than a basic furnace filter can catch, on top of dust from mid-century ductwork. We test the air first, then fit a higher-grade filter or whole-home purifier sized to it.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets. The heavy tree cover means more pollen and outdoor allergens making their way indoors, which a basic furnace filter rarely catches.',
      'Those mid-century homes carry original ductwork that recirculates that pollen and dust, and the hilly, wooded lots tend to keep lower levels damp through humid summers. We test for particulates and humidity first so a filtration upgrade, purifier, or dehumidifier fits a wooded Mount Airy home rather than a generic suburban one.',
    ],
    commonIntro: 'Across Mount Airy’s mid-century homes near the forest, the air-quality issues we handle most often are pollen, recirculated dust, and damp lower levels:',
    localFaqs: [
      { q: 'Living near Mount Airy Forest means a lot of pollen — what helps indoors?', a: 'A higher-grade filter or whole-home purifier can capture the pollen that drifts in from the forest. We test the air first so we match the filtration level to how much is actually getting inside.' },
    ],
  },
  'hartwell': {
    intro: 'Hartwell’s Victorian and early-1900s homes often have air quality problems from original ductwork that keeps settled dust moving, and those tightly built houses run dry in winter. Our work in this old streetcar suburb starts with a test. Then we fit filtration or an HVAC-integrated humidifier.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets. Homes that old often still run their original ductwork, where decades of settled dust and undersized returns keep particulates circulating instead of trapping them.',
      'Those century-old homes also tend to be tightly built with limited fresh-air exchange, and Greater Cincinnati’s furnace-heated winters leave them feeling especially dry. We test for particulates and humidity first so a filter upgrade or HVAC-integrated humidifier fits a Victorian Hartwell home rather than a modern build.',
    ],
    commonIntro: 'In Hartwell’s Victorian and early-1900s homes, the air-quality issues we see most often are recirculated dust and dry winter air:',
    localFaqs: [
      { q: 'Can you add a humidifier to a historic Hartwell home without major work?', a: 'Usually, yes. We test the winter humidity level first, then fit an HVAC-integrated humidifier to the existing system so a Victorian-era home stays comfortable without invasive changes.' },
    ],
  },
  'kennedy-heights': {
    intro: 'Long runs of original ductwork are behind most air quality complaints in Kennedy Heights’ big early-1900s homes, holding and recirculating dust a single filter cannot catch, while the tree-lined hilltop adds pollen. We test the air and inspect the ducts, then fit the right level of filtration.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes. Big homes of that age carry long runs of original ductwork, where settled dust and undersized returns keep fine particulates moving through the house.',
      'The hilltop setting and tree-lined streets bring outdoor pollen indoors, while furnace-heated winters dry the air inside these large rooms. We test for particulates and humidity first so a filtration upgrade, purifier, or humidifier is sized to a large early-1900s home rather than a smaller, newer one.',
    ],
    commonIntro: 'In Kennedy Heights’ historic homes, the air-quality issues we handle most often are recirculated dust, pollen, and dry winter air:',
    localFaqs: [
      { q: 'Why does my large Kennedy Heights home still feel dusty after I change the filter?', a: 'In big early-1900s homes, long original duct runs hold and recirculate dust a single filter cannot catch. We test the air and inspect the ducts first, then recommend the right filtration level.' },
    ],
  },
  'st-bernard': {
    intro: 'St. Bernard air quality suffers in its dense early-1900s homes on small valley lots, which usually keep original ductwork that recirculates dust and get limited fresh-air exchange on the tight grid near Ivorydale. We test first, then fit filtration and ventilation matched to the readings.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes. Homes that old on small valley lots usually keep their original ductwork, where settled dust and undersized returns recirculate particulates instead of filtering them out.',
      'The tightly packed grid and proximity to the Ivorydale industrial area mean limited fresh-air exchange and more outdoor particulates working their way indoors. We test for particulates and humidity first so a filter upgrade, purifier, or ventilation improvement fits a dense early-1900s St. Bernard home rather than a guess.',
    ],
    commonIntro: 'In St. Bernard’s dense, early-1900s homes, the air-quality issues we see most often are recirculated dust and weak fresh-air exchange:',
    localFaqs: [
      { q: 'Does living near the Ivorydale area affect my St. Bernard home’s air?', a: 'It can mean more outdoor particulates working indoors. We test the air inside the home first, then match filtration and ventilation to what the readings actually show rather than assuming.' },
    ],
  },
  'elmwood-place': {
    intro: 'Valley humidity is the main air quality problem in Elmwood Place, which sits low in the Mill Creek valley where damp basements and humid summer air can feed mold and dust mites. Old ductwork spreads it. We start with a moisture test, then fit a dehumidifier or ventilation fix.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes. The low valley ground keeps basements damp, and humid summer air settling into the valley can push indoor humidity high enough to feed mold and dust mites.',
      'Those closely spaced, century-old homes run on original ductwork that spreads that damp, dusty air rather than filtering it, and tight construction limits fresh-air exchange. We test humidity and particulate levels first so a whole-home dehumidifier or filtration upgrade is sized to a Mill Creek valley home rather than a hilltop one.',
    ],
    commonIntro: 'In Elmwood Place’s dense valley homes, the air-quality issues we handle most often are valley humidity and the musty, dusty air it creates:',
    localFaqs: [
      { q: 'My Elmwood Place basement is damp and the air smells musty — what helps?', a: 'A musty smell in the Mill Creek valley usually means high humidity. We test the moisture level first, then size a dehumidifier or ventilation fix to bring a valley home into a healthy range.' },
    ],
  },
  'delhi-hills': {
    intro: 'Delhi Hills air quality shifts with the seasons. Mid-century homes on its hilly streets keep original ductwork and basic filters that let dust recirculate, lower levels stay damp in summer and winters run dry. We test humidity in both seasons, then size equipment to the readings.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River, an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets. Homes of that era keep their original ductwork and basic filters, which lets fine dust recirculate through the house.',
      'The hillside grade above the river tends to leave lower levels damp through humid summers, while furnace-heated winters dry the air inside. We test for particulates and humidity first so a filtration upgrade, dehumidifier, or HVAC-integrated humidifier fits a hillside Delhi Hills home rather than a flatland build.',
    ],
    commonIntro: 'Across Delhi Hills’ mid-century homes, the air-quality issues we see most often are recirculated dust and seasonal humidity swings:',
    localFaqs: [
      { q: 'My Delhi Hills home feels damp downstairs in summer and dry upstairs in winter — is that normal?', a: 'It is common in hillside mid-century homes. We test humidity in both seasons first, then pair a dehumidifier for summer with a humidifier for winter only where the readings call for it.' },
    ],
  },
  'golf-manor': {
    intro: 'Air quality complaints in Golf Manor’s modest mid-century homes usually involve original ductwork with basic return filters that let fine dust recirculate, plus dry, staticky air in winter. We test first, then size filtration or a humidifier to the home.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes. Homes of that size and era usually run their original ductwork with basic return filters, which lets fine dust recirculate rather than getting trapped.',
      'Greater Cincinnati’s furnace-heated winters leave these smaller homes feeling especially dry and staticky, while humid summers swing the other way. We test for particulates and humidity first so a filter upgrade or HVAC-integrated humidifier fits a modest Golf Manor home rather than a larger house.',
    ],
    commonIntro: 'In Golf Manor’s mid-century homes, the air-quality issues we handle most often are recirculated dust and dry winter air:',
    localFaqs: [
      { q: 'Is a whole-home humidifier worth it in a small Golf Manor home?', a: 'It can be, if winters leave the air dry and staticky. We test the humidity level first and size the humidifier to the home, so a modest house gets the right amount without overdoing it.' },
    ],
  },
  'fairfax': {
    intro: 'Fairfax homes along Wooster Pike from the early and mid-1900s tend to have air quality problems from original ductwork and basic filters, so fine dust recirculates and cooking odors linger. We test the air and check the ducts, then size a filter or purifier to the house.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. Houses spanning that range tend to keep their original ductwork and basic filters, which lets fine dust recirculate instead of trapping it.',
      'Those older homes are often tightly built with limited fresh-air exchange, so cooking odors and dust linger and furnace-heated winters leave the air dry. We test for particulates and humidity first so a filter upgrade, purifier, or HVAC-integrated humidifier fits an older Wooster Pike home rather than a generic recommendation.',
    ],
    commonIntro: 'In Fairfax’s older homes, the air-quality issues we see most often are recirculated dust and dry winter air:',
    localFaqs: [
      { q: 'How do I get cleaner air in an older Fairfax home near Mariemont?', a: 'We test the air and check the ductwork first, then recommend a higher-grade filter or purifier sized to an older Wooster Pike home, rather than a one-size upgrade.' },
    ],
  },
  'mack': {
    intro: 'Mack air quality problems differ by house age in this Green Township community. Mid-century homes have original ducts that recirculate dust, and newer ones are sealed tight enough to trap odors and moisture. We test first, then add filtration, ventilation or humidity control where needed.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes. Even newer homes here are now old enough for ductwork and filters to need attention, while mid-century houses keep original ducts that recirculate fine dust.',
      'Greater Cincinnati’s humid summers and dry, furnace-heated winters mean a Mack home can swing from sticky to parched over the year. We test for particulates and humidity first so a filtration upgrade, dehumidifier, or HVAC-integrated humidifier fits the home’s age and the season-to-season swing.',
    ],
    commonIntro: 'Across Mack’s mid-century and newer homes, the air-quality issues we handle most often are recirculated dust and seasonal humidity swings:',
    localFaqs: [
      { q: 'My Mack home is newer — do I still need anything for air quality?', a: 'Possibly. Newer Green Township homes are often tightly sealed, which traps odors and moisture. We test the air first, then add filtration or ventilation only where the readings call for it.' },
    ],
  },
  'monfort-heights': {
    intro: 'Most air quality complaints in Monfort Heights come from mid-century houses with original ductwork and basic filters that let fine dust recirculate, plus furnace-heated winters that leave the air dry and staticky. We test the air and ducts first, then fit the right filtration level.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes. Homes from the mid-1900s usually keep their original ductwork and basic filters, which lets fine dust recirculate rather than trapping it.',
      'Furnace-heated winters leave these homes feeling dry and staticky, while humid summers push indoor moisture the other way. We test for particulates and humidity first so a filtration upgrade or HVAC-integrated humidifier fits a mid-century Monfort Heights home rather than a generic suburban build.',
    ],
    commonIntro: 'Across Monfort Heights’ mid-century homes, the air-quality issues we see most often are recirculated dust and dry winter air:',
    localFaqs: [
      { q: 'Why is the air in my Monfort Heights home so dusty?', a: 'Original ductwork in mid-century Green Township homes collects and recirculates dust a basic filter misses. We test the air and inspect the ducts first, then recommend the right filtration level.' },
    ],
  },
  'bridgetown': {
    intro: 'Indoor air quality in Bridgetown often needs two fixes at different times of year. Humid summers and dry winters swing the moisture level, mid-century ductwork recirculates dust and newer sealed homes trap odors. We test humidity across the seasons first, then size the equipment for each.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes. Mid-century houses keep original ductwork that recirculates fine dust, while newer, tightly sealed homes can trap odors and moisture without enough fresh-air exchange.',
      'Greater Cincinnati’s humid summers and dry winters mean a Bridgetown home can feel sticky in July and parched in January. We test for particulates and humidity first so a filtration upgrade, dehumidifier, or HVAC-integrated humidifier fits the home’s age and seasonal swing rather than a single fix.',
    ],
    commonIntro: 'Across Bridgetown’s homes, the air-quality issues we handle most often are recirculated dust and seasonal humidity swings:',
    localFaqs: [
      { q: 'How do I know whether my Bridgetown home needs a humidifier or a dehumidifier?', a: 'It often needs both at different times of year. We test humidity across the seasons first, then size the right equipment for summer moisture and winter dryness in a Green Township home.' },
    ],
  },
  'finneytown': {
    intro: 'Finneytown is mostly mid-century homes in Springfield Township, and their air quality suffers from original ductwork and basic filters that let dust recirculate, with moisture swinging from dry winters to humid summers. We test first, then fit a higher-grade filter, duct sealing or humidity control.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes. Homes of that era keep their original ductwork and basic filters, which lets fine dust recirculate through the house instead of trapping it.',
      'Furnace-heated winters leave these homes dry and staticky, while humid summers swing indoor moisture the other way. We test for particulates and humidity first so a filtration upgrade or HVAC-integrated humidifier fits a mid-century Finneytown home rather than a generic recommendation.',
    ],
    commonIntro: 'Across Finneytown’s mid-century homes, the air-quality issues we handle most often are recirculated dust and dry winter air:',
    localFaqs: [
      { q: 'Can you reduce the dust in my Finneytown home?', a: 'Usually, yes. Original ductwork in mid-century Springfield Township homes recirculates dust a basic filter misses. We test the air first, then recommend a higher-grade filter or sealing where it helps.' },
    ],
  },
  'amberley': {
    intro: 'Air quality in Amberley Village’s large homes on wooded lots is uneven: more pollen than a basic filter can handle, and long duct runs that filter and circulate air differently from room to room. We test room by room, then size whole-home filtration to even it out.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets. The heavy tree cover means more pollen and outdoor allergens drifting indoors, which a basic furnace filter rarely captures across a large home.',
      'Larger homes also mean longer duct runs and bigger air systems, where settled dust and uneven filtration can leave some rooms dustier than others. We test for particulates and humidity first so a whole-home filtration system, purifier, or humidifier is sized to a large wooded-lot Amberley home rather than a smaller house.',
    ],
    commonIntro: 'In Amberley’s large homes, the air-quality issues we see most often are pollen from the wooded lots and dust spread through long duct runs:',
    localFaqs: [
      { q: 'My large Amberley home is dustier in some rooms than others — why?', a: 'Long duct runs in big wooded-lot homes filter and circulate air unevenly. We test the air room by room first, then size whole-home filtration to even it out rather than treating one room at a time.' },
    ],
  },
  'arlington-heights': {
    intro: 'Arlington Heights sits on low Mill Creek valley ground, so air quality in its older homes suffers from damp basements and humidity the AC alone may not pull down, which feeds mold. We start with a humidity test, then fit a dehumidifier sized to the house.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes. The low valley ground keeps basements damp, and humid summer air settling into the valley can push indoor humidity high enough to feed mold and dust mites.',
      'Those older homes run on aging ductwork that spreads damp, dusty air rather than filtering it, with limited fresh-air exchange. We test humidity and particulate levels first so a whole-home dehumidifier or filtration upgrade is sized to a Mill Creek valley home rather than higher, drier ground.',
    ],
    commonIntro: 'In Arlington Heights’ older valley homes, the air-quality issues we handle most often are valley humidity and the musty air it creates:',
    localFaqs: [
      { q: 'Why does my Arlington Heights home feel humid even with the AC running?', a: 'Valley homes hold extra moisture the AC alone may not pull down. We test the humidity level first, then size a dehumidifier to handle what the air conditioner leaves behind.' },
    ],
  },
  'north-college-hill': {
    intro: 'Stuffy air is the usual air quality complaint in North College Hill’s tightly packed early- and mid-1900s homes, which keep original ductwork that recirculates dust on a dense grid with little fresh-air exchange. We test first, then improve ventilation and filtration to match.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes. Homes of that age on small lots usually keep their original ductwork, where settled dust and undersized returns recirculate particulates instead of trapping them.',
      'The tightly packed grid means limited fresh-air exchange, so cooking odors, dust, and dry winter air linger longer than they should. We test for particulates and humidity first so a filter upgrade, purifier, or ventilation improvement fits a dense North College Hill home rather than a guess.',
    ],
    commonIntro: 'In North College Hill’s older homes, the air-quality issues we see most often are recirculated dust and weak fresh-air exchange:',
    localFaqs: [
      { q: 'My North College Hill home always feels stuffy — what can help?', a: 'Stuffiness in a tightly built older home usually means weak fresh-air exchange. We test the air first, then improve ventilation and filtration based on what the readings show.' },
    ],
  },
  'newtown': {
    intro: 'Older Newtown homes on low river-bottom ground near the Little Miami River stay damp, and that is the main air quality problem there: humid air can push indoor humidity high enough to feed mold and dust mites. We start with a moisture test, then fit a dehumidifier or ventilation fix.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground. That low ground keeps basements and lower levels damp, and humid air off the river can push indoor humidity high enough to feed mold and dust mites.',
      'The older homes here add aging ductwork that spreads that damp, dusty air rather than filtering it. We test humidity and particulate levels first so a whole-home dehumidifier, filtration upgrade, or ventilation fix is sized to a low-lying river-bottom Newtown home rather than higher ground.',
    ],
    commonIntro: 'In Newtown’s older homes near the Little Miami, the air-quality issues we handle most often are river-fed humidity and the musty air it creates:',
    localFaqs: [
      { q: 'My Newtown home near the river stays damp — can you help the air?', a: 'Yes. River-bottom homes hold extra moisture. We test the humidity level first, then size a dehumidifier or ventilation fix to bring a low-lying Newtown home into a healthy range.' },
    ],
  },
  'turpin-hills': {
    intro: 'Turpin Hills, in Anderson Township, has two kinds of air quality problem: mid-century homes whose original ductwork recirculates dust, and newer homes sealed tight enough to trap moisture and odors. Seasonal swings affect both. We test first, then fit ventilation, filtration or humidity control.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. Mid-century houses keep original ductwork that recirculates fine dust, while newer, tightly sealed homes can trap odors and moisture without enough fresh-air exchange.',
      'Greater Cincinnati’s humid summers and dry, furnace-heated winters mean a Turpin Hills home can feel sticky in July and parched in January. We test for particulates and humidity first so a filtration upgrade, dehumidifier, or HVAC-integrated humidifier fits the home’s age and seasonal swing.',
    ],
    commonIntro: 'Across Turpin Hills’ homes, the air-quality issues we see most often are recirculated dust and seasonal humidity swings:',
    localFaqs: [
      { q: 'Does my newer Turpin Hills home need anything for air quality?', a: 'It might. Newer Anderson Township homes are often tightly sealed, which traps moisture and odors. We test the air first, then add ventilation or filtration only where the readings call for it.' },
    ],
  },
  'silverton': {
    intro: 'Silverton’s early- and mid-1900s homes along Montgomery Road usually have air quality problems from original ductwork and basic filters that let dust recirculate, and tight construction plus furnace heat leaves winter air dry. We test the air first, then fit a filter or purifier sized to the house.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes. Houses spanning that range usually keep their original ductwork and basic filters, which lets fine dust recirculate rather than trapping it.',
      'Those older homes tend to be tightly built with limited fresh-air exchange, and furnace-heated winters leave the air dry. We test for particulates and humidity first so a filter upgrade, purifier, or HVAC-integrated humidifier fits an older Montgomery Road home rather than a generic build.',
    ],
    commonIntro: 'In Silverton’s older homes, the air-quality issues we handle most often are recirculated dust and dry winter air:',
    localFaqs: [
      { q: 'How do I get cleaner air in an older Silverton home?', a: 'We test the air and check the ductwork first, then recommend a higher-grade filter or purifier sized to an older Montgomery Road home rather than a one-size upgrade.' },
    ],
  },
  'lockland': {
    intro: 'Lockland’s closely spaced old worker housing sits low in the Mill Creek valley, so its air quality suffers from damp basements and humid summer air that feed mold and dust mites, spread by aging ductwork. We start with a moisture test, then fit a dehumidifier or ventilation fix.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing. The low valley ground keeps basements damp, and humid summer air settling into the valley can push indoor humidity high enough to feed mold and dust mites.',
      'That closely spaced, older worker housing runs on aging ductwork that spreads damp, dusty air rather than filtering it, with limited fresh-air exchange. We test humidity and particulate levels first so a whole-home dehumidifier or filtration upgrade is sized to a Mill Creek valley home rather than higher, drier ground.',
    ],
    commonIntro: 'In Lockland’s older valley homes, the air-quality issues we see most often are valley humidity and the musty, dusty air it creates:',
    localFaqs: [
      { q: 'My Lockland basement smells musty — what helps?', a: 'A musty basement in the Mill Creek valley usually points to high humidity. We test the moisture level first, then size a dehumidifier or ventilation fix to bring an older valley home into a healthy range.' },
    ],
  },
  'groesbeck': {
    intro: 'Groesbeck air quality problems are typical of mid-century homes in Colerain Township: original ductwork and basic filters that let dust recirculate, and furnace heat that strips moisture out every winter. We test the air and humidity first, then fit filtration or an HVAC-integrated humidifier.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. Homes of that era keep their original ductwork and basic filters, which lets fine dust recirculate through the house rather than trapping it.',
      'Furnace-heated winters leave these homes dry and staticky, while humid summers swing indoor moisture the other way. We test for particulates and humidity first so a filtration upgrade or HVAC-integrated humidifier fits a mid-century Groesbeck home rather than a generic recommendation.',
    ],
    commonIntro: 'Across Groesbeck’s mid-century homes, the air-quality issues we handle most often are recirculated dust and dry winter air:',
    localFaqs: [
      { q: 'Why is the air in my Groesbeck home so dry in winter?', a: 'Furnace heat strips moisture out of mid-century Colerain Township homes. We test the humidity level first, then size an HVAC-integrated humidifier so the air stays comfortable without overcorrecting.' },
    ],
  },
  'mount-healthy': {
    intro: 'Older homes around Mount Healthy’s old town center usually have air quality problems from original ductwork that recirculates fine dust, and they tend to be tightly built with limited fresh-air exchange. Our work in this small city starts with a test, then filtration or duct sealing.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes. Houses spanning that range usually keep their original ductwork, where settled dust and undersized returns recirculate fine particulates instead of trapping them.',
      'Those older homes tend to be tightly built with limited fresh-air exchange, so cooking odors, dust, and dry winter air linger longer than they should. We test for particulates and humidity first so a filter upgrade, purifier, or HVAC-integrated humidifier fits an older Mount Healthy home rather than a guess.',
    ],
    commonIntro: 'In Mount Healthy’s older homes, the air-quality issues we see most often are recirculated dust and weak fresh-air exchange:',
    localFaqs: [
      { q: 'Can old ductwork be why my Mount Healthy home is always dusty?', a: 'Often, yes. Original ductwork in older north-side homes collects and recirculates dust. We test the air and inspect the ducts first, then recommend filtration or sealing based on what we find.' },
    ],
  },
};
