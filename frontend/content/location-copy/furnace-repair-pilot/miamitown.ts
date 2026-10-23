import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const miamitown: LocationServiceCopy = {
  localParagraph:
    'Most heating calls in Miamitown come through landlords and property managers, because Census figures show 80.3% of homes here are rented and most sit in apartment buildings. Electricity heats 67.4% of homes, so the usual job is an electric furnace or air handler in an apartment closet, not a gas furnace in a basement. Many buildings date from the 1980s and 1990s, and others from before 1940. We find what failed, then give the owner a price to approve before work begins.',
  emergencyParagraph:
    'Many Miamitown households are older people living alone, and for them a cold apartment is a real danger. NOAA normals put January lows at CVG around 23 degrees. Babies and anyone ill are at risk too, and pipes can freeze in an empty unit. We repair electric and gas furnaces, usually the same day, with Saturday and Sunday calls taken.',
  commonIntro:
    'Miamitown heat is mostly electric and mostly in rented apartments, so these are the furnace calls we see most:',
  localFaqs: [
    {
      q: 'I rent in Miamitown and my heat is out. Who fixes it?',
      a: 'Your landlord or the management office. Under ORC 5321.04, an Ohio landlord who supplies the furnace has to keep it in good and safe working order and keep the unit reasonably heated. Put the complaint in writing and hold on to a copy. When management books us, the furnace gets fixed; lease disputes are not ours to settle.',
    },
    {
      q: 'Our Miamitown building took on floodwater. Can we run the furnace?',
      a: 'Not until it’s checked. National Weather Service flood notes say homes east of Front Street begin to flood when the Great Miami reaches 30 feet at the Miamitown gauge. A furnace or air handler that sat in water can short out or, on gas, leak, so keep it off and have it inspected first.',
    },
  ],
  overrides: {
    ctaLine: 'Miamitown furnace repair for apartment owners and managers',
    band1Heading: 'Common Furnace Problems in Miamitown Apartments',
    commonSituations: [
      'An apartment closet electric furnace pushing out lukewarm air',
      'A ground-floor unit’s furnace that sat in Great Miami floodwater',
      'One unit cold on a shared hallway while the neighbors stay warm',
      'A thermostat left on fan only, reported to the office as no heat',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Tenants can rule out the simple stuff before phoning the office. Put the thermostat on heat and give it new batteries if the display is dark. Look at the furnace breaker. A dust-choked filter or a closet panel knocked off its latch will also kill the heat. If one of those does it, nobody needs a repair visit. Smelling gas means walking out without flipping any switch and calling the gas company from outside. A carbon monoxide alarm means everybody leaves first. Real faults get an inspection, a plain explanation to the owner, a quote the owner approves and a heat test before we go.',
      },
      {
        title: 'Repair or Replace Your Miamitown Furnace?',
        body: 'Read the furnace label, not the building’s age. A Miamitown complex from the 1980s may still run its original electric furnaces, or units that went in a few winters back, and only the unit’s own date tells you which. A single dead element, sequencer or blower motor generally earns a repair. Gas units are different when the heat exchanger cracks: carbon monoxide can leak through, so we lock that furnace out and tell the owner before any talk of money. Landlords with a building full of aging units can have us rank them worst first, and any replacement permit is handled by us.',
      },
    ],
    whyTitle: 'Why Miamitown Landlords and Property Managers Call Us for Heating',
    whyParagraph:
      'Owners and managers approve a flat price before work starts and pay no overtime fees on nights or weekends. Tenants get a licensed technician at the door who has passed a background check and a drug test.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in a Miamitown apartment?',
        a: 'Price follows the fault, and we find the fault first. On electric furnaces a tripped limit or a burned-out element tends to be a quick visit; a blower motor jammed into a narrow utility closet eats more time. Management signs off on one flat price, and no part gets swapped until they do.',
      },
      {
        q: 'Is an older Miamitown furnace worth repairing?',
        a: 'Usually, when one part failed and the rest is sound. Many buildings here date from the 1980s and 1990s, but the furnace inside may be newer than that, so we read the unit’s own label. A cracked heat exchanger or a furnace that keeps failing is where we price replacement alongside the repair.',
      },
      {
        q: 'Why is the heat in my Miamitown apartment blowing cold?',
        a: 'Most heat here is electric, so start with the furnace breaker and the thermostat setting, which should be heat rather than fan. If both are right, a heating element or sequencer has likely failed. On gas, cold air usually means the burner didn’t light. Tell management what you checked.',
      },
    ],
  },
};
