import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Most Millvale homes are rented, so the first question on a broken AC is who owns it. About a third of residents live in Cincinnati Metropolitan Housing Authority townhomes, and those repairs go through the authority, not us. Census figures show most homes here heat with electricity, so the usual equipment is a heat pump or electric air handler in a townhome or small apartment building. For private landlords and owners, we diagnose and price before starting.',
  emergencyParagraph:
    'Cincinnati averages about 21 days a year at 90 degrees or hotter, according to the National Weather Service. When a Millvale heat pump quits, infants and older residents in upstairs townhome bedrooms feel it soonest. For landlords, we fix heat pumps, central air and air handlers the same day on most calls, weekends too.',
  commonIntro:
    'Millvale is mostly rented townhomes and small apartment buildings cooled and heated by electricity, which puts these AC faults near the top:',
  localFaqs: [
    {
      q: 'I live in CMHA housing in Millvale. Can I hire an outside company to fix my AC?',
      a: 'No. The housing authority owns and maintains its Millvale townhomes, so report the outage to CMHA the way your lease sets out and note the date. Before reporting, glance at the thermostat setting and the breaker panel. If both look right, leave the equipment closed and let the authority arrange the repair.',
    },
    {
      q: 'I rent from a private landlord in Millvale. Who fixes the AC?',
      a: 'Usually the landlord, if the air conditioning came with the unit. Under ORC 5321.04, Ohio landlords must keep the appliances they supply in good and safe working order. Send written notice and save a copy. When an owner books us, the tenant hears what failed and the owner gets the price. We repair AC; we’re not lawyers.',
    },
  ],
  overrides: {
    ctaLine: 'Millvale AC repair for landlords and property managers',
    band1Heading: 'Common AC Problems in Millvale Homes',
    commonSituations: [
      'A townhome heat pump worn down by heating through winter and cooling through summer',
      'An electric air handler’s condensate line overflowing into a hall closet',
      'One apartment in a small building warm while its neighbors stay cool',
      'Upstairs bedrooms of a two-story townhome running several degrees hotter than downstairs',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Some Millvale complaints clear up without a visit. Confirm the thermostat says cool with a target under room temperature, glance at the breaker panel, and swap the filter when your lease allows it. If the system blows cold again, nobody needs to come. If it doesn’t, tenants should stop there and tell the landlord or housing authority rather than open panels. Owners and managers should bring us in once the outdoor fan refuses to turn or a puddle forms beneath the air handler. Our technician tracks down the cause, tells the resident what failed and sends the owner a flat figure to approve first.',
      },
      {
        title: 'Repair or Replace a Millvale Rental’s AC?',
        body: 'For an owner, the condenser’s label date comes first. Younger than roughly 12 years with one dead component, fix it. An older unit whose compressor has seized or whose coil leaks usually costs more to keep alive than to swap. Millvale tilts that math because electric heat is so common: a heat pump here works most months of the year, so a tired one inflates Duke Energy Ohio charges through winter and summer alike, whether tenant or owner pays. Swapping the equipment takes a mechanical permit from the City of Cincinnati’s Buildings & Inspections department.',
      },
    ],
    whyTitle: 'Why Millvale Landlords and Property Managers Call Us',
    whyParagraph:
      'Most Millvale homes near Beekman Street are rented. Residents hear plainly what broke, owners approve a flat-rate figure first, and every licensed technician we send has cleared a background check. Overtime never appears on the bill.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost for a Millvale rental?',
        a: 'We quote once the problem is found, because a plugged drain line and a burned-out compressor sit far apart. The owner or manager approves one flat figure before any work, and Saturday or Sunday visits cost no more. Landlords with more than one Millvale unit get a separate figure for each address.',
      },
      {
        q: 'Should a Millvale landlord fix or retire an aging heat pump?',
        a: 'A heat pump under roughly 12 years old with a single worn part earns a repair. Once the compressor gives out, or the unit wants service every season, replacement is the better spend. That same heat pump also warms the townhome, so a winter breakdown leaves a tenant cold. Weigh that before patching an old one again.',
      },
      {
        q: 'Why is the AC in my Millvale townhome blowing warm air?',
        a: 'A heat pump switched to heat mode will warm a townhome in July, so read the thermostat setting before anything else. Next comes the breaker, then the filter. Beyond those, the usual culprits are a dead capacitor or refrigerant escaping through a leak. Renters should go no further and tell the landlord or CMHA.',
      },
    ],
  },
};
