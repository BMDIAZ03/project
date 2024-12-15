import { BalloonConfig } from '../types/balloon';

export const generateBalloonConfigs = (count: number): BalloonConfig[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `balloon-${Date.now()}-${index}`,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    scale: 0.5 + Math.random(),
    color: index % 2 === 0 ? '#ff69b4' : '#ff1493'
  }));
};

export const BALLOON_COLORS = {
  primary: '#ff69b4',
  secondary: '#ff1493'
} as const;