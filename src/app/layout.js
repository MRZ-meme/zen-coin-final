// layout.js
import './globals.css';

export const metadata = {
  title: 'Zen Coin',
  description: 'Meme meets meditation — The calmest coin on the blockchain.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-green-100 to-purple-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
