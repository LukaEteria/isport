import React from 'react';
import News from '../assets/News';
import Reclamscomponenet from '../assets/Reclamscomponenet';
import Header from '../assets/Header';

function Rugby() {
  return (
    <div className='div'>
        <Reclamscomponenet />

        <Header />
      <News category="rugby" />
    </div>
  );
}

export default Rugby;
