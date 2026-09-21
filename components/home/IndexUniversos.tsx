"use client";

import Image from "next/image";
import { useState } from "react";
import { UNIVERSOS, type UniversId } from "@/lib/guia";

// Els quatre universos, en dues columnes i dues files, com un sumari obert: cada un és un text sobre
// un filet superior, sense marc. En passar-hi el ratolí, la targeta gira sobre si mateixa i mostra una
// fotografia; en treure'l, torna al text amb el mateix gest. El gir és CSS pur (`.carta`, a
// globals.css) i cau a un fos suau amb moviment reduït. En pantalla tàctil no hi ha hover: tocar la
// targeta la gira i tornar-hi la desgira. Les targetes no són enllaços, així que no porten cursor de
// mà; totes dues cares són al DOM, de manera que el text sempre és llegible.
export function IndexUniversos() {
  const [girat, setGirat] = useState<UniversId | null>(null);
  const autors = [...new Set(UNIVERSOS.map((u) => u.imatge.autor))].join(", ");

  return (
    <div>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
        {UNIVERSOS.map((univers) => (
          <li key={univers.id}>
            <div
              className="carta relative h-44 md:h-56"
              data-girat={girat === univers.id}
              onPointerUp={(event) => {
                if (event.pointerType === "touch") setGirat((actual) => (actual === univers.id ? null : univers.id));
              }}
            >
              <div className="carta-interior absolute inset-0">
                <div className="carta-cara carta-anvers border-t pt-6">
                  <h3 className="text-h4">{univers.nom}</h3>
                  <p className="mt-3 text-ui font-bold">{univers.lema}</p>
                  <p className="mt-1 max-w-[30ch] text-oliva">{univers.text}</p>
                </div>
                <div className="carta-cara carta-revers overflow-hidden bg-pedra-100">
                  <Image
                    src={univers.imatge.src}
                    alt={univers.imatge.alt}
                    fill
                    sizes="(min-width: 1440px) 380px, (min-width: 768px) 40vw, 100vw"
                    className="foto-editorial object-cover"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-meta text-oliva">Fotografies provisionals: {autors} (Unsplash)</p>
    </div>
  );
}
