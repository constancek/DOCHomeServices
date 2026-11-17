import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'When a building in Downtown Cincinnati stays dark after a storm, the fault is almost always on equipment the owner or association holds. By Census figures, most homes here sit in towers of fifty units or more and most households rent; the stock splits between pre-war buildings and ones completed since 2010. The pre-war share more often still has original service cable and aged panels, so a storm can do more than it first appears. Owners get our photographs and a fixed price before anything is touched.',
  emergencyParagraph:
    'A dark building means residents without heat or air conditioning, and a basement sump that stops while rain is still falling. Spot a line down near the entrance and the first calls are 911 and Duke Energy Ohio. Our diary fills fast the morning after, yet most calls still get an electrician before the day is done, weekends too.',
  commonIntro:
    'Downtown Cincinnati is mostly large residential buildings, old and new, and these are the storm repairs owners and associations bring us:',
  localFaqs: [
    {
      q: 'I rent an apartment in Downtown Cincinnati and it’s dark after a storm. What should I do?',
      a: 'Put it in writing to your landlord or the management office and attach any photos you can take safely. Ohio’s ORC 5321.04 holds owners to keeping the electrical systems that come with the unit in good and safe working order. Our work is storm repair, not lease disputes, so management books us.',
    },
    {
      q: 'Does storm work on a condo building in Downtown Cincinnati need the board’s approval?',
      a: 'Usually. Repairs to shared meters or the outside walls can need the board’s sign-off, so the board or its manager tends to book the work. We document the damage, quote the board, and line up the permit and inspection so each unit can be reconnected.',
    },
  ],
  overrides: {
    ctaLine: 'Storm repairs for building owners and associations in Downtown Cincinnati',
    band1Heading: 'Storm Damage We Repair in Downtown Cincinnati',
    commonSituations: [
      'A meter bank on an older building scorched after a strike, which can’t go back into service until it’s replaced',
      'Surge damage to breakers and the panel bus in a large building while the outside looks untouched',
      'Water running into the service through a broken weatherhead on a pre-war building',
      'A townhouse or small building with its meter box pulled off the wall by a fallen limb',
    ],
    proseSections: [
      {
        title: 'When Your House Stays Dark After a Storm in Downtown Cincinnati',
        body: 'From a dark unit you can often see the next tower lit up, and when that happens in Downtown Cincinnati, the fault is on equipment the building’s owner holds. The utility owns the poles or underground line feeding the building and the meter, while the service equipment, the meter boxes and the panels belong to the owner, which surprises a lot of people. Utility crews go as far as the meter and no further, and they refuse to energise damaged gear. We photograph the damage, repair it and pull the permit. Then Inspection Bureau, Inc. (IBI), the city’s electrical inspector, checks the work before the reconnect.',
      },
      {
        title: 'Storm Safety Before the Repair in Downtown Cincinnati',
        body: 'Downtown, a fallen line can land on a sidewalk or a parked car, and either way it counts as live. Keep people well back, bring children and pets in, and let the utility deal with any branches on it once 911 has been called. A building manager with a portable generator runs it outdoors, away from windows and doors, and plugs equipment into it directly; without a transfer switch, wiring it into the building pushes current back up the line to a lineworker who can be killed by it. A main breaker that trips twice stays off. Tell us about meter or service entrance damage before the cleanup begins.',
      },
      {
        title: 'Surge Damage After a Storm in Downtown Cincinnati',
        body: 'For an owner with many units, the surge can cost far more than the outage. One strike near the service sends a spike down every circuit, from the panels and breakers to the ranges, the televisions and the heat pump and furnace controls in each unit. When the service is being rebuilt after the storm, that same job is the right time to put whole-home surge protection at the panel; it’s the most affordable protection we install.',
      },
    ],
    whyTitle: 'Why Owners and Associations in Downtown Cincinnati Call Us After a Storm',
    whyParagraph:
      'A dark building is an emergency for its residents, and we respond that way. Licensed electricians photograph the damage for the insurer, repair the service equipment, meet the city’s inspector and set the price with the owner before work.',
    sharedFaqs: [
      {
        q: 'Why is the building next door lit while ours in Downtown Cincinnati is dark?',
        a: 'Restoration crews handle the utility’s own equipment and nothing past the meter. If storm damage has left the meter equipment or service entrance unsafe, the crew won’t reconnect, and the building stays off until a licensed electrician repairs it and the inspector approves.',
      },
      {
        q: 'What does an insurer need from a building owner after storm damage?',
        a: 'Adjusters want an itemised invoice and clear photographs of what the storm broke. Storm damage to the owner’s service equipment is an insurance matter rather than one for the utility, and the policy terms decide what gets paid. We photograph before touching anything and itemise the work line by line.',
      },
      {
        q: 'How soon can an electrician get to a building in Downtown Cincinnati after a storm?',
        a: 'Call as early as you can. After a big storm, owners all over the city ring the same morning, and electricians and inspectors book jobs in the order they come in. Most calls still see us the same day, and the repair itself typically fits inside a single day.',
      },
    ],
  },
};
