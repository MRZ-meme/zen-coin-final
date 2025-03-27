// page.js
export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f0fdf4, #e0f2f1)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
      }}
      className="text-gray-800"
    >
      <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white bg-opacity-90">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          🧘 Zen Coin
        </h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#manifesto">Manifesto</a>
          <a href="https://pancakeswap.finance" target="_blank">Buy</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        <section className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-lg">
          <h2 className="text-4xl font-bold mb-2">🚀 ZEN COIN is Coming</h2>
          <p className="text-gray-600">
            Meme meets meditation. A token for true believers in calm, chaos, and crypto.
            ZEN COIN is brewing silently on BNB Chain. Be ready.
          </p>
          <p className="mt-4 text-sm">
            <span className="font-semibold">Contract Address:</span><br />
            <a
              className="text-blue-600 hover:underline"
              href="https://bscscan.com/token/0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45"
              target="_blank"
            >
              0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45
            </a>
          </p>
        </section>

        <section id="manifesto" className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">🧘‍♂️ ZEN COIN: The Meme Manifesto</h3>
          <p>
            In a world full of chaos, rugs, and dog coins... a silent force awakens on the Binance Smart Chain.
            It doesn’t bark. It doesn’t fight. It meditates.
          </p>
          <p className="mt-2">
            ZEN COIN is the first meme coin born from inner peace — not hype.
          </p>

          <h4 className="mt-4 font-semibold">What is ZEN COIN?</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Stupid cheap</li>
            <li>Wildly memeable</li>
            <li>Fully transparent</li>
            <li>Forever vibing 🌀</li>
          </ul>

          <h4 className="mt-4 font-semibold">Why Buy ZEN?</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Massive supply — everyone gets billions</li>
            <li>Locked liquidity = trust in ZEN 🧘</li>
            <li>No taxes, no rugs, no drama — just vibes</li>
          </ul>
        </section>

        <section className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold">💬 Meme Slogans</h3>
          <ul className="list-disc list-inside ml-4 mt-2 text-sm">
            <li>“Buy the calm before the storm.”</li>
            <li>“Not financial advice, just spiritual alignment.”</li>
            <li>“Rugless. Reckless. Relaxed.”</li>
            <li>“The quietest coin with the loudest gains.”</li>
          </ul>
        </section>

        <div className="text-center">
          <a
            href="https://pancakeswap.finance"
            target="_blank"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
          >
            Buy on PancakeSwap
          </a>
        </div>
      </main>
    </div>
  );
}
