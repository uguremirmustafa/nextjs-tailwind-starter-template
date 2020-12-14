/** @format */

import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, children }) {
  return (
    <div className="flex flex-col justify-between">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="px-4">
        <div className="max-w-3xl mx-auto my-16 px-8 py-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
