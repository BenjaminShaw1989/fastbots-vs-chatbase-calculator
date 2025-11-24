import React from 'react';

interface SavingsDisplayProps {
  annualSavings: number;
  isFastBotsCheaper: boolean;
}

export const SavingsDisplay: React.FC<SavingsDisplayProps> = ({ annualSavings, isFastBotsCheaper }) => {
  if (!isFastBotsCheaper) {
    return (
      <div className="bg-gray-100 rounded-xl p-4 text-center text-gray-600 font-medium">
        Prices are currently comparable for this usage level.
      </div>
    );
  }

  return (
    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center transform transition-all hover:scale-[1.01]">
      <p className="text-emerald-800 font-medium uppercase tracking-wide text-xs mb-1">
        Annual Savings Opportunity
      </p>
      <div className="text-4xl md:text-5xl font-extrabold text-emerald-600">
        ${annualSavings.toLocaleString()}
        <span className="text-lg md:text-xl text-emerald-600/70 font-semibold ml-2">/ year</span>
      </div>
      <p className="text-emerald-700/80 mt-2 text-sm">
        Switching to FastBots pays for itself immediately.
      </p>
    </div>
  );
};