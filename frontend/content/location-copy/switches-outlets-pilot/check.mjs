// Checks every one-format town file in this folder against page-format.md.
// Run from ./frontend:  node content/location-copy/switches-outlets-pilot/check.mjs [slug ...]
// Exit code 1 if any checked town fails. Costs no tokens: run it instead of
// asking an agent to check its own work.
// Uniqueness is measured against every other switch and outlet page AND every
// Electrical Inspections, Electrical Panel Replacement, Home Rewiring, EV
// Charger Installation and Surge Protector Installation page,
// including the same town's, with the unrounded score (64.6% fails).
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const SAME_SUBJECT = ['electrical-inspections-pilot', 'electrical-panel-replacement-pilot', 'home-rewiring-pilot', 'ev-chargers-pilot', 'surge-protector-installation-pilot'];
const otherDirs = SAME_SUBJECT.map(d => path.join(dir, '..', d));
const SERVICE_WORD = /\b(Outlets?|Switch(es)?)\b/; // every heading must name the service (Outlet / Switch)
const BRANDS = /\b(Federal Pacific|FPE|Stab-?Lok|Zinsco|Sylvania|Challenger|Pushmatic|Bulldog|Square D|Siemens|Eaton|Cutler-?Hammer|Murray|Leviton|GE|General Electric|Westinghouse|Wadsworth|Generac|Intermatic|APC|Belkin|Tripp Lite|Ditek|Schneider|Panamax|Furman|Tesla|ChargePoint|JuiceBox|Emporia|Wallbox|Grizzl-?E|Enel X|Ford|Chevy|Chevrolet|Rivian|Hyundai|Kia|Nissan|BMW|Toyota|Volkswagen|VW|Lucid|Polestar|Mach-E|Carrier|Trane|Lennox|Rheem)\b/;
// Switches & outlets: no device ratings or figures (no facts file gives any):
// no amp, volt, milliamp or trip-time figures, no shock or fire statistics.
// The master page's own claims are allowed: a GFCI compares outgoing and
// returning current and cuts power when some goes missing (it doesn't sense
// water); code requires GFCIs in kitchens, bathrooms, garages, basements and
// outdoors; outdated wiring raises the risk of electrical fires (no figures).
// AMP_LETTER is case-sensitive so "a 2 A..." style ratings are caught.
const AMP_LETTER = /\b\d+ ?(A|kA|V|mA|ms)\b/;
const SERVICE_BANNED = /\bmilliamps?\b|\bmilliseconds?\b|\b\d+ (fires|shocks|deaths|injuries)\b|\b\d+[- ]?(amps?|volts?|joules?|kiloamps?)\b|\bamperes?\b|\bjoules?\b|\bkA\b|clamp(ing)? voltage|\bVPR\b|\bMOVs?\b|\b\d+ ?kWh?\b|\bkilowatts?\b|lightning strikes? (per|a|each) (year|month)|\b\d+ (storms?|strikes?)\b/i;
const BANNED = /—|–|!|7-day|seven-day|\(513\)|586-5107|\bcall now\b|\bcall today\b|8 ?am|8 ?pm|24\/7|around the clock|day or night|\$\d|\bACS\b|\btracts?\b|block group|survey data|birth ?year|birthday|any day of the week|7 days a week|every day(?! heights)|\b\d+-point\b|\bpoint inspection\b|\bAFUE\b|\bSEER2?\b|\bMERV\b|\bHEPA \d|radon|\bAQI\b|air quality index|pollen count|\d+ ?%|\d+ ?percent|\bR-?22\b|\bR-?410A?\b|\bR-?454B?\b|\bR-?32\b|\bPuron\b|\bFreon\b|\btons?\b|\btonnage\b|\bBTUs?\b|efficiency rating|\bvoids?\b|warrant(y|ies)|adds? years|extra years|years longer|\d+ to \d+ years|pays? (back|for itself)|lasts? (about |up to |around )?\d+|lower (your )?(energy |utility |cooling |electric )?bills|save(s)? (on )?energy|\d+ ?percent (less|more|savings)|\d+ ?degrees|°|\b\d+[- ]?(to \d+[- ]?)?months?\b|\b\d+[- ]?inch|\b\d+ ?(to \d+ ?)?(minutes?|mins?|hours?)\b|\b(two|three|four|six|eight|ninety|forty|thirty) (minutes|hours)\b|half an hour|\blow rates?\b|\binterest\b|\bAPR\b|0 ?%|no money down|monthly payments?|maintenance plans?|\brebates?\b|tax credits?|\bunlock|\bleverage|seamless|world-class|cutting-edge|game-changer|\belevate|\bempower|\bdelve|\bnavigat|\blandscape\b|\brealm\b|\brobust\b|\bcrucial\b|\bvital\b|\bpivotal\b|\bessential\b|peace of mind|rest assured|look no further|when it comes to|important to note|a wide range of|got you covered/i;
const UNIQUE_MIN = 65; // % of this town's copy (5-word phrases) not found in any other switch and outlet, Electrical Inspections, Electrical Panel Replacement, Home Rewiring, EV Charger or Surge Protector page

// Words allowed straight after the town name. Anything else (a noun such as
// "homes", "calls", "subdivisions", "plumbing") means the town is being used as
// an adjective: write "homes in Hebron", not "Hebron homes".
const AFTER_TOWN = new Set(`and or but nor so yet than then if when while where which that who whose because since as
is are was were be been being has have had does do did can could will would should may might must
sits sit sat lies lie runs run ran gets get got keeps keep stays stay sees see saw means mean needs need tends tend
includes include holds hold rents rent heats heat uses use leans lean has still also itself too alone
at in on of for from to with by near into onto through across around along between under over up down off out
about after before until unless beyond past inside outside within without toward towards against per via`.split(/\s+/).filter(Boolean));

const loadDir = d => {
  const out = {};
  if (!fs.existsSync(d)) return out;
  for (const f of fs.readdirSync(d).filter(f => f.endsWith('.ts') && f !== 'index.ts' && !f.endsWith('.draft.ts'))) {
    const src = fs.readFileSync(path.join(d, f), 'utf8')
      .replace(/^import[^\n]*\n/gm, '')
      .replace(/export const \w+: LocationServiceCopy =/, 'return');
    const c = new Function(src)();
    if (c.localParagraph) out[f.replace(/\.ts$/, '')] = c; // one-format files only
  }
  return out;
};
const words = t => t.trim().split(/\s+/).filter(Boolean).length;
const strings = o => typeof o === 'string' ? [o] : Array.isArray(o) ? o.flatMap(strings) : o && typeof o === 'object' ? Object.values(o).flatMap(strings) : [];
const shingles = t => { const w = t.toLowerCase().replace(/[^a-z0-9'’ ]+/g, ' ').split(/\s+/).filter(Boolean); return w.slice(0, -4).map((_, i) => w.slice(i, i + 5).join(' ')); };
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const towns = loadDir(dir);
const otherShingles = new Set(otherDirs.flatMap(d => Object.values(loadDir(d)).flatMap(x => strings(x).flatMap(shingles))));
const only = process.argv.slice(2);
let failed = 0;
for (const [slug, c] of Object.entries(towns)) {
  if (only.length && !only.includes(slug)) continue;
  const o = c.overrides ?? {}; const errs = [];
  const range = (label, t, lo, hi) => { const n = words(t ?? ''); if (n < lo || n > hi) errs.push(`${label} ${n}w (want ${lo}-${hi})`); };
  range('localParagraph', c.localParagraph, 70, 90);
  range('emergencyParagraph', c.emergencyParagraph, 45, 60);
  range('whyParagraph', o.whyParagraph, 30, 40);
  if ((o.commonSituations ?? []).length !== 4) errs.push(`commonSituations ${(o.commonSituations ?? []).length} (want 4)`);
  const ps = o.proseSections ?? [];
  if (ps.length !== 3) errs.push(`proseSections ${ps.length} (want 3)`);
  if (ps[0]) range('proseSections[0] (GFCI and USB)', ps[0].body, 85, 110);
  if (ps[1]) range('proseSections[1] (checks to try)', ps[1].body, 85, 110);
  if (ps[2]) range('proseSections[2] (panel or wiring work)', ps[2].body, 60, 80);
  if (ps[0] && !/^GFCI and USB Outlet Upgrades in .+$/.test(ps[0].title)) errs.push(`proseSections[0] title should be "GFCI and USB Outlet Upgrades in [Town]"`);
  if (ps[1] && !/^Checks to Try Before Calling About an Outlet in .+$/.test(ps[1].title)) errs.push(`proseSections[1] title should be "Checks to Try Before Calling About an Outlet in [Town]"`);
  if (ps[2] && !/^When an Outlet Job Points to Panel or Wiring Work in .+$/.test(ps[2].title)) errs.push(`proseSections[2] title should be "When an Outlet Job Points to Panel or Wiring Work in [Town]"`);
  const b1 = (o.band1Heading ?? '').match(/^Common Outlet and Switch Problems We Fix in (.+)$/);
  if (!b1) errs.push(`band1Heading should be "Common Outlet and Switch Problems We Fix in [Town]"`);
  if (!/^Why .+ in .+ Choose Us for Switches and Outlets$/.test(o.whyTitle ?? '')) errs.push(`whyTitle should be "Why Homeowners in [Town] Choose Us for Switches and Outlets" ("Residents", "Landlords" etc. allowed)`);
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
    for (const re of [BANNED, BRANDS, SERVICE_BANNED, AMP_LETTER]) for (const m of s.matchAll(new RegExp(re.source, re.flags + "g"))) errs.push(`banned text: "${m[0]}" in "${s.slice(0, 50)}..."`);
  }
  const mine = strings(c).flatMap(shingles);
  const rest = new Set(Object.entries(towns).filter(([s]) => s !== slug).flatMap(([, x]) => strings(x).flatMap(shingles)));
  // Unrounded comparison, so a 64.6% page can't pass as "65%".
  const raw = mine.length ? 100 * mine.filter(x => !rest.has(x) && !otherShingles.has(x)).length / mine.length : 0;
  if (raw < UNIQUE_MIN) errs.push(`copy uniqueness ${raw.toFixed(1)}% (want ${UNIQUE_MIN}%+, against switch and outlet, Electrical Inspections, Electrical Panel Replacement, Home Rewiring, EV Charger and Surge Protector pages)`);
  console.log(`${errs.length ? 'FAIL' : 'PASS'}  ${slug.padEnd(20)} unique ${raw.toFixed(1)}%${errs.length ? '\n      ' + errs.join('\n      ') : ''}`);
  if (errs.length) failed++;
}
console.log(`\n${Object.keys(towns).length} one-format towns checked, ${failed} failing`);
process.exit(failed ? 1 : 0);
