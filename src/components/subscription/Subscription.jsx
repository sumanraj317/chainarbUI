import React, { useState, useEffect } from 'react';

function Subscription() {
  const [plan, setPlan] = useState('standard');
  const [amount, setAmount] = useState('49');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '',
    payPalEmail: '',
    visaCardNumber: '',
    visaCardExpiry: '',
    visaCardCvv: '',
  });

  useEffect(() => {
    const currentSubscription = {
      plan: 'premium',
      amount: '99',
      paymentMethod: 'visa',
      paymentDetails: {
        upiId: '',
        payPalEmail: '',
        visaCardNumber: '4111111111111111',
        visaCardExpiry: '12/25',
        visaCardCvv: '123',
      },
    };
    setPlan(currentSubscription.plan);
    setAmount(currentSubscription.amount);
    setPaymentMethod(currentSubscription.paymentMethod);
    setPaymentDetails(currentSubscription.paymentDetails);
  }, []);

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);
    setAmount(selectedPlan === 'premium' ? '99' : '49');
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDetails = {
      plan,
      amount,
      paymentMethod,
      paymentDetails,
    };
    console.log('Updating subscription with:', updatedDetails);
  };

  const renderPaymentDetailsInput = () => {
    switch (paymentMethod) {
      case 'upi':
        return (
          <div>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              name="upiId"
              placeholder="Enter UPI ID"
              value={paymentDetails.upiId}
              onChange={handlePaymentDetailsChange}
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
              name="payPalEmail"
              placeholder="Enter PayPal Email"
              value={paymentDetails.payPalEmail}
              onChange={handlePaymentDetailsChange}
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
              name="visaCardNumber"
              placeholder="Card Number"
              value={paymentDetails.visaCardNumber}
              onChange={handlePaymentDetailsChange}
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              name="visaCardExpiry"
              placeholder="Expiry Date (MM/YY)"
              value={paymentDetails.visaCardExpiry}
              onChange={handlePaymentDetailsChange}
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              name="visaCardCvv"
              placeholder="CVV"
              value={paymentDetails.visaCardCvv}
              onChange={handlePaymentDetailsChange}
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
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Subscription Details</h1>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plan">
            Plan
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            id="plan"
            value={plan}
            onChange={handlePlanChange}
            required
          >
            <option value="standard">Standard - $49/month</option>
            <option value="premium">Premium - $99/month</option>
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
          Update Subscription
        </button>
      </form>
    </div>
  );
}

export default Subscription;