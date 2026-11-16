import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const collegeHill: LocationServiceCopy = {
  localParagraph:
    'If half the rooms in a house in College Hill are dark, a leg of the service has usually dropped, either at the overhead drop or inside the panel. When Duke Energy Ohio has disconnected the whole service instead, it stays off until a licensed electrician repairs the owner’s equipment and an inspector passes it. Census figures place roughly a third of local homes before 1940, most of the rest mid-century, so original panels and weak grounding come up often. We diagnose, then quote on paper.',
  emergencyParagraph:
    'Whether the whole house or half is out in College Hill, the furnace or air conditioning has likely stopped, and the sump pump may be on the dead side. Keep away from a meter box pulled off the wall. A downed line means 911 first and the utility second. On most calls an electrician comes the same day, weekends included.',
  commonIntro:
    'Prewar houses, mid-century homes and apartment buildings in College Hill tend to lose power for these reasons.',
  localFaqs: [
    {
      q: 'Why does only half my house in College Hill have power?',
      a: 'Half a house usually points to a lost leg, dropped either out at the overhead line or somewhere in the panel. Have it seen to soon, because a house limping along on one leg puts strange voltages through motors and circuit boards, the furnace blower and the fridge among them. We trace the dead side and repair it.',
    },
    {
      q: 'Who signs off disconnection repairs in College Hill?',
      a: 'Inside the City of Cincinnati, which takes in College Hill, Inspection Bureau, Inc. (IBI) handles electrical permit review and inspection under contract. Our office files with them and asks for the inspector as soon as you book. The utility wants that approval before it restores power, so an early request can save days.',
    },
    {
      q: 'My rental in College Hill was disconnected. Who books the repair?',
      a: 'Booking falls to the owner. Write your landlord a note about the cut and save a copy. Because ORC 5321.04 holds Ohio landlords to keeping supplied electrical systems safe and working, getting us out is their job, not yours. Service repairs are our business, and lease terms aren’t. Managed buildings take reports through the office.',
    },
  ],
  overrides: {
    ctaLine: 'Help for homes in College Hill with the power cut or half the house dark',
    band1Heading: 'Common Causes of Electricity Disconnection in College Hill',
    commonSituations: [
      'The kitchen and half the bedrooms out while the rest of the house still works',
      'A meter socket on a 1940s house with heat damage the utility spotted',
      'A red tag on an original fuse panel with no real grounding',
      'A storm limb that came down on the drop and folded the mast',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in College Hill',
        body: 'In College Hill, a dark house comes back on in the right order or not at all. Our electrician begins at the mast and weatherhead, follows the entrance cable through the meter base, and finishes in the panel at the grounding, which shows the size of the repair and the permit. Prewar and mid-century houses here are often thin on grounding and bonding, and both are corrected to current code before inspection. The inspector is requested when you book. With the meter back, breakers return one at a time, the panel is labelled, and anything doubtful, like aluminium branch wiring or a crowded subpanel, goes into a written note.',
      },
      {
        title: 'Red Tags and Utility Disconnects in College Hill',
        body: 'In College Hill, a utility tag usually goes up over a failing panel, absent grounding, wiring left exposed or a socket that ran hot, and it means the service won’t be powered. It is a firm instruction. Cosmetic fixes leave it in place, while correcting the cause with a licensed electrician and passing inspection removes it. Hang on to the tag or hanger, since it tends to name the reason. Meter and wires up to it are the utility’s, and box, mast and panel are the homeowner’s. Don’t touch a locked meter, since tampering is an offence under Ohio law.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in College Hill',
        body: 'Long-dead services in College Hill usually belong to a rental that sat between tenants or a house that waited a while for a buyer, and they get extra care, more so with an original panel. Sometimes a short inspection clears it, and sometimes a new panel is the honest answer, decided after we look. Labour and permits come to about the same for a rebuild or an upgrade, so both appear on the quote.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in College Hill Choose Us for Disconnection Repair',
    whyParagraph:
      'Half a service is still an emergency when the furnace or sump pump sits on the dead side. Licensed electricians make the repair the utility needs, handle the permit and inspector, and write the price down first.',
    sharedFaqs: [
      {
        q: 'What does it cost to fix a disconnected service in College Hill?',
        a: 'It hinges on the failure. Chasing down a lost leg in the panel is lighter work than replacing a mid-century service from the mast down. Once we know which it is, you approve a fixed figure on paper before anything starts, kept apart from whatever the utility bills. Qualifying homeowners have financing open to them.',
      },
      {
        q: 'How long before the power is back on in College Hill?',
        a: 'A single day usually covers our repair. After that you are waiting on the inspector, whose calendar we can’t set. What we can do is file and book the inspection the day you call, and we always do, so the outage runs no longer than it must.',
      },
      {
        q: 'Am I allowed to switch the power back on myself in College Hill?',
        a: 'No. The lock belongs to the utility, and Ohio law treats tampering with it as an offence. The service was shut off over an unsafe condition, and forcing current back in meets that condition head on. The utility restores it after our repair passes inspection.',
      },
    ],
  },
};
