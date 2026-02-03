import React from 'react';
import { SectionId } from '../constants';
import { Button } from './ui/Button';

interface HeroProps {
  onBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBook }) => {
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
        <div className="relative md:ml-[10%] mt-20 md:mt-0 flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-24">
          
          {/* Main Copy - Vertical or Centered based on screen */}
          <div className="hidden md:block vertical-text h-[400px]">
            <h2 className="text-3xl lg:text-4xl font-mincho font-medium leading-loose text-text tracking-widest whitespace-nowrap animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              もう脱毛で迷わない。
            </h2>
            <h2 className="text-3xl lg:text-4xl font-mincho font-medium leading-loose text-text tracking-widest whitespace-nowrap mt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              大人のための、美肌・オーダーメイド脱毛。
            </h2>
          </div>

           {/* Mobile Copy */}
           <div className="md:hidden text-center space-y-6">
            <h2 className="text-xl font-mincho font-medium leading-relaxed text-text tracking-widest animate-fade-in-up">
              もう脱毛で迷わない。<br/>
              大人のための、<br/>美肌・オーダーメイド脱毛。
            </h2>
          </div>

          {/* Sub Copy & CTA */}
          <div className="md:pt-12 text-center md:text-left animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="font-sans font-light text-sm md:text-base leading-loose tracking-widest text-text mb-10">
              「予約が取れる」当たり前を約束します。<br/>
              丁寧なカウンセリングとあなただけの専任担当制サロン<br/>
              肌に、光と自信を
            </p>
            <Button variant="outline" onClick={onBook} className="bg-white/50 backdrop-blur-sm border-text text-text hover:bg-text hover:text-white">
              初回限定トライアルを見る
            </Button>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="font-eng text-xs tracking-[0.2em] text-text">SCROLL</span>
        <div className="w-[1px] h-12 bg-text"></div>
      </div>
    </section>
  );
};