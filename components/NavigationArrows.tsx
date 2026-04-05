import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NavigationArrows() {
  return (
    <div className="absolute bottom-12 right-12 z-40 flex space-x-6">
      <button
        type="button"
        aria-label="Diapositive précédente"
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue-dark/18 transition-all duration-500 ease-out hover:border-brand-blue-dark/50 hover:bg-brand-blue-dark/[0.04]"
      >
        <ChevronLeft size={24} className="text-brand-blue-dark transition-colors duration-500 group-hover:text-brand-gold" />
      </button>
      <button
        type="button"
        aria-label="Diapositive suivante"
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue-dark/18 transition-all duration-500 ease-out hover:border-brand-blue-dark/50 hover:bg-brand-blue-dark/[0.04]"
      >
        <ChevronRight size={24} className="text-brand-blue-dark transition-colors duration-500 group-hover:text-brand-gold" />
      </button>
    </div>
  );
}
