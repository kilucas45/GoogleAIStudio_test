
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-slate-400">
        <div className="col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-6 h-6 bg-slate-900 flex items-center justify-center text-white font-serif text-[10px]">F</div>
            <span className="text-sm font-serif font-bold tracking-widest uppercase text-slate-900">Feline Studies</span>
          </div>
          <p className="text-xs leading-loose max-w-xs">
            본 연구소는 고양이의 생물학적 다양성과 보존, 그리고 인간과의 조화로운 공존을 위한 학술적 가치를 탐구합니다.
          </p>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-6">Legal & Ethical</h4>
          <ul className="text-xs space-y-4">
            <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Protocol</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Academic Ethics</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Accessibility</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:text-right">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-6">Archives</h4>
          <div className="flex justify-start md:justify-end space-x-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-tighter">IG</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-tighter">TW</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-xs font-bold uppercase tracking-tighter">LI</a>
          </div>
          <div className="mt-8">
            <p className="text-[10px] font-medium tracking-tighter">
              © 2024 Institute of Feline Studies.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <p className="text-[10px] font-bold text-slate-200 uppercase tracking-[0.5em]">Knowledge • Preservation • Coexistence</p>
      </div>
    </footer>
  );
};

export default Footer;
