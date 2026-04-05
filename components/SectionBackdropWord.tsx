type SectionBackdropWordProps = {
  word: string;
  variant?: "light" | "dark" | "mist";
};

/**
 * Large contextual watermark — ultra-subtle, never competes with content.
 */
export default function SectionBackdropWord({
  word,
  variant = "light",
}: SectionBackdropWordProps) {
  const tone =
    variant === "dark"
      ? "text-white/[0.045]"
      : variant === "mist"
        ? "text-brand-blue-dark/[0.028]"
        : "text-brand-blue-dark/[0.034]";

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <span
        className={`select-none font-sans font-extralight uppercase leading-none tracking-[0.28em] ${tone} text-[clamp(2.75rem,min(16vw,11rem),11rem)] max-w-full px-4 text-center`}
      >
        {word}
      </span>
    </div>
  );
}
