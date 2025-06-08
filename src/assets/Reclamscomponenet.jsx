import React, { useState, useEffect } from 'react';
import './reclams.css';

function Reclamscomponenet() {
  const fullText = "თქვენი რეკლამის ადგილი...";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 50;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, index + 1));
        setIndex(prev => prev + 1);

        if (index === fullText.length) {
          setIsDeleting(true);
        }
      } else {
        setText(fullText.substring(0, index - 1));
        setIndex(prev => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div className='Reclamone'>
      <h1>{text}</h1>
    </div>
  );
}

export default Reclamscomponenet;
