import React, { useState } from 'react';
import { PartyPopper } from 'lucide-react';
import Confetti from './Confetti';
import RSVPForm from './RSVPForm';
import ResponseMessage from './ResponseMessage';

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleResponse = (answer: 'yes' | 'no') => {
    setResponse(answer);
    if (answer === 'yes') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div 
        className="max-w-md w-full relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?q=80&w=1469&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-pink-500/30 backdrop-blur-sm"></div>
        
        <div className="relative p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-6 font-dancing">
            ¡Te Invitamos!
          </h1>
          
          <div className="bg-white/90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Al Cumpleaños de
            </h2>
            <h3 className="text-3xl font-bold text-pink-800 mb-6 font-dancing">
              Yoheiris Mejia Diaz
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <PartyPopper className="text-pink-500" />
                <p className="text-lg font-semibold">19 de Diciembre</p>
              </div>
              <p className="text-lg font-semibold">Salón de Clases</p>
            </div>

            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                ¡Confirma tu Asistencia!
              </button>
            )}

            {isOpen && !response && (
              <RSVPForm
                name={name}
                onNameChange={setName}
                onResponse={handleResponse}
              />
            )}

            {response && (
              <ResponseMessage type={response} name={name} />
            )}
          </div>
        </div>
      </div>
      {showConfetti && <Confetti />}
    </div>
  );
}