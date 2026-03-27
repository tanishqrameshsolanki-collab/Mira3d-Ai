import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#FFD700"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <spotLight position={[-10, -10, -5]} intensity={0.5} color="#FFD700" />
        <AnimatedShape />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={4}
          color="#FFD700"
        />
      </Canvas>
    </div>
  );
}
