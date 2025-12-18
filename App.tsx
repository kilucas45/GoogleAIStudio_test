
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Gallery from './components/Gallery';
import MeowChat from './components/MeowChat';
import CatFact from './components/CatFact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-200">
      <Navbar />
      
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>

        <section id="facts" className="py-16 px-4 bg-slate-50 border-y border-slate-100">
          <CatFact />
        </section>

        <section id="introduction" className="py-24 px-4 max-w-6xl mx-auto">
          <Introduction />
        </section>

        <section id="gallery" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-16 text-slate-800 tracking-tight">
              Visual Archive
            </h2>
            <Gallery />
          </div>
        </section>

        <section id="chat" className="py-24 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Research Assistant</h2>
              <p className="text-slate-500 max-w-md mx-auto">고양이 행동 및 생물학에 관한 질의응답을 제공하는 AI 시스템입니다.</p>
            </div>
            <MeowChat />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
