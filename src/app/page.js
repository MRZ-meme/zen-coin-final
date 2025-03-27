// page.js
export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #f0fdf4, #ecfdf5)",
        minHeight: "100vh",
        fontFamily: 'sans-serif'
      }}
      className="text-gray-800"
    >
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold mb-2 flex justify-center items-center">
          <span className="text-5xl mr-2">🧘‍♂️</span> Zen Coin
        </h1>
        <nav className="flex justify-center space-x-8 text-lg font-medium text-gray-600 mt-2">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#manifesto" className="hover:text-black">Manifesto</a>
          <a href="https://pancakeswap.finance" target="_blank" className="hover:text-black">Buy</a>
          <a href="#about" className="hover:text-black">About</a>
        </nav>
      </header>

      <section className="max-w-3xl mx-auto bg-white bg-opacity-80 p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-3xl font-extrabold mb-3">🚀 ZEN COIN is Coming</h2>
        <p className="text-lg leading-relaxed">Meme meets meditation. A token for true believers in calm, chaos, and crypto.</p>
        <p className="text-sm mt-4">
          <strong>Contract Address:</strong><br />
          <a className="text-blue-600" href="https://bscscan.com/token/0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45" target="_blank">
            0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45
          </a>
        </p>
      </section>

      <section id="manifesto" className="max-w-3xl mx-auto bg-white bg-opacity-80 p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-2">🧘‍♂️ ZEN COIN: The Meme Manifesto</h3>
        <p className="leading-relaxed">
          In a world full of chaos, rugs, and dog coins... a silent force awakens on the Binance Smart Chain. It doesn’t bark. It doesn’t fight. It meditates.<br />
          ZEN COIN is the first meme coin born from inner peace — not hype.
        </p>

        <h4 className="font-semibold mt-4 mb-1">🌕 What is ZEN COIN?</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Stupid cheap</li>
          <li>Wildly memeable</li>
          <li>Fully transparent</li>
          <li>Forever vibing 🌀</li>
        </ul>

        <h4 className="font-semibold mt-4 mb-1">🔥 Why Buy ZEN?</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Massive supply — everyone gets billions</li>
          <li>Locked liquidity = trust in ZEN 🧘</li>
          <li>No taxes, no rugs, no drama — just vibes</li>
        </ul>
      </section>

      <section id="slogans" className="max-w-3xl mx-auto bg-white bg-opacity-80 p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-bold mb-2">💬 Sample Meme Slogans</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>“Buy the calm before the storm.”</li>
          <li>“Not financial advice, just spiritual alignment.”</li>
          <li>“Rugless. Reckless. Relaxed.”</li>
          <li>“The quietest coin with the loudest gains.”</li>
        </ul>
      </section>

      <div className="text-center py-8">
        <a href="https://pancakeswap.finance" target="_blank" className="inline-block px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow hover:bg-green-600 transition duration-200">
          Buy on PancakeSwap
        </a>
      </div>
    </div>
  );
}
