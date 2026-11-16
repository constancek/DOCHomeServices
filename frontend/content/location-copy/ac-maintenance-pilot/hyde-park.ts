import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Most of the tune-up work in Hyde Park is on cooling that was retrofitted. Census figures date 51.6% of homes here to 1939 or earlier, decades ahead of central air, so ductwork got squeezed through closets later and the air handler usually ended up in the attic. About a third of the housing is apartments, booked by their owners. The price is fixed and agreed up front, and an AC in good shape gets told it’s in good shape.',
  emergencyParagraph:
    'A tune-up is the wrong booking for a dead AC in a hot spell, frozen lines or a dripping ceiling. Shut a frozen system off at the thermostat to thaw. A burning smell or a breaker that won’t stay reset calls for a repair. Babies, older relatives and anyone ill suffer first. Same-day repair on most calls, weekends too.',
  commonIntro:
    'Across the prewar streets and apartment blocks of Hyde Park, owners usually call about one of these:',
  localFaqs: [
    {
      q: 'Our AC in Hyde Park runs through an attic air handler. Do you service that part too?',
      a: 'Yes, and in an older house it is often where the trouble starts. The evaporator coil, blower and drain pan all sit up there, so we look for water in the pan, clear the drain line and check the coil, then run a full cycle and feel the supply vents.',
    },
    {
      q: 'As a tenant in Hyde Park, can I schedule the AC tune-up?',
      a: 'Not for an AC the landlord supplied. Under ORC 5321.04 (A)(4), Ohio owners must keep supplied air conditioning in good and safe working order, so put drips or odd noises in a written note to them. We service air conditioners, not leases, and plenty of owners book a whole building in one go.',
    },
  ],
  overrides: {
    ctaLine: 'AC servicing each spring for older houses and flats in Hyde Park',
    band1Heading: 'Signs an AC in Hyde Park Is Due for Maintenance',
    commonSituations: [
      'Water stains on a ceiling below an attic air handler',
      'An older house bought with no record of the AC ever being serviced',
      'A top floor that never cools as well as the ground floor',
      'A condenser boxed in by a fence and a summer of leaves',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in Hyde Park',
        body: 'Expect a ladder. In a prewar house in Hyde Park, the air handler is usually up in the attic, so that is where we begin, swapping a matted filter, shining a light on the evaporator coil and pouring water down the condensate line to prove it drains. The pan under it should be dry. Down in the yard, the condenser gets its coil rinsed. Gauges on the service ports tell us if refrigerant has been escaping; a leak is a separate quoted repair, not a recharge. Capacitor, contactor and wiring get metered and the system runs one full cooling cycle. Parts wait for your go-ahead.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'Book one if the AC’s history is a blank, if the house changed hands this year, if the pan under the attic unit holds water, or if the condenser has started to buzz. Landlords with several flats benefit too. Skip it if we or someone else serviced the system within the year and it cools normally, and skip it for window units. A unit that has stopped cooling or frozen over is an AC Repair job. A system we’ve already called worn out is better served by saving toward AC Installation & Replacement. Swapping a grimy filter between visits is yours to do.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in Hyde Park',
        body: 'Gas heat is the norm in Hyde Park, which usually means central air on top of a furnace, serviced once each spring. Homes heated by electricity are likelier to have a heat pump; because it runs all year, it earns a spring check for cooling and a fall check for heating, including the reversing valve and defrost board. Mini-split owners get the indoor heads and their filters cleaned.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hyde Park Book AC Maintenance With Us',
    whyParagraph:
      'Retrofitted cooling in old houses, from attic air handlers to fenced-in condensers, is most of our work here. Every technician we send is licensed, insured, background-checked and drug-tested, and the price is settled first.',
    sharedFaqs: [
      {
        q: 'How much does AC maintenance cost in Hyde Park?',
        a: 'One flat rate covers it, and you hear it before any tools come out. It depends on the system and on getting to both halves of it; an air handler reached through a tight attic hatch takes longer than one beside the basement stairs. Parts or repairs we turn up get their own price, and you decide.',
      },
      {
        q: 'How often should an air conditioner be serviced, and when?',
        a: 'Plan on one visit a year. Spring suits it best, ahead of the hot spell, when our schedule still has room. Heat pump owners should add an autumn visit, since that system also carries the house through winter.',
      },
      {
        q: 'What AC upkeep can I do myself between visits?',
        a: 'Plenty. Swap the filter once it’s grey, pull weeds and grass back from the condenser, make sure furniture isn’t sitting on a return, and keep fresh batteries in the thermostat. What you shouldn’t do is take the condenser’s side panels off, straighten bent fins or touch the copper refrigerant lines.',
      },
    ],
  },
};
