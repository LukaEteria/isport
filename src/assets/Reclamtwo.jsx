import React, { useState, useEffect } from 'react';
import './reclams.css';

function TypingText({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 200 : 200;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return <h3>{displayedText}</h3>;
}

function Reclamtwo() {
  return (
    <>
      <div className="reclamleft">
        <TypingText text="თქვენი რეკლამის ადგილი..." />
      </div>
      <div className="reclamrigth">
        <TypingText text="თქვენი რეკლამის ადგილი..." />
      </div>
    </>
  );
}

export default Reclamtwo;
