import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const amelia: LocationServiceCopy = {
  localParagraph:
    'Most Amelia homes heat with electricity, 60.8% by Census figures, so a large share of our calls here are electric furnaces and heat pumps rather than gas. And 43.1% of homes went up in 2000 or later, which means many systems are still the ones installed with the house and are reaching the point where elements, blower motors and boards give out. Amelia is no longer a village: since 2019 it has been part of Pierce and Batavia townships. We find the fault and quote it before work starts.',
  emergencyParagraph:
    'NOAA normals at CVG count roughly 100 freezing nights a year, and on any of them a dead furnace in Amelia is hardest on infants, grandparents and anyone who’s sick. An unheated house can freeze its plumbing, too. Electric or gas, we usually get Amelia heat running again the same day, Saturdays and Sundays included.',
  commonIntro:
    'Amelia is mostly newer homes and apartments on electric heat, with gas in about a third. These furnace calls come up most:',
  localFaqs: [
    {
      q: 'Who issues the permit to replace a furnace in Amelia?',
      a: 'Clermont County Building Inspection. Amelia dissolved as a village in 2019, so homes now sit in unincorporated Pierce or Batavia Township, and the county issues HVAC replacement permits in both. Your township depends on which side of the old village line you live on, but the permit office is the same. We pull it before the install.',
    },
    {
      q: 'I rent an apartment in Amelia and the heat is out. Who fixes it?',
      a: 'Your landlord or property manager, so send them a written note today. ORC 5321.04 says Ohio landlords must keep any heating equipment they provide safe and working and give tenants reasonable heat. Amelia owners and managers can schedule us themselves for the repair. We fix furnaces, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Amelia furnace repair for electric and gas homes',
    band1Heading: 'Common Furnace Problems in Amelia Homes',
    commonSituations: [
      'An electric furnace blowing lukewarm air with a failed heating element',
      'A heat pump leaning on backup heat all day in January',
      'A 2000s builder furnace with a worn blower motor',
      'A cold apartment the tenant has reported to management',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Plenty of Amelia no-heat calls get solved on the phone. First, heat mode on the thermostat and new batteries. Next, the service switch on or beside the furnace cabinet, which should be on. Electric furnaces pull a lot of current, so check the panel for a tripped breaker. A dusty filter gets swapped, and the furnace door gets pressed home, since a loose one keeps many units off. If the house warms up after that, keep your money. A gas smell means leaving without touching a switch and calling the gas company from the driveway. A carbon monoxide alarm means everyone gets outside before you do anything else.',
      },
      {
        title: 'Repair or Replace Your Amelia Furnace?',
        body: 'Size up the furnace rather than the house. One 2005 Amelia build may still run its original system while the house next door got a new one last year, and those two call for different answers. One bad element, sequencer or blower motor in a younger unit is a sensible repair. In a gas furnace, a cracked heat exchanger can leak carbon monoxide indoors, so that one gets replaced regardless of the repair price. Clermont County Building Inspection issues the replacement permit, and we file it. Until then, the electric bill is the early warning when a heat pump lives on backup strips or a furnace never shuts off.',
      },
    ],
    whyTitle: 'Why Amelia Homeowners and Landlords Call Us',
    whyParagraph:
      'Electric furnaces and heat pumps make up as much of our Amelia work as gas units, in houses and apartments both. Every technician is licensed and background-checked, prices get your approval first, and financing is there for replacements.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Amelia?',
        a: 'In Amelia the fault sets the price, so we test before quoting. Replacing one burned element in an electric furnace is quick, and a control board or blower motor takes more time and parts. You approve a single flat figure before any work, and evening or weekend calls don’t carry overtime.',
      },
      {
        q: 'Should I repair or replace my Amelia furnace?',
        a: 'Base it on how the furnace itself is holding up. A healthy unit with one failed part is usually a repair. A gas furnace with a cracked heat exchanger gets replaced because of carbon monoxide. If your system arrived with a 2000s Amelia house, you see both prices on the same visit.',
      },
      {
        q: 'Why is my Amelia furnace blowing cold air?',
        a: 'Thermostat on fan instead of heat, or a clogged filter, will do it. Electric furnaces in Amelia most often have a tripped breaker or a dead element. A heat pump may have an iced outdoor coil or failed backup strips. On gas, a dirty flame sensor tends to shut the burners down early.',
      },
    ],
  },
};
