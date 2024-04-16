/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from 'app/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Maddog - An Harish's Portfolio",
  description: 'Portfolio for my work, travel and so on.. '
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Open+Sans:ital@0;1&display=swap'
          rel='stylesheet'
        />
      </head>

      <body
        className={`${inter.className} h-screen relative flex flex-column open-sans-text`}
      >
        <Sidebar />
        <main className='workspace flex-1'>{children}</main>
      </body>
    </html>
  );
}
