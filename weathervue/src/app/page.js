'use client'

import React, { useEffect, useState } from 'react';
import App from './App';
import BgVideo from './components/bgVideo';


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className='mainApp'>
      {isClient && <BgVideo />}
      <div className="mainAppContainer" >
        <App />
      </div>
    </main>
  );
}