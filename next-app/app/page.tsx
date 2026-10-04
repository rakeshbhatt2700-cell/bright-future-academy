import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bright Future Academy | Neb Sarai',
  description: 'Academic coaching and painting classes in Neb Sarai, New Delhi.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
