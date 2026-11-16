import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mulberry: LocationServiceCopy = {
  localParagraph:
    'Mulberry is mostly newer, so the wiring here is usually sound and inspections tend to come before a sale, a purchase or a big new load. Census figures put the median home at 1988, with 73.2% built since 1980. What changes the job is electricity: it heats 61.5% of homes, so heat strips, a heat pump and an EV charger can all end up on one panel. We check whether yours has room, write up what we find, and price any work before it starts.',
  emergencyParagraph:
    'When an outlet runs hot, a switch buzzes or looks singed, or the house smells burnt, don’t wait for a scheduled inspection; phone us. A breaker that snaps off again the moment it’s reset counts too. Shut it off. For smoke or fire, get outside and dial 911. Most such calls get someone there that day, weekends too.',
  commonIntro:
    'Mulberry’s townhomes and apartments sit beside newer single homes, and most calls are about added load, not old wiring. What we find:',
  localFaqs: [
    {
      q: 'I live in a newer Mulberry house. Do I need an electrical inspection?',
      a: 'Often not. If the buyer’s home inspector found nothing wrong and you aren’t adding anything big, wiring in a house from the 1990s or later is usually fine. Book one before an EV charger, a hot tub or a switch to a heat pump, so we can confirm the panel has room.',
    },
    {
      q: 'Who handles electrical permits in Mulberry?',
      a: 'Mulberry is unincorporated Miami Township, so electrical permits come from Clermont County Permit Central, and the township may need to clear zoning first. What we do is a safety review with a written report. If a repair needs a permit, we file for it and the county’s inspector approves the work.',
    },
    {
      q: 'I rent a Mulberry apartment and the breaker keeps tripping. What should I do?',
      a: 'Leave it off and write to your landlord. Ohio’s ORC 5321.04 (A)(4) makes landlords responsible for keeping the electrical fixtures that come with a unit safe to use, and the owner or manager is the one who books us. Our work is the wiring, so the call has to come from them.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections before you add load in Mulberry',
    band1Heading: 'Common Electrical Problems We Find in Mulberry Homes and Apartments',
    commonSituations: [
      'A full panel with no space left for an EV charger circuit',
      'Electric heat strips that dim the lights when they kick on',
      'A hot tub hooked up with no GFCI protection at the disconnect',
      'Kitchen counter outlets in a 1990s unit with no GFCI protection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Mulberry calls end without an inspection. A dead bath, garage or patio outlet often means a GFCI tripped somewhere else; push reset on each one, since a single device can protect several. A breaker that tripped once and has held since is fine, and so is a newer house that cleared the buyer’s inspection. Book us when the lights flicker across several rooms, cords snake through the house in place of wiring, or a heat pump, hot tub or charger is about to land on a panel that may already be full.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mulberry?',
        body: 'In houses this new, rewiring almost never comes up. The inspection usually points one of two ways. Most often it’s a repair: a loose lug, a breaker that runs hot, a missing GFCI. Sometimes the panel simply has no room for the load you want to add, and then we price a panel replacement. Either way, you get the report, decide what to do and pick who does it. A tenant’s report goes to the landlord, who makes that call. We handle any permit the work needs.',
      },
    ],
    whyTitle: 'Why Mulberry Homeowners Call Us',
    whyParagraph:
      'Most Mulberry calls are about adding something big to a newer panel, and we tell you plainly if it fits. Our electricians are licensed and insured, and every one passes a background check and drug test.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced in Mulberry?',
        a: 'Flat, and quoted up front. A townhome checked before a charger install costs less than a full house checked for a sale, because size and purpose set the rate. Repairs are quoted on their own after the report. You say yes before we touch anything.',
      },
      {
        q: 'What is included in a Mulberry electrical inspection?',
        a: 'We open the panel and look at each breaker, confirm the system is properly grounded, test outlets and the GFCI and AFCI devices protecting them, check the wiring we can reach, and see that the smoke alarms have power. For a planned charger or heat pump we also work out how much capacity is left.',
      },
      {
        q: 'Can I use another electrician for the repairs?',
        a: 'Yes. The written report is yours to keep and share. If a buyer, lender or insurer asks for a written report, you’ll have one. Some owners use it to collect two quotes. We’ll quote the work if you ask, with financing available on larger jobs.',
      },
    ],
  },
};
