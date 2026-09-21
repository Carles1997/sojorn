import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema de disseny · Sojorn",
  robots: { index: false, follow: false },
};

const escala = [
  {
    rol: "H1",
    detall: "Spectral 300, de 60 a 120 px",
    classe: "font-serif text-h1",
    mostra: "Dormir en un destí.",
  },
  {
    rol: "H2",
    detall: "Spectral 300, de 44 a 68 px",
    classe: "font-serif text-h2",
    mostra: "Catalunya és molt més que una destinació.",
  },
  {
    rol: "H3",
    detall: "Spectral 400, de 34 a 48 px",
    classe: "font-serif text-h3",
    mostra: "No tots els hotels poden ser Sojorn.",
  },
  {
    rol: "H4",
    detall: "Spectral 400, de 26 a 32 px",
    classe: "font-serif text-h4",
    mostra: "Per què l'hem seleccionat",
  },
  {
    rol: "H5",
    detall: "Geist 500, 18 px",
    classe: "font-sans text-h5",
    mostra: "Empordà, Garrotxa i Priorat",
  },
  {
    rol: "H6",
    detall: "Geist 600, 16 px",
    classe: "font-sans text-h6",
    mostra: "El nostre criteri",
  },
  {
    rol: "Entradeta",
    detall: "Spectral cursiva, de 22 a 26 px",
    classe: "font-serif italic text-entradeta max-w-[40ch]",
    mostra:
      "Una antiga casa pairal entre vinyes on l'arquitectura, la cuina i el paisatge expliquen el mateix territori.",
  },
  {
    rol: "Cos",
    detall: "Geist 400, 16 px, interlineat 1,7",
    classe: "text-cos text-oliva max-w-mesura",
    mostra:
      "En un món on tot es pot reservar, comparar i valorar, creiem que encara hi ha espai per al criteri. Per això Sojorn no busca tenir la selecció més gran. Busca tenir la selecció adequada.",
  },
  {
    rol: "Interfície",
    detall: "Geist 500, 15 px",
    classe: "text-ui",
    mostra: "Sol·licitar disponibilitat",
  },
  {
    rol: "Metadades",
    detall: "Geist 400, 13 px",
    classe: "text-meta text-oliva",
    mostra: "Empordà · Girona",
  },
];

const colors = [
  { nom: "Paper", hex: "#F8F4EC", us: "Fons global", classe: "bg-paper border" },
  { nom: "Verd bosc", hex: "#262C1F", us: "Text principal, 13,1:1", classe: "bg-bosc" },
  { nom: "Oliva", hex: "#5A5744", us: "Text secundari, 6,6:1", classe: "bg-oliva" },
  { nom: "Terracota", hex: "#94513A", us: "Accents, 5,5:1", classe: "bg-terracota" },
];

const pedra = [
  { pas: "50", hex: "#EDEBE2", classe: "bg-pedra-50" },
  { pas: "100", hex: "#E4E1D6", classe: "bg-pedra-100" },
  { pas: "200", hex: "#D6D3C6", classe: "bg-pedra-200" },
  { pas: "300", hex: "#C1BEB0", classe: "bg-pedra-300" },
  { pas: "400", hex: "#A6A292", classe: "bg-pedra-400" },
  { pas: "500", hex: "#848072", classe: "bg-pedra-500" },
  { pas: "600", hex: "#6D695B", classe: "bg-pedra-600" },
  { pas: "700", hex: "#565346", classe: "bg-pedra-700" },
  { pas: "800", hex: "#3D3B30", classe: "bg-pedra-800" },
  { pas: "900", hex: "#29261E", classe: "bg-pedra-900" },
];

export default function SistemaPage() {
  return (
    <main className="mx-auto w-full max-w-pagina px-marge">
      <div className="flex items-baseline justify-between border-b py-6">
        <span className="font-serif text-h5 font-normal tracking-[0.24em]">SOJORN</span>
        <span className="text-meta text-oliva">Sistema de disseny</span>
      </div>

      <section className="grid grid-cols-12 gap-x-6 pt-24 pb-seccio">
        <h1 className="col-span-12 lg:col-span-11">
          Dormir en un destí. <em>Viure un territori.</em>
        </h1>
        <p className="col-span-12 mt-16 max-w-[34ch] text-oliva sm:col-span-8 lg:col-span-4 lg:col-start-8">
          Una guia d&apos;hotels amb encant a Catalunya. Cada hotel hi és perquè
          explica alguna cosa del lloc on és.
        </p>
      </section>

      <section className="border-t py-seccio">
        <h2>Escala tipogràfica</h2>
        <dl className="mt-20">
          {escala.map((r) => (
            <div
              key={r.rol}
              className="grid grid-cols-12 gap-x-6 gap-y-3 border-t py-10"
            >
              <dt className="col-span-12 md:col-span-3">
                <span className="block text-ui">{r.rol}</span>
                <span className="block text-meta text-oliva">{r.detall}</span>
              </dt>
              <dd className={`col-span-12 md:col-span-9 ${r.classe}`}>
                {r.mostra}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t py-seccio">
        <h2>Color</h2>
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {colors.map((c) => (
            <figure key={c.nom}>
              <div className={`aspect-[4/5] ${c.classe}`} />
              <figcaption className="mt-4">
                <span className="block text-ui">{c.nom}</span>
                <span className="block text-meta text-oliva">{c.hex}</span>
                <span className="block text-meta text-oliva">{c.us}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className="mt-seccio">Pedra</h3>
        <div className="mt-12 grid grid-cols-5 gap-x-3 gap-y-8 md:grid-cols-10">
          {pedra.map((p) => (
            <figure key={p.pas}>
              <div className={`h-24 ${p.classe}`} />
              <figcaption className="mt-3">
                <span className="block text-meta">{p.pas}</span>
                <span className="block text-meta text-oliva">{p.hex}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
