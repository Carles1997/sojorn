---
version: 1
slug: "app-hotels-page-tsx"
primary_target: "app/hotels/page.tsx"
related_targets: ["app/hotels/[slug]/page.tsx","components/hotels","lib/hotels.ts","lib/guia.ts"]
---

# Hotels: directori i fitxa

## Abast i mode

- `/hotels`: directori de la selecció. Mode Read amb una capa Operate (filtrar).
- `/hotels/[slug]`: fitxa d'hotel com a reportatge. Mode Read; acció final cap a la web de l'hotel.
- Extensió del món establert (DESIGN.md): cap canvi d'identitat.

## Audiència i feina

Viatger amb criteri: vol entendre per què cada hotel és a la guia abans de voler-hi anar. Filtra com qui fulleja les seccions d'una guia (territori, univers, distintiu) i llegeix la fitxa sencera. Sojorn recomana; la reserva es fa a la web de l'hotel.

## Contingut i restriccions

- Hotels d'exemple ficticis, marcats com a tals al directori i a cada fitxa; web i correu en domini `.example`.
- Fotografies provisionals d'Unsplash amb autor i font a les dades.
- Sense preus, puntuacions ni ressenyes. Sense motor de reserves.

## Direction contract

THESIS: El directori és l'índex d'una guia impresa, no una pàgina de resultats: una selecció finita composta a dues columnes asimètriques, amb peces grans i peces estàndard que alternen. Refusa la graella uniforme de targetes, la barra lateral de filtres amb desplegables, els preus, les notes i el mapa amb xinxetes.

OWN-WORLD: Paper, tinta bosc, filets d'oliva al 20% i terracota només per a la selecció; la branca d'olivera dels distintius, en oliva. Spectral lleugera per als noms i cursiva per a les frases; Geist per a metadades i filtres. Fotos d'angle recte, sense ombra, amb contrast al 110% i sèpia al 10%. Els filtres són línies de text compostes com un sumari: opcions en Interfície, la triada en bosc amb un filet terracota.

STORY: El visitant veu d'entrada que la selecció és curta i triada; la fulleja per territori, univers o distintiu; obre una fitxa i la llegeix com un reportatge (portada, l'essència, per què l'hem triat, universos, galeria); surt cap a la web de l'hotel sabent que Sojorn recomana i l'hotel reserva.

FIRST VIEWPORT: `/hotels` a 1440: capçalera interna d'una línia; titular centrat a escala H2 amb una frase en cursiva a sota; barra de filtres a tota l'amplada entre filets, tres línies (Territori, Univers, Distintiu) amb el recompte a la dreta; la primera peça gran (7 columnes, 16:9) comença dins de la pantalla. Fitxa a 1440: nom a escala H1 a 8 columnes, ubicació, territori i distintiu a les 4 de la dreta alineats a la base, frase en cursiva i, a sota, la fotografia 16:9 a tota l'amplada del contenidor. Interacció signatura: filtrar recompon la graella amb un fos d'opacitat de 280 ms, sense cap salt de la barra.

FORM: Extensió d'un món establert amb un brief precís; estructura dictada pel brief de l'usuari. Tirada de conceptes renunciada deliberadament: new-work no la permet per a una sol·licitud precisa dins d'un món ja fixat per DESIGN.md (seed key: cap).

STORY afegit en la ronda de correccions: la fitxa tanca amb una pàgina de color bosc (nom, ubicació, enllaç a la web de l'hotel i nota de prescriptor) i, després, hotels relacionats per continuar la lectura.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Moment memorable

La fitxa llegida com una doble pàgina de revista: el relat en Spectral al costat d'un panell d'informació pràctica que acompanya la lectura i acaba en l'enllaç a la web de l'hotel.

## Decisions obertes

- Hotels, textos i fotografies reals.
- Pàgines d'univers i de territori pròpies (ara, filtres del directori).
