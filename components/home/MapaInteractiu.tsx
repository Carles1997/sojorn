"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import type { TerritoriId } from "./mapa-catalunya-data";

export type ImatgeTerritori = {
  src: string;
  /** Text alternatiu: descriu el que es veu, sense afirmar res que la foto no mostri. */
  alt: string;
  /** Procedència (fotògraf i font). */
  autor: string;
  font: string;
};

export type Territori = {
  id: TerritoriId;
  nom: string;
  /** El nom amb la preposició i l'article: "a l'Empordà", "als Pirineus". */
  ambPreposicio: string;
  comarques: string;
  text: string;
  /** Fotografia editorial del territori, en un marc vertical fix de 3:4. */
  imatge: ImatgeTerritori;
};

// Tractament fotogràfic compartit amb el directori i les fitxes (utilitat foto-editorial, globals.css).
const TRACTAMENT_FOTO = "object-cover foto-editorial";

export type TerritoriGeo = {
  /** Camins de les comarques del territori. */
  zones: string[];
  /** Centre de l'etiqueta en percentatge de l'amplada i l'alçada del mapa (mapa de 640 px o més). */
  etiqueta: [number, number];
  /** El mateix per a mapes més estrets: sempre dins del territori i amb més separació entre etiquetes. */
  etiquetaEstreta: [number, number];
};

type MapaInteractiuProps = {
  territoris: Territori[];
  geo: Record<TerritoriId, TerritoriGeo>;
  /** Capa inferior renderitzada al servidor: contorn de Catalunya i farciment de paper. */
  fons: ReactNode;
  /** Capa superior renderitzada al servidor: límits de comarca. */
  linies: ReactNode;
  amplada: number;
  alcada: number;
};

// Temps que el ratolí ha de reposar sobre un territori abans de seleccionar-lo.
const REPOS_MS = 120;

export function MapaInteractiu({ territoris, geo, fons, linies, amplada, alcada }: MapaInteractiuProps) {
  const [actiu, setActiu] = useState<TerritoriId>(territoris[0].id);
  const [sobre, setSobre] = useState<TerritoriId | null>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const temporitzador = useRef<ReturnType<typeof setTimeout> | null>(null);
  const base = useId();

  // Ordre de dibuix: territoris en repòs, després el que té el ratolí a sobre i, l'últim, el seleccionat.
  const rang = (id: TerritoriId) => (id === actiu ? 2 : id === sobre ? 1 : 0);
  const ordenats = [...territoris].sort((a, b) => rang(a.id) - rang(b.id));

  useEffect(() => () => {
    if (temporitzador.current) clearTimeout(temporitzador.current);
  }, []);

  function entrar(event: PointerEvent, id: TerritoriId) {
    if (event.pointerType !== "mouse") return;
    setSobre(id);
    if (temporitzador.current) clearTimeout(temporitzador.current);
    temporitzador.current = setTimeout(() => setActiu(id), REPOS_MS);
  }

  function sortir(event: PointerEvent) {
    if (event.pointerType !== "mouse") return;
    if (temporitzador.current) clearTimeout(temporitzador.current);
    setSobre(null);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const ultim = territoris.length - 1;
    let seguent: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") seguent = index === ultim ? 0 : index + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") seguent = index === 0 ? ultim : index - 1;
    if (event.key === "Home") seguent = 0;
    if (event.key === "End") seguent = ultim;
    if (seguent === null) return;
    event.preventDefault();
    setActiu(territoris[seguent].id);
    tabs.current[seguent]?.focus();
  }

  return (
    <div className="grid grid-cols-12 items-start gap-x-6 gap-y-16">
      <div className="col-span-12 lg:col-span-7">
        {/* Contenidor ajustat al mapa: les etiquetes es posicionen en percentatge de l'SVG i trien el
            joc de posicions segons l'amplada del mateix mapa, no de la finestra. */}
        <div className="@container relative">
          <svg viewBox={`0 0 ${amplada} ${alcada}`} aria-hidden="true" className="block h-auto w-full">
            {fons}

            {/* Contorn del territori: traç de 2 px de terracota tapat per dins amb el paper del mateix
                territori, de manera que només en queda visible la meitat exterior i desapareixen les
                vores internes. Cada territori és una unitat (traç + paper) i el seleccionat es dibuixa
                l'últim, perquè el paper dels veïns no li tapi el contorn. */}
            {ordenats.map((t) => {
              const opacitat = t.id === actiu ? 1 : t.id === sobre ? 0.5 : 0;
              return (
                <g key={t.id} pointerEvents="none">
                  <g
                    style={{ strokeOpacity: opacitat }}
                    className="text-terracota transition-[stroke-opacity] duration-200 ease-sojorn"
                  >
                    {geo[t.id].zones.map((d, i) => (
                      <path
                        key={i}
                        d={d}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    ))}
                  </g>
                  <g className="text-paper">
                    {geo[t.id].zones.map((d, i) => (
                      <path key={i} d={d} fill="currentColor" stroke="none" />
                    ))}
                  </g>
                </g>
              );
            })}

            {linies}

            {/* Zona sensible al punter: capa fixa i transparent a sobre de tot, perquè reordenar les
                unitats visuals no provoqui sortides de punter falses. */}
            {territoris.map((t) => (
              <g
                key={t.id}
                className="cursor-pointer"
                onPointerEnter={(event) => entrar(event, t.id)}
                onPointerLeave={sortir}
                onClick={() => setActiu(t.id)}
              >
                {geo[t.id].zones.map((d, i) => (
                  <path key={i} d={d} fill="transparent" stroke="none" pointerEvents="all" />
                ))}
              </g>
            ))}
          </svg>

          {/* Les etiquetes són el control: pestanyes sobre el mateix mapa, amb tabulació itinerant i
              fletxes. El dibuix queda ocult als lectors de pantalla; les pestanyes, no. Cada etiqueta
              porta una placa de paper ajustada al text, que tapa les línies quan el mapa és estret i
              l'etiqueta les toca, i una zona sensible ampliada amb ::after que no engrandeix la placa. */}
          <div role="tablist" aria-label="Territoris" className="pointer-events-none absolute inset-0">
            {territoris.map((t, index) => {
              const [x, y] = geo[t.id].etiqueta;
              const [xe, ye] = geo[t.id].etiquetaEstreta;
              const posicio = { "--x": `${x}%`, "--y": `${y}%`, "--xe": `${xe}%`, "--ye": `${ye}%` } as CSSProperties;
              const seleccionat = t.id === actiu;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${base}-tab-${t.id}`}
                  aria-selected={seleccionat}
                  aria-controls={`${base}-panell-${t.id}`}
                  tabIndex={seleccionat ? 0 : -1}
                  style={posicio}
                  onClick={() => setActiu(t.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  onPointerEnter={(event) => entrar(event, t.id)}
                  onPointerLeave={sortir}
                  className={`pointer-events-auto absolute top-(--ye) left-(--xe) -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-paper after:absolute after:-inset-x-1.5 after:-inset-y-1 @min-[640px]:top-(--y) @min-[640px]:left-(--x) font-serif text-meta whitespace-nowrap italic transition-colors duration-200 ease-sojorn ${
                    seleccionat ? "text-terracota" : "text-oliva"
                  }`}
                >
                  {t.nom}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Panells apilats a la mateixa cel·la: l'alçada és la del més alt i no salta en canviar. */}
      <div className="col-span-12 grid lg:col-span-4 lg:col-start-9">
        {territoris.map((t) => {
          const seleccionat = t.id === actiu;
          return (
            <div
              key={t.id}
              role="tabpanel"
              id={`${base}-panell-${t.id}`}
              aria-labelledby={`${base}-tab-${t.id}`}
              inert={!seleccionat}
              aria-hidden={!seleccionat}
              // Entrada en 200 ms; la sortida, més curta, perquè els dos titulars no es llegeixin superposats.
              className={`flex flex-col [grid-area:1/1] transition-opacity ease-sojorn ${
                seleccionat ? "opacity-100 duration-200" : "pointer-events-none opacity-0 duration-120"
              }`}
            >
              {/* Retall superior fins a l'alçada de les majúscules: el titular s'alinea amb el mapa. */}
              <h3 className="[text-box:trim-start_cap_alphabetic]">{t.nom}</h3>
              <p className="mt-4 text-meta text-oliva">{t.comarques}</p>
              <p className="mt-8 max-w-[32ch] font-serif text-entradeta italic">{t.text}</p>
              <Link
                href={`/hotels?territori=${t.id}`}
                className="mt-6 self-start text-ui underline decoration-oliva/50 underline-offset-[0.35em] transition-colors duration-200 ease-sojorn hover:decoration-bosc"
              >
                Hotels {t.ambPreposicio}
              </Link>
              {/* mt-auto ancora la fotografia a la base: queda a la mateixa altura en tots els territoris. */}
              <figure className="mt-auto pt-10">
                <div className="relative aspect-[3/4] overflow-hidden bg-pedra-100">
                  <Image
                    src={t.imatge.src}
                    alt={t.imatge.alt}
                    fill
                    sizes="(min-width: 1440px) 420px, (min-width: 1024px) 30vw, 100vw"
                    className={TRACTAMENT_FOTO}
                  />
                </div>
                <figcaption className="mt-3 min-h-[3em] text-meta text-oliva">
                  Fotografia provisional: {t.imatge.autor} (Unsplash)
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
