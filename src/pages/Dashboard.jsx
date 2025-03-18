import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaSearch, FaUser, FaSyncAlt, FaChartLine, FaBinoculars, FaBolt, FaChartBar, FaCog, FaChevronDown, FaChevronUp, FaMoon, FaSun, FaHome } from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanningData, setScanningData] = useState([]);
  const [lastScanTime, setLastScanTime] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'profit', direction: 'descending' });
  const [heatmapData, setHeatmapData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [bestOpportunity, setBestOpportunity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      // Mock data update every 10 seconds
      const now = new Date();
      const newScanningData = [
        { id: 1, pair: 'BTC/USD', exchange: 'Binance', profit: (Math.random() * 5).toFixed(2) + '%' },
        { id: 2, pair: 'ETH/USD', exchange: 'Coinbase', profit: (Math.random() * 5).toFixed(2) + '%' },
        { id: 3, pair: 'XRP/USD', exchange: 'Kraken', profit: (Math.random() * 5).toFixed(2) + '%' },
      ];
      setScanningData(newScanningData);
      setHeatmapData(newScanningData);
      setLastScanTime(now.toLocaleTimeString());
      setBestOpportunity(newScanningData.reduce((max, data) => (parseFloat(data.profit) > parseFloat(max.profit) ? data : max), newScanningData[0]));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleStartScanning = () => {
    setIsScanning(true);
    setLastScanTime(null);
    // Mock scanning process
    setTimeout(() => {
      const now = new Date();
      const newScanningData = [
        { id: 1, pair: 'BTC/USD', exchange: 'Binance', profit: '2.5%' },
        { id: 2, pair: 'ETH/USD', exchange: 'Coinbase', profit: '1.8%' },
        { id: 3, pair: 'XRP/USD', exchange: 'Kraken', profit: '3.0%' },
      ];
      setScanningData(newScanningData);
      setHeatmapData(newScanningData);
      setLastScanTime(now.toLocaleTimeString());
      setIsScanning(false);
      setBestOpportunity(newScanningData.reduce((max, data) => (parseFloat(data.profit) > parseFloat(max.profit) ? data : max), newScanningData[0]));
    }, 2000);
  };

  const renderProfit = (profit) => {
    const profitValue = parseFloat(profit);
    let profitColor = 'text-gray-700';
    if (profitValue > 3) profitColor = 'text-green-600';
    else if (profitValue > 1) profitColor = 'text-yellow-600';
    else profitColor = 'text-red-600';

    return <span className={profitColor}>{profit}</span>;
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...scanningData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter(data => 
    data.pair.toLowerCase().includes(searchQuery.toLowerCase()) || 
    data.exchange.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleRow = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/trade-details/${id}`);
  };

  const barChartData = {
    labels: scanningData.map(data => data.pair),
    datasets: [{
      label: 'Trade Volume',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: scanningData.map(data => parseFloat(data.profit)),
    }]
  };

  const lineChartData = {
    labels: scanningData.map(data => data.pair),
    datasets: [{
      label: 'Price Movement',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: scanningData.map(data => parseFloat(data.profit)),
    }]
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className={`h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} w-64 flex flex-col fixed`}>
        <div className="h-16 flex items-center justify-center border-b border-gray-800">
          <span className="text-2xl font-bold">ChainArb</span>
        </div>
        <nav className="flex flex-col flex-grow p-4">
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded-md tooltip" data-tooltip="Home">
            <FaHome className="mr-2" /> <span className="hidden md:inline">Home</span>
          </Link>
          <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded-md tooltip" data-tooltip="Dashboard">
            <FaChartLine className="mr-2" /> <span className="hidden md:inline">Dashboard</span>
          </Link>
          <Link to="/analytics" className="flex items-center p-2 hover:bg-gray-700 rounded-md tooltip" data-tooltip="Analytics">
            <FaChartBar className="mr-2" /> <span className="hidden md:inline">Analytics</span>
          </Link>
          <Link to="/settings" className="flex items-center p-2 hover:bg-gray-700 rounded-md tooltip" data-tooltip="Settings">
            <FaCog className="mr-2" /> <span className="hidden md:inline">Settings</span>
          </Link>
        </nav>
        <div className="p-4">
          <button
            onClick={handleToggleDarkMode}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-full"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            {darkMode ? ' Light Mode' : ' Dark Mode'}
          </button>
        </div>
      </div>
      <div className={`flex flex-col flex-grow ml-64 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className={`flex items-center justify-between px-4 py-3 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} shadow-md mb-4`}>
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">Arbitrage Dashboard</h1>
            <div className="relative ml-4">
              <FaSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Filter by Crypto Pair / Exchange"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-md focus:outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-gray-400 mr-4">
              <FaSyncAlt className="mr-1" />
              <span>{lastScanTime ? `Updated: ${lastScanTime}` : 'Not yet updated'}</span>
            </div>
            <FaBell className="text-gray-400 mr-4" />
            <FaUser className="text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="flex-grow p-4">
          <div className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handleStartScanning}
                className={`px-4 py-2 md:px-6 md:py-3 ${isScanning ? 'bg-gray-400' : 'bg-blue-600'} text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300`}
                disabled={isScanning}
              >
                {isScanning ? <span className="loader"></span> : '🔍 Start Scanning (Demo)'}
              </button>
              {lastScanTime && (
                <p className="text-gray-400 text-base md:text-lg">
                  Last scan: {lastScanTime}
                </p>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className={`sticky top-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
                  <tr>
                    <th className="py-2 text-center px-4 border-b border-gray-600 cursor-pointer" onClick={() => handleSort('pair')}>
                      Pair {sortConfig.key === 'pair' && (sortConfig.direction === 'ascending' ? <FaChevronUp /> : <FaChevronDown />)}
                    </th>
                    <th className="py-2 text-center px-4 border-b border-gray-600 cursor-pointer" onClick={() => handleSort('exchange')}>
                      Exchange {sortConfig.key === 'exchange' && (sortConfig.direction === 'ascending' ? <FaChevronUp /> : <FaChevronDown />)}
                    </th>
                    <th className="py-2 text-center px-4 border-b border-gray-600 cursor-pointer" onClick={() => handleSort('profit')}>
                      Profit {sortConfig.key === 'profit' && (sortConfig.direction === 'ascending' ? <FaChevronUp /> : <FaChevronDown />)}
                    </th>
                    <th className="py-2 text-center px-4 border-b border-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((data) => (
                    <React.Fragment key={data.id}>
                      <tr onClick={() => handleToggleRow(data.id)} className="cursor-pointer">
                        <td className="py-2 px-4 border-b border-gray-600">{data.pair}</td>
                        <td className="py-2 px-4 border-b border-gray-600">{data.exchange}</td>
                        <td className="py-2 px-4 border-b border-gray-600">{renderProfit(data.profit)}</td>
                        <td className="py-2 px-4 border-b border-gray-600">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewDetails(data.id);
                            }}
                            className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
                          >
                            View Trade Details
                          </button>
                        </td>
                      </tr>
                      {expandedRow === data.id && (
                        <tr>
                          <td colSpan="4" className={`py-2 px-4 border-b border-gray-600 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                            <div className="p-4">
                              <h3 className="text-xl font-semibold">Trade Details for {data.pair}</h3>
                              <p>Exchange: {data.exchange}</p>
                              <p>Profit: {data.profit}</p>
                              {/* Additional trade details can go here */}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Profitability Heatmap</h2>
              <div className="grid grid-cols-3 gap-4">
                {heatmapData.map((data) => (
                  <div
                    key={data.id}
                    className={`p-4 rounded-lg ${
                      parseFloat(data.profit) > 3
                        ? 'bg-green-600'
                        : parseFloat(data.profit) > 1
                        ? 'bg-yellow-600'
                        : 'bg-red-600'
                    }`}
                  >
                    <h3 className="text-xl font-semibold">{data.pair}</h3>
                    <p className="text-lg">Exchange: {data.exchange}</p>
                    <p className="text-lg">Profit: {data.profit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Trade Volume</h2>
              <Bar
                data={barChartData}
                options={{
                  title: {
                    display: true,
                    text: 'Trade Volume',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Price Movement</h2>
              <Line
                data={lineChartData}
                options={{
                  title: {
                    display: true,
                    text: 'Price Movement',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">AI-Powered Trade Recommendation</h2>
              {bestOpportunity && (
                <div className="p-4 bg-blue-600 rounded-lg">
                  <h3 className="text-xl font-semibold">Best Opportunity Right Now</h3>
                  <p className="text-lg">Pair: {bestOpportunity.pair}</p>
                  <p className="text-lg">Exchange: {bestOpportunity.exchange}</p>
                  <p className="text-lg">Profit: {bestOpportunity.profit}</p>
                </div>
              )}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Trade Simulation</h2>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <h3 className="text-xl font-semibold">Simulate an Arbitrage Trade</h3>
                <p className="text-lg">Select a pair and exchange to simulate the trade.</p>
                {/* Trade simulation form and logic can be implemented here */}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-base md:text-lg">
                To start real-time scanning, please subscribe to one of our pricing plans.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;