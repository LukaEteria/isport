import React from 'react';
import News from '../assets/News'; // დააკვირდი ფაილის გზას
import Reclamscomponenet from '../assets/Reclamscomponenet';

import Header from '../assets/Header';

function FootballPage() {
  return (
    <div className='div ' >
        <Reclamscomponenet />
        <Header />
    
      <News category="football" />
    </div>
  );
}

export default FootballPage;
