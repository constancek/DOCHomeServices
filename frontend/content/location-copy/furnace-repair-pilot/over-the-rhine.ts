import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const overTheRhine: LocationServiceCopy = {
  localParagraph:
    'Over-the-Rhine furnace repair happens inside buildings far older than any furnace. Census figures show 70.1% of homes here were built in 1939 or earlier, and most sit in buildings with two or more units, so the heating is a later addition fitted into a closet or a basement. Heat is split almost evenly between electricity and gas. Seven in ten households rent, so the owner or manager usually approves the repair. We trace the fault and give a price before any work starts.',
  emergencyParagraph:
    'January’s normal low at CVG is about 23 degrees, per NOAA, and a top-floor OTR flat with a dead furnace cools quickly. Infants, older residents and anyone ill feel it soonest, and plumbing in an unheated building can freeze. Gas and electric furnace repairs here usually happen the day you call, including Saturdays and Sundays.',
  commonIntro:
    'Over-the-Rhine heat runs through 19th-century brick buildings split into flats, about half electric and half gas. The furnace repairs we see most:',
  localFaqs: [
    {
      q: 'My OTR apartment is below 70 degrees. Does my landlord have to fix it?',
      a: 'If you don’t control your own heat, yes. City of Cincinnati rules require those rentals to stay at 70 degrees or more inside after a full day of outdoor temperatures under 60, and Ohio law requires reasonable heat. Put the complaint to your landlord in writing. We repair furnaces and leave lease disputes to you.',
    },
    {
      q: 'Does OTR’s historic status affect furnace work?',
      a: 'Not for a repair; that all happens inside. Where the city has locally designated a historic district, an exterior change requires a Certificate of Appropriateness. So when a new furnace would need a fresh vent cut through a brick wall, we clear it with the city first. If the city requires a permit for the new furnace, we file that.',
    },
  ],
  overrides: {
    ctaLine: 'Over-the-Rhine furnace repair for apartments and rowhouses',
    band1Heading: 'Common Furnace Problems in Over-the-Rhine Buildings',
    commonSituations: [
      'A closet electric furnace in a converted flat that hums but won’t heat',
      'A gas furnace that keeps the lower flat warm and leaves the top floor cold',
      'A flue connector rusting where it enters an old brick chimney',
      'A high-limit switch tripping because furniture blocks the return vent',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Before calling the landlord or us, look at the thermostat: it should say heat, and a dark screen usually needs batteries. Then check the breaker and the furnace’s own power switch, which in older OTR buildings may be on a basement wall or inside the closet. A filter choked with dust, or a furnace door not snapped shut, will keep the heat off. Any one of those can mean no visit. If you smell gas, don’t operate switches; leave and call Duke Energy from the sidewalk. A CO alarm means everyone out first. For real faults we inspect, explain, price for approval and test afterward.',
      },
      {
        title: 'Repair or Replace Your Over-the-Rhine Furnace?',
        body: 'Judge the furnace, not the 19th-century building around it. Census figures count 522 OTR homes built in 2000 or later, and even in the oldest buildings the furnace may be only a few years old. A sound furnace with a failed igniter, inducer or element should be repaired. A cracked heat exchanger is a different matter: it can push carbon monoxide into a shared building, so we shut the furnace off and recommend replacing it. A bill that rises in a month that wasn’t colder often points to a furnace slowly failing. Replacements need the city permit, which we handle.',
      },
    ],
    whyTitle: 'Why Over-the-Rhine Landlords and Residents Call Us for Heating',
    whyParagraph:
      'OTR owners hear what broke before they approve a flat price, and a Saturday night call costs what a Tuesday morning one does. Our technicians are licensed and insured, and each one cleared a background check and drug screening.',
    sharedFaqs: [
      {
        q: 'How much is furnace repair in Over-the-Rhine?',
        a: 'Once the fault is clear, so is the price. Cleaning a dirty flame sensor is quick work; hauling a blower motor up to a closet unit on an upper floor is not. Whoever pays approves one flat price before anything starts, with no overtime charge for nights or weekends.',
      },
      {
        q: 'Is it worth repairing an older furnace in an OTR building?',
        a: 'Usually, if one part gave out and the heat exchanger tests sound. Nearly every OTR building predates 1940, but the building’s age tells you nothing about the furnace. A cracked exchanger or a furnace on its third breakdown is where we write up repair and replacement prices for the owner to compare.',
      },
      {
        q: 'Why does my OTR furnace blow cold air?',
        a: 'Electricity heats about half of OTR homes, and in those a burned element or a tripped breaker is the usual reason for cold air. A gas furnace that blows cold most often tried to light, failed and locked itself out. Confirm the thermostat says heat, not fan, and replace a dusty filter before you call.',
      },
    ],
  },
};
