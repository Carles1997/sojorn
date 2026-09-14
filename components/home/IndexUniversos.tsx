// Índex editorial dels set universos. A escriptori, graella de 12 columnes en 8/4 · 4/4/4 · 4/8:
// els filets verticals cauen sempre sobre els mateixos eixos (columnes 4 i 8), com la retícula
// d'un índex de llibre. Les cel·les amples posen nom i descripció costat per costat, amb la
// descripció alineada amb el text de les cel·les estretes (eix + 40 px).
// Les cel·les no són enllaços mentre no hi hagi pàgines d'univers: micro-interacció subtil,
// sense cursor d'enllaç. Els noms i textos venen de lib/guia; aquí només hi ha la retícula, en el
// mateix ordre.
import { UNIVERSOS } from "@/lib/guia";

const CELLES: ReadonlyArray<{ cella: string; ampla: string | null }> = [
  // La Taula. Cel·la que comença a la vora esquerra: la descripció salta l'eix i els 40 px de marge.
  { cella: "md:pr-8 lg:col-span-8 lg:pr-10", ampla: "lg:pl-10" },
  // El Paisatge
  { cella: "md:border-l md:pl-8 lg:col-span-4 lg:pl-10", ampla: null },
  // La Història
  { cella: "md:pr-8 lg:col-span-4 lg:pr-10", ampla: null },
  // El Camí
  { cella: "md:border-l md:pl-8 lg:col-span-4 lg:px-10", ampla: null },
  // El Silenci
  { cella: "md:pr-8 lg:col-span-4 lg:border-l lg:pl-10 lg:pr-0", ampla: null },
  // El Romanticisme
  { cella: "md:border-l md:pl-8 lg:col-span-4 lg:border-l-0 lg:pl-0 lg:pr-10", ampla: null },
  // La Terra. Cel·la que comença a l'eix 4: el padding de la cel·la ja aporta els 40 px.
  { cella: "md:col-span-2 lg:col-span-8 lg:border-l lg:pl-10", ampla: "lg:pl-0" },
];

export function IndexUniversos() {
  return (
    <ul className="grid grid-cols-1 border-t md:grid-cols-2 lg:grid-cols-12">
      {UNIVERSOS.map((dades, index) => {
        const univers = { ...dades, ...CELLES[index] };
        return (
        <li key={univers.id} className={`group relative border-b py-12 md:py-14 ${univers.cella}`}>
          <span
            aria-hidden="true"
            className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-oliva transition-transform duration-[160ms] ease-sojorn group-hover:scale-x-100 group-hover:duration-[280ms] motion-reduce:scale-x-100 motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:group-hover:opacity-100"
          />
          <div
            className={
              univers.ampla ? "lg:grid lg:grid-cols-[calc(50%+1.25rem)_1fr] lg:items-baseline" : ""
            }
          >
            <h3 className="transition-transform duration-[160ms] ease-sojorn group-hover:-translate-y-0.5 group-hover:duration-[280ms] motion-reduce:group-hover:translate-y-0">
              {univers.nom}
            </h3>
            <p className={`mt-4 max-w-[32ch] text-oliva ${univers.ampla ? `lg:mt-0 ${univers.ampla}` : ""}`}>
              {univers.text}
            </p>
          </div>
        </li>
        );
      })}
    </ul>
  );
}
