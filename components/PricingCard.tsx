import React from 'react';

interface PricingCardProps {
  provider: string;
  cost: number;
  plan: string;
  brandingCost: number;
  isHero: boolean;
  savings?: number;
  features: string[];
}

export const PricingCard: React.FC<PricingCardProps> = ({ 
  provider, 
  cost, 
  plan, 
  brandingCost, 
  isHero, 
  features 
}) => {
  return (
    <div className={`
      relative p-8 rounded-2xl flex flex-col h-full
      ${isHero 
        ? 'bg-white border-2 border-emerald-500 shadow-xl z-10' 
        : 'bg-white border border-gray-200 shadow-sm opacity-90'}
    `}>
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">{provider}</h3>
        <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${isHero ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'}`}>
          {plan} Plan
        </span>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-5xl font-extrabold tracking-tight text-gray-900">${cost}</span>
          <span className="text-gray-500 font-medium ml-1">/mo</span>
        </div>
        {brandingCost > 0 && (
           <p className="text-xs text-gray-400 mt-2 font-medium">
             Includes ${brandingCost} branding fee
           </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg className={`h-5 w-5 mr-3 flex-shrink-0 ${isHero ? 'text-emerald-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600 font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div>
        {isHero ? (
          <a href="#" className="w-full block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-lg text-center transition-colors shadow-lg shadow-emerald-200">
            Switch & Save
          </a>
        ) : (
          <a href="#" className="w-full block bg-gray-50 hover:bg-gray-100 text-gray-400 font-semibold py-3.5 px-6 rounded-lg text-center transition-colors border border-gray-200">
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};