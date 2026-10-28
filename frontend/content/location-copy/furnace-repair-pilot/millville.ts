import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millville: LocationServiceCopy = {
  localParagraph:
    'In Millville we never know if the call is gas or electric until we pick up the phone. Census figures put 50.0% of homes on electric heat and 40.5% on gas, so Monday might be a flame sensor coated in residue and Tuesday a burned element or relay in an electric furnace or heat pump. Over half the village’s houses predate 1960, so the ducts and the basement around the furnace are far older than the unit. We pin down what failed and price it with you first.',
  emergencyParagraph:
    'When a Millville furnace stops on a winter night, babies, elderly relatives and anyone sick are first to suffer. CVG logs close to 100 freezing nights a year in NOAA records, and a house that stays cold for long can split a pipe. Gas or electric, we’re out the same day on most calls, weekends included.',
  commonIntro:
    'Millville heat is half electric and close to half gas, much of it in basements of pre-1960 houses. The furnace calls that come in most:',
  localFaqs: [
    {
      q: 'Can I run my furnace after a Millville basement flood?',
      a: 'No, not until it’s checked. The March 2026 Indian Creek flood put water in nearly every basement in the village, and that is where most furnaces sit. Water on the burners, the gas valve or the control board can leave a furnace unsafe. Keep it off and we inspect it before anyone turns it back on.',
    },
    {
      q: 'Who pays to fix the heat in my Millville rental?',
      a: 'In most cases the owner does. Ohio’s ORC 5321.04 says a landlord has to keep supplied heating equipment in good, safe working order and provide reasonable heat. Put your request to the landlord in writing. Because we fix furnaces, not leases, the owner or property manager usually schedules us and signs off on the work.',
    },
  ],
  overrides: {
    ctaLine: 'Gas and electric furnace repair for Millville',
    band1Heading: 'Common Furnace Problems in Millville Homes',
    commonSituations: [
      'Lukewarm air from an electric furnace with a dead heating element',
      'A gas burner that lights and quits because the flame sensor is fouled',
      'A basement furnace that needs checking after Indian Creek flood water',
      'A heat pump leaning on its backup strips from dusk to dawn',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Before booking us, do a quick lap of the basement. Thermostat: heat mode, new batteries. Breaker: not tripped. Furnace switch: on. Filter: replaced if it’s grey. Door panel: latched, as plenty of models refuse to fire while it hangs open. Warm again? You don’t need us. Book us if that breaker flips a second time, gas burners light and fade, or the electric furnace hums along without warming a room. A gas smell means out of the house, hands off every switch, and a call to the gas company from the street. We inspect, explain, show you a price to sign off, and leave only after the heat runs.',
      },
      {
        title: 'Repair or Replace Your Millville Furnace?',
        body: 'Millville’s houses mostly date from before 1960, but that says nothing about the furnace in the basement, which may be quite new. If that unit has one worn-out igniter, inducer motor or element, we fix it and you keep it. Cracks in the heat exchanger are the exception. Carbon monoxide leaks through them, so that furnace stays switched off and we talk replacement. Should a carbon monoxide alarm sound, get the household out before making calls. A new furnace comes with the permit work handled by us. Meanwhile, read the electric bill: a weak element, or a heat pump living on backup heat, makes it jump before the rooms cool.',
      },
    ],
    whyTitle: 'Why Millville Homeowners Call Us',
    whyParagraph:
      'Gas or electric, Millville houses split close to evenly, and we work on both. Our technicians carry licenses and insurance and pass background and drug checks. You sign off on a flat-rate price first. Family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Millville?',
        a: 'Until we know the failed part, any figure would be a guess. A new flame sensor on a gas furnace goes in quickly. Hunting down a burned element in an electric furnace takes more time. After diagnosis you get a single flat price to approve, with no extra charge for nights or weekends.',
      },
      {
        q: 'Is a repair worth it on my Millville furnace?',
        a: 'The furnace’s own condition decides it. When the unit is solid and just one piece has failed, say an igniter or inducer motor, repairing it is normally the better buy. A cracked heat exchanger puts carbon monoxide in play, so we leave that furnace off. You get both prices side by side to choose from.',
      },
      {
        q: 'Why is my Millville furnace blowing cold air?',
        a: 'Look at the thermostat: heat, not fan only. Then the filter, which can choke a furnace once it’s grey with dust. A gas furnace that blows cold has usually lit and then shut itself down, most often over a fouled flame sensor. Electric furnaces and heat pumps blowing cold tend to have a dead element or backup heat strip.',
      },
    ],
  },
};
