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
          setOffsetY(scrollProgress * 50); // Adjust speed here
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id={SectionId.MACHINE} className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-[120%] bg-canvas/30 -skew-x-12 transform translate-x-1/2 transition-transform duration-75 ease-out" 
        style={{ transform: `translateX(50%) skewX(-12deg) translateY(${offsetY * -1.5}px)` }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="w-full md:w-1/2 group">
             <ScrollReveal className="relative aspect-[3/4] overflow-hidden rounded-t-full shadow-2xl">
                <img 
                  src="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/b.png?raw=true" 
                  alt="Quality Care" 
                  className="w-full h-[115%] object-cover opacity-95 transition-transform duration-100 ease-out" 
                  style={{ transform: `translateY(${offsetY * 0.5}px) scale(1.1)` }}
                />
                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply" />
            </ScrollReveal>
          </div>

          <div className="w-full md:w-1/2">
            <ScrollReveal>
              <span className="font-eng text-accent tracking-[0.3em] text-xs block mb-6 uppercase">Quality & Hygiene</span>
              <h2 className="text-2xl md:text-4xl font-mincho text-text tracking-widest mb-10 leading-relaxed">
                当たり前を、<br className="md:hidden"/>
                最高峰の基準で。
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center text-accent flex-shrink-0 transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                    <ShieldCheck size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="font-mincho text-lg mb-2">SHR無痛脱毛 × 認定脱毛士</h3>
                    <p className="font-sans font-light text-sm text-text-light leading-loose">
                      最新のSHR方式は「熱い」感覚すらほぼありません。認定資格を持つプロが、あなたの毛質に合わせた精密な出力を設定します。
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center text-accent flex-shrink-0 transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                    <Sparkles size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="font-mincho text-lg mb-2">医療機関と同等の衛生管理</h3>
                    <p className="font-sans font-light text-sm text-text-light leading-loose">
                      シーツ、ガウンの使い捨てはもちろん、施術パーツ毎の徹底した消毒を実施。完全個室の空気清浄に至るまで、妥協なき清潔をお約束します。
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center text-accent flex-shrink-0 transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                    <Heart size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="font-mincho text-lg mb-2">五感で感じるプライベート</h3>
                    <p className="font-sans font-light text-sm text-text-light leading-loose">
                      厳選されたアロマ、ReFa製の高機能ドライヤー、オーガニックのハーブティー。すべては、忙しい日常を忘れる「大人の休息」のために。
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};