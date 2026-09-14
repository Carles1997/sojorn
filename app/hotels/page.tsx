import type { Metadata } from "next";
import { Capcalera } from "@/components/Capcalera";
import { DirectoriHotels, type Filtres } from "@/components/hotels/DirectoriHotels";
import { Peu } from "@/components/Peu";
import { DISTINTIUS, TERRITORIS_GUIA, UNIVERSOS } from "@/lib/guia";
import { HOTELS, resum } from "@/lib/hotels";

export const metadata: Metadata = {
  title: "Hotels",
  description: "La selecció d'hotels amb encant de Sojorn, per territori, univers i distintiu.",
};

function valorPermes<T extends string>(valor: string | string[] | undefined, permesos: readonly T[]): T | null {
  return typeof valor === "string" && (permesos as readonly string[]).includes(valor) ? (valor as T) : null;
}

export default async function Hotels({ searchParams }: PageProps<"/hotels">) {
  const consulta = await searchParams;
  const inicials: Filtres = {
    territori: valorPermes(
      consulta.territori,
      TERRITORIS_GUIA.map((t) => t.id),
    ),
    univers: valorPermes(
      consulta.univers,
      UNIVERSOS.map((u) => u.id),
    ),
    distintiu: valorPermes(
      consulta.distintiu,
      DISTINTIUS.map((d) => d.id),
    ),
  };

  return (
    <>
      <Capcalera hotels="pagina" />
      <main className="flex-1">
        <div className="mx-auto max-w-pagina px-marge pt-16 pb-seccio md:pt-24">
          <header className="text-center">
            <h1 className="text-h2">La selecció</h1>
            <p className="mx-auto mt-6 max-w-[34ch] font-serif text-entradeta italic">
              Hotels triats un a un per explicar el lloc on són.
            </p>
            <p className="mt-6 text-meta text-oliva">
              Contingut d&apos;exemple: hotels ficticis mentre preparem la selecció real.
            </p>
          </header>
          <div className="mt-16">
            <DirectoriHotels hotels={HOTELS.map(resum)} inicials={inicials} />
          </div>
        </div>
      </main>
      <div className="bg-bosc text-paper selection:bg-paper selection:text-bosc">
        <Peu filet={false} />
      </div>
    </>
  );
}
