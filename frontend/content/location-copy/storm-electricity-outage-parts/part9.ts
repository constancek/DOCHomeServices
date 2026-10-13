import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 9 — the Kenton and Campbell County cities, the Boone County growth
// corridor, and the first of the Clermont County communities.
export const part9: Record<string, LocationServiceCopy> = {
  'lakeside-park': {
    intro:
      'Storm damage at the service on your Lakeside Park home? Your ZIP covers several separate cities, so we confirm the right permit office. Call (513) 586-5107.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city of mid-century homes on quiet streets, and it shares its ZIP code with Crescent Springs, Crestview Hills, Edgewood and Fort Mitchell. That is the single most useful thing to know about a repair here. A ZIP code tells you nothing about which authority issues your permit, and five separate cities inside one ZIP means an electrician working from the postal address alone has a good chance of filing in the wrong place.',
      'Getting it wrong does not fail an inspection — the paperwork comes back and you wait while it is refiled, at exactly the point in the week when a day costs you most. We confirm the city for the specific address before anything goes in. The housing itself is straightforward: mid-century services, many still original, under street trees planted with the subdivisions and now standing over the drops. The utility throughout is Duke Energy Kentucky.',
    ],
    commonIntro:
      "Across Lakeside Park's mid-century streets, in a ZIP shared with four other cities, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My ZIP is 41017 — is that Lakeside Park for the permit?',
        a: 'Not necessarily, and this is worth checking rather than assuming. ZIP 41017 covers Lakeside Park, Crescent Springs, Crestview Hills, Edgewood and Fort Mitchell, and each is its own city with its own permit office. We confirm which one your address actually falls in before filing. It is a small detail that costs a day when it is wrong.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Storm-damaged mast or meter base in Crescent Springs? Long suburban drops are the usual casualty. We repair it and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city of mid-century and newer homes on lots noticeably wider than the river cities down the hill. Wide lots mean long overhead drops — more span between the pole at the road and a house set back from it, and more line for a falling limb to catch. That is the clearest reason houses out here lose their own service equipment while the street lights stay on.',
      'The newer sections change the answer. A good deal of recent building here was done with underground supply, which removes the mast and weatherhead entirely, so those houses only lose power when the utility does or to a fault at the meter or in the panel. We establish which arrangement your address has before quoting, because Duke Energy Kentucky schedules underground work with more lead time than overhead and the timelines are not comparable.',
    ],
    commonIntro:
      "Across Crescent Springs' wide-lot mid-century and newer homes, where drops cross long spans, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why does my Crescent Springs house lose power when the street does not?',
        a: 'Long drops, usually. Where the pole is at the road and the house sits well back, there is far more overhead line on your property than on a narrow city lot, and that span is what a falling limb catches. Keeping limbs clear of it is the practical prevention. Surge protection at the panel handles the other half — what a nearby strike sends through everything inside.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Storm damage at the service on your Crestview Hills home? University and retail circuits come back first — yours may still be your own equipment. Call (513) 586-5107.',
    relevance: [
      'Crestview Hills (ZIP 41017) holds both Thomas More University and a substantial retail corridor, and institutional and commercial load like that is restored as a priority. So the practical experience of a storm here is often watching the campus and the shops light up while residential streets a few blocks back are still dark. That ordering is normal and it says nothing about your street, but it does make it obvious sooner when your own house is the problem.',
      'Once the lines near you are back, the test is narrow: if the two houses either side have lights and you do not, the remaining fault is on equipment you own — the mast, the weatherhead, the meter box, or the panel — and Duke Energy Kentucky cannot reconnect to any of it until a licensed electrician has repaired it and it has been inspected. Note also that this ZIP covers several separate cities, so the permit office depends on the specific address.',
    ],
    commonIntro:
      "Across Crestview Hills' residential streets behind the university and retail corridor, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'The campus and the shops have power but my Crestview Hills street does not. Why?',
        a: 'Circuits carrying institutional and large commercial load are restored as a priority, so that is the expected order rather than an oversight. It tells you nothing about your street. What does is your immediate neighbours — if they are lit and you are not, the fault is on your own equipment and needs an electrician rather than more waiting.',
      },
    ],
  },

  edgewood: {
    intro:
      'Storm damage at the service on your Edgewood home? Hospital circuits are restored first here, so a dark house usually means your own equipment. Call (513) 586-5107.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city and home to St. Elizabeth Healthcare, and living beside a hospital changes the shape of a storm outage in a way worth understanding. Utilities restore circuits serving hospitals and other critical facilities ahead of everything else — as they should — so the lines through this part of Edgewood commonly come back quickly. The result is that a homeowner here reaches the moment of clarity faster than almost anywhere else we work.',
      'That clarity is the useful part. When the lines near you are live within hours and your house is still dark, there is no ambiguity left: the fault is on equipment you own, and Duke Energy Kentucky will not reconnect to a damaged mast, weatherhead or meter box regardless of how quickly they restored the line. Calling that morning rather than waiting another day is the whole difference, because the queue for repairs is first come.',
    ],
    commonIntro:
      "Across Edgewood's residential streets near the hospital, where lines are restored early, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'The hospital area is lit but my Edgewood house is dark. Should I still wait?',
        a: 'No. Circuits serving a hospital are restored first, so if those lines are live and your house is not, the remaining fault is on your own equipment — and no further waiting will change it. That is actually good news compared with a neighborhood where you cannot tell: you know within hours rather than days, and you can get into the repair queue while others are still guessing.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Storm damage at the mast or meter base in Taylor Mill? Newer sections have no mast to lose; the older ones do. Call (513) 586-5107.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential city south of Covington, and a large share of it is comparatively recent development rather than pre-war housing. That matters because much of the newer building here was done with underground supply, which removes the two components that account for most storm damage to residential service — the mast and the weatherhead. Those houses lose power when the utility does, or to a fault at the meter base or in the panel, and not much else.',
      'The older mid-century sections are conventional overhead, and being on the ridge means wind arrives with little to break it. Sustained gusts on a mast that has been in place for decades work fixings loose and pull a weatherhead out of true without necessarily breaking anything visibly. So the two halves of this city fail in genuinely different ways, and it is worth telling us which you have when you call.',
    ],
    commonIntro:
      "Across Taylor Mill's newer underground-fed streets and its older overhead ridge sections, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'How do I know whether my Taylor Mill house is fed overhead or underground?',
        a: 'Look for a mast — a metal pipe running up the wall or through the roof with cables coming into it from a pole. If there is one, you are overhead. If the meter sits on the wall with no visible cable coming down from above, you are almost certainly underground. It is the first thing we ask, because it changes what is likely wrong and how Duke Energy Kentucky schedules the reconnect.',
      },
    ],
  },

  elsmere: {
    intro:
      'Storm damage at the service on your Elsmere home? Elsmere and Erlanger share a ZIP but not a permit office. Call (513) 586-5107.',
    relevance: [
      'Elsmere (ZIP 41018) sits along the Dixie Highway corridor immediately beside Erlanger, and the two share a ZIP code while being entirely separate cities. That is the trap here. An electrician working from the postal address will file with whichever city they assume, and filing with Erlanger for an Elsmere property means the paperwork comes back and you wait while it is redone. We confirm the city for the specific address before anything goes in.',
      'The housing is a mix of older and mid-century homes, so services span two eras — original entrances on the older streets and mid-century equipment on the rest, much of it still in place. The Dixie corridor carries commercial load, which is restored as a priority, so the businesses along it are frequently lit before the residential streets behind. That order is normal and tells you nothing about your own street.',
    ],
    commonIntro:
      "Across Elsmere's older and mid-century homes off the Dixie corridor, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My ZIP says 41018, the same as Erlanger. Which city issues my permit?',
        a: 'It depends on the address rather than the ZIP, because Elsmere and Erlanger are separate cities sharing one postal code. Getting it wrong means the filing comes back and is redone, which after a storm costs a day. We check it before submitting anything — and it is a fair question to ask anyone else you call. The utility here is Duke Energy Kentucky rather than Duke Energy Ohio, with its own crews and scheduling.',
      },
    ],
  },

  independence: {
    intro:
      'Storm damage at the service on your Independence home? The county seat, but the city issues the permit. We handle both. Call (513) 586-5107.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, and being the county seat causes a specific confusion. County offices are located here, so people reasonably assume the county handles the permit — but Independence is a city and issues its own. That assumption sends paperwork to the wrong desk, and the cost is a day of waiting while it is refiled rather than any dispute about the work.',
      'The growth means the housing spans a wide range. The historic core has older services, some original. The newer subdivisions around it were largely developed with underground supply, so those houses have no mast or weatherhead to lose and only go dark when the utility does or when there is a fault at the meter or in the panel. Two houses a mile apart genuinely have different likely failures and different reconnect timelines.',
    ],
    commonIntro:
      "Across Independence's historic core and its newer subdivisions, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Independence is the county seat — does the county handle my permit?',
        a: 'No, the city does, and it is a common and understandable mix-up because the county offices are here. Independence issues its own electrical permits and inspections. Filing with the county means the paperwork comes back and gets redone, and after a storm that is a day you would rather not spend. The utility, as throughout Northern Kentucky, is Duke Energy Kentucky.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Storm damage at the service on your Dayton home? Tall Victorians on narrow riverfront lots, often with the mast through the roof. Call (513) 586-5107.',
    relevance: [
      'Dayton (ZIP 41074) shares the same narrow riverfront strip as Bellevue next door, in tight streets of well-preserved late-1800s and early-1900s houses. Those houses are tall for their footprint and close together, which puts the service entrance high on the wall and frequently running up through the roof rather than stopping at the eaves. When a limb bends a mast at a roof penetration you have a wiring problem and an opening in the roof at the same time, and water finds the second one long before anyone worries about the first.',
      'So the flashing and the seal at that penetration are part of the electrical repair here rather than a roofer’s follow-up. Sharing the strip with Bellevue also means the two cities are commonly restored together, so what your neighbours across the boundary report applies to you. The low riverfront ground adds water to the same storms, and a submerged panel is replaced rather than dried out — something an inspector checks before Duke Energy Kentucky reconnects.',
    ],
    commonIntro:
      "In Dayton's tall late-1800s houses on narrow riverfront lots, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The mast on my Dayton house passes through the roof. Is the roof part of your job?',
        a: 'Yes. Where the mast goes through the roof, the flashing and the seal around it belong to the service entrance, and replacing the mast without redoing them properly leaves a leak that appears months later. If the limb damaged the roof more widely than the penetration itself, that is a roofer’s work and we will tell you plainly which is which.',
      },
    ],
  },

  southgate: {
    intro:
      'Storm damage at the mast or meter base in Southgate? On the slope between the river flats and the bluff. We repair it. Call (513) 586-5107.',
    relevance: [
      'Southgate (ZIP 41071) sits between Newport below and Fort Thomas above, which puts it on the transition slope rather than on either the river flats or the bluff top. That middle position gives it a bit of both and neither in full: more wind than the sheltered riverfront streets, less than the exposed bluff, and enough grade that service drops run across a slope rather than level. A span under tension puts more load on the mast when a limb lands on it.',
      'It also means the neighborhood does not share one restoration fate with either neighbour. Streets higher up can come back at a different time from streets lower down, so what Newport or Fort Thomas is reporting may not apply to you. The housing is mid-century, with services largely of that era and many still original, and the utility is Duke Energy Kentucky rather than Duke Energy Ohio.',
    ],
    commonIntro:
      "Across Southgate's mid-century streets on the slope between the flats and the bluff, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Newport has power back but my Southgate street does not. Is that odd?',
        a: 'Not on this terrain. Southgate sits on the slope between Newport and Fort Thomas, and restoration does not necessarily reach the middle at the same time as either end. Judge it by your immediate neighbours rather than the city below. Lights either side of you and none in your house means the fault is on your own equipment.',
      },
    ],
  },

  wilder: {
    intro:
      'Storm damage to a service in Wilder? Industrial circuits along the Licking come back early. We repair residential and smaller commercial. Call (513) 586-5107.',
    relevance: [
      'Wilder (ZIP 41076) runs along the Licking River corridor with a commercial and industrial base alongside its residential neighborhoods. That industrial load has a real effect on restoration: circuits carrying it are prioritised, so the lines near the corridor frequently come back well before purely residential streets elsewhere would. Living close to that is an advantage in a storm, right up to the point where the lines are live and your own house is still dark.',
      'At that point the fault is on your equipment, and Duke Energy Kentucky will not reconnect to a damaged mast, weatherhead or meter box regardless of how fast they restored the line. The Licking adds water to the low ground along the corridor, and a panel that has stood in water gets replaced rather than dried out. On the commercial side we handle smaller services and will tell you honestly when a building needs a larger contractor.',
    ],
    commonIntro:
      "Across Wilder's residential streets and the Licking River corridor, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Can you look at the electrical service on a small commercial building in Wilder?',
        a: 'Smaller commercial, yes — light-industrial units, offices, and modest three-phase services are work we do. Large three-phase installations with primary metering or a utility transformer on site are a specialist contractor’s job, and we will say so on the phone rather than after driving out. Describe the building and the service when you call.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Storm damage at the service on your Highland Heights property? On rental property the owner has to authorise the repair. Call (513) 586-5107.',
    relevance: [
      'Highland Heights (ZIP 41076) is home to Northern Kentucky University, and the housing around it is a mix of mid-century family homes and student rentals. Those two behave completely differently after a storm, and not because of the wiring. On an owner-occupied house the decision to proceed is made by whoever is standing in the driveway. On the rental next door the tenant cannot authorise anything, the owner may be elsewhere, and identical damage can sit for days.',
      'The campus itself carries institutional load, which is restored as a priority, so the lines through parts of this city often come back early. That is useful information rather than a complaint: once those lines are live, a house still in the dark has a fault on its own equipment, and Duke Energy Kentucky cannot reconnect to it. If you own your home here, calling the same morning is the single thing most within your control.',
    ],
    commonIntro:
      "Across Highland Heights' mid-century homes and student rentals near the university, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'I rent near NKU and the house has no power. What should I do?',
        a: 'Report it to your landlord or management company immediately and ask them to call us rather than waiting. Repairs to the mast, weatherhead or meter base need the property owner to authorise the work and the permit, so a tenant calling directly usually adds a day rather than saving one. If the fault turns out to be inside the unit, that is a faster conversation.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Storm damage at the service on your Cold Spring home? Growth means overhead and underground on the same road. Call (513) 586-5107.',
    relevance: [
      'Cold Spring (ZIP 41076) has grown steadily along the US-27 corridor, and the result is a city where the service arrangement changes with the age of the street rather than being uniform. Established neighborhoods are conventional overhead, with masts and drops and services largely of their era. The newer subdivisions were frequently developed with underground supply, so those houses have no mast or weatherhead to lose at all.',
      'That produces genuinely different outcomes from one storm. An overhead house a few streets from an underground one can need a full entrance rebuild while its neighbour was never at risk of that particular failure. The corridor itself carries commercial load which is restored as a priority, so the businesses along US-27 are commonly lit before residential streets behind them — normal, and not an indication of anything about your own supply.',
    ],
    commonIntro:
      "Across Cold Spring's established overhead streets and newer underground-fed subdivisions, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Cold Spring subdivision is newer. Do I need an electrician after a storm?',
        a: 'Possibly not, and we would rather say so than send someone out. If your street is fed underground there is no mast or weatherhead to be damaged. If the whole street is dark it is a utility outage and you wait. If only your house is out, look at the meter base and consider surge damage in the panel — worth checking, but usually a smaller job than a service rebuild. Report outages to Duke Energy Kentucky rather than Duke Energy Ohio.',
      },
    ],
  },

  alexandria: {
    intro:
      'Storm damage at the service on your Alexandria home? On a well, an outage means no water either. We repair masts, meter bases, and panels. Call (513) 586-5107.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, with a historic core surrounded by newer subdivisions and a semi-rural edge. It is that rural edge that changes the urgency of a storm call. Properties out there frequently sit well back from the road on long private service runs, and a good number are on private wells — which means losing power means losing water, because a well pump runs on electricity. Septic systems with pumps are affected the same way.',
      'That is worth saying on the phone, because we cannot tell it from an address. A long private run also means the damage may be somewhere out along the line rather than at the house, so finding it is the first task. Closer in, the historic core has older services and the newer subdivisions are often underground with no mast to lose. Alexandria is a city and issues its own permits despite being the county seat.',
    ],
    commonIntro:
      "Across Alexandria's historic core, newer subdivisions, and semi-rural properties, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'I am on a well outside Alexandria and the power is out. Does that change anything?',
        a: 'It makes it considerably more urgent, and it is worth saying when you call. A well pump needs electricity, so no power means no water for washing, flushing or drinking, and a septic system with a pump is affected too. Tell us on the phone — it changes how we prioritise the visit and it is not something we can tell from the address. Note too that the utility here is Duke Energy Kentucky, with its own crews and restoration schedule.',
      },
    ],
  },

  melbourne: {
    intro:
      'Storm damage or a flooded panel in Melbourne? A small river village a long way east. We repair both and handle the inspection. Call (513) 586-5107.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village on the Ohio well east of Newport, and it is about as far from the core of the metro as we go on the Kentucky side. Restoration works outward, so the lines here are commonly among the later ones reached in a regional storm — which makes the window test more valuable rather than less. If the neighbours have lights and you do not, the remaining fault is on your own equipment and that repair does not have to wait for a utility crew to arrive.',
      'The riverside position supplies the other problem. Older houses on low ground put panels where water reaches them, and submerged electrical equipment is replaced rather than dried out, because water gets behind the bus bars and into the breakers and keeps corroding after the surface dries. An inspector checks for that before Duke Energy Kentucky reconnects, so we look at the panel as standard here and not only what is visible outside.',
    ],
    commonIntro:
      "In Melbourne's older homes on low ground beside the river, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Do you come out as far as Melbourne?',
        a: 'Yes, and it is near the eastern edge of what we cover on the Kentucky side. Be realistic about the utility timeline out here — restoration works outward from the core, so these lines are often later coming back. Our part does not have to wait for that. If your mast or meter box is damaged we can repair and inspect it so you are ready the moment the line is live.',
      },
    ],
  },

  hebron: {
    intro:
      'Storm damage at the service on your Hebron home? Rural properties on wells lose water with the power. We repair both ends. Call (513) 586-5107.',
    relevance: [
      'Hebron (ZIP 41048) sits in Boone County near the airport, mixing newer subdivisions with established semi-rural properties, and those two need different conversations. The rural properties often sit well back from the road with long private service runs, and a number are on wells and septic — so an outage there means no water at all rather than just no lights, and the damage may be somewhere out along the run rather than at the house.',
      'The subdivisions are a different picture: frequently underground supply, no mast or weatherhead to lose, and power that goes only when the utility’s does or when there is a fault at the meter or in the panel. The airport-area ground is also flat and open, so where houses are overhead the failure mode tends to be wind working on fixings rather than limbs breaking things — damage that looks like nothing from the ground and still stops a reconnect.',
    ],
    commonIntro:
      "Across Hebron's newer subdivisions and semi-rural properties near the airport, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Hebron property is on a well and set back from the road. What should I tell you when I call?',
        a: 'That you are on a well, and roughly how far the house sits from the road. The well matters because no power means no water, which changes how we prioritise the visit. The distance matters because on a long private run the damage is often out along the line rather than at the house, and knowing that in advance means we arrive equipped to find it. Report the outage itself to Duke Energy Kentucky rather than Duke Energy Ohio.',
      },
    ],
  },

  burlington: {
    intro:
      'Storm damage at the service on your Burlington home? Old courthouse core or newer subdivision — different repairs. Call (513) 586-5107.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions. The contrast between those two is sharp. Around the courthouse the buildings are older and the trees are genuinely mature — planted long before the subdivisions existed — so overhead drops there run under heavy canopy and the service entrances can be decades older than anything in the newer developments.',
      'The subdivisions were largely built with underground supply, so those houses have no mast or weatherhead at all, and the trees planted with them are still comparatively small. The result is that the same storm produces limb damage and torn-off entrances in the old core while the newer streets lose nothing but the utility feed. We establish which you have before quoting, because the likely repair and the reconnect timeline are not comparable.',
    ],
    commonIntro:
      "Across Burlington's historic courthouse core and its newer subdivisions, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why does the old part of Burlington seem to suffer more storm damage?',
        a: 'Two reasons together. The trees around the courthouse core are far older and heavier than the planting in the newer subdivisions, so what comes down is bigger. And the older houses are on overhead service with masts and weatherheads to lose, while much of the newer building is fed underground and simply does not have those components. Either way the utility is Duke Energy Kentucky.',
      },
    ],
  },

  union: {
    intro:
      'Power out in Union after a storm? On these newer streets it is usually the utility, not your equipment. We will tell you straight. Call (513) 586-5107.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of subdivisions built from the 1990s onward — and it is worth being straightforward about what that means. Most of this housing was developed with underground supply, which removes the mast and the weatherhead, the two components responsible for the large majority of storm damage to residential electrical service. If your power is out in Union, the most likely explanation is a genuine utility outage rather than anything of yours being broken.',
      'So this is a neighborhood where we frequently tell people they do not need us. What remains possible is a fault at the meter base, damage in the underground run itself, or surge damage inside the panel from a nearby strike — and the line feeding your subdivision from the main road is often still overhead, so a tree can take out the whole street even where individual houses are underground. Worth a call to describe it, and often not worth a visit.',
    ],
    commonIntro:
      "Across Union's newer, largely underground-fed subdivisions, the storm-related electrical problems we are called for most often are:",
    localFaqs: [
      {
        q: 'My whole Union street is dark. Do I need an electrician?',
        a: 'Almost certainly not. On streets fed underground there is no mast or weatherhead to lose, and a whole dark street points at the utility line rather than at anyone’s own equipment. Report it and wait. It is worth calling us if your house alone is out while the neighbours have lights — that points at the meter base or the panel and is worth looking at. Report the outage itself to Duke Energy Kentucky.',
      },
    ],
  },

  walton: {
    intro:
      'Storm damage at the service on your Walton home? Southern edge of the metro, so lines come back late. We repair your side now. Call (513) 586-5107.',
    relevance: [
      'Walton (ZIP 41094) sits at the southern edge of the Boone County metro, with a historic core, newer subdivisions, and rural properties around them. Being at the edge has a consistent effect: restoration works outward from the denser areas, so the lines here are commonly among the later ones reached after a regional storm. That is worth planning around rather than waiting on, because the repair to your own equipment does not depend on the utility arriving.',
      'The three kinds of property need three different conversations. The historic core has older overhead services, some original. The subdivisions are frequently underground with no mast to lose. The rural properties sit back from the road on long private runs, and some are on wells — where losing power means losing water too, since a well pump is electric. Tell us which you have when you call and we will arrive equipped for it.',
    ],
    commonIntro:
      "Across Walton's historic core, newer subdivisions, and rural properties at the metro's southern edge, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Restoration always seems slow out in Walton. Is there anything I can do?',
        a: 'Not about the utility side — being at the edge of the metro genuinely means later in the sequence. What you can control is your own equipment. If your mast or meter box is damaged, having it repaired and inspected while the line is still out means you are ready the moment power reaches the street rather than starting the process then. Duke Energy Kentucky is the utility here, with its own restoration sequence.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Storm-damaged mast or meter base in Mount Carmel? Clermont County and Union Township handle the permit, not Hamilton. Call (513) 586-5107.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community in Clermont County near the I-275 corridor, and the county line is the first thing to establish. Permits and inspections here go through Clermont County and Union Township rather than Hamilton County or the city of Cincinnati, and an electrician who works mostly on the Hamilton County side can file out of habit with the wrong authority. Duke will be looking for the sign-off before reconnecting, so a misfiled permit means waiting while it is redone.',
      'The housing is established mid-century and newer, so services span both overhead and underground arrangements depending on the age of the street. Sitting near the I-275 corridor also means more open ground than the older inner neighborhoods, so where houses are overhead the wind tends to work on fixings and pull entrances out of true rather than limbs snapping things outright — damage that looks like nothing and still stops a reconnect.',
    ],
    commonIntro:
      "Across Mount Carmel's mid-century and newer homes near the I-275 corridor, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Is my Mount Carmel permit a Hamilton County one?',
        a: 'No. Mount Carmel is in Union Township, Clermont County, so the permit and inspection go through Clermont rather than Hamilton County or the city. It is a common mix-up for contractors who work mostly on the Cincinnati side, and the cost of getting it wrong is a delay while the filing is redone rather than any problem with the work.',
      },
    ],
  },

  summerside: {
    intro:
      'Storm damage at the service on your Summerside home? Wide suburban lots mean long drops. Clermont County handles the permit. Call (513) 586-5107.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, in suburban neighborhoods of mid-century and newer homes on lots considerably wider than the city grid. Wide lots mean long overhead drops — more span between the pole at the road and a house set back from it — and a longer span is simply more line for a falling limb to catch. It is the clearest reason suburban houses lose their own equipment while the street stays lit.',
      'The permit and inspection go through Clermont County and Union Township rather than Hamilton County, which is worth confirming before work is scheduled rather than after. Where the newer sections were developed with underground supply there is no mast or weatherhead to lose at all, so those houses only go dark when the utility does or when there is a fault at the meter or in the panel.',
    ],
    commonIntro:
      "Across Summerside's wide-lot mid-century and newer homes in western Clermont County, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why do suburban houses like mine in Summerside lose power when the street does not?',
        a: 'Long drops. Where the pole is at the road and the house sits well back, there is far more overhead line on your property than on a narrow city lot, and that span is what a falling limb catches. Keeping limbs clear of it helps, and surge protection at the panel deals with the other half — what a near strike sends through everything inside.',
      },
    ],
  },
};
