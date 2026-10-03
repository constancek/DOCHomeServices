import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Batch 9 — the last Butler and Warren County communities, and the southeastern
// Indiana river cities. Indiana is served by Duke Energy Indiana, a separate
// operating company regulated by the Indiana Utility Regulatory Commission.
export const part9: Record<string, LocationServiceCopy> = {
  'new-miami': {
    intro:
      'Power disconnected in New Miami? Check which utility serves you — Hamilton’s municipal system is next door. Call (513) 586-5107.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami just north of Hamilton, an old mill community of closely spaced older homes, and it shares Hamilton’s postal code. That is the first thing to settle, because much of Hamilton is served by the city’s own municipal electric utility rather than Duke Energy — and sitting immediately beside that territory means checking your bill before making any calls saves real time.',
      'The village issues its own permits and inspections. The housing is mill-era worker homes on narrow lots, which means services that were small when installed and in a great many cases have never been replaced, and the entrance often sits in a gap barely wide enough to work in. Where the house has since gained central air and modern appliances, heat damage at the connections is the usual finding.',
    ],
    commonIntro:
      "In New Miami's closely spaced mill-village homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Which utility do I deal with about a New Miami disconnection?',
        a: 'Check your bill, because Hamilton’s municipal electric territory is immediately next door and the boundary is not obvious from a map. Whichever supplies you, the split is identical: they own the line and the meter, and they will not reconnect to a damaged or red-tagged service until a licensed electrician has repaired it and it has been inspected.',
      },
    ],
  },

  monroe: {
    intro:
      'Power disconnected in Monroe? The city sits in two counties, so the permit follows your address. Call (513) 586-5107.',
    relevance: [
      'Monroe (ZIP 45050) straddles Butler and Warren counties along the I-75 corridor, which makes it one of the few cities where the county on your paperwork depends on which part of town you live in. For a disconnection that is not a technicality — a filing sent to the wrong county comes back and is redone while the house sits without power, and the utility waits for the correct sign-off before reconnecting.',
      'The housing gives two answers as well. The older town core has overhead services, some original, with the usual age-related findings once anyone examines them. The newer subdivisions along the corridor were largely developed with underground supply and modern panels, so the causes narrow to the meter base, the buried run, or a load problem where a car charger has been added without a calculation.',
    ],
    commonIntro:
      "Across Monroe's older town core and its newer I-75 corridor subdivisions, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Which county handles my Monroe permit?',
        a: 'It depends on the address, because the city extends into both Butler and Warren counties. That is unusual enough to be worth checking rather than assuming, and we confirm it before filing. Getting it wrong means the paperwork comes back and is redone, which is a day you would rather not spend without power.',
      },
    ],
  },

  landen: {
    intro:
      'Power disconnected in Landen? Underground-fed planned streets, and common areas belong to the association. Call (513) 586-5107.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community built from the 1970s and 80s onward around its lake and common areas, and a good deal of it was laid out with underground supply. That removes the mast and weatherhead, so the causes narrow: a fault at the meter base, damage in the buried run, a panel that will not pass, or a load problem where a charger has been added without a calculation.',
      'The common areas raise a separate point. Lighting, pump equipment and any service feeding shared facilities belong to the homeowners association rather than to an individual owner, so a disconnection affecting those is the association’s to authorise and pay for. If what is affected is the common area rather than your house, the useful call is to the association — and we are happy to deal with them directly.',
    ],
    commonIntro:
      "Across Landen's planned, largely underground-fed streets and its shared common areas, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'The problem in Landen seems to be with the common area rather than my house. Who arranges that?',
        a: 'The homeowners association. Lighting, pump equipment and services feeding shared facilities belong to the association rather than any individual owner, so only they can authorise the work and sign for the permit. Report it to them rather than commissioning work yourself on equipment you do not own — we are happy to deal with them directly once they call.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Power disconnected in Loveland Park? Same ZIP as Loveland, different county. Call (513) 586-5107.',
    relevance: [
      'Loveland Park (ZIP 45140) sits just north of Loveland near the Little Miami, and it shares Loveland’s ZIP while being in Warren County — where Loveland itself spans three counties. That combination is exactly the kind of thing that costs a day: a contractor working from the postal address assumes the Loveland answer, files with the wrong authority, and the paperwork comes back.',
      'The Little Miami is the physical cause on the low ground here. It responds quickly to heavy rain, so water can reach a basement panel during the same storm rather than a day later, and a submerged panel is replaced rather than dried out. Where wear is the cause instead, the housing is mid-century with services largely original and now carrying loads beyond their intended range.',
    ],
    commonIntro:
      "Across Loveland Park's mid-century homes near the Little Miami, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'My ZIP is 45140, the same as Loveland. Is my permit handled the same way?',
        a: 'Not necessarily. Loveland Park is in Warren County, and Loveland itself spans Clermont, Warren and Hamilton — so the postal code is not a reliable guide to the authority. We check the specific address before filing. It is a small thing that turns into a lost day when it is wrong.',
      },
    ],
  },

  maineville: {
    intro:
      'Power disconnected in Maineville? Historic core, new subdivisions and rural wells all differ. Call (513) 586-5107.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County with a small historic core, newer subdivisions around it and rural property beyond, and those are three genuinely different situations. The historic core has older overhead services with the usual age-related findings. The subdivisions were frequently developed with underground supply and modern panels, so causes narrow considerably.',
      'The rural properties are the ones to flag on the phone. They sit back from the road on long private service runs, so the fault may be along the line rather than at the house, and a good number are on private wells — meaning a disconnection takes the water with it, because the pump is electric, and septic pumps stop too. None of that is visible from an address.',
    ],
    commonIntro:
      "Across Maineville's historic core, newer subdivisions and rural properties, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'What should I tell you when I call about a rural Maineville property?',
        a: 'Whether you are on a well, and roughly how far the house sits back from the road. The well matters because no power means no water, which raises the priority. The distance matters because on a long private run the fault is often out along the line rather than at the house, and knowing in advance means we arrive able to trace it.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Power disconnected in Pleasant Plain? Rural, far out, and often on a well. Call (513) 586-5107.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County with older homes and rural property around it, among the most rural places we serve, and it issues its own permits and inspections. Being both small and a distance out means the municipal queue is short when the filing is right, and that settling the details on the phone matters more here than closer in.',
      'The rural property brings the well question, which changes the urgency considerably: a private well pump is electric, so no power means no water for washing, flushing or drinking, and a septic pump stops as well. Long private service runs also mean the fault may be somewhere along the line rather than at the house. Both are worth saying when you call so we arrive equipped.',
    ],
    commonIntro:
      "Across Pleasant Plain's older village homes and the rural property around it, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'I am on a well in Pleasant Plain. How quickly can you come out?',
        a: 'Say that you are on a well when you call, because it moves you up rather than down — no power means no water at all, which is a different situation from an inconvenience. Being a distance out, it also helps to cover how old the service is and whether the panel has been under water, so we arrive with what the job actually needs.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Power disconnected in South Lebanon? Brand-new subdivisions beside a 19th-century core. Call (513) 586-5107.',
    relevance: [
      'South Lebanon (ZIP 45065) sits on the Little Miami in Warren County with a historic core and subdivisions expanding fast around it, and that produces about the widest span of service ages we deal with anywhere. Houses in the old core may be on entrances that are original or reworked decades ago. Houses a short distance away may be five years old, underground-fed, with a modern panel.',
      'So the same disconnection question has entirely different answers within the town. Old core: age-related findings — grounding to a superseded standard, corrosion at the meter base, a panel with nothing left. New subdivision: something specific, or a load problem where a charger was added without a calculation. The Little Miami adds submerged panels on the low ground near it, which are replaced rather than dried out.',
    ],
    commonIntro:
      "Across South Lebanon's 19th-century core and its fast-expanding new subdivisions, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'My South Lebanon house is only a few years old. Why is the service the problem?',
        a: 'On newer housing it usually is not the whole service. It is more often a specific fault at the meter base, an inspection required after a property stood empty, or a load problem — most commonly a car charger fitted without a load calculation pushing the service to its ceiling. That is a smaller job than the age-related findings on the older core, and worth establishing before anyone quotes for a replacement.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Power disconnected in Lawrenceburg? Indiana means Duke Energy Indiana — a different utility entirely. Call (513) 586-5107.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, and the jurisdictional facts come first. Indiana is served by Duke Energy Indiana, a separate operating company from Duke Energy Ohio with its own crews and its own procedures, regulated by the Indiana Utility Regulatory Commission rather than Ohio’s PUCO. Permits and inspections follow Indiana rules and the local authority here, not Ohio’s.',
      'The downtown is 19th-century buildings behind a riverfront levee, and those buildings carry the oldest electrical histories in the area — services frequently original or reworked long ago, with entrances high on tall walls. Where a building has a business below and residential space above on one shared service, the equipment belongs to the building owner rather than any occupant, which is worth establishing before anything else.',
    ],
    commonIntro:
      "In Lawrenceburg's 19th-century downtown behind the levee, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Is my Lawrenceburg disconnection handled by the same Duke as Cincinnati?',
        a: 'No. Indiana is served by Duke Energy Indiana, a separate operating company with its own crews and procedures, regulated by the Indiana Utility Regulatory Commission rather than Ohio’s PUCO. The rule affecting you is the same on both sides of the state line: they own the line and the meter, and will not reconnect to a red-tagged or failed service until a licensed electrician has repaired it and it has been inspected.',
      },
    ],
  },

  greendale: {
    intro:
      'Power disconnected in Greendale? Indiana rules, Indiana utility, and hillside housing. Call (513) 586-5107.',
    relevance: [
      'Greendale (ZIP 47025) adjoins Lawrenceburg but climbs the hillside above the Ohio, and it shares Lawrenceburg’s postal code while being its own city. The utility is Duke Energy Indiana rather than Duke Energy Ohio — a separate operating company with its own procedures — and the regulator is the Indiana Utility Regulatory Commission.',
      'Being up the hillside rather than down by the levee changes the failure pattern. The flooded-panel problem that features in the river cities below is much less common here. What we find instead is wear: services installed with the houses and never brought forward, grounding to a superseded standard, and connections carrying modern loads on equipment sized for far less. On the steeper streets, access is worth mentioning when you call.',
    ],
    commonIntro:
      "Across Greendale's older and mid-century hillside homes, the disconnections we handle most often are:",
    localFaqs: [
      {
        q: 'Greendale and Lawrenceburg share a ZIP. Same permit office?',
        a: 'No — Greendale is its own city with its own office, despite sharing the postal code. The filing follows the address rather than the ZIP, and Duke Energy Indiana looks for the correct sign-off before reconnecting. We confirm the right authority before submitting anything.',
      },
    ],
  },

  aurora: {
    intro:
      'Power disconnected in Aurora? 19th-century riverfront housing, Indiana rules, and a distance out. Call (513) 586-5107.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County with a riverfront downtown of 19th-century homes and buildings, and it is close to the western limit of what we cover. The utility is Duke Energy Indiana rather than Duke Energy Ohio — separate crews, separate procedures — and the regulator is the Indiana Utility Regulatory Commission.',
      'The houses are genuinely old and tall for their footprint, so the service entrance sits high on the wall or passes up through the roof, which makes the flashing at that penetration part of the electrical work rather than a roofer’s follow-up. The low riverfront ground adds submerged panels as a recurring cause, and those are replaced rather than dried out. Because it is a distance, settling the details on the phone means we arrive equipped.',
    ],
    commonIntro:
      "In Aurora's 19th-century riverfront homes, the disconnections we are called for most often are:",
    localFaqs: [
      {
        q: 'Do you really come out as far as Aurora?',
        a: 'Yes, and it is close to the western edge of what we cover. Because it is a distance, it helps to settle the details on the phone — whether the panel has been under water, roughly how old the service is, and whether the entrance runs through the roof. That determines what we bring, and if the job turns out to need a specialist rather than us, we will say so before setting off.',
      },
    ],
  },
};
