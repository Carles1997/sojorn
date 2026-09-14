import { COMARQUES, MAPA_ALCADA, MAPA_AMPLADA, TERRITORIS_GEO, type TerritoriId } from "./mapa-catalunya-data";
import { MapaInteractiu, type TerritoriGeo } from "./MapaInteractiu";
import { TERRITORIS } from "./territoris";

// Capes estàtiques del mapa. El contorn de Catalunya surt d'un traç de 2 px de totes les comarques
// tapat per dins amb el seu farciment de paper: només en queda la meitat exterior.
function capaFons() {
  return (
    <>
      <g className="text-oliva" opacity={0.45}>
        {COMARQUES.map((c) => (
          <path
            key={c.nom}
            d={c.d}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
      <g className="text-paper">
        {COMARQUES.map((c) => (
          <path key={c.nom} d={c.d} fill="currentColor" stroke="none" />
        ))}
      </g>
    </>
  );
}

function capaLinies() {
  return (
    <g className="text-oliva" opacity={0.3} pointerEvents="none">
      {COMARQUES.map((c) => (
        <path
          key={c.nom}
          d={c.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </g>
  );
}

export function MapaCatalunya() {
  const geo = Object.fromEntries(
    TERRITORIS.map((t) => [
      t.id,
      {
        zones: COMARQUES.filter((c) => c.territori === t.id).map((c) => c.d),
        ...TERRITORIS_GEO[t.id],
      },
    ]),
  ) as Record<TerritoriId, TerritoriGeo>;

  return (
    <MapaInteractiu
      territoris={TERRITORIS}
      geo={geo}
      fons={capaFons()}
      linies={capaLinies()}
      amplada={MAPA_AMPLADA}
      alcada={MAPA_ALCADA}
    />
  );
}
