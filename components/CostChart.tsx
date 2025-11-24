import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface CostChartProps {
  chatbaseCost: number;
  fastbotsCost: number;
}

export const CostChart: React.FC<CostChartProps> = ({ chatbaseCost, fastbotsCost }) => {
  const chartData = [
    { name: 'Chatbase', cost: chatbaseCost, color: '#94a3b8' }, // Slate-400 for competitor
    { name: 'FastBots', cost: fastbotsCost, color: '#10b981' }, // Emerald-500 for hero
  ];

  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
          barSize={24}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
          <XAxis type="number" hide />
          <YAxis 
            type="category" 
            dataKey="name" 
            tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600, fontFamily: 'Inter' }} 
            width={70}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '6px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', fontSize: '12px' }}
            formatter={(value: number) => [`$${value}`, 'Monthly']}
          />
          <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};