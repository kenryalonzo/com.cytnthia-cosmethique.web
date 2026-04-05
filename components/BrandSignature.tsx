export default function BrandSignature() {
  return (
    <div className="absolute bottom-9 left-9 z-40 flex flex-col gap-2 md:bottom-11 md:left-11">
      <p className="text-[9px] font-medium uppercase tracking-[0.48em] text-brand-muted md:text-[10px]">
        Maison
      </p>
      <h2 className="font-serif text-[1.125rem] font-normal leading-snug tracking-tight text-brand-blue-dark/88 md:text-[1.35rem]">
        Cynthia
        <span className="text-brand-gold/95"> · </span>
        <span className="font-light italic text-brand-gold">Cosmétique</span>
      </h2>
      <p className="max-w-[14rem] text-[9px] font-medium uppercase leading-relaxed tracking-[0.28em] text-brand-muted/85 md:text-[10px]">
        Soin · Beauté · Bien-être
      </p>
    </div>
  );
}
