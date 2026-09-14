import type { Territori } from "./MapaInteractiu";

// Dades dels territoris del mapa de Catalunya.
// Fotografies provisionals d'Unsplash (Unsplash License), triades per ubicació verificada a la
// fitxa de cada foto. Substituir per fotografia pròpia. Cada imatge porta la seva procedència.

const unsplash = (id: string) => `https://images.unsplash.com/${id}?fm=jpg&q=80&w=1600&fit=crop`;

export const TERRITORIS: Territori[] = [
  {
    id: "emporda",
    nom: "Empordà",
    ambPreposicio: "a l'Empordà",
    comarques: "Alt Empordà i Baix Empordà",
    text: "Mar, vinyes, pedra i una cuina que mira al Mediterrani.",
    imatge: {
      src: unsplash("photo-1751240261891-c0176aff0592"),
      alt: "Cadaqués: cases blanques i l'església davant del mar, amb la muntanya al darrere.",
      autor: "Lucas Gallone",
      font: "https://unsplash.com/photos/FRnm7ggPjSI",
    },
  },
  {
    id: "garrotxa",
    nom: "Garrotxa",
    ambPreposicio: "a la Garrotxa",
    comarques: "Garrotxa",
    text: "Volcans, fagedes, pobles de pedra i una gastronomia arrelada.",
    imatge: {
      src: unsplash("photo-1722603669978-d624fb1b785e"),
      alt: "Camí de terra entre els faigs de la Fageda d'en Jordà, amb la llum filtrant-se per les fulles.",
      autor: "Enric Domas",
      font: "https://unsplash.com/photos/JEush3vuaUU",
    },
  },
  {
    id: "pirineus",
    nom: "Pirineus",
    ambPreposicio: "als Pirineus",
    comarques: "Val d'Aran, Alta Ribagorça, Pallars, Alt Urgell i Cerdanya",
    text: "Muntanya, silenci, romànic i camins.",
    imatge: {
      src: unsplash("photo-1680889353087-054c987bba00"),
      alt: "Vall de muntanya vista des de Taüll, amb pobles i prats al fons de la vall.",
      autor: "Xavi Serra",
      font: "https://unsplash.com/photos/ob2B4SifgoE",
    },
  },
  {
    id: "priorat",
    nom: "Priorat",
    ambPreposicio: "al Priorat",
    comarques: "Priorat",
    text: "Vinyes impossibles, pedra seca i paisatges que expliquen el vi.",
    imatge: {
      src: unsplash("photo-1578235809718-336da2f924b1"),
      alt: "Siurana dalt de la cinglera, amb l'església i la boira omplint la vall.",
      autor: "Daniel Born",
      font: "https://unsplash.com/photos/lNX0jgPgslE",
    },
  },
  {
    id: "penedes",
    nom: "Penedès",
    ambPreposicio: "al Penedès",
    comarques: "Alt Penedès, Baix Penedès i Garraf",
    text: "Una terra de vinyes, cava i cultura vitivinícola.",
    imatge: {
      src: unsplash("photo-1630402333546-904c67af15c7"),
      alt: "Bótes de fusta apilades en un celler de cava de Sant Sadurní d'Anoia.",
      autor: "Anna Murzilon",
      font: "https://unsplash.com/photos/El2NMQd2jLI",
    },
  },
  {
    id: "ebre",
    nom: "Terres de l'Ebre",
    ambPreposicio: "a les Terres de l'Ebre",
    comarques: "Baix Ebre, Montsià, Ribera d'Ebre i Terra Alta",
    text: "Riu, delta, arrossars, mar i una identitat pròpia.",
    imatge: {
      src: unsplash("photo-1569878726479-3db8ae5b792f"),
      alt: "Flamencs a l'aigua del delta de l'Ebre.",
      autor: "Santiago Lacarta",
      font: "https://unsplash.com/photos/nNMtkGE7_Tg",
    },
  },
];
