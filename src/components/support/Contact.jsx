import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-12">
        Contact Us
      </h1>
      
      <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12">
        Have a question? Need support? Reach out and we'll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-white mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Information</h2>
          <p className="text-gray-300 text-lg mb-4">
            <span className="font-semibold text-blue-400">Email:</span> support@chainarb.com
          </p>
          <p className="text-gray-300 text-lg mb-4">
            <span className="font-semibold text-blue-400">Phone:</span> +1 (123) 456-7890
          </p>
          <p className="text-gray-300 text-lg mb-4">
            <span className="font-semibold text-blue-400">Address:</span> 123 Blockchain Avenue, Crypto City, CC 12345
          </p>

          <h2 className="text-3xl font-semibold text-white mt-8 mb-6">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
