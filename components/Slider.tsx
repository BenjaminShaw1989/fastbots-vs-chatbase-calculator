import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (val: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ min, max, step, value, onChange }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  // Key pricing breakpoints
  const markers = [
    { label: '2k', pos: (2000 / max) * 100, labelPos: 'left' },
    { label: '5k', pos: (5000 / max) * 100, labelPos: 'right' },
  ];

  return (
    <div className="relative pt-6 pb-2 select-none">
      {/* Custom Track */}
      <div className="relative w-full h-2 bg-slate-100 rounded-full">

        {/* Ticks */}
        {markers.map((marker, idx) => (
          <div
            key={idx}
            className="absolute top-0 h-2 w-px bg-slate-300 z-0"
            style={{ left: `${marker.pos}%` }}
          >
            <div className={`absolute -top-6 -translate-x-1/2 text-[10px] font-semibold text-slate-400 font-mono`}>
              {marker.label}
            </div>
          </div>
        ))}

        {/* Active Track */}
        <div
          className="absolute h-full bg-slate-900 rounded-full transition-all duration-75"
          style={{ width: `${percentage}%` }}
        />

        {/* Native Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
        />

        {/* Thumb */}
        <div
          className="absolute top-1/2 -mt-3 h-6 w-6 bg-white border-2 border-slate-900 shadow-md rounded-full pointer-events-none z-10 transition-all duration-75 flex items-center justify-center"
          style={{ left: `${percentage}%`, transform: 'translateX(-50%) translateY(-50%)' }}
        >
          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};