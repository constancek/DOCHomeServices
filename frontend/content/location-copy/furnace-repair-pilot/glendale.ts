import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const glendale: LocationServiceCopy = {
  localParagraph:
    'Furnace repair in Glendale is mostly gas work: by Census figures, 79.6% of village homes burn gas for heat and nearly all the others use electricity. More than half the houses predate 1940, so any furnace in them was fitted later, joined to ductwork and venting reworked around it, and we inspect those joints too. Most Glendale homes are owner-occupied, so the call is yours. You get the diagnosis and a set price, then decide before a wrench turns.',
  emergencyParagraph:
    'Older Glendale houses lose warmth fast once the burners stop, and the CVG station’s January low averages close to 23 degrees under NOAA normals. That cold matters most to a newborn, a grandparent or someone recovering from illness, and plumbing can freeze in a long outage. Most Glendale furnace calls get a technician that same day, Saturdays and Sundays included.',
  commonIntro:
    'Glendale furnaces are mostly gas units working inside prewar houses. These are the faults we’re called for most:',
  localFaqs: [
    {
      q: 'Will a new furnace in Glendale’s historic district need village approval?',
      a: 'Glendale’s local historic district requires a certificate of appropriateness from the Glendale Planning and Historic Preservation Commission for exterior changes. A furnace swap in the basement leaves the outside as it was. If a new vent would show on the outside of the house, we ask the village before work starts.',
    },
    {
      q: 'I rent a house in Glendale. Who pays to fix the furnace?',
      a: 'Normally the owner. Under Ohio’s landlord statute, ORC 5321.04, whoever supplies the heating equipment must keep it working safely. Let your landlord know in writing, then let them book the repair. We fix the furnace for whoever hires us, and the lease stays between you and them.',
    },
  ],
  overrides: {
    ctaLine: 'Glendale furnace repair for prewar and newer homes',
    band1Heading: 'Common Furnace Problems in Glendale Homes',
    commonSituations: [
      'A 1920s basement furnace that short-cycles on cold mornings',
      'Upstairs bedrooms at the end of long duct runs that stay chilly',
      'A coated flame sensor that lets the burners light, then drop out',
      'An electric furnace that trips the breaker as its elements come on',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Some Glendale no-heat calls end before the van arrives. Confirm the thermostat is calling for heat and its display is lit, since dead batteries blank it out. In an older basement the furnace shutoff can look like a light switch and gets flipped by mistake, so put it back on. Check the panel for a tripped breaker, hold the filter to a lamp, and press the blower door home, because a loose door stops most furnaces. Warm air again means skip the visit. Gas odor is the exception: no switches, no relighting, everyone out, call the gas company. Otherwise we find the fault and price it for your OK.',
      },
      {
        title: 'Repair or Replace Your Glendale Furnace?',
        body: 'A 1920s Glendale house can hold a furnace that went in two winters ago, so the date on the unit’s rating plate is what counts. Replacing an igniter or inducer motor on a younger furnace is money well spent. A heat exchanger with a crack is a different call: it can push carbon monoxide into the rooms, and we won’t leave it running. Should the CO alarm go off, get the household outside, then phone for help. If replacement wins, we handle the permit and plan how the new furnace vents. Meanwhile, a gas bill rising through a mild winter usually means the furnace is slipping.',
      },
    ],
    whyTitle: 'Why Glendale Homeowners Call Us',
    whyParagraph:
      'Glendale homeowners hear what broke and why before we touch it, and the flat-rate price is theirs to approve. Every technician is licensed, insured, background-checked and drug-tested, and our family has run the company since 1993.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Glendale?',
        a: 'The fault sets the price, so testing comes first. Cleaning a dirty flame sensor is a short visit, while a failed blower motor or control board takes parts and time. You see one flat price and approve it before work starts, and a night or weekend call costs no extra.',
      },
      {
        q: 'Is my Glendale furnace worth repairing?',
        a: 'If one part failed and the heat exchanger is sound, usually yes. If the heat exchanger is cracked or the furnace needs something new every winter, replacement is the better spend. Prewar Glendale houses have rarely kept their first furnace, so the label on the unit matters more than the house’s age.',
      },
      {
        q: 'Why is my Glendale furnace blowing cold air?',
        a: 'Confirm the thermostat says heat and not fan, then look at the filter, because a clogged one can trip the limit switch and shut the burners while the blower keeps going. On an electric furnace, a tripped breaker for the heating elements does the same. If neither fixes it, call us.',
      },
    ],
  },
};
