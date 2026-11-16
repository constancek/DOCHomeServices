import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'Landlords own most of the water heaters we look after in CUF; Census figures show 84.5% of households rent. The buildings run from pre-1940 houses in Fairview and Clifton Heights, where the tank lives in a basement with an old flue and drain spigot, to big 1970s complexes with a closet heater on a pan in every unit. Owners tend to line up several addresses in one day. Quotes are flat and given in advance, and if a tank doesn’t justify the visit, we’ll say so.',
  emergencyParagraph:
    'A tank leaking into a basement or closet pan: cold-water valve at the top off, then gas or breaker. A gas smell: everyone out, no switches, no pilot, and call the gas company from the sidewalk. A carbon monoxide alarm: clear the unit. These, like persistent relief valve discharge or cold taps, need repair. Usually same day, weekends included.',
  commonIntro:
    'With so many rentals, it’s usually an owner or manager who notices one of these:',
  localFaqs: [
    {
      q: 'Can you put all my rentals in CUF on a yearly water heater schedule?',
      a: 'Yes. We group your addresses into one route, flush each tank, test each relief valve and look at each anode, with a flat price per heater signed off ahead of time. You’ll get a short rundown per unit, which makes it easy to see which tank to replace next.',
    },
    {
      q: 'The water heater in my rental in CUF is noisy. Can I, as the tenant, book you?',
      a: 'Put it to the landlord in writing; the heater belongs to them, and so does its upkeep. Ohio’s ORC 5321.04 lists both duties: appliances the owner supplies kept in working order, (A)(4), and reasonable hot water, (A)(6). We service water heaters, not leases. If the whole building shares one heater, management schedules it.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly water heater service for rental houses and apartment buildings in CUF',
    band1Heading: 'Signs a Water Heater in CUF Is Due for Maintenance',
    commonSituations: [
      'A house carved into units, with a basement tank per unit and no dates on any',
      'A closet heater in a 1970s complex with rust rings in the pan',
      'Housemates finding the hot water gone by the third shower',
      'An investor buying a few buildings with no service paperwork',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in CUF',
        body: 'In CUF the flush happens one of two ways: a hose from a basement tank to the floor drain, or a hose run from a closet unit to the nearest drain or bucket. Either way, we rinse until the grit stops. That grit is mineral matter released as water heats, and it crusts under the burner or elements, which is the popping tenants report. We pull the anode, the rod that rusts so the steel doesn’t, and quote one if it’s gone. The relief valve gets lifted and its pipe followed. Gas: flame, pilot, vent, gas line. Electric: elements, thermostats, pan, supply connections. Approval first.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'For rental owners, the visit pays on any working tank with no history, on a building you just took on, and when tenant complaints about noise or short showers start. Doing every unit in one yearly round is where it pays most. It doesn’t pay on a tank that’s rusted through and dripping; that needs replacing, and a rinse won’t buy time. If the hot water runs brown or the tank is near its end, we’ll advise keeping the money for the new one. A handy owner can drain a bucket between visits. Once a year suits most rentals.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in CUF',
        body: 'Tank heaters in CUF, basement or closet, get the drain, rinse and anode check. A tankless unit is descaled instead, by pumping cleaning solution through its heat exchanger, and its inlet screen is cleared. Gas service is common in CUF, so gas heaters get flame and flue checks, and electric closet units get elements and thermostats tested. If an owner is replacing tanks across a building, tankless can come up then.',
      },
    ],
    whyTitle: 'Why Landlords in CUF Book Water Heater Maintenance With Us',
    whyParagraph:
      'Owners get one flat quote covering every unit before work starts, no weekend overtime, and licensed, insured, drug-tested technicians. We’re family owned since 1993, and if a job isn’t right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does it cost to maintain water heaters in rentals in CUF?',
        a: 'Each heater is a flat rate, quoted and approved before we start. Tank or tankless, gas or electric, and access set it. A basement tank at the bottom of a steep hillside stair takes longer than a closet unit. Multiple units come as one combined quote.',
      },
      {
        q: 'How often should rental water heaters get serviced?',
        a: 'Yearly is the normal advice, and scheduling all your units on one visit is the easy way to stick to it. If a tenant mentions popping or rumbling in between, get that tank seen sooner; it’s sediment piling up.',
      },
      {
        q: 'Can I flush the heaters at my rentals myself?',
        a: 'A handy owner can draw off some water from the drain valve, and that’s fine. We’d rather take on an old drain valve that might weep once opened, especially over a tenant’s ceiling, plus the gas burner and the relief valve test.',
      },
    ],
  },
};
