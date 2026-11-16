import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const norwood: LocationServiceCopy = {
  localParagraph:
    'Once a fault gets the meter pulled at a house in Norwood, it stays out until our licensed electrician has put the owner’s equipment right and, most of the time, an inspector has passed the work. Norwood was a railroad suburb, then a factory town, and Census figures put two-thirds of its homes before 1940, with a quarter in two- to four-unit buildings. Houses that old may still carry a first panel, thin grounding or a socket worn by generations of load. We diagnose, then price it in writing.',
  emergencyParagraph:
    'Without power, both halves of a two-family lose heat or cooling and the sump pump stops, so each cold or wet day costs more. Leave a meter box that has peeled off the wall well alone. Call 911 and Duke Energy Ohio first about any line that’s come down. We usually have an electrician there the same day, weekends included.',
  commonIntro:
    'Across the old two-families and frame houses that fill Norwood, we keep running into the same causes:',
  localFaqs: [
    {
      q: 'Since Norwood is its own city, does that change the permit?',
      a: 'It does change who you deal with, since the city has its own building department rather than Cincinnati’s offices. You don’t need to sort that out. We file the electrical permit, request the inspection as soon as the work is booked and stand there with the inspector, which is the sign-off the utility waits for.',
    },
    {
      q: 'Who should book the repair when half of a two-family goes dark in Norwood?',
      a: 'The owner should. As the tenant, put it to the landlord in a dated note, keep your copy and photograph any hanger. In Ohio, ORC 5321.04 makes a landlord keep the electrical systems they provide safe and in proper repair. We sort the service out for whichever owner books us and stay out of the lease.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection repairs for old houses and two-families in Norwood',
    band1Heading: 'Common Causes of Electricity Disconnection in Norwood',
    commonSituations: [
      'A two-family red-tagged because its grounding was never updated',
      'A socket in a 1930s house that finally burned through after years of load',
      'Half the rooms dark after one leg of the service dropped in the panel',
      'A basement panel rewired without a permit and caught at a sale',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Norwood',
        body: 'We start up at the roofline because the service is already off. Weatherhead, mast and entrance cable get checked first, then the meter base, the panel and every ground and bond in the basement. From that you learn whether the fix is the mast, a meter base or the whole panel, and which permit we file. Our inspection request is lodged the moment you agree to the job, not after we pack up. Grounding comes up to today’s code in the same visit. With the inspector satisfied and the meter reinstalled, circuits return in sequence, and anything we’d watch goes on paper for you.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Norwood',
        body: 'In Norwood, the tags we’re handed tend to name a dangerous panel, no grounding, live parts left uncovered or wiring that never saw a permit. The utility hangs that tag for a reason, and painting over or patching what you can see won’t talk it off. It comes off once the cause is corrected by a licensed electrician and the work is passed by an inspector. Leave the tag or hanger in place for us to read, since it generally explains the cut. Keep away from a pulled or locked meter. Under Ohio law meter tampering is criminal, and doing it would push power back into a service already refused.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Norwood',
        body: 'Rentals make up just over half the homes in Norwood, and a unit left dark between tenants gets extra care before we energise it, because the panel or ground in a house this age may trail today’s code. One look tells us whether a short inspection clears it or a new panel is due. Refitting old equipment costs no less in labour, permit and inspection than fitting a right-sized new service, so we price them side by side.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Norwood Choose Us for Disconnection Repair',
    whyParagraph:
      'In a two-family, a dead service leaves two households without heat or a sump pump, so we move quickly. Licensed electricians correct what the utility found, take the permit and inspector off your hands and give a written price first.',
    sharedFaqs: [
      {
        q: 'How do you arrive at a price for reconnection work in Norwood?',
        a: 'Nothing gets priced until we’ve looked. A new meter base and a full service replacement sit at opposite ends of the scale, so after the diagnosis you sign off on one flat figure in writing before work starts. Utility charges are billed apart from ours, and qualifying homeowners can finance it.',
      },
      {
        q: 'How soon will a house in Norwood have power again?',
        a: 'Our repair on these old services often takes a single day. The real wait tends to be the inspection, which keeps the inspector’s timetable rather than ours. Asking for it on booking day, not at the end, pulls the reconnect forward further than anything else we do.',
      },
      {
        q: 'Could a landlord just put the meter back in at a house in Norwood?',
        a: 'No. In this area the line and the meter belong to the utility while the box, mast and panel are the owner’s, and that lock comes off only at the utility’s hand. Ohio treats tampering with it as a crime, and the original fault would still be waiting in the service.',
      },
    ],
  },
};
