import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 3 — the east-side hilltops and river neighborhoods, Westwood, and the
// separate municipalities northeast of the city, where the permit and
// inspection path is not Cincinnati's.
export const part3: Record<string, LocationServiceCopy> = {
  'mount-lookout': {
    intro:
      'Storm damage to the mast or meter base on your Mount Lookout home? Duke restores the line and stops there. We repair the rest, near Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) sits on the east-side hilltop around Mount Lookout Square, with Ault Park on its edge and quiet, genuinely hilly streets running off it. Two features of that terrain shape the storm calls. Ault Park holds a large stand of mature trees right against the residential streets, so the neighborhood carries heavy canopy on its park side rather than only the street trees you would expect. And the hillside lots mean service drops frequently span an awkward grade, running further and at a steeper angle than the same drop on flat ground.',
      'A longer span at an angle puts more load on the mast when anything lands on the line, which is why the damage here tends to be the mast and its mounting rather than the cable. On a sloped lot it also affects how we work: where the pole is uphill or downhill of the house, the reach and the setup change, and we would rather look at that before scheduling than send a crew that cannot get a ladder where it needs to be.',
    ],
    commonIntro:
      "On Mount Lookout's hilly streets and the blocks backing onto Ault Park, where drops span an awkward grade, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'The trees behind my Mount Lookout house are in Ault Park. Who deals with limbs off those?',
        a: 'Trees in the park are the Cincinnati Park Board’s, and a limb from one that has taken your service down is worth reporting to them as well as to Duke. What none of that changes is the repair on your side: if the mast or meter box is damaged, Duke will not reconnect until a licensed electrician has fixed it and it has been inspected, regardless of whose tree caused it. Photograph everything before it is cleared, because it matters for both the insurance claim and any conversation about the tree.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Storm damage at the service on your Columbia-Tusculum home? We repair masts and meter bases on Cincinnati’s oldest streets without wrecking restored trim. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is the oldest neighborhood in Cincinnati, settled in 1788, and it is known for its Painted Ladies — Victorian houses whose owners have put serious money into restoring the exteriors. That is the thing to understand about a storm repair here. A service mast has to be anchored into a wall, sealed where it passes through, and flashed properly, and the quick version of that job leaves fixings, sealant, and conduit straight across restored clapboard and decorative trim that took someone a fortune to bring back.',
      'So we plan the fixings and the route before we start, use the existing penetrations where they are sound, and reseal in a way that will not be the reason paint starts lifting next summer. The neighborhood also sits low near the Ohio River, which means storms that bring high water as well as wind put water into basements where panels sit — and submerged electrical equipment is replaced rather than dried out, whatever it looks like on the surface.',
    ],
    commonIntro:
      "In Columbia-Tusculum's restored Victorian houses on low ground near the river, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Will replacing the service mast on my Painted Lady damage the restored exterior?',
        a: 'It does not have to, and it is worth asking any electrician how they intend to handle it. We reuse sound existing penetrations wherever possible, plan the conduit route so it is not running across decorative trim, and seal and flash properly rather than relying on a bead of caulk. On a restored house the repair should be invisible from the street once it is finished, and if we think that is not achievable on your wall we will tell you before we start.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Street back on but your Mount Washington home still dark? That is your own equipment. We reach the far east side along Beechmont Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a settled far-east-side neighborhood along Beechmont Avenue, built out in single-family homes running from the early 1900s through the mid-century. Its position on the eastern edge of the city has a practical consequence in a regional storm: when weather crosses the whole Tri-State, restoration works outward, and the neighborhoods at the edges are commonly reached later than the uptown core. That is not a complaint about Duke, it is how a large restoration is sequenced — but it means a Mount Washington homeowner can spend an extra day assuming the utility will get to them when the remaining fault is actually on their own mast.',
      'The housing reinforces it. Homes from that era were given electrical services sized for the loads of the time, and plenty here are still on original or first-replacement equipment. A storm that damages an already-marginal service is the moment to decide whether to rebuild it as it was or bring it up to what the house now draws, because the labour, the permit, and the inspection cost the same either way.',
    ],
    commonIntro:
      "Across Mount Washington's early-1900s and mid-century homes on the city's eastern edge, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Should I keep waiting for Duke, or is my Mount Washington outage my own problem?',
        a: 'Look at your immediate neighbours. If their lights are on and yours are not, waiting will not help — the fault is on equipment you own and Duke cannot reconnect to it until an electrician repairs it. If the whole street is dark, it is a utility outage and out on this edge of the city it may simply be later in the sequence, so report it and wait. The window test is the fastest way to tell, and it costs nothing.',
      },
    ],
  },

  madisonville: {
    intro:
      'Storm-damaged mast or meter base in Madisonville? We repair it, pull the permit, and coordinate the reconnect along Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) has seen steady reinvestment along Madison Road, and that produces a specific situation we run into here more than in most neighborhoods. A great many of these early-1900s houses have been renovated in the last decade or two, and a renovation usually replaces the panel inside while leaving the service entrance outside exactly as it was. The homeowner reasonably believes the electrical system is modern, because the part they can see is. The mast, the weatherhead, and the entrance cable are frequently still the originals.',
      'Storms find that mismatch. The new panel is fine and the hundred-year-old entrance above it is what fails, and Duke will not reconnect to it. The reverse also happens on the newer infill houses mixed into these streets, where there is no mast at all and the fault is at the meter or in the panel. Either way we look at the whole path from the drop to the breakers rather than the one part that was obviously replaced recently.',
    ],
    commonIntro:
      "In Madisonville's renovated early-1900s houses, where a modern panel often sits under an original service entrance, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'My Madisonville house was renovated and the panel is new. Why did the storm still take my power out?',
        a: 'Because a renovation almost always replaces the panel inside and leaves the service entrance outside untouched. The mast, the weatherhead, and the cable running down to the meter may well be the originals from the 1910s, sitting above a panel from 2018. Storm damage lands on the old part, and Duke will not reconnect to it no matter how new the panel is. It is worth having the entrance looked at properly rather than assuming the renovation covered it.',
      },
    ],
  },

  'pleasant-ridge': {
    intro:
      'Storm damage to the service on your Pleasant Ridge home or two-family? We repair masts, entrance cables, and meter banks off Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable neighborhood along Montgomery Road, with tree-lined streets of early-1900s houses and a large number of classic Cincinnati brick two-families. On that two-family form the electrical service commonly comes in at the rear, off the alley, rather than at the front of the house — and that is the detail worth knowing after a storm. Damage to a rear-fed service entrance is invisible from the street and from the sidewalk, so it frequently goes unnoticed for the best part of a day while the owner assumes the outage is the utility’s.',
      'If your lights are out and the neighbours have theirs, it is worth walking round the back and looking up before you call anyone. A meter box hanging away from the wall, a bent length of conduit, or a cable pulled loose at the weatherhead tells you immediately that this is a repair rather than a wait. On a two-family it also tells you the other unit is probably out for the same reason, which is one repair rather than two.',
    ],
    commonIntro:
      "In Pleasant Ridge's brick two-families, where the service is usually fed from the alley at the rear, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Both halves of my Pleasant Ridge two-family lost power. Is that one repair?',
        a: 'Almost always, yes. Where both units go dark together and the neighbouring houses are fine, it points at the shared service entrance or the meter bank at the rear rather than anything inside either unit. That is a single job with one permit, one inspection, and one Duke visit, which is faster and cheaper than two owners each arranging their own. Worth agreeing how the cost is split before the work starts rather than afterwards.',
      },
    ],
  },

  westwood: {
    intro:
      'Only your Westwood house is dark after the storm? Check your immediate neighbours, not the neighborhood. We cover the west side along Harrison Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread right across the west side along Harrison Avenue, from the historic homes near Westwood Town Hall out to street after street of early-1900s and mid-century houses. Its size changes how you should read an outage here. Duke restores an area this large in sections, so it is entirely normal for one part of Westwood to have power back while another part is still waiting — which makes "is Westwood back on?" the wrong question to ask.',
      'The window test still works, but you have to apply it to the houses either side of you rather than to the neighborhood as a whole. If the two homes next door are lit and yours is not, the remaining fault is on your own equipment and no amount of waiting will fix it. If your whole block is dark, it is still a utility restoration and your section has not been reached yet. Getting that right is the difference between calling an electrician today and calling one in three days.',
    ],
    commonIntro:
      "Across Westwood's older and mid-century homes, in a neighborhood large enough that Duke restores it in sections, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Part of Westwood has power and part does not. How do I know which problem I have?',
        a: 'Judge it by the houses immediately either side of you, not by the neighborhood. Westwood is big enough that Duke restores it in sections, so another part being lit tells you nothing about your block. Neighbours on both sides with lights and you without means the fault is on your own mast, meter box, or panel. A whole dark block means the utility has not reached your section yet, and the right move is to report it and wait.',
      },
    ],
  },

  norwood: {
    intro:
      'Storm damage to your service in Norwood? Norwood is its own city with its own permits and inspector — we handle that, and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, and after a storm that separateness is the single most practical thing to know. Electrical permits and inspections here go through Norwood, not through Cincinnati, and the two do not share a queue or a schedule. An electrician who works mostly downtown and files the paperwork out of habit can lose you a day finding that out. We pull Norwood permits and deal with the Norwood inspector, and after a regional storm the smaller queue can genuinely work in your favour.',
      'The housing is dense early-1900s homes and brick two-families on small lots, laid out when this was a streetcar and factory town. Tight spacing means one tree reaches several roofs, and rear-fed services on narrow lots leave little room to work. Where a two-family runs several meters from one entrance, one repair covers both households — worth establishing early, because it decides who authorises the work and how the cost falls.',
    ],
    commonIntro:
      "In Norwood's dense grid of early-1900s homes and brick two-families, on its own permit and inspection schedule, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Does it matter that Norwood is a separate city from Cincinnati?',
        a: 'For this repair it matters quite a bit. The permit and the inspection go through Norwood rather than Cincinnati, on Norwood’s own schedule with Norwood’s own inspector, and Duke will be looking for that sign-off before reconnecting. It is worth asking any electrician you call whether they have pulled Norwood permits before. The upside is that a smaller municipal queue can move faster than the city’s after a storm that hit the whole region.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Storm damage at the mast or meter base in Blue Ash? We repair it, handle the city permit and inspection, and coordinate the Duke reconnect. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a northeast-side city of established mid-century neighborhoods alongside newer subdivisions, on lots noticeably wider than the city grid closer in. Wide lots mean longer service drops — more span between the pole and the house, and more span for a falling limb to catch. The trees planted when those mid-century streets went in are now at full height directly over those runs, which is why the storm damage here clusters on individual houses rather than whole blocks.',
      'The newer subdivisions behave differently. A lot of recent building in Blue Ash was done with underground service, and those houses have no mast or weatherhead to lose. When they go dark in a storm it is either a genuine utility outage or a fault at the meter or in the panel, and Duke schedules underground work with more lead time than overhead. Permits and inspections here go through Blue Ash rather than Hamilton County or the city, which is one more reason to have someone who has done it before.',
    ],
    commonIntro:
      "Across Blue Ash's wide-lot mid-century streets and its newer underground-fed subdivisions, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'Why does my Blue Ash house seem to lose power when the neighbours do not?',
        a: 'Wide lots are the usual reason. A longer overhead drop between the pole and the house gives a falling limb more line to catch, and mature subdivision trees are now standing right over those runs. That produces exactly this pattern — single houses out while the street is fine. If that is happening repeatedly, it is worth looking at whether limbs can be kept off the drop, and at whole-home surge protection for what a near strike does to everything inside.',
      },
    ],
  },

  montgomery: {
    intro:
      'Storm damage to the service on your Montgomery home? We repair masts and meter bases, including in the historic district where the exterior matters. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) has a preserved historic district of 19th-century buildings at its core, with established and newer neighborhoods around it. That historic designation is worth raising before work starts rather than after, because in a designated district the visible exterior is regulated — and a service mast, its conduit, and the meter box are all visible exterior. Replacing like for like in the same position is generally the straightforward path; moving a service entrance or changing how it looks from the street can involve more than an electrical permit.',
      'Outside the historic core the housing runs from decades-old subdivisions to newer building, so the answer changes street to street: older overhead services with masts to lose, and newer sections frequently fed underground with nothing overhead at all. Permits and inspections are Montgomery’s own rather than the county’s. We establish which situation your house is in, and whether the historic district applies, before quoting anything.',
    ],
    commonIntro:
      "In Montgomery's historic core and the established streets around it, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My house is in the Montgomery historic district. Does that complicate a storm repair?',
        a: 'It can, and it is better to know at the start. Rebuilding the service in the same position and the same form is normally the simplest route, since the exterior appearance does not change. Where a storm has destroyed the old arrangement entirely, or where the sensible modern service would look different from the street, there may be more to it than an electrical permit. We will flag it at the estimate rather than discovering it partway through the job.',
      },
    ],
  },

  madeira: {
    intro:
      'Storm-damaged service on your Madeira home? Duke will not reconnect until it is repaired and inspected — and Madeira runs its own inspections. Call (513) 586-5107.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city built largely of mid-century single-family homes on quiet, tree-lined streets, and it is small enough that its building department is small too. That is the local factor that actually decides how long a Madeira outage lasts. The electrical repair is usually a day. The inspection has to fit into the schedule of a compact municipal department, and after a storm that hit the whole region every damaged house in the city is trying to book the same slots.',
      'So the sequencing matters more here than the labour does. We pull the Madeira permit and book the inspection at the same time as scheduling the work rather than once the work is finished, which is the single thing that most shortens the wait. The housing itself is straightforward — mid-century services, many still original, on lots with trees planted when the streets went in and now standing over the drops.',
    ],
    commonIntro:
      "Across Madeira's mid-century homes on tree-lined streets, where the inspection queue is small, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'How long will a storm repair take in Madeira?',
        a: 'The electrical work is usually a single day. What varies is the inspection, because Madeira is a small city with a compact building department, and after a regional storm every damaged property is competing for the same slots. That is why we book the inspection alongside the work rather than after it. If someone quotes you a day start to finish without mentioning the inspection, ask them how they plan to handle it.',
      },
    ],
  },
};
