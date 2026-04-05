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
    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center space-y-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-brand-blue-dark/5">
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
            className={`text-[14px] uppercase tracking-wider transition-colors ${
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
