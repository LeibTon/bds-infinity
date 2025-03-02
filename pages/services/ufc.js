import Head from 'next/head';

export default function Ufc() {
  return (
    <>
      <Head>
        <title>Page Under Construction</title>
        <meta name="description" content="This page is currently under construction." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">🚧 Page Under Construction 🚧</h1>
          <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">We are working hard to bring you something amazing!</p>
          <p className="text-lg animate__animated animate__fadeIn animate__delay-2s">Please check back soon.</p>
          <div className="mt-6">
            <p className="text-sm">Stay updated with our progress:</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-white hover:text-blue-300">Facebook</a>
              <a href="#" className="text-white hover:text-blue-300">Twitter</a>
              <a href="#" className="text-white hover:text-blue-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
