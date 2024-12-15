import { ConfettiParticle } from '../types/confetti';

const CONFETTI_COLORS = ['#ff69b4', '#ff1493', '#ff69b4', '#ff8da1', '#ffc0cb'];

export const generateConfettiParticles = (count: number = 50): ConfettiParticle[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `confetti-${Date.now()}-${index}`,
    left: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    duration: 3 + Math.random() * 2,
    rotation: Math.random() * 360
  }));
};