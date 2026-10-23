import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const maineville: LocationServiceCopy = {
  localParagraph:
    'In Maineville, electric heat outnumbers gas: 52.6% of homes against 44.7%, by Census figures. Many of those electric homes likely run heat pumps with backup strips in the air handler, so a winter call can start outdoors. The village is young, with a median home built in 2004, which puts a lot of original furnaces and air handlers near 20 years old at the same time. We find the failed part, tell you what it is, and price it before we start.',
  emergencyParagraph:
    'Maineville sees about 100 nights a year at or under 32F, going by NOAA normals for CVG. A house without heat drifts colder overnight, and the people who can least handle that are infants, aging parents and anyone unwell. Long outages can freeze plumbing. We usually fix gas and electric heat the day you call, weekends too.',
  commonIntro:
    'Most Maineville homes are owner-occupied houses from the 1980s on, built with either gas or electric heat. These calls come up most:',
  localFaqs: [
    {
      q: 'Who issues furnace replacement permits in Maineville?',
      a: 'The village sends residents to the Warren County Building Department in Lebanon for building permits, and asks that its own Zoning Department hear about construction projects first. We confirm what your address needs and handle the paperwork before installation. A repair to your current furnace usually needs no permit.',
    },
    {
      q: 'My Maineville heat pump runs but the house stays cold. Is the furnace broken?',
      a: 'Often it’s the backup heat. On the coldest nights a heat pump leans on electric strips in the air handler, and if a strip or its relay fails, the house falls behind. Check the filter and the air handler breakers first; there are often two. If those are fine, we test the strips and the outdoor unit.',
    },
  ],
  overrides: {
    ctaLine: 'Maineville furnace and electric heat repair',
    band1Heading: 'Common Furnace Problems in Maineville Homes',
    commonSituations: [
      'Electric backup heat that quits on the first hard freeze',
      'A 2000s gas furnace with a worn inducer motor',
      'An air handler breaker that trips when the heat strips come on',
      'A heat pump frosted over and not running its defrost',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'A good share of no-heat calls end with a few checks. Put the thermostat on heat and give it new batteries. Look at the panel for a flipped breaker; electric air handlers often have two. Confirm the switch on or beside the furnace is on, replace a clogged filter, and press the blower door until it clicks. If warm air comes back, skip the service call. A gas smell is a leave-now situation: no switches, no relighting, and the call to the gas utility happens outside. We’re needed when the house can’t keep up on a cold night or a breaker keeps flipping. We inspect, explain, price, then test.',
      },
      {
        title: 'Repair or Replace Your Maineville Furnace?',
        body: 'Decide by the age of the equipment. Something installed with a 2000s house has around 20 winters on it; something put in last fall is barely broken in. Igniters, elements and blower motors get repaired on either. Gas furnaces with a cracked heat exchanger don’t, because exhaust with carbon monoxide can leak into the air you breathe; a sounding CO detector means everyone outside before any phone call. In all-electric Maineville homes, watch the electric bill: a big jump without a cold snap to match usually means backup strips are doing work the heat pump should handle.',
      },
    ],
    whyTitle: 'Why Maineville Homeowners Call Us',
    whyParagraph:
      'We service the gas furnaces and electric air handlers Maineville’s subdivisions were built with. A licensed, background-checked technician does the work, you approve a flat price before it starts, and financing is available for replacements.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Maineville?',
        a: 'We price after testing, because the failed part sets the cost. A strip relay or igniter is a modest job; an inducer motor or control board costs more. One flat figure goes to you for approval before we begin, and an evening or weekend visit is billed at that same figure.',
      },
      {
        q: 'Should I repair or replace my Maineville furnace?',
        a: 'Repair a sound unit with one bad part. Replace a gas furnace with a cracked heat exchanger, or a 20-year-old system that keeps finding new ways to fail. Lots of Maineville equipment went in during the 2000s, so when the call is close, you get the repair price and a replacement price on the same visit.',
      },
      {
        q: 'Why is my Maineville furnace blowing cold air?',
        a: 'Confirm heat mode and a clean filter. Gas furnaces blowing cold usually haven’t lit. Electric and heat pump systems blowing cool tend to have dead backup strips, or an outdoor unit hung up in defrost. Sorting out which one takes meters and a few minutes at the air handler, so that part is our job.',
      },
    ],
  },
};
