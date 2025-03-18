import React from 'react';
import { FaExchangeAlt, FaBell, FaChartLine, FaFilter, FaHistory, FaMobileAlt } from 'react-icons/fa';

function Features() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <FaExchangeAlt className="text-3xl md:text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">Supports 50+ Exchanges</h3>
          <p className="text-gray-600 text-base md:text-lg">CEX & DEX integrated in real time.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <FaBell className="text-3xl md:text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-purple-500 mb-4">Instant Arbitrage Alerts</h3>
          <p className="text-gray-600 text-base md:text-lg">Get notified the second an opportunity appears.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <FaChartLine className="text-3xl md:text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-green-500 mb-4">AI-Powered Risk Analysis</h3>
          <p className="text-gray-600 text-base md:text-lg">Predicts trade execution speed & slippage risks.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <FaFilter className="text-3xl md:text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-4">Custom Filters</h3>
          <p className="text-gray-600 text-base md:text-lg">Set token pairs, min-profit %, and exchange preferences.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <FaHistory className="text-3xl md:text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-4">Historical Data & Trends</h3>
          <p className="text-gray-600 text-base md:text-lg">Track past arbitrage performance.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <FaMobileAlt className="text-3xl md:text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-4">Multi-Device Support</h3>
          <p className="text-gray-600 text-base md:text-lg">Web app, mobile, and Telegram bot.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;