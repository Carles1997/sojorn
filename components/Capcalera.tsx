import Link from "next/link";

type CapcaleraProps = {
  /** Secció on és la pàgina: "pagina" al directori, "seccio" a les fitxes que en pengen. */
  hotels?: "pagina" | "seccio";
};

// Capçalera de les pàgines internes: la marca a mida H5 i una navegació d'una línia sobre un filet.
export function Capcalera({ hotels }: CapcaleraProps) {
  return (
    <header className="mx-auto w-full max-w-pagina px-marge">
      <div className="flex items-baseline justify-between gap-6 border-b py-6">
        <Link href="/" aria-label="Sojorn: inici" className="font-serif text-h5 font-normal tracking-[0.24em]">
          SOJORN
        </Link>
        <nav aria-label="Principal">
          <ul className="flex gap-8 text-ui">
            <li>
              <Link
                href="/hotels"
                aria-current={hotels === "pagina" ? "page" : undefined}
                className={`underline-offset-[0.4em] transition-colors duration-200 ease-sojorn hover:text-bosc ${
                  hotels ? "text-bosc underline decoration-burdeus" : "text-oliva"
                }`}
              >
                Hotels
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
