'use client';
import { useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className='home-page relative text-justify'>
      <Head>
        <title>Maddog - Myself</title>
      </Head>
      <p className='text-gray-800'>
        <div className='text-3xl'>
          <sup className='text-base text-gray-600'>I&apos;m</sup>
          <span className='mx-1 font-semibold text-black'>Harish Ravi</span>
          <sub className='text-base text-gray-600'>a Front-end engineer.</sub>
        </div>
        <br />
        who thrives on building beautiful and functional things for the web, all
        while rocking my favorite tunes on headphones.
        <br />
        <br />
        I&apos;m a big believer in{' '}
        <span className='font-medium'>clean, simple, and minimal UI </span> that
        puts the user experience first.
      </p>
      <br />
      <p className='text-gray-800'>
        <span className='font-medium'>Front-end advocacy</span> fuels my
        learning in the ever-evolving web space, making me a stronger developer
        and a potential developer advocate.
      </p>
      <br />
      <p className='text-gray-800'>
        When I&apos;m not coding, you might find me doing a few things like
        getting lost in a good movie or exploring new places on long bike rides.
        {/* So, take a look around my portfolio and see what I can build!
        Perhaps we can even connect and discuss the future of front-end
        development together.{' '} */}
      </p>
    </div>
  );
}
