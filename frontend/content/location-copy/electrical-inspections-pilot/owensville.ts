import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const owensville: LocationServiceCopy = {
  localParagraph:
    'Owensville is a small village, and most homes here are rented by Census figures, so landlords between tenants book a lot of our inspections. Of the homes, 50.8% date from 1960 to 1979, a period when panels were sized for a smaller load and a bedroom was lucky to get its own circuit. Electric heat is the norm in most homes too, which means the panel feeds the heat on top of the kitchen and laundry. We check it all, list findings in writing, and quote fixes before any start.',
  emergencyParagraph:
    'Don’t wait if you notice a hot-plastic smell, a warm or buzzing outlet, a cover plate going black, sparks, or a breaker that drops again right after you push it up. Switch that circuit off at the panel. Smoke or fire means leaving first and dialing 911 after. We reach most such calls the same day, weekends included.',
  commonIntro:
    'Owensville is a small village with a lot of rented houses and apartments. The problems we find most:',
  localFaqs: [
    {
      q: 'I rent in Owensville and an outlet is warm. Can I call you?',
      a: 'Shut off that breaker and write to your landlord today. Ohio Revised Code 5321.04 (A)(4) has landlords keep the electrical fixtures they supply safe and working, so the owner or manager schedules us. With smoke, leave and dial 911. We handle the wiring; the lease stays between you and the landlord.',
    },
    {
      q: 'Who issues electrical permits in Owensville?',
      a: 'Clermont County Building Inspection covers the village. What we offer is a private top-to-bottom safety check written up for you. If a fix needs a permit, we file it, and a county inspector looks over the finished work before signing off.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Owensville homes and rental units',
    band1Heading: 'Common Electrical Problems We Find in Owensville Homes and Apartments',
    commonSituations: [
      'Electric heat on a 1970s panel with little room left',
      'A rental unit where a past tenant ran cords as permanent wiring',
      'Bathroom and kitchen outlets with no GFCI protection',
      'A breaker that trips whenever the heat and the dryer run together',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Owensville problems end with a reset. When a few outlets die, find the GFCI in the kitchen, bath, garage or outside that tripped and push its button. A breaker that dropped once and stayed up after you flipped it back is fine, and a dark lamp may want a bulb or the wall switch. Inspections earn their keep when flicker spreads across rooms, the outlets are all two-prong, extension cords are doing the job of wiring, or a landlord is turning a unit over, selling, or putting a big appliance on an older panel.',
      },
      {
        title: 'Inspection, Repair or Rewire in Owensville?',
        body: 'We let the visit decide, not the house’s age. Loose terminals, tired breakers and missing GFCI protection get fixed one by one, and in rental units they usually make up most of the list. A panel too small for electric heat on top of everything else, or one that’s overheating, gets a replacement price. Rewiring only gets quoted when old wiring reaches most rooms, and then beside the cost of patching. Landlords get a report they can act on and can hand it to any electrician. Permits are on us.',
      },
    ],
    whyTitle: 'Why Owensville Landlords and Homeowners Call Us',
    whyParagraph:
      'In a village where most homes are rented, our reports are written so a landlord can act on them. Our licensed, insured electricians pass background checks and drug tests, and prices are flat and approved first.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Owensville?',
        a: 'We quote a flat rate before starting, set by the size of the unit or house and why you need it. A single apartment checked between tenants is a smaller job than a whole house for a sale. Repairs get separate quotes, approved by you first.',
      },
      {
        q: 'What does an Owensville inspection check?',
        a: 'Breakers or fuses in the panel, ground and bond connections, every outlet we can reach with its shock and arc-fault protection, exposed wiring, and power to hard-wired smoke detectors. In electric-heat homes we also test the heating circuits and note how much load the panel carries.',
      },
      {
        q: 'Do I have to use you for the repairs?',
        a: 'No. The report works with any licensed electrician you choose. Landlords with several units often clear the safety items first and spread the rest over the year, which is fine by us. We quote the work only if asked.',
      },
    ],
  },
};
