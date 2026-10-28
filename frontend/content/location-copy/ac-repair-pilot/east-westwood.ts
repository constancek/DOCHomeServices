import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastWestwood: LocationServiceCopy = {
  localParagraph:
    'Most East Westwood homes are rented and run on electric heat, which decides what we find on arrival. Census figures count about three in four homes as rentals and roughly six in ten heated with electricity, so a heat pump or closet air handler turns up more often than a furnace coil. Tenants should report a breakdown to the landlord or manager, who usually approves the repair. New equipment requires a city mechanical permit through Buildings & Inspections. Diagnosis comes first, then a price the owner approves.',
  emergencyParagraph:
    'A dead heat pump in an upper East Westwood apartment leaves the tenant waiting while the rooms warm. Cincinnati averages about 21 days of 90 degree heat yearly, per the National Weather Service, and older residents face the most risk. We handle heat pumps, air handlers and furnace coils, reaching most urgent calls the same day, Saturdays and Sundays included.',
  commonIntro:
    'Most East Westwood homes are rented and run on electric heat, so the cooling trouble here leans toward heat pumps and apartments:',
  localFaqs: [
    {
      q: 'I rent in East Westwood. Can I book the AC repair myself?',
      a: 'Usually the landlord or property manager books it. Ohio law (ORC 5321.04) requires landlords to keep the appliances they supply, air conditioning included, in good and safe working order. Report the breakdown to them in writing, with the date. We fix air conditioners, not leases, so we work for whoever approves the repair.',
    },
    {
      q: 'Are the 1950s houses in East Westwood hard to cool?',
      a: 'They can be. Many East Westwood houses went up in the 1950s, and that ductwork was planned around a furnace, not air conditioning. Small returns and long runs leave the far rooms warm and can ice the coil. We measure airflow before anyone suggests a bigger condenser, since added capacity through the same ducts rarely helps.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump and AC repair across East Westwood',
    band1Heading: 'Common AC Problems in East Westwood Homes',
    commonSituations: [
      'A heat pump that heats and cools an apartment year round wearing out its outdoor fan motor',
      'A closet air handler’s drain pan overflowing into the apartment downstairs',
      'A 1950s house whose ducts were never sized for central air',
      'A heat pump’s reversing valve jammed in heat mode on a 90 degree afternoon',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Tenants can rule out the easy causes before reporting a warm apartment. Make sure the wall control is set to cooling rather than heat or emergency heat, and look for a flipped breaker on the outdoor unit’s circuit. Where the lease permits, put in a clean filter. If the air turns cold again, there’s nothing for us to do. Let the landlord or property manager know when the air handler closet is wet or the outdoor fan won’t turn. Ice forming on the refrigerant lines counts too. We run the heat pump in both modes, tell the tenant what failed and give the owner a flat price before any work.',
      },
      {
        title: 'Repair or Replace Your East Westwood AC?',
        body: 'For a landlord, the unit’s age and its double duty decide this. Fix a heat pump younger than roughly 12 years when one component fails. A worn-out compressor in an aging unit is a poor bet, because that machine also carries the heating once cold weather comes. R-22 equipment points the same way, since that refrigerant is no longer produced in the US. Size the replacement to the apartment and its ducts. Electric heat makes efficiency count twice here, since a heat pump short of charge runs longer in both seasons and Duke Energy Ohio bills for all of it.',
      },
    ],
    whyTitle: 'Why East Westwood Tenants and Landlords Call Us',
    whyParagraph:
      'With most East Westwood homes rented, the tenant hears what broke and the owner sees the figure first. Every technician is licensed and screened by background check and drug test, and no flat rate includes overtime.',
    sharedFaqs: [
      {
        q: 'How is an East Westwood AC repair priced?',
        a: 'By the fault, which we find before naming a number. Clearing a clogged drain that shut down an apartment air handler takes a short visit, while tracing a leak in a heat pump coil takes much longer. The owner approves one flat rate before work begins, and weekend calls add no overtime.',
      },
      {
        q: 'Is an aging East Westwood heat pump worth repairing?',
        a: 'Under about a dozen years with one bad part, yes. Past that, a failed compressor or an R-22 charge makes replacement the stronger case. Because the same equipment heats the apartment, a landlord should weigh a summer repair against the odds of a second breakdown when the tenant needs heat.',
      },
      {
        q: 'Why is my East Westwood AC blowing warm air?',
        a: 'First rule out the thermostat mode and the breaker. Most East Westwood homes use electric heat, so the culprit is often a heat pump that won’t switch out of heating, usually from a faulty reversing valve or its solenoid. Otherwise a burned-out capacitor or lost refrigerant is likely, which a technician confirms with gauges.',
      },
    ],
  },
};
