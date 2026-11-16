import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'In Reading, the utility keeps a disconnected house dark until our licensed electrician repairs the owner’s equipment and the inspector, nearly always, signs it. Mill Creek is part of the story, since the city says the creek has flooded Reading since its founding and a panel that sat in floodwater stays off until it’s replaced. Census figures give a median build year of 1956, with almost a quarter of homes older than 1940, so worn panels and weak grounding turn up too. You see the price on paper first.',
  emergencyParagraph:
    'Lose the service in Reading and the sump pump goes down with the furnace or AC, bad news for a basement near Mill Creek. Steer clear of a meter box that has peeled off the wall. A wire on the ground is for 911 and Duke Energy Ohio before us. Same-day help reaches most callers, weekends no exception.',
  commonIntro:
    'Older basements and the Mill Creek floodplain account for most of the disconnection calls we get in Reading:',
  localFaqs: [
    {
      q: 'Can my panel be turned back on after Mill Creek flooding in Reading?',
      a: 'Not until it’s been opened up and checked. Floodwater leaves silt, rust and soaked insulation inside breakers and the meter socket, so those parts come out rather than going back into service. We replace what the creek reached, the inspector looks it over, and then the utility reconnects. Whether your insurer pays is a question for them.',
    },
    {
      q: 'What should a tenant in Reading do after a disconnection notice?',
      a: 'Write to your landlord, date it, and keep your own copy and a picture of the notice. Roughly four homes in ten are rented here, so it’s a common call. Ohio’s ORC 5321.04 leaves the landlord responsible for keeping the electrical systems they supplied safe, which means the owner hires us. Leases are between you two.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for older and flood-hit houses in Reading',
    band1Heading: 'Common Causes of Electricity Disconnection in Reading',
    commonSituations: [
      'A basement panel that sat in Mill Creek floodwater and can’t go back into service',
      'A 1950s house whose meter socket has scorch marks and melted plastic',
      'A two-family or small apartment building tagged for missing grounding',
      'Old wiring work found during a sale that was never permitted or inspected',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Reading',
        body: 'We start up at the weatherhead, work down the mast and service cable, open the meter base, then the panel, and finish at the grounding and bonding. That walk decides which repair you need and which permit goes with it. We file it and ask for the inspection together, because the inspector’s date is what decides when power returns to your house in Reading. Grounding gets brought to present code while we’re in there. After the reconnect we bring breakers up one at a time, not all at once with the main, and leave a written list of anything to keep an eye on, like an overloaded subpanel.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Reading',
        body: 'When the utility tags a house in Reading, the reason is usually an unsafe panel, missing grounding, live parts within reach, or wiring somebody added without a permit. That tag is a standing order, not a formality. Sweeping up the visible problem leaves it in place. It comes off after our licensed electrician fixes the underlying cause and the inspector approves the fix. Hand us whatever paper the utility left; its printed reason shortens diagnosis. A pulled meter or one with a lock on it stays as found; in Ohio that equipment is protected by law, and forcing it would energize a refused service.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Reading',
        body: 'The dead services we see in Reading include rentals between tenants and older houses left empty after a sale. Those get extra care before anything is turned on, because the panel or ground can be decades behind code. A short check sometimes covers it, and sometimes the panel is replaced; we tell you after looking. Putting the old equipment back costs much the same in labor and paperwork as a modern service sized for the house, so we quote both.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Reading Choose Us for Disconnection Repair',
    whyParagraph:
      'An outage in Reading can mean a basement taking water with the sump pump dead, so these calls go first. Licensed electricians make the fix the utility needs, see to the permit and the inspector, and price it first.',
    sharedFaqs: [
      {
        q: 'How much will it cost to get my power back in Reading?',
        a: 'Whatever broke sets it. A lone scorched socket might be a morning, while a service ruined by creek water is a much bigger job. After we diagnose, one fixed figure goes on paper for your approval, and the utility bills its own charges separately. Financing is offered to homeowners who qualify.',
      },
      {
        q: 'How long does a reconnection take in Reading?',
        a: 'Plan on our repair taking one working day in most cases. The longer piece is the inspection, and its date belongs to the building department, so we put the request in when you approve the work rather than when we pack up.',
      },
      {
        q: 'Is it legal to reconnect my own meter in Reading?',
        a: 'No. Once the utility pulls or locks a meter, only they reinstall it, and Ohio law makes interfering with it a crime. There is also the reason it was cut, a fault on your side, and switching power back on before that is fixed sends current straight into it.',
      },
    ],
  },
};
