
import React from 'react';
import { AppScreen } from '../types';

interface DashboardProps {
  onNavigate: (screen: AppScreen) => void;
}

const weeklyLogs = [
  { day: 'Mon', status: 'Knee Stiff', date: 'Oct 23', confidence: 'Low' },
  { day: 'Tue', status: 'Gentle Glide', date: 'Oct 24', confidence: 'Rising' },
  { day: 'Wed', status: 'Knee Balanced', date: 'Oct 25', confidence: 'Steady' },
  { day: 'Thu', status: 'Steady Steps', date: 'Oct 26', confidence: 'Steady' },
  { day: 'Fri', status: 'Knee Strength', date: 'Oct 27', confidence: 'Confident' },
];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 pb-24 space-y-8 max-w-md mx-auto">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.25em] mb-1">Your Routine</h2>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Knee-Ease</h1>
        </div>
        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </header>

      {/* Primary Action Card */}
      <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-8">
          <div className="space-y-2">
            <p className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">Next Step</p>
            <h3 className="text-2xl font-bold">Today's Knee Routine</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Focusing on building knee control during stairs and walking.
            </p>
          </div>
          
          <div className="py-6 border-y border-white/10 grid grid-cols-2 gap-4">
            <div className="text-center border-r border-white/10">
              <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Day Streak</p>
              <p className="text-2xl font-black text-indigo-400">12 Days</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Knee Confidence</p>
              <p className="text-2xl font-black text-emerald-400">Rising</p>
            </div>
          </div>

          <button 
            onClick={() => onNavigate(AppScreen.EXERCISES)}
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-xl shadow-indigo-900/40 transition-all active:scale-[0.98] flex items-center justify-center space-x-3"
          >
            <span>Start Knee Session</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Cards */}
      <section className="space-y-4">
        <div className="flex justify-between items-end px-2">
          <h3 className="text-lg font-bold text-slate-800 tracking-tight">Knee History</h3>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Simple Log</p>
        </div>
        
        <div className="space-y-3">
          {weeklyLogs.map((log) => (
            <div key={log.day} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-indigo-100 transition-colors">
              <div className="flex items-center space-x-5">
                <div className="bg-slate-50 w-12 h-12 rounded-2xl flex flex-col items-center justify-center border border-slate-100 group-hover:bg-indigo-50 transition-colors">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter leading-none">{log.day}</span>
                  <span className="text-xs font-bold text-slate-800 leading-none mt-1">{log.date.split(' ')[1]}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{log.status}</p>
                  <p className="text-[10px] text-slate-400 font-bold">Knee routine complete</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-xs font-black uppercase tracking-wider ${
                  log.confidence === 'Rising' ? 'text-indigo-500' : log.confidence === 'Confident' ? 'text-emerald-500' : 'text-slate-400'
                }`}>
                  {log.confidence}
                </p>
                <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">Confidence</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Summary - Using Icons only */}
      <div 
        onClick={() => onNavigate(AppScreen.AI_COACH)}
        className="bg-indigo-50/70 p-7 rounded-[2.5rem] border border-indigo-100 flex items-start space-x-5 cursor-pointer group"
      >
        <div className="bg-white p-4 rounded-2xl shadow-sm text-indigo-600 group-hover:scale-110 transition-transform border border-indigo-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wider">Knee Tip</h4>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
            Stiffness is your knee protecting itself. Gentle movement tells your system it's safe to move.
          </p>
          <span className="text-[10px] font-black text-indigo-600 mt-4 inline-block uppercase tracking-widest bg-white px-3 py-1 rounded-lg shadow-sm">Get Guidance</span>
        </div>
      </div>
    </div>
  );
};
