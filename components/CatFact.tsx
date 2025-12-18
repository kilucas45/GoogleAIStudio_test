
import React, { useState, useEffect } from 'react';
import { getCatFact } from '../services/gemini';

const CatFact: React.FC = () => {
  const [fact, setFact] = useState('고양이는 정말 귀엽답니다!');
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    const newFact = await getCatFact();
    setFact(newFact);
    setLoading(false);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-block mb-6">
        <div className="flex items-center space-x-4 text-slate-300">
          <div className="h-[1px] w-12 bg-current"></div>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scientific Footnote</span>
          <div className="h-[1px] w-12 bg-current"></div>
        </div>
      </div>
      
      <div className={`transition-all duration-500 transform ${loading ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}`}>
        <p className="text-slate-800 text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
          "{fact}"
        </p>
      </div>
      
      <button 
        onClick={fetchFact}
        disabled={loading}
        className="group relative inline-flex items-center space-x-3 text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-slate-900 transition-colors"
      >
        <span>{loading ? 'Consulting database...' : 'Fetch Random Insight'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 group-hover:translate-x-1 transition-transform ${loading ? 'animate-spin' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
};

export default CatFact;
