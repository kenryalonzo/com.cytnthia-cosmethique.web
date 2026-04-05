export default function PrimaryCTA() {
  return (
    <div className="absolute bottom-3 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 px-1 sm:bottom-5 sm:w-auto md:bottom-11 md:max-w-none md:px-0">
      <button
        type="button"
        className="relative h-[50px] w-full overflow-hidden rounded-md border border-white/18 bg-gradient-to-b from-[#e2c992] from-[0%] via-[#c9a96e] via-[42%] to-[#a8894e] to-[100%] px-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-2px_6px_rgba(50,35,12,0.14),0_10px_38px_-10px_rgba(130,95,48,0.42)] transition-all duration-500 ease-out before:pointer-events-none before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-b before:from-white/12 before:to-transparent before:to-[32%] hover:scale-[1.015] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.48),inset_0_-2px_6px_rgba(50,35,12,0.1),0_14px_48px_-12px_rgba(145,108,58,0.48)] hover:brightness-[1.03] active:scale-[0.992] sm:h-[54px] sm:text-[15px] sm:tracking-[0.12em] md:h-[58px] md:w-[280px] md:text-[17px]"
      >
        <span className="relative z-[1]">Discover Experience</span>
      </button>
    </div>
  );
}
