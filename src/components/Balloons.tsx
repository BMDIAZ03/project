import React, { useMemo } from 'react';
import Balloon from './Balloon';
import { generateBalloonConfigs } from '../utils/balloonUtils';

interface BalloonsProps {
  count?: number;
}

export default function Balloons({ count = 10 }: BalloonsProps) {
  const balloonConfigs = useMemo(() => generateBalloonConfigs(count), [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {balloonConfigs.map((config) => (
        <Balloon key={config.id} config={config} />
      ))}
    </div>
  );
}