import React, { useState, useMemo } from 'react';
import { Slider } from './Slider';
import { PricingCard } from './PricingCard';
import { SavingsDisplay } from './SavingsDisplay';
import { calculateChatbaseCost, calculateFastBotsCost } from '../utils/pricing';

export const Calculator: React.FC = () => {
  const [messages, setMessages] = useState<number>(3500);
  const [removeBranding, setRemoveBranding] = useState<boolean>(false);

  const chatbase = useMemo(() =>
    calculateChatbaseCost({ messages, removeBranding }),
    [messages, removeBranding]);

  const fastbots = useMemo(() =>
    calculateFastBotsCost({ messages, removeBranding }),
    [messages, removeBranding]);

  const monthlySavings = chatbase.monthly - fastbots.monthly;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="space-y-8">

      {/* Controls Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Monthly Messages: <span className="text-emerald-600 font-mono text-lg ml-2">{messages.toLocaleString()}</span>
            </label>
            <Slider
              min={0}
              max={5000}
              step={100}
              value={messages}
              onChange={setMessages}
            />
          </div>
          <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
            <input
              type="checkbox"
              id="branding"
              checked={removeBranding}
              onChange={(e) => setRemoveBranding(e.target.checked)}
              className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <div>
              <label htmlFor="branding" className="font-medium text-gray-900 cursor-pointer">
                Remove "Powered By" Branding
              </label>
              <p className="text-xs text-gray-500">Adds an extra fee on both platforms.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Banner */}
      <SavingsDisplay
        annualSavings={annualSavings}
        isFastBotsCheaper={monthlySavings > 0}
      />

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PricingCard
          provider="Chatbase"
          cost={chatbase.monthly}
          plan={chatbase.planName}
          brandingCost={removeBranding ? 39 : 0}
          isHero={false}
          features={[
            `${chatbase.planName} Plan Limits`,
            removeBranding ? 'White Label (+$39)' : 'Branded',
            'Standard Support'
          ]}
        />

        <PricingCard
          provider="FastBots.ai"
          cost={fastbots.monthly}
          plan={fastbots.planName}
          brandingCost={removeBranding ? 29 : 0}
          isHero={true}
          savings={monthlySavings > 0 ? monthlySavings : 0}
          features={[
            `${fastbots.planName} Plan Limits`,
            removeBranding ? 'White Label (+$29)' : 'Branded',
            'Priority Support'
          ]}
        />
      </div>
    </div>
  );
};