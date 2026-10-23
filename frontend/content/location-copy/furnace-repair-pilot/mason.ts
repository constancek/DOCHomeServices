import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'Most Mason houses went up between 1990 and 2009, so the furnace we’re called to is often the one the builder installed, now 17 to 36 years old. Census figures show 60.3% of homes heat with gas and 36.6% with electricity, so we see heat pumps and electric air handlers alongside the gas furnaces. Townhomes add tight closet and attic installs where airflow is the usual problem. We tell you what failed and what it costs before any work begins.',
  emergencyParagraph:
    'January nights at CVG bottom out around 23F, according to NOAA normals. A Mason house without heat on one of those nights is cold by breakfast. Infants, older parents and anyone recovering from illness handle that worst, and long outages put pipes at risk. Gas furnace or electric heat, we usually repair it the same day you call, weekends included.',
  commonIntro:
    'Mason is mostly owner-occupied houses and townhomes from the 1990s and 2000s. These furnace calls come up most:',
  localFaqs: [
    {
      q: 'Does Mason require a permit to replace a furnace?',
      a: 'Yes. The City of Mason Engineering & Building Department handles permits for work in the city, and its permit reports list furnace and AC replacements as residential mechanical work. We file through the city before installation day. A repair to the furnace you already have normally doesn’t need one.',
    },
    {
      q: 'My Mason townhome furnace is in a closet. Does that change the repair?',
      a: 'It can. Closet and attic furnaces have less room around them, so the filter is easy to forget and the return air can be cramped, which makes the furnace overheat and shut off. Change the filter and keep the closet door louvers clear. If it still trips, we check the limit switch and blower.',
    },
  ],
  overrides: {
    ctaLine: 'Mason furnace repair for houses and townhomes',
    band1Heading: 'Common Furnace Problems in Mason Homes',
    commonSituations: [
      'A 1990s builder furnace with a cracked igniter',
      'Upstairs bedrooms falling behind in a two-story 1990s house',
      'A closet furnace in a townhome shutting off on high temperature',
      'Electric backup heat failing on a heat pump during a cold snap',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Before you book, work through the basics. Thermostat set to heat, batteries good. The furnace switch, which looks like an ordinary light switch, flipped on. Breaker set. Filter clean. Furnace door closed tight, because a loose one keeps many units from starting. If the heat comes on, save yourself the visit. Smelling gas changes everything: don’t touch a switch or try to relight, get out of the house, and report it from the driveway. We’re worth calling when the furnace keeps quitting, blows cool, or makes a noise it didn’t make last winter. We inspect, explain, agree a price, and test.',
      },
      {
        title: 'Repair or Replace Your Mason Furnace?',
        body: 'Judge the furnace itself. A builder-grade unit from the 1990s has put in a lot of winters; one swapped in a few years ago hasn’t. Igniters, inducers and blower motors are usually worth fixing on either. A cracked heat exchanger is not, since it can feed carbon monoxide into the supply air; if the detector goes off, get the family outdoors first. Replacements need a city permit, and we take care of it. In homes on electric heat, a Duke Energy bill climbing in a normal winter often means the backup strips are carrying the house.',
      },
    ],
    whyTitle: 'Why Mason Homeowners Call Us',
    whyParagraph:
      'Mason’s builder-era gas furnaces, heat pumps and townhome closet units are routine work for us. A licensed, drug-tested technician finds the fault, you approve a flat price first, and financing is available if replacement wins.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Mason?',
        a: 'The part decides the price, so testing comes first and the quote second. An igniter or flame sensor on a 1990s furnace is a lighter job than a control board or blower motor. You get one flat price to approve before we begin, and nobody pays overtime for a Saturday call.',
      },
      {
        q: 'Should I repair or replace my Mason furnace?',
        a: 'Read the furnace’s data plate, not the house’s closing papers. If the heat exchanger checks out and one part quit, fixing it normally wins. If the exchanger is cracked, or a 1990s builder unit keeps needing big parts, we lay out a replacement price beside the repair so you can compare.',
      },
      {
        q: 'Why is my Mason furnace blowing cold air?',
        a: 'Check for heat mode and a clean filter. In a gas furnace, cold air usually means the burners didn’t light, often because a flame sensor is coated. With a heat pump, the outdoor unit could just be defrosting, which lasts a few minutes, or the backup strips could be dead. If cool air keeps coming, call us.',
      },
    ],
  },
};
