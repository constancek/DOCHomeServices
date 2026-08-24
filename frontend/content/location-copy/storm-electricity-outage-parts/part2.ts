import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 2 — uptown, the hilltop neighborhoods north and east of downtown, and
// the east-side squares. Angles drawn from each neighborhood's real housing
// stock and terrain in content/locations.ts.
export const part2: Record<string, LocationServiceCopy> = {
  'mount-auburn': {
    intro:
      'Storm damage to the service on your Mount Auburn home? Duke restores the line and stops at the meter — the rest is a licensed electrician’s work. Same-day repair on the hilltop above downtown. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising north of downtown and Over-the-Rhine in grand 19th-century homes and historic mansions. What matters after a storm is that a great many of those houses were divided into apartments decades ago, and the electrical service was divided with them. A single original service entrance on a tall masonry wall now feeds a bank of meters, so one damaged mast takes several households dark at once and the repair belongs to whoever owns the building rather than to whoever noticed first.',
      'The buildings themselves are also taller than the frame houses on most Cincinnati streets, which puts the weatherhead well up a three- or four-storey wall and often above roof level. That is not a ladder job, and on the hilltop the wind that damaged it in the first place is the same wind we have to work in. We assess from the ground, establish who owns the equipment, and price the whole entrance rather than the visible break.',
    ],
    commonIntro:
      "In Mount Auburn's subdivided 19th-century houses, where one original service entrance feeds a bank of meters, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Mount Auburn building has several apartments and the whole place lost power in the storm. Who arranges the repair?',
        a: 'The building owner, because the mast and the meter bank feeding all the units are the building’s equipment rather than any one tenant’s. If you rent, the useful call is to your landlord or property manager, and we are happy to speak to them directly. Where a house has been split into separately owned units, it is generally a shared cost, and it is worth agreeing that before the work rather than after.',
      },
    ],
  },

  clifton: {
    intro:
      'Only your Clifton house is dark after the storm? That points at your own mast or meter base, not Duke’s line. We reach the streets around Ludlow Avenue and the Gaslight District the same day. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop by the University of Cincinnati, and "leafy" is not a decoration here — it is the reason this neighborhood produces more single-house outages than almost anywhere we work. The Gaslight District streets around Ludlow Avenue were laid out with trees more than a century ago, and that canopy now closes over the roadway and the overhead service drops together. A summer squall does not need to fell a whole tree in Clifton. One heavy limb coming down onto a drop is enough, and the drops here are the ones sitting directly underneath.',
      'The houses add to it. These are large Victorian and early-1900s homes, tall enough that the service entrance is high on the wall, and a good number of them are rentals near campus. That combination slows repairs down for a reason that has nothing to do with electrical work: the person who calls is often a tenant who cannot authorise anything. We will look at the damage and quote it, but the owner has to give us the go-ahead before Duke will see a permit.',
    ],
    commonIntro:
      "Under Clifton's Gaslight District canopy, where mature limbs sit directly over the service drops, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'I rent in Clifton and the storm took the power out to my house only. What can I actually do?',
        a: 'Report it to your landlord or management company straight away, and ask them to call us rather than waiting. Repairs to the mast, the weatherhead, or the meter base need the property owner to authorise the work and the permit, so a tenant calling an electrician directly usually adds a day rather than saving one. If it turns out the fault is inside the unit and not at the service, that is a faster conversation, and we can tell you which it is from the outside.',
      },
    ],
  },

  corryville: {
    intro:
      'Storm damage to the electric service on your Corryville building? We repair masts, entrance cables, and meter banks around Short Vine and get the inspection Duke needs. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right against the University of Cincinnati along the Short Vine corridor, and it is about as densely built as Cincinnati gets — early-1900s houses, purpose-built apartments, and student rentals packed tight with shared walls and shared stacks. Electrically, that density means multiple meters per building and service entrances squeezed into narrow side gaps and rear alleys. When a storm damages one, the outage is rarely confined to a single household, and the access to fix it is rarely straightforward.',
      'Almost everything here is tenanted, which shapes how these jobs actually run. We are usually called by a resident who has no authority to approve work, on a building owned by someone who may not be in the city. The fastest version of this is a property manager calling us with the address and the go-ahead in the same conversation. We will still take the call from a tenant and look at it, but the permit and the reconnect both need the owner.',
    ],
    commonIntro:
      "In Corryville's dense, tenanted buildings near campus, where several meters share one service entrance, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Several units in my Corryville building are dark but the street is fine. Is that one problem or several?',
        a: 'Almost certainly one. Where several units are out together and the neighbours have power, it points at the shared service entrance or the meter bank feeding those units rather than anything inside individual apartments. That is a single repair, which is good news — one permit, one inspection, one Duke visit. It also means it needs the building owner to authorise it rather than each tenant chasing it separately.',
      },
    ],
  },

  northside: {
    intro:
      'Storm damage at the meter or a flooded panel in Northside? We repair both, off Hamilton Avenue and down toward the Mill Creek valley, and handle the inspection before Duke reconnects. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) runs along Hamilton Avenue in late-1800s and early-1900s homes, and its streets fall away toward the Mill Creek valley. That slope is what makes storm calls here different from the hilltop neighborhoods. A bad storm in Northside frequently brings two problems to the same house — wind damage to the service entrance above, and water in the low basement where the panel lives — and homeowners tend to report only the one they noticed first.',
      'The distinction matters because the repairs follow different rules. A bent mast is rebuilt and inspected. A panel that has been standing in water is replaced, not dried out and re-energised, because water gets into the breakers and behind the bus where it keeps corroding long after the surface looks fine. An inspector will check for exactly that before Duke puts the meter back, so on the lower streets we look at both ends of the system in one visit rather than fixing the roof and discovering the basement afterwards.',
    ],
    commonIntro:
      "On Northside's streets falling toward the Mill Creek valley, where wind and water often hit the same house, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'My Northside basement flooded and the power is out. Which gets fixed first?',
        a: 'We look at both before quoting either, because the answer changes the job. If the panel went under water it is being replaced regardless of what happened to the mast, and there is no sense rebuilding a service entrance onto equipment the inspector is going to condemn an hour later. Expect the panel to be the bigger part of that repair, and expect us to say so at the estimate rather than partway through.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Storm-damaged service on your College Hill home? Duke will not reconnect until a licensed electrician repairs it. We cover the streets along Hamilton Avenue and Belmont the same day. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, and its housing splits two ways: large early-1900s homes alongside mid-century houses built decades later. That mix is the practical thing to know after a storm, because two houses on the same College Hill street can have entirely different service arrangements and need entirely different repairs. The older homes carry tall entrances high on the wall, often reworked more than once. The mid-century houses have lower, simpler services, frequently still the original equipment and sized for the loads of the 1950s.',
      'Being on the hilltop means the wind arrives with little to break it, and the trees planted with the mid-century streets are now full-grown over the drops. We see the same pattern here every storm season: not widespread damage, but individual houses losing a mast or a weatherhead while the rest of the street is untouched. Those are the outages people assume the utility will handle, and then wait days on.',
    ],
    commonIntro:
      "Across College Hill's mix of early-1900s and mid-century homes, where service vintages differ house to house, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My College Hill house is from the 1950s and still on its original service. Is a storm repair a good time to upgrade?',
        a: 'Usually, yes. The expensive parts of this job are the labour, the permit, and the inspection, and you pay those whether we rebuild what was there or install a properly sized modern service. Putting original 1950s equipment back on a house that now runs central air, a heat pump, or an EV charger means paying that same set of costs again before long. We will quote both so you can see the difference rather than take our word for it.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Storm damage to the service on your Walnut Hills building? We repair masts, entrance cables, and meter banks around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood northeast of downtown, built out in grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of that housing has been split into units, and the electrical service was split with it — one original entrance now feeding a bank of meters. After a storm that has a specific consequence worth understanding: several apartments go dark together, and none of the residents owns the equipment that failed.',
      'The buildings are also masonry rather than frame, which changes the repair itself. A mast anchored into brick is a different job from one lagged to a wooden wall — the fixings, the sealing where the conduit passes through, and the flashing all have to be done for masonry, and doing it the quick way is how water starts tracking down inside a wall that has stood for a century. We repair it properly and reseal it, because the inspector will look and because the alternative shows up as a damp problem two years later.',
    ],
    commonIntro:
      "In Walnut Hills' historic masonry buildings and subdivided houses, where one entrance feeds several meters, the storm damage we see most often is:",
    localFaqs: [
      {
        q: 'Does it matter that my Walnut Hills building is brick rather than frame?',
        a: 'For a storm repair it matters a good deal. A service mast anchored into brick needs masonry fixings, proper sealing where the conduit enters, and flashing suited to the wall — done carelessly, the repair becomes the reason water starts tracking inside the wall. It is also slower work than the equivalent on frame, so if you are comparing quotes and one is notably cheaper, it is worth asking how they intend to anchor and seal it.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Street back on but your East Walnut Hills home still dark? The break is on your side of the meter. We work Woodburn Avenue and DeSales Corner the same day. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is the east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s houses, brick apartment buildings, and tree-lined streets. Those three facts combine into a specific storm profile. The canopy over the streets puts mature limbs directly above the overhead drops. The houses are tall, so the service entrance sits high. And the apartment buildings are masonry, so a mast repair here means masonry anchoring and proper sealing rather than a straightforward swap.',
      'The other thing about these houses is what is inside them. Large early-1900s homes in this neighborhood tend to have finished lower levels, original woodwork, and a lot of expensive equipment on the electrical system — furnaces with control boards, heat pumps with inverters, and whole-house electronics. A near strike that puts a surge through the panel can leave the outside looking untouched and still cost more than the mast repair that got the lights back on. That is the case for whole-home surge protection at the panel, and this is the neighborhood where the sums most clearly favour it.',
    ],
    commonIntro:
      "In East Walnut Hills' stately homes and brick apartment buildings under mature street trees, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'The power came back to my East Walnut Hills house but the furnace and a few things did not. What happened?',
        a: 'That pattern usually means a surge rather than a service fault — a spike came through the line and took out control boards while leaving the wiring itself fine. Furnace and heat pump boards, oven controls, and anything with a processor are the usual casualties. It is worth having the panel checked as well, because a surge strong enough to kill several boards has sometimes damaged breakers on the way through.',
      },
    ],
  },

  avondale: {
    intro:
      'Storm damage to the service on your Avondale home or building? Duke restores the line, then a licensed electrician repairs your mast or meter base before they reconnect. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core beside the major hospitals and the Cincinnati Zoo, in densely built early-1900s houses and apartment buildings, a good deal of it rental. Being next to critical facilities has an effect on storm outages that most people never hear explained: utilities restore the circuits feeding hospitals and other essential services first. That is the right priority, and for Avondale residents it often means the lines nearby come back quickly — which makes it much more obvious, much sooner, when your own house is the one still dark.',
      'And when that happens the reason is almost always your own equipment. A drop restored to the pole is no use if the mast it attaches to is bent or the meter box has come away from the wall, and Duke will not reconnect to either. On the denser blocks the additional wrinkle is that many buildings run several meters from one entrance and are tenant-occupied, so the repair needs the owner to authorise it even though the residents are the ones without power.',
    ],
    commonIntro:
      "In Avondale's dense uptown blocks near the hospitals, where nearby circuits are restored early, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'The hospital area near me had power back quickly but my Avondale house is still out. Why?',
        a: 'Two separate things are going on. Utilities do restore circuits serving hospitals and other critical facilities first, so lines in this part of uptown often come back early. But if your house is still dark once the neighbours are lit, the remaining fault is on your own equipment — the mast, the weatherhead, the cable, the meter box, or the panel. Duke cannot reconnect to damaged customer-owned equipment no matter how quickly they restored the line to the pole.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Storm damage at the mast or meter base on your Hyde Park home? We repair it, handle the permit and inspection, and coordinate the Duke reconnect. Same-day near Hyde Park Square. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is built around Hyde Park Square along Erie Avenue in large early-1900s houses — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. Those trees are old enough and big enough that limb damage to overhead service equipment is the routine storm call here, not the unusual one. The houses are tall and often masonry or part-masonry, so the entrance sits high and the repair needs proper anchoring and sealing rather than a quick refit.',
      'What sets Hyde Park apart is the value sitting on the electrical system. Homes this size commonly run multiple HVAC zones, finished lower levels, and a great deal of equipment with control boards in it, and a surge from a nearby strike goes through all of it at once. We have replaced a mast for a few hundred and then watched the same homeowner spend several thousand on furnace boards, a heat pump inverter, and appliances a week later. Whole-home surge protection at the panel is the cheapest thing we install, and in this neighborhood it is the one most likely to pay for itself.',
    ],
    commonIntro:
      "In Hyde Park's large, established homes under mature street trees, the storm damage we handle most often is:",
    localFaqs: [
      {
        q: 'Is whole-home surge protection actually worth it on a Hyde Park house?',
        a: 'On a house with multiple HVAC zones, a finished lower level, and a lot of equipment running on control boards, the arithmetic is straightforward. Surge protection at the panel costs a fraction of one furnace board, and a single nearby strike can take out several boards, an inverter, and assorted appliances in one go. If we are already at the house rebuilding a service after a storm, that is the cheapest moment to add it, since the panel is open and the labour is already committed.',
      },
    ],
  },

  oakley: {
    intro:
      'Only your Oakley house is dark after the storm? That means your own mast, meter base, or panel. We repair it around Oakley Square and Madison Road the same day. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) runs around Oakley Square and Madison Road in streets of early-1900s bungalows and brick homes, with newer development mixed in. The bungalows have a particular storm profile worth knowing about. Their rooflines are low, so the service mast is short and often mounted on the side wall rather than run up through the roof — which is generally good news, because a shorter mast has less leverage on it when a limb lands and the repair is more straightforward than on a tall three-storey entrance.',
      'The newer development changes the answer on the same street, though. Recent building in Oakley frequently has underground service, and that has no mast to break at all. When those houses lose power in a storm it is either a genuine utility outage or a fault at the meter or panel rather than anything overhead. Duke also schedules underground work differently and with more lead time, so the repair can be simpler while the reconnect takes longer. We tell you which arrangement you have before quoting, because the timelines are not comparable.',
    ],
    commonIntro:
      "Across Oakley's low-roofed bungalows and its newer underground-fed streets, the storm damage we are called for most often is:",
    localFaqs: [
      {
        q: 'My Oakley house is newer and has underground service. Can a storm still knock my power out?',
        a: 'Yes, though differently. There is no mast or weatherhead to be damaged, so you will not get the classic torn-off service entrance. What you can get is damage at the meter base, a fault in the underground run itself, or surge damage in the panel from a nearby strike. If the neighbours have lights and you do not, it is still worth having looked at — and be aware that Duke schedules underground work with more lead time, so getting into the queue early matters just as much.',
      },
    ],
  },
};
