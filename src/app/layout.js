import { Inter } from 'next/font/google';
import './globals.css';
import MUIProvider from './_providers/MUIProvider';
import StoreProvider from './_providers/StoreProvider';
import Notistack from './_providers/notistack';
import { SanityLive } from '@/sanity/live';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shobill Group',
  description: 'Shobill CRM Web based app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Notistack />
          <MUIProvider>{children}</MUIProvider>
          <SanityLive />
        </StoreProvider>
      </body>
    </html>
  );
}
