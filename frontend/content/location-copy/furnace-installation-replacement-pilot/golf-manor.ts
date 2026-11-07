import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const golfManor: LocationServiceCopy = {
  localParagraph:
    'Half of Golf Manor rents, and 33.9% of its housing, by Census figures, sits in three- and four-family buildings, most put up in the 1940s and 1950s. So the landlord, not the cold tenant, signs off. The furnaces hide in basements, some still flued into a brick chimney, with ducts laid out for the first furnace. Gas heats most homes. A high-efficiency model exhausts through plastic pipe in a side wall and needs a drain. Pricing is settled before tools come out; if a repair covers it, we say so.',
  emergencyParagraph:
    'January lows average around 23F, per NOAA, which is hardest on infants, older tenants and the sick. If you smell gas, get everyone out without touching switches or relighting, then call the gas company. Treat a CO alarm the same way. Stocked furnaces usually go in that day, weekends included. If not, we say what’s possible before nightfall.',
  commonIntro:
    'Single houses, duplexes and fourplexes share the streets in Golf Manor, and furnace calls here tend to look like this:',
  localFaqs: [
    {
      q: 'What should a tenant do when the landlord hasn’t replaced a dead furnace in Golf Manor?',
      a: 'Send the owner a dated, written notice and hold onto a copy. Under ORC 5321.04, an Ohio landlord has to keep the heating equipment they provide in good and safe working order. The repair-or-replace decision belongs to the owner, who schedules us. We install furnaces, not leases; managed buildings route it through the office.',
    },
    {
      q: 'Is a permit needed to replace a furnace in Golf Manor?',
      a: 'Yes. The village names heating replacements among the projects that need a permit, and it asks for a village zoning certificate on building work, with Hamilton County issuing the building permit itself. We sort out which pieces your job needs, file them, and book the inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Furnace replacements for small rentals and single houses in Golf Manor',
    band1Heading: 'Signs an Apartment or Home in Golf Manor Needs a New Furnace',
    commonSituations: [
      'An upstairs unit in a fourplex that never reaches the thermostat setting',
      'A written heat complaint from a tenant that the owner needs answered',
      'A 1950s furnace still exhausting into the building’s original brick flue',
      'A furnace red-tagged on a service call over a heat exchanger crack',
    ],
    proseSections: [
      {
        title: 'Replacing a Furnace in Golf Manor, and When a Repair Will Do',
        body: 'The furnace makes the case, not the building’s age. Even an old duplex can have a recent furnace, and if one of those loses a single part, the igniter, the inducer motor or a limit switch, the honest answer is a repair. We’ll quote it. A cracked heat exchanger flips that: carbon monoxide can reach the living space, the furnace gets shut off, and replacement is the safe route. The same applies to a unit that fails every winter, one whose parts are gone, or apartments that stay cold through repairs. Some landlords prefer swapping in autumn over a tenant’s midwinter call. Both prices go on paper.',
      },
      {
        title: 'Choosing the Right New Furnace in Golf Manor',
        body: 'Every unit gets its own heat-loss figure, calculated for a Cincinnati winter. Copying the old nameplate is how buildings end up with furnaces that blast briefly, quit, and leave the bedroom at the far end cold. Most of the village heats with gas, so a gas furnace normally replaces a gas furnace, and electric units keep electric heat. Where a building runs on a boiler and radiators, that’s boiler work, since a furnace would mean installing ducts from scratch. We inspect the gas piping, the flue and each duct system, remove the old furnace, and handle the permit. Tenants tend to notice the quieter blower first.',
      },
      {
        title: 'Financing a New Furnace in Golf Manor',
        body: 'Owners don’t have to wait for cash to land before a cold apartment gets heat. Financing covers new furnaces in this village, with an instant credit decision upon approval and no prepayment penalty. The flat-rate price is signed off before the old furnace is disconnected. A landlord replacing furnaces in two, three or all four units of a building can finance each one the same way.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Golf Manor Choose Us for Furnace Installation',
    whyParagraph:
      'Shared basements under fourplexes are normal furnace work for us in Golf Manor. We’ve been family owned since 1993, every technician is licensed, insured and background-checked, owners sign a flat price first, and weekends carry no overtime fee.',
    sharedFaqs: [
      {
        q: 'How is a furnace replacement priced in Golf Manor?',
        a: 'Per furnace, as a flat number we give after the visit and you approve before any work. The fuel, the size each apartment needs, the venting, duct changes and the walk down to the basement all count. Several furnaces in one building get itemized separately. Financing is available.',
      },
      {
        q: 'Should landlords repair or replace an aging furnace in Golf Manor?',
        a: 'Repair it when it’s fairly new and one component failed. Replace it when the heat exchanger has cracked, breakdowns keep repeating, parts can’t be sourced or tenants stay cold after the fix. We write both options up, and the owner chooses which one we do.',
      },
      {
        q: 'Can a furnace be replaced on the day it fails in Golf Manor?',
        a: 'Usually, Saturdays and Sundays too, if we have the correct furnace in stock. Most replacements are done in a day, even in a shared basement. If one has to be ordered, the owner and tenant hear that during the visit, along with what we can do that day to keep the apartment safe.',
      },
    ],
  },
};
