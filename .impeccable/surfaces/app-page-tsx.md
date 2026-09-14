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
- Acció: `[ DESCOBREIX LA SELECCIÓ ]`, que fa un salt a Els Universos (encara no hi ha catàleg d'hotels; confirmat per l'usuari).
- Prova: el text real del manifest, els sis criteris i els universos del document de marca (`docs/references/sojorn.pdf`), sense text afegit pel constructor. La fotografia del hero és un placeholder d'Unsplash (Ben Steele, Torroja del Priorat, Unsplash License) i s'ha de substituir per fotografia pròpia.
- Restriccions: tokens de DESIGN.md; sense ombres ni radis; separació amb línies d'1 px en oliva al 20%; espaiat `py-seccio`; criteris sense numeració (confirmat per l'usuari); tancament amb la frase central de la marca i un peu mínim (confirmat per l'usuari).
- Tipografia serif: Spectral, triada per l'usuari després de comprovar que Cormorant Garamond desplaça els accents catalans en totes les versions publicades (Google Fonts, v4.002 i v3.609).

## Direction contract

THESIS: La home és la primera pàgina d'una guia impresa: el nom, el territori i el criteri abans que cap habitació. Refusa la home d'OTA (cercador sobre foto, targetes d'hotel, preus, notes i ofertes).

OWN-WORLD: Camps sencers de paper #F8F4EC i verd bosc #262C1F; filets d'1 px en oliva al 20% (en paper al 20% sobre bosc, un per fila a les llistes pinades per l'usuari amb `<Divider/>`); Spectral 300 molt gran, amb cursiva per a la veu; Geist petit per a la informació; text secundari sobre bosc en pedra-200; angle recte a tot arreu; fotografia a sang amb gradació càlida (sèpia i saturació reduïda) sota un vel de bosc que es fon en bosc sòlid a la base; focus en terracota sobre paper i en paper sobre bosc; selecció de text invertida a les superfícies bosc.

STORY: El visitant veu un paisatge i el nom SOJORN, i llegeix el claim. Al manifest entén per què existeix la guia i els sis criteris que cal complir per ser-hi. A Els Universos veu com s'ordena la selecció, amb els noms a escala de titular com un índex. La frase final fixa la idea central. L'acció és descobrir la selecció.

FIRST VIEWPORT: Foto a sang a 100dvh, enquadrada cap a les terrasses, amb vel de bosc i gradació càlida; la base es fon en bosc sòlid cap al manifest. Al centre òptic, SOJORN com a H1 en paper, de 60 a 120 px, Spectral 300, amb el tracking obert d'una capçalera. Sota, "Dormir en un lloc. Viure un territori." en Spectral cursiva a mida d'entradeta. A 48 px, el botó rectangular de fons bosc amb vora de paper al 30% i el text `[ DESCOBREIX LA SELECCIÓ ]` en Geist UI majúscula (una línia des de 640 px). Interacció signatura: una línia d'1 px en paper sota el text del botó que creix d'esquerra a dreta en hover i focus. Al manifest, la columna d'introducció queda fixa mentre els criteris passen. Moviment: una sola entrada orquestrada del contingut del hero, de 900 ms amb ease-sojorn; amb moviment reduït el contingut és visible immediatament.

FORM: forma fixada per l'usuari, que no va demanar exploració de direccions sinó que va dictar l'estructura amb aquestes paraules: «1. Hero Editorial (Full Screen): Imatge fotogràfica de fons [...] Titular 'SOJORN' en H1 [...] centrat. Subtítol descriptiu en Serif/Cursiva: 'Dormir en un lloc. Viure un territori.' Botó de composició fons `Verd Bosc` amb la línia d'interacció: `[ DESCOBREIX LA SELECCIÓ ]`. 2. Secció Manifest ('Per què Sojorn'): Fons complet `Verd Bosc (#262C1F)` i text `Paper (#F8F4EC)`. Grid asimètric de 12 columnes: columna esquerra amb el text d'introducció i columna dreta amb els 6 criteris fonamentals [...] estructurats amb el component de línia fina `<Divider/>`. 3. Secció Els Universos: Fons `Paper (#F8F4EC)`. Llista tipogràfica horitzontal o vertical d'índex (La Taula, El Paisatge, La Història, El Silenci) separada per línies d'1px de color oliva al 20%.» Respostes confirmades per l'usuari: el botó porta a Els Universos; criteris sense numeració; tancament amb frase central i peu mínim. Com que cada secció té la forma dictada per l'usuari, no s'ha fet tirada de concept-seed. Seed key: cap.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Fotografia pròpia del hero.
- Destinació real del botó quan existeixi el catàleg.
- Navegació global.
