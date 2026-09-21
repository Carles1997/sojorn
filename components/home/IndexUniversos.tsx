"use client";

import Image from "next/image";
import { useState } from "react";
import { UNIVERSOS, type UniversId } from "@/lib/guia";

// Els quatre universos, en dues columnes i dues files. Cada targeta gira sobre si mateixa en passar-hi
// el ratolí i mostra una fotografia; en treure'l, torna al text amb el mateix gest. El gir és CSS pur
// (`.carta`, a globals.css) i cau a un fos suau amb moviment reduït. En pantalla tàctil no hi ha
// hover: tocar la targeta la gira i tornar-hi la desgira. Les targetes no són enllaços, així que no
// porten cursor de mà; totes dues cares són al DOM, de manera que el text sempre és llegible.
export function IndexUniversos() {
  const [girat, setGirat] = useState<UniversId | null>(null);
  const autors = [...new Set(UNIVERSOS.map((u) => u.imatge.autor))].join(", ");

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {UNIVERSOS.map((univers) => (
          <li key={univers.id}>
            <div
              className="carta relative h-[19rem] lg:aspect-[3/2] lg:h-auto"
              data-girat={girat === univers.id}
              onPointerUp={(event) => {
                if (event.pointerType === "touch") setGirat((actual) => (actual === univers.id ? null : univers.id));
              }}
            >
              <div className="carta-interior absolute inset-0">
                <div className="carta-cara carta-anvers flex flex-col justify-between border bg-paper p-8 lg:p-10">
                  <h3 className="text-h3 xl:text-h2">{univers.nom}</h3>
                  <div>
                    <p className="text-entradeta font-bold">{univers.lema}</p>
                    <p className="mt-3 min-h-[3.4em] max-w-[32ch] text-oliva">{univers.text}</p>
                  </div>
                </div>
                <div className="carta-cara carta-revers overflow-hidden bg-pedra-100">
                  <Image
                    src={univers.imatge.src}
                    alt={univers.imatge.alt}
                    fill
                    sizes="(min-width: 1440px) 643px, (min-width: 768px) 50vw, 100vw"
                    className="foto-editorial object-cover"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-meta text-oliva">Fotografies provisionals: {autors} (Unsplash)</p>
    </div>
  );
}
