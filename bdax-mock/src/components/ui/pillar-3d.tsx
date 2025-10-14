'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Floating cube component
function FloatingCube({ position, size, rotationSpeed }: { position: [number, number, number], size: number, rotationSpeed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * rotationSpeed) * 0.25;
      // Slow rotation
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.006;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial 
        color="#ffffff"
        metalness={0.0}
        roughness={0.25}
        reflectivity={0.6}
        clearcoat={0.5}
        clearcoatRoughness={0.2}
        emissive="#ffffff"
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

// Thin square wireframe frame that floats around the pillar
function SquareFrame({ y, size, phase = 0 }: { y: number; size: number; phase?: number }) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const geometry = useMemo(() => {
    const lineThickness = Math.max(0.06, size * 0.055);
    const outer = size;
    const inner = size - lineThickness;
    const radius = Math.min(0.28, size * 0.14);
    const shape = new THREE.Shape();
    // Outer rounded rect
    const hw = outer / 2, hh = outer / 2;
    shape.absarc(-hw + radius, -hh + radius, radius, Math.PI, Math.PI * 1.5);
    shape.absarc(hw - radius, -hh + radius, radius, Math.PI * 1.5, Math.PI * 2);
    shape.absarc(hw - radius, hh - radius, radius, 0, Math.PI * 0.5);
    shape.absarc(-hw + radius, hh - radius, radius, Math.PI * 0.5, Math.PI);
    // Inner hole
    const hole = new THREE.Path();
    const hiw = inner / 2, hih = inner / 2;
    hole.absarc(-hiw + radius * 0.85, -hih + radius * 0.85, radius * 0.85, Math.PI, Math.PI * 1.5);
    hole.absarc(hiw - radius * 0.85, -hih + radius * 0.85, radius * 0.85, Math.PI * 1.5, Math.PI * 2);
    hole.absarc(hiw - radius * 0.85, hih - radius * 0.85, radius * 0.85, 0, Math.PI * 0.5);
    hole.absarc(-hiw + radius * 0.85, hih - radius * 0.85, radius * 0.85, Math.PI * 0.5, Math.PI);
    shape.holes.push(hole);
    const extrude = new THREE.ExtrudeGeometry(shape, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 1 });
    extrude.rotateX(-Math.PI / 2);
    return extrude;
  }, [size]);
  useFrame((state) => {
    if (matRef.current) {
      const t = state.clock.elapsedTime + phase;
      matRef.current.emissiveIntensity = 0.6 + Math.sin(t * 1.2) * 0.25;
    }
  });
  return (
    <mesh geometry={geometry} position={[0, y, 0]}>
      <meshStandardMaterial ref={matRef} color="#ffffff" emissive="#ffffff" emissiveIntensity={0.75} roughness={0.15} metalness={0.0} />
    </mesh>
  );
}

// Thin glowing band that wraps the pillar like a separator
function SeparatorBand({ y, width, depth, thickness = 0.05, phase = 0 }: { y: number; width: number; depth: number; thickness?: number; phase?: number }) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const geometry = useMemo(() => {
    const outerW = width + 0.26;
    const outerD = depth + 0.26;
    const innerW = width + 0.02;
    const innerD = depth + 0.02;
    const shape = new THREE.Shape();
    shape.moveTo(-outerW / 2, -outerD / 2);
    shape.lineTo(outerW / 2, -outerD / 2);
    shape.lineTo(outerW / 2, outerD / 2);
    shape.lineTo(-outerW / 2, outerD / 2);
    shape.lineTo(-outerW / 2, -outerD / 2);
    const hole = new THREE.Path();
    hole.moveTo(-innerW / 2, -innerD / 2);
    hole.lineTo(innerW / 2, -innerD / 2);
    hole.lineTo(innerW / 2, innerD / 2);
    hole.lineTo(-innerW / 2, innerD / 2);
    hole.lineTo(-innerW / 2, -innerD / 2);
    shape.holes.push(hole);
    const extrude = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, steps: 1, bevelSegments: 1 });
    extrude.rotateX(-Math.PI / 2);
    return extrude;
  }, [width, depth, thickness]);
  useFrame((state) => {
    if (matRef.current) {
      const t = state.clock.elapsedTime + phase;
      matRef.current.emissiveIntensity = 0.55 + Math.sin(t * 1.4) * 0.18;
      matRef.current.opacity = 0.9 - Math.abs(Math.sin(t * 1.4)) * 0.08;
    }
  });
  return (
    <mesh geometry={geometry} position={[0, y, 0]}>
      <meshStandardMaterial ref={matRef} color="#ffffff" emissive="#ffffff" emissiveIntensity={0.55} transparent opacity={0.9} depthWrite={false} />
    </mesh>
  );
}

// Top block with concentric squares
function TopPillarBlock({ pillarSize, height }: { pillarSize: number; height: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle pulsing animation for concentric squares
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      groupRef.current.children.forEach((child, i) => {
        if (i > 0 && i < 4) { // Only the concentric squares
          (child as THREE.Mesh).scale.setScalar(scale);
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, height / 2 + 0.06, 0]}>
      {/* Concentric squares on top (aligned with pillar edges) */}
      {[
        pillarSize * 0.48,
        pillarSize * 0.34,
        pillarSize * 0.20,
      ].map((outer, i) => (
        <mesh key={i} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
          <ringGeometry args={[outer - pillarSize * 0.05, outer, 4]} />
          <meshBasicMaterial 
            color="#ffffff"
            transparent
            opacity={1}
            polygonOffset
            polygonOffsetFactor={-1}
            polygonOffsetUnits={-1}
          />
        </mesh>
      ))}

      {/* Central light */}
      <pointLight position={[0, 0.1, 0]} intensity={1.5} distance={2.5} color="#ffffff" />
      <mesh position={[0, 0.02, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

// Main scene component
function Scene() {
  // Pillar dimensions
  const pillarSize = 3.2; // width/depth
  const pillarHeight = 10; // total height
  const scaleFactor = 0.75; // overall scene scale
  return (
    <>
      {/* Lighting */}
      {/* Lighting tuned for one bright side and one dark side */}
      <ambientLight intensity={0.35} />
      {/* Key light from front-left */}
      <directionalLight position={[6, 8, 6]} intensity={1.0} color="#ffffff" />
      {/* Cool fill from back-right to lift shadows slightly */}
      <directionalLight position={[-6, 3, -6]} intensity={0.35} color="#9fc6ff" />
      {/* Weak top light to brighten rings and top face */}
      <directionalLight position={[0, 10, 0]} intensity={0.4} color="#ffffff" />

      <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
        {/* Floating light cube */}
        <FloatingCube position={[0.6, pillarHeight / 2 + 2.4, 0.4]} size={0.8} rotationSpeed={0.95} />

        {/* Pillar - single tall rounded box */}
      <group position={[0, 0, 0]}>
        <RoundedBox args={[pillarSize, pillarHeight, pillarSize]} radius={0.18} smoothness={6}>
          <meshPhysicalMaterial 
            color="#0c0f12"
            metalness={0.2}
            roughness={0.9}
            reflectivity={0.2}
            clearcoat={0.3}
            clearcoatRoughness={0.7}
          />
        </RoundedBox>
        {/* Hard edge highlights to define sides */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(pillarSize, pillarHeight, pillarSize)]} />
          <lineBasicMaterial color="#1a1f25" linewidth={2} transparent opacity={0.6} />
        </lineSegments>
      </group>

        {/* Concentric squares on top */}
        <TopPillarBlock pillarSize={pillarSize} height={pillarHeight} />

        {/* Wireframe square frames around pillar */}
        <SquareFrame y={pillarHeight / 2 - 2.0} size={pillarSize * 1.35} phase={0} />
        <SquareFrame y={pillarHeight / 2 - 4.3} size={pillarSize * 1.75} phase={0.6} />
        <SquareFrame y={pillarHeight / 2 - 6.9} size={pillarSize * 2.15} phase={1.2} />

        {/* Separator glowing bands around the pillar (thin white lines) */}
        <SeparatorBand y={pillarHeight / 2 - 2.05} width={pillarSize} depth={pillarSize} phase={0} />
        <SeparatorBand y={pillarHeight / 2 - 4.35} width={pillarSize} depth={pillarSize} phase={0.6} />
        <SeparatorBand y={pillarHeight / 2 - 6.95} width={pillarSize} depth={pillarSize} phase={1.2} />

      {/* No shadow plane to ensure zero real-time shadows */}
      </group>
    </>
  );
}

// Main export component
export function Pillar3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [7, 7, 9], fov: 40 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

