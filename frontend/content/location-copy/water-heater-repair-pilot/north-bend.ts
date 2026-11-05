import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northBend: LocationServiceCopy = {
  localParagraph:
    'Gas service is common in North Bend, so most dead tanks we open here are gas units with a tired thermocouple or a failing control. The village skews newer than people assume: Census figures put the median house at 1991 and 32.6% at 2000 or later, with plenty of townhouses and condos among them. Builder tanks from that boom are wearing out on roughly the same schedule. We test it and price the fault before a part comes off.',
  emergencyParagraph:
    'Tank leaking in North Bend: shut its cold inlet valve, then the gas or breaker. Gas in the air: out the door, lights untouched, call the gas company from the street. CO alarm: everybody out. Babies, elderly parents and anyone ill need hot water back soon. Most calls here are seen the same day, weekends included.',
  commonIntro:
    'North Bend puts pre-1940 houses near the river and 2000s townhouses up the hill toward Mount Nebo. The calls we get most:',
  localFaqs: [
    {
      q: 'High water reached my basement in North Bend. Can I run the water heater?',
      a: 'Not yet. Floodwater in the burner compartment or around the gas control or wiring can leave a heater unsafe even after it dries. Keep it off and don’t relight it. We check every wetted part and quote whatever has to be replaced before touching anything.',
    },
    {
      q: 'I rent a townhouse in North Bend. Can I book you directly?',
      a: 'Send your landlord a written note first. Under ORC 5321.04 an Ohio landlord keeps supplied appliances safe and working, (A)(4), and provides running water with reasonable hot water, (A)(6). We fix water heaters, not leases, so the owner schedules us and signs off on the price.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair in North Bend, gas and electric',
    band1Heading: 'Common Water Heater Problems in North Bend Homes',
    commonSituations: [
      'A builder-grade gas tank in a 2000s townhouse closet that won’t hold a pilot',
      'A riverside basement with a rusted flue and a stiff cold-line valve',
      'A relief valve that has wet the floor on more than one occasion',
      'A heater flooded on the low ground between Route 50 and the Ohio',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Run through this list first. A string of showers can empty the tank, so let it recover. In tight townhouse closets the temperature dial gets knocked by whatever is stored nearby. A gas unit needs its gas cock open; if the pilot has gone out and nothing smells of gas, the lighting steps are printed on the tank. Electric units need their breaker on. Owners in North Bend should call us for a puddle at the base, rotten-egg hot water, scorch marks under the burner door, or loud rumbling during heating. Diagnosis and a flat price come before any work.',
      },
      {
        title: 'Repair or Replace Your North Bend Water Heater?',
        body: 'The tank decides, not the deed. Its sticker shows the install date, and a 2005 townhouse in North Bend may already be on its second heater while a riverside house from the 1930s runs a recent one. Thermocouples, gas controls, relief valves, anode rods and electric elements all count as repairs. When the tank shell itself leaks, replacement is the only answer. You see both quotes together. We pull the permit where one is needed. Tankless comes up only if you ask about it, and financing is available for a replacement.',
      },
    ],
    whyTitle: 'Why North Bend Homeowners Call Us for Water Heater Repair',
    whyParagraph:
      'We know North Bend’s townhouse closets and the older basements near the river. Our technicians pass background checks and drug tests, and the flat-rate figure is yours to approve before anyone starts.',
    sharedFaqs: [
      {
        q: 'What does it cost to repair a water heater in North Bend?',
        a: 'Pricing in North Bend follows the failed part and the fuel. A thermocouple swap on a gas tank is a shorter job than a new gas control, and electric elements are their own case. Once the fault is found we give a single flat figure, and work waits on your approval.',
      },
      {
        q: 'Is my water heater in North Bend worth fixing?',
        a: 'Usually, when the shell is dry and only one component has failed. Once water seeps from the tank body, no repair will hold. Check the sticker for when it went in, then compare the two prices we hand you.',
      },
      {
        q: 'Why does the hot water give out sooner than it used to?',
        a: 'Sediment takes up room at the bottom of an older tank, and a cracked dip tube lets cold water mix in at the top. An electric tank running on one element turns out lukewarm water. If nothing hot arrives at all, check the pilot and gas cock, or the breaker.',
      },
    ],
  },
};
