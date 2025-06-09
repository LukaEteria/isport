import React from 'react';
import News from '../assets/News'; // დარწმუნდი, რომ გზა სწორია
import Reclamscomponenet from '../assets/Reclamscomponenet';

import Header from '../assets/Header';

function BasketballPage() {
  return (
    <div className='div'>
        <Reclamscomponenet />
        <Header />
      <News category="basketball" />
    </div>
  );
}

export default BasketballPage;
