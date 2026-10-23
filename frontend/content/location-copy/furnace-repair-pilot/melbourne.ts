import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const melbourne: LocationServiceCopy = {
  localParagraph:
    'Most furnace calls in Melbourne turn out to be electric. Census figures put electric heat in 53.8% of homes and utility gas in only 15.2%, so we spend more time on burned elements and frosted-up heat pumps than on gas burners. Fuel oil still heats 8.7% of homes, which means the odd oil burner that refuses to fire. Almost every house here is detached and owner-occupied. Once we know which part quit, you get the price, and nothing starts until you say yes.',
  emergencyParagraph:
    'NOAA normals for the CVG station show about 100 nights a year at or below freezing. A Melbourne house that loses its heat on one of them is hardest on infants, elderly parents and anyone already sick. We fix electric, gas and oil furnaces, and most calls are handled the day they come in, Saturdays and Sundays included.',
  commonIntro:
    'Melbourne is a small river city of detached, owner-occupied houses, and more of them run on electric heat than on gas. The furnace trouble we see most:',
  localFaqs: [
    {
      q: 'Is a permit required for a new furnace in Melbourne?',
      a: 'Yes. Kentucky wants a permit whenever a furnace or heat pump is swapped out, and the state’s list names Campbell County’s Planning, Zoning and Building Inspection office as Melbourne’s HVAC inspector. Ordinary repairs on your current furnace skip the permit entirely. If you go with new equipment, our office files the paperwork ahead of the install.',
    },
    {
      q: 'Our Melbourne heat pump feels lukewarm in January. Does that mean it’s failing?',
      a: 'Not always. Heat pump air feels cooler at the vent than gas furnace air, and on the coldest nights the backup electric strips carry part of the load. It needs a technician when the house can’t hold the thermostat setting, the outdoor unit stays iced for hours, or the backup heat never kicks in.',
    },
  ],
  overrides: {
    ctaLine: 'Melbourne furnace and heat pump repair, priced up front',
    band1Heading: 'Common Furnace Problems in Melbourne Homes',
    commonSituations: [
      'An electric furnace running with only some of its heating elements working',
      'A heat pump iced over and leaning on its backup strips all night',
      'An oil burner that won’t fire after sitting idle since spring',
      'The electric furnace breaker tripping on the first hard freeze',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Start at the thermostat. It has to read heat, and a blank display usually just wants new batteries. Next, find the furnace’s service switch and the breaker that feeds an electric furnace. A filter gone solid gray, or a blower panel sitting crooked, shuts many units down. Sort any of that out and you can skip the service call. A gas odor means leaving the house without touching lights, then ringing the gas company from the street. When the CO detector goes off, people go out before anything else. Genuine faults get a diagnosis, an explanation, a price you sign off on and a heat test.',
      },
      {
        title: 'Repair or Replace Your Melbourne Furnace?',
        body: 'Base the call on the furnace, since Melbourne’s houses tell you little: half went up before 1960, and any of those can hold heating equipment only a few winters old. When a newer unit loses an igniter, an element or a blower motor, fixing it makes sense. A cracked heat exchanger is another story. Carbon monoxide can escape through the crack, so we lock that furnace out and say so directly. Watch the Duke Energy Kentucky bill; a jump in a mild month often means an electric furnace or heat pump straining on tired parts. New equipment needs a permit, and we pull it.',
      },
    ],
    whyTitle: 'Why Melbourne Homeowners Call Us for Heating',
    whyParagraph:
      'Melbourne is a town of owner-occupants, so the person who lives there hears the diagnosis firsthand and okays one fixed price before we begin. Every technician is licensed and insured, with a background check and drug test behind them.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Melbourne?',
        a: 'Until we’ve found the failed part, any number would be a guess. A burned heating element is usually a quick swap, while a heat pump compressor or a tired oil burner runs to more. One flat figure goes to you for approval before tools come out, and Sunday calls aren’t billed extra.',
      },
      {
        q: 'Should I repair or replace my Melbourne furnace?',
        a: 'Fix it if a lone part broke and the heat exchanger checks clean. Retire it if that exchanger is cracked or it has become a yearly repair. An older Melbourne house may have a fairly new furnace, so we go by the unit’s own label. You see the repair price and the replacement price together.',
      },
      {
        q: 'Why is my Melbourne furnace blowing cold air?',
        a: 'Look at the thermostat mode first, because fan only blows room air all day. Electric furnaces go cold from a burned element, a dead sequencer or a tripped breaker. Heat pumps blow cool for a few minutes during defrost, and that part is normal. An oil or gas furnace that blows cold most likely failed to light.',
      },
    ],
  },
};
