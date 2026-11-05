import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'In CUF a water heater call is usually a rental call. Census figures show 84.5% of occupied homes here are rented, from pre-1940 houses in Fairview and western Clifton Heights to 1970s apartment blocks. In the old houses the tank sits in a basement corner on old venting, often serving both halves of a double or a three- or four-unit building; in the apartment buildings it’s a closet heater per unit. We figure out what failed and quote the owner a price before work starts.',
  emergencyParagraph:
    'Leak at a CUF tank: turn the handle on the cold pipe feeding it, then close the gas or flip its breaker. Any gas odor in the building means get out, leave switches alone and call the utility from the street. If a CO detector goes off, roommates go outside first. We usually come the same day, weekends included.',
  commonIntro:
    'CUF water heaters run from basement gas tanks in old doubles and multi-unit houses to electric units in apartment closets. These are the problems we see most:',
  localFaqs: [
    {
      q: 'My CUF rental has no hot water. Can I call you directly?',
      a: 'Send your landlord a written request first. Ohio’s landlord law, ORC 5321.04, puts this on the owner: (A)(6) covers a reasonable supply of hot water and (A)(4) covers keeping provided appliances safe and working. We fix water heaters, not leases, so the property manager books us.',
    },
    {
      q: 'Does a water heater replacement in CUF need a permit?',
      a: 'Yes. CUF is inside the City of Cincinnati, and the Department of Buildings & Inspections requires a permit for new and replacement plumbing, which includes a water heater swap. A repair to the existing heater, like a new gas valve, doesn’t. We pull the permit on every replacement.',
    },
  ],
  overrides: {
    ctaLine: 'CUF water heater repair for landlords and tenants',
    band1Heading: 'Common Water Heater Problems in CUF Homes and Apartments',
    commonSituations: [
      'One basement tank feeding a three-unit house',
      'A pre-1940 Fairview basement where the old flue pipe has rusted at the joints',
      'An apartment closet heater giving lukewarm water after a failed element',
      'A relief valve discharging onto the floor of a shared laundry room',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'When four roommates shower back to back each morning, the last one gets cold water and the tank is fine; it just needs to catch up. A dial somebody turned while doing laundry, a tripped breaker on an electric unit and a closed gas handle are the other free fixes. If the pilot is dark and nothing smells of gas, the label explains relighting. Puddles under the heater, hot water that smells like eggs, a grinding rumble as it heats or a pilot that won’t catch mean a real repair. Tenants tell the landlord; owners book us, and the price comes first.',
      },
      {
        title: 'Repair or Replace Your CUF Water Heater?',
        body: 'The house might date from 1925, but check the heater’s label for its own install date. A thermocouple, gas valve, heating element, thermostat, relief valve, anode rod or dip tube can be swapped on the visit. A tank seeping from its shell is finished and gets replaced. We quote both options to the owner, who decides. With one tank serving several units, sizing matters at replacement time, and we’ll say so plainly. Replacements need a City of Cincinnati permit, which we handle. Tankless gets a mention only if the owner wants one.',
      },
    ],
    whyTitle: 'Why CUF Landlords Call Us',
    whyParagraph:
      'Most CUF homes are rentals, and owners need a water heater fixed without a week of tenant complaints. We send licensed, background-checked technicians, usually the same day, with the flat rate approved first.',
    sharedFaqs: [
      {
        q: 'What does water heater repair cost in CUF?',
        a: 'It depends on the fault and the fuel. Replacing an element in an apartment’s electric heater is a smaller job than a gas valve on a basement tank serving three units. We diagnose, then give the owner a flat rate to approve. Weekend calls carry no overtime fees.',
      },
      {
        q: 'Is an old water heater in a CUF rental worth repairing?',
        a: 'If one part failed and the tank holds water, repair is usually the call. If the shell leaks or it breaks every few months, replace it. Go by the label date, not the house. We put both prices in front of the owner so the decision is theirs.',
      },
      {
        q: 'Why does the hot water run out so fast in my CUF house?',
        a: 'Often the tank is shared by more people than it was sized for. Sediment build-up and a broken dip tube shrink the usable supply further, and a dead element halves an electric heater. If there’s no hot water at all, check the pilot or breaker, then tell the landlord.',
      },
    ],
  },
};
