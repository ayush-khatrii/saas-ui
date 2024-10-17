"use client";
import React, { useEffect, useState } from 'react';

export default function Demo() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300); // Delay fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex justify-center items-center'>
      <video
        src='/codex.mp4'
        autoPlay
        loop
        muted
        className='max-w-4xl border-4 border-zinc-800 rounded-xl shadow-lg transition-all duration-700 hover:scale-105 hover:border-rose-500'
        onLoadedData={() => setLoaded(true)}
        style={{
          // add box shadow  in red color
          boxShadow: '0px 0px 30px 5px  #800020',
        }}
      />
    </div>
  );
}
