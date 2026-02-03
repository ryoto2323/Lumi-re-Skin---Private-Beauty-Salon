import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#4A4A4A]/60 backdrop-blur-sm transition-opacity duration-500" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg overflow-hidden bg-base shadow-2xl transition-all transform scale-100 opacity-100 border border-white/50 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-text/50 hover:text-accent transition-colors z-10"
        >
          <X size={24} strokeWidth={1} />
        </button>

        {step === 'form' ? (
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="font-eng text-accent tracking-[0.2em] text-xs block mb-2">Reservation</span>
              <h2 className="text-2xl font-mincho text-text tracking-widest">初回無料カウンセリング</h2>
              <p className="mt-4 text-sm font-sans text-accent border-b border-accent/30 inline-block pb-1">
                WEB限定・初回トライアル 2,980円
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-sans tracking-widest text-text mb-2">お名前</label>
                <input 
                  type="text" 
                  required
                  placeholder="山田 花子"
                  className="w-full bg-white border-b border-gray-300 px-4 py-3 text-text placeholder:text-gray-300 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest text-text mb-2">メールアドレス</label>
                <input 
                  type="email" 
                  required
                  placeholder="example@lumiere.com"
                  className="w-full bg-white border-b border-gray-300 px-4 py-3 text-text placeholder:text-gray-300 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest text-text mb-2">電話番号</label>
                <input 
                  type="tel" 
                  required
                  placeholder="090-1234-5678"
                  className="w-full bg-white border-b border-gray-300 px-4 py-3 text-text placeholder:text-gray-300 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest text-text mb-2">ご希望の店舗</label>
                <select className="w-full bg-white border-b border-gray-300 px-4 py-3 text-text focus:border-accent focus:outline-none transition-colors appearance-none rounded-none">
                  <option>銀座店</option>
                  {/* Future stores */}
                </select>
              </div>
              
              <div className="pt-6">
                <Button fullWidth type="submit" size="lg" variant="primary">
                  予約を確定する
                </Button>
                <p className="text-[10px] text-center text-gray-400 mt-4 font-sans font-light">
                  ご入力いただいた情報は、プライバシーポリシーに基づき厳重に管理いたします。
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-16 flex flex-col items-center text-center">
            <div className="mb-8 text-accent animate-bounce">
              <CheckCircle size={48} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-mincho text-text tracking-widest mb-4">ご予約ありがとうございます</h3>
            <p className="text-text/80 font-sans font-light leading-loose mb-10 text-sm">
              ご入力いただいたメールアドレスへ確認メールをお送りしました。<br/>
              当日、お会いできることを心より楽しみにしております。
            </p>
            <Button onClick={onClose} variant="outline">閉じる</Button>
          </div>
        )}
      </div>
    </div>
  );
};