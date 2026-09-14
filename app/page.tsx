import Image from "next/image";
import { Divider } from "@/components/Divider";
import { IndexUniversos } from "@/components/home/IndexUniversos";
import { MapaCatalunya } from "@/components/home/MapaCatalunya";
import { MarcaDistintiu } from "@/components/home/MarcaDistintiu";

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

const distintius = [
  {
    nivell: 1 as const,
    nom: "Sojorn Selection",
    text: "Hotel seleccionat per Sojorn.",
  },
  {
    nivell: 2 as const,
    nom: "Sojorn Signature",
    text: "Un hotel especialment singular per la seva identitat, hospitalitat i vinculació amb el territori.",
  },
  {
    nivell: 3 as const,
    nom: "Sojorn Icon",
    text: "Hotels extraordinaris que representen una experiència excepcional dins del territori català.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section
        aria-labelledby="sojorn"
        className="relative isolate flex min-h-[100dvh] items-center justify-center overflow-hidden bg-bosc px-marge py-24 text-paper selection:bg-paper selection:text-bosc"
      >
        <Image
          src={HERO_SRC}
          alt="Muntanyes i terrasses del Priorat vistes des de Torroja del Priorat"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[50%_80%] saturate-50 sepia-40"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-bosc/70" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-linear-to-t from-bosc via-bosc/60 to-transparent"
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
            href="#catalunya"
            className="group mt-12 inline-flex animate-entrada items-center border border-paper/30 bg-bosc px-6 py-4 text-center text-ui tracking-[0.14em] text-paper uppercase transition-colors duration-200 ease-sojorn [animation-delay:300ms] hover:border-paper/70 sm:px-8 sm:whitespace-nowrap"
          >
            <span className="relative">
              <span aria-hidden="true">[ </span>
              Descobreix la selecció
              <span aria-hidden="true"> ]</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1.5 h-px origin-left scale-x-0 bg-paper transition-transform duration-500 ease-sojorn group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:scale-x-100 motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-200 motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-visible:opacity-100"
              />
            </span>
          </a>
        </div>
      </section>

      <section
        id="manifest"
        aria-label="Per què Sojorn"
        className="bg-bosc text-paper selection:bg-paper selection:text-bosc"
      >
        <div className="mx-auto grid max-w-pagina grid-cols-12 gap-x-6 gap-y-20 px-marge py-seccio">
          <div className="col-span-12 lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <h2>
              Catalunya és <em>molt més</em> que una destinació.
            </h2>
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
              Hotels amb identitat, arrelats al seu entorn.
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
            <p className="mt-12 max-w-[30ch] font-serif text-entradeta italic">
              El distintiu Sojorn no és una categoria. És una garantia de
              criteri.
            </p>
          </div>
        </div>
      </section>

      <section id="guia" aria-labelledby="guia-titol">
        <div className="mx-auto max-w-pagina px-marge py-seccio">
          <h2 id="guia-titol" className="max-w-[20ch]">
            No volem ser una llista d&apos;hotels.{" "}
            <em>Volem ser una referència.</em>
          </h2>
          <p className="mt-8 max-w-[46ch] text-oliva">
            En un món on tot es pot reservar, comparar i valorar, creiem que
            encara hi ha espai per al criteri. Per això Sojorn no busca tenir la
            selecció més gran. Busca tenir la selecció adequada.
          </p>

          <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-3">
              <h3 className="text-h4">La Guia Sojorn</h3>
              <p className="mt-3 max-w-[28ch] text-meta text-oliva">
                Una selecció independent d&apos;hotels amb encant a Catalunya.
              </p>
            </div>
            <dl className="col-span-12 grid border-t md:grid-cols-3 lg:col-span-9">
              {distintius.map((distintiu) => {
                const excepcional = distintiu.nivell === 3;
                return (
                  <div
                    key={distintiu.nom}
                    className="border-b py-8 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:[&:not(:first-child)]:border-l"
                  >
                    <dt>
                      <MarcaDistintiu
                        nivell={distintiu.nivell}
                        contorn={excepcional}
                        className="text-terracota"
                      />
                      <span className="mt-4 block text-ui tracking-[0.14em] uppercase">
                        {distintiu.nom}
                      </span>
                    </dt>
                    <dd className="mt-3 max-w-[30ch] text-oliva">
                      {distintiu.text}
                      {excepcional ? (
                        <span className="mt-3 block text-meta">
                          Només per a casos molt especials.
                        </span>
                      ) : null}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      <section id="catalunya" aria-labelledby="catalunya-titol">
        <div className="mx-auto max-w-pagina px-marge pb-seccio">
          <Divider className="mb-seccio" />
          <h2 id="catalunya-titol" className="max-w-[18ch]">
            Un petit territori.{" "}
            <em>Una infinitat de maneres de viure&apos;l.</em>
          </h2>
          <div className="mt-16">
            <MapaCatalunya />
          </div>
          <p className="mt-12 text-meta text-oliva">
            Cartografia: Institut Cartogràfic i Geològic de Catalunya (CC BY
            4.0)
          </p>
        </div>
      </section>

      <section id="universos" aria-labelledby="universos-titol">
        <div className="mx-auto max-w-pagina px-marge pb-seccio">
          <Divider className="mb-seccio" />
          <h2 id="universos-titol">Els universos</h2>
          <div className="mt-16">
            <IndexUniversos />
          </div>
        </div>
      </section>

      <div className="bg-bosc text-paper selection:bg-paper selection:text-bosc">
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
          <Divider on="bosc" />
          <div className="flex flex-col gap-3 py-12 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-serif text-h5 font-normal tracking-[0.24em]">
              SOJORN
            </span>
            <span className="text-meta text-pedra-200">
              Una guia d&apos;hotels amb encant a Catalunya.
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
