
import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-white cursor-default select-none"
    >
      {/* Interactive Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.03] transition-transform duration-700 ease-out"
          style={{ 
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.1)`,
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />

        {/* Floating Data Nodes (Academic Particles) */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-slate-200 opacity-20 transition-transform duration-1000 ease-out"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePos.x * (i + 1) * -5}px, ${mousePos.y * (i + 1) * -5}px)`,
            }}
          />
        ))}

        {/* Large Typography Background */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-0 transition-transform duration-1000 ease-out opacity-[0.02]"
          style={{ 
            transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` 
          }}
        >
          <span className="text-[35vw] font-serif font-bold select-none leading-none">FELIS</span>
        </div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl transition-transform duration-500 ease-out"
           style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}>
        <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[9px] font-bold tracking-[0.3em] uppercase mb-10 rounded-sm shadow-sm">
          Volume 25 • No. 12
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif text-slate-900 mb-10 leading-[0.9] tracking-tighter">
          The Logic of <br/> 
          <span className="italic relative inline-block">
            Curiosity
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-slate-900/5 -z-10"></span>
          </span>
        </h1>

        <div className="w-16 h-[2px] bg-slate-900 mx-auto mb-10 opacity-20"></div>

        <p className="text-base md:text-lg text-slate-500 mb-14 max-w-xl mx-auto leading-relaxed font-light">
          고양이의 본능적 행동 양식과 인지 구조에 대한 현대적 해석. <br/>
          우리는 데이터와 관찰을 통해 보이지 않는 유대감을 증명합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a 
            href="#introduction" 
            className="group relative px-12 py-5 bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden"
          >
            <span className="relative z-10 transition-colors group-hover:text-slate-900">Begin Exploration</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="#chat" 
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-slate-900 transition-all flex items-center gap-3 group"
          >
            <span>Ask Researcher</span>
            <div className="w-8 h-[1px] bg-slate-200 group-hover:w-12 group-hover:bg-slate-900 transition-all"></div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-slate-900"></div>
      </div>
    </div>
  );
};

export default Hero;
