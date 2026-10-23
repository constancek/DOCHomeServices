import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const southFairmount: LocationServiceCopy = {
  localParagraph:
    'South Fairmount AC work splits between old detached houses and large apartment buildings. Census figures put 72.6% of homes at 1939 or earlier, so nearly every house is older than its cooling, and most central air here borrows the ducts and blower of a gas furnace. Most households rent, some in buildings of 50 or more units, so an owner or manager usually approves the repair while the tenant hears what we found. Each fault gets found and priced before repairs begin.',
  emergencyParagraph:
    'Tenants high up in South Fairmount’s 50-plus-unit buildings can’t do much when cooling stops, and older residents there suffer first. The National Weather Service puts the typical Cincinnati year at 21 days of 90-degree heat. Whether it’s a house or an apartment, most South Fairmount no-cool calls are answered the day they arrive, weekends as well.',
  commonIntro:
    'Most South Fairmount cooling runs through ducts built for a gas furnace, either in houses that predate 1940 or in large rental buildings. Faults we’re fixing over and over:',
  localFaqs: [
    {
      q: 'My South Fairmount house heats with gas. Does that change the AC repair?',
      a: 'Usually it means a split system: a condenser outdoors and an evaporator coil sitting on the gas furnace, borrowing its blower. Most homes here are set up that way. A blower or control board fault can kill heating and cooling together, so the furnace gets inspected alongside the outdoor half before we name a price.',
    },
    {
      q: 'Do I need a permit to replace an AC in South Fairmount?',
      a: 'Yes, for a replacement. South Fairmount lies within Cincinnati city limits, so the City of Cincinnati Department of Buildings & Inspections handles the mechanical permit for new or replacement cooling equipment, and that paperwork is part of our job. A repair to your existing unit needs no permit, and we know of no historic district covering homes here.',
    },
  ],
  overrides: {
    ctaLine: 'South Fairmount AC repair for old houses and apartment buildings',
    band1Heading: 'Common AC Problems in South Fairmount Homes',
    commonSituations: [
      'An evaporator coil above an aging gas furnace, frozen over behind a choked filter',
      'A condenser behind a pre-1940 house with a fan motor that has seized',
      'A big apartment building’s air handler spilling water out of its drain pan',
      'Upstairs bedrooms in an older house that stay hot because the ducts were sized for furnace heat',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Pull the furnace filter first, since your AC draws air through that same filter, and a clogged one can freeze the coil solid. Then reset a tripped breaker, once. Cool air flowing again means no technician is needed. Renters, who make up most households here, should alert the landlord before booking anyone. Request service when the breaker drops a second time, frost appears on the outside copper, or a puddle forms beside the furnace. Our technician examines condenser, coil and blower, explains what went wrong and offers a flat figure for your approval. Afterward, register temperatures confirm the fix.',
      },
      {
        title: 'Repair or Replace Your South Fairmount AC?',
        body: 'Most South Fairmount houses went up before 1940 and are older than their cooling, so the condenser’s nameplate is the date that counts. Below roughly 12 years old with one failed component, fix it. Older, with a dead compressor or a leaking coil, replacement usually wins out. If the furnace is equally old, quoting both together can spare you a second install later. Any new system needs a mechanical permit from the city. Neglect costs money before outright failure, too: dirt on the coil or a low charge stretches each run, and Duke Energy Ohio meters every extra minute.',
      },
    ],
    whyTitle: 'Why South Fairmount Homeowners and Landlords Call Us',
    whyParagraph:
      'We treat South Fairmount’s gas furnace and AC pairs as one system, because they share a blower and ducts. You approve the price before work begins, and financing is available on replacements.',
    sharedFaqs: [
      {
        q: 'How much is AC repair in South Fairmount?',
        a: 'The fault sets the price, so diagnosis comes first. A seized condenser fan motor is a modest job, whereas a coil leak buried inside a furnace cabinet needs more labor and parts. You see one flat-rate number and agree to it before anything happens, and no visit carries overtime fees.',
      },
      {
        q: 'Is my older South Fairmount AC worth repairing?',
        a: 'Under a dozen years old with one broken part, yes. Older and missing a working compressor, usually not. Because most homes here heat with gas, we also check the furnace’s age, since swapping both at once is sometimes the smarter plan for an older South Fairmount house.',
      },
      {
        q: 'Why is my South Fairmount AC blowing warm air?',
        a: 'Rule out the thermostat setting, breaker and filter. If the outdoor fan spins yet the air stays warm, a failed compressor capacitor or a refrigerant shortage is the common culprit. Only 25.5% of South Fairmount homes heat with electricity, so a heat pump stuck on heat is less likely here than in all-electric neighborhoods.',
      },
    ],
  },
};
