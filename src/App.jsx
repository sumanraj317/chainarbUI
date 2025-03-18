import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './components/features/About';
import Features from './components/features/Features';
import Contact from './components/support/Contact';
import Dashboard from './pages/Dashboard';
import LiveScans from './components/dashboard/LiveScans';
import Subscription from './components/subscription/Subscription';
import SubscriptionConfirmation from './components/subscription/SubscriptionConfirmation';
import Profile from './components/auth/Profile';
import Support from './components/support/Support';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Subscribe from './components/subscription/Subscribe';
import Checkout from './components/subscription/Checkout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import TradeDetails from './pages/TradeDetails';
import Analytics from './components/features/Analytics';
import Settings from './components/auth/Settings';
import AIChatbot from "./components/ai/AIChatbot";



function App() {
  return (
    <AuthProvider>
      
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/live-scans" element={<ProtectedRoute><LiveScans /></ProtectedRoute>} />
            <Route path="/dashboard/subscription" element={<Subscription />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/subscription-confirmation" element={<SubscriptionConfirmation />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/trade-details/:tradeId" element={<TradeDetails />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>

          <AIChatbot />

        </Layout>
    </AuthProvider>
  );
}

export default App;