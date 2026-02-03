import React from 'react';
import { SectionId, CAMPAIGN_PLAN } from '../constants';
import { Button } from './ui/Button';
import { CheckCircle2, Star } from 'lucide-react';

interface OfferProps {
  onBook: () => void;
}

export const Offer: React.FC<OfferProps> = ({ onBook }) => {
  return (
    <section id={SectionId.OFFER} className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4 font-serif">
              まずは効果を実感してください
            </h2>
            <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-1 rounded-full">
              <Star className="w-4 h-4 text-rose-500 fill-current" />
              <p className="text-rose-600 font-bold text-sm md:text-lg">
                初めての方限定！人気No.1コース
              </p>
              <Star className="w-4 h-4 text-rose-500 fill-current" />
            </div>
          </div>

          {/* Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-sky-100 group hover:border-sky-200 transition-colors duration-300">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-rose-500 text-white py-1.5 md:py-2 px-10 md:px-12 rotate-45 translate-x-[30%] translate-y-[50%] shadow-md z-20 font-bold text-xs md:text-sm tracking-wider">
              SPECIAL
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-12 flex flex-col justify-center bg-slate-50/50 order-2 md:order-1">
                <div className="mb-6 md:mb-8 border-b border-slate-200 pb-6 md:pb-8">
                  <span className="inline-block bg-sky-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded mb-2 md:mb-3">
                    {CAMPAIGN_PLAN.limit}
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-slate-800 font-serif mb-3 leading-tight">
                    {CAMPAIGN_PLAN.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{CAMPAIGN_PLAN.description}</p>
                </div>
                
                <div className="flex flex-col mb-8">
                  <div className="flex items-center gap-2 mb-1">
                     <span className="text-xs md:text-sm font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded">通常価格</span>
                     <span className="text-slate-400 text-sm md:text-base line-through font-bold font-sans">{CAMPAIGN_PLAN.originalPrice}</span>
                  </div>
                  <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="text-4xl md:text-6xl font-bold text-rose-500 font-serif tracking-tighter">
                      {CAMPAIGN_PLAN.campaignPrice}
                    </span>
                    <span className="text-rose-500 font-bold text-sm md:text-lg">
                      (税込)
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                   {['カウンセリング込', '無理な勧誘なし', '全額返金保証付き'].map((item, i) => (
                     <div key={i} className="flex items-center gap-2 text-slate-700 font-medium text-sm md:text-base">
                       <CheckCircle2 className="text-sky-500 w-5 h-5 flex-shrink-0" />
                       {item}
                     </div>
                   ))}
                </div>

                <Button size="xl" onClick={onBook} fullWidth className="shadow-lg shadow-rose-200 hover:shadow-xl hover:scale-[1.02]">
                  今すぐ980円で予約する
                  <span className="block text-[10px] font-normal opacity-80 ml-2">（残り3枠）</span>
                </Button>
              </div>

              <div className="relative h-56 md:h-auto order-1 md:order-2 overflow-hidden">
                 <img 
                  src="https://placehold.co/600x800/87CEEB/FFFFFF?text=Campaign" 
                  alt="Campaign Visual" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6 md:hidden">
                    <p className="text-white font-serif font-bold text-xl drop-shadow-md">WEB限定キャンペーン</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-[10px] md:text-xs text-slate-400 mt-4 md:mt-6">
            ※お一人様1回限り。※未成年の方は親権者の同意が必要です。※効果には個人差があります。
          </p>
        </div>
      </div>
    </section>
  );
};