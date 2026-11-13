import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAdams: LocationServiceCopy = {
  localParagraph:
    'Charging an EV at home on this hill is usually possible, but each building sets its own terms. Half the housing in Mount Adams was built before 1940, Census figures show, and an original service from then may have little spare capacity for 240 volts. Two-unit buildings alone number 214, and 672 of 1,016 occupied homes are rented, so owners have the final say. We look inside the panel and total the load before quoting, admit when the Level 1 cord is plenty, and fix the figure before any wiring.',
  emergencyParagraph:
    'A few charging faults can’t wait. A hot, browned or soft plug counts, and so do a burnt-plastic smell mid-charge and a breaker that quits every time the car connects. Switch that breaker off only with dry hands. If smoke or flame shows, leave and ring 911. Most calls bring us the same day, Saturdays and Sundays too.',
  commonIntro:
    'Hillside doubles, prewar houses and small walk-up buildings make up most of the neighborhood, so the calls tend to look like this.',
  localFaqs: [
    {
      q: 'Can a tenant in Mount Adams get a charger put in?',
      a: 'Only after your landlord agrees in writing. From there, the owner or property manager books the visit. Condo owners clear it with their association before anything else. The lease stays your business and the owner’s. Until then, light driving may get by on the Level 1 cord in an outlet the landlord has okayed.',
    },
    {
      q: 'Will a prewar panel handle a Level 2 charger in Mount Adams?',
      a: 'The age hints, but it doesn’t decide. We total up heat, cooling, the range, the dryer and the charger on paper before saying yes or no. When it fits, the charger gets a circuit to itself. When it doesn’t, you see a load-management device and a bigger service quoted together.',
    },
  ],
  overrides: {
    ctaLine: 'EV charging at home for hillside doubles and prewar houses in Mount Adams',
    band1Heading: 'When an Apartment or Home in Mount Adams Needs an EV Charger',
    commonSituations: [
      'An EV arriving soon and a 1930s panel that hasn’t been opened in decades',
      'A trickle cord that can’t catch up after a long day across town',
      'An owner of a two-unit building whose tenants are asking for charging',
      'A main breaker that already complains when the dryer and air conditioning overlap',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Mount Adams',
        body: 'With Level 2, the battery fills far quicker than through a wall outlet, so a session buys more range and the car spends less time tied up. Hook up after dinner and it’s topped off by breakfast, so nobody drives down the hill hunting a public plug or queuing behind strangers. Buying power at home usually beats public charging prices, and lots of utilities discount off-peak use, so ask yours. Getting an electrician to size breaker, conductor and ground keeps the circuit cool under long draws. With two in three homes rented in Mount Adams, a charger can help a unit stand out to a tenant or buyer.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Mount Adams',
        body: 'A resident of Mount Adams who makes short hops and parks near a sound outlet can often manage on the Level 1 cord from the trunk, and we’ll say so. It draws household power at 120 volts and gives back only a handful of miles for each hour. Commutes, heavier weekly mileage or two EVs under one roof make the case for Level 2 on a separate 240-volt line. The outlet matters as much as the mileage, so check that it’s alone on its breaker, never fed through an extension cord, and not loose, old or warm. Cars that live at the curb rarely suit a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Mount Adams',
        body: 'Whether the panel can carry it comes down to the load math, not the date carved on a cornerstone. Spare capacity means a breaker and circuit just for the charger. Tight capacity brings two prices for you to weigh, one for a load-management device and one for a panel or service upgrade. For city addresses, IBI (Inspection Bureau, Inc.) reviews electrical permits and inspects the work, and we deal with both.',
      },
    ],
    whyTitle: 'Why Residents in Mount Adams Choose Us for EV Charger Installation',
    whyParagraph:
      'Before anyone suggests a charger, a licensed electrician of ours studies the panel and works out the load. Upgrade or load management, you get the honest answer, code-compliant wiring and a price agreed ahead of any work.',
    sharedFaqs: [
      {
        q: 'What goes into the price of a charger in Mount Adams?',
        a: 'Three things, and you see them in one flat quote after the panel check. Those are the charger itself, the length of the run from panel to parking spot, which on a steep lot can be long, and whatever the panel needs. Nothing starts until you’ve approved it, and financing is offered.',
      },
      {
        q: 'How much of a day does a charger install take in Mount Adams?',
        a: 'Expect several hours for a typical job. If the service or panel has to be upgraded, add more, and a tricky route up or down a hillside lot can add some too. You’ll get the schedule along with the price, before a single tool comes out of the van.',
      },
      {
        q: 'Why shouldn’t I wire my own charger in Mount Adams?',
        a: 'Sizing the circuit, proving the panel has capacity with a load calculation, and getting the permit plus a passed inspection all sit on the job list. Each one belongs with a licensed electrician. An undersized wire or wrong breaker can overheat quietly behind plaster long before anyone notices a thing.',
      },
    ],
  },
};
