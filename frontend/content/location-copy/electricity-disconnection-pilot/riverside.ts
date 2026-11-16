import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const riverside: LocationServiceCopy = {
  localParagraph:
    'Riverside is a narrow strip between River Road and the Ohio. The utility restores nothing here until the owner’s equipment is repaired by one of our licensed electricians and, almost always, approved by the electrical inspector. Census figures put over a third of homes in buildings of ten units or more, with a median build year of 1971 and some much older houses mixed in. So meter banks, tired original panels and flood exposure all come up. We diagnose before we quote, and the quote is written.',
  emergencyParagraph:
    'When power fails at a building in Riverside, heat, air conditioning and sump pumps all quit together. Children and pets should stay well away from any meter box hanging loose. If wire is down, the calls go to 911 and Duke Energy Ohio ahead of us. Most callers see an electrician that day, Saturday or Sunday included.',
  commonIntro:
    'Between the apartment buildings on the river side and the older houses below the hillside, these are the disconnections we handle most in Riverside:',
  localFaqs: [
    {
      q: 'Who handles a burned meter bank on an apartment building in Riverside?',
      a: 'The building owner or the association does. The utility owns the meters themselves, but the bank they plug into, its sockets and the wiring behind it belong to the building. Work on a shared bank or the outside wall may need association approval first, so the owner or board books us and approves a written price.',
    },
    {
      q: 'If my apartment in Riverside has no power and the landlord got a notice, what now?',
      a: 'Put the problem to your landlord or the management office in a dated letter or email and save it. Under ORC 5321.04, Ohio places the upkeep of supplied electrical systems on the landlord, and residents of managed buildings route everything through the office. Whoever owns the building hires us; the lease is not our department.',
    },
    {
      q: 'Can a panel that flooded in Riverside be switched back on?',
      a: 'No. The National Weather Service says a major Ohio River flood puts most property between Route 50 and the river under water downstream of the city, and any panel or meter base that went under has to be checked and usually replaced before it’s energized. The inspector signs off on that work before the utility reconnects.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for apartment buildings and older houses in Riverside',
    band1Heading: 'Common Causes of Electricity Disconnection in Riverside',
    commonSituations: [
      'One scorched position in the meter bank of a River Road apartment building',
      'A panel on the river side that took floodwater and can’t be re-energized',
      'An older house below the hillside red-tagged for missing grounding',
      'One unit in a small building with half its circuits dead after a lost leg',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Riverside',
        body: 'Because Riverside sits inside the city, electrical permits here are reviewed and inspected by Inspection Bureau, Inc. (IBI), and getting that inspection on the calendar is what shortens your outage, so we request it the day the job is booked. Before that, we diagnose the whole service, roof attachment to ground rod, and say plainly whether it needs a meter socket or something bigger. During the repair, bonding and grounding are corrected to current code. After the meter is reset, we switch circuits on individually rather than throwing the main, mark up the panel and hand over notes on anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Riverside',
        body: 'Around Riverside, tags tend to go on for exposed conductors at a meter bank, missing grounding, an unsafe panel, or wiring changed during a rehab without a permit. The tag is the utility’s order not to energize, and it stays until the cause is fixed by a licensed electrician and an inspector approves the fix. Making the hazard look tidier changes nothing. Keep the door hanger or notice they left, since it normally names the reason and saves diagnosis. If the meter is locked or missing, don’t touch the lock or the socket. That is a criminal offence in Ohio, and it would feed power to equipment judged unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Riverside',
        body: 'An apartment in Riverside that sat empty for a while, or an older house below the hill, gets careful handling before power returns, since its panel or ground may be well short of code. Sometimes a brief look clears it; sometimes a panel replacement follows, and you hear which only after we look. Rebuilding what was there or fitting a correctly sized new service costs about the same in labor and inspection, so both go on the quote.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Riverside Choose Us for Disconnection Repair',
    whyParagraph:
      'When a building in Riverside is without service, heat and sump pumps stop, so we treat it as an emergency. Licensed electricians make the repair the utility needs to see, file the permit, meet the inspector and quote first.',
    sharedFaqs: [
      {
        q: 'What does it cost to restore a disconnected service in Riverside?',
        a: 'It hinges on what gave out. One burned spot on a meter bank is a modest repair; rebuilding the service in a building that took river water is not. You approve one flat number, written down after the diagnosis and before work, and any utility charge stays on their bill. Qualifying homeowners may finance.',
      },
      {
        q: 'How soon can the power come back on in Riverside?',
        a: 'In Riverside, the repair itself rarely needs more than one working day. Where outages drag is the wait for the inspector, which no contractor controls. Our habit is to request the inspection when the job is approved, and that does more than anything to bring power back sooner.',
      },
      {
        q: 'Am I allowed to restore power myself in Riverside?',
        a: 'No, and please don’t try. A locked or pulled meter is utility property that only the utility reinstalls, and Ohio law treats interfering with it as a crime. The cut was also made over a fault, so getting around it would feed power into a service already refused.',
      },
    ],
  },
};
