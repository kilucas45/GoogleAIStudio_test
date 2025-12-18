
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white font-serif text-lg">F</div>
          <span className="text-lg font-serif font-bold tracking-widest uppercase text-slate-900">Feline Studies</span>
        </div>
        <div className="hidden md:flex space-x-10 text-xs font-semibold tracking-widest uppercase text-slate-500">
          <a href="#hero" className="hover:text-slate-900 transition-colors">Archive</a>
          <a href="#introduction" className="hover:text-slate-900 transition-colors">Taxonomy</a>
          <a href="#gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
          <a href="#chat" className="hover:text-slate-900 transition-colors">Assistant</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
