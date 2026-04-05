import { Play } from 'lucide-react';

export default function PlayButton() {
  return (
    <div className="absolute left-12 top-1/4 flex items-center space-x-4 z-40">
      <button
        type="button"
        aria-label="Lire le film de la marque"
        className="group flex h-16 w-16 items-center justify-center rounded-full border border-brand-blue-dark/18 transition-all duration-500 ease-out hover:border-brand-blue-dark/30 hover:bg-brand-blue-dark/[0.04]"
      >
        <Play size={20} className="ml-1 text-brand-blue-dark transition-colors duration-500 group-hover:text-brand-gold" fill="currentColor" />
      </button>
      <span className="text-[18px] text-brand-muted leading-tight">
        Brand<br />Film
      </span>
    </div>
  );
}
