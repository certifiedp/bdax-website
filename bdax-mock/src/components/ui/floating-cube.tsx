'use client';

import React from 'react';

type FloatingCubeProps = {
  className?: string; // position + size + animation classes
  perspective?: number; // px
  rotation?: string; // CSS transform rotate string
  depth?: number; // translateZ depth in px
  animationDelay?: string; // e.g. '0.5s'
};

export function FloatingCube({
  className = '',
  perspective = 800,
  rotation = 'rotateX(-20deg) rotateY(-25deg)',
  depth = 18,
  animationDelay,
}: FloatingCubeProps) {
  return (
    <div
      className={className}
      style={{ perspective: `${perspective}px`, animationDelay }}
    >
      <div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d', transform: rotation }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-white to-gray-200"
          style={{ transform: `translateZ(${depth}px)` }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400"
          style={{ transform: `translateZ(-${depth}px) rotateY(180deg)` }}
        />
        <div
          className="absolute inset-0 bg-white/90"
          style={{ transform: `rotateX(90deg) translateZ(${depth}px)` }}
        />
        <div
          className="absolute inset-0 bg-gray-400"
          style={{ transform: `rotateX(-90deg) translateZ(${depth}px)` }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"
          style={{ transform: `rotateY(-90deg) translateZ(${depth}px)` }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400"
          style={{ transform: `rotateY(90deg) translateZ(${depth}px)` }}
        />
      </div>
    </div>
  );
}


