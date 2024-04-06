import Head from 'next/head';
import Navbar from '@/components/navbar';
import { Alumni_Sans as FontSans } from 'next/font/google';
import { ReactNode, useState } from 'react';
import { ThemeProvider } from './theme-provider';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './ui/card';
import { X } from 'lucide-react';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [closed, setClosed] = useState(false);

  return (
    <>
      <Head>
        <title>Dante Expósito</title>
        <meta
          name="description"
          content="A self-taught and optimistic fullstack engineer who loves designing and building web applications."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <main
          className={cn(
            'min-w-80 max-w-2xl mx-auto flex flex-col gap-8 p-4 xs:p-6 sm:p-8 md:px-0 text-xl font-medium font-sans antialiased',
            fontSans.variable
          )}
        >
          <Navbar />
          {children}
        </main>

        <Card
          className={cn(
            'hidden 2xl:flex w-80 fixed bottom-10 right-10 text-xl font-sans transition-opacity duration-300',
            closed && 'opacity-0',
            !closed && 'opacity-100',
            fontSans.variable
          )}
        >
          <CardContent className="p-6">
            <p>
              <b>Thanks for dropping by!</b> Feel free to check out my resume{' '}
              <a
                href="https://docs.google.com/document/d/13WfY4hwWSzz77P_BCD2dDJVlw44ESNJqeyRvQTkcKvc/edit?pli=1"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-1 hover:text-gray-700 dark:hover:text-gray-300"
              >
                right over here
              </a>
              . Cheers!
            </p>
          </CardContent>
          <button
            type="button"
            onClick={() => setClosed(true)}
            className="absolute -top-1 -right-1 cursor-pointer text-white bg-black dark:text-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 h-6 w-6 flex items-center justify-center rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default Layout;
