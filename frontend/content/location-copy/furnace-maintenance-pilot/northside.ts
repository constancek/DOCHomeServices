import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'Owners live in most homes we tune up in Northside, and the houses are old. Census figures date 57.3% of them to 1939 or earlier, with another third from the 1940s through the 1970s. The pre-war ones put the furnace in a basement, tied into a chimney that has seen several furnaces come and go, so venting and the heat exchanger get looked at hardest. Gas heats roughly seven homes in ten. The price is fixed before we start, and we’ll say so if it needs nothing.',
  emergencyParagraph:
    'Some problems can’t sit until a tune-up. Smelling gas: get out, no switches, no relighting, then call Duke Energy. Carbon monoxide alarm: everybody out. A dead furnace when January lows sit near 23F, nonstop on-off cycling or a lazy yellow flame need repair, more so with a baby, grandparent or sick person home. Most same day, weekends too.',
  commonIntro:
    'Along Hamilton Avenue and the side streets, a homeowner usually books once one of these shows up:',
  localFaqs: [
    {
      q: 'Our basement flooded a few years back in Northside. Should the furnace get checked?',
      a: 'If water ever reached the furnace, yes, and as a repair visit rather than a tune-up, because flooded controls and burners aren’t safe to keep running. If the water stayed clear of it, a normal fall tune-up is fine, and we’ll look at the base and lower panels for rust while we’re there.',
    },
    {
      q: 'Is a tune-up different for a 1950s house in Northside than for an older one?',
      a: 'A little. A mid-century house usually has the furnace in an easier basement with a newer flue, so it’s mostly filter, blower, burners and safety controls. In the pre-war houses we spend longer on the chimney connection and the heat exchanger. Same flat price either way, set before we start.',
    },
  ],
  overrides: {
    ctaLine: 'Fall furnace maintenance for houses on both sides of Hamilton Avenue in Northside',
    band1Heading: 'Signs a Furnace in Northside Is Due for Maintenance',
    commonSituations: [
      'A furnace that came with the house and has no tag showing its last service',
      'The smell of scorched dust lingering a week after the heat first came on',
      'A metallic rattle from the cabinet that wasn’t there last winter',
      'Short, choppy run times where the furnace used to run steadily',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Northside',
        body: 'Here’s the order we usually follow in Northside. First the filter, swapped if it’s dirty. Then the blower: motor checked, wheel cleaned of the dust that builds up on its blades. Thermostat and controls are tested next, along with the wiring and the three safety switches, limit, flame sensor and pressure. Then the burners, igniter and flame, the heat exchanger for cracks, and the flue where it meets an old chimney. We end on a full heating cycle and watch it run. If a part is failing, you hear the price, and only your yes gets it replaced.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'Spend the money if your furnace has never had a documented visit, if the house changed hands recently, if a scorched-dust smell keeps hanging around after the opening days of the season, if a squeal or rattle is new, or if run times have gone short and choppy. Save it if a technician went through the furnace within the year and it’s behaving. Cold registers and no heat call for Furnace Repair. A heat exchanger we’ve already found cracked is a replacement, not a tune-up. Boiler and heat pump homes book those services. We advise one visit yearly.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Northside',
        body: 'With gas the clear majority fuel, most furnaces we see here get their burners, igniter, flame sensor, gas line connection, heat exchanger and venting gone over. A smaller group of homes heat electrically, and that group includes heat pumps and baseboard as well as electric furnaces. For the furnaces, we test elements and sequencers, check wiring for heat damage and confirm the blower moves enough air.',
      },
    ],
    whyTitle: 'Why Homeowners in Northside Book Furnace Maintenance With Us',
    whyParagraph:
      'Pre-war basements and mid-century houses make up our tune-up days in Northside. Technicians are licensed, insured, background-checked and drug-tested, prices are flat and approved first, and if we get it wrong, we make it right.',
    sharedFaqs: [
      {
        q: 'What will a furnace tune-up cost me in Northside?',
        a: 'A flat price you agree to before work starts. Gas or electric and how tight the basement is shape it. Worn parts we find are priced on their own, and you decide on each one. Weekend visits cost the same, with no overtime fees.',
      },
      {
        q: 'When is the best time of year to book furnace maintenance?',
        a: 'Fall, once a year. Our first freeze normally lands around October 25 by National Weather Service records, and the weeks just before it are when a furnace that’s been idle since spring shows its problems. Booking ahead of that gets you a better choice of times.',
      },
      {
        q: 'Is there anything I can do to look after my furnace myself?',
        a: 'Yes. Put in a clean filter when the old one is gray, keep registers and returns uncovered, replace the thermostat batteries each fall and leave space around the furnace. Never take off the burner cover or work the gas valve; that’s for a licensed technician.',
      },
    ],
  },
};
