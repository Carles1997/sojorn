import { Divider } from "@/components/Divider";

type PeuProps = {
  /** Filet superior: només quan el peu continua un camp bosc. Sobre la frontera amb el paper no n'hi ha. */
  filet?: boolean;
};

// Peu de pàgina. Va dins d'un camp bosc.
export function Peu({ filet = true }: PeuProps) {
  return (
    <footer className="mx-auto w-full max-w-pagina px-marge">
      {filet ? <Divider on="bosc" /> : null}
      <div className="flex flex-col gap-3 py-12 sm:flex-row sm:items-baseline sm:justify-between">
        <span className="font-serif text-h5 font-normal tracking-[0.24em]">SOJORN</span>
        <span className="text-meta text-pedra-200">Una guia d&apos;hotels amb encant a Catalunya.</span>
      </div>
    </footer>
  );
}
