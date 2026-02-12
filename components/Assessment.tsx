
import React, { useState } from 'react';

interface AssessmentProps {
  onComplete: () => void;
}

export const Assessment: React.FC<AssessmentProps> = ({ onComplete }) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState<boolean | null>(null);
  const [q3, setQ3] = useState<boolean | null>(null);
  const [q4, setQ4] = useState<boolean | null>(null);

  const isFormValid = q1 && q2 !== null && q3 !== null && q4 !== null;

  return (
    <div className="p-6 pb-24 space-y-10 min-h-full flex flex-col max-w-md mx-auto">
      <header className="space-y-2">
        <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Check-in</h2>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Knee Check</h1>
        <p className="text-slate-500 text-sm leading-relaxed">How does your knee feel during daily life?</p>
      </header>

      <div className="space-y-8">
        {/* Q1: When uncomfortable? */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">1. When does your knee feel uncomfortable?</h3>
          <div className="grid grid-cols-2 gap-3">
            {['Morning', 'Afternoon', 'Evening', 'All day'].map((time) => (
              <button
                key={time}
                onClick={() => setQ1(time)}
                className={`py-4 px-3 rounded-2xl text-xs font-bold transition-all border-2 ${
                  q1 === time ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </section>

        {/* Q2: Stiffness */}
        <section className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-sm font-bold text-slate-800">Does your knee feel stiff?</h3>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setQ2(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q2 === true ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              Yes
            </button>
            <button 
              onClick={() => setQ2(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q2 === false ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              No
            </button>
          </div>
        </section>

        {/* Q3: Stairs/Walking */}
        <section className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <h3 className="text-sm font-bold text-slate-800">Does your knee feel weak on stairs?</h3>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setQ3(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q3 === true ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              Yes
            </button>
            <button 
              onClick={() => setQ3(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q3 === false ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              No
            </button>
          </div>
        </section>

        {/* Q4: Bending hesitation */}
        <section className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <h3 className="text-sm font-bold text-slate-800">Do you hesitate to bend your knee?</h3>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setQ4(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q4 === true ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              Yes
            </button>
            <button 
              onClick={() => setQ4(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q4 === false ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}
            >
              No
            </button>
          </div>
        </section>
      </div>

      <div className="flex-1" />

      <button 
        onClick={onComplete}
        disabled={!isFormValid}
        className={`w-full py-5 font-bold rounded-[2rem] shadow-xl transition-all ${
          isFormValid 
            ? 'bg-indigo-600 text-white shadow-indigo-200 active:scale-95' 
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        }`}
      >
        Save Knee Check
      </button>
    </div>
  );
};
