import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Per-neighborhood sewer backup repair copy, written from each neighborhood's
// real local facts in content/locations.ts.
// Currently Hyde Park, Norwood, and Madisonville — add further neighborhoods
// here as their copy is written.
export const sewerBackupRepairCopy: Record<string, LocationServiceCopy> = {
  'hyde-park': {
    intro:
      'Sewage backing up in a Hyde Park home is almost always tree roots in the lateral. We put a camera down the line first, show you what is in it, then clear or repair it — usually reaching homes around Hyde Park Square the same day. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) has the two things that guarantee root intrusion: century-old clay sewer laterals and mature, established trees lining nearly every street. Clay pipe is laid in short sections with joints every few feet, and a root only needs a hair-width gap at one of those joints to find water. Once it is inside, it fans out into a mat that catches paper and grease until the line closes.',
      'What makes it expensive here is the finished lower level. These large early-1900s Tudors, colonials, and brick foursquares mostly have basements that were converted into living space, so when the lateral backs up the waste comes through the lowest floor drain into carpet, drywall, and cabinetry rather than onto bare concrete. That is contaminated porous material and it comes out, which is why a Hyde Park backup costs more than the same blockage two neighborhoods over.',
    ],
    commonIntro:
      "In Hyde Park's older homes on clay laterals under mature trees, the sewer symptoms we are called for most often are:",
    localFaqs: [
      {
        q: 'Will I have to cut down my tree to fix the sewer line in Hyde Park?',
        a: 'Usually not. Cutting the tree does not remove the roots already inside the pipe, and the pipe is the thing that failed — a sound line does not admit roots in the first place. Most of the time we cut the root mass out, camera the joints to see how bad the pipe is, and where the clay is still structurally sound we can line it so the joints are sealed and the roots have nothing to grow into. Removal only comes up when a trunk sits directly over a collapsed section we have to excavate.',
      },
      {
        q: 'My Hyde Park basement drain backed up once and then cleared on its own. Do I still need someone?',
        a: 'Get the line cameraed, yes. A root blockage that clears itself is a partial obstruction that let go under pressure, and it will close again — usually within weeks, usually at the worst time. But if only one fixture was slow and the rest of the house drained normally, that is a local clog and not your lateral. Try a plunger or a hand auger on that trap before you pay anyone to come out.',
      },
    ],
  },
  norwood: {
    intro:
      'Sewer backup in Norwood? We camera the line before quoting, and we know Norwood is its own city with its own sewer and permitting authority — which changes who to call and what the repair takes. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is a separate city entirely surrounded by Cincinnati, with its own sewer and permitting authority. That matters more on sewer work than on almost any other job: a lateral repair here goes through Norwood, not through Cincinnati, and a contractor who pulls the wrong permit or skips it because they assume Norwood is Cincinnati creates a problem you inherit at resale.',
      'The housing stock adds a second problem. Norwood was built dense in the streetcar and factory years — small lots, early-1900s homes and brick two-families packed close together — and on some of those lots the sewer laterals are shared between neighbouring houses. When a shared lateral blocks, the backup surfaces in whichever house sits lowest, which is frequently not the house that caused it. The aging cast-iron drains inside those homes scale up internally with age too, so the branch lines narrow while the main quietly gets worse.',
    ],
    commonIntro:
      "In Norwood's dense early-1900s homes and brick two-families on aging cast iron, the sewer symptoms we handle most often are:",
    localFaqs: [
      {
        q: 'Norwood is its own city — does that change a sewer repair?',
        a: 'Yes. Norwood has its own sewer and permitting authority, so a lateral repair or replacement here is permitted through the city of Norwood rather than through Cincinnati. Clearing a blockage does not require a permit; opening the ground to repair or replace a section does. We pull it through the right authority. If a plumber quotes you an excavation in Norwood and does not mention a permit, ask them which city they are filing with before you sign.',
      },
      {
        q: 'My neighbour and I seem to share a sewer line. Who pays?',
        a: 'That is a property and title question rather than a plumbing one, and it depends on how the lateral was originally run and what your deeds say — worth checking your survey. What we can settle is the technical half: the camera shows where the blockage sits and whether it is upstream or downstream of where your two lines join, which is normally the fact both parties are arguing without. We will not start excavation on a shared lateral until both owners know what the footage shows.',
      },
    ],
  },
  madisonville: {
    intro:
      'Sewer backup in Madisonville? Camera diagnosis first, then clearing or repair, for homes around Madison Road and Whetsel Avenue. Same-day on active backups. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) has been reinvesting for years, and the sewer problems here split along that line. The untouched early-1900s houses run on aging cast-iron drains that scale and corrode from the inside until the effective diameter is a fraction of what the pipe measures. The newer infill is on modern pipe and rarely gives trouble. The trap is the middle group.',
      'That middle group is the renovated older home: new kitchen, new bathrooms, a freshly finished basement — sitting on the original lateral, which nobody touched because it was buried and it was working. Renovations do not usually include the sewer line. So the household load goes up, the finished square footage below grade goes up, and the century-old pipe carrying all of it is the one component that did not get upgraded. When it finally blocks, the waste comes up through the lowest drain into a basement that was finished last year.',
    ],
    commonIntro:
      "Across Madisonville's mix of untouched early-1900s houses and renovated homes on original laterals, the sewer symptoms we see most often are:",
    localFaqs: [
      {
        q: 'We just renovated a Madisonville house. Should we look at the sewer line?',
        a: 'If the lateral was not part of the work, yes — and it is cheaper to camera it now than to find out through a finished basement floor. A camera inspection tells you whether you are on original clay or cast iron, whether roots are in the joints, and whether the line has settled into a low spot. Plenty of them come back fine and you spend nothing further. The ones that do not are far better found before the drywall goes up than after.',
      },
      {
        q: 'The backup started during heavy rain and my whole street had it. Is that my line?',
        a: 'Probably not, and you should call your sewer district before you call us. When the municipal main is surcharged during heavy rain, water comes back up laterals across a whole block at once, and there is nothing on your property worth paying to repair. The tell is whether the neighbours had it too. If it was only your house, or it happens in dry weather, then the problem is on your side and the camera will find it.',
      },
    ],
  },
};
