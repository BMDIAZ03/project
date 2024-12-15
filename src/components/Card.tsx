import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import InfoBox from './InfoBox';
import RSVPForm from './RSVPForm';
import ResponseMessage from './ResponseMessage';
import Balloons from './Balloons';
import fondo from '../public/fondo.jpg';

interface CardProps {
  isOpen: boolean;
  name: string;
  response: 'yes' | 'no' | null;
  onOpen: () => void;
  onNameChange: (name: string) => void;
  onResponse: (response: 'yes' | 'no') => void;
}

export default function Card({ isOpen, name, response, onOpen, onNameChange, onResponse }: CardProps) {
  return (
    <div className="relative max-w-2xl w-full mx-auto">
      <div 
        className="relative rounded-3xl shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Balloons />
        
        <div className="relative p-8 text-center bg-gradient-to-b from-pink-500/40 to-red-500/40">
          <div className="animate-bounce-slow">
          <h1 className="text-4xl font-bold text-white mb-4 font-dancing drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              ¡Te Invitamos!
            </h1>
            
            <h2  className="text-4xl font-bold text-white mb-4 font-dancing drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              Al Cumpleaños de
            </h2>
            
            <h3   className="text-4xl font-bold text-white mb-8 font-dancing drop-shadow-[4px_4px_8px_rgba(0,0,0,1)]"
  style={{
    background: 'linear-gradient(90deg, rgba(255,105,180,0.8), rgba(255,0,0,0.8))',
    padding: '5px 10px',
    borderRadius: '50px',
    display: 'inline-block'
  }}>
              Yoheiris Mejia Diaz
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
          <InfoBox icon={<Calendar className="w-8 h-8 text-pink-900 drop-shadow-lg" />} title="Fecha" content="19 de Diciembre" />
            <InfoBox icon={<MapPin className="w-8 h-8 text-pink-900 drop-shadow-lg" />} title="Lugar" content="Salón de Clases" />
          </div>
          

          {!isOpen && (
            <button
              onClick={onOpen}
              className="animate-pulse bg-pink-500 text-white px-8 py-3 rounded-full text-xl font-bold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg drop-shadow-lg"
              style={{
                background: 'linear-gradient(90deg, rgba(255,105,180,0.8), rgba(255,0,0,0.8))',
                padding: '5px 10px',
                borderRadius: '50px',
                display: 'inline-block'
              }}
            >
              ¡Confirma tu Asistencia!
            </button>
          )}

          {isOpen && !response && (
            <RSVPForm
              name={name}
              onNameChange={onNameChange}
              onResponse={onResponse}
            />
          )}

          {response && (
            <ResponseMessage type={response} name={name} />
          )}
        </div>
      </div>
    </div>
  );
}