type SectionBackdropWordProps = {
  word: string;
  variant?: "light" | "dark" | "mist";
};

/**
 * Filigrane section — même langage typographique que le hero (font signature, volume).
 */
export default function SectionBackdropWord({
  word,
  variant = "light",
}: SectionBackdropWordProps) {
  const gradientClass =
    variant === "dark"
      ? "from-white/[0.16] to-white/[0.055]"
      : variant === "mist"
        ? "from-brand-blue-dark/[0.088] to-brand-blue-dark/[0.038]"
        : "from-brand-blue-dark/[0.1] to-brand-blue-dark/[0.042]";

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden px-1"
      aria-hidden
    >
      <span
        className={`font-signature max-w-full select-none bg-gradient-to-b bg-clip-text text-center text-[clamp(3.1rem,min(19vw,14.5rem),14.5rem)] font-semibold leading-[0.9] tracking-[0.1em] [-webkit-background-clip:text] sm:tracking-[0.14em] md:tracking-[0.18em] ${gradientClass} [filter:blur(0.45px)]`}
        style={{ WebkitTextFillColor: "transparent", color: "transparent" }}
      >
        {word}
      </span>
    </div>
  );
}
