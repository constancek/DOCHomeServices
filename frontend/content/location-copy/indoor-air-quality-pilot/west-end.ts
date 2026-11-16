import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'The West End is mostly rentals, with Census figures counting 2,724 of 3,129 occupied homes as rented, so the owner or manager usually decides what air equipment goes in. The buildings run from 19th-century Italianate rowhouses to newer apartment blocks. The old ones are drafty, often damp in the basement, and move dust through tired ducts; the newer ones seal tight and trap cooking smells and stale air. We test first, price every fix before work starts, and tell the owner if a filter change covers it.',
  emergencyParagraph:
    'Clear everyone out if a carbon monoxide alarm goes off, then call 911. If you smell gas, go outside without flipping a switch and call Duke Energy. Turn the system off at the thermostat if a burning smell comes through. Babies and anyone with asthma are most at risk. Most calls get us the same day, weekends too.',
  commonIntro:
    'For tenants and owners in the West End, these are the air complaints that come up again and again:',
  localFaqs: [
    {
      q: 'I rent in the West End and the apartment smells musty. What are my options?',
      a: 'Put it to your landlord in writing and note the dates. Under ORC 5321.04 (A)(2), an Ohio landlord has to keep the premises fit and habitable, and ongoing damp is that kind of problem. We fix air, not leases. When the owner calls us in, we trace the moisture and quote a fix.',
    },
    {
      q: 'Can a whole-home air purifier go into an old rowhouse in the West End?',
      a: 'Usually, if the house has a forced-air furnace or air handler with room at the filter slot. Some older rowhouses have tight basements or ductwork added long after they were built, so we check the space during the test. Where a whole-home unit won’t fit, a better media filter often will.',
    },
  ],
  overrides: {
    ctaLine: 'Air testing for rowhouses and apartment buildings in the West End',
    band1Heading: 'Signs an Apartment or Home in the West End Has an Indoor Air Quality Problem',
    commonSituations: [
      'A rowhouse basement that smells of damp after every heavy rain',
      'Cooking and smoke smells moving between units through shared walls',
      'Tenants reporting sneezing and dust in a building on old ducts',
      'Bathroom fans in a newer block that hum but leave the mirrors fogged',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in the West End',
        body: 'Testing is the first step. We take readings for particles, dust and humidity, look for water on windows and dampness in basements, and check bath and kitchen fans for real airflow. The filter, ductwork and furnace or air handler get a look too, since a rowhouse from the 1800s and an apartment from the 1990s have very different systems. Owners and managers get a written list for each unit of what the readings support, each with a flat price, and nothing is installed without their approval.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'For an owner, a purifier or dehumidifier earns its cost when tenants complain of sneezing or wheezing, when basements or ground-floor units smell musty, when dust keeps coming back, when bath fans leave steam behind, or when winter air turns dry enough to crack skin. It isn’t worth it if the filters are overdue; fresh ones may settle the complaint. One stuffy apartment might need only a portable purifier. Mold fed by a plumbing or roof leak gets the leak fixed first. In the meantime, tenants should use the bath and range fans, keep furniture off the vents and tell the owner in writing when a filter looks dirty.',
      },
      {
        title: 'Humidity and Filtration for Homes in the West End',
        body: 'Summers in Cincinnati are muggy, and rowhouse basements hold that damp long after the weather turns. A dehumidifier on the HVAC system dries them out, and a humidifier helps once winter heat parches the air. In buildings where smells and dust pass between units, a whole-home purifier or media filter at each air handler removes odors, dander and germs from the air it circulates.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in the West End Choose Us for Indoor Air Quality',
    whyParagraph:
      'Owners in the West End get a test first and a flat price on each fix. Every technician we send into a rowhouse or apartment building is licensed and insured, with a background check and drug test on file.',
    sharedFaqs: [
      {
        q: 'How is indoor air quality work priced in the West End?',
        a: 'Once the test is done, each fix gets a flat rate. The equipment sets most of it, a media filter on one end and a ducted dehumidifier on the other, along with the furnace or air handler it connects to. An owner with several units can approve them one at a time before any work.',
      },
      {
        q: 'What are signs that the air in an apartment is unhealthy?',
        a: 'Tenants usually notice allergies or asthma acting up at home, a stale or musty smell, dust coming back soon after cleaning, water on windows when it’s cold out, and dry, itchy air in winter. Any of these is worth reporting to the owner, and two or more is worth a test.',
      },
      {
        q: 'How often do the filters in a rental need changing?',
        a: 'Whenever they look dirty. Units with pets, smokers or a lot of cooking load filters faster, and so do long spells of heating or cooling. Owners who check every unit on a regular round catch the dirty ones before tenants start sneezing.',
      },
    ],
  },
};
