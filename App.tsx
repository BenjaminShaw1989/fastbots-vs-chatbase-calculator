import React from 'react';
import { Calculator } from './components/Calculator';
import { FAQ } from './components/FAQ'; // <--- 这里引入了新零件

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
        
        {/* 计算器组件 */}
        <Calculator />
        
        {/* 新增的 FAQ 组件放在这里 */}
        <FAQ />
        
        <div className="text-center text-sm text-gray-400 mt-8 pb-8">
          *Pricing data based on publicly available information as of Jan 2025.
          {/* Dang.ai 徽章 (用于交换外链) */}
        <div className="mt-6 flex justify-center pb-8">
          <a href="https://dang.ai/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" 
              alt="Dang.ai" 
              style={{ width: '150px', height: '54px' }} 
              width="150" 
              height="54" 
            />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}