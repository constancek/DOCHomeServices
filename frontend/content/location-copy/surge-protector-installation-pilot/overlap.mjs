// Shows which strings of one town share 5-word phrases with other surge
// protector pages and every Electrical Inspections, Electrical Panel Replacement,
// Home Rewiring and EV Charger page, so a writer can see what to reword. Hits
// from those folders are tagged [inspect], [panel], [rewire] or [ev].
// Run from ./frontend:  node content/location-copy/surge-protector-installation-pilot/overlap.mjs <slug>
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const target = process.argv[2];
const strings = o => typeof o === 'string' ? [o] : Array.isArray(o) ? o.flatMap(strings) : o && typeof o === 'object' ? Object.values(o).flatMap(strings) : [];
const shingles = t => { const w = t.toLowerCase().replace(/[^a-z0-9'’ ]+/g, ' ').split(/\s+/).filter(Boolean); return w.slice(0, -4).map((_, i) => w.slice(i, i + 5).join(' ')); };
const loadDir = d => {
  const out = {};
  if (!fs.existsSync(d)) return out;
  for (const f of fs.readdirSync(d).filter(f => f.endsWith('.ts') && f !== 'index.ts' && !f.endsWith('.draft.ts'))) {
    const c = new Function(fs.readFileSync(path.join(d, f), 'utf8').replace(/^import[^\n]*\n/gm, '').replace(/export const \w+: LocationServiceCopy =/, 'return'))();
    if (c.localParagraph) out[f.replace('.ts', '')] = c;
  }
  return out;
};
const towns = loadDir(dir);
if (!towns[target]) { console.log(`no one-format file for "${target}"`); process.exit(1); }
const own = new Set(Object.entries(towns).filter(([s]) => s !== target).flatMap(([, x]) => strings(x).flatMap(shingles)));
const others = [['inspect', 'electrical-inspections-pilot'], ['panel', 'electrical-panel-replacement-pilot'], ['rewire', 'home-rewiring-pilot'], ['ev', 'ev-chargers-pilot']]
  .map(([tag, d]) => [tag, new Set(Object.values(loadDir(path.join(dir, '..', d))).flatMap(x => strings(x).flatMap(shingles)))]);
const tagOf = x => { const t = others.find(([, set]) => set.has(x)); return t ? `[${t[0]}] ` : ''; };
for (const s of strings(towns[target])) {
  const sh = shingles(s); const hit = sh.filter(x => own.has(x) || others.some(([, set]) => set.has(x)));
  if (hit.length) console.log(`${hit.length}/${sh.length}  ${s.slice(0, 90)}\n   ${[...new Set(hit)].map(x => tagOf(x) + x).join(' | ')}\n`);
}
