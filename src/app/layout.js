import './globals.css';
export const metadata = {
  title: 'Zen Coin',
  description: 'The meme token of balance, peace, and pure degeneracy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">🧘‍♂️ Zen Coin</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/buy" className="hover:text-blue-500">Buy</a>
            <a href="/manifesto" className="hover:text-blue-500">Manifesto</a>
            <a href="/about" className="hover:text-blue-500">About</a>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto py-10 px-4">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} Zen Coin. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
