
'use client'
import { useEffect, useState } from 'react';

const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  const targetNumber = 10000; // Le nombre cible que tu veux afficher

  useEffect(() => {
    const incrementTime = 10; // Vitesse d'incrémentation (en millisecondes)
    const totalDuration = 2000; // Durée totale de l'animation (en millisecondes)
    const step = targetNumber / (totalDuration / incrementTime);

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < targetNumber) {
          return Math.min(prevCounter + step, targetNumber);
        } else {
          clearInterval(interval);
          return targetNumber;
        }
      });
    }, incrementTime);

    return () => clearInterval(interval); // Nettoyage lors de la destruction du composant
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '48px', fontWeight: 'bold' }}>
      {Math.round(counter)}
    </div>
  );
};

export default CounterPage;
