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
          {/* Using a placeholder high-quality stock video of curtains/light to simulate the atmosphere */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-curtains-moving-in-the-wind-2268-large.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Overlays - Texture & Color adjustment */}
        <div className="absolute inset-0 bg-[#F9F8F6]/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F8F6]/90 via-transparent to-[#F9F8F6]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="absolute inset-0 z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center items-center h-full">
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-12 md:gap-24 md:ml-[10%]">
          
          {/* Main Copy */}
          <div className="flex flex-col items-center md:items-start">
            {/* Desktop Vertical Title */}
            <div className="hidden md:block vertical-text h-[500px]">
              <h2 className={`text-4xl lg:text-5xl font-mincho font-normal leading-extra-loose text-text tracking-widest whitespace-nowrap ${getAnimClass()}`}>
                もう脱毛で迷わない
              </h2>
              <h2 className={`text-4xl lg:text-5xl font-mincho font-light leading-extra-loose text-text tracking-widest whitespace-nowrap mt-10 ${getAnimClass()}`}>
                大人のための 美肌・オーダーメイド脱毛
              </h2>
            </div>

            {/* Mobile Title */}
            <div className="md:hidden text-center space-y-6 px-2 mb-8">
              <h2 className={`text-2xl font-mincho font-normal leading-relaxed text-text tracking-widest ${getAnimClass()}`}>
                <span className="phrase">もう脱毛で迷わない</span>
              </h2>
              <h2 className={`text-xl font-mincho font-light leading-relaxed text-text tracking-widest ${getAnimClass()}`}>
                <span className="phrase">大人のための</span><br/>
                <span className="phrase">美肌・オーダーメイド脱毛</span>
              </h2>
            </div>
          </div>

          {/* Sub Copy & CTA */}
          <div className={`text-center md:text-left md:pt-16 ${getAnimClass()}`}>
            <p className="font-sans font-light text-base md:text-lg leading-loose tracking-widest text-text-light mb-10">
              <span className="phrase">「予約が取れる」当たり前を、</span><span className="phrase">約束します。</span><br/><br className="hidden md:block" />
              <span className="phrase">丁寧なカウンセリングと、</span><br className="md:hidden" />
              <span className="phrase">あなただけの専任担当制サロン。</span><br/><br className="hidden md:block" />
              <span className="phrase">肌に、光と自信を。</span>
            </p>
            <Button variant="outline" onClick={onBook} className="border-[#4A4A4A] text-[#4A4A4A] hover:bg-[#4A4A4A] hover:text-white px-12 text-sm">
              初回限定トライアルを見る
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