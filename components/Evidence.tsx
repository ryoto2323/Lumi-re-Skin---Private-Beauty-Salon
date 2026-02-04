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
        // Only apply if visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffsetY(scrollProgress * 30); // Reduced speed for elegance
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id={SectionId.MACHINE} className="py-32 md:py-48 bg-transparent relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. Title (Top & Center) */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-eng text-accent tracking-[0.3em] text-xs block mb-6 uppercase">Quality & Hygiene</span>
            <h2 className="text-3xl md:text-5xl font-mincho font-light text-text tracking-widest leading-loose">
              当たり前を、<br/>
              最高峰の基準で。
            </h2>
          </div>
        </ScrollReveal>

        {/* 2. Image (Center & Smaller) */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full max-w-[320px] mx-auto aspect-[3/4] overflow-hidden rounded-sm shadow-xl shadow-[#D8C6C6]/20 mb-20">
            <img 
              src="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/b.png?raw=true" 
              alt="Quality Care" 
              className="w-full h-[115%] object-cover opacity-90 transition-transform duration-100 ease-out grayscale-[0.2]" 
              style={{ transform: `translateY(${offsetY * 0.5}px) scale(1.1)` }}
            />
          </div>
        </ScrollReveal>

        {/* 3. Description List (Bottom & Grid) */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          <ScrollReveal delay={0.3} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border border-[#E6DDD3] flex items-center justify-center text-[#BFA588] mb-6 shadow-sm group-hover:bg-[#BFA588] group-hover:text-white transition-colors duration-500">
               <ShieldCheck size={20} strokeWidth={1} />
            </div>
            <h3 className="font-mincho text-xl mb-6 text-text tracking-widest border-b border-[#E6DDD3] pb-2">
               SHR無痛脱毛 × 認定脱毛士
            </h3>
            <p className="font-sans font-light text-sm text-text-light leading-loose opacity-80 text-justify md:text-center">
              最新のSHR方式は「熱い」感覚すらほぼありません。認定資格を持つプロが、あなたの毛質に合わせた精密な出力を設定します。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border border-[#E6DDD3] flex items-center justify-center text-[#BFA588] mb-6 shadow-sm group-hover:bg-[#BFA588] group-hover:text-white transition-colors duration-500">
               <Sparkles size={20} strokeWidth={1} />
            </div>
            <h3 className="font-mincho text-xl mb-6 text-text tracking-widest border-b border-[#E6DDD3] pb-2">
               医療機関と同等の衛生管理
            </h3>
            <p className="font-sans font-light text-sm text-text-light leading-loose opacity-80 text-justify md:text-center">
              シーツ、ガウンの使い捨てはもちろん、施術パーツ毎の徹底した消毒を実施。完全個室の空気清浄に至るまで、妥協なき清潔をお約束します。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border border-[#E6DDD3] flex items-center justify-center text-[#BFA588] mb-6 shadow-sm group-hover:bg-[#BFA588] group-hover:text-white transition-colors duration-500">
               <Heart size={20} strokeWidth={1} />
            </div>
            <h3 className="font-mincho text-xl mb-6 text-text tracking-widest border-b border-[#E6DDD3] pb-2">
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