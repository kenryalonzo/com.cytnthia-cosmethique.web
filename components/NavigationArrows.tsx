import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NavigationArrows() {
  return (
    <div className="absolute bottom-12 right-12 z-40 flex space-x-6">
      <button
        type="button"
        aria-label="Diapositive précédente"
        className="w-12 h-12 rounded-full border border-brand-blue-dark/20 flex items-center justify-center hover:border-brand-blue-dark hover:bg-brand-blue-dark/5 transition-all group"
      >
        <ChevronLeft size={24} className="text-brand-blue-dark group-hover:text-brand-gold transition-colors" />
      </button>
      <button
        type="button"
        aria-label="Diapositive suivante"
        className="w-12 h-12 rounded-full border border-brand-blue-dark/20 flex items-center justify-center hover:border-brand-blue-dark hover:bg-brand-blue-dark/5 transition-all group"
      >
        <ChevronRight size={24} className="text-brand-blue-dark group-hover:text-brand-gold transition-colors" />
      </button>
    </div>
  );
}
