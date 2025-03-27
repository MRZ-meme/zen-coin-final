// page.js
export default function Home() {
  return (
    <div
      style={{ backgroundColor: '#f0f5f2' }} // fallback soft green background
      className="space-y-6 bg-cover bg-center min-h-screen"
    >
      <header className="text-center py-4">
        <nav className="flex justify-center space-x-6 mb-4 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#manifesto" className="hover:text-black">Manifesto</a>
          <a href="https://pancakeswap.finance" target="_blank" className="hover:text-black">Buy</a>
          <a href="#about" className="hover:text-black">About</a>
        </nav>
      </header>

      <section className="text-center bg-white bg-opacity-80 mx-4 p-4 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-2">ZEN COIN is Coming</h2>
        <p className="text-gray-600">Meme meets meditation. A token for true believers in calm, chaos, and crypto.</p>
        <p className="text-sm mt-2">Contract Address:<br />
          <a className="text-blue-600" href="https://bscscan.com/token/0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45" target="_blank">
            0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45
          </a>
        </p>
      </section>

      <section id="manifesto" className="bg-white bg-opacity-80 mx-4 p-4 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold">🧘‍♂️ ZEN COIN: The Meme Manifesto</h3>
        <p>
          In a world full of chaos, rugs, and dog coins... a silent force awakens on the Binance Smart Chain. It doesn’t bark. It doesn’t fight. It meditates.
          ZEN COIN is the first meme coin born from inner peace — not hype.
        </p>

        <h4 className="font-semibold mt-4">What is ZEN COIN?</h4>
        <ul className="list-disc list-inside">
          <li>Stupid cheap</li>
          <li>Wildly memeable</li>
          <li>Fully transparent</li>
          <li>Forever vibing 🌀</li>
        </ul>

        <h4 className="font-semibold mt-4">Why Buy ZEN?</h4>
        <ul className="list-disc list-inside">
          <li>Massive supply — everyone gets billions</li>
          <li>Locked liquidity = trust in ZEN 🧘</li>
          <li>No taxes, no rugs, no drama — just vibes</li>
        </ul>
      </section>

      <section id="slogans" className="bg-white bg-opacity-80 mx-4 p-4 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mt-6">💬 Sample Meme Slogans</h3>
        <ul className="list-disc list-inside text-sm">
          <li>“Buy the calm before the storm.”</li>
          <li>“Not financial advice, just spiritual alignment.”</li>
          <li>“Rugless. Reckless. Relaxed.”</li>
          <li>“The quietest coin with the loudest gains.”</li>
        </ul>
      </section>

      <div className="text-center mt-6">
        <a href="https://pancakeswap.finance" target="_blank" className="inline-block px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Buy on PancakeSwap
        </a>
      </div>
    </div>
  );
}
