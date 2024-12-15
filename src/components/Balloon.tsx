import React from 'react';
import type { BalloonConfig } from '../types/balloon';

interface BalloonProps {
  config: BalloonConfig;
}

export default function Balloon({ config }: BalloonProps) {
  const { left, delay, duration, scale, color } = config;
  
  return (
    <div
      className="absolute animate-float"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      <div 
        className="w-8 h-10 rounded-full"
        style={{
          backgroundColor: color,
          transform: `scale(${scale})`,
        }}
      />
      <div className="w-0.5 h-12 bg-gray-300 mx-auto" />
    </div>
  );
}