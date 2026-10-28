import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const burlington: LocationServiceCopy = {
  localParagraph:
    'Most Burlington heating repairs start with electric heat, not a gas burner. Census figures show 60.1% of homes here heat with electricity and 29.2% with gas, so we spend a lot of time on heat pumps and electric furnaces, where the fault tends to be a heat strip or a sequencer. Most houses went up after 1980, and many sit in apartment complexes, where maintenance often handles the first call. We test the system, find what failed and give you the price before any work starts.',
  emergencyParagraph:
    'Boone County sees about 100 freezing nights a year, by NOAA normals for CVG, the airport station inside the county. Without heat on one of those nights, worry first about a baby, an aging relative or someone who’s ill; a long outage can also put pipes at risk. Electric or gas, most Burlington calls get fixed that day, weekends too.',
  commonIntro:
    'Most Burlington heating calls involve electric heat in houses and apartments built after 1980. These are the ones we see most:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a furnace in Burlington?',
      a: 'Burlington is unincorporated, so HVAC permits come from the Boone County Building Department rather than a city hall. Repairing the furnace or heat pump you already have is a different job from replacing it. If we recommend a replacement, we handle the permit with the county before the new equipment goes in.',
    },
    {
      q: 'I rent in Burlington. Should I call you or my landlord?',
      a: 'Call your landlord or property manager first, especially in one of the larger complexes, where maintenance usually has its own contractor. Give them the date the heat stopped and what the thermostat shows. If you own the rental, call us directly. We fix furnaces, not leases, so the agreement between you stays yours to sort out.',
    },
  ],
  overrides: {
    ctaLine: 'Burlington heat pump and furnace repair, same day on most calls',
    band1Heading: 'Common Furnace Problems in Burlington Homes',
    commonSituations: [
      'A heat pump blowing lukewarm air on a freezing morning',
      'Electric heat strips that stopped coming on',
      'A gas furnace that lights, then shuts off after a minute',
      'An outdoor unit caked in ice that never defrosts',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Rule out the simple stuff first. Thermostat on heat with good batteries; the breaker and the switch on or near the furnace both on; a fresh filter if the old one is gray; the furnace door pressed tight, since a loose one stops many units. Heat back means you can skip us. Book a visit when the breaker trips a second time, the heat pump runs all day and the rooms stay cool, or a gas furnace lights and quits repeatedly. Gas smell or a beeping CO alarm: everyone out, no switches, call the gas company from the yard. We name the fault and its price before work.',
      },
      {
        title: 'Repair or Replace Your Burlington Furnace?',
        body: 'Decide on the equipment rather than the house. Burlington homes from the late 1990s might still have the heat pump they were built with, or a third one, so the date plate comes first. Replacing a failed sequencer or blower motor usually pays. A gas furnace with a cracked heat exchanger is another story, since carbon monoxide can get out through it; safety settles that one before money does. We pull the permit on any replacement. Meanwhile, your bill is an early warning: when a heat pump keeps calling on its backup strips, the Duke Energy Kentucky or Owen Electric statement jumps, depending on your street.',
      },
    ],
    whyTitle: 'Why Burlington Homeowners Call Us for Heating Repair',
    whyParagraph:
      'Electric heat is more common in Burlington than most places nearby, so our technicians fix heat pumps and electric furnaces as often as gas units. Each is licensed, insured and background-checked, and the flat price is yours to approve first.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Burlington?',
        a: 'A real figure comes after we find the fault. A tripped limit switch or worn sequencer is a quick visit; a dead blower motor or heat pump compressor is a much bigger job. Once testing is done you get one flat price to accept or decline, and a night or weekend call costs no more.',
      },
      {
        q: 'Should I repair or replace my Burlington furnace?',
        a: 'If the furnace or heat pump is in decent shape and one component quit, fix it. A gas furnace with a cracked heat exchanger is a carbon monoxide hazard and we’d replace it, same as when repairs keep piling onto one unit. You get both prices together, with the equipment’s date beside them.',
      },
      {
        q: 'Why is my Burlington heat blowing cold air?',
        a: 'From a heat pump, air that feels mild at the vent can be normal on a freezing day. Air that’s plainly cold, with the outdoor unit iced over, means a defrost or refrigerant fault. From a gas furnace, check the filter and the door first. If the burners light and then quit, a safety switch has usually tripped.',
      },
    ],
  },
};
