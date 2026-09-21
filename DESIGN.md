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
  relat:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.7
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
  univers-targeta:
    textColor: "{colors.bosc}"
    typography: "{typography.h3}"
    rounded: "{rounded.none}"
    padding: "40px"
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
  mapa-enllac-directori:
    textColor: "{colors.bosc}"
    typography: "{typography.ui}"
  distintiu-nom:
    textColor: "{colors.bosc}"
    typography: "{typography.ui}"
  distintiu-marca:
    textColor: "{colors.oliva}"
    size: "20px"
  capcalera-enllac:
    textColor: "{colors.oliva}"
    typography: "{typography.ui}"
  capcalera-enllac-actiu:
    textColor: "{colors.bosc}"
    typography: "{typography.ui}"
  filtre-llegenda:
    textColor: "{colors.oliva}"
    typography: "{typography.meta}"
  filtre-opcio:
    textColor: "{colors.oliva}"
    typography: "{typography.ui}"
    padding: "6px 0"
  filtre-opcio-seleccionada:
    textColor: "{colors.bosc}"
    typography: "{typography.ui}"
    padding: "6px 0"
  filtre-recompte:
    textColor: "{colors.oliva}"
    typography: "{typography.meta}"
  targeta-hotel-foto:
    backgroundColor: "{colors.pedra-100}"
    rounded: "{rounded.none}"
  targeta-hotel-nom:
    textColor: "{colors.bosc}"
    typography: "{typography.h3}"
  targeta-hotel-nom-estandard:
    textColor: "{colors.bosc}"
    typography: "{typography.h4}"
  targeta-hotel-ubicacio:
    textColor: "{colors.oliva}"
    typography: "{typography.meta}"
  targeta-hotel-frase:
    textColor: "{colors.bosc}"
    typography: "{typography.relat}"
    width: "40ch"
  fitxa-relat:
    textColor: "{colors.bosc}"
    typography: "{typography.relat}"
    width: "62ch"
  fitxa-dada:
    textColor: "{colors.oliva}"
    typography: "{typography.meta}"
  tancament-bosc:
    backgroundColor: "{colors.bosc}"
    textColor: "{colors.paper}"
    typography: "{typography.h2}"
  tancament-bosc-nota:
    textColor: "{colors.pedra-200}"
    typography: "{typography.meta}"
    width: "46ch"
---

# Design System: Sojorn

## Overview

**Creative North Star: "La guia en paper"**

Sojorn es comporta com una guia impresa en paper bo: una publicació que selecciona, no un aparador que ven. Tot el sistema s'aguanta en tres materials: el paper càlid del fons, la tinta verd bosc i les línies fines d'oliva que ordenen la pàgina com els filets d'una maqueta editorial. El verd bosc també pot ser camp: seccions senceres en bosc amb text en paper, com les pàgines de color d'una guia, dins del mateix tema. La cartografia parla la mateixa llengua: línia hiperfina d'oliva, sense farciments, amb la terracota com a únic accent de selecció. L'autoritat ve de la tipografia i de l'aire, mai de l'ornament.

La densitat és de galeria: poques idees per pantalla, seccions separades per molt d'espai negatiu i una jerarquia tipogràfica de salt dramàtic, amb titulars serif molt grans i lleugers davant d'un text funcional petit, net i llegible. La interfície és plana i d'angle recte; la profunditat la dona la fotografia a sang, tractada amb una gradació càlida i un vel de bosc, no les ombres.

El moviment és escàs i editorial: una sola entrada orquestrada del contingut d'obertura, lenta i amb la corba ease-sojorn, petites respostes d'estat en hover i focus, curtes (de 120 a 280 ms) als components interactius, i un fos d'opacitat de 280 ms quan un filtre recompon el directori. Amb moviment reduït, el contingut apareix immediatament.

Anti-referències confirmades: l'estètica d'OTA (Booking), els colors turístics, el mapa turístic amb farciments de color, les targetes amb ombra, els botons grossos, els radis arrodonits i les icones decoratives.

**Key Characteristics:**
- Un sol tema clar, en paper; els camps bosc són blocs de color, no un mode fosc.
- Serif Spectral per a la veu editorial i Geist per a la informació.
- Línies d'1 px com a única estructura visible: oliva al 20% sobre paper, paper al 20% sobre bosc.
- Cartografia de línia, sense farciments; la terracota només marca la selecció.
- Angle recte i zero ombres a tot arreu.
- Espai negatiu generós: les seccions respiren entre 96 i 128 px.
- Fotografia en marc amb un sol tractament editorial; només la fotografia a sang porta vel.

## Colors

Una paleta de territori: paper, bosc i oliva estructuren; la terracota només apunta.

### Primary
- **Verd bosc** (bosc): tinta principal i camp. Titulars, text de cos important, botó principal i seccions senceres en bosc, com el manifest, la base de la fotografia d'obertura, el tancament de la fitxa d'hotel i el peu. Contrast de 13,1:1 amb paper, en tots dos sentits.

### Secondary
- **Oliva** (oliva): text secundari, descripcions, metadades, peus de foto, etiquetes del mapa, llegendes i opcions en repòs dels filtres sobre paper. Contrast de 6,6:1 sobre paper. És també el color de les línies sobre paper, al 20%, i de la cartografia: límits de comarca al 30% i contorn de Catalunya al 45%. La línia que es dibuixa en hover sobre una cel·la d'univers és oliva sòlid. Sobre bosc, el text secundari és pedra-200.

### Tertiary
- **Terracota** (terracota): accent escàs sobre paper. Focus, enllaç actiu, detalls d'1 px, com la selecció del mapa (contorn del territori i etiqueta seleccionada), el filet sota l'opció triada dels filtres del directori i el subratllat de la secció activa a la capçalera interna. Contrast de 5,5:1 sobre paper, vàlid per a text petit. Sobre bosc no funciona (uns 2,3:1): allà el focus és paper.

### Neutral
- **Paper** (paper): fons global de tot el lloc, text sobre camps bosc (13,1:1), línies sobre bosc al 20% i focus sobre bosc.
- **Pedra** (pedra-50 a pedra-900): grisos càlids en OKLCH, al to 95 i amb croma baixa, per a fons alterns (50 a 200), línies i estats inactius (300 a 400) i text de suport sobre paper (600 en amunt, 5,0:1 o més). Pedra-100 és el fons de tots els marcs fotogràfics mentre la imatge carrega. Pedra-200 és el text secundari sobre bosc (9,6:1), com la nota de prescriptor del tancament de la fitxa. Pedra-800 és el hover del botó sobre paper. Pedra-500 (3,6:1) només serveix per a text gran o elements no textuals.
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
- **H1** (300, de 60 a 120 px, 1,02): el titular principal d'una pantalla, com el claim, el nom d'un hotel a la seva fitxa o el d'un territori. N'hi ha un per pàgina. Al directori, que és un índex, l'H1 ("La selecció") fa servir l'escala H2, centrat.
- **H2** (300, de 44 a 68 px, 1,06): obertura de secció, com L'Essència a la fitxa, i el nom de l'hotel al tancament bosc.
- **H3** (400, de 34 a 48 px, 1,1): subseccions i blocs d'una fitxa ("Per què l'hem triat", "Els seus universos", "L'hotel en imatges" i els hotels relacionats), el nom d'una targeta d'hotel gran, els noms de les targetes d'univers de la home i el nom del territori al panell del mapa.
- **H4** (400, de 26 a 32 px, 1,18): títols de bloc petits, com "Informació pràctica" o "La Guia Sojorn" sobre la llegenda de distintius, el nom d'un criteri o d'un univers en una llista i el nom d'una targeta d'hotel estàndard.
- **H5** (Geist 500, 18 px, 1,45): títols funcionals dins de llistes i formularis.
- **H6** (Geist 600, 16 px, 1,5): el títol funcional mínim.
- **Entradeta** (Spectral cursiva 400, de 22 a 26 px, 1,4): la frase editorial en cursiva que resumeix un hotel o territori, el claim sota la marca, la ubicació al tancament de la fitxa i el missatge de l'estat buit del directori. Amplada màxima de 40ch; al panell del mapa, 32ch; a l'estat buit, 30ch.
- **Relat** (Spectral 400, 19 px, 1,7): la mida de lectura de la serif. En romana, el text d'autor de L'Essència a la fitxa (màxim 62ch, 24 px entre paràgrafs); en cursiva, la frase de la targeta d'hotel (màxim 40ch).
- **Cos** (Geist 400, 16 px, 1,7): text de lectura i descripcions, en oliva o bosc sobre paper i en pedra-200 o paper sobre bosc. Amplada màxima de 65ch; les descripcions breus d'índex i de llegenda es tanquen a 30 o 32ch, i les notes de criteri i d'univers de la fitxa, a 42ch.
- **Interfície** (Geist 500, 15 px, 1,4): navegació, botons, etiquetes de camp i opcions dels filtres. En majúscules amb 0,14em de tracking per als botons sobre bosc i els noms dels distintius.
- **Metadades** (Geist 400, 13 px, 1,5, +0,01em): territori i província, poble i comarca, comarques, peus de foto, crèdits, notes, dates, llegendes dels filtres, el recompte del directori i les dades de la fitxa. Les etiquetes del mapa fan servir aquesta mida en Spectral cursiva.

### Named Rules
**La Regla del Salt Dramàtic.** Entre l'H1 i el cos hi ha com a mínim un factor de 5 (120 px contra 16 px a escriptori). Mai no s'afegeixen mides intermèdies improvisades per suavitzar el salt; el contrast és la jerarquia. Tota mida surt de l'escala de `globals.css`: Relat hi és registrada i és l'única entre el cos i l'entradeta, segons La Regla del Relat. Una pàgina d'índex pot baixar el seu H1 a l'escala H2, com el directori, però mai a una mida fora de l'escala.

**La Regla del Relat.** Relat és una mida de lectura, no un graó de titular: només es fa servir en Spectral per al text d'autor de la fitxa (romana) i la frase de la targeta (cursiva). No fa de titular, d'etiqueta, d'interfície ni de text en sans, i no substitueix mai el cos en els textos informatius.

**La Regla de la Cursiva.** L'èmfasi dins d'un titular es fa amb la cursiva de la mateixa Spectral, mai amb negreta, color o una altra família.

**La Regla del Pes Invers.** Com més gran és la serif, més lleugera, mai més pesada: 300 per a H1 i H2, 400 per a H3, H4 i l'entradeta. Spectral només es carrega en 300 i 400; la serif no fa servir cap altre pes.

**La Regla dels Accents.** La serif ha de dibuixar bé tot el català: à è é í ï ò ó ú ü ç i la l·l. Cormorant Garamond es va substituir per Spectral perquè desplaça els accents i el punt volat en totes les versions publicades que es van provar (Google Fonts variable i estàtica, v4.002 i v3.609 oficials). Cap canvi de família no s'accepta sense provar aquests caràcters.

## Layout

Contenidor de pàgina de 90rem (1440 px) centrat, amb marges laterals fluids de 20 a 80 px (token marge). Graella de 12 columnes amb separació de 24 px i composició asimètrica: els titulars poden ocupar de 8 a 11 columnes i el text descriptiu es desplaça a una columna estreta de 4 columnes a la dreta. El mapa editorial segueix la mateixa asimetria: 7 columnes de mapa i 4 de panell a partir de la novena, alineats per dalt.

El ritme vertical és generós: cada secció fa servir el padding `seccio` (de 96 a 128 px, l'equivalent fluid de `py-24` a `py-32`) i els moments de pausa, `seccio-amplia` (de 128 a 192 px). Hi ha més espai sobre un titular que sota. Per sota de 768 px, tota composició asimètrica col·lapsa a una sola columna, i les files de llista de dues parts (nom i text) s'apilen; el mapa i el seu panell ja s'apilen per sota de 1024 px.

Els camps s'alternen per blocs. A la home, la fotografia sobre bosc i el manifest en bosc obren; La Guia, Catalunya i Els universos són seccions de paper seguides; la idea central i el peu tanquen en bosc. El pas entre paper i bosc no porta filet; entre dues seccions de paper consecutives sí.

**Pàgines internes.** Obren amb la capçalera interna i tanquen amb el peu dins d'un camp bosc propi. El contingut comença 64 px sota la capçalera, 96 px a partir de 768 px.

**Directori.** Capçalera de pàgina centrada: H1 a escala H2, entradeta en cursiva de màxim 34ch 24 px per sota i nota de contingut d'exemple en Metadades oliva 24 px més avall. 64 px després, la barra de filtres a tota l'amplada del contenidor, entre filets; 16 px per sota, la fila del recompte, i 48 px més avall, la graella de targetes. La secció acaba amb `seccio`.

**Fitxa d'hotel.** Un reportatge en aquest ordre:
- **Capçalera:** a partir de 1024 px, el nom en H1 a 8 columnes i la fitxa de dades a les 4 últimes (des de la novena), alineades per la base; per sota de 1024 px, el nom a tota l'amplada i les dades a 6 columnes a partir de 768 px i a 12 per sota, 40 px més avall. Sota, la frase en Entradeta cursiva (màxim 40ch) 40 px més avall i la nota de fitxa d'exemple 16 px per sota.
- **Portada:** 48 px més avall, a tota l'amplada del contenidor, 16:9 a partir de 768 px i 4:3 per sota, amb el crèdit 12 px per sota.
- **Relat i panell:** una graella de 12 columnes amb `seccio` a dalt i a baix: L'Essència a 7 columnes i el panell d'Informació pràctica a 4 des de la novena, enganxat 40 px sota la vora superior de la finestra mentre es llegeix. Per sota de 1024 px s'apilen amb 80 px entre si i el panell ocupa 8 columnes a partir de 768 px.
- **Per què l'hem triat i Els seus universos:** després d'un Divider amb `seccio` a banda i banda; la llista de criteris a 6 columnes i la d'universos a 5 des de la vuitena, apilades amb 80 px per sota de 1024 px.
- **L'hotel en imatges:** després d'un altre Divider, el títol i, 48 px més avall, la galeria.
- **Tancament bosc:** una pàgina de color amb `seccio-amplia`, sense filet.
- **Hotels relacionats:** sobre paper, amb `seccio`, fora de l'article; dues targetes estàndard en 16:9 a dues columnes a partir de 768 px, amb 64 px entre files.
- **Peu:** en bosc.

### Named Rules
**La Regla de l'Aire.** Dues seccions mai no se separen amb menys de 96 px. Si una pantalla sembla buida, és correcte; si sembla plena, sobra contingut.

**La Regla de la Línia.** Les divisions es fan amb una línia d'1 px (o amb espai), mai amb caixes, fons de targeta o ombres. Sobre paper la línia és oliva al 20%; sobre bosc, paper al 20%. Per defecte s'usa una sola línia per canvi de grup, no una a cada fila. L'excepció són les llistes d'entrades paral·leles que es llegeixen com un índex: la llista de criteris del manifest porta un Divider sobre cada fila i un de tancament sota l'última; els universos de la home, en canvi, són quatre targetes amb marc d'1 px que giren (vegeu Índex d'universos), l'única excepció. A la fitxa d'hotel, les dades, la informació pràctica, els criteris i els universos porten una línia sobre la llista i una sota cada fila; la barra de filtres del directori porta una línia a dalt, una a baix i una entre grups.

**La Regla del Filet entre Papers.** Dues seccions de paper consecutives se separen amb un Divider en color línia i l'espai `seccio` a banda i banda (el padding inferior de la secció anterior i un marge igual sota el filet). El canvi entre paper i bosc no porta filet: el canvi de camp ja és la divisió.

**La Regla del Ritme.** La graella del directori assigna la mida per posició dins de la llista filtrada, no per hotel: gran, estàndard més avall, estàndard, gran més avall, i torna a començar. Cap hotel no té una mida fixa; en filtrar, el ritme es refà des del principi.

## Elevation & Depth

El sistema és completament pla. Les escales d'ombra de Tailwind (`shadow`, `inset-shadow`, `drop-shadow`, `text-shadow`) estan eliminades del tema i no existeixen. La profunditat s'expressa amb el contrast entre paper i camps bosc, amb la fotografia a sang i amb les línies fines.

La fotografia a sang es tracta sempre igual: la imatge es dessatura al 50% i s'escalfa amb un 40% de sèpia; a sobre hi va un vel de bosc al 70% i, al 40% inferior, una gradació de transparent a bosc sòlid perquè la imatge es fongui amb la secció bosc que la segueix. Mesurat just darrere del text amb la fotografia provisional actual: l'entradeta de 22 px a 390 px fa 6,8:1 de mitjana i 4,54:1 al percentil 95 (el llindar és 4,5:1 per sota de 24 px); a escriptori, 7,8:1 i 5,6:1; l'H1, 5,3:1 o més al percentil 95. El vel es va pujar del 60% al 70% perquè l'entradeta mòbil quedava a 4,2:1. Cal tornar a mesurar-ho quan es canviï la imatge. Sobre la fotografia només hi va text de titular o d'entradeta; el text d'interfície hi va sobre un fons bosc sòlid.

La fotografia en marc (el panell del mapa, les targetes d'hotel, la portada i la galeria de la fitxa) no porta mai text a sobre i es tracta amb la utilitat compartida `foto-editorial` de `globals.css`: color natural amb un contrast al 110% i un 10% de sèpia, que tempera els cels cian sense virar al marró. El marc és d'angle recte, sense ombra, amb proporció fixa i fons pedra-100 mentre carrega; la imatge el cobreix sencer.

### Named Rules
**La Regla Plana.** Cap element no projecta ombra, en cap estat. El hover i el focus canvien color, línia o posició, mai elevació.

**La Regla del Vel.** Cap fotografia a sang no porta text sense el tractament complet: saturació al 50%, sèpia al 40%, vel de bosc al 70% i fosa a bosc sòlid a la base.

**La Regla de la Foto Editorial.** Tota fotografia en marc fa servir `foto-editorial` i cap altre filtre; el tractament es canvia a la utilitat, no component per component. La imatge no s'escala, no es mou i no canvia de filtre en cap estat.

## Shapes

Angle recte absolut. L'escala de radis de Tailwind està eliminada del tema: `rounded-xl` i similars no generen CSS. Les vores són sempre d'1 px: en color línia sobre paper i en paper al 20% sobre bosc. El botó sobre bosc porta una vora de paper al 30% (2,5:1, decorativa: l'etiqueta ja identifica el control) que passa a paper al 70% en hover. Les línies són decoratives (1,34:1 sobre paper, 1,85:1 sobre bosc). El focus és un contorn d'1 px amb 4 px de separació, en terracota sobre paper i en paper sobre bosc.

La cartografia manté l'1 px a qualsevol mida del mapa: tots els traços són non-scaling-stroke, amb unions arrodonides al vèrtex (no a la cantonada de cap element). Fora del mapa, l'única forma no rectangular és la branca d'olivera dels distintius, un dibuix vectorial del client en SVG, no un caràcter tipogràfic.

### Named Rules
**La Regla de l'Angle Recte.** Radi 0 a botons, camps, imatges i contenidors. Una cantonada arrodonida trenca el sistema.

## Components

### Capçalera interna
Una línia de guia: la marca a l'esquerra i la navegació a la dreta, sobre un filet.
- **Estructura:** dins del contenidor de pàgina, una fila alineada per la línia de base amb 24 px de padding vertical i una línia sota. La marca SOJORN és l'enllaç a l'inici, amb el nom accessible "Sojorn: inici".
- **Navegació:** una llista en Interfície amb 32 px entre elements; ara només "Hotels". En repòs, oliva; en hover, bosc en 200 ms. Dins de la secció d'hotels (directori i fitxes), l'enllaç és bosc i subratllat en terracota amb 0,4em de separació; només el directori porta `aria-current="page"`.
- **Ús:** a les pàgines internes. La home no en porta: obre amb la fotografia a sang.

### Peu
- **Estructura:** sempre dins d'un camp bosc amb la selecció invertida. Un Divider sobre bosc a dalt i una fila amb 48 px de padding vertical: la marca SOJORN i el lema "Una guia d'hotels amb encant a Catalunya." en Metadades pedra-200. S'apilen amb 12 px per sota de 640 px i, a partir d'aquí, van als dos extrems alineats per la línia de base.
- **Ús:** a la home comparteix el bloc bosc amb la idea central; a les pàgines internes té el seu propi bloc bosc.

### Botó sobre bosc
Rectangular, pla i tipogràfic: l'acció principal quan viu dins d'un camp bosc o sobre la fotografia. És un sol component (BotoBosc) per a la home i per al tancament de la fitxa.
- **Forma:** angle recte (0 px) i vora d'1 px en paper al 30%.
- **Color i mida:** fons bosc i text paper en Interfície (Geist 500, 15 px), en majúscules amb un tracking de 0,14em; padding de 16 px en vertical i 24 px en lateral, que passa a 32 px a partir de 640 px, on l'etiqueta es manté en una línia.
- **Etiqueta:** sense claudàtors: `DESCOBREIX LA SELECCIÓ`. A la home salta a Catalunya (`#catalunya`) i entra amb l'obertura, amb 300 ms de retard. Al tancament de la fitxa, `VISITA LA WEB DE L'HOTEL`.
- **Hover / Focus:** la vora passa a paper al 70% en 200 ms, i una línia d'1 px en paper creix d'esquerra a dreta sota l'etiqueta en 500 ms amb ease-sojorn. El focus és un contorn de paper d'1 px a 4 px i també fa créixer la línia.
- **Variant exterior:** per als enllaços fora de Sojorn. S'obre en una pestanya nova (`target="_blank"`, `rel="noopener noreferrer"`) i ho anuncia als lectors de pantalla amb el text ocult "(s'obre en una pestanya nova)". El dibuix no canvia.

### Botó sobre paper
- **Ús:** l'enllaç a la web de l'hotel al panell d'Informació pràctica. Fons bosc, text paper en Interfície sense majúscules, padding de 14 px en vertical i 28 px en lateral, angle recte i sense vora.
- **Hover / Actiu:** el fons passa a pedra-800 en 200 ms; en prémer, baixa 1 px. Com a enllaç exterior, porta el mateix text ocult de pestanya nova que la variant exterior del botó sobre bosc.

### Llista amb filets
- **Estructura:** el component Divider, un filet d'1 px amagat als lectors de pantalla, sobre cada fila i un de tancament sota l'última. Sobre paper fa servir el color línia; amb `on="bosc"`, paper al 20%.
- **Fila de criteri (sobre bosc):** nom en H4 a 2 de 6 columnes i text de cos en pedra-200 (màxim 42ch) a les 4 restants, amb 32 px de padding vertical; s'apilen per sota de 768 px.
- **Fila de criteri i d'univers (sobre paper, a la fitxa):** una línia sobre la llista i una sota cada fila, amb 24 px de padding vertical. El criteri repeteix la composició 2/4 en H4 i cos oliva (màxim 42ch); l'univers apila el nom en H4 i la descripció en cos oliva 8 px per sota.
- **Entre seccions:** el mateix Divider separa dues seccions de paper consecutives, segons La Regla del Filet entre Papers.

### Índex d'universos
Quatre targetes en dues columnes i dues files, que giren per mostrar una fotografia. És l'única excepció a La Regla de la Línia: aquí sí hi ha targeta, però és un marc d'1 px sense fons, sense ombra i d'angle recte.
- **Graella:** a partir de 768 px, 2 columnes amb 24 px de separació; per sota, una sola. Cada targeta fa 3:2 a partir de 1024 px i 304 px d'alçada per sota (l'alçada fixa evita que el text reculi en girar).
- **Anvers:** marc d'1 px en color línia sobre paper, amb 32 px de padding (40 px a partir de 1024 px). A dalt, el nom en H3 (H2 a partir de 1280 px), en bosc. A baix, el lema en Entradeta en Geist negreta ("Menjar el territori") i, 12 px més avall, la descripció en Cos oliva (màxim 32ch, amb dues línies d'alçada reservades, de manera que els lemes queden a la mateixa altura a totes les targetes).
- **Revers:** una fotografia de color natural amb foto-editorial, sense marc ni text, a tota la targeta. Sota la graella, una línia en Metadades oliva credita els fotògrafs.
- **Gir:** rotació de 180° sobre l'eix vertical (rotateY) en 750 ms amb ease-gir, cubic-bezier(0.65, 0, 0.35, 1), la corba d'un moviment sobre la pantalla: arrenca i acaba suau. La perspectiva és de 1600 px. El hover recau sobre l'element fix i no sobre el que gira, de manera que el gir no fa parpellejar la zona sensible. En treure el ratolí, torna amb el mateix gest. Les dues cares són al DOM: el text sempre és llegible, també amb lector de pantalla.
- **Tàctil:** sense hover, tocar la targeta la gira i tornar-hi la desgira. Només una targeta a la vegada.
- **Moviment reduït:** cap gir; les cares s'intercanvien amb un fos de 200 ms.
- **Sense enllaç:** mentre no hi hagi pàgines d'univers, les targetes no són enllaços i no porten cursor de punter.

### Mapa editorial
Una il·lustració cartogràfica de revista: el territori es llegeix pel traç, mai pel color.
- **Dades:** comarques de "Divisions administratives v2.2" de l'Institut Cartogràfic i Geològic de Catalunya (1:1.000.000, CC BY 4.0), generades fora de línia en un mòdul TS que no s'edita a mà: projecció equirectangular local, vèrtexs enters en un viewBox de 1000 d'amplada, simplificació Douglas-Peucker de tolerància 1,2 que conserva les unions entre comarques (amb desempat independent del sentit) i posició calculada de les etiquetes. El generador és `scripts/generar-mapa.mjs`.
- **Crèdit:** visible sota el mapa, en Metadades oliva: "Cartografia: Institut Cartogràfic i Geològic de Catalunya (CC BY 4.0)".
- **Traç:** límits de comarca d'1 px en oliva dins d'un grup al 30% d'opacitat, perquè les vores compartides no se sumin. Els contorns es dibuixen per emmascarament i no a partir de vores calculades: un traç de 2 px de totes les comarques (oliva al 45%) o de les comarques del territori (terracota) queda tapat per dins pel farciment de paper de les mateixes comarques, i només se'n veu la meitat exterior, d'1 px. Així les vores internes d'un territori mai no es pinten, encara que les vores compartides no siguin idèntiques. Ordre de capes: contorn de Catalunya, paper de totes les comarques, una unitat per territori (contorn de terracota i, a sobre, el seu paper) ordenades perquè el territori amb el ratolí a sobre i, per últim, el seleccionat quedin damunt dels veïns, els límits de comarca i, a dalt de tot, una capa transparent i fixa que fa de zona sensible al punter. Tot és non-scaling-stroke, segons La Regla del Mapa sense Farciment.
- **Territoris i estats:** sis (Empordà, Garrotxa, Pirineus, Priorat, Penedès, Terres de l'Ebre). En repòs, sense contorn; amb el ratolí a sobre, contorn de terracota al 50% i, si hi reposa 120 ms, selecció; seleccionat, contorn de terracota al 100%. L'opacitat del contorn canvia en 200 ms amb ease-sojorn. Sortir del mapa no desfà mai la selecció, i l'Empordà és la selecció inicial. Les zones sensibles al punter són les formes transparents de les comarques; els contorns no capturen el punter.
- **Etiquetes i control:** els sis noms del mapa són el control; no hi ha cap llista de territoris a part. En Spectral cursiva a mida de Metadades, oliva i terracota el seleccionat, cadascun sobre una placa de paper ajustada al text i amb una zona sensible ampliada 6 px en horitzontal i 4 px en vertical, que no engrandeix la placa. Semànticament són una llista de pestanyes amb tabindex itinerant: les fletxes, Inici i Fi seleccionen i mouen el focus; el clic selecciona; amb el ratolí, reposar-hi 120 ms selecciona, igual que sobre el territori. El generador en calcula dos jocs de posicions i el component tria amb una consulta de contenidor sobre l'amplada del mateix mapa: a partir de 640 px, en espai lliure (el rectangle no toca cap línia ni cap altra etiqueta i queda dins del territori si hi cap); per sota, amb el centre sempre dins del territori i 14 px de separació mínima entre etiquetes, i la placa tapa les línies que l'etiqueta toca. Sense aquesta condició, a mida de mòbil les etiquetes buscarien espai lliure al mar o a França. L'SVG és ocult als lectors de pantalla.
- **Panell:** a la dreta del mapa i alineat per dalt: el titular es retalla per sobre fins a l'alçada de les majúscules (`text-box-trim`), de manera que la línia de majúscules del nom coincideix amb el límit superior del mapa. Els sis panells s'apilen a la mateixa cel·la de graella: l'alçada és la del més alt i no hi ha salts de maquetació; només el seleccionat és exposat (la resta, inert i ocult). El canvi és només d'opacitat i de tot el bloc alhora, text, enllaç i fotografia: entrada en 200 ms i sortida en 120 ms, perquè els dos titulars no es llegeixin superposats. Contingut: nom del territori en H3, comarques en Metadades oliva 16 px per sota, la frase del territori en Entradeta 32 px més avall, l'enllaç al directori 24 px més avall i, ancorada a la base, la fotografia.
- **Enllaç al directori:** "Hotels a l'Empordà", "Hotels als Pirineus" i equivalents, cap al directori filtrat pel territori (`/hotels?territori=…`). En Interfície bosc, subratllat d'1 px en oliva al 50% amb 0,35em de separació, que passa a bosc en hover en 200 ms. Ocupa només l'amplada del text.
- **Fotografia del panell:** una sola imatge vertical 3:4 a tota l'amplada de la columna, dins d'un `figure` ancorat a la base del panell (panell en columna flexible, marge superior automàtic i 40 px mínims sobre la fotografia), de manera que queda a la mateixa altura en tots els territoris, tingui el text una línia o dues. Marc d'angle recte, sense ombra i amb fons pedra-100 mentre carrega; la proporció fixa evita salts de maquetació. Color natural, sense virar: el tractament compartit `foto-editorial` (contrast al 110% i sèpia al 10%), que escalfa un punt els cels cian. Cal triar fotos amb el cel o els clars prou definits perquè la vora del marc no es fongui amb el paper (per això l'Empordà és Cadaqués i no l'alba boirosa de Viladamat). Peu en Metadades oliva, amb alçada reservada de dues línies: "Fotografia provisional: autor (Unsplash)". Cada imatge porta un text alternatiu que descriu el que es veu i la seva procedència (fotògraf i font) a `components/home/territoris.ts`.
- **Composició:** a partir de 1024 px, mapa a 7 de 12 columnes i panell a 4 columnes des de la novena, alineats per dalt; el panell pot acabar més avall que el mapa. Per sota, s'apilen: el mapa i, 64 px més avall, el panell.

### Llegenda de distintius
- **Estructura:** tres entrades en una llista de definicions al costat de "La Guia Sojorn" (H4, amb una línia en Metadades oliva de màxim 28ch, a 3 de 12 columnes a partir de 1024 px). A partir de 768 px, una fila de tres amb una línia a sobre i filets verticals només entre entrades (32 px de padding lateral, cap a l'exterior de la primera); per sota, una llista apilada amb una línia a sobre i una entre entrades. 32 px de padding vertical.
- **Entrada:** la branca d'olivera, el nom en Interfície majúscula amb 0,14em de tracking, 16 px per sota, i una descripció curta en Cos oliva (màxim 30ch) 12 px més avall.
- **Branca d'olivera (MarcaDistintiu):** dibuix del client (`docs/references/motiu_vegetal_fons_transparent.svg`), un sol traçat sense fons amb el viewBox ajustat al dibuix (proporció 1,41:1). Color oliva. Repetida d'1 a 3 vegades amb 10 px entre còpies i oculta als lectors de pantalla, perquè el nom ja diu el nivell. Mida per context: 32 px d'alçada a la llegenda de la home i 20 px a les targetes, als filtres i a la fitxa de dades. Selection (1) i Signature (2) la porten plena; Icon (3) només en porta el contorn d'1 px (non-scaling-stroke), el tractament discret, i afegeix la nota "Només per a casos molt especials." en Metadades.
- **Sense nivells grisos:** no hi ha branques inactives ni en pedra; el nivell es compta pel nombre de marques.

### Filtres del directori
Un sumari de guia, no un formulari de cerca: tres línies de text entre filets.
- **Estructura:** un formulari ("Filtra la selecció") amb una línia a dalt i una a baix i tres grups de botons d'opció (Territori, Univers, Distintiu) separats per una línia, amb 20 px de padding vertical. A partir de 768 px, cada grup és una fila de 12 columnes alineada per la línia de base: la llegenda en Metadades oliva a 2 columnes i les opcions a les 10 restants; per sota, la llegenda i les opcions s'apilen amb 8 px. El vocabulari surt de `lib/guia.ts`, la mateixa font que la home.
- **Opcions:** el primer valor de cada grup és "Tots". Cada opció és una etiqueta en Interfície oliva amb 6 px de padding vertical, 24 px entre opcions i 4 px entre línies; el botó d'opció és ocult visualment i l'etiqueta és el control. Els distintius porten la branca d'olivera en terracota, 8 px abans del nom curt (Selection, Signature, Icon) en majúscules amb 0,14em de tracking.
- **Estats:** en hover, bosc. L'opció triada és bosc amb un filet d'1 px de terracota sota l'etiqueta que creix des de l'esquerra en 200 ms amb ease-sojorn; amb moviment reduït apareix sense transició. El focus és el contorn terracota d'1 px a 4 px sobre l'etiqueta.
- **Adreça:** cada canvi reescriu l'adreça amb només els filtres actius, sense afegir entrades a l'historial; el servidor llegeix els valors vàlids, de manera que una adreça filtrada es pot compartir i els enllaços del mapa i de la fitxa hi porten directament.
- **Recompte:** 16 px sota la barra, en una fila d'alçada mínima de 32 px: "N hotels" a la dreta en Metadades oliva, anunciat als lectors de pantalla quan canvia. Si hi ha algun filtre actiu, "Esborra els filtres" a l'esquerra, en Metadades oliva subratllada amb 0,3em de separació, que passa a bosc en hover.
- **Estat buit:** centrat i amb `seccio` a dalt i a baix: "Cap hotel de la selecció no reuneix aquesta combinació." en Entradeta cursiva (màxim 30ch), una línia de cos oliva (màxim 46ch) 16 px per sota i "Esborra els filtres" en Interfície subratllada amb 0,35em de separació 32 px més avall, que passa a oliva en hover.
- **Barra fixa:** filtrar no mou mai la barra; només es recompon el que hi ha sota.

### Graella del directori
- **Escriptori (a partir de 1024 px):** 12 columnes, 24 px de separació horitzontal i 96 px entre files. El ritme es repeteix cada quatre targetes segons la posició: una gran a 7 columnes; una estàndard a 4 columnes des de la novena, 112 px més avall; una estàndard a 4 columnes a l'inici de la fila següent; una gran a 7 columnes des de la sisena, 112 px més avall.
- **Tauleta (a partir de 768 px):** 2 columnes amb 80 px entre files; les grans ocupen les dues columnes i les estàndard, una. Sense desplaçaments.
- **Mòbil:** una sola columna amb 80 px entre targetes.
- **Recomposició:** la llista es torna a muntar per a cada combinació de filtres i es fon amb animate-aparicio, segons La Regla de l'Aparició. La fotografia de la primera targeta es precarrega.

### Targeta d'hotel
Una entrada de guia: fotografia, filet, nom i frase. Sense fons, sense vora de caixa i sense ombra.
- **Fotografia:** marc d'angle recte en 16:9 (horitzontal) o 3:4 (vertical), amb fons pedra-100 i `foto-editorial`. Per defecte, les grans són horitzontals i les estàndard verticals; els hotels relacionats de la fitxa són estàndard en 16:9.
- **Cos:** 20 px sota la fotografia, una línia i 20 px de padding. A la primera fila, alineats per la línia de base i separats com a mínim 24 px, el nom (H3 a les grans, H4 a les estàndard; element h2 al directori i h3 als relacionats) i, a la dreta, la branca d'olivera en terracota amb el nom del distintiu només per als lectors de pantalla. Sota el nom, 8 px, poble · comarca en Metadades oliva; 16 px més avall, la frase en Relat cursiva (màxim 40ch).
- **Enllaç:** l'enllaç del nom s'estén sobre tota la targeta, que és clicable sencera.
- **Hover:** només amb punter, el nom se subratlla (1 px, 0,18em de separació). És l'única resposta: la fotografia no s'escala, no es mou i no canvia de color. El focus és el contorn terracota sobre l'enllaç.

### Fitxa d'hotel
El reportatge d'un hotel, amb l'ordre i la graella de Layout.
- **Dades de capçalera:** una llista de definicions en Metadades amb tres files (Ubicació, Territori, Distintiu), cadascuna en dues columnes de 6,5 rem i la resta, amb 16 px de separació i 12 px de padding vertical, una línia a sobre de cada fila i una sota l'última. L'etiqueta és oliva i el valor, bosc. El territori és un enllaç subratllat al directori filtrat, que passa a oliva en hover. El distintiu porta la branca d'olivera i, 12 px després, el nom complet en majúscules amb 0,14em de tracking, a la mida de Metadades de la llista.
- **Portada:** fotografia en marc a tota l'amplada del contenidor amb `foto-editorial` i crèdit en Metadades oliva: "Fotografia provisional: autor (Unsplash)".
- **L'Essència:** títol en H2 i, 40 px més avall, el relat en Relat romana (màxim 62ch, 24 px entre paràgrafs). 40 px sota el relat, la nota "Text d'exemple de la redacció de Sojorn" en Metadades oliva.
- **Informació pràctica:** títol a escala H4 i, 24 px més avall, una llista de definicions amb una línia a sobre i una sota cada fila (Adreça, Telèfon, Correu, Web, Habitacions, Obert) en la mateixa composició de 6,5 rem: etiqueta en Metadades oliva i valor en cos. El telèfon i el correu són enllaços que se subratllen en hover; la web es mostra només com a domini. 32 px més avall, el botó sobre paper cap a la web de l'hotel i, 16 px per sota, la nota de prescriptor en Metadades oliva (màxim 36ch).
- **Per què l'hem triat i Els seus universos:** títols a escala H3 i, 40 px més avall, llistes amb filets (vegeu Llista amb filets). Cada univers és un enllaç al directori filtrat per aquell univers, que se subratlla en hover.
- **Galeria, tancament i relacionats:** vegeu els components corresponents.

### Galeria
Un mosaic de tres a cinc fotografies d'angle recte, amb 24 px entre marcs i `foto-editorial`.
- **Primer bloc:** a partir de 1024 px, un rectangle 16:9 de 12 columnes i dues files: la primera foto a 7 columnes i les dues files, i la segona i la tercera apilades a 5 columnes. Els marcs prenen l'alçada de la graella.
- **Segon bloc:** 24 px més avall, si n'hi ha quatre, la quarta és una panoràmica 21:9 a tota l'amplada; si n'hi ha cinc, un rectangle 3:1 amb una peça de 5 columnes i una de 7.
- **Mòbil i tauleta:** per sota de 1024 px, s'apilen amb proporció fixa: la primera en 4:5 i la resta en 4:3.
- **Crèdit:** 16 px sota el mosaic, en Metadades oliva: "Fotografies provisionals: autors (Unsplash)".

### Tancament bosc
La pàgina de color que tanca el reportatge: la sortida cap a la web de l'hotel.
- **Camp:** secció bosc a tota l'amplada, amb text paper, selecció invertida i `seccio-amplia` a dalt i a baix. Sense filet ni abans ni després.
- **Contingut centrat:** el nom de l'hotel en H2 (màxim 18ch); la ubicació (poble, comarca) en Entradeta cursiva (màxim 40ch) 24 px més avall; el botó sobre bosc en variant exterior, "[ VISITA LA WEB DE L'HOTEL ]", 48 px més avall; i la nota de prescriptor en Metadades pedra-200 (màxim 46ch) 32 px per sota.

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
- **Aparició** (animate-aparicio: 280 ms, ease-sojorn, només opacitat de 0 a 1): la recomposició de la graella del directori, o del seu estat buit, després que l'usuari canviï un filtre.
- **Estat:** 200 ms per als canvis de color de vora i de text, 500 ms per a la línia que creix sota el botó, sempre amb ease-sojorn. Als components interactius, temps curts: 120 ms de repòs abans de seleccionar un territori, 200 ms per al contorn i el color de l'etiqueta del mapa, canvi d'opacitat del panell (text, enllaç i fotografia) en 200 ms d'entrada i 120 ms de sortida, línia i pujada de l'univers en 280 ms d'entrada i 160 ms de sortida, i filet terracota de l'opció triada dels filtres en 200 ms.
- **Hover:** la variant hover de Tailwind v4 només s'aplica amb `@media (hover: hover)`, i el hover del mapa només respon al ratolí; en pantalla tàctil no hi ha estat de hover. A la targeta d'hotel, el hover és només el subratllat del nom.

**La Regla de l'Aparició.** El directori només es fon quan l'usuari canvia un filtre: mai en carregar la pàgina ni en arribar amb una adreça ja filtrada. És només opacitat, i la barra de filtres i el recompte no es mouen.

**La Regla del Moviment Reduït.** Amb `prefers-reduced-motion: reduce`, animate-entrada val `none` i el contingut és visible des del primer moment. El desplaçament suau cap a les àncores només s'activa amb `no-preference`. No hi ha cap anul·lació global de durades: cada animació declara el seu estat reduït. Les respostes de color i opacitat es mantenen, i per això animate-aparicio, que és només opacitat, no canvia; la línia que creix sota el botó sobre bosc es fon en lloc de dibuixar-se, la targeta d'univers no gira i intercanvia les cares amb un fos de 200 ms i el filet de l'opció triada dels filtres apareix sense transició.

## Do's and Don'ts

### Do:
- **Do** fes servir `bg-paper` com a fons únic de pàgina i `text-bosc` com a tinta per defecte.
- **Do** separa continguts amb `border-t` (el color de vora per defecte ja és oliva al 20%) o amb espai; sobre bosc, amb `border-paper/20`.
- **Do** fes servir `<Divider/>` (amb `on="bosc"` sobre bosc) a la llista de criteris, una línia per fila i una de tancament, i entre dues seccions de paper consecutives, amb l'espai `seccio` a banda i banda.
- **Do** a la home, deixa els universos en quatre targetes de dues columnes que giren sobre si mateixes per mostrar una fotografia; el gir és només rotateY i mai canvia l'alçada de la targeta.
- **Do** dona a cada secció `py-seccio` i reserva `py-seccio-amplia` per als moments de pausa.
- **Do** limita el text de cos a `max-w-mesura` (65ch) i les entradetes a 40ch.
- **Do** fes servir la cursiva de Spectral per a l'èmfasi i per a les entradetes.
- **Do** fes servir `text-relat` només en Spectral: romana per al relat de la fitxa (màxim 62ch) i cursiva per a la frase de la targeta (màxim 40ch).
- **Do** manté la terracota per a focus, enllaços actius, la selecció del mapa (contorn i etiqueta) i el filet de l'opció triada dels filtres sobre paper.
- **Do** escriu els noms dels distintius en majúscules amb 0,14em de tracking: en Interfície a la llegenda i als filtres, i a la mida de Metadades a la fitxa de dades. A la targeta només hi va la branca d'olivera, amb el nom per als lectors de pantalla.
- **Do** dibuixa la cartografia amb traços d'1 px non-scaling-stroke en oliva (30% per a comarques, 45% per al límit) i posa el crèdit de l'ICGC visible sota el mapa.
- **Do** dona a tot control interactiu nou un equivalent accessible de text, com les etiquetes del mapa, que són pestanyes, o els filtres, que són botons d'opció, i amaga el dibuix decoratiu als lectors de pantalla.
- **Do** dins d'un camp bosc, fes servir paper per al text, `text-pedra-200` per al text secundari i `selection:bg-paper selection:text-bosc` a la secció; el focus en paper ja l'aplica la regla base de `bg-bosc`.
- **Do** tracta tota fotografia a sang amb `saturate-50 sepia-40`, un vel `bg-bosc/70` i una fosa a bosc sòlid a la base, i torna a mesurar el contrast del text (4,5:1 per sota de 24 px) cada cop que canviï la foto.
- **Do** tracta tota fotografia en marc amb `foto-editorial`, en un marc d'angle recte de proporció fixa amb fons `bg-pedra-100`, i posa'n el crèdit visible en Metadades oliva.
- **Do** marca visiblement el contingut d'exemple amb una nota en Metadades: al directori sota l'entradeta, a la fitxa sota la frase i sota el relat, i a les notes de prescriptor del panell i del tancament.
- **Do** anuncia que l'enllaç a la web d'un hotel s'obre fora de Sojorn: `target="_blank"`, `rel="noopener noreferrer"` i el text ocult "(s'obre en una pestanya nova)", com fa la variant `exterior` de BotoBosc.
- **Do** anima les entrades amb `animate-entrada`, que ja val `none` amb moviment reduït.
- **Do** anima la recomposició del directori amb `animate-aparicio` només després d'un canvi de filtre, mai en carregar.
- **Do** manté les transicions d'estat dels components interactius entre 120 i 280 ms amb ease-sojorn, i amb moviment reduït deixa-hi només opacitat i color.

### Don't:
- **Don't** facis servir ombres, radis arrodonits, targetes amb fons ni icones decoratives. La branca d'olivera no és una icona: és el segell de la guia.
- **Don't** afegeixis un mode fosc: un camp bosc és un bloc de color de la pàgina, no un tema.
- **Don't** posis una etiqueta petita en majúscules sobre un titular; el titular parla sol. Les metadades (Empordà · Girona) van sota o al costat del nom, no com a avantsala.
- **Don't** facis servir la terracota en superfícies grans ni sobre bosc, ni el pedra-500 per a text petit.
- **Don't** omplis cap comarca ni cap territori del mapa amb color, ni en repòs ni en selecció.
- **Don't** facis que sortir del mapa desfaci la selecció, ni afegeixis una llista de territoris al costat del mapa: la selecció del mapa es fa sobre el mateix mapa. Els filtres del directori són una altra pàgina.
- **Don't** donis cursor de punter a elements que no enllacen, com les targetes dels universos.
- **Don't** representis nivells inactius dels distintius amb estrelles grises; el nivell es compta pel nombre de marques.
- **Don't** reintroduïssis la paleta de colors per defecte de Tailwind (zinc, stone, etc.); no existeix al tema.
- **Don't** barregis famílies dins d'un titular.
- **Don't** facis servir pesos de Spectral fora de 300 i 400.
- **Don't** afegeixis mides de text fora de l'escala de `globals.css`, ni facis servir Relat per a titulars, etiquetes o interfície.
- **Don't** posis text d'interfície directament sobre la fotografia; va sobre un fons bosc sòlid.
- **Don't** escalis, moguis ni filtris diferent la imatge d'una targeta en hover; el hover només subratlla el nom.
- **Don't** facis servir una fotografia que mostri un lloc o un negoci real identificable que contradigui l'hotel fictici o un altre hotel, ni comparteixis una mateixa fotografia entre dos hotels.
- **Don't** facis que la graella del directori es fongui en carregar la pàgina, ni moguis la barra de filtres quan canvia el resultat.
- **Don't** reintroduïssis una anul·lació global de durades per al moviment reduït; cada animació declara el seu estat reduït.
