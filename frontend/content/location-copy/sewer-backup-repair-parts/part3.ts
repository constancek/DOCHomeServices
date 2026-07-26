export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro:
      'Sewer backing up in a Villages of Roll Hill apartment above the Mill Creek valley? Stop running water in the building and call (513) 586-5107.',
    relevance: [
      'Villages of Roll Hill sits on a west-side hilltop overlooking the Mill Creek valley and was built largely as multi-unit apartment buildings. In shared buildings, years of kitchen grease collect in the common drain stacks and the building lateral, narrowing the pipe until one full load of laundry or dishes sends waste back up into the lowest units.',
      'We camera the shared line before quoting anything, so you know whether the blockage is grease in the building lateral or something structural, and we tell you which side of the property line it sits on. Sewage that comes back up is contaminated, so the first move is to stop water to the affected stack; from there we clear the grease and, where the pipe is damaged, repair that section rather than cabling the same spot every few months.',
    ],
    commonIntro:
      "In the multi-unit buildings of Roll Hill, the sewer-backup causes we find most often are:",
    localFaqs: [
      {
        q: 'Do you handle backups in the apartment buildings at Roll Hill?',
        a: 'Yes. We camera the shared lateral, isolate which stack is backing up, and can clear it without shutting the whole building down. If the blockage is on the public main rather than the building line, we tell you that before any work starts, because that side is not yours to pay for.',
      },
    ],
  },
  'east-westwood': {
    intro:
      'Sewage coming up in a basement on the slopes of East Westwood above the Mill Creek valley? Stop using water and call (513) 586-5107.',
    relevance: [
      'The homes on the East Westwood hillside, between Westwood and the Mill Creek valley, mostly went up in the early and mid-1900s, and their sewer laterals were run in short lengths of clay. On a grade that steep the ground never sits still, and over the decades two sections shear apart at a joint, leaving a lip that catches paper and solids until the flow out of the house stops and waste rises back up the drains.',
      'An offset joint does not clear with a cable, so before we quote we send a camera down the line and find the exact spot where the pipe has stepped out of line. Where the rest of the lateral is sound, the fix is a spot excavation down to that one joint to reset it, not a new line end to end. Sewage that has come up is contaminated, so keep people and pets off the affected floor until it is cleaned.',
    ],
    commonIntro:
      "In East Westwood's older hillside homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'Why does snaking my East Westwood line clear it for a few weeks and then it backs up again?',
        a: 'Because a cable only carves a hole through whatever has caught on the offset, and the step in the pipe is still there, so it fills back in on the same schedule. The camera shows the offset, and once you can see it you can weigh spot-repairing that one joint against snaking it forever.',
      },
    ],
  },
  'western-hills': {
    intro:
      'Sewer backing up in Western Hills near Western Hills Plaza or Glenway Avenue? Stop running water and call (513) 586-5107.',
    relevance: [
      'Western Hills is the established west-side area around Western Hills Plaza and Glenway, with early-1900s through mid-century homes on older tree-lined streets. Those mature trees are the problem: their roots find the smallest gap in a clay or cast-iron lateral joint and grow into the line, and root intrusion is the single most common backup cause we find across older Cincinnati streets.',
      'We camera the lateral before quoting so you can see the roots on screen rather than take our word for it. Cutting them clears the line for now, but if the joint keeps letting them back in we tell you that and price the fix for the failing section. We are honest about which side of the line the roots are in before you spend anything.',
    ],
    commonIntro:
      "Across Western Hills' older tree-lined streets, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'There is a big tree near my Western Hills sewer line — is that the cause?',
        a: 'Often, yes. Roots grow toward the water and nutrients in a sewer line and enter through old joints. We camera the lateral to confirm it is roots and not a collapse, cut them back, and show you whether the joint they entered through needs repair to keep them out.',
      },
    ],
  },
  california: {
    intro:
      'Sewer backing up in a riverfront home along Kellogg Avenue in California? Stop using water and call (513) 586-5107.',
    relevance: [
      'California runs along Kellogg Avenue on Cincinnati’s far-east riverfront, near Riverbend and the old Coney Island grounds, on low ground right beside the Ohio. When the river comes up and a hard rain lands on top of it, the public main can fill faster than it drains, and that surcharge pushes water and waste backward into the lowest homes on the line. The trouble starts out in the street, not in your basement.',
      'We do not guess at that. Before quoting we camera your lateral all the way to the city tap, and if your line runs clear while the main is the one overloaded, there is nothing on your property worth digging up. We tell you to report it to the city rather than sell you a repair you do not need. If the blockage is in your lateral, we clear it and show you what it was.',
    ],
    commonIntro:
      "Along California's riverfront homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'My California home backs up when the river is high — is that my line or the city’s?',
        a: 'It can be either, which is the whole reason we camera it first. Silt settled in your lateral is yours to clear; a public main surcharged by high water and storm flow is the city’s side, and there is nothing on your property to pay for. We tell you which before any work starts.',
      },
    ],
  },
  carthage: {
    intro:
      'Sewer backing up in a Carthage home near Vine Street or the Hamilton County Fairgrounds? Stop running water and call (513) 586-5107.',
    relevance: [
      'Carthage is a north-side former village along Vine Street, home to the Hamilton County Fairgrounds, with older early-1900s houses on settled tree-lined streets. Laterals here are clay or cast iron, and the mature trees along those streets send roots into every open joint, which is why root intrusion is the backup we find most in this neighborhood.',
      'We camera the line first so you can see whether it is roots, and where in the run they have taken hold. Cutting them opens the line; a joint that keeps admitting them gets flagged and priced separately, not snaked again and again. We tell you plainly which side of the property line the roots sit on before quoting.',
    ],
    commonIntro:
      "In Carthage's older tree-lined streets, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach a backup in Carthage?',
        a: 'Carthage is within our north-side service area along Vine Street, and we are on call 24/7 with same-day service for backups. Stop running water before we arrive so nothing more is added to what has come up.',
      },
    ],
  },
  'winton-hills': {
    intro:
      'Sewer backing up in a Winton Hills home or building near Winton Road? Stop using water and call (513) 586-5107.',
    relevance: [
      'Winton Hills is a north-side neighborhood near Winton Road with a mix of residential streets, multi-unit housing, and industrial ground. In the shared and multi-unit buildings, kitchen grease builds up in the drain stacks and lateral for years, thinning the pipe until one heavy day of use closes it and pushes waste back into the lowest fixtures.',
      'We camera the line before quoting to confirm it is grease and not a broken pipe, and to see how far the buildup runs. We clear the grease and, where the pipe has been damaged behind it, repair that length rather than returning to cable it again. If the blockage is on the public main, we tell you before you spend anything.',
    ],
    commonIntro:
      "In Winton Hills' homes and multi-unit buildings, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'Can grease really back up a whole building at Winton Hills?',
        a: 'Yes. In a shared building every kitchen feeds one lateral, and years of grease narrow it until a busy evening closes it entirely. We camera the stack, clear the buildup, and show you whether the pipe behind it is sound or needs a repair to stop it recurring.',
      },
    ],
  },
  roselawn: {
    intro:
      'Sewer backing up in a Roselawn home or apartment along Reading Road? Stop running water and call (513) 586-5107.',
    relevance: [
      'Roselawn runs along Reading Road on the north side, with mid-century single-family homes and older apartment buildings. The apartments in particular put years of kitchen grease through a single shared lateral, and that grease narrows the pipe until a full load of cooking, dishes, and laundry finally backs waste up into the lowest units.',
      'We camera the line before quoting so you see whether the cause is grease, roots, or a damaged section, and where it sits. We clear the grease, and where the pipe behind it has failed we repair that length instead of cabling the same spot on repeat. We are clear about which side of the line the blockage is on before any work.',
    ],
    commonIntro:
      "Across Roselawn's mid-century homes and apartments, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach a backup in Roselawn?',
        a: 'Roselawn is well within our north-side service area along Reading Road, and we are on call 24/7 with same-day service. Stop running water everywhere in the home or building before we arrive.',
      },
    ],
  },
  'mount-airy': {
    intro:
      'Sewer backing up in a Mount Airy home near Mount Airy Forest? Stop using water and call (513) 586-5107.',
    relevance: [
      'A Mount Airy line that gurgles and backs up every few weeks, no matter how often it is snaked, usually has a belly. The mid-century homes here sit on hilly, wooded lots beside Mount Airy Forest, and on that ground the soil settles unevenly year after year until a length of the lateral sags into a dip that holds standing water and traps every solid that reaches it.',
      'That is a grade problem, not a clog, so cabling it buys a few weeks and no more. We camera the line to find the low section and see how much it holds, then tell you straight whether it needs regrading or a replacement of that length to actually stop backing up. If the pipe only needs a clearing, we say that instead and leave it alone.',
    ],
    commonIntro:
      "Across Mount Airy's hillside mid-century homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'The last plumber kept snaking my Mount Airy line and it kept coming back. Why?',
        a: 'A sagging section holds water and solids that a cable only pushes aside for a couple of weeks, because the dip is still there once the cable comes out. The camera puts the belly on the screen, and from there you decide whether to keep clearing it or fix the grade for good.',
      },
    ],
  },
  hartwell: {
    intro:
      'Sewer backing up in a Hartwell home on one of its old streetcar-suburb streets? Stop running water and call (513) 586-5107.',
    relevance: [
      'Hartwell grew up as a streetcar suburb, and its Victorian and early-1900s homes still stand on tree-lined streets under the same mature trees. Those houses largely run on their original clay laterals, and clay joins in short lengths with a joint every few feet, every joint a doorway for a root feeling for water. Root intrusion is the single most common backup we clear on these blocks.',
      'We camera the lateral before pricing anything, so you see the roots on the screen and the joint they came through rather than take our word for it. Cutting them with a cable opens the line for now; where one joint keeps letting them back in, we can reline that section from the inside so the pipe stays sealed instead of returning to cut roots every season. We are straight about whether the roots sit in your lateral or past the property line before you spend.',
    ],
    commonIntro:
      "In Hartwell's Victorian and early-1900s homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'My Hartwell home is more than a century old — is the sewer line the original clay?',
        a: 'Often it is, and old clay joints are exactly where roots get in. We camera the lateral to see its condition, cut back what has grown in, and show you whether the pipe can be cleared and left or has a joint worth relining to keep the roots out for good.',
      },
    ],
  },
  'kennedy-heights': {
    intro:
      'Sewer backing up in a Kennedy Heights home near the Kennedy Heights Arts Center? Stop using water and call (513) 586-5107.',
    relevance: [
      'Kennedy Heights is a historic east-side hilltop neighborhood that began as a Victorian-era resort, now known for its arts center and large early-1900s homes. Those big older houses run long clay laterals under mature trees, and roots work into the joints along that length, making root intrusion the most common reason a line here backs up.',
      'We camera the full run before quoting so you see where the roots are and how much of the line they affect. Cutting them clears the backup; a joint that keeps admitting them gets identified and priced for repair rather than snaked repeatedly. We are honest about whether the roots are in your lateral or past the property line before any work.',
    ],
    commonIntro:
      "In Kennedy Heights' large historic homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach a backup in Kennedy Heights?',
        a: 'Kennedy Heights is well within our east-side service area, and we are on call 24/7 with same-day service for backups. Stop running water before we arrive, since everything sent down while the line is blocked comes back up.',
      },
    ],
  },
  'st-bernard': {
    intro:
      'Sewer backing up in a St. Bernard home near the Ivorydale complex? Stop running water and call (513) 586-5107.',
    relevance: [
      'St. Bernard is its own city, surrounded by Cincinnati and built up around the Procter & Gamble Ivorydale complex, with a dense grid of early-1900s homes on small valley lots. Laterals of that age are clay or early cast iron, and after a century in shifting valley ground they crack and separate until a section collapses and closes the line entirely.',
      'A collapsed pipe will not open with a cable, so we camera the line to find whether a section has cracked or caved in before quoting. Where the pipe is sound we clear it; where it has failed we replace only the bad length. On these tight lots we work to keep one home’s backup from reaching the next.',
    ],
    commonIntro:
      "In St. Bernard's dense, century-old homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'St. Bernard is its own city — who permits sewer work here?',
        a: 'St. Bernard runs as an independent municipality, so a sewer repair here is permitted through the city rather than through the City of Cincinnati, and we pull the permit where the work requires one. We also camera the line first to tell you whether the blockage is on your lateral or the public main, so you are not paying for the city’s side.',
      },
    ],
  },
  'elmwood-place': {
    intro:
      'Sewer backing up in an Elmwood Place home down in the Mill Creek valley? Stop using water and call (513) 586-5107.',
    relevance: [
      'Elmwood Place is a village of its own, tightly built in the Mill Creek valley just north of the city, its early-1900s homes packed close on low ground. Sitting that low is the catch: a hard rain washes silt and grit down into the main, where it drops out of the slowing water and builds along the bottom of the pipe until an ordinary evening of dishes and laundry backs the line up into the basement.',
      'A silt-packed line still passes a trickle, so it reads fine right up until it does not, which is why we camera the whole run before quoting rather than clearing the first clog we reach. When we find the buildup we hydro-jet it out, scouring the pipe wall instead of poking a hole through the middle. Sewage that comes up is contaminated, so keep the affected area shut off until it is cleared.',
    ],
    commonIntro:
      "In Elmwood Place's dense valley homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'Elmwood Place is its own village — who permits sewer work here?',
        a: 'Elmwood Place is an independent municipality, so a sewer repair is permitted through the village and we pull that permit locally where the work needs one. If the backup lines up with heavy rain along the whole street, the public main may be the one surcharged, and that side is the village or district’s, not yours; the camera tells us which before we quote.',
      },
    ],
  },
  'delhi-hills': {
    intro:
      'Sewer backing up in a Delhi Hills home on the hills above the Ohio River? Stop running water and call (513) 586-5107.',
    relevance: [
      'Delhi Hills sits up in Delhi Township on the west side, on the hills above the Ohio River in country long known for its greenhouses and flower growers. The mid-century houses here are set on sloping lots, and slow settling over the decades can drop a stretch of the sewer lateral into a belly, a low spot that holds water and gathers the solids that should have kept moving.',
      'Because a belly is a fault in the grade and not a blockage, we camera the line to pinpoint the sag before we quote, rather than snaking a symptom that returns within weeks. Where the dip is genuine, the honest fix is to open the ground over that one section and reset it to fall; where the line only needs a clearing, we say so and skip the dig. We tell you which side of the property line the fault is on before any work.',
    ],
    commonIntro:
      "Across Delhi Hills' hillside mid-century homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'Do you have to dig up my Delhi Hills yard to fix a backup?',
        a: 'Only where the grade itself has failed. If the pipe is sound and just fouled, we clear it with no excavation. If a section has settled into a belly, the only real fix is to dig down to that length and reset its fall, but that is one section, not the whole yard, and the camera shows exactly where before we quote.',
      },
    ],
  },
  'golf-manor': {
    intro:
      'Sewer backing up in a Golf Manor home in the village surrounded by Cincinnati’s north side? Stop using water and call (513) 586-5107.',
    relevance: [
      'The cast-iron sewer laterals under Golf Manor’s compact grid of mid-century homes are reaching the end of their service life. This small village is wrapped entirely by Cincinnati’s north side, its houses close together on modest lots, and once a length of that old iron rusts thin and cracks it can cave in, closing the line and forcing waste back up into the lowest drains in the house.',
      'A caved section stops a camera cold, which is how we tell a collapse from an ordinary clog before quoting; a cable will never open it. Where the rest of the lateral is solid, we dig to that one failed length and replace it, not the entire run. Sewage backing up is contaminated, so keep people and pets clear of the affected area until we have it cleaned.',
    ],
    commonIntro:
      "In Golf Manor's mid-century homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'Golf Manor is its own village — who handles the permit for sewer work?',
        a: 'Golf Manor is an independent municipality, so a sewer repair is permitted through the village rather than the City of Cincinnati, and we pull it where the code calls for one. We camera the line first and tell you whether the failure is in your lateral or out in the public main before you spend a dollar.',
      },
    ],
  },
  fairfax: {
    intro:
      'Sewer backing up in a Fairfax home along Wooster Pike near Mariemont? Stop running water and call (513) 586-5107.',
    relevance: [
      'The early- and mid-1900s homes of this small east-side village along Wooster Pike near Mariemont still drain through their original clay laterals. Clay is laid in short lengths with a joint every few feet, and the mature trees along the street have pushed roots into those joints over the decades, where they spread into a mat that catches paper and grease until the line stops draining and waste rises back into the house.',
      'We put a camera down the lateral before quoting so you see the roots and the joint they came through rather than pay for a guess. Cutting them with a cable opens the line for a season, but where a joint keeps letting them back in we would rather line that length from the inside so the pipe stays sealed than return to cut roots every year. Whatever has surfaced is contaminated, so keep it off skin and away from children and pets, and we tell you whether the roots sit in your lateral or past the property line before you spend anything.',
    ],
    commonIntro:
      "In Fairfax's older homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'My Fairfax line has to be snaked for roots every year — is there a way to end that?',
        a: 'Often, yes. Snaking only shaves a channel through the roots and leaves the cracked joint they entered wide open, so they regrow on the same clock. Once the camera shows which joints are letting them in, a cured-in-place liner seals that section from the inside without a trench, and the roots have nothing left to grow through. We tell you honestly whether your run is a candidate for lining or simply needs clearing.',
      },
    ],
  },
  mack: {
    intro:
      'Sewer backing up in a Mack home in Green Township on the west side? Stop using water and call (513) 586-5107.',
    relevance: [
      'Mack, out in Green Township on the west side, is a mix of mid-century and newer single-family homes, and even the newer ones have now stood long enough for the ground beneath them to settle. When it settles unevenly under a sewer lateral, the pipe can dip into a belly that holds standing water and gathers solids until the line closes and backs up into the house.',
      'A belly is a matter of grade rather than a blockage, so we camera the line to find the low point before we quote, instead of snaking a symptom that returns. Where the sag is real, we tell you plainly what setting it right involves; where the line simply needs clearing, we do that and leave the ground alone. We are clear about which side of the line the fault sits on first.',
    ],
    commonIntro:
      "Across Mack's mid-century and newer homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach a backup in Mack?',
        a: 'Mack is well inside our west-side service area in Green Township, and we are on call around the clock with same-day service for backups. Stop running water everywhere in the house before we arrive, since anything sent down a blocked line only adds to what has already come up.',
      },
    ],
  },
  'monfort-heights': {
    intro:
      'Sewer backing up in a Monfort Heights home in Green Township? Stop running water and call (513) 586-5107.',
    relevance: [
      'Monfort Heights is a settled Green Township suburb of mid-century homes, and the clay and cast-iron laterals laid with them are now decades into the ground. A section that has cracked or corroded through can shift and collapse, and once it does the line is closed, so waste has nowhere to go but back up into the lowest drains in the house.',
      'You cannot tell a collapse from a clog standing in the basement, so we camera the line before quoting. A clog clears with a cable and stays clear; a broken length jams the camera and keeps backing up no matter how often it is snaked. Where the pipe is sound we clear it and leave it; where a section has failed we replace that length alone, not the whole run.',
    ],
    commonIntro:
      "Across Monfort Heights' mid-century homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'How do I know if my Monfort Heights line is collapsed or just clogged?',
        a: 'From inside the house you cannot, which is why we camera it. A clog clears and holds; a collapsed section stops the camera and comes back no matter how many times it is cabled. Seeing the pipe is how you decide between a clearing and replacing one length.',
      },
    ],
  },
  bridgetown: {
    intro:
      'Sewer backing up in a Bridgetown home in Green Township? Stop using water and call (513) 586-5107.',
    relevance: [
      'A Bridgetown basement that backs up only during a hard storm and stays dry the rest of the year is usually not telling you your sewer is blocked. This Green Township community of mid-century and newer homes drains into a public main, and when that main surcharges under a heavy rain across the whole street, it drives water back toward the lowest houses tied to it.',
      'So before we quote we camera your lateral to see whether it is actually clear. If your line is fine and the storm main is the problem, there is nothing on your property worth paying to repair, and we say so plainly. If the backup is in your lateral after all, we clear it and put the cause on the screen for you.',
    ],
    commonIntro:
      "Across Bridgetown's homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'My Bridgetown basement only backs up during heavy storms — is that my sewer?',
        a: 'Probably not. A backup that shows only in a hard rain across the whole street usually means the public main is surcharged, not that your line is blocked. We camera your lateral to confirm it is clear, and if the storm main is the cause we tell you to report it rather than pay for work on your side.',
      },
    ],
  },
  finneytown: {
    intro:
      'Sewer backing up in a Finneytown home in Springfield Township? Stop running water and call (513) 586-5107.',
    relevance: [
      'Finneytown is a settled Springfield Township community on the north side, its mid-century homes lining older streets under grown trees. Those trees are patient: their roots follow the moisture to a sewer lateral and work in through an offset joint, spreading into a mat that snags everything passing until the line backs up into the house.',
      'We camera the lateral before quoting so you can see the mass and the joint it came through rather than pay for a guess. Rather than shave a channel with a cable, we hydro-jet the line to scour the roots back to the pipe wall, then look again to judge whether that joint needs a repair to keep them out. Whatever has come up is contaminated sewage, so keep it off skin and away from children and pets until it is cleaned.',
    ],
    commonIntro:
      "Across Finneytown's mid-century homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'Who cleans up the sewage after a backup in my Finneytown basement?',
        a: 'We clear the line and get the drain flowing, but the standing sewage itself needs proper cleanup, because it carries bacteria and should not be mopped up like plain water. We can walk you through containing the area and, for a bad one, point you toward remediation, so it is handled safely rather than spread around.',
      },
    ],
  },
  amberley: {
    intro:
      'Sewer backing up in an Amberley Village home on one of its big wooded lots? Stop using water and call (513) 586-5107.',
    relevance: [
      'Amberley Village is an affluent north-side village of large homes on big, wooded lots along winding streets. Those long lots mean long sewer laterals running under mature trees, and roots work into the joints all along that distance, making root intrusion the most common reason a line here backs up.',
      'We camera the full length before quoting so you can see where the roots have entered rather than paying for a guess on a long run. We cut them to open the line, and where a joint keeps letting them in we identify that section for repair instead of returning to cable it. We tell you honestly whether the roots are in your lateral or past the property line.',
    ],
    commonIntro:
      "In Amberley's large homes on wooded lots, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'My Amberley lot has a long sewer run under old trees. Where do roots get in?',
        a: 'Anywhere the pipe has a joint, and a long lateral has many. We camera the whole run to pinpoint which joints the roots entered through, cut them back, and show you whether the pipe can be cleared and kept or has a section that needs repair to stop the intrusion.',
      },
    ],
  },
  'arlington-heights': {
    intro:
      'Sewer backing up in an Arlington Heights home in the Mill Creek valley? Stop running water and call (513) 586-5107.',
    relevance: [
      'Arlington Heights runs its own affairs as a village, a compact grid of older homes on low ground down on the Mill Creek valley floor north of the city. Sitting that low is the catch: the public main the whole street ties into can take on more storm water than it carries, and when it surcharges under a hard rain it drives water and waste backward toward the lowest houses on the line. The trouble then starts out in the street, not in your basement.',
      'We do not guess at that. Before quoting we camera your lateral out to the village tap, and if your line runs clear while the main is the one overwhelmed, there is nothing on your property worth digging up. That is a case where we tell you not to hire us and to report it to the village instead, because a surcharged public main is not yours to pay for. If the blockage is genuinely in your lateral we clear it and show you the cause on the screen; either way the sewage that came up is contaminated, so keep the affected floor shut off until it is cleaned.',
    ],
    commonIntro:
      "In Arlington Heights' older valley homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'Arlington Heights is its own village — who owns the main when the whole street backs up?',
        a: 'The village does. Arlington Heights is an independent municipality, so the public sewer main and its permitting run through the village, not the City of Cincinnati. When a backup follows heavy rain across the valley floor, that main is usually the one surcharged, and clearing or repairing it is the village or sewer district’s job. We camera your lateral first so you know which side of the tap the problem is on before a dollar is spent.',
      },
    ],
  },
  'north-college-hill': {
    intro:
      'Sewer backing up in a North College Hill home just north of College Hill? Stop using water and call (513) 586-5107.',
    relevance: [
      'North College Hill is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes on tight lots. Laterals here are old clay and cast iron running under mature street trees, and roots find the joints, which makes root intrusion the backup we are called for most in this city.',
      'We camera the lateral before quoting so you see the roots and where they got in rather than paying for a guess. Cutting them opens the line; a joint that keeps admitting them gets flagged for repair instead of being cabled again each season. On these close lots we are careful to keep one home’s backup from reaching the next.',
    ],
    commonIntro:
      "In North College Hill's older homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'North College Hill is its own city — who permits sewer work here?',
        a: 'North College Hill is an independent municipality, so a sewer repair is permitted through the city rather than through Cincinnati, and we pull the permit where the code requires one. We camera the line first and tell you whether the blockage is on your lateral or the public main before you spend anything.',
      },
    ],
  },
  newtown: {
    intro:
      'Sewer backing up in a Newtown home on the river-bottom near the Little Miami? Stop using water and call (513) 586-5107.',
    relevance: [
      'The low river-bottom ground beside the Little Miami River, where this small east-side village of older homes sits, is exactly why its sewers foul. When the river rises or a hard rain lands, storm water carries silt and fine grit down into the main, the flow slows, and the sediment drops out along the bottom of the pipe. It builds up unseen until an ordinary evening of dishes and laundry meets a half-closed line and backs up into the house.',
      'A silt-packed line still passes a trickle, so it reads normal right up until it does not, which is why we camera the full run before quoting instead of clearing the first thing we reach. When we find the buildup we hydro-jet it, scouring the sediment off the pipe wall rather than punching a hole through the middle for it to close again. Sewage that comes up is contaminated, so keep people and pets off the affected floor, and we tell you whether the fouling is in your lateral or the public main before any work.',
    ],
    commonIntro:
      "In Newtown's older homes near the Little Miami, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'After the Little Miami rises my Newtown line backs up — is that my pipe or the public main?',
        a: 'The camera settles it. Silt that has settled inside your own lateral is yours to clear, and we jet it out. A public main that fills with storm water and surcharges the whole low-lying street is the district’s side, and there is nothing on your property to pay for. We run the camera to the tap first and tell you which it is, so you are not charged for the district’s problem.',
      },
    ],
  },
  'turpin-hills': {
    intro:
      'Sewer backing up in a Turpin Hills home in Anderson Township? Stop using water and call (513) 586-5107.',
    relevance: [
      'Turpin Hills is a suburban Anderson Township community on the east side, with mid-century and newer homes on rolling lots. On this terrain the ground settles unevenly over the years, and a lateral can drop into a belly, a low section that holds standing water and traps solids until the line backs up into the house.',
      'A belly is a grade fault, not a clog, so we camera the line to locate the low spot before quoting rather than snaking a symptom that keeps coming back. Where the sag is real we tell you what fixing it takes; where the line only needs clearing we say that. We are clear about which side of the line the problem is on before any work.',
    ],
    commonIntro:
      "Across Turpin Hills' homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach a backup in Turpin Hills?',
        a: 'Turpin Hills is well within our east-side service area in Anderson Township, and we are on call 24/7 with same-day service. Stop running water before we arrive so nothing more is added to what has come up.',
      },
    ],
  },
  silverton: {
    intro:
      'Sewer backing up in a Silverton home along Montgomery Road? Stop running water and call (513) 586-5107.',
    relevance: [
      'Silverton is a small city along Montgomery Road on the east side, with early- and mid-1900s homes. The clay and cast-iron laterals under those homes have been in the ground for the better part of a century, and once a section cracks or corrodes through it can collapse, closing the line and pushing waste back up into the lowest drains.',
      'A collapsed pipe does not open with a cable, so we camera the line before quoting to see whether a section is cracked or fully caved in. Where the pipe is sound we clear it; where it has failed we replace only that length rather than the whole run. Sewage is contaminated, so keep the affected area closed off until we have cleared it.',
    ],
    commonIntro:
      "In Silverton's older homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'Do you have to dig up my Silverton yard to fix a backup?',
        a: 'Not always. Where the pipe is structurally sound we can clear it without excavation. Where a clay or cast-iron section has collapsed there is no way around replacing that length, but we replace only the bad section, not the whole line. The camera tells us which situation you are in before we quote.',
      },
    ],
  },
  lockland: {
    intro:
      'Sewer backing up in a Lockland home down in the Mill Creek valley? Stop using water and call (513) 586-5107.',
    relevance: [
      'A Lockland line that gurgles and slows every few weeks, then backs up no matter how often it is snaked, usually has a belly. This historic mill village packs closely spaced worker housing onto low, made-up ground in the Mill Creek valley, and ground like that settles unevenly for a century, until a length of the old lateral sags into a dip. The low spot holds standing water and traps every solid that reaches it, so the line closes on its own schedule.',
      'That is a fault in the grade, not a clog, so cabling it buys a couple of weeks and no more. We camera the run before quoting to find the sag and see how much it holds, then tell you straight whether that length has to be dug up and reset to fall or whether the pipe only needs a clearing. Where a dig is the only real fix it is one section, not the whole yard, and the sewage that has come up is contaminated, so keep the area shut off until we clear it.',
    ],
    commonIntro:
      "In Lockland's older valley homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'Do you have to dig up my Lockland yard to stop the backups?',
        a: 'Only where the grade itself has failed. If the pipe is sound and just fouled, we clear it with no excavation at all. If a section has settled into a belly on this valley ground, resetting that one length is the only thing that stops it for good, and no amount of snaking will. The camera shows exactly where and how long before we quote, so any dig is limited to the bad section.',
      },
    ],
  },
  groesbeck: {
    intro:
      'Sewer backing up in a Groesbeck home in Colerain Township? Stop running water and call (513) 586-5107.',
    relevance: [
      'Groesbeck built out across Colerain Township on the northwest side in the middle of the last century, and the sewer laterals run in with those mid-century homes were cast iron. Iron corrodes from the inside over the decades until a wall thins and a length cracks, and once a section finally caves in the line is closed, so waste has nowhere to go but back up into the lowest drains in the house.',
      'A caved pipe stops a camera cold, and that is how we tell a collapse from an ordinary clog before quoting, because a cable will never open it. Where the rest of the lateral is solid we dig down to that one failed length and replace it, not the entire run. What has backed up is contaminated sewage rather than water, and we tell you whether the break is on your side of the tap or out in the public main before any work.',
    ],
    commonIntro:
      "Across Groesbeck's mid-century homes, the sewer-backup causes we handle most often are:",
    localFaqs: [
      {
        q: 'Is the sewage on my Groesbeck basement floor safe to clean up myself?',
        a: 'Treat it as a hazard, not a spill. A backup brings up bacteria from the sewer, so a small amount can be handled with gloves, disinfectant, and good ventilation, but anything that has soaked carpet, drywall, or a finished floor is a remediation job rather than a mop-and-bucket one. We clear and repair the line that caused it and tell you honestly whether what is left is a DIY cleanup or one to hand off.',
      },
    ],
  },
  'mount-healthy': {
    intro:
      'Sewer backing up in a Mount Healthy home near the old town center? Stop using water and call (513) 586-5107.',
    relevance: [
      'Mount Healthy is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes. The clay laterals under those older houses run beneath mature trees, and roots push into the joints, which makes root intrusion the backup cause we find most across this city.',
      'We camera the lateral before quoting so you can see the roots and where they entered rather than paying for a guess. Cutting them opens the line, and where a joint keeps admitting them we flag that section for repair instead of cabling it season after season. We tell you honestly which side of the line the roots are on before any work.',
    ],
    commonIntro:
      "In Mount Healthy's older homes, the sewer-backup causes we see most often are:",
    localFaqs: [
      {
        q: 'Mount Healthy is its own city — who permits a sewer repair here?',
        a: 'Mount Healthy is an independent municipality, so a sewer repair is permitted through the city rather than through Cincinnati, and we pull the permit where the work requires one. We camera the line first to tell you whether the roots or blockage sit on your lateral or the public main before you spend anything.',
      },
    ],
  },
};
