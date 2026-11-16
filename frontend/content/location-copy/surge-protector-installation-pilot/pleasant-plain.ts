import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantPlain: LocationServiceCopy = {
  localParagraph:
    'Pleasant Plain is a small village where Census figures show about three in four homes were built in 1939 or earlier, nearly all of them single houses. Panels in houses that old are often small or full, so room for the device is never a given. Almost no homes have piped gas, so heat comes from electric systems or oil furnaces with control boards that surges wear on. Expect a panel check before anything else, a straight answer if strips will do, and a price set before work starts.',
  emergencyParagraph:
    'A scorch mark on an outlet or panel, a burning smell after a storm, or an oil furnace that smoked when the power came back needs us that day, and most calls get it, weekends included. Shut that circuit off only if you can stay dry doing it. Smoke or fire means leaving the house and calling 911.',
  commonIntro:
    'With nearly every home here built before 1960, these are the signs we look for in Pleasant Plain.',
  localFaqs: [
    {
      q: 'Our old house in Pleasant Plain heats with oil. Does surge protection still help?',
      a: 'Yes. An oil furnace has a control board and a burner motor, and the blower and any central air add more electronics. Those parts take the small, repeated surges that come in on the service. A panel device protects them all at the source, and we price it after looking at your panel.',
    },
    {
      q: 'A storm took out our TV and microwave in Pleasant Plain. Could it happen again?',
      a: 'It could, since surges arriving on the power line can hit several things at once, and that is exactly the event a panel device is built for. It won’t stop a surge on a cable or satellite line, so keep a strip with coax protection on the TV. We’ll check the panel and quote it.',
    },
  ],
  overrides: {
    ctaLine: 'Whole-home surge protection for older village houses in Pleasant Plain',
    band1Heading: 'Signs a Home in Pleasant Plain Needs Surge Protection',
    commonSituations: [
      'Lamps in a house older than 1940 that sag whenever the heat pump or oil burner starts',
      'An oil furnace’s control board that gave out after a summer storm',
      'An old, full panel where a breaker keeps tripping for no reason anyone can find',
      'A recent heat pump or air conditioner left unprotected at the panel',
    ],
    proseSections: [
      {
        title: 'Benefits of Whole-Home Surge Protection in Pleasant Plain',
        body: 'In houses this old, nearly everything electrical that matters arrived long after the walls went up. Heat pumps, electric or oil furnaces, central air and newer kitchen appliances all lean on circuit boards, and the frequent little surges from the grid and from motors cycling wear those boards out. Fitted at the panel, where power fans out to each circuit, the protector sends the excess to ground before it goes further. Heating and cooling equipment is shielded, appliances are protected, the chance of fire from a power spike falls, and summer storms become less of a worry in Pleasant Plain.',
      },
      {
        title: 'Whole-Home or Plug-In Surge Protection in Pleasant Plain',
        body: 'Plenty of houses in Pleasant Plain can go without a panel device. When the only electronics worth worrying about are a television and a computer, good strips will handle them, and we’ll recommend that. The whole-home unit belongs in a house carrying central air or a heat pump, an oil or electric furnace, board-run appliances and a fair amount of connected gear, with strips kept on the sensitive pieces. Constant flicker or breaker trips can also come from a wiring or panel fault, which we check ahead of any surge device. An old strip that caught a big surge may be worn out.',
      },
      {
        title: 'Panel Check and Permits for a Surge Protector in Pleasant Plain',
        body: 'Panels in pre-war houses often have little room, so before quoting we look for a free space where the protector can work properly. A packed or failing panel is replaced first through Electrical Panel Replacement, only if you say yes. Wiring follows code and the manufacturer’s guidelines, and we test the device on site. Wherever the job calls for a permit, we pull it and set up the inspection ourselves.',
      },
    ],
    whyTitle: 'Why Homeowners in Pleasant Plain Choose Us for Surge Protection',
    whyParagraph:
      'We send licensed electricians out to the village who start with your panel, tell you honestly where a whole-home device helps and where it doesn’t, and install it to code at a price set in advance.',
    sharedFaqs: [
      {
        q: 'How much will a whole-home surge protector cost in Pleasant Plain?',
        a: 'You get a flat rate after we check the panel. Older panels vary, so the configuration and where the device can fit set the price, together with what the code requires. We fix the number before starting, and qualifying homeowners can finance it.',
      },
      {
        q: 'Will a panel device protect all my electronics in an old house?',
        a: 'It won’t protect all of them. It’s strongest against surges riding in on the power line from outside. It is weaker against a spike made when a motor starts up on a shared circuit, and it ignores surges on phone, cable or ethernet lines. Plug-in strips are the second layer.',
      },
      {
        q: 'Why shouldn’t I install a whole-home surge protector myself?',
        a: 'Because it’s wired into the panel, beside incoming conductors that turning off the main won’t make safe, and a poor connection can leave it doing nothing. A licensed electrician installs it to code and the manufacturer’s guidelines and confirms it’s working.',
      },
    ],
  },
};
