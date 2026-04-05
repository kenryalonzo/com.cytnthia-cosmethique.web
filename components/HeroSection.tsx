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
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-3 pb-6 pt-4 sm:px-5 sm:pb-8 md:min-h-[calc(100vh-64px)] md:p-12"
    >
      {/* Sound Toggle */}
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={soundEnabled}
        aria-label={soundEnabled ? "Couper le son ambiant" : "Activer le son ambiant"}
        className="absolute top-[4.5rem] right-3 z-50 text-[10px] uppercase tracking-[0.3em] text-brand-blue-dark/45 transition-colors duration-500 hover:text-brand-blue-dark sm:top-8 sm:right-6 sm:text-xs md:right-8"
      >
        {soundEnabled ? "Sound On" : "Sound Off"}
      </button>

      {/* Main Card */}
      <div className="relative flex min-h-[min(640px,82svh)] w-full max-w-[1200px] flex-col items-center justify-center overflow-hidden rounded-[24px] bg-vignette pb-1 shadow-[0_36px_100px_-32px_rgba(10,26,47,0.17),0_1px_0_rgba(255,255,255,0.65)_inset] sm:min-h-[min(600px,78vh)] sm:rounded-[32px] sm:pb-0 md:rounded-[36px]">
        <NavigationBar />

        {/* Background typography — brand signature layer */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <h1
            className="font-signature select-none bg-gradient-to-b from-brand-blue-dark/[0.13] to-brand-blue-dark/[0.062] bg-clip-text px-2 text-center text-[clamp(3.4rem,14vw,11rem)] font-semibold leading-[0.92] tracking-[0.12em] [-webkit-background-clip:text] sm:px-4 sm:tracking-[0.16em] md:text-[clamp(4.25rem,15vw,12rem)] md:tracking-[0.2em] [filter:blur(0.35px)]"
            style={{ WebkitTextFillColor: "transparent", color: "transparent" }}
          >
            CYNTHIA
          </h1>
        </div>

        {/* 3D Canvas */}
        <div className="absolute inset-0 z-20 pointer-events-auto">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            onCreated={({ gl }) => {
              gl.setClearAlpha(0);
              gl.toneMappingExposure = 1.06;
            }}
          >
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
