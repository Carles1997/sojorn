"use client";

import { useState, type ReactNode } from "react";
import type { TerritoriId } from "@/components/home/mapa-catalunya-data";
import { MarcaDistintiu } from "@/components/home/MarcaDistintiu";
import { TargetaHotel } from "@/components/hotels/TargetaHotel";
import { DISTINTIUS, TERRITORIS_GUIA, UNIVERSOS, type DistintiuId, type UniversId } from "@/lib/guia";
import type { HotelResum } from "@/lib/hotels";

export type Filtres = {
  territori: TerritoriId | null;
  univers: UniversId | null;
  distintiu: DistintiuId | null;
};

const SENSE_FILTRES: Filtres = { territori: null, univers: null, distintiu: null };

const MIDES = {
  gran: "(min-width: 1440px) 753px, (min-width: 1024px) 52vw, 100vw",
  estandard: "(min-width: 1440px) 420px, (min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw",
};

// Ritme de la graella segons la posició dins de la llista filtrada. A escriptori, dues columnes
// asimètriques de 7 i 4: gran · estàndard més avall · estàndard · gran més avall. A tauleta, les
// grans ocupen les dues columnes; a mòbil, una sola columna.
const RITME = [
  { mida: "gran", cella: "md:col-span-2 lg:col-span-7" },
  { mida: "estandard", cella: "lg:col-span-4 lg:col-start-9 lg:mt-28" },
  { mida: "estandard", cella: "lg:col-span-4" },
  { mida: "gran", cella: "md:col-span-2 lg:col-span-7 lg:col-start-6 lg:mt-28" },
] as const;

type Opcio<T> = {
  valor: T;
  etiqueta: string;
  marca?: ReactNode;
  /** Noms de distintiu: majúscules amb 0,14em de tracking, com a la resta de la guia. */
  majuscules?: boolean;
};

function GrupFiltre<T extends string>({
  llegenda,
  nom,
  opcions,
  valor,
  onCanvi,
}: {
  llegenda: string;
  nom: string;
  opcions: Opcio<T>[];
  valor: T | null;
  onCanvi: (valor: T | null) => void;
}) {
  const totes: Opcio<T | null>[] = [{ valor: null, etiqueta: "Tots" }, ...opcions];

  return (
    <fieldset className="grid gap-2 border-t py-5 first:border-t-0 md:grid-cols-12 md:items-baseline md:gap-6">
      {/* float-left treu la llegenda del dibuix especial del fieldset perquè sigui una cel·la de la graella. */}
      <legend className="float-left text-meta text-oliva md:col-span-2">{llegenda}</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-1 md:col-span-10">
        {totes.map((opcio) => (
          <label
            key={opcio.valor ?? "tots"}
            className="relative cursor-pointer py-1.5 text-ui text-oliva transition-colors duration-200 ease-sojorn hover:text-bosc has-checked:text-bosc has-focus-visible:outline has-focus-visible:outline-offset-4 has-focus-visible:outline-terracota"
          >
            <input
              type="radio"
              name={nom}
              checked={valor === opcio.valor}
              onChange={() => onCanvi(opcio.valor)}
              className="peer sr-only"
            />
            <span className={`inline-flex items-center gap-2 ${opcio.majuscules ? "tracking-[0.14em] uppercase" : ""}`}>
              {opcio.marca}
              {opcio.etiqueta}
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-terracota transition-transform duration-200 ease-sojorn peer-checked:scale-x-100 motion-reduce:transition-none"
            />
          </label>
        ))}
      </div>
    </fieldset>
  );
}

type DirectoriHotelsProps = {
  hotels: HotelResum[];
  /** Filtres llegits de l'adreça pel servidor: una adreça filtrada es pot compartir. */
  inicials: Filtres;
};

export function DirectoriHotels({ hotels, inicials }: DirectoriHotelsProps) {
  const [filtres, setFiltres] = useState<Filtres>(inicials);
  // La graella només es fon quan l'usuari canvia un filtre, no en carregar la pàgina.
  const [canvis, setCanvis] = useState(0);

  const visibles = hotels.filter(
    (hotel) =>
      (!filtres.territori || hotel.territori === filtres.territori) &&
      (!filtres.univers || hotel.universos.includes(filtres.univers)) &&
      (!filtres.distintiu || hotel.distintiu === filtres.distintiu),
  );
  const filtrat = Boolean(filtres.territori || filtres.univers || filtres.distintiu);

  function aplica(seguents: Filtres) {
    setFiltres(seguents);
    setCanvis((n) => n + 1);
    const params = new URLSearchParams();
    for (const [clau, valor] of Object.entries(seguents)) if (valor) params.set(clau, valor);
    const consulta = params.toString();
    window.history.replaceState(null, "", consulta ? `?${consulta}` : window.location.pathname);
  }

  return (
    <div>
      <form aria-label="Filtra la selecció" onSubmit={(event) => event.preventDefault()} className="border-y">
        <GrupFiltre
          llegenda="Territori"
          nom="territori"
          opcions={TERRITORIS_GUIA.map((t) => ({ valor: t.id, etiqueta: t.nom }))}
          valor={filtres.territori}
          onCanvi={(territori) => aplica({ ...filtres, territori })}
        />
        <GrupFiltre
          llegenda="Univers"
          nom="univers"
          opcions={UNIVERSOS.map((u) => ({ valor: u.id, etiqueta: u.nom }))}
          valor={filtres.univers}
          onCanvi={(univers) => aplica({ ...filtres, univers })}
        />
        <GrupFiltre
          llegenda="Distintiu"
          nom="distintiu"
          opcions={DISTINTIUS.map((d) => ({
            valor: d.id,
            etiqueta: d.curt,
            majuscules: true,
            marca: <MarcaDistintiu nivell={d.nivell} contorn={d.id === "icon"} className="text-oliva" />,
          }))}
          valor={filtres.distintiu}
          onCanvi={(distintiu) => aplica({ ...filtres, distintiu })}
        />
      </form>

      {/* Recompte a la dreta, sota la barra; esborrar, quan hi ha filtres, a l'esquerra. */}
      <div className="mt-4 flex min-h-8 items-baseline justify-end gap-6">
        {filtrat ? (
          <button
            type="button"
            onClick={() => aplica(SENSE_FILTRES)}
            className="mr-auto cursor-pointer text-meta text-oliva underline underline-offset-[0.3em] transition-colors duration-200 ease-sojorn hover:text-bosc"
          >
            Esborra els filtres
          </button>
        ) : null}
        <p aria-live="polite" className="text-meta text-oliva">
          {visibles.length} {visibles.length === 1 ? "hotel" : "hotels"}
        </p>
      </div>

      {visibles.length === 0 ? (
        <div className={`py-seccio text-center ${canvis > 0 ? "animate-aparicio" : ""}`}>
          <p className="mx-auto max-w-[30ch] font-serif text-entradeta italic">
            Cap hotel de la selecció no reuneix aquesta combinació.
          </p>
          <p className="mx-auto mt-4 max-w-[46ch] text-oliva">
            Preferim una guia curta i ben triada. Prova de treure algun filtre.
          </p>
          <button
            type="button"
            onClick={() => aplica(SENSE_FILTRES)}
            className="mt-8 cursor-pointer text-ui underline underline-offset-[0.35em] transition-colors duration-200 ease-sojorn hover:text-oliva"
          >
            Esborra els filtres
          </button>
        </div>
      ) : (
        <ul
          key={`${filtres.territori}-${filtres.univers}-${filtres.distintiu}`}
          className={`mt-12 grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-24 ${
            canvis > 0 ? "animate-aparicio" : ""
          }`}
        >
          {visibles.map((hotel, index) => {
            const { mida, cella } = RITME[index % RITME.length];
            return (
              <li key={hotel.slug} className={cella}>
                <TargetaHotel hotel={hotel} mida={mida} sizes={MIDES[mida]} preload={index === 0} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
