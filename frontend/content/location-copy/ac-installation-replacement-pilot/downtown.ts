import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Downtown Cincinnati has very few houses, so most AC replacements happen inside apartment and condo towers. Census figures show 71.6% of homes sit in buildings of 50 or more units and 87.3% are rented, which puts decisions with owners and building managers. In older buildings the indoor unit often hides in a closet with a narrow route out, and some units never had ducts, so new runs or ductless heads are the options. Newer buildings make it a straight swap. Where a repair will do, the owner hears that first.',
  emergencyParagraph:
    'Top-floor units heat quickly once cooling fails, and older residents, babies and anyone ill or short of breath suffer first; about 21 days a year reach 90F, per the National Weather Service. Water through a ceiling from the air handler means switching it off and telling management. Weekends included, most calls get a replacement that day when stocked.',
  commonIntro:
    'In Downtown Cincinnati, large buildings usually show an apartment or condo needs a new AC this way:',
  localFaqs: [
    {
      q: 'I rent an apartment in Downtown Cincinnati. Who replaces a dead AC?',
      a: 'The owner does, usually through management. Put your report in writing. Under Ohio’s ORC 5321.04 (A)(4), a landlord supplying air conditioning has to keep it in good and safe working order. We install air conditioners, not leases, which is why the owner signs off on our price.',
    },
    {
      q: 'Will a condo AC replacement downtown need city paperwork?',
      a: 'Yes. Inside city limits, Cincinnati’s Department of Buildings & Inspections requires a mechanical permit to install or replace HVAC equipment. We pull it, coordinate access with your building’s management, and handle the inspection so the condo owner doesn’t have to.',
    },
  ],
  overrides: {
    ctaLine: 'Replacement cooling for high-rise condos and apartments in Downtown Cincinnati',
    band1Heading: 'Signs an Apartment or Home in Downtown Cincinnati Needs a New AC',
    commonSituations: [
      'A closet air handler leaking toward the condo below',
      'Cooling that reaches the living room but never the bedroom',
      'A building owner facing failed compressors in several apartments',
      'An older unit without ducts where the owner wants central cooling',
    ],
    proseSections: [
      {
        title: 'Replacing an AC in Downtown Cincinnati, and When a Repair Will Do',
        body: 'Condition settles it, not whether the building rose in 1920 or 2015. If a fairly recent system loses one part, maybe a capacitor, a blower motor, a contactor or a single leaking fitting, fixing it is right and we price that. A quit compressor, a coil leaking at several points, a unit generating a service ticket every summer or parts that have vanished from supply argue for replacement. So does a bedroom that never cools whatever gets repaired. Owners who schedule replacements in spring sidestep the July rush. Both numbers go to whoever owns the unit.',
      },
      {
        title: 'Choosing the Right New AC in Downtown Cincinnati',
        body: 'Each unit gets sized to the space it cools, not to the label on what’s there now. An oversized system runs in short bursts and leaves rooms uneven and the air damp, which tenants notice fast. New outdoor equipment has to match the indoor coil or air handler, and the building usually dictates where it can go and how it gets there. Electric heat dominates in these towers, so a heat pump is often the like-for-like replacement. In units with no ducts, ductless heads are the practical choice. Old equipment and its refrigerant leave with us.',
      },
      {
        title: 'Financing a New AC in Downtown Cincinnati',
        body: 'Condo owners can finance a replacement, and so can landlords redoing cooling across several apartments. Approval returns an instant credit decision, and settling the balance early carries no added cost. With the flat price agreed before work, a unit that died in a hot week gets swapped now and paid off gradually, so tenants regain cooling without the owner scrambling for cash.',
      },
    ],
    whyTitle: 'Why Building Owners and Residents in Downtown Cincinnati Choose Us for AC Installation',
    whyParagraph:
      'Closet air handlers, tight hallways, elevator bookings and building access rules shape most installs we do in Downtown Cincinnati. Owners approve a flat price first, technicians are licensed, insured and background-checked, and weekends bring no overtime.',
    sharedFaqs: [
      {
        q: 'How is a new AC priced for a condo in Downtown Cincinnati?',
        a: 'One flat price comes after we see the unit. It depends on the capacity the space needs, the type of system, any duct or electrical work, and access, which here includes elevators, hallways and building rules. First installs cost more than swaps. Financing is available.',
      },
      {
        q: 'Should a condo owner repair or replace the AC?',
        a: 'Fix a newer unit that has one bad part. Replace one with a dead compressor, a badly leaking coil, repeat breakdowns or parts nobody stocks anymore. Both quotes come from one visit, the owner chooses, and nobody pushes either option.',
      },
      {
        q: 'Can an AC in a downtown apartment be replaced the same day?',
        a: 'Most of the time, provided the matching unit is stocked and the building can schedule our access, and a typical changeout finishes in a day. Running new ducts for a first install takes longer. If ordering is needed, the owner hears that same day what we can arrange.',
      },
    ],
  },
};
