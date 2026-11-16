import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const milford: LocationServiceCopy = {
  localParagraph:
    'In Milford, the utility usually leaves an explanation behind, a door hanger or tag saying why the meter came out, and the house stays dark until our electrician fixes that cause and the inspector accepts the work. Census figures date roughly one in five homes to before 1940, with a 1968 median and about half of households renting. Houses near Main Street bring worn panels and weak grounding; the apartment blocks bring shared services feeding several units. A diagnosis and a written figure come before any work.',
  emergencyParagraph:
    'A house in Milford with no service has no furnace, no air conditioning and no sump pump, and on the low streets between Main and the river it matters. Steer clear of a meter box wrenched off the wall. A line on the ground means 911 first, the utility second. An electrician is usually there that day, weekends too.',
  commonIntro:
    'Between the Little Miami and the hills above it, power in Milford usually gets cut for one of these reasons:',
  localFaqs: [
    {
      q: 'Which office handles electrical permits for reconnection work in Milford?',
      a: 'Inside city limits, permits go through National Inspection Corporation (NIC), which the city contracts to administer building and electrical permits after its zoning manager reviews the application. Clermont County’s building office isn’t the one for city addresses. We put the application together, file it and are on site for the inspection.',
    },
    {
      q: 'Our landlord hasn’t fixed the dead service in Milford. What can we do?',
      a: 'Write the landlord about the dead service, include a photo of the tag, and save a copy. Under ORC 5321.04, an Ohio landlord must keep the electrical fixtures and wiring they furnish in good and safe working order, which makes this the owner’s repair to book. We restore power, not leases.',
    },
    {
      q: 'Can a flooded panel in Milford be switched back on?',
      a: 'Not as it is. When the Little Miami pushes into basements near Locust, Water or Polk Street, a panel that went under has to be replaced before the utility will reconnect. We go over the panel, meter base and wiring, price the replacement in writing and book the inspection along with the repair.',
    },
  ],
  overrides: {
    ctaLine: 'Help for homes and apartments in Milford after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Milford',
    commonSituations: [
      'A door hanger naming a burned socket on a house near Main Street',
      'Several apartments on one shared service, tagged for bare conductors',
      'A rental left empty between leases that now needs its service checked',
      'A storm limb that bent the mast on an older house',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Milford',
        body: 'When the hanger names a fault, we start at that spot and then keep checking upward and inward, weatherhead, mast, cable, socket, panel, ground and bond, because on a 1960s house in Milford, one problem seldom shows up alone. What we find sets the scope and which permit gets filed. The failed part is repaired and the grounding brought up to what an inspector accepts today, then we meet the inspection we booked along with the job. With the meter reset, circuits come alive one by one, each breaker gets a label and you get notes on whatever deserves watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Milford',
        body: 'Tags in Milford tend to follow a panel the crew wouldn’t trust or conductors left in the open, often where several units hang off one service. The tag orders the line kept dead. Cleaning up the visible damage doesn’t cancel it; the cause has to be fixed by a licensed electrician and the inspector has to sign. Put the tag or hanger somewhere safe, since its wording often names the fault outright. Nobody but the utility touches a locked meter. Ohio law treats interfering with it as a criminal offence, and on a faulted service it would drive current into gear already refused.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Milford',
        body: 'Half the households in Milford rent, so a unit left empty between tenants turns up regularly. A service dead that long gets extra care before power returns, since an original panel may lag behind today’s rules. Some need just an inspection, others a new panel, and you hear which after we look. Labour, permit and inspection come to roughly the same money both ways, so a refit and a correctly sized new service sit side by side on the quote.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Milford Choose Us for Disconnection Repair',
    whyParagraph:
      'A dark house or building in Milford has no heat and no sump pump, so we handle these as emergencies. Licensed electricians repair what the utility asked for, file the permit, meet the inspector and settle the price first.',
    sharedFaqs: [
      {
        q: 'How is disconnection repair priced in Milford?',
        a: 'The price depends on what broke. Replacing one socket on a house is a different scale of job from a new service for an apartment building. We diagnose first, then put a single fixed figure on paper before work, with our charges kept apart from anything the utility bills. Qualifying homeowners can finance it.',
      },
      {
        q: 'How many days will we be without power in Milford?',
        a: 'The hands-on repair rarely runs past one day. The inspection is what stretches things, since the inspector sets their own calendar. Requesting that visit at the same moment the repair is booked, rather than after, is what saves the most time, and it is how we do every job.',
      },
      {
        q: 'Can I reinstall the meter myself in Milford?',
        a: 'No. The utility owns that meter and any lock on it, and Ohio law makes tampering with either one a crime. The fault behind the disconnection is still there too, so forcing power back would energise equipment already judged unsafe. Repair, inspection, then the reconnect.',
      },
    ],
  },
};
