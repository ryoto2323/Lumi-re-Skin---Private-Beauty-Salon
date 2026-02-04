import React from 'react';
import { SectionId } from '../constants';
import { Button } from './ui/Button';

interface HeroProps {
  onBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBook }) => {
  const getAnimClass = (delayClass: string = "") => "opacity-100 translate-y-0";

  return (
    <section id={SectionId.TOP} className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Video Background (Cinematograph effect) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/a.png?raw=true"
          className="w-full h-full object-cover opacity-80 scale-105 filter sepia-[0.1] contrast-[0.9]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-curtains-moving-in-the-wind-2268-large.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Overlays */}
        <div className="absolute inset-0 bg-[#F9F8F6]/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F8F6]/90 via-transparent to-[#F9F8F6]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="absolute inset-0 z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center items-center h-full">
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-12 md:gap-24 md:ml-[10%]">
          
          {/* Main Title - Vertical (Desktop) */}
          <div className="flex flex-col items-center md:items-start">
            <div className="hidden md:block vertical-text h-[500px]">
              <h2 className={`text-4xl lg:text-5xl font-mincho font-normal leading-extra-loose text-text tracking-widest whitespace-nowrap ${getAnimClass()}`}>
                もう脱毛で迷わない
              </h2>
              <h2 className={`text-4xl lg:text-5xl font-mincho font-light leading-extra-loose text-text tracking-widest whitespace-nowrap mt-10 ${getAnimClass()}`}>
                大人のための 美肌・オーダーメイド脱毛
              </h2>
            </div>

            {/* Main Title - Horizontal (Mobile) */}
            <div className="md:hidden text-center space-y-6 px-2 mb-12">
              <h2 className={`text-2xl font-mincho font-normal leading-relaxed text-text tracking-widest ${getAnimClass()}`}>
                もう脱毛で迷わない
              </h2>
              <h2 className={`text-lg font-mincho font-light leading-relaxed text-text tracking-widest ${getAnimClass()}`}>
                大人のための<br/>
                美肌・オーダーメイド脱毛
              </h2>
            </div>
          </div>

          {/* Sub Copy Area - Refined Typography */}
          <div className={`flex flex-col items-center md:items-start md:pt-16 ${getAnimClass()}`}>
            <div className="relative pl-6 md:pl-10 mb-14 space-y-4">
              {/* Vertical accent line */}
              <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-accent/40 hidden md:block"></div>
              
              <div className="group">
                <span className="font-eng text-[9px] tracking-[0.4em] text-accent block mb-1 uppercase opacity-60">Commitment</span>
                <p className="font-sans font-light text-sm md:text-base tracking-widest text-text-light leading-relaxed">
                  「予約が取れる」を当たり前に
                </p>
              </div>

              <div className="group">
                <span className="font-eng text-[9px] tracking-[0.4em] text-accent block mb-1 uppercase opacity-60">Personal</span>
                <p className="font-sans font-light text-sm md:text-base tracking-widest text-text-light leading-relaxed">
                  あなただけの専任担当制サロン
                </p>
              </div>

              <div className="pt-6 md:pt-8 group">
                <span className="font-eng text-[10px] tracking-[0.5em] text-accent block mb-2 uppercase font-medium">Philosophy</span>
                <p className="font-mincho text-xl md:text-2xl tracking-[0.2em] text-text leading-relaxed">
                  肌に光と自信を
                </p>
                {/* Decorative short underline for mobile */}
                <div className="h-[0.5px] w-12 bg-accent/30 mt-4 mx-auto md:hidden"></div>
              </div>
            </div>

            <Button 
              variant="outline" 
              onClick={onBook} 
              className="group border-text text-text hover:bg-text hover:text-white px-12 text-[11px] tracking-[0.3em] font-light transition-all duration-700"
            >
              TRIAL PLAN
              <span className="ml-3 opacity-60 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 z-20 ${getAnimClass()}`}>
        <span className="font-eng text-[10px] tracking-[0.5em] text-text uppercase ml-[0.5em]">Scroll</span>
        <div className="w-[1px] h-14 bg-text/20 relative overflow-hidden">
          <div className="absolute inset-0 w-full bg-text animate-scroll-line"></div>
        </div>
      </div>
    </section>
  );
};