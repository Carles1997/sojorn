// Converteix les comarques de l'ICGC (GeoJSON WGS84) en camins SVG simplificats per al mapa de la home.
//
// Font: Institut Cartogràfic i Geològic de Catalunya, "Divisions administratives v2.2",
// comarques a escala 1:1.000.000, llicència CC BY 4.0 (el crèdit es mostra sota el mapa).
// https://datacloud.icgc.cat/datacloud/divisions-administratives/json_unzip/divisions-administratives-v2r2-comarques-1000000-20260120.json
// El fitxer original no es desa al repositori: només el mòdul generat.
//
// Ús: node scripts/generar-mapa.mjs <comarques.json> components/home/mapa-catalunya-data.ts 1000 1.2
//
// 1. Projecció equirectangular local i quantització a enters (vèrtexs compartits idèntics).
// 2. Punts fixos: unions entre comarques i canvis de veïnatge.
// 3. Douglas-Peucker entre punts fixos consecutius, amb desempat independent del sentit.
// 4. Etiquetes: per a cada territori, el centre més proper al territori on el rectangle de
//    l'etiqueta no toca cap línia del mapa ni cap altra etiqueta (dins del territori si hi cap).
//    Dos jocs: mapa ample i mapa estret, on l'etiqueta pesa més i cal més separació.
//
// Els contorns de territori i de Catalunya no es calculen aquí: el component els dibuixa amb un
// traç de 2 px tapat per dins amb el farciment de paper de les comarques, una tècnica que no
// depèn que les vores compartides siguin idèntiques.
import fs from "node:fs";

const [input, output, widthArg = "1000", epsArg = "1.2"] = process.argv.slice(2);
const WIDTH = Number(widthArg);
const EPS = Number(epsArg);

const TERRITORIS = {
  emporda: { nom: "Empordà", comarques: ["Alt Empordà", "Baix Empordà"] },
  garrotxa: { nom: "Garrotxa", comarques: ["Garrotxa"] },
  pirineus: {
    nom: "Pirineus",
    comarques: ["Val d'Aran", "Alta Ribagorça", "Pallars Sobirà", "Pallars Jussà", "Alt Urgell", "Cerdanya"],
  },
  priorat: { nom: "Priorat", comarques: ["Priorat"] },
  penedes: { nom: "Penedès", comarques: ["Alt Penedès", "Baix Penedès", "Garraf"] },
  ebre: { nom: "Terres de l'Ebre", comarques: ["Baix Ebre", "Montsià", "Ribera d'Ebre", "Terra Alta"] },
};
const territoriDe = new Map(
  Object.entries(TERRITORIS).flatMap(([id, t]) => t.comarques.map((n) => [n, id])),
);

// Etiquetes: Spectral cursiva a 13 px. Dos jocs de posicions, un per franja d'amplada del mapa (el
// component tria amb una consulta de contenidor a 640 px). Escala: px per unitat del viewBox a
// l'amplada de referència. Separació: px mínims entre etiquetes. Pas: resolució de cerca. Dins: el
// centre ha de caure dins del territori encara que l'etiqueta toqui línies (el component hi posa una
// placa de paper que les tapa); sense aquesta condició, al mapa estret totes fugirien al mar o a França.
const ETIQUETA_PX_PER_CARACTER = 5.8;
const ETIQUETA_ALCADA_PX = 16;
const ETIQUETA_MARGE_PX = 2;
const JOCS_ETIQUETES = {
  etiqueta: { escala: 0.74, separacio: 2, pas: 1, dins: false },
  etiquetaEstreta: { escala: 0.32, separacio: 14, pas: 3, dins: true },
};
const MARGE_MINIM = 3;

const geo = JSON.parse(fs.readFileSync(input, "utf8"));

let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
const walk = (c) => {
  if (typeof c[0] === "number") {
    minLon = Math.min(minLon, c[0]); maxLon = Math.max(maxLon, c[0]);
    minLat = Math.min(minLat, c[1]); maxLat = Math.max(maxLat, c[1]);
  } else c.forEach(walk);
};
geo.features.forEach((f) => walk(f.geometry.coordinates));

const kx = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180));
const scale = WIDTH / ((maxLon - minLon) * kx);
const HEIGHT = Math.ceil((maxLat - minLat) * scale);
const project = ([lon, lat]) => [Math.round((lon - minLon) * kx * scale), Math.round((maxLat - lat) * scale)];
const key = (p) => p[0] + "," + p[1];
const menor = (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);

// 1. Anells quantitzats
let totalIn = 0;
const features = geo.features.map((f, fi) => {
  const rings = [];
  for (const polygon of f.geometry.coordinates) {
    for (const ring of polygon) {
      totalIn += ring.length;
      const pts = [];
      for (const c of ring) {
        const p = project(c);
        const last = pts[pts.length - 1];
        if (!last || last[0] !== p[0] || last[1] !== p[1]) pts.push(p);
      }
      if (pts.length > 1 && key(pts[0]) === key(pts[pts.length - 1])) pts.pop();
      if (pts.length >= 3) rings.push(pts);
    }
  }
  return { nom: f.properties.NOMCOMAR, fi, rings };
});

// 2. Quines comarques toquen cada vèrtex
const owners = new Map();
for (const f of features) {
  for (const ring of f.rings) {
    for (const p of ring) {
      const k = key(p);
      if (!owners.has(k)) owners.set(k, new Set());
      owners.get(k).add(f.fi);
    }
  }
}
const sig = (p) => [...owners.get(key(p))].sort((a, b) => a - b).join("|");

// 3. Douglas-Peucker amb desempat independent del sentit
function dp(pts, first, last, keep) {
  let maxD = 0, idx = -1;
  const [x1, y1] = pts[first], [x2, y2] = pts[last];
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
  for (let i = first + 1; i < last; i++) {
    const [x, y] = pts[i];
    const d = len === 0 ? Math.hypot(x - x1, y - y1) : Math.abs(dy * x - dx * y + x2 * y1 - y2 * x1) / len;
    if (d > maxD || (d === maxD && d > 0 && idx !== -1 && menor(pts[i], pts[idx]))) {
      maxD = d;
      idx = i;
    }
  }
  if (maxD > EPS && idx !== -1) {
    keep[idx] = true;
    dp(pts, first, idx, keep);
    dp(pts, idx, last, keep);
  }
}

let totalOut = 0;
const simplified = features.map((f) => {
  const rings = [];
  for (const ring of f.rings) {
    const n = ring.length;
    const fixed = ring.map((p, i) => {
      const prev = ring[(i - 1 + n) % n], next = ring[(i + 1) % n];
      const s = sig(p);
      return owners.get(key(p)).size >= 3 || s !== sig(prev) || s !== sig(next);
    });
    let fixedIdx = fixed.map((v, i) => (v ? i : -1)).filter((i) => i !== -1);
    if (fixedIdx.length < 2) fixedIdx = [0, Math.floor(n / 2)];
    const keep = new Array(n).fill(false);
    fixedIdx.forEach((i) => (keep[i] = true));
    const ext = ring.concat(ring);
    for (let j = 0; j < fixedIdx.length; j++) {
      const a = fixedIdx[j];
      const b = j + 1 < fixedIdx.length ? fixedIdx[j + 1] : fixedIdx[0] + n;
      const seg = ext.slice(a, b + 1);
      const segKeep = new Array(seg.length).fill(false);
      dp(seg, 0, seg.length - 1, segKeep);
      segKeep.forEach((k, s) => { if (k) keep[(a + s) % n] = true; });
    }
    const out = ring.filter((_, i) => keep[i]);
    if (out.length < 3) continue;
    totalOut += out.length;
    rings.push(out);
  }
  return { nom: f.nom, territori: territoriDe.get(f.nom) ?? null, rings };
});

const noTrobats = [...territoriDe.keys()].filter((n) => !simplified.some((c) => c.nom === n));
if (noTrobats.length) throw new Error("Comarques no trobades: " + noTrobats.join(", "));

// 4. Etiquetes
const segments = [];
for (const c of simplified) {
  for (const ring of c.rings) {
    for (let i = 0; i < ring.length; i++) segments.push([ring[i], ring[(i + 1) % ring.length]]);
  }
}

function dinsAnell(x, y, ring) {
  let dins = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) dins = !dins;
  }
  return dins;
}
const dinsComarca = (x, y, c) => c.rings.reduce((acc, r) => (dinsAnell(x, y, r) ? !acc : acc), false);

function distPuntSegment(px, py, [[ax, ay], [bx, by]]) {
  const dx = bx - ax, dy = by - ay;
  const t = dx === 0 && dy === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}
function segmentTallaRect([[ax, ay], [bx, by]], x0, y0, x1, y1) {
  let t0 = 0, t1 = 1;
  const dx = bx - ax, dy = by - ay;
  const p = [-dx, dx, -dy, dy], q = [ax - x0, x1 - ax, ay - y0, y1 - ay];
  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) {
      if (q[i] < 0) return false;
    } else {
      const r = q[i] / p[i];
      if (p[i] < 0) t0 = Math.max(t0, r);
      else t1 = Math.min(t1, r);
      if (t0 > t1) return false;
    }
  }
  return true;
}
function distanciaRect(s, x0, y0, x1, y1) {
  if (segmentTallaRect(s, x0, y0, x1, y1)) return 0;
  const [[ax, ay], [bx, by]] = s;
  const aRect = Math.hypot(Math.max(x0 - ax, 0, ax - x1), Math.max(y0 - ay, 0, ay - y1));
  const bRect = Math.hypot(Math.max(x0 - bx, 0, bx - x1), Math.max(y0 - by, 0, by - y1));
  const cantons = [[x0, y0], [x1, y0], [x0, y1], [x1, y1]].map(([cx, cy]) => distPuntSegment(cx, cy, s));
  return Math.min(aRect, bRect, ...cantons);
}

function posicioEtiqueta(id, { escala, separacio, pas, dins: dinsObligat }, etiquetesColocades) {
  const conjunt = simplified.filter((c) => c.territori === id);
  const w = (TERRITORIS[id].nom.length * ETIQUETA_PX_PER_CARACTER + ETIQUETA_MARGE_PX * 2) / escala;
  const h = (ETIQUETA_ALCADA_PX + ETIQUETA_MARGE_PX) / escala;
  const sep = separacio / escala;
  let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity, sx = 0, sy = 0, n = 0;
  for (const c of conjunt) for (const r of c.rings) for (const [x, y] of r) {
    bx0 = Math.min(bx0, x); by0 = Math.min(by0, y); bx1 = Math.max(bx1, x); by1 = Math.max(by1, y);
    sx += x; sy += y; n++;
  }
  const [gx, gy] = [sx / n, sy / n];
  const zona = [bx0 - w, by0 - h * 1.5, bx1 + w, by1 + h * 1.5];
  const propers = segments.filter(([[ax, ay], [bx, by]]) =>
    Math.max(ax, bx) >= zona[0] - w && Math.min(ax, bx) <= zona[2] + w && Math.max(ay, by) >= zona[1] - h && Math.min(ay, by) <= zona[3] + h,
  );
  let millor = null;
  for (let cy = zona[1]; cy <= zona[3]; cy += pas) {
    for (let cx = zona[0]; cx <= zona[2]; cx += pas) {
      const x0 = cx - w / 2, x1 = cx + w / 2, y0 = cy - h / 2, y1 = cy + h / 2;
      if (x0 < 0 || y0 < 0 || x1 > WIDTH || y1 > HEIGHT) continue;
      if (etiquetesColocades.some(([a0, b0, a1, b1]) => x0 < a1 + sep && x1 > a0 - sep && y0 < b1 + sep && y1 > b0 - sep)) continue;
      const dins = conjunt.some((c) => dinsComarca(cx, cy, c));
      if (dinsObligat && !dins) continue;
      let minD = Infinity, talls = 0;
      for (const s of propers) {
        const d = distanciaRect(s, x0, y0, x1, y1);
        if (d === 0) talls++;
        if (d < minD) minD = d;
      }
      // Una posició lliure dins del territori sempre guanya a qualsevol de fora (hi n'hi ha prou amb
      // 1 unitat d'aire); fora del territori es demana més marge. Després, a prop del centre i amb aire.
      const lliureDins = dins && talls === 0 && minD >= 1;
      const lliureFora = !dins && talls === 0 && minD >= MARGE_MINIM;
      const base = lliureDins ? 0 : lliureFora ? 1e5 : 1e7 + talls * 1e3;
      const cost = base + Math.hypot(cx - gx, cy - gy) - Math.min(minD, 12) * 3;
      if (!millor || cost < millor.cost) millor = { cx, cy, cost, talls, minD, dins, rect: [x0, y0, x1, y1] };
    }
  }
  if (!millor) throw new Error(`No hi ha cap posició per a l'etiqueta de ${id}`);
  etiquetesColocades.push(millor.rect);
  return millor;
}

// Primer els territoris petits, que tenen menys llocs possibles
const ordre = ["garrotxa", "priorat", "penedes", "emporda", "ebre", "pirineus"];
const territorisGeo = Object.fromEntries(Object.keys(TERRITORIS).map((id) => [id, {}]));
for (const [clau, joc] of Object.entries(JOCS_ETIQUETES)) {
  const colocades = [];
  for (const id of ordre) {
    const et = posicioEtiqueta(id, joc, colocades);
    territorisGeo[id][clau] = [Number(((et.cx / WIDTH) * 100).toFixed(2)), Number(((et.cy / HEIGHT) * 100).toFixed(2))];
    console.log(
      `${clau} ${id}: ${et.talls === 0 ? `lliure (marge ${et.minD.toFixed(1)})` : `toca ${et.talls} segments`}, ${et.dins ? "dins" : "fora"} del territori`,
    );
  }
}

const ringPath = (pts) => "M" + pts.map((p) => p[0] + " " + p[1]).join(" ") + "Z";
const comarques = simplified.map((c) => ({ nom: c.nom, territori: c.territori, d: c.rings.map(ringPath).join("") }));

const ts = `// Generat amb scripts/generar-mapa.mjs a partir de "Divisions administratives v2.2"
// (comarques, escala 1:1.000.000). Font: Institut Cartogràfic i Geològic de Catalunya (ICGC),
// llicència CC BY 4.0. Projecció equirectangular local, vèrtexs quantitzats i simplificats: no editar a mà.

export type TerritoriId = ${Object.keys(TERRITORIS).map((k) => JSON.stringify(k)).join(" | ")};

export const MAPA_AMPLADA = ${WIDTH};
export const MAPA_ALCADA = ${HEIGHT};

export const COMARQUES: ReadonlyArray<{
  nom: string;
  territori: TerritoriId | null;
  d: string;
}> = ${JSON.stringify(comarques, null, 2)};

/**
 * Centre de l'etiqueta de cada territori (percentatge de l'amplada i l'alçada), en espai lliure:
 * \`etiqueta\` per a mapes de 640 px o més i \`etiquetaEstreta\`, sempre dins del territori, per als més estrets.
 */
export const TERRITORIS_GEO: Record<TerritoriId, { etiqueta: [number, number]; etiquetaEstreta: [number, number] }> = ${JSON.stringify(territorisGeo, null, 2)};
`;
fs.writeFileSync(output, ts);
console.log(`viewBox 0 0 ${WIDTH} ${HEIGHT} | tolerància ${EPS} | vèrtexs ${totalIn} -> ${totalOut} | ${(Buffer.byteLength(ts) / 1024).toFixed(1)} KB`);
