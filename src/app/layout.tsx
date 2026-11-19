import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Kadek Swarniati | Developer Portfolio',
  description:
    'Personal developer portfolio featuring Sociality, StatRelease, Statistical Digital Twin, and CodeCue.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
