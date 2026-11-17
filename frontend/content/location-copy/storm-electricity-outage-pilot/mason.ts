import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'In Mason, storm calls split two ways. Either a limb dragged the service drop and took the meter box off the siding, or lightning nearby sent a spike that quietly killed the heat pump board and half the breakers. By Census figures the median house here dates from 1996, so most houses are full of electronics a spike can reach. Townhouse rows bring shared meter banks into it. Before we change anything, the damage gets photographed and you sign off on a fixed price.',
  emergencyParagraph:
    'Without power, a house in Mason has no air conditioning or furnace and nothing running the sump pump. Any line on the ground is for 911 and the utility to deal with first. By the next morning everyone with a damaged meter is on the phone, but we still reach most calls that day, Saturdays and Sundays too.',
  commonIntro:
    'Here is what storms most often break on houses from the 1990s and 2000s in Mason:',
  localFaqs: [
    {
      q: 'Can lightning damage a newer house in Mason without touching the meter?',
      a: 'It can, and it does. A spike riding in on the line can take out breakers, the panel bus, a heat pump inverter and the furnace board while the meter box outside looks spotless. We test the service and each piece of equipment it fed, then price the repairs and a surge protector on one sheet.',
    },
    {
      q: 'Who books the repair when our townhouse row in Mason has a shared meter bank?',
      a: 'Normally the association does, since the meter bank and the outside walls are common property and the work may need its approval. Send the association or manager a written note with photos. We can quote the board directly and then carry the permit, the inspection and the reconnect once it says yes.',
    },
  ],
  overrides: {
    ctaLine: 'Meter, mast and surge repairs after storms, for houses in Mason',
    band1Heading: 'Storm Damage We Repair in Mason',
    commonSituations: [
      'A meter box hanging off the siding of a 1990s house after a limb caught the drop',
      'A heat pump and half the panel dead from a nearby strike, with nothing visible outside',
      'A meter socket with melted plastic around the jaws, which has to be replaced',
      'A shared meter bank on a townhouse row wrenched loose when the service line fell',
    ],
    proseSections: [
      {
        title: 'When Your House Stays Dark After a Storm in Mason',
        body: 'The fridge has gone quiet, and across the street the neighbours’ garage lights are back. A gap like that almost always means the fault is on your own equipment. In Mason, Duke Energy Ohio’s share is the poles, the line to the house and the meter. From the weatherhead down, the riser, the box holding the meter and the panel belong to you, which surprises most people. So a box dangling from the siding stays dead after the street comes back, until it is rebuilt and passes inspection. We photograph it, do the repair, pull the permit, book the inspector and send Duke the paperwork.',
      },
      {
        title: 'Storm Safety Before the Repair in Mason',
        body: 'Anything that looks like a wire on the lawn in Mason gets treated as energised, sparking or not. Keep the family and the dog inside and let 911 and the utility’s crew deal with a limb that’s draped across it. A generator earns its place on the driveway, never the garage, feeding the fridge through its own cords. Without a transfer switch, connecting it to a wall socket or the breaker box can send power out to the pole and kill the person repairing the line. A main that trips twice stays off. Phone us about the riser or meter before branches get cleared.',
      },
      {
        title: 'Surge Damage After a Storm in Mason',
        body: 'In Mason, the costliest storm damage often hides indoors. A strike near the line pushes a spike into whatever is plugged in, which in houses this new means heat pump inverters, furnace control boards, the stove and the big TV. A surge protector for the whole house, mounted at the panel, is the cheapest way we know to guard it all, and the day the storm-damaged service is opened up is when it costs least to add.',
      },
    ],
    whyTitle: 'Why Homeowners in Mason Call Us After a Storm',
    whyParagraph:
      'Storm calls in Mason get treated as emergencies here. A licensed electrician photographs what broke for your adjuster, rebuilds the riser, socket or entrance cable, walks the inspector through it, and you agree the price before any of that starts.',
    sharedFaqs: [
      {
        q: 'Why is our house still dark in Mason when the rest of the street came back?',
        a: 'Line crews put the utility’s own wires right and stop at the meter, because that’s where their equipment ends. With the meter box torn away from the siding or the riser kinked, they won’t hook back up, so the house waits until a licensed electrician has repaired the damage and an inspector has passed it.',
      },
      {
        q: 'What paperwork does an insurance adjuster want after storm damage in Mason?',
        a: 'The adjuster will usually want pictures of the damage from before anyone fixed it, plus an invoice that names every part and task. In Mason, damage on your side of the meter goes to your own homeowner’s policy rather than the utility. We shoot those pictures on arrival, and qualifying homeowners can finance the repair.',
      },
      {
        q: 'How soon could an electrician get to us in Mason after a storm?',
        a: 'The sooner you ring, the sooner you’re on the list, because after a big storm every house in Mason with a damaged meter calls the same morning and inspection slots go fast. Even so, most of those calls get an electrician that day, Saturdays and Sundays too, and the repair itself rarely runs past a single day.',
      },
    ],
  },
};
