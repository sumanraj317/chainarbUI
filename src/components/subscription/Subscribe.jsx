import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Subscribe() {
  const query = useQuery();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(query.get('plan') || 'standard');
  const [amount, setAmount] = useState(query.get('amount') || '49');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [payPalEmail, setPayPalEmail] = useState('');
  const [visaCardNumber, setVisaCardNumber] = useState('');
  const [visaCardExpiry, setVisaCardExpiry] = useState('');
  const [visaCardCvv, setVisaCardCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const paymentDetails = {
      plan,
      amount,
      paymentMethod,
      details: paymentMethod === 'upi' ? upiId : paymentMethod === 'paypal' ? payPalEmail : { visaCardNumber, visaCardExpiry, visaCardCvv },
    };
    console.log('Subscribing with:', paymentDetails);
   
    navigate('/subscription-confirmation', { state: { paymentDetails } });
  };

  const renderPaymentDetailsInput = () => {
    switch (paymentMethod) {
      case 'upi':
        return (
          <div>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </div>
        );
      case 'paypal':
        return (
          <div>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="email"
              placeholder="Enter PayPal Email"
              value={payPalEmail}
              onChange={(e) => setPayPalEmail(e.target.value)}
              required
            />
          </div>
        );
      case 'visa':
        return (
          <div>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              placeholder="Card Number"
              value={visaCardNumber}
              onChange={(e) => setVisaCardNumber(e.target.value)}
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={visaCardExpiry}
              onChange={(e) => setVisaCardExpiry(e.target.value)}
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              placeholder="CVV"
              value={visaCardCvv}
              onChange={(e) => setVisaCardCvv(e.target.value)}
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Subscribe</h1>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plan">
            Plan
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            id="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            required
          >
            <option value="explorer">Explorer Plan (Free)</option>
            <option value="smart">Smart Plan (Basic) - $79/month</option>
            <option value="elite">Elite Plan (Pro) - $149/month</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="amount"
            value={`$${amount}`}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentMethod">
            Payment Method
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="upi">UPI</option>
            <option value="paypal">PayPal</option>
            <option value="visa">Visa Card</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentDetails">
            Payment Details
          </label>
          {renderPaymentDetailsInput()}
        </div>
        <button className="w-full px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Subscribe Now
        </button>
      </form>
    </div>
  );
}

export default Subscribe;;