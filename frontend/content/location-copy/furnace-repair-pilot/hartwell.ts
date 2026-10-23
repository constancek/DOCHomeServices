import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hartwell: LocationServiceCopy = {
  localParagraph:
    'Gas furnaces account for most Hartwell heating work. Census figures put 60.1% of homes here on utility gas, about a third on electricity and a small group on propane. Two of every three houses predate 1960, so today’s furnace is rarely the first one in that basement, and it often feeds ductwork that has served several furnaces before it. Renters make up 64.4% of households, which puts the repair decision with the owner. Before any part comes out, you hear what broke and what fixing it costs.',
  emergencyParagraph:
    'Hartwell averages around 100 nights a year at or below freezing, going by NOAA normals for CVG. Without heat on nights like that, infants, grandparents and people fighting an illness get chilled first, and water lines along outside walls can freeze. Gas, electric or propane, we fix the furnace on the same day for most callers, Saturday and Sunday too.',
  commonIntro:
    'Hartwell heating ranges from gas units in 1940s basements to electric furnaces inside big apartment blocks. Here’s what we’re called out for most:',
  localFaqs: [
    {
      q: 'My Hartwell landlord won’t fix the heat. What are the rules?',
      a: 'Because Hartwell is part of the City of Cincinnati, its 70-degree rental rule applies where tenants can’t set their own heat. Once outdoor temperatures sit below 60 for 24 hours, the owner must hold the apartment at 70 or above. Put your complaint to the landlord in writing. Our job is the furnace; the lease stays between you two.',
    },
    {
      q: 'Will a new furnace in Hartwell need a city permit?',
      a: 'Yes. Every Hartwell address falls under Cincinnati’s Department of Buildings & Inspections, which issues the mechanical permit for furnace replacements. Ordinary repairs, like swapping an igniter or a blower motor on the existing unit, go ahead without one. On replacement jobs our office files that paperwork, so it isn’t on your list.',
    },
  ],
  overrides: {
    ctaLine: 'Furnace repair across Hartwell: single homes, doubles and apartment blocks',
    band1Heading: 'Common Furnace Problems in Hartwell Homes and Apartments',
    commonSituations: [
      'A 1940s basement furnace that clicks over and over without lighting',
      'The upstairs flat of a two-family cold while downstairs is fine',
      'Lukewarm air from an electric furnace in an apartment utility closet',
      'A blower running all night with no flame behind it',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Five checks come first. The thermostat needs to read heat and have working batteries. The service switch by the furnace should be up and the breaker untripped. A grey, matted filter needs replacing. The blower door has to sit square, because most furnaces stay off with it loose. If one of those brings the heat back, nobody needs to come out. For a gas odor indoors, walk out, keep your hands off light switches, and ring the gas company once you’re clear of the building. A sounding carbon monoxide alarm sends the whole household outside before anything else. On a visit we test, explain, then quote.',
      },
      {
        title: 'Repair or Replace Your Hartwell Furnace?',
        body: 'Ask how old the furnace is, not the house. A Hartwell house from 1948 can easily hold a furnace installed in the last decade, and a new inducer or control board for it costs a fraction of a new unit. The exception is a cracked heat exchanger. That crack lets combustion gases, carbon monoxide included, mix into the air you breathe, so we tag the furnace off and price its replacement. Your Duke Energy Ohio gas statement tells part of the story too: rising use through a winter that feels normal often means a furnace cycling badly before it fails outright.',
      },
    ],
    whyTitle: 'Why Hartwell Homeowners and Landlords Call Us for Furnace Repair',
    whyParagraph:
      'From gas furnaces in prewar basements to electric heat in Hartwell’s larger buildings, we repair what’s there. Technicians are licensed, insured and background checked, you sign off on a flat price first, and there’s no overtime charge after dark.',
    sharedFaqs: [
      {
        q: 'How is furnace repair priced in Hartwell?',
        a: 'By the job, once we know what the job is. A sooty flame sensor gets cleaned in a few minutes. A dead inducer motor wedged into an old basement corner is more work. Either way you see one flat-rate figure and okay it before we begin, and if all it needed was a breaker reset, we’ll say so.',
      },
      {
        q: 'Is it worth fixing an older furnace in a Hartwell house?',
        a: 'Most of the time, provided only one component failed and the heat exchanger has no cracks. The model label on the cabinet gives the furnace’s real age, which in Hartwell is usually far younger than the house. When the exchanger is cracked or big parts are failing together, we write up replacement next to the repair quote.',
      },
      {
        q: 'My Hartwell furnace runs but the air feels cold. Why?',
        a: 'Switch the thermostat fan from on to auto and look at the filter. Gas burners that light, then quit after a few seconds, usually point to a sooty flame sensor or a blocked flue. Electric furnaces go lukewarm when an element burns through. If the shutdowns keep repeating, it’s time for a technician.',
      },
    ],
  },
};
