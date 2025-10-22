'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

/** Golden polyhedron/gem hovering above the pillar top */
function FloatingGem({
  position,
  size = 1.0,
  bob = 0.2,
  speed = 0.7,
}: {
  position: [number, number, number];
  size?: number;
  bob?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Create complex polyhedron geometry (octahedron-like gem)
  const geometry = useMemo(() => {
    const vertices = new Float32Array([
      // Top pyramid
      0, size * 0.8, 0,           // Top point
      -size * 0.5, 0, -size * 0.5,
      size * 0.5, 0, -size * 0.5,
      size * 0.5, 0, size * 0.5,
      -size * 0.5, 0, size * 0.5,
      
      // Bottom pyramid
      0, -size * 0.6, 0,          // Bottom point
    ]);
    
    const indices = [
      // Top pyramid faces
      0, 1, 2,
      0, 2, 3,
      0, 3, 4,
      0, 4, 1,
      
      // Bottom pyramid faces
      5, 2, 1,
      5, 3, 2,
      5, 4, 3,
      5, 1, 4,
    ];
    
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.setIndex(indices);
    geom.computeVertexNormals();
    return geom;
  }, [size]);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * bob;
    meshRef.current.rotation.x = 0.2 + t * 0.15;
    meshRef.current.rotation.y = 0.3 + t * 0.25;
    meshRef.current.rotation.z = 0.1 + t * 0.1;
  });
  
  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshPhysicalMaterial
        color="#FDB517"
        roughness={0.15}
        metalness={0.9}
        clearcoat={0.5}
        clearcoatRoughness={0.05}
        emissive="#D68A15"
        emissiveIntensity={0.1}
        envMapIntensity={1.2}
        reflectivity={0.9}
      />
    </mesh>
  );
}

/** Square ring (used for concentric top patterns - appears as diamond when rotated) */
function SquareRing({
  outer,
  thickness,
  y = 0,
}: {
  outer: number;
  thickness: number;
  y?: number;
}) {
  const geom = useMemo(() => {
    const inner = Math.max(outer - thickness, 0.0001);
    const shape = new THREE.Shape();
    const h = outer / 2;
    
    // Outer square
    shape.moveTo(-h, -h);
    shape.lineTo(h, -h);
    shape.lineTo(h, h);
    shape.lineTo(-h, h);
    shape.lineTo(-h, -h);

    // Inner square (hole)
    const hole = new THREE.Path();
    const hi = inner / 2;
    hole.moveTo(-hi, -hi);
    hole.lineTo(hi, -hi);
    hole.lineTo(hi, hi);
    hole.lineTo(-hi, hi);
    hole.lineTo(-hi, -hi);
    shape.holes.push(hole);

    const g = new THREE.ExtrudeGeometry(shape, {
      depth: 0.003,
      bevelEnabled: false,
    });
    g.rotateX(-Math.PI / 2);
    return g;
  }, [outer, thickness]);

  return (
    <mesh position={[0, y, 0]} geometry={geom}>
      <meshBasicMaterial
        color="#D68A15"
        transparent
        opacity={1.0}
        polygonOffset
        polygonOffsetFactor={-2}
        polygonOffsetUnits={-2}
      />
    </mesh>
  );
}

/** Lightweight floating square frames around the pillar (aligned with pillar) */
function FloatingDiamondFrame({ y, size }: { y: number; size: number }) {
  const geom = useMemo(() => {
    const t = Math.max(0.04, size * 0.04);
    const innerSize = size - t;
    
    const shape = new THREE.Shape();
    const h = size / 2;
    const hi = innerSize / 2;
    
    // Outer square
    shape.moveTo(-h, -h);
    shape.lineTo(h, -h);
    shape.lineTo(h, h);
    shape.lineTo(-h, h);
    shape.lineTo(-h, -h);

    // Inner square (hole)
    const hole = new THREE.Path();
    hole.moveTo(-hi, -hi);
    hole.lineTo(hi, -hi);
    hole.lineTo(hi, hi);
    hole.lineTo(-hi, hi);
    hole.lineTo(-hi, -hi);
    shape.holes.push(hole);

    const g = new THREE.ExtrudeGeometry(shape, {
      depth: 0.02,
      bevelEnabled: false,
    });
    g.rotateX(-Math.PI / 2);
    return g;
  }, [size]);

  return (
    <mesh geometry={geom} position={[0, y, 0]}>
      <meshBasicMaterial color="#D68A15" transparent opacity={0.65} />
    </mesh>
  );
}

function PillarGroup() {
  // Dimensions - pillar extends to bottom border
  const pillarSize = 3.2;
  const pillarHeight = 9.0; // Increased to reach bottom
  const radius = 0.15;

  return (
    <group position={[0, -6, 0]}> {/* Positioned to crop bottom */}
      {/* Main Pillar - ROUNDED with dark purple/maroon to blue gradient */}
      <RoundedBox args={[pillarSize, pillarHeight, pillarSize]} radius={radius} smoothness={8}>
        <meshPhysicalMaterial
          color="#1a0f1e"  // Very dark purple/maroon base
          roughness={0.65}
          metalness={0.25}
          clearcoat={0.35}
          clearcoatRoughness={0.55}
        />
      </RoundedBox>

      {/* Blue gradient overlay on right side - matching Figma */}
      <mesh position={[pillarSize * 0.3, 0, 0]}>
        <boxGeometry args={[pillarSize * 0.6, pillarHeight - 0.05, pillarSize - 0.05]} />
        <meshPhysicalMaterial
          color="#3A5A8C"  // Deeper blue to match Figma
          transparent
          opacity={0.7}
          roughness={0.65}
          metalness={0.25}
        />
      </mesh>
      
      {/* Subtle purple tint on left side */}
      <mesh position={[-pillarSize * 0.15, 0, 0]}>
        <boxGeometry args={[pillarSize * 0.3, pillarHeight - 0.1, pillarSize - 0.1]} />
        <meshPhysicalMaterial
          color="#2D1B3D"  // Purple maroon
          transparent
          opacity={0.5}
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* Golden bottom edge/trim */}
      <mesh position={[0, -pillarHeight / 2 + 0.15, 0]}>
        <boxGeometry args={[pillarSize + 0.02, 0.3, pillarSize + 0.02]} />
        <meshPhysicalMaterial
          color="#D68A15"
          roughness={0.2}
          metalness={0.8}
          emissive="#D68A15"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Subtle edge highlights */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(pillarSize, pillarHeight, pillarSize)]} />
        <lineBasicMaterial color="#5A8BB7" transparent opacity={0.25} />
      </lineSegments>

      {/* Concentric golden SQUARES on the top face (NO rotation - aligned with pillar) */}
      <group position={[0, pillarHeight / 2 + 0.002, 0]}>
        <SquareRing outer={pillarSize * 0.75} thickness={pillarSize * 0.065} />
        <SquareRing outer={pillarSize * 0.58} thickness={pillarSize * 0.065} />
        <SquareRing outer={pillarSize * 0.41} thickness={pillarSize * 0.065} />
        <SquareRing outer={pillarSize * 0.24} thickness={pillarSize * 0.065} />
      </group>

      {/* Floating golden diamond wire frames (NO rotation - aligned with pillar) */}
      <group>
        <FloatingDiamondFrame y={pillarHeight / 2 - 1.6} size={pillarSize * 0.52} />
        <FloatingDiamondFrame y={pillarHeight / 2 - 3.2} size={pillarSize * 0.62} />
        <FloatingDiamondFrame y={pillarHeight / 2 - 4.8} size={pillarSize * 0.72} />
      </group>

      {/* Golden polyhedron/gem hovering above the top */}
      <FloatingGem position={[0.1, pillarHeight / 2 + 1.3, 0.1]} size={0.85} />
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Lighting: enhanced for natural gem appearance */}
      <ambientLight intensity={0.4} color="#1a1a2e" />
      <directionalLight position={[7, 12, 7]} intensity={1.5} color="#FDB517" />
      <directionalLight position={[0, 15, 0]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[-5, 8, -5]} intensity={0.7} color="#D68A15" />
      <directionalLight position={[5, 3, 0]} intensity={0.5} color="#4A7BA7" />
      {/* Additional rim light for gem */}
      <directionalLight position={[0, 10, -8]} intensity={0.6} color="#FFF5E1" />

      {/* Show pillar without auto-fitting - allows cropping */}
      <PillarGroup />
    </>
  );
}

export function Pillar3D({ scale = 0.95 }: { scale?: number }) {
  return (
    <div className="w-full h-full" style={{ overflow: 'visible' }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [7.5, 1, 8.5], fov: 45, near: 0.01, far: 500 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <group scale={[scale, scale, scale]}>
          <Scene />
        </group>
      </Canvas>
    </div>
  );
}
