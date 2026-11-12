import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfield: LocationServiceCopy = {
  localParagraph:
    'Fairfield’s biggest building boom came in the 1960s and 70s, and Census figures put its median house at 1978. Builders back then planned a kitchen around a toaster and a phone jack. A garage freezer, a home office and a charger in every room came later, so we spend our time adding plugs, GFCIs and the odd dedicated circuit. We meter the device, the circuit and the breakers before quoting, say so when a reset solves it, and fix the price first.',
  emergencyParagraph:
    'In Fairfield, a browned, sparking, smoking or too-warm outlet can’t sit overnight, and neither can a jolt from a switch plate, a plug melted in place or a breaker that won’t stay up. Shut off that circuit only if the floor is dry. With fire or smoke, get clear and dial 911. We usually arrive the same day, weekends included.',
  commonIntro: 'In Fairfield, most of our visits begin with one of these four:',
  localFaqs: [
    {
      q: 'Who do I call when an apartment outlet goes dead in Fairfield?',
      a: 'Start with the GFCI buttons and your breaker panel; tenants can reset both. Still no power, or a plate that feels warm or sparks, means telling your landlord. Ohio’s ORC 5321.04 (A)(4) puts the duty to keep supplied electrical fixtures in good and safe working order on the owner, who books us. We fix outlets, not leases.',
    },
    {
      q: 'Can a home office in Fairfield get its own circuit?',
      a: 'It can, after we look at the breaker panel. Two screens and a space heater sharing a bedroom circuit from 1978 is a common reason breakers trip. A dedicated run with receptacles at desk height fixes it, and if the panel has no spare space, you’ll know before any quote.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet, switch and GFCI work for houses and apartments in Fairfield',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Fairfield',
    commonSituations: [
      'A spare bedroom turned home office where one wall plug feeds two monitors and a heater',
      'A garage receptacle that cuts out when the chest freezer and a shop vac run together',
      'A 1970s hall bath with a plain receptacle right beside the tub',
      'A rocker switch that clicks without turning anything on',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Fairfield',
        body: 'Picture a GFCI weighing current like a scale, with what goes out on one side and what comes home on the other. The instant the two tip apart, current is leaking somewhere, maybe through a hand on the faucet, and the device drops the power. Moisture never trips it directly, though wet rooms cause most of those imbalances. Code wants that protection by kitchen sinks and in bathrooms, garages, basements and outside. In Fairfield, garages and patios built in the 70s are where we keep finding plain receptacles. A USB-equipped receptacle beside a recliner or a bunk bed ends the hunt for charger blocks.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Fairfield',
        body: 'Run through three checks in Fairfield before booking anyone. Find every GFCI, including the one in the garage and the one by the patio door, and push reset, since a single trip can kill receptacles in other rooms. Open the breaker panel and look for a handle pointing the wrong way. Flip each wall switch near the dead plug, because some switches feed a receptacle rather than a fixture. If power returns, keep your money. Upgrading to USB ports or a smart switch adds handiness but repairs nothing. A plug point that’s warm, humming, blackened or spitting sparks, or a breaker that kicks off again once reset, needs an electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Fairfield',
        body: '1970s breaker panels were sized for their decade, and an office circuit or more kitchen plugs can max one out. So the panel and the runs get tested before anything new is wired. If they come up short, Electrical Panel Replacement or Home Rewiring is priced next to the outlet work, and you pick. The city’s Building & Zoning Division handles electrical permits in Fairfield, and we file where a permit is required, all to code.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Fairfield Choose Us for Switches and Outlets',
    whyParagraph:
      'A licensed electrician with a tester works from the receptacle back to the breakers. If a reset or one new device does it, we tell you. Bigger fixes get a flat price first, then proper grounding to code.',
    sharedFaqs: [
      {
        q: 'How do you put a price on outlet work in Fairfield?',
        a: 'We test, then hand you one flat number, and the work waits for your okay. How many receptacles and switches are involved, whether you want GFCI or USB models, and whether the circuit or panel needs attention all move it. Financing can spread a bigger job out.',
      },
      {
        q: 'Why does a GFCI trip when someone touches a faulty appliance?',
        a: 'Because it’s counting. Current sent out should come straight back, and when part of it takes a detour, possibly through the person holding the appliance, the GFCI notices the gap and kills the power fast. Water only matters because it makes those detours more likely.',
      },
      {
        q: 'Is replacing a light switch safe to do myself?',
        a: 'It looks easy, but the switch has to land on the correct circuit, connect to the right conductors, be grounded and meet code. Get one of those wrong and the light may work while the box stays dangerous. A licensed electrician checks each piece before the cover goes back on.',
      },
    ],
  },
};
