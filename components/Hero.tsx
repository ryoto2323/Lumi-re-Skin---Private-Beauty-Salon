import React, { useEffect, useState } from 'react';
import { SectionId } from '../constants';
import { Button } from './ui/Button';

interface HeroProps {
  onBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBook }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // マウント後にアニメーションを開始するためのフラグ
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 基本のトランジションクラス
  const transitionBase = "transition-all duration-1000 ease-out";
  
  // 表示状態に応じたクラス（不透明度と位置）
  const getAnimClass = (delayClass: string = "") => 
    `${transitionBase} ${delayClass} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section id={SectionId.TOP} className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/a.png?raw=true" 
          alt="Sunlight on skin" 
          className="w-full h-full object-cover opacity-90 animate-[ken-burns_20s_ease-out_infinite_alternate]"
          style={{ transformOrigin: 'center center' }}
        />
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-base/40 via-transparent to-base/40"></div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>

      <div className="absolute inset-0 z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center items-center md:items-start h-full">
        {/* Mobile: Standard flex-col (Title on top) / Desktop: flex-row */}
        <div className="relative md:ml-[10%] mt-10 md:mt-0 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
          
          {/* Main Copy - Vertical on Desktop / Centered on Mobile */}
          <div className="flex flex-col items-center md:items-start">
            {/* Desktop Vertical Title */}
            <div className="hidden md:block vertical-text h-[450px]">
              <h2 className={`text-3xl lg:text-4xl font-mincho font-medium leading-extra-loose text-text tracking-widest whitespace-nowrap ${getAnimClass('delay-300')}`}>
                もう脱毛で迷わない
              </h2>
              <h2 className={`text-3xl lg:text-4xl font-mincho font-normal leading-extra-loose text-text tracking-widest whitespace-nowrap mt-8 ${getAnimClass('delay-500')}`}>
                大人のための 美肌・オーダーメイド脱毛
              </h2>
            </div>

            {/* Mobile Title - Standard horizontal layout */}
            <div className="md:hidden text-center space-y-4 px-4 mb-8">
              <h2 className={`text-xl font-mincho font-medium leading-relaxed text-text tracking-widest ${getAnimClass()}`}>
                <span className="phrase">もう脱毛で迷わない</span>
              </h2>
              <h2 className={`text-lg font-mincho font-normal leading-relaxed text-text tracking-widest ${getAnimClass('delay-200')}`}>
                <span className="phrase">大人のための</span><br/>
                <span className="phrase">美肌・オーダーメイド脱毛</span>
              </h2>
            </div>
          </div>

          {/* Sub Copy & CTA */}
          <div className={`md:pt-16 text-center md:text-left px-4 md:px-0 ${getAnimClass('delay-700')}`}>
            <p className="font-sans font-light text-sm md:text-base leading-airy tracking-airy text-text mb-12">
              <span className="phrase">「予約が取れる」当たり前を、</span><span className="phrase">約束します。</span><br/><br className="hidden md:block" />
              <span className="phrase">丁寧なカウンセリングと、</span><br className="md:hidden" />
              <span className="phrase">あなただけの専任担当制サロン。</span><br/><br className="hidden md:block" />
              <span className="phrase">肌に、光と自信を。</span>
            </p>
            <Button variant="outline" onClick={onBook} className="bg-white/50 backdrop-blur-sm border-text text-text hover:bg-text hover:text-white px-12">
              初回限定トライアルを見る
            </Button>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 z-20 ${getAnimClass('delay-1000')}`}>
        <span className="font-eng text-[8px] tracking-[0.5em] text-text uppercase ml-[0.5em]">Scroll</span>
        <div className="w-[1px] h-14 bg-text/20 relative overflow-hidden">
          <div className="absolute inset-0 w-full bg-accent animate-scroll-line"></div>
        </div>
      </div>
    </section>
  );
};