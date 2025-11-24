import React from 'react';
import { Calculator } from './components/Calculator';

export default function App() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            FastBots vs Chatbase
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            See how much you can save by switching to the fair-price alternative.
          </p>
        </div>
        
        <Calculator />
        
        <div className="text-center text-sm text-gray-400 mt-8">
          *Pricing data based on publicly available information as of Jan 2025.
        </div>
      </div>
    </div>
  );
}