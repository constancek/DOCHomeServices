import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 9 — the last of Butler County, the Warren County communities, and the
// three Dearborn County towns across the Indiana line, where the state, the
// regulator, the code and the inspecting authority all change.
export const part9: Record<string, LocationServiceCopy> = {
  'new-miami': {
    intro:
      'Gas shut off in New Miami? Low ground beside the Great Miami River. Call (513) 586-5107.',
    relevance: [
      'New Miami (ZIP 45011) is a small Butler County village on low ground beside the Great Miami River just north of Hamilton, and water is the recurring reason gas goes off here. Where a furnace, boiler or water heater has been submerged, the gas control valve and burner controls are replaced rather than dried out and relit — the corrosion is internal, nothing shows from outside, and a control that works today can fail unsafely later.',
      'New Miami is its own village outside the Hamilton city limits, even though it shares a Hamilton postal address, so permits and inspections do not go through the city’s building department. Being a small village, the inspection queue rather than the plumbing usually decides how quickly the gas comes back, which is why we file and book it when the work is scheduled rather than at the end.',
    ],
    commonIntro:
      "On New Miami's low ground beside the Great Miami, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'The New Miami furnace was under water but it still lights. Is that a problem?',
        a: 'Yes, and stop lighting it. A submerged gas control valve can work today and fail unsafely later, because the damage is internal corrosion with nothing visible outside. The control gets replaced rather than dried out. On some units that means a new appliance rather than a part, and we will tell you which before ordering anything.',
      },
    ],
  },

  monroe: {
    intro:
      'Gas shut off in Monroe? One city across two counties, with its own permits. Call (513) 586-5107.',
    relevance: [
      'Monroe (ZIP 45050) is its own city and it straddles a county line, sitting in both Butler and Warren counties. Inside the city limits Monroe issues the permit and inspection regardless of which county your address falls in, so the county line is less of a trap than it looks. What does catch contractors out is defaulting to a county office when it is the city’s.',
      'The city has grown a great deal, so much of the housing is newer subdivision stock piped in CSST — flexible tubing in a yellow jacket — where the common inspection finding is bonding to the electrical grounding system rather than a leak. On the older streets near the original centre it is rigid black iron, where a pressure test turns up aged joints and capped stubs instead.',
    ],
    commonIntro:
      "Across Monroe's newer subdivisions and its older centre, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'My Monroe address is in Warren County. Does that change the gas permit?',
        a: 'Not if you are inside the city limits — Monroe issues the permit and inspection whether the address sits in Butler or Warren County. What is worth confirming is that you are actually inside the city rather than in a neighbouring township, because that is where the authority genuinely changes.',
      },
    ],
  },

  landen: {
    intro:
      'Gas shut off in Landen? Your ZIP says Mason, but Mason does not inspect it. Call (513) 586-5107.',
    relevance: [
      'Landen (ZIP 45040) is an unincorporated Deerfield Township community in Warren County, and it shares its postal code with the city of Mason — which issues its own permits. Landen does not: permits and inspections here go through Deerfield Township and Warren County, so the address rather than the ZIP decides the office, and a contractor filing off the postal code files with the wrong one.',
      'The housing is largely 1970s through 1990s subdivision stock, which puts it in the era where CSST began appearing alongside black iron. On the CSST houses the common inspection finding is bonding to the electrical grounding system rather than a leak — a smaller correction than most people fear. We establish which you have before quoting, because the two are not comparable jobs.',
    ],
    commonIntro:
      "Across Landen's 1970s to 1990s subdivisions, the gas shutoffs we are called for most often are:",
    localFaqs: [
      {
        q: 'Is my Landen permit a Mason one? We share a ZIP.',
        a: 'No. Mason is its own city and issues its own permits; Landen is unincorporated Deerfield Township, so it goes through the township and Warren County. Both are in 45040, but the ZIP is a postal boundary with nothing to do with which office signs off, and filing in the wrong place means a delay while it is redone.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Gas shut off in Loveland Park? Not the city of Loveland for permits. Call (513) 586-5107.',
    relevance: [
      'Loveland Park (ZIP 45140) is an unincorporated Warren County community sharing a postal address with the city of Loveland, and the name makes the mix-up worse than the ZIP alone would. The city of Loveland issues its own permits and inspections. Loveland Park is not in the city, so yours go through the township and Warren County instead.',
      'A plumber filing for the wrong one does not fail an inspection — the paperwork comes back and is refiled while the house sits without hot water. It is worth asking before you book. The housing is mid-century and later, so a pressure test turns up either aged black iron and capped stubs from appliances long removed, or a CSST bonding issue on the newer streets.',
    ],
    commonIntro:
      "Across Loveland Park's mid-century and later homes, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does the city of Loveland issue the gas permit for Loveland Park?',
        a: 'No. Loveland Park is unincorporated Warren County, not inside the city, so the permit and inspection go through the township and the county. The shared name and shared ZIP make this a genuine mix-up, and the cost of getting it wrong is a delay while the filing is redone rather than a failed inspection.',
      },
    ],
  },

  maineville: {
    intro:
      'Gas shut off in Maineville? A small village core with rural land beyond. Call (513) 586-5107.',
    relevance: [
      'Maineville (ZIP 45039) is a small Warren County village with an old core and rural land around it, and the two need separating. In the core the housing is old, with piping altered in stages over a century and capped stubs left wherever an appliance was removed — so a pressure test can fail with every appliance in the house working perfectly.',
      'Beyond the village some properties are on a propane tank rather than a gas main, and a loss of gas there is a supply or tank matter for your propane company rather than a utility disconnection we can clear. We would rather tell you that on the phone than charge you for a visit to say it. Inside the village Maineville issues its own permits; outside it, the township and Warren County do.',
    ],
    commonIntro:
      "Across Maineville's old village core and the rural land beyond it, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'We have a tank in the yard rather than a meter. Is this the same problem?',
        a: 'No, and it is worth settling on the phone. A tank means propane, which is an arrangement with your propane company rather than a utility service that gets disconnected and reconnected. We would rather say that than charge you for a visit. If the piping downstream of the tank is at fault, that is different and we can look at it.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Gas shut off in Pleasant Plain? A tiny village, so the queue sets the timeline. Call (513) 586-5107.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is one of the smallest villages in Warren County, an old core surrounded by farmland, and scale is what shapes a gas shutoff here. The testing and repair are frequently a single day. What you actually wait on is the inspection and then the utility’s reconnect visit, so we file and book the inspection when the work is scheduled rather than once it is finished.',
      'On the rural land around the village, some properties are on a propane tank rather than a gas main — a loss of gas there is a supply matter for your propane company rather than something we reconnect, and we will say so on the phone. Where there is a meter, the older core housing means capped stubs and aged joints, and outbuildings with their own runs are part of what a test covers.',
    ],
    commonIntro:
      "Across Pleasant Plain's old village core and the farmland around it, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'How quickly can gas come back on in Pleasant Plain?',
        a: 'The plumbing is often a day. The wait is the inspection, in a village with very limited capacity, and then the utility’s reconnect visit after the sign-off. Booking the inspection at the same time as the work rather than at the end is the main thing that shortens it.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Gas shut off in South Lebanon? Little Miami flooding reaches gas appliances. Call (513) 586-5107.',
    relevance: [
      'South Lebanon (ZIP 45065) is a Warren County village on the Little Miami River, and on the low ground near the water submerged appliance controls are a recurring cause of gas shutoffs. A gas control valve that has been under water is replaced rather than dried out and relit, because the corrosion is internal, nothing shows from outside, and a control that works today can fail unsafely later.',
      'Where a property has flooded more than once, the useful question during a replacement is whether the appliance can be raised — venting is the constraint, and where a platform above the historic water line works, the cycle ends. South Lebanon issues its own permits and inspections inside the village, and the newer subdivisions on the higher ground are a different picture again, mostly CSST with bonding as the common finding.',
    ],
    commonIntro:
      "Across South Lebanon's riverside streets and its newer subdivisions, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Our South Lebanon water heater has flooded twice. Can it be raised?',
        a: 'Sometimes, and it is worth asking during the replacement rather than after the next flood. The limit is the venting — a unit can only go so high before the flue run stops working properly. Where a platform above the historic water line is achievable it ends the cycle, and where it is not we will tell you rather than build something that creates a different problem.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Gas shut off in Lawrenceburg? Different state, regulator and inspector. Call (513) 586-5107.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is in Dearborn County, Indiana, and almost everything administrative changes at the state line. Your gas comes from an Indiana utility regulated by the Indiana Utility Regulatory Commission rather than Duke Energy Ohio and PUCO — worth checking your bill for who actually supplies you. The code is Indiana’s, plumbers are licensed by Indiana, and the permit and inspection go through the city of Lawrenceburg rather than any Ohio authority.',
      'A contractor who works only the Ohio side can get the filing wrong, and that is a delay rather than a failed inspection — the paperwork comes back and is redone while the house sits without hot water. The local factor is the river: on the low ground behind the floodwall, submerged appliance controls are a recurring cause and they are replaced rather than dried out.',
    ],
    commonIntro:
      "Across Lawrenceburg's older riverfront housing and the streets above it, the shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Does an Ohio plumber need anything different to work in Lawrenceburg?',
        a: 'Yes. Indiana licenses plumbers separately, the code is Indiana’s, the permit is the city of Lawrenceburg’s, and the utility answers to the Indiana Utility Regulatory Commission rather than PUCO. Worth asking whoever you call whether they are licensed and working in Indiana rather than assuming a Cincinnati plumber can file here.',
      },
    ],
  },

  greendale: {
    intro:
      'Gas shut off in Greendale? Indiana code, Indiana licence, town permit. Call (513) 586-5107.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County town next to Lawrenceburg, and it shares the postal code with the city — but not the permit office. Greendale issues its own, so a contractor filing off the ZIP files with the wrong one. On top of that everything is Indiana: Indiana code, Indiana plumbing licensure, and a utility answering to the Indiana Utility Regulatory Commission rather than PUCO.',
      'None of that changes the plumbing. The system is tested, the fault is repaired, it is inspected, and the supplier reconnects on the strength of the sign-off. What it changes is who signs and who is allowed to file, which is where the days get lost if the wrong assumptions are made. The housing spans older river-town stock and newer streets on the hillside, so the findings vary by era.',
    ],
    commonIntro:
      "Across Greendale's older housing and its hillside streets, the gas shutoffs we handle most often are:",
    localFaqs: [
      {
        q: 'Greendale and Lawrenceburg share a ZIP. Does the permit go to the same office?',
        a: 'No. Greendale issues its own permits and inspections separately from the city of Lawrenceburg, even though both are 47025. The ZIP is a postal boundary with nothing to do with jurisdiction, and filing off it means waiting while the paperwork is redone rather than a failed inspection.',
      },
    ],
  },

  aurora: {
    intro:
      'Gas shut off in Aurora? Old river housing, Indiana code, city permit. Call (513) 586-5107.',
    relevance: [
      'Aurora (ZIP 47001) is a Dearborn County river city with genuinely old housing, much of it from the nineteenth century, and two things follow. The systems carry a century and a half of alterations, including lines capped at the wall when electric lighting arrived rather than removed — those are still connected, and a pressure test tests them along with everything else, which is why a test can fail with every appliance working perfectly.',
      'The other is that this is Indiana. The code is Indiana’s, plumbers are licensed by the state, the permit and inspection go through the city of Aurora, and your supplier answers to the Indiana Utility Regulatory Commission rather than PUCO. A Cincinnati plumber who has not worked this side of the line can get the filing wrong, which costs days. On the low riverfront ground, submerged appliance controls are the other recurring cause.',
    ],
    commonIntro:
      "In Aurora's old river housing, on gas systems altered over generations, the shutoffs we see most often are:",
    localFaqs: [
      {
        q: 'Could old gas-lighting pipe be why my Aurora test failed?',
        a: 'It genuinely could, in housing this old. Those lines were usually capped at the wall rather than removed when electric arrived, so they are still on the system a century and a half later, and a cap that has held that long can begin to weep. We isolate sections to narrow it down rather than opening original plaster on a guess.',
      },
    ],
  },
};
