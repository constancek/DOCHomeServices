// Shows which strings of one town share 5-word phrases with other towns, so a writer can see what to reword.
// Run from ./frontend:  node content/location-copy/furnace-repair-pilot/overlap.mjs <slug>
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const target = process.argv[2];
const load = f => new Function(fs.readFileSync(path.join(dir, f), 'utf8').replace(/^import[^\n]*\n/gm, '').replace(/export const \w+: LocationServiceCopy =/, 'return'))();
const strings = o => typeof o === 'string' ? [o] : Array.isArray(o) ? o.flatMap(strings) : o && typeof o === 'object' ? Object.values(o).flatMap(strings) : [];
const shingles = t => { const w = t.toLowerCase().replace(/[^a-z0-9'’ ]+/g, ' ').split(/\s+/).filter(Boolean); return w.slice(0, -4).map((_, i) => w.slice(i, i + 5).join(' ')); };
const towns = {};
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && !f.endsWith('.draft.ts'))) { const c = load(f); if (c.localParagraph) towns[f.replace('.ts', '')] = c; }
const rest = new Set(Object.entries(towns).filter(([s]) => s !== target).flatMap(([, x]) => strings(x).flatMap(shingles)));
for (const s of strings(towns[target])) {
  const sh = shingles(s); const hit = sh.filter(x => rest.has(x));
  if (hit.length) console.log(`${hit.length}/${sh.length}  ${s.slice(0, 90)}\n   ${[...new Set(hit)].join(' | ')}\n`);
}
