import React from 'react';

export const FAQ: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-16 px-4 pb-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Chatbase Pricing & Plans Review (2025)
      </h2>
      <div className="space-y-6">
        
        {/* 针对 'chatbase pricing plans' */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            What are the current Chatbase pricing plans?
          </h3>
          <p className="text-gray-600">
            The <strong>Chatbase pricing</strong> structure creates a significant gap. The Hobby plan starts at $40/mo (2,000 messages), but the next tier jumps immediately to the Standard plan at $150/mo. This calculator helps you verify if you are overpaying for unused credits.
          </p>
        </div>

        {/* 针对 'chatbase.co review' */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Is Chatbase.co worth the cost? A Quick Review
          </h3>
          <p className="text-gray-600">
            While <strong>Chatbase.co</strong> offers a solid interface, many users find the "Remove Branding" fee ($39/mo) excessive. In comparison, FastBots offers similar GPT-4 capabilities and white-labeling for a total cost that is often 50% lower.
          </p>
        </div>

        {/* 针对 'chatbase ai pricing' */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Chatbase AI Pricing vs Alternatives
          </h3>
          <p className="text-gray-600">
            When comparing <strong>Chatbase AI pricing</strong> to competitors like FastBots, the main difference is the volume of messages included. For a $69 budget, FastBots allows 5,000 messages, whereas Chatbase would force an upgrade to the $150 tier.
          </p>
        </div>

      </div>
    </div>
  );
};