import React from 'react';
import { useLocation } from 'react-router-dom';

function SubscriptionConfirmation() {
  const location = useLocation();
  const { paymentDetails } = location.state || {};

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Subscription Confirmation</h1>
      {paymentDetails ? (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Thank you for subscribing!</h2>
          <p className="text-gray-700 mb-2"><strong>Plan:</strong> {paymentDetails.plan}</p>
          <p className="text-gray-700 mb-2"><strong>Amount:</strong> ${paymentDetails.amount}</p>
          <p className="text-gray-700 mb-2"><strong>Payment Method:</strong> {paymentDetails.paymentMethod}</p>
          <div className="text-gray-700">
            <strong>Payment Details:</strong> {JSON.stringify(paymentDetails.details)}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700">No subscription details available.</p>
      )}
    </div>
  );
}

export default SubscriptionConfirmation;