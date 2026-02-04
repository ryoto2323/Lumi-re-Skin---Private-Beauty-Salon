import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { ShieldCheck, Sparkles, Heart } from 'lucide-react';

export const Machine: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = 1 - (rect.bottom / (window.innerHeight + rect.height));
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffsetY(scrollProgress * 30);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id={SectionId.MACHINE} className="py-32 md:py-48 bg-transparent relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="font-eng text-accent tracking-[0.3em] text-xs block mb-6 uppercase">Quality & Hygiene</span>
            <h2 className="text-3xl md:text-5xl font-mincho font-light text-text tracking-widest leading-loose">
              当たり前を、<br/>
              最高峰の基準で。
            </h2>
          </div>
        </ScrollReveal>

        {/* Image Section - Arch mask & Material Integration */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full max-w-[420px] mx-auto mb-32">
            {/* Background Decorative Box - Material Sharing */}
            <div className="absolute -top-8 -right-8 w-full h-full bg-sand/30 rounded-t-[200px] z-0"></div>
            
            {/* Main Image with Arch Mask */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-[210px] shadow-2xl shadow-main/5 z-10">
              <img 
                src="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/b.png?raw=true" 
                alt="Quality Care" 
                className="w-full h-[120%] object-cover opacity-95 grayscale-[0.05]" 
                style={{ transform: `translateY(${offsetY * 0.3}px) scale(1.05)` }}
              />
              {/* Soft overlay at the bottom to blend with background */}
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Typography Overlap */}
            <div className="absolute -left-16 bottom-32 vertical-text z-20 hidden lg:block">
              <span className="font-eng text-[10px] tracking-[0.6em] text-accent/50 uppercase whitespace-nowrap">High Standard Aesthetics</span>
            </div>
            <div className="absolute -right-8 bottom-12 z-20">
               <span className="font-serif italic text-6xl text-main/30 select-none">Quality</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <ScrollReveal delay={0.3} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-white border border-sand flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-700">
               <ShieldCheck size={20} strokeWidth={1} />
            </div>
            <h3 className="font-mincho text-xl mb-6 text-text tracking-widest border-b border-sand pb-2">
               SHR無痛脱毛 × 認定脱毛士
            </h3>
            <p className="font-sans font-light text-sm text-text-light leading-loose opacity-80 text-justify md:text-center">
              最新のSHR方式は「熱い」感覚すらほぼありません。認定資格を持つプロが、あなたの毛質に合わせた精密な出力を設定します。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-white border border-sand flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-700">
               <Sparkles size={20} strokeWidth={1} />
            </div>
            <h3 className="font-mincho text-xl mb-6 text-text tracking-widest border-b border-sand pb-2">
               医療機関と同等の衛生管理
            </h3>
            <p className="font-sans font-light text-sm text-text-light leading-loose opacity-80 text-justify md:text-center">
              シーツ、ガウンの使い捨てはもちろん、施術パーツ毎の徹底した消毒を実施。完全個室の空気清浄に至るまで、妥協なき清潔をお約束します。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-white border border-sand flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-700">
               <Heart size={20} strokeWidth={1} />
            </div>
            <h3 className="font-mincho text-xl mb-6 text-text tracking-widest border-b border-sand pb-2">
               五感で感じるプライベート
            </h3>
            <p className="font-sans font-light text-sm text-text-light leading-loose opacity-80 text-justify md:text-center">
              厳選されたアロマ、ReFa製の高機能ドライヤー、オーガニックのハーブティー。すべては、忙しい日常を忘れる「大人の休息」のために。
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};