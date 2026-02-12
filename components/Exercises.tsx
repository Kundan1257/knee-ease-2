
import React from 'react';
import { Exercise } from '../types';

const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Knee Unfurl',
    duration: '3 mins',
    intensity: 'Low',
    description: 'While sitting, slowly straighten your knee until it feels long. This improves knee flexibility and wakes up the front knee support.',
    icon: '🪑'
  },
  {
    id: '2',
    name: 'Knee Glide',
    duration: '4 mins',
    intensity: 'Low',
    description: 'Slowly slide your knee into a bend and back out. This builds knee movement control and confidence in knee bending.',
    icon: '👟'
  },
  {
    id: '3',
    name: 'Knee Anchor',
    duration: '3 mins',
    intensity: 'Low',
    description: 'Gently press your knee downward while sitting to engage knee stability and strengthen the muscles supporting the knee.',
    icon: '☁️'
  }
];

export const Exercises: React.FC = () => {
  return (
    <div className="p-6 pb-24 space-y-8 max-w-md mx-auto">
      <header className="space-y-2">
        <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Knee Routine</h2>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Retie & Stabilize</h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          Short, gentle routines focused purely on your knee health and walking stability.
        </p>
      </header>

      <div className="space-y-5">
        {exercises.map((ex) => (
          <div key={ex.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all active:scale-[0.98]">
            <div className="flex items-start space-x-5">
              <div className="text-4xl p-5 bg-slate-50 rounded-[2rem] flex-shrink-0 border border-slate-50 group-hover:bg-indigo-50 transition-colors">
                {ex.icon}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-lg">{ex.name}</h3>
                  <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-widest">
                    Safe
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">{ex.duration} • Knee Focus</p>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {ex.description}
                </p>
              </div>
            </div>
            <button className="mt-6 w-full py-4 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              Begin Knee Exercise
            </button>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 space-y-4">
          <div className="bg-indigo-500/30 w-12 h-12 rounded-2xl flex items-center justify-center mb-2 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Knee Stability Rule</h3>
          <p className="text-indigo-200 text-sm leading-relaxed font-medium">
            If your knee feels sharp tension, the lace is pulled too far. Retie with smaller, slower movements to regain knee confidence.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -mr-12 -mt-12" />
      </div>
    </div>
  );
};
