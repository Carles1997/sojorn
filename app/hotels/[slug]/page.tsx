import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BotoBosc } from "@/components/BotoBosc";
import { Capcalera } from "@/components/Capcalera";
import { Divider } from "@/components/Divider";
import { MarcaDistintiu } from "@/components/home/MarcaDistintiu";
import { Galeria } from "@/components/hotels/Galeria";
import { TargetaHotel } from "@/components/hotels/TargetaHotel";
import { Peu } from "@/components/Peu";
import { criteri, distintiu, territori, univers } from "@/lib/guia";
import { HOTELS, hotelsRelacionats, resum, trobaHotel } from "@/lib/hotels";

export const dynamicParams = false;

export function generateStaticParams() {
  return HOTELS.map((hotel) => ({ slug: hotel.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hotels/[slug]">): Promise<Metadata> {
  const hotel = trobaHotel((await params).slug);
  return hotel ? { title: hotel.nom, description: hotel.frase } : {};
}

export default async function FitxaHotel({ params }: PageProps<"/hotels/[slug]">) {
  const hotel = trobaHotel((await params).slug);
  if (!hotel) notFound();

  const marca = distintiu(hotel.distintiu);
  const lloc = territori(hotel.territori);
  const relacionats = hotelsRelacionats(hotel);
  const totsDelTerritori = relacionats.length > 0 && relacionats.every((h) => h.territori === hotel.territori);
  const { practica } = hotel;
  const domini = new URL(practica.web).hostname;

  return (
    <>
      <Capcalera hotels="seccio" />
      <main className="flex-1">
        <article>
          <header className="mx-auto max-w-pagina px-marge pt-16 md:pt-24">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:items-end">
              <h1 className="col-span-12 lg:col-span-8">{hotel.nom}</h1>
              <dl className="col-span-12 text-meta md:col-span-6 lg:col-span-4 lg:col-start-9 lg:pb-3">
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-t py-3">
                  <dt className="text-oliva">Ubicació</dt>
                  <dd>
                    {hotel.poble}, {hotel.comarca}
                  </dd>
                </div>
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-t py-3">
                  <dt className="text-oliva">Territori</dt>
                  <dd>
                    <Link href={`/hotels?territori=${lloc.id}`} className="underline underline-offset-[0.3em] hover:text-oliva">
                      {lloc.nom}
                    </Link>
                  </dd>
                </div>
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-y py-3">
                  <dt className="text-oliva">Distintiu</dt>
                  <dd className="flex items-center gap-3">
                    <MarcaDistintiu nivell={marca.nivell} contorn={marca.id === "icon"} className="text-oliva" />
                    <span className="tracking-[0.14em] uppercase">{marca.nom}</span>
                  </dd>
                </div>
              </dl>
            </div>

            <p className="mt-10 max-w-[40ch] font-serif text-entradeta italic">{hotel.frase}</p>
            <p className="mt-4 text-meta text-oliva">
              Fitxa d&apos;exemple: l&apos;hotel, els textos i el contacte són ficticis.
            </p>
          </header>

          <figure className="mx-auto mt-12 max-w-pagina px-marge">
            <div className="relative aspect-[4/3] overflow-hidden bg-pedra-100 md:aspect-video">
              <Image
                src={hotel.portada.src}
                alt={hotel.portada.alt}
                fill
                preload
                sizes="(min-width: 1440px) 1310px, 100vw"
                className="foto-editorial object-cover"
              />
            </div>
            <figcaption className="mt-3 text-meta text-oliva">
              Fotografia provisional: {hotel.portada.autor} (Unsplash)
            </figcaption>
          </figure>

          <div className="mx-auto grid max-w-pagina grid-cols-12 gap-x-6 gap-y-20 px-marge py-seccio">
            <section aria-labelledby="essencia" className="col-span-12 lg:col-span-7">
              <h2 id="essencia">L&apos;Essència</h2>
              <div className="mt-10 max-w-[62ch] space-y-6 font-serif text-relat">
                {hotel.essencia.map((paragraf) => (
                  <p key={paragraf.slice(0, 32)}>{paragraf}</p>
                ))}
              </div>
              <p className="mt-10 text-meta text-oliva">Text d&apos;exemple de la redacció de Sojorn</p>
            </section>

            {/* Panell d'informació pràctica: acompanya la lectura a escriptori i acaba en l'enllaç a la web de l'hotel. */}
            <aside
              aria-labelledby="practica"
              className="col-span-12 md:col-span-8 lg:sticky lg:top-10 lg:col-span-4 lg:col-start-9 lg:self-start"
            >
              <h2 id="practica" className="text-h4">
                Informació pràctica
              </h2>
              <dl className="mt-6 border-t">
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b py-3">
                  <dt className="text-meta text-oliva">Adreça</dt>
                  <dd>{practica.adreca}</dd>
                </div>
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b py-3">
                  <dt className="text-meta text-oliva">Telèfon</dt>
                  <dd>
                    <a href={`tel:${practica.telefon.replaceAll(" ", "")}`} className="underline-offset-[0.3em] hover:underline">
                      {practica.telefon}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b py-3">
                  <dt className="text-meta text-oliva">Correu</dt>
                  <dd className="break-words">
                    <a href={`mailto:${practica.correu}`} className="underline-offset-[0.3em] hover:underline">
                      {practica.correu}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b py-3">
                  <dt className="text-meta text-oliva">Web</dt>
                  <dd className="break-words">{domini}</dd>
                </div>
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b py-3">
                  <dt className="text-meta text-oliva">Habitacions</dt>
                  <dd>{practica.habitacions}</dd>
                </div>
                <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b py-3">
                  <dt className="text-meta text-oliva">Obert</dt>
                  <dd>{practica.obertura}</dd>
                </div>
              </dl>
              <a
                href={practica.web}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center bg-bosc px-7 py-3.5 text-ui text-paper transition-colors duration-200 ease-sojorn hover:bg-pedra-800 active:translate-y-px"
              >
                Visita la web de l&apos;hotel
                <span className="sr-only"> (s&apos;obre en una pestanya nova)</span>
              </a>
              <p className="mt-4 max-w-[36ch] text-meta text-oliva">
                Sojorn recomana, no reserva: la reserva es fa directament amb l&apos;hotel. En aquesta fitxa
                d&apos;exemple, la web i el correu són de prova.
              </p>
            </aside>
          </div>

          <section aria-labelledby="criteris" className="mx-auto max-w-pagina px-marge pb-seccio">
            <Divider className="mb-seccio" />
            <div className="grid grid-cols-12 gap-x-6 gap-y-20">
              <div className="col-span-12 lg:col-span-6">
                <h2 id="criteris" className="text-h3">
                  Per què l&apos;hem triat
                </h2>
                <ul className="mt-10 border-t">
                  {hotel.criteris.map(({ id, nota }) => (
                    <li key={id} className="grid gap-2 border-b py-6 md:grid-cols-6 md:gap-6">
                      <h3 className="text-h4 md:col-span-2">{criteri(id).nom}</h3>
                      <p className="max-w-[42ch] text-oliva md:col-span-4 md:pt-1.5">{nota}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <h2 className="text-h3">Els seus universos</h2>
                <ul className="mt-10 border-t">
                  {hotel.universos.map((id) => {
                    const u = univers(id);
                    return (
                      <li key={id} className="border-b py-6">
                        <h3 className="text-h4">
                          <Link
                            href={`/hotels?univers=${u.id}`}
                            aria-label={`${u.nom}: hotels d'aquest univers`}
                            className="underline-offset-[0.18em] hover:underline"
                          >
                            {u.nom}
                          </Link>
                        </h3>
                        <p className="mt-2 max-w-[42ch] text-oliva">{u.text}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="galeria" className="mx-auto max-w-pagina px-marge pb-seccio">
            <Divider className="mb-seccio" />
            <h2 id="galeria" className="text-h3">
              L&apos;hotel en imatges
            </h2>
            <div className="mt-12">
              <Galeria fotografies={hotel.galeria} />
            </div>
          </section>

          {/* Tancament del reportatge en una pàgina de color: la sortida cap a la web de l'hotel. */}
          <section
            aria-labelledby="visita"
            className="bg-bosc text-paper selection:bg-paper selection:text-bosc"
          >
            <div className="mx-auto max-w-pagina px-marge py-seccio-amplia text-center">
              <h2 id="visita" className="mx-auto max-w-[18ch]">
                {hotel.nom}
              </h2>
              <p className="mx-auto mt-6 max-w-[40ch] font-serif text-entradeta italic">
                {hotel.poble}, {hotel.comarca}
              </p>
              <BotoBosc href={practica.web} exterior className="mt-12">
                Visita la web de l&apos;hotel
              </BotoBosc>
              <p className="mx-auto mt-8 max-w-[46ch] text-meta text-pedra-200">
                Sojorn recomana, no reserva: la reserva es fa directament amb l&apos;hotel, a la seva web. En aquesta
                fitxa d&apos;exemple, la web és de prova.
              </p>
            </div>
          </section>
        </article>

        {relacionats.length > 0 ? (
          <section aria-labelledby="relacionats" className="mx-auto max-w-pagina px-marge py-seccio">
            <h2 id="relacionats" className="text-h3">
              {totsDelTerritori ? `Més hotels ${lloc.ambPreposicio}` : "Altres hotels de la guia"}
            </h2>
            <ul className="mt-12 grid gap-x-6 gap-y-16 md:grid-cols-2">
              {relacionats.map((altre) => (
                <li key={altre.slug}>
                  <TargetaHotel
                    hotel={resum(altre)}
                    mida="estandard"
                    format="horitzontal"
                    titol="h3"
                    sizes="(min-width: 1440px) 643px, (min-width: 768px) 50vw, 100vw"
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
      <div className="bg-bosc text-paper selection:bg-paper selection:text-bosc">
        <Peu filet={false} />
      </div>
    </>
  );
}
