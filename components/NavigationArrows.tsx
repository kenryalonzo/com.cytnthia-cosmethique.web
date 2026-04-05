import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NavigationArrows() {
  return (
    <div className="absolute bottom-3 right-3 z-40 flex gap-3 sm:bottom-5 sm:right-5 sm:gap-5 md:bottom-12 md:right-12 md:gap-6">
      <button
        type="button"
        aria-label="Diapositive précédente"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue-dark/18 transition-all duration-500 ease-out hover:border-brand-blue-dark/50 hover:bg-brand-blue-dark/[0.04] sm:h-11 sm:w-11 md:h-12 md:w-12"
      >
        <ChevronLeft
          size={20}
          className="text-brand-blue-dark transition-colors duration-500 group-hover:text-brand-gold md:h-6 md:w-6"
        />
      </button>
      <button
        type="button"
        aria-label="Diapositive suivante"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue-dark/18 transition-all duration-500 ease-out hover:border-brand-blue-dark/50 hover:bg-brand-blue-dark/[0.04] sm:h-11 sm:w-11 md:h-12 md:w-12"
      >
        <ChevronRight
          size={20}
          className="text-brand-blue-dark transition-colors duration-500 group-hover:text-brand-gold md:h-6 md:w-6"
        />
      </button>
    </div>
  );
}
