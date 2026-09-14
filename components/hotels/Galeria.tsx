import Image from "next/image";
import type { Fotografia } from "@/lib/hotels";

function Marc({ foto, sizes, className }: { foto: Fotografia; sizes: string; className: string }) {
  return (
    <div className={`relative overflow-hidden bg-pedra-100 ${className}`}>
      <Image src={foto.src} alt={foto.alt} fill sizes={sizes} className="foto-editorial object-cover" />
    </div>
  );
}

const AMPLE = "(min-width: 1440px) 753px, (min-width: 1024px) 52vw, 100vw";
const ESTRET = "(min-width: 1440px) 531px, (min-width: 1024px) 38vw, 100vw";

// Mosaic de tres a cinc fotografies. A escriptori, un primer bloc 16:9 amb una peça gran de 7
// columnes i dues de 5 apilades; si n'hi ha més, un segon bloc: una panoràmica 21:9 o dues peces de
// 5 i 7 columnes. Els marcs prenen l'alçada de la graella; a mòbil s'apilen amb proporció fixa.
export function Galeria({ fotografies }: { fotografies: Fotografia[] }) {
  const [primera, segona, tercera, ...resta] = fotografies;
  const autors = [...new Set(fotografies.map((f) => f.autor))].join(", ");

  return (
    <div>
      <div className="grid gap-6 lg:aspect-video lg:grid-cols-12 lg:grid-rows-2">
        <Marc foto={primera} sizes={AMPLE} className="aspect-[4/5] lg:col-span-7 lg:row-span-2 lg:aspect-auto" />
        {segona ? <Marc foto={segona} sizes={ESTRET} className="aspect-[4/3] lg:col-span-5 lg:aspect-auto" /> : null}
        {tercera ? <Marc foto={tercera} sizes={ESTRET} className="aspect-[4/3] lg:col-span-5 lg:aspect-auto" /> : null}
      </div>

      {resta.length === 1 ? (
        <Marc foto={resta[0]} sizes="(min-width: 1440px) 1310px, 100vw" className="mt-6 aspect-[4/3] lg:aspect-[21/9]" />
      ) : null}
      {resta.length >= 2 ? (
        <div className="mt-6 grid gap-6 lg:aspect-[3/1] lg:grid-cols-12">
          <Marc foto={resta[0]} sizes={ESTRET} className="aspect-[4/3] lg:col-span-5 lg:aspect-auto" />
          <Marc foto={resta[1]} sizes={AMPLE} className="aspect-[4/3] lg:col-span-7 lg:aspect-auto" />
        </div>
      ) : null}

      <p className="mt-4 text-meta text-oliva">Fotografies provisionals: {autors} (Unsplash)</p>
    </div>
  );
}
