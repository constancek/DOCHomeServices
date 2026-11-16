import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const batavia: LocationServiceCopy = {
  localParagraph:
    'Batavia is mostly an older village. Census figures put the median home at 1955, with about one in three built in 1939 or earlier. On those houses, the first thing we usually notice is rust or water at the meter box, because the seals up at the weatherhead and the roof have had decades to dry out. Around four in ten households rent, so the person calling is often a landlord. We look at the whole connection first and settle the price before anything comes apart.',
  emergencyParagraph:
    'Treat it as urgent if a limb has dragged the mast off the wall, the weatherhead is throwing off sparks or half your lights are out. Assume any wire on the ground is still carrying power, stay away and call Duke Energy Ohio. We come out for the house side the same day on most calls in Batavia, weekends included.',
  commonIntro:
    'Around the older streets of Batavia, these signs usually point to the mast:',
  localFaqs: [
    {
      q: 'Who issues the electrical permit for a mast repair in Batavia?',
      a: 'Clermont County Building Inspection at Permit Central covers permits for addresses in the village. We submit ours on the day you book and request the inspection with it, which lets Duke Energy Ohio restore service soon after the inspector passes the job.',
    },
    {
      q: 'My meter box in Batavia is rusty and stained. Is the mast leaking?',
      a: 'Probably. Once the seal at the top or the flashing on the roof fails, rain finds its way down the inside of the conductors and collects in the meter box, sometimes reaching the panel and rusting the terminals. We track down the leak, replace any damaged wire and reseal the roof in one visit.',
    },
    {
      q: 'My tenant says the power flickers at my rental in Batavia. Is the mast my responsibility?',
      a: 'It is. Ohio’s landlord statute, ORC 5321.04, obliges owners to keep the electrical fixtures and systems they’ve supplied in good and safe working order, and that covers the mast and weatherhead. We fix masts, not leases. Book us, approve the quote, and we’ll work out a time with your tenant.',
    },
  ],
  overrides: {
    ctaLine: 'Service mast repair for village houses in Batavia',
    band1Heading: 'Signs You Need Service Mast Repair in Batavia',
    commonSituations: [
      'Rust streaks down the siding from the fittings on an older mast',
      'A meter box with water stains inside the cover',
      'A mast bent over after a falling limb caught the wires to the house',
      'A meter box that has worked loose from the wall',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Batavia',
        body: 'Rust is what usually settles it on the pre-war and mid-century houses in Batavia. If the pipe is still solid, we fix what’s failing, whether that’s a strap that has slipped, a weatherhead that’s lost its seal or flashing that has curled up. If corrosion has eaten into the pipe, or a storm has bent it, the mast comes down and a new one goes up, with fresh conductors wherever the old jackets have cracked or chalked. We check the panel and meter socket before ordering parts so the new mast fits that house. Old wiring inside can be looked at for home rewiring on the same visit.',
      },
      {
        title: 'Storm Damage to Service Masts in Batavia',
        body: 'Bad weather starts a good share of our work in Batavia. When a branch lands across the wires to your house, it bends the mast, because the pipe on your roof yields long before the pole. Wind, given enough storms, leans it over as well. The damage that counts is a split in the roof seal or a loosened clamp where the wires attach, since water then gets inside and Duke will keep the power off until the entrance is fixed. If storm damage is on your side, your homeowner’s insurer is the one to ask, not the utility. Afterward, make sure the mast still points straight up.',
      },
      {
        title: 'The Utility’s Side and Yours in Batavia',
        body: 'The line from the pole as far as its attachment on your house belongs to Duke Energy Ohio, and so does the meter. Past that point, the pipe, weatherhead, riser, conductors and meter box are the homeowner’s. Duke shuts the power off, our electricians make the repair, normally in a single day, an inspector passes it and Duke switches you back on. Filing the permit at booking keeps that chain from stalling.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Batavia Choose Us for Mast Repair',
    whyParagraph:
      'Licensed electricians trace the whole connection and repair or rebuild it to code with the roof opening resealed. The permit goes in the day you book, and the price is yours to approve first.',
    sharedFaqs: [
      {
        q: 'What does mast repair cost in Batavia?',
        a: 'Expect one flat figure, given after we’ve checked the connection. A repair runs cheaper than a full replacement, and the amount of new conductor and flashing, plus the permit, set the rest. We start only with your approval, and financing is there for qualifying homeowners.',
      },
      {
        q: 'How long does it take to replace a mast in Batavia?',
        a: 'Our crew usually needs a single day. Around that, the timing belongs to Duke, which has to disconnect the house, wait for the inspector’s approval and then reconnect. Requesting that inspection the day you book is what keeps the outage short.',
      },
      {
        q: 'Can a storm loosen the mast on an older house?',
        a: 'Yes, and it’s the most common reason we come out. A limb in the overhead wires pulls the pipe out of line, and wind loosens it over the years. On older houses the seals are already worn, so even a small shift can let water down into the meter box.',
      },
    ],
  },
};
