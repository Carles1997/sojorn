import type { TerritoriId } from "@/components/home/mapa-catalunya-data";
import type { CriteriId, DistintiuId, UniversId } from "@/lib/guia";

// Hotels d'exemple. Són ficticis: pobles reals, però noms, textos, adreces i contacte inventats, i
// web i correu en el domini reservat .example. Es marquen com a exemple al directori i a cada fitxa.
// Fotografies provisionals d'Unsplash (Unsplash License), amb autor i pàgina d'origen.
// Substituir per la selecció real, amb textos signats i fotografia pròpia.

export type Fotografia = {
  src: string;
  /** Descriu el que es veu, sense afirmar-ne la ubicació si la foto no la verifica. */
  alt: string;
  autor: string;
  font: string;
};

export type Hotel = {
  slug: string;
  nom: string;
  poble: string;
  comarca: string;
  territori: TerritoriId;
  distintiu: DistintiuId;
  /** Frase d'una línia sobre l'essència de l'allotjament. */
  frase: string;
  /** Relat d'autor: per què és Sojorn, la seva història i el vincle amb el territori. */
  essencia: string[];
  /** Els criteris Sojorn que més el defineixen, amb una nota pròpia de l'hotel. */
  criteris: { id: CriteriId; nota: string }[];
  universos: UniversId[];
  portada: Fotografia;
  /** De tres a cinc fotografies. */
  galeria: Fotografia[];
  practica: {
    adreca: string;
    telefon: string;
    correu: string;
    web: string;
    habitacions: number;
    obertura: string;
  };
};

export type HotelResum = Pick<
  Hotel,
  "slug" | "nom" | "poble" | "comarca" | "territori" | "distintiu" | "frase" | "universos" | "portada"
>;

const foto = (id: string, pagina: string, autor: string, alt: string): Fotografia => ({
  src: `https://images.unsplash.com/${id}?fm=jpg&q=80&w=2400&fit=crop`,
  alt,
  autor,
  font: `https://unsplash.com/photos/${pagina}`,
});

const TELEFON_EXEMPLE = "+34 000 000 000";

export const HOTELS: Hotel[] = [
  {
    slug: "mas-de-les-feixes",
    nom: "Mas de les Feixes",
    poble: "Gratallops",
    comarca: "Priorat",
    territori: "priorat",
    distintiu: "signature",
    frase: "Dormir entre feixes de llicorella i vinya vella.",
    essencia: [
      "El mas s'aixeca al capdamunt d'un coster de llicorella, a vint minuts a peu de Gratallops. La família que el porta hi fa vi des de fa quatre generacions i fa deu anys va obrir sis habitacions a l'antic paller, sense tocar ni una pedra de les feixes que l'envolten.",
      "L'hem triat perquè aquí el Priorat no s'explica: es camina. Cada matí es pot acompanyar la feina a la vinya, i al vespre el sopar es fa amb el que dona l'hort i amb vins que no surten de la comarca. És un hotel petit que no vol semblar més gran.",
      "El vincle amb el territori és literal: les parets són de la mateixa pedra seca que aguanta els marges, l'aigua ve de la mina del mas i els hostes comparteixen taula amb qui treballa la terra. Anar-hi és entendre per què el Priorat té un paisatge que explica el vi.",
    ],
    criteris: [
      { id: "territori", nota: "La casa, les feixes i el vi formen un sol paisatge." },
      { id: "autenticitat", nota: "La feina del celler marca el ritme de l'estada, no un programa pensat per a visitants." },
      { id: "compromis", nota: "Cultiu ecològic, pedra seca restaurada i producte de la comarca a la taula." },
    ],
    universos: ["la-taula", "el-cami"],
    portada: foto(
      "photo-1767034239002-186c18d67b9b",
      "GyT8fcg72Qk",
      "Alexis Presa",
      "Vinya amb muntanyes al fons sota un cel ennuvolat.",
    ),
    galeria: [
      foto("photo-1588961276207-f5b36cedfb91", "SJ6ch9uVRQU", "Hayffield L", "Fulles de cep en primer pla, en una vinya de terra clara."),
      foto(
        "photo-1680565591254-254d314d22eb",
        "nBbT8LIgIjk",
        "Gus Tav",
        "Cingleres del Montsant sobre el bosc, prop de Cornudella de Montsant.",
      ),
      foto(
        "photo-1578235809718-336da2f924b1",
        "lNX0jgPgslE",
        "Daniel Born",
        "Siurana dalt de la cinglera, amb l'església i la boira omplint la vall.",
      ),
    ],
    practica: {
      adreca: "Camí dels Costers, s/n · 43737 Gratallops",
      telefon: TELEFON_EXEMPLE,
      correu: "hola@mas-de-les-feixes.example",
      web: "https://mas-de-les-feixes.example",
      habitacions: 6,
      obertura: "De març a desembre",
    },
  },
  {
    slug: "borda-de-l-obaga",
    nom: "Borda de l'Obaga",
    poble: "Taüll",
    comarca: "Alta Ribagorça",
    territori: "pirineus",
    distintiu: "selection",
    frase: "Una borda de pedra i llosa a la vall de Boí.",
    essencia: [
      "La borda era un estable de muntanya a la banda obaga de la vall, per sobre de Taüll. Se n'ha conservat la pedra, la llosa de la teulada i les bigues de fusta; a dins hi ha vuit habitacions senzilles, una llar de foc i un menjador que mira cap al campanar de Sant Climent.",
      "L'hem triat per la manera com entén la muntanya: sense pressa ni artifici. Els amfitrions coneixen cada camí de la vall i ajuden a triar la ruta segons el temps i les cames, de l'estany més proper a les travesses cap a Aigüestortes.",
      "És un lloc per caminar de dia i callar de nit. El romànic de la vall és a un passeig, l'esmorzar es fa amb formatges i embotits del Pallars i l'Alta Ribagorça, i quan cau la fosca no se sent res més que el riu.",
    ],
    criteris: [
      { id: "territori", nota: "Arquitectura de muntanya recuperada amb els materials de la mateixa vall." },
      { id: "hospitalitat", nota: "Els amfitrions preparen cada sortida amb els hostes, com qui recomana un camí a un amic." },
      { id: "identitat", nota: "Vuit habitacions, cap televisor i una llar de foc que fa de sala d'estar." },
    ],
    universos: ["el-cami", "la-historia"],
    portada: foto(
      "photo-1680889353087-054c987bba00",
      "ob2B4SifgoE",
      "Xavi Serra",
      "Vall de muntanya vista des de Taüll, amb pobles i prats al fons de la vall.",
    ),
    galeria: [
      foto(
        "photo-1627875984087-ceadf7ccb9a1",
        "eUgnhNXG3eQ",
        "Eduard Trott",
        "Estany d'alta muntanya entre roques i clapes de neu al Parc Nacional d'Aigüestortes.",
      ),
      foto(
        "photo-1609422087072-c15c8390f1a1",
        "Zv4VikaKI4k",
        "Raoul du Plessis",
        "Església de pedra sobre una vall dels Pirineus.",
      ),
      foto("photo-1666475877607-ec1cec593b19", "57H17qB5upw", "Seval Torun", "Pa llescat, olives i un ganivet sobre una post de fusta."),
    ],
    practica: {
      adreca: "Barri de l'Obaga, s/n · 25528 Taüll",
      telefon: TELEFON_EXEMPLE,
      correu: "hola@borda-obaga.example",
      web: "https://borda-obaga.example",
      habitacions: 8,
      obertura: "De juny a octubre i de desembre a abril",
    },
  },
  {
    slug: "cal-portaler",
    nom: "Cal Portaler",
    poble: "Peratallada",
    comarca: "Baix Empordà",
    territori: "emporda",
    distintiu: "signature",
    frase: "Una casa medieval dins el recinte emmurallat.",
    essencia: [
      "Cal Portaler ocupa tres cases unides dins del nucli medieval de Peratallada, a tocar d'un dels antics portals de la muralla. Les voltes de pedra, l'escala de cargol i els finestrals gòtics s'han restaurat amb ofici, i cadascuna de les nou habitacions té la seva pròpia història.",
      "L'hem triat perquè entén el patrimoni com una cosa viva, no com un decorat. La restauració ha deixat a la vista el que la casa ha estat durant set segles, i la vida del poble entra per les finestres: les campanes, el mercat, les converses a la plaça.",
      "La cuina mira a l'Empordà de terra endins: arròs de Pals, verdures de l'horta del Daró i l'oli dels olivers de la plana. Al vespre, quan els visitants del dia ja han marxat, els carrers de pedra tornen a ser dels qui s'hi queden a dormir.",
    ],
    criteris: [
      { id: "identitat", nota: "Set segles d'història llegibles a cada paret, sense convertir la casa en un museu." },
      { id: "excellencia", nota: "Restauració feta amb artesans de la comarca i un servei atent a cada detall." },
      { id: "territori", nota: "Producte de l'Empordà i del Baix Ter a la taula, amb nom i procedència." },
    ],
    universos: ["la-historia", "la-taula"],
    portada: foto(
      "photo-1722009930817-12b6785aa9da",
      "bfMQHeOjAOk",
      "Manuel Torres Garcia",
      "Casa de pedra amb un portal en arc i un xiprer, en una vila medieval de l'Empordà.",
    ),
    galeria: [
      foto(
        "photo-1722009931033-2b2633c95a78",
        "v_SLNrUe4IA",
        "Manuel Torres Garcia",
        "Carreró de pedra amb un arc, en una vila medieval de l'Empordà.",
      ),
      foto(
        "photo-1507038772120-7fff76f79d79",
        "KTSYy-3XVSo",
        "Man Pan",
        "Habitació de parets de pedra i sostre de bigues de fusta, amb llits i butaques.",
      ),
      foto(
        "photo-1702299033514-17a00cf2b7cd",
        "x4PZLEsbGGw",
        "Laura Agustí",
        "Camps i fileres d'arbres entre la boira de l'alba a Viladamat, a l'Alt Empordà.",
      ),
      foto(
        "photo-1586718520704-f7f9db04b8c0",
        "f6QoaTtdyGw",
        "Guillaume de Germain",
        "Taula parada amb plats, copes de vidre i llimones al sol.",
      ),
    ],
    practica: {
      adreca: "Nucli antic · 17113 Peratallada",
      telefon: TELEFON_EXEMPLE,
      correu: "hola@cal-portaler.example",
      web: "https://cal-portaler.example",
      habitacions: 9,
      obertura: "Tot l'any",
    },
  },
  {
    slug: "casa-de-l-era",
    nom: "Casa de l'Era",
    poble: "Bellver de Cerdanya",
    comarca: "Cerdanya",
    territori: "pirineus",
    distintiu: "icon",
    frase: "Silenci, llum de la Cerdanya i una taula d'autor.",
    essencia: [
      "La casa és una antiga masoveria de pedra i fusta aixecada sobre una era, amb la plana de la Cerdanya als peus i el Cadí al davant. Només té cinc habitacions, repartides entre la casa principal i el paller, i totes s'obren a la vall amb un gran finestral.",
      "La distingim amb el distintiu Icon perquè és un cas molt especial: tot hi està pensat perquè l'estada sigui un parèntesi. La cuina, petita i d'autor, treballa amb pagesos i ramaders de la vall, i el menú canvia segons el que arriba cada setmana.",
      "Aquí el luxe és l'espai i el temps. No hi ha horaris per a l'esmorzar ni cap soroll que no sigui el vent, i els amfitrions saben quan cal ser-hi i quan cal deixar els hostes sols davant de la muntanya.",
    ],
    criteris: [
      { id: "excellencia", nota: "Cinc habitacions, una cuina d'autor i un servei que s'anticipa sense fer-se notar." },
      { id: "hospitalitat", nota: "Cada estada s'acorda abans amb els hostes, del menú a les excursions." },
      { id: "compromis", nota: "Energia renovable, ramaderia de la vall i una arquitectura que no altera el paisatge." },
    ],
    universos: ["la-taula", "la-familia"],
    portada: foto(
      "photo-1590384107202-7fa9192e19bd",
      "AZ6UnwJiAO4",
      "Josep Plans",
      "Cases de pedra amb teulada de pissarra al costat d'una carretera entre arbres.",
    ),
    galeria: [
      foto(
        "photo-1689781307118-030db9290d38",
        "z9MAxYlXv3s",
        "Steffen Lemmerzahl",
        "Taula parada per a un àpat sota una pèrgola.",
      ),
      foto(
        "photo-1773268083625-a3f5af095c30",
        "hp008kg31e8",
        "Natalia Gusakova",
        "Cases de teulada vermella en una vall de muntanya boscosa.",
      ),
      foto("photo-1626207655952-5db77d40065e", "OGK_Nte29pY", "Polina Kocheva", "Vall de muntanya amb prats verds i una cabana de pedra."),
    ],
    practica: {
      adreca: "Veïnat de l'Era, s/n · 25720 Bellver de Cerdanya",
      telefon: TELEFON_EXEMPLE,
      correu: "hola@casa-era.example",
      web: "https://casa-era.example",
      habitacions: 5,
      obertura: "Tot l'any, excepte el novembre",
    },
  },
  {
    slug: "mas-de-la-fageda",
    nom: "Mas de la Fageda",
    poble: "Santa Pau",
    comarca: "Garrotxa",
    territori: "garrotxa",
    distintiu: "selection",
    frase: "Un mas de pedra entre volcans i fagedes.",
    essencia: [
      "El mas és a la carretera vella d'Olot a Santa Pau, envoltat de camps de fajol i a tocar dels camins que porten a la Fageda d'en Jordà. La casa, del segle XVIII, té set habitacions de parets gruixudes i una galeria on s'esmorza mirant el volcà.",
      "L'hem triat per la seva manera de rebre: sense protocols, amb el fogó sempre encès i consells sobre quins camins fer segons l'estació. És una casa familiar on el temps es mesura per les passejades.",
      "La Garrotxa hi entra per la cuina, amb fesols de Santa Pau, farina de fajol i embotits del Collsacabra, i per les finestres, que donen a boscos que canvien de color cada mes.",
    ],
    criteris: [
      { id: "territori", nota: "Al cor del Parc Natural de la Zona Volcànica, amb els camins sortint de la porta." },
      { id: "autenticitat", nota: "Receptes de la Garrotxa fetes amb el producte dels veïns." },
      { id: "hospitalitat", nota: "Una casa familiar on els amfitrions coneixen cada racó de la comarca." },
    ],
    universos: ["el-cami", "la-taula"],
    portada: foto(
      "photo-1755728864075-b13c44157d81",
      "Sg4pIJBfLhE",
      "Alba Calbetó",
      "Casa rústica de pedra amb una zona per seure a fora.",
    ),
    galeria: [
      foto(
        "photo-1722603669978-d624fb1b785e",
        "JEush3vuaUU",
        "Enric Domas",
        "Camí de terra entre els faigs de la Fageda d'en Jordà, amb la llum filtrant-se per les fulles.",
      ),
      foto(
        "photo-1755728864125-c0585f969e8b",
        "sgOrwJDrTiE",
        "Alba Calbetó",
        "Roba estesa al costat d'una casa de pedra.",
      ),
      foto(
        "photo-1767741737493-9a82868c198d",
        "o0qFtQ2MYF0",
        "Gabriel Tesserolli",
        "Llit de ferro, tauleta de nit amb un llum i una paret de pedra.",
      ),
      foto(
        "photo-1682008640245-c38c5e261161",
        "KZPJbeCAwEU",
        "Jesus Esteban",
        "Castellfollit de la Roca, amb les cases al caire de la cinglera i el bosc al voltant.",
      ),
    ],
    practica: {
      adreca: "Veïnat de la Fageda, s/n · 17811 Santa Pau",
      telefon: TELEFON_EXEMPLE,
      correu: "hola@mas-fageda.example",
      web: "https://mas-fageda.example",
      habitacions: 7,
      obertura: "Tot l'any",
    },
  },
  {
    slug: "la-barraca-de-l-illa",
    nom: "La Barraca de l'Illa",
    poble: "Deltebre",
    comarca: "Baix Ebre",
    territori: "ebre",
    distintiu: "selection",
    frase: "Arrossars, aigua i cel obert al delta de l'Ebre.",
    essencia: [
      "La casa segueix la tipologia de les barraques del delta: parets blanques, planta baixa i una coberta alta. És enmig dels arrossars, a pocs quilòmetres de la desembocadura, i només té quatre habitacions que miren a l'aigua.",
      "L'hem triat perquè ensenya el delta com un paisatge viu i fràgil. Els amfitrions, fills de pagesos de l'arròs, expliquen el cicle de l'aigua als camps i organitzen sortides en bicicleta i en barca per veure les aus a primera hora.",
      "Al capvespre, el cel s'encén sobre les llacunes i el silenci només es trenca amb el vol dels flamencs. Tot el que es menja surt del delta: arròs, anguila, llagostins i verdures de l'horta.",
    ],
    criteris: [
      { id: "territori", nota: "Arquitectura tradicional del delta enmig dels arrossars." },
      { id: "compromis", nota: "Un allotjament de baix impacte dins d'un espai natural protegit." },
      { id: "autenticitat", nota: "Sortides guiades per gent que viu i treballa el delta." },
    ],
    universos: ["el-cami", "la-familia"],
    portada: foto("photo-1650964942113-2f09d93c8263", "X2EWH3WornU", "Colin + Meg", "Casa blanca enmig d'un aiguamoll."),
    galeria: [
      foto("photo-1569878726479-3db8ae5b792f", "nNMtkGE7_Tg", "Santiago Lacarta", "Flamencs a l'aigua del delta de l'Ebre."),
      foto(
        "photo-1666632535036-4509792e0bc3",
        "BUIwDHHfiD8",
        "Jordi Vich Navarro",
        "Aiguamolls i núvols al capvespre a la platja del Trabucador, al delta de l'Ebre.",
      ),
      foto("photo-1650964884695-6fb6c00cf7e4", "xSoyc-0OYEk", "Colin + Meg", "Posta de sol sobre una llacuna."),
    ],
    practica: {
      adreca: "Partida de l'Illa, s/n · 43580 Deltebre",
      telefon: TELEFON_EXEMPLE,
      correu: "hola@barraca-illa.example",
      web: "https://barraca-illa.example",
      habitacions: 4,
      obertura: "De març a novembre",
    },
  },
  {
    slug: "casa-tramuntana",
    nom: "Casa Tramuntana",
    poble: "Cadaqués",
    comarca: "Alt Empordà",
    territori: "emporda",
    distintiu: "selection",
    frase: "Una casa blanca oberta a la badia de Cadaqués.",
    essencia: [
      "La casa és una antiga residència de pescadors, blanca i estreta, amb vistes a la badia i al campanar de Santa Maria. Té sis habitacions de sostres de canya, persianes verdes i una terrassa on el vent dona nom a la casa.",
      "L'hem triat per la seva manera de viure Cadaqués: a peu, lluny dels cotxes i al ritme del mar. Els amfitrions recomanen cales on arribar caminant pel Cap de Creus i restaurants on encara es cuina el peix del dia.",
      "És una casa per compartir: esmorzars llargs a la terrassa, capvespres a les roques i nits en què, si bufa la tramuntana, el cel queda net com enlloc més de la costa.",
    ],
    criteris: [
      { id: "identitat", nota: "Arquitectura de poble mariner cuidada fins a l'últim detall." },
      { id: "territori", nota: "El Cap de Creus a peu des de la porta de casa." },
      { id: "hospitalitat", nota: "Recomanacions personals que fan de l'estada una manera de viure el poble." },
    ],
    universos: ["el-cami", "la-familia"],
    portada: foto(
      "photo-1751240261891-c0176aff0592",
      "FRnm7ggPjSI",
      "Lucas Gallone",
      "Cadaqués: cases blanques i l'església davant del mar, amb la muntanya al darrere.",
    ),
    galeria: [
      foto(
        "photo-1761591671882-b1c7b84bd0d6",
        "o_WQ-oSKmcw",
        "Caroline Badran",
        "Capçal de fusta, tauleta de nit i un llum penjant davant d'una paret de roca.",
      ),
      foto(
        "photo-1643068479014-2606af0e84d6",
        "Z6PWdg9RsCg",
        "Nahima Aparicio",
        "Habitació amb un llit de coixins blancs, cortines i una paret de pedra.",
      ),
      foto(
        "photo-1714836986273-9a62b37f55fa",
        "5y71Otj5xek",
        "Clay Banks",
        "Taula de fusta amb plats blancs, una espelma i cadires.",
      ),
    ],
    practica: {
      adreca: "Barri vell · 17488 Cadaqués",
      telefon: TELEFON_EXEMPLE,
      correu: "hola@casa-tramuntana.example",
      web: "https://casa-tramuntana.example",
      habitacions: 6,
      obertura: "D'abril a octubre",
    },
  },
  {
    slug: "cal-vinyater",
    nom: "Cal Vinyater",
    poble: "Sant Martí Sarroca",
    comarca: "Alt Penedès",
    territori: "penedes",
    distintiu: "selection",
    frase: "Una masia entre vinyes, al ritme de la verema.",
    essencia: [
      "Cal Vinyater és una masia del segle XIX envoltada de vinyes, amb un porxo on es pren la fresca al capvespre i una bassa convertida en piscina. Té deu habitacions i un petit celler on encara es fa vi amb el raïm de la finca.",
      "L'hem triat perquè connecta els hostes amb la cultura del vi del Penedès sense convertir-la en espectacle. Hi ha tastos al celler, passejades entre ceps i, per la verema, la possibilitat de collir el raïm amb la família.",
      "La taula és de mercat: xató a l'hivern, verdures de l'hort a l'estiu i vins i caves de productors veïns. Des de la masia, els pobles del Penedès i els cellers de Sant Sadurní són a pocs minuts.",
    ],
    criteris: [
      { id: "autenticitat", nota: "Una finca vinícola en funcionament, no una ambientació." },
      { id: "territori", nota: "La cultura del vi i del cava del Penedès, explicada per qui la fa." },
      { id: "compromis", nota: "Vinya en conversió ecològica i proveïdors del mateix territori." },
    ],
    universos: ["la-taula", "la-familia"],
    portada: foto(
      "photo-1707391032355-b86fb9cc4af6",
      "SnFyMiDhSSs",
      "Ferran Buireu",
      "Porxo d'una masia catalana amb un banc i testos.",
    ),
    galeria: [
      foto(
        "photo-1598984040564-39a31d2cd1c2",
        "BNd-aD8HjXU",
        "Aleix Ventayol",
        "Fileres de vinya vistes des de l'aire a Vilafranca del Penedès.",
      ),
      foto(
        "photo-1686901401893-826da035d1a3",
        "OtReuuykwVo",
        "Mar Xiao Muñoz",
        "Piscina envoltada de gespa, gandules i arbres.",
      ),
      foto("photo-1615400118453-6d0deb8d987a", "a2PhxqKLht0", "Laia Vidal", "Llesques de pa de pagès."),
    ],
    practica: {
      adreca: "Veïnat de les Vinyes, s/n · 08731 Sant Martí Sarroca",
      telefon: TELEFON_EXEMPLE,
      correu: "hola@cal-vinyater.example",
      web: "https://cal-vinyater.example",
      habitacions: 10,
      obertura: "Tot l'any",
    },
  },
];

export function trobaHotel(slug: string): Hotel | undefined {
  return HOTELS.find((hotel) => hotel.slug === slug);
}

export function resum({ slug, nom, poble, comarca, territori, distintiu, frase, universos, portada }: Hotel): HotelResum {
  return { slug, nom, poble, comarca, territori, distintiu, frase, universos, portada };
}

/** Primer els hotels del mateix territori; després, els que comparteixen més universos. */
export function hotelsRelacionats(hotel: Hotel, maxim = 2): Hotel[] {
  const afinitat = (altre: Hotel) =>
    (altre.territori === hotel.territori ? 10 : 0) + altre.universos.filter((u) => hotel.universos.includes(u)).length;
  return HOTELS.filter((altre) => altre.slug !== hotel.slug)
    .map((altre) => ({ altre, punts: afinitat(altre) }))
    .filter(({ punts }) => punts > 0)
    .sort((a, b) => b.punts - a.punts)
    .slice(0, maxim)
    .map(({ altre }) => altre);
}
