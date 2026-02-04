import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';

// ★ここにAPIキーを貼り付けてください
const API_KEY = "AIzaSyCQ5PNXK-3XIETHtV3U-B_zJMEHKoHgd8U"; 

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'こんにちは。Lumière Skinの専任コンシェルジュです。料金や痛みの不安など、何でもご相談ください。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!API_KEY) throw new Error("API Key is missing");

      // モデル: gemini-pro (安定版)
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
        あなたは高級脱毛サロン「Lumière Skin」のスタッフです。
        以下の情報のみを元に、短く丁寧に答えてください。
        料金: 全身1回19,800円、5回89,000円
        特徴: 痛くないSHR脱毛、銀座店
        質問: ${userMessage}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: '申し訳ございません。通信エラーが発生しました。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-200 font-sans">
          <div className="bg-[#BFA588] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <span className="font-medium tracking-wide text-sm">Lumière Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#4A4A4A] text-white rounded-tr-sm' 
                    : 'bg-white text-[#5D5D5D] rounded-tl-sm border border-stone-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-stone-100 shadow-sm">
                  <Loader2 className="animate-spin text-[#BFA588]" size={20} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="質問を入力..."
                className="flex-1 bg-stone-50 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-[#BFA588] outline-none text-[#4A4A4A]"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#BFA588] text-white p-2 rounded-full hover:bg-[#A88F75] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#BFA588] hover:bg-[#A88F75] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};
