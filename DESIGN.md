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
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.75rem, 0.5rem + 8vw, 7.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.6rem + 2.9vw, 4.25rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.5rem + 1.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  h4:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.625rem, 1.35rem + 0.7vw, 2rem)"
    fontWeight: 500
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
    fontFamily: "Cormorant Garamond, Georgia, serif"
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
---

# Design System: Sojorn

## Overview

**Creative North Star: "La guia en paper"**

Sojorn es comporta com una guia impresa en paper bo: una publicació que selecciona, no un aparador que ven. Tot el sistema s'aguanta en tres materials: el paper càlid del fons, la tinta verd bosc i les línies fines d'oliva que ordenen la pàgina com els filets d'una maqueta editorial. L'autoritat ve de la tipografia i de l'aire, mai de l'ornament.

La densitat és de galeria: poques idees per pantalla, seccions separades per molt d'espai negatiu i una jerarquia tipogràfica de salt dramàtic, amb titulars serif molt grans i lleugers davant d'un text funcional petit, net i llegible. La interfície és plana i d'angle recte; la profunditat la dona la fotografia, no les ombres.

Anti-referències confirmades: l'estètica d'OTA (Booking), els colors turístics, les targetes amb ombra, els botons grossos, els radis arrodonits i les icones decoratives.

**Key Characteristics:**
- Un sol tema clar, en paper; sense mode fosc.
- Serif Cormorant Garamond per a la veu editorial i Geist per a la informació.
- Línies d'1 px en oliva al 20% com a única estructura visible.
- Angle recte i zero ombres a tot arreu.
- Espai negatiu generós: les seccions respiren entre 96 i 128 px.

## Colors

Una paleta de territori: paper, bosc i oliva estructuren; la terracota només apunta.

### Primary
- **Verd bosc** (bosc): tinta principal. Titulars, text de cos important, botó principal i panells foscos. Contrast de 13,1:1 sobre paper.

### Secondary
- **Oliva** (oliva): text secundari, descripcions, metadades i peus de foto. Contrast de 6,6:1 sobre paper. És també el color de les línies, al 20%.

### Tertiary
- **Terracota** (terracota): accent escàs. Focus, enllaç actiu, el distintiu ✦ i detalls d'1 px. Contrast de 5,5:1 sobre paper, vàlid per a text petit.

### Neutral
- **Paper** (paper): fons global de tot el lloc i text sobre panells bosc.
- **Pedra** (pedra-50 a pedra-900): grisos càlids en OKLCH, al to 95 i amb croma baixa, per a fons alterns (50 a 200), línies i estats inactius (300 a 400) i text de suport (600 en amunt, 5,0:1 o més). Pedra-500 (3,6:1) només serveix per a text gran o elements no textuals.
- **Línia** (linia): oliva al 20%. Separadors, vores i divisions. És el color de vora per defecte de tots els elements.

### Named Rules
**La Regla de la Terracota Escassa.** La terracota ocupa com a molt el 2% d'una pantalla. Mai omple un fons, un bloc o un botó sencer; viu en línies, glifs i estats.

**La Regla del Paper Únic.** Només hi ha un tema: paper clar. Cap secció no s'inverteix a mode fosc; un panell bosc és un bloc de color dins de la mateixa pàgina, no un canvi de tema.

## Typography

**Display Font:** Cormorant Garamond (amb Georgia i serif)
**Body Font:** Geist (amb ui-sans-serif i system-ui)

**Character:** una garalda d'alt contrast, lleugera i amb cursiva expressiva, fa de veu del crític; una grotesca neutra i precisa fa de fitxa tècnica. La serif parla, la sans informa.

### Hierarchy
- **H1** (300, de 60 a 120 px, 1,02): el titular principal d'una pantalla, com el claim, el nom d'un hotel o el d'un territori. N'hi ha un per pàgina.
- **H2** (300, de 44 a 68 px, 1,06): obertura de secció.
- **H3** (400, de 34 a 48 px, 1,1): subseccions i blocs d'una fitxa (L'Hotel, El Territori).
- **H4** (500, de 26 a 32 px, 1,18): títols de bloc petits, com "Per què l'hem seleccionat".
- **H5** (Geist 500, 18 px, 1,45): títols funcionals dins de llistes i formularis.
- **H6** (Geist 600, 16 px, 1,5): el títol funcional mínim.
- **Entradeta** (Cormorant cursiva 400, de 22 a 26 px, 1,4): la frase editorial en cursiva que resumeix un hotel o territori. Amplada màxima de 40ch.
- **Cos** (Geist 400, 16 px, 1,7): text de lectura i descripcions, en oliva o bosc. Amplada màxima de 65ch.
- **Interfície** (Geist 500, 15 px, 1,4): navegació, botons i etiquetes de camp.
- **Metadades** (Geist 400, 13 px, 1,5, +0,01em): territori i província, peus de foto, dates.

### Named Rules
**La Regla del Salt Dramàtic.** Entre l'H1 i el cos hi ha com a mínim un factor de 5 (120 px contra 16 px a escriptori). Mai no s'afegeixen mides intermèdies improvisades per suavitzar el salt; el contrast és la jerarquia.

**La Regla de la Cursiva.** L'èmfasi dins d'un titular es fa amb la cursiva de la mateixa Cormorant, mai amb negreta, color o una altra família.

**La Regla del Pes Invers.** Com més gran és la serif, més lleugera: 300 per a H1 i H2, 400 per a H3 i 500 per a H4, perquè les mides petites de Cormorant necessiten cos.

## Layout

Contenidor de pàgina de 90rem (1440 px) centrat, amb marges laterals fluids de 20 a 80 px (token marge). Graella de 12 columnes amb separació de 24 px i composició asimètrica: els titulars poden ocupar 10 o 11 columnes i el text descriptiu s'hi desplaça cap a una columna estreta (4 columnes, començant a la 8).

El ritme vertical és generós: cada secció fa servir el padding `seccio` (de 96 a 128 px, l'equivalent fluid de `py-24` a `py-32`) i els moments de pausa, `seccio-amplia` (de 128 a 192 px). Hi ha més espai sobre un titular que sota. Per sota de 768 px, tota composició asimètrica col·lapsa a una sola columna.

### Named Rules
**La Regla de l'Aire.** Dues seccions mai no se separen amb menys de 96 px. Si una pantalla sembla buida, és correcte; si sembla plena, sobra contingut.

**La Regla de la Línia.** Les divisions es fan amb una línia d'1 px en oliva al 20% (o amb espai), mai amb caixes, fons de targeta o ombres. S'usa una sola línia per canvi de grup, no una a cada fila.

## Elevation & Depth

El sistema és completament pla. Les escales d'ombra de Tailwind (`shadow`, `inset-shadow`, `drop-shadow`, `text-shadow`) estan eliminades del tema i no existeixen. La profunditat s'expressa amb el contrast entre paper i panells bosc, amb la fotografia a sang i amb les línies fines.

### Named Rules
**La Regla Plana.** Cap element no projecta ombra, en cap estat. El hover i el focus canvien color, línia o posició, mai elevació.

## Shapes

Angle recte absolut. L'escala de radis de Tailwind està eliminada del tema: `rounded-xl` i similars no generen CSS. Les vores són sempre d'1 px i en color línia, excepte el focus, que és d'1 px en terracota amb 4 px de separació.

### Named Rules
**La Regla de l'Angle Recte.** Radi 0 a botons, camps, imatges i contenidors. Una cantonada arrodonida trenca el sistema.

## Do's and Don'ts

### Do:
- **Do** fes servir `bg-paper` com a fons únic de pàgina i `text-bosc` com a tinta per defecte.
- **Do** separa continguts amb `border-t` (el color de vora per defecte ja és oliva al 20%) o amb espai.
- **Do** dona a cada secció `py-seccio` i reserva `py-seccio-amplia` per als moments de pausa.
- **Do** limita el text de cos a `max-w-mesura` (65ch) i les entradetes a 40ch.
- **Do** fes servir la cursiva de Cormorant per a l'èmfasi i per a les entradetes.
- **Do** manté la terracota per a focus, enllaços actius i el distintiu ✦.

### Don't:
- **Don't** facis servir ombres, radis arrodonits, targetes amb fons ni icones decoratives.
- **Don't** afegeixis un mode fosc ni inverteixis seccions.
- **Don't** posis una etiqueta petita en majúscules sobre un titular; el titular parla sol. Les metadades (Empordà · Girona) van sota o al costat del nom, no com a avantsala.
- **Don't** facis servir la terracota en superfícies grans ni el pedra-500 per a text petit.
- **Don't** reintroduïssis la paleta de colors per defecte de Tailwind (zinc, stone, etc.); no existeix al tema.
- **Don't** barregis famílies dins d'un titular.
