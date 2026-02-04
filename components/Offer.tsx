import React from 'react';
import { SectionId, CAMPAIGN_PLAN } from '../constants';
import { Button } from './ui/Button';
import { CheckCircle2, Star } from 'lucide-react';

interface OfferProps {
  onBook: () => void;
}

export const Offer: React.FC<OfferProps> = ({ onBook }) => {
  return (
    <section id={SectionId.OFFER} className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-light text-text mb-4 font-mincho tracking-widest">
              まずは効果を実感してください
            </h2>
            <div className="inline-flex items-center gap-3 bg-[#F3F1EE] px-6 py-2 rounded-full border border-[#D8C6C6]/30">
              <Star className="w-3 h-3 text-[#BFA588] fill-current" />
              <p className="text-[#4A4A4A] font-light text-xs md:text-sm tracking-widest">
                初めての方限定・特別プラン
              </p>
              <Star className="w-3 h-3 text-[#BFA588] fill-current" />
            </div>
          </div>

          {/* Card */}
          <div className="relative bg-white shadow-2xl shadow-[#D8C6C6]/20 rounded-sm overflow-hidden border border-[#E6DDD3]">
            {/* Ribbon - Elegant Gold */}
            <div className="absolute top-0 right-0 bg-[#BFA588] text-white py-2 px-12 rotate-45 translate-x-[30%] translate-y-[50%] shadow-md z-20 font-light font-eng text-xs tracking-widest">
              SPECIAL
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center bg-[#FAFAF8] order-2 md:order-1">
                <div className="mb-10 border-b border-[#E6DDD3] pb-10">
                  <span className="inline-block border border-[#4A4A4A] text-[#4A4A4A] text-[10px] font-light px-3 py-1 rounded-sm mb-4 tracking-widest">
                    {CAMPAIGN_PLAN.limit}
                  </span>
                  <h3 className="text-xl md:text-3xl font-normal text-text font-mincho mb-4 leading-tight tracking-wide">
                    {CAMPAIGN_PLAN.name}
                  </h3>
                  <p className="text-text-light font-light text-sm leading-loose">{CAMPAIGN_PLAN.description}</p>
                </div>
                
                <div className="flex flex-col mb-12">
                  <div className="flex items-center gap-4 mb-2">
                     <span className="text-xs font-light text-text-light">通常価格</span>
                     <span className="text-text-light text-base line-through font-light font-eng">{CAMPAIGN_PLAN.originalPrice}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-light text-[#BFA588] font-eng tracking-tight">
                      {CAMPAIGN_PLAN.campaignPrice}
                    </span>
                    <span className="text-text font-light text-sm">
                      (税込)
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-12">
                   {['カウンセリング込', '無理な勧誘なし', '全額返金保証付き'].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-text font-light text-sm">
                       <CheckCircle2 className="text-[#BFA588] w-4 h-4 flex-shrink-0" strokeWidth={1} />
                       {item}
                     </div>
                   ))}
                </div>

                <Button size="xl" onClick={onBook} fullWidth variant="primary">
                  今すぐ予約する
                  <span className="block text-[10px] font-normal opacity-70 ml-4 font-sans">（残りわずか）</span>
                </Button>
              </div>

              <div className="relative h-64 md:h-auto order-1 md:order-2 overflow-hidden">
                 <img 
                  src="https://placehold.co/600x800/E6DDD3/4A4A4A?text=Lumiere+Skin" 
                  alt="Campaign Visual" 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                />
              </div>
            </div>
          </div>
          
          <p className="text-center text-[10px] text-text-light/60 mt-8 tracking-wide">
            ※お一人様1回限り。※未成年の方は親権者の同意が必要です。※効果には個人差があります。
          </p>
        </div>
      </div>
    </section>
  );
};