// Shared by check.mjs and overlap.mjs. Loads the 5-word phrases of the other
// service folders (the ones this wave is checked against) from a cache file in
// the system temp folder, and rebuilds the cache by itself whenever any file in
// those folders is added, removed or changed. Same results as reading every
// page each time, in a fraction of the time.
import fs from 'fs';
import os from 'os';
import path from 'path';

export const strings = o => typeof o === 'string' ? [o] : Array.isArray(o) ? o.flatMap(strings) : o && typeof o === 'object' ? Object.values(o).flatMap(strings) : [];
export const shingles = t => { const w = t.toLowerCase().replace(/[^a-z0-9'’ ]+/g, ' ').split(/\s+/).filter(Boolean); return w.slice(0, -4).map((_, i) => w.slice(i, i + 5).join(' ')); };

const pageFiles = d => fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith('.ts') && f !== 'index.ts' && !f.endsWith('.draft.ts')).sort() : [];

export const loadDir = d => {
  const out = {};
  for (const f of pageFiles(d)) {
    const src = fs.readFileSync(path.join(d, f), 'utf8')
      .replace(/^import[^\n]*\n/gm, '')
      .replace(/export const \w+: LocationServiceCopy =/, 'return');
    const c = new Function(src)();
    if (c.localParagraph) out[f.replace(/\.ts$/, '')] = c; // one-format files only
  }
  return out;
};

// tagDirs: [[tag, absoluteDir], ...]. Returns Map tag -> Set of phrases.
export function otherPhrases(tagDirs, cacheName) {
  tagDirs = [...tagDirs].sort(([x], [y]) => (x < y ? -1 : x > y ? 1 : 0)); // same cache whatever order the caller lists them in
  const fingerprint = JSON.stringify(tagDirs.map(([tag, d]) => [tag, pageFiles(d).map(f => { const s = fs.statSync(path.join(d, f)); return [f, s.size, Math.round(s.mtimeMs)]; })]));
  const file = path.join(os.tmpdir(), `${cacheName}-phrase-cache.json`);
  try {
    const cached = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (cached.fingerprint === fingerprint) return new Map(Object.entries(cached.tags).map(([t, arr]) => [t, new Set(arr)]));
  } catch { /* no cache yet, or unreadable: rebuild */ }
  const tags = {};
  for (const [tag, d] of tagDirs) tags[tag] = [...new Set(Object.values(loadDir(d)).flatMap(x => strings(x).flatMap(shingles)))];
  try { fs.writeFileSync(file, JSON.stringify({ fingerprint, tags })); } catch { /* cache is optional */ }
  return new Map(Object.entries(tags).map(([t, arr]) => [t, new Set(arr)]));
}
