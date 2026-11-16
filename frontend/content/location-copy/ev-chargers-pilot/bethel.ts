import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'Bethel rents more than it owns, by a small margin, and over a third of its units are in buildings with three or more apartments, per Census figures. That puts many charger decisions with landlords. Roughly half the houses predate 1960, and their panels tend to be crammed by now. Our first visit is a look inside that panel plus the math on what the house draws. If the Level 1 cord in your trunk is plenty, you’ll hear it, and the price comes before the drill does.',
  emergencyParagraph:
    'Pull the plug if an outlet feels hot, the charger face looks browned, or the breaker drops each time charging begins. Shut that breaker off yourself only from dry footing, with your hands nowhere near anything hot. If you see flames or smoke, get outside and call 911. Most calls get a same-day visit, Saturdays and Sundays too.',
  commonIntro:
    'In a village split nearly evenly between owners and tenants, the charger calls we take tend to look like this.',
  localFaqs: [
    {
      q: 'As a tenant, can I ask for a Level 2 charger in Bethel?',
      a: 'A tenant can ask, but the building’s owner has to agree in writing first, and the owner or the property manager is the one who schedules us. Get that before buying any hardware. Lease questions stay between you and the landlord, and our part is the wiring, priced to whoever signs.',
    },
    {
      q: 'In Bethel, is a 1950s panel likely to be full already?',
      a: 'Quite often, yes. Those panels were laid out when a house ran far fewer appliances, so spare slots are rare. A full panel can still have spare capacity, though, which is what our math checks. Short on both, you’d see a load-control option priced beside a bigger panel.',
    },
  ],
  overrides: {
    ctaLine: 'Charging at home for village houses and small rentals in Bethel',
    band1Heading: 'When an Apartment or Home in Bethel Needs an EV Charger',
    commonSituations: [
      'Tenants in a three- or four-unit building buying EVs and asking the owner for a charger',
      'A 1950s breaker box with every slot spoken for',
      'A Level 1 cord that leaves the battery short by Friday',
      'Weekly drives out of the village to find a public charger',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Bethel',
        body: 'Speed is the obvious gain in Bethel. Level 2 refills a battery far quicker than a household outlet, which means more range banked per night and fewer hours with the car tethered. Paying at a public station usually costs more than plugging in at the house, and a lot of utilities discount overnight power, so call yours and ask. Nobody waits in line at home. Getting the breaker, conductor size and ground right keeps the wiring cool under a long charge. Landlords also gain an amenity that renters and future buyers increasingly ask for.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Bethel',
        body: 'Here’s where we talk some people out of a job. A driver in Bethel who makes short local runs and parks within reach of a sound outlet may never outgrow the 120-volt cord that shipped with the car. It’s slow, and that’s fine for light use. Long commutes, or a second EV in the household, are when a dedicated 240-volt line starts to make sense. Do two quick checks first. See if anything else shares that outlet’s circuit, and keep the cord off extension cords and away from any receptacle that’s worn, wobbly or warm. With street-only parking, a wall unit at home rarely works out.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Bethel',
        body: 'How old the house is matters less than what the numbers show. A panel with headroom gets a fresh circuit just for the charger. A panel without it gets two quotes, one for a control that throttles charging when the house is busy and one for a bigger panel or service, and the choice stays yours. Permit paperwork and the final inspection are on us.',
      },
    ],
    whyTitle: 'Why Residents in Bethel Choose Us for EV Charger Installation',
    whyParagraph:
      'Before anyone mentions hardware, a licensed electrician opens your panel and works through the load. You get a straight call on upgrade, load control or neither, wiring that passes code, and a number agreed first.',
    sharedFaqs: [
      {
        q: 'What will a home charger cost me in Bethel?',
        a: 'Three things drive it, the charger model, the wire’s length from panel to parking spot, and any panel work, and we roll them into one flat figure after opening the panel. Financing is on offer. Nothing gets installed until you’ve said yes to that figure.',
      },
      {
        q: 'How many hours should I plan for a charger install in Bethel?',
        a: 'A normal job runs several hours. Panel work stretches it, and we spell out the schedule before starting. When the building is a rental, the owner picks the date and warns the tenants ahead of the power cut, so nobody is caught off guard.',
      },
      {
        q: 'Is wiring a Level 2 charger a weekend project for a handy owner in Bethel?',
        a: 'It isn’t. Sizing the breaker and conductors, working out whether the panel can spare the load, and getting a permit and inspection all belong to a licensed electrician. A charger pulls hard for hours at a stretch, and a small mistake shows up as heat.',
      },
    ],
  },
};
