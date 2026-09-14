type MarcaDistintiuProps = {
  /** Nombre de marques: 1 Selection, 2 Signature, 3 Icon. */
  nivell: 1 | 2 | 3;
  /** Només contorn: el tractament discret reservat a Icon. */
  contorn?: boolean;
  className?: string;
};

// Estrella de quatre puntes dibuixada a mà: la marca ✦ de la Guia Sojorn.
const ESTRELLA =
  "M6 0C6.55 3.4 8.6 5.45 12 6C8.6 6.55 6.55 8.6 6 12C5.45 8.6 3.4 6.55 0 6C3.4 5.45 5.45 3.4 6 0Z";

export function MarcaDistintiu({ nivell, contorn = false, className = "" }: MarcaDistintiuProps) {
  return (
    <span aria-hidden="true" className={`inline-flex gap-1.5 ${className}`}>
      {Array.from({ length: nivell }, (_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="size-3 overflow-visible">
          <path
            d={ESTRELLA}
            fill={contorn ? "none" : "currentColor"}
            stroke={contorn ? "currentColor" : "none"}
            strokeWidth={0.9}
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </span>
  );
}
