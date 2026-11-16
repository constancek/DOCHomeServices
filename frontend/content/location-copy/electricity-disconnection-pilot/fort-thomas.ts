import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fortThomas: LocationServiceCopy = {
  localParagraph:
    'Half a house without power in Fort Thomas usually points to one lost leg of the service, while a full outage the utility refuses to restore means a licensed electrician must repair the equipment the owner is responsible for, with an inspector’s approval in most cases. Census figures put the median house here at 1955, and about a third are older than 1940, so original panels and weak grounding come up often. We diagnose before quoting, and the quote is in writing.',
  emergencyParagraph:
    'In Fort Thomas, losing the service means the furnace stops, the air conditioning stops and the sump pump stops, and none restart until power returns. If the meter box is coming off the siding, give it room. For a line on the ground, call 911, then Duke Energy Kentucky. Most calls get an electrician that day, weekends included.',
  commonIntro:
    'Across the pre-war and mid-century houses of Fort Thomas, a disconnection usually starts with one of these:',
  localFaqs: [
    {
      q: 'Why does only half my house have power in Fort Thomas?',
      a: 'Most likely one leg of your two-leg service is gone, either at the overhead drop or at a connection in the panel. Have it checked quickly, because a house left on one leg puts odd voltages across motors and control boards. We work out which leg failed and price the repair before starting.',
    },
    {
      q: 'Who issues the electrical permit in Fort Thomas?',
      a: 'Permits for electrical work come from the city’s General Services Department here, while the inspection itself is done by an inspector from the state. Any contractor working in town must hold the city’s occupational license. We handle the filing and request the state visit when the repair is scheduled, so the utility’s sign-off isn’t held up.',
    },
    {
      q: 'What should I do if my rental in Fort Thomas has no power?',
      a: 'Let the landlord know in writing and save a copy, because work on the service is the owner’s to arrange and pay for. Our job is the power, not the lease. Buildings on a shared meter bank may need the association to sign off exterior work, and we can take that up with them.',
    },
  ],
  overrides: {
    ctaLine: 'Power reconnected for older homes in Fort Thomas',
    band1Heading: 'Common Causes of Electricity Disconnection in Fort Thomas',
    commonSituations: [
      'Half the house dark after one leg failed inside an original panel',
      'A red tag on a pre-war house for exposed conductors or missing grounding',
      'A meter socket on a 1950s service that overheated until the plastic melted',
      'Storm damage on the owner’s side, with a limb through the drop or the mast pulled loose',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Fort Thomas',
        body: 'A dark house calls for a full look, not a guess at whatever seems broken. We inspect the mast, weatherhead and entrance cable outside, then the meter base, and then the panel with its ground and bond connections, which shows us the repair and the permit. While fixing the fault, we also bring grounding and bonding to present-day code, since the inspector reviews them no matter what caused the cut. The inspection is requested alongside the repair so it doesn’t lag. After the meter returns, circuits are restored singly, labels go on the panel, and we write down anything to monitor, aluminium branch wiring for example.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Fort Thomas',
        body: 'The utility’s property ends at the meter and the overhead wire, which surprises many owners. Behind that, the socket box, mast, weatherhead, service cable and panel are the homeowner’s, so their repair is yours to book and storm damage to them is a question for your insurer. A red tag marks that equipment unsafe to energise. Cleaning it up doesn’t remove the tag, while a licensed electrician correcting the fault and an inspector passing it does. Save the tag or note, as it usually spells out the problem. Leave a meter lock alone, since tampering with one is a crime in Kentucky.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Fort Thomas',
        body: 'Most houses here were built before 1960, so an inherited or long-vacant home in Fort Thomas often carries a service far behind current code. A service dead that long is handled cautiously before power goes back. A brief look clears some, and some need a new panel, which we confirm only after inspecting. You get two prices, the same equipment refitted or a correctly sized modern service, as labour and permit don’t change.',
      },
    ],
    whyTitle: 'Why Homeowners in Fort Thomas Choose Us for Disconnection Repair',
    whyParagraph:
      'With no service, the heat and sump pump stop, so a disconnection moves up our list. Licensed electricians repair the fault the utility found, file the city permit, walk the inspector through it and set the price in advance.',
    sharedFaqs: [
      {
        q: 'How is the cost of disconnection repair set in Fort Thomas?',
        a: 'Each failure has its own price. Rebuilding one meter base and replacing a whole service are separate jobs, so we diagnose before quoting. You then approve one flat rate in writing, with the utility’s charges left out of it. Qualifying homeowners can spread the cost with financing.',
      },
      {
        q: 'How long will it take to restore power in Fort Thomas?',
        a: 'Often the repair is a one-day job. The inspection takes longer to arrange, since the inspector keeps their own schedule, so we ask for it the moment the work is booked. That single habit trims more off your time without power than anything else.',
      },
      {
        q: 'Is it legal to remove the meter lock in Fort Thomas?',
        a: 'No. Kentucky makes it a crime to tamper with utility meters, and only the utility removes its lock. If the cut was for a fault, forcing power back would also feed equipment already judged dangerous. When the repair passes inspection, the utility does the reconnect.',
      },
    ],
  },
};
