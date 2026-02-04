import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai"; // 標準SDKに変更
import { Message, SectionId } from '../types';

const SUGGESTIONS = [
  "料金プランについて",
  "痛みはありますか？",
  "予約方法を教えて",
  "店舗の場所は？"
];

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'こんにちは。Lumière Skinのコンシェルジュでございます。お肌のお悩みやプランについて、どのようなことでもご相談くださいませ。' }
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

  // Context-aware greeting trigger
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      
      const machineSection = document.getElementById(SectionId.MACHINE)?.offsetTop || 0;
      const menuSection = document.getElementById(SectionId.MENU)?.offsetTop || 0;
      const accessSection = document.getElementById(SectionId.ACCESS)?.offsetTop || 0;

      let contextMessage = '';

      if (scrollY >= menuSection - height / 2 && scrollY < accessSection) {
        contextMessage = '料金プランやコースについて、ご不明な点はございませんか？お客様に最適なプランをご提案させていただきます。';
      } else if (scrollY >= machineSection - height / 2 && scrollY < menuSection) {
        contextMessage = '当サロンの脱毛機や施術の痛みについて、気になることはございますか？';
      } else if (scrollY >= accessSection - height / 2) {
        contextMessage = '店舗の場所やアクセス方法について、ご案内いたしましょうか？';
      }

      if (contextMessage) {
        setMessages([{ role: 'model', text: `こんにちは。${contextMessage}` }]);
      }
    }
  }, [isOpen, hasOpened]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage = text;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // 1. APIキーのチェック（Vite形式）
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        console.error("API Key is missing. Check Cloudflare settings.");
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'model', text: '申し訳ございません。現在AIシステムメンテナンス中でございます（APIキー設定エラー）。恐れ入りますが、WEB予約またはLINEにてお問い合わせくださいませ。' }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      // 2. モデルの初期化 (gemini-1.5-flash-latest を指定)
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash-latest",
        systemInstruction: `
          あなたは高級脱毛サロン「Lumière Skin（ルミエール・スキン）」の専任コンシェルジュです。
          以下のブランド情報を元に、お客様の質問に**「上品で、落ち着きがあり、安心感を与える丁寧な敬語」**で答えてください。
          
          【サロンコンセプト】
          - ブランド: Lumière Skin (ルミエール・スキン)
          - テーマ: Nuance & Transparency（光と透明感）
          - ターゲット: 質を重視する大人の女性
          
          【メニュー・価格】
          - 初回限定トライアル: 全身美肌脱毛（顔・VIO含む）+ イオン導入 → 2,980円（税込）
          - 全身脱毛（通常）: 1回 19,800円 / 5回 89,000円
          - VIO単発: 6,600円
          - 入会金・事務手数料: 無料
          
          【強み】
          - 痛くないSHR方式
          - イオン導入で美肌効果
          - 完全個室・予約が取れる
          
          【回答のルール】
          - エレガントな言葉遣いを徹底してください。
          - 予約を促す際は、強引にならず「よろしければ、無料カウンセリングにて詳しくお肌の状態を拝見できればと存じます」と優しく案内してください。
          - 回答は長すぎず、スマートフォンで読みやすい長さにまとめてください。
        `
      });

      // 3. メッセージ送信
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const responseText = response.text();

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: '申し訳ございません。通信エラーが発生いたしました。もう一度お試しください。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] md:w-[360px] flex flex-col overflow-hidden bg-white shadow-2xl rounded-2xl ring-1 ring-black/5 transition-all animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#4A4A4A] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-accent" />
              <span className="font-eng tracking-widest text-sm">Lumière Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
              <X size={18} strokeWidth={1} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto bg-[#FAFAF8] p-5">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-6 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] px-5 py-4 text-sm leading-loose shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#4A4A4A] text-white rounded-t-lg rounded-bl-lg' 
                      : 'bg-white text-[#4A4A4A] rounded-t-lg rounded-br-lg border border-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white rounded-t-lg rounded-br-lg border border-gray-100 px-5 py-4 shadow-sm">
                  <Loader2 className="animate-spin text-[#BFA588]" size={18} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div className="bg-white px-4 pt-2 pb-0 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-2 pb-2">
              {SUGGESTIONS.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(suggestion)}
                  disabled={isLoading}
                  className="inline-block px-3 py-1.5 bg-[#FAFAF8] border border-[#BFA588]/20 rounded-full text-xs text-[#4A4A4A] hover:bg-[#BFA588] hover:text-white transition-colors disabled:opacity-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 bg-white p-4">
            <div className="flex items-center gap-2 border-b border-gray-200 px-2 py-2 focus-within:border-[#BFA588] transition-colors">
              <input
                className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-gray-300 text-[#4A4A4A]"
                placeholder="メッセージを入力..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading}
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="p-2 text-[#BFA588] hover:text-[#4A4A4A] transition-colors disabled:text-gray-200"
              >
                <Send size={18} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-[#4A4A4A] text-white' : 'bg-[#BFA588] text-white hover:bg-[#A88F75]'
        }`}
      >
        {isOpen ? <X size={24} strokeWidth={1} /> : <MessageCircle size={24} strokeWidth={1} />}
      </button>
    </div>
  );
};
