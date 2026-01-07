import Container from '@/components/layouts/Container';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Keeper',
  description:
    'It is a simple note taking app where user can write their thought or anything they want.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang='en'>
        <body
          className={`${inter.className} antialiased grid grid-rows-[auto_1fr_auto] min-h-dvh`}>
          <Header />
          <Container>
            <main className='w-full'>{children}</main>
          </Container>
          <Footer />
        </body>
      </html>
      <Toaster />
    </>
  );
}
