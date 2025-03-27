// page.js
export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #d3f8e2 0%, #e4c1f9 100%)",
        minHeight: "100vh",
        fontFamily: 'Inter, sans-serif'
      }}
      className="text-gray-800"
    >
      <header className="text-center py-6">
        <h1 className="text-5xl font-extrabold mb-4 flex justify-center items-center text-green-800">
          <span className="text-6xl mr-2">🧘‍♂️</span> Zen Coin
        </h1>
        <nav className="flex justify-center space-x-10 text-lg font-medium text-gray-700 mt-4">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#manifesto" className="hover:text-black transition">Manifesto</a>
          <a href="https://pancakeswap.finance" target="_blank" className="hover:text-black transition">Buy</a>
          <a href="#about" className="hover:text-black transition">About</a>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl mb-8">
        <h2 className="text-4xl font-black mb-4 text-gray-900">🚀 ZEN COIN is Coming</h2>
        <p className="text-lg leading-relaxed text-gray-700">Meme meets meditation. A token for true believers in calm, chaos, and crypto. ZEN COIN is brewing silently on BNB Chain.</p>
        <p className="text-sm mt-6 text-gray-600">
          <strong>Contract Address:</strong><br />
          <a className="text-blue-600 underline" href="https://bscscan.com/token/0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45" target="_blank">
            0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45
          </a>
        </p>
      </section>

      <section id="manifesto" className="max-w-4xl mx-auto bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl mb-8">
        <h3 className="text-3xl font-semibold mb-3">🧘‍♂️ ZEN COIN: The Meme Manifesto</h3>
        <p className="text-gray-700 leading-relaxed">
          In a world full of chaos, rugs, and dog coins... a silent force awakens on the Binance Smart Chain. It doesn’t bark. It doesn’t fight. It meditates.<br />
          ZEN COIN is the first meme coin born from inner peace — not hype.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-2 text-gray-800">🌕 What is ZEN COIN?</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Stupid cheap</li>
          <li>Wildly memeable</li>
          <li>Fully transparent</li>
          <li>Forever vibing 🌀</li>
        </ul>

        <h4 className="font-semibold text-xl mt-6 mb-2 text-gray-800">🔥 Why Buy ZEN?</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Massive supply — everyone gets billions</li>
          <li>Locked liquidity = trust in ZEN 🧘</li>
          <li>No taxes, no rugs, no drama — just vibes</li>
        </ul>
      </section>

      <section id="slogans" className="max-w-4xl mx-auto bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl mb-12">
        <h3 className="text-2xl font-bold mb-3">💬 Sample Meme Slogans</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>“Buy the calm before the storm.”</li>
          <li>“Not financial advice, just spiritual alignment.”</li>
          <li>“Rugless. Reckless. Relaxed.”</li>
          <li>“The quietest coin with the loudest gains.”</li>
        </ul>
      </section>

      <div className="text-center pb-12">
        <a href="https://pancakeswap.finance" target="_blank" className="inline-block px-10 py-4 bg-green-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-700 transition duration-300">
          Buy on PancakeSwap
        </a>
      </div>
    </div>
  );
}
