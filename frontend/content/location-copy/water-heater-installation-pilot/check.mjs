// Checks every one-format town file in this folder against page-format.md.
// Run from ./frontend:  node content/location-copy/water-heater-installation-pilot/check.mjs [slug ...]
// Exit code 1 if any checked town fails. Costs no tokens: run it instead of
// asking an agent to check its own work.
// Uniqueness is measured against every other installation page AND every
// Water Heater Repair page (including the same town's), so the two services
// don't read alike.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const repairDir = path.join(dir, '..', 'water-heater-repair-pilot');
const SERVICE_WORD = /\bWater Heaters?\b/i; // every heading must name the service
const BANNED = /—|–|!|7-day|seven-day|\(513\)|586-5107|\bcall now\b|\bcall today\b|8 ?am|8 ?pm|\$\d|\bACS\b|\btracts?\b|block group|survey data|birth ?year|birthday|any day of the week|7 days a week|every day(?! heights)|\bAPR\b|interest rate|\d+[- ]gallons?|\bper month\b|\/mo\b/i;
const UNIQUE_MIN = 65; // % of this town's copy (5-word phrases) not found in any other installation or repair page

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
const repairShingles = new Set(Object.values(loadDir(repairDir)).flatMap(x => strings(x).flatMap(shingles)));
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
  if (ps[0]) range('proseSections[0] (benefits)', ps[0].body, 85, 110);
  if (ps[1]) range('proseSections[1] (choosing)', ps[1].body, 85, 110);
  if (ps[2]) range('proseSections[2] (financing)', ps[2].body, 60, 80);
  if (ps[0] && !/^Benefits of a New Water Heater for Homes in .+$/.test(ps[0].title)) errs.push(`proseSections[0] title should be "Benefits of a New Water Heater for Homes in [Town]"`);
  if (ps[1] && !/^Choosing the Right New Water Heater in .+$/.test(ps[1].title)) errs.push(`proseSections[1] title should be "Choosing the Right New Water Heater in [Town]"`);
  if (ps[2] && !/^Financing a New Water Heater in .+$/.test(ps[2].title)) errs.push(`proseSections[2] title should be "Financing a New Water Heater in [Town]"`);
  const b1 = (o.band1Heading ?? '').match(/^Signs an? .+? in (.+) Needs a New Water Heater$/);
  if (!b1) errs.push(`band1Heading should be "Signs a Home in [Town] Needs a New Water Heater" ("an Apartment or Home" etc. allowed)`);
  if (!/^Why .+ in .+ Choose Us for Water Heater Installation$/.test(o.whyTitle ?? '')) errs.push(`whyTitle should be "Why Homeowners in [Town] Choose Us for Water Heater Installation" ("Residents", "Landlords" etc. allowed)`);
  if (![2, 3].includes((c.localFaqs ?? []).length)) errs.push(`localFaqs ${(c.localFaqs ?? []).length} (want 2 or 3)`);
  if ((o.sharedFaqs ?? []).length !== 3) errs.push(`sharedFaqs ${(o.sharedFaqs ?? []).length} (want 3)`);
  [...(c.localFaqs ?? []), ...(o.sharedFaqs ?? [])].forEach((f, i) => range(`faq[${i}] answer`, f.a, 35, 60));
  for (const h of [o.band1Heading, o.whyTitle, ...ps.map(p => p.title)]) if (h && !SERVICE_WORD.test(h)) errs.push(`heading lacks service: "${h}"`);
  // Town name used as an adjective ("Hebron water heater", "a Norwood house"): write "a water heater in Hebron".
  if (b1) {
    const adj = new RegExp(`\\b${esc(b1[1])} (water heaters?|tanks?|homes?|houses?|apartments?|basements?|homeowners?|landlords?|residents?|families|family|renters?|tenants?|buildings?|rentals?)\\b`, 'i');
    for (const s of strings(c)) { const m = s.match(adj); if (m) errs.push(`town as adjective: "${m[0]}" in "${s.slice(0, 50)}..."`); }
  }
  const bad = strings(c).filter(s => BANNED.test(s));
  bad.forEach(s => errs.push(`banned text: "${s.match(BANNED)[0]}" in "${s.slice(0, 50)}..."`));
  const mine = strings(c).flatMap(shingles);
  const rest = new Set(Object.entries(towns).filter(([s]) => s !== slug).flatMap(([, x]) => strings(x).flatMap(shingles)));
  const uniq = mine.length ? Math.round(100 * mine.filter(x => !rest.has(x) && !repairShingles.has(x)).length / mine.length) : 0;
  if (uniq < UNIQUE_MIN) errs.push(`copy uniqueness ${uniq}% (want ${UNIQUE_MIN}%+, against installation and repair pages)`);
  console.log(`${errs.length ? 'FAIL' : 'PASS'}  ${slug.padEnd(16)} unique ${uniq}%${errs.length ? '\n      ' + errs.join('\n      ') : ''}`);
  if (errs.length) failed++;
}
console.log(`\n${Object.keys(towns).length} one-format towns checked, ${failed} failing`);
process.exit(failed ? 1 : 0);
