"use client";

import { useState } from "react";

export default function LightPresets({
  onPresetChange,
}: {
  onPresetChange: (preset: string) => void;
}) {
  const [active, setActive] = useState("Medium");
  const presets = ["Light", "Medium", "Deep"];

  return (
    <div className="absolute bottom-[4.35rem] left-1/2 z-40 flex w-[calc(100%-1rem)] max-w-[280px] -translate-x-1/2 flex-col items-center gap-2 rounded-xl border border-brand-blue-dark/[0.06] bg-white/90 px-3 py-2 shadow-[0_6px_32px_-12px_rgba(10,26,47,0.1)] backdrop-blur-md sm:bottom-[6.25rem] sm:max-w-none sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-3 md:bottom-[7.25rem]">
      <span className="text-center text-[10px] font-medium uppercase tracking-[0.22em] text-brand-muted sm:text-[12px] sm:tracking-widest">
        Choisis ta carnation
      </span>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            aria-pressed={active === preset}
            onClick={() => {
              setActive(preset);
              onPresetChange(preset);
            }}
            className={`text-[12px] uppercase tracking-wider transition-colors duration-500 ease-out sm:text-[14px] ${
              active === preset
                ? "font-bold text-brand-gold"
                : "text-brand-blue-dark/50 hover:text-brand-blue-dark"
            }`}
          >
            {preset}
          </button>
        ))}
      </div>
    </div>
  );
}
