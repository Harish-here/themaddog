/* eslint-disable @next/next/no-page-custom-font */
'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from 'app/components/sidebar';
import BackgroundImage from 'app/components/bgImage/bgImage';
import useCoverImage from 'app/hook/useCoverImage';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: "Maddog - An Harish's Portfolio",
//   description: 'Portfolio for my work, travel and so on.. '
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <title>Maddog</title>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Open+Sans:ital@0;1&display=swap'
          rel='stylesheet'
        />
      </head>

      <body
        className={`${inter.className} h-screen relative flex flex-row-reverse open-sans-text`}
      >
        <Sidebar>{children}</Sidebar>

        <main className='workspace flex-1 relative'>
          <BackgroundImage imageUrl={useCoverImage()} />
        </main>
      </body>
    </html>
  );
}
