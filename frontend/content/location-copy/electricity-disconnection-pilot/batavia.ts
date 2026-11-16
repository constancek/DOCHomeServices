import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const batavia: LocationServiceCopy = {
  localParagraph:
    'In Batavia, the inspection sets the wait for power more than the repair does. Duke Energy Ohio restores service after a licensed electrician puts right what the owner is responsible for, usually once the county has passed that work, so we schedule both together. Census figures date the middle of the housing stock to 1955 and about a third of homes to before 1940, so first-generation panels, tired grounding and heat-marked meter sockets are familiar. You get the cause and a written price before any work.',
  emergencyParagraph:
    'Near the East Fork, a house in Batavia with no power has lost its sump pump as well as heat and cooling, and losses mount daily. Stay away from a meter box sagging off the siding. Report a fallen wire to 911 first and the utility second. Our electricians reach most disconnection calls the same day, weekends included.',
  commonIntro:
    'In Batavia, older village houses and apartment buildings lose power for a handful of reasons, and these four lead.',
  localFaqs: [
    {
      q: 'Who issues the permit and does the inspection for a repair in Batavia?',
      a: 'Clermont County Building Inspection issues permits for the village, electrical work included. Our office files for the mast, meter base or panel job and asks the county for the inspection when you book, since nothing gets reconnected until that inspection passes.',
    },
    {
      q: 'I rent an apartment in Batavia and the power was cut. Who books the repair?',
      a: 'Your landlord books it. Let them know in a dated message and keep a copy for yourself. Under ORC 5321.04, an Ohio landlord must keep supplied electrical systems in working, safe condition. We handle the service with the owner or the manager; the lease is a matter for the two of you.',
    },
  ],
  overrides: {
    ctaLine: 'Power back on for village houses and apartments in Batavia',
    band1Heading: 'Common Causes of Electricity Disconnection in Batavia',
    commonSituations: [
      'A basement panel near the East Fork that went under water and can’t be energised again',
      'An overheated meter socket on a 1950s house, with the plastic melted at the edges',
      'Unpermitted panel work turned up during a sale, which then failed inspection',
      'Half the house dark after one leg of the service dropped out inside the panel',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Batavia',
        body: 'A dark house in Batavia gets a full look at its service before anyone names a fix, covering the roof connection, mast, entrance cable, meter socket, panel and ground. On houses of this age that look usually pins down whether a mast, a meter base or a panel is the job, and the permit follows from it. We correct the fault and bring grounding and bonding into line with current code, because the county inspector will check them. The inspection request goes in with the work order. When the meter returns, we switch circuits on in turn and write up anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Batavia',
        body: 'In Batavia, a service picks up a red tag when someone finds a dangerous panel, no grounding to speak of, live conductors exposed, or wiring that failed inspection or went in unpermitted. That tag is an instruction, not paperwork. A quick clean-up won’t remove it; a licensed fix of the cause plus the inspector’s approval will. Whatever the utility hung on your door is worth keeping, because the reason usually appears on it. A locked or missing meter is off limits. Ohio makes interfering with utility metering a criminal offence, and power sent through that socket would reach equipment already judged unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Batavia',
        body: 'Houses left empty through a sale, and apartments waiting for the next lease, get a slower check in Batavia before power is requested, since older panels and their grounding tend to fall short of current code. The result may be a quick inspection or a new panel, which we confirm once we’ve seen it. Restoring the original setup involves the same labour, permit and inspection as a correctly sized modern service, so the quote lists both.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Batavia Choose Us for Disconnection Repair',
    whyParagraph:
      'Without a service there’s no heat and no sump pump, so in Batavia a disconnection jumps routine work. Licensed electricians make the repair the utility is asking for, file the permit, meet the inspector and price it first.',
    sharedFaqs: [
      {
        q: 'What does a disconnection repair cost in Batavia?',
        a: 'The fault decides the figure. Mending a meter base costs a small fraction of a full new service. When the diagnosis is done, a flat rate goes to you in writing before work, with utility charges kept off our invoice. Financing is offered for qualifying homeowners.',
      },
      {
        q: 'How long does it take to get reconnected in Batavia?',
        a: 'Plan on the repair itself taking a single day most of the time. Then the county inspection sets the pace, on the county’s calendar. Asking for it the moment you book, instead of when we finish, shaves the most off the time you spend without power.',
      },
      {
        q: 'Can I put power back on myself after the repair?',
        a: 'No. Meters and their locks belong to the utility, and Ohio law treats meddling with either as a crime. Reconnection also has to wait on the inspector, since the cut was made over a fault and the repair needs signing off first.',
      },
    ],
  },
};
