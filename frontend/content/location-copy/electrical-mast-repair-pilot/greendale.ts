import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const greendale: LocationServiceCopy = {
  localParagraph:
    'Greendale is a town of owner-occupied houses, and more than half of them were built before 1960, Census figures show. On a house that age, the service entrance cable running from the weatherhead to the meter has often been in place since the house was first wired, and it tends to fail without much warning, letting water creep down inside it toward the meter. Newer houses here take their share of limbs on the drop too. We go over the whole entrance first and quote before any work.',
  emergencyParagraph:
    'Call it an emergency when a limb tears the mast loose, the weatherhead throws sparks or part of the house goes dark. Treat any downed line as live, keep your distance and report it to the City of Greendale Electric Department. For the house end, we’re usually out the same day, weekends too.',
  commonIntro:
    'These are the signs we find most often on service masts in Greendale, on older houses and newer ones alike.',
  localFaqs: [
    {
      q: 'My house in Greendale gets power from the city. Does that change a mast repair?',
      a: 'The work on the house is the same. What changes is who we coordinate with, because the City of Greendale Electric Department shuts off and restores service rather than Duke. We schedule around their visits and line the inspection up between them, so you aren’t left juggling calls.',
    },
    {
      q: 'There’s rust running down from the mast fittings on my house in Greendale. Is that serious?',
      a: 'Usually it points to water slipping past a fitting or the weatherhead. From there it can run inside the entrance cable down to the meter box and panel, where it eats at connections out of view. We track down the leak, swap whatever’s corroded and reflash the roof opening.',
    },
  ],
  overrides: {
    ctaLine: 'Mast repair for postwar and newer houses across Greendale',
    band1Heading: 'Signs You Need Service Mast Repair in Greendale',
    commonSituations: [
      'Chalky, cracking insulation on the cable where it drops from the weatherhead of a 1950s house',
      'A meter box with rust streaks below it and a gap opening between the box and the siding',
      'A mast bent back toward the roof after a heavy branch came down on the service drop',
      'Flickering lights on one side of the house that started after a windy week',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Greendale',
        body: 'If the mast is sound and only a strap, the weatherhead seal or a section of flashing has failed, we fix that piece. If the pipe is bent, rusted or knocked over in a storm, we replace it. Entrance cable is the one part we never patch, and once its insulation turns cracked or chalky, it gets replaced. Many houses in Greendale date from before 1960, so we check the panel, the meter socket and the cable before planning a new mast, and we size the job to that house. Where it makes sense, we’ll also raise home rewiring.',
      },
      {
        title: 'Storm Damage to Service Masts in Greendale',
        body: 'Of all the reasons a mast needs work in Greendale, storms top the list. When a limb comes down across the overhead wires, the pole holds and your mast takes the pull, and a run of windy days does the same more gently. The bend matters because it cracks the roof boot or loosens the hook the wires hang from. Rain then gets in, and the city utility won’t put the power back until it’s fixed. Your side of the damage is a homeowner’s insurance claim. When limbs have fallen, glance up from the driveway for a plumb pipe, a snug weatherhead and a meter box lying flat.',
      },
      {
        title: 'The Utility’s Side and Yours in Greendale',
        body: 'The city’s own electric department serves Greendale, and it disconnects the house before a mast repair and reconnects it afterward. What’s on the house is yours, from the weatherhead and pipe down the riser and cable to the meter box. Our part usually wraps up in a single day, and the inspection has to pass before the department restores power. We file the permit and set up that inspection when you book.',
      },
    ],
    whyTitle: 'Why Homeowners in Greendale Choose Us for Mast Repair',
    whyParagraph:
      'Our licensed electricians start at the weatherhead and work down the service entrance, bring the mast up to code and seal the roof opening properly. Permits are our job from booking day, and the price is yours to approve beforehand.',
    sharedFaqs: [
      {
        q: 'How is mast repair priced in Greendale?',
        a: 'We look over the entrance and quote one fixed figure. Resetting a strap or sealing the weatherhead runs smaller than a new mast, and the cable length, new flashing and the permit play into it. Nothing goes ahead without your yes, and qualifying homeowners can finance.',
      },
      {
        q: 'How long will a service mast replacement take in Greendale?',
        a: 'The wiring itself is usually a single day. What sets the pace is the city’s electric department, which shuts off service first and won’t switch it back on until the inspector has signed off. Because we book that inspection alongside the job, the gap stays short.',
      },
      {
        q: 'Can high winds or falling branches damage a service mast?',
        a: 'Both can. A falling branch on the overhead wires bends the mast because the pole is the stronger anchor, and wind does it over weeks. Once the roof seal or wire hook works loose, rain finds its way in, and the city utility waits until the repair is done to reconnect.',
      },
    ],
  },
};
