import React from 'react';
import News from '../assets/News';
import Header from '../assets/Header';
import Reclamscomponenet from '../assets/Reclamscomponenet';


function TennisPage() {
  return (
    <div className='div'>
        <Reclamscomponenet/>
        <Header />
      <News category="tennis" />
    </div>
  );
}

export default TennisPage;
