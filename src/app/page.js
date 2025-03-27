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
      <header className="text-center py-8">
        <h1 className="text-6xl font-extrabold flex justify-center items-center text-green-900">
          <span className="text-7xl mr-3">🧘‍♂️</span> Zen Coin
        </h1>
        <nav className="flex justify-center space-x-8 mt-6">
          <a href="#" className="text-lg px-4 py-2 rounded-lg bg-white bg-opacity-70 hover:bg-green-100 text-green-800 transition font-semibold">Home</a>
          <a href="#manifesto" className="text-lg px-4 py-2 rounded-lg bg-white bg-opacity-70 hover:bg-green-100 text-green-800 transition font-semibold">Manifesto</a>
          <a href="https://pancakeswap.finance" target="_blank" className="text-lg px-4 py-2 rounded-lg bg-white bg-opacity-70 hover:bg-green-100 text-green-800 transition font-semibold">Buy</a>
          <a href="#about" className="text-lg px-4 py-2 rounded-lg bg-white bg-opacity-70 hover:bg-green-100 text-green-800 transition font-semibold">About</a>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl mb-10">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900">🚀 ZEN COIN is Coming</h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">Meme meets meditation. A token for true believers in calm, chaos, and crypto. ZEN COIN is brewing silently on BNB Chain.</p>
        <p className="text-md text-gray-600">
          <strong>Contract Address:</strong><br />
          <a className="text-blue-600 underline" href="https://bscscan.com/token/0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45" target="_blank">
            0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45
          </a>
        </p>
      </section>

      <section id="manifesto" className="max-w-4xl mx-auto bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl mb-10">
        <h3 className="text-4xl font-bold mb-4 text-green-900">🧘‍♂️ ZEN COIN: The Meme Manifesto</h3>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          In a world full of chaos, rugs, and dog coins... a silent force awakens on the Binance Smart Chain. It doesn’t bark. It doesn’t fight. It meditates.<br />
          ZEN COIN is the first meme coin born from inner peace — not hype.
        </p>

        <h4 className="font-semibold text-2xl mt-8 mb-3 text-gray-800">🌕 What is ZEN COIN?</h4>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Stupid cheap</li>
          <li>Wildly memeable</li>
          <li>Fully transparent</li>
          <li>Forever vibing 🌀</li>
        </ul>

        <h4 className="font-semibold text-2xl mt-8 mb-3 text-gray-800">🔥 Why Buy ZEN?</h4>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Massive supply — everyone gets billions</li>
          <li>Locked liquidity = trust in ZEN 🧘</li>
          <li>No taxes, no rugs, no drama — just vibes</li>
        </ul>
      </section>

      <section id="slogans" className="max-w-4xl mx-auto bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl mb-16">
        <h3 className="text-3xl font-semibold mb-4 text-green-800">💬 Sample Meme Slogans</h3>
        <ul className="list-disc list-inside text-md text-gray-700 space-y-2">
          <li>“Buy the calm before the storm.”</li>
          <li>“Not financial advice, just spiritual alignment.”</li>
          <li>“Rugless. Reckless. Relaxed.”</li>
          <li>“The quietest coin with the loudest gains.”</li>
        </ul>
      </section>

      <div className="text-center pb-16">
        <a href="https://pancakeswap.finance" target="_blank" className="inline-block px-12 py-4 bg-green-700 text-white text-xl font-bold rounded-full shadow-lg hover:bg-green-800 transition duration-300">
          🛒 Buy on PancakeSwap
        </a>
      </div>
    </div>
  );
}
