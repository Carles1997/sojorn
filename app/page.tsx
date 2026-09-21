import Image from "next/image";
import { BotoBosc } from "@/components/BotoBosc";
import { Divider } from "@/components/Divider";
import { IndexUniversos } from "@/components/home/IndexUniversos";
import { MapaCatalunya } from "@/components/home/MapaCatalunya";
import { MarcaDistintiu } from "@/components/home/MarcaDistintiu";
import { Peu } from "@/components/Peu";
import { CRITERIS as criteris, DISTINTIUS as distintius } from "@/lib/guia";

// Fotografia provisional: Ben Steele, Torroja del Priorat (Unsplash License).
// https://unsplash.com/photos/zZcvA-y90bY. Substituir per fotografia pròpia.
const HERO_SRC =
  "https://images.unsplash.com/photo-1515348961751-c17112eca1fd?fm=jpg&q=75&w=2400&fit=crop";

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
            Dormir en un destí. Viure un territori.
          </p>
          <BotoBosc href="#catalunya" className="mt-12 animate-entrada [animation-delay:300ms]">
            Descobreix la selecció
          </BotoBosc>
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
            <p className="mt-6 max-w-[42ch] font-bold">
              Catalunya és una terra de contrastos. De paisatges que canvien,
              de pobles que guarden històries, de gastronomia que parla de la
              seva terra i de persones que mantenen viva una manera de fer.
            </p>
            <p className="mt-6 max-w-[42ch] text-pedra-200">
              Entre aquests paisatges hi ha hotels amb una identitat pròpia.
              Llocs que no només acullen, sinó que formen part del territori
              que els envolta.
            </p>
            <p className="mt-6 max-w-[42ch] font-bold">
              Sojorn neix per descobrir-los, seleccionar-los i posar-los en
              valor.
            </p>
            <p className="mt-6 max-w-[42ch] text-pedra-200">
              Una selecció d&apos;hotels amb encant, escollits pel seu caràcter,
              la seva hospitalitat i la seva manera d&apos;entendre i viure les
              experiències basades en el territori català.
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
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:items-end">
            <h2 id="guia-titol" className="col-span-12 max-w-[18ch] lg:col-span-6">
              No som una llista d&apos;hotels.{" "}
              <em>Som criteri i referència.</em>
            </h2>
            <div className="col-span-12 max-w-[46ch] space-y-3 text-oliva lg:col-span-5 lg:col-start-8">
              <p>
                En un món on tot es pot comparar, creiem que encara hi ha lloc per
                al criteri.
              </p>
              <p>
                Sojorn neix precisament per això: per mirar, descobrir i
                seleccionar amb criteri.
              </p>
              <p>
                No volem reunir-ho tot. Volem reunir allò que mereix ser
                descobert.
              </p>
              <p>
                Hotels amb identitat, arrels i una manera pròpia de viure el
                territori.
              </p>
            </div>
          </div>

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
                        mida="h-8"
                        className="text-oliva"
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
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-4">
              <h2 id="universos-titol">Els universos</h2>
              <p className="mt-6 font-serif text-entradeta italic">
                Maneres de viure el territori
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <IndexUniversos />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-bosc text-paper selection:bg-paper selection:text-bosc">
        <section aria-label="La idea central">
          <div className="mx-auto max-w-pagina px-marge py-seccio-amplia">
            <p className="mx-auto max-w-[24ch] text-center font-serif text-h2 text-balance">
              No seleccionem hotels només perquè són bons.{" "}
              <em>
                Els seleccionem perquè expliquen alguna cosa del lloc on són.
              </em>
            </p>
          </div>
        </section>

        <Peu />
      </div>
    </main>
  );
}
