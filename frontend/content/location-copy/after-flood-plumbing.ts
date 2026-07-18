import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Per-neighborhood after flood plumbing copy, written from each
// neighborhood's real local facts in content/locations.ts.
// Currently Hyde Park, Norwood, and Madisonville — add further neighborhoods
// here as their copy is written.
export const afterFloodPlumbingCopy: Record<string, LocationServiceCopy> = {
  'hyde-park': {
    intro:
      'Flooded in Hyde Park? We go through the plumbing a flood left behind — water heater, sewer main, shutoffs, sump pump — before you turn the water back on. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is large early-1900s houses — Tudors, colonials, brick foursquares — and most of them keep the mechanical room in a lower level that is now finished. When water gets down there it reaches the water heater base, the gas controls, and the main shutoff at the same time, which is three separate problems arriving on one visit.',
      'The other thing about Hyde Park is the trees. Mature root systems sit over sewer laterals that were laid a century ago, and a lateral already narrowed by roots is the one that packs solid when a flood pushes silt into it. The drain runs slowly for a week, then backs up the first time somebody runs a full load of laundry.',
    ],
    commonIntro:
      "In Hyde Park's large early-1900s homes with finished lower levels, what we are called back for after a flood is:",
    localFaqs: [
      {
        q: 'The water heater in my Hyde Park basement got wet. Does it have to go?',
        a: 'If the water reached the burner assembly and the gas control valve, yes. Manufacturers direct replacement rather than repair on a flooded gas unit, and they are right to — the controls corrode inside the housing where nobody can see it, and a gas valve that fails after a flood fails unsafely. If the water stayed below the base and never touched the burner, the unit is usually fine and we will tell you that.',
      },
      {
        q: 'Should I have the sewer lateral cameraed after a Hyde Park flood?',
        a: 'If the drains are at all slow, yes. Hyde Park laterals are old and sit under mature trees, so they are usually carrying some root intrusion before the flood ever happens. Silt collects against roots and turns a partial restriction into a blockage. A camera shows whether it is debris that clears or a section that has failed, which is the difference between an hour of work and a dig.',
      },
    ],
  },
  norwood: {
    intro:
      'Flooded in Norwood? We inspect and repair the plumbing the water left behind before you resume normal use. Norwood sits in the middle of our service area, so we reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, entirely surrounded by Cincinnati, and that matters more after a flood than at any other time. Water and sewer service and the permits for anything that touches them run through Norwood, not Cincinnati. Homeowners here regularly get a contractor who pulls a Cincinnati permit for a lateral repair, or pulls nothing at all, and the problem surfaces at resale.',
      'The housing is a dense grid of early-1900s homes and brick two-families from the streetcar and factory years — small lots, shared walls, and in a lot of cases shared or closely spaced sewer laterals. A blockage after a flood is often not confined to the house that noticed it. When one side of a two-family backs up, the fault is frequently downstream of both.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and brick two-families, the post-flood plumbing problems we handle most are:",
    localFaqs: [
      {
        q: 'Does post-flood plumbing work in Norwood need a Norwood permit?',
        a: 'Yes, where permitted work is involved. Norwood is a separate city with its own water, sewer, and building authority, so a lateral repair or a supply line replacement there goes through Norwood rather than through Cincinnati or MSD the way it would one street over. Inspection alone does not require a permit. The repair that follows often does, and we pull it before we start.',
      },
      {
        q: 'My side of a Norwood two-family backed up after the flood. Is it my line?',
        a: 'Not necessarily, and this is worth establishing before anybody pays for a repair. On these lots the laterals run close together and are sometimes shared, so a blockage below the point where the two sides join affects both units even though only one noticed. We camera from a cleanout and locate where the restriction actually is. If it turns out to be on the shared run, that is a conversation between owners, and we will hand you the footage rather than start digging in your yard.',
      },
    ],
  },
  madisonville: {
    intro:
      'Flooded in Madisonville? We check the water heater, the sewer main, the shutoffs, and the sump pump before you go back to normal water use, for homes around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) has two kinds of plumbing sitting side by side, and floods find both. The older stock along Madison Road and Whetsel Avenue still runs on galvanized supply and cast-iron drain lines, which corrode from the inside and are already narrowed before a flood adds silt to them. Newer infill fails somewhere else entirely, usually at appliance connections and shutoff valves that sat in dirty water and then seized.',
      'The renovated houses are the ones that catch people out. Years of steady reinvestment here mean a lot of homes have a new kitchen and a finished lower level sitting on original plumbing nobody replaced. After a flood the old cast-iron main is the component that fails, and the water it puts back into the house lands in finishes installed recently rather than in a bare cellar.',
    ],
    commonIntro:
      "Across Madisonville's mix of early-1900s homes and newer infill, the post-flood plumbing failures we see most are:",
    localFaqs: [
      {
        q: 'My Madisonville house still has galvanized pipe. Did the flood damage it?',
        a: 'The flood did not corrode it — that has been happening for decades from the inside. What a flood does is finish the job on the parts already thin, and seize the shutoff valves that sat underwater. The valve you would reach for in the next emergency is the one most likely not to turn. We check the shutoffs first and give you a plain answer on whether the supply lines are worth repairing in place or whether you are now spending money on a system that should be replaced.',
      },
      {
        q: 'The flood only reached an inch or two in my Madisonville basement. Do I need you?',
        a: 'Probably not. If the water never touched the water heater base, the gas connections, or the shutoffs, and the drains run at normal speed, there may be nothing here worth paying us for. The one component we would still want checked is the sump pump, because that is the part that worked hardest during the flood and the part you find out about during the next storm. Tell us how high the water got when you call and we will say on the phone whether a visit is warranted.',
      },
    ],
  },
};
