import React from 'react';

interface InfoBoxProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function InfoBox({ icon, title, content }: InfoBoxProps) {
  return (
    <div className="bg-white/90 p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-pink-500">{icon}</div>
        <h4 className="text-lg font-bold text-pink-700">{title}</h4>
        <p className="text-pink-600 font-semibold">{content}</p>
      </div>
    </div>
  );
}