import Image from "next/image";
import Link from "next/link";
import { MarcaDistintiu } from "@/components/home/MarcaDistintiu";
import { distintiu } from "@/lib/guia";
import type { HotelResum } from "@/lib/hotels";

type TargetaHotelProps = {
  hotel: HotelResum;
  /** Gran: peça destacada amb el nom a H3. Estàndard: nom a H4. */
  mida: "gran" | "estandard";
  /** Per defecte, horitzontal 16:9 per a les grans i vertical 3:4 per a les estàndard. */
  format?: "horitzontal" | "vertical";
  sizes: string;
  preload?: boolean;
  /** Nivell del títol dins de la pàgina. */
  titol?: "h2" | "h3";
};

// Targeta d'hotel: fotografia, filet, nom amb la marca del distintiu, ubicació i frase.
// Tota la targeta és clicable a través de l'enllaç del nom (::after estès sobre la targeta).
export function TargetaHotel({
  hotel,
  mida,
  format = mida === "gran" ? "horitzontal" : "vertical",
  sizes,
  preload = false,
  titol: Titol = "h2",
}: TargetaHotelProps) {
  const marca = distintiu(hotel.distintiu);

  return (
    <article className="group relative">
      <div
        className={`relative overflow-hidden bg-pedra-100 ${format === "horitzontal" ? "aspect-video" : "aspect-[3/4]"}`}
      >
        <Image
          src={hotel.portada.src}
          alt={hotel.portada.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="foto-editorial object-cover"
        />
      </div>
      <div className="mt-5 border-t pt-5">
        <div className="flex items-baseline justify-between gap-6">
          <Titol className={mida === "gran" ? "text-h3" : "text-h4"}>
            <Link
              href={`/hotels/${hotel.slug}`}
              className="decoration-1 underline-offset-[0.18em] group-hover:underline after:absolute after:inset-0"
            >
              {hotel.nom}
            </Link>
          </Titol>
          <span className="shrink-0">
            <MarcaDistintiu nivell={marca.nivell} contorn={marca.id === "icon"} className="text-oliva" />
            <span className="sr-only">{marca.nom}</span>
          </span>
        </div>
        <p className="mt-2 text-meta text-oliva">
          {hotel.poble} · {hotel.comarca}
        </p>
        <p className="mt-4 max-w-[40ch] font-serif text-relat italic">{hotel.frase}</p>
      </div>
    </article>
  );
}
