import React, { useEffect, useState } from 'react';
import type { ConfettiParticle as ConfettiParticleType } from '../types/confetti';
import { generateConfettiParticles } from '../utils/confettiUtils';
import ConfettiParticle from './ConfettiParticle';

export default function Confetti() {
  const [particles, setParticles] = useState<ConfettiParticleType[]>([]);

  useEffect(() => {
    setParticles(generateConfettiParticles());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <ConfettiParticle key={particle.id} particle={particle} />
      ))}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}