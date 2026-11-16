// DRAFT, not for publishing. Queensgate has about 24 housing units (2020 Census blocks east of
// Mill Creek, an approximate split) and its own home types, ages and heating fuel are unverified.
// Tract 263 ACS figures describe Lower Price Hill, so none are used here. The four
// commonSituations below are not backed by Queensgate facts; they are placeholders an owner
// should confirm or replace. See the agent report.
import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const queensgate: LocationServiceCopy = {
  localParagraph:
    'Very few people live in Queensgate. It is mostly warehouses and commercial buildings beside downtown, and the 2020 Census blocks on its side of Mill Creek hold only about 24 housing units. Census survey figures for Tract 263 describe Lower Price Hill’s houses, not these, so we don’t assume a typical Queensgate home. Any AC repair here starts with looking at what is actually installed. A replacement at a City address needs a Cincinnati mechanical permit. We diagnose first and price the repair before work.',
  emergencyParagraph:
    'Queensgate sits in the valley beside downtown, and the National Weather Service averages 21 days a year at 90 degrees or more in the Cincinnati area. If you live or work here and the cooling quits on one of those days, we repair central air and heat pumps, most the same day, weekends included.',
  commonIntro:
    'We have no verified data on Queensgate’s few homes, so these are the faults we would check first in any small residential system here:',
  localFaqs: [
    {
      q: 'Do you repair AC in Queensgate’s commercial buildings?',
      a: 'We repair residential systems. Most Queensgate buildings are warehouses and commercial space, and large commercial cooling plants are a different trade. If you live in one of the neighbourhood’s few homes or apartments, we can help. Cincinnati Union Terminal is a museum landmark, and its systems are not a homeowner job.',
    },
    {
      q: 'Who issues the permit to replace an AC in Queensgate?',
      a: 'Queensgate is a City of Cincinnati neighbourhood, so a mechanical permit from the Department of Buildings & Inspections covers installing or replacing a residential air conditioner. Rules for commercial buildings are a separate question we haven’t confirmed. We check the address before quoting a replacement.',
    },
  ],
  overrides: {
    ctaLine: 'Queensgate AC repair for the homes in the valley, every day',
    band1Heading: 'Common AC Problems in Queensgate Homes',
    commonSituations: [
      'A split system whose outdoor fan has stopped turning',
      'Frost forming on the refrigerant line at the condenser',
      'A heat pump stuck in heating mode on a hot afternoon',
      'Water from an indoor unit’s blocked condensate drain',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Start with what you can check safely. Look at the filter and replace it if it’s grey, make sure the thermostat is on cool and below room temperature, and reset the AC breaker once if it tripped. If the space cools within the hour, you don’t need us. If you rent, report it to the owner before booking. A condenser fan that won’t turn, ice on the copper line or water around the indoor unit needs a technician. We inspect both halves of the system, explain what failed and give a flat-rate price before work.',
      },
      {
        title: 'Repair or Replace Your Queensgate AC?',
        body: 'Read the equipment’s data plate, because we have no reliable figure for how old Queensgate’s few homes or their systems are. A unit under ten years old with one failed part is a repair. One in its teens with a dead compressor, or an R-22 system that leaks, is usually better replaced, and that needs a City of Cincinnati mechanical permit. Duke Energy Ohio supplies power here, and a dirty outdoor coil or slow leak shows up on that bill as longer run times. Rinsing the coil with the power off is a job you can do yourself.',
      },
    ],
    whyTitle: 'Why Queensgate Residents Call Us',
    whyParagraph:
      'We tell you plainly whether your Queensgate system is a residential job we should take. If it is, a licensed, background-checked technician finds the fault and you approve a flat-rate price first.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Queensgate?',
        a: 'We price it after finding the fault. A failed capacitor is a short job and a refrigerant leak is a longer one, so a number before the diagnosis would be a guess. You approve one flat-rate price before any work, with no overtime fees.',
      },
      {
        q: 'Should I repair or replace the AC in my Queensgate home?',
        a: 'Go by the equipment’s age and the fault. Under ten years with one bad part, repair it. In its teens with a failed compressor, replacement usually makes more sense. Replacing it at a City of Cincinnati address needs a mechanical permit, which we handle.',
      },
      {
        q: 'Why is my Queensgate AC blowing warm air?',
        a: 'Check the thermostat mode, the filter and the breaker first. If those are fine, a failed capacitor, low refrigerant or, on a heat pump, a reversing valve stuck in heating is the usual cause. Those need a technician.',
      },
    ],
  },
};
