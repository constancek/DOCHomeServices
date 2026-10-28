import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const woodlawn: LocationServiceCopy = {
  localParagraph:
    'Woodlawn heats more with electricity than with gas, 56.4% against 41.7% by Census figures, and much of that electric heat is likely in the village’s apartment buildings. So many of our calls here are electric furnaces with a failed element or a blower that won’t start. The housing is newer than people expect, with a median home built in 1987, so the gas furnaces are mostly modern units where pressure switches and control boards give out. We track down the fault and quote it before we touch anything.',
  emergencyParagraph:
    'January nights in Woodlawn average a low around 23F, by NOAA normals for CVG. A dead furnace at that temperature is hardest on babies, older relatives and anyone who is sick, and a long outage can freeze pipes in any building. We repair gas and electric furnaces the same day on most calls, weekends included.',
  commonIntro:
    'Two-thirds of Woodlawn households rent, so many heating calls start with a tenant and end with a manager’s approval. These are the problems we see most:',
  localFaqs: [
    {
      q: 'My Woodlawn apartment has no heat. Who do I call?',
      a: 'Your landlord or management office, first and in writing. Ohio’s ORC 5321.04 puts the duty to keep supplied heating equipment in good and safe working order on the landlord, and most complexes have a maintenance contract. We come out once the owner or manager books us. We fix furnaces, not leases.',
    },
    {
      q: 'Do I need a permit to replace a furnace in Woodlawn?',
      a: 'A replacement usually needs one, and we take care of it before installation day. Woodlawn’s village permit page points homeowners to Hamilton County for building permits rather than a village office. A repair to your existing furnace normally doesn’t need a permit at all, so most of our visits here skip that step.',
    },
  ],
  overrides: {
    ctaLine: 'Woodlawn furnace repair for owners, tenants and managers',
    band1Heading: 'Common Furnace Problems in Woodlawn Homes and Apartments',
    commonSituations: [
      'An apartment electric furnace that runs but only blows lukewarm air',
      'A 2000s gas furnace locked out by a failed pressure switch',
      'A breaker that keeps tripping on an electric furnace',
      'A new thermostat that left the furnace running the fan with no heat',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Start with the simple things. Set the thermostat to heat and put in fresh batteries, check the furnace switch and the breaker, swap a dirty filter, and press the furnace door closed, because a loose panel keeps many furnaces off. If that fixes it, you don’t need us. Tenants should report anything past that to management rather than opening the furnace. Call when the breaker trips again, the air stays cool, or the furnace starts and shuts off within minutes. If you smell gas, don’t flip switches; get out and call the gas company from outside. We inspect, explain the fault, get the price approved and test the heat after.',
      },
      {
        title: 'Repair or Replace Your Woodlawn Furnace?',
        body: 'Judge the furnace itself, not the building. 31.9% of Woodlawn homes went up in 2000 or later, but a newer building can still have a furnace that has worked hard. Most failures, an element or a pressure switch or an igniter, are repairs. A cracked heat exchanger on a gas furnace is a safety problem first, since it can let carbon monoxide into the home. If a CO alarm sounds, get everyone out, then call. On electric heat, a jump in the Duke Energy bill without colder weather often means elements, or a heat pump’s backup heat, are running more than they should.',
      },
    ],
    whyTitle: 'Why Woodlawn Residents and Landlords Call Us',
    whyParagraph:
      'Woodlawn is mostly renters and mostly electric heat, and we work with both. Managers get a flat price to approve before work starts, tenants get a licensed, background-checked technician, and most calls are handled the same day.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Woodlawn?',
        a: 'We find the fault first, then give a flat price for that repair. A heating element or an igniter costs less than a control board or a blower motor. For rentals, the owner or manager approves the price before we start. Nights and weekends cost the same as weekdays, with no overtime fees.',
      },
      {
        q: 'Is it worth repairing an older Woodlawn furnace?',
        a: 'Usually, if the problem is a part and not the heat exchanger. Most furnace failures we see here are switches, elements, igniters or motors, and those are repairs. If the heat exchanger is cracked, replacing the furnace is the safe answer. We price both options so you, or your landlord, can compare them.',
      },
      {
        q: 'Why is my Woodlawn furnace blowing cold air?',
        a: 'First make sure the thermostat is on heat and the filter is clean. On an electric furnace, cool air usually means a burned-out element or a sequencer that isn’t switching the elements on. On a gas furnace, the burners may not be lighting, often because of a dirty flame sensor. Both need a technician.',
      },
    ],
  },
};
