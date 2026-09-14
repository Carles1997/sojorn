---
name: Sojorn
description: Una guia d'hotels amb encant a Catalunya.
colors:
  paper: "#F8F4EC"
  bosc: "#262C1F"
  oliva: "#5A5744"
  terracota: "#94513A"
  pedra-50: "#EDEBE2"
  pedra-100: "#E4E1D6"
  pedra-200: "#D6D3C6"
  pedra-300: "#C1BEB0"
  pedra-400: "#A6A292"
  pedra-500: "#848072"
  pedra-600: "#6D695B"
  pedra-700: "#565346"
  pedra-800: "#3D3B30"
  pedra-900: "#29261E"
  linia: "rgba(90, 87, 68, 0.2)"
typography:
  h1:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3.75rem, 0.5rem + 8vw, 7.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.75rem, 1.6rem + 2.9vw, 4.25rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.125rem, 1.5rem + 1.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  h4:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.625rem, 1.35rem + 0.7vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.01em"
  h5:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  h6:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  entradeta:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.5vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.4
  cos:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  ui:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.4
  meta:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.01em"
rounded:
  none: "0px"
spacing:
  marge: "clamp(1.25rem, 0.5rem + 4vw, 5rem)"
  seccio: "clamp(6rem, 4.5rem + 4vw, 8rem)"
  seccio-amplia: "clamp(8rem, 5rem + 8vw, 12rem)"
components:
  boto-bosc:
    backgroundColor: "{colors.bosc}"
    textColor: "{colors.paper}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  univers-cella:
    textColor: "{colors.bosc}"
    typography: "{typography.h3}"
    rounded: "{rounded.none}"
    padding: "56px 40px"
  univers-descripcio:
    textColor: "{colors.oliva}"
    typography: "{typography.cos}"
    width: "32ch"
  mapa-etiqueta:
    textColor: "{colors.oliva}"
    backgroundColor: "{colors.paper}"
    typography: "{typography.meta}"
    rounded: "{rounded.none}"
  mapa-etiqueta-seleccionada:
    textColor: "{colors.terracota}"
    backgroundColor: "{colors.paper}"
    typography: "{typography.meta}"
    rounded: "{rounded.none}"
  distintiu-nom:
    textColor: "{colors.bosc}"
    typography: "{typography.ui}"
  distintiu-marca:
    textColor: "{colors.terracota}"
    size: "12px"
---

# Design System: Sojorn

## Overview

**Creative North Star: "La guia en paper"**

Sojorn es comporta com una guia impresa en paper bo: una publicació que selecciona, no un aparador que ven. Tot el sistema s'aguanta en tres materials: el paper càlid del fons, la tinta verd bosc i les línies fines d'oliva que ordenen la pàgina com els filets d'una maqueta editorial. El verd bosc també pot ser camp: seccions senceres en bosc amb text en paper, com les pàgines de color d'una guia, dins del mateix tema. La cartografia parla la mateixa llengua: línia hiperfina d'oliva, sense farciments, amb la terracota com a únic accent de selecció. L'autoritat ve de la tipografia i de l'aire, mai de l'ornament.

La densitat és de galeria: poques idees per pantalla, seccions separades per molt d'espai negatiu i una jerarquia tipogràfica de salt dramàtic, amb titulars serif molt grans i lleugers davant d'un text funcional petit, net i llegible. La interfície és plana i d'angle recte; la profunditat la dona la fotografia a sang, tractada amb una gradació càlida i un vel de bosc, no les ombres.

El moviment és escàs i editorial: una sola entrada orquestrada del contingut d'obertura, lenta i amb la corba ease-sojorn, i petites respostes d'estat en hover i focus, curtes (de 120 a 280 ms) als components interactius. Amb moviment reduït, el contingut apareix immediatament.

Anti-referències confirmades: l'estètica d'OTA (Booking), els colors turístics, el mapa turístic amb farciments de color, les targetes amb ombra, els botons grossos, els radis arrodonits i les icones decoratives.

**Key Characteristics:**
- Un sol tema clar, en paper; els camps bosc són blocs de color, no un mode fosc.
- Serif Spectral per a la veu editorial i Geist per a la informació.
- Línies d'1 px com a única estructura visible: oliva al 20% sobre paper, paper al 20% sobre bosc.
- Cartografia de línia, sense farciments; la terracota només marca la selecció.
- Angle recte i zero ombres a tot arreu.
- Espai negatiu generós: les seccions respiren entre 96 i 128 px.

## Colors

Una paleta de territori: paper, bosc i oliva estructuren; la terracota només apunta.

### Primary
- **Verd bosc** (bosc): tinta principal i camp. Titulars, text de cos important, botó principal i seccions senceres en bosc, com el manifest o la base de la fotografia d'obertura. Contrast de 13,1:1 amb paper, en tots dos sentits.

### Secondary
- **Oliva** (oliva): text secundari, descripcions, metadades, peus de foto i etiquetes del mapa sobre paper. Contrast de 6,6:1 sobre paper. És també el color de les línies sobre paper, al 20%, i de la cartografia: límits de comarca al 30% i contorn de Catalunya al 45%. La línia que es dibuixa en hover sobre una cel·la d'univers és oliva sòlid. Sobre bosc, el text secundari és pedra-200.

### Tertiary
- **Terracota** (terracota): accent escàs sobre paper. Focus, enllaç actiu, la marca ✦ dels distintius (plena o només en contorn) i detalls d'1 px, com la selecció del mapa: contorn del territori i etiqueta seleccionada. Contrast de 5,5:1 sobre paper, vàlid per a text petit. Sobre bosc no funciona (uns 2,3:1): allà el focus és paper.

### Neutral
- **Paper** (paper): fons global de tot el lloc, text sobre camps bosc (13,1:1), línies sobre bosc al 20% i focus sobre bosc.
- **Pedra** (pedra-50 a pedra-900): grisos càlids en OKLCH, al to 95 i amb croma baixa, per a fons alterns (50 a 200), línies i estats inactius (300 a 400) i text de suport sobre paper (600 en amunt, 5,0:1 o més). Pedra-200 és el text secundari sobre bosc (9,6:1). Pedra-500 (3,6:1) només serveix per a text gran o elements no textuals.
- **Línia** (linia): oliva al 20%. Separadors, vores i divisions sobre paper. És el color de vora per defecte de tots els elements.

### Named Rules
**La Regla de la Terracota Escassa.** La terracota ocupa com a molt el 2% d'una pantalla. Mai omple un fons, un bloc o un botó sencer; viu en línies, glifs i estats.

**La Regla del Paper Únic.** Només hi ha un tema: paper clar. Un camp bosc és un bloc de color dins de la mateixa pàgina, no un mode fosc ni un canvi de tema; porta els seus propis valors de text, línia, focus i selecció.

**La Regla del Camp Bosc.** Una superfície bosc canvia els valors, no el tema: text principal en paper, text secundari en pedra-200, línies en paper al 20%, focus en paper i selecció de text invertida (fons paper, text bosc). Ni l'oliva ni la terracota hi fan de text o de focus.

**La Regla del Mapa sense Farciment.** La cartografia no pinta mai cap superfície de color, en cap estat: comarques en oliva al 30%, límit de Catalunya en oliva al 45% i selecció en contorn de terracota. L'únic farciment és el mateix paper del fons, que fa de màscara per als contorns. El territori es llegeix pel traç.

## Typography

**Display Font:** Spectral (amb Georgia, Times New Roman i serif), carregada en pesos 300 i 400, romana i cursiva
**Body Font:** Geist (amb ui-sans-serif i system-ui)

**Character:** una serif editorial de traç net i contrast moderat, lleugera a les mides grans i amb una cursiva viva, fa de veu del crític; una grotesca neutra i precisa fa de fitxa tècnica. La serif parla, la sans informa.

### Hierarchy
- **H1** (300, de 60 a 120 px, 1,02): el titular principal d'una pantalla, com el claim, el nom d'un hotel o el d'un territori. N'hi ha un per pàgina.
- **H2** (300, de 44 a 68 px, 1,06): obertura de secció.
- **H3** (400, de 34 a 48 px, 1,1): subseccions i blocs d'una fitxa (L'Hotel, El Territori), els noms de l'índex d'universos i el nom del territori al panell del mapa.
- **H4** (400, de 26 a 32 px, 1,18): títols de bloc petits, com "Per què l'hem seleccionat", el nom d'un criteri o "La Guia Sojorn" sobre la llegenda de distintius.
- **H5** (Geist 500, 18 px, 1,45): títols funcionals dins de llistes i formularis.
- **H6** (Geist 600, 16 px, 1,5): el títol funcional mínim.
- **Entradeta** (Spectral cursiva 400, de 22 a 26 px, 1,4): la frase editorial en cursiva que resumeix un hotel o territori, o el claim sota la marca. Amplada màxima de 40ch; al panell del mapa, 32ch.
- **Cos** (Geist 400, 16 px, 1,7): text de lectura i descripcions, en oliva o bosc sobre paper i en pedra-200 o paper sobre bosc. Amplada màxima de 65ch; les descripcions breus d'índex i de llegenda es tanquen a 30 o 32ch.
- **Interfície** (Geist 500, 15 px, 1,4): navegació, botons i etiquetes de camp. En majúscules amb 0,14em de tracking per als botons sobre bosc i els noms dels distintius.
- **Metadades** (Geist 400, 13 px, 1,5, +0,01em): territori i província, comarques, peus de foto, crèdits, notes i dates. Les etiquetes del mapa fan servir aquesta mida en Spectral cursiva.

### Named Rules
**La Regla del Salt Dramàtic.** Entre l'H1 i el cos hi ha com a mínim un factor de 5 (120 px contra 16 px a escriptori). Mai no s'afegeixen mides intermèdies improvisades per suavitzar el salt; el contrast és la jerarquia.

**La Regla de la Cursiva.** L'èmfasi dins d'un titular es fa amb la cursiva de la mateixa Spectral, mai amb negreta, color o una altra família.

**La Regla del Pes Invers.** Com més gran és la serif, més lleugera, mai més pesada: 300 per a H1 i H2, 400 per a H3, H4 i l'entradeta. Spectral només es carrega en 300 i 400; la serif no fa servir cap altre pes.

**La Regla dels Accents.** La serif ha de dibuixar bé tot el català: à è é í ï ò ó ú ü ç i la l·l. Cormorant Garamond es va substituir per Spectral perquè desplaça els accents i el punt volat en totes les versions publicades que es van provar (Google Fonts variable i estàtica, v4.002 i v3.609 oficials). Cap canvi de família no s'accepta sense provar aquests caràcters.

## Layout

Contenidor de pàgina de 90rem (1440 px) centrat, amb marges laterals fluids de 20 a 80 px (token marge). Graella de 12 columnes amb separació de 24 px i composició asimètrica: els titulars poden ocupar de 8 a 11 columnes i el text descriptiu es desplaça a una columna estreta de 4 columnes a la dreta. El mapa editorial segueix la mateixa asimetria: 7 columnes de mapa i 4 de panell a partir de la novena, alineats per dalt.

El ritme vertical és generós: cada secció fa servir el padding `seccio` (de 96 a 128 px, l'equivalent fluid de `py-24` a `py-32`) i els moments de pausa, `seccio-amplia` (de 128 a 192 px). Hi ha més espai sobre un titular que sota. Per sota de 768 px, tota composició asimètrica col·lapsa a una sola columna, i les files de llista de dues parts (nom i text) s'apilen; el mapa i el seu panell ja s'apilen per sota de 1024 px.

Els camps s'alternen per blocs. A la home, la fotografia sobre bosc i el manifest en bosc obren; La Guia, Catalunya i Els universos són seccions de paper seguides; la idea central i el peu tanquen en bosc. El pas entre paper i bosc no porta filet; entre dues seccions de paper consecutives sí.

### Named Rules
**La Regla de l'Aire.** Dues seccions mai no se separen amb menys de 96 px. Si una pantalla sembla buida, és correcte; si sembla plena, sobra contingut.

**La Regla de la Línia.** Les divisions es fan amb una línia d'1 px (o amb espai), mai amb caixes, fons de targeta o ombres. Sobre paper la línia és oliva al 20%; sobre bosc, paper al 20%. Per defecte s'usa una sola línia per canvi de grup, no una a cada fila. L'excepció són les llistes d'entrades paral·leles que es llegeixen com un índex: la llista de criteris del manifest porta un Divider sobre cada fila i un de tancament sota l'última; l'índex d'universos, que és una graella, porta una línia sobre la llista, una sota cada cel·la i filets verticals només entre cel·les, sense marc tancat.

**La Regla del Filet entre Papers.** Dues seccions de paper consecutives se separen amb un Divider en color línia i l'espai `seccio` a banda i banda (el padding inferior de la secció anterior i un marge igual sota el filet). El canvi entre paper i bosc no porta filet: el canvi de camp ja és la divisió.

## Elevation & Depth

El sistema és completament pla. Les escales d'ombra de Tailwind (`shadow`, `inset-shadow`, `drop-shadow`, `text-shadow`) estan eliminades del tema i no existeixen. La profunditat s'expressa amb el contrast entre paper i camps bosc, amb la fotografia a sang i amb les línies fines.

La fotografia a sang es tracta sempre igual: la imatge es dessatura al 50% i s'escalfa amb un 40% de sèpia; a sobre hi va un vel de bosc al 70% i, al 40% inferior, una gradació de transparent a bosc sòlid perquè la imatge es fongui amb la secció bosc que la segueix. Mesurat just darrere del text amb la fotografia provisional actual: l'entradeta de 22 px a 390 px fa 6,8:1 de mitjana i 4,54:1 al percentil 95 (el llindar és 4,5:1 per sota de 24 px); a escriptori, 7,8:1 i 5,6:1; l'H1, 5,3:1 o més al percentil 95. El vel es va pujar del 60% al 70% perquè l'entradeta mòbil quedava a 4,2:1. Cal tornar a mesurar-ho quan es canviï la imatge. Sobre la fotografia només hi va text de titular o d'entradeta; el text d'interfície hi va sobre un fons bosc sòlid.

### Named Rules
**La Regla Plana.** Cap element no projecta ombra, en cap estat. El hover i el focus canvien color, línia o posició, mai elevació.

**La Regla del Vel.** Cap fotografia a sang no porta text sense el tractament complet: saturació al 50%, sèpia al 40%, vel de bosc al 70% i fosa a bosc sòlid a la base.

## Shapes

Angle recte absolut. L'escala de radis de Tailwind està eliminada del tema: `rounded-xl` i similars no generen CSS. Les vores són sempre d'1 px: en color línia sobre paper i en paper al 20% sobre bosc. El botó sobre bosc porta una vora de paper al 30% (2,5:1, decorativa: l'etiqueta ja identifica el control) que passa a paper al 70% en hover. Les línies són decoratives (1,34:1 sobre paper, 1,85:1 sobre bosc). El focus és un contorn d'1 px amb 4 px de separació, en terracota sobre paper i en paper sobre bosc.

La cartografia manté l'1 px a qualsevol mida del mapa: tots els traços són non-scaling-stroke, amb unions arrodonides al vèrtex (no a la cantonada de cap element). Fora del mapa, l'única forma no rectangular és la marca ✦ dels distintius, una estrella de quatre puntes dibuixada a mà en SVG, no un caràcter tipogràfic.

### Named Rules
**La Regla de l'Angle Recte.** Radi 0 a botons, camps, imatges i contenidors. Una cantonada arrodonida trenca el sistema.

## Components

### Botó sobre bosc
Rectangular, pla i tipogràfic: l'acció principal quan viu dins d'un camp bosc o sobre la fotografia.
- **Forma:** angle recte (0 px) i vora d'1 px en paper al 30%.
- **Color i mida:** fons bosc i text paper en Interfície (Geist 500, 15 px), en majúscules amb un tracking de 0,14em; padding de 16 px en vertical i 24 px en lateral, que passa a 32 px a partir de 640 px, on l'etiqueta es manté en una línia.
- **Etiqueta:** l'usuari la va fixar entre claudàtors, `[ DESCOBREIX LA SELECCIÓ ]`; els claudàtors són decoratius i s'amaguen als lectors de pantalla. A la home salta a Catalunya (`#catalunya`).
- **Hover / Focus:** la vora passa a paper al 70% en 200 ms, i una línia d'1 px en paper creix d'esquerra a dreta sota l'etiqueta en 500 ms amb ease-sojorn. El focus és un contorn de paper d'1 px a 4 px i també fa créixer la línia.

### Llista amb filets
- **Estructura:** el component Divider, un filet d'1 px amagat als lectors de pantalla, sobre cada fila i un de tancament sota l'última. Sobre paper fa servir el color línia; amb `on="bosc"`, paper al 20%.
- **Fila de criteri (sobre bosc):** nom en H4 a 2 de 6 columnes i text de cos en pedra-200 (màxim 42ch) a les 4 restants, amb 32 px de padding vertical; s'apilen per sota de 768 px.
- **Entre seccions:** el mateix Divider separa dues seccions de paper consecutives, segons La Regla del Filet entre Papers.

### Índex d'universos
Un índex de llibre d'art: set cel·les ordenades per filets, sense marc ni aspecte de targeta.
- **Graella:** a partir de 1024 px, 12 columnes sense separació en tres files de 8/4, 4/4/4 i 4/8; a partir de 768 px, 2 columnes, amb l'última cel·la ocupant-les totes dues; per sota, una sola columna.
- **Filets:** 1 px en color línia: un sobre la llista, un sota cada cel·la i un a l'esquerra només entre cel·les d'una mateixa fila. Cap marc tancat.
- **Cel·la:** 48 px de padding vertical, 56 px a partir de 768 px; cap al filet vertical, 32 px de padding lateral a 768 px i 40 px a 1024 px, i cap a l'exterior de la fila, cap. Nom en H3 (bosc) i descripció en Cos oliva (màxim 32ch). A les cel·les amples (8 columnes), nom i descripció van costat per costat en dues columnes alineades per la línia de base, separades 40 px; a les estretes s'apilen amb 16 px entre si.
- **Hover:** només en dispositius amb punter (la variant hover de Tailwind v4 viu dins de `@media (hover: hover)`). Una línia d'1 px en oliva es dibuixa d'esquerra a dreta sobre el filet superior de la cel·la (scale-x, 280 ms d'entrada i 160 ms de sortida, ease-sojorn) i el nom puja 2 px amb els mateixos temps. Amb moviment reduït, la línia només es fon i el nom no es mou.
- **Sense enllaç:** mentre no hi hagi pàgines d'univers, les cel·les no són enllaços i no porten cursor de punter.

**La Regla dels Eixos.** A l'índex d'universos, els filets verticals només cauen sobre els eixos de les columnes 4 i 8. Una combinació de cel·les que obri un eix nou trenca la retícula.

### Mapa editorial
Una il·lustració cartogràfica de revista: el territori es llegeix pel traç, mai pel color.
- **Dades:** comarques de "Divisions administratives v2.2" de l'Institut Cartogràfic i Geològic de Catalunya (1:1.000.000, CC BY 4.0), generades fora de línia en un mòdul TS que no s'edita a mà: projecció equirectangular local, vèrtexs enters en un viewBox de 1000 d'amplada, simplificació Douglas-Peucker de tolerància 1,2 que conserva les unions entre comarques (amb desempat independent del sentit) i posició calculada de les etiquetes. El generador és `scripts/generar-mapa.mjs`.
- **Crèdit:** visible sota el mapa, en Metadades oliva: "Cartografia: Institut Cartogràfic i Geològic de Catalunya (CC BY 4.0)".
- **Traç:** límits de comarca d'1 px en oliva dins d'un grup al 30% d'opacitat, perquè les vores compartides no se sumin. Els contorns es dibuixen per emmascarament i no a partir de vores calculades: un traç de 2 px de totes les comarques (oliva al 45%) o de les comarques del territori (terracota) queda tapat per dins pel farciment de paper de les mateixes comarques, i només se'n veu la meitat exterior, d'1 px. Així les vores internes d'un territori mai no es pinten, encara que les vores compartides no siguin idèntiques. Ordre de capes: contorn de Catalunya, paper de totes les comarques, una unitat per territori (contorn de terracota i, a sobre, el seu paper) ordenades perquè el territori amb el ratolí a sobre i, per últim, el seleccionat quedin damunt dels veïns, els límits de comarca i, a dalt de tot, una capa transparent i fixa que fa de zona sensible al punter. Tot és non-scaling-stroke, segons La Regla del Mapa sense Farciment.
- **Territoris i estats:** sis (Empordà, Garrotxa, Pirineus, Priorat, Penedès, Terres de l'Ebre). En repòs, sense contorn; amb el ratolí a sobre, contorn de terracota al 50% i, si hi reposa 120 ms, selecció; seleccionat, contorn de terracota al 100%. L'opacitat del contorn canvia en 200 ms amb ease-sojorn. Sortir del mapa no desfà mai la selecció, i l'Empordà és la selecció inicial. Les zones sensibles al punter són les formes transparents de les comarques; els contorns no capturen el punter.
- **Etiquetes i control:** els sis noms del mapa són el control; no hi ha cap llista de territoris a part. En Spectral cursiva a mida de Metadades, oliva i terracota el seleccionat, cadascun sobre una placa de paper ajustada al text i amb una zona sensible ampliada 6 px en horitzontal i 4 px en vertical, que no engrandeix la placa. Semànticament són una llista de pestanyes amb tabindex itinerant: les fletxes, Inici i Fi seleccionen i mouen el focus; el clic selecciona; amb el ratolí, reposar-hi 120 ms selecciona, igual que sobre el territori. El generador en calcula dos jocs de posicions i el component tria amb una consulta de contenidor sobre l'amplada del mateix mapa: a partir de 640 px, en espai lliure (el rectangle no toca cap línia ni cap altra etiqueta i queda dins del territori si hi cap); per sota, amb el centre sempre dins del territori i 14 px de separació mínima entre etiquetes, i la placa tapa les línies que l'etiqueta toca. Sense aquesta condició, a mida de mòbil les etiquetes buscarien espai lliure al mar o a França. L'SVG és ocult als lectors de pantalla.
- **Panell:** a la dreta del mapa i alineat per dalt: el titular es retalla per sobre fins a l'alçada de les majúscules (`text-box-trim`), de manera que la línia de majúscules del nom coincideix amb el límit superior del mapa. Els sis panells s'apilen a la mateixa cel·la de graella: l'alçada és la del més alt i no hi ha salts de maquetació; només el seleccionat és exposat (la resta, inert i ocult). El canvi és només d'opacitat i de tot el bloc alhora, text i fotografia: entrada en 200 ms i sortida en 120 ms, perquè els dos titulars no es llegeixin superposats. Contingut: nom del territori en H3, comarques en Metadades oliva 16 px per sota, la frase del territori en Entradeta 32 px més avall i, ancorada a la base, la fotografia.
- **Fotografia del panell:** una sola imatge vertical 3:4 a tota l'amplada de la columna, dins d'un `figure` ancorat a la base del panell (panell en columna flexible, marge superior automàtic i 40 px mínims sota la frase), de manera que queda a la mateixa altura en tots els territoris, tingui el text una línia o dues. Marc d'angle recte, sense ombra i amb fons pedra-100 mentre carrega; la proporció fixa evita salts de maquetació. Color natural, sense virar: contrast al 110% i sèpia al 10%, que escalfa un punt els cels cian. Cal triar fotos amb el cel o els clars prou definits perquè la vora del marc no es fongui amb el paper (per això l'Empordà és Cadaqués i no l'alba boirosa de Viladamat). Peu en Metadades oliva, amb alçada reservada de dues línies: "Fotografia provisional: autor (Unsplash)". Cada imatge porta un text alternatiu que descriu el que es veu i la seva procedència (fotògraf i font) a `components/home/territoris.ts`.
- **Composició:** a partir de 1024 px, mapa a 7 de 12 columnes i panell a 4 columnes des de la novena, alineats per dalt; el panell pot acabar més avall que el mapa. Per sota, s'apilen: el mapa i, 64 px més avall, el panell.

### Llegenda de distintius
- **Estructura:** tres entrades en una llista de definicions al costat de "La Guia Sojorn" (H4, amb una línia en Metadades oliva de màxim 28ch, a 3 de 12 columnes a partir de 1024 px). A partir de 768 px, una fila de tres amb una línia a sobre i filets verticals només entre entrades (32 px de padding lateral, cap a l'exterior de la primera); per sota, una llista apilada amb una línia a sobre i una entre entrades. 32 px de padding vertical.
- **Entrada:** la marca ✦, el nom en Interfície majúscula amb 0,14em de tracking, 16 px per sota, i una descripció curta en Cos oliva (màxim 30ch) 12 px més avall.
- **Marca ✦ (MarcaDistintiu):** estrella de quatre puntes en SVG, de 12 px, repetida d'1 a 3 vegades amb 6 px entre còpies i oculta als lectors de pantalla, perquè el nom ja diu el nivell. Selection (1) i Signature (2) porten estrelles plenes de terracota; Icon (3) només en porta el contorn, el tractament discret, i afegeix la nota "Només per a casos molt especials." en Metadades.
- **Sense nivells grisos:** no hi ha estrelles inactives ni en pedra; el nivell es compta pel nombre de marques.

### Fotografia a sang
- **Tractament:** el de La Regla del Vel, sobre un camp bosc que ocupa tota l'amplada.
- **Text:** centrat, en paper, amb la mateixa selecció invertida d'un camp bosc.

### Marca
- **SOJORN** en majúscules i en Spectral amb tracking obert: a escala H1 (300, 0,12em) quan obre la pàgina, amb un marge dret negatiu igual al tracking perquè quedi centrada òpticament, i a mida H5 en pes 400 amb 0,24em al peu i a les capçaleres internes.

### Focus i selecció
- **Focus:** contorn d'1 px amb 4 px de separació. Terracota és el valor global; dins de qualsevol element amb `bg-bosc`, una regla base el passa a paper (13,1:1), de manera que cap element enfocable nou no ho ha de declarar.
- **Selecció:** per defecte, fons bosc i text paper; a les seccions bosc s'inverteix a fons paper i text bosc.

### Moviment
- **Entrada** (animate-entrada: 900 ms, ease-sojorn, opacitat de 0 a 1 i pujada de 0,75 rem): una sola entrada orquestrada del contingut d'obertura, amb retards de 150 ms i 300 ms per al segon i el tercer element.
- **Estat:** 200 ms per als canvis de color de vora i de text, 500 ms per a la línia que creix sota el botó, sempre amb ease-sojorn. Als components interactius, temps curts: 120 ms de repòs abans de seleccionar un territori, 200 ms per al contorn i el color de l'etiqueta del mapa, canvi d'opacitat del panell (text i fotografia) en 200 ms d'entrada i 120 ms de sortida, i línia i pujada de l'univers en 280 ms d'entrada i 160 ms de sortida.
- **Hover:** la variant hover de Tailwind v4 només s'aplica amb `@media (hover: hover)`, i el hover del mapa només respon al ratolí; en pantalla tàctil no hi ha estat de hover.

**La Regla del Moviment Reduït.** Amb `prefers-reduced-motion: reduce`, animate-entrada val `none` i el contingut és visible des del primer moment. El desplaçament suau cap a les àncores només s'activa amb `no-preference`. No hi ha cap anul·lació global de durades: cada animació declara el seu estat reduït. Les respostes de color i opacitat es mantenen; la pujada del nom de l'univers desapareix, i les línies que creixen (sota el botó sobre bosc i a la cel·la d'univers) es fonen en lloc de dibuixar-se.

## Do's and Don'ts

### Do:
- **Do** fes servir `bg-paper` com a fons únic de pàgina i `text-bosc` com a tinta per defecte.
- **Do** separa continguts amb `border-t` (el color de vora per defecte ja és oliva al 20%) o amb espai; sobre bosc, amb `border-paper/20`.
- **Do** fes servir `<Divider/>` (amb `on="bosc"` sobre bosc) a la llista de criteris, una línia per fila i una de tancament, i entre dues seccions de paper consecutives, amb l'espai `seccio` a banda i banda.
- **Do** a l'índex d'universos, posa una línia sobre la llista, una sota cada cel·la i filets verticals només entre cel·les, sobre els eixos de les columnes 4 i 8.
- **Do** dona a cada secció `py-seccio` i reserva `py-seccio-amplia` per als moments de pausa.
- **Do** limita el text de cos a `max-w-mesura` (65ch) i les entradetes a 40ch.
- **Do** fes servir la cursiva de Spectral per a l'èmfasi i per a les entradetes.
- **Do** manté la terracota per a focus, enllaços actius, la marca ✦ dels distintius i la selecció del mapa (contorn i etiqueta) sobre paper.
- **Do** dibuixa la cartografia amb traços d'1 px non-scaling-stroke en oliva (30% per a comarques, 45% per al límit) i posa el crèdit de l'ICGC visible sota el mapa.
- **Do** dona a tot control interactiu nou un equivalent accessible de text, com les etiquetes del mapa, que són pestanyes, i amaga el dibuix decoratiu als lectors de pantalla.
- **Do** dins d'un camp bosc, fes servir paper per al text, `text-pedra-200` per al text secundari i `selection:bg-paper selection:text-bosc` a la secció; el focus en paper ja l'aplica la regla base de `bg-bosc`.
- **Do** tracta tota fotografia a sang amb `saturate-50 sepia-40`, un vel `bg-bosc/70` i una fosa a bosc sòlid a la base, i torna a mesurar el contrast del text (4,5:1 per sota de 24 px) cada cop que canviï la foto.
- **Do** anima les entrades amb `animate-entrada`, que ja val `none` amb moviment reduït.
- **Do** manté les transicions d'estat dels components interactius entre 120 i 280 ms amb ease-sojorn, i amb moviment reduït deixa-hi només opacitat i color.

### Don't:
- **Don't** facis servir ombres, radis arrodonits, targetes amb fons ni icones decoratives. La marca ✦ no és una icona: és el segell de la guia.
- **Don't** afegeixis un mode fosc: un camp bosc és un bloc de color de la pàgina, no un tema.
- **Don't** posis una etiqueta petita en majúscules sobre un titular; el titular parla sol. Les metadades (Empordà · Girona) van sota o al costat del nom, no com a avantsala.
- **Don't** facis servir la terracota en superfícies grans ni sobre bosc, ni el pedra-500 per a text petit.
- **Don't** omplis cap comarca ni cap territori del mapa amb color, ni en repòs ni en selecció.
- **Don't** facis que sortir del mapa desfaci la selecció, ni afegeixis una llista de territoris a part del mapa: la selecció es fa sobre el mateix mapa.
- **Don't** donis cursor de punter ni aspecte de targeta a elements que no enllacen, com les cel·les dels universos.
- **Don't** representis nivells inactius dels distintius amb estrelles grises; el nivell es compta pel nombre de marques.
- **Don't** reintroduïssis la paleta de colors per defecte de Tailwind (zinc, stone, etc.); no existeix al tema.
- **Don't** barregis famílies dins d'un titular.
- **Don't** facis servir pesos de Spectral fora de 300 i 400.
- **Don't** posis text d'interfície directament sobre la fotografia; va sobre un fons bosc sòlid.
- **Don't** reintroduïssis una anul·lació global de durades per al moviment reduït; cada animació declara el seu estat reduït.
