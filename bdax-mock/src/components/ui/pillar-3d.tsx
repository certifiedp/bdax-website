'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Bounds } from '@react-three/drei';
import * as THREE from 'three';

/** Small white tile hovering above the pillar top */
function FloatingTile({
  position,
  size = 0.7,
  bob = 0.18,            // ↓ slightly smaller bob so it stays well inside the frame
  speed = 0.9,
}: {
  position: [number, number, number];
  size?: number;
  bob?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * bob;
    meshRef.current.rotation.x = 0.2 + t * 0.25;
    meshRef.current.rotation.y = 0.35 + t * 0.35;
  });
  return (
    <mesh ref={meshRef} position={position}>
      {/* very thin box so it reads like a tile */}
      <boxGeometry args={[size, size * 0.08, size]} />
      <meshPhysicalMaterial
        color="#ffffff"
        roughness={0.2}
        metalness={0}
        clearcoat={0.6}
        clearcoatRoughness={0.2}
      />
    </mesh>
  );
}

/** Ultra-thin square ring (used for concentric top squares) */
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
    shape.moveTo(-h, -h);
    shape.lineTo(h, -h);
    shape.lineTo(h, h);
    shape.lineTo(-h, h);
    shape.lineTo(-h, -h);

    const hole = new THREE.Path();
    const hi = inner / 2;
    hole.moveTo(-hi, -hi);
    hole.lineTo(hi, -hi);
    hole.lineTo(hi, hi);
    hole.lineTo(-hi, hi);
    hole.lineTo(-hi, -hi);
    shape.holes.push(hole);

    const g = new THREE.ExtrudeGeometry(shape, {
      depth: 0.003, // extremely thin
      bevelEnabled: false,
    });
    g.rotateX(-Math.PI / 2); // lay flat on top face
    return g;
  }, [outer, thickness]);

  return (
    <mesh position={[0, y, 0]} geometry={geom}>
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={1}
        polygonOffset
        polygonOffsetFactor={-2}
        polygonOffsetUnits={-2}
      />
    </mesh>
  );
}

/** Lightweight floating frames around the pillar */
function FloatingFrame({ y, size }: { y: number; size: number }) {
  const geom = useMemo(() => {
    const t = Math.max(0.035, size * 0.035); // thin
    const shape = new THREE.Shape();
    const h = size / 2;
    shape.moveTo(-h, -h);
    shape.lineTo(h, -h);
    shape.lineTo(h, h);
    shape.lineTo(-h, h);
    shape.lineTo(-h, -h);

    const hole = new THREE.Path();
    const hi = h - t;
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
      <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
    </mesh>
  );
}

function PillarGroup() {
  // Dimensions tuned to the reference
  const pillarSize = 3.0;
  const pillarHeight = 7.0;

  return (
    <group position={[0, 0, 0]}>
      {/* Pillar */}
      <RoundedBox args={[pillarSize, pillarHeight, pillarSize]} radius={0.16} smoothness={6}>
        <meshPhysicalMaterial
          color="#0b0e12"         // darker, matte
          roughness={0.85}
          metalness={0.1}
          clearcoat={0.25}
          clearcoatRoughness={0.7}
        />
      </RoundedBox>

      {/* Hard edge hint (very subtle) */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(pillarSize, pillarHeight, pillarSize)]} />
        <lineBasicMaterial color="#161b21" transparent opacity={0.55} />
      </lineSegments>

      {/* Concentric white squares on the top face (flat, centered) */}
      <group position={[0, pillarHeight / 2 + 0.0015, 0]}>
        <SquareRing outer={pillarSize * 0.78} thickness={pillarSize * 0.06} />
        <SquareRing outer={pillarSize * 0.56} thickness={pillarSize * 0.06} />
        <SquareRing outer={pillarSize * 0.36} thickness={pillarSize * 0.06} />
        <SquareRing outer={pillarSize * 0.18} thickness={pillarSize * 0.06} />
      </group>

      {/* Floating wire frames (thin, non-glowing) */}
      <FloatingFrame y={pillarHeight / 2 - 1.4} size={pillarSize * 1.34} />
      <FloatingFrame y={pillarHeight / 2 - 2.9} size={pillarSize * 1.62} />
      <FloatingFrame y={pillarHeight / 2 - 4.5} size={pillarSize * 1.90} />

      {/* Small white tile hovering above the top */}
      <FloatingTile position={[0.2, pillarHeight / 2 + 1.05, 0.1]} />
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Lighting: one key + subtle ambient + tiny top lift */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 8, 6]} intensity={1.0} color="#ffffff" />
      <directionalLight position={[0, 10, 0]} intensity={0.25} color="#ffffff" />

      {/* Auto-fit the whole pillar + tile into the camera frustum */}
      <Bounds fit clip observe margin={1.25}>
        <PillarGroup />
      </Bounds>
    </>
  );
}

export function Pillar3D() {
  return (
    <div className="w-full h-full" style={{ overflow: 'visible' }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [7.2, 7.4, 8.0], fov: 38, near: 0.01, far: 500 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
