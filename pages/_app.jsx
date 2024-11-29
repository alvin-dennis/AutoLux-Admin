import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";
import Header from './components/Header';
import Footer from './components/Footer';
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';
import { useState, useEffect } from 'react';

const inter = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <SessionProvider session={session}>
      <main className={`${inter.className}`}>
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <ScaleLoader color="#36d7b7" />
          </div>
        ) : (
          <>
            <Header />
            <div className="min-h-screen max-w-screen-2xl mx-auto">
              <Component {...pageProps} />
              <Toaster position='top-center' />
            </div>
            <Footer />
          </>
        )}
      </main>
    </SessionProvider>
  );
}
