import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';

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
      // 1. APIキーの取得 (Vite環境用)
      const API_KEY = "AIzaSyCQ5PNXK-3XIETHtV3U-B_zJMEHKoHgd8U";
      
      if (!API_KEY) {
        console.error("API Key not found. Check Cloudflare environment variables.");
        throw new Error("API Key is missing");
      }

      // 2. Geminiの初期化 (安定版 gemini-pro を指定)
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
        あなたは高級脱毛サロン「Lumière Skin（ルミエール・スキン）」の専任コンシェルジュです。
        以下のブランド情報を元に、お客様の質問に上品で、落ち着きがあり、安心感を与える丁寧な敬語で答えてください。

        【サロンコンセプト】
        - ブランド: Lumière Skin (ルミエール・スキン)
        - テーマ: Nuance & Transparency (光と透明感)
        - ターゲット: 質を重視する大人の女性

        【メニュー・価格】
        - 初回限定トライアル: 全身美肌脱毛 (顔・VIO含む) + イオン導入 → 2,980円 (税込)
        - 全身脱毛 (通常): 1回 19,800円 / 5回 89,000円
        - VIO単発: 6,600円
        - 入会金・事務手数料: 無料

        【特徴・強み】
        - 痛くないSHR脱毛（温かいマッサージのような感覚）
        - 予約が取りやすい（会員数制限システム）
        - 完全個室・専任担当制
        - 無理な勧誘は一切なし

        お客様の質問: ${userMessage}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: '申し訳ございません。現在アクセスが集中しているか、通信エラーが発生しました。時間をおいて再度お試しください。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-200 font-sans animate-fade-in-up">
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
                placeholder="ご質問を入力してください..."
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
        aria-label="チャットを開く"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};
