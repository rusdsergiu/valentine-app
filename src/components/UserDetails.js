import React, { useState, useRef, useEffect } from "react";

const Button = ({ text, onClick, isNoButton }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current = document.querySelector(".container");
  }, []);

  const moveButton = () => {
    if (isNoButton && containerRef.current && buttonRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      // Define safe movement boundaries
      const maxX = containerRect.width - buttonRect.width - 20;
      const maxY = containerRect.height - buttonRect.height - 20;

      // Generate random new position within limits
      const newX = Math.max(10, Math.random() * maxX);
      const newY = Math.max(10, Math.random() * maxY);

      setPosition({ x: newX, y: newY });
    }
  };

  return (
    <button
      ref={buttonRef}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onClick={onClick}
      onMouseOver={moveButton} // Desktop hover
      onTouchStart={moveButton} // Mobile touch
      className={isNoButton ? "no-btn" : "yes-btn"}
    >
      {text}
    </button>
  );
};

export default Button;
