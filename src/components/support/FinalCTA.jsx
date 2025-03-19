import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <div id="final-cta" className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
         Ready to Maximize Your Crypto Profits?
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl opacity-90 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.2, delay: 0.3 } }}
      >
        Our AI-powered arbitrage scanner ensures you never miss an opportunity.  
        <span className="font-semibold text-white/90"> Profitable trades won't wait. Why should you?</span>
      </motion.p>

      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
        <motion.button
          onClick={() => navigate("/signup?source=free")}
          className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start for Free
        </motion.button>
        <motion.button
          onClick={() => navigate("/signup?source=pro")}
          className="px-6 py-3 md:px-8 md:py-4 bg-yellow-400 text-black font-bold text-lg rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⚡ Upgrade to Pro
        </motion.button>
      </div>

      <motion.p
        className="mt-6 text-white font-semibold text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.5 } }}
      >
        ✅ Ready to launch for <span className="text-yellow-300">5,000+</span> smart traders
      </motion.p>
    </div>
  );
};

export default FinalCTA;
