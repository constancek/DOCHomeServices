// Checks every one-format town file in this folder against page-format.md.
// Run from ./frontend:  node content/location-copy/ac-repair-pilot/check.mjs [slug ...]
// Exit code 1 if any checked town fails. Costs no tokens: run it instead of
// asking an agent to check its own work.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const SERVICE_WORD = /\bAC\b/; // every heading must name the service
const BANNED = /—|–|!|7-day|seven-day|\(513\)|586-5107|\bcall now\b|\bcall today\b|8 ?am|8 ?pm|\$\d|\bACS\b|\btracts?\b|block group|survey data|birth ?year|birthday|any day of the week|7 days a week|every day(?! heights)/i;
const UNIQUE_MIN = 60; // % of this town's copy (5-word phrases) not found in any other town's copy; the site's uniqueness goal

const load = file => {
  const src = fs.readFileSync(path.join(dir, file), 'utf8')
    .replace(/^import[^\n]*\n/gm, '')
    .replace(/export const \w+: LocationServiceCopy =/, 'return');
  return new Function(src)();
};
const words = t => t.trim().split(/\s+/).filter(Boolean).length;
const strings = o => typeof o === 'string' ? [o] : Array.isArray(o) ? o.flatMap(strings) : o && typeof o === 'object' ? Object.values(o).flatMap(strings) : [];
const shingles = t => { const w = t.toLowerCase().replace(/[^a-z0-9'’ ]+/g, ' ').split(/\s+/).filter(Boolean); return w.slice(0, -4).map((_, i) => w.slice(i, i + 5).join(' ')); };

const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && !f.endsWith('.draft.ts'));
const towns = {};
for (const f of files) { const c = load(f); if (c.localParagraph) towns[f.replace(/\.ts$/, '')] = c; } // one-format files only
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
  if (ps.length !== 2) errs.push(`proseSections ${ps.length} (want 2)`);
  ps.forEach((p, i) => range(`proseSections[${i}]`, p.body, 85, 110));
  if (ps[0] && !/^Signs Your /.test(ps[0].title)) errs.push(`proseSections[0] title should start "Signs Your"`);
  if (ps[1] && !/^Repair or Replace /.test(ps[1].title)) errs.push(`proseSections[1] title should start "Repair or Replace"`);
  if ((c.localFaqs ?? []).length !== 2) errs.push(`localFaqs ${(c.localFaqs ?? []).length} (want 2)`);
  if ((o.sharedFaqs ?? []).length !== 3) errs.push(`sharedFaqs ${(o.sharedFaqs ?? []).length} (want 3)`);
  [...(c.localFaqs ?? []), ...(o.sharedFaqs ?? [])].forEach((f, i) => range(`faq[${i}] answer`, f.a, 35, 60));
  for (const h of [o.band1Heading, ...ps.map(p => p.title)]) if (h && !SERVICE_WORD.test(h)) errs.push(`heading lacks service: "${h}"`);
  const bad = strings(c).filter(s => BANNED.test(s));
  bad.forEach(s => errs.push(`banned text: "${s.match(BANNED)[0]}" in "${s.slice(0, 50)}..."`));
  const mine = strings(c).flatMap(shingles);
  const rest = new Set(Object.entries(towns).filter(([s]) => s !== slug).flatMap(([, x]) => strings(x).flatMap(shingles)));
  const uniq = mine.length ? Math.round(100 * mine.filter(x => !rest.has(x)).length / mine.length) : 0;
  if (uniq < UNIQUE_MIN) errs.push(`copy uniqueness ${uniq}% (want ${UNIQUE_MIN}%+)`);
  console.log(`${errs.length ? 'FAIL' : 'PASS'}  ${slug.padEnd(16)} unique ${uniq}%${errs.length ? '\n      ' + errs.join('\n      ') : ''}`);
  if (errs.length) failed++;
}
console.log(`\n${Object.keys(towns).length} one-format towns checked, ${failed} failing`);
process.exit(failed ? 1 : 0);
