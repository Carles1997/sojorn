---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components/Divider.tsx","components/home"]
---

# Home (app/page.tsx)

## Scope and mode

- Superfície: pàgina principal, manifest de la guia.
- Mode: Persuade. El visitant ha de creure que Sojorn és una guia amb criteri i actuar descobrint el territori i la selecció.
- Prioritat: marca i criteri per sobre de cerca o transacció. Sense cercador, preus ni valoracions.

## Audience, action, proof, constraints

- Audiència: viatger amb criteri en el primer contacte amb Sojorn.
- Acció: `DESCOBREIX LA SELECCIÓ`, que fa un salt a Catalunya (`#catalunya`), la primera secció de descoberta (confirmat per l'usuari).
- Prova: textos del document de marca (`docs/references/sojorn.pdf`), sense text afegit pel constructor. La fotografia del hero és un placeholder d'Unsplash (Ben Steele, Torroja del Priorat, Unsplash License). El mapa es genera a partir de les comarques de l'ICGC (CC BY 4.0, amb crèdit visible).
- Restriccions: tokens de DESIGN.md; sense ombres ni radis; línies d'1 px; espaiat `py-seccio`; criteris sense numeració; tres distintius amb la mateixa branca d'olivera plena (1, 2 i 3); quatre universos (La Taula, La Història, El Camí, La Família) en un sumari obert que gira per mostrar una foto; els universos no són enllaços mentre no tinguin pàgina (sense cursor d'enllaç).
- Tipografia serif: Spectral (Cormorant desplaça els accents catalans en totes les versions publicades).
- Territoris del mapa: Empordà (Alt i Baix Empordà), Garrotxa, Pirineus (Val d'Aran, Alta Ribagorça, Pallars Sobirà, Pallars Jussà, Alt Urgell, Cerdanya), Priorat, Penedès (Alt i Baix Penedès, Garraf), Terres de l'Ebre (Baix Ebre, Montsià, Ribera d'Ebre, Terra Alta). Confirmat per l'usuari.

## Direction contract

THESIS: La home és la primera pàgina d'una guia impresa: el nom, el territori i el criteri abans que cap habitació. Refusa la home d'OTA (cercador sobre foto, targetes d'hotel, preus, notes i ofertes) i el mapa turístic.

OWN-WORLD: Camps sencers de paper #EFE8DA i bosc #2A2011; filets d'1 px en oliva al 20% sobre paper i paper al 20% sobre bosc; Spectral 300 molt gran, amb cursiva per a la veu; Geist petit per a la informació; angle recte a tot arreu; fotografia a sang amb gradació càlida sota un vel de bosc; cartografia de línia hiperfina en oliva al 30%, sense farciments de color, amb el burdeus com a únic accent de selecció; focus en burdeus sobre paper i en paper sobre bosc.

STORY: Inspira (hero), explica per què existeix la guia i què cal complir per ser-hi (manifest i criteris), mostra el valor d'una referència i els seus distintius (La Guia Sojorn), convida a descobrir el territori al mapa (Catalunya) i les maneres de viure'l (Els universos), i tanca amb la idea central. L'acció és descobrir el territori.

FIRST VIEWPORT: Foto a sang a 100dvh, enquadrada cap a les terrasses, amb vel de bosc i gradació càlida; la base es fon en bosc sòlid cap al manifest. Al centre òptic, SOJORN com a H1 en paper, de 60 a 120 px, Spectral 300, amb el tracking obert d'una capçalera. Sota, "Dormir en un lloc. Viure un territori." en Spectral cursiva a mida d'entradeta. A 48 px, el botó rectangular de fons bosc amb vora de paper al 30% i el text `DESCOBREIX LA SELECCIÓ` en Geist UI majúscula. Interacció signatura de la pàgina: el mapa editorial de Catalunya, on sis territoris es ressalten amb un contorn de burdeus i actualitzen un panell de text d'alçada fixa amb un creuament curt i interrompible; al hero, una línia d'1 px en paper creix sota el text del botó. Moviment: una sola entrada orquestrada del hero; transicions CSS curtes (120 a 280 ms, ease-out fort) al mapa i als universos; amb moviment reduït, només opacitat i color.

FORM: forma fixada per l'usuari. Primer va dictar l'estructura amb aquestes paraules: «1. Hero Editorial (Full Screen) [...] 2. Secció Manifest ('Per què Sojorn') [...] 3. Secció Els Universos [...]». Després va validar una proposta de set blocs (Hero, Per què Sojorn, La Guia Sojorn, Catalunya, Els universos, La idea central, Peu) i hi va afegir: «Mapa Interactiu Editorial per a la Secció 'Catalunya' [...] mapa vectorial SVG minimalista de Catalunya dissenyat com una il·lustració d'art/cartografia de revista» i «Redisseny de la Secció 'Els Universos' (els 7 complets) [...] maquetació editorial asimètrica a 2 o 3 columnes (estil índex de llibre d'art o revista Kinfolk)». Com que cada secció té la forma dictada o validada per l'usuari, no s'ha fet tirada de concept-seed. Seed key: cap.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Fotografia pròpia del hero.
- Pàgines de territori i d'univers (quan existeixin, els elements del mapa i de la graella poden enllaçar-hi).
- Navegació global.
