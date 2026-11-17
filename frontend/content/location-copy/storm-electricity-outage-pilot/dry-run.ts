import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dryRun: LocationServiceCopy = {
  localParagraph:
    'If a limb comes down on the service drop in Dry Run and your house stays dark once the neighbours are back on, the damage is on equipment you own, usually at the mast, the meter base or inside the panel. Census figures show nearly every home here is a detached, owner-occupied house, mostly from the 1970s through the 2000s, so worn wiring is rarely the story. Pulled masts and surge damage to furnace boards are. Call early; we photograph first and then set the price.',
  emergencyParagraph:
    'Without power, the furnace and air conditioning stop and the sump pump can’t clear water while the storm keeps dropping rain. Treat a fallen line as live and call 911 and the utility first. Electricians fill their books quickly after a storm, though most calls still get one that day, weekends included.',
  commonIntro:
    'Dry Run is almost all detached houses on a hilly stretch of Anderson Township, so storm damage here tends to start where the service drop meets the house:',
  localFaqs: [
    {
      q: 'Can we run a generator while we wait for the storm repair in Dry Run?',
      a: 'Yes, provided it runs outdoors at a safe distance from windows and doors, with extension cords taking power to whatever you need running. The danger comes from feeding it into a wall outlet or the panel with no transfer switch, which energises the line outside and can electrocute the crew restoring it.',
    },
    {
      q: 'Does a storm repair in Dry Run need a permit and an inspection?',
      a: 'Both, yes. A rebuilt mast, meter base or entrance cable stays unpowered by the utility until the permit is on file and the inspector has seen the work. Here in Anderson Township, part of unincorporated Hamilton County, Inspection Bureau, Inc. (IBI) handles that electrical permit and inspection. Emergency work can begin first.',
    },
  ],
  overrides: {
    ctaLine: 'Storm-bent masts and pulled meter boxes repaired in Dry Run',
    band1Heading: 'Storm Damage We Repair in Dry Run',
    commonSituations: [
      'A mast bent over after a limb landed on the service drop running to the house',
      'A meter box pulled from the siding of a 1980s house, with the conduit torn loose',
      'Entrance cable crushed or stretched in the storm, which we replace rather than tape',
      'A dead furnace control board and range after a nearby strike, with nothing looking wrong outside',
    ],
    proseSections: [
      {
        title: 'When Your House Stays Dark After a Storm in Dry Run',
        body: 'Up and down the road the neighbours have lights, and your own kitchen in Dry Run is still dark. That means your own equipment took the hit, whether it’s the weatherhead at the roof, the mast, the cable coming down the wall, the meter box or the panel, and all of that is the homeowner’s. The utility restores its lines yet refuses to hook up a snapped mast or a box swinging off the siding. We photograph the damage, rebuild it, see the permit and inspection through, and after that your utility switches the power back.',
      },
      {
        title: 'Storm Safety Before the Repair in Dry Run',
        body: 'On the slopes here, a wind-downed wire might end up across a flower bed or the drive, and it’s live until the utility says otherwise. Keep well off, bring kids and pets in, and leave the branches where they lie. Dial 911 and then the utility. Set a portable generator on the lawn, clear of doors and windows, and run cords from it to what you need. Connecting it to a socket or the panel without a transfer switch sends power up the drop toward a lineworker and can kill. One reset of a tripping main breaker is enough. Call us about the mast or meter before yard work.',
      },
      {
        title: 'Surge Damage After a Storm in Dry Run',
        body: 'In houses as young as these, the surge, not the mast, usually runs up the bill. A bolt near the line pushes a spike through each plugged-in thing, and electronics like the furnace board, the heat pump inverter, the range and the TVs take the worst of it. With your service already in pieces for the repair, have us fit a whole-home surge protector at the panel then; nothing else we install costs less.',
      },
    ],
    whyTitle: 'Why Homeowners in Dry Run Call Us After a Storm',
    whyParagraph:
      'We treat a powerless house after a storm as urgent. Our licensed electricians shoot photos for the claim, swap out whatever mast, meter base or cable gave way, walk the inspector round, and settle the price before work starts.',
    sharedFaqs: [
      {
        q: 'Why is my house in Dry Run still dark when the neighbours have power?',
        a: 'Restoration stops at the meter, because the utility only puts back what it owns. When a storm has torn the meter box off the siding or bent the mast flat, the crew leaves it off, and it stays that way until our licensed electrician rebuilds it and it passes inspection.',
      },
      {
        q: 'What will my insurer need after storm damage to our house?',
        a: 'Count on the adjuster asking for photos and an itemised invoice. Storm damage to the homeowner’s equipment is handled under your own insurance, not by the utility, and the insurer alone decides what it pays. We photograph it before the repair and break the invoice out, and financing is available for qualifying homeowners.',
      },
      {
        q: 'How soon can you come to Dry Run after a big storm?',
        a: 'As soon as you can call, call, ideally before the cleanup. The morning after a big storm, everybody calls the same afternoon, and the electricians and inspectors get taken in turn. We reach most calls the same day, and the repair itself is usually one day’s work.',
      },
    ],
  },
};
