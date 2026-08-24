import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 8 — Clermont County east and south, then into Butler County. New
// themes: Amelia no longer having a village government, Milford straddling two
// counties, and Hamilton being served by the city's own utility rather than Duke.
export const part8: Record<string, LocationServiceCopy> = {
  withamsville: {
    intro:
      'Gas shut off in Withamsville? Clermont County inspects, not Hamilton. Call (513) 586-5107.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community in Clermont County along the State Route 125 corridor, and the jurisdiction is the first thing to settle: permits and inspections go through Clermont County rather than Hamilton County or the city of Cincinnati. Contractors who work mostly on the Hamilton County side default there out of habit, and the utility waits on the correct sign-off before it will reconnect.',
      'The housing spans a range of years, so the piping does too. On the older streets it is rigid black iron installed with the house, where a pressure test finds aged joints and capped stubs from appliances removed decades ago. On the newer streets it is often CSST, where the common finding is bonding to the electrical grounding system rather than a leak at all.',
    ],
    commonIntro:
      "Across Withamsville's mixed-era homes in Union Township, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Which county inspects gas work at my Withamsville house?',
        a: 'Clermont County — Withamsville is in Union Township, Clermont County, not Hamilton. It is a common default for contractors who mostly work the Cincinnati side, and getting it wrong means waiting while the filing is redone rather than anything wrong with the work itself.',
      },
    ],
  },

  milford: {
    intro:
      'Gas shut off in Milford? One city across two counties, on the Little Miami. Call (513) 586-5107.',
    relevance: [
      'Milford (ZIP 45150) is its own city and it straddles a county line — mostly Clermont, with a portion in Hamilton. Inside the city limits, Milford issues the permit and inspection regardless of which county your address falls in, so the county line is less of a trap than people expect. What does catch contractors out is assuming a township or county office when it is the city’s.',
      'The other local factor is the Little Miami. On the low ground near the river and the historic downtown, submerged appliance controls are a recurring cause of shutoffs, and a gas control valve that has been under water is replaced rather than dried out — the corrosion is internal, nothing shows from outside, and a control that works today can fail unsafely later.',
    ],
    commonIntro:
      "Across Milford's historic downtown, its river-adjacent streets and its newer subdivisions, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Milford address is in Hamilton County. Does that change the gas permit?',
        a: 'Not if you are inside the city limits — Milford issues the permit and inspection whether the address falls in Clermont or Hamilton County. What is worth confirming is that you are actually inside the city rather than in a neighbouring township, because that is where the authority genuinely changes.',
      },
    ],
  },

  mulberry: {
    intro:
      'Gas shut off in Mulberry? Miami Township and Clermont County sign it off. Call (513) 586-5107.',
    relevance: [
      'Mulberry (ZIP 45150) is an unincorporated Miami Township community in Clermont County, and it shares its ZIP with the city of Milford — which issues its own permits. Mulberry does not: permits and inspections here go through Miami Township and Clermont County, so the address rather than the postal code decides the office.',
      'The housing is largely mid-century and later, and on the older streets the piping is original black iron sized for the appliances of its day. That makes two diagnoses worth separating at a shutoff. A pressure test says whether the system leaks. A measurement at the appliances with several drawing at once says whether the run can deliver what the house now demands — and a system can pass the test and still be too small.',
    ],
    commonIntro:
      "Across Mulberry's mid-century and later homes in Miami Township, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Is my Mulberry permit a Milford one? We share a ZIP.',
        a: 'No. Milford is its own city and issues its own permits; Mulberry is unincorporated Miami Township, so it goes through the township and Clermont County. Both are in 45150, but the ZIP is a postal boundary with nothing to do with which office signs off. Filing in the wrong place means a delay while it is redone.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Gas shut off in Mount Repose? Capped lines from removed appliances fail tests. Call (513) 586-5107.',
    relevance: [
      'Mount Repose (ZIP 45150) is a Miami Township community in Clermont County of mid-century and later single-family homes, and the systems have been altered enough over the decades to accumulate loose ends. A gas dryer swapped for electric, a decommissioned space heater, a fireplace log set taken out during a remodel — each usually left a capped stub rather than a line taken back to the source.',
      'Those stubs are still on the system a pressure test covers, so a house where nothing has changed in years can fail a test on a cap installed in the 1970s. Locating one means isolating sections in sequence rather than opening walls on a hunch, and on a house where every appliance is fine it is often the whole job. Permits and inspections go through Miami Township and Clermont County.',
    ],
    commonIntro:
      "Across Mount Repose's mid-century and later homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'We removed a gas dryer from our Mount Repose house years ago. Could that be it?',
        a: 'It is one of the first places we look. A removed appliance usually leaves a capped stub rather than a line taken back to the source, and a cap that held for decades can begin to weep. Nothing in the house behaves differently, which is why a failed test surprises people — and it is generally a small repair once located.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Gas shut off in Day Heights? A red-tagged appliance is the usual cause. Call (513) 586-5107.',
    relevance: [
      'Day Heights (ZIP 45150) is a Miami Township community in Clermont County of mid-century and later homes, and the most common route to a shutoff here is an appliance rather than the pipe. A furnace with a cracked heat exchanger or a water heater with a failed gas control gets red-tagged, and service stays off until it is corrected and the system passes a test.',
      'Where the piping is sound that is a contained job — replace the appliance, pass the test, get it inspected, and Duke Energy Ohio reconnects. Occasionally the test finds a piping fault the appliance failure had been masking, which grows the scope, and that is why we test before quoting rather than starting work and coming back with a revised figure. Permits go through Miami Township and Clermont County.',
    ],
    commonIntro:
      "Across Day Heights' mid-century and later homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Our Day Heights furnace was red-tagged. Is that the whole job?',
        a: 'Usually, and the pressure test confirms it. Where the piping holds, replacing the appliance and passing the test clears the shutoff. Occasionally the test finds a piping fault the failing appliance had been masking, which grows the work — so we test first and give you one number rather than a revision partway through.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Gas shut off in New Richmond? Ohio River flooding reaches gas appliances. Call (513) 586-5107.',
    relevance: [
      'New Richmond (ZIP 45157) is a Clermont County village directly on the Ohio River, with old housing on genuinely low ground, and high water is the recurring reason gas goes off here. Where a furnace, boiler or water heater has been submerged, the gas control valve and burner controls are replaced rather than dried out and relit — the corrosion is internal, nothing shows from outside, and a control that works today can fail unsafely later.',
      'Because it is not a rare event, plenty of properties are on their second or third water heater in the same position, so the useful question during a replacement is whether the appliance can be raised. Venting is the limit. New Richmond issues its own permits and inspections, and being a small village that queue rather than the plumbing usually decides how quickly the gas comes back.',
    ],
    commonIntro:
      "On New Richmond's low riverfront ground, where flooding reaches gas appliances, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'How long does a New Richmond gas shutoff take to clear?',
        a: 'The testing and repair are often one day. The variables are the village inspection, which has limited capacity here, and then the utility’s reconnect visit after the sign-off. That is why we file and book the inspection when the work is scheduled rather than once it is finished.',
      },
    ],
  },

  amelia: {
    intro:
      'Gas shut off in Amelia? There is no village office any more — it is the county. Call (513) 586-5107.',
    relevance: [
      'Amelia (ZIP 45102) is a genuine jurisdiction trap, because it no longer has a village government. The village dissolved and its territory reverted to Batavia and Pierce Townships, so permits and inspections for gas work now go through Clermont County and the township rather than a village office. Anyone working from an older list of Clermont municipalities can still try to file with Amelia.',
      'That is a delay rather than a failure — the paperwork comes back and is redone while the house sits without hot water — but it is avoidable by asking. The housing is mid-century and later, so a pressure test turns up either aged black iron and capped stubs on the older streets or a CSST bonding issue on the newer ones, and we establish which before quoting.',
    ],
    commonIntro:
      "Across Amelia's mid-century and later homes, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Who issues the gas permit for my Amelia house now?',
        a: 'Clermont County, with the township, because Amelia dissolved as a village and its territory reverted to Batavia and Pierce Townships. There is no village office to file with any more. It catches out anyone working from an older list, and the cost is a delay while the filing is redone rather than a problem with the work.',
      },
    ],
  },

  batavia: {
    intro:
      'Gas shut off in Batavia? The county seat, and the village issues its own permits. Call (513) 586-5107.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat and its own village, so a point worth making plainly: being where the county offices sit does not mean the county issues your permit. Inside the village, permits and inspections are Batavia’s. Outside it, they are the township’s and the county’s — and the boundary matters more than the address looks like it should.',
      'The East Fork of the Little Miami runs through, and on the low ground near it submerged appliance controls are a recurring cause of shutoffs. A gas control valve that has been under water is replaced rather than dried out, because the damage is internal corrosion with nothing visible outside. The older housing near the village centre also carries a century of alterations and the capped stubs that come with them.',
    ],
    commonIntro:
      "Across Batavia's older village centre and the streets near the East Fork, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Batavia is the county seat. Does Clermont County issue my gas permit?',
        a: 'Only if your address is outside the village. Inside the village limits it is Batavia’s own permit and inspection, even though the county offices are here. It is a fair thing to get wrong, and the boundary is worth confirming before anything is filed rather than after.',
      },
    ],
  },

  owensville: {
    intro:
      'Gas shut off in Owensville? An old village core with a century of alterations. Call (513) 586-5107.',
    relevance: [
      'Owensville (ZIP 45160) is a small Clermont County village in Stonelick Township with a genuinely old core, and the gas systems there carry a century of changes. Every time an appliance was removed — a space heater, a dryer moved to electric, a decommissioned boiler — the line was usually capped where it stood rather than taken back to the source, and those stubs are still connected.',
      'A pressure test covers all of them at once, which is why a test can fail with every appliance in the house working perfectly. Owensville issues its own permits and inspections inside the village, and being small, that queue rather than the plumbing often sets how quickly the gas comes back — so we file and book it when the work is scheduled.',
    ],
    commonIntro:
      "In Owensville's old village core, on gas systems altered over a century, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Every appliance in my Owensville house works. Why did the gas test fail?',
        a: 'Because the test covers the pipe rather than the appliances. Old houses accumulate capped stubs wherever something was removed over the decades, and those are still part of the system. A cap that held for years can begin to weep without anything in the house behaving differently, and we isolate sections in sequence to find it.',
      },
    ],
  },

  goshen: {
    intro:
      'Gas shut off in Goshen? On rural land some properties run on propane. Call (513) 586-5107.',
    relevance: [
      'Goshen (ZIP 45122) is a Clermont County township community where suburban streets give way to genuinely rural land, and the first question is which you are on. Where there is a meter, your gas comes from Duke Energy Ohio and a shutoff is a utility disconnection cleared by testing, repairing and getting the system inspected.',
      'Further out some properties are on a propane tank with no gas main involved, and a loss of gas there is a supply or tank matter for your propane company rather than something we reconnect. We will say so on the phone rather than send someone out to tell you. Rural properties here also tend to have barns, workshops and garages on their own gas runs, and those are part of what a pressure test covers.',
    ],
    commonIntro:
      "Across Goshen's suburban streets and the rural land beyond them, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Our Goshen property has gas running out to a workshop. Does that matter?',
        a: 'It does, and it is better raised at the start. Secondary runs to workshops, barns and garages are part of the system a pressure test covers, and on rural properties they were often installed long ago to a standard that would not pass now — which makes them a likely place for a failure to sit. Planning for it beats finding it with the job half done.',
      },
    ],
  },

  moscow: {
    intro:
      'Gas shut off in Moscow? A tiny river village on very low ground. Call (513) 586-5107.',
    relevance: [
      'Moscow (ZIP 45153) is a very small Clermont County village directly on the Ohio River, and it has taken more than its share — high water on the low ground and the 2012 tornado that went through the village. For gas work the recurring cause is water: a submerged furnace or water heater has its gas control valve replaced rather than dried out, because the corrosion is internal and a control that works today can fail unsafely later.',
      'Being this small means minimal local inspection capacity, and that queue rather than the plumbing usually decides how quickly the gas comes back. Where several neighbouring properties need the same work after the same high water — which happens because the housing is uniformly low — handling them together saves days rather than each waiting separately.',
    ],
    commonIntro:
      "On Moscow's low riverfront ground, where flooding reaches gas appliances, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Several Moscow houses lost gas in the same high water. Worth coordinating?',
        a: 'It generally is, in a village this small. One plumber handling neighbouring properties together means shared setup, filings made as a batch, and an inspector covering several addresses in one visit. It does not change what each owner pays for their own appliances and piping, and it commonly saves several days.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Gas shut off in Newtonsville? A very small village with a small inspection queue. Call (513) 586-5107.',
    relevance: [
      'Newtonsville (ZIP 45158) is one of the smallest villages in Clermont County, a compact old core with rural land around it, and scale is what shapes the timeline on a gas shutoff. The testing and repair are frequently a single day. The inspection and then the utility’s reconnect visit are what you actually wait on, so we file and book the inspection when the work is scheduled rather than once it is finished.',
      'The housing in the core is old, with piping altered in stages and capped stubs left wherever an appliance was removed. On the rural land around it, some properties are on a propane tank rather than a gas main — and a loss of gas there is a supply matter for your propane company rather than a utility disconnection we can clear.',
    ],
    commonIntro:
      "Across Newtonsville's old village core and the rural land around it, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'How quickly can gas come back on in Newtonsville?',
        a: 'The plumbing is often a day. The wait is the inspection, in a village with very limited capacity, and then the utility’s reconnect visit after the sign-off. Booking the inspection at the same time as the work rather than at the end is the main thing that shortens it.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Gas shut off in Williamsburg? Old houses often still have gas-lighting pipe. Call (513) 586-5107.',
    relevance: [
      'Williamsburg (ZIP 45176) is one of the older settlements in Clermont County, a village on the East Fork with genuinely old housing, and plenty of those houses were originally lit by gas. When electric lighting arrived those lines were capped at the wall rather than removed, because taking them out meant opening plaster throughout — so a century and a half later they are still on the system.',
      'A pressure test tests them along with everything else, which is why a test can fail with every appliance in the house working perfectly. Locating one takes patience: we isolate sections rather than opening original plaster speculatively. Williamsburg issues its own permits and inspections inside the village.',
    ],
    commonIntro:
      "In Williamsburg's old village housing, where abandoned gas-lighting lines often remain, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Could old gas-lighting pipe be why my Williamsburg test failed?',
        a: 'It genuinely could. Houses of this era were lit by gas, and the lines were usually capped at the wall rather than removed when electric arrived, so they are still connected. A cap that has held for a century can begin to weep. We isolate sections to narrow it down rather than opening plaster on a guess.',
      },
    ],
  },

  bethel: {
    intro:
      'Gas shut off in Bethel? Honest repair-or-replace numbers on older appliances. Call (513) 586-5107.',
    relevance: [
      'Bethel (ZIP 45106) is a village in southern Clermont County with older housing and rural land around it, and the shutoffs we are called for here are mostly appliance-driven: a furnace or water heater well past its expected life gets red-tagged, and service stays off until it is corrected and the system passes a test.',
      'On a house with sound piping that is a contained job, and the conversation worth having is repair against replacement with real numbers rather than a default to the bigger sale. Sometimes a gas control valve genuinely fixes it. Sometimes it is money spent on an appliance with a year left, and we will say so. Bethel issues its own permits inside the village; outside it, the township and Clermont County do.',
    ],
    commonIntro:
      "Across Bethel's older village housing and the land around it, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Can the Bethel water heater be repaired instead of replaced?',
        a: 'Sometimes, and we will give you both numbers rather than only the bigger one. If the tank is sound and the gas control has failed, a control replacement is a real option. If the tank is leaking or corroded through, a repair is money spent on something with very little life left, and we would rather tell you that than take the work.',
      },
    ],
  },

  ross: {
    intro:
      'Gas shut off in Ross? Butler County signs it off, and outbuildings count. Call (513) 586-5107.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in Butler County where suburban streets meet farmland, and two things follow. Permits and inspections go through Butler County and the township rather than any Hamilton County office, which catches out contractors coming up from the city.',
      'And properties out here often have more than a house on the gas system — barns, workshops, garages and older outbuildings with their own runs, frequently installed decades ago to a standard that would not pass now. A pressure test covers every one of those branches, so they are worth mentioning when you call rather than discovering with the job half done. On the rural edges some properties are on propane instead, which is a different situation entirely.',
    ],
    commonIntro:
      "Across Ross's suburban streets and the farmland around them, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does Hamilton County handle permits for my Ross house?',
        a: 'No. Ross is in Ross Township, Butler County, so the permit and inspection go through Butler County and the township. It is a common default for contractors working up from Cincinnati, and getting it wrong means waiting while the filing is redone rather than anything wrong with the work.',
      },
    ],
  },

  fairfield: {
    intro:
      'Gas shut off in Fairfield? Its own city building department, and mixed piping ages. Call (513) 586-5107.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city with its own building department, so permits and inspections go through the city rather than the county — a distinction worth confirming, because plenty of contractors default to Butler County for anything north of the line.',
      'The city built out across several decades, so the piping does too. On the older streets it is rigid black iron installed with the house, where a pressure test turns up aged joints and capped stubs from appliances removed long ago. On the newer streets it is often CSST — flexible tubing in a yellow jacket — where the common finding is bonding to the electrical grounding system rather than a leak. Those are not comparable jobs, so we test before quoting.',
    ],
    commonIntro:
      "Across Fairfield's older streets and its newer subdivisions, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is a Fairfield gas permit a Butler County one?',
        a: 'No. Fairfield has its own building department, so the permit and inspection go through the city rather than the county. Contractors working north of Cincinnati often default to Butler County, and filing in the wrong place means a delay while it is redone rather than a problem with the work.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Gas shut off in Beckett Ridge? Newer subdivisions mean CSST and bonding. Call (513) 586-5107.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a West Chester Township community of newer subdivision housing built around the golf course, and the piping reflects the era. Rather than the rigid black iron of the older neighborhoods, these houses are commonly run in CSST — flexible tubing with a yellow jacket — where the issue that most often turns up on inspection is bonding to the electrical grounding system rather than a leak.',
      'That bond exists so a nearby lightning strike cannot arc through the tubing wall, and where it is missing or has been disturbed by later work it has to be corrected before the sign-off the utility waits on. It is a smaller job than repiping, which is worth knowing before you assume the worst. Permits and inspections go through West Chester Township and Butler County.',
    ],
    commonIntro:
      "Across Beckett Ridge's newer subdivisions, mostly piped in CSST, the gas shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Our Beckett Ridge house is not old. Why is the gas off?',
        a: 'Age is not the only cause. On houses of this era the finding is usually a CSST bonding issue, an appliance connector disturbed by later work, or an addition piped in without a permit. None of those are worn-out pipe, and most are a smaller correction than people fear when the gas goes off.',
      },
    ],
  },

  wetherington: {
    intro:
      'Gas shut off in Wetherington? Large homes carry more system to test. Call (513) 586-5107.',
    relevance: [
      'Wetherington (ZIP 45069) is a West Chester Township community of large newer homes, and houses at that scale carry more gas system than most — a furnace and often two zones, a water heater or a tankless unit, a range, several gas fireplaces, and frequently a standby generator or an outdoor kitchen added after the build.',
      'A pressure test covers every branch together, so diagnosing a shutoff takes longer here simply because there is more to isolate. The piping is mostly CSST, where the common inspection finding is bonding to the electrical grounding system, and later-added branches — generators and outdoor runs in particular — are the ones most likely to have gone in without a permit. Mention what is out there when you call. Permits go through West Chester Township and Butler County.',
    ],
    commonIntro:
      "Across Wetherington's large newer homes with extensive gas systems, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'We have a gas standby generator at our Wetherington house. Does that affect the test?',
        a: 'Yes, and it is worth mentioning at the start. A generator is a branch with joints and a valve like any other, it is part of what a pressure test covers, and it is one of the additions most often made after the build without a permit. Knowing it is there lets us quote the actual job rather than revise it later.',
      },
    ],
  },

  hamilton: {
    intro:
      'Gas shut off in Hamilton? The city utility supplies gas here, not Duke. Call (513) 586-5107.',
    relevance: [
      'Hamilton (ZIP 45011) is unusual in Ohio: the city runs its own utilities department, and inside the city natural gas comes from the city rather than Duke Energy. For a shutoff that changes who you deal with for the reconnect and whose process the timing follows — worth checking your bill, because the boundary of municipal service does not always match what people assume from the address.',
      'What does not change is the plumbing. The system is tested, the fault is repaired, it is inspected, and the supplier reconnects on the strength of the sign-off. Hamilton has its own building department, so permits and inspections go through the city rather than Butler County. The housing runs from genuinely old near the centre to mid-century and later further out, so the findings vary by street.',
    ],
    commonIntro:
      "Across Hamilton's older centre and its later streets, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Who do I call to get gas reconnected in Hamilton?',
        a: 'Check your bill first, because inside the city gas comes from the city’s own utilities department rather than Duke Energy, and the reconnect is arranged with whoever supplies you. Either way they act on the inspection sign-off, so the plumbing and the permit are the part we handle — and the supplier reconnects once that is done.',
      },
    ],
  },

  millville: {
    intro:
      'Gas shut off in Millville? Your postal address says Hamilton, but you are not in it. Call (513) 586-5107.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, and it shares a Hamilton postal address — which causes two separate mix-ups. Millville is its own village outside the city limits, so the permit and inspection do not go through the city of Hamilton’s building department. And because Hamilton runs its own municipal gas utility inside the city, your supplier out here may not be the same one, so it is worth checking your bill rather than assuming.',
      'Neither is a hard problem, but both cost days if a contractor works off the postal address. The housing is a small old core with rural land around it, so a pressure test turns up either capped stubs and aged joints in the core, or a secondary run out to a barn or workshop on the properties beyond it.',
    ],
    commonIntro:
      "Across Millville's old village core and the rural land around it, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Millville address says Hamilton. Is the city my gas supplier and permit office?',
        a: 'Probably not, on either count. Millville is its own village outside the city limits, so permits do not go through Hamilton’s building department. And Hamilton’s municipal gas utility serves inside the city, so your supplier out here may be different — check the bill. Working off the postal address is a genuine source of delay here.',
      },
    ],
  },
};
