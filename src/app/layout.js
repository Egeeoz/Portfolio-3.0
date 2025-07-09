import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.className} dark`}>
      <body>{children}</body>
    </html>
  );
}
