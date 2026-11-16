import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'Mount Lookout has half its homes dating to 1939 or earlier, according to the Census, and close to four in five are single houses, mostly owner-occupied. A prewar two-story here commonly has its service pipe rising through the roof, so the age shows in the boot around that pipe and in the conductors running down inside it. Rain that sneaks past a tired cap can rot the meter enclosure long before anything looks wrong. We look over the entrance from shingles to panel and fix the price with you first.',
  emergencyParagraph:
    'Phone us at once if a limb has ripped the pipe off the house, the cap is arcing, or one side of the house is dark. If a line is down, keep the family back and report it to Duke Energy Ohio, since the wire could be live. For the house side we’re usually out that same day, weekends included.',
  commonIntro:
    'Prewar houses fill most streets in Mount Lookout, and their masts usually announce trouble in one of these ways.',
  localFaqs: [
    {
      q: 'Why is my ceiling stained right under the mast on my house in Mount Lookout?',
      a: 'The boot or flashing where the pipe leaves the roof has probably let go. Rain then follows the outside of the pipe into the framing above your ceiling, and some can travel down to the meter base too. Resealing and reflashing that opening comes with every mast repair we do, so you don’t need a roofer afterward.',
    },
    {
      q: 'Should I worry about a rusty meter box if my mast looks fine in Mount Lookout?',
      a: 'Yes. Water slipping past a loose cap travels down inside the conductors and corrodes the terminals in the meter box and panel, out of sight. Outside rust is often the first clue. We open the box, replace the damaged conductors and reseal the run from the cap down.',
    },
  ],
  overrides: {
    ctaLine: 'Service pipe, cap and flashing repair for prewar houses in Mount Lookout',
    band1Heading: 'Signs You Need Service Mast Repair in Mount Lookout',
    commonSituations: [
      'A cracked roof boot lifting around the service pipe',
      'A tea-colored ring on a bedroom ceiling under the pipe',
      'Rust trails beneath the fittings on a prewar two-story',
      'A few rooms flickering whenever the wind picks up',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Mount Lookout',
        body: 'When the pipe stands true and only one piece has failed, like a slack strap, a cap overdue for sealant or a boot that has split, we fix that piece. Bowed, rust-scaled or storm-damaged pipe gets replaced, and conductors with cracked or powdery jackets come out with it. On a prewar house we open the panel and meter socket and check the conductors before planning a replacement, so the new pipe matches what the house actually has. If the wiring behind the panel turns out to be worn, we’ll mention home rewiring as an upgrade to consider, never a condition of the job.',
      },
      {
        title: 'Storm Damage to Service Masts in Mount Lookout',
        body: 'Most bent pipes we see on prewar roofs here trace back to wind or a dropped limb. Weight on the overhead wires transfers straight to the pipe, since the pole is a far heavier anchor and simply doesn’t give. A blustery spring can do the same by degrees. The real trouble is a split boot at the shingles or a clamp dragged loose, which sends rainwater inside and leaves the utility unwilling to energize a compromised entrance. Your own homeowner’s policy is where that claim goes. Once limbs are down, stand on the front walk and confirm the pipe is plumb, the cap snug and the meter box level.',
      },
      {
        title: 'The Utility’s Side and Yours in Mount Lookout',
        body: 'The utility’s line ends at the clamp on your house, and the meter belongs to it as well. From the cap down, the pipe, riser, conductors and meter box are the homeowner’s. The utility cuts service, our electricians work, usually finishing within a single day, Inspection Bureau, Inc. (IBI) inspects for the city, and service is restored. We file at booking so nothing waits.',
      },
    ],
    whyTitle: 'Why Homeowners in Mount Lookout Choose Us for Mast Repair',
    whyParagraph:
      'Our licensed electricians check every piece of the service entrance, repair or rebuild the mast to code, reflash where the pipe exits the roof and start your permit at booking. You agree to the price before work begins.',
    sharedFaqs: [
      {
        q: 'What decides the price of a mast repair in Mount Lookout?',
        a: 'Mainly whether a repair will do or the pipe needs replacing, plus how much conductor and flashing must be redone and the permit. After we inspect the service entrance, you get one flat rate, and nothing begins until you approve it. Qualifying homeowners can finance the work.',
      },
      {
        q: 'How long will mast work leave my house without power?',
        a: 'Our electrical work is usually a single day. The total wait depends on when the utility disconnects, when the inspector signs off and when the utility reconnects, since it won’t re-energize before that inspection. Booking it alongside the job keeps things moving.',
      },
      {
        q: 'Can storms bend my mast without pulling the wires down?',
        a: 'They can. A branch resting on the overhead wires, or steady wind, levers the pipe out of line while the wires stay attached. If the roof seal or clamp loosens, water gets in, and the utility won’t reconnect until the pipe is repaired and inspected.',
      },
    ],
  },
};
