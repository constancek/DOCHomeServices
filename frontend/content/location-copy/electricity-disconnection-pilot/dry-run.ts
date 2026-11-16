import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dryRun: LocationServiceCopy = {
  localParagraph:
    'Out in Dry Run, a fallen limb or a backing car can leave a house with a cut service, and getting it back means a licensed electrician rebuilding whatever on the owner’s side broke, then usually an inspector’s okay. Houses here date mostly from the 1970s on, with a median of 1986 per Census figures, and almost all are lived in by their owners. That keeps panels fairly modern, yet grounding still gets tested. You see our diagnosis and a written figure first.',
  emergencyParagraph:
    'Cut power stops the furnace fan, the air conditioner and the sump pump, which counts on a hillside lot after heavy rain. Give a meter box ripped off the siding a wide berth, and phone 911, then the utility, about any wire on the ground. Most disconnection calls get an electrician the same day, weekends included.',
  commonIntro:
    'For the 1970s, 1980s and 1990s houses that fill Dry Run, these are the reasons the utility most often leaves a service off:',
  localFaqs: [
    {
      q: 'If a tree takes down the line to my house in Dry Run, who pays?',
      a: 'Everything from the roof bracket down to your breakers is owner property, and that includes the box holding the meter. Insurance claims for storm harm to those pieces go to your own policy, not to the power company, whose role here is switching you off and back on. We handle the rebuild at a quoted rate.',
    },
    {
      q: 'Who inspects service repairs for houses in Dry Run?',
      a: 'For this part of Anderson Township, Inspection Bureau, Inc. (IBI) takes the electrical permit and sends the inspector. Our office lodges both at the moment you agree to the work. That way the sign-off arrives close behind our last connection instead of trailing it.',
    },
  ],
  overrides: {
    ctaLine: 'Storm and service repairs to get power back for houses in Dry Run',
    band1Heading: 'Common Causes of Electricity Disconnection in Dry Run',
    commonSituations: [
      'A limb that came through the overhead drop and tore the mast loose',
      'A car or truck backed into a meter box on the side of the garage',
      'A finished basement or new circuit that never got a permit, flagged before reconnecting',
      'A meter socket with heat damage after years of a growing household load',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Dry Run',
        body: 'Storm hits rarely stop at the obvious break, so we test the full run from the weatherhead and mast through the entrance cable and meter base to the panel and the grounding. That shows whether a new socket is enough, or the mast or panel has to go, and which permit to file. We replace what failed, reseal the roof penetration if we’ve been up there and bring grounding and bonding to current code. The inspection is requested with the repair. When the meter goes back, we power each circuit separately and label the panel.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Dry Run',
        body: 'Even on newer houses, a utility will red-tag a service in Dry Run for exposed conductors after storm damage, a burned socket, missing grounding or an unsafe panel. The tag means the power stays off for a stated reason. Pushing a bent mast back up or taping a cable won’t clear it. A licensed electrician has to correct the cause and the inspector has to approve the work. If the crew left a tag or door hanger, keep it, as it saves time in diagnosis. Don’t touch a pulled or locked meter. Tampering with utility metering is a criminal offence in Ohio.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Dry Run',
        body: 'A house that sat unoccupied between a sale and a move-in may need its service checked before power returns. If you’ve added big loads since the house was built, a storm repair is a sensible moment to decide. Labour, permit and inspection cost the same whether we rebuild the original service or fit a properly sized modern one, so we quote both.',
      },
    ],
    whyTitle: 'Why Homeowners in Dry Run Choose Us for Disconnection Repair',
    whyParagraph:
      'Homeowners without power lose heat and basement drainage together, so we move these calls up. A licensed electrician repairs what blocked reconnection, deals with permit and inspector, and names a price ahead of work.',
    sharedFaqs: [
      {
        q: 'How much does storm or disconnection repair cost in Dry Run?',
        a: 'What broke sets the bill. Straightening a mast and changing a single socket is a smaller job than putting in a fresh service and panel. After we diagnose, you get a flat rate in writing before the job starts, with our costs separate from anything the utility charges. Qualifying homeowners can finance.',
      },
      {
        q: 'How quickly can the power be back on in Dry Run?',
        a: 'Our part is often a single day. Most of the wait sits with the inspector, whose calendar we don’t control, so the request goes in at booking and not at the end. That habit cuts more dark days than anything else.',
      },
      {
        q: 'Can I reconnect the meter myself after a storm in Dry Run?',
        a: 'No. A pulled or locked meter is the utility’s equipment, and tampering with it is a criminal offence in Ohio. After storm damage it is also dangerous, because the parts it would feed may be cracked, bent or exposed. The repair and the inspection come first.',
      },
    ],
  },
};
