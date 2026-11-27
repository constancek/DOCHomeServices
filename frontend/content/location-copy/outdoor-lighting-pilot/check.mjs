// Checks every one-format town file in this folder against page-format.md.
// Run from ./frontend:  node content/location-copy/outdoor-lighting-pilot/check.mjs [slug ...]
// Exit code 1 if any checked town fails. Costs no tokens: run it instead of
// asking an agent to check its own work.
// Uniqueness is measured against every other outdoor lighting page AND every
// Garage Lighting, Basement Lighting, LED Lighting, Recessed Lighting, Light Fixture, Storm Outage, Electricity Disconnection, Electrical Mast Repair, Exhaust Fan, Electrical Inspections, Electrical Panel Replacement, Home Rewiring, EV
// Charger Installation, Surge Protector Installation, Switches & Outlets,
// Ceiling Fan Installation, Hot Tub Wiring and Indoor Air Quality page,
// including the same town's, with the unrounded score (64.6% fails).
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { strings, shingles, loadDir, otherPhrases } from './phrase-cache.mjs';

const dir = path.dirname(fileURLToPath(import.meta.url));
const SAME_SUBJECT = ['storm-electricity-outage-pilot', 'electricity-disconnection-pilot', 'electrical-mast-repair-pilot', 'electrical-inspections-pilot', 'electrical-panel-replacement-pilot', 'home-rewiring-pilot', 'ev-chargers-pilot', 'surge-protector-installation-pilot', 'switches-outlets-pilot', 'ceiling-fan-installation-pilot', 'hot-tub-wiring-pilot', 'exhaust-fan-installation-repair-pilot', 'indoor-air-quality-pilot', 'lighting-fixture-installation-pilot', 'recessed-lighting-pilot', 'led-lighting-pilot', 'basement-lighting-pilot', 'garage-lighting-pilot'];
const SERVICE_WORD = /\bOutdoor\b/; // every heading must name the service
const BRANDS = /\b(Federal Pacific|FPE|Stab-?Lok|Zinsco|Sylvania|Challenger|Pushmatic|Bulldog|Square D|Siemens|Eaton|Cutler-?Hammer|Murray|Leviton|GE|General Electric|Westinghouse|Wadsworth|Generac|Intermatic|APC|Belkin|Tripp Lite|Ditek|Schneider|Panamax|Furman|Tesla|ChargePoint|JuiceBox|Emporia|Wallbox|Grizzl-?E|Enel X|Ford|Chevy|Chevrolet|Rivian|Hyundai|Kia|Nissan|BMW|Toyota|Volkswagen|VW|Lucid|Polestar|Mach-E|Carrier|Trane|Lennox|Rheem|Hunter|Casablanca|Minka(-?Aire)?|Hampton Bay|Harbor Breeze|Fanimation|Emerson|Craftmade|Monte Carlo|Big Ass Fans|Haiku|Kichler|Jacuzzi|Sundance|Hot Spring Spas|Caldera|Bullfrog|Master Spas|Cal Spas|Coleman|Intex|Lay-?Z-?Spa|Broan|NuTone|Panasonic|Delta Breez|Air King|Aero Pure|Hunter|Zephyr|Vent-?A-?Hood|Whirlpool|KitchenAid|Bosch|Samsung|LG|Frigidaire|Home Depot|Lowe’?s|Menards|Progress Lighting|Hinkley|Feiss|Sea Gull|Generation Lighting|Lithonia|Halo|Juno|Philips|Hue|Cree|Hubbell|Lutron|Wayfair|IKEA|Visual Comfort|Capital Lighting|Quoizel|Maxim|Elk|Globe Electric|Feit|Chamberlain|LiftMaster|Genie|Craftsman|Barrina|Hykolity|Hyperikon|Lepro|Malibu|FX Luminaire|Lumiere|Moonrays)\b/;
// Exhaust fans: no figures at all for airflow, noise, size or electrical
// ratings (no CFM, sones, amps, volts, watts, feet, inches, square feet), no
// bill-savings or percent claims. Fan, hood and appliance brands are banned.
// AMP_LETTER is case-sensitive so "a 2 A..." style ratings are caught.
const AMP_LETTER = /\b\d+ ?(A|kA|V|mA|ms)\b/;
const SERVICE_BANNED = /\bmilliamps?\b|\bmilliseconds?\b|\b\d+ (fires|shocks|deaths|injuries)\b|\b(?!12[- ]?volts?\b)\d+[- ]?(amps?|volts?|joules?|kiloamps?)\b|\bsones?\b|square (feet|foot)|sq\.? ?ft|\bgauge\b|\bAWG\b|\b(five|six|ten|twenty)[- ](foot|feet)\b|\bamperes?\b|\bjoules?\b|\bkA\b|clamp(ing)? voltage|\bVPR\b|\bMOVs?\b|\b\d+ ?kWh?\b|\bkilowatts?\b|lightning strikes? (per|a|each) (year|month)|\b\d+ (storms?|strikes?)\b|\bCFM\b|\bservice size\b|\bwatts?\b|\bRPMs?\b|\b\d+[- ]?(foot|feet|ft|pounds?|lbs?)\b|\b(eight|nine|ten|twelve)[- ](foot|feet)\b|\b\d+ ?"|Energy Star|\blumens?\b|\b\d{4} ?K\b|\bKelvin\b|\bburglar|\bcrime\b|\bintruders?\b|break-?ins?\b|\bthie(f|ves)\b|\bEV\b|electric (car|vehicle)s?|\bcharger\b|\bCRI\b|\bmold\b|\bmildew\b|allergen|asthma|\b(two|three|four|five|six|eight)[- ]inch|\b(two|three|four|five|six|eight|ten|twelve|a dozen) (cans|lights|fixtures|housings|downlights)\b/i;
const BANNED = /—|–|!|7-day|seven-day|\(513\)|586-5107|\bcall now\b|\bcall today\b|8 ?am|8 ?pm|24\/7|around the clock|day or night|\$\d|\bACS\b|\btracts?\b|block group|survey data|birth ?year|birthday|any day of the week|7 days a week|every day(?! heights)|\b\d+-point\b|\bpoint inspection\b|\bAFUE\b|\bSEER2?\b|\bMERV\b|\bHEPA \d|radon|\bAQI\b|air quality index|pollen count|\d+ ?%|\d+ ?percent|\bR-?22\b|\bR-?410A?\b|\bR-?454B?\b|\bR-?32\b|\bPuron\b|\bFreon\b|\btons?\b|\btonnage\b|\bBTUs?\b|efficiency rating|\bvoids?\b|warrant(y|ies)|adds? years|extra years|years longer|\d+ to \d+ years|pays? (back|for itself)|lasts? (about |up to |around )?\d+|\d+ ?percent (less|more|savings)|\b(?!23\b)\d+ ?degrees|(?<!\b23 ?)°|\b\d+[- ]?(to \d+[- ]?)?months?\b|\b\d+[- ]?inch|\b\d+ ?(to \d+ ?)?(minutes?|mins?|hours?)\b|\b(two|three|four|six|eight|ninety|forty|thirty) (minutes|hours)\b|half an hour|\blow rates?\b|\binterest\b|\bAPR\b|0 ?%|no money down|monthly payments?|maintenance plans?|\brebates?\b|tax credits?|\bunlock|\bleverage|seamless|world-class|cutting-edge|game-changer|\belevate|\bempower|\bdelve|\bnavigat|\blandscape\b|\brealm\b|\brobust\b|\bcrucial\b|\bvital\b|\bpivotal\b|\bessential\b|peace of mind|rest assured|look no further|when it comes to|important to note|a wide range of|got you covered/i;
const NOT_HIRE = /(don’t|don't|do not|won’t|won't|will not|may not|might not|never) (even )?need (us|an electrician|a pro|professional)|no need (for us|to call)|(skip|save) (yourself )?(the|a) (call|visit|trip)|(handle|do|fix|try) (this|that|it|these) yourself|before (you )?call(ing)? us|not (a job )?for us|no electrician can|nothing (we|an electrician) can do|not your repair|not ours to fix|whole street (is |being )?(dark|out)|call(-| )out fee|window test|nothing to buy|nothing an electrician can|is the utility’s problem|is Duke’s problem|(usually |often |normally |typically )?covered (by|under)|four figures|insurance (will|should) (pay|cover)|(reasonable|fair|easy|simple) DIY|DIY job|do it yourself if|confident at the panel|call (us|someone) when|yours to do|(trim|bulb) (is|are) (yours|easy|simple)|(can|could) do (it |this |that )?yourself|yourself in an afternoon|charge you to watch|bulb swap (that )?you|swap (the )?bulbs yourself|without us\b|plenty of (homeowners|people|owners)|handle (it |this |that )?(on their own|themselves)|weekend (job|project)|sell you a visit/i; // the owner wants no "when not to hire us" content on service and location pages
const UNIQUE_MIN = 65; // % of this town's copy (5-word phrases) not found in any other outdoor lighting, Garage Lighting, Basement Lighting, LED Lighting, Recessed Lighting, Light Fixture, Storm Outage, Disconnection, Mast Repair, Exhaust Fan, Electrical Inspections, Electrical Panel Replacement, Home Rewiring, EV Charger, Surge Protector, Switches & Outlets, Ceiling Fan, Hot Tub or Indoor Air Quality page

// Words allowed straight after the town name. Anything else (a noun such as
// "homes", "calls", "subdivisions", "plumbing") means the town is being used as
// an adjective: write "homes in Hebron", not "Hebron homes".
const AFTER_TOWN = new Set(`and or but nor so yet than then if when while where which that who whose because since as
is are was were be been being has have had does do did can could will would should may might must
sits sit sat lies lie runs run ran gets get got keeps keep stays stay sees see saw means mean needs need tends tend
includes include holds hold rents rent heats heat uses use leans lean has still also itself too alone
at in on of for from to with by near into onto through across around along between under over up down off out
about after before until unless beyond past inside outside within without toward towards against per via
alike a an date dates feels feel fix fixes usually often take takes call calls`.split(/\s+/).filter(Boolean));

const words = t => t.trim().split(/\s+/).filter(Boolean).length;
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const towns = loadDir(dir);
const otherShingles = new Set([...otherPhrases(SAME_SUBJECT.map(d => [d, path.join(dir, '..', d)]), 'outdoor-lighting').values()].flatMap(s => [...s]));
// How many of this folder's towns use each phrase, counted once per town, so a
// phrase is shared with another town when more than one town uses it.
const townShingles = Object.fromEntries(Object.entries(towns).map(([s, x]) => [s, strings(x).flatMap(shingles)]));
const townCount = new Map();
for (const arr of Object.values(townShingles)) for (const x of new Set(arr)) townCount.set(x, (townCount.get(x) || 0) + 1);
const only = process.argv.slice(2);
let failed = 0;
for (const [slug, c] of Object.entries(towns)) {
  if (only.length && !only.includes(slug)) continue;
  const o = c.overrides ?? {}; const errs = [];
  if (c.emergencyParagraph) errs.push('emergencyParagraph should not be set (lighting pages have no urgent section)');
  const range = (label, t, lo, hi) => { const n = words(t ?? ''); if (n < lo || n > hi) errs.push(`${label} ${n}w (want ${lo}-${hi})`); };
  range('localParagraph', c.localParagraph, 70, 90);
  range('whyParagraph', o.whyParagraph, 30, 40);
  if ((o.commonSituations ?? []).length !== 4) errs.push(`commonSituations ${(o.commonSituations ?? []).length} (want 4)`);
  const ps = o.proseSections ?? [];
  if (ps.length !== 3) errs.push(`proseSections ${ps.length} (want 3)`);
  if (ps[0]) range('proseSections[0] (types and fixtures)', ps[0].body, 85, 110);
  if (ps[1]) range('proseSections[1] (design and placement)', ps[1].body, 85, 110);
  if (ps[2]) range('proseSections[2] (wiring and circuits)', ps[2].body, 60, 80);
  if (ps[0] && !/^Outdoor Lighting Types and Fixtures in .+$/.test(ps[0].title)) errs.push(`proseSections[0] title should be "Outdoor Lighting Types and Fixtures in [Town]"`);
  if (ps[1] && !/^Outdoor Lighting Design and Placement in .+$/.test(ps[1].title)) errs.push(`proseSections[1] title should be "Outdoor Lighting Design and Placement in [Town]"`);
  if (ps[2] && !/^Outdoor Wiring and Circuits in .+$/.test(ps[2].title)) errs.push(`proseSections[2] title should be "Outdoor Wiring and Circuits in [Town]"`);
  const b1 = (o.band1Heading ?? '').match(/^Signs It’s Time for Outdoor Lighting in (.+)$/);
  if (!b1) errs.push(`band1Heading should be "Signs It’s Time for Outdoor Lighting in [Town]"`);
  if (!/^Why .+ in .+ Choose Us for Outdoor Lighting$/.test(o.whyTitle ?? '')) errs.push(`whyTitle should be "Why Homeowners in [Town] Choose Us for Outdoor Lighting" ("Residents", "Homeowners and Landlords" etc. allowed)`);
  if (![2, 3].includes((c.localFaqs ?? []).length)) errs.push(`localFaqs ${(c.localFaqs ?? []).length} (want 2 or 3)`);
  if ((o.sharedFaqs ?? []).length !== 3) errs.push(`sharedFaqs ${(o.sharedFaqs ?? []).length} (want 3)`);
  const faqs = [...(c.localFaqs ?? []), ...(o.sharedFaqs ?? [])];
  faqs.forEach((f, i) => range(`faq[${i}] answer`, f.a, 35, 60));
  for (const h of [o.band1Heading, o.whyTitle, ...ps.map(p => p.title)]) if (h && !SERVICE_WORD.test(h)) errs.push(`heading lacks service: "${h}"`);

  // Questions: only FAQ questions may contain "?", and each must be a full
  // question of 4+ words. Body copy fails on rhetorical-question openers and
  // short fragments such as "AC past saving?".
  faqs.forEach((f, i) => { if (!/\?$/.test(f.q ?? '') || words(f.q ?? '') < 4) errs.push(`faq[${i}] question should be a full question of 4+ words: "${f.q}"`); });
  const faqQs = new Set(faqs.map(f => f.q));
  for (const s of strings(c)) {
    if (faqQs.has(s)) continue;
    const m = s.match(/(?:^|[.!?:;]\s+|\s)([^.!?:;]{0,60}\?)/);
    if (m) errs.push(`question in body copy (no rhetorical questions or fragments): "${m[1].trim()}" in "${s.slice(0, 50)}..."`);
  }

  // Town name used as an adjective before any noun ("Hebron homes", "Norwood
  // calls", "Mason subdivisions"): the town may be followed only by punctuation,
  // a possessive, a capitalized word, or a verb, preposition or conjunction.
  if (b1) {
    const town = b1[1].replace(/^the /, '');
    const re = new RegExp(`\\b${esc(town)} ([a-z][a-z’'-]*)`, 'g');
    for (const s of strings(c)) {
      for (const m of s.matchAll(re)) if (!AFTER_TOWN.has(m[1])) errs.push(`town as adjective: "${town} ${m[1]}" in "${s.slice(0, 50)}..." (write "${m[1]} in ${town}")`);
    }
  }

  // Label-and-colon openers read like a checklist, not a person: "Carbon
  // monoxide alarm: everyone out.", "Gas smell: leave.", "Capacity: sized to the
  // house." A sentence may not start with a short phrase (up to five words)
  // followed by a colon. Write a full sentence instead: "If the carbon monoxide
  // alarm goes off, get everyone out of the house first."
  for (const s of strings(c)) {
    for (const m of s.matchAll(/(?:^|[.;!?]\s+)([A-Z][A-Za-z’']*(?: [A-Za-z0-9’'.%-]+){0,4}):\s/g)) errs.push(`label-and-colon opener (write a full sentence): "${m[1]}:" in "${s.slice(0, 50)}..."`);
  }

  for (const s of strings(c)) {
    for (const re of [BANNED, BRANDS, SERVICE_BANNED, AMP_LETTER, NOT_HIRE]) for (const m of s.matchAll(new RegExp(re.source, re.flags + "g"))) errs.push(`banned text: "${m[0]}" in "${s.slice(0, 50)}..."`);
  }
  const all = strings(c).join(' ');
  const cold = (all.match(/\b23 ?(°F?|degrees)/g) || []).length + (all.match(/\b(100|a hundred|one hundred) (nights|freezing)/gi) || []).length;
  if (cold > 1) errs.push(`cold figures used ${cold} times (use the 23°F low or the 100 freezing nights, once per page)`);
  const volt = (all.match(/\b12[- ]?volts?\b/gi) || []).length;
  if (volt > 2) errs.push(`12-volt used ${volt} times (at most twice per page)`);
  const mine = townShingles[slug];
  // Unrounded comparison, so a 64.6% page can't pass as "65%".
  const raw = mine.length ? 100 * mine.filter(x => townCount.get(x) < 2 && !otherShingles.has(x)).length / mine.length : 0;
  if (raw < UNIQUE_MIN) errs.push(`copy uniqueness ${raw.toFixed(1)}% (want ${UNIQUE_MIN}%+, against outdoor lighting, Garage Lighting, Basement Lighting, LED Lighting, Recessed Lighting, Light Fixture, Storm Outage, Disconnection, Mast Repair, Exhaust Fan, Electrical Inspections, Electrical Panel Replacement, Home Rewiring, EV Charger, Surge Protector, Switches & Outlets, Ceiling Fan, Hot Tub and Indoor Air Quality pages)`);
  console.log(`${errs.length ? 'FAIL' : 'PASS'}  ${slug.padEnd(20)} unique ${raw.toFixed(1)}%${errs.length ? '\n      ' + errs.join('\n      ') : ''}`);
  if (errs.length) failed++;
}
console.log(`\n${Object.keys(towns).length} one-format towns checked, ${failed} failing`);
process.exit(failed ? 1 : 0);
