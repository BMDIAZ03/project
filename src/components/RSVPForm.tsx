import React from 'react';
import { Check, X } from 'lucide-react';

interface RSVPFormProps {
  name: string;
  onNameChange: (name: string) => void;
  onResponse: (response: 'yes' | 'no') => void;
}

export default function RSVPForm({ name, onNameChange, onResponse }: RSVPFormProps) {
  return (
    <div className="space-y-6 max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Escribe tu nombre aquí"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className="w-full px-6 py-3 text-lg border-2 border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-center animate-pulse"
      />
      <div className="flex justify-center gap-4">
        <button
          onClick={() => onResponse('yes')}
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Check size={24} />
          <span>¡Sí asistiré!</span>
        </button>
        <button
          onClick={() => onResponse('no')}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <X size={24} />
          <span>No podré ir</span>
        </button>
      </div>
    </div>
  );
}