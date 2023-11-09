import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import QueryProvider from './utils/QueryProvider';
import Sidebar from './components/SideBar';
import { ChakraProvider } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ChakraProvider>
            <Body>{children}</Body>
          </ChakraProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

function Body({ children }: RootLayoutProps) {
  return (
    <div className={`${inter.className} flex min-h-screen flex-col p-0`}>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
