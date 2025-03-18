import React from 'react';
import { useParams } from 'react-router-dom';

function TradeDetails() {
  const { tradeId } = useParams();

  // Mock data for demonstration. In a real application, you would fetch this data from the server based on the tradeId.
  const tradeDetails = {
    1: { id: 1, pair: 'BTC/USD', exchange: 'Binance', profit: '2.5%', details: 'Detailed information about the BTC/USD trade on Binance.', date: '2025-02-21', volume: '500 BTC', status: 'Completed' },
    2: { id: 2, pair: 'ETH/USD', exchange: 'Coinbase', profit: '1.8%', details: 'Detailed information about the ETH/USD trade on Coinbase.', date: '2025-02-22', volume: '1000 ETH', status: 'Pending' },
    3: { id: 3, pair: 'XRP/USD', exchange: 'Kraken', profit: '3.0%', details: 'Detailed information about the XRP/USD trade on Kraken.', date: '2025-02-23', volume: '2000 XRP', status: 'Failed' },
  }[tradeId];

  if (!tradeDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Trade Details</h2>
          <p className="text-gray-600 text-lg">Trade not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Trade Details</h2>
        <div className="text-left">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">Trade ID: <span className="text-blue-600">{tradeDetails.id}</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-lg"><strong>Pair:</strong> <span className="text-blue-600">{tradeDetails.pair}</span></p>
            </div>
            <div>
              <p className="text-lg"><strong>Exchange:</strong> <span className="text-blue-600">{tradeDetails.exchange}</span></p>
            </div>
            <div>
              <p className="text-lg"><strong>Profit:</strong> <span className="text-green-600">{tradeDetails.profit}</span></p>
            </div>
            <div>
              <p className="text-lg"><strong>Date:</strong> <span className="text-gray-600">{tradeDetails.date}</span></p>
            </div>
            <div>
              <p className="text-lg"><strong>Volume:</strong> <span className="text-gray-600">{tradeDetails.volume}</span></p>
            </div>
            <div>
              <p className="text-lg"><strong>Status:</strong> <span className={`text-lg ${tradeDetails.status === 'Completed' ? 'text-green-600' : tradeDetails.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>{tradeDetails.status}</span></p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-2">Details</h4>
            <p className="text-gray-700">{tradeDetails.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeDetails;