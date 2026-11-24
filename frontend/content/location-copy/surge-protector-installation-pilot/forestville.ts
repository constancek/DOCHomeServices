import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestville: LocationServiceCopy = {
  localParagraph:
    'The median home in Forestville was built in 1981, and the 1980s and 1990s account for a big slice of the rest, by Census figures. Those houses carry plenty of what a jolt can ruin, from heat pumps and electric furnaces to mesh routers and touch-panel ovens. Over a third of households rent, many in large complexes. The breaker box usually has room, but we still open it to pick the spot, say if a power strip will do, and quote before starting.',
  commonIntro:
    'Houses from the 1980s and 1990s in this part of Anderson Township are full of connected equipment, and surge trouble shows up like this.',
  localFaqs: [
    {
      q: 'Our house is full of smart devices, so does whole-home surge protection help?',
      a: 'It helps a lot with the surges arriving from outside, which can knock out a hub, cameras and a thermostat in one hit. Each of those has a small circuit board that repeated jolts weaken. A panel device guards the circuits feeding them, and a strip on the router and hub catches what gets past.',
    },
    {
      q: 'I live in an apartment complex in Forestville, so who arranges surge protection?',
      a: 'Management does, since panel work needs the owner’s approval. Report flickering lights or dead electronics to the office in writing. Under ORC 5321.04, Ohio landlords must keep the electrical fixtures they supply safe and in good repair. We install the surge device, not the lease terms. Your own plug-in strip needs nobody’s permission.',
    },
  ],
  overrides: {
    ctaLine: 'Surge protection for connected houses from the 1980s and 1990s in Forestville',
    band1Heading: 'Signs a Home in Forestville Needs Surge Protection',
    commonSituations: [
      'A smart thermostat, doorbell or hub that went dark after a storm',
      'Ceiling lights that sag for a beat whenever the heat pump cycles',
      'A recently replaced furnace or condenser with nothing guarding its controls',
      'Breakers that trip without any clear cause in a house built in the 1980s',
    ],
    proseSections: [
      {
        title: 'Benefits of Whole-Home Surge Protection in Forestville',
        body: 'In Forestville, a typical house carries a long list of electronics, and every one of them has a board that small, repeated surges slowly wear down. A unit at the breaker box catches that excess where power first splits into circuits and sends it to ground. The heating and cooling system gets shielded from overvoltage, and smart home hubs and cameras keep working instead of failing one by one. Appliances tend to last longer, and the risk of a spike causing a fire goes down. Lightning season becomes a lot less nerve-racking.',
      },
      {
        title: 'Whole-Home or Plug-In Surge Protection in Forestville',
        body: 'Tenants in the big complexes can usually skip the electrician and buy a decent surge-rated power strip for the TV and the desk. That’s our honest advice, and a lease rarely allows panel work anyway. Owners with a heat pump or furnace, touch-control appliances and a houseful of connected gadgets are the ones a panel unit really serves, and the power strips stay plugged in behind the router as a backstop. Blinking lights or a breaker that keeps dropping may be a loose connection or a tired panel, so we test before selling a surge device. A strip that once caught a heavy jolt might be protecting nothing.',
      },
      {
        title: 'Panel Check and Permits for a Surge Protector in Forestville',
        body: 'Before any surge work in Forestville, we confirm the breaker box has a free space and a mounting spot close to the service entrance. A box that’s crammed or worn out may need Electrical Panel Replacement first, which happens only if you agree. The device is wired to code and to the manufacturer’s instructions. Forestville sits in unincorporated Anderson Township, so Inspection Bureau, Inc. (IBI) covers the permit and inspection, and we take care of both.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Forestville Choose Us for Surge Protection',
    whyParagraph:
      'You get a licensed electrician who looks in the breaker box first and tells you what a panel unit stops and what still needs a power strip. It goes in to code, at a flat price you okayed beforehand.',
    sharedFaqs: [
      {
        q: 'What goes into the price of a panel surge device in Forestville?',
        a: 'Your breaker box, mostly. We see how it’s arranged and where the unit can be mounted, then name one flat figure. A box with no open slots means extra work, and we say so before you agree. Nothing starts without your yes, and qualifying owners can finance the job.',
      },
      {
        q: 'If we add a panel surge device, are the router and computers still at risk?',
        a: 'Less, though not zero. A panel unit works best on surges that come in over the service, such as utility switching or nearby lightning. It does less about a spike that starts indoors when a motor kicks on in the same circuit, and nothing about one riding cable TV or network wiring. Strips on the router and computers cover those.',
      },
      {
        q: 'Could a handy owner wire in a surge protector at the breaker box?',
        a: 'We’d steer you away from it. The unit lands inside the panel beside the main lugs, which carry power even with every breaker off. A licensed electrician mounts it to code and the maker’s instructions, then confirms it’s grounded and tight and that it works. A loose connection leaves you guarded by nothing.',
      },
    ],
  },
};
