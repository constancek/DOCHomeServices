import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Most Downtown Cincinnati heat runs on electricity, not gas, so the furnace we repair here is usually an electric furnace or air handler inside a condo or apartment. Census figures for the downtown blocks show 69.6% of homes heating with electricity, and most units sit in buildings of 50 or more. That changes who calls: tenants report to management, while condo owners and building managers book us directly. We find the fault and agree a price with whoever is paying before work starts.',
  emergencyParagraph:
    'A Downtown unit with no heat gets cold quickly when January lows average about 23 degrees, the NOAA normal at CVG. Babies, older relatives and anyone ill are at risk first, and an unheated unit can put plumbing at risk of freezing. We repair electric and gas furnaces Downtown, usually the same day, weekends included.',
  commonIntro:
    'Downtown heat is mostly electric furnaces and air handlers in apartments and condos, with gas in some of the older buildings. These are the calls we see most:',
  localFaqs: [
    {
      q: 'My Downtown apartment has no heat. Should I call you or my landlord?',
      a: 'Call building management first. Cincinnati requires rentals whose tenants can’t set their own heat to be kept at 70 degrees or more indoors once the outdoor temperature stays under 60 for 24 hours. Report the outage in writing. We fix furnaces, not leases, and we work for owners and managers.',
    },
    {
      q: 'Do you need a permit to replace a furnace in a Downtown condo?',
      a: 'Yes. Replacing heating equipment inside the City of Cincinnati is mechanical work that needs a permit from the Department of Buildings & Inspections, and we pull it. Check with your condo association before the work too, since it may set rules for access to the building.',
    },
  ],
  overrides: {
    ctaLine: 'Downtown Cincinnati furnace repair for condos and apartment buildings',
    band1Heading: 'Common Heating Problems in Downtown Cincinnati Apartments and Condos',
    commonSituations: [
      'An electric furnace in a condo closet blowing lukewarm air',
      'A breaker that trips when the heat strips come on',
      'One room of a converted older building staying cold while the rest is warm',
      'A thermostat calling for heat with no response from the air handler',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Renters, tell building management first; in most Downtown buildings the owner decides who repairs the heat. For owners, a few checks can save a visit. Confirm the thermostat is on heat with good batteries and set above room temperature. Check the unit’s breaker, the switch by the furnace or air handler, and the filter, and make sure the access panel is fully closed, because many units won’t run with it loose. If that restores heat, you don’t need us. Call when the breaker trips again or the air stays cool. With gas heat, a gas smell means leave, touch no switches and call the gas company from outside.',
      },
      {
        title: 'Repair or Replace Your Downtown Cincinnati Furnace?',
        body: 'Judge the equipment, not the building. A unit in a pre-1940 Downtown building can have an air handler put in a few years ago, while one in a newer tower can still run on its original equipment. A burned-out element or a failed blower motor is usually a straightforward repair. In gas-heated buildings, a cracked heat exchanger is a carbon monoxide hazard, so we turn that furnace off and price a replacement. A replacement needs a mechanical permit from the Department of Buildings & Inspections, and we file it. Watch your Duke Energy bill too: electric heat that runs nonstop shows up there first.',
      },
    ],
    whyTitle: 'Why Downtown Condo Owners and Building Managers Call Us',
    whyParagraph:
      'Downtown heating work means tight closets, building rules and mostly electric equipment, and we plan around all of it. Our technicians are licensed and drug tested, and you approve a flat-rate price before any work starts.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Downtown Cincinnati?',
        a: 'The failed part sets the price, and we find it by testing first. Swapping a sequencer in an electric furnace is fairly quick, while a blower motor in a narrow condo closet is a bigger job. You approve one flat-rate price before we start, and evening or weekend calls cost the same.',
      },
      {
        q: 'Should I repair or replace the furnace in my Downtown condo?',
        a: 'Start with the age and condition of the unit itself. A sound air handler or furnace with one failed part is worth repairing. On gas equipment, a cracked heat exchanger can leak carbon monoxide, so replacement is the safer answer. We price both and handle the city permit if you replace.',
      },
      {
        q: 'Why is my Downtown apartment heat blowing cold air?',
        a: 'Check that the thermostat is set to heat and not fan, and that the breaker for the unit hasn’t tripped. On electric heat, cold air usually means a failed element or sequencer, so the blower runs with nothing warming the air. Renters should report it to management rather than book a repair.',
      },
    ],
  },
};
