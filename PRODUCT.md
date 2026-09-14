# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Viatger amb criteri (usuari principal).** Persona que no busca "un lloc per dormir" sinó un lloc que li faci conèixer un territori de Catalunya. Arriba buscant inspiració i confiança abans que preu. La seva feina: descobrir un territori, trobar-hi l'hotel adequat i sol·licitar-hi una estada.
- **Propietari o gestor d'hotel seleccionat (usuari secundari).** Rep les sol·licituds de reserva i les confirma o rebutja manualment. La seva disponibilitat se sincronitza via iCal/PMS.

## Product Purpose

Sojorn és una guia de prestigi d'hotels amb encant a Catalunya: una selecció independent i editorial, amb el paral·lelisme conceptual de la Guia Michelin. Existeix per descobrir, seleccionar i connectar hotels amb identitat, arrelats al seu territori, i posar en valor la cultura, la gastronomia, el paisatge i les persones de cada lloc.

L'èxit és que l'usuari recorri: m'inspira → em genera confiança → descobreixo → m'ho recomanen → trio → sol·licito → visc el territori. La reserva és la conseqüència de la confiança, no el punt de partida.

## Positioning

Sojorn no és una OTA (tipus Booking) ni un agregador de ressenyes. Té autoritat pròpia: no vol la selecció més gran sinó l'adequada. Cada hotel es justifica amb criteri editorial signat per Sojorn ("Per què l'hem seleccionat", "El nostre criteri"), no amb notes mitjanes d'usuaris.

> No seleccionem hotels perquè són bons. Els seleccionem perquè expliquen alguna cosa del lloc on són.

## Operating Context

- **Flux de reserva (model híbrid de sol·licitud):**
  1. L'usuari sol·licita disponibilitat des de Sojorn, sense pagament immediat.
  2. La sol·licitud queda **pendent** fins que el propietari la confirma manualment. La disponibilitat se sincronitza via iCal/PMS.
  3. Un cop acceptada, el pagament es fa **directament entre usuari i propietari**. Sojorn no processa pagaments.
- **Descoberta organitzada com una guia:** per territoris (Empordà, Garrotxa, Pirineus, Priorat, Penedès, Terres de l'Ebre…), per universos Sojorn (La Taula, El Paisatge, La Història, El Camí, El Silenci, El Romanticisme, La Terra) i per distintius.

## Capabilities and Constraints

- **Stack existent:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, ESLint. Desplegament a Vercel des de GitHub (`main`).
- **Idioma:** només català. Cal suport complet de caràcters catalans (`à è é í ï ò ó ú ü ç l·l`).
- **Terminologia de producte:**
  - *Distintius:* SOJORN SELECTION, SOJORN SIGNATURE i SOJORN ICON (aquest últim, només per a casos excepcionals).
  - *Criteris Sojorn:* Identitat, Hospitalitat, Territori, Autenticitat, Excel·lència, Compromís.
  - *Dimensions de valoració editorial:* Identitat, Territori, Gastronomia, Experiència.
  - *Seccions de la fitxa d'hotel:* L'Hotel → El Territori → La Taula → El Camí → La Vida Local.
  - *El nostre criteri:* les preguntes "Per què hi aniríem?", "Per què és especial?", "Per a qui el recomanem?" i "Quan hi aniríem?".
- **Decisions obertes:**
  - Model de negoci (qui paga i com).
  - Procés de selecció i avaluació d'hotels.
  - Integració concreta amb els PMS.
  - Si els usuaris tenen compte.

## Brand Commitments

- **Nom:** SOJORN.
- **Claim:** "Dormir en un lloc. Viure un territori."
- **Descriptor:** "Una guia d'hotels amb encant a Catalunya."
- **Veu:** un expert que recomana un lloc a un amic, no un comercial. Concret, en primera persona del plural, serè, sense superlatius buits ni urgència comercial.
- **Referència completa:** `SOJORN_BRAND_GUIDELINES.md` (manifest, to, criteris). Font original: `docs/references/sojorn.pdf`. Referències visuals: `docs/references/WhatsApp Image *.jpeg`.
- **Tokens pinats per l'usuari:**

  | Rol | Token | Valor |
  |---|---|---|
  | Fons global | Paper | `#F8F4EC` |
  | Text principal | Verd bosc | `#262C1F` |
  | Text secundari | Oliva | `#5A5744` |
  | Accents | Terracota | `#94513A` |
  | Titulars (serif) | — | Cormorant Garamond |
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
4. **Transparència en la sol·licitud.** L'usuari ha d'entendre sempre que la reserva és una sol·licitud pendent de confirmació, i que el pagament es fa directament amb el propietari.
5. **Autoritat pròpia.** Sojorn signa les seves recomanacions; no és un intermediari neutre.

## Accessibility & Inclusion

Objectiu WCAG 2.2 AA: contrast de text AA sobre els fons de la marca, `prefers-reduced-motion` respectat, i navegació completa amb teclat per al flux de sol·licitud.
