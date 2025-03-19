import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I assist you in the world of blockchain today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: inputMessage }]);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: `Interesting question about "${inputMessage}". Let's explore blockchain together!`
      }]);
    }, 1000);

    setInputMessage('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full p-4 shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <FaRobot className="text-2xl" />
        </button>
      ) : (
        <div className="bg-gray-900 border border-blue-500 rounded-lg shadow-2xl w-80 transition-all duration-300">
         
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center border-b border-cyan-500">
            <div className="flex items-center space-x-2">
              <FaRobot className="text-xl" />
              <h3 className="font-semibold">Blockchain AI</h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-blue-700 p-1 rounded"
              >
                {isMinimized ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <button
                onClick={toggleChat}
                className="hover:bg-blue-700 p-1 rounded"
              >
                <FaTimes />
              </button>
            </div>
          </div>

        
          {!isMinimized && (
            <>
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-800 border-b border-cyan-500">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg shadow-md ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t border-cyan-500">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your blockchain query..."
                    className="flex-1 p-2 border border-blue-500 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-2 rounded-lg hover:opacity-80 transition-all"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
