export default function BrandSignature() {
  return (
    <div className="absolute top-[5.25rem] left-3 z-40 flex max-w-[58%] flex-col gap-1.5 pr-2 sm:top-[5.75rem] sm:left-5 sm:max-w-[65%] md:top-auto md:bottom-11 md:left-11 md:max-w-none md:gap-2">
      <p className="text-[8px] font-medium uppercase tracking-[0.42em] text-brand-muted sm:text-[9px] md:text-[10px] md:tracking-[0.48em]">
        Maison
      </p>
      <h2 className="font-serif text-base font-normal leading-snug tracking-tight text-brand-blue-dark/88 sm:text-lg md:text-[1.35rem]">
        Cynthia
        <span className="text-brand-gold/95"> · </span>
        <span className="font-light italic text-brand-gold">Cosmétique</span>
      </h2>
      <p className="max-w-[14rem] text-[8px] font-medium uppercase leading-relaxed tracking-[0.22em] text-brand-muted/85 sm:text-[9px] md:text-[10px] md:tracking-[0.28em]">
        Soin · Beauté · Bien-être
      </p>
    </div>
  );
}
