import React, { useState } from 'react';
import Card from './components/Card';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const handleResponse = (answer: 'yes' | 'no') => {
    setResponse(answer);
  };

  return (
    <div 
      className="min-h-screen p-4 flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://i.imgur.com/your-minnie-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Card
        isOpen={isOpen}
        name={name}
        response={response}
        onOpen={() => setIsOpen(true)}
        onNameChange={setName}
        onResponse={handleResponse}
      />
    </div>
  );
}