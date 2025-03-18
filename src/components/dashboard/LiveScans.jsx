import React, { useState } from 'react';

function LiveScans() {
  // Mock data for live scans
  const [scans, setScans] = useState([
    { id: 1, pair: 'BTC/USD', exchange: 'Binance', profit: '2.5%', time: '2025-02-11 19:50:00' },
    { id: 2, pair: 'ETH/USD', exchange: 'Coinbase', profit: '1.8%', time: '2025-02-11 19:51:30' },
    { id: 3, pair: 'XRP/USD', exchange: 'Kraken', profit: '3.0%', time: '2025-02-11 19:52:10' },
  ]);

  const [filter, setFilter] = useState('');
  const [exchangeFilter, setExchangeFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleExchangeFilterChange = (e) => {
    setExchangeFilter(e.target.value);
  };

  const filteredScans = scans.filter(scan =>
    (scan.pair.toLowerCase().includes(filter.toLowerCase()) || scan.exchange.toLowerCase().includes(filter.toLowerCase())) &&
    (exchangeFilter === '' || scan.exchange.toLowerCase() === exchangeFilter.toLowerCase())
  );

  return (
    <div className="py-12 bg-white px-4 md:px-8 lg:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Live Arbitrage Scans</h2>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Filter by pair or exchange"
            value={filter}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full mb-4"
          />
          <select
            value={exchangeFilter}
            onChange={handleExchangeFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
          >
            <option value="">All Exchanges</option>
            <option value="Binance">Binance</option>
            <option value="Coinbase">Coinbase</option>
            <option value="Kraken">Kraken</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 text-left px-4">Pair</th>
                <th className="py-2 text-left px-4">Exchange</th>
                <th className="py-2 text-left px-4">Profit</th>
                <th className="py-2 text-left px-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredScans.length > 0 ? (
                filteredScans.map((scan) => (
                  <tr key={scan.id}>
                    <td className="py-2 px-4">{scan.pair}</td>
                    <td className="py-2 px-4">{scan.exchange}</td>
                    <td className="py-2 px-4">{scan.profit}</td>
                    <td className="py-2 px-4">{scan.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-2 text-center text-gray-500">No arbitrage opportunities found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LiveScans;