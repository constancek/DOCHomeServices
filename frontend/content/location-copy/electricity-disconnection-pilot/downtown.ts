import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'For a building owner or condo association in Downtown Cincinnati, a utility disconnect stays in place until a licensed electrician corrects the fault on the building’s side and, nearly always, an inspector approves the correction. Census figures put about seven in ten homes here in buildings of fifty or more units, with a large share built in 1939 or earlier and another big group since 2010. Older buildings keep aging meter rooms; newer ones get cut over failed inspections. The diagnosis comes before a written quote.',
  emergencyParagraph:
    'When a building or townhouse goes dark, heat, cooling and any sump pump stop together, and the cost keeps climbing. Keep people away from a meter enclosure torn from a wall. A fallen line is a 911 call first, then Duke Energy Ohio. Most disconnection calls get an electrician on site the same day, weekends included.',
  commonIntro:
    'In the converted older buildings, newer condo towers and handful of townhouses in Downtown Cincinnati, a service is usually held off for one of these:',
  localFaqs: [
    {
      q: 'Who has to approve repairs to a meter room in a condo building in Downtown Cincinnati?',
      a: 'Usually the association. Meter banks and the building’s exterior and common areas are shared, so work there often needs board approval before it starts. A unit owner can report the problem, and we can diagnose it, but the association or its manager signs the quote and lets us into the meter room.',
    },
    {
      q: 'I rent an apartment in Downtown Cincinnati and our power was cut. What can I do?',
      a: 'Put it in writing to the landlord or the management office and keep your copy. ORC 5321.04 obliges Ohio landlords to keep the electrical fixtures and systems they provide safe and working. We get services back on and leave lease questions to others, so management hires us and signs the quote.',
    },
  ],
  overrides: {
    ctaLine: 'Service restored for buildings, condos and townhouses in Downtown Cincinnati',
    band1Heading: 'Common Causes of Electricity Disconnection in Downtown Cincinnati',
    commonSituations: [
      'One meter socket in a crowded meter bank burned, taking several units off with it',
      'A red tag on an old building converted to apartments, for an unsafe panel or exposed conductors',
      'Renovation work in a unit that was never permitted, caught when the utility asked for an inspection',
      'A flat that sat empty between tenants long enough to need its service checked',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Downtown Cincinnati',
        body: 'For a dark unit or building downtown, the first step is tracing the fault from where the service enters to the panel that feeds the space. We check the entrance conductors, the meter bank or socket, the panels, and the grounding and bonding, which tells us the size of the job and the permit it needs. Inspection Bureau, Inc. (IBI) inspects electrical work in the city, and we ask them for a date as soon as the repair is booked. The repair corrects grounding to current code as well. After the meter returns, power goes back circuit by circuit, with anything doubtful written up for the owner.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Downtown Cincinnati',
        body: 'Downtown, a utility tags a service when it finds something it refuses to switch on, such as a burned meter socket, a panel in unsafe shape, exposed conductors or a missing ground. The tag carries a reason, and the building stays off until a licensed electrician fixes that cause and the inspection passes. Patching only the visible damage gets nowhere. Building managers should hold on to every tag or hanger, as the problem is usually named there. Locked or pulled meters stay as found. Ohio makes tampering with metering a criminal offence, and in a shared building it endangers every unit on that service.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Downtown Cincinnati',
        body: 'When a flat has gone without tenants for a long time, it gets a careful check before power returns, more so in the older buildings. Some need only a short inspection; some need a panel, and we say which once we’ve looked. Refitting what was there and installing a properly sized modern service carry the same labour, permit and inspection, so the owner sees both prices.',
      },
    ],
    whyTitle: 'Why Building Owners and Associations in Downtown Cincinnati Choose Us for Disconnection Repair',
    whyParagraph:
      'Tenants in a dark building lose heat and pumps together, so these calls get emergency treatment. Our licensed electricians carry out the repair the utility named, deal with the permit and inspector, and fix the price first.',
    sharedFaqs: [
      {
        q: 'What does it cost to fix a disconnected service in Downtown Cincinnati?',
        a: 'Everything rests on what failed. Swapping one socket in a crowded meter bank is a short day compared with rebuilding a building’s service. Diagnosis comes first, then a flat written figure before work, and utility charges stay on the utility’s bill. Financing is available for qualifying homeowners.',
      },
      {
        q: 'How long will a building in Downtown Cincinnati be without power?',
        a: 'Our repair is often a single day. The inspection follows the inspecting office’s schedule, which we can’t speed up, and that usually sets the wait. Booking it alongside the repair is the step that saves the most time.',
      },
      {
        q: 'Can building staff remove the meter lock in Downtown Cincinnati?',
        a: 'No. The lock belongs to the utility, and in Ohio anyone tampering with metering equipment commits a criminal offence. That service was cut because something on it was judged unsafe, and switching it back early puts every unit it feeds at risk.',
      },
    ],
  },
};
