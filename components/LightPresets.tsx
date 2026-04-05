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
    <div className="absolute bottom-[7.25rem] left-1/2 z-40 flex -translate-x-1/2 flex-col items-center space-y-3 rounded-2xl border border-brand-blue-dark/[0.06] bg-white/85 px-6 py-3 shadow-[0_6px_32px_-12px_rgba(10,26,47,0.1)] backdrop-blur-md">
      <span className="text-[12px] uppercase tracking-widest text-brand-muted font-medium">
        Choisis ta carnation
      </span>
      <div className="flex space-x-4">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            aria-pressed={active === preset}
            onClick={() => {
              setActive(preset);
              onPresetChange(preset);
            }}
            className={`text-[14px] uppercase tracking-wider transition-colors duration-500 ease-out ${
              active === preset
                ? "text-brand-gold font-bold"
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
