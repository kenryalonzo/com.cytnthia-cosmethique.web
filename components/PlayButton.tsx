import { Play } from 'lucide-react';

export default function PlayButton() {
  return (
    <div className="absolute left-12 top-1/4 flex items-center space-x-4 z-40">
      <button
        type="button"
        aria-label="Lire le film de la marque"
        className="w-16 h-16 rounded-full border border-brand-blue-dark/20 flex items-center justify-center hover:bg-brand-blue-dark/5 transition-colors group"
      >
        <Play size={20} className="text-brand-blue-dark ml-1 group-hover:text-brand-gold transition-colors" fill="currentColor" />
      </button>
      <span className="text-[18px] text-brand-muted leading-tight">
        Brand<br />Film
      </span>
    </div>
  );
}
