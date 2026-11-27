// Shows which strings of one town share 5-word phrases with other outdoor lighting
// pages and every Garage Lighting, Basement Lighting, LED Lighting, Recessed Lighting, Light Fixture, Storm Outage, Disconnection, Mast Repair, Exhaust Fan, Electrical Inspections, Electrical Panel Replacement, Home
// Rewiring, EV Charger, Surge Protector, Switches & Outlets, Ceiling Fan, Hot Tub
// Wiring and Indoor Air Quality page, so a writer can see what to reword. Hits
// from those folders are tagged [storm], [disc], [mast], [inspect], [panel], [rewire], [ev], [surge],
// [switch], [fan], [tub], [exhaust], [iaq], [fixture], [recessed], [led], [basement] or [garage].
// Run from ./frontend:  node content/location-copy/outdoor-lighting-pilot/overlap.mjs <slug>
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { strings, shingles, loadDir, otherPhrases } from './phrase-cache.mjs';
const dir = path.dirname(fileURLToPath(import.meta.url));
const target = process.argv[2];
const towns = loadDir(dir);
if (!towns[target]) { console.log(`no one-format file for "${target}"`); process.exit(1); }
const own = new Set(Object.entries(towns).filter(([s]) => s !== target).flatMap(([, x]) => strings(x).flatMap(shingles)));
const phraseSets = otherPhrases([['storm', 'storm-electricity-outage-pilot'], ['disc', 'electricity-disconnection-pilot'], ['mast', 'electrical-mast-repair-pilot'], ['inspect', 'electrical-inspections-pilot'], ['panel', 'electrical-panel-replacement-pilot'], ['rewire', 'home-rewiring-pilot'], ['ev', 'ev-chargers-pilot'], ['surge', 'surge-protector-installation-pilot'], ['switch', 'switches-outlets-pilot'], ['fan', 'ceiling-fan-installation-pilot'], ['tub', 'hot-tub-wiring-pilot'], ['exhaust', 'exhaust-fan-installation-repair-pilot'], ['iaq', 'indoor-air-quality-pilot'], ['fixture', 'lighting-fixture-installation-pilot'], ['recessed', 'recessed-lighting-pilot'], ['led', 'led-lighting-pilot'], ['basement', 'basement-lighting-pilot'], ['garage', 'garage-lighting-pilot']].map(([, d]) => [d, path.join(dir, '..', d)]), 'outdoor-lighting');
const others = [['storm', 'storm-electricity-outage-pilot'], ['disc', 'electricity-disconnection-pilot'], ['mast', 'electrical-mast-repair-pilot'], ['inspect', 'electrical-inspections-pilot'], ['panel', 'electrical-panel-replacement-pilot'], ['rewire', 'home-rewiring-pilot'], ['ev', 'ev-chargers-pilot'], ['surge', 'surge-protector-installation-pilot'], ['switch', 'switches-outlets-pilot'], ['fan', 'ceiling-fan-installation-pilot'], ['tub', 'hot-tub-wiring-pilot'], ['exhaust', 'exhaust-fan-installation-repair-pilot'], ['iaq', 'indoor-air-quality-pilot'], ['fixture', 'lighting-fixture-installation-pilot'], ['recessed', 'recessed-lighting-pilot'], ['led', 'led-lighting-pilot'], ['basement', 'basement-lighting-pilot'], ['garage', 'garage-lighting-pilot']].map(([tag, d]) => [tag, phraseSets.get(d)]);
const tagOf = x => { const t = others.find(([, set]) => set.has(x)); return t ? `[${t[0]}] ` : ''; };
for (const s of strings(towns[target])) {
  const sh = shingles(s); const hit = sh.filter(x => own.has(x) || others.some(([, set]) => set.has(x)));
  if (hit.length) console.log(`${hit.length}/${sh.length}  ${s.slice(0, 90)}\n   ${[...new Set(hit)].map(x => tagOf(x) + x).join(' | ')}\n`);
}
