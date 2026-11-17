import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'When a building in CUF stays unlit after a storm, the fault usually lives on owner equipment, such as a wrenched mast, a meter base dragged off the brick or a scorched panel. Most households here rent, so landlords make the call. Census figures put over four in ten homes before 1940, and pre-war houses on these slopes more often keep a roof-mounted mast and original entrance cable, so damage runs deeper than it looks. Owners see photos and a fixed figure first.',
  emergencyParagraph:
    'Lose power in a storm and the building loses heat, cooling and the basement sump, often while rain is still sheeting down the hill. A line lying across the sidewalk is a job for 911 and Duke Energy Ohio first. Mornings after big storms get crowded, but most calls still get an electrician before evening, Sunday or not.',
  commonIntro:
    'On the steep streets of CUF, pre-war houses stand next to big 1970s blocks, and the storm work there falls into these four kinds:',
  localFaqs: [
    {
      q: 'I rent in CUF and my apartment lost power in the storm. What do I do first?',
      a: 'Write to your landlord, attach phone pictures of anything visible outside, like a dangling meter base, and keep the message. ORC 5321.04 obliges Ohio landlords to keep the electrical systems they supplied in good and safe working order. We repair wiring, not rental agreements, so the owner hires us.',
    },
    {
      q: 'My old house in CUF has its mast coming through the roof. Will a storm repair be bigger?',
      a: 'Frequently. A limb dragging on the drop levers that mast against the roof, so the flashing, the aged entrance cable and sometimes the panel suffer together. We photograph it, set a new mast, seal the roof penetration properly rather than slapping on tar, and tell you up front if the panel has to go.',
    },
  ],
  overrides: {
    ctaLine: 'Storm repairs for landlords and owners on the hillsides of CUF',
    band1Heading: 'Storm Damage We Repair in CUF',
    commonSituations: [
      'A roof-mounted mast on a house in Fairview folded back after a limb swung into it',
      'Pre-war entrance cable on a rental split open where the drop yanked it, replaced rather than taped',
      'A cracked weatherhead on a two-family pouring rainwater down the cable',
      'Breakers and the bus inside the panel of a 1970s apartment block cooked by a surge, outside untouched',
    ],
    proseSections: [
      {
        title: 'When Your House Stays Dark After a Storm in CUF',
        body: 'Across the street every window in the next building is lit, and your hallway in CUF is still pitch black. That almost always puts the problem on owner equipment. The utility owns the poles, the service line to the building and the meter; the owner holds the weatherhead, mast, meter enclosure and panel, and most people never knew that enclosure was theirs. Crews restore the utility’s side and refuse to energise a mast that’s folded or an enclosure hanging loose. We document everything with photos, repair it, and file with Inspection Bureau, Inc. (IBI), the city’s electrical inspector, ahead of the reconnect.',
      },
      {
        title: 'Storm Safety Before the Repair in CUF',
        body: 'Hillside streets mean a fallen wire can drape over steps or parked cars, so treat it as live. Stand well off, keep children and pets in, and leave branches tangled in it alone; 911 gets the first call and the utility the second. A tenant with a portable generator keeps it outdoors, away from windows, and plugs each appliance into it. Wired into an outlet or a panel with no transfer switch, it feeds power backward up the line and can kill the lineworker. Once a main breaker trips a second time, quit resetting it. Tell us about meter or mast damage before the yard work.',
      },
      {
        title: 'Surge Damage After a Storm in CUF',
        body: 'Lightning landing near the line can cost an owner more than the blackout. The surge pushes into whatever is plugged in, so a building can lose furnace boards, heat pump inverters, ranges and televisions in several flats at once. If we already have the service open for storm repair, putting whole-home surge protection at the panel on that visit is the cheapest protection we install.',
      },
    ],
    whyTitle: 'Why Landlords and Owners in CUF Call Us After a Storm',
    whyParagraph:
      'When storms hit, we put more electricians on, since every damaged building wants the same fix that morning. Ours are licensed, photograph for the insurer, rebuild the damaged service, meet the inspector so power returns, and lock the price first.',
    sharedFaqs: [
      {
        q: 'Why does the rest of the block have lights while our building in CUF does not?',
        a: 'The utility’s crews bring back their own lines and quit at the meter. A bent mast or a torn-away meter enclosure is unsafe to re-energise, so the building sits dark until a licensed electrician puts it right and an inspector approves it.',
      },
      {
        q: 'As a landlord in CUF, what does my insurer want after storm damage?',
        a: 'Storm damage to the owner’s equipment is a claim on your own property policy, not something the utility pays. Expect the adjuster to ask for photographs and an itemised invoice. We provide both, with the photos taken before a single fitting is disturbed, and your insurer decides the payout.',
      },
      {
        q: 'How quickly can someone reach a storm-damaged building in CUF?',
        a: 'Phone at first light if you can. After a big storm every owner with a damaged mast calls the same morning, and electricians and inspectors are taken in the order people ring. Most calls still get a visit that day, and the fix itself normally fits inside one working day.',
      },
    ],
  },
};
