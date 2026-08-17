import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 11 — the last of Butler and Warren counties, and the southeastern
// Indiana river cities. Indiana is served by Duke Energy Indiana, a separate
// operating company regulated by the Indiana Utility Regulatory Commission.
export const part11: Record<string, LocationServiceCopy> = {
  'new-miami': {
    intro:
      'Storm damage at the service on your New Miami home? Check which utility serves you — Hamilton’s municipal system is next door. Call (513) 586-5107.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami just north of Hamilton, an old mill community of closely spaced older homes. It shares Hamilton’s ZIP code, and that is worth pausing on, because much of Hamilton is served by the city’s own municipal electric utility rather than Duke Energy. Sitting immediately beside that territory means it is genuinely worth checking your bill before you report an outage, since telling the wrong utility costs you time at the worst possible moment.',
      'Beyond that, the village’s own character does the rest. Mill-community lots are narrow, so houses sit close together with short overhead spans, and one falling tree reaches several properties at once — damage here arrives in clusters along a street rather than singly. The Great Miami puts water into low levels where panels sit, and a panel that has been submerged is replaced rather than dried out, whichever utility is coming back to reconnect the meter.',
    ],
    commonIntro:
      "In New Miami's closely spaced mill-village homes beside the Great Miami, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Do I report a New Miami outage to Duke or to Hamilton?',
        a: 'Check your bill, because Hamilton’s municipal electric territory is immediately next door and the boundary is not obvious. Reporting to the wrong one wastes time. Whichever supplies you, the split is identical: they restore the line and the meter, and will not reconnect to a damaged mast, meter box or panel until a licensed electrician has repaired it.',
      },
    ],
  },

  monroe: {
    intro:
      'Storm damage at the mast or meter base in Monroe? The city sits in two counties, so the permit depends on your address. Call (513) 586-5107.',
    relevance: [
      'Monroe (ZIP 45050) straddles Butler and Warren counties along the I-75 corridor, which makes it one of the few cities where the county on your paperwork depends on which part of town you live in. After a storm that is not a technicality — a permit filed with the wrong county comes back and is refiled while you wait, at the point in the week when a day costs most. We confirm the authority for the specific address before anything goes in.',
      'The housing gives two different answers as well. The older town core has overhead services, some original, on tighter lots. The newer subdivisions along the corridor were largely developed with underground supply, so those houses have no mast or weatherhead to lose at all. The corridor itself is open ground, so where houses are overhead the wind tends to work fixings loose rather than limbs snapping things outright — damage that looks like nothing and still stops a reconnect.',
    ],
    commonIntro:
      "Across Monroe's older town core and its newer I-75 corridor subdivisions, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Which county handles the permit for my Monroe repair?',
        a: 'It depends on your address, because the city extends into both Butler and Warren counties. That is unusual enough that it is worth checking rather than assuming, and we confirm it before filing. Getting it wrong means the paperwork comes back and is redone, which after a storm is a day you would rather not lose.',
      },
    ],
  },

  landen: {
    intro:
      'Power out in Landen after a storm? On these planned streets it is usually the utility. Common areas belong to the association. Call (513) 586-5107.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community built from the 1970s and 80s onward around its lake and common areas, and both halves of that description matter. A development of that era was frequently laid out with underground supply, which removes the mast and the weatherhead — the two components behind most storm damage to residential service. If your power is out here, a genuine utility outage is the most likely explanation rather than anything of yours being broken.',
      'The common areas raise a second point. Lighting, pump equipment and any service feeding shared facilities belong to the homeowners association rather than to any individual owner, so damage to those is the association’s to authorise and pay for. If what is dark is the common area rather than your house, the useful call is to the association. We are happy to deal with them directly, and we would rather tell you that than send someone to look at equipment you do not own.',
    ],
    commonIntro:
      "Across Landen's planned, largely underground-fed streets and its shared common areas, the storm-related electrical problems we handle most often are:",
    localFaqs: [
      {
        q: 'My whole Landen street is dark. Do I need an electrician?',
        a: 'Almost certainly not. On streets fed underground there is no mast or weatherhead to lose, and a whole dark street points at the utility feed rather than anyone’s own equipment. Report it and wait. Call us if your house alone is out while the neighbours have lights — that points at the meter base or the panel and is worth looking at.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Storm damage at the service on your Loveland Park home? Same ZIP as Loveland, different county for the permit. Call (513) 586-5107.',
    relevance: [
      'Loveland Park (ZIP 45140) sits just north of Loveland near the Little Miami, and it shares Loveland’s ZIP while being in Warren County. That combination is exactly the kind of thing that costs a day after a storm: a contractor working from the postal address assumes the Loveland answer, files with the wrong county, and the paperwork comes back. We confirm the authority for the specific address before submitting anything.',
      'The Little Miami supplies the physical risk to the low ground here. It has a steep catchment and responds quickly to heavy rain, so water can arrive during the same storm rather than a day afterwards, and it reaches the levels where panels sit. Submerged equipment is replaced rather than dried out. The housing is mid-century, with services largely of that era and many still original under trees now well above roof height.',
    ],
    commonIntro:
      "Across Loveland Park's mid-century homes near the Little Miami, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My ZIP is 45140, the same as Loveland. Is my permit handled the same way?',
        a: 'Not necessarily. Loveland Park is in Warren County, and Loveland itself extends across more than one county, so the postal code is not a reliable guide to the authority. We check the specific address before filing. It is a small thing that turns into a lost day when it is wrong.',
      },
    ],
  },

  maineville: {
    intro:
      'Storm damage at the service on your Maineville property? Historic core, new subdivisions, and rural wells all need different answers. Call (513) 586-5107.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County with a small historic core, newer subdivisions around it, and rural property beyond that — three genuinely different situations for a storm repair. The historic core has older overhead services, some original, on buildings tall enough that the entrance may pass through the roof. The subdivisions were frequently developed with underground supply and have no mast to lose at all.',
      'The rural properties are the ones worth flagging on the phone. They sit back from the road on long private service runs, so damage can be anywhere along the line rather than at the house, and a good number are on private wells — meaning an outage takes your water with it, because the pump is electric. Septic pumps stop too. None of that is something we can tell from an address, and all of it changes how we prioritise and equip the visit.',
    ],
    commonIntro:
      "Across Maineville's historic core, newer subdivisions, and rural properties, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'What should I tell you when I call about a rural Maineville property?',
        a: 'Whether you are on a well, and roughly how far the house sits back from the road. The well matters because no power means no water, which raises the priority. The distance matters because on a long private run the damage is often out along the line rather than at the house, and knowing that in advance means we arrive able to trace it rather than making a second trip.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Storm damage at the service on your Pleasant Plain property? Rural, far out, and often on a well. We repair both ends. Call (513) 586-5107.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County with older homes and rural property around it, and it is among the most rural places we serve. Restoration works outward from the denser areas, so the lines here are consistently late in a regional storm — there is simply a long way to come. Planning around that beats waiting on it, because your own repair does not depend on a utility crew arriving.',
      'The rural property brings the well question, which changes the urgency considerably. A private well pump is electric, so no power means no water for washing, flushing or drinking, and a septic pump stops as well. Long private service runs also mean the damage may be somewhere out along the line rather than at the house. Both are worth saying on the phone so we arrive with the right expectations and the right equipment.',
    ],
    commonIntro:
      "Across Pleasant Plain's older village homes and the rural property around it, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Is it worth calling before the utility has reached Pleasant Plain?',
        a: 'Yes, if you can see damage on your own equipment. The lines out here genuinely are later in the sequence, and that part is not something either of us can speed up. What we can do is repair and inspect your mast, meter base or panel while the line is still down, so you are live the moment power reaches the village rather than starting the process then.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Storm damage at the service on your South Lebanon home? Brand-new subdivisions next to a 19th-century core. Call (513) 586-5107.',
    relevance: [
      'South Lebanon (ZIP 45065) sits on the Little Miami in Warren County, with a historic core and subdivisions expanding fast around it — and that produces about the widest span of service ages we deal with anywhere. Houses in the old core may be on entrances that are original or reworked decades ago. Houses a short distance away may be five years old, fed underground, with a modern panel and no mast or weatherhead in existence.',
      'The same storm therefore produces completely different outcomes within the same town. Old core: a limb takes an entrance off a wall, and the repair is a full rebuild with an inspection. New subdivision: nothing overhead to lose, and any outage is the utility’s or a fault at the meter or in the panel. The Little Miami adds water to the low ground near it, responding quickly to heavy rain, and a submerged panel is replaced rather than dried out.',
    ],
    commonIntro:
      "Across South Lebanon's 19th-century core and its fast-expanding new subdivisions, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My South Lebanon house is brand new. Why is my power out when the old part of town is back?',
        a: 'Newer streets are frequently fed underground, and underground work is scheduled with more lead time than overhead — so a fault on your feed can genuinely take longer to resolve than a snapped mast in the old core. It also means there is nothing of yours to repair in most cases. If your house alone is dark while the neighbours are lit, that is different and worth looking at.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Storm damage at the service on your Lawrenceburg property? Indiana means Duke Energy Indiana — a different utility. Call (513) 586-5107.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, with a downtown of 19th-century buildings behind a riverfront levee. The first thing to know is jurisdictional: Indiana is served by Duke Energy Indiana, a separate operating company from Duke Energy Ohio, with its own crews, its own restoration sequencing, and the Indiana Utility Regulatory Commission rather than PUCO as regulator. Permits and inspections follow Indiana rules and the local authority here, not Ohio’s.',
      'The levee changes the flood picture in a way worth understanding. It protects the downtown from the river itself, but any levee system relies on moving interior water out — and pumps need electricity. So a power outage arriving at the same time as high water is a compounding problem here rather than two separate ones, and that applies to your own sump pump as much as anything larger. The 19th-century buildings themselves have tall entrances, frequently through the roof.',
    ],
    commonIntro:
      "In Lawrenceburg's 19th-century downtown behind the levee, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Is my Lawrenceburg outage handled by the same Duke as Cincinnati?',
        a: 'No. Indiana is served by Duke Energy Indiana, a separate operating company with its own crews and scheduling, regulated by the Indiana Utility Regulatory Commission rather than Ohio’s PUCO. The rule that affects you is the same on both sides of the state line: they restore the line to the meter, and will not reconnect to a damaged mast, meter box or panel until a licensed electrician has repaired it.',
      },
    ],
  },

  greendale: {
    intro:
      'Storm damage at the mast or meter base in Greendale? Up the hillside, wind and limbs replace the flooding below. Call (513) 586-5107.',
    relevance: [
      'Greendale (ZIP 47025) adjoins Lawrenceburg but climbs the hillside above the Ohio, and that elevation inverts the problem. Down in Lawrenceburg the recurring risk is water and what it does to panels in low levels. Up here it is wind and limbs — the slope is wooded, the exposure is higher, and service drops run across a grade rather than level, which puts them under more tension and gives a falling limb more leverage on the mast.',
      'The steepness affects access as well as damage. On the steeper streets there may be nowhere to place a ladder at the angle we would want, so the setup can take longer than the repair — worth mentioning your street when you call so the visit is scheduled with enough time. As throughout Indiana, the utility is Duke Energy Indiana rather than Duke Energy Ohio, with separate crews and its own restoration sequence.',
    ],
    commonIntro:
      "On Greendale's wooded hillside streets above the river, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Why does Greendale get different storm damage from Lawrenceburg right below it?',
        a: 'Elevation and trees. Down by the river the recurring problem is water reaching panels in low levels. Up the hillside there is more wind exposure and a wooded slope directly over the drops, so the damage is masts and weatherheads rather than flooded equipment. Same storm, two entirely different repairs a few streets apart.',
      },
    ],
  },

  aurora: {
    intro:
      'Storm damage at the service on your Aurora home? 19th-century riverfront housing, Indiana rules, and a long way downstream. Call (513) 586-5107.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, with a riverfront downtown of 19th-century homes and buildings and the Hillforest mansion above it. Two things shape storm repairs here. The houses are genuinely old and tall for their footprint, so the service entrance sits high on the wall or passes up through the roof — and when a limb bends a mast at a roof penetration you have a wiring problem and an opening in the roof at the same time. The flashing and the seal are part of our job, not a roofer’s follow-up.',
      'The second is position. This is among the farthest points downstream we serve, in Indiana, which means Duke Energy Indiana — separate crews, separate sequencing, and restoration working outward from population centres well away from here. The low riverfront ground puts water into the levels where panels live, and submerged equipment is replaced rather than dried out. Both of those argue for getting your own repair started before the line comes back.',
    ],
    commonIntro:
      "In Aurora's 19th-century riverfront homes, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Do you really come out as far as Aurora?',
        a: 'Yes, and it is close to the western limit of what we cover. Be realistic about the utility timeline — Duke Energy Indiana restores outward from its own population centres, and this is a long way out. Our part is separate: if your mast, meter base or panel is damaged, we can repair and inspect it while the line is still down so you are ready the moment it goes live.',
      },
    ],
  },
};
