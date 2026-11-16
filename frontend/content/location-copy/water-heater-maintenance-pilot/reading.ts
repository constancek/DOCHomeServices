import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'Water heater service in Reading tends to land in one of two places: a basement under a 1940s or 1950s house, or a closet in an apartment building. Census figures set the median home at 1956 and count 41.5% as rented. In the basements we check the flue, the gas piping and a drain spigot that may not have moved in years. In the closets it’s the pan and the supply lines. Either way the price is set first, and a tank not worth servicing gets an honest answer.',
  emergencyParagraph:
    'These go on the repair schedule. Spilling tank: shut the cold feed on top, then gas cock or breaker. Gas in the air: walk out, leave switches and pilot be, phone the gas company. Carbon monoxide alarm: clear the house. A relief valve that keeps letting go, or zero hot water: repair. Same day on most calls, weekends included.',
  commonIntro:
    'Reading has plenty of 1940s and 1950s houses and a fair number of apartments. Tanks in both usually show these signs first:',
  localFaqs: [
    {
      q: 'Mill Creek put water in my basement in Reading. Is maintenance the right call?',
      a: 'Not first. The city says many households here sit in the 100-year floodplain, and a heater that stood in flood water may have a ruined burner, gas control or insulation that flushing can’t touch. Book a repair inspection. If the heater passes, yearly maintenance picks up from there.',
    },
    {
      q: 'Renting in Reading, can I schedule the water heater service?',
      a: 'Ask the landlord in writing; the tank, and the booking, are theirs. ORC 5321.04 in Ohio sets landlords the duty of keeping supplied fixtures and appliances safe and working, (A)(4), and supplying reasonable hot water, (A)(6). We service water heaters, not leases. A big shared heater for the building is management’s call.',
    },
  ],
  overrides: {
    ctaLine: 'Flushes and valve checks for houses and apartments in Reading',
    band1Heading: 'Signs a Water Heater in Reading Is Due for Maintenance',
    commonSituations: [
      'A basement heater in a 1950s house near Benson Street with no flush on record',
      'Crackling from a closet tank in a larger apartment building',
      'A purchase where the seller left nothing on file about the water heater',
      'A landlord with several units who wants each relief valve tested every year',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Reading',
        body: 'Service begins by draining the tank and rinsing out the minerals lying on its floor, the layer that causes most popping and rumbling. We then remove the anode rod, which absorbs the corrosion so the tank’s lining is spared, and price a replacement if it’s worn through. The relief valve gets a test lift and its discharge pipe a once-over. Gas heaters get burner, pilot, vent and gas connection checks; electric heaters get elements and thermostats tested. Shutoff and supply lines are inspected, and in a 1950s basement so is the original drain spigot. You approve any part before it’s installed.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Upkeep is money well spent on a heater that still works but has never been drained, on a house you bought without any service papers, and on a tank that’s just started to rumble. Landlords can have several rentals done in one round. It’s wasted on a shell that’s already leaking, since that heater is due for replacement and a rinse won’t slow it. Any heater that sat in Mill Creek flood water should get a repair inspection before any flushing. When the hot tap runs rusty or the tank is clearly spent, we’ll tell you to keep the money. Handy owners can drain a little between visits.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Reading',
        body: 'On a storage heater we do the drain, the rinse and the anode pull. On a tankless heater the job is descaling: a pump runs cleaning solution round the heat exchanger for a set time before a fresh-water rinse, and the inlet strainer is cleared. Gas is the common hookup in Reading, so flame and vent checks come up a lot; electric heaters get elements and thermostats metered. Tankless gets mentioned once, if it suits your house.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Reading Book Water Heater Maintenance With Us',
    whyParagraph:
      'Mid-century basements and apartment closets account for most of our water heater visits in Reading. Family owned since 1993, with licensed and insured technicians, and you sign off on the flat price before any work.',
    sharedFaqs: [
      {
        q: 'How is servicing a water heater priced in Reading?',
        a: 'At a flat rate you hear before work starts. Storage or tankless, gas or electric, and the access route set it; a narrow stair into a 1940s basement is slower going than a garage. Any worn part is quoted as its own item and waits for your yes.',
      },
      {
        q: 'How often does a tank in Reading need servicing?',
        a: 'Once each year is the usual advice. If popping or rumbling starts before the year is out, have it seen earlier; that’s sediment stacking up on the bottom. Choosing a set month, say the start of fall, makes the visit hard to forget.',
      },
      {
        q: 'Could I flush the heater without calling anyone?',
        a: 'Partly. A handy owner can let water out of the drain spigot and carry loose sediment off with it. If the spigot is old and sticks, leave it, since it may not seal again. Relief valve testing and gas burner work are jobs for a technician.',
      },
    ],
  },
};
