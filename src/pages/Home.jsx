import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headerVideo from '../assets/header-video.mp4';
import HowItWorks from '../components/features/HowItWorks';
import LiveArbitrageDashboard from '../components/dashboard/LiveArbitrageDashboard';
import PricingPlans from '../components/subscription/PricingPlans';
import FAQs from '../components/support/FAQs';
import FinalCTA from '../components/support/FinalCTA';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSeeLiveScans = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-30">
          <source src={headerVideo} type="video/webm" />
        </video>
        <div className="z-10 p-6 backdrop-blur-md bg-opacity-10 bg-gray-800 rounded-xl shadow-lg border border-gray-600">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-blue-400 drop-shadow-lg">
            Scan. Trade. Profit.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            Leverage AI-driven trading to detect profitable opportunities across DEXs & CEXs in real-time.
          </p>
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            {!isAuthenticated ? (
              <Link to="/signup" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                Start Your Free Trial
              </Link>
            ) : (
              <button onClick={handleSeeLiveScans} className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                See Live Scans
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="py-12 bg-gray-900">
        <div className="container mx-auto text-center">
          <Slider {...settings}>
            {/* Add slider images here */}
          </Slider>
        </div>
      </div>

      <HowItWorks />
      <LiveArbitrageDashboard />
      <PricingPlans />
      <FAQs />
      <FinalCTA />
    </div>
  );
}

export default Home;
