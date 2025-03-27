// layout.js
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Zen Coin - Meme with Meaning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gradient-to-br from-green-50 to-purple-100 text-gray-900 min-h-screen font-sans antialiased">
        <header className="flex items-center justify-between p-6 shadow-md bg-white/70 backdrop-blur-sm">
          <div className="text-2xl font-bold flex items-center space-x-2">
            <span>🧘</span>
            <span>Zen Coin</span>
          </div>
          <nav className="space-x-4 text-lg font-medium">
            <a href="#" className="hover:text-purple-700 transition">Home</a>
            <a href="#" className="hover:text-purple-700 transition">Buy</a>
            <a href="#" className="hover:text-purple-700 transition">Manifesto</a>
            <a href="#" className="hover:text-purple-700 transition">About</a>
          </nav>
        </header>
        <main className="p-6 max-w-5xl mx-auto">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-500 py-6">
          &copy; {new Date().getFullYear()} Zen Coin. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
