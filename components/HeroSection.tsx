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
    <div className="relative w-full flex items-center justify-center p-4 md:p-12 min-h-[calc(100vh-64px)] overflow-hidden">
      {/* Sound Toggle */}
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={soundEnabled}
        aria-label={soundEnabled ? "Couper le son ambiant" : "Activer le son ambiant"}
        className="absolute top-8 right-8 z-50 text-brand-blue-dark/50 hover:text-brand-blue-dark text-xs uppercase tracking-widest transition-colors"
      >
        {soundEnabled ? "Sound On" : "Sound Off"}
      </button>

      {/* Main Card */}
      <div className="relative w-full max-w-[1200px] h-[600px] bg-vignette rounded-[40px] shadow-2xl overflow-hidden flex flex-col items-center justify-center">
        <NavigationBar />

        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h1 className="text-[120px] md:text-[220px] font-black text-brand-blue-dark/10 tracking-tighter leading-none select-none">
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
