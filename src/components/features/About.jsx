import React from 'react';

function About() {
  return (
    <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20 max-w-6xl text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-12">
        About ChainArb
      </h1>

      {/* Introduction */}
      <section className="mb-16 bg-black p-6 md:p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-800">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Introduction</h2>
        <p className="text-gray-400 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-500">ChainArb</span>, the leading platform for cryptocurrency arbitrage. Our advanced AI-powered scanner helps traders identify and capitalize on price discrepancies across various CEX and DEX platforms, ensuring maximum profitability and efficiency. We are committed to empowering traders with the tools and insights they need to succeed in the fast-paced world of cryptocurrency trading.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-16 bg-black p-6 md:p-8 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Mission</h2>
        <p className="text-gray-400 leading-relaxed">
          Our mission is to democratize access to cryptocurrency arbitrage opportunities by providing cutting-edge technology and real-time insights. By leveraging <span className="font-semibold text-blue-500">artificial intelligence</span> and <span className="font-semibold text-purple-500">machine learning</span>, we strive to deliver unparalleled accuracy and speed in identifying arbitrage opportunities.
        </p>
      </section>

      {/* Our Vision */}
      <section className="mb-16 bg-black p-6 md:p-8 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Vision</h2>
        <p className="text-gray-400 leading-relaxed">
          Our vision is to become the global leader in cryptocurrency arbitrage, setting new standards for innovation, reliability, and user experience. We envision a future where traders can seamlessly navigate the crypto market, armed with the knowledge and tools to maximize their returns.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-16 bg-black p-6 md:p-8 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Team</h2>
        <p className="text-gray-400 leading-relaxed">
          At ChainArb, our team is our greatest asset. Comprised of experts in blockchain technology, artificial intelligence, and financial markets, our diverse team brings a wealth of knowledge and experience to the table. We are passionate about driving innovation and dedicated to providing the best possible service to our users.
        </p>
      </section>

      {/* Our Technology */}
      <section className="mb-16 bg-black p-6 md:p-8 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Technology</h2>
        <p className="text-gray-400 leading-relaxed">
          ChainArb leverages state-of-the-art technology to deliver real-time arbitrage opportunities. Our platform uses sophisticated algorithms and AI models to scan multiple exchanges, identify price discrepancies, and calculate potential profits—ensuring traders always have access to the most accurate data.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-16 bg-gray-950 p-6 md:p-8 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-gray-800">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Contact Us</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Have any questions? Need support? We're here to help! Get in touch with us via email, phone, or visit our office.
        </p>
        <p className="text-gray-300">
          <span className="font-semibold text-blue-500">Email:</span> support@chainarb.com
        </p>
        <p className="text-gray-300">
          <span className="font-semibold text-blue-500">Phone:</span> +1 (123) 456-7890
        </p>
        <p className="text-gray-300">
          <span className="font-semibold text-blue-500">Address:</span> 123 Blockchain Avenue, Crypto City, CC 12345
        </p>
      </section>
    </div>
  );
}

export default About;
