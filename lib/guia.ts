import type { TerritoriId } from "@/components/home/mapa-catalunya-data";
import { TERRITORIS } from "@/components/home/territoris";

// Vocabulari de la guia: una sola font per a la home, el directori i les fitxes d'hotel.

export type CriteriId = "identitat" | "hospitalitat" | "territori" | "autenticitat" | "excellencia" | "compromis";

export type Criteri = { id: CriteriId; nom: string; text: string };

export const CRITERIS: readonly Criteri[] = [
  {
    id: "identitat",
    nom: "Identitat",
    text: "Hotels amb personalitat pròpia, arquitectura, història o una manera singular d'entendre l'hospitalitat.",
  },
  {
    id: "hospitalitat",
    nom: "Hospitalitat",
    text: "Espais on el servei, l'atenció i els petits detalls formen part de l'experiència.",
  },
  {
    id: "territori",
    nom: "Territori",
    text: "Hotels profundament connectats amb el lloc on es troben.",
  },
  {
    id: "autenticitat",
    nom: "Autenticitat",
    text: "Experiències i propostes que neixen del territori i no simplement es reprodueixen.",
  },
  {
    id: "excellencia",
    nom: "Excel·lència",
    text: "Un estàndard de qualitat que justifica formar part de la selecció.",
  },
  {
    id: "compromis",
    nom: "Compromís",
    text: "Respecte pel paisatge, la cultura, el producte local i l'entorn.",
  },
];

export type UniversId = "la-taula" | "la-historia" | "el-cami" | "la-familia";

export type Univers = {
  id: UniversId;
  nom: string;
  /** Subtítol: què s'hi fa amb el territori. */
  lema: string;
  text: string;
  /** Fotografia provisional que es veu a la cara posterior de la targeta de la home. */
  imatge: { src: string; alt: string; autor: string; font: string };
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?fm=jpg&q=80&w=1600&fit=crop`;

export const UNIVERSOS: readonly Univers[] = [
  {
    id: "la-taula",
    nom: "La Taula",
    lema: "Menjar el territori",
    text: "Gastronomia, vins, producte local, restaurants i productors.",
    imatge: {
      src: unsplash("photo-1586718520704-f7f9db04b8c0"),
      alt: "Taula parada amb plats, copes de vidre i llimones al sol.",
      autor: "Guillaume de Germain",
      font: "https://unsplash.com/photos/f6QoaTtdyGw",
    },
  },
  {
    id: "la-historia",
    nom: "La Història",
    lema: "Entendre el territori",
    text: "Patrimoni, arquitectura i cultura.",
    imatge: {
      src: unsplash("photo-1722009930817-12b6785aa9da"),
      alt: "Casa de pedra amb un portal en arc i un xiprer, en una vila medieval de l'Empordà.",
      autor: "Manuel Torres Garcia",
      font: "https://unsplash.com/photos/bfMQHeOjAOk",
    },
  },
  {
    id: "el-cami",
    nom: "El Camí",
    lema: "Descobrir el territori",
    text: "Rutes, excursions, activitats, senderisme i exploració.",
    imatge: {
      src: unsplash("photo-1722603669978-d624fb1b785e"),
      alt: "Camí de terra entre els faigs de la Fageda d'en Jordà, amb la llum filtrant-se per les fulles.",
      autor: "Enric Domas",
      font: "https://unsplash.com/photos/JEush3vuaUU",
    },
  },
  {
    id: "la-familia",
    nom: "La Família",
    lema: "Compartir el territori",
    text: "Plans, natura, aventures i experiències per viure en família.",
    imatge: {
      src: unsplash("photo-1752650144007-fbe5ca331b06"),
      alt: "Un pare i el seu fill caminen d'esquena per un bosc, amb motxilles.",
      autor: "Vitaly Gariev",
      font: "https://unsplash.com/photos/Lj5IVNEnmVI",
    },
  },
];

export type DistintiuId = "selection" | "signature" | "icon";

export type Distintiu = {
  id: DistintiuId;
  /** Nombre de marques ✦. */
  nivell: 1 | 2 | 3;
  nom: string;
  /** Nom sense la marca, per als filtres. */
  curt: string;
  text: string;
};

export const DISTINTIUS: readonly Distintiu[] = [
  { id: "selection", nivell: 1, nom: "Sojorn Selection", curt: "Selection", text: "Hotel seleccionat per Sojorn." },
  {
    id: "signature",
    nivell: 2,
    nom: "Sojorn Signature",
    curt: "Signature",
    text: "Un hotel especialment singular per la seva identitat, hospitalitat i vinculació amb el territori.",
  },
  {
    id: "icon",
    nivell: 3,
    nom: "Sojorn Icon",
    curt: "Icon",
    text: "Hotels extraordinaris que representen una experiència excepcional dins del territori català.",
  },
];

export type TerritoriGuia = { id: TerritoriId; nom: string; ambPreposicio: string };

export const TERRITORIS_GUIA: readonly TerritoriGuia[] = TERRITORIS.map(({ id, nom, ambPreposicio }) => ({
  id,
  nom,
  ambPreposicio,
}));

function troba<T extends { id: string }>(llista: readonly T[], id: T["id"]): T {
  const element = llista.find((e) => e.id === id);
  if (!element) throw new Error(`Identificador desconegut: ${id}`);
  return element;
}

export const criteri = (id: CriteriId) => troba(CRITERIS, id);
export const univers = (id: UniversId) => troba(UNIVERSOS, id);
export const distintiu = (id: DistintiuId) => troba(DISTINTIUS, id);
export const territori = (id: TerritoriId) => troba(TERRITORIS_GUIA, id);
