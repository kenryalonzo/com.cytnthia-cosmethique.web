export default function PrimaryCTA() {
  return (
    <div className="absolute bottom-3 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 px-1 sm:bottom-5 sm:w-auto md:bottom-11 md:max-w-none md:px-0">
      <button
        type="button"
        className="h-[50px] w-full rounded-md bg-brand-gold px-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_12px_40px_-8px_rgba(198,168,106,0.45)] transition-all duration-500 ease-out hover:bg-brand-gold-hover hover:shadow-[0_16px_48px_-10px_rgba(198,168,106,0.38)] hover:scale-[1.02] active:scale-[0.99] sm:h-[54px] sm:text-[15px] sm:tracking-[0.12em] md:h-[58px] md:w-[280px] md:text-[17px]"
      >
        Discover Experience
      </button>
    </div>
  );
}
