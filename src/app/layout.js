// layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Zen Coin</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gradient-to-br from-green-100 to-purple-100 text-gray-900 min-h-screen font-sans antialiased">
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
