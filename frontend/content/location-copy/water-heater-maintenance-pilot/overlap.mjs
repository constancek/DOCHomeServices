// Shows which strings of one town share 5-word phrases with other maintenance
// pages or with any Water Heater Repair or Installation page, so a writer can
// see what to reword.
// Run from ./frontend:  node content/location-copy/water-heater-maintenance-pilot/overlap.mjs <slug>
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const repairDir = path.join(dir, '..', 'water-heater-repair-pilot');
const installDir = path.join(dir, '..', 'water-heater-installation-pilot');
const target = process.argv[2];
const strings = o => typeof o === 'string' ? [o] : Array.isArray(o) ? o.flatMap(strings) : o && typeof o === 'object' ? Object.values(o).flatMap(strings) : [];
const shingles = t => { const w = t.toLowerCase().replace(/[^a-z0-9'’ ]+/g, ' ').split(/\s+/).filter(Boolean); return w.slice(0, -4).map((_, i) => w.slice(i, i + 5).join(' ')); };
const loadDir = d => {
  const out = {};
  for (const f of fs.readdirSync(d).filter(f => f.endsWith('.ts') && f !== 'index.ts' && !f.endsWith('.draft.ts'))) {
    const c = new Function(fs.readFileSync(path.join(d, f), 'utf8').replace(/^import[^\n]*\n/gm, '').replace(/export const \w+: LocationServiceCopy =/, 'return'))();
    if (c.localParagraph) out[f.replace('.ts', '')] = c;
  }
  return out;
};
const towns = loadDir(dir);
if (!towns[target]) { console.log(`no one-format file for "${target}"`); process.exit(1); }
const maint = new Set(Object.entries(towns).filter(([s]) => s !== target).flatMap(([, x]) => strings(x).flatMap(shingles)));
const rep = new Set(Object.values(loadDir(repairDir)).flatMap(x => strings(x).flatMap(shingles)));
const inst = new Set(Object.values(loadDir(installDir)).flatMap(x => strings(x).flatMap(shingles)));
for (const s of strings(towns[target])) {
  const sh = shingles(s); const hit = sh.filter(x => maint.has(x) || rep.has(x) || inst.has(x));
  if (hit.length) console.log(`${hit.length}/${sh.length}  ${s.slice(0, 90)}\n   ${[...new Set(hit)].map(x => (rep.has(x) ? '[repair] ' : inst.has(x) ? '[install] ' : '') + x).join(' | ')}\n`);
}
