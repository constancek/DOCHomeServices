import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'A storm-dark home in Millvale usually has damage at the meter, the mast or the panel, and the building’s owner, not the tenant, books the repair. About a third of residents live in public housing, where management handles every fix, and roughly nine households in ten in the area rent, by Census figures. Privately owned houses and townhomes, many dating from the 1950s on, can have older entrance cable and panels behind the obvious damage. We photograph it and agree the price with the owner first.',
  emergencyParagraph:
    'After a storm, a dark home in Millvale has no furnace, no cooling and no sump pump running, sometimes with the rain still coming. Any line down along Beekman Street is for 911 and Duke Energy Ohio to handle first. Owners and managers phone the next morning, and most still get an electrician that day, weekends as well.',
  commonIntro:
    'For owners, landlords and managers of houses, townhomes and small buildings in Millvale, these are the storm repairs we make:',
  localFaqs: [
    {
      q: 'My public housing unit in Millvale has no power after the storm. Can I call you directly?',
      a: 'Report it to management first, in writing if you can, with photos of anything that looks damaged outside. In public housing and managed complexes, management arranges and approves every repair, so we work through them rather than for residents directly. If you smell burning or see sparks, call 911 right away.',
    },
    {
      q: 'I rent a house in Millvale and it’s still dark. Who arranges the storm repair?',
      a: 'Your landlord arranges it. Write to them with photos of the damage and keep a copy, since under ORC 5321.04 an Ohio landlord has to keep the electrical systems they supplied in good and safe working order. We restore power, not leases, so in Millvale, the go-ahead comes from the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Storm repairs for owners and landlords in Millvale',
    band1Heading: 'Storm Damage We Repair in Millvale',
    commonSituations: [
      'A rental house whose meter box a branch on the drop pulled off the wall',
      'A scorched meter bank on a row of townhomes that can’t go back in service',
      'A cracked weatherhead on an older house funnelling rain into the entrance cable',
      'Half a rental without power from panel damage, though outside looks normal',
    ],
    proseSections: [
      {
        title: 'When Your House Stays Dark After a Storm in Millvale',
        body: 'From inside a dark unit in Millvale, a resident can see Beekman Street lit and the townhomes across the way back on. When only one building is out like that, the storm has almost always damaged something the property owner is responsible for. The utility’s side covers the poles, the drop and the meter, and the owner’s side covers the weatherhead, mast, meter socket and panel; line crews won’t energise a socket that’s been yanked loose. Inside city limits, Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits, so we photograph the damage, repair it, file with IBI and line up the reconnect.',
      },
      {
        title: 'Storm Safety Before the Repair in Millvale',
        body: 'Around the townhomes in Millvale, a wire down on a walkway or a parking area may be live even when it looks dead. Give it room, call the children and pets in, and leave the branch on it for 911 and the utility. A generator, if someone has one, runs outdoors and clear of every neighbour’s window, with the fridge on its own cord. Patched into the building wiring without a transfer switch, it pushes current toward the crew fixing the line, and that can kill. A main breaker that trips again stays off, and owners should tell us about meter or mast damage before cleanup.',
      },
      {
        title: 'Surge Damage After a Storm in Millvale',
        body: 'For an owner in Millvale, a nearby lightning strike can cost more than the outage did. With electric heat the usual setup, the spike rippling through every plugged-in appliance tends to knock out furnace and heat pump boards first, then stoves and televisions in each unit. A surge protector for the whole building, at the panel, is the cheapest protection we install, and the visit that repairs the storm damage is the time to add it.',
      },
    ],
    whyTitle: 'Why Residents and Landlords in Millvale Call Us After a Storm',
    whyParagraph:
      'Landlords and managers in Millvale get licensed electricians who treat a dark building as an emergency, photograph storm damage for the insurer, repair meter bases, masts and entrance cable, and meet the inspector, with the price agreed first.',
    sharedFaqs: [
      {
        q: 'Why is our home still dark in Millvale when the street has power?',
        a: 'Utility crews bring back the lines and equipment the utility owns, which stop at the meter. When the storm has pulled a meter box away or bent a mast, they can’t reconnect it safely, so the home stays dark until a licensed electrician repairs it and an inspector signs it off.',
      },
      {
        q: 'What does an insurer usually need after storm damage in Millvale?',
        a: 'Adjusters tend to ask for photos showing the damage before any work and an invoice that lists every part. In Millvale, storm damage on the owner’s side goes through the property’s insurance, not the utility. We take the photos on arrival, and financing is available for qualifying homeowners.',
      },
      {
        q: 'How soon can an electrician get to Millvale after a big storm?',
        a: 'Get the call in early. After a big storm, owners and managers across the city all ring at once, and inspectors get booked up too. Most calls still see an electrician the same day, weekends included, and the repair is usually finished in a single day.',
      },
    ],
  },
};
