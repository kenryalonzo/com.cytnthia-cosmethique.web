import { Play } from "lucide-react";

export default function PlayButton() {
  return (
    <div className="absolute top-[11.5rem] left-3 z-40 flex items-center gap-2 sm:top-[12.5rem] sm:left-5 sm:gap-4 md:top-1/4 md:left-12">
      <button
        type="button"
        aria-label="Lire le film de la marque"
        className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-blue-dark/18 transition-all duration-500 ease-out hover:border-brand-blue-dark/30 hover:bg-brand-blue-dark/[0.04] sm:h-14 sm:w-14 md:h-16 md:w-16"
      >
        <Play
          size={18}
          className="ml-0.5 h-[18px] w-[18px] text-brand-blue-dark transition-colors duration-500 group-hover:text-brand-gold sm:h-5 sm:w-5 md:h-5 md:w-5"
          fill="currentColor"
        />
      </button>
      <span className="hidden text-base leading-tight text-brand-muted sm:block sm:text-[17px] md:text-[18px]">
        Brand
        <br />
        Film
      </span>
    </div>
  );
}
