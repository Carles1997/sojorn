import Image from "next/image";
import { Divider } from "@/components/Divider";

// Fotografia provisional: Ben Steele, Torroja del Priorat (Unsplash License).
// https://unsplash.com/photos/zZcvA-y90bY. Substituir per fotografia pròpia.
const HERO_SRC =
  "https://images.unsplash.com/photo-1515348961751-c17112eca1fd?fm=jpg&q=75&w=2400&fit=crop";

const criteris = [
  {
    nom: "Identitat",
    text: "Hotels amb personalitat pròpia, arquitectura, història o una manera singular d'entendre l'hospitalitat.",
  },
  {
    nom: "Hospitalitat",
    text: "Espais on el servei, l'atenció i els petits detalls formen part de l'experiència.",
  },
  {
    nom: "Territori",
    text: "Hotels profundament connectats amb el lloc on es troben.",
  },
  {
    nom: "Autenticitat",
    text: "Experiències i propostes que neixen del territori i no simplement es reprodueixen.",
  },
  {
    nom: "Excel·lència",
    text: "Un estàndard de qualitat que justifica formar part de la selecció.",
  },
  {
    nom: "Compromís",
    text: "Respecte pel paisatge, la cultura, el producte local i l'entorn.",
  },
];

const universos = [
  {
    nom: "La Taula",
    text: "Hotels on la gastronomia és part essencial de l'experiència.",
  },
  {
    nom: "El Paisatge",
    text: "Hotels que tenen una relació extraordinària amb el seu entorn.",
  },
  {
    nom: "La Història",
    text: "Hotels on arquitectura, patrimoni i cultura formen part del viatge.",
  },
  {
    nom: "El Silenci",
    text: "Hotels per desaparèixer durant un cap de setmana.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section
        aria-labelledby="sojorn"
        className="relative isolate flex min-h-[100dvh] items-center justify-center overflow-hidden bg-bosc px-marge py-24 text-paper"
      >
        <Image
          src={HERO_SRC}
          alt="Muntanyes i terrasses del Priorat vistes des de Torroja del Priorat"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover saturate-60"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-bosc/60" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-bosc/70 to-transparent"
        />

        <div className="flex flex-col items-center text-center">
          <h1
            id="sojorn"
            className="mr-[-0.12em] animate-entrada tracking-[0.12em]"
          >
            SOJORN
          </h1>
          <p className="mt-6 animate-entrada font-serif text-entradeta italic [animation-delay:150ms]">
            Dormir en un lloc. Viure un territori.
          </p>
          <a
            href="#universos"
            className="group mt-12 inline-flex animate-entrada items-center whitespace-nowrap border border-paper/30 bg-bosc px-6 py-4 text-ui tracking-[0.14em] text-paper uppercase transition-colors duration-200 [animation-delay:300ms] hover:border-paper/70 focus-visible:outline-paper sm:px-8"
          >
            <span className="relative">
              <span aria-hidden="true">[ </span>
              Descobreix la selecció
              <span aria-hidden="true"> ]</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1.5 h-px origin-left scale-x-0 bg-paper transition-transform duration-500 ease-sojorn group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </span>
          </a>
        </div>
      </section>

      <section
        id="manifest"
        aria-label="Per què Sojorn"
        className="bg-bosc text-paper"
      >
        <div className="mx-auto grid max-w-pagina grid-cols-12 gap-x-6 gap-y-20 px-marge py-seccio">
          <div className="col-span-12 lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <h2>Catalunya és molt més que una destinació.</h2>
            <p className="mt-10 font-serif text-entradeta italic">
              És una suma de territoris.
            </p>
            <p className="mt-6 max-w-[42ch] text-pedra-200">
              De paisatges que canvien en pocs quilòmetres. De pobles amb
              història. De cuines que neixen de la terra. I també d&apos;hotels
              que han decidit formar part d&apos;aquest paisatge.
            </p>
            <p className="mt-6 max-w-[42ch]">
              Sojorn neix per descobrir, seleccionar i connectar aquests llocs.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <h3>No tots els hotels poden ser Sojorn.</h3>
            <ul className="mt-16">
              {criteris.map((criteri) => (
                <li key={criteri.nom}>
                  <Divider on="bosc" />
                  <div className="grid gap-3 py-8 md:grid-cols-6 md:gap-6">
                    <h4 className="md:col-span-2">{criteri.nom}</h4>
                    <p className="max-w-[42ch] text-pedra-200 md:col-span-4 md:pt-1.5">
                      {criteri.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Divider on="bosc" />
          </div>
        </div>
      </section>

      <section id="universos" aria-labelledby="universos-titol">
        <div className="mx-auto max-w-pagina px-marge py-seccio">
          <h2 id="universos-titol">Els universos</h2>
          <p className="mt-8 max-w-[38ch] text-oliva">
            La selecció no s&apos;ordena amb filtres, sinó per maneres de viure
            un territori.
          </p>

          <ul className="mt-20">
            {universos.map((univers) => (
              <li key={univers.nom}>
                <Divider />
                <div className="grid grid-cols-12 gap-x-6 gap-y-3 py-10 md:py-12">
                  <h3 className="col-span-12 text-h2 font-light md:col-span-7">
                    {univers.nom}
                  </h3>
                  <p className="col-span-12 max-w-[34ch] text-oliva md:col-span-4 md:col-start-9 md:self-center">
                    {univers.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Divider />
        </div>
      </section>

      <section aria-label="La idea central">
        <div className="mx-auto max-w-pagina px-marge py-seccio-amplia">
          <p className="mx-auto max-w-[24ch] text-center font-serif text-h2 text-balance">
            No seleccionem hotels perquè són bons.{" "}
            <em>
              Els seleccionem perquè expliquen alguna cosa del lloc on són.
            </em>
          </p>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-pagina px-marge">
        <Divider />
        <div className="flex flex-col gap-3 py-12 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="font-serif text-h5 tracking-[0.24em]">SOJORN</span>
          <span className="text-meta text-oliva">
            Una guia d&apos;hotels amb encant a Catalunya.
          </span>
        </div>
      </footer>
    </main>
  );
}
