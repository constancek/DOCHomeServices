import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'In Hamilton, the housing runs old. Census figures put more than a quarter of the houses at 1939 or earlier and the median at 1956. Older two-story houses there often have a mast rising through the roof from a meter on the side wall, still wired with cable and sealed with flashing that have taken decades of freeze and thaw. Close to half of households rent, so landlords make a good share of our calls. We look over the whole entrance, and the price is fixed before anything is touched.',
  emergencyParagraph:
    'A limb that has yanked the mast loose, arcing at the weatherhead or a dead side of the house moves the job up the line. Assume any wire on the ground is live and call the city’s electric utility from a distance. We handle the house end the same day on most calls, Saturdays and Sundays too.',
  commonIntro:
    'Wear on the older two-story houses differs from the newer streets, but in Hamilton, most mast calls begin with one of these four.',
  localFaqs: [
    {
      q: 'Who should call about a bent mast on a rental house in Hamilton?',
      a: 'That falls to the landlord. Under ORC 5321.04 an Ohio owner has to keep supplied electrical systems in good and safe working order, so the tenant tells the owner about a leaning mast and the owner calls us. We fix masts, not leases, and we inspect the pipe, bracket and meter box in one trip.',
    },
    {
      q: 'What do you usually find on the mast of an older house in Hamilton?',
      a: 'We tend to find worn flashing where the pipe goes through the roof and original entrance cable, often with water damage lower down. Rain that gets past a loose weatherhead travels inside that cable to the meter box and panel and corrodes the lugs where nobody looks. Newer houses tend to need straightening or a new mast after a limb.',
    },
  ],
  overrides: {
    ctaLine: 'Mast repair for older two-story houses and rentals in Hamilton',
    band1Heading: 'Signs You Need Service Mast Repair in Hamilton',
    commonSituations: [
      'A mast on an older two-story house leaning back toward the ridge after a storm',
      'Orange-brown stains below the mast fittings on siding nobody has touched in years',
      'Insulation flaking off the conductors in brittle chips near the weatherhead',
      'A tenant’s report of lights pulsing ever since a branch came down on the wires',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Hamilton',
        body: 'If the pipe is straight and solid, we deal with what failed, whether that’s a strap working out of the wall, a weatherhead that’s lost its seal or flashing gone brittle. If it’s kinked, rusted or flattened by a limb, the mast is replaced, and entrance cable that’s cracked or chalky goes with it every time. In historic areas such as German Village, Dayton Lane and Rossville, exterior work needs a Certificate of Appropriateness, so we check with the city before anything visible changes. Replacements are planned from the panel, meter socket and cable you have, with home rewiring raised where it helps.',
      },
      {
        title: 'Storm Damage to Service Masts in Hamilton',
        body: 'Wind and falling wood cause most of what we see. The service wires hang between the pole and your mast, and when a branch lands across them, the pole holds while the mast bends. Constant wind rocks it a little at a time. Once it leans, the boot around the roof opening splits and the clamp holding the wires loosens, which lets rain in and keeps the city utility from reconnecting. The cost on your side is a homeowner’s insurance matter, not the utility’s. Once a storm passes, step back far enough to see the roofline and check the mast is plumb, the weatherhead tight and the meter box flush.',
      },
      {
        title: 'The Utility’s Side and Yours in Hamilton',
        body: 'Power in Hamilton is supplied by the city’s own electric system, so it’s the city utility, not Duke, that cuts the service before we start and restores it afterward. Everything on the owner’s side runs from the weatherhead and pipe down the riser and its cable to the meter box, and our work on it normally takes a single day. The electric permit comes from the City of Hamilton, which also requires contractor registration, and we file it at booking.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hamilton Choose Us for Mast Repair',
    whyParagraph:
      'Our licensed electricians check the riser, cable, weatherhead and roof seal together, set the mast right to code and pull the city permit at booking. The price is settled with you before anything comes down.',
    sharedFaqs: [
      {
        q: 'How much does a service mast repair cost in Hamilton?',
        a: 'We quote it as one fixed sum after looking at the service entrance. Tightening a strap costs a fraction of what a new mast, new entrance cable and new flashing would, and the permit from the city is included. You give the go-ahead first, and qualifying homeowners can finance.',
      },
      {
        q: 'How long will my house in Hamilton be without power for a mast repair?',
        a: 'The electrical work usually takes a single day, and the city utility’s visits plus the inspection set the rest. The utility won’t switch the power back on before the inspection passes, so we book that inspection when you book us, which keeps the gap short.',
      },
      {
        q: 'Why do storms damage service masts so often?',
        a: 'The pipe on your house gives way before the pole does. A branch across the wires bends it, steady wind does the job more slowly, and either way the roof seal and wire bracket work loose. The city utility won’t restore service until that path for water is shut.',
      },
    ],
  },
};
