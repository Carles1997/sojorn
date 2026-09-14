import type { ReactNode } from "react";

type BotoBoscProps = {
  href: string;
  children: ReactNode;
  /** Enllaç fora de Sojorn: s'obre en una pestanya nova i ho anuncia als lectors de pantalla. */
  exterior?: boolean;
  className?: string;
};

// Botó sobre bosc: majúscules amb tracking obert entre claudàtors, vora de paper al 30% i una línia
// d'1 px que creix sota l'etiqueta en hover i focus.
export function BotoBosc({ href, children, exterior = false, className = "" }: BotoBoscProps) {
  return (
    <a
      href={href}
      target={exterior ? "_blank" : undefined}
      rel={exterior ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center border border-paper/30 bg-bosc px-6 py-4 text-center text-ui tracking-[0.14em] text-paper uppercase transition-colors duration-200 ease-sojorn hover:border-paper/70 sm:px-8 sm:whitespace-nowrap ${className}`}
    >
      <span className="relative">
        <span aria-hidden="true">[ </span>
        {children}
        <span aria-hidden="true"> ]</span>
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1.5 h-px origin-left scale-x-0 bg-paper transition-transform duration-500 ease-sojorn group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:scale-x-100 motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-200 motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-visible:opacity-100"
        />
      </span>
      {exterior ? <span className="sr-only"> (s&apos;obre en una pestanya nova)</span> : null}
    </a>
  );
}
