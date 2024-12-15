import React from 'react';
import type { ConfettiParticle as ConfettiParticleType } from '../types/confetti';

interface ConfettiParticleProps {
  particle: ConfettiParticleType;
}

export default function ConfettiParticle({ particle }: ConfettiParticleProps) {
  const { left, color, duration, rotation } = particle;

  return (
    <div
      className="absolute w-2 h-2 rounded-full"
      style={{
        left: `${left}%`,
        top: '-20px',
        backgroundColor: color,
        animation: `confetti ${duration}s ease-out forwards`,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
}