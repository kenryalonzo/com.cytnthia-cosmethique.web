"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, Points, PointMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function PearlCapsule3D({ preset }: { preset: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // Preset colors
  const coreColor = useMemo(() => {
    switch (preset) {
      case "Light":
        return "#ede6d8";
      case "Deep":
        return "#b8945e";
      case "Medium":
      default:
        return "#d9c9a4";
    }
  }, [preset]);

  const particleCount = 300;
  const [particlesPosition] = useState(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.5 + Math.random() * 2;
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
      // Slow rotation
      groupRef.current.rotation.y = time * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;

      // Gentle floating
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;

      // Mouse interaction
      groupRef.current.rotation.x +=
        (mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y +=
        (mouse.x * 0.2 - groupRef.current.rotation.y) * 0.05;
    }

    if (innerSphereRef.current) {
      // Liquid movement simulation via scale pulsing
      const scale = 1 + Math.sin(time * 2) * 0.02;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      // Particles react to mouse
      particlesRef.current.position.x = mouse.x * 0.5;
      particlesRef.current.position.y = mouse.y * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight
        position={[-5, -5, -5]}
        intensity={0.5}
        color={coreColor}
      />

      <Environment preset="studio" />

      <group ref={groupRef}>
        {/* Outer Capsule */}
        <Sphere args={[1.8, 64, 64]}>
          <meshPhysicalMaterial
            transparent
            transmission={1}
            opacity={1}
            roughness={0.1}
            ior={1.5}
            thickness={0.5}
            color="#ffffff"
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>

        {/* Inner Core */}
        <Sphere ref={innerSphereRef} args={[1.3, 64, 64]}>
          <meshStandardMaterial
            color={coreColor}
            emissive={coreColor}
            emissiveIntensity={0.52}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </group>

      {/* Fragrance Particles */}
      <Points ref={particlesRef} positions={particlesPosition}>
        <PointMaterial
          transparent
          color="#ebe3d4"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </>
  );
}
