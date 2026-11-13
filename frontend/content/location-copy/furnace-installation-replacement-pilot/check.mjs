// Checks every one-format town file in this folder against page-format.md.
// Run from ./frontend:  node content/location-copy/furnace-installation-replacement-pilot/check.mjs [slug ...]
// Exit code 1 if any checked town fails. Costs no tokens: run it instead of
// asking an agent to check its own work.
// Uniqueness is measured against every other furnace installation page AND every
// page in the folders that share the furnace subject (Furnace Repair and Furnace
// Maintenance), including the same town's, with the unrounded score (64.6% fails).
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const SAME_SUBJECT = ['furnace-repair-pilot', 'furnace-maintenance-pilot'];
const otherDirs = SAME_SUBJECT.map(d => path.join(dir, '..', d));
const SERVICE_WORD = /\bFurnace\b.*\b(Installation|Replacement)\b|\b(Replacing|New)\b.*\bFurnace\b/i; // every heading must name the service
const BRANDS = /\b(Carrier|Trane|Lennox|Goodman|Rheem|Ruud|York|Amana|Bryant|American Standard|Payne|Daikin|Heil|Coleman|Armstrong|Tempstar|Nest|Ecobee|Honeywell)\b/;
const BANNED = /—|–|!|7-day|seven-day|\(513\)|586-5107|\bcall now\b|\bcall today\b|8 ?am|8 ?pm|24\/7|around the clock|day or night|\$\d|\bACS\b|\btracts?\b|block group|survey data|birth ?year|birthday|any day of the week|7 days a week|every day(?! heights)|\b\d+-point\b|\bpoint inspection\b|\bAFUE\b|\bSEER2?\b|\bBTUs?\b|\b\d+(\.\d)?[- ]?tons?\b|efficiency rating|\d+(\.\d)? ?(%|percent)[- ](efficient|efficiency|furnace|AFUE)|\bDOE\b|\bvoids?\b|warrant(y|ies)|extends? (the |its |your furnace’s )?(life|lifespan)|longer (service )?life|adds? years|extra years|years longer|\d+ to \d+ years|\b\d+[- ]years?[- ]old\b|lasts? (about |up to |around )?\d+|lower (your )?(energy |utility |heating |monthly |gas )?bills|save(s)? (on )?energy|pays? for itself|\d+ ?percent (less|more|savings)|\d+ ?degrees|°|\b\d+[- ]?(to \d+[- ]?)?months?\b|\b\d+[- ]?inch|\b\d+ ?(to \d+ ?)?(minutes?|mins?|hours?)\b|\b(two|three|four|six|eight|ninety|forty|thirty) (minutes|hours)\b|half an hour|\blow rates?\b|\binterest\b|\bAPR\b|0 ?%|no money down|monthly payments?|maintenance plans?|\brebates?\b|tax credits?|\bunlock|\bleverage|seamless|world-class|cutting-edge|game-changer|\belevate|\bempower|\bdelve|\bnavigat|\blandscape\b|\brealm\b|\brobust\b|\bcrucial\b|\bvital\b|\bpivotal\b|\bessential\b|peace of mind|rest assured|look no further|when it comes to|important to note|a wide range of|got you covered/i;
const UNIQUE_MIN = 65; // % of this town's copy (5-word phrases) not found in any other furnace installation, repair or maintenance page

// Words allowed straight after the town name. Anything else (a noun such as
// "homes", "calls", "subdivisions", "furnace") means the town is being used as
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
  if (ps[0]) range('proseSections[0] (replace or repair)', ps[0].body, 85, 110);
  if (ps[1]) range('proseSections[1] (choosing)', ps[1].body, 85, 110);
  if (ps[2]) range('proseSections[2] (financing)', ps[2].body, 60, 80);
  if (ps[0] && !/^Replacing a Furnace in .+, and When a Repair Will Do$/.test(ps[0].title)) errs.push(`proseSections[0] title should be "Replacing a Furnace in [Town], and When a Repair Will Do"`);
  if (ps[1] && !/^Choosing the Right New Furnace in .+$/.test(ps[1].title)) errs.push(`proseSections[1] title should be "Choosing the Right New Furnace in [Town]"`);
  if (ps[2] && !/^Financing a New Furnace in .+$/.test(ps[2].title)) errs.push(`proseSections[2] title should be "Financing a New Furnace in [Town]"`);
  const b1 = (o.band1Heading ?? '').match(/^Signs (?:a Home|an Apartment or Home) in (.+) Needs a New Furnace$/);
  if (!b1) errs.push(`band1Heading should be "Signs a Home in [Town] Needs a New Furnace" (or "Signs an Apartment or Home in [Town] Needs a New Furnace")`);
  if (!/^Why .+ in .+ Choose Us for Furnace Installation$/.test(o.whyTitle ?? '')) errs.push(`whyTitle should be "Why Homeowners in [Town] Choose Us for Furnace Installation" ("Residents", "Landlords" etc. allowed)`);
  if (![2, 3].includes((c.localFaqs ?? []).length)) errs.push(`localFaqs ${(c.localFaqs ?? []).length} (want 2 or 3)`);
  if ((o.sharedFaqs ?? []).length !== 3) errs.push(`sharedFaqs ${(o.sharedFaqs ?? []).length} (want 3)`);
  const faqs = [...(c.localFaqs ?? []), ...(o.sharedFaqs ?? [])];
  faqs.forEach((f, i) => range(`faq[${i}] answer`, f.a, 35, 60));
  for (const h of [o.band1Heading, o.whyTitle, ...ps.map(p => p.title)]) if (h && !SERVICE_WORD.test(h)) errs.push(`heading lacks service: "${h}"`);

  // Questions: only FAQ questions may contain "?", and each must be a full
  // question of 4+ words. Body copy fails on rhetorical-question openers and
  // short fragments such as "Furnace past saving?".
  faqs.forEach((f, i) => { if (!/\?$/.test(f.q ?? '') || words(f.q ?? '') < 4) errs.push(`faq[${i}] question should be a full question of 4+ words: "${f.q}"`); });
  const faqQs = new Set(faqs.map(f => f.q));
  for (const s of strings(c)) {
    if (faqQs.has(s)) continue;
    const m = s.match(/(?:^|[.!?:;]\s+|\s)([^.!?:;]{0,60}\?)/);
    if (m) errs.push(`question in body copy (no rhetorical questions or fragments): "${m[1].trim()}" in "${s.slice(0, 50)}..."`);
  }

  // Label-and-colon openers read like a checklist, not a person: "Carbon
  // monoxide alarm: everyone out.", "Gas smell: leave.", "Capacity: sized to the
  // house." A sentence may not start with a short phrase (up to five words)
  // followed by a colon. Write a full sentence instead: "If the carbon monoxide
  // alarm goes off, get everyone out of the house first."
  for (const s of strings(c)) {
    for (const m of s.matchAll(/(?:^|[.;!?]\s+)([A-Z][A-Za-z’']*(?: [A-Za-z0-9’'.%-]+){0,4}):\s/g)) errs.push(`label-and-colon opener (write a full sentence): "${m[1]}:" in "${s.slice(0, 50)}..."`);
  }

  // Town name used as an adjective before any noun ("Hebron homes", "Norwood
  // furnace", "Mason subdivisions"): the town may be followed only by
  // punctuation, a possessive, a capitalized word, or a verb, preposition or
  // conjunction.
  if (b1) {
    const town = b1[1].replace(/^the /, '');
    const re = new RegExp(`\\b${esc(town)} ([a-z][a-z’'-]*)`, 'g');
    for (const s of strings(c)) {
      for (const m of s.matchAll(re)) if (!AFTER_TOWN.has(m[1])) errs.push(`town as adjective: "${town} ${m[1]}" in "${s.slice(0, 50)}..." (write "${m[1]} in ${town}")`);
    }
  }

  for (const s of strings(c)) {
    for (const re of [BANNED, BRANDS]) for (const m of s.matchAll(new RegExp(re.source, re.flags + "g"))) errs.push(`banned text: "${m[0]}" in "${s.slice(0, 50)}..."`);
  }
  const mine = strings(c).flatMap(shingles);
  const rest = new Set(Object.entries(towns).filter(([s]) => s !== slug).flatMap(([, x]) => strings(x).flatMap(shingles)));
  // Unrounded comparison, so a 64.6% page can't pass as "65%".
  const raw = mine.length ? 100 * mine.filter(x => !rest.has(x) && !otherShingles.has(x)).length / mine.length : 0;
  if (raw < UNIQUE_MIN) errs.push(`copy uniqueness ${raw.toFixed(1)}% (want ${UNIQUE_MIN}%+, against furnace installation, repair and maintenance pages)`);
  console.log(`${errs.length ? 'FAIL' : 'PASS'}  ${slug.padEnd(20)} unique ${raw.toFixed(1)}%${errs.length ? '\n      ' + errs.join('\n      ') : ''}`);
  if (errs.length) failed++;
}
console.log(`\n${Object.keys(towns).length} one-format towns checked, ${failed} failing`);
process.exit(failed ? 1 : 0);
