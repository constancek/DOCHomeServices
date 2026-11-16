import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'Most of the masts we fix in Northside are old, storm-bent or both. Census figures put well over half the homes here before 1940, and about half are detached houses, so a lot of pipes still poke through roofs reshingled around them while the entrance cable and flashing stayed original. Upper Hamilton Avenue is younger, though newer masts fold just as readily when a branch lands across the wires. Our electrician walks the whole service entrance first, and you have a firm number in hand before work begins.',
  emergencyParagraph:
    'A pipe ripped loose by a falling branch, sparks at the weatherhead or lights out on one half of the house can’t sit overnight. Back away from any wire on the ground, since it may be carrying current, and let Duke Energy Ohio know. House-side repairs are same day on most calls, weekends included.',
  commonIntro:
    'Northside has plenty of tall frame houses and doubles, and on those we tend to find one of these first:',
  localFaqs: [
    {
      q: 'Who inspects service mast work in Northside?',
      a: 'Electrical permits in Northside, as in every Cincinnati neighborhood, are reviewed and inspected by Inspection Bureau, Inc. (IBI). Our office files with them on the day you book. Their inspector has to pass the new mast before your power can be switched back on, so we lock in that appointment early.',
    },
    {
      q: 'My tenant reports a tilting mast on our double. Who pays and who books it?',
      a: 'As owner, you book it and pay for it. Ohio’s landlord statute, ORC 5321.04, puts the duty on you to keep supplied electrical systems in good and safe working order. We straighten masts, not lease disputes. Your tenant should put the report in writing, and we coordinate a time with both of you.',
    },
  ],
  overrides: {
    ctaLine: 'Mast and weatherhead repair for older houses in Northside',
    band1Heading: 'Signs You Need Service Mast Repair in Northside',
    commonSituations: [
      'A pipe on a tall frame house leaning out over the front porch after a gusty night',
      'Orange streaks bleeding down the clapboards from the mast clamps',
      'Upstairs rooms in a double dimming whenever wind shakes the wires',
      'A gap opening up behind the meter housing where it once sat flush',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Northside',
        body: 'Plenty of masts only need a small fix. If yours stands plumb and its mounting holds, we may swap one strap, reseal the weatherhead cap or redo the flashing boot. Pipe that’s kinked, eaten by rust or twisted in a storm gets taken out entirely. So does entrance cable whose jacket has gone chalky or split, every single time. Because so many houses in Northside are over eighty years old, we inspect the panel, meter socket and cable before ordering parts, and the plan is built around what we find. Sometimes that points to home rewiring as well, and we’ll explain why if it does.',
      },
      {
        title: 'Storm Damage to Service Masts in Northside',
        body: 'Storms put more masts out of action than age ever does. When a heavy limb drops onto the overhead drop, the pole is built to carry it, so the pull transfers to the pipe on your roof. Wind can lean a mast the same way, a little at a time. Once the bend is enough to crack the roof boot or work the drop clamp loose, water starts getting in, and the utility will hold off on reconnecting. That damage is a homeowner’s insurance matter, not the utility’s. After a big blow, glance up from the driveway to make sure the pipe is vertical and the meter box hasn’t tipped.',
      },
      {
        title: 'The Utility’s Side and Yours in Northside',
        body: 'Ownership splits at the point where the overhead conductors attach to the house. On the pole side, plus the meter itself, it belongs to the utility. The mast, weatherhead, riser, entrance cable and meter box are the homeowner’s. The sequence runs disconnect, our repair (usually a single day), inspection and finally reconnect. Power can’t return until that inspection passes, so the permit goes in when you book.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Northside Choose Us for Mast Repair',
    whyParagraph:
      'You get licensed electricians who look at everything from weatherhead to panel, rebuild the mast to code and seal the roof penetration as part of the job. The permit is filed at booking, and the price is agreed first.',
    sharedFaqs: [
      {
        q: 'What goes into the price of mast repair in Northside?',
        a: 'We quote a flat rate once the service entrance has been looked over. A repair costs less than a new mast, and the figure also depends on how much entrance cable and flashing we replace, plus the permit. You sign off on it first. Financing exists for homeowners who qualify.',
      },
      {
        q: 'How many days will we be without power during a mast replacement?',
        a: 'Our hands-on electrical work is usually a single day. What stretches things is waiting on the utility to disconnect, the inspector to visit and the utility to reconnect afterward. We request the inspection at the same time we schedule the job, and that one step cuts the most waiting.',
      },
      {
        q: 'Do storms cause most bent service masts?',
        a: 'They do. A branch caught on the drop wires drags the pipe sideways, and steady wind can do it slowly over a season. Both can open the roof flashing, after which rain follows the cable down into the meter box and starts corroding the lugs.',
      },
    ],
  },
};
