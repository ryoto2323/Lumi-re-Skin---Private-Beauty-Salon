import React, { useState } from 'react';
import { X, CheckCircle, ChevronRight, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', tel: '', store: '銀座店', date: '', time: ''
  });

  if (!isOpen) return null;

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#4A4A4A]/60 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-xl bg-canvas shadow-2xl overflow-hidden border border-white/30 animate-fade-in-up flex flex-col max-h-[90vh]">
        <button onClick={onClose} className="absolute right-6 top-6 text-text/40 hover:text-accent transition-colors z-10">
          <X size={24} strokeWidth={1} />
        </button>

        <div className="p-8 md:p-12 overflow-y-auto">
          {step < 4 && (
            <div className="mb-10">
              <div className="flex justify-between items-center max-w-xs mx-auto mb-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-eng border transition-all duration-500 ${
                        step >= i 
                          ? 'bg-accent border-accent text-white' 
                          : 'bg-transparent border-accent/20 text-accent/40'
                      }`}
                    >
                      {i}
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-[1px] bg-accent/20 w-full max-w-xs mx-auto -mt-6 mb-8 relative z-[-1]">
                 <div 
                   className="h-full bg-accent transition-all duration-500"
                   style={{ width: `${((step - 1) / 2) * 100}%` }}
                 />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fade-in">
              <div className="bg-red-50 border border-red-100 p-3 rounded-sm mb-8 flex items-start gap-3">
                 <AlertCircle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                 <p className="text-xs text-red-800 leading-relaxed">
                   現在、ご予約が大変混み合っております。<br/>
                   ご希望の日時がお決まりでしたら、お早めの確保をおすすめいたします。
                 </p>
              </div>

              <h2 className="text-xl font-mincho text-center mb-8 tracking-widest">お客様情報の入力</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs text-text/60 ml-1">お名前 <span className="text-red-400">*</span></label>
                  <input 
                    placeholder="例）山田 花子" 
                    className="w-full bg-white border border-gray-200 p-4 focus:border-accent outline-none transition-colors rounded-sm" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-text/60 ml-1">メールアドレス <span className="text-red-400">*</span></label>
                  <input 
                    placeholder="example@lumiere-skin.jp" 
                    type="email"
                    className="w-full bg-white border border-gray-200 p-4 focus:border-accent outline-none transition-colors rounded-sm" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="pt-4">
                  <Button fullWidth onClick={nextStep} disabled={!formData.name || !formData.email}>
                    次へ進む <ChevronRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-mincho text-center mb-8 tracking-widest">ご予約内容の選択</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                   <label className="text-xs text-text/60 ml-1">ご希望の店舗</label>
                  <select 
                    className="w-full bg-white border border-gray-200 p-4 outline-none appearance-none rounded-sm"
                    value={formData.store}
                    onChange={e => setFormData({...formData, store: e.target.value})}
                  >
                    <option>銀座店</option>
                    <option disabled>表参道店（2025年春オープン予定）</option>
                  </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs text-text/60 ml-1">ご希望日</label>
                  <input 
                    type="date"
                    className="w-full bg-white border border-gray-200 p-4 outline-none rounded-sm"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" fullWidth onClick={prevStep}>戻る</Button>
                  <Button fullWidth onClick={nextStep} disabled={!formData.date}>空き状況を確認</Button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-mincho text-center mb-8 tracking-widest">入力内容の最終確認</h2>
              <div className="bg-white/50 border border-gray-100 p-8 rounded-sm mb-8 space-y-4 text-sm shadow-sm">
                <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                  <span className="text-text-light text-xs">お名前</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                  <span className="text-text-light text-xs">店舗</span>
                  <span className="font-medium">{formData.store}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-text-light text-xs">ご希望日</span>
                  <span className="font-medium">{formData.date}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" fullWidth onClick={prevStep}>戻る</Button>
                <Button variant="primary" fullWidth onClick={handleSubmit} className="bg-accent text-white hover:bg-[#A88F75]">
                  予約を確定する
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={40} className="text-accent" strokeWidth={1} />
              </div>
              <h2 className="text-2xl font-mincho mb-4 tracking-widest">ご予約を承りました</h2>
              <p className="text-sm font-sans font-light leading-loose text-text mb-12">
                この度はLumière Skinをお選びいただき、<br/>誠にありがとうございます。<br/><br/>
                数分以内にご入力いただいたメールアドレスへ<br/>
                <span className="font-medium">予約確定メール</span>をお送りいたします。
              </p>
              <Button onClick={onClose} variant="outline" fullWidth>トップページへ戻る</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};