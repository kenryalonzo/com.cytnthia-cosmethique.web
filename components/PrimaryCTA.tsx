export default function PrimaryCTA() {
  return (
    <div className="absolute bottom-11 left-1/2 z-40 -translate-x-1/2">
      <button
        type="button"
        className="h-[58px] w-[280px] max-w-[calc(100vw-4rem)] rounded-md bg-brand-gold px-6 text-[17px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_40px_-8px_rgba(198,168,106,0.45)] transition-all duration-500 ease-out hover:bg-brand-gold-hover hover:shadow-[0_16px_48px_-10px_rgba(198,168,106,0.38)] hover:scale-[1.02] active:scale-[0.99]"
      >
        Discover Experience
      </button>
    </div>
  );
}
