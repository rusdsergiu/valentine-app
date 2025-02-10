import React, { useState } from 'react';
import './App.css';
import Button from './components/UserDetails';

function App() {
  const [message, setMessage] = useState("Do you want to be my Valentine? 💖");

  const handleYesClick = () => {
    setMessage("Yay! 🎉💖 Oricum era singurul raspuns corect 😍");
  };

  return (
    <div className="container">
      <h1>{message}</h1>
      <div className="buttons">
        <Button text="Yes 💘" onClick={handleYesClick} id="yesBtn" />
        <Button text="No 💔" id="noBtn" isNoButton />
      </div>
    </div>
  );
}

export default App;
