// layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-br from-green-100 to-purple-100 text-gray-900 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
