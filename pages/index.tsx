import Head from 'next/head';

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Landing Page - Next.js dengan Tailwind CSS</title>
        <meta name="description" content="Contoh landing page menggunakan Next.js dengan Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md py-8 px-4 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Selamat Datang!</h1>
          <p className="text-lg text-gray-700 text-center">
            Ini adalah contoh landing page menggunakan Next.js dan Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 text-center mt-2">Salam dari ChatGPT!</p>
        </div>
      </main>
    </div>
  );
}
