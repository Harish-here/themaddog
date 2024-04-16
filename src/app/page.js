'use client';
import { useRef } from 'react';
import BackgroundImage from 'app/components/bgImage/bgImage';
import homeImg from './../images/home-img.jpeg';
import Card from 'app/components/card/card';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className='home-page relative'>
      <BackgroundImage imageUrl={homeImg} />
      <Card>
        <div className='text-black font-semibold text-2xl'>sample Data</div>
      </Card>
    </div>
  );
}
