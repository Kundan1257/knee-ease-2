
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });


interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AICoach: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to Knee Guidance. I'm here to help you understand your knee-lace and how gentle movement can restore your knee stability. How does your knee feel right now?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are the Knee-Ease Guide. Your purpose is to educate users on knee health using the 'Knee-Lace' metaphor. Your language MUST strictly focus on the 'knee'. Avoid mentioning other body parts unless absolutely necessary for knee context. Explain why knee discomfort happens (weak/tight/uneven laces), why gentle knee movement builds knee confidence, and why consistency in knee routine matters. Always be supportive, calm, and non-medical. Never give a clinical diagnosis. Use beginner-friendly terms. If the user mentions sharp knee pain, advise them to rest and consult a knee specialist. Focus on knee flexibility, knee stability, and knee control.",
          temperature: 0.7,
        }
      });

      const assistantContent = response.text || "I'm sorry, I couldn't process your knee query. Let's focus on retrying that lace metaphor.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "My knee knowledge threads got a bit tangled. Let's try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="p-7 bg-white border-b border-slate-100 flex items-center space-x-4 shadow-sm relative z-10">
        <div className="w-12 h-12 bg-indigo-600 rounded-[1.2rem] flex items-center justify-center text-white font-black shadow-lg shadow-indigo-100">K</div>
        <div>
          <h1 className="text-lg font-black text-slate-900 leading-tight">Knee Guidance</h1>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Knee Expert</span>
          </div>
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[88%] p-5 rounded-[2rem] text-sm font-medium leading-relaxed ${
              m.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none shadow-xl shadow-indigo-100' 
                : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-5 rounded-[2rem] rounded-tl-none border border-slate-100 flex space-x-1.5 shadow-sm">
              <div className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100 pb-28">
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about your knee health..."
            className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-6 pr-16 text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300 shadow-inner"
          />
          <button 
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="absolute right-3 p-3 bg-indigo-600 text-white rounded-xl active:scale-95 transition-transform disabled:opacity-50 shadow-lg shadow-indigo-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-4 font-bold uppercase tracking-widest italic opacity-60">Educational Support • Non-Medical</p>
      </div>
    </div>
  );
};
