import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kamm & Krone | Exklusiver Friseursalon',
  description: 'Ihr exklusiver Friseursalon für stilvolle und individuelle Looks in Musterstadt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}