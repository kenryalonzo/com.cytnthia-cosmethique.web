"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import NavigationBar from "./NavigationBar";
import PlayButton from "./PlayButton";
import BrandSignature from "./BrandSignature";
import PrimaryCTA from "./PrimaryCTA";
import NavigationArrows from "./NavigationArrows";
import RightVerticalText from "./RightVerticalText";
import LightPresets from "./LightPresets";
import { Howl } from "howler";

// Dynamic import for 3D component
const PearlCapsule3D = React.lazy(() => import("./PearlCapsule3D"));

export default function HeroSection() {
  const [preset, setPreset] = useState("Medium");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const ambientSound = new Howl({
      src: ["https://actions.google.com/sounds/v1/water/water_trickle.ogg"], // Placeholder ambient sound
      loop: true,
      volume: 0.05,
    });
    soundRef.current = ambientSound;
    return () => {
      ambientSound.unload();
      soundRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    const sound = soundRef.current;
    if (!sound) return;
    if (soundEnabled) {
      sound.pause();
    } else {
      sound.play();
    }
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div
      id="hero"
      className="relative flex min-h-[calc(100vh-64px)] w-full items-center justify-center overflow-hidden p-4 md:p-12"
    >
      {/* Sound Toggle */}
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={soundEnabled}
        aria-label={soundEnabled ? "Couper le son ambiant" : "Activer le son ambiant"}
        className="absolute top-8 right-8 z-50 text-xs uppercase tracking-[0.35em] text-brand-blue-dark/45 transition-colors duration-500 hover:text-brand-blue-dark"
      >
        {soundEnabled ? "Sound On" : "Sound Off"}
      </button>

      {/* Main Card */}
      <div className="relative flex h-[min(600px,78vh)] w-full max-w-[1200px] flex-col items-center justify-center overflow-hidden rounded-[36px] bg-vignette shadow-[0_28px_80px_-24px_rgba(10,26,47,0.13)]">
        <NavigationBar />

        {/* Background Typography — ultra-subtle anchor */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="select-none pl-[0.2em] font-sans text-[clamp(3.25rem,11vw,7.5rem)] font-extralight tracking-[0.42em] text-brand-blue-dark/[0.045] leading-none">
            CYNTHIA
          </h1>
        </div>

        {/* 3D Canvas */}
        <div className="absolute inset-0 z-20 pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <PearlCapsule3D preset={preset} />
            </Suspense>
          </Canvas>
        </div>

        <PlayButton />
        <BrandSignature />
        <LightPresets onPresetChange={setPreset} />
        <PrimaryCTA />
        <RightVerticalText />
        <NavigationArrows />
      </div>
    </div>
  );
}
