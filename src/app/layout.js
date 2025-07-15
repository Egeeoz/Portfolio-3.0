import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.className} dark`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
