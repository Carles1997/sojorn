# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Viatger amb criteri (usuari principal).** Persona que no busca "un lloc per dormir" sinó un lloc que li faci conèixer un territori de Catalunya. Arriba buscant inspiració i confiança abans que preu. La seva feina: descobrir un territori, trobar-hi l'hotel adequat i reservar-lo directament amb l'hotel.
- **Propietari o gestor d'hotel seleccionat (usuari secundari).** La seva fitxa a Sojorn enllaça amb la seva web oficial o de reserva; la reserva i el pagament els gestiona ell mateix.

## Product Purpose

Sojorn és una guia de prestigi d'hotels amb encant a Catalunya: una selecció independent i editorial, amb el paral·lelisme conceptual de la Guia Michelin. Existeix per descobrir, seleccionar i connectar hotels amb identitat, arrelats al seu territori, i posar en valor la cultura, la gastronomia, el paisatge i les persones de cada lloc.

L'èxit és que l'usuari recorri: m'inspira → em genera confiança → descobreixo → m'ho recomanen → trio → reservo amb l'hotel → visc el territori. La reserva és la conseqüència de la confiança, no el punt de partida.

## Positioning

Sojorn no és una OTA (tipus Booking) ni un agregador de ressenyes. Té autoritat pròpia: no vol la selecció més gran sinó l'adequada. Cada hotel es justifica amb criteri editorial signat per Sojorn ("Per què l'hem seleccionat", "El nostre criteri"), no amb notes mitjanes d'usuaris.

> No seleccionem hotels només perquè són bons. Els seleccionem perquè expliquen alguna cosa del lloc on són.

## Operating Context

- **Sojorn com a guia i prescriptor:** Sojorn no té motor de reserves propi ni processa pagaments. Cada fitxa d'hotel acaba amb les dades de contacte i un enllaç exterior a la web oficial o de reserva de l'hotel; la reserva i el pagament es fan directament amb l'hotel.
- **Descoberta organitzada com una guia:** per territoris (Empordà, Garrotxa, Pirineus, Priorat, Penedès, Terres de l'Ebre…), per universos Sojorn (La Taula, La Història, El Camí, La Família: maneres de viure el territori) i per distintius.

## Capabilities and Constraints

- **Stack existent:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, ESLint. Desplegament a Vercel des de GitHub (`main`).
- **Idioma:** només català. Cal suport complet de caràcters catalans (`à è é í ï ò ó ú ü ç l·l`).
- **Terminologia de producte:**
  - *Distintius:* SOJORN SELECTION, SOJORN SIGNATURE i SOJORN ICON (aquest últim, només per a casos excepcionals).
  - *Criteris Sojorn:* Identitat, Hospitalitat, Territori, Autenticitat, Excel·lència, Compromís.
  - *Dimensions de valoració editorial:* Identitat, Territori, Gastronomia, Experiència.
  - *Seccions de la fitxa d'hotel:* portada (fotografia, nom, ubicació i distintiu) → L'Essència (relat d'autor: per què és Sojorn, història i vincle amb el territori) → criteris i universos que el defineixen → galeria → informació pràctica i enllaç a la web de l'hotel.
  - *El nostre criteri:* les preguntes "Per què hi aniríem?", "Per què és especial?", "Per a qui el recomanem?" i "Quan hi aniríem?".
- **Decisions obertes:**
  - Model de negoci (qui paga i com).
  - Procés de selecció i avaluació d'hotels.
  - Si els usuaris tenen compte.

## Brand Commitments

- **Nom:** SOJORN.
- **Claim:** "Dormir en un destí. Viure un territori."
- **Descriptor:** "Una guia d'hotels amb encant a Catalunya."
- **Veu:** un expert que recomana un lloc a un amic, no un comercial. Concret, en primera persona del plural, serè, sense superlatius buits ni urgència comercial.
- **Referència completa:** `SOJORN_BRAND_GUIDELINES.md` (manifest, to, criteris). Font original: `docs/references/sojorn.pdf`. Referències visuals: `docs/references/WhatsApp Image *.jpeg`.
- **Tokens pinats per l'usuari** (paleta renovada el 21/09/2026 a partir de `docs/references/PALETA COLORS-2.pdf`: Deep Forest, Gold, Old Burgundy, Dark Olive i les cremes i pedres del moodboard):

  | Rol | Token | Valor |
  |---|---|---|
  | Fons global | Paper | `#EFE8DA` |
  | Text principal | Bosc | `#2A2011` |
  | Text secundari | Oliva | `#584E3B` |
  | Accents | Burdeus | `#6E2E29` |
  | Línies sobre bosc | Or | `#946A34` |
  | Titulars (serif) | — | Spectral (substitueix Cormorant Garamond, que desplaça els accents catalans en totes les versions publicades) |
  | Cos i UI (sans) | — | Geist |

- **Estructura pinada per l'usuari:**
  - Sense cantonades arrodonides grans ni ombres.
  - Separadors de línia fina de 1px en oliva al 20% d'opacitat.
  - Molt d'espai negatiu.

## Evidence on Hand

Encara no hi ha contingut real: ni hotels seleccionats, ni fotografia pròpia amb drets, ni textos editorials. Tot el contingut provisional ha d'anar clarament marcat com a tal. No s'han d'inventar hotels presentats com a reals, ni testimonis, xifres, premsa o valoracions. Les imatges de `docs/references/` són referències d'estil de tercers, no contingut publicable.

## Product Principles

1. **Criteri abans que volum.** Cada element ha de reforçar que hi ha una selecció amb judici, no un catàleg.
2. **El territori és el protagonista.** L'hotel s'explica pel lloc on és; la descoberta del territori precedeix la d'allotjament.
3. **Confiança abans que conversió.** Ni preus a la primera impressió, ni pressió comercial, ni ressenyes massives.
4. **Transparència en la reserva.** L'usuari ha d'entendre sempre que Sojorn recomana i que la reserva es fa directament amb l'hotel, a la seva web: l'enllaç diu on porta i que s'obre fora de Sojorn.
5. **Autoritat pròpia.** Sojorn signa les seves recomanacions; no és un intermediari neutre.

## Accessibility & Inclusion

Objectiu WCAG 2.2 AA: contrast de text AA sobre els fons de la marca, `prefers-reduced-motion` respectat, i navegació completa amb teclat per a la descoberta, els filtres del directori i l'enllaç a la web de cada hotel.
