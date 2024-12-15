import React from 'react';
import Confetti from './Confetti';

interface ResponseMessageProps {
  type: 'yes' | 'no';
  name: string;
}

export default function ResponseMessage({ type, name }: ResponseMessageProps) {
  return (
    <div className="text-center animate-bounce-slow">
      {type === 'yes' ? (
        <>
          <h3 className="text-4xl font-bold text-white mb-4 font-dancing drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)">
            ¡Gracias {name}! 🎉
          </h3>
          <p className="text-3xl text-white mb-4 font-dancing drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)">
            ¡Te esperamos para celebrar juntos! 
            <br />
            ¡Será una fiesta increíble! 🎈🎂
          </p>
          <Confetti />
        </>
      ) : (
        <div className="space-y-4">
          <h3 className="text-4xl font-bold 
           text-white mb-4 font-dancing drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)">
            Lo lamentamos mucho {name} 😢
          </h3>
          <p className="text-2xl text-white mb-4 font-dancing drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)">
            ¡Te extrañaremos en la celebración!
          </p>
        </div>
      )}
    </div>
  );
}