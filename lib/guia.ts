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

export type UniversId =
  | "la-taula"
  | "el-paisatge"
  | "la-historia"
  | "el-cami"
  | "el-silenci"
  | "el-romanticisme"
  | "la-terra";

export type Univers = { id: UniversId; nom: string; text: string };

export const UNIVERSOS: readonly Univers[] = [
  { id: "la-taula", nom: "La Taula", text: "Hotels on la gastronomia és part essencial de l'experiència." },
  { id: "el-paisatge", nom: "El Paisatge", text: "Hotels que tenen una relació extraordinària amb el seu entorn." },
  { id: "la-historia", nom: "La Història", text: "Hotels on arquitectura, patrimoni i cultura formen part del viatge." },
  { id: "el-cami", nom: "El Camí", text: "Hotels pensats per sortir, caminar, explorar." },
  { id: "el-silenci", nom: "El Silenci", text: "Hotels per desaparèixer durant un cap de setmana." },
  { id: "el-romanticisme", nom: "El Romanticisme", text: "Hotels per compartir." },
  { id: "la-terra", nom: "La Terra", text: "Hotels profundament vinculats a productors, artesans i producte local." },
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
