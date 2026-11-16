import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const silverton: LocationServiceCopy = {
  localParagraph:
    'Silverton is a village of narrow lots and small rental buildings, and a door hanger left here usually gives the reason. Power stays off until the owner’s equipment has been put right by one of our licensed electricians and signed off by the village’s inspector. The median home dates to 1959, Census figures show, with almost three in five homes rented and many in three- and four-unit buildings, so mid-century panels and worn grounding are most of our work. You get the diagnosis, then the price on paper.',
  emergencyParagraph:
    'With the service cut to a house or building in Silverton, the furnace or AC goes off and the sump pump quits. Keep your distance from any meter box that has broken loose. A fallen wire is for 911 and Duke Energy Ohio first. Most callers get an electrician the same day, weekends no different.',
  commonIntro:
    'On the narrow lots and in the small rental buildings around Silverton, these disconnections come up most:',
  localFaqs: [
    {
      q: 'Who inspects electrical repairs in the Village of Silverton?',
      a: 'In Silverton, the village contracts with National Inspection Corporation (NIC) to enforce its building and electrical codes, so NIC is the inspector you’ll meet. Work on a meter base, mast, service entrance or panel requires a permit and that inspection. We handle both, requesting the inspection when the repair is booked, since it usually decides the wait.',
    },
    {
      q: 'My landlord in Silverton got a door hanger from the utility. What should I do?',
      a: 'Send your landlord a dated message about the hanger and keep it, along with a photo of the hanger itself. ORC 5321.04 makes Ohio landlords keep supplied electrical systems safe and working, and in a three- or four-unit building the owner books one repair for the whole service. Wiring is our work; leases are theirs.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for houses and small rental buildings in Silverton',
    band1Heading: 'Common Causes of Electricity Disconnection in Silverton',
    commonSituations: [
      'A door hanger on a four-unit building citing exposed conductors at the meters',
      'A mid-century panel that an inspector flagged and won’t pass as it is',
      'Half the rooms dark in a 1950s house after one leg of the service failed',
      'A burned meter socket on a house set close to its neighbor on a narrow lot',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Silverton',
        body: 'Bring out the door hanger before anything else, since it often names the fault. From there one of our electricians traces the service, roof attachment and mast first, then the meter socket, the panel and finally the ground connections, and that shows what must be replaced and which permit fits. Filing and the inspection request happen the day you book, because the inspector’s date keeps houses dark longest in Silverton. During the repair the grounding is put right to present code. With the meter reinstalled, breakers go on one after another, and a written note covers anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Silverton',
        body: 'In Silverton, tags usually cite an unsafe panel, missing grounding, conductors left exposed, or wiring changed in a rental between tenants without a permit. A red tag tells everyone not to energize, and the utility doesn’t hand them out lightly. It stays put while the cause remains, and comes down only after our licensed electrician corrects that cause and the inspector approves the work; cleaning up the look of things won’t do. Keep the hanger. A pulled or locked meter is not to be touched, since Ohio makes meter tampering a criminal offence and it would energize equipment already rejected as unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Silverton',
        body: 'Rentals turn over in Silverton, and a unit whose service has been off since the last lease ended gets a slower restart from us, because an idle panel or ground connection may lag behind code. A short inspection might be enough, or the answer might be a new panel, and we say which after the visit. A refit and a modern, correctly sized service cost about the same in labor, permit and inspection, so the quote shows both.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Silverton Choose Us for Disconnection Repair',
    whyParagraph:
      'In Silverton, a rental or house without service has no heat and the sump pump has stopped, so we answer quickly. Licensed electricians repair whatever the utility cited, file the permit, meet the inspector and settle the price first.',
    sharedFaqs: [
      {
        q: 'How much does it cost to fix a disconnection in Silverton?',
        a: 'Price depends on what failed. Swapping a burned socket in Silverton takes far less than rebuilding the service for a four-unit building. We diagnose, write down one flat figure, and wait for your yes before starting; whatever the utility charges is billed by them. Homeowners who qualify can finance.',
      },
      {
        q: 'How long will the power be off in Silverton?',
        a: 'Our repair is commonly done within one working day. The inspection usually decides how much longer you wait, since the inspector sets that date. We request the inspection as soon as the job is approved, which is the most useful thing anyone can do to shorten it.',
      },
      {
        q: 'Can I put my own meter back in Silverton?',
        a: 'No. That meter is utility equipment, and Ohio treats tampering with one that has been pulled or locked as a crime. The cut also followed a fault, so a homemade reconnect would send current back into equipment still unsafe.',
      },
    ],
  },
};
