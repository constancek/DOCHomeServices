// DRAFT, not for publishing as is. English Woods has no privately owned homes:
// its housing is two CMHA properties (Marquette Manor and Sutter View), every
// occupied unit is rented, and whether residents may hire outside contractors is
// unverified. The one-format page (sidebar coupon, booking form, "Why [Town]
// Homeowners Call Us", cost and repair-or-replace FAQs) is built for people who
// book and pay for their own repair, so it would mislead CMHA residents. Kept as
// a draft so the owner can decide whether to publish a tenant-only version, skip
// the town, or point it at a different page type.
import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const englishWoods: LocationServiceCopy = {
  localParagraph:
    'English Woods has no privately owned homes. Its housing is two CMHA properties on Sutter Avenue: Marquette Manor, a 15-story tower of about 140 one-bedroom apartments, and Sutter View, 119 family townhomes and apartments in 23 two-story buildings. Census survey data for the block group shows every occupied unit rented and 59.4% heated with electricity. CMHA, as owner, manages work at both properties, so residents report AC problems to CMHA or the property office rather than to an outside contractor.',
  emergencyParagraph:
    'NWS Wilmington counts about 21 days a year at 90 degrees or more around Cincinnati, and an upper-floor apartment in a tower heats up fast when its cooling stops. Report a failure to the property office at once and say who is at risk. If CMHA brings us in, most repairs happen that day.',
  commonIntro:
    'English Woods housing is a high-rise and a set of two-story townhome buildings, mostly on electric heat. The AC faults that housing like this tends to have:',
  localFaqs: [
    {
      q: 'I live in English Woods and my AC stopped. Can I hire you directly?',
      a: 'No. Both English Woods properties belong to CMHA, which manages repairs there and chooses who works on its equipment. Report the problem to your property office in writing and keep a copy. If CMHA or its manager sends us, we explain the fault to you as well.',
    },
    {
      q: 'Marquette Manor was renovated. Why would the AC fail?',
      a: 'CMHA began a gut renovation of every Marquette Manor apartment in January 2025, planned to take 16 months. New equipment can still fail early from a loose wire, a blocked drain line or a thermostat set wrong. Report it to the property office, since new systems are normally covered by the contractor who installed them.',
    },
  ],
  overrides: {
    ctaLine: 'AC repair at English Woods properties when CMHA sends us',
    band1Heading: 'Common AC Problems in English Woods Apartments',
    commonSituations: [
      'An upper-floor tower apartment heating up when its unit stops cooling',
      'A heat pump stuck in heating mode in an electric-heat apartment',
      'A drain line backing up inside an apartment’s air handler closet',
      'One townhome in a two-story building warm while the one beside it cools',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Residents can check a few things before reporting. Make sure the thermostat is on cool and set below room temperature, and look for a tripped breaker in your apartment’s panel if you have access to it. Cold air back within the hour means nothing needs fixing. If it stays warm, water appears near the indoor unit, or you hear the system hum without starting, report it to the property office in writing. Don’t open panels or hire anyone yourself, because CMHA controls the equipment. When we’re sent, the technician tests the system, explains the fault to you and the manager, and works only on what management approves.',
      },
      {
        title: 'Repair or Replace AC at English Woods?',
        body: 'That decision belongs to CMHA, not to residents. The usual logic still applies: equipment under about 12 years old with one failed part gets repaired, and older equipment with a dead compressor is usually replaced. Any replacement at an English Woods address goes through the City of Cincinnati Department of Buildings & Inspections for the mechanical permit. For residents, the useful part is timing. Report weak cooling early, before it stops altogether, because a system low on refrigerant runs longer, struggles on the hottest afternoons and gives management less time to arrange the repair. Write down when it started and what you noticed.',
      },
    ],
    whyTitle: 'How We Handle AC Repair at English Woods Properties',
    whyParagraph:
      'At English Woods the owner approves the work and residents live with the result, so we explain the fault to both. Every technician is licensed, insured and background-checked, and each apartment gets its own diagnosis.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in an English Woods apartment?',
        a: 'Residents don’t arrange or approve AC repairs here; CMHA does. For the owner, a clogged drain line is a short visit and a failed compressor is a large job, so we diagnose before quoting. Each apartment gets its own flat-rate figure for approval, with no overtime fees.',
      },
      {
        q: 'Should an English Woods AC be repaired or replaced?',
        a: 'That is CMHA’s call. Equipment under about 12 years old with one failed part is normally worth repairing, and older equipment with a dead compressor usually isn’t. After the Marquette Manor renovation, much of that tower’s equipment should be young enough that a repair is the likely answer.',
      },
      {
        q: 'Why is my English Woods apartment AC blowing warm air?',
        a: 'Check the thermostat mode first. Most English Woods apartments heat with electricity, and a heat pump left on heat, or stuck there by a failed reversing valve, blows warm air in summer. A failed capacitor or a refrigerant leak are the other usual causes. Leave panels closed and report it.',
      },
    ],
  },
};
