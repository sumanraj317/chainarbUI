import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function LiveArbitrageDashboard() {
  const [scanning, setScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [lastScanTime, setLastScanTime] = useState(null);
  const [selectedTrade, setSelectedTrade] = useState(null);

  const demoScanResults = [
    {
      pair: "BTC/USDT",
      buyExchange: "Binance",
      buyPrice: "$63,200",
      sellExchange: "Kraken",
      sellPrice: "$63,850",
      profit: "+$650 per BTC",
      status: "Profitable",
      liquidity: "High",
      fees: "$10 per BTC",
      executionTime: "1.2 sec",
    },
    {
      pair: "ETH/USDT",
      buyExchange: "KuCoin",
      buyPrice: "$3,450",
      sellExchange: "Coinbase",
      sellPrice: "$3,480",
      profit: "+$30 per ETH",
      status: "Profitable",
      liquidity: "Medium",
      fees: "$5 per ETH",
      executionTime: "1.8 sec",
    },
    {
      pair: "SOL/USDT",
      buyExchange: "Bybit",
      buyPrice: "$128.50",
      sellExchange: "Binance",
      sellPrice: "$129.00",
      profit: "+$0.50 per SOL",
      status: "Low Profit",
      liquidity: "Low",
      fees: "$0.20 per SOL",
      executionTime: "2.5 sec",
    },
  ];

  const handleScan = () => {
    setScanning(true);
    setScanResults(null);

    setTimeout(() => {
      setScanResults(demoScanResults);
      setScanning(false);
      setLastScanTime(new Date().toLocaleTimeString());
    }, 2000);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        >
          Live Arbitrage Dashboard
        </motion.h2>

        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <button
            onClick={handleScan}
            className={`px-8 py-4 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ${
              scanning ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
            }`}
            disabled={scanning}
          >
            {scanning ? "Scanning..." : "Start Scanning"}
          </button>
        </motion.div>

        {lastScanTime && (
          <motion.p
            className="text-center text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            Last scan: <strong>{lastScanTime}</strong>
          </motion.p>
        )}

        {scanning && (
          <motion.p
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          >
            Scanning markets... 🔄
          </motion.p>
        )}

        {scanResults && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {scanResults.map((trade, index) => (
              <motion.div
                key={index}
                className="relative p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold">{trade.pair} Arbitrage</h3>
                <p className="text-gray-300 mt-2">
                  Buy on {trade.buyExchange} at {trade.buyPrice} and sell on {trade.sellExchange} at {trade.sellPrice}.  
                  Potential Profit: {trade.profit}
                </p>
                <span className={`block mt-3 font-semibold ${
                  trade.status === "Profitable" ? "text-green-400" : "text-yellow-400"
                }`}>
                  {trade.status === "Profitable" ? "Profitable Opportunity ✅" : "Low Profit Potential ⚠️"}
                </span>
                <button
                  onClick={() => setSelectedTrade(trade)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  View Trade
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        <AnimatePresence>
          {selectedTrade && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{selectedTrade.pair} Arbitrage</h3>
                <p className="text-gray-300">📉 Buy on <strong>{selectedTrade.buyExchange}</strong> at <strong>{selectedTrade.buyPrice}</strong></p>
                <p className="text-gray-300">📈 Sell on <strong>{selectedTrade.sellExchange}</strong> at <strong>{selectedTrade.sellPrice}</strong></p>
                <p className="text-green-400 font-semibold mt-2">💰 Profit: {selectedTrade.profit}</p>
                <p className="text-gray-400">🔄 Liquidity: {selectedTrade.liquidity}</p>
                <p className="text-gray-400">⚡ Execution Time: {selectedTrade.executionTime}</p>
                <p className="text-gray-400">💸 Fees: {selectedTrade.fees}</p>
                <button
                  onClick={() => setSelectedTrade(null)}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default LiveArbitrageDashboard;
