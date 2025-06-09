import React from 'react';
import News from '../assets/News';
import Reclamscomponenet from '../assets/Reclamscomponenet';

import Header from '../assets/Header';

function Other() {
  return (
    <div className='div'>
        <Reclamscomponenet />
        <Header />
      <News category="other" />
    </div>
  );
}

export default Other;
