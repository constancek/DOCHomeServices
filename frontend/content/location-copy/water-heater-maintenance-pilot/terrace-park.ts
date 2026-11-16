import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const terracePark: LocationServiceCopy = {
  localParagraph:
    'Owners live in 97.0% of homes in Terrace Park by Census figures, and nearly all are single-family houses, so the person booking is the one using the hot water. The median house went up in 1954, and 25.6% predate 1940. That puts most tanks in basements alongside an older flue and gas piping we look over, with a drain spigot we open slowly. Newer houses get a quick flush and anode check. You hear the flat price first, and if your tank isn’t worth servicing, we’ll say so.',
  emergencyParagraph:
    'These need repair. Tank weeping or pouring: shut the cold line at the top, then gas cock or breaker. Gas smell: out the front door, no switches flipped, nothing relit, phone the gas company. Carbon monoxide alarm: house cleared first. Same for a relief valve that won’t stop, or no hot water. Same day on most calls, weekends included.',
  commonIntro:
    'Terrace Park is almost entirely owner-occupied houses, many from the 1940s and 1950s. Tanks in them give these signs when service is due:',
  localFaqs: [
    {
      q: 'Is servicing the water heater in a 1950s house in Terrace Park worthwhile?',
      a: 'Judge the tank, not the house. Its label shows roughly when it was installed. If it still works and has never been drained, yes. If it’s leaking from the body or the hot water comes out rusty, we’ll tell you to skip the service and price a replacement instead.',
    },
    {
      q: 'Our tank in Terrace Park is in a finished basement. Does that make maintenance more useful?',
      a: 'It does. A slow leak under a finished floor can soak carpet or drywall before anyone notices. During the visit we look at the tank base, the fittings and the relief valve pipe for any weeping, and make sure the drain spigot closes fully after the flush.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly water heater maintenance for houses in Terrace Park',
    band1Heading: 'Signs a Water Heater in Terrace Park Is Due for Maintenance',
    commonSituations: [
      'A 1950s basement tank that has never had its sediment drained',
      'Popping or a low rumble when the burner lights on a cold morning',
      'A recent purchase near the Little Miami with no heater records from the seller',
      'A tank sitting in a finished lower level, where a slow drip would ruin carpet',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Terrace Park',
        body: 'We drain the tank and flush away the sediment that settles at its base and forces the heater to work harder warming water. The anode rod is pulled next; it exists to corrode before the tank does, and if little remains we quote a new one. We test the relief valve and look along its discharge pipe. For a gas heater that covers the burner, the pilot, the flue and the gas fitting; for an electric one, both elements and their thermostats. In the older basements we ease the drain spigot open slowly and examine the shutoff and supply lines. Every part gets priced before it’s fitted.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Worth the appointment: a tank that heats well but has gone years without a drain, a recently bought house whose seller kept no records, or a burner that has begun to pop. A tank above finished space raises the stakes, since catching a weep early saves the carpet. Not worth the appointment: a shell already leaking, because that tank must be replaced and no rinse will stop it, or hot water with a rusty tint, or a heater obviously at the end. We’ll say plainly to save the money. Owners who like doing things themselves can let a little water off between our visits.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Terrace Park',
        body: 'A storage tank is drained, rinsed and has its anode pulled for a look. A tankless model is descaled: cleaning solution loops through its heat exchanger under a small pump, and the inlet screen gets rinsed. Gas reaches most houses in Terrace Park, so burner and vent checks are standard; an electric heater gets its elements and thermostats tested instead. Tankless can come up when this tank retires, and the call is yours.',
      },
    ],
    whyTitle: 'Why Homeowners in Terrace Park Book Water Heater Maintenance With Us',
    whyParagraph:
      'We mostly work on basement heaters in owner-occupied houses here, many built in the 1940s or 1950s. Licensed and insured, family owned since 1993, and if we fall short, we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'What will a water heater service cost in Terrace Park?',
        a: 'Your quote is a flat figure, given before work. It depends on whether the heater stores water or heats on demand, which fuel runs it, and how hard it is to reach; carrying gear down a narrow basement stair takes longer than walking into a garage. A worn anode or valve is priced separately and fitted only with your approval.',
      },
      {
        q: 'How often should our water heater be serviced?',
        a: 'Plan on once a year, which is the usual advice. If the heater starts popping or grumbling earlier, call sooner, since a bed of sediment is forming under the burner. Some owners tie the date to a chore they never miss, like putting the storm windows up.',
      },
      {
        q: 'Can we flush the water heater ourselves?',
        a: 'Within limits. A homeowner comfortable with a hose can let water run off the drain spigot until it carries loose sediment out. An old, stiff spigot may not reseat once opened, so leave that one alone. The relief valve test and any gas burner work are where a technician comes in.',
      },
    ],
  },
};
