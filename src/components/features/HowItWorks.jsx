import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

function HowItWorks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto text-center px-6 md:px-12 lg:px-16">
        
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        >
          How Our Arbitrage Scanner Works
        </motion.h2>

        {/* Vertical Steps Container */}
        <motion.div
          className="flex flex-col space-y-14 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Step 1: Market Scanning */}
          <motion.div
            className="relative p-8 rounded-xl bg-gray-800 border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-4">
              <span className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">1</span>
              Real-Time Market Scanning
            </h3>
            <p className="text-gray-300 mt-3">
              Our AI continuously scans **over 100+ CEX & DEX platforms**, tracking **price feeds, liquidity, and trading volume** in real-time.
              It detects inefficiencies and ensures you're ahead of market fluctuations.
            </p>
          </motion.div>

          {/* Step 2: Arbitrage Opportunity Detection */}
          <motion.div
            className="relative p-8 rounded-xl bg-gray-800 border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-4">
              <span className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2</span>
              Intelligent Arbitrage Detection
            </h3>
            <p className="text-gray-300 mt-3">
              Our algorithm calculates **profitable arbitrage trades** by factoring in **fees, slippage, transaction time**, and 
              **market depth**. We rank opportunities based on risk-adjusted ROI.
            </p>
          </motion.div>

          {/* Step 3: Trade Execution */}
          <motion.div
            className="relative p-8 rounded-xl bg-gray-800 border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-4">
              <span className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">3</span>
              Instant Trade Execution & Alerts
            </h3>
            <p className="text-gray-300 mt-3">
              Receive **instant trade alerts** via **email, Telegram, or Webhooks**, allowing **manual or automated execution**. 
              Our **API integration** enables **one-click execution** with pre-configured trading strategies.
            </p>
          </motion.div>

          {/* Step 4: Profit Automation & Security */}
          <motion.div
            className="relative p-8 rounded-xl bg-gray-800 border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-4">
              <span className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">4</span>
              Secure & Automated Profit Management
            </h3>
            <p className="text-gray-300 mt-3">
              Utilize **secure API automation** to **execute trades and withdraw profits instantly**. Advanced risk management ensures
              **safe capital allocation** with **real-time monitoring**.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Link
            to="/signup"
            className="relative inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 hover:bg-blue-700 hover:scale-105"
          >
            Get Started
            <span className="absolute inset-0 rounded-full blur-lg opacity-40 bg-blue-500"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
