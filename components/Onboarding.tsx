
import React, { useState } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "The Knee-Lace",
      description: "The knee works like a lace that holds the leg together. Just as a lace keeps parts aligned and balanced, the knee depends on gentle coordination between movement, flexibility, and daily use. When this “knee-lace” becomes tight, uneven, or inactive, discomfort can slowly appear.",
      icon: (
        <svg className="w-32 h-32 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 4c0 0 12 2 12 8s-12 8-12 8M18 4c0 0-12 2-12 8s12 8 12 8" />
          <circle cx="12" cy="12" r="2.5" className="fill-indigo-600/10" strokeWidth={1.5} />
        </svg>
      ),
      accent: "text-indigo-600"
    },
    {
      title: "Why Pain Starts",
      description: "Knee discomfort often develops quietly from repeated habits like sitting too long, moving too little, or moving the same way every day. Over time, the knee-lace can lose its natural rhythm. This does not mean something is broken. It means the knee may need gentle attention.",
      icon: (
        <svg className="w-32 h-32 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6" className="opacity-40" />
        </svg>
      ),
      accent: "text-slate-700"
    },
    {
      title: "The Approach",
      description: "Knee-Ease helps users gently “retie” their knee-lace through simple, safe movements designed for everyday life. The focus is consistency, comfort, and listening to the body. Knee-Ease is not about fixing the body, but about supporting it with care.",
      icon: (
        <svg className="w-32 h-32 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A9 9 0 1121 12c0-.38-.024-.755-.071-1.123" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 009-9" className="opacity-20" />
        </svg>
      ),
      accent: "text-emerald-600"
    }
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-12">
        <div className="p-14 bg-slate-50 rounded-[3.5rem] shadow-inner border border-slate-100/50 transition-all duration-500">
          <div className="transition-transform duration-700 hover:scale-105">
            {steps[step].icon}
          </div>
        </div>
        
        <div className="space-y-6 max-w-sm">
          <h1 className={`text-3xl font-black tracking-tight ${steps[step].accent} transition-colors duration-500`}>
            {steps[step].title}
          </h1>
          <p className="text-slate-600 leading-relaxed text-lg font-medium transition-opacity duration-500">
            {steps[step].description}
          </p>
        </div>

        <div className="flex space-x-3">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-500 rounded-full ${i === step ? 'w-12 bg-indigo-600 shadow-sm shadow-indigo-100' : 'w-4 bg-slate-200'}`} 
            />
          ))}
        </div>
      </div>

      <div className="p-10 bg-slate-50 border-t border-slate-100 flex flex-col items-center">
        <button 
          onClick={nextStep}
          className="w-full py-5 bg-indigo-600 text-white font-black text-lg rounded-[2.5rem] shadow-2xl shadow-indigo-200 active:scale-95 transition-all hover:bg-indigo-700"
        >
          {step === steps.length - 1 ? "Start My Journey" : "Continue"}
        </button>
        <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] opacity-60">Consistency • Comfort • Support</p>
      </div>
    </div>
  );
};
