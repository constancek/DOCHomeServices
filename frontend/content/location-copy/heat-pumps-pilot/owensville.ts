import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const owensville: LocationServiceCopy = {
  localParagraph:
    'In Owensville, most homes heat with electricity, according to Census figures, so a failed heat pump often leaves only the electric backup strips between the household and the cold. Most homes in the village are also rented, a good share of them in apartment buildings from the 1960s and 1970s. That means our work here is usually on all-electric heat pumps and air handlers, with the price going to a landlord or manager. We find the fault and get the price approved before work starts.',
  emergencyParagraph:
    'For Stonelick Township, the nearest long-term record is the NOAA normals at CVG, which put January lows at about 23F. An Owensville apartment with only strip heat left, or none, turns risky fast for a baby, a grandparent or someone already unwell. Most heat pump and air handler calls get a technician that same day, Saturday and Sunday included.',
  commonIntro:
    'Owensville is a small Stonelick Township village of mostly rented homes and apartments, most of them on electric heat. These heat pump calls come up most:',
  localFaqs: [
    {
      q: 'I rent an apartment in Owensville and the heat pump stopped. What do I do?',
      a: 'Look at two things yourself: the thermostat mode and the filter. If neither fixes it, send the office a dated message describing the problem. Under Ohio’s landlord statute, ORC 5321.04, heating the owner provides has to be kept in good and safe working order. Your landlord arranges the visit and approves our price. We fix heat pumps, not leases.',
    },
    {
      q: 'Does replacing a heat pump in Owensville need a permit?',
      a: 'Yes. Replacements in the village go through Clermont County Building Inspection, which issues HVAC replacement permits for Owensville. A repair to your existing heat pump needs no permit. When we replace one, we apply for the permit and set up the inspection, so the owner doesn’t deal with the county.',
    },
    {
      q: 'My Owensville home is all electric. Should the emergency heat light ever come on?',
      a: 'Briefly, yes. The backup strips help out during a defrost cycle and on the coldest mornings. If the light stays on for hours, or the rooms only warm up while it’s lit, the heat pump itself has probably stopped heating, and your electric bill will rise quickly until it’s fixed.',
    },
  ],
  overrides: {
    ctaLine: 'Owensville heat pump repair for all-electric homes',
    band1Heading: 'Common Heat Pump Problems in Owensville Homes and Apartments',
    commonSituations: [
      'An all-electric apartment running on backup heat strips after the outdoor unit failed',
      'A row of outdoor units behind a small apartment building, one iced solid',
      'A 1970s house where the heat pump is stuck on cooling',
      'A landlord getting a no-heat report from a tenant on a January morning',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Without a gas furnace behind it, an Owensville heat pump has nobody covering for it, so a quick self-check pays off. The thermostat has to read heat with the set point above room temperature. A grey, packed filter goes in the trash. In the electrical panel, an outdoor unit breaker and an air handler breaker sit side by side; a tripped one gets reset once. Knock snow off the outdoor cabinet. Steam and a frosty coil with a silent fan for a few minutes is defrost. Heat restored means no visit. Ice that never melts, a backup light glowing all day or a grinding fan is a repair.',
      },
      {
        title: 'Repair or Replace Your Owensville Heat Pump?',
        body: 'Go by the heat pump’s condition. Most Owensville homes date from the 1960s and 1970s, but the outdoor unit is often much newer than the building. A contactor, capacitor, fan motor or sensor is a repair on a unit that’s otherwise sound. A failed compressor, or a refrigerant leak that’s been topped up before, is where we price replacement beside repair for the owner. In an all-electric home the warning is the electric bill, because backup strips cost far more to run than the heat pump. We handle the permit on a replacement. Financing is available.',
      },
    ],
    whyTitle: 'Why Owensville Landlords and Residents Call Us',
    whyParagraph:
      'Most Owensville homes rely on electric heat, so we treat a dead heat pump as urgent and send the price to whoever approves the work. Technicians are licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Owensville?',
        a: 'We need to find the fault before we can price it. A bad capacitor or a failed defrost sensor is a quick repair, and a refrigerant leak takes longer. The owner gets one flat-rate price to approve before we begin, and weekend calls cost no more than weekday ones.',
      },
      {
        q: 'Should I repair or replace the heat pump in my Owensville rental?',
        a: 'Repair it if one part failed and the unit is otherwise in good shape. A dead compressor, or a leak that keeps draining refrigerant, makes replacement the better spend. Your tenants are on costly backup heat meanwhile, so we give you both prices on the first visit.',
      },
      {
        q: 'Why does my Owensville heat pump blow cool air in winter?',
        a: 'Heat pump air is warm but milder than people expect, especially if they’ve lived with a gas furnace, so it can feel cool and still be fine. Cold air, or an outdoor unit that’s iced over or not running, is a fault worth a call.',
      },
    ],
  },
};
