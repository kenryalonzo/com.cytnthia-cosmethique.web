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
        className={`max-w-full select-none px-3 text-center font-sans font-extralight uppercase leading-none tracking-[0.2em] sm:px-4 sm:tracking-[0.28em] ${tone} text-[clamp(2rem,min(14vw,11rem),11rem)]`}
      >
        {word}
      </span>
    </div>
  );
}
