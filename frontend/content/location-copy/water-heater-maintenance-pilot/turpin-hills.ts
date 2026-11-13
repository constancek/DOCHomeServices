import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const turpinHills: LocationServiceCopy = {
  localParagraph:
    'Up on the hill in Turpin Hills, a typical service call means a 1970s house, an owner living there, and a heater in the basement or garage that still works. Census figures put the median house at 1977 and owner occupancy at 92.5%. That makes the work fairly direct: drain the sediment, pull the anode, trip the relief lever, and on gas units inspect flue and piping. A flat figure comes before we start, and if your tank isn’t worth the money, we’ll say it.',
  emergencyParagraph:
    'Certain signs call for repair, not maintenance. Wet floor from the tank: cold supply off at the top, then gas or breaker. Gas odor: get outdoors, touch no light switch or pilot, call the gas company once clear. Carbon monoxide alarm: all people out. Repeated relief valve blow-off, or hot water gone, also qualifies. Same-day on most calls, weekends included.',
  commonIntro:
    'Owners on these 1960s through 1990s streets usually call before anything fails, for reasons like these:',
  localFaqs: [
    {
      q: 'We just closed on a 1970s house in Turpin Hills. Worth servicing the water heater?',
      a: 'If it works and no paperwork came with it, yes. The label shows roughly when it went in, and we’ll check it together. After the drain-out, anode pull and relief test, you get a plain verdict: keep maintaining it, or start setting money aside for its replacement.',
    },
    {
      q: 'Our tank in Turpin Hills sits in a finished lower level. Anything different?',
      a: 'Some prep. We carry enough hose to reach a floor drain or sump pit and lay drop cloths over carpet. If the drain spigot is the original plastic type, we test that it shuts cleanly before letting much water out, so no slow drip stains the floor after we leave.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater tune-ups for hillside houses in Turpin Hills',
    band1Heading: 'Signs a Water Heater in Turpin Hills Is Due for Maintenance',
    commonSituations: [
      'A gas tank sharing a 1970s basement with the furnace, never once drained',
      'A pop or crackle from the burner on cold mornings near Bartels Road',
      'A recent purchase on the hill with no service tag taped to the tank',
      'A garage unit that now runs cold before the second person showers',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Turpin Hills',
        body: 'First we cut fuel or power, run a hose from the spigot at the tank’s base, and empty it until the sediment clears. Every heater collects that sandy layer, and it sits between flame and water. Next the anode comes out, the rod meant to corrode before the tank lining does; if it’s eaten to the core wire, you get a quote for a new one. We raise the relief valve lever and trace its pipe. On gas: the burner, pilot, flue and the fitting at the gas valve. On electric: both elements and thermostats. Shutoff and supply connectors get looked at, and nothing gets fitted until you agree.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Book one if your heater works yet has never been drained, if you closed on the house without any record from the seller, or if a rumble has crept in when the burner lights. Hold off if the tank is seeping from its own seams; that’s a replacement, and a flush can’t stop it. Hold off too when the hot tap runs brown or the unit is plainly on its final stretch. In that case we’ll advise keeping the money for the next heater. In between our visits, a handy owner can run a little water off the spigot to clear loose grit.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Turpin Hills',
        body: 'Storage tanks get the drain-out and anode inspection. A tankless heater needs descaling: we circulate a descaling solution through its heat exchanger with a pump, flush it, then pull and rinse the inlet filter. Gas runs to most houses in Turpin Hills, so burner and venting checks are routine; electric models get elements, wiring and thermostats tested. Tankless suits a few households up here, and we won’t press it.',
      },
    ],
    whyTitle: 'Why Homeowners in Turpin Hills Book Water Heater Maintenance With Us',
    whyParagraph:
      'Owner-occupied houses from the 1960s onward fill most of our calendar in Turpin Hills. We’re family owned since 1993, every technician is licensed and insured, and you sign off on one flat number first.',
    sharedFaqs: [
      {
        q: 'How is a tank flush priced up in Turpin Hills?',
        a: 'One flat number, agreed before any work. Whether it’s storage or tankless, which fuel feeds it, and how easy it is to get at decide that number. A worn anode or a sticky valve is priced as its own line, and it waits until you say go.',
      },
      {
        q: 'How regularly should a heater up here be serviced?',
        a: 'Every twelve months is the common advice, and it suits most tanks on the hill. Popping or a low growl before then means sediment is thickening under the burner, so call earlier. Pair it with something you already do each year, like cleaning the gutters, and it won’t get skipped.',
      },
      {
        q: 'Could I drain some water off the tank myself?',
        a: 'Sure, if you’re comfortable with it. Hook a hose to the spigot near the bottom and let some water run to a drain; loose grit comes with it. A brittle or dripping spigot is a sign to stop. Gas burner checks and the relief valve test belong to us.',
      },
    ],
  },
};
