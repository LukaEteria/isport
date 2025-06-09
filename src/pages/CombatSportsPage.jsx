import React from 'react';
import News from '../assets/News'; // შეამოწმე რომ სწორი გზაა
import Header from '../assets/Header';
import Reclamscomponenet from '../assets/Reclamscomponenet';

export default function CombatSportsPage() {
  return (
    <div className='div'>
        <Reclamscomponenet />
        
        <Header />
      <News category="combatsports" />
    </div>
  );
}
