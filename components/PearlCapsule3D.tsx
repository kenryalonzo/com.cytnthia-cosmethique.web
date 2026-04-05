"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, Points, PointMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

type PresetVisual = {
  liquid: string;
  liquidEmissive: string;
  deepCore: string;
  glassTint: string;
  particle: string;
  particleOpacity: number;
  emissiveIntensity: number;
};

function getPresetVisual(preset: string): PresetVisual {
  switch (preset) {
    case "Light":
      return {
        liquid: "#e8dcc4",
        liquidEmissive: "#fff4e6",
        deepCore: "#b8956e",
        glassTint: "#faf6ee",
        particle: "#f2e4d0",
        particleOpacity: 0.72,
        emissiveIntensity: 0.42,
      };
    case "Deep":
      return {
        liquid: "#a67c3a",
        liquidEmissive: "#d4a85c",
        deepCore: "#6b4a22",
        glassTint: "#f2e8d8",
        particle: "#d9b878",
        particleOpacity: 0.78,
        emissiveIntensity: 0.62,
      };
    case "Medium":
    default:
      return {
        liquid: "#c9a66e",
        liquidEmissive: "#e8c995",
        deepCore: "#8a6230",
        glassTint: "#faf3e6",
        particle: "#e6d0a8",
        particleOpacity: 0.75,
        emissiveIntensity: 0.55,
      };
  }
}

export default function PearlCapsule3D({ preset }: { preset: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const vis = useMemo(() => getPresetVisual(preset), [preset]);

  const attenuationColor = useMemo(
    () => new THREE.Color(vis.glassTint),
    [vis.glassTint],
  );

  const particleCount = 320;
  const [particlesPosition] = useState(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.45 + Math.random() * 2.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.088;
      groupRef.current.rotation.x = Math.sin(time * 0.17) * 0.08;

      // Slow luxury float
      groupRef.current.position.y = Math.sin(time * 0.42) * 0.065;

      const targetRx = mouse.y * 0.16;
      const targetRy = mouse.x * 0.16;
      groupRef.current.rotation.x += (targetRx - groupRef.current.rotation.x) * 0.035;
      groupRef.current.rotation.y += (targetRy - groupRef.current.rotation.y) * 0.035;
    }

    if (innerSphereRef.current) {
      const scale = 1 + Math.sin(time * 1.65) * 0.018;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.042;
      particlesRef.current.position.x = mouse.x * 0.38;
      particlesRef.current.position.y = mouse.y * 0.38;
    }
  });

  return (
    <>
      <ambientLight intensity={0.32} color="#f8f6f2" />
      <directionalLight
        position={[3.5, 9, 5]}
        intensity={1.15}
        color="#ffffff"
        castShadow={false}
      />
      <directionalLight
        position={[-5, 3, -4]}
        intensity={0.38}
        color="#fff4e6"
      />
      <pointLight
        position={[0.8, 2.2, 5.5]}
        intensity={0.55}
        distance={14}
        decay={2}
        color="#fff8ef"
      />
      <pointLight
        position={[-2, -1.5, 3]}
        intensity={0.22}
        distance={10}
        decay={2}
        color={vis.liquidEmissive}
      />

      <Environment preset="studio" environmentIntensity={1.05} />

      <group ref={groupRef}>
        <Sphere args={[1.8, 96, 96]}>
          <meshPhysicalMaterial
            transparent
            transmission={0.94}
            opacity={1}
            roughness={0.055}
            metalness={0}
            ior={1.54}
            thickness={1.05}
            color="#ffffff"
            attenuationColor={attenuationColor}
            attenuationDistance={0.72}
            clearcoat={1}
            clearcoatRoughness={0.035}
            envMapIntensity={1.35}
            specularIntensity={1}
            specularColor="#fffaf2"
          />
        </Sphere>

        <Sphere ref={innerSphereRef} args={[1.22, 80, 80]}>
          <meshStandardMaterial
            color={vis.liquid}
            emissive={vis.liquidEmissive}
            emissiveIntensity={vis.emissiveIntensity}
            metalness={0.62}
            roughness={0.16}
            envMapIntensity={0.85}
          />
        </Sphere>

        <Sphere args={[0.58, 48, 48]}>
          <meshStandardMaterial
            color={vis.deepCore}
            emissive={vis.deepCore}
            emissiveIntensity={0.38}
            metalness={0.88}
            roughness={0.1}
          />
        </Sphere>
      </group>

      <Points ref={particlesRef} positions={particlesPosition}>
        <PointMaterial
          transparent
          color={vis.particle}
          size={0.048}
          sizeAttenuation
          depthWrite={false}
          opacity={vis.particleOpacity}
        />
      </Points>
    </>
  );
}
