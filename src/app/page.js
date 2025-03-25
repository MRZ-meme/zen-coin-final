import { Lock, Rocket } from "lucide-react";

export default function ZenCoinLaunch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-zinc-900 text-white flex flex-col items-center justify-center p-6 space-y-10">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        🚀 ZEN COIN is Coming
      </h1>
      <p className="text-lg md:text-xl text-zinc-300 text-center max-w-2xl">
        Meme meets meditation. A token for true believers in calm, chaos, and crypto.
        ZEN COIN is brewing silently on BNB Chain. Be ready.
      </p>
      <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg w-full max-w-xl space-y-4">
        <div>
          <p className="text-sm text-zinc-400">Contract Address</p>
          <p className="text-md font-mono break-all">
            0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded"
            href="https://pancakeswap.finance/swap?outputCurrency=0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45"
            target="_blank"
          >
            Buy on PancakeSwap
          </a>
          <a
            className="w-full border border-purple-600 text-purple-300 hover:bg-purple-900 text-center py-2 rounded"
            href="https://bscscan.com/token/0x5537DAA677718Cd829eB7F2439c5109eBA9C0a45"
            target="_blank"
          >
            View on BscScan
          </a>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-2 text-zinc-400">
          <Lock className="w-4 h-4" />
          LP Lock Coming Soon
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <Rocket className="w-4 h-4" />
          Launch Mode: Stealth
        </div>
      </div>
      <div className="max-w-3xl text-left text-zinc-300 space-y-4 pt-10">
        <h2 className="text-3xl font-bold">🧘‍♂️ ZEN COIN: The Meme Manifesto</h2>
        <p>In a world full of chaos, rugs, and dog coins... a silent force awakens on the Binance Smart Chain. It doesn’t bark. It doesn’t fight. It meditates.</p>
        <p>ZEN COIN is the first meme coin born from inner peace — not hype. A token for those who’ve seen the candles, ridden the waves, and now seek balance... on-chain.</p>
        <h3 className="text-2xl font-semibold">🪙 What is ZEN COIN?</h3>
        <p>ZEN COIN is a BEP-20 meme token that blends degenerate trading energy with serene meme magic and a peaceful plan to moon.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Stupid cheap</li>
          <li>Wildly memable</li>
          <li>Fully transparent</li>
          <li>Forever vibing</li>
        </ul>
        <h3 className="text-2xl font-semibold">🔥 Why Buy ZEN?</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Massive supply – everyone gets billions</li>
          <li>Locked liquidity – trust is zen</li>
          <li>No taxes, no rugs, no drama – just vibes</li>
          <li>Community-powered – your memes are your meditation</li>
        </ul>
        <h3 className="text-2xl font-semibold">💬 Sample Meme Slogans</h3>
        <ul className="list-disc pl-6 space-y-1 italic">
          <li>"Buy the calm before the storm."</li>
          <li>"Not financial advice, just spiritual alignment."</li>
          <li>"Rugless. Reckless. Relaxed."</li>
          <li>"The only coin with a third eye."</li>
          <li>"Breathe in. Buy the dip. Breathe out."</li>
        </ul>
        <p className="text-lg font-bold pt-4">“We’re not early. We’re eternal.”</p>
      </div>
      <footer className="pt-10 text-xs text-zinc-500">© 2025 ZEN COIN. Ride the vibe. Stay zen.</footer>
    </div>
  );
}