import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newtown: LocationServiceCopy = {
  localParagraph:
    'Newtown is mostly a forced-air village, and our boiler calls there come from its older houses. By Census figures, 21.6% of homes predate 1940, but the median Newtown house dates from 1989, long after builders stopped fitting radiators. A house with supply vents in the floor or walls needs our furnace repair page, not this one. A house with radiators or hot water baseboard is ours: we pin down which part failed and hand you a price you sign off on first.',
  emergencyParagraph:
    'Losing boiler heat in Newtown during January, when lows average about 23F at the CVG weather station (NOAA normals), is most dangerous for infants, elderly parents and anybody fighting an illness. Pipes feeding radiators can freeze in a house that stays unheated for long. We send a technician the same day for most no-heat calls, Saturday and Sunday too.',
  commonIntro:
    'Newtown boiler calls come from the older houses in the village rather than the newer subdivisions. What we see most:',
  localFaqs: [
    {
      q: 'Water got into my Newtown basement. Is the boiler OK to restart?',
      a: 'Keep it off for now. The 2018 flood put water in about 80 Newtown homes along Crull Street and Turpin Lane, and a boiler that has been wet may have ruined wiring, a fouled burner or a gas valve that won’t close right. We look it over and tell you what has to be replaced before it runs.',
    },
    {
      q: 'My Newtown rental has radiators that stay cold. Is that on me or the landlord?',
      a: 'The landlord. Under ORC 5321.04, an Ohio landlord who provides the heating system has to keep it working safely and give you reasonable heat. Send the owner a dated written request. We fix boilers, not leases, and it is the owner who calls us out and okays the bill.',
    },
  ],
  overrides: {
    ctaLine: 'Radiator and boiler repair for older Newtown houses',
    band1Heading: 'Common Boiler Problems in Newtown Homes',
    commonSituations: [
      'A hot water boiler in an older village house whose pressure falls back a day after refilling',
      'A boiler in a basement that took river or sewer water and hasn’t been checked since',
      'Baseboard on the second floor stays cool though the first floor heats fine',
      'An igniter that clicks over and over on the first chilly morning of fall without lighting the burner',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Turn the thermostat up past room temperature in heat mode. Make sure the switch near the boiler is on. Feel each radiator; one that is only warm down low needs its air let out with a key. Afterward, glance at the gauge, and add water to a hot water system if the needle sits low. Heat back on means the problem is solved without us. Pressure that falls again, a puddle, banging, a lockout light or a yellow, lazy flame means book a visit. If you smell gas, walk out, touch no switches, and phone the gas company or 911 from the yard.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Newtown?',
        body: 'The date on the boiler’s nameplate is the one that counts, not the date on the deed. Parts like a circulator, an igniter, a zone valve or an expansion tank are ordinary fixes on a boiler that isn’t leaking. Water coming from the heat exchanger, a cracked section, or a boiler that needs us winter after winter changes the talk: you get a replacement quote set beside the repair quote, plus financing if you want it. Book a fall tune-up. It runs 60 to 90 minutes and covers pressure, the expansion tank, safety switches, burner, flue, any drips, and bleeding air from each radiator.',
      },
    ],
    whyTitle: 'Why Newtown Homeowners Call Us',
    whyParagraph:
      'Boilers are a smaller share of the work in Newtown, so you want a tech who still knows radiators. Each one we send holds a license and insurance, has cleared a background check and drug screen, and quotes before working.',
    sharedFaqs: [
      {
        q: 'What does boiler repair cost in Newtown?',
        a: 'Whatever broke sets the number. Letting air out of a radiator is a quick job, while a new circulator or a leaking cast-iron section means parts and hours. You hear the diagnosis and a fixed price, decide, and only then do we pick up a wrench. A Sunday call costs the same as a Tuesday one.',
      },
      {
        q: 'Is it worth repairing an older boiler in Newtown?',
        a: 'Most of the time, yes, as long as the boiler body is dry and just one component has given out. Pumps, relays and valves swap out on a boiler with plenty of service left. A heat exchanger that weeps, or a boiler on our schedule each season, gets a replacement price written next to the repair.',
      },
      {
        q: 'Why are some radiators cold in my Newtown house?',
        a: 'Trapped air is the common cause, and the radiator will feel cold along the top. Bleed it, then check the pressure gauge on the boiler. If a whole floor or zone is cold, a zone valve may be stuck shut, and that one needs a technician.',
      },
    ],
  },
};
