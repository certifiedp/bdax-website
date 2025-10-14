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
        {/* Top face - bright white with gentle vignette */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateZ(${depth}px)`,
            background: 'linear-gradient(140deg, rgba(255,255,255,1) 0%, rgba(239,244,249,0.95) 60%, rgba(225,232,240,0.9) 100%)',

          }}
        />
        {/* Bottom face (not visible but keeps structure) */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateZ(-${depth}px) rotateY(180deg)`,
            background: 'linear-gradient(140deg, #c7cdd6 0%, #b3bcc8 100%)',
          }}
        />
        {/* Front face - lighter */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateX(90deg) translateZ(${depth}px)`,
            background: 'linear-gradient(180deg, #f8fbff 0%, #e9eef5 55%, #d3dbe6 100%)',
          }}
        />
        {/* Back face */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateX(-90deg) translateZ(${depth}px)`,
            background: 'linear-gradient(180deg, #cbd3de 0%, #b6c0cc 100%)',
          }}
        />
        {/* Left face - medium grey */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateY(-90deg) translateZ(${depth}px)`,
            background: 'linear-gradient(90deg, #dfe5ee 0%, #c9d2de 100%)',
          }}
        />
        {/* Right face - slightly darker for depth */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateY(90deg) translateZ(${depth}px)`,
            background: 'linear-gradient(90deg, #d3dbe6 0%, #b9c2cf 100%)',
          }}
        />

        {/* Edge highlights to mimic soft bevel */}
        <div className="absolute inset-0 pointer-events-none" style={{ transform: `rotateY(90deg) translateZ(${depth}px)` }}>
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 blur-[1px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ transform: `rotateX(90deg) translateZ(${depth}px)` }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/40 blur-[1px]" />
        </div>

        {/* Specular highlight */}
        <div className="absolute -top-1 left-2 w-6 h-3 rounded-full bg-white/70 blur-sm" style={{ transform: `translateZ(${depth}px)` }} />

        {/* Soft drop shadow under cube */}
        <div className="absolute -bottom-1 left-1/3 w-1/3 h-1 rounded-full bg-black/15 blur-sm" />
      </div>
    </div>
  );
}


