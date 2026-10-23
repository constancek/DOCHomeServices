import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const covington: LocationServiceCopy = {
  localParagraph:
    'Most Covington heating calls take us down to a basement gas furnace in a house far older than the furnace. Census figures put 44.0% of homes at 1939 or earlier, and their ductwork was squeezed between plaster walls decades after construction, which is why the top floor runs cold. About 37.7% of homes heat with electricity, many of them apartments. Nearly half of Covington households rent, so the owner normally approves the repair. You’ll know the cause and the cost before a single part comes off.',
  emergencyParagraph:
    'Babies, older relatives and anyone ill feel it first, and in Covington that is often a top-floor flat or the back bedroom of a rowhouse. NOAA normals put CVG’s January low near 23F, cold enough to freeze pipes in a house left without heat. We get to most Covington furnace and heat pump calls that day, Saturdays and Sundays too.',
  commonIntro:
    'Covington heat mostly comes from basement gas furnaces in old brick houses, with electric units in a lot of the apartments. Here’s what usually brings us out:',
  localFaqs: [
    {
      q: 'Do Covington’s historic overlay zones affect furnace work?',
      a: 'Not a repair, because the furnace is indoors. Covington’s seven Historic Preservation Overlay zones require a Certificate of Appropriateness before exterior changes. So if a new high-efficiency furnace needs a vent pipe through an outside wall in one of those zones, we check with the city’s Historic Preservation Office before drilling anything.',
    },
    {
      q: 'My Covington apartment has no heat. Should I call you or my landlord?',
      a: 'Call your landlord or property manager first. In Covington the owner normally decides on heating repairs and pays for them, and many buildings already have a contractor. If the owner sends us, we arrange access with you, explain the fault to both of you and get the owner’s approval on price.',
    },
  ],
  overrides: {
    ctaLine: 'Covington heating repair, from rowhouse basements to apartment closets',
    band1Heading: 'Common Furnace Problems in Covington Homes',
    commonSituations: [
      'A basement gas furnace that lights, then shuts off a minute later',
      'Third-floor rowhouse bedrooms that stay cold while the parlor is warm',
      'An electric furnace in an apartment closet that keeps tripping its breaker',
      'A loud thump from an older burner each time it lights',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Rule out five things first. The thermostat has to be on heat, with fresh batteries. The furnace has its own switch, sometimes a wall switch near the basement stairs that gets flipped by mistake. Then the breaker, the filter, and the front cover, since many furnaces refuse to fire with it sitting loose. If one of those was the problem, skip the call. Book us for short-cycling, a thump at ignition or a breaker that won’t hold. On any whiff of gas, walk out without flicking a light or relighting the burner, and ring Duke Energy Kentucky from the sidewalk. A beeping carbon monoxide detector means the household leaves first.',
      },
      {
        title: 'Repair or Replace Your Covington Furnace?',
        body: 'Covington houses outlive several furnaces, so the date on the furnace label is what counts. An 1890s rowhouse might have a unit from a few years back, and replacing its inducer motor or flame sensor is money well spent. A furnace that needed a blower motor last winter and a control board this one is where we put two prices on the table. A heat exchanger with a split in it is different: exhaust, carbon monoxide included, can mix into the air you breathe, so we tag the furnace off. Planning and Development Services of Kenton County issues the permit for a new furnace, and our office files it.',
      },
    ],
    whyTitle: 'Why Covington Owners and Landlords Call Us About Heat',
    whyParagraph:
      'Since 1993 we’ve been a family business, and every technician we send is licensed, insured, background-checked and drug-tested. Tenant and owner hear the same plain explanation, and the owner signs off on a flat price first.',
    sharedFaqs: [
      {
        q: 'How much is furnace repair in Covington?',
        a: 'No honest number exists before the furnace is tested, since the broken part decides it. Scrubbing a flame sensor takes minutes, while swapping an inducer motor in a cramped Covington basement takes a good while longer. The flat-rate quote comes before any part is replaced, and a Sunday call is priced like a Tuesday.',
      },
      {
        q: 'Should I repair or replace an old furnace in Covington?',
        a: 'The furnace’s data plate matters more than the house’s age in Covington. If one part failed and the rest of the furnace is in good shape, repair it. Several large repairs in a row, or a heat exchanger with a crack, push toward replacement, and you see both prices side by side.',
      },
      {
        q: 'Why is my Covington furnace blowing cold air?',
        a: 'Check the fan: set to auto, it only blows while heating; set to on, it never stops. A choked filter lets the furnace run hot until a safety limit cuts the flame, though air keeps moving. A burner that never catches points to the igniter or a dirty flame sensor. Electric elements that burn open do it too.',
      },
    ],
  },
};
