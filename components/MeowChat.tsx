
import React, { useState, useRef, useEffect } from 'react';
import { chatWithMeowBot } from '../services/gemini';
import { ChatMessage } from '../types';

const MeowChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하십니까. 고양이 연구소 어시스턴트입니다. 특정 개체의 생물학적 특징이나 학술적 자료가 필요하시면 말씀해 주십시오.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = await chatWithMeowBot([], input);
    
    setMessages(prev => [...prev, { role: 'model', text: response || '통신 장애로 인해 답변을 생성할 수 없습니다.' }]);
    setIsTyping(false);
  };

  return (
    <div className="bg-white border border-slate-200 shadow-2xl flex flex-col h-[600px]">
      <div className="bg-white border-b border-slate-100 p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white font-serif italic text-xl">A</div>
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-900">Research Terminal</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Status: Authorized Connection</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow p-8 overflow-y-auto space-y-6 bg-slate-50/20"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] px-6 py-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-slate-900 text-white font-medium' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-6 py-4 border border-slate-100 flex space-x-2 items-center">
              <span className="text-[10px] text-slate-400 font-bold animate-pulse uppercase">Processing query...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100 flex space-x-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="데이터 조회를 위해 질의를 입력하십시오..."
          className="flex-grow bg-slate-50 border border-slate-100 px-6 py-4 text-sm focus:bg-white focus:border-slate-900 outline-none transition-all placeholder:text-slate-300"
        />
        <button 
          onClick={handleSend}
          disabled={isTyping}
          className="bg-slate-900 text-white px-8 text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MeowChat;
