"use client";

import { useState } from "react";

export default function LightPresets({
  onPresetChange,
}: {
  onPresetChange: (preset: string) => void;
}) {
  const [active, setActive] = useState("Medium");
  const presets = ["Light", "Medium", "Deep"] as const;

  return (
    <div className="absolute bottom-[4.35rem] left-1/2 z-40 w-max max-w-[calc(100vw-1.75rem)] -translate-x-1/2 sm:bottom-[6.25rem] md:bottom-[7.25rem]">
      <div className="rounded-full border border-brand-blue-dark/[0.08] bg-white/93 px-1 py-1 shadow-[0_4px_24px_-8px_rgba(10,26,47,0.12),0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-xl">
        <div className="flex flex-col items-stretch gap-1.5 px-2 py-1.5 sm:flex-row sm:items-center sm:gap-0 sm:px-1 sm:py-1">
          <span className="px-1 text-center font-sans text-[8px] font-medium uppercase leading-tight tracking-[0.26em] text-brand-muted sm:max-w-[4.5rem] sm:px-2 sm:text-left sm:text-[9px] sm:leading-snug sm:tracking-[0.22em]">
            Choisis ta
            <span className="hidden sm:inline"> </span>
            <br className="sm:hidden" />
            carnation
          </span>

          <div
            className="hidden h-7 w-px shrink-0 bg-brand-blue-dark/[0.08] sm:block"
            aria-hidden
          />

          <div
            className="flex justify-center rounded-full bg-brand-blue-dark/[0.04] p-0.5 sm:justify-start"
            role="group"
            aria-label="Intensité de la carnation"
          >
            {presets.map((preset) => {
              const isOn = active === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  aria-pressed={isOn}
                  onClick={() => {
                    setActive(preset);
                    onPresetChange(preset);
                  }}
                  className={`min-w-[3.25rem] rounded-full px-2.5 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-500 ease-out sm:min-w-0 sm:px-3.5 sm:py-2 sm:text-[11px] ${
                    isOn
                      ? "bg-white text-brand-gold shadow-[0_1px_3px_rgba(10,26,47,0.08)]"
                      : "text-brand-blue-dark/45 hover:text-brand-blue-dark"
                  }`}
                >
                  {preset}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
