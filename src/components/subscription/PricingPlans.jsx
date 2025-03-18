import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const PricingPlans = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
  };

  const handleSubscribeNow = (plan, monthlyPrice, annualPrice) => {
    const amount = billingCycle === 'monthly' ? monthlyPrice : annualPrice;
    const frequency = billingCycle;
    if (isAuthenticated) {
      navigate(`/subscribe?plan=${plan}&amount=${amount}&frequency=${frequency}`);
    } else {
      navigate(`/signup?redirectTo=subscribe&plan=${plan}&amount=${amount}&frequency=${frequency}`);
    }
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      {/* Header */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-10 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        🚀 CEX/DEX Arbitrage Scanner
      </motion.h2>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div
          className="flex bg-gray-800 p-1 rounded-full cursor-pointer transition-all duration-300"
          onClick={toggleBillingCycle}
        >
          <span
            className={`px-6 py-2 text-white font-semibold rounded-full transition-all duration-300 ${
              billingCycle === 'monthly' ? 'bg-blue-600' : ''
            }`}
          >
            Monthly
          </span>
          <span
            className={`px-6 py-2 text-white font-semibold rounded-full transition-all duration-300 ${
              billingCycle === 'annual' ? 'bg-green-600' : ''
            }`}
          >
            Annually (Save 20%)
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Explorer Plan (Free)',
            priceMonthly: 0,
            priceAnnual: 0,
            features: [
              '🔹 Basic arbitrage scanning (limited)',
              '🔹 Up to 3 scans per day',
              '🔹 1 exchange pair supported (e.g., Binance)',
              '🔹 5-second delay between scans',
              '🔹 No API access',
              '🔹 No real-time notifications',
            ],
            buttonLabel: 'Start Free Trial',
            buttonColor: 'bg-blue-600 hover:bg-blue-700',
            planKey: 'free',
          },
          {
            title: 'Smart Plan (Basic)',
            priceMonthly: 79,
            priceAnnual: 59,
            features: [
              '✅ Unlimited scanning',
              '✅ Supports 3 exchange pairs (Binance, Coinbase, Kraken)',
              '✅ 2-second delay between scans (faster updates)',
              '✅ Real-time web dashboard',
              '✅ Email alerts for arbitrage opportunities',
              '✅ API access (limited to 50 requests/day)',
            ],
            buttonLabel: 'Subscribe Now',
            buttonColor: 'bg-green-600 hover:bg-green-700',
            planKey: 'smart',
          },
          {
            title: 'Elite Plan (Pro)',
            priceMonthly: 149,
            priceAnnual: 99,
            features: [
              '🔥 All features in Smart Plan',
              '🔥 Supports 7+ exchanges (Binance, Coinbase, Kraken, Bybit, KuCoin, etc.)',
              '🔥 1-second delay between scans (near real-time)',
              '🔥 Telegram & Discord bot notifications',
              '🔥 Unlimited API requests for automated trading',
              '🔥 Historical arbitrage data analysis',
              '🔥 Priority customer support',
            ],
            buttonLabel: 'Subscribe Now',
            buttonColor: 'bg-red-600 hover:bg-red-700',
            planKey: 'elite',
          },
        ].map((plan, index) => (
          <motion.div
            key={index}
            className="relative p-8 rounded-2xl bg-black/30 backdrop-blur-xl shadow-xl border border-white/20 transition-transform duration-300 hover:scale-105 hover:border-cyan-400"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">{plan.title}</h3>
            <div className="flex justify-center items-baseline mb-4">
              <p className="text-4xl font-bold text-white">
                ${billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
              </p>
              <span className="text-gray-400 ml-2">/ {billingCycle}</span>
            </div>
            <ul className="text-left text-gray-300 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                handleSubscribeNow(plan.planKey, plan.priceMonthly, plan.priceAnnual)
              }
              className={`w-full px-6 py-3 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105 ${plan.buttonColor}`}
            >
              {plan.buttonLabel}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
