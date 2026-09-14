---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components/Divider.tsx"]
---

# Home (app/page.tsx)

## Scope and mode

- Superfície: pàgina principal, manifest de la guia.
- Mode: Persuade. El visitant ha de creure que Sojorn és una guia amb criteri i actuar descobrint la selecció.
- Prioritat: marca i criteri per sobre de cerca o transacció. Sense cercador, preus ni valoracions.

## Audience, action, proof, constraints

- Audiència: viatger amb criteri en el primer contacte amb Sojorn.
- Acció: `[ DESCOBREIX LA SELECCIÓ ]`, que fa un salt a Els Universos (encara no hi ha catàleg d'hotels).
- Prova: el text real del manifest, els sis criteris i els universos del document de marca (`docs/references/sojorn.pdf`). La fotografia del hero és un placeholder d'Unsplash i s'ha de substituir per fotografia pròpia.
- Restriccions: tokens de DESIGN.md; sense ombres ni radis; separació amb línies d'1 px en oliva al 20%; espaiat `py-seccio`; criteris sense numeració; tancament amb la frase central de la marca i un peu mínim.

## Direction contract

THESIS: La home és la primera pàgina d'una guia impresa: el nom, el territori i el criteri abans que cap habitació. Refusa la home d'OTA (cercador sobre foto, targetes d'hotel, preus, notes i ofertes).

OWN-WORLD: Camps sencers de paper #F8F4EC i verd bosc #262C1F; filets d'1 px en oliva al 20% (en paper al 20% sobre bosc); Cormorant Garamond 300 molt gran, amb cursiva per a la veu; Geist petit per a la informació; text secundari sobre bosc en pedra-200; angle recte a tot arreu; fotografia a sang amb un vel de bosc; terracota només al focus.

STORY: El visitant veu un paisatge i el nom SOJORN, i llegeix el claim. Al manifest entén per què existeix la guia i els sis criteris que cal complir per ser-hi. A Els Universos veu com s'ordena la selecció. La frase final fixa la idea central. L'acció és descobrir la selecció.

FIRST VIEWPORT: Foto a sang a 100dvh amb vel de bosc graduat. Al centre òptic, SOJORN com a H1 en paper, de 60 a 120 px, pes 300, amb el tracking obert d'una capçalera. Sota, "Dormir en un lloc. Viure un territori." en Cormorant cursiva a mida d'entradeta. A 48 px, el botó rectangular de fons bosc amb vora de paper al 30% i el text `[ DESCOBREIX LA SELECCIÓ ]` en Geist UI majúscula. Interacció signatura: una línia d'1 px en paper sota el text del botó que creix d'esquerra a dreta en hover i focus. Al manifest, la columna d'introducció queda fixa mentre els criteris passen. Moviment: una sola entrada orquestrada del contingut del hero, de 900 ms amb ease-sojorn, visible per defecte si no hi ha moviment.

FORM: estructura pinada per l'usuari (hero editorial, manifest bosc amb graella asimètrica de 12 columnes, índex tipogràfic d'universos, frase de tancament i peu). Sense tirada de concept-seed perquè la petició estava especificada amb precisió. Seed key: cap.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Fotografia pròpia del hero.
- Destinació real del botó quan existeixi el catàleg.
- Navegació global.
