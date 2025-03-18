import React from 'react';
import AIChatbot from '../ai/AIChatbot';

function Support() {
  const faqs = [
    { question: 'How do I reset my password?', answer: 'Click on the "Forgot Password" link on the login page and follow the instructions.' },
    { question: 'How do I update my profile information?', answer: 'Go to the Profile Settings page and update your information.' },
    { question: 'How do I manage my subscription?', answer: 'Go to the Subscription Details page to manage your subscription.' },
    { question: 'How do I contact support?', answer: 'You can use the chat feature below to contact support.' },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Support</h1>
      <div className="max-w-lg mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Frequently Asked Questions (FAQ)</h2>
        <ul className="list-disc list-inside">
          {faqs.map((faq, index) => (
            <li key={index} className="mb-4">
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      <AIChatbot />
    </div>
  );
}

export default Support;