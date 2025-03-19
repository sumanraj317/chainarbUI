import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqsData = [
  {
    question: " How does the scanner find arbitrage opportunities?",
    answer: "It continuously scans real-time prices across multiple exchanges, instantly detecting profitable gaps.",
  },
  {
    question: " Do I need coding skills to use this tool?",
    answer: "No! It's a simple, user-friendly web dashboard with real-time alerts. No coding required.",
  },
  {
    question: " Can I use the scanner on my phone?",
    answer: "Yes! The web app is fully mobile-optimized, and Telegram alerts ensure you never miss a trade.",
  },
  {
    question: " Is arbitrage risk-free?",
    answer: "No trade is 100% risk-free, but our AI-powered scanner minimizes execution risks.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [typingText, setTypingText] = useState("");

  const toggleFAQ = (index, answer) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setTypingText(""); 
    } else {
      setOpenIndex(index);
      setTypingText(""); 
      let i = 0;
      const interval = setInterval(() => {
        setTypingText(answer.slice(0, i));
        i++;
        if (i > answer.length) clearInterval(interval);
      }, 20);
    }
  };

  return (
    <div id="faqs" className="py-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        🤖 AI-Powered FAQs
      </motion.h2>

      <div className="space-y-6">
        {faqsData.map((faq, index) => (
          <motion.div
            key={index}
            className="relative bg-black/30 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
            onClick={() => toggleFAQ(index, faq.answer)}
          >
            
            <div className="flex justify-between items-center px-6 py-5">
              <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>

            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="px-6 pb-5 text-gray-300 text-lg"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto", transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                >
                  {typingText}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
