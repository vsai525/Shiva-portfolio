"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Rig({ children }) {
  const group = useRef();
  useFrame((state) => {
    const x = state.pointer.x * 0.3;
    const y = state.pointer.y * 0.3;
    if (group.current) {
      group.current.rotation.y += (x - group.current.rotation.y) * 0.03;
      group.current.rotation.x += (-y - group.current.rotation.x) * 0.03;
    }
  });
  return <group ref={group}>{children}</group>;
}

function Particles({ count = 140 }) {
  const ref = useRef();
  const positions = useRef();
  if (!positions.current) {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    positions.current = arr;
  }
  useFrame((state) => {
    if (ref.current)
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#c084fc" transparent opacity={0.7} />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#a855f7" />
      <directionalLight position={[-5, -3, 2]} intensity={0.8} color="#ff8a5c" />
      <Particles />
      <Rig>
        <Float speed={1.4} rotationIntensity={1.1} floatIntensity={1.6}>
          <Icosahedron args={[1.15, 4]} position={[2.6, 0.6, 0]}>
            <MeshDistortMaterial
              color="#8b5cf6"
              roughness={0.15}
              metalness={0.6}
              distort={0.35}
              speed={1.6}
            />
          </Icosahedron>
        </Float>
        <Float speed={1.1} rotationIntensity={1.4} floatIntensity={1.2}>
          <Torus args={[0.75, 0.26, 24, 80]} position={[-2.9, -0.7, -1]}>
            <meshStandardMaterial
              color="#ff8a5c"
              roughness={0.2}
              metalness={0.8}
            />
          </Torus>
        </Float>
        <Float speed={1.7} rotationIntensity={0.8} floatIntensity={2}>
          <mesh position={[-2.2, 1.5, -2]}>
            <dodecahedronGeometry args={[0.5]} />
            <meshStandardMaterial
              color="#c084fc"
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>
      </Rig>
    </Canvas>
  );
}
