import { useState } from 'react'
import './App.css'
import cutie_pie from './assets/cutie_pie.mp4';
import confetti from 'canvas-confetti';
import stud_gucci from './assets/stud_gucci.jpg'

function App() {
  const [noButtonPos, setNoButtonPos] = useState(null);
  const [message, setMessage] = useState("Will you be my valentine?");
  const [hasAccepted, setHasAccepted] = useState(false);

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonPos({ x, y });

    const randomMsg = badChoice[Math.floor(Math.random() * badChoice.length)];
    setMessage(randomMsg);
  };

  const badChoice = [
    "What are you doing?", 
    "Don't click that",
    "Try pressing the pink button",
    "Wait, think about it!",
    "Are you sure??",
    "Really? :(",
    "You're clicking the wrong one!",
    "Psh, you're mean.",
    "Try again!",
    "I'll be very sad...",
  ]

  const handleYes = () => {
    confetti({
      particleCount: 1000,
      spread: 120,
      origin: { y: 0.4 }
    });
    setHasAccepted(true);
  };

  if (hasAccepted) {
    return (
      <div className="main2">
        <img 
          src={stud_gucci} 
          alt="Happy dance" 
          className="stud-gucci"
        />
        <h1>Yay! I knew you'd say yes! ❤️</h1>
        <p>Be prepared for awesome gifts!</p>
      </div>
    );
  }

  return (
    <>
      <div className='main'>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
        >
          <source src={cutie_pie} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <h2>{message}</h2>
        <div className="button-group">
          <button className="btn-yes" onClick={handleYes}>Yes</button>
          <button 
            className="btn-no"
            onMouseEnter={moveButton}
            onMouseDown={moveButton}
            style={noButtonPos ? {
              position: 'fixed',
              left: `${noButtonPos.x}px`,
              top: `${noButtonPos.y}px`,
              zIndex: 999
            } : {}}
            >
              No
            </button>
        </div>
      </div>
    </>
  )
}

export default App
